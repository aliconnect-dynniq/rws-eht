aim.extend({
    config: {
        ws: {
            //url: document.location.origin.replace(/http/,'ws'),//;//"wss://192.168.0.135:8443",
        }
    },
    on: {
        init: function () {
            http.request({url:'/data.json'}, function(event) {
                var vkln = aim.ref.Verkeerslichten[0];
                if (!vkln.Verkeerslicht) return;
                with (document.body) {
                    with (appendTag('div')) {
                        vkln.Verkeerslicht.forEach(function(vkl, i){
                            with (appendTag('div', {className: vkl.ID + ' Verkeerslicht nr' + i, attr: { stand : "onbekend" } })){
                                appendTag('div',{className:'rood'});
                                appendTag('div',{className:'geel'});
                                appendTag('div',{className:'groen'});
                            }
                        });
                    }
                    appendTag('h2', { innerText: document.location.origin });
                    'rood,groen,geel_knipperen,gedoofd'.split(',').forEach(function(stand){
                        appendTag('button', { innerText: stand, url: document.location.origin + `/api/SetStand(${stand})`, onclick: function () { http.request({ url: this.url, method: 'POST' }) } });
                    });
                }
            });
        },
    }
});
