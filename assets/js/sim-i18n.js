/* Tradução das telas dos simuladores (PT → ES), aplicada na hora em que a tela é desenhada.
   - Os simuladores são escritos em português; aqui um dicionário troca cada texto da tela pelo espanhol.
     Não mexe em nada que o código usa (data-t, classes, hash): só no texto que a pessoa lê.
   - Dicionários: window.SIM_ES = { 'texto em português': 'texto en español' } (arquivos assets/js/sim-es-*.js).
     A chave é o texto de UM nó de texto da tela, com espaços repetidos viram um só.
     Padrões com número/nome: window.SIM_ES_PADROES = [[/regex/, function (m) { return 'texto' }]].
   - Idioma = o mesmo da plataforma (localStorage "plat.lang"). Botão PT | ES na faixa amarela de cada simulador.
   - Modo coletor (só para quem monta o dicionário): abrir o simulador com ?coletar=1 → window.__coleta guarda todo texto visto
     (e em espanhol, window.__falta guarda o que ainda não tem tradução). */
(function () {
  if (window.SIMI18N) return;
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  var COLETAR = /[?&]coletar=1/.test(location.search);
  var norm = function (s) { return String(s).replace(/\s+/g, ' ').trim() };
  var temLetras = function (s) { return /[A-Za-zÀ-ÿ]{2,}/.test(s) };
  var feitos = new WeakMap();                    // nó → último valor que nós mesmos gravamos
  var coleta = window.__coleta = {}, falta = window.__falta = {};
  var ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];

  function traduz(t) {
    var k = norm(t), D = window.SIM_ES || {};
    if (!k) return null;
    if (Object.prototype.hasOwnProperty.call(D, k)) return D[k];
    var P = window.SIM_ES_PADROES || [];
    for (var i = 0; i < P.length; i++) { var m = k.match(P[i][0]); if (m) return P[i][1](m) }
    return null;
  }
  function troca(original, novo) { var ini = original.match(/^\s*/)[0], fim = original.match(/\s*$/)[0]; return ini + novo + fim }
  function fora(el) { return !el || /^(SCRIPT|STYLE|TEXTAREA|CODE|PRE)$/.test(el.tagName) || (el.closest && el.closest('.tg-balao,.tg-holo,.tg-recorte,#tgVolta,[data-sem-traduzir]')) }

  function no(n) {
    if (fora(n.parentNode)) return;
    var v = n.nodeValue; if (feitos.get(n) === v) return;
    var k = norm(v); if (!k) return;
    if (COLETAR && LANG === 'pt' && temLetras(k)) coleta[k] = 1;
    if (LANG !== 'es') return;
    var es = traduz(v);
    if (es != null) { var nv = troca(v, es); feitos.set(n, nv); n.nodeValue = nv }
    else if (temLetras(k)) falta[k] = 1;
  }
  function attrs(el) {
    if (fora(el)) return;
    ATTRS.forEach(function (a) {
      var v = el.getAttribute && el.getAttribute(a); if (!v) return; el.__tr = el.__tr || {}; if (el.__tr[a] === v) return; var k = norm(v);
      if (COLETAR && LANG === 'pt' && temLetras(k)) coleta[k] = 1;
      if (LANG !== 'es') return;
      var es = traduz(v); if (es != null) { el.__tr[a] = es; el.setAttribute(a, es) } else if (temLetras(k)) falta[k] = 1;
    });
    // valor inicial de campos de texto (nomes padrão como "Nova campanha de Vendas"); só se a pessoa ainda não mexeu
    if (el.tagName === 'INPUT' && /^(text|search|)$/.test(el.type || '') && el.getAttribute('value') && !el.__editado) {
      var vk = norm(el.getAttribute('value')); if (COLETAR && LANG === 'pt' && temLetras(vk)) coleta[vk] = 1;
      if (LANG === 'es' && !(el.__tr && el.__tr.value === el.getAttribute('value'))) { var ev = traduz(el.getAttribute('value')); if (ev != null) { el.__tr = el.__tr || {}; el.__tr.value = ev; el.value = ev; el.setAttribute('value', ev) } else if (temLetras(vk)) falta[vk] = 1 }
    }
  }
  function varre(raiz) {
    if (!raiz) return;
    if (raiz.nodeType === 3) { no(raiz); return }
    if (raiz.nodeType !== 1 || fora(raiz)) return;
    attrs(raiz);
    var w = document.createTreeWalker(raiz, NodeFilter.SHOW_ALL, null), n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) no(n); else if (n.nodeType === 1) attrs(n) }
  }
  var pendente = false;
  function agenda(muts) {
    muts.forEach(function (m) {
      if (m.type === 'characterData') no(m.target);
      else if (m.type === 'attributes') attrs(m.target);
      else m.addedNodes.forEach(varre);
    });
  }
  function toggle() {
    var f = document.querySelector('.sim-faixa'); if (!f || f.querySelector('.sim-lang')) return;
    var b = document.createElement('span'); b.className = 'sim-lang'; b.setAttribute('data-sem-traduzir', '1');
    b.style.cssText = 'margin-left:8px;display:inline-flex;gap:2px';
    ['pt', 'es'].forEach(function (l) {
      var a = document.createElement('button'); a.type = 'button'; a.textContent = l.toUpperCase();
      a.style.cssText = 'font:800 11px "Segoe UI",sans-serif;padding:2px 7px;border:2px solid #16294A;border-radius:6px;cursor:pointer;background:' + (l === LANG ? '#16294A;color:#fff' : '#fff;color:#16294A');
      a.onclick = function () { try { localStorage.setItem('plat.lang', JSON.stringify(l)) } catch (e) { } location.reload() };
      b.appendChild(a);
    });
    f.appendChild(b);
  }
  function inicia() {
    document.documentElement.lang = LANG === 'es' ? 'es' : 'pt-BR';
    varre(document.body); toggle();
    new MutationObserver(function (m) { agenda(m); toggle() }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    document.addEventListener('input', function (e) { if (e.target && e.target.tagName === 'INPUT') e.target.__editado = true }, true);
  }
  if (COLETAR) setInterval(function () {   // guarda o que foi visto (por simulador), para somar várias visitas
    try { var k = '__coleta:' + location.pathname.split('/').pop(), a = JSON.parse(localStorage.getItem(k) || '{}'); Object.keys(coleta).forEach(function (t) { a[t] = 1 }); localStorage.setItem(k, JSON.stringify(a)) } catch (e) { }
  }, 400);
  window.SIMI18N = { lang: LANG, traduz: traduz, coleta: coleta, falta: falta, varre: function () { varre(document.body) } };
  if (document.body) inicia(); else document.addEventListener('DOMContentLoaded', inicia);
})();
