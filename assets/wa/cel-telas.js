/* Telas do WhatsApp Business usadas nas aulas 02–14. Textos do app real (Android, português):
   25–26/10/2026 (perfil, catálogo, saudação, ausência, pedido, Turbinar, transmissão, Instagram e Facebook) e
   28/10/2026 (menu ⋮, Dispositivos conectados, Configurações, Conta, duas etapas, e-mail, Plataforma comercial, Mudar número,
   Backup, Transferir conversas, Ajuda e feedback, Central de ajuda, Fale conosco, Nome comercial). Espanhol: tradução nossa. */
(function () {
  var T = N.T, t = N.t, esc = N.esc, P = CEL.pecas, Tl = CEL.telas;
  var S = CEL.estado = CEL.estado || {};
  function topo(tit, volta, dir) {
    return '<div class="wa-topo"><button class="wa-ic" data-cel="' + (volta ? 'ir:' + volta : 'volta') + '" aria-label="' + esc(t(T('Voltar', 'Atrás'))) + '">←</button><b>' + t(tit) + '</b><span class="wa-dir">' + (dir || '') + '</span></div>';
  }
  function linha(ic, tit, sub, acao, alvo) {
    return '<button class="wa-item" data-cel="' + (acao || 'fora') + '"' + (alvo ? ' data-t="' + alvo + '"' : '') + '><i>' + ic + '</i><span><b>' + t(tit) + '</b>' + (sub ? '<small>' + t(sub) + '</small>' : '') + '</span></button>';
  }
  function txt(x, cls) { return '<p class="wa-txtc' + (cls ? ' ' + cls : '') + '">' + t(x) + '</p>' }
  function sec(x) { return '<p class="wa-sec">' + t(x) + '</p>' }
  function bt(x, acao, alvo) { return '<button class="wa-bt" data-cel="' + acao + '"' + (alvo ? ' data-t="' + alvo + '"' : '') + '>' + t(x) + '</button>' }
  function chave(on, acao, alvo) { return '<button class="wa-chave' + (on ? ' on' : '') + '" role="switch" aria-checked="' + !!on + '" data-cel="' + acao + '"' + (alvo ? ' data-t="' + alvo + '"' : '') + '><span></span></button>' }
  CEL.pecas2 = { topo: topo, linha: linha, txt: txt, bt: bt, chave: chave };

  /* menu ⋮ da tela inicial (sobre a lista de conversas) */
  Tl.menu = function () {
    return Tl.conversas() + '<div class="wa-menu" data-t="cel-menu-lista">' + [
      [T('Anúncios', 'Anuncios'), 'ir:anuncio1', 'cel-menu-anuncios'], [T('Novo grupo', 'Nuevo grupo')], [T('Comunidades', 'Comunidades')], [T('Listas', 'Listas'), 'ir:listas', 'cel-menu-listas'],
      [T('Dispositivos conectados', 'Dispositivos vinculados'), 'ir:dispositivos', 'cel-menu-disp'], [T('Favoritas', 'Destacados')], [T('Cobranças', 'Cobros')], [T('Pagamentos', 'Pagos')],
      [T('Configurações', 'Ajustes'), 'ir:config', 'cel-menu-config']].map(function (m) {
        return '<button data-cel="' + (m[1] || 'fora') + '"' + (m[2] ? ' data-t="' + m[2] + '"' : '') + '>' + t(m[0]) + '</button>' }).join('') + '</div><div class="wa-veu" data-cel="ir:conversas"></div>';
  };

  Tl.dispositivos = function () {
    var n = S.disp || 0;
    return topo(T('Dispositivos conectados', 'Dispositivos vinculados')) + '<div class="wa-rolar wa-centro"><div class="wa-ilu">📱 💬 💻</div>' +
      '<p data-t="cel-disp-conta">' + n + t(T(' de 4 dispositivos conectado.', ' de 4 dispositivos vinculados.')) + '</p>' +
      (S.dispNome ? '<div class="wa-item" data-t="cel-disp-item"><i>💻</i><span><b>' + esc(S.dispNome) + '</b><small>' + t(T('Ativo há 16 dias', 'Activo hace 16 días')) + '</small></span></div>' : '') +
      '<button class="wa-bt claro" data-cel="qr" data-t="cel-disp-conectar">' + t(T('Conectar dispositivo', 'Vincular un dispositivo')) + '</button></div>';
  };

  Tl.config = function () {
    return topo(T('Configurações', 'Ajustes'), 'conversas', '🔍') + '<div class="wa-rolar"><div class="wa-cartao"><span class="wa-av">🏪</span><span><b>Lojinha da Marina</b><small>@lojinhadamarina</small></span><span class="wa-dir">▦</span></div>' +
      linha('💠', T('Pagamentos', 'Pagos')) + linha('⭐', T('Assinaturas', 'Suscripciones'), T('Conheça os benefícios premium', 'Conoce los beneficios premium'), 'fora', 'cel-cfg-assinaturas') +
      linha('💻', T('Dispositivos conectados', 'Dispositivos vinculados'), T('Use o WhatsApp em outros dispositivos', 'Usa WhatsApp en otros dispositivos'), 'ir:dispositivos', 'cel-cfg-disp') +
      linha('🔑', T('Conta', 'Cuenta'), T('Notificações de segurança, mudança de número', 'Notificaciones de seguridad, cambio de número'), 'ir:conta', 'cel-cfg-conta') +
      linha('🔒', T('Privacidade', 'Privacidad'), T('Contas bloqueadas, mensagens temporárias', 'Cuentas bloqueadas, mensajes temporales')) +
      linha('🏷️', T('Listas', 'Listas'), T('Gerencie pessoas e grupos', 'Administra personas y grupos')) +
      linha('💬', T('Conversas', 'Chats'), T('Tema, papel de parede, histórico de conversas', 'Tema, fondo de pantalla, historial de chats'), 'ir:cfgconversas', 'cel-cfg-conversas') +
      linha('🎨', T('Aparência', 'Apariencia'), T('Tema da conversa, ícone do app, tema do app', 'Tema del chat, ícono de la app, tema de la app')) +
      linha('🔔', T('Notificações', 'Notificaciones'), T('Mensagens, grupos, ligações', 'Mensajes, grupos, llamadas')) +
      linha('🔗', T('Facebook e Instagram', 'Facebook e Instagram'), T('Conecte para alcançar mais clientes.', 'Conecta para llegar a más clientes.'), 'ir:instafb', 'cel-cfg-instafb') +
      linha('❔', T('Ajuda e feedback', 'Ayuda y comentarios'), T('Central de Ajuda, fale conosco, Política de Privacidade', 'Servicio de ayuda, contáctanos, Política de privacidad'), 'ir:ajuda', 'cel-cfg-ajuda') + '</div>';
  };

  Tl.conta = function () {
    return topo(T('Conta', 'Cuenta'), 'config') + '<div class="wa-rolar">' + sec(T('Login e segurança', 'Inicio de sesión y seguridad')) +
      linha('🔐', T('Chaves de acesso', 'Llaves de acceso')) + linha('✉️', T('Endereço de email', 'Dirección de correo electrónico'), '', 'ir:email', 'cel-conta-email') +
      linha('🔢', T('Verificação em duas etapas', 'Verificación en dos pasos'), '', 'ir:duasetapas', 'cel-conta-2etapas') + linha('🛡️', T('Notificações de segurança', 'Notificaciones de seguridad')) +
      sec(T('Sua conta', 'Tu cuenta')) + linha('@', T('Nome de usuário', 'Nombre de usuario')) +
      linha('🔌', T('Plataforma comercial', 'Plataforma comercial'), '', 'ir:plataforma', 'cel-conta-plataforma') +
      linha('📲', T('Mudar número de telefone', 'Cambiar número de teléfono'), '', 'ir:mudarnum', 'cel-conta-mudar') +
      linha('📄', T('Pedir dados da conta', 'Solicitar información de la cuenta')) + linha('🗑️', T('Apagar conta', 'Eliminar cuenta'), '', 'ir:apagar', 'cel-conta-apagar') + '</div>';
  };
  Tl.duasetapas = function () {
    return topo(T('Verificação em duas etapas', 'Verificación en dos pasos'), 'conta') + '<div class="wa-rolar wa-centro"><div class="wa-ilu">🔢</div>' +
      '<p data-t="cel-2etapas-txt">' + t(T('Para mais segurança, ative a verificação em duas etapas, que solicitará um PIN quando você confirmar seu número de telefone no WhatsApp novamente.', 'Para más seguridad, activa la verificación en dos pasos, que pedirá un PIN cuando vuelvas a confirmar tu número de teléfono en WhatsApp.')) + ' <span class="wa-link">' + t(T('Saiba mais', 'Más información')) + '</span></p></div>' +
      bt(T('ATIVAR', 'ACTIVAR'), 'naotreino', 'cel-2etapas-ativar');
  };
  Tl.email = function () {
    return topo(T('Adicionar e-mail comercial', 'Agregar correo comercial'), 'conta') + '<div class="wa-rolar">' +
      txt(T('Com um email, podemos entrar em contato com você sobre login, suporte ou atualizações da conta. Seu email não será exibido para outras pessoas.', 'Con un correo, podemos contactarte sobre inicio de sesión, soporte o novedades de la cuenta. Tu correo no se mostrará a otras personas.')) +
      '<div class="wa-campo" data-t="cel-email-campo">Email</div></div>' + bt(T('AVANÇAR', 'SIGUIENTE'), 'naotreino');
  };
  Tl.plataforma = function () {
    return topo(T('Plataforma comercial', 'Plataforma comercial'), 'conta') + '<div class="wa-rolar"><div class="wa-ilu">🔌</div><p class="wa-tit2">' + t(T('Conectar à Plataforma comercial', 'Conectarse a la Plataforma comercial')) + '</p>' +
      txt(T('Insira o código de verificação ou escaneie o QR code para se conectar à plataforma comercial', 'Ingresa el código de verificación o escanea el código QR para conectarte a la plataforma comercial')) +
      '<ul class="wa-lista" data-t="cel-plataforma-itens"><li>' + t(T('Você pode continuar a usar o app WhatsApp Business junto com a Plataforma comercial.', 'Puedes seguir usando la app WhatsApp Business junto con la Plataforma comercial.')) + '</li>' +
      '<li>' + t(T('Você poderá compartilhar até seis meses do histórico de conversas. Não é possível compartilhar históricos de grupos.', 'Podrás compartir hasta seis meses del historial de chats. No se pueden compartir historiales de grupos.')) + '</li>' +
      '<li>' + t(T('Para oferecer esse serviço, a partir de agora todas as conversas individuais serão gerenciadas usando um serviço seguro da Meta. Um aviso será exibido nas conversas.', 'Para ofrecer este servicio, desde ahora todos los chats individuales se administrarán con un servicio seguro de Meta. Se mostrará un aviso en los chats.')) + '</li></ul></div>' +
      bt(T('CONECTAR À PLATAFORMA COMERCIAL', 'CONECTARSE A LA PLATAFORMA COMERCIAL'), 'naotreino', 'cel-plataforma-bt');
  };
  /* Apagar conta (tela real, Android, 28/10/2026, só olhada: nada preenchido) */
  Tl.apagar = function () {
    return topo(T('Apagar conta', 'Eliminar cuenta'), 'conta') + '<div class="wa-rolar"><p class="wa-sec forte">' + t(T('Ao apagar esta conta:', 'Al eliminar esta cuenta:')) + '</p><ul class="wa-lista" data-t="cel-apagar-efeitos">' +
      '<li>' + t(T('A conta será apagada do WhatsApp e removida de todos os seus dispositivos.', 'La cuenta se eliminará de WhatsApp y de todos tus dispositivos.')) + '</li>' +
      '<li data-t="cel-apagar-historico"><b>' + t(T('Seu histórico de conversas será apagado', 'Tu historial de chats se eliminará')) + '</b></li>' +
      '<li>' + t(T('Você sairá de todos os seus grupos do WhatsApp.', 'Saldrás de todos tus grupos de WhatsApp.')) + '</li>' +
      '<li>' + t(T('Apagar seu histórico de pagamentos e cancelar pagamentos pendentes', 'Se eliminará tu historial de pagos y se cancelarán los pagos pendientes')) + '</li>' +
      '<li>' + t(T('Os canais criados por você serão apagados.', 'Los canales que creaste se eliminarán.')) + '</li></ul>' +
      '<p class="wa-sec">' + t(T('Prefere mudar o número?', '¿Prefieres cambiar el número?')) + '</p><button class="wa-txt" data-cel="ir:mudarnum">' + t(T('MUDAR NÚMERO DE TELEFONE', 'CAMBIAR NÚMERO DE TELÉFONO')) + '</button>' +
      txt(T('Para apagar sua conta, confirme o código do país e insira seu número de telefone.', 'Para eliminar tu cuenta, confirma el código de país e ingresa tu número de teléfono.')) +
      '<div class="wa-campo">' + t(T('País: Brasil', 'País: Brasil')) + '</div><div class="wa-campo">+55 · ' + t(T('Número de telefone', 'Número de teléfono')) + '</div></div>' +
      bt(T('APAGAR CONTA', 'ELIMINAR CUENTA'), 'naotreino', 'cel-apagar-bt');
  };
  Tl.mudarnum = function () {
    return topo(T('Mudar número', 'Cambiar número'), 'conta') + '<div class="wa-rolar"><div class="wa-ilu">📲</div><ul class="wa-lista" data-t="cel-mudar-avisos">' +
      '<li>' + t(T('Os eventos e as ligações programadas não serão transferidos para seu novo número e serão apagados.', 'Los eventos y las llamadas programadas no se transferirán a tu nuevo número y se eliminarán.')) + '</li>' +
      '<li>' + t(T('Antes de mudar seu número de telefone, confirme se o novo número pode receber SMS ou ligações telefônicas.', 'Antes de cambiar tu número, confirma que el nuevo número puede recibir SMS o llamadas.')) + '</li>' +
      '<li data-t="cel-mudar-antigo"><b>' + t(T('Se você está trocando de dispositivo e número de telefone, primeiro mude seu número no WhatsApp no dispositivo antigo.', 'Si cambias de dispositivo y de número, primero cambia tu número en WhatsApp en el dispositivo anterior.')) + '</b></li></ul>' +
      '<p class="wa-sec forte">' + t(T('Ao mudar seu número de telefone:', 'Al cambiar tu número de teléfono:')) + '</p><ul class="wa-lista" data-t="cel-mudar-efeitos">' +
      '<li>' + t(T('Os dados da sua conta, seus grupos e suas configurações serão transferidos do número anterior para o número novo.', 'Los datos de tu cuenta, tus grupos y tus ajustes pasarán del número anterior al número nuevo.')) + '</li>' +
      '<li>' + t(T('Os pagamentos pendentes serão cancelados.', 'Los pagos pendientes se cancelarán.')) + '</li>' +
      '<li>' + t(T('A plataforma comercial será desconectada.', 'La plataforma comercial se desconectará.')) + '</li></ul></div>' + bt(T('AVANÇAR', 'SIGUIENTE'), 'naotreino');
  };
  Tl.cfgconversas = function () {
    return topo(T('Conversas', 'Chats'), 'config') + '<div class="wa-rolar">' + sec(T('Exibição', 'Pantalla')) + linha('🌓', T('Tema', 'Tema'), T('Automático (sistema)', 'Automático (sistema)')) +
      sec(T('Configurações de conversas', 'Ajustes de chats')) + linha('⏎', T('Enviar com Enter', 'Enviar con Enter'), T('A tecla Enter envia a mensagem', 'La tecla Enter envía el mensaje')) +
      linha('🔠', T('Tamanho da fonte', 'Tamaño de fuente'), T('Média', 'Mediano')) +
      sec(T('Conversas arquivadas', 'Chats archivados')) + linha('🗄️', T('Manter conversas arquivadas', 'Mantener los chats archivados')) +
      '<div data-t="cel-conv-historico">' + linha('☁️', T('Backup de conversas', 'Copia de seguridad'), '', 'ir:backup', 'cel-conv-backup') +
      linha('📤', T('Transferir conversas', 'Transferir chats'), '', 'ir:transferir', 'cel-conv-transferir') + linha('🕘', T('Histórico de conversas', 'Historial de chats')) + '</div></div>';
  };
  Tl.backup = function () {
    return topo(T('Backup de conversas', 'Copia de seguridad'), 'cfgconversas') + '<div class="wa-rolar"><p class="wa-sec forte">' + t(T('Configurações de backup', 'Ajustes de copia de seguridad')) + '</p>' +
      txt(T('Faça backup das suas conversas e mídias na nuvem para não perdê-las ao trocar de celular Android.', 'Haz una copia de seguridad de tus chats y archivos en la nube para no perderlos al cambiar de celular Android.')) +
      '<div data-t="cel-backup-ultimo">' + txt(T('Último backup: nunca', 'Última copia: nunca')) + '</div>' + bt(T('FAZER BACKUP', 'GUARDAR'), 'naotreino', 'cel-backup-fazer') +
      '<div data-t="cel-backup-google">' + linha('👤', T('Conta do Google', 'Cuenta de Google'), T('Nenhuma', 'Ninguna')) + linha('🔁', T('Backup automático', 'Copia automática'), T('Desativado', 'Desactivada')) + '</div>' +
      linha('🔐', T('Backup criptografado de ponta a ponta', 'Copia cifrada de extremo a extremo'), T('Desativado', 'Desactivada')) + '</div>';
  };
  Tl.transferir = function () {
    return topo(T('Transferir histórico de conversas', 'Transferir historial de chats'), 'cfgconversas') + '<div class="wa-rolar wa-centro"><div class="wa-ilu">📱 ➜ 📱</div>' +
      '<p data-t="cel-transferir-txt">' + t(T('Transfira seu histórico de conversas de maneira privada para ter acesso às mensagens mais recentes. É necessário conceder algumas permissões para conectar o dispositivo novo.', 'Transfiere tu historial de chats de forma privada para tener acceso a los mensajes más recientes. Hay que dar algunos permisos para conectar el dispositivo nuevo.')) + '</p></div>' +
      bt(T('INICIAR', 'INICIAR'), 'naotreino', 'cel-transferir-iniciar');
  };
  Tl.ajuda = function () {
    return topo(T('Ajuda e feedback', 'Ayuda y comentarios'), 'config') + '<div class="wa-rolar">' + linha('❔', T('Central de Ajuda', 'Servicio de ayuda'), T('Obtenha ajuda, fale conosco', 'Obtén ayuda, contáctanos'), 'ir:central', 'cel-ajuda-central') +
      linha('🐞', T('Enviar feedback', 'Enviar comentarios'), T('Relatar problemas técnicos', 'Informar problemas técnicos')) + linha('📄', T('Termos de Serviço', 'Términos del servicio')) + linha('ℹ️', T('Dados do app', 'Info. de la app')) + '</div>';
  };
  Tl.central = function () {
    var tops = [T('Primeiros passos', 'Primeros pasos'), T('Conversas', 'Chats'), T('Conectar-se com empresas', 'Conectarse con empresas'), T('Ligações de voz e de vídeo', 'Llamadas de voz y video'), T('Comunidades', 'Comunidades'), T('Canais', 'Canales'), T('Privacidade, proteção e segurança', 'Privacidad, protección y seguridad')];
    return topo(T('Central de ajuda', 'Servicio de ayuda')) + '<div class="wa-rolar"><p class="wa-tit2">' + t(T('Como podemos ajudar?', '¿Cómo podemos ayudarte?')) + '</p><div class="wa-busca">🔍 ' + t(T('Procurar na Central de Ajuda', 'Buscar en el servicio de ayuda')) + '</div>' +
      sec(T('Tópicos de ajuda', 'Temas de ayuda')) + tops.map(function (x) { return linha('›', x) }).join('') +
      linha('›', T('Contas e banimento de contas', 'Cuentas y suspensión de cuentas'), '', 'ir:central2', 'cel-central-contas') + linha('›', T('Pagamentos', 'Pagos')) + '</div>' +
      '<button class="wa-fale" data-cel="ir:faleconosco" data-t="cel-fale">' + t(T('Fale conosco', 'Contáctanos')) + '</button>';
  };
  Tl.central2 = function () {
    var a = [T('Sobre o banimento de contas', 'Sobre la suspensión de cuentas'), T('Sobre o banimento de contas no app WhatsApp Business', 'Sobre la suspensión de cuentas en la app WhatsApp Business'), T('Sobre contestar o banimento de contas na Plataforma do WhatsApp Business', 'Sobre apelar la suspensión de cuentas en la Plataforma de WhatsApp Business'),
      T('Sobre contas temporariamente banidas', 'Sobre cuentas suspendidas temporalmente'), T('O que fazer quando o banimento da conta é cancelado', 'Qué hacer cuando se levanta la suspensión'), T('Sobre o banimento de contas devido ao uso de apps não oficiais', 'Sobre la suspensión por usar apps no oficiales')];
    return topo(T('Banimento de contas', 'Suspensión de cuentas'), 'central') + '<div class="wa-rolar" data-t="cel-banimento-lista">' + a.map(function (x) { return linha('📄', x) }).join('') + '</div>' +
      '<button class="wa-fale" data-cel="ir:faleconosco">' + t(T('Fale conosco', 'Contáctanos')) + '</button>';
  };
  Tl.faleconosco = function () {
    return topo('', 'central') + '<div class="wa-rolar"><div class="wa-ilu">🛟</div><p class="wa-tit2" data-t="cel-fale-tit">' + t(T('Receba ajuda do Suporte Oficial do WhatsApp', 'Recibe ayuda del Soporte oficial de WhatsApp')) + '</p><ul class="wa-lista">' +
      '<li>' + t(T('Conversa segura com o WhatsApp.', 'Chat seguro con WhatsApp.')) + '</li><li data-t="cel-fale-ia">' + t(T('As respostas podem ser geradas por IA.', 'Las respuestas pueden generarse con IA.')) + '</li><li>' + t(T('Envie seus comentários para nos ajudar a melhorar', 'Envía tus comentarios para ayudarnos a mejorar')) + '</li></ul>' +
      txt(T('Algumas mensagens são geradas por IA, usando uma tecnologia segura da Meta.', 'Algunos mensajes se generan con IA, con una tecnología segura de Meta.'), 'pq') + '</div>' +
      bt(T('CONVERSAR', 'CHATEAR'), 'naotreino', 'cel-fale-conversar') + '<button class="wa-bt claro" data-cel="ir:central">' + t(T('AGORA NÃO', 'AHORA NO')) + '</button>';
  };

  /* perfil (Edit profile: título em inglês no app real) */
  Tl.perfil = function () {
    return topo('Edit profile', 'ferramentas', '📣 🔗 👤') + '<div class="wa-rolar"><div class="wa-capa"><span class="wa-foto">🏪</span></div><p class="wa-nome">Lojinha da Marina</p>' +
      '<p class="wa-sec forte">' + t(T('Dados da empresa', 'Datos de la empresa')) + '</p>' +
      linha('🏪', 'Lojinha da Marina', T('Nome', 'Nombre'), 'ir:nome', 'cel-perfil-nome') + linha('@', 'lojinhadamarina', T('Nome de usuário reservado', 'Nombre de usuario reservado'), 'fora', 'cel-perfil-user') +
      linha('🔷', T('Roupas e vestuário', 'Ropa y vestuario'), T('Categoria', 'Categoría')) + linha('🕘', T('Aberta 24 horas', 'Abierta las 24 horas'), T('Horário de atendimento', 'Horario de atención'), 'fora', 'cel-perfil-hor') +
      linha('📄', T('Canecas, camisetas e ecobags feitas à mão.', 'Tazas, camisetas y ecobags hechas a mano.'), T('Descrição', 'Descripción')) + '</div>';
  };
  Tl.nome = function () {
    return topo(T('Nome comercial', 'Nombre de la empresa'), 'perfil') + '<div class="wa-rolar"><div class="wa-campo on" data-t="cel-nome-campo">Lojinha da Marina<small>17/75</small></div></div>' + bt(T('SALVAR', 'GUARDAR'), 'naotreino', 'cel-nome-salvar');
  };

  /* catálogo */
  var ITENS = [['☕', T('Caneca Azul', 'Taza Azul'), 'R$ 39,90', 'azul'], ['☕', T('Caneca Amarelo', 'Taza Amarilla'), 'R$ 49,90', 'amarelo'], ['👕', T('Camiseta Lojinha', 'Camiseta Lojinha'), 'R$ 69,90', 'camiseta'], ['👜', T('Ecobag Lojinha', 'Ecobag Lojinha'), 'R$ 34,90', 'ecobag']];
  Tl.catalogo = function () {
    return topo(T('Gerenciador de Catálogos', 'Administrador de catálogos'), 'ferramentas', '<button class="wa-ic" data-cel="ir:catmenu" data-t="cel-cat-menu" aria-label="⋮">⋮</button>') + '<div class="wa-rolar">' +
      '<button class="wa-prod" data-cel="naotreino"><span class="wa-mini">＋</span><span class="wa-cinza">' + t(T('Adicionar item', 'Agregar artículo')) + '</span></button>' +
      ITENS.map(function (i) { return '<button class="wa-prod" data-cel="ir:item" data-t="cel-item-' + i[3] + '"><span class="wa-mini">' + i[0] + '</span><span><b>' + t(i[1]) + '</b><small>' + i[2] + '</small></span></button>' }).join('') + '</div>';
  };
  Tl.catmenu = function () {
    return Tl.catalogo() + '<div class="wa-menu"><button data-cel="fora">' + t(T('Compartilhar', 'Compartir')) + '</button><button data-cel="fora">' + t(T('Coleções', 'Colecciones')) + '</button><button data-cel="ir:catconfig" data-t="cel-catmenu-config">' + t(T('Configurações do catálogo', 'Ajustes del catálogo')) + '</button><button data-cel="fora">' + t(T('Turbinar catálogo', 'Promocionar catálogo')) + '</button></div><div class="wa-veu" data-cel="ir:catalogo"></div>';
  };
  Tl.item = function () {
    return topo('', 'catalogo', '↪ 🔗 <button class="wa-ic" data-cel="ir:itemmenu" data-t="cel-item-menu" aria-label="⋮">⋮</button>') + '<div class="wa-rolar"><div class="wa-grande">☕</div><p class="wa-nome" style="text-align:left;margin:12px 16px 2px">' + t(T('Caneca Azul', 'Taza Azul')) + '</p><p style="margin:0 16px">R$ 39,90</p>' +
      (S.oculto ? '<p class="wa-nota" data-t="cel-item-oculto">' + t(T('Item oculto: os clientes não veem.', 'Artículo oculto: los clientes no lo ven.')) + '</p>' : '') + '</div><button class="wa-fab baixo" data-cel="ir:editaritem" data-t="cel-item-editar" title="' + esc(t(T('Editar item', 'Editar artículo'))) + '">✎</button>';
  };
  Tl.itemmenu = function () {
    return Tl.item() + '<div class="wa-menu"><button data-cel="ocultar" data-t="cel-item-ocultar">' + t(S.oculto ? T('Mostrar', 'Mostrar') : T('Ocultar', 'Ocultar')) + '</button><button data-cel="apagar">' + t(T('Apagar', 'Eliminar')) + '</button></div><div class="wa-veu" data-cel="ir:item"></div>';
  };
  Tl.editaritem = function () {
    return topo(T('Editar item', 'Editar artículo'), 'item', '<span class="wa-txt">' + t(T('SALVAR', 'GUARDAR')) + '</span>') + '<div class="wa-rolar"><div class="wa-fotos">☕ <span>＋</span></div>' +
      '<div class="wa-campo">' + t(T('Caneca Azul', 'Taza Azul')) + '<small>' + t(T('Nome', 'Nombre')) + '</small></div><div class="wa-campo">39,90<small>' + t(T('Preço', 'Precio')) + ' (R$)</small></div>' +
      '<div class="wa-campo" data-t="cel-editar-pais">Brasil<small>' + t(T('País', 'País')) + '</small></div>' +
      txt(T('Selecione o país em que o item foi criado. Essa informação ajuda a cumprir a Política Comercial.', 'Selecciona el país donde se creó el artículo. Esta información ayuda a cumplir la Política comercial.'), 'pq') +
      '<div class="wa-campo">' + t(T('Descrição', 'Descripción')) + '<small>0/5000</small></div><p class="wa-sec forte">' + t(T('Mais campos', 'Más campos')) + '</p>' +
      '<div class="wa-campo">Link<small>0/512</small></div><div class="wa-campo">' + t(T('Código do item', 'Código del artículo')) + '<small>0/100</small></div></div>';
  };
  Tl.catconfig = function () {
    var on = S.carrinho !== false;
    return topo(T('Configurações do catálogo', 'Ajustes del catálogo'), 'catalogo') + '<div class="wa-rolar"><p class="wa-sec forte">' + t(T('Pedidos', 'Pedidos')) + '</p>' +
      txt(T('Ao fazer compras, os clientes podem adicionar itens ao carrinho.', 'Al comprar, los clientes pueden agregar artículos al carrito.')) +
      '<div class="wa-dia2" data-t="cel-catcfg-carrinho"><span>' + t(T('Mostrar o botão Adicionar ao carrinho', 'Mostrar el botón Agregar al carrito')) + '<small>' + t(T('Os carrinhos existentes não serão afetados ao desativar essa opção.', 'Los carritos existentes no se verán afectados al desactivar esta opción.')) + '</small></span>' + chave(on, 'carrinho', 'cel-chave-carrinho') + '</div>' +
      '<div data-t="cel-catcfg-conectar"><p class="wa-sec forte">' + t(T('Conectar catálogo do Meta Business Suite', 'Conectar catálogo de Meta Business Suite')) + '</p>' +
      txt(T('Conecte um catálogo do Meta Business Suite para que os clientes possam acessá-lo no WhatsApp.', 'Conecta un catálogo de Meta Business Suite para que los clientes puedan verlo en WhatsApp.')) + '<p class="wa-linha link">' + t(T('Conectar catálogo', 'Conectar catálogo')) + '</p></div></div>';
  };

  /* saudação e ausência */
  Tl.saudacao = function () {
    return topo(T('Mensagem de saudação', 'Mensaje de bienvenida'), 'ferramentas', '<span class="wa-txt">' + t(T('Salvar', 'Guardar')) + '</span> ⋮') + '<div class="wa-rolar">' +
      '<div class="wa-dia2" data-t="cel-saud-chave"><span><b>' + t(T('Enviar mensagem de saudação', 'Enviar mensaje de bienvenida')) + '</b><small>' + t(T('Envie uma mensagem de saudação em resposta à primeira mensagem de seus clientes ou após 14 dias de inatividade.', 'Envía un mensaje de bienvenida como respuesta al primer mensaje de tus clientes o después de 14 días de inactividad.')) + '</small></span>' + chave(true, 'naotreino') + '</div>' +
      '<div class="wa-linha2"><b>' + t(T('Mensagem de saudação', 'Mensaje de bienvenida')) + '</b><span>' + t(T('Lojinha da Marina agradece seu contato. Como podemos ajudar?', 'Lojinha da Marina agradece tu mensaje. ¿Cómo podemos ayudarte?')) + '</span></div>' +
      '<div class="wa-linha2" data-t="cel-saud-dest"><b>' + t(T('Destinatários', 'Destinatarios')) + '</b><span>' + t(S.saudDest || T('Somente…', 'Solo…')) + '</span></div>' +
      '<p class="wa-nota" data-t="cel-saud-internet">' + t(T('As mensagens de saudação só serão enviadas quando seu celular estiver conectado à internet.', 'Los mensajes de bienvenida solo se enviarán cuando tu celular esté conectado a internet.')) + '</p></div>';
  };
  Tl.ausencia = function () {
    return topo(T('Mensagem de ausência', 'Mensaje de ausencia'), 'ferramentas', '<span class="wa-txt">' + t(T('Salvar', 'Guardar')) + '</span> ⋮') + '<div class="wa-rolar">' +
      '<div class="wa-dia2"><span><b>' + t(T('Enviar mensagem de ausência', 'Enviar mensaje de ausencia')) + '</b><small>' + t(T('Responda automaticamente com uma mensagem quando você não estiver disponível.', 'Responde automáticamente con un mensaje cuando no estés disponible.')) + '</small></span>' + chave(true, 'naotreino') + '</div>' +
      '<div class="wa-linha2"><b>' + t(T('Mensagem de ausência', 'Mensaje de ausencia')) + '</b><span>' + t(T('Agradecemos sua mensagem. Não estamos disponíveis no momento, mas responderemos assim que possível.', 'Gracias por tu mensaje. No estamos disponibles en este momento, pero responderemos lo antes posible.')) + '</span></div>' +
      '<div class="wa-linha2" data-t="cel-aus-horario"><b>' + t(T('Horário', 'Horario')) + '</b><span>' + t(T('Enviar sempre · Horário programado · Fora do horário de atendimento', 'Enviar siempre · Horario programado · Fuera del horario de atención')) + '</span></div>' +
      '<div class="wa-linha2"><b>' + t(T('Destinatários', 'Destinatarios')) + '</b><span>' + t(T('Todos', 'Todos')) + '</span></div>' +
      '<p class="wa-nota">' + t(T('As mensagens de ausência só serão enviadas quando seu celular estiver conectado à internet.', 'Los mensajes de ausencia solo se enviarán cuando tu celular esté conectado a internet.')) + '</p></div>';
  };

  /* Instagram e Facebook (Ferramentas) */
  Tl.instafb = function () {
    return topo(T('Instagram e Facebook', 'Instagram y Facebook')) + '<div class="wa-rolar"><p class="wa-tit2">' + t(T('Conectar', 'Conectar')) + '</p>' +
      txt(T('Permita que os clientes iniciem conversas no WhatsApp a partir do Facebook e do Instagram', 'Permite que los clientes inicien chats de WhatsApp desde Facebook e Instagram')) +
      '<div data-t="cel-instafb-contas">' + linha('📸', 'Instagram', '@lojinhadamarina', 'naotreino', 'cel-instafb-ig') + linha('ⓕ', 'Facebook', T('CONECTAR', 'CONECTAR'), 'naotreino', 'cel-instafb-fb') + '</div>' +
      txt(T('Conecte ativos de negócios para ter acesso a mais recursos profissionais.', 'Conecta activos comerciales para acceder a más funciones profesionales.'), 'pq') + '</div>';
  };

  /* conversa com a cliente e pedido */
  Tl.conv = function () {
    var p = S.pedido || 'novo';
    return '<div class="wa-topo"><button class="wa-ic" data-cel="ir:conversas" aria-label="←">←</button><span class="wa-av">B</span><b>Bia</b><span class="wa-dir">🏷️ 📞 ⋮</span></div><div class="wa-chat">' +
      '<p class="wa-msg">' + t(T('Oi! Quero a caneca azul e a ecobag.', '¡Hola! Quiero la taza azul y la ecobag.')) + '<small>10:02</small></p>' +
      '<div class="wa-msg cart" data-t="cel-conv-pedido">🛒 <b>' + t(T('Pedido feito via catálogo', 'Pedido hecho desde el catálogo')) + '</b><br>' + t(T('2 itens · Subtotal R$ 74,80', '2 artículos · Subtotal R$ 74,80')) +
      '<button class="wa-linkbt" data-cel="ir:pedido" data-t="cel-conv-mostrar">' + t(T('Mostrar pedido', 'Ver pedido')) + '</button><small>10:03</small></div>' +
      (p !== 'novo' ? '<div class="wa-msg eu cart" data-t="cel-conv-cobranca">🧾 <b>' + t(T('Cobrança', 'Cobro')) + '</b><br>' + t(T('2 itens · Total R$ 74,80', '2 artículos · Total R$ 74,80')) + (p === 'status' ? '<br><i>' + t(T('Status: preparando para o envio', 'Estado: preparando el envío')) + '</i>' : '') +
        '<button class="wa-linkbt" data-cel="ir:status" data-t="cel-conv-atualizar">' + t(T('Atualizar status', 'Actualizar estado')) + '</button><small>10:05</small></div>' : '') +
      '</div><div class="wa-escrever">' + t(T('Mensagem', 'Mensaje')) + '<span>📎 ➤</span></div>';
  };
  Tl.pedido = function () {
    var aceito = S.pedido && S.pedido !== 'novo';
    return topo(T('Pedido', 'Pedido'), 'conv', '⋮') + '<div class="wa-rolar"><p class="wa-linha"><span class="wa-cinza">From</span> <b>Bia</b></p>' +
      '<div class="wa-prod"><span class="wa-mini">☕</span><span><b>' + t(T('Caneca Azul', 'Taza Azul')) + '</b><small>' + t(T('Quantidade: 1', 'Cantidad: 1')) + '</small></span><span class="wa-dir">R$ 39,90</span></div>' +
      '<div class="wa-prod"><span class="wa-mini">👜</span><span><b>' + t(T('Ecobag Lojinha', 'Ecobag Lojinha')) + '</b><small>' + t(T('Quantidade: 1', 'Cantidad: 1')) + '</small></span><span class="wa-dir">R$ 34,90</span></div>' +
      '<p class="wa-linha wa-cinza">' + t(T('Adicionar desconto, frete ou imposto', 'Agregar descuento, envío o impuesto')) + '</p><p class="wa-linha"><b>Total</b><span class="wa-dir"><b>R$ 74,80</b></span></p></div>' +
      (aceito ? '<p class="wa-nota" style="text-align:center">' + t(T('Pedido aceito.', 'Pedido aceptado.')) + '</p>' :
        '<button class="wa-bt" data-cel="aceitar" data-t="cel-pedido-aceitar">' + t(T('ACEITAR PEDIDO', 'ACEPTAR PEDIDO')) + '</button><p class="wa-nota" style="text-align:center" data-t="cel-pedido-aviso">' + t(T('O cliente recebe uma notificação quando você aceita o pedido.', 'El cliente recibe una notificación cuando aceptas el pedido.')) + '</p>');
  };
  Tl.status = function () {
    var st = [T('Pagamento pedido', 'Pago solicitado'), T('Preparando para o envio', 'Preparando el envío'), T('Enviado', 'Enviado'), T('Entregue', 'Entregado'), T('Concluído', 'Completado'), T('Cancelado', 'Cancelado')];
    return topo(T('Atualizar status', 'Actualizar estado'), 'conv') + '<div class="wa-rolar"><p class="wa-sec forte">' + t(T('Status do pagamento', 'Estado del pago')) + '</p><div class="wa-dia2"><span>' + t(T('Pago', 'Pagado')) + '</span>' + chave(false, 'fora') + '</div>' +
      '<p class="wa-sec forte">' + t(T('Status do pedido', 'Estado del pedido')) + '</p><div data-t="cel-status-lista">' + st.map(function (s, k) {
        return '<button class="wa-op" data-cel="st:' + k + '"' + (k === 1 ? ' data-t="cel-status-preparando"' : '') + '><span class="wa-radio' + (S.st === k ? ' on' : '') + '"></span>' + t(s) + '</button>' }).join('') + '</div></div>' +
      '<button class="wa-bt" data-cel="enviarstatus" data-t="cel-status-enviar"' + (S.st == null ? ' disabled' : '') + '>' + t(T('ENVIAR ATUALIZAÇÃO', 'ENVIAR ACTUALIZACIÓN')) + '</button>';
  };

  /* Turbinar / anúncio pelo app (visto até "Pagar e criar anúncio"; nada pago) */
  Tl.anuncio1 = function () {
    return topo(T('Turbinar perfil', 'Promocionar perfil'), 'ferramentas') + '<div class="wa-rolar"><p class="wa-tit2">' + t(T('O que você quer que as pessoas façam quando virem seu anúncio?', '¿Qué quieres que hagan las personas cuando vean tu anuncio?')) + '</p>' +
      '<button class="wa-op" data-cel="fora"><span class="wa-radio"></span>' + t(T('Visitem seu site', 'Visiten tu sitio web')) + '</button>' +
      '<button class="wa-op" data-cel="fora" data-t="cel-an-mensagem"><span class="wa-radio on"></span>' + t(T('Enviem uma mensagem para você', 'Te envíen un mensaje')) + '</button></div>' + bt(T('Avançar', 'Siguiente'), 'ir:anuncio2', 'cel-an-avancar');
  };
  Tl.anuncio2 = function () {
    return topo(T('Confirme sua conta', 'Confirma tu cuenta'), 'anuncio1') + '<div class="wa-rolar wa-centro"><div class="wa-ilu">ⓕ</div><p class="wa-tit2">' + t(T('Confirme sua conta do Facebook para continuar', 'Confirma tu cuenta de Facebook para continuar')) + '</p>' +
      txt(T('Essas informações serão usadas para manter seus dados de pagamento seguros.', 'Esta información se usará para mantener seguros tus datos de pago.')) + '</div>' +
      '<div data-t="cel-an-conta">' + bt(T('ENTRAR COMO MARINA', 'ENTRAR COMO MARINA'), 'naotreino') + '<button class="wa-bt claro" data-cel="ir:anuncio3" data-t="cel-an-pular">' + t(T('PULAR', 'OMITIR')) + '</button></div>';
  };
  Tl.anuncio3 = function () {
    return topo(T('Configurações de anúncios', 'Configuración del anuncio'), 'anuncio2') + '<div class="wa-rolar"><p class="wa-tit2">' + t(T('Seu anúncio está pronto', 'Tu anuncio está listo')) + '</p>' +
      txt(T('Confira se está tudo certo e adicione uma forma de pagamento.', 'Revisa que todo esté bien y agrega un método de pago.')) +
      '<div data-t="cel-an-resumo">' + linha('📣', 'Meta', T('Mensagens', 'Mensajes')) + linha('👥', T('Público', 'Público'), T('Brasil · 18+ · Advantage+ ativado', 'Brasil · 18+ · Advantage+ activado')) + linha('💰', T('Orçamento', 'Presupuesto'), T('R$25 por dia', 'R$25 por día')) +
      linha('💳', T('Adicionar forma de pagamento', 'Agregar método de pago'), T('Salva e armazenada com segurança', 'Se guarda de forma segura')) + '</div></div>' +
      bt(T('Pagar e criar anúncio', 'Pagar y crear anuncio'), 'naopagar', 'cel-an-pagar');
  };

  /* transmissão comercial (vista até o aviso de preço) */
  Tl.listas = function () {
    return topo(T('Listas', 'Listas'), 'conversas') + '<div class="wa-rolar">' + linha('＋', T('Criar lista personalizada', 'Crear lista personalizada')) + '<p class="wa-sec">' + t(T('Suas listas', 'Tus listas')) + '</p>' +
      linha('🏷️', T('Não lidas', 'No leídos'), T('Padrão', 'Predeterminada')) + linha('⭐', T('Favoritos', 'Favoritos')) +
      '<div class="wa-item" data-t="cel-lista-pedido"><i>🏷️</i><span><b>' + t(T('Novo pedido', 'Nuevo pedido')) + '</b><small>1</small></span><button class="wa-ic" data-cel="ir:listamenu" data-t="cel-lista-menu" aria-label="⋮">⋮</button></div></div>';
  };
  Tl.listamenu = function () {
    return Tl.listas() + '<div class="wa-menu"><button data-cel="fora">' + t(T('Editar', 'Editar')) + '</button><button data-cel="fora">' + t(T('Apagar', 'Eliminar')) + '</button><button data-cel="ir:transmissao" data-t="cel-lista-transmissao">' + t(T('Enviar transmissão comercial', 'Enviar difusión comercial')) + '</button></div><div class="wa-veu" data-cel="ir:listas"></div>';
  };
  Tl.transmissao = function () {
    return topo(T('Transmissão comercial', 'Difusión comercial'), 'listas') + '<div class="wa-rolar"><p class="wa-tit2">' + t(T('Mais jeitos de se conectar com as listas de transmissão comercial', 'Más formas de conectar con las listas de difusión comercial')) + '</p><ul class="wa-lista" data-t="cel-trans-itens">' +
      '<li>' + t(T('Programe e envie mensagens no momento certo', 'Programa y envía mensajes en el momento justo')) + '</li><li>' + t(T('Acompanhe o desempenho', 'Sigue el rendimiento')) + '</li>' +
      '<li><b>' + t(T('Pague o mesmo preço por cada mensagem entregue', 'Paga el mismo precio por cada mensaje entregado')) + '</b></li></ul></div>' + bt(T('CONTINUAR', 'CONTINUAR'), 'naotreino', 'cel-trans-continuar');
  };

  /* ações das telas */
  var AV = {
    naotreino: T('Neste treino esse botão não segue: no app de verdade ele mudaria a conta.', 'En esta práctica este botón no sigue: en la app real cambiaría la cuenta.'),
    naopagar: T('Aqui o app pede pagamento. No treino, nada é pago.', 'Aquí la app pide el pago. En la práctica no se paga nada.'),
    qr: T('No app, isto abre a câmera para ler o QR code do computador.', 'En la app, esto abre la cámara para leer el código QR de la computadora.'),
    apagar: T('Apagar é sem volta. No treino, nada é apagado.', 'Eliminar no tiene vuelta atrás. En la práctica no se elimina nada.')
  };
  CEL.acao = function (a) {
    if (AV[a]) { N.aviso(AV[a]); return true }
    if (a === 'ocultar') { S.oculto = !S.oculto; CEL.tela = 'item'; CEL.render(); return true }
    if (a === 'carrinho') { S.carrinho = S.carrinho === false; CEL.render(); return true }
    if (a === 'aceitar') { S.pedido = 'aceito'; CEL.tela = 'conv'; CEL.render(); return true }
    if (a.indexOf('st:') === 0) { S.st = +a.slice(3); CEL.render(); return true }
    if (a === 'enviarstatus') { if (S.st == null) return true; S.pedido = 'status'; CEL.tela = 'conv'; CEL.render(); return true }
    return false;
  };
  CEL.zera = function (o) { for (var k in S) delete S[k]; for (var j in (o || {})) S[j] = o[j] };
})();
