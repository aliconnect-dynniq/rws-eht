AIM.extend ({
	eht: {
		import: {
			vraagspecificatie_eisen_reht: function() {
				AIM.http.request('/docs/rws/Vraagspecificatie Eisen REHT.htm', (event)=> {
					console.log(event);
					var parser = new DOMParser();
					var content = parser.parseFromString(event.target.responseText, 'text/html').body;
					data = (addnode = function(node) {
						nodeData = [];
						[...node.getElementsByTagName('TABLE')].forEach(function(el) {
							var rows=[];
							[...el.getElementsByTagName('TR')].forEach(function(el) {
								var cols=[];
								[...el.getElementsByTagName('TD')].forEach(function(el) {
									cols.push(el.innerText.trim());
								});
								rows.push(cols);
							});
							rows.el = el;
							nodeData.push(rows);
						});
						return nodeData;
					})(content);

					var eisenRows = {}, eisen={}, eis;
					data.forEach(function(table){
						table.forEach(function(row) {
							var eisnr = '';
							if (!row[0]) row.shift();
							if (row.includes('Geldigheids-')) eisnr = row[0];
							if (eisnr) eis = eisenRows[eisnr] = eisenRows[eisnr] || [];
							if (eis) eis.push(row);
						});
					});
					console.log(eisenRows);
					function maketext(s) {
						// s = s.replace(/[^\n]- /g,'\n- ');
						// s = s.replace(/[^\n]([0-9]+). /g,'\n$1. ');
						return s.trim();
					}
					for (var eisnr in eisenRows) {
						// if (eisnr != 'SYS-0334') continue;
						var eis = eisenRows[eisnr];
						var eisObj = eis.obj = eisen[eisnr]= {};
						eisObj.eisnr = eisnr;
						var row = eis.shift();
						row.shift();
						eisObj.geldig = row.pop() || row.pop() || row.pop();
						eisObj.titel = row.shift() || row.shift() || row.shift() || row.shift() || row.shift() || row.shift();
						var row = eis.shift();

						eisObj.titel += ' ' + (row.shift() || row.shift() || row.shift() || row.shift() || row.shift() || row.shift() || row.shift() || row.shift() || row.shift() || row.shift());
						eisObj.description = '';
						var attribute = 'description';
						for (var i=0, row = ''; row = eis[i]; i++) {
							if (row[0] === 'Bovenliggende') {attribute = 'boven';}
							if (row[0] === 'V&V-voorwaarden:') {attribute = 'voorwaarden'; vvAttr=''; vv = {}; eisObj.voorwaarden = [vv]; }
							if (row[0] === 'Stakeholder(s):') {attribute = 'stakeholders'; row.shift();}
							if (row[0] === 'Brondocument:') {attribute = 'brondocument'; row.shift();}
							if (attribute === 'boven') {
								var eisonder = row.pop();
								row.shift();
								var eisboven = row.shift() || row.shift();
								// if (eisid) (eisObj.eisboven = eisObj.eisboven || []).push(eisid.replace(/,/g,''));
								if (eisboven && !eisObj.eisboven && !eisboven.includes('Onder') && !eisboven.includes('eis')) eisObj.eisboven = eisboven.replace(/,/g,'');
								if (eisonder) (eisObj.eisonder = eisObj.eisonder || []).push(eisonder.replace(/,/g,''));
							}
							else {
								// var val = String(row.pop() || '').trim() || String(row.pop() || '').trim() || String(row.pop() || '').trim() || String(row.pop() || '').trim() || String(row.pop() || '').trim() || String(row.pop() || '').trim() || String(row.pop() || '').trim();
								var val = row.pop() || row.pop() || row.pop() || row.pop() || row.pop() || row.pop() || row.pop() || row.pop() || row.pop();
								if (!val) continue;
								if (attribute === 'description') {
									eisObj.description = (eisObj.description ? eisObj.description + ' ' : '') + val;
								}
								else if (attribute === 'voorwaarden') {
									var attributeName = row.pop() || row.pop() || row.pop() || row.pop() || row.pop();
									if (attributeName) {
										attributeName = attributeName.replace(/:/,'');
										if (vv[attributeName]) eisObj.voorwaarden.push(vv = {});
										vv[attributeName] = '';
										var attrName = attributeName;
									}
									vv[attrName] = (vv[attrName] ? vv[attrName] + ' ' : '') + val;
								}
								else {
									eisObj[attribute]  = (eisObj[attribute] ? eisObj[attribute] + ' ' : '') + val; //maketext((eisObj[attribute] ? eisObj[attribute] + ' ' : '') + val.trim().replace(/\r|\n/g,'').replace(/  /g,' '));
								}
							}
						}
					}
					AIM.http.request('docimport.php', { query: {fname: 'vraagspecificatie_eisen_reht' }, post: eisen }, (event)=> {});
				});
			}
		},
		load: {
			vraagspecificatie_eisen_reht: function() {
				AIM.http.request('vraagspecificatie_eisen_reht.json', (event)=> {
					console.log(event.data);
					var eisen = event.data, top = {
						titel: 'Systeem eisen',
						eisnr: 'SYS',
						eisonder : [],
					};
					for (var eisID in eisen) {
						var eis = eisen[eisID];
						eis.titel = (eis.titel.trim() ? eis.titel.trim() : eis.eisnr).replace(/\n|\r/g,'');
						if ('eisboven' in eis) continue;
						top.eisonder.push(eisID);
					}
					document.body.appendTag('H1', {innerText: 'Index' })
					var elIndex = document.body.appendTag('OL').appendTag('LI');
					document.body.appendTag('H1', {innerText: 'Eisen' });
					elEisen = document.body.appendTag('DIV');
					document.body.appendTag('H1', {innerText: 'V&V' });
					elVV = document.body.appendTag('DIV');
					document.body.appendTag('H1', {innerText: 'Stakeholders' });
					elStakeholders = document.body.appendTag('DIV');
					(eislist = function(eis, el, level) {
						el.appendTag('A', {href: '#' + eis.eisnr, innerText : eis.eisnr + ' ' + eis.titel });
						// document.body.appendTag('H'+level, {innerText: el.innerText })
						elEisen.appendTag('A', {name: eis.eisnr });
						elEisen.appendTag('H2', {innerText: eis.titel });
						if (eis.description) elEisen.appendTag('P', {innerText: eis.description.trim().replace(/\n|\r/g,'') });
						var elUlIndex = elEisen.appendTag('UL', {className:'table'});
						elUlIndex.appendTag('LI', ['LABEL','EisID'],['SPAN',eis.eisnr]);
						if (eis.eisboven) {
							var elPath = elUlIndex.appendTag('LI', ['LABEL','Eisen structuur boven']).appendTag('OL');
							for (var eisbovenID = eis.eisboven, eisboven; eisboven = eisen[eisbovenID]; eisbovenID = eisboven.eisboven) {
								if (!eisboven) break;
								elPath.appendTag('LI').appendTag('A', {href: '#' + eisbovenID, innerText: eisboven.titel });
							}
						}
						if (eis.eisonder) {
							var elBodyUL = elUlIndex.appendTag('LI', ['LABEL','Onderliggende eisen']).appendTag('OL');
							var elUL = el.appendTag('OL');
							for (var i=0, eisonderID; eisonderID = eis.eisonder[i]; i++) {
								var eisonder = eisen[eisonderID];
								if (eisonder) {
									elBodyUL.appendTag('LI').appendTag('A', {href: '#' + eisonderID, innerText: eisonder.titel });
									eislist(eisonder,elUL.appendTag('LI'), level+1);
								}
								else {
									elBodyUL.appendTag('LI').appendTag('A', {innerText: eisonderID + ' DETAILS NIET BESCHIKBAAR' });
									elUL.appendTag('LI', {innerText: eisonderID + ' DETAILS NIET BESCHIKBAAR'})
								}
							}
						}
						if (eis.voorwaarden) {
							var elOL = elUlIndex.appendTag('LI', ['LABEL','Voorwaarden']).appendTag('UL');
							for (var i=0,voorwaarde;voorwaarde=eis.voorwaarden[i];i++) {
								var elUL = elOL.appendTag('LI').appendTag('UL');
								for (var attributeName in voorwaarde) {
									var attributeValue = voorwaarde[attributeName].trim().replace(/\n|\r/g,'').replace(/  /g,' ');
									if (attributeName.includes('moment')) {
										if (!elVV[attributeValue]) {
											elVV.appendTag('A',{name:attributeValue });
											elVV.appendTag('H2',{innerText:attributeValue });
											elVV[attributeValue] = elVV.appendTag('UL');
										}
										elVV[attributeValue].appendTag(
											'LI',
											['A', {href: '#' + eis.eisnr, innerHTML: eis.titel }],
											['DIV', voorwaarde['Type V&V-methode'] || ''],
											['DIV', voorwaarde['Criterium'] || ''],
											['DIV', voorwaarde['Toelichting op aanpak V&V'] || ''],
										);
										elUL.appendTag('LI',{innerText: attributeName + ': '}).appendTag('A', {href: '#' + attributeValue, innerText: attributeValue });
									}
									else {
										elUL.appendTag('LI',{innerText: attributeName + ': ' + attributeValue });
									}
								}
							}
						}
						if (eis.brondocument) elUlIndex.appendTag('LI', ['LABEL','Brondocument'], ['SPAN',eis.brondocument] );
						if (eis.stakeholders) {
							if (!elStakeholders[eis.stakeholders]) {
								elStakeholders.appendTag('A',{name:eis.stakeholders });
								elStakeholders.appendTag('H2',{innerText:eis.stakeholders });
								elStakeholders[eis.stakeholders] = elStakeholders.appendTag('UL');
							}
							elStakeholders[eis.stakeholders].appendTag('LI',['A', {href: '#' + eis.eisnr, innerText: eis.titel }]);
							elUlIndex.appendTag('LI',['LABEL','Stakeholder']).appendTag('A', {href: '#' + eis.stakeholders, innerText: eis.stakeholders });
						}
					})(top, elIndex, 1);
				});
			}
		},
	},
	on: {
		init: function() {
			// AIM.eht.import.vraagspecificatie_eisen_reht();
			AIM.eht.load.vraagspecificatie_eisen_reht();
		}
	}
});
