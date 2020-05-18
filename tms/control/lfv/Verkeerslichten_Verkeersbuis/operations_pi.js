on = 0;
off = 1;
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
