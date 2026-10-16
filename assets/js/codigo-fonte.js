/* CÓDIGO-FONTE DA PÁGINA (como o "Exibir código-fonte da página" / view-source do navegador).
   Mostra o HTML do site do cliente (faz-de-conta) exatamente como está agora: o código que está nos arquivos do site (ou no tema da plataforma).
   A pessoa usa a BUSCA (como o Ctrl+F) para achar "fbq", o ID do Pixel e o código dos eventos.
   Real: a prática de procurar fbq/Pixel no código-fonte vem da Central de Ajuda da Meta (“O que fazer se o Pixel registrar menos eventos”: pesquisar o código do Pixel ou fbq).
   Importante: pixels de apps de plataformas (como o app Facebook e Instagram da Shopify) rodam por fora do tema e NÃO aparecem aqui; para esses, use o Consultor de Dados. */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return LANG === 'es' ? es : pt }
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var q = new URLSearchParams(location.search), pag = ['home', 'produto', 'obrigado'].indexOf(q.get('p')) >= 0 ? q.get('p') : 'obrigado', busca = '', cur = 0;
  var ROTAS = { home: ['/', 'Lojinha da Marina · Início'], produto: ['/produto/caneca-azul', 'Caneca azul · Lojinha da Marina'], obrigado: ['/pedido/confirmado', 'Pedido confirmado · Lojinha da Marina'] };
  function ultimoTotal() {
    try { var p = JSON.parse(localStorage.getItem('loja.pedidos') || '{}'), ks = Object.keys(p); if (ks.length) return Number(p[ks[ks.length - 1]].total).toFixed(2) } catch (e) { }
    return '129.90';
  }
  function fonte() {
    var s = SITE.get(), cab = s.tipo === 'proprio' ? s.proprio.cabecalho : s.shopify.tema, total = ultimoTotal();
    var corpo = {
      home: ['<header class="topo"><a href="/">Lojinha da Marina</a><nav>…</nav></header>', '<main>', '  <h1>Bem-vinda à Lojinha da Marina</h1>', '  <section id="destaques">…</section>', '</main>'],
      produto: ['<header class="topo"><a href="/">Lojinha da Marina</a><nav>…</nav></header>', '<main>', '  <h1>Caneca azul</h1>', '  <button id="addCart">Adicionar ao carrinho</button>', '</main>'],
      obrigado: ['<header class="topo"><a href="/">Lojinha da Marina</a><nav>…</nav></header>', '<main>', '  <h1>Pedido confirmado!</h1>', '  <p>Obrigada pela compra.</p>', '</main>']
    }[pag];
    if (s.tipo === 'shopify') {   // plataforma: o tema (theme.liquid) já vem montado; a plataforma preenche os trechos entre chaves
      var topo = corpo[0], resto = corpo.slice(1).join('\n');
      return String(s.shopify.tema).replace('{{ page_title }}', ROTAS[pag][1]).replace('{{ content_for_header }}', '<!-- scripts da plataforma (apps e pixels de apps não aparecem aqui) -->')
        .replace("{% section 'header' %}", topo).replace("{% section 'footer' %}", '<footer>…</footer>').replace('{{ content_for_layout }}', resto).replace(/\{\{ pedido\.total \}\}/g, total).split('\n');
    }
    var linhas = ['<!DOCTYPE html>', '<html lang="pt-BR">', '<head>', '<meta charset="utf-8">', '<title>' + ROTAS[pag][1] + '</title>', '<link rel="stylesheet" href="/assets/css/loja.css">'];
    if (cab && cab.trim()) cab.replace(/\{\{ pedido\.total \}\}/g, total).split('\n').forEach(function (l) { linhas.push(l) });
    linhas.push('</head>', '<body>');
    corpo.forEach(function (l) { linhas.push(l) });
    if (pag === 'obrigado' && s.tipo === 'proprio' && s.proprio.obrigado && s.proprio.obrigado.trim()) s.proprio.obrigado.replace(/\{\{ pedido\.total \}\}/g, total).split('\n').forEach(function (l) { linhas.push(l) });
    linhas.push('<script src="/assets/js/loja.js"></script>', '</body>', '</html>');
    return linhas;
  }
  function colore(l) {
    var h = esc(l);
    h = h.replace(/(&lt;!--.*?--&gt;)/g, '<i class="cf-c">$1</i>').replace(/(&lt;\/?[a-zA-Z!][^&\s]*)/g, '<b class="cf-t">$1</b>');
    return h;
  }
  function marca(h, texto) {
    if (!busca) return { h: h, n: 0 };
    var n = 0, re = new RegExp(busca.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    var partes = h.split(/(<[^>]+>)/); // não marca dentro de tags
    return { h: partes.map(function (p) { return /^</.test(p) ? p : p.replace(re, function (m) { n++; return '<mark class="cf-hit" data-n="' + (n - 1) + '">' + m + '</mark>' }) }).join(''), n: n };
  }
  var total = 0;
  function render() {
    var L = fonte(), tot = 0;
    var html = L.map(function (l, i) { var r = marca(colore(l), l); tot += r.n; return '<div class="cf-l"><span class="cf-n">' + (i + 1) + '</span><code>' + (r.h || '&nbsp;') + '</code></div>' });
    // numera as marcações de ponta a ponta
    var k = 0; html = html.map(function (x) { return x.replace(/data-n="\d+"/g, function () { return 'data-n="' + (k++) + '"' }) });
    total = tot; if (cur >= total) cur = 0;
    var rotas = [['home', T('Início', 'Inicio')], ['produto', T('Produto', 'Producto')], ['obrigado', T('Pedido confirmado', 'Pedido confirmado')]];
    $('#app').innerHTML = '<div data-sem-traduzir="1"><div class="cf-barra"><span class="cf-url" data-t="cf-url">view-source:https://www.lojinhadamarina.exemplo' + ROTAS[pag][0] + '</span>' +
      '<span class="cf-pags">' + rotas.map(function (r) { return '<button class="cf-bt' + (pag === r[0] ? ' on' : '') + '" data-p="' + r[0] + '" data-t="cf-pag-' + r[0] + '">' + r[1] + '</button>' }).join('') + '</span></div>' +
      '<div class="cf-busca" data-t="cf-buscabox"><label>🔎 ' + T('Buscar na página (Ctrl+F)', 'Buscar en la página (Ctrl+F)') + '</label><input id="cfBusca" value="' + esc(busca) + '" placeholder="fbq" data-t="cf-busca"/><span id="cfN" data-t="cf-n">' + (busca ? (total ? (cur + 1) + ' / ' + total : T('0 resultados', '0 resultados')) : '') + '</span><button class="cf-bt" data-ac="ant" title="' + T('Anterior', 'Anterior') + '">▲</button><button class="cf-bt" data-ac="prox" title="' + T('Próximo', 'Siguiente') + '">▼</button></div>' +
      '<div class="cf-cod" data-t="cf-codigo">' + html.join('') + '</div>' +
      '<p class="cf-nota">' + T('Este é o código que o navegador recebeu. Pixels de apps da plataforma (como o app Facebook e Instagram da Shopify) rodam por fora do tema e não aparecem aqui: para esses, use o Consultor de Dados.', 'Este es el código que recibió el navegador. Los píxeles de apps de la plataforma (como la app Facebook e Instagram de Shopify) funcionan fuera del tema y no aparecen aquí: para esos, usa el Asesor de datos.') + '</p></div>';
    var hit = document.querySelectorAll('.cf-hit'); [].forEach.call(hit, function (m, i) { m.classList.toggle('on', i === cur) });
    if (hit[cur]) try { hit[cur].scrollIntoView({ block: 'center' }) } catch (e) { }
    var foco = window.__cfFoco; if (foco) { var el = document.getElementById('cfBusca'); if (el) { el.focus(); try { el.setSelectionRange(el.value.length, el.value.length) } catch (e) { } } }
    window.__simCf = { pag: pag, busca: busca, total: total, linhas: L };
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-p]'); if (b) { pag = b.getAttribute('data-p'); cur = 0; render(); return }
    b = e.target.closest('[data-ac]'); if (b && total) { cur = (cur + (b.getAttribute('data-ac') === 'prox' ? 1 : -1) + total) % total; render() }
  });
  document.addEventListener('input', function (e) { if (e.target.id === 'cfBusca') { busca = e.target.value; cur = 0; window.__cfFoco = true; render() } });
  window.addEventListener('site:mudou', render);
  window.CF = { render: render, busca: function (v) { busca = v; cur = 0; render() }, pagina: function (p) { pag = p; cur = 0; render() } };
  render();
})();
