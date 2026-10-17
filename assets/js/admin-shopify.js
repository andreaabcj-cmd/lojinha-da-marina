/* ADMIN DA SHOPIFY (faz-de-conta) — as telas onde se resolve um Pixel e a integração de uma loja Shopify com a Meta:
   1) Configurações › Canais de vendas › Shopify App Store › Facebook e Instagram › Adicionar canal  (instalar o canal)
   2) Canais de vendas › Facebook e Instagram › Iniciar configuração › Conectar conta (abre a janela do MBE) › Termos › Concluir configuração
   3) Facebook e Instagram › Configurações › Compartilhamento de dados (nível Standard/Enhanced/Maximum e o pixel) · Status dos produtos · Ver produtos
   4) Produtos › (produto) › Disponibilidade do produto › Gerenciar  /  Mais ações › Adicionar canal(is) disponível(is)
   5) Loja virtual › Temas › ⋯ › Editar código › theme.liquid  (onde fica código do Pixel colado à mão)
   Real (Central de Ajuda da Shopify, lida em 16/10/2026, EN): “Set up Facebook & Instagram by Meta” (Settings › Sales channels › Shopify App Store › Add channel ›
   Start set up › Connect account › conectar os ativos › aceitar os termos › Finish setup; o portfólio escolhido precisa ser dono da Página), “Publishing products”
   (Product availability › Manage › marcar Facebook › Done › Save; em massa: Mais ações › Add available channel(s)…; Product status e Issues no canal; produtos editados na Shopify),
   “Meta pixel” e “Facebook data sharing” (Sales channels › Facebook & Instagram › Settings › Share data settings › Enable data-sharing › nível › pixel › Confirm;
   níveis Standard / Enhanced / Maximum; apagar código do Pixel do theme.liquid para não duplicar).
   INVENTADOS/A CONFERIR: o visual exato, os nomes dos botões em português, o tema “Dawn”, os IDs, a loja, os pedidos e os produtos. Telas reais da Shopify não foram
   abertas (a conta de aula não tem loja). Estado em SITE (site-estado.js) → shopify {app, tema, canal, prods}. */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return LANG === 'es' ? es : pt }
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var rota = (location.hash || '#inicio').slice(1), menuAberto = false, rasc = null, msg = '', draftFb = null, abre = { loja: true };
  var sel = {}, filtro = '', maisAberto = false, dlgCanal = false, dlgDisp = false, draftDisp = null, termos = false;
  function s() { return SITE.get() }
  function grava(f) { var st = s(); f(st); SITE.set(st) }
  function ir(r) { rota = r; menuAberto = false; maisAberto = false; dlgCanal = false; dlgDisp = false; msg = ''; if (location.hash !== '#' + r) history.replaceState(null, '', '#' + r); render() }
  function nav(id, txt, extra, cls) { return '<button class="sh-n' + (rota === id ? ' on' : '') + (cls ? ' ' + cls : '') + '" data-ir="' + id + '" data-t="nav-' + id + '">' + txt + (extra || '') + '</button>' }
  function esqueleto(corpo) {
    var c = s().shopify.canal || { instalado: true };
    return '<div data-sem-traduzir="1"><div class="sh-topo"><span class="sh-logo">🛍️ shopify</span><input class="sh-busca" placeholder="' + T('Pesquisar', 'Buscar') + '" tabindex="-1"/><span class="sh-loja" data-t="loja-nome"><i>LM</i> Lojinha da Marina</span></div>' +
      '<div class="sh-corpo"><aside class="sh-menu" data-t="menu">' + nav('inicio', '🏠 ' + T('Início', 'Inicio')) + nav('pedidos', '🧾 ' + T('Pedidos', 'Pedidos')) + nav('produtos', '🏷️ ' + T('Produtos', 'Productos')) + '<div class="sh-n off">👥 ' + T('Clientes', 'Clientes') + '</div><div class="sh-n off">📊 ' + T('Análises', 'Análisis') + '</div>' +
      '<div class="sh-sec">' + T('Canais de vendas', 'Canales de venta') + '</div>' + nav('loja', '🖥️ ' + T('Loja virtual', 'Tienda online'), '', '') +
      (rota === 'loja' || rota === 'temas' || rota === 'codigo' ? nav('temas', T('Temas', 'Temas'), '', 'sub') : '') +
      (c.instalado ? nav('fb', '📘 Facebook ' + T('e', 'e') + ' Instagram') : '') + '<div class="sh-sec"></div>' + nav('config', '⚙️ ' + T('Configurações', 'Configuración')) + '</aside><main class="sh-main">' + corpo + '</main></div></div>';
  }
  function telaInicio() { return '<h1>' + T('Início', 'Inicio') + '</h1><div class="sh-cartao"><p>' + T('Admin da Lojinha da Marina (faz-de-conta, para treino). Aqui você resolve o que a plataforma controla: pedidos, produtos, o tema da loja e o canal Facebook e Instagram.', 'Admin de la Lojinha da Marina (de mentira, para práctica). Aquí resuelves lo que controla la plataforma: pedidos, productos, el tema de la tienda y el canal Facebook e Instagram.') + '</p></div>' }

  /* ---------- pedidos e produtos ---------- */
  function telaPedidos() {
    var L = [['#1042', 'Júlia', 'R$ 129,90'], ['#1041', 'Caio', 'R$ 79,90'], ['#1040', 'Rita', 'R$ 49,90']];
    return '<h1>' + T('Pedidos', 'Pedidos') + '</h1><div class="sh-cartao" data-t="ped-lista"><table class="sh-tab"><tr><th>' + T('Pedido', 'Pedido') + '</th><th>' + T('Cliente', 'Cliente') + '</th><th>' + T('Total', 'Total') + '</th></tr>' + L.map(function (x) { return '<tr><td>' + x[0] + '</td><td>' + x[1] + '</td><td>' + x[2] + '</td></tr>' }).join('') + '</table></div>' +
      '<div class="sh-aviso" data-t="ped-nota">' + T('Os pedidos acontecem e são gerenciados aqui, na Shopify. Com a finalização da compra no site, o gerenciamento de pedidos no Gerenciador de Comércio da Meta foi descontinuado para pedidos novos.', 'Los pedidos ocurren y se gestionan aquí, en Shopify. Con el pago en el sitio, la gestión de pedidos en el Administrador de comercio de Meta se descontinuó para pedidos nuevos.') + '</div>';
  }
  function dispTxt(p) { return p.arq ? T('Arquivado', 'Archivado') : T('Loja virtual', 'Tienda online') + (p.fb ? ' · Facebook e Instagram' : '') }
  function telaProdutos() {
    var P = s().shopify.prods, L = P.filter(function (p) { return filtro === 'nfb' ? !p.fb : true }), n = Object.keys(sel).filter(function (k) { return sel[k] }).length;
    var h = '<h1>' + T('Produtos', 'Productos') + '</h1><div class="sh-cartao"><div class="sh-barra"><label>' + T('Disponibilidade', 'Disponibilidad') + ' <select id="shFiltro" data-t="filtro-disp"><option value="" data-pt="">' + T('Todos', 'Todos') + '</option><option value="nfb" data-pt="Indisponível no Facebook"' + (filtro === 'nfb' ? ' selected' : '') + '>' + T('Indisponível no Facebook', 'No disponible en Facebook') + '</option></select></label>' +
      '<span class="sh-pos"><button class="sh-bt" data-ac="mais" data-t="btn-mais"' + (n ? '' : ' disabled') + '>' + T('Mais ações', 'Más acciones') + (n ? ' (' + n + ')' : '') + '</button>' + (maisAberto ? '<div class="sh-menu-pop" data-t="menu-mais"><button class="sh-it" data-ac="add-canal" data-t="acao-add-canal">' + T('Adicionar canal(is) disponível(is)…', 'Agregar canal(es) disponible(s)…') + '</button><div class="sh-it off">' + T('Arquivar produtos', 'Archivar productos') + '</div></div>' : '') + '</span></div>' +
      '<table class="sh-tab" data-t="tab-prods"><tr><th></th><th>' + T('Produto', 'Producto') + '</th><th>' + T('Disponibilidade', 'Disponibilidad') + '</th><th>' + T('Preço', 'Precio') + '</th></tr>' +
      L.map(function (p) { return '<tr data-t="prod-' + p.id + '"><td><input type="checkbox" data-selp="' + p.id + '"' + (sel[p.id] ? ' checked' : '') + ' data-t="sel-prod-' + p.id + '"/></td><td><button class="sh-lk" data-ir="produto-' + p.id + '" data-t="abrir-prod-' + p.id + '">' + esc(p.nome) + '</button></td><td data-t="disp-' + p.id + '">' + dispTxt(p) + '</td><td>' + p.preco + '</td></tr>' }).join('') + '</table></div>';
    if (dlgCanal) h += '<div class="sh-dlg-f"><div class="sh-dlg" data-t="dlg-canal"><h2>' + T('Adicionar canal(is) disponível(is)', 'Agregar canal(es) disponible(s)') + '</h2><label class="sh-tg"><input type="checkbox" checked disabled/><span>' + T('Loja virtual', 'Tienda online') + '</span></label><label class="sh-tg"><input type="checkbox" id="shCanalFb" data-t="chk-canal-fb"' + (draftDisp && draftDisp.fb ? ' checked' : '') + '/><span>Facebook ' + T('e', 'e') + ' Instagram</span></label><div class="sh-rod"><button class="sh-bt" data-ac="cancela-dlg">' + T('Cancelar', 'Cancelar') + '</button><button class="sh-bt prim" data-ac="tornar-disp" data-t="btn-tornar-disp">' + T('Tornar produtos disponíveis', 'Hacer productos disponibles') + '</button></div></div></div>';
    return h + '<p class="sh-nota">' + T('Produtos arquivados não são enviados à Meta: desarquive antes.', 'Los productos archivados no se envían a Meta: desarchívalos antes.') + '</p>';
  }
  function telaProduto(id) {
    var p = s().shopify.prods.filter(function (x) { return x.id === +id })[0]; if (!p) return telaProdutos();
    var d = draftDisp || { fb: p.fb };
    var h = '<h1><button class="sh-lk" data-ir="produtos">‹</button> ' + esc(p.nome) + '</h1><div class="sh-cartao"><p><b>' + p.preco + '</b> · ' + (p.arq ? T('Arquivado', 'Archivado') : T('Ativo', 'Activo')) + '</p><p class="sh-mud">' + T('Categoria do produto (Google)', 'Categoría del producto (Google)') + ': ' + esc(p.cat || '—') + '</p></div>' +
      '<div class="sh-cartao" data-t="card-disp"><h2>' + T('Disponibilidade do produto', 'Disponibilidad del producto') + '</h2><p data-t="disp-atual">' + (d.fb ? T('Loja virtual · Facebook e Instagram', 'Tienda online · Facebook e Instagram') : T('Loja virtual', 'Tienda online')) + '</p><button class="sh-bt" data-ac="gerenciar-disp" data-t="btn-gerenciar-disp">' + T('Gerenciar', 'Administrar') + '</button></div>' +
      '<button class="sh-bt prim" data-ac="salvar-prod" data-t="btn-salvar-prod">' + T('Salvar', 'Guardar') + '</button> <span class="sh-ok" data-t="prod-status">' + esc(msg) + '</span>';
    if (dlgDisp) h += '<div class="sh-dlg-f"><div class="sh-dlg" data-t="dlg-disp"><h2>' + T('Gerenciar a disponibilidade', 'Administrar la disponibilidad') + '</h2><label class="sh-tg"><input type="checkbox" checked disabled/><span>' + T('Loja virtual', 'Tienda online') + '</span></label><label class="sh-tg"><input type="checkbox" id="shDispFb" data-t="chk-disp-fb"' + (d.fb ? ' checked' : '') + (p.arq ? ' disabled' : '') + '/><span>Facebook ' + T('e', 'e') + ' Instagram</span></label>' +
      (p.arq ? '<p class="sh-aviso">' + T('Este produto está arquivado: produtos arquivados não sincronizam com a Meta.', 'Este producto está archivado: los productos archivados no se sincronizan con Meta.') + '</p>' : '') + '<div class="sh-rod"><button class="sh-bt prim" data-ac="disp-pronto" data-t="btn-disp-pronto">' + T('Concluído', 'Listo') + '</button></div></div></div>';
    return h;
  }

  /* ---------- configurações › canais › App Store ---------- */
  function telaConfig() { return '<h1>' + T('Configurações', 'Configuración') + '</h1><div class="sh-cartao"><button class="sh-lk grande" data-ir="canais" data-t="cfg-canais">📡 ' + T('Canais de vendas', 'Canales de venta') + '</button><p class="sh-mud">' + T('Gerencie onde você vende e instale novos canais.', 'Administra dónde vendes e instala nuevos canales.') + '</p></div><div class="sh-cartao"><span class="sh-mud">' + T('Plano · Faturamento · Usuários · Domínios (não usados neste treino)', 'Plan · Facturación · Usuarios · Dominios (no usados en esta práctica)') + '</span></div>' }
  function telaCanais() {
    var c = s().shopify.canal;
    return '<h1>' + T('Canais de vendas', 'Canales de venta') + '</h1><div class="sh-cartao" data-t="lista-canais"><div class="sh-lin">🖥️ ' + T('Loja virtual', 'Tienda online') + ' <span class="sh-chip">' + T('Ativo', 'Activo') + '</span></div>' + (c.instalado ? '<div class="sh-lin">📘 Facebook ' + T('e', 'e') + ' Instagram <span class="sh-chip">' + (c.conectado ? T('Conectado', 'Conectado') : T('Instalado', 'Instalado')) + '</span></div>' : '') + '</div>' +
      '<button class="sh-bt prim" data-ac="appstore" data-t="btn-appstore">' + T('Shopify App Store', 'Shopify App Store') + '</button>';
  }
  function telaAppStore() {
    var c = s().shopify.canal;
    return '<h1>Shopify App Store</h1><div class="sh-cartao"><input class="sh-busca2" value="Facebook" readonly tabindex="-1"/></div><div class="sh-cartao sh-app" data-t="app-fb"><div class="sh-mini">📘</div><div><b>Facebook ' + T('e', 'e') + ' Instagram</b> <small>Meta</small><p class="sh-mud">' + T('Venda nos aplicativos da Meta e rode anúncios com o Pixel e os produtos sincronizados.', 'Vende en las apps de Meta y corre anuncios con el píxel y los productos sincronizados.') + '</p></div>' +
      '<span class="sh-acoes">' + (c.instalado ? '<span class="sh-chip">' + T('Instalado', 'Instalado') + '</span>' : '<button class="sh-bt prim" data-ac="add-fb" data-t="btn-add-fb">' + T('Adicionar canal', 'Agregar canal') + '</button>') + '</span></div>';
  }

  /* ---------- canal Facebook e Instagram ---------- */
  function ativosTxt(a) { return ['portfolio', 'pagina'].filter(function (k) { return a && a[k] }).map(function (k) { return '<li><b>' + (k === 'portfolio' ? T('Portfólio', 'Portafolio') : T('Página', 'Página')) + ':</b> ' + esc(a[k]) + '</li>' }).join('') }
  function telaSetup() {
    var c = s().shopify.canal, a = c.ativos;
    return '<h1>Facebook ' + T('e', 'e') + ' Instagram</h1><div class="sh-cartao" data-t="setup-card"><h2>' + T('Configure o canal', 'Configura el canal') + '</h2>' +
      (rota === 'fb-setup' ? '<ol class="sh-pass"><li><b>' + T('Conecte sua conta', 'Conecta tu cuenta') + '</b>' + (a ? ' <span class="sh-chip">✓</span><ul class="sh-ul" data-t="contas-conectadas">' + ativosTxt(a) + '</ul>' : '<p class="sh-mud">' + T('Entre no Facebook e escolha o portfólio empresarial e a Página. O portfólio precisa ser dono da Página.', 'Entra en Facebook y elige el portafolio comercial y la Página. El portafolio debe ser dueño de la Página.') + '</p><button class="sh-bt prim" data-ac="conectar-conta" data-t="btn-connect-account">' + T('Conectar conta', 'Conectar cuenta') + '</button>') + '</li>' +
        '<li><b>' + T('Termos e condições', 'Términos y condiciones') + '</b><label class="sh-tg"><input type="checkbox" id="shTermos" data-t="chk-termos"' + (termos ? ' checked' : '') + (a ? '' : ' disabled') + '/><span>' + T('Li e aceito os termos e condições do canal.', 'Leí y acepto los términos y condiciones del canal.') + '</span></label></li></ol>' +
        '<button class="sh-bt prim" data-ac="finalizar" data-t="btn-finish"' + (a && termos ? '' : ' disabled') + '>' + T('Concluir configuração', 'Finalizar configuración') + '</button>'
        : '<p>' + T('Antes de usar anúncios, Pixel e produtos na Meta, conecte sua conta do Facebook.', 'Antes de usar anuncios, píxel y productos en Meta, conecta tu cuenta de Facebook.') + '</p><button class="sh-bt prim" data-ac="iniciar" data-t="btn-start-setup">' + T('Iniciar configuração', 'Iniciar configuración') + '</button>') + '</div>';
  }
  function status(P) { var com = P.filter(function (p) { return p.fb && !p.arq }), prob = com.filter(function (p) { return !p.img || !p.cat }); return { total: com.length, prob: prob.length, ok: com.length - prob.length } }
  function telaFb() {
    var c = s().shopify.canal; if (!c.conectado) return telaSetup();
    var a = s().shopify.app, pix = a.on && a.pixel !== 'nenhum' ? (a.pixel === 'certo' ? 'Pixel da Mari (' + SITE.idCerto() + ')' : 'Outro pixel (000000000000000)') : T('Nenhum pixel conectado', 'Ningún píxel conectado'), st = status(s().shopify.prods);
    return '<h1>Facebook ' + T('e', 'e') + ' Instagram</h1><div class="sh-cartao" data-t="fb-resumo"><h2>' + T('Pixel da Meta', 'Píxel de Meta') + '</h2><p><b>' + esc(pix) + '</b></p><p class="sh-mud">' + T('Nível de compartilhamento de dados: ', 'Nivel de compartir datos: ') + '<b>' + ({ standard: T('Padrão (Standard)', 'Estándar (Standard)'), enhanced: T('Avançado (Enhanced)', 'Avanzado (Enhanced)'), maximum: T('Máximo (Maximum)', 'Máximo (Maximum)') }[a.nivel]) + '</b>' + (a.on ? '' : ' · ' + T('compartilhamento desativado', 'compartir desactivado')) + '</p></div>' +
      '<div class="sh-cartao" data-t="fb-prod-status"><h2>' + T('Status dos produtos', 'Estado de los productos') + '</h2><p><b data-t="n-sync">' + st.ok + '</b> ' + T('sincronizados', 'sincronizados') + ' · <b data-t="n-prob" class="' + (st.prob ? 'sh-verm' : '') + '">' + st.prob + '</b> ' + T('com problemas', 'con problemas') + '</p><button class="sh-bt" data-ir="fb-prods" data-t="btn-ver-prods">' + T('Ver produtos', 'Ver productos') + '</button></div>' +
      '<button class="sh-bt prim" data-ac="abrir-dados" data-t="btn-fb-config">' + T('Configurações', 'Configuración') + '</button>';
  }
  function telaFbProds() {
    var P = s().shopify.prods.filter(function (p) { return p.fb }), cats = ['Casa e jardim > Cozinha', 'Vestuário e acessórios > Roupas', 'Vestuário e acessórios > Bolsas', 'Vestuário e acessórios > Chapéus'];
    return '<h1>' + T('Produtos no Facebook e Instagram', 'Productos en Facebook e Instagram') + '</h1><div class="sh-cartao"><table class="sh-tab" data-t="tab-fb-prods"><tr><th>' + T('Produto', 'Producto') + '</th><th>' + T('Categoria do Google', 'Categoría de Google') + '</th><th>' + T('Problemas', 'Problemas') + '</th></tr>' +
      P.map(function (p) { var pr = p.arq ? T('Arquivado: não sincroniza', 'Archivado: no se sincroniza') : (!p.cat ? T('Falta a categoria do produto', 'Falta la categoría del producto') : (!p.img ? T('Falta uma imagem', 'Falta una imagen') : '—'));
        return '<tr data-t="fbp-' + p.id + '"><td>' + esc(p.nome) + '</td><td><select data-catp="' + p.id + '" data-t="sel-cat-' + p.id + '"><option value="" data-pt="">' + T('Selecione…', 'Selecciona…') + '</option>' + cats.map(function (c) { return '<option value="' + esc(c) + '" data-pt="' + esc(c) + '"' + (p.cat === c ? ' selected' : '') + '>' + esc(c) + '</option>' }).join('') + '</select></td><td data-t="fbp-prob-' + p.id + '">' + pr + '</td></tr>' }).join('') + '</table>' +
      '<button class="sh-bt prim" data-ac="salvar-fbp" data-t="btn-salvar-fbp">' + T('Salvar', 'Guardar') + '</button> <span class="sh-ok" data-t="fbp-status">' + esc(msg) + '</span></div><p class="sh-nota">' + T('Os produtos sincronizados devem ser editados na Shopify: a mudança chega à Meta na próxima sincronização, em poucos minutos.', 'Los productos sincronizados deben editarse en Shopify: el cambio llega a Meta en la próxima sincronización, en pocos minutos.') + '</p>';
  }

  /* ---------- temas e código ---------- */
  function telaTemas() {
    return '<h1>' + T('Temas', 'Temas') + '</h1><div class="sh-cartao" data-t="tema-card"><h2>' + T('Tema atual', 'Tema actual') + '</h2><div class="sh-tema"><div class="sh-mini">🖼️</div><div><b>Dawn</b> <span class="sh-chip">' + T('Atual', 'Actual') + '</span><p class="sh-mud">' + T('Última alteração: hoje', 'Última modificación: hoy') + '</p></div>' +
      '<span class="sh-acoes"><button class="sh-bt" tabindex="-1">' + T('Personalizar', 'Personalizar') + '</button><span class="sh-pos"><button class="sh-bt" data-ac="menu" data-t="btn-menu-tema" aria-label="' + T('Ações', 'Acciones') + '">⋯</button>' +
      (menuAberto ? '<div class="sh-menu-pop" data-t="menu-pop"><div class="sh-it off">' + T('Visualizar', 'Vista previa') + '</div><div class="sh-it off">' + T('Duplicar', 'Duplicar') + '</div><button class="sh-it" data-ac="editar-codigo" data-t="acao-editar-codigo">' + T('Editar código', 'Editar código') + '</button><div class="sh-it off">' + T('Editar conteúdo padrão', 'Editar contenido predeterminado') + '</div></div>' : '') + '</span></span></div></div>' }
  function telaCodigo() {
    var t = rasc != null ? rasc : s().shopify.tema, n = '', l = Math.max(18, t.split('\n').length + 2);
    for (var i = 1; i <= l; i++) n += i + '\n';
    var arv = '<div class="sh-pasta">' + T('Layout', 'Layout') + '</div><div class="sh-arq on" data-t="arq-theme">theme.liquid</div><div class="sh-arq off">password.liquid</div>' + ['Modelos', 'Seções', 'Trechos', 'Recursos', 'Configuração', 'Idiomas'].map(function (x) { return '<div class="sh-pasta">▸ ' + T(x, x) + '</div>' }).join('');
    return '<div class="sh-ed-topo"><b>' + T('Editar código', 'Editar código') + '</b> · Dawn<span class="sh-acoes"><button class="sh-bt prim" data-ac="salvar-tema" data-t="btn-salvar-tema">' + T('Salvar', 'Guardar') + '</button></span></div>' +
      '<div class="sh-ed-corpo"><div class="sh-arvore" data-t="arvore">' + arv + '</div><div class="sh-ed"><pre class="sh-num" aria-hidden="true">' + n + '</pre><textarea id="shTema" spellcheck="false" wrap="off" data-t="ed-tema">' + esc(t) + '</textarea></div></div>' +
      '<div class="sh-rodape" data-t="ed-status">' + (msg || (rasc != null ? '● ' + T('Alterações não salvas.', 'Cambios sin guardar.') : T('Sem alterações novas.', 'Sin cambios nuevos.'))) + '</div>';
  }

  /* ---------- configurações do canal (compartilhamento de dados, contas conectadas, envio) ---------- */
  function telaDados() {
    var a = s().shopify.app, c = s().shopify.canal, d = draftFb || { on: a.on, nivel: a.nivel, pixel: a.pixel };
    var niv = function (k, tt, desc) { return '<label class="sh-rad" data-t="nivel-' + k + '"><input type="radio" name="nivel" data-nivel="' + k + '"' + (d.nivel === k ? ' checked' : '') + (d.on ? '' : ' disabled') + ' data-t="r-nivel-' + k + '"/><span><b>' + tt + '</b><small>' + desc + '</small></span></label>' };
    var px = function (k, nome) { var on = d.pixel === k; return '<div class="sh-pix' + (on ? ' on' : '') + '" data-t="pix-' + k + '"><span>' + esc(nome) + '</span>' + (on ? '<button class="sh-bt" data-ac="trocar-pixel" data-t="btn-trocar">' + T('Alterar', 'Cambiar') + '</button>' : '<button class="sh-bt" data-ac="conectar-' + k + '" data-t="btn-conectar-' + k + '"' + (d.on ? '' : ' disabled') + '>' + T('Conectar', 'Conectar') + '</button>') + '</div>' };
    return '<h1>' + T('Configurações', 'Configuración') + ' · Facebook ' + T('e', 'e') + ' Instagram</h1><div class="sh-cartao" data-t="box-dados"><h2>' + T('Compartilhamento de dados do cliente', 'Compartir datos del cliente') + '</h2>' +
      '<label class="sh-tg"><input type="checkbox" id="shOn"' + (d.on ? ' checked' : '') + ' data-t="tg-dados"/><span>' + T('Ativar o compartilhamento de dados', 'Activar compartir datos') + '</span></label>' +
      '<h3>' + T('Escolha o nível de compartilhamento', 'Elige el nivel de compartir') + '</h3>' +
      niv('standard', T('Padrão (Standard)', 'Estándar (Standard)'), T('Um pixel da Meta coleta o comportamento de navegação na loja. Um bloqueador de anúncios do navegador pode impedir o pixel de compartilhar dados.', 'Un píxel de Meta recopila el comportamiento de navegación en la tienda. Un bloqueador de anuncios del navegador puede impedir que el píxel comparta datos.')) +
      niv('enhanced', T('Avançado (Enhanced)', 'Avanzado (Enhanced)'), T('Usa o pixel e a API de Conversões. A API de Conversões envia o evento de compra de servidor para servidor, que bloqueadores do navegador não impedem. Compartilha dados pessoais do cliente (nome, local, e-mail, telefone) para a correspondência.', 'Usa el píxel y la API de Conversiones. La API de Conversiones envía el evento de compra de servidor a servidor, que los bloqueadores del navegador no impiden. Comparte datos personales del cliente (nombre, ubicación, correo, teléfono) para la coincidencia.')) +
      niv('maximum', T('Máximo (Maximum)', 'Máximo (Maximum)'), T('Usa a API de Conversões, o pixel e a tecnologia de anúncios mais recente da Meta. Também envia a compra de servidor para servidor e compartilha dados pessoais do cliente para a correspondência.', 'Usa la API de Conversiones, el píxel y la tecnología publicitaria más reciente de Meta. También envía la compra de servidor a servidor y comparte datos personales del cliente para la coincidencia.')) +
      '<h3>' + T('Pixel', 'Píxel') + '</h3>' + px('certo', 'Pixel da Mari (' + SITE.idCerto() + ')') + px('outro', 'Outro pixel (000000000000000)') +
      '<p class="sh-aviso">' + T('Se você já colou o código de um pixel no tema, apague-o antes (Loja virtual › Temas › Editar código): com os dois, a loja envia dados duplicados.', 'Si ya pegaste el código de un píxel en el tema, bórralo antes (Tienda online › Temas › Editar código): con los dos, la tienda envía datos duplicados.') + '</p>' +
      '<button class="sh-bt prim" data-ac="confirmar" data-t="btn-confirmar">' + T('Confirmar', 'Confirmar') + '</button> <span class="sh-ok" data-t="fb-status">' + esc(msg) + '</span></div>' +
      (c.conectado ? '<div class="sh-cartao" data-t="box-contas"><h2>' + T('Contas conectadas', 'Cuentas conectadas') + '</h2><ul class="sh-ul">' + ativosTxt(c.ativos) + '</ul></div>' : '') +
      '<div class="sh-cartao" data-t="box-envio"><h2>' + T('Configurações de envio', 'Configuración de envío') + '</h2><p class="sh-mud">' + T('Tempo de processamento da loja: 2 dias úteis. Os tempos de processamento e os prazos de transporte de taxas personalizadas ficam aqui, no canal Facebook e Instagram. Perfis de envio ficam na Shopify.', 'Tiempo de procesamiento de la tienda: 2 días hábiles. Los tiempos de procesamiento y los plazos de transporte de tarifas personalizadas están aquí, en el canal Facebook e Instagram. Los perfiles de envío están en Shopify.') + '</p></div>' +
      '<p class="sh-nota">' + T('✓ Caminho e níveis conforme a Central de Ajuda da Shopify (EN, 16/10/2026). ⚠ Visual e nomes em português são do treino (a conferir com a loja real).', '✓ Camino y niveles según el Centro de ayuda de Shopify (EN, 16/10/2026). ⚠ El visual y los nombres en español son de práctica (por confirmar con la tienda real).') + '</p>';
  }
  function render() {
    var corpo, r = rota;
    if (r === 'temas' || r === 'loja') corpo = telaTemas(); else if (r === 'codigo') corpo = telaCodigo(); else if (r === 'fb' || r === 'fb-setup') corpo = telaFb(); else if (r === 'fb-dados') corpo = telaDados(); else if (r === 'fb-prods') corpo = telaFbProds();
    else if (r === 'pedidos') corpo = telaPedidos(); else if (r === 'produtos') corpo = telaProdutos(); else if (/^produto-/.test(r)) corpo = telaProduto(r.slice(8));
    else if (r === 'config') corpo = telaConfig(); else if (r === 'canais') corpo = telaCanais(); else if (r === 'appstore') corpo = telaAppStore(); else corpo = telaInicio();
    var foco = document.activeElement && document.activeElement.id, pos = null; if (foco === 'shTema') { try { pos = document.activeElement.selectionStart } catch (e) { } }
    $('#app').innerHTML = esqueleto(corpo);
    if (foco === 'shTema') { var el = $('#shTema'); if (el) { el.focus(); try { el.setSelectionRange(pos, pos) } catch (e) { } } }
    window.__simSh2 = { rota: rota };
  }
  function dr() { var a = s().shopify.app; return draftFb = draftFb || { on: a.on, nivel: a.nivel, pixel: a.pixel } }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-ir]'); if (b) { ir(b.getAttribute('data-ir')); return }
    b = e.target.closest('[data-nivel]'); if (b) { dr().nivel = b.getAttribute('data-nivel'); render(); return }
    b = e.target.closest('[data-ac]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-ac');
    if (ac === 'menu') { menuAberto = !menuAberto; render() }
    else if (ac === 'editar-codigo') { rasc = null; ir('codigo') }
    else if (ac === 'salvar-tema') { if (rasc != null) { var st = s(); st.shopify.tema = rasc; rasc = null; SITE.set(st) } msg = '✓ ' + T('Tema salvo.', 'Tema guardado.'); render() }
    else if (ac === 'abrir-dados') { draftFb = null; ir('fb-dados') }
    else if (/^conectar-/.test(ac)) { dr().pixel = ac.replace('conectar-', ''); render() }
    else if (ac === 'trocar-pixel') { dr().pixel = 'nenhum'; render() }
    else if (ac === 'confirmar') { var st2 = s(), d = draftFb || st2.shopify.app; st2.shopify.app = { on: d.on, nivel: d.nivel, pixel: d.on ? d.pixel : 'nenhum' }; if (!d.on) st2.shopify.app.on = false; SITE.set(st2); draftFb = null; msg = '✓ ' + T('Configurações salvas.', 'Configuraciones guardadas.'); render() }
    else if (ac === 'appstore') ir('appstore')
    else if (ac === 'add-fb') { grava(function (x) { x.shopify.canal = { instalado: true, conectado: false } }); ir('fb') }
    else if (ac === 'iniciar') { termos = false; ir('fb-setup') }
    else if (ac === 'conectar-conta') { MBEJ.abrir({ plataforma: 'Shopify', campos: ['portfolio', 'pagina'] }) }
    else if (ac === 'finalizar') { grava(function (x) { x.shopify.canal.conectado = true }); termos = false; ir('fb') }
    else if (ac === 'mais') { maisAberto = !maisAberto; render() }
    else if (ac === 'add-canal') { maisAberto = false; dlgCanal = true; draftDisp = { fb: false }; render() }
    else if (ac === 'cancela-dlg') { dlgCanal = false; draftDisp = null; render() }
    else if (ac === 'tornar-disp') { var ids = Object.keys(sel).filter(function (k) { return sel[k] }).map(Number); if (draftDisp && draftDisp.fb) grava(function (x) { x.shopify.prods.forEach(function (p) { if (ids.indexOf(p.id) >= 0 && !p.arq) p.fb = true }) }); dlgCanal = false; draftDisp = null; sel = {}; render() }
    else if (ac === 'gerenciar-disp') { var pid = +rota.slice(8), p = s().shopify.prods.filter(function (x) { return x.id === pid })[0]; draftDisp = draftDisp || { fb: p.fb }; dlgDisp = true; render() }
    else if (ac === 'disp-pronto') { dlgDisp = false; render() }
    else if (ac === 'salvar-prod') { var pid2 = +rota.slice(8); if (draftDisp) grava(function (x) { x.shopify.prods.forEach(function (p) { if (p.id === pid2 && !p.arq) p.fb = draftDisp.fb }) }); draftDisp = null; msg = '✓ ' + T('Produto salvo.', 'Producto guardado.'); render() }
    else if (ac === 'salvar-fbp') { msg = '✓ ' + T('Alterações salvas. A Meta recebe na próxima sincronização.', 'Cambios guardados. Meta los recibe en la próxima sincronización.'); render() }
  });
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.id === 'shOn') { var a = s().shopify.app; dr().on = t.checked; if (!draftFb.on) draftFb.pixel = a.pixel; render() }
    else if (t.id === 'shTermos') { termos = t.checked; render() }
    else if (t.id === 'shFiltro') { filtro = t.value; render() }
    else if (t.id === 'shCanalFb') { draftDisp = { fb: t.checked }; render() }
    else if (t.id === 'shDispFb') { draftDisp = { fb: t.checked }; render() }
    else if (t.getAttribute && t.getAttribute('data-selp')) { sel[t.getAttribute('data-selp')] = t.checked; render() }
    else if (t.getAttribute && t.getAttribute('data-catp')) { var id = +t.getAttribute('data-catp'), v = t.value; grava(function (x) { x.shopify.prods.forEach(function (p) { if (p.id === id) p.cat = v }) }); render() }
  });
  document.addEventListener('input', function (e) { if (e.target.id === 'shTema') { rasc = e.target.value; var st = $('[data-t=ed-status]'); if (st) st.textContent = '● ' + T('Alterações não salvas.', 'Cambios sin guardar.'); var n = $('.sh-num'); if (n) { var l = Math.max(18, e.target.value.split('\n').length + 2), x = ''; for (var i = 1; i <= l; i++) x += i + '\n'; n.textContent = x } } });
  window.addEventListener('hashchange', function () { var h = (location.hash || '#inicio').slice(1); if (h !== rota) ir(h) });
  window.addEventListener('site:mudou', function () { if (rasc == null && !draftFb && !dlgCanal && !dlgDisp) render() });
  if (window.MBEJ) MBEJ.registra('Shopify', function (a) { grava(function (x) { x.shopify.canal.ativos = a }); render() });
  window.SHADM = { ir: ir, render: render };
  render();
})();
