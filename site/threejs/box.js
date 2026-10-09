import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const C = {
  butter: '#FFD84D', butterDeep: '#F4C321', navy: '#10233F', cobalt: '#1F4FFF',
  cream: '#FFFCF2', ink2: '#4F5B6E', sky: '#D8E6FF', rose: '#FFD9D6', sage: '#DCEFD6', white: '#FFFFFF'
};
const FONT = '"Bricolage Grotesque", Inter, system-ui, sans-serif';

function canvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tex(c) { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; }
function rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }
function pill(ctx, x, y, text, { fill, stroke, color, size = 22, pad = 18 }) {
  ctx.font = `700 ${size}px ${FONT}`; const w = ctx.measureText(text).width + pad * 2; const h = size * 1.9;
  rr(ctx, x, y, w, h, h / 2); if (fill) { ctx.fillStyle = fill; ctx.fill(); } if (stroke) { ctx.lineWidth = 3; ctx.strokeStyle = stroke; ctx.stroke(); }
  ctx.fillStyle = color; ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillText(text, x + pad, y + h / 2 + 1); ctx.textBaseline = 'alphabetic'; return w;
}
function loadImg(src) { return new Promise(res => { if (!src) return res(null); const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; }); }

function lidTopCanvas(fox) {
  const W = 1680, H = 1160, c = canvas(W, H), x = c.getContext('2d');
  x.fillStyle = C.butter; x.fillRect(0, 0, W, H);
  // paper grain
  const g = x.createRadialGradient(W * .2, H * .1, 50, W * .2, H * .1, W); g.addColorStop(0, 'rgba(255,255,255,.22)'); g.addColorStop(1, 'rgba(0,0,0,.05)'); x.fillStyle = g; x.fillRect(0, 0, W, H);
  let px = 80; const py = 72;
  for (const t of ['1 PLAYER', '5 MIN', 'AGES 14 TO 99']) { px += pill(x, px, py, t, { stroke: C.navy, color: C.navy, size: 24 }) + 14; }
  x.font = `700 24px ${FONT}`; const st = 'SUBJECT ONE · GAME THEORY'; const sw = x.measureText(st).width + 40;
  pill(x, W - 80 - sw, py, st, { fill: C.cobalt, color: '#fff', size: 24, pad: 20 });
  x.fillStyle = C.navy; x.font = `800 230px ${FONT}`; x.letterSpacing = '-12px'; x.textAlign = 'left';
  x.fillText('Untangle', 72, H - 250);
  x.letterSpacing = '0px'; x.font = `600 44px ${FONT}`;
  x.fillText('Big ideas don\u2019t have to', 84, H - 150); x.fillText('feel like homework.', 84, H - 96);
  if (fox) { const fh = 640, fw = fh * fox.width / fox.height; x.save(); x.translate(W - fw * .78, H - fh * .86); x.rotate(-0.1); x.drawImage(fox, 0, 0, fw, fh); x.restore(); }
  return c;
}
function lidUnderCanvas(badge) {
  const W = 1680, H = 1160, c = canvas(W, H), x = c.getContext('2d');
  x.fillStyle = C.navy; x.fillRect(0, 0, W, H);
  const l1a = 'There\u2019s a lot more to ', l1b = 'play', l1c = ' with.';
  let fs = 140, wa, wb, wc; x.letterSpacing = '-5px';
  do { x.font = `800 ${fs}px ${FONT}`; wa = x.measureText(l1a).width; wc = x.measureText(l1c).width; x.font = `800 italic ${fs}px ${FONT}`; wb = x.measureText(l1b).width; if (wa + wb + wc > W - 140) fs -= 6; else break; } while (fs > 60);
  let sx = (W - (wa + wb + wc)) / 2; const yy = 470; x.textAlign = 'left';
  x.font = `800 ${fs}px ${FONT}`; x.fillStyle = '#fff'; x.fillText(l1a, sx, yy); sx += wa; x.font = `800 italic ${fs}px ${FONT}`; x.fillStyle = C.butter; x.fillText(l1b, sx, yy); sx += wb; x.font = `800 ${fs}px ${FONT}`; x.fillStyle = '#fff'; x.fillText(l1c, sx, yy);
  x.letterSpacing = '0px'; x.textAlign = 'center'; x.fillStyle = 'rgba(255,252,242,.78)'; x.font = `500 44px ${FONT}`;
  x.font = `600 52px ${FONT}`; x.fillStyle = 'rgba(255,252,242,.86)'; x.fillText('A whole app full of \u201coh, now I get it.\u201d', W / 2, 600);
  // official badge (drawn when the image is supplied)
  if (badge) { const bw = 460, bh = bw * badge.height / badge.width; x.drawImage(badge, (W - bw) / 2, 720, bw, bh); }
  x.fillStyle = 'rgba(255,252,242,.5)'; x.font = `500 28px ${FONT}`; x.textAlign = 'center'; x.fillText('Chapter one stays free on the web. Your progress carries over.', W / 2, 960);
  // flip vertically so it reads correctly on the underside after the lid opens
  return c;
}
function boardCanvas() {
  const W = 1400, H = 900, c = canvas(W, H), x = c.getContext('2d');
  x.fillStyle = C.cream; rr(x, 0, 0, W, H, 40); x.fill();
  x.strokeStyle = C.navy; x.lineWidth = 6; rr(x, 3, 3, W - 6, H - 6, 38); x.stroke();
  x.setLineDash([16, 16]); x.strokeStyle = 'rgba(16,35,63,.25)'; x.lineWidth = 5; x.beginPath(); x.moveTo(W / 2, 6); x.lineTo(W / 2, H - 6); x.stroke(); x.setLineDash([]);
  const P = [[170, 690], [540, 270], [910, 660], [1250, 240]];
  const path = () => { x.beginPath(); x.moveTo(P[0][0], P[0][1]); x.bezierCurveTo(330, 690, 330, 270, P[1][0], P[1][1]); x.bezierCurveTo(760, 270, 760, 660, P[2][0], P[2][1]); x.bezierCurveTo(1100, 660, 1100, 240, P[3][0], P[3][1]); };
  path(); x.lineCap = 'round'; x.strokeStyle = 'rgba(16,35,63,.1)'; x.lineWidth = 30; x.stroke();
  path(); x.strokeStyle = C.butterDeep; x.lineWidth = 16; x.setLineDash([10, 28]); x.stroke(); x.setLineDash([]);
  const names = ['One switch', 'The café', 'The ad ban', 'The tournament'];
  P.forEach(([px, py], i) => {
    x.beginPath(); x.arc(px, py, 62, 0, Math.PI * 2);
    if (i === 0) { x.fillStyle = C.navy; x.fill(); } else { x.fillStyle = '#fff'; x.fill(); x.lineWidth = 6; x.strokeStyle = C.navy; if (i === 3) x.setLineDash([12, 12]); x.stroke(); x.setLineDash([]); }
    x.fillStyle = i === 0 ? C.butter : C.navy; x.font = `800 48px ${FONT}`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(i === 0 ? '1 ✓' : String(i + 1), px, py + 2); x.textBaseline = 'alphabetic';
    x.fillStyle = C.ink2; x.font = `600 30px ${FONT}`; x.fillText(names[i], px, py + 112);
  });
  return c;
}
function cardCanvas(bg, title, sub) {
  const W = 520, H = 760, c = canvas(W, H), x = c.getContext('2d');
  x.fillStyle = bg; rr(x, 0, 0, W, H, 36); x.fill(); x.lineWidth = 8; x.strokeStyle = C.navy; rr(x, 4, 4, W - 8, H - 8, 34); x.stroke();
  x.fillStyle = C.navy; x.font = `800 54px ${FONT}`; x.textAlign = 'left'; x.letterSpacing = '-2px';
  const words = title.split(' '); let line = '', yy = H - 150; const lines = [];
  for (const w of words) { const t = line ? line + ' ' + w : w; if (x.measureText(t).width > W - 80 && line) { lines.push(line); line = w; } else line = t; } lines.push(line);
  yy -= (lines.length - 1) * 60; lines.forEach((l, i) => x.fillText(l, 40, yy + i * 60));
  x.letterSpacing = '0px'; x.fillStyle = C.ink2; x.font = `700 24px ${FONT}`; x.fillText(sub.toUpperCase(), 40, H - 60);
  x.fillStyle = C.navy; x.font = `800 40px ${FONT}`; x.fillText('U', 40, 80);
  return c;
}

export function mount(el, opts = {}) {
  const W = 4.2, D = 2.9, H = 0.95, LH = 0.42, M = 0.07, T = 0.06;
  const renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05; renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  scene.add(new THREE.HemisphereLight(0xfff6dc, 0x6a6f86, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(3.5, 7.5, 4.5); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); key.shadow.radius = 6; key.shadow.bias = -0.0005; Object.assign(key.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6, near: 1, far: 25 });
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xdde8ff, 0.5); fill.position.set(-5, 3, -2); scene.add(fill);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.26, color: 0x10233f }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

  const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0, ...extra });
  const navy = std(C.navy), cream = std(C.cream), butter = std(C.butter);
  const box = new THREE.Group(); scene.add(box);
  const mesh = (geo, mat, x, y, z) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; box.add(m); return m; };
  // tray: floor + 4 walls (navy outside, cream inside via two-sided materials array)
  mesh(new THREE.BoxGeometry(W, T, D), [navy, navy, cream, navy, navy, navy], 0, T / 2, 0);
  // walls: box per wall; inside faces cream
  mesh(new THREE.BoxGeometry(W, H, T), [navy, navy, navy, navy, cream, navy], 0, H / 2, -D / 2 + T / 2); // back: +z face inside
  mesh(new THREE.BoxGeometry(W, H, T), [navy, navy, navy, navy, navy, cream], 0, H / 2, D / 2 - T / 2);  // front: -z face inside
  mesh(new THREE.BoxGeometry(T, H, D), [cream, navy, navy, navy, navy, navy], -W / 2 + T / 2, H / 2, 0); // left: +x inside
  mesh(new THREE.BoxGeometry(T, H, D), [navy, cream, navy, navy, navy, navy], W / 2 - T / 2, H / 2, 0);  // right: -x inside

  // contents
  const board = new THREE.Mesh(new THREE.PlaneGeometry(2.95, 1.9), new THREE.MeshStandardMaterial({ map: tex(boardCanvas()), roughness: 0.9 }));
  board.rotation.x = -Math.PI / 2; board.position.set(-0.5, T + 0.012, 0.0); board.receiveShadow = true; box.add(board);
  const cards = [[C.sage, 'Everyday economics', 'Subject four', -0.09, 0.05, 0.02], [C.sky, 'Probability and risk', 'Subject three', 0.08, -0.02, 0.05], [C.butter, 'Behavioural economics', 'Subject two', -0.03, 0, 0.08]];
  cards.forEach(([bg, t, s, rot, dx, dy]) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.025, 1.2), [std(C.navy), std(C.navy), new THREE.MeshStandardMaterial({ map: tex(cardCanvas(bg, t, s)), roughness: 0.85 }), std(C.navy), std(C.navy), std(C.navy)]);
    m.position.set(1.5 + dx, T + 0.07 + dy, -0.3); m.rotation.y = rot; m.castShadow = true; m.receiveShadow = true; box.add(m);
  });
  const die = mesh(new THREE.BoxGeometry(0.28, 0.28, 0.28), std(C.cobalt, { roughness: 0.5 }), 1.48, T + 0.14, -1.18); die.rotation.y = 0.5;
  let token = null;
  // ---- low-poly 3D fox token ----
  function makeFox() {
    const g = new THREE.Group();
    const orange = new THREE.MeshStandardMaterial({ color: '#F2742B', roughness: 0.7, flatShading: true });
    const creamF = new THREE.MeshStandardMaterial({ color: '#FFF1DC', roughness: 0.8, flatShading: true });
    const pink = new THREE.MeshStandardMaterial({ color: '#E84C7D', roughness: 0.7, flatShading: true });
    const dark = new THREE.MeshStandardMaterial({ color: '#1A1A1A', roughness: 0.4 });
    const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0, sc = 1) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.scale.setScalar(sc); m.castShadow = true; m.receiveShadow = true; g.add(m); return m; };
    // body (sitting): egg shape
    const body = add(new THREE.SphereGeometry(0.26, 14, 10), orange, 0, 0.28, 0); body.scale.set(0.9, 1.15, 0.85);
    add(new THREE.SphereGeometry(0.17, 12, 8), creamF, 0, 0.26, 0.13).scale.set(0.8, 1, 0.6); // chest
    // head
    add(new THREE.SphereGeometry(0.21, 14, 10), orange, 0, 0.66, 0.06).scale.set(1.05, 0.95, 0.95);
    add(new THREE.ConeGeometry(0.11, 0.2, 8), orange, 0, 0.6, 0.26, Math.PI / 2 + 0.25, 0, 0); // snout
    add(new THREE.SphereGeometry(0.045, 8, 6), dark, 0, 0.6, 0.37); // nose
    add(new THREE.SphereGeometry(0.1, 10, 8), creamF, -0.09, 0.57, 0.19).scale.set(1, 0.8, 0.6); // cheeks
    add(new THREE.SphereGeometry(0.1, 10, 8), creamF, 0.09, 0.57, 0.19).scale.set(1, 0.8, 0.6);
    add(new THREE.SphereGeometry(0.03, 8, 6), dark, -0.08, 0.7, 0.22); add(new THREE.SphereGeometry(0.03, 8, 6), dark, 0.08, 0.7, 0.22); // eyes
    // ears: orange cone + pink inner cone
    for (const sx of [-1, 1]) { add(new THREE.ConeGeometry(0.085, 0.24, 4), orange, sx * 0.13, 0.9, 0.0, 0.1, 0, sx * -0.35); add(new THREE.ConeGeometry(0.05, 0.16, 4), pink, sx * 0.13, 0.9, 0.03, 0.1, 0, sx * -0.35); }
    // tail: curved cone with cream tip
    add(new THREE.ConeGeometry(0.12, 0.5, 8), orange, 0.14, 0.2, -0.3, -1.1, 0, -0.5);
    add(new THREE.SphereGeometry(0.09, 8, 6), creamF, 0.28, 0.42, -0.42);
    // paws
    add(new THREE.SphereGeometry(0.07, 8, 6), orange, -0.12, 0.07, 0.18).scale.set(1, 0.6, 1.2); add(new THREE.SphereGeometry(0.07, 8, 6), orange, 0.12, 0.07, 0.18).scale.set(1, 0.6, 1.2);
    // base disc
    const base = add(new THREE.CylinderGeometry(0.3, 0.32, 0.05, 24), std(C.navy), 0, 0.02, 0);
    return g;
  }
  let fox3d = null, mixer = null; const clock = new THREE.Clock();
  const foxBase = mesh(new THREE.CylinderGeometry(0.34, 0.36, 0.05, 28), std(C.navy), -1.45, T + 0.025, 0.62);
  function placeFox(obj) { obj.position.set(-1.45, T + 0.05, 0.62); obj.rotation.y = 2.4; box.add(obj); fox3d = obj; dirty = true; }
  if (opts.foxGlb) {
    fetch(opts.foxGlb).then(r => r.arrayBuffer()).then(buf => new GLTFLoader().parse(buf, '', gltf => {
      const o = gltf.scene; const bb = new THREE.Box3().setFromObject(o); const size = bb.getSize(new THREE.Vector3()); const sc = 0.78 / size.y; o.scale.setScalar(sc);
      bb.setFromObject(o); const ctr = bb.getCenter(new THREE.Vector3()); o.position.sub(new THREE.Vector3(ctr.x, bb.min.y, ctr.z));
      const wrap = new THREE.Group(); wrap.add(o);
      o.traverse(m => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = true; if (m.material) { m.material.roughness = 0.85; m.material.metalness = 0; } } });
      if (gltf.animations && gltf.animations.length) { mixer = new THREE.AnimationMixer(o); const clip = gltf.animations.find(a => /survey|idle/i.test(a.name)) || gltf.animations[0]; mixer.clipAction(clip).play(); }
      placeFox(wrap);
    }, err => { console.warn('fox glb', err); placeFox(makeFox()); }));
  } else placeFox(makeFox());
  // ---- extra items ----
  function dieMaterials() {
    const pips = { 1: [[.5, .5]], 2: [[.25, .25], [.75, .75]], 3: [[.25, .25], [.5, .5], [.75, .75]], 4: [[.25, .25], [.75, .25], [.25, .75], [.75, .75]], 5: [[.25, .25], [.75, .25], [.5, .5], [.25, .75], [.75, .75]], 6: [[.25, .22], [.75, .22], [.25, .5], [.75, .5], [.25, .78], [.75, .78]] };
    return [1, 6, 2, 5, 3, 4].map(n => { const c = canvas(256, 256), x = c.getContext('2d'); x.fillStyle = C.cobalt; x.fillRect(0, 0, 256, 256); x.fillStyle = '#fff'; pips[n].forEach(([u, v]) => { x.beginPath(); x.arc(u * 256, v * 256, 24, 0, Math.PI * 2); x.fill(); }); return new THREE.MeshStandardMaterial({ map: tex(c), roughness: 0.45 }); });
  }
  const dieGeo = new THREE.BoxGeometry(0.26, 0.26, 0.26);
  const d2 = mesh(dieGeo, dieMaterials(), 1.8, T + 0.13, -1.12); d2.rotation.y = -0.4;
  // coins (XP)
  const coinMat = new THREE.MeshStandardMaterial({ color: '#F4C321', roughness: 0.35, metalness: 0.55 });
  const coinGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.035, 28);
  for (let i = 0; i < 6; i++) { const c = mesh(coinGeo, coinMat, 0.55 + (i > 3 ? (i - 3) * 0.24 : 0), T + 0.02 + (i <= 3 ? i * 0.036 : 0), -1.15 + (i > 3 ? 0.1 * (i - 3) : 0)); c.rotation.y = i * 0.4; }
  // rules booklet under the cards
  const bk = canvas(520, 700), bx = bk.getContext('2d'); bx.fillStyle = C.butter; rr(bx, 0, 0, 520, 700, 24); bx.fill(); bx.lineWidth = 8; bx.strokeStyle = C.navy; rr(bx, 4, 4, 512, 692, 22); bx.stroke();
  bx.fillStyle = C.navy; bx.font = `800 60px ${FONT}`; bx.textAlign = 'left'; bx.fillText('Rules of', 44, 420); bx.fillText('the game', 44, 486); bx.font = `700 26px ${FONT}`; bx.fillText('PLAY FIRST. NAMES LATER.', 44, 560); bx.font = `800 40px ${FONT}`; bx.fillText('U', 44, 80);
  const booklet = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.05, 1.34), [std(C.cream), std(C.cream), new THREE.MeshStandardMaterial({ map: tex(bk), roughness: 0.85 }), std(C.cream), std(C.cream), std(C.cream)]);
  booklet.position.set(1.42, T + 0.03, -0.25); booklet.rotation.y = 0.12; booklet.castShadow = true; booklet.receiveShadow = true; box.add(booklet);
  // two pawns on the board (Ravi, Meera)
  const pawnPts = []; for (let i = 0; i <= 12; i++) { const t = i / 12; pawnPts.push(new THREE.Vector2(0.09 * (1 - t) * (1 + 0.6 * Math.sin(t * Math.PI * 1.6)) + 0.02, t * 0.34)); }
  const pawnGeo = new THREE.LatheGeometry(pawnPts, 20);
  const pawn = (col, x, z) => { const m = mesh(pawnGeo, std(col, { roughness: 0.5 }), x, T + 0.01, z); const h = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 8), std(col, { roughness: 0.5 })); h.position.set(x, T + 0.37, z); h.castShadow = true; box.add(h); return m; };
  pawn(C.cobalt, -0.78, -0.34); pawn('#E8788F', -0.05, 0.42);
  // lid group hinged on back edge
  const lid = new THREE.Group(); lid.position.set(0, H + 0.01, -D / 2 - M); box.add(lid);
  const lidW = W + M * 2, lidD = D + M * 2;
  const topMat = [butter, butter, new THREE.MeshStandardMaterial({ map: tex(lidTopCanvas(null)), roughness: 0.8 }), new THREE.MeshStandardMaterial({ map: tex(lidUnderCanvas(null)), roughness: 0.8 }), butter, butter];
  const top = new THREE.Mesh(new THREE.BoxGeometry(lidW, T, lidD), topMat); top.position.set(0, LH - T / 2, lidD / 2); top.castShadow = true; top.receiveShadow = true; lid.add(top);
  const skirt = (geo, x, y, z) => { const m = new THREE.Mesh(geo, butter); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; lid.add(m); };
  skirt(new THREE.BoxGeometry(lidW, LH, T), 0, LH / 2, T / 2); skirt(new THREE.BoxGeometry(lidW, LH, T), 0, LH / 2, lidD - T / 2);
  skirt(new THREE.BoxGeometry(T, LH, lidD), -lidW / 2 + T / 2, LH / 2, lidD / 2); skirt(new THREE.BoxGeometry(T, LH, lidD), lidW / 2 - T / 2, LH / 2, lidD / 2);

  // fox textures arrive async
  Promise.all([loadImg(opts.foxLid), loadImg(opts.foxToken), loadImg(opts.badge)]).then(([fl, ft, bd]) => {
    if (fl) { topMat[2].map = tex(lidTopCanvas(fl)); topMat[2].needsUpdate = true; }
    if (bd) { topMat[3].map = tex(lidUnderCanvas(bd)); topMat[3].needsUpdate = true; }
    dirty = true;
  });

  let p = 0, dirty = true, w = 0, h = 0;
  function layout() {
    const r = el.getBoundingClientRect(); if (r.width === w && r.height === h) return; w = r.width; h = r.height;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); dirty = true;
  }
  function place() {
    const az = THREE.MathUtils.degToRad(-28 + p * 34), elv = THREE.MathUtils.degToRad(46 + p * 12);
    const narrow = w < h * 0.9; const rad = (narrow ? 25 : 14.6) - p * 0.6;
    camera.position.set(Math.sin(az) * Math.cos(elv) * rad, Math.sin(elv) * rad, Math.cos(az) * Math.cos(elv) * rad);
    camera.lookAt(0, 2.25 - p * 0.45, 0);
    lid.rotation.x = -THREE.MathUtils.degToRad(112) * easeOut(p);
    box.rotation.y = THREE.MathUtils.degToRad(-6 + p * 10);
  }
  const easeOut = t => 1 - Math.pow(1 - t, 2.2);
  function frame() { layout(); const dt = clock.getDelta(); if (mixer && p > 0.25 && inView) { mixer.update(dt); dirty = true; } if (dirty) { place(); renderer.render(scene, camera); dirty = false; } requestAnimationFrame(frame); }
  let inView = true; new IntersectionObserver(es => { inView = es[0].isIntersecting; }).observe(el);
  requestAnimationFrame(frame);
  addEventListener('resize', () => { w = 0; dirty = true; });
  return { setProgress(v) { v = Math.max(0, Math.min(1, v)); if (v !== p) { p = v; dirty = true; } }, get progress() { return p; } };
}
window.UntangleBox = { mount };
