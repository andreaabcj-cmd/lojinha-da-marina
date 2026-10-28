/* Aula 11 · Mensagem automática não sai.
   Fontes lidas em 28/10/2026: faq.whatsapp.com/501866148528310 (saudação: seção "A mensagem de saudação não está sendo enviada")
   e /2565868990219715 (ausência). Telas reais (25–26/10/2026): Mensagem de saudação e Mensagem de ausência. */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  var SOMENTE = N.T('Somente…', 'Solo…');
  N.AULAS['11'] = {
    min: 7,
    objetivo: N.T('Achar o motivo de a saudação ou a ausência não chegar, seguindo a lista oficial de checagem.', 'Encontrar por qué la bienvenida o la ausencia no llegan, siguiendo la lista oficial de revisión.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina ligou a mensagem de saudação na semana passada.', '<b>Dónde estamos:</b> Marina activó el mensaje de bienvenida la semana pasada.'],
      ['m', 'Liguei a saudação, mas a cliente que me escreveu hoje não recebeu nada!', '¡Activé la bienvenida, pero la clienta que me escribió hoy no recibió nada!'],
      ['r', 'Ela já tinha conversado com você nos últimos 14 dias?', '¿Ya había hablado contigo en los últimos 14 días?'],
      ['m', 'Falou ontem, sobre frete.', 'Habló ayer, sobre el envío.'],
      ['r', 'Então está certo: a saudação vai na primeira mensagem ou depois de 14 dias sem conversa. Mas vamos conferir os destinatários também: se estiver em “Somente…”, só vai para quem você escolheu.', 'Entonces está bien: la bienvenida va en el primer mensaje o después de 14 días sin chatear. Pero revisemos los destinatarios también: si está en “Solo…”, solo va a quienes elegiste.'],
      ['dica', 'Agente de IA (Meta Business Agent) ligado <b>desliga</b> a saudação e a ausência.', 'Con el agente de IA (Meta Business Agent) activado, la bienvenida y la ausencia <b>se desactivan</b>.']
    ]),
    verDePerto: [
      ['h', 'A saudação não sai: a lista oficial', 'La bienvenida no sale: la lista oficial'],
      ['ol', [
        ['<b>Meta Business Agent ligado?</b> Com ele conectado, a saudação fica desativada. Para voltar a usar a saudação, é preciso apagar o agente.', '<b>¿Meta Business Agent activado?</b> Con él conectado, la bienvenida queda desactivada. Para volver a usarla, hay que eliminar el agente.'],
        ['<b>Destinatários:</b> Todos · Todos, exceto meus contatos · Todos, exceto… · Somente…. Os dois últimos podem deixar clientes de fora.', '<b>Destinatarios:</b> Todos · Todos, excepto mis contactos · Todos, excepto… · Solo…. Los dos últimos pueden dejar clientes fuera.'],
        ['<b>Regra dos 14 dias:</b> só vai na primeira mensagem ou depois de 14 dias sem conversa.', '<b>Regla de los 14 días:</b> solo va en el primer mensaje o tras 14 días sin chatear.'],
        ['<b>Desligar e ligar</b> de novo (Ferramentas › Mensagem de saudação).', '<b>Desactivar y volver a activar</b> (Herramientas › Mensaje de bienvenida).'],
        ['<b>Atualizar</b> o app e <b>reiniciar</b> o aparelho.', '<b>Actualizar</b> la app y <b>reiniciar</b> el equipo.'],
        ['E sempre: o celular precisa estar <b>conectado à internet</b> para mandar.', 'Y siempre: el celular necesita estar <b>conectado a internet</b> para enviar.']]],
      ['h', 'Ausência', 'Ausencia'],
      ['ul', [
        ['Horário: Enviar sempre · Horário programado · <b>Fora do horário de atendimento</b>.', 'Horario: Enviar siempre · Horario programado · <b>Fuera del horario de atención</b>.'],
        ['“Fora do horário de atendimento” <b>só aparece</b> se o horário estiver definido no perfil comercial.', '“Fuera del horario de atención” <b>solo aparece</b> si el horario está definido en el perfil comercial.'],
        ['Mesmos destinatários e mesma regra de internet da saudação.', 'Mismos destinatarios y misma regla de internet que la bienvenida.']]]
    ],
    praticar: {
      intro: N.T('A saudação da Marina está com um detalhe nos destinatários.', 'La bienvenida de Marina tiene un detalle en los destinatarios.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Toque no WA Business.', 'Toca WA Business.'], true),
        P(cel('conversas'), 'cel-aba-ferramentas', ['Ferramentas', 'Herramientas'], ['Toque na aba Ferramentas.', 'Toca la pestaña Herramientas.'], true),
        P(cel('ferramentas'), 'cel-ferr-saudacao', ['Saudação', 'Bienvenida'], ['Em Organize suas conversas, toque em Mensagem de saudação.', 'En Organiza tus chats, toca Mensaje de bienvenida.'], true),
        P(cel('saudacao', { saudDest: SOMENTE }), 'cel-saud-chave', ['A regra', 'La regla'], ['Está ligada. A própria tela explica: vai na primeira mensagem ou depois de 14 dias de inatividade. Quem escreveu ontem não recebe de novo.', 'Está activada. La propia pantalla lo explica: va en el primer mensaje o tras 14 días de inactividad. Quien escribió ayer no la recibe de nuevo.']),
        P(cel('saudacao', { saudDest: SOMENTE }), 'cel-saud-dest', ['Achamos!', '¡Lo encontramos!'], ['Destinatários: <b>Somente…</b>. A saudação só vai para os contatos escolhidos. Para todo cliente novo receber, o certo é “Todos”.', 'Destinatarios: <b>Solo…</b>. La bienvenida solo va a los contactos elegidos. Para que todo cliente nuevo la reciba, lo correcto es “Todos”.']),
        P(cel('saudacao', { saudDest: SOMENTE }), 'cel-saud-internet', ['Internet', 'Internet'], ['E o aviso de sempre: sem internet no celular, a saudação não sai.', 'Y el aviso de siempre: sin internet en el celular, la bienvenida no sale.']),
        P(cel('ferramentas'), 'cel-ferr-ausencia', ['Ausência', 'Ausencia'], ['Agora a ausência. Toque em Mensagem de ausência.', 'Ahora la ausencia. Toca Mensaje de ausencia.'], true),
        P(cel('ausencia'), 'cel-aus-horario', ['Pronto!', '¡Listo!'], ['Três horários. “Fora do horário de atendimento” só aparece com o horário preenchido no perfil: se a cliente não acha essa opção, é isso.', 'Tres horarios. “Fuera del horario de atención” solo aparece con el horario cargado en el perfil: si la clienta no encuentra esa opción, es eso.'])
      ]
    },
    quiz: [
      Q(['A cliente escreveu ontem e escreveu de novo hoje. Hoje não veio saudação. Por quê?', 'La clienta escribió ayer y volvió a escribir hoy. Hoy no llegó la bienvenida. ¿Por qué?'], 2,
        [['Porque a saudação só sai de manhã', 'Porque la bienvenida solo sale de mañana'], ['Porque a cliente bloqueou a loja', 'Porque la clienta bloqueó a la tienda'], ['Por causa da regra dos 14 dias', 'Por la regla de los 14 días'], ['Porque a saudação está com defeito', 'Porque la bienvenida tiene una falla']],
        [['Não há horário para a saudação.', 'No hay horario para la bienvenida.'], ['Bloqueio impediria a conversa toda.', 'Un bloqueo impediría todo el chat.'], ['Regra dos 14 dias: só na primeira mensagem ou depois de 14 dias.', 'Regla de los 14 días: solo en el primer mensaje o tras 14 días.'], ['Está funcionando como a regra manda.', 'Está funcionando como manda la regla.']]),
      Q(['A loja ligou o Meta Business Agent e a saudação parou. O que explicar?', 'La tienda activó Meta Business Agent y la bienvenida dejó de salir. ¿Qué explicar?'], 0,
        [['O agente ligado desliga a saudação', 'El agente activado apaga la bienvenida'], ['O agente manda a saudação mais tarde', 'El agente envía la bienvenida más tarde'], ['É preciso reinstalar o app', 'Hay que reinstalar la app del celular'], ['A saudação vai só para contatos salvos', 'La bienvenida va solo a contactos guardados']],
        [['A Central diz que a saudação fica desativada com o agente conectado.', 'El Servicio de ayuda dice que la bienvenida queda desactivada con el agente conectado.'], ['Não existe esse atraso.', 'No existe ese retraso.'], ['Reinstalar não resolve.', 'Reinstalar no lo resuelve.'], ['Isso seria configuração de destinatários.', 'Eso sería configuración de destinatarios.']]),
      Q(['A cliente não acha a opção “Fora do horário de atendimento” na ausência. Por quê?', 'La clienta no encuentra “Fuera del horario de atención” en la ausencia. ¿Por qué?'], 3,
        [['Porque é um recurso pago do Meta One', 'Porque es una función paga de Meta One'], ['Porque só existe no iPhone', 'Porque solo existe en iPhone'], ['Porque a ausência está desligada', 'Porque la ausencia está desactivada'], ['Porque falta o horário no perfil', 'Porque falta el horario en el perfil']],
        [['Não é pago.', 'No es pago.'], ['Existe no Android também.', 'Existe en Android también.'], ['Mesmo ligada, a opção depende do horário no perfil.', 'Aun activada, la opción depende del horario en el perfil.'], ['Só aparece com o horário de atendimento definido no perfil.', 'Solo aparece con el horario de atención definido en el perfil.']]),
      Q(['Saudação em “Somente…”. Quem recebe?', 'Bienvenida en “Solo…”. ¿Quién la recibe?'], 1,
        [['Todo mundo, menos quem já é contato', 'Todos, menos los que ya son contactos'], ['Só os contatos que a loja escolheu', 'Solo los contactos que eligió la tienda'], ['Só quem nunca escreveu para a loja', 'Solo quien nunca le escribió a la tienda'], ['Ninguém: a opção desliga a saudação', 'Nadie: la opción apaga la bienvenida']],
        [['Isso é “Todos, exceto meus contatos”.', 'Eso es “Todos, excepto mis contactos”.'], ['“Somente…” manda só para os escolhidos.', '“Solo…” envía solo a los elegidos.'], ['Isso é a regra dos 14 dias, não o destinatário.', 'Eso es la regla de los 14 días, no el destinatario.'], ['A saudação continua ligada para os escolhidos.', 'La bienvenida sigue activada para los elegidos.']]),
      Q(['Tudo certo nas configurações e a saudação ainda falha às vezes. Qual a dica oficial?', 'Todo bien en los ajustes y la bienvenida aún falla a veces. ¿Cuál es el consejo oficial?'], 2,
        [['Mudar o texto todo dia', 'Cambiar el texto cada día'], ['Ligar o Meta Business Agent', 'Activar Meta Business Agent'], ['Conferir a internet do celular', 'Revisar la internet del celular'], ['Trocar o nome comercial da loja', 'Cambiar el nombre comercial de la tienda']],
        [['O texto não interfere no envio.', 'El texto no interfiere en el envío.'], ['O agente desliga a saudação.', 'El agente apaga la bienvenida.'], ['Sem internet no celular, a saudação não sai; depois, desligar e ligar, atualizar e reiniciar.', 'Sin internet en el celular, la bienvenida no sale; luego, desactivar y activar, actualizar y reiniciar.'], ['Nome não tem relação.', 'El nombre no tiene relación.']])
    ],
    fontes: [N.F('https://faq.whatsapp.com/501866148528310', ['Como usar as mensagens de saudação', 'Cómo usar los mensajes de bienvenida']), N.F('https://faq.whatsapp.com/2565868990219715', ['Como usar as mensagens de ausência', 'Cómo usar los mensajes de ausencia'])],
    telas: N.T('Telas reais: Mensagem de saudação e Mensagem de ausência (Android, 25–26/10/2026). O “Somente…” da prática é o cenário do problema.', 'Pantallas reales: Mensaje de bienvenida y Mensaje de ausencia (Android, 25–26/10/2026). El “Solo…” de la práctica es el escenario del problema.')
  };
})();
