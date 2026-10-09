import json,re,subprocess
from pathlib import Path
out=Path('/tmp/untangle-pd-20261008/candidates/c');p=out/'deck.html';h=p.read_text();m=re.search(r'(<script id="deck" type="application/json">)(.*?)(</script>)',h,re.S);d=json.loads(m[2]);s=d['scenes']
s['s01']['line']='You and your accomplice Ravi robbed a jewellery store. You’re caught, in separate rooms. Get the fewest prison years for yourself. You control only your statement.'
s['s01']['visual']['items'][0]={'title':'Fictional game','lines':['You cannot talk to Ravi. Neither of you sees the other’s final statement before choosing. You have no way to make Ravi keep a promise.']}
s['s02']['line']='Here’s the whole deal. Ravi also wants the fewest years for himself. What statement do you make?'
for k in ['s02','s04','s05']:s[k]['visual']['caption']='Your goal: the fewest prison years for yourself. Zero = no prison years.'
s['s03']['choices'][0]['label']='Imagine both confess'
s['s04']['line']='Imagine you both confess: 3 years each. Ravi keeps confessing. If only you become silent, what happens to your years?'
s['s05']['line']='Teach me your fix for 3 years each. Imagine changing these statements: which change gets both of you to 1 year? I’ll try your fix.'
s['s07']['visual']['items'][1]['title']='Ravi keeps his statement'
s['s07']['visual']['items'][2]['title']='Why confessing helps you'
s['s08']['line']='Imagine you’re in Ravi’s room. He faces the same pressure. Your statement stays put while he weighs his two choices.'
s['s08']['visual']['items'][0]['title']='Your statement stays put'
s['s10']['line']='Now you run a café. Make the most profit today—money left after costs. A nearby café owner chooses separately. Neither sees the other’s choice. Your move?'
for k in ['s10','s12']:s[k]['visual']['caption']='Today only. These profits already include every cost.'
s['s11']['visual']['items'][0]['title']='Your profit if the other café stays put'
s['s12']['line']='Imagine both cafés discount and earn ₹3,000 each. Give me a price change that gets both to ₹5,000. I’ll try your fix.'
s['s14']['line']='Now imagine each café running a discount pays ₹2,000 extra that day. Usual prices pay none. Everything else stays the same. Your move?'
s['s16']['visual']['items'][1]['lines']=['Each now prefers usual prices whether the other discounts or not. Both keeping usual prices earns ₹5,000 each. Helping yourself now reaches the better shared result.']
s['s17']['line']='Keep the ₹2,000 campaign cost. Imagine the other café discounts today and won’t change. I’ll run your café: what do you tell me to do?'
for v in s['s18']['visual'].values():v['items'][1]['lines']=['₹5,000 each. Each also prefers usual prices alone, whether the other discounts or not.']
p.write_text(h[:m.start(2)]+json.dumps(d,ensure_ascii=False,indent=2)+h[m.end(2):])
lines=['# Teach the fox a fix — learner-only','Status: Draft','','This packet contains setup, visible rules and choices only.']
for key in ['s01','s02','s04','s05','s10','s12','s14','s17']:
 sc=s[key];lines+=['',f'## {key}',sc['line']];v=sc.get('visual',{})
 for item in v.get('items',[]):lines+=['',item['title'],*item['lines']]
 if v.get('caption'):lines+=[v['caption']]
 if key!='s01':lines+=['',*[f'- {x["label"]}' for x in sc.get('choices',[])]]
lines+=['','## Explanation choice','With the new campaign cost, what changed the best move?','- The cost changed discount profits','- The cost changed the other’s choice']
(out/'learner-only.md').write_text('\n'.join(lines)+'\n')
old=(out/'script.md').read_text().split('\n---\n')[0]
old=old.replace('Browser rendering and all runtime branches await root review','Root reviewed the first opening; revised wording and remaining runtime branches await informed root review')
export=subprocess.check_output(['python3','/Users/rohithpaull/build-sprint-app/content-team/deck/check-deck.py',str(p),'--export'],text=True)
(out/'script.md').write_text(old+'\n\nRevision: saved all three first-pass artifacts under first-pass/. Replaced learner-facing author-method language with story instructions. Numeric rules, branch conditions, choices, outcomes and pacing are unchanged.\n\n---\n\n'+export)
