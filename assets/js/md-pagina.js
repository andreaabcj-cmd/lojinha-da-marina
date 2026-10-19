/* A página da Ecobag Folha no "site de mentirinha": o <head> dela (com as tags de microdados) fica salvo no navegador
   (localStorage "site.ecobagHead"). O Editor de arquivos do site edita este texto e o simulador do Microdata Debugger lê o que está escrito.
   Formatos e nomes dos campos: Meta for Developers › Catálogo › “Microdata tags” (lido em 20/10/2026):
   - OpenGraph: <meta property="og:title|og:description|og:url|og:image|product:brand|product:availability|product:condition|
     product:price:amount|product:price:currency|product:retailer_item_id|product:item_group_id"> no <head>;
   - JSON-LD (schema.org Product) num <script type="application/ld+json">: productID, name, description, url, image, brand,
     offers[{price, priceCurrency, itemCondition, availability}], additionalProperty item_group_id;
   - schema.org (microdados no corpo da página): <div itemscope itemtype="http://schema.org/Product"> com itemprop brand, name, description,
     productID, url, image, offers (itemscope Offer: availability, itemCondition, price, priceCurrency) e additionalProperty (PropertyValue).
   As regras de valor (preço com ponto, moeda de 3 letras, disponibilidade e condição em inglês) seguem as especificações do catálogo da Meta.
   O que o simulador aponta campo a campo é nosso (a ferramenta real só diz “Falha na validação de dados”). */
(function () {
  var K = 'site.ecobagHead', ID = 'ECOBAG_03', URL = 'produto-ecobag_03.html', SITE_URL = 'https://lojinha.exemplo.com.br/';
  // o desenvolvedor da Marina colou o exemplo da Meta e esqueceu de trocar alguns valores
  var PADRAO = [
    '<meta charset="utf-8">',
    '<title>Ecobag Folha · Lojinha da Marina</title>',
    '<!-- Microdados (OpenGraph) para o catálogo da Meta -->',
    '<meta property="og:title" content="Ecobag Folha">',
    '<meta property="og:description" content="Ecobag de algodão cru com estampa de folha.">',
    '<meta property="og:url" content="' + SITE_URL + URL + '">',
    '<meta property="og:image" content="' + SITE_URL + 'assets/img/ecobag_03.png">',
    '<meta property="product:brand" content="Lojinha da Marina">',
    '<meta property="product:availability" content="em estoque">',
    '<meta property="product:condition" content="new">',
    '<meta property="product:price:amount" content="39,90">',
    '<meta property="product:price:currency" content="R$">',
    '<meta property="product:retailer_item_id" content="facebook_tshirt_001">',
    '<meta property="product:item_group_id" content="fb_tshirts">'
  ].join('\n');
  // o mesmo exemplo no formato JSON-LD (um bloco só): além dos valores do exemplo, falta uma vírgula (erro comum ao colar)
  var PADRAO_LD = [
    '<meta charset="utf-8">',
    '<title>Ecobag Folha · Lojinha da Marina</title>',
    '<!-- Microdados (JSON-LD) para o catálogo da Meta -->',
    '<script type="application/ld+json">',
    '{',
    '  "@context": "https://schema.org",',
    '  "@type": "Product",',
    '  "productID": "facebook_tshirt_001",',
    '  "name": "Ecobag Folha",',
    '  "description": "Ecobag de algodão cru com estampa de folha.",',
    '  "url": "' + SITE_URL + URL + '",',
    '  "image": "' + SITE_URL + 'assets/img/ecobag_03.png",',
    '  "additionalProperty": [{ "@type": "PropertyValue", "propertyID": "item_group_id", "value": "fb_tshirts" }],',
    '  "brand": "Lojinha da Marina"',
    '  "offers": [{',
    '    "@type": "Offer",',
    '    "price": "39,90",',
    '    "priceCurrency": "R$",',
    '    "itemCondition": "https://schema.org/NewCondition",',
    '    "availability": "https://schema.org/InStock"',
    '  }]',
    '}',
    '</script>'
  ].join('\n');
  // e no formato schema.org (microdados espalhados pelo corpo da página: cada parte ganha um itemprop)
  var PADRAO_SC = [
    '<!-- Corpo da página: microdados (schema.org) para o catálogo da Meta -->',
    '<div itemscope itemtype="http://schema.org/Product">',
    '  <meta itemprop="brand" content="Lojinha da Marina">',
    '  <h1 itemprop="name">Ecobag Folha</h1>',
    '  <p itemprop="description">Ecobag de algodão cru com estampa de folha.</p>',
    '  <meta itemprop="productID" content="facebook_tshirt_001">',
    '  <link itemprop="url" href="' + SITE_URL + URL + '">',
    '  <img itemprop="image" src="' + SITE_URL + 'assets/img/ecobag_03.png" alt="Ecobag Folha">',
    '  <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">',
    '    <link itemprop="availability" href="http://schema.org/InStock">',
    '    <link itemprop="itemCondition" href="http://schema.org/NewCondition">',
    '    <meta itemprop="price" content="39,90">',
    '    <meta itemprop="priceCurrency" content="R$">',
    '  </div>',
    '  <div itemprop="additionalProperty" itemscope itemtype="http://schema.org/PropertyValue">',
    '    <meta itemprop="propertyID" content="item_group_id">',
    '    <meta itemprop="value" content="fb_tshirts">',
    '  </div>',
    '</div>'
  ].join('\n');
  var MODELOS = { og: PADRAO, ld: PADRAO_LD, sc: PADRAO_SC };
  function get() { try { var v = localStorage.getItem(K); return v == null ? PADRAO : v } catch (e) { return PADRAO } }
  function set(t) { try { localStorage.setItem(K, t) } catch (e) { } try { window.dispatchEvent(new CustomEvent('mdpag:mudou')) } catch (e) { } }
  function zera(modo) { try { if (MODELOS[modo] && modo !== 'og') localStorage.setItem(K, MODELOS[modo]); else localStorage.removeItem(K) } catch (e) { } }

  /* schema.org (microdados no corpo): cada itemprop dentro do itemscope é um campo; itemscope dentro de itemscope vira um objeto (offers, additionalProperty) */
  function itens(el) {
    var o = {};
    (function anda(pai) {
      [].forEach.call(pai.children, function (c) {
        if (c.hasAttribute('itemprop')) {
          var nome = c.getAttribute('itemprop').trim(), v;
          if (c.hasAttribute('itemscope')) v = itens(c);
          else v = (c.getAttribute('content') != null ? c.getAttribute('content') : c.getAttribute('href') != null ? c.getAttribute('href') : c.getAttribute('src') != null ? c.getAttribute('src') : c.textContent).trim();
          o[nome] = o[nome] === undefined ? v : [].concat(o[nome], v);
        }
        if (!c.hasAttribute('itemscope')) anda(c);
      });
    })(el);
    return o;
  }
  function leSchema(txt) {
    if (!/itemscope/i.test(txt) || typeof DOMParser === 'undefined') return [];
    var doc = new DOMParser().parseFromString('<!doctype html><body>' + txt + '</body>', 'text/html');
    return [].filter.call(doc.querySelectorAll('[itemscope][itemtype]'), function (e) { return /schema\.org\/Product$/i.test(e.getAttribute('itemtype').trim()) && !e.hasAttribute('itemprop') }).map(itens);
  }

  /* lê as tags: <meta property|name="..." content="..."> e os blocos JSON-LD */
  function le(txt) {
    var og = {}, ld = [], ldErro = false, m, re = /<meta\b([^>]*)>/gi;
    while ((m = re.exec(txt))) {
      var at = m[1], p = at.match(/\b(?:property|name)\s*=\s*(["'])(.*?)\1/i), c = at.match(/\bcontent\s*=\s*(["'])([\s\S]*?)\1/i);
      if (p && c) og[p[2].trim().toLowerCase()] = c[2].trim();
    }
    var rl = /<script\b[^>]*type\s*=\s*(["'])application\/ld\+json\1[^>]*>([\s\S]*?)<\/script>/gi;
    while ((m = rl.exec(txt))) { try { var j = JSON.parse(m[2]); [].concat(j).forEach(function (o) { if (o && o['@graph']) ld = ld.concat(o['@graph']); else ld.push(o) }) } catch (e) { ldErro = true } }
    ld = ld.filter(function (o) { return o && /product/i.test(String(o['@type'] || '')) });
    return { og: og, ld: ld, ldErro: ldErro, sc: leSchema(txt) };
  }
  function semUrlSchema(v) { return String(v || '').replace(/^https?:\/\/schema\.org\//i, '') }
  var DISP = { 'in stock': 1, 'out of stock': 1, 'preorder': 1, 'available for order': 1, 'discontinued': 1 };
  var LD_DISP = { InStock: 'in stock', OutOfStock: 'out of stock', PreOrder: 'preorder', BackOrder: 'available for order', Discontinued: 'discontinued' };
  var COND = { 'new': 1, 'refurbished': 1, 'used': 1 }, LD_COND = { NewCondition: 'new', RefurbishedCondition: 'refurbished', UsedCondition: 'used' };

  /* confere os campos que o catálogo precisa; devolve os valores lidos e a lista de problemas (campo + o que está errado) */
  function confere(c, onde) {
    var P = [];
    function falta(campo) { P.push({ campo: campo, tipo: 'falta', onde: onde }) }
    function errado(campo, tipo) { P.push({ campo: campo, tipo: tipo, onde: onde }) }
    if (!c.id) falta('id');
    if (!c.title) falta('title');
    if (!c.description) falta('description');
    if (!c.link) falta('link'); else if (!/^https?:\/\/\S+\.\S+/.test(c.link)) errado('link', 'url');
    if (!c.image_link) falta('image_link'); else if (!/^https?:\/\/\S+\.\S+/.test(c.image_link)) errado('image_link', 'url');
    if (!c.brand) falta('brand');
    if (!c.availability) falta('availability'); else if (!DISP[c.availability.toLowerCase()]) errado('availability', 'valor');
    if (!c.condition) falta('condition'); else if (!COND[c.condition.toLowerCase()]) errado('condition', 'valor');
    if (!c.amount) falta('price'); else if (!/^\d+(\.\d{1,2})?$/.test(c.amount)) errado('price', 'formato');
    if (!c.currency) falta('currency'); else if (!/^[A-Z]{3}$/.test(c.currency)) errado('currency', 'moeda');
    return P;
  }
  function valida(txt) {
    var L = le(txt == null ? get() : txt), og = L.og, temOg = Object.keys(og).some(function (k) { return /^(og|product):/.test(k) }), res = { og: null, ld: null, sc: null, problemas: [], avisos: [], ldErro: L.ldErro };
    if (temOg) {
      var c = { id: og['product:retailer_item_id'] || '', title: og['og:title'] || '', description: og['og:description'] || '', link: og['og:url'] || '', image_link: og['og:image'] || '',
        brand: og['product:brand'] || '', availability: og['product:availability'] || '', condition: og['product:condition'] || '', amount: og['product:price:amount'] || '', currency: og['product:price:currency'] || '', item_group_id: og['product:item_group_id'] || '' };
      res.og = c; res.problemas = res.problemas.concat(confere(c, 'og'));
    }
    // JSON-LD e schema.org usam os mesmos nomes de campo (productID, name, offers…): a mesma leitura serve aos dois
    function produto(o) {
      var of = [].concat(o.offers || [])[0] || {}, br = o.brand && typeof o.brand === 'object' ? o.brand.name : o.brand, ap = [].concat(o.additionalProperty || []).filter(function (x) { return x && x.propertyID === 'item_group_id' })[0];
      return { id: String(o.productID || o.sku || ''), title: o.name || '', description: o.description || '', link: o.url || '', image_link: [].concat(o.image || [])[0] || '', brand: br || '',
        availability: LD_DISP[semUrlSchema(of.availability)] || semUrlSchema(of.availability), condition: LD_COND[semUrlSchema(of.itemCondition)] || semUrlSchema(of.itemCondition), amount: of.price == null ? '' : String(of.price), currency: of.priceCurrency || '', item_group_id: ap ? String(ap.value) : '' };
    }
    if (L.ld.length) { res.ld = produto(L.ld[0]); res.problemas = res.problemas.concat(confere(res.ld, 'ld')) }
    if (L.sc.length) { res.sc = produto(L.sc[0]); res.problemas = res.problemas.concat(confere(res.sc, 'sc')) }
    if (L.ldErro) res.problemas.push({ campo: 'json', tipo: 'sintaxe', onde: 'ld' });
    if (!res.og && !res.ld && !res.sc && !L.ldErro) res.problemas.push({ campo: 'tags', tipo: 'falta', onde: '' });
    // avisos (não impedem a validação, mas atrapalham o catálogo): id diferente do catálogo e valor de exemplo esquecido
    [res.og, res.ld, res.sc].forEach(function (c, i) {
      if (!c) return; var onde = ['og', 'ld', 'sc'][i];
      if (c.id && c.id !== ID) res.avisos.push({ campo: 'id', tipo: 'catalogo', onde: onde });
      if (/fb_tshirts|facebook_tshirt|example\.org/i.test([c.item_group_id, c.id, c.link, c.image_link].join(' '))) res.avisos.push({ campo: 'exemplo', tipo: 'exemplo', onde: onde });
    });
    return res;
  }
  window.MDPAG = { get: get, set: set, zera: zera, le: le, valida: valida, PADRAO: PADRAO, PADRAO_LD: PADRAO_LD, PADRAO_SC: PADRAO_SC, MODELOS: MODELOS, ID: ID, URL: URL, SITE_URL: SITE_URL };
})();
