/* Aula 16 · A API passo a passo e os parceiros.
   Fontes lidas em 28/10/2026: developers.facebook.com › WhatsApp Cloud API › Get started; Solution Providers › overview.
   Telas reais: Meta for Developers (criar app de aula, Casos de uso › Conectar no WhatsApp, Etapas 1 e 2, Provedor de Tecnologia), 28/10/2026. */
(function () {
  var P = N.P, Q = N.Q, meta = N.meta;
  function dev(o) { var x = { app: 'dev' }; for (var k in o) x[k] = o[k]; return meta(x) }
  var CRI = function (n, o) { var x = { pag: 'criar', passo: n }; for (var k in (o || {})) x[k] = o[k]; return dev(x) };
  N.AULAS['16'] = {
    min: 10,
    objetivo: N.T('Saber o caminho de quem configura a API (app, número de teste, primeira mensagem, produção) e a diferença entre os tipos de parceiro.', 'Conocer el camino de quien configura la API (app, número de prueba, primer mensaje, producción) y la diferencia entre los tipos de socio.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina contratou um desenvolvedor e quer entender o que ele vai fazer, para não ser enganada.', '<b>Dónde estamos:</b> Marina contrató a un desarrollador y quiere entender qué va a hacer, para que no la engañen.'],
      ['m', 'Ele falou em “criar um app na Meta”. Que app é esse? Vai aparecer na loja do celular?', 'Me habló de “crear una app en Meta”. ¿Qué app es esa? ¿Va a aparecer en la tienda del celular?'],
      ['r', 'Não é app de celular. É um cadastro em <b>Meta for Developers</b> que liga o sistema dele à API. Ele escolhe o caso de uso <b>“Conectar-se com clientes pelo WhatsApp”</b> e o seu portfólio.', 'No es una app de celular. Es un registro en <b>Meta for Developers</b> que conecta su sistema a la API. Elige el caso de uso <b>“Conectarse con clientes por WhatsApp”</b> y tu portfolio.'],
      ['r', 'Primeiro ele testa com um <b>número de teste</b> que a Meta dá (manda para até 5 telefones). Depois vem a produção: webhooks, o seu número de verdade, pagamento e a primeira mensagem.', 'Primero prueba con un <b>número de prueba</b> que da Meta (envía a hasta 5 teléfonos). Después viene producción: webhooks, tu número real, pago y el primer mensaje.'],
      ['m', 'E se eu não quiser desenvolvedor nenhum?', '¿Y si no quiero ningún desarrollador?'],
      ['dica', 'Aí entram os <b>parceiros</b>: o Parceiro de Soluções pode dar crédito e cobrar direto; com o Provedor de Tecnologia, quem põe a forma de pagamento é você.', 'Ahí entran los <b>socios</b>: el Socio de soluciones puede dar crédito y cobrar directo; con el Proveedor de tecnología, el método de pago lo pones tú.']
    ]),
    verDePerto: [
      ['h', 'O caminho de quem configura', 'El camino de quien configura'],
      ['ol', [
        ['<b>Criar o app</b> em Meta for Developers: nome, email, caso de uso “Conectar-se com clientes pelo WhatsApp”, portfólio. Sem a verificação em duas etapas na conta, o portfólio aparece apagado.', '<b>Crear la app</b> en Meta for Developers: nombre, correo, caso de uso “Conectarse con clientes por WhatsApp”, portfolio. Sin la verificación en dos pasos en la cuenta, el portfolio aparece apagado.'],
        ['<b>Etapa 1. Experimente:</b> aceitar os termos da Plataforma, pegar o número de teste (até 5 destinatários) e mandar a primeira mensagem de modelo.', '<b>Paso 1. Pruébalo:</b> aceptar las condiciones de la Plataforma, tomar el número de prueba (hasta 5 destinatarios) y enviar el primer mensaje de plantilla.'],
        ['<b>Token:</b> o temporário vence rápido; para valer, o desenvolvedor cria um <b>usuário do sistema</b> no portfólio e gera um token permanente.', '<b>Token:</b> el temporal vence rápido; para que sirva, el desarrollador crea un <b>usuario del sistema</b> en el portfolio y genera un token permanente.'],
        ['<b>Etapa 2. Produção:</b> webhooks (para receber mensagens), o número de verdade, forma de pagamento e enviar mensagem.', '<b>Paso 2. Producción:</b> webhooks (para recibir mensajes), el número real, método de pago y enviar mensaje.'],
        ['<b>Etapa 3:</b> verificar a empresa (libera mais números e mais conversas).', '<b>Paso 3:</b> verificar la empresa (habilita más números y más conversaciones).']]],
      ['h', 'Parceiros', 'Socios'],
      ['ul', [
        ['<b>Parceiro de Soluções:</b> parceiro oficial da Meta, oferece tudo e pode dar linha de crédito e cobrar a empresa direto.', '<b>Socio de soluciones:</b> socio oficial de Meta, ofrece todo y puede dar línea de crédito y cobrar a la empresa directo.'],
        ['<b>Provedor de Tecnologia:</b> desenvolvedor terceirizado; pode trabalhar sozinho ou junto com um Parceiro de Soluções. Não dá crédito: a empresa põe a própria forma de pagamento.', '<b>Proveedor de tecnología:</b> desarrollador externo; puede trabajar solo o junto con un Socio de soluciones. No da crédito: la empresa pone su propio método de pago.'],
        ['O parceiro liga a empresa pelo <b>cadastro incorporado</b> (Embedded Signup): ela entra no fluxo do site do parceiro e a Meta cria as contas sozinha.', 'El socio conecta a la empresa con el <b>registro integrado</b> (Embedded Signup): entra al flujo del sitio del socio y Meta crea las cuentas sola.']]],
      ['nota', 'A tela do token permanente (usuário do sistema) não foi vista nesta rodada: vem da documentação.', 'La pantalla del token permanente (usuario del sistema) no se vio en esta ronda: viene de la documentación.']
    ],
    praticar: {
      intro: N.T('Em Meta for Developers, o caminho real de quem configura a API: criar o app, o número de teste, a produção e os parceiros.', 'En Meta for Developers, el camino real de quien configura la API: crear la app, el número de prueba, producción y los socios.'),
      tituloMeta: N.T('Meta for Developers', 'Meta for Developers'),
      lugares: ['meta'], comeco: function () { META.por({ app: 'dev', pag: 'apps' }) },
      passos: [
        P(dev({ pag: 'apps' }), 'dev-criar', ['Criar o app', 'Crear la app'], ['Em Meta for Developers, tudo começa em <b>Criar aplicativo</b>. Clique.', 'En Meta for Developers, todo empieza en <b>Crear app</b>. Haz clic.'], true, 'meta'),
        P(CRI(1), 'dev-avancar', ['Nome e email', 'Nombre y correo'], ['Nome do app e email de contato já estão preenchidos. Clique em Avançar.', 'Nombre de la app y correo de contacto ya están completos. Haz clic en Siguiente.'], true, 'meta'),
        P(CRI(2), 'dev-caso-wa', ['O caso de uso', 'El caso de uso'], ['Escolha <b>Conectar-se com clientes pelo WhatsApp</b>. Ele exige um portfólio empresarial.', 'Elige <b>Conectarse con clientes por WhatsApp</b>. Requiere un portfolio comercial.'], true, 'meta'),
        P(CRI(2, { caso: true }), 'dev-avancar', ['Avançar', 'Siguiente'], ['Clique em Avançar.', 'Haz clic en Siguiente.'], true, 'meta'),
        P(CRI(3, { caso: true, sem2fa: true }), 'dev-dica-2fa', ['O portfólio apagado', 'El portfolio apagado'], ['Sem a verificação em duas etapas na conta do Facebook, o portfólio fica apagado com este aviso. É o erro mais comum aqui.', 'Sin la verificación en dos pasos en la cuenta de Facebook, el portfolio queda apagado con este aviso. Es el error más común aquí.'], false, 'meta'),
        P(CRI(3, { caso: true }), 'dev-portfolio', ['Com duas etapas ligada', 'Con dos pasos activada'], ['Ligada a verificação, o portfólio libera. Selecione Lojinha da Marina.', 'Activada la verificación, el portfolio se habilita. Selecciona Lojinha da Marina.'], true, 'meta'),
        P(CRI(3, { caso: true, port: true }), 'dev-avancar', ['Avançar', 'Siguiente'], ['Clique em Avançar.', 'Haz clic en Siguiente.'], true, 'meta'),
        P(CRI(4, { caso: true, port: true }), 'dev-avancar', ['Requisitos', 'Requisitos'], ['Sem requisitos para este caso de uso. Clique em Avançar.', 'Sin requisitos para este caso de uso. Haz clic en Siguiente.'], true, 'meta'),
        P(CRI(5, { caso: true, port: true }), 'dev-criar-app', ['Criar', 'Crear'], ['Na Visão geral ficam o resumo e o aceite dos termos do desenvolvedor. Clique em Criar aplicativo.', 'En el Resumen están el resumen y la aceptación de las condiciones para desarrolladores. Haz clic en Crear app.'], true, 'meta'),
        P(dev({ pag: 'uc' }), 'dev-continuar-termos', ['Número de teste', 'Número de prueba'], ['Aqui a Meta oferece um <b>número de teste</b> (até 5 destinatários) e pede o aceite dos termos da Plataforma. Clique em Continuar.', 'Aquí Meta ofrece un <b>número de prueba</b> (hasta 5 destinatarios) y pide aceptar las condiciones de la Plataforma. Haz clic en Continuar.'], true, 'meta'),
        P(dev({ pag: 'etapa1', aceito: true }), 'dev-curl', ['A primeira mensagem', 'El primer mensaje'], ['O desenvolvedor manda uma mensagem de modelo pelo número de teste. Este é o comando que ele usa: endereço, token e o modelo.', 'El desarrollador envía un mensaje de plantilla desde el número de prueba. Este es el comando que usa: dirección, token y la plantilla.'], false, 'meta'),
        P(dev({ pag: 'etapa1', aceito: true }), 'dev-ir-etapa2', ['Produção', 'Producción'], ['Clique em Continuar para ver a Etapa 2.', 'Haz clic en Continuar para ver el Paso 2.'], true, 'meta'),
        P(dev({ pag: 'etapa2', aceito: true }), 'dev-webhooks', ['Webhooks', 'Webhooks'], ['Sem webhooks, o sistema não “ouve” as mensagens que chegam. É o primeiro item da produção.', 'Sin webhooks, el sistema no “escucha” los mensajes que llegan. Es el primer punto de producción.'], false, 'meta'),
        P(dev({ pag: 'etapa2', aceito: true }), 'dev-menu-provedor', ['E os parceiros?', '¿Y los socios?'], ['Clique em Torne-se um Provedor de Tecnologia.', 'Haz clic en Conviértete en Proveedor de tecnología.'], true, 'meta'),
        P(dev({ pag: 'provedor', aceito: true }), 'dev-provedor', ['Pronto!', '¡Listo!'], ['Provedor de Tecnologia trabalha sozinho ou com um Parceiro de Soluções, manda mensagens em nome dos clientes e oferece o cadastro incorporado.', 'El Proveedor de tecnología trabaja solo o con un Socio de soluciones, envía mensajes en nombre de los clientes y ofrece el registro integrado.'], false, 'meta')
      ]
    },
    quiz: [
      Q(['O desenvolvedor não consegue escolher o portfólio ao criar o app. O que costuma ser?', 'El desarrollador no puede elegir el portfolio al crear la app. ¿Qué suele ser?'], 1,
        [['O app precisa ser aprovado pela Meta antes', 'La app debe ser aprobada por Meta antes'], ['Falta verificação em duas etapas na conta', 'Falta verificación en dos pasos en la cuenta'], ['O portfólio precisa ter Meta Verified ativo', 'El portfolio necesita Meta Verified activo'], ['O número do app ainda está no celular dela', 'El número de la app todavía está en su celular']],
        [['A aprovação não vem antes de escolher o portfólio.', 'La aprobación no va antes de elegir el portfolio.'], ['Isso! A tela pede a autenticação de dois fatores antes de conectar.', '¡Eso! La pantalla pide la autenticación en dos pasos antes de conectar.'], ['Meta Verified não é requisito.', 'Meta Verified no es requisito.'], ['O número não tem relação com este passo.', 'El número no tiene relación con este paso.']]),
      Q(['Para que serve o número de teste da Etapa 1?', '¿Para qué sirve el número de prueba del Paso 1?'], 3,
        [['Para atender os clientes reais da loja', 'Para atender a los clientes reales de la tienda'], ['Para substituir o número do app no celular', 'Para reemplazar el número de la app en el celular'], ['Para receber o código da verificação da empresa', 'Para recibir el código de verificación de la empresa'], ['Para testar o envio com até 5 destinatários', 'Para probar el envío con hasta 5 destinatarios']],
        [['Ele é só para teste.', 'Es solo para pruebas.'], ['Não substitui nada.', 'No reemplaza nada.'], ['Não tem essa função.', 'No tiene esa función.'], ['Isso! A própria tela diz: no máximo 5 telefones.', '¡Eso! Lo dice la propia pantalla: 5 teléfonos como máximo.']]),
      Q(['A Marina não quer pôr cartão na Meta. Que tipo de parceiro pode ajudar?', 'Marina no quiere poner tarjeta en Meta. ¿Qué tipo de socio puede ayudar?'], 0,
        [['Parceiro de Soluções, que dá crédito', 'Socio de soluciones, que da crédito'], ['Provedor de Tecnologia, que dá crédito', 'Proveedor de tecnología, que da crédito'], ['Qualquer agência de anúncios da cidade', 'Cualquier agencia de anuncios de la ciudad'], ['Nenhum: a Meta não aceita parceiros', 'Ninguno: Meta no acepta socios']],
        [['Isso! Ele pode dar linha de crédito e cobrar direto.', '¡Eso! Puede dar línea de crédito y cobrar directo.'], ['O Provedor de Tecnologia não tem linha de crédito.', 'El Proveedor de tecnología no tiene línea de crédito.'], ['Agência de anúncios não é parceiro da Plataforma por isso.', 'Una agencia de anuncios no es socio de la Plataforma por eso.'], ['A Meta trabalha com parceiros.', 'Meta trabaja con socios.']]),
      Q(['O sistema manda mensagens, mas não recebe as respostas dos clientes. O que olhar primeiro?', 'El sistema envía mensajes, pero no recibe las respuestas de los clientes. ¿Qué revisar primero?'], 2,
        [['A foto do perfil do número na API', 'La foto del perfil del número en la API'], ['O selo azul da conta no Instagram', 'La insignia azul de la cuenta en Instagram'], ['Os webhooks configurados no app', 'Los webhooks configurados en la app'], ['O limite de 2 números do portfólio', 'El límite de 2 números del portfolio']],
        [['Foto não afeta o recebimento.', 'La foto no afecta la recepción.'], ['Selo não tem relação.', 'La insignia no tiene relación.'], ['Isso! Webhooks são o que leva as mensagens recebidas para o sistema.', '¡Eso! Los webhooks llevan los mensajes recibidos al sistema.'], ['O limite não impede receber.', 'El límite no impide recibir.']])
    ],
    fontes: [N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/get-started', ['Primeiros passos com a API de Nuvem do WhatsApp', 'Primeros pasos con la API de la nube de WhatsApp']),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/overview', ['Parceiros de Soluções e Provedores de Tecnologia', 'Socios de soluciones y Proveedores de tecnología'])],
    telas: N.T('Telas reais: Meta for Developers, app de aula criado em 28/10/2026 (criar app, caso de uso do WhatsApp, Etapas 1 e 2, Provedor de Tecnologia). Número de teste e identificadores fictícios.', 'Pantallas reales: Meta for Developers, app de práctica creada el 28/10/2026 (crear app, caso de uso de WhatsApp, Pasos 1 y 2, Proveedor de tecnología). Número de prueba e identificadores ficticios.')
  };
})();
