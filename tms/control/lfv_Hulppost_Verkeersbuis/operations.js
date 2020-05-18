get_bestuurbaar = function () {
							return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
						}
get_observeerbaar = function () {
							return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
						}
EnableDetector = function (sensor_id, enabled) {
							// console.log('LFV Hulppost', 'EnableDetector', 'Sensor_Id: ' & sensor_id ,'Enabled: ' & enabled );
							sensor_id == "deur" && enabled == "ja" ? this.deur_open_enabled = "ja" : this.deur_open_enabled = "nee";
							sensor_id == "blusapparaat" && enabled == "ja" ? this.blusapparaat_in_houder_enabled = "ja" : this.blusapparaat_in_houder_enabled = "nee";
							sensor_id == "spuitmond" && enabled == "ja" ? this.spuitmond_enabled = "ja" : this.spuitmond_enabled = "nee";
						}
