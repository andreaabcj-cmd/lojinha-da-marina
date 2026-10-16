/* TUTORIAIS DO PIXEL AVANÇADO — em telas reais (ou recriadas fielmente), com o site de estado (site-estado.js):
   correspondência avançada (Gerenciador de Eventos › Configurações), qualidade da correspondência de eventos (Visão geral), API de Conversões e
   desduplicação (event_id), informações proibidas e consentimento (fbq('consent')).
   Reaproveita os pedaços de tours-diagnostico.js (window.TOURS_H). Carregado nas mesmas páginas.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Sobre a correspondência avançada na web” (automática × manual; informações com hash; verticais restritas),
   “Sobre a qualidade da correspondência de eventos” (0 a 10, só para eventos do site enviados pela API de Conversões; prioridade dos parâmetros),
   “Sobre a desduplicação de eventos do Pixel da Meta e da API de Conversões” (mesmo event_name e event_id; vale o primeiro recebido),
   “Requisitos de privacidade e uso de dados para as Ferramentas da Meta para Empresas” (consentimento; informações proibidas). Telas e pontuação: treino (a conferir). */
(function () {
  var H = window.TOURS_H; if (!H) return;
  var TOURS = window.TOURS = window.TOURS || {}, t = H.t, P = H.P, preset = H.preset, irDs = H.irDs, dep = H.dep, aqui = H.aqui;
  function final(tit, txt, alvo, pagina) { return H.final(tit, txt, alvo, pagina) }
  function menuDs() {   // Gerenciador de Eventos › Conjuntos de dados › o Pixel (cai na Visão geral)
    return [
      { alvo: '[data-t=menu-conjuntos]', clique: true, pagina: P.eventos, garante: H.hash('visao'), tit: t('Gerenciador de Eventos', 'Administrador de eventos'), txt: t('Abra o Gerenciador de Eventos: clique em Conjuntos de dados.', 'Abre el Administrador de eventos: haz clic en Conjuntos de datos.') },
      { alvo: '[data-t=ds-abrir]', clique: true, pagina: P.eventos, garante: H.hash('conjuntos'), tit: t('O Pixel do cliente', 'El píxel del cliente'), txt: t('Abra o Pixel da Mari.', 'Abre el píxel de la Mari.') }
    ];
  }
  function irTeste() { return [{ alvo: '[data-t=aba-teste]', clique: true, pagina: P.eventos, garante: irDs('visao'), tit: t('Testar eventos', 'Probar eventos'), txt: t('Abra a aba Testar eventos.', 'Abre la pestaña Probar eventos.') }] }
  function evAbrir(tit, txtClique, txtLer) {   // abre o primeiro (mais novo) evento da lista e lê os detalhes
    return [
      { alvo: '[data-t=ev-0]', clique: true, pagina: P.eventos, garante: irDs('teste'), tit: tit, txt: txtClique },
      { alvo: '.ev-corpo', pagina: P.eventos, garante: function () { irDs('teste')(); setTimeout(function () { var b = document.querySelector('[data-t=ev-0]'); if (b && !document.querySelector('.ev-corpo')) b.click() }, 250) }, tit: t('Os detalhes do evento', 'Los detalles del evento'), txt: txtLer }
    ];
  }
  function config(txtAba, txtToggle, chave) {   // Configurações do Pixel › chave
    return [
      { alvo: '[data-t=aba-config]', clique: true, pagina: P.eventos, garante: irDs('visao'), tit: t('Configurações', 'Configuración'), txt: txtAba },
      { alvo: '[data-t=chave-' + chave + ']', clique: true, pagina: P.eventos, garante: irDs('config'), tit: t('Ligue a chave', 'Activa el interruptor'), txt: txtToggle }
    ];
  }
  function fonteTermo(termo, rx, txtBusca, txtCod, pag) {
    return [
      { alvo: '[data-t=cf-busca]', pagina: P.fonte, garante: function () { if (aqui() === P.fonte && window.CF && pag) CF.pagina(pag) }, cond: function () { return rx.test((window.__simCf && __simCf.busca) || '') }, tit: t('Código-fonte da página', 'Código fuente de la página'), txt: txtBusca, dica: t('Digite ' + termo + '.', 'Escribe ' + termo + '.') },
      { alvo: '[data-t=cf-codigo]', pagina: P.fonte, tit: t('O que o código mostra', 'Lo que muestra el código'), txt: txtCod }
    ];
  }
  function limparEmEventos() { return H.limparViaEventos() }
  function novaCompra(txt) { return [].concat(H.limparEventosPrimeiro(), H.compra(), H.obrigadoLer(dep(txt))) }

  /* ============ 1) Correspondência avançada — Aula 01 ============ */
  TOURS['correspondencia-avancada'] = [].concat(
    [{ antes: preset('am-desligada'), alvo: '#destaques, #lista', pagina: P.loja, garante: preset('am-desligada'), tit: t('Júlia quer atribuir mais compras', 'Julia quiere atribuir más compras'), txt: dep(t('A cliente quer que mais compras sejam ligadas a quem as fez. Hoje a correspondência avançada está desligada. Faça uma compra de teste: o formulário de pagamento tem os dados da cliente (nome, e-mail, telefone, cidade).', 'La clienta quiere que más compras se vinculen con quien las hizo. Hoy la coincidencia avanzada está desactivada. Haz una compra de prueba: el formulario de pago tiene los datos de la clienta (nombre, correo, teléfono, ciudad).')) }],
    H.compra(),
    H.obrigadoLer(dep(t('Pedido feito, com os dados da cliente no formulário. Vamos ver o que a Meta recebeu.', 'Pedido hecho, con los datos de la clienta en el formulario. Veamos lo que recibió Meta.'))),
    menuDs(), irTeste(),
    evAbrir(t('O evento de compra', 'El evento de compra'), t('Abra o evento mais recente (o Purchase).', 'Abre el evento más reciente (el Purchase).'), dep(t('Há parâmetros e informações do evento, mas nenhuma seção de Correspondência avançada: a Meta não recebeu e-mail, telefone ou nome da cliente.', 'Hay parámetros e información del evento, pero ninguna sección de Coincidencia avanzada: Meta no recibió correo, teléfono ni nombre de la clienta.'))),
    config(t('Veja as configurações do Pixel.', 'Mira las configuraciones del píxel.'), t('Ligue Correspondência avançada automática: o Pixel passa a ler campos de formulário reconhecíveis (e-mail, telefone, nome…), converte em hash no navegador e envia. (Em verticais restritas, como bancos e saúde, ou com Pixel em iframe, ela não está disponível: use a manual, no código.)', 'Activa Coincidencia avanzada automática: el píxel pasa a leer campos de formulario reconocibles (correo, teléfono, nombre…), los convierte en hash en el navegador y los envía. (En verticales restringidas, como bancos y salud, o con píxel en iframe, no está disponible: usa la manual, en el código.)'), 'am'),
    novaCompra(t('Compra de teste feita, agora com a correspondência avançada ligada.', 'Compra de prueba hecha, ahora con la coincidencia avanzada activada.')),
    menuDs(), irTeste(),
    evAbrir(t('O evento de compra', 'El evento de compra'), t('Abra o Purchase mais recente.', 'Abre el Purchase más reciente.'), dep(t('Agora há a seção Correspondência avançada, com e-mail, telefone, nome, cidade, estado, CEP e país, todos “enviados com hash (SHA-256)”: a Meta usa o hash para a correspondência e depois descarta o dado.', 'Ahora hay la sección Coincidencia avanzada, con correo, teléfono, nombre, ciudad, estado, código postal y país, todos “enviados con hash (SHA-256)”: Meta usa el hash para la coincidencia y luego descarta el dato.'))),
    [final(t('Correspondência avançada ligada 🎉', '¡Coincidencia avanzada activada! 🎉'), t('Ao cliente: explique que a Meta recebe só o hash dos dados e que ele precisa ter base legal e consentimento para compartilhá-los. Se o site não puder usar a automática, a manual passa os dados no código do Pixel.', 'Al cliente: explica que Meta recibe solo el hash de los datos y que debe tener base legal y consentimiento para compartirlos. Si el sitio no puede usar la automática, la manual pasa los datos en el código del píxel.'), '.ev-corpo', P.eventos)]
  );

  /* ============ 2) Qualidade do sinal (API de Conversões) — Aula 02 ============ */
  TOURS['qualidade-sinal'] = [].concat(
    [{ antes: preset('emq-baixa'), alvo: '#destaques, #lista', pagina: P.loja, garante: preset('emq-baixa'), tit: t('Júlia: “a nota está baixa”', 'Julia: “la nota está baja”'), txt: dep(t('O cliente usa a API de Conversões junto com o Pixel, mas a qualidade da correspondência está baixa. Faça uma compra de teste para gerar um evento do servidor.', 'El cliente usa la API de Conversiones junto con el píxel, pero la calidad de la coincidencia está baja. Haz una compra de prueba para generar un evento del servidor.')) }],
    H.compra(),
    H.obrigadoLer(dep(t('Compra feita: o Pixel mandou o Purchase pelo navegador e a API de Conversões mandou pelo servidor.', 'Compra hecha: el píxel mandó el Purchase por el navegador y la API de Conversiones lo mandó por el servidor.'))),
    menuDs(),
    [{ alvo: '[data-t=emq-card]', pagina: P.eventos, garante: irDs('visao'), tit: t('Qualidade da correspondência de eventos', 'Calidad de la coincidencia de eventos'), txt: dep(t('Aqui está a nota de 0 a 10 do Purchase do servidor. Está baixa: o evento chegou sem informações do cliente. As ações recomendadas dizem o que enviar, começando pelos parâmetros de prioridade alta (e-mail) e média (telefone, país, ID externo).', 'Aquí está la nota de 0 a 10 del Purchase del servidor. Está baja: el evento llegó sin información del cliente. Las acciones recomendadas dicen qué enviar, empezando por los parámetros de prioridad alta (correo) y media (teléfono, país, ID externo).')) }],
    config(t('Para dar informações do cliente ao evento, abra as configurações do Pixel.', 'Para dar información del cliente al evento, abre las configuraciones del píxel.'), t('Ligue Correspondência avançada automática: o servidor passa a receber os dados do cliente, com hash.', 'Activa Coincidencia avanzada automática: el servidor pasa a recibir los datos del cliente, con hash.'), 'am'),
    novaCompra(t('Nova compra de teste, agora com a correspondência avançada ligada.', 'Nueva compra de prueba, ahora con la coincidencia avanzada activada.')),
    menuDs(),
    [{ alvo: '[data-t=emq-card]', pagina: P.eventos, garante: irDs('visao'), tit: t('A nota subiu', 'La nota subió'), txt: dep(t('A nota subiu, porque o evento do servidor agora leva e-mail, telefone, nome, cidade e CEP. Lembre: a pontuação usa as últimas 48 horas, então eventos regulares mantêm a nota em dia.', 'La nota subió, porque el evento del servidor ahora lleva correo, teléfono, nombre, ciudad y código postal. Recuerda: la puntuación usa las últimas 48 horas, así que eventos regulares mantienen la nota al día.')) }],
    [final(t('Sinal melhor 🎉', '¡Mejor señal! 🎉'), t('Ao cliente: nota baixa não é punição, é falta de informações do cliente no evento. Enviar mais parâmetros (só os que ele coletou legalmente) ajuda a atribuir conversões. Pontuação do treino; a real pode variar.', 'Al cliente: una nota baja no es un castigo, es falta de información del cliente en el evento. Enviar más parámetros (solo los que recopiló legalmente) ayuda a atribuir conversiones. Puntuación de práctica; la real puede variar.'), '[data-t=emq-card]', P.eventos)]
  );

  /* ============ 3) API de Conversões e desduplicação — Aula 03 ============ */
  TOURS['desduplicar-eventos'] = [].concat(
    [{ antes: preset('capi-sem-eventid'), alvo: '#destaques, #lista', pagina: P.loja, garante: preset('capi-sem-eventid'), tit: t('Caio: “as compras dobraram”', 'Caio: “las compras se duplicaron”'), txt: dep(t('O cliente ligou a API de Conversões e agora vê o dobro de compras. Faça uma compra de teste.', 'El cliente activó la API de Conversiones y ahora ve el doble de compras. Haz una compra de prueba.')) }],
    H.compra(),
    H.obrigadoLer(dep(t('Uma compra só. Veja como a Meta contou.', 'Una sola compra. Mira cómo contó Meta.'))),
    menuDs(),
    [{ alvo: '[data-t=tabela-visao]', pagina: P.eventos, garante: irDs('visao'), tit: t('Contagem de eventos', 'Conteo de eventos'), txt: dep(t('O Purchase aparece como “Navegador e servidor” com 2 eventos para uma única compra. O Pixel e a API de Conversões mandaram, e a Meta não reconheceu que é o mesmo.', 'El Purchase aparece como “Navegador y servidor” con 2 eventos para una sola compra. El píxel y la API de Conversiones mandaron, y Meta no reconoció que es el mismo.')) }],
    H.eventosDiag(dep(t('Aviso: os eventos do navegador e do servidor não têm o mesmo event_id. Para desduplicar, o event_name e o event_id precisam ser idênticos nos dois (e vale o primeiro recebido).', 'Aviso: los eventos del navegador y del servidor no tienen el mismo event_id. Para deduplicar, el event_name y el event_id deben ser idénticos en los dos (y vale el primero recibido).')), '[data-t=diag-0]'),
    fonteTermo('fbq', /fbq/i, t('Veja o código da página de pedido concluído. Procure por fbq.', 'Mira el código de la página de pedido completado. Busca fbq.'), dep(t('O fbq(\'track\', \'Purchase\', {...}) não tem o eventID. O servidor manda o event_id do pedido, mas o navegador sorteia outro: por isso não desduplica.', 'El fbq(\'track\', \'Purchase\', {...}) no tiene el eventID. El servidor manda el event_id del pedido, pero el navegador sortea otro: por eso no deduplica.')), 'obrigado'),
    [{ alvo: '[data-t=arq-obrigado]', clique: true, pagina: P.editor, tit: t('Corrigir (como o desenvolvedor)', 'Corregir (como el desarrollador)'), txt: t('Abra o arquivo obrigado-fim.html.', 'Abre el archivo obrigado-fim.html.') },
      { alvo: '[data-t=ed-texto]', pagina: P.editor, garante: function () { if (aqui() === P.editor && window.AE) AE.abre('obrigado') }, cond: H.ctxt(function (v) { return /eventID\s*:/.test(v) && /fbq\(\s*'track'\s*,\s*'Purchase'/.test(v) }), tit: t('Adicione o eventID', 'Agrega el eventID'), txt: t('Adicione o eventID do pedido como último argumento: fbq(\'track\', \'Purchase\', {value: ..., currency: ...}, {eventID: \'{{ pedido.id }}\'}). O servidor usa o mesmo número.', 'Agrega el eventID del pedido como último argumento: fbq(\'track\', \'Purchase\', {value: ..., currency: ...}, {eventID: \'{{ pedido.id }}\'}). El servidor usa el mismo número.') },
      { alvo: '[data-t=btn-salvar]', clique: true, pagina: P.editor, tit: t('Salve', 'Guarda'), txt: t('Clique em Salvar alterações.', 'Haz clic en Guardar cambios.') }],
    limparEmEventos(),
    novaCompra(t('Nova compra de teste, agora com o eventID.', 'Nueva compra de prueba, ahora con el eventID.')),
    menuDs(), irTeste(),
    [{ alvo: '[data-t=feed]', pagina: P.eventos, garante: irDs('teste'), tit: t('Desduplicado 🎉', '¡Deduplicado! 🎉'), txt: dep(t('Agora um dos Purchase aparece como “Desduplicado”: mesmo nome e mesmo event_id, a Meta contou uma vez só (vale o primeiro recebido).', 'Ahora uno de los Purchase aparece como “Deduplicado”: mismo nombre y mismo event_id, Meta contó una sola vez (vale el primero recibido).')) }],
    [final(t('Compras contadas uma vez 🎉', '¡Compras contadas una vez! 🎉'), t('Ao cliente: com Pixel e API de Conversões juntos, o mesmo evento precisa ter o mesmo event_name e o mesmo event_id nos dois. Plataformas como a Shopify cuidam disso; em código manual, o desenvolvedor passa o eventID.', 'Al cliente: con píxel y API de Conversiones juntos, el mismo evento debe tener el mismo event_name y el mismo event_id en los dos. Plataformas como Shopify se encargan de eso; en código manual, el desarrollador pasa el eventID.'), '[data-t=feed]', P.eventos)]
  );

  /* ============ 4a) Informação sensível nos eventos — Aula 04 ============ */
  TOURS['info-proibida'] = [].concat(
    [{ antes: preset('info-proibida'), alvo: '#destaques, #lista', pagina: P.loja, garante: preset('info-proibida'), tit: t('Clínica da Dra. Lia: “a Meta bloqueou parâmetros”', 'Clínica de la Dra. Lía: “Meta bloqueó parámetros”'), txt: dep(t('Uma clínica recebeu um aviso da Meta sobre parâmetros bloqueados. Faça uma compra de teste (a conclusão do pedido simula o agendamento) e investigue.', 'Una clínica recibió un aviso de Meta sobre parámetros bloqueados. Haz una compra de prueba (la conclusión del pedido simula la cita) e investiga.')) }],
    H.compra(),
    H.obrigadoLer(dep(t('Pedido concluído. Veja o que a Meta recebeu.', 'Pedido completado. Mira lo que recibió Meta.'))),
    menuDs(), irTeste(),
    evAbrir(t('O evento personalizado', 'El evento personalizado'), t('Abra o evento mais recente (AgendouConsulta).', 'Abre el evento más reciente (AgendouConsulta).'), dep(t('O evento leva o parâmetro “doenca”, marcado como bloqueado pela Meta: informações de saúde não podem ser compartilhadas, nem em parâmetros de URL nem em eventos personalizados.', 'El evento lleva el parámetro “doenca”, marcado como bloqueado por Meta: la información de salud no puede compartirse, ni en parámetros de URL ni en eventos personalizados.'))),
    H.eventosDiag(dep(t('Aviso: “Parâmetros bloqueados: possível informação proibida”. O anunciante é o responsável pelo que envia, e descumprir pode levar a restrições de dados ou até suspensão das ferramentas.', 'Aviso: “Parámetros bloqueados: posible información prohibida”. El anunciante es el responsable de lo que envía, e incumplir puede llevar a restricciones de datos o incluso suspensión de las herramientas.')), '[data-t=diag-0]'),
    fonteTermo('doenca', /doenca/i, t('Procure o parâmetro no código-fonte da página de pedido concluído.', 'Busca el parámetro en el código fuente de la página de pedido completado.'), dep(t('Achamos: fbq(\'trackCustom\', \'AgendouConsulta\', {doenca: \'diabetes\', ...}). O site manda a condição de saúde do paciente.', 'Lo encontramos: fbq(\'trackCustom\', \'AgendouConsulta\', {doenca: \'diabetes\', ...}). El sitio manda la condición de salud del paciente.')), 'obrigado'),
    [{ alvo: '[data-t=arq-obrigado]', clique: true, pagina: P.editor, tit: t('Corrigir (como o desenvolvedor)', 'Corregir (como el desarrollador)'), txt: t('Abra o arquivo obrigado-fim.html.', 'Abre el archivo obrigado-fim.html.') },
      { alvo: '[data-t=ed-texto]', pagina: P.editor, garante: function () { if (aqui() === P.editor && window.AE) AE.abre('obrigado') }, cond: H.ctxt(function (v) { return !/doenca|AgendouConsulta/i.test(v) && /fbq\(\s*'track'\s*,\s*'Purchase'/.test(v) }), tit: t('Remova a informação sensível', 'Quita la información sensible'), txt: t('Apague o evento AgendouConsulta com a condição de saúde (o &lt;script&gt; inteiro dele) e mantenha o Purchase.', 'Borra el evento AgendouConsulta con la condición de salud (todo su &lt;script&gt;) y mantén el Purchase.') },
      { alvo: '[data-t=btn-salvar]', clique: true, pagina: P.editor, tit: t('Salve', 'Guarda'), txt: t('Clique em Salvar alterações.', 'Haz clic en Guardar cambios.') }],
    limparEmEventos(),
    novaCompra(t('Nova compra de teste.', 'Nueva compra de prueba.')),
    H.eventosDiag(dep(t('Sem avisos: o parâmetro sensível não é mais enviado.', 'Sin avisos: el parámetro sensible ya no se envía.')), '[data-t=diag-ok]'),
    [final(t('Sem informação sensível 🎉', '¡Sin información sensible! 🎉'), t('Ao cliente: nunca envie saúde, dados financeiros ou outras informações sensíveis (nem em URL ou eventos personalizados). Ele é o responsável; a Meta pode bloquear parâmetros e, se persistir, restringir ou suspender as ferramentas. Em dúvida, ele consulta o jurídico.', 'Al cliente: nunca envíe salud, datos financieros u otra información sensible (ni en URL ni en eventos personalizados). Él es el responsable; Meta puede bloquear parámetros y, si persiste, restringir o suspender las herramientas. En caso de duda, que consulte a su área jurídica.'), '[data-t=diag-ok]', P.eventos)]
  );

  /* ============ 4b) Pixel dispara antes do consentimento — Aula 04 ============ */
  function antesLoja() { var tinha = !!localStorage.getItem('loja.consent'); preset('sem-consentimento')(); if (tinha) location.reload() }   // o aceite guardado é esquecido: a loja recarrega como visitante novo
  TOURS['consentimento-pixel'] = [].concat(
    [{ antes: antesLoja, alvo: '#maCookie', pagina: P.loja, garante: antesLoja, tit: t('Visitante novo, banner de cookies', 'Visitante nuevo, banner de cookies'), txt: dep(t('O cliente atende pessoas da União Europeia, onde o Pixel só pode compartilhar dados depois que a pessoa aceita os cookies. Você é uma visitante nova: o banner está na tela e você ainda não aceitou nada.', 'El cliente atiende a personas de la Unión Europea, donde el píxel solo puede compartir datos después de que la persona acepte las cookies. Eres una visitante nueva: el banner está en pantalla y aún no aceptaste nada.')) }],
    H.consultor(dep(t('Repare: o banner de cookies ainda está na tela, mas o Pixel já enviou o PageView. Ele disparou antes do aceite: isso não pode.', 'Fíjate: el banner de cookies aún está en pantalla, pero el píxel ya envió el PageView. Se disparó antes de la aceptación: eso no puede ser.'))).map(function (s) { s.pagina = P.loja; return s }),
    fonteTermo('fbq', /fbq/i, t('Vamos ao código-fonte (a página inicial). Procure por fbq.', 'Vamos al código fuente (la página de inicio). Busca fbq.'), dep(t('O código base faz o init e o PageView direto, sem esperar o aceite. A Meta orienta revogar o consentimento antes do init e conceder só quando a pessoa aceitar.', 'El código base hace el init y el PageView directo, sin esperar la aceptación. Meta indica revocar el consentimiento antes del init y concederlo solo cuando la persona acepte.')), 'home'),
    [{ alvo: '[data-t=arq-cabecalho]', clique: true, pagina: P.editor, tit: t('Corrigir (como o desenvolvedor)', 'Corregir (como el desarrollador)'), txt: t('Abra o arquivo cabecalho.html.', 'Abre el archivo cabecalho.html.') },
      { alvo: '[data-t=ed-texto]', pagina: P.editor, garante: function () { if (aqui() === P.editor && window.AE) AE.abre('cabecalho') }, cond: H.ctxt(function (v) { var r = v.search(/fbq\(\s*'consent'\s*,\s*'revoke'\s*\)/), i = v.search(/fbq\(\s*'init'/); return r >= 0 && i >= 0 && r < i }), tit: t('Revogue antes do init', 'Revoca antes del init'), txt: t('Adicione a linha fbq(\'consent\', \'revoke\'); ANTES do fbq(\'init\', ...). O botão Aceitar do banner chama fbq(\'consent\', \'grant\') quando a pessoa concorda.', 'Agrega la línea fbq(\'consent\', \'revoke\'); ANTES del fbq(\'init\', ...). El botón Aceptar del banner llama a fbq(\'consent\', \'grant\') cuando la persona acepta.') },
      { alvo: '[data-t=btn-salvar]', clique: true, pagina: P.editor, tit: t('Salve', 'Guarda'), txt: t('Clique em Salvar alterações.', 'Haz clic en Guardar cambios.') }],
    [{ alvo: '#maCookie', pagina: P.loja, tit: t('Visitante nova de novo', 'Visitante nueva otra vez'), txt: dep(t('Abra a loja de novo, sem aceitar nada. O banner volta.', 'Abre la tienda de nuevo, sin aceptar nada. El banner vuelve.')) }],
    H.consultor(dep(t('Agora o Pixel está “segurando” o evento: sem o aceite, nada é enviado.', 'Ahora el píxel está “reteniendo” el evento: sin la aceptación, no se envía nada.'))).map(function (s) { s.pagina = P.loja; return s }),
    [{ alvo: '#maCookie [data-c=grant]', clique: true, pagina: P.loja, garante: function () { }, tit: t('Aceitar os cookies', 'Aceptar las cookies'), txt: t('Agora aceite os cookies no banner.', 'Ahora acepta las cookies en el banner.') }],
    [final(t('Consentimento respeitado 🎉', '¡Consentimiento respetado! 🎉'), t('Ao cliente: onde o consentimento é exigido, o Pixel só pode compartilhar dados depois do aceite, e a API de Conversões não deve enviar quem não consentiu. Peça ao desenvolvedor para revogar o consentimento antes do init e conceder só no aceite. Questões legais são do jurídico dele.', 'Al cliente: donde se exige consentimiento, el píxel solo puede compartir datos después de la aceptación, y la API de Conversiones no debe enviar a quien no consintió. Pide al desarrollador que revoque el consentimiento antes del init y lo conceda solo en la aceptación. Las cuestiones legales son de su área jurídica.'), '#maCookie, body', P.loja)]
  );
})();
