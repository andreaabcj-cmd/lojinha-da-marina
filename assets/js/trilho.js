/* TRILHO: o primeiro tutorial de cada módulo começa na página inicial e leva a pessoa, passo a passo,
   até o simulador (Início › Módulos › o módulo › a aula › Praticar › o simulador), e daí segue o tutorial normal.
   Os outros tutoriais do módulo continuam como sempre (abrem direto no simulador).
   - Piloto aprovado em 16/10/2026 e estendido ao primeiro tutorial de cada módulo.
   - COMO REVERTER: (1) mudar TRILHO_LIGADO para false (os tutoriais voltam a abrir direto no simulador), ou
     (2) voltar à versão anterior: `git checkout antes-trilho-geral` (tag) ou o zip em D:\Projects\_backups_lojinha\.
   - Entrada: na lista “Como fazer…” (laboratorio.html#como) o link do primeiro tutorial do módulo passa a abrir index.html?tour=<trilho>.
   - TRILHOS (gerado): tutorial → { modulo, aula, cauda = quantos passos tem o tutorial normal, só para a contagem “Passo x de y” ser a mesma em todas as páginas }.
   - Carregado nas páginas da plataforma (index, modulos, modulo, aula-plataforma, laboratorio) e nas páginas dos simuladores. */
(function () {
  var TRILHO_LIGADO = true;
  if (!TRILHO_LIGADO) return;
  var TRILHOS = {
    'conhecer-portfolio': { modulo: 'portfolio', aula: '01', cauda: 8 },
    'investigar-purchase': { modulo: 'dg-pixel', aula: '01', cauda: 20, area: true },   // área Diagnóstico: Início › Diagnóstico › bloco › caso › Resolver
    'plataforma-conectada': { modulo: 'dg-integracoes', aula: '01', cauda: 38, area: true },
    // tutoriais reaproveitados de módulos: a chave é um apelido e `tour` é o tutorial (o link do módulo de origem continua normal)
    'dg-anuncios-01': { tour: 'nao-veicula', modulo: 'dg-anuncios', aula: '01', cauda: 14, area: true },
    'dg-catalogo-01': { tour: 'produtos-sumidos', modulo: 'dg-catalogo', aula: '01', cauda: 9, area: true },
    'dg-instagram-01': { tour: 'perfil-nao-aparece', modulo: 'dg-instagram', aula: '01', cauda: 5, area: true },
    'dg-contas-01': { tour: 'conectar-extensao', modulo: 'dg-contas', aula: '01', cauda: 15, area: true },
    'adicionar-instagram': { modulo: 'instagram', aula: '03', cauda: 9 },   // na trilha Foco as aulas 01-02 do Instagram não aparecem (só da Completa): o 1º tutorial visível é este
    'pixel-em-acao': { modulo: 'pixel', aula: '01', cauda: 5 },
    'correspondencia-avancada': { modulo: 'pixel-avancado', aula: '01', cauda: 29 },
    'verificar-empresa': { modulo: 'portfolio-avancado', aula: '01', cauda: 10 },
    'criar-publico-site': { modulo: 'segmentacao', aula: '02', cauda: 11 },
    'ler-relatorio': { modulo: 'relatorios', aula: '02', cauda: 5 },
    'criar-regra': { modulo: 'regras', aula: '02', cauda: 10 },
    'montar-criativo': { modulo: 'feed', aula: '02', cauda: 15 },
    'conectar-shopify': { modulo: 'shopify', aula: '02', cauda: 34 },
    'conectar-woocommerce': { modulo: 'integracoes', aula: '02', cauda: 34 },
    'galeria-parceiros': { modulo: 'mbe', aula: '02', cauda: 5 },
    'jornada-compra-site': { modulo: 'shop-ads-offsite', aula: '01', cauda: 13 },
    'antes-de-criar': { modulo: 'shop-ads', aula: '02', cauda: 4 },
    'criar-loja': { modulo: 'commerce', aula: '02', cauda: 13 },
    'escolher-plano': { modulo: 'verified', aula: '02', cauda: 5 },
    'ler-aprendizado': { modulo: 'entrega', aula: '02', cauda: 5 },
    'verificar-microdados': { modulo: 'microdados', aula: '02', cauda: 5 },
    'criar-catalogo': { modulo: 'catalogo', aula: '02', cauda: 10 },
    'turbinar-post': { modulo: 'anuncios', aula: '01', cauda: 10 }
  };
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return { pt: pt, es: es } }
  var TOURS = window.TOURS = window.TOURS || {};
  var N = 5;   // passos do caminho até o simulador

  Object.keys(TRILHOS).forEach(function (chave) {
    var cfg = TRILHOS[chave], base = cfg.tour || chave, id = 'trilho-' + chave, mod = cfg.modulo, aula = cfg.aula, dg = !!cfg.area;
    var prefixo = [
      { tit: T('Vamos achar o tutorial 🧭', '¡Vamos a encontrar el tutorial! 🧭'),
        txt: dg ? T('Vou te levar da página inicial até o caso, como você faria sozinha. Primeiro, clique em Diagnóstico.', 'Te llevaré desde la página de inicio hasta el caso, como lo harías sola. Primero, haz clic en Diagnóstico.') : T('Vou te levar da página inicial até o simulador, como você faria sozinha. Primeiro, clique em Módulos.', 'Te llevaré desde la página de inicio hasta el simulador, como lo harías sola. Primero, haz clic en Módulos.'), clique: true,
        alvo: function () { var h = dg ? 'diagnostico.html' : 'modulos.html'; return document.querySelector('header nav a[href="' + h + '"]') || document.querySelector('a[href="' + h + '"]') } },
      { tit: dg ? T('O assunto', 'El tema') : T('O módulo', 'El módulo'), txt: dg ? T('Os casos ficam separados por assunto. Clique no assunto deste caso.', 'Los casos están separados por tema. Haz clic en el tema de este caso.') : T('Aqui estão todos os módulos. Clique no módulo do tutorial.', 'Aquí están todos los módulos. Haz clic en el módulo del tutorial.'), clique: true,
        alvo: function () { return document.querySelector('a.item[href="modulo.html?m=' + mod + '"]') } },
      { tit: dg ? T('O caso', 'El caso') : T('A aula', 'La clase'), txt: dg ? T('Clique no caso ' + aula + '.', 'Haz clic en el caso ' + aula + '.') : T('Cada módulo tem aulas. Este tutorial é da aula ' + aula + ': clique nela.', 'Cada módulo tiene clases. Este tutorial es de la clase ' + aula + ': haz clic en ella.'), clique: true,
        alvo: function () { return document.querySelector('a.aula-l[href*="a=' + aula + '"]') } },
      { tit: dg ? T('A Marina reclama', 'Marina reclama') : T('As etapas da aula', 'Las etapas de la clase'), txt: dg ? T('Todo caso começa assim: a reclamação da cliente, do jeito que ela fala. Leia e clique em Resolver.', 'Todo caso empieza así: el reclamo de la clienta, tal como ella habla. Lee y haz clic en Resolver.') : T('A aula tem etapas: Entender, Ver de perto, Praticar e Atender. O tutorial guiado fica em Praticar: clique nele.', 'La clase tiene etapas: Entender, Ver de cerca, Practicar y Atender. El tutorial guiado está en Practicar: haz clic en él.'), clique: true,
        alvo: function () { return [].slice.call(document.querySelectorAll('button')).filter(function (b) { return (dg ? /Resolver/ : /Praticar|Practicar/).test(b.textContent) && /\d/.test(b.textContent) })[0] } },
      { tit: T('Começar a prática', 'Empezar la práctica'), txt: T('Este é o botão da prática guiada. Clique para abrir o simulador.', 'Este es el botón de la práctica guiada. Haz clic para abrir el simulador.'), clique: true,
        alvo: function () { return document.querySelector('a[href*="tour=' + base + '&"], a[href$="tour=' + base + '"]') } }
    ];
    // do passo N em diante vem o tutorial normal (que só existe na página do simulador): montado na hora em que é pedido
    Object.defineProperty(TOURS, id, { configurable: true, enumerable: true, get: function () {
      var cauda = Object.getOwnPropertyDescriptor(TOURS, base) ? TOURS[base] : null;
      if (cauda) return prefixo.concat(cauda);
      var vazio = []; for (var i = 0; i < cfg.cauda; i++) vazio.push({ alvo: 'body', tit: '', txt: '' });
      return prefixo.concat(vazio);
    } });
    // chegando no simulador pelo trilho: não reinicia o tutorial normal; continua o trilho no passo N
    var st = null; try { st = JSON.parse(sessionStorage.getItem('tour.ativo') || 'null') } catch (e) { }
    var q = new URLSearchParams(location.search);
    if (q.get('tour') === base && st && st.nome === id && st.passo === N && /aula-plataforma/.test(document.referrer || '')) {
      q.delete('tour'); try { history.replaceState(null, '', location.pathname + (q.toString() ? '?' + q.toString() : '') + location.hash) } catch (e) { }
    }
  });

  // as páginas da plataforma apagam o estado do tutorial ao abrir (“cada prática começa do zero”); o trilho precisa atravessar essas páginas,
  // então guarda o estado dele e devolve logo depois (sem mexer no plataforma.js)
  (function () {
    var K = 'tour.ativo', salvo = null;
    try { var v = sessionStorage.getItem(K); if (v && /"nome":"trilho-/.test(v)) salvo = v } catch (e) { }
    if (!salvo) return;
    function devolve() { try { if (!sessionStorage.getItem(K)) sessionStorage.setItem(K, salvo) } catch (e) { } }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(devolve, 30) }); else setTimeout(devolve, 30);
  })();

  // entrada: na lista “Como fazer…”, o link do primeiro tutorial de cada módulo começa pela página inicial
  function religa() {
    [].forEach.call(document.querySelectorAll('a.como-ir'), function (a) {
      var m = /[?&]tour=([a-z0-9_-]+)/i.exec(a.getAttribute('href') || ''); if (!m || a.getAttribute('data-trilho')) return;
      var ma = a.parentNode && a.parentNode.querySelector('.como-aula'), mod = ma ? (/[?&]m=([^&]+)/.exec(ma.getAttribute('href')) || [])[1] : null;
      var chave = Object.keys(TRILHOS).filter(function (k) { return (TRILHOS[k].tour || k) === m[1] && (!TRILHOS[k].tour || TRILHOS[k].modulo === mod) })[0]; if (!chave) return;
      var v = /[?&]voltar=([^&]+)/.exec(a.getAttribute('href')); a.setAttribute('data-trilho', '1');
      a.setAttribute('href', 'index.html?tour=trilho-' + chave + (v ? '&voltar=' + v[1] : ''));
      a.title = (LANG === 'es' ? 'Empieza en la página de inicio y te lleva hasta el simulador. ' : 'Começa na página inicial e leva até o simulador. ') + (a.title || '');
    });
  }
  function liga() { religa(); new MutationObserver(religa).observe(document.body, { childList: true, subtree: true }) }
  if (document.querySelector('#como, .como-ir')) liga(); else document.addEventListener('DOMContentLoaded', liga);
})();
