"""Check the authored toy rules against all distinct action results.
Not a test of an app, animation, or enjoyment. Run with Python 3.
"""
from itertools import product

# A: (photo safe, normal deletion taps); then recipient has copy.
a_delete = {'review': (True, 2), 'undo': (True, 1)}
a_share = {'review': False, 'undo': True}
assert [x for x,(safe,taps) in a_delete.items() if safe and taps==1] == ['undo']
assert [x for x,received in a_share.items() if not received] == ['review']

# B: all first rules, then all two-switch rules. A ping wakes a sleeper
# and makes an awake code recipient read; silent means no immediate read.
b_first = {ping: {'inside': ping, 'sleeper_awake': ping} for ping in (False,True)}
assert not any(x['inside'] and not x['sleeper_awake'] for x in b_first.values())
b_second = {(urgent,waiting): (urgent,waiting) for urgent,waiting in product((False,True),repeat=2)}
assert [rule for rule,(inside,woken) in b_second.items() if inside and not woken] == [(True,False)]

# C: compare independently calculated stage queues to the authored tables.
expected = {
 (4,2,4): {(2,0,0):(0,4,0,2),(0,2,0):(2,0,0,4),(0,0,2):(2,2,0,2),
           (1,1,0):(1,2,0,3),(1,0,1):(1,3,0,2),(0,1,1):(2,1,0,3)},
 (4,3,3): {(2,0,0):(0,3,0,3),(0,2,0):(2,0,1,3),(0,0,2):(2,1,0,3),
           (1,1,0):(1,1,1,3),(1,0,1):(1,2,0,3),(0,1,1):(2,0,0,4)}
}
for base,table in expected.items():
    legal={p for p in product(range(3),repeat=3) if sum(p)==2}
    assert set(table)==legal
    for pegs,authored in table.items():
        available=6;queues=[]
        for limit,extra in zip(base,pegs):
            passed=min(available,limit+extra)
            queues.append(available-passed);available=passed
        result=tuple(queues)+(available,)
        assert result==authored,(base,pegs,result,authored)
        assert sum(result)==6
print('PASS: A constraints, all six B outcomes, all twelve C outcomes and conservation. No human or interface test.')
