/* Tutoriais do simulador do WhatsApp (aulas 01 a 09 do módulo WhatsApp Business). Usa window.SIMWA (sim-whatsapp.js).
   Cada tutorial começa arrumando o cenário da aula (zera o simulador com o que a aula anterior deixou pronto). */
(function () {
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function dep(x) { return T(x.pt + ' Clique em Próximo.', x.es + ' Haz clic en Siguiente.') }
  function W() { return window.SIMWA }
  function S() { return W().estado() }
  var FIM = T(' Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', ' Haz clic en Terminar. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta.');
  function fim(alvo, tit, x, garante) { return { alvo: alvo, fim: true, semVolta: true, garante: garante, tit: tit, txt: T(x.pt + FIM.pt, x.es + FIM.es) } }
  function tela(l, t) { return function () { W().tela(l, t) } }
  var TUDO = [true, true, true, true, true, true, true];
  function perfilPronto(s) { s.p.cats = ['Roupas e vestuário']; s.p.horario = 'sempre'; s.p.dias = TUDO.slice() }   // o que a aula 01 deixou
  function cenario(fn) { return function () { var I = W().inicial(); W().zera(I); W().muda(function (s) { perfilPronto(s); if (fn) fn(s) }) } }

  /* ---------- 01 · Perfil comercial ---------- */
  TOURS['perfil-whatsapp'] = [
    { antes: function () { W().zera(); W().tela('c', 'perfil') }, alvo: '[data-t=wa-cli-hor]',
      garante: function () { W().perfilZerado(); W().tela('m', 'conversas'); W().tela('c', 'perfil') },
      tit: T('O que a cliente vê', 'Lo que ve la clienta'), txt: dep(T('No celular da cliente, a Bia abriu o perfil da Lojinha: sem horário e com a categoria “Outras empresas”. Ela não sabe se a loja está aberta.', 'En el celular de la clienta, Bia abrió el perfil de la Lojinha: sin horario y con la categoría “Otras empresas”. No sabe si la tienda está abierta.')) },
    { alvo: '[data-t=wa-aba-ferramentas]', clique: true, garante: tela('m', 'conversas'), tit: T('Ferramentas', 'Herramientas'), txt: T('No celular da Marina, toque na aba Ferramentas.', 'En el celular de Marina, toca la pestaña Herramientas.') },
    { alvo: '[data-t=wa-ferr-perfil]', clique: true, garante: tela('m', 'ferramentas'), tit: T('Perfil', 'Perfil'), txt: T('Em Gerencie sua conta, toque em Perfil.', 'En Administra tu cuenta, toca Perfil.') },
    { alvo: '[data-t=wa-perfil-dados]', garante: tela('m', 'perfil'), tit: T('Os dados da empresa', 'Los datos de la empresa'), txt: dep(T('Aqui ficam nome, nome de usuário, categoria, horário, descrição e endereço. Campo vazio aparece em cinza.', 'Aquí están nombre, nombre de usuario, categoría, horario, descripción y dirección. Un campo vacío aparece en gris.')) },
    { alvo: '[data-t=wa-campo-cat]', clique: true, garante: tela('m', 'perfil'), tit: T('A categoria', 'La categoría'), txt: T('Toque em Outras empresas para trocar a categoria.', 'Toca Otras empresas para cambiar la categoría.') },
    { alvo: '[data-t=wa-cat-lista]', garante: tela('m', 'categoria'), cond: function () { var c = S().F.cats || []; return c.indexOf('Roupas e vestuário') >= 0 && c.indexOf('Outras empresas') < 0 },
      tit: T('Até 3 categorias', 'Hasta 3 categorías'), txt: T('Desmarque Outras empresas e marque Roupas e vestuário (camisetas, moletom, boné). Depois clique em Próximo.', 'Desmarca Otras empresas y marca Ropa y vestuario (camisetas, sudadera, gorra). Después haz clic en Siguiente.') },
    { alvo: '[data-t=wa-cat-salvar]', clique: true, garante: function () { W().tela('m', 'categoria'); W().escolhas({ cats: ['Roupas e vestuário'] }) }, tit: T('Salvar', 'Guardar'), txt: T('Toque em Salvar.', 'Toca Guardar.') },
    { alvo: '[data-t=wa-campo-hor]', clique: true, garante: function () { W().perfil({ cats: ['Roupas e vestuário'] }); W().tela('m', 'perfil') }, tit: T('O horário', 'El horario'), txt: T('Agora toque em Horário de atendimento.', 'Ahora toca Horario de atención.') },
    { alvo: '[data-t=wa-hor-lista]', garante: tela('m', 'horario'), cond: function () { return S().F.hor === 'sempre' },
      tit: T('Quando a loja atende', 'Cuándo atiende la tienda'), txt: T('São três jeitos: horários específicos, Sempre aberta ou Somente com hora marcada. A loja online da Marina atende o tempo todo: escolha Sempre aberta e clique em Próximo.', 'Son tres formas: horarios específicos, Siempre abierta o Solo con cita. La tienda online de Marina atiende todo el tiempo: elige Siempre abierta y haz clic en Siguiente.') },
    { alvo: '[data-t=wa-hor-avancar]', clique: true, garante: function () { W().tela('m', 'horario'); W().escolhas({ hor: 'sempre' }) }, tit: T('Avançar', 'Siguiente'), txt: T('Toque em Avançar.', 'Toca Siguiente.') },
    { alvo: '[data-t=wa-dias-lista]', garante: function () { W().escolhas({ hor: 'sempre', dias: TUDO.slice() }); W().tela('m', 'dias') },
      tit: T('Dia a dia', 'Día a día'), txt: dep(T('Em Selecionar horários tem uma chave por dia: desligada, o dia aparece como Fechada. A Marina atende todos os dias, então tudo fica ligado.', 'En Seleccionar horarios hay un interruptor por día: apagado, el día aparece como Cerrada. Marina atiende todos los días, así que todo queda encendido.')) },
    { alvo: '[data-t=wa-dias-salvar]', clique: true, garante: function () { W().escolhas({ hor: 'sempre', dias: TUDO.slice() }); W().tela('m', 'dias') }, tit: T('Salvar', 'Guardar'), txt: T('Toque em Salvar.', 'Toca Guardar.') },
    { alvo: '[data-t=wa-cli-hor]', garante: function () { W().perfil({ cats: ['Roupas e vestuário'], horario: 'sempre', dias: TUDO.slice() }); W().tela('m', 'perfil'); W().tela('c', 'perfil') },
      tit: T('Do lado da cliente', 'Del lado de la clienta'), txt: dep(T('No celular da Bia já aparece “Aberta agora · Aberta 24 horas” e a nova categoria. Ela já sabe que pode chamar.', 'En el celular de Bia ya aparece “Abierta ahora · Abierta 24 horas” y la nueva categoría. Ya sabe que puede escribir.')) },
    { alvo: '[data-t=wa-previa]', clique: true, garante: tela('m', 'perfil'), tit: T('Prévia', 'Vista previa'), txt: T('Para conferir sem outro celular, a Marina usa a Prévia. Toque no ícone de pessoa no alto.', 'Para revisar sin otro celular, Marina usa la Vista previa. Toca el ícono de persona arriba.') },
    fim('[data-t=wa-cel-marina]', T('Perfil pronto 🎉', '¡Perfil listo! 🎉'), T('A Prévia mostra o perfil como o cliente vê, com “(Você)” no nome.', 'La Vista previa muestra el perfil como lo ve el cliente, con “(Tú)” en el nombre.'), tela('m', 'previa'))
  ];

  /* ---------- 02 · Catálogo e coleções ---------- */
  TOURS['catalogo-whatsapp'] = [
    { antes: cenario(function (s) { s.m = 'ferramentas'; s.c = 'catalogo' }), alvo: '[data-t=wa-cli-todos]', garante: function () { W().tela('c', 'catalogo') },
      tit: T('O catálogo que a Bia vê', 'El catálogo que ve Bia'), txt: dep(T('No celular da cliente, o catálogo mostra todos os itens misturados: canecas, camiseta e ecobag.', 'En el celular de la clienta, el catálogo muestra todos los artículos mezclados: tazas, camiseta y ecobag.')) },
    { alvo: '[data-t=wa-ferr-catalogo]', clique: true, garante: tela('m', 'ferramentas'), tit: T('Catálogo', 'Catálogo'), txt: T('No celular da Marina, em Ferramentas, toque em Catálogo.', 'En el celular de Marina, en Herramientas, toca Catálogo.') },
    { alvo: '[data-t=wa-cat-menu]', clique: true, garante: tela('m', 'catalogo'), tit: T('Gerenciador de Catálogos', 'Administrador de catálogos'), txt: T('Aqui ficam os itens da loja. Toque nos três pontinhos ⋮ no alto.', 'Aquí están los artículos de la tienda. Toca los tres puntos ⋮ arriba.') },
    { alvo: '[data-t=wa-menu-colecoes]', clique: true, garante: tela('m', 'catmenu'), tit: T('Coleções', 'Colecciones'), txt: T('Toque em Coleções.', 'Toca Colecciones.') },
    { alvo: '[data-t=wa-nova-colecao]', clique: true, garante: tela('m', 'colecoes'), tit: T('Nova coleção', 'Nueva colección'), txt: T('Coleções agrupam itens para a cliente achar mais fácil. Toque no ＋.', 'Las colecciones agrupan artículos para que la clienta los encuentre más fácil. Toca el ＋.') },
    { alvo: '[data-t=wa-col-nome]', garante: tela('m', 'colnome'), cond: function () { return /caneca/i.test(S().F.colNome || '') }, tit: T('O nome', 'El nombre'), txt: T('Digite Canecas e clique em Próximo.', 'Escribe Tazas (o Canecas) y haz clic en Siguiente.') },
    { alvo: '[data-t=wa-col-avancar]', clique: true, garante: function () { W().tela('m', 'colnome'); W().escolhas({ colNome: S().F.colNome || 'Canecas' }) }, tit: T('Avançar', 'Siguiente'), txt: T('Toque em Avançar.', 'Toca Siguiente.') },
    { alvo: '[data-t=wa-col-lista]', garante: function () { W().escolhas({ colNome: S().F.colNome || 'Canecas', colItens: S().F.colItens || [] }); W().tela('m', 'colitens') }, cond: function () { var l = S().F.colItens || []; return ['boas', 'amarelo', 'azul'].every(function (i) { return l.indexOf(i) >= 0 }) && l.length === 3 },
      tit: T('Os itens', 'Los artículos'), txt: T('Marque só as três canecas e clique em Próximo.', 'Marca solo las tres tazas y haz clic en Siguiente.') },
    { alvo: '[data-t=wa-col-ok]', clique: true, garante: function () { W().escolhas({ colNome: S().F.colNome || 'Canecas', colItens: ['boas', 'amarelo', 'azul'] }); W().tela('m', 'colitens') }, tit: T('OK', 'OK'), txt: T('Toque em OK.', 'Toca OK.') },
    { alvo: '[data-t=wa-cli-colecao]', garante: function () { W().muda(function (s) { if (!s.cat.cols.length) s.cat.cols.push({ nome: 'Canecas', itens: ['boas', 'amarelo', 'azul'] }); s.m = 'colecoes'; s.c = 'catalogo' }) },
      tit: T('Do lado da cliente', 'Del lado de la clienta'), txt: dep(T('A coleção já aparece no alto do catálogo da Bia, com “Mostrar tudo”.', 'La colección ya aparece arriba del catálogo de Bia, con “Ver todo”.')) },
    { alvo: '[data-t=wa-item-amarelo]', clique: true, garante: tela('m', 'catalogo'), tit: T('A caneca amarela acabou', 'Se acabó la taza amarilla'), txt: T('A Caneca Amarelo esgotou. Volte ao catálogo da Marina (seta ←) e toque nela.', 'La Taza Amarilla se agotó. Vuelve al catálogo de Marina (flecha ←) y tócala.') },
    { alvo: '[data-t=wa-item-menu]', clique: true, garante: function () { W().escolhas({ item: 'amarelo' }); W().tela('m', 'item') }, tit: T('Mais opções', 'Más opciones'), txt: T('Toque nos três pontinhos ⋮.', 'Toca los tres puntos ⋮.') },
    { alvo: '[data-t=wa-ocultar]', clique: true, garante: function () { W().escolhas({ item: 'amarelo' }); W().tela('m', 'itemmenu') }, tit: T('Ocultar', 'Ocultar'), txt: T('Ocultar tira o item da vista da cliente sem apagar. Toque em Ocultar.', 'Ocultar saca el artículo de la vista de la clienta sin borrarlo. Toca Ocultar.') },
    fim('[data-t=wa-cel-cliente]', T('Catálogo organizado 🎉', '¡Catálogo organizado! 🎉'), T('A Bia vê a coleção Canecas e não vê mais a caneca amarela. Quando chegar estoque, é só tocar em Mostrar.', 'Bia ve la colección Canecas y ya no ve la taza amarilla. Cuando llegue stock, basta tocar Mostrar.'),
      function () { W().muda(function (s) { s.cat.itens.forEach(function (i) { if (i.id === 'amarelo') i.oculto = true }); s.c = 'catalogo' }) })
  ];

  /* ---------- 03 · Pedido pelo carrinho ---------- */
  function catPronto(s) { s.cat.cols = [{ nome: 'Canecas', itens: ['boas', 'amarelo', 'azul'] }] }
  TOURS['pedido-whatsapp'] = [
    { antes: cenario(function (s) { catPronto(s); s.c = 'catalogo'; s.m = 'conversas' }), alvo: '[data-t=wa-cli-add-azul]', clique: true, garante: tela('c', 'catalogo'),
      tit: T('A Bia escolhe', 'Bia elige'), txt: T('No celular da cliente, toque no ＋ da Caneca Azul para pôr no carrinho.', 'En el celular de la clienta, toca el ＋ de la Taza Azul para ponerla en el carrito.') },
    { alvo: '[data-t=wa-cli-add-boas]', clique: true, garante: tela('c', 'catalogo'), tit: T('Mais uma', 'Una más'), txt: T('Agora toque no ＋ da Caneca Boas Ideais.', 'Ahora toca el ＋ de la Taza Boas Ideais.') },
    { alvo: '[data-t=wa-cli-carrinho]', clique: true, garante: function () { W().muda(function (s) { s.car = { azul: 1, boas: 1 }; s.c = 'catalogo' }) }, tit: T('O carrinho', 'El carrito'), txt: T('Toque no carrinho 🛒 no alto.', 'Toca el carrito 🛒 arriba.') },
    { alvo: '[data-t=wa-cli-folha-carrinho]', garante: function () { W().muda(function (s) { s.car = { azul: 1, boas: 1 }; s.c = 'carrinho' }) },
      tit: T('Seu pedido', 'Tu pedido'), txt: dep(T('Itens, quantidade, quanto a Bia economiza com a promoção e o subtotal. O aviso diz que carrinho, nome e telefone vão para a loja. Aqui não se paga nada.', 'Artículos, cantidad, cuánto ahorra Bia con la promoción y el subtotal. El aviso dice que carrito, nombre y teléfono van a la tienda. Aquí no se paga nada.')) },
    { alvo: '[data-t=wa-cli-enviar-pedido]', clique: true, garante: function () { W().muda(function (s) { s.car = { azul: 1, boas: 1 }; s.c = 'carrinho' }) }, tit: T('Enviar pedido', 'Enviar pedido'), txt: T('Toque em ENVIAR PEDIDO.', 'Toca ENVIAR PEDIDO.') },
    { alvo: '[data-t=wa-conv-bia]', clique: true, garante: tela('m', 'conversas'), tit: T('Chegou para a Marina', 'Le llegó a Marina'), txt: T('No celular da Marina, abra a conversa com a Bia.', 'En el celular de Marina, abre el chat con Bia.') },
    { alvo: '[data-t=wa-mostrar-pedido]', clique: true, garante: tela('m', 'conv'), tit: T('Mostrar pedido', 'Ver pedido'), txt: T('O pedido chega como “Pedido feito via catálogo”. Toque em Mostrar pedido.', 'El pedido llega como “Pedido hecho desde el catálogo”. Toca Ver pedido.') },
    { alvo: '[data-t=wa-aceitar-pedido]', clique: true, garante: tela('m', 'pedido'), tit: T('Aceitar', 'Aceptar'), txt: T('O pedido só vira pedido de verdade quando a loja confirma. Toque em ACEITAR PEDIDO.', 'El pedido solo se vuelve pedido de verdad cuando la tienda lo confirma. Toca ACEPTAR PEDIDO.') },
    { alvo: '[data-t=wa-atualizar-status]', clique: true, garante: tela('m', 'conv'), tit: T('A cobrança', 'El cobro'), txt: T('Ao aceitar, nasce uma cobrança com número. Toque em Atualizar status.', 'Al aceptar, nace un cobro con número. Toca Actualizar estado.') },
    { alvo: '[data-t=wa-status-lista]', garante: tela('m', 'status'), cond: function () { return S().F.st === 'Preparando para o envio' }, tit: T('Status do pedido', 'Estado del pedido'), txt: T('Escolha Preparando para o envio e clique em Próximo.', 'Elige Preparando para el envío y haz clic en Siguiente.') },
    { alvo: '[data-t=wa-enviar-status]', clique: true, garante: function () { W().escolhas({ st: 'Preparando para o envio' }); W().tela('m', 'status') }, tit: T('Enviar', 'Enviar'), txt: T('Se quiser, escreva um recado. Depois toque em ENVIAR ATUALIZAÇÃO.', 'Si quieres, escribe un mensaje. Después toca ENVIAR ACTUALIZACIÓN.') },
    fim('[data-t=wa-c-chat]', T('Pedido andando 🎉', '¡Pedido en marcha! 🎉'), T('A Bia recebeu a cobrança e o status “preparando para o envio”. Ela não precisou sair da conversa.', 'Bia recibió el cobro y el estado “preparando para el envío”. No tuvo que salir del chat.'), tela('c', 'conversa'))
  ];

  /* ---------- 04 · Pix na conversa ---------- */
  TOURS['pix-whatsapp'] = [
    { antes: cenario(function (s) { catPronto(s); s.chat.push({ de: 'cli', t: 'txt', x: 'Quero a Caneca Azul! Como pago?', h: '10:02' }); s.m = 'conv'; s.c = 'conversa' }), alvo: '[data-t=wa-anexar]', clique: true, garante: tela('m', 'conv'),
      tit: T('A Bia quer pagar', 'Bia quiere pagar'), txt: T('Na conversa da Marina, toque no clipe 📎 (Anexar).', 'En el chat de Marina, toca el clip 📎 (Adjuntar).') },
    { alvo: '[data-t=wa-anexo-pix]', clique: true, garante: tela('m', 'anexo'), tit: T('Pix', 'Pix'), txt: T('Entre as opções (Documento, Formulários, Pix, Catálogo…), toque em Pix.', 'Entre las opciones (Documento, Formularios, Pix, Catálogo…), toca Pix.') },
    { alvo: '[data-t=wa-pix-valor]', garante: tela('m', 'pix'), cond: function () { return S().F.pixVal === '39.90' },
      tit: T('O valor, com ponto', 'El valor, con punto'), txt: T('Digite 39.90 (com PONTO). No app real, com vírgula o 39,90 vira 3990! Depois clique em Próximo.', 'Escribe 39.90 (con PUNTO). ¡En la app real, con coma 39,90 se vuelve 3990! Después haz clic en Siguiente.') },
    { alvo: '[data-t=wa-pix-enviar]', clique: true, garante: function () { W().tela('m', 'pix'); W().escolhas({ pixVal: '39.90' }) }, tit: T('Enviar', 'Enviar'), txt: T('Toque em ENVIAR SOLICITAÇÃO.', 'Toca ENVIAR SOLICITUD.') },
    { alvo: '[data-t=wa-cli-pagarpix]', clique: true, garante: tela('c', 'conversa'), tit: T('Do lado da cliente', 'Del lado de la clienta'), txt: T('A Bia vê “solicitou um pagamento”. No celular dela, toque em Pagar com Pix.', 'Bia ve “solicitó un pago”. En su celular, toca Pagar con Pix.') },
    fim('[data-t=wa-cli-bancos]', T('Pix pedido 🎉', '¡Pix solicitado! 🎉'), T('A Bia escolhe o app do banco ou copia o código Pix. O pagamento acontece no banco, fora do WhatsApp.', 'Bia elige la app del banco o copia el código Pix. El pago ocurre en el banco, fuera de WhatsApp.'), tela('c', 'pagarpix'))
  ];

  /* ---------- 05 · Atendimento automático ---------- */
  TOURS['saudacao-whatsapp'] = [
    { antes: cenario(function (s) { catPronto(s); s.chat = []; s.m = 'ferramentas'; s.c = 'conversa' }), alvo: '[data-t=wa-ferr-saudacao]', clique: true, garante: tela('m', 'ferramentas'),
      tit: T('Mensagem de saudação', 'Mensaje de bienvenida'), txt: T('Em Ferramentas, toque em Mensagem de saudação.', 'En Herramientas, toca Mensaje de bienvenida.') },
    { alvo: '[data-t=wa-saud-chave]', clique: true, garante: function () { W().escolhas({ saud: null }); W().tela('m', 'saudacao') }, tit: T('Ligar', 'Activar'), txt: T('Ela responde a primeira mensagem de um cliente, ou a que chega depois de 14 dias sem conversa. Ligue a chave.', 'Responde el primer mensaje de un cliente, o el que llega después de 14 días sin conversación. Activa el interruptor.') },
    { alvo: '[data-t=wa-saud-salvar]', clique: true, garante: function () { var f = JSON.parse(JSON.stringify(S().saud)); f.on = true; W().escolhas({ saud: f }); W().tela('m', 'saudacao') }, tit: T('Salvar', 'Guardar'), txt: T('Toque em Salvar.', 'Toca Guardar.') },
    { alvo: '[data-t=wa-c-entrada]', livre: '[data-wa="c:enviar"]', garante: function () { W().muda(function (s) { s.saud.on = true; s.c = 'conversa' }) }, cond: function () { return S().chat.some(function (m) { return m.de === 'cli' }) },
      tit: T('Uma cliente nova escreve', 'Una clienta nueva escribe'), txt: T('No celular da Bia (é a primeira vez dela), escreva “Oi” e envie. Depois clique em Próximo.', 'En el celular de Bia (es su primera vez), escribe “Hola” y envía. Después haz clic en Siguiente.') },
    { alvo: '[data-t=wa-c-chat]', garante: tela('c', 'conversa'), tit: T('Saudação automática', 'Bienvenida automática'), txt: dep(T('A saudação chegou sozinha. Se a Bia mandar outra mensagem agora, ela não sai de novo: só na primeira ou depois de 14 dias.', 'La bienvenida llegó sola. Si Bia manda otro mensaje ahora, no vuelve a salir: solo en el primero o después de 14 días.')) },
    { alvo: '[data-t=wa-aba-ferramentas]', clique: true, garante: tela('m', 'conversas'), tit: T('Respostas rápidas', 'Respuestas rápidas'), txt: T('Agora as respostas rápidas. No celular da Marina, toque em Ferramentas.', 'Ahora las respuestas rápidas. En el celular de Marina, toca Herramientas.') },
    { alvo: '[data-t=wa-ferr-respostas]', clique: true, garante: tela('m', 'ferramentas'), tit: T('Respostas rápidas', 'Respuestas rápidas'), txt: T('Toque em Respostas rápidas.', 'Toca Respuestas rápidas.') },
    { alvo: '[data-t=wa-rr-nova]', clique: true, garante: tela('m', 'respostas'), tit: T('Nova resposta', 'Nueva respuesta'), txt: T('Toque no ＋ para criar uma.', 'Toca el ＋ para crear una.') },
    { alvo: '[data-t=wa-rr-atalho]', garante: tela('m', 'rrnova'), cond: function () { return (S().F.rrA || '').trim().toLowerCase() === 'frete' }, tit: T('O atalho', 'El atajo'), txt: T('Digite frete e clique em Próximo.', 'Escribe frete y haz clic en Siguiente.') },
    { alvo: '[data-t=wa-rr-texto]', garante: tela('m', 'rrnova'), cond: function () { return (S().F.rrT || '').trim().length > 10 }, tit: T('A mensagem', 'El mensaje'), txt: T('Escreva a resposta. Ex.: Enviamos para todo o Brasil! O frete aparece no carrinho do site antes de pagar. Depois clique em Próximo.', 'Escribe la respuesta. Ej.: ¡Enviamos a todo Brasil! El envío aparece en el carrito del sitio antes de pagar. Después haz clic en Siguiente.') },
    { alvo: '[data-t=wa-rr-salvar]', clique: true, garante: function () { W().escolhas({ rrA: 'frete', rrT: S().F.rrT || 'Enviamos para todo o Brasil! O frete aparece no carrinho do site antes de pagar.' }); W().tela('m', 'rrnova') }, tit: T('Salvar', 'Guardar'), txt: T('Toque em SALVAR.', 'Toca GUARDAR.') },
    fim('[data-t=wa-rr-salvas]', T('Atendimento mais rápido 🎉', '¡Atención más rápida! 🎉'), T('Na conversa, é só digitar “/” e escolher “frete”. A mensagem de ausência (ao lado, em Ferramentas) responde quando a loja está fechada.', 'En el chat, basta escribir “/” y elegir “frete”. El mensaje de ausencia (en Herramientas) responde cuando la tienda está cerrada.'), tela('m', 'respostas'))
  ];

  /* ---------- 06 · Listas e transmissão comercial ---------- */
  TOURS['listas-whatsapp'] = [
    { antes: cenario(function (s) { catPronto(s); s.chat.push({ de: 'cli', t: 'pedido', qtd: 2, total: 94.8, h: '10:10' }); s.m = 'ferramentas' }), alvo: '[data-t=wa-ferr-listas]', clique: true, garante: tela('m', 'ferramentas'),
      tit: T('Listas', 'Listas'), txt: T('A Bia fez um pedido. Para organizar, em Ferramentas, toque em Listas.', 'Bia hizo un pedido. Para organizar, en Herramientas, toca Listas.') },
    { alvo: '[data-t=wa-criar-lista]', clique: true, garante: tela('m', 'listas'), tit: T('Criar lista', 'Crear lista'), txt: T('Toque em Criar lista personalizada.', 'Toca Crear lista personalizada.') },
    { alvo: '[data-t=wa-folha-listas]', garante: tela('m', 'listaaviso'), tit: T('As etiquetas viraram listas', 'Las etiquetas ahora son listas'), txt: dep(T('O app avisa: “As etiquetas agora são as Listas”. Se o cliente procurar “etiquetas”, é aqui.', 'La app avisa: “Las etiquetas ahora son las Listas”. Si el cliente busca “etiquetas”, es aquí.')) },
    { alvo: '[data-t=wa-listas-continuar]', clique: true, garante: tela('m', 'listaaviso'), tit: T('Continuar', 'Continuar'), txt: T('Toque em CONTINUAR.', 'Toca CONTINUAR.') },
    { alvo: '[data-t=wa-lista-sug]', livre: '.wa-sug', garante: tela('m', 'listanova'), cond: function () { return S().F.listaNome === 'Novo pedido' }, tit: T('Uma sugestão', 'Una sugerencia'), txt: T('Toque na sugestão Novo pedido e clique em Próximo.', 'Toca la sugerencia Nuevo pedido y haz clic en Siguiente.') },
    { alvo: '[data-t=wa-lista-pessoas]', clique: true, garante: function () { W().escolhas({ listaNome: 'Novo pedido' }); W().tela('m', 'listanova') }, tit: T('Quem entra', 'Quién entra'), txt: T('Toque em ADICIONAR PESSOAS OU GRUPOS.', 'Toca AGREGAR PERSONAS O GRUPOS.') },
    { alvo: '[data-t=wa-lista-bia]', garante: function () { W().escolhas({ listaNome: 'Novo pedido', listaMembros: S().F.listaMembros || [] }); W().tela('m', 'listapessoas') }, cond: function () { return (S().F.listaMembros || []).indexOf('Bia') >= 0 },
      tit: T('A Bia', 'Bia'), txt: T('Marque a Bia e clique em Próximo. Só a loja vê quem está nas listas.', 'Marca a Bia y haz clic en Siguiente. Solo la tienda ve quién está en las listas.') },
    { alvo: '[data-t=wa-lista-ok]', clique: true, garante: function () { W().escolhas({ listaNome: 'Novo pedido', listaMembros: ['Bia'] }); W().tela('m', 'listapessoas') }, tit: T('OK', 'OK'), txt: T('Toque no ✓.', 'Toca el ✓.') },
    { alvo: '[data-t=wa-filtros]', garante: function () { W().muda(function (s) { if (!s.listas.length) s.listas.push({ n: 'Novo pedido', membros: ['Bia'] }); s.F = { filtro: 'Novo pedido' }; s.m = 'conversas' }) },
      tit: T('Virou filtro', 'Se volvió filtro'), txt: dep(T('A lista aparece como filtro no alto das Conversas, e a conversa da Bia ganha a etiqueta NOVO PEDIDO.', 'La lista aparece como filtro arriba de los Chats, y el chat de Bia recibe la etiqueta NUEVO PEDIDO.')) },
    { alvo: '[data-t=wa-aba-ferramentas]', clique: true, garante: tela('m', 'conversas'), tit: T('E a transmissão?', '¿Y la difusión?'), txt: T('Com uma lista dá para mandar uma mensagem para todos de uma vez. Toque em Ferramentas.', 'Con una lista se puede mandar un mensaje a todos de una vez. Toca Herramientas.') },
    { alvo: '[data-t=wa-ferr-listas]', clique: true, garante: tela('m', 'ferramentas'), tit: T('Listas', 'Listas'), txt: T('Toque em Listas.', 'Toca Listas.') },
    { alvo: '[data-t=wa-lista-criada]', clique: true, garante: tela('m', 'listas'), tit: T('Novo pedido', 'Nuevo pedido'), txt: T('Toque na lista Novo pedido.', 'Toca la lista Nuevo pedido.') },
    { alvo: '[data-t=wa-lista-menu]', clique: true, garante: function () { W().escolhas({ lista: 'Novo pedido' }); W().tela('m', 'listadetalhe') }, tit: T('Mais opções', 'Más opciones'), txt: T('Toque nos três pontinhos ⋮.', 'Toca los tres puntos ⋮.') },
    { alvo: '[data-t=wa-transmissao]', clique: true, garante: function () { W().escolhas({ lista: 'Novo pedido' }); W().tela('m', 'listamenu') }, tit: T('Transmissão comercial', 'Difusión comercial'), txt: T('Toque em Enviar transmissão comercial.', 'Toca Enviar difusión comercial.') },
    fim('[data-t=wa-transm-preco]', T('Atenção: é pago', 'Atención: es pago'), T('“Pague o mesmo preço por cada mensagem entregue”: a transmissão comercial é cobrada por mensagem. Paramos aqui, sem aceitar os termos.', '“Paga el mismo precio por cada mensaje entregado”: la difusión comercial se cobra por mensaje. Paramos aquí, sin aceptar los términos.'),
      function () { W().escolhas({ lista: 'Novo pedido' }); W().tela('m', 'transm') })
  ];

  /* ---------- 07 · Anúncio pelo app ---------- */
  TOURS['anuncio-whatsapp'] = [
    { antes: cenario(function (s) { catPronto(s); s.m = 'ferramentas' }), alvo: '[data-t=wa-ferr-anuncios]', clique: true, garante: tela('m', 'ferramentas'),
      tit: T('Anúncios', 'Anuncios'), txt: T('Em Ferramentas, toque em Anúncios (o “Turbinar perfil”, no alto do Perfil, abre o mesmo caminho).', 'En Herramientas, toca Anuncios (el “Promocionar perfil”, arriba del Perfil, abre el mismo camino).') },
    { alvo: '[data-t=wa-an-objetivo]', garante: tela('m', 'an1'), cond: function () { return S().F.anObj === 'msg' }, tit: T('O objetivo', 'El objetivo'), txt: T('Visitar o site ou mandar mensagem. Escolha Enviem uma mensagem para você e clique em Próximo.', 'Visitar el sitio o mandar mensaje. Elige Que te envíen un mensaje y haz clic en Siguiente.') },
    { alvo: '[data-t=wa-an-avancar1]', clique: true, garante: function () { W().escolhas({ anObj: 'msg' }); W().tela('m', 'an1') }, tit: T('Avançar', 'Siguiente'), txt: T('Toque em Avançar.', 'Toca Siguiente.') },
    { alvo: '[data-t=wa-an-pular]', clique: true, garante: function () { W().escolhas({ anObj: 'msg' }); W().tela('m', 'an2') }, tit: T('Com ou sem Facebook', 'Con o sin Facebook'), txt: T('Dá para criar com a conta do Facebook ou sem ela (com e-mail). Toque em PULAR.', 'Se puede crear con la cuenta de Facebook o sin ella (con correo). Toca OMITIR.') },
    { alvo: '[data-t=wa-an-avancar3]', clique: true, garante: tela('m', 'an3'), tit: T('O anúncio', 'El anuncio'), txt: T('A prévia usa o nome e a foto da loja. Toque em Avançar.', 'La vista previa usa el nombre y la foto de la tienda. Toca Siguiente.') },
    { alvo: '[data-t=wa-an-publico]', garante: tela('m', 'an4'), tit: T('O público', 'El público'), txt: dep(T('O sugerido é Brasil, 18+ e Advantage+ ativado. Com Advantage+, idade e gênero são sugestão, não filtro: o anúncio pode aparecer para outro público. Editar e Criar público ajustam.', 'El sugerido es Brasil, 18+ y Advantage+ activado. Con Advantage+, edad y género son sugerencia, no filtro: el anuncio puede aparecer a otro público. Editar y Crear público lo ajustan.')) },
    { alvo: '[data-t=wa-an-especiais]', garante: tela('m', 'an4'), tit: T('Requisitos especiais', 'Requisitos especiales'), txt: dep(T('Anúncio de crédito, emprego, moradia, temas sociais ou política precisa marcar esta pergunta. Não é o caso das canecas da Marina. Embaixo, a estimativa de impressões diárias.', 'Un anuncio de crédito, empleo, vivienda, temas sociales o política debe marcar esta pregunta. No es el caso de las tazas de Marina. Abajo, la estimación de impresiones diarias.')) },
    { alvo: '[data-t=wa-an-avancar4]', clique: true, garante: tela('m', 'an4'), tit: T('Avançar', 'Siguiente'), txt: T('Toque em Avançar.', 'Toca Siguiente.') },
    { alvo: '[data-t=wa-an-orcamento]', garante: tela('m', 'an5'), tit: T('Orçamento e duração', 'Presupuesto y duración'), txt: dep(T('Orçamento por dia e até quando veicular. “Até eu pausá-lo” é o recomendado.', 'Presupuesto por día y hasta cuándo mostrar. “Hasta que lo pause” es lo recomendado.')) },
    { alvo: '[data-t=wa-an-avancar5]', clique: true, garante: tela('m', 'an5'), tit: T('Avançar', 'Siguiente'), txt: T('Toque em Avançar.', 'Toca Siguiente.') },
    fim('[data-t=wa-an-pagar]', T('Pronto para pagar: paramos', 'Listo para pagar: paramos'), T('O último passo pede a forma de pagamento e “Pagar e criar anúncio”. Quem decide e paga é a cliente; o simulador para aqui.', 'El último paso pide el método de pago y “Pagar y crear anuncio”. Quien decide y paga es la clienta; el simulador se detiene aquí.'), tela('m', 'an6'))
  ];

  /* ---------- 08 · IA ---------- */
  TOURS['ia-whatsapp'] = [
    { antes: cenario(function (s) { catPronto(s); s.m = 'conversas' }), alvo: '[data-t=wa-botao-ia]', clique: true, garante: tela('m', 'conversas'),
      tit: T('O botão roxo', 'El botón morado'), txt: T('Nas Conversas da Marina, toque no botão roxo (Converse com seu assistente).', 'En los Chats de Marina, toca el botón morado (Chatea con tu asistente).') },
    { alvo: '[data-t=wa-ia-entrada]', clique: true, garante: tela('m', 'assistente'), tit: T('Assistente para empresas', 'Asistente para empresas'), txt: T('É o assistente da Meta AI: ajuda a MARINA (ideias, textos, imagens). Toque na caixa de mensagem.', 'Es el asistente de Meta AI: ayuda a MARINA (ideas, textos, imágenes). Toca la caja de mensaje.') },
    { alvo: '[data-t=wa-ia-termos]', garante: tela('m', 'iatermos'), tit: T('Os termos', 'Los términos'), txt: dep(T('Antes da primeira conversa vêm os termos: é opcional e as conversas podem melhorar a IA. Aceitar é decisão da cliente.', 'Antes del primer chat vienen los términos: es opcional y los chats pueden mejorar la IA. Aceptar es decisión de la clienta.')) },
    { alvo: '[data-t=wa-aba-ferramentas]', clique: true, garante: tela('m', 'conversas'), tit: T('E quem responde clientes?', '¿Y quién responde a los clientes?'), txt: T('Responder CLIENTES sozinho é o agente de IA, que vem no Meta One. Toque em Ferramentas.', 'Responder a CLIENTES solo es el agente de IA, que viene en Meta One. Toca Herramientas.') },
    { alvo: '[data-t=wa-ferr-metaone]', clique: true, garante: tela('m', 'ferramentas'), tit: T('Meta One', 'Meta One'), txt: T('Toque em Meta One.', 'Toca Meta One.') },
    { alvo: '[data-t=wa-metaone-plano]', livre: '.wa-aba-plano', garante: tela('m', 'metaone'), tit: T('Os planos', 'Los planes'), txt: dep(T('Essencial: agente de IA para até 500 conversas por mês. Toque nas abas para ver Avançado, Expert e Max.', 'Esencial: agente de IA para hasta 500 chats por mes. Toca las pestañas para ver Avanzado, Expert y Max.')) },
    fim('[data-t=wa-cel-marina]', T('Duas IAs diferentes 🎉', '¡Dos IA diferentes! 🎉'), T('Assistente = ajuda a Marina. Agente = responde clientes (pago, Meta One). Com o agente ligado, saudação e ausência ficam desligadas.', 'Asistente = ayuda a Marina. Agente = responde clientes (pago, Meta One). Con el agente activo, bienvenida y ausencia quedan desactivadas.'), tela('m', 'metaone'))
  ];

  /* ---------- 09 · Instagram e Facebook ---------- */
  TOURS['conectar-whatsapp'] = [
    { antes: cenario(function (s) { catPronto(s); s.m = 'ferramentas' }), alvo: '[data-t=wa-ferr-conectar]', clique: true, garante: tela('m', 'ferramentas'),
      tit: T('Instagram e Facebook', 'Instagram y Facebook'), txt: T('Em Gerencie sua conta, toque em Instagram e Facebook.', 'En Administra tu cuenta, toca Instagram y Facebook.') },
    { alvo: '[data-t=wa-conectar-lista]', garante: tela('m', 'conectar'), tit: T('Conectar', 'Conectar'), txt: dep(T('Ligar a Página do Facebook e o Instagram deixa clientes iniciarem conversas no WhatsApp a partir deles. É uma Página e um Instagram por WhatsApp.', 'Vincular la Página de Facebook e Instagram permite que los clientes inicien chats en WhatsApp desde ellos. Es una Página y un Instagram por WhatsApp.')) },
    fim('[data-t=wa-conectar-fb]', T('Ligar é com a cliente', 'Vincular es con la clienta'), T('CONECTAR abre o login do Facebook. Quem entra é a cliente, com a conta dela; se der erro, a aula traz os erros mais comuns e o que fazer.', 'CONECTAR abre el inicio de sesión de Facebook. Quien entra es la clienta, con su cuenta; si da error, la clase trae los errores más comunes y qué hacer.'), tela('m', 'conectar'))
  ];
})();
