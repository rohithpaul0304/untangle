const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
 const p=await b.newPage({viewport:{width:1200,height:800},deviceScaleFactor:1.5});
 await p.goto('file://'+process.cwd()+'/index.html?capture=1');await p.addStyleTag({content:'html{scroll-behavior:auto!important}.unbox .pin{background:transparent!important}.unbox .top,.boxcta{display:none!important}body{background:transparent!important}nav,#float{display:none!important}'});
 await p.waitForTimeout(1500);
 await p.evaluate(()=>{const s=document.querySelector('.unbox');window.scrollTo(0,s.getBoundingClientRect().top+scrollY+10);});await p.waitForTimeout(800);
 const N=12;for(let k=0;k<N;k++){const f=k/(N-1);await p.evaluate((f)=>{const s=document.querySelector('.unbox');const top=s.getBoundingClientRect().top+scrollY;const h=s.offsetHeight-innerHeight;window.scrollTo(0,top+h*(0.1+0.72*f));},f);await p.waitForTimeout(700);
   await p.locator('#boxgl').screenshot({path:`frame${String(k).padStart(2,'0')}.png`,omitBackground:true});}
 await b.close();})();
