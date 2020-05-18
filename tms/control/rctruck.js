console.log("Truck 1.0.0");
const piblaster = require('pi-servo-blaster.js');
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const start = function (data) {
	if (data.exec) for (var name in data.exec) {
		//if (name in global){
		//console.log(name,data.exec[name],global[name]);
		global[name].apply(this, data.exec[name]);
		//console.log('done',name,data.exec[name],global[name]);
		//}
	}
	if (data.servo) for (var name in data.servo) {
		console.log(name, data.servo[name]);
		piblaster.setServoPwm(name, angleToPercent(data.servo[name]) + "%");
	}

	if (data.set) for (var pinNr in data.set) {
		mcp.digitalWrite(pinNr, data.set[pinNr] ? mcp.HIGH : mcp.LOW);
	}

	if (data.knipperlinks == 'start') knipperLinks.start();
	if (data.knipperlinks == 'stop') knipperLinks.stop();
	if (data.knipperrechts == 'start') knipperRechts.start();
	if (data.knipperrechts == 'stop') knipperRechts.stop();

	// if (data.deviceorientation) {
	//     var offset=5;
	//     if (data.deviceorientation.beta<-offset && !knipperLinks.on)knipperLinks.start();
	//     if (data.deviceorientation.beta>-offset && knipperLinks.on)knipperLinks.stop();
	//     if (data.deviceorientation.beta>offset && !knipperRechts.on)knipperRechts.start();
	//     if (data.deviceorientation.beta<offset && knipperRechts.on)knipperRechts.stop();
	// }

	// if ('flash' in data){
	// 	if (data.flash)startFlash();
	// 	else stopFlash();
	// }

	// If incoming data is &gt; 2 send a signal to pin 17
	// Set GPIO pin 17 to a PWM of 24%
	// Truns the Servo to it's right

	// if (Number(data)>2){
	// 	sv1.setDegree(0); // 0 - 180
	// 	//piblaster.setPwm(17, 0.24);
	// }

	// If incoming data is &gt; 2 send a signal to pin 17
	// Set GPIO pin 17 to a PWM of 6%
	// Truns the Servo to it's left
	// if (Number(data)<(-2)){
	// 	sv1.setDegree(180); // 0 - 180
	// 	//piblaster.setPwm(17, 0.06);
	// }

	// If incoming data is &gt; 2 send a signal to pin 17
	// Set GPIO pin 17 to a PWM of 15%
	// Truns the Servo to it's center position
	// if (Number(data)==0){
	// 	sv1.setDegree(100); // 0 - 180
	// 	//piblaster.setPwm(17, 0.15);
	// }

};
var MCP23017 = require('node-mcp23017');
var mcp = new MCP23017({
	address: 0x20, //all address pins pulled low
	device: '/dev/i2c-1', // Model B
	debug: false
});

for (var i = 0; i < 16; i++) mcp.pinMode(i, mcp.OUTPUT);
// mcp.digitalWrite(8, mcp.HIGH);
//mcp.digitalWrite(7, mcp.HIGH);


var LED_R = new Gpio(16, 'out'); //use GPIO pin 4, and specify that it is output
var LED_Y = new Gpio(20, 'out'); //use GPIO pin 4, and specify that it is output
var LED_G = new Gpio(21, 'out'); //use GPIO pin 4, and specify that it is output

startBlink = function () {
	blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms
}

function blinkLED() { //function to start blinking
	if (LED_R.readSync() === 0) { //check the pin state, if the state is 0 (or off)
		LED_R.writeSync(1); //set pin state to 1 (turn LED on)
	}
	else if (LED_Y.readSync() === 0) { //check the pin state, if the state is 0 (or off)
		LED_Y.writeSync(1); //set pin state to 1 (turn LED on)
	}
	else if (LED_G.readSync() === 0) { //check the pin state, if the state is 0 (or off)
		LED_G.writeSync(1); //set pin state to 1 (turn LED on)
	}
	else {
		LED_R.writeSync(0); //set pin state to 0 (turn LED off)
		LED_Y.writeSync(0); //set pin state to 0 (turn LED off)
		LED_G.writeSync(0); //set pin state to 0 (turn LED off)
		clearInterval(blinkInterval); // Stop blink intervals
	}
}

function endBlink() { //function to stop blinking
	clearInterval(blinkInterval); // Stop blink intervals
	LED_R.writeSync(0); // Turn LED off
	LED_R.unexport(); // Unexport GPIO to free resources
	LED_Y.writeSync(0); // Turn LED off
	LED_Y.unexport(); // Unexport GPIO to free resources
	LED_G.writeSync(0); // Turn LED off
	LED_G.unexport(); // Unexport GPIO to free resources
}

knipper = function (pins) {
	this.pins = pins;
	this.toggle = 0;
	this.cnt = 0;
	this.start = function () {
		//console.log(this.pins,this.toggle);
		this.on = true;
		this.cnt++;
		for (var i = 0, p; p = this.pins[i]; i++) mcp.digitalWrite(p, this.toggle);
		this.toggle ^= 1;
		if (this.dostop && this.cnt > 5) {
			this.dostop = 0;
			this.toggle = 0;
			this.cnt = 0;
			this.on = false;
			clearTimeout(this.to);
			return;
		}
		this.to = setTimeout(this.start.bind(this), 500);
	}
	this.stop = function () {
		//for (var i=0,p;p=this.pins[i];i++)mcp.digitalWrite(p, 1);
		this.dostop = 1;
		//clearTimeout(this.to);
	}
	//this.stop();
}

for (var i = 0; i < 16; i++) mcp.digitalWrite(i, 1);
//geel boven 8,9,10,11,12
var knipperLinks = new knipper([3]);
var knipperRechts = new knipper([7]);
//knipperLinks.start();
//knipperRechts.start();


flashStat = 0;
flashPin = flashPinStart = 8;
flashPinEnd = 13;
toFlash = null;
//flashToggle=0;

doflash = function (type, state) {
	if (type == 4) {
		clearTimeout(global.toFlash4);
		var onoff4 = { 0: [3, 5, 7], 1: [4, 6] }
		if (state == 0) {
			//clearTimeout(toFlash4);
			for (var i = 3; i <= 7; i++) mcp.digitalWrite(i, 1);
			return;
		}
		global.flashToggle4 = global.flashToggle4 || 0;
		var off = onoff4[global.flashToggle4];
		var on = onoff4[global.flashToggle4 ^= 1];
		for (var i = 0, p; p = off[i]; i++) mcp.digitalWrite(p, 1);
		for (var i = 0, p; p = on[i]; i++) mcp.digitalWrite(p, 0);
		global.toFlash4 = setTimeout(doflash, 200, 4);
	}
	if (type == 2) {
		clearTimeout(global.toFlash2);
		var onoff2 = { 0: [9], 1: [12] }
		if (state == 0) {
			//clearTimeout(toFlash4);
			for (var i = 0, p; p = onoff2[i]; i++) mcp.digitalWrite(p, 1);
			return;
		}
		global.flashToggle2 = global.flashToggle2 || 0;
		var off = onoff2[global.flashToggle2 || 0];
		var on = onoff2[global.flashToggle2 ^= 1];
		for (var i = 0, p; p = off[i]; i++) mcp.digitalWrite(p, 1);
		for (var i = 0, p; p = on[i]; i++) mcp.digitalWrite(p, 0);
		global.toFlash2 = setTimeout(doflash, 100, 2);
	}
	if (type == 1) {
		clearTimeout(global.toFlash1);
		if (state == 0) {
			mcp.digitalWrite(flashPin, 1);
			return;
		}
		mcp.digitalWrite(flashPin++, 1);
		if (flashPin > flashPinEnd) flashPin = flashPinStart;
		mcp.digitalWrite(flashPin, 0);
		global.toFlash1 = setTimeout(doflash, 100, 1);
	}
}


flash = function (flashType) {
	clearTimeout(toFlash);
	//console.log(global.flashType,flashType);
	if (flashType != undefined) {
		for (var i = flashPinStart; i <= flashPinEnd; i++) mcp.digitalWrite(i, 1);
		global.flashType = flashType;
	}
	switch (global.flashType = flashType || global.flashType) {
		case 0:
			return;
		case 1:
			mcp.digitalWrite(flashPin++, 1);
			if (flashPin > flashPinEnd) flashPin = flashPinStart;
			mcp.digitalWrite(flashPin, 0);
			toFlash = setTimeout(flash, 100);
			break;
		case 2:
			var onoff = { 0: [3], 1: [7] }
			global.flashToggle = global.flashToggle || 0;
			var off = onoff[global.flashToggle || 0];
			var on = onoff[global.flashToggle ^= 1];
			for (var i = 0, p; p = off[i]; i++) mcp.digitalWrite(p, 1);
			for (var i = 0, p; p = on[i]; i++) mcp.digitalWrite(p, 0);
			toFlash = setTimeout(flash, 100);
			break;
		case 3:
			break;
	}
	//if(this.flashType==0) return clearTimeout(toFlash);


}
flash(0);
startBlink();


function angleToPercent(angle) {
	return Math.floor((angle / 180) * 100);
}
piblaster.setServoPwm("P1-12", angleToPercent(100) + "%");

//start({ exec: { doflash: [1, this.on ^= 1] } });

// pos = 40;
// setInterval(function () {
// 	start({ servo: { ['P1-12']: pos } });
// 	if (pos > 150) pos = 40; else pos += 20;
// }, 3000);

module.exports = {
	setServo: function(address,pos) {
        console.log('MOVE',address,pos);
		piblaster.setServoPwm(address, angleToPercent(pos) + "%");
	}
}

//module.setServo("P1-12", 70);
