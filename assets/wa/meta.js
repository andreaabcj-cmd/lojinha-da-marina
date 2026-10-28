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

  /* Gerenciador do WhatsApp (aula 14). Tela real vista em 28/10/2026, em PT, no portfólio de aula (só olhando):
     menu Visão geral · Campanhas de mensagens ↗ · Ferramentas da conta (Números de telefone, Registro de atividades) · Configurações de pagamento;
     Visão geral = Alertas (1 + "Ver mais (2)"), Níveis de mensagens, Contas de mensagens (Insights deste mês), Recursos.
     Números de telefone = tabela (Número, Nome, Status "Offline", Classificação de qualidade vazia) e ⚙ abre o Perfil do número.
     Número e identificação aqui são fictícios. Telas em espanhol não vistas: tradução nossa (a conferir). */
  var WMENU = [['visao', T('Visão geral', 'Resumen')], ['campanhas', T('Campanhas de mensagens ↗', 'Campañas de mensajes ↗')],
    ['g', T('Ferramentas da conta', 'Herramientas de la cuenta')], ['numeros', T('Números de telefone', 'Números de teléfono')], ['registro', T('Registro de atividades', 'Registro de actividad')],
    ['g', T('Configurações de pagamento', 'Configuración de pago')], ['pagamento', T('Índia', 'India')]];
  var WTIT = { visao: T('Visão geral', 'Resumen'), numeros: T('Telefones', 'Teléfonos'), perfil: T('Telefones', 'Teléfonos'), registro: T('Registro de atividades', 'Registro de actividad'), pagamento: T('Configurações de pagamento', 'Configuración de pago') };
  var NUM = '+55 11 98765-4321';
  function alerta(dt, ico, tit, txt, bt) { return '<div class="wam-alerta" data-t="' + dt + '"><b>' + ico + ' ' + t(tit) + '</b><p>' + t(txt) + '</p>' + (bt ? '<button class="mt-bt" data-mt="nada">' + t(bt) + '</button>' : '') + '</div>' }
  function bloco(tit, n) { return '<div class="wam-num"><small>' + t(tit) + '</small><b>' + n + '</b></div>' }
  var WPAGS = {
    visao: function () {
      var h = '<div class="wam-sec"><h4>' + t(T('Alertas', 'Alertas')) + '</h4>' +
        alerta('wam-alerta-pag', '⚠️', T('Nenhuma forma de pagamento válida', 'No hay ningún método de pago válido'), T('Conversas do período gratuito só podem ser iniciadas por seus clientes. Você só poderá enviar mensagens aos clientes após adicionar uma forma de pagamento ou atualizar a existente.', 'Las conversaciones del período gratuito solo pueden iniciarlas tus clientes. Solo podrás enviar mensajes a los clientes después de agregar un método de pago o actualizar el existente.'), T('Adicionar forma de pagamento', 'Agregar método de pago'));
      if (META.mais) h += alerta('wam-alerta-anuncio', 'ⓘ', T('Aproveite as mensagens gratuitas ao criar anúncios no WhatsApp', 'Aprovecha los mensajes gratuitos al crear anuncios en WhatsApp'), T('Conecte-se com clientes instantaneamente e aproveite as mensagens gratuitas pelas primeiras 24 horas ao usar anúncios que iniciam conversas no WhatsApp.', 'Conéctate con clientes al instante y aprovecha los mensajes gratuitos durante las primeras 24 horas al usar anuncios que inician conversaciones en WhatsApp.'), T('Criar anúncios', 'Crear anuncios')) +
        alerta('wam-alerta-mkt', '☆', T('Você pode entregar até 9% de mensagens de marketing a mais em comparação com a API na Nuvem', 'Puedes entregar hasta un 9% más de mensajes de marketing en comparación con la API de la nube'), T('Ao enviar mensagens por meio da API de Mensagens de Marketing para o WhatsApp, você pode melhorar a experiência do cliente e entregar a mensagem certa para mais pessoas certas.', 'Al enviar mensajes con la API de mensajes de marketing para WhatsApp, puedes mejorar la experiencia del cliente y entregar el mensaje correcto a más personas indicadas.'), T('Configurar a API de Mensagens de Marketing para o WhatsApp', 'Configurar la API de mensajes de marketing para WhatsApp'));
      h += '<button class="wam-mais" data-mt="mais" data-t="wam-vermais">' + (META.mais ? '⌃ ' + t(T('Ver menos', 'Ver menos')) : '⌄ ' + t(T('Ver mais (2)', 'Ver más (2)'))) + '</button></div>';
      h += '<div class="wam-duas"><div class="wam-sec" data-t="wam-niveis"><h4>' + t(T('Níveis de mensagens', 'Niveles de mensajes')) + ' ⓘ</h4><p class="mt-tipo">' + t(T('Mercado: Brasil · Categoria: Autenticação', 'Mercado: Brasil · Categoría: Autenticación')) + '</p>' +
        '<div class="wam-nums">' + bloco(T('Mensagens enviadas', 'Mensajes enviados'), '0') + bloco(T('Economia total', 'Ahorro total'), '0%') + bloco(T('Descontos do nível atual', 'Descuentos del nivel actual'), '0%') + '</div>' +
        '<p class="mt-tipo">0/500.000 ' + t(T('mensagens enviadas', 'mensajes enviados')) + '</p></div>' +
        '<div class="wam-sec"><h4>' + t(T('Recursos', 'Recursos')) + '</h4><p><b>' + t(T('Documentação para desenvolvedores', 'Documentación para desarrolladores')) + '</b><br><span class="mt-tipo">' + t(T('Saiba como se desenvolver mais usando a API do WhatsApp Business.', 'Aprende a desarrollar más con la API de WhatsApp Business.')) + '</span></p>' +
        '<p><b>' + t(T('Status da Plataforma do WhatsApp Business', 'Estado de la Plataforma de WhatsApp Business')) + '</b></p><p><b>' + t(T('Entre em contato com o suporte', 'Comunícate con el soporte')) + '</b></p></div></div>';
      h += '<div class="wam-sec" data-t="wam-contas"><h4>' + t(T('Contas de mensagens', 'Cuentas de mensajes')) + '</h4><b>Lojinha da Marina</b><p class="mt-tipo">' + t(T('Insights deste mês', 'Estadísticas de este mes')) + '</p>' +
        '<div class="wam-nums">' + bloco(T('Todas as entregas de mensagens', 'Todas las entregas de mensajes'), '0') + bloco(T('Entregas de mensagens de atendimento ao cliente gratuitas', 'Entregas gratuitas de mensajes de atención al cliente'), '0') + bloco(T('Cobranças aproximadas', 'Cargos aproximados'), '$0,00') + '</div>' +
        '<p class="mt-tipo">Lojinha da Marina · ' + NUM + ' · 0 ' + t(T('mensagens enviadas', 'mensajes enviados')) + '</p></div>';
      return h;
    },
    numeros: function () {
      return '<div class="mt-titulo"><span class="mt-busca" style="margin-left:0;flex:1">🔍 ' + t(T('Pesquisar por número de telefone ou nome', 'Buscar por número de teléfono o nombre')) + '</span><button class="mt-bt" data-mt="nada">' + t(T('Filtrar por país', 'Filtrar por país')) + ' ▾</button><button class="mt-bt" data-mt="nada">' + t(T('Filtrar por status', 'Filtrar por estado')) + ' ▾</button><button class="mt-btazul" disabled style="opacity:.45;cursor:default">' + t(T('Adicionar telefone', 'Agregar teléfono')) + '</button></div>' +
        '<table class="mt-tab" data-t="wam-tabela"><tr><th>' + t(T('Número de telefone', 'Número de teléfono')) + '</th><th>' + t(T('Nome', 'Nombre')) + '</th><th>' + t(T('Status', 'Estado')) + '</th><th>' + t(T('Classificação de qualidade', 'Calificación de calidad')) + '</th><th></th></tr>' +
        '<tr><td>' + NUM + '<small>🇧🇷 Brasil</small></td><td>Lojinha da Marina</td><td data-t="wam-status"><span class="mt-selo">Offline</span></td><td data-t="wam-qualidade"></td><td><button class="mt-bt" data-mt="wpag:perfil" data-t="wam-engrenagem" aria-label="' + t(T('Configurações do número', 'Configuración del número')) + '">⚙</button></td></tr></table>';
    },
    perfil: function () {
      return '<div class="mt-det" data-t="wam-perfil"><div class="mt-det-topo"><span class="mt-l">🏪</span><div><b>🇧🇷 ' + NUM + '</b><small>Lojinha da Marina</small><small>' + t(T('Identificação do número de telefone', 'Identificador del número de teléfono')) + ': 100000000000002</small></div><span class="acoes"><button class="mt-bt" data-mt="wpag:numeros" aria-label="' + t(T('Fechar', 'Cerrar')) + '">✕</button></span></div>' +
        '<div class="mt-abas"><button class="on">' + t(T('Perfil', 'Perfil')) + '</button></div>' +
        '<div class="mt-campo"><b>' + t(T('Nome de exibição', 'Nombre visible')) + '</b><span>Lojinha da Marina</span></div>' +
        '<div class="mt-campo"><b>' + t(T('Nome de usuário', 'Nombre de usuario')) + '</b><span>@lojinhadamarina · ' + t(T('Reservado', 'Reservado')) + '</span></div>' +
        '<div class="mt-campo"><b>' + t(T('Conta comercial oficial', 'Cuenta comercial oficial')) + '</b><span>' + t(T('Uma conta comercial oficial tem uma marca de seleção azul ao lado do nome.', 'Una cuenta comercial oficial tiene una insignia azul junto al nombre.')) + '</span></div>' +
        '<div class="mt-campo"><b>' + t(T('Categoria · Descrição · Endereço · Email · Site', 'Categoría · Descripción · Dirección · Email · Sitio web')) + '</b><span>' + t(T('Os mesmos dados do perfil comercial do app.', 'Los mismos datos del perfil comercial de la app.')) + '</span></div>' +
        '<div class="mt-campo"><b>' + t(T('Contas de rede social', 'Cuentas de redes sociales')) + '</b><span>Facebook: ' + t(T('Conectar uma Página', 'Conectar una página')) + ' · Instagram: ' + t(T('1 conta conectada', '1 cuenta conectada')) + '</span></div></div>';
    },
    registro: function () {
      return '<table class="mt-tab" data-t="wam-registro"><tr><th>' + t(T('Horário (Etc/UTC)', 'Hora (Etc/UTC)')) + '</th><th>' + t(T('Usuário', 'Usuario')) + '</th><th>' + t(T('Categoria', 'Categoría')) + '</th><th>' + t(T('Atividade', 'Actividad')) + '</th></tr>' +
        '<tr><td>10:50 · 13/10</td><td>' + t(T('Sistema da Meta', 'Sistema de Meta')) + '</td><td>' + t(T('Perfil comercial', 'Perfil comercial')) + '</td><td>' + t(T('Perfil comercial atualizado para', 'Perfil comercial actualizado para')) + ' ' + NUM + '</td></tr></table>';
    },
    pagamento: function () { return '<div class="mt-vazio"><div class="ilu">🔭</div><b>' + t(T('Você não pode acessar as configurações de pagamento no momento', 'No puedes acceder a la configuración de pago en este momento')) + '</b></div>' }
  };
  function wamRender() {
    var p = META.pag in WPAGS ? META.pag : 'visao', sel = p === 'perfil' ? 'numeros' : p;
    var menu = '<nav class="mt-menu" data-t="wam-menu">' + WMENU.map(function (m) {
      if (m[0] === 'g') return '<div class="g"><span>' + t(m[1]) + '</span><span>⌃</span></div>';
      var solo = m[0] === 'visao' || m[0] === 'campanhas';
      return '<button class="' + (solo ? 'solo ' : '') + (sel === m[0] ? 'on' : '') + '" data-mt="wpag:' + m[0] + '" data-t="wam-menu-' + m[0] + '">' + (m[0] === 'visao' ? IC.info : m[0] === 'campanhas' ? IC.dados : '') + t(m[1]) + '</button>';
    }).join('') + '</nav>';
    META.el.innerHTML = '<div class="mt" data-t="mt"><div class="mt-cab"><h3>' + t(T('Gerenciador do WhatsApp', 'Administrador de WhatsApp')) + ' › ' + t(WTIT[p]) + '</h3>' +
      '<span class="mt-port" style="margin-left:auto"><span class="mt-l">🟢</span><span><b>Lojinha da Marina</b><small>' + t(T('Conta do WhatsApp', 'Cuenta de WhatsApp')) + '</small></span></span><span class="mt-av">M</span></div>' +
      '<div class="mt-corpo">' + menu + '<div class="mt-cont wam-cont">' + WPAGS[p]() + '</div></div></div>';
  }

  META.render = function () {
    if (!META.el) return;
    if (META.app === 'wam') return wamRender();
    var f = PAGS[META.pag] || PAGS.carregando;
    META.el.innerHTML = '<div class="mt" data-t="mt"><div class="mt-cab"><h3>' + t(T('Configurações', 'Configuración')) + '</h3>' +
      '<span class="mt-port"><span class="mt-l">L</span><span><b>Lojinha da Marina</b><small>' + t(T('Portfólio empresarial', 'Portfolio comercial')) + '</small></span></span>' +
      '<span class="mt-tarefas">' + t(T('Tarefas', 'Tareas pendientes')) + '</span><span class="mt-av">M</span></div><div class="mt-corpo">' + menu() + '<div class="mt-cont">' + f() + '</div></div></div>';
  };
  META.por = function (o) { META.app = ''; META.mais = false; META.pag = 'carregando'; META.sel = false; META.aba = 'numeros'; META.pop = false; for (var k in (o || {})) META[k] = o[k]; META.render() };
  META.montar = function (el) { META.el = el; META.por() };

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-mt]'); if (!b || !META.el || !META.el.contains(b)) return;
    var a = b.getAttribute('data-mt');
    if (a.indexOf('wpag:') === 0) {
      var w = a.slice(5);
      if (w === 'campanhas') return N.aviso(T('Campanhas de mensagens abre em outra janela. Fica de fora deste treino.', 'Campañas de mensajes se abre en otra ventana. Queda fuera de esta práctica.'));
      META.pag = w; return META.render();
    }
    if (a === 'mais') { META.mais = !META.mais; return META.render() }
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
