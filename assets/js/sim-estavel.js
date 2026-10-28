/* Tela estável nos simuladores: cada simulador redesenha a tela inteira a cada clique (innerHTML), e as áreas com rolagem
   (menu, conteúdo, janelas) voltavam para o topo — a tela "pulava" e parecia piscar (André, 28/10/2026).
   Aqui: guarda a rolagem de cada área enquanto a pessoa rola e devolve logo depois do redesenho, antes de a tela ser pintada
   (o MutationObserver roda antes da pintura). Clique em menu, aba ou link de navegação = tela nova, começa do topo. */
(function () {
  var pos = {};
  function chave(el) { return el.getAttribute('data-t') || el.id || (el.className && typeof el.className === 'string' ? el.className.split(' ')[0] : '') }
  document.addEventListener('scroll', function (e) {
    var el = e.target; if (!el || el === document || !el.getAttribute) return;
    var k = chave(el); if (k) pos[k] = el.scrollTop;
  }, true);
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-tab],[data-ir],.ss-it,.abas button,.sim-menu button,.sim-menu a,.pf-sub,.pf-item,nav a')) pos = {};
  }, true);
  window.addEventListener('hashchange', function () { pos = {} });
  function devolve() {
    for (var k in pos) {
      if (!pos[k]) continue;
      var el = document.querySelector('[data-t="' + k + '"]') || document.getElementById(k) || document.getElementsByClassName(k)[0];
      if (el && el.scrollTop !== pos[k] && el.scrollHeight > el.clientHeight) el.scrollTop = pos[k];
    }
  }
  function liga() { new MutationObserver(devolve).observe(document.body, { childList: true, subtree: true }) }
  if (document.body) liga(); else document.addEventListener('DOMContentLoaded', liga);
})();
