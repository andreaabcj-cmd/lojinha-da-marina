/* Aula 19 · Selo por notoriedade: a Conta comercial oficial.
   Fontes lidas em 29/10/2026: developers.facebook.com › Official Business Accounts (OBA: número da Plataforma, 30 dias, portfólio verificado,
   duas etapas, nome de exibição aprovado, política; nova solicitação só depois de 30 dias; não vale para número do app nem de teste;
   sem OBA o número não aparece na busca do WhatsApp), faq.whatsapp.com/794517045178057 (contas verificadas: notáveis × Meta Verified/Meta One).
   Telas reais: Gerenciador do WhatsApp › Números de telefone › ⚙ › Perfil › Conta comercial oficial (29/10/2026, só olhando; botão apagado
   com o aviso "Aumente os limites…"; perfil do número de teste não pode ser editado). */
(function () {
  var P = N.P, Q = N.Q, meta = N.meta;
  function wam(o) { var x = { app: 'wam' }; for (var k in o) x[k] = o[k]; return meta(x) }
  N.AULAS['19'] = {
    min: 8,
    objetivo: N.T('Explicar o selo azul por notoriedade no WhatsApp (Conta comercial oficial): quem pode pedir, onde e por que não dá para comprar.', 'Explicar la insignia azul por notoriedad en WhatsApp (Cuenta comercial oficial): quién puede pedirla, dónde y por qué no se puede comprar.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a loja da Marina já usa a API e ela viu uma marca grande com selo azul no WhatsApp.', '<b>Dónde estamos:</b> la tienda de Marina ya usa la API y vio una marca grande con insignia azul en WhatsApp.'],
      ['m', 'Quero aquele selo azul de “oficial”. Quanto custa?', 'Quiero esa insignia azul de “oficial”. ¿Cuánto cuesta?'],
      ['r', 'Tem dois caminhos para o selo. O <b>Meta Verified</b> (ou a Meta One) é <b>pago</b>. A <b>Conta comercial oficial</b> é <b>grátis</b>, mas não se compra: é para marca <b>notável</b>, conhecida e procurada, e a Meta analisa.', 'Hay dos caminos para la insignia. <b>Meta Verified</b> (o Meta One) es <b>pago</b>. La <b>Cuenta comercial oficial</b> es <b>gratis</b>, pero no se compra: es para una marca <b>notable</b>, conocida y buscada, y Meta la analiza.'],
      ['r', 'E ela só existe para número da <b>Plataforma</b> (API). Número do app e número de teste não podem.', 'Y solo existe para números de la <b>Plataforma</b> (API). Ni el número de la app ni el de prueba pueden.'],
      ['dica', 'O pedido é no Gerenciador do WhatsApp › Números de telefone › ⚙ › Perfil › Conta comercial oficial › Enviar solicitação.', 'La solicitud está en Administrador de WhatsApp › Números de teléfono › ⚙ › Perfil › Cuenta comercial oficial › Enviar solicitud.']
    ]),
    verDePerto: [
      ['h', 'Os dois selos azuis', 'Las dos insignias azules'],
      ['ul', [
        ['<b>Conta comercial oficial:</b> grátis, por notoriedade. Só número da Plataforma (API). A Meta analisa e responde por notificação.', '<b>Cuenta comercial oficial:</b> gratis, por notoriedad. Solo número de la Plataforma (API). Meta lo analiza y responde por notificación.'],
        ['<b>Meta Verified / Meta One:</b> assinatura paga, também dá selo no app WhatsApp Business. Não pede ser famosa (veja o módulo Meta Verified e Meta One).', '<b>Meta Verified / Meta One:</b> suscripción paga, también da insignia en la app WhatsApp Business. No pide ser famosa (mira el módulo Meta Verified y Meta One).']]],
      ['h', 'O que precisa para pedir', 'Qué hace falta para pedirla'],
      ['ul', [
        ['Número na Plataforma do WhatsApp Business há <b>30 dias</b> ou mais.', 'Número en la Plataforma de WhatsApp Business hace <b>30 días</b> o más.'],
        ['Portfólio empresarial <b>verificado</b> (verificação da empresa).', 'Portfolio comercial <b>verificado</b> (verificación de la empresa).'],
        ['<b>Verificação em duas etapas</b> ligada no número.', '<b>Verificación en dos pasos</b> activada en el número.'],
        ['<b>Nome de exibição aprovado</b>.', '<b>Nombre visible aprobado</b>.'],
        ['Seguir a Política de Mensagens do WhatsApp Business.', 'Cumplir la Política de mensajes de WhatsApp Business.'],
        ['E ser <b>notável</b>: marca conhecida e procurada. Conteúdo pago ou promocional não conta como prova.', 'Y ser <b>notable</b>: marca conocida y buscada. El contenido pago o promocional no cuenta como prueba.']]],
      ['h', 'Depois do pedido', 'Después de la solicitud'],
      ['ul', [
        ['Chega uma notificação dizendo se o número virou Conta comercial oficial ou não.', 'Llega una notificación diciendo si el número pasó a ser Cuenta comercial oficial o no.'],
        ['Negado: só dá para pedir de novo <b>depois de 30 dias</b>. O perfil (foto, descrição, site, e-mail) continua editável.', 'Rechazada: solo se puede pedir de nuevo <b>después de 30 días</b>. El perfil (foto, descripción, sitio, correo) sigue editable.'],
        ['Sem o selo, o número <b>não aparece na busca</b> do WhatsApp para quem não salvou o contato.', 'Sin la insignia, el número <b>no aparece en la búsqueda</b> de WhatsApp para quien no guardó el contacto.']]],
      ['h', 'E a Página do Facebook?', '¿Y la Página de Facebook?'],
      ['ul', [
        ['A Central de Ajuda ainda fala do selo azul por destaque (autêntica, única, completa e notável), mas em 28/10/2026 não achamos formulário público funcionando. Hoje, o caminho aberto para a Página é o Meta Verified (pago).', 'El Centro de ayuda todavía habla de la insignia azul por notoriedad (auténtica, única, completa y notable), pero el 28/10/2026 no encontramos un formulario público funcionando. Hoy, el camino abierto para la Página es Meta Verified (pago).']]]
    ],
    praticar: {
      intro: N.T('No Gerenciador do WhatsApp, onde fica o pedido da Conta comercial oficial e o que o botão apagado quer dizer.', 'En el Administrador de WhatsApp, dónde está la solicitud de la Cuenta comercial oficial y qué quiere decir el botón apagado.'),
      tituloMeta: N.T('Meta Business Suite › Gerenciador do WhatsApp', 'Meta Business Suite › Administrador de WhatsApp'),
      lugares: ['meta'], comeco: function () { META.por({ app: 'wam', pag: 'numeros' }) },
      passos: [
        P(wam({ pag: 'numeros' }), 'wam-engrenagem', ['O número', 'El número'], ['Em Números de telefone, toque na engrenagem ⚙ do número.', 'En Números de teléfono, toca el engranaje ⚙ del número.'], true, 'meta'),
        P(wam({ pag: 'perfil' }), 'wam-oba', ['Conta comercial oficial', 'Cuenta comercial oficial'], ['No Perfil, este bloco é o selo por notoriedade: a marca de seleção azul ao lado do nome.', 'En el Perfil, este bloque es la insignia por notoriedad: la marca azul junto al nombre.'], false, 'meta'),
        P(wam({ pag: 'perfil' }), 'wam-oba-bt', ['O pedido', 'La solicitud'], ['Toque em <b>Enviar solicitação</b>.', 'Toca <b>Enviar solicitud</b>.'], true, 'meta'),
        P(wam({ pag: 'perfil', dica: true }), 'wam-oba-dica', ['Botão apagado', 'Botón apagado'], ['Na conta de aula o botão fica apagado e mostra este aviso. Aqui é número do app, que nem pode ter o selo; com número da API, falta cumprir os requisitos (30 dias, empresa verificada, duas etapas, nome aprovado).', 'En la cuenta de práctica el botón está apagado y muestra este aviso. Aquí es un número de la app, que ni puede tener la insignia; con un número de la API, faltan los requisitos (30 días, empresa verificada, dos pasos, nombre aprobado).'], false, 'meta'),
        P(wam({ pag: 'perfil', dica: true }), 'wam-oba', ['Pronto!', '¡Listo!'], ['Se negarem, só depois de 30 dias. E se a cliente quer selo sem ser famosa, o caminho é o Meta Verified, que é pago.', 'Si la rechazan, solo después de 30 días. Y si la clienta quiere insignia sin ser famosa, el camino es Meta Verified, que es pago.'], false, 'meta')
      ]
    },
    quiz: [
      Q(['A Marina quer pagar para ter o selo de Conta comercial oficial. O que você explica?', 'Marina quiere pagar para tener la insignia de Cuenta comercial oficial. ¿Qué le explicas?'], 2,
        [['Que custa o mesmo que a Meta One', 'Que cuesta lo mismo que Meta One'], ['Que se paga na tela do Gerenciador', 'Que se paga en la pantalla del Administrador'], ['Grátis, mas só para marca notável', 'Gratis, pero solo para marca notable'], ['Que só sai para quem anuncia muito', 'Que solo sale para quien anuncia mucho']],
        [['A Meta One é outro selo, pago.', 'Meta One es otra insignia, paga.'], ['Não há pagamento nesse pedido.', 'No hay pago en esta solicitud.'], ['Isso! Não se compra: a Meta analisa se a marca é notável.', '¡Eso! No se compra: Meta analiza si la marca es notable.'], ['Anúncio pago não conta como notoriedade.', 'Un anuncio pago no cuenta como notoriedad.']]),
      Q(['A loja usa só o app WhatsApp Business no celular. Ela pode pedir a Conta comercial oficial?', 'La tienda usa solo la app WhatsApp Business en el celular. ¿Puede pedir la Cuenta comercial oficial?'], 0,
        [['Não: é só para número da API', 'No: es solo para números de la API'], ['Sim, em Configurações › Conta', 'Sí, en Ajustes › Cuenta'], ['Sim, depois de 30 dias de uso', 'Sí, después de 30 días de uso'], ['Só se ligar a Página do Facebook', 'Solo si vincula la Página de Facebook']],
        [['Isso! A documentação exclui número do app e de teste.', '¡Eso! La documentación excluye números de la app y de prueba.'], ['Esse caminho não existe no app.', 'Ese camino no existe en la app.'], ['Os 30 dias são na Plataforma, não no app.', 'Los 30 días son en la Plataforma, no en la app.'], ['A Página não muda isso.', 'La Página no cambia eso.']]),
      Q(['O pedido foi negado ontem. Quando a loja pode tentar de novo?', 'Rechazaron la solicitud ayer. ¿Cuándo puede intentar de nuevo la tienda?'], 3,
        [['Na hora, mudando a descrição do perfil', 'Ya mismo, cambiando la descripción del perfil'], ['Depois de 7 dias, com nova foto', 'Después de 7 días, con foto nueva'], ['Nunca mais naquele mesmo número', 'Nunca más con ese mismo número'], ['Só depois de 30 dias do pedido negado', 'Solo después de 30 días de la negativa']],
        [['Mudar o perfil não reabre o pedido.', 'Cambiar el perfil no reabre la solicitud.'], ['O prazo é outro.', 'El plazo es otro.'], ['Pode pedir de novo, com prazo.', 'Puede pedir de nuevo, con plazo.'], ['Isso! A documentação manda esperar 30 dias.', '¡Eso! La documentación dice esperar 30 días.']]),
      Q(['O número já está na API, mas o botão Enviar solicitação está apagado. O que conferir primeiro?', 'El número ya está en la API, pero el botón Enviar solicitud está apagado. ¿Qué revisar primero?'], 1,
        [['Se o celular da loja tem internet', 'Si el celular de la tienda tiene internet'], ['30 dias, verificação e duas etapas', '30 días, verificación y dos pasos'], ['Se o catálogo tem mais de 10 itens', 'Si el catálogo tiene más de 10 artículos'], ['Se a assinatura Meta One está ativa', 'Si la suscripción Meta One está activa']],
        [['O celular não muda os requisitos.', 'El celular no cambia los requisitos.'], ['Isso! E também o nome de exibição aprovado.', '¡Eso! Y también el nombre visible aprobado.'], ['Catálogo não é requisito.', 'El catálogo no es requisito.'], ['Meta One é outro selo e não libera esse botão.', 'Meta One es otra insignia y no habilita ese botón.']])
    ],
    fontes: [N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/official-business-accounts/', ['Contas comerciais oficiais (OBA)', 'Cuentas de empresa oficiales (OBA)'], '29/10/2026'),
      N.F('https://faq.whatsapp.com/794517045178057', ['Sobre as contas comerciais verificadas', 'Sobre las cuentas comerciales verificadas'], '29/10/2026'),
      N.F('https://www.facebook.com/help/1288173394636262', ['Tipos de selos de verificado no Facebook', 'Tipos de insignias de verificado en Facebook'], '28/10/2026')],
    divergencias: [{ tema: N.T('Botão no número do app', 'Botón en el número de la app'),
      oficial: N.T('A documentação diz que número do app WhatsApp Business e número de teste não recebem o status de Conta comercial oficial.', 'La documentación dice que los números de la app WhatsApp Business y de prueba no reciben el estado de Cuenta comercial oficial.'),
      tela: N.T('No portfólio de aula (29/10/2026), o número do app mostra o bloco Conta comercial oficial com o botão Enviar solicitação apagado e o aviso “Aumente os limites da sua empresa para se qualificar…”. O número de teste não mostra o perfil (“O perfil do telefone de teste não pode ser editado”).', 'En el portfolio de práctica (29/10/2026), el número de la app muestra el bloque Cuenta comercial oficial con el botón Enviar solicitud apagado y el aviso “Aumenta los límites de tu empresa para calificar…”. El número de prueba no muestra el perfil (“El perfil del teléfono de prueba no se puede editar”).'),
      aula: N.T('Ensina a regra da documentação: só número da API. O aviso da tela fala de limites, mas para o número do app o pedido não vale de qualquer jeito.', 'Enseña la regla de la documentación: solo número de la API. El aviso de la pantalla habla de límites, pero para el número de la app la solicitud no vale de todos modos.') }],
    telas: N.T('Telas reais: Gerenciador do WhatsApp › Números de telefone › Perfil do número do app (29/10/2026, PT, só olhando; nada foi enviado). Número fictício; telas em espanhol não vistas (nomes da documentação em espanhol; o aviso é tradução nossa, a conferir).', 'Pantallas reales: Administrador de WhatsApp › Números de teléfono › Perfil del número de la app (29/10/2026, PT, solo mirando; no se envió nada). Número ficticio; pantallas en español no vistas (nombres de la documentación en español; el aviso es traducción nuestra, por confirmar).')
  };
})();
