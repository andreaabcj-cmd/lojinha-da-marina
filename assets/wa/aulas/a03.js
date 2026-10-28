/* Aula 03 · Conta banida × conta restrita.
   Fontes lidas em 28/10/2026: faq.whatsapp.com/723378546580115 (banimento no app Business) e /717472490411581 (contas restritas).
   Tela de banimento/restrição não foi vista (não dá sem conta banida); a prática usa a Central de Ajuda do app e o Fale conosco (vistos 28/10). */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  N.AULAS['03'] = {
    min: 8,
    objetivo: N.T('Diferenciar banimento de restrição pela mensagem na tela e orientar o que fazer em cada caso.', 'Diferenciar suspensión de restricción por el mensaje en pantalla y orientar qué hacer en cada caso.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina mandou a mesma promoção para todos os contatos de uma vez.', '<b>Dónde estamos:</b> Marina mandó la misma promoción a todos sus contactos de una vez.'],
      ['m', 'Fui banida! Não consigo mais chamar clientes novos.', '¡Me suspendieron! Ya no puedo escribirles a clientes nuevos.'],
      ['r', 'Calma: qual é a mensagem exata na tela? “Sua conta está restrita no momento” ou “Este número de telefone não pode usar o WhatsApp”?', 'Tranquila: ¿cuál es el mensaje exacto en pantalla? ¿“Tu cuenta está restringida” o “Este número de teléfono no puede usar WhatsApp”?'],
      ['m', 'A primeira. Mas ainda converso com quem já falava comigo.', 'La primera. Pero sigo hablando con quien ya me escribía.'],
      ['r', 'Então é <b>restrição</b>, não banimento. Ela sai sozinha no prazo, e você recebe um aviso quando acabar. Para ver quanto falta: Nova conversa e escolha alguém com quem nunca conversou.', 'Entonces es una <b>restricción</b>, no una suspensión. Se quita sola al terminar el plazo, y recibes un aviso cuando acabe. Para ver cuánto falta: Nuevo chat y elige a alguien con quien nunca hablaste.'],
      ['r', 'A causa costuma ser sinal de spam: mensagens em massa ou automáticas. Daqui para a frente, só para quem pediu para receber.', 'La causa suele ser señal de spam: mensajes masivos o automáticos. De ahora en adelante, solo a quien pidió recibirlos.'],
      ['dica', '<b>Restrita</b>: espera e muda o jeito de mandar mensagem. <b>Banida</b>: “Pedir análise” no app, se o botão aparecer.', '<b>Restringida</b>: esperar y cambiar la forma de enviar mensajes. <b>Suspendida</b>: “Solicitar revisión” en la app, si aparece el botón.']
    ]),
    verDePerto: [
      ['h', 'Restrita', 'Restringida'],
      ['ul', [
        ['Mensagem: “Sua conta está restrita no momento” ou “Sua conta pode ser restrita em breve”.', 'Mensaje: “Tu cuenta está restringida” o “Tu cuenta podría restringirse pronto” (traducción nuestra).'],
        ['<b>Não precisa fazer nada</b>: a restrição sai sozinha no prazo, e chega uma notificação quando terminar.', '<b>No hay que hacer nada</b>: la restricción se quita sola al terminar el plazo, y llega una notificación.'],
        ['Ver o prazo: <b>Nova conversa</b> › um contato com quem nunca conversou → aparece quanto tempo falta.', 'Ver el plazo: <b>Nuevo chat</b> › un contacto con quien nunca habló → aparece cuánto falta.'],
        ['Pode: conversar com quem já interagia. Não pode: iniciar conversa ou ligação com contato novo, criar grupo, adicionar membros, usar dispositivos conectados (alguns podem ser desconectados).', 'Puede: hablar con quien ya interactuaba. No puede: iniciar chat o llamada con contactos nuevos, crear grupos, agregar miembros, usar dispositivos vinculados (algunos pueden desvincularse).'],
        ['Causa: sinais de spam, mensagens automáticas ou em massa. Repetir pode levar a banimento.', 'Causa: señales de spam, mensajes automáticos o masivos. Repetirlo puede llevar a la suspensión.']]],
      ['h', 'Banida', 'Suspendida'],
      ['ul', [
        ['Mensagem: “Este número de telefone não pode usar o WhatsApp: [número]. Você pode solicitar uma análise desse número. A maioria das análises é concluída em até 24 horas.”', 'Mensaje: “Este número de teléfono no puede usar WhatsApp: [número]. Puedes solicitar una revisión. La mayoría se completa en 24 horas.” (traducción nuestra)'],
        ['Contestar: botão <b>Pedir análise</b> no app. A resposta chega no próprio app.', 'Apelar: botón <b>Solicitar revisión</b> en la app. La respuesta llega en la misma app.'],
        ['<b>Sem o botão</b> = banimento definitivo, sem contestação.', '<b>Sin el botón</b> = suspensión definitiva, sin apelación.'],
        ['Falar com o WhatsApp por fora, ou pela conta de outra pessoa, não acelera nem muda a decisão. Ninguém de fora bane ou desbane: só o WhatsApp.', 'Escribir a WhatsApp por fuera, o desde la cuenta de otra persona, no acelera ni cambia la decisión. Nadie de afuera suspende o levanta la suspensión: solo WhatsApp.'],
        ['Conta banida perde o Meta Verified automaticamente.', 'La cuenta suspendida pierde Meta Verified automáticamente.']]],
      ['caixa', 'Selo removido não é restrição', 'Quitar la insignia no es restricción', 'Se só o selo de verificado sumiu, a conta segue normal (sem limite de conversas), a assinatura do Meta One continua ativa e cobrada, e saem só os benefícios que pedem conta verificada. O WhatsApp pode pedir documento e selfie. Mais na aula 07.', 'Si solo desapareció la insignia de verificado, la cuenta sigue normal (sin límite de chats), la suscripción de Meta One sigue activa y se cobra, y solo se pierden los beneficios que piden cuenta verificada. WhatsApp puede pedir documento y selfie. Más en la clase 07.'],
      ['nota', 'Plataforma (API) tem regras de banimento próprias, na documentação para desenvolvedores. As telas de restrição e de banimento não aparecem na prática: não dá para vê-las sem uma conta nessa situação.', 'La Plataforma (API) tiene reglas propias, en la documentación para desarrolladores. Las pantallas de restricción y suspensión no aparecen en la práctica: no se pueden ver sin una cuenta en esa situación.']
    ],
    praticar: {
      intro: N.T('Onde estão, dentro do app, as respostas oficiais sobre banimento e o Fale conosco.', 'Dónde están, dentro de la app, las respuestas oficiales sobre suspensión y el Contáctanos.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Toque no WA Business.', 'Toca WA Business.'], true),
        P(cel('conversas'), 'cel-aba-ferramentas', ['Ferramentas', 'Herramientas'], ['Toque na aba Ferramentas.', 'Toca la pestaña Herramientas.'], true),
        P(cel('ferramentas'), 'cel-ferr-central', ['Central de Ajuda', 'Servicio de ayuda'], ['Lá embaixo, em Gerencie sua conta, toque em Central de Ajuda.', 'Abajo, en Administra tu cuenta, toca Servicio de ayuda.'], true),
        P(cel('central'), 'cel-central-contas', ['O tópico certo', 'El tema correcto'], ['Toque em <b>Contas e banimento de contas</b>.', 'Toca <b>Cuentas y suspensión de cuentas</b>.'], true),
        P(cel('central2'), 'cel-banimento-lista', ['Artigos oficiais', 'Artículos oficiales'], ['Aqui estão os artigos oficiais, inclusive o do <b>app WhatsApp Business</b> e o da <b>Plataforma</b>, que são diferentes. Mande o certo para a cliente.', 'Aquí están los artículos oficiales, incluido el de la <b>app WhatsApp Business</b> y el de la <b>Plataforma</b>, que son distintos. Envía el correcto a la clienta.']),
        P(cel('central'), 'cel-fale', ['Fale conosco', 'Contáctanos'], ['De volta à Central de Ajuda: no fim da tela fica o Fale conosco. Toque nele.', 'De vuelta en el Servicio de ayuda: al final de la pantalla está Contáctanos. Tócalo.'], true),
        P(cel('faleconosco'), 'cel-fale-ia', ['Suporte Oficial', 'Soporte oficial'], ['Hoje o Fale conosco abre uma conversa com o Suporte Oficial do WhatsApp, e as respostas podem ser geradas por IA. Para banimento, o caminho é o <b>Pedir análise</b> da tela de banimento; o Fale conosco não acelera a análise.', 'Hoy Contáctanos abre un chat con el Soporte oficial de WhatsApp, y las respuestas pueden generarse con IA. Para una suspensión, el camino es <b>Solicitar revisión</b> en la pantalla de suspensión; Contáctanos no acelera la revisión.'])
      ]
    },
    quiz: [
      Q(['Na tela aparece “Sua conta está restrita no momento”. O que orientar?', 'En pantalla aparece “Tu cuenta está restringida”. ¿Qué orientar?'], 3,
        [['Pedir análise para tirar a restrição', 'Solicitar revisión para quitar la restricción'], ['Apagar o app e cadastrar de novo', 'Borrar la app y registrarse otra vez'], ['Escrever ao suporte de outro número', 'Escribir a soporte desde otro número'], ['Esperar: sai sozinha no prazo', 'Esperar: se quita sola en el plazo']],
        [['“Pedir análise” é do banimento, não da restrição.', '“Solicitar revisión” es de la suspensión, no de la restricción.'], ['Recadastrar não tira a restrição.', 'Registrarse de nuevo no quita la restricción.'], ['Contato por fora não muda nada.', 'El contacto por fuera no cambia nada.'], ['A restrição termina sozinha e chega uma notificação.', 'La restricción termina sola y llega una notificación.']]),
      Q(['Como a cliente vê quanto tempo falta de restrição?', '¿Cómo ve la clienta cuánto falta de la restricción?'], 0,
        [['Nova conversa com um contato novo', 'Nuevo chat con un contacto nuevo'], ['Em Configurações › Conta › Status da conta', 'En Ajustes › Cuenta › Estado'], ['No e-mail que o WhatsApp envia', 'En el correo que envía WhatsApp'], ['Na Central de Ajuda, pelo número', 'En el Servicio de ayuda, con el número']],
        [['Ao escolher alguém com quem nunca conversou, aparece o prazo.', 'Al elegir a alguien con quien nunca habló, aparece el plazo.'], ['Essa opção não existe na tela de Conta.', 'Esa opción no existe en la pantalla de Cuenta.'], ['A Central não fala em e-mail com o prazo.', 'El Servicio de ayuda no habla de un correo con el plazo.'], ['A Central de Ajuda não consulta contas.', 'El Servicio de ayuda no consulta cuentas.']]),
      Q(['A conta foi banida e não aparece o botão “Pedir análise”. O que isso quer dizer?', 'La cuenta fue suspendida y no aparece “Solicitar revisión”. ¿Qué significa?'], 2,
        [['Que o botão aparece depois de 24 horas', 'Que el botón aparece después de 24 horas'], ['Que um parceiro pode cancelar o banimento', 'Que un socio puede levantar la suspensión'], ['Que o banimento é definitivo', 'Que la suspensión es definitiva'], ['Que dá para contestar pela conta de outra pessoa', 'Que se puede apelar desde la cuenta de otra persona']],
        [['As 24 horas são o prazo da maioria das análises, não do botão.', 'Las 24 horas son el plazo de la mayoría de las revisiones, no del botón.'], ['Só o WhatsApp bane ou desbane.', 'Solo WhatsApp suspende o levanta la suspensión.'], ['Sem o botão, não há contestação.', 'Sin el botón, no hay apelación.'], ['Usar a conta de outra pessoa não influencia a decisão.', 'Usar la cuenta de otra persona no influye en la decisión.']]),
      Q(['Com a conta restrita, o que a Marina ainda consegue fazer?', 'Con la cuenta restringida, ¿qué puede hacer todavía Marina?'], 1,
        [['Criar um grupo para avisar os clientes', 'Crear un grupo para avisar a los clientes'], ['Responder quem já conversava com ela', 'Responder a quien ya hablaba con ella'], ['Atender pelo WhatsApp Web normalmente', 'Atender por WhatsApp Web normalmente'], ['Chamar contatos novos para vender', 'Escribir a contactos nuevos para vender']],
        [['Criar grupos fica bloqueado.', 'Crear grupos queda bloqueado.'], ['Conversas com quem já interagia continuam.', 'Los chats con quien ya interactuaba siguen.'], ['Dispositivos conectados não funcionam na restrição.', 'Los dispositivos vinculados no funcionan con restricción.'], ['Contato novo é justamente o que fica travado.', 'El contacto nuevo es justamente lo que queda bloqueado.']]),
      Q(['Uma empresa oferece “desbanir” a conta da cliente por um valor. O que dizer?', 'Una empresa ofrece “quitar la suspensión” de la cuenta por un pago. ¿Qué decir?'], 3,
        [['Que funciona se for parceiro oficial', 'Que funciona si es socio oficial'], ['Que funciona só para contas restritas', 'Que funciona solo para cuentas restringidas'], ['Que vale a pena se a análise demorar', 'Que vale la pena si la revisión tarda'], ['Que só o WhatsApp bane ou desbane', 'Que solo WhatsApp suspende o la levanta']],
        [['Nem parceiro oficial cancela banimento.', 'Ni un socio oficial levanta una suspensión.'], ['Restrição sai sozinha; ninguém de fora tira.', 'La restricción se quita sola; nadie de afuera la quita.'], ['Pagar terceiros não muda a decisão.', 'Pagar a terceros no cambia la decisión.'], ['Serviços de terceiros não banem nem desbanem contas.', 'Los servicios de terceros no suspenden ni levantan suspensiones.']])
    ],
    fontes: [N.F('https://faq.whatsapp.com/723378546580115', ['Sobre o banimento de contas no app WhatsApp Business', 'Sobre la suspensión de cuentas en la app WhatsApp Business']), N.F('https://faq.whatsapp.com/717472490411581', ['Sobre contas restritas', 'Sobre cuentas restringidas'])],
    telas: N.T('Telas reais: Central de ajuda do app e Fale conosco (Android), vistas em 28/10/2026. As telas de restrição e de banimento não foram vistas: os textos delas são os da Central de Ajuda.', 'Pantallas reales: Servicio de ayuda de la app y Contáctanos (Android), vistas el 28/10/2026. Las pantallas de restricción y suspensión no se vieron: sus textos son los del Servicio de ayuda.')
  };
})();
