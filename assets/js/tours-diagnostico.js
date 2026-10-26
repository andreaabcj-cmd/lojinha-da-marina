/* TUTORIAIS DO DIAGNÓSTICO DE CASOS — práticas que seguem o caminho de verdade, entre telas de verdade (ou recriadas fielmente):
   Loja (o "site do cliente") › Consultor de Dados › Gerenciador de Eventos (Eventos de teste, Diagnóstico, Instalar código) › Código-fonte da página ›
   Editor de arquivos do site / Admin da Shopify (tema e app Facebook e Instagram).
   O estado do caso mora em site-estado.js (SITE): é ele que decide quais eventos a Loja envia. Cada tutorial começa escolhendo um caso (SITE.preset).
   Carregado em todas as páginas por onde os tutoriais passam: Loja, Gerenciador de Eventos, Código-fonte, Editor de arquivos, Admin da Shopify.
   Real (Central de Ajuda da Meta/Shopify, 16/10/2026): Eventos de teste e Diagnóstico; pesquisar fbq no código; código base no head; evento só na página da ação;
   value com ponto e currency de 3 letras; Shopify: Facebook e Instagram › Configurações › Compartilhamento de dados; remover código manual do tema para não duplicar. */
(function () {
  var TOURS = window.TOURS = window.TOURS || {};
  function t(pt, es) { return { pt: pt, es: es } }
  var P = { loja: 'loja.html', obrigado: 'obrigado.html', eventos: 'meta-eventos.html', fonte: 'codigo-fonte.html', editor: 'arquivos-site.html', admin: 'admin-shopify.html' };
  function aqui() { return location.pathname.split('/').pop() }
  function preset(n) { return function () { SITE.preset(n) } }
  function idDs() { return SITE.idCerto() }
  function hash(h) { return function () { if (aqui() === P.eventos) location.hash = h } }
  var irDs = function (aba) { return function () { if (aqui() === P.eventos) location.hash = 'ds/' + idDs() + '/' + aba } };   // (adiado: SITE só existe depois)
  function dep(txt) { return t(txt.pt + ' Clique em Próximo.', txt.es + ' Haz clic en Siguiente.') }

  /* ---------- pedaços que se repetem ---------- */
  function compra() {   // os 6 primeiros passos de uma compra completa na Loja (de aula 04 do Pixel): produto → carrinho → pagar → finalizar
    var c = TOURS['compra-completa'], r = [], i;
    if (c) for (i = 0; i < 6; i++) { var o = {}, k; for (k in c[i]) o[k] = c[i][k]; r.push(o) }   // sem 'pagina': a compra passa por várias páginas da loja (produto, carrinho, pagamento)
    else for (i = 0; i < 6; i++) r.push({ alvo: 'body', tit: '', txt: '' });
    return r;
  }
  function obrigadoLer(txt) { return [{ alvo: '#obrigadoBox', semVolta: true, tit: t('Pedido feito 🛒', 'Pedido hecho 🛒'), txt: txt }] }
  function consultor(txtLista) {   // abre o Consultor de Dados (a extensão) e lê a lista de eventos da página
    return [
      { alvo: '#maExt', clique: true, pagina: P.obrigado, pula: function () { return document.documentElement.classList.contains('da-aberto') }, garante: function () { window.DA && DA.fechar() }, tit: t('Consultor de Dados', 'Asesor de datos'), txt: t('Abra o Consultor de Dados, na faixa amarela: é a extensão que o agente pede para o cliente instalar.', 'Abre el Asesor de datos, en la franja amarilla: es la extensión que el agente le pide al cliente que instale.') },
      { alvo: '.da-card-pixel', clique: true, pagina: P.obrigado, pula: function () { return !!document.querySelector('.da-card-id') }, garante: function () { window.DA && DA.abrir('inicio') }, tit: t('O Pixel da página', 'El píxel de la página'), txt: t('Clique no cartão do Pixel.', 'Haz clic en la tarjeta del píxel.') },
      { alvo: '.da-lista', pagina: P.obrigado, garante: function () { window.DA && DA.abrir('pixel') }, tit: t('O que o Pixel contou', 'Lo que contó el píxel'), txt: txtLista }
    ];
  }
  function consultorVazio(txt) {   // com o Pixel bloqueado a extensão não vê nada: ela mostra "nenhum Pixel"
    return [
      { alvo: '#maExt', clique: true, pagina: P.obrigado, pula: function () { return document.documentElement.classList.contains('da-aberto') }, garante: function () { window.DA && DA.fechar() }, tit: t('Consultor de Dados', 'Asesor de datos'), txt: t('Abra o Consultor de Dados, na faixa amarela.', 'Abre el Asesor de datos, en la franja amarilla.') },
      { alvo: '#daCorpo', pagina: P.obrigado, garante: function () { window.DA && DA.abrir('inicio') }, tit: t('A extensão não vê nada', 'La extensión no ve nada'), txt: txt }
    ];
  }
  function eventosTeste(txtFeed, limpar) {   // Gerenciador de Eventos › Conjuntos de dados › o Pixel › Eventos de teste
    var r = [
      { alvo: '[data-t=menu-conjuntos]', clique: true, pagina: P.eventos, garante: hash('visao'), tit: t('Gerenciador de Eventos', 'Administrador de eventos'), txt: t('Agora veja o que chegou à Meta. No Gerenciador de Eventos, clique em Conjuntos de dados.', 'Ahora mira lo que llegó a Meta. En el Administrador de eventos, haz clic en Conjuntos de datos.') },
      { alvo: '[data-t=ds-abrir]', clique: true, pagina: P.eventos, garante: hash('conjuntos'), tit: t('O Pixel do cliente', 'El píxel del cliente'), txt: t('Abra o Pixel da Mari.', 'Abre el píxel de la Mari.') },
      { alvo: '[data-t=aba-teste]', clique: true, pagina: P.eventos, garante: irDs('visao'), tit: t('Eventos de teste', 'Probar eventos'), txt: t('Abra a aba Eventos de teste.', 'Abre la pestaña Probar eventos.') }
    ];
    if (limpar) r.push({ alvo: '[data-acao=limpar]', clique: true, pagina: P.eventos, garante: irDs('teste'), tit: t('Comece limpo', 'Empieza limpio'), txt: t('Limpe a atividade para ver só o que vem a seguir.', 'Limpia la actividad para ver solo lo que viene a continuación.') });
    r.push({ alvo: '[data-t=feed]', pagina: P.eventos, garante: irDs('teste'), tit: t('O que chegou', 'Lo que llegó'), txt: txtFeed });
    return r;
  }
  function eventosDiag(txt, alvo) {
    return [
      { alvo: '[data-t=aba-diag]', clique: true, pagina: P.eventos, garante: irDs('teste'), tit: t('Diagnóstico', 'Diagnóstico'), txt: t('Agora a aba Diagnóstico: a Meta aponta erros e avisos.', 'Ahora la pestaña Diagnóstico: Meta señala errores y avisos.') },
      { alvo: alvo || '[data-t=diag-0]', pagina: P.eventos, garante: irDs('diag'), tit: t('O que o Diagnóstico diz', 'Lo que dice el Diagnóstico'), txt: txt }
    ];
  }
  function fonteBuscar(txtBusca, txtCod, pag) {   // abre o código-fonte (como Ctrl+U) e procura "fbq"
    return [
      { alvo: '[data-t=cf-busca]', pagina: P.fonte, garante: function () { if (aqui() === P.fonte && window.CF && pag) CF.pagina(pag) }, cond: function () { return /fbq/i.test((window.__simCf && __simCf.busca) || '') }, tit: t('Código-fonte da página', 'Código fuente de la página'), txt: txtBusca, dica: t('Digite fbq.', 'Escribe fbq.') },
      { alvo: '[data-t=cf-codigo]', pagina: P.fonte, tit: t('O que o código mostra', 'Lo que muestra el código'), txt: txtCod }
    ];
  }
  function limparEventos() {
    return [{ alvo: '[data-acao=limpar]', clique: true, pagina: P.eventos, garante: irDs('teste'), tit: t('Comece limpo', 'Empieza limpio'), txt: t('Antes de testar de novo, limpe a atividade.', 'Antes de probar de nuevo, limpia la actividad.') }];
  }
  function abrirLojaHome(txt) { return [{ alvo: '#destaques, #lista', pagina: P.loja, tit: t('Abra a loja de novo', 'Abre la tienda de nuevo'), txt: txt }] }
  var FIM = t(' Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', ' Haz clic en Terminar. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta.');
  function final(tit, txt, alvo, pagina) { return { alvo: alvo, pagina: pagina, fim: true, semVolta: true, tit: tit, txt: t(txt.pt + FIM.pt, txt.es + FIM.es) } }

  /* ============ 1) Purchase não chega (site próprio) — Aula 01 ============ */
  TOURS['investigar-purchase'] = [].concat(
    [{ antes: preset('compra-ausente'), alvo: '#destaques, #lista', pagina: P.loja, garante: preset('compra-ausente'), tit: t('Marina: “não vejo nenhuma compra”', 'Marina: “no veo ninguna compra”'), txt: dep(t('A Marina vende todos os dias, mas o Gerenciador não mostra compras. Para investigar, faça o que uma cliente dela faz: uma compra de teste na loja.', 'Marina vende todos los días, pero el Administrador no muestra compras. Para investigar, haz lo que hace una clienta suya: una compra de prueba en la tienda.')) }],
    compra(),
    obrigadoLer(dep(t('Para a cliente, deu tudo certo. Mas e para a Meta? Vamos ver o que o Pixel contou.', 'Para la clienta, todo salió bien. ¿Y para Meta? Veamos qué contó el píxel.'))),
    consultor(dep(t('Aparece o PageView (a página abriu), mas nenhum Purchase.', 'Aparece el PageView (la página se abrió), pero ningún Purchase.'))),
    eventosTeste(dep(t('PageView, ViewContent, AddToCart, InitiateCheckout e AddPaymentInfo chegaram. O Purchase não. O pixel está vivo: o problema é só na compra.', 'PageView, ViewContent, AddToCart, InitiateCheckout y AddPaymentInfo llegaron. El Purchase no. El píxel está vivo: el problema es solo en la compra.'))),
    eventosDiag(dep(t('Sem avisos: quando um evento nem chega, o Diagnóstico não tem o que apontar nele.', 'Sin avisos: cuando un evento ni siquiera llega, el Diagnóstico no tiene qué señalar en él.')), '[data-t=diag-ok]'),
    fonteBuscar(t('Agora o código da página de pedido concluído. Procure por fbq (como o Ctrl+F no código-fonte).', 'Ahora el código de la página de pedido completado. Busca fbq (como el Ctrl+F en el código fuente).'), dep(t('O código base está lá (fbq init e PageView), mas não existe nenhum fbq(\'track\', \'Purchase\') na página. É isso: o código do Purchase nunca foi colocado.', 'El código base está ahí (fbq init y PageView), pero no existe ningún fbq(\'track\', \'Purchase\') en la página. Eso es: el código del Purchase nunca se colocó.')), 'obrigado'),
    [final(t('Diagnóstico fechado 🎉', '¡Diagnóstico cerrado! 🎉'), t('Causa: falta o código do evento Purchase na página de pedido concluído. Ao cliente: “o seu desenvolvedor precisa adicionar o código do Purchase, com valor e moeda, só nessa página; depois fazemos uma compra de teste”. Você aprende a colocar esse código na próxima aula.', 'Causa: falta el código del evento Purchase en la página de pedido completado. Al cliente: “tu desarrollador debe agregar el código del Purchase, con valor y moneda, solo en esa página; después hacemos una compra de prueba”. Aprenderás a colocar ese código en la próxima clase.'), '[data-t=cf-codigo]', P.fonte)]
  );

  /* ============ 2a) Colar o código base (site novo sem Pixel) — Aula 02 ============ */
  function ctxt(f) { return function () { var e = document.getElementById('aeTexto'); return !!e && f(e.value || '') } }
  var EDIT_BASE = [
    { antes: preset('novo-site'), alvo: '[data-t=menu-conjuntos]', clique: true, pagina: P.eventos, garante: hash('visao'), tit: t('Site novo, sem Pixel', 'Sitio nuevo, sin píxel'), txt: t('O site do cliente acabou de ser criado e não tem o Pixel. Primeiro pegue o código no Gerenciador de Eventos: clique em Conjuntos de dados.', 'El sitio del cliente acaba de crearse y no tiene el píxel. Primero toma el código en el Administrador de eventos: haz clic en Conjuntos de datos.') },
    { alvo: '[data-t=ds-abrir]', clique: true, pagina: P.eventos, garante: hash('conjuntos'), tit: t('O Pixel', 'El píxel'), txt: t('Abra o Pixel da Mari.', 'Abre el píxel de la Mari.') },
    { alvo: '[data-t=ver-codigo]', clique: true, pagina: P.eventos, garante: irDs('visao'), tit: t('Instalar o código', 'Instalar el código'), txt: t('Clique em Configurar o Pixel para ver o código manual.', 'Haz clic en Configurar el píxel para ver el código manual.') },
    { alvo: '[data-t=btn-copiar-base]', clique: true, pagina: P.eventos, garante: function () { if (aqui() === P.eventos) { irDs('visao')(); setTimeout(function () { var b = document.querySelector('[data-t=ver-codigo]'); if (b && !document.querySelector('[data-t=cod-base]')) b.click() }, 200) } }, tit: t('Copie o código base', 'Copia el código base'), txt: t('Este é o código base do Pixel (já com o ID do cliente). Clique em Copiar código base.', 'Este es el código base del píxel (ya con el ID del cliente). Haz clic en Copiar código base.') },
    { alvo: '[data-t=ed-texto]', pagina: P.editor, garante: function () { if (aqui() === P.editor && window.AE) AE.abre('cabecalho') }, cond: ctxt(function (v) { return /fbq\(\s*'init'/.test(v) && /fbevents\.js/.test(v) }), tit: t('Cole no head', 'Pega en el head'), txt: t('Este é o arquivo cabecalho.html, que entra no head de TODAS as páginas. Clique no editor e cole o código com Ctrl+V.', 'Este es el archivo cabecalho.html, que entra en el head de TODAS las páginas. Haz clic en el editor y pega el código con Ctrl+V.') },
    { alvo: '[data-t=btn-salvar]', clique: true, pagina: P.editor, tit: t('Salve', 'Guarda'), txt: t('Clique em Salvar alterações. Só vale depois de salvar.', 'Haz clic en Guardar cambios. Solo vale después de guardar.') }
  ];
  TOURS['colar-codigo-base'] = [].concat(EDIT_BASE,
    abrirLojaHome(dep(t('Agora teste: abra a loja do cliente, como uma cliente faria.', 'Ahora prueba: abre la tienda del cliente, como lo haría una clienta.'))),
    eventosTeste(dep(t('O PageView chegou! O código base está funcionando em todas as páginas.', '¡El PageView llegó! El código base está funcionando en todas las páginas.')), false),
    [final(t('Pixel instalado 🎉', '¡Píxel instalado! 🎉'), t('Código base no head de todas as páginas, salvo e testado: o PageView chega. O próximo passo é colocar o código do Purchase só na página de pedido concluído.', 'Código base en el head de todas las páginas, guardado y probado: el PageView llega. El siguiente paso es poner el código del Purchase solo en la página de pedido completado.'), '[data-t=feed]', P.eventos)]
  );
  /* ============ 2b) Colar o código do Purchase (base já instalada) ============ */
  TOURS['colar-codigo-compra'] = [].concat(
    [{ antes: preset('compra-ausente'), alvo: '[data-t=menu-conjuntos]', clique: true, pagina: P.eventos, garante: hash('visao'), tit: t('Falta o Purchase', 'Falta el Purchase'), txt: t('O site já tem o código base, mas não o do Purchase. Pegue o código do evento no Gerenciador de Eventos: clique em Conjuntos de dados.', 'El sitio ya tiene el código base, pero no el del Purchase. Toma el código del evento en el Administrador de eventos: haz clic en Conjuntos de datos.') },
      { alvo: '[data-t=ds-abrir]', clique: true, pagina: P.eventos, garante: hash('conjuntos'), tit: t('O Pixel', 'El píxel'), txt: t('Abra o Pixel da Mari.', 'Abre el píxel de la Mari.') },
      { alvo: '[data-t=ver-codigo]', clique: true, pagina: P.eventos, garante: irDs('visao'), tit: t('Código dos eventos', 'Código de los eventos'), txt: t('Clique em Configurar o Pixel: lá está também o código de um evento.', 'Haz clic en Configurar el píxel: allí también está el código de un evento.') },
      { alvo: '[data-t=btn-copiar-purchase]', clique: true, pagina: P.eventos, garante: function () { if (aqui() === P.eventos) { irDs('visao')(); setTimeout(function () { var b = document.querySelector('[data-t=ver-codigo]'); if (b && !document.querySelector('[data-t=cod-purchase]')) b.click() }, 200) } }, tit: t('Copie o código do Purchase', 'Copia el código del Purchase'), txt: t('Repare: o valor e a moeda padrão são 0.00 e USD. Você vai trocar. Clique em Copiar código do Purchase.', 'Fíjate: el valor y la moneda por defecto son 0.00 y USD. Los vas a cambiar. Haz clic en Copiar código del Purchase.') },
      { alvo: '[data-t=arq-obrigado]', clique: true, pagina: P.editor, tit: t('O arquivo certo', 'El archivo correcto'), txt: t('O Purchase vai só na página de pedido concluído: abra o arquivo obrigado-fim.html.', 'El Purchase va solo en la página de pedido completado: abre el archivo obrigado-fim.html.') },
      { alvo: '[data-t=ed-texto]', pagina: P.editor, garante: function () { if (aqui() === P.editor && window.AE) AE.abre('obrigado') }, cond: ctxt(function (v) { return /fbq\(\s*'track'\s*,\s*'Purchase'/.test(v) }), tit: t('Cole o código', 'Pega el código'), txt: t('Cole o código com Ctrl+V.', 'Pega el código con Ctrl+V.') },
      { alvo: '[data-t=ed-texto]', pagina: P.editor, cond: ctxt(function (v) { return /currency\s*:\s*['"]BRL['"]/.test(v) && !/USD/.test(v) && !/value\s*:\s*0\.00/.test(v) }), tit: t('Valor e moeda reais', 'Valor y moneda reales'), txt: t('Troque 0.00 por {{ pedido.total }} (o total do pedido, que o site preenche) e USD por \'BRL\' (3 letras, entre aspas). Em um site real o valor também pode ser um número com ponto decimal.', 'Cambia 0.00 por {{ pedido.total }} (el total del pedido, que el sitio completa) y USD por \'BRL\' (3 letras, entre comillas). En un sitio real el valor también puede ser un número con punto decimal.') },
      { alvo: '[data-t=btn-salvar]', clique: true, pagina: P.editor, tit: t('Salve', 'Guarda'), txt: t('Clique em Salvar alterações.', 'Haz clic en Guardar cambios.') }],
    limparEventosPrimeiro(),
    compra(),
    obrigadoLer(dep(t('Compra de teste feita. Agora, o Purchase deve chegar.', 'Compra de prueba hecha. Ahora el Purchase debe llegar.'))),
    eventosTeste(dep(t('O Purchase chegou, com valor e moeda. Em Diagnóstico não há problema ativo.', 'El Purchase llegó, con valor y moneda. En Diagnóstico no hay problema activo.')), false),
    [final(t('Purchase funcionando 🎉', '¡Purchase funcionando! 🎉'), t('Código base no head, código do Purchase só na página de pedido concluído, com valor e moeda reais, e testado com uma compra. É o que você pede ao desenvolvedor do cliente.', 'Código base en el head, código del Purchase solo en la página de pedido completado, con valor y moneda reales, y probado con una compra. Es lo que le pides al desarrollador del cliente.'), '[data-t=feed]', P.eventos)]
  );
  function limparEventosPrimeiro() { return [{ alvo: '#destaques, #lista', pagina: P.loja, garante: function () { }, tit: t('Agora teste', 'Ahora prueba'), txt: t('Hora de testar com uma compra de verdade (de mentira 😄). Clique em Próximo e escolha um produto.', 'Hora de probar con una compra de verdad (de mentira 😄). Haz clic en Siguiente y elige un producto.') }] }

  /* ============ 3a) Compras em dobro (Shopify: app + código manual) — Aula 03 ============ */
  TOURS['corrigir-duplicado'] = [].concat(
    [{ antes: preset('duplicado-shopify'), alvo: '#destaques, #lista', pagina: P.loja, garante: preset('duplicado-shopify'), tit: t('Marina: “o dobro de vendas”', 'Marina: “el doble de ventas”'), txt: dep(t('A loja da Marina é Shopify, com o app Facebook e Instagram conectado, e ela vê o dobro de vendas. Faça uma compra de teste para investigar.', 'La tienda de Marina es Shopify, con la app Facebook e Instagram conectada, y ella ve el doble de ventas. Haz una compra de prueba para investigar.')) }],
    compra(),
    obrigadoLer(dep(t('Pedido feito. Veja o que chegou à Meta.', 'Pedido hecho. Mira lo que llegó a Meta.'))),
    eventosTeste(dep(t('Há dois PageView por página e o Purchase aparece em páginas que não são a de compra. Algo está enviando em dobro.', 'Hay dos PageView por página y el Purchase aparece en páginas que no son la de compra. Algo está enviando doble.'))),
    eventosDiag(dep(t('Aviso real da Meta: “Vários eventos em uma ação”. Há também um aviso de possível código duplicado. O Purchase não deve estar no cabeçalho.', 'Aviso real de Meta: “Varios eventos en una acción”. También hay un aviso de posible código duplicado. El Purchase no debe estar en el encabezado.')), '[data-t=diag-0]'),
    fonteBuscar(t('Agora o código do tema. Procure por fbq.', 'Ahora el código del tema. Busca fbq.'), dep(t('Achamos: o tema tem um código do Pixel colado à mão, com o Purchase no cabeçalho. Mas o cliente também conectou o app Facebook e Instagram, que tem o próprio pixel (e não aparece no código-fonte). São dois pixels.', 'Lo encontramos: el tema tiene un código del píxel pegado a mano, con el Purchase en el encabezado. Pero el cliente también conectó la app Facebook e Instagram, que tiene su propio píxel (y no aparece en el código fuente). Son dos píxeles.')), 'obrigado'),
    [{ alvo: '[data-t=nav-fb]', clique: true, pagina: P.admin, garante: function () { if (aqui() === P.admin && window.SHADM) SHADM.ir('inicio') }, tit: t('A plataforma do cliente', 'La plataforma del cliente'), txt: t('No admin da Shopify, abra Facebook e Instagram para ver o que o app está enviando.', 'En el admin de Shopify, abre Facebook e Instagram para ver lo que está enviando la app.') },
      { alvo: '[data-t=fb-resumo]', pagina: P.admin, garante: function () { if (window.SHADM) SHADM.ir('fb') }, tit: t('O app já envia', 'La app ya envía'), txt: dep(t('O app Facebook e Instagram está com o pixel conectado: ele já envia PageView e Purchase. O código manual no tema duplica.', 'La app Facebook e Instagram tiene el píxel conectado: ya envía PageView y Purchase. El código manual en el tema duplica.')) },
      { alvo: '[data-t=nav-loja]', clique: true, pagina: P.admin, tit: t('Remover o código manual', 'Quitar el código manual'), txt: t('A Shopify orienta: se havia código do Pixel no tema, remova-o depois de configurar pelo app. Clique em Loja virtual (é a página dos temas).', 'Shopify indica: si había código del píxel en el tema, quítalo después de configurar por la app. Haz clic en Tienda online (es la página de los temas).') },
      { alvo: '[data-t=btn-menu-tema]', clique: true, pagina: P.admin, garante: function () { if (window.SHADM) SHADM.ir('loja') }, tit: t('Ações do tema', 'Acciones del tema'), txt: t('No tema atual (Horizon), ao lado de Editar tema, clique em ⋯.', 'En el tema actual (Horizon), al lado de Editar tema, haz clic en ⋯.') },
      { alvo: '[data-t=acao-editar-codigo]', clique: true, pagina: P.admin, tit: t('Editar código', 'Editar código'), txt: t('Clique em Editar código.', 'Haz clic en Editar código.') },
      { alvo: '[data-t=ed-tema]', pagina: P.admin, garante: function () { if (window.SHADM) SHADM.ir('codigo') }, cond: function () { var e = document.getElementById('shTema'); return !!e && !/fbq|fbevents/.test(e.value) && /content_for_header/.test(e.value) }, tit: t('Apague o código do Pixel', 'Borra el código del píxel'), txt: t('Abriu o editor de código (na loja real, numa aba nova, em inglês): layout › theme.liquid. Apague o código do Pixel entre {{ content_for_header }} e &lt;/head&gt; (o bloco “Meta Pixel Code” e o &lt;script&gt; do Purchase). Mantenha o resto do arquivo.', 'Se abrió el editor de código (en la tienda real, en una pestaña nueva, en inglés): layout › theme.liquid. Borra el código del píxel entre {{ content_for_header }} y &lt;/head&gt; (el bloque “Meta Pixel Code” y el &lt;script&gt; del Purchase). Mantén el resto del archivo.') },
      { alvo: '[data-t=btn-salvar-tema]', clique: true, pagina: P.admin, tit: t('Salve', 'Guarda'), txt: t('Clique em Save, no canto de cima.', 'Haz clic en Save, en la esquina de arriba.') }],
    limparViaEventos(),
    abrirLojaHome(dep(t('Teste de novo: abra a loja.', 'Prueba de nuevo: abre la tienda.'))),
    eventosTeste(dep(t('Agora só chega um PageView por página, vindo do app, e nenhum Purchase fora da página de compra.', 'Ahora solo llega un PageView por página, de la app, y ningún Purchase fuera de la página de compra.')), false),
    [final(t('Resolvido 🎉', '¡Resuelto! 🎉'), t('Causa: pixel duplicado (código manual no tema + app). Solução, passo a passo para o cliente: Loja virtual › ⋯ do tema › Editar código › layout › theme.liquid › apagar o código do Pixel › Save; manter só o app. (Confira também Configurações › Eventos de clientes: um pixel personalizado da Meta duplica do mesmo jeito.) Depois, uma compra de teste.', 'Causa: píxel duplicado (código manual en el tema + app). Solución, paso a paso para el cliente: Tienda online › ⋯ del tema › Editar código › layout › theme.liquid › borrar el código del píxel › Save; mantener solo la app. (Revisa también Configuración › Eventos de clientes: un píxel personalizado de Meta duplica igual.) Después, una compra de prueba.'), '[data-t=feed]', P.eventos)]
  );
  function limparViaEventos() {
    return [
      { alvo: '[data-t=menu-conjuntos]', clique: true, pagina: P.eventos, garante: hash('visao'), tit: t('Comece limpo', 'Empieza limpio'), txt: t('Volte ao Gerenciador de Eventos e limpe a atividade antes de testar. Clique em Conjuntos de dados.', 'Vuelve al Administrador de eventos y limpia la actividad antes de probar. Haz clic en Conjuntos de datos.') },
      { alvo: '[data-t=ds-abrir]', clique: true, pagina: P.eventos, garante: hash('conjuntos'), tit: t('O Pixel', 'El píxel'), txt: t('Abra o Pixel da Mari.', 'Abre el píxel de la Mari.') },
      { alvo: '[data-t=aba-teste]', clique: true, pagina: P.eventos, garante: irDs('visao'), tit: t('Eventos de teste', 'Probar eventos'), txt: t('Abra Eventos de teste.', 'Abre Probar eventos.') },
      { alvo: '[data-acao=limpar]', clique: true, pagina: P.eventos, garante: irDs('teste'), tit: t('Limpar atividade', 'Limpiar actividad'), txt: t('Clique em Limpar atividade.', 'Haz clic en Limpiar actividad.') }
    ];
  }

  /* ============ 3b) Valor errado (site próprio) ============ */
  TOURS['corrigir-valor'] = [].concat(
    [{ antes: preset('valor-errado'), alvo: '#destaques, #lista', pagina: P.loja, garante: preset('valor-errado'), tit: t('Marina: “o valor está estranho”', 'Marina: “el valor está raro”'), txt: dep(t('A Marina vê as compras, mas com valor estranho. Faça uma compra de teste.', 'Marina ve las compras, pero con valor raro. Haz una compra de prueba.')) }],
    compra(),
    obrigadoLer(dep(t('Pedido feito. Veja o que chegou à Meta.', 'Pedido hecho. Mira lo que llegó a Meta.'))),
    eventosDiag(dep(t('Avisos reais da Meta: “Preço ausente ou inválido no parâmetro de valor” e “O parâmetro de moeda tem um código de 3 letras ausente e/ou inválido”.', 'Avisos reales de Meta: “Precio ausente o inválido en el parámetro de valor” y “El parámetro de moneda tiene un código de 3 letras ausente y/o inválido”.')), '[data-t=diag-0]'),
    fonteBuscar(t('Veja o código da página de pedido concluído. Procure por fbq.', 'Mira el código de la página de pedido completado. Busca fbq.'), dep(t('Achamos: fbq(\'track\', \'Purchase\', {value: \'R$ 99,90\', currency: \'reais\'}). O value tem símbolo e vírgula, e a moeda não é um código de 3 letras.', 'Lo encontramos: fbq(\'track\', \'Purchase\', {value: \'R$ 99,90\', currency: \'reais\'}). El value tiene símbolo y coma, y la moneda no es un código de 3 letras.')), 'obrigado'),
    [{ alvo: '[data-t=arq-obrigado]', clique: true, pagina: P.editor, tit: t('Corrigir (como o desenvolvedor)', 'Corregir (como el desarrollador)'), txt: t('Para o cliente entender o ajuste, abra o arquivo obrigado-fim.html.', 'Para que el cliente entienda el ajuste, abre el archivo obrigado-fim.html.') },
      { alvo: '[data-t=ed-texto]', pagina: P.editor, garante: function () { if (aqui() === P.editor && window.AE) AE.abre('obrigado') }, cond: ctxt(function (v) { return /value\s*:\s*(\{\{ pedido\.total \}\}|\d+(\.\d+)?)\s*[,}]/.test(v) && /currency\s*:\s*['"]BRL['"]/.test(v) }), tit: t('Valor e moeda no formato certo', 'Valor y moneda en el formato correcto'), txt: t('Troque o value por um número com ponto decimal (ou {{ pedido.total }}, o total do pedido) e a moeda por \'BRL\'.', 'Cambia el value por un número con punto decimal (o {{ pedido.total }}, el total del pedido) y la moneda por \'BRL\'.') },
      { alvo: '[data-t=btn-salvar]', clique: true, pagina: P.editor, tit: t('Salve', 'Guarda'), txt: t('Clique em Salvar alterações.', 'Haz clic en Guardar cambios.') }],
    limparViaEventos(),
    limparEventosPrimeiro(),
    compra(),
    obrigadoLer(dep(t('Compra de teste feita.', 'Compra de prueba hecha.'))),
    eventosDiag(dep(t('Sem avisos: o Diagnóstico agora está limpo.', 'Sin avisos: el Diagnóstico ahora está limpio.')), '[data-t=diag-ok]'),
    [final(t('Valor certo 🎉', '¡Valor correcto! 🎉'), t('O value agora é um número com ponto decimal e o currency tem 3 letras. O aviso sumiu. Ao cliente: peça ao desenvolvedor esse formato e confirme com uma compra de teste.', 'El value ahora es un número con punto decimal y el currency tiene 3 letras. El aviso desapareció. Al cliente: pide al desarrollador ese formato y confirma con una compra de prueba.'), '[data-t=diag-ok]', P.eventos)]
  );

  /* ============ 4) Plataforma conectada e a compra some para quem usa bloqueador — Aula 04 ============ */
  TOURS['plataforma-conectada'] = [].concat(
    [{ antes: preset('bloqueador'), alvo: '#destaques, #lista', pagina: P.loja, garante: preset('bloqueador'), tit: t('Marina: “já está conectado, e as compras somem”', 'Marina: “ya está conectado, y las compras desaparecen”'), txt: dep(t('A loja da Marina é Shopify, com o app Facebook e Instagram conectado. Ela nota compras que faltam nos relatórios, principalmente de quem usa bloqueador de anúncios. Faça uma compra de teste como essa pessoa (o bloqueador já está ligado nesta simulação).', 'La tienda de Marina es Shopify, con la app Facebook e Instagram conectada. Ella nota compras que faltan en los informes, sobre todo de quien usa bloqueador de anuncios. Haz una compra de prueba como esa persona (el bloqueador ya está activado en esta simulación).')) }],
    compra(),
    obrigadoLer(dep(t('Pedido feito. Veja o que o Pixel conseguiu mandar.', 'Pedido hecho. Mira lo que el píxel logró enviar.'))),
    consultorVazio(dep(t('Nada aparece: o bloqueador impediu o Pixel de carregar, então a extensão não vê nenhum evento. Para o cliente, o site “parece” sem Pixel para essa pessoa.', 'No aparece nada: el bloqueador impidió que el píxel cargara, así que la extensión no ve ningún evento. Para el cliente, el sitio “parece” sin píxel para esa persona.'))),
    eventosTeste(dep(t('No Gerenciador de Eventos, nada chegou. Compras de quem usa bloqueador ficam invisíveis.', 'En el Administrador de eventos, no llegó nada. Las compras de quien usa bloqueador quedan invisibles.'))),
    [{ alvo: '[data-t=nav-fb]', clique: true, pagina: P.admin, garante: function () { if (aqui() === P.admin && window.SHADM) SHADM.ir('inicio') }, tit: t('A plataforma do cliente', 'La plataforma del cliente'), txt: t('No admin da Shopify, abra Facebook e Instagram.', 'En el admin de Shopify, abre Facebook e Instagram.') },
      { alvo: '[data-t=fb-resumo]', pagina: P.admin, garante: function () { if (window.SHADM) SHADM.ir('fb') }, tit: t('Preferência Conservador', 'Preferencia Conservador'), txt: dep(t('A preferência de compartilhamento está em Conservador: só o Pixel da Meta, um cookie no navegador, que um bloqueador de anúncios pode impedir.', 'La preferencia para compartir está en Conservador: solo el píxel de Meta, una cookie en el navegador, que un bloqueador de anuncios puede impedir.')) },
      { alvo: '[data-t=btn-fb-config]', clique: true, pagina: P.admin, tit: t('Configurações', 'Configuración'), txt: t('Clique em ⚙ Configurações para ver o compartilhamento de dados.', 'Haz clic en ⚙ Configuración para ver compartir datos.') },
      { alvo: '[data-t=btn-alterar-pref]', clique: true, pagina: P.admin, garante: function () { if (aqui() !== P.admin || !window.SHADM) return; if (!window.__simSh2 || __simSh2.rota !== 'fb-dados') SHADM.ir('fb-dados'); if (window.__simSh2 && __simSh2.pref) SHADM.pref(false) }, tit: t('Alterar a preferência', 'Cambiar la preferencia'), txt: t('Em Compartilhamento de dados aparece Conservador. Clique em Alterar.', 'En Compartir datos aparece Conservador. Haz clic en Cambiar.') },
      { alvo: '[data-t=r-nivel-enhanced]', clique: true, pagina: P.admin, garante: function () { if (aqui() !== P.admin || !window.SHADM) return; if (!window.__simSh2 || __simSh2.rota !== 'fb-dados') SHADM.ir('fb-dados'); if (!__simSh2.pref) SHADM.pref(true) }, tit: t('Preferência Aprimorado', 'Preferencia Mejorado'), txt: t('Escolha Aprimorado: além do Pixel, usa a correspondência avançada e a API de Conversões, que envia a compra de servidor para servidor, sem passar pelo bloqueador do navegador. (Aprimorado e Máximo compartilham dados pessoais do cliente: o cliente precisa concordar e ter a política de privacidade em dia, como diz o aviso laranja.)', 'Elige Mejorado: además del píxel, usa la coincidencia avanzada y la API de Conversiones, que envía la compra de servidor a servidor, sin pasar por el bloqueador del navegador. (Mejorado y Máximo comparten datos personales del cliente: el cliente debe estar de acuerdo y tener su política de privacidad al día, como dice el aviso naranja.)') },
      { alvo: '[data-t=btn-salvar-pref]', clique: true, pagina: P.admin, garante: function () { if (aqui() !== P.admin || !window.SHADM) return; if (!window.__simSh2 || __simSh2.rota !== 'fb-dados') SHADM.ir('fb-dados'); var x = SHADM.draft(); if (!x || x.nivel !== 'enhanced') SHADM.setup({ on: true, nivel: 'enhanced', pixel: 'certo' }); if (!__simSh2.pref) SHADM.pref(true) }, tit: t('Salvar', 'Guardar'), txt: t('Clique em Salvar.', 'Haz clic en Guardar.') },
      { alvo: '[data-t=btn-confirmar]', clique: true, pagina: P.admin, garante: function () { if (aqui() !== P.admin || !window.SHADM) return; if (!window.__simSh2 || __simSh2.rota !== 'fb-dados') SHADM.ir('fb-dados'); var x = SHADM.draft(); if (!x || x.nivel !== 'enhanced') SHADM.setup({ on: true, nivel: 'enhanced', pixel: 'certo' }); if (__simSh2.pref) SHADM.pref(false) }, tit: t('Confirmar', 'Confirmar'), txt: t('O Pixel da Mari continua conectado. Clique em Confirmar.', 'El píxel de la Mari sigue conectado. Haz clic en Confirmar.') }],
    limparViaEventos(),
    limparEventosPrimeiro(),
    compra(),
    obrigadoLer(dep(t('Mesma compra, com o bloqueador ainda ligado.', 'La misma compra, con el bloqueador aún activado.'))),
    eventosTeste(dep(t('Agora o Purchase chegou, com a origem “Servidor”. O navegador continua bloqueado, mas o servidor envia a compra.', 'Ahora el Purchase llegó, con origen “Servidor”. El navegador sigue bloqueado, pero el servidor envía la compra.')), false),
    [final(t('Compra recuperada 🎉', '¡Compra recuperada! 🎉'), t('Com a preferência Aprimorado, a compra chega pelo servidor mesmo com bloqueador. Ao cliente: explique o que muda (compartilha mais dados do cliente), peça que ele ajuste a política de privacidade e confirme com uma compra de teste.', 'Con la preferencia Mejorado, la compra llega por el servidor incluso con bloqueador. Al cliente: explica qué cambia (comparte más datos del cliente), pídele que ajuste la política de privacidad y confirma con una compra de prueba.'), '[data-t=feed]', P.eventos)]
  );

  /* ============ 5) Eventos caíram depois da troca de tema (site próprio) — Aula 05 ============ */
  TOURS['caso-queda'] = [].concat(
    [{ antes: preset('queda-tema'), alvo: '#destaques, #lista', pagina: P.loja, garante: preset('queda-tema'), tit: t('Marina: “depois da troca de tema, caiu tudo”', 'Marina: “después del cambio de tema, cayó todo”'), txt: dep(t('Depois de trocar o tema do site, o Gerenciador mandou um alerta de queda de eventos. Abra a loja como uma cliente.', 'Después de cambiar el tema del sitio, el Administrador mandó una alerta de caída de eventos. Abre la tienda como una clienta.')) }],
    eventosTeste(dep(t('“Aguardando eventos…”: nem o PageView chega. Quando nenhum evento chega, desconfie do código base.', '“Esperando eventos…”: ni siquiera llega el PageView. Cuando no llega ningún evento, desconfía del código base.'))),
    fonteBuscar(t('Procure por fbq no código-fonte da loja.', 'Busca fbq en el código fuente de la tienda.'), dep(t('Nenhum resultado: o tema novo não tem o código do Pixel. Foi removido na troca.', 'Ningún resultado: el tema nuevo no tiene el código del píxel. Se eliminó en el cambio.')), 'home'),
    EDIT_BASE.map(function (s, i) { var o = {}, k; for (k in s) o[k] = s[k]; delete o.antes; return o }),
    abrirLojaHome(dep(t('Teste: abra a loja.', 'Prueba: abre la tienda.'))),
    eventosTeste(dep(t('O PageView voltou a chegar.', 'El PageView volvió a llegar.')), false),
    [final(t('Eventos de volta 🎉', '¡Eventos de vuelta! 🎉'), t('Causa: o código base do Pixel foi removido do cabeçalho na troca de tema. Solução: reinstalar no head de todas as páginas e testar. Prevenção: combine com o desenvolvedor de conferir o Pixel depois de cada mudança no cabeçalho do site.', 'Causa: el código base del píxel se eliminó del encabezado en el cambio de tema. Solución: reinstalarlo en el head de todas las páginas y probar. Prevención: acuerda con el desarrollador revisar el píxel después de cada cambio en el encabezado del sitio.'), '[data-t=feed]', P.eventos)]
  );
  /* “Salve” no editor só vale com o arquivo certo e o texto certo: se a página recarregou antes de salvar, o texto colado se perde
     (teste teimoso de 19/10). O passo Salvar herda a conferência do passo de edição anterior e deixa colar de novo ali mesmo. */
  function reforcaSalvar() {
    Object.keys(TOURS).forEach(function (k) {
      if (/^trilho-/.test(k)) return; var L = TOURS[k]; if (!Array.isArray(L)) return;
      L.forEach(function (s, i) {
        var a = L[i - 1]; if (!s || s.valida || s.alvo !== '[data-t=btn-salvar]' || !s.clique || !a || a.alvo !== '[data-t=ed-texto]' || !a.cond) return;
        var g = null; for (var j = i - 1; j >= 0 && L[j].alvo === '[data-t=ed-texto]'; j--) if (L[j].garante) { g = L[j].garante; break }
        s.valida = function () { try { return !!a.cond() } catch (e) { return false } };
        s.livre = '#aeTexto, [data-f]';
        s.erro = t('O arquivo ainda não está como pedido. Confira o arquivo aberto e o texto (se a página recarregou, cole de novo) e depois salve.', 'El archivo todavía no está como se pidió. Revisa el archivo abierto y el texto (si la página se recargó, pega de nuevo) y después guarda.');
        if (g && !s.garante) s.garante = g;
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', reforcaSalvar); else setTimeout(reforcaSalvar, 0);
  window.TOURS_H = { t: t, P: P, aqui: aqui, preset: preset, hash: hash, irDs: irDs, dep: dep, compra: compra, obrigadoLer: obrigadoLer, consultor: consultor, consultorVazio: consultorVazio, eventosTeste: eventosTeste, eventosDiag: eventosDiag, fonteBuscar: fonteBuscar, limparViaEventos: limparViaEventos, limparEventosPrimeiro: limparEventosPrimeiro, abrirLojaHome: abrirLojaHome, final: final, ctxt: ctxt, FIM: FIM };   // usado por tours-pixelav.js
})();
