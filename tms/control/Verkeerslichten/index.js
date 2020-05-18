RIO = {
	ON : 0,
	OFF : 1,
}


// require('@aliconnect/node/lib/js/def.js');
// require('./webroot/js/api.js');
//Object.assign(aim, api = require('./webroot/api.json'));
// aim.secret = require('./secret.json');

AIM = require('@aliconnect/node/pi');
require('./operations_pi.js');
AIM.getItems();


// aim = require('./webroot/api.json');
// aim.secret = require('./secret.json');
// require('./operations_pi.js');
// require('@aliconnect/node');
