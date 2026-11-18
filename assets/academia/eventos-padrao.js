/* Eventos padrão do Pixel: a ferramenta do Aulão do Pixel (cena 15), no visual da Lojinha (18/11/2026).
   Aparece como etapa própria na aula Pixel · básico 01 ("eventos: true" na aula).
   Lista e parâmetros conferidos com a referência oficial do Meta Pixel (developers.facebook.com/docs/meta-pixel/reference) em 18/11/2026:
   17 eventos padrão + o PageView, que vem do código base. Só o Purchase tem campos obrigatórios (value e currency). */
(function () {
  function L(pt, es) { return { pt: pt, es: es } }
  var CAT = ['ViewContent', 'AddToCart', 'Purchase'];   // essenciais para os anúncios de catálogo
  // [nome, resumo, grupo, explicação, código, parâmetros comuns]
  var EV = [
    ['PageView', L('Página carregada', 'Página cargada'), 'all', L('Disparado pelo código base em toda página. Base para públicos de visitantes.', 'Lo dispara el código base en cada página. Base para públicos de visitantes.'), "fbq('track', 'PageView');", '—'],
    ['ViewContent', L('Viu página importante/produto', 'Vio una página importante/producto'), 'ecom', L('Visita a uma página de produto ou conteúdo importante. Essencial para catálogo.', 'Visita a una página de producto o contenido importante. Esencial para el catálogo.'), "fbq('track', 'ViewContent', {\n  content_ids: ['CANECA_01'],\n  content_type: 'product',\n  value: 49.90, currency: 'BRL'\n});", 'content_ids · content_type · contents · value · currency'],
    ['Search', L('Fez uma busca no site', 'Hizo una búsqueda en el sitio'), 'ecom', L('Pessoa pesquisou no site. Ex.: “caneca azul”.', 'La persona buscó en el sitio. Ej.: “taza azul”.'), "fbq('track', 'Search', {\n  search_string: 'caneca azul'\n});", 'search_string · content_ids · content_type · contents · value · currency'],
    ['AddToCart', L('Adicionou ao carrinho', 'Agregó al carrito'), 'ecom', L('Clique em “adicionar ao carrinho”. Essencial para catálogo.', 'Clic en “agregar al carrito”. Esencial para el catálogo.'), "fbq('track', 'AddToCart', {\n  content_ids: ['CANECA_01'],\n  content_type: 'product',\n  value: 49.90, currency: 'BRL'\n});", 'content_ids · content_type · contents · value · currency'],
    ['AddToWishlist', L('Adicionou à lista de desejos', 'Agregó a la lista de deseos'), 'ecom', L('Produto salvo na lista de desejos.', 'Producto guardado en la lista de deseos.'), "fbq('track', 'AddToWishlist', {\n  content_ids: ['CAMISETA_02']\n});", 'content_ids · contents · value · currency'],
    ['InitiateCheckout', L('Começou o checkout', 'Empezó el pago'), 'ecom', L('Entrou no fluxo de pagamento.', 'Entró en el flujo de pago.'), "fbq('track', 'InitiateCheckout', {\n  num_items: 2, value: 119.80, currency: 'BRL'\n});", 'content_ids · contents · num_items · value · currency'],
    ['AddPaymentInfo', L('Adicionou dados de pagamento', 'Agregó datos de pago'), 'ecom', L('Informou ou salvou o pagamento no checkout.', 'Informó o guardó el pago en el checkout.'), "fbq('track', 'AddPaymentInfo');", 'content_ids · contents · value · currency'],
    ['Purchase', L('Compra concluída', 'Compra finalizada'), 'ecom', L('Compra finalizada. value e currency são OBRIGATÓRIOS. Essencial para catálogo.', 'Compra finalizada. value y currency son OBLIGATORIOS. Esencial para el catálogo.'), "fbq('track', 'Purchase', {\n  value: 119.80, currency: 'BRL',\n  content_ids: ['CANECA_01','CAMISETA_02'],\n  content_type: 'product'\n}, {eventID: 'pedido-4821'});", 'value* · currency* · content_ids · content_type · contents · num_items'],
    ['Lead', L('Enviou dados para contato', 'Envió datos de contacto'), 'lead', L('Formulário de orçamento, cadastro para receber retorno, inscrição de interesse.', 'Formulario de presupuesto, registro para recibir respuesta, inscripción de interés.'), "fbq('track', 'Lead', {\n  value: 0, currency: 'BRL'\n});", 'value · currency'],
    ['CompleteRegistration', L('Concluiu um cadastro', 'Completó un registro'), 'lead', L('Formulário de cadastro concluído (conta, newsletter).', 'Formulario de registro completado (cuenta, boletín).'), "fbq('track', 'CompleteRegistration');", 'value · currency'],
    ['Contact', L('Iniciou contato', 'Inició contacto'), 'lead', L('Clicou para conversar: WhatsApp, telefone, chat, e-mail.', 'Hizo clic para conversar: WhatsApp, teléfono, chat, correo.'), "fbq('track', 'Contact');", '—'],
    ['SubmitApplication', L('Enviou uma candidatura', 'Envió una solicitud'), 'lead', L('Candidatura a vaga, crédito, programa etc.', 'Solicitud de empleo, crédito, programa, etc.'), "fbq('track', 'SubmitApplication');", '—'],
    ['Schedule', L('Agendou', 'Agendó'), 'serv', L('Marcou horário. Ex.: oficina de pintura de canecas.', 'Reservó un horario. Ej.: taller de pintura de tazas.'), "fbq('track', 'Schedule');", '—'],
    ['FindLocation', L('Procurou uma loja física', 'Buscó una tienda física'), 'serv', L('Usou o “encontre uma loja”.', 'Usó el “encuentra una tienda”.'), "fbq('track', 'FindLocation');", '—'],
    ['CustomizeProduct', L('Personalizou um produto', 'Personalizó un producto'), 'ecom', L('Configurou cor, aroma, gravação etc.', 'Configuró color, aroma, grabado, etc.'), "fbq('track', 'CustomizeProduct');", '—'],
    ['StartTrial', L('Começou um teste grátis', 'Empezó una prueba gratis'), 'sub', L('Início de período de teste.', 'Inicio de un período de prueba.'), "fbq('track', 'StartTrial', {\n  value: 0, currency: 'BRL',\n  predicted_ltv: 360\n});", 'value · currency · predicted_ltv'],
    ['Subscribe', L('Assinou (pago)', 'Se suscribió (pago)'), 'sub', L('Começou uma assinatura paga. Ex.: clube da caneca do mês.', 'Empezó una suscripción paga. Ej.: club de la taza del mes.'), "fbq('track', 'Subscribe', {\n  value: 49.90, currency: 'BRL',\n  predicted_ltv: 598.80\n});", 'value · currency · predicted_ltv'],
    ['Donate', L('Fez uma doação', 'Hizo una donación'), 'other', L('Doação para uma causa.', 'Donación para una causa.'), "fbq('track', 'Donate');", '—']
  ];
  var FILTROS = [['all', L('Todos', 'Todos')], ['ecom', L('E-commerce', 'E-commerce')], ['lead', L('Leads', 'Leads')], ['serv', L('Serviços', 'Servicios')], ['sub', L('Assinatura', 'Suscripción')], ['other', L('Outros', 'Otros')]];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }
  function cor(cod) { return esc(cod).replace(/'([^']*)'/g, '<span class="evp-s">\'$1\'</span>').replace(/\bfbq\b/g, '<span class="evp-f">fbq</span>') }

  window.EVENTOS_PADRAO = function (el, T) {
    var filtro = 'all', sel = 0;
    el.innerHTML = '<div class="evp">' +
      '<div class="evp-topo"><div><div class="evp-kicker">' + T(L('Eventos padrão', 'Eventos estándar')) + '</div><h2 class="evp-h">' + T(L('A língua oficial das ações.', 'El idioma oficial de las acciones.')) + '</h2></div>' +
      '<div class="evp-filtros" role="group">' + FILTROS.map(function (f) { return '<button data-f="' + f[0] + '"' + (f[0] === 'all' ? ' class="on"' : '') + '>' + T(f[1]) + '</button>' }).join('') + '</div></div>' +
      '<div class="evp-grade">' + EV.map(function (e, i) { return '<button class="evp-ev" data-i="' + i + '" data-c="' + e[2] + '">' + (CAT.indexOf(e[0]) >= 0 ? '<span class="evp-star" title="' + esc(T(L('Essencial para anúncios de catálogo', 'Esencial para anuncios de catálogo'))) + '">★</span>' : '') + '<b' + (e[0].length > 16 ? ' class="longo"' : '') + '>' + e[0] + '</b><span>' + esc(T(e[1])) + '</span></button>' }).join('') + '</div>' +
      '<div class="evp-det" aria-live="polite"></div>' +
      '<p class="evp-fonte">★ ' + T(L('Essencial para anúncios de catálogo', 'Esencial para anuncios de catálogo')) + ' · ' + T(L('Lista conferida com a referência oficial do Meta Pixel (Meta for Developers) em 18/11/2026.', 'Lista revisada con la referencia oficial del Meta Pixel (Meta for Developers) el 18/11/2026.')) + '</p></div>';
    var grade = el.querySelector('.evp-grade'), det = el.querySelector('.evp-det');
    function mostra(i) {
      sel = i; var e = EV[i];
      [].forEach.call(grade.children, function (b) { b.classList.toggle('on', +b.getAttribute('data-i') === i) });
      det.innerHTML = '<div class="evp-card"><div class="evp-nome"><code>' + e[0] + '</code>' + (e[0] === 'Purchase' ? '<span class="evp-chip vm">' + T(L('value + currency obrigatórios', 'value + currency obligatorios')) + '</span>' : '') + (CAT.indexOf(e[0]) >= 0 ? '<span class="evp-chip am">★ ' + T(L('catálogo', 'catálogo')) + '</span>' : '') + '</div>' +
        '<p>' + esc(T(e[3])) + '</p><p class="evp-par"><b>' + T(L('Parâmetros comuns:', 'Parámetros comunes:')) + '</b> <span>' + esc(e[5]) + '</span></p></div>' +
        '<pre class="evp-cod">' + cor(e[4]) + '</pre>';
    }
    grade.addEventListener('click', function (ev) { var b = ev.target.closest('.evp-ev'); if (!b) return; mostra(+b.getAttribute('data-i')); if (window.innerWidth < 700 && det.scrollIntoView) det.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) });   // no celular o detalhe fica abaixo da grade
    el.querySelector('.evp-filtros').addEventListener('click', function (ev) {
      var b = ev.target.closest('button'); if (!b) return; filtro = b.getAttribute('data-f');
      [].forEach.call(this.children, function (x) { x.classList.toggle('on', x === b) });
      [].forEach.call(grade.children, function (x) { var c = x.getAttribute('data-c'); x.classList.toggle('dim', filtro !== 'all' && c !== filtro && c !== 'all') });
    });
    mostra(0);
  };
})();
