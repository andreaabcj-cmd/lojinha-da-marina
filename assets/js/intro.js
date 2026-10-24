/* Intro da Lojinha: "A ideia da Marina" (~55 s). Roteiro e direção de arte em _roteiro/INTRO_MARINA.md.
   Personagens e objetos em pixel art (os mesmos de personagens.js); luz, céu e interface lisos por cima.
   Uso: INTRO.abrir() abre por cima da página (Pular, Começar, Ver de novo, Esc fecha);
        INTRO.abrir({ alvo: elemento }) desenha dentro de um elemento (página de prévia).
   Depende de personagens.js (PERSONAGEM e PERSONAGEM_MAPA). */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return LANG === 'es' ? es : pt }
  var DUR = 56, FIM = 55;

  var CSS =
    '.it-fundo{position:fixed;inset:0;z-index:3000;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(5,10,25,.88);backdrop-filter:blur(6px);opacity:0;transition:opacity .4s}' +
    '.it-fundo.on{opacity:1}' +
    '.it-cena{position:relative;width:min(100%,calc((100vh - 40px)*16/9),1280px);aspect-ratio:16/9;border-radius:18px;overflow:hidden;background:#000;box-shadow:0 30px 80px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.06);font-family:"Segoe UI",system-ui,Arial,sans-serif;color:#fff}' +
    '.it-cena canvas{position:absolute;inset:0;width:100%;height:100%;display:block}' +
    '.it-leg{position:absolute;left:5.5%;bottom:10%;max-width:72%;font-weight:700;font-size:clamp(15px,2.5vw,32px);line-height:1.25;letter-spacing:-.01em;text-shadow:0 2px 14px rgba(0,0,0,.65);pointer-events:none;z-index:2}' +
    '.it-leg{padding:.35em .7em .4em;border-radius:14px;background:rgba(8,14,32,.42);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);transition:background .4s}.it-leg.out{background:rgba(8,14,32,0)}' +
    '.it-leg.pensa{font-style:italic;font-weight:600;color:#FFE9A8}' +
    '.it-leg span{display:inline-block;white-space:pre;opacity:0;transform:translateY(12px);filter:blur(6px);transition:opacity .55s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1),filter .55s}' +
    '.it-leg.in span{opacity:1;transform:none;filter:none}' +
    '.it-leg.out span{opacity:0;transform:translateY(-8px);filter:blur(4px);transition-duration:.35s;transition-delay:0s!important}' +
    '.it-notif{position:absolute;left:50%;top:5%;z-index:3;width:min(62%,430px);display:flex;gap:12px;align-items:center;padding:12px 14px;border-radius:18px;background:rgba(250,252,255,.94);color:#16294A;box-shadow:0 14px 40px rgba(0,0,0,.35);transform:translate(-50%,-160%) scale(.96);transition:transform .7s cubic-bezier(.34,1.4,.64,1),opacity .4s;opacity:0;font-size:clamp(12px,1.6vw,17px);line-height:1.3}' +
    '.it-notif.in{transform:translate(-50%,0) scale(1);opacity:1}.it-notif.out{transform:translate(-50%,-160%);opacity:0;transition-duration:.45s}' +
    '.it-notif .ic{flex:0 0 auto;width:2.4em;height:2.4em;border-radius:.65em;display:grid;place-items:center;font-size:1.1em}' +
    '.it-notif small{display:block;color:#64748B;font-size:.82em}.it-notif b{display:block}' +
    '.it-chat{position:absolute;right:5%;bottom:12%;z-index:3;max-width:min(52%,420px);display:flex;gap:10px;align-items:flex-end;opacity:0;transform:translateY(20px) scale(.92);transform-origin:bottom right;transition:transform .6s cubic-bezier(.34,1.5,.64,1),opacity .35s;font-size:clamp(12px,1.6vw,18px);line-height:1.3}' +
    '.it-chat.in{opacity:1;transform:none}.it-chat.out{opacity:0;transform:translateY(-10px);transition-duration:.35s}' +
    '.it-chat .av{flex:0 0 auto;background:#E8EEFA;border-radius:50%;width:2.8em;height:2.8em;display:flex;justify-content:center;align-items:flex-start;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.3)}.it-chat .av svg{height:5.2em;width:auto;margin-top:.15em;flex:0 0 auto}' +
    '.it-chat .bal{background:#2F6FD6;color:#fff;padding:10px 14px;border-radius:16px 16px 4px 16px;box-shadow:0 10px 30px rgba(0,0,0,.3)}.it-chat small{display:block;opacity:.75;font-size:.8em}' +
    '.it-placa{position:absolute;left:5.5%;top:24%;z-index:3;max-width:min(40%,380px);display:flex;gap:12px;padding:12px 16px 13px 12px;border-radius:14px;background:rgba(8,14,32,.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);clip-path:inset(0 100% 0 0 round 14px);transition:clip-path .7s cubic-bezier(.2,.8,.2,1),opacity .35s;font-size:clamp(12px,1.55vw,17px);line-height:1.3;color:#D5DEF0}' +
    '.it-placa.in{clip-path:inset(0 0 0 0 round 14px)}.it-placa.out{opacity:0}' +
    '.it-placa i{flex:0 0 5px;border-radius:3px;background:var(--cor)}.it-placa b{display:block;color:#fff;font-size:2em;font-weight:800;letter-spacing:.06em;text-transform:uppercase;line-height:1.05;margin-bottom:3px}' +
    '.it-pular{position:absolute;top:14px;right:14px;z-index:6;background:rgba(255,255,255,.12);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);color:#fff;border-radius:999px;padding:7px 15px;font:600 13px "Segoe UI",sans-serif;cursor:pointer;opacity:.75;transition:opacity .2s}' +
    '.it-pular:hover,.it-fechar:hover{opacity:1}' +
    '.it-fechar{position:absolute;top:14px;left:14px;z-index:6;background:rgba(255,255,255,.12);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);color:#fff;border-radius:999px;padding:7px 15px;font:600 13px "Segoe UI",sans-serif;cursor:pointer;opacity:.75}' +
    '.it-barra{position:absolute;left:0;right:0;bottom:0;height:5px;background:rgba(255,255,255,.12);cursor:pointer;z-index:6}.it-barra i{display:block;height:100%;width:0;background:linear-gradient(90deg,#FFD65A,#FFB547)}' +
    '.it-titulo{position:absolute;inset:0;z-index:5;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:radial-gradient(circle at 50% 38%,#34508F,#16224A 62%,#0E1630);opacity:0;pointer-events:none;transition:opacity .7s}' +
    '.it-titulo.on{opacity:1;pointer-events:auto}' +
    '.it-turma{display:flex;gap:clamp(14px,3vw,34px);align-items:flex-end;height:34%}.it-turma svg{height:100%;width:auto}' +
    '.it-turma>div{height:100%;display:flex;align-items:flex-end;opacity:0;transform:translateY(40px) scale(.7);transition:transform .8s cubic-bezier(.34,1.56,.64,1),opacity .45s}' +
    '.it-turma>div:nth-child(2){transition-delay:.12s}.it-turma>div:nth-child(3){transition-delay:.24s;height:62%}' +
    '.it-titulo.on .it-turma>div{opacity:1;transform:none}' +
    '.it-titulo h1{margin:6px 0 0;font-size:clamp(26px,5.2vw,64px);font-weight:800;letter-spacing:-.025em;opacity:0;transform:translateY(14px);transition:all .7s .45s cubic-bezier(.2,.7,.2,1)}' +
    '.it-titulo p{margin:0;color:#C9D6F2;font-size:clamp(13px,1.7vw,19px);opacity:0;transition:opacity .7s .7s}' +
    '.it-titulo.on h1{opacity:1;transform:none}.it-titulo.on p{opacity:1}' +
    '.it-botoes{display:flex;gap:10px;margin-top:10px;opacity:0;transition:opacity .6s .95s}.it-titulo.on .it-botoes{opacity:1}' +
    '.it-botoes button{font:700 15px "Segoe UI",sans-serif;padding:11px 22px;border-radius:12px;cursor:pointer;border:0}' +
    '.it-botoes .prim{background:#FFD65A;color:#16294A;box-shadow:0 6px 20px rgba(255,214,90,.35)}.it-botoes .sec{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.22)}';

  /* ---------- tempo e curvas ---------- */
  var E = {
    lin: function (p) { return p },
    io: function (p) { return p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2 },
    sai: function (p) { return 1 - Math.pow(1 - p, 3) },
    entra: function (p) { return p * p * p },
    volta: function (p) { var c = 1.70158; return 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2) }
  };
  function kf(t, ks) {   // [[t, v], [t, v, 'curva'], …]
    if (t <= ks[0][0]) return ks[0][1];
    for (var i = 1; i < ks.length; i++) if (t <= ks[i][0]) { var a = ks[i - 1], b = ks[i], p = (t - a[0]) / (b[0] - a[0]); return a[1] + (b[1] - a[1]) * E[b[2] || 'io'](p) }
    return ks[ks.length - 1][1];
  }
  function rgb(c) { if (c[0] === '#') { var n = parseInt(c.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255] } return c.match(/\d+/g).map(Number) }
  function mistura(a, b, p) { var x = rgb(a), y = rgb(b); return 'rgb(' + x.map(function (u, i) { return Math.round(u + (y[i] - u) * p) }).join(',') + ')' }
  function sorteio(semente) { var s = semente; return function () { s = (s * 9301 + 49297) % 233280; return s / 233280 } }

  /* ---------- pixel art ---------- */
  var COR = { k: '#22304A', w: '#FFFFFF', u: '#2F6FD6', U: '#1F4FA8', m: '#E2577A', g: '#2BB37A', j: '#F2B632', J: '#C98E1A', o: '#E98A3C',
    y: '#FFD65A', Y: '#E0A82A', G: '#9AA6B8', Q: '#3E5C8A', q: '#5574A8', t: '#C9A27A', T: '#A98258', v: '#7357FF', x: '#FFFFFF' };
  var cache = {};
  function tela(chave, linhas, cores) {
    if (cache[chave]) return cache[chave];
    var h = linhas.length, w = linhas[0].length, c = document.createElement('canvas'); c.width = w; c.height = h;
    var g = c.getContext('2d');
    linhas.forEach(function (r, y) { for (var i = 0; i < w; i++) { var ch = r[i]; if (ch === '.') continue; g.fillStyle = (cores && cores[ch]) || COR[ch] || '#f0f'; g.fillRect(i, y, 1, 1) } });
    return (cache[chave] = c);
  }
  function troca(rows, mapa) { var r = rows.slice(); for (var k in mapa) r[+k] = mapa[k]; return r }
  function recolore(rows, de, para) { return rows.map(function (r) { return r.split(de).join(para) }) }
  function espelha(rows) { return rows.map(function (r) { return r.split('').reverse().join('') }) }

  var CANECA = ['.kkkkkkk..', '.kwwwwwkk.', '.kwwwwwk.k', '.kwwwwwk.k', '.kwwwwwkk.', '.kwwwwwk..', '..kkkkk...'];
  var PINTURA = [[3, 2, 'u'], [3, 3, 'u'], [3, 4, 'u'], [3, 5, 'u'], [3, 6, 'u'], [1, 3, 'm'], [1, 5, 'm'], [5, 3, 'm'], [5, 5, 'm']];
  var CANECA_PRONTA = (function () { var g = CANECA.map(function (r) { return r.split('') }); PINTURA.forEach(function (p) { g[p[0]][p[1]] = p[2] }); return g.map(function (r) { return r.join('') }) })();
  var CAMISA = ['.kkk..kkk.', 'kXXXkkXXXk', 'kXXXXXXXXk', '.kXXXXXXk.', '.kxXXXXxk.', '.kkkkkkkk.'];
  var SACOLA = ['..kkk..', '.k...k.', 'kkkkkkk', 'kXXXXXk', 'kXXXXXk', 'kXwXXXk', 'kXXXXXk', 'kkkkkkk'];
  var POTE = ['kkkkk', 'kXXXk', 'kXXXk', 'kkkkk'];
  var LAMPADA = ['..kkkkk..', '.kyyyyyk.', 'kyywyyyyk', 'kywyyyyyk', 'kyyyyyyyk', 'kyyyyyyyk', '.kyyyyyk.', '..kyyyk..', '..kGGGk..', '..kGGGk..', '...kkk...'];
  var PINCEL = ['...k', '..kj', '.kjk', 'kjk.', 'kk..', 'u...'];
  var LUMINARIA = espelha(['.....kkkk...', '....kqqqqk..', '...kqQQQQqk.', '..kQQQQQQQQk', '..kkkkkkkkkk', '...kk.......', '...kk.......', '..kk........', '..kk........', '.kk.........', '.kk.........', '.kk.........', '..kk........', '...kk.......', '....kk......', '....kk......', '..kkkkkk....', '.kQQQQQQk...', 'kkkkkkkkkk..']);
  var CAIXA = ['kkkkkkkkkkkk', 'kTTTTyyTTTTk', 'kttttyyttttk', 'kttttyyttttk', 'kttttyyttttk', 'kttttttttttk', 'kTTTTTTTTTTk', 'kkkkkkkkkkkk'];
  var CELULAR = ['kkkkkkk', 'kQQQQQk', 'kkkkkkk'];
  function produto(rows, nome, cor, escura) { return tela(nome, recolore(rows, 'k', 'x'), { X: cor, x: escura || '#1A2440', w: '#FFFFFF' }) }

  /* ---------- a Marina e o Pixel: desenhos do site + expressões e "amassa/estica" ---------- */
  var MB, MC, FEL, PIS, PXB, PXC, PXF, RFB, RFF, RFC, OLHOS, BOCA;
  function L(f) { return 'khh' + f + 'hhk' }   // linha do rosto da Marina (10 colunas entre o cabelo)
  function prepara() {
    var mp = PERSONAGEM_MAPA('marina'); MB = mp.linhas; MC = mp.cores; FEL = PERSONAGEM_MAPA('marina', 'feliz').linhas; PIS = PERSONAGEM_MAPA('marina', 'pisca').linhas;
    var px0 = PERSONAGEM_MAPA('pixel'); PXB = px0.linhas; PXC = px0.cores; PXF = PERSONAGEM_MAPA('pixel', 'feliz').linhas;
    var rf = PERSONAGEM_MAPA('rafa'); RFB = rf.linhas; RFC = rf.cores; RFF = PERSONAGEM_MAPA('rafa', 'feliz').linhas;
    OLHOS = {
      base: {}, pisca: { 6: PIS[6], 7: PIS[7], 8: PIS[8] }, feliz: { 6: FEL[6], 7: FEL[7], 8: FEL[8] },
      baixo: { 6: L('swwsssswws'), 7: L('swwsssswws'), 8: L('skwsssskws') },
      pensa: { 6: L('swksssswks'), 7: L('swwsssswws'), 8: L('swwsssswws') },
      surpresa: { 5: L('hwwsssswws'), 6: L('swwsssswws'), 7: L('swksssswks'), 8: L('swwsssswws') }
    };
    BOCA = { base: {}, neutra: { 10: L('ssssssssss'), 11: L('sssskkssss') }, triste: { 10: L('ssssssssss'), 11: L('ssskkkksss') },
      o: { 10: L('sssskkssss'), 11: L('sssskkssss') }, aberta: { 10: FEL[10], 11: FEL[11] } };
  }
  function amassa(r, tira) {   // mais baixo e mais largo: tira 2 linhas do miolo e duplica as 2 colunas do meio
    return ['..................', '..................'].concat(r.filter(function (x, i) { return tira.indexOf(i) < 0 }).map(function (x) { return x.slice(0, 8) + x[7] + x[8] + x.slice(8) }));
  }
  function estica(r, repete, corta) {   // mais alto e mais fino: repete 2 linhas do miolo e tira 2 colunas
    var o = []; r.forEach(function (x, i) { o.push(x); if (repete.indexOf(i) >= 0) o.push(x) });
    return o.map(function (x) { var s = ''; for (var j = 0; j < x.length; j++) if (corta.indexOf(j) < 0) s += x[j]; return s });
  }
  function marina(olhos, boca, modo) {
    var chave = 'M' + olhos + boca + modo; if (cache[chave]) return cache[chave];
    var r = troca(troca(MB, OLHOS[olhos]), BOCA[boca]);
    if (modo === 'amassa') r = amassa(r, [5, 18]); else if (modo === 'estica') r = estica(r, [5, 18], [3, 12]);
    return tela(chave, r, MC);
  }
  function pixel(feliz, modo) {
    var chave = 'P' + feliz + modo; if (cache[chave]) return cache[chave];
    var r = feliz ? PXF : PXB;
    if (modo === 'amassa') r = amassa(r, [4, 10]); else if (modo === 'estica') r = estica(r, [4, 10], [7, 8]);
    return tela(chave, r, PXC);
  }
  function rafaCabeca(feliz) { return tela('R' + feliz, (feliz ? RFF : RFB).slice(0, 14), RFC) }

  /* ---------- roteiro (segundos) ---------- */
  // 0–13.6 ateliê e a ideia · 13.6–22 a loja online · 22–34.2 ninguém aparece (close no 0, dias, mensagem)
  // 34.2–44.6 chegam o Pixel e o Rafa (placas com nome) · 44.6–50 o anúncio na cidade · 50–54.4 o primeiro pedido · 55 título
  var PISCADAS = [3.75, 4.55, 6.55, 8.75, 10.15, 13.1, 15.6, 18.0, 26.8, 28.1, 32.5, 39.6, 43.2, 52.9];
  function estadoMarina(t) {
    var s = { olhos: 'base', boca: 'base', modo: '', dy: Math.sin(t * 2.4) > .6 ? -1 : 0 };
    if (t < 5) s.olhos = 'baixo';
    else if (t < 5.9) { s.olhos = 'feliz'; s.boca = 'aberta' }
    else if (t < 7) { }
    else if (t < 8.6) { s.boca = t < 7.6 ? 'neutra' : 'triste'; if (t > 7.6) s.dy += kf(t, [[7.6, 0], [8.0, 2, 'sai'], [8.6, 1]]) }
    else if (t < 11) { s.olhos = 'pensa'; s.boca = t < 9.8 ? 'triste' : 'neutra' }
    else if (t < 11.6) { s.olhos = 'surpresa'; s.boca = 'o'; if (t < 11.15) { s.modo = 'amassa'; s.dy = 0 } }
    else if (t < 13.6) {
      s.olhos = 'feliz'; s.boca = 'aberta'; s.dy = 0;
      if (t < 11.75) s.modo = 'amassa';
      else if (t < 12.05) { s.modo = 'estica'; s.dy = kf(t, [[11.75, 0], [12.05, -16, 'sai']]) }
      else if (t < 12.42) s.dy = kf(t, [[12.05, -16], [12.15, -17, 'sai'], [12.42, 0, 'entra']]);
      else if (t < 12.57) s.modo = 'amassa';
      else s.dy = kf(t, [[12.57, 0], [12.68, -3, 'sai'], [12.8, 0, 'entra']]);
    }
    else if (t < 22.0) { if (t > 19.4) { s.olhos = 'feliz'; s.boca = 'aberta' } }   // monta a loja olhando o notebook
    else if (t < 30.3) {   // ninguém aparece; os dias passam… e ela murcha
      s.boca = t < 27.4 ? 'base' : t < 28.4 ? 'neutra' : 'triste';
      if (t > 29.0) s.dy += kf(t, [[29.0, 0], [29.4, 2, 'sai'], [30.3, 1]]);
    }
    else if (t < 34.2) { s.olhos = 'baixo'; s.boca = t < 30.8 ? 'triste' : 'o' }      // lê a mensagem no celular
    else if (t < 36.9) { s.olhos = 'pensa'; s.boca = 'neutra' }
    else if (t < 37.9) { s.olhos = 'surpresa'; s.boca = 'o' }
    else if (t < 41.4) { }
    else if (t < 44.6) { s.olhos = 'feliz'; s.boca = 'aberta' }
    else if (t < 50.0) { }
    else if (t < 50.45) { s.olhos = 'surpresa'; s.boca = 'o' }
    else { s.olhos = 'feliz'; s.boca = 'aberta'; var pulo = pula(t, 50.5); s.modo = pulo.modo; s.dy = pulo.dy; if (t > 51.7) { var p2 = pula(t, 51.7); s.modo = p2.modo; s.dy = p2.dy } }
    if (s.olhos !== 'feliz' && s.olhos !== 'surpresa' && PISCADAS.some(function (p) { return t > p && t < p + .12 })) s.olhos = 'pisca';
    return s;
  }
  function pula(t, t0) {   // antecipação → sobe esticado → cai → amassa → pronto (1,1 s)
    var d = t - t0;
    if (d < 0 || d > 1.1) return { modo: '', dy: 0 };
    if (d < .14) return { modo: 'amassa', dy: 0 };
    if (d < .4) return { modo: 'estica', dy: kf(d, [[.14, 0], [.4, -12, 'sai']]) };
    if (d < .7) return { modo: '', dy: kf(d, [[.4, -12], [.48, -13, 'sai'], [.7, 0, 'entra']]) };
    if (d < .84) return { modo: 'amassa', dy: 0 };
    return { modo: '', dy: 0 };
  }
  function estadoPixel(t) {   // nasce da tela do notebook, pousa em cima da tampa, se sacode e acena
    if (t < 36.9 || (t > 44.6 && t < 50.0)) return null;
    var s = { feliz: false, modo: '', x: 226, y: 0, esc: 1, gira: 0 };
    if (t < 37.7) { var p = (t - 36.9) / .8; s.esc = .25 + .75 * E.sai(p); s.y = (1 - p) * 14 - Math.sin(p * Math.PI) * 30; s.modo = p < .55 ? 'estica' : ''; s.gira = (1 - E.sai(p)) * Math.PI * 2; return s }
    if (t < 37.85) { s.modo = 'amassa'; return s }
    if (t < 38.25) { s.x += Math.sin(t * 70) * 1.2; return s }
    s.feliz = true;
    var p1 = pula(t, 38.3), p2 = pula(t, 39.2), p3 = pula(t, 50.58), p4 = pula(t, 51.78), pp = [p1, p2, p3, p4].filter(function (q) { return q.modo || q.dy })[0];
    if (pp) { s.modo = pp.modo; s.y = pp.dy * 1.2 }
    else if (Math.sin(t * 2.6 + 1) > .7) s.y = -1;
    return s;
  }

  /* ---------- montagem e laço ---------- */
  var aberta = null;
  function abrir(op) {
    op = op || {};
    if (aberta) return aberta;
    if (!window.PERSONAGEM_MAPA) return null;
    if (!MB) prepara();
    if (!document.getElementById('it-css')) { var st = document.createElement('style'); st.id = 'it-css'; st.textContent = CSS; document.head.appendChild(st) }
    var fundo = null, cena = document.createElement('div'); cena.className = 'it-cena';
    cena.innerHTML = '<canvas></canvas>' + (op.alvo ? '' : '<button class="it-fechar" data-it="fechar">✕ ' + T('Fechar', 'Cerrar') + '</button>') + '<button class="it-pular">' + T('Pular ⏭', 'Saltar ⏭') + '</button>' +
      '<div class="it-titulo"><div class="it-turma"><div>' + PERSONAGEM('marina', 8) + '</div><div>' + PERSONAGEM('rafa', 8) + '</div><div>' + PERSONAGEM('pixel', 8, 'feliz') + '</div></div>' +
      '<h1>Lojinha da Marina</h1><p>' + T('A jornada da Marina começa aqui.', 'El camino de Marina empieza aquí.') + '</p>' +
      '<div class="it-botoes"><button class="prim" data-it="comecar">' + T('Começar', 'Empezar') + '</button><button class="sec" data-it="denovo">' + T('↺ Ver de novo', '↺ Ver de nuevo') + '</button></div></div>' +
      '<div class="it-barra"><i></i></div>';
    if (op.alvo) { op.alvo.appendChild(cena) }
    else { fundo = document.createElement('div'); fundo.className = 'it-fundo'; fundo.appendChild(cena); document.body.appendChild(fundo); requestAnimationFrame(function () { fundo.classList.add('on') }) }
    var cv = cena.querySelector('canvas'), ctxTela = cv.getContext('2d'), ctx = ctxTela;
    var offA = document.createElement('canvas'), offB = document.createElement('canvas');
    var tit = cena.querySelector('.it-titulo'), barra = cena.querySelector('.it-barra i');
    var t = 0, ult = performance.now(), rodando = true, vivo = true;

    function px(x, y, w, h, cor) { ctx.fillStyle = cor; ctx.fillRect(x, y, w, h) }
    function sprite(img, x, y, esc) { ctx.drawImage(img, x, y, img.width * esc, img.height * esc) }
    function texto(s, x, y, tam, cor, peso, alinha) { ctx.font = (peso || 700) + ' ' + tam + 'px "Segoe UI", system-ui, sans-serif'; ctx.fillStyle = cor; ctx.textAlign = alinha || 'left'; ctx.textBaseline = 'middle'; ctx.fillText(s, x, y) }
    function caixaRedonda(x, y, w, h, r, cor) { ctx.fillStyle = cor; ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h); ctx.fill() }

    var CHAO = 230, MX = 192, MTOPO = 196;
    var ESTRELAS = [[52, 30], [64, 52], [78, 26], [96, 64], [120, 30], [58, 80], [126, 74], [88, 40], [70, 70], [114, 88]];
    var POEIRA = []; (function () { var r = sorteio(7); for (var i = 0; i < 16; i++) POEIRA.push([r(), r(), r()]) })();
    var CONFETE = []; (function () { var r = sorteio(11), cs = ['#FFD65A', '#E2577A', '#2F6FD6', '#2BB37A', '#7357FF']; for (var i = 0; i < 34; i++) CONFETE.push({ a: -Math.PI / 2 + (r() - .5) * 2.2, v: 55 + r() * 55, c: cs[i % 5], g: r() }) })();
    var LUA = tela('lua', (function () { var l = []; for (var y = -7; y <= 7; y++) { var s = ''; for (var x = -7; x <= 7; x++) s += x * x + y * y > 49 ? '.' : (x === -2 && y === -1) || (x === 2 && y === 3) || (x === 3 && y === -3) || (x === 3 && y === -2) ? 'c' : x + y > 5 ? 'C' : 'L'; l.push(s) } return l })(), { L: '#F6ECCB', C: '#E6D7AC', c: '#D2C192' });

    /* ===== cena do ateliê (cenas 1, 3, 4, 5, 6 e o fim) ===== */
    function camAtelie(t) {
      var cx = kf(t, [[0, 90], [1.2, 90], [3.4, 186], [5.9, 186], [7.2, 246], [8.4, 246], [10.6, 192], [12.4, 192], [13.4, 192, 'sai'], [13.6, 192], [14.8, 210], [16.2, 226], [22.0, 226], [23.2, 230], [25.0, 230], [26.2, 205], [34.2, 205], [35.2, 212], [44.6, 212], [49.6, 205], [54.4, 205]]);
      var cy = kf(t, [[0, 66], [1.2, 66], [3.4, 196], [5.9, 196], [7.2, 186], [8.4, 186], [10.6, 199], [12.4, 199], [13.4, 192, 'sai'], [13.6, 192], [14.8, 205], [16.2, 210], [22.0, 210], [23.2, 203], [25.0, 203], [26.2, 200], [34.2, 200], [35.2, 198], [44.6, 198], [49.6, 200], [54.4, 200]]);
      var z = kf(t, [[0, 1.3], [1.2, 1.3], [3.4, 1.22], [5.9, 1.22], [7.2, 1.0], [8.4, 1.0], [10.6, 2.1], [12.4, 2.1], [13.4, 1.15, 'sai'], [13.6, 1.15], [14.8, 1.6], [16.2, 7.2], [22.0, 7.2], [23.2, 10.5], [25.0, 10.5], [26.2, 1.7], [34.2, 1.7], [35.2, 1.9], [44.6, 1.9], [49.6, 1.75], [51.2, 1.95], [54.4, 1.8]]);
      cy += Math.min(0, estadoMarina(t).dy) * .6;   // a câmera acompanha um pouco os pulos
      var tremor = 0; [12.42, 51.2, 52.4].forEach(function (q) { if (t > q && t < q + .6) tremor += Math.sin(t * 90) * 1.4 * Math.exp(-(t - q) * 9) });
      return { x: cx + tremor, y: cy, z: z };
    }

    function cenaAtelie(t, W, H) {
      var c = camAtelie(t), S = W / 320 * c.z;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.imageSmoothingEnabled = false;
      ctx.setTransform(S, 0, 0, S, W / 2 - c.x * S, H / 2 - c.y * S); ctx.imageSmoothingEnabled = false;

      var ideia = kf(t, [[11.2, 0], [12.3, 1, 'sai'], [21.4, 1], [22.6, 0]]);
      var dia = t > 26.4 && t < 29.0 ? .5 - .5 * Math.cos((t - 26.4) / 2.6 * 3 * Math.PI * 2) : 0;   // 3 dias passando
      var manha = kf(t, [[49.4, 0], [50.0, 1]]);
      var lum = kf(t, [[8.6, 1], [10.6, .55], [11.2, .55], [11.8, 1.1], [49.4, 1.1], [50.0, .25]]) * (1 - dia * .85) * (1 + .035 * Math.sin(t * 23) * Math.sin(t * 7.3));

      // parede (lisa): noite → quente na ideia → dia/noite passando → manhã
      var topo = mistura(mistura(mistura('#16213F', '#2A1F4E', ideia), '#5F86C4', dia), '#86AEE0', manha);
      var base = mistura(mistura(mistura('#26375F', '#6A3F66', ideia), '#A9C7E8', dia), '#F4CDA8', manha);
      var gp = ctx.createLinearGradient(0, -40, 0, CHAO); gp.addColorStop(0, topo); gp.addColorStop(1, base);
      px(-200, -100, 800, CHAO + 100, gp);

      // janela com lua (só no começo da intro aparece no quadro)
      var gc = ctx.createLinearGradient(0, 22, 0, 100); gc.addColorStop(0, mistura('#0B1430', '#9CC8F2', manha)); gc.addColorStop(1, mistura('#22386E', '#FFD9B0', manha));
      px(44, 22, 88, 78, gc);
      if (manha < 1) {
        ctx.save(); ctx.beginPath(); ctx.rect(44, 22, 88, 78); ctx.clip(); ctx.globalAlpha = 1 - manha;
        var lua = ctx.createRadialGradient(110, 44, 2, 110, 44, 34); lua.addColorStop(0, 'rgba(243,231,194,.35)'); lua.addColorStop(1, 'rgba(243,231,194,0)');
        px(44, 22, 88, 78, lua); sprite(LUA, 103, 37, 1);
        ESTRELAS.forEach(function (e, i) { ctx.globalAlpha = (1 - manha) * (.35 + .65 * Math.abs(Math.sin(t * (1.1 + i * .23) + i))); px(e[0], e[1], 1, 1, '#FFFFFF') });
        ctx.globalAlpha = .1 * (1 - manha); ctx.fillStyle = '#C9D6F2';
        [[(t * 4) % 120 - 30, 58, 34, 6], [(t * 2.5 + 60) % 120 - 30, 34, 26, 5]].forEach(function (n) { ctx.beginPath(); ctx.ellipse(44 + n[0] + n[2] / 2, n[1], n[2] / 2, n[3] / 2, 0, 0, 7); ctx.fill() });
        ctx.globalAlpha = 1; ctx.restore();
      }
      px(40, 18, 96, 4, '#3B2A22'); px(40, 100, 96, 4, '#3B2A22'); px(40, 18, 4, 86, '#3B2A22'); px(132, 18, 4, 86, '#3B2A22');
      px(86, 22, 3, 78, '#3B2A22'); px(44, 59, 88, 3, '#3B2A22'); px(36, 104, 104, 4, '#5A4033');

      // calendário na parede (os dias passando)
      var dias = t < 27.0 ? 12 : t < 27.86 ? 13 : t < 28.73 ? 14 : 15, vira = [27.0, 27.86, 28.73].map(function (q) { return t > q - .16 && t < q + .16 ? Math.abs(t - q) / .16 : 1 }).reduce(function (a, b) { return Math.min(a, b) });
      var luzCal = Math.max(dia, manha, ideia * .5); px(150, 154, 18, 20, mistura('#7D89A6', '#EEF2F8', luzCal)); px(150, 154, 18, 5, mistura('#8A3E58', '#E2577A', luzCal)); px(150, 154, 18, 1, '#B83C5E');
      ctx.save(); ctx.translate(159, 159); ctx.scale(1, vira); texto(String(dias), 0, 7.5, 9, mistura('#2A3550', '#16294A', luzCal), 800, 'center'); ctx.restore();
      px(149, 154, 1, 20, 'rgba(0,0,0,.15)');

      // prateleira cheia (camisetas lado a lado, sem empilhar)
      px(266, 112, 4, CHAO - 112, '#5A4033'); px(372, 112, 4, CHAO - 112, '#5A4033');
      [142, 178, 214].forEach(function (y) { px(266, y, 110, 4, '#7A5640'); px(266, y, 110, 1, '#9A7050') });
      [['#2F6FD6', '#173C80'], ['#E2577A', '#8E2A48'], ['#2BB37A', '#16684A'], ['#F2B632', '#8E6418']].forEach(function (cc, i) { sprite(produto(recolore(CANECA, 'w', 'X'), 'caneca' + i, cc[0], cc[1]), 272 + i * 24, 128, 2) });
      [['#E2577A', '#8E2A48'], ['#2F6FD6', '#173C80'], ['#2BB37A', '#16684A'], ['#F2B632', '#8E6418'], ['#7357FF', '#3F2A9E']].forEach(function (cc, i) { sprite(produto(CAMISA, 'cam' + i, cc[0], cc[1]), 270 + i * 21, 166, 2) });
      [['#C9A27A', '#7A5A3A'], ['#2F6FD6', '#173C80'], ['#E98A3C', '#8E4A18'], ['#2BB37A', '#16684A'], ['#E2577A', '#8E2A48']].forEach(function (cc, i) { sprite(produto(SACOLA, 'sac' + i, cc[0], cc[1]), 272 + i * 20, 198, 2) });
      px(300, 214, 34, 16, '#A98258'); px(300, 214, 34, 2, '#C9A27A'); px(316, 214, 2, 16, '#8C6A46');
      px(-200, CHAO, 800, 120, mistura('#141D36', '#4A3B52', manha));

      // a ideia: clarão e raios ATRÁS da Marina (contraluz)
      var m = estadoMarina(t), ideiaPos = null;
      if (t > 11.15 && t < 22.2) {
        var e = kf(t, [[11.15, 0], [11.36, 1.28, 'sai'], [11.5, .9], [11.64, 1.04], [11.75, 1], [13.4, 1], [14.0, 0, 'entra']]);
        var lx = MX, ly = 174 + m.dy;
        ideiaPos = { x: lx, y: ly, e: e, gira: .35 * Math.exp(-(t - 11.15) * 5) * Math.sin((t - 11.15) * 26) };
        ctx.globalCompositeOperation = 'screen';
        var clarao = kf(t, [[11.22, 0], [11.45, .75, 'sai'], [12.6, .35], [14.0, .15], [22.0, 0]]), rc = kf(t, [[11.22, 10], [12.4, 170, 'sai']]);
        var gcl = ctx.createRadialGradient(lx, ly, 4, lx, ly, rc); gcl.addColorStop(0, 'rgba(255,214,120,' + clarao + ')'); gcl.addColorStop(.45, 'rgba(255,170,90,' + (clarao * .35) + ')'); gcl.addColorStop(1, 'rgba(255,170,90,0)');
        ctx.fillStyle = gcl; ctx.fillRect(lx - 260, ly - 260, 520, 520);
        if (e > 0) { var halo = ctx.createRadialGradient(lx, ly, 2, lx, ly, 24 * e); halo.addColorStop(0, 'rgba(255,236,150,.7)'); halo.addColorStop(1, 'rgba(255,236,150,0)'); ctx.fillStyle = halo; ctx.fillRect(lx - 40, ly - 40, 80, 80) }
        var raio = kf(t, [[11.3, 0], [11.6, 1, 'sai'], [12.9, 1], [13.4, 0]]);
        if (raio > 0) for (var k = 0; k < 8; k++) { var a = k * Math.PI / 4 + t * .6, r1 = 12 + 2 * Math.sin(t * 6 + k), r2 = r1 + 5 * raio;
          for (var s = r1; s < r2; s += 1) px(Math.round(lx + Math.cos(a) * s), Math.round(ly + Math.sin(a) * s), 1, 1, 'rgba(255,233,160,' + (.85 * raio) + ')') }
        ctx.globalCompositeOperation = 'source-over';
      }

      // Marina (atrás da mesa)
      var img = marina(m.olhos, m.boca, m.modo);
      sprite(img, MX - img.width, MTOPO + 50 - img.height * 2 + m.dy, 2);

      // mesa, potes, caneca, pincel
      px(88, CHAO, 166, 4, '#C99063'); px(88, CHAO + 2, 166, 3, '#B07A4E'); px(88, CHAO + 5, 166, 60, '#8A5A3C'); px(88, CHAO + 5, 166, 2, '#6E452D');
      px(86, CHAO, 2, 70, '#22304A'); px(254, CHAO, 2, 70, '#22304A');
      [['#2F6FD6', 0], ['#E2577A', 1], ['#2BB37A', 2]].forEach(function (p) { sprite(produto(POTE, 'pote' + p[1], p[0]), 220 + p[1] * 11, CHAO - 8, 2) });
      var pint = Math.floor(kf(t, [[2.6, 0], [4.9, PINTURA.length, 'lin']]));
      if (pint >= PINTURA.length) sprite(tela('caneca-pronta', CANECA_PRONTA), 146, CHAO - 14, 2);
      else { var cg = CANECA.map(function (r) { return r.split('') }); for (var i = 0; i < pint; i++) cg[PINTURA[i][0]][PINTURA[i][1]] = PINTURA[i][2]; sprite(tela('caneca-pintada' + pint, cg.map(function (r) { return r.join('') })), 146, CHAO - 14, 2) }
      if (t > 2.3 && t < 5.05) {
        var alvo = PINTURA[Math.min(PINTURA.length - 1, pint)], bx = 146 + alvo[1] * 2, by = CHAO - 14 + alvo[0] * 2, sobe = t > 4.9 ? (t - 4.9) * 60 : 0;
        sprite(tela('pincel', PINCEL), bx - 1 + Math.sin(t * 16) * 1.2, by - 11 - sobe + Math.cos(t * 16) * .8, 2);
      }
      if (t > 5 && t < 5.9) {
        var pb = (t - 5) / .9; ctx.globalAlpha = 1 - pb;
        [[142, 214], [170, 210], [160, 204], [146, 228]].forEach(function (q, i) { var r = 1 + Math.round(Math.sin(pb * 3.1 + i) * 2); px(q[0] - r, q[1], r * 2 + 1, 1, '#FFE9A8'); px(q[0], q[1] - r, 1, r * 2 + 1, '#FFE9A8') });
        ctx.globalAlpha = 1;
      }

      // celular na mesa (vibra com a mensagem da amiga)
      if (t > 22.0 && t < 44.6) {
        var vib = t > 30.0 && t < 30.7 ? Math.sin(t * 95) * .9 : 0;
        sprite(tela('celular', CELULAR), 170 + vib, CHAO - 3, 2);
        if (t > 30.0 && t < 34.2) { px(171 + vib, CHAO - 2, 10, 1, 'rgba(160,220,255,.9)'); if (t < 30.7) { ctx.globalAlpha = .7; px(184, CHAO - 7, 1, 3, '#C9D6F2'); px(186, CHAO - 8, 1, 5, '#C9D6F2'); ctx.globalAlpha = 1 } }
      }

      // notebook: entra deslizando e vira a tela da loja
      if (t > 13.6) notebook(t, kf(t, [[13.6, 150], [14.6, 0, 'volta']]));

      // caixa do pedido (cai na mesa de manhã) + confete
      if (t > 49.9) {
        var cy0 = kf(t, [[49.9, -60], [50.25, 0, 'entra'], [50.35, -4, 'sai'], [50.45, 0, 'entra']]);
        sprite(tela('caixa', CAIXA), 120, CHAO - 16 + cy0, 2);
        if (t > 50.25 && t < 52.2) { var d = t - 50.25; CONFETE.forEach(function (q) { var x = 132 + Math.cos(q.a) * q.v * d, y = CHAO - 16 + Math.sin(q.a) * q.v * d + 120 * d * d;
          ctx.globalAlpha = Math.max(0, 1 - d / 1.95); px(Math.round(x), Math.round(y), 2, q.g > .5 ? 2 : 1, q.c) }); ctx.globalAlpha = 1 }
      }
      sprite(tela('luminaria', LUMINARIA), 98, CHAO - 38, 2);

      // luz da luminária: sai da boca inteira da cúpula (x 99–117, y 202)
      ctx.globalCompositeOperation = 'lighter';
      var cone = ctx.createLinearGradient(0, 202, 0, CHAO + 6); cone.addColorStop(0, 'rgba(255,214,140,' + (.32 * lum) + ')'); cone.addColorStop(1, 'rgba(255,200,120,' + (.06 * lum) + ')');
      ctx.fillStyle = cone; ctx.beginPath(); ctx.moveTo(99, 202); ctx.lineTo(117, 202); ctx.lineTo(214, CHAO + 4); ctx.lineTo(84, CHAO + 4); ctx.closePath(); ctx.fill();
      var poca = ctx.createRadialGradient(150, CHAO, 2, 150, CHAO, 70); poca.addColorStop(0, 'rgba(255,205,130,' + (.28 * lum) + ')'); poca.addColorStop(1, 'rgba(255,205,130,0)');
      px(60, 150, 220, 120, poca);
      POEIRA.forEach(function (d) { var y = 205 + ((d[1] * 25 - t * (2 + d[2] * 3)) % 25 + 25) % 25, x = 100 + d[0] * 16 + (y - 205) * (1.4 + d[0] * 1.6) + Math.sin(t + d[2] * 6) * 2;
        ctx.globalAlpha = .55 * lum * (.4 + .6 * Math.abs(Math.sin(t * 2 + d[0] * 9))); px(Math.round(x), Math.round(y), 1, 1, '#FFE9B8') });
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';

      // o Pixel (sai da tela, pousa em cima da tampa do notebook, acena)
      var p = estadoPixel(t);
      if (p) {
        var pimg = pixel(p.feliz, p.modo), w2 = pimg.width * 2, h2 = pimg.height * 2;
        ctx.save(); ctx.translate(p.x, 197 + p.y - h2 / 2 * p.esc); ctx.rotate(p.gira); ctx.scale(p.esc, p.esc); sprite(pimg, -w2 / 2, -h2 / 2, 2); ctx.restore();
      }

      // a lâmpada da ideia, na frente de tudo
      if (ideiaPos && ideiaPos.e > 0) { ctx.save(); ctx.translate(ideiaPos.x, ideiaPos.y); ctx.rotate(ideiaPos.gira); ctx.scale(ideiaPos.e, ideiaPos.e); sprite(tela('lampada', LAMPADA), -6.75, -8.25, 1.5); ctx.restore() }

      // tela: vinheta e entrada no escuro
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      var vin = kf(t, [[0, .55], [8.4, .5], [10.6, .78], [11.2, .78], [12, .35], [14.8, .45], [16.2, .2], [25.0, .2], [26.2, .45], [49.4, .45], [50.0, .25]]);
      var gv = ctx.createRadialGradient(W / 2, H * .46, H * .25, W / 2, H / 2, W * .72); gv.addColorStop(0, 'rgba(4,8,20,0)'); gv.addColorStop(1, 'rgba(4,8,20,' + vin + ')');
      ctx.fillStyle = gv; ctx.fillRect(0, 0, W, H);
      var escuro = kf(t, [[0, 1], [1.1, 0, 'sai']]); if (escuro > 0) { ctx.fillStyle = 'rgba(4,8,20,' + escuro + ')'; ctx.fillRect(0, 0, W, H) }
    }

    // notebook na mesa: tampa com tela lisa (interface moderna) e base em pixel
    function notebook(t, dx) {
      var x = 204 + dx, y = 197;
      px(x - 3, CHAO - 3, 48, 3, '#3A4566'); px(x - 3, CHAO - 3, 48, 1, '#56638C'); px(x - 4, CHAO - 1, 50, 1, '#22304A');
      caixaRedonda(x, y, 42, 28, 2, '#2B3550');
      var sx = x + 2, sy = y + 2, sw = 38, sh = 24, liga = kf(t, [[14.6, 0], [15.2, 1, 'sai']]);
      px(sx, sy, sw, sh, '#0E1630');
      if (liga <= 0) return;
      ctx.save(); ctx.beginPath(); ctx.rect(sx, sy, sw, sh); ctx.clip(); ctx.globalAlpha = liga;
      px(sx, sy, sw, sh, '#F4F7FC');
      // cabeçalho da loja
      var cab = kf(t, [[16.6, -6], [17.0, 0, 'volta']]);
      px(sx, sy + cab, sw, 5, '#16294A'); texto('Lojinha da Marina', sx + 2, sy + 2.6 + cab, 2.3, '#FFFFFF', 800);
      // contador de visitas (silêncio)
      // (no close, ele "atualiza" — pisca três vezes — e continua 0)
      if (t > 22.0) { var vis = kf(t, [[22.0, 0], [22.5, 1]]), pis = [23.6, 24.2, 24.8].some(function (q) { return t > q && t < q + .14 }) ? .25 : 1; ctx.globalAlpha = liga * vis * pis; var ped = t > 50.25; caixaRedonda(sx + 25, sy + 1, 12, 3, 1.5, ped ? '#2BB37A' : '#E2577A'); texto(ped ? T('1 pedido', '1 pedido') : T('0 visitas', '0 visitas'), sx + 31, sy + 2.6, 1.6, '#FFFFFF', 700, 'center'); ctx.globalAlpha = liga }
      // vitrine: 4 produtos caem e quicam
      var itens = [['u', CANECA_PRONTA], ['cam', null], ['sac', null], ['caneca1', null]];
      for (var i = 0; i < 4; i++) {
        var t0 = 17.2 + i * .6, q = kf(t, [[t0, -12], [t0 + .45, 0, 'volta']]), al = kf(t, [[t0, 0], [t0 + .2, 1]]);
        var cxp = sx + 2 + (i % 2) * 11, cyp = sy + 7 + Math.floor(i / 2) * 9 + q;
        ctx.globalAlpha = liga * al; caixaRedonda(cxp, cyp, 10, 8, 1.2, '#FFFFFF'); px(cxp, cyp + 7, 10, 1, '#E2E8F0');
        var im = i === 0 ? tela('caneca-pronta', CANECA_PRONTA) : i === 1 ? produto(CAMISA, 'cam0', '#E2577A', '#8E2A48') : i === 2 ? produto(SACOLA, 'sac1', '#2F6FD6', '#173C80') : produto(recolore(CANECA, 'w', 'X'), 'caneca2', '#2BB37A', '#16684A');
        sprite(im, cxp + 5 - im.width * .3, cyp + 3.6 - im.height * .3, .6);
        px(cxp + 1.5, cyp + 6.2, 4, .7, '#C5CFE0');
      }
      ctx.globalAlpha = liga;
      // Instagram: post entra pela direita, coração pula
      if (t > 19.8) {
        var ig = kf(t, [[19.8, 20], [20.3, 0, 'volta']]), gx = sx + 24 + ig, gy = sy + 7;
        var grad = ctx.createLinearGradient(gx, gy, gx + 12, gy + 16); grad.addColorStop(0, '#F9CE34'); grad.addColorStop(.5, '#EE2A7B'); grad.addColorStop(1, '#6228D7');
        caixaRedonda(gx - .6, gy - .6, 13.2, 16.2, 1.8, grad); caixaRedonda(gx, gy, 12, 15, 1.4, '#FFFFFF');
        px(gx + 1, gy + 1, 10, 9, '#FFF4E8'); sprite(tela('caneca-pronta', CANECA_PRONTA), gx + 6 - CANECA_PRONTA[0].length * .35, gy + 5.5 - CANECA_PRONTA.length * .35, .7);
        var cor = kf(t, [[20.6, 0], [20.8, 1.4, 'sai'], [20.95, 1]]);
        if (cor > 0) texto('♥', gx + 2.5, gy + 12, 3 * cor, '#EE2A7B', 800, 'center');
        px(gx + 5, gy + 11.6, 5, .7, '#C5CFE0'); px(gx + 5, gy + 13, 3.5, .7, '#E2E8F0');
      }
      // o Pixel sai da tela: brilho
      var brilho = kf(t, [[36.4, 0], [36.9, 1, 'sai'], [37.5, 0]]);
      if (brilho > 0) { ctx.globalAlpha = brilho; px(sx, sy, sw, sh, '#FFFFFF'); ctx.globalAlpha = liga }
      // o Rafa chega de leve: só um ícone de chamada no canto da tela (quem fala é o balão)
      if (t > 40.4 && t < 44.6) {
        var ic = kf(t, [[40.4, 0], [40.7, 1, 'volta']]), cxr = sx + 33.5, cyr = sy + 19.5;
        if (t < 41.2) { var an = (t - 40.4) % .6 / .6; ctx.strokeStyle = 'rgba(43,179,122,' + (1 - an) + ')'; ctx.lineWidth = .5; ctx.beginPath(); ctx.arc(cxr, cyr, 2.6 + an * 3, 0, 7); ctx.stroke() }
        ctx.fillStyle = '#2BB37A'; ctx.beginPath(); ctx.arc(cxr, cyr, 2.6 * ic, 0, 7); ctx.fill();
        if (ic > .5) texto('🎧', cxr, cyr + .2, 2.6 * ic, '#FFFFFF', 700, 'center');
      }
      ctx.restore(); ctx.globalAlpha = 1;
    }

    /* ===== cena da cidade: o anúncio chegando nos celulares ===== */
    var PREDIOS = (function () { var r = sorteio(23), cam = []; [[.3, '#A8B8DE', 40, 80], [.6, '#7083BF', 55, 105], [1, '#3D4C85', 30, 70]].forEach(function (cfg, li) {
      var x = -40, lista = []; while (x < 420) { var w = 18 + Math.floor(r() * 22), h = cfg[2] + Math.floor(r() * (cfg[3] - cfg[2])); lista.push({ x: x, w: w, h: h, jan: Math.floor(r() * 1000) }); x += w + 2 } cam.push({ par: cfg[0], cor: cfg[1], lista: lista, li: li }) }); return cam })();
    var FONES = [[58, 74], [108, 58], [160, 50], [212, 58], [262, 74]];
    function cenaCidade(t, W, H) {
      var S = W / 320, px0 = kf(t, [[44.6, 0], [50.0, 30, 'lin']]);
      ctx.setTransform(S, 0, 0, S, 0, 0); ctx.imageSmoothingEnabled = false;
      var ceu = ctx.createLinearGradient(0, 0, 0, 180); ceu.addColorStop(0, '#8EC5F2'); ceu.addColorStop(.7, '#FFD9B0'); ceu.addColorStop(1, '#FFC79A');
      px(0, 0, 320, 180, ceu);
      var sol = ctx.createRadialGradient(250 - px0 * .2, 70, 4, 250 - px0 * .2, 70, 70); sol.addColorStop(0, 'rgba(255,240,200,.9)'); sol.addColorStop(1, 'rgba(255,240,200,0)'); px(0, 0, 320, 180, sol);
      PREDIOS.forEach(function (cam) { cam.lista.forEach(function (b) { var x = Math.round(b.x - px0 * cam.par), top = 180 - b.h; px(x, top, b.w, b.h, cam.cor);
        // janelas: poucas, fixas, só nos prédios da frente, com um brilho lento e suave
        if (cam.li === 2) for (var yy = top + 5; yy < 174; yy += 8) for (var xx = x + 3; xx < x + b.w - 3; xx += 6) if ((b.jan + xx * 7 + yy * 13) % 7 === 0) {
          ctx.globalAlpha = .62 + .18 * Math.sin(t * .9 + (b.jan + xx + yy) * .7); px(xx, yy, 2, 2, '#FFE5A0'); ctx.globalAlpha = 1 } }) });
      // celulares flutuando: acendem um a um com o anúncio da caneca
      FONES.forEach(function (f, i) {
        var li = 45.6 + i * .55, liga = kf(t, [[li, 0], [li + .25, 1, 'sai']]), bob = Math.sin(t * 2.2 + i) * 1.6, fx = f[0] - px0 * .15, fy = f[1] + bob;
        if (liga > 0) { var anel = (t - li) % 1.4; ctx.strokeStyle = 'rgba(255,255,255,' + Math.max(0, .7 - anel * .5) + ')'; ctx.lineWidth = .8; ctx.beginPath(); ctx.arc(fx, fy, 14 + anel * 22, 0, 7); ctx.stroke() }
        caixaRedonda(fx - 10, fy - 17, 20, 34, 3, '#1E2740');
        px(fx - 8.5, fy - 14.5, 17, 29, mistura('#2A3550', '#FFFFFF', liga));
        if (liga > 0) {
          ctx.globalAlpha = liga; px(fx - 8.5, fy - 14.5, 17, 4, '#16294A'); texto('Lojinha', fx - 7.5, fy - 12.5, 2.3, '#FFFFFF', 800);
          px(fx - 7, fy - 9, 14, 11, '#FFF4E8'); var cn = tela('caneca-pronta', CANECA_PRONTA); sprite(cn, fx - cn.width * .55, fy - 3.5 - cn.height * .55, 1.1);
          caixaRedonda(fx - 6, fy + 5, 12, 4, 2, '#FFD65A'); texto(T('Comprar', 'Comprar'), fx, fy + 7.1, 2.2, '#16294A', 800, 'center');
          ctx.globalAlpha = 1;
        }
      });
      // a caixa do pedido sai do celular do meio e voa para a Marina
      if (t > 48.4) { var p = kf(t, [[48.4, 0], [49.4, 1, 'entra']]), bx = 160 + p * 190, by = 50 - Math.sin(p * Math.PI) * 30 + p * 60;
        ctx.save(); ctx.translate(bx, by); ctx.rotate(p * 5); sprite(tela('caixa', CAIXA), -12, -8, 2); ctx.restore() }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      var gv = ctx.createRadialGradient(W / 2, H * .46, H * .25, W / 2, H / 2, W * .72); gv.addColorStop(0, 'rgba(4,8,20,0)'); gv.addColorStop(1, 'rgba(4,8,20,.25)'); ctx.fillStyle = gv; ctx.fillRect(0, 0, W, H);
    }

    /* ===== composição: cenas, transição em quadradinhos, clarão do título ===== */
    var BLOCOS = (function () { var r = sorteio(5), b = []; for (var j = 0; j < 18; j++) for (var i = 0; i < 32; i++) b.push([i, j, r() * .75 + (i / 32) * .25]); return b })();
    function quadros(t, a, b, de, ate) {   // vai de "a" para "b" trocando quadradinho por quadradinho
      var W = cv.width, H = cv.height, p = (t - de) / (ate - de);
      [offA, offB].forEach(function (o) { if (o.width !== W || o.height !== H) { o.width = W; o.height = H } });
      ctx = offA.getContext('2d'); a(t, W, H); ctx = offB.getContext('2d'); b(t, W, H); ctx = ctxTela;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.imageSmoothingEnabled = false; ctx.drawImage(offA, 0, 0);
      var bw = W / 32, bh = H / 18;
      BLOCOS.forEach(function (q) { if (p > q[2]) { var x = Math.floor(q[0] * bw), y = Math.floor(q[1] * bh), w = Math.ceil(bw) + 1, h = Math.ceil(bh) + 1; ctx.drawImage(offB, x, y, w, h, x, y, w, h) } });
    }
    function desenha(t) {
      var W = cv.width, H = cv.height;
      if (t < 44.6 || t >= 50.0) cenaAtelie(t, W, H);
      else if (t < 45.2) quadros(t, cenaAtelie, cenaCidade, 44.6, 45.2);
      else if (t < 49.4) cenaCidade(t, W, H);
      else quadros(t, cenaCidade, cenaAtelie, 49.4, 50.0);
      var branco = kf(t, [[54.35, 0], [54.95, 1, 'entra']]);
      if (branco > 0 && t < FIM + .1) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.fillStyle = 'rgba(255,248,230,' + branco + ')'; ctx.fillRect(0, 0, W, H) }
    }

    /* ===== interface por cima: legendas, notificações, chat ===== */
    var UI = [
      { a: 2.4, b: 6.3, leg: T('A Marina faz canecas, camisetas e ecobags.', 'Marina hace tazas, camisetas y ecobags.') },
      { a: 7.3, b: 9.7, leg: T('Mas quase ninguém fica sabendo.', 'Pero casi nadie se entera.') },
      { a: 9.9, b: 12.2, leg: T('E se mais gente visse?', '¿Y si más gente lo viera?'), cls: 'pensa' },
      { a: 16.8, b: 21.6, leg: T('Ela cria a Lojinha online e o Instagram.', 'Crea la Lojinha online y el Instagram.') },
      { a: 23.0, b: 26.2, leg: T('Mas ninguém aparece.', 'Pero nadie aparece.') },
      { a: 30.3, b: 34.0, notif: { ic: '💬', fundo: '#2BB37A', app: T('Mensagens · agora', 'Mensajes · ahora'), tit: T('Amiga', 'Amiga'), txt: T('Coloca o Pixel e anuncia na Meta! 💡', '¡Pon el Pixel y anuncia en Meta! 💡') } },
      { a: 34.4, b: 36.6, leg: T('Pixel? O que é isso?', '¿Pixel? ¿Qué es eso?'), cls: 'pensa' },
      { a: 38.3, b: 41.4, placa: { nome: 'Pixel', cor: '#2F6FD6', txt: T('Ele conta para a Meta o que acontece no site.', 'Le cuenta a Meta lo que pasa en el sitio.') } },
      { a: 40.8, b: 44.2, placa: { nome: 'Rafa', cor: '#7357FF', txt: T('Do suporte da Meta: ajuda a Marina em cada fase.', 'Del soporte de Meta: ayuda a Marina en cada fase.') } },
      { a: 41.0, b: 44.4, chat: { txt: T('Calma, a gente te ajuda em cada passo.', 'Tranquila, te ayudamos en cada paso.') } },
      { a: 45.8, b: 49.2, leg: T('O anúncio chega a quem procura.', 'El anuncio llega a quien busca.') },
      { a: 50.25, b: 53.4, notif: { ic: '🛍️', fundo: '#FFD65A', app: T('Lojinha da Marina · agora', 'Lojinha da Marina · ahora'), tit: T('Pedido recebido!', '¡Pedido recibido!'), txt: T('1 caneca azul pintada à mão', '1 taza azul pintada a mano') } },
      { a: 51.6, b: 54.4, leg: T('Essa é a jornada que você vai acompanhar.', 'Este es el camino que vas a acompañar.') }
    ];
    var vivos = {};
    function ui(t) {
      UI.forEach(function (u, i) {
        var dentro = t >= u.a && t < u.b, el = vivos[i];
        if (dentro && !el) {
          el = document.createElement('div');
          if (u.leg) { el.className = 'it-leg' + (u.cls ? ' ' + u.cls : ''); el.innerHTML = u.leg.split(' ').map(function (w, k) { return '<span style="transition-delay:' + (k * 60) + 'ms">' + w + ' </span>' }).join('') }
          else if (u.notif) { el.className = 'it-notif'; el.innerHTML = '<span class="ic" style="background:' + u.notif.fundo + '">' + u.notif.ic + '</span><span><small>' + u.notif.app + '</small><b>' + u.notif.tit + '</b>' + u.notif.txt + '</span>' }
          else if (u.placa) { el.className = 'it-placa'; el.style.setProperty('--cor', u.placa.cor); el.innerHTML = '<i></i><span><b>' + u.placa.nome + '</b>' + u.placa.txt + '</span>' }
          else { el.className = 'it-chat'; el.innerHTML = '<span class="bal">' + u.chat.txt + '</span><span class="av">' + PERSONAGEM('rafa', 3, 'feliz') + '</span>' }
          cena.appendChild(el); vivos[i] = el;
          requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add('in') }) });
        } else if (!dentro && el) {
          delete vivos[i]; el.classList.remove('in'); el.classList.add('out'); setTimeout(function () { el.remove() }, 500);
        }
      });
    }
    function limpaUI() { for (var k in vivos) { vivos[k].remove(); delete vivos[k] } }

    /* ===== controles ===== */
    function vai(novo) { t = Math.max(0, Math.min(DUR, novo)); limpaUI() }
    function fecha() {
      if (!vivo) return; vivo = false; aberta = null; removeEventListener('keydown', tecla); removeEventListener('resize', ajusta);
      if (fundo) { fundo.classList.remove('on'); setTimeout(function () { fundo.remove() }, 400) } else cena.remove();
      if (op.aoFechar) op.aoFechar();
    }
    cena.querySelector('.it-pular').onclick = function () { vai(FIM) };
    cena.addEventListener('click', function (e) {
      var b = e.target.closest('[data-it]'); if (!b) return;
      if (b.getAttribute('data-it') === 'denovo') { vai(0); rodando = true }
      else if (b.getAttribute('data-it') === 'fechar') fecha()
      else { if (op.aoComecar) op.aoComecar(); else fecha() }
    });
    cena.querySelector('.it-barra').onclick = function (e) { var b = this.getBoundingClientRect(); vai((e.clientX - b.left) / b.width * DUR) };
    function tecla(e) {
      if (e.key === 'Escape' && fundo) fecha();
      if (e.code === 'Space') { e.preventDefault(); rodando = !rodando }
      if (e.key === 'ArrowRight') vai(t + 1); if (e.key === 'ArrowLeft') vai(t - 1);
    }
    addEventListener('keydown', tecla);
    function ajusta() { var r = cv.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1); cv.width = Math.max(320, Math.round(r.width * d)); cv.height = Math.max(180, Math.round(r.height * d)) }
    addEventListener('resize', ajusta); ajusta();
    (function laco(agora) {
      if (!vivo) return;
      var dt = Math.min(.05, (agora - ult) / 1000); ult = agora;
      if (rodando && t < DUR) t = Math.min(DUR, t + dt);
      desenha(t); ui(t);
      tit.classList.toggle('on', t >= FIM);
      barra.style.width = (t / DUR * 100) + '%';
      requestAnimationFrame(laco);
    })(ult);
    aberta = { vai: vai, fecha: fecha, pausa: function () { rodando = false }, toca: function () { rodando = true }, t: function () { return t } };
    return aberta;
  }
  window.INTRO = { abrir: abrir, duracao: DUR };
})();
