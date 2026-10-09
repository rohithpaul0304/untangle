from pathlib import Path
import json,re,shutil,subprocess
base=Path('/tmp/untangle-pd-20261008/candidates/b')
backup=base/'first-pass';backup.mkdir(exist_ok=True)
for name in ['deck.html','script.md','learner-only.md']:
 if not (backup/name).exists():shutil.copy2(base/name,backup/name)
p=r'(<script id="deck" type="application/json">)(.*?)(</script>)'
h=(base/'deck.html').read_text();d=json.loads(re.search(p,h,re.S)[2]);s=d['scenes']
s['caught']['line']='You and Ravi robbed a jewellery store. Now you’re caught, in separate rooms. You want the fewest prison years. You choose only your statement.'
s['caught']['visual']={'type':'cards','items':[{'title':'Fictional game','lines':['You cannot talk to Ravi or make a deal with him.','Neither of you can see the other’s statement before choosing.','Ravi wants the fewest years for himself, too.']}]}
s['caught']['note']='One fictional simultaneous decision. No communication or enforceable agreement; later changes are teaching hypotheticals, not repeated encounters. Fewest own years is an assigned objective, not a moral judgment.'
s['deal']['line']='Confess and name Ravi, or stay silent and refuse the deal. Imagine Ravi stays silent. What do you say?'
s['deal']['visual']={'type':'cards','items':[{'title':'Your years / Ravi’s years','lines':['Both silent → 1 / 1','You confess, Ravi silent → 0 / 5','You silent, Ravi confesses → 5 / 0','Both confess → 3 / 3','0 means no prison years.']}]}
s['both']['line']='Imagine you both confess: three years each. If only you become silent, do your years fall, stay, or rise?'
s['cafe']['line']='You run a café near another owner’s café. You want the most profit today. Imagine you both discount. Change only your action.'
s['cafe']['visual']['caption']=s['cafe']['visual']['caption'].replace('FICTIONAL ONE-DAY BASELINE · Profit is money after all listed costs. Independent choices; neither sees the other’s final choice. No future effects or other costs.','TODAY · Profit is money left after costs. You choose separately, without seeing the other’s choice. Only today counts; all costs are included.')
s['cost']['line']='Imagine every discount costs an extra ₹2,000 today. Usual prices cost nothing extra. The other café keeps discounting. What do you do?'
s['mirror']['visual']['caption']=s['mirror']['visual']['caption'].replace('Teaching comparison, not contact with Ravi.','Imagine Ravi choosing.')
for scene in s.values():
 v=scene.get('visual',{})
 for item in v.get('items',[]):
  if item.get('label')=='Your prison years':item['label']='Your years'
  if item.get('label')=='Ravi’s prison years':item['label']='Ravi’s years'
 if 'caption' in v:
  v['caption']=v['caption'].replace('WHAT-IF RESET ·','IMAGINE ·').replace('WHAT-IF ·','IMAGINE ·').replace('BASELINE WHAT-IF ·','BASELINE ·').replace('Ravi fixed silent','Ravi stays silent').replace('Ravi fixed confessing','Ravi keeps confessing').replace('Ravi will remain fixed confessing.','Ravi keeps confessing.').replace('You/Ravi:','Your years / Ravi’s years:').replace('other fixed discount','other keeps discounting')
s['solo']['note']+=' The expectation is unscored; that authoring fact is not spoken to the learner.'
s['cost']['note']+=' A separate authored hypothetical, not a surprise deduction or real business claim.'
h=re.sub(p,lambda m:m[1]+'\n'+json.dumps(d,ensure_ascii=False,indent=2)+'\n'+m[3],h,flags=re.S);(base/'deck.html').write_text(h)
old=(base/'script.md').read_text().split('## Exact deck export')[0]
old=old.replace('explicitly teaching controls','clearly labelled imagined changes')
old+='Revision: learner wording uses story language; assessment status and model caveats live in author notes. First version retained in first-pass/. Rules, numbers, branches, and runtime are unchanged.\n\n'
res=subprocess.run(['python3','/Users/rohithpaull/build-sprint-app/content-team/deck/check-deck.py',str(base/'deck.html'),'--export'],capture_output=True,text=True)
(base/'script.md').write_text(old+'## Exact deck export\n\n'+res.stdout)
learner=(backup/'learner-only.md').read_text()
learner=learner.replace('Your goal here: fewer prison years. You control your statement. Neither sees the other’s final statement. No contact or enforceable agreement. One fictional decision; switches are labelled what-ifs.','You want the fewest prison years. You choose only your statement. You cannot talk to Ravi or make a deal with him. Neither of you can see the other’s statement before choosing. Ravi wants the fewest years for himself, too.')
learner=learner.replace('Confess means accepting the invented deal and naming Ravi.','Fictional game. Confess means accepting the deal and naming Ravi.').replace(' This assigned goal is not a judgment of anyone’s values.','')
learner=learner.replace('First what-if: Ravi stays silent.','Imagine Ravi stays silent.').replace(' Your selection is unscored.','').replace('Separate what-if: both confess.','Imagine you both confess.').replace(' Unscored.','')
learner=learner.replace('From both confessing, controls available for comparison:','Imagine starting from both confessing:').replace(' These are teaching comparisons, not new control over Ravi in the story.','')
learner=learner.replace('Goal: greatest own daily profit—money left after listed costs. Fictional one-day model. Independent choices, neither sees the other’s final choice, no future effects or other costs.','You want the most profit today—money left after costs. You choose separately, without seeing the other’s choice. Only today counts; all costs are included.')
learner=learner.replace('Start with both discounting. Other café stays fixed discounting.','Imagine you both discount. The other café keeps discounting.').replace('## Separate cost what-if','## Imagine one new cost').replace('Other café fixed discounting.','The other café keeps discounting.')
(base/'learner-only.md').write_text(learner)
print(res.stdout.split('---')[0]);print('exit',res.returncode)
