AIM.operations = {
	Verkeerslichten: function(id) {
		/** assign this with AIM.ref.Verkeerslichten(id) */
		Object.assign (this, AIM.ref[id]);
		this.setStand = function (stand) {
			/** loop all verkeerslicht and setStand to stand */
			for (var i = 0, verkeerslicht, c = this.Verkeerslicht; verkeerslicht = c[i] ; i++) {
				Object.assign(verkeerslicht, AIM.Verkeerslichten[0].Verkeerslicht[i]);
				verkeerslicht.rioConn = AIM.rio[verkeerslicht.rio];
				clearTimeout(verkeerslicht.to);
				switch (stand) {
					case 'rood':
					verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGroen, RIO.OFF);
					verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGeel, RIO.ON);
					verkeerslicht.rioConn.digitalWrite(verkeerslicht.doRood, RIO.OFF);
					verkeerslicht.to = setTimeout(function (verkeerslicht) {
						verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGroen, RIO.OFF);
						verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGeel, RIO.OFF);
						verkeerslicht.rioConn.digitalWrite(verkeerslicht.doRood, RIO.ON);
						verkeerslicht.stand = 'rood';
					}, 3000, verkeerslicht);
					verkeerslicht.stand = 'geel';
					break;
					case 'groen':
					verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGroen, RIO.ON);
					verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGeel, RIO.OFF);
					verkeerslicht.rioConn.digitalWrite(verkeerslicht.doRood, RIO.OFF);
					verkeerslicht.stand = 'groen';
					break;
					case 'gedoofd':
					verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGroen, RIO.OFF);
					verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGeel, RIO.OFF);
					verkeerslicht.rioConn.digitalWrite(verkeerslicht.doRood, RIO.OFF);
					verkeerslicht.stand = 'gedoofd';
					break;
					case 'geel_knipperen':
					verkeerslicht.geel_knipperen = RIO.OFF;
					(function (verkeerslicht) {
						verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGroen, RIO.OFF);
						verkeerslicht.rioConn.digitalWrite(verkeerslicht.doGeel, verkeerslicht.geel_knipperen ^= 1);
						verkeerslicht.rioConn.digitalWrite(verkeerslicht.doRood, RIO.OFF);
						verkeerslicht.to = setTimeout(arguments.callee, 1000, verkeerslicht);
					})(verkeerslicht);
					verkeerslicht.stand = 'geel_knipperen';
					break;
				}
			}
		}
	}
};
