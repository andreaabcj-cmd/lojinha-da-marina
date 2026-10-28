/* Aula 01 · App ou API? Primeiro descubra qual é.
   Fontes oficiais lidas em 27/10/2026 (ver "fontes") + tela real do app (25–26/10) e do Business Suite (27/10). */
(function () {
  var T = N.T;
  function c(a, b) { return T(a, b) }

  N.AULAS['01'] = {
    min: 8,
    objetivo: T('Descobrir, logo no começo do atendimento, se a cliente usa o app WhatsApp Business ou a Plataforma (API), e onde conferir isso.',
      'Descubrir, al inicio de la atención, si la clienta usa la app WhatsApp Business o la Plataforma (API), y dónde comprobarlo.'),

    chat: [
      ['sis', T('<b>Onde estamos:</b> a Marina vende canecas pelo WhatsApp Business no celular. Hoje ela chamou o suporte.', '<b>Dónde estamos:</b> Marina vende tazas por WhatsApp Business en el celular. Hoy llamó a soporte.')],
      ['m', T('Oi! Uma amiga tem chatbot e vários atendentes no WhatsApp dela. No meu não aparece nada disso. Está com defeito?', '¡Hola! Una amiga tiene chatbot y varios agentes en su WhatsApp. En el mío no aparece nada de eso. ¿Está fallando?')],
      ['r', T('Oi, Marina! Antes de tudo: você responde os clientes pelo app no celular ou por um sistema no computador?', '¡Hola, Marina! Antes que nada: ¿respondes a tus clientes con la app en el celular o con un sistema en la computadora?')],
      ['m', T('Pelo app no celular, aquele do ícone com um B.', 'Con la app en el celular, la del ícono con una B.')],
      ['r', T('Então você usa o app WhatsApp Business, feito para pequenas empresas. Sua amiga deve usar a Plataforma do WhatsApp Business, a API, que é instalada por um parceiro. São produtos diferentes, por isso os recursos mudam.', 'Entonces usas la app WhatsApp Business, hecha para pequeñas empresas. Tu amiga debe usar la Plataforma de WhatsApp Business, la API, que instala un socio. Son productos distintos, por eso cambian las funciones.')],
      ['dica', T('Primeira pergunta de todo atendimento de WhatsApp: <b>app ou API?</b> A solução muda conforme a resposta.', 'Primera pregunta de toda atención de WhatsApp: <b>¿app o API?</b> La solución cambia según la respuesta.')],
      ['m', T('E dá para ver isso em algum lugar da Meta?', '¿Y se puede ver eso en algún lugar de Meta?')],
      ['r', T('Dá, sim: no portfólio, em Configurações › Contas de mensagens. Embaixo do nome aparece o tipo da conta. Vou te mostrar.', 'Sí: en el portfolio, en Configuración › Cuentas de mensajes. Debajo del nombre aparece el tipo de cuenta. Te muestro.')]
    ],

    verDePerto: function (t) {
      var linhas = [
        [c('O que é', 'Qué es'), c('Um app grátis, baixado na loja de apps', 'Una app gratuita, se descarga en la tienda de apps'), c('Não é um app: é um conjunto de APIs', 'No es una app: es un conjunto de APIs')],
        [c('Para quem', 'Para quién'), c('Pequenas empresas', 'Pequeñas empresas'), c('Empresas médias e grandes', 'Empresas medianas y grandes')],
        [c('Onde se usa', 'Dónde se usa'), c('No celular, com até 4 aparelhos conectados', 'En el celular, con hasta 4 dispositivos vinculados'), c('No sistema de um parceiro ou de um desenvolvedor', 'En el sistema de un socio o de un desarrollador')],
        [c('Atendentes', 'Agentes'), c('Um número de telefone', 'Un número de teléfono'), c('Milhares de atendentes e bots, vários números', 'Miles de agentes y bots, varios números')],
        [c('Onde se configura', 'Dónde se configura'), c('No próprio app, na aba Ferramentas', 'En la propia app, en la pestaña Herramientas'), c('Gerenciador do WhatsApp (WhatsApp Manager), na Meta', 'Administrador de WhatsApp (WhatsApp Manager), en Meta')],
        [c('Custo', 'Costo'), c('App grátis (alguns extras são pagos)', 'App gratuita (algunos extras se pagan)'), c('Cobrança por mensagem (detalhes na aula 14)', 'Cobro por mensaje (detalles en la clase 14)')]
      ];
      return '<h2>' + t(c('Dois produtos com quase o mesmo nome', 'Dos productos con casi el mismo nombre')) + '</h2>' +
        '<div class="tab-rolar"><table class="comp"><tr><th></th><th>📱 ' + t(c('App WhatsApp Business', 'App WhatsApp Business')) + '</th><th>⚙️ ' + t(c('Plataforma (API)', 'Plataforma (API)')) + '</th></tr>' +
        linhas.map(function (l) { return '<tr><th>' + t(l[0]) + '</th><td>' + t(l[1]) + '</td><td>' + t(l[2]) + '</td></tr>' }).join('') + '</table></div>' +
        '<h2>' + t(c('3 perguntas que resolvem', '3 preguntas que lo resuelven')) + '</h2><ol class="perguntas">' +
        '<li>' + t(c('“Você responde pelo app no celular ou por um sistema no computador?”', '“¿Respondes con la app en el celular o con un sistema en la computadora?”')) + '</li>' +
        '<li>' + t(c('“Alguma empresa instalou ou cuida do seu WhatsApp?” (se sim, é um parceiro da Plataforma)', '“¿Alguna empresa instaló o administra tu WhatsApp?” (si sí, es un socio de la Plataforma)')) + '</li>' +
        '<li>' + t(c('“Você consegue me mandar um print da aba Ferramentas do app?” (quem tem essa aba usa o app)', '“¿Me puedes mandar una captura de la pestaña Herramientas de la app?” (quien tiene esa pestaña usa la app)')) + '</li></ol>' +
        '<h2>' + t(c('No portfólio da Meta', 'En el portfolio de Meta')) + '</h2>' +
        '<p>' + t(c('Em <b>Configurações › Contas › Contas de mensagens</b>, a conta do app aparece com <b>“Aplicativo WhatsApp Business”</b> embaixo do nome. Na tela real, a lista <b>Contas do WhatsApp</b> pode estar vazia mesmo assim: não conclua nada só por ela.',
          'En <b>Configuración › Cuentas › Cuentas de mensajes</b>, la cuenta de la app aparece con <b>“App de WhatsApp Business”</b> debajo del nombre. En la pantalla real, la lista <b>Cuentas de WhatsApp</b> puede estar vacía igual: no concluyas nada solo por ella.')) + '</p>' +
        '<p class="nota">' + t(c('Pela documentação da Meta: a <b>conta do WhatsApp</b> guarda o número de telefone; a <b>conta de mensagens</b> guarda os modelos e a forma de pagamento. Como aparece uma conta da Plataforma nessa lista ainda está a conferir.',
          'Según la documentación de Meta: la <b>cuenta de WhatsApp</b> guarda el número de teléfono; la <b>cuenta de mensajes</b> guarda las plantillas y el método de pago. Cómo aparece una cuenta de la Plataforma en esa lista todavía está por comprobar.')) + '</p>' +
        '<div class="caixa"><b>' + t(c('Um terceiro caso: os dois ao mesmo tempo', 'Un tercer caso: los dos a la vez')) + '</b><p>' +
        t(c('Existe a <b>coexistência</b>: o mesmo número fica no app e na Plataforma, ligado por um parceiro. Pede o app na versão 2.24.17 ou mais nova; as conversas individuais dos últimos 6 meses podem ser copiadas, e algumas coisas param de funcionar nessas conversas (por exemplo, mensagens temporárias e de visualização única). Mais na aula 14.',
          'Existe la <b>coexistencia</b>: el mismo número queda en la app y en la Plataforma, vinculado por un socio. Pide la app en la versión 2.24.17 o más nueva; los chats individuales de los últimos 6 meses se pueden copiar, y algunas cosas dejan de funcionar en esos chats (por ejemplo, mensajes temporales y de visualización única). Más en la clase 14.')) + '</p></div>';
    },

    praticar: {
      intro: T('Primeiro no celular da Marina, depois no portfólio dela na Meta. Nada aqui vai para o WhatsApp nem para a Meta.', 'Primero en el celular de Marina, después en su portfolio de Meta. Nada de aquí va a WhatsApp ni a Meta.'),
      lugares: ['cel', 'meta'],
      comeco: function () { CEL.zera(); CEL.por('home'); META.por() },
      passos: [
        { onde: 'cel', prep: function () { CEL.por('home') }, alvo: '[data-t=cel-app-wab]', tit: c('O celular da Marina', 'El celular de Marina'),
          txt: c('Aqui estão dois apps: o WhatsApp comum e o <b>WA Business</b>, com um B no balão. A loja usa o do B.', 'Aquí hay dos apps: el WhatsApp común y <b>WA Business</b>, con una B en el globo. La tienda usa el de la B.') },
        { onde: 'cel', prep: function () { CEL.por('home') }, alvo: '[data-t=cel-app-wab]', clique: true, tit: c('Abrir o app', 'Abrir la app'), txt: c('Toque no WA Business.', 'Toca WA Business.') },
        { onde: 'cel', prep: function () { CEL.por('conversas') }, alvo: '[data-t=cel-faixa-dispositivos]', tit: c('Um número, um celular', 'Un número, un celular'),
          txt: c('Este aviso é do app: a conta comercial fica no celular e pode ser conectada a até 4 outros dispositivos.', 'Este aviso es de la app: la cuenta comercial queda en el celular y se puede vincular a hasta 4 dispositivos más.') },
        { onde: 'cel', prep: function () { CEL.por('conversas') }, alvo: '[data-t=cel-aba-ferramentas]', clique: true, tit: c('Ferramentas', 'Herramientas'), txt: c('Toque na aba Ferramentas.', 'Toca la pestaña Herramientas.') },
        { onde: 'cel', prep: function () { CEL.por('ferramentas') }, alvo: '[data-t=cel-ferr-expanda]', tit: c('A cara do app', 'La cara de la app'),
          txt: c('Catálogo, anúncios, cobranças: no app, tudo se configura aqui. A Plataforma (API) não é um app, então não tem esta tela: lá, tudo passa pelo sistema do parceiro.', 'Catálogo, anuncios, cobros: en la app, todo se configura aquí. La Plataforma (API) no es una app, así que no tiene esta pantalla: allá todo pasa por el sistema del socio.') },
        { onde: 'cel', prep: function () { CEL.por('ferramentas') }, alvo: '[data-t=cel-ferr-conta]', tit: c('O jeito mais rápido', 'La forma más rápida'),
          txt: c('Se a cliente consegue te mandar um print desta aba, ela usa o app. Pedir esse print resolve a dúvida em um minuto.', 'Si la clienta te puede mandar una captura de esta pestaña, usa la app. Pedir esa captura resuelve la duda en un minuto.') },
        { onde: 'meta', prep: function () { META.por() }, alvo: '[data-t=mt-menu-wa]', clique: true, tit: c('Agora, na Meta', 'Ahora, en Meta'),
          txt: c('Este é o portfólio da Marina, em Configurações. No grupo Contas, toque em <b>Contas do WhatsApp</b>.', 'Este es el portfolio de Marina, en Configuración. En el grupo Cuentas, toca <b>Cuentas de WhatsApp</b>.') },
        { onde: 'meta', prep: function () { META.por({ pag: 'wa' }) }, alvo: '[data-t=mt-wa-vazio]', tit: c('Vazia?', '¿Vacía?'),
          txt: c('Na tela real veio assim mesmo, com o app no portfólio. Não conclua que a conta sumiu: a do app fica em outra lista.', 'En la pantalla real salió así, con la app en el portfolio. No concluyas que la cuenta desapareció: la de la app está en otra lista.') },
        { onde: 'meta', prep: function () { META.por({ pag: 'wa' }) }, alvo: '[data-t=mt-menu-msg]', clique: true, tit: c('Contas de mensagens', 'Cuentas de mensajes'), txt: c('Toque em <b>Contas de mensagens</b>.', 'Toca <b>Cuentas de mensajes</b>.') },
        { onde: 'meta', prep: function () { META.por({ pag: 'msg' }) }, alvo: '[data-t=mt-conta]', tit: c('A pista', 'La pista'),
          txt: c('Embaixo do nome: <b>Aplicativo WhatsApp Business</b>. É assim que o portfólio mostra que a conta é do app.', 'Debajo del nombre: <b>App de WhatsApp Business</b>. Así muestra el portfolio que la cuenta es de la app.') },
        { onde: 'meta', prep: function () { META.por({ pag: 'msg' }) }, alvo: '[data-t=mt-conta]', clique: true, tit: c('Abrir a conta', 'Abrir la cuenta'), txt: c('Toque na conta para ver os detalhes.', 'Toca la cuenta para ver los detalles.') },
        { onde: 'meta', prep: function () { META.por({ pag: 'msg', sel: true, aba: 'resumo' }) }, alvo: '[data-t=mt-aba-numeros]', clique: true, tit: c('O número', 'El número'),
          txt: c('Toque na aba <b>WhatsApp accounts</b>. Ela fica em inglês mesmo com a tela em português.', 'Toca la pestaña <b>WhatsApp accounts</b>. Queda en inglés aunque la pantalla esté en español.') },
        { onde: 'meta', prep: function () { META.por({ pag: 'msg', sel: true, aba: 'numeros' }) }, alvo: '[data-t=mt-numeros]', tit: c('Número e nome', 'Número y nombre'),
          txt: c('Aqui ficam o número de telefone, o nome de exibição, o status e a classificação de qualidade. Confira se o número é o mesmo que a cliente te passou.', 'Aquí están el número de teléfono, el nombre visible, el estado y la calificación de calidad. Comprueba que el número sea el mismo que te dio la clienta.') },
        { onde: 'meta', prep: function () { META.por({ pag: 'msg', sel: true, aba: 'numeros' }) }, alvo: '[data-t=mt-tipo-det]', tit: c('Pronto!', '¡Listo!'),
          txt: c('Resumo: no celular, a aba Ferramentas; no portfólio, “Aplicativo WhatsApp Business” em Contas de mensagens. Se aparecer outra coisa nesse lugar, investigue se é a Plataforma.', 'Resumen: en el celular, la pestaña Herramientas; en el portfolio, “App de WhatsApp Business” en Cuentas de mensajes. Si aparece otra cosa en ese lugar, investiga si es la Plataforma.') }
      ]
    },

    /* Regra: alternativas do mesmo tamanho, todas plausíveis; a certa em posições variadas */
    quiz: [
      { p: c('A cliente conta: “Respondo pelo computador, num sistema com três atendentes, e a empresa que instalou cobra por mensagem enviada.” O que ela usa?',
          'La clienta cuenta: “Respondo desde la computadora, en un sistema con tres agentes, y la empresa que lo instaló cobra por mensaje enviado.” ¿Qué usa?'),
        ops: [c('O app WhatsApp Business com aparelhos conectados', 'La app WhatsApp Business con dispositivos vinculados'), c('A Plataforma (API), por meio de um parceiro', 'La Plataforma (API), mediante un socio'),
          c('O WhatsApp Web aberto no computador da loja', 'WhatsApp Web abierto en la computadora de la tienda'), c('A Caixa de Entrada do Meta Business Suite', 'La bandeja de entrada de Meta Business Suite')], certa: 1,
        por: [c('Os aparelhos conectados levam o app para outros aparelhos, mas ninguém instala o app nem cobra por mensagem.', 'Los dispositivos vinculados llevan la app a otros equipos, pero nadie instala la app ni cobra por mensaje.'),
          c('A pista é a empresa que instalou e cobra por mensagem: é um parceiro da Plataforma (API).', 'La pista es la empresa que lo instaló y cobra por mensaje: es un socio de la Plataforma (API).'),
          c('O WhatsApp Web é o próprio app aberto no computador; ninguém instala nem cobra por mensagem.', 'WhatsApp Web es la misma app abierta en la computadora; nadie lo instala ni cobra por mensaje.'),
          c('A Caixa de Entrada junta as mensagens no Business Suite; não é um sistema instalado por outra empresa.', 'La bandeja de entrada junta los mensajes en Business Suite; no es un sistema instalado por otra empresa.')] },
      { p: c('No portfólio da cliente, onde você vê se a conta é do app WhatsApp Business?', 'En el portfolio de la clienta, ¿dónde ves si la cuenta es de la app WhatsApp Business?'),
        ops: [c('Em Contas do WhatsApp, na coluna Status', 'En Cuentas de WhatsApp, en la columna Estado'), c('Em Informações da empresa, no campo Verificação', 'En Información del negocio, en el campo Verificación'),
          c('Em Contas comerciais, na aba Parceiros', 'En Cuentas de comercio, en la pestaña Socios'), c('Em Contas de mensagens, embaixo do nome', 'En Cuentas de mensajes, debajo del nombre')], certa: 3,
        por: [c('Contas do WhatsApp pode vir vazia mesmo com o app no portfólio, e a coluna Status não diz o tipo da conta.', 'Cuentas de WhatsApp puede estar vacía aunque la app esté en el portfolio, y la columna Estado no dice el tipo de cuenta.'),
          c('A verificação fala da empresa, não do tipo da conta do WhatsApp.', 'La verificación habla de la empresa, no del tipo de cuenta de WhatsApp.'),
          c('Contas comerciais são as contas de comércio (lojas), não as do WhatsApp.', 'Las cuentas de comercio son las de tiendas, no las de WhatsApp.'),
          c('Embaixo do nome aparece “Aplicativo WhatsApp Business”.', 'Debajo del nombre aparece “App de WhatsApp Business”.')] },
      { p: c('A lista Contas do WhatsApp está vazia, mas a cliente garante que o app está no portfólio. O que você faz primeiro?', 'La lista Cuentas de WhatsApp está vacía, pero la clienta asegura que la app está en el portfolio. ¿Qué haces primero?'),
        ops: [c('Confere em Contas de mensagens primeiro', 'Revisas primero Cuentas de mensajes'), c('Pede para ela adicionar a conta de novo', 'Le pides que agregue la cuenta otra vez'),
          c('Explica que o app nunca aparece no portfólio', 'Explicas que la app nunca aparece en el portfolio'), c('Encaminha como erro, porque a conta sumiu', 'Lo derivas como error, porque la cuenta desapareció')], certa: 0,
        por: [c('Na tela real, a conta do app aparece em Contas de mensagens, mesmo com Contas do WhatsApp vazia.', 'En la pantalla real, la cuenta de la app aparece en Cuentas de mensajes, aunque Cuentas de WhatsApp esté vacía.'),
          c('Antes de mexer em qualquer coisa, confere-se onde a conta já está.', 'Antes de tocar nada, se revisa dónde está ya la cuenta.'),
          c('Aparece, sim: em Contas de mensagens, com “Aplicativo WhatsApp Business”.', 'Sí aparece: en Cuentas de mensajes, con “App de WhatsApp Business”.'),
          c('Não é erro, só outra lista. Encaminhar sem conferir atrasa a cliente.', 'No es un error, solo otra lista. Derivar sin revisar atrasa a la clienta.')] },
      { p: c('Qual destas pistas indica que a pessoa usa o app, e não a API?', '¿Cuál de estas pistas indica que la persona usa la app y no la API?'),
        ops: [c('Ela envia modelos de mensagem aprovados pela Meta', 'Envía plantillas de mensaje aprobadas por Meta'), c('Ela atende com dezenas de pessoas no mesmo número', 'Atiende con decenas de personas en el mismo número'),
          c('Ela edita o perfil na aba Ferramentas do celular', 'Edita el perfil en Herramientas, en el celular'), c('Ela paga um parceiro por mensagem entregue', 'Le paga a un socio por mensaje entregado')], certa: 2,
        por: [c('Modelos aprovados são da Plataforma: é o único tipo de mensagem que sai fora da janela de atendimento.', 'Las plantillas aprobadas son de la Plataforma: es el único tipo de mensaje que sale fuera de la ventana de atención.'),
          c('Muitos atendentes no mesmo número é o uso típico da Plataforma, para empresas maiores.', 'Muchos agentes en el mismo número es el uso típico de la Plataforma, para empresas más grandes.'),
          c('A aba Ferramentas (perfil, catálogo, saudação) é do app WhatsApp Business.', 'La pestaña Herramientas (perfil, catálogo, bienvenida) es de la app WhatsApp Business.'),
          c('Um parceiro cobrando por mensagem é o modelo da Plataforma (API).', 'Un socio que cobra por mensaje es el modelo de la Plataforma (API).')] },
      { p: c('Por que perguntar logo no começo se é app ou API?', '¿Por qué preguntar al inicio si es app o API?'),
        ops: [c('Porque só a API pode ser ligada a uma Página do Facebook', 'Porque solo la API se puede vincular a una página de Facebook'), c('Porque tela, recursos e cobrança mudam em cada um', 'Porque pantalla, funciones y cobro cambian en cada uno'),
          c('Porque o app não tem Central de Ajuda e a API tem', 'Porque la app no tiene servicio de ayuda y la API sí'), c('Porque a API só funciona em celulares com Android', 'Porque la API solo funciona en celulares con Android')], certa: 1,
        por: [c('O app também se liga à Página: Ferramentas › Instagram e Facebook.', 'La app también se vincula a la página: Herramientas › Instagram y Facebook.'),
          c('Cada um tem sua tela (app no celular × sistema do parceiro), seus recursos e sua cobrança.', 'Cada uno tiene su pantalla (app en el celular × sistema del socio), sus funciones y su cobro.'),
          c('O app tem Central de Ajuda: Ferramentas › Central de Ajuda.', 'La app tiene servicio de ayuda: Herramientas › Servicio de ayuda.'),
          c('A Plataforma nem é um app: funciona pelo sistema do parceiro, em qualquer aparelho.', 'La Plataforma ni siquiera es una app: funciona con el sistema del socio, en cualquier equipo.')] },
      { p: c('A cliente usa o app e contratou um parceiro, mas quer continuar respondendo pelo celular. Isso existe?', 'La clienta usa la app y contrató a un socio, pero quiere seguir respondiendo desde el celular. ¿Existe eso?'),
        ops: [c('Não: o número sai do app assim que vai para a API', 'No: el número sale de la app apenas pasa a la API'), c('Não: só com dois números, um em cada lugar', 'No: solo con dos números, uno en cada lugar'),
          c('Sim, mas só no iPhone e com Meta Verified ativo', 'Sí, pero solo en iPhone y con Meta Verified activo'), c('Sim: é a coexistência, ligada pelo parceiro', 'Sí: es la coexistencia, vinculada por el socio')], certa: 3,
        por: [c('Esse é um caminho (apagar a conta do app e registrar na API), mas não o único: existe a coexistência.', 'Ese es un camino (borrar la cuenta de la app y registrarla en la API), pero no el único: existe la coexistencia.'),
          c('Dá para usar o mesmo número nos dois, pela coexistência.', 'Se puede usar el mismo número en los dos, con la coexistencia.'),
          c('A documentação não pede iPhone nem Meta Verified; pede o app na versão 2.24.17 ou mais nova.', 'La documentación no pide iPhone ni Meta Verified; pide la app en la versión 2.24.17 o más nueva.'),
          c('Na coexistência, o mesmo número fica no app e na API; o parceiro faz a ligação.', 'En la coexistencia, el mismo número queda en la app y en la API; el socio hace la conexión.')] }
    ],

    fontes: [
      { url: 'https://whatsappbusiness.com/pt-br/resources/resource-library/whatsapp-vs-whatsapp-business/', tit: c('WhatsApp Business: app × Plataforma', 'WhatsApp Business: app × Plataforma'), data: '27/10/2026' },
      { url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/whatsapp-business-accounts', tit: c('Contas do WhatsApp e contas de mensagens (Meta for Developers)', 'Cuentas de WhatsApp y cuentas de mensajes (Meta for Developers)'), data: '27/10/2026' },
      { url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform', tit: c('Sobre a Plataforma do WhatsApp Business', 'Sobre la Plataforma de WhatsApp Business'), data: '27/10/2026' },
      { url: 'https://faq.whatsapp.com/647349420360876', tit: c('Dispositivos conectados no app WhatsApp Business', 'Dispositivos vinculados en la app WhatsApp Business'), data: '27/10/2026' },
      { url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/', tit: c('Coexistência: app e Cloud API no mesmo número', 'Coexistencia: app y Cloud API en el mismo número'), data: '27/10/2026' }
    ],
    telas: c('Telas reais: app WhatsApp Business (25–26/10/2026, Android) e Business Suite › Configurações › Contas (27/10/2026, em português e espanhol). Número e identificação aqui são fictícios.',
      'Pantallas reales: app WhatsApp Business (25–26/10/2026, Android) y Business Suite › Configuración › Cuentas (27/10/2026, en portugués y español). El número y el identificador de aquí son ficticios.')
  };
})();
