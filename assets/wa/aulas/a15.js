/* Aula 15 · Pôr um número na conta da API (WABA).
   Fontes lidas em 28/10/2026: developers.facebook.com › Business phone numbers (requisitos, limite de 2 → 20, registro com PIN,
   status "connected", nome de exibição), Registration (POST /register, PIN de 6 dígitos, 10 tentativas em 72 h).
   Telas reais: Meta for Developers › Etapa 2 › "Adicionar número de telefone" (passo Detalhes) e Gerenciador do WhatsApp da conta de teste, 28/10/2026. */
(function () {
  var P = N.P, Q = N.Q, meta = N.meta;
  function m(o) { return meta(o) }
  N.AULAS['15'] = {
    min: 9,
    objetivo: N.T('Saber o que um número precisa para entrar na conta da API, onde se adiciona e por que às vezes não dá.', 'Saber qué necesita un número para entrar en la cuenta de la API, dónde se agrega y por qué a veces no se puede.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> o sistema da Marina está pronto e ela quer pôr o número da loja na API.', '<b>Dónde estamos:</b> el sistema de Marina está listo y quiere poner el número de la tienda en la API.'],
      ['m', 'Quero colocar meu número na API, mas o botão “Adicionar telefone” está apagado. E agora?', 'Quiero poner mi número en la API, pero el botón “Agregar teléfono” está apagado. ¿Y ahora?'],
      ['r', 'Primeiro, o limite: portfólio novo começa com <b>2 números</b>. Depois de verificar a empresa (ou de chegar a 2.000 mensagens), a Meta sobe para 20. No Gerenciador aparece “1 de 2 adicionados”.', 'Primero, el límite: un portfolio nuevo empieza con <b>2 números</b>. Después de verificar la empresa (o de llegar a 2.000 mensajes), Meta lo sube a 20. En el Administrador aparece “1 de 2 agregados”.'],
      ['r', 'E o número precisa: ser seu, ter código do país e DDD, receber <b>SMS ou ligação</b> e <b>não estar em uso no WhatsApp</b>. Se está no app do celular, ou tira do app, ou usa a coexistência (aula 18).', 'Y el número necesita: ser tuyo, tener código de país y de área, recibir <b>SMS o llamada</b> y <b>no estar en uso en WhatsApp</b>. Si está en la app del celular, o lo quitas de la app, o usas la coexistencia (clase 18).'],
      ['dica', 'Quem adiciona, normalmente, é o desenvolvedor: Etapa 2 › Registre seu número › Adicionar número de telefone. No fim, ele registra o número na API com um <b>PIN de 6 dígitos</b>.', 'Quien lo agrega, normalmente, es el desarrollador: Paso 2 › Registra tu número › Agregar número de teléfono. Al final, registra el número en la API con un <b>PIN de 6 dígitos</b>.']
    ]),
    verDePerto: [
      ['h', 'O que o número precisa', 'Qué necesita el número'],
      ['ul', [
        ['Ser <b>da empresa</b>, com código do país e DDD (número curto não serve).', 'Ser <b>de la empresa</b>, con código de país y de área (los números cortos no sirven).'],
        ['Receber <b>SMS ou ligação</b> para o código de verificação.', 'Recibir <b>SMS o llamada</b> para el código de verificación.'],
        ['<b>Não estar em uso</b> no WhatsApp (pessoal ou app Business). Se estiver: apagar a conta no app (perde o histórico) ou usar a coexistência com um parceiro.', '<b>No estar en uso</b> en WhatsApp (personal o app Business). Si lo está: eliminar la cuenta en la app (se pierde el historial) o usar la coexistencia con un socio.'],
        ['Banido? Primeiro o recurso, depois o cadastro.', '¿Suspendido? Primero la apelación, después el registro.']]],
      ['h', 'O caminho', 'El camino'],
      ['ol', [
        ['Etapa 2 › Registre seu número › <b>Adicionar número de telefone</b> (ou Gerenciador do WhatsApp › Números de telefone).', 'Paso 2 › Registra tu número › <b>Agregar número de teléfono</b> (o Administrador de WhatsApp › Números de teléfono).'],
        ['Perfil: <b>nome de exibição</b> (igual ao nome comercial; passa por análise) e categoria.', 'Perfil: <b>nombre visible</b> (igual al nombre comercial; pasa por revisión) y categoría.'],
        ['Telefone e <b>código</b> por SMS ou ligação.', 'Teléfono y <b>código</b> por SMS o llamada.'],
        ['O desenvolvedor <b>registra</b> o número na API com um PIN de 6 dígitos. Só com status <b>Conectado</b> ele manda e recebe.', 'El desarrollador <b>registra</b> el número en la API con un PIN de 6 dígitos. Solo con estado <b>Conectado</b> envía y recibe.']]],
      ['h', 'Por que não deixa', 'Por qué no deja'],
      ['ul', [
        ['“Adicionar telefone” apagado: o limite de números do portfólio já foi usado.', '“Agregar teléfono” apagado: ya se usó el límite de números del portfolio.'],
        ['Erro de número já existente (2388012) ou de outro portfólio (2388103).', 'Error de número ya existente (2388012) o de otro portfolio (2388103).'],
        ['Muitas tentativas de registro: 10 em 72 horas; passou disso, espera 72 h (133016).', 'Demasiados intentos de registro: 10 en 72 horas; si se pasa, espera 72 h (133016).']]],
      ['nota', 'Os passos Telefone e Verificação do telefone da janela não foram vistos na tela real: vêm da documentação.', 'Los pasos Teléfono y Verificación del teléfono de la ventana no se vieron en la pantalla real: vienen de la documentación.']
    ],
    praticar: {
      intro: N.T('No Gerenciador do WhatsApp, o limite de números; em Meta for Developers, onde o número é adicionado e o que a Meta pede.', 'En el Administrador de WhatsApp, el límite de números; en Meta for Developers, dónde se agrega el número y qué pide Meta.'),
      tituloMeta: N.T('Gerenciador do WhatsApp e Meta for Developers', 'Administrador de WhatsApp y Meta for Developers'),
      lugares: ['meta'], comeco: function () { META.por({ app: 'wam', pag: 'numeros', conta: 'api' }) },
      passos: [
        P(m({ app: 'wam', pag: 'numeros', conta: 'api' }), 'wam-add-tel', ['O botão apagado', 'El botón apagado'], ['Na conta da API, “Adicionar telefone” está apagado. Vamos ver por quê.', 'En la cuenta de la API, “Agregar teléfono” está apagado. Veamos por qué.'], false, 'meta'),
        P(m({ app: 'wam', pag: 'numeros', conta: 'api' }), 'wam-menu-visao', ['Visão geral', 'Resumen'], ['Clique em Visão geral.', 'Haz clic en Resumen.'], true, 'meta'),
        P(m({ app: 'wam', pag: 'visao', conta: 'api' }), 'wam-limite-numeros', ['1 de 2', '1 de 2'], ['Portfólio novo começa com 2 números. Verificando a empresa (ou chegando a 2.000 mensagens), a Meta sobe para 20.', 'Un portfolio nuevo empieza con 2 números. Verificando la empresa (o llegando a 2.000 mensajes), Meta lo sube a 20.'], false, 'meta'),
        P(m({ app: 'dev', pag: 'etapa2', aceito: true }), 'dev-registrar', ['Onde se adiciona', 'Dónde se agrega'], ['Em Meta for Developers, Etapa 2: “Registre seu número de telefone do WhatsApp”.', 'En Meta for Developers, Paso 2: “Registra tu número de teléfono de WhatsApp”.'], false, 'meta'),
        P(m({ app: 'dev', pag: 'etapa2', aceito: true }), 'dev-add-numero', ['Adicionar', 'Agregar'], ['Clique em Adicionar número de telefone.', 'Haz clic en Agregar número de teléfono.'], true, 'meta'),
        P(m({ app: 'dev', pag: 'etapa2', aceito: true, jan: true }), 'dev-nome-exibicao', ['O nome de exibição', 'El nombre visible'], ['O nome tem que ser igual ao nome comercial e passa por análise. Nome de promoção ou genérico costuma ser recusado.', 'El nombre debe ser igual al nombre comercial y pasa por revisión. Un nombre de promoción o genérico suele ser rechazado.'], false, 'meta'),
        P(m({ app: 'dev', pag: 'etapa2', aceito: true, jan: true }), 'dev-jan-perfil', ['Pronto!', '¡Listo!'], ['Depois vêm Telefone (código por SMS ou ligação) e a conta de mensagens. No fim, o desenvolvedor registra o número na API com um PIN de 6 dígitos.', 'Después vienen Teléfono (código por SMS o llamada) y la cuenta de mensajes. Al final, el desarrollador registra el número en la API con un PIN de 6 dígitos.'], false, 'meta')
      ]
    },
    quiz: [
      Q(['O botão “Adicionar telefone” está apagado no Gerenciador. O que conferir primeiro?', 'El botón “Agregar teléfono” está apagado en el Administrador. ¿Qué revisar primero?'], 2,
        [['Se o app do celular está atualizado', 'Si la app del celular está actualizada'], ['Se o selo azul da loja está ativo', 'Si la insignia azul de la tienda está activa'], ['Quantos números o portfólio já tem', 'Cuántos números ya tiene el portfolio'], ['Se o cartão de crédito está vencido', 'Si la tarjeta de crédito está vencida']],
        [['O app não muda esse botão.', 'La app no cambia ese botón.'], ['O selo não muda o limite.', 'La insignia no cambia el límite.'], ['Isso! Portfólio novo tem limite de 2 números.', '¡Eso! Un portfolio nuevo tiene límite de 2 números.'], ['Pagamento não apaga o botão.', 'El pago no apaga el botón.']]),
      Q(['O número da loja está no app WhatsApp Business. Dá para pôr na API?', 'El número de la tienda está en la app WhatsApp Business. ¿Se puede poner en la API?'], 0,
        [['Sim: apagando no app ou coexistência', 'Sí: borrándola en la app o coexistencia'], ['Não: número de app nunca vai para a API', 'No: un número de app nunca va a la API'], ['Sim, direto, sem mudar nada no celular', 'Sí, directo, sin cambiar nada en el celular'], ['Só depois de 30 dias sem usar o número', 'Solo después de 30 días sin usar el número']],
        [['Isso! São os dois caminhos da documentação.', '¡Eso! Son los dos caminos de la documentación.'], ['Dá, com um dos dois caminhos.', 'Se puede, con uno de los dos caminos.'], ['Número em uso no WhatsApp não registra direto.', 'Un número en uso en WhatsApp no se registra directo.'], ['Não existe esse prazo.', 'No existe ese plazo.']]),
      Q(['O nome de exibição “Promoção Lojinha 50% OFF” foi recusado. Por quê?', 'El nombre visible “Promoción Lojinha 50% OFF” fue rechazado. ¿Por qué?'], 1,
        [['Porque tem mais de cinco palavras no total', 'Porque tiene más de cinco palabras en el total'], ['Porque deve ser igual ao nome da empresa', 'Porque debe ser igual al nombre de la empresa'], ['Porque nome com número nunca é aceito', 'Porque un nombre con números nunca se acepta'], ['Porque o número ainda está Pendente lá', 'Porque el número todavía está Pendiente ahí']],
        [['Não é regra de quantidade.', 'No es regla de cantidad.'], ['Isso! A própria tela diz: igual ao nome comercial, seguindo as diretrizes.', '¡Eso! Lo dice la propia pantalla: igual al nombre comercial, según las pautas.'], ['Não é por ter número.', 'No es por tener números.'], ['O status não recusa nome.', 'El estado no rechaza nombres.']]),
      Q(['O desenvolvedor errou o registro várias vezes e agora dá erro de tentativas. O que fazer?', 'El desarrollador se equivocó varias veces en el registro y ahora da error de intentos. ¿Qué hacer?'], 3,
        [['Trocar o número e tentar com outro chip', 'Cambiar el número e intentar con otro chip'], ['Criar outro app e repetir o registro', 'Crear otra app y repetir el registro'], ['Excluir o portfólio e começar do zero', 'Eliminar el portfolio y empezar de cero'], ['Esperar 72 horas e tentar de novo', 'Esperar 72 horas e intentar de nuevo']],
        [['Não precisa trocar de número.', 'No hace falta cambiar de número.'], ['Outro app não libera o bloqueio.', 'Otra app no libera el bloqueo.'], ['Excluir o portfólio é exagero e não resolve.', 'Eliminar el portfolio es exagerado y no resuelve.'], ['Isso! São 10 tentativas em 72 horas (erro 133016).', '¡Eso! Son 10 intentos en 72 horas (error 133016).']])
    ],
    fontes: [N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers', ['Números de telefone comerciais', 'Números de teléfono comerciales']),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration', ['Registrar um número de telefone comercial', 'Registrar un número de teléfono comercial']),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes', ['Códigos de erro do WhatsApp', 'Códigos de error de WhatsApp'])],
    telas: N.T('Telas reais: Gerenciador do WhatsApp (conta de teste) e Meta for Developers › Etapa 2 › Adicionar número de telefone, 28/10/2026. Os passos Telefone e Verificação não foram vistos (a conferir). Número fictício.', 'Pantallas reales: Administrador de WhatsApp (cuenta de prueba) y Meta for Developers › Paso 2 › Agregar número de teléfono, 28/10/2026. Los pasos Teléfono y Verificación no se vieron (por confirmar). Número ficticio.')
  };
})();
