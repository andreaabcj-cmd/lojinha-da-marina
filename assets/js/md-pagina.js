/* A página da Ecobag Folha no "site de mentirinha": o <head> dela (com as tags de microdados) fica salvo no navegador
   (localStorage "site.ecobagHead"). O Editor de arquivos do site edita este texto e o simulador do Microdata Debugger lê o que está escrito.
   Formatos e nomes dos campos: Meta for Developers › Catálogo › “Microdata tags” (lido em 20/10/2026):
   - OpenGraph: <meta property="og:title|og:description|og:url|og:image|product:brand|product:availability|product:condition|
     product:price:amount|product:price:currency|product:retailer_item_id|product:item_group_id"> no <head>;
   - JSON-LD (schema.org Product) num <script type="application/ld+json">: productID, name, description, url, image, brand,
     offers[{price, priceCurrency, itemCondition, availability}], additionalProperty item_group_id.
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
  function get() { try { var v = localStorage.getItem(K); return v == null ? PADRAO : v } catch (e) { return PADRAO } }
  function set(t) { try { localStorage.setItem(K, t) } catch (e) { } try { window.dispatchEvent(new CustomEvent('mdpag:mudou')) } catch (e) { } }
  function zera() { try { localStorage.removeItem(K) } catch (e) { } }

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
    return { og: og, ld: ld, ldErro: ldErro };
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
    var L = le(txt == null ? get() : txt), og = L.og, temOg = Object.keys(og).some(function (k) { return /^(og|product):/.test(k) }), res = { og: null, ld: null, problemas: [], avisos: [], ldErro: L.ldErro };
    if (temOg) {
      var c = { id: og['product:retailer_item_id'] || '', title: og['og:title'] || '', description: og['og:description'] || '', link: og['og:url'] || '', image_link: og['og:image'] || '',
        brand: og['product:brand'] || '', availability: og['product:availability'] || '', condition: og['product:condition'] || '', amount: og['product:price:amount'] || '', currency: og['product:price:currency'] || '', item_group_id: og['product:item_group_id'] || '' };
      res.og = c; res.problemas = res.problemas.concat(confere(c, 'og'));
    }
    if (L.ld.length) {
      var o = L.ld[0], of = [].concat(o.offers || [])[0] || {}, br = o.brand && typeof o.brand === 'object' ? o.brand.name : o.brand, ap = [].concat(o.additionalProperty || []).filter(function (x) { return x && x.propertyID === 'item_group_id' })[0];
      var d = { id: String(o.productID || o.sku || ''), title: o.name || '', description: o.description || '', link: o.url || '', image_link: [].concat(o.image || [])[0] || '', brand: br || '',
        availability: LD_DISP[semUrlSchema(of.availability)] || semUrlSchema(of.availability), condition: LD_COND[semUrlSchema(of.itemCondition)] || semUrlSchema(of.itemCondition), amount: of.price == null ? '' : String(of.price), currency: of.priceCurrency || '', item_group_id: ap ? String(ap.value) : '' };
      res.ld = d; res.problemas = res.problemas.concat(confere(d, 'ld'));
    }
    if (L.ldErro) res.problemas.push({ campo: 'json', tipo: 'sintaxe', onde: 'ld' });
    if (!res.og && !res.ld && !L.ldErro) res.problemas.push({ campo: 'tags', tipo: 'falta', onde: '' });
    // avisos (não impedem a validação, mas atrapalham o catálogo): id diferente do catálogo e valor de exemplo esquecido
    [res.og, res.ld].forEach(function (c, i) {
      if (!c) return; var onde = i ? 'ld' : 'og';
      if (c.id && c.id !== ID) res.avisos.push({ campo: 'id', tipo: 'catalogo', onde: onde });
      if (/fb_tshirts|facebook_tshirt|example\.org/i.test([c.item_group_id, c.id, c.link, c.image_link].join(' '))) res.avisos.push({ campo: 'exemplo', tipo: 'exemplo', onde: onde });
    });
    return res;
  }
  window.MDPAG = { get: get, set: set, zera: zera, le: le, valida: valida, PADRAO: PADRAO, ID: ID, URL: URL, SITE_URL: SITE_URL };
})();
