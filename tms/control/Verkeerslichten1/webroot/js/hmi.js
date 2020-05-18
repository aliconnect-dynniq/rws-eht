AIM.extend({
  on: {
    init: function () {
      AIM.http.request('/data.json', event => {
        const Verkeerslichten = AIM.ref.Verkeerslichten[0];
        if (!Verkeerslichten.Verkeerslicht) return;
        const elVerkeerslichten = document.body.appendTag('div');
        Verkeerslichten.Verkeerslicht.forEach(function(Verkeerslicht, i){
          var elVerkeerslicht = elVerkeerslichten.appendTag('div', {className: Verkeerslicht.$id + ' Verkeerslicht nr' + i, stand : 'onbekend' } );
          elVerkeerslicht.appendTag('div',{className:'rood'});
          elVerkeerslicht.appendTag('div',{className:'geel'});
          elVerkeerslicht.appendTag('div',{className:'groen'});
        });
        document.body.appendTag('h2', { innerText: document.location.origin });
        [
          {value:'rood', innerText:'Rood' },
          {value:'groen', innerText:'Groen' },
          {value:'geel_knipperen', innerText:'Knipperen' },
          {value:'gedoofd', innerText:'Uit' },
        ].forEach(function(stand) {
          document.body.appendTag('button', {
            innerText: stand.innerText,
            onclick: AIM.http.request.bind(this, 'POST', `/api/${Verkeerslichten.$id}/setStand(${stand.value})`),
          });
        });
      });
    },
  }
});
