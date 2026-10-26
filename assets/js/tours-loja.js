/* Roteiros guiados que rodam DENTRO da Lojinha (usam assets/js/tour.js). Textos {pt, es}. */
window.TOURS = window.TOURS || {};
function tgPainelAberto() { var p = document.getElementById('maPanel'); return !!(p && p.classList.contains('open')) }

/* Aula 02 · achar o Pixel no código da página */
window.TOURS['achar-codigo'] = [
  { alvo: '#maFab', clique: true, pula: tgPainelAberto,
    garante: function () { window.LOJA && LOJA.painel(false) },
    tit: { pt: 'O botão F12', es: 'El botón F12' },
    txt: { pt: 'Num computador, o código da página se abre com Ctrl+U ou com a tecla F12. Aqui, o botão F12 (simulação), no canto INFERIOR direito, faz esse papel. Clique nele.', es: 'En una computadora, el código de la página se abre con Ctrl+U o con la tecla F12. Aquí, el botón F12 (simulación), en la esquina INFERIOR derecha, cumple esa función. Haz clic en él.' } },
  { alvo: '.ma-tabs [data-aba=codigo]', clique: true,
    garante: function () { window.LOJA && LOJA.painel(true, 'camera') },
    tit: { pt: 'A aba Código', es: 'La pestaña Código' },
    txt: { pt: 'Abra a aba 📄 Código. Ela mostra o código do Pixel desta página, sem precisar de ferramenta nenhuma do navegador.', es: 'Abre la pestaña 📄 Código. Muestra el código del Pixel de esta página, sin ninguna herramienta del navegador.' } },
  { alvo: '#maFonte .ma-m-com',
    garante: function () { window.LOJA && LOJA.painel(true, 'codigo') },
    tit: { pt: '1. O comentário', es: '1. El comentario' },
    txt: { pt: 'O Pixel começa aqui: Meta Pixel Code. Num site de cliente, é isso que se procura para saber se o Pixel está instalado.', es: 'El Pixel empieza aquí: Meta Pixel Code. En el sitio de un cliente, es lo que se busca para saber si el Pixel está instalado.' },
    dica: { pt: 'Em sites antigos o comentário pode estar como Facebook Pixel Code. É o mesmo.', es: 'En sitios antiguos el comentario puede decir Facebook Pixel Code. Es lo mismo.' } },
  { alvo: '#maFonte .ma-m-init',
    garante: function () { window.LOJA && LOJA.painel(true, 'codigo') },
    tit: { pt: '2. O ID do Pixel', es: '2. El ID del Pixel' },
    txt: { pt: 'Este número diz para qual Pixel os eventos vão. É ele que você compara com o ID que o cliente vê no Gerenciador de Eventos.', es: 'Este número dice a qué Pixel van los eventos. Es el que comparas con el ID que el cliente ve en el Administrador de eventos.' } },
  { alvo: '#maFonte .ma-m-pv',
    garante: function () { window.LOJA && LOJA.painel(true, 'codigo') },
    tit: { pt: '3. O PageView', es: '3. El PageView' },
    txt: { pt: 'Conta cada visita. Se ele está aqui, toda página aberta envia um PageView.', es: 'Cuenta cada visita. Si está aquí, cada página abierta envía un PageView.' } },
  { alvo: '#maPanel', fim: true,
    tit: { pt: 'Pronto! 🎉', es: '¡Listo! 🎉' },
    txt: { pt: 'Você achou as 3 coisas que importam: o comentário, o ID e o PageView. O resto do código é técnico: o cliente não mexe. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'Encontraste las 3 cosas que importan: el comentario, el ID y el PageView. El resto del código es técnico: el cliente no lo toca. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.' } }
];

/* Aula 02 · prática do atendimento: conferir o Pixel do site com o Consultor de Dados (a extensão que o agente usa) */
function tgDaAberto() { return document.documentElement.classList.contains('da-aberto') }
window.TOURS['extensao-pixel'] = [
  { alvo: '#maExt', clique: true, pula: tgDaAberto,
    garante: function () { window.DA && DA.fechar() },
    tit: { pt: 'A extensão Consultor de Dados', es: 'La extensión Asesor de datos' },
    txt: { pt: 'No atendimento, você não abre o código do site: usa a extensão Consultor de Dados de Anúncios da Meta, no Chrome. Aqui ela fica na faixa amarela. Clique nela.', es: 'En la atención no abres el código del sitio: usas la extensión Asesor de datos de anuncios de Meta, en Chrome. Aquí está en la franja amarilla. Haz clic en ella.' },
    dica: { pt: 'A extensão real é grátis e funciona em qualquer site público, inclusive no do cliente.', es: 'La extensión real es gratis y funciona en cualquier sitio público, incluso en el del cliente.' } },
  { alvo: '.da-chip', pula: function () { return !!document.querySelector('.da-card-id') },
    garante: function () { window.DA && DA.abrir('inicio') },
    tit: { pt: 'Tem Pixel nesta página?', es: '¿Hay Pixel en esta página?' },
    txt: { pt: '“1 pixel”: a extensão achou o código do Pixel no site. Se aparecer “Nenhum pixel encontrado”, o código não está instalado (ou está quebrado).', es: '“1 pixel”: la extensión encontró el código del Pixel en el sitio. Si aparece “Ningún pixel encontrado”, el código no está instalado (o está roto).' } },
  { alvo: '.da-card-pixel', clique: true, pula: function () { return !!document.querySelector('.da-card-id') },
    garante: function () { window.DA && DA.abrir('inicio') },
    tit: { pt: 'O ID do Pixel', es: 'El ID del Pixel' },
    txt: { pt: 'A “Identificação” é o número que está dentro do init, no código. Clique no cartão para ver os eventos.', es: 'La “Identificación” es el número que está dentro del init, en el código. Haz clic en la tarjeta para ver los eventos.' } },
  { alvo: '.da-card-id',
    garante: function () { window.DA && DA.abrir('pixel') },
    tit: { pt: 'Compare com o do cliente', es: 'Compáralo con el del cliente' },
    txt: { pt: 'Este é o passo que resolve muitos casos: o número daqui tem que ser IGUAL ao ID do Pixel que o cliente vê no Gerenciador de Eventos. Se for diferente, os eventos estão indo para outro Pixel.', es: 'Este paso resuelve muchos casos: el número de aquí tiene que ser IGUAL al ID del Pixel que el cliente ve en el Administrador de eventos. Si es distinto, los eventos van a otro Pixel.' } },
  { alvo: '.da-ev-cab', clique: true,
    garante: function () { window.DA && DA.abrir('pixel') },
    tit: { pt: 'O PageView', es: 'El PageView' },
    txt: { pt: 'O PageView aparece na lista: as visitas estão sendo contadas. Clique nele para ver os detalhes.', es: 'El PageView aparece en la lista: las visitas se están contando. Haz clic en él para ver los detalles.' } },
  { alvo: '.da-ev-corpo', fim: true,
    tit: { pt: 'Pronto! 🎉', es: '¡Listo! 🎉' },
    txt: { pt: 'Você conferiu o Pixel como no atendimento: tem Pixel? O ID é o do cliente? O PageView chega? Tudo sem mexer no código. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'Revisaste el Pixel como en la atención: ¿hay Pixel? ¿El ID es el del cliente? ¿Llega el PageView? Todo sin tocar el código. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.' } }
];

/* Aula 01 · o Pixel em ação: a pessoa faz coisas na loja e vê os avisos no Consultor de Dados */
window.TOURS['pixel-em-acao'] = [
  { alvo: function () { return document.querySelector('#destaques, #lista') }, clique: true, valida: function (t) { return !!(t && t.closest && t.closest('.card-prod a')) }, erro: { pt: 'Clique na foto ou no nome de um produto. 🙂', es: 'Haz clic en la foto o en el nombre de un producto. 🙂' },
    garante: function () { window.DA && DA.fechar() },
    tit: { pt: 'Abra um produto', es: 'Abre un producto' },
    txt: { pt: 'Você é uma cliente da Marina. Clique num produto para ver os detalhes.', es: 'Eres una clienta de Marina. Haz clic en un producto para ver los detalles.' } },
  { alvo: '#addCart', clique: true, livre: '[data-var], #qtd', valida: function () { return !document.querySelector('[data-var]') || !!document.querySelector('[data-var].on') }, erro: { pt: 'Este produto tem tamanho: escolha um tamanho antes de pôr no carrinho. 🙂', es: 'Este producto tiene talla: elige una talla antes de ponerlo en el carrito. 🙂' },
    garante: function () { window.DA && DA.fechar() },
    tit: { pt: 'Ponha no carrinho', es: 'Ponlo en el carrito' },
    txt: { pt: 'Agora clique em Adicionar ao carrinho.', es: 'Ahora haz clic en Agregar al carrito.' },
    dica: { pt: 'Se o produto tiver tamanho, escolha um antes. 🙂', es: 'Si el producto tiene talla, elige una antes. 🙂' } },
  { alvo: '#maExt', clique: true, pula: function () { return document.documentElement.classList.contains('da-aberto') },
    garante: function () { window.DA && DA.fechar() },
    tit: { pt: 'Hora de ver os avisos', es: 'Hora de ver los avisos' },
    txt: { pt: 'Cada coisa que você fez virou um aviso do Pixel. Abra o Consultor de Dados, na faixa amarela, para ver.', es: 'Cada cosa que hiciste se convirtió en un aviso del Pixel. Abre el Asesor de datos, en la franja amarilla, para verlo.' } },
  { alvo: '.da-card-pixel', clique: true, pula: function () { return !!document.querySelector('.da-card-id') },
    garante: function () { window.DA && DA.abrir('inicio') },
    tit: { pt: 'Abra o Pixel', es: 'Abre el Pixel' },
    txt: { pt: 'Clique no cartão do Pixel.', es: 'Haz clic en la tarjeta del Pixel.' } },
  { alvo: '.da-lista', fim: true,
    tit: { pt: 'Aí estão! 🎉', es: '¡Ahí están! 🎉' },
    txt: { pt: 'PageView (abriu a página), ViewContent (viu o produto) e AddToCart (pôs no carrinho). O Pixel contou para a Meta o que você fez, nada além disso. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'PageView (abrió la página), ViewContent (vio el producto) y AddToCart (puso en el carrito). El Pixel le contó a Meta lo que hiciste, nada más. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.' } }
];

/* Aula 04 · uma compra completa: da vitrine até o Purchase com valor e moeda no Consultor de Dados */
function tgEvPurchase() { var c = [].slice.call(document.querySelectorAll('.da-ev-cab')); return c.filter(function (x) { return /Purchase/.test(x.textContent) })[0] || null }
window.TOURS['compra-completa'] = [
  { alvo: function () { return document.querySelector('#destaques, #lista') }, clique: true, valida: function (t) { return !!(t && t.closest && t.closest('.card-prod a')) }, erro: { pt: 'Clique na foto ou no nome de um produto. 🙂', es: 'Haz clic en la foto o en el nombre de un producto. 🙂' }, garante: function () { window.DA && DA.fechar() },
    tit: { pt: 'Escolha um produto', es: 'Elige un producto' },
    txt: { pt: 'Você é uma cliente da Marina e vai comprar de verdade (de mentirinha 😄). Clique num produto.', es: 'Eres una clienta de Marina y vas a comprar de verdad (de mentira 😄). Haz clic en un producto.' },
    dica: { pt: 'Abrir o produto já dispara o ViewContent.', es: 'Abrir el producto ya dispara el ViewContent.' } },
  { alvo: '#addCart', clique: true, livre: '[data-var], #qtd', valida: function () { return !document.querySelector('[data-var]') || !!document.querySelector('[data-var].on') }, erro: { pt: 'Este produto tem tamanho: escolha um tamanho antes de pôr no carrinho. 🙂', es: 'Este producto tiene talla: elige una talla antes de ponerlo en el carrito. 🙂' }, garante: function () { window.DA && DA.fechar() },
    tit: { pt: 'Ponha no carrinho', es: 'Ponlo en el carrito' },
    txt: { pt: 'Clique em Adicionar ao carrinho (se tiver tamanho, escolha um antes).', es: 'Haz clic en Agregar al carrito (si tiene talla, elige una antes).' },
    dica: { pt: 'Este clique dispara o AddToCart.', es: 'Este clic dispara el AddToCart.' } },
  { alvo: function () { return document.querySelector('#addOk a') || document.querySelector('a.carrinho') }, clique: true,
    tit: { pt: 'Vá para o carrinho', es: 'Ve al carrito' },
    txt: { pt: 'Clique em Ver carrinho (ou no carrinho 🛒 lá em cima).', es: 'Haz clic en Ver carrito (o en el carrito 🛒 arriba).' } },
  { alvo: 'a[href="checkout.html"]', clique: true,
    tit: { pt: 'Hora de pagar', es: 'Hora de pagar' },
    txt: { pt: 'Clique em Ir para o pagamento.', es: 'Haz clic en Ir al pago.' },
    dica: { pt: 'Abrir a página de pagamento dispara o InitiateCheckout.', es: 'Abrir la página de pago dispara el InitiateCheckout.' } },
  { alvo: '.pags', cond: function () { return !!document.querySelector('[name=pag]:checked') },
    tit: { pt: 'Forma de pagamento', es: 'Forma de pago' },
    txt: { pt: 'Os dados de teste já estão preenchidos (nada aqui é real). Escolha uma forma de pagamento simulada e clique em Próximo.', es: 'Los datos de prueba ya están completos (nada aquí es real). Elige una forma de pago simulada y haz clic en Siguiente.' } },
  { alvo: '#formCheckout button.btn', clique: true, livre: '.pags', valida: function () { return !!document.querySelector('[name=pag]:checked') },   // se a página recarregou, a forma de pagamento some: sem ela o pedido não fecha
    erro: { pt: 'Primeiro escolha uma forma de pagamento (a página recarregou e ela foi desmarcada). 🙂', es: 'Primero elige una forma de pago (la página se recargó y se desmarcó). 🙂' },
    tit: { pt: 'Finalize o pedido', es: 'Finaliza el pedido' },
    txt: { pt: 'Clique em Finalizar pedido.', es: 'Haz clic en Finalizar pedido.' } },
  { alvo: '#maExt', clique: true, pula: function () { return document.documentElement.classList.contains('da-aberto') }, garante: function () { window.DA && DA.fechar() },
    tit: { pt: 'Comprou! 🎉 E o Pixel?', es: '¡Compró! 🎉 ¿Y el Pixel?' },
    txt: { pt: 'Esta página de “obrigado” dispara o Purchase. Abra o Consultor de Dados, na faixa amarela, para ver.', es: 'Esta página de “gracias” dispara el Purchase. Abre el Asesor de datos, en la franja amarilla, para verlo.' } },
  { alvo: '.da-card-pixel', clique: true, pula: function () { return !!document.querySelector('.da-card-id') }, garante: function () { window.DA && DA.abrir('inicio') },
    tit: { pt: 'Abra o Pixel', es: 'Abre el Pixel' },
    txt: { pt: 'Clique no cartão do Pixel.', es: 'Haz clic en la tarjeta del Pixel.' } },
  { alvo: tgEvPurchase, clique: true, garante: function () { window.DA && DA.abrir('pixel') },
    tit: { pt: 'O evento da compra', es: 'El evento de la compra' },
    txt: { pt: 'Aí está o Purchase: o EVENTO, ou seja, o que aconteceu. Clique nele para ver os detalhes.', es: 'Ahí está el Purchase: el EVENTO, o sea, lo que pasó. Haz clic en él para ver los detalles.' } },
  { alvo: '.da-ev-corpo', fim: true,
    tit: { pt: 'Os parâmetros 💰', es: 'Los parámetros 💰' },
    txt: { pt: 'Em “Parâmetros personalizados” estão os DETALHES: value (o valor) e currency (a moeda, BRL). Com eles a Meta sabe quanto a Marina vendeu. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'En “Parámetros personalizados” están los DETALLES: value (el valor) y currency (la moneda, BRL). Con ellos Meta sabe cuánto vendió Marina. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.' } }
];

/* Pixel 06 (opcional) · câmera do Pixel e aba Rede, pelo botão F12 (simulação) */
function tgAbaF12(aba) { return function () { window.LOJA && LOJA.painel(true, aba) } }
window.TOURS['camera-pixel'] = [
  { alvo: '#maFab', clique: true, pula: tgPainelAberto, garante: function () { window.LOJA && LOJA.painel(false) },
    tit: { pt: 'O botão F12', es: 'El botón F12' },
    txt: { pt: 'Num computador, a tecla F12 abre as ferramentas de desenvolvedor. Aqui, o botão F12 (simulação), no canto de baixo, faz esse papel. Clique nele.', es: 'En una computadora, la tecla F12 abre las herramientas de desarrollador. Aquí, el botón F12 (simulación), en la esquina de abajo, hace ese papel. Haz clic en él.' } },
  { alvo: '.ma-tabs [data-aba=camera]', clique: true, garante: tgAbaF12('rede'),
    tit: { pt: 'A câmera', es: 'La cámara' },
    txt: { pt: 'Abra a aba 📹 Câmera.', es: 'Abre la pestaña 📹 Cámara.' } },
  { alvo: '#maBody', garante: tgAbaF12('camera'),
    tit: { pt: 'Cada evento, na hora', es: 'Cada evento, al instante' },
    txt: { pt: 'Cada linha é um evento que esta página disparou: o nome (PageView = abriu a página), se foi enviado à Meta, os parâmetros e o código fbq que o site rodou. É o mesmo que você vê no Eventos de teste. Clique em Próximo.', es: 'Cada fila es un evento que esta página disparó: el nombre (PageView = abrió la página), si se envió a Meta, los parámetros y el código fbq que ejecutó el sitio. Es lo mismo que ves en Probar eventos. Haz clic en Siguiente.' } },
  { alvo: '#maPanel', fim: true, garante: tgAbaF12('camera'),
    tit: { pt: 'Mais um jeito, o mesmo Pixel 🎉', es: '¡Otra forma, el mismo Pixel! 🎉' },
    txt: { pt: 'Navegue pela loja com a câmera aberta: ver um produto traz o ViewContent; pôr no carrinho, o AddToCart. No atendimento, confira pelo Eventos de teste e pelo Consultor de Dados. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'Navega por la tienda con la cámara abierta: ver un producto trae el ViewContent; poner en el carrito, el AddToCart. En la atención, revisa con Probar eventos y el Asesor de datos. Haz clic en Finalizar. Después, explora libremente: el botón ↩ de la esquina te lleva de vuelta.' } }
];
window.TOURS['rede-pixel'] = [
  { alvo: '#maFab', clique: true, pula: tgPainelAberto, garante: function () { window.LOJA && LOJA.painel(false) },
    tit: { pt: 'O botão F12', es: 'El botón F12' },
    txt: { pt: 'Clique no botão F12 (simulação), no canto de baixo.', es: 'Haz clic en el botón F12 (simulación), en la esquina de abajo.' } },
  { alvo: '.ma-tabs [data-aba=rede]', clique: true, garante: tgAbaF12('camera'),
    tit: { pt: 'A aba Rede', es: 'La pestaña Red' },
    txt: { pt: 'Abra a aba 🌐 Rede.', es: 'Abre la pestaña 🌐 Red.' } },
  { alvo: '#maBody', garante: tgAbaF12('rede'),
    tit: { pt: 'Um pedido por evento', es: 'Un pedido por evento' },
    txt: { pt: 'Quando o Pixel envia um evento, o navegador manda um pedido para facebook.com/tr. No computador, você veria isso no F12 › Rede, filtrando por “tr”. Clique em Próximo.', es: 'Cuando el Pixel envía un evento, el navegador manda un pedido a facebook.com/tr. En la computadora, lo verías en F12 › Red, filtrando por “tr”. Haz clic en Siguiente.' } },
  { alvo: '.ma-legend', fim: true, garante: tgAbaF12('rede'),
    tit: { pt: 'Como ler 🎉', es: 'Cómo leer 🎉' },
    txt: { pt: 'id = qual Pixel · ev = qual evento · cd[…] = parâmetros · eid = ID do evento. Isso ajuda a conversar com quem cuida do site. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'id = qué Pixel · ev = qué evento · cd[…] = parámetros · eid = ID del evento. Esto ayuda a hablar con quien cuida el sitio. Haz clic en Finalizar. Después, explora libremente: el botón ↩ de la esquina te lleva de vuelta.' } }
];
