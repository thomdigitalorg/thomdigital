(function(){
 var pm=/[?&]xmas=(\w+)/.exec(location.search),prev=false;
 try{if(pm){if(pm[1]==='off')sessionStorage.removeItem('xmasprev');else sessionStorage.setItem('xmasprev','1');}prev=sessionStorage.getItem('xmasprev')==='1';}catch(e){prev=!!pm&&pm[1]!=='off';}
 var d=new Date(),mo=d.getMonth(),dy=d.getDate();
 if(!(prev||mo===11||(mo===0&&dy<=6)))return;
 var L=(document.documentElement.lang||'en').slice(0,2);
 var TT={en:{off:'Turn off decorations',on:'Show Christmas decorations'},fr:{off:'Désactiver les décorations',on:'Afficher les décorations de Noël'},es:{off:'Desactivar decoraciones',on:'Mostrar decoraciones navideñas'}};
 var T=TT[L]||TT.en;
 var off=false;try{off=localStorage.getItem('xmasoff')==='1';}catch(e){}
 var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 function go(){
  var fl=document.querySelector('.f-legal');
  if(off){if(fl){var a=document.createElement('a');a.href='#';a.textContent=T.on;a.addEventListener('click',function(e){e.preventDefault();try{localStorage.removeItem('xmasoff');}catch(x){}location.reload();});fl.appendChild(a);}return;}
  var css=document.createElement('link');css.rel='stylesheet';css.href='/xmas.css';document.head.appendChild(css);
  var bar=document.getElementById('xmas');
  var closed=false;try{closed=sessionStorage.getItem('xmasx')==='1';}catch(e){}
  if(bar){
   var p=bar.querySelector('p'),x=bar.querySelector('.xmas-x');
   var row=document.createElement('div');row.className='xmas-row';bar.insertBefore(row,bar.firstChild);row.appendChild(p);
   var xl=document.createElement('div');xl.className='xl';xl.setAttribute('aria-hidden','true');bar.insertBefore(xl,row);
   if(closed)bar.classList.add('min');
   if(x)x.addEventListener('click',function(){bar.classList.add('min');try{sessionStorage.setItem('xmasx','1');}catch(e){}});
   var cols=['#e11d2e','#22a559','#ffc300','#2f6bff','#e11d2e','#22a559'],bz=['#c8102e','#ffc300','#166534','#c8102e','#ffc300'];
   function lights(){
    var W=bar.clientWidth;if(!W)return;xl.innerHTML='';
    var n=Math.max(8,Math.floor(W/32)),h='';
    for(var i=0;i<n;i++){var lx=(i+.5)*W/n;h+='<i style="left:'+lx.toFixed(1)+'px;--c:'+cols[i%cols.length]+';--d:'+((i*.27)%1.7).toFixed(2)+'s"></i>';}
    var nb=W<600?3:6;
    for(var k=0;k<nb;k++){var bx=(k+.5)*W/nb+(k%2?10:-10),len=14+((k*7)%10);h+='<b style="left:'+bx.toFixed(1)+'px;height:'+len+'px;--c:'+bz[k%bz.length]+';--d:'+(k*.45).toFixed(2)+'s"></b>';}
    xl.innerHTML=h;
   }
   bar.hidden=false;
   lights();var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(lights,150);});
  }
  if(fl){var o=document.createElement('a');o.href='#';o.textContent=T.off;o.addEventListener('click',function(e){e.preventDefault();try{localStorage.setItem('xmasoff','1');}catch(x){}location.reload();});fl.appendChild(o);}
  var ft=document.querySelector('footer');if(ft){ft.style.position='relative';var tr=document.createElement('div');tr.className='xtrees';tr.setAttribute('aria-hidden','true');ft.insertBefore(tr,ft.firstChild);}
  if(rm)return;
  var home=['/','/fr','/fr/','/es','/es/'].indexOf(location.pathname.replace(/index(\.html)?$/,''))>-1;
  var seen=false;try{seen=sessionStorage.getItem('sleigh')==='1';}catch(e){}
  if(home&&!seen){
   var sl=document.createElement('div');sl.className='sleigh';sl.setAttribute('aria-hidden','true');
   sl.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 120" stroke-linecap="round" stroke-linejoin="round"><g fill="#9a6b3d" stroke="#7a4f27" stroke-width="3"><g transform="translate(305 0)"><path d="M10 60C10 48 22 44 34 46L58 46C66 46 70 52 70 58C70 66 64 70 56 70L26 70C16 70 10 66 10 60Z"/><path d="M60 50L72 32L86 30L96 38L90 46L78 44L68 52Z"/><path d="M18 68L6 88M30 70L22 94M54 70L66 92M62 66L80 80" fill="none"/></g><g transform="translate(222 8)"><path d="M10 60C10 48 22 44 34 46L58 46C66 46 70 52 70 58C70 66 64 70 56 70L26 70C16 70 10 66 10 60Z"/><path d="M60 50L72 32L86 30L96 38L90 46L78 44L68 52Z"/><path d="M18 68L4 84M30 70L28 96M54 70L62 96M62 66L82 76" fill="none"/></g></g><g fill="none" stroke="#d9b48f" stroke-width="3"><path d="M385 30L389 18M389 18L383 10M389 18L399 12M387 26L397 24"/><path d="M302 38L306 26M306 26L300 18M306 26L316 20M304 34L314 32"/></g><path d="M226 66C200 60 176 62 152 68" fill="none" stroke="#d9c58a" stroke-width="2"/><path d="M20 60C20 80 40 92 70 92L170 92C190 92 196 78 190 62L170 62L170 80L60 80C46 80 40 70 40 60Z" fill="#c8102e" stroke="#ffc300" stroke-width="3"/><path d="M12 104C30 108 60 108 190 104C200 104 204 98 198 94M32 96L32 104M180 96L180 104" fill="none" stroke="#ffc300" stroke-width="3"/><path d="M70 62C60 40 90 36 92 62Z" fill="#166534"/><circle cx="122" cy="42" r="9" fill="#f4c9a8"/><path d="M113 46C116 54 128 54 131 46Z" fill="#fff"/><path d="M112 38L124 12L134 38Z" fill="#c8102e"/><circle cx="125" cy="11" r="4" fill="#fff"/><path d="M110 37H134" stroke="#fff" stroke-width="4" fill="none"/><path d="M104 62C104 52 112 48 122 48C132 48 138 54 138 62Z" fill="#c8102e"/><path d="M136 52L158 46" stroke="#c8102e" stroke-width="4" fill="none"/></svg>';
   document.body.appendChild(sl);
   try{sessionStorage.setItem('sleigh','1');}catch(e){}
   sl.addEventListener('animationend',function(ev){if(ev.animationName==='fly')sl.remove();});
  }
  var c=document.createElement('canvas');c.className='snow';c.setAttribute('aria-hidden','true');document.body.appendChild(c);
  var g=c.getContext('2d'),W=0,H=0,dpr=Math.min(window.devicePixelRatio||1,2),fl2=[],run=true;
  function size(){W=window.innerWidth;H=window.innerHeight;c.width=W*dpr;c.height=H*dpr;c.style.width=W+'px';c.style.height=H+'px';g.setTransform(dpr,0,0,dpr,0,0);}
  size();window.addEventListener('resize',size);
  var n=W<700?16:30;
  for(var i=0;i<n;i++)fl2.push({x:Math.random()*W,y:Math.random()*H,r:3+Math.random()*5,v:.3+Math.random()*.6,s:Math.random()*6.28,a:Math.random()*6.28,w:(Math.random()-.5)*.02,blue:Math.random()<.35});
  function flake(f){g.save();g.translate(f.x,f.y);g.rotate(f.a);g.strokeStyle=f.blue?'rgba(190,225,255,.9)':'rgba(255,255,255,.92)';g.lineWidth=f.r>5?1.4:1.1;g.lineCap='round';
   for(var k=0;k<6;k++){g.rotate(Math.PI/3);g.beginPath();g.moveTo(0,0);g.lineTo(0,f.r);g.moveTo(0,f.r*.55);g.lineTo(f.r*.28,f.r*.8);g.moveTo(0,f.r*.55);g.lineTo(-f.r*.28,f.r*.8);g.stroke();}
   g.restore();}
  function tick(){if(!run)return;g.clearRect(0,0,W,H);
   for(var i=0;i<fl2.length;i++){var f=fl2[i];f.y+=f.v;f.s+=.012;f.a+=f.w;f.x+=Math.sin(f.s)*.35;if(f.y>H+10){f.y=-10;f.x=Math.random()*W;}flake(f);}
   requestAnimationFrame(tick);}
  document.addEventListener('visibilitychange',function(){if(document.hidden){run=false;}else if(!run){run=true;requestAnimationFrame(tick);}});
  requestAnimationFrame(tick);
 }
 if(document.readyState!=='loading')go();else document.addEventListener('DOMContentLoaded',go);
})();
