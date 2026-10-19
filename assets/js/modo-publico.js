/* MODO PÚBLICO: no site publicado (GitHub Pages) as ABAS Simuladores e Laboratório ficam escondidas (menu do topo e cartões da página inicial).
   Nada mais muda: Módulos (com aulas, práticas guiadas e atendimento), Loja, Colas e as telas dos simuladores abertas pelas aulas continuam como estão.
   - No computador do André (localhost) tudo aparece. Para ver o modo público no computador: ?publico=1 (e ?publico=0 volta ao normal).
   - Para mostrar as abas de novo no site publicado: ESCONDER_ABAS = false (ou apagar este arquivo e as linhas "modo-publico.js" dos HTML). */
(function () {
  var ESCONDER_ABAS = true;
  var local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || location.protocol === 'file:';
  var q = new URLSearchParams(location.search), forca = null;
  try { if (q.get('publico') === '1') localStorage.setItem('modo.publico', '1'); if (q.get('publico') === '0') localStorage.removeItem('modo.publico'); forca = localStorage.getItem('modo.publico') === '1' } catch (e) { }
  var PUB = ESCONDER_ABAS && (!local || forca);
  var ABAS = /^(simuladores|laboratorio)\.html$/i;
  window.MODO_PUBLICO = PUB;
  window.PUB_ESCONDIDA = function (url) { return PUB && ABAS.test(String(url || '').split(/[?#]/)[0].split('/').pop()) };
  /* Conteúdo ainda não conferido em tela real: some do site publicado (módulos, listas, colas, busca, "Na próxima aula").
     No computador do André continua aparecendo. Para liberar, tirar daqui. (20/10/2026) */
  var OCULTOS = { modulos: [], aulas: ['apps-ios/02', 'apps-ios/03', 'apps-ios/04'] };   // iOS 14: só a aula 01 foi conferida em tela real (20/10)
  window.PUB_OCULTA = function (mod, aula) { return PUB && (OCULTOS.modulos.indexOf(mod) >= 0 || OCULTOS.aulas.indexOf(mod + '/' + aula) >= 0) };
  // chamado no fim de conteudo.js: tira o conteúdo oculto antes de qualquer tela usá-lo
  window.PUB_LIMPA = function () {
    if (!PUB || !window.MODULOS || !window.AULAS) return;
    window.MODULOS = window.MODULOS.filter(function (m) { return OCULTOS.modulos.indexOf(m.id) < 0 });
    OCULTOS.modulos.forEach(function (m) { delete window.AULAS[m] });
    (window.TRILHAS || []).forEach(function (t) { if (t.modulos) t.modulos = t.modulos.filter(function (m) { return OCULTOS.modulos.indexOf(m) < 0 }) });
    Object.keys(window.AULAS).forEach(function (m) {
      var L = window.AULAS[m], N = L.filter(function (a) { return OCULTOS.aulas.indexOf(m + '/' + a.id) < 0 });
      if (N.length < L.length) { if (N.length) N[N.length - 1] = Object.assign({}, N[N.length - 1], { gancho: null }); window.AULAS[m] = N }   // a última que sobrou não anuncia aula oculta
    });
  };
})();
