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
})();
