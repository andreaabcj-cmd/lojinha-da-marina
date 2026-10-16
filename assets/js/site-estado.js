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
  var COMPRA = function (v, c, nome) { return "<script>\n  fbq('track', '" + (nome || 'Purchase') + "', {value: " + v + ", currency: " + c + "});\n</script>" };
  /* theme.liquid do tema do cliente (faz-de-conta): o código do Pixel colado à mão fica entre <head> e </head> */
  function tema(codigo) {
    var L = ["<!doctype html>", "<html lang=\"pt-BR\">", "<head>", "  <meta charset=\"utf-8\">", "  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">", "  <title>{{ page_title }}</title>", "  {{ content_for_header }}"];
    if (codigo) L.push(codigo);
    L = L.concat(["</head>", "<body>", "  {% section 'header' %}", "  <main>", "    {{ content_for_layout }}", "  </main>", "  {% section 'footer' %}", "</body>", "</html>"]);
    return L.join('\n');
  }
  var DIN = '{{ pedido.total }}';   // valor dinâmico: o site coloca o total do pedido
  function padrao() {
    var id = idCerto();
    return { ativo: false, caso: '', tipo: 'proprio', exigeConsent: false,
      proprio: { cabecalho: base(id), obrigado: COMPRA(DIN, "'BRL'") },
      shopify: { app: { on: true, nivel: 'standard', pixel: 'certo' }, tema: tema('') },
      visitante: { bloqueador: false } };
  }
  var PRESETS = {
    'compra-ausente': function (s) { s.caso = 'Purchase não chega'; s.proprio.obrigado = ''; return s },
    'duplicado-shopify': function (s) { s.caso = 'Compras em dobro'; s.tipo = 'shopify'; s.shopify.tema = tema(base(idCerto()) + '\n' + COMPRA(DIN, "'BRL'")); return s },
    'valor-errado': function (s) { s.caso = 'Valor da compra errado'; s.proprio.obrigado = COMPRA("'R$ 99,90'", "'reais'"); return s },
    'queda-tema': function (s) { s.caso = 'Eventos caíram depois da troca de tema'; s.proprio.cabecalho = ''; return s },
    'pixel-errado': function (s) { s.caso = 'Eventos chegam em outro pixel'; s.proprio.cabecalho = base('000000000000000'); return s },
    'bloqueador': function (s) { s.caso = 'Compra some para quem usa bloqueador'; s.tipo = 'shopify'; s.visitante.bloqueador = true; return s },
    'novo-site': function (s) { s.caso = 'Site novo sem Pixel'; s.proprio.cabecalho = ''; s.proprio.obrigado = ''; return s }
  };
  /* o caso precisa de um conjunto de dados (Pixel) criado no Gerenciador de Eventos simulado: cria o da Mari se ainda não existir */
  function ensureDataset() {
    try {
      var e = JSON.parse(localStorage.getItem('sim.eventos') || 'null') || { datasets: [], testeDesde: 0 };
      if (!e.datasets || !e.datasets.length) { e.datasets = [{ id: String((window.LOJA_CONFIG || {}).pixelId || '1779103133372149'), nome: 'Pixel da Mari', criado: Date.now(), capi: false, am: true, cookies: true, auto: false }]; localStorage.setItem('sim.eventos', JSON.stringify(e)) }
    } catch (x) { }
  }
  function get() { var s = lsGet(); if (!s) s = padrao(); s.proprio = s.proprio || padrao().proprio; s.shopify = s.shopify || padrao().shopify; s.visitante = s.visitante || { bloqueador: false }; return s }
  function set(s) { lsSet(s); pillRender(); try { window.dispatchEvent(new CustomEvent('site:mudou')) } catch (e) { } }

  /* ---------- lê um trecho de código ---------- */
  function le(texto) {
    var t = String(texto || ''), r = { carregador: /connect\.facebook\.net\/[a-z_A-Z]+\/fbevents\.js/.test(t) && /!function\(f,b,e,v,n,t,s\)/.test(t), ids: [], pv: 0, compras: [] };
    t.replace(/fbq\(\s*['"]init['"]\s*,\s*['"](\d+)['"]/g, function (m, id) { r.ids.push(id) });
    t.replace(/fbq\(\s*['"]track(Custom)?['"]\s*,\s*['"]([^'"]+)['"]\s*(?:,\s*\{((?:[^{}]|\{\{.*?\}\})*)\})?\s*\)/g, function (m, cust, nome, ps) {
      if (nome === 'PageView') { r.pv++; return }
      var v = /value\s*:\s*('[^']*'|"[^"]*"|\{\{.*?\}\}|[^,}\s]+)/.exec(ps || ''), c = /currency\s*:\s*('[^']*'|"[^"]*"|[^,}\s]+)/.exec(ps || ''), item = { nome: nome, custom: !!cust, valorTxt: v ? v[1].trim() : null, moedaTxt: c ? c[1].trim() : null };
      if (/^purchase$/i.test(nome)) r.compras.push(item);
    });
    return r;
  }
  function numeroOuNull(txt) { return txt != null && /^\d+(\.\d+)?$/.test(txt) ? +txt : null }
  function strLit(txt) { var m = txt != null && /^['"](.*)['"]$/.exec(txt); return m ? m[1] : null }

  /* ---------- deriva o que o site de fato envia ---------- */
  function fx() {
    var s = get(); if (!s.ativo) return null;
    var good = idCerto(), cab = s.tipo === 'proprio' ? s.proprio.cabecalho : s.shopify.tema, hc = le(cab), r = { caso: s.caso, tipo: s.tipo, bloqueador: !!s.visitante.bloqueador, good: good, head: null, app: null, comprasPagina: [], comprasCabecalho: [] };
    if (hc.carregador && hc.ids.length) r.head = { ids: hc.ids.filter(function (x, i, a) { return a.indexOf(x) === i }), pv: hc.pv };
    if (s.tipo === 'proprio') { r.comprasPagina = le(s.proprio.obrigado).compras }
    if (hc.carregador) r.comprasCabecalho = hc.compras;
    if (s.tipo === 'shopify' && s.shopify.app.on && s.shopify.app.pixel !== 'nenhum') r.app = { id: s.shopify.app.pixel === 'certo' ? good : '000000000000000', nivel: s.shopify.app.nivel };
    r.temPixel = !!(r.head || r.app);
    r.idPrincipal = r.head ? r.head.ids[0] : r.app ? r.app.id : null;
    return r;
  }
  /* copias(nome, params, pagina) → lista de {nome, params, custom, pid, status, fonte} que o site envia ao disparar o evento `nome` */
  function copias(nome, params, F, ehPaginaObrigado) {
    var out = [], bl = F.bloqueador;
    function add(n, p, custom, pid, fonte) { out.push({ nome: n, params: p, custom: !!custom, pid: pid, fonte: fonte || 'navegador', status: (bl && (fonte || 'navegador') === 'navegador') ? 'bloqueado' : 'enviado' }) }
    function compraParams(c) {
      var p = JSON.parse(JSON.stringify(params || {})), v = c.valorTxt;
      if (v == null) delete p.value; else if (v === '{{ pedido.total }}') { /* valor dinâmico: o do pedido */ } else { var n = numeroOuNull(v), sl = strLit(v); p.value = n != null ? n : sl != null ? sl : v }
      var cu = c.moedaTxt; if (cu == null) delete p.currency; else { var m = strLit(cu); p.currency = m != null ? m : cu }
      return p;
    }
    if (nome === 'PageView') {
      if (F.head) F.head.ids.forEach(function (id) { for (var i = 0; i < F.head.pv; i++) add('PageView', {}, false, id) });
      if (F.app) add('PageView', {}, false, F.app.id);
      F.comprasCabecalho.forEach(function (c) { (F.head ? F.head.ids : []).forEach(function (id) { add(c.nome, compraParams(c), c.nome !== 'Purchase', id) }) });
      return out;
    }
    if (nome === 'Purchase') {
      if (F.head) F.comprasPagina.forEach(function (c) { F.head.ids.forEach(function (id) { add(c.nome, compraParams(c), c.nome !== 'Purchase', id) }) });
      if (F.app) { add('Purchase', params, false, F.app.id); if (F.app.nivel !== 'standard') add('Purchase', params, false, F.app.id, 'servidor') }
      return out;
    }
    if (F.head && F.tipo === 'proprio') F.head.ids.forEach(function (id) { add(nome, params, false, id) });   // no site próprio o código dos eventos é do site; na plataforma só o app envia os demais eventos
    if (F.app) add(nome, params, false, F.app.id);
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
    tema: tema, get: get, set: set, fx: fx, le: le, copias: copias, base: base, compra: COMPRA, idCerto: idCerto, padrao: padrao,
    ativo: function () { return !!get().ativo },
    preset: function (nome) { ensureDataset(); var s = PRESETS[nome](padrao()); s.ativo = true; set(s); try { localStorage.removeItem('sim.feed'); sessionStorage.removeItem('loja.log'); localStorage.removeItem('loja.pedidosDisparados') } catch (e) { } },   // começa um caso do zero (sem eventos antigos)
    encerra: function () { var s = get(); s.ativo = false; set(s) },
    reseta: function () { set(padrao()) }
  };
  window.SITE_FX = fx;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', pillRender); else pillRender();
})();
