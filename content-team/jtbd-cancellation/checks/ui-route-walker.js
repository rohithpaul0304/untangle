return (async () => {
const pause = () => new Promise(r=>setTimeout(r,0));
const buttons = () => [...document.querySelectorAll('#actions button.choice')].filter(b=>! /^(Start over|Play again|Try another recommendation|Copy session log|Copied)$/.test(b.textContent.trim()));
const queue=[[]], scheduled=new Set(['[]']), routes=[], issues=[], screens={};
const capture=()=>{const b=document.getElementById('bubble').innerText; const v=document.getElementById('visual').innerText;const acts=buttons();const key=b+'|'+v+'|'+acts.map(x=>x.innerText).join('|');screens[key]={line:b,visual:v,choices:acts.map(x=>x.innerText)};if(document.documentElement.scrollWidth>innerWidth+1)issues.push({type:'horizontal overflow',line:b});if(/Missing scene:|undefined|NaN/.test(b+' '+v))issues.push({type:'bad render',line:b});for(const btn of acts){if(btn.getBoundingClientRect().height<44)issues.push({type:'small action',label:btn.innerText});}return screens[key];};
while(queue.length && routes.length<64){
 const prefix=queue.shift();document.getElementById('restart').click();await pause();let path=[],labels=[],ended=false;
 for(let depth=0;depth<40;depth++){
  const sc=capture();let acts=buttons();if(!acts.length){ended=true;break;}
  const ta=document.querySelector('#actions textarea');if(ta){ta.value='Browser route check — unscored reflection';ta.dispatchEvent(new Event('input',{bubbles:true}));}
  const index=depth<prefix.length?prefix[depth]:0;
  if(index>=acts.length){issues.push({type:'missing action',prefix,depth,index});break;}
  if(depth>=prefix.length){for(let j=1;j<acts.length;j++){const alt=[...path,j],key=JSON.stringify(alt);if(!scheduled.has(key)){scheduled.add(key);queue.push(alt);}}}
  const label=acts[index].textContent.trim();labels.push(label);path.push(index);acts[index].click();await pause();
  if(/^(Start over|Replay|Play again)$/i.test(label)){issues.push({type:'unexpected replay loop',label});break;}
 }
 routes.push({path,labels,ended,final:document.getElementById('bubble').innerText});
}
if(queue.length)issues.push({type:'route limit exceeded',remaining:queue.length});
return {url:location.href,viewport:[innerWidth,innerHeight],routeCount:routes.length,allEnded:routes.every(r=>r.ended),screens:Object.values(screens),routes,issues};
})()