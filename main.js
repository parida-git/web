const body = document.body;
const colors =[['02aab0','00cdac'],['f2709c','ff9472'],
  ['00b09b','96c93d'],
  ['ff512f','dd2476'],
  ['fc4a1a','f7b733'],
  ['de6262','ffb88c']];

function ranbubbles(){
  var bub = document.createElement('span');
  var size = Math.round(Math.random()*50) + 20;
  var lifespan = Math.round(Math.random()*6300) + 1000;
  var cx = Math.round(Math.random()*screen.width);
  var cy = Math.round(Math.random()*(screen.height/2));
  bub.style.width = size + 'px';
  bub.style.height = size + 'px';
  bub.style.left = cx + 'px';
  bub.style.top = cy + 'px';
  var color = colors[Math.round(Math.random()*(colors.length - 1))];
  bub.style.backgroundImage = 'linear-gradient(to top,#'+color[0]+',#'+color[1]+')';
  function bubanim(){
    cx += 1; cy += 1;
    bub.style.left = cx + 'px';
    bub.style.top = cy + 'px';
    window.requestAnimationFrame(bubanim);
  }
  body.appendChild(bub);
  window.requestAnimationFrame(bubanim);
  setTimeout(() => {bub.remove()},lifespan);
}

window.onload = () => {
  setInterval(ranbubbles, 800);
}