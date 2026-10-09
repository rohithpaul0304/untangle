/* Miniature market. Ten customers, one coin each; two-coin ad cost.
   These are teaching rules, not estimates of historical cigarette demand. */
function miniCounts(a,b){return a===b?[5,5]:a?[8,2]:[2,8]}
function miniVisual(v){
 if(v.type==='miniHook')return `<div class="opening-hook"><div class="hook-tv"><span>TV ADS</span><strong>OFF</strong></div><p>The TV cigarette-ad ban</p></div>`;
 if(v.type==='miniRole')return `<div class="opening-role"><div class="role-company"><div class="role-roof"></div><strong>Your company</strong><div class="role-door"></div></div><p><b>Your goal</b><br>Keep more coins.</p></div>`;

 if(v.type==='miniCompare')return `<div class="mini-comparison"><section><small>YOUR ADS OFF · RIVAL ON</small><strong>You keep 2</strong><p>Two customers buy from you.</p></section><section><small>YOUR ADS OFF · RIVAL OFF</small><strong>You keep 5</strong><p>Five customers buy from you.</p></section></div>`;
 if(v.type==='miniConcept')return `<div class="mini-concept"><h2>Strategic interdependence</h2><p>Your result depends on your choice <b>AND someone else’s choice.</b></p></div>`;
 if(v.type==='miniTransfer')return `<div class="mini-concept"><p>A meeting starts at 3. You arrive at 3.</p><p>One day everyone else arrives at 3. Another day they arrive at 3:20.</p><b>What changes for you even though you made the same choice?</b></div>`;
 if(v.type==='miniTransferResult')return `<div class="mini-comparison"><section><small>EVERYONE ARRIVES AT 3</small><strong>Start together</strong></section><section><small>OTHERS ARRIVE AT 3:20</small><strong>You wait 20 minutes</strong></section></div>`;
 const counts=miniCounts(v.a,v.b);
 return `<div class="mini-board" data-money="${!!v.money}"><div class="mini-firms">${[v.a,v.b].map((on,i)=>`<section class="mini-firm ${i?'purple':'blue'}"><b>${i?'Your rival':'You'}</b><div class="mini-ad ${on?'':'off'}" data-ad="${i}">${on?'ADS ON':'ADS OFF'}</div><div class="mini-till" data-till="${i}">${!i&&v.money?'You keep <strong>'+ (counts[0]-(v.a?2:0))+'</strong>':'<span>Customer payments</span>'}</div></section>`).join('')}</div><div class="mini-customer-field" aria-label="${counts[0]} customers with you; ${counts[1]} with rival">${Array.from({length:10},(_,i)=>`<i class="mini-person" data-person="${i}" aria-hidden="true"></i>`).join('')}</div><div class="mini-counts"><span data-count="0">${counts[0]} customers</span><span data-count="1">${counts[1]} customers</span></div><p class="mini-status" role="status">${v.money?`${counts[0]} customer coins − ${v.a?2:0} for ads = ${counts[0]-(v.a?2:0)} left`:'Same product. Ten customers.'}</p>${v.animate?'<button class="mini-replay" data-mini-replay>Replay the movement</button>':''}</div>`;
}
function miniPlace(board,a,b,moving){
 const counts=miniCounts(a,b);board.querySelector('.mini-customer-field').setAttribute('aria-label',`${counts[0]} customers with you; ${counts[1]} with rival`);
 board.querySelectorAll('[data-person]').forEach((p,i)=>{const old=p.getBoundingClientRect();const side=i<counts[0]?0:1,j=side?i-counts[0]:i;p.style.left=`calc(${side*50+5+(j%5)*8}% - 5px)`;p.style.top=(Math.floor(j/5)*31+10)+'px';p.classList.toggle('rival',!!side);if(moving){const now=p.getBoundingClientRect();p.animate([{transform:`translate(${old.x-now.x}px,${old.y-now.y}px)`},{transform:'none'}],{duration:750,easing:'ease-in-out'});}});
 counts.forEach((n,i)=>board.querySelector(`[data-count="${i}"]`).textContent=n+' customers');
}
function miniAnimate(token){
 const n=STORIES[0].nodes[run().node],v=n.visual,board=document.querySelector('.mini-board');if(!board)return;
 miniPlace(board,v.a,v.b,false);
 if(!v.animate||!state.motion||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const from=v.animate==='both'?[false,true]:[true,true];
 miniPlace(board,...from,false);
 const status=board.querySelector('.mini-status'),till=board.querySelector('[data-till="0"]');
 const prompt=document.querySelector('.guide-bubble h1');
 const say=text=>{if(prompt)prompt.textContent=text};
 const active=()=>token===sceneToken&&board.isConnected;
 const later=(fn,ms)=>setTimeout(()=>{if(active())fn()},ms);
 const setAds=(a,b)=>[a,b].forEach((on,i)=>{const el=board.querySelector(`[data-ad="${i}"]`);el.classList.toggle('off',!on);el.textContent=on?'ADS ON':'ADS OFF'});
 const coin=(source,target,delay=0)=>{const origin=board.getBoundingClientRect(),s=source.getBoundingClientRect(),t=target.getBoundingClientRect(),el=document.createElement('i');el.className='mini-flying-coin';el.style.left=(s.x+s.width/2-origin.x)+'px';el.style.top=(s.y+s.height/2-origin.y)+'px';board.append(el);const anim=el.animate([{transform:'translate(-50%,-50%)',opacity:0},{transform:'translate(-50%,-50%)',opacity:1,offset:.1},{transform:`translate(${t.x+t.width/2-s.x-s.width/2}px,${t.y+t.height/2-s.y-s.height/2}px)`,opacity:1}],{duration:650,delay,fill:'both',easing:'ease-in-out'});anim.onfinish=()=>el.remove();};
 say(v.animate==='baseline'?'Watch your five customers pay.':v.animate==='solo'?'You stopped paying for your ad.':'Your rival’s ad stops too. Yours stays off.');
 setAds(...from);till.innerHTML='You keep <strong>…</strong>';status.textContent=v.animate==='baseline'?'Watch your customers pay.':'Watch which ad changes.';
 later(()=>{setAds(v.a,v.b);if(v.animate==='solo')status.textContent='Your ad switches off. No ad bill.';if(v.animate==='both')status.textContent='Your rival’s ad switches off. Yours stays off.';},200);
 later(()=>{miniPlace(board,v.a,v.b,true);if(v.animate==='solo')say('But three customers go to your rival.');if(v.animate==='both')say('Your rival’s ad is off too. Three customers come back.');status.textContent=v.animate==='solo'?'Three customers move to your rival.':v.animate==='both'?'Three customers come back to you.':'Five customers buy from you.';},850);
 later(()=>{const counts=miniCounts(v.a,v.b);board.querySelectorAll('[data-person]').forEach((p,i)=>coin(p,board.querySelector(`[data-till="${i<counts[0]?0:1}"]`),(i%5)*80));status.textContent='Each customer brings one coin.';},1800);
 later(()=>{const count=miniCounts(v.a,v.b)[0];till.innerHTML=`${count} coins received`;if(v.a){coin(till,board.querySelector('[data-ad="0"]'));coin(till,board.querySelector('[data-ad="0"]'),160);status.textContent='Two coins pay for your ad.';}else status.textContent='Your ad is off. No ad bill.';},2900);
 later(()=>{const count=miniCounts(v.a,v.b)[0],left=count-(v.a?2:0);till.innerHTML=`You keep <strong>${left}</strong>`;say(n.line);status.textContent=`${count} customer coins − ${v.a?2:0} for ads = ${left} left`;},3900);
}
document.addEventListener('click',e=>{if(e.target.closest('[data-mini-replay]'))miniAnimate(++sceneToken);});
