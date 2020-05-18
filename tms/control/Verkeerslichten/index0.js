aim = require('aimnode');
aim = require('../node_modules/aim-tms/lfv/Verkeerslichten_Verkeersbuis/pi.js');
on = 0;
off = 1;

aim.extend({
	api: require('../node_modules/aim-tms/lfv/Verkeerslichten_Verkeersbuis/api.json'),
});
aim.extend({
	api: require('../node_modules/aim-tms/lfv/Verkeerslichten_Verkeersbuis/api.json'),
});
aim.extend({
	api: {
		components: {
			schemas: {
				Verkeerslichten: {
					SetStand : function (stand) {
						for (var i = 0, vkl, c = this.Verkeerslicht ; vkl = c[i] ; i++) {
							var cfg = vkl.cfg = aim.config.Verkeerslichten[0].Verkeerslicht[i];
							if (!(vkl.rio = i2c[cfg.i2c])) throw 400; // Invalid ID
							clearTimeout(vkl.to);
							switch (stand) {
								case "rood":
									vkl.rio.digitalWrite(cfg.doGroen, off);
									vkl.rio.digitalWrite(cfg.doGeel, on);
									vkl.rio.digitalWrite(cfg.doRood, off);
									vkl.to = setTimeout(function () {
										this.rio.digitalWrite(this.cfg.doGroen, off);
										this.rio.digitalWrite(this.cfg.doGeel, off);
										this.rio.digitalWrite(this.cfg.doRood, on);
										this.stand = "rood";
									}.bind(vkl), 3000);
									vkl.stand = "geel";
									break;
								case "groen":
									vkl.rio.digitalWrite(cfg.doGroen, on);
									vkl.rio.digitalWrite(cfg.doGeel, off);
									vkl.rio.digitalWrite(cfg.doRood, off);
									vkl.stand = "groen";
									break;
								case "gedoofd":
									vkl.rio.digitalWrite(cfg.doGroen, off);
									vkl.rio.digitalWrite(cfg.doGeel, off);
									vkl.rio.digitalWrite(cfg.doRood, off);
									vkl.stand = "gedoofd";
									break;
								case "geel_knipperen":
									vkl.geel_knipperen = off;
									(function () {
										this.rio.digitalWrite(cfg.doGroen, off);
										this.rio.digitalWrite(cfg.doGeel, this.geel_knipperen ^= 1);
										this.rio.digitalWrite(cfg.doRood, off);
										this.to = setTimeout(arguments.callee.bind(this), 1000);
									}).call(vkl);
									vkl.stand = "geel_knipperen";
									break;
								default:
							}
						}
					}
				}
            }
        }
    }
});


//
// Verkeerslichten = function (id) {
// 	//this.vkl = aim.config.lfv_Verkeerslichten_Verkeersbuis[this.id = id];
// 	this.id = id;
// 	this.subID = aim.config.sub;
//
// 	//console.log(aim.ref);
//
// 	this.arr_vkln = [aim.ref.Verkeerslichten[this.subID]];
// 	this.vkln = this.arr_vkln[id];//aim.ref.lfv_Verkeerslichten_Verkeersbuis[this.subID];
// 	this.SetStand = function(stand) {
// 		if (!this.vkln) throw 404; // Not Found
// 		//console.log(this.vkln.lfv_Verkeerslicht_Verkeersbuis);
// 		for (var i=0, vkl ; vkl = this.vkln.Verkeerslicht[i] ; i++) {
// 			//console.log(vkl,vkl['@id']);
// 			//var vkl = aim.ref[vkl['@id']];
// 			//console.log(vkl);
// 			var cfg = vkl.cfg = aim.config.Verkeerslichten[this.id].Verkeerslicht[i];
// 			var rioID = vkl.rioID = cfg.i2c;
// 			if (!rioID) throw 400; // Invalid ID
// 			clearTimeout(vkl.to);
// 			switch (stand) {
// 				case "rood":
// 					vkl.rio.digitalWrite(cfg.doGroen, off);
// 					vkl.rio.digitalWrite(cfg.doGeel, on);
// 					vkl.rio.digitalWrite(cfg.doRood, off);
// 					vkl.to = setTimeout(function () {
// 						aim.digitalWrite(this.rioID, this.cfg.doGroen, off);
// 						aim.digitalWrite(this.rioID, this.cfg.doGeel, off);
// 						aim.digitalWrite(this.rioID, this.cfg.doRood, on);
// 						this.stand = "rood";
// 					}.bind(vkl), 3000);
// 					vkl.stand = "geel";
// 					break;
// 				case "groen":
// 					vkl.rio.digitalWrite(cfg.doGroen, on);
// 					vkl.rio.digitalWrite(cfg.doGeel, off);
// 					vkl.rio.digitalWrite(cfg.doRood, off);
// 					vkl.stand = "groen";
// 					break;
// 				case "gedoofd":
// 					vkl.rio.digitalWrite(cfg.doGroen, off);
// 					vkl.rio.digitalWrite(cfg.doGeel, off);
// 					vkl.rio.digitalWrite(cfg.doRood, off);
// 					vkl.stand = "gedoofd";
// 					break;
// 				case "geel_knipperen":
// 					vkl.geel_knipperen = off;
// 					(function () {
// 						vkl.rio.digitalWrite(cfg.doGroen, off);
// 						vkl.rio.digitalWrite(cfg.doGeel, this.geel_knipperen ^= 1);
// 						vkl.rio.digitalWrite(cfg.doRood, off);
// 						this.to = setTimeout(arguments.callee.bind(this), 1000);
// 					}).call(vkl);
// 					vkl.stand = "geel_knipperen";
// 					break;
// 				default:
// 			}
// 		};
// 		return;
// 	}
// 	return this;
// }


//
//
// get_bestuurbaar = function () {
// 	return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
// }
// get_observeerbaar = function () {
// 	return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
// }
// SetStand = function (stand) {
// 	//this.set('stand_gewenst', stand);
//
// 	//debug MVK
// 	if (!stand) return;
// 	if (stand == 'rood') {
// 		setTimeout(function () {
// 			this.lfv_Verkeerslicht_Verkeersbuis.forEach(function (item) {
// 				item.SetStand('rood');
// 			});
// 		}.bind(this), 6000);
// 		stand = 'geel';
// 	}
// 	this.lfv_Verkeerslicht_Verkeersbuis.forEach(function (item) {
// 		item.SetStand(stand);
// 	});
// }
//


const statemodel = {
	init: {
		entry: function () {
			console.log('init entry');
			this.bestuurbaar = 'ja';
			this.ingestelde_stand = 'gedoofd';
			//console.log('>>>>', this.lfv_Verkeerslicht_Verkeersbuis);
			//forEach(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "geel_knipperen")
		},
		do: function () {
			//console.log('init do');
			//forEach(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "rood")
		},
		exit: function () {
			console.log('init exit');
		},
	},
	gedoofd: {
		trigger: {
			init: function () {
				return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "gedoofd")
			},
			groen: function () {
				return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand_gewenst", "gedoofd") && this.timerPassed
			},
			geel_knipperen: function () {
				return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand_gewenst", "gedoofd") && this.timerPassed
			},
		},
		entry: function () {
			console.log('gedoofd entry');
			//forEach(this.lfv_J32_Verkeersbuis, "SetStand", "uit");
			forEach(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "gedoofd");
		},
		do: function () {
			console.log('gedoofd do');
		},
		exit: function () {
			console.log('gedoofd exit');
		},
	},
	j32_aan: {
		trigger: {
			gedoofd: function () { return this.stand_gewenst != "gedoofd" },
		},
		entry: function () {
			console.log('j32_aan entry');
			forEach(this.lfv_J32_Verkeersbuis, "SetStand", "aan");
			this.timerSet(this.tijd_j32);
		},
		do: function () {
			console.log('j32_aan do');
		},
		exit: function () {
			console.log('j32_aan exit');
		},
	},
	geel_knipperen: {
		trigger: {
			init: function () {
				return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "geel_knipperen")
			},
			j32_aan: function () {
				return forAll(this.lfv_J32_Verkeersbuis, "stand", "aan") && this.timerPassed
			},
			groen: function () {
				return this.stand_gewenst == "geel_knipperen" && this.timerPassed
				//return this.lfv_Verkeerslichten_Verkeersbuis.stand_gewenst == "geel_knipperen" && this.timerPassed
			},
			geel: function () {
				//console.log('TRIGGER GEEL', this, this.stand_gewenst);
				//return this.lfv_Verkeerslichten_Verkeersbuis.stand_gewenst == "geel_knipperen" && this.timerPassed
				return this.stand_gewenst == "geel_knipperen" && this.timerPassed
			},
			rood: function () {
				//return this.lfv_Verkeerslichten_Verkeersbuis.stand_gewenst == "gedoofd" && this.timerPassed || this.lfv_Verkeerslichten_Verkeersbuis.STORING_ROOD_ACTIEVE_LICHTEN == true
				return this.stand_gewenst == "gedoofd" && this.timerPassed || this.STORING_ROOD_ACTIEVE_LICHTEN == true
			}, // Kan dit zo?
		},
		entry: function () {
			console.log('geel_knipperen entry');
			forEach(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "geel_knipperen");
			this.timerSet(this.tijd_geel_knipperen); // tijd pas starten als de gewenste stand is bereikt????
		},
		do: function () {
			console.log('geel_knipperen do');
		},
		exit: function () {
			console.log('geel_knipperen exit');
		},
	},
	geel: {
		trigger: {
			init: function () { return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "geel") },
			geel_knipperen: function () { return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "geel_knipperen") && this.timerPassed },
			groen: function () { return this.stand_gewenst == "rood" && this.timerPassed },
		},
		entry: function () {
			console.log('geel entry');
			forEach(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "geel");
			this.timerSet(this.tijd_geel);
		},
		do: function () {
			console.log('geel do');
		},
		exit: function () {
			console.log('geel exit');
		},
	},
	rood: {
		trigger: {
			init: function () { return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "rood") },
			geel: function () { return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "geel") && this.timerPassed },
			vrijgave_afsluitboom: function () {
				return this.stand_gewenst == "gedoofd" || this.stand_gewenst == "geel_knipperen" || this.stand_gewenst == "groen"
			},
		},
		entry: function () {
			//console.log('rood entry', this.lfv_Verkeerslicht_Verkeersbuis);
			forEach(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "rood");
			this.timerSet(this.tijd_rood); // Tweede timer nodig, tbv afsluitboom vrijgave!!!
		},
		do: function () {
			console.log('rood do');
		},
		exit: function () {
			console.log('rood exit');
		},
	},
	groen: {
		trigger: {
			init: function () { return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "groen") },
			geel_knipperen: function () {
				//return this.lfv_Verkeerslichten_Verkeersbuis.stand_gewenst == "groen" && this.timerPassed
				return this.stand_gewenst == "groen" && this.timerPassed
			},
			rood: function () {
				//return this.lfv_Verkeerslichten_Verkeersbuis.stand_gewenst == "groen" && this.timerPassed
				return this.stand_gewenst == "groen" && this.timerPassed
			},
		},
		entry: function () {
			console.log('groen entry');
			forEach(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "groen");
			this.timerSet(this.tijd_groen);
		},
		do: function () {
			console.log('groen do');
		},
		exit: function () {
			console.log('groen exit');
		},
	},
	vrijgave_afsluitboom: {
		trigger: {
			rood: function () { return forAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "rood") && this.timerPassed },
		},
		entry: function () {
			console.log('vrijgave_afsluitboom entry');
			// SetVrijgaveAfsluitboom(aan)
		},
		do: function () {
			console.log('vrijgave_afsluitboom do');
		},
		exit: function () {
			console.log('vrijgave_afsluitboom exit');
			// SetVrijgaveAfsluitboom(uit)
		},
	},
};
