/* Laboratório › Código base explicado (versão completa): seletor de cenários, guia "Adicionar evento" e "Ache os erros".
   A aula (Pixel 03) continua com a versão simples; só o Laboratório usa esta. Carregado depois de ferramentas.js.
   Fontes oficiais (Meta for Developers, lidas em 20/10/2026):
   - Meta Pixel › Reference: os 17 eventos padrão, as propriedades (content_ids, content_type, contents, currency, num_items,
     predicted_ltv, search_string, status, value, content_name, content_category); Purchase EXIGE value e currency.
   - Meta Pixel › Get started: código base entre <head> e </head>, em todas as páginas; “recomendamos manter” o PageView.
   - Conversion tracking: fbq('track') em qualquer ponto do <body>, ao carregar a página ou numa ação (clique);
     fbq('trackCustom', nome, {…}); nome personalizado: texto de até 50 caracteres.
   - Conversions API › Deduplicate: fbq('track', 'Purchase', {…}, {eventID: '…'}); mesmo nome + mesmo id no servidor; janela de 48 h.
   Os produtos, valores e páginas são da Lojinha de treino. */
(function () {
  var F = window.FERRAMENTAS; if (!F || !F['codigo-base']) return;
  var base = F['codigo-base'], montarSimples = base.montar;
  var ID = '1234567890123456';
  function L(pt, es) { return { pt: pt, es: es } }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }

  /* ---------- os 17 eventos padrão (Meta Pixel › Reference) ---------- */
  var EV = {
    AddPaymentInfo: { d: L('Dados de pagamento adicionados durante a compra.', 'Se agregan datos de pago durante la compra.'), p: ['content_ids', 'contents', 'currency', 'value'] },
    AddToCart: { d: L('Um produto foi colocado no carrinho.', 'Se agregó un producto al carrito.'), p: ['content_ids', 'content_type', 'contents', 'currency', 'value'] },
    AddToWishlist: { d: L('Um produto foi para a lista de desejos.', 'Se agregó un producto a la lista de deseos.'), p: ['content_ids', 'contents', 'currency', 'value'] },
    CompleteRegistration: { d: L('Um cadastro foi concluído.', 'Se completó un registro.'), p: ['currency', 'value', 'status'] },
    Contact: { d: L('A pessoa entrou em contato com a empresa (telefone, SMS, email, chat).', 'La persona contactó a la empresa (teléfono, SMS, correo, chat).'), p: [] },
    CustomizeProduct: { d: L('A pessoa personalizou um produto.', 'La persona personalizó un producto.'), p: [] },
    Donate: { d: L('A pessoa fez uma doação.', 'La persona hizo una donación.'), p: [] },
    FindLocation: { d: L('A pessoa procurou um endereço da loja para visitar.', 'La persona buscó una dirección de la tienda para visitarla.'), p: [] },
    InitiateCheckout: { d: L('A pessoa começou a finalizar a compra (ainda não terminou).', 'La persona empezó a finalizar la compra (todavía no terminó).'), p: ['content_ids', 'contents', 'currency', 'num_items', 'value'] },
    Lead: { d: L('Um cadastro de interesse foi enviado (ex.: formulário).', 'Se envió un registro de interés (ej.: formulario).'), p: ['currency', 'value'] },
    Purchase: { d: L('Uma compra foi concluída.', 'Se completó una compra.'), p: ['value', 'currency', 'content_ids', 'content_type', 'contents', 'num_items'], obrig: ['value', 'currency'] },
    Schedule: { d: L('A pessoa marcou um horário.', 'La persona reservó un horario.'), p: [] },
    Search: { d: L('A pessoa fez uma busca no site.', 'La persona hizo una búsqueda en el sitio.'), p: ['search_string', 'content_ids', 'content_type', 'contents', 'currency', 'value'] },
    StartTrial: { d: L('A pessoa começou um teste grátis.', 'La persona empezó una prueba gratis.'), p: ['currency', 'predicted_ltv', 'value'] },
    SubmitApplication: { d: L('A pessoa enviou uma inscrição (produto, serviço ou programa).', 'La persona envió una solicitud (producto, servicio o programa).'), p: [] },
    Subscribe: { d: L('A pessoa começou uma assinatura paga.', 'La persona empezó una suscripción paga.'), p: ['currency', 'predicted_ltv', 'value'] },
    ViewContent: { d: L('A pessoa abriu uma página importante, como a de um produto.', 'La persona abrió una página importante, como la de un producto.'), p: ['content_ids', 'content_type', 'contents', 'currency', 'value'] }
  };
  var NOMES = Object.keys(EV);

  /* ---------- explicações de cada parte (aparecem ao passar o mouse) ---------- */
  var X = {
    head: [L('<head>: o cabeçalho', '<head>: el encabezado'), L('Parte do topo da página. A Meta pede o código base aqui, <b>em todas as páginas</b> (a maioria dos sites põe num cabeçalho que se repete).', 'Parte superior de la página. Meta pide el código base aquí, <b>en todas las páginas</b> (la mayoría de los sitios lo pone en un encabezado que se repite).')],
    body: [L('<body>: o corpo da página', '<body>: el cuerpo de la página'), L('O que a pessoa vê. O código dos eventos vai aqui dentro, <b>só na página da ação</b> e sempre <b>depois</b> do código base.', 'Lo que ve la persona. El código de los eventos va aquí dentro, <b>solo en la página de la acción</b> y siempre <b>después</b> del código base.')],
    pagina: [L('Qual página é esta', 'Qué página es esta'), L('Cada evento mora na página onde a ação acontece: ViewContent na do produto, Purchase na de pedido concluído…', 'Cada evento vive en la página donde ocurre la acción: ViewContent en la del producto, Purchase en la de pedido completado…')],
    carregador: [L('O carregador (resumido)', 'El cargador (resumido)'), L('É o mesmo carregador do cenário “Só o código base”, aqui encolhido para caber. Cria a função <code>fbq</code> e chama a biblioteca da Meta. Ninguém edita.', 'Es el mismo cargador del escenario “Solo el código base”, aquí reducido para que quepa. Crea la función <code>fbq</code> y llama a la biblioteca de Meta. Nadie lo edita.')],
    script: [L('<script>', '<script>'), L('Abre um trecho de código JavaScript dentro da página.', 'Abre un fragmento de código JavaScript dentro de la página.')],
    'ev-carga': [L('Dispara quando a página abre', 'Se dispara cuando se abre la página'), L('Como está solto num <code>&lt;script&gt;</code>, o evento é enviado assim que a página carrega. Serve para eventos de “cheguei aqui”: ver produto, começar a compra, pedido concluído.', 'Como está suelto en un <code>&lt;script&gt;</code>, el evento se envía apenas carga la página. Sirve para eventos de “llegué aquí”: ver producto, empezar la compra, pedido completado.')],
    'ev-clique': [L('Dispara no clique', 'Se dispara con el clic'), L('O <code>addEventListener(\'click\', …)</code> espera a pessoa clicar no botão; só então chama o <code>fbq</code>. Serve para ações sem página nova: pôr no carrinho, chamar no WhatsApp, enviar um formulário.', 'El <code>addEventListener(\'click\', …)</code> espera a que la persona haga clic en el botón; recién entonces llama a <code>fbq</code>. Sirve para acciones sin página nueva: poner en el carrito, llamar por WhatsApp, enviar un formulario.')],
    'ev-botao': [L('O botão', 'El botón'), L('O botão da página que a pessoa clica. O <code>id</code> dele é o que o código usa para “ouvir” o clique.', 'El botón de la página en el que la persona hace clic. Su <code>id</code> es lo que usa el código para “escuchar” el clic.')],
    'ev-track': [L('fbq(\'track\', …): evento padrão', 'fbq(\'track\', …): evento estándar'), L('<code>track</code> envia um <b>evento padrão</b> da Meta (a lista oficial tem 17). Os padrões são os que a Meta já entende para medir, otimizar e criar públicos.', '<code>track</code> envía un <b>evento estándar</b> de Meta (la lista oficial tiene 17). Los estándar son los que Meta ya entiende para medir, optimizar y crear públicos.')],
    'ev-custom': [L('fbq(\'trackCustom\', …): evento personalizado', 'fbq(\'trackCustom\', …): evento personalizado'), L('<code>trackCustom</code> envia um evento com o nome que você escolher (texto de até 50 caracteres). Use quando nenhum dos 17 padrões serve. Ele aparece no Gerenciador de Eventos com esse nome e pode virar uma conversão personalizada.', '<code>trackCustom</code> envía un evento con el nombre que elijas (texto de hasta 50 caracteres). Úsalo cuando ninguno de los 17 estándar sirve. Aparece en el Administrador de eventos con ese nombre y puede convertirse en una conversión personalizada.')],
    'ev-eventid': [L('{eventID: …}: o “RG” do evento ⭐', '{eventID: …}: la “cédula” del evento ⭐'), L('Quarto pedaço do <code>fbq</code>. Quando a API de Conversões manda a mesma compra pelo servidor, o <code>eventID</code> do Pixel tem que ser igual ao <code>event_id</code> do servidor, e o nome do evento também. Assim a Meta conta <b>uma vez só</b> (se chegarem até 48 horas de diferença).', 'Cuarta parte del <code>fbq</code>. Cuando la API de Conversiones manda la misma compra por el servidor, el <code>eventID</code> del píxel tiene que ser igual al <code>event_id</code> del servidor, y el nombre del evento también. Así Meta cuenta <b>una sola vez</b> (si llegan con hasta 48 horas de diferencia).')],
    'p-value': [L('value: o valor', 'value: el valor'), L('Quanto a ação vale para a loja. Número com <b>ponto</b> nos centavos (<code>89.80</code>), sem “R$”. No <b>Purchase é obrigatório</b>.', 'Cuánto vale la acción para la tienda. Número con <b>punto</b> en los centavos (<code>89.80</code>), sin “R$”. En <b>Purchase es obligatorio</b>.')],
    'p-currency': [L('currency: a moeda', 'currency: la moneda'), L('O código de 3 letras da moeda do <code>value</code>: <code>BRL</code>, <code>USD</code>… Não vale “R$” nem “reais”. No <b>Purchase é obrigatório</b>.', 'El código de 3 letras de la moneda del <code>value</code>: <code>BRL</code>, <code>USD</code>… No vale “R$” ni “reales”. En <b>Purchase es obligatorio</b>.')],
    'p-content_ids': [L('content_ids: os ids dos produtos', 'content_ids: los ids de los productos'), L('Lista com o id de cada produto, <b>igual ao id do catálogo</b> (ex.: <code>CANECA_01</code>). É o que liga o evento ao produto nos anúncios de catálogo.', 'Lista con el id de cada producto, <b>igual al id del catálogo</b> (ej.: <code>CANECA_01</code>). Es lo que une el evento al producto en los anuncios de catálogo.')],
    'p-content_type': [L('content_type', 'content_type'), L('<code>product</code> quando os ids são de produtos; <code>product_group</code> quando são de grupos (as variações de um produto).', '<code>product</code> cuando los ids son de productos; <code>product_group</code> cuando son de grupos (las variaciones de un producto).')],
    'p-contents': [L('contents: produtos e quantidades', 'contents: productos y cantidades'), L('Lista de objetos, um por produto, com <code>id</code> e <code>quantity</code> (os dois obrigatórios). Diz o que foi comprado e quantas unidades.', 'Lista de objetos, uno por producto, con <code>id</code> y <code>quantity</code> (los dos obligatorios). Dice qué se compró y cuántas unidades.')],
    'p-num_items': [L('num_items', 'num_items'), L('Quantos itens havia quando a pessoa começou a finalizar a compra.', 'Cuántos artículos había cuando la persona empezó a finalizar la compra.')],
    'p-search_string': [L('search_string', 'search_string'), L('O texto que a pessoa digitou na busca do site.', 'El texto que la persona escribió en la búsqueda del sitio.')],
    'p-status': [L('status', 'status'), L('A situação do cadastro (verdadeiro ou falso), usado no CompleteRegistration.', 'El estado del registro (verdadero o falso), usado en CompleteRegistration.')],
    'p-predicted_ltv': [L('predicted_ltv', 'predicted_ltv'), L('Quanto a loja espera que um assinante valha ao longo do tempo (ela mesma define).', 'Cuánto espera la tienda que valga un suscriptor a lo largo del tiempo (ella misma lo define).')],
    'p-livre': [L('Parâmetro personalizado', 'Parámetro personalizado'), L('Nos eventos personalizados (e também nos padrões) dá para mandar informações próprias, como o nome do vídeo. Só não mande dados sensíveis (saúde, dinheiro, documentos).', 'En los eventos personalizados (y también en los estándar) se puede mandar información propia, como el nombre del video. Solo no mandes datos sensibles (salud, dinero, documentos).')],
    novo: [L('✨ A linha que você adicionou', '✨ La línea que agregaste'), L('Destacada em verde: é o evento montado no guia, no lugar certo da página escolhida.', 'Destacada en verde: es el evento armado en la guía, en el lugar correcto de la página elegida.')],
    // erros do cenário "Ache os erros"
    'e-antes': [L('🐞 Evento ANTES do código base', '🐞 Evento ANTES del código base'), L('Aqui o <code>fbq</code> ainda não existe: é o código base que cria a função. O navegador dá erro e o evento não sai. O evento vem sempre <b>depois</b> do código base.', 'Aquí <code>fbq</code> todavía no existe: es el código base el que crea la función. El navegador da error y el evento no sale. El evento va siempre <b>después</b> del código base.')],
    'e-head': [L('🐞 Purchase no cabeçalho', '🐞 Purchase en el encabezado'), L('O cabeçalho entra em <b>todas</b> as páginas: a “compra” seria contada em cada página aberta. É o caso do Diagnóstico “Purchase em todas as páginas”. O lugar certo é a página de pedido concluído.', 'El encabezado entra en <b>todas</b> las páginas: la “compra” se contaría en cada página abierta. Es el caso del Diagnóstico “Purchase en todas las páginas”. El lugar correcto es la página de pedido completado.')],
    'e-valor': [L('🐞 Valor como texto', '🐞 Valor como texto'), L('<code>\'R$ 89,80\'</code> é texto, com símbolo e vírgula. O <code>value</code> é um número com ponto: <code>89.80</code>.', '<code>\'R$ 89,80\'</code> es texto, con símbolo y coma. El <code>value</code> es un número con punto: <code>89.80</code>.')],
    'e-moeda': [L('🐞 Moeda escrita por extenso', '🐞 Moneda escrita completa'), L('<code>\'reais\'</code> não é um código de moeda. O certo é <code>\'BRL\'</code>.', '<code>\'reais\'</code> no es un código de moneda. Lo correcto es <code>\'BRL\'</code>.')],
    'e-minuscula': [L('🐞 Nome do evento padrão diferente', '🐞 Nombre del evento estándar distinto'), L('<code>\'purchase\'</code> em minúsculas não é o evento padrão <code>Purchase</code>: o nome tem que ser escrito exatamente como na lista oficial, com as maiúsculas.', '<code>\'purchase\'</code> en minúsculas no es el evento estándar <code>Purchase</code>: el nombre tiene que escribirse exactamente como en la lista oficial, con las mayúsculas.')],
    'e-pvfora': [L('🐞 PageView apagado', '🐞 PageView borrado'), L('A Meta recomenda <b>manter</b> o <code>fbq(\'track\', \'PageView\')</code> do código base. Sem ele, as visitas não são contadas.', 'Meta recomienda <b>mantener</b> el <code>fbq(\'track\', \'PageView\')</code> del código base. Sin él, no se cuentan las visitas.')]
  };
  function expEv(nome) { var e = EV[nome]; return e ? [L('Evento ' + nome, 'Evento ' + nome), L(e.d.pt + (e.obrig ? ' <b>Exige value e currency.</b>' : ''), e.d.es + (e.obrig ? ' <b>Exige value y currency.</b>' : ''))] : [L('Evento “' + esc(nome) + '”', 'Evento “' + esc(nome) + '”'), L('Nome do seu evento personalizado: é assim que ele aparece no Gerenciador de Eventos.', 'Nombre de tu evento personalizado: así aparece en el Administrador de eventos.')] }

  /* ---------- pedaços de código (cada linha: [chave da explicação, html, classe extra]) ---------- */
  var s = function (x) { return '<span class="s">\'' + esc(x) + '\'</span>' };
  var fbq = '<span class="f">fbq</span>';
  function ind(n) { return new Array(n + 1).join('  ') }
  function valorJS(v) {   // valor do parâmetro como aparece no código
    if (Array.isArray(v)) return '[' + v.map(function (x) { return typeof x === 'object' ? '{id: ' + s(x.id) + ', quantity: <span class="n">' + x.quantity + '</span>}' : s(x) }).join(', ') + ']';
    if (typeof v === 'number') return '<span class="n">' + v.toFixed(2) + '</span>';
    if (typeof v === 'boolean') return '<span class="k">' + v + '</span>';
    if (v && v.cru) return '<span class="n">' + esc(v.cru) + '</span>';
    return s(v);
  }
  function chamada(e, n, cls) {   // fbq('track'|'trackCustom', 'Nome', {…}, {eventID})
    var L2 = [], tipo = e.custom ? 'trackCustom' : 'track', ks = Object.keys(e.params || {});
    var cab = ind(n) + fbq + '(<span data-p="' + (e.custom ? 'ev-custom' : 'ev-track') + '">' + s(tipo) + '</span>, <span data-p="evn:' + esc(e.nome) + '">' + s(e.nome) + '</span>';
    if (!ks.length && !e.eventID) { L2.push([null, cab + ');', cls]); return L2 }
    if (!ks.length) { L2.push([null, cab + ', {}, <span data-p="ev-eventid">{eventID: ' + s(e.eventID) + '}</span>);', cls]); return L2 }
    L2.push([null, cab + ', {', cls]);
    ks.forEach(function (k, i) { var pk = X['p-' + k] ? 'p-' + k : 'p-livre'; L2.push([pk, ind(n + 1) + '<span class="a">' + esc(k) + '</span>: ' + valorJS(e.params[k]) + (i < ks.length - 1 ? ',' : ''), cls]) });
    L2.push([e.eventID ? 'ev-eventid' : null, ind(n) + '}' + (e.eventID ? ', {eventID: ' + s(e.eventID) + '}' : '') + ');', cls]);
    return L2;
  }
  function baseCompacto(n) {
    return [['cm', ind(n) + '<span class="c">&lt;!-- Meta Pixel Code --&gt;</span>'], ['script', ind(n) + '<span class="t">&lt;script&gt;</span>'],
      ['carregador', ind(n + 1) + '!<span class="k">function</span>(f,b,e,v,n,t,s){…}(window, document, <span class="s">\'script\'</span>, <span class="s">\'…/fbevents.js\'</span>);'],
      ['init', ind(n + 1) + fbq + '(' + s('init') + ', ' + s(ID) + ');'], ['pv', ind(n + 1) + fbq + '(' + s('track') + ', ' + s('PageView') + ');'],
      ['script', ind(n) + '<span class="t">&lt;/script&gt;</span>'], ['ns', ind(n) + '<span class="t">&lt;noscript&gt;</span>…<span class="t">&lt;/noscript&gt;</span>'], ['cm', ind(n) + '<span class="c">&lt;!-- End Meta Pixel Code --&gt;</span>']];
  }
  // uma página: comentário com o nome, <head> com o código base, <body> com os eventos
  function pagina(nomePag, eventos, novo) {
    var c = novo ? 'fr-novo' : '', out = [['pagina', '<span class="c">&lt;!-- ' + esc(nomePag) + ' --&gt;</span>'], ['head', '<span class="t">&lt;head&gt;</span>']].concat(baseCompacto(1), [['head', '<span class="t">&lt;/head&gt;</span>'], ['body', '<span class="t">&lt;body&gt;</span>'], [null, ind(1) + '<span class="c">…</span>']]);
    eventos.forEach(function (e) {
      var cls = novo ? c : '';
      if (e.clique) {
        var bid = e.botaoId || 'botao';
        out.push(['ev-botao', ind(1) + '<span class="t">&lt;button</span> id=' + '<span class="s">"' + esc(bid) + '"</span><span class="t">&gt;</span>' + esc(e.botao) + '<span class="t">&lt;/button&gt;</span>', cls]);
        out.push(['script', ind(1) + '<span class="t">&lt;script&gt;</span>', cls]);
        out.push(['ev-clique', ind(2) + 'document.getElementById(' + s(bid) + ').addEventListener(' + s('click') + ', <span class="k">function</span> () {', cls]);
        out = out.concat(chamada(e, 3, cls));
        out.push(['ev-clique', ind(2) + '});', cls]);
        out.push(['script', ind(1) + '<span class="t">&lt;/script&gt;</span>', cls]);
      } else {
        out.push(['ev-carga', ind(1) + '<span class="t">&lt;script&gt;</span>', cls]);
        out = out.concat(chamada(e, 2, cls));
        out.push(['ev-carga', ind(1) + '<span class="t">&lt;/script&gt;</span>', cls]);
      }
    });
    return out.concat([[null, ind(1) + '<span class="c">…</span>'], ['body', '<span class="t">&lt;/body&gt;</span>']]);
  }

  /* ---------- os cenários ---------- */
  var CEN = [
    { id: 'base', t: L('Só o código base', 'Solo el código base') },
    { id: 'ver', t: L('👀 Ver produto', '👀 Ver producto'), linhas: function (T) { return pagina(T(L('página do produto: produto-caneca_01.html', 'página del producto: produto-caneca_01.html')), [{ nome: 'ViewContent', params: { content_ids: ['CANECA_01'], content_type: 'product', value: 49.9, currency: 'BRL' } }]) } },
    { id: 'carrinho', t: L('🛒 Carrinho', '🛒 Carrito'), linhas: function (T) { return pagina(T(L('página do produto: o botão “Pôr no carrinho”', 'página del producto: el botón “Poner en el carrito”')), [{ nome: 'AddToCart', clique: true, botaoId: 'botaoCarrinho', botao: T(L('Pôr no carrinho', 'Poner en el carrito')), params: { content_ids: ['CANECA_01'], content_type: 'product', value: 49.9, currency: 'BRL' } }]) } },
    { id: 'checkout', t: L('💳 Início da compra', '💳 Inicio de la compra'), linhas: function (T) { return pagina(T(L('página de pagamento: checkout.html', 'página de pago: checkout.html')), [{ nome: 'InitiateCheckout', params: { content_ids: ['CANECA_01', 'ECOBAG_03'], num_items: { cru: '2' }, value: 89.8, currency: 'BRL' } }]) } },
    { id: 'compra', t: L('✅ Compra', '✅ Compra'), linhas: function (T) { return pagina(T(L('página de pedido concluído: obrigado.html', 'página de pedido completado: obrigado.html')), [{ nome: 'Purchase', params: { value: 89.8, currency: 'BRL', contents: [{ id: 'CANECA_01', quantity: 1 }, { id: 'ECOBAG_03', quantity: 1 }], content_type: 'product' } }]) } },
    { id: 'cadastro', t: L('📝 Cadastro e contato', '📝 Registro y contacto'), linhas: function (T) { return pagina(T(L('página “Fale com a gente”', 'página “Contáctanos”')), [{ nome: 'Lead', clique: true, botaoId: 'enviarNewsletter', botao: T(L('Quero receber novidades', 'Quiero recibir novedades')) }, { nome: 'Contact', clique: true, botaoId: 'botaoWhatsApp', botao: T(L('Chamar no WhatsApp', 'Escribir por WhatsApp')) }]).concat([[null, ''], ['pagina', '<span class="c">&lt;!-- ' + esc(T(L('página de cadastro concluído (só o trecho do evento)', 'página de registro completado (solo el fragmento del evento)'))) + ' --&gt;</span>'], ['ev-carga', '<span class="t">&lt;script&gt;</span>']], chamada({ nome: 'CompleteRegistration' }, 1, ''), [['ev-carga', '<span class="t">&lt;/script&gt;</span>']]) } },
    { id: 'custom', t: L('⭐ Personalizado', '⭐ Personalizado'), linhas: function (T) { return pagina(T(L('página do produto: o vídeo “Como usar a caneca”', 'página del producto: el video “Cómo usar la taza”')), [{ nome: 'AssistiuVideo', custom: true, clique: true, botaoId: 'playVideo', botao: '▶', params: { video: 'como-usar-a-caneca' } }]) } },
    { id: 'dedup', t: L('🔁 Compra com eventID', '🔁 Compra con eventID'), linhas: function (T) { return pagina(T(L('página de pedido concluído: obrigado.html (com a API de Conversões)', 'página de pedido completado: obrigado.html (con la API de Conversiones)')), [{ nome: 'Purchase', params: { value: 89.8, currency: 'BRL' }, eventID: 'pedido-1042' }]) } },
    { id: 'erros', t: L('🐞 Ache os erros', '🐞 Encuentra los errores'), linhas: function (T) {
      return [['pagina', '<span class="c">&lt;!-- ' + esc(T(L('página de pedido concluído de um cliente (com 6 erros)', 'página de pedido completado de un cliente (con 6 errores)'))) + ' --&gt;</span>'], ['head', '<span class="t">&lt;head&gt;</span>'],
        ['e-antes', ind(1) + '<span class="t">&lt;script&gt;</span> ' + fbq + '(' + s('track') + ', ' + s('Purchase') + ', {<span class="a">value</span>: <span data-p="e-valor">' + s('R$ 89,80') + '</span>, <span class="a">currency</span>: <span data-p="e-moeda">' + s('reais') + '</span>}); <span class="t">&lt;/script&gt;</span>', 'fr-erro'],
        ['cm', ind(1) + '<span class="c">&lt;!-- Meta Pixel Code --&gt;</span>'], ['script', ind(1) + '<span class="t">&lt;script&gt;</span>'],
        ['carregador', ind(2) + '!<span class="k">function</span>(f,b,e,v,n,t,s){…}(window, document, <span class="s">\'script\'</span>, <span class="s">\'…/fbevents.js\'</span>);'],
        ['init', ind(2) + fbq + '(' + s('init') + ', ' + s(ID) + ');'], ['e-pvfora', ind(2) + '<span class="c">// fbq(\'track\', \'PageView\');  ← ' + esc(T(L('apagado', 'borrado'))) + '</span>', 'fr-erro'],
        ['script', ind(1) + '<span class="t">&lt;/script&gt;</span>'], ['cm', ind(1) + '<span class="c">&lt;!-- End Meta Pixel Code --&gt;</span>'],
        ['e-head', ind(1) + '<span class="t">&lt;script&gt;</span> ' + fbq + '(' + s('track') + ', ' + s('Purchase') + '); <span class="t">&lt;/script&gt;</span>  <span class="c">// ' + esc(T(L('no cabeçalho de todas as páginas', 'en el encabezado de todas las páginas'))) + '</span>', 'fr-erro'],
        ['head', '<span class="t">&lt;/head&gt;</span>'], ['body', '<span class="t">&lt;body&gt;</span>'],
        ['e-minuscula', ind(1) + '<span class="t">&lt;script&gt;</span> ' + fbq + '(' + s('track') + ', ' + s('purchase') + ', {<span class="a">value</span>: <span class="n">89.80</span>, <span class="a">currency</span>: ' + s('BRL') + '}); <span class="t">&lt;/script&gt;</span>', 'fr-erro'],
        ['body', '<span class="t">&lt;/body&gt;</span>']];
    } }
  ];

  /* ---------- o guia "Adicionar evento" ---------- */
  var PAGS = [
    ['produto', L('Página do produto', 'Página del producto'), 'produto-caneca_01.html'], ['carrinho', L('Página do carrinho', 'Página del carrito'), 'carrinho.html'],
    ['checkout', L('Página de pagamento', 'Página de pago'), 'checkout.html'], ['obrigado', L('Página de pedido concluído', 'Página de pedido completado'), 'obrigado.html'],
    ['cadastro', L('Página de cadastro concluído', 'Página de registro completado'), 'cadastro-ok.html'], ['outra', L('Outra página do site', 'Otra página del sitio'), 'pagina.html'],
    ['cabecalho', L('No cabeçalho (todas as páginas)', 'En el encabezado (todas las páginas)'), '']
  ];
  var SUGERE = { ViewContent: 'produto', AddToCart: 'clique', InitiateCheckout: 'checkout', Purchase: 'obrigado', CompleteRegistration: 'cadastro', Lead: 'clique', Contact: 'clique', Search: 'outra', AddPaymentInfo: 'checkout', AddToWishlist: 'clique', Subscribe: 'obrigado', StartTrial: 'obrigado', Schedule: 'clique', SubmitApplication: 'clique', CustomizeProduct: 'clique', Donate: 'obrigado', FindLocation: 'clique' };
  var NOVO = null;   // o evento que a pessoa montou
  var css = '.lab-ev{margin:0 0 14px}.lab-cen{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 12px}.lab-cen button{border:2px solid #16294A;background:#fff;color:#16294A;border-radius:999px;padding:6px 12px;font:700 13px "Segoe UI",sans-serif;cursor:pointer}.lab-cen button.on{background:#16294A;color:#fff}.lab-cen button.add{background:#FFE07A}' +
    '.fr-codigo .n{color:#F7B267}.fr-codigo .a{color:#9CDCFE}.fr-ln.fr-novo{background:rgba(30,158,85,.22);box-shadow:inset 3px 0 0 #2ECC71}.fr-ln.fr-erro{background:rgba(224,36,94,.16);box-shadow:inset 3px 0 0 #FF5C8A}' +
    '.lab-guia{border:2px solid #16294A;border-radius:16px;background:#fff;padding:16px;margin:0 0 14px;box-shadow:4px 4px 0 #16294A}.lab-guia h3{margin:0 0 4px;font-size:17px}.lab-passos{display:flex;gap:6px;margin:0 0 12px;flex-wrap:wrap}.lab-passos span{font:700 12px "Segoe UI",sans-serif;padding:4px 10px;border-radius:999px;background:#EEF2F7;color:#64748B}.lab-passos span.on{background:#2F6FD6;color:#fff}' +
    '.lab-guia label{display:block;font-weight:700;margin:10px 0 4px}.lab-guia select,.lab-guia input{width:100%;max-width:420px;padding:9px 10px;border:2px solid #CBD5E1;border-radius:10px;font:15px "Segoe UI",sans-serif}.lab-guia small{color:#64748B;display:block;margin-top:3px}' +
    '.lab-erro{background:#FDE8EF;border:2px solid #E0245E;color:#8A1239;border-radius:10px;padding:8px 10px;margin:10px 0 0}.lab-ok{background:#E3F7EA;border:2px solid #1E9E55;border-radius:10px;padding:8px 10px;margin:10px 0 0}.lab-btns{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}' +
    '.lab-onde{background:#F6F8FC;border-radius:10px;padding:10px 12px;margin:10px 0 0;font-size:14px}.lab-onde b{color:#16294A}.lab-rad{display:flex;flex-direction:column;gap:6px}.lab-rad label{font-weight:400;margin:0;display:flex;gap:8px;align-items:center}.lab-rad input{width:auto}';

  function montarLab(el, T, lang) {
    if (!document.getElementById('lab-ev-css')) { var st = document.createElement('style'); st.id = 'lab-ev-css'; st.textContent = css; document.head.appendChild(st) }
    var cen = 'base', guia = null, fixo = null;
    function expTxt(k) {
      if (!k) return null;
      if (k.indexOf('evn:') === 0) return expEv(k.slice(4));
      return X[k] || null;
    }
    function codigo() {
      var c = CEN.filter(function (x) { return x.id === cen })[0];
      if (cen === 'meu' && NOVO) return linhasNovo(T);
      return c && c.linhas ? c.linhas(T) : null;
    }
    function render() {
      var linhas = codigo();
      var chips = CEN.map(function (c) { return '<button data-cen="' + c.id + '"' + (c.id === cen ? ' class="on"' : '') + '>' + T(c.t) + '</button>' }).join('') +
        (NOVO ? '<button data-cen="meu"' + (cen === 'meu' ? ' class="on"' : '') + '>✨ ' + T(L('Meu evento', 'Mi evento')) + ': ' + esc(NOVO.nome) + '</button>' : '') +
        '<button class="add" data-lab="abrir">➕ ' + T(L('Adicionar evento', 'Agregar evento')) + '</button>';
      var topo = '<div class="lab-ev"><div class="lab-cen" role="tablist" aria-label="' + T(L('Cenários', 'Escenarios')) + '">' + chips + '</div>' + (guia ? guiaHTML() : '') + '</div>';
      el.innerHTML = topo + '<div class="lab-area"></div>';
      var area = el.querySelector('.lab-area');
      if (!linhas) { montarSimples(area, T, lang); fixo = null; return }   // "Só o código base": a ferramenta completa de antes
      var tit = cen === 'erros' ? T(L('ache os 6 erros: passe o mouse nas linhas vermelhas', 'encuentra los 6 errores: pasa el mouse por las líneas rojas')) : cen === 'meu' ? T(L('o seu evento, no lugar certo', 'tu evento, en el lugar correcto')) : T(L('o código base e o evento, em cada lugar', 'el código base y el evento, en cada lugar'));
      area.innerHTML = '<div class="fr-cb"><div class="fr-codigo" role="list"><div class="fr-codigo-tit">● ' + esc(tit) + '</div>' +
        linhas.map(function (l) { var p = l[0]; return '<div class="fr-ln' + (p ? ' fr-hot' : '') + (l[2] ? ' ' + l[2] : '') + '"' + (p ? ' data-p="' + p + '" tabindex="0"' : '') + '>' + (l[1] || ' ') + '</div>' }).join('') +
        '</div><div class="fr-exp" aria-live="polite"><span class="fr-exp-dica">' + T(cen === 'erros' ? L('👈 As linhas em vermelho têm erros. Passe o mouse (ou toque) em cada uma para ver o que está errado e como fica certo.', '👈 Las líneas en rojo tienen errores. Pasa el mouse (o toca) cada una para ver qué está mal y cómo queda bien.') : L('👈 Passe o mouse ou toque em cada parte: a página, o código base, o gatilho, o nome do evento e cada parâmetro.', '👈 Pasa el mouse o toca cada parte: la página, el código base, el disparador, el nombre del evento y cada parámetro.')) + '</span></div></div>' +
        '<p class="fr-nota">' + T(L('ID e produtos fictícios. Os nomes dos eventos e parâmetros seguem a referência oficial do Pixel da Meta; quem cola o código no site é o desenvolvedor ou a plataforma da loja.', 'ID y productos ficticios. Los nombres de los eventos y parámetros siguen la referencia oficial del píxel de Meta; quien pega el código en el sitio es el desarrollador o la plataforma de la tienda.')) + '</p>';
      fixo = null;
    }
    function mostra(p) {
      var d = expTxt(p), exp = el.querySelector('.fr-exp'); if (!d || !exp) return;
      exp.innerHTML = '<b>' + T(d[0]).replace(/</g, '&lt;').replace(/&lt;(\/?)(b|code)>/g, '<$1$2>') + '</b><p>' + T(d[1]) + '</p>';
      el.querySelectorAll('.lab-area [data-p]').forEach(function (x) { x.classList.toggle('on', x.getAttribute('data-p') === p) });
    }

    /* --- o guia em 3 passos --- */
    function guiaHTML() {
      var g = guia, passos = [L('1 · Qual evento?', '1 · ¿Qué evento?'), L('2 · Quais detalhes?', '2 · ¿Qué detalles?'), L('3 · Onde colocar?', '3 · ¿Dónde ponerlo?')];
      var h = '<div class="lab-guia" data-t="lab-guia"><h3>➕ ' + T(L('Adicionar evento', 'Agregar evento')) + '</h3><div class="lab-passos">' + passos.map(function (p, i) { return '<span class="' + (i === g.passo ? 'on' : '') + '">' + T(p) + '</span>' }).join('') + '</div>';
      if (g.passo === 0) {
        h += '<label for="labEv">' + T(L('Evento', 'Evento')) + '</label><select id="labEv"><option value="">' + T(L('Escolha…', 'Elige…')) + '</option><optgroup label="' + T(L('Eventos padrão (lista oficial)', 'Eventos estándar (lista oficial)')) + '">' + NOMES.map(function (n) { return '<option value="' + n + '"' + (g.nome === n && !g.custom ? ' selected' : '') + '>' + n + '</option>' }).join('') + '</optgroup><option value="__custom"' + (g.custom ? ' selected' : '') + '>⭐ ' + T(L('Personalizado (trackCustom)…', 'Personalizado (trackCustom)…')) + '</option></select>' +
          (g.custom ? '<label for="labNome">' + T(L('Nome do evento personalizado', 'Nombre del evento personalizado')) + '</label><input id="labNome" maxlength="80" value="' + esc(g.nomeCustom || '') + '" placeholder="AssistiuVideo"/><small>' + T(L('Texto de até 50 caracteres. Use quando nenhum evento padrão serve.', 'Texto de hasta 50 caracteres. Úsalo cuando ningún evento estándar sirve.')) + '</small>' : '') +
          (g.nome && !g.custom && EV[g.nome] ? '<div class="lab-onde">' + T(EV[g.nome].d) + '</div>' : '');
      } else if (g.passo === 1) {
        var ps = g.custom ? [] : EV[g.nome].p, h2 = '';
        ps.forEach(function (k) {
          if (k === 'contents') return;   // contents fica para o cenário Compra (lista de objetos)
          var v = g.params[k] == null ? '' : g.params[k], ob = EV[g.nome].obrig && EV[g.nome].obrig.indexOf(k) >= 0;
          if (k === 'currency') h2 += '<label for="lab_' + k + '">currency' + (ob ? ' *' : '') + '</label><input id="lab_' + k + '" data-par="' + k + '" value="' + esc(v) + '" placeholder="BRL"/><small>' + T(L('Código de 3 letras: BRL, USD…', 'Código de 3 letras: BRL, USD…')) + '</small>';
          else if (k === 'content_type') h2 += '<label for="lab_' + k + '">content_type</label><select id="lab_' + k + '" data-par="' + k + '"><option value="">—</option><option' + (v === 'product' ? ' selected' : '') + '>product</option><option' + (v === 'product_group' ? ' selected' : '') + '>product_group</option></select>';
          else if (k === 'status') h2 += '<label for="lab_' + k + '">status</label><select id="lab_' + k + '" data-par="' + k + '"><option value="">—</option><option' + (v === 'true' ? ' selected' : '') + '>true</option><option' + (v === 'false' ? ' selected' : '') + '>false</option></select>';
          else h2 += '<label for="lab_' + k + '">' + k + (ob ? ' *' : '') + '</label><input id="lab_' + k + '" data-par="' + k + '" value="' + esc(v) + '" placeholder="' + ({ value: '49.90', content_ids: 'CANECA_01, ECOBAG_03', num_items: '2', search_string: 'caneca azul', predicted_ltv: '120.00' }[k] || '') + '"/>' + (k === 'content_ids' ? '<small>' + T(L('Separe com vírgula. Use o mesmo id do catálogo.', 'Separa con coma. Usa el mismo id del catálogo.')) + '</small>' : k === 'value' ? '<small>' + T(L('Número com ponto: 49.90', 'Número con punto: 49.90')) + '</small>' : '');
        });
        if (g.custom) h2 += '<label for="labChave">' + T(L('Parâmetro (opcional): nome', 'Parámetro (opcional): nombre')) + '</label><input id="labChave" data-livre="k" value="' + esc(g.livreK || '') + '" placeholder="video"/><label for="labValor">' + T(L('Parâmetro (opcional): valor', 'Parámetro (opcional): valor')) + '</label><input id="labValor" data-livre="v" value="' + esc(g.livreV || '') + '" placeholder="como-usar-a-caneca"/>';
        h += h2 || '<div class="lab-onde">' + T(L('Este evento não tem parâmetros na lista oficial. Pode seguir.', 'Este evento no tiene parámetros en la lista oficial. Puedes seguir.')) + '</div>';
        if (!g.custom && EV[g.nome].obrig) h += '<small>* ' + T(L('obrigatório neste evento', 'obligatorio en este evento')) + '</small>';
      } else {
        h += '<div class="lab-rad">' + '<label><input type="radio" name="labQuando" value="carga"' + (g.quando === 'carga' ? ' checked' : '') + '/> ' + T(L('Quando a página abre', 'Cuando se abre la página')) + '</label>' + '<label><input type="radio" name="labQuando" value="clique"' + (g.quando === 'clique' ? ' checked' : '') + '/> ' + T(L('Quando a pessoa clica num botão', 'Cuando la persona hace clic en un botón')) + '</label></div>' +
          '<label for="labPag">' + T(L('Em qual página?', '¿En qué página?')) + '</label><select id="labPag">' + PAGS.map(function (p) { return '<option value="' + p[0] + '"' + (g.pag === p[0] ? ' selected' : '') + '>' + T(p[1]) + '</option>' }).join('') + '</select>' +
          (g.quando === 'clique' ? '<label for="labBotao">' + T(L('Texto do botão', 'Texto del botón')) + '</label><input id="labBotao" value="' + esc(g.botao || '') + '" placeholder="' + T(L('Pôr no carrinho', 'Poner en el carrito')) + '"/>' : '') +
          '<div class="lab-onde">📍 <b>' + T(L('A regra:', 'La regla:')) + '</b> ' + T(L('o código base fica no &lt;head&gt; de todas as páginas; o evento vai no &lt;body&gt; da página da ação, sempre depois do código base.', 'el código base va en el &lt;head&gt; de todas las páginas; el evento va en el &lt;body&gt; de la página de la acción, siempre después del código base.')) + '</div>';
      }
      if (g.erro) h += '<div class="lab-erro" role="alert">' + g.erro + '</div>';
      h += '<div class="lab-btns">' + (g.passo ? '<button class="btn sec" data-lab="voltar">◀ ' + T(L('Voltar', 'Volver')) + '</button>' : '') + '<button class="btn" data-lab="seguir">' + T(g.passo < 2 ? L('Próximo ▶', 'Siguiente ▶') : L('✨ Pôr no código', '✨ Poner en el código')) + '</button><button class="btn sec" data-lab="fechar">✕ ' + T(L('Fechar', 'Cerrar')) + '</button></div></div>';
      return h;
    }
    function le() {   // lê o que está na tela do guia
      var g = guia, q = function (sel) { return el.querySelector(sel) };
      if (g.passo === 0) { var sv = q('#labEv'); if (sv) { g.custom = sv.value === '__custom'; g.nome = g.custom ? '' : sv.value } var ni = q('#labNome'); if (ni) g.nomeCustom = ni.value }
      if (g.passo === 1) { el.querySelectorAll('[data-par]').forEach(function (i) { g.params[i.getAttribute('data-par')] = i.value.trim() }); var k = q('[data-livre=k]'), v = q('[data-livre=v]'); if (k) g.livreK = k.value.trim(); if (v) g.livreV = v.value.trim() }
      if (g.passo === 2) { var r = q('input[name=labQuando]:checked'); if (r) g.quando = r.value; var pg = q('#labPag'); if (pg) g.pag = pg.value; var b = q('#labBotao'); if (b) g.botao = b.value.trim() }
    }
    function confere() {   // os erros comuns, em linguagem simples
      var g = guia, E = function (pt, es) { return T(L(pt, es)) };
      if (g.passo === 0) {
        if (!g.custom && !g.nome) return E('Escolha um evento da lista (ou “Personalizado”).', 'Elige un evento de la lista (o “Personalizado”).');
        if (g.custom) {
          var n = (g.nomeCustom || '').trim();
          if (!n) return E('Escreva o nome do evento personalizado.', 'Escribe el nombre del evento personalizado.');
          if (n.length > 50) return E('O nome passou de 50 caracteres (tem ' + n.length + '). Encurte.', 'El nombre pasó los 50 caracteres (tiene ' + n.length + '). Acórtalo.');
          var igual = NOMES.filter(function (x) { return x.toLowerCase() === n.toLowerCase() })[0];
          if (igual) return E('“' + esc(n) + '” é o evento padrão <b>' + igual + '</b>. Escolha-o na lista de eventos padrão (com “track” e escrito exatamente assim), em vez de criar um personalizado.', '“' + esc(n) + '” es el evento estándar <b>' + igual + '</b>. Elígelo en la lista de eventos estándar (con “track” y escrito exactamente así), en lugar de crear uno personalizado.');
          g.nome = n;
        }
      }
      if (g.passo === 1) {
        var p = g.params, ob = (!g.custom && EV[g.nome].obrig) || [];
        if (p.value && /,/.test(p.value)) return E('No <b>value</b>, use ponto nos centavos: <code>' + esc(p.value.replace(/[^\d,]/g, '').replace(',', '.')) + '</code> (vírgula não é entendida).', 'En <b>value</b>, usa punto en los centavos: <code>' + esc(p.value.replace(/[^\d,]/g, '').replace(',', '.')) + '</code> (la coma no se entiende).');
        if (p.value && !/^\d+(\.\d+)?$/.test(p.value)) return E('O <b>value</b> é só o número, sem “R$” nem espaços (ex.: 49.90).', 'El <b>value</b> es solo el número, sin “R$” ni espacios (ej.: 49.90).');
        if (p.currency && !/^[A-Za-z]{3}$/.test(p.currency)) return E('A <b>currency</b> é o código de 3 letras: <code>BRL</code> (não “R$” nem “reais”).', 'La <b>currency</b> es el código de 3 letras: <code>BRL</code> (no “R$” ni “reales”).');
        if (p.currency) p.currency = p.currency.toUpperCase();
        if (ob.indexOf('value') >= 0 && !p.value) return E('No <b>' + g.nome + '</b>, o <b>value</b> é obrigatório.', 'En <b>' + g.nome + '</b>, el <b>value</b> es obligatorio.');
        if (ob.indexOf('currency') >= 0 && !p.currency) return E('No <b>' + g.nome + '</b>, a <b>currency</b> é obrigatória.', 'En <b>' + g.nome + '</b>, la <b>currency</b> es obligatoria.');
        if (p.value && !p.currency) return E('Tem valor sem moeda: preencha a <b>currency</b> (ex.: BRL).', 'Hay valor sin moneda: completa la <b>currency</b> (ej.: BRL).');
        if (p.num_items && !/^\d+$/.test(p.num_items)) return E('O <b>num_items</b> é um número inteiro (ex.: 2).', 'El <b>num_items</b> es un número entero (ej.: 2).');
        if (p.predicted_ltv && !/^\d+(\.\d+)?$/.test(p.predicted_ltv)) return E('O <b>predicted_ltv</b> é um número com ponto (ex.: 120.00).', 'El <b>predicted_ltv</b> es un número con punto (ej.: 120.00).');
        if (g.livreK && !/^[A-Za-z_][A-Za-z0-9_]*$/.test(g.livreK)) return E('O nome do parâmetro deve ter só letras, números e _, sem espaços (ex.: video).', 'El nombre del parámetro debe tener solo letras, números y _, sin espacios (ej.: video).');
      }
      if (g.passo === 2) {
        if (!g.quando) return E('Escolha quando o evento dispara: quando a página abre ou no clique.', 'Elige cuándo se dispara el evento: cuando se abre la página o con el clic.');
        if (g.pag === 'cabecalho') return E('No cabeçalho, o evento dispararia em <b>todas</b> as páginas (é o caso “Purchase em todas as páginas” do Diagnóstico). Escolha a página onde a ação acontece.', 'En el encabezado, el evento se dispararía en <b>todas</b> las páginas (es el caso “Purchase en todas las páginas” del Diagnóstico). Elige la página donde ocurre la acción.');
        if (g.nome === 'Purchase' && g.quando === 'clique') return E('A compra só está concluída quando a <b>página de pedido concluído abre</b>. No clique (no botão “Comprar”), a pessoa ainda pode desistir ou o pagamento falhar. Escolha “Quando a página abre”.', 'La compra solo está completa cuando <b>se abre la página de pedido completado</b>. Con el clic (en el botón “Comprar”), la persona todavía puede desistir o el pago puede fallar. Elige “Cuando se abre la página”.');
        if (g.nome === 'Purchase' && g.pag !== 'obrigado') return E('A compra só está concluída na <b>página de pedido concluído</b>. Em outra página, contaria compras que não aconteceram.', 'La compra solo está completa en la <b>página de pedido completado</b>. En otra página, contaría compras que no ocurrieron.');
        if (g.quando === 'clique' && !g.botao) return E('Escreva o texto do botão que a pessoa clica.', 'Escribe el texto del botón en el que la persona hace clic.');
      }
      return '';
    }
    function linhasNovo(T) {
      var g = NOVO, params = {};
      Object.keys(g.params || {}).forEach(function (k) {
        var v = g.params[k]; if (v === '' || v == null) return;
        if (k === 'value' || k === 'predicted_ltv') params[k] = { cru: v };
        else if (k === 'num_items') params[k] = { cru: v };
        else if (k === 'content_ids') params[k] = v.split(',').map(function (x) { return x.trim() }).filter(Boolean);
        else if (k === 'status') params[k] = v === 'true';
        else params[k] = v;
      });
      if (g.custom && g.livreK) params[g.livreK] = g.livreV || '';
      var pg = PAGS.filter(function (p) { return p[0] === g.pag })[0] || PAGS[5];
      return pagina(T(pg[1]) + (pg[2] ? ': ' + pg[2] : ''), [{ nome: g.nome, custom: g.custom, params: params, clique: g.quando === 'clique', botaoId: 'meuBotao', botao: g.botao }], true);
    }
    function abreGuia() { guia = { passo: 0, nome: '', custom: false, params: {}, quando: '', pag: 'produto', erro: '' }; render(); var f = el.querySelector('#labEv'); if (f) f.focus() }
    el.addEventListener('mouseover', function (e) { var h = e.target.closest('.lab-area [data-p]'); if (h && !fixo && cen !== 'base') mostra(h.getAttribute('data-p')) });
    el.addEventListener('focusin', function (e) { var h = e.target.closest('.lab-area [data-p]'); if (h && cen !== 'base') mostra(h.getAttribute('data-p')) });
    el.addEventListener('click', function (e) {
      var c = e.target.closest('[data-cen]'); if (c) { cen = c.getAttribute('data-cen'); render(); return }
      var b = e.target.closest('[data-lab]');
      if (b) {
        var a = b.getAttribute('data-lab');
        if (a === 'abrir') return abreGuia();
        if (a === 'fechar') { guia = null; render(); return }
        le();
        if (a === 'voltar') { guia.erro = ''; guia.passo--; render(); return }
        if (a === 'seguir') {
          guia.erro = confere(); if (guia.erro) { render(); return }
          if (guia.passo === 0) { guia.params = guia.params || {}; var sg = SUGERE[guia.nome]; if (sg === 'clique') { guia.quando = 'clique'; guia.pag = 'produto' } else if (sg) { guia.quando = 'carga'; guia.pag = sg } }
          if (guia.passo < 2) { guia.passo++; render(); return }
          NOVO = JSON.parse(JSON.stringify(guia)); guia = null; cen = 'meu'; render();
          var ok = document.createElement('div'); ok.className = 'lab-ok'; ok.setAttribute('role', 'status'); ok.innerHTML = '✅ ' + T(L('Pronto! As linhas em verde são o seu evento, no lugar certo. Passe o mouse para ver cada parte.', '¡Listo! Las líneas en verde son tu evento, en el lugar correcto. Pasa el mouse para ver cada parte.'));
          el.querySelector('.lab-ev').appendChild(ok);
          return;
        }
      }
      var h = e.target.closest('.lab-area [data-p]'); if (h && cen !== 'base') { e.stopPropagation(); var p = h.getAttribute('data-p'); fixo = fixo === p ? null : p; mostra(p) }
    });
    el.addEventListener('change', function (e) { if (!guia) return; if (e.target.id === 'labEv' || e.target.name === 'labQuando') { le(); guia.erro = ''; render() } });
    render();
  }
  base.montar = function (el, T, lang, opts) { if (opts && opts.modo === 'simples') return montarSimples(el, T, lang, opts); return montarLab(el, T, lang) };
  base.resumo = { pt: 'Passe o mouse em cada parte do código do Pixel. Troque de cenário (ver produto, carrinho, compra, personalizado, eventID…), ache os erros e monte o seu evento com o guia “Adicionar evento”.', es: 'Pasa el mouse por cada parte del código del píxel. Cambia de escenario (ver producto, carrito, compra, personalizado, eventID…), encuentra los errores y arma tu evento con la guía “Agregar evento”.' };
})();
