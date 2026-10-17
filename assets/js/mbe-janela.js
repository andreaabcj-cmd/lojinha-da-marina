/* JANELA DO MBE (Meta Business Extension) — a janelinha da Meta que abre DENTRO da plataforma parceira (Shopify, WooCommerce…)
   quando o lojista clica em “Conectar conta”. Serve às duas plataformas de treino (admin-shopify e admin-woo).
   Real (documentação da Meta para desenvolvedores, inglês, 16/10/2026): o fluxo do Meta Business Extension permite ao lojista criar ou selecionar
   o portfólio empresarial, a Página e o Pixel (e a conta de anúncios, e o catálogo quando o parceiro usa catálogo).
   Real (Central de Ajuda da Shopify, 16/10/2026): o portfólio escolhido precisa ser dono da Página, senão a Página não aparece na lista.
   Real (documentação do WooCommerce): o assistente pede Business Manager (com autenticação em dois fatores), Página, conta de anúncios, Pixel e catálogo.
   INVENTADOS/A CONFERIR: o visual exato, a ordem das telas dentro da janela, os nomes dos botões em português, os portfólios e as Páginas do exemplo.
   Estado da janela fica em sessionStorage (sobrevive a recarregar a página). Quem usa registra o que fazer ao concluir: MBEJ.registra('shopify', fn). */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return LANG === 'es' ? es : pt }
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var K = 'mbej.estado', fns = {}, S = null;
  var PORT = [{ id: 'loja', nome: 'Lojinha da Marina (portfólio)', paginas: ['Lojinha da Marina'] }, { id: 'pessoal', nome: 'Portfólio pessoal da Mari', paginas: [] }];
  function le() { try { return JSON.parse(sessionStorage.getItem(K) || 'null') } catch (e) { return null } }
  function grava() { try { if (S) sessionStorage.setItem(K, JSON.stringify(S)); else sessionStorage.removeItem(K) } catch (e) { } }
  function pixelNome() { return 'Pixel da Mari (' + (window.SITE ? SITE.idCerto() : '1779103133372149') + ')' }
  function sel(id, rotulo, opcoes, v, tt, obrig) {
    return '<label class="mj-lbl">' + rotulo + (obrig ? ' *' : '') + '<select id="' + id + '" data-t="' + tt + '"><option value="" data-pt="">' + T('Selecione…', 'Selecciona…') + '</option>' + opcoes.map(function (o) { return '<option value="' + esc(o[0]) + '" data-pt="' + esc(o[1]) + '"' + (v === o[0] ? ' selected' : '') + '>' + esc(o[1]) + '</option>' }).join('') + '</select></label>';
  }
  function campos() { return S.campos }
  function pronto() { var c = campos(), a = S.sel; return (c.indexOf('portfolio') < 0 || a.portfolio) && (c.indexOf('pagina') < 0 || a.pagina) && (c.indexOf('conta') < 0 || a.conta) && (c.indexOf('pixel') < 0 || a.pixel) && (c.indexOf('catalogo') < 0 || a.catalogo) }
  function corpo() {
    var plat = S.plataforma;
    if (S.modo === 'gerenciar') {
      var a = S.ativos || {};
      return '<h2>' + T('Conexão com a Meta', 'Conexión con Meta') + '</h2><p class="mj-mud">' + T('Contas conectadas a ', 'Cuentas conectadas a ') + esc(plat) + ':</p><ul class="mj-lista" data-t="mbe-ativos">' + [['portfolio', T('Portfólio empresarial', 'Portafolio comercial')], ['pagina', T('Página', 'Página')], ['conta', T('Conta de anúncios', 'Cuenta publicitaria')], ['pixel', 'Pixel'], ['catalogo', T('Catálogo', 'Catálogo')]].filter(function (x) { return a[x[0]] }).map(function (x) { return '<li><b>' + x[1] + ':</b> ' + esc(a[x[0]]) + '</li>' }).join('') + '</ul>' +
        '<p class="mj-aviso">' + T('Ao desconectar, os eventos e a sincronização de produtos desta loja com a Meta param. Antes, desligue a sincronização automática.', 'Al desconectar, los eventos y la sincronización de productos de esta tienda con Meta se detienen. Antes, desactiva la sincronización automática.') + '</p>' +
        '<div class="mj-rod"><button class="mj-bt" data-mj="fechar" data-t="mbe-fechar">' + T('Fechar', 'Cerrar') + '</button><button class="mj-bt perigo" data-mj="desconectar" data-t="mbe-desconectar">' + T('Desconectar', 'Desconectar') + '</button></div>';
    }
    if (S.passo === 0) {
      return '<h2>' + T('Conectar ', 'Conectar ') + esc(plat) + T(' à Meta', ' a Meta') + '</h2><p>' + T('Entre com a conta de Facebook de quem administra a empresa. A Meta vai pedir para você escolher o que conectar à loja.', 'Entra con la cuenta de Facebook de quien administra la empresa. Meta te pedirá elegir qué conectar a la tienda.') + '</p>' +
        '<div class="mj-perfil"><span class="mj-av">M</span><div><b>Mari</b><small>' + T('Conta de Facebook de treino', 'Cuenta de Facebook de práctica') + '</small></div></div>' +
        '<div class="mj-rod"><button class="mj-bt" data-mj="fechar" data-t="mbe-fechar">' + T('Cancelar', 'Cancelar') + '</button><button class="mj-bt prim" data-mj="continuar" data-t="mbe-continuar">' + T('Continuar como Mari', 'Continuar como Mari') + '</button></div>';
    }
    var c = campos(), p = PORT.filter(function (x) { return x.id === S.sel.portfolio })[0], pags = p ? p.paginas : [];
    var h = '<h2>' + T('O que você quer conectar?', '¿Qué quieres conectar?') + '</h2>';
    if (c.indexOf('portfolio') >= 0) h += sel('mjPort', T('Portfólio empresarial', 'Portafolio comercial'), PORT.map(function (x) { return [x.id, x.nome] }), S.sel.portfolio, 'mbe-sel-portfolio', true);
    if (c.indexOf('pagina') >= 0) {
      h += sel('mjPag', T('Página do Facebook', 'Página de Facebook'), pags.map(function (x) { return [x, x] }), S.sel.pagina, 'mbe-sel-pagina', true);
      if (S.sel.portfolio && !pags.length) h += '<p class="mj-aviso" data-t="mbe-msg">' + T('Nenhuma Página aparece: o portfólio escolhido não é dono de nenhuma Página. Escolha o portfólio que é dono da Página da loja.', 'No aparece ninguna Página: el portafolio elegido no es dueño de ninguna Página. Elige el portafolio que es dueño de la Página de la tienda.') + '</p>';
    }
    if (c.indexOf('conta') >= 0) h += sel('mjConta', T('Conta de anúncios', 'Cuenta publicitaria'), [['Conta de anúncios da Mari', 'Conta de anúncios da Mari']], S.sel.conta, 'mbe-sel-conta', true);
    if (c.indexOf('pixel') >= 0) h += sel('mjPixel', 'Pixel', [[pixelNome(), pixelNome()]], S.sel.pixel, 'mbe-sel-pixel', true);
    if (c.indexOf('catalogo') >= 0) h += sel('mjCat', T('Catálogo', 'Catálogo'), [['Catálogo da Lojinha', 'Catálogo da Lojinha']], S.sel.catalogo, 'mbe-sel-catalogo', true);
    return h + '<div class="mj-rod"><button class="mj-bt" data-mj="fechar" data-t="mbe-fechar">' + T('Cancelar', 'Cancelar') + '</button><button class="mj-bt prim" data-mj="concluir" data-t="mbe-concluir"' + (pronto() ? '' : ' disabled') + '>' + T('Concluir', 'Concluir') + '</button></div>';
  }
  function render() {
    var el = document.getElementById('mbej');
    if (!S) { if (el) el.remove(); return }
    if (!el) { el = document.createElement('div'); el.id = 'mbej'; el.setAttribute('data-sem-traduzir', '1'); document.body.appendChild(el) }
    el.innerHTML = '<div class="mj-fundo"></div><div class="mj-jan" role="dialog" data-t="mbe-janela"><div class="mj-barra"><span class="mj-logo">∞ Meta</span><span class="mj-url">facebook.com/business/…</span><button class="mj-x" data-mj="fechar" aria-label="' + T('Fechar', 'Cerrar') + '">✕</button></div><div class="mj-corpo">' + corpo() + '</div><p class="mj-nota">' + T('⚠ Visual e ordem das telas são do treino (a conferir com a janela real).', '⚠ El visual y el orden de las pantallas son de práctica (por confirmar con la ventana real).') + '</p></div>';
  }
  function fecha() { S = null; grava(); render() }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-mj]'); if (!b || !S || b.disabled) return; var ac = b.getAttribute('data-mj');
    if (ac === 'fechar') fecha();
    else if (ac === 'continuar') { S.passo = 1; grava(); render() }
    else if (ac === 'concluir') {
      var a = {}, p = PORT.filter(function (x) { return x.id === S.sel.portfolio })[0]; if (p) a.portfolio = p.nome; if (S.sel.pagina) a.pagina = S.sel.pagina; if (S.sel.conta) a.conta = S.sel.conta; if (S.sel.pixel) a.pixel = S.sel.pixel; if (S.sel.catalogo) a.catalogo = S.sel.catalogo;
      var f = fns[S.plataforma + ':conectar'], pl = S.plataforma; fecha(); if (f) f(a); void pl;
    }
    else if (ac === 'desconectar') { var f2 = fns[S.plataforma + ':desconectar']; fecha(); if (f2) f2() }
  });
  document.addEventListener('change', function (e) {
    if (!S) return; var id = e.target.id;
    if (id === 'mjPort') { S.sel.portfolio = e.target.value; S.sel.pagina = '' } else if (id === 'mjPag') S.sel.pagina = e.target.value; else if (id === 'mjConta') S.sel.conta = e.target.value; else if (id === 'mjPixel') S.sel.pixel = e.target.value; else if (id === 'mjCat') S.sel.catalogo = e.target.value; else return;
    grava(); render();
  });
  S = le(); if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
  window.MBEJ = {
    abrir: function (o) { S = { plataforma: o.plataforma, campos: o.campos || ['portfolio', 'pagina'], modo: o.modo || 'conectar', passo: 0, sel: {}, ativos: o.ativos || null }; grava(); render() },
    set: function (p) { if (!S) return; for (var k in p) S[k] = p[k]; grava(); render() },
    fechar: fecha, aberta: function () { return !!S }, estado: function () { return S },
    registra: function (plat, aoConectar, aoDesconectar) { fns[plat + ':conectar'] = aoConectar; fns[plat + ':desconectar'] = aoDesconectar },
    portfolios: PORT
  };
})();
