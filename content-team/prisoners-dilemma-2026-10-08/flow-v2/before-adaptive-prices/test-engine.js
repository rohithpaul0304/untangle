const assert=require('node:assert/strict'),E=require('./engine');const U='usual',D='discount',play=a=>a.reduce((r,x)=>E.step(r,x),E.fresh());let max=0,winners=[];
for(let n=0;n<1024;n++){const a=Array.from({length:10},(_,i)=>n&(1<<i)?D:U),r=play(a);assert(E.validate(r));assert.equal(r.hers[0],U);for(let i=1;i<10;i++)assert.equal(r.hers[i],a[i-1]);let sums=[0,0];a.forEach((x,i)=>{const d=E.detail(x,r.hers[i]);assert.equal(d.cups[0]+d.cups[1],200);d.retained.forEach((v,j)=>{assert.equal(v,d.cups[j]*(d.prices[j]-50));sums[j]+=v})});assert.deepEqual(sums,r.totals);if(r.totals[0]>max){max=r.totals[0];winners=[a]}else if(r.totals[0]===max)winners.push(a);assert.throws(()=>E.step(r,U));assert(!E.line(r).includes('tomorrow'));}
assert.equal(max,51000);assert.deepEqual(winners,[[...Array(9).fill(U),D]]);
for(const [a,t] of [[Array(10).fill(U),[50000,50000]],[Array(10).fill(D),[42000,38500]],[[D,...Array(9).fill(U)],[48500,48500]],[Array.from({length:10},(_,i)=>i%2?U:D),[42500,42500]],[Array.from({length:10},(_,i)=>i%2?D:U),[45000,41500]],[[...Array(9).fill(U),D],[51000,47500]]])assert.deepEqual(play(a).totals,t);
const base={version:3,scene:3,beat:0,dealBeat:0,reasoningBeat:0,cafeBeat:0,phase:'choose',prison:null,run:E.fresh(),first:null};
for(let dealBeat=0;dealBeat<6;dealBeat++)assert.equal(E.restore(JSON.stringify({...base,dealBeat})).dealBeat,dealBeat);
for(const prison of ['talk','silent'])for(const scene of [5,6])for(let reasoningBeat=0;reasoningBeat<(scene===5?3:2);reasoningBeat++)assert(E.restore(JSON.stringify({...base,prison,scene,reasoningBeat})));
for(const phase of ['cups','margin','money'])assert(E.restore(JSON.stringify({...base,scene:8,prison:'talk',phase,run:play([D])})));
for(const [phase,actions] of [['total',[D,U]],['result',[D,D]],['choose',[D]]])assert(E.restore(JSON.stringify({...base,scene:8,prison:'talk',phase,run:play(actions)})));
assert.equal(E.restore(JSON.stringify({...base,scene:8,prison:'talk',phase:'money'})),null);
assert.equal(E.restore(JSON.stringify({...base,cafeBeat:9})),null);assert.equal(E.restore('{}'),null);
const old={...base,version:2,scene:5,prison:'talk',reasoningBeat:1};assert.equal(E.restore(JSON.stringify(old)).scene,5);assert.equal(E.restore(JSON.stringify(old)).reasoningBeat,1);
const oldCafe={...old,scene:8,run:{yours:[D],hers:[U],totals:[6000,2000]}};const migrated=E.restore(JSON.stringify(oldCafe));assert.equal(migrated.scene,7);assert.equal(migrated.migrationNotice,true);assert.deepEqual(migrated.run,E.fresh());
assert.throws(()=>E.step(E.fresh(),U,2));console.log('PASS all 1,024 paths, cup economics, six benchmarks, unique maximum, prison saves, café phases and old-economics migration.');
