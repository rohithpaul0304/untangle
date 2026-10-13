import json,re,os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
a=json.load(open('assets.json'))
s=open('site.html').read()
import os
fonts=open('../brill/fonts.css').read() if os.path.exists('../brill/fonts.css') else open('../content-team/prisoners-dilemma-2026-10-08/brilliant-grammar/fonts.css').read()
m={'__FOX_CELEB__':'fox_celebrating','__FOX_SPEAK__':'fox_speaking','__FOX_WAIT__':'fox_waiting','__FOX_THINK__':'fox_thinking',
   '__JEWEL__':'jewellery','__CH_CAFE__':'ch_cafe','__CH_TV__':'ch_tv','__CH_TOURNAMENT__':'ch_tournament','__NX_BEHAVIOURAL__':'nx_behavioural','__NX_PROBABILITY__':'nx_probability','__NX_ECONOMICS__':'nx_economics','__MEERA_F__':'meera_friendly','__MEERA__':'meera_hurt','__RAVI_C__':'ravi_cold','__RAVI__':'ravi_scared'}
for k,v in m.items(): s=s.replace(k,a[v])
cine={k:a[k] for k in ['fox_thinking','fox_speaking','fox_surprised','fox_celebrating','inspector','beat1','beat2','beat3','beat4']}
s=s.replace('__CINE_ASSETS__',json.dumps(cine)).replace('__FONTS__',fonts)
s=s.replace('__BOXJS__',open('threejs/box.bundle.js').read()).replace('__FOX_LID__',json.dumps(a['fox_celebrating'])).replace('__FOX_TOKEN__',json.dumps(a['fox_waiting'])).replace('__BADGE__',json.dumps(a['appstore'])).replace('__APPSTORE__',a['appstore']).replace('__FOX_GLB__',json.dumps(a.get('fox_glb') or None)).replace('__BOX_FRAMES__',json.dumps(a['box_frames']))
assert not (set(re.findall(r'__[A-Z_]+__',s))-{'__THREE__','__THREE_DEVTOOLS__'})
open('index.html','w').write(s)
print(len(s)//1024,'KB')
