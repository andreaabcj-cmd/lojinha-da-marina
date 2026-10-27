/* Roteiros guiados que rodam DENTRO da Lojinha (usam assets/js/tour.js). Textos {pt, es}. */
window.TOURS = window.TOURS || {};
function tgPainelAberto() { var p = document.getElementById('maPanel'); return !!(p && p.classList.contains('open')) }

/* Ctrl+U: abre o código-fonte da página (ver-fonte.html, o arquivo de verdade, como o view-source do Chrome).
   No computador a pessoa aperta Ctrl+U; no celular toca no botão. O botão e o atalho só existem enquanto o passo do tutorial pede. */
function tgCtrlU() {
  var b = document.getElementById('vfCtrlU'); if (b) return b;
  if (!document.getElementById('vfCtrlUcss')) { var st = document.createElement('style'); st.id = 'vfCtrlUcss'; st.textContent = '.vf-ctrlu{position:fixed;right:16px;bottom:16px;z-index:2147483600;display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border:3px solid #16294A;border-radius:12px;background:#fff;color:#16294A;font:700 14px "Segoe UI",system-ui,sans-serif;box-shadow:4px 4px 0 #16294A;cursor:pointer}.vf-ctrlu kbd{display:inline-block;padding:2px 7px;border:1.5px solid #16294A;border-bottom-width:3px;border-radius:6px;background:#F4F6FA;font:700 13px Consolas,monospace}'; document.head.appendChild(st) }
  var es = /"es"/.test(localStorage.getItem('plat.lang') || '');
  b = document.createElement('button'); b.id = 'vfCtrlU'; b.className = 'vf-ctrlu'; b.type = 'button';
  b.innerHTML = '<kbd>Ctrl</kbd>+<kbd>U</kbd> ' + (es ? 'código fuente' : 'código-fonte');
  b.onclick = function () { location.href = 'ver-fonte.html?u=' + encodeURIComponent(location.pathname.split('/').pop() || 'loja.html') };
  document.body.appendChild(b); return b;
}
document.addEventListener('keydown', function (e) {   // Ctrl+U de verdade (⌘+U no Mac), só durante o passo que pede
  var b = document.getElementById('vfCtrlU');
  if (b && (e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey && (e.key === 'u' || e.key === 'U')) { e.preventDefault(); b.click() }
}, true);
function tgPassoCtrlU(pagina) {
  return { alvo: tgCtrlU, clique: true,
    tit: { pt: 'Ctrl+U: o código-fonte', es: 'Ctrl+U: el código fuente' },
    txt: { pt: 'No computador, aperte Ctrl+U no teclado (no Mac, ⌘+U): o navegador abre o código-fonte desta página. É o mesmo que clicar com o botão direito › Exibir código-fonte da página. No celular não há Ctrl+U: toque no botão destacado.', es: 'En la computadora, presiona Ctrl+U en el teclado (en Mac, ⌘+U): el navegador abre el código fuente de esta página. Es lo mismo que hacer clic derecho › Ver código fuente de la página. En el celular no hay Ctrl+U: toca el botón destacado.' } };
}
function tgPassoUrl(pagina) {
  return { alvo: '[data-t=vf-url]', pagina: 'ver-fonte.html?u=' + pagina,
    tit: { pt: 'Você está no código-fonte', es: 'Estás en el código fuente' },
    txt: { pt: 'No Chrome, o código-fonte abre numa aba nova, com o endereço começando por “view-source:”. Cada linha numerada é o código que o navegador recebeu do site. Clique em Próximo.', es: 'En Chrome, el código fuente se abre en una pestaña nueva, con la dirección empezando por “view-source:”. Cada línea numerada es el código que el navegador recibió del sitio. Haz clic en Siguiente.' } };
}

/* Pixel 03 · achar o Pixel no código-fonte da página (Ctrl+U) */
window.TOURS['achar-codigo'] = [
  tgPassoCtrlU('loja.html'),
  tgPassoUrl('loja.html'),
  { alvo: '[data-t=vf-com]',
    tit: { pt: '1. O comentário', es: '1. El comentario' },
    txt: { pt: 'O Pixel começa aqui: Meta Pixel Code. Num site de cliente, é isso que se procura para saber se o Pixel está instalado.', es: 'El Pixel empieza aquí: Meta Pixel Code. En el sitio de un cliente, es lo que se busca para saber si el Pixel está instalado.' },
    dica: { pt: 'Em sites antigos o comentário pode estar como Facebook Pixel Code. É o mesmo.', es: 'En sitios antiguos el comentario puede decir Facebook Pixel Code. Es lo mismo.' } },
  { alvo: '[data-t=vf-init]',
    tit: { pt: '2. O ID do Pixel', es: '2. El ID del Pixel' },
    txt: { pt: 'Dentro do init está o número do Pixel: ele diz para qual Pixel os eventos vão. É ele que você compara com o ID que o cliente vê no Gerenciador de Eventos.', es: 'Dentro del init está el número del Pixel: dice a qué Pixel van los eventos. Es el que comparas con el ID que el cliente ve en el Administrador de eventos.' } },
  { alvo: '[data-t=vf-pv]',
    tit: { pt: '3. O PageView', es: '3. El PageView' },
    txt: { pt: 'Conta cada visita. Se ele está aqui, toda página aberta envia um PageView.', es: 'Cuenta cada visita. Si está aquí, cada página abierta envía un PageView.' } },
  { alvo: '[data-t=vf-cod]', fim: true,
    tit: { pt: 'Pronto! 🎉', es: '¡Listo! 🎉' },
    txt: { pt: 'Você achou as 3 coisas que importam: o comentário, o ID e o PageView. Num site grande, aperte Ctrl+F e procure “fbq” para ir direto ao Pixel. O resto do código é técnico: o cliente não mexe. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'Encontraste las 3 cosas que importan: el comentario, el ID y el PageView. En un sitio grande, presiona Ctrl+F y busca “fbq” para ir directo al Pixel. El resto del código es técnico: el cliente no lo toca. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.' } }
];

/* Microdados 03 · as tags de produto no código-fonte da página (Ctrl+U) */
window.TOURS['tags-no-codigo'] = [
  tgPassoCtrlU('produto-caneca_01.html'),
  tgPassoUrl('produto-caneca_01.html'),
  { alvo: '[data-t=vf-og]',
    tit: { pt: 'As tags OpenGraph', es: 'Las etiquetas OpenGraph' },
    txt: { pt: 'Lá no topo, no &lt;head&gt;, cada linha &lt;meta&gt; é uma tag: property é o nome do campo e content é o valor. Aqui, og:title = o nome do produto.', es: 'Arriba, en el &lt;head&gt;, cada línea &lt;meta&gt; es una etiqueta: property es el nombre del campo y content es el valor. Aquí, og:title = el nombre del producto.' } },
  { alvo: '[data-t=vf-preco]',
    tit: { pt: 'Preço e moeda', es: 'Precio y moneda' },
    txt: { pt: 'product:price:amount = 49.90 (só o número, com ponto) e, na linha de baixo, product:price:currency = BRL (o código de 3 letras).', es: 'product:price:amount = 49.90 (solo el número, con punto) y, en la línea de abajo, product:price:currency = BRL (el código de 3 letras).' } },
  { alvo: '[data-t=vf-id]',
    tit: { pt: 'O id do produto', es: 'El id del producto' },
    txt: { pt: 'product:retailer_item_id = CANECA_01. Tem que ser o mesmo id do produto no catálogo: é assim que a Meta liga a página ao item certo.', es: 'product:retailer_item_id = CANECA_01. Tiene que ser el mismo id del producto en el catálogo: así Meta une la página con el artículo correcto.' } },
  { alvo: '[data-t=vf-ld]',
    tit: { pt: 'O mesmo, em JSON-LD', es: 'Lo mismo, en JSON-LD' },
    txt: { pt: 'Esta página também tem a ficha do produto em JSON-LD, num bloco &lt;script&gt;: sku, price, priceCurrency e availability. Os valores precisam ser iguais aos das tags OpenGraph.', es: 'Esta página también tiene la ficha del producto en JSON-LD, en un bloque &lt;script&gt;: sku, price, priceCurrency y availability. Los valores deben ser iguales a los de las etiquetas OpenGraph.' } },
  { alvo: '[data-t=vf-cod]', fim: true,
    tit: { pt: 'Pronto! 🎉', es: '¡Listo! 🎉' },
    txt: { pt: 'É isso que a ferramenta de depuração de microdados lê. No atendimento, confira pela ferramenta; o código-fonte ajuda a mostrar a quem cuida do site onde ficam as tags. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'Eso es lo que lee la herramienta de depuración de microdatos. En la atención, revisa con la herramienta; el código fuente ayuda a mostrarle a quien cuida el sitio dónde están las etiquetas. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.' } }
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

/* Pixel 03 · opção 5 (opcional) · aba Rede, pelo botão F12 (simulação). A “câmera” saiu (27/10): para ver os eventos chegando, o certo é o Eventos de teste */
function tgAbaF12(aba) { return function () { window.LOJA && LOJA.painel(true, aba) } }
window.TOURS['rede-pixel'] = [
  { alvo: '#maFab', clique: true, pula: tgPainelAberto, garante: function () { window.LOJA && LOJA.painel(false) },
    tit: { pt: 'O botão F12', es: 'El botón F12' },
    txt: { pt: 'Clique no botão F12 (simulação), no canto de baixo.', es: 'Haz clic en el botón F12 (simulación), en la esquina de abajo.' } },
  { alvo: '.ma-tabs [data-aba=rede]', clique: true, garante: tgAbaF12('lupa'),
    tit: { pt: 'A aba Rede', es: 'La pestaña Red' },
    txt: { pt: 'Abra a aba 🌐 Rede.', es: 'Abre la pestaña 🌐 Red.' } },
  { alvo: '#maBody', garante: tgAbaF12('rede'),
    tit: { pt: 'Um pedido por evento', es: 'Un pedido por evento' },
    txt: { pt: 'Quando o Pixel envia um evento, o navegador manda um pedido para facebook.com/tr. No computador, você veria isso no F12 › Rede, filtrando por “tr”. Clique em Próximo.', es: 'Cuando el Pixel envía un evento, el navegador manda un pedido a facebook.com/tr. En la computadora, lo verías en F12 › Red, filtrando por “tr”. Haz clic en Siguiente.' } },
  { alvo: '.ma-legend', fim: true, garante: tgAbaF12('rede'),
    tit: { pt: 'Como ler 🎉', es: 'Cómo leer 🎉' },
    txt: { pt: 'id = qual Pixel · ev = qual evento · cd[…] = parâmetros · eid = ID do evento. Isso ajuda a conversar com quem cuida do site. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'id = qué Pixel · ev = qué evento · cd[…] = parámetros · eid = ID del evento. Esto ayuda a hablar con quien cuida el sitio. Haz clic en Finalizar. Después, explora libremente: el botón ↩ de la esquina te lleva de vuelta.' } }
];
