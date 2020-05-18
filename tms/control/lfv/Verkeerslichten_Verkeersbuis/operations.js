get_bestuurbaar = function () {
							return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
						}
get_observeerbaar = function () {
							return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
						}
SetStand = function(id) function (stand) {
							//this.set('stand_gewenst', stand);

							//debug MVK
							if (!stand) return;
							if (stand == 'rood') {
								setTimeout(function () {
									this.lfv_Verkeerslicht_Verkeersbuis.forEach(function (item) {
										item.SetStand('rood');
									});
								}.bind(this), 6000);
								stand = 'geel';
							}
							this.lfv_Verkeerslicht_Verkeersbuis.forEach(function (item) {
								item.SetStand(stand);
							});
						}
