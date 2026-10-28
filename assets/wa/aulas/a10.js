/* Aula 10 · Carrinho, pedido e Pix.
   Fonte lida em 28/10/2026: faq.whatsapp.com/1184376605821468 (carrinho). Telas reais (25–26/10/2026): conversa com "Pedido feito via catálogo",
   Pedido (ACEITAR PEDIDO), Atualizar status, Configurações do catálogo (botão Adicionar ao carrinho), Pix (Solicitar pagamento).
   Pix e Cobrar cliente não têm página oficial achada: só o que a tela mostra. */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  N.AULAS['10'] = {
    min: 8,
    objetivo: N.T('Mostrar que pedido de carrinho só vale depois de aceito, como atualizar o status e o que conferir quando o cliente não consegue comprar.', 'Mostrar que un pedido de carrito solo vale después de aceptado, cómo actualizar el estado y qué revisar cuando el cliente no puede comprar.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Bia mandou um carrinho com duas peças pelo catálogo da loja.', '<b>Dónde estamos:</b> Bia envió un carrito con dos piezas desde el catálogo de la tienda.'],
      ['m', 'A cliente diz que mandou o pedido ontem e não teve resposta. Eu achei que o WhatsApp confirmava sozinho!', 'La clienta dice que mandó el pedido ayer y no tuvo respuesta. ¡Pensé que WhatsApp lo confirmaba solo!'],
      ['r', 'Não confirma: o carrinho chega como mensagem, “Pedido feito via catálogo”. Quem confirma é a loja, em Mostrar pedido › <b>ACEITAR PEDIDO</b>. Aí a cliente é avisada.', 'No lo confirma: el carrito llega como mensaje, “Pedido hecho desde el catálogo”. Quien confirma es la tienda, en Ver pedido › <b>ACEPTAR PEDIDO</b>. Ahí la clienta recibe el aviso.'],
      ['m', 'E outra cliente diz que nem aparece o botão de pôr no carrinho.', 'Y otra clienta dice que ni aparece el botón para agregar al carrito.'],
      ['r', 'Confira em Catálogo › ⋮ › Configurações do catálogo se “Mostrar o botão Adicionar ao carrinho” está ligado.', 'Revisa en Catálogo › ⋮ › Ajustes del catálogo si “Mostrar el botón Agregar al carrito” está activado.'],
      ['dica', 'Depois de aceitar, use <b>Atualizar status</b>: Preparando para o envio, Enviado, Entregue… A cliente vê cada mudança na conversa.', 'Después de aceptar, usa <b>Actualizar estado</b>: Preparando el envío, Enviado, Entregado… La clienta ve cada cambio en el chat.']
    ]),
    verDePerto: [
      ['h', 'O caminho do pedido', 'El camino del pedido'],
      ['ol', [
        ['A cliente toca no botão de compras (ao lado do nome da loja, na conversa ou no perfil), escolhe no catálogo e monta o carrinho.', 'La clienta toca el botón de compras (junto al nombre de la tienda, en el chat o en el perfil), elige en el catálogo y arma el carrito.'],
        ['Ela envia o carrinho: chega à loja como “Pedido feito via catálogo”, com itens e subtotal.', 'Envía el carrito: llega a la tienda como “Pedido hecho desde el catálogo”, con artículos y subtotal.'],
        ['A loja abre <b>Mostrar pedido</b>, pode somar desconto, frete ou imposto e toca em <b>ACEITAR PEDIDO</b>. “O cliente recebe uma notificação quando você aceita o pedido.”', 'La tienda abre <b>Ver pedido</b>, puede sumar descuento, envío o impuesto y toca <b>ACEPTAR PEDIDO</b>. El cliente recibe una notificación al aceptarlo.'],
        ['Na conversa aparece a cobrança, com <b>Atualizar status</b>: Pagamento pedido, Preparando para o envio, Enviado, Entregue, Concluído ou Cancelado, e um recado opcional.', 'En el chat aparece el cobro, con <b>Actualizar estado</b>: Pago solicitado, Preparando el envío, Enviado, Entregado, Completado o Cancelado, y una nota opcional.']]],
      ['h', 'Quando não dá para comprar', 'Cuando no se puede comprar'],
      ['ul', [
        ['Botão de carrinho desligado: Catálogo › ⋮ › Configurações do catálogo › “Mostrar o botão Adicionar ao carrinho”. Desligar não afeta carrinhos que já existem.', 'Botón de carrito desactivado: Catálogo › ⋮ › Ajustes del catálogo › “Mostrar el botón Agregar al carrito”. Desactivarlo no afecta carritos existentes.'],
        ['Item em análise, recusado ou oculto não aparece para a cliente (aula 08).', 'Un artículo en revisión, rechazado u oculto no aparece a la clienta (clase 08).']]],
      ['caixa', 'Pix na conversa (visto no app)', 'Pix en el chat (visto en la app)', 'Anexar › Pix › “Solicitar pagamento”: a cliente copia a chave ou o código Pix e paga no app do banco. No teste de 25/10, o campo de valor <b>não aceitou vírgula</b> (39,90 virou 3990); com ponto (39.90) deu certo. Não achamos página oficial sobre o Pix no WhatsApp: vale o que a tela mostra.', 'Adjuntar › Pix › “Solicitar pago”: la clienta copia la clave o el código Pix y paga en la app del banco. En la prueba del 25/10, el campo de valor <b>no aceptó coma</b> (39,90 se volvió 3990); con punto (39.90) funcionó. No encontramos página oficial sobre Pix en WhatsApp: vale lo que muestra la pantalla.']
    ],
    praticar: {
      intro: N.T('Aceitar o pedido da Bia e avisar que está sendo preparado.', 'Aceptar el pedido de Bia y avisar que se está preparando.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Toque no WA Business.', 'Toca WA Business.'], true),
        P(cel('conversas'), 'cel-conv-bia', ['A conversa', 'El chat'], ['Toque na conversa da Bia.', 'Toca el chat de Bia.'], true),
        P(cel('conv'), 'cel-conv-pedido', ['O carrinho', 'El carrito'], ['O carrinho chegou como mensagem. Ainda não é um pedido aceito: a loja precisa confirmar.', 'El carrito llegó como mensaje. Todavía no es un pedido aceptado: la tienda debe confirmarlo.']),
        P(cel('conv'), 'cel-conv-mostrar', ['Mostrar pedido', 'Ver pedido'], ['Toque em Mostrar pedido.', 'Toca Ver pedido.'], true),
        P(cel('pedido'), 'cel-pedido-aviso', ['Antes de aceitar', 'Antes de aceptar'], ['Aqui dá para somar desconto, frete ou imposto. Ao aceitar, a cliente recebe uma notificação.', 'Aquí se puede sumar descuento, envío o impuesto. Al aceptar, la clienta recibe una notificación.']),
        P(cel('pedido'), 'cel-pedido-aceitar', ['Aceitar', 'Aceptar'], ['Toque em ACEITAR PEDIDO.', 'Toca ACEPTAR PEDIDO.'], true),
        P(cel('conv', { pedido: 'aceito' }), 'cel-conv-atualizar', ['A cobrança', 'El cobro'], ['Virou cobrança na conversa. Toque em Atualizar status.', 'Se convirtió en cobro en el chat. Toca Actualizar estado.'], true),
        P(cel('status', { pedido: 'aceito' }), 'cel-status-preparando', ['O status', 'El estado'], ['Escolha “Preparando para o envio”.', 'Elige “Preparando el envío”.'], true),
        P(cel('status', { pedido: 'aceito', st: 1 }), 'cel-status-enviar', ['Enviar', 'Enviar'], ['Toque em ENVIAR ATUALIZAÇÃO.', 'Toca ENVIAR ACTUALIZACIÓN.'], true),
        P(cel('conv', { pedido: 'status', st: 1 }), 'cel-conv-cobranca', ['Pronto!', '¡Listo!'], ['A Bia vê o status na conversa. Quem reclama de “pedido sem resposta” quase sempre tem um carrinho esperando o ACEITAR.', 'Bia ve el estado en el chat. Quien reclama por un “pedido sin respuesta” casi siempre tiene un carrito esperando el ACEPTAR.'])
      ]
    },
    quiz: [
      Q(['A cliente mandou o carrinho e a loja não fez nada. O pedido está confirmado?', 'La clienta envió el carrito y la tienda no hizo nada. ¿El pedido está confirmado?'], 1,
        [['Sim: o WhatsApp confirma ao enviar', 'Sí: WhatsApp confirma al enviar'], ['Não: falta a loja aceitar', 'No: falta que la tienda acepte'], ['Sim: depois de 24 horas sem resposta', 'Sí: después de 24 horas sin respuesta'], ['Não: o carrinho expira em 1 hora', 'No: el carrito vence en 1 hora']],
        [['O WhatsApp só entrega o carrinho como mensagem.', 'WhatsApp solo entrega el carrito como mensaje.'], ['A loja confirma em ACEITAR PEDIDO, e aí a cliente é notificada.', 'La tienda confirma en ACEPTAR PEDIDO, y ahí se notifica a la clienta.'], ['Não há confirmação automática por tempo.', 'No hay confirmación automática por tiempo.'], ['A tela não fala em prazo para o carrinho.', 'La pantalla no habla de plazo para el carrito.']]),
      Q(['A cliente não vê o botão de adicionar ao carrinho. O que conferir na loja?', 'La clienta no ve el botón para agregar al carrito. ¿Qué revisar en la tienda?'], 3,
        [['Se a loja tem Meta Verified ativo', 'Si la tienda tiene Meta Verified activo'], ['Se a mensagem de saudação está ligada', 'Si el mensaje de bienvenida está activado'], ['Se o Pix da loja tem chave cadastrada', 'Si el Pix de la tienda tiene clave registrada'], ['A chave do carrinho no catálogo', 'El interruptor del carrito en el catálogo']],
        [['Carrinho não depende de Meta Verified.', 'El carrito no depende de Meta Verified.'], ['Saudação não mexe no catálogo.', 'La bienvenida no toca el catálogo.'], ['Pix não liga nem desliga o carrinho.', 'Pix no activa ni desactiva el carrito.'], ['“Mostrar o botão Adicionar ao carrinho”, em Configurações do catálogo.', '“Mostrar el botón Agregar al carrito”, en Ajustes del catálogo.']]),
      Q(['A loja desligou o botão de carrinho. E os carrinhos que já estavam montados?', 'La tienda desactivó el botón del carrito. ¿Y los carritos que ya estaban armados?'], 0,
        [['Continuam como estavam', 'Siguen como estaban'], ['São apagados na hora', 'Se eliminan en el acto'], ['Viram pedidos aceitos', 'Se vuelven pedidos aceptados'], ['Voltam vazios para o cliente', 'Vuelven vacíos al cliente']],
        [['“Os carrinhos existentes não serão afetados ao desativar essa opção.”', '“Los carritos existentes no se verán afectados al desactivar esta opción.”'], ['A tela diz o contrário.', 'La pantalla dice lo contrario.'], ['Aceitar é sempre ação da loja.', 'Aceptar es siempre acción de la tienda.'], ['Não são afetados.', 'No se ven afectados.']]),
      Q(['Como a loja avisa a cliente que o pedido saiu para entrega?', '¿Cómo avisa la tienda a la clienta que el pedido salió a entrega?'], 2,
        [['Editando o item no catálogo da loja', 'Editando el artículo en el catálogo'], ['Mandando o carrinho de volta', 'Enviando el carrito de vuelta'], ['Em Atualizar status › Enviado', 'En Actualizar estado › Enviado'], ['Em Configurações › Conta', 'En Ajustes › Herramientas para empresas']],
        [['O catálogo não guarda status de pedido.', 'El catálogo no guarda el estado del pedido.'], ['Não existe devolver o carrinho.', 'No existe devolver el carrito.'], ['O status aparece para a cliente na conversa.', 'El estado aparece para la clienta en el chat.'], ['Conta não tem pedidos.', 'Cuenta no tiene pedidos.']]),
      Q(['A loja pediu Pix de “39,90” e a cliente recebeu R$ 3.990. O que houve?', 'La tienda pidió un Pix de “39,90” y la clienta recibió R$ 3.990. ¿Qué pasó?'], 1,
        [['A cliente digitou o valor errado no banco', 'La clienta escribió mal el valor en el banco'], ['O campo de valor não aceitou a vírgula', 'El campo de valor no aceptó la coma'], ['O WhatsApp somou frete e imposto', 'WhatsApp sumó envío e impuesto'], ['O Pix converte o valor para centavos', 'El Pix convierte el valor a centavos']],
        [['O valor veio da solicitação da loja.', 'El valor vino de la solicitud de la tienda.'], ['No teste de 25/10, 39,90 virou 3990; com ponto (39.90) deu certo.', 'En la prueba del 25/10, 39,90 se volvió 3990; con punto (39.90) funcionó.'], ['Pix avulso não soma frete nem imposto.', 'El Pix suelto no suma envío ni impuesto.'], ['Não é conversão: a vírgula foi ignorada.', 'No es conversión: se ignoró la coma.']])
    ],
    fontes: [N.F('https://faq.whatsapp.com/1184376605821468', ['Sobre o recurso carrinho', 'Sobre la función carrito']), N.F('https://faq.whatsapp.com/5495780857144067', ['Como fazer um pedido usando o carrinho', 'Cómo hacer un pedido con el carrito'], '25/10/2026')],
    telas: N.T('Telas reais (Android, 25–26/10/2026): conversa com o pedido, Pedido, Atualizar status, Configurações do catálogo e Pix. Os nomes e valores da prática são de exemplo.', 'Pantallas reales (Android, 25–26/10/2026): chat con el pedido, Pedido, Actualizar estado, Ajustes del catálogo y Pix. Los nombres y valores de la práctica son de ejemplo.')
  };
})();
