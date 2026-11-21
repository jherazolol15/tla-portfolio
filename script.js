(function(){
  var links=[].slice.call(document.querySelectorAll('.fixtures a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'));});
  var prog=document.querySelector('.prog'), weeks=document.getElementById('weeks');
  function update(){
    var y=window.scrollY+window.innerHeight*0.35, cur=-1;
    secs.forEach(function(s,i){ if(s.offsetTop<=y) cur=i; });
    links.forEach(function(a,i){ if(i===cur){a.setAttribute('aria-current','true');} else {a.removeAttribute('aria-current');} });
    var top=weeks.offsetTop, h=weeks.offsetHeight, p=Math.min(1,Math.max(0,(y-top)/h));
    prog.style.transform='scaleX('+p+')';
    if(cur>=0){ var a=links[cur], ol=a.parentNode.parentNode; if(a.offsetLeft<ol.scrollLeft||a.offsetLeft+a.offsetWidth>ol.scrollLeft+ol.clientWidth){ ol.scrollLeft=a.offsetLeft-16; } }
  }
  window.addEventListener('scroll',update,{passive:true}); window.addEventListener('resize',update); update();
})();
(function(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    [].forEach.call(document.querySelectorAll('.clips video'),function(v){v.pause();v.removeAttribute('autoplay');v.controls=true;});
  }
})();
