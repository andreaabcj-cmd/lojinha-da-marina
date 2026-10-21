/* Simulador da Ferramenta de depuração de microdados (Microdata Debugger) — layout fiel, visual da Lojinha.
   Estado no navegador (localStorage "sim.microdados"); NADA é enviado à Meta e nenhuma página da internet é lida: as páginas são de um "site de mentirinha" (lista abaixo).
   Textos copiados da tela real (16/10/2026, PT e ES): título, explicação, campo "Link do site", botão, Prévia (OpenGraph e JSON-LD), "Parabéns!" e o erro "Falha na validação de dados".
   Como a ferramenta real mostra erros de campo específicos (preço faltando etc.) não foi visto: as "dicas do simulador" são nossas (a conferir).
   URL: meta-microdados.html?zerar=1 · Tutoriais (tour.js): ?tour=verificar-microdados | ler-campos | erro-microdados */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var BASE = 'https://lojinha.exemplo.com.br/';
  /* páginas do site de mentirinha: id, título, preço, disponibilidade + o que o site publica */
  var PAG = {
    'produto-caneca_01.html': { id: 'CANECA_01', t: 'Caneca azul', d: 'Caneca de cerâmica azul, 300 ml. Vai ao micro-ondas e à lava-louças.', p: '49.90', av: 'in stock', img: 'assets/img/caneca_01.png', og: true, ld: true, sc: true },
    'produto-camiseta_02.html': { id: 'CAMISETA_02_P', t: 'Camiseta Montanha - P', d: 'Camiseta de algodão com estampa de montanha.', p: '69.90', av: 'in stock', img: 'assets/img/camiseta_02.png', og: true, ld: true, sc: true },
    'produto-moletom_01.html': { id: 'MOLETOM_01', t: 'Moletom Marinho', d: 'Moletom azul-marinho com capuz.', p: '149.90', av: 'out of stock', img: 'assets/img/moletom_01.png', og: true, ld: true, sc: true },
    'produto-so-jsonld.html': { id: 'ECOBAG_03', t: 'Ecobag Folha', d: 'Ecobag de algodão cru com estampa de folha.', p: '39.90', av: 'in stock', img: 'assets/img/ecobag_03.png', og: false, ld: true },
    'produto-sem-preco.html': { id: 'BONE_01', t: 'Boné Azul', d: 'Boné azul ajustável.', p: '', av: 'in stock', img: 'assets/img/bone_01.png', og: true, ld: true, falta: ['price'] },
    'produto-sem-id.html': { id: '', t: 'Caneca amarela', d: 'Caneca de cerâmica amarela, 300 ml.', p: '49.90', av: 'in stock', img: 'assets/img/caneca_02.png', og: true, ld: true, falta: ['id'] },
    'produto-preco-texto.html': { id: 'CANECA_03', t: 'Caneca Boas Ideias', d: 'Caneca com frases bonitas.', p: 'R$ 54,90', av: 'in stock', img: 'assets/img/caneca_03.png', og: true, ld: true, falta: ['price-formato'] },
    'produto-ecobag_03.html': { dyn: true },   // lida do Editor de arquivos do site (md-pagina.js): é a página que o aluno configura
    'carrinho.html': { sem: true },
    'index.html': { sem: true }
  };
  var AJUDA = { id: 'o id é a Identificação do conteúdo do catálogo; sem ele a Meta não liga o produto ao catálogo nem ao Pixel', price: 'sem preço, o produto não entra no catálogo', 'price-formato': 'o preço precisa ser um número com a moeda (por exemplo 54.90 e BRL); “R$ 54,90” escrito como texto não é entendido' };
  function inicial() { return { url: '', res: null, ver: false } }
  var S = ler('sim.microdados', null) || inicial();
  if (params.get('zerar')) S = inicial();
  function grava() { try { localStorage.setItem('sim.microdados', JSON.stringify(S)) } catch (e) { } window.__simMd = { S: S } }
  grava();

  function analisa(url) {
    var u = url.trim(); if (!u) return null;
    if (!/^https?:\/\/[^\s]+\.[^\s]+/.test(u)) return { erro: true, motivo: 'URL inválida' };
    var m = u.match(/^https?:\/\/lojinha\.exemplo\.com\.br\/([^?#]*)/);
    if (!m) return { erro: true, motivo: 'Este endereço não é do site de mentirinha do simulador (a ferramenta real lê qualquer página pública da internet)' };
    var pg = PAG[m[1]]; if (!pg) return { erro: true, motivo: 'Página não encontrada no site de mentirinha' };
    if (pg.sem) return { erro: true, motivo: 'A página não traz microdados de produto' };
    if (pg.dyn) return analisaDyn();
    if (pg.falta && pg.falta.length) return { erro: true, motivo: 'Falta ou está errado: ' + pg.falta.map(function (f) { return f === 'price-formato' ? 'o formato do preço' : f === 'id' ? 'o id' : 'o preço' }).join(', '), falta: pg.falta, pg: pg };
    return { ok: true, pg: pg };
  }
  /* a página configurada pelo aluno: lê as tags que estão salvas no Editor de arquivos do site */
  var NOME = { id: 'o id', title: 'o título (title)', description: 'a descrição (description)', link: 'o link', image_link: 'a imagem (image_link)', brand: 'a marca (brand)', availability: 'a disponibilidade (availability)', condition: 'a condição (condition)', price: 'o preço', currency: 'a moeda', json: 'o bloco JSON-LD', tags: 'as tags de produto' };
  var EXPL = {
    'id-falta': 'falta o id (product:retailer_item_id ou productID): é a Identificação do conteúdo do produto no catálogo',
    'title-falta': 'falta o título (og:title ou name)', 'description-falta': 'falta a descrição (og:description ou description)',
    'link-falta': 'falta o link da página (og:url ou url)', 'link-url': 'o link precisa ser o endereço completo da página, começando com https://',
    'image_link-falta': 'falta a imagem (og:image ou image)', 'image_link-url': 'a imagem precisa ser um endereço completo, começando com https://',
    'brand-falta': 'falta a marca (product:brand ou brand)',
    'availability-falta': 'falta a disponibilidade (product:availability ou availability)', 'availability-valor': 'a disponibilidade só aceita valores em inglês: in stock ou out of stock (também preorder, available for order e discontinued); “em estoque” não é entendido',
    'condition-falta': 'falta a condição (product:condition ou itemCondition)', 'condition-valor': 'a condição aceita new, refurbished ou used, em inglês',
    'price-falta': 'falta o preço (product:price:amount ou price)', 'price-formato': 'o preço é só o número, com ponto nos centavos: 39.90 (sem R$ e sem vírgula)',
    'currency-falta': 'falta a moeda (product:price:currency ou priceCurrency)', 'currency-moeda': 'a moeda é o código de 3 letras maiúsculas: BRL (não “R$” nem “reais”)',
    'json-sintaxe': 'o bloco JSON-LD tem um erro de escrita (vírgula, aspas ou chave faltando) e não pôde ser lido',
    'tags-falta': 'a página não tem tags de produto (nem OpenGraph, nem JSON-LD, nem schema.org)'
  };
  var AVISO = { 'id-catalogo': 'o id desta página não é o do catálogo: lá a Ecobag é ECOBAG_03. Com outro id, a Meta não liga a página ao produto do catálogo nem aos eventos do Pixel', 'exemplo-exemplo': 'ainda há valores do exemplo da Meta (como fb_tshirts ou facebook_tshirt_001): troque pelos da Ecobag ou apague a linha' };
  function analisaDyn() {
    if (!window.MDPAG) return { erro: true, motivo: 'Página não encontrada no site de mentirinha' };
    var v = MDPAG.valida(), c = v.og || v.ld || v.sc || {}, vistos = {};
    var pg = { dyn: true, id: c.id, t: c.title, d: c.description, og: !!v.og, ld: !!v.ld, sc: !!v.sc, vOg: v.og, vLd: v.ld, vSc: v.sc };
    var avisos = v.avisos.map(function (a) { return AVISO[a.campo + '-' + a.tipo] }).filter(function (x) { if (!x || vistos[x]) return false; vistos[x] = 1; return true });
    if (v.problemas.length) {
      var ex = [], nomes = [], vx = {};
      v.problemas.forEach(function (q) { var e = EXPL[q.campo + '-' + q.tipo]; if (e && !vx[e]) { vx[e] = 1; ex.push(e); nomes.push(NOME[q.campo]) } });
      return { erro: true, dyn: true, motivo: 'Falta ou está errado:', nomes: nomes, expl: ex, avisos: avisos, pg: pg };
    }
    return { ok: true, pg: pg, avisos: avisos };
  }
  /* Na ferramenta real (20/10/2026, página da Caneca azul), a tabela Schema.org mostra só id, title, description, price, availability e brand */
  function soSc(L, tipo) { return tipo !== 'sc' ? L : L.filter(function (x) { return /^(id|title|description|price|availability|brand)$/.test(x[0]) }) }
  function tabelaDyn(pg, tipo) {
    var c = tipo === 'og' ? pg.vOg : tipo === 'sc' ? pg.vSc : pg.vLd, L = [['id', c.id], ['title', c.title], ['description', c.description], ['price', c.amount + ' ' + c.currency], ['link', c.link], ['image_link', c.image_link], ['availability', c.availability], ['condition', c.condition], ['brand', c.brand]];
    if (c.item_group_id) L.push(['item_group_id', c.item_group_id]);
    L = soSc(L, tipo);
    return '<table class="cm-tab md-tab" data-t="tab-' + tipo + '"><thead><tr><th>Parâmetro</th><th>Valor</th></tr></thead><tbody>' + L.map(function (x) { return '<tr data-t="campo-' + tipo + '-' + x[0] + '"><td>' + x[0] + '</td><td data-sem-traduzir="1">' + esc(x[1]) + '</td></tr>' }).join('') + '</tbody></table>';
  }
  function avisosDyn(r) { return r.avisos && r.avisos.length ? '<div class="ga-aviso" data-t="md-avisos"><b>Dica do simulador:</b> ' + r.avisos.map(function (a) { return '<span>' + esc(a) + '</span>' }).join(' · ') + '</div>' : '' }
  function tabela(pg, tipo) {
    if (pg.dyn) return tabelaDyn(pg, tipo);
    var L = [['id', pg.id], ['title', pg.t], ['description', pg.d], ['price', pg.p + ' BRL'], ['link', BASE + (Object.keys(PAG).filter(function (k) { return PAG[k] === pg })[0] || '')], ['image_link', BASE + pg.img], ['availability', pg.av]];
    L.push(['condition', 'new']); L.push(['brand', 'Lojinha da Marina']);
    if (tipo === 'og') L.push(['additional_image_link', BASE + pg.img]);
    L = soSc(L, tipo);
    return '<table class="cm-tab md-tab" data-t="tab-' + tipo + '"><thead><tr><th>Parâmetro</th><th>Valor</th></tr></thead><tbody>' + L.map(function (x) { return '<tr data-t="campo-' + tipo + '-' + x[0] + '"><td>' + x[0] + '</td><td>' + esc(x[1]) + '</td></tr>' }).join('') + '</tbody></table>';
  }
  function resultado() {
    var r = S.res; if (!r) return '';
    if (r.erro && r.dyn) {
      return '<div class="md-res erro" data-t="resultado-erro"><h3>Erros</h3><p>Os produtos no seu site não podem ser adicionados automaticamente ao seu catálogo devido a esses problemas.</p><div class="md-linha"><b>Erros</b><span>Falha na validação de dados.</span></div>' +
        '<div class="ga-aviso" data-t="dica-simulador"><b>Dica do simulador:</b> <span>' + esc(r.motivo) + '</span><ul>' + r.expl.map(function (e) { return '<li><span>' + esc(e) + '</span></li>' }).join('') + '</ul><small>(A tela real mostra só “Falha na validação de dados”; esta dica é do simulador, para você aprender a achar a causa: a conferir.)</small></div>' + avisosDyn(r) + '</div>';
    }
    if (r.erro || r.falta) {
      return '<div class="md-res erro" data-t="resultado-erro"><h3>Erros</h3><p>Os produtos no seu site não podem ser adicionados automaticamente ao seu catálogo devido a esses problemas.</p><div class="md-linha"><b>Erros</b><span>Falha na validação de dados.</span></div>' +
        '<p class="ga-aviso" data-t="dica-simulador"><b>Dica do simulador:</b> <span>' + esc(r.motivo) + '</span>' + (r.falta ? '. <span>' + r.falta.map(function (f) { return AJUDA[f] }).filter(Boolean).join('</span>; <span>') + '</span>.' : '') + ' <small>(A tela real mostra só “Falha na validação de dados”; esta dica é do simulador, para você aprender a achar a causa: a conferir.)</small></p></div>';
    }
    var pg = r.pg;
    return '<div class="md-res" data-t="resultado-ok"><h3>Prévia</h3><p>É assim que os microdados são configurados no seu site. Corrija os erros abaixo para que todos os produtos no seu site possam ser adicionados automaticamente ao seu catálogo.</p>' +
      (pg.og ? '<h4>OpenGraph</h4>' + tabela(pg, 'og') : '') + (pg.ld ? '<h4>JSON-LD</h4>' + tabela(pg, 'ld') : '') + (pg.sc ? '<h4>Schema.org</h4>' + tabela(pg, 'sc') + '<p class="conferido" data-t="sc-conferir">✓ Tabela Schema.org conferida na ferramenta real em 20/10/2026: ela mostra menos campos que as outras (sem link, imagem e condição).</p>' : '') + '<p class="md-ok" data-t="parabens">Parabéns! Seus microdados parecem ótimos!</p>' + (pg.dyn ? avisosDyn(r) : '') + '</div>';
  }
  function pagina() {
    var exemplos = Object.keys(PAG).map(function (k) { return '<option value="' + BASE + k + '">' + k + '</option>' }).join('');
    return '<div class="sim-faixa">🧪 Simulador de treinamento da Ferramenta de depuração de microdados · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' +
      '<div class="md-topo"><span>☰</span> <b>Anúncios da Meta</b></div><div class="md"><main class="md-main"><h1>Seus microdados estão configurados corretamente?</h1>' +
      '<p>Para adicionar produtos automaticamente do seu site para o catálogo da Meta, você precisará adicionar tags de microdados à sua instalação do Pixel da Meta.</p>' +
      '<p>Microdados são os dados de marcação estruturados usados para indicar informações importantes sobre os produtos no seu site, como nomes, descrições e preços. <a>Saiba mais.</a></p>' +
      '<p class="md-lab"><b>Link do site</b><br><small>Insira a URL de uma página da web com detalhes do inventário.</small></p>' +
      '<input class="ga-in" id="mdUrl" placeholder="http://www.example.com/products/tops/yellow-tshirt" value="' + esc(S.url) + '" data-t="campo-url"/>' +
      '<p><button class="btn" data-acao="verifica" data-t="btn-verificar">Verificar microdados</button></p>' +
      '<div class="ga-aviso" data-t="atalho"><b>Site de mentirinha do simulador:</b> escolha uma página para testar sem digitar. <select class="ga-in" id="mdEx" data-t="sel-exemplo"><option value="">Escolher uma página…</option>' + exemplos + '</select><br><small>Aqui as páginas são de ' + BASE + ' (não existe de verdade). A ferramenta real lê qualquer página pública.</small></div>' +
      resultado() +
      '<p class="conferido">✓ Tela, textos, tabelas e mensagens conferidos com a ferramenta real em ' + CONF + ' (PT e ES). ⚠ Erros por campo específico e a lista completa de parâmetros não foram vistos (a conferir).</p></main>' +
      '<aside class="md-lado"><b>PRODUCT CATALOG DEBUG TOOLS</b><p><a>Ferramenta de depuração de pixel</a></p></aside></div>';
  }
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simMd = { S: S };
  }
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-acao]'); if (!a) return;
    if (a.getAttribute('data-acao') === 'verifica') { var r = analisa(S.url); S.res = r; grava(); render() }
  });
  document.addEventListener('input', function (ev) { if (ev.target.id === 'mdUrl') { S.url = ev.target.value; grava() } });
  document.addEventListener('change', function (ev) { if (ev.target.id === 'mdEx' && ev.target.value) { S.url = ev.target.value; S.res = null; grava(); render() } });
  window.SIMMD = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, verifica: function () { S.res = analisa(S.url); grava(); render() }, base: BASE };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function md() { return window.__simMd ? window.__simMd.S : S }
  var OK1 = BASE + 'produto-caneca_01.html';
  TOURS['verificar-microdados'] = [
    { alvo: '[data-t=campo-url]', garante: function () { SIMMD.zera() }, tit: T('Para que serve esta ferramenta', 'Para qué sirve esta herramienta'), txt: T('Quando o site de um cliente tem microdados, a Meta consegue puxar os produtos para o catálogo automaticamente. Esta ferramenta mostra o que a Meta enxerga numa página de produto. A Marina quer conferir a página da Caneca azul. Clique em Próximo.', 'Cuando el sitio de un cliente tiene microdatos, Meta puede traer los productos al catálogo automáticamente. Esta herramienta muestra lo que Meta ve en una página de producto. Marina quiere revisar la página de la Caneca azul. Haz clic en Siguiente.') },
    { alvo: '[data-t=campo-url]', garante: function () { SIMMD.zera() }, cond: function () { return /^https?:\/\/\S+\.\S+/.test(md().url.trim()) }, tit: T('O link da página', 'El enlace de la página'), txt: T('No campo Link do site vai a URL de UMA página de produto (não da loja inteira). Digite ' + OK1 + ' (ou escolha no “site de mentirinha” logo abaixo). Depois clique em Próximo.', 'En el campo Enlace al sitio web va la URL de UNA página de producto (no de toda la tienda). Escribe ' + OK1 + ' (o elige en el “sitio de mentira” justo abajo). Después haz clic en Siguiente.'), dica: T('A URL começa com https:// e tem um ponto.', 'La URL empieza con https:// y tiene un punto.') },
    { alvo: '[data-t=btn-verificar]', clique: true, garante: function () { SIMMD.zera(); SIMMD.set({ url: OK1 }) }, tit: T('Verificar microdados', 'Comprobar microdatos'), txt: T('Clique em Verificar microdados.', 'Haz clic en Comprobar microdatos.') },
    { alvo: '[data-t=resultado-ok]', garante: function () { SIMMD.set({ url: OK1 }); SIMMD.verifica() }, tit: T('A Prévia', 'La vista previa'), txt: T('A Prévia diz: “É assim que os microdados são configurados no seu site”. Abaixo aparecem as tabelas do que a Meta leu: OpenGraph e JSON-LD (são dois jeitos de o site publicar os dados). Clique em Próximo.', 'La vista previa dice: “Así están configurados los microdatos en tu sitio”. Abajo aparecen las tablas de lo que Meta leyó: OpenGraph y JSON-LD (son dos formas de que el sitio publique los datos). Haz clic en Siguiente.') },
    { alvo: '[data-t=parabens]', fim: true, semVolta: true, garante: function () { SIMMD.set({ url: OK1 }); SIMMD.verifica() }, tit: T('Parabéns! 🎉', '¡Felicitaciones! 🎉'), txt: T('No final, a mensagem “Parabéns! Seus microdados parecem ótimos!”. Quer dizer: a página tem os dados que o catálogo precisa. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Al final, el mensaje “¡Felicitaciones! ¡Tus microdatos se ven muy bien!”. Quiere decir: la página tiene los datos que necesita el catálogo. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['ler-campos'] = [
    { alvo: '[data-t=tab-og]', garante: function () { SIMMD.zera(); SIMMD.set({ url: OK1 }); SIMMD.verifica() }, tit: T('Os parâmetros', 'Los parámetros'), txt: T('Cada tabela tem duas colunas: Parâmetro e Valor. Esses parâmetros são o que o catálogo usa para montar o produto. Vamos ler os principais. Clique em Próximo.', 'Cada tabla tiene dos columnas: Parámetro y Valor. Esos parámetros son lo que usa el catálogo para armar el producto. Vamos a leer los principales. Haz clic en Siguiente.') },
    { alvo: '[data-t=campo-og-id]', garante: function () { SIMMD.set({ url: OK1 }); SIMMD.verifica() }, tit: T('id: o mais importante', 'id: el más importante'), txt: T('O id é CANECA_01: o mesmo código da “Identificação do conteúdo” da Caneca azul no catálogo (aula 04 do Catálogo). É ele que liga a página ao produto, e ao evento do Pixel. Clique em Próximo.', 'El id es CANECA_01: el mismo código del “Identificador de contenido” de la Caneca azul en el catálogo (clase 04 del Catálogo). Es el que une la página con el producto, y con el evento del Pixel. Haz clic en Siguiente.') },
    { alvo: '[data-t=campo-og-price]', garante: function () { SIMMD.set({ url: OK1 }); SIMMD.verifica() }, tit: T('price: número e moeda', 'price: número y moneda'), txt: T('O preço vem como 49.90 BRL: número com ponto e a moeda ao lado. Não é “R$ 49,90” escrito como texto. Clique em Próximo.', 'El precio viene como 49.90 BRL: número con punto y la moneda al lado. No es “R$ 49,90” escrito como texto. Haz clic en Siguiente.') },
    { alvo: '[data-t=campo-og-availability]', garante: function () { SIMMD.set({ url: OK1 }); SIMMD.verifica() }, tit: T('availability: estoque', 'availability: stock'), txt: T('A disponibilidade aparece como “in stock” (em estoque). Se o produto estivesse sem estoque, a página deveria dizer “out of stock”. Clique em Próximo.', 'La disponibilidad aparece como “in stock” (en stock). Si el producto estuviera sin stock, la página debería decir “out of stock”. Haz clic en Siguiente.') },
    { alvo: '[data-t=tab-ld]', garante: function () { SIMMD.set({ url: OK1 }); SIMMD.verifica() }, tit: T('OpenGraph × JSON-LD', 'OpenGraph × JSON-LD'), txt: T('A segunda tabela, JSON-LD, traz os mesmos dados em outro formato (o schema.org). Um site pode ter um, o outro ou os dois. O importante é que os valores combinem. Clique em Próximo.', 'La segunda tabla, JSON-LD, trae los mismos datos en otro formato (schema.org). Un sitio puede tener uno, el otro o los dos. Lo importante es que los valores coincidan. Haz clic en Siguiente.') },
    { alvo: '[data-t=parabens]', fim: true, semVolta: true, garante: function () { SIMMD.set({ url: OK1 }); SIMMD.verifica() }, tit: T('Campos lidos! 🎉', '¡Campos leídos! 🎉'), txt: T('Regra: id igual ao do catálogo, preço como número com moeda, disponibilidade correta e valores iguais nos dois formatos. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Regla: id igual al del catálogo, precio como número con moneda, disponibilidad correcta y valores iguales en los dos formatos. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['erro-microdados'] = [
    { alvo: '[data-t=sel-exemplo]', garante: function () { SIMMD.zera() }, cond: function () { return /produto-sem-preco/.test(md().url) }, tit: T('Uma página com problema', 'Una página con problema'), txt: T('O cliente reclama que o Boné Azul não entra no catálogo. No “site de mentirinha”, escolha a página produto-sem-preco.html.', 'El cliente reclama que la Gorra azul no entra en el catálogo. En el “sitio de mentira”, elige la página produto-sem-preco.html.'), dica: T('Escolha “produto-sem-preco.html”.', 'Elige “produto-sem-preco.html”.') },
    { alvo: '[data-t=btn-verificar]', clique: true, garante: function () { SIMMD.zera(); SIMMD.set({ url: BASE + 'produto-sem-preco.html' }) }, tit: T('Verificar', 'Comprobar'), txt: T('Clique em Verificar microdados.', 'Haz clic en Comprobar microdatos.') },
    { alvo: '[data-t=resultado-erro]', garante: function () { SIMMD.set({ url: BASE + 'produto-sem-preco.html' }); SIMMD.verifica() }, tit: T('Erros', 'Errores'), txt: T('A tela real diz: “Os produtos no seu site não podem ser adicionados automaticamente ao seu catálogo devido a esses problemas” e, embaixo, “Falha na validação de dados”. É um aviso genérico: não aponta o campo. Clique em Próximo.', 'La pantalla real dice: “Estos problemas impiden que los productos de tu sitio web se agreguen al catálogo automáticamente” y, abajo, “Error al validar los datos”. Es un aviso genérico: no señala el campo. Haz clic en Siguiente.') },
    { alvo: '[data-t=dica-simulador]', garante: function () { SIMMD.set({ url: BASE + 'produto-sem-preco.html' }); SIMMD.verifica() }, tit: T('Achar a causa', 'Encontrar la causa'), txt: T('Para achar o campo, compare com uma página boa: falta o preço (price). Esta dica é do simulador; na vida real, você pede ao cliente (ou ao desenvolvedor do site) para conferir a página. Clique em Próximo.', 'Para encontrar el campo, compara con una página buena: falta el precio (price). Esta pista es del simulador; en la vida real, le pides al cliente (o al desarrollador del sitio) que revise la página. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-exemplo]', garante: function () { SIMMD.set({ url: BASE + 'produto-sem-preco.html' }); SIMMD.verifica() }, cond: function () { return /produto-caneca_01/.test(md().url) }, tit: T('Comparar com uma página boa', 'Comparar con una página buena'), txt: T('Agora escolha a página da Caneca azul (produto-caneca_01.html) para comparar.', 'Ahora elige la página de la Caneca azul (produto-caneca_01.html) para comparar.'), dica: T('Escolha “produto-caneca_01.html”.', 'Elige “produto-caneca_01.html”.') },
    { alvo: '[data-t=btn-verificar]', clique: true, garante: function () { SIMMD.set({ url: OK1, res: null }) }, tit: T('Verificar a página boa', 'Comprobar la página buena'), txt: T('Clique em Verificar microdados.', 'Haz clic en Comprobar microdatos.') },
    { alvo: '[data-t=resultado-ok]', fim: true, semVolta: true, garante: function () { SIMMD.set({ url: OK1 }); SIMMD.verifica() }, tit: T('Diferença encontrada! 🎉', '¡Diferencia encontrada! 🎉'), txt: T('A página boa tem a linha price (49.90 BRL) e a outra não tinha. Quem corrige é o site do cliente (ou a plataforma da loja): você mostra a diferença e orienta. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'La página buena tiene la línea price (49.90 BRL) y la otra no la tenía. Quien corrige es el sitio del cliente (o la plataforma de la tienda): tú muestras la diferencia y orientas. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
