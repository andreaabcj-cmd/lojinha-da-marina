/* Aula 06 · Dispositivos conectados.
   Fonte lida em 28/10/2026: faq.whatsapp.com/647349420360876. Telas reais 28/10: menu ⋮, Dispositivos conectados ("0 de 4…").
   Limites do Meta One (6, 8, 10 aparelhos) vistos na tela de planos em 25/10/2026. */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  N.AULAS['06'] = {
    min: 6,
    objetivo: N.T('Explicar quantos aparelhos a conta comercial aceita e por que um computador desconecta sozinho.', 'Explicar cuántos equipos acepta la cuenta comercial y por qué una computadora se desvincula sola.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina contratou uma ajudante, que atende pelo computador da loja.', '<b>Dónde estamos:</b> Marina contrató una ayudante, que atiende desde la computadora de la tienda.'],
      ['m', 'O WhatsApp do computador desconectou sozinho de novo! Eu viajei e deixei o celular em casa umas três semanas.', '¡El WhatsApp de la computadora se desconectó solo otra vez! Viajé y dejé el celular en casa unas tres semanas.'],
      ['r', 'Achei: os aparelhos conectados funcionam sem o celular online, mas desconectam se o app do celular ficar mais de 14 dias sem uso.', 'Lo encontré: los dispositivos vinculados funcionan sin el celular en línea, pero se desvinculan si la app del celular pasa más de 14 días sin uso.'],
      ['m', 'E dá para pôr mais um computador?', '¿Y puedo agregar otra computadora?'],
      ['r', 'Dá: são até 4 aparelhos conectados, além do celular. Para conectar, o celular lê o QR code do computador em ⋮ › Dispositivos conectados.', 'Sí: son hasta 4 dispositivos vinculados, además del celular. Para vincular, el celular lee el código QR de la computadora en ⋮ › Dispositivos vinculados.'],
      ['dica', 'Nos aparelhos conectados não dá para <b>criar ou ver listas de transmissão</b>, nem mexer em status ou localização em tempo real.', 'En los dispositivos vinculados no se pueden <b>crear ni ver listas de difusión</b>, ni manejar estados o ubicación en tiempo real.']
    ]),
    verDePerto: [
      ['h', 'As regras', 'Las reglas'],
      ['ul', [
        ['<b>Até 4 aparelhos conectados + 1 celular</b> ao mesmo tempo (WhatsApp Web, computador e outros).', '<b>Hasta 4 dispositivos vinculados + 1 celular</b> a la vez (WhatsApp Web, computadora y otros).'],
        ['Funcionam sem o celular online, mas <b>desconectam se o app do celular ficar mais de 14 dias inativo</b>.', 'Funcionan sin el celular en línea, pero <b>se desvinculan si la app del celular pasa más de 14 días inactiva</b>.'],
        ['E o próprio aparelho conectado é desconectado automaticamente depois de <b>30 dias de inatividade</b>.', 'Y el propio dispositivo vinculado se desvincula automáticamente tras <b>30 días de inactividad</b>.'],
        ['O celular continua necessário para confirmar o número e conectar aparelhos novos (lendo o QR code).', 'El celular sigue siendo necesario para confirmar el número y vincular equipos nuevos (leyendo el código QR).'],
        ['Não funcionam nos conectados: localização em tempo real, criar ou ver listas de transmissão, adicionar ou apagar status.', 'No funcionan en los vinculados: ubicación en tiempo real, crear o ver listas de difusión, agregar o eliminar estados.'],
        ['Conta restrita não usa aparelhos conectados e pode ser desconectada de alguns (aula 03).', 'Una cuenta restringida no usa dispositivos vinculados y puede ser desvinculada de algunos (clase 03).']]],
      ['caixa', 'Mais aparelhos? Só com assinatura', '¿Más equipos? Solo con suscripción', 'Na tela de planos do Meta One (vista em 25/10/2026): Avançado até 6 aparelhos, Expert até 8, Max até 10. Se a assinatura acabar ou mudar, ficam conectados só os 4 usados mais recentemente.', 'En la pantalla de planes de Meta One (vista el 25/10/2026): Avanzado hasta 6 equipos, Expert hasta 8, Max hasta 10. Si la suscripción termina o cambia, quedan vinculados solo los 4 usados más recientemente.'],
      ['nota', 'Problema conhecido (Central de Ajuda): alguns aparelhos conectados não mostram até um ano de histórico. Enquanto isso, o histórico completo fica no celular principal.', 'Problema conocido (Servicio de ayuda): algunos dispositivos vinculados no muestran hasta un año de historial. Mientras tanto, el historial completo queda en el celular principal.']
    ],
    praticar: {
      intro: N.T('Onde a Marina vê e conecta aparelhos.', 'Dónde ve y vincula equipos Marina.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Toque no WA Business.', 'Toca WA Business.'], true),
        P(cel('conversas'), 'cel-faixa-dispositivos', ['O aviso', 'El aviso'], ['O próprio app lembra: a conta comercial pode ser conectada a até 4 outros dispositivos.', 'La propia app lo recuerda: la cuenta comercial se puede vincular a hasta 4 dispositivos más.']),
        P(cel('conversas'), 'cel-menu', ['Mais opções', 'Más opciones'], ['Toque nos três pontinhos.', 'Toca los tres puntos.'], true),
        P(cel('menu'), 'cel-menu-disp', ['Dispositivos conectados', 'Dispositivos vinculados'], ['Toque em Dispositivos conectados.', 'Toca Dispositivos vinculados.'], true),
        P(cel('dispositivos', { disp: 1, dispNome: 'Windows' }), 'cel-disp-item', ['Um computador', 'Una computadora'], ['Aqui aparece cada aparelho e quando foi usado. Se a ajudante sumir com um computador, é só tocar nele e desconectar.', 'Aquí aparece cada equipo y cuándo se usó. Si la ayudante se lleva una computadora, basta tocarla y desvincularla.']),
        P(cel('dispositivos', { disp: 1, dispNome: 'Windows' }), 'cel-disp-conta', ['A conta', 'La cuenta'], ['“1 de 4”: ainda cabem mais três. Celular parado mais de 14 dias derruba os conectados.', '“1 de 4”: todavía caben tres más. Un celular sin uso más de 14 días desvincula a los demás.']),
        P(cel('dispositivos', { disp: 1, dispNome: 'Windows' }), 'cel-disp-conectar', ['Conectar', 'Vincular'], ['Toque em Conectar dispositivo.', 'Toca Vincular un dispositivo.'], true),
        P(cel('dispositivos', { disp: 1, dispNome: 'Windows' }), 'cel-disp-conectar', ['Pronto!', '¡Listo!'], ['No app de verdade, abre a câmera para ler o QR code que aparece no WhatsApp Web ou no WhatsApp do computador.', 'En la app real, se abre la cámara para leer el código QR que aparece en WhatsApp Web o en WhatsApp de la computadora.'])
      ]
    },
    quiz: [
      Q(['Quantos aparelhos a conta do app aceita, sem assinatura?', '¿Cuántos equipos acepta la cuenta de la app, sin suscripción?'], 1,
        [['2 aparelhos e o celular principal', '2 equipos y el celular principal'], ['4 aparelhos e o celular principal', '4 equipos y el celular principal'], ['10 aparelhos e o celular principal', '10 equipos y el celular principal'], ['Quantos a loja quiser conectar', 'Los que la tienda quiera vincular']],
        [['São 4, não 2.', 'Son 4, no 2.'], ['Até 4 conectados + 1 celular.', 'Hasta 4 vinculados + 1 celular.'], ['10 só no plano Max do Meta One.', '10 solo en el plan Max de Meta One.'], ['Há limite: 4 sem assinatura.', 'Hay límite: 4 sin suscripción.']]),
      Q(['O computador desconectou sozinho depois de a dona viajar 3 semanas sem o celular. Por quê?', 'La computadora se desvinculó sola después de que la dueña viajó 3 semanas sin el celular. ¿Por qué?'], 3,
        [['Porque a conta ficou restrita por spam', 'Porque la cuenta quedó restringida por spam'], ['Porque passou do limite de 4 aparelhos', 'Porque pasó el límite de 4 equipos'], ['Porque o Wi-Fi do computador caiu', 'Porque se cayó el Wi-Fi de la computadora'], ['Porque o celular ficou 14 dias parado', 'Porque el celular estuvo 14 días sin uso']],
        [['Nada indica restrição; a viagem explica.', 'Nada indica restricción; el viaje lo explica.'], ['Ela tinha só um computador.', 'Tenía solo una computadora.'], ['Wi-Fi caído não desconecta a conta.', 'Un Wi-Fi caído no desvincula la cuenta.'], ['App do celular inativo por mais de 14 dias desconecta os conectados.', 'La app del celular inactiva más de 14 días desvincula a los demás.']]),
      Q(['A ajudante não consegue criar uma lista de transmissão no computador. É defeito?', 'La ayudante no logra crear una lista de difusión en la computadora. ¿Es un fallo?'], 0,
        [['Não: isso não funciona nos conectados', 'No: eso no funciona en los vinculados'], ['Sim: precisa reinstalar o WhatsApp Web', 'Sí: hay que reinstalar WhatsApp Web en la computadora'], ['Sim: a conta está restrita', 'Sí: la cuenta está restringida'], ['Não: só funciona com o Meta Verified', 'No: solo funciona con Meta Verified']],
        [['Listas de transmissão não são compatíveis com aparelhos conectados.', 'Las listas de difusión no son compatibles con dispositivos vinculados.'], ['Reinstalar não resolve um limite do recurso.', 'Reinstalar no resuelve un límite de la función.'], ['Não há sinal de restrição.', 'No hay señal de restricción.'], ['O Meta Verified não muda essa regra.', 'Meta Verified no cambia esa regla.']]),
      Q(['Como a dona conecta um computador novo?', '¿Cómo vincula la dueña una computadora nueva?'], 2,
        [['Digitando o código do SMS no computador', 'Escribiendo el código del SMS en la computadora'], ['Entrando com e-mail e senha no computador', 'Entrando con correo y contraseña en la computadora'], ['Lendo o QR code com o celular principal', 'Leyendo el código QR con el celular principal'], ['Pedindo ao suporte para liberar o aparelho', 'Pidiendo a soporte que libere el equipo']],
        [['O código de 6 dígitos é para registrar o número, não para conectar aparelhos.', 'El código de 6 dígitos es para registrar el número, no para vincular equipos.'], ['Não existe login por e-mail para conectar.', 'No existe inicio de sesión por correo para vincular.'], ['⋮ › Dispositivos conectados › Conectar dispositivo › ler o QR code.', '⋮ › Dispositivos vinculados › Vincular un dispositivo › leer el código QR.'], ['A própria dona conecta pelo celular.', 'La propia dueña lo vincula desde el celular.']]),
      Q(['A assinatura do Meta One acabou e a loja tinha 7 aparelhos. O que acontece?', 'La suscripción de Meta One terminó y la tienda tenía 7 equipos. ¿Qué pasa?'], 1,
        [['Todos os 7 continuam até a próxima fatura', 'Los 7 siguen hasta la próxima factura'], ['Ficam os 4 usados mais recentemente', 'Quedan los 4 usados más recientemente'], ['Todos são desconectados de uma vez', 'Todos se desvinculan de una vez'], ['A dona escolhe quais 4 manter na hora', 'La dueña elige en el momento cuáles 4 mantener']],
        [['O limite volta a valer quando a assinatura muda.', 'El límite vuelve a valer cuando cambia la suscripción.'], ['A regra oficial: ficam os 4 mais ativos recentemente.', 'La regla oficial: quedan los 4 más activos recientemente.'], ['Não caem todos: ficam 4.', 'No se caen todos: quedan 4.'], ['A Central fala nos mais recentes, não em escolha.', 'El Servicio de ayuda habla de los más recientes, no de elegir.']])
    ],
    fontes: [N.F('https://faq.whatsapp.com/647349420360876', ['Sobre dispositivos conectados no app WhatsApp Business', 'Sobre dispositivos vinculados en la app WhatsApp Business'])],
    telas: N.T('Telas reais: menu ⋮ e Dispositivos conectados (Android), vistas em 28/10/2026; planos do Meta One vistos em 25/10/2026. O computador “Windows” da prática é exemplo.', 'Pantallas reales: menú ⋮ y Dispositivos vinculados (Android), vistas el 28/10/2026; planes de Meta One vistos el 25/10/2026. La computadora “Windows” de la práctica es un ejemplo.')
  };
})();
