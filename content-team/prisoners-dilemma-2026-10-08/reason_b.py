from pathlib import Path
import json,re,shutil,subprocess
b=Path('/tmp/untangle-pd-20261008/candidates/b');a=b/'before-reason-repair';a.mkdir(exist_ok=True)
for n in ['deck.html','script.md','learner-only.md']:
 if not (a/n).exists():shutil.copy2(b/n,a/n)
p=r'(<script id="deck" type="application/json">)(.*?)(</script>)';h=(b/'deck.html').read_text();d=json.loads(re.search(p,h,re.S)[2]);s=d['scenes']
s['reason']={'line':'What changed your decision?','mood':'thinking','visual':{'type':'text','text':'Optional. Your note is saved as written; it isn’t checked.'},'input':{'placeholder':'Write a thought, or leave blank.','button':'See the comparison','next':'finish','save':'cost_reflection'},'choices':[],'note':'Optional ungraded reflection. Blank input is accepted. No automated interpretation, correctness judgment, independent learning evidence or claim of understanding.'}
del s['finish_cost'];del s['finish_both']
s['finish']={'line':{'new_action=usual':'You kept usual prices: ₹2,000. With the other still discounting, your discount would earn ₹1,000. Avoiding the added cost changed your better action.','default':'You ran a discount: ₹1,000. With the other still discounting, usual prices earn ₹2,000. The added cost makes your old action cost you ₹1,000.'},'mood':'thinking','visual':{'type':'cards','items':[{'title':'Only the cost changed','lines':['Each discount now costs ₹2,000 extra.','Other discounts: usual ₹2,000 > discount ₹1,000.','Other stays usual: usual ₹5,000 > discount ₹4,000.']},{'title':'Now check both owners','lines':['The other owner faces the same comparisons.','Both usual → ₹5,000 each.','Discount used to win alone; usual prices now win alone and together.']},{'title':'Before “everyone should stop”','lines':['Check what one person gets for stopping alone—and what makes continuing attractive.']}],'caption':'New campaign-cost case · Your profit after the extra cost.'},'choices':[],'end':True,'note':'Worked causal comparison uses saved new_action, not the reflection text. The conflict is gone under changed incentives. No comprehension or transfer inference from free text. Founder selection pending; no human testing.'}
h=re.sub(p,lambda m:m[1]+'\n'+json.dumps(d,ensure_ascii=False,indent=2)+'\n'+m[3],h,flags=re.S);(b/'deck.html').write_text(h)
r=subprocess.run(['python3','/Users/rohithpaull/build-sprint-app/content-team/deck/check-deck.py',str(b/'deck.html'),'--export'],capture_output=True,text=True)
header=(b/'script.md').read_text().split('## Exact deck export')[0]
header=header.replace('changed-cost action, and one reason check.','changed-cost action, and an optional ungraded reflection.').replace('The changed-cost unsuccessful path receives a worked example and a stopping point.','Both changed-cost actions receive a worked causal comparison and a stopping point.')
header+='Reason repair: removed the recognition-based reason question and both reason-specific endings. Optional free text is saved without interpretation, followed by one worked comparison keyed only to the actual café action. The action remains the changed-condition decision. No independent evidence is claimed for the reflection. Previous version saved in before-reason-repair/.\n\n'
(b/'script.md').write_text(header+'## Exact deck export\n\n'+r.stdout)
l=(b/'learner-only.md').read_text().replace('Explain the effect of the added cost while holding the other café fixed.','Then an optional note: **What changed your decision?** Write a thought or leave blank. Your note is saved as written; it isn’t checked.')
(b/'learner-only.md').write_text(l)
print(r.stdout.split('---')[0]);assert r.returncode==0
assert re.sub(p,'DECK',(a/'deck.html').read_text(),flags=re.S)==re.sub(p,'DECK',h,flags=re.S)
assert s['cost']['choices'][0]['set']['new_action']=='usual'
assert s['cost']['choices'][1]['set']['new_action']=='discount'
assert s['reason']['input']['next']=='finish'
assert 'cost_reflection' not in json.dumps(s['finish'])
assert len([v for v in s.values() if v.get('end')])==1
print('PASS: main cost decision retained; one optional reflection and one action-keyed ending; reflection never interpreted; runtime/fox unchanged.')
