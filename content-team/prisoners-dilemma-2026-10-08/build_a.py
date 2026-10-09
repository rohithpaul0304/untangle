import json,re,pathlib
out=pathlib.Path('/tmp/untangle-pd-20261008/candidates/a')
S={}
def btn(label,next,**sets):
 d={'label':label,'next':next}
 if sets:d['set']=sets
 return d
def scene(id,line,visual=None,choices=None,**kw):
 S[id]={'line':line,'mood':'thinking',**kw}
 if visual:S[id]['visual']=visual
 if choices:S[id]['choices']=choices

def cards(items,caption=None):
 d={'type':'cards','items':[{'title':t,'lines':ls} for t,ls in items]}
 if caption:d['caption']=caption
 return d
def counter(a,b,caption,unit='years',old=None):
 names=('You · '+unit,'Ravi · '+unit) if unit=='years' else ('Your café · ₹ profit','Other café · ₹ profit')
 its=[{'label':names[0],'value':a},{'label':names[1],'value':b}]
 if old:
  for i,v in enumerate(old):its[i]['from']=v
 return {'type':'counters','items':its,'caption':caption}
prison='Deal · years (you / Ravi): silent/silent 1/1; confess/silent 0/5; silent/confess 5/0; confess/confess 3/3.'
base='Baseline · profit (you / other): usual/usual ₹5,000/₹5,000; discount/usual ₹6,000/₹2,000; usual/discount ₹2,000/₹6,000; discount/discount ₹3,000/₹3,000.'
cost='With campaign cost · final profit (you / other): usual/usual ₹5,000/₹5,000; discount/usual ₹4,000/₹2,000; usual/discount ₹2,000/₹4,000; discount/discount ₹1,000/₹1,000.'
scene('s01','You and your accomplice Ravi robbed a jewellery store. You’re caught, in separate rooms. Your goal in this story: the fewest prison years for you. You control only your statement.',cards([('One fictional decision',['Neither of you sees the other’s final statement. No communication or enforceable agreement.'])]),[btn('See the deal','s02')],mood='speaking')
scene('s02','Confess means accepting this invented deal and naming Ravi. Stay silent means refusing it. Zero means no prison years. For this first comparison, Ravi is fixed at silent. Choose your statement; this is unscored.',cards([('Ravi stays silent',['You stay silent → you 1 year; Ravi 1 year.','You confess → you 0 years; Ravi 5 years.']),('Ravi confesses',['You stay silent → you 5 years; Ravi 0 years.','You confess → you 3 years; Ravi 3 years.'])]),[btn('Stay silent','s03',first='silent'),btn('Confess','s03',first='confess')])
scene('s03',{'first=silent':'You stayed silent. With Ravi still silent, you each get 1 year. Changing only your statement to confess would give you 0 and Ravi 5.','default':'You confessed. With Ravi still silent, you get 0 years and Ravi gets 5. Staying silent instead would give you each 1.'},{'first=silent':counter(1,1,'Selected: both silent. Alternative: only you confess → 0/5. '+prison),'default':counter(0,5,'Selected: you confess; Ravi silent. Alternative: both silent → 1/1. '+prison)},[btn('Compare another fixed case','s04')],consequence=True)
scene('s04','What-if comparison, not a new encounter: both statements are now confess. You each have 3 years. Ravi will still confess. Predict what happens to your years if only you switch to silence.',counter(3,3,'Before: both confess. Prediction is unscored. '+prison),[btn('Fewer than 3','s05',prediction='fewer than 3'),btn('Still 3','s05',prediction='still 3'),btn('More than 3','s05',prediction='more than 3')])
scene('s05','You predicted {{prediction}}. Only your statement changed to silent: your 3 years became 5. Ravi’s became 0. Your silence cannot produce joint silence while Ravi still confesses.',counter(5,0,'Before 3/3 → only you become silent → after 5/0. '+prison,old=(3,3)),[btn('Compare whose statement changes','s06')],consequence=True,mood='surprised')
scene('s06','Reset the comparison to both confessing: 3 years each. Change the statements below. These teaching controls can change either room; your character could change only yours.',counter(3,3,'Starting point: both confess. '+prison,old=(3,3)),[btn('Only I stay silent','s07',switch='you'),btn('Only Ravi stays silent','s07',switch='ravi'),btn('We both stay silent','s07',switch='both')])
scene('s07',{'switch=you':'You changed only your statement. Your years rise to 5; Ravi’s fall to 0. Both changing would give 1 each—but your one move cannot change his statement.','switch=ravi':'You changed only Ravi’s statement in the comparison. His years rise to 5; yours fall to 0. Both changing would give 1 each.','default':'You changed both statements in the comparison. You each fall from 3 years to 1. Changing only one statement would leave the silent person with 5.'},{'switch=you':counter(5,0,'3/3 → only you silent → 5/0. Other changes: only Ravi silent → 0/5; both silent → 1/1. '+prison,old=(3,3)),'switch=ravi':counter(0,5,'3/3 → only Ravi silent → 0/5. Other changes: only you silent → 5/0; both silent → 1/1. '+prison,old=(3,3)),'default':counter(1,1,'3/3 → both silent → 1/1. Other changes: only you silent → 5/0; only Ravi silent → 0/5. '+prison,old=(3,3))},[btn('Look from Ravi’s room','s08')],consequence=True)
scene('s08','Ravi faces the same deal. Confessing rewards either person when the other is silent, and costs fewer years when the other confesses. That pressure exists on both sides.',cards([('Your incentive · fewer years',['Ravi silent: confess 0 vs silent 1.','Ravi confesses: confess 3 vs silent 5.']),('Ravi’s incentive · fewer years',['You silent: he confesses 0 vs silent 1.','You confess: he confesses 3 vs silent 5.'])]),[btn('Name what happened','s09')])
scene('s09','Both silence beats both confession for each of you. But each can get fewer years by confessing while the other stays fixed. That’s the conflict.',{'type':'concept','name':'Prisoner’s dilemma','definition':'Each person has an action that improves their own result whichever fixed action the other takes. Yet both taking it leaves each worse off than the other shared outcome. Here: 3 years each instead of 1.','caption':'One year each is better than three each; it is not each person’s best possible result—zero is lower. This assigned goal does not judge loyalty or predict what people will do.'},[btn('Try it in a café','s10')],mood='speaking')
scene('s10','New role: you run a café near another owner’s café. For this fictional day, seek the greatest own profit: money left after costs. Each chooses independently. No future effects or extra costs. The other café is fixed at discount today. Set yours.',cards([('Other keeps usual prices',['You usual → ₹5,000; other ₹5,000.','You discount → ₹6,000; other ₹2,000.']),('Other runs a discount',['You usual → ₹2,000; other ₹6,000.','You discount → ₹3,000; other ₹3,000.'])]),[btn('Run a discount','s11',cafe='discount'),btn('Keep usual prices','s11',cafe='usual')])
scene('s11',{'cafe=discount':'You ran a discount. With the other café still discounting, you each earn ₹3,000. Keeping your usual prices alone would give you ₹2,000.','default':'You kept usual prices. With the other café still discounting, you earn ₹2,000; it earns ₹6,000. Your discount would raise your profit to ₹3,000.'},{'cafe=discount':counter(3000,3000,'Baseline. '+base,unit='profit'),'default':counter(2000,6000,'Baseline. '+base,unit='profit')},[btn('Compare a shared change','s12')],consequence=True)
scene('s12','Start this baseline comparison at both discounting: ₹3,000 each. You want the ₹5,000 each from usual prices. Apply a change and see who must move.',counter(3000,3000,'Baseline: both discount. Controls below are comparison controls. '+base,unit='profit',old=(3000,3000)),[btn('Only I keep usual prices','s13',priceSwitch='solo'),btn('We both keep usual prices','s13',priceSwitch='both')])
scene('s13',{'priceSwitch=solo':'Only your price changed. Your profit fell from ₹3,000 to ₹2,000; the other café reached ₹6,000. Reaching ₹5,000 each needs both prices to change.','default':'Both prices changed. Both profits rose from ₹3,000 to ₹5,000. If only yours changed, you would earn ₹2,000 while the other earned ₹6,000.'},cards([('Selected comparison',['{{priceSwitch}} change from both discounting.']),('Same pressure for either owner',['Other usual: own discount ₹6,000 > own usual ₹5,000.','Other discount: own discount ₹3,000 > own usual ₹2,000.','Both usual gives ₹5,000 each; both discount gives ₹3,000 each.'])]),[btn('Add one new cost','s14')],consequence=True)
scene('s14','Separate what-if: each café running a discount now pays an extra ₹2,000 campaign cost that day. Usual prices pay none. Everything else stays the same. The other café still discounts. Choose using final profits.',cards([('Other keeps usual prices',['You usual → ₹5,000; other ₹5,000.','You discount → ₹4,000; other ₹2,000.']),('Other runs a discount',['You usual → ₹2,000; other ₹4,000.','You discount → ₹1,000; other ₹1,000.'])]),[btn('Run a discount','s15',newAction='discount'),btn('Keep usual prices','s15',newAction='usual')])
scene('s15',{'newAction=discount':'You ran a discount again. Your ₹3,000 before the campaign cost becomes ₹1,000. Keeping usual prices would earn ₹2,000. Which reason explains the changed choice?','default':'You kept usual prices. You earn ₹2,000; the other café earns ₹1,000 after its cost. Your discount would earn ₹1,000. Which reason explains the changed choice?'},{'newAction=discount':counter(1000,1000,'With campaign cost. '+cost,unit='profit'),'default':counter(2000,1000,'With campaign cost. '+cost,unit='profit')},[btn('The campaign cost changed','s16',reason='cost'),btn('The other price changed','s16',reason='price')],consequence=True)
scene('s16',{'reason=cost':'You chose the campaign cost. Yes: the other café still discounted. Your extra ₹2,000 cost outweighed the old ₹1,000 gain. Now check a different fixed case: the other café keeps usual prices. Set yours.','default':'You chose the other price. It stayed at discount. The new ₹2,000 cost changed your result: discount ₹1,000 versus usual ₹2,000. Now check a different fixed case: the other café keeps usual prices. Set yours.'},cards([('With cost · other stays usual',['Your discount: ₹6,000 − ₹2,000 = ₹4,000.','Your usual prices: ₹5,000; no campaign cost.'])]),[btn('Run a discount','s17',fresh='discount'),btn('Keep usual prices','s17',fresh='usual')],note='Immediate feedback includes a worked comparison before this fresh fixed-other attempt. Hinted retry is not independent learning evidence.')
scene('s17',{'fresh=discount':'You discounted against usual prices: ₹4,000 for you. Keeping usual prices instead earns ₹5,000. The campaign cost makes repeating the old action cost you ₹1,000 in either fixed case.','default':'You kept usual prices against usual prices: ₹5,000 each. Discounting instead earns you ₹4,000. The campaign cost changes the best action from discount to usual prices.'},cards([('After your choice',['With cost; other café fixed at usual prices.']),('Both fixed cases · either owner',['Other usual: own usual ₹5,000 > discount ₹4,000.','Other discount: own usual ₹2,000 > discount ₹1,000.','Both choosing usual prices reaches ₹5,000 each. The old conflict is gone.'])]),[btn('Take this outside the story','s18')],consequence=True)
scene('s18','Before proposing “everyone should stop,” check who gains by continuing when someone else stops alone. Then check what would change that incentive.',{'type':'concept','name':'My move ≠ both moves','definition':'Hold the other person’s action fixed. Compare your options. Swap perspectives. Then compare the shared outcomes—and recheck when a cost changes.','caption':'Next: notice one “everyone should stop” proposal and ask what happens to the first person who stops. The café numbers were a fictional model, not a pricing recommendation.'},end=True,mood='speaking')
D={'meta':{'title':'One statement. Two rooms.','lesson':'Prisoner’s dilemma','candidate':'A','lens':'Predict and compare','status':'Draft','author':'Play Designer A'},'start':'s01','scenes':S}
template=pathlib.Path('/Users/rohithpaull/build-sprint-app/content-team/deck/deck-template.html').read_text()
new=re.sub(r'(<script id="deck" type="application/json">).*?(</script>)',lambda m:m[1]+json.dumps(D,ensure_ascii=False,indent=2)+m[2],template,flags=re.S)
(out/'deck.html').write_text(new)
(out/'learner-only.md').write_text('''# One statement. Two rooms. — learner inputs

Status: Draft

You and Ravi robbed a jewellery store and were caught. You are held separately. Seek the fewest prison years for yourself. You control only your statement. Neither sees the other’s final statement; there is no communication or enforceable agreement.

Confess accepts this invented deal and names your accomplice. Silence refuses. Zero means no prison years under this deal.

| You | Ravi | Your years | Ravi’s years |
|---|---|---:|---:|
| Silent | Silent | 1 | 1 |
| Confess | Silent | 0 | 5 |
| Silent | Confess | 5 | 0 |
| Confess | Confess | 3 | 3 |

1. Ravi fixed at silent. Choose: **Stay silent / Confess**. Unscored.
2. What-if: both confess, 3 years each. Ravi stays confessing; only you become silent. Predict your years: **Fewer than 3 / Still 3 / More than 3**. Unscored.
3. Reset both statements to confess. Change: **Only I stay silent / Only Ravi stays silent / We both stay silent**. These are teaching controls, not extra power for your character.

New role: you run one café; another owner runs a nearby café. Seek greatest own daily profit, meaning money left after costs. Choices are independent, with neither seeing the other’s final choice. One fictional day; no future effects or unlisted costs.

| You | Other café | Your profit | Other profit |
|---|---|---:|---:|
| Usual | Usual | ₹5,000 | ₹5,000 |
| Discount | Usual | ₹6,000 | ₹2,000 |
| Usual | Discount | ₹2,000 | ₹6,000 |
| Discount | Discount | ₹3,000 | ₹3,000 |

4. Other café fixed at discount. Choose: **Run a discount / Keep usual prices**.
5. Compare from both discounting. Change: **Only I keep usual prices / We both keep usual prices**.

Separate what-if: each café running a discount pays an extra ₹2,000 campaign cost. Usual prices incur none. Everything else stays unchanged. Final profits:

| You | Other café | Your profit | Other profit |
|---|---|---:|---:|
| Usual | Usual | ₹5,000 | ₹5,000 |
| Discount | Usual | ₹4,000 | ₹2,000 |
| Usual | Discount | ₹2,000 | ₹4,000 |
| Discount | Discount | ₹1,000 | ₹1,000 |

6. Other café fixed at discount. Choose: **Run a discount / Keep usual prices**.
7. Which reason explains the changed choice? **The campaign cost changed / The other price changed**.
8. Cost still applies; other café fixed at usual prices. Choose: **Run a discount / Keep usual prices**.
''')
