get_bestuurbaar = function () {
							return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
						}
get_observeerbaar = function () {
							return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
						}
SetActief = function(id) function (stand) {
							console.log(stand);
							this.actief = stand;
						}
SetStand = function(id) function (stand) {
							console.log('SetStand', this, stand);
							//console.log('lfv_Verkeerslicht_Verkeersbuis.SetStand', stand, this, this.lfv_Verkeerslichten_Verkeersbuis);
							//console.log('this.lfv_Verkeerslichten_Verkeersbuis', this.lfv_Verkeerslichten_Verkeersbuis);
							//console.log('sf_Verkeerslichten_Verkeersbuis', this.sf_Verkeerslichten_Verkeersbuis);
							this.set('stand', stand); // this.stand = stand;
						}
