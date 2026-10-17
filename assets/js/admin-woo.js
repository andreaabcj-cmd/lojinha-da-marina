/* ADMIN DO WORDPRESS / WOOCOMMERCE (faz-de-conta) — as telas onde se conecta e se mantém o plugin Meta for WooCommerce (Facebook for WooCommerce):
   Plugins (ativar, atualizar) › Marketing › Facebook › Começar (abre a janela do MBE) › abas Conexão, Sincronização de produtos e Lojas.
   Real (documentação do WooCommerce, lida em 16/10/2026, EN): WP Admin › Marketing › Facebook › Get Started abre o assistente (login no Facebook, criar ou escolher
   Business Manager com autenticação em dois fatores, Página, conta de anúncios, Pixel e catálogo); abas Connection (ativos conectados e Manage Connection), Shops
   (Commerce Manager e Troubleshooting), Product sync (botão Sync products); produtos sincronizam sozinhos ao criar ou alterar; “Uninstall” nas configurações não remove
   o app nem os usuários do sistema no Facebook; com o modo de depuração ligado há WooCommerce › Status › Tools › Facebook: Reset connection settings.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Como conectar sua conta do WooCommerce à Meta”.
   INVENTADOS/A CONFERIR: o visual exato, os nomes em português, a aba “Lojas” simplificada, o botão Desconectar na janela de gerenciamento e a ordem das telas.
   Estado em SITE (site-estado.js) → woo {plugin, atualizacao, conectado, sync, sincronizou, ativos}. */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return LANG === 'es' ? es : pt }
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var rota = (location.hash || '#painel').slice(1), msg = '';
  function w() { return SITE.get().woo }
  function grava(f) { var st = SITE.get(); f(st.woo); SITE.set(st) }
  function ir(r) { rota = r; msg = ''; if (location.hash !== '#' + r) history.replaceState(null, '', '#' + r); render() }
  function nav(id, txt, cls) { return '<button class="wp-n' + (rota === id || (id === 'fb' && /^fb-/.test(rota)) ? ' on' : '') + (cls ? ' ' + cls : '') + '" data-ir="' + id + '" data-t="wp-nav-' + id + '">' + txt + '</button>' }
  function esqueleto(c) {
    var ativo = w().plugin === 'ativo';
    return '<div data-sem-traduzir="1"><div class="wp-topo"><span class="wp-logo">W</span> Lojinha da Marina <span class="wp-mud">· ' + T('Painel', 'Escritorio') + '</span>' + (w().atualizacao ? '<span class="wp-upd" data-t="wp-upd-badge">🔄 1</span>' : '') + '</div><div class="wp-corpo"><aside class="wp-menu" data-t="wp-menu">' + nav('painel', '🏠 ' + T('Painel', 'Escritorio')) + '<div class="wp-n off">📝 ' + T('Posts', 'Entradas') + '</div><div class="wp-n off">🛒 WooCommerce</div><div class="wp-n off">🏷️ ' + T('Produtos', 'Productos') + '</div>' +
      '<div class="wp-n off">📣 Marketing</div>' + (ativo ? nav('fb', T('Facebook', 'Facebook'), 'sub') : '') + nav('plugins', '🔌 ' + T('Plugins', 'Plugins') + (w().atualizacao ? ' <span class="wp-bolha">1</span>' : '')) + '<div class="wp-n off">⚙️ ' + T('Configurações', 'Ajustes') + '</div></aside><main class="wp-main">' + c + '</main></div></div>';
  }
  function telaPainel() { return '<h1>' + T('Painel', 'Escritorio') + '</h1><div class="wp-cx"><p>' + T('WordPress com WooCommerce da Lojinha da Marina (faz-de-conta, para treino). Aqui se instala e se mantém o plugin da Meta.', 'WordPress con WooCommerce de la Lojinha da Marina (de mentira, para práctica). Aquí se instala y se mantiene el plugin de Meta.') + '</p></div>' }
  function telaPlugins() {
    var p = w();
    return '<h1>' + T('Plugins', 'Plugins') + '</h1><div class="wp-cx"><table class="wp-tab" data-t="wp-plugins"><tr><th>' + T('Plugin', 'Plugin') + '</th><th>' + T('Descrição', 'Descripción') + '</th></tr>' +
      '<tr class="' + (p.plugin === 'ativo' ? 'wp-ativo' : '') + '" data-t="plugin-meta"><td><b>Meta for WooCommerce</b><div class="wp-acs">' + (p.plugin === 'ativo' ? '<button class="wp-lk" data-ac="desativar" data-t="btn-desativar">' + T('Desativar', 'Desactivar') + '</button>' : '<button class="wp-lk" data-ac="ativar" data-t="btn-ativar">' + T('Ativar', 'Activar') + '</button>') + '</div></td><td>' + T('Conecta a loja à Meta: Pixel, API de Conversões, catálogo e anúncios.', 'Conecta la tienda a Meta: píxel, API de Conversiones, catálogo y anuncios.') + ' <span class="wp-mud">' + T('Versão', 'Versión') + ' ' + (p.atualizacao ? '3.0.2' : '3.2.1') + '</span></td></tr>' +
      (p.atualizacao ? '<tr class="wp-aviso-l" data-t="plugin-upd"><td colspan="2">🔄 ' + T('Há uma nova versão do Meta for WooCommerce disponível (3.2.1).', 'Hay una nueva versión de Meta for WooCommerce disponible (3.2.1).') + ' <button class="wp-lk" data-ac="atualizar" data-t="btn-update">' + T('Atualizar agora', 'Actualizar ahora') + '</button></td></tr>' : '') +
      '<tr><td><b>WooCommerce</b><div class="wp-acs"><span class="wp-mud">' + T('Ativo', 'Activo') + '</span></div></td><td>' + T('Sua loja online.', 'Tu tienda online.') + '</td></tr></table>' + (msg ? '<p class="wp-ok" data-t="wp-msg">' + esc(msg) + '</p>' : '') + '</div>';
  }
  function ativosLista(a) { return [['portfolio', T('Portfólio empresarial', 'Portafolio comercial')], ['pagina', T('Página', 'Página')], ['conta', T('Conta de anúncios', 'Cuenta publicitaria')], ['pixel', 'Pixel'], ['catalogo', T('Catálogo', 'Catálogo')]].filter(function (x) { return a && a[x[0]] }).map(function (x) { return '<li><b>' + x[1] + ':</b> ' + esc(a[x[0]]) + '</li>' }).join('') }
  function telaFb() {
    var p = w(), aba = rota === 'fb-sync' ? 'sync' : rota === 'fb-lojas' ? 'lojas' : 'conexao';
    if (!p.conectado) return '<h1>Facebook</h1><div class="wp-cx wp-bv" data-t="fb-bemvindo"><h2>' + T('Venda e anuncie na Meta', 'Vende y anuncia en Meta') + '</h2><p>' + T('Conecte sua loja para usar o Pixel, a API de Conversões, o catálogo e os anúncios.', 'Conecta tu tienda para usar el píxel, la API de Conversiones, el catálogo y los anuncios.') + '</p><button class="wp-bt prim" data-ac="comecar" data-t="btn-get-started">' + T('Começar', 'Comenzar') + '</button></div>';
    var abas = '<div class="wp-abas" data-t="fb-abas"><button class="wp-ab' + (aba === 'conexao' ? ' on' : '') + '" data-ir="fb" data-t="tab-conexao">' + T('Conexão', 'Conexión') + '</button><button class="wp-ab' + (aba === 'sync' ? ' on' : '') + '" data-ir="fb-sync" data-t="tab-sync">' + T('Sincronização de produtos', 'Sincronización de productos') + '</button><button class="wp-ab' + (aba === 'lojas' ? ' on' : '') + '" data-ir="fb-lojas" data-t="tab-lojas">' + T('Lojas', 'Tiendas') + '</button></div>', c;
    if (aba === 'conexao') c = '<div class="wp-cx" data-t="box-conexao"><h2>' + T('Conexão com a Meta', 'Conexión con Meta') + '</h2><span class="wp-chip">' + T('Conectado', 'Conectado') + '</span><ul class="wp-ul" data-t="woo-ativos">' + ativosLista(p.ativos) + '</ul><button class="wp-bt" data-ac="gerenciar" data-t="btn-manage">' + T('Gerenciar conexão', 'Administrar conexión') + '</button></div>';
    else if (aba === 'sync') c = '<div class="wp-cx" data-t="box-sync"><h2>' + T('Sincronização de produtos', 'Sincronización de productos') + '</h2><label class="wp-tg"><input type="checkbox" id="wpSync" data-t="tg-sync"' + (p.sync ? ' checked' : '') + '/><span>' + T('Sincronizar produtos automaticamente', 'Sincronizar productos automáticamente') + '</span></label><p class="wp-mud">' + T('Os produtos sincronizam sozinhos quando você cria ou altera um. Use o botão para forçar uma sincronização completa.', 'Los productos se sincronizan solos cuando creas o cambias uno. Usa el botón para forzar una sincronización completa.') + '</p><button class="wp-bt prim" data-ac="sync" data-t="btn-sync-produtos"' + (p.sync ? '' : ' disabled') + '>' + T('Sincronizar produtos', 'Sincronizar productos') + '</button> <span class="wp-ok" data-t="sync-status">' + (p.sincronizou ? '✓ ' + T('Última sincronização: agora', 'Última sincronización: ahora') : '') + '</span></div>';
    else c = '<div class="wp-cx"><h2>' + T('Lojas', 'Tiendas') + '</h2><p class="wp-mud">' + T('Mostra o Gerenciador de Comércio da Meta dentro do WordPress. Em “Solução de problemas” ficam as sincronizações manuais (cupons, envio, menu).', 'Muestra el Administrador de comercio de Meta dentro de WordPress. En “Solución de problemas” están las sincronizaciones manuales (cupones, envío, menú).') + '</p><button class="wp-bt" disabled>' + T('Solução de problemas', 'Solución de problemas') + '</button></div>';
    return '<h1>Facebook</h1>' + abas + c + '<p class="wp-nota">' + T('⚠ Visual e nomes em português são do treino (a conferir com o plugin real).', '⚠ El visual y los nombres en español son de práctica (por confirmar con el plugin real).') + '</p>';
  }
  function render() {
    var c = rota === 'plugins' ? telaPlugins() : /^fb/.test(rota) ? (w().plugin === 'ativo' ? telaFb() : telaPlugins()) : telaPainel();
    $('#app').innerHTML = esqueleto(c);
    window.__simWoo = { rota: rota };
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-ir]'); if (b) { ir(b.getAttribute('data-ir')); return }
    b = e.target.closest('[data-ac]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-ac');
    if (ac === 'ativar') { grava(function (x) { x.plugin = 'ativo' }); msg = T('Plugin ativado.', 'Plugin activado.'); render() }
    else if (ac === 'desativar') { grava(function (x) { x.plugin = 'inativo' }); msg = T('Plugin desativado.', 'Plugin desactivado.'); render() }
    else if (ac === 'atualizar') { grava(function (x) { x.atualizacao = false }); msg = T('Meta for WooCommerce atualizado para a versão 3.2.1.', 'Meta for WooCommerce actualizado a la versión 3.2.1.'); render() }
    else if (ac === 'comecar') MBEJ.abrir({ plataforma: 'WooCommerce', loja: true, campos: ['portfolio', 'pagina', 'conta', 'pixel', 'catalogo'] });
    else if (ac === 'gerenciar') MBEJ.abrir({ plataforma: 'WooCommerce', modo: 'gerenciar', ativos: w().ativos });
    else if (ac === 'sync') { grava(function (x) { x.sincronizou = true }); render() }
  });
  document.addEventListener('change', function (e) { if (e.target.id === 'wpSync') { grava(function (x) { x.sync = e.target.checked }); render() } });
  window.addEventListener('hashchange', function () { var h = (location.hash || '#painel').slice(1); if (h !== rota) ir(h) });
  window.addEventListener('site:mudou', render);
  if (window.MBEJ) MBEJ.registra('WooCommerce', function (a) { grava(function (x) { x.conectado = true; x.ativos = a }); ir('fb') }, function () { grava(function (x) { x.conectado = false; x.ativos = null; x.sync = false; x.sincronizou = false }); ir('fb') });
  window.WOOADM = { ir: ir, render: render };
  render();
})();
