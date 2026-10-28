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
  var WMENU_API = [['visao', T('Visão geral', 'Resumen')], ['campanhas', T('Campanhas de mensagens ↗', 'Campañas de mensajes ↗')],
    ['g', T('Modelos de mensagens', 'Plantillas de mensajes')], ['fora', T('Gerenciar modelos', 'Administrar plantillas')], ['fora', T('Biblioteca de modelos', 'Biblioteca de plantillas')],
    ['solo', T('Insights', 'Estadísticas')],
    ['g', T('Ferramentas da conta', 'Herramientas de la cuenta')], ['fora', T('Limites de mensagens', 'Límites de mensajes')], ['fora', T('Flows', 'Flows')], ['numeros', T('Números de telefone', 'Números de teléfono')], ['registro', T('Registro de atividades', 'Registro de actividad')],
    ['g', T('Configurações de pagamento', 'Configuración de pago')], ['pagamento', T('Índia', 'India')]];
  var TESTE = '+1 555-010-0199';   // número de teste fictício (o real da conta de aula fica fora do repositório)
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
      if (META.conta === 'api') return h + '<div class="wam-sec" data-t="wam-contas"><h4>' + t(T('Contas de mensagens', 'Cuentas de mensajes')) + '</h4><b>Test Messaging Account</b><p class="mt-tipo">' + t(T('1 conta do WhatsApp está vinculada', '1 cuenta de WhatsApp está vinculada')) + '</p>' +
        '<p>Test Number · ' + TESTE + '<br><span class="mt-tipo">0 ' + t(T('mensagens enviadas', 'mensajes enviados')) + ' · ' + t(T('0 de 5 destinatários adicionados', '0 de 5 destinatarios agregados')) + '</span></p></div>' +
        '<div class="wam-sec" data-t="wam-status-empresa"><h4>' + t(T('Status da empresa', 'Estado de la empresa')) + '</h4><div class="wam-nums">' + bloco(T('Conversas iniciadas pela empresa', 'Conversaciones iniciadas por la empresa'), '0 / 250') + '<div class="wam-num" data-t="wam-limite-numeros"><small>' + t(T('Números de telefone', 'Números de teléfono')) + '</small><b>' + t(T('1 de 2 adicionados', '1 de 2 agregados')) + '</b></div></div>' +
        '<p class="mt-tipo">' + t(T('Como desbloquear seus limites: verifique sua empresa ou envie mensagens de alta qualidade.', 'Cómo desbloquear tus límites: verifica tu empresa o envía mensajes de alta calidad.')) + '</p></div>';
      h += '<div class="wam-sec" data-t="wam-contas"><h4>' + t(T('Contas de mensagens', 'Cuentas de mensajes')) + '</h4><b>Lojinha da Marina</b><p class="mt-tipo">' + t(T('Insights deste mês', 'Estadísticas de este mes')) + '</p>' +
        '<div class="wam-nums">' + bloco(T('Todas as entregas de mensagens', 'Todas las entregas de mensajes'), '0') + bloco(T('Entregas de mensagens de atendimento ao cliente gratuitas', 'Entregas gratuitas de mensajes de atención al cliente'), '0') + bloco(T('Cobranças aproximadas', 'Cargos aproximados'), '$0,00') + '</div>' +
        '<p class="mt-tipo">Lojinha da Marina · ' + NUM + ' · 0 ' + t(T('mensagens enviadas', 'mensajes enviados')) + '</p></div>';
      return h;
    },
    numeros: function () {
      if (META.conta === 'api') return '<div class="wam-alerta">☆ ' + t(T('Os limites de mensagens agora estão definidos para sua conta comercial geral', 'Los límites de mensajes ahora se definen para tu cuenta comercial general')) + '</div>' +
        '<div class="mt-titulo"><span class="mt-busca" style="margin-left:0;flex:1">🔍 ' + t(T('Pesquisar por número de telefone ou nome', 'Buscar por número de teléfono o nombre')) + '</span><button class="mt-btazul" disabled style="opacity:.45;cursor:default" data-t="wam-add-tel">' + t(T('Adicionar telefone', 'Agregar teléfono')) + '</button></div>' +
        '<p class="mt-tipo">' + t(T('1 conta do WhatsApp está vinculada', '1 cuenta de WhatsApp está vinculada')) + '</p>' +
        '<table class="mt-tab" data-t="wam-tabela"><tr><th>' + t(T('Número de telefone', 'Número de teléfono')) + '</th><th>' + t(T('Nome', 'Nombre')) + '</th><th>' + t(T('Status', 'Estado')) + '</th><th>' + t(T('Classificação de qualidade', 'Calificación de calidad')) + '</th><th></th></tr>' +
        '<tr><td>' + TESTE + '</td><td>Test Number<small>' + t(T('Nome visível para os clientes', 'Nombre visible para los clientes')) + '</small></td><td data-t="wam-status"><span class="mt-selo">' + t(T('Pendente', 'Pendiente')) + '</span></td><td></td>' +
        '<td style="white-space:nowrap"><button class="mt-bt" data-mt="wlixo" data-t="wam-lixeira" aria-label="' + t(T('Excluir', 'Eliminar')) + '">🗑</button> <button class="mt-bt" data-mt="nada">⚙</button></td></tr></table>' +
        (META.dica ? '<p class="wam-dica" data-t="wam-dica-teste">' + t(T('O telefone de teste não pode ser excluído', 'El teléfono de prueba no se puede eliminar')) + '</p>' : '');
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
    var menu = '<nav class="mt-menu" data-t="wam-menu">' + (META.conta === 'api' ? WMENU_API : WMENU).map(function (m) {
      if (m[0] === 'g') return '<div class="g"><span>' + t(m[1]) + '</span><span>⌃</span></div>';
      if (m[0] === 'solo' || m[0] === 'fora') return '<button class="' + (m[0] === 'solo' ? 'solo' : '') + '" data-mt="nada">' + t(m[1]) + '</button>';
      var solo = m[0] === 'visao' || m[0] === 'campanhas';
      return '<button class="' + (solo ? 'solo ' : '') + (sel === m[0] ? 'on' : '') + '" data-mt="wpag:' + m[0] + '" data-t="wam-menu-' + m[0] + '">' + (m[0] === 'visao' ? IC.info : m[0] === 'campanhas' ? IC.dados : '') + t(m[1]) + '</button>';
    }).join('') + '</nav>';
    META.el.innerHTML = '<div class="mt" data-t="mt"><div class="mt-cab"><h3>' + t(T('Gerenciador do WhatsApp', 'Administrador de WhatsApp')) + ' › ' + t(WTIT[p]) + '</h3>' +
      '<button class="mt-port" style="margin-left:auto;cursor:pointer;font:inherit;text-align:left" data-mt="wconta" data-t="wam-conta"><span class="mt-l">🟢</span><span><b>' + (META.conta === 'api' ? 'Test Messaging Account' : 'Lojinha da Marina') + '</b><small>' + t(T('Conta do WhatsApp', 'Cuenta de WhatsApp')) + ' ▾</small></span></button><span class="mt-av">M</span>' +
      (META.contaPop ? '<div class="mt-pop" style="top:52px" data-t="wam-contas-lista"><button data-mt="wconta:app" data-t="wam-conta-app">Lojinha da Marina</button><button data-mt="wconta:api" data-t="wam-conta-api">Test Messaging Account</button></div>' : '') + '</div>' +
      '<div class="mt-corpo">' + menu + '<div class="mt-cont wam-cont">' + WPAGS[p]() + '</div></div></div>';
  }

  /* Meta for Developers › app (aulas 15 e 16). Telas reais vistas em 28/10/2026 no app de aula (criado com o OK do responsável):
     Criar um app (Detalhes do app · Casos de uso · Empresa · Requisitos · Visão geral), Casos de uso › Conectar no WhatsApp
     (Etapa 1. Experimente, Etapa 2. Configuração de produção, janela "Create your WhatsApp profile" só no passo Detalhes, Provedor de Tecnologia).
     O número de teste e os identificadores aqui são fictícios. O que vem depois de "Detalhes" na janela do número não foi visto (a conferir). */
  function dCard(dt, tit, txt, extra) { return '<div class="dev-card"' + (dt ? ' data-t="' + dt + '"' : '') + '>' + (tit ? '<h4>' + t(tit) + '</h4>' : '') + (txt ? '<p>' + t(txt) + '</p>' : '') + (extra || '') + '</div>' }
  var DPASSOS = [T('Detalhes do app', 'Detalles de la app'), T('Casos de uso', 'Casos de uso'), T('Empresa', 'Empresa'), T('Requisitos', 'Requisitos'), T('Visão geral', 'Resumen')];
  var DEV = {
    apps: function () {
      return dCard('dev-apps', T('Apps', 'Apps'), T('Nenhum app por enquanto. Para começar, crie seu primeiro aplicativo.', 'Todavía no hay apps. Para empezar, crea tu primera app.'), '<button class="mt-btazul" data-mt="dpag:criar" data-t="dev-criar">' + t(T('Criar aplicativo', 'Crear app')) + '</button>');
    },
    criar: function () {
      var n = META.passo || 1, cab = '<ol class="dev-passos">' + DPASSOS.map(function (p, i) { return '<li class="' + (i + 1 === n ? 'on' : i + 1 < n ? 'ok' : '') + '">' + (i + 1 < n ? '✔ ' : '') + t(p) + '</li>' }).join('') + '</ol>', c = '', pode = true;
      if (n === 1) c = '<label class="dev-campo"><b>' + t(T('Nome do app', 'Nombre de la app')) + '</b><small>' + t(T('É o nome do app que aparecerá na página "Meus apps". Você pode mudar esse nome depois nas Configurações.', 'Es el nombre de la app que aparecerá en "Mis apps". Puedes cambiarlo después en Configuración.')) + '</small><span class="dev-in">Lojinha da Marina</span></label>' +
        '<label class="dev-campo"><b>' + t(T('Email de contato do app', 'Correo de contacto de la app')) + '</b><small>' + t(T('É o endereço de email que usaremos para entrar em contato com você sobre seu app.', 'Es la dirección que usaremos para contactarte sobre tu app.')) + '</small><span class="dev-in">contato@lojinha.exemplo</span></label>';
      else if (n === 2) { c = '<p><b>' + t(T('Adicionar casos de uso', 'Agregar casos de uso')) + '</b></p><button class="dev-uc' + (META.caso ? ' on' : '') + '" data-mt="dcaso" data-t="dev-caso-wa"><b>' + t(T('Conectar-se com clientes pelo WhatsApp', 'Conectarse con clientes por WhatsApp')) + '</b><small>' + t(T('Comece uma conversa no WhatsApp, envie notificações, crie anúncios de clique para o WhatsApp e forneça suporte. É necessário um portfólio empresarial.', 'Inicia una conversación en WhatsApp, envía notificaciones, crea anuncios de clic a WhatsApp y brinda soporte. Se necesita un portfolio comercial.')) + '</small></button>'; pode = !!META.caso }
      else if (n === 3) { c = '<p><b>' + t(T('A qual portfólio empresarial você quer conectar o app?', '¿A qué portfolio comercial quieres conectar la app?')) + '</b></p>' +
        '<label class="dev-radio' + (META.sem2fa ? ' off' : '') + '" data-t="dev-portfolio"><input type="radio" data-mt="dport"' + (META.port ? ' checked' : '') + (META.sem2fa ? ' disabled' : '') + '/> <span class="mt-l">L</span> Lojinha da Marina</label>' +
        (META.sem2fa ? '<p class="wam-dica" data-t="dev-dica-2fa">' + t(T('Configurar a autenticação de dois fatores para sua conta antes de conectar este portfólio empresarial.', 'Configura la autenticación en dos pasos en tu cuenta antes de conectar este portfolio comercial.')) + '</p>' : ''); pode = !!META.port }
      else if (n === 4) c = '<p><b>' + t(T('Requisitos de publicação', 'Requisitos de publicación')) + '</b></p><p class="mt-tipo">' + t(T('Nenhum requisito identificado. Isso pode mudar se você adicionar mais conteúdo a esse app.', 'No se identificaron requisitos. Esto puede cambiar si agregas más contenido a esta app.')) + '</p>';
      else c = '<div data-t="dev-resumo"><p><b>' + t(T('Visão geral', 'Resumen')) + '</b></p><p>Lojinha da Marina · ' + t(T('Conectar-se com clientes pelo WhatsApp', 'Conectarse con clientes por WhatsApp')) + ' · ' + t(T('Empresa não verificada', 'Empresa no verificada')) + '</p></div><p class="mt-tipo">' + t(T('Ao continuar, você aceita os Termos da Plataforma da Meta e as Políticas do Desenvolvedor.', 'Al continuar, aceptas las Condiciones de la plataforma de Meta y las Políticas para desarrolladores.')) + '</p>';
      return '<div class="dev-card">' + cab + c + '<div class="dev-rod">' + (n > 1 ? '<button class="mt-bt" data-mt="dvolta">' + t(T('Voltar', 'Atrás')) + '</button>' : '') +
        (n < 5 ? '<button class="mt-btazul" data-mt="dvai" data-t="dev-avancar"' + (pode ? '' : ' disabled style="opacity:.45"') + '>' + t(T('Avançar', 'Siguiente')) + '</button>' : '<button class="mt-btazul" data-mt="dcria" data-t="dev-criar-app">' + t(T('Criar aplicativo', 'Crear app')) + '</button>') + '</div></div>';
    },
    uc: function () {
      if (!META.aceito) return dCard('dev-plataforma', T('Plataforma do WhatsApp Business', 'Plataforma de WhatsApp Business'), null,
        '<p>' + t(T('Selecionar um portfólio empresarial: Lojinha da Marina', 'Seleccionar un portfolio comercial: Lojinha da Marina')) + '</p><p>📞 ' + t(T('Você receberá um número de telefone de teste do WhatsApp para enviar mensagens para no máximo 5 telefones.', 'Recibirás un número de teléfono de prueba de WhatsApp para enviar mensajes a 5 teléfonos como máximo.')) + '</p>' +
        '<p class="mt-tipo">' + t(T('Ao continuar, você aceita os Termos da Meta para a Plataforma do WhatsApp Business e os Termos da API em Nuvem.', 'Al continuar, aceptas las Condiciones de Meta para la Plataforma de WhatsApp Business y las de la API de la nube.')) + '</p><div class="dev-rod"><button class="mt-btazul" data-mt="daceita" data-t="dev-continuar-termos">' + t(T('Continuar', 'Continuar')) + '</button></div>');
      return DEV.etapa1();
    },
    etapa1: function () {
      return dCard('dev-etapa1', T('Etapa 1. Experimente', 'Paso 1. Pruébalo'), T('5 min • Envie uma mensagem do seu número de teste para entender como a API do WhatsApp funciona.', '5 min • Envía un mensaje desde tu número de prueba para entender cómo funciona la API de WhatsApp.'),
        '<p data-t="dev-teste-ok">✅ <b>' + t(T('Reivindicar um número de teste do WhatsApp', 'Reclamar un número de prueba de WhatsApp')) + '</b> · ' + t(T('Concluído', 'Completado')) + '</p>' +
        '<div class="dev-envio" data-t="dev-envio"><p><b>' + t(T('Envie uma mensagem do seu número de teste', 'Envía un mensaje desde tu número de prueba')) + '</b></p><p class="mt-tipo">' + t(T('Seu número de teste', 'Tu número de prueba')) + ': ' + TESTE + ' · ' + t(T('Destinatário', 'Destinatario')) + ': — · ' + t(T('Mensagem', 'Mensaje')) + ': ' + t(T('Confirmação de pedido', 'Confirmación de pedido')) + '</p>' +
        '<pre class="dev-cod" data-t="dev-curl">curl -i -X POST https://graph.facebook.com/v25.0/&lt;ID-DO-NÚMERO&gt;/messages \\\n  -H "Authorization: Bearer &lt;TOKEN&gt;" \\\n  -d \'{ "messaging_product": "whatsapp", "type": "template", ... }\'</pre></div>' +
        '<p class="mt-tipo">' + t(T('A seguir: Etapa 2. Configuração da produção', 'A continuación: Paso 2. Configuración de producción')) + '</p><div class="dev-rod"><button class="mt-btazul" data-mt="dpag:etapa2" data-t="dev-ir-etapa2">' + t(T('Continuar', 'Continuar')) + '</button></div>');
    },
    etapa2: function () {
      var item = function (dt, ok, tit, txt, extra) { return '<div class="dev-item" data-t="' + dt + '"><b>' + (ok ? '✅ ' : '○ ') + t(tit) + '</b>' + (txt ? '<p class="mt-tipo">' + t(txt) + '</p>' : '') + (extra || '') + '</div>' };
      return dCard('dev-etapa2', T('Etapa 2. Configuração de produção', 'Paso 2. Configuración de producción'), T('Configure uma ou mais contas para entrar em contato com seus clientes pelas APIs do WhatsApp.', 'Configura una o más cuentas para contactar a tus clientes con las API de WhatsApp.'),
        item('dev-webhooks', false, T('Configurar webhooks', 'Configurar webhooks'), T('Configure um endpoint do Webhooks para receber notificações sobre mensagens recebidas e atualizações de status (URL de callback e token).', 'Configura un endpoint de Webhooks para recibir notificaciones de mensajes recibidos y cambios de estado (URL de devolución y token).')) +
        item('dev-registrar', true, T('Registre seu número de telefone do WhatsApp', 'Registra tu número de teléfono de WhatsApp'), T('Adicione e verifique seu número de telefone comercial para começar a enviar mensagens em grande escala. Você pode gerenciar seus números quando quiser no WhatsApp Manager.', 'Agrega y verifica tu número comercial para empezar a enviar mensajes a gran escala. Puedes administrar tus números cuando quieras en el Administrador de WhatsApp.'),
          '<button class="mt-bt" data-mt="dnum" data-t="dev-add-numero">' + t(T('Adicionar número de telefone', 'Agregar número de teléfono')) + '</button>') +
        item('dev-pagamento', false, T('Adicione informações de pagamento para enviar mensagens iniciadas pela empresa', 'Agrega información de pago para enviar mensajes iniciados por la empresa')) +
        item('dev-enviar', false, T('Enviar mensagem', 'Enviar mensaje')) +
        '<p class="mt-tipo">' + t(T('Após a conclusão, seu número registrado poderá receber e enviar mensagens. Em seguida: verificação da empresa.', 'Al terminar, tu número registrado podrá recibir y enviar mensajes. Después: verificación de la empresa.')) + '</p>') +
        (META.jan ? '<div class="dev-jan" data-t="dev-jan-perfil"><ol class="dev-passos v"><li class="on">' + t(T('Detalhes', 'Detalles')) + '</li><li>' + t(T('Telefone', 'Teléfono')) + '</li><li>' + t(T('Verificação do telefone', 'Verificación del teléfono')) + '</li><li>' + t(T('Conta de mensagens criada', 'Cuenta de mensajes creada')) + '</li></ol><div><h4>' + t(T('Crie seu perfil do WhatsApp', 'Crea tu perfil de WhatsApp')) + '</h4>' +
          '<p class="mt-tipo">' + t(T('Mudar a imagem do perfil do WhatsApp — Seu perfil do Facebook e do Instagram não mudará.', 'Cambiar la imagen del perfil de WhatsApp — Tu perfil de Facebook e Instagram no cambiará.')) + '</p>' +
          '<label class="dev-campo" data-t="dev-nome-exibicao"><b>' + t(T('Nome de exibição do WhatsApp Business', 'Nombre visible de WhatsApp Business')) + '</b><small>' + t(T('Seu nome de exibição deve ser igual ao nome comercial e cumprir as diretrizes para nomes de exibição do WhatsApp Business.', 'Tu nombre visible debe ser igual al nombre comercial y cumplir las pautas de nombres visibles de WhatsApp Business.')) + '</small><span class="dev-in">Lojinha da Marina</span></label>' +
          '<label class="dev-campo"><b>' + t(T('Categoria', 'Categoría')) + '</b><small>' + t(T('Selecione a categoria que melhor descreve sua empresa.', 'Selecciona la categoría que mejor describe tu empresa.')) + '</small><span class="dev-in">—</span></label>' +
          '<p class="wam-dica">' + t(T('No treino paramos aqui: os passos Telefone e Verificação do telefone não foram vistos na tela real (a conferir).', 'En la práctica paramos aquí: los pasos Teléfono y Verificación del teléfono no se vieron en la pantalla real (por confirmar).')) + '</p>' +
          '<div class="dev-rod"><button class="mt-bt" data-mt="dfecha" data-t="dev-fechar-janela">' + t(T('Fechar', 'Cerrar')) + '</button></div></div></div>' : '');
    },
    provedor: function () {
      return dCard('dev-provedor', T('Integre-se como Provedor de Tecnologia', 'Intégrate como Proveedor de tecnología'), T('Provedores de Tecnologia são desenvolvedores terceirizados que criam soluções de valor agregado na Plataforma do WhatsApp Business. Essas soluções podem ser oferecidas de forma independente ou como parte de uma solução conjunta com um Parceiro de Soluções.', 'Los Proveedores de tecnología son desarrolladores externos que crean soluciones de valor agregado en la Plataforma de WhatsApp Business. Pueden ofrecerse solas o junto con un Socio de soluciones.'),
        '<ul class="wa-lista"><li><b>' + t(T('Envie mensagens em nome dos seus clientes', 'Envía mensajes en nombre de tus clientes')) + '</b> — ' + t(T('Acesse as contas do WhatsApp Business dos clientes e envie mensagens em nome deles.', 'Accede a las cuentas de WhatsApp Business de los clientes y envía mensajes en su nombre.')) + '</li><li><b>' + t(T('Integre clientes do seu site', 'Integra clientes desde tu sitio')) + '</b> — ' + t(T('Hospede um fluxo de cadastro incorporado que permitirá a coleta de informações de clientes.', 'Aloja un flujo de registro integrado para recopilar información de clientes.')) + '</li></ul>');
    }
  };
  function devRender() {
    var p = META.pag in DEV ? META.pag : 'apps', noUc = p === 'uc' || p === 'etapa1' || p === 'etapa2' || p === 'provedor';
    var menu = noUc ? '<nav class="mt-menu" data-t="dev-menu"><div class="g"><span>' + t(T('Configuração básica', 'Configuración básica')) + '</span><span>⌃</span></div>' +
      [['etapa1', T('Etapa 1. Experimente', 'Paso 1. Pruébalo')], ['etapa2', T('Etapa 2. Configuração da produção', 'Paso 2. Configuración de producción')], ['fora', T('Etapa 3. Verificação da empresa', 'Paso 3. Verificación de la empresa')]].map(function (m) {
        return '<button class="' + ((p === m[0] || (p === 'uc' && m[0] === 'etapa1' && META.aceito)) ? 'on' : '') + '" data-mt="' + (m[0] === 'fora' || !META.aceito ? 'nada' : 'dpag:' + m[0]) + '" data-t="dev-menu-' + m[0] + '">' + t(m[1]) + '</button>' }).join('') +
      '<div class="g"><span>' + t(T('Torne-se um parceiro', 'Conviértete en socio')) + '</span><span>⌃</span></div><button class="' + (p === 'provedor' ? 'on' : '') + '" data-mt="dpag:provedor" data-t="dev-menu-provedor">' + t(T('Torne-se um Provedor de Tecnologia', 'Conviértete en Proveedor de tecnología')) + '</button></nav>' :
      '<nav class="mt-menu"><button class="solo on" data-mt="dpag:apps">' + t(T('Meus apps', 'Mis apps')) + '</button></nav>';
    META.el.innerHTML = '<div class="mt dev" data-t="mt"><div class="mt-cab"><span class="dev-logo">∞ Meta</span><h3>' + (noUc ? 'Lojinha da Marina › ' + t(T('Casos de uso › Conectar no WhatsApp', 'Casos de uso › Conectar en WhatsApp')) : t(p === 'criar' ? T('Criar um app', 'Crear una app') : T('Apps', 'Apps'))) + '</h3><span class="mt-av" style="margin-left:auto">M</span></div>' +
      '<div class="mt-corpo">' + menu + '<div class="mt-cont wam-cont">' + DEV[p]() + '</div></div></div>';
  }

  META.render = function () {
    if (!META.el) return;
    if (META.app === 'wam') return wamRender();
    if (META.app === 'dev') return devRender();
    var f = PAGS[META.pag] || PAGS.carregando;
    META.el.innerHTML = '<div class="mt" data-t="mt"><div class="mt-cab"><h3>' + t(T('Configurações', 'Configuración')) + '</h3>' +
      '<span class="mt-port"><span class="mt-l">L</span><span><b>Lojinha da Marina</b><small>' + t(T('Portfólio empresarial', 'Portfolio comercial')) + '</small></span></span>' +
      '<span class="mt-tarefas">' + t(T('Tarefas', 'Tareas pendientes')) + '</span><span class="mt-av">M</span></div><div class="mt-corpo">' + menu() + '<div class="mt-cont">' + f() + '</div></div></div>';
  };
  META.por = function (o) { META.app = ''; META.passo = 1; META.caso = false; META.port = false; META.sem2fa = false; META.aceito = false; META.jan = false; META.conta = 'app'; META.contaPop = false; META.dica = false; META.mais = false; META.pag = 'carregando'; META.sel = false; META.aba = 'numeros'; META.pop = false; for (var k in (o || {})) META[k] = o[k]; META.render() };
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
    if (a === 'wconta') { META.contaPop = !META.contaPop; return META.render() }
    if (a.indexOf('wconta:') === 0) { META.conta = a.slice(7); META.contaPop = false; META.dica = false; if (META.pag === 'perfil') META.pag = 'numeros'; return META.render() }
    if (a === 'wlixo') { META.dica = true; return META.render() }
    if (a.indexOf('dpag:') === 0) { META.pag = a.slice(5); META.jan = false; if (META.pag === 'criar') META.passo = META.passo || 1; return META.render() }
    if (a === 'dcaso') { META.caso = !META.caso; return META.render() }
    if (a === 'dport') { if (!META.sem2fa) META.port = true; return META.render() }
    if (a === 'dvai') { META.passo = Math.min(5, (META.passo || 1) + 1); return META.render() }
    if (a === 'dvolta') { META.passo = Math.max(1, (META.passo || 1) - 1); return META.render() }
    if (a === 'dcria') { META.pag = 'uc'; return META.render() }
    if (a === 'daceita') { META.aceito = true; META.pag = 'etapa1'; return META.render() }
    if (a === 'dnum') { META.jan = true; return META.render() }
    if (a === 'dfecha') { META.jan = false; return META.render() }
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
