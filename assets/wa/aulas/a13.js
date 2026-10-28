/* Aula 13 · Anúncio para o WhatsApp e transmissão comercial.
   Fontes lidas em 28/10/2026: faq.whatsapp.com/613752137263188 (gerenciar anúncios no app), /1655751878365653 (transmissões bloqueadas);
   /1356785542323967 (preço das transmissões, lida em 25/10). Telas reais (25–26/10): Turbinar perfil até "Pagar e criar anúncio";
   Listas › ⋮ › Enviar transmissão comercial até o aviso de preço. Nada foi pago nem aceito. */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  N.AULAS['13'] = {
    min: 8,
    objetivo: N.T('Orientar quem anuncia pelo app e quem usa transmissão comercial: o que dá para fazer no celular, o que é pago e o que acontece com spam.', 'Orientar a quien anuncia desde la app y a quien usa difusión comercial: qué se puede hacer en el celular, qué se paga y qué pasa con el spam.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina fez um anúncio pelo app e mandou uma transmissão para a lista “Novo pedido”.', '<b>Dónde estamos:</b> Marina hizo un anuncio desde la app y envió una difusión a la lista “Nuevo pedido”.'],
      ['m', 'Quero apagar o anúncio que está rodando, mas não aparece Apagar.', 'Quiero eliminar el anuncio que está activo, pero no aparece Eliminar.'],
      ['r', 'Anúncio em veiculação não se apaga: pause primeiro. Apagar só vale para anúncio em análise, não veiculado ou rejeitado. E apagar não cancela o que já foi gasto.', 'Un anuncio activo no se elimina: primero ponlo en pausa. Eliminar solo vale para anuncios en revisión, no publicados o rechazados. Y eliminar no cancela lo ya gastado.'],
      ['m', 'E agora não consigo mandar transmissão. Diz que está suspensa!', 'Y ahora no puedo enviar difusiones. ¡Dice que está suspendida!'],
      ['r', 'Muita gente bloqueou ou denunciou as mensagens. A suspensão é de 3 dias, volta sozinha na data que o app mostra e <b>não tem recurso</b>. Daqui para a frente, só para quem aceitou receber.', 'Mucha gente bloqueó o denunció los mensajes. La suspensión es de 3 días, vuelve sola en la fecha que muestra la app y <b>no tiene apelación</b>. De ahora en adelante, solo a quien aceptó recibirlos.'],
      ['dica', 'Gerenciar anúncios pelo app (editar, pausar) é <b>só no Android</b>, em regiões selecionadas.', 'Administrar anuncios desde la app (editar, pausar) es <b>solo en Android</b>, en regiones seleccionadas.']
    ]),
    verDePerto: [
      ['h', 'Anúncio pelo app', 'Anuncio desde la app'],
      ['ul', [
        ['Criar: Ferramentas › Anúncios (ou Turbinar no perfil/catálogo). Objetivo: visitar o site ou <b>enviar mensagem</b>. Conta do Facebook (ou pular), público, orçamento e “Pagar e criar anúncio”.', 'Crear: Herramientas › Anuncios (o Promocionar en el perfil/catálogo). Objetivo: visitar el sitio o <b>enviar mensaje</b>. Cuenta de Facebook (u omitir), público, presupuesto y “Pagar y crear anuncio”.'],
        ['Gerenciar anúncios no app: <b>só Android</b>, regiões selecionadas. Edita orçamento, duração e público de anúncio em veiculação (mídia às vezes não).', 'Administrar anuncios en la app: <b>solo Android</b>, regiones seleccionadas. Edita presupuesto, duración y público de un anuncio activo (los archivos a veces no).'],
        ['<b>Apagar</b>: só em análise, não veiculado ou rejeitado. Em veiculação: pausar. Apagar não cancela custos já feitos.', '<b>Eliminar</b>: solo en revisión, no publicado o rechazado. Activo: pausar. Eliminar no cancela costos ya generados.'],
        ['Anúncio <b>criado fora do WhatsApp Business</b> não se edita, pausa nem apaga no app: usar o app do Facebook ou do Instagram com a conta que tem permissão.', 'Un anuncio <b>creado fuera de WhatsApp Business</b> no se edita, pausa ni elimina en la app: usar la app de Facebook o Instagram con la cuenta que tiene permiso.'],
        ['Não dá para programar ou repetir automaticamente; terminado, <b>Recriar anúncio</b>.', 'No se puede programar ni repetir automáticamente; terminado, <b>Volver a crear anuncio</b>.']]],
      ['h', 'Transmissão comercial', 'Difusión comercial'],
      ['ul', [
        ['É paga: “Pague o mesmo preço por cada mensagem entregue” (o preço segue o código do país).', 'Es paga: “Paga el mismo precio por cada mensaje entregado” (el precio sigue el código de país).'],
        ['Pode não estar disponível ainda para a conta.', 'Puede no estar disponible todavía para la cuenta.'],
        ['Muita gente bloqueando ou denunciando → aviso; continuar → <b>suspensão de 3 dias</b>, volta sozinha, <b>sem contestação</b>. Reincidir → suspensões mais longas. Transmissões programadas no bloqueio não saem e não são cobradas.', 'Mucha gente bloqueando o denunciando → aviso; seguir → <b>suspensión de 3 días</b>, vuelve sola, <b>sin apelación</b>. Reincidir → suspensiones más largas. Difusiones programadas durante el bloqueo no salen y no se cobran.'],
        ['Prevenir: só para quem aceitou receber; tirar quem não interage; mandar o que foi combinado; não disparar logo depois de voltar.', 'Prevenir: solo a quien aceptó recibir; quitar a quien no interactúa; enviar lo acordado; no enviar justo después de volver.'],
        ['Não funciona nos dispositivos conectados (aula 06).', 'No funciona en dispositivos vinculados (clase 06).']]]
    ],
    praticar: {
      intro: N.T('O anúncio até o pagamento e a transmissão até o aviso de preço. Nada é pago.', 'El anuncio hasta el pago y la difusión hasta el aviso de precio. No se paga nada.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Toque no WA Business.', 'Toca WA Business.'], true),
        P(cel('conversas'), 'cel-aba-ferramentas', ['Ferramentas', 'Herramientas'], ['Toque na aba Ferramentas.', 'Toca la pestaña Herramientas.'], true),
        P(cel('ferramentas'), 'cel-ferr-anuncios', ['Anúncios', 'Anuncios'], ['Toque em Anúncios.', 'Toca Anuncios.'], true),
        P(cel('anuncio1'), 'cel-an-mensagem', ['O objetivo', 'El objetivo'], ['Para conversas no WhatsApp, o objetivo é “Enviem uma mensagem para você”.', 'Para chats en WhatsApp, el objetivo es “Te envíen un mensaje”.']),
        P(cel('anuncio1'), 'cel-an-avancar', ['Avançar', 'Siguiente'], ['Toque em Avançar.', 'Toca Siguiente.'], true),
        P(cel('anuncio2'), 'cel-an-conta', ['A conta do Facebook', 'La cuenta de Facebook'], ['O app pede a conta do Facebook, “para manter seus dados de pagamento seguros”. Quem não tem ou entrou na conta errada costuma travar aqui. Toque em PULAR.', 'La app pide la cuenta de Facebook, “para mantener seguros tus datos de pago”. Quien no tiene o entró con otra cuenta suele trabarse aquí. Toca OMITIR.']),
        P(cel('anuncio2'), 'cel-an-pular', ['Pular', 'Omitir'], ['Toque em PULAR.', 'Toca OMITIR.'], true),
        P(cel('anuncio3'), 'cel-an-resumo', ['O resumo', 'El resumen'], ['Público, orçamento diário e forma de pagamento. Depois de criado, editar e pausar pelo app é só no Android.', 'Público, presupuesto diario y método de pago. Una vez creado, editar y pausar desde la app es solo en Android.']),
        P(cel('anuncio3'), 'cel-an-pagar', ['Aqui paramos', 'Aquí paramos'], ['“Pagar e criar anúncio” cobra de verdade. No treino, paramos aqui.', '“Pagar y crear anuncio” cobra de verdad. En la práctica, paramos aquí.']),
        P(cel('listas'), 'cel-lista-menu', ['Transmissão', 'Difusión'], ['Agora a transmissão: em Listas, toque nos três pontinhos da lista “Novo pedido”.', 'Ahora la difusión: en Listas, toca los tres puntos de la lista “Nuevo pedido”.'], true),
        P(cel('listamenu'), 'cel-lista-transmissao', ['Enviar transmissão', 'Enviar difusión'], ['Toque em Enviar transmissão comercial.', 'Toca Enviar difusión comercial.'], true),
        P(cel('transmissao'), 'cel-trans-itens', ['Pronto!', '¡Listo!'], ['Paga por mensagem entregue. Se muita gente bloquear ou denunciar, vem a suspensão de 3 dias, sem recurso. No treino, não seguimos.', 'Se paga por mensaje entregado. Si mucha gente bloquea o denuncia, llega la suspensión de 3 días, sin apelación. En la práctica, no seguimos.'])
      ]
    },
    quiz: [
      Q(['A cliente quer apagar um anúncio que está em veiculação. O que orientar?', 'La clienta quiere eliminar un anuncio activo. ¿Qué orientar?'], 3,
        [['Apagar direto: o gasto é devolvido', 'Eliminar directo: se devuelve lo gastado'], ['Apagar pelo WhatsApp Web do computador', 'Eliminar desde WhatsApp Web en la computadora'], ['Trocar o público para ninguém ver', 'Cambiar el público para que nadie lo vea'], ['Pausar: em veiculação não se apaga', 'Pausar: activo no se elimina']],
        [['Não se apaga em veiculação, e apagar não cancela custos.', 'Activo no se elimina, y eliminar no cancela costos.'], ['Não há esse caminho.', 'No existe ese camino.'], ['Gambiarra; o certo é pausar.', 'Es un parche; lo correcto es pausar.'], ['Apagar vale só para em análise, não veiculado ou rejeitado.', 'Eliminar vale solo para en revisión, no publicado o rechazado.']]),
      Q(['Cliente com iPhone não acha onde editar o orçamento do anúncio no app. Por quê?', 'Clienta con iPhone no encuentra dónde editar el presupuesto del anuncio en la app. ¿Por qué?'], 0,
        [['Gerenciar anúncios no app é só Android', 'Administrar anuncios en la app es solo Android'], ['O orçamento só muda depois de 7 dias', 'El presupuesto solo cambia tras 7 días'], ['Precisa de Meta Verified para editar', 'Necesita Meta Verified para editar'], ['O anúncio precisa estar pausado antes', 'El anuncio debe estar en pausa antes']],
        [['“Disponível apenas para dispositivos com Android, em regiões selecionadas.”', '“Disponible solo para dispositivos Android, en regiones seleccionadas.”'], ['Não há esse prazo.', 'No existe ese plazo.'], ['Não é requisito.', 'No es requisito.'], ['Edita-se o anúncio em veiculação.', 'Se edita el anuncio activo.']]),
      Q(['A transmissão foi suspensa por 3 dias. A cliente pode contestar?', 'La difusión fue suspendida 3 días. ¿La clienta puede apelar?'], 2,
        [['Sim, pelo botão Pedir análise', 'Sí, con el botón Solicitar revisión'], ['Sim, pelo Fale conosco do app', 'Sí, por el Contáctanos de la app'], ['Não: é esperar o prazo acabar', 'No: hay que esperar el plazo'], ['Não: a suspensão é para sempre', 'No: la suspensión es para siempre']],
        [['Pedir análise é do banimento de conta.', 'Solicitar revisión es de la suspensión de cuenta.'], ['A suspensão desse recurso não tem contestação.', 'La suspensión de esta función no tiene apelación.'], ['Volta sozinha na data e hora mostradas no app.', 'Vuelve sola en la fecha y hora que muestra la app.'], ['São 3 dias; repetir pode alongar.', 'Son 3 días; repetir puede alargarla.']]),
      Q(['O anúncio foi criado no Gerenciador de Anúncios e a cliente quer pausá-lo pelo WhatsApp Business. Dá?', 'El anuncio se creó en el Administrador de anuncios y la clienta quiere pausarlo desde WhatsApp Business. ¿Se puede?'], 1,
        [['Sim, em Gerenciar anúncios', 'Sí, en Administrar anuncios'], ['Não: só onde foi criado', 'No: solo donde se creó'], ['Sim, se a Página estiver ligada', 'Sí, si la Página está vinculada'], ['Não: anúncio de lá não pausa', 'No: un anuncio de allá no se pausa']],
        [['Anúncio criado fora do WhatsApp Business não se mexe no app.', 'Un anuncio creado fuera de WhatsApp Business no se toca en la app.'], ['Usa-se o app do Facebook ou Instagram com a conta que tem permissão.', 'Se usa la app de Facebook o Instagram con la cuenta que tiene permiso.'], ['Ligar a Página não muda isso.', 'Vincular la Página no cambia eso.'], ['Pausa, sim, mas no lugar certo.', 'Sí se pausa, pero en el lugar correcto.']]),
      Q(['Como a transmissão comercial é cobrada?', '¿Cómo se cobra la difusión comercial?'], 3,
        [['Por mês, em plano fixo', 'Por mes, en plan fijo'], ['Por contato salvo na lista', 'Por contacto guardado en la lista'], ['Por clique no link enviado', 'Por clic en el enlace enviado'], ['Por mensagem entregue', 'Por mensaje entregado']],
        [['Não é assinatura.', 'No es suscripción.'], ['Cobra-se o que é entregue, não o que está na lista.', 'Se cobra lo entregado, no lo que está en la lista.'], ['Clique não é a base.', 'El clic no es la base.'], ['“Pague o mesmo preço por cada mensagem entregue.”', '“Paga el mismo precio por cada mensaje entregado.”']])
    ],
    fontes: [N.F('https://faq.whatsapp.com/613752137263188', ['Como gerenciar seus anúncios e sua conta de anúncios', 'Cómo administrar tus anuncios y tu cuenta publicitaria']), N.F('https://faq.whatsapp.com/1655751878365653', ['Por que não consigo enviar transmissões comerciais?', '¿Por qué no puedo enviar difusiones comerciales?']),
      N.F('https://faq.whatsapp.com/1356785542323967', ['Sobre os preços das transmissões comerciais', 'Sobre los precios de las difusiones comerciales'], '25/10/2026'), N.F('https://faq.whatsapp.com/512723604104492', ['Como criar anúncios no WhatsApp Business', 'Cómo crear anuncios en WhatsApp Business'], '25/10/2026')],
    telas: N.T('Telas reais (Android, 25–26/10/2026): Turbinar perfil até “Pagar e criar anúncio” e transmissão comercial até o aviso de preço. Nada pago nem aceito.', 'Pantallas reales (Android, 25–26/10/2026): Promocionar perfil hasta “Pagar y crear anuncio” y difusión comercial hasta el aviso de precio. Nada pagado ni aceptado.')
  };
})();
