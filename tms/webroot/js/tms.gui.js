getvalue = function (item, name) {
	return name in item.values ? item.values[name].title || item.values[name] || '' : item[name] || '';
}
em = { definitions: {}, }

test = function(){
	// Verkeersbuis_id = 1;
	// Verkeerslichten_id = 1;
	// ip_address = '192.168.0.135';
	// ws_address = `wss://${ip_address}:8444`;
	// http_address = `https://${ip_address}:8444`;
	// ip_address = '192.168.0.201';
	// ws_address = `wss://${ip_address}:81`;
	// http_address = `http://${ip_address}:81`;
	values = {
		rood: 'Rood',
		groen: 'Groen',
		geel_knipperen: 'Knipperen',
		gedoofd: 'Gedoofd',
	}

	var onclick_ws = function(){
		console.log("CLICK");
		ws.request({ sub: 3443779, method: 'POST', path: `/bf_Verkeerslichten_Verkeersbuis/SetStand(${this.value})` }, function(res) {
			console.log('Response',res);
		});
	};

	with (elPanel) {
		//appendTag('div', { innerText: ws_address });
		for (var name in values) appendTag('button', { innerText: values[name], value: name, onclick: onclick_ws});
	}

	// http.request({ url: 'https://192.168.0.135:8443/api/lfv_Verkeerslichten_Verkeersbuis(1)', method: 'PATCH' }, function (res) {
	// 	console.log('Result', res);
	// })
	//AIM.http.request({ url: 'lfv_Verkeerslichten_Verkeersbuis(1)', method: 'PATCH' }, function (res) {
	//	console.log('Result', res);
	//})
}


AIM.extend(GUITMS = {
	on: {
		init: function() {
			AIM.http.request(AIM.config.aim, { path: `/System(${AIM.config.aim.aud})/children?level=20&$select=*` }, function(event) {
				//console.debug("AAAAAAAAAAAAABBBBB",AIM.config.aud, AIM.ref[AIM.config.aud]);
				//return;
				// console.log(event);
				AIM.createBody(event.target.data);
			});
		}
	},

	messenger: {
		update: true,
		onreceive: function (event) {
			//console.log(this.data.to,AIM.client);
			if (this.data.state == 'connected' && AIM.app != 'em' && this.data.from.app == 'em') document.location.reload();
			if (this.data.value) this.data.value.forEach(function (row) {
				if (row.signalering) for (var name in row.signalering) Gui.createSignal(api.item[row.id], name, row.signalering[name]);
			});
		},
	},
	Gui: Gui = GUI = {
		sumSignals: function () {
			(sumsignals = function (item) {
				item.signals = {
					deelsysteem_alarm: 0,
					deelsysteem_alarm_active: 0,
					deelsysteem_storing: 0,
					deelsysteem_storing_active: 0,
					status_melding: 0,
					status_melding_active: 0,
				}
				for (var name in item.properties) {
					var prop = item.properties[name];
					if (prop.stereotype == "signalering") {
						if (item[name]) {
							item.signals[prop.type]++;
							if (item[name].value) item.signals[prop.type + '_active']++;
						}
					}
				}
				if (item.children) item.children.forEach(sumsignals);
				if (item.master && item.master.signals) for (var name in item.signals) item.master.signals[name] += item.signals[name];
				//console.log(item.title, item.signals);
			})(itemTunnel);

			for (var i = 0, el, c = document.getElementsByClassName('sumitems') ; el = c[i]; i++) {
				if (!el.items) continue;
				var signals = {
					deelsysteem_alarm: 0,
					deelsysteem_alarm_active: 0,
					deelsysteem_storing: 0,
					deelsysteem_storing_active: 0,
					status_melding: 0,
					status_melding_active: 0,
				};
				el.items.forEach(function (item) {
					for (var name in item.signals) signals[name] += item.signals[name];
				});
				for (var name in signals) el.setAttribute(name, signals[name]);
			}
		},
		createSignal: function (item, name, row) {
			var prop = item.properties[name];
			//item[name] = value;
			//console.log(name, item[name]);
			if (!item[name]) with (item[name] = elSignals.appendTag('li', { className: '', item: item, name: name, onclick: Gui.bevestig, el: {} })) {
				appendTag('span', { className: 'type icon ' + prop.type });
				item[name].el.cam = appendTag('span', { className: 'cam' });
				item[name].el.time = appendTag('span', { className: 'tijd' });
				appendTag('span', { className: 'locatie', innerText: prop.locatie });
				appendTag('span', { className: 'title', innerText: prop.title });
				item[name].el.notitie = appendTag('span', { className: 'notitie', });
			};
			//console.log(name, row, item[name]);
			for (var attrname in row) if (item[name].el[attrname]) item[name].el[attrname].setAttribute('value', row[attrname]);
			item[name].setAttribute('value', item[name].value = row.value);
			Gui.sumSignals();
			//(function signalup(item) {
			//	console.log('SIGNALUP',item);
			//	if (item.master) signalup(item.master);
			//})(item);
		},
		createElementGUI: function () {
			with (this.elDetail = elDetail.appendTag('li', { style: "top:" + this.top + "px;left:" + this.left + 'px' }).appendTag('div', { className: this.className || this.schema, item: this, onmouseup: Gui.showpanel, })) {
				if (this.gui.construct) this.gui.construct.call(this);
				appendTag('icn', { className: 'hand' });
				appendTag('icn', { className: 'disable' });
				appendTag('icn', { className: 'storing' });
			}
		},
		element: {
		},
		signaleringen: {
		},
		itemids: {}, key: AIM.key = AIM.uid || AIM.key,
		definitions: {},
		bevestig: function (event) {
			this.signal.bevestigd = true;
			this.signal.onchange();
		},
		msgSend: function (data) {
			console.log('SEND', data.id, data.values, data);
			AIM.messenger.send({ msg: { item: { [data.id]: data } } });
		},
		showpanel: function (event) {
			console.log('showpanel', this.item);
			event.stopPropagation();
			var item = this.item;
			if (item.elPanel) return item.elPanel.onclick();
			with (item.elPanel = document.body.appendTag('div', { className: 'col itemFaceplate noselect', draggable: false })) {
				item.elPanel.onclick = function (event) {
					console.log('CLICKED');
					//item.elPanel.parentElement.appendChild(item.elPanel);
					item.elPanel.style.display = '';
				};
				appendTag('div', {
					className: 'header', innerText: 'Langsventilatie HBL01 123.10',
					onmousedown: function (event) {
						(window.elementMove = this.parentElement).move = { screenX: event.screenX, screenY: event.screenY, offsetLeft: window.elementMove.offsetLeft, offsetTop: window.elementMove.offsetTop };
						window.onmousemove = function (event) {
							window.elementMove.style.left = Math.min(document.body.clientWidth - window.elementMove.offsetWidth, Math.max(0, window.elementMove.move.offsetLeft + event.screenX - window.elementMove.move.screenX)) + 'px'
							window.elementMove.style.top = Math.min(document.body.clientHeight - window.elementMove.offsetHeight, Math.max(0, window.elementMove.move.offsetTop + event.screenY - window.elementMove.move.screenY)) + 'px'
						}
						window.onmouseup = function (event) {
							window.elementMove = null;
							window.onmousemove = null;
						}
					},
				}).appendTag('button', {
					el: item.elPanel, className: 'close', innerText: 'x', onclick: function (event) {
						console.log('CLOSSED');
						this.el.style.display = 'none'; event.stopPropagation();
					}
				});
				var tabControl = appendTag('div', { className: 'row tabsControl' });
				var tabSheet = appendTag('div', { className: 'col aco tabSheets' });
				var tab = function () {
					this.onclick = function () {
						var c = this.parentElement.children;
						for (var i = 0, e; e = c[i]; i++) {
							e.sheet.style.display = 'none';
							e.removeAttribute('selected');
						}
						this.sheet.style.display = '';
						this.setAttribute('selected', '');

					}
					this.sheet = tabSheet.appendTag('div', {
						className: 'col aco itemPanel',
					});
					return this;
				}
				item.tabs = {
					Overzicht: tab.call(tabControl.appendTag('a', { innerText: 'Overzicht' })),
					Meldingen: tab.call(tabControl.appendTag('a', { innerText: 'Meldingen', })),
					Configuratie: tab.call(tabControl.appendTag('a', { innerText: 'Configuratie', })),
					ResetOnd: tab.call(tabControl.appendTag('a', { innerText: 'Reset onderdr.', })),
				}
				item.tabs.Overzicht.onclick();
				with (item.tabs.Overzicht.sheet) {
					with (appendTag('div', { className: 'row' })) {
						appendTag('b', { className: 'aco', innerText: item.title });
						appendTag('a', { className: 'auto', innerText: 'auto' });
						appendTag('a', { className: 'hand', innerText: 'hand' });
						appendTag('a', { innerText: 'x' });
					}
					with (appendTag('ul', { className: 'col aco' })) {
						if (item.control.variabelen) {
							with (appendTag('li')) {
								//console.log('VALUES', item.title, item.values);
								for (var name in item.values) setAttribute(name, getvalue(item, name));
								appendTag('div', { className: 'row opener', innerText: 'Variabelen', attr: { open: 1 }, onclick: function () { this.setAttribute('open', this.getAttribute('open') ^ 1); } });
								with (appendTag('div')) {
									for (var name in item.control.variabelen) {
										with (appendTag('div', { className: 'row' })) {
											appendTag('span', { className: 'aco', innerText: name });
											appendTag('span', { className: item.id + '_' + name, innerText: item.control.variabelen[name].value || '' });
										}
									}
								}
							}
						}
						if (item.control.bedieningen) {
							with (appendTag('li')) {
								appendTag('div', { className: 'row opener', innerText: 'Bedieningen', attr: { open: 1 }, onclick: function () { this.setAttribute('open', this.getAttribute('open') ^ 1); } });
								with (appendTag('div')) {
									for (var name in item.control.bedieningen) with (appendTag('div', { className: 'row' })) {
										var fn = item.control.bedieningen[name].js;
										var code = String(fn);
										var par = code.split('(')[1].split(')').shift().trim();
										var values = String(fn).split("\r\n").shift().split("//");
										values.shift();
										values = values.length ? values.shift().trim().split('|') : '';
										if (!par) appendTag('span', { className: 'aco', innerText: name, item: item, fn: fn, onclick: function () { this.fn.call(this.item); } });
										else {
											appendTag('span', { className: 'aco', innerText: name });
											if (!values) appendTag('input', { item: item, fn: fn, onchange: function () { this.fn.call(this.item, this.value); } });
											else with (appendTag('span')) {
												values.forEach(function (val) {
													appendTag('span', { className: 'aco', innerText: val, item: item, fn: fn, onclick: function () { this.fn.call(this.item, this.innerText); } });

												});
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		create: function (item) {
			item.name = [item.schema, item.schema, item.id].join('_');
			item.className = [item.schema, item.schema, item.id].join(' ');
			if (em.definitions[item.schema]) (api.components.schemas[item.schema] = api.components.schemas[item.schema] || {}).control = em.definitions[item.schema];
			//if (Gui.definitions[item.schema]) (api.components.schemas[item.schema] = api.components.schemas[item.schema] || {}).gui = Gui.definitions[item.schema];
			if (AIM.components.schemas[item.schema]) {
				Object.assign(item, AIM.components.schemas[item.schema]);
				if (item.gui) {
					Gui.itemids[item.id] = item;
					//if (item.gui.construct) item.gui.construct.call(item);
				}
			}
			AIM.ref[item.id] = item;
			return item;
		},
		addButtonPanel: function () {
			var pdRoodUit = function () { }
			with (elBuisButtonPanel = elButtonpanel.appendTag('div', { className: 'row ' + this.id, attr: { state: this.state, opendicht: this.open } })) {
				appendTag('span', { className: 'title', innerText: this.title });
				appendTag('button', { className: 'button c l r' });
				appendTag('span', { className: 'status' });
				appendTag('span', { className: 'pd' });
				appendTag('span', { className: 'opendicht' });

				appendTag('button', { className: 'button rood l' });
				appendTag('button', {
					className: 'button down s r', onclick: function () {
						with (this.elPU = this.appendTag('div', { className: 'popupselect' })) {
							appendTag('div', {
								innerText: 'Rood', onclick: function (event) {
									event.stopPropagation();
									this.elPU.parentElement.removeChild(this.elPU);
									AIM.messenger.send({
										to: [AIM.client.domain.id], value: [
											{ id: 3318023, operations: { Hand_VerkeerslichtenRood: [] } },

											//{ id: 3375427, operations: { SetStand: ['rood'] } }, // lfv_verkeerslichten_1
											//{ id: 3375446, operations: { SetStand: ['rood'] } }, // lfv_verkeerslichten_2
											//{ id: 3375454, operations: { SetStand: ['rood'] } }, // lfv_verkeerslichten_3
										]
									});
								}.bind(this)
							});
							appendTag('div', {
								innerText: 'Gedoofd', onclick: function (event) {
									event.stopPropagation();
									this.elPU.parentElement.removeChild(this.elPU);
									AIM.messenger.send({
										to: [AIM.client.domain.id], value: [
											{ id: 3318023, operations: { Hand_VerkeerslichtenGedoofd: [] } },

											//{ id: 3375427, operations: { SetStand: ['groen'] } }, // lfv_verkeerslichten_1
											//{ id: 3375446, operations: { SetStand: ['groen'] } }, // lfv_verkeerslichten_2
											//{ id: 3375454, operations: { SetStand: ['groen'] } }, // lfv_verkeerslichten_3
										]
									});

									//setTimeout(function () {
									//	AIM.messenger.send({
									//		to: [AIM.client.domain.id], value: [

									//			{ id: 3375427, operations: { SetStand: ['gedoofd'] } }, // lfv_verkeerslichten_1
									//			{ id: 3375446, operations: { SetStand: ['gedoofd'] } }, // lfv_verkeerslichten_2
									//			{ id: 3375454, operations: { SetStand: ['gedoofd'] } }, // lfv_verkeerslichten_3
									//		]
									//	});

									//}, 6000);


								}.bind(this)
							});
						}
					}
				});
				appendTag('button', {
					className: 'button sluit l', onclick: function () {
						console.debug("button sluit");
						ws.request({ sub: 3443779, method: 'POST', path: `/cf_Afsluiter_Verkeersbuis/Hand_VerkeerslichtenRood()` }, function(res) {
							console.log('Response',res);
						});
						return;



						ws.request({ sub: 3443779, method: 'POST', path: `/bf_Verkeerslichten_Verkeersbuis/SetStand(rood)` }, function(res) {
							console.log('Response',res);
						});
						return;

						AIM.messenger.send({
							to: [AIM.client.domain.id], value: [
								{ id: 3318023, operations: { Hand_VerkeerslichtenRood: [] } },
								//{ id: 3375427, operations: { SetStand: ['rood'] } }, // lfv_verkeerslichten_1
								//{ id: 3375446, operations: { SetStand: ['rood'] } }, // lfv_verkeerslichten_2
								//{ id: 3375454, operations: { SetStand: ['rood'] } }, // lfv_verkeerslichten_3
							]
						});


						with (this.elPU = this.appendTag('div', { className: 'popupselect' })) {
							appendTag('div', {
								innerText: 'Sluit', onclick: function (event) {
									event.stopPropagation();
									this.elPU.parentElement.removeChild(this.elPU);
									AIM.messenger.send({
										to: [AIM.client.domain.id], value: [
											{ id: 3318023, operations: { AfsluitbomenVoorwaardelijkSluit: [] } },
										]
									});
								}.bind(this)
							});
							appendTag('div', {
								innerText: 'Gedoofd', onclick: function (event) {
									event.stopPropagation();
									this.elPU.parentElement.removeChild(this.elPU);
									AIM.messenger.send({
										to: [AIM.client.domain.id], value: [
											{ id: 3318023, operations: { Hand_VerkeerslichtenGedoofd: [] } },

											//{ id: 3375427, operations: { SetStand: ['gedoofd'] } }, // lfv_verkeerslichten_1
											//{ id: 3375446, operations: { SetStand: ['gedoofd'] } }, // lfv_verkeerslichten_2
											//{ id: 3375454, operations: { SetStand: ['gedoofd'] } }, // lfv_verkeerslichten_3

										]
									});
								}.bind(this)
							});
						}
					}
				});
				appendTag('button', {
					className: 'button open r', onclick: function () {
						console.debug("button open");
						ws.request({ sub: 3443779, method: 'POST', path: `/cf_Afsluiter_Verkeersbuis/Hand_VerkeerslichtenGedoofd()` }, function(res) {
							console.log('Response',res);
						});
						return;

						AIM.messenger.send({
							to: [AIM.client.domain.id], value: [
								{ id: 3318023, operations: { Hand_VerkeerslichtenGedoofd: [] } },

								//{ id: 3375427, operations: { SetStand: ['groen'] } }, // lfv_verkeerslichten_1
								//{ id: 3375446, operations: { SetStand: ['groen'] } }, // lfv_verkeerslichten_2
								//{ id: 3375454, operations: { SetStand: ['groen'] } }, // lfv_verkeerslichten_3
							]
						});
						//setTimeout(function () {
						//	AIM.messenger.send({
						//		to: [AIM.client.domain.id], value: [
						//			{ id: 3375427, operations: { SetStand: ['gedoofd'] } }, // lfv_verkeerslichten_1
						//			{ id: 3375446, operations: { SetStand: ['gedoofd'] } }, // lfv_verkeerslichten_2
						//			{ id: 3375454, operations: { SetStand: ['gedoofd'] } }, // lfv_verkeerslichten_3
						//		]
						//	});

						//}, 6000);

					}
				});
				appendTag('button', { className: 'button kijk l' });
				appendTag('button', { className: 'button down s r' });

				this.kanaalID = 0;
				this.camNext = function () { AIM.messenger.send({ to: [AIM.client.domain.id], kanaal: this.kanaalID, cam: CCTV.kanalen[this.kanaalID].cameraID = Math.min(CCTV.cameras.length - 1, CCTV.kanalen[this.kanaalID].cameraID + 1) }); };
				this.camPrior = function () {
					AIM.messenger.send({ to: [AIM.client.domain.id], kanaal: this.kanaalID, cam: CCTV.kanalen[this.kanaalID].cameraID = Math.max(0, CCTV.kanalen[this.kanaalID].cameraID - 1) });
				}
				this.kanaalNext = function () { ++this.kanaalID };
				this.kanaalPrior = function () {
					this.kanaalID = Math.max(0, this.kanaalID - 1);
				}
				this.presetSet = function (presetID) {
					AIM.messenger.send({ to: [AIM.client.domain.id], kanaal: this.kanaalID, cam: CCTV.kanalen[this.kanaalID].cameraID, preset: presetID });
				}

				var btnKeydown = function (event) {
					switch (event.key) {
						case 'ArrowUp': this.camNext(); break;
						case 'ArrowDown': this.camPrior(); break;
						case 'ArrowRight': this.kanaalNext(); break;
						case 'ArrowLeft': this.kanaalPrior(); break;
						case '1': this.presetSet(0); break;
						case '2': this.presetSet(1); break;
						case '3': this.presetSet(2); break;
						case '4': this.presetSet(3); break;
						case '5': this.presetSet(4); break;
						case '6': this.presetSet(5); break;
						default: return;
					}
					event.preventDefault();
				};
				this.btnLinks = appendTag('button', { className: 'button links l', onclick: this.camPrior.bind(this), onkeydown: btnKeydown.bind(this) });
				this.btnRechts = appendTag('button', { className: 'button rechts r', onclick: this.camNext.bind(this), onkeydown: btnKeydown.bind(this) });
			}
			return elBuisButtonPanel;
		},
		//addTabL: function () {
		//	if (!Gui.tabLselected) Gui.tabLselected = this;
		//	this.select = function (event) {
		//		if (this.tab) return this.tab.select();
		//		var c = this.el.parentElement.children;
		//		for (var i = 0, e; e = c[i]; i++) e.removeAttribute('selected');
		//		this.el.setAttribute('selected', 1);
		//		for (var name in Gui.data.tabsheetL) {
		//			//console.log(name, this.groups);
		//			Gui.data.tabsheetL[name].el.style.display = this.groups.indexOf(name) == -1 ? 'none' : '';
		//		}
		//	}
		//	with (elTabsLeftControl) {
		//		with (this.el = appendTag('a', { className: 'row', attr: this.selected ? { selected: 1 } : {}, tab: this, onclick: this.select })) {
		//			with (appendTag('div', { className: 'row aco', })) {
		//				//verkeerskundig, deelsysteem_alarm, deelsysteem_storing, statusmelding
		//				appendTag('icon', { className: 'hand' });
		//				appendTag('icon', { className: 'verkeerskundig' });
		//				appendTag('icon', { className: 'deelsysteem_alarm' });
		//				appendTag('span', { innerText: this.title, className: this.dir || '' });
		//			}
		//		}
		//	}
		//},
		showtabpanelitem: function (el, level) {
			with (this.tabpanel = el.appendTag('li', { className: this.id, attr: { bedieningswijze: this.values && this.values.bedieningswijze ? this.values.bedieningswijze.title || this.values.bedieningswijze || '' : '' } })) {
				with (appendTag('div', { className: 'row', attr: level > 0 ? { open: 0 } : {}, onclick: function () { this.setAttribute('open', this.getAttribute('open') ^ 1) } })) {
					appendTag('span', { innerText: this.title });
					with (appendTag('div', { className: 'btns', })) {
						appendTag('a', {
							className: 'btn_auto', item: this, onclick: function (event) {
								event.stopPropagation();
								Gui.msgSend({ id: this.item.id, method: { SetOpAutobediening: [] } });
							}
						});
						appendTag('a', {
							className: 'btn_hand', item: this, onclick: function (event) {
								event.stopPropagation();
								Gui.msgSend({ id: this.item.id, method: { SetOpHandbediening: [] } });
							}
						});
					}
					if (!level) appendTag('a', { className: 'close' });
				}
				with (this.elUl = appendTag('ul')) {
					if (this.control) {
						var variabelen = this.control.variabelen;
						for (var name in variabelen) {
							var prop = variabelen[name];
							if (prop.gui) with (appendTag('div', { className: 'row' })) {
								if (name in this.values) this.tabpanel.setAttribute(name, getvalue(this, name));
								appendTag('span', { className: 'aco', innerText: prop.title });
								appendTag('span', {
									className: 'selectpo ' + this.id + '_' + name, innerText: String(getvalue(this, name)).replace(/_/g, ' ').capitalize(), item: this, enum: variabelen[prop.Gui.selectvariabele].enum, bediening: prop.Gui.bediening,
									onclick: function () {
										var options = this.enum.split('|');
										var rect = this.getBoundingClientRect();
										var span = this;
										with (popupselect) {
											options.forEach(function (option) {
												//console.log(span, span.item, span.bediening);
												appendTag('div', {
													value: option, innerText: String(option.replace(/_/g, ' ')).capitalize(), span: span, onclick: function () {
														Gui.msgSend({ id: this.span.item.id, method: { [this.span.bediening]: [this.value] } });
														popupselect.innerText = '';
													}
												});
											});
											style.left = (rect.right - popupselect.offsetWidth) + 'px';
											style.top = rect.top + 'px';
										}
									}
								});
							}
						}
					}
					if (this.children) {
						for (var name in this.children) Gui.showtabpanelitem.call(this.children[name], this.elUl, level + 1);
					}
				}
			}
			return el;
		},
		showtabpanel: function () {
			if (this.item.opentab) return this.item.opentab();//style.display = '';
			Gui.showtabpanelitem.call(this.item, elPanel, 0);
			(this.item.opentab = function () {
				var c = this.tabpanel.parentElement.children;
				for (var i = 0, e; e = c[i]; i++) e.style.display = 'none';
				this.tabpanel.style.display = '';
			}).call(this.item);
		},
		//addTabsheetL: function (item) {
		//	//console.log(item);
		//	with (item.el = elPanelTree.appendTag('li', { className: 'col' })) {
		//		with (appendTag('div', { className: 'row', attr: { open: 0 }, onclick: function () { this.setAttribute('open', this.getAttribute('open') ^ 1) } })) {
		//			appendTag('span', { innerText: item.title });
		//			appendTag('icon', { className: 'deelsysteem_alarm' });
		//			appendTag('icon', { className: 'verkeerskundig' });
		//			appendTag('icon', { className: 'hand' });
		//		}
		//		with (appendTag('ul', { className: 'col' })) {
		//			for (var name in item.children) {
		//				var subitem = item.children[name];
		//				with (appendTag('li').appendTag('div', { className: 'row', item: subitem, onclick: Gui.showtabpanel })) {
		//					appendTag('icon', { className: 'bb' });
		//					appendTag('icon', { className: 'deelsysteem_alarm' });
		//					appendTag('icon', { className: 'verkeerskundig' });
		//					appendTag('icon', { className: 'hand' });
		//					appendTag('span', { innerText: subitem.title });
		//				}
		//			}
		//		}
		//	}
		//},
		buildscreen: function () {
			with (elBartop) {
				appendTag('span', { innerText: 'Tunnel A2' });
				elTime = appendTag('span', { style: 'margin-left:auto;' });
				appendTag('span', { className: 'close' });
			}
			setInterval(function () {
				document.body.setAttribute('blink', Gui.blink ^= 1);
				elTime.innerText = new Date().toLocaleTimeString();
			}, 1000);
			with (elSignalButtons) {
				appendTag('a', { className: 'button gray check l' });
				appendTag('a', { className: 'button gray checkCam' });
				appendTag('a', { className: 'button gray checkAll r' });
				appendTag('a', { className: 'button gray ond l r ' });
				appendTag('a', { className: 'button gray toon l r ' });
				appendTag('a', { className: 'button gray notitie l r ' });
				appendTag('a', { className: 'button gray showOnd l r ' });
			}
			with (elTabsBottomControl) {
				tabclick = function (event) {
					//console.log(this, this.elTab);
					if (Gui.tabBottom) {
						if (Gui.tabBottom.elTab) Gui.tabBottom.elTab.style.display = 'none';
						Gui.tabBottom.removeAttribute('selected')
					}
					(Gui.tabBottom = this).setAttribute('selected', '');
					if (Gui.tabBottom.elTab) Gui.tabBottom.elTab.style.display = '';
					elSignalsBevCont.style.display = 'none';

					if (elTabSystem) for (var i = 0, e, c = elTabSystem.children; e = c[i]; i++) if (e.elTabsBottomControlWeg) e.style.display = e.elTabsBottomControlWeg == this ? '' : 'none';
				};
				Gui.tabBottom = appendTag('a', {
					innerText: 'Meldingen', attr: { selected: '' }, onclick: function () {
						tabclick.call(this);
						elSignalsBevCont.style.display = '';
					}, elTab: elTabsBottom.appendTag('div', { className: 'row', style: 'display:none;' })
				});

				var el = appendTag('a', { innerText: 'Verkeer', className: 'verkeer', onclick: tabclick, elTab: elTabsBottom.appendTag('div', { className: 'row tab verkeer', style: 'display:none;' }) });

				//el.click();

				with (el.elTab) {
					with (appendTag('div', { className: 'baaninfo col' })) {
						with (appendTag('div', { className: 'row aco' })) {
							with (appendTag('div', { className: 'col' })) {
								appendTag('div', { innerText: 'Re' });
							}
							with (appendTag('div', { className: 'col' })) {
								elReFlow = appendTag('div', { className: 'flow', innerText: '25' })
								elReLight = appendTag('div', { className: 'light', innerText: '7' })
								elReSound = appendTag('div', { className: 'sound' })
								elReRDS = appendTag('div', { className: 'rds' })
							}
						}
						with (appendTag('div', { className: 'row aco ' })) {
							with (appendTag('div', { className: 'col' })) {
								appendTag('div', { innerText: 'MTK' });
							}
							with (appendTag('div', { className: 'col' })) {
								elMtkStuur = appendTag('div', { className: 'stuur' })
								elMtkLight = appendTag('div', { className: 'light' })
								elMtkSound = appendTag('div', { className: 'sound' })
							}
						}
						with (appendTag('div', { className: 'row aco ' })) {
							with (appendTag('div', { className: 'col' })) {
								appendTag('div', { innerText: 'Wi' });
							}
							with (appendTag('div', { className: '' })) {
								elLiFlow = appendTag('div', { className: 'flow', innerText: '25' })
								elLiLight = appendTag('div', { className: 'light', innerText: '0' })
								elLiSound = appendTag('div', { className: 'sound' })
								elLiRDS = appendTag('div', { className: 'rds' })
							}
						}
					}
					onviewscroll = function () {
						viewpanel.style.top = (elDetailContainer.scrollTop / scale.y) + 'px';
						viewpanel.style.top = ((elDetailContainer.scrollTop / (elDetailContainer.scrollHeight - elDetailContainer.offsetHeight)) * (elOverview.offsetHeight - viewpanel.offsetHeight)) + 'px';
						viewpanel.style.left = (elDetailContainer.scrollLeft / scale.x) + 'px';

						if (elDetailContainer.scrollTop < 200) {
							weg = 'N2';
							kmsl = Math.round(((elDetailContainer.scrollLeft / 118) + 63) * 10) / 10;
							kmsr = kmsl - 0.6;
						}
						else {
							weg = 'A2';
							kmsl = Math.round(((elDetailContainer.scrollLeft / 118) + 110) * 10) / 10;
							kmsr = kmsl + 0.6;
						}

						function writekm(naam, weg, kms) {
							with (document.getElementById(naam)) {
								children[0].innerText = weg;
								children[1].innerText = kms;
							}
						}
						writekm('kmblb', weg + ' Li', (kmsl).toFixed(1));
						writekm('kmbrb', weg + ' Li', (kmsr).toFixed(1));
						writekm('kmblo', weg + ' Re', (kmsl).toFixed(1));
						writekm('kmbro', weg + ' Re', (kmsr).toFixed(1));

						elReFlow.innerText = Math.round(Math.random() * 3);
						elReLight.innerText = Math.round(Math.random() * 3);
						elReSound.innerText = Math.round(Math.random() * 3);
						elReRDS.innerText = Math.round(Math.random() * 3);
						elMtkStuur.innerText = Math.round(Math.random() * 3);
						elMtkLight.innerText = Math.round(Math.random() * 3);
						elMtkSound.innerText = Math.round(Math.random() * 3);
						elLiFlow.innerText = Math.round(Math.random() * 3);
						elLiLight.innerText = Math.round(Math.random() * 3);
						elLiSound.innerText = Math.round(Math.random() * 3);
						elLiRDS.innerText = Math.round(Math.random() * 3);
					};
					with (elDetailContainer = appendTag('div', { className: 'aco detail', onscroll: onviewscroll })) {
						with (elDetailContainerChild = appendTag('div', { className: 'col', style: 'height:840px;width:' + (840 * 8) + 'px;' })) {
							appendTag('img', { src: "img/prj/bg_detail.png"  });
							elOverview.appendTag('img', { src: "img/prj/bg_detail.png" });
							//elDetailTop = appendTag('ul', { className: 'sbs' });
						}
					}
					scale = {
						x: (elDetailContainerChild.offsetWidth - elDetailContainer.offsetWidth) / (elOverview.offsetWidth - viewpanel.offsetWidth),
						y: (elDetailContainerChild.offsetHeight - elDetailContainer.offsetHeight) / (elOverview.offsetHeight - viewpanel.offsetHeight)
					};
					console.log(scale, elDetailContainerChild.offsetHeight, elDetailContainer.offsetHeight);
					(function () {
						this.addEventListener("mousedown", this.startmove = function (event) {
							console.log('start');
							//elDetailContainer.scrollLeft = 2000;

							//if (!this.panelpos) {
							startpos = { clientX: event.clientX, clientY: event.clientY, startleft: viewpanel.offsetLeft, starttop: viewpanel.offsetTop }
							targetpanel.style.left = startpos.startleft + 'px';
							targetpanel.style.top = startpos.starttop + 'px';
							targetpanel.setAttribute('show', '');
							targetpanel.setAttribute('move', '');
							document.addEventListener("mousemove", viewpanel.movepanel, true);
							document.addEventListener("mouseup", viewpanel.movepanelend, true);
						});
						this.movepanel = function (event) {
							target = { deltaX: event.clientX - startpos.clientX, deltaY: event.clientY - startpos.clientY };
							target.left = startpos.startleft + target.deltaX;
							target.top = startpos.starttop + target.deltaY;
							//target.endtop = target.top > 150 ? 150 : 30;


							target.steps = (elDetailContainerChild.offsetWidth - elDetailContainer.offsetWidth) / (elDetailContainer.offsetWidth / 2);
							target.delta = { width: Math.round(elOverview.offsetWidth / target.steps) };
							target.newleft = Math.min(Math.max(0, Math.round(target.left / target.delta.width) * target.delta.width), elOverview.offsetWidth - viewpanel.offsetWidth);
							target.newtop = target.top > 150 ? 165 : 30;

							//console.log(target);
							targetpanel.style.left = target.newleft + 'px';
							targetpanel.style.top = target.newtop + 'px';
						}
						this.movepanelend = function (event) {
							document.removeEventListener("mouseup", viewpanel.movepanelend, true);
							document.removeEventListener("mousemove", viewpanel.movepanel, true);
							elDetailContainer.scrollTo({ top: target.newtop * scale.y, left: target.newleft * scale.x, behavior: 'smooth' });
							targetpanel.removeAttribute('show');
							targetpanel.removeAttribute('move');
						}
					}).call(viewpanel);

					with (appendTag('div', { className: 'kmb col', id: 'kmblb' })) {
						appendTag('span', { innerText: 'A2 m' }); appendTag('span', { innerText: '30,2' });
					}
					with (appendTag('div', { className: 'kmb col', id: 'kmbrb' })) {
						appendTag('span', { innerText: 'A2 Re' }); appendTag('span', { innerText: '30,2' });
					}
					with (appendTag('div', { className: 'kmb col', id: 'kmblo' })) {
						appendTag('span', { innerText: 'A2 m' }); appendTag('span', { innerText: '30,2' });
					}
					with (appendTag('div', { className: 'kmb col', id: 'kmbro' })) {
						appendTag('span', { innerText: 'A2 Li' }); appendTag('span', { innerText: '30,2' });
					}

					appendTag('div', { className: 'btndetailnav', id: 'btnup', onclick: function () { elDetailContainer.scrollTop = 0; } });
					appendTag('div', { className: 'btndetailnav', id: 'btndown', onclick: function () { elDetailContainer.scrollTop = 10000; } });
					appendTag('div', { className: 'btndetailnav', id: 'btnright', onclick: function () { elDetailContainer.scrollLeft += 420; } });
					appendTag('div', { className: 'btndetailnav', id: 'btnleft', onclick: function () { elDetailContainer.scrollLeft -= 420; } });
				}
				elTabSystem = elTabsBottom.appendTag('ul', { className: 'col tab system', style: 'display:none;' });
			}
			with (elSignalsBevCont.appendTag('div', { className: 'row check', style: "line-height:30px;" })) {
				'verkeerskundig,deelsysteem_alarm,deelsysteem_storing,statusmelding,onderdrukte_melding'.split(',').forEach(function (name) {
					appendTag('input', { type: 'checkbox', id: name });
					appendTag('label', { className: name, innerText: name.replace(/_/g, ' '), attr: { for: name } });
				});
			}

		},
		menuitems: {},
		createPanelTreeItem: function (name1) {
			var topmenuitem = AIM.Gui.menuitems[name1] = AIM.Gui.mnu[name1];
			with (elPanelTree.appendTag('li')) {
				with (topmenuitem.elLI = appendTag('div', { className: 'row sumitems', open: 0 })) {
					appendTag('span', { innerText: topmenuitem.title || name1 });
					appendTag('icon', { className: 'icon sum deelsysteem_alarm' });
					appendTag('icon', { className: 'icon sum verkeerskundig' });
					appendTag('icon', { className: 'icon sum hand' });
				}
				with (appendTag('ul', { className: 'col' })) {
					for (var name2 in topmenuitem.children) {
						//var menuitem = AIM.Gui.mnu[name2] = AIM.Gui.mnu[name1][name2];
						var menuitem = AIM.Gui.menuitems[name2] = topmenuitem.children[name2];
						menuitem.parent = topmenuitem;
						with (appendTag('li')) {
							var onopen = function () {
								console.log(this.items);
								with (this.tabpanel = elPanel.appendTag('li', { className: this.id, attr: { bedieningswijze: this.values && this.values.bedieningswijze ? this.values.bedieningswijze.title || this.values.bedieningswijze || '' : '' } })) {
									with (appendTag('div', { className: 'row', open: 1 })) {
										appendTag('span', { innerText: this.menuitem.title || this.menuitem.name });
										with (appendTag('div', { className: 'btns', })) {
											appendTag('a', {
												className: 'btn_auto', item: this, onclick: function (event) {
													event.stopPropagation();
													Gui.msgSend({ id: this.item.id, method: { SetOpAutobediening: [] } });
												}
											});
											appendTag('a', {
												className: 'btn_hand', item: this, onclick: function (event) {
													event.stopPropagation();
													Gui.msgSend({ id: this.item.id, method: { SetOpHandbediening: [] } });
												}
											});
										}
										//if (!level) appendTag('a', { className: 'close' });
									}
									with (this.elUl = appendTag('ul')) {
										//if (this.control) {
										//	var variabelen = this.control.variabelen;
										//	for (var name in variabelen) {
										//		var prop = variabelen[name];
										//		if (prop.gui) with (appendTag('div', { className: 'row' })) {
										//			if (name in this.values) this.tabpanel.setAttribute(name, getvalue(this, name));
										//			appendTag('span', { className: 'aco', innerText: prop.title });
										//			appendTag('span', {
										//				className: 'selectpo ' + this.id + '_' + name, innerText: String(getvalue(this, name)).replace(/_/g, ' ').capitalize(), item: this, enum: variabelen[prop.Gui.selectvariabele].enum, bediening: prop.Gui.bediening,
										//				onclick: function () {
										//					var options = this.enum.split('|');
										//					var rect = this.getBoundingClientRect();
										//					var span = this;
										//					with (popupselect) {
										//						options.forEach(function (option) {
										//							//console.log(span, span.item, span.bediening);
										//							appendTag('div', {
										//								value: option, innerText: String(option.replace(/_/g, ' ')).capitalize(), span: span, onclick: function () {
										//									Gui.msgSend({ id: this.span.item.id, method: { [this.span.bediening]: [this.value] } });
										//									popupselect.innerText = '';
										//								}
										//							});
										//						});
										//						style.left = (rect.right - popupselect.offsetWidth) + 'px';
										//						style.top = rect.top + 'px';
										//					}
										//				}
										//			});
										//		}
										//	}
										//}
										if (this.items) this.items.forEach(function (item) {
											with (item.elLI = appendTag('li')) {
												with (appendTag('div', { className: 'row sumitems', items: [item], open: 0 })) {
													appendTag('span', { innerText: item.title || item.name, });
													appendTag('icon', { className: 'icon sum deelsysteem_alarm' });
													appendTag('icon', { className: 'icon sum verkeerskundig' });
													appendTag('icon', { className: 'icon sum hand' });
												}
												(addchildren = function (item) {
													if (!item.children) return;
													with (item.elLI.appendTag('ul')) {
														item.children.forEach(function (child) {
															with (child.elLI = appendTag('li')) {
																with (appendTag('div', { className: 'row sumitems', items: [child], open: 0 })) {
																	appendTag('span', { innerText: child.title || child.name, });
																	appendTag('icon', { className: 'icon sum deelsysteem_alarm' });
																	appendTag('icon', { className: 'icon sum verkeerskundig' });
																	appendTag('icon', { className: 'icon sum hand' });
																}
																addchildren(child);
															}
														});
													}
												})(item);
											}
										});
									}
								}
								Gui.sumSignals();
							}
							menuitem.name = name2;
							with (menuitem.elLI = appendTag('div', { className: 'row sumitems', menuitem: menuitem, open: 0, onopen: onopen })) {
								appendTag('icon', { className: 'icon sum bb' });
								appendTag('icon', { className: 'icon sum deelsysteem_alarm' });
								appendTag('icon', { className: 'icon sum verkeerskundig' });
								appendTag('icon', { className: 'icon sum hand' });
								appendTag('span', { innerText: menuitem.title || name2 });
							}
							menuitem.elUL = elPanel.appendTag('ul', { className: 'col' });
						}
					}
				}
			}
		},
	},
	createBody: function (item) {
		console.log("AAAAAAAAAAA createBody", item);
		itemTunnel=item;
		Gui.buildscreen();
		console.log('MNU', AIM.Gui.mnu);
		for (var name1 in AIM.Gui.mnu) Gui.createPanelTreeItem(name1);

		//return;
		//Gui.items = AIM.ref;
		AIM.ref.forEach(Gui.create);
		AIM.ref.forEach(function (item) {
			if (item.masterID && AIM.ref[item.masterID]) {
				item.master = AIM.ref[item.masterID];
				if (Object.prototype.toString.call(item.master[item.schema]) === '[object Array]') item.master[item.schema].push(AIM.ref[item.id]);
				else item.master[item.schema] = AIM.ref[item.id];
			}
		});
		item.elDetail = elDetailContainerChild;
		item.elOverview = elOverview;
		elMenu = {};
		var tabsLeftClick = function () {
			for (var i = 0, e, c = elTabsLeftControl.children; e = c[i]; i++) e.removeAttribute('selected');
			this.setAttribute('selected', '');
			for (var name1 in AIM.Gui.mnu) AIM.Gui.mnu[name1].elLI.style.display = 'none';
			for (var i = 0, name1; name1 = this.treeitems[i]; i++) AIM.Gui.mnu[name1].elLI.style.display = '';
			Gui.sumSignals();
		}
		with (elTabsLeftControlDGB = elTabsLeftControl.appendTag('a', { className: 'row sumitems', attr: this.selected ? { selected: 1 } : {}, treeitems: 'Tunnel,Detecties,Overig,DGB'.split(','), onclick: tabsLeftClick })) {
			with (appendTag('div', { className: 'row aco', })) {
				//verkeerskundig, deelsysteem_alarm, deelsysteem_storing, statusmelding
				appendTag('icon', { className: 'icon sum hand' });
				appendTag('icon', { className: 'icon sum verkeerskundig' });
				appendTag('icon', { className: 'icon sum deelsysteem_alarm' });
				appendTag('span', { innerText: 'DGB', className: this.dir || '' });
			}
		}
		//var treeitems = [];
		elTabsBottomControlDGB = elTabsBottomControl.appendTag('a', { innerText: 'DGB', onclick: tabclick, elTab: elTabSystem });

		//Gui.createPanelTreeItem('Tunnel');
		//Gui.createPanelTreeItem('Overig');
		//Gui.createPanelTreeItem('Detecties');


		(function build(item, level) {
			if (item.schema == 'Weg') {
				//Gui.createPanelTreeItem('Vluchtroute');
				Gui.elTabsBottomControlWeg = elTabsBottomControl.appendTag('a', { innerText: item.name, onclick: tabclick, elTab: elTabSystem });
			}

			if (item.schema == 'Verkeersbuis') {
				//Gui.createPanelTreeItem('Buis');
				//Gui.createPanelTreeItem('Verkeer');
				elBuisButtonPanel = GUI.addButtonPanel.call({ title: item.name });
				var treeitems = [];
				with (Gui.elTabsLeftControlBuis = elTabsLeftControl.appendTag('a', { className: 'row sumitems', attr: this.selected ? { selected: 1 } : {}, treeitems: 'Buis,Vluchtroute,Tunnel,Verkeer,Detecties,Overig'.split(','), onclick: tabsLeftClick })) {
					with (appendTag('div', { className: 'row aco', })) {
						//verkeerskundig, deelsysteem_alarm, deelsysteem_storing, statusmelding
						appendTag('icon', { className: 'icon sum hand' });
						appendTag('icon', { className: 'icon sum verkeerskundig' });
						appendTag('icon', { className: 'icon sum deelsysteem_alarm' });
						appendTag('span', { innerText: item.header[0].substr(0, 3), className: this.dir || '' });
					}
				}
				//Gui.elementSignalCount.push(Gui.elTabsLeftControlBuis);
			}
			if (Gui.elTabsLeftControlBuis) {
				(Gui.elTabsLeftControlBuis.items = Gui.elTabsLeftControlBuis.items || []).push(item);
			}

			if (item.mnu) {
				var menuitem = AIM.Gui.menuitems[item.mnu];
				if (menuitem && menuitem.elLI) {
					(menuitem.elLI.items = menuitem.elLI.items || []).push(item);
					//console.log('>>>>>>>>>>', menuitem.parent);
					if (menuitem.parent && menuitem.parent.elLI) (menuitem.parent.elLI.items = menuitem.parent.elLI.items || []).push(item);
					//Gui.sumSignals();
					//return;

				}
			}

			var systemRow = AIM.Gui.systemRows[item.schema];
			if (systemRow) {
				if (item.schema == 'Dienstgebouw') systemRow.elTabsBottomControlWeg = elTabsBottomControlDGB;
				with (systemRow.elLI = elTabSystem.appendTag('li', { className: 'row', elTabsBottomControlWeg: systemRow.elTabsBottomControlWeg || Gui.elTabsBottomControlWeg })) {
					appendTag('div', { innerText: item.name });
					with (elRowSystem = appendTag('div', { className: 'row a aco' })) {
						for (var i in systemRow.items) {
							with (elRowSystem = appendTag('div', { className: 'col' })) {
								for (var name in systemRow.items[i]) {
									appendTag('a', { innerText: name });
								}
							}
						}
					}
				}
			}

			if (item.children && item.children.length) {
				item.elDetailUL = item.elDetail.appendTag('ul');
				item.children.forEach(function (child) {
					if ('selected' in child && child.selected == 0) return;
					//console.log(level, child.idx, child.id, child.schema, child.title);
					child.elDetail = item.elDetailUL.appendTag('li', { className: child.className, item: child, onmouseup: Gui.showpanel, });
					child.elOverview = item.elOverview.appendTag('li', { className: child.className + ' overview', item: child, onmouseup: Gui.showpanel });
					if (child.gui) {
						if (child.gui.create) {
							child.gui.create.call(child);
						}
						if (child.gui.mnu && AIM.Gui.mnu[child.gui.mnu]) {
							with (AIM.Gui.mnu[child.gui.mnu].elUL.appendTag('li')) {
								appendTag('div', { className: 'row', innerText: child.title });
							}
						}
					}
					build(child, level + 1);
				});
			}
		})(item, 0);

		elTabsLeftControlDGB.parentElement.appendChild(elTabsLeftControlDGB);
		elTabsBottomControlDGB.parentElement.appendChild(elTabsBottomControlDGB);
		console.log(AIM.Gui.systemRows);
		AIM.Gui.systemRows.Tunnel.elLI.parentElement.appendChild(AIM.Gui.systemRows.Tunnel.elLI);
		AIM.Gui.systemRows.Tunnel.elLI.style.marginTop = 'auto';
		elTabsLeftControl.firstChild.click();
		//setInterval(function () {
		//	document.body.setAttribute('blink1',Gui.blibk^=1);
		//}, 500);
		Gui.loaded = true;
		Gui.sumSignals();
		console.log(AIM.Gui.menuitems);
		//console.log(item.Verkeersbuis[0].Verkeerslicht[0].sf_Verkeerslicht_Verkeersbuis.Alarm_VerkeersbuisVerkeerslichtStoringGroen);3375440;


		//GUI.addButtonPanel.call({ title: 'H Re' });
		//GUI.addButtonPanel.call({ title: 'H Li' });
		//GUI.addButtonPanel.call({ title: 'P Re' });
		//GUI.addButtonPanel.call({ title: 'P Li' });
	},
});
