/* ADMIN DA SHOPIFY (faz-de-conta) — as duas telas onde se resolve um Pixel de loja Shopify:
   1) Loja virtual › Temas › ⋯ › Editar código › theme.liquid  (onde fica código do Pixel colado à mão)
   2) Canais de vendas › Facebook e Instagram › Configurações › Compartilhamento de dados  (nível Standard/Enhanced/Maximum e o pixel conectado)
   Real (Central de Ajuda da Shopify, lida em 16/10/2026, EN): “Facebook data sharing” e “Meta pixel”:
   caminho Sales channels › Facebook & Instagram › Settings › Share data settings; ativar o compartilhamento; escolher Standard (só o pixel; um bloqueador
   de anúncios do navegador pode impedir), Enhanced ou Maximum (pixel + API de Conversões, que manda o Purchase de servidor a servidor, sem bloqueio);
   escolher o pixel (Connect/Change) e Confirm. Se havia código do Pixel no tema: Online Store › tema atual › ⋯ › Edit code › theme.liquid ›
   apagar o código entre <head> e </head> › Save (senão a loja fica com mais de um pixel: dados duplicados).
   INVENTADOS/A CONFERIR: o visual exato, os nomes dos botões em português, o tema “Dawn”, os IDs e a loja. Telas reais da Shopify não foram abertas (a conta de aula não tem loja). */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return LANG === 'es' ? es : pt }
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var rota = (location.hash || '#inicio').slice(1), menuAberto = false, rasc = null, msg = '', draftFb = null, abre = { loja: true };
  function s() { return SITE.get() }
  function ir(r) { rota = r; menuAberto = false; msg = ''; if (location.hash !== '#' + r) history.replaceState(null, '', '#' + r); render() }
  function nav(id, txt, extra, cls) { return '<button class="sh-n' + (rota === id ? ' on' : '') + (cls ? ' ' + cls : '') + '" data-ir="' + id + '" data-t="nav-' + id + '">' + txt + (extra || '') + '</button>' }
  function esqueleto(corpo) {
    return '<div data-sem-traduzir="1"><div class="sh-topo"><span class="sh-logo">🛍️ shopify</span><input class="sh-busca" placeholder="' + T('Pesquisar', 'Buscar') + '" tabindex="-1"/><span class="sh-loja" data-t="loja-nome"><i>LM</i> Lojinha da Marina</span></div>' +
      '<div class="sh-corpo"><aside class="sh-menu" data-t="menu">' + nav('inicio', '🏠 ' + T('Início', 'Inicio')) + '<div class="sh-n off">🧾 ' + T('Pedidos', 'Pedidos') + '</div><div class="sh-n off">🏷️ ' + T('Produtos', 'Productos') + '</div><div class="sh-n off">👥 ' + T('Clientes', 'Clientes') + '</div><div class="sh-n off">📊 ' + T('Análises', 'Análisis') + '</div>' +
      '<div class="sh-sec">' + T('Canais de vendas', 'Canales de venta') + '</div>' + nav('loja', '🖥️ ' + T('Loja virtual', 'Tienda online'), '', '') +
      (rota === 'loja' || rota === 'temas' || rota === 'codigo' ? nav('temas', T('Temas', 'Temas'), '', 'sub') : '') +
      nav('fb', '📘 Facebook ' + T('e', 'e') + ' Instagram') + '<div class="sh-sec"></div><div class="sh-n off">⚙️ ' + T('Configurações', 'Configuración') + '</div></aside><main class="sh-main">' + corpo + '</main></div></div>';
  }
  function telaInicio() { return '<h1>' + T('Início', 'Inicio') + '</h1><div class="sh-cartao"><p>' + T('Admin da Lojinha da Marina (faz-de-conta, para treino). Aqui você resolve o que a plataforma controla: o tema da loja e o app Facebook e Instagram.', 'Admin de la Lojinha da Marina (de mentira, para práctica). Aquí resuelves lo que controla la plataforma: el tema de la tienda y la app Facebook e Instagram.') + '</p></div>' }
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
  function telaFb() {
    var a = s().shopify.app, pix = a.on && a.pixel !== 'nenhum' ? (a.pixel === 'certo' ? 'Pixel da Mari (' + SITE.idCerto() + ')' : 'Outro pixel (000000000000000)') : T('Nenhum pixel conectado', 'Ningún píxel conectado');
    return '<h1>Facebook ' + T('e', 'e') + ' Instagram</h1><div class="sh-cartao" data-t="fb-resumo"><h2>' + T('Pixel da Meta', 'Píxel de Meta') + '</h2><p><b>' + esc(pix) + '</b></p><p class="sh-mud">' + T('Nível de compartilhamento de dados: ', 'Nivel de compartir datos: ') + '<b>' + ({ standard: T('Padrão (Standard)', 'Estándar (Standard)'), enhanced: T('Avançado (Enhanced)', 'Avanzado (Enhanced)'), maximum: T('Máximo (Maximum)', 'Máximo (Maximum)') }[a.nivel]) + '</b>' + (a.on ? '' : ' · ' + T('compartilhamento desativado', 'compartir desactivado')) + '</p></div>' +
      '<button class="sh-bt prim" data-ac="abrir-dados" data-t="btn-fb-config">' + T('Configurações', 'Configuración') + '</button>';
  }
  function telaDados() {
    var a = s().shopify.app, d = draftFb || { on: a.on, nivel: a.nivel, pixel: a.pixel };
    var niv = function (k, tt, desc) { return '<label class="sh-rad" data-t="nivel-' + k + '"><input type="radio" name="nivel" data-nivel="' + k + '"' + (d.nivel === k ? ' checked' : '') + (d.on ? '' : ' disabled') + ' data-t="r-nivel-' + k + '"/><span><b>' + tt + '</b><small>' + desc + '</small></span></label>' };
    var px = function (k, nome) { var on = d.pixel === k; return '<div class="sh-pix' + (on ? ' on' : '') + '" data-t="pix-' + k + '"><span>' + esc(nome) + '</span>' + (on ? '<button class="sh-bt" data-ac="trocar-pixel" data-t="btn-trocar">' + T('Alterar', 'Cambiar') + '</button>' : '<button class="sh-bt" data-ac="conectar-' + k + '" data-t="btn-conectar-' + k + '"' + (d.on ? '' : ' disabled') + '>' + T('Conectar', 'Conectar') + '</button>') + '</div>' };
    return '<h1>' + T('Compartilhamento de dados', 'Compartir datos') + '</h1><div class="sh-cartao" data-t="box-dados"><h2>' + T('Compartilhamento de dados do cliente', 'Compartir datos del cliente') + '</h2>' +
      '<label class="sh-tg"><input type="checkbox" id="shOn"' + (d.on ? ' checked' : '') + ' data-t="tg-dados"/><span>' + T('Ativar o compartilhamento de dados', 'Activar compartir datos') + '</span></label>' +
      '<h3>' + T('Escolha o nível de compartilhamento', 'Elige el nivel de compartir') + '</h3>' +
      niv('standard', T('Padrão (Standard)', 'Estándar (Standard)'), T('Um pixel da Meta coleta o comportamento de navegação na loja. Um bloqueador de anúncios do navegador pode impedir o pixel de compartilhar dados.', 'Un píxel de Meta recopila el comportamiento de navegación en la tienda. Un bloqueador de anuncios del navegador puede impedir que el píxel comparta datos.')) +
      niv('enhanced', T('Avançado (Enhanced)', 'Avanzado (Enhanced)'), T('Usa o pixel e a API de Conversões. A API de Conversões envia o evento de compra de servidor para servidor, que bloqueadores do navegador não impedem. Compartilha dados pessoais do cliente (nome, local, e-mail, telefone) para a correspondência.', 'Usa el píxel y la API de Conversiones. La API de Conversiones envía el evento de compra de servidor a servidor, que los bloqueadores del navegador no impiden. Comparte datos personales del cliente (nombre, ubicación, correo, teléfono) para la coincidencia.')) +
      niv('maximum', T('Máximo (Maximum)', 'Máximo (Maximum)'), T('Usa a API de Conversões, o pixel e a tecnologia de anúncios mais recente da Meta. Também envia a compra de servidor para servidor e compartilha dados pessoais do cliente para a correspondência.', 'Usa la API de Conversiones, el píxel y la tecnología publicitaria más reciente de Meta. También envía la compra de servidor a servidor y comparte datos personales del cliente para la coincidencia.')) +
      '<h3>' + T('Pixel', 'Píxel') + '</h3>' + px('certo', 'Pixel da Mari (' + SITE.idCerto() + ')') + px('outro', 'Outro pixel (000000000000000)') +
      '<p class="sh-aviso">' + T('Se você já colou o código de um pixel no tema, apague-o antes (Loja virtual › Temas › Editar código): com os dois, a loja envia dados duplicados.', 'Si ya pegaste el código de un píxel en el tema, bórralo antes (Tienda online › Temas › Editar código): con los dos, la tienda envía datos duplicados.') + '</p>' +
      '<button class="sh-bt prim" data-ac="confirmar" data-t="btn-confirmar">' + T('Confirmar', 'Confirmar') + '</button> <span class="sh-ok" data-t="fb-status">' + esc(msg) + '</span></div>' +
      '<p class="sh-nota">' + T('✓ Caminho e níveis conforme a Central de Ajuda da Shopify (EN, 16/10/2026). ⚠ Visual e nomes em português são do treino (a conferir com a loja real).', '✓ Camino y niveles según el Centro de ayuda de Shopify (EN, 16/10/2026). ⚠ El visual y los nombres en español son de práctica (por confirmar con la tienda real).') + '</p>';
  }
  function render() {
    var corpo = rota === 'temas' || rota === 'loja' ? telaTemas() : rota === 'codigo' ? telaCodigo() : rota === 'fb' ? telaFb() : rota === 'fb-dados' ? telaDados() : telaInicio();
    var foco = document.activeElement && document.activeElement.id, pos = null; if (foco === 'shTema') { try { pos = document.activeElement.selectionStart } catch (e) { } }
    $('#app').innerHTML = esqueleto(corpo);
    if (foco === 'shTema') { var el = $('#shTema'); if (el) { el.focus(); try { el.setSelectionRange(pos, pos) } catch (e) { } } }
    window.__simSh2 = { rota: rota };
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-ir]'); if (b) { ir(b.getAttribute('data-ir')); return }
    b = e.target.closest('[data-nivel]'); if (b) { draftFb = draftFb || { on: s().shopify.app.on, nivel: s().shopify.app.nivel, pixel: s().shopify.app.pixel }; draftFb.nivel = b.getAttribute('data-nivel'); render(); return }
    b = e.target.closest('[data-ac]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-ac');
    if (ac === 'menu') { menuAberto = !menuAberto; render() }
    else if (ac === 'editar-codigo') { rasc = null; ir('codigo') }
    else if (ac === 'salvar-tema') { if (rasc != null) { var st = s(); st.shopify.tema = rasc; rasc = null; SITE.set(st) } msg = '✓ ' + T('Tema salvo.', 'Tema guardado.'); render() }
    else if (ac === 'abrir-dados') { draftFb = null; ir('fb-dados') }
    else if (/^conectar-/.test(ac)) { draftFb = draftFb || { on: s().shopify.app.on, nivel: s().shopify.app.nivel, pixel: s().shopify.app.pixel }; draftFb.pixel = ac.replace('conectar-', ''); render() }
    else if (ac === 'trocar-pixel') { draftFb = draftFb || { on: s().shopify.app.on, nivel: s().shopify.app.nivel, pixel: s().shopify.app.pixel }; draftFb.pixel = 'nenhum'; render() }
    else if (ac === 'confirmar') { var st2 = s(), d = draftFb || st2.shopify.app; st2.shopify.app = { on: d.on, nivel: d.nivel, pixel: d.on ? d.pixel : 'nenhum' }; if (!d.on) st2.shopify.app.on = false; SITE.set(st2); draftFb = null; msg = '✓ ' + T('Configurações salvas.', 'Configuraciones guardadas.'); render() }
  });
  document.addEventListener('change', function (e) {
    if (e.target.id === 'shOn') { var a = s().shopify.app; draftFb = draftFb || { on: a.on, nivel: a.nivel, pixel: a.pixel }; draftFb.on = e.target.checked; if (!draftFb.on) draftFb.pixel = a.pixel; render() }
  });
  document.addEventListener('input', function (e) { if (e.target.id === 'shTema') { rasc = e.target.value; var st = $('[data-t=ed-status]'); if (st) st.textContent = '● ' + T('Alterações não salvas.', 'Cambios sin guardar.'); var n = $('.sh-num'); if (n) { var l = Math.max(18, e.target.value.split('\n').length + 2), x = ''; for (var i = 1; i <= l; i++) x += i + '\n'; n.textContent = x } } });
  window.addEventListener('hashchange', function () { var h = (location.hash || '#inicio').slice(1); if (h !== rota) ir(h) });
  window.addEventListener('site:mudou', function () { if (rasc == null && !draftFb) render() });
  window.SHADM = { ir: ir, render: render };
  render();
})();
