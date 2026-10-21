/* Vida da plataforma (aprovado em 21/10/2026, a partir do laboratório visual):
   - tema Mola (padrão) ou Vidro: classe no <html>, guardada no navegador ('plat.tema'); o botão fica no topo (plataforma.js)
   - cartões que inclinam com inércia e brilho que segue o mouse; ondinha no clique dos botões
   - confete com física (substitui MOV.confete)
   - Início: a tela do Gerenciador se montando (cursor fantasma) e o painel com os números da plataforma
   Com "menos animação" ligado no sistema, só o confete some (regra da Lojinha desde 13/10). */
(function () {
  var html = document.documentElement;
  function lsGet(k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v) } catch (e) { return d } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } }
  if (lsGet('plat.tema', 'mola') === 'vidro') html.classList.add('vidro');
  /* computador mais fraco (comum no trabalho): sem vidro fosco e sem desfoque animado, que pesam; o movimento continua */
  try { if ((navigator.deviceMemory && navigator.deviceMemory <= 4) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || lsGet('plat.leve', false)) html.classList.add('leve') } catch (e) { }
  var reduz = false; try { reduz = matchMedia('(prefers-reduced-motion: reduce)').matches } catch (e) { }

  /* ---------- motor: um quadro para tudo ---------- */
  var loops = [], tPrev = performance.now(), T = 0;
  (function quadro(t) { var dt = Math.min(.05, (t - tPrev) / 1000); tPrev = t; T += dt; for (var i = loops.length - 1; i >= 0; i--) { if (loops[i](dt, T) === false) loops.splice(i, 1) } requestAnimationFrame(quadro) })(tPrev);
  function Mola(v, k) { this.v = v; this.alvo = v; this.vel = 0; this.k = k || 90; this.c = 2 * Math.sqrt(this.k) }   // amortecida: chega sem passar do ponto
  Mola.prototype.passo = function (dt) { this.vel += (-this.k * (this.v - this.alvo) - this.c * this.vel) * dt; this.v += this.vel * dt; return this.v };
  Mola.prototype.parada = function () { return Math.abs(this.v - this.alvo) < .01 && Math.abs(this.vel) < .01 };
  var sai = function (t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t) }, vai = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2 };
  function tween(dur, cada, curva) { return new Promise(function (ok) { var t0 = performance.now(); (function f(t) { var k = Math.min(1, (t - t0) / dur); cada((curva || sai)(k)); if (k < 1) requestAnimationFrame(f); else ok() })(t0) }) }
  function conta(el, alvo, dur) { return tween(dur || 1800, function (k) { el.textContent = Math.round(alvo * k).toLocaleString('pt-BR') }) }

  /* ---------- tema ---------- */
  function tema(qual) { html.classList.toggle('vidro', qual === 'vidro'); lsSet('plat.tema', qual); [].forEach.call(document.querySelectorAll('.pl-tema [data-tema]'), function (b) { b.classList.toggle('on', b.getAttribute('data-tema') === qual) }) }
  document.addEventListener('click', function (e) { var b = e.target.closest && e.target.closest('.pl-tema [data-tema]'); if (b) tema(b.getAttribute('data-tema')) });

  /* a entrada (.mv-entra) prende o transform no fim: solta, para o hover e a inclinação funcionarem */
  document.addEventListener('animationend', function (e) { if (e.animationName === 'vSobe' && e.target.classList && e.target.classList.contains('mv-entra')) { e.target.classList.remove('mv-entra'); e.target.style.removeProperty('--i') } });

  /* ---------- cartões que inclinam com inércia ---------- */
  var SEL = '.porta-card, a.item, .trilha-aba', estados = typeof WeakMap === 'function' ? new WeakMap() : null;
  function est(el) {
    var s = estados && estados.get(el); if (s) return s;
    s = { el: el, rx: new Mola(0, 70), ry: new Mola(0, 70), z: new Mola(0, 70), gx: new Mola(50, 90), gy: new Mola(50, 90), vivo: false };
    if (!el.querySelector(':scope > .v-brilho')) { var g = document.createElement('span'); g.className = 'v-brilho'; el.appendChild(g) }
    el.classList.add('v-tilt'); estados && estados.set(el, s); return s;
  }
  function anima(s) {
    if (s.vivo) return; s.vivo = true;
    loops.push(function (dt) {
      if (!s.el.isConnected) { s.vivo = false; return false }
      var rx = s.rx.passo(dt), ry = s.ry.passo(dt), z = s.z.passo(dt);
      s.el.style.transform = 'perspective(900px) translateY(' + (-z * 4) + 'px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
      s.el.style.setProperty('--mx', s.gx.passo(dt) + '%'); s.el.style.setProperty('--my', s.gy.passo(dt) + '%');
      if (s.rx.parada() && s.ry.parada() && s.z.parada() && s.z.alvo === 0) { s.el.style.transform = ''; s.vivo = false; return false }
    });
  }
  document.addEventListener('mousemove', function (e) {
    var el = e.target.closest && e.target.closest(SEL); if (!el || el.classList.contains('mv-entra')) return;
    var s = est(el), r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    s.ry.alvo = (x - .5) * 9; s.rx.alvo = (.5 - y) * 9; s.z.alvo = 1; s.gx.alvo = x * 100; s.gy.alvo = y * 100; anima(s);
  });
  document.addEventListener('mouseout', function (e) {
    var el = e.target.closest && e.target.closest(SEL); if (!el || (e.relatedTarget && el.contains(e.relatedTarget))) return;
    var s = estados && estados.get(el); if (s) { s.rx.alvo = s.ry.alvo = s.z.alvo = 0; anima(s) }
  });

  /* ---------- ondinha no clique dos botões ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.btn'); if (!b || b.disabled) return;
    var r = b.getBoundingClientRect(), s = document.createElement('span'), d = Math.max(r.width, r.height) * 1.2;
    s.className = 'v-rip'; s.style.width = s.style.height = d + 'px'; s.style.left = (e.clientX - r.left - d / 2) + 'px'; s.style.top = (e.clientY - r.top - d / 2) + 'px';
    b.appendChild(s); setTimeout(function () { s.remove() }, 1100);
  });

  /* ---------- confete com física: sobe, freia no ar, cai balançando e some ---------- */
  function confete(origem, n) {
    if (reduz) return;
    var r = origem && origem.getBoundingClientRect ? origem.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 3, width: 0, height: 0 };
    var x0 = r.left + r.width / 2, y0 = r.top + Math.min(r.height / 2, 30), cores = ['#F2B632', '#2F6FD6', '#1E9E55', '#E0245E', '#5B3CC4', '#16294A'];
    for (var i = 0; i < (n || 32); i++) (function (i) {
      var c = document.createElement('i'); c.className = 'v-confete'; c.style.background = cores[i % cores.length]; document.body.appendChild(c);
      var a = -Math.PI / 2 + (Math.random() - .5) * 2.4, v = 240 + Math.random() * 280, vx = Math.cos(a) * v, vy = Math.sin(a) * v, X = x0, Y = y0, rot = Math.random() * 360, vr = (Math.random() - .5) * 540, vida = 0, fase = Math.random() * 6;
      loops.push(function (dt) {
        vida += dt; vy += 520 * dt; vx *= Math.pow(.25, dt); vy *= Math.pow(.6, dt); X += vx * dt + Math.sin(vida * 6 + fase) * .6; Y += vy * dt; rot += vr * dt;
        c.style.transform = 'translate(' + X + 'px,' + Y + 'px) rotate(' + rot + 'deg) scaleX(' + Math.cos(vida * 8 + fase).toFixed(2) + ')';
        c.style.opacity = Math.max(0, 1 - Math.max(0, vida - 1.2) / .8);
        if (vida > 2.1) { c.remove(); return false }
      });
    })(i);
  }
  function ligaMov() { if (window.MOV) window.MOV.confete = confete }
  ligaMov(); document.addEventListener('DOMContentLoaded', ligaMov);

  /* ---------- Início: a tela do Gerenciador se montando ---------- */
  var geracao = 0;
  function cenaMini(mini) {
    var cur = mini.querySelector('.v-cursor'), pos = { x: 300, y: 230 }, rastros = [];
    for (var i = 0; i < 7; i++) { var rr = document.createElement('i'); rr.className = 'v-rastro'; mini.appendChild(rr); rastros.push({ el: rr, x: pos.x, y: pos.y }) }
    function poe() { cur.style.transform = 'translate(' + pos.x + 'px,' + pos.y + 'px)' }
    loops.push(function () {
      if (!mini.isConnected) return false;
      var px = pos.x, py = pos.y;
      rastros.forEach(function (r, i) { r.x += (px - r.x) * .35; r.y += (py - r.y) * .35; var d = Math.hypot(pos.x - r.x, pos.y - r.y); r.el.style.transform = 'translate(' + (r.x + 3) + 'px,' + (r.y + 3) + 'px) scale(' + (1 - i / 8) + ')'; r.el.style.opacity = Math.min(.45, d / 60) * (1 - i / 7); px = r.x; py = r.y });
    });
    function centro(el, dx, dy) { var r = el.getBoundingClientRect(), m = mini.getBoundingClientRect(); return { x: r.left - m.left + (dx == null ? r.width / 2 : dx), y: r.top - m.top + (dy == null ? r.height / 2 : dy) } }
    function voa(b, dur) { var a = { x: pos.x, y: pos.y }, c = { x: (a.x + b.x) / 2 + (b.y - a.y) * .25, y: (a.y + b.y) / 2 - Math.abs(b.x - a.x) * .25 - 20 }; return tween(dur || 1300, function (k) { var u = 1 - k; pos.x = u * u * a.x + 2 * u * k * c.x + k * k * b.x; pos.y = u * u * a.y + 2 * u * k * c.y + k * k * b.y; poe() }, vai) }
    function clica() { var o = document.createElement('span'); o.className = 'v-onda'; o.style.left = pos.x + 'px'; o.style.top = pos.y + 'px'; mini.appendChild(o); setTimeout(function () { o.remove() }, 1100) }
    var espera = function (ms) { return new Promise(function (r) { setTimeout(r, ms) }) }, barras = [].slice.call(mini.querySelectorAll('.v-barras b')), barraOn = false;
    loops.push(function (dt, t) { if (!mini.isConnected) return false; if (barraOn) barras.forEach(function (b, i) { b.style.transform = 'scaleY(' + (1 + Math.sin(t * 1.4 + i * .7) * .04) + ')' }) });
    poe();
    async function roda() {
      var g = ++geracao, vivo = function () { return g === geracao && mini.isConnected }, cam = mini.querySelector('.v-camada'), menu = mini.querySelector('[data-v=menu]');
      cam.classList.add('some'); await espera(700); if (!vivo()) return;
      [].forEach.call(mini.querySelectorAll('.v-vira'), function (v) { v.classList.remove('on') }); mini.querySelector('.v-selo').classList.remove('on'); menu.classList.remove('ativo');
      barraOn = false; barras.forEach(function (b) { b.style.transform = 'scaleY(0)' });
      cam.classList.remove('some'); await espera(900); if (!vivo()) return;
      var vs = mini.querySelectorAll('.lado .v-vira'); for (var i = 0; i < vs.length; i++) { vs[i].classList.add('on'); await espera(160) }
      await voa(centro(menu, 40)); if (!vivo()) return;
      clica(); menu.classList.add('ativo'); await espera(450); if (!vivo()) return;
      mini.querySelector('[data-v=tit]').classList.add('on'); await espera(260);
      [].forEach.call(mini.querySelectorAll('.v-px .v-vira'), function (v, k) { setTimeout(function () { v.classList.add('on') }, k * 220) });
      await espera(700); if (!vivo()) return;
      await voa(centro(mini.querySelector('.v-px'), 110, 18), 1200); if (!vivo()) return;
      clica(); await espera(250); mini.querySelector('.v-selo').classList.add('on'); await espera(700); if (!vivo()) return;
      barras.forEach(function (b, k) { setTimeout(function () { tween(1300, function (v) { b.style.transform = 'scaleY(' + v + ')' }).then(function () { if (k === barras.length - 1) barraOn = true }) }, k * 90) });
      voa(centro(mini.querySelector('.v-barras'), 200, 55), 1600);
      await espera(6500); if (vivo()) roda();
    }
    roda();
  }
  /* ---------- Início: painel com a linha que se desenha e o brilho que corre ---------- */
  function cenaPainel(p) {
    var linha = p.querySelector('.linha'), cometa = p.querySelector('.cometa'), L = linha.getTotalLength(), nums = p.querySelector('.v-numeros');
    linha.style.strokeDasharray = L; linha.style.strokeDashoffset = L; cometa.style.strokeDasharray = '60 ' + L;
    tween(2400, function (k) { linha.style.strokeDashoffset = L * (1 - k) }, vai);
    [].forEach.call(p.querySelectorAll('[data-conta]'), function (b, i) { setTimeout(function () { conta(b, +b.getAttribute('data-conta'), 1800) }, 400 + i * 120) });
    var px = new Mola(0, 40), py = new Mola(0, 40), off = 0;
    p.addEventListener('mousemove', function (e) { var r = p.getBoundingClientRect(); px.alvo = ((e.clientX - r.left) / r.width - .5) * -12; py.alvo = ((e.clientY - r.top) / r.height - .5) * -8 });
    p.addEventListener('mouseleave', function () { px.alvo = py.alvo = 0 });
    loops.push(function (dt) { if (!p.isConnected) return false; off = (off + dt * 230) % (L + 60); cometa.style.strokeDashoffset = -off + 60; nums.style.transform = 'translate(' + px.passo(dt) + 'px,' + py.passo(dt) + 'px)' });
  }
  function onda() {   // a curva decorativa do painel (sem números: é só enfeite)
    var Y = [70, 62, 66, 54, 57, 44, 48, 36, 41, 30, 22, 27, 16, 10], W = 1000, H = 120, d = '', p = Y.map(function (y, i) { return [i * W / (Y.length - 1), y] });
    d = 'M' + p[0][0] + ' ' + p[0][1]; for (var i = 0; i < p.length - 1; i++) { var a = p[i], b = p[i + 1], m = (a[0] + b[0]) / 2; d += ' C' + m + ' ' + a[1] + ' ' + m + ' ' + b[1] + ' ' + b[0] + ' ' + b[1] }
    return '<svg viewBox="0 0 1000 120" preserveAspectRatio="none"><defs><linearGradient id="vGradArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><path class="area" d="' + d + ' L1000 120 L0 120 Z"/><path class="linha" d="' + d + '"/><path class="cometa" d="' + d + '"/></svg>';
  }
  function vitrine(T, numeros) {
    function vira(txt, extra) { return '<span class="v-vira"' + (extra || '') + '><span class="sk"></span><span class="tx">' + txt + '</span></span>' }
    var mini = '<div class="v-mini" aria-hidden="true"><div class="barra"><i></i><i></i><i></i><span>' + T({ pt: 'Gerenciador de Eventos', es: 'Administrador de eventos' }) + '</span></div><div class="v-camada">' +
      '<div class="lado"><div class="v-it"><b></b>' + vira(T({ pt: 'Conectar', es: 'Conectar' })) + '</div><div class="v-it" data-v="menu"><b></b>' + vira(T({ pt: 'Conjuntos', es: 'Conjuntos' })) + '</div><div class="v-it"><b></b>' + vira(T({ pt: 'Integrações', es: 'Integraciones' })) + '</div></div>' +
      '<div class="conteudo"><h3>' + vira('Pixel da Mari', ' data-v="tit"') + '</h3><div class="v-px">' + vira('ID') + '<code>' + vira('1779103133372149') + '</code><span class="v-selo"><i></i>' + T({ pt: 'PageView chegou', es: 'Llegó PageView' }) + '</span></div>' +
      '<div class="v-barras"><b style="height:30%"></b><b style="height:55%"></b><b style="height:40%"></b><b style="height:75%"></b><b style="height:60%"></b><b style="height:92%"></b><b style="height:70%"></b></div></div></div>' +
      '<div class="v-cursor"><svg width="22" height="22" viewBox="0 0 22 22"><path d="M3 2l15 8-7 2-3 7z" fill="#E0245E" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg></div></div>';
    var painel = '<div class="v-painel"><p class="tit">' + T({ pt: 'A Lojinha em números', es: 'La Lojinha en números' }) + '</p><p class="sub">' + T({ pt: 'o que já dá para estudar aqui', es: 'lo que ya se puede estudiar aquí' }) + '</p><div class="v-numeros">' +
      numeros.map(function (n) { return '<div class="v-num"><small>' + T(n[0]) + '</small><b data-conta="' + n[1] + '">0</b></div>' }).join('') + '</div>' + onda() + '</div>';
    return '<div class="vitrine">' + mini + painel + '</div>';
  }
  function depois(tela) {
    var mini = document.querySelector('.v-mini'); if (mini) cenaMini(mini);
    var p = document.querySelector('.v-painel'); if (p) cenaPainel(p);
  }

  window.VIDA = { tema: tema, confete: confete, vitrine: vitrine, depois: depois, atual: function () { return html.classList.contains('vidro') ? 'vidro' : 'mola' } };
})();
