from pathlib import Path
import re,json,subprocess
out=Path('/tmp/untangle-pd-20261008/candidates/c');p=out/'deck.html';h=p.read_text();m=re.search(r'(<script id="deck" type="application/json">)(.*?)(</script>)',h,re.S);d=json.loads(m[2]);s=d['scenes']
for c in s['s04']['choices']:c['next']='s04_result'
result={'mood':'thinking','line':'You expected your years to {{expect}}. Ravi keeps confessing. Change only your statement to silence: your sentence rises from 3 years to 5. His falls to 0.','consequence':True,'visual':{'type':'counters','items':[{'label':'Your years','value':5,'from':3},{'label':'Ravi’s years','value':0,'from':3}],'caption':'Both confess: 3 / 3 → only you silent: 5 / 0. Ravi’s statement has not changed.'},'choices':[{'label':'Try a fix','next':'s05'}],'note':'Immediate unscored prediction feedback, before any further decision. Explicitly retains Ravi confessing and changes only the learner’s statement.'}
ordered={}
for k,v in s.items():
 ordered[k]=v
 if k=='s04':ordered['s04_result']=result
s=ordered;d['scenes']=s
s['s05']['line']='Back to 3 years each. You want 1 year, and so does Ravi. Teach me your fix: which statements should I change to silence?'
s['s07']['line']='Start again from two confessions: 3 years each. Here are the three changes side by side. Then keep Ravi’s statement still and compare your choices.'
s['s12']['line']='Imagine your café and the nearby café earn ₹3,000 apiece from discounts. You want ₹5,000 each. Teach me your fix: whose prices should I change?'
s['s16'].pop('choices',None);s['s16']['end']=True
s['s16']['visual']['items'].append({'title':'Take it with you','lines':['Before “everyone should stop,” ask: what happens to someone who stops alone—and what makes continuing attractive?']})
s['s16']['note']='End after worked cost feedback. No retry, repeated final quiz or claimed learning evidence. Next proposed activity is a delayed check in a new situation, not part of this archived draft.'
s.pop('s17');s.pop('s18')
p.write_text(h[:m.start(2)]+json.dumps(d,ensure_ascii=False,indent=2)+h[m.end(2):])
lines=['# Teach the fox a fix — learner-only','Status: Draft','','Setup, visible rules and choices only.']
for key in ['s01','s02','s04','s05','s10','s12','s14']:
 sc=s[key];lines+=['',f'## {key}',sc['line']];v=sc.get('visual',{})
 for item in v.get('items',[]):lines+=['',item['title'],*item['lines']]
 if v.get('caption'):lines+=[v['caption']]
 if key!='s01':lines+=['',*[f'- {x["label"]}' for x in sc.get('choices',[])]]
lines+=['','## Explanation choice','With the new campaign cost, what changed the best move?','- The cost changed discount profits','- The cost changed the other’s choice']
(out/'learner-only.md').write_text('\n'.join(lines)+'\n')
export=subprocess.check_output(['python3','/Users/rohithpaull/build-sprint-app/content-team/deck/check-deck.py',str(p),'--export'],text=True)
preface='''# Candidate C — Teach the fox a fix

Status: Draft

Set aside for archive. Lens: Teach it back. Reference beat: Betty’s Brain-style explaining to a guide who tests precisely the learner’s claim. Bounded instructions change one or both actions against disclosed rules; there is no free-text grading or inferred motive. No other candidates were inspected.

17 beats, 16 forward taps, seven multi-option decisions. The first personal statement and expectation are unscored. First consequence arrives at tap 2 on every route. The prediction now receives immediate feedback before the fix decision. The comparison later explicitly restores two confessions before comparing changes. Prison and café fix prompts state the concrete sentence/profit goal without repeating the “both” option label. The repeated final cost question has been removed: the draft stops after worked reason feedback, with no claim of learning evidence.

All first-pass files are preserved under first-pass/. The version before this logic repair is preserved under pre-repair/. Structural checker passes; runtime and fox are unchanged. Final repaired wording has not been browser-checked here. No human testing, enjoyment, comprehension, retention or transfer evidence exists. The numerical tables remain those supplied in the common packet. Boredom risk remains: four-row rule cards and fixed-case comparisons can feel like a worksheet. This bounded repair removes known confusion; it is not a recommendation to develop this candidate further.

---

'''
(out/'script.md').write_text(preface+export)
