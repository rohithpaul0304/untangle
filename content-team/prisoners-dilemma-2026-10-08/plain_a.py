import json,re,pathlib,subprocess
base=pathlib.Path('/tmp/untangle-pd-20261008/candidates/a'); p=base/'deck.html'; h=p.read_text(); d=json.loads(re.search(r'<script id="deck" type="application/json">(.*?)</script>',h,re.S)[1]); s=d['scenes']
s['s01']['line']='You and Ravi robbed a jewellery store. Now you’re caught, in separate rooms. Get the fewest prison years for yourself. You can change your statement—but you cannot talk to Ravi.'
s['s01']['visual']={'type':'cards','items':[{'title':'A fictional game','lines':['The police offer you both the same deal. Neither sees the other’s final statement.']} ]}
s['s01']['choices'][0]['label']='Hear the deal'
s['s02']['line']='The police say: “Confess and name Ravi, or stay silent.” Imagine Ravi stays silent. Which statement do you give?'
s['s02']['visual']['caption']='Confess: accept the deal and name Ravi. Stay silent: refuse the deal. Zero means no prison years.'
s['s03']['choices'][0]['label']='Imagine Ravi confesses'
s['s04']['line']='Imagine you both confess: 3 years each. Ravi keeps his statement. If only you switch to silence, what happens to your years?'
s['s04']['visual']['caption']=s['s04']['visual']['caption'].replace(' Prediction is unscored.','')
s['s05']['choices'][0]['label']='Change the statements'
s['s06']['line']='Back to both confessing: 3 years each. Let’s compare changing your statement, Ravi’s, or both. Whose statement changes?'
s['s08']['line']='Ravi has the same reason to confess. If you’re silent, he gets zero. If you confess, confessing costs him fewer years. Look at both rooms.'
s['s09']['visual']['caption']='One year each beats three each. But either of you could get zero if the other stays silent.'
s['s10']['line']='Now you run a café near another owner’s café. Earn the most profit today—money left after costs. The other café runs a discount. What will yours do?'
s['s10']['visual']['caption']='A fictional one-day café game. Each owner chooses without seeing the other’s final choice. No future effects or extra costs.'
s['s12']['line']='Imagine both cafés discount: ₹3,000 each. You want the ₹5,000 each from usual prices. Change yours alone—or both?'
s['s12']['visual']['caption']=s['s12']['visual']['caption'].replace('Controls below are comparison controls. ','')
s['s14']['line']='Now each café running a discount pays an extra ₹2,000 campaign cost. Usual prices pay none. Everything else stays the same. The other café still discounts. What do you do?'
s['s14']['visual']['caption']='Final profits after the new campaign cost.'
s['s15']['line']={'newAction=discount':'You discounted again. After the campaign cost, your ₹3,000 becomes ₹1,000. Usual prices would earn ₹2,000. Why did the better choice change?','default':'You kept usual prices and earned ₹2,000. A discount would earn you ₹1,000 after its cost. Why did the better choice change?'}
s['s16']['line']={'reason=cost':'You chose the campaign cost. The new ₹2,000 cost outweighed the old ₹1,000 gain. Now imagine the other café keeps usual prices. What do you do?','default':'You chose the other price—but it stayed at discount. The new cost made your discount earn ₹1,000 versus ₹2,000 at usual prices. Now imagine the other café keeps usual prices. What do you do?'}
s['s18']['visual']['caption']='Next: notice one “everyone should stop” proposal. What happens to the first person who stops?'
# Wording only: preserve scene graph, state assignments and all payoff numbers.
for sc in s.values():
 if 'note' not in sc: continue
# Move methodology outside learner dialogue.
s['s01']['note']='Opening choice and solo-switch prediction are unscored. The assigned goal is fewest own years, not a moral judgment. No communication or enforceable agreement. All replays are comparisons of one decision, not later encounters. Viewing or changing Ravi’s room is a teaching control only.'
s['s09']['note']='The model does not predict inevitable human behaviour; loyalty and fairness are not wrong values.'
s['s10']['note']='Fictional café model; not real business evidence or a recommendation to coordinate prices. Shared profits do not establish customer or societal welfare.'
p.write_text(re.sub(r'(<script id="deck" type="application/json">).*?(</script>)',lambda m:m[1]+json.dumps(d,ensure_ascii=False,indent=2)+m[2],h,flags=re.S))
l=(base/'learner-only.md').read_text()
l=l.replace('You and Ravi robbed a jewellery store and were caught. You are held separately. Seek the fewest prison years for yourself. You control only your statement. Neither sees the other’s final statement; there is no communication or enforceable agreement.','A fictional game. You and Ravi robbed a jewellery store. Now you’re caught, in separate rooms. Get the fewest prison years for yourself. You can change your statement, but you cannot talk to Ravi. Neither sees the other’s final statement.')
l=l.replace('Confess accepts this invented deal and names your accomplice. Silence refuses. Zero means no prison years under this deal.','The police offer you both the same deal. Confess and name Ravi, or stay silent and refuse the deal. Zero means no prison years.')
l=l.replace(' Unscored.','').replace(' These are teaching controls, not extra power for your character.','').replace('Ravi fixed at silent.','Imagine Ravi stays silent.').replace('What-if: both confess, 3 years each.','Imagine both confess: 3 years each.').replace('Reset both statements to confess. Change:','Back to both confessing. Whose statement changes?').replace('Other café fixed at discount.','The other café runs a discount.').replace('Separate what-if:','Now').replace('Which reason explains the changed choice?','Why did the better choice change?').replace('other café fixed at usual prices.','the other café keeps usual prices.')
(base/'learner-only.md').write_text(l)
report=subprocess.check_output(['python3','/Users/rohithpaull/build-sprint-app/content-team/deck/check-deck.py',str(p),'--export'],text=True)
report,export=report.split('\n---\n\n',1)
old=(base/'script.md').read_text(); notes=old.split('## Structural checker')[0]
notes=notes.replace('**Limits:**','**Copy revision:** Opening uses a fictional-game label and direct police deal. Methodology caveats moved to author notes. Scene graph, payoff numbers and variable assignments unchanged; original artifacts preserved in `first-pass/`.\n\n**Limits:**')
(base/'script.md').write_text(notes+'## Structural checker\n\n```\n'+report+'\n```\n\n---\n\n## Exact exported script\n\n'+export)
print(report)
