import json,re
a=json.load(open('assets.json'))
s=open('site.html').read()
fonts=open('../brill/fonts.css').read()
m={'__FOX_CELEB__':'fox_celebrating','__FOX_SPEAK__':'fox_speaking','__FOX_WAIT__':'fox_waiting','__FOX_THINK__':'fox_thinking',
   '__JEWEL__':'jewellery','__MEERA_F__':'meera_friendly','__MEERA__':'meera_hurt','__RAVI_C__':'ravi_cold','__RAVI__':'ravi_scared'}
for k,v in m.items(): s=s.replace(k,a[v])
cine={k:a[k] for k in ['fox_thinking','fox_speaking','fox_surprised','fox_celebrating','inspector','beat1','beat2','beat3','beat4']}
s=s.replace('__CINE_ASSETS__',json.dumps(cine)).replace('__FONTS__',fonts)
s=s.replace('__BOXJS__',open('../threejs/box.bundle.js').read()).replace('__FOX_LID__',json.dumps(a['fox_celebrating'])).replace('__FOX_TOKEN__',json.dumps(a['fox_waiting'])).replace('__BADGE__',json.dumps(a['appstore'])).replace('__APPSTORE__',a['appstore']).replace('__FOX_GLB__',json.dumps(a.get('fox_glb') or None))
assert not (set(re.findall(r'__[A-Z_]+__',s))-{'__THREE__','__THREE_DEVTOOLS__'})
open('index.html','w').write(s)
print(len(s)//1024,'KB')
