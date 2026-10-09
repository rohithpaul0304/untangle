import json,re,pathlib
p=pathlib.Path('/tmp/untangle-pd-20261008/candidates/a/deck.html'); h=p.read_text(); d=json.loads(re.search(r'<script id="deck" type="application/json">(.*?)</script>',h,re.S)[1])
def v(a,b,caption,old=None):
 items=[{'label':'Your café · ₹ profit','value':a},{'label':'Other café · ₹ profit','value':b}]
 if old:
  for i,num in enumerate(old):items[i]['from']=num
 return {'type':'counters','items':items,'caption':caption}
shared='Baseline · Either owner: if other usual, own discount ₹6,000 vs usual ₹5,000. If other discounts, own discount ₹3,000 vs usual ₹2,000. Both usual: ₹5,000 each; both discount: ₹3,000 each.'
d['scenes']['s13']['visual']={'priceSwitch=solo':v(2000,6000,'Before ₹3,000/₹3,000 → only your usual prices → ₹2,000/₹6,000. '+shared,(3000,3000)),'default':v(5000,5000,'Before ₹3,000/₹3,000 → both usual prices → ₹5,000/₹5,000. '+shared,(3000,3000))}
shared='With cost · Either owner: if other usual, own usual ₹5,000 vs discount ₹4,000. If other discounts, own usual ₹2,000 vs discount ₹1,000. Both usual: ₹5,000 each. Individually preferable choices now reach the better shared result; the old conflict is gone.'
d['scenes']['s17']['visual']={'fresh=discount':v(4000,2000,'Selected: you discount; other stays usual. '+shared),'default':v(5000,5000,'Selected: you usual; other stays usual. '+shared)}
p.write_text(re.sub(r'(<script id="deck" type="application/json">).*?(</script>)',lambda m:m[1]+json.dumps(d,ensure_ascii=False,indent=2)+m[2],h,flags=re.S))
