
data = {
  requirements: {},
};

[...document.body.getElementsByClassName('RequirementNo')].forEach(function(el){
  if (el.firstChild && el.parentElement.nextElementSibling) {
    path=[];
    (function(){
      for (var par=el,i;par;par=par.parentElement) {
        for (var prev=par;prev;prev=prev.previousElementSibling) {
          if (!i && prev.tagName[0]=='H') {
            i=prev.tagName[1];
            path.unshift(prev.innerText.split(/\s\s/).pop().trim());
            // console.log(prev.innerText.split('  ').pop());
          }
          else if (prev.tagName=='H'+(i-1)) {
            path.unshift(prev.innerText.split(/\s\s/).pop().trim());
            i--;
            if(!i) return;
          }
        }
      }
    })();
    // console.log(path);
    data.requirements[el.firstChild.innerText.trim()] = {
      id: el.firstChild.innerText.trim(),
      path: path,
      innerHTML : el.parentElement.nextElementSibling.innerHTML.trim(),
      innerText : el.parentElement.nextElementSibling.innerText.trim(),
    }
    return;
  }
});

AIM.http.request({path: 'scandoc.php', post: JSON.stringify(data,null,2).replace(/ï|¿|½/g,'')}, function(event){console.log(this.responseText);});
console.log(data);
