/* Tutorial "configurar-microdados" (Microdados, aula 05): o desenvolvedor da Marina colou o exemplo oficial da Meta (Microdata tags, OpenGraph)
   no <head> da página da Ecobag e trocou só parte dos valores. O aluno corrige no Editor de arquivos do site e confere no Microdata Debugger.
   Carregado no Editor de arquivos (arquivos-site.html) e no simulador do Microdata Debugger (meta-microdados.html), depois de md-pagina.js. */
(function () {
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function texto() { var e = window.AE && AE.estado(), r = e && e.rascunho && e.rascunho.ecobag; return r != null ? r : (window.MDPAG ? MDPAG.get() : '') }
  function og(k) { return window.MDPAG ? (MDPAG.le(texto()).og[k] || '') : '' }
  function certo() {   // o <head> já corrigido (para quem pula passos ou volta)
    return MDPAG.PADRAO.replace('content="facebook_tshirt_001"', 'content="ECOBAG_03"').replace('content="39,90"', 'content="39.90"').replace('content="R$"', 'content="BRL"')
      .replace('content="em estoque"', 'content="in stock"').replace(/\n<meta property="product:item_group_id"[^\n]*/, '');
  }
  var OK = {
    id: function () { return og('product:retailer_item_id') === 'ECOBAG_03' },
    preco: function () { return og('product:price:amount') === '39.90' },
    moeda: function () { return og('product:price:currency') === 'BRL' },
    estoque: function () { return og('product:availability').toLowerCase() === 'in stock' },
    grupo: function () { return !/product:item_group_id/.test(texto()) }
  };
  function tudo() { return OK.id() && OK.preco() && OK.moeda() && OK.estoque() && OK.grupo() }
  // arruma o editor até o passo n (as correções anteriores já feitas), sem cliques
  function ate(n) {
    return function () {
      if (!window.AE || !window.MDPAG) return;
      var t = MDPAG.PADRAO, fx = [['content="facebook_tshirt_001"', 'content="ECOBAG_03"'], ['content="39,90"', 'content="39.90"'], ['content="R$"', 'content="BRL"'], ['content="em estoque"', 'content="in stock"']];
      fx.slice(0, Math.min(n, 4)).forEach(function (f) { t = t.replace(f[0], f[1]) });
      if (n >= 5) t = t.replace(/\n<meta property="product:item_group_id"[^\n]*/, '');
      var e = AE.estado(); if (e.atual !== 'ecobag' || e.rascunho.ecobag == null) { e.rascunho.ecobag = t; AE.abre('ecobag') }
    };
  }
  function noDebugger() { if (window.MDPAG && MDPAG.valida().problemas.length) MDPAG.set(certo()) }
  var ED = '[data-t=ed-texto]', URLP = (window.MDPAG ? MDPAG.SITE_URL + MDPAG.URL : '');
  TOURS['configurar-microdados'] = [
    { alvo: '[data-t=caminho]', garante: function () { if (window.MDPAG) MDPAG.zera(); if (window.AE) { delete AE.estado().rascunho.ecobag; AE.abre('ecobag') } },
      tit: T('A página da Ecobag', 'La página de la Ecobag'), txt: T('A Ecobag Folha ainda não entra no catálogo pelo site. O desenvolvedor da Marina colou no <head> da página o exemplo oficial da Meta (“Microdata tags”, formato OpenGraph) e trocou só parte dos valores. Você vai fazer o que ele faria: corrigir. Clique em Próximo.', 'La Ecobag Folha todavía no entra al catálogo por el sitio. El desarrollador de Marina pegó en el <head> de la página el ejemplo oficial de Meta (“Microdata tags”, formato OpenGraph) y cambió solo parte de los valores. Vas a hacer lo que haría él: corregir. Haz clic en Siguiente.') },
    { alvo: ED, garante: ate(0), tit: T('Como ler uma tag', 'Cómo leer una etiqueta'), txt: T('Cada linha é uma tag: property é o nome do campo (og:title, product:price:amount…) e content é o valor. Só o content muda de um produto para outro. Clique em Próximo.', 'Cada línea es una etiqueta: property es el nombre del campo (og:title, product:price:amount…) y content es el valor. Solo el content cambia de un producto a otro. Haz clic en Siguiente.') },
    { alvo: ED, garante: ate(0), cond: OK.id, tit: T('1 · o id', '1 · el id'), txt: T('Na linha product:retailer_item_id ficou facebook_tshirt_001, que é do exemplo. O id tem que ser o mesmo do catálogo: troque o content para ECOBAG_03 e clique em Próximo.', 'En la línea product:retailer_item_id quedó facebook_tshirt_001, que es del ejemplo. El id debe ser el mismo del catálogo: cambia el content a ECOBAG_03 y haz clic en Siguiente.'), dica: T('Troque o valor do id para “ECOBAG_03”.', 'Cambia el valor del id a “ECOBAG_03”.') },
    { alvo: ED, garante: ate(1), cond: OK.preco, tit: T('2 · o preço', '2 · el precio'), txt: T('Em product:price:amount o valor está 39,90. O preço é só o número, com ponto nos centavos: troque para 39.90 e clique em Próximo.', 'En product:price:amount el valor está 39,90. El precio es solo el número, con punto en los centavos: cámbialo a 39.90 y haz clic en Siguiente.'), dica: T('Troque o preço para “39.90”.', 'Cambia el precio a “39.90”.') },
    { alvo: ED, garante: ate(2), cond: OK.moeda, tit: T('3 · a moeda', '3 · la moneda'), txt: T('Em product:price:currency está R$. A moeda é o código de 3 letras: troque para BRL e clique em Próximo.', 'En product:price:currency está R$. La moneda es el código de 3 letras: cámbiala a BRL y haz clic en Siguiente.'), dica: T('Troque a moeda para “BRL”.', 'Cambia la moneda a “BRL”.') },
    { alvo: ED, garante: ate(3), cond: OK.estoque, tit: T('4 · a disponibilidade', '4 · la disponibilidad'), txt: T('Em product:availability está “em estoque”. O valor é sempre em inglês: troque para in stock e clique em Próximo.', 'En product:availability dice “em estoque”. El valor siempre va en inglés: cámbialo a in stock y haz clic en Siguiente.'), dica: T('Troque a disponibilidade para “in stock”.', 'Cambia la disponibilidad a “in stock”.') },
    { alvo: ED, garante: ate(4), cond: OK.grupo, tit: T('5 · a linha que sobrou', '5 · la línea que sobró'), txt: T('A última linha, product:item_group_id, ainda diz fb_tshirts (do exemplo). Ela serve para juntar variações do mesmo produto, como tamanhos e cores. A Ecobag não tem variações: apague a linha inteira e clique em Próximo.', 'La última línea, product:item_group_id, todavía dice fb_tshirts (del ejemplo). Sirve para juntar variaciones del mismo producto, como tallas y colores. La Ecobag no tiene variaciones: borra la línea entera y haz clic en Siguiente.'), dica: T('Apague a linha do product:item_group_id.', 'Borra la línea de product:item_group_id.') },
    { alvo: '[data-t=btn-salvar]', clique: true, livre: '#aeTexto, [data-f]', valida: tudo, erro: T('Ainda há algo para corrigir: confira o id, o preço, a moeda, a disponibilidade e a linha do exemplo. 🙂', 'Todavía hay algo por corregir: revisa el id, el precio, la moneda, la disponibilidad y la línea del ejemplo. 🙂'), garante: ate(5),
      tit: T('Salvar', 'Guardar'), txt: T('Tudo corrigido. Clique em Salvar alterações: é o que publica a página com as tags novas.', 'Todo corregido. Haz clic en Guardar cambios: es lo que publica la página con las etiquetas nuevas.') },
    { alvo: '[data-t=sel-exemplo]', pagina: 'meta-microdados.html?zerar=1', garante: function () { noDebugger(); if (window.SIMMD) SIMMD.zera() }, cond: function () { return /produto-ecobag_03/.test((window.SIMMD && SIMMD.estado().url) || '') },
      tit: T('Conferir no Microdata Debugger', 'Revisar en el Microdata Debugger'), txt: T('Agora, a prova: na ferramenta de depuração de microdados, escolha a página produto-ecobag_03.html (ou digite ' + URLP + ').', 'Ahora, la prueba: en la herramienta de depuración de microdatos, elige la página produto-ecobag_03.html (o escribe ' + URLP + ').'), dica: T('Escolha “produto-ecobag_03.html”.', 'Elige “produto-ecobag_03.html”.') },
    { alvo: '[data-t=btn-verificar]', clique: true, garante: function () { noDebugger(); if (window.SIMMD) SIMMD.set({ url: URLP, res: null }) }, tit: T('Verificar', 'Comprobar'), txt: T('Clique em Verificar microdados.', 'Haz clic en Comprobar microdatos.') },
    { alvo: '[data-t=tab-og]', garante: function () { noDebugger(); if (window.SIMMD) { SIMMD.set({ url: URLP }); SIMMD.verifica() } }, tit: T('Os seus valores', 'Tus valores'), txt: T('A tabela OpenGraph mostra exatamente o que você escreveu: id ECOBAG_03, price 39.90 BRL, availability in stock. É isso que a Meta lê para montar o produto no catálogo. Clique em Próximo.', 'La tabla OpenGraph muestra exactamente lo que escribiste: id ECOBAG_03, price 39.90 BRL, availability in stock. Es lo que Meta lee para armar el producto en el catálogo. Haz clic en Siguiente.') },
    { alvo: '[data-t=parabens]', fim: true, semVolta: true, garante: function () { noDebugger(); if (window.SIMMD) { SIMMD.set({ url: URLP }); SIMMD.verifica() } }, tit: T('Tags configuradas! 🎉', '¡Etiquetas configuradas! 🎉'), txt: T('“Parabéns! Seus microdados parecem ótimos!”. Na vida real, quem edita o site é o desenvolvedor ou a plataforma da loja; você sabe agora o que pedir e como conferir. Quer brincar? Volte ao editor, estrague um valor e veja a dica que aparece aqui. Clique em Concluir.', '“¡Felicitaciones! ¡Tus microdatos se ven muy bien!”. En la vida real, quien edita el sitio es el desarrollador o la plataforma de la tienda; ahora sabes qué pedir y cómo revisarlo. ¿Quieres jugar? Vuelve al editor, estropea un valor y mira la pista que aparece aquí. Haz clic en Terminar.') }
  ];
})();
