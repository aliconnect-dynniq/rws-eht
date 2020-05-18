console.debug('@Aliconnect/tms Library');
// forEach
forAll = function () {
	var arg = [...arguments], list = arg.shift(), operationId = arg.shift();
	console.debug("forAll", operationId, arg);
	if (!Array.isArray[list]) list = [list];
	list.forEach(function (item) {
		//console.log("item", item.schema, item.ID, operationId, item[operationId], item.operations ? item.operations[operationId] : null);
		if (item.operations && item.operations[operationId] && item.operations[operationId].em) item.operations[operationId].em.apply(item, arg);
	});
}
// every
checkAll = function (list, fieldname, value) {
	//Indien voor alle items geldt voorwaarden correct dan true
	if (!list) return false;
	for (var i = 0, item; item = list[i]; i++) if (item[fieldname] != value) return false;
	return true;
}
// some
checkOne = function (list, fieldname, value) {
	//Indien voor één van alle items geldt voorwaarden correct dan true
	if (list) for (var i = 0, item; item = list[i]; i++) if (item[fieldname] == value) return true;
	return false;
}
huidige_tijd = function () {
	return new Date();
}
ms = function (s) { return s * 1000; }
AIM.extend(Host = {
	title: "TMS",
	events: {
		load: function () {
			console.debug('APIIIIIIIII', api.definitions);
		}
	},
	App: {
		navleft: {
			items: {
				"LTS": {
					className: "config", items: {
					}
				},
				SE: {
					title: "System Engineering", items: {
						"softwarefunction": { href: "#softwarefunction?q=" },
					}
				},
				Admin: {
					items: {
						"Edit API": { href: "#/AIM/editApi" },
					}
				},

			}
		},
	},
});
color = {
	grond2: 'brown',
	grond: 'green',
	asfalt: 0x272727,
	rand: 0x666666,
	paal: 0xcccccc,
	rood: 'rgb(255,0,0)',
	gedoofd: 0x333333,
}
groups = {
	configuratie_elementen: { title: 'Configuratie elementen', },
	variabelen: { title: 'Variabelen', },
	bedieningen: { title: 'Bedieningen', },
	besturingen: { title: 'Besturingen', },
	signaleringen: { title: 'Signaleringen', },
	autonome_processen: { title: 'Autonome processen', },
}
default_value = "ongeldig";
ja = true, nee = false, weetzeker = "Weet u zeker dat u dit wilt?";
stereotype = {
	configuratie_element: {
		label: 'Configuratie elementen',
	},
	commando: {
		label: "Commando's",
	},
	toestandsvariabele: {
		label: 'Toestandsvariabelen',
	},
	variabele: {
		label: 'Variabelen',
	},
	bediening: {
		label: 'Bedieningen',
	},
	besturing: {
		label: 'Besturingen',
	},
	signalering: {
		label: 'Signaleringen',
	},
	autonoom_proces: {
		label: 'Autonoom processen',
	}
}
//console.debug('TMS');
var checkTemperatuur = function () {
	this.tempHigh.conditie = this.temperatuur_actueel.Value > this.temperatuur_actueel.High;
	this.temperatuurHighHigh.conditie = this.temperatuur_actueel.Value > this.temperatuur_actueel.HighHigh;
	this.temperatuur_hoog.conditie = this.temperatuur_actueel.Value > this.temperatuur_actueel.High;
	this.temperatuur_hoog.conditie = this.temperatuur_actueel.Value > this.temperatuur_actueel.High;
}
//console.debug('Config TMS LTS Basis-, SUb- en Coordinerende-functionaliteit');
//console.debug('Config TMS LTS LFV functionaliteit');

configDefault = {
	wss: {
		onerror: function () {
			this.observeerbaar = 'nee';
			this.bestuurbaar = 'nee';
			this.storingen.set('STORING_COMMUNICATIE_UITGEVALLEN');
			//this.reden_niet_bestuurbaar.set('storing');
			//Object.assign(this, { observeerbaar: 'nee', bestuurbaar: 'nee', storingen: ['STORING_COMMUNICATIE_UITGEVALLEN'], reden_niet_bestuurbaar: ['storing'] });
		},
		onconnect: function () {
			this.storingen.unset('STORING_COMMUNICATIE_UITGEVALLEN');
			//this.reden_niet_bestuurbaar.set('storing');
			//Object.assign(this, { observeerbaar: 'nee', bestuurbaar: 'nee', storingen: ['STORING_COMMUNICATIE_UITGEVALLEN'], reden_niet_bestuurbaar: ['storing'] });
		},
	},
}
mnu = {
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

AIM.extend({
	om: {
		nav: {
			items: {
				Admin: {
					className: "admin", items: {
						"Publish": { href: "#/admin/publish" },
					}
				},
			},
		},
	},
	api: {
		components: {
			schemas: {
				Attribute: {
					header: [
						["Name"], // title = titel
						["Title"], // subject = onderwerp
						["Description"], // summary = beschrijving / samenvatting
					],
					treeTitleAttributeName: "Name",
					"filterFieldnames": [],
					properties: {
						Name: { title: "Name", label: "Attribute", idname: "name" },
						Title: { title: "Title" },
						Description: { title: "Description" },
						State: { title: "State", idname: "state" },
						StateMessage: { title: "StateMessage" },
						//VALUES
						//Value: { title: "Value", idname: "value", format: "meter", attr: { minimum: 200, maximum: 350, optimum: 230, low: 220, high: 280, unit: "�C" } },
						Value: { title: "Value", },
						Quality: {
							title: "Quality", format: "radio",
							"options": {
								"Valid": { "title": "Valid", "color": "green" },
								"NotValid": { "title": "NotValid", "color": "orange" },
								"CommunicationError": { title: "CommunicationError", color: "red" },
								"UnInitialized": { title: "UnInitialized", color: "gray" }
							}
						},

						"Attributeformat": {
							"label": "Type", "title": "Attribute type", "format": "select", "options": AttributeTypeOption = {
								CriticalFailure: { title: "Critical Failure", color: "red" },
								NonCriticalFailure: { title: "Non Critical Failure", color: "orange" },
								Locking: { title: "Locking", color: "yellow" },
								Maintenance: { title: "Maintenance", },
								Running: { title: "Running", color: "green" },
								RunningMode: { title: "Running mode", },
								Security: { title: "Security", },
								PreWarning_1: { title: "Pre warning 1", },//count
								PreWarning_2: { title: "Pre warning 2", },//count
								PreWarning_3: { title: "Pre warning 3", },//count
								Measurement_1: { title: "Measurement 1", },//count
								Measurement_2: { title: "Measurement 2", },//count
								Measurement_3: { title: "Measurement 3", },//count
								Measurement_4: { title: "Measurement 4", },//count
								Measurement_5: { title: "Measurement 5", },//count
								MeasurementErrorFlag: { title: "MeasurementErrorFlag", },//count
								NotApplicable: { title: "Not Applicable", },
								"": { title: "NULL", },
							}
						},
						ModifiedDT: { title: "Modified", idname: "modifiedDT" },
						Valueformat: {
							title: "Value type", format: "select", options: {
								text: { title: "String" },
								integer: { title: "Integer" },
								double: { title: "Double" },
								bool: { title: "Boolean" },
								date: { title: "Date" },
								time: { title: "Time" },
								datetime: { title: "Date and time" },
							}
						},
						//Enum: { title: "Options", format: "text", options: { 0: { title: "0=Not Active|!1=Active" }, 1: { title: "0=Active|1=Not Active" } } },
						Enum: { title: "Enummeration", format: "text" },
						Unit: { title: "Unit", format: "text" },
						Calc: { title: "Calculation function", format: "select", "options": { "OnlineHours": { "title": "OnlineHours()" } } },

						//DisplayMin: { label: "Display", title: "Min", format: "number" },
						//DisplayLow: { title: "Low", format: "number" },
						//DisplayOptimum: { title: "Optimum", format: "number" },
						//DisplayHigh: { title: "High", format: "number" },
						//DisplayMax: { title: "Max", format: "number" },

						Min: { label: "Display", title: "Min", format: "number" },
						Max: { title: "Max", format: "number" },
						multipleOf: { title: "Step", format: "number" },
						Optimum: { title: "Optimum", format: "number" },
						Low: { title: "Low", format: "number" },
						High: { title: "High", format: "number" },
						Hysteresis: { title: "Hysteresis", format: "number", multipleOf: 0.1 },

						//AlarmMax: { label: "Alarm", title: "Low Alarm Margin", format: "number", multipleOf:"0.1" },
						//AlarmMin: { title: "Low Alarm Margin", format: "number", multipleOf:"0.1" },

						//AlarmLow: { label: "Alarm", title: "Low Alarm Margin", format: "number", multipleOf:"0.1" },
						//AlarmLowAttributeformat: { title: "Attribute type", format: "select", options: AttributeTypeOption },
						//AlarmLowCount: { title: "Low Alarm Count", format: "number" },
						//AlarmLowWarning: { title: "Low Warning Margin", format: "number", multipleOf:"0.1" },
						//AlarmLowWarningAttributeformat: { title: "Attribute type", format: "select", options: AttributeTypeOption },
						//AlarmLowWarningCount: { title: "Low Warning Count", format: "number" },
						//AlarmHighWarning: { title: "High Warning Margin", format: "number", multipleOf:"0.1" },
						//AlarmHighWarningAttributeformat: { title: "Attribute type", format: "select", options: AttributeTypeOption },
						//AlarmHighWarningCount: { title: "High Warning Count", format: "number" },
						//AlarmHigh: { title: "High Alarm Margin", format: "number", multipleOf:"0.1" },
						//AlarmHighAttributeformat: { title: "Attribute type", format: "select", options: AttributeTypeOption },
						//AlarmHighCount: { title: "High Alarm Count", format: "number" },
						//AlarmHysteresis: { title: "Hysteresis", format: "number", multipleOf:"0.1" },
					},
				},
				ControlIO: {
					treeTitleAttributeName: "Tag",

					properties: {
						Signalformat: {
							label: "Control IO", title: "Type", format: "select", options: {
								Text: { title: "String" },
								D: { title: "Digital", color: "blue" },
								A: { title: "Analog", color: "yellow" },


								Bool: { title: "Boolean" },
								SByte: { title: "Signed Byte" },
								UBbyte: { title: "Unsigned Byte" },
								SInt: { title: "Signed Integer" },
								Uint: { title: "Unsigned Integer" },
								SDInt: { title: "Signed Double Integer" },
								UDInt: { title: "Unsigned Double Integer" },
								Float: { title: "Float" },
								Double: { title: "Double" },

								//integer: { title: "Integer" },
								//int8: { title: "Byte" },
								//uint8: { title: "Unsigned Byte" },
								//int16: { title: "Word" },
								//uint16: { title: "Unsigned Word" },
								//int32: { title: "Double" },
								//uint32: { title: "Unsigned Double" },

								//float4: { title: "Float 4 (4 Bytes)" },
								//inversefloat4: { title: "Inverse Float 4" },
								//float8: { title: "Float 8 (8 Bytes)" },
								//inversefloat8: { title: "Inverse Float 8" },
								//double: { title: "Double" },


								//bool: { title: "Boolean" },
								//number: { title: "Number" },
								Date: { title: "Date" },
								Time: { title: "Time" },
								Datetime: { title: "Date and time" },
								Array: { title: "Array" },
								Object: { title: "Object" },
								" ": { title: "Not applicable" },
							}
						},
						Permission: { title: "Permission", format: "radio", options: { rw: "Read Write", r: "Read Only", w: "Write Only" } },
						Direction: { title: "Direction (vervalt)", format: "radio", options: { I: "Input", O: "Output" } },

						Tag: { title: "TAG", idname: "tag" },

						Value: { title: "Value", idname: "value", },
						Quality: { title: "Quality", format: "radio", options: { Valid: { title: "Valid", color: "green" }, NotValid: { title: "NotValid", color: "orange" }, CommunicationError: { title: "CommunicationError", color: "red" }, UnInitialized: { title: "UnInitialized", color: "gray" } } },

						ReadAddress: { label: "Modbus", title: "Read Address", format: "number" },
						//ReadAddressLength: { title: "Read Address Length", defaultvalue: 1, format: "number" },
						ReadAddressBit: { title: "Bit number", format: "number" },

						OID: { label: "SNMP", title: "OID" },
						SNMPformat: { title: "SNMP Type" },

						//PollInterval: { label: "Scan configuration", title: "Poll Interval", format: "number", unit: "ms" },


						////ModbusAddress: { title: "Modbus Address", format: "number" },
						////ModbusAddressBit: { title: "Modbus Address Bit", format: "number" },
						////RangeName: { title: "Range Name" },

						//TagName: { title: "Tagname" },
						//Tagformat: { title: "Tagtype" },
						//SharedMemoryOffset: { title: "Shared Memory Offset", format: "number" },
						//SharedMemoryBit: { title: "Shared Memory Bit", format: "number" },
						//TextEnumeration: { title: "Text enumeration" },
						//Description: { title: "Description" },
						//Passthrough: { title: "Passthrough" },

						//Unit: { title: "Unit" },
						//Fraction: { title: "Fraction", format: "number" },
						//IOformat: { title: "IO Type" },
						//Invert: { label: "Signal", title: "Invert", format: "checkbox" },
						//AlarmText: { title: "Alarm Text" },
						//Category: { title: "Category" },
						//StandardOutput: { title: "Standard Output" },


						//RANGE
						MinValidValue: { label: "Range", title: "Min Valid Value", format: "number" },
						MaxValidValue: { title: "Max Valid Value", format: "number" },
						Deadband: { title: "Deadband", format: "number" },

						MinRawValue: { label: "Conversion", title: "Min Raw Value", format: "number" },
						MaxRawValue: { title: "Max Raw Value", format: "number" },
						MinEngValue: { title: "Min Engineering Value", format: "number" },
						MaxEngValue: { title: "Max Engineering Value", format: "number" },

						//RawMin: { title: "Raw MIN" },
						//EngMin: { title: "Eng MIN" },
						//Factor: { title: "Eng Factor" },
						//EngMax: { title: "Eng MAX" },
						//RawMax: { title: "Raw MAX" },


					},
				},
				Device: {
					className: "device",
					header: [
						["Product"], // title = titel
						["IPAddress", "Port"], // subject = onderwerp
						["ReadAddress", "ReadLength", "Community"], // summary = beschrijving / samenvatting
					],
					treeTitleAttributeName: "Product",
					properties: {
						Product: { label: "Device", title: "Name", idname: "name" },

						IPAddress: { label: "Network", title: "IP address" },
						Port: { title: "Port" },
						PollInterval: { title: "Poll Interval", format: "number", unit: "ms" },

						ReadAddress: { label: "Modbus", title: "Read Address" },
						ReadLength: { title: "Read Length" },

						Community: { label: "SNMP", title: "Community" },
					},
				},

				System: {
					btnbar: {
						view: {
							//pwa: { title: "PWA Specification", api: "system/fbs.html", get: { child: 10 }, },
							popupmenu: {
								sbs: {
									title: "SBS", object: "sbs",
									onclick: function (event) {
										//event.stopPropagation();
										AIM.Document.create({ el: collist, item: this.item });
									},
									//script: "/lib/" + AIM.version + "/js/document.js",

								},
								show3d: {
									title: "Toon 3D Model",
									//hidden: true,
									//hidden: !this.properties || !this.properties.x || !this.properties.y || !this.properties.z || !(this.properties.x.value || this.properties.y.value || this.properties.z.value),
									//hidden: this.schema != "system",
									get hidden() {
										//console.debug("hidden", AIM.itemPage);
										var item = AIM.itemPage;
										return !item || !item.properties || !item.properties.x || !item.properties.y || !item.properties.z || !(item.properties.x.value || item.properties.y.value || item.properties.z.value);
									},
									//item: this,
									onclick: function () {
										//console.debug("3D", AIM.itemPage);
										AIM.itemPage.model3d();
									}
								},

								//fds1: { title: "Functional Specification v3", rpt: "fds" },


								//"fds": { title: "Functional specification", "src": "/api/v1/doctree.php", "post": { "flds": "Brand,Product,Model,Type,Serie,Version,Description,BodyHTML" } },
								//"pwa": { title: "Power Water Air specification", "src": "/api/v1/sbstreedoc.php", "post": { "flds": "files,Brand,Product,Model,Type,Serie,Version,Description,BodyHTML,PowerKVA,PowerFuse,PowerConnection,Air,AirConnection,Dewpoint,Water,WaterConnection,Length,Width,Height,InstallLength,InstallWidth,InstallHeight" } },
								//"sm": { title: "Service specification", "src": "/api/v1/doctree.php", "post": { "flds": "Brand,Product,Model,Type,Serie,Water,Length,Width,Height,InstallLength,InstallWidth,InstallHeight" } }
							},
						},
					},
					btns: ["msg", "fav", "send", "clone", "edit", "network", "printmenu"],
					childClasses: [{ title: "System" }, { title: "Product" }],
					//linkclasses: { "1107": 2107 },
					//childlist: { 0: { title: "System child" }, 1: { title: "System object" } },
					backgroundColor: "blue",

					apps: { mobile: {} },
					header: [
						["Brand", "Product", "Model", "Type", "Serie", "Version", "Shape", "Material", "Quality", "Color", "Purpose", "Unit", "Content", "ContentUnit", "PackageUnit", "PackageQuantity"], // title = titel
						[], // subject = onderwerp
						["Description"], // summary = beschrijving / samenvatting
					],

					properties: {
						//TITEL
						Manufacturer: { title: "Manufacturer", label: "Title", schema: "Company" },
						Brand: { schema: "Brand", title: "Merk", filter: 1 },
						Product: { title: "Product", filter: 1, default: true, },
						Model: { title: "Model", filter: 1 },
						format: { title: "Type", filter: 1 },
						Serie: { title: "Serie", filter: 1 },
						Version: { title: "Version", filter: 1 },
						Shape: { title: "Vorm", filter: 1 },
						Material: { title: "Material", filter: 1 },
						Quality: { title: "Quality", filter: 1 },
						Color: { title: "Kleur", filter: 1, },
						Purpose: { title: "Ten behoeve van", filter: 1 },

						Unit: { title: "Eenheid", filter: 1 },
						Content: { title: "Inhoud", filter: 1 },
						ContentUnit: { title: "Inhoud eenheid", filter: 1, enum: ["liter", "meter", "mm", "nano", "mu"] },

						// TOELICHTING
						Description: { title: "Omschrijving", label: "Toelichting", format: "textarea", },
						BodyHTML: { title: "Pagina tekst", format: "div" },
						Remark: { title: "Opmerking", format: "textarea" },
						ProductTitle: { title: "Product titel" },


						//Keywords: { title: "Zoekwoorden" },

						keyname: { title: "Zoek code", idname: "keyname" },
						tag: { title: "Label", idname: "tag" },


						// AFMETINGEN
						Dimensions: { label: "Afmetingen", title: "Afmeting", filter: 1 },
						Length: { title: "Length", format: "number", multipleOf: 10, unit: "mm" },
						Width: { title: "Width", format: "number", multipleOf: 10, unit: "mm" },
						Height: { title: "Height", format: "number", multipleOf: 10, unit: "mm" },
						Weight: { title: "Weight", unit: "kg" },
						//depth: { title: "Length 3D deprecated" },
						//w: { title: "Width 3D deprecated" },
						//h: { title: "Height 3D deprecated" },

						// VERPAKKING
						PackageUnit: { title: "Verpakking eenheid", label: "Verpakking", filter: 1 },
						PackageQuantity: { title: "Verpakking aantal", filter: 1, format: "number", multipleOf: 1 },

						PackageLength: { title: "Length", format: "number", multipleOf: 10, unit: "mm" },
						PackageWidth: { title: "Width", format: "number", multipleOf: 10, unit: "mm" },
						PackageHeight: { title: "Height", format: "number", multipleOf: 10, unit: "mm" },
						PackageWeight: { title: "Weight", unit: "kg" },
						EAN: { title: "EAN" },

						//CONSUMPTION
						PowerKVA: { title: "Power", label: "Verbruik", format: "number", multipleOf: 0.1, unit: "kVA" },
						PowerFuse: { title: "Fuse", format: "number", multipleOf: 1, unit: "Amp" },
						PowerConnection: { title: "Power connection", format: "textarea" },
						//"Power400V50Hz": { title: "Power 400V/50Hz", format: "number", multipleOf:0.1, unit: "kVA" },
						//"Power230V50Hz": { title: "Power 230V/50Hz", format: "number", multipleOf:0.1, unit: "kVA 230VAC, 50Hz" },
						//"Power400V60Hz": { title: "Power 400V/60Hz", format: "number", multipleOf:0.1, unit: "kVA 400VAC-3Phase+PE, 60Hz" },
						//"Power230V60Hz": { title: "Power 230V/60Hz", format: "number", multipleOf:0.1, unit: "kVA 230VAC, 60Hz" },

						Air: { title: "Air", format: "number", multipleOf: 0.1, unit: "NL/MIN 6-8 BAR (dry air)" },
						AirConnection: { title: "Air connection", format: "textarea" },
						Dewpoint: { title: "Dewpoint", format: "number", multipleOf: 0.1, unit: "�C" },

						Water: { title: "Water", format: "number", multipleOf: 0.1, unit: "L/MIN" },
						WaterConnection: { title: "Water connection", format: "textarea" },


						// MAGAZIJN
						StockLocation: { title: "Locatie", label: "Magazijn" },
						Stock: { title: "Voorraad", multipleOf: 1, format: "number" },
						MinimumStock: { title: "Minimum voorraad", multipleOf: 1, format: "number" },
						StartOfStock: { title: "Begin voorraad", multipleOf: 1, format: "number" },

						// VERKOOP
						CatalogPrice: { title: "Catalogus prijs", label: "Verkoop", format: "number", format: "currency", multipleOf: 0.01 }, // catalog price
						//ListPrice: { title: "Adviesprijs, invoeren in catalog price", format: "number", multipleOf:0.01 },
						SalesDiscount: { title: "Verkoop korting", unit: "%" },
						SalesMargin: { title: "Verkoop marge", unit: "%" },
						SalesPrice: {
							title: "Verkoop prijs", readOnly: true, format: "currency", format: "number", multipleOf: 0.01, get: function () {
								var srcItem = AIM.api.item[this.srcID] || { values: {} };
								return Number(this.values.cp || srcItem.values.cp) * (100 - Number(this.values.sd || srcItem.values.sd || 0)) / 100
							}
						}, // sales price
						CustomerDiscount: { title: "Klant korting", unit: "%" }, // client discount
						//Price: { title: "Verkoopprijs, vervalt zie Price", format: "number", multipleOf:0.01 },
						//FAT: { title: "FAT" },
						FAT: { "default": "hoog", title: "BTW soort, invoern in FAT", options: ["hoog", "laag"], },
						FixedCostPrice: { title: "Kostprijs", format: "number", multipleOf: 0.01 },

						// INKOOP
						Supplier: { title: "Leverancier", label: "Inkoop", schema: "Company" },
						PurchaseDiscount: { title: "Inkoop korting", unit: "%" }, // purchase discount
						PurchasePrice: {
							title: "Inkoop prijs", readOnly: true, format: "currency", get: function () {
								var srcItem = AIM.api.item[this.srcID] || { values: {} };
								return (this.values.cp || srcItem.values.cp) * (100 - Number(this.values.pd || srcItem.values.pd || 0)) / 100
							}
						}, // purchase price
						OrderQuant: { title: "Inkoop hoeveelheid", multipleOf: 1, format: "number" },
						//OrderUnit: { title: "Inkoop eenheid" },
						//PurchaseCode: { title: "Inkoop code" },

						//Supplier: { title: "Supplier", schema: "Company" },
						//SupplierProductUrl: { format: "url", title: "Product pagina" },
						//SupplierArtDescription: { title: "Product omschrijving, opnemen in Description of Body", readOnly: true },
						//SupplierWebTitle: { title: "Product titel, opnemen in Description of Body", readOnly: true },

						// MODEL
						CAD: { title: "CAD model", label: "CAD model", format: "json1" },
						Children: { title: "CAD onderdelen", format: "json1" },
						PosX: { label: "Position", title: "Positie X" },
						PosY: { title: "Positie Y" },
						PosZ: { title: "Positie Z" },
						RotX: { title: "Rotatie X-as" },
						RotY: { title: "Rotatie Y-as" },
						RotZ: { title: "Rotatie Z-as" },

						// STATUS
						State: {
							title: "State", label: "State", filter: 1, options: {
								research: { title: "Research", color: "lightblue" },
								design: { title: "Design", color: "lightblue" },
								draft: { title: "Draft", color: "lightblue" },
								concept: { title: "Concept", color: "yellow" },
								final: { title: "Final", color: "yellow" },
								published: { title: "Published", color: "green" },
								sales: { title: "Sales", color: "orange" },
								ordered: { title: "Ordered", color: "orange" },
								build: { title: "Build", color: "yellow" },
								deleted: { title: "Deleted", color: "black" },
								deprecated: { title: "Deprecated", color: "orange" },
								replaced: { title: "Replaced", color: "orange" },

								aborted: { title: "Aborted", color: "green" },
								stopped: { title: "Stopped", color: "green" },
								idle: { title: "Idle", color: "green" },
								running: { title: "Running", color: "green" },
								complete: { title: "Complete", color: "green" },

								suspended: { title: "Suspended", color: "green" },
								held: { title: "Held", color: "green" },
								aborting: { title: "Aborting", color: "green" },
								stopping: { title: "Stopping", color: "green" },
								clearing: { title: "Clearing", color: "green" },
								resetting: { title: "Resetting", color: "green" },
								starting: { title: "Starting", color: "green" },
								completing: { title: "Completing", color: "green" },
								suspending: { title: "Suspending", color: "green" },
								unsuspending: { title: "Unsuspending", color: "green" },
								holding: { title: "Holding", color: "green" },
								unholding: { title: "Unholding", color: "green" },
								//"run": { title: "Run", color: "green" },
								//"hold": { title: "Hold", color: "blue" },
								//"warning": { title: "Warning", color: "orange" },
								//"stop": { title: "Stop", color: "red" },
							}
						},
						WWW: { title: "Publish", title: "Deze pagina tonen op internet", format: "checkbox", idname: "www" },
						News: { title: "News", title: "Deze pagina opnemen in nieuwsberichten", format: "checkbox" },

						CreatedDT: { title: "Created", label: "Planning", format: "date", idname: "createdDT" },
						StartDT: { title: "Start", format: "date", idname: "startDT" },
						EndDT: { title: "Deadline", format: "date", idname: "endDT" },
						FinishDT: { title: "Completed", format: "date", idname: "finishDT" },

						// REFERENTIES
						Master: { title: "Onderdeel van", label: "Referenties", schema: "System", idname: "masterID", "typeID": 11 },
						Source: { title: "Afgeleid van", schema: "System", idname: "srcID" },
						Layout: { title: "Layout", schema: "Layout" },
						SystemFolder: { title: "Network folder" },
						TagName: { title: "TagName" },
						keyname: { title: "Keyname", idname: "keyname" },
					}
				},

			}
		}
	}
});

AIM.extend({
		components: {
			schemas: {
				"Verkeersgeleiding-functies": {

				},
				"Verkeersbuis-functies": {

				},
				"Dienstgebouw-functies": {

				},
				"Veiligeruimte-functies": {

				},
				"Tunnel-functies": {

				},
				lfv_HoogteDetector_Verkeersbuis: {

				},
				lfv_SOS_Verkeersbuis: {

				},
				lfv_Omroepsectie_Verkeersbuis : {

				},
				lfv_Verlichtingszone_Verkeersbuis : {

				},
				lfv_Noodtelefoon_Verkeersbuis : {

				},
				lfv_Ventilatie_Verkeersbuis : {

				},
				lfv_Luchtkwaliteitsmeter_Verkeersbuis : {

				},
				lfv_KoppelingWisselbaansysteem_Verkeersbuis : {

				},
				lfv_Camera_Verkeerbuis: {

				},
				lfv_Geluidsbaken_VeiligeRuimte : {

				},
				lfv_Overdrukventilator_VeiligeRuimte: {

				} ,
				lfv_Omroepcompartiment_VeiligeRuimte : {

				},
				lfv_DynamischeVluchtrouteIndicatie_VeiligeRuimte: {

				},
				lfv_Omroep_VeiligeRuimte : {

				},
				lfv_Kopdeur_MiddenTunnelKanaal_VeiligeRuimte : {

				},
				lfv_Geluidsbaken_Verkeersbuis : {

				},
				lfv_Ventilator_Verkeersbuis : {

				},
				sf_Geluidsbaken_Verkeersbuis : {

				},
				lfv_Noodtelefoontoestel_Verkeersbuis : {

				},
				lfv_Contourverlichting_Verkeersbuis : {

				},
				sf_Contourverlichting_Verkeersbuis: {

				},
				lfv_RijVanVluchtdeuren_Verkeersbuis : {

				},
				lfv_Vluchtdeurindicatie_Verkeersbuis : {

				},
				bf_RijVanVluchtdeuren_Verkeersbuis: {

				},
				lfv_CCTV_Dienstgebouw: {

				},
				lfv_Toegang_Dienstgebouw : {

				},
				lfv_Blusvoorziening_Dienstgebouw: {

				},
				lfv_Verlichting_Dienstgebouw: {

				},
				lfv_Klimaatregeling_Dienstgebouw: {

				},
				lfv_Inbraakalarm_Dienstgebouw : {

				},
				lfv_Camera_Dienstgebouw: {

				},
				lfv_CCTV_Dienstgebouw: {

				},
				lfv_Toegang_Dienstgebouw: {

				},
				lfv_Blusvoorziening_Dienstgebouw: {

				},
				lfv_Verlichting_Dienstgebouw: {

				},
				lfv_Klimaatregeling_Dienstgebouw: {

				},
				lfv_Inbraakalarm_Dienstgebouw: {

				},
				lfv_Camera_Dienstgebouw: {

				},
				lfv_C2000_Tunnel: {
				},
				lfv_Intercom_Tunnel: {
				},
				lfv_Blusvoorziening_Tunnel : {

				},
				lfv_Energie_Tunnel:{

				},
				lfv_Telefoonvoorziening_Tunnel : {

				},
				lfv_Vloeistofpompinstallatie_Tunnel : {

				},
				lfv_CADO_Tunnel : {

				},
				lfv_VEVA_Tunnel: {

				},
				lfv_BEBA_Tunnel : {

				},
				lfv_Bediening_Tunnel : {

				},
				lfv_BeeldvoorzieningMeldkamer_Tunnel : {

				},
				lfv_OverdrukvoorzieningGrensruimte_Tunnel : {

				},
				lfv_KoppelingExterneSystemen_Tunnel : {

				},
				lfv_Noodbediening_Tunnel : {

				},
				lfv_Terreinverlichting_Tunnel : {

				},
				lfv_WaarschuwingsinstallatieDienstruimtes_Tunnel : {

				},
				lfv_BrandmeldOntruimingsinstallatie_Tunnel : {

				},
				lfv_Eventrecorder_Tunnel : {

				},
				lfv_Overdrukventilator_Tunnel : {

				},
				lfv_BluswaterReservoir_Tunnel : {

				},
				lfv_Brandbluspomp_Tunnel : {

				},
				lfv_Jockeypomp_Tunnel : {

				},
				lfv_BluswaterDistributieleiding_Tunnel : {

				},
				lfv_Energiedistributienetwerk_Tunnel : {

				},
				lfv_NSA_Tunnel : {

				},
				lfv_Transformator_Tunnel : {

				},
				lfv_Netaansluiting_Tunnel : {

				},
				lfv_Nobreak_Tunnel : {

				},
				lfv_Afvoerpomp_Tunnel : {

				},
				lfv_Afvoerkeuze_Tunnel: {

				},
				lfv_Omroep_Verkeersbuis: {

				},
				lfv_HF_Verkeersbuis : {

				},
				lfv_Verlichting_Verkeersbuis: {

				},
				lfv_Verkeerslichten_Verkeersbuis: {
					hoortbij: "lfv/Verkeerslichten_Verkeersbuis",
					title: "LFV Verkeerslichten",
					cm: 1,
					wss: configDefault.wss,
					properties: {
						_lfv_Verkeerslicht_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "",
							ref: "",
							type: "selectitem",
						},
						lfv_J32_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "",
							ref: "",
							type: "selectitem",
						},
						tijd_j32: {
							stereotype: "configuratie_element",
							title: "Tijd J32",
							description: "De tijdsduur dat de J32 borden aan moeten staan voordat de Verkeerslichten aan mogen. Deze waarde dient (minimaal) 10 seconden te zijn. Als de LFV wordt toegepast voor een verkeersbuis die kan worden gebruikt als ondersteunende buis bij vluchten door een middenwand moet de waarde bij uitzondering (minimaal) 3 seconden zijn. Dit configuratie-element moet instelbaar zijn van 0.0 t/m 15.0 seconden.",
							ref: "BSTTI#16913",
							type: "number",
							unit: "s",
							min: "0",
							max: "15",
							step: "1",
							init: "10",
						},
						tijd_groen: {
							stereotype: "configuratie_element",
							title: "Tijd stand groen",
							description: "De tijdsduur die de Verkeerslichten op groen moeten staan voordat deze naar gedoofd, geel knipperen of geel mogen.",
							ref: "BSTTI#16914",
							type: "number",
							unit: "s",
							min: "0",
							max: "15",
							step: "1",
							init: "6",
						},
						tijd_geel_knipperen: {
							stereotype: "configuratie_element",
							title: "Tijd stand geel knipperen",
							description: "De tijdsduur die de Verkeerslichten op geel knipperen moeten staan voordat deze naar gedoofd, groen of naar geel mogen.",
							ref: "BSTTI#16915",
							type: "number",
							unit: "s",
							min: "0",
							max: "15",
							step: "1",
							init: "6",
						},
						tijd_geel: {
							stereotype: "configuratie_element",
							title: "Tijd stand geel",
							description: "De tijdsduur die de Verkeerslichten op geel staan voordat deze naar rood of geel knipperen mogen.",
							ref: "BSTTI#16916",
							type: "number",
							unit: "s",
							min: "0",
							max: "15",
							step: "1",
							init: "6",
						},
						tijd_rood: {
							stereotype: "configuratie_element",
							title: "Tijd stand rood",
							description: "De tijdsduur die de Verkeerslichten op rood moeten staan voordat deze naar geel knipperen of groen mogen.",
							ref: "BSTTI#16917",
							type: "number",
							unit: "s",
							min: "0",
							max: "15",
							step: "1",
							init: "6",
						},
						tijd_rood_voor_vrijgave_signaal: {
							stereotype: "configuratie_element",
							title: "Tijd vrijgave signaal",
							description: "De tijdsduur die de Verkeerslichten op rood moeten staan voordat een vrijgavesignaal wordt afgegeven. Let op: de waarde van dit element moet afgestemd zijn op de waarde van het gerelateerde element uit het besturingssysteem(BSTTI#15962).",
							ref: "BSTTI#16918",
							type: "number",
							unit: "s",
							min: "0",
							max: "15",
							step: "1",
							init: "4",
						},
						// Generiek
						bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
							},
						},
						reden_niet_bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Reden niet bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { plaatselijk_bediend: "Plaatselijk bediend", noodstop: "Noodstop", werkschakelaar: "Werkschakelaar", storing: "Storing", disabled: "Disabled", opstart: "Opstart" },
							type: "array",
							// CHECK initvalue
							initvalue: "opstart",
						},
						observeerbaar: {
							stereotype: "toestandsvariabele",
							title: "Observeerbaar",
							description: "Uit de bij iedere LFV (of component) beschikbare variabelen #bestuurbaar en #reden_niet_bestuurbaar (zie sectie 4.4) kan als volgt een waarde afgeleid worden voor de impliciete variabele genaamd #observeerbaar. Overal waar in het vervolg '#observeerbaar = ja' geschreven staat, betekent dit dat voor de LFV(of component) geldt: ofwel '#bestuurbaar = ja', ofwel '#bestuurbaar = nee' mits #reden_niet_bestuurbaar uitsluitend de volgende waardes bevat: 'plaatselijke_bediening' en / of 'noodstop' en / of 'werkschakelaar'. Overal waar in het vervolg '#observeerbaar = nee' geschreven staat, betekent dit dat voor de LFV(of component) geldt: '#bestuurbaar = nee' en bovendien bevat #reden_niet_bestuurbaar uitsluitend waardes die verschillen van 'plaatselijke_bediening', 'noodstop' en 'werkschakelaar'.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK includes?
							get: function () {
								return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
							},
						},
						// Specifiek
						storingen: {
							stereotype: "toestandsvariabele",
							title: "Storingen",
							description: "De LFV Verkeerslichten dient de volgende generieke storingen te detecteren: ; STORING_ALGEMEEN: Er is een niet specifieke storing gedetecteerd. ; STORING_COMMUNICATIE_UITGEVALLEN: Er is een storing in de communicatie met de LFV gedetecteerd. ; De LFV Verkeerslichten dient de volgende specifieke storingen te detecteren: ; STORING_ROOD_ACTIEVE_LICHTEN: De Verkeerslichten zijn ingesteld om rood te tonen, maar geen van de actieve Verkeerslichten kan ‘rood’ tonen. Merk op: #stand wordt geel_knipperen(zie BSTTI#16901). ; STORING_J32: Een of meer J32 borden tonen niet de gewenste stand of er is een storing in de terugmelding. ",
							ref: "BSTTI#16850",
							comment: "",
							enum: { STORING_ALGEMEEN: "Storing algemeen", STORING_COMMUNICATIE_UITGEVALLEN: "Storing uitval communicatie met de LFV", STORING_ROOD_ACTIEVE_LICHTEN: "Storing rood actieve Verkeerslichten", STORING_J32: "Storing J32 borden" },
							type: "array",
						},
						stand_gewenst: {
							stereotype: "hulpvariabele",
							title: "Gewenste stand verkeerslichten",
							description: "De stand die de Verkeerslichten moeten aannemen.",
							ref: "",
							comment: "",
							enum: { rood: "Rood", geel: "Geel", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },
						},
						stand: {
							stereotype: "toestandsvariabele",
							title: "Stand Verkeerslichten",
							description: "De stand die de Verkeerslichten tonen (met uitzondering van lichten die niet actief zijn of wegens storing gedoofd zijn). Als er geen actieve Verkeerslichten zijn is dit de stand die een Verkeerslicht zal tonen wanneer deze actief wordt.",
							ref: "BSTTI#16848",
							comment: "#stand: rood | geel | geel_knipperen | groen | gedoofd",
							enum: { rood: "Rood", geel: "Geel", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },
							//get: function () {
							//	return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", this.ingestelde_stand) ? this.ingestelde_stand : this.stand;
							//},

							//value: {
							//	set(value) {
							//		Aim.messenger.send({
							//			to: [Aim.client.domain.id], value: [
							//				{ id: this.id, schema: this.schema, values: { stand: value }, },
							//			]
							//		});

							//	},
							//},
						},
						stand_j32_gewenst: {
							stereotype: "hulpvariabele",
							title: "Gewenste stand J32 borden",
							description: "De stand die de J32-borden moeten aannemen.",
							ref: "",
							comment: "",
							enum: { aan: "Aan", uit: "Uit" },
						},
						stand_j32: {
							stereotype: "toestandsvariabele",
							title: "Stand J32 borden",
							description: "De stand van de signaalgever op signaleringsraai s (1 ≤ s ≤ 3) van rijstrook r (1 ≤ r ≤ n), waarbij n overeenkomt met het aantal rijstroken minus één, met een minimum van 1. De nummering van signaleringsraaien dient oplopend te zijn in de rijrichting, overeenkomend met de nummering zoals gebruikt bij de MTM-koppeling (BSTTI#1209). Merk op dat ook de rijstroken worden genummerd volgens de definitie in ref. [BPS]. storing: geeft aan dat terugmelding faalt, waardoor de stand van het bord onbekend is.",
							ref: "BSTTI#16848",
							// CHECK twee-dimensionaal array
							comment: "#stand_j32[1..3, 1..n]: aan | uit | storing",
							enum: { aan: "Aan", uit: "Uit", storing: "Storing" },
						},
					},
					operations: {
						SetStand: {
							stereotype: "commando",
							title: "Set Stand",
							description: "Stelt de stand van de Verkeerslichten in. De LFV moet deze stand in stappen realiseren, in overeenstemming met eis BSTTI#16902.",
							ref: "BSTTI#16849",
							comment: "SetStand( rood | geel_knipperen | groen | gedoofd )",
							conditie: function () {
								return true;
							},
							arguments: {},
							publish: true,
							// cm: function (stand) {
							// 	//this.set('stand_gewenst', stand);
							//
							// 	//debug MVK
							// 	if (!stand) return;
							// 	if (stand == 'rood') {
							// 		setTimeout(function () {
							// 			this.lfv_Verkeerslicht_Verkeersbuis.forAll(function (item) {
							// 				item.SetStand('rood');
							// 			});
							// 		}.bind(this), 6000);
							// 		stand = 'geel';
							// 	}
							// 	this.lfv_Verkeerslicht_Verkeersbuis.forAll(function (item) {
							// 		item.SetStand(stand);
							// 	});
							// },
						},
					},
					// SetStand: function(stand) {
					// 	console.debug("LFV VKLN", stand);
					// 	ws.request({ sub:this.master.master.ID, path: `/SetStand(${stand})`, method: 'GET' });
					// },
					statemodel: {
						init: {
							entry: function () {
								console.debug('init entry');
								this.bestuurbaar = 'ja';
								this.ingestelde_stand = 'gedoofd';
								//console.debug('>>>>', this.lfv_Verkeerslicht_Verkeersbuis);
								//forAll(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "geel_knipperen")
							},
							do: function () {
								//console.debug('init do');
								//forAll(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "rood")
							},
							exit: function () {
								console.debug('init exit');
							},
						},
						gedoofd: {
							trigger: {
								init: function () {
									return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "gedoofd")
								},
								groen: function () {
									return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand_gewenst", "gedoofd") && this.timerPassed
								},
								geel_knipperen: function () {
									return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand_gewenst", "gedoofd") && this.timerPassed
								},
							},
							entry: function () {
								console.debug('gedoofd entry');
								//forAll(this.lfv_J32_Verkeersbuis, "SetStand", "uit");
								forAll(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "gedoofd");
							},
							do: function () {
								console.debug('gedoofd do');
							},
							exit: function () {
								console.debug('gedoofd exit');
							},
						},
						j32_aan: {
							trigger: {
								gedoofd: function () { return this.stand_gewenst != "gedoofd" },
							},
							entry: function () {
								console.debug('j32_aan entry');
								forAll(this.lfv_J32_Verkeersbuis, "SetStand", "aan");
								this.timerSet(this.tijd_j32);
							},
							do: function () {
								console.debug('j32_aan do');
							},
							exit: function () {
								console.debug('j32_aan exit');
							},
						},
						geel_knipperen: {
							trigger: {
								init: function () {
									return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "geel_knipperen")
								},
								j32_aan: function () {
									return checkAll(this.lfv_J32_Verkeersbuis, "stand", "aan") && this.timerPassed
								},
								groen: function () {
									return this.stand_gewenst == "geel_knipperen" && this.timerPassed
									//return this.lfv_Verkeerslichten_Verkeersbuis.stand_gewenst == "geel_knipperen" && this.timerPassed
								},
								geel: function () {
									//console.debug('TRIGGER GEEL', this, this.stand_gewenst);
									//return this.lfv_Verkeerslichten_Verkeersbuis.stand_gewenst == "geel_knipperen" && this.timerPassed
									return this.stand_gewenst == "geel_knipperen" && this.timerPassed
								},
								rood: function () {
									//return this.lfv_Verkeerslichten_Verkeersbuis.stand_gewenst == "gedoofd" && this.timerPassed || this.lfv_Verkeerslichten_Verkeersbuis.STORING_ROOD_ACTIEVE_LICHTEN == true
									return this.stand_gewenst == "gedoofd" && this.timerPassed || this.STORING_ROOD_ACTIEVE_LICHTEN == true
								}, // Kan dit zo?
							},
							entry: function () {
								console.debug('geel_knipperen entry');
								forAll(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "geel_knipperen");
								this.timerSet(this.tijd_geel_knipperen); // tijd pas starten als de gewenste stand is bereikt????
							},
							do: function () {
								console.debug('geel_knipperen do');
							},
							exit: function () {
								console.debug('geel_knipperen exit');
							},
						},
						geel: {
							trigger: {
								init: function () { return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "geel") },
								geel_knipperen: function () { return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "geel_knipperen") && this.timerPassed },
								groen: function () { return this.stand_gewenst == "rood" && this.timerPassed },
							},
							entry: function () {
								console.debug('geel entry');
								forAll(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "geel");
								this.timerSet(this.tijd_geel);
							},
							do: function () {
								console.debug('geel do');
							},
							exit: function () {
								console.debug('geel exit');
							},
						},
						rood: {
							trigger: {
								init: function () { return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "rood") },
								geel: function () { return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "geel") && this.timerPassed },
								vrijgave_afsluitboom: function () {
									return this.stand_gewenst == "gedoofd" || this.stand_gewenst == "geel_knipperen" || this.stand_gewenst == "groen"
								},
							},
							entry: function () {
								//console.debug('rood entry', this.lfv_Verkeerslicht_Verkeersbuis);
								forAll(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "rood");
								this.timerSet(this.tijd_rood); // Tweede timer nodig, tbv afsluitboom vrijgave!!!
							},
							do: function () {
								console.debug('rood do');
							},
							exit: function () {
								console.debug('rood exit');
							},
						},
						groen: {
							trigger: {
								init: function () { return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "groen") },
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
								console.debug('groen entry');
								forAll(this.lfv_Verkeerslicht_Verkeersbuis, "SetStand", "groen");
								this.timerSet(this.tijd_groen);
							},
							do: function () {
								console.debug('groen do');
							},
							exit: function () {
								console.debug('groen exit');
							},
						},
						vrijgave_afsluitboom: {
							trigger: {
								rood: function () { return checkAll(this.lfv_Verkeerslicht_Verkeersbuis, "stand", "rood") && this.timerPassed },
							},
							entry: function () {
								console.debug('vrijgave_afsluitboom entry');
								// SetVrijgaveAfsluitboom(aan)
							},
							do: function () {
								console.debug('vrijgave_afsluitboom do');
							},
							exit: function () {
								console.debug('vrijgave_afsluitboom exit');
								// SetVrijgaveAfsluitboom(uit)
							},
						},
					},
				},
				lfv_Verkeerslicht_Verkeersbuis: {
					hoortbij: "lfv/Verkeerslichten_Verkeersbuis",
					shortname: 'lfv_Verkeerslicht',
					title: "LFV Verkeerslicht",
					cm: 1,
					wss: configDefault.wss,
					properties: {
						// Generiek
						bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
							},
						},
						reden_niet_bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Reden niet bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { plaatselijk_bediend: "Plaatselijk bediend", noodstop: "Noodstop", werkschakelaar: "Werkschakelaar", storing: "Storing", disabled: "Disabled", opstart: "Opstart" },
							type: "array",
							// CHECK initvalue
							initvalue: "opstart",
						},
						observeerbaar: {
							stereotype: "toestandsvariabele",
							title: "Observeerbaar",
							description: "Uit de bij iedere LFV (of component) beschikbare variabelen #bestuurbaar en #reden_niet_bestuurbaar (zie sectie 4.4) kan als volgt een waarde afgeleid worden voor de impliciete variabele genaamd #observeerbaar. Overal waar in het vervolg '#observeerbaar = ja' geschreven staat, betekent dit dat voor de LFV(of component) geldt: ofwel '#bestuurbaar = ja', ofwel '#bestuurbaar = nee' mits #reden_niet_bestuurbaar uitsluitend de volgende waardes bevat: 'plaatselijke_bediening' en / of 'noodstop' en / of 'werkschakelaar'. Overal waar in het vervolg '#observeerbaar = nee' geschreven staat, betekent dit dat voor de LFV(of component) geldt: '#bestuurbaar = nee' en bovendien bevat #reden_niet_bestuurbaar uitsluitend waardes die verschillen van 'plaatselijke_bediening', 'noodstop' en 'werkschakelaar'.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK includes?
							get: function () {
								return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
							},
						},
						// Specifiek
						storingen: {
							stereotype: "toestandsvariabele",
							title: "Storingen",
							description: "Elk component Verkeerslicht dient de volgende generieke storingen te detecteren: ; STORING_ALGEMEEN: Er is een niet specifieke storing gedetecteerd. ; STORING_COMMUNICATIE_UITGEVALLEN: Er is een storing in de communicatie met de LFV gedetecteerd. ; Elk component Verkeerslicht dient de volgende specifieke storingen te detecteren: ; STORING_ROOD: Het Verkeerslicht kan de stand rood niet tonen. ; STORING_GEEL: Het Verkeerslicht kan de stand geel niet tonen. ; STORING_GEEL_KNIPPEREN: Het Verkeerslicht kan de stand geel knipperen niet tonen. ; STORING_GROEN: Het Verkeerslicht kan de stand groen niet tonen.",
							ref: "BSTTI#4106",
							comment: "",
							enum: {
								STORING_COMMUNICATIE_UITGEVALLEN: { title: "Storing uitval communicatie met de LFV", shortname: "STORING_COMM" }, // wordt bij 3B actief als comm WSS is uitgevallen
								//STORING_WSS: {}, // wordt actief als WSS offline
								STORING_EM: {}, // wordt actief als EM offline
								STORING_VELD: {}, // volgt uit OPC Quality bad, of PLCNext timeout, hartbeat met PLC informeerd PLC,

								STORING_ALGEMEEN: { idx: 1, title: "Storing algemeen", shortname: "STORING_ALGEMEEN", kritisch: 1 },
								STORING_ROOD: { idx: 2, title: "Storing rood" },
								STORING_GEEL: { idx: 3, title: "Storing geel" },
								STORING_GEEL_KNIPPEREN: { idx: 4, title: "Storing geel knipperen" },
								STORING_GROEN: { idx: 5, title: "Storing groen" },
							},
							type: "array",
						},
						actief: {
							stereotype: "toestandsvariabele",
							title: "Actief",
							description: "Als het Verkeerslicht actief is moet het Verkeerslicht de stand tonen die op de LFV Verkeerslichten is ingesteld. Als het Verkeerslicht niet actief is moet het Verkeerslicht gedoofd zijn (#stand = gedoofd).",
							ref: "BSTTI#16853",
							comment: "#actief: ja | nee",
							enum: { ja: "Ja", nee: "Nee" },
						},
						stand: {
							stereotype: "toestandsvariabele",
							title: "Stand",
							description: "De stand die het Verkeerslicht toont. Als het Verkeerslicht niet actief is, moet de stand gedoofd zijn. Ook als het Verkeerslicht gedoofd is wegens storing moet deze variabele gedoofd aangeven.",
							ref: "BSTTI#16853",
							comment: "#stand: rood | geel | geel_knipperen | groen | gedoofd",
							enum: { rood: "Rood", geel: "Geel", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },
							external: {},
							initRT: {},
							//programID: 'Main',
							//opc: {
							//	programID: 'Main',
							//},

							// opbouw itemID = {PLC, komt uit DB config.}{programID.}{(shortname||name).}{propertyName}  ILC01.main.lfv_Verkeerslicht.stand

							//plcName: 'lfv_Verkeerslicht_', // wordt vooraf gegaan door Hierarchie, wordt aangevuld met idx waarde, bv: ILC01.Main.lfv_Verkeerslicht_1

							//itemID: 'lfv_Verkeerslicht_', // wordt vooraf gegaan door Hierarchie, wordt aangevuld met idx waarde, bv: ILC01.Main.lfv_Verkeerslicht_1
							//opc: {
							//	prefix: '.Main.',
							//},
							//plcNext: {
							//	itemID: 'lfv_Verkeerslicht_', // wordt vooraf gegaan door Hierarchie, wordt aangevuld met idx waarde, bv: ILC01.Main.lfv_Verkeerslicht_1
							//},
						},
					},
					operations: {
						//SetStoringen: {
						//	external: {},
						//},
						SetActief: {
							stereotype: "commando",
							title: "Set Actief",
							description: "Maakt het Verkeerslicht actief of niet actief.",
							ref: "BSTTI#16852",
							comment: "SetActief( ja | nee )",
							cm: function (stand) {
								console.debug(stand);
								this.actief = stand;
							},

							// CHECK code?
						},
						SetStand: {
							external: {},
							cm: function (stand) {
								console.debug('SetStand', this, stand);
								//console.debug('lfv_Verkeerslicht_Verkeersbuis.SetStand', stand, this, this.lfv_Verkeerslichten_Verkeersbuis);
								//console.debug('this.lfv_Verkeerslichten_Verkeersbuis', this.lfv_Verkeerslichten_Verkeersbuis);
								//console.debug('sf_Verkeerslichten_Verkeersbuis', this.sf_Verkeerslichten_Verkeersbuis);
								this.set('stand', stand); // this.stand = stand;
							}
						},
						BewaakStand: {
							stereotype: "autonoom_proces",
							sim: function () {
								console.debug('VKL bewaakstand');
								this.lfv_Verkeerslichten_Verkeersbuis.BewaakStand();
							}
						},

					},
				},
				lfv_J32: {
					properties: {
						stand: {

						},
					},
					operations: {
						SetStand: {
							sim: function (stand) {
								this.stand = stand;

							}
						},

					},
				},
				lfv_Afsluitboom_Verkeersbuis: {
					title: "LFV afsluitboom",
					properties: {
						// Generiek
						bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
							},
						},
						reden_niet_bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Reden niet bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { plaatselijk_bediend: "Plaatselijk bediend", noodstop: "Noodstop", werkschakelaar: "Werkschakelaar", storing: "Storing", disabled: "Disabled", opstart: "Opstart" },
							type: "array",
							// CHECK initvalue
							initvalue: "opstart",
						},
						observeerbaar: {
							stereotype: "toestandsvariabele",
							title: "Observeerbaar",
							description: "Uit de bij iedere LFV (of component) beschikbare variabelen #bestuurbaar en #reden_niet_bestuurbaar (zie sectie 4.4) kan als volgt een waarde afgeleid worden voor de impliciete variabele genaamd #observeerbaar. Overal waar in het vervolg '#observeerbaar = ja' geschreven staat, betekent dit dat voor de LFV(of component) geldt: ofwel '#bestuurbaar = ja', ofwel '#bestuurbaar = nee' mits #reden_niet_bestuurbaar uitsluitend de volgende waardes bevat: 'plaatselijke_bediening' en / of 'noodstop' en / of 'werkschakelaar'. Overal waar in het vervolg '#observeerbaar = nee' geschreven staat, betekent dit dat voor de LFV(of component) geldt: '#bestuurbaar = nee' en bovendien bevat #reden_niet_bestuurbaar uitsluitend waardes die verschillen van 'plaatselijke_bediening', 'noodstop' en 'werkschakelaar'.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK includes?
							get: function () {
								return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
							},
						},
						// Specifiek
						storingen: {
							title: "Storingen",
							description: "Elke afsluitboom dient de volgende generieke storingen te detecteren: ; STORING_ALGEMEEN: Er is een niet specifieke storing gedetecteerd. ; STORING_COMMUNICATIE_UITGEVALLEN: Er is een storing in de communicatie met de LFV gedetecteerd. ; Elke Afsluitboom dient de volgende specifieke storingen te detecteren: ; STORING_OBSTAKELDETECTIE: Er is een storing in de obstakeldetectie gedetecteerd.",
							ref: "BSTTI#10059",
							comment: "",
							enum: { STORING_ALGEMEEN: "Storing algemeen", STORING_COMMUNICATIE_UITGEVALLEN: "Storing uitval communicatie met de LFV", STORING_OBSTAKELDETECTIE: "Storing obstakeldetectie" },
							type: "array",
						},
						stand: {
							title: "Stand",
							description: "Representatie van de stand van de boom. ; op: De boom is volledig geopend. ; op_verlaten: De boom is niet geopend en niet volledig gesloten. ; neer: De boom is volledig gesloten",
							ref: "BSTTI#1820",
							comment: "#stand: op | op_verlaten | neer",
							enum: { op: "Op", op_verlaten: "Op verlaten", neer: "Neer" },
						},
						beweging: {
							title: "Beweging",
							description: "Representatie van de actieve beweging van de boom. De boom dient alleen actief te bewegen als gevolg van een ontvangen commando. Zo dient #beweging niet de waarde 'op' of 'neer' te krijgen als gevolg van beweging door de wind. ; op: De boom is actief aan het openen ; neer: De boom is actief aan het sluiten ; geen: De boom beweegt niet actief",
							ref: "BSTTI#1820",
							comment: "#beweging: op | neer | geen",
							enum: { op: "Op", neer: "Neer", geen: "Geen" },
						},
						obstakelgedetecteerd: {
							title: "Obstakel gedetecteerd",
							description: "Er is al dan niet een obstakel gedetecteerd",
							ref: "BSTTI#1820",
							comment: "#obstakelgedetecteerd: ja | nee",
							enum: { ja: "Ja", nee: "Nee" },
						},
						vrijgavesignaal_ontvangen: {
							title: "Vrijgave signaal ontvangen",
							description: "Geeft aan of de afsluitboom (interlock) is vrijgegeven vanuit de Verkeerslichten.",
							ref: "BSTTI#1820",
							comment: "#vrijgavesignaal_ontvangen: ja | nee",
							enum: { ja: "Ja", nee: "Nee" },
						},
					},
					operations: {
						Op: {
							title: "Op",
							description: "Dit commando zorgt ervoor dat de boom naar de stand op gaat, onafhankelijk van de huidige stand en beweging.",
							ref: "BSTTI#1835",
							comment: "Op()",
							// CHECK code?
						},
						Neer: {
							title: "Neer",
							description: "Dit commando maakt het mogelijk dat de boom naar de stand neer gaat, onafhankelijk van de huidige stand en beweging. BSTTI#16830 geeft nader aan onder welke voorwaarden de slagboom neer gaat.",
							ref: "BSTTI#1835",
							comment: "Neer()",
							// CHECK code?
						},
						NeerOnvoorwaardelijk: {
							title: "Neer onvoorwaardelijk",
							description: "Laat de boom naar de stand neer gaan, onafhankelijk van de huidige stand en beweging en onafhankelijk van de voorwaarden die specifiek bij het commando Neer() zijn gesteld. Dit commando overbrugt al deze voorwaarden eenmalig en mag alleen worden aangeroepen t.g.v. een handmatige bediening (als bevestiging na beoordeling dat de situatie voldoende veilig is).",
							ref: "BSTTI#1835",
							comment: "NeerOnvoorwaardelijk()",
							// CHECK code?
						},
						Stop: {
							title: "Stop",
							description: "Stop direct het openen of sluiten van de Afsluitboom. De Afsluitboom blijft in de stand waarin deze gestopt werd. Dit commando betreft niet een Noodstop, maar moet wel voorrang hebben op de andere commando’s.",
							ref: "BSTTI#1835",
							comment: "Stop()",
							// CHECK code?
						},
					},
				},
				lfv_MTMkoppeling_Verkeersbuis: {
					title: "LFV MTM-koppeling",
					properties: {
						// Generiek
						bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
							},
						},
						reden_niet_bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Reden niet bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { plaatselijk_bediend: "Plaatselijk bediend", noodstop: "Noodstop", werkschakelaar: "Werkschakelaar", storing: "Storing", disabled: "Disabled", opstart: "Opstart" },
							type: "array",
							// CHECK initvalue
							initvalue: "opstart",
						},
						observeerbaar: {
							stereotype: "toestandsvariabele",
							title: "Observeerbaar",
							description: "Uit de bij iedere LFV (of component) beschikbare variabelen #bestuurbaar en #reden_niet_bestuurbaar (zie sectie 4.4) kan als volgt een waarde afgeleid worden voor de impliciete variabele genaamd #observeerbaar. Overal waar in het vervolg '#observeerbaar = ja' geschreven staat, betekent dit dat voor de LFV(of component) geldt: ofwel '#bestuurbaar = ja', ofwel '#bestuurbaar = nee' mits #reden_niet_bestuurbaar uitsluitend de volgende waardes bevat: 'plaatselijke_bediening' en / of 'noodstop' en / of 'werkschakelaar'. Overal waar in het vervolg '#observeerbaar = nee' geschreven staat, betekent dit dat voor de LFV(of component) geldt: '#bestuurbaar = nee' en bovendien bevat #reden_niet_bestuurbaar uitsluitend waardes die verschillen van 'plaatselijke_bediening', 'noodstop' en 'werkschakelaar'.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK includes?
							get: function () {
								return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
							},
						},
						// Specifiek
						storingen: { // In de LTS is voor de MTM-koppeling #storingen niet uitgewerkt!!!
							stereotype: "toestandsvariabele",
							title: "Storingen",
							description: "Elke MTM-koppeling dient de volgende generieke storingen te detecteren: ; STORING_ALGEMEEN: Er is een niet specifieke storing gedetecteerd. ; STORING_COMMUNICATIE_UITGEVALLEN: Er is een storing in de communicatie met de LFV gedetecteerd.",
							ref: "",
							comment: "",
							enum: { STORING_ALGEMEEN: "Storing algemeen", STORING_COMMUNICATIE_UITGEVALLEN: "Storing uitval communicatie met de LFV" },
							type: "array",
						},
						beeld: {
							stereotype: "toestandsvariabele",
							title: "Beeld",
							description: "Het actuele beeld van de signaalgever op signaleringsraai r (1 ≤ r ≤ m) van rijstrook s (1 ≤ s ≤ n). ; De nummering van signaleringsraaien dient oplopend te zijn in de rijrichting.Merk op dat ook de rijstroken worden genummerd volgens de definitie in ref. [BPS]. De beeldinformatie dient een Groepscode, Beeldcode en Variatiecode te bevatten, volgens de beelden bibliotheek van RWS(ref. [MTMBB]). ; Als er fysiek geen signaleringsraai 1, moeten er bij het opvragen van de beelden van signaleringsraai 1 default waarden worden teruggegeven.",
							ref: "BSTTI#1209",
							comment: "#beeld[1..m, 1..n]",
							// CHECK twee-dimensionaal array
							type: "array",
						},
					},
					operations: {
						SetMaatregel: {
							stereotype: "commando",
							title: "Set Maatregel",
							description: "aan: Vraag de geconfigureerde MTM maatregel ten behoeve van het afsluiten van de verkeersbuis aan. ; uit: Verwijder een eerder aangevraagde snelheidsbeperking.",
							ref: "BSTTI#1211",
							comment: "SetMaatregel(aan | uit)",
							// CHECK code?
						},
						SetKruizenInBuis: {
							stereotype: "commando",
							title: "Set Kruizen In Buis",
							description: "aan: Vraag kruizen aan in de verkeersbuis conform BSTTI#17158. ; uit: Verwijder eerder via dit commando aangevraagde kruizen(voor zover die kruizen er niet ook om andere redenen staan).",
							ref: "BSTTI#1211",
							comment: "SetKruizenInBuis(aan | uit)",
							// CHECK code?
						},
					},
				},
				lfv_CCTV_Verkeersbuis: {
					title: "LFV CCTV Verkeersbuis",
					properties: {
						// Generiek
						bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
							},
						},
						reden_niet_bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Reden niet bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { plaatselijk_bediend: "Plaatselijk bediend", noodstop: "Noodstop", werkschakelaar: "Werkschakelaar", storing: "Storing", disabled: "Disabled", opstart: "Opstart" },
							type: "array",
							// CHECK initvalue
							initvalue: "opstart",
						},
						observeerbaar: {
							stereotype: "toestandsvariabele",
							title: "Observeerbaar",
							description: "Uit de bij iedere LFV (of component) beschikbare variabelen #bestuurbaar en #reden_niet_bestuurbaar (zie sectie 4.4) kan als volgt een waarde afgeleid worden voor de impliciete variabele genaamd #observeerbaar. Overal waar in het vervolg '#observeerbaar = ja' geschreven staat, betekent dit dat voor de LFV(of component) geldt: ofwel '#bestuurbaar = ja', ofwel '#bestuurbaar = nee' mits #reden_niet_bestuurbaar uitsluitend de volgende waardes bevat: 'plaatselijke_bediening' en / of 'noodstop' en / of 'werkschakelaar'. Overal waar in het vervolg '#observeerbaar = nee' geschreven staat, betekent dit dat voor de LFV(of component) geldt: '#bestuurbaar = nee' en bovendien bevat #reden_niet_bestuurbaar uitsluitend waardes die verschillen van 'plaatselijke_bediening', 'noodstop' en 'werkschakelaar'.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK includes?
							get: function () {
								return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
							},
						},
						// Specifiek
						storingen: { // In de LTS is voor de CCTV Verkeersbuis #storingen niet uitgewerkt!!!
							stereotype: "toestandsvariabele",
							title: "Storingen",
							description: "Elke CCTV Verkeersbuis dient de volgende generieke storingen te detecteren: ; STORING_ALGEMEEN: Er is een niet specifieke storing gedetecteerd. ; STORING_COMMUNICATIE_UITGEVALLEN: Er is een storing in de communicatie met de LFV gedetecteerd.",
							ref: "",
							comment: "",
							enum: { STORING_ALGEMEEN: "Storing algemeen", STORING_COMMUNICATIE_UITGEVALLEN: "Storing uitval communicatie met de LFV" },
							type: "array",
						},
					},
					operations: {
					},
				},
				lfv_Camera_Verkeersbuis: {
					title: "LFV component Camera Verkeersbuis",
					properties: {
						// Generiek
						bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
							},
						},
						reden_niet_bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Reden niet bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { plaatselijk_bediend: "Plaatselijk bediend", noodstop: "Noodstop", werkschakelaar: "Werkschakelaar", storing: "Storing", disabled: "Disabled", opstart: "Opstart" },
							type: "array",
							// CHECK initvalue
							initvalue: "opstart",
						},
						observeerbaar: {
							stereotype: "toestandsvariabele",
							title: "Observeerbaar",
							description: "Uit de bij iedere LFV (of component) beschikbare variabelen #bestuurbaar en #reden_niet_bestuurbaar (zie sectie 4.4) kan als volgt een waarde afgeleid worden voor de impliciete variabele genaamd #observeerbaar. Overal waar in het vervolg '#observeerbaar = ja' geschreven staat, betekent dit dat voor de LFV(of component) geldt: ofwel '#bestuurbaar = ja', ofwel '#bestuurbaar = nee' mits #reden_niet_bestuurbaar uitsluitend de volgende waardes bevat: 'plaatselijke_bediening' en / of 'noodstop' en / of 'werkschakelaar'. Overal waar in het vervolg '#observeerbaar = nee' geschreven staat, betekent dit dat voor de LFV(of component) geldt: '#bestuurbaar = nee' en bovendien bevat #reden_niet_bestuurbaar uitsluitend waardes die verschillen van 'plaatselijke_bediening', 'noodstop' en 'werkschakelaar'.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK includes?
							get: function () {
								return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
							},
						},
						// Specifiek
						storingen: { // In de LTS is voor de Camera #storingen niet uitgewerkt!!!
							stereotype: "toestandsvariabele",
							title: "Storingen",
							description: "Elke CCTV Verkeersbuis dient de volgende generieke storingen te detecteren: ; STORING_ALGEMEEN: Er is een niet specifieke storing gedetecteerd. ; STORING_COMMUNICATIE_UITGEVALLEN: Er is een storing in de communicatie met de LFV gedetecteerd.",
							ref: "",
							comment: "",
							enum: { STORING_ALGEMEEN: "Storing algemeen", STORING_COMMUNICATIE_UITGEVALLEN: "Storing uitval communicatie met de LFV" },
							type: "array",
						},
						identificatie_code: {
							stereotype: "toestandsvariabele",
							title: "Identificatie code",
							description: "De camera's moeten elk voorzien zijn van een unieke identificatiecode die zichtbaar is in het geproduceerde beeld.",
							ref: "BSTTI#1620",
							comment: "",
						},
						identificatiecode_weergave: {
							stereotype: "toestandsvariabele",
							title: "Identificatiecode weergave",
							description: "Geeft de weergave van de camerapositie-identificatiecode in het camerabeeld aan. Zie BSTTI#16702.",
							ref: "BSTTI#1620",
							comment: "",
							enum: { normaal: "Normaal", inverse: "Inverse" },
						},
						pan_stand: {
							stereotype: "toestandsvariabele",
							title: "Pan stand",
							description: "De pan stand van de camera.",
							ref: "BSTTI#1620",
							comment: "",
						},
						tilt_stand: {
							stereotype: "toestandsvariabele",
							title: "Tilt stand",
							description: "De tilt stand van de camera.",
							ref: "BSTTI#1620",
						},
						zoom_stand: {
							stereotype: "toestandsvariabele",
							title: "Zoom stand",
							description: "De zoom stand van de camera.",
							ref: "BSTTI#1620",
						},
						focus_stand: {
							stereotype: "toestandsvariabele",
							title: "Focus stand",
							description: "De focus stand van de camera.",
							ref: "BSTTI#1620",
						},
						diafragma_stand: {
							stereotype: "toestandsvariabele",
							title: "Diafragme stand",
							description: "De diafragma stand van de camera.",
							ref: "BSTTI#1620",
						},
						preset: {
							stereotype: "toestandsvariabele",
							title: "Presets",
							description: "De lijst van preset-waarden zoals ingesteld voor deze camera. Elke preset bevat een pan, tilt, zoom, focus, diafragma waarde.",
							ref: "BSTTI#1620",
							type: "array",
						},
						kanalen: {
							stereotype: "toestandsvariabele",
							title: "Kanalen",
							description: "De lijst van kanalen waarop deze camera zichtbaar is.",
							ref: "BSTTI#1620",
							type: "array",
						},
					},
					operations: {
						SetPan: {
							stereotype: "commando",
							title: "Set Pan",
							description: "Laat de camera draaien tot hoek p.",
							ref: "BSTTI#1621",
							comment: "SetPan(p)",
						},
						SetTilt: {
							stereotype: "commando",
							title: "Set Tilt",
							description: "Laat de camera kantelen tot hoek t.",
							ref: "BSTTI#1621",
							comment: "SetTilt(t)",
						},
						SetZoom: {
							stereotype: "commando",
							title: "Set Zoom",
							description: "Laat de camera inzoomen tot z.",
							ref: "BSTTI#1621",
							comment: "SetZoom(z)",
						},
						SetFocus: {
							stereotype: "commando",
							title: "Set Focus",
							description: "Wijzig de focus van de camera tot f. De autofocus stand kan ingeschakeld worden met de gereserveerde AUTOFOCUS waarde.",
							ref: "BSTTI#1621",
							comment: "SetFocus(f)",
						},
						SetDiafragma: {
							stereotype: "commando",
							title: "Set Diafragma",
							description: "Zet de diafragma instelling van de camera in stand d. Met de waarde AUTODIAFRAGMA kan het autodiafragma mechanisme ingeschakeld worden.",
							ref: "BSTTI#1621",
							comment: "SetDiafragma(d)",
						},
						DefinieerPreset: {
							stereotype: "commando",
							title: "Definieer Preset",
							description: "Voer voor de camera een preset positie i in.",
							ref: "BSTTI#1621",
							comment: "DefinieerPreset(i, p, t, z, f, d)",
						},
						SetToPreset: {
							stereotype: "commando",
							title: "Set To Preset",
							description: "Stel de camera in volgens preset i.",
							ref: "BSTTI#1621",
							comment: "SetToPreset(i)",
						},
						SetReferentiePreset: {
							stereotype: "commando",
							title: "Set Referentie Preset",
							description: "Zet een preset i als referentie om te bepalen of de camerapositie-identificatiecode normaal of geïnverteerd moet worden weergegeven.",
							ref: "BSTTI#1621",
							comment: "SetReferentiePreset(i)",
						},
						SetIdentificatiecode: {
							stereotype: "commando",
							title: "Set Identificatiecode",
							description: "Voer voor de camera een identificatiecode ic in.",
							ref: "BSTTI#1621",
							comment: "SetIdentificatiecode(ic)",
						},
						SelectCameraActueelBeeld: {
							stereotype: "commando",
							title: "Select Camera Actueel Beeld",
							description: "Stel het actuele beeld van de camera beschikbaar in kanaal k. Als het beeld niet beschikbaar is dan is dit zwart. Een kanaal wordt door de bediening gekoppeld aan een scherm om het beeld te vertonen. Een camera kan op meerdere kanalen zichtbaar gemaakt worden (minimaal 2).",
							ref: "BSTTI#1621",
							comment: "SelectCameraActueelBeeld(k)",
						},
						UnselectCameraActueelBeeld: {
							stereotype: "commando",
							title: "Unselect Camera Actueel Beeld",
							description: "Koppel het actuele beeld van de camera los van kanaal k.",
							ref: "BSTTI#1621",
							comment: "UnselectCameraActueelBeeld(k)",
						},
					},
				},
				lfv_Opslagsysteem_Verkeersbuis: {
					title: "LFV component Opslagsysteem Verkeersbuis",
					properties: {
						// Generiek
						bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
							},
						},
						reden_niet_bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Reden niet bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { plaatselijk_bediend: "Plaatselijk bediend", noodstop: "Noodstop", werkschakelaar: "Werkschakelaar", storing: "Storing", disabled: "Disabled", opstart: "Opstart" },
							type: "array",
							// CHECK initvalue
							initvalue: "opstart",
						},
						observeerbaar: {
							stereotype: "toestandsvariabele",
							title: "Observeerbaar",
							description: "Uit de bij iedere LFV (of component) beschikbare variabelen #bestuurbaar en #reden_niet_bestuurbaar (zie sectie 4.4) kan als volgt een waarde afgeleid worden voor de impliciete variabele genaamd #observeerbaar. Overal waar in het vervolg '#observeerbaar = ja' geschreven staat, betekent dit dat voor de LFV(of component) geldt: ofwel '#bestuurbaar = ja', ofwel '#bestuurbaar = nee' mits #reden_niet_bestuurbaar uitsluitend de volgende waardes bevat: 'plaatselijke_bediening' en / of 'noodstop' en / of 'werkschakelaar'. Overal waar in het vervolg '#observeerbaar = nee' geschreven staat, betekent dit dat voor de LFV(of component) geldt: '#bestuurbaar = nee' en bovendien bevat #reden_niet_bestuurbaar uitsluitend waardes die verschillen van 'plaatselijke_bediening', 'noodstop' en 'werkschakelaar'.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK includes?
							get: function () {
								return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
							},
						},
						// Specifiek
						storingen: { // In de LTS is voor de Opslagsysteem #storingen niet uitgewerkt!!!
							title: "Storingen",
							description: "Elke CCTV Verkeersbuis dient de volgende generieke storingen te detecteren: ; STORING_ALGEMEEN: Er is een niet specifieke storing gedetecteerd. ; STORING_COMMUNICATIE_UITGEVALLEN: Er is een storing in de communicatie met de LFV gedetecteerd.",
							ref: "",
							comment: "",
							enum: { STORING_ALGEMEEN: "Storing algemeen", STORING_COMMUNICATIE_UITGEVALLEN: "Storing uitval communicatie met de LFV" },
							type: "array",
						},
						permanent_opslaan: {
							stereotype: "toestandsvariabele",
							title: "Permanent opslaan",
							description: "Toestandsvariabele die aangeeft of er momenteel permanente opslag plaatsvindt.",
							ref: "BSTTI#2812",
							comment: "",
							enum: { gestart: "Gestart", gestopt: "Gestopt" },
						},
						opgeslagen_sessie: {
							stereotype: "toestandsvariabele",
							title: "Opgeslagen sessie",
							description: "Lijst van achtereenvolgende opslagsessies. Elke opslagsessie bevat alle opgenomen beelden uit een gegeven tijdsperiode, en ook de begin- en eindtijd. Elk element bevat de volgende subvelden: id: Een uniek identificatie nummer per opslagsessie.Dit identificatie nummer mag nooit veranderen. omschrijving: Instelbare tekstuele omschrijving van de sessie.Initieel leeg. begintijd: Eerste opgeslagen tijdsmoment van deze sessie. eindtijd: Laatste opgeslagen tijdsmoment van deze sessie. Dit subveld is leeg zolang de opslag van deze sessie nog gaande is.",
							ref: "BSTTI#2812",
							comment: "",
							type: "array",
						},
						opgenomen_tijdstip: {
							stereotype: "toestandsvariabele",
							title: "Opgenomen tijdstip",
							description: "Per kanaal is dit het tijdsmoment waarop de getoonde beelden oorspronkelijk opgenomen zijn. Als er op een kanaal geen opgenomen beelden getoond worden dan is de waarde voor dat kanaal leeg.",
							ref: "BSTTI#2812",
							comment: "",
						},
						afspeelsnelheid: {
							stereotype: "toestandsvariabele",
							title: "Afspeelsnelheid",
							description: "De snelheid waarmee opgeslagen beelden afgespeeld worden; rationaal getal, met de volgende betekenis: 1: nominale afspeelsnelheid, overeenkomend met 'play' 0: gepauzeerd s: fastforwardsnelheid. - s: fastbackwardsnelheid.",
							ref: "BSTTI#2812",
							comment: "",
						},
						cots_medium: {
							stereotype: "toestandsvariabele",
							title: "COTS medium",
							description: "Lijst met aangekoppelde COTS opslagmedia. #cots_medium is leeg als er geen COTS opslagmedium aangekoppeld is.",
							ref: "BSTTI#2812",
							comment: "",
							type: "array",
						},
					},
					operations: {
						StartPermanenteOpslag: {
							stereotype: "commando",
							title: "Start permanente opslag",
							description: "commando, om van elke camera het vanaf de starttijd opgeslagen beeld in de FIFO en de actuele beelden op te slaan in een nieuwe opslagsessie. Als er al een opslagsessie gaande is wordt dit commando genegeerd. Als de aangegeven starttijd vroeger is dan het begin van de FIFO zal deze afgerond worden naar de begintijd van de FIFO. De gekozen starttijd mag zich niet in de toekomst bevinden. Als de gekozen starttijd zich tussen een begin- en eindtijd van een bestaande en afgeronde opslagsessie bevindt, wordt de eindtijd van de bestaande sessie als starttijd van de nieuwe sessie genomen.",
							ref: "BSTTI#1623",
							comment: "StartPermanenteOpslag(starttijd)",
						},
						StopPermanenteOpslag: {
							stereotype: "commando",
							title: "Stop permanente opslag",
							description: "commando, om een opslagsessie te beëindigen op de aangegeven stoptijd, en de normale situatie te hervatten, waarbij alle actuele beelden in de FIFO worden opgeslagen. Als er geen opslagsessie gaande is wordt dit commando genegeerd. De stoptijd moet later zijn dan de begintijd van de huidige sessie. De gekozen stoptijd mag zich niet in de toekomst bevinden, en ook niet tussen een begin- en eindtijd van een bestaande opslagsessie.",
							ref: "BSTTI#1623",
							comment: "StopPermanenteOpslag(stoptijd)",
						},
						SelectCameraPermanenteOpslagBeeld: {
							stereotype: "commando",
							title: "Select camera permanente opslag beeld",
							description: "commando, om het opgeslagen beeld van camera met index i vanaf tijdstip t beschikbaar te stellen in kanaal k. Als het beeld niet beschikbaar is dan wordt het zwart. Met een herhaald commando met dezelfde i,k waarde kunnen sprongen in de tijd gemaakt worden.",
							ref: "BSTTI#1623",
							comment: "SelectCameraPermanenteOpslagBeeld(i, k, t)",
						},
						SetSessieOmschrijving: {
							stereotype: "commando",
							title: "Set sessie omschrijving",
							description: "commando, om de omschrijving van de sessie met het opgegeven id te veranderen in de aangegeven tekst.",
							ref: "BSTTI#1623",
							comment: "SetSessieOmschrijving(id, tekst)",
						},
						WisPermanenteOpslagSessie: {
							stereotype: "commando",
							title: "Wis permanente opslagsessie",
							description: "commando, om de opslagsessie met het opgegeven id te wissen uit de opgeslagen_sessie lijst. Hierdoor schuiven alle sessies die een hogere index in de lijst hebben dan deze sessie één indexpositie omlaag.",
							ref: "BSTTI#1623",
							comment: "WisPermanenteOpslagSessie(id)",
						},
						KopieerPermanenteOpslagBeeld: {
							stereotype: "commando",
							title: "Kopieer permanente opslagbeeld",
							description: "commando, om de opslagsessie met het opgegeven id, inclusief subvelden, te kopiëren naar COTS bestemming b.",
							ref: "BSTTI#1623",
							comment: "KopieerPermanenteOpslagBeeld(id, b)",
						},
						Pauze: {
							stereotype: "commando",
							title: "Pauze",
							description: "commando, om het afspelen van het opgeslagen beeld te pauzeren.",
							ref: "BSTTI#1623",
							comment: "Pauze(i, k)",
						},
						Play: {
							stereotype: "commando",
							title: "Play",
							description: "commando, om het afspelen van het opgeslagen beeld te continueren.",
							ref: "BSTTI#1623",
							comment: "Play(i, k)",
						},
						FastForward: {
							stereotype: "commando",
							title: "Fastforward",
							description: "commando, resulterend in versneld vooruit afspelen met snelheid s. 's' geeft de relatieve snelheid weer t.o.v. real-time.",
							ref: "BSTTI#1623",
							comment: "FastForward(i,k,s)",
						},
						FastBackward: {
							stereotype: "commando",
							title: "Fastbackward",
							description: "commando, resulterend in versneld achteruit afspelen met snelheid s. 's' geeft de relatieve snelheid weer t.o.v. real-time.",
							ref: "BSTTI#1623",
							comment: "FastBackward(i,k,s)",
						},
						UnselectCameraOpslagBeeld: {
							stereotype: "commando",
							title: "Unselect camera opslagbeeld",
							description: "commando, om de beschikbaarheid van het opgeslagen beeld van camera i op kanaal k op te heffen en het kanaal vrij te geven.",
							ref: "BSTTI#1623",
							comment: "UnselectCameraOpslagBeeld(i, k)",
						},
					},
				},
				lfv_Hulppost_Verkeersbuis: {
					title: "LFV Hulppost Verkeersbuis",
					properties: {
						// Generiek
						bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
							},
						},
						reden_niet_bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Reden niet bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { plaatselijk_bediend: "Plaatselijk bediend", noodstop: "Noodstop", werkschakelaar: "Werkschakelaar", storing: "Storing", disabled: "Disabled", opstart: "Opstart" },
							type: "array",
							// CHECK initvalue
							initvalue: "opstart",
						},
						observeerbaar: {
							stereotype: "toestandsvariabele",
							title: "Observeerbaar",
							description: "Uit de bij iedere LFV (of component) beschikbare variabelen #bestuurbaar en #reden_niet_bestuurbaar (zie sectie 4.4) kan als volgt een waarde afgeleid worden voor de impliciete variabele genaamd #observeerbaar. Overal waar in het vervolg '#observeerbaar = ja' geschreven staat, betekent dit dat voor de LFV(of component) geldt: ofwel '#bestuurbaar = ja', ofwel '#bestuurbaar = nee' mits #reden_niet_bestuurbaar uitsluitend de volgende waardes bevat: 'plaatselijke_bediening' en / of 'noodstop' en / of 'werkschakelaar'. Overal waar in het vervolg '#observeerbaar = nee' geschreven staat, betekent dit dat voor de LFV(of component) geldt: '#bestuurbaar = nee' en bovendien bevat #reden_niet_bestuurbaar uitsluitend waardes die verschillen van 'plaatselijke_bediening', 'noodstop' en 'werkschakelaar'.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK includes?
							get: function () {
								return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
							},
						},
						// Specifiek
						storingen: { // In de LTS is voor de Hulppost #storingen niet uitgewerkt!!!
							stereotype: "toestandsvariabele",
							title: "Storingen",
							description: "Elke Hulppost dient de volgende generieke storingen te detecteren: ; STORING_ALGEMEEN: Er is een niet specifieke storing gedetecteerd. ; STORING_COMMUNICATIE_UITGEVALLEN: Er is een storing in de communicatie met de LFV gedetecteerd.",
							ref: "",
							comment: "",
							enum: { STORING_ALGEMEEN: "Storing algemeen", STORING_COMMUNICATIE_UITGEVALLEN: "Storing uitval communicatie met de LFV" },
							type: "array",
						},
						hulppost_type: {
							stereotype: "toestandsvariabele",
							title: "Hulppost type",
							description: "Geeft aan wat voor type hulppost dit is.",
							ref: "BSTTI#453",
							comment: "",
							enum: { A: "A", C: "C" },
							type: "",
						},
						deur_open: {
							stereotype: "toestandsvariabele",
							title: "Deur open",
							description: "Geeft aan of de eerst openende deur open is.",
							ref: "BSTTI#453",
							comment: "",
							enum: { ja: "Ja", nee: "Nee", disabled: "Disabled" },
							type: "",
						},
						deur_open_enabled: {
							stereotype: "hulpvariabele",
							title: "Deur open detectie enabled/disabled",
							description: "Hulpvariabele om enabled/disabled te onthouden.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							type: "",
						},
						blusapparaat_in_houder_enabled: {
							stereotype: "hulpvariabele",
							title: "Blusapparaat in houder detectie enabled/disabled",
							description: "Hulpvariabele om enabled/disabled te onthouden.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							type: "",
						},
						spuitmond_enabled: {
							stereotype: "hulpvariabele",
							title: "Spuitmond detectie enabled/disabled",
							description: "Hulpvariabele om enabled/disabled te onthouden.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							type: "",
						},
					},
					operations: {
						EnableDetector: {
							stereotype: "commando",
							title: "Enable detector",
							description: "Activeert of deactiveert een toestandsvariabele; de toestandsvariabele overeenkomend met sensor_id zal de actuele waarde reflecteren (indien enabled = 'ja') of krijgt de waarde 'detector_disabled' (indien enabled = 'nee'). Hierbij identificeert sensor_id een van de toestandsvariabelen('deur' voor #deur_open, 'blusapparaat' voor #blusapparaat_in_houder, en 'spuitmond' voor #spuitmond_slanghaspel_in_houder).",
							ref: "BSTTI#10611",
							comment: "",
							conditie: function () {
								return true;
							},
							cm: function (sensor_id, enabled) {
								// console.debug('LFV Hulppost', 'EnableDetector', 'Sensor_Id: ' & sensor_id ,'Enabled: ' & enabled );
								sensor_id == "deur" && enabled == "ja" ? this.deur_open_enabled = "ja" : this.deur_open_enabled = "nee";
								sensor_id == "blusapparaat" && enabled == "ja" ? this.blusapparaat_in_houder_enabled = "ja" : this.blusapparaat_in_houder_enabled = "nee";
								sensor_id == "spuitmond" && enabled == "ja" ? this.spuitmond_enabled = "ja" : this.spuitmond_enabled = "nee";
							},
						},
					},
				},
				lfv_Verlichting_VeiligeRuimte: {
					title: "LFV Verlichting Veilige Ruimte",
					properties: {
						// Generiek
						bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.reden_niet_bestuurbaar == "" ? "ja" : "nee";
							},
						},
						reden_niet_bestuurbaar: {
							stereotype: "toestandsvariabele",
							title: "Reden niet bestuurbaar",
							description: "Elke LFV en elke component dienen elk de volgende toestandsvariabelen te ondersteunen: '#bestuurbaar', '#reden_niet_bestuurbaar', '#storingen'.",
							ref: "BSTTI#3722",
							comment: "",
							enum: { plaatselijk_bediend: "Plaatselijk bediend", noodstop: "Noodstop", werkschakelaar: "Werkschakelaar", storing: "Storing", disabled: "Disabled", opstart: "Opstart" },
							type: "array",
							// CHECK initvalue
							initvalue: "opstart",
						},
						observeerbaar: {
							stereotype: "toestandsvariabele",
							title: "Observeerbaar",
							description: "Uit de bij iedere LFV (of component) beschikbare variabelen #bestuurbaar en #reden_niet_bestuurbaar (zie sectie 4.4) kan als volgt een waarde afgeleid worden voor de impliciete variabele genaamd #observeerbaar. Overal waar in het vervolg '#observeerbaar = ja' geschreven staat, betekent dit dat voor de LFV(of component) geldt: ofwel '#bestuurbaar = ja', ofwel '#bestuurbaar = nee' mits #reden_niet_bestuurbaar uitsluitend de volgende waardes bevat: 'plaatselijke_bediening' en / of 'noodstop' en / of 'werkschakelaar'. Overal waar in het vervolg '#observeerbaar = nee' geschreven staat, betekent dit dat voor de LFV(of component) geldt: '#bestuurbaar = nee' en bovendien bevat #reden_niet_bestuurbaar uitsluitend waardes die verschillen van 'plaatselijke_bediening', 'noodstop' en 'werkschakelaar'.",
							ref: "",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK includes?
							get: function () {
								return this.reden_niet_bestuurbaar.includes("storing", "disabled", "opstart") ? "nee" : "ja";
							},
						},
						// Specifiek
						storingen: { // In de LTS is voor de Verlichting Veilige Ruimte #storingen niet uitgewerkt!!!
							stereotype: "toestandsvariabele",
							title: "Storingen",
							description: "Elke Verlichting Veilige Ruimte dient de volgende generieke storingen te detecteren: ; STORING_ALGEMEEN: Er is een niet specifieke storing gedetecteerd. ; STORING_COMMUNICATIE_UITGEVALLEN: Er is een storing in de communicatie met de LFV gedetecteerd.",
							ref: "",
							comment: "",
							enum: { STORING_ALGEMEEN: "Storing algemeen", STORING_COMMUNICATIE_UITGEVALLEN: "Storing uitval communicatie met de LFV" },
							type: "array",
						},
						stand: {
							title: "Stand",
							description: "Representatie van de stand van de verlichting.",
							ref: "BSTTI#1781",
							comment: "#stand: aan | uit",
							enum: { aan: "Aan", uit: "Uit" },
						},
					},
					operations: {
						Aan: {
							stereotype: "commando",
							title: "Aanschakelen",
							description: "Commando voor het aanschakelen verlichting.",
							ref: "BSTTI#1784",
							comment: "",
							conditie: function () {
								return true;
							},
							cm: function () {
								// logica?
							},
						},
						Uit: {
							stereotype: "commando",
							title: "Uitschakelen",
							description: "Commando voor het uitschakelen verlichting.",
							ref: "BSTTI#1784",
							comment: "",
							conditie: function () {
								return true;
							},
							cm: function () {
								// logica?
							},
						},
					},
				},



				// Functies van een verkeersbuis
				// Hoogtedetectie
				cf_Hoogtedetectie_Verkeersbuis: {
					naam: "Coördinerende functie Hoogtedetectie",
					hoortbij: "Verkeersbuis",
					titel: "Hoogtedetectie",
					gui: {},
					properties: {},
				},
				// Hoogtedetector
				bf_HoogteDetector_Verkeersbuis: {
					naam: "Basisfunctie Hoogtedetector",
					hoortbij: "Verkeersbuis",
					titel: "Hoogtedetector",
				},
				// SOS
				bf_SOS_Verkeersbuis: {
					naam: "Basisfunctie SOS-detectie",
					hoortbij: "Verkeersbuis",
					titel: "SOS",
				},
				sf_SOSSectie_Verkeersbuis: {
					naam: "Subfunctie SOSsectie",
					hoortbij: "Verkeersbuis",
					titel: "SOS-sectie",
					gui: {},
					properties: {},
				},
				// Omroepmonitor verkeersbuis
				cf_OmroepMonitor_Verkeersbuis: {
					naam: "Coördinerende functie Omroepmonitor",
					hoortbij: "Verkeersbuis",
					titel: "Omroep monitor",
				},
				// Geluidsbakenmonitor verkeersbuis
				cf_GeluidsbakenMonitor_Verkeerbuis: {
					naam: "Coördinerende functie GeluidsbakenMonitor",
					hoortbij: "Verkeersbuis",
					titel: "Geluidsbaken monitor",
				},
				// Omroep verkeersbuis
				bf_Omroep_Verkeersbuis: {
					naam: "Basisfunctie Omroep Verkeersbuis",
					hoortbij: "Verkeersbuis",
					titel: "Omroep",
					gui: {},
					properties: {},
				},
				sf_Omroepsectie_Verkeersbuis: {
					naam: "Subfunctie Omroepsectie",
					hoortbij: "Verkeersbuis",
					titel: "Omroepsectie",
					gui: {},
					properties: {},
				},
				// HF verkeersbuis
				bf_HF_Verkeersbuis: {
					naam: "Basisfunctie HF Verkeersbuis",
					hoortbij: "Verkeersbuis",
					titel: "HF",
					gui: {},
					properties: {},
				},
				// Verlichting verkeersbuis
				bf_Verlichting_Verkeersbuis: {
					naam: "Basisfunctie VerkeersbuisVerlichting",
					hoortbij: "Verkeersbuis",
					titel: "Verlichting",
					mnu: mnu.Buis.Verlichting,
					gui: {},
					properties: {},
				},
				sf_Deelverlichting_Verkeersbuis: {
					//Fysieke opjecten heten "Deelverlichting_Open" "Deelverlichting_Gesloten"
					naam: "Subfunctie DeelVerlichting",
					hoortbij: "Verkeersbuis",
					titel: "Deelverlichting",
					mnu: mnu.Buis.Verlichting,
				},
				sf_VerlichtingsZone_Verkeersbuis: {
					naam: "Subfunctie Verlichtingszone",
					hoortbij: "Verkeersbuis",
					titel: "Zone",
					mnu: mnu.Buis.Verlichting,
				},
				// Verkeersbuisafsluiter
				cf_Afsluiter_Verkeersbuis: {
					naam: "Coördinerende functie VerkeersbuisAfsluiter",
					hoortbij: "Verkeersbuis",
					titel: "Verkeersbuisafsluiter",
					mnu: mnu.Verkeer,
					//menu: 'Verkeer',
					properties: {
						// Configuratie-elementen
						bf_Verkeerslichten_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Verkeerslichten",
							description: "De basisfunctie Verkeerslichten voor deze verkeersbuisafsluiter. Bij een wisselbuis zijn dit enkel de Verkeerslichten die aanwezig zijn bij de ingang die deze verkeersbuisafsluiter afsluit.",
							ref: "BSTTI#16885",
							type: "selectitem",
							class: "Verkeerslichten",
						},
						bf_MTMkoppeling_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "MTM koppeling",
							description: "De basisfunctie MTM-Koppeling voor de rijrichting van deze verkeersbuisafsluiter.",
							ref: "BSTTI#6109",
							type: "selectitem",
							class: "MTM koppeling",
						},
						bf_Afsluitboom_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "De basisfuncties Afsluitboom voor de rijbaan en de vluchtstrook van deze verkeersbuis. Een afsluitboom kan mogelijk meerdere rijstroken tegelijk afsluiten. Bij een wisselbuis zijn dit enkel de afsluitbomen die aanwezig zijn bij de ingang die deze verkeersbuisafsluiter afsluit.",
							ref: "BSTTI#6111",
							type: "selectitem",
							class: "Afsluitboom",
							//initdefaultvalue: [], // CHECK: Is dit nodig?
						},
						sf_Rijstrook_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Rijstrook",
							description: "De subfuncties Rijstrook voor de rijbaan van deze verkeersbuis. Let op dat een eventuele vluchtstrook hier niet bij hoort. Bij een wisselbuis heeft elke verkeersbuisafsluiter zijn eigen subfuncties Rijstrook.",
							ref: "BSTTI#16145",
							type: "selectitem",
							class: "Rijstrook",
							//initdefaultvalue: [], // CHECK: Is dit nodig?
						},
						bf_CCTV_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "CCTV",
							description: "De basisfunctie CCTV.",
							ref: "BSTTI#9682",
							type: "selectitem",
							class: "CCTV",
						},
						sf_Verkeerslichten_Camera: {
							stereotype: "configuratie_element",
							title: "Camera nabij de Verkeerslichten",
							description: "De camera die de Verkeerslichten en het verkeer daarvoor in beeld kan brengen. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#9680",
							type: "selectitem",  // CHECK: Juiste type?
							class: "sf_Camera_Verkeersbuis",
						},
						verkeerslichten_camera_preset: {
							stereotype: "configuratie_element",
							title: "Camera preset voor zicht op de Verkeerslichten",
							description: "De preset voor _sf_Verkeerslichten_camera zodat de Verkeerslichten en het verkeer daarvoor zichtbaar zijn. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#9681",
							type: "selectitem", // CHECK: Juiste type?
							class: "Preset",
						},
						sf_Afsluitbomen_Camera: {
							stereotype: "configuratie_element",
							title: "Camera nabij de afsluitbomen",
							description: "De camera die de afsluitbomen en het verkeer daarvoor in beeld kan brengen. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#14106",
							type: "selectitem", // CHECK: Juiste type?
							class: "sf_Camera_Verkeersbuis",
						},
						afsluitbomen_camera_preset: {
							stereotype: "configuratie_element",
							title: "Camera preset voor zicht op de afsluitbomen",
							description: "De preset voor _sf_afsluitbomen_camera die de afsluitbomen en het verkeer daarvoor in beeld brengt. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#14107",
							type: "selectitem", // CHECK: Juiste type?
							class: "Preset",
						},
						tijd_rood_voor_afsluitbomen_dicht: {
							stereotype: "configuratie_element",
							title: "Tijd rood voor afsluitbomen dicht",
							description: "De tijdsduur die de Verkeerslichten op rood moeten staan voordat de afsluitbomen dicht mogen. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak. De instelling van dit configuratie-element mag alleen i.s.m.een verkeerskundige en tunnelveiligheidsdeskundige van RWS worden aangepast. Let op: de waarden van dit configuratie-element en het gerelateerde element van de LFV Verkeerslichten(BSTTI#16918) moeten op elkaar zijn afgestemd.",
							ref: "BSTTI#15962",
							type: "number",
							unit: "s",
							min: 0,
							max: 60,
							step: 1,
							//initdefaultvalue: "4", // CHECK: is het noodzakelijk om de waarde voor een configuratie-element hier vast te leggen?
						},
						tijd_aansturing_afsluitbomen: {
							stereotype: "configuratie_element",
							title: "Tijd aansturing afsluitbomen",
							description: "De maximale tijdsduur die LFV's Afsluitboom autonoom worden aangestuurd (bij enkele specifieke opdrachten aan de Verkeersbuisafsluiter, m.n. automatisch neer sturen bij calamiteit of uitval bediening). De waarde van dit configuratie-element moet zo worden gekozen dat voldoende zeker is dat de afsluitbomen de 'neer' stand zullen bereiken, maar ook zo dat overgangen van de afsluitboomstanden als voldoende bumpless kunnen worden gezien (i.v.m. Machinerichtlijn), ook bij overgang van niet bestuurbaar naar bestuurbaar na een tijdelijke storing, en ook rekening houdend met tijden benodigd om Verkeerslichten naar rood te sturen en maximale reactietijden van de betrokken LFV's. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#16943",
							type: "number",
							unit: "m",
							min: 0,
							max: 60,
							step: 1,
							//initdefaultvalue: "15", // CHECK: is het noodzakelijk om de waarde voor een configuratie-element hier vast te leggen?
						},
						// Variabelen
						beschikbaarheid_afsluitbomen: {
							stereotype: "variabele",
							title: "Beschikbaarheid afsluitbomen",
							description: "Geeft de beschikbaarheid van de afsluitbomen voor de verkeersbuis aan.",
							ref: "BSTTI#9388",
							comment: "Conditie: _bf_Afsluitboom[].#beschikbaarheid = beschikbaar ; Waarde: beschikbaar ; Conditie: _bf_Afsluitboom[].#beschikbaarheid = niet_beschikbaar ; Waarde: niet_beschikbaar ; Conditie: overige situaties ; Waarde: beperkt_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () {
								return checkAll(this.bf_Afsluitboom_Verkeersbuis, "beschikbaarheid", "beschikbaar") ? "beschikbaar" : checkAll(this.bf_Afsluitboom_Verkeersbuis, "beschikbaarheid", "niet_beschikbaar") ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
						doel_stand: {
							stereotype: "variabele",
							title: "Gewenste stand",
							description: "De doel-stand voor de Verkeerslichten en afsluitbomen van deze verkeersbuis. Via de autonome processen worden MTM, Verkeerslichten en afsluitbomen stapsgewijs in de juiste stand gezet. Zie BSTTI#16963 voor de initialisatie van deze variabele.",
							ref: "BSTTI#9399",
							comment: "",
							enum: { afsluitbomen_dicht: "Afsluitbomen dicht", afsluitbomen_stop: "Afsluitbomen stop", rood: "Rood", geel_knipperen: "Geel knipperen", gedoofd: "Gedoofd" },
						},
						verkeersbuisafsluiter_status: {
							stereotype: "variabele",
							title: "Status",
							description: "Geeft de status van de verkeersbuisafsluiter voor de verkeersbuis aan.",
							ref: "BSTTI#8107",
							comment: "Conditie: _sf_Rijstrook[].#status = open ; Waarde: open ; Conditie: _sf_Rijstrook[].#status = dicht ; Waarde: dicht ; Conditie: _sf_Rijstrook[i].#status = ongeldig ;	Waarde: ongeldig ; Conditie: overige situaties ; Waarde: deels_afgesloten",
							enum: { open: "Open", deels_afgesloten: "Deels afgesloten", dicht: "Dicht" },
							get: function () {
								return checkAll(this.sf_Rijstrook_Verkeersbuis, "status", "open") ? "open" : checkAll(this.sf_Rijstrook_Verkeersbuis, "status", "dicht") ? "dicht" : checkOne(this.sf_Rijstrook_Verkeersbuis, "status", "ongeldig") ? "ongeldig" : "deels_afgesloten";
							},
						},
						meest_afgesloten_stand: {
							stereotype: "variabele",
							title: "Meest afgesloten stand",
							description: "De samengevatte stand van de afsluitbomen en Verkeerslichten, waarbij de afsluitbomen leidend zijn. Als niet alle afsluitbomen de stand 'op' hebben of niet alle afsluitbomen de stand 'neer' hebben, is de stand 'afsluitbomen_onbepaald'; dit is ook het geval als een afsluitboom niet observeerbaar is of gestopt is.",
							ref: "BSTTI#15961",
							comment: "Conditie: _bf_Afsluitboom[].#stand = neer ; Waarde: afsluitbomen_dicht ; Conditie: _bf_Afsluitboom[i].#stand <> op && _bf_Afsluitboom[j].#stand <> neer ; Waarde: afsluitbomen_onbepaald ; Conditie: _bf_Afsluitboom[].#stand = op ; Waarde: _bf_Verkeerslichten.#stand",
							enum: { afsluitbomen_dicht: "Afsluitbomen dicht", afsluitbomen_onbepaald: "Afsluitbomen onbepaald", rood: "Rood", geel: "Geel", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },
							get: function () {
								return checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "neer") ? "afsluitbomen_dicht" : checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") ? this.bf_Verkeerslichten_Verkeersbuis.stand : "afsluitbomen_onbepaald";
							},
						},
						voldoende_rood_voor_afsluitbomen: {
							stereotype: "variabele",
							title: "Afsluitbomen mogen neer",
							description: "Geeft aan of de afsluitbomen mogen worden neergelaten.",
							ref: "BSTTI#16890",
							comment: "Conditie: * ; Waarde: huidige_tijd > #tijdstip_rood_bereikt + _tijd_rood_voor_afsluitbomen_dicht",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () { return huidige_tijd > this.tijdstip_rood_bereikt + ms(this.tijd_rood_voor_afsluitbomen_dicht); },
						},
						in_gebruik: {
							stereotype: "variabele",
							title: "In gebruik",
							description: "Geeft voor toepassing in wisselbuizen aan of deze instantie van functie verkeersbuisafsluiter wel of niet in gebruik moet zijn. Voor toepassing in verkeersbuizen die geen wisselbuizen zijn, dient de waarde van #in_gebruik altijd 'ja' te zijn. N.B.: de waarde van #in_gebruik representeert een streven.Of de verkeersbuisafsluiter daadwerkelijk in gebruik is wordt weergegeven door de variabele #daadwerkelijk_in_gebruik.",
							ref: "BSTTI#16550",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
						},
						daadwerkelijk_in_gebruik: {
							stereotype: "variabele",
							title: "Daadwerkelijk in gebruik",
							description: "Geeft aan of deze instantie van functie verkeersbuisafsluiter daadwerkelijk in gebruik is.",
							ref: "BSTTI#16551",
							comment: "Conditie: _bf_Verkeerslichten.#daadwerkelijk_in_gebruik = ja && _bf_mtm.#daadwerkelijk_in_gebruik = ja && _bf_Afsluitboom[].#daadwerkelijk_in_gebruik = ja && #in_gebruik = ja ; Waarde: ja ; Conditie: _bf_Verkeerslichten.#daadwerkelijk_in_gebruik = nee && _bf_mtm.#daadwerkelijk_in_gebruik = nee && _bf_Afsluitboom[].#daadwerkelijk_in_gebruik = nee && #in_gebruik = nee ; Waarde: nee ; Conditie: overige situaties ; Waarde: gedeeltelijk",
							enum: { ja: "Ja", nee: "Nee", gedeeltelijk: "Gedeeltelijk" },
							get: function () {
								// console.debug(this.naam, this.in_gebruik);
								return this.bf_Verkeerslichten_Verkeersbuis.daadwerkelijk_in_gebruik == "ja" && this.bf_MTMkoppeling_Verkeersbuis.daadwerkelijk_in_gebruik == "ja" && checkAll(this.bf_Afsluitboom_Verkeersbuis, "daadwerkelijk_in_gebruik", "ja") && this.in_gebruik == "ja" ? "ja" : this.bf_Verkeerslichten_Verkeersbuis.daadwerkelijk_in_gebruik == "nee" && this.bf_MTMkoppeling_Verkeersbuis.daadwerkelijk_in_gebruik == "nee" && checkAll(this.bf_Afsluitboom_Verkeersbuis, "daadwerkelijk_in_gebruik", "nee") && this.in_gebruik == "nee" ? "nee" : "gedeeltelijk";
							},
						},
						mtm_snelheidsbeperking: {
							stereotype: "variabele",
							title: "Snelheidsbeperking actief",
							description: "Geeft aan of een snelheidsbeperking ingesteld moet worden (ja) of opgeheven mag worden (nee).",
							ref: "BSTTI#16886",
							comment: "Conditie: #doel_stand = (afsluitbomen_stop | afsluitbomen_dicht | rood | geel_knipperen) || (#meest_afgesloten_stand <> gedoofd && #meest_afgesloten_stand <> ongeldig) ; Waarde: ja ; Conditie: #doel_stand = gedoofd && #meest_afgesloten_stand = gedoofd ; Waarde: nee",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK no else?
							get: function () {
								return this.doel_stand == "afsluitbomen_stop" || this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "rood" || this.doel_stand == "geel_knipperen" || (this.meest_afgesloten_stand != "gedoofd" && this.meest_afgesloten_stand != "ongeldig") ? "ja" : this.doel_stand == "gedoofd" && this.meest_afgesloten_stand == "gedoofd" ? "nee" : "";
							},
						},
						tijdstip_rood_bereikt: {
							stereotype: "variabele",
							title: "Tijdstip stand rood bereikt",
							description: "Tijdstip waarop voor alle rijstroken van de Verkeersbuisafsluiter de stand rood is bereikt. Zie het autonome proces *BepaalTijdstipRoodBereikt.",
							ref: "BSTTI#16888",
							comment: "",
						},
						Verkeerslichtenbedieningen_vrij: {
							stereotype: "variabele",
							title: "Verkeerslichten bedienbaar",
							description: "Geeft aan of via de Verkeerslichten-gerelateerde bedieningen van de Verkeersbuisafsluiter een andere stand mag worden ingesteld. Als dit niet mag, zullen eerst de afsluitbomen geopend moeten worden, via een afsluitbomen-gerelateerde bediening van de verkeersbuisafsluiter of kan de verkeersbuis geheel worden geopend met Hand_Open().",
							ref: "BSTTI#16940",
							comment: "Conditie: * ; Waarde: (#doel_stand = ongeldig && _bf_Afsluitboom[].#stand = (op | ongeldig)) || (#doel_stand = (rood | geel_knipperen | gedoofd)) || (#doel_stand = (afsluitbomen_dicht | afsluitbomen_stop) && _bf_Afsluitboom[].#stand = op)",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.doel_stand == "ongeldig" && (checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") || checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "ongeldig")) || this.doel_stand == "rood" || this.doel_stand == "geel_knipperen" || this.doel_stand == "gedoofd" || (this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop") && checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") ? "Ja" : "Nee";
							},
						},
						max_tijdstip_aansturing_afsluitbomen: {
							stereotype: "variabele",
							title: "Tijdstip einde sturing afsluitbomen",
							description: "Tijdstip waarna de afsluitbomen niet meer automatisch mogen worden aangestuurd. Ter voorkoming van ongevallen t.g.v. onverwachte bewegingen van afsluitbomen (zie ook Machinerichtlijn); bijvoorbeeld na een overgang van niet bestuurbaar naar bestuurbaar van een afsluitboom na een tijdelijke storing of tijdelijke obstakeldetectie.",
							ref: "BSTTI#16942",
							comment: "",
							initdefaultvalue: "0",
						},
						// Specifieke signaleringen
						BeschikbaarheidAfsluitbomen: {
							stereotype: "signalering",
							title: "Beschikbaarheid afsluitbomen",
							description: "De beschikbaarheid van de afsluitbomen voor de verkeersbuis.",
							ref: "BSTTI#9582",
							comment: "Status: #beschikbaarheid_afsluitbomen",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return this.beschikbaarheid_afsluitbomen
							},
						},
						Alarm_DoelstandVBAOnbepaald: {
							stereotype: "signalering",
							title: "Alarm doelstand verkeersbuisafsluiter onbepaald",
							description: "Er is nog geen beoogde stand voor de verkeersbuisafsluiter geselecteerd.",
							ref: "BSTTI#16954",
							comment: "Conditie: #doel_stand = ongeldig",
							type: "deelsysteem_alarm",
							enum: { ja: "Verkeersbuisafsluiter doelstand onbepaald", nee: "" },
							get: function () {
								return this.doel_stand == "ongeldig";
							},
						},
					},
					operations: {
						// Verkeerslicht gerelateerde bedieningen
						Hand_VerkeerslichtenGedoofd: {
							stereotype: "bediening",
							title: "Verkeerslichten naar stand gedoofd",
							description: "Verkeerslichten gaan naar de toestand gedoofd. Deze bediening mag alleen via de MMI worden aangeroepen.",
							ref: "BSTTI#6116",
							comment: "Conditie: #Verkeerslichtenbedieningen_vrij = ja && #in_gebruik = ja ; Acties: _bf_CCTV.SetControleCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := gedoofd SetVerkeerslichtenOpAutobediening()",
							conditie: function () {
								return this.Verkeerslichtenbedieningen_vrij == "ja" && this.in_gebruik == "ja";
							},
							em: function () {
								console.debug('Hand_VerkeerslichtenGedoofd', this.schema, this.ID, this.doel_stand);
								this.doel_stand = "gedoofd";

								/** @debug mka: */
								//this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand("groen");
								return;

								this.bf_CCTV_Verkeersbuis.SetControleCameraMetPreset(this.sf_Verkeerslichten_camera, this.Verkeerslichten_camera_preset);
								//debug this.sf_afsluitbomen_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_afsluitbomen_camera, this.afsluitbomen_camera_preset);
								this.SetVerkeerslichtenOpAutobediening();
							},
						},
						Hand_VerkeerslichtenRood: {
							stereotype: "bediening",
							title: "Verkeerslichten naar stand rood",
							description: "De Verkeerslichten van deze Verkeersbuisafsluiter worden op rood gezet. Deze bediening mag alleen via de MMI worden aangeroepen.",
							ref: "BSTTI#6118",
							comment: "Conditie: #Verkeerslichtenbedieningen_vrij = ja && #in_gebruik = ja ; Acties: _bf_CCTV.SetControleCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_Verkeerslichten_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_Verkeerslichten_camera,_Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := rood ; SetVerkeerslichtenOpAutobediening()",
							arguments: {},
							conditie: function () {
								return this.Verkeerslichtenbedieningen_vrij == "ja" && this.in_gebruik == "ja";
							},
							em: function () {
								console.debug('Hand_VerkeerslichtenRood', this.schema, this.ID, this.doel_stand);
								this.doel_stand = "rood";

								/** @debug mka: */

								//console.debug('Hand_VerkeerslichtenRood');
								/** @debug onderstaande regel is test*/
								//this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand("rood");
								return;

								/** @debug end */


								this.bf_CCTV_Verkeersbuis.SetControleCameraMetPreset(this.sf_Verkeerslichten_Camera, this.verkeerslichten_camera_preset);
								//debug this.sf_Verkeerslichten_Camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_Verkeerslichten_Camera, this.verkeerslichten_camera_preset);
								//debug this.sf_Afsluitbomen_Camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_Afsluitbomen_Camera, this.afsluitbomen_camera_preset);
								this.SetVerkeerslichtenOpAutobediening();

								//Aim.messenger.send({ to: [Aim.client.domain.id], initdefaultvalue: [{ id: 3318018, operations: { SetStand: ['rood'] } }] });


							},
						},
						// Afsluitboom gerelateerde bedieningen
						AfsluitbomenOpen: {
							stereotype: "bediening",
							title: "Afsluitbomen openen",
							description: "Opent de afsluitbomen voor deze Verkeersbuisafsluiter.",
							ref: "BSTTI#6119",
							comment: "Conditie: #in_gebruik = ja ; Acties: IF #doel_stand = (ongeldig | afsluitbomen_dicht | afsluitbomen_stop) THEN #doel_stand := rood END_IF ; SetAfsluitbomenOpAutobedieningMetContinuSturing(nee) _bf_Afsluitboom[].AutoOpen()",
							// CHECK no else?
							conditie: function () {
								return this.in_gebruik == "ja";
							},
							em: function () {
								this.doel_stand == "ongeldig" || this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop" ? this.doel_stand = "rood" : "";
								this.SetAfsluitbomenOpAutobedieningMetContinuSturing(nee);
								forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoOpen");
							},
						},
						AfsluitbomenVoorwaardelijkSluit: {
							stereotype: "bediening",
							title: "Afsluitbomen sluiten",
							description: "sluit de afsluitbomen voor deze Verkeersbuisafsluiter (voor zover aan alle voorwaarden hiervoor is voldaan, inclusief geen voertuig onder afsluitboom).",
							ref: "BSTTI#6120",
							comment: "Conditie: #voldoende_rood_voor_afsluitbomen = ja && #in_gebruik = ja ; Acties: #doel_stand := afsluitbomen_dicht ; SetAfsluitbomenOpAutobedieningMetContinuSturing(nee) ; _bf_Afsluitboom[].AutoVoorwaardelijkSluit()",
							conditie: function () {
								return this.voldoende_rood_voor_afsluitbomen == "ja" && this.in_gebruik == "ja";
							},
							em: function () {
								this.doel_stand = "afsluitbomen_dicht";
								this.SetAfsluitbomenOpAutobedieningMetContinuSturing("nee");
								forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoVoorwaardelijkSluit");
							},
						},
						AfsluitbomenStop: {
							stereotype: "bediening",
							title: "Afsluitbomen stoppen",
							description: "stopt/voorkomt bewegingen van de afsluitbomen voor deze Verkeersbuisafsluiter (tot een volgende opdracht).",
							ref: "BSTTI#6123",
							comment: "Conditie: #in_gebruik = ja ; Acties: IF ( #doel_stand = (afsluitbomen_dicht | ongeldig) || _bf_Afsluitboom[i].#stand <> op) THEN #doel_stand := afsluitbomen_stop END_IF ; SetAfsluitbomenOpAutobedieningMetContinuSturing(nee) ; _bf_Afsluitboom[].AutoStop()",
							conditie: function () {
								return this.in_gebruik == "ja";
							},
							em: function () {
								// CHECK no else?
								this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "ongeldig" || !checkAll(bf_Afsluitboom_Verkeersbuis, "stand", "op") ? this.doel_stand = "afsluitbomen_stop" : "";
								this.SetAfsluitbomenOpAutobedieningMetContinuSturing("nee");
								forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoStop");
							},
						},
						// Verkeersbuisafsluiter gerelateerde bedieningen
						Hand_Open: {
							stereotype: "bediening",
							title: "Rijbaan openstellen",
							description: "Opent de verkeersstroom voor deze Verkeersbuisafsluiter inclusief afsluitbomen. Deze bediening mag alleen via de MMI worden aangeroepen. Merk op: er is geen Hand_Dicht(); Verkeerslichten naar rood brengen (en daarmee eerst MTM snelheidsmaatregel zetten) en voorwaardelijk sluiten met afsluitbomen zijn twee afzonderlijke stappen.",
							ref: "BSTTI#11461",
							comment: "Conditie: #in_gebruik = ja || #doel_stand = ongeldig ; Acties: _bf_CCTV.SetControleCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := gedoofd ; SetAfsluitbomenOpAutobedieningMetContinuSturing(nee) ; _bf_Afsluitboom[].AutoOpen() ; SetVerkeerslichtenOpAutobediening()",
							conditie: function () {
								return this.in_gebruik == "ja" || this.doel_stand == "ongeldig";
							},
							em: function () {
								this.bf_CCTV_Verkeersbuis.SetControleCameraMetPreset(this.sf_Verkeerslichten_camera, this.Verkeerslichten_camera_preset);
								this.sf_afsluitbomen_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_afsluitbomen_camera, this.afsluitbomen_camera_preset);
								this.doel_stand = "gedoofd";
								this.SetAfsluitbomenOpAutobedieningMetContinuSturing("nee");
								forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoOpen");
								this.SetVerkeerslichtenOpAutobediening();
							},
						},
						//Besturingen
						Auto_VerkeerslichtenRood: {
							stereotype: "besturing",
							title: "Verkeerslichten naar stand rood",
							description: "De Verkeerslichten van deze Verkeersbuisafsluiter worden op rood gezet. Alleen via deze besturing mogen de Verkeerslichten automatisch op rood gezet worden.",
							ref: "BSTTI#9574",
							comment: "Conditie: #doel_stand = (gedoofd | geel_knipperen) && #in_gebruik = ja ; Acties: _sf_Verkeerslichten_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := rood",
							conditie: function () {
								return (this.doel_stand == "gedoofd" || this.doel_stand == "geel_knipperen") && this.in_gebruik == "ja";
							},
							em: function () {
								this.sf_Verkeerslichten_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_Verkeerslichten_camera, this.Verkeerslichten_camera_preset);
								this.sf_afsluitbomen_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_afsluitbomen_camera, this.afsluitbomen_camera_preset);
								this.doel_stand = "rood";
							},
						},
						Auto_VerkeerslichtenGeelKnipper: {
							stereotype: "besturing",
							title: "Verkeerslichten naar stand geel knipperen",
							description: "Breng de Verkeerslichten naar geel knipperen, als gedoofd was ingesteld.",
							ref: "BSTTI#9575",
							comment: "Conditie: #doel_stand = gedoofd && #in_gebruik = ja ; Acties: #doel_stand := geel_knipperen",
							conditie: function () {
								return (this.doel_stand == "gedoofd" && this.in_gebruik == "ja");
							},
							em: function () {
								this.doel_stand = "geel_knipperen";
							},
						},
						Auto_Dicht: {
							stereotype: "besturing",
							title: "Rijbaan afsluiten",
							description: "sluit de verkeersstroom van deze Verkeersbuisafsluiter, inclusief afsluitbomen. Alleen via deze besturing mogen afsluitbomen automatisch afgesloten worden.",
							ref: "BSTTI#11462",
							comment: "Conditie: #in_gebruik = ja ; Acties: _sf_Verkeerslichten_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := afsluitbomen_dicht ; SetVerkeerslichtenOpAutobediening() ; SetAfsluitbomenOpAutobedieningMetContinuSturing(ja)",
							conditie: function () {
								return this.in_gebruik == "ja";
							},
							em: function () {
								this.sf_Verkeerslichten_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_Verkeerslichten_camera, this.Verkeerslichten_camera_preset);
								this.sf_afsluitbomen_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_afsluitbomen_camera, this.afsluitbomen_camera_preset);
								this.doel_stand = "afsluitbomen_dicht";
								this.SetVerkeerslichtenOpAutobediening();
								this.SetAfsluitbomenOpAutobedieningMetContinuSturing("ja");
							},
						},
						SetVerkeerslichtenOpAutobediening: {
							stereotype: "besturing",
							title: "Verkeerslichten in automode",
							description: "Zet de Verkeerslichten op autobediening en zorgt daarbij dat de laatst (via 3B) ingestelde stand wordt overgenomen als auto-stand.",
							ref: "BSTTI#16957",
							comment: "Conditie: * ; Acties: _bf_Verkeerslichten.SetAutoStand(_bf_Verkeerslichten.#ingestelde_stand) ; _bf_Verkeerslichten.SetOpAutobediening()",
							conditie: function () {
								return true;
							},
							em: function () {
								console.debug('cf_Afsluiter_Verkeersbuis.SetVerkeerslichtenOpAutobediening', { ingestelde_stand: this.bf_Verkeerslichten_Verkeersbuis.ingestelde_stand });
								this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand(this.bf_Verkeerslichten_Verkeersbuis.ingestelde_stand);
								this.bf_Verkeerslichten_Verkeersbuis.SetOpAutobediening();
							},
						},
						SetAfsluitbomenOpAutobedieningMetContinuSturing: {
							stereotype: "besturing",
							title: "Afsluitbomen in automode",
							description: "Zet de afsluitbomen op autobediening en maakt afhankelijk van de parameter continue aansturing van de afsluitbomen mogelijk of onmogelijk.",
							ref: "BSTTI#16958",
							comment: "Conditie: * ; Acties: IF (continu_sturing = nee) THEN #max_tijdstip_aansturing_afsluitbomen := 0 ELSE #max_tijdstip_aansturing_afsluitbomen := huidige_tijd + _tijd_aansturing_afsluitbomen END_IF ; _bf_Afsluitboom[].SetOpAutobediening()",
							conditie: function () {
								return true;
							},
							em: function (continu_sturing) {
								// CHECK
								continu_sturing == "nee" ? this.max_tijdstip_aansturing_afsluitbomen = "0" : this.max_tijdstip_aansturing_afsluitbomen = huidige_tijd + this.tijd_aansturing_afsluitbomen;
								this.bf_Afsluitboom_Verkeersbuis.SetOpAutobediening();
							},
						},
						SetInGebruik: {
							stereotype: "besturing",
							title: "In-uitschakelen verkeersbuisafsluiter",
							description: "Besturing die voor toepassing in wisselbuizen gebruikt wordt om deze instantie van verkeersbuisafsluiter in of uit te schakelen. Wanneer aangeroepen met het argument 'ja', dan moet de verkeersbuisafsluiter functioneren als in een verkeersbuis die geen wisselbuis is. Wanneer aangeroepen met de argument 'nee', dan moet deze verkeersbuisafsluiter de bijbehorende Verkeerslichten op 'gedoofd' houden en de bijbehorende afsluitbomen in stand 'op' houden, maar signaleringen en detecties normaal blijven functioneren. Vanuit veiligheidsoverwegingen mag de verkeersbuisafsluiter enkel in of uit gebruik genomen worden als de afsluitbomen in de 'op' stand staan en de Verkeerslichten gedoofd zijn; hierop is één uitzondering: bij initialisatie van 3B kan een verkeersbuisafsluiter ook in gebruik worden genomen als deze niet geheel open is.",
							ref: "BSTTI#16525",
							comment: "Conditie: (#doel_stand = gedoofd && #meest_afgesloten_stand = gedoofd) || (#doel_stand = ongeldig && in_gebruik = ja) ; Acties: #in_gebruik := in_gebruik ; _bf_Afsluitboom[].SetInGebruik(in_gebruik) ; _bf_mtm.SetInGebruik(in_gebruik) ; _bf_Verkeerslichten.SetInGebruik(in_gebruik)",
							conditie: function () {
								return (this.doel_stand == "gedoofd" && this.meest_afgesloten_stand == "gedoofd") || (this.doel_stand == "ongeldig" && this.in_gebruik == "ja");
							},
							em: function (in_gebruik) {
								this.in_gebruik = in_gebruik;
								forAll(this.bf_Afsluitboom_Verkeersbuis, "SetInGebruik", [in_gebruik]);
								this.bf_MTMkoppeling_Verkeersbuis.SetInGebruik(in_gebruik);
								this.bf_Verkeerslichten_Verkeersbuis.SetInGebruik(in_gebruik);
							},
						},
						// Autonome processen
						Init: {
							stereotype: "autonoom_proces",
							title: "Initialisatie",
							description: "Initialiseert de verkeersbuisafsluiter indien de betrokken systemen een voldoende uniforme toestand hebben; als dat niet het geval is moet de verkeersbuisafsluiter via bedieningen worden ge�nitialiseerd.",
							ref: "BSTTI#16963",
							comment: "Conditie: #doel_stand = ongeldig && #meest_afgesloten_stand = (afsluitbomen_dicht | rood | geel_knipperen | gedoofd) ; Acties: #doel_stand := #meest_afgesloten_stand ; SetVerkeerslichtenOpAutobediening() ; SetAfsluitbomenOpAutobedieningMetContinuSturing( nee )",
							js: function () {
								if (this.doel_stand == "ongeldig" && (this.meest_afgesloten_stand == "afsluitbomen_dicht" || this.meest_afgesloten_stand == "rood") || this.meest_afgesloten_stand == "geel_knipperen" || this.meest_afgesloten_stand == "gedoofd") {
									this.doel_stand = this.meest_afgesloten_stand;
									this.SetVerkeerslichtenOpAutobediening();
									this.SetAfsluitbomenOpAutobedieningMetContinuSturing("nee");
								}
							},
						},
						SnelheidsbeperkingMtm: {
							stereotype: "autonoom_proces",
							title: "Snelheidsbeperking MTM systeem",
							description: "Stelt een snelheidsbeperking in als de Verkeerslichten gebruikt moeten worden.",
							ref: "BSTTI#9396",
							comment: "Conditie: #mtm_snelheidsbeperking = ja && #in_gebruik = ja ; Acties: _bf_mtm.InstellenSnelheidsBeperking() ; Conditie: #mtm_snelheidsbeperking = nee && #in_gebruik = ja ; Acties: _bf_mtm.OpheffenSnelheidsBeperking()",
							js: function () {
								if (this.mtm_snelheidsbeperking == "ja" && this.in_gebruik == "ja") {
									this.bf_MTMkoppeling_Verkeersbuis.InstellenSnelheidsBeperking();
								};
								if (this.mtm_snelheidsbeperking == "nee" && this.in_gebruik == "ja") {
									this.bf_MTMkoppeling_Verkeersbuis.OpheffenSnelheidsBeperking();
								};
							},
						},
						HandhaafAfsluitbomenKoppelingVerkeerslichten: {
							stereotype: "autonoom_proces",
							title: "Handhaven koppeling Verkeerslichten en afsluitbomen",
							description: "Geeft aan de afsluitbomen door of vanwege de stand van de Verkeerslichten de afsluitbomen eventueel gesloten mogen worden.",
							ref: "BSTTI#9415",
							comment: "Conditie: #voldoende_rood_voor_afsluitbomen = ja && _bf_Verkeerslichten.#stand = rood && #in_gebruik = ja ; Acties: _bf_Afsluitboom[].Blokkeer( nee ) ; Conditie: #voldoende_rood_voor_afsluitbomen <> ja ; Acties: _bf_Afsluitboom[].Blokkeer( ja )",
							js: function () {
								if (this.voldoende_rood_voor_afsluitbomen == "ja" && this.bf_Verkeerslichten_Verkeersbuis.stand == "rood" && this.in_gebruik == "ja") {
									forAll(this.bf_Afsluitboom_Verkeersbuis, "Blokkeer", ["nee"]);
								};
								if (this.voldoende_rood_voor_afsluitbomen != "ja") {
									forAll(this.bf_Afsluitboom_Verkeersbuis, "Blokkeer", ["ja"]);
								};
							},
						},
						BewaakVerkeerslichten: {
							stereotype: "autonoom_proces",
							// title: "Bewaak Verkeerslichten aansturing",
							// description: "Bepaalt de auto-stand voor de Verkeerslichten.",
							// ref: "BSTTI#16893",
							// comment: "Conditie: #doel_stand = gedoofd && _bf_Afsluitboom[].#stand = op && #in_gebruik = ja ; Acties: _bf_Verkeerslichten.SetAutoStand( gedoofd ) ; Conditie: #doel_stand = geel_knipperen && _bf_Afsluitboom[].#stand = op && #in_gebruik = ja ; Acties: _bf_Verkeerslichten.SetAutoStand( geel_knipperen ) ; Conditie: (#doel_stand = (afsluitbomen_dicht | afsluitbomen_stop | rood) || _bf_Afsluitboom[i].#stand <> op ) && #in_gebruik = ja ; Acties: _bf_Verkeerslichten.SetAutoStand( rood )",
							em: function () {
								/** @title Bewaak Verkeerslichten aansturing
									@description Bepaalt de auto-stand voor de Verkeerslichten.
									@ref BSTTI#16893
									@Conditie: #doel_stand = gedoofd && _bf_Afsluitboom[].#stand = op && #in_gebruik = ja ;
								 	@Acties: _bf_Verkeerslichten.SetAutoStand( gedoofd ) ;
								*/
								console.debug(this.schema, this.ID, "BewaakVerkeerslichten");
								/**
									@debug mka
								*/
								forAll(this.bf_Verkeerslichten_Verkeersbuis, "SetAutoStand", this.doel_stand);
								return;




								/**
									@Conditie: #doel_stand = gedoofd && _bf_Afsluitboom[].#stand = op && #in_gebruik = ja ;
								 	@Acties: _bf_Verkeerslichten.SetAutoStand( gedoofd ) ;
								*/
								if (this.doel_stand == "gedoofd" && checkAll(this.bf_Afsluitboom, "stand", "op") && this.in_gebruik == "ja") {
									this.bf_Verkeerslichten.SetAutoStand("gedoofd");
								}
								/**
									@Conditie: #doel_stand = geel_knipperen && _bf_Afsluitboom[].#stand = op && #in_gebruik = ja ;
									@Acties: _bf_Verkeerslichten.SetAutoStand( geel_knipperen ) ;
								*/
								if (this.doel_stand == "geel_knipperen" && checkAll(this.bf_Afsluitboom, "stand", "op") && this.in_gebruik == "ja") {
									this.bf_Verkeerslichten.SetAutoStand("geel_knipperen");
								}
								/**
									@Conditie: (#doel_stand = (afsluitbomen_dicht | afsluitbomen_stop | rood) || _bf_Afsluitboom[i].#stand <> op ) && #in_gebruik = ja ;
									@Acties: _bf_Verkeerslichten.SetAutoStand( rood )
								*/
								if ((["afsluitbomen_dicht", "afsluitbomen_stop", "rood"].includes(this.doel_stand) || !checkOne(this.bf_Afsluitboom, "stand", "op")) && this.in_gebruik == "ja") {
									this.bf_Verkeerslichten.SetAutoStand("rood");
								}



								// if (this.doel_stand == "gedoofd" && checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") && this.in_gebruik == "ja") {
								// 	this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand("gedoofd");
								// };
								// if (this.doel_stand == "geel_knipperen" && checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") && this.in_gebruik == "ja") {
								// 	this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand("geel_knipperen");
								// };
								// if (this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop" || this.doel_stand == "rood" || !checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") && this.in_gebruik == "ja") { // Afvraag van stand != op van een gerelateerde afsluitboom!!!
								// 	this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand("rood");
								// };
							},
							/*
							js_1: function() {
								var allOp = checkAll(this.bf_Afsluitboom, 'stand", "op");
								if (this.doel_stand == "gedoofd" && allOp && this.in_gebruik == "ja") { // Afvraag van de stand van alle gerelateerde afsluitbomen!!!
									this.bf_Verkeerslichten.SetAutoStand("gedoofd");
								};
								if (this.doel_stand == "geel_knipperen" && allOp && this.in_gebruik == "ja") { // Afvraag van de stand van alle gerelateerde afsluitbomen!!!
									this.bf_Verkeerslichten.SetAutoStand("geel_knipperen");
								};
								if (this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop" || this.doel_stand == "rood" || !allOp && this.in_gebruik == "ja") { // Afvraag van stand != op van een gerelateerde afsluitboom!!!
									this.bf_Verkeerslichten.SetAutoStand("rood");
								};
							},
							js_2: function() {
								var allOp = checkAll(this.bf_Afsluitboom, 'stand", "op");
								if (allOp && this.in_gebruik == "ja") { // Afvraag van de stand van alle gerelateerde afsluitbomen!!!
									if (this.doel_stand == "gedoofd") this.bf_Verkeerslichten.SetAutoStand("gedoofd");
									else if (this.doel_stand == "geel_knipperen") this.bf_Verkeerslichten.SetAutoStand("geel_knipperen");
								};
								if (this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop" || this.doel_stand == "rood" || !allOp && this.in_gebruik == "ja") { // Afvraag van stand != op van een gerelateerde afsluitboom!!!
									this.bf_Verkeerslichten.SetAutoStand("rood");
								};
							},
						},
						*/
							BewaakAfsluitbomen: {
								stereotype: "autonoom_proces",
								title: "Bewaak afsluitbomen aansturing",
								description: "Bepaalt de automatische aansturingen voor de afsluitbomen.",
								ref: "BSTTI#16894",
								comment: "Conditie: #doel_stand = afsluitbomen_dicht && #voldoende_rood_voor_afsluitbomen = ja && huidige_tijd < #max_tijdstip_aansturing_afsluitbomen && #in_gebruik = ja ; Acties: _bf_Afsluitboom[].AutoVoorwaardelijkSluit() ; Conditie: #doel_stand = afsluitbomen_stop && #in_gebruik = ja ; Acties: _bf_Afsluitboom[].AutoStop()",
								js: function () {
									if (this.doel_stand == "afsluitbomen_dicht" && this.voldoende_rood_voor_afsluitbomen == "ja" && huidige_tijd < this.max_tijdstip_aansturing_afsluitbomen && this.in_gebruik == "ja") {
										forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoVoorwaardelijkSluit");
									};
									if (this.doel_stand == "afsluitbomen_stop" && this.in_gebruik == "ja") {
										forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoStop");
									};
								},
							},
							BepaalTijdstipRoodBereikt: {
								stereotype: "autonoom_proces",
								title: "Bepaal tijdstip stand rood bereikt",
								description: "Bepaal vanaf wanneer voor alle rijstroken een (stop)signaal 'rood' wordt getoond.",
								ref: "BSTTI#16895",
								comment: "Conditie: _sf_Rijstrook[].#rood = ja && #tijdstip_rood_bereikt = ongeldig ; Acties: #tijdstip_rood_bereikt := huidige_tijd ; Conditie: _sf_Rijstrook[i].#rood <> ja && #tijdstip_rood_bereikt <> ongeldig ; Acties: #tijdstip_rood_bereikt := ongeldig",
								js: function () {
									if (checkAll(this.sf_Rijstrook_Verkeersbuis, "rood", "ja") && this.tijdstip_rood_bereikt == "ongeldig") {
										this.tijdstip_rood_bereikt = huidige_tijd;
									};
									if (!checkAll(this.sf_Rijstrook_Verkeersbuis, "rood", "ja") && this.tijdstip_rood_bereikt != "ongeldig") {
										this.tijdstip_rood_bereikt = "ongeldig";
									};
								},
								/*
								js1: function() { // Hoe gaan we onderstaande pseudocode vertalen in js, met name de tijdstip verwerking ?????
									if (!checkAll(this.sf_Rijstrook, "rood", "ja")) this.tijdstip_rood_bereikt = "ongeldig";
									else if (this.tijdstip_rood_bereikt == "ongeldig") this.tijdstip_rood_bereikt = huidige_tijd;
								},
								*/
							},
						},
					},
				},
				sf_Rijstrook_Verkeersbuis: {
					naam: "Subfunctie Rijstrook",
					hoortbij: "Verkeersbuis",
					titel: "Rijstrook",
					mnu: mnu.Verkeer,
					properties: {
						// Configuratie-elementen
						sf_Verkeerslicht_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Verkeerslicht",
							description: "De subfunctie Verkeerslicht voor deze rijstrook. Dit moet één van de subfuncties van _bf_Verkeerslichten van coördinerende functie Verkeersbuisafsluiter zijn.",
							ref: "BSTTI#16139",
							type: "selectitem",
							class: "Verkeerslicht",
						},
						bf_Afsluitboom_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Afsluitboom",
							description: "De basisfunctie Afsluitboom die deze rijstrook afsluit als hij neer is. Let op dat één afsluitboom meerdere rijstroken kan afsluiten. Dit moet één van de afsluitbomen uit _bf_Afsluitboom[] van coördinerende functie Verkeersbuisafsluiter zijn.",
							ref: "BSTTI#16140",
							type: "selectitem",
							class: "Afsluitboom",
						},
						id: {
							stereotype: "configuratie_element",
							title: "Rijstrook index volgens BPS",
							description: "De index van deze rijstrook. Deze indexering moet gelijk zijn aan die van de MTM-signalering.",
							ref: "BSTTI#16141",
							type: "number",
							unit: "",
							min: 0,
							max: 5,
							step: 1,
						},
						bf_MTMkoppeling_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "MTM koppeling",
							description: "De basisfunctie MTM-Koppeling voor deze verkeersbuisafsluiter.",
							ref: "BSTTI#16142",
							type: "selectitem",
							class: "MTM koppeling",
						},
						// Variabelen
						status: {
							stereotype: "variabele",
							title: "Status",
							description: "Geeft aan of de rijstrook open of dicht is.",
							ref: "BSTTI#16144",
							comment: "Conditie: ( _sf_Verkeerslicht.#stand = ( geel | geel_knipperen | groen | gedoofd ) ) && (_bf_Afsluitboom.#stand = op) && (_bf_mtm.#is_afgekruist_Verkeerslicht[_id] = nee ) ; Waarde: open ; Conditie: (_sf_Verkeerslicht.#stand = rood ) || (_bf_Afsluitboom.#stand = neer ) || (_bf_Afsluitboom.#transitiestatus_afsluitboom = in_transitie ) || (_bf_mtm.#is_afgekruist_Verkeerslicht[_id] = ja ) ; Waarde: dicht ; Conditie: overige situaties ; Waarde: ongeldig",
							enum: { open: "Open", dicht: "Dicht" },
							get: function () {
								return (this.sf_Verkeerslicht_Verkeersbuis.stand == "geel" ||
	                                this.sf_Verkeerslicht_Verkeersbuis.stand == "geel_knipperen" ||
	                                this.sf_Verkeerslicht_Verkeersbuis.stand == "groen"
	                                //|| this.sf_Verkeerslicht.stand == "gedoofd")
	                                //&&this.bf_Afsluitboom.stand == "op"
	                                //&&						(this.bf_mtm.is_afgekruist_Verkeerslicht[this.id] == "nee" ? "open" : (this.sf_Verkeerslicht.stand == "rood" || this.bf_Afsluitboom.stand == "neer" ||this.bf_Afsluitboom.transitiestatus_afsluitboom == "in_transitie" ||this.bf_mtm.is_afgekruist_Verkeerslicht[this.id] == "ja") ? "dicht" : "ongeldig";
	                            ) ? "dicht" : "ongeldig";
							},
						},
						rood: {
							stereotype: "variabele",
							title: "Rood",
							description: "De rijstrook is afgesloten door een rood Verkeerslicht of door een rood MTM kruis.",
							ref: "BSTTI#16889",
							comment: "Conditie: * ; Waarde: _sf_Verkeerslicht.#stand = rood || (_sf_Verkeerslicht.#stand = gedoofd && _bf_mtm.#is_afgekruist_Verkeerslicht[_id] = ja)",
							title: "Afgesloten door rood",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.sf_Verkeerslicht_Verkeersbuis.stand == "rood" || this.sf_Verkeerslicht_Verkeersbuis.stand == "gedoofd" && bf_MTMkoppeling_Verkeersbuis.is_afgekruist_Verkeerslicht[this.id] == "ja" ? "ja" : "nee";
							},
						},
					},
					operations: {
						// Autonome processen
						HandhaafOnderdrukkenVerkeerslichtDoorMTM: {
							stereotype: "autonoom_proces",
							title: "Handhaaf onderdrukken Verkeerslicht door MTM",
							description: "Zorgt ervoor dat een Verkeerslicht bij een afgekruiste rijstrook niet gebruikt wordt.",
							ref: "BSTTI#9386",
							comment: "Conditie: _bf_mtm.#is_afgekruist_Verkeerslicht[_id] = ja ; Acties: _sf_Verkeerslicht.SetVerkeerslichtActief( nee ) ; Conditie: _bf_mtm.#is_afgekruist_Verkeerslicht[_id] = ( ongeldig | nee ) ; Acties: _sf_Verkeerslicht.SetVerkeerslichtActief( ja )",
							js: function () {
								if (this.bf_MTMkoppeling_Verkeersbuis.is_afgekruist_Verkeerslicht[this.id] == "ja") {
									this.sf_Verkeerslicht_Verkeersbuis.SetVerkeerslichtActief("nee");
								};
								if (this.bf_MTMkoppeling_Verkeersbuis.is_afgekruist_Verkeerslicht[this.id] == "ongeldig" || this.bf_MTMkoppeling_Verkeersbuis.is_afgekruist_Verkeerslicht[this.id] == "nee") {
									this.sf_Verkeerslicht_Verkeersbuis.SetVerkeerslichtActief("ja");
								};
							},
						},
					},
				},
				// Verkeerslichten
				bf_Verkeerslichten_Verkeersbuis: {
					/* Vragen:
			 *
			 * Niet LTS subfuncties maken voor J32 / MSI tbv presentatie op de GUI?
			 * Verkleuring buttons koppelen aan een variabele in tms_gui.js?
			 * Eigenschap opnemen voor wel of niet weergeven (visibility) van een variabele, gekoppeld aan een rol (WVL/FB/TB/ALL)?
			 * Struktuur voor faceplate? Configuratie-elementen conform variabelen opnemen in tms_gui?
			 * Waarde ongeldig opnemen in enumeratie?
			 */
					naam: "Basisfunctie Verkeerslichten",
					hoortbij: "Verkeersbuis",
					titel: "Verkeerslichten",
					mnu: "VRI_Afsluitboom",
					gui: {

					},
					// CHECK
					faceplate: {
						btnAuto: {
							bediening: "setOpAutobediening",// gevolg, subscribe op deze bediening
							arguments: [],
							className: "btn L",// automatisch bedieing toevogen aan classe
						},
						btnHand: {
							bediening: "setOpHandbediening",
							arguments: [],
							className: "btn R",
						},
					},
					properties: {
						// Configuratie-elementen
						_lfv_Verkeerslichten_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Verkeerslichten",
							description: "De LFV Verkeerslichten Verkeersbuis voor deze functie.",
							ref: "BSTTI#16855",
							type: "selectitem",
							//value: "TEST",
							// SetStand: function(){
							// 	console.log("LFV SetStand", this.ID);
							// }
							//initdefaultvalue: definitions.lfv_Verkeerslichten,
							//initdefaultvalue: {},
							//class: "LFV Verkeerslichten",
						},
						_sf_Verkeerslicht_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Verkeerslicht",
							description: "De lijst met subfuncties Verkeerslicht voor deze functie.",
							ref: "BSTTI#16856",
							type: "selectitem",
							class: "Verkeerslicht",
							//initdefaultvalue: [], // CHECK: Is dit nodig?
						},
						// Variabelen
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft aan of de Verkeerslichten beschikbaar zijn.",
							ref: "BSTTI#16859",
							comment: "Conditie: _lfv_Verkeerslichten.#bestuurbaar = ja && _lfv_Verkeerslichten.#storingen = {} && _sf_Verkeerslicht[].#beschikbaarheid = beschikbaar ; Waarde: beschikbaar ; Conditie: _lfv_Verkeerslichten.#bestuurbaar = nee || _lfv_Verkeerslichten.#storingen[i] = STORING_ROOD_ACTIEVE_LICHTEN || _sf_Verkeerslicht[i].#beschikbaarheid = niet_beschikbaar ; Waarde: niet_beschikbaar ; Conditie: overige situaties ; Waarde: beperkt_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							// CHECK OP STORINGEN == LEEG
							get: function () {
								//console.debug('beschikbaarheid', this.lfv_Verkeerslichten_Verkeersbuis, this.lfv_Verkeerslichten_Verkeersbuis.storingen);
								return this.lfv_Verkeerslichten_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Verkeerslichten_Verkeersbuis.storingen.includes("") && checkAll(this.sf_Verkeerslicht_Verkeersbuis, "beschikbaarheid", "beschikbaar") ? "beschikbaar" : this.lfv_Verkeerslichten_Verkeersbuis.bestuurbaar == "nee" || this.lfv_Verkeerslichten_Verkeersbuis.storingen.includes("STORING_ROOD_ACTIEVE_LICHTEN") || checkOne(this.sf_Verkeerslicht_Verkeersbuis, "beschikbaarheid", "niet_beschikbaar") ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
						stand: {
							stereotype: "variabele",
							title: "Actuele stand",
							description: "De huidige stand van de lfv_Verkeerslichten.",
							ref: "BSTTI#16860",
							comment: "Conditie: _lfv_Verkeerslichten.#observeerbaar = ja ; Waarde: _lfv_Verkeerslichten.#stand",
							enum: { rood: "Rood", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },
							// CHECK
							operation: "setHandStand",
							//parameters: [ "rood", "geel_knipperen" ] }, default: enum
							bevestiging: weetzeker,//"Weet u zeker dat u dit wilt?",
							// CHECK no else?
							conditie: function () {
								console.debug('bf_Verkeerslichten_Verkeersbuis.stand.conditie', { observeerbaar: this.lfv_Verkeerslichten_Verkeersbuis.observeerbaar });
								return this.lfv_Verkeerslichten_Verkeersbuis.observeerbaar == "ja";
							},
							get: function () {
								//return "MAX STAND";
								console.debug('bf_Verkeerslichten_Verkeersbuis.stand.get', { stand: this.lfv_Verkeerslichten_Verkeersbuis.stand });
								return this.lfv_Verkeerslichten_Verkeersbuis.stand;
							},
						},
						stand_j32: {
							stereotype: "variabele",
							title: "Actuele stand J32",
							description: "De actuele stand van de J32 signaalgever op signaleringsraai s van rijstrook r, waarbij n overeenkomt met het aantal rijstroken minus 1, met een minimum van 1.",
							ref: "BSTTI#17088",
							comment: "Conditie: _lfv_Verkeerslichten.#observeerbaar = ja ; Waarde: _lfv_Verkeerslichten.#stand_j32",
							enum: { aan: "Aan", uit: "Uit" },
							// CHECK no else? hoe om te gaan met twee-dimensioneel array variabelen
							get: function () {
								return this.lfv_Verkeerslichten_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Verkeerslichten_Verkeersbuis.stand_j32 : "";
							},
						},
						bedieningswijze: {
							stereotype: "variabele",
							title: "Bedieningswijze",
							description: "De huidige bedieningswijze van de basisfunctie Verkeerslichten.",
							ref: "BSTTI#16861",
							comment: "",
							enum: { hand: "Hand", auto: "Auto" },
							initdefaultvalue: "hand",
						},
						hand_stand: {
							stereotype: "variabele",
							title: "Handmatige stand",
							description: "De stand die de basisfunctie Verkeerslichten moet instellen en handhaven als #bedieningswijze = hand.",
							ref: "BSTTI#16862",
							comment: "Init: init_patroon((#stand <> ongeldig && #stand <> geel), #stand)",
							//enum: { rood: "Rood", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },


							// CHECK no else?
							initdefaultvalue: function () {
								console.debug('bf_Verkeerslichten_Verkeersbuis.handstand.init', { stand: this.stand });
								return this.stand != "ongeldig" && this.stand != "geel" ? this.stand : "";
							},
							get: function () {
								console.debug('bf_Verkeerslichten_Verkeersbuis.handstand.get', { stand: this.stand });
								//return "MAX";
								return this.stand != "ongeldig" && this.stand != "geel" ? this.stand : "ongeldig";
							},
							// CHECK

							type: 'radio',
							operation: 'SetHandStand',
							enum: {
								groen: { title: "Groen", color: "green" },
								rood: { title: "Rood", color: "red" },
								geel_knipperen: { title: "Geel knipperen", color: "yellow" },
								gedoofd: { title: "Gedoofd", color: "gray" },
							},
						},
						auto_stand: {
							stereotype: "variabele",
							title: "Automatische stand",
							description: "De stand stand die de basisfunctie Verkeerslichten moet instellen en handhaven als #bedieningswijze = auto.",
							ref: "BSTTI#16863",
							comment: "",
							enum: { rood: "Rood", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },
						},
						ingestelde_stand: {
							stereotype: "variabele",
							title: "Gewenste stand",
							description: "De beoogde stand voor de Verkeerslichten.",
							ref: "BSTTI#9394",
							comment: "Conditie: #bedieningswijze = hand ; Waarde: #hand_stand ; Conditie: #bedieningswijze = auto ; Waarde: #auto_stand",
							enum: { rood: "Rood", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },
							// CHECK no else?
							get: function () {
								return this.bedieningswijze == "hand" ? this.hand_stand : this.bedieningswijze == "auto" ? this.auto_stand : "";
							},
						},
						plaatselijk_bediend: {
							stereotype: "variabele",
							title: "Plaatselijk bediend",
							description: "De Verkeerslichten kunnen o.a. plaatselijk bediend worden vanuit de noodbediening.",
							ref: "BSTTI#16866",
							comment: "Conditie: * ; Waarde: _lfv_Verkeerslichten.#bestuurbaar = nee && _lfv_Verkeerslichten.#reden_niet_bestuurbaar[i] = plaatselijke_bediening",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Verkeerslichten_Verkeersbuis.bestuurbaar == "nee" && checkOne(this.lfv_Verkeerslichten_Verkeersbuis, "reden_niet_bestuurbaar", "plaatselijke_bediening") ? "ja" : "nee";
							},
						},
						in_gebruik: {
							stereotype: "variabele",
							title: "In gebruik",
							description: "Geeft voor toepassing in wisselbuizen aan of deze instantie van basisfunctie Verkeerslichten wel of niet in gebruik moet zijn. Voor toepassing in verkeersbuizen die geen wisselbuizen zijn, dient de waarde van #in_gebruik altijd 'ja' te zijn. N.B.: de waarde van #in_gebruik representeert een streven.Of de Verkeerslichten daadwerkelijk in gebruik zijn wordt weergegeven door de variabele #daadwerkelijk_in_gebruik.",
							ref: "BSTTI#16541",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
						},
						daadwerkelijk_in_gebruik: {
							stereotype: "variabele",
							title: "Daadwerkelijk in gebruik",
							description: "Geeft aan of deze instantie van basisfunctie Verkeerslichten daadwerkelijk in gebruik is.",
							ref: "BSTTI#16542",
							comment: "Conditie: #in_gebruik = ja ; Waarde: ja ; Conditie: #in_gebruik = nee && #stand = gedoofd && _sf_Verkeerslicht[].#stand = gedoofd ; Waarde: nee ; Conditie: overige situaties ; Waarde: onbekend",
							enum: { ja: "Ja", nee: "Nee", onbekend: "Onbekend" },
							get: function () {
								return this.in_gebruik == "ja" ? "ja" : this.in_gebruik == "nee" && this.stand == "gedoofd" && checkAll(this.sf_Verkeerslicht_Verkeersbuis, "stand", "gedoofd") ? "nee" : "onbekend";
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							stereotype: "signalering",
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								//console.debug('Alarm_NietBestuurbaarWegensStoring', this.lfv_Verkeerslichten_Verkeersbuis, this.lfv_Verkeerslichten_Verkeersbuis.reden_niet_bestuurbaar);

								return this.lfv_Verkeerslichten_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Verkeerslichten_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							stereotype: "signalering",
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_Verkeerslichten_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							stereotype: "signalering",
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_Verkeerslichten_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						Alarm_GeelKnipperenWegensFalen: {
							stereotype: "signalering",
							title: "Alarm stand geel knipperen wegens falen",
							description: "Er zijn lampstoringen waardoor de LFV de gevraagde stand niet kan tonen en in plaats daarvan geel-knipperen toont.",
							ref: "BSTTI#16921",
							comment: "Conditie: _lfv_Verkeerslichten.#storingen[i] = STORING_ROOD_ACTIEVE_LICHTEN && _sf_Verkeerslicht[i].#stand = geel_knipperen",
							type: "deelsysteem_alarm",
							enum: { ja: "Gewenste stand niet mogelijk, geel knipperen geactiveerd", nee: "" },
							get: function () {
								return this.lfv_Verkeerslichten_Verkeersbuis.storingen.includes("STORING_ROOD_ACTIEVE_LICHTEN") && checkOne(this.sf_Verkeerslicht_Verkeersbuis, "stand", "geel_knipperen");
							},
						},
						BeschikbaarheidVerkeerslichten: {
							stereotype: "signalering",
							title: "Beschikbaarheid Verkeerslichten",
							description: "De beschikbaarheid van de Verkeerslichten voor de verkeersbuis.",
							ref: "BSTTI#9577",
							comment: "Status: #beschikbaarheid",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return this.beschikbaarheid;
							},
						},
						PlaatselijkeBedieningsStatus: {
							stereotype: "signalering",
							title: "Plaatselijke bediening status",
							description: "Status van de plaatselijke bediening van de Verkeerslichten.",
							ref: "BSTTI#16775",
							comment: "Status: #plaatselijk_bediend",
							type: "status_melding",
							enum: { ja: "Plaatselijk bediend", nee: "Niet plaatselijk bediend" },
							get: function () {
								return this.plaatselijk_bediend;
							},
						},
						Alarm_J32Storing: {
							stereotype: "signalering",
							title: "Alarm J32 storing",
							description: "Een of meer van de dynamische J32 borden zijn in storing.",
							ref: "BSTTI#17089",
							comment: "Conditie: _lfv_Verkeerslichten.#storingen[i] = STORING_J32",
							type: "deelsysteem_alarm",
							enum: { ja: "Een of meer van de dynamische J32 borden zijn in storing", nee: "" },
							get: function () {
								return this.lfv_Verkeerslichten_Verkeersbuis.storingen.includes("STORING_J32");
							},
						},
					},
					operations: {
						HandhaafInstellingen: {
							stereotype: "autonoom_proces",
							title: "Handhaaf instellingen",
							description: "Dit autonoom proces zorgt ervoor dat de Verkeerslichten de ingestelde stand aannemen. Als de Verkeerslichten niet in gebruik zijn (in een wisselbuis), worden deze gedoofd.",
							ref: "BSTTI#16883",
							comment: "Conditie: #in_gebruik = ja && _lfv_Verkeerslichten.#bestuurbaar = ja && #ingestelde_stand <> ongeldig ; Acties: _lfv_Verkeerslichten.SetStand(#ingestelde_stand) ; Conditie: #in_gebruik = nee && _lfv_Verkeerslichten.#bestuurbaar = ja ; Acties: _lfv_Verkeerslichten.SetStand(gedoofd)",
							em: function () {
								/** @debug mka: */
								console.debug(this.schema, this.ID, "HandhaafInstellingen", "this.auto_stand:", this.auto_stand);
								this.lfv_Verkeerslichten_Verkeersbuis[0].SetStand(this.auto_stand);//debug MVK
								return;


								// console.debug(this.schema, this.ID);
								// console.debug('bf_Verkeerslichten_Verkeersbuis.SetAutoStand', { stand: stand });
								//
								// this.lfv_Verkeerslichten_Verkeersbuis[0].SetStand(stand);

								//this.lfv_Verkeerslichten.SetStand = this.ingestelde_stand;
								//this.SetStand = this.ingestelde_stand;
								//console.debug('HandhaafInstellingen debug test', this.ingestelde_stand);
								//console.debug('ACTIE', this.ingestelde_stand);


								/** @debug end */






								if (this.in_gebruik == "ja" && this.lfv_Verkeerslichten_Verkeersbuis.bestuurbaar == "ja" && this.ingestelde_stand == "ongeldig") { this.lfv_Verkeerslichten_Verkeersbuis.SetStand(this.ingestelde_stand) }
								if (this.in_gebruik == "nee" && this.lfv_Verkeerslichten_Verkeersbuis.bestuurbaar == "ja") { this.lfv_Verkeerslichten_Verkeersbuis.SetStand("gedoofd") }


								//console.debug('ACTIE', this.in_gebruik == "ja", this.lfv_Verkeerslichten.bestuurbaar == "ja");




								//if (this.in_gebruik == "ja" && this.lfv_Verkeerslichten.bestuurbaar == "ja" && this.ingestelde_stand == "ongeldig") this.lfv_Verkeerslichten.SetStand = this.ingestelde_stand;
								//if (this.in_gebruik == "nee" && this.lfv_Verkeerslichten.bestuurbaar == "ja") this.lfv_Verkeerslichten.SetStand = "gedoofd";






							},
						},

						// Bedieningen
						SetOpAutobediening: {
							stereotype: "bediening",
							title: "Zet op autobediening",
							description: "De Verkeerslichten worden op auto gezet en volgen de besturingen.",
							ref: "BSTTI#16873",
							comment: "Conditie: #in_gebruik = ja ; Acties: #bedieningswijze:= auto",
							conditie: function () {
								return this.in_gebruik == "ja";
							},
							em: function () {
								this.bedieningswijze = "auto";
							},
						},
						SetOpHandbediening: {
							stereotype: "bediening",
							title: "Zet op handbediening",
							description: "De Verkeerslichten worden op hand gezet en volgen de bedieningen. Deze bediening overbrugt functionele vergrendelingen van de coördinerende functie Verkeersbuisafsluiter en voorkomt aansturingen bij eventuele hoogtedetectie. De bediening mag alleen via de MMI worden aangeroepen als de situatie voldoende veilig is.",
							ref: "BSTTI#16874",
							comment: "Conditie: #in_gebruik = ja && #bedieningswijze <> hand ; Acties: #bedieningswijze:= hand ; #hand_stand:= #auto_stand",
							conditie: function () {
								return this.in_gebruik == "ja" && this.bedieningswijze != "hand";
							},
							em: function () {
								this.bedieningswijze = "hand";
								this.hand_stand = this.auto_stand;
							},
						},
						SetHandStand: {
							//scope: private,
							stereotype: "bediening",
							title: "Zet hand stand",
							description: "Stel de gewenste stand van de Verkeerslichten in die gebruikt moet worden als #bedieningswijze = hand. De instellingen worden gezet op de LFV door het autonome proces *HandhaafInstellingen.",
							ref: "BSTTI#16876",
							comment: "Conditie: #in_gebruik = ja ; Acties: #hand_stand:= stand",
							arguments: {
								stand: {
									title: 'Stand', type: 'string',
									enum: {
										groen: { title: "Groen", color: "green" },
										rood: { title: "Rood", color: "red" },
									},
								},
							},
							conditie: function () {
								return this.in_gebruik == "ja";
							},
							em: function (stand) {
								//FOUT MVK
								//this.ingestelde_stand = stand;
								console.debug('SetHandStand', stand, this.hand_stand);
								this.hand_stand = stand;
							},
						},
						// Besturingen
						SetAutoStand: {
							stereotype: "besturing",
							title: "Zet auto stand",
							description: "stel de gewenste stand van de Verkeerslichten in die gebruikt moet worden als #bedieningswijze = auto. De instellingen worden gezet op de LFV door het autonome proces *HandhaafInstellingen.",
							ref: "BSTTI#16877",
							comment: "Conditie: #in_gebruik = ja ; Acties: #auto_stand:= stand",
							conditie: function () {
								return this.in_gebruik == "ja";
							},
							em: function (stand) {
								//console.debug("SetAutoStand", stand, this.schema, this.ID, this.properties.auto_stand, this.values ? this.values.auto_stand : '');
								console.debug(this.schema, this.ID, "SetAutoStand", "this.auto_stand=", stand);
								this.auto_stand = stand;

								return;
								/** @Conditie: #in_gebruik = ja */
				                if (this.in_gebruik == "ja")
				                {
				                    /** @Acties: #auto_stand:= stand" */
				                    this.auto_stand = stand;
				                }

								//console.debug(this.schema, this.ID, this.master.ID, this.lfv_Verkeerslichten_Verkeersbuis[0].master.ID);
								// console.debug(this.schema, this.ID);
								// console.debug('bf_Verkeerslichten_Verkeersbuis.SetAutoStand', { stand: stand });
								//
								// this.lfv_Verkeerslichten_Verkeersbuis[0].SetStand(stand);
							},
						},
						SetInGebruik: {
							stereotype: "besturing",
							title: "Zet in gebruik",
							description: "Besturing die voor toepassing in wisselbuizen gebruikt wordt om deze instantie van de functie Verkeerslichten in of uit te schakelen. Wanneer aangeroepen met het argument 'ja', dan moeten de Verkeerslichten functioneren als bij een verkeersbuis die geen wisselbuis is. Wanneer aangeroepen met de argument 'nee', dan moeten de Verkeerslichten gedoofd zijn en signaleringen gewoon door blijven geven. Voor de veiligheid mogen enkel instanties die al gedoofd zouden moeten zijn in of uit gebruik genomen worden.",
							ref: "BSTTI#16543",
							comment: "Conditie: #ingestelde_stand = gedoofd ; Acties: #in_gebruik:= in_gebruik",
							conditie: function () {
								return this.ingestelde_stand == "gedoofd";
							},
							em: function (in_gebruik) {
								this.in_gebruik = in_gebruik;
							},
						},
						// Autonome processen
					},
				},
				sf_Verkeerslicht_Verkeersbuis: {
					naam: "Subfunctie Verkeerslicht",
					hoortbij: "Verkeersbuis",
					title: "Verkeerslicht",
					mnu: "VRI_Afsluitboom",
					// CHECK
					createDetail: function (el) {
						with (el) {
							setAttribute('stand', '');
							setAttribute('bedieningswijze', '');
							setAttribute('plaatselijk_bediend', '');
							setAttribute('BedieningsStatus', '');
							with (appendTag('div')) {
								appendTag("div", { className: "rood" });
								appendTag("div", { className: "geel" });
								appendTag("div", { className: "groen" });
							}
							appendTag("icon", { className: "storing" });
							appendTag("icon", { className: "hand" });
							appendTag("icon", { className: "disable" });
						}
					},
					faceplate: {

					},
					properties: {
						// Configuratie-elementen
						lichtStatus: {
							//MAX ACTIE: VOORBEELD
							stereotype: "variabele",
							title: "Deur open",
							description: "Geeft aan of de post open is.",
							ref: "BSTTI#6688",
							comment: "Conditie: _lfv_hpk.#observeerbaar = ja ; Waarde: _lfv_hpk.#deur_open",
							enum: { licht_disabled: "Detector disabled", ja: "Ja", nee: "Nee" },
							enum: {
								licht_disabled: { title: "Detector disabled", color: "red" },
								ja: { title: "Ja", color: "green" },
								nee: { title: "Nee", color: "blue" },
							},
							type: 'radio',
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.observeerbaar == "ja" ? this.deur_open = this.lfv_Hulppost_Verkeersbuis.deur_open : "";
							},
						},

						bedieningswijze: {
							//MAX ACTIE: DUMMY VVOOR UITLEG
							stereotype: "variabele",
							title: "Bedieningswijze",
							description: "De huidige bedieningswijze van deze afsluitboom.",
							ref: "BSTTI#9406",
							comment: "",
							//enum: { hand: "Hand", auto: "Auto" },
							enum: {
								hand: { title: "Hand", color: "green" },
								auto: { title: "Auto", color: "blue" },
							},
							type: 'radio',
							//refresh: 1,

							init: "hand",
						},
						BedieningsStatus: {
							//VOORBEELD
							title: "Bedieningsstatus",
							description: "Geeft de bedieningswijze van de ... weer.",
							comment: "Status: #bedieningswijze",
							type: "status_melding",
							//enum: { hand: "Hand", auto: "Auto" },
							enum: {
								hand: { title: "Hand", color: "green" },
								auto: { title: "Auto", color: "blue" },
							},
							type: 'radio',
							//refresh: 1,

							conditie: function () {
								return this.bedieningswijze;
							},
						},
						PlaatselijkeBedieningsStatus: {
							//VOORBEELD
							title: "Plaatselijke bediening status",
							description: "status van de plaatselijke bediening van de afsluitboom.",
							ref: "BSTTI#16757",
							comment: "Status: #plaatselijk_bediend",
							type: "status_melding",
							//enum: { ja: "Plaatselijk bediend", nee: "Niet plaatselijk bediend" },
							enum: {
								ja: { title: "Plaatselijk bediend", color: "green" },
								nee: { title: "Niet plaatselijk bediend", color: "#ccc" },
							},
							type: 'radio',
							conditie: function () {
								return this.plaatselijk_bediend;
							},
						},

						plaatselijk_bediend: {
							//MAX ACTIE: DUMMY VVOOR UITLEG
							stereotype: "variabele",
							title: "Plaatselijk bediend",
							description: "De afsluitboom kan o.a. plaatselijk bediend worden vanuit de noodbediening.",
							ref: "BSTTI#9403",
							comment: "Conditie: * ; Waarde: _lfv_asb.#bestuurbaar = nee && _lfv_asb.#reden_niet_bestuurbaar[i] = plaatselijke_bediening",
							//enum: { ja: "Ja", nee: "Nee" },
							enum: {
								ja: { title: "Ja", color: "green" },
								nee: { title: "Nee", color: "#ccc" },
							},
							type: 'radio',
							//refresh: 1,

							get: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Afsluitboom_Verkeersbuis.reden_niet_bestuurbaar.includes("plaatselijke_bediening");
							},
						},

						_lfv_Verkeerslicht_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Verkeerslicht",
							description: "De component Verkeerslicht van van de LFV Verkeerslichten Verkeersbuis voor deze subfunctie.",
							ref: "BSTTI#6446",
							type: "selectitem",
							//initdefaultvalue: definitions.lfv_Verkeerslicht,
							//class: "LFV Verkeerslicht",
							//value:lfv, // CHECK: Is dit nodig?
						},
						// Variabelen
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft aan of dit Verkeerslicht beschikbaar is.",
							ref: "BSTTI#9381",
							comment: "Conditie: _lfv_Verkeerslicht.#bestuurbaar = ja && _lfv_Verkeerslicht.#storingen = {} ; Waarde: beschikbaar ; Conditie: _lfv_Verkeerslicht.#bestuurbaar = nee || _lfv_Verkeerslicht.#storingen[i] = (STORING_ROOD | STORING_GEEL | STORING_GEEL_KNIPPEREN | STORING_GROEN) ; Waarde: niet_beschikbaar ; Conditie: overige situaties ; Waarde: beperkt_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							// CHECK storingen = leeg + afvragen meerdere STORING waarden?
							get: function () {
								console.debug('sf_Verkeerslicht_Verkeersbuis.beschikbaarheid.get', { lfv_Verkeerslicht_Verkeersbuis_bestuurbaar: this.lfv_Verkeerslicht_Verkeersbuis.bestuurbaar });
								return this.lfv_Verkeerslicht_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("") ? "beschikbaar" : this.lfv_Verkeerslicht_Verkeersbuis.bestuurbaar == "nee" ||
	                                this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_ROOD") ||
	                                this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_GEEL") ||
	                                this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_GEEL_KNIPPEREN") ||
	                                this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_GROEN") ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
						stand: {
							stereotype: "variabele",
							title: "Actuele stand",
							description: "De huidige stand van dit Verkeerslicht.",
							ref: "BSTTI#6451",
							comment: "Conditie: _lfv_Verkeerslicht.#observeerbaar = ja ; Waarde: _lfv_Verkeerslicht.#stand",
							//enum: { rood: "Rood", geel: "Geel", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },
							enum: {
								groen: { title: "Groen", color: "green" },
								rood: { title: "Rood", color: "red" },
								geel_knipperen: { title: "Geel knipperen", color: "yellow" },
								gedoofd: { title: "Gedoofd", color: "#ccc" },
							},
							type: 'radio',
							//operation: 'SetHandStand',
							// CHECK no else?
							//refresh: 1,
							get: function () {
								//console.debug(this.lfv_Verkeerslicht);
								return this.lfv_Verkeerslicht_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Verkeerslicht_Verkeersbuis.stand : "";
							},
						},
						doel_actief: {
							stereotype: "variabele",
							title: "Vrijgegeven",
							description: "De variabele geeft aan of het Verkeerslicht gebruikt mag worden. Het Verkeerslicht mag met name niet worden gebruikt, indien de bijbehorende rijstrook is afgekruist door MTM.",
							ref: "BSTTI#9371",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
						},
						actief: {
							stereotype: "variabele",
							title: "Actief",
							description: "De variabele geeft aan of het Verkeerslicht actief is.",
							ref: "BSTTI#16868",
							comment: "Conditie: _lfv_Verkeerslicht.#observeerbaar = ja ; Waarde: _lfv_Verkeerslicht.#actief",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK no else?
							get: function () {
								return this.lfv_Verkeerslicht_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Verkeerslicht_Verkeersbuis.actief : "";
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							stereotype: "signalering",
							title: "Niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_Verkeerslicht_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Verkeerslicht_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							stereotype: "signalering",
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							//enum: { ja: "Storing algemeen", nee: "" },
							enum: {
								ja: { title: "Storing algemeen", color: "red" },
								nee: { title: "Geen", color: "#ccc" },
							},
							type: 'radio',
							get: function () {
								return this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							stereotype: "signalering",
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						Beschikbaarheid: {
							stereotype: "signalering",
							title: "Beschikbaarheid",
							description: "Meldt de beschikbaarheid van het Verkeerslicht.",
							ref: "BSTTI#15630",
							comment: "Status: #beschikbaarheid",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function (test) {
								return this.beschikbaarheid;
							},
						},

						Alarm_VerkeerslichtNietBeschikbaar: {
							stereotype: "signalering",
							title: "Verkeerslicht niet beschikbaar",
							description: "Alarm Verkeerslicht (functieniveau onder Functioneel Benodigde Capaciteit)",
							ref: "BSTTI#6462",
							comment: "Conditie: #beschikbaarheid = niet_beschikbaar",
							type: "deelsysteem_alarm",
							enum: { ja: "Verkeerslicht niet beschikbaar", nee: "" },
							get: function () {
								return this.beschikbaarheid == "niet_beschikbaar";
							},
						},
						Alarm_VerkeersbuisVerkeerslichtStoringRood: {
							stereotype: "signalering",
							title: "Verkeerslicht storing rood",
							description: "Alarm Verkeerslicht storing rood",
							ref: "BSTTI#14807",
							comment: "Conditie: _lfv_Verkeerslicht.#storingen[i] = STORING_ROOD",
							type: "deelsysteem_alarm",
							enum: { ja: "Verkeerslicht storing rood", nee: "" },
							get: function () {
								return this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_ROOD");
							},
						},
						Alarm_VerkeersbuisVerkeerslichtStoringGeel: {
							stereotype: "signalering",
							title: "Verkeerslicht storing geel",
							description: "Alarm Verkeerslicht storing geel",
							ref: "BSTTI#14810",
							comment: "Conditie: _lfv_Verkeerslicht.#storingen[i] = STORING_GEEL",
							type: "deelsysteem_alarm",
							enum: { ja: "Verkeerslicht storing geel", nee: "" },
							get: function () {
								return this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_GEEL");
							},
						},
						Alarm_VerkeersbuisVerkeerslichtStoringGeelKnipperen: {
							stereotype: "signalering",
							title: "Verkeerslicht storing geel knipperen",
							description: "Alarm Verkeerslicht storing geel knipperen",
							ref: "BSTTI#14809",
							comment: "Conditie: _lfv_Verkeerslicht.#storingen[i] = STORING_GEEL_KNIPPEREN",
							type: "deelsysteem_alarm",
							enum: { ja: "Verkeerslicht storing geel knipperen", nee: "" },
							get: function () {
								return this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_GEEL_KNIPPEREN");
							},
						},
						Alarm_VerkeersbuisVerkeerslichtStoringGroen: {
							stereotype: "signalering",
							title: "Verkeerslicht storing groen",
							description: "Alarm Verkeerslicht storing groen",
							ref: "BSTTI#14808",
							comment: "Conditie: _lfv_Verkeerslicht.#storingen[i] = STORING_GROEN",
							type: "deelsysteem_alarm",
							enum: { ja: "Verkeerslicht storing groen", nee: "" },
							get: function () {
								return this.lfv_Verkeerslicht_Verkeersbuis.storingen.includes("STORING_GROEN");
							},
						},
					},
					operations: {
						// Besturingen
						SetVerkeerslichtActief: {
							stereotype: "besturing",
							title: "Zet Verkeerslicht actief",
							description: "Deze besturing maakt het mogelijk om aan een Verkeerslicht door te geven of hij actief moet zijn (zie #doel_actief).",
							ref: "BSTTI#9373",
							comment: "Conditie: * ; Acties: #doel_actief:= waarde",
							conditie: function () {
								return true;
							},
							em: function (waarde) {
								this.doel_actief = waarde;
							},
						},
						// Autonome processen
						HandhaafInstellingen: {
							stereotype: "autonoom_proces",
							title: "Handhaaf instellingen",
							description: "Dit autonoom proces handhaaft de instelling of het Verkeerslicht actief moet zijn of niet (zie #doel_actief).",
							ref: "BSTTI#16884",
							comment: "Conditie: _lfv_Verkeerslicht.#bestuurbaar = ja && #doel_actief = ja && #actief = nee ; Acties: _lfv_Verkeerslicht.SetActief(ja) ; Conditie: _lfv_Verkeerslicht.#bestuurbaar = ja && #doel_actief = nee && #actief = ja ; Acties: _lfv_Verkeerslicht.SetActief(nee)",
							js: function () {
								if (this.lfv_Verkeerslicht_Verkeersbuis.bestuurbaar == "ja" && this.doel_actief == "ja" && this.actief == "nee") { this.lfv_Verkeerslichten_Verkeersbuis.SetActief("ja") }
								if (this.lfv_Verkeerslicht_Verkeersbuis.bestuurbaar == "ja" && this.doel_actief == "nee" && this.actief == "ja") { this.lfv_Verkeerslichten_Verkeersbuis.SetActief("nee") }
							},
						},
					},
				},
				// Afsluitboom
				bf_Afsluitboom_Verkeersbuis: {
					naam: "Basisfunctie Afsluitboom",
					hoortbij: "Verkeersbuis",
					title: "Afsluitboom",
					mnu: mnu.Verkeer,
					// CHECK
					faceplate: {

					},
					gui: {
						propertyname: 'stand',
						construct: function () {
							with (this.elDetail) {
								appendTag("div", { className: "boom" });
								appendTag("div", { className: "basis" });
							}
						}
					},
					properties: {
						// Configuratie-elementen
						lfv_Afsluitboom_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Afsluitboom",
							description: "De LFV Afsluitboom Verkeersbuis voor deze afsluitboom.",
							ref: "BSTTI#6520",
							type: "selectitem",
							//initdefaultvalue: definitions.lfv_Afsluitboom
						},
						max_transitietijd_asb: {
							stereotype: "configuratie_element",
							title: "Maximale transitietijd",
							description: "De tijd die een standsverandering van de afsluitbomen maximaal mag duren. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#9627",
							type: "number",
							unit: "s",
							enum: [0, 1, 5, 10],
							min: 0,
							max: 60,
							step: 1,
							initdefaultvalue: "30", // CHECK: is het noodzakelijk om de waarde voor een configuratie-element hier vast te leggen?
						},
						// Variabelen
						bedieningswijze: {
							stereotype: "variabele",
							title: "Bedieningswijze",
							description: "De huidige bedieningswijze van deze afsluitboom.",
							ref: "BSTTI#9406",
							comment: "",
							enum: { hand: "Hand", auto: "Auto" },
							initdefaultvalue: "hand",
						},
						plaatselijk_bediend: {
							stereotype: "variabele",
							title: "Plaatselijk bediend",
							description: "De afsluitboom kan o.a. plaatselijk bediend worden vanuit de noodbediening.",
							ref: "BSTTI#9403",
							comment: "Conditie: * ; Waarde: _lfv_asb.#bestuurbaar = nee && _lfv_asb.#reden_niet_bestuurbaar[i] = plaatselijke_bediening",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Afsluitboom_Verkeersbuis.reden_niet_bestuurbaar.includes("plaatselijke_bediening");
							},
						},
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van de afsluitboom aan.",
							ref: "BSTTI#6484",
							comment: "Conditie: _lfv_asb.#bestuurbaar = ja && (_lfv_asb.#storingen = {} && #transitiestatus_afsluitboom <> niet_bereikt) ; Waarde: beschikbaar ; Conditie: _lfv_asb.#bestuurbaar = ja && (_lfv_asb.#storingen<> { } || #transitiestatus_afsluitboom = niet_bereikt) ; Waarde: beperkt_beschikbaar ; Conditie: _lfv_asb.#bestuurbaar = nee ; Waarde: niet_beschikbaar",
							enum: { niet_beschikbaar: "Niet_beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							// CHECK storingen = leeg
							get: function () {
								this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Afsluitboom_Verkeersbuis.storingen.includes("") && this.transitiestatus_afsluitboom != "niet_bereikt" ? "beschikbaar" : this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "ja" && (!this.lfv_Afsluitboom_Verkeersbuis.storingen.includes("") || this.transitiestatus_afsluitboom == "niet_bereikt") ? "beperkt_beschikbaar" : "niet_beschikbaar";
							},
						},
						in_gebruik: {
							stereotype: "variabele",
							title: "In gebruik",
							description: "Geeft voor toepassing in wisselbuizen aan of deze instantie van basisfunctie afsluitboom wel of niet in gebruik moet zijn. Voor toepassing in verkeersbuizen die geen wisselbuizen zijn, dient de waarde van #in_gebruik altijd 'ja' te zijn. N.B.: de waarde van #in_gebruik representeert een streven. Of de afsluitboom daadwerkelijk in gebruik is wordt weergegeven door de variabele #daadwerkelijk_in_gebruik.",
							ref: "BSTTI#16547",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
						},
						daadwerkelijk_in_gebruik: {
							stereotype: "variabele",
							title: "Daadwerkelijk in gebruik",
							description: "Geeft aan of deze instantie van basisfunctie afsluitboom daadwerkelijk in gebruik is.",
							ref: "BSTTI#16548",
							comment: "Conditie: #in_gebruik = ja ; Waarde: ja ; Conditie: #in_gebruik = nee && #stand = op && #transitiestatus_afsluitboom = bereikt ; Waarde: nee ; Conditie: overige situaties ; Waarde: onbekend",
							enum: { ja: "Ja", nee: "Nee", onbekend: "Onbekend" },
							get: function () {
								this.in_gebruik == "ja" ? "ja" : this.in_gebruik == "nee" && this.stand == "op" && this.transitiestatus_afsluitboom == "bereikt" ? "nee" : "onbekend";
							},
						},
						stand: {
							stereotype: "variabele",
							title: "Actuele stand",
							description: "Stand per afsluitboom",
							ref: "BSTTI#6523",
							comment: "Conditie: _lfv_asb.#observeerbaar = ja ; Waarde: _lfv_asb.#stand",
							enum: { op: "Op", op_verlaten: "Op verlaten", neer: "Neer" },
							// CHECK no else?
							get: function () {
								this.lfv_Afsluitboom_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Afsluitboom_Verkeersbuis.stand : "";
							},
						},
						doel_stand: {
							stereotype: "variabele",
							title: "Gewenste stand",
							description: "Geeft de ingestelde stand van deze afsluitboom aan. Merk op dat bij 'stop' typisch de beweging stopt; #stand kan daarna 'op_verlaten' zijn, maar ook 'op' of 'neer' is mogelijk.",
							ref: "BSTTI#9568",
							comment: "init_patroon((#stand = op || #stand = neer), #stand)",
							enum: { op: "Op", stop: "Stop", neer: "Neer" },
							// CHECK init
							initdefaultvalue: "", // init_patroon((#stand = op || #stand = neer), #stand)
						},
						obstakelgedetecteerd: {
							stereotype: "variabele",
							title: "Obstakel aanwezig",
							description: "Als #obstakelgedetecteerd = ja dan is een obstakel gedetecteerd onder de afsluitboom.",
							ref: "BSTTI#6524",
							comment: "Conditie: _lfv_asb.#observeerbaar = ja && _lfv_asb.#storingen[]<> STORING_OBSTAKELDETECTIE ; Waarde: _lfv_asb.#obstakelgedetecteerd",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK no else?
							get: function () {
								this.lfv_Afsluitboom_Verkeersbuis.observeerbaar == "ja" && !this.lfv_Afsluitboom_Verkeersbuis.storingen.includes("STORING_OBSTAKELDETECTIE") ? this.lfv_Afsluitboom_Verkeersbuis.obstakelgedetecteerd : "";
							},
						},
						geblokkeerd: {
							stereotype: "variabele",
							title: "Blokkering actief",
							ref: "BSTTI#9417",
							description: "Geeft aan of de afsluitbomen gesloten mogen worden gezien de standen van de Verkeerslichten, d.w.z. als #geblokkeerd=ja mogen de afsluitbomen niet gesloten worden.",
							ref: "BSTTI#9417",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
						},
						vrijgavesignaal_ontvangen: {
							stereotype: "variabele",
							title: "Vrijgave van Verkeerslichten",
							description: "Geeft aan of de afsluitboom gesloten mag worden op basis van het vrijgavesignaal vanuit Verkeerslichten, d.w.z. als #vrijgave_signaal_ontvangen = nee zal de afsluitboom niet voorwaardelijk neer gaan.",
							ref: "BSTTI#16922",
							comment: "Conditie: _lfv_asb.#observeerbaar = ja ; Waarde: _lfv_asb.#vrijgavesignaal_ontvangen",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK no else?
							get: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Afsluitboom_Verkeersbuis.vrijgavesignaal_ontvangen : "";
							},
						},
						transitiestatus_tijdstip_afsluitboom: {
							stereotype: "variabele",
							title: "Tijdstip transitie bereikt",
							description: "Het tijdstip waarop de huidige transitiestatus-waarde bereikt is.",
							ref: "BSTTI#10015",
							comment: "",
							initdefaultvalue: "0", // CHECK tijdwaarde?
						},
						transitiestatus_afsluitboom: {
							stereotype: "variabele",
							title: "Transitiestatus",
							description: "Geeft de transitiestatus van de afsluitboom aan.",
							ref: "BSTTI#9573",
							comment: "Conditie: * ; Waarde: transitiestatus_patroon(#stand = #doel_stand || #doel_stand = stop, #doel_stand, #transitiestatus_tijdstip_afsluitboom, _max_transitietijd_asb )",
							enum: { bereikt: "Bereikt", niet_bereikt: "Niet bereikt", in_transitie: "In transitie" },
							get: function () {
								// CHECK hoe gaan we dit patroon in js code omzetten?

							},
						},
						beweging: {
							stereotype: "variabele",
							title: "Actuele beweging",
							description: "Geeft de beweging van de afsluitboom aan.",
							ref: "BSTTI#16931",
							comment: "Conditie: _lfv_asb.#observeerbaar = ja ; Waarde: _lfv_asb.#beweging",
							enum: { op: "Op", neer: "Neer", geen: "Geen" },
							// CHECK no else?
							get: function () {
								this.lfv_Afsluitboom_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Afsluitboom_Verkeersbuis.beweging : "";
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Afsluitboom_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						BedieningsStatus: {
							title: "Bedieningsstatus",
							description: "Geeft de bedieningswijze van de afsluitboom weer.",
							ref: "BSTTI#6531",
							comment: "Status: #bedieningswijze",
							type: "status_melding",
							enum: { hand: "Hand", auto: "Auto" },
							get: function () {
								return this.bedieningswijze;
							},
						},
						Beschikbaarheid: {
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van de afsluitboom weer.",
							ref: "BSTTI#15628",
							comment: "Status: #beschikbaarheid",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return this.beschikbaarheid;
							},
						},
						Alarm_ObstakelDetectieStoring: {
							title: "Obstakeldetectie storing",
							description: "Geeft aan of er een storing in de detectielus is.",
							ref: "BSTTI#9405",
							comment: "Conditie: _lfv_asb.#storingen[i] = STORING_OBSTAKELDETECTIE",
							type: "deelsysteem_alarm",
							enum: { ja: "Obstakeldetectie storing", nee: "" },
							get: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.storingen.includes("STORING_OBSTAKELDETECTIE");
							},
						},
						ObstakelGedetecteerd: {
							title: "Obstakel gedetecteerd",
							description: "Geeft aan of een obstakel (bijvoorbeeld een voertuig) gedetecteerd is.",
							ref: "BSTTI#9583",
							comment: "Status: #obstakelgedetecteerd",
							type: "status_melding",
							enum: { ja: "Obstakel gedetecteerd", nee: "Geen obstakel gedetecteerd" },
							get: function () {
								return this.obstakelgedetecteerd;
							},
						},
						Alarm_EindstandWijktAf: {
							title: "Eindstand wijkt af.",
							description: "Controleert of de afsluitboom zich in een toestand bevindt waarin hij niet beweegt maar niet open of gesloten is.",
							ref: "BSTTI#6533",
							comment: "Conditie: #stand = op_verlaten && #beweging = geen",
							type: "verkeerskundig_alarm",
							enum: { ja: "Eindstand wijkt af", nee: "" },
							get: function () {
								return this.stand == "op_verlaten" && this.beweging == "geen";
							},
						},
						AfsluitboomStand: {
							title: "Afsluitboom stand",
							description: "stand per afsluitboom.",
							ref: "BSTTI#6534",
							comment: "Status: #stand",
							type: "status_melding",
							enum: { op: "Op", op_verlaten: "Op verlaten", neer: "Neer" },
							get: function () {
								return this.stand;
							},
						},
						Alarm_AfsluitboomBereiktStandNiet: {
							title: "Afsluitboom bereikt stand niet.",
							description: "De afsluitboom was niet in staat de gevraagde verandering door te voeren.",
							ref: "BSTTI#9580",
							comment: "Conditie: #transitiestatus_afsluitboom = niet_bereikt",
							type: "deelsysteem_alarm",
							enum: { ja: "Afsluitboom bereikt stand niet", nee: "" },
							get: function () {
								return this.transitiestatus_afsluitboom == "niet_bereikt";
							},
						},
						TransitiestatusAfsluitboom: {
							title: "Transitiestatus afsluitboom",
							description: "De transitiestatus van de afsluitboom.",
							ref: "BSTTI#9581",
							comment: "Status: #transitiestatus_afsluitboom",
							type: "status_melding",
							enum: { bereikt: "Bereikt", in_transitie: "In transitie", niet_bereikt: "Niet bereikt" },
							get: function () {
								return this.transitiestatus_afsluitboom;
							},
						},
						PlaatselijkeBedieningsStatus: {
							title: "Plaatselijke bediening status",
							description: "status van de plaatselijke bediening van de afsluitboom.",
							ref: "BSTTI#16757",
							comment: "Status: #plaatselijk_bediend",
							type: "status_melding",
							enum: { ja: "Plaatselijk bediend", nee: "Niet plaatselijk bediend" },
							get: function () {
								return this.plaatselijk_bediend;
							},
						},
					},
					operations: {
						// Bedieningen
						SetOpAutobediening: {
							stereotype: "bediening",
							title: "Zet op autonbediening",
							description: "De afsluitboom wordt op auto gezet en volgt de besturingen.",
							ref: "BSTTI#9410",
							comment: "Conditie: #in_gebruik = ja ; Acties: #bedieningswijze:= auto",
							conditie: function () {
								return this.in_gebruik == "ja";
							},
							em: function () {
								this.bedieningswijze = "auto";
							},
						},
						SetOpHandbediening: {
							stereotype: "bediening",
							title: "Zet op handbediening",
							description: "De afsluitboom wordt op hand gezet en volgt de bedieningen.",
							ref: "BSTTI#9411",
							comment: "Conditie: #in_gebruik = ja ; Acties: #bedieningswijze:= hand",
							conditie: function () {
								return this.in_gebruik == "ja";
							},
							em: function () {
								this.bedieningswijze = "hand";
							},
						},
						HandOpen: {
							stereotype: "bediening",
							title: "Hand open",
							description: "Opent de afsluitboom. Deze bediening mag alleen via de MMI worden aangeroepen.",
							ref: "BSTTI#6526",
							comment: "Conditie: _lfv_asb.#bestuurbaar = ja && #bedieningswijze = hand && #in_gebruik = ja ; Acties: #doel_stand:= op ; _lfv_asb.Op()",
							conditie: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "ja" && this.bedieningswijze == "hand" && this.in_gebruik == "ja";
							},
							em: function () {
								this.doel_stand = "op";
								this.lfv_Afsluitboom_Verkeersbuis.Op();
							},
						},
						HandVoorwaardelijkSluit: {
							stereotype: "bediening",
							title: "Hand voorwaardelijk sluit",
							description: "Sluit de afsluitboom als er geen obstakel gedetecteerd is en de afsluitboom niet geblokkeerd is. Deze bediening mag alleen via de MMI worden aangeroepen.",
							ref: "BSTTI#6528",
							comment: "Conditie: _lfv_asb.#bestuurbaar = ja && #bedieningswijze = hand && #obstakelgedetecteerd = (nee | ongeldig) && #geblokkeerd = nee && #in_gebruik = ja ; Acties: #doel_stand:= neer ;_lfv_asb.Neer()",
							conditie: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "ja" && this.bedieningswijze == "hand" && (this.obstakelgedetecteerd == "nee" || this.obstakelgedetecteerd == "ongeldig") && this.geblokkeerd == "nee" && this.in_gebruik == "ja"; // Klopt deze conditie?
							},
							em: function () {
								this.doel_stand = "neer";
								this.lfv_Afsluitboom_Verkeersbuis.Neer();
							},
						},
						HandOnvoorwaardelijkSluit: {
							stereotype: "bediening",
							title: "Hand onvoorwaardelijk sluit",
							description: "Sluit de afsluitboom. Deze bediening overbrugt de voorwaarden zoals gesteld in BSTTI#16830 (eenmalig) en mag alleen via de MMI worden aangeroepen (als bevestiging na beoordeling dat de situatie voldoende veilig is).",
							ref: "BSTTI#6527",
							comment: "Conditie: _lfv_asb.#bestuurbaar = ja && #bedieningswijze = hand && #in_gebruik = ja ; Acties: #doel_stand:= neer ; _lfv_asb.NeerOnvoorwaardelijk()",
							conditie: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "ja" && this.bedieningswijze == "hand" && this.in_gebruik == "ja";
							},
							em: function () {
								this.doel_stand = "neer";
								this.lfv_Afsluitboom_Verkeersbuis.NeerOnvoorwaardelijk();
							},
						},
						SetOpHandbedieningEnStop: {
							stereotype: "bediening",
							title: "Zet op handbediening en stop",
							description: "In handbediening zetten en afbreken van de beweging van de afsluitboom.",
							ref: "BSTTI#6529",
							comment: "Conditie: _lfv_asb.#bestuurbaar = ja && #in_gebruik = ja ; Acties: #bedieningswijze:= hand ; #doel_stand:= stop ; _lfv_asb.Stop()",
							conditie: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "ja" && this.in_gebruik == "ja";
							},
							em: function () {
								this.bedieningswijze = "hand";
								this.doel_stand = "stop";
								this.lfv_Afsluitboom_Verkeersbuis.Stop();
							},
						},
						// Besturingen
						AutoVoorwaardelijkSluit: { // CHECK: voor deze besturing zijn meerdere condities en bijbehorende acties gedefinieerd! Hoe gaan we hiermee om in de javascript?
							stereotype: "besturing",
							title: "Auto voorwaardelijk sluit",
							description: "Sluit de afsluitboom (voorwaardelijk).",
							ref: "BSTTI#9413",
							comment: "Conditie: #bedieningswijze = auto && _lfv_asb.#bestuurbaar = ja && #obstakelgedetecteerd = (nee | ongeldig) && #geblokkeerd = nee && #in_gebruik = ja ; Acties: #doel_stand:= neer ; _lfv_asb.Neer() ; Conditie: #bedieningswijze = auto && (_lfv_asb.#bestuurbaar = nee || #obstakelgedetecteerd = ja) ; Acties: #doel_stand:= neer",
							conditie: function () {
								return this.bedieningswijze == "auto";
							},
							em: function () {
								this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "ja" && (this.obstakelgedetecteerd == "nee" || this.obstakelgedetecteerd == "ongeldig") && this.geblokkeerd == "nee" && this.in_gebruik == "ja" ? (this.doel_stand = "neer", this.lfv_Afsluitboom_Verkeersbuis.Neer()) : "";
								this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "nee" || this.obstakelgedetecteerd == "ja" ? this.doel_stand = "neer" : "";
							},
						},
						AutoOpen: {
							stereotype: "besturing",
							title: "Auto open",
							description: "Opent de afsluitboom.",
							ref: "BSTTI#9414",
							comment: "Conditie: _lfv_asb.#bestuurbaar = ja && #bedieningswijze = auto && #in_gebruik = ja ; Acties: #doel_stand:= op ;_lfv_asb.Op()",
							conditie: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "ja" && this.bedieningswijze == "auto" && this.in_gebruik == "ja";
							},
							em: function () {
								this.doel_stand = "op";
								this.lfv_Afsluitboom_Verkeersbuis.Op();
							},
						},
						Blokkeer: {
							stereotype: "besturing",
							title: "Blokkeer",
							description: "Stelt de VerkeersbuisAfsluiter in staat door te geven of de afsluitbomen gesloten mogen worden.",
							ref: "BSTTI#9416",
							comment: "Conditie: * ; Acties: #geblokkeerd:= waarde",
							conditie: function () {
								return true;
							},
							em: function (waarde) {
								this.geblokkeerd = waarde;
							},
						},
						AutoStop: {
							stereotype: "besturing",
							title: "Auto stop",
							description: "Stopt de afsluitboom.",
							ref: "BSTTI#16932",
							comment: "Conditie: _lfv_asb.#bestuurbaar = ja && #bedieningswijze = auto && #in_gebruik = ja ; Acties: #doel_stand:= stop ; _lfv_asb.Stop()",
							conditie: function () {
								return this.lfv_Afsluitboom_Verkeersbuis.bestuurbaar == "ja" && this.bedieningswijze == "auto" && this.in_gebruik == "ja";
							},
							em: function () {
								this.doel_stand = "stop";
								this.lfv_Afsluitboom_Verkeersbuis.Stop();
							},
						},
						SetInGebruik: {
							stereotype: "besturing",
							title: "Zet in gebruik",
							description: "Besturing die voor toepassing in wisselbuizen gebruikt wordt om deze instantie van afsluitboom in of uit te schakelen. Wanneer aangeroepen met het argument 'ja', dan moet de afsluitboom functioneren als bij een verkeersbuis die geen wisselbuis is. Wanneer aangeroepen met de argument 'nee', dan moet deze afsluitboom in stand 'op' blijven en signaleringen gewoon door blijven geven. Voor de veiligheid is enkel toegestaan dat een afsluitboom in of uit gebruik genomen gaat worden als hij in stand 'op' staat.",
							ref: "BSTTI#16549",
							comment: "Conditie: #doel_stand = op && #transitiestatus_afsluitboom = bereikt ; Acties: #in_gebruik:= in_gebruik",
							conditie: function () {
								return this.doel_stand == "op" && this.transitiestatus_afsluitboom == "bereikt";
							},
							em: function (in_gebruik) {
								this.in_gebruik = in_gebruik;
							},
						},
					},
				},
				// MTM-koppeling
				bf_MTMkoppeling_Verkeersbuis: {
					naam: "Basisfunctie MTM-koppeling",
					hoortbij: "Verkeersbuis",
					title: "MTM-koppeling",
					mnu: mnu.Verkeer,
					// CHECK
					faceplate: {
					},

					properties: {
						// Configuratie-elementen
						lfv_MTMkoppeling_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV MTM",
							description: "De LFV MTM-Koppeling Verkeersbuis die toegang biedt tot het MTM-systeem voor deze verkeersbuis.",
							ref: "BSTTI#6478",
							type: "selectitem",
							//initdefaultvalue: definitions.lfv_MTMkoppeling_Verkeersbuis
						},
						groepscode_andreaskruis: {
							stereotype: "configuratie_element",
							title: "Groepscode andreaskruis",
							description: "De groepscode van andreaskruizen (zie BSTTI#1209 en de beeldenbibliotheek van RWS, ref. [MTMBB]).",
							ref: "BSTTI#6498",
							type: "number",
							initdefaultvalue: "2",
						},
						beeldcode_andreaskruis: {
							stereotype: "configuratie_element",
							title: "Beeldcode andreaskruis",
							description: "De beeldcode van het andreaskruis (zie BSTTI#1209 en de beeldenbibliotheek van RWS, ref. [MTMBB]).",
							ref: "BSTTI#6499",
							type: "number",
							initdefaultvalue: "4",
						},
						groepscode_snelheid: {
							stereotype: "configuratie_element",
							title: "Groepscode snelheid",
							description: "De groepscode van snelheden (zie BSTTI#1209 en beeldenbibliotheek van RWS, ref. [MTMBB]).",
							ref: "BSTTI#15507",
							type: "number",
							initdefaultvalue: "1",
						},
						variatiecode_eindemaxsnelheid: {
							stereotype: "configuratie_element",
							title: "Variatiecode einde max snelheid",
							description: "De variatiecode 'einde maximum snelheid' (zie BSTTI#1209 en beeldenbibliotheek van RWS, ref. [MTMBB]).",
							ref: "BSTTI#15508",
							type: "number",
							initdefaultvalue: "4",
						},
						raai_Verkeerslicht: {
							stereotype: "configuratie_element",
							title: "Raai Verkeerslicht",
							description: "Het nummer van de signaleringsraai waar het Verkeerslicht zich op bevindt.",
							ref: "BSTTI#15510",
							type: "number",
							initdefaultvalue: "4",
						},
						raai_snelheidsmaatregel: {
							stereotype: "configuratie_element",
							title: "Raai snelheidsmaatregel",
							description: "De signaleringsraai nummer waar de instelling van een snelheidsmaatregel op gesignaleerd kan worden, veelal nr 3.",
							ref: "BSTTI#15511",
							type: "number",
							initdefaultvalue: "3",
						},
						maxsnelheid_maatregel: {
							stereotype: "configuratie_element",
							title: "Max snelheid maatregel",
							description: "De maximumsnelheid die op de _raai_snelheidsmaatregel gezet wordt bij een snelheidsbeperking, veelal 50 km/u.",
							ref: "BSTTI#15512",
							type: "number",
							initdefaultvalue1: "51",
						},
						// Variabelen
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft aan of de MTM-koppeling beschikbaar is.",
							ref: "BSTTI#6484",
							comment: "Conditie: _lfv_mtm.#bestuurbaar = ja && _lfv_mtm.#storingen = {} ; Waarde: beschikbaar ; Conditie: _lfv_mtm.#bestuurbaar = ja && _lfv_mtm.#storingen<> { } ; Waarde: beperkt_beschikbaar ; Conditie: _lfv_mtm.#bestuurbaar = nee ; Waarde: niet_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							// CHECK geen else?
							get: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.bestuurbaar == "ja" && this.lfv_MTMkoppeling_Verkeersbuis.storingen.includes("") ? "beschikbaar" : this.lfv_MTMkoppeling_Verkeersbuis.bestuurbaar == "ja" && !this.lfv_MTMkoppeling_Verkeersbuis.storingen.includes("") ? "beperkt_beschikbaar" : this.lfv_MTMkoppeling_Verkeersbuis.bestuurbaar == "nee" ? "niet_beschikbaar" : "";
							},
						},
						beeld: { // CHECK array: in de LTS wordt gewerkt met een tweedimensionaal array? #beeld[raai, rijstrook]
							stereotype: "variabele",
							title: "Actuele beeld",
							description: "Het actuele beeld van de signaalgever op signaleringsraai r van rijstrook s als aangegeven door de LFV MTM-Koppeling.",
							ref: "BSTTI#6504",
							comment: "Conditie: _lfv_mtm.#observeerbaar = ja ; Waarde: _lfv_mtm.#beeld",
							enum: "", // Wat hier definieren?
							// CHECK geen else?
							get: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.observeerbaar == "ja" ? this.lfv_MTMkoppeling_Verkeersbuis.beeld : "";
							},
						},
						is_afgekruist_Verkeerslicht: { // CHECK array: in de LTS wordt gewerkt met een eendimensionaal array? #is_afgekruist_Verkeerslicht[rijstrook]
							stereotype: "variabele",
							title: "Afgekruist",
							description: "Geeft aan per rijstrook s als index of een andreas kruis gezet is op de signaalgever van de signaleringsraai van het Verkeerslicht.",
							ref: "BSTTI#6507",
							comment: "Conditie: _lfv_mtm.#observeerbaar = ja ; Waarde: _lfv_mtm.#beeld[_raai_Verkeerslicht, s].#groepscode = _groepscode_andreaskruis && _lfv_mtm.#beeld[_raai_Verkeerslicht, s].#beeldcode = _beeldcode_andreaskruis",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.observeerbaar == "ja" ? "" : "";
							},
						},
						is_snelheidsbeperkt: { // CHECK array: in de LTS wordt gewerkt met een eendimensionaal array? is_snelheidsbeperkt[rijstrook]
							stereotype: "variabele",
							title: "snelheidsbeperking",
							description: "Geeft aan per rijstrook s als index of een snelheidsmaatregel gezet is op de signaalgever van de juiste signaleringsraai. Ook afgekruist zijn wordt als snelheidsbeperking gezien.",
							ref: "BSTTI#15509",
							comment: "Conditie: _lfv_mtm.#observeerbaar = ja ; Waarde: #is_afgekruist_Verkeerslicht[s] = ja || (_lfv_mtm.#beeld[_raai_snelheidsmaatregel, s].#groepscode = _groepscode_snelheid && _lfv_mtm.#beeld[_raai_snelheidsmaatregel, s].#beeldcode kleiner of gelijk _maxsnelheid_maatregel && _lfv_mtm.#beeld[_raai_snelheidsmaatregel, s].#variatiecode<_variatiecode_eindemaxsnelheid )",
							enum: "ja|nee", // Wat hier definieren?
							// CHECK geen else?
							get: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.observeerbaar == "ja" ? "" : "";
							},
						},
						in_gebruik: {
							stereotype: "variabele",
							title: "In gebruik",
							description: "Geeft voor toepassing in wisselbuizen aan of deze instantie van basisfunctie MTM-koppeling wel of niet in gebruik moet zijn. Voor toepassing in verkeersbuizen die geen wisselbuizen zijn, dient de waarde van #in_gebruik altijd 'ja' te zijn. N.B.: de waarde van #in_gebruik representeert een streven.Of de MTM - koppeling daadwerkelijk in gebruik is wordt weergegeven door de variabele #daadwerkelijk_in_gebruik.",
							ref: "BSTTI#16544",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
						},
						daadwerkelijk_in_gebruik: {
							stereotype: "variabele",
							title: "Daadwerkelijk in gebruik",
							description: "Geeft aan of deze instantie van basisfunctie MTM-koppeling daadwerkelijk in gebruik is.",
							ref: "BSTTI#16545",
							comment: "Conditie: * ; Waarde: #in_gebruik",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.in_gebruik;
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							stereotype: "signalering",
							title: "Niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.bestuurbaar == "nee" && this.lfv_MTMkoppeling_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							stereotype: "signalering",
							title: "storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							stereotype: "signalering",
							title: "storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						BeschikbaarheidMtmKoppeling: {
							stereotype: "signalering",
							title: "Beschikbaarheid MTM-koppeling",
							description: "Meldt de beschikbaarheid van de MTM-koppeling.",
							ref: "BSTTI#9585",
							comment: "Status: #beschikbaarheid",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return this.beschikbaarheid;
							},
						},
						Alarm_MtmKoppelingNietBeschikbaar: {
							stereotype: "signalering",
							title: "MTM-koppeling niet beschikbaar",
							description: "Alarm MTM koppeling niet beschikbaar",
							ref: "BSTTI#15699",
							comment: "Conditie: #beschikbaarheid = niet_beschikbaar",
							type: "deelsysteem_alarm",
							enum: { ja: "MTM-koppeling niet beschikbaar", nee: "" },
							get: function () {
								return this.beschikbaarheid == "niet_beschikbaar";
							},
						},
					},
					operations: {
						// Besturingen
						InstellenSnelheidsBeperking: {
							stereotype: "besturing",
							title: "Instellen snelheidsbeperking",
							description: "Vraagt een snelheidsbeperking aan op de signaleringsraaien voor de verkeersbuis.",
							ref: "BSTTI#6486",
							comment: "Conditie: _lfv_mtm.#bestuurbaar = ja && #in_gebruik = ja ; Acties: _lfv_mtm.SetMaatregel(aan)",
							conditie: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.bestuurbaar == "ja" && this.in_gebruik == "ja";
							},
							em: function () {
								this.lfv_MTMkoppeling_Verkeersbuis.SetMaatregel("aan");
							},
						},
						OpheffenSnelheidsBeperking: {
							stereotype: "besturing",
							title: "Opheffen snelheidsbeperking",
							description: "Heft de snelheidsbeperking op de signaleringsraaien voor de verkeersbuis op.",
							ref: "BSTTI#6487",
							comment: "Conditie: _lfv_mtm.#bestuurbaar = ja && #in_gebruik = ja ; Acties: _lfv_mtm.SetMaatregel(uit)",
							conditie: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.bestuurbaar == "ja" && this.in_gebruik == "ja";
							},
							em: function () {
								this.lfv_MTMkoppeling_Verkeersbuis.SetMaatregel("uit");
							},
						},
						SetinGebruik: {
							stereotype: "besturing",
							title: "Zet in gebruik",
							description: "Besturing die voor toepassing in wisselbuizen gebruikt wordt om deze instantie van MTM-koppeling in of uit te schakelen. Wanneer aangeroepen met het argument 'ja', dan moet de MTM-koppeling functioneren als bij een verkeersbuis die geen wisselbuis is. Wanneer aangeroepen met de argument 'nee', dan moet deze MTM-koppeling signaleringen gewoon door blijven geven.",
							ref: "BSTTI#16546",
							comment: "Conditie: * ; Acties: #in_gebruik:= in_gebruik",
							conditie: function () {
								return true;
							},
							em: function (in_gebruik) {
								this.in_gebruik = in_gebruik;
							},
						},
						InstellenKruizenInBuis: {
							stereotype: "besturing",
							title: "Instellen kruizen in buis",
							description: "Vraagt kruizen aan in de verkeersbuis.",
							ref: "BSTTI#17160",
							comment: "Conditie: _lfv_mtm.#bestuurbaar = ja && #in_gebruik = ja ; Acties: _lfv_mtm.SetKruizenInBuis(aan)",
							conditie: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.bestuurbaar == "ja" && this.in_gebruik == "ja";
							},
							em: function () {
								this.lfv_MTMkoppeling_Verkeersbuis.SetKruizenInBuis("aan");
							},
						},
						OpheffenKruizenInBuis: {
							stereotype: "besturing",
							title: "Opheffen kruizen in buis",
							description: "Heft een eerdere aanvraag tot kruizen via deze koppeling op.",
							ref: "BSTTI#17161",
							comment: "Conditie: _lfv_mtm.#bestuurbaar = ja && #in_gebruik = ja ; Acties: _lfv_mtm.SetKruizenInBuis(uit)",
							conditie: function () {
								return this.lfv_MTMkoppeling_Verkeersbuis.bestuurbaar == "ja" && this.in_gebruik == "ja";
							},
							em: function () {
								this.lfv_MTMkoppeling_Verkeersbuis.SetKruizenInBuis("uit");
							},
						},
					},
				},
				// Hulppost
				bf_Hulppost_Verkeersbuis: {
					naam: "Basisfunctie Hulppost",
					hoortbij: "Verkeersbuis",
					titel: "Hulppost",
					gui: {
						construct: function () {
							with (this.elDetail) {
								appendTag("div", { className: "blusapparaat" });
								appendTag("div", { className: "slanghaspel" });
								//appendTag("span", { className: "noodtelefoon" });
							}
						}
					},
					properties: {
						// Configuratie elementen
						lfv_Hulppost_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Hulppost",
							description: "De instantie van de LFV Hulppost Verkeersbuis voor deze functie.",
							ref: "BSTTI#6686",
							type: "",
							class: "",
						},
						// Variabelen
						deur_open: {
							stereotype: "variabele",
							title: "Deur open",
							description: "Geeft aan of de post open is.",
							ref: "BSTTI#6688",
							comment: "Conditie: _lfv_hpk.#observeerbaar = ja ; Waarde: _lfv_hpk.#deur_open",
							enum: { detector_disabled: "Detector disabled", ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.observeerbaar == "ja" ? this.deur_open = this.lfv_Hulppost_Verkeersbuis.deur_open : "";
							},
						},
						blusapparaat_in_houder: {
							stereotype: "variabele",
							title: "Blusapparaat in houder",
							description: "T.b.v. detectie uitnemen van blustoestel.",
							ref: "BSTTI#6689",
							comment: "Conditie: _lfv_hpk.#observeerbaar = ja ; Waarde: _lfv_hpk.#blusapparaat_in_houder",
							enum: { detector_disabled: "Detector disabled", ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.observeerbaar == "ja" ? this.blusapparaat_in_houder = this.lfv_Hulppost_Verkeersbuis.blusapparaat_in_houder : "";
							},
						},
						spuitmond_slanghaspel_in_houder: {
							stereotype: "variabele",
							title: "Spuitmond slanghaspel in houder",
							description: "T.b.v. detectie uitnemen brandslanghaspel uit de houder.",
							ref: "BSTTI#6690",
							comment: "Conditie: _lfv_hpk.#observeerbaar = ja && _lfv_hpk.#hulppost_type = A ; Waarde: _lfv_hpk.#spuitmond_slanghaspel_in_houder",
							enum: { detector_disabled: "Detector disabled", ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.observeerbaar == "ja" && this.lfv_Hulppost_Verkeersbuis.hulppost_type == "A" ? this.spuitmond_slanghaspel_in_houder = this.lfv_Hulppost_Verkeersbuis.spuitmond_slanghaspel_in_houder : "";
							},
						},
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van de functie aan.",
							ref: "BSTTI#6690",
							comment: "Conditie: _lfv_hpk.#observeerbaar = ja && _lfv_hpk.#hulppost_type = A ; Waarde: _lfv_hpk.#spuitmond_slanghaspel_in_houder",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () {
								//console.debug('beschikbaarheid', this.lfv_Hulppost_Verkeersbuis, this.lfv_Hulppost_Verkeersbuis.storing);
								return this.lfv_Hulppost_Verkeersbuis.observeerbaar == "ja" && lfv_Hulppost_Verkeersbuis.storingen.includes("") ? "beschikbaar" : this.lfv_Hulppost_Verkeersbuis.observeerbaar == "nee" ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Hulppost_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						Alarm_HulppostDeurOpen: {
							title: "Alarm hulppost deur open",
							description: "Bewaak stand deur hulppost (openen hulppost).",
							ref: "BSTTI#6695",
							comment: "Conditie: _lfv_hpk.#observeerbaar = ja && _lfv_hpk.#deur_open = ja",
							type: "verkeerskundig_alarm",
							enum: { ja: "Hulppost deur geopend", nee: "" },
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.observeerbaar == "ja" && this.lfv_Hulppost_Verkeersbuis.deur_open == "ja";
							},
						},
						Alarm_BlusapparaatUitgenomen: {
							title: "Alarm blusapparat uitgenomen",
							description: "Bewaak aan-/afwezigheid draagbaar brandblusapparaat (uitnemen blustoestel).",
							ref: "BSTTI#6089",
							comment: "Conditie: _lfv_hpk.#observeerbaar = ja && _lfv_hpk.#blusapparaat_in_houder = nee",
							type: "verkeerskundig_alarm",
							enum: { ja: "Blusapparat uitgenomen", nee: "" },
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.observeerbaar == "ja" && this.lfv_Hulppost_Verkeersbuis.blusapparaat_in_houder == "nee";
							},
						},
						Alarm_BrandslanghaspelUitHouderGenomen: {
							title: "Alarm brandslanghaspel uithouder genomen",
							description: "Bewaak uitnemen brandslanghaspel uit de houder. Het starten van de brandbluspompen gebeurt in het hoofdstuk interbuiscoördinatie.",
							ref: "BSTTI#6697",
							comment: "_lfv_hpk.#observeerbaar = ja && _lfv_hpk.#spuitmond_slanghaspel_in_houder = nee && _lfv_hpk.#hulppost_type = A",
							type: "verkeerskundig_alarm",
							enum: { ja: "Brandslanghaspel uithouder genomen", nee: "" },
							get: function () {
								return this.lfv_Hulppost_Verkeersbuis.observeerbaar == "ja" && this.lfv_Hulppost_Verkeersbuis.spuitmond_slanghaspel_in_houder == "nee" && this.lfv_Verkeerslicht_Verkeersbuis.hulppost_type == "A";
							},
						},
					},
					operations: {
						// Bedieningen
						EnableHulppostDeur: {
							stereotype: "bediening",
							title: "Enable hulppost deur",
							description: "Activeer de detectie van de stand van de deur van de hulppost.",
							ref: "BSTTI#6693",
							comment: "Conditie: * ; Acties: _lfv_hpk.EnableDetector( deur, ja )",
							conditie: function () {
								return true;
							},
							em: function () {
								this.lfv_Hulppost_Verkeersbuis.EnableDetector("deur", "ja");
							},
						},
						DisableHulppostDeur: {
							stereotype: "bediening",
							title: "Disable hulppost deur",
							description: "Deactiveer de detectie van de stand van de deur van de hulppost.",
							ref: "BSTTI#10635",
							comment: "Conditie: * ; Acties: _lfv_hpk.EnableDetector( deur, nee )",
							conditie: function () {
								return true;
							},
							em: function () {
								this.lfv_Hulppost_Verkeersbuis.EnableDetector("deur", "nee");
							},
						},
						EnableSlanghaspelStandDetectie: {
							stereotype: "bediening",
							title: "Enable slanghaspel stand detectie",
							description: "Activeer de detectie van de aanwezigheid van de slanghaspel.",
							ref: "BSTTI#10636",
							comment: "Conditie: *;Acties: _lfv_hpk.EnableDetector( spuitmond, ja )",
							conditie: function () {
								return true;
							},
							em: function () {
								this.lfv_Hulppost_Verkeersbuis.EnableDetector("spuitmond", "ja");
							},
						},
						DisableSlanghaspelStandDetectie: {
							stereotype: "bediening",
							title: "Disable slanghaspel stand detectie",
							description: "Deactiveer de detectie van de aanwezigheid van de slanghaspel.",
							ref: "BSTTI#10637",
							comment: "Conditie: *;Acties: _lfv_hpk.EnableDetector( spuitmond, nee )",
							conditie: function () {
								return true;
							},
							em: function () {
								this.lfv_Hulppost_Verkeersbuis.EnableDetector("spuitmond", "nee");
							},
						},
						EnableBlusapparaatDetectie: {
							stereotype: "bediening",
							title: "Enable blusapparat detectie",
							description: "Activeer de detectie van de aanwezigheid van het blusapparaat.",
							ref: "BSTTI#10638",
							comment: "Conditie: *;Acties: _lfv_hpk.EnableDetector( blusapparaat, ja )",
							conditie: function () {
								return true;
							},
							em: function () {
								this.lfv_Hulppost_Verkeersbuis.EnableDetector("blusapparaat", "ja");
							},
						},
						DisableBlusapparaatDetectie: {
							stereotype: "bediening",
							title: "Disable blusapparat detectie",
							description: "Deactiveer de detectie van de aanwezigheid van het blusapparaat.",
							ref: "BSTTI#10639",
							comment: "Conditie: *;Acties: _lfv_hpk.EnableDetector( blusapparaat, nee )",
							conditie: function () {
								return true;
							},
							em: function () {
								this.lfv_Hulppost_Verkeersbuis.EnableDetector("blusapparaat", "nee");
							},
						},
					},
				},
				// Omroep CCTV afstemming
				cf_OmroepCCTVAfstemming_Verkeersbuis: {
					naam: "Coördinerende functie Omroep CCTV afstemming",
					hoortbij: "Verkeersbuis",
					titel: "Omroep CCTV afstemming",
				},
				// CCTV
				bf_CCTV_Verkeersbuis: {
					naam: "Basisfunctie CCTV",
					hoortbij: "Verkeersbuis",
					title: "CCTV",
					mnu: mnu.Verkeer,
					properties: {
						// Configuratie-elementen
						lfv_CCTV_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV CCTV",
							description: "De instantie van de LFV CCTV Verkeersbuis voor deze verkeersbuis.",
							ref: "BSTTI#7255",
							type: "selectitem",
							class: "",
						},
						sf_Camera_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Camera's",
							description: "De lijst van de subfuncties Camera in de basisfunctie CCTV. De volgorde van deze lijst stemt overeen met de volgorde van de camera's in de CCTV LFV.",
							ref: "BSTTI#15705",
							type: "selectitem",
							class: "",
							initdefaultvalue: [],
						},
						sf_Detailkanaal_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Detailkanaal",
							description: "De subfunctie Kanaal die het detailbeeld representeert. Zolang de joystick is gekoppeld aan de verkeersbuis, komt dit kanaal overeen met de camera waar de joystick aan is gekoppeld. Als de joystick niet aan een camera van de verkeersbuis is gekoppeld, komt het detailkanaal overeen met die camera van de verkeersbuis waar de joystick als laatste aan gekoppeld was. Dit is tevens het beeld dat naar de Gemeenschappelijke meldkamer en het hulpdienstpaneel kan worden doorgegeven. Aan het detailkanaal dient te allen tijde een camera met beeld gekoppeld te zijn, zodat altijd te verifiëren is dat de lijn naar de Gemeenschappelijk meldkamer functioneert.",
							ref: "BSTTI#6141",
							type: "selectitem",
							class: "",
						},
						sf_Controlekanaal_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Controlekanaal",
							description: "De subfunctie Kanaal die het controlebeeld representeert. Deze wordt gebruikt voor het weergeven van: in beweging gaande VTI, op detailplattegrond geselecteerde camera, view historische beelden.",
							ref: "BSTTI#17626",
							type: "selectitem",
							class: "",
						},
						sf_InritGebied1Kanaal_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Inrit gebied kanaal 1",
							description: "Videobeeld 1 van het inritgebied.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_InritGebied2Kanaal_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Inrit gebied kanaal 2",
							description: "Videobeeld 2 van het inritgebied.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_GeslotenKanaalVoor_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Gesloten kanaal voor",
							description: "Videobeeld van de camera voor de camera van _sf_gesloten_kanaal_midden.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_GeslotenKanaalMidden_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Gesloten kanaal midden",
							description: "Videobeeld van het gesloten gedeelte.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_GeslotenKanaalNa_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Gesloten kanaal na",
							description: "Videobeeld van de camera na de camera van _sf_gesloten_kanaal_midden.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_UitritGebiedKanaal_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Uitrit gebied kanaal",
							description: "Videobeeld van het uitritgebied.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_WisselbuisExtraUitritKanaal_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Wisselbuis extra uitrit kanaal",
							description: "Extra videobeeld van het uitritgebied enkel voor wisselbuizen.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_ParkeerbeeldKanalen_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Parkeerbeeld kanalen",
							description: "Videobeelden waar de WVL beelden/camera's kan parkeren.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
							initdefaultvalue: [],
						},
						sf_CalamiteitPresetKanalen_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Calamiteit preset kanalen",
							description: "18 videobeelden met presets voor gebruik in geval van calamiteit. Het eerste kanaal komt overeen met _sf_Detailkanaal.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",

						},
						sf_Schouwkanalen_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Schouwkanalen",
							description: "8 videobeelden voor het schouwen van de tunnel. Tijdens het schouwen worden 4 van de kanalen getoond. De andere 4 kanalen zijn voor het ophalen van de volgende schouwbeelden.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
							initdefaultvalue: [],
						},
						sf_AlarmKanaalVoor_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Alarm kanaal voor",
							description: "Videobeeld van de camera voor de camera van _sf_alarm_kanaal_midden.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_AlarmKanaalMidden_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Alarm kanaal midden",
							description: "Videobeeld voor de inspectie van een alarm.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_AlarmKanaalNa_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Alarm kanaal na",
							description: "Videobeeld van de camera na de camera van _sf_alarm_kanaal_midden.",
							ref: "BSTTI#6139",
							type: "selectitem",
							class: "",
						},
						sf_OpgenomenCameraKanaal_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Opgenomen camera kanaal",
							description: "Het kanaal waarop opgenomen CCTV beelden weergegeven kunnen worden.",
							ref: "BSTTI#6145",
							type: "selectitem",
							class: "",
						},
						schouwlijst: {
							stereotype: "configuratie_element",
							title: "Schouwlijst",
							description: "Dit is de lijst van camera's en presets voor deze verkeersbuis die meegenomen moeten worden tijdens het schouwen en wordt gebruikt als waarde van de lijst #schouwlijsten[verkeersbuis]. De lijst bestaat uit alle camera's in het gesloten deel. De drie subvelden van elk element van de lijst bevatten respectievelijk de subfunctie camera, de waarde van _preset[aflopend] van deze subfunctie en de waarde van _preset[oplopend] van deze subfunctie. De lijst is gesorteerd in oplopende hectometrering.",
							ref: "BSTTI#6138",
							type: "selectitem",
							class: "sf_Camera.preset",
							initdefaultvalue: [],
						},
						sf_Opslagsysteem_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Beeldregistratiesysteem",
							description: "De instantie van de subfunctie Beeldregistratiesysteem binnen de basisfunctie CCTV Verkeersbuis.",
							ref: "BSTTI#16057",
							type: "selectitem",
							class: "",
						},
						// Variabelen
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "status CCTV-systeem.",
							ref: "BSTTI#6146",
							comment: "Conditie: _lfv_CCTV.#bestuurbaar = nee ; Waarde: niet_beschikbaar ; Conditie: _lfv_CCTV.#bestuurbaar = ja && _sf_Camera[].#beschikbaarheid = beschikbaar ; Waarde: beschikbaar ; Conditie: overige situaties ; Waarde: beperkt_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							// CHECK geen else?
							get: function () {
								//debug return this.lfv_CCTV_Verkeersbuis.bestuurbaar == "ja" && this.lfv_CCTV_Verkeersbuis.storingen.includes("") ? "beschikbaar" : this.lfv_CCTV_Verkeersbuis.bestuurbaar == "ja" && !this.lfv_CCTV_Verkeersbuis.storingen.includes("") ? "beperkt_beschikbaar" : this.lfv_CCTV_Verkeersbuis.bestuurbaar == "nee" ? "niet_beschikbaar" : "";
							},
						},
						actieve_kanaal: {
							stereotype: "variabele",
							title: "Actieve kanaal",
							description: "Het actieve kanaal. De joystick dient gekoppeld te worden aan de camera die voor dit kanaal actief is. Indien er geen actief kanaal is, zal de waarde van deze variabele 'geen' zijn.",
							ref: "BSTTI#17648",
							comment: "",
						},
						laatste_actieve_kanaal: {
							stereotype: "variabele",
							title: "Laatste actieve kanaal",
							description: "Het laatste actieve kanaal. Deze variabele is gelijk aan #actieve_kanaal behalve als de waarde van #actieve_kanaal 'geen' is. In dat geval heeft deze variabele de waarde die #actieve_kanaal had voordat de waarde 'geen' werd.",
							ref: "BSTTI#17649",
							comment: "",
						},
						schouwlijsten: { // LETOP: TWEE-DIMENSIONAAL ARRAY!!!!
							stereotype: "variabele",
							title: "Schouwlijsten",
							description: "Een lijst van dynamische lijsten van camera's voor deze verkeersbuis die meegenomen moeten worden tijdens het schouwen. Bij het schouwen worden schouwlijsten overeenkomstig de schouwrichting (oplopend of aflopend) met oplopende respectievelijk aflopende indexering doorlopen. #schouwlijsten[verkeersbuis] moet altijd gelijk zijn aan _schouwlijst. De andere schouwlijsten zijn middels bedieningen en besturingen instelbaar. #schouwlijst[alarmen] bevat de camera's met presets van alle actuele alarmen met een camerakoppeling (deze lijst wordt d.m.v. autonoom proces *BewaakAlarmenSchouwlijst geactualiseerd). Elk element heeft de volgende subvelden: camera: een instantie van subfunctie Camera ; preset_aflopend: de preset waarop de camera moet staan als er in aflopende hectometrering geschouwd wordt ; preset_oplopend: de preset waarop de camera moet staan er in oplopende hectometrering geschouwd wordt.",
							ref: "",
							comment: "",
						},
						huidige_schouwlijst: {
							stereotype: "variabele",
							title: "Huidige schouwlijst",
							description: "De geselecteerde schouwlijst.",
							ref: "BSTTI#10349",
							comment: "Conditie: * ; Waarde: #schouwlijsten[#huidige_schouwlijst_index]",
							initdefaultvalue: this.schouwlijst,
							get: function () {
								// return this.schouwlijsten..... hoe dit uit te coderen?
							},
						},
						huidige_schouwlijst_index: {
							stereotype: "variabele",
							title: "Huidige schouwlijst index",
							description: "De index van #schouwlijsten voor de lijst die gebruikt moet worden als het schouwproces actief is.",
							ref: "BSTTI#16280",
							comment: "",
							initdefaultvalue: "verkeersbuis",
						},
						schouwrichting_tov_verkeer: {
							stereotype: "variabele",
							title: "Schouwrichting t.o.v. verkeer",
							description: "De richting t.o.v. de rijrichting van het verkeer waarin geschouwd wordt.",
							ref: "BSTTI#10350",
							comment: "",
							enum: { mee: "Mee", tegen: "Tegen" },
							initdefaultvalue: "mee",
						},
						schouwrichting: {
							stereotype: "variabele",
							title: "Schouwrichting",
							description: "De richting waarin geschouwd wordt.",
							ref: "BSTTI#16534",
							comment: "Conditie: #schouwrichting_tov_verkeer = mee ; Waarde: #rijrichting ; Conditie: #schouwrichting_tov_verkeer = tegen ; Waarde: tegenovergestelde(#rijrichting)",
							enum: { aflopend: "Aflopend", oplopend: "Oplopend" },
							get: function () {
								// return this.schouwrichting_tov_verkeer == "mee" ? this.rijrichting : this.rijrichting ...... hoe dit uit te coderen?
							},
						},
						rijrichting: {
							stereotype: "variabele",
							title: "Rijrichting",
							description: "De rijrichting van de verkeersbuis. Als de verkeersbuis geen wisselbuis is, moet deze variabele altijd gelijk zijn aan de ontwerprijrichting van de verkeersbuis.",
							ref: "BSTTI#16535",
							comment: "",
							enum: { aflopend: "Aflopend", oplopend: "Oplopend" },
						},
						richting_cameras: {
							stereotype: "variabele",
							title: "Richting camera's",
							description: "Richting 'mee' betekent dat geen van de camera's significant afwijkt van de pan waarde van zijn referentiepreset (typisch niet meer dan 150 graden, zie BSTTI#16702).",
							ref: "BSTTI#16706",
							comment: "Conditie: _sf_camera[].#richting = mee ; Waarde: mee ; Conditie: _sf_camera[].#richting = tegen ; Waarde: tegen ; Conditie: overige situaties ; Waarde: gemengd",
							enum: { mee: "Mee", tegen: "Tegen", gemengd: "Gemengd" },
							get: function () {
								return checkAll(this.sf_camera, "richting", "mee") ? "mee" : checkAll(this.sf_camera, "richting", "tegen") ? "tegen" : "gemengd";
							},
						},
						schouwen_aan: {
							stereotype: "variabele",
							title: "Schouwen aan",
							description: "Geeft aan of er geschouwd wordt.",
							ref: "BSTTI#10351",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							initdefaultvalue: "nee",
						},
						volgende_schouwen: {
							stereotype: "variabele",
							title: "Volgende schouwen",
							description: "Geeft aan dat de volgende set schouwbeelden aan schouwkanaal 1 t/m 4 gekoppeld moeten worden.",
							ref: "BSTTI#10352",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							initdefaultvalue: "nee",
						},
						schouwcamera_index: {
							stereotype: "variabele",
							title: "Schouwcamera index",
							description: "De index in de #huidige_schouwlijst van de huidige camera die getoond wordt tijdens het schouwen. De laagst geldige waarde van de index is 1.",
							ref: "BSTTI#10353",
							comment: "",
							initdefaultvalue: 1,
						},
						volgende_schouwcamera_index: {
							stereotype: "variabele",
							title: "Volgende schouwcamera index",
							description: "De index in de #huidige_schouwlijst van de volgende camera die getoond wordt tijdens het schouwen. De laagst geldige waarde van de index is 1, maar bij het bereiken van het einde van de schouwlijst kan hij de waarde 0 bevatten.",
							ref: "BSTTI#16718",
							comment: "",
							initdefaultvalue: 1,
						},
						schouwcameras_voorgericht: {
							stereotype: "variabele",
							title: "Schouwcamera's voorgericht",
							description: "Geeft aan of de schouwcamera’s zijn voorgericht.",
							ref: "BSTTI#17695",
							comment: "",
							enum: { ja: "Ja", nee: "Nee" },
							initdefaultvalue: "nee",
						},
					},
					operations: {
						// Bedieningen
						SetRichtingCameras: {
							stereotype: "bediening",
							title: "Set Richting Camera's",
							description: "Alle camera’s worden op hun voorgedefinieerde preset voor de aangeven richting ingesteld. Vaak worden camera’s met het verkeer mee gericht (om vervuiling van de lenzen te beperken).",
							ref: "BSTTI#16707",
							comment: "Conditie: richting = mee ; Acties: _sf_camera[].SetRichting(#rijrichting) ; Conditie: richting = tegen ; Acties: _sf_camera[].SetRichting(tegenovergestelde(#rijrichting))",
							conditie: function () {
								return true;
							},
							em: function (richting) {
								// check inverse van rijrichting????
								richting == "mee" ? forAll(this.sf_Camera_Verkeersbuis, "SetRichting", this.rijrichting) : forAll(this.sf_Camera_Verkeersbuis, "SetRichting", !this.rijrichting);
							},
						},
						SetActieveKanaal: {
							stereotype: "bediening",
							title: "Set Actieve Kanaal",
							description: "Stel in aan welk kanaal de joystick is gekoppeld. Indien er geen actief kanaal moet zijn, is de waarde van kanaal gelijk aan 'geen'. Indien er geen camera gekoppeld is aan het gewenste kanaal, wordt het actieve kanaal gelijk aan 'geen'. Enkel kanalen die getoond worden kunnen actief worden.",
							ref: "BSTTI#17651",
							comment: "Conditie: richting = mee ; Acties: _sf_camera[].SetRichting(#rijrichting) ; Conditie: richting = tegen ; Acties: _sf_camera[].SetRichting(tegenovergestelde(#rijrichting))",
							conditie: function () {
								return true;
							},
							em: function (kanaal) {
								// Check kanaal waarde
								kanaal == "geen" || kanaal.status != "tonen" || kanaal.camera == "geen" ? this.actieve_kanaal = "geen" : this.actieve_kanaal = kanaal;
							},
						},
						StartSchouwenVanaf: {
							stereotype: "bediening",
							title: "Start schouwen vanaf",
							description: "Start of hervat het schouwproces en begin daarbij vanaf #huidige_schouwlijst[start] indien dit element bestaat.",
							ref: "BSTTI#10354",
							comment: "Conditie: _lfv_cctv.#bestuurbaar = ja ; Acties: #schouwrichting_tov_verkeer:= richting_tov_verkeer ; #volgende_schouwcamera_index:= start ; #schouwcameras_voorgericht:= nee ; #schouwen_aan:= ja ; #volgende_schouwen:= ja",
							conditie: function () {
								return this.lfv_CCTV_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function (start, richting_tov_verkeer) {
								this.schouwrichting_tov_verkeer = richting_tov_verkeer;
								this.volgende_schouwcamera_index = start;
								this.schouwcameras_voorgericht = nee;
								this.schouwen_aan = ja;
								this.volgende_schouwen = ja;
							},
						},
						HervatSchouwen: {
							stereotype: "bediening",
							title: "Hervat schouwen",
							description: "Hervat het schouwproces en gaat daarbij verder vanaf #huidige_schouwlijst[#volgende_schouwcamera_index] indien dit element bestaat.",
							ref: "BSTTI#10355",
							comment: "Conditie: _lfv_cctv.#bestuurbaar = ja ; Acties: #schouwrichting_tov_verkeer:= richting_tov_verkeer ; #schouwcameras_voorgericht:= nee ; #schouwen_aan:= ja ; #volgende_schouwen:= ja",
							conditie: function () {
								return this.lfv_CCTV_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function (richting_tov_verkeer) {
								this.schouwrichting_tov_verkeer = richting_tov_verkeer;
								this.schouwcameras_voorgericht = nee;
								this.schouwen_aan = ja;
								this.volgende_schouwen = ja;
							},
						},
						StartSchouwen: {
							stereotype: "bediening",
							title: "Start schouwen",
							description: "Start het schouwproces afhankelijk van de opgegeven richting en rijrichting vanaf het eerste of het laatste element van #huidige_schouwlijst.",
							ref: "BSTTI#10356",
							comment: "Conditie: _lfv_cctv.#bestuurbaar = ja ; Acties: #schouwrichting_tov_verkeer:= richting_tov_verkeer ; #schouwcameras_voorgericht:= nee ; #schouwen_aan:= ja ; #volgende_schouwen:= ja",
							conditie: function () {
								return true;
							},
							em: function (richting_tov_verkeer) {
								// functie LEN gebruikt, nog definieren!!
								richting_tov_verkeer == "mee" && this.rijrichting == "oplopend" || richting_tov_verkeer == "tegen" && this.rijrichting == "aflopend" ? this.StartSchouwenVanaf("1", richting_tov_verkeer) : this.StartSchouwenVanaf(len(this.huidige_schouwlijst), richting_tov_verkeer);
							},
						},
						StopSchouwen: {
							stereotype: "bediening",
							title: "Stop schouwen",
							description: "Stopt het schouwproces. De index van de volgende camera in het schouwproces (#volgende_schouwcamera_index) blijft ongewijzigd, zodat het schouwen daar hervat kan worden.",
							ref: "BSTTI#17740",
							comment: "Conditie: _lfv_cctv.#bestuurbaar = ja ; Acties: #schouwen_aan:= nee ; _sf_schouwkanalen[1].SetStatus(verbergen) ; _sf_schouwkanalen[2].SetStatus(verbergen) ; _sf_schouwkanalen[3].SetStatus(verbergen) ; _sf_schouwkanalen[4].SetStatus(verbergen) ; SetActieveKanaal(#laatste_actieve_kanaal)",
							conditie: function () {
								return true;
							},
							em: function () {
								this.schouwen_aan = nee;
								this.sf_schouwkanalen[1].SetStatus("verbergen");
								this.sf_schouwkanalen[2].SetStatus("verbergen");
								this.sf_schouwkanalen[3].SetStatus("verbergen");
								this.sf_schouwkanalen[4].SetStatus("verbergen");
								this.SetActieveKanaal(this.laatste_actieve_kanaal);
							},
						},
						SchouwVolgende: {
							stereotype: "bediening",
							title: "Schouw volgende",
							description: "Laat de volgende set schouwbeelden zien.",
							ref: "BSTTI#10358",
							comment: "Conditie: _lfv_cctv.#bestuurbaar = ja ; Acties: #volgende_schouwen:= ja",
							conditie: function () {
								return this.lfv_CCTV_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.volgende_schouwen = ja;
							},
						},
						SchouwVorige: {
							stereotype: "bediening",
							title: "Schouw vorige",
							description: "Laat de vorige set schouwbeelden zien.",
							ref: "BSTTI#10359",
							comment: "Conditie: _lfv_cctv.#bestuurbaar = ja ; Acties: IF #schouwrichting = oplopend THEN #volgende_schouwcamera_index:= #schouwcamera_index - 4 ELSE #volgende_schouwcamera_index:= #schouwcamera_index + 4 END_IF ; #schouwcameras_voorgericht:= nee ; #volgende_schouwen:= ja",
							conditie: function () {
								return this.lfv_CCTV_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.schouwrichting == "oplopend" ? this.volgende_schouwcamera_index = this.schouwcamera_index - 4 : this.volgende_schouwcamera_index = this.schouwcamera_index + 4;
								this.schouwcameras_voorgericht = nee;
								this.volgende_schouwen = ja;
							},
						},
						SelecteerSchouwlijst: {
							stereotype: "bediening",
							title: "Selecteer schouwlijst",
							description: "Stel de schouwlijst in die gebruikt moet worden tijdens het schouwen. Deze keuze mag niet plaats vinden tijdens het schouwen.",
							ref: "BSTTI#10360",
							comment: "Conditie: #schouwen_aan = nee ; Acties: #huidige_schouwlijst_index:= lijst",
							conditie: function () {
								return this.schouwen_aan == "nee";
							},
							em: function (lijst) {
								this.huidige_schouwlijst_index = lijst;
							},
						},
						VoegFavorietToe: {
							stereotype: "bediening",
							title: "Voeg favoriet toe",
							description: "Voeg een camera en bijbehorende presets toe aan 1 van de favorietenlijsten.",
							ref: "BSTTI#10361",
							comment: "Conditie: #rijrichting = aflopend ; Acties: VoegToeAanSchouwlijst(lijst, pos, camera, preset_mee, preset_tegen) ; Conditie: #rijrichting = oplopend ; Acties: VoegToeAanSchouwlijst(lijst, pos, camera, preset_tegen, preset_mee)",
							conditie: function () {
								return true;
							},
							em: function (lijst, pos, camera, preset_mee, preset_tegen) {
								this.rijrichting = "aflopend" ? this.VoegToeAanSchouwlijst(lijst, pos, camera, preset_mee, preset_tegen) : this.VoegToeAanSchouwlijst(lijst, pos, camera, preset_tegen, preset_mee);
							},
						},
						VerwijderFavoriet: {
							stereotype: "bediening",
							title: "Verwijder favoriet",
							description: "Verwijder een favoriet uit een favorietenlijst. Alle elementen na deze favoriet worden opgeschoven.",
							ref: "BSTTI#16283",
							comment: "Conditie: * ; Acties: VerwijderPositieUitSchouwlijst(lijst, pos)",
							conditie: function () {
								return true;
							},
							em: function (lijst, pos) {
								this.VerwijderPositieUitSchouwlijst(lijst, pos);
							},
						},
						// Besturingen
						SetControleCameraMetPreset: {
							em: function () {

							},
						},
						// Autonome processen
					},
				},
				sf_Kanaal_Verkeersbuis: {
					naam: "Subfunctie Kanaal",
					hoortbij: "Verkeersbuis",
					titel: "Kanaal",
					properties: {
						// Configuratie-elementen
						kanaal_id: {
							stereotype: "configuratie_element",
							title: "",
							description: "Het id dat dit kanaal representeert.",
							ref: "BSTTI#6160",
						},
						sf_default_camera: {
							stereotype: "configuratie_element",
							title: "",
							description: "Camera waaraan dit kanaal aanvankelijk gekoppeld wordt.",
							ref: "BSTTI#15501",
						},
						camera: {
							stereotype: "variabele",
							title: "Camera",
							description: "De huidige camera voor dit kanaal. De allereerste waarde is _sf_default_camera.",
							ref: "BSTTI#15334",
							comment: "",
							initdefaultvalue: this.sf_default_camera,
						},
						camera_id: {
							stereotype: "variabele",
							title: "Camera id",
							description: "De index van de huidige camera voor dit kanaal.",
							ref: "BSTTI#6163",
							comment: "Conditie: * ; Waarde: #camera._camera_id",
							get: function () {
								return this.camera.camera_id; // Kan dit zo?
							},
						},
						status: {
							stereotype: "variabele",
							title: "Status",
							description: "De status van het kanaal geeft aan of het kanaal getoond moet worden op de videowand of niet. De status voorbereiden geeft aan dat het beeld nog niet getoond moet worden, maar wel voorbereid kan worden, omdat het wel getoond gaat worden. De status verbergen betekent niet zozeer dat er geen beeld is, maar wel dat het niet de bedoeling is het kanaal te tonen. De standaard waarde is 'verbergen' voor Alarmkanalen, Calamiteitskanalen en de Schouwkanalen 1 tot en met 4. Voor Schouwkanalen 5 tot en met 8 is de standaard waarde 'voorbereiden'. De overige kanalen hebben 'tonen' als standaard waarde.",
							ref: "BSTTI#17650",
							comment: "",
							enum: { tonen: "Tonen", voorbereiden: "Voorbereiden", verbergen: "Verbergen", geen_beeld: "Geen beeld" },
						},
					},
					operations: {
						SelecteerCamera: {
							stereotype: "bediening",
							title: "Selecteer camera",
							description: "Laat het beeld van de aangegeven camera op dit kanaal zien.",
							ref: "BSTTI#6165",
							comment: "Conditie: camera._lfv_camera.#bestuurbaar = ja ; Acties: OntkoppelCamera() ; #camera:= camera ; #camera._lfv_camera.SelectCameraActueelBeeld(_kanaal_id)",
							conditie: function () {
								return this.lfv_Camera_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function (camera) {
								this.OntkoppelCamera();
								this.camera = camera;
								this.camera.lfv_Camera_Verkeersbuis.SelectCameraActueelBeeld(this.kanaal_id); // Kan dit zo?
							},
						},
						SelecteerCameraMetPreset: {
							stereotype: "bediening",
							title: "Selecteer camera met preset",
							description: "Laat het beeld van de aangegeven camera op dit kanaal zien en stel de camera op de preset in.",
							ref: "BSTTI#15496",
							comment: "Conditie: * ; Acties: camera.SetPresetVoorwaardelijk(preset) ; SelecteerCamera(camera)",
							conditie: function () {
								return true;
							},
							em: function (camera, preset) {
								this.camera.SetPresetVoorwaardelijk(preset);
								this.SelecteerCamera(camera);
							},
						},
					},
				},
				sf_Camera_Verkeersbuis: {
					naam: "Subfunctie Camera",
					hoortbij: "Verkeersbuis",
					titel: "Camera",
					gui: {
						propertyname: 'status',

						construct: function () {
							with (this.elDetail) {
								appendTag("div", { className: "lens" });
							}

						}
					},
					properties: {
						// Configuratie-elementen
						lfv_Camera_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "De component Camera in de LFV CCTV Verkeersbuis.",
							ref: "BSTTI#14091",
						},
						camera_id: {
							stereotype: "configuratie_element",
							title: "",
							description: "De index van deze camera in de lijst van camera's in de CCTV LFV.",
							ref: "BSTTI#6180",
						},
						sf_CameraVoor_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "De instantie van een andere camera (voor-buur) die op het kanaal _sf_alarm_kanaal_voor gezet moet worden als de huidige camera geselecteerd is voor _sf_alarm_kanaal_midden.",
							ref: "BSTTI#6170",
						},
						sf_CameraNa_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "De instantie van een andere camera (na-buur) die op het kanaal _sf_alarm_kanaal_na gezet moet worden als de huidige camera geselecteerd is voor _sf_alarm_kanaal_midden.",
							ref: "BSTTI#6171",
						},
						sf_Voorkeurskanaal_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "Het kritische kanaal, waarop deze camera vertoond dient te worden als hij getoond moet worden, maar niet op het controlebeeld hoeft. Voor camera's in het gesloten deel is dit _sf_gesloten_kanaal_voor, _sf_gesloten_kanaal_midden of _sf_gesloten_kanaal_na. Voor camera's bij de inrit Verkeerslichten is dit _sf_inrit_gebied1_kanaal, voor camera's bij de inrit afsluitbomen is dit _sf_inrit_gebied2_kanaal. Voor camera's in het uitrit gebied is dit _sf_uitrit_gebied_kanaal. De aanduidingen moeten gezien worden ten opzichte van de ontwerprijrichting van de verkeersbuis.",
							ref: "BSTTI#15333",
						},
						preset: { // LETOP: ARRAY!!!!
							stereotype: "configuratie_element",
							title: "",
							description: "De presets voor deze camera waarin zij in de richting van respectievelijk aflopende en oplopende hectometrering kijkt (volgens [BPS]). De camera moet aanvankelijk geïnitialiseerd worden op de preset die met de ontwerprijrichting van de verkeersbuis mee kijkt. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#6183",
						},
						// Variabelen
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Beschikbaarheid van deze camera.",
							ref: "BSTTI#16136",
							comment: "Conditie: _lfv_camera.#observeerbaar = nee ; Waarde: niet_beschikbaar ; Conditie: _lfv_camera.#bestuurbaar = ja && _lfv_camera.#storingen = {} ; Waarde: beschikbaar ; Conditie: overige situaties ; Waarde: beperkt_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () {
								return this.lfv_Camera_Verkeersbuis.observeerbaar == "nee" ? "niet_beschikbaar" : this.lfv_Camera_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Camera_Verkeersbuis.storingen == "" ? "beschikbaar" : "beperkt_beschikbaar";
							},
						},
						status: {
							stereotype: "variabele",
							title: "Status",
							description: "De status van de CCTV camera.",
							ref: "BSTTI#6173",
							comment: "Conditie: _lfv_camera.#bestuurbaar = Ja && _lfv_camera.#kanalen = Leeg; Waarde: niet_geselecteerd ; Conditie: _lfv_camera.#bestuurbaar = ja && _lfv_camera.#kanalen <> Leeg && #huidige_preset = Leeg ; Waarde: geselecteerd_hand ; Conditie: _lfv_camera.#bestuurbaar = ja && _lfv_camera.#kanalen <> Leeg && #huidige_preset <> Leeg ; Waarde: geselecteerd_auto ; Conditie: _lfv_camera.#bestuurbaar = nee ; Waarde: uit",
							enum: { niet_geselecteerd: "Niet geselecteerd", geselecteerd_hand: "Hand geselecteerd", geselecteerd_auto: "Auto geselecteerd", uit: "Uit" },
							get: function () {
								return this.lfv_Camera_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Camera_Verkeersbuis.kanalen == "" ? "niet_geselecteerd" : this.lfv_Camera_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Camera_Verkeersbuis.kanalen != "" && this.huidige_preset == "" ? "geselecteerd_hand" : this.lfv_Camera_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Camera_Verkeersbuis.kanalen != "" && this.huidige_preset != "" ? "geselecteerd_auto" : "uit";
							},
						},
						pan_stand: {
							stereotype: "variabele",
							title: "Pan stand",
							description: "De huidige pan stand voor deze camera.",
							ref: "BSTTI#6174",
							comment: "Conditie: _lfv_camera.#observeerbaar = ja ; Waarde: _lfv_camera.#pan_stand",
							// CHECK no else?
							get: function () {
								return this.lfv_Camera_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Camera_Verkeersbuis.pan_stand : "";
							},
						},
						tilt_stand: {
							stereotype: "variabele",
							title: "Tilt stand",
							description: "De huidige tilt stand voor deze camera.",
							ref: "BSTTI#6175",
							comment: "Conditie: _lfv_camera.#observeerbaar = ja ; Waarde: _lfv_camera.#tilt_stand",
							// CHECK no else?
							get: function () {
								return this.lfv_Camera_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Camera_Verkeersbuis.tilt_stand : "";
							},
						},
						zoom_stand: {
							stereotype: "variabele",
							title: "Zoom stand",
							description: "De huidige zoom stand voor deze camera.",
							ref: "BSTTI#6176",
							comment: "Conditie: _lfv_camera.#observeerbaar = ja ; Waarde: _lfv_camera.#zoom_stand",
							// CHECK no else?
							get: function () {
								return this.lfv_Camera_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Camera_Verkeersbuis.zoom_stand : "";
							},
						},
						focus_stand: {
							stereotype: "variabele",
							title: "Focus stand",
							description: "Naast de gewone focus standen kan met een gereserveerde waarde AUTOFOCUS uit het bereik de stand autofocus weergegeven worden.",
							ref: "BSTTI#6177",
							comment: "Conditie: _lfv_camera.#observeerbaar = ja ; Waarde: _lfv_camera.#focus_stand",
							// CHECK no else?
							get: function () {
								return this.lfv_Camera_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Camera_Verkeersbuis.focus_stand : "";
							},
						},
						diafragma_stand: {
							stereotype: "variabele",
							title: "Diafragma stand",
							description: "Naast de gewone diafragma standen kan met een gereserveerde waarde AUTODIAFRAGMA uit het bereik de stand autodiafragma weergegeven worden.",
							ref: "BSTTI#6178",
							comment: "Conditie: _lfv_camera.#observeerbaar = ja ; Waarde: _lfv_camera.#diafragma_stand",
							// CHECK no else?
							get: function () {
								return this.lfv_Camera_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Camera_Verkeersbuis.diafragma_stand : "";
							},
						},
						preset: {
							stereotype: "variabele",
							title: "Presets",
							description: "De lijst met presets voor deze camera.",
							ref: "BSTTI#6185",
							comment: "Conditie: _lfv_camera.#observeerbaar = ja ; Waarde: _lfv_camera.#preset",
							// CHECK no else?
							get: function () {
								return this.lfv_Camera_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Camera_Verkeersbuis.preset : "";
							},
						},
						kanalen: {
							stereotype: "variabele",
							title: "Kanalen",
							description: "De lijst van CCTV kanalen waarop deze camera zichtbaar is.",
							ref: "BSTTI#16832",
							comment: "Conditie: _lfv_camera.#observeerbaar = ja ; Waarde: _lfv_camera.#kanalen",
							// CHECK no else?
							get: function () {
								return this.lfv_Camera_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Camera_Verkeersbuis.kanalen : "";
							},
						},
						huidige_preset: {
							stereotype: "variabele",
							title: "Huidige preset",
							description: "De op dit moment ingestelde preset. Als de stand is veranderd met de PTZ joystick, dan is deze variabele leeg.",
							ref: "BSTTI#10447",
							comment: "",
							initdefaultvalue: "",
						},
						richting: {
							stereotype: "variabele",
							title: "Richting",
							description: "De richting van de CCTV camera.",
							ref: "BSTTI#16704",
							comment: "Conditie: _lfv_camera.#observeerbaar = ja && _lfv_camera.#identificatiecode_weergave = normaal ; Waarde: mee Conditie: _lfv_camera.#observeerbaar = ja && _lfv_camera.#identificatiecode_weergave = inverse ; Waarde: tegen; ",
							enum: { mee: "Mee", tegen: "Tegen" },
							get: function () {
								return this.lfv_Camera_Verkeersbuis.observeerbaar == "ja" && this.lfv_Camera_Verkeersbuis.identificatiecode_weergave == "normaal" ? "mee" : this.lfv_Camera_Verkeersbuis.observeerbaar == "ja" && this.lfv_Camera_Verkeersbuis.identificatiecode_weergave == "inverse" ? "tegen" : "";
							},
						},
						geblokkeerd: {
							stereotype: "variabele",
							title: "Geblokkeerd",
							description: "Als een camera geblokkeerd is mogen de pan, tilt, zoom, focus en diafragma instellingen enkel veranderd worden vanuit de bediening.",
							ref: "BSTTI#16772",
							comment: "",
							initdefaultvalue: "nee",
						},
					},
					operations: {
						// Bedieningen
						SetPresetOnvoorwaardelijk: {
							stereotype: "bediening",
							title: "Set preset onvoorwaardelijk",
							description: "Draai de camera naar 1 van de voorgedefinieerde presets, ongeacht de waarde van #geblokkeerd. Dit is enkel bedoeld om gebruikt te worden als direct gevolg van een handmatige bediening.",
							ref: "BSTTI#6187",
							comment: "Conditie: _lfv_camera.#bestuurbaar = ja ; Acties: _lfv_camera.SetToPreset(preset) ; #huidige_preset:= preset",
							conditie: function () {
								return this.lfv_Camera_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function (preset) {
								this.lfv_Camera_Verkeersbuis.SetToPreset(preset);
								this.huidige_preset = preset;
							},
						},
						StelPresetIn: {
							stereotype: "bediening",
							title: "Stel preset in",
							description: "Instellen camera presets",
							ref: "BSTTI#6188",
							comment: "Conditie: _lfv_camera.#bestuurbaar = ja ; Acties: _lfv_camera.DefinieerPreset(preset, pan, tilt, zoom, focus, diafragma)",
							conditie: function () {
								return this.lfv_Camera_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function (preset, pan, tilt, zoom, focus, diafragma) {
								this.lfv_Camera_Verkeersbuis.DefinieerPreset(preset, pan, tilt, zoom, focus, diafragma);
							},
						},
						SetGeblokkeerd: {
							stereotype: "bediening",
							title: "Set geblokkeerd",
							description: "Als een camera geblokkeerd is mogen de pan, tilt, zoom, focus en diafragma instellingen enkel veranderd worden vanuit de bediening.",
							ref: "BSTTI#16771",
							comment: "Conditie: * ; Acties: #geblokkeerd:= waarde",
							conditie: function () {
								return true;
							},
							em: function (waarde) {
								this.geblokkeerd = waarde;
							},
						},
					},
				},
				sf_Opslagsysteem_Verkeersbuis: {
					naam: "Subfunctie Beeldregistratiesysteem",
					hoortbij: "Verkeersbuis",
					titel: "Beeldregistratiesysteem",
					properties: {
						// Configuratie-elementen
						lfv_Opslagsysteem_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "De component Opslag in de LFV CCTV Verkeersbuis voor deze verkeersbuis.",
							ref: "BSTTI#6199",
						},
						periode_voor_incident: {
							stereotype: "configuratie_element",
							title: "",
							description: "De tijd in minuten voorafgaand aan een incident die moet worden opgeslagen. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#6213",
						},
						// Variabelen
						status: {
							stereotype: "variabele",
							title: "Status",
							description: "De status van het beeldregistratiesysteem.",
							ref: "BSTTI#6215",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = Ja && _lfv_opslag.#storingen = Leeg; Waarde: actief ; Conditie: _lfv_opslag.#bestuurbaar = Ja && _lfv_opslag.#storingen <> Leeg ; Waarde: beperkt_beschikbaar ; Conditie: _lfv_opslag.#bestuurbaar = Nee ; Waarde: niet_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", actief: "Actief" },
							get: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Opslagsysteem_Verkeersbuis.storingen == "" ? "actief" : this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Opslagsysteem_Verkeersbuis.storingen != "" ? "beperkt_beschikbaar" : "niet_beschikbaar";
							},
						},
						permanent_opslaan: {
							stereotype: "variabele",
							title: "Permanent opslaan",
							description: "Variabele die, bijvoorbeeld t.b.v. de MMI, aangeeft of er momenteel permanente opslag plaatsvindt.",
							ref: "BSTTI#16298",
							comment: "Conditie: _lfv_opslag.#observeerbaar = ja ; Waarde: _lfv_opslag.#permanent_opslaan",
							enum: { gestart: "Gestart", gestopt: "Gestopt" },
							get: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Opslagsysteem_Verkeersbuis.permanent_opslaan : "";
							},
						},
						permanente_opslag_sessie: {
							stereotype: "variabele",
							title: "Permanente opslag sessie",
							description: "Elk element in de lijst bevat een permanente opslag sessie. Alle subvelden van de LFV sessie zijn via deze variabele beschikbaar, maar niet de videobeelden.Zie BSTTI#2812.",
							ref: "BSTTI#6216",
							comment: "Conditie: _lfv_opslag.#observeerbaar = ja ; Waarde: _lfv_opslag.#opgeslagen_sessie",
							type: "array",
							get: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Opslagsysteem_Verkeersbuis.opgeslagen_sessie : "";
							},
						},
						cots_bestemming: {
							stereotype: "variabele",
							title: "COTS bestemming",
							description: "COTS (Common Of The Shelf) medium dat gekoppeld is aan het opslagsysteem.",
							ref: "BSTTI#8477",
							comment: "Conditie: _lfv_opslag.#observeerbaar = ja && _lfv_opslag.#cots_medium <> {} ; Waarde: _lfv_opslag.#cots_medium[1]; Conditie: _lfv_opslag.#observeerbaar = ja && _lfv_opslag.#cots_medium = {} ; Waarde: leeg",
							get: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.observeerbaar == "ja" && this.lfv_Opslagsysteem_Verkeersbuis.cots_medium != "" ? this.lfv_Opslagsysteem_Verkeersbuis.cots_medium[1] : "leeg";
							},
						},
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van het opslagsysteem aan.",
							ref: "BSTTI#16260",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = nee ; Waarde: niet_beschikbaar ; Conditie: _lfv_opslag.#bestuurbaar = ja && _lfv_opslag.#storingen = {} ; Waarde: beschikbaar ; Conditie: overige situaties ; Waarde: beperkt_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "nee" ? "niet_beschikbaar" : this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Opslagsysteem_Verkeersbuis.storingen == "" ? "beschikbaar" : "beperkt_beschikbaar";
							},
						},
						afspeelsnelheid: {
							stereotype: "variabele",
							title: "Afspeelsnelheid",
							description: "Geeft de afspeelsnelheid van het opslagsysteem aan.",
							ref: "BSTTI#16354",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = nee ; Waarde: niet_beschikbaar ; Conditie: _lfv_opslag.#bestuurbaar = ja && _lfv_opslag.#storingen = {} ; Waarde: beschikbaar ; Conditie: overige situaties ; Waarde: beperkt_beschikbaar",
							get: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Opslagsysteem_Verkeersbuis.afspeelsnelheid : "";
							},
						},
					},
					operations: {
						StartPermanenteOpslag: {
							stereotype: "bediening",
							title: "Start permanente opslag",
							description: "Start een sessie voor permanente opslag.",
							ref: "BSTTI#6218",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja ; Acties: _lfv_opslag.StartPermanenteOpslag(huidige_tijd - _periode_voor_incident)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Opslagsysteem_Verkeersbuis.StartPermanenteOpslag(huidige_tijd - this.periode_voor_incident);
							},
						},
						StopPermanenteOpslag: {
							stereotype: "bediening",
							title: "Stop permanente opslag",
							description: "Stop het opslaan van camerabeelden in permanente opslag.",
							ref: "BSTTI#6219",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja ; Acties: _lfv_opslag.StopPermanenteOpslag(huidige_tijd)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Opslagsysteem_Verkeersbuis.StopPermanenteOpslag(huidige_tijd);
							},
						},
						WisOpslagSessie: {
							stereotype: "bediening",
							title: "Wis opslag sessie",
							description: "Wissen opgenomen camerabeelden.",
							ref: "BSTTI#6220",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja &&  #permanente_opslag_sessie[i].id = id ; Acties: _lfv_opslag.WisPermanenteOpslagSessie(id)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja"; // && this.permanente_opslag_sessie[i].id == id;
							},
							em: function (id) {
								this.lfv_Opslagsysteem_Verkeersbuis.WisPermanenteOpslagSessie(id);
							},
						},
						KopieerNaarCotsMedium: {
							stereotype: "bediening",
							title: "Kopieer naar COTS medium",
							description: "Maak een kopie van de aangegeven permanent opgeslagen sessie naar het aangekoppelde COTS medium.",
							ref: "BSTTI#6221",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja &&  #cots_bestemming<> leeg ; Acties: _lfv_opslag.KopieerPermanenteOpslagBeeld(sessie_index, #cots_bestemming)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja" && this.cots_medium != "";
							},
							em: function (sessie_index) {
								this.lfv_Opslagsysteem_Verkeersbuis.KopieerPermanenteOpslagBeeld(sessie_index, this.cots_bestemming);
							},
						},
						SetSessieOmschrijving: {
							stereotype: "bediening",
							title: "Set sessie omschrijving",
							description: "Verandert de omschrijving van een sessie.",
							ref: "BSTTI#16286",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja && #permanente_opslag_sessie[i].id = id ; Acties: _lfv_opslag.SetSessieOmschrijving(id, tekst)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja"; // && this.permanente_opslag_sessie[i].id == id;
							},
							em: function (id, tekst) {
								this.lfv_Opslagsysteem_Verkeersbuis.SetSessieOmschrijving(id, tekst);
							},
						},
					},
				},
				sf_OpgenomenCameraKanaal_Verkeersbuis: {
					naam: "Subfunctie OpgenomenCameraKanaal",
					hoortbij: "Verkeersbuis",
					titel: "Opgenomen camera kanaal",
					properties: {
						// Configuratie-elementen
						lfv_Opslagsysteem_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "De component Opslag in de LFV CCTV Verkeersbuis voor deze verkeersbuis.",
							ref: "BSTTI#14092",
						},
						sf_Kanaal_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "",
							description: "De subfunctie kanaal waarop de opgenomen beelden vertoond moeten worden. Dit is normaal gesproken het _sf_controlekanaal van de basisfunctie CCTV. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#6200",
						},
						// Variabelen
						opgenomen_camera_id: {
							stereotype: "variabele",
							title: "Opgenomen camera id",
							description: "De _camera_id van de camera waarvan de opgenomen beelden worden vertoond op dit kanaal.",
							ref: "BSTTI#6202",
							comment: "",
							initdefaultvalue: "",
						},
						opgenomen_tijdstip: {
							stereotype: "variabele",
							title: "Opgenomen tijdstip",
							description: "Het tijdsmoment waarop de op dit kanaal getoonde beelden oorspronkelijk opgenomen zijn. Als er geen opgenomen beelden getoond worden, dan is de waarde van deze variabele leeg.",
							ref: "BSTTI#16311",
							comment: "Conditie: _lfv_opslag.#observeerbaar = ja ; Waarde: _lfv_opslag.#opgenomen_tijdstip[_sf_kanaal._kanaal_id]",
							get: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Opslagsysteem_Verkeersbuis.opgenomen_tijdstip[this.sf_kanaal.kanaal_id] : "";
							},
						},
					},
					operations: {
						// Bedieningen
						SelecteerOpgenomenCamera: {
							stereotype: "bediening",
							title: "Selecteer opgenomen camera",
							description: "Laat het opgenomen beeld van de aangegeven camera op dit kanaal zien te beginnen vanaf de aangegeven tijd.",
							ref: "BSTTI#6204",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja ; Acties: _sf_kanaal.OntkoppelCamera() ; _lfv_opslag.UnselectCameraOpslagBeeld(#opgenomen_camera_id,_sf_kanaal._kanaal_id) ; #opgenomen_camera_id:= camera._camera_id ; _lfv_opslag.SelectCameraPermanenteOpslagBeeld(#opgenomen_camera_id, _sf_kanaal._kanaal_id, tijd)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function (camera, tijd) {
								this.sf_kanaal.OntkoppelCamera();
								this.lfv_Opslagsysteem_Verkeersbuis.UnselectCameraOpslagBeeld(this.opgenomen_camera_id, this.sf_kanaal.kanaal_id);
								this.opgenomen_camera_id = camera.camera_id;
								this.lfv_Opslagsysteem_Verkeersbuis.SelectCameraPermanenteOpslagBeeld(this.opgenomen_camera_id, this.sf_kanaal.kanaal_id, tijd);
							},
						},
						OntkoppelOpgenomenCamera: {
							stereotype: "bediening",
							title: "Ontkoppel opgenomen camera",
							description: "Geeft dit kanaal weer vrij voor actueel beeld.",
							ref: "BSTTI#16016",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja ; Acties: _lfv_opslag.UnselectCameraOpslagBeeld(#opgenomen_camera_id, _sf_kanaal._kanaal_id) ; _sf_kanaal.SelecteerCamera(_sf_kanaal.#camera) ; #opgenomen_camera_id:= leeg",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Opslagsysteem_Verkeersbuis.UnselectCameraOpslagBeeld(this.opgenomen_camera_id, this.sf_kanaal.kanaal_id);
								this.sf_kanaal.SelecteerCamera(this.sf_kanaal.camera);
								this.opgenomen_camera_id = "";
							},
						},
						Pauze: {
							stereotype: "bediening",
							title: "Pauze",
							description: "Pauzeer het afspelen van opgenomen beelden van deze camera.",
							ref: "BSTTI#6205",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja ; Acties: _lfv_opslag.Pauze(#opgenomen_camera_id, _sf_kanaal._kanaal_id)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Opslagsysteem_Verkeersbuis.Pauze(this.opgenomen_camera_id, this.sf_kanaal.kanaal_id);
							},
						},
						Play: {
							stereotype: "bediening",
							title: "Play",
							description: "Start het afspelen van opgenomen beelden van deze camera.",
							ref: "BSTTI#6206",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja ; Acties: _lfv_opslag.Play(#opgenomen_camera_id, _sf_kanaal._kanaal_id)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Opslagsysteem_Verkeersbuis.Play(this.opgenomen_camera_id, this.sf_kanaal.kanaal_id);
							},
						},
						FastForward: {
							stereotype: "bediening",
							title: "Fastforward",
							description: "Start het versneld vooruit afspelen van opgenomen beelden van deze camera.",
							ref: "BSTTI#6207",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja && snelheid > 0 ; Acties: _lfv_opslag.FastForward(#opgenomen_camera_id, _sf_kanaal._kanaal_id, snelheid)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function (snelheid) {
								snelheid >= 0 ? this.lfv_Opslagsysteem_Verkeersbuis.FastForward(this.opgenomen_camera_id, this.sf_kanaal.kanaal_id, snelheid) : "";
							},
						},
						FastReverse: {
							stereotype: "bediening",
							title: "Fastreverse",
							description: "Start het versneld achteruit afspelen van opgenomen beelden van deze camera.",
							ref: "BSTTI#6208",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja && snelheid > 0 ; Acties: _lfv_opslag.FastBackward(#opgenomen_camera_id, _sf_kanaal._kanaal_id, snelheid)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function (snelheid) {
								snelheid >= 0 ? this.lfv_Opslagsysteem_Verkeersbuis.FastReverse(this.opgenomen_camera_id, this.sf_kanaal.kanaal_id, snelheid) : "";
							},
						},
						Jump: {
							stereotype: "bediening",
							title: "Jump",
							description: "Spring naar het aangegeven tijdstip.",
							ref: "BSTTI#6209",
							comment: "Conditie: _lfv_opslag.#bestuurbaar = ja ; Acties: _lfv_opslag.SelectCameraPermanenteOpslagBeeld(#opgenomen_camera_id, _sf_kanaal._kanaal_id, tijd)",
							conditie: function () {
								return this.lfv_Opslagsysteem_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function (tijd) {
								this.lfv_Opslagsysteem_Verkeersbuis.SelectCameraPermanenteOpslagBeeld(this.opgenomen_camera_id, this.sf_kanaal.kanaal_id, tijd);
							},
						},
					},
				},
				// Noodtelefoon verkeersbuis
				bf_Noodtelefoon_Verkeersbuis: {
					naam: "Basisfunctie Noodtelefoon Verkeersbuis",
					hoortbij: "Verkeersbuis",
					titel: "Noodtelefoon",
					properties: {
						// Configuratie-elementen
						lfv_Noodtelefoon_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Noodtelefoon",
							description: "De LFV Noodtelefoon Verkeersbuis voor deze noodtelefoon.",
							ref: "BSTTI#6613",
							type: "selectitem",
							class: "",
						},
						lfv_Toestel_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Toestel",
							description: "De lijst van instanties van de component Noodtelefoontoestel binnen de LFV Noodtelefoon Verkeersbuis. Deze lijst is zodanig geordend dat opeenvolgende toestellen in de lijst overeenkomen met toestellen van opeenvolgende hulpposten in de verkeersbuis.",
							ref: "BSTTI#14926",
							type: "selectitem",
							class: "",
							initdefaultvalue: [],
						},
						sf_Toestel_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Toestel",
							description: "De lijst van instanties van de subfunctie Noodtelefoontoestel binnen de basisfunctie Noodtelefoon Verkeersbuis. De ordening van deze lijst dient identiek te zijn aan die van _lfv_toestel[].",
							ref: "BSTTI#9108",
							type: "selectitem",
							class: "",
							initdefaultvalue: [],
						},

						// Variabelen
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van de functie aan, gebaseerd op de status van de noodtelefoontoestel.",
							ref: "BSTTI#6615",
							comment: "Conditie: *Waarde:IF _lfv_noodtelefoon.#bestuurbaar = nee || _sf_toestel[].#status = ( niet_beschikbaar | disabled) || !Alarm_NoodtelefoonTweeOpeenvolgendetoestelFalen.#conditiewaarde = ja;THEN;#beschikbaarheid := niet_beschikbaa;ELSIF _lfv_noodtelefoon.#storingen = {} && _sf_toestel[].#status = ( uit | gesprek | wacht | aanvraag ) && #wachtrij_overvol = nee THEN;#beschikbaarheid := beschikbaar;ELSE;#beschikbaarheid := beperkt_beschikbaar;END_IF",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () {
								return this.lfv_Noodtelefoon_Verkeersbuis.bestuurbaar == "nee" || checkAll(this.sf_Toestel_Verkeersbuis, "status", "niet_beschikbaar") || checkAll(this.sf_Toestel_Verkeersbuis, "status", "disabled") || (Alarm_NoodtelefoonTweeOpeenvolgendetoestelFalen == "ja") ? "niet_beschikbaar" : this.lfv_Noodtelefoon_Verkeersbuis.storingen.includes("") && checkAll(this.sf_Toestel_Verkeersbuis, "status", ("uit" || "gesprek" || "wacht" || "aanvraag")) && this.lfv_Noodtelefoon_Verkeersbuis.wachtrij_overvol == "nee" ? "beschikbaar" : "beperkt_beschikbaar";
							},
						},
						actieve_toestel: {
							stereotype: "variabele",
							title: "Actieve toestel",
							description: "Geeft de index binnen _sf_toestel[] van het toestel dat in gesprek is.",
							ref: "BSTTI#9998",
							comment: "_sf_toestel[i].#status = gesprek;Waarde: i",
							enum: "",
							get: function () {
								// return this.sf_Toestel_Verkeersbuis.includes("").status == "gesprek"? ;
								// CHECK:  waarde bepaling
								//return checkOne(this.sf_Toestel_Verkeersbuis, "status","gesprek")? this.sf_Toestel_Verkeersbuis:"" ;
								return this.sf_Toestel_Verkeersbuis[i].status == "gesprek" ? "i" : "";
							},
						},
						wachtrij_overvol: {
							stereotype: "variabele",
							title: "wachtrij overvol",
							description: "",
							ref: "BSTTI#15687",
							comment: "_lfv_noodtelefoon.#observeerbaar = ja;Waarde: _lfv_noodtelefoon.#wachtrij_overvol",
							enum: "",
							get: function () {
								// return this.lfv_Noodtelefoon_Verkeersbuis.observeerbaar == "ja"? this.lfv_Noodtelefoon_Verkeersbuis.wachtrij_overvol;
								//return this.lfv_Noodtelefoon_Verkeersbuis.observeerbaar == "ja"? this.lfv_Noodtelefoon_Verkeersbuis.wachtrij_overvol :"" ;
								return this.lfv_Noodtelefoon_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Noodtelefoon_Verkeersbuis.wachtrij_overvol : "";
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_Noodtelefoon_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Noodtelefoon_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_Noodtelefoon_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_Noodtelefoon_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						BeschikbaarheidNoodtelefoonInstallatie: {
							title: "Beschikbaarheid noodtelefoon installatie",
							description: "Signaleer de beschikbaarheidsstatus van de noodtelefooninstallatie.",
							ref: "BSTTI#10001",
							comment: "",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return this.BeschikbaarheidNoodtelefoonInstallatie;
							},
						},
						Alarm_NoodtelefoonTweeOpeenvolgendetoestelFalen: {
							title: "Alarm noodtelefoon twee opeenvolgende toestel falen",
							description: "Twee noodtelefoontoestellen in twee opeenvolgende hulpposten in de verkeersbuis falen.",
							ref: "BSTTI#10002",
							comment: "Conditie:( _sf_toestel[j].#beschikbaarheid = niet_beschikbaar &&	_sf_toestel[k].#beschikbaarheid = niet_beschikbaar) && (k = j + 1)",
							type: "deelsysteem_alarm",
							enum: { ja: "Noodtelefoon twee opeenvolgende toestel falen", nee: "" },
							get: function () {
								//CHECK: hoe vertallen we dit naar javascript?
							},
						},
					},
					operations: {
						// Bedieningen
						NeemVerbindingOp: {
							stereotype: "bediening",
							title: "Neem verbinding op",
							description: "Wanneer een verbinding gevraagd wordt door een noodtelefoontoestel (met index k) kan de wegverkeersleider deze opnemen om zo met de gebruiker van de noodtelefoon te kunnen spreken.",
							ref: "BSTTI#6617",
							comment: "Conditie: _lfv_noodtelefoon.#bestuurbaar = ja && ( (_sf_toestel[k].#status = aanvraag && #wachtrij_overvol = nee) || _sf_toestel[k].#status = wacht);Acties: _lfv_noodtelefoon.BeginGesprek(k)",
							conditie: function () {
								//return this.lfv_Noodtelefoon_Verkeersbuis.bestuurbaar == "ja" && ( checkOne(this.sf_Toestel_Verkeersbuis, "status", "aanvraag") && this.wachtrij_overvol == "nee") || checkOne(this.sf_Toestel_Verkeersbuis, "status","wacht") ;
								return this.lfv_Noodtelefoon_Verkeersbuis.bestuurbaar == "ja" && ((this.sf_Toestel_Verkeersbuis[k].status == "aanvraag" && this.wachtrij_overvol == "nee") || this.sf_Toestel_Verkeersbuis[k].status == "wacht");
							},
							em: function (k) {
								//this.lfv_Noodtelefoon_Verkeersbuis.BeginGesprek(k);//CHECK: klopt dit (index k)
								this.lfv_Noodtelefoon_Verkeersbuis.BeginGesprek(k);
							},
						},
						OnderbreekVerbinding: {
							stereotype: "bediening",
							title: "Onderbreek verbinding",
							description: "Wanneer een verbinding gemaakt is met een noodtelefoontoestel kan de wegverkeersleider deze onderbreken.",
							ref: "BSTTI#6618",
							comment: "Conditie: _lfv_noodtelefoon.#bestuurbaar = ja;Acties: _lfv_noodtelefoon.OnderbreekGesprek().",
							conditie: function () {
								return this.lfv_Noodtelefoon_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Noodtelefoon_Verkeersbuis.OnderbreekGesprek();
							},
						},
						VerbreekVerbinding: {
							stereotype: "bediening",
							title: "Verbreek verbinding",
							description: "Wanneer een verbinding gemaakt is met een noodtelefoontoestel kan de wegverkeersleider deze beëindigen.",
							ref: "BSTTI#6619",
							comment: "Conditie: _lfv_noodtelefoon.#bestuurbaar = ja;Acties: _lfv_noodtelefoon.BeëindigGesprek()",
							conditie: function () {
								return this.lfv_Noodtelefoon_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Noodtelefoon_Verkeersbuis.BeëindigGesprek();
							},
						},
					},
				},
				sf_NoodtelefoonToestel_Verkeersbuis: {
					naam: "Subfunctie Noodtelefoontoestel",
					hoortbij: "Verkeersbuis",
					titel: "Noodtelefoontoestel",
					gui: {},
					properties: {
						// Configuratie-elementen
						lfv_Toestel_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV NoodtelefoonToestel",
							description: "De component Noodtelefoontoestel in de LFV Noodtelefoon Verkeersbuis voor dit toestel.",
							ref: "BSTTI#10257",
							type: "selectitem",
							class: "",
						},
						bf_NoodTelefoon_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Noodtelefoon",
							description: "De basisfunctie Noodtelefoon Verkeersbuis voor deze verkeersbuis.",
							ref: "BSTTI#15685",
							type: "selectitem",
							class: "",
						},
						sf_camera_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Camera's",
							description: "De camera die het noodtelefoontoestel van de noodtelefooninstallatie in beeld kan brengen.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#9112",
							type: "selectitem",
							class: "",
						},
						sf_camera_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Camera's",
							description: "De camera die het noodtelefoontoestel van de noodtelefooninstallatie in beeld kan brengen.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#9112",
							type: "selectitem",
							class: "",
						},
						preset: {
							stereotype: "configuratie_element",
							title: "",
							description: "De preset van de corresponderende camera.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10256",
						},
						// Variabelen
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "De beschikbaarheid van het noodtelefoontoestel.",
							ref: "BSTTI#16333",
							comment: "Conditie: _lfv_toestel.#bestuurbaar = ja && _lfv_toestel.#storingen = {};Waarde: beschikbaar;Conditie: _lfv_toestel.#bestuurbaar = nee ||_lfv_toestel.#storingen[i] = STORING_VERBINDING;Waarde: niet_beschikbaar;Conditie: overige situaties;Waarde: beperkt_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () {
								return this.lfv_Toestel_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Toestel_Verkeersbuis.storingen.includes("") ? "beschikbaar" : this.lfv_Toestel_Verkeersbuis.bestuurbaar == "nee" || this.lfv_Toestel_Verkeersbuis.storingen.includes("STORING_VERBINDING") ? "niet_beschikbaar" : "beperkt_beschikbaar";

							},
						},
						status: {
							stereotype: "variabele",
							title: "Status",
							description: "De status van het noodtelefoontoestel.",
							ref: "BSTTI#9082",
							comment: "Conditie: _lfv_toestel.#observeerbaar = nee &&_lfv_toestel.#reden_niet_bestuurbaar[] <> disabled;Waarde: niet_beschikbaar;Conditie: _lfv_toestel.#reden_niet_bestuurbaar[i] = disabled;Waarde: disabled;Conditie: _lfv_toestel.#observeerbaar = j;Waarde: _lfv_toestel.#stand",
							enum: { niet_beschikbaar: "Niet beschikbaar", disabled: "Disabled", uit: "Uit", gesprek: "Gesprek", wacht: "Wacht", aanvraag: "Aanvraag" },
							get: function () {
								return this.lfv_Toestel_Verkeersbuis.observeerbaar == "nee" && this.lfv_Toestel_Verkeersbuis.reden_niet_bestuurbaar.includes("") != "disabled" ? "niet_beschikbaar" : this.lfv_Toestel_Verkeersbuis.reden_niet_bestuurbaar.includes("disabled") ? "disabled" : this.lfv_Toestel_Verkeersbuis.observeerbaar == "ja" ? "this.lfv_Toestel_Verkeersbuis.stand" : "";

							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.sf_NoodtelefoonToestel_Verkeersbuis.bestuurbaar == "nee" && this.sf_NoodtelefoonToestel_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.sf_NoodtelefoonToestel_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.sf_NoodtelefoonToestel_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						Alarm_DetecteerNoodtelefoonGebruik: {
							title: "Alarm detecteer noodtelefoon gebruik.",
							description: "Als een noodtelefoon gebruikt wordt, wordt dat gesignaleerd via dit alarm.",
							ref: "BSTTI#6622",
							comment: "Conditie: #status = aanvraag",
							type: "verkeerskundig_alarm",
							enum: { ja: "Noodtelefoon ingebruik", nee: "" },
							get: function () {
								return this.lfv_Toestel_Verkeersbuis.status == "aanvraag";
							},
						},
					},
					operations: {
						// Bedieningen
						Enable: {
							stereotype: "bediening",
							title: "Enable",
							description: "Enable het noodtelefoontoestel.",
							ref: "BSTTI#10660",
							comment: "Conditie: *;Acties: _lfv_toestel.SetEnabled(ja)",
							conditie: function () {
								return true;
							},
							em: function () {
								this.lfv_toestel_Verkeersbuis.SetEnabled(ja);
							},
						},
						Disable: {
							stereotype: "bediening",
							title: "Disable",
							description: "Disable het noodtelefoontoestel.",
							ref: "BSTTI#10661",
							comment: "Conditie: *;Acties: _lfv_toestel.SetEnabled(nee).",
							conditie: function () {
								return true;
							},
							em: function () {
								this.lfv_toestel_Verkeersbuis.SetEnabled(nee);
							},
						},
					},
				},
				// Zichthandhaving verkeersbuis
				cf_Zichthandhaving_Verkeersbuis: {
					naam: "Coördinerende functie Zichthandhaving Verkeersbuis",
					hoortbij: "Verkeersbuis",
					titel: "Zichthandhaving",
					properties: {
						// Configuratie-elementen
						bf_Luchtkwaliteitsmeter_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Luchtkwaliteits meter",
							description: "De basisfunctie Luchtkwaliteitsmeting Verkeersbuis.",
							ref: "BSTTI#10146",
							type: "",
							class: "",
						},
						bf_Ventilatie_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Langsventilatie",
							description: "De basisfunctie Verkeersbuis Langsventilatie.",
							ref: "BSTTI#10232",
							type: "",
							class: "",
						},
						zicht_grenswaarde_aan: {
							stereotype: "configuratie_element",
							title: "Aan grenswaarde ",
							description: "De grenswaarde waarbij de ventilatie niet meer ingeschakeld hoeft te zijn. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",//_zicht_grenswaarde_aan = _bf_lkmvb._grenswaarde_verminderd,
							ref: "BSTTI#10233",
							type: "",
							class: "",
						},
						zicht_grenswaarde_uit: {
							stereotype: "configuratie_element",
							title: "UIt grenswaarde ",
							description: "De grenswaarde waarbij de ventilatie ingeschakeld moet worden.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",//_zicht_grenswaarde_uit = 0,004,
							ref: "BSTTI#10234",
							type: "",
							class: "",
						},
						ventilatie_regeling_algoritme: {
							stereotype: "configuratie_element",
							title: "UIt grenswaarde ",
							description: "Het algoritme waarmee de ventilatie geregeld wordt zodat de zichtwaarden binnen de normen blijven.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10235",
							type: "",
							class: "",
						},
					},
					operations: {
						// Besturingen
						// Autonome processen
						BewaakZicht: {
							stereotype: "autonoom_proces",
							title: "Bewaakt zicht",
							description: "Regel het zicht in de verkeersbuis door te ventileren in het geval van slecht zicht.",
							ref: "STTI#8716",
							comment: "Conditie: _bf_lvvb.#beschikbaarheid <> niet_beschikbaar && (_bf_lkmvb.#beschikbaarheid <> niet_beschikbaar) && _bf_lkmvb.#zichtmeting_max > _zicht_grenswaarde_aan; Acties: _bf_lvvb.SetSensorregelingStand(8);Conditie: _bf_lvvb.#beschikbaarheid <> niet_beschikbaar && (_bf_lkmvb.#beschikbaarheid <> niet_beschikbaar) && _bf_lkmvb.#zichtmeting_max < _zicht_grenswaarde_uit;Acties: _bf_lvvb.SetSensorregelingStand(0)",
							js: function () {
								// if (this.bf_lvvb_Verkeersbuis.beschikbaarheid = !"niet_beschikbaar" && this.bf_lkmvb_Verkeersbuis.beschikbaarheid != "niet_beschikbaar" && this.bf_lkmvb_Verkeersbuis.zichtmeting_max < this.zicht_grenswaarde_aan) { this.bf_lvvb_Verkeersbuis.SetSensorregelingStand("8") }
								// if (this.bf_lvvb_Verkeersbuis.beschikbaarheid = !"niet_beschikbaar" && this.bf_lkmvb_Verkeersbuis.beschikbaarheid != "niet_beschikbaar" && this.bf_lkmvb_Verkeersbuis.zichtmeting_max < this.zicht_grenswaarde_uit) { this.bf_lvvb_Verkeersbuis.SetSensorregelingStand("0") }
								if (this.bf_Ventilatie_Verkeersbuis.beschikbaarheid = !"niet_beschikbaar" && this.bf_Luchtkwaliteitsmeter_Verkeersbuis.beschikbaarheid != "niet_beschikbaar" && this.bf_Luchtkwaliteitsmeter_Verkeersbuis.zichtmeting_max > this.zicht_grenswaarde_aan) { this.bf_Ventilatie_Verkeersbuis.SetSensorregelingStand("8") }
								if (this.bf_Ventilatie_Verkeersbuis.beschikbaarheid = !"niet_beschikbaar" && this.bf_Luchtkwaliteitsmeter_Verkeersbuis.beschikbaarheid != "niet_beschikbaar" && this.bf_Luchtkwaliteitsmeter_Verkeersbuis.zichtmeting_max < this.zicht_grenswaarde_uit) { this.bf_Ventilatie_Verkeersbuis.SetSensorregelingStand("0") }
							},
						},
					},
				},
				// Langsventilatie verkeersbuis
				bf_Ventilatie_Verkeersbuis: {
					naam: "Basisfunctie Verkeersbuis Langsventilatie",
					hoortbij: "Verkeersbuis",
					titel: "Ventilatie",
					doc: {
						icon: {
							"Basis Links": {
								img: 'lts/bf_VerkeersbuisLangsventilatie.png',
								attr: {
									sectie: '1', dir: 'links', stand: '1/4'
								}
							},
							"Basis Rechts": {
								attr: {
									sectie: '2', dir: 'rechts', stand: '1/2'
								}
							},
						}
					},
					gui: {
						construct: function () {
							with (this.elDetail) {
								appendTag("span", { className: "symbol" });
							}
						}
					},
					properties: {
						// Configuratie elementen
						lfv_Ventilatie_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Ventilatie",
							description: "De LFV Ventilatie Verkeersbuis voor deze verkeersbuis.",
							ref: "BSTTI#6375",
							type: "selectitem",
							class: "",
						},
						max_transitietijd: {
							stereotype: "configuratie_element",
							title: "Maximum transitie tijd",
							description: "De tijd waarbinnen ventilatie een stand en/of richting verandering moet uitvoeren.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10189",
							type: "number",
							class: "",
						},
						sf_VentilatieCluster_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Ventilatie cluster",
							description: "De instanties van subfunctie Ventilatiecluster voor deze Verkeersbuis Langsventilatie.",
							ref: "BSTTI#15999",
							type: "selectitem",
							class: "",
							value: [],
						},
						// Variabelen
						bedieningswijze: {
							stereotype: "variabele",
							title: "Bedieningswijze",
							description: "Huidige bedieningswijze van Ventilatie (let op, dit zegt niets over ventilatoren).",
							ref: "BSTTI#8532",
							comment: "",
							enum: { hand: "Hand", auto: "Auto" },
							initdefaultvalue: "hand",
							get: function () {

							},
						},
						auto_stand: {
							stereotype: "variabele",
							title: "Automatische stand",
							description: "De stand die de ventilatie moet handhaven als #bedieningswijze = auto.",
							ref: "BSTTI#8533",
							comment: "",
							enum: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", sensorregeling: "Sensorregeling" },
						},
						sensorregeling_stand: {
							stereotype: "variabele",
							title: "Sensorregeling stand",
							description: "De stand die de ventilatie moet handhaven als de sensorregeling actief is.Deze waarde wordt bepaald door de coördinerende functie Zichthandhaving Verkeersbuis.",
							ref: "BSTTI#10242",
							comment: "",
							enum: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8" },
						},
						auto_richting: {
							stereotype: "variabele",
							title: "Automatische richting",
							description: "De richting die de ventilatoren op moeten blazen als #bedieningswijze = auto.",
							ref: "BSTTI#8534",
							comment: "",
							enum: { oplopend: "Oplopend", aflopend: "Aflopend" },
						},
						hand_stand: {
							stereotype: "variabele",
							title: "Hand stand",
							description: "De stand die de ventilatieregeling moet handhaven als #bedieningswijze = hand.",
							ref: "BSTTI#8535",
							comment: "Init: init_patroon(#niveau_percentage<>ongeldig, #niveau_percentage/(12,5%))",
							enum: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", sensorregeling: "Sensorregeling" },
							initdefaultvalue: function () {
								return this.nivea_percentage != "ongeldig" ? this.nivea_percentage / (12, 5) * 100 : ""; //CHECK: klopt dit?
							},
						},
						hand_richting: {
							stereotype: "variabele",
							title: "Hand richting",
							description: "De richting die de ventilatoren op moeten blazen als #bedieningswijze = hand.",
							ref: "BSTTI#8536",
							comment: "Init: init_patroon(#richting <> ongeldig, #richting)",
							enum: { oplopend: "Oplopend", aflopend: "Aflopend" },
							initdefaultvalue: function () {
								return this.richting != "ongeldig" ? this.richting : "";
							},
						},
						transitie_tijdstip: {
							stereotype: "variabele",
							title: "Transitie tijdstip",
							description: "Het tijdstip waarop de huidige transitiestatus-waarde is bereikt.",
							ref: "BSTTI#10899",
							comment: "",
							enum: { tijdstip: "Tijdstip" }, //CHECK: klopt dit?
							initdefaultvalue: "0",
						},
						ingestelde_stand: {
							stereotype: "variabele",
							title: "Ingestelde stand",
							description: "De ingestelde ventilatie stand.",
							ref: "BSTTI#6381",
							comment: "Conditie: #bedieningswijze = hand && #hand_stand <> sensorregeling; Waarde: #hand_stand;Conditie: #bedieningswijze = auto && #auto_stand <> sensorregeling; Waarde: #auto_stand;Conditie: overige situaties;Waarde: #sensorregeling_stand",
							enum: { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8" },
							get: function () {
								return this.bedieningswijze == "hand" && this.hand_stand != "sensorregeling" ? this.hand_stand : this.bedieningswijze == "auto" && this.hand_stand != "sensorregeling" ? this.auto_stand : this.sensorregeling_stand;
							},
						},
						ingestelde_richting: {
							stereotype: "variabele",
							title: "Ingestelde richting",
							description: "De ingestelde ventilatierichting.",
							ref: "BSTTI#16088",
							comment: "Conditie: #bedieningswijze = hand;Waarde: #hand_richting;Conditie: #bedieningswijze = auto;Waarde: #auto_richting.",
							enum: { oplopend: "Oplopend", aflopend: "Aflopend" },
							get: function () {
								return this.bedieningswijze == "hand" ? this.hand_richting : this.bedieningswijze == "auto" ? this.auto_richting : "";
							},
						},
						richting: {
							stereotype: "variabele",
							title: "Richting",
							description: "De werkelijke ventilatierichting.",
							ref: "BSTTI#8537",
							comment: "Conditie: _lfv_ventilatie.#observeerbaar = ja;Waarde: _lfv_ventilatie.#richting.",
							enum: { oplopend: "Oplopend", aflopend: "Aflopend" },
							get: function () {
								return this.lfv_Ventilatie_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilatie_Verkeersbuis.richting : "";

							},
						},
						nivea_percentage: {
							stereotype: "variabele",
							title: "Ventilatie niveau in percentage",
							description: "Ventilatieniveau (percentage). Een lijst met historische waardes van deze variabele kan opgevraagd worden uit de event recorder, zie sectie 13.3.1.",
							ref: "BSTTI#6382",
							comment: "Conditie: _lfv_ventilatie.#observeerbaar = ja;Waarde: _lfv_ventilatie.#niveau",
							enum: {},
							get: function () {
								return this.lfv_Ventilatie_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilatie_Verkeersbuis.niveau : "";
							},
						},
						transitiestatus: {
							stereotype: "variabele",
							title: "Transitie status",
							description: "",
							ref: "BSTTI#8620",
							comment: "Conditie: *;Waarde: transitiestatus_patroon ((-C < #niveau_percentage - #ingestelde_stand * 12,5% < C) && (#richting = #ingestelde_richting) && (_sf_cluster[].#richting = #ingestelde_richting),[#ingestelde_stand, #ingestelde_richting],#transitie_tijdstip,_max_transitietijd)",
							enum: { bereikt: "Bereikt", niet_bereikt: "Niet bereikt", in_transitie: "In transitie" },
							get: function () {
								//CHECK: hoe vertallen we dit naar javascript? ;
							},
						},
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van de functie aan.",
							ref: "BSTTI#8624",
							comment: "",
							enum: { beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", niet_beschikbaar: "Niet beschikbaar" },
							get: function () {
								return this.lfv_Ventilatie_Verkeersbuis.bestuurbaar == "nee" ? "niet_beschikbaar" : this.transitiestatus.niet_bereikt == "ja" ? "niet_beschikbaar" : this.lfv_Ventilatie_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Ventilatie_Verkeersbuis.capaciteit_beschikbaar < 100 + "%" && this.transitiestatus.niet_bereikt == "nee" ? "beperkt_beschikbaar" : this.lfv_Ventilatie_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Ventilatie_Verkeersbuis.capaciteit_beschikbaar > 100 + "%" && this.transitiestatus.niet_bereikt == "nee" ? "beschikbaar" : "";
							},
						},
						energieverbruik: {
							stereotype: "variabele",
							title: "Energieverbruik",
							description: "Energieverbruik per verkeersbuis (kWh). Een lijst met historische waardes van deze variabele kan opgevraagd worden uit de event recorder, zie sectie 13.3.1.",
							ref: "BSTTI#6379",
							comment: "Conditie: _lfv_ventilatie.#observeerbaar = ja;Waarde: _lfv_ventilatie.#energieverbruik",
							enum: {},
							get: function () {
								return this.lfv_Ventilatie_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilatie_Verkeersbuis.energieverbruik : "";
							},
						},
						temperatuur_beveiliging: {
							stereotype: "variabele",
							title: "Temperatuur beveiliging",
							description: "De stand van het al dan niet uitschakelen van ventilatoren met te hoge wikkelingstemperatuur.",
							ref: "BSTTI#16964",
							comment: "Conditie: _lfv_ventilatie.#observeerbaar = ja;Waarde: _lfv_ventilatie.#temperatuur_beveiliging",
							enum: { aan: "Aan", uit: "Uit" },
							get: function () {
								return this.lfv_Ventilatie_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilatie_Verkeersbuis.energieverbruik : "";
							},
						},
						onbalans_beveiliging: {
							stereotype: "variabele",
							title: "Onbalans beveiliging",
							description: "De stand van het al dan niet uitschakelen van ventilatoren die in onbalans zijn.",
							ref: "BSTTI#16965",
							comment: "Conditie: _lfv_ventilatie.#observeerbaar = ja;Waarde: _lfv_ventilatie.#onbalans_beveiliging.",
							enum: { aan: "Aan", uit: "Uit" },
							get: function () {
								return this.lfv_Ventilatie_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilatie_Verkeersbuis.onbalans_beveiliging : "";
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_Ventilatie_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Ventilatie_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_Ventilatie_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_Ventilatie_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						BedieningsStatus: {
							title: "Bediening status.",
							description: "",
							ref: "BSTTI#6395",
							comment: "Status: #bedieningswijze",
							type: "status_melding",
							enum: {},
							get: function () {
								return this.bedieningswijze;
							},
						},
						Beschikbaarheid: {
							title: "Bediening status.",
							description: "",
							ref: "BSTTI#9015",
							comment: "Status: #beschikbaarheid",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return this.beschikbaarheid;
							},
						},
						TransitiestatusVentilatie: {
							title: "Bediening status.",
							description: "",
							ref: "BSTTI#6395",
							comment: "Status: #transitiestatus",
							type: "status_melding",
							enum: {},
							get: function () {
								return this.transitiestatus;
							},
						},
						Alarm_LangsVentilatieBereiktFunctieNiveauNiet: {
							title: "Bediening status.",
							description: "Geeft een alarm als ventilatie niet in staat is op tijd het gevraagde functieniveau te halen.",
							ref: "BSTTI#8621",
							comment: "Conditie: #transitiestatus = niet_bereikt",
							type: "deelsysteem_alarm",
							enum: {},
							get: function () {
								return this.transitiestatus == "niet_bereikt";
							},
						},
					},
					operations: {
						// Bedieningen
						SetOpAutobediening: {
							stereotype: "bediening",
							title: "Setop auto bediening",
							description: "Ventilatie gaat op autobediening en de ventilatiestand en -richting volgen de instellingen voor de autobediening. De instellingen worden gezet op de LFV door het autonome proces *HandhaafInstellingen.",
							ref: "BSTTI#6389",
							comment: "Conditie: *;Acties: #bedieningswijze := auto",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bedieningswijze = auto;
							},
						},
						SetOpHandbediening: {
							stereotype: "bediening",
							title: "Setop hand bediening",
							description: "Ventilatie gaat op handbediening en de ventilatiestand en -richting volgen de instellingen voor de handbediening. De instellingen worden gezet op de LFV door het autonome proces *HandhaafInstellingen.",
							ref: "BSTTI#6388",
							comment: "Conditie: #bedieningswijze = auto;Acties: #hand_stand := #auto_stand;#hand_richting := #auto_richting;#bedieningswijze := hand",
							conditie: function () {
								return this.bedieningswijze == "auto";
							},
							em: function () {
								this.hand_stand = hand_stand;
								this.hand_richting = auto_richting;
								this.bedieningswijze = hand;
							},
						},
						SetHandbedieningsStand: {
							stereotype: "bediening",
							title: "Set hand bedienings stand",
							description: "Stel de stand in die gebruikt moet worden als #bedieningswijze = hand. De instellingen worden gezet op de LFV door het autonome proces *HandhaafInstellingen.",
							ref: "BSTTI#8542",
							comment: "Conditie: *;Acties: #hand_stand := stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.hand_stand = stand;
							},
						},
						SetHandbedieningsRichting: {
							stereotype: "bediening",
							title: "Set hand bedienings richting",
							description: "Stel de richting in die gebruikt moet worden als #bedieningswijze = hand. De instellingen worden gezet op de LFV door het autonome proces *HandhaafInstellingen.",
							ref: "BSTTI#6393",
							comment: "Conditie: *;Acties: #hand_richting := richting",
							conditie: function () {
								return true;
							},
							em: function (richting) {
								this.hand_richting = richting;
							},
						},
						// Autonome processen
						HandhaafInstellingen: {
							stereotype: "autonoom_proces",
							title: "Handhaaf instellingen",
							description: "Zorgt dat de hand of auto instellingen worden gehandhaafd afhankelijk van de status waarin de LFV zich bevindt. Dit autonome proces draagt er ook zorg voor dat bij de overgang van niet bestuurbaarheid naar bestuurbaarheid het juiste gedrag weergegeven wordt.",
							ref: "BSTTI#6052",
							comment: "Conditie: _lfv_ventilatie.#bestuurbaar = ja && #bedieningswijze = auto && #auto_stand <> sensorregeling && #auto_richting <> ongeldig && #auto_stand <> ongeldig;Acties: _lfv_ventilatie.SetRichting(#auto_richting);_lfv_ventilatie.SetStand(#auto_stand);Conditie: _lfv_ventilatie.#bestuurbaar = ja && #bedieningswijze = hand && #hand_stand = sensorregeling && #hand_richting <> ongeldig && #sensorregeling_stand <> ongeldig;Acties: _lfv_ventilatie.SetRichting(#hand_richting);_lfv_ventilatie.SetStand(#sensorregeling_stand);Conditie: _lfv_ventilatie.#bestuurbaar = ja && #bedieningswijze = auto && #auto_stand = sensorregeling && #auto_richting <> ongeldig && #sensorregeling_stand <> ongeldig;Acties: _lfv_ventilatie.SetRichting(#auto_richting);_lfv_ventilatie.SetStand(#sensorregeling_stand);Conditie: _lfv_ventilatie.#bestuurbaar = ja && #bedieningswijze = hand && #hand_stand <> sensorregeling && #hand_richting <> ongeldig && #hand_stand <> ongeldig;Acties: _lfv_ventilatie.SetRichting(#hand_richting);_lfv_ventilatie.SetStand(#hand_stand)",
							js: function () {
								if (this.lfv_ventilatie_Verkeersbuis.bestuurbaar == "ja" && this.bedieningswijze == "auto" && this.auto_stand != "sensorregeling" && this.auto_richting != "ongeldig" && this.auto_stand != "ongeldig") { this.lfv_Ventilatie_Verkeersbuis.SetRichting("auto_richting") } { this.lfv_Ventilatie_Verkeersbuis.SetStand("auto_stand") }
								if (this.lfv_ventilatie_Verkeersbuis.bestuurbaar == "ja" && this.bedieningswijze == "hand" && this.auto_stand != "sensorregeling" && this.hand_richting != "ongeldig" && this.sensorregeling_stand != "ongeldig") { this.lfv_Ventilatie_Verkeersbuis.SetRichting("hand_richting") } { this.lfv_Ventilatie_Verkeersbuis.SetStand("sensorregeling_stand") }
								if (this.lfv_ventilatie_Verkeersbuis.bestuurbaar == "ja" && this.bedieningswijze == "auto" && this.auto_stand == "sensorregeling" && this.auto_richting != "ongeldig" && this.sensorregeling_stand != "ongeldig") { this.lfv_Ventilatie_Verkeersbuis.SetRichting("auto_richting") } { this.lfv_Ventilatie_Verkeersbuis.SetStand("sensorregeling_stand") }
								if (this.lfv_ventilatie_Verkeersbuis.bestuurbaar == "ja" && this.bedieningswijze == "hand" && this._stand != "sensorregeling" && this.hand_richting != "ongeldig" && this.hand_stand != "ongeldig") { this.lfv_Ventilatie_Verkeersbuis.SetRichting("hand_richting") } { this.lfv_Ventilatie_Verkeersbuis.SetStand("hand_stand") }
							},
						},
					},
				},
				sf_VentilatieCluster_Verkeersbuis: {
					naam: "Subfunctie Ventilatiecluster",
					hoortbij: "Verkeersbuis",
					titel: "Ventilatiecluster",
					properties: {
						// Configuratie elementen
						sf_Ventilator_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Ventilatie cluster",
							description: "De subfuncties Ventilator binnen de basisfunctie Verkeersbuis Langsventilatie voor dit cluster. Elk cluster heeft minstens één ventilator en elke ventilator behoort tot precies één ventilatiecluster.",
							ref: "BSTTI#6403",
							type: "selectitem",
							class: "",
							value: [],
						},
						// Variabelen
						cluster_stand: {
							stereotype: "variabele",
							title: "Cluster stand",
							description: "Stand van het ventilator cluster. Een lijst met historische waardes van deze variabele kan opgevraagd worden uit de event recorder, zie sectie 13.3.1. Merk op dat de variabele #richting van ventilatie de richting van alle ventilatoren in de verkeersbuis bepaalt, waardoor het dus ook niet voor kan komen dat ventilatoren binnen een cluster verschillende richtingen hebben.",
							ref: "BSTTI#9013",
							comment: "Conditie: _sf_cluster_ventilator[i].#ventilator_stand = aan;Waarde: aan;Conditie: _sf_cluster_ventilator[].#ventilator_stand = uit;Waarde: uit",
							enum: { aan: "Aan", uit: "Uit" },
							get: function () {
								return checkOne(this.sf_Ventilator_Verkeersbuis, "ventilator_stand", "aan") ? "aan" : checkAll(this.sf_Ventilator_Verkeersbuis, "ventilator_stand", "uit") ? "uit" : "";
							},
						},
						cluster_disabled: {
							stereotype: "variabele",
							title: "Cluster disabled",
							description: "De waarde van #cluster_disabled is 'ja' als alle ventilatoren in het cluster disabled zijn, 'nee' als alle ventilatoren in het cluster enabled zijn, en 'gedeeltelijk' in alle overige gevallen.",
							ref: "BSTTI#16220",
							comment: "Conditie: _sf_cluster_ventilator[].#ventilator_disabled = ja;Waarde: ja;Conditie: _sf_cluster_ventilator[].#ventilator_disabled = nee;Waarde: nee;Conditie: overige situaties;Waarde: gedeeltelijk",
							enum: { ja: "Ja", nee: "Nee", gedeeltelijk: "Gedeeltelijk" },
							get: function () {
								return checkAll(this.sf_Ventilator_Verkeersbuis, "ventilator_disabled", "ja") ? "ja" : checkAll(this.sf_Ventilator_Verkeersbuis, "ventilator_disabled", "nee") ? "nee" : "gedeeltelijk";
							},
						},
						cluster_bedieningswijze: {
							stereotype: "variabele",
							title: "Cluster bedieningswijze",
							description: "De waarde van #cluster_bedieningswijze is 'auto' als alle ventilatoren in het cluster op auto staan, 'hand' als alle ventilatoren in het cluster op hand staan, en 'gedeeltelijk_hand' in alle overige gevallen.",
							ref: "BSTTI#16221",
							comment: "Conditie: _sf_cluster_ventilator[].#ventilator_bedieningswijze = auto;Waarde: auto;Conditie: _sf_cluster_ventilator[].#ventilator_bedieningswijze = hand;Waarde: hand;Conditie: overige situaties;Waarde: gedeeltelijk_hand",
							enum: { auto: "Auto", hand: "Hand", gedeeltelijk_hand: "Gedeeltelijk hand" },
							get: function () {
								return checkAll(this.sf_Ventilator_Verkeersbuis, "ventilator_bedieningswijze", "auto") ? "auto" : checkAll(this.sf_Ventilator_Verkeersbuis, "ventilator_bedieningswijze", "hand") ? "hand" : "gedeeltelijk_hand";
							},
						},
						cluster_plaatselijk_bediend: {
							stereotype: "variabele",
							title: "Cluster plaatselijk bediend",
							description: "De waarde van #cluster_plaatselijk_bediend is 'nee' als geen van de ventilatoren in het cluster plaatselijk bediend is, 'ja' als alle ventilatoren in het cluster plaatselijk bediend zijn, en 'gedeeltelijk' in alle overige gevallen.",
							ref: "BSTTI#16222",
							comment: "Conditie: _sf_cluster_ventilator[].#ventilator_plaatselijk_bediend = nee;Waarde: nee; Conditie: _sf_cluster_ventilator[].#ventilator_plaatselijk_bediend = ja Waarde: ja;Conditie: overige situaties;Waarde: gedeeltelijk",
							enum: { ja: "Ja", nee: "Nee", gedeeltelijk: "Gedeeltelijk" },
							get: function () {
								return checkAll(this.sf_Ventilator_Verkeersbuis, "ventilator_plaatselijk_bediend", "nee") ? "nee" : checkAll(this.sf_Ventilator_Verkeersbuis, "ventilator_plaatselijk_bediend", "ja") ? "ja" : "gedeeltelijk";
							},
						},
						richting: {
							stereotype: "variabele",
							title: "Ventilatie richting",
							description: "De werkelijke ventilatierichting van de ventilatoren in het cluster.",
							ref: "BSTTI#16634",
							comment: "Conditie: _sf_cluster_ventilator[].#richting = aflopend;Waarde: aflopend;Conditie: _sf_cluster_ventilator[].#richting = oplopend;Waarde: oplopend;Conditie: overige situaties;Waarde: onbekend",
							enum: { aflopend: "aflopend", oplopend: "Oplopend", onbekend: "Onbekend" },
							get: function () {
								return checkAll(this.sf_Ventilator_Verkeersbuis, "richting", "aflopend") ? "aflopend" : checkAll(this.sf_Ventilator_Verkeersbuis, "richting", "oplopend") ? "oplopend" : "onbekend";
							},
						},
						aantal_actieve_alarmen: {
							stereotype: "variabele",
							title: "Aantal actieve alarmen",
							description: "Het aantal actieve alarmen. Hierbij is 'n' het totaal aantal (generieke en specifieke, verkeerskundige en deelsysteem-) alarmen van alle ventilatoren in het cluster.",
							ref: "BSTTI#16225",
							comment: "Conditie: *;Waarde:Het aantal (generieke en specifieke, verkeerskundige en deelsysteem-) alarmen van de ventilatoren (in het cluster) dat 'actief' is, d.w.z. waarvoor #conditiewaarde = ja.",
							enum: {},
							initdefaultvalue: "0",
						},
						aantal_actieve_storingen: {
							stereotype: "variabele",
							title: "Aantal actieve alarmen",
							description: "Het aantal actieve storingen. Hierbij is 'n' het totaal aantal (generieke en specifieke) storingen van alle ventilatoren in het cluster.",
							ref: "BSTTI#16227",
							comment: "Conditie: *;Waarde:Het aantal generieke en specifieke storingen van de ventilatoren (in het cluster) dat 'actief' is, d.w.z. waarvoor #conditiewaarde = ja.",
							enum: {},
							initdefaultvalue: "0",
						},
						aantal_onderdrukt: {
							stereotype: "variabele",
							title: "Aantal onderdrukt",
							description: "Het aantal signaleringen van alle ventilatoren (in het cluster) dat onderdrukt is. Hierbij is 'n' het totaal aantal (generieke en specifieke) onderdrukbare signaleringen van alle ventilatoren in het.",
							ref: "BSTTI#16223",
							comment: "Conditie: *;Waarde: Het aantal signaleringen in het cluster waarvoor geldt #onderdrukt = ja.",
							enum: {},
							initdefaultvalue: "0",
						},
						cluster_beschikbaarheid: {
							stereotype: "variabele",
							title: "Cluster beschikbaarheid",
							description: "De waarde van #cluster_beschikbaarheid moet 'beschikbaar' zijn als alle ventilatoren in het cluster beschikbaar zijn, en 'niet_beschikbaar' als alle ventilatoren in het cluster niet_beschikbaar zijn; in alle overige gevallen moet de waarde van #cluster_beschikbaarheid 'beperkt_beschikbaar' zijn.",
							ref: "BSTTI#16230",
							comment: "Conditie: _sf_cluster_ventilator[].#ventilator_beschikbaarheid = beschikbaar;Waarde: beschikbaar;Conditie: _sf_cluster_ventilator[].#ventilator_beschikbaarheid = niet_beschikbaar;Waarde: niet_beschikbaar;Conditie: overige situaties;Waarde: beperkt_beschikbaar",
							enum: { beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", niet_beschikbaar: "Niet beschikbaar" },
							get: function () {
								return checkAll(this.sf_Ventilator_Verkeersbuis, "ventilator_beschikbaarheid", "beschikbaar") ? "beschikbaar" : checkAll(this.sf_Ventilator_Verkeersbuis, "ventilator_beschikbaarheid", "niet_beschikbaar") ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
					},
					operations: {
						// Bedieningen
						SetClusterOpHandbediening: {
							stereotype: "bediening",
							title: "Set cluster op hand bediening",
							description: "De ventilatoren in het cluster gaan op handbediening en de stand volgt de instellingen voor de hand mode voor de ventilator.",
							ref: "BSTTI#8733",
							comment: "Conditie: *;Acties:_ sf_cluster_ventilator[].SetVentilatorOpHandbediening()",
							conditie: function () {
								return true;
							},
							em: function () {
								forAll(this.sf_Ventilator_Verkeersbuis, "SetVentilatorOpHandbediening");
							},
						},
						SetClusterOpAutobediening: {
							stereotype: "bediening",
							title: "Set cluster op auto bediening",
							description: "De ventilatoren in het cluster gaan op autobediening en de stand volgt de instellingen vanuit de BF van ventilatie.",
							ref: "BSTTI#8729",
							comment: "Conditie: *;Acties:_ sf_cluster_ventilator[].SetVentilatorOpAutobediening()",
							conditie: function () {
								return true;
							},
							em: function () {
								forAll(this.sf_Ventilator_Verkeersbuis, "SetVentilatorOpAutobediening");
							},
						},
						SetClusterHandbedieningsStand: {
							stereotype: "bediening",
							title: "Set cluster handbediening stand",
							description: "Zet de handmatige stand van de ventilatoren in het cluster.",
							ref: "BSTTI#8730",
							comment: "Conditie: *;Acties:_sf_cluster_ventilator[].SetVentilatorHandbedieningsStand( stand )",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								forAll(this.sf_Ventilator_Verkeersbuis, "SetVentilatorHandbedieningsStand", "Stand");//CHECK: klopt dit constructie?
							},
						},
						ClusterEnable: {
							stereotype: "bediening",
							title: "Cluster enable",
							description: "Enable het ventilatorcluster.Groepscommando dat alle ventilatoren in het cluster enabled.",
							ref: "BSTTI#6410",
							comment: "Conditie: *;Acties: _sf_cluster_ventilator[].VentilatorEnable()",
							conditie: function () {
								return true;
							},
							em: function () {
								forAll(this.sf_Ventilator_Verkeersbuis, "VentilatorEnable")
							},
						},
						ClusterDisable: {
							stereotype: "bediening",
							title: "Cluster disable",
							description: "Disable het ventilatiecluster.Groepscommando dat alle ventilatoren in het cluster disabled.",
							ref: "BSTTI#6411",
							comment: "Conditie: *;Acties: _sf_cluster_ventilator[].VentilatorDisable()",
							conditie: function () {
								return true;
							},
							em: function () {
								forAll(this.sf_Ventilator_Verkeersbuis, "VentilatorDisable");
							},
						},

					},
				},

				sf_Ventilator_Verkeersbuis: {
					naam: "Subfunctie Ventilator",
					hoortbij: "Verkeersbuis",
					titel: "Ventilator",
					properties: {
						// Configuratie elementen
						lfv_Ventilator_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Ventilator",
							description: "De component Ventilator van de LFV Ventilatie Verkeersbuis voor deze ventilator.",
							ref: "BSTTI#6416",
							type: "selectitem",
							class: "",
						},
						// Variabelen
						ventilator_bedieningswijze: {
							stereotype: "variabele",
							title: "Ventilator bedieningswijze",
							description: "De huidige bedieningswijze van de ventilator.",
							ref: "BSTTI#8600",
							comment: "",
							enum: { hand: "Hand", auto: "Auto" },
							initdefaultvalue: "hand",
						},
						ventilator_hand_stand: {
							stereotype: "variabele",
							title: "Ventilator bedieningswijze",
							description: "De stand die de ventilatieregeling moet handhaven als #bedieningswijze = hand.",
							ref: "BSTTI#8603",
							comment: "Init: init_patroon(#ventilator_stand <> ongeldig, #ventilator_stand)",
							enum: { aan: "Aan", uit: "Uit" },
							initdefaultvalue: function () {
								return this.ventilator_stand != "ongeldig" ? this.ventilator_stand : "";
							},
						},
						ventilator_plaatselijk_bediend: {
							stereotype: "variabele",
							title: "Ventilator plaatselijk bediend",
							description: "Geeft aan of de ventilator plaatselijk bediend wordt.",
							ref: "BSTTI#8605",
							comment: "Conditie: *;Waarde: _lfv_ventilator.#bestuurbaar = nee && _lfv_ventilator.#reden_niet_bestuurbaar[i] = plaatselijke_bediening",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Ventilator_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Ventilator_Verkeersbuis.reden_niet_bestuurbaar.includes("plaatselijke_bediening") ? "ja" : "";
							},
						},
						ventilator_disabled: {
							stereotype: "variabele",
							title: "Ventilator disabled",
							description: "Geeft aan of de ventilator disabled is.",
							ref: "BSTTI#8606",
							comment: "Conditie: *;Waarde: _lfv_ventilator.#bestuurbaar = nee && _lfv_ventilator.#reden_niet_bestuurbaar[i] = disabled",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Ventilator_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Ventilator_Verkeersbuis.reden_niet_bestuurbaar.includes("disabled") ? "ja" : "";
							},
						},
						ventilator_fasestroom: {
							stereotype: "variabele",
							title: "Ventilator fasestroom",
							description: "Actuele stroomverbruik van elk van de drie fasen L1, L2 en L3 van de ventilator. Een lijst met historische waardes van deze variabele kan opgevraagd worden uit de event recorder, zie sectie 13.3.1.",
							ref: "BSTTI#6420",
							comment: "Conditie: _lfv_ventilator.#observeerbaar = ja;Waarde: _lfv_ventilator.#fasestroom",
							enum: { l1: "L1", l2: "L2", l3: "L3" },//CHEK: klopt de enum?
							get: function () {
								return this.lfv_Ventilator_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilator_Verkeersbuis.fasestroom : "";
							},
						},
						ventilator_status_wikkelingstemperatuur_tehoog: {
							stereotype: "variabele",
							title: "Ventilator status wikkelingstemperatuur tehoog",
							description: "Geeft aan dat de wikkelingstemperatuur van de ventilator te hoog is geworden.",
							ref: "BSTTI#8618",
							comment: "Conditie: _lfv_ventilator.#observeerbaar = ja;Waarde: _lfv_ventilator.#storingen[i] = STORING_WIKKELINGSTEMPERATUUR",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Ventilator_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilator_Verkeersbuis.storingen.includes("STORING_WIKKELINGSTEMPERATUUR") : "";
							},
						},
						ventilator_stand: {
							stereotype: "variabele",
							title: "Ventilator stand.",
							description: " ",
							ref: "BSTTI#6421",
							comment: "Conditie: _lfv_ventilator.#observeerbaar = ja;Waarde: _lfv_ventilator.#stand",
							enum: { aan: "Aan", uit: "Uit" },
							get: function () {
								return this.lfv_Ventilator_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilator_Verkeersbuis.stand : "";
							},
						},
						ventilatorrichting_wijkt_af_van_collectieve_richting: {
							stereotype: "variabele",
							title: "Ventilatorrichting wijkt af van collectieve richting.",
							description: " ",
							ref: "BSTTI#16628",
							comment: "Conditie: _lfv_ventilator.#observeerbaar = ja;Waarde: _lfv_ventilator.#ventilatorrichting_wijkt_af_van_collectieve_richting",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Ventilator_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilator_Verkeersbuis.ventilatorrichting_wijkt_af_van_collectieve_richting : "";
							},
						},
						richting: {
							stereotype: "variabele",
							title: "De werkelijke ventilatierichting van deze ventilator.",
							description: " ",
							ref: "BSTTI#16629",
							comment: "Conditie: _lfv_ventilator.#observeerbaar = ja;Waarde: _lfv_ventilator.#richting",
							enum: { aflopend: "Aflopend", oplopend: "Oplopend" },
							get: function () {
								return this.lfv_Ventilator_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Ventilator_Verkeersbuis.richting : "";
							},
						},
						ventilator_beschikbaarheid: {
							stereotype: "variabele",
							title: "Geeft de beschikbaarheid van de functie aan.",
							description: " ",
							ref: "BSTTI#16231",
							comment: "Conditie: _lfv_ventilator.#bestuurbaar = nee;Waarde: niet_beschikbaar;Conditie: _lfv_ventilator.#bestuurbaar = ja && _lfv_ventilator.#storingen = {};Waarde: beschikbaar;Conditie: _lfv_ventilator.#bestuurbaar = ja && _lfv_ventilator.#storingen <> {};Waarde: beperkt_beschikbaar",
							enum: { beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt_beschikbaar", niet_beschikbaar: "Niet_beschikbaar" },
							get: function () {
								return this.lfv_Ventilator_Verkeersbuis.bestuurbaar == "nee" ? "niet_beschikbaar" : this.lfv_Ventilator_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Ventilator_Verkeersbuis.storingen.includes("") ? "beschikbaar" : this.lfv_Ventilator_Verkeersbuis.bestuurbaar == "ja" && !this.lfv_Ventilator_Verkeersbuis.storingen.includes("") ? "beperkt_beschikbaar" : "";
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.sf_Ventilator_Verkeersbuis.bestuurbaar == "nee" && this.sf_Ventilator_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.sf_Ventilator_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.sf_Ventilator_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						Storing_VentilatorNietBestuurbaar: {
							title: "Storing ventilator niet bestuurbaar.",
							description: "",
							ref: "BSTTI#8617",
							comment: "Conditie: _lfv_ventilator.#bestuurbaar = nee",
							type: "deelsysteem_storing",
							enum: { ja: "Storing ventilator niet bestuurbaar ", nee: "" },
							get: function () {
								return this.lfv_Ventilator_Verkeersbuis.bestuurbaar == "nee";
							},
						},
						BedieningsStatusVentilator: {
							title: "Bedienings status ventilator.",
							description: "De bedieningsstatus van de ventilator.",
							ref: "BSTTI#6434",
							comment: "Status: #ventilator_bedieningswijze",
							type: "status_melding",
							enum: { hand: "Hand", auto: "Auto" },
							get: function () {
								return this.ventilator_bedieningswijze;
							},
						},
						Storing_VentilatorWikkelingstemperatuur: {
							title: "Storing ventilator wikkeling temperatuur.",
							description: "Monitoren ventilator: Er is gedetecteerd dat de tempertauur in de ventilator te hoog is voor een goed en veilig functioneren.",
							ref: "BSTTI#6433",
							comment: "Conditie: _lfv_ventilator.#storingen[i] = STORING_WIKKELINGSTEMPERATUUR",
							type: "deelsysteem_storing",
							enum: { ja: "Storing ventilator wikkeling temperatuur ", nee: "" },
							get: function () {
								return this.sf_Ventilator_Verkeersbuis.storingen.includes("STORING_WIKKELINGSTEMPERATUUR");
							},
						},
						Storing_VentilatorOnbalans: {
							title: "Storing ventilator onbalans.",
							description: "De ventilator is in onbalans.",
							ref: "BSTTI#8615",
							comment: "_lfv_ventilator.#storingen[i] = STORING_ONBALANS",
							type: "deelsysteem_storing",
							enum: { ja: "Storing ventilator onbalans", nee: "" },
							get: function () {
								return this.sf_Ventilator_Verkeersbuis.storingen.includes("STORING_ONBALANS");
							},
						},
						Storing_VentilatorMotorstroom: {
							title: "Storing ventilator motorstroom.",
							description: "De ventilator is in onbalans.",
							ref: "BSTTI#8616",
							comment: "Conditie: _lfv_ventilator.#storingen[i] = STORING_MOTORSTROOM",
							type: "deelsysteem_storing",
							enum: { ja: "Storing ventilator motorstroom", nee: "" },
							get: function () {
								return this.sf_Ventilator_Verkeersbuis.storingen.includes("STORING_MOTORSTROOM");
							},
						},
						Alarm_VentilatorrichtingTegengesteld: {
							title: "Alarm ventilatorrichting tegengesteld.",
							description: "",
							ref: "BSTTI#16632",
							comment: "Conditie: #ventilatorrichting_wijkt_af_van_collectieve_richting = ja",
							type: "deelsysteem_storing",
							enum: { ja: "Alarm ventilatorrichting wijkt af van collectieve richting", nee: "" },
							get: function () {
								return this.ventilatorrichting_wijkt_af_van_collectieve_richting == "ja";
							},
						},
						PlaatselijkeBedieningsStatus: {
							title: "Plaatselijke bediening status.",
							description: "Status van de plaatselijke bediening van de ventilator.",
							ref: "BSTTI#16758",
							comment: "Status: #ventilator_plaatselijk_bediend.",
							type: "status_melding",
							enum: { ja: "Plaatselijk bediend", nee: "Niet plaatselijk bediend" },
							get: function () {
								return this.plaatselijk_bediend;
							},
						},
						DisabledStatus: {
							title: "Disabled status.",
							description: "Disabled/enabled-status van de ventilator.",
							ref: "BSTTI#16766",
							comment: "Status: #ventilator_disabled.",
							type: "status_melding",
							enum: { ja: "Ventilator disabled", nee: "Ventilator enabled" },
							get: function () {
								return this.ventilator_disabled;
							},
						},
					},
					operations: {
						// Bedieningen
						SetVentilatorOpHandbediening: {
							stereotype: "bediening",
							title: "Set ventilator op handbediening",
							description: "De ventilator gaat op handbediening en de stand volgt de instellingen voor de hand mode. De instellingen worden gezet op de LFV door het autonome proces *HandhaafVentilatorInstellingen.",
							ref: "BSTTI#6423",
							comment: "Conditie: #ventilator_bedieningswijze <> hand;Acties: #ventilator_hand_stand := _lfv_ventilator.#stand;#ventilator_bedieningswijze := hand",
							conditie: function () {
								return this.ventilator_bedieningswijze != "hand";
							},
							em: function () {
								this.ventilator_hand_stand = this.lfv_Ventilator_Verkeersbuis.stand;
								this.ventilator_bedieningswijze = hand;
							},
						},
						SetVentilatorOpAutobediening: {
							stereotype: "bediening",
							title: "Set ventilator op autobediening",
							description: "Ventilator gaat op autobediening en volgt de automatische regeling van ventilatie. De instellingen worden gezet op de LFV door het autonome proces *HandhaafVentilatorInstellingen.",
							ref: "BSTTI#6424",
							comment: "Conditie: *;Acties: #ventilator_bedieningswijze := auto",
							conditie: function () {
								return true;
							},
							em: function () {
								this.ventilator_bedieningswijze = auto;
							},
						},
						SetVentilatorHandbedieningsStand: {
							stereotype: "bediening",
							title: "Set ventilator op handbediening",
							description: "Zet de handmatige stand van de ventilator. De instellingen worden gezet op de LFV door het autonome proces *HandhaafVentilatorInstellingen.",
							ref: "BSTTI#6425",
							comment: "Conditie: *;Acties: #ventilator_hand_stand := stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.ventilator_hand_stand = stand;
							},
						},
						VentilatorEnable: {
							stereotype: "bediening",
							title: "Ventilator enablen",
							description: "Enable de ventilator",
							ref: "BSTTI#6428",
							comment: "Conditie: *;Acties: _lfv_ventilator.SetEnabled( ja )",
							conditie: function () {
								return true;
							},
							em: function () {
								this.lfv_Ventilator_Verkeersbuis.SetEnabled(ja);
							},
						},
						VentilatorDisable: {
							stereotype: "bediening",
							title: "Ventilator disablen",
							description: "Disable de ventilator",
							ref: "BSTTI#6428",
							comment: "Conditie: _lfv_ventilator.#bestuurbaar = ja;Acties: _lfv_ventilator.SetEnabled( nee )",
							conditie: function () {
								return this.lfv_Ventilator_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Ventilator_Verkeersbuis.SetEnabled(nee);
							},
						},
						// Besturingen
						SetAutobedieningsStand: {
							stereotype: "besturing",
							title: "Set auto bediening stand",
							description: "Stel de stand in die gebruikt moet worden als #bedieningswijze = auto",
							ref: "BSTTI#6390",
							comment: "Conditie: *;Acties: #auto_stand := stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.auto_stand = stand;
							},
						},
						SetSensorregelingStand: {
							stereotype: "besturing",
							title: "Set sensor regeling stand",
							description: "Stel de stand in die gebruikt moet worden als de sensorregeling actief is.",
							ref: "BSTTI#10244",
							comment: "Conditie: *;Acties: #sensorregeling_stand := stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.sensorregeling_stand = stand;
							},
						},
						SetAutobedieningsRichting: {
							stereotype: "besturing",
							title: "Set auto bedienings richting",
							description: "Stel de richting in die gebruikt moet worden als #bedieningswijze = auto.",
							ref: "BSTTI#10244",
							comment: "Conditie: *;Acties: #auto_richting := richting",
							conditie: function () {
								return true;
							},
							em: function (richting) {
								this.auto_richting = richting;
							},
						},
						SetGeheelOpAutobediening: {
							stereotype: "besturing",
							title: "Set geheel op autobediening",
							description: "Ventilatie en al haar subfuncties gaan op autobediening en de ventilatiestand en -richting volgen de instellingen voor de autobediening. De instellingen worden gezet op de LFV door de autonome processen *HandhaafInstellingen en *HandhaafVentilatorInstellingen.",
							ref: "BSTTI#10244",
							comment: "Conditie: *;Acties: #bedieningswijze := auto;_sf_cluster[].SetClusterOpAutobediening()",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bedieningswijze = auto;
								forAll(this.sf_VentilatieCluster_Verkeersbuis, "SetClusterOpAutobediening");

							},
						},
						SetTemperatuurBeveiliging: {
							stereotype: "besturing",
							title: "Set temperatuur beveiliging",
							description: "Selecteer het al dan niet uitschakelen van ventilatoren met te hoge wikkelingstemperatuur voor ventilatoren die collectief bestuurd worden.",
							ref: "BSTTI#16966",
							comment: "Conditie: _lfv_ventilatie.#bestuurbaar = ja;Acties: _lfv_ventilatie.SetTemperatuurBeveiliging(stand)",
							conditie: function () {
								return this.lfv_Ventilatie_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Ventilatie_Verkeersbuis.SetTemperatuurBeveiliging(stand);
							},
						},
						SetOnbalansBeveiliging: {
							stereotype: "besturing",
							title: "Set onbalans beveiliging",
							description: "Selecteer het al dan niet uitschakelen van ventilatoren die in onbalans zijn.",
							ref: "BSTTI#16967",
							comment: "Conditie: _lfv_ventilatie.#bestuurbaar = ja;Acties: _lfv_ventilatie.SetOnbalansBeveiliging(stand)",
							conditie: function () {
								return this.lfv_Ventilatie_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Ventilatie_Verkeersbuis.SetOnbalansBeveiliging(stand);
							},
						},
						// Autonome processen
						HandhaafVentilatorInstellingen: {
							stereotype: "autonoom_proces",
							title: "Handhaaf instellingen",
							description: "Zorgt dat de hand of auto instellingen worden gehandhaafd afhankelijk van de status waarin de LFV zich bevindt. Dit autonome proces draagt er ook zorg voor dat bij de overgang van niet bestuurbaarheid naar bestuurbaarheid het juiste gedrag weergegeven wordt.",
							ref: "BSTTI#6052",
							comment: "Conditie: _lfv_ventilator.#bestuurbaar = ja && #ventilator_bedieningswijze = auto;Acties: _lfv_ventilator.SetBesturing(collectief);Conditie: _lfv_ventilator.#bestuurbaar = ja && #ventilator_bedieningswijze = hand && #ventilator_hand_stand <> ongeldig;Acties: _lfv_ventilator.SetBesturing(individueel);_lfv_ventilator.SetStand(#ventilator_hand_stand);Conditie: _lfv_ventilator.#observeerbaar = ja && #ventilator_plaatselijk_bediend = ja && (#ventilator_hand_stand <> _lfv_ventilator.#stand ||#ventilator_bedieningswijze <> hand);Acties: #ventilator_bedieningswijze := hand;#ventilator_hand_stand := _lfv_ventilator.#stand",
							js: function () {
								if (this.lfv_ventilator_Verkeersbuis.bestuurbaar == "ja" && this.ventilator_bedieningswijze == "auto") { this.lfv_Ventilatie_Verkeersbuis.SetBesturing("collectief") }
								if (this.lfv_ventilator_Verkeersbuis.bestuurbaar == "ja" && this.ventilator_bedieningswijze == "hand" && this.ventilator_hand_stand != "ongeldig") { this.lfv_Ventilator_Verkeersbuis.SetBesturing("individueel") } { this.lfv_Ventilator_Verkeersbuis.SetStand("ventilator_hand_stand") }
								if (this.lfv_ventilator_Verkeersbuis.observeerbaar == "ja" && this.ventilator_plaatselijk_bediend == "ja" && (this.ventilator_hand_stand != this.lfv_ventilator_Verkeersbuis.stand || ventilator_bedieningswijze == "hand")) { this.ventilator_bedieningswijze == "hand" } { this.ventilator_hand_stand == lfv_Ventilator_Verkeersbuis.stand }
							},
						},
					},
				},
				// Luchtkwaliteitsmeting verkeersbuis
				bf_Luchtkwaliteitsmeting_Verkeersbuis: {
					naam: "Basisfunctie Luchtkwaliteitsmeting Verkeersbuis",
					hoortbij: "Verkeersbuis",
					titel: "Luchtkwaliteitsmeting",
					doc: {
						icon: {
							Gesloten: {
								nr: 78,
								img: 'lts/bf_VerkeersbuisLangsventilatie.png',
								omschrijving: 'symbol lamp rood + ',
								attr: { stand: 'dicht', nr: 12 }
							},
							Geopend: { attr: { stand: 'open', nr: 23 } },
							"Geopend en ontgrendeld": { attr: { stand: 'open', nr: 12 } },
							"Aanvalsdeur": { attr: { type: "aanvalsdeur", stand: 'open', nr: 12 } },
							"Vergrendeld": { attr: { type: "aanvalsdeur", stand: 'open', nr: 12 } },
							"Ontgrendeld omhoog": { attr: { type: "aanvalsdeur", stand: 'open', nr: 12 } },
							"Ontgrendeld omlaag": { attr: { type: "aanvalsdeur", stand: 'open', nr: 12 } },
							"Ontgrendeld bij middenwand": { attr: { type: "aanvalsdeur", stand: 'open', nr: 12 } },
						}
					},
					gui: {

					},

				},
				// Rij van vluchtdeuren
				bf_RijvanVluchtdeuren_Verkeersbuis: {
					naam: "Basisfunctie Rij van Vluchtdeuren Verkeersbuis",
					hoortbij: "Verkeersbuis",
					titel: "Rij van vluchtdeuren",
				},
				sf_Vluchtdeur_Verkeersbuis: {
					naam: "Subfunctie Vluchtdeur",
					hoortbij: "Verkeersbuis",
					titel: "Vluchtdeur",
					doc: {
						icon: {
							"Basis Open": { img: 'lts/sf_Vluchtdeur.png', attr: { status: 'lock', nr: '12' } },
							"Basis Sleutel": { attr: { status: 'key', nr: '12' } },
							"Basis Sleutel met disbled": { attr: { status: 'key', nr: '12', disable: 1 } },
							"Basis Boven": { attr: { status: 'boven', nr: '12' } },
							"Basis Onder": { attr: { status: 'onder', nr: '12' } },
							"Signalering": { attr: { signalering: 1, } },
							"Disable": { attr: { disable: 1 } },
							//"Hand": { attr: { hand: 1 } },
							"Storing": { attr: { storing: 1 } },
							"Niet beschikbaar & Signal": { attr: { nb: 1, status: 'onder', nr: '121', signalering: 1, } },
							"Niet beschikbaar & Signal & alarm_vluchtdeur": { attr: { nb: 1, status: 'onder', nr: '121', signalering: 1, alarm_vluchtdeur: 1 } },
							"Niet beschikbaar & Signal & alarm_vluchtactief": { attr: { nb: 1, status: 'onder', nr: '121', signalering: 1, alarm_vluchtactief: 1 } },
							"Niet beschikbaar & Signal & alarm_vluchtdeur & alarm_vluchtactief": { attr: { nb: 1, status: 'onder', nr: '121', signalering: 1, alarm_vluchtdeur: 1, alarm_vluchtactief: 1 } },
							"Niet beschikbaar & storing": { attr: { storing: 1, nb: 1 } },
							"Beperkt beschikbaar": { attr: { bb: 1 } },
							"Beperkt beschikbaar & storing": { attr: { storing: 1, bb: 1 } },
						}
					},
					gui: {
						construct: function () {
							with (this.elDetail) {
								appendTag("span", { className: "symbol" });
							}
						}
					},
					properties: {
						// Configuratie elementen
						lfv_Luchtkwaliteitsmeting_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Luchtkwaliteitsmeter",
							description: "De LFV Luchtkwaliteitsmeter Verkeersbuis voor deze verkeersbuis.",
							ref: "BSTTI#6322",
							type: "selectitem",
							class: "",
						},
						grenswaarde_rook: {
							stereotype: "configuratie_element",
							title: "Grenswaarde rookr",
							description: "De grenswaarde waarboven aangenomen kan worden dat er rook in de tunnel hangt.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10238",
							type: "number",
							min: 0.012,
							class: "",
						},
						grenswaarde_slechtzicht: {
							stereotype: "configuratie_element",
							title: "Grenswaarde slechtzicht",
							description: "De grenswaarde waarboven aangenomen kan worden dat het zicht in de tunnel slecht is.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10404",
							type: "number",
							min: 0.012,
							class: "",
						},
						grenswaarde_mist: {
							stereotype: "configuratie_element",
							title: "Grenswaarde mist",
							description: "De grenswaarde waarboven aangenomen kan worden dat er mist in de tunnel hangt.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#15707",
							type: "number",
							min: 0.009,
							class: "",
						},
						grenswaarde_verminderd: {
							stereotype: "configuratie_element",
							title: "Grenswaarde verminderd",
							description: "De grenswaarde waarboven van verminderd zicht gesproken wordt.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#15708",
							type: "number",
							min: 0.007,
							class: "",
						},
						sf_camera_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Camera's",
							description: "De camera die het deel van de tunnel bij de zichtmeter met de corresponderende index in de LFV luchtkwaliteitsmeter overziet.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10239",
							type: "selectitem",
							class: "",
							value: [],
						},
						preset: {
							stereotype: "configuratie_element",
							title: "Preset",
							description: "De camera preset bij de cameras in _sf_camera[1..n].Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10240",
							type: "selectitem",
							class: "",
							value: [],
						},
						// Variabelen
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van de functie aan.",
							ref: "BSTTI#6326",
							comment: "Conditie: *;Waarde:IF _lfv_lkm.#bestuurbaar = nee || #detector_enabled[] = nee || _lfv_lkm.#storingen[i] = STORING_METING_250M_PLUS THEN; #beschikbaarheid := niet_beschikbaar;ELSIF _lfv_lkm.#storingen <> {} THEN;#beschikbaarheid := beperkt_beschikbaar;ELSE;#beschikbaarheid := beschikbaar;END_IF",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () { // CHECK:waarde bepaling?
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.bestuurbaar == "nee" || checkAll(this.detector_disabled, "nee") || this.Luchtkwaliteitsmeter_Verkeersbuis.storingen.includes("STORING_METING_250M_PLUS") ? "niet_beschikbaar" : !this.Luchtkwaliteitsmeter_Verkeersbuis.storingen.includes("") ? "beperkt_beschikbaar" : "beschikbaar";
							},
						},
						zichtmeting: {
							stereotype: "variabele",
							title: "zichtmeting",
							description: "De waardes van de lichtreductiecoëfficientmetingen. Elke waarde bevat de lichtreductiecoëfficient van een bepaald meetpunt.",
							ref: "BSTTI#6327",
							comment: "Conditie: _lfv_lkm.#observeerbaar = ja;Waarde: _lfv_lkm.#zichtmeting",
							enum: {},
							get: function () { // CHECK:waarde bepaling?
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.zichtmeting : "";
							},
						},
						detector_enabled: {
							stereotype: "variabele",
							title: "Detector enabled",
							description: "Geeft per meetpunt aan of de detector enabled is of niet.",
							ref: "BSTTI#16245",
							comment: "Conditie: _lfv_lkm.#observeerbaar = ja;Waarde: _lfv_lkm.#detector_enabled",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () { // CHECK:waarde bepaling?
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.detector_enabled : "";
							},
						},
						zichtmeting_max: {
							stereotype: "variabele",
							title: "Zichtmeting max",
							description: "De huidige maximale waarde van de zichtmeting.",
							ref: "BSTTI#6328",
							comment: "Conditie: _lfv_lkm.#observeerbaar = ja;Waarde: maximum(_lfv_lkm.#zichtmeting[])",
							enum: {},
							get: function () { // CHECK:hoe vertallen we dit naar javascript?
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.observeerbaar == "ja" ? maximum(checkAll(this.lfv_Luchtkwaliteitsmeter_Verkeersbuis, "zichtmeting")) : "";
							},
						},
						zichtkwaliteit: {
							stereotype: "variabele",
							title: "Zicht kwaliteit",
							description: "Geeft een kwalitatieve indicatie van de kwaliteit van de zichtcondities in de tunnel.",
							ref: "BSTTI#6329",
							comment: "Conditie: _lfv_lkm.#observeerbaar= ja;Waarde:IF #zichtmeting_max ≤ _grenswaarde_verminderd THEN #zichtkwaliteit := helder;ELSIF #zichtmeting_max > _grenswaarde_verminderd && #zichtmeting_max ≤ _grenswaarde_mist THEN #zichtkwaliteit := verminderd ELSIF #zichtmeting_max > _grenswaarde_mist && #zichtmeting_max ≤ _grenswaarde_slechtzicht THEN #zichtkwaliteit := mistig ELSE #zichtkwaliteit := slecht_zicht END_IF",
							enum: { helder: "Helder", verminderd: "Verminderd", mistig: "Mistig", slecht_zicht: "Slect zicht" },
							get: function () { // CHECK:waarde bepaling?
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.observeerbaar == "ja" && (this.zichtmeting_max <= this.grenswaarde_verminderd ? this.zichtkwaliteit == "helder" : this.zichtmeting_max > this.grenswaarde_verminderd && this.zichtmeting_max <= this.grenswaarde_mist ? this.zichtkwaliteit == "verminderd" : this.zichtmeting_max > this.grenswaarde_mist && this.zichtmeting_max <= this.grenswaarde_slechtzicht ? this.zichtkwaliteit == "mistig" : this.zichtkwaliteit == "slecht_zicht");
							},
						},
						rook_gedetecteerd: {
							stereotype: "variabele",
							title: "Rook gedetecteerd",
							description: "Geeft aan of er rook gedetecteerd is door de zichtmeter.",
							ref: "BSTTI#7483",
							comment: "Conditie: _lfv_lkm.#observeerbaar = ja;Waarde: (_lfv_lkm.#zichtmeting[i] > _grenswaarde_rook )",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () { // CHECK:hoe vertallen we dit naar javascript?
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.observeerbaar == "ja" ? checkOne(this.lfv_Luchtkwaliteitsmeter_Verkeersbuis, "zichtmeting" > "grenswaarde_rook") == "ja" : "nee";
							},
						},
						rook_detecties: {
							stereotype: "variabele",
							title: "Rook detecties",
							description: "De lijst met rookdetecties, waarbij indexen overeenkomen met die van #zichtmeting.",
							ref: "BSTTI#17076",
							comment: "Conditie: _lfv_lkm.#observeerbaar= ja;Waarde:IF #zichtmeting_max ≤ _grenswaarde_verminderd THEN #zichtkwaliteit := helder;ELSIF #zichtmeting_max > _grenswaarde_verminderd && #zichtmeting_max ≤ _grenswaarde_mist THEN #zichtkwaliteit := verminderd ELSIF #zichtmeting_max > _grenswaarde_mist && #zichtmeting_max ≤ _grenswaarde_slechtzicht THEN #zichtkwaliteit := mistig ELSE #zichtkwaliteit := slecht_zicht END_IF",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () { // CHECK:waarde bepaling?
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.observeerbaar == "ja" && (this.zichtmeting_max <= this.grenswaarde_verminderd ? this.zichtkwaliteit == "helder" : this.zichtmeting_max > this.grenswaarde_verminderd && this.zichtmeting_max <= this.grenswaarde_mist ? this.zichtkwaliteit == "verminderd" : this.zichtmeting_max > this.grenswaarde_mist && this.zichtmeting_max <= this.grenswaarde_slechtzicht ? this.zichtkwaliteit == "mistig" : this.zichtkwaliteit == "slecht_zicht");
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.bestuurbaar == "nee" && this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						Beschikbaarheid: {
							title: "Beschikbaarheid",
							description: "status Luchtkwaliteitsmeter.",
							ref: "BSTTI#15584",
							comment: "Status: #beschikbaarheid",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () {
								return this.beschikbaarheid;
							},
						},
						Alarm_RookGedetecteerd: {
							title: "Alarm rook gedetecteerd",
							description: "Meldt dat er rook gedetecteerd is in de verkeersbuis.",
							ref: "BSTTI#6348",
							comment: "Conditie: #rook_detecties[i] = ja",//CHECK: wat doen we met de volgende prameters? Camera: _sf_camera[i] Preset: _preset[i]
							type: "verkeerskundig_alarm",
							enum: { ja: "Alarm rook gedetecteerd", nee: "" },
							get: function () {
								return checkOne(this.rook_detecties, "ja")
							},
						},
						Alarm_StoringMeerDan250Meter: {
							title: "Alarm storing meer dan 250 meter",
							description: "Meldt dat er rook gedetecteerd is in de verkeersbuis.",
							ref: "BSTTI#6348",
							comment: "Conditie: _lfv_lkm.#storingen[i] = STORING_METING_250M_PLUS.",
							type: "deelsysteem_alarm",
							enum: { ja: "Alarm storing meer dan 250 meter", nee: "" },
							get: function () {
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.storingen.includes("STORING_METING_250M_PLUS")
							},
						},
					},
					operations: {
						// Bedieningen
						EnableZichtmeter: {
							stereotype: "bediening",
							title: "Enable zichtmeter",
							description: "Enable zichtmeting voor de aangegeven zichtmeter.",
							ref: "BSTTI#8996",
							comment: "Conditie: _lfv_lkm.#bestuurbaar = ja;Acties: _lfv_lkm.EnableDetector( zichtmeter, ja )",
							conditie: function () {
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.EnableDetector("zichtmeter", "ja");
							},
						},
						DisableZichtmeter: {
							stereotype: "bediening",
							title: "Disable zichtmeter",
							description: "Disable zichtmeting voor de aangegeven zichtmeter",
							ref: "BSTTI#8996",
							comment: "Conditie: _lfv_lkm.#bestuurbaar = ja;Acties: _lfv_lkm.EnableDetector( zichtmeter, nee )",
							conditie: function () {
								return this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.EnableDetector("zichtmeter", "nee");
							},
						},
						// Autonome processen
						BewaakRookdetecties: {
							stereotype: "autonoom_proces",
							title: "Bewaak rook detecties",
							description: "Bepaal of er rook gedetecteerd is door de zichtmeters.",
							ref: "BSTTI#17077",
							comment: "Conditie: _lfv_lkm.#observeerbaar = ja && ( #zichtmeting[i] > _grenswaarde_rook ) && #rook_detecties[i] <> ja; Acties: #rook_detecties[i] := ja; Conditie: _lfv_lkm.#observeerbaar = ja && ( #zichtmeting[i] ≤ _grenswaarde_rook ) && #rook_detecties[i] <> nee;Acties: #rook_detecties[i] := nee;Conditie: _lfv_lkm.#observeerbaar = nee;Acties: #rook_detecties[] := ongeldig",
							js: function () {//CHECK: acties bepaling
								if (this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.observeerbaar == "ja" && checkOne(this.zichtmeting > "grenswaarde_rook") && checkOne(this.rook_detecties) != "ja") { checkOne(this.rook_detecties, "ja") }
								if (this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.observeerbaar == "ja" && checkOne(this.zichtmeting <= "grenswaarde_rook") && checkOne(this.rook_detecties) != "nee") { checkOne(this.rook_detecties, "nee") }
								if (this.lfv_Luchtkwaliteitsmeter_Verkeersbuis.observeerbaar == "nee") { checkAll(this.rook_detecties, "ongeldig") }
							},
						},
					},

				},
				// Rij van vluchtdeuren
				bf_RijvanVluchtdeuren_Verkeersbuis: {
					naam: "Basisfunctie Rij van Vluchtdeuren Verkeersbuis",
					hoortbij: "Verkeersbuis",
					titel: "Rij van vluchtdeuren",
					properties: {
						// Configuratie-elementen
						lfv_RijVanVluchtdeuren_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Rij van Vluchtdeuren Verkeersbuis",
							description: "De LFV Rij van Vluchtdeuren Verkeersbuis, óf de LFV Rij van Vergrendelbare Vluchtdeuren Verkeersbuis waarbij alleen dat deel van de besturing van de Rij van Vergrendelbare Vluchtdeuren wordt gebruikt dat overeenkomt met de besturing van de Rij van Vluchtdeuren.In de interbuiscoördinatie op tunnelniveau wordt een nadere detaillering gegeven van dit configuratie-element.",
							ref: "BSTTI#9154",
							type: "selectitem",
							class: "",
						},
						sf_Vluchtdeur_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "SF Vluchtdeuren Verkeersbuis",
							description: "Lijst van vluchtdeuren. Dit zijn Vluchtdeur subfuncties.",
							ref: "BSTTI#15703",
							type: "selectitem",
							class: "",
							value: [],
						},
						// Variabelen
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van de vluchtdeuren aan.",
							ref: "BSTTI#9749",
							comment: "Conditie: _lfv_rv.#bestuurbaar = ja && _lfv_rv.#storingen = {};Waarde: beschikbaar; Conditie: _lfv_rv.#bestuurbaar= nee;Waarde: niet_beschikbaar;Conditie: overige situaties;Waarde: beperkt_beschikbaar",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.bestuurbaar == "ja" && this.lfv_RijVanVluchtdeuren_Verkeersbuis.storingen.includes("") ? "beschikbaar" : lfv_RijVanVluchtdeuren_Verkeersbuis.bestuurbaar == "nee" ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.bestuurbaar == "nee" && this.lfv_RijVanVluchtdeuren_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						Beschikbaarheid_Vluchtdeuren: {
							title: "Beschikbaarheid vluchtdeuren",
							description: "Meld de veranderingen van de beschikbaarheid status van deze functie.",
							ref: "BSTTI#9762",
							comment: "Status: #beschikbaarheid",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							get: function () {
								return this.beschikbaarheid;
							},
						},
					},
				},
				sf_Vluchtdeur_Verkeersbuis: {
					naam: "Subfunctie Vluchtdeur",
					hoortbij: "Verkeersbuis",
					titel: "Vluchtdeur",
					doc: {
						icon: {
							"Basis Open": { img: 'lts/sf_Vluchtdeur.png', attr: { status: 'lock', nr: '12' } },
							"Basis Sleutel": { attr: { status: 'key', nr: '12' } },
							"Basis Sleutel met disbled": { attr: { status: 'key', nr: '12', disable: 1 } },
							"Basis Boven": { attr: { status: 'boven', nr: '12' } },
							"Basis Onder": { attr: { status: 'onder', nr: '12' } },
							"Signalering": { attr: { signalering: 1, } },
							"Disable": { attr: { disable: 1 } },
							//"Hand": { attr: { hand: 1 } },
							"Storing": { attr: { storing: 1 } },
							"Niet beschikbaar & Signal": { attr: { nb: 1, status: 'onder', nr: '121', signalering: 1, } },
							"Niet beschikbaar & Signal & alarm_vluchtdeur": { attr: { nb: 1, status: 'onder', nr: '121', signalering: 1, alarm_vluchtdeur: 1 } },
							"Niet beschikbaar & Signal & alarm_vluchtactief": { attr: { nb: 1, status: 'onder', nr: '121', signalering: 1, alarm_vluchtactief: 1 } },
							"Niet beschikbaar & Signal & alarm_vluchtdeur & alarm_vluchtactief": { attr: { nb: 1, status: 'onder', nr: '121', signalering: 1, alarm_vluchtdeur: 1, alarm_vluchtactief: 1 } },
							"Niet beschikbaar & storing": { attr: { storing: 1, nb: 1 } },
							"Beperkt beschikbaar": { attr: { bb: 1 } },
							"Beperkt beschikbaar & storing": { attr: { storing: 1, bb: 1 } },
						}
					},
					gui: {
						construct: function () {
							with (this.elDetail) {
								appendTag("span", { className: "symbol" });
							}
						}
					},
					properties: {
						// Configuratie-elementen
						lfv_RijVanVluchtdeuren_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Rij van Vluchtdeuren Verkeersbuis",
							description: "De LFV Rij van Vluchtdeuren Verkeersbuis, óf de LFV Rij van Vergrendelbare Vluchtdeuren Verkeersbuis waarbij alleen dat deel van de besturing van de Rij van Vergrendelbare Vluchtdeuren wordt gebruikt dat overeenkomt met de besturing van de Rij van Vluchtdeuren.In de interbuiscoördinatie op tunnelniveau wordt een nadere detaillering gegeven van dit configuratie-element.",
							ref: "BSTTI#15587",
							type: "selectitem",
							class: "",
						},
						deur_index: {
							stereotype: "configuratie_element",
							title: "Deur index",
							description: "De index in de toestandsvariabele #deur_gesloten in _lfv_rv.",
							ref: "BSTTI#9166",
							type: "number",
							class: "",
						},
						sf_camera: {
							stereotype: "configuratie_element",
							title: "Camera's",
							description: "De instantie van de camera die de vluchtdeur in beeld brengt.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#7756",
							type: "selectitem",
							class: "",
						},
						preset: {
							stereotype: "configuratie_element",
							title: "Preset",
							description: "De preset van deze camera.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#7757",
							type: "selectitem",
							class: "",
						},
						// Variabelen
						vluchtdeur_gesloten: {
							stereotype: "variabele",
							title: "Vluchtdeur gesloten",
							description: "Deze variabele geeft de status van de Standmelding (open/gesloten) per vluchtdeur.",
							ref: "BSTTI#9168",
							comment: "Conditie: _lfv_rv.#observeerbaar = ja;Waarde: _lfv_rv.#deur_gesloten[_deur_index]",
							enum: { detector_disabled: "Detector disabled", ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.observeerbaar == "ja" ? this.lfv_RijVanVluchtdeuren_Verkeersbuis.deur_gesloten[deur_index] : "";//CHECK: waarde bepaling
							},
						},
						// Specifieke signaleringen
						Alarm_VluchtdeurNietGesloten: {
							title: "Alarm vluchtdeur niet gesloten",
							description: "Detectie Openen vluchtdeur",
							ref: "BSTTI#9173",
							comment: "Conditie: #vluchtdeur_gesloten = nee",
							type: "Verkeerskundig_alarm",
							enum: { ja: "Alarm vluchtdeur niet gesloten", nee: "" },
							get: function () {
								return this.vluchtdeur_gesloten == "nee";//CHECK: wat doen we met deze parameters "Camera: _sf_camera, Preset: _preset"
							},
						},
					},
					operations: {
						// Bedieningen
						DisableDetectieVluchtdeurGesloten: {
							stereotype: "bediening",
							title: "Disable detectie vlucht deur gesloten",
							description: "Disable de detecties en signaleringen die het gevolg zijn van het openen of sluiten van een vluchtdeur.",
							ref: "BSTTI#9752",
							comment: "Conditie: _lfv_rv.#bestuurbaar = ja;Acties: _lfv_rv.EnableDetector( _deur_index, nee )",
							conditie: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_RijVanVluchtdeuren_Verkeersbuis.EnableDetector("deur_index", "nee");//CHECK: Actie bepaling
							},
						},
						EnableDetectieVluchtdeurGesloten: {
							stereotype: "bediening",
							title: "Enable detectie vlucht deur gesloten",
							description: "Enable de detecties en signaleringen die het gevolg zijn van het openen of sluiten van een vluchtdeur.",
							ref: "BSTTI#9753",
							comment: "Conditie: _lfv_rv.#bestuurbaar = ja;Acties: _lfv_rv.EnableDetector( _deur_index, ja )",
							conditie: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.bestuurbaar == "ja";
							},
							em: function () {
								this.lfv_RijVanVluchtdeuren_Verkeersbuis.EnableDetector("deur_index", "ja");//CHECK: Actie bepaling
							},
						},
					},
				},
				// Rij van vluchtdeurvergrendeling
				bf_RijvanVluchtdeurVergrendeling_Verkeersbuis: {
					naam: "Basisfunctie Rij van Vergrendelbare Vluchtdeuren Verkeersbuis",
					hoortbij: "Verkeersbuis",
					titel: "Rij van vluchtdeurvergrendeling",
					properties: {
						// Configuratie-elementen
						lfv_RijVanVergrendelbareVluchtdeuren_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Rij van vergrendelbare vluchtdeuren Verkeersbuis",
							description: "De LFV Rij van Vergrendelbare Vluchtdeuren Verkeersbuis. Merk op dat de besturing voor zover overeenkomend met een Rij van Vluchtdeuren in deze basisfunctie niet wordt aangesproken. Dit wordt vanuit de basisfunctie Rij van Vluchtdeuren gedaan.",
							ref: "BSTTI#7240",
							type: "selectitem",
							class: "",
						},
						max_transitietijd: {
							stereotype: "configuratie_element",
							title: "Maximale tijd",
							description: "De maximale tijd die een transitie kan duren.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#9723",
							type: "number",
							class: "",
						},
						// Variabelen
						bedieningswijze: {
							stereotype: "variabele",
							title: "Vluchtdeur gesloten",
							description: "De bedieningswijze van de rij van VluchtDeurVergrendeling.",
							ref: "BSTTI#9302",
							comment: "Init: hand",
							enum: { hand: "Hand", auto: "Auto" },
							initdefaultvalue: "hand",
						},
						auto_stand: {
							stereotype: "variabele",
							title: "Auto stand",
							description: "De stand die de vergrendeling van de vluchtdeuren in moet nemen als #bedieningswijze =auto.",
							ref: "BSTTI#9303",
							comment: "Init: hand",
							enum: { vergrendeld: "Vergrendeld", ontgrendeld: "Ontgrendeld" },
							initdefaultvalue: "hand",
						},
						hand_stand: {
							stereotype: "variabele",
							title: "Hand stand",
							description: "De stand die de vergrendeling van de vluchtdeuren in moet nemen als #bedieningswijze =hand.",
							ref: "BSTTI#9304",
							comment: "Init: init_patroon(#status_vergrendeling = vergrendeld || #status_vergrendeling = ontgrendeld, #status_vergrendeling)",
							enum: { vergrendeld: "Vergrendeld", ontgrendeld: "Ontgrendeld" },
							initdefaultvalue: function () {
								return this.status_vergrendeling = "vergrendeld" || this.status_vergrendeling == "ontgrendeld" ? this.status_vergrendeling : "";
							},
						},
						transitiestatus_tijdstip: {
							stereotype: "variabele",
							title: "Transitiestatus tijdstip",
							description: "Het tijdstip waarop de huidige transitiestatus-waarde bereikt is..",
							ref: "BSTTI#9989",
							comment: "Init:0)",
							enum: { vergrendeld: "Vergrendeld", ontgrendeld: "Ontgrendeld" },
							initdefaultvalue: "0",
						},
						transitiestatus_vergrendeling: {
							stereotype: "variabele",
							title: "transitiestatus vergrendeling",
							description: "",
							ref: "BSTTI#9305",
							comment: "Conditie: *Waarde: transitiestatus_patroon((#bedieningswijze = auto && #status_vergrendeling = #auto_stand) ||(#bedieningswijze = hand && #status_vergrendeling = #hand_stand),IF #bedieningswijze = auto THEN #auto_stand;ELSIF #bedieningswijze = hand THEN #hand_stand;END_IF,#transitiestatus_tijdstip,_max_transitietijd ))",
							enum: { beriekt: "Bereikt", niet_bereikt: "Niet bereikt", in_transitie: "In transitie" },
							get: function () {
								// CHECK hoe gaan we dit patroon in js code omzetten?
							},
						},
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft aan de beschikbaarheid van de vergrendelbare vluchtdeuren aan. De vluchtdeuren zijn beschikbaar als ze allemaal storingsvrij zijn en de LFV bestuurbaar is. Als de LFV niet bestuurbaar is, is de functie niet_beschikbaar. In alle andere situaties is de functie beperkt_beschikbaar.",
							ref: "BSTTI#9305",
							comment: "Conditie: _lfv_rvv.#bestuurbaar= ja &&_lfv_rvv.#storingen = {} && #transitiestatus_vergrendeling <> niet_bereikt;Waarde: beschikbaar;Conditie: _lfv_rvv.#bestuurbaar= nee || #transitiestatus_vergrendeling = niet_bereikt;Waarde: niet_beschikbaar;Conditie: overige situaties;Waarde: beperkt_beschikbaar",
							enum: { beschikbaar: "beschikbaar", niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.bestuurbaar == "ja" && this.lfv_RijVanVluchtdeuren_Verkeersbuis.storingen.includes("") && this.transitiestatus_vergrendeling != "niet_bereikt" ? "beschikbaar" : this.lfv_RijVanVluchtdeuren_Verkeersbuis.bestuurbaar == "nee" || transitiestatus_vergrendeling == "niet_bereikt" ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
						status_vergrendeling: {
							stereotype: "variabele",
							title: "Status vergrendeling",
							description: "Geeft de huidige vergrendel-status van de Rij van VluchtDeurVergrendeling. De waarde is 'vergrendeld' als alle vluchtdeuren vergrendeld zijn. De waarde is 'ontgrendeld' als alle deuren ontgrendeld zijn. Bij een combinatie van vergrendelingsstanden is de stand 'gedeeltelijk_vergrendeld'.",
							ref: "BSTTI#6759",
							comment: "Conditie: _lfv_rvv.#observeerbaar = ja && _lfv_rvv.#vergrendeld[] = ja;Waarde: vergrendeld;Conditie: _lfv_rvv.#observeerbaar = ja && _lfv_rvv.#vergrendeld[i] = nee && _lfv_rvv.#vergrendeld[j] = ja;Waarde: gedeeltelijk_vergrendeld;Conditie: _lfv_rvv.#observeerbaar = ja && _lfv_rvv.#vergrendeld[] = nee;Waarde: ontgrendeld",
							enum: { vergrendeld: "Vergrendeld", ontgrendeld: "Ontgrendeld", gedeeltelijk_vergrendeld: "Gedeeltelijk vergrendeld" },
							get: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.observeerbaar == "ja" && checkAll(this.lfv_RijVanVluchtdeuren_Verkeersbuis, "vergrendeld", "ja") ? "vergrendeld" : this.lfv_RijVanVluchtdeuren_Verkeersbuis.observeerbaar == "ja" && this.lfv_RijVanVluchtdeuren_Verkeersbuis.vergrendeld[i] == "nee" && this.lfv_RijVanVluchtdeuren_Verkeersbuis.vergrendeld[j] == "ja" ? "gedeeltelijk_vergrendeld" : this.lfv_RijVanVluchtdeuren_Verkeersbuis.observeerbaar == "ja" && checkAll(this.lfv_RijVanVluchtdeuren_Verkeersbuis, "vergrendeld", "nee") ? "ontgrendeld" : "";//CHECK: waarde bepaling.
							},
						},
						doel_vergrendeling: {
							stereotype: "variabele",
							title: "Doel vergrendeling",
							description: "Geeft de doelstatus weer ten gevolge van de laatste vergrendelingsbediening.",
							ref: "BSTTI#14956",
							comment: "",
							enum: { vergrendeld: "Vergrendeld", ontgrendeld: "Ontgrendeld" },
						},
						tijdstip_doel_vergrendeling: {
							stereotype: "variabele",
							title: "Tijdstip doel vergrendeling",
							description: "Het tijdstip waarop vergrendeling gezet wordt.",
							ref: "BSTTI#17472",
							comment: "Init: 0",
							enum: { vergrendeld: "Vergrendeld", ontgrendeld: "Ontgrendeld" },
							initdefaultvalue: "0",
						},
						vergrendeld_maar_niet_gesloten: {
							stereotype: "variabele",
							title: "Vergrendeld maar niet gesloten",
							description: "Geeft weer of er een vluchtdeur is die vergrendeld zou moeten zijn maar niet gesloten is.",
							ref: "BSTTI#14929",
							comment: "Conditie: _lfv_rvv.#observeerbaar = ja;Waarde: #doel_vergrendeling = vergrendeld && _lfv_rvv.#deur_gesloten[i] = nee",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.observeerbaar == "ja" ? this.doel_vergrendeling == "vergrendeld" && checkOne(this.lfv_RijVanVluchtdeuren_Verkeersbuis, "deur_gesloten", "nee") : "";//CHECK: waarde bepaling.
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_RijVanVergrendelbareVluchtdeuren_Verkeersbuis.bestuurbaar == "nee" && this.lfv_RijVanVergrendelbareVluchtdeuren_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_RijVanVergrendelbareVluchtdeuren_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_RijVanVergrendelbareVluchtdeuren_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						TransitiestatusRijvanVluchtDeurVergrendeling: {
							title: "Transitie status rijvanvluchtdeur vergrendeling",
							description: "Meldt de huidige status van de vergrendeling van de rij van vluchtdeuren.",
							ref: "BSTTI#9305",
							comment: "Status: #transitiestatus_vergrendeling",
							type: "status_melding",
							enum: { bereikt: "Bereikt", niet_bereikt: "Niet bereikt", in_transitie: "In transitie" },
							get: function () {
								return this.transitiestatus_vergrendeling;
							},
						},
						Alarm_RijvanVluchtDeurVergrendelingBereiktFunctieStatusNiet: {
							title: "Alarm rijvanvluchtdeur vergrendeling bereikt functie status niet",
							description: "Geeft aan dat de laatste vergrendel/ontgrendel-actie op de vergrendelbare vluchtdeuren niet op tijd doorgevoerd kon worden.",
							ref: "BSTTI#9319",
							comment: "Conditie: #transitiestatus_vergrendeling = niet_bereikt",
							type: "deelsysteem_alarm",
							enum: { ja: "Alarm rijvanvluchtdeur vergrendeling bereikt functie status niet", nee: "" },
							get: function () {
								return this.transitiestatus_vergrendeling == "niet_bereikt";
							},
						},
						BedieningswijzeRijvanVluchtDeurVergrendeling: {
							title: "Bedieningswijze rijvan vluchtdeur vergrendeling",
							description: "Geeft aan dat de laatste vergrendel/ontgrendel-actie op de vergrendelbare vluchtdeuren niet op tijd doorgevoerd kon worden.",
							ref: "BSTTI#11522",
							comment: "Status: #bedieningswijze",
							type: "status_melding",
							enum: { hand: "hand", auto: "Auto" },//CHECK: klopt dit?
							get: function () {
								return this.bedieningswijze;
							},
						},
						BeschikbaarheidRijvanVluchtDeurVergrendeling: {
							title: "Beschikbaarheid rijvanVluchtdeur vergrendeling",
							description: "Meldt de veranderingen van de beschikbaarheid status van deze functie.",
							ref: "BSTTI#9320",
							comment: "Status: #beschikbaarheid",
							type: "status_melding",
							enum: { beschikbaar: "beschikbaar", niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },//CHECK: klopt dit?
							get: function () {
								return this.beschikbaarheid;
							},
						},
						Storing_AfwijkendeStand: {
							title: "Storing afwijkendeStand",
							description: "Geeft aan dat een vluchtdeurvergrendeling in een afwijkende stand staat. De signalering wordt gegeven als een deur vergrendeld zou moeten zijn maar zelfs niet gesloten is.Merk op dat alle gevallen van niet gesloten vluchtdeuren met het alarm van #9173 gemeld",
							ref: "BSTTI#9745",
							comment: "Conditie: #vergrendeld_maar_niet_gesloten = ja",
							type: "deelsysteem_storing",
							enum: { ja: "Storing afwijkendeStand", nee: "" },
							get: function () {
								return this.vergrendeld_maar_niet_gesloten == "ja";
							},
						},
					},
					operations: {
						// Bedieningen
						SetOpAutobediening: {
							stereotype: "bediening",
							title: "Setop auto bediening",
							description: "Zet de vergrendeling op autobediening en voer de instelling van autobediening door. *HandhaafInstellingen zorgt ervoor dat de instellingen worden toegepast op de LFV.",
							ref: "BSTTI#9752",
							comment: "Conditie: *;Acties: #bedieningswijze := auto",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bedieningswijze = auto;//CHECK: Actie bepaling
							},
						},
						SetOpHandbediening: {
							stereotype: "bediening",
							title: "Setop hand bediening",
							description: "Zet de vergrendeling op handbediening. *HandhaafInstellingen zorgt ervoor dat de instellingen worden toegepast op de LFV.",
							ref: "BSTTI#9733",
							comment: "Conditie: #bedieningswijze <> hand;Acties: #hand_stand := #auto_stand;#bedieningswijze := hand",
							conditie: function () {
								return this.bedieningswijze != hand;
							},
							em: function () {
								this.hand_stand = auto_stand;
								this.bedieningswijze = hand;
							},
						},
						SetHandStand: {
							stereotype: "bediening",
							title: "Set hand stand",
							description: "Stelt de hand-stand van de vergrendeling in. *HandhaafInstellingen zorgt ervoor dat de instellingen worden toegepast op de LFV, als #bedieningswijze=hand.",
							ref: "BSTTI#6761",
							comment: "Conditie: *Acties: #hand_stand:= stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.hand_stand = stand;
							},
						},
						// Besturingen
						SetOpAutobediening: {
							stereotype: "bediening",
							title: "Setop auto bediening",
							description: "Stelt de auto-stand van de vergrendeling in. *HandhaafInstellingen zorgt ervoor dat de instellingen worden toegepast op de LFV, als #bedieningswijze=auto.",
							ref: "BSTTI#9312",
							comment: "Conditie: *;Acties: #auto_stand := stand",
							conditie: function () {
								return true;
							},
							em: function () {
								this.auto_stand = stand;
							},
						},
						// Autonome processen
						HandhaafInstellingen: {
							stereotype: "autonoom_proces",
							title: "Bewaak rook detecties",
							description: "Zorgt dat de hand of auto instellingen worden gehandhaafd afhankelijk van de status waarin de LFV zich bevindt. Dit autonome proces draagt er ook zorg voor dat bij de overgang van niet bestuurbaarheid naar bestuurbaarheid het juiste gedrag weergegeven wordt.",
							ref: "BSTTI#9322",
							comment: "Conditie: #beschikbaarheid <> niet_beschikbaar &&(( #bedieningswijze = hand && #hand_stand = vergrendeld ) ||( #bedieningswijze = auto && #auto_stand = vergrendeld ));Acties: IF ( #doel_vergrendeling <> vergrendeld) THEN;#doel_vergrendeling := vergrendeld;#tijdstip_doel_vergrendeling := huidige_tijd;END_IF;_lfv_rvv.Vergrendel();Conditie: #beschikbaarheid <> niet_beschikbaar && (( #bedieningswijze = hand && #hand_stand = ontgrendeld ) || ( #bedieningswijze = auto && #auto_stand = ontgrendeld ));Acties: IF ( #doel_vergrendeling <> ontgrendeld) THEN;#doel_vergrendeling := ontgrendeld;#tijdstip_doel_vergrendeling := huidige_tijd END_IF;_lfv_rvv.Ontgrendel()",
							js: function () {
								//CHECK: hoe te vertallen naar javascript?
							},
						},
					},
				},
				sf_VluchtdeurVergrendeling_Verkeersbuis: {
					naam: "Subfunctie VluchtdeurVergrendeling",
					hoortbij: "Verkeersbuis",
					titel: "Vluchtdeurvergrendeling",
					properties: {
						// Configuratie-elementen
						lfv_RijVanVergrendelbareVluchtdeuren_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV Rij van vergrendelbare vluchtdeuren Verkeersbuis",
							description: "De LFV Rij van Vergrendelbare Vluchtdeuren Verkeersbuis. Merk op dat de besturing voor zover overeenkomend met een Rij van Vluchtdeuren in deze basisfunctie niet wordt aangesproken. Dit wordt vanuit de basisfunctie Rij van Vluchtdeuren gedaan.",
							ref: "BSTTI#7240",
							type: "selectitem",
							class: "",
						},
						deur_index: {
							stereotype: "configuratie_element",
							title: "Deur index",
							description: "De index in de toestandsvariabele #deur_gesloten in _lfv_rvv.",
							ref: "BSTTI#9725",
							type: "number",
							class: "",
						},
						// Variabelen
						status_vluchtdeurvergrendeling: {
							stereotype: "variabele",
							title: "Status vluchtdeur vergrendeling",
							description: "Geeft de status van de vergrendeling per vluchtdeur.",
							ref: "BSTTI#6769",
							comment: "Conditie: _lfv_rvv.#observeerbaar = ja && _lfv_rvv.#vergrendeld[_deur_index] = ja;Waarde: vergrendeld;Conditie: _lfv_rvv.#observeerbaar = ja && _lfv_rvv.#vergrendeld[_deur_index] = nee;Waarde: ontgrendeld",
							enum: { vergrendeld: "Vergrendeld", ontgrendeld: "Ontgrendeld" },
							get: function () {
								return this.lfv_RijVanVluchtdeuren_Verkeersbuis.observeerbaar == "ja" && this.lfv_RijVanVluchtdeuren_Verkeersbuis.vergrendeld[deur_index] == "ja" ? "vergrendeld" : this.lfv_RijVanVluchtdeuren_Verkeersbuis.observeerbaar == "ja" && this.lfv_RijVanVluchtdeuren_Verkeersbuis.vergrendeld[deur_index] == "nee" ? "ontgrendeld" : ""; //CHECK: waarde bepaling.
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.sf_VluchtdeurVergrendeling_Verkeersbuis.bestuurbaar == "nee" && this.sf_VluchtdeurVergrendeling_Verkeersbuis.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.sf_VluchtdeurVergrendeling_Verkeersbuis.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.sf_VluchtdeurVergrendeling_Verkeersbuis.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						StatusVluchtDeurVergrendeling: {
							title: "Status vluchtDeur vergrendeling",
							description: "Meldt de huidige status van de vluchtdeurvergrendeling.",
							ref: "BSTTI#6765",
							comment: "Status: #status_vluchtdeurvergrendeling",
							type: "status_melding",
							enum: { vergrendeld: "Vergrendeld", ontgrendeld: "Ontgrendeld", gedeeltelijk_vergrendeld: "Gedeeltelijk vergrendeld" },
							get: function () {
								return this.status_vluchtdeurvergrendeling;
							},
						},
					},
				},
				// Vluchtdeurindicatie
				bf_Vluchtdeurindicatie_Verkeersbuis: {
					naam: "Basisfunctie Vluchtdeurindicatie",
					hoortbij: "Verkeersbuis",
					titel: "Vluchtdeurindicatie",
					properties: {
						// Configuratie-elementen
						sf_contourverlichting_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Contourverlichting Verkeersbuis",
							description: "De subfunctie Contourverlichting binnen de functie Vluchtdeurindicatie.",
							ref: "BSTTI#16044",
							type: "selectitem",
							class: "",
						},
						sf_AlleGeluidsbakensInBuis_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Alle geluidsbakensinbuis van de verkeersbuis",
							description: "De subfunctie AlleGeluidsbakensInBuis binnen de functie Vluchtdeurindicatie.",
							ref: "BSTTI#16042",
							type: "selectitem",
							class: "",
						},
						sf_VerlichtingPerVluchtdeur_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Verlichting per vluchtdeur",
							description: "De lijst van instanties van de subfunctie VerlichtingPerVluchtDeur binnen de functie Vluchtdeurindicatie.",
							ref: "BSTTI#16353",
							type: "selectitem",
							class: "",
						},
						sf_DynamischeVluchtrouteIndicatie_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Dynamische vluchtroute indicatie",
							description: "De instantie van de subfunctie DynamischeVluchtrouteIndicatieVerkeersbuis binnen de functie Vluchtdeurindicatie. Bij het vluchtconcept door een middentunnelkanaal met kopdeuren is deze waarde 0, bij andere vluchtconcepten is deze waarde 1.",
							ref: "BSTTI#17423",
							type: "selectitem",
							class: "",
							value: [],
						}
					},
				},
				sf_ContourVerlichting_Verkeersbuis: {
					naam: "Subfunctie Contourverlichting",
					hoortbij: "Verkeersbuis",
					titel: "Contourverlichting",
					properties: {
						// Configuratie-elementen
						lfv_Contourverlichting_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV contourverlichting Verkeersbuis",
							description: "De instantie van de component Contourverlichting van LFV Vluchtdeurindicatie Verkeersbuis voor de verkeerbuis.",
							ref: "BSTTI#13869",
							type: "selectitem",
							class: "",
						},
						max_transitietijd_cv: {
							stereotype: "configuratie_element",
							title: "Maximum transitietijd contourverlichting",
							description: "De maximale tijd dat een transitie van contourverlichting mag duren.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#9769",
							type: "number",
							class: "",
						},
						// Variabelen
						bedieningswijze_contourverlichting: {
							stereotype: "configuratie_element",
							title: "Bedieningswijze contourverlichting",
							description: "De huidige bedieningswijze van contourverlichting.",
							ref: "BSTTI#9794",
							comment: "Init: hand",
							enum: { hand: "Hand", auto: "Auto" },
							initdefaultvalue: "hand",
						},
						auto_stand_contourverlichting: {
							stereotype: "configuratie_element",
							title: "Auto stand contourverlichting",
							description: "De stand die contourverlichting in moet nemen als #bedieningswijze_contourverlichting =auto.",
							ref: "BSTTI#9795",
							comment: "Init: hand",
							enum: { aan: "Aan", uit: "Uit" },
						},
						hand_stand_contourverlichting: {
							stereotype: "configuratie_element",
							title: "Hand stand contourverlichting",
							description: "De stand die contourverlichting in moet nemen als #bedieningswijze_contourverlichting = hand.",
							ref: "BSTTI#9796",
							comment: "Init: init_patroon(#status_contourverlichting <> ongeldig, #status_contourverlichting)",
							enum: { aan: "Aan", uit: "Uit" },
							initdefaultvalue: function () {
								return this.status_contourverlichting != "ongeldig" ? this.status_contourverlichting : "";
							},
						},
						beschikbaarheid_contourverlichting: {
							stereotype: "variabele",
							title: "Beschikbaarheid contourverlichting",
							description: "Geeft de beschikbaarheid van de contourverlichting aan.",
							ref: "BSTTI#9797",
							comment: "Conditie: _lfv_vi_contourverlichting.#bestuurbaar = ja && _lfv_vi_contourverlichting.#storingen = {} && #transitiestatus_contourverlichting <> niet_bereikt;Waarde: beschikbaar;Conditie: _lfv_vi_contourverlichting.#bestuurbaar = nee || #transitiestatus_contourverlichting = niet_bereikt;Waarde: niet_beschikbaar;Conditie: overige situaties;Waarde: beperkt_beschikbaar",
							enum: { beschikbaar: "Beschikbaar", niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return this.lfv_Vluchtdeurindicatie_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Vluchtdeurindicatie_Verkeersbuis.storingen.includes("") && this.transitiestatus_contourverlichting != "niet_bereikt" ? "beschikbaar" : this.lfv_Vluchtdeurindicatie_Verkeersbuis.bestuurbaar == "nee" || this.transitiestatus_contourverlichting == "niet_bereikt" ? "niet_beschikbaar" : "beperkt_beschikbaar";//CHECK: waarde bepaling.
							},
						},
						status_contourverlichting: {
							stereotype: "variabele",
							title: "Beschikbaarheid contourverlichting",
							description: "Geeft de huidige status van de contourverlichting.",
							ref: "BSTTI#6797",
							comment: "Conditie: _lfv_vi_contourverlichting.#observeerbaar = ja;Waarde: _lfv_vi_contourverlichting.#stand",
							enum: { aan: "Aan", uit: "Uit" },
							get: function () {
								return this.lfv_Vluchtdeurindicatie_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Vluchtdeurindicatie_Verkeersbuis.stand : "";//CHECK: waarde bepaling.
							},
						},
						status_contourverlichting_vluchtdeur: {
							stereotype: "variabele",
							title: "Status contourverlichting vluchtdeur",
							description: "Geeft de lijst van huidige statussen van de contourverlichting per vluchtdeur.",
							ref: "BSTTI#15983",
							comment: "Conditie: _lfv_vi_contourverlichting.#observeerbaar = ja;Waarde: _lfv_vi_contourverlichting.#status",
							enum: { aan: "Aan", uit: "Uit", storing: "Storing" },
							get: function () {
								return this.lfv_Vluchtdeurindicatie_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Vluchtdeurindicatie_Verkeersbuis.staus : "";//CHECK: waarde bepaling.
							},
						},
						transitiestatus_tijdstip_cv: {
							stereotype: "variabele",
							title: "transitiestatus tijdstip contourverlichting",
							description: "Het tijdstip waarop de huidige transitiestatus-waarde is bereikt.",
							ref: "BSTTI#9992",
							comment: "Init: 0",
							enum: {},
							initdefaultvalue: "0",
						},
						transitiestatus_contourverlichting: {
							stereotype: "variabele",
							title: "Transitiestatus contourverlichting",
							description: "Geeft de lijst van huidige statussen van de contourverlichting per vluchtdeur.",
							ref: "BSTTI#9798",
							comment: "Conditie: *;Waarde: transitiestatus_patroon ((#bedieningswijze_contourverlichting= auto && #status_contourverlichting = #auto_stand_contourverlichting) || (#bedieningswijze_contourverlichting= hand && #status_contourverlichting = #hand_stand_contourverlichting),IF #bedieningswijze_contourverlichting = auto THEN #auto_stand_contourverlichting;ELSIF #bedieningswijze_contourverlichting = hand THEN #hand_stand_contourverlichting;END_IF,#transitiestatus_tijdstip_cv, _max_transitietijd_cv )",
							enum: { aan: "Aan", uit: "Uit", storing: "Storing" },
							get: function () {//CHECK: Hoe te vertallen naar javascript
								//return (this.bedieningswijze_contourverlichting == "auto" && this.status_contourverlichting == "auto_stand_contourverlichting") || (this.bedieningswijze_contourverlichting == "hand" && this.status_contourverlichting == "hand_stand_contourverlichting")? this.bedieningswijze_contourverlichting == "auto"? "auto_stand_contourverlichting":this.bedieningswijze_contourverlichting == "hand"? "hand_stand_contourverlichting": "";.
							},
						},
					},
					operations: {
						// Bedieningen
						SetContourverlichtingOpAutoBediening: {
							stereotype: "bediening",
							title: "Set contour verlichting op auto bediening",
							description: "Zet contourverlichting op autobediening en voer de instelling van autobediening voor de contourverlichting door.",
							ref: "BSTTI#6800",
							comment: "Conditie: *;Acties: #bedieningswijze_contourverlichting := auto",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bedieningswijze_contourverlichting = auto;
							},
						},
						SetContourverlichtingOpHandbediening: {
							stereotype: "bediening",
							title: "Set contour verlichting op hand bediening",
							description: "Zet contourverlichting op handbediening.",
							ref: "BSTTI#9801",
							comment: "Conditie: #bedieningswijze_contourverlichting <> hand;Acties: #hand_stand_contourverlichting := #auto_stand_contourverlichting;#bedieningswijze_contourverlichting:= hand",
							conditie: function () {
								return this.bedieningswijze_contourverlichting != "hand";
							},
							em: function () {
								this.hand_stand_contourverlichting = this.auto_stand_contourverlichting;
								this.bedieningswijze_contourverlichting == "hand";
							},
						},
						SetContourverlichtingHandStand: {
							stereotype: "bediening",
							title: "Set contour verlichting hand stand",
							description: "Stel de stand die contourverlichting moet innemen als #bedieningswijze=hand op de aangegeven waarde.",
							ref: "BSTTI#6799",
							comment: "Conditie: *;Acties: #hand_stand_contourverlichting := stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.hand_stand_contourverlichting = "stand";
							},
						},
						//Besturingen
						SetContourverlichtingAutoStand: {
							stereotype: "bediening",
							title: "Set contourverlichting auto stand",
							description: "Stel de stand die contourverlichting moet innemen als #bedieningswijze=auto op de aangegeven waarde.",
							ref: "BSTTI#9803",
							comment: "Conditie: *;Acties: #auto_stand_contourverlichting := stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.auto_stand_contourverlichting = stand;
							},
						},
					},
				},
				sf_VerlichtingPerVluchtdeur_Verkeersbuis: {
					naam: "Subfunctie VerlichtingPerVluchtdeur",
					hoortbij: "Verkeersbuis",
					titel: "Verlichting vluchtdeur",
					properties: {
						// Configuratie-elementen
						sf_contourverlichting_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "sf contourverlichting Verkeersbuis",
							description: "De subfunctie Contourverlichting binnen de functie Vluchtdeurindicatie.",
							ref: "BSTTI#10075",
							type: "selectitem",
							class: "",
						},
						vluchtdeur_index: {
							stereotype: "configuratie_element",
							title: "Vluchtdeur index",
							description: "De index van de vluchtdeur, overeenkomend met de index van het bijbehorende geluidsbaken in _sf_geluidsbaken[].",
							ref: "BSTTI#16351",
							type: "number",
							class: "",
						},
						//Variabelen
						status_contourverlichting_vluchtdeur: {
							stereotype: "configuratie_element",
							title: "Doel stand",
							description: "Geeft aan of het geluidsbaken gemute is door omroep.",
							ref: "BSTTI#9799",
							comment: "Conditie: *Waarde: _sf_contourverlichting.#status_contourverlichting_vluchtdeur[ _vluchtdeur_index ]",
							enum: { aan: "Aan", uit: "Uit", storing: "Storing" },
							get: function () {//CHECK: Hoe vertallen we dit naar javascript
								return this.sf_contourverlichting_Verkeersbuis.status_contourverlichting_vluchtdeur[_vluchtdeur_index];
							},
						},
					},
				},
				sf_Geluidsbakens_Verkeersbuis: {
					naam: "Subfunctie Geluidsbaken",
					hoortbij: "Verkeersbuis",
					titel: "Geluidsbakens",
					properties: {
						// Configuratie-elementen
						max_transitietijd_gb: {
							stereotype: "configuratie_element",
							title: "Maximale transitietijd van geluidsbakens",
							description: "De maximale tijd dat een transitie van geluidsbakens mag duren. Deze maximale tijd moet voor alle geluidsbakens in deze buis gelijk gekozen worden.Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#9770",
							type: "number",
							class: "",
						},
						lfv_Geluidsbaken_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV geluidsbaken verkeersbuis",
							description: "De component Geluidsbaken binnen de functie Vluchtdeurindicatie voor dit geluidsbaken.",
							ref: "BSTTI#14874",
							type: "selectitem",
							class: "",
						},
						//variabelen
						geluidsbaken_muted: {
							stereotype: "configuratie_element",
							title: "Geluidsbaken muted",
							description: "Geeft aan of het geluidsbaken gemute is door omroep.",
							ref: "BSTTI#10868",
							comment: "Init: nee",
							enum: { ja: "Ja", nee: "Nee" },
							initdefaultvalue: "nee",
						},
						doel_stand: {
							stereotype: "configuratie_element",
							title: "Doel stand",
							description: "Geeft aan of het geluidsbaken gemute is door omroep.",
							ref: "BSTTI#16059",
							comment: "Conditie: #auto_stand_geluidsbaken = aan && #geluidsbaken_muted = nee;Waarde: aan;Conditie: #auto_stand_geluidsbaken = uit || #geluidsbaken_muted = ja;Waarde: uit",
							enum: { aan: "Aan", uit: "Uit" },
							get: function () {//CHECK: klopt benaming auto_stand_geluidsbaken? in sf_AlleGeluidsbakensInBuis_Verkeersbuis is gedefineerd als auto_stand_geluidsbakens
								return this.auto_stand_geluidsbakens == "aan" && this.geluidsbaken_muted == "nee" ? "aan" : this.auto_stand_geluidsbakens == "uit" || this.geluidsbaken_muted == "ja" ? "uit" : "";
							},
						},
						transitiestatus_tijdstip_gb: {
							stereotype: "configuratie_element",
							title: "Transitiestatus tijdstip geluidsbaken",
							description: "Het tijdstip waarop de huidige transitiestatus-waarde is bereikt.",
							ref: "BSTTI#9993",
							comment: "Init: 0",
							enum: {},
							initdefaultvalue: "0",
						},
						transitiestatus_geluidsbaken: {
							stereotype: "configuratie_element",
							title: "Transitiestatus geluidsbaken",
							description: "",
							ref: "BSTTI#9814",
							comment: "Conditie: *;Waarde: transitiestatus_patroon(#doel_stand = #status_geluidsbaken,#doel_stand,#transitiestatus_tijdstip_gb,_max_transitietijd_gb )",
							enum: { bereikt: "Bereikt", niet_bereikt: "Niet bereikt", in_transitie: "In transitie" },
							get: function () {//CHECK: hoe vertallen we dit naar javascript?
								//return this.doel_stand =="aan" = this.status_geluidsbaken? this.doel_stand:this.transitiestatus_tijdstip_gb = max_transitietijd_gb:"";
							},
						},
						status_geluidsbaken: {
							stereotype: "configuratie_element",
							title: "Doel stand",
							description: "Geeft aan of het geluidsbaken gemute is door omroep.",
							ref: "BSTTI#7691",
							comment: "Conditie: _lfv_vi_geluidsbaken.#observeerbaar = ja;Waarde: _lfv_vi_geluidsbaken.#stand",
							enum: { aan: "Aan", uit: "Uit" },
							get: function () {
								return this.lfv_Geluidsbaken_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Geluidsbaken_Verkeersbuis.stand : "";
							},
						},
						beschikbaarheid_geluidsbaken: {
							stereotype: "configuratie_element",
							title: "Doel stand",
							description: "Geeft aan of het geluidsbaken beschikbaar is.",
							ref: "BSTTI#16325",
							comment: "CHECK:Onderstaande variabelen zijn geen onderdeel van het externe koppelvlak van 3B:",
							enum: { beschikbaar: "Beschikbaar", niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },

						},
						auto_stand_geluidsbaken: {
							stereotype: "configuratie_element",
							title: "Auto stand geluidsbaken",
							description: "De stand die het geluidsbaken, los van eventuele muting, in moet nemen.",
							ref: "BSTTI#16680",
							comment: "Conditie: _lfv_vi_geluidsbaken.#bestuurbaar = ja && _lfv_vi_geluidsbaken.#storingen = {} && #transitiestatus_geluidsbaken <> niet_bereikt;Waarde: beschikbaar;Conditie: _lfv_vi_geluidsbaken.#bestuurbaar = nee || #transitiestatus_geluidsbaken = niet_bereikt;Waarde: niet_beschikbaar;Conditie: overige situaties;Waarde: beperkt_beschikbaar",
							enum: { aan: "Aan", uit: "Uit" },
							get: function () {
								return this.lfv_Geluidsbaken_Verkeersbuis.bestuurbaar == "ja" && this.lfv_Geluidsbaken_Verkeersbuis.storingen.includes("") && this.transitiestatus_geluidsbaken != "niet_bereikt" ? "beschikbaar" : this.lfv_Geluidsbaken_Verkeersbuis.bestuurbaar == "nee" || this.transitiestatus_geluidsbaken == "niet_bereikt" ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
					},
					operations: {
						// Bedieningen
						SetGeluidsbakenMuteStand: {
							stereotype: "bediening",
							title: "Set geluidsbaken mute stand",
							description: "Stelt in of het geluidsbaken moet worden gemute (stand = 'ja') of niet (stand = 'nee'). Deze stand wordt via #doel_stand en autonoom proces *HandhaafInstellingenGeluidsbaken geëffectueerd. Deze besturing wordt gebruikt voor het bij aanvang muten en na afloop demuten van de geluidsbakens in de sectie waar de omroep tijdelijk actief is.",
							ref: "BSTTI#7695",
							comment: "Conditie: *;Acties: #geluidsbaken_muted := stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.geluidsbaken_muted = stand;
							},
						},
					},
				},
				sf_AlleGeluidsbakensInBuis_Verkeersbuis: {
					naam: "Subfunctie AlleGeluidsbakensInBuis",
					hoortbij: "Verkeersbuis",
					titel: "Alle geluidsbakens in buis",
					properties: {
						// Configuratie-elementen
						lfv_Vluchtdeurindicatie_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV vluchtdeurindicatie Verkeersbuis",
							description: "De LFV Vluchtdeurindicatie voor deze verkeersbuis",
							ref: "BSTTI#16667",
							type: "selectitem",
							class: "",
						},
						sf_geluidsbaken_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "sf geluidsbaken verkeersbuis",
							description: "De lijst van instanties van de subfunctie Geluidsbaken binnen de basisfunctie Vluchtdeurindicatie Verkeerbuis.",
							ref: "BSTTI#16188",
							type: "selectitem",
							class: "",
							value: [],
						},
						// Variabelen
						auto_stand_geluidsbakens: {
							stereotype: "configuratie_element",
							title: "Auto stand geluidsbakens",
							description: "De stand die alle geluidsbakens in de verkeersbuis in moeten nemen (los van eventuele muting) als de bedieningswijze voor geluidsbakens auto is; de handmatige stand is altijd uit.",
							ref: "BSTTI#9811",
							comment: "",
							enum: { aan: "Aan", uit: "Uit" },
						},
						geluidsbaken_boodschap: {
							stereotype: "configuratie_element",
							title: "Geluidsbaken boodschap",
							description: "Het bericht wat de geluidsbakens aangeven als deze aan staan.",
							ref: "BSTTI#13858",
							comment: "Init: standaard_bericht",
							enum: { standaard_bericht: "Standaard bericht", ontruiming_bij_vergrendelde_vluchtdeur: "Ontruiming bij vergrendelde vluchtdeur", ontruiming_bij_ontgrendelde_vluchtdeur: "Ontruiming bij ontgrendelde vluchtdeur" },
							initdefaultvalue: "standaard_bericht",
						},
						bedieningswijze_geluidsbakens: {
							stereotype: "configuratie_element",
							title: "Bedieningswijze geluidsbakens",
							description: "De huidige bedieningswijze van de geluidsbakens.",
							ref: "BSTTI#9812",
							comment: "Init: hand",
							enum: { hand: "Hand", auto: "Auto" },
							initdefaultvalue: "hand",
						},
						beschikbaarheid_geluidsbakens: {
							stereotype: "configuratie_element",
							title: "Beschikbaarheid geluidsbakens",
							description: "Geeft aan of alle geluidsbakens beschikbaar zijn.",
							ref: "BSTTI#9815",
							comment: "Conditie: _sf_geluidsbaken[].#beschikbaarheid_geluidsbaken = beschikbaar;Waarde: beschikbaar;Conditie: _sf_geluidsbaken[].#beschikbaarheid_geluidsbaken = niet_beschikbaar;Waarde: niet_beschikbaar;Conditie: overige situaties;Waarde: beperkt_beschikbaar",
							enum: { beschikbaar: "Beschikbaar", niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return checkAll(this.sf_geluidsbaken_Verkeersbuis, "beschikbaarheid_geluidsbakens", "beschikbaar") ? "beschikbaar" : checkAll(this.sf_geluidsbaken_Verkeersbuis, "beschikbaarheid_geluidsbakens", "niet_beschikbaar") ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
						opgenomen_boodschap_id: {
							stereotype: "configuratie_element",
							title: "Opgenomen boodschap id",
							description: "Geeft aan of alle geluidsbakens beschikbaar zijn.",
							ref: "BSTTI#16323",
							comment: "Conditie: _lfv_vi.#observeerbaar = ja;Waarde: _lfv_vi.#opgenomen_boodschap_id",
							enum: { geen: "Geen", standaard_bericht: "Standaard bericht", ontruiming_bij_vergrendelde_vluchtdeur: "Ontruiming bij vergrendelde vluchtdeur", ontruiming_bij_ontgrendelde_vluchtdeur: "Ontruiming bij ontgrendelde vluchtdeur" },
							get: function () {
								return this.lfv_Vluchtdeurindicatie_Verkeersbuis.observeerbaar == "ja" ? this.lfv_Vluchtdeurindicatie_Verkeersbuis.opgenomen_boodschap_id : "";
							},
						},
					},
					operations: {
						// Bedieningen
						SetAlleGeluidsbakensOpAutoBediening: {
							stereotype: "bediening",
							title: "Set alle geluidsbakens op auto bediening",
							description: "Zet geluidsbakens op autobediening en voer de instelling van autobediening voor de geluidsbakens door.",
							ref: "BSTTI#6819",
							comment: "Conditie: *;Acties: #bedieningswijze_geluidsbakens := auto",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bedieningswijze_geluidsbakens = "auto";
							},
						},
						MuteAlleGeluidsbakens: {
							stereotype: "bediening",
							title: "Mute alleGeluidsbakens",
							description: "Zet geluidsbakens op handbediening en mute alle bakens.",
							ref: "BSTTI#6821",
							comment: "Conditie: *;Acties: #bedieningswijze_geluidsbakens := hand",
							conditie: function () {
								return true;
							},
							em: function () {
								return this.bedieningswijze_geluidsbakens = "hand";
							},
						},
						//Besturingen
						SetGeluidsbakensAutoStand: {
							stereotype: "bediening",
							title: "Set geluidsbakens auto stand",
							description: "Stelt de stand in die de geluidsbakens moeten innemen volgens de huidige State van de verkeersbuis.",
							ref: "BSTTI#9823",
							comment: "Conditie: *;Acties: #auto_stand_geluidsbakens := stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.auto_stand_geluidsbakens = stand;
							},
						},
						SetGeluidsbakenBoodschap: {
							stereotype: "bediening",
							title: "Set geluidsbaken boodschap",
							description: "Stelt de boodschap in die door de geluidsbakens moet worden weergegeven.",
							ref: "BSTTI#13859",
							comment: "Conditie: *;Acties: #geluidsbaken_boodschap := boodschap",
							conditie: function () {
								return true;
							},
							em: function (boodschap) {//CHECK: is de parameter boodschap of geluidsbaken_boodschap.
								this.geluidsbaken_boodschap = boodschap;
							},
						},
						SpeelOpgenomenBoodschap: {
							stereotype: "bediening",
							title: "Speel opgenomen boodschap",
							description: "Stelt de boodschap in die door de geluidsbakens moet worden weergegeven.",
							ref: "BSTTI#13859",
							comment: "Conditie: _lfv_vi.#bestuurbaar = ja;Acties: _lfv_vi.SpeelOpgenomenBoodschap( boodschap )",
							conditie: function () {
								return this.lfv_Vluchtdeurindicatie_Verkeersbuis.bestuurbaar = "ja";
							},
							em: function () {//CHECK:
								this.lfv_Vluchtdeurindicatie_Verkeersbuis.SpeelOpgenomenBoodschap(boodschap);
							},
						},
					},
				},
				sf_DynamischeVluchtrouteIndicatie_Verkeersbuis: {
					naam: "Subfunctie DynamischeVluchtrouteIndicatie",
					hoortbij: "Verkeersbuis",
					titel: "Dynamische vluchtroute indicatie",
					properties: {
						// Configuratie-elementen
						lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "LFV dynamische vluchtrouteindicatie verkeersbuis",
							description: "De component DynamischeVluchtrouteIndicatie binnen de functie Vluchtdeurindicatie.",
							ref: "BSTTI#17427",
							type: "selectitem",
							class: "",
						},
						max_transitietijd_dVIV: {
							stereotype: "configuratie_element",
							title: "Maximale transitietijd van een dynamische vluchtrouteindicatie",
							description: "De maximale tijd dat een transitie van een dynamische vluchtrouteindicatie mag duren. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#17428",
							type: "selectitem",
							class: "",
						},
						//Variabelen
						stand_dVIV: {
							stereotype: "configuratie_element",
							title: "Stand dynamische vluchtrouteindicatie",
							description: "De huidige stand van de vluchtrouteindicatie.",
							ref: "BSTTI#17425",
							comment: "Conditie: _lfv_dVIV.#observeerbaar = ja;Waarde: _lfv_dVIV.#stand",
							enum: { exit_overzijde: "Exit overzijde", oplopend: "Oplopend", aflopend: "Aflopend", uit: "Uit" },
							get: function () {
								return this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.observeerbaar == "ja" ? this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.stand : "";
							},
						},
						status_dVIV: {
							stereotype: "configuratie_element",
							title: "Status dynamische vluchtrouteindicatie",
							description: "De status van de vluchtrouteindicatie.",
							ref: "BSTTI#17459",
							comment: "Conditie: _lfv_dVIV.#observeerbaar = ja && _lfv_dVIV.#status[i] = storing;Waarde: storing;Conditie: _lfv_dVIV.#observeerbaar = ja && _lfv_dVIV.#stand = exit_overzijde;Waarde: exit_overzijde;Conditie: _lfv_dVIV.#observeerbaar = ja && _lfv_dVIV.#stand = oplopend;Waarde: oplopend;Conditie: _lfv_dVIV.#observeerbaar = ja && _lfv_dVIV.#stand = aflopend;Waarde: aflopend;Conditie: _lfv_dVIV.#observeerbaar = ja && _lfv_dVIV.#stand = uit;Waarde: uit;Conditie: _lfv_dVIV.#observeerbaar = nee;Waarde: storing",
							enum: { exit_overzijde: "Exit overzijde", oplopend: "Oplopend", aflopend: "Aflopend", uit: "Uit", storing: "Storing" },
							get: function () {
								return this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.observeerbaar == "ja" && checkOne(this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis, "status", "Storing") ? "storing" : this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.observeerbaar == "ja" && this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.stand == "exit_overzijde" ? "exit_overzijde" : this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.observeerbaar == "ja" && this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.stand == "oplopend" ? "oplopend" : this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.observeerbaar == "ja" && this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.stand == "aflopend" ? "aflopend" : this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.observeerbaar == "ja" && this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.stand == "uit" ? "uit" : this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.observeerbaar == "nee" ? "storing" : "";
							},
						},
						bedieningswijze_dVIV: {
							stereotype: "configuratie_element",
							title: "Bedieningswijze dynamische vluchtrouteindicatie",
							description: "De huidige bedieningswijze van dynamische vluchtrouteindicatie.",
							ref: "BSTTI#17435",
							comment: "Init: hand",
							enum: { hand: "Hand", auto: "Auto" },
							initdefaultvalue: "hand",
						},
						auto_stand_dVIV: {
							stereotype: "configuratie_element",
							title: "Bedieningswijze dynamische vluchtrouteindicatie auto stand",
							description: "De stand die dynamische vluchtrouteindicatie aan moet nemen als #bedieningswijze_dVIV = auto.",
							ref: "BSTTI#17436",
							comment: "",
							enum: { exit_overzijde: "Exit overzijde", oplopend: "Oplopend", aflopend: "Aflopend", uit: "Uit" },
						},
						hand_stand_dVIV: {
							stereotype: "configuratie_element",
							title: "Status dynamische vluchtrouteindicatie",
							description: "De stand die dynamische vluchtrouteindicatie aan moet nemen als #bedieningswijze_dVIV = hand.",
							ref: "BSTTI#17437",
							comment: "Init: init_patroon(#stand_dVIV <> ongeldig, #stand_dVIV)",
							enum: { exit_overzijde: "Exit overzijde", oplopend: "Oplopend", aflopend: "Aflopend", uit: "Uit" },
							initdefaultvalue: function () {
								return this.stand_dVIV != "ongeldig" ? this.stand_dVIV : "";
							},
						},
						beschikbaarheid_dVIV: {
							stereotype: "configuratie_element",
							title: "Beschikbaarheid dynamische vluchtrouteindicatie",
							description: "Geeft de beschikbaarheid van de dynamische vluchtrouteindicatie aan.",
							ref: "BSTTI#17438",
							comment: "Conditie: _lfv_dVIV.#bestuurbaar = ja && _lfv_dVIV.#storingen = {};Waarde: beschikbaar);Conditie: _lfv_dVIV.#bestuurbaar = nee;Waarde: niet_beschikbaar;Conditie: overige situaties;Waarde: beperkt_beschikbaar",
							enum: { beschikbaar: "Beschikbaar", niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							initdefaultvalue: function () {
								return this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.bestuurbaar == "ja" && this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.storingen.includes("") ? "beschikbaar" : this.lfv_DynamischeVluchtrouteIndicatie_Verkeersbuis.bestuurbaar == "nee" ? "niet_beschikbaar" : "beperkt_beschikbaar";
							},
						},
						transitiestatus_tijdstip_dVIV: {
							stereotype: "configuratie_element",
							title: " dynamische vluchtrouteindicatie",
							description: "Het tijdstip waarop de huidige transitiestatus_waarde van de dynamische vluchtrouteindicatie is bereikt.",
							ref: "BSTTI#17439",
							comment: "Init: 0",
							enum: {},
							initdefaultvalue: "0",
						},
						transitiestatus_dVIV: {
							stereotype: "configuratie_element",
							title: "Transitiestatus dynamische vluchtrouteindicatie",
							description: "",
							ref: "BSTTI#17440",
							comment: "Conditie: *Waarde: transitiestatus_patroon( (#bedieningswijze_dVIV = auto && #stand_dVIV = #auto_stand_dVIV) || (#bedieningswijze_dVIV = hand && #stand_dVIV = #hand_stand_dVIV),IF #bedieningswijze_dVIV = auto THEN #auto_stand_dVIV;ELSIF #bedieningswijze_dVIV = hand THEN #hand_stand_dVIV;END_IF,#transitiestatus_tijdstip_dVIV,_max_transitietijd_dVIV )",
							enum: { bereikt: "Bereikt", niet_bereikt: "Niet beriekt", in_transitie: "In transitie" },
							get: function () {//CHECK: hoe vertallen we dit naar javascript
								//return (this.bedieningswijze_dVIV == "auto" && this.stand_dVIV = this.auto_stand_dVIV) || (this.bedieningswijze_dVIV == "hand" && this.stand_dVIV = this.hand_stand_dVIV):this.bedieningswijze_dVIV = "auto"? this.auto_stand_dVIV: this.bedieningswijze_dVIV = "hand"? this.hand_stand_dVIV;
							},
						},
					},
					operations: {
						// Bedieningen
						SetDVIVOpAutobediening: {
							stereotype: "bediening",
							title: "Set dynamische vluchtrouteindicatie op autobediening",
							description: "Zet dynamische vluchtrouteindicatie op autobediening en voer de instelling van autobediening voor de dynamische vluchtrouteindicatie door.",
							ref: "BSTTI#17430",
							comment: "Conditie: *;Acties: #bedieningswijze_dVIV := auto",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bedieningswijze_dVIV = "auto";
							},
						},
						SetDVIVOpHandbediening: {
							stereotype: "bediening",
							title: "Set dynamische vluchtrouteindicatie op handbediening",
							description: "Zet dynamische vluchtrouteindicatie op handbediening en voer de instelling van handbediening voor de Dynamische vluchtrouteindicatie door.",
							ref: "BSTTI#17447",
							comment: "Conditie: #bedieningswijze_dVIV <> hand;Acties: #hand_stand_dVIV := #auto_stand_dVIV;#bedieningswijze_dVIV := hand",
							conditie: function () {
								return this.bedieningswijze_dVIV != "hand";
							},
							em: function () {
								this.hand_stand_dVIV = this.auto_stand_dVIV;
								this.bedieningswijze_dVIV == "hand";
							},
						},
						SetDVIVHandStand: {
							stereotype: "bediening",
							title: "Set dynamische vluchtrouteindicatie hand stand",
							description: "Stel de stand die dynamische vluchtrouteindicatie moet innemen indien #bedieningswijze_dVIV = hand.",
							ref: "BSTTI#17448",
							comment: "Conditie: *Acties: #hand_stand_dVIV := stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.hand_stand_dVIV = stand;
							},
						},
					},
				},
				// Hulpdienstpaneel
				bf_HulpDienstPaneel_Verkeersbuis: {
					naam: "Basisfunctie Hulpdienstpaneel",
					hoortbij: "Verkeersbuis",
					titel: "Hulpdienstpaneel",
				},
				// Koppeling wisselbaansysteem
				bf_KoppelingWisselbaansysteem_Verkeersbuis: {
					naam: "Basisfunctie Koppeling Wisselbaansysteem",
					hoortbij: "Verkeersbuis",
					titel: "Koppeling wisselbaansysteem",
				},
				// Functies van een dienstgebouw
				// CCTV dienstgebouw
				bf_CCTV_Dienstgebouw: {
					naam: "Basisfunctie CCTV Dienstgebouw",
					hoortbij: "Dienstgebouw",
					titel: "CCTV",
				},
				sf_Kanaal_Dienstgebouw: {
					naam: "Subfunctie Kanaal",
					hoortbij: "Dienstgebouw",
					titel: "Kanaal",
				},
				sf_Camera_Dienstgebouw: {
					naam: "Subfunctie Camera",
					hoortbij: "Dienstgebouw",
					titel: "Camera",
				},
				// Toegang dienstgebouw
				bf_Toegang_Dienstgebouw: {
					naam: "Basisfunctie Toegang Dienstgebouw",
					hoortbij: "Dienstgebouw",
					titel: "Toegang",
				},
				sf_Deur_Dienstgebouw: {
					naam: "Subfunctie Deur Dienstgebouw",
					hoortbij: "Dienstgebouw",
					titel: "Deur",
				},
				// Blusvoorziening dienstgebouw
				bf_Blusvoorziening_Dienstgebouw: {
					naam: "Basisfunctie Blusvoorziening Dienstgebouw",
					hoortbij: "Dienstgebouw",
					titel: "Blusvoorziening",
				},
				// Klimaatregeling dienstgebouw
				bf_Klimaatregeling_Dienstgebouw: {
					naam: "Basisfunctie Klimaatregeling Dienstgebouw",
					hoortbij: "Dienstgebouw",
					titel: "Klimaatregeling",
				},
				// Inbraakalarm dienstgebouw
				bf_Inbraakalarm_Dienstgebouw: {
					naam: "Basisfunctie Inbraakalarm Dienstgebouw",
					hoortbij: "Dienstgebouw",
					titel: "Inbraakalarm",
				},
				// Verlichting dienstgebouw
				bf_Verlichting_Dienstgebouw: {
					naam: "Basisfunctie Verlichting Dienstgebouw",
					hoortbij: "Dienstgebouw",
					titel: "Verlichting",
				},
				// Gebouwbeheersysteem
				cf_Gebouwbeheersysteem: {
					naam: "Coördinerende functie Gebouwbeheersysteem",
					hoortbij: "Dienstgebouw",
					titel: "Gebouwbeheersysteem",
				},
				// Functies van een veilige ruimte
				// Verlichting veilige ruimte
				bf_Verlichting_VeiligeRuimte: {
					naam: "Basisfunctie Verlichting Veilige Ruimte",
					hoortbij: "Veilige ruimte",
					titel: "Verlichting",
					properties: {
						// Configuratie-elementen
						lfv_Verlichting_VeiligeRuimte: {
							stereotype: "configuratie_element",
							title: "LFV Verlichting Veilige Ruimte",
							description: "De LFV Verlichting Veilige Ruimte.",
							ref: "BSTTI#6735",
							type: "selectitem",
							class: "",
						},
						max_transitietijd_vvr: {
							stereotype: "configuratie_element",
							title: "Maximale transitietijd",
							description: "De tijd die een standsverandering van de Verlichting Veilige Ruimte maximaal mag duren. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10041",
							type: "number",
							unit: "s",
							enum: [0, 1, 5, 10],
							min: 0,
							max: 60,
							step: 1,
							initdefaultvalue: "30", // CHECK: is het noodzakelijk om de waarde voor een configuratie-element hier vast te leggen?
						},
						// Variabelen
						bedieningswijze: {
							stereotype: "variabele",
							title: "Bedieningswijze",
							description: "De huidige bedieningswijze van Verlichting Veilige Ruimte.",
							ref: "BSTTI#8805",
							comment: "",
							enum: { hand: "Hand", auto: "Auto" },
							initdefaultvalue: "hand",
						},
						auto_stand: {
							stereotype: "variabele",
							title: "Automatische stand",
							description: "De stand die de Verlichting Veilige Ruimte moet handhaven als #bedieningswijze = auto.",
							ref: "BSTTI#8806",
							comment: "",
							enum: { aan: "Aan", uit: "Uit" },
						},
						hand_stand: {
							stereotype: "variabele",
							title: "Handmatige stand",
							description: "De stand die de Verlichting Veilige Ruimte moet handhaven als #bedieningswijze = hand.",
							ref: "BSTTI#8808",
							comment: "Init: init_patroon(#stand <> ongeldig, #stand)",
							enum: { aan: "Aan", uit: "Uit" },
							initdefaultvalue: function () {
								return this.stand != "ongeldig" ? this.stand : "";
							},
						},
						stand: {
							stereotype: "variabele",
							title: "Stand",
							description: "De huidige stand van de Verlichting Veilige Ruimte.",
							ref: "BSTTI#8826",
							comment: "Conditie: _lfv_vvr.#observeerbaar = ja ; Waarde: _lfv_vvr.#stand",
							get: function () {
								return this.lfv_Verlichting_VeiligeRuimte.observeerbaar == "ja" ? this.lfv_Verlichting_VeiligeRuimte.stand : "";
							},
						},
						beschikbaarheid: {
							stereotype: "variabele",
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van de functie aan.",
							ref: "BSTTI#8825",
							comment: "Conditie: _lfv_vvr.#bestuurbaar = nee || #transitiestatus = niet_bereikt ; Waarde: niet_beschikbaar ; Conditie: _lfv_vvr.#bestuurbaar = ja && #transitiestatus<> niet_bereikt && _lfv_vvr.#storingen = {} ; Waarde: beschikbaar ; Conditie: _lfv_vvr.#bestuurbaar = ja && #transitiestatus<> niet_bereikt && _lfv_vvr.#storingen<> { } ; Waarde: beperkt_beschikbaar",
							enum: { niet_beschikbaar: "Niet_beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
							// CHECK storingen = leeg
							get: function () {
								this.lfv_Verlichting_VeiligeRuimte.bestuurbaar == "nee" || this.transitiestatus == "niet_bereikt" ? "niet_beschikbaar" : this.lfv_Verlichting_VeiligeRuimte.bestuurbaar == "nee" && this.transitiestatus == "niet_bereikt" ? "beschikbaar" : this.lfv_Verlichting_VeiligeRuimte.bestuurbaar == "nee" && this.transitiestatus == "niet_bereikt" && !this.lfv_Verlichting_VeiligeRuimte.storingen.includes("") ? "beperkt_beschikbaar" : "";
							},
						},
						transitiestatus_tijdstip: {
							stereotype: "variabele",
							title: "Tijdstip transitie bereikt",
							description: "Het tijdstip waarop de huidige transitiestatus-waarde van de Verlichting Veilige Ruimte bereikt is.",
							ref: "BSTTI#10042",
							comment: "",
							initdefaultvalue: "0", // CHECK tijdwaarde?
						},
						transitiestatus: {
							stereotype: "variabele",
							title: "Transitiestatus",
							description: "Geeft de transitiestatus van de Verlichting Veilige Ruimte aan.",
							ref: "BSTTI#8828",
							comment: "Conditie: * ; Waarde: transitiestatus_patroon((#bedieningswijze = auto && #stand = #auto_stand) || (#bedieningswijze = hand && #stand = #hand_stand), IF #bedieningswijze = auto THEN #auto_stand ELSIF #bedieningswijze = hand THEN #hand_stand END_IF, #transitiestatus_tijdstip, _max_transitietijd_vvr )",
							enum: { bereikt: "Bereikt", niet_bereikt: "Niet bereikt", in_transitie: "In transitie" },
							get: function () {
								// CHECK hoe gaan we dit patroon in js code omzetten?

							},
						},
						plaatselijk_bediend: {
							stereotype: "variabele",
							title: "Plaatselijk bediend",
							description: "De Verlichting Veilige Ruimte kan plaatselijk bediend worden.",
							ref: "BSTTI#16752",
							comment: "Conditie: * ; Waarde: _lfv_vvr.#bestuurbaar = nee && _lfv_vvr.#reden_niet_bestuurbaar[i] = plaatselijke_bediening",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.lfv_Verlichting_VeiligeRuimte.bestuurbaar == "nee" && this.lfv_Verlichting_VeiligeRuimte.reden_niet_bestuurbaar.includes("plaatselijke_bediening") ? "ja" : "nee";
							},
						},
						// Generieke signaleringen
						Alarm_NietBestuurbaarWegensStoring: {
							title: "Alarm niet bestuurbaar wegens storing",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_alarm te signaleren wanneer deze niet-bestuurbaar is vanwege een storing.",
							ref: "BSTTI#14297",
							comment: "Conditie: _lfv.#bestuurbaar = nee && _lfv.#reden_niet_bestuurbaar[i] = storing",
							type: "deelsysteem_alarm",
							enum: { ja: "Niet bestuurbaar wegens storing", nee: "" },
							get: function () {
								return this.lfv_Verlichting_VeiligeRuimte.bestuurbaar == "nee" && this.lfv_Verlichting_VeiligeRuimte.reden_niet_bestuurbaar.includes("STORING");
							},
						},
						Storing_Algemeen: {
							title: "Storing algemeen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer deze de storing STORING_ALGEMEEN heeft.",
							ref: "BSTTI#16272",
							comment: "Conditie: _lfv.#storingen[i] = STORING_ALGEMEEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing algemeen", nee: "" },
							get: function () {
								return this.lfv_Verlichting_VeiligeRuimte.storingen.includes("STORING_ALGEMEEN");
							},
						},
						Storing_CommunicatieUitgevallen: {
							title: "Storing communicatie uitgevallen",
							description: "Voor elke LFV en elke component dient een instantie van volgende generieke signalering van het type deelsysteem_storing te signaleren wanneer de communicatie tussen LFV-stuurprogramma en de deelinstallatie ter plaatse is uitgevallen (zie BSTTI#3739).",
							ref: "BSTTI#17107",
							comment: "Conditie: _lfv_.#storingen[i] = STORING_COMMUNICATIE_UITGEVALLEN",
							type: "deelsysteem_storing",
							enum: { ja: "Storing communicatie uitgevallen", nee: "" },
							get: function () {
								return this.lfv_Verlichting_VeiligeRuimte.storingen.includes("STORING_COMMUNICATIE_UITGEVALLEN");
							},
						},
						// Specifieke signaleringen
						TransitiestatusVerlichtingVeiligeRuimte: {
							title: "Transitiestatus",
							description: "De transitiestatus van de verlichting veilige ruimte.",
							ref: "BSTTI#8830",
							comment: "Status: #transitiestatus",
							type: "status_melding",
							enum: { bereikt: "Bereikt", in_transitie: "In transitie", niet_bereikt: "Niet bereikt" },
							get: function () {
								return this.transitiestatus;
							},
						},
						Beschikbaarheid: {
							title: "Beschikbaarheid",
							description: "Geeft de beschikbaarheid van de verlichting veilige ruimte weer.",
							ref: "BSTTI#9274",
							comment: "Status: #beschikbaarheid",
							type: "status_melding",
							enum: { niet_beschikbaar: "Niet beschikbaar", beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
							get: function () {
								return this.beschikbaarheid;
							},
						},
						BedieningsStatus: {
							title: "Bedieningsstatus",
							description: "Geeft de bedieningswijze van de verlichting veilige ruimte weer.",
							ref: "BSTTI#8823",
							comment: "Status: #bedieningswijze",
							type: "status_melding",
							enum: { hand: "Hand", auto: "Auto" },
							get: function () {
								return this.bedieningswijze;
							},
						},
						Alarm_BereiktFunctieNiveauNiet_VerlichtingVeiligeRuimte: {
							title: "Alarm bereikt functie niveau niet.",
							description: "Geeft een alarm als de functie niet in staat is op tijd het gevraagde functieniveau te halen.",
							ref: "BSTTI#8832",
							comment: "Conditie: #transitiestatus = niet_bereikt",
							type: "deelsysteem_alarm",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.transitiestatus == "niet_bereikt";
							},
						},
						Alarm_OnderFunctioneelBenodigdeCapaciteit_VerlichtingVeiligeRuimte: {
							title: "Alarm onder functioneel benodigde capaciteit.",
							description: "Geeft een alarm als de functie niet beschikbaar is.",
							ref: "BSTTI#8824",
							comment: "Conditie: #beschikbaarheid = niet_beschikbaar",
							type: "deelsysteem_alarm",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.beschikbaarheid == "niet_beschikbaar";
							},
						},
						PlaatselijkeBedieningsStatus: {
							title: "Plaatselijke bediening status",
							description: "status van de plaatselijke bediening van de verlichting veilige ruimte.",
							ref: "BSTTI#16753",
							comment: "Status: #plaatselijk_bediend",
							type: "status_melding",
							enum: { ja: "Plaatselijk bediend", nee: "Niet plaatselijk bediend" },
							get: function () {
								return this.plaatselijk_bediend;
							},
						},
					},
					operations: {
						// Bedieningen
						SetOpAutobediening: {
							stereotype: "bediening",
							title: "Zet op autobediening",
							description: "Verlichting Veilige Ruimte gaat op autobediening en volgt de instelling voor de autobediening (d.m.v. autonoom proces *HandhaafInstellingen).",
							ref: "BSTTI#8816",
							comment: "Conditie: * ; Acties: #bedieningswijze:= auto",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bedieningswijze = "auto";
							},
						},
						SetOpHandbediening: {
							stereotype: "bediening",
							title: "Zet op handbediening",
							description: "Verlichting Veilige Ruimte gaat op handbediening en volgt de instelling voor de handbediening (d.m.v. autonoom proces *HandhaafInstellingen).",
							ref: "BSTTI#8817",
							comment: "Conditie: #bedieningswijze <> hand ; Acties: #hand_stand:= #auto_stand ; #bedieningswijze:= hand",
							conditie: function () {
								return this.bedieningswijze != "hand";
							},
							em: function () {
								this.hand_stand = this.auto_stand;
								this.bedieningswijze = "hand";
							},
						},
						SetHandbedieningsStand: {
							stereotype: "bediening",
							title: "Zet handbediening stand",
							description: "Zet de hand-stand van Verlichting Veilige Ruimte op de aangegeven stand. Deze stand wordt via autonoom proces *HandhaafInstellingen geëffectueerd.",
							ref: "BSTTI#8837",
							comment: "Conditie: * ; Acties: #hand_stand:= stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.hand_stand = stand;
							},
						},
						// Besturingen
						SetAutobedieningsStand: {
							stereotype: "besturing",
							title: "Zet autobediening stand",
							description: "Zet de auto-stand van Verlichting Veilige Ruimte op de aangegeven stand. Deze stand wordt via autonoom proces *HandhaafInstellingen geëffectueerd.",
							ref: "BSTTI#8818",
							comment: "Conditie: * ; Acties: #auto_stand:= stand",
							conditie: function () {
								return true;
							},
							em: function (stand) {
								this.auto_stand = stand;
							},
						},
						// Autonome processen
						HandhaafInstellingen: {
							stereotype: "autonoom_proces",
							title: "Handhaaf instellingen",
							description: "Zorgt dat de hand- of auto-instellingen worden gehandhaafd afhankelijk van de status waarin de LFV zich bevindt. Dit autonome proces draagt er ook zorg voor dat bij de overgang van niet bestuurbaarheid naar bestuurbaarheid het juiste gedrag vertoond wordt, d.w.z. het gedrag van de stand waarin de functie stond op het moment dat de LFV onbestuurbaar werd.",
							ref: "BSTTI#8820",
							comment: "Conditie: _lfv_vvr.#bestuurbaar = ja && #bedieningswijze = auto && #auto_stand = aan ; Acties: _lfv_vvr.Aan() ; Conditie: _lfv_vvr.#bestuurbaar = ja && #bedieningswijze = auto && #auto_stand = uit ; Acties: _lfv_vvr.Uit() ; Conditie: _lfv_vvr.#bestuurbaar = ja && #bedieningswijze = hand && #hand_stand = aan ; Acties: _lfv_vvr.Aan() ; Conditie: _lfv_vvr.#bestuurbaar = ja && #bedieningswijze = hand && #hand_stand = uit ; Acties: _lfv_vvr.Uit()",
							em: function () {
								if (this.lfv_Verlichting_VeiligeRuimte.bestuurbaar == "ja" && this.bedieningswijze == "auto" && this.auto_stand == "aan") { this.lfv_Verlichting_VeiligeRuimte.Aan() };
								if (this.lfv_Verlichting_VeiligeRuimte.bestuurbaar == "ja" && this.bedieningswijze == "auto" && this.auto_stand == "uit") { this.lfv_Verlichting_VeiligeRuimte.Uit() };
								if (this.lfv_Verlichting_VeiligeRuimte.bestuurbaar == "ja" && this.bedieningswijze == "hand" && this.hand_stand == "aan") { this.lfv_Verlichting_VeiligeRuimte.Aan() };
								if (this.lfv_Verlichting_VeiligeRuimte.bestuurbaar == "ja" && this.bedieningswijze == "hand" && this.hand_stand == "uit") { this.lfv_Verlichting_VeiligeRuimte.Uit() };
							},
						},
					},
				},
				// Kopdeur middentunnelkanaal
				bf_KopdeurMiddenTunnelKanaal_VeiligeRuimte: {
					naam: "Basisfunctie Kopdeur MiddenTunnelKanaal",
					hoortbij: "Veilige ruimte",
					titel: "Kopdeur middentunnelkanaal",
				},
				// Overdruk veilige ruimte
				bf_Overdruk_VeiligeRuimte: {
					naam: "Basisfunctie Overdruk Veilige Ruimte",
					hoortbij: "Veilige ruimte",
					titel: "Overdruk",
				},
				sf_OverdrukVentilator_VeiligeRuimte: {
					naam: "Subfunctie Overdrukventilator Veilige Ruimte",
					hoortbij: "Veilige ruimte",
					titel: "Overdrukventilator",
				},
				// Geluidsbakenmonitor veilige ruimte
				cf_GeluidsbakenMonitor_VeiligeRuimte: {
					naam: "Coördinerende functie GeluidsbakenMonitor Veilige Ruimte",
					hoortbij: "Veilige ruimte",
					titel: "Geluidsbaken monitor",
				},
				// Dynamische vluchtroute indicatie
				bf_DynamischeVluchtrouteIndicatie_VeiligeRuimte: {
					naam: "Basisfunctie Dynamische Vluchtroute Indicatie Veilige Ruimte",
					hoortbij: "Veilige ruimte",
					titel: "Dynamische vluchtroute indicatie",
				},
				sf_GroepVanGeluidsbakens_VeiligeRuimte: {
					naam: "Subfunctie GroepVanGeluidsbakens",
					hoortbij: "Veilige ruimte",
					titel: "Groep van geluidsbakens",
				},
				sf_Geluidsbaken_VeiligeRuimte: {
					naam: "Subfunctie Geluidsbaken",
					hoortbij: "Veilige ruimte",
					titel: "Geluidsbaken",
				},
				// Omroep veilige ruimte
				bf_Omroep_VeiligeRuimte: {
					naam: "Basisfunctie Omroep Veilige Ruimte",
					hoortbij: "Veilige ruimte",
					titel: "Omroep",
				},
				sf_Omroepcompartiment_VeiligeRuimte: {
					naam: "Subfunctie Omroepcompartiment Veilige Ruimte",
					hoortbij: "Veilige ruimte",
					titel: "Omroepcompartiment",
				},
				// Functies op tunnel niveau
				// Blusvoorziening tunnel
				bf_Blusvoorziening_Tunnel: {
					naam: "Basisfunctie Bluswatervoorziening Tunnel",
					hoortbij: "Tunnel",
					titel: "Blusvoorziening",
				},
				sf_Jockeypomp_Tunnel: {
					naam: "Subfunctie Jockeypomp",
					hoortbij: "Tunnel",
					titel: "Jockeypomp",
				},
				sf_Brandbluspomp_Tunnel: {
					naam: "Subfunctie pomp",
					hoortbij: "Tunnel",
					titel: "Brandbluspomp",
				},
				sf_BluswaterDistributieLeiding_Tunnel: {
					naam: "Subfunctie Bluswaterdistributieleiding",
					hoortbij: "Tunnel",
					titel: "Distributieleidingstelsel",
				},
				sf_Bluswaterreservoir_Tunnel: {
					naam: "Subfunctie Bluswaterreservoir",
					hoortbij: "Tunnel",
					titel: "Reservoir",
				},
				// Energievoorziening tunnel
				bf_Energievoorziening_Tunnel: {
					naam: "Basisfunctie Energievoorziening Tunnel",
					hoortbij: "Tunnel",
					titel: "Energievoorziening",
				},
				sf_Netaansluiting_Tunnel: {
					naam: "Subfunctie Netaansluiting",
					hoortbij: "Tunnel",
					titel: "Netaansluiting",
				},
				sf_Energiedistributienetwerk_Tunnel: {
					naam: "Subfunctie Energiedistributienetwerk",
					hoortbij: "Tunnel",
					titel: "Energiedistributienetwerk",
				},
				sf_Transformator_Tunnel: {
					naam: "Subfunctie Transformator",
					hoortbij: "Tunnel",
					titel: "Transformator",
				},
				sf_NSA_Tunnel: {
					naam: "Subfunctie NSA",
					hoortbij: "Tunnel",
					titel: "NSA",
				},
				sf_NoBreak_Tunnel: {
					naam: "Subfunctie Nobreak",
					hoortbij: "Tunnel",
					titel: "Nobreak",
				},
				// Intercom tunnel
				bf_Intercom_Tunnel: {
					naam: "Basisfunctie Intercom Tunnel",
					hoortbij: "Tunnel",
					titel: "Intercom",
				},
				sf_Intercomtoestel_Tunnel: {
					naam: "Subfunctie Intercomtoestel",
					hoortbij: "Tunnel",
					titel: "Intercomtoestel",
				},
				// C2000
				bf_C2000_Tunnel: {
					naam: "Basisfunctie C2000",
					hoortbij: "Tunnel",
					titel: "C2000",
				},
				// Omroep tunnel
				cf_Omroepsysteem_Tunnel: {
					naam: "Coördinerende functie Omroepsysteem Tunnel",
					hoortbij: "Tunnel",
					titel: "Omroepsysteem",
				},
				// Telefoonvoorziening tunnel
				bf_Telefoonvoorziening_Tunnel: {
					naam: "Basisfunctie Telefoonvoorziening Tunnel",
					hoortbij: "Tunnel",
					titel: "Telefoonvoorziening",
				},
				// Vloeistofpompinstallatie tunnel
				bf_Vloeistofpompinstallatie_Tunnel: {
					naam: "Basisfunctie Vloeistofpompinstallatie",
					hoortbij: "Tunnel",
					titel: "Vloeistofpompinstallatie",
				},
				sf_Afvoerpomp_Tunnel: {
					naam: "Subfunctie Pomp",
					hoortbij: "Tunnel",
					titel: "Afvoerpomp",
				},
				sf_Afvoerkeuze_Tunnel: {
					naam: "Subfunctie Afvoerkeuze",
					hoortbij: "Tunnel",
					titel: "Afvoerkeuze",
				},
				// Verlicht toerit monitor
				cf_VerlichtToeritMonitor_Tunnel: {
					naam: "Coördinerende functie Verlicht Toerit Monitor",
					hoortbij: "Tunnel",
					titel: "Verlicht toerit monitor",
				},
				// CaDo
				bf_CADO_Tunnel: {
					naam: "Basisfunctie CaDo",
					hoortbij: "Tunnel",
					titel: "CaDo",
				},
				// VeVa
				bf_VEVA_Tunnel: {
					naam: "Basisfunctie VeVa",
					hoortbij: "Tunnel",
					titel: "VeVa",
				},
				// Beweegbare barrier
				bf_BEBA_Tunnel: {
					naam: "Basisfunctie Beweegbare Barrier",
					hoortbij: "Tunnel",
					titel: "BeBa",
				},
				// CCTV tunnel
				cf_CCTV_Tunnel: {
					naam: "Coördinerende functie CCTV Tunnel",
					hoortbij: "Tunnel",
					titel: "CCTV",
				},
				// Bediening
				cf_Bediening_Tunnel: {
					naam: "Coördinerende functie Bediening Tunnel",
					hoortbij: "Tunnel",
					titel: "Bedieningcoördinatie",
				},
				bf_Bediening_Tunnel: {
					naam: "Basisfunctie Bediening",
					hoortbij: "Tunnel",
					titel: "Bediening",
				},
				// Beeldvoorziening meldkamer tunnel
				bf_BeeldvoorzieningMeldkamer_Tunnel: {
					naam: "Basisfunctie Beeldvoorziening Meldkamer Tunnel",
					hoortbij: "Tunnel",
					titel: "Beeldvoorziening meldkamer",
				},
				// Overdrukvoorziening grensruimte
				bf_OverdrukvoorzieningGrensruimte_Tunnel: {
					naam: "Basisfunctie Overdrukvoorziening Grensruimte",
					hoortbij: "Tunnel",
					titel: "Overdrukvoorziening grensruimte",
				},
				sf_OverdrukVentilatorGrensruimte_Tunnel: {
					naam: "Subfunctie Overdrukventilator",
					hoortbij: "Tunnel",
					titel: "Overdrukventilator grensruimte",
				},
				// Koppeling externe systemen
				bf_KoppelingExterneSystemen_Tunnel: {
					naam: "Basisfunctie Koppeling Externe Systemen Tunnel",
					hoortbij: "Tunnel",
					titel: "Koppeling externe systemen",
				},
				// Noodbediening
				bf_Noodbediening_Tunnel: {
					naam: "Basisfunctie Noodbediening Tunnel",
					hoortbij: "Tunnel",
					titel: "Noodbediening",
				},
				// Terreinverlichting
				bf_Terreinverlichting_Tunnel: {
					naam: "Basisfunctie Terreinverlichting",
					hoortbij: "Tunnel",
					titel: "Terreinverlichting",
				},
				// Waarschuwingsinstallatie dienstruimtes tunnel
				bf_WaarschuwingsinstallatieDienstruimtes_Tunnel: {
					naam: "Basisfunctie Waarschuwingsinstallatie Dienstruimtes Tunnel",
					hoortbij: "Tunnel",
					titel: "Waarschuwingsinstallatie dienstruimtes",
				},
				sf_Signaalgever_Tunnel: {
					naam: "Subfunctie Signaalgever",
					hoortbij: "Tunnel",
					titel: "Signaalgever",
				},
				// Brandmeldinstallatie
				bf_BrandmeldinstallatieDienstruimtes_Tunnel: {
					naam: "Basisfunctie Branddetectie en - alarmering Dienstruimtes",
					hoortbij: "Tunnel",
					titel: "Brandmeldinstallatie dienstruimtes",
				},
				// Eventrecording
				bf_Eventrecorder_Tunnel: {
					naam: "Basisfunctie Eventrecorder",
					hoortbij: "Tunnel",
					titel: "Eventrecorder",
				},
				// Interbuiscoördinatie
				// Verkeersbuis
				cf_Verkeersbuis_Tunnel: {
					naam: "Coördinerende functie Verkeersbuis",
					hoortbij: "Verkeersbuis",
					title: "Verkeersbuiscoördinatie",
					mnu: mnu.Verkeer,
					properties: {
						// Configuratie-elementen
						bf_SOS_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "SOS",
							description: "De basisfunctie SOS voor deze verkeersbuis.",
							ref: "BSTTI#10738",
							type: "selectitem",
							class: "SOS",
						},
						bf_Omroep_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Omroep",
							description: "De basisfunctie Omroep Verkeersbuis voor deze verkeersbuis.",
							ref: "BSTTI#10739",
							type: "selectitem",
							class: "Omroep",
						},
						bf_HF_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "HF",
							description: "De basisfunctie HF Verkeersbuis voor deze verkeersbuis.",
							ref: "BSTTI#17716",
							type: "selectitem",
							class: "HF",
						},
						bf_Verlichting_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Verkeersbuisverlichting",
							description: "De basisfunctie VerkeersbuisVerlichting voor deze verkeersbuis.",
							ref: "BSTTI#10740",
							type: "selectitem",
							class: "Verkeersbuisverlichting",
						},
						bf_Ventilatie_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Ventilatie",
							description: "De basisfunctie Verkeersbuis Langsventilatie voor deze verkeersbuis.",
							ref: "BSTTI#10743",
							type: "selectitem",
							class: "Ventilatie",
						},
						bf_Luchtkwaliteitsmeting_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Luchtkwaliteitsmeting",
							description: "De basisfunctie Luchtkwaliteitsmeting Verkeersbuis voor deze verkeersbuis.",
							ref: "BSTTI#10745",
							type: "selectitem",
							class: "Luchtkwaliteitsmeting",
						},
						bf_CCTV_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "CCTV",
							description: "De basisfunctie CCTV voor deze verkeersbuis.",
							ref: "BSTTI#10746",
							type: "selectitem",
							class: "CCTV",
						},
						bf_Hulppost_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Hulppost",
							description: "De verschillende basisfuncties Hulppost voor alle hulpposten in de verkeersbuis.",
							ref: "BSTTI#10748",
							type: "selectitem",
							class: "Hulppost",
							initdefaultvalue: [],
						},
						bf_Vluchtdeurindicatie_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Vluchtdeurindicatie",
							description: "De basisfunctie Vluchtdeurindicatie voor deze verkeersbuis.",
							ref: "BSTTI#10749",
							type: "selectitem",
							class: "Vluchtdeurindicatie",
						},
						bf_RijVanVluchtdeuren_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Rij van vluchtdeuren",
							description: "De basisfunctie Rij van Vluchtdeuren voor deze verkeersbuis.",
							ref: "BSTTI#14937",
							type: "selectitem",
							class: "Vluchtdeuren",
						},
						bf_Noodtelefoon_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Noodtelefoon",
							description: "De basisfunctie Noodtelefoon Verkeersbuis in deze verkeersbuis.",
							ref: "BSTTI#10750",
							type: "selectitem",
							class: "Noodtelefoon",
						},
						cf_Afsluiter_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Verkeersbuisafsluiter",
							description: "De coördinerende functie VerkeersbuisAfsluiter voor elke ingang van deze verkeersbuis. In het geval van een wisselbuis is er voor elke richting één ingang. Bij andere verkeersbuizen heeft deze lijst slechts één element, namelijk voor de ontwerprijrichting.",
							ref: "BSTTI#10742",
							type: "selectitem",
							class: "Afsluitsysteem", // CHECK naam
						},
						cf_Hoogtedetectie_Verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Hoogtedetectie",
							description: "Indien van toepassing: de coördinerende functie HoogteDetectie voor elke ingang van deze verkeersbuis. In het geval van een wisselbuis is er voor elke richting één ingang. Als er geen hoogtedetectie is, dan moet deze lijst leeg zijn. Bij andere verkeersbuizen heeft deze lijst hooguit één element, namelijk voor de ontwerprijrichting.",
							ref: "BSTTI#16537",
							type: "selectitem",
							class: "Hoogtedetectie",
						},
						bf_KoppelingExterneSystemen_Tunnel: {
							stereotype: "configuratie_element",
							title: "Koppeling Externe Systemen",
							description: "De instantie van de basisfunctie Koppeling Externe Systemen Tunnel.",
							ref: "BSTTI#14954",
							type: "selectitem",
							class: "Koppeling Externe Systemen",
						},
						standby_ventilatiestand: {
							stereotype: "configuratie_element",
							title: "Standby ventilatiestand",
							description: "De stand waarin de ventilatie moet staan in de state bedrijf-standby. Deze stand komt overeen met 50%. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10902",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "4",
						},
						ondersteunend_ventilatiestand: {
							stereotype: "configuratie_element",
							title: "Ondersteunend ventilatiestand",
							description: "De stand waarin de ventilatie moet staan in de state calamiteit-ondersteunend, om de ondersteunende buis rookvrij te kunnen houden. Deze stand is gerelateerd aan BSTTI#17416. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#15191",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "6",
						},
						calamiteit_ventilatiestand: {
							stereotype: "configuratie_element",
							title: "Calamiteit ventilatiestand",
							description: "De stand waarin de ventilatie moet staan in de state calamiteit-volledig. Deze stand komt overeen met 100%. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10901",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "8",
						},
						onderhoud_ventilatiestand: {
							stereotype: "configuratie_element",
							title: "Onderhoud ventilatiestand",
							description: "De stand waarin de ventilatie moet staan in de state onderhoud. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10903",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "2",
						},
						gesloten_deel_standby_verlichtingsstand: {
							stereotype: "configuratie_element",
							title: "Gesloten deel standby verlichtingsstand",
							description: "De stand waarin de verlichting moet staan in de state bedrijf-standby. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10905",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "8",
						},
						gesloten_deel_calamiteit_verlichtingsstand: {
							stereotype: "configuratie_element",
							title: "Gesloten deel calamiteit verlichtingsstand",
							description: "De stand waarin de verlichting moet staan in de state calamiteit. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10907",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "8",
						},
						gesloten_deel_onderhoud_verlichtingsstand: {
							stereotype: "configuratie_element",
							title: "Gesloten deel onderhoud verlichtingsstand",
							description: "De stand waarin de verlichting moet staan in de state onderhoud. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10906",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "3",
						},
						niet_gesloten_deel_standby_verlichtingsstand: {
							stereotype: "configuratie_element",
							title: "Niet gesloten deel standby verlichtingsstand",
							description: "De stand waarin de verlichting moet staan in de state bedrijf-standby. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#11413",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "8",
						},
						niet_gesloten_deel_calamiteit_verlichtingsstand: {
							stereotype: "configuratie_element",
							title: "Niet gesloten deel calamiteit verlichtingsstand",
							description: "De stand waarin de verlichting moet staan in de state calamiteit. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#11414",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "8",
						},
						niet_gesloten_deel_onderhoud_verlichtingsstand: {
							stereotype: "configuratie_element",
							title: "Niet gesloten deel onderhoud verlichtingsstand",
							description: "De stand waarin de verlichting moet staan in de state onderhoud. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#11415",
							type: "number",
							unit: "",
							min: "0",
							max: "8",
							step: "1",
							initdefaultvalue: "3",
						},
						boodschap_calamiteit: {
							stereotype: "configuratie_element",
							title: "Boodschap calamiteit",
							description: "De boodschap die in een verkeersbuis wordt afgespeeld bij een calamiteit. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#10908",
							enum: { ontruiming_verkeersbuis: "Ontruiming verkeersbuis", langdurige_stremming: "Langdurige stremming", ontruiming_tunnel: "Ontruiming tunnel" },
						},
						boodschap_herhalingsperiode: {
							stereotype: "configuratie_element",
							title: "Boodschap herhalingsperiode",
							description: "De herhalingsperiode waarmee de boodschap wordt afgespeeld bij een calamiteit. Bij een middenwand moet de herhalingsperiode 67 seconden zijn; bij overige vluchtconcepten moet deze periode 60 seconden zijn. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#15172",
							type: "number",
							unit: "",
							min: "0",
							max: "90",
							step: "1",
							initdefaultvalue: "60",
						},
						ontwerprijrichting: {
							stereotype: "configuratie_element",
							title: "Ontwerprijrichting",
							description: "De ontwerprijrichting in de verkeersbuis in oplopende- of aflopende hectometeraanduiding. Elke verkeersbuis heeft één ontwerprijrichting die bij ontwerp gekozen dient te worden.",
							ref: "BSTTI#16498",
							enum: { oplopend: "Oplopend", aflopend: "Aflopend" },
						},
						id: {
							stereotype: "configuratie_element",
							title: "Id",
							description: "De identificatie van deze verkeersbuis.",
							ref: "BSTTI#14958",
							type: "number",
							unit: "",
							min: "0",
							max: "10",
							step: "1",
							initdefaultvalue: "1",
						},
						tijdvenster_snelheidsonderschrijding: {
							stereotype: "configuratie_element",
							title: "Tijdvenster snelheidsonderschrijding",
							description: "De periode waarin een snelheidsonderschrijding als gelijktijdig met andere detecties gezien wordt, in seconden. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#15155",
							type: "number",
							unit: "s",
							min: "0",
							max: "120",
							step: "1",
							initdefaultvalue: "30",
						},
						tijdvenster_rookdetectie: {
							stereotype: "configuratie_element",
							title: "Tijdvenster rookdetectie",
							description: "De periode waarin een rookdetectie als gelijktijdig met andere detecties gezien wordt, in seconden. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#15156",
							type: "number",
							unit: "s",
							min: "0",
							max: "120",
							step: "1",
							initdefaultvalue: "30",
						},
						tijdvenster_detectie_hulppostkast: {
							stereotype: "configuratie_element",
							title: "Tijdvenster detectie hulppostkast",
							description: "De periode waarin een hulppostkast-detectie als gelijktijdig met andere detecties gezien wordt, in seconden. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#15157",
							type: "number",
							unit: "s",
							min: "0",
							max: "120",
							step: "1",
							initdefaultvalue: "20",
						},
						periode_onderdruk_calamiteit: {
							stereotype: "configuratie_element",
							title: "Periode onderdruk calamiteit",
							description: "De duur van de periode waarin automatische calamiteitsdetectie onderdrukt kan worden. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#15966",
							type: "number",
							unit: "s",
							min: "0",
							max: "60",
							step: "1",
							initdefaultvalue: "30",
						},
						tijd_verkeersvrij_maken: {
							stereotype: "configuratie_element",
							title: "Tijd verkeersvrij maken",
							description: "Per rijrichting, de tijd in seconden vanaf de overgang naar calamiteit tot mag worden aangenomen dat de verkeersbuis is leeggereden. Dit is de tijd benodigd voor afsluiten (afsluittijd) vermeerderd met de tijd benodigd voor het leegrijden (leegrijdtijd, X) van de verkeersbuis. Zie BSTTI#17170/BSTTI#17369, BSTTI#17171, BSTTI#17173 en de toelichtingen daarbij voor de bepaling van deze tijden. In het geval van een wisselbuis is er voor elke richting een waarde (m.n. de leegrijdtijd kan per richting verschillen). Bij andere verkeersbuizen heeft deze lijst slechts één element, namelijk voor de ontwerprijrichting.Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak, mag alleen i.s.m.een verkeerskundige en tunnelveiligheidsdeskundige van RWS worden aangepast en de waarden moeten worden afgestemd met gerelateerde configuratie - elementen in het besturingssysteem.",
							ref: "BSTTI#17241",
							type: "number",
							initdefaultvalue: [],
							unit: "s",
							min: "0",
							max: "180",
							step: "1",
							initdefaultvalue: "90",
						},
						signaleringen_verkeersbuis: {
							stereotype: "configuratie_element",
							title: "Signaleringen",
							description: "De lijst van signaleringen voor deze verkeersbuis, inclusief de signaleringen van de eventueel aanwezige rijrichtingwisselaar, en inclusief alle signaleringen van de verkeersbuisfuncties uit hoofdstuk 10.",
							ref: "BSTTI#16805",
							// CHECK type?
							type: "selectitem",
							initdefaultvalue: [],
						},
						// Variabelen
						rijrichting: {
							stereotype: "variabele",
							title: "Rijrichting",
							description: "De rijrichting in de verkeersbuis in oplopende- of aflopende hectometeraanduiding. Voor wisselbuizen zal deze een deel van de tijd anders zijn dan _ontwerprijrichting. Als deze verkeersbuis geen wisselbuis is moet deze waarde altijd gelijk zijn aan _ontwerprijrichting.",
							ref: "BSTTI#10521",
							comment: "",
							enum: { oplopend: "Oplopend", aflopend: "Aflopend" },
						},
						substate: {
							stereotype: "variabele",
							title: "Substate",
							description: "Geeft aan in welke (sub)state de verkeersbuis is volgens ref. [SysOntw].",
							ref: "BSTTI#10524",
							comment: "Init: gestart",
							enum: { gestart: "", bedrijf_normaal: "Bedrijf normaal", bedrijf_standby: "Bedrijf standby", calamiteit_volledig: "Calamiteit volledig", calamiteit_evacuatie: "Calamiteit evacuatie", calamiteit_ondersteunend: "Calamiteit ondersteunend", onderhoud_herstel: "Onderhoud herstel", onderhoud_regulier: "Onderhoud regulier" },
							initdefaultvalue: "gestart",
						},
						blusvraag: {
							stereotype: "variabele",
							title: "Blusvraag",
							description: "Geeft aan of er een blusvraag is op basis van een afwijkende situatie in de verkeersbuis. Er is een blusvraag als een van de slanghaspels is uitgenomen en tijdens calamiteit.",
							ref: "BSTTI#16639",
							comment: "Conditie: * ; Waarde: _bf_Hulppost[i].#spuitmond_slanghaspel_in_houder = nee || #substate = (calamiteit_volledig | calamiteit_evacuatie | calamiteit_ondersteunend)",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return checkOne(this.bf_Hulppost_Verkeersbuis, "spuitmond_slanghaspel_in_houder", "nee") ? "ja" : this.substate == "calamiteit_volledig" || this.substate == "calamiteit_evacuatie" || this.substate == "calamiteit_ondersteunend" ? "ja" : "nee";
							},
						},
						mogelijke_standby: {
							stereotype: "variabele",
							title: "Mogelijke standby",
							description: "Deze variabele geeft aan dat er in de verkeersbuis iets gedetecteerd is waardoor het verstandig is om naar BedrijfStandby te gaan. De detecties bestaan uit: of rookdetectie, of uitgenomen spuitmond_slanghaspel of draagbaar brandblusapparaat. Deze laatste twee gelden alleen als tegelijk ook de hulppostkast deur open is. Hiermee worden mogelijke false-positives voorkomen.",
							ref: "BSTTI#7608",
							comment: "Conditie: * ; Waarde: _bf_Luchtkwaliteitsmeting.#rook_gedetecteerd = ja || (_bf_Hulppost[i].#deur_open = ja && (_bf_Hulppost[i].#spuitmond_slanghaspel_in_houder = nee || bf_Hulppost[i].#blusapparaat_in_houder = nee ))",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.bf_Luchtkwaliteitsmeting_Verkeersbuis.rook_gedetecteerd == "ja" || checkOne(this.bf_Hulppost_Verkeersbuis, "deur_open", "ja") && (checkOne(this.bf_Hulppost_Verkeersbuis, "spuitmond_slanghaspel_in_houder", "nee") || checkOne(this.bf_Hulppost_Verkeersbuis, "blusapparaat_in_houder", "nee")) ? "ja" : "nee";
							},
						},
						bediening_zegt_calamiteit: {
							stereotype: "variabele",
							title: "Bediening zegt calamiteit",
							description: "Als de Bediening (middels de bediening GaNaarCalamiteit) heeft aangegeven dat deze verkeersbuis naar calamiteitenbedrijf moet gaan, dan krijgt #bediening_zegt_calamiteit de waarde ‘ja’. De daadwerkelijke overgang naar calamiteit gebeurt na een timeout periode. Als de Bediening (middels de bediening AnnuleerCalamiteit) heeft aangegeven dat deze verkeersbuis niet naar calamiteitenbedrijf moet gaan, dan krijgt #bediening_zegt_calamiteit de waarde ‘nee’. In dat geval wordt gedurende een korte periode daarna, automatische calamiteitsdetectie onderdrukt (zie variabele #mogelijke_calamiteit).",
							ref: "BSTTI#11472",
							comment: "Init: nee",
							enum: { ja: "Ja", nee: "Nee" },
							initdefaultvalue: "nee",
						},
						tijd_sinds_snelheidsonderschrijding: {
							stereotype: "variabele",
							title: "Tijd sinds snelheidsonderschreiding",
							description: "De variabele bevat de tijd in seconden sinds voor een rijstrook r een _bf_SOS._sf_sos_sectie[r, i]. #snelheidsonderschrijding = ja voor het laatst waar was. Bij initialisatie heeft deze variabele een zeer grote waarde, bijvoorbeeld 100 * _tijdvenster_snelheidsonderschrijding.",
							ref: "BSTTI#15152",
							comment: "Init: (100 * _tijdvenster_snelheidsonderschrijding)",
							type: "number",
							unit: "s",
							initdefaultvalue: "", // CHECK initwaarde berekening
						},
						tijd_sinds_rookdetectie: {
							stereotype: "variabele",
							title: "Tijd sinds rookdetectie",
							description: "De variabele bevat de tijd in seconden sinds de variabele _bf_Luchtkwaliteitsmeting.#rook_gedetecteerd voor het laatst de waarde 'ja' had. Bij initialisatie heeft deze variabele een zeer grote waarde, bijvoorbeeld 100 * _tijdvenster_rookdetectie.",
							ref: "BSTTI#15154",
							comment: "Init: (100 * _tijdvenster_rookdetectie)",
							type: "number",
							unit: "s",
							initdefaultvalue: "", // CHECK initwaarde berekening
						},
						tijd_sinds_twee_detecties_hulppostkast: {
							stereotype: "variabele",
							title: "Tijd sinds twee detecties hulppostkast",
							description: "De variabele bevat de tijd in seconden sinds de volgende expressie voor het laatst de waarde 'waar' had. Bij initialisatie heeft deze variabele een zeer grote waarde, bijvoorbeeld 100 * _tijdvenster_detectie_hulppostkast.",
							ref: "BSTTI#15153",
							comment: "Init: (100 * _tijdvenster_detectie_hulppostkast)",
							type: "number",
							unit: "s",
							initdefaultvalue: "", // CHECK initwaarde berekening
							get: function () { // CHECK tijdwaarde berekening
								/* _bf_Hulppost[i].#deur_open = ja && ( _bf_Hulppost[i].#spuitmond_slanghaspel_in_houder = nee || _bf_Hulppost[i].#blusapparaat_in_houder = nee ) */
							},
						},
						mogelijke_calamiteit: {
							stereotype: "variabele",
							title: "Mogelijke calamiteit",
							description: "Geeft aan of er in de verkeersbuis een combinatie van detecties met een zekere gelijktijdigheid aanwezig zijn geweest waarbij het zeer waarschijnlijk is dat er een calamiteit in de tunnel is. De variabele is waar als er tegelijkertijd een snelheidsonderschrijding, een rookdetectie en minstens twee hulppostkastdetecties zijn. Indien #bediening_zegt_calamiteit de waarde 'ja' heeft, of als #bediening_zegt_calamiteit de waarde 'nee' heeft terwijl de _periode_onderdruk_calamiteit nog niet verstreken is, worden deze detecties overruled, en krijgt #mogelijke_calamiteit dezelfde waarde als #bediening_zegt_calamiteit.",
							ref: "BSTTI#7618",
							comment: "Conditie: #bediening_zegt_calamiteit = ja ; Waarde: ja ; Conditie: #bediening_zegt_calamiteit = nee && huidige_tijd - #tijdstip_onderdrukken_calamiteit ≤ _periode_onderdruk_calamiteit ; Waarde: nee ; Conditie: overige situaties ; Waarde: #tijd_sinds_snelheidsonderschrijding<_tijdvenster_snelheidsonderschrijding && #tijd_sinds_rookdetectie<_tijdvenster_rookdetectie && #tijd_sinds_twee_detecties_hulppostkast<_tijdvenster_detectie_hulppostkast",
							enum: { ja: "Ja", nee: "Nee" },
							// CHECK waarde vaststelling
							get: function () {
								return this.bediening_zegt_calamiteit == "ja" ? "ja" : this.bediening_zegt_calamiteit == "nee" && huidige_tijd - this.tijdstip_onderdrukken_calamiteit <= this.periode_onderdruk_calamiteit ? "nee" : this.tijd_sinds_snelheidsonderschrijding < this.tijdvenster_snelheidsonderschrijding && this.tijd_sinds_rookdetectie < this.tijdvenster_rookdetectie && this.tijd_sinds_twee_detecties_hulppostkast < this.tijdvenster_detectie_hulppostkast ? "ja" : "nee";
							},
						},
						calamiteit_detectie_tijd: {
							stereotype: "variabele",
							title: "Calamiteit detectie tijd",
							description: "De variabele bevat de tijd in seconden sinds de variabele #mogelijke_calamiteit voor het laatst de waarde 'ja' heeft gekregen. Als #mogelijke_calamiteit <> ja, dan wordt #calamiteit_detectie_tijd gelijk aan 0 seconden.",
							ref: "BSTTI#10752",
							comment: "Init: 0",
							type: "number",
							unit: "s",
							initdefaultvalue: "0",
							get: function () { // CHECK tijdwaarde berekening
								return this.mogelijke_calamiteit != "ja" ? "0" : "";
							},
						},
						verkeersbuisafsluiter_in_gebruik: {
							stereotype: "variabele",
							title: "Verkeersbuisafsluiter in gebruik",
							description: "De coördinerende functie verkeersbuisafsluiter die nu in gebruik zou moeten zijn. Als deze verkeersbuis geen wisselbuis is, moet dit altijd de enige verkeersbuisafsluiter zijn.",
							ref: "BSTTI#16571",
							comment: "Conditie: * ; Waarde: _cf_Verkeersbuisafsluiter[#rijrichting]",
							enum: {},
							get: function () { }, // CHECK waarde toekenning
						},
						hoogtedetectie_in_gebruik: {
							stereotype: "variabele",
							title: "Hoogtedetectie in gebruik",
							description: "De coördinerende functie hoogtedetectie die nu in gebruik zou moeten zijn. Als deze verkeersbuis geen wisselbuis is, moet deze waarde altijd hetzelfde zijn.",
							ref: "BSTTI#16572",
							comment: "Conditie: #hoogtedetectie_aanwezig = ja ; Waarde: _cf_Hoogtedetectie[#rijrichting]",
							enum: {},
							get: function () { }, // CHECK waarde toekenning
						},
						hoogtedetectie_aanwezig: {
							stereotype: "variabele",
							title: "Hoogtedetectie aanwezig",
							description: "Deze variabele geeft aan of deze verkeersbuis hoogtedetectie heeft.",
							ref: "BSTTI#16582",
							comment: "Conditie: lengte(_cf_Hoogtedetectie) ≥ lengte(_cf_Verkeersbuisafsluiter) ; Waarde: ja ; Conditie: lengte(_cf_Hoogtedetectie) = 0 ; Waarde: nee",
							enum: { ja: "Ja", nee: "Nee" },
							get: function () {
								return this.cf_Hoogtedetectie_Verkeersbuis == "" ? "nee" : "ja";
							},
						},
						tijdstip_onderdrukken_calamiteit: {
							stereotype: "variabele",
							title: "Tijdstip onderdrukken calamiteit",
							description: "Geeft het tijdstip waarop het onderdrukken begon van de meest recente (mogelijkheid tot) calamiteit.",
							ref: "BSTTI#16728",
							comment: "Init: 0",
							type: "number",
							unit: "s", // CHECK format
							initdefaultvalue: "0",
						},
						tijdstip_calamiteit: {
							stereotype: "variabele",
							title: "Tijdstip calamiteit",
							description: "Geeft aan wanneer de buis in calamiteit is geraakt.",
							ref: "BSTTI#17250",
							comment: "Init: 0",
							type: "number",
							unit: "s", // CHECK format
							initdefaultvalue: "0",
						},
						tijdstip_verkeersvrij: {
							stereotype: "variabele",
							title: "Tijdstip verkeersvrij",
							description: "Het tijdstip waarop mag worden aangenomen dat de verkeersbuis is leeggereden (bij calamiteit).",
							ref: "BSTTI#17383",
							comment: "Conditie: #substate = (calamiteit_ondersteunend | calamiteit_volledig | calamiteit_evacuatie) ; Waarde: #tijdstip_calamiteit + _tijd_verkeersvrij_maken[#rijrichting]",
							type: "number",
							unit: "s", // CHECK format
							get: function () { // CHECK waarde bepaling
								return this.substate == "calamiteit_ondersteunend" || this.substate == "calamiteit_volledig" || this.substate == "calamiteit_evacuatie" ? this.tijdstip_calamiteit + this.tijd_verkeersvrij_maken[this.rijrichting] : "";
							},
						},
						rijrichting_calamiteitenbuis: {
							stereotype: "variabele",
							title: "Rijrichting calamiteitenbuis",
							description: "De actuele rijrichting van de calamiteitenbuis.",
							ref: "BSTTI#17457",
							comment: "",
							enum: { oplopend: "Oplopend", aflopend: "Aflopend" },
						},
						// Specifieke signaleringen
						VerkeersbuisState: {
							stereotype: "signalering",
							title: "Verkeersbuis state",
							description: "Geeft de huidige (sub)state van de verkeersbuis aan.",
							ref: "BSTTI#10966",
							comment: "Status: #substate",
							type: "status_melding",
							enum: { gestart: "", bedrijf_normaal: "Bedrijf normaal", bedrijf_standby: "Bedrijf standby", calamiteit_volledig: "Calamiteit volledig", calamiteit_evacuatie: "Calamiteit evacuatie", calamiteit_ondersteunend: "Calamiteit ondersteunend", onderhoud_herstel: "Onderhoud herstel", onderhoud_regulier: "Onderhoud regulier" },
							get: function () {
								return this.substate;
							},
						},
						Alarm_CalamiteitGedetecteerdInVerkeersbuis: {
							stereotype: "signalering",
							title: "Alarm calamiteit gedetecteerd in verkeersbuis",
							description: "Geeft aan dat in de verkeersbuis een situatie is gedetecteerd die het zeer waarschijnlijk maakt dat er een calamiteit aan de gang is.",
							ref: "BSTTI#11423",
							comment: "Conditie: #mogelijke_calamiteit = ja",
							type: "verkeerskundig_alarm",
							enum: { ja: "Calamiteit gedetecteerd in verkeersbuis", nee: "" },
							get: function () {
								return this.mogelijke_calamiteit == "ja";
							},
						},
						Alarm_VerkeersbuisInCalamiteitVolledig: {
							stereotype: "signalering",
							title: "Alarm verkeersbuis in calamiteit volledig",
							description: "Geeft aan dat in de verkeersbuis in de substate Calamiteit-Volledig is gekomen.",
							ref: "BSTTI#15976",
							comment: "Conditie: #substate = calamiteit_volledig && #bediening_zegt_calamiteit = nee",
							type: "verkeerskundig_alarm",
							enum: { ja: "Verkeersbuis in calamiteit", nee: "" },
							get: function () {
								return this.substate == "calamiteit_volledig" && this.bediening_zegt_calamiteit == "nee";
							},
						},
						Alarm_VerkeersbuisInStandbyNaDetectie: {
							stereotype: "signalering",
							title: "Alarm verkeersbuis in standby",
							description: "Geeft aan dat in de verkeersbuis in de substate Bedrijf-standby is gekomen.",
							ref: "BSTTI#15977",
							comment: "Conditie: #substate = bedrijf_standby",
							type: "verkeerskundig_alarm",
							enum: { ja: "Verkeersbuis in standby", nee: "" },
							get: function () {
								return this.substate == "bedrijf_standby";
							},
						},
						Alarm_VerkeersbuisInGestart: {
							stereotype: "signalering",
							title: "Alarm verkeersbuis in gestart",
							description: "Er is nog geen (sub)state voor de verkeersbuis geselecteerd.",
							ref: "BSTTI#16950",
							comment: "Conditie: #substate = gestart",
							type: "deelsysteem_alarm",
							enum: { ja: "Verkeersbuis in gestart", nee: "" },
							get: function () {
								return this.substate == "gestart";
							},
						},
					},
					operations: {
						// Bedieningen
						VrijgaveVoorBedrijfNormaal: {
							stereotype: "bediening",
							title: "Vrijgave voor bedrijf normaal",
							description: "De verkeersbuis wordt in BedrijfNormaal gezet. Dit kan als de verkeersbuis niet in (een substate van) calamiteit is. (Overgang 2; overgang 12, 15 en 19)",
							ref: "BSTTI#10805",
							comment: "Conditie: #substate = bedrijf_standby && #mogelijke_standby = nee ; Acties: #substate:= bedrijf_normaal ; NaarNormaal() ; Conditie: #substate = (gestart | onderhoud_regulier | onderhoud_herstel | bedrijf_normaal) ; Acties: #substate:= bedrijf_normaal ; NaarBedrijf() ; NaarNormaal()",
							// CHECK: voor deze bediening zijn meerdere condities en bijbehorende acties gedefinieerd! Hoe gaan we hiermee om in de javascript?
							conditie: function () {
								return this.substate == "bedrijf_standby" && this.mogelijke_standby == "nee"; // Acties 1
								return this.substate == "gestart" || this.substate == "onderhoud_regulier" || this.substate == "onderhoud_herstel" || this.substate == "bedrijf_normaal"; // Acties 2
							},
							em: function () {
								// Acties 1
								this.substate = "bedrijf_normaal";
								this.NaarNormaal();
								// Acties 2
								this.substate = "bedrijf_normaal";
								this.NaarNormaal();
								this.NaarBedrijf();
							},
						},
						AnnuleerCalamiteit: {
							stereotype: "bediening",
							title: "Annuleer calamiteit",
							description: "De bediening voorkomt een overgang naar calamiteit door (1) een voorafgaande bediening GaNaarCalamiteit ongedaan te maken en (2) automatische calamiteitsdetectie tijdelijk te onderdrukken via het zetten van #tijdstip_onderdrukken_calamiteit. Deze onderdrukking heeft een duur gedefinieerd door configuratie-element _periode_onderdruk_calamiteit (BSTTI#15966).",
							ref: "BSTTI#11422",
							comment: "Conditie: * ; Acties: #bediening_zegt_calamiteit:= nee ; #tijdstip_onderdrukken_calamiteit:= huidige_tijd",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bediening_zegt_calamiteit = "nee";
								this.tijdstip_onderdrukken_calamiteit = huidige_tijd;
							},
						},
						GaNaarCalamiteit: {
							stereotype: "bediening",
							title: "Ga naar calamiteit",
							description: "De bediening geeft aan dat deze verkeersbuis (na een vertraging of bevestiging) naar de state calamiteit-volledig moet gaan, mits deze actie niet binnen een bepaalde tijd ongedaan gemaakt wordt. De bediening is typisch het gevolg van het indrukken van de calamiteitenknop.",
							ref: "BSTTI#11469",
							comment: "Conditie: * ; Acties: #bediening_zegt_calamiteit:= ja",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bediening_zegt_calamiteit = "ja";
							},
						},
						CalamiteitVolledig: {
							stereotype: "bediening",
							title: "Calamiteit volledig",
							description: "De verkeersbuis wordt (direct) in CalamiteitVolledig gezet. Bij zo'n overgang moet een buis-relatie zorgen dat een ondersteunende verkeersbuis in CalamiteitOndersteunend wordt gezet (zie BSTTI#16791 in sectie 14.5.6). Deze bediening kan zowel door een autonoom proces geactiveerd worden, typisch als gevolg van het indrukken van de calamiteitenknop(via GaNaarCalamiteit()), als door de WvL, typisch als gevolg van een bevestiging van calamiteit in een dialoog. (Overgang 7; overgang 4, 13, 16 en 20)",
							ref: "BSTTI#10815",
							comment: "Conditie: #substate = calamiteit_evacuatie ; Acties: #substate:= calamiteit_volledig ; NaarVolledig() ; Conditie: #substate = ( gestart | bedrijf_normaal | bedrijf_standby | onderhoud_regulier | onderhoud_herstel | calamiteit_volledig ) ; Acties: #substate:= calamiteit_volledig ; NaarCalamiteit(#rijrichting) ; NaarVolledig()",
							// CHECK: voor deze bediening zijn meerdere condities en bijbehorende acties gedefinieerd! Hoe gaan we hiermee om in de javascript?
							conditie: function () {
								return this.substate == "calamiteit_evacuatie"; // Acties 1
								return this.substate == "gestart" || this.substate == "bedrijf_normaal" || this.substate == "bedrijf_standby" || this.substate == "onderhoud_regulier" || this.substate == "onderhoud_herstel" || this.substate == "calamiteit_volledig"; // Acties 2
							},
							em: function () {
								// Acties 1
								this.substate = calamiteit_volledig;
								this.NaarVolledig();
								// Acties 2
								this.substate = calamiteit_volledig;
								NaarCalamiteit(this.rijrichting);
								NaarVolledig();
							},
						},
						Evacueer: {
							stereotype: "bediening",
							title: "Evacueer",
							description: "Evacueer de aangegeven verkeersbuis. (Overgang 6)",
							ref: "BSTTI#10816",
							comment: "Conditie: #substate = calamiteit_volledig ; Acties: #substate:= calamiteit_evacuatie ; NaarEvacuatie()",
							conditie: function () {
								return this.substate == "calamiteit_volledig";
							},
							em: function () {
								this.substate = "calamiteit_evacuatie";
								this.NaarEvacuatie();
							},
						},
						HerstelNaCalamiteit: {
							stereotype: "bediening",
							title: "Herstel na calamiteit",
							description: "De calamiteit is afgelopen en de tunnel moet hersteld worden van de calamiteit, dit werkt alleen als er geen detecties meer zijn die een overgang naar CalamiteitVolledig afdwingen. Als een verkeersbuis vanuit CalamiteitVolledig in OnderhoudHerstelNaCalamiteit gezet wordt, moet een buisrelatie daarbij zorgen dat een ondersteunende buis ook naar OnderhoudHerstel wordt gezet (zie BSSTI#16811). (Overgang 8, 11 en 17)",
							ref: "BSTTI#10818",
							comment: "Conditie: #substate = ( calamiteit_volledig | onderhoud_regulier | onderhoud_herstel ) ; Acties: OnderhoudHerstelNaCalamiteit() ; #bediening_zegt_calamiteit:= nee",
							conditie: function () {
								return this.substate == "calamiteit_volledig" || this.substate == "onderhoud_regulier" || this.substate == "onderhoud_herstel";
							},
							em: function () {
								this.OnderhoudHerstelNaCalamiteit();
								this.bediening_zegt_calamiteit = "nee";
							},
						},
						OnderhoudRegulier: {
							stereotype: "bediening",
							title: "Onderhoud regulier",
							description: "De verkeersbuis wordt in OnderhoudRegulier gezet. Een verkeersbuis mag alleen in OnderhoudRegulier gezet worden als hij niet toegankelijk is voor verkeer. (Overgang 10; overgang 3, 18 en 21)",
							ref: "BSTTI#10819",
							comment: "Conditie: #substate = onderhoud_herstel ; Acties: #substate:= onderhoud_regulier ; NaarRegulier() ; Conditie: #substate = (gestart | bedrijf_normaal | onderhoud_regulier) ; Acties: #substate:= onderhoud_regulier ; NaarOnderhoud() ; NaarRegulier()",
							// CHECK: voor deze bediening zijn meerdere condities en bijbehorende acties gedefinieerd! Hoe gaan we hiermee om in de javascript?
							conditie: function () {
								return this.substate == "onderhoud_herstel"; // Acties 1
								return this.substate == "gestart" || this.substate == "bedrijf_normaal" || this.substate == "onderhoud_regulier"; // Acties 2
							},
							em: function () {
								// Acties 1
								this.substate = "onderhoud_regulier";
								this.NaarRegulier();
								// Acties 2
								this.substate = "onderhoud_regulier";
								this.NaarOnderhoud();
								this.NaarRegulier();
							},
						},
						ResetOnderdrukkingen: {
							stereotype: "bediening",
							title: "Reset onderdrukkingen",
							description: "Stop het onderdrukken van alle signaleringen van de verkeersbuis.",
							ref: "BSTTI#16806",
							comment: "Conditie: * ; Acties: _signaleringen[].StopOnderdrukken()",
							conditie: function () {
								return true;
							},
							em: function () {
								forAll(this.signaleringen_verkeersbuis, "StopOnderdrukken");
							},
						},
						// Besturingen
						SetRijrichting: {
							stereotype: "besturing",
							title: "Set rijrichting",
							description: "Rijrichting instellen voor deze verkeersbuis",
							ref: "BSTTI#16617",
							comment: "Conditie: * ; Acties: #rijrichting:= richting",
							conditie: function () {
								return true;
							},
							em: function (richting) {
								this.rijrichting = richting;
							},
						},
						// De besturingen voor de state en substate-overgangen zijn:
						BedrijfNormaal_naar_BedrijfStandby: {
							stereotype: "besturing",
							title: "Bedrijf normaal naar bedrijf standby (Overgang 1)",
							description: "State overgang van bedrijf normaal naar bedrijf standby",
							ref: "BSTTI#10528",
							comment: "Conditie: #substate = bedrijf_normaal ; Acties: ; #substate:= bedrijf_standby ; NaarStandby()",
							conditie: function () {
								return this.substate == "bedrijf_normaal";
							},
							em: function () {
								this.substate = "bedrijf_standby";
								this.NaarStandby();
							},
						},
						CalamiteitOndersteunend: {
							stereotype: "besturing",
							title: "Calamiteit ondersteunend",
							description: "State overgang naar calamiteit ondersteunend. Afhankelijk van verder ontwerp zou de situatie voor kunnen komen dat een CF verkeersbuis functioneert en de bijbehorende twee/meer-buis state controller niet volledig functioneert of dat dit niet duidelijk is (bijvoorbeeld de twee/meer-buis state controller is volledig down, de GUI heeft geen verbinding met de twee/meer-buis state controller, of de twee/meer-buis state controller kan een of meer CF’s verkeersbuis niet meer aansturen of observeren). Wanneer dit een reële mogelijkheid is, moet worden overwogen om deze besturing als bediening via de MMI aan te bieden (alleen tijdens die situatie).                     (Overgang 5, 14 en 22)",
							ref: "BSTTI#16812",
							comment: "Conditie: #substate = ( gestart | bedrijf_normaal | bedrijf_standby | onderhoud_regulier | onderhoud_herstel ) ; Acties: ; #substate:= calamiteit_ondersteunend ; NaarCalamiteit(rijrichting_calamiteitenbuis) ; NaarOndersteunend()",
							conditie: function () {
								return this.substate == "gestart" || this.substate == "bedrijf_normaal" || this.substate == "bedrijf_standby" || this.substate == "onderhoud_regulier" || this.substate == "onderhoud_herstel";
							},
							em: function (rijrichting_calamiteitenbuis) {
								this.substate = "calamiteit_ondersteunend";
								this.NaarCalamiteit(rijrichting_calamiteitenbuis);
								this.NaarOndersteunend();
							},
						},
						OnderhoudHerstelNaCalamiteit: {
							stereotype: "besturing",
							title: "Onderhoud herstel na calamiteit",
							description: "State overgang naar onderhoud herstel na calamiteit (Overgang 8, 9 en 17; overgang 11).",
							ref: "BSTTI#16834",
							comment: "Conditie: #substate = ( calamiteit_volledig | calamiteit_ondersteunend | onderhoud_herstel ) && #mogelijke_calamiteit = nee ; Acties: ; #substate:= onderhoud_herstel ; NaarOnderhoud() ; NaarHerstelNaCalamiteit() ; Conditie: #substate = onderhoud_regulier ; Acties: ; #substate:= onderhoud_herstel ; NaarHerstelNaCalamiteit()",
							// CHECK: voor deze bediening zijn meerdere condities en bijbehorende acties gedefinieerd! Hoe gaan we hiermee om in de javascript?
							conditie: function () {
								return (this.substate == "calamiteit_volledig" || this.substate == "calamiteit_ondersteunend" || this.substate == "onderhoud_herstel") && this.mogelijke_calamiteit == "nee"; // Acties 1
								return this.substate == "onderhoud_regulier"; // Acties 2
							},
							em: function () {
								// Acties 1
								this.substate = "onderhoud_herstel";
								this.NaarOnderhoud();
								this.NaarHerstelNaCalamiteit();
								// Acties 2
								this.substate = "onderhoud_herstel";
								this.NaarHerstelNaCalamiteit();
							},
						},
						// De verschillende acties bij de (sub)state-overgangen zijn:
						NaarBedrijf: {
							stereotype: "besturing",
							title: "Naar bedrijf",
							description: "De acties voor de state-overgang naar bedrijf.",
							ref: "BSTTI#10579",
							comment: "Conditie: * ; Acties: ; #rijrichting_calamiteitenbuis:= ongeldig ; ResetOnderdrukkingen() ; _bf_CCTV._sf_Camera[].SetGeblokkeerd(nee) ; _bf_CCTV.SetRichtingCameras(mee) ; _bf_CCTV.CalamiteitBeeldenSetUit() ; _bf_SOS.AutoStopOnderdrukkenMeldingen() ; _bf_Omroep.StopOmroepVerkeersbuis() ; _bf_HF.SpeelRadioInVerkeersbuis() ; _bf_Ventilatie.SetOnbalansBeveiliging(aan) ; _bf_Ventilatie.SetTemperatuurBeveiliging(aan) ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingAutoStand(uit) ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingOpAutoBediening() ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetGeluidsbakensAutoStand(uit) ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetAlleGeluidsbakensOpAutoBediening() ; _bf_Vluchtdeurindicatie._sf_dVIV[].SetDVIVAutoStand(exit_overzijde) ; _bf_Vluchtdeurindicatie._sf_dVIV[].SetDVIVOpAutobediening()",
							conditie: function () {
								return true;
							},
							em: function () {
								this.rijrichting_calamiteitenbuis = "ongeldig";
								this.ResetOnderdrukkingen();
								forAll(this.bf_CCTV_Verkeersbuis.sf_Camera_Verkeersbuis, "SetGeblokkeerd", "nee");
								this.bf_CCTV_Verkeersbuis.SetRichtingCameras("mee");
								this.bf_CCTV_Verkeersbuis.CalamiteitBeeldenSetUit();
								this.bf_SOS_Verkeersbuis.AutoStopOnderdrukkenMeldingen();
								this.bf_Omroep_Verkeersbuis.StopOmroepVerkeersbuis();
								this.bf_HF_Verkeersbuis.SpeelRadioInVerkeersbuis();
								this.bf_Ventilatie_Verkeersbuis.SetOnbalansBeveiliging("aan");
								this.bf_Ventilatie_Verkeersbuis.SetTemperatuurBeveiliging("aan");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingAutoStand("uit");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingOpAutoBediening();
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetGeluidsbakensAutoStand("uit");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetAlleGeluidsbakensOpAutoBediening();
								forAll(this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_DynamischeVluchtrouteIndicatie_Verkeersbuis, "SetDVIVAutoStand", "exit_overzijde");
								forAll(this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_DynamischeVluchtrouteIndicatie_Verkeersbuis, "SetDVIVOpAutobediening");
							},
						},
						NaarNormaal: {
							stereotype: "besturing",
							title: "Naar normaal",
							description: "De acties voor de substate-overgang naar Bedrijf-Normaal.",
							ref: "BSTTI#10582",
							comment: "Conditie: * ; Acties: ; _bf_CCTV._sf_beeldregistratiesysteem.StopPermanenteOpslag() ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(aan) ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetOpAutobediening() ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(aan) ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetOpAutobediening() ; _bf_Ventilatie.SetAutobedieningsRichting(#rijrichting) ; _bf_Ventilatie.SetAutobedieningsStand(sensorregeling) ; _bf_Ventilatie.SetGeheelOpAutobediening()",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bf_CCTV_Verkeersbuis.sf_Opslagsysteem_Verkeersbuis.StopPermanenteOpslag();
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand("aan");
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetOpAutobediening();
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand("aan");
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetOpAutobediening();
								this.bf_Ventilatie_Verkeersbuis.SetAutobedieningsRichting(this.rijrichting);
								this.bf_Ventilatie_Verkeersbuis.SetAutobedieningsStand("sensorregeling");
								this.bf_Ventilatie_Verkeersbuis.SetGeheelOpAutobediening();
							},
						},
						NaarStandby: {
							stereotype: "besturing",
							title: "Naar standby",
							description: "De acties voor de substate-overgang naar Bedrijf-Standby Na Detectie.",
							ref: "BSTTI#10583",
							comment: "Conditie: * ; Acties: ; _bf_CCTV._sf_beeldregistratiesysteem.StartPermanenteOpslag() ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetAutobedieningsStand(_gesloten_deel_standby_verlichtingsstand) ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(uit) ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetOpAutobediening() ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetAutobedieningsStand(_niet_gesloten_deel_standby_verlichtingsstand) ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(uit) ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetOpAutobediening() ; _bf_Ventilatie.SetAutobedieningsRichting(#rijrichting) ; _bf_Ventilatie.SetAutobedieningsStand(_standby_ventilatiestand) ; _bf_Ventilatie.SetGeheelOpAutobediening()",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bf_CCTV_Verkeersbuis.sf_Opslagsysteem_Verkeersbuis.StartPermanenteOpslag();
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetAutobedieningsStand(this.gesloten_deel_standby_verlichtingsstand);
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand("uit");
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetOpAutobediening();
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetAutobedieningsStand(this.niet_gesloten_deel_standby_verlichtingsstand);
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand(uit);
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetOpAutobediening();
								this.bf_Ventilatie_Verkeersbuis.SetAutobedieningsRichting(this.rijrichting);
								this.bf_Ventilatie_Verkeersbuis.SetAutobedieningsStand(this.standby_ventilatiestand);
								this.bf_Ventilatie_Verkeersbuis.SetGeheelOpAutobediening();
							},
						},
						NaarOnderhoud: {
							stereotype: "besturing",
							title: "Naar onderhoud",
							description: "De acties voor de state-overgang naar Onderhoud.",
							ref: "BSTTI#10589",
							comment: "Conditie: * ; Acties: ; #rijrichting_calamiteitenbuis:= ongeldig ; ResetOnderdrukkingen() ; _bf_CCTV._sf_Camera[].SetGeblokkeerd(nee) ; _bf_CCTV._sf_beeldregistratiesysteem.StopPermanenteOpslag() ; _bf_CCTV.CalamiteitBeeldenSetUit() ; _bf_SOS.AutoStartOnderdrukkenMeldingen() ; _bf_Omroep.StopOmroepVerkeersbuis() ; _bf_HF.SpeelRadioInVerkeersbuis() ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetAutobedieningsStand(_gesloten_deel_onderhoud_verlichtingsstand) ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(uit) ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetOpAutobediening() ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(aan) ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetOpAutobediening() _bf_Ventilatie.SetOnbalansBeveiliging(aan) ; _bf_Ventilatie.SetTemperatuurBeveiliging(aan) ; _bf_Ventilatie.SetAutobedieningsRichting(#rijrichting) ; _bf_Ventilatie.SetAutobedieningsStand(_onderhoud_ventilatiestand) ; _bf_Ventilatie.SetGeheelOpAutobediening() ; _bf_rij_van_vluchtdeuren._sf_vluchtdeur[].!Alarm_VluchtdeurNietGesloten.StartOnderdrukken() ; _bf_Luchtkwaliteitsmeting.!Alarm_RookGedetecteerd.StartOnderdrukken() ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingAutoStand(uit) ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingOpAutoBediening() ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetGeluidsbakensAutoStand(uit) ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetAlleGeluidsbakensOpAutoBediening() ; _bf_Vluchtdeurindicatie._sf_dVIV[].SetDVIVAutoStand(exit_overzijde) ; _bf_Vluchtdeurindicatie._sf_dVIV[].SetDVIVOpAutobediening()",
							conditie: function () {
								return true;
							},
							em: function () {
								this.rijrichting_calamiteitenbuis = "ongeldig";
								this.ResetOnderdrukkingen();
								forAll(this.bf_CCTV_Verkeersbuis.sf_Camera_Verkeersbuis, "SetGeblokkeerd", "nee");
								this.bf_CCTV_Verkeersbuis.sf_Opslagsysteem_Verkeersbuis.StopPermanenteOpslag();
								this.bf_CCTV_Verkeersbuis.CalamiteitBeeldenSetUit();
								this.bf_SOS_Verkeersbuis.AutoStartOnderdrukkenMeldingen();
								this.bf_Omroep_Verkeersbuis.StopOmroepVerkeersbuis();
								this.bf_HF_Verkeersbuis.SpeelRadioInVerkeersbuis();
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetAutobedieningsStand(this.gesloten_deel_onderhoud_verlichtingsstand);
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand("uit");
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetOpAutobediening();
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand("aan");
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetOpAutobediening();
								this.bf_Ventilatie_Verkeersbuis.SetOnbalansBeveiliging("aan");
								this.bf_Ventilatie_Verkeersbuis.SetTemperatuurBeveiliging("aan");
								this.bf_Ventilatie_Verkeersbuis.SetAutobedieningsRichting(this.rijrichting);
								this.bf_Ventilatie_Verkeersbuis.SetAutobedieningsStand(this.onderhoud_ventilatiestand);
								this.bf_Ventilatie_Verkeersbuis.SetGeheelOpAutobediening();
								// CHECK aanroep besturing van een signalering!
								forAll(this.bf_RijVanVluchtdeuren.sf_Vluchtdeur_Verkeersbuis, "Alarm_VluchtdeurNietGesloten", "StartOnderdrukken");
								this.bf_Luchtkwaliteitsmeting_Verkeersbuis.Alarm_RookGedetecteerd.StartOnderdrukken();
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingAutoStand(uit);
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingOpAutoBediening();
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetGeluidsbakensAutoStand("uit");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetAlleGeluidsbakensOpAutoBediening();
								forAll(this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_DynamischeVluchtrouteIndicatie_Verkeersbuis, "SetDVIVAutoStand", "exit_overzijde");
								forAll(this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_DynamischeVluchtrouteIndicatie_Verkeersbuis, "SetDVIVOpAutobediening");
							},
						},
						NaarRegulier: {
							stereotype: "besturing",
							title: "Naar regulier",
							description: "De acties voor de substate-overgang naar Onderhoud-Regulier.",
							ref: "BSTTI#10754",
							comment: "Conditie: * ; Acties: ; _bf_Hulppost[].!Alarm_HulppostDeurOpen.StopOnderdrukken() ; _bf_Hulppost[].!Alarm_BlusapparaatUitgenomen.StopOnderdrukken() ;_bf_Hulppost[].!Alarm_BrandslanghaspelUitHouderGenomen.StopOnderdrukken()",
							conditie: function () {
								return true;
							},
							em: function () {
								// CHECK aanroep besturing van een signalering!
								forAll(this.bf_Hulppost_Verkeersbuis, "Alarm_HulppostDeurOpen", "StopOnderdrukken");
								forAll(this.bf_Hulppost_Verkeersbuis, "Alarm_BlusapparaatUitgenomen", "StopOnderdrukken");
								forAll(this.bf_Hulppost_Verkeersbuis, "Alarm_BrandslanghaspelUitHouderGenomen", "StopOnderdrukken");
							},
						},
						NaarHerstelNaCalamiteit: {
							stereotype: "besturing",
							title: "Naar herstel na calamiteit",
							description: "De acties voor de substate-overgang naar Onderhoud-HerstelNaCalamiteit.",
							ref: "BSTTI#10588",
							comment: "Conditie: * ; Acties: ; _bf_Hulppost[].!Alarm_HulppostDeurOpen.StartOnderdrukken() ; _bf_Hulppost[].!Alarm_BlusapparaatUitgenomen.StartOnderdrukken() ; _bf_Hulppost[].!Alarm_BrandslanghaspelUitHouderGenomen.StartOnderdrukken()",
							conditie: function () {
								return true;
							},
							em: function () {
								// CHECK aanroep besturing van een signalering!
								forAll(this.bf_Hulppost_Verkeersbuis, "Alarm_HulppostDeurOpen", "StartOnderdrukken");
								forAll(this.bf_Hulppost_Verkeersbuis, "Alarm_BlusapparaatUitgenomen", "StartOnderdrukken");
								forAll(this.bf_Hulppost_Verkeersbuis, "Alarm_BrandslanghaspelUitHouderGenomen", "StartOnderdrukken");
							},
						},
						NaarCalamiteit: {
							stereotype: "besturing",
							title: "Naar calamiteit",
							description: "De acties voor de state-overgang naar Calamiteit.",
							ref: "BSTTI#10584",
							comment: "Conditie: * ; Acties: ; #tijdstip_calamiteit:= huidige_tijd ; #rijrichting_calamiteitenbuis:= rijrichting_calamiteitenbuis ; ResetOnderdrukkingen() ; _bf_CCTV._sf_Camera[].SetGeblokkeerd(nee) ; _bf_CCTV._sf_beeldregistratiesysteem.StartPermanenteOpslag() ; _bf_SOS.AutoStartOnderdrukkenMeldingen() ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetOpAutobedieningZonderWijzigingen() ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetOpAutobedieningZonderWijzigingen() ; #verkeersbuisafsluiter_in_gebruik.Auto_Dicht() ; _bf_Ventilatie.SetOnbalansBeveiliging(uit) ; _bf_Ventilatie.SetTemperatuurBeveiliging(uit) ; _bf_Ventilatie.SetAutobedieningsRichting(rijrichting_calamiteitenbuis) ; _bf_Ventilatie.SetGeheelOpAutobediening() ; _bf_Luchtkwaliteitsmeting.!Alarm_RookGedetecteerd.StartOnderdrukken() ; _bf_Vluchtdeurindicatie._sf_dVIV[].SetDVIVAutoStand(exit_overzijde) ; _bf_Vluchtdeurindicatie._sf_dVIV[].SetDVIVOpAutobediening()",
							conditie: function () {
								return true;
							},
							em: function (rijrichting_calamiteitenbuis) {
								this.tijdstip_calamiteit = huidige_tijd;
								this.rijrichting_calamiteitenbuis = rijrichting_calamiteitenbuis;
								this.ResetOnderdrukkingen();
								forAll(this.bf_CCTV_Verkeersbuis.sf_Camera_Verkeersbuis, "SetGeblokkeerd", "nee");
								this.bf_CCTV_Verkeersbuis.sf_Opslagsysteem_Verkeersbuis.StartPermanenteOpslag();
								this.bf_SOS_Verkeersbuis.AutoStartOnderdrukkenMeldingen();
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetOpAutobedieningZonderWijzigingen();
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetOpAutobedieningZonderWijzigingen();
								// CHECK call cf_Verkeersbuisafsluiter, LTS pseudo code notatie afwijkend!
								this.cf_Afsluiter_Verkeersbuis.Auto_Dicht();
								this.bf_Ventilatie_Verkeersbuis.SetOnbalansBeveiliging("uit");
								this.bf_Ventilatie_Verkeersbuis.SetTemperatuurBeveiliging("uit");
								this.bf_Ventilatie_Verkeersbuis.SetAutobedieningsRichting(this.rijrichting_calamiteitenbuis);
								this.bf_Ventilatie_Verkeersbuis.SetGeheelOpAutobediening();
								this.bf_Luchtkwaliteitsmeting_Verkeersbuis.Alarm_RookGedetecteerd.StartOnderdrukken();
								forAll(this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_DynamischeVluchtrouteIndicatie_Verkeersbuis, "SetDVIVAutoStand", "exit_overzijde");
								forAll(this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_DynamischeVluchtrouteIndicatie_Verkeersbuis, "SetDVIVOpAutobediening");
							},
						},
						NaarVolledig: {
							stereotype: "besturing",
							title: "Naar volledig",
							description: "De acties voor de substate-overgang naar Calamiteit-Volledig.",
							ref: "BSTTI#10585",
							comment: "Conditie: * ; Acties: ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetAutobedieningsStand(_gesloten_deel_calamiteit_verlichtingsstand) ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(uit) ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetAutobedieningsStand(_niet_gesloten_deel_calamiteit_verlichtingsstand) ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(uit) ; _bf_Omroep.StopOmroepVerkeersbuis() ; _bf_HF.SpeelRadioInVerkeersbuis() ; _bf_Ventilatie.SetAutobedieningsStand(_calamiteit_ventilatiestand) ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingAutoStand(uit) ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingOpAutoBediening() ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetGeluidsbakensAutoStand(uit) ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetAlleGeluidsbakensOpAutoBediening() ; _bf_CCTV.CalamiteitBeeldenSetAan()",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetAutobedieningsStand(this.gesloten_deel_calamiteit_verlichtingsstand);
								this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand("uit");
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetAutobedieningsStand(this.niet_gesloten_deel_calamiteit_verlichtingsstand);
								this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand("uit");
								this.bf_Omroep_Verkeersbuis.StopOmroepVerkeersbuis();
								this.bf_HF_Verkeersbuis.SpeelRadioInVerkeersbuis();
								this.bf_Ventilatie_Verkeersbuis.SetAutobedieningsStand(this.calamiteit_ventilatiestand);
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingAutoStand("uit");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingOpAutoBediening();
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetGeluidsbakensAutoStand("uit");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetAlleGeluidsbakensOpAutoBediening();
								this.bf_CCTV_Verkeersbuis.CalamiteitBeeldenSetAan();
							},
						},
						NaarOndersteunend: {
							stereotype: "besturing",
							title: "Naar ondersteunend",
							description: "De acties voor de substate-overgang naar Calamiteit-Ondersteunend.",
							ref: "BSTTI#10586",
							comment: "Conditie: * ; Acties: ; _bf_Omroep.StopOmroepVerkeersbuis() ; _bf_HF.SpeelRadioInVerkeersbuis() ; _bf_Ventilatie.SetAutobedieningsStand(_ondersteunend_ventilatiestand) ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingAutoStand(uit) ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingOpAutoBediening() ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetGeluidsbakensAutoStand(uit) ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetAlleGeluidsbakensOpAutoBediening() ; _bf_CCTV.CalamiteitBeeldenSetUit()",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bf_Omroep_Verkeersbuis.StopOmroepVerkeersbuis();
								this.bf_HF_Verkeersbuis.SpeelRadioInVerkeersbuis();
								this.bf_Ventilatie_Verkeersbuis.SetAutobedieningsStand(this.ondersteunend_ventilatiestand);
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingAutoStand("uit");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingOpAutoBediening();
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetGeluidsbakensAutoStand("uit");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetAlleGeluidsbakensOpAutoBediening();
								this.bf_CCTV_Verkeersbuis.CalamiteitBeeldenSetUit();
							},
						},
						NaarEvacuatie: {
							stereotype: "besturing",
							title: "Naar evacuatie",
							description: "De acties voor de substate-overgang naar Calamiteit-Evacuatie.",
							ref: "BSTTI#10587",
							comment: "Conditie: * ; Acties: ; _bf_Omroep.SetAfTeSpelenBoodschap(_boodschap_calamiteit, _boodschap_herhalingsperiode) ; _bf_Omroep.AfspelenBoodschapVerkeersbuis() ; _bf_HF.MuteRadioInVerkeersbuis() ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingAutoStand(aan) ; _bf_Vluchtdeurindicatie._sf_contourverlichting.SetContourverlichtingOpAutoBediening() ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetGeluidsbakensAutoStand(aan) ; _bf_Vluchtdeurindicatie._sf_alle_geluidsbakens_in_buis.SetAlleGeluidsbakensOpAutoBediening() ; _bf_CCTV.CalamiteitBeeldenSetAan()",
							conditie: function () {
								return true;
							},
							em: function () {
								this.bf_Omroep_Verkeersbuis.SetAfTeSpelenBoodschap(this.boodschap_calamiteit, this.boodschap_herhalingsperiode);
								this.bf_Omroep_Verkeersbuis.AfspelenBoodschapVerkeersbuis();
								this.bf_HF_Verkeersbuis.MuteRadioInVerkeersbuis();
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingAutoStand("aan");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_Contourverlichting_Verkeersbuis.SetContourverlichtingOpAutoBediening();
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetGeluidsbakensAutoStand("aan");
								this.bf_Vluchtdeurindicatie_Verkeersbuis.sf_AlleGeluidsbakensInBuis_Verkeersbuis.SetAlleGeluidsbakensOpAutoBediening();
								this.bf_CCTV_Verkeersbuis.CalamiteitBeeldenSetAan();
							},
						},
						// Autonome processen
						HandhaafAfsluitstatusKoppelingExterneSystemen: {
							stereotype: "autonoom_proces",
							title: "Handhaaf afsluitstatus koppeling externe systemen",
							description: "Zorgt ervoor dat Externe Systemen op de hoogte worden gehouden van veranderingen van de afsluitstatus van de verkeersbuis.",
							ref: "BSTTI#14955",
							comment: "Conditie: * ; Acties: _bf_kes.SetAfsluitstatusVerkeersbuis(_id, #rijrichting, #verkeersbuisafsluiter_in_gebruik.#verkeersbuisafsluiter_status, #substate)",
							js: function () { // CHECK logica mbt verkeersbuisafsluiter_in_gebruik
								this.bf_KoppelingExterneSystemen_Tunnel.SetAfsluitstatusVerkeersbuis(this.id, this.rijrichting, /* this.verkeersbuisafsluiter_in_gebruik */ this.verkeersbuisafsluiter_status, this.substate);
							},
						},
						BewaakStandby: {
							stereotype: "autonoom_proces",
							title: "Bewaak standby",
							description: "Als de verkeersbuis een mogelijke standby na detectie gedetecteerd heeft moet de verkeersbuis in de BedrijfStandby-toestand gezet worden.",
							ref: "BSTTI#10826",
							comment: "Conditie: #mogelijke_standby = ja && #substate = bedrijf_normaal ; Acties: BedrijfNormaal_naar_BedrijfStandby()",
							js: function () {
								if (this.mogelijke_standby == "ja" && this.substate == "bedrijf_normaal") { this.BedrijfNormaal_naar_BedrijfStandby() };
							},
						},
						VertragingVerlichtingBijCalamiteitOndersteunend: {
							stereotype: "autonoom_proces",
							title: "Vertraging verlichting bij calamiteit ondersteunend",
							description: "Zorgt dat de verlichting in een verkeersbuis in calamiteit-ondersteunend zo wordt aangeschakeld dat het verkeer hier geen hinder van heeft en de verlichting tijdig (zie BSTTI#15985) op het vereiste calamiteitenniveau is.",
							ref: "BSTTI#17530",
							comment: "Conditie: #substate = calamiteit_ondersteunend && huidige_tijd > #tijdstip_verkeersvrij - _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting._max_transitietijd ; Acties: ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetAutobedieningsStand(_gesloten_deel_calamiteit_verlichtingsstand) ; _bf_Verkeersbuisverlichting._sf_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(uit) ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetAutobedieningsStand(_niet_gesloten_deel_calamiteit_verlichtingsstand) ; _bf_Verkeersbuisverlichting._sf_niet_gesloten_deel_verlichting.SetAutomatischeRegelingAutobedieningsStand(uit)",
							js: function () {
								if (this.substate == "calamiteit_ondersteunend" && huidige_tijd > (this.tijdstip_verkeersvrij - this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.max_transitietijd)) {
									this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetAutobedieningsStand(this.gesloten_deel_calamiteit_verlichtingsstand);
									this.bf_Verlichting_Verkeersbuis.sf_GeslotenDeelverlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand("uit");
									this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetAutobedieningsStand(this.niet_gesloten_deel_calamiteit_verlichtingsstand);
									this.bf_Verlichting_Verkeersbuis.sf_NietGeslotenDeelVerlichting_Verkeersbuis.SetAutomatischeRegelingAutobedieningsStand("uit");
								};
							},
						},
					},
				},
				// Veilige ruimte
				cf_VeiligeRuimte_Tunnel: {
					naam: "",
					hoortbij: "Veilige ruimte",
					titel: "Veilige ruimte coördinatie",
				},
				// Middenwand
				cf_Middenwand_Tunnel: {
					naam: "Coördinerende functie Middenwand",
					hoortbij: "Middenwand",
					titel: "Middenwand coördinatie",
				},
				// Vloeistofafvoersysteem
				cf_VloeistofAfvoersysteem: {
					naam: "Coördinerende functie Vloeistofafvoersysteem",
					hoortbij: "Tunnel",
					titel: "Vloeistofafvoersysteem",
				},
				// Twee-Buis State Controle
				cf_TweeBuisStateControle: {
					naam: "Coördinerende functie Twee-Buis State Controle",
					hoortbij: "Tunnel",
					title: "Twee-Buis state controle",
					mnu: mnu.Verkeer,
					properties: {
						// Configuratie-elementen
						cf_Verkeersbuis_Tunnel: {
							stereotype: "configuratie_element",
							title: "cf Verkeersbuis",
							description: "De coördinerende functies Verkeersbuis van een Twee-Buis tunnel. Merk op dat als de ene verkeersbuis de index vb heeft, de andere de index 3 - vb heeft.",
							ref: "BSTTI#10804",
							type: "selectitem",
							class: "Verkeersbuis",
							initdefaultvalue: [],
						},
						bf_OverdrukvoorzieningGrensruimte_Tunnel: {
							stereotype: "configuratie_element",
							title: "bf Overdruk grensruimtes",
							description: "De basisfuncties Overdrukvoorziening Grensruimte van de tunnel. Een installatie kan gebruikt worden voor meerdere ruimtes.",
							ref: "BSTTI#11491",
							type: "selectitem",
							class: "???",
							initdefaultvalue: [],
						},
						bf_Blusvoorziening_Tunnel: {
							stereotype: "configuratie_element",
							title: "bf Blusvoorziening",
							description: "De instantie van de basisfunctie bluswatervoorziening.",
							ref: "BSTTI#16126",
							type: "selectitem",
							class: "???",
						},
						bf_CADO_Tunnel: {
							stereotype: "configuratie_element",
							title: "bf CaDo",
							description: "De basisfuncties van de CaDo's die aan de verkeersbuizen grenzen.",
							ref: "BSTTI#17066",
							type: "selectitem",
							class: "???",
							initdefaultvalue: [],
						},
						bf_VEVA_Tunnel: {
							stereotype: "configuratie_element",
							title: "bf VeVa",
							description: "De basisfuncties van de VeVa's die worden ontgrendeld bij uitval van 3B.",
							ref: "BSTTI#16955",
							type: "selectitem",
							class: "???",
							initdefaultvalue: [],
						},
						cf_CCTV_Tunnel: {
							stereotype: "configuratie_element",
							title: "cf CCTV tunnel",
							description: "De coördinerende functie CCTV Tunnel.",
							ref: "BSTTI#14619",
							type: "selectitem",
							class: "???",
						},
						calamiteit_tijd: {
							stereotype: "configuratie_element",
							title: "Calamiteit tijd",
							description: "De tijdsduur waarna een tunnel waarin een mogelijke calamiteit gedetecteerd is naar calamiteitenbedrijf gezet moet worden. Deze tijdsduur dient maximaal 30 seconden te zijn. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
							ref: "BSTTI#11471",
							type: "number",
							unit: "s",
							min: "0",
							max: "30",
							step: "1",
							initdefaultvalue: "20",
						},
						signaleringen_tunnel: {
							stereotype: "configuratie_element",
							title: "Signaleringen",
							description: "De lijst van signaleringen voor de  'overige tunnelfuncties': dit omvat alle signaleringen die niet in een van de categorieen verkeersbuis, veilige ruimte of dienstgebouw thuishoren.",
							ref: "BSTTI#16809",
							// CHECK type?
							type: "selectitem",
							initdefaultvalue: [],
						},
						// Variabelen
						state: {
							stereotype: "variabele",
							title: "State",
							description: "De samengevatte state van de verkeersbuizen. De waarde 'deel_bedrijf' geeft aan dat een verkeersbuis zich in substate 'bedrijf_normaal' of 'bedrijf_standby' bevindt en een (andere) buis zich in een andere substate bevindt (typisch 'onderhoud_regulier', 'onderhoud_herstel', of 'gestart').",
							ref: "BSTTI#16789",
							comment: "Init: gestart",
							enum: { gestart: "Gestart", bedrijf: "Bedrijf", calamiteit: "Calamiteit", onderhoud: "Onderhoud", deel_bedrijf: "Deelbedrijf" },
							initdefaultvalue: "gestart",
						},
					},
					operations: {
						// Bedieningen
						ResetOnderdrukkingen: {
							stereotype: "bediening",
							title: "Reset onderdrukkingen",
							description: "Stop het onderdrukken van alle signaleringen van de 'overige tunnelfuncties' (d.w.z. niet behorend tot verkeersbuis, veilige ruimte of dienstgebouw).",
							ref: "BSTTI#16810",
							comment: "Conditie: * ; Acties: _signaleringen[].StopOnderdrukken()",
							conditie: function () {
								return true;
							},
							em: function () {
								forAll(this.signaleringen_tunnel, "StopOnderdrukken");
							},
						},
						// Besturingen
						TunnelActiesBijCalamiteit: {
							stereotype: "besturing",
							title: "Tunnel acties bij calamiteit",
							description: "De acties voor de state-overgang naar Calamiteit.",
							ref: "BSTTI#10820",
							comment: "Conditie: * ; Acties: ; ResetOnderdrukkingen() ; _bf_CaDo[].!Alarm_CaDoNietGesloten.StartOnderdrukken() ; _bf_Overdruk_grensruimtes[].SetAutobedieningsStand(aan) ; _bf_Overdruk_grensruimtes[].SetOpAutobediening() ; _cf_CCTV_systeem.SetVerkeersbuisDetailKanaalDerden(vb) ; _cf_CCTV_systeem.SetDoorgifteKanaalDerden(aan) ; _bf_Blusvoorziening.SetHandVraag(bewaken) ; _bf_VeVa[].VergrendelPlaatselijkeBediening()",
							conditie: function () {
								return true;
							},
							em: function (vb) {
								this.ResetOnderdrukkingen();
								forAll(this.bf_CADO_Tunnel, "Alarm_CaDoNietGesloten", "StartOnderdrukken()");
								forAll(this.bf_OverdrukvoorzieningGrensruimte_Tunnel, "SetAutobedieningsStand", "aan");
								forAll(this.bf_OverdrukvoorzieningGrensruimte_Tunnel, "SetOpAutobediening");
								this.cf_CCTV_Tunnel.SetVerkeersbuisDetailKanaalDerden(vb);
								this.cf_CCTV_Tunnel.SetDoorgifteKanaalDerden("aan");
								this.bf_Blusvoorziening_Tunnel.SetHandVraag("bewaken");
								forAll(this.bf_VEVA_Tunnel, "VergrendelPlaatselijkeBediening");
							},
						},
						TunnelActiesBijBedrijfOfOnderhoud: {
							stereotype: "besturing",
							title: "Tunnel acties bij bedrijf of onderhoud",
							description: "De acties voor de state-overgang naar Bedrijf of Onderhoud.",
							ref: "BSTTI#10821",
							comment: "Conditie: * ; Acties: ; ResetOnderdrukkingen() ; IF #state = onderhoud THEN ; _bf_CaDo[].!Alarm_CaDoNietGesloten.StartOnderdrukken() ; END_IF ; _bf_Overdruk_grensruimtes[].SetAutobedieningsStand(aan) ; _bf_Overdruk_grensruimtes[].SetOpAutobediening() ; _cf_CCTV_systeem.SetDoorgifteKanaalDerden(uit) ; _bf_Blusvoorziening.SetHandVraag(bewaken) ; _bf_VeVa[].VergrendelPlaatselijkeBediening()",
							conditie: function () {
								return true;
							},
							em: function () {
								this.ResetOnderdrukkingen();
								if (this.state == "onderhoud") { forAll(this.bf_CADO_Tunnel, "Alarm_CaDoNietGesloten", "StartOnderdrukken()") };
								forAll(this.bf_OverdrukvoorzieningGrensruimte_Tunnel, "SetAutobedieningsStand", "aan");
								forAll(this.bf_OverdrukvoorzieningGrensruimte_Tunnel, "SetOpAutobediening");
								this.cf_CCTV_Tunnel.SetDoorgifteKanaalDerden("uit");
								this.bf_Blusvoorziening_Tunnel.SetHandVraag("bewaken");
								forAll(this.bf_VEVA_Tunnel, "VergrendelPlaatselijkeBediening");
							},
						},
						// Autonome processen
						BewaakCalamiteit: {
							stereotype: "autonoom_proces",
							title: "Bewaak calamiteit",
							description: "Als een verkeersbuis een calamiteit detecteert moet na een _calamiteit_detectie_tijd die verkeersbuis in calamiteit_volledig gezet worden en de gerelateerde verkeersbuizen in calamiteit_ondersteunend, tenzij een van de buizen al in calamiteit_volledig of calamiteit_ondersteund zit. Een verkeersbuis die in calamiteit_ondersteunend zit kan niet in calamiteit_volledig gezet worden.Als dit nodig is moet de bediening handmatig de desbetreffende systemen aansturen.",
							ref: "BSTTI#10807",
							comment: "Conditie: _cf_Verkeersbuis[].#substate <> calamiteit_volledig && _cf_Verkeersbuis[].#substate<> calamiteit_evacuatie && _cf_Verkeersbuis[i].#calamiteit_detectie_tijd ≥ _calamiteit_tijd ; Acties: ; j(j <> i && _cf_Verkeersbuis[j].#substate<> calamiteit_ondersteunend: ;_cf_Verkeersbuis[j].CalamiteitOndersteunend(_cf_Verkeersbuis[i].#rijrichting)) ; _cf_Verkeersbuis[i].CalamiteitVolledig()",
							js: function () {
								// CHECK omzetten pseudo code naar js code!
							},
						},
						HandhaafBluswatervoorzieningStand: {
							stereotype: "autonoom_proces",
							title: "Handhaaf bluswatervoorziening stand",
							description: "De blusvoorziening moet op blusdruk worden gebracht als een verkeersbuis daarom vraagt en als een bediening van de basisfunctie bluswatervoorziening (onafhankelijk van dit autonome proces) daarom vraagt. De basisfunctie zorgt dat bewaken wordt gezet zodra deze situaties niet meer optreden.",
							ref: "BSTTI#10807",
							comment: "Conditie: _cf_Verkeersbuis[i].#blusvraag = ja ; Acties: _bf_Blusvoorziening.SetAutoVraag(blussen) ; Conditie: _cf_Verkeersbuis[].#blusvraag = nee ; Acties: _bf_Blusvoorziening.SetAutoVraag(bewaken)",
							js: function () {
								if (checkOne(this.cf_Verkeersbuis_Tunnel, "blusvraag", "ja")) { this.bf_Blusvoorziening_Tunnel.SetAutoVraag("blussen") };
								if (checkAll(this.cf_Verkeersbuis_Tunnel, "blusvraag", "nee")) { this.bf_Blusvoorziening_Tunnel.SetAutoVraag("bewaken") };
							},
						},
						// CHECK AANVULLEN MET OVERIGE AUTONOME PROCESSEN, VASTSTELLEN WELKE JS CODE TE GEBRUIKEN.
					},
				},
				// Veilige Ruimte State Controle
				cf_VeiligeRuimteStateControle: {
					naam: "Coördinerende functie Veilige Ruimte State Controle",
					hoortbij: "Veilige ruimte",
					titel: "Veilige ruimte state controle",
				},
				// Middenwand State Controle
				cf_MiddenwandStateControle: {
					naam: "Coördinerende functie Middenwand State Controle",
					hoortbij: "Middenwand",
					titel: "Middenwand state controle",
				},
				// Vloeistofafvoer State Controle
				cf_VloeistofAfvoersysteemStateControle: {
					naam: "Coördinerende functie Vloeistofafvoersysteem State Controle",
					hoortbij: "Tunnel",
					titel: "Vloeistofafvoersysteem state controle",
				},
				// Rijrichting wisselaar
				cf_Rijrichtingwisselaar: {
					naam: "Coördinerende functie Rijrichting Wisselaar",
					hoortbij: "Verkeersbuis",
					titel: "Rijrichting wisselaar",
				},
				// Vluchtroute ondersteuning
				cf_VluchtrouteOndersteuning: {
					naam: "Coördinerende functie Vluchtroute Ondersteuning",
					hoortbij: "Tunnel",
					titel: "Vluchtroute ondersteuning",
				},
			}
		}
});
AIM.extend({
		components: {
			schemas: {
				Company:{},
				Verkeersbuis: {
					//cf_Afsluiter_Verkeersbuis: AIM.api.components.schemas.cf_Afsluiter_Verkeersbuis,
					// {
                    //     Hand_VerkeerslichtenRood: function() {
                    //         //console.debug("Verkeerslichten", this.bf_Verkeerslichten_Verkeersbuis);
                    //         this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand("rood");
                    //     }
                    // }
				},
				Verkeerslichten: {
					// SetAutoStand: function(stand) {
                    //     console.debug("Verkeerslichten.SetAutoStand", this.ID, stand);
                    //     ws.request({ sub:this.ID, path: `/SetStand(rood)`, method: 'GET' });
                    // }
				},
				Verkeerslicht: {
				},
			},
		},
});
AIM.extend({
	// client: {
	// 	//system: { id: 3487430, uid: "C00C5B73-4565-4046-8CFE-1DDAF9CEAE82" },
	// 	//domain: { id: 3487430, uid: "C00C5B73-4565-4046-8CFE-1DDAF9CEAE82" },
	//
	// 	//system: { id: 3490367, uid: "0882B695-88BB-41D4-B991-79223B1AFE70" },
	//
	// },
	stereotype: {
		configuratie_element: {
			label: 'Configuratie elementen',
		},
		commando: {
			label: "Commando's",
		},
		toestandsvariabele: {
			label: 'Toestandsvariabelen',
		},
		variabele: {
			label: 'Variabelen',
		},
		bediening: {
			label: 'Bedieningen',
		},
		besturing: {
			label: 'Besturingen',
		},
		signalering: {
			label: 'Signaleringen',
		},
		autonoom_proces: {
			label: 'Autonoom processen',
		}
	},
		"components": {
			"schemas": {
				"Softwarefunction": {
					"properties": {
						"Name": {
							"placeholder": "Name",
							"default": 1
						},
						"Master": {
							"placeholder": "Onderdeel van",
							"typeID": 11
						},
						"Source": {
							"placeholder": "Afgeleid van"
						},
						"HoortBij": {
							"$ref": "#/components/schemas/System"
						},
						"Categorie": {
							"placeholder": "Categorie"
						}
					}
				},
				System:{

				},
			},
		},
	navleft: {
		items: {
			Start: {
				className: 'start', href: '#AIM.start?', items: {
					Favorieten: { className: "fav", get: { q: "*", filter: "id+IN(SELECT+id+FROM+om.itemFav+WHERE+userID=" + AIM.userID + ")" }, items: {} },
					Recent: { className: "History", get: { q: "*", filter: "id+IN(SELECT+id+FROM+om.itemuservisit+WHERE+userID=" + AIM.userID + ")" }, items: {} },
					//Gedeeld: { className: "group", get: { q: "*", filter: "id+IN(SELECT+id+FROM+om.itemuservisit+WHERE+userID=" + AIM.userID + ")" }, items: {} },
					//Prullenbak: { className: "trash", get: { q: "*", filter: "deletedDT+IS+NOT+NULL" }, items: {} },
				}
			},
			Website: {
				className: "Website", items: {
					"Websites": { className: "Website", title: "Web sites", get: { title: "Web sites", folder: 'Website', filter: "hostID<>1", q: "" } },
					"Webpages": { className: "Webpage", title: "Web pages", get: { title: "Web pages", folder: 'Webpage', filter: "hostID<>1", q: "" } },
					"Helppages": { className: "HelpPage", title: "Help pages", get: { title: "Help pages", folder: 'HelpPage', filter: "", q: "" } },
				}
			},
			Organisatie: {
				className: "crm", items: {
					"Contactpersonen": { className: "person", get: { title: 'Contact', folder: 'Contact', filter: "hostID<>1", q: '' }, },
					"Organisaties": { className: "company", get: { title: 'Company', folder: 'Company', filter: "hostID<>1", q: '' }, },
					//"Mailgroupen": { get: { folder: 'mailgroup', filter: "hostID<>1", q: '' } },
				}
			},
			SCADA: {
				title: "SCADA", className: "scada", items: {
					Alerts: { className: "alert", get: { title: "Alerts", folder: "alert", filter: "hostID<>1", q: "*", id: "" } },
				}
			},
			Engineering: {
				title: "Engineering", className: "se", items: {
					Signal: { className: "signal", get: { folder: 'signal', filter: "hostID<>1", q: '', id: '', title: 'Signals' } },
					SoftwareFunction: { className: "softwarefunction", get: { folder: 'softwarefunction', filter: "hostID<>1", q: '', id: '', title: 'Software functies' } },
					Instruments: { get: { folder: 'instrument', q: '' } },
					Products: { get: { title: 'Products', folder: 'system', filter: "hostID<>1+AND+srcID=masterID+AND+id+NOT+IN+(SELECT+masterID+FROM+api.items+WHERE+masterid=srcid)", q: '' } },
					Systems: { get: { title: 'Systems', folder: 'System', filter: "hostID<>1", q: '' } },
					IO: { get: { folder: 'io', filter: "hostID<>1", q: '' } },
					Document: { className: "document", get: { folder: 'document', filter: "hostID<>1", q: '', id: '', title: 'Documenten' } },
					Asset: { get: { folder: 'product', filter: "hostID<>1", q: '' } },
					Locations: { className: "location", get: { folder: 'location', filter: "hostID<>1", q: '', id: '', title: 'Locations' } },
				}
			},
			Work: {
				className: "taskboard", items: {
					"Taken": { className: "task", get: { folder: 'task', filter: "hostID<>1", q: '', id: '', title: 'Taken' } },
					"Mijn taken": { className: "task", get: { folder: 'task', filter: "hostID<>1+AND+ownerID=" + AIM.userID, q: '', id: '', title: 'Mijn taken' } },
					"Alicon support": { className: "support", get: { folder: 'task', filter: "hostID<>1+AND+ownerID=2753253", q: '', id: '', title: 'Support taken' } },
				}
			},
			Administratie: {
				className: "administratie"
			},
			Outlook: {
				className: "crm", items: {
					Contacts: { className: "person", get: { origin: 'https://aliconnect.nl/aliconnect/api/', folder: 'contacts', filter: '', q: '', id: '', title: 'Outlook contacten', select: 'DisplayName,EmailAddresses,MobilePhone1', } },
					Messages: { className: "company", get: { origin: 'https://aliconnect.nl/aliconnect/api/', folder: 'messages', filter: '', q: '', id: '', title: 'Outlook berichten' } },
					Events: { className: "company", get: { origin: 'https://aliconnect.nl/aliconnect/api/', folder: 'events', filter: '', q: '', id: '', title: 'Outlook gebeurtenissen' } },
					Calendar: { className: "company", get: { origin: 'https://aliconnect.nl/aliconnect/api/', folder: 'calenderview', filter: '', q: '', id: '', title: 'Outlook calendar' } },
				}
			},
			Admin: {
				className: "config", items: {
					"Groups": { className: "crm", get: { folder: 'groups', q: '', id: '', title: 'Groepen' } },
					"Keys": { className: "keys", get: { folder: 'keys', q: '', id: '', title: 'Keys' } },
					"License": { className: "License", get: { folder: 'License', q: '', id: '', title: 'License' } },
					"Edit API": { href: "#/AIM/editApi" },
				}
			},
			DMSgeneric: {
				className: "se", title: "DMS Generic", items: {
					System: { title: "System", get: { title: "System", folder: "dms_System", id: '', q: '*', order: '' }, },
					Tag: { title: "Tag", get: { title: "Tag", folder: "dms_Tag", id: '', q: '*', order: '' }, },
					ModbusTCPRanges: { title: "ModbusTCPRanges", get: { title: "ModbusTCPRanges", folder: "dms_ModbusTCPRange", id: '', q: '*', order: '' }, },
					tblSetPointAlarm: { title: "tblSetPointAlarm", get: { title: "tblSetPointAlarm", folder: "dms_tblSetPointAlarm", id: '', q: '*', order: '' }, },
					SNMPItem: { title: "SNMPItem", get: { title: "SNMPItem", folder: "dms_SNMPItem", id: '', q: '*', order: '' }, },
				}
			},
			DMSspecific: {
				className: "se", title: "DMS Specific", items: {
					Location: { title: "Location", get: { title: "Location", folder: "dms_Location", id: '', q: '*', order: '' }, },
					Group: { title: "Group", get: { title: "Group", folder: "dms_Group", id: '', q: '*', order: '' }, },
					Place: { title: "Place", get: { title: "Place", folder: "dms_Place", id: '', q: '*', order: '' }, },
					ModbusTCPDevice: { title: "ModbusTCPDevice", get: { title: "ModbusTCPDevice", folder: "dms_ModbusTCPDevice", id: '', q: '*', order: '' }, },
					SNMPDevice: { title: "SNMPDevice", get: { title: "SNMPDevice", folder: "dms_SNMPDevice", id: '', q: '*', order: '' }, },
					SystemInstance: { title: "SystemInstance", get: { title: "SystemInstance", folder: "dms_SystemInstance", id: '', q: '*', order: '' }, },
					SetpointAlarmSetting: { title: "SetpointAlarmSetting", get: { title: "SetpointAlarmSetting", folder: "dms_SetpointAlarmSetting", id: '', q: '*', order: '' }, },
				}
			},
			DMS: {
				className: "se", title: "DMS", items: {
					dmsSystem: { title: "DMS Systems", get: { title: "DMS Systems", folder: "dmsSystem", id: '', q: '*', order: '' }, },
					dmsModbusTCPRange: { title: "DMS ModbusTCPRange", get: { title: "DMS ModbusTCPRange", folder: "dmsModbusTCPRange", id: '', q: '*', order: '' }, },
					dmsTag: { title: "DMS Tag", get: { title: "DMS Tag", folder: "dmsTag", id: '', q: '*', order: '' }, },
					dmsAlarm: { title: "DMS Alarm", get: { title: "DMS Alarm", folder: "dmsAlarm", id: '', q: '*', order: '' }, },
					dmsMeasurment: { title: "DMS Measurment", get: { title: "DMS Measurment", folder: "dmsMeasurment", id: '', q: '*', order: '' }, },
					dmsStatus: { title: "DMS Status", get: { title: "DMS Status", folder: "dmsStatus", id: '', q: '*', order: '' }, },
					dmsSetpointAlarm: { title: "DMS SetpointAlarm", get: { title: "DMS SetpointAlarm", folder: "dmsSetpointAlarm", id: '', q: '*', order: '' }, },
					dmsStation: { title: "DMS Station", get: { title: "DMS Station", folder: "dmsStation", id: '', q: '*', order: '' }, },
				}
			},
		}
	},
});

// tms = {
// 	Verkeersbuis: {
// 		cf_Afsluiter_Verkeersbuis: {
// 			naam: "Coördinerende functie VerkeersbuisAfsluiter",
// 			hoortbij: "Verkeersbuis",
// 			titel: "Verkeersbuisafsluiter",
// 			mnu: mnu.Verkeer,
// 			//menu: 'Verkeer',
// 			properties: {
// 				// Configuratie-elementen
// 				bf_Verkeerslichten_Verkeersbuis: {
// 					stereotype: "configuratie_element",
// 					title: "Verkeerslichten",
// 					description: "De basisfunctie Verkeerslichten voor deze verkeersbuisafsluiter. Bij een wisselbuis zijn dit enkel de Verkeerslichten die aanwezig zijn bij de ingang die deze verkeersbuisafsluiter afsluit.",
// 					ref: "BSTTI#16885",
// 					type: "selectitem",
// 					class: "Verkeerslichten",
// 				},
// 				bf_MTMkoppeling_Verkeersbuis: {
// 					stereotype: "configuratie_element",
// 					title: "MTM koppeling",
// 					description: "De basisfunctie MTM-Koppeling voor de rijrichting van deze verkeersbuisafsluiter.",
// 					ref: "BSTTI#6109",
// 					type: "selectitem",
// 					class: "MTM koppeling",
// 				},
// 				bf_Afsluitboom_Verkeersbuis: {
// 					stereotype: "configuratie_element",
// 					title: "",
// 					description: "De basisfuncties Afsluitboom voor de rijbaan en de vluchtstrook van deze verkeersbuis. Een afsluitboom kan mogelijk meerdere rijstroken tegelijk afsluiten. Bij een wisselbuis zijn dit enkel de afsluitbomen die aanwezig zijn bij de ingang die deze verkeersbuisafsluiter afsluit.",
// 					ref: "BSTTI#6111",
// 					type: "selectitem",
// 					class: "Afsluitboom",
// 					//initdefaultvalue: [], // CHECK: Is dit nodig?
// 				},
// 				sf_Rijstrook_Verkeersbuis: {
// 					stereotype: "configuratie_element",
// 					title: "Rijstrook",
// 					description: "De subfuncties Rijstrook voor de rijbaan van deze verkeersbuis. Let op dat een eventuele vluchtstrook hier niet bij hoort. Bij een wisselbuis heeft elke verkeersbuisafsluiter zijn eigen subfuncties Rijstrook.",
// 					ref: "BSTTI#16145",
// 					type: "selectitem",
// 					class: "Rijstrook",
// 					//initdefaultvalue: [], // CHECK: Is dit nodig?
// 				},
// 				bf_CCTV_Verkeersbuis: {
// 					stereotype: "configuratie_element",
// 					title: "CCTV",
// 					description: "De basisfunctie CCTV.",
// 					ref: "BSTTI#9682",
// 					type: "selectitem",
// 					class: "CCTV",
// 				},
// 				sf_Verkeerslichten_Camera: {
// 					stereotype: "configuratie_element",
// 					title: "Camera nabij de Verkeerslichten",
// 					description: "De camera die de Verkeerslichten en het verkeer daarvoor in beeld kan brengen. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
// 					ref: "BSTTI#9680",
// 					type: "selectitem",  // CHECK: Juiste type?
// 					class: "sf_Camera_Verkeersbuis",
// 				},
// 				verkeerslichten_camera_preset: {
// 					stereotype: "configuratie_element",
// 					title: "Camera preset voor zicht op de Verkeerslichten",
// 					description: "De preset voor _sf_Verkeerslichten_camera zodat de Verkeerslichten en het verkeer daarvoor zichtbaar zijn. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
// 					ref: "BSTTI#9681",
// 					type: "selectitem", // CHECK: Juiste type?
// 					class: "Preset",
// 				},
// 				sf_Afsluitbomen_Camera: {
// 					stereotype: "configuratie_element",
// 					title: "Camera nabij de afsluitbomen",
// 					description: "De camera die de afsluitbomen en het verkeer daarvoor in beeld kan brengen. Dit configuratie - element moet instelbaar zijn via een onderhoudskoppelvlak.",
// 					ref: "BSTTI#14106",
// 					type: "selectitem", // CHECK: Juiste type?
// 					class: "sf_Camera_Verkeersbuis",
// 				},
// 				afsluitbomen_camera_preset: {
// 					stereotype: "configuratie_element",
// 					title: "Camera preset voor zicht op de afsluitbomen",
// 					description: "De preset voor _sf_afsluitbomen_camera die de afsluitbomen en het verkeer daarvoor in beeld brengt. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
// 					ref: "BSTTI#14107",
// 					type: "selectitem", // CHECK: Juiste type?
// 					class: "Preset",
// 				},
// 				tijd_rood_voor_afsluitbomen_dicht: {
// 					stereotype: "configuratie_element",
// 					title: "Tijd rood voor afsluitbomen dicht",
// 					description: "De tijdsduur die de Verkeerslichten op rood moeten staan voordat de afsluitbomen dicht mogen. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak. De instelling van dit configuratie-element mag alleen i.s.m.een verkeerskundige en tunnelveiligheidsdeskundige van RWS worden aangepast. Let op: de waarden van dit configuratie-element en het gerelateerde element van de LFV Verkeerslichten(BSTTI#16918) moeten op elkaar zijn afgestemd.",
// 					ref: "BSTTI#15962",
// 					type: "number",
// 					unit: "s",
// 					min: 0,
// 					max: 60,
// 					step: 1,
// 					//initdefaultvalue: "4", // CHECK: is het noodzakelijk om de waarde voor een configuratie-element hier vast te leggen?
// 				},
// 				tijd_aansturing_afsluitbomen: {
// 					stereotype: "configuratie_element",
// 					title: "Tijd aansturing afsluitbomen",
// 					description: "De maximale tijdsduur die LFV's Afsluitboom autonoom worden aangestuurd (bij enkele specifieke opdrachten aan de Verkeersbuisafsluiter, m.n. automatisch neer sturen bij calamiteit of uitval bediening). De waarde van dit configuratie-element moet zo worden gekozen dat voldoende zeker is dat de afsluitbomen de 'neer' stand zullen bereiken, maar ook zo dat overgangen van de afsluitboomstanden als voldoende bumpless kunnen worden gezien (i.v.m. Machinerichtlijn), ook bij overgang van niet bestuurbaar naar bestuurbaar na een tijdelijke storing, en ook rekening houdend met tijden benodigd om Verkeerslichten naar rood te sturen en maximale reactietijden van de betrokken LFV's. Dit configuratie-element moet instelbaar zijn via een onderhoudskoppelvlak.",
// 					ref: "BSTTI#16943",
// 					type: "number",
// 					unit: "m",
// 					min: 0,
// 					max: 60,
// 					step: 1,
// 					//initdefaultvalue: "15", // CHECK: is het noodzakelijk om de waarde voor een configuratie-element hier vast te leggen?
// 				},
// 				// Variabelen
// 				beschikbaarheid_afsluitbomen: {
// 					stereotype: "variabele",
// 					title: "Beschikbaarheid afsluitbomen",
// 					description: "Geeft de beschikbaarheid van de afsluitbomen voor de verkeersbuis aan.",
// 					ref: "BSTTI#9388",
// 					comment: "Conditie: _bf_Afsluitboom[].#beschikbaarheid = beschikbaar ; Waarde: beschikbaar ; Conditie: _bf_Afsluitboom[].#beschikbaarheid = niet_beschikbaar ; Waarde: niet_beschikbaar ; Conditie: overige situaties ; Waarde: beperkt_beschikbaar",
// 					enum: { niet_beschikbaar: "Niet beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar", beschikbaar: "Beschikbaar" },
// 					get: function () {
// 						return checkAll(this.bf_Afsluitboom_Verkeersbuis, "beschikbaarheid", "beschikbaar") ? "beschikbaar" : checkAll(this.bf_Afsluitboom_Verkeersbuis, "beschikbaarheid", "niet_beschikbaar") ? "niet_beschikbaar" : "beperkt_beschikbaar";
// 					},
// 				},
// 				doel_stand: {
// 					stereotype: "variabele",
// 					title: "Gewenste stand",
// 					description: "De doel-stand voor de Verkeerslichten en afsluitbomen van deze verkeersbuis. Via de autonome processen worden MTM, Verkeerslichten en afsluitbomen stapsgewijs in de juiste stand gezet. Zie BSTTI#16963 voor de initialisatie van deze variabele.",
// 					ref: "BSTTI#9399",
// 					comment: "",
// 					enum: { afsluitbomen_dicht: "Afsluitbomen dicht", afsluitbomen_stop: "Äfsluitbomen stop", rood: "Rood", geel_knipperen: "Geel knipperen", gedoofd: "Gedoofd" },
// 				},
// 				verkeersbuisafsluiter_status: {
// 					stereotype: "variabele",
// 					title: "Status",
// 					description: "Geeft de status van de verkeersbuisafsluiter voor de verkeersbuis aan.",
// 					ref: "BSTTI#8107",
// 					comment: "Conditie: _sf_Rijstrook[].#status = open ; Waarde: open ; Conditie: _sf_Rijstrook[].#status = dicht ; Waarde: dicht ; Conditie: _sf_Rijstrook[i].#status = ongeldig ;	Waarde: ongeldig ; Conditie: overige situaties ; Waarde: deels_afgesloten",
// 					enum: { open: "Open", deels_afgesloten: "Deels afgesloten", dicht: "Dicht" },
// 					get: function () {
// 						return checkAll(this.sf_Rijstrook_Verkeersbuis, "status", "open") ? "open" : checkAll(this.sf_Rijstrook_Verkeersbuis, "status", "dicht") ? "dicht" : checkOne(this.sf_Rijstrook_Verkeersbuis, "status", "ongeldig") ? "ongeldig" : "deels_afgesloten";
// 					},
// 				},
// 				meest_afgesloten_stand: {
// 					stereotype: "variabele",
// 					title: "Meest afgesloten stand",
// 					description: "De samengevatte stand van de afsluitbomen en Verkeerslichten, waarbij de afsluitbomen leidend zijn. Als niet alle afsluitbomen de stand 'op' hebben of niet alle afsluitbomen de stand 'neer' hebben, is de stand 'afsluitbomen_onbepaald'; dit is ook het geval als een afsluitboom niet observeerbaar is of gestopt is.",
// 					ref: "BSTTI#15961",
// 					comment: "Conditie: _bf_Afsluitboom[].#stand = neer ; Waarde: afsluitbomen_dicht ; Conditie: _bf_Afsluitboom[i].#stand <> op && _bf_Afsluitboom[j].#stand <> neer ; Waarde: afsluitbomen_onbepaald ; Conditie: _bf_Afsluitboom[].#stand = op ; Waarde: _bf_Verkeerslichten.#stand",
// 					enum: { afsluitbomen_dicht: "Afsluitbomen dicht", afsluitbomen_onbepaald: "Afsluitbomen onbepaald", rood: "Rood", geel: "Geel", geel_knipperen: "Geel knipperen", groen: "Groen", gedoofd: "Gedoofd" },
// 					get: function () {
// 						return checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "neer") ? "afsluitbomen_dicht" : checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") ? this.bf_Verkeerslichten_Verkeersbuis.stand : "afsluitbomen_onbepaald";
// 					},
// 				},
// 				voldoende_rood_voor_afsluitbomen: {
// 					stereotype: "variabele",
// 					title: "Afsluitbomen mogen neer",
// 					description: "Geeft aan of de afsluitbomen mogen worden neergelaten.",
// 					ref: "BSTTI#16890",
// 					comment: "Conditie: * ; Waarde: huidige_tijd > #tijdstip_rood_bereikt + _tijd_rood_voor_afsluitbomen_dicht",
// 					enum: { ja: "Ja", nee: "Nee" },
// 					get: function () { return huidige_tijd > this.tijdstip_rood_bereikt + ms(this.tijd_rood_voor_afsluitbomen_dicht); },
// 				},
// 				in_gebruik: {
// 					stereotype: "variabele",
// 					title: "In gebruik",
// 					description: "Geeft voor toepassing in wisselbuizen aan of deze instantie van functie verkeersbuisafsluiter wel of niet in gebruik moet zijn. Voor toepassing in verkeersbuizen die geen wisselbuizen zijn, dient de waarde van #in_gebruik altijd 'ja' te zijn. N.B.: de waarde van #in_gebruik representeert een streven.Of de verkeersbuisafsluiter daadwerkelijk in gebruik is wordt weergegeven door de variabele #daadwerkelijk_in_gebruik.",
// 					ref: "BSTTI#16550",
// 					comment: "",
// 					enum: { ja: "Ja", nee: "Nee" },
// 				},
// 				daadwerkelijk_in_gebruik: {
// 					stereotype: "variabele",
// 					title: "Daadwerkelijk in gebruik",
// 					description: "Geeft aan of deze instantie van functie verkeersbuisafsluiter daadwerkelijk in gebruik is.",
// 					ref: "BSTTI#16551",
// 					comment: "Conditie: _bf_Verkeerslichten.#daadwerkelijk_in_gebruik = ja && _bf_mtm.#daadwerkelijk_in_gebruik = ja && _bf_Afsluitboom[].#daadwerkelijk_in_gebruik = ja && #in_gebruik = ja ; Waarde: ja ; Conditie: _bf_Verkeerslichten.#daadwerkelijk_in_gebruik = nee && _bf_mtm.#daadwerkelijk_in_gebruik = nee && _bf_Afsluitboom[].#daadwerkelijk_in_gebruik = nee && #in_gebruik = nee ; Waarde: nee ; Conditie: overige situaties ; Waarde: gedeeltelijk",
// 					enum: { ja: "Ja", nee: "Nee", gedeeltelijk: "Gedeeltelijk" },
// 					get: function () {
// 						// console.debug(this.naam, this.in_gebruik);
// 						return this.bf_Verkeerslichten_Verkeersbuis.daadwerkelijk_in_gebruik == "ja" && this.bf_MTMkoppeling_Verkeersbuis.daadwerkelijk_in_gebruik == "ja" && checkAll(this.bf_Afsluitboom_Verkeersbuis, "daadwerkelijk_in_gebruik", "ja") && this.in_gebruik == "ja" ? "ja" : this.bf_Verkeerslichten_Verkeersbuis.daadwerkelijk_in_gebruik == "nee" && this.bf_MTMkoppeling_Verkeersbuis.daadwerkelijk_in_gebruik == "nee" && checkAll(this.bf_Afsluitboom_Verkeersbuis, "daadwerkelijk_in_gebruik", "nee") && this.in_gebruik == "nee" ? "nee" : "gedeeltelijk";
// 					},
// 				},
// 				mtm_snelheidsbeperking: {
// 					stereotype: "variabele",
// 					title: "Snelheidsbeperking actief",
// 					description: "Geeft aan of een snelheidsbeperking ingesteld moet worden (ja) of opgeheven mag worden (nee).",
// 					ref: "BSTTI#16886",
// 					comment: "Conditie: #doel_stand = (afsluitbomen_stop | afsluitbomen_dicht | rood | geel_knipperen) || (#meest_afgesloten_stand <> gedoofd && #meest_afgesloten_stand <> ongeldig) ; Waarde: ja ; Conditie: #doel_stand = gedoofd && #meest_afgesloten_stand = gedoofd ; Waarde: nee",
// 					enum: { ja: "Ja", nee: "Nee" },
// 					// CHECK no else?
// 					get: function () {
// 						return this.doel_stand == "afsluitbomen_stop" || this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "rood" || this.doel_stand == "geel_knipperen" || (this.meest_afgesloten_stand != "gedoofd" && this.meest_afgesloten_stand != "ongeldig") ? "ja" : this.doel_stand == "gedoofd" && this.meest_afgesloten_stand == "gedoofd" ? "nee" : "";
// 					},
// 				},
// 				tijdstip_rood_bereikt: {
// 					stereotype: "variabele",
// 					title: "Tijdstip stand rood bereikt",
// 					description: "Tijdstip waarop voor alle rijstroken van de Verkeersbuisafsluiter de stand rood is bereikt. Zie het autonome proces *BepaalTijdstipRoodBereikt.",
// 					ref: "BSTTI#16888",
// 					comment: "",
// 				},
// 				Verkeerslichtenbedieningen_vrij: {
// 					stereotype: "variabele",
// 					title: "Verkeerslichten bedienbaar",
// 					description: "Geeft aan of via de Verkeerslichten-gerelateerde bedieningen van de Verkeersbuisafsluiter een andere stand mag worden ingesteld. Als dit niet mag, zullen eerst de afsluitbomen geopend moeten worden, via een afsluitbomen-gerelateerde bediening van de verkeersbuisafsluiter of kan de verkeersbuis geheel worden geopend met Hand_Open().",
// 					ref: "BSTTI#16940",
// 					comment: "Conditie: * ; Waarde: (#doel_stand = ongeldig && _bf_Afsluitboom[].#stand = (op | ongeldig)) || (#doel_stand = (rood | geel_knipperen | gedoofd)) || (#doel_stand = (afsluitbomen_dicht | afsluitbomen_stop) && _bf_Afsluitboom[].#stand = op)",
// 					enum: { ja: "Ja", nee: "Nee" },
// 					get: function () {
// 						return this.doel_stand == "ongeldig" && (checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") || checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "ongeldig")) || this.doel_stand == "rood" || this.doel_stand == "geel_knipperen" || this.doel_stand == "gedoofd" || (this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop") && checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") ? "Ja" : "Nee";
// 					},
// 				},
// 				max_tijdstip_aansturing_afsluitbomen: {
// 					stereotype: "variabele",
// 					title: "Tijdstip einde sturing afsluitbomen",
// 					description: "Tijdstip waarna de afsluitbomen niet meer automatisch mogen worden aangestuurd. Ter voorkoming van ongevallen t.g.v. onverwachte bewegingen van afsluitbomen (zie ook Machinerichtlijn); bijvoorbeeld na een overgang van niet bestuurbaar naar bestuurbaar van een afsluitboom na een tijdelijke storing of tijdelijke obstakeldetectie.",
// 					ref: "BSTTI#16942",
// 					comment: "",
// 					initdefaultvalue: "0",
// 				},
// 				// Specifieke signaleringen
// 				BeschikbaarheidAfsluitbomen: {
// 					stereotype: "signalering",
// 					title: "Beschikbaarheid afsluitbomen",
// 					description: "De beschikbaarheid van de afsluitbomen voor de verkeersbuis.",
// 					ref: "BSTTI#9582",
// 					comment: "Status: #beschikbaarheid_afsluitbomen",
// 					type: "status_melding",
// 					enum: { niet_beschikbaar: "Niet beschikbaar", beschikbaar: "Beschikbaar", beperkt_beschikbaar: "Beperkt beschikbaar" },
// 					get: function () {
// 						return this.beschikbaarheid_afsluitbomen
// 					},
// 				},
// 				Alarm_DoelstandVBAOnbepaald: {
// 					stereotype: "signalering",
// 					title: "Alarm doelstand verkeersbuisafsluiter onbepaald",
// 					description: "Er is nog geen beoogde stand voor de verkeersbuisafsluiter geselecteerd.",
// 					ref: "BSTTI#16954",
// 					comment: "Conditie: #doel_stand = ongeldig",
// 					type: "deelsysteem_alarm",
// 					enum: { ja: "Verkeersbuisafsluiter doelstand onbepaald", nee: "" },
// 					get: function () {
// 						return this.doel_stand == "ongeldig";
// 					},
// 				},
// 			},
// 			operations: {
// 				// Verkeerslicht gerelateerde bedieningen
// 				Hand_VerkeerslichtenGedoofd: {
// 					stereotype: "bediening",
// 					title: "Verkeerslichten naar stand gedoofd",
// 					description: "Verkeerslichten gaan naar de toestand gedoofd. Deze bediening mag alleen via de MMI worden aangeroepen.",
// 					ref: "BSTTI#6116",
// 					comment: "Conditie: #Verkeerslichtenbedieningen_vrij = ja && #in_gebruik = ja ; Acties: _bf_CCTV.SetControleCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := gedoofd SetVerkeerslichtenOpAutobediening()",
// 					conditie: function () {
// 						return this.Verkeerslichtenbedieningen_vrij == "ja" && this.in_gebruik == "ja";
// 					},
// 					em: function () {
// 						this.bf_CCTV_Verkeersbuis.SetControleCameraMetPreset(this.sf_Verkeerslichten_camera, this.Verkeerslichten_camera_preset);
// 						//debug this.sf_afsluitbomen_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_afsluitbomen_camera, this.afsluitbomen_camera_preset);
// 						this.doel_stand = "gedoofd";
// 						this.SetVerkeerslichtenOpAutobediening();
// 					},
// 				},
// 				Hand_VerkeerslichtenRood: {
// 					stereotype: "bediening",
// 					title: "Verkeerslichten naar stand rood",
// 					description: "De Verkeerslichten van deze Verkeersbuisafsluiter worden op rood gezet. Deze bediening mag alleen via de MMI worden aangeroepen.",
// 					ref: "BSTTI#6118",
// 					comment: "Conditie: #Verkeerslichtenbedieningen_vrij = ja && #in_gebruik = ja ; Acties: _bf_CCTV.SetControleCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_Verkeerslichten_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_Verkeerslichten_camera,_Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := rood ; SetVerkeerslichtenOpAutobediening()",
// 					arguments: {},
// 					conditie: function () {
// 						return this.Verkeerslichtenbedieningen_vrij == "ja" && this.in_gebruik == "ja";
// 					},
// 					em: function () {
// 						console.debug('Hand_VerkeerslichtenRood', this);
// 						this.bf_CCTV_Verkeersbuis.SetControleCameraMetPreset(this.sf_Verkeerslichten_Camera, this.verkeerslichten_camera_preset);
// 						//debug this.sf_Verkeerslichten_Camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_Verkeerslichten_Camera, this.verkeerslichten_camera_preset);
// 						//debug this.sf_Afsluitbomen_Camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_Afsluitbomen_Camera, this.afsluitbomen_camera_preset);
// 						this.doel_stand = "rood";
// 						this.SetVerkeerslichtenOpAutobediening();
//
// 						//Aim.messenger.send({ to: [Aim.client.domain.id], initdefaultvalue: [{ id: 3318018, operations: { SetStand: ['rood'] } }] });
//
//
// 					},
// 				},
// 				// Afsluitboom gerelateerde bedieningen
// 				AfsluitbomenOpen: {
// 					stereotype: "bediening",
// 					title: "Afsluitbomen openen",
// 					description: "Opent de afsluitbomen voor deze Verkeersbuisafsluiter.",
// 					ref: "BSTTI#6119",
// 					comment: "Conditie: #in_gebruik = ja ; Acties: IF #doel_stand = (ongeldig | afsluitbomen_dicht | afsluitbomen_stop) THEN #doel_stand := rood END_IF ; SetAfsluitbomenOpAutobedieningMetContinuSturing(nee) _bf_Afsluitboom[].AutoOpen()",
// 					// CHECK no else?
// 					conditie: function () {
// 						return this.in_gebruik == "ja";
// 					},
// 					em: function () {
// 						this.doel_stand == "ongeldig" || this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop" ? this.doel_stand = "rood" : "";
// 						this.SetAfsluitbomenOpAutobedieningMetContinuSturing(nee);
// 						forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoOpen");
// 					},
// 				},
// 				AfsluitbomenVoorwaardelijkSluit: {
// 					stereotype: "bediening",
// 					title: "Afsluitbomen sluiten",
// 					description: "sluit de afsluitbomen voor deze Verkeersbuisafsluiter (voor zover aan alle voorwaarden hiervoor is voldaan, inclusief geen voertuig onder afsluitboom).",
// 					ref: "BSTTI#6120",
// 					comment: "Conditie: #voldoende_rood_voor_afsluitbomen = ja && #in_gebruik = ja ; Acties: #doel_stand := afsluitbomen_dicht ; SetAfsluitbomenOpAutobedieningMetContinuSturing(nee) ; _bf_Afsluitboom[].AutoVoorwaardelijkSluit()",
// 					conditie: function () {
// 						return this.voldoende_rood_voor_afsluitbomen == "ja" && this.in_gebruik == "ja";
// 					},
// 					em: function () {
// 						this.doel_stand = "afsluitbomen_dicht";
// 						this.SetAfsluitbomenOpAutobedieningMetContinuSturing("nee");
// 						forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoVoorwaardelijkSluit");
// 					},
// 				},
// 				AfsluitbomenStop: {
// 					stereotype: "bediening",
// 					title: "Afsluitbomen stoppen",
// 					description: "stopt/voorkomt bewegingen van de afsluitbomen voor deze Verkeersbuisafsluiter (tot een volgende opdracht).",
// 					ref: "BSTTI#6123",
// 					comment: "Conditie: #in_gebruik = ja ; Acties: IF ( #doel_stand = (afsluitbomen_dicht | ongeldig) || _bf_Afsluitboom[i].#stand <> op) THEN #doel_stand := afsluitbomen_stop END_IF ; SetAfsluitbomenOpAutobedieningMetContinuSturing(nee) ; _bf_Afsluitboom[].AutoStop()",
// 					conditie: function () {
// 						return this.in_gebruik == "ja";
// 					},
// 					em: function () {
// 						// CHECK no else?
// 						this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "ongeldig" || !checkAll(bf_Afsluitboom_Verkeersbuis, "stand", "op") ? this.doel_stand = "afsluitbomen_stop" : "";
// 						this.SetAfsluitbomenOpAutobedieningMetContinuSturing("nee");
// 						forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoStop");
// 					},
// 				},
// 				// Verkeersbuisafsluiter gerelateerde bedieningen
// 				Hand_Open: {
// 					stereotype: "bediening",
// 					title: "Rijbaan openstellen",
// 					description: "Opent de verkeersstroom voor deze Verkeersbuisafsluiter inclusief afsluitbomen. Deze bediening mag alleen via de MMI worden aangeroepen. Merk op: er is geen Hand_Dicht(); Verkeerslichten naar rood brengen (en daarmee eerst MTM snelheidsmaatregel zetten) en voorwaardelijk sluiten met afsluitbomen zijn twee afzonderlijke stappen.",
// 					ref: "BSTTI#11461",
// 					comment: "Conditie: #in_gebruik = ja || #doel_stand = ongeldig ; Acties: _bf_CCTV.SetControleCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := gedoofd ; SetAfsluitbomenOpAutobedieningMetContinuSturing(nee) ; _bf_Afsluitboom[].AutoOpen() ; SetVerkeerslichtenOpAutobediening()",
// 					conditie: function () {
// 						return this.in_gebruik == "ja" || this.doel_stand == "ongeldig";
// 					},
// 					em: function () {
// 						this.bf_CCTV_Verkeersbuis.SetControleCameraMetPreset(this.sf_Verkeerslichten_camera, this.Verkeerslichten_camera_preset);
// 						this.sf_afsluitbomen_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_afsluitbomen_camera, this.afsluitbomen_camera_preset);
// 						this.doel_stand = "gedoofd";
// 						this.SetAfsluitbomenOpAutobedieningMetContinuSturing("nee");
// 						forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoOpen");
// 						this.SetVerkeerslichtenOpAutobediening();
// 					},
// 				},
// 				//Besturingen
// 				Auto_VerkeerslichtenRood: {
// 					stereotype: "besturing",
// 					title: "Verkeerslichten naar stand rood",
// 					description: "De Verkeerslichten van deze Verkeersbuisafsluiter worden op rood gezet. Alleen via deze besturing mogen de Verkeerslichten automatisch op rood gezet worden.",
// 					ref: "BSTTI#9574",
// 					comment: "Conditie: #doel_stand = (gedoofd | geel_knipperen) && #in_gebruik = ja ; Acties: _sf_Verkeerslichten_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := rood",
// 					conditie: function () {
// 						return (this.doel_stand == "gedoofd" || this.doel_stand == "geel_knipperen") && this.in_gebruik == "ja";
// 					},
// 					em: function () {
// 						this.sf_Verkeerslichten_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_Verkeerslichten_camera, this.Verkeerslichten_camera_preset);
// 						this.sf_afsluitbomen_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_afsluitbomen_camera, this.afsluitbomen_camera_preset);
// 						this.doel_stand = "rood";
// 					},
// 				},
// 				Auto_VerkeerslichtenGeelKnipper: {
// 					stereotype: "besturing",
// 					title: "Verkeerslichten naar stand geel knipperen",
// 					description: "Breng de Verkeerslichten naar geel knipperen, als gedoofd was ingesteld.",
// 					ref: "BSTTI#9575",
// 					comment: "Conditie: #doel_stand = gedoofd && #in_gebruik = ja ; Acties: #doel_stand := geel_knipperen",
// 					conditie: function () {
// 						return (this.doel_stand == "gedoofd" && this.in_gebruik == "ja");
// 					},
// 					em: function () {
// 						this.doel_stand = "geel_knipperen";
// 					},
// 				},
// 				Auto_Dicht: {
// 					stereotype: "besturing",
// 					title: "Rijbaan afsluiten",
// 					description: "sluit de verkeersstroom van deze Verkeersbuisafsluiter, inclusief afsluitbomen. Alleen via deze besturing mogen afsluitbomen automatisch afgesloten worden.",
// 					ref: "BSTTI#11462",
// 					comment: "Conditie: #in_gebruik = ja ; Acties: _sf_Verkeerslichten_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_Verkeerslichten_camera, _Verkeerslichten_camera_preset) ; _sf_afsluitbomen_camera._sf_voorkeurskanaal.SelecteerCameraMetPreset(_sf_afsluitbomen_camera, _afsluitbomen_camera_preset) ; #doel_stand := afsluitbomen_dicht ; SetVerkeerslichtenOpAutobediening() ; SetAfsluitbomenOpAutobedieningMetContinuSturing(ja)",
// 					conditie: function () {
// 						return this.in_gebruik == "ja";
// 					},
// 					em: function () {
// 						this.sf_Verkeerslichten_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_Verkeerslichten_camera, this.Verkeerslichten_camera_preset);
// 						this.sf_afsluitbomen_camera.sf_voorkeurskanaal.SelecteerCameraMetPreset(this.sf_afsluitbomen_camera, this.afsluitbomen_camera_preset);
// 						this.doel_stand = "afsluitbomen_dicht";
// 						this.SetVerkeerslichtenOpAutobediening();
// 						this.SetAfsluitbomenOpAutobedieningMetContinuSturing("ja");
// 					},
// 				},
// 				SetVerkeerslichtenOpAutobediening: {
// 					stereotype: "besturing",
// 					title: "Verkeerslichten in automode",
// 					description: "Zet de Verkeerslichten op autobediening en zorgt daarbij dat de laatst (via 3B) ingestelde stand wordt overgenomen als auto-stand.",
// 					ref: "BSTTI#16957",
// 					comment: "Conditie: * ; Acties: _bf_Verkeerslichten.SetAutoStand(_bf_Verkeerslichten.#ingestelde_stand) ; _bf_Verkeerslichten.SetOpAutobediening()",
// 					conditie: function () {
// 						return true;
// 					},
// 					em: function () {
// 						console.debug('cf_Afsluiter_Verkeersbuis.SetVerkeerslichtenOpAutobediening', { ingestelde_stand: this.bf_Verkeerslichten_Verkeersbuis.ingestelde_stand });
// 						this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand(this.bf_Verkeerslichten_Verkeersbuis.ingestelde_stand);
// 						this.bf_Verkeerslichten_Verkeersbuis.SetOpAutobediening();
// 					},
// 				},
// 				SetAfsluitbomenOpAutobedieningMetContinuSturing: {
// 					stereotype: "besturing",
// 					title: "Afsluitbomen in automode",
// 					description: "Zet de afsluitbomen op autobediening en maakt afhankelijk van de parameter continue aansturing van de afsluitbomen mogelijk of onmogelijk.",
// 					ref: "BSTTI#16958",
// 					comment: "Conditie: * ; Acties: IF (continu_sturing = nee) THEN #max_tijdstip_aansturing_afsluitbomen := 0 ELSE #max_tijdstip_aansturing_afsluitbomen := huidige_tijd + _tijd_aansturing_afsluitbomen END_IF ; _bf_Afsluitboom[].SetOpAutobediening()",
// 					conditie: function () {
// 						return true;
// 					},
// 					em: function (continu_sturing) {
// 						// CHECK
// 						continu_sturing == "nee" ? this.max_tijdstip_aansturing_afsluitbomen = "0" : this.max_tijdstip_aansturing_afsluitbomen = huidige_tijd + this.tijd_aansturing_afsluitbomen;
// 						this.bf_Afsluitboom_Verkeersbuis.SetOpAutobediening();
// 					},
// 				},
// 				SetInGebruik: {
// 					stereotype: "besturing",
// 					title: "In-uitschakelen verkeersbuisafsluiter",
// 					description: "Besturing die voor toepassing in wisselbuizen gebruikt wordt om deze instantie van verkeersbuisafsluiter in of uit te schakelen. Wanneer aangeroepen met het argument 'ja', dan moet de verkeersbuisafsluiter functioneren als in een verkeersbuis die geen wisselbuis is. Wanneer aangeroepen met de argument 'nee', dan moet deze verkeersbuisafsluiter de bijbehorende Verkeerslichten op 'gedoofd' houden en de bijbehorende afsluitbomen in stand 'op' houden, maar signaleringen en detecties normaal blijven functioneren. Vanuit veiligheidsoverwegingen mag de verkeersbuisafsluiter enkel in of uit gebruik genomen worden als de afsluitbomen in de 'op' stand staan en de Verkeerslichten gedoofd zijn; hierop is één uitzondering: bij initialisatie van 3B kan een verkeersbuisafsluiter ook in gebruik worden genomen als deze niet geheel open is.",
// 					ref: "BSTTI#16525",
// 					comment: "Conditie: (#doel_stand = gedoofd && #meest_afgesloten_stand = gedoofd) || (#doel_stand = ongeldig && in_gebruik = ja) ; Acties: #in_gebruik := in_gebruik ; _bf_Afsluitboom[].SetInGebruik(in_gebruik) ; _bf_mtm.SetInGebruik(in_gebruik) ; _bf_Verkeerslichten.SetInGebruik(in_gebruik)",
// 					conditie: function () {
// 						return (this.doel_stand == "gedoofd" && this.meest_afgesloten_stand == "gedoofd") || (this.doel_stand == "ongeldig" && this.in_gebruik == "ja");
// 					},
// 					em: function (in_gebruik) {
// 						this.in_gebruik = in_gebruik;
// 						forAll(this.bf_Afsluitboom_Verkeersbuis, "SetInGebruik", [in_gebruik]);
// 						this.bf_MTMkoppeling_Verkeersbuis.SetInGebruik(in_gebruik);
// 						this.bf_Verkeerslichten_Verkeersbuis.SetInGebruik(in_gebruik);
// 					},
// 				},
// 				// Autonome processen
// 				Init: {
// 					stereotype: "autonoom_proces",
// 					title: "Initialisatie",
// 					description: "Initialiseert de verkeersbuisafsluiter indien de betrokken systemen een voldoende uniforme toestand hebben; als dat niet het geval is moet de verkeersbuisafsluiter via bedieningen worden ge�nitialiseerd.",
// 					ref: "BSTTI#16963",
// 					comment: "Conditie: #doel_stand = ongeldig && #meest_afgesloten_stand = (afsluitbomen_dicht | rood | geel_knipperen | gedoofd) ; Acties: #doel_stand := #meest_afgesloten_stand ; SetVerkeerslichtenOpAutobediening() ; SetAfsluitbomenOpAutobedieningMetContinuSturing( nee )",
// 					js: function () {
// 						if (this.doel_stand == "ongeldig" && (this.meest_afgesloten_stand == "afsluitbomen_dicht" || this.meest_afgesloten_stand == "rood") || this.meest_afgesloten_stand == "geel_knipperen" || this.meest_afgesloten_stand == "gedoofd") {
// 							this.doel_stand = this.meest_afgesloten_stand;
// 							this.SetVerkeerslichtenOpAutobediening();
// 							this.SetAfsluitbomenOpAutobedieningMetContinuSturing("nee");
// 						}
// 					},
// 				},
// 				SnelheidsbeperkingMtm: {
// 					stereotype: "autonoom_proces",
// 					title: "Snelheidsbeperking MTM systeem",
// 					description: "Stelt een snelheidsbeperking in als de Verkeerslichten gebruikt moeten worden.",
// 					ref: "BSTTI#9396",
// 					comment: "Conditie: #mtm_snelheidsbeperking = ja && #in_gebruik = ja ; Acties: _bf_mtm.InstellenSnelheidsBeperking() ; Conditie: #mtm_snelheidsbeperking = nee && #in_gebruik = ja ; Acties: _bf_mtm.OpheffenSnelheidsBeperking()",
// 					js: function () {
// 						if (this.mtm_snelheidsbeperking == "ja" && this.in_gebruik == "ja") {
// 							this.bf_MTMkoppeling_Verkeersbuis.InstellenSnelheidsBeperking();
// 						};
// 						if (this.mtm_snelheidsbeperking == "nee" && this.in_gebruik == "ja") {
// 							this.bf_MTMkoppeling_Verkeersbuis.OpheffenSnelheidsBeperking();
// 						};
// 					},
// 				},
// 				HandhaafAfsluitbomenKoppelingVerkeerslichten: {
// 					stereotype: "autonoom_proces",
// 					title: "Handhaven koppeling Verkeerslichten en afsluitbomen",
// 					description: "Geeft aan de afsluitbomen door of vanwege de stand van de Verkeerslichten de afsluitbomen eventueel gesloten mogen worden.",
// 					ref: "BSTTI#9415",
// 					comment: "Conditie: #voldoende_rood_voor_afsluitbomen = ja && _bf_Verkeerslichten.#stand = rood && #in_gebruik = ja ; Acties: _bf_Afsluitboom[].Blokkeer( nee ) ; Conditie: #voldoende_rood_voor_afsluitbomen <> ja ; Acties: _bf_Afsluitboom[].Blokkeer( ja )",
// 					js: function () {
// 						if (this.voldoende_rood_voor_afsluitbomen == "ja" && this.bf_Verkeerslichten_Verkeersbuis.stand == "rood" && this.in_gebruik == "ja") {
// 							forAll(this.bf_Afsluitboom_Verkeersbuis, "Blokkeer", ["nee"]);
// 						};
// 						if (this.voldoende_rood_voor_afsluitbomen != "ja") {
// 							forAll(this.bf_Afsluitboom_Verkeersbuis, "Blokkeer", ["ja"]);
// 						};
// 					},
// 				},
// 				BewaakVerkeerslichten: {
// 					stereotype: "autonoom_proces",
// 					title: "Bewaak Verkeerslichten aansturing",
// 					description: "Bepaalt de auto-stand voor de Verkeerslichten.",
// 					ref: "BSTTI#16893",
// 					comment: "Conditie: #doel_stand = gedoofd && _bf_Afsluitboom[].#stand = op && #in_gebruik = ja ; Acties: _bf_Verkeerslichten.SetAutoStand( gedoofd ) ; Conditie: #doel_stand = geel_knipperen && _bf_Afsluitboom[].#stand = op && #in_gebruik = ja ; Acties: _bf_Verkeerslichten.SetAutoStand( geel_knipperen ) ; Conditie: (#doel_stand = (afsluitbomen_dicht | afsluitbomen_stop | rood) || _bf_Afsluitboom[i].#stand <> op ) && #in_gebruik = ja ; Acties: _bf_Verkeerslichten.SetAutoStand( rood )",
// 					js: function () {
// 						if (this.doel_stand == "gedoofd" && checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") && this.in_gebruik == "ja") {
// 							this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand("gedoofd");
// 						};
// 						if (this.doel_stand == "geel_knipperen" && checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") && this.in_gebruik == "ja") {
// 							this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand("geel_knipperen");
// 						};
// 						if (this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop" || this.doel_stand == "rood" || !checkAll(this.bf_Afsluitboom_Verkeersbuis, "stand", "op") && this.in_gebruik == "ja") { // Afvraag van stand != op van een gerelateerde afsluitboom!!!
// 							this.bf_Verkeerslichten_Verkeersbuis.SetAutoStand("rood");
// 						};
// 					},
// 					/**
// 					js_1: function() {
// 						var allOp = checkAll(this.bf_Afsluitboom, 'stand", "op");
// 						if (this.doel_stand == "gedoofd" && allOp && this.in_gebruik == "ja") { // Afvraag van de stand van alle gerelateerde afsluitbomen!!!
// 							this.bf_Verkeerslichten.SetAutoStand("gedoofd");
// 						};
// 						if (this.doel_stand == "geel_knipperen" && allOp && this.in_gebruik == "ja") { // Afvraag van de stand van alle gerelateerde afsluitbomen!!!
// 							this.bf_Verkeerslichten.SetAutoStand("geel_knipperen");
// 						};
// 						if (this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop" || this.doel_stand == "rood" || !allOp && this.in_gebruik == "ja") { // Afvraag van stand != op van een gerelateerde afsluitboom!!!
// 							this.bf_Verkeerslichten.SetAutoStand("rood");
// 						};
// 					},
// 					js_2: function() {
// 						var allOp = checkAll(this.bf_Afsluitboom, 'stand", "op");
// 						if (allOp && this.in_gebruik == "ja") { // Afvraag van de stand van alle gerelateerde afsluitbomen!!!
// 							if (this.doel_stand == "gedoofd") this.bf_Verkeerslichten.SetAutoStand("gedoofd");
// 							else if (this.doel_stand == "geel_knipperen") this.bf_Verkeerslichten.SetAutoStand("geel_knipperen");
// 						};
// 						if (this.doel_stand == "afsluitbomen_dicht" || this.doel_stand == "afsluitbomen_stop" || this.doel_stand == "rood" || !allOp && this.in_gebruik == "ja") { // Afvraag van stand != op van een gerelateerde afsluitboom!!!
// 							this.bf_Verkeerslichten.SetAutoStand("rood");
// 						};
// 					},
// 					*/
// 				},
// 				BewaakAfsluitbomen: {
// 					stereotype: "autonoom_proces",
// 					title: "Bewaak afsluitbomen aansturing",
// 					description: "Bepaalt de automatische aansturingen voor de afsluitbomen.",
// 					ref: "BSTTI#16894",
// 					comment: "Conditie: #doel_stand = afsluitbomen_dicht && #voldoende_rood_voor_afsluitbomen = ja && huidige_tijd < #max_tijdstip_aansturing_afsluitbomen && #in_gebruik = ja ; Acties: _bf_Afsluitboom[].AutoVoorwaardelijkSluit() ; Conditie: #doel_stand = afsluitbomen_stop && #in_gebruik = ja ; Acties: _bf_Afsluitboom[].AutoStop()",
// 					js: function () {
// 						if (this.doel_stand == "afsluitbomen_dicht" && this.voldoende_rood_voor_afsluitbomen == "ja" && huidige_tijd < this.max_tijdstip_aansturing_afsluitbomen && this.in_gebruik == "ja") {
// 							forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoVoorwaardelijkSluit");
// 						};
// 						if (this.doel_stand == "afsluitbomen_stop" && this.in_gebruik == "ja") {
// 							forAll(this.bf_Afsluitboom_Verkeersbuis, "AutoStop");
// 						};
// 					},
// 				},
// 				BepaalTijdstipRoodBereikt: {
// 					stereotype: "autonoom_proces",
// 					title: "Bepaal tijdstip stand rood bereikt",
// 					description: "Bepaal vanaf wanneer voor alle rijstroken een (stop)signaal 'rood' wordt getoond.",
// 					ref: "BSTTI#16895",
// 					comment: "Conditie: _sf_Rijstrook[].#rood = ja && #tijdstip_rood_bereikt = ongeldig ; Acties: #tijdstip_rood_bereikt := huidige_tijd ; Conditie: _sf_Rijstrook[i].#rood <> ja && #tijdstip_rood_bereikt <> ongeldig ; Acties: #tijdstip_rood_bereikt := ongeldig",
// 					js: function () {
// 						if (checkAll(this.sf_Rijstrook_Verkeersbuis, "rood", "ja") && this.tijdstip_rood_bereikt == "ongeldig") {
// 							this.tijdstip_rood_bereikt = huidige_tijd;
// 						};
// 						if (!checkAll(this.sf_Rijstrook_Verkeersbuis, "rood", "ja") && this.tijdstip_rood_bereikt != "ongeldig") {
// 							this.tijdstip_rood_bereikt = "ongeldig";
// 						};
// 					},
// 					/**
// 					js1: function() { // Hoe gaan we onderstaande pseudocode vertalen in js, met name de tijdstip verwerking ?????
// 						if (!checkAll(this.sf_Rijstrook, "rood", "ja")) this.tijdstip_rood_bereikt = "ongeldig";
// 						else if (this.tijdstip_rood_bereikt == "ongeldig") this.tijdstip_rood_bereikt = huidige_tijd;
// 					},
// 					*/
// 				},
// 			},
// 		},
// 	},
// }




//
// for (var serverName in tms) {
// 	var api = {
// 		paths: {},
// 		components: {
// 			schemas: {
// 			}
// 		}
// 	};
// 	for (var functionName in tms[serverName]) {
// 		for (var methodName in tms[serverName][functionName].operations) {
// 			console.debug(serverName,functionName,methodName);
// 			api.paths[`/${serverName}/${functionName}/${methodName}()`] = {};
// 			(api.components.schemas[functionName] = api.components.schemas[functionName] || {})[methodName] = tms[serverName][functionName].operations[methodName].em;
// 		}
// 	}
// 	console.debug(serverName, api);
// }
//
//
//





//
//
// for (var serverName in tms) {
// 	var nodeapi = {
// 		paths: {},
// 		components: {
// 			schemas: {
// 			}
// 		}
// 	};
// 	for (var functionName in tms[serverName]) {
// 		for (var methodName in tms[serverName][functionName].operations) {
// 			console.debug(serverName,functionName,methodName);
// 			api.paths[`/${serverName}/${functionName}/${methodName}()`] = {};
// 			(api.components.schemas[functionName] = api.components.schemas[functionName] || {})[methodName] = tms[serverName][functionName].operations[methodName].em;
// 		}
// 	}
// 	console.debug(serverName, api);
// }
