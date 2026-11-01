/* Moldura única dos simuladores (01/11/2026, pedido do responsável: "uniformizar as interfaces"). Substitui a sim-casca.js.
   Modelo: o simulador do WhatsApp Business (meta-wacel.html).
   - Em cima, abaixo da faixa amarela: as abinhas "📱 Celular | 🖥️ Computador" (só quando a página tem os dois) e a linha
     "onde você está" (🖥️ app › tela, ou 🌐 endereço da página web, ou 📱 Celular da Marina · app).
   - Computador = uma janela; dentro dela, só a moldura REAL do app (lida nas telas reais em 01/11/2026, Chrome do responsável,
     conta de aula, só olhando):
       · Gerenciador de Anúncios / de Eventos: trilho de ícones "ferramentas" (Visão geral da conta, Campanhas, Relatórios de Anúncios,
         Públicos, Configurações de publicidade, Cobrança e pagamentos, Gerenciador de Eventos, Todas as ferramentas; embaixo Ajuda,
         Configurações da conta de anúncios, Pesquisar, Relatar um problema).
       · Meta Business Suite: barra de cima "Meta Business Suite" + portfólio, e o menu da esquerda com os itens reais. Sem trilho de ícones.
       · Gerenciador de Comércio, Regras automatizadas, páginas web: o simulador desenha a própria moldura (ou não tem).
   - Celular = só o celular, centralizado (o simulador desenha o aparelho); nada de computador em volta.
   Como funciona: a janela (.mold-jan > .mold-dentro) tem transform, então os position:fixed do simulador (top:32px, bottom:0…)
   passam a valer DENTRO da janela, sem mexer no CSS de cada simulador. A faixa amarela sai do #app e fica na página.
   O simulador pode dizer onde está a cada desenho: window.MOLDURA_AGORA = function () { return { lugar: 'cel'|'pc', app, onde, url } }
   e trocar de lugar pelas abinhas: window.MOLDURA_TROCA = function (lugar) { … } */
(function () {
  var app = document.getElementById('app'); if (!app) return;
  var pag = (location.pathname.split('/').pop() || '').replace('.html', '');
  var es = (function () { try { return JSON.parse(localStorage.getItem('plat.lang')) === 'es' } catch (e) { return false } })();
  function T(pt, sp) { return es ? sp : pt }
  var ic = function (d) { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>' };
  var IC = {
    sino: ic('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0"/>'), painel: ic('<circle cx="12" cy="13" r="8"/><path d="M12 13l4-4"/>'),
    tabela: ic('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/>'), relat: ic('<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'),
    pessoas: ic('<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c1-4 4-5 6-5s5 1 6 5M15 15c3 0 5 1 6 4"/>'),
    engr: ic('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>'),
    cartao: ic('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>'), eventos: ic('<circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M12 9v3M12 12l-5 4M12 12l5 4"/>'),
    menu: ic('<path d="M4 6h16M4 12h16M4 18h16"/>'), ajuda: ic('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7M12 17h.01"/>'),
    lupa: ic('<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>'), bandeira: ic('<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>'), casa: ic('<path d="M3 11l9-7 9 7v9H3z"/>'),
    megafone: ic('<path d="M3 10v4h4l7 5V5L7 10zM18 9a4 4 0 0 1 0 6"/>'), chat: ic('<path d="M4 5h16v11H8l-4 4z"/>'), conteudo: ic('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 15l5-5 4 4 3-3 6 6"/>'),
    estrela: ic('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'), cal: ic('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
    grafico: ic('<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>'), moeda: ic('<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .9 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"/>'),
    loja: ic('<path d="M4 9l2-5h12l2 5M4 9v11h16V9M9 20v-6h6v6"/>'), regras: ic('<path d="M4 6h10M4 12h7M4 18h10M17 4l3 3-3 3M17 14l3 3-3 3"/>'), lapis: ic('<path d="M4 20h4L19 9l-4-4L4 16z"/>')
  };
  // para onde cada item leva (só os que têm simulador; o resto avisa que não faz parte do treino)
  var VAI = { campanhas: 'meta-anuncios.html', relat: 'meta-relatorios.html', publicos: 'meta-publicos.html', eventos: 'meta-eventos.html',
    inicio: 'meta-suite.html#inicio', caixa: 'meta-suite.html#caixa', conteudo: 'meta-turbinar.html#posts', anuncios: 'meta-turbinar.html#promover', insights: 'meta-suite.html#insights', gads: 'meta-anuncios.html',
    comercio: 'meta-commerce.html', regras: 'meta-regras.html', config: 'meta-portfolio.html' };
  // Gerenciador de Anúncios (real, 01/11/2026): trilho "ferramentas"
  var TRILHO_ADS = [['logo'], ['sino', 'sino', T('Notificações', 'Notificaciones')], ['visao', 'painel', T('Visão geral da conta', 'Resumen de la cuenta')], ['campanhas', 'tabela', T('Campanhas', 'Campañas')],
    ['relat', 'relat', T('Relatórios de Anúncios', 'Informes de anuncios')], ['publicos', 'pessoas', T('Públicos', 'Públicos')], ['confpub', 'engr', T('Configurações de publicidade', 'Configuración de publicidad')],
    ['cobranca', 'cartao', T('Cobrança e pagamentos', 'Facturación y pagos')], ['eventos', 'eventos', T('Gerenciador de Eventos', 'Administrador de eventos')], ['todas', 'menu', T('Todas as ferramentas', 'Todas las herramientas')],
    ['fim'], ['ajuda', 'ajuda', T('Ajuda', 'Ayuda')], ['confconta', 'engr', T('Configurações da conta de anúncios', 'Configuración de la cuenta publicitaria')], ['busca', 'lupa', T('Pesquisar', 'Buscar')], ['problema', 'bandeira', T('Relatar um problema', 'Informar un problema')]];
  // Meta Business Suite (real, 01/11/2026): menu da esquerda
  var MENU_BS = [['inicio', 'casa', T('Página inicial', 'Inicio')], ['notif', 'sino', T('Notificações', 'Notificaciones')], ['gads', 'megafone', T('Gerenciador de Anúncios', 'Administrador de anuncios')],
    ['caixa', 'chat', T('Caixa de Entrada', 'Bandeja de entrada')], ['conteudo', 'conteudo', T('Conteúdo', 'Contenido')], ['creator', 'estrela', 'Creator Marketing'], ['planner', 'cal', 'Planner'],
    ['anuncios', 'megafone', T('Anúncios', 'Anuncios')], ['insights', 'grafico', 'Insights'], ['monet', 'moeda', T('Monetização', 'Monetización')], ['todas', 'menu', T('Todas as ferramentas', 'Todas las herramientas')],
    ['sec', T('Usadas com frequência', 'Usadas con frecuencia')], ['comercio', 'loja', T('Gerenciador de Comércio', 'Administrador de ventas')], ['eventos', 'eventos', T('Gerenciador de Eventos', 'Administrador de eventos')],
    ['regras', 'regras', T('Regras automatizadas', 'Reglas automatizadas')], ['fim'], ['editar', 'lapis', T('Editar', 'Editar')], ['busca', 'lupa', T('Pesquisar', 'Buscar')], ['config', 'engr', T('Configurações', 'Configuración')], ['ajuda', 'ajuda', T('Ajuda', 'Ayuda')]];
  var NOME = { ads: T('Gerenciador de Anúncios', 'Administrador de anuncios'), eventos: T('Gerenciador de Eventos', 'Administrador de eventos'), suite: 'Meta Business Suite',
    config: 'Meta Business Suite › ' + T('Configurações', 'Configuración'), comercio: T('Gerenciador de Comércio', 'Administrador de ventas'), regras: T('Gerenciador de Anúncios', 'Administrador de anuncios') };
  // cada página: app (moldura), item aceso no trilho/menu e o título padrão
  var PAG = {
    'meta-anuncios': { app: 'ads', on: 'campanhas', proprio: true }, 'meta-feed': { app: 'ads', on: 'campanhas', proprio: true }, 'meta-relatorios': { app: 'ads', on: 'relat', proprio: true },
    'meta-entrega': { app: 'ads', on: 'campanhas', proprio: true }, 'meta-shopads': { app: 'ads', on: 'campanhas' }, 'meta-publicos': { app: 'ads', on: 'publicos', proprio: true },
    'meta-regras': { app: 'regras' }, 'meta-suite': { app: 'suite', on: 'inicio' }, 'meta-leads': { app: 'suite', on: 'todas', proprio: true },
    'meta-verified': { app: 'config', on: 'config' }, 'meta-commerce': { app: 'comercio', proprio: true }, 'meta-microdados': { app: 'web', url: 'business.facebook.com/ads/microdata/debug' },
    'meta-metaone': { app: 'cel' }, 'meta-portfolio': { app: 'config', on: 'config' },
    'meta-eventos': { app: 'eventos', on: 'eventos', proprio: true }, 'meta-mbe': { app: 'eventos', on: 'eventos', proprio: true }, 'meta-catalogo': { app: 'comercio', proprio: true },
    'meta-turbinar': { app: 'suite', on: 'conteudo' }, 'meta-limites': { app: 'ads', on: 'todas' },
    'meta-instagram': { app: 'web', url: 'instagram.com', onde: 'Instagram no computador' },
    'admin-shopify': { app: 'web', url: 'admin.shopify.com', onde: 'Admin da Shopify da loja da Marina' },
    'admin-woo': { app: 'web', url: '…/wp-admin', onde: 'Painel do WordPress (WooCommerce) da loja da Marina' }
  };
  var P = PAG[pag] || { app: 'web' };
  function agora() { var a = {}; try { a = (window.MOLDURA_AGORA && window.MOLDURA_AGORA()) || {} } catch (e) { } var o = {}; for (var k in P) o[k] = P[k]; for (k in a) o[k] = a[k]; return o }
  var ES_ONDE = [['Meta Business Suite › Configurações', 'Meta Business Suite › Configuración'], ['Gerenciador de Anúncios', 'Administrador de anuncios'], ['Formulários de anúncios de lead', 'Formularios de anuncios para clientes potenciales'],
    ['Central de Leads', 'Centro de clientes potenciales'], ['Ferramenta de teste de anúncios de lead', 'Herramienta de prueba de anuncios para clientes potenciales'], ['Ferramenta de teste', 'Herramienta de prueba'],
    ['Conjuntos de anúncios', 'Conjuntos de anuncios'], ['Regras automatizadas', 'Reglas automatizadas'], ['Criar anúncio das Lojas', 'Crear un anuncio de Tiendas'], ['Anúncios (resultados)', 'Anuncios (resultados)'],
    ['Anúncios', 'Anuncios'], ['Campanhas', 'Campañas'], ['Formulários', 'Formularios'], ['Celular da Marina', 'Celular de Marina'], ['tela inicial', 'pantalla de inicio'], ['Central de Contas', 'Centro de cuentas'],
    ['Configurações', 'Configuración'], ['Instagram no computador', 'Instagram en la computadora'], ['Admin da Shopify da loja da Marina', 'Admin de Shopify de la tienda de Marina'],
    ['Painel do WordPress (WooCommerce) da loja da Marina', 'Panel de WordPress (WooCommerce) de la tienda de Marina']];
  function traduz(x) { if (!es || !x) return x; ES_ONDE.forEach(function (p) { x = x.split(p[0]).join(p[1]) }); return x }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }

  // estrutura: faixa · topo (abinhas + onde) · janela > dentro > #app
  var topo = document.createElement('div'); topo.className = 'mold-topo'; topo.setAttribute('data-sem-traduzir', '1');
  var jan = document.createElement('div'); jan.className = 'mold-jan'; var dentro = document.createElement('div'); dentro.className = 'mold-dentro';
  app.parentNode.insertBefore(topo, app); app.parentNode.insertBefore(jan, app); jan.appendChild(dentro); dentro.appendChild(app);
  document.body.classList.add('com-moldura');

  function titulo() {
    var h = app.querySelector('.ss-main h1, .ss-topo h1, .ga-topo h1, .rl h1, main h1, h1'); return h ? h.textContent.replace(/\s+/g, ' ').trim() : '';
  }
  function trilhoAds(on) {
    return '<nav class="mold-trilho" aria-label="ferramentas" data-sem-traduzir="1">' + TRILHO_ADS.map(function (x) {
      if (x[0] === 'logo') return '<span class="mold-logo" title="' + NOME.ads + '">∞</span>'; if (x[0] === 'fim') return '<span class="mold-mola"></span>';
      return '<button tabindex="-1" data-mold="' + x[0] + '" data-t="mold-' + x[0] + '" title="' + x[2] + '"' + (x[0] === on ? ' class="on"' : '') + '>' + IC[x[1]] + '</button>' }).join('') + '</nav>';
  }
  function menuBS(on) {
    return '<nav class="mold-bs" aria-label="Meta Business Suite" data-sem-traduzir="1"><div class="mold-bs-perfil"><span class="mold-av">L</span><span>Lojinha da Marina - Ficticio<small>lojinhadamarina.aula</small></span></div>' + MENU_BS.map(function (x) {
      if (x[0] === 'sec') return '<p class="mold-bs-sec">' + x[1] + '</p>'; if (x[0] === 'fim') return '<span class="mold-mola"></span>';
      return '<button tabindex="-1" data-mold="' + x[0] + '" data-t="mold-' + x[0] + '"' + (x[0] === on ? ' class="on"' : '') + '>' + IC[x[1]] + '<span>' + x[2] + '</span></button>' }).join('') + '</nav>';
  }
  // Configurações do Business Suite (real, 01/11/2026): o menu do Business Suite fica recolhido em ícones à esquerda
  function trilhoBS(on) {
    return '<nav class="mold-trilho mold-trilho-bs" aria-label="Meta Business Suite" data-sem-traduzir="1"><span class="mold-logo" title="Meta Business Suite">∞</span>' + MENU_BS.map(function (x) {
      if (x[0] === 'sec') return '<hr>'; if (x[0] === 'fim') return '<span class="mold-mola"></span>';
      return '<button tabindex="-1" data-mold="' + x[0] + '" data-t="mold-' + x[0] + '" title="' + x[2] + '"' + (x[0] === on ? ' class="on"' : '') + '>' + IC[x[1]] + '</button>' }).join('') + '</nav>';
  }
  function cabBS() { return '<header class="mold-cab" data-sem-traduzir="1"><span class="mold-logo">∞</span><b>Meta Business Suite</b><span class="mold-port"><span class="L">L</span>Lojinha da Marina Aula<small>' + T('Portfólio', 'Portafolio') + '</small><i>▾</i></span><span class="mold-mola"></span><span class="sim-avatar">M</span></header>' }

  var ultimo = '';
  function poe() {
    var a = agora(), lugar = a.lugar || (a.app === 'cel' ? 'cel' : 'pc');
    // a faixa amarela fica fora da janela
    var fx = app.querySelector('.sim-faixa'); if (fx) { var velha = document.body.querySelector(':scope > .sim-faixa'); if (velha && velha !== fx) velha.remove(); document.body.insertBefore(fx, topo) }
    // onde você está
    var onde = traduz(a.onde) || (a.app === 'web' ? '' : (NOME[a.app] || '') + (titulo() && NOME[a.app] && titulo() !== NOME[a.app] ? ' › ' + titulo() : ''));
    var linha = lugar === 'cel' ? '📱 ' + esc(traduz(a.onde) || T('Celular da Marina', 'Celular de Marina'))
      : a.app === 'web' ? '🌐 <span class="mold-url">' + esc(a.url || location.host) + '</span>' + (a.onde ? ' <small>' + esc(traduz(a.onde)) + '</small>' : '') : '🖥️ ' + esc(onde);
    var abas = a.lugares && a.lugares.length > 1 ? '<div class="mold-troca" role="tablist">' + a.lugares.map(function (l) {
      return '<button data-lugar="' + l + '" data-t="troca-' + l + '"' + (l === lugar ? ' class="on"' : '') + '>' + (l === 'cel' ? '📱 ' + T('Celular', 'Celular') : '🖥️ ' + T('Computador', 'Computadora')) + '</button>' }).join('') + '</div>' : '';
    // outros lugares do mesmo treino (ex.: o Business Suite e a página meta.com): ficam FORA da janela, com cara de Lojinha
    var ir = (a.destinos || []).filter(function (d) { return !d.on }).map(function (d) {
      return '<button class="mold-ir" data-ir-lugar="' + esc(d.id) + '" data-t="ir-' + esc(d.id) + '">' + esc(traduz(d.rotulo)) + '</button>' }).join('');
    var html = abas + '<p class="mold-onde" data-t="onde">' + linha + (ir ? '<span class="mold-ir-l">' + T('ir para', 'ir a') + ':</span>' + ir : '') + '</p>' +
      (a.controles ? '<div class="mold-ctl" title="' + T('Controles do treino: não existem na Meta', 'Controles de la práctica: no existen en Meta') + '"><span>🧪 ' + T('Treino', 'Práctica') + ':</span>' + a.controles + '</div>' : '');
    if (html !== ultimo) { topo.innerHTML = html; ultimo = html }
    document.body.classList.toggle('mold-abas', !!abas);
    jan.style.top = (32 + topo.offsetHeight + 2) + 'px';
    // janela: celular sem moldura; computador com a moldura real do app
    jan.className = 'mold-jan mold-' + (lugar === 'cel' ? 'cel' : a.app);
    var tr = dentro.querySelector(':scope > .mold-trilho'), bs = dentro.querySelector(':scope > .mold-bs'), cab = dentro.querySelector(':scope > .mold-cab');
    var querTr = lugar !== 'cel' && (a.app === 'ads' || a.app === 'eventos' || a.app === 'config') && !a.semTrilho, querBS = lugar !== 'cel' && a.app === 'suite' && !a.semMenu;
    if (querTr) { var on = (a.app === 'config' ? 'c:' : '') + (a.on || (a.app === 'config' ? 'config' : 'campanhas')); if (!tr || tr.getAttribute('data-on') !== on) { if (tr) tr.remove(); dentro.insertAdjacentHTML('afterbegin', a.app === 'config' ? trilhoBS(a.on || 'config') : trilhoAds(on)); dentro.firstChild.setAttribute('data-on', on) } } else if (tr) tr.remove();
    if (querBS) { var on2 = a.on || 'inicio'; if (!bs || bs.getAttribute('data-on') !== on2) { if (bs) bs.remove(); dentro.insertAdjacentHTML('afterbegin', menuBS(on2)); dentro.firstChild.setAttribute('data-on', on2) } if (!cab) dentro.insertAdjacentHTML('afterbegin', cabBS()) }
    else if (querTr && !a.proprio && a.app !== 'config') {   // Gerenciador de Anúncios sem cabeçalho próprio no simulador: título da tela + conta de anúncios (como no real)
      var tt = esc(titulo() || NOME.ads), ch = '<h1>' + tt + '</h1><span class="mold-conta">' + T('Conta de aula da Lojinha (ID 123456789)', 'Cuenta de clase de la Lojinha (ID 123456789)') + ' <i>▾</i></span>';
      if (!cab || cab.getAttribute('data-h') !== ch) { if (cab) cab.remove(); dentro.insertAdjacentHTML('afterbegin', '<header class="mold-cab mold-cab-ads" data-sem-traduzir="1">' + ch + '</header>'); dentro.firstChild.setAttribute('data-h', ch) }
    }
    else if (lugar !== 'cel' && a.app === 'comercio' && !a.proprio) {   // Gerenciador de Comércio (real, 01/11/2026): "Gerenciador de Comércio" + empresa no alto
      var cc = '<span class="mold-logo">∞</span><b>' + NOME.comercio + '</b><span class="mold-port"><span class="L">L</span>Lojinha da Marina Aula</span><span class="mold-mola"></span><span class="sim-avatar">M</span>';
      if (!cab || cab.getAttribute('data-h') !== cc) { if (cab) cab.remove(); dentro.insertAdjacentHTML('afterbegin', '<header class="mold-cab" data-sem-traduzir="1">' + cc + '</header>'); dentro.firstChild.setAttribute('data-h', cc) }
    }
    else if (cab) cab.remove();
    if (bs && !querBS) bs.remove();
    document.body.classList.toggle('mold-com-trilho', querTr); document.body.classList.toggle('mold-com-bs', querBS); document.body.classList.toggle('mold-com-cab', querBS || (querTr && !a.proprio && a.app !== 'config') || (lugar !== 'cel' && a.app === 'comercio' && !a.proprio));
    document.body.classList.toggle('mold-celular', lugar === 'cel');
  }
  var tm = null; function agenda() { clearTimeout(tm); tm = setTimeout(poe, 0) }
  new MutationObserver(poe).observe(app, { childList: true }); poe();
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('.mold-troca [data-lugar]');
    if (t) { if (window.MOLDURA_TROCA) window.MOLDURA_TROCA(t.getAttribute('data-lugar')); agenda(); return }
    var g = e.target.closest && e.target.closest('[data-ir-lugar]');
    if (g) { if (window.MOLDURA_VAI) window.MOLDURA_VAI(g.getAttribute('data-ir-lugar')); agenda(); return }
    var m = e.target.closest && e.target.closest('[data-mold]');
    if (m) {
      var k = m.getAttribute('data-mold'), dest = VAI[k], aqui = location.pathname.split('/').pop();
      if (dest && dest.split('#')[0] !== aqui) { location.href = dest; return }
      if (dest) { if (dest.indexOf('#') > 0) location.hash = dest.split('#')[1]; return }
      aviso(m);
    }
    agenda();
  });
  window.addEventListener('hashchange', agenda);
  function aviso(el) {   // item real que não tem simulador: diz isso, sem inventar a tela
    var d = document.querySelector('.mold-aviso'); if (!d) { d = document.createElement('div'); d.className = 'mold-aviso'; document.body.appendChild(d) }
    d.textContent = '🧪 ' + T('Esta parte existe na Meta, mas não faz parte deste treino.', 'Esta parte existe en Meta, pero no forma parte de esta práctica.');
    d.classList.add('on'); clearTimeout(d._t); d._t = setTimeout(function () { d.classList.remove('on') }, 2600);
  }
  window.MOLDURA = { atualiza: agenda };
})();
