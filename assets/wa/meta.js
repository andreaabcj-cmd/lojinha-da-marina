/* Meta Business Suite › Configurações (portfólio da Marina). Tela real vista em 27/10/2026, em PT e em ES (?locale=es_LA),
   no portfólio de aula; número e identificação aqui são fictícios.
   - "Contas do WhatsApp" veio VAZIA mesmo com o app no portfólio; a conta do app aparece em "Contas de mensagens",
     com "Aplicativo WhatsApp Business" (ES: "App de WhatsApp Business") embaixo do nome.
   - Partes em inglês na tela real ficam em inglês: "Messaging accounts", "Summary", "WhatsApp accounts", "Contact support".
   - O Resumo em espanhol não foi visto: tradução nossa (a conferir). Conta da Plataforma (API) não foi vista: a conferir. */
(function () {
  var T = N.T, t = N.t;
  var META = window.META = { el: null, pag: 'carregando', sel: false, aba: 'numeros', pop: false };

  // ícones iguais aos do simulador de portfólio da Lojinha (sim-portfolio.js)
  function ic(d) { return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + d + '</svg>' }
  var IC = { info: ic('<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'), user: ic('<circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 5-6 8-6s7 1 8 6"/>'),
    conta: ic('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/>'), dados: ic('<circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/>'),
    escudo: ic('<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/>') };

  var MENU = [
    ['solo', 'info', T('Informações da empresa', 'Información del negocio'), IC.info],
    ['g', T('Usuários', 'Usuarios'), '', IC.user], ['i', 'pessoas', T('Pessoas', 'Personas')], ['i', 'parceiros', T('Parceiros', 'Socios')], ['i', 'sistema', T('Usuários do sistema', 'Usuarios del sistema')],
    ['g', T('Contas', 'Cuentas'), '', IC.conta], ['i', 'paginas', T('Páginas', 'Páginas')], ['i', 'anuncios', T('Contas de anúncios', 'Cuentas publicitarias')],
    ['i', 'grupos', T('Grupos de ativos de negócios', 'Grupos de activos comerciales')], ['i', 'apps', T('Apps', 'Apps')], ['i', 'comerciais', T('Contas comerciais', 'Cuentas de comercio')],
    ['i', 'instagram', T('Perfis do Instagram', 'Perfiles de Instagram')], ['i', 'wa', T('Contas do WhatsApp', 'Cuentas de WhatsApp')], ['i', 'msg', T('Contas de mensagens', 'Cuentas de mensajes')],
    ['i', 'threads', T('Perfis do Threads', 'Perfiles de Threads')],
    ['g', T('Fontes de dados', 'Orígenes de datos'), '⌄', IC.dados], ['solo', 'pedidos', T('Pedidos', 'Solicitudes'), IC.info], ['g', T('Integrações', 'Integraciones'), '⌄', IC.dados],
    ['solo', 'verified', T('Meta Verified', 'Meta Verified'), IC.escudo]
  ];

  function menu() {
    return '<nav class="mt-menu" data-t="mt-menu">' + MENU.map(function (m) {
      if (m[0] === 'g') return '<div class="g">' + (m[3] || '') + '<span>' + t(m[1]) + '</span><span>' + (m[2] || '⌃') + '</span></div>';
      return '<button class="' + (m[0] === 'solo' ? 'solo ' : '') + (META.pag === m[1] ? 'on' : '') + '" data-mt="pag:' + m[1] + '" data-t="mt-menu-' + m[1] + '">' + (m[3] || '') + t(m[2]) + '</button>';
    }).join('') + '</nav>';
  }

  var PAGS = {
    carregando: function () { return '<div class="mt-esqueleto"><i style="width:40%"></i><i></i><i style="width:80%"></i><i style="width:65%"></i></div>' },
    wa: function () {
      return '<div class="mt-titulo"><h4>' + t(T('Contas do WhatsApp', 'Cuentas de WhatsApp')) + ' ⓘ</h4><span class="mt-busca">🔍 Search by phone number</span><button class="mt-btazul" data-mt="nada">＋ ' + t(T('Adicionar', 'Agregar')) + '</button></div>' +
        '<div class="mt-vazio" data-t="mt-wa-vazio"><div class="ilu">🧰</div><b>' + t(T('Nenhuma conta do WhatsApp adicionada', 'No se agregó ninguna cuenta de WhatsApp')) + '</b>' +
        '<p>' + t(T('Adicione contas do WhatsApp a este portfólio empresarial para gerenciar todos os seus ativos de negócios em um só local.', 'Agrega cuentas de WhatsApp a este portfolio comercial para que puedas administrar todos tus activos comerciales en un solo lugar.')) + '</p>' +
        '<button class="mt-btazul" data-mt="nada">＋ ' + t(T('Adicionar', 'Agregar')) + '</button></div>';
    },
    msg: function () {
      var tipo = t(T('Aplicativo WhatsApp Business', 'App de WhatsApp Business'));
      var h = '<div class="mt-titulo"><h4>Messaging accounts ⓘ</h4><span class="mt-busca">🔍 ' + t(T('Pesquisar por nome ou ID', 'Buscar por nombre o ID')) + '</span><button class="mt-bt" data-mt="nada">' + t(T('Filtros', 'Filtros')) + '</button><button class="mt-btazul" data-mt="nada">＋ ' + t(T('Adicionar', 'Agregar')) + '</button></div>' +
        '<div class="mt-esq"><div class="mt-lista"><div class="cab">' + t(T('Nome', 'Nombre')) + ' ⇅</div>' +
        '<button class="mt-linha' + (META.sel ? ' sel' : '') + '" data-mt="sel" data-t="mt-conta"><span>🟢</span><span>Lojinha da Marina<small data-t="mt-tipo">' + tipo + '</small></span></button></div>';
      if (!META.sel) return h + '<div class="mt-det"></div></div>';
      h += '<div class="mt-det"><div class="mt-det-topo"><span>🟢</span><div><b>Lojinha da Marina</b><small>' + t(T('Identificação', 'Identificador')) + ': 100000000000001</small><small>' + t(T('Propriedade de: Lojinha da Marina', 'Propiedad de Lojinha da Marina')) + '</small><small class="mt-tipo" data-t="mt-tipo-det">' + tipo + '</small></div>' +
        '<span class="acoes"><button class="mt-bt" data-mt="pop" aria-label="' + t(T('Mais opções', 'Más opciones')) + '">⋯</button><button class="mt-bt" data-mt="fecha" aria-label="' + t(T('Fechar', 'Cerrar')) + '">✕</button></span></div>' +
        '<div style="display:flex;gap:6px;margin-top:10px"><button class="mt-bt" data-mt="nada">👤 ' + t(T('Atribuir pessoas', 'Asignar personas')) + '</button><button class="mt-bt" disabled>' + t(T('Atribuir parceiro', 'Asignar socio')) + '</button></div>' +
        '<div class="mt-abas">' + [['resumo', T('Summary', 'Resumen')], ['pessoas', T('Pessoas', 'Personas')], ['parceiros', T('Parceiros', 'Socios')], ['numeros', T('WhatsApp accounts', 'WhatsApp accounts')], ['pref', T('Preferências', 'Preferencias')]].map(function (a) {
          return '<button class="' + (META.aba === a[0] ? 'on' : '') + '" data-mt="aba:' + a[0] + '" data-t="mt-aba-' + a[0] + '">' + t(a[1]) + '</button>' }).join('') + '</div>';
      if (META.aba === 'numeros') h += '<table class="mt-tab" data-t="mt-numeros"><tr><th>' + t(T('Número de telefone', 'Número de teléfono')) + '</th><th>' + t(T('Nome de exibição', 'Nombre visible')) + '</th><th>' + t(T('Status', 'Estado')) + '</th><th>' + t(T('Classificação de qualidade', 'Calificación de calidad')) + '</th></tr>' +
        '<tr><td>+55 11 98765-4321<small>🇧🇷 ' + t(T('Brasil', 'Brasil')) + '</small></td><td>Lojinha da Marina</td><td><span class="mt-selo">' + t(T('Offline', 'Sin conexión')) + '</span></td><td></td></tr></table>';
      else if (META.aba === 'resumo') h += '<div data-t="mt-resumo"><div class="mt-campo"><b>' + t(T('Informações da empresa', 'Información del negocio')) + '</b></div>' +
        campo(T('Endereço', 'Dirección'), T('Sem endereço', 'Sin dirección')) + campo(T('Moeda', 'Moneda'), T('Nenhuma moeda encontrada', 'No se encontró ninguna moneda')) +
        campo(T('Nome comercial', 'Nombre comercial'), T('Lojinha da Marina', 'Lojinha da Marina')) + campo(T('Verificação da empresa', 'Verificación del negocio'), T('Não verificado', 'No verificado')) +
        '<div class="mt-campo"><b>' + t(T('Status da conta', 'Estado de la cuenta')) + '</b><span class="mt-ok">● ' + t(T('Aprovada', 'Aprobada')) + '</span></div>' +
        campo(T('Payment method', 'Payment method'), T('Nenhuma forma de pagamento encontrada', 'No se encontró ningún método de pago')) + '</div>';
      else h += '<p class="mt-tipo">' + t(T('Esta aba fica para outra aula.', 'Esta pestaña queda para otra clase.')) + '</p>';
      if (META.pop) h += '<div class="mt-pop" data-t="mt-pop"><button data-mt="nada">' + t(T('Atribuir pessoas', 'Asignar personas')) + '</button><button data-mt="nada">' + t(T('Configurações de pagamento ↗', 'Configuración de pago ↗')) + '</button><button data-mt="nada">Contact support ↗</button><hr/><button data-mt="nada" data-t="mt-pop-remover">' + t(T('Remover do portfólio empresarial', 'Eliminar del portfolio comercial')) + '</button></div>';
      return h + '</div></div>';
    }
  };
  function campo(a, b) { return '<div class="mt-campo"><b>' + t(a) + '</b><span>' + t(b) + '</span></div>' }

  META.render = function () {
    if (!META.el) return;
    var f = PAGS[META.pag] || PAGS.carregando;
    META.el.innerHTML = '<div class="mt" data-t="mt"><div class="mt-cab"><h3>' + t(T('Configurações', 'Configuración')) + '</h3>' +
      '<span class="mt-port"><span class="mt-l">L</span><span><b>Lojinha da Marina</b><small>' + t(T('Portfólio empresarial', 'Portfolio comercial')) + '</small></span></span>' +
      '<span class="mt-tarefas">' + t(T('Tarefas', 'Tareas pendientes')) + '</span><span class="mt-av">M</span></div><div class="mt-corpo">' + menu() + '<div class="mt-cont">' + f() + '</div></div></div>';
  };
  META.por = function (o) { META.pag = 'carregando'; META.sel = false; META.aba = 'numeros'; META.pop = false; for (var k in (o || {})) META[k] = o[k]; META.render() };
  META.montar = function (el) { META.el = el; META.por() };

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-mt]'); if (!b || !META.el || !META.el.contains(b)) return;
    var a = b.getAttribute('data-mt');
    if (a.indexOf('pag:') === 0) {
      var p = a.slice(4);
      if (!PAGS[p]) return N.aviso(T('Neste treino, só Contas do WhatsApp e Contas de mensagens abrem.', 'En esta práctica solo abren Cuentas de WhatsApp y Cuentas de mensajes.'));
      META.pag = p; META.sel = false; META.pop = false; return META.render();
    }
    if (a === 'sel') { META.sel = true; META.aba = 'resumo'; META.pop = false; return META.render() }
    if (a === 'fecha') { META.sel = false; META.pop = false; return META.render() }
    if (a.indexOf('aba:') === 0) { META.aba = a.slice(4); META.pop = false; return META.render() }
    if (a === 'pop') { META.pop = !META.pop; return META.render() }
    if (a === 'nada') { META.pop = false; META.render(); return N.aviso(T('Neste treino nada é alterado na conta.', 'En esta práctica no se cambia nada en la cuenta.')) }
  });
})();
