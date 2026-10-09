from pathlib import Path
import json,re,shutil,subprocess
b=Path('/tmp/untangle-pd-20261008/candidates/b');a=b/'before-counter-repair';a.mkdir(exist_ok=True)
for n in ['deck.html','script.md','learner-only.md']:
 if not (a/n).exists():shutil.copy2(b/n,a/n)
p=r'(<script id="deck" type="application/json">)(.*?)(</script>)';h=(b/'deck.html').read_text();d=json.loads(re.search(p,h,re.S)[2])
for k in ['ravi_only','ravi_second','joint','joint_second']:
 s=d['scenes'][k];cap=s['visual']['caption'];joint=k.startswith('joint')
 s['visual']={'type':'cards','items':[{'title':'Before · both confess','lines':['Your years: 3 · Ravi’s years: 3']},{'title':'After · both stay silent' if joint else 'After · only Ravi stays silent','lines':['Your years: 1 · Ravi’s years: 1' if joint else 'Your years: 0 · Ravi’s years: 5']}],'caption':cap}
 s['note']='Static before-and-after comparison restarts at 3/3. No counter tween from the previous imagined outcome.'
for s in d['scenes'].values():
 for c in s['choices']:
  c['label']=c['label'].replace('From 3/3: silence only Ravi','Imagine only Ravi stays silent').replace('From 3/3: silence both','Imagine both stay silent')
# New-cost baseline is a different imagined starting condition, not a continuous move
# from whichever baseline cafe outcome the learner inspected last.
for k in ['cost','new_usual','new_discount']:
 for it in d['scenes'][k]['visual']['items']:
  it['label']=it['label'].replace('profit (₹)','profit after cost (₹)')
d['scenes']['cost']['note']+=' New-cost counters use distinct labels so the engine starts at the disclosed ₹1,000/₹1,000 baseline, not the prior baseline café result.'
h=re.sub(p,lambda m:m[1]+'\n'+json.dumps(d,ensure_ascii=False,indent=2)+'\n'+m[3],h,flags=re.S);(b/'deck.html').write_text(h)
res=subprocess.run(['python3','/Users/rohithpaull/build-sprint-app/content-team/deck/check-deck.py',str(b/'deck.html'),'--export'],capture_output=True,text=True)
header=(b/'script.md').read_text().split('## Exact deck export')[0]
header+='Counter repair: resetting prison comparisons show static cards labelled Before (both confess, 3/3) and After. The new-cost café starts a distinct counter series at ₹1,000 each. Previous wording version saved in before-counter-repair/.\n\n'
(b/'script.md').write_text(header+'## Exact deck export\n\n'+res.stdout)
learner=(b/'learner-only.md').read_text().replace('**Silence only Ravi** / **Silence both**','**Imagine only Ravi stays silent** / **Imagine both stay silent**')
(b/'learner-only.md').write_text(learner)
print(res.stdout.split('---')[0]);assert res.returncode==0
old=(a/'deck.html').read_text();assert re.sub(p,'DECK',old,flags=re.S)==re.sub(p,'DECK',h,flags=re.S)
for k in ['ravi_only','ravi_second','joint','joint_second']:
 assert d['scenes'][k]['visual']['type']=='cards'
 assert d['scenes'][k]['visual']['items'][0]['lines']==['Your years: 3 · Ravi’s years: 3']
print('PASS: four reset scenes cannot animate stale counters; runtime and fox untouched.')
