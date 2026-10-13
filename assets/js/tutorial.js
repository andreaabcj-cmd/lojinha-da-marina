/* Player dos tutoriais passo a passo (prints reais, censurados).
   Holofote + zoom suave + cursor animado no ponto do clique. Dados: assets/tutoriais/<idioma>/dados.js */
(function () {
  var D = window.TUTORIAL_PT; if (!D) return;
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var TXT = { passo: 'Passo', de: 'de', ant: '◀ Anterior', prox: 'Próximo ▶', tocar: '▶ Tocar sozinho', pausar: '⏸ Pausar',
    inteira: '🔍 Tela inteira', zoom: '🔍 Aproximar', erro: '⚠️ Erro comum', alt: '🧭 Caminho alternativo', fim: 'Fim desta etapa 🎉',
    proxEtapa: 'Próxima etapa', voltar: '← Todos os tutoriais', porque: 'Por que isso importa', check: 'Elementos que a loja precisa ter',
    anot: 'Pixel', emBreve: 'em breve', parcial: 'em gravação', pronto: 'pronto', prints: 'prints', aviso: '' };

  /* idioma dos textos (PT | ES). Os prints continuam os mesmos. */
  var LANG = 'pt';
  try { LANG = new URLSearchParams(location.search).get('lang') || localStorage.getItem('loja.tuLang') || 'pt' } catch (e) { }
  var ES = window.TUTORIAL_ES;
  if (LANG === 'es' && ES) {
    Object.keys(ES.ui).forEach(function (k) { TXT[k] = ES.ui[k] });
    D = { etapas: D.etapas.map(function (e) { return Object.assign({}, e, ES.etapas[e.id] || {}) }),
          passos: D.passos.map(function (p) { return Object.assign({}, p, ES.passos[p.id] || {}) }) };
  } else LANG = 'pt';
  function seletorIdioma() {
    if (!ES) return '';
    return '<div class="tu-lang" role="group" aria-label="Idioma"><button data-lang="pt" class="' + (LANG === 'pt' ? 'on' : '') + '">PT</button><button data-lang="es" class="' + (LANG === 'es' ? 'on' : '') + '">ES</button></div>' +
      (TXT.aviso ? '<p class="tu-aviso-lang">🌎 ' + TXT.aviso + '</p>' : '');
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-lang]'); if (!b) return;
    try { localStorage.setItem('loja.tuLang', b.getAttribute('data-lang')) } catch (e) { }
    var u = new URL(location.href); u.searchParams.delete('lang'); location.href = u.href;
  });

  function mascote(px) {
    var rows = ['....uuuuuuu.....', '...uuuuuuuuuU...', '..UUUUUUUUUUUUU.', '...dddddddddd...', '...dssssssssd...', '...ssessssesss..', '...ssssssssss...', '...sssmmmmsss...', '....ssssssss....', '...wwwwwwwwww...', '..wwaawwwwaaww..', '..swaaaaaaaapwwp', '..swaaaaaaaapwkp', '...waaaaaaaapppp', '...aaaaaaaaaa...'];
    var P = { u: '#2F6FD6', U: '#1F4FA8', d: '#2A1E1A', s: '#F4CBA2', e: '#22304A', m: '#D0605A', w: '#fff', a: '#1F3A6E', p: '#A0703A', k: '#22304A' }, o = '';
    rows.forEach(function (r, y) { for (var x = 0; x < r.length; x++) { var c = r[x]; if (c !== '.') o += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + P[c] + '"/>' } });
    return '<svg viewBox="0 0 16 15" width="' + px + '" height="' + Math.round(px * 15 / 16) + '" shape-rendering="crispEdges">' + o + '</svg>';
  }
  var CURSOR = '<svg viewBox="0 0 12 16" width="30" height="40" shape-rendering="crispEdges"><path fill="#16294A" d="M0 0h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2H7v1h1v2h1v2H7v-1H6v-2H5v-1H4v1H3v1H2v1H0z"/><path fill="#fff" d="M1 2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H6v1h1v2h1v1H7v-2H6v-2H5v-1H4v1H3v1H2v1H1z"/></svg>';

  var params = new URLSearchParams(location.search);
  var raiz = $('#tutorial'); if (!raiz) return;

  /* ---------- lista de tutoriais (hub) ---------- */
  if (raiz.getAttribute('data-modo') === 'lista') {
    var blocos = {}; D.etapas.forEach(function (e) { (blocos[e.bloco] = blocos[e.bloco] || []).push(e) });
    raiz.innerHTML = seletorIdioma() + Object.keys(blocos).map(function (b) {
      return '<section class="tu-bloco"><h2>' + b + '</h2><div class="tu-cards">' + blocos[b].map(function (e) {
        var n = D.passos.filter(function (p) { return p.etapa === e.id }).length, ok = e.status !== 'em breve';
        return (ok ? '<a class="tu-card" href="tutorial.html?e=' + e.id + '">' : '<div class="tu-card off">') +
          '<span class="tu-num">' + e.id + '</span><b>' + e.titulo + '</b><p>' + e.resumo + '</p>' +
          '<span class="tu-st ' + e.status.replace(' ', '-') + '">' + (TXT[e.status === 'em breve' ? 'emBreve' : e.status] || e.status) + (n ? ' · ' + n + ' ' + TXT.prints : '') + '</span>' +
          (ok ? '</a>' : '</div>');
      }).join('') + '</div></section>';
    }).join('');
    return;
  }

  /* ---------- player de uma etapa ---------- */
  var eid = params.get('e') || D.etapas[0].id;
  var etapa = D.etapas.filter(function (e) { return e.id === eid })[0] || D.etapas[0];
  var passos = D.passos.filter(function (p) { return p.etapa === etapa.id });
  var idxEtapa = D.etapas.indexOf(etapa), proxima = D.etapas[idxEtapa + 1];
  var base = window.TUTORIAL_BASE || 'assets/tutoriais/pt/';
  function src(p) { return /^(data:|https?:)/.test(p.img) ? p.img : base + p.img }

  raiz.innerHTML =
    '<div class="tu-topo-linha"><a class="tu-voltar" href="tutoriais.html">' + TXT.voltar + '</a>' + seletorIdioma() + '</div>' +
    '<p class="tu-bloco-nome">' + etapa.bloco + '</p><h1><span class="tu-num">' + etapa.id + '</span> ' + etapa.titulo + '</h1>' +
    '<p class="lead">' + etapa.resumo + '</p>' +
    '<div class="tu-player" tabindex="0" aria-label="Player do tutorial">' +
    '  <div class="tu-barra"><span id="tuCont"></span><span id="tuTipo" class="tu-tipo"></span><div class="tu-pontos" id="tuPontos"></div></div>' +
    '  <div class="tu-palco" id="tuPalco"><div class="tu-cam" id="tuCam"><img id="tuImg" alt=""/><div class="tu-holo" id="tuHolo"></div>' +
    '    <div class="tu-onda" id="tuOnda"></div><div class="tu-cursor" id="tuCursor">' + CURSOR + '</div></div></div>' +
    '  <div class="tu-fala"><div class="tu-mascote">' + mascote(64) + '</div><div class="tu-balao"><b id="tuTit"></b><p id="tuTexto"></p><p class="tu-dica" id="tuDica"></p></div></div>' +
    '  <div class="tu-ctrl"><button class="btn ghost" id="tuAnt">' + TXT.ant + '</button><button class="btn amarelo" id="tuPlay">' + TXT.tocar + '</button>' +
    '    <button class="btn ghost" id="tuZoom">' + TXT.inteira + '</button><button class="btn" id="tuProx">' + TXT.prox + '</button></div>' +
    '</div>' +
    (etapa.porque ? '<div class="tu-info"><h2>💡 ' + TXT.porque + '</h2><ul>' + etapa.porque.map(function (t) { return '<li>' + t + '</li>' }).join('') + '</ul></div>' : '') +
    (etapa.checklist ? '<div class="tu-info"><h2>🧰 ' + TXT.check + '</h2><ul class="tu-check">' + etapa.checklist.map(function (t) { return '<li>' + t + '</li>' }).join('') + '</ul></div>' : '') +
    (proxima ? '<p class="tu-prox-etapa">' + TXT.proxEtapa + ': ' + (proxima.status === 'em breve' ? '<span>' + proxima.id + ' · ' + proxima.titulo + ' (' + TXT.emBreve + ')</span>' : '<a class="btn" href="tutorial.html?e=' + proxima.id + '">' + proxima.id + ' · ' + proxima.titulo + ' →</a>') + '</p>' : '');

  var img = $('#tuImg'), cam = $('#tuCam'), palco = $('#tuPalco'), holo = $('#tuHolo'), cur = $('#tuCursor'), onda = $('#tuOnda');
  var i = 0, aproximar = true, tocando = null, timers = [], curPos = { x: .5, y: .5 };
  $('#tuPontos').innerHTML = passos.map(function (p, k) { return '<button data-k="' + k + '" class="' + (p.tipo !== 'passo' ? p.tipo : '') + '" title="' + (p.titulo || p.id) + '"></button>' }).join('');
  passos.forEach(function (p) { var im = new Image(); im.src = src(p) });   // pré-carrega

  function limpa() { timers.forEach(clearTimeout); timers = [] }
  function depois(ms, f) { timers.push(setTimeout(f, ms)) }

  // palco com altura fixa (cabe no projetor); a "câmera" leva o print inteiro e se move/aproxima por cima
  function enquadra(p) {
    var a = p.alvo, W = palco.clientWidth, Hp = Math.round(Math.min(W * 0.6, window.innerHeight * 0.56)), Hi = W * p.h / p.w;
    palco.style.height = Hp + 'px'; cam.style.width = W + 'px'; cam.style.height = Hi + 'px';
    var cheio = Math.min(1, Hp / Hi), z, tx, ty;
    if (!aproximar) { z = cheio; tx = (W - W * z) / 2; ty = (Hp - Hi * z) / 2 }
    else {
      // zoom suave: o alvo ocupa ~40% do palco, sem passar de 2x
      // ...e nunca além da nitidez real do print (p.w = pixels reais da imagem)
      z = Math.max(cheio, Math.min(2, 1.15 * p.w / W, 0.4 * W / (a[2] * W), 0.4 * Hp / (a[3] * Hi)));
      var cx = (a[0] + a[2] / 2) * W, cy = (a[1] + a[3] / 2) * Hi;
      tx = W * z <= W ? (W - W * z) / 2 : Math.min(0, Math.max(W - W * z, W / 2 - cx * z));
      ty = Hi * z <= Hp ? (Hp - Hi * z) / 2 : Math.min(0, Math.max(Hp - Hi * z, Hp / 2 - cy * z));
    }
    cam.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + z + ')';
    cam.style.setProperty('--z', z);
  }

  function mostra(k, animar) {
    limpa(); geracao++; i = Math.max(0, Math.min(passos.length - 1, k)); var p = passos[i], a = p.alvo;
    $('#tuCont').textContent = TXT.passo + ' ' + (i + 1) + ' ' + TXT.de + ' ' + passos.length;
    var t = $('#tuTipo'); t.textContent = p.tipo === 'erro' ? TXT.erro : p.tipo === 'alternativo' ? TXT.alt : ''; t.className = 'tu-tipo ' + p.tipo;
    [].forEach.call($('#tuPontos').children, function (b, n) { b.classList.toggle('on', n === i); b.classList.toggle('visto', n < i) });
    $('#tuTit').textContent = p.titulo || ''; $('#tuTexto').textContent = p.texto;
    var dica = $('#tuDica'); dica.innerHTML = p.dica ? '<span>💬 ' + TXT.anot + ':</span> ' + p.dica : ''; dica.style.display = p.dica ? '' : 'none';
    $('#tuAnt').disabled = i === 0; $('#tuProx').textContent = i === passos.length - 1 ? TXT.fim : TXT.prox;
    // 1) troca a imagem já enquadrada no alvo anterior, 2) aproxima, 3) acende o holofote, 4) cursor anda e clica
    holo.classList.remove('on'); onda.classList.remove('on'); cur.classList.remove('on');
    cam.classList.toggle('sem-anim', !animar);
    img.src = src(p);
    holo.style.left = a[0] * 100 + '%'; holo.style.top = a[1] * 100 + '%'; holo.style.width = a[2] * 100 + '%'; holo.style.height = a[3] * 100 + '%';
    holo.classList.toggle('erro', p.tipo === 'erro');
    var alvo = { x: a[0] + a[2] / 2, y: a[1] + a[3] / 2 };
    var vai = function () {
      enquadra(p);
      depois(animar ? 750 : 0, function () {
        holo.classList.add('on');
        if (!p.clique) return;
        cur.classList.add('on');
        pula(curPos, alvo, animar ? 900 : 0, function () {
          curPos = alvo;
          onda.style.left = alvo.x * 100 + '%'; onda.style.top = alvo.y * 100 + '%';
          onda.classList.remove('on'); void onda.offsetWidth; onda.classList.add('on');
        });
      });
    };
    if (img.complete && img.naturalWidth) vai(); else img.onload = function () { img.onload = null; vai() };
  }

  // cursor com saltinhos (boing-boing) até o alvo
  var geracao = 0;
  function pula(de, para, ms, fim) {
    var g = ++geracao;
    if (!ms) { posCursor(para); fim(); return }
    var ini = Date.now(), saltos = 3;
    (function passo() {
      if (g !== geracao) return;   // outro passo começou: abandona esta animação
      var f = Math.min(1, (Date.now() - ini) / ms), e = f < .5 ? 2 * f * f : 1 - Math.pow(-2 * f + 2, 2) / 2;
      var hop = Math.abs(Math.sin(f * Math.PI * saltos)) * (1 - f) * 0.05;
      posCursor({ x: de.x + (para.x - de.x) * e, y: de.y + (para.y - de.y) * e - hop });
      if (f < 1) setTimeout(passo, 16); else fim();
    })();
  }
  function posCursor(p) { cur.style.left = p.x * 100 + '%'; cur.style.top = p.y * 100 + '%' }

  function toca(on) {
    clearInterval(tocando); tocando = null; $('#tuPlay').textContent = on ? TXT.pausar : TXT.tocar;
    if (on) tocando = setInterval(function () { if (i < passos.length - 1) mostra(i + 1, true); else toca(false) }, 6500);
  }
  $('#tuAnt').onclick = function () { toca(false); mostra(i - 1, true) };
  $('#tuProx').onclick = function () { toca(false); if (i < passos.length - 1) mostra(i + 1, true); else if (proxima && proxima.status !== 'em breve') location.href = 'tutorial.html?e=' + proxima.id };
  $('#tuPlay').onclick = function () { if (tocando) toca(false); else { toca(true); if (i === passos.length - 1) mostra(0, true) } };
  $('#tuZoom').onclick = function () { aproximar = !aproximar; this.textContent = aproximar ? TXT.inteira : TXT.zoom; enquadra(passos[i]) };
  $('#tuPontos').onclick = function (ev) { var k = ev.target.getAttribute('data-k'); if (k !== null) { toca(false); mostra(+k, true) } };
  $('.tu-player').onkeydown = function (ev) { if (ev.key === 'ArrowRight') $('#tuProx').click(); if (ev.key === 'ArrowLeft') $('#tuAnt').click(); if (ev.key === ' ') { ev.preventDefault(); $('#tuPlay').click() } };
  window.addEventListener('resize', function () { enquadra(passos[i]) });
  posCursor(curPos); mostra(0, true);
})();
