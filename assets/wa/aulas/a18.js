/* Aula 18 · O mesmo número no app e na API (coexistência).
   Fontes lidas em 28/10/2026: developers.facebook.com › Embedded Signup › Onboarding WhatsApp Business app users (coexistência),
   Business phone numbers › Registration (deregister não serve para número em coexistência).
   Telas reais: app WhatsApp Business (Android) › Configurações › Conta › Plataforma comercial (25–26/10 e 28/10/2026, só olhando);
   Gerenciador do WhatsApp › Números de telefone (28/10/2026). */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel, meta = N.meta;
  function wam(o) { var x = { app: 'wam' }; for (var k in o) x[k] = o[k]; return meta(x) }
  N.AULAS['18'] = {
    min: 9,
    objetivo: N.T('Explicar como o mesmo número funciona no app e na API ao mesmo tempo, o que muda no app e como desligar.', 'Explicar cómo el mismo número funciona en la app y en la API al mismo tiempo, qué cambia en la app y cómo desconectar.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> um parceiro ofereceu à Marina um robô de atendimento pela API, sem largar o app do celular.', '<b>Dónde estamos:</b> un socio le ofreció a Marina un bot de atención por la API, sin dejar la app del celular.'],
      ['m', 'Ele disse que dá para usar o mesmo número no celular e no sistema dele. Isso existe mesmo?', 'Me dijo que se puede usar el mismo número en el celular y en su sistema. ¿Eso existe de verdad?'],
      ['r', 'Existe, se chama <b>coexistência</b>. Quem liga é um <b>parceiro</b> da Meta. No app, fica em Configurações › Conta › <b>Plataforma comercial</b>.', 'Existe, se llama <b>coexistencia</b>. Quien conecta es un <b>socio</b> de Meta. En la app, está en Ajustes › Cuenta › <b>Plataforma comercial</b>.'],
      ['m', 'E eu perco minhas conversas?', '¿Y pierdo mis chats?'],
      ['r', 'Não: o app continua. Dá para levar até <b>seis meses</b> de conversas para o sistema, mas <b>grupos não</b>. As mensagens do app seguem grátis; as da API, a Meta cobra.', 'No: la app sigue. Se pueden llevar hasta <b>seis meses</b> de chats al sistema, pero <b>los grupos no</b>. Los mensajes de la app siguen gratis; los de la API, Meta los cobra.'],
      ['dica', 'Algumas coisas mudam no app: listas de transmissão ficam só leitura, mensagens temporárias e de visualização única desligam.', 'Algunas cosas cambian en la app: las listas de difusión quedan solo de lectura, los mensajes temporales y de visualización única se apagan.']
    ]),
    verDePerto: [
      ['h', 'O que é preciso', 'Qué hace falta'],
      ['ul', [
        ['App WhatsApp Business na versão <b>2.24.17 ou mais nova</b>.', 'App WhatsApp Business en la versión <b>2.24.17 o más nueva</b>.'],
        ['Um <b>parceiro</b> da Meta (Parceiro de Soluções ou Provedor de Tecnologia) que ofereça a coexistência. Não se liga sozinho.', 'Un <b>socio</b> de Meta (Socio de soluciones o Proveedor de tecnología) que ofrezca la coexistencia. No se conecta solo.'],
        ['No app: Configurações › Conta › Plataforma comercial › código de verificação ou QR code que o parceiro mostra.', 'En la app: Ajustes › Cuenta › Plataforma comercial › código de verificación o QR que muestra el socio.']]],
      ['h', 'O que vai junto e o que muda', 'Qué se lleva y qué cambia'],
      ['ul', [
        ['<b>Vai:</b> contatos e até 6 meses de conversas individuais. <b>Não vai:</b> grupos.', '<b>Se lleva:</b> contactos y hasta 6 meses de chats individuales. <b>No se lleva:</b> grupos.'],
        ['<b>No app:</b> listas de transmissão ficam só leitura; mensagens temporárias, de visualização única e localização em tempo real desligam.', '<b>En la app:</b> las listas de difusión quedan solo de lectura; los mensajes temporales, de visualización única y la ubicación en tiempo real se apagan.'],
        ['<b>Na API:</b> ligações, grupos, perfil comercial e ferramentas do app não funcionam. Velocidade fixa de 20 mensagens por segundo.', '<b>En la API:</b> llamadas, grupos, perfil comercial y herramientas de la app no funcionan. Velocidad fija de 20 mensajes por segundo.'],
        ['<b>Preço:</b> mensagens mandadas pelo app continuam grátis; as mandadas pela API seguem o preço da Plataforma.', '<b>Precio:</b> los mensajes enviados desde la app siguen gratis; los enviados por la API siguen el precio de la Plataforma.']]],
      ['h', 'Desligar', 'Desconectar'],
      ['ul', [
        ['É <b>pelo app</b>: Configurações › Conta › Plataforma comercial › Desconectar (pela documentação).', 'Es <b>desde la app</b>: Ajustes › Cuenta › Plataforma comercial › Desconectar (según la documentación).'],
        ['O desenvolvedor <b>não consegue</b> desregistrar pela API um número em coexistência.', 'El desarrollador <b>no puede</b> dar de baja por la API un número en coexistencia.'],
        ['Mudar o número no app também desconecta a Plataforma comercial (aula 05).', 'Cambiar el número en la app también desconecta la Plataforma comercial (clase 05).']]],
      ['nota', 'A tela de Desconectar só aparece com o número ligado a um parceiro: não foi vista (a conferir).', 'La pantalla de Desconectar solo aparece con el número conectado a un socio: no se vio (por confirmar).']
    ],
    praticar: {
      intro: N.T('No celular, onde fica a Plataforma comercial e o que ela avisa; no computador, como o número aparece no Gerenciador do WhatsApp.', 'En el celular, dónde está la Plataforma comercial y qué avisa; en la computadora, cómo aparece el número en el Administrador de WhatsApp.'),
      tituloMeta: N.T('Meta Business Suite › Gerenciador do WhatsApp', 'Meta Business Suite › Administrador de WhatsApp'),
      lugares: ['cel', 'meta'], comeco: function () { CEL.zera(); CEL.por('conversas'); META.por({ app: 'wam', pag: 'numeros' }) },
      passos: [
        P(cel('conversas'), 'cel-menu', ['O menu', 'El menú'], ['Toque nos três pontinhos ⋮.', 'Toca los tres puntos ⋮.'], true),
        P(cel('menu'), 'cel-menu-config', ['Configurações', 'Ajustes'], ['Toque em Configurações.', 'Toca Ajustes.'], true),
        P(cel('config'), 'cel-cfg-conta', ['Conta', 'Cuenta'], ['Toque em Conta.', 'Toca Cuenta.'], true),
        P(cel('conta'), 'cel-conta-plataforma', ['Plataforma comercial', 'Plataforma comercial'], ['Toque em Plataforma comercial.', 'Toca Plataforma comercial.'], true),
        P(cel('plataforma'), 'cel-plataforma-itens', ['O que a própria tela avisa', 'Lo que avisa la propia pantalla'], ['O app continua; até seis meses de conversas vão junto, grupos não; e as conversas individuais passam a ser gerenciadas por um serviço seguro da Meta.', 'La app sigue; hasta seis meses de chats se llevan, los grupos no; y los chats individuales pasan a gestionarse con un servicio seguro de Meta.']),
        P(cel('plataforma'), 'cel-plataforma-bt', ['Quem dá o código', 'Quién da el código'], ['Este botão pede o código ou o QR code que o <b>parceiro</b> mostra. Sem parceiro, não tem o que conectar. No treino, não tocamos.', 'Este botón pide el código o el QR que muestra el <b>socio</b>. Sin socio, no hay nada que conectar. En la práctica, no lo tocamos.']),
        P(wam({ pag: 'numeros' }), 'wam-status', ['No computador', 'En la computadora'], ['No Gerenciador do WhatsApp o número do app aparece aqui. Ligado à API pelo parceiro, o status passa a ser <b>Conectado</b>.', 'En el Administrador de WhatsApp el número de la app aparece aquí. Conectado a la API por el socio, el estado pasa a ser <b>Conectado</b>.'], false, 'meta'),
        P(wam({ pag: 'numeros' }), 'wam-tabela', ['Pronto!', '¡Listo!'], ['Para desligar, é pelo app (Plataforma comercial › Desconectar). O desenvolvedor não consegue desregistrar pela API um número em coexistência.', 'Para desconectar, es desde la app (Plataforma comercial › Desconectar). El desarrollador no puede dar de baja por la API un número en coexistencia.'], false, 'meta')
      ]
    },
    quiz: [
      Q(['A Marina quer usar o mesmo número no app e num robô pela API. O que responder?', 'Marina quiere usar el mismo número en la app y en un bot por la API. ¿Qué responder?'], 2,
        [['Que precisa apagar a conta do app antes', 'Que debe eliminar la cuenta de la app antes'], ['Que só funciona com um número novo', 'Que solo funciona con un número nuevo'], ['Que dá, com um parceiro: coexistência', 'Se puede, con un socio: es coexistencia'], ['Que ela mesma liga no Gerenciador', 'Que ella misma lo conecta en el Administrador']],
        [['Apagar é o outro caminho; na coexistência o app continua.', 'Eliminar es el otro camino; en coexistencia la app sigue.'], ['O número do app serve.', 'El número de la app sirve.'], ['Isso! Um parceiro liga, pelo código ou QR na Plataforma comercial.', '¡Eso! Un socio lo conecta, con el código o QR en Plataforma comercial.'], ['Quem liga é o parceiro.', 'Quien conecta es el socio.']]),
      Q(['Na coexistência, o que vai junto para o sistema?', 'En la coexistencia, ¿qué se lleva al sistema?'], 0,
        [['Até 6 meses de conversas, sem grupos', 'Hasta 6 meses de chats, sin grupos'], ['Todo o histórico, inclusive os grupos', 'Todo el historial, incluidos los grupos'], ['Só os contatos, nenhuma conversa', 'Solo los contactos, ningún chat'], ['Só as conversas do último mês inteiro', 'Solo los chats del último mes entero']],
        [['Isso! A própria tela do app diz.', '¡Eso! Lo dice la propia pantalla de la app.'], ['Grupos não vão.', 'Los grupos no se llevan.'], ['Vão até seis meses de conversas.', 'Se llevan hasta seis meses de chats.'], ['São até seis meses.', 'Son hasta seis meses.']]),
      Q(['A Marina quer desligar a coexistência. Onde?', 'Marina quiere desconectar la coexistencia. ¿Dónde?'], 3,
        [['Excluindo o número no Gerenciador', 'Eliminando el número en el Administrador'], ['Pedindo para o desenvolvedor desregistrar', 'Pidiendo al desarrollador que lo dé de baja'], ['Apagando o app do celular dela', 'Borrando la app de su celular'], ['No app, na Plataforma comercial', 'En la app, en Plataforma comercial']],
        [['Excluir é outra coisa e tem regras próprias.', 'Eliminar es otra cosa y tiene reglas propias.'], ['A API não desregistra número em coexistência.', 'La API no da de baja un número en coexistencia.'], ['Apagar o app não desconecta.', 'Borrar la app no desconecta.'], ['Isso! Configurações › Conta › Plataforma comercial.', '¡Eso! Ajustes › Cuenta › Plataforma comercial.']]),
      Q(['Com coexistência, quanto custam as mensagens mandadas pelo app?', 'Con coexistencia, ¿cuánto cuestan los mensajes enviados desde la app?'], 1,
        [['O mesmo preço das mensagens da API', 'El mismo precio que los de la API'], ['Nada: seguem grátis', 'Nada: siguen siendo gratis'], ['Grátis só nas primeiras 24 horas', 'Gratis solo las primeras 24 horas'], ['Grátis só até mil por mês', 'Gratis solo hasta mil al mes']],
        [['A documentação diz que as do app seguem grátis.', 'La documentación dice que las de la app siguen gratis.'], ['Isso! Só as da API seguem o preço da Plataforma.', '¡Eso! Solo las de la API siguen el precio de la Plataforma.'], ['A janela de 24 h é regra da API.', 'La ventana de 24 h es regla de la API.'], ['As mil grátis são das mensagens de serviço da API.', 'Los mil gratis son de los mensajes de servicio de la API.']])
    ],
    fontes: [N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/', ['Usuários do app WhatsApp Business na Plataforma (coexistência)', 'Usuarios de la app WhatsApp Business en la Plataforma (coexistencia)']),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration', ['Registrar e desregistrar números', 'Registrar y dar de baja números'])],
    telas: N.T('Telas reais: app WhatsApp Business › Configurações › Conta › Plataforma comercial (Android, 28/10/2026, só olhando) e Gerenciador do WhatsApp (28/10/2026). Número fictício; a tela de Desconectar não foi vista (a conferir).', 'Pantallas reales: app WhatsApp Business › Ajustes › Cuenta › Plataforma comercial (Android, 28/10/2026, solo mirando) y Administrador de WhatsApp (28/10/2026). Número ficticio; la pantalla de Desconectar no se vio (por confirmar).')
  };
})();
