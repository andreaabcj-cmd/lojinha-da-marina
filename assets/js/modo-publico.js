/* MODO PÚBLICO: no site publicado (GitHub Pages) só aparecem Módulos e Loja.
   Simuladores, Laboratório, Colas e as páginas de ferramenta/tutorial ficam ESCONDIDOS (os arquivos continuam no projeto, nada foi apagado).
   - No computador do André (localhost) nada muda: tudo aparece.
   - Para ver o modo público no computador: abrir qualquer página com ?publico=1 (e ?publico=0 para voltar ao normal).
   - Para publicar tudo de novo: apagar este arquivo e as linhas "modo-publico.js" dos HTML, ou trocar ESCONDER_SITE para false abaixo.
   Este arquivo vem PRIMEIRO em cada página (precisa rodar antes de tudo, para mandar embora quem abre uma página escondida). */
(function () {
  var ESCONDER_SITE = true;   // false = o site publicado mostra tudo
  var local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || location.protocol === 'file:';
  var q = new URLSearchParams(location.search), forca = null;
  try { if (q.get('publico') === '1') localStorage.setItem('modo.publico', '1'); if (q.get('publico') === '0') localStorage.removeItem('modo.publico'); forca = localStorage.getItem('modo.publico') === '1' } catch (e) { }
  var PUB = ESCONDER_SITE && (!local || forca);
  var PAGINAS = /^(simuladores|laboratorio|colas|ferramenta|tutoriais|tutorial|aula|meta-[a-z0-9-]+)\.html$/i;
  function escondida(url) { var p = String(url || '').split(/[?#]/)[0].split('/').pop(); return PAGINAS.test(p) }
  window.MODO_PUBLICO = PUB;
  window.PUB_ESCONDIDA = function (url) { return PUB && escondida(url) };
  if (PUB && escondida(location.pathname)) location.replace('index.html');
})();
