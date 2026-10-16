/* Simulador "Diagnóstico de casos": clínica de casos (investigar → causa → solução), colar o código do Pixel à mão e plataforma conectada que não envia.
   Estado no navegador (localStorage "sim.diagnostico"); nada é enviado à Meta.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Como configurar e instalar o Pixel da Meta” (criar o pixel, código base, manual × parceiro, API de Conversões),
   “Boas práticas para a configuração de eventos padrão” (código base correto, evento no lugar certo, nomes diferenciam maiúsculas e minúsculas, Eventos de teste, Diagnóstico, Consultor de Dados),
   “Como definir o valor e a moeda dos seus eventos padrão” (value numérico com PONTO decimal, sem letras/símbolos/vírgulas; currency de 3 letras), “Como solucionar mensagens de erro e aviso do Pixel”
   (moeda ausente/inválida, valor ausente/inválido, incompatibilidade de nome de evento, vários eventos em uma ação, eventos de compra redundantes), “O que fazer se o Pixel registrar menos eventos do site”
   (código base ausente/apagado/mal posicionado, Eventos de teste, Diagnóstico, permissões de tráfego).
   INVENTADOS para o treino: os clientes, os relatos, o conteúdo de cada “fonte” (Eventos de teste, Diagnóstico, código, plataforma), o ID do Pixel, o comportamento exato da plataforma parceira
   (nível de compartilhamento, pagamento externo, consentimento) e as telas (a conta de aula não tem conjunto de dados: a conferir com a tela real).
   URL: meta-diagnostico.html?zerar=1 · Tutoriais (tour.js): ?tour=investigar-purchase | colar-codigo | corrigir-duplicado | corrigir-valor | plataforma-conectada | caso-queda */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return LANG === 'es' ? es : pt }
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var CONF = '16/10/2026';

  /* ---------- os casos da clínica ---------- */
  var FONTES = [['teste', T('Eventos de teste', 'Probar eventos')], ['diag', T('Diagnóstico', 'Diagnóstico')], ['codigo', T('Código da página', 'Código de la página')], ['plat', T('Plataforma e configurações', 'Plataforma y configuraciones')]];
  var CASOS = {
    purchase: {
      t: T('Purchase não chega', 'Purchase no llega'),
      relato: T('Loja própria, sem plataforma de parceiro. A cliente Júlia diz: “Os anúncios de venda não otimizam e o Gerenciador não mostra nenhuma compra, mas eu vendo todo dia”.', 'Tienda propia, sin plataforma socia. La clienta Julia dice: “Los anuncios de venta no optimizan y el Administrador no muestra ninguna compra, pero vendo todos los días”.'),
      ev: {
        teste: T('Compra de teste feita como cliente: PageView ✓ em todas as páginas, ViewContent ✓, AddToCart ✓, InitiateCheckout ✓. O evento Purchase NÃO apareceu.', 'Compra de prueba hecha como cliente: PageView ✓ en todas las páginas, ViewContent ✓, AddToCart ✓, InitiateCheckout ✓. El evento Purchase NO apareció.'),
        diag: T('Sem erros nem avisos novos. (Sem Purchase, não há o que diagnosticar nele.)', 'Sin errores ni avisos nuevos. (Sin Purchase, no hay qué diagnosticar en él.)'),
        codigo: T('Página de pedido concluído (obrigado): tem o código base do Pixel (PageView) e mais nada. O código do evento Purchase não está nesta página. Foi pedido ao desenvolvedor na última atualização do tema, mas ficou de fora.', 'Página de pedido completado (gracias): tiene el código base del píxel (PageView) y nada más. El código del evento Purchase no está en esta página. Se le pidió al desarrollador en la última actualización del tema, pero quedó afuera.'),
        plat: T('Sem plataforma de parceiro conectada. O pixel certo (o da conta de anúncios da cliente) está no site.', 'Sin plataforma socia conectada. El píxel correcto (el de la cuenta publicitaria de la clienta) está en el sitio.')
      },
      chave: ['teste', 'codigo'],
      causas: [['bloq', T('O navegador do cliente está bloqueando o Pixel', 'El navegador del cliente está bloqueando el píxel'), 0], ['ausente', T('O código do evento Purchase não está na página de pedido concluído', 'El código del evento Purchase no está en la página de pedido completado'), 1], ['pag', T('A conta de anúncios está sem forma de pagamento', 'La cuenta publicitaria está sin forma de pago'), 0], ['outro', T('O pixel instalado é de outro portfólio', 'El píxel instalado es de otro portafolio'), 0]],
      sols: [['novo', T('Criar um pixel novo e trocar o código base', 'Crear un píxel nuevo y cambiar el código base'), 0], ['dev', T('Pedir ao desenvolvedor para adicionar o código do evento Purchase, com valor e moeda, só na página de pedido concluído, e testar em Eventos de teste', 'Pedir al desarrollador que agregue el código del evento Purchase, con valor y moneda, solo en la página de pedido completado, y probar en Probar eventos'), 1], ['capi', T('Ligar só a API de Conversões e tirar o pixel', 'Activar solo la API de Conversiones y quitar el píxel'), 0], ['bloqueador', T('Pedir à cliente para desligar o bloqueador de anúncios', 'Pedir a la clienta que desactive el bloqueador de anuncios'), 0]],
      ok: T('Isso! PageView, ViewContent, AddToCart e InitiateCheckout chegam (o pixel está ok), só o Purchase falta, e no código da página de pedido concluído ele não existe. A correção é do desenvolvedor: o código do evento Purchase, com value e currency, só na página que indica a compra. Depois, uma compra de teste em Eventos de teste.', '¡Eso! PageView, ViewContent, AddToCart e InitiateCheckout llegan (el píxel está bien), solo falta el Purchase, y en el código de la página de pedido completado no existe. La corrección es del desarrollador: el código del evento Purchase, con value y currency, solo en la página que indica la compra. Después, una compra de prueba en Probar eventos.')
    },
    duplicado: {
      t: T('Purchase duplicado', 'Purchase duplicado'),
      relato: T('Loja com app da plataforma conectado. O cliente Caio diz: “Os relatórios mostram o dobro de vendas do que eu realmente fiz”.', 'Tienda con app de la plataforma conectada. El cliente Caio dice: “Los informes muestran el doble de ventas de las que realmente hice”.'),
      ev: {
        teste: T('Cada compra de teste mostra 2 eventos Purchase pelo navegador, com o mesmo valor, com 1 segundo de diferença.', 'Cada compra de prueba muestra 2 eventos Purchase por el navegador, con el mismo valor, con 1 segundo de diferencia.'),
        diag: T('Aviso: “Vários eventos em uma ação”. O pixel enviou mais de um evento para uma única ação do visitante.', 'Aviso: “Varios eventos en una acción”. El píxel envió más de un evento para una sola acción del visitante.'),
        codigo: T('Cabeçalho do tema: código base + um fbq(\'track\', \'Purchase\') com valor 0.00. A página de pedido concluído também tem um fbq(\'track\', \'Purchase\'), colado à mão por um desenvolvedor antigo.', 'Encabezado del tema: código base + un fbq(\'track\', \'Purchase\') con valor 0.00. La página de pedido completado también tiene un fbq(\'track\', \'Purchase\'), pegado a mano por un desarrollador antiguo.'),
        plat: T('O app da plataforma está conectado ao mesmo pixel e também envia o Purchase.', 'La app de la plataforma está conectada al mismo píxel y también envía el Purchase.')
      },
      chave: ['teste', 'codigo'],
      causas: [['varios', T('O Purchase é enviado em mais de um lugar: cabeçalho, página de pedido concluído e app da plataforma', 'El Purchase se envía en más de un lugar: encabezado, página de pedido completado y app de la plataforma'), 1], ['real', T('As vendas realmente dobraram', 'Las ventas realmente se duplicaron'), 0], ['moeda', T('A moeda está errada no pixel', 'La moneda está mal en el píxel'), 0], ['dominio', T('O domínio está bloqueado nas permissões de tráfego', 'El dominio está bloqueado en los permisos de tráfico'), 0]],
      sols: [['apagar', T('Apagar o pixel e criar outro', 'Borrar el píxel y crear otro'), 0], ['um', T('Deixar o Purchase em UM só lugar: remover o código manual do cabeçalho e da página de pedido concluído e manter o app da plataforma, e testar em Eventos de teste', 'Dejar el Purchase en UN solo lugar: quitar el código manual del encabezado y de la página de pedido completado y mantener la app de la plataforma, y probar en Probar eventos'), 1], ['ignorar', T('Ignorar: a Meta desduplica sozinha em qualquer caso', 'Ignorar: Meta deduplica sola en cualquier caso'), 0], ['capi', T('Desligar o app e manter só os dois códigos manuais', 'Desactivar la app y mantener solo los dos códigos manuales'), 0]],
      ok: T('Isso! O Diagnóstico avisou “Vários eventos em uma ação” e o código mostra o Purchase repetido. A Meta diz que o único código no cabeçalho deve ser o código base e que o Purchase vai só na página que indica a compra. Com o app conectado, o código manual sobra.', '¡Eso! El Diagnóstico avisó “Varios eventos en una acción” y el código muestra el Purchase repetido. Meta dice que el único código en el encabezado debe ser el código base y que el Purchase va solo en la página que indica la compra. Con la app conectada, el código manual sobra.')
    },
    valor: {
      t: T('Purchase com valor errado', 'Purchase con valor incorrecto'),
      relato: T('Loja própria. A cliente Rita diz: “O ROAS está estranho: o Gerenciador mostra as compras, mas com valor zero”.', 'Tienda propia. La clienta Rita dice: “El ROAS está raro: el Administrador muestra las compras, pero con valor cero”.'),
      ev: {
        teste: T('O Purchase chega, mas com value 0.00 e currency USD, mesmo em compras de R$ 99,90.', 'El Purchase llega, pero con value 0.00 y currency USD, incluso en compras de R$ 99,90.'),
        diag: T('Avisos: “Preço ausente ou inválido no parâmetro de valor” e “O parâmetro de moeda tem um código de 3 letras ausente e/ou inválido”.', 'Avisos: “Precio ausente o inválido en el parámetro de valor” y “El parámetro de moneda tiene un código de 3 letras ausente y/o inválido”.'),
        codigo: T('Página de pedido concluído: fbq(\'track\', \'Purchase\', { value: \'R$ 99,90\', currency: \'reais\' });', 'Página de pedido completado: fbq(\'track\', \'Purchase\', { value: \'R$ 99,90\', currency: \'reais\' });'),
        plat: T('Sem plataforma de parceiro. O código é manual.', 'Sin plataforma socia. El código es manual.')
      },
      chave: ['diag', 'codigo'],
      causas: [['fmt', T('O valor tem símbolo e vírgula e a moeda não é um código de 3 letras (como BRL)', 'El valor tiene símbolo y coma y la moneda no es un código de 3 letras (como BRL)'), 1], ['pixel', T('O pixel não é da conta certa', 'El píxel no es de la cuenta correcta'), 0], ['dup', T('O Purchase está duplicado', 'El Purchase está duplicado'), 0], ['consent', T('O banner de cookies bloqueia o evento', 'El banner de cookies bloquea el evento'), 0]],
      sols: [['pt', T('Trocar para value: 99.90 (ponto decimal, só número) e currency: \'BRL\'; ou usar valor e moeda dinâmicos do pedido; e testar', 'Cambiar a value: 99.90 (punto decimal, solo número) y currency: \'BRL\'; o usar valor y moneda dinámicos del pedido; y probar'), 1], ['zero', T('Deixar value: 0.00 e corrigir só no relatório', 'Dejar value: 0.00 y corregir solo en el informe'), 0], ['novo', T('Criar um evento personalizado chamado Compra', 'Crear un evento personalizado llamado Compra'), 0], ['capi', T('Ligar a API de Conversões', 'Activar la API de Conversiones'), 0]],
      ok: T('Isso! A Meta pede value numérico com ponto decimal (sem letras, símbolos de moeda ou vírgulas) e currency com código de 3 letras (como BRL). Dá para colocar o valor real do pedido, fixo ou dinâmico. Depois, teste e confira que o aviso sumiu do Diagnóstico.', '¡Eso! Meta pide value numérico con punto decimal (sin letras, símbolos de moneda ni comas) y currency con código de 3 letras (como BRL). Se puede poner el valor real del pedido, fijo o dinámico. Después, prueba y confirma que el aviso desapareció del Diagnóstico.')
    },
    plataforma: {
      t: T('Plataforma conectada e Purchase não chega', 'Plataforma conectada y Purchase no llega'),
      relato: T('Loja em plataforma de parceiro, conectada à Meta. O cliente Davi diz: “Já está conectado, mas o Purchase não aparece”.', 'Tienda en plataforma socia, conectada a Meta. El cliente Davi dice: “Ya está conectado, pero el Purchase no aparece”.'),
      ev: {
        teste: T('ViewContent, AddToCart e InitiateCheckout chegam. O Purchase não chega na compra de teste.', 'ViewContent, AddToCart e InitiateCheckout llegan. El Purchase no llega en la compra de prueba.'),
        diag: T('Sem erros. Sem avisos de valor ou de nome de evento.', 'Sin errores. Sin avisos de valor ni de nombre de evento.'),
        codigo: T('Sem código manual no tema. Só o que a integração coloca.', 'Sin código manual en el tema. Solo lo que coloca la integración.'),
        plat: T('Pixel conectado: o certo. Compartilhamento de dados: padrão (só o navegador). O pagamento é finalizado em um serviço externo, que não volta para a página de pedido concluído da loja. (treino: confira o comportamento exato na plataforma)', 'Píxel conectado: el correcto. Compartir datos: estándar (solo el navegador). El pago se finaliza en un servicio externo, que no vuelve a la página de pedido completado de la tienda. (práctica: confirma el comportamiento exacto en la plataforma)')
      },
      chave: ['teste', 'plat'],
      causas: [['pagext', T('A compra termina fora da loja e o compartilhamento é só pelo navegador, então o Purchase se perde no caminho', 'La compra termina fuera de la tienda y el compartir es solo por el navegador, así que el Purchase se pierde en el camino'), 1], ['codigo', T('O código manual do tema está quebrado', 'El código manual del tema está roto'), 0], ['nome', T('O nome do evento está em minúscula', 'El nombre del evento está en minúscula'), 0], ['perm', T('As permissões de tráfego bloqueiam o domínio', 'Los permisos de tráfico bloquean el dominio'), 0]],
      sols: [['max', T('Ativar o compartilhamento de dados no nível máximo (Pixel + API de Conversões) e conferir com a plataforma/serviço de pagamento como o pedido volta; testar em Eventos de teste', 'Activar compartir datos en el nivel máximo (píxel + API de Conversiones) y confirmar con la plataforma/servicio de pago cómo vuelve el pedido; probar en Probar eventos'), 1], ['colar', T('Colar um código de Purchase manual no tema', 'Pegar un código de Purchase manual en el tema'), 0], ['trocar', T('Trocar de plataforma', 'Cambiar de plataforma'), 0], ['esperar', T('Esperar uma semana: é demora da Meta', 'Esperar una semana: es demora de Meta'), 0]],
      ok: T('Isso! Quando a compra termina fora da loja e só o navegador envia, o Purchase pode não chegar. O nível máximo liga também o envio pelo servidor (API de Conversões). Depois, teste. Não cole código manual por cima de uma integração: isso causa duplicação.', '¡Eso! Cuando la compra termina fuera de la tienda y solo envía el navegador, el Purchase puede no llegar. El nivel máximo activa también el envío por el servidor (API de Conversiones). Después, prueba. No pegues código manual encima de una integración: eso causa duplicación.')
    },
    queda: {
      t: T('Eventos caíram depois da atualização', 'Los eventos cayeron después de la actualización'),
      relato: T('Loja própria. O cliente Beto diz: “Desde que o site mudou de tema, o Gerenciador mandou um alerta e as campanhas pararam de entregar bem”.', 'Tienda propia. El cliente Beto dice: “Desde que el sitio cambió de tema, el Administrador mandó una alerta y las campañas dejaron de entregar bien”.'),
      ev: {
        teste: T('Nenhum PageView em nenhuma página. Nenhum outro evento chega.', 'Ningún PageView en ninguna página. Ningún otro evento llega.'),
        diag: T('Alerta: redução considerável no tráfego de eventos do site em relação à semana anterior.', 'Alerta: reducción considerable en el tráfico de eventos del sitio respecto a la semana anterior.'),
        codigo: T('O cabeçalho do tema novo não tem o código base do Pixel. Ele foi removido na atualização.', 'El encabezado del tema nuevo no tiene el código base del píxel. Se eliminó en la actualización.'),
        plat: T('Sem plataforma de parceiro. A lista de domínios permitidos não foi alterada.', 'Sin plataforma socia. La lista de dominios permitidos no fue modificada.')
      },
      chave: ['teste', 'codigo'],
      causas: [['base', T('O código base do Pixel foi removido do cabeçalho na atualização do tema', 'El código base del píxel se eliminó del encabezado en la actualización del tema'), 1], ['sazonal', T('É só sazonalidade: feriado e queda de tráfego', 'Es solo estacionalidad: feriado y caída de tráfico'), 0], ['lista', T('A lista de domínios bloqueados está errada', 'La lista de dominios bloqueados está mal'), 0], ['forma', T('A forma de pagamento da conta venceu', 'La forma de pago de la cuenta venció'), 0]],
      sols: [['reinstala', T('Reinstalar o código base na seção head de todas as páginas (com o desenvolvedor), confirmar o PageView em Eventos de teste e combinar de testar o pixel sempre que o site mudar', 'Reinstalar el código base en la sección head de todas las páginas (con el desarrollador), confirmar el PageView en Probar eventos y acordar probar el píxel siempre que el sitio cambie'), 1], ['esperar', T('Esperar: volta sozinho', 'Esperar: vuelve solo'), 0], ['novo', T('Criar campanhas novas e deixar o pixel como está', 'Crear campañas nuevas y dejar el píxel como está'), 0], ['conta', T('Trocar a conta de anúncios', 'Cambiar la cuenta publicitaria'), 0]],
      ok: T('Isso! A própria Central de Ajuda lista isso como causa comum: código base ausente, apagado ou fora do cabeçalho, em geral depois de uma mudança no site. Passos: confirmar a queda, checar o código base no head de cada página, testar com Eventos de teste e olhar o Diagnóstico.', '¡Eso! El propio Centro de ayuda lista esto como causa común: código base ausente, borrado o fuera del encabezado, en general después de un cambio en el sitio. Pasos: confirmar la caída, revisar el código base en el head de cada página, probar con Probar eventos y mirar el Diagnóstico.')
    }
  };
  var ORDEM = ['purchase', 'duplicado', 'valor', 'plataforma', 'queda'];

  function inicial() {
    return { tab: 'clinica', caso: 'purchase', c: {}, cod: { id: '', onde: '', ty: '' }, pl: { nivel: 'padrao', pagext: true, manual: false, consent: true, pixelCerto: true } };
  }
  var S = ler('sim.diagnostico', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('caso') && CASOS[params.get('caso')]) { S.caso = params.get('caso'); S.tab = 'clinica' }
  function grava() { try { localStorage.setItem('sim.diagnostico', JSON.stringify(S)) } catch (e) { } window.__simDg = { S: S } }
  grava();
  function cs() { return S.c[S.caso] || (S.c[S.caso] = { v: {}, causa: '', sol: '', res: '' }) }

  function casca(corpo) { return '<div class="sim-faixa">🧪 ' + T('Simulador de treinamento do Diagnóstico de casos · nada aqui vai para a Meta ·', 'Simulador de capacitación del Diagnóstico de casos · nada de aquí va a Meta ·') + ' <a href="simuladores.html">' + T('← voltar à plataforma', '← volver a la plataforma') + '</a></div><div data-sem-traduzir="1">' + corpo + '</div>' }
  function nav() {
    var t = [['clinica', '🕵️ ' + T('Clínica de casos', 'Clínica de casos')], ['codigo', '✍️ ' + T('Colar o código', 'Pegar el código')], ['plat', '🧰 ' + T('Plataforma conectada', 'Plataforma conectada')]];
    return '<nav class="ss-nav">' + t.map(function (x) { return '<button class="ss-it' + (S.tab === x[0] ? ' on' : '') + '" data-tab="' + x[0] + '" data-t="tab-' + x[0] + '">' + x[1] + '</button>' }).join('') + '</nav>';
  }

  /* ---------- clínica ---------- */
  function telaClinica() {
    var k = CASOS[S.caso], c = cs();
    var opts = ORDEM.map(function (id) { return '<option value="' + id + '"' + (id === S.caso ? ' selected' : '') + '>' + esc(CASOS[id].t) + '</option>' }).join('');
    var btns = FONTES.map(function (f) { return '<button class="btn' + (c.v[f[0]] ? ' sec' : '') + '" data-ev="' + f[0] + '" data-t="ev-' + f[0] + '">' + (c.v[f[0]] ? '✓ ' : '🔍 ') + f[1] + '</button>' }).join(' ');
    var vistos = FONTES.filter(function (f) { return c.v[f[0]] }).map(function (f) { return '<div class="vf-caixa" data-t="evid-' + f[0] + '"><b>' + f[1] + ' ' + T('(simulado)', '(simulado)') + '</b><p>' + esc(k.ev[f[0]]) + '</p></div>' }).join('');
    var rad = function (nome, lista, atual, pre) { return lista.map(function (o) { return '<label class="ga-lin" data-t="' + pre + '-' + o[0] + '"><input type="radio" name="' + nome + '" data-' + nome + '="' + o[0] + '"' + (atual === o[0] ? ' checked' : '') + ' data-t="r-' + pre + '-' + o[0] + '"/><span>' + esc(o[1]) + '</span></label>' }).join('') };
    var pode = c.causa && c.sol;
    var res = '';
    if (c.res === 'ok') res = '<div class="ga-aviso ok" data-t="resultado"><b>✓ ' + T('Diagnóstico certo!', '¡Diagnóstico correcto!') + '</b> ' + esc(k.ok) + (c.pulou ? ' <i>' + T('Dica: você acertou sem abrir todas as fontes principais; no atendimento de verdade, confirme sempre nas fontes antes de afirmar a causa.', 'Consejo: acertaste sin abrir todas las fuentes principales; en la atención real, confirma siempre en las fuentes antes de afirmar la causa.') + '</i>' : '') + '</div>';
    else if (c.res) res = '<div class="ga-aviso verm" data-t="resultado"><b>' + T('Ainda não.', 'Todavía no.') + '</b> ' + esc(c.res) + '</div>';
    return '<h1>' + T('Clínica de casos', 'Clínica de casos') + '</h1><p class="ss-sub">' + T('Primeiro investigue, depois diga a causa e a solução. Um sintoma pode ter várias causas.', 'Primero investiga, luego di la causa y la solución. Un síntoma puede tener varias causas.') + '</p>' +
      '<p><b>' + T('Caso', 'Caso') + '</b> <select class="ga-in" id="dgCaso" data-t="sel-caso">' + opts + '</select></p>' +
      '<div class="vf-caixa" data-t="box-relato"><b>' + T('O que o cliente relatou', 'Lo que el cliente relató') + '</b><p>' + esc(k.relato) + '</p></div>' +
      '<p><b>' + T('Onde olhar', 'Dónde mirar') + '</b> <span class="miudo">(' + T('abra o que for útil', 'abre lo que sea útil') + ')</span></p><div class="dg-btns" data-t="fontes">' + btns + '</div>' + vistos +
      '<div class="vf-caixa" data-t="box-concl"><b>' + T('Qual é a causa?', '¿Cuál es la causa?') + '</b>' + rad('causa', k.causas, c.causa, 'causa') +
      '<p><b>' + T('Qual é a solução?', '¿Cuál es la solución?') + '</b></p>' + rad('sol', k.sols, c.sol, 'sol') +
      '<button class="btn" data-acao="conferir" data-t="btn-conferir"' + (pode ? '' : ' disabled') + '>' + T('Conferir diagnóstico', 'Revisar diagnóstico') + '</button></div>' + res +
      '<p class="conferido">✓ ' + T('Os avisos do Diagnóstico, o código base no head, o Purchase só na página da compra, o formato de value e currency e os passos para queda de eventos vêm de artigos da Central de Ajuda (', 'Los avisos del Diagnóstico, el código base en el head, el Purchase solo en la página de la compra, el formato de value y currency y los pasos para caída de eventos vienen de artículos del Centro de ayuda (') + CONF + '). ⚠ ' + T('Os clientes e o conteúdo de cada fonte são do treino (a conferir).', 'Los clientes y el contenido de cada fuente son del entrenamiento (por confirmar).') + '</p>';
  }
  function confere() {
    var k = CASOS[S.caso], c = cs(), faltam = (k.chave || []).filter(function (f) { return !c.v[f] });
    var causaOk = k.causas.filter(function (x) { return x[0] === c.causa })[0][2], solOk = k.sols.filter(function (x) { return x[0] === c.sol })[0][2];
    if (causaOk && solOk) { c.res = 'ok'; c.pulou = faltam.length; return }
    var m = [];
    if (faltam.length) m.push(T('Você ainda não olhou: ', 'Todavía no miraste: ') + faltam.map(function (f) { return FONTES.filter(function (x) { return x[0] === f })[0][1] }).join(', ') + '.');
    if (!causaOk) m.push(T('A causa escolhida não bate com o que apareceu nas fontes. Releia o relato e as fontes.', 'La causa elegida no coincide con lo que apareció en las fuentes. Relee el relato y las fuentes.'));
    else m.push(T('A causa está certa, mas a solução escolhida não resolve (ou piora). Pense no que o cliente pode fazer de fato.', 'La causa está bien, pero la solución elegida no resuelve (o empeora). Piensa en lo que el cliente puede hacer de verdad.'));
    c.res = m.join(' ');
  }

  /* ---------- colar o código ---------- */
  var BASE = "<script>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\nn.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;\nt.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\ndocument,'script','https://connect.facebook.net/en_US/fbevents.js');\nfbq('init', 'SEU_ID_DO_PIXEL');\nfbq('track', 'PageView');\n</script>";
  function avaliaCod() {
    var cd = S.cod, r = { baseOk: false, base: [], ev: null, msgs: [] };
    if (!/^\d{15,16}$/.test(cd.id.trim())) r.base.push(T('Falta o ID do Pixel (15 ou 16 números).', 'Falta el ID del píxel (15 o 16 números).'));
    if (cd.onde !== 'head') r.base.push(cd.onde ? T('O código base precisa estar na seção head de cada página.', 'El código base debe estar en la sección head de cada página.') : T('Escolha onde o código base vai.', 'Elige dónde va el código base.'));
    r.baseOk = !r.base.length;
    var m = /fbq\(\s*['"]track['"]\s*(?:,\s*['"]([^'"]*)['"])?\s*(?:,\s*\{([^}]*)\})?\s*\)/i.exec(cd.ty || '');
    if (m) {
      var nome = m[1] || '', ps = m[2] || '', v = /value\s*:\s*([^,}]+)/i.exec(ps), cu = /currency\s*:\s*(['"]?)([^'",}\s]*)\1/i.exec(ps);
      var ev = { nome: nome, nomeOk: nome === 'Purchase', valor: v ? v[1].trim() : null, moeda: cu ? cu[2] : null };
      ev.valorOk = !!v && /^\d+(\.\d+)?$/.test(ev.valor); ev.moedaOk = !!cu && /^[A-Z]{3}$/.test(ev.moeda);
      if (!ev.nomeOk) r.msgs.push(T('Incompatibilidade de nome de evento: “' + nome + '” não é igual ao evento padrão Purchase (os nomes diferenciam maiúsculas de minúsculas); vira um evento personalizado.', 'Incompatibilidad de nombre de evento: “' + nome + '” no es igual al evento estándar Purchase (los nombres distinguen mayúsculas de minúsculas); se vuelve un evento personalizado.'));
      if (!v) r.msgs.push(T('Preço ausente ou inválido no parâmetro de valor (falta o value).', 'Precio ausente o inválido en el parámetro de valor (falta el value).'));
      else if (!ev.valorOk) r.msgs.push(T('Preço ausente ou inválido no parâmetro de valor: use número decimal com ponto, sem letras, símbolos de moeda nem vírgulas.', 'Precio ausente o inválido en el parámetro de valor: usa un número decimal con punto, sin letras, símbolos de moneda ni comas.'));
      if (!cu) r.msgs.push(T('O parâmetro de moeda tem um código de 3 letras ausente (falta o currency).', 'El parámetro de moneda tiene un código de 3 letras ausente (falta el currency).'));
      else if (!ev.moedaOk) r.msgs.push(T('O parâmetro de moeda tem um código de 3 letras inválido: use um código como BRL ou USD.', 'El parámetro de moneda tiene un código de 3 letras inválido: usa un código como BRL o USD.'));
      r.ev = ev;
    } else if ((cd.ty || '').trim()) r.msgs.push(T('Não encontrei um código fbq(\'track\', ...) neste trecho.', 'No encontré un código fbq(\'track\', ...) en este trecho.'));
    r.ok = r.baseOk && r.ev && r.ev.nomeOk && r.ev.valorOk && r.ev.moedaOk;
    return r;
  }
  function telaCodigo() {
    var r = avaliaCod(), cd = S.cod;
    var linhas = '<tr data-t="lin-home"><td>' + T('Página inicial', 'Página de inicio') + '</td><td>PageView</td><td>' + (r.baseOk ? '✓ ' + T('chega', 'llega') : '✗ ' + T('não chega', 'no llega')) + '</td></tr>' +
      '<tr data-t="lin-ty-pv"><td>' + T('Página de pedido concluído', 'Página de pedido completado') + '</td><td>PageView</td><td>' + (r.baseOk ? '✓ ' + T('chega', 'llega') : '✗ ' + T('não chega', 'no llega')) + '</td></tr>' +
      '<tr data-t="lin-ty-pu"><td>' + T('Página de pedido concluído', 'Página de pedido completado') + '</td><td>' + esc(r.ev ? (r.ev.nome || '—') : 'Purchase') + '</td><td>' + (!r.ev ? '✗ ' + T('sem código', 'sin código') : !r.baseOk ? '✗ ' + T('sem o código base não chega', 'sin el código base no llega') : (r.ev.nomeOk && r.ev.valorOk && r.ev.moedaOk) ? '✓ ' + T('chega, valor ', 'llega, valor ') + esc(r.ev.valor) + ' ' + esc(r.ev.moeda) : '⚠ ' + T('chega com problema', 'llega con problema')) + '</td></tr>';
    return '<h1>' + T('Colar o código do Pixel', 'Pegar el código del píxel') + '</h1><p class="ss-sub">' + T('Quando não há integração pronta, o código vai na mão: o código base em todas as páginas e o código do evento só na página certa.', 'Cuando no hay integración lista, el código va a mano: el código base en todas las páginas y el código del evento solo en la página correcta.') + '</p>' +
      '<div class="vf-caixa" data-t="box-base"><b>1. ' + T('Código base (vai no head de TODAS as páginas)', 'Código base (va en el head de TODAS las páginas)') + '</b><pre class="dg-cod">' + esc(BASE) + '</pre>' +
      '<p>' + T('ID do Pixel', 'ID del píxel') + ' <input class="ga-in" id="dgId" placeholder="123456789012345" value="' + esc(cd.id) + '" data-t="in-id"/></p>' +
      '<p>' + T('Onde o código base foi colado', 'Dónde se pegó el código base') + ' <select class="ga-in" id="dgOnde" data-t="sel-onde">' + [['', T('Escolha onde', 'Elige dónde'), 'Escolha onde'], ['head', T('No head de todas as páginas', 'En el head de todas las páginas'), 'No head de todas as páginas'], ['fim', T('No fim do body de uma página só', 'Al final del body de una sola página'), 'No fim do body de uma página só'], ['home', T('Só na página inicial', 'Solo en la página de inicio'), 'Só na página inicial']].map(function (o) { return '<option value="' + o[0] + '" data-pt="' + o[2] + '"' + (cd.onde === o[0] ? ' selected' : '') + '>' + o[1] + '</option>' }).join('') + '</select></p>' +
      (r.base.length ? '<div class="ga-aviso verm" data-t="base-erros">' + r.base.map(esc).join(' ') + '</div>' : '<div class="ga-aviso ok" data-t="base-ok">✓ ' + T('Código base no lugar certo.', 'Código base en el lugar correcto.') + '</div>') + '</div>' +
      '<div class="vf-caixa" data-t="box-evento"><b>2. ' + T('Código do evento Purchase (só na página de pedido concluído)', 'Código del evento Purchase (solo en la página de pedido completado)') + '</b>' +
      '<p class="miudo">' + T('Exemplo de formato: fbq(\'track\', \'Purchase\', {value: 0.00, currency: \'USD\'}); troque pelo valor e pela moeda reais.', 'Ejemplo de formato: fbq(\'track\', \'Purchase\', {value: 0.00, currency: \'USD\'}); cambia por el valor y la moneda reales.') + '</p>' +
      '<textarea class="ga-in dg-ta" id="dgTy" rows="3" placeholder="fbq(\'track\', \'Purchase\', {value: 99.90, currency: \'BRL\'});" data-t="in-ty">' + esc(cd.ty) + '</textarea>' +
      (r.msgs.length ? '<div class="ga-aviso verm" data-t="diag-msgs"><b>' + T('Diagnóstico (simulado):', 'Diagnóstico (simulado):') + '</b><ul>' + r.msgs.map(function (x) { return '<li>' + esc(x) + '</li>' }).join('') + '</ul></div>' : '') + '</div>' +
      '<div class="vf-caixa" data-t="box-resultado"><b>3. ' + T('O que a Meta recebe (Eventos de teste, simulado)', 'Lo que recibe Meta (Probar eventos, simulado)') + '</b><table class="cm-tab"><thead><tr><th>' + T('Página', 'Página') + '</th><th>' + T('Evento', 'Evento') + '</th><th>' + T('Resultado', 'Resultado') + '</th></tr></thead><tbody>' + linhas + '</tbody></table>' +
      (r.ok ? '<div class="ga-aviso ok" data-t="ok-codigo"><b>✓ ' + T('Instalado direito!', '¡Instalado bien!') + '</b> ' + T('Base no head de todas as páginas e Purchase com valor e moeda, só na página da compra. Agora teste com uma compra de verdade e confira em Eventos de teste.', 'Base en el head de todas las páginas y Purchase con valor y moneda, solo en la página de la compra. Ahora prueba con una compra de verdad y confirma en Probar eventos.') + '</div>' : '') + '</div>' +
      '<p class="conferido">✓ ' + T('Código base no head de todas as páginas, evento no lugar certo, nomes que diferenciam maiúsculas e minúsculas e o formato de value e currency vêm da Central de Ajuda (', 'Código base en el head de todas las páginas, evento en el lugar correcto, nombres que distinguen mayúsculas y minúsculas y el formato de value y currency vienen del Centro de ayuda (') + CONF + '). ⚠ ' + T('O código base mostrado é uma versão de treino: copie sempre o do Gerenciador de Eventos (a conferir).', 'El código base mostrado es una versión de práctica: copia siempre el del Administrador de eventos (por confirmar).') + '</p>';
  }

  /* ---------- plataforma conectada ---------- */
  function avaliaPlat() {
    var p = S.pl, r = { nav: 0, srv: 0, linhas: [], dica: [] };
    if (!p.pixelCerto) { r.linhas.push(T('Os eventos chegam, mas em OUTRO pixel: no pixel do cliente não aparece nada.', 'Los eventos llegan, pero a OTRO píxel: en el píxel del cliente no aparece nada.')); r.dica.push(T('Conectar o pixel da conta de anúncios do cliente.', 'Conectar el píxel de la cuenta publicitaria del cliente.')); return r }
    if (!p.consent) { r.linhas.push(T('O visitante não aceitou os cookies: o Pixel não dispara até aceitar (isso é esperado, não é erro).', 'El visitante no aceptó las cookies: el píxel no se dispara hasta aceptar (esto es lo esperado, no es un error).')); r.dica.push(T('Testar aceitando os cookies.', 'Probar aceptando las cookies.')); return r }
    r.nav = p.pagext ? 0 : 1; r.srv = p.nivel === 'maximo' ? 1 : 0;
    if (p.manual && !p.pagext) r.nav += 1;   // código manual por cima do app: o navegador manda de novo
    r.linhas.push(T('Pelo navegador: ', 'Por el navegador: ') + (r.nav ? r.nav + ' Purchase' : T('nenhum (o pedido termina fora da loja)', 'ninguno (el pedido termina fuera de la tienda)')));
    r.linhas.push(T('Pelo servidor (API de Conversões): ', 'Por el servidor (API de Conversiones): ') + (r.srv ? '1 Purchase' : T('desligado (nível padrão)', 'desactivado (nivel estándar)')));
    var tot = r.nav + r.srv;
    if (p.manual) r.dica.push(T('Código manual por cima da integração: o navegador manda o Purchase duas vezes. Remova o código manual.', 'Código manual encima de la integración: el navegador manda el Purchase dos veces. Quita el código manual.'));
    if (!tot) r.dica.push(T('Nenhum Purchase chega. Ative o nível máximo para o servidor enviar também.', 'No llega ningún Purchase. Activa el nivel máximo para que el servidor envíe también.'));
    r.tot = tot; return r;
  }
  function telaPlat() {
    var p = S.pl, r = avaliaPlat(), certo = !r.dica.length && r.tot >= 1;
    var chk = function (k, tx, id) { return '<label class="ga-lin"><input type="checkbox" data-pl="' + k + '"' + (p[k] ? ' checked' : '') + ' data-t="chk-' + id + '"/><span>' + tx + '</span></label>' };
    return '<h1>' + T('Plataforma conectada que não envia', 'Plataforma conectada que no envía') + '</h1><p class="ss-sub">' + T('A loja está em uma plataforma de parceiro, “já conectada”. Ajuste as configurações do cliente e veja o que a Meta recebe.', 'La tienda está en una plataforma socia, “ya conectada”. Ajusta las configuraciones del cliente y mira lo que recibe Meta.') + '</p>' +
      '<div class="vf-caixa" data-t="box-config"><b>' + T('Configurações do cliente (simulado)', 'Configuraciones del cliente (simulado)') + '</b>' +
      '<p>' + T('Compartilhamento de dados', 'Compartir datos') + ' <select class="ga-in" id="dgNivel" data-t="sel-nivel">' + [['padrao', T('Padrão (só o navegador)', 'Estándar (solo el navegador)'), 'Padrão (só o navegador)'], ['maximo', T('Máximo (navegador + servidor)', 'Máximo (navegador + servidor)'), 'Máximo (navegador + servidor)']].map(function (o) { return '<option value="' + o[0] + '" data-pt="' + o[2] + '"' + (p.nivel === o[0] ? ' selected' : '') + '>' + o[1] + '</option>' }).join('') + '</select></p>' +
      chk('pagext', T('O pagamento termina fora da loja (serviço externo)', 'El pago termina fuera de la tienda (servicio externo)'), 'pagext') + chk('manual', T('Há código do Pixel colado à mão no tema, além do app', 'Hay código del píxel pegado a mano en el tema, además de la app'), 'manual') +
      chk('consent', T('O visitante aceitou os cookies', 'El visitante aceptó las cookies'), 'consent') + chk('pixelCerto', T('O pixel conectado é o da conta de anúncios do cliente', 'El píxel conectado es el de la cuenta publicitaria del cliente'), 'pixelcerto') + '</div>' +
      '<div class="vf-caixa" data-t="box-recebe"><b>' + T('O que a Meta recebe de uma compra (Eventos de teste, simulado)', 'Lo que recibe Meta de una compra (Probar eventos, simulado)') + '</b><ul>' + r.linhas.map(function (x) { return '<li>' + esc(x) + '</li>' }).join('') + '</ul></div>' +
      (certo ? '<div class="ga-aviso ok" data-t="plat-ok"><b>✓ ' + T('Purchase chegando uma vez só!', '¡Purchase llegando una sola vez!') + '</b> ' + T('Pagamento externo, mas o servidor também envia. Sempre teste com uma compra e confira em Eventos de teste.', 'Pago externo, pero el servidor también envía. Prueba siempre con una compra y confirma en Probar eventos.') + '</div>' : '<div class="ga-aviso verm" data-t="plat-dica"><b>' + T('O que ajustar:', 'Qué ajustar:') + '</b> ' + r.dica.map(esc).join(' ') + '</div>') +
      '<p class="conferido">✓ ' + T('A integração por parceiro, o uso do pixel junto com a API de Conversões e a diferença entre colar código à mão e usar integração vêm da Central de Ajuda (', 'La integración por socio, el uso del píxel junto con la API de Conversiones y la diferencia entre pegar código a mano y usar integración vienen del Centro de ayuda (') + CONF + '). ⚠ ' + T('O comportamento exato de cada plataforma (níveis, pagamento externo, consentimento) é do treino: confira na plataforma do cliente (a conferir).', 'El comportamiento exacto de cada plataforma (niveles, pago externo, consentimiento) es de práctica: confírmalo en la plataforma del cliente (por confirmar).') + '</p>';
  }

  function pagina() {
    var corpo = S.tab === 'clinica' ? telaClinica() : S.tab === 'codigo' ? telaCodigo() : telaPlat();
    return casca('<div class="ss">' + nav() + '<main class="ss-main">' + corpo + '</main></div>');
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); grava(); render(); return }
    if ((c = t.closest('[data-ev]'))) { cs().v[c.getAttribute('data-ev')] = true; grava(); render(); return }
    var b = t.closest('[data-acao]'); if (b && !b.disabled && b.getAttribute('data-acao') === 'conferir') { confere(); grava(); render() }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'dgCaso') { S.caso = t.value }
    else if (t.hasAttribute && t.hasAttribute('data-causa')) { var c1 = cs(); c1.causa = t.getAttribute('data-causa'); c1.res = '' }
    else if (t.hasAttribute && t.hasAttribute('data-sol')) { var c2 = cs(); c2.sol = t.getAttribute('data-sol'); c2.res = '' }
    else if (t.id === 'dgOnde') S.cod.onde = t.value;
    else if (t.id === 'dgNivel') S.pl.nivel = t.value;
    else if (t.hasAttribute && t.hasAttribute('data-pl')) S.pl[t.getAttribute('data-pl')] = t.checked;
    else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.id === 'dgId') S.cod.id = t.value; else if (t.id === 'dgTy') S.cod.ty = t.value; else return;
    grava(); clearTimeout(window.__dgT); window.__dgT = setTimeout(render, 350);
  });
  function render() {
    var foco = document.activeElement && document.activeElement.id, pos = null;
    if (foco && /^(dgId|dgTy)$/.test(foco)) { var e0 = document.getElementById(foco); try { pos = e0.selectionStart } catch (e) { } }
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = pos == null ? el.value.length : pos; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simDg = { S: S };
  }
  window.SIMDG = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, pronto: render, aval: avaliaCod };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function dg() { return window.__simDg ? window.__simDg.S : S }
  var Z = function (o) { return function () { SIMDG.zera(); if (o) SIMDG.set(o) } };
  function V(caso, vistos, causa, sol) { var c = {}; c[caso] = { v: vistos || {}, causa: causa || '', sol: sol || '', res: '' }; return { tab: 'clinica', caso: caso, c: c } }
  function tt(pt, es) { return { pt: pt, es: es } }
  function investigar(caso, titulo, intro, ev1, ev2, causa, sol, final) {
    var k = CASOS[caso];
    return [
      { antes: Z(V(caso)), alvo: '[data-t=box-relato]', garante: Z(V(caso)), tit: titulo, txt: intro },
      { alvo: '[data-t=ev-' + ev1 + ']', clique: true, garante: Z(V(caso)), tit: tt('Primeira pista', 'Primera pista'), txt: tt('Comece pela fonte mais direta. Clique nela.', 'Empieza por la fuente más directa. Haz clic en ella.') },
      { alvo: '[data-t=ev-' + ev2 + ']', clique: true, garante: Z(V(caso, (function () { var o = {}; o[ev1] = true; return o })())), tit: tt('Segunda pista', 'Segunda pista'), txt: tt('Agora confirme em outra fonte. Clique nela.', 'Ahora confírmalo en otra fuente. Haz clic en ella.') },
      { alvo: '[data-t=r-causa-' + causa + ']', clique: true, garante: Z(V(caso, (function () { var o = {}; o[ev1] = true; o[ev2] = true; return o })())), tit: tt('A causa', 'La causa'), txt: tt('Com as pistas, qual é a causa? Marque a que bate com tudo o que você viu.', 'Con las pistas, ¿cuál es la causa? Marca la que coincide con todo lo que viste.') },
      { alvo: '[data-t=r-sol-' + sol + ']', clique: true, garante: Z(V(caso, (function () { var o = {}; o[ev1] = true; o[ev2] = true; return o })(), causa)), tit: tt('A solução', 'La solución'), txt: tt('Agora a solução que o cliente pode executar de fato. Marque.', 'Ahora la solución que el cliente puede ejecutar de verdad. Marca.') },
      { alvo: '[data-t=btn-conferir]', clique: true, garante: Z(V(caso, (function () { var o = {}; o[ev1] = true; o[ev2] = true; return o })(), causa, sol)), tit: tt('Conferir', 'Revisar'), txt: tt('Clique para conferir o seu diagnóstico.', 'Haz clic para revisar tu diagnóstico.') },
      { alvo: '[data-t=resultado]', fim: true, semVolta: true, garante: function () { SIMDG.zera(); var o = V(caso, (function () { var q = {}; q[ev1] = true; q[ev2] = true; return q })(), causa, sol); o.c[caso].res = 'ok'; SIMDG.set(o) }, tit: tt('Diagnóstico certo 🎉', '¡Diagnóstico correcto! 🎉'), txt: final }
    ];
  }
  var DEPOIS = tt(' Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta à plataforma.', ' Haz clic en Terminar. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta a la plataforma.');
  TOURS['investigar-purchase'] = investigar('purchase', tt('Purchase não chega', 'Purchase no llega'), tt('A cliente vende todo dia, mas o Gerenciador não mostra compras. Investigar é olhar as fontes na ordem certa antes de dizer a causa. Clique em Próximo.', 'La clienta vende todos los días, pero el Administrador no muestra compras. Investigar es mirar las fuentes en el orden correcto antes de decir la causa. Haz clic en Siguiente.'), 'teste', 'codigo', 'ausente', 'dev',
    tt('Os outros eventos chegam e o código do Purchase não existe na página da compra: a solução é do desenvolvedor, só na página certa e com valor e moeda.' + DEPOIS.pt, 'Los otros eventos llegan y el código del Purchase no existe en la página de la compra: la solución es del desarrollador, solo en la página correcta y con valor y moneda.' + DEPOIS.es));
  TOURS['corrigir-duplicado'] = investigar('duplicado', tt('Purchase duplicado', 'Purchase duplicado'), tt('O cliente vê o dobro de vendas. Antes de culpar a Meta, olhe se o Purchase está saindo de mais de um lugar. Clique em Próximo.', 'El cliente ve el doble de ventas. Antes de culpar a Meta, mira si el Purchase está saliendo de más de un lugar. Haz clic en Siguiente.'), 'diag', 'codigo', 'varios', 'um',
    tt('Um único lugar para o Purchase. Com o app da plataforma conectado, o código manual sobra.' + DEPOIS.pt, 'Un único lugar para el Purchase. Con la app de la plataforma conectada, el código manual sobra.' + DEPOIS.es));
  TOURS['corrigir-valor'] = investigar('valor', tt('Valor errado', 'Valor incorrecto'), tt('As compras chegam, mas com valor zero. O Diagnóstico costuma dizer exatamente o que está errado no valor e na moeda. Clique em Próximo.', 'Las compras llegan, pero con valor cero. El Diagnóstico suele decir exactamente qué está mal en el valor y en la moneda. Haz clic en Siguiente.'), 'diag', 'codigo', 'fmt', 'pt',
    tt('Valor numérico com ponto decimal e moeda de 3 letras: é o formato que a Meta pede.' + DEPOIS.pt, 'Valor numérico con punto decimal y moneda de 3 letras: es el formato que pide Meta.' + DEPOIS.es));
  TOURS['caso-queda'] = investigar('queda', tt('Queda de eventos', 'Caída de eventos'), tt('Depois da troca de tema, os eventos caíram. O alerta do Gerenciador já dá a direção: o código base. Clique em Próximo.', 'Después del cambio de tema, los eventos cayeron. La alerta del Administrador ya da la dirección: el código base. Haz clic en Siguiente.'), 'teste', 'codigo', 'base', 'reinstala',
    tt('Código base no head de todas as páginas, teste em Eventos de teste e um combinado para testar o pixel sempre que o site mudar.' + DEPOIS.pt, 'Código base en el head de todas las páginas, prueba en Probar eventos y un acuerdo para probar el píxel siempre que el sitio cambie.' + DEPOIS.es));
  var CT = function (o) { o = o || {}; return { tab: 'codigo', cod: { id: o.id || '', onde: o.onde || '', ty: o.ty || '' } } };
  var TY = "fbq('track', 'Purchase', {value: 99.90, currency: 'BRL'});";
  TOURS['colar-codigo'] = [
    { antes: Z(CT()), alvo: '[data-t=box-base]', garante: Z(CT()), tit: tt('O código base', 'El código base'), txt: tt('Sem integração pronta, o código vai à mão. O código base (que envia o PageView) vai no head de TODAS as páginas. Clique em Próximo.', 'Sin integración lista, el código va a mano. El código base (que envía el PageView) va en el head de TODAS las páginas. Haz clic en Siguiente.') },
    { alvo: '[data-t=in-id]', garante: Z(CT()), cond: function () { return /^\d{15,16}$/.test((dg().cod.id || '').trim()) }, tit: tt('O ID do Pixel', 'El ID del píxel'), txt: tt('O código base leva o ID do pixel (fica no Gerenciador de Eventos). Digite o ID de treino 123456789012345.', 'El código base lleva el ID del píxel (está en el Administrador de eventos). Escribe el ID de práctica 123456789012345.'), dica: tt('Digite 123456789012345.', 'Escribe 123456789012345.') },
    { alvo: '[data-t=sel-onde]', garante: Z(CT({ id: '123456789012345' })), cond: function () { return dg().cod.onde === 'head' }, tit: tt('Onde colar', 'Dónde pegar'), txt: tt('Escolha onde o código base foi colado: no head de todas as páginas.', 'Elige dónde se pegó el código base: en el head de todas las páginas.'), dica: tt('Escolha “No head de todas as páginas”.', 'Elige “En el head de todas las páginas”.') },
    { alvo: '[data-t=box-evento]', garante: Z(CT({ id: '123456789012345', onde: 'head' })), tit: tt('O evento Purchase', 'El evento Purchase'), txt: tt('Agora o código do evento: só na página de pedido concluído, nunca no head. Clique em Próximo.', 'Ahora el código del evento: solo en la página de pedido completado, nunca en el head. Haz clic en Siguiente.') },
    { alvo: '[data-t=in-ty]', garante: Z(CT({ id: '123456789012345', onde: 'head' })), cond: function () { return /Purchase/.test(dg().cod.ty || '') && /99\.90/.test(dg().cod.ty || '') && /BRL/.test(dg().cod.ty || '') }, tit: tt('Valor e moeda', 'Valor y moneda'), txt: tt('Digite o código do Purchase com valor 99.90 (ponto decimal, só número) e moeda BRL (3 letras). Atenção às maiúsculas: Purchase.', 'Escribe el código del Purchase con valor 99.90 (punto decimal, solo número) y moneda BRL (3 letras). Atención a las mayúsculas: Purchase.'), dica: tt("Digite " + TY + ".", "Escribe " + TY + ".") },
    { alvo: '[data-t=box-resultado]', fim: true, semVolta: true, garante: Z(CT({ id: '123456789012345', onde: 'head', ty: TY })), tit: tt('Instalado 🎉', '¡Instalado! 🎉'), txt: tt('Base no head de todas as páginas e Purchase com valor e moeda só na página da compra: a Meta recebe tudo certo. Sempre teste com uma compra de verdade.' + DEPOIS.pt, 'Base en el head de todas las páginas y Purchase con valor y moneda solo en la página de la compra: Meta recibe todo bien. Prueba siempre con una compra de verdad.' + DEPOIS.es) }
  ];
  var PL = function (o) { var p = { nivel: 'padrao', pagext: true, manual: false, consent: true, pixelCerto: true }; for (var k in (o || {})) p[k] = o[k]; return { tab: 'plat', pl: p } };
  TOURS['plataforma-conectada'] = [
    { antes: Z(PL()), alvo: '[data-t=box-recebe]', garante: Z(PL()), tit: tt('Conectado, mas sem Purchase', 'Conectado, pero sin Purchase'), txt: tt('O pagamento termina fora da loja e o compartilhamento é só pelo navegador: nenhum Purchase chega. Clique em Próximo.', 'El pago termina fuera de la tienda y compartir es solo por el navegador: no llega ningún Purchase. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-nivel]', garante: Z(PL()), cond: function () { return dg().pl.nivel === 'maximo' }, tit: tt('Nível máximo', 'Nivel máximo'), txt: tt('Ative o compartilhamento de dados no nível máximo: o servidor (API de Conversões) também envia a compra.', 'Activa compartir datos en el nivel máximo: el servidor (API de Conversiones) también envía la compra.'), dica: tt('Escolha “Máximo (navegador + servidor)”.', 'Elige “Máximo (navegador + servidor)”.') },
    { alvo: '[data-t=plat-ok]', fim: true, semVolta: true, garante: Z(PL({ nivel: 'maximo' })), tit: tt('Chegou 🎉', '¡Llegó! 🎉'), txt: tt('Agora o Purchase chega pelo servidor. Não cole código manual por cima do app (isso duplica) e sempre teste com uma compra.' + DEPOIS.pt, 'Ahora el Purchase llega por el servidor. No pegues código manual encima de la app (eso duplica) y prueba siempre con una compra.' + DEPOIS.es) }
  ];
})();
