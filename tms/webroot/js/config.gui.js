console.log('Configuratie TMS GUI');
AIM.extend({
	Gui: {
		systemRows : {
			"Funct.Beh": {
				items: {
					1: {
						"cf-Verkeersbuis": {},
					},
					2: {
						"cf-Toeritverl.": {},
					},
					3: {
						"cf-2buis-state": {},
					},
					4: {
						"cf-Middenwand": {},
					},
					5: {
						"bf-Ext. Koppeling": {},
					},
				},
			},
			Tunnel: {
				items: {
					1: {
						Energie: {},
						"Openb. Verlicht.": {},
						Terreinverlichting: {},
					},
					2: {
						Brandmelding: {},
						"Waarsch.inst.": {},
						CCTV: {},
					},
					3: {
						Intercom: {},
						Telefoon: {},
						C2000: {},
					},
					4: {
						"Blusvoorz.": {},
						Vloeistofafvoer: {},
						"Overdrukgrens.": {},
					},
					5: {
						Bediening: {},
						Noodbediening: {},
						Eventrecorder: {},
					},
					6: {
						"Gespreksrecord.": {},
						Videorecorder: {},
						"Beeld GMK": {},
					},
				},
			},
			Verkeersbuis: {
				items: {
					1: {
						Ventilatie: {},
						Zicht: {},
						Verlichting: {},
					},
					2: {
						Indicatie: {},
						Vergrendeling: {},
						Hulppost: {},
					},
					3: {
						Omroep: {},
						HF: {},
						Noodtelefoon: {},
					},
					4: {
						CaDo: {},
						VeVa: {},
						BeBa: {},
					},
					5: {
						VRI: {},
						Afsluitboom: {},
						Hoogte: {},
					},
					6: {
						SOS: {},
						CCTV: {},
						"Beeld O D": {},
					},
				},
			},
			MTK: {
				items: {
					1: {
						Overdruk: {},
					},
					2: {
						Licht: {},
					},
					3: {
						Omroep: {},
					},
					4: {
						"Dyn. Vluchtroute": {},
					},
					5: {
						KopDeur: {},
					},
				},
			},
			Dienstgebouw: {
				//elTabsBottomControlWeg: elTabsBottomControlDGB,
				items: {
					1: {
						"Verlichting Dgb": {},
					},
					2: {
						"Toegang": {},
						"Inbraakalarm": {},
					},
					3: {
						"Intercom": {},
					},
					4: {
						"Blusvoorziening": {},
						"Waarschuw.inst.": {},
					},
					5: {
						"Gebouwbeheer": {},
						"Klimaatregeling": {},
					},
					6: {
						"CCTV": {},
					},
				},
			},
		},

		mnu: mnu = {
			Buis: {
				children: {
					Ventilatie: {
						title: "Ventilatie",
					},
					Verlichting: {
						title: "Verlichting",
					},
					CCTV: {
						title: "CCTV",
					},
					BeeldHVD: {
						title: "Beeld HVD",
					},
				},
			},
			Vluchtroute: {
				children: {
					Indicatie_Geluidsbakens: {
						title: "Indicatie/geluidsbakens",
					},
					Vergrendeling: {
						title: "",
					},
					Vluchtdeuren: {
						title: "",
					},
					Kopdeur: {
						title: "",
					},
					Dynamische_Vluchtroute: {
						title: "Dyn. Vluchtroute",
					},
					Overdruk: {
						title: "",
					},
					Licht: {
						title: "",
					},
				},
			},
			Tunnel: {
				children: {
					Blusvoorziening: {
						title: "",
					},
					Vloeistofafvoer: {
						title: "",
					},
					Omroep_HF: {
						title: "",
					},
					Intercom: {
						title: "",
					},
					Bediening: {
						title: "",
					},
					CCTV: {
						title: "",
					},
					Brandmelding_Dienstruimten: {
						title: "",
					},
					Waarschuwing_Dienstruimten: {
						title: "",
					},
				},
			},
			Verkeer: {
				children: {
					VRI_Afsluitboom: {
						title: "VRI Afsluitboom",
					},
					Cado_Hekken: {
						title: "Cado Hekken",
					},
					Veva_Beba: {
						title: "Veva Beba",
					},
					Tunnelbuis_Wi: {
						title: "Tunnelbuis Wi",
					},
				},
			},
			Detecties: {
				children: {
					Hoogte: {},
					SOS: {
						children: {
							Snelheid_laag: {},
							Stilstand: {},
							Spookrijder: {},
						},
					},
					Zicht: {},
					Hulppost: {
						children: {
							Deur: {},
							Blusser: {},
							Haspel: {},
							Noodtelefoon: {},
						},
					},
				}
			},
			Overig: {
				children: {
					C2000: {},
					Telefoon: {},
					GMK_Beelden: {},
				},
			},
			DGB: {
				children: {
					CCTV: {},
				},
			}
		}
	}
});
