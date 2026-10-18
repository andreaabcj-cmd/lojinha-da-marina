/* ESTADO DO SITE DO CLIENTE (simulado) — o "site de verdade" do caso em andamento.
   A Lojinha da Marina faz de conta que é o site de um cliente. O que está escrito nos ARQUIVOS DO SITE (editor de arquivos) ou no
   ADMIN DA PLATAFORMA (Shopify: tema + app Facebook e Instagram) decide quais eventos o Pixel envia. É isso que o aluno investiga
   (Consultor de Dados, Eventos de teste, Código-fonte) e corrige (colando código, removendo código, mudando o nível de dados).
   - Só vale quando um caso está ativo (SITE.ativo()). Sem caso, a Loja e as aulas de Pixel continuam exatamente como sempre.
   - O Pixel de verdade (config.js) continua recebendo só os eventos normais da Loja: isto muda apenas o que a SIMULAÇÃO mostra.
   Carregado ANTES de pixel-aula.js nas páginas da Loja, e nas telas: Gerenciador de Eventos, editor de arquivos, admin Shopify, código-fonte.
   Real (Central de Ajuda da Meta e da Shopify, 16/10/2026): código base no head; evento só na página da ação; nomes diferenciam maiúsculas;
   value numérico com ponto e currency de 3 letras; Shopify: Sales channels › Facebook & Instagram › Settings › Share data settings
   (Standard = só o pixel, bloqueável por bloqueador; Enhanced/Maximum = pixel + API de Conversões, que manda o Purchase do servidor);
   código do Pixel colocado à mão no theme.liquid + app = pixel duplicado (remover o manual). INVENTADOS: o cliente, os arquivos, os valores. */
(function () {
  var K = 'loja.site';
  function lsGet() { try { return JSON.parse(localStorage.getItem(K) || 'null') } catch (e) { return null } }
  function lsSet(v) { try { localStorage.setItem(K, JSON.stringify(v)) } catch (e) { } }
  function idCerto() {
    try { var e = JSON.parse(localStorage.getItem('sim.eventos') || 'null'), d = e && e.datasets && e.datasets[0]; if (d) return String(d.id) } catch (x) { }
    return String((window.LOJA_CONFIG || {}).pixelId || '1779103133372149');
  }
  /* ---------- trechos de código (os mesmos que a Meta entrega no Gerenciador de Eventos; versão de treino) ---------- */
  function base(id, comPageView) {
    return "<!-- Meta Pixel Code -->\n<script>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', '" + id + "');\n" + (comPageView === false ? '' : "fbq('track', 'PageView');\n") + "</script>\n<!-- End Meta Pixel Code -->";
  }
  var COMPRA = function (v, c, nome, eventId) { return "<script>\n  fbq('track', '" + (nome || 'Purchase') + "', {value: " + v + ", currency: " + c + "}" + (eventId ? ", {eventID: '{{ pedido.id }}'}" : "") + ");\n</script>" };
  /* theme.liquid do tema do cliente: o início do arquivo do tema Horizon como está numa loja real (conferido em 19/10/2026);
     o código do Pixel colado à mão fica entre {{ content_for_header }} e </head> */
  function tema(codigo) {
    var L = ["<!doctype html>", "<html", "  {% if request.design_mode %}", "    class=\"shopify-design-mode\"", "  {% endif %}", "  lang=\"{{ request.locale.iso_code }}\"", "  dir=\"{{ request.locale.direction | default: 'ltr' }}\"", ">",
      "  <head>", "    {%- render 'meta-tags' -%}", "    {%- render 'stylesheets' -%}", "    {%- render 'scripts' -%}", "    {%- render 'theme-styles-variables' -%}", "    {%- render 'color-palette' -%}", "", "    {{ content_for_header }}"];
    if (codigo) L.push(codigo);
    L = L.concat(["  </head>", "", "  <body class=\"page-width-{{ settings.page_width }}\">", "    {% sections 'header-group' %}", "    <main id=\"MainContent\">", "      {{ content_for_layout }}", "    </main>", "    {% sections 'footer-group' %}", "  </body>", "</html>"]);
    return L.join('\n');
  }
  /* pixel personalizado da Shopify (Configurações › Eventos de clientes › Adicionar pixel personalizado): só JavaScript, sem HTML;
     roda isolado, fora do tema (NÃO aparece no código-fonte da página) e recebe os eventos da loja por analytics.subscribe (conferido em 19/10/2026) */
  function pixelCustom(id) {
    return ["!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?", "n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;", "n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;", "t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,", "document,'script','https://connect.facebook.net/en_US/fbevents.js');", "fbq('init', '" + id + "');", "", "analytics.subscribe('page_viewed', function (event) {", "  fbq('track', 'PageView');", "});", "", "analytics.subscribe('checkout_completed', function (event) {", "  fbq('track', 'Purchase', {", "    value: event.data.checkout.totalPrice.amount,", "    currency: event.data.checkout.currencyCode", "  });", "});"].join('\n');
  }
  var DIN = '{{ pedido.total }}';   // valor dinâmico: o site coloca o total do pedido
  /* produtos da loja Shopify de treino: fb = disponível no canal Facebook e Instagram; arq = arquivado; img/cat = dados que o Facebook exige (imagem e categoria do Google) */
  function prods() {
    return [{ id: 1, nome: 'Caneca azul', preco: 'R$ 49,90', fb: true, arq: false, img: true, cat: 'Casa e jardim > Cozinha' },
      { id: 2, nome: 'Camiseta Montanha', preco: 'R$ 79,90', fb: true, arq: false, img: true, cat: '' },
      { id: 3, nome: 'Ecobag Folha', preco: 'R$ 34,90', fb: false, arq: false, img: true, cat: 'Vestuário e acessórios > Bolsas' },
      { id: 4, nome: 'Boné Azul', preco: 'R$ 59,90', fb: false, arq: true, img: true, cat: 'Vestuário e acessórios > Chapéus' }];
  }
  function padrao() {
    var id = idCerto();
    return { ativo: false, caso: '', tipo: 'proprio', exigeConsent: false, ds: { am: true, capi: false },
      proprio: { cabecalho: base(id), obrigado: COMPRA(DIN, "'BRL'", 'Purchase', true) },
      shopify: { app: { on: true, nivel: 'standard', pixel: 'certo' }, tema: tema(''), canal: { instalado: true, conectado: true }, prods: prods() },
      woo: { plugin: 'ativo', atualizacao: false, conectado: false, sync: true, sincronizou: false },
      visitante: { bloqueador: false } };
  }
  var PRESETS = {
    'compra-ausente': function (s) { s.caso = 'Purchase não chega'; s.proprio.obrigado = ''; return s },
    'duplicado-shopify': function (s) { s.caso = 'Compras em dobro'; s.tipo = 'shopify'; s.shopify.tema = tema(base(idCerto()) + '\n' + COMPRA(DIN, "'BRL'")); return s },
    'valor-errado': function (s) { s.caso = 'Valor da compra errado'; s.proprio.obrigado = COMPRA("'R$ 99,90'", "'reais'"); return s },
    'queda-tema': function (s) { s.caso = 'Eventos caíram depois da troca de tema'; s.proprio.cabecalho = ''; return s },
    'pixel-errado': function (s) { s.caso = 'Eventos chegam em outro pixel'; s.proprio.cabecalho = base('000000000000000'); return s },
    'bloqueador': function (s) { s.caso = 'Compra some para quem usa bloqueador'; s.tipo = 'shopify'; s.visitante.bloqueador = true; return s },
    'novo-site': function (s) { s.caso = 'Site novo sem Pixel'; s.proprio.cabecalho = ''; s.proprio.obrigado = ''; return s },
    /* Diagnóstico: Purchase no cabeçalho (dispara em todas as páginas) e Shopify conectada sem Pixel no canal */
    'purchase-cabecalho': function (s) { s.caso = 'Purchase em todas as páginas'; s.proprio.cabecalho = base(idCerto()) + '\n' + COMPRA(DIN, "'BRL'"); s.proprio.obrigado = ''; return s },
    'pixel-personalizado-html': function (s) { s.caso = 'O pixel personalizado não salva'; s.tipo = 'shopify'; s.shopify.app = { on: false, nivel: 'standard', pixel: 'nenhum' }; s.shopify.canal = { instalado: false, conectado: false }; s.shopify.tema = tema(''); s.shopify.pixelCustom = { nome: 'Meta Pixel (manual)', on: false, salvo: false, codigo: '<script>\n' + pixelCustom(idCerto()) + '\n</script>' }; return s },
    'pixel-personalizado-dobro': function (s) { s.caso = 'Compras em dobro: pixel personalizado + app'; s.tipo = 'shopify'; s.shopify.app = { on: true, nivel: 'enhanced', pixel: 'certo' }; s.shopify.canal = { instalado: true, conectado: true, ativos: { portfolio: 'Lojinha da Marina (portfólio)', pagina: 'Lojinha da Marina' } }; s.shopify.pixelCustom = { nome: 'Meta Pixel (manual)', on: true, codigo: pixelCustom(idCerto()) }; return s },
    'shopify-sem-pixel': function (s) { s.caso = 'Shopify conectada, mas sem compras'; s.tipo = 'shopify'; s.shopify.app = { on: false, nivel: 'standard', pixel: 'nenhum' }; s.shopify.tema = tema(''); return s },
    /* Integrações: Shopify e WooCommerce */
    'shopify-novo': function (s) { s.caso = 'Loja Shopify nova, ainda sem a Meta'; s.tipo = 'shopify'; s.shopify.app = { on: false, nivel: 'standard', pixel: 'nenhum' }; s.shopify.canal = { instalado: false, conectado: false }; s.shopify.tema = tema(''); return s },
    'shopify-conectada': function (s) { s.caso = 'Loja Shopify conectada à Meta'; s.tipo = 'shopify'; s.shopify.app = { on: true, nivel: 'enhanced', pixel: 'certo' }; return s },
    'shopify-produtos': function (s) { s.caso = 'Produtos que não chegam à Meta'; s.tipo = 'shopify'; s.shopify.app = { on: true, nivel: 'enhanced', pixel: 'certo' }; return s },
    'woo-novo': function (s) { s.caso = 'Loja WooCommerce nova, ainda sem a Meta'; s.tipo = 'woo'; s.proprio.cabecalho = ''; s.proprio.obrigado = ''; s.woo = { plugin: 'inativo', atualizacao: false, conectado: false, sync: true, sincronizou: false }; return s },
    'woo-conectada': function (s) { s.caso = 'Loja WooCommerce conectada, plugin desatualizado'; s.tipo = 'woo'; s.proprio.cabecalho = ''; s.proprio.obrigado = ''; s.woo = { plugin: 'ativo', atualizacao: true, conectado: true, sync: true, sincronizou: true }; return s },
    /* Pixel avançado */
    'am-desligada': function (s) { s.caso = 'Correspondência avançada desligada'; s.ds = { am: false, capi: false }; return s },
    'emq-baixa': function (s) { s.caso = 'Qualidade do sinal baixa'; s.ds = { am: false, capi: true }; s.proprio.obrigado = COMPRA(DIN, "'BRL'", 'Purchase', true); return s },
    'capi-sem-eventid': function (s) { s.caso = 'Compras duplicadas entre navegador e servidor'; s.ds = { am: true, capi: true }; s.proprio.obrigado = COMPRA(DIN, "'BRL'"); return s },
    'info-proibida': function (s) { s.caso = 'Informação sensível nos eventos'; s.ds = { am: true, capi: false }; s.proprio.obrigado = COMPRA(DIN, "'BRL'") + "\n<script>\n  fbq('trackCustom', 'AgendouConsulta', {doenca: 'diabetes', especialidade: 'endocrinologia'});\n</script>"; return s },
    'sem-consentimento': function (s) { s.caso = 'Pixel dispara antes do aceite de cookies'; s.ds = { am: true, capi: false }; return s }
  };
  /* o caso precisa de um conjunto de dados (Pixel) criado no Gerenciador de Eventos simulado: cria o da Mari se ainda não existir */
  function ensureDataset() {
    try {
      var e = JSON.parse(localStorage.getItem('sim.eventos') || 'null') || { datasets: [], testeDesde: 0 };
      if (!e.datasets || !e.datasets.length) { e.datasets = [{ id: String((window.LOJA_CONFIG || {}).pixelId || '1779103133372149'), nome: 'Pixel da Mari', criado: Date.now(), capi: false, am: true, cookies: true, auto: false }]; localStorage.setItem('sim.eventos', JSON.stringify(e)) }
    } catch (x) { }
  }
  function dsGet() { try { var e = JSON.parse(localStorage.getItem('sim.eventos') || 'null'); return (e && e.datasets && e.datasets[0]) || {} } catch (x) { return {} } }
  function dsSet(p) { try { var e = JSON.parse(localStorage.getItem('sim.eventos') || 'null'); if (e && e.datasets && e.datasets[0]) { for (var k in p) e.datasets[0][k] = p[k]; localStorage.setItem('sim.eventos', JSON.stringify(e)) } } catch (x) { } }
  function get() { var s = lsGet(); if (!s) s = padrao(); s.proprio = s.proprio || padrao().proprio; s.shopify = s.shopify || padrao().shopify; s.shopify.canal = s.shopify.canal || { instalado: true, conectado: true }; s.shopify.prods = s.shopify.prods || prods(); s.woo = s.woo || padrao().woo; s.visitante = s.visitante || { bloqueador: false }; return s }
  function set(s) { lsSet(s); pillRender(); try { window.dispatchEvent(new CustomEvent('site:mudou')) } catch (e) { } }

  /* ---------- lê um trecho de código ---------- */
  function pares(ps) { var o = {}; String(ps || '').replace(/(\w+)\s*:\s*('[^']*'|"[^"]*"|\{\{.*?\}\}|[^,}\s]+)/g, function (m, k, v) { var s = /^['"](.*)['"]$/.exec(v); o[k] = s ? s[1] : (/^\d+(\.\d+)?$/.test(v) ? +v : v) }); return o }
  function le(texto) {
    var t = String(texto || ''), r = { carregador: /connect\.facebook\.net\/[a-z_A-Z]+\/fbevents\.js/.test(t) && /!function\(f,b,e,v,n,t,s\)/.test(t), ids: [], pv: 0, compras: [], eventos: [], initParams: [], consentRevoke: false };
    var iInit = t.search(/fbq\(\s*['"]init['"]/), iRev = t.search(/fbq\(\s*['"]consent['"]\s*,\s*['"]revoke['"]/);
    r.consentRevoke = iRev >= 0 && (iInit < 0 || iRev < iInit);   // o consentimento é revogado ANTES do init: o Pixel espera o aceite
    t.replace(/fbq\(\s*['"]init['"]\s*,\s*['"](\d+)['"]\s*(?:,\s*\{([^}]*)\})?/g, function (m, id, ps) { r.ids.push(id); String(ps || '').replace(/(\w+)\s*:/g, function (x, k) { if (r.initParams.indexOf(k) < 0) r.initParams.push(k) }) });
    t.replace(/fbq\(\s*['"]track(Custom)?['"]\s*,\s*['"]([^'"]+)['"]\s*(?:,\s*\{((?:[^{}]|\{\{.*?\}\})*)\})?\s*(?:,\s*\{((?:[^{}]|\{\{.*?\}\})*)\})?\s*\)/g, function (m, cust, nome, ps, opts) {
      if (nome === 'PageView') { r.pv++; return }
      var v = /value\s*:\s*('[^']*'|"[^"]*"|\{\{.*?\}\}|[^,}\s]+)/.exec(ps || ''), c = /currency\s*:\s*('[^']*'|"[^"]*"|[^,}\s]+)/.exec(ps || ''), item = { nome: nome, custom: !!cust, valorTxt: v ? v[1].trim() : null, moedaTxt: c ? c[1].trim() : null, temEventId: /eventID/i.test(opts || ''), params: pares(ps) };
      r.eventos.push(item); if (/^purchase$/i.test(nome)) r.compras.push(item);
    });
    return r;
  }
  function numeroOuNull(txt) { return txt != null && /^\d+(\.\d+)?$/.test(txt) ? +txt : null }
  function strLit(txt) { var m = txt != null && /^['"](.*)['"]$/.exec(txt); return m ? m[1] : null }

  /* ---------- deriva o que o site de fato envia ---------- */
  function fx() {
    var s = get(); if (!s.ativo) return null;
    var good = idCerto(), cab = s.tipo === 'shopify' ? s.shopify.tema : s.proprio.cabecalho, hc = le(cab), r = { caso: s.caso, tipo: s.tipo, bloqueador: !!s.visitante.bloqueador, good: good, head: null, app: null, comprasPagina: [], comprasCabecalho: [] };
    if (hc.carregador && hc.ids.length) r.head = { ids: hc.ids.filter(function (x, i, a) { return a.indexOf(x) === i }), pv: hc.pv };
    if (s.tipo === 'proprio') { r.comprasPagina = le(s.proprio.obrigado).compras }
    if (hc.carregador) r.comprasCabecalho = hc.compras;
    if (s.tipo === 'shopify' && s.shopify.app.on && s.shopify.app.pixel !== 'nenhum') r.app = { id: s.shopify.app.pixel === 'certo' ? good : '000000000000000', nivel: s.shopify.app.nivel };
    if (s.tipo === 'woo' && s.woo.conectado && s.woo.plugin === 'ativo') r.app = { id: good, nivel: 'enhanced' };   // plugin Meta for WooCommerce: pixel + API de Conversões
    var pc = s.tipo === 'shopify' && s.shopify.pixelCustom; if (pc && pc.on && !/<\/?(script|noscript|img)\b/i.test(pc.codigo)) { var lc = le(pc.codigo); if (lc.carregador && lc.ids.length) r.custom = { id: lc.ids[0], pv: /analytics\.subscribe\(\s*['"]page_viewed/.test(pc.codigo) && /fbq\(\s*['"]track['"]\s*,\s*['"]PageView/.test(pc.codigo), compra: /analytics\.subscribe\(\s*['"]checkout_completed/.test(pc.codigo) && /['"]Purchase['"]/.test(pc.codigo) } }
    var ds = dsGet(); r.ds = { am: !!ds.am, capi: !!ds.capi }; r.amManual = hc.initParams.filter(function (k) { return ['em', 'ph', 'fn', 'ln', 'ct', 'st', 'zp', 'country', 'external_id'].indexOf(k) >= 0 }); r.consentGate = !!hc.consentRevoke;
    r.eventosPagina = s.tipo === 'proprio' ? le(s.proprio.obrigado).eventos.filter(function (e) { return !/^purchase$/i.test(e.nome) }) : [];
    r.temPixel = !!(r.head || r.app || r.custom);
    r.idPrincipal = r.head ? r.head.ids[0] : r.app ? r.app.id : null;
    return r;
  }
  /* copias(nome, params, pagina) → lista de {nome, params, custom, pid, status, fonte} que o site envia ao disparar o evento `nome` */
  function copias(nome, params, F) {
    var out = [], bl = F.bloqueador;
    var udHead = F.ds && F.ds.am ? 'all' : (F.amManual && F.amManual.length ? F.amManual : null);   // correspondência avançada: automática (liga/desliga no Gerenciador de Eventos) ou manual (no init do código)
    function add(n, p, custom, pid, fonte, eidModo, ud) { out.push({ nome: n, params: p, custom: !!custom, pid: pid, fonte: fonte || 'navegador', eidModo: eidModo || 'random', ud: ud === undefined ? null : ud, status: (bl && (fonte || 'navegador') === 'navegador') ? 'bloqueado' : 'enviado' }) }
    function compraParams(c) {
      var p = JSON.parse(JSON.stringify(params || {})), v = c.valorTxt;
      if (v == null) delete p.value; else if (v === '{{ pedido.total }}') { /* valor dinâmico: o do pedido */ } else { var n = numeroOuNull(v), sl = strLit(v); p.value = n != null ? n : sl != null ? sl : v }
      var cu = c.moedaTxt; if (cu == null) delete p.currency; else { var m = strLit(cu); p.currency = m != null ? m : cu }
      return p;
    }
    if (nome === 'PageView') {
      if (F.head) F.head.ids.forEach(function (id) { for (var i = 0; i < F.head.pv; i++) add('PageView', {}, false, id, 'navegador', 'random', udHead) });
      if (F.app) add('PageView', {}, false, F.app.id, 'navegador', 'random', F.app.nivel !== 'standard' ? 'all' : null);
      F.comprasCabecalho.forEach(function (c) { (F.head ? F.head.ids : []).forEach(function (id) { add(c.nome, compraParams(c), c.nome !== 'Purchase', id, 'navegador', c.temEventId ? 'shop' : 'random', udHead) }) });
      if (F.custom && F.custom.pv) add('PageView', {}, false, F.custom.id, 'navegador', 'random', null);   // pixel personalizado: outro PageView, com outro event_id
      return out;
    }
    if (nome === 'Purchase') {
      if (F.head) F.comprasPagina.forEach(function (c) { F.head.ids.forEach(function (id) { add(c.nome, compraParams(c), c.nome !== 'Purchase', id, 'navegador', c.temEventId ? 'shop' : 'random', udHead) }) });
      if (F.head) F.eventosPagina.forEach(function (c) { F.head.ids.forEach(function (id) { add(c.nome, c.params, c.custom, id, 'navegador', 'random', udHead) }) });
      // API de Conversões (site próprio): com a opção ligada no Gerenciador de Eventos, a compra também vai do servidor, com o mesmo event_id da Loja
      if (F.tipo === 'proprio' && F.ds && F.ds.capi && F.head && F.comprasPagina.length) add('Purchase', params, false, F.head.ids[0], 'servidor', 'shop', udHead);
      if (F.app) { add('Purchase', params, false, F.app.id, 'navegador', 'shop', F.app.nivel !== 'standard' ? 'all' : null); if (F.app.nivel !== 'standard') add('Purchase', params, false, F.app.id, 'servidor', 'shop', 'all') }
      if (F.custom && F.custom.compra) add('Purchase', params, false, F.custom.id, 'navegador', 'random', null);   // pixel personalizado: a mesma compra de novo, sem o event_id do app
      return out;
    }
    if (F.head && F.tipo === 'proprio') F.head.ids.forEach(function (id) { add(nome, params, false, id, 'navegador', 'random', udHead) });   // no site próprio o código dos eventos é do site; na plataforma só o app envia os demais eventos
    if (F.app) add(nome, params, false, F.app.id, 'navegador', 'random', F.app.nivel !== 'standard' ? 'all' : null);
    return out;
  }

  /* ---------- aviso "caso em andamento" ---------- */
  var pill = null;
  function pillRender() {
    var s = get(), ok = s.ativo && !!document.body; if (!document.body) return;
    if (!ok) { if (pill) { pill.remove(); pill = null } return }
    if (!pill) { pill = document.createElement('div'); pill.id = 'siteCaso'; pill.setAttribute('data-sem-traduzir', '1'); pill.style.cssText = 'position:fixed;left:50%;transform:translateX(-50%);bottom:10px;max-width:92vw;z-index:2147482000;background:#16294A;color:#fff;border-radius:999px;padding:7px 14px;font:700 13px "Segoe UI",sans-serif;box-shadow:3px 3px 0 #F2B632;display:flex;gap:10px;align-items:center'; document.body.appendChild(pill) }
    var en = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' } catch (e) { return false } })();
    pill.innerHTML = '🩺 ' + (en ? 'Caso del cliente' : 'Caso do cliente') + ': ' + String(s.caso || '').replace(/[<>&]/g, '') + ' <button style="border:0;border-radius:999px;background:#F2B632;color:#16294A;font:800 12px \'Segoe UI\',sans-serif;padding:3px 10px;cursor:pointer" id="siteCasoFim">' + (en ? 'Encerrar caso' : 'Encerrar caso') + '</button>';
    var b = document.getElementById('siteCasoFim'); if (b) b.onclick = function () { SITE.encerra() };
  }
  window.SITE = {
    pixelCustom: pixelCustom, tema: tema, get: get, set: set, fx: fx, le: le, copias: copias, base: base, compra: COMPRA, idCerto: idCerto, padrao: padrao, prods: prods,
    ativo: function () { return !!get().ativo },
    dataset: function () { return dsGet() }, setDataset: dsSet,
    preset: function (nome) { ensureDataset(); var s = PRESETS[nome](padrao()); s.ativo = true; dsSet(s.ds || { am: true, capi: false }); try { if (nome === 'sem-consentimento') localStorage.removeItem('loja.consent') } catch (e) { } set(s); try { localStorage.removeItem('sim.feed'); sessionStorage.removeItem('loja.log'); localStorage.removeItem('loja.pedidosDisparados') } catch (e) { } },   // começa um caso do zero (sem eventos antigos)
    encerra: function () { var s = get(); s.ativo = false; set(s) },
    reseta: function () { set(padrao()) }
  };
  window.SITE_FX = fx;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pillRender); else pillRender();
})();
