// require('@aliconnect/node/lib/js/def.js');
// require('./webroot/js/api.js');
// Object.assign(aim, require('./webroot/api.json'));
// aim.secret = require('./secret.json');
// console.log('start');
tstep = 5000;
require('@aliconnect/api/lib/tms');

AIM.on('connect', () => {
  console.debug('CONNECTED');
  new createMachine({
    initialState: 'gedoofd',
    gedoofd: {
      onEnter() {
        AIM.ws.request('POST', '/Verkeerslichten(3443787)/setHandStand(gedoofd)');
        clearTimeout(this.to);
        this.to = setTimeout(this.transition, tstep * 2 ,'geel_knipperen');
      },
      // onEnter: "AIM.ws.request('POST', '/Verkeerslichten(3443787)/setStand(gedoofd)');setTimeout(this.transition.bind(this), 10000 ,'geel_knipperen');",
      onExit() {
        console.log('onExit action from gedoofd')
      },
      geel_knipperen() {
        console.log('transition action switch to geel_knipperen')
      }
    },
    rood: {
      onEnter() {
        AIM.ws.request('POST', '/Verkeerslichten(3443787)/setHandStand(rood)');
        clearTimeout(this.to);
        this.to = setTimeout(this.transition, tstep * 6 ,'groen');
      },
    },
    groen_naar_rood: {
      onEnter() {
        AIM.ws.request('POST', '/Verkeerslichten(3443787)/setHandStand(groen)');
        clearTimeout(this.to);
        this.to = setTimeout(this.transition, tstep ,'rood');
      },
    },
    groen: {
      onEnter() {
        AIM.ws.request('POST', '/Verkeerslichten(3443787)/setHandStand(groen)');
        clearTimeout(this.to);
        this.to = setTimeout(this.transition, tstep ,'gedoofd');
      },
    },
    geel_knipperen: {
      onEnter() {
        AIM.ws.request('POST', '/Verkeerslichten(3443787)/setHandStand(geel_knipperen)');
        clearTimeout(this.to);
        this.to = setTimeout(this.transition, tstep ,'groen_naar_rood');
      },
    },
  })
});

AIM.extend({
  on:{
    message: function(event) {
      console.debug('message', event.response);
      if (event.response.path.includes('/kanaal')) {
        AIM.ws.request(event.response);
      }
    }
  }
})

// aim = require('./webroot/api.json');
// aim.secret = require('./secret.json');
// require('./operations.js');
// require('@aliconnect/node');
