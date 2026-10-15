/* Simulador da compra no site (Shop Ads com finalização da compra fora da Meta): jornada, Pixel e catálogo, eventos duplicados, terceiros e UTM, atualizar loja antiga — visual da Lojinha.
   Estado no navegador (localStorage "sim.offsite"); nada é enviado à Meta.
   Real (Gerenciador de Comércio da conta de aula, 16/10/2026, PT e ES): a prévia da loja com “Finalização da compra em outro site” e o campo URL de finalização da compra (módulo Commerce).
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Dicas para usar o Pixel da Meta nos anúncios da sua loja” (4 dicas), “Como corrigir a duplicação do Pixel da Meta ao usar anúncios das Lojas” (diagnóstico no Gerenciador de Eventos e solução com Gerenciador de tags do Google e Shopify), “Sobre relatórios de terceiros…” (UTM padrão, eventos que terceiros não veem, ferramentas), “Como entender seus relatórios…” e “Sobre as mudanças nas Lojas e na finalização da compra…” (como atualizar uma loja antiga).
   NÃO visto: o Gerenciador de Eventos real com eventos de Compra (a conta de aula não tem Pixel com compras) e a extensão Consultor de Dados de Anúncios em uso. Os eventos, horários e números do simulador são inventados para o treino (a conferir).
   URL: meta-checkoutsite.html?zerar=1 (com problemas) · ?ok=1 (tudo certo)
   Tutoriais (tour.js): ?tour=jornada-compra-site | pixel-e-catalogo | achar-duplicacao | comparar-terceiros | atualizar-loja-antiga */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var ETAPAS = [
    { id: 1, t: 'Anúncio das Lojas', d: 'A pessoa vê o anúncio no Facebook ou no Instagram. Ele foi criado com o botão Loja ligado (módulo anterior). Evento: nenhum ainda.', ev: '' },
    { id: 2, t: 'A Meta escolhe o destino', d: 'Ao clicar, a Meta envia a pessoa ao destino com mais chance de conversão: o seu site ou a sua loja no Facebook e no Instagram, pessoa a pessoa.', ev: '' },
    { id: 3, t: 'Loja no Facebook e no Instagram', d: 'Se a pessoa for à loja, vê página inicial, coleções e páginas de produto dentro do app. Eventos que o Pixel pode registrar: Ver conteúdo (ViewContent) e Adicionar ao carrinho (AddToCart).', ev: 'ViewContent, AddToCart' },
    { id: 4, t: 'Comprar: ir ao site', d: 'Ao tocar em comprar, a pessoa é levada ao URL de finalização da compra do site. Desde setembro de 2025 a compra termina sempre no site. Evento: Iniciar finalização da compra (InitiateCheckout).', ev: 'InitiateCheckout' },
    { id: 5, t: 'Compra no site', d: 'O site processa pagamento, pedido, envio e devolução. A página de confirmação dispara o evento Compra (Purchase) do Pixel. As “compras na Meta” aparecem como 0: a compra é medida como compra no site.', ev: 'Purchase' }
  ];
  function inicial() { return { tab: 'jornada', etapa: 0, ligado: false, idOk: false, idVisto: false, testeAberto: false, evVisto: false, dupVisto: false, comparado: false, removido: false, fonte: '', utm: false, gaTags: false, mig: { url: false, envio: false, cat: false, var: false, dados: false }, migMsg: '' } }
  function tudoOk() { var s = inicial(); s.ligado = true; s.idOk = true; s.removido = true; s.utm = true; s.gaTags = true; s.mig = { url: true, envio: true, cat: true, var: true, dados: true }; return s }
  var S = ler('sim.offsite', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('ok')) S = tudoOk();
  function grava() { try { localStorage.setItem('sim.offsite', JSON.stringify(S)) } catch (e) { } window.__simOf = { S: S } }
  grava();
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento da compra no site (Shop Ads) · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function nav() {
    var t = [['jornada', '🛒 Jornada da compra'], ['pixel', '🧩 Pixel e catálogo'], ['eventos', '📋 Eventos e duplicação'], ['terceiros', '📊 Terceiros e UTM'], ['antiga', '🔧 Atualizar loja antiga']];
    return '<nav class="ss-nav">' + t.map(function (x) { return '<button class="ss-it' + (S.tab === x[0] ? ' on' : '') + '" data-tab="' + x[0] + '" data-t="tab-' + x[0] + '">' + x[1] + '</button>' }).join('') + '</nav>';
  }
  function telaJornada() {
    var e = ETAPAS.filter(function (x) { return x.id === S.etapa })[0];
    var lista = ETAPAS.map(function (x) { return '<li><button class="btn ' + (S.etapa === x.id ? '' : 'sec') + '" data-etapa="' + x.id + '" data-t="etapa-' + x.id + '">' + x.id + '. ' + x.t + '</button></li>' }).join('');
    var log = ETAPAS.filter(function (x) { return x.id <= S.etapa && x.ev }).map(function (x) { return x.ev }).join(', ');
    return '<h1>Jornada da compra no site</h1><p class="ss-sub">Do clique no anúncio das Lojas até a compra: o que acontece e o que é medido.</p><ul class="vf-req">' + lista + '</ul>' +
      (e ? '<div class="vf-caixa" data-t="det-etapa"><b>' + e.id + '. ' + e.t + '</b><p>' + e.d + '</p></div>' : '<p class="miudo">Clique em cada etapa, da 1 à 5.</p>') +
      '<div class="vf-caixa" data-t="log-eventos"><b>Eventos do Pixel até aqui:</b> ' + (log ? log : 'nenhum') + '</div>' +
      '<p class="conferido">✓ O fluxo (Meta escolhe site ou loja; compra termina no site; “compras na Meta” = 0) vem dos artigos “Sobre os anúncios das Lojas” e “Sobre as mudanças nas Lojas e na finalização da compra…” (Central de Ajuda, ' + CONF + '). Os eventos são os padrão do Pixel. ⚠ O desenho da jornada é do simulador (a conferir).</p>';
  }
  function telaPixel() {
    var i1 = '<li class="' + (S.ligado ? 'vd' : '') + '" data-t="chk-1">' + (S.ligado ? '✓ ' : '○ ') + '<b>1. Pixel conectado ao catálogo</b><div>O Pixel do site precisa estar conectado ao catálogo da loja. No Gerenciador de Comércio: sua loja › Configurações › Catálogo.' + (S.ligado ? '' : ' <button class="btn" data-acao="liga" data-t="btn-chk1">Conectar o Pixel ao catálogo</button>') + '</div></li>';
    var i2 = '<li class="' + (S.idOk ? 'vd' : (S.idVisto ? 'verm' : '')) + '" data-t="chk-2">' + (S.idOk ? '✓ ' : S.idVisto ? '✗ ' : '○ ') + '<b>2. Content ID igual no catálogo e no Pixel</b><div>Só estes eventos são aceitos: Adicionar ao carrinho, Adicionar à lista de desejos, Iniciar finalização da compra, Comprar e Ver conteúdo. O parâmetro Content ID de cada item deve ser o mesmo no catálogo e no Pixel.' + (!S.idVisto ? ' <button class="btn sec" data-acao="compara-id" data-t="btn-chk2">Comparar os IDs</button>' : '') + (S.idVisto ? '<div class="vf-caixa" data-t="tab-ids">Catálogo: <b>CANECA_01</b> · Pixel (site): <b>' + (S.idOk ? 'CANECA_01' : 'caneca-azul') + '</b>' + (S.idOk ? '' : ' <button class="btn" data-acao="fix-id" data-t="btn-fix-id">Ajustar o Content ID do site</button>') + '</div>' : '') + '</div></li>';
    var i3 = '<li class="' + (S.removido ? 'vd' : '') + '" data-t="chk-3">' + (S.removido ? '✓ ' : '○ ') + '<b>3. Sem eventos duplicados</b><div>Vários pixels, Shopify, Gerenciador de tags do Google ou Pixel + API de Conversões podem enviar o mesmo evento duas vezes. ' + (S.removido ? 'Sem duplicação.' : 'Confira na aba Eventos e duplicação.') + '</div></li>';
    var i4 = '<li class="' + (S.evVisto ? 'vd' : '') + '" data-t="chk-4">' + (S.evVisto ? '✓ ' : '○ ') + '<b>4. Testar com Eventos de teste</b><div>Confirme que as ações no site chegam como eventos à Meta.' + (!S.evVisto ? ' <button class="btn sec" data-acao="teste" data-t="btn-chk4">Abrir Eventos de teste</button>' : '') + (S.evVisto ? '<div class="vf-caixa" data-t="res-teste">Recebidos agora: ViewContent ✓ · AddToCart ✓ · InitiateCheckout ✓ · Purchase ✓ (' + (S.removido ? '1' : '2') + ' por compra)</div>' : '') + '</div></li>';
    return '<h1>Pixel e catálogo</h1><p class="ss-sub">Para medir os anúncios das Lojas, o Pixel do site precisa estar conectado ao catálogo e bem configurado.</p><ul class="vf-req" data-t="lista-pixel">' + i1 + i2 + i3 + i4 + '</ul>' +
      '<p class="conferido">✓ As 4 dicas (Pixel conectado ao catálogo, Content ID igual, duplicação, Eventos de teste) e a lista dos 5 eventos aceitos vêm do artigo “Dicas para usar o Pixel da Meta nos anúncios da sua loja” (Central de Ajuda, ' + CONF + '). ⚠ Os botões e o resultado do teste são do simulador (a conferir).</p>';
  }
  function telaEventos() {
    var n = S.removido ? 1 : 2;
    var linhas = [{ id: 1, h: '11:13', url: 'https://www.lojinha.exemplo.com.br/obrigado?pedido=1042', src: 'Canal do Facebook e Instagram (Shopify)' }, { id: 2, h: '11:13', url: 'https://www.lojinha.exemplo.com.br/obrigado?pedido=1042', src: 'Gerenciador de tags do Google (HTML personalizado)' }];
    if (S.removido) linhas = linhas.slice(0, 1);
    var tab = linhas.map(function (l) { return '<tr data-t="ev-' + l.id + '"><td>Comprar (Purchase)</td><td>' + l.h + '</td><td>' + (S.dupVisto ? esc(l.url) : esc(l.url.slice(0, 38)) + '…') + '</td>' + (S.comparado ? '<td>' + l.src + '</td>' : '<td>?</td>') + '</tr>' }).join('');
    var det = !S.evVisto2 ? '' : '';
    return '<h1>Eventos e duplicação</h1><p class="ss-sub">Gerenciador de Eventos › Fontes de dados › seu Pixel › Visão geral › Atividades › Comprar › Ver detalhes › Atividades recentes.</p>' +
      '<div class="ga-aviso" data-t="contagem">Compras registradas para o pedido 1042: <b>' + n + '</b>' + (n > 1 ? ' (o cliente comprou 1 vez: há duplicação)' : ' (ok)') + '</div>' +
      '<div class="ss-bt"><button class="btn sec" data-acao="ver-det" data-t="btn-ver-det">Ver detalhes de Comprar</button>' + (S.dupVisto && !S.removido ? ' <button class="btn sec" data-acao="compara" data-t="btn-compara">Comparar as origens</button>' : '') + '</div>' +
      (S.dupVisto ? '<table class="cm-tab" data-t="tabela-atividades"><thead><tr><th>Evento</th><th>Horário</th><th>URL</th><th>Origem</th></tr></thead><tbody>' + tab + '</tbody></table>' : '<p class="miudo">Abra os detalhes do evento Comprar para ver as atividades recentes.</p>') +
      (S.dupVisto && !S.removido && n > 1 ? '<p data-t="aviso-igual"><b>Dois eventos às 11:13 com o mesmo URL:</b> o mesmo evento está sendo registrado mais de uma vez.</p>' : '') +
      (S.comparado && !S.removido ? '<div class="vf-caixa" data-t="fontes"><b>Qual origem remover?</b><p class="miudo">Se o Pixel já é enviado pelo canal do Facebook e Instagram na Shopify, remova o evento de compra do Gerenciador de tags do Google (HTML personalizado: apague o código de evento padrão do evento duplicado e salve). Não apague a tag inteira se ela tem outros eventos.</p><label class="ga-lin"><input type="radio" name="ofFonte" value="shopify"' + (S.fonte === 'shopify' ? ' checked' : '') + ' data-t="fonte-shopify"/><span>Remover o envio do canal do Facebook e Instagram</span></label><label class="ga-lin"><input type="radio" name="ofFonte" value="gtm"' + (S.fonte === 'gtm' ? ' checked' : '') + ' data-t="fonte-gtm"/><span>Remover o evento de compra do Gerenciador de tags do Google</span></label><button class="btn" data-acao="remove" data-t="btn-remove"' + (S.fonte ? '' : ' disabled') + '>Aplicar</button></div>' : '') +
      (S.msgEv ? '<div class="ga-aviso" data-t="msg-ev">' + esc(S.msgEv) + '</div>' : '') +
      '<p class="conferido">✓ O caminho no Gerenciador de Eventos, o critério (mesmo horário e mesmo URL), o uso do Consultor de Dados de Anúncios e as soluções com Gerenciador de tags do Google e Shopify vêm do artigo “Como corrigir a duplicação do Pixel da Meta ao usar anúncios das Lojas” (Central de Ajuda, ' + CONF + '). ⚠ Os eventos são inventados e não vimos a tela real com compras (a conta de aula não tem) (a conferir).</p>';
  }
  function telaTerceiros() {
    var am = { compras: 71 }, ga = { compras: S.utm ? (S.gaTags ? 66 : 58) : 46, carrinho: S.gaTags ? '312' : 'não rastreia' };
    return '<h1>Terceiros e UTM</h1><p class="ss-sub">Gerenciador de Anúncios × Google Analytics: por que os números diferem.</p>' +
      '<table class="cm-tab" data-t="tabela-comp"><thead><tr><th>Métrica (exemplo)</th><th>Gerenciador de Anúncios</th><th>Google Analytics</th></tr></thead><tbody><tr><td>Compras</td><td>' + am.compras + '</td><td>' + ga.compras + '</td></tr><tr><td>Adicionar ao carrinho</td><td>340</td><td>' + ga.carrinho + '</td></tr></tbody></table>' +
      '<div class="vf-caixa" data-t="utm-padrao"><b>Parâmetros de UTM padrão</b> (a Meta define se você não criar): utm_medium = pago · utm_source = Facebook ou Instagram · utm_campaign = ID da campanha · utm_content = ID do anúncio · utm_term = ID do conjunto de anúncios.<br><button class="btn' + (S.utm ? ' sec' : '') + '" data-acao="utm" data-t="btn-utm">' + (S.utm ? '✓ UTM conferidos nos anúncios' : 'Conferir os UTM dos anúncios') + '</button></div>' +
      '<label class="ga-lin"><input type="checkbox" id="ofGa"' + (S.gaTags ? ' checked' : '') + ' data-t="chk-gatags"/><span>Conectar tags de marketing de terceiros ao Google Analytics (recomendado)</span></label>' +
      '<div class="ga-aviso" data-t="aviso-jornada">Mesmo assim pode haver diferenças: a ferramenta de terceiros pode não conectar a jornada de quem foi à loja no Facebook ou no Instagram e depois foi ao site. Ferramentas como Triple Whale, Northbeam e Measured podem rastrear eventos da loja se conectadas à API de Marketing. Para comparar de verdade, use teste A/B.</div>' +
      '<p class="conferido">✓ Os UTM padrão, os eventos que terceiros podem não ver (Ver conteúdo e Adicionar ao carrinho), as ferramentas e o aviso de jornada vêm do artigo “Sobre relatórios de terceiros para o desempenho dos anúncios das Lojas” (Central de Ajuda, ' + CONF + '). ⚠ Os números e o efeito dos botões são do simulador (a conferir).</p>';
  }
  function telaAntiga() {
    var itens = [['url', 'Criar e adicionar um URL de finalização da compra'], ['envio', 'Adicionar perfis de envio'], ['cat', 'Preparar o catálogo'], ['var', 'Verificar se as variantes de produto do site entram no catálogo e adicioná-las'], ['dados', 'Conectar um conjunto de dados para rastrear as interações dos clientes (opcional)']];
    var feitos = itens.filter(function (x) { return S.mig[x[0]] }).length;
    return '<h1>Atualizar uma loja antiga</h1><div class="ga-aviso">Lojas que usavam a finalização da compra no Facebook ou no Instagram foram atualizadas, ou ficaram invisíveis. Se a sua ainda não foi atualizada, a loja <b>precisa permanecer visível</b> até ser atualizada, e a Meta recomenda <b>atualizar a loja existente em vez de criar uma nova</b>.</div>' +
      '<ul class="vf-req" data-t="lista-migra">' + itens.map(function (x) { return '<li class="' + (S.mig[x[0]] ? 'vd' : '') + '"><label class="ga-lin"><input type="checkbox" data-mig="' + x[0] + '"' + (S.mig[x[0]] ? ' checked' : '') + ' data-t="mig-' + x[0] + '"/><span>' + x[1] + '</span></label></li>' }).join('') + '</ul>' +
      '<div class="ga-aviso' + (feitos >= 4 ? ' ok' : '') + '" data-t="msg-mig">' + (feitos >= 4 ? 'Tudo certo para a atualização: campanhas ativas continuam e os rascunhos antigos viram local da conversão Site, com “Usar a loja para personalizar a jornada do comprador” ligado.' : 'Faltam itens obrigatórios (os quatro primeiros). Recomendações extras: atualizar preços e disponibilidade, conferir os IDs de conteúdo do Pixel e adicionar várias imagens, tabelas de tamanhos e descrições rich text.') + '</div>' +
      '<p class="conferido">✓ A lista de ações e o destino das campanhas e rascunhos vêm do artigo “Sobre as mudanças nas Lojas e na finalização da compra no Facebook e no Instagram” (Central de Ajuda, ' + CONF + '). ⚠ O formato de checklist é do simulador (a conferir).</p>';
  }
  function pagina() {
    var corpo = S.tab === 'jornada' ? telaJornada() : S.tab === 'pixel' ? telaPixel() : S.tab === 'eventos' ? telaEventos() : S.tab === 'terceiros' ? telaTerceiros() : telaAntiga();
    return casca('<div class="ss">' + nav() + '<main class="ss-main">' + corpo + '</main></div>');
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); S.msgEv = ''; grava(); render(); return }
    if ((c = t.closest('[data-etapa]'))) { S.etapa = parseInt(c.getAttribute('data-etapa'), 10); grava(); render(); return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-acao');
    if (ac === 'liga') S.ligado = true;
    else if (ac === 'compara-id') S.idVisto = true;
    else if (ac === 'fix-id') S.idOk = true;
    else if (ac === 'teste') S.evVisto = true;
    else if (ac === 'ver-det') S.dupVisto = true;
    else if (ac === 'compara') S.comparado = true;
    else if (ac === 'remove') { if (S.fonte === 'gtm') { S.removido = true; S.msgEv = 'Pronto: o evento de compra duplicado foi removido do Gerenciador de tags do Google. Agora cada compra aparece uma vez.' } else { S.msgEv = 'Se você remover o envio do canal do Facebook e Instagram, perde o envio recomendado na Shopify. O evento duplicado vem do Gerenciador de tags do Google: remova de lá.' } }
    else if (ac === 'utm') S.utm = true;
    else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.name === 'ofFonte') S.fonte = t.value;
    else if (t.id === 'ofGa') S.gaTags = t.checked;
    else if (t.getAttribute && t.getAttribute('data-mig')) S.mig[t.getAttribute('data-mig')] = t.checked;
    else return;
    grava(); render();
  });
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) el.focus() }
    window.__simOf = { S: S };
  }
  window.SIMOF = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, ok: function () { S = tudoOk(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function of() { return window.__simOf ? window.__simOf.S : S }
  TOURS['jornada-compra-site'] = [
    { antes: function () { SIMOF.zera() }, alvo: '[data-t=etapa-1]', garante: function () { SIMOF.zera() }, tit: T('Do clique à compra', 'Del clic a la compra'), txt: T('Vamos seguir uma cliente: do anúncio das Lojas até a compra. Clique em Próximo.', 'Sigamos a una clienta: del anuncio de Tiendas a la compra. Haz clic en Siguiente.') },
    { alvo: '[data-t=etapa-2]', clique: true, garante: function () { SIMOF.zera() }, tit: T('A Meta escolhe', 'Meta elige'), txt: T('Clique na etapa 2: a Meta decide, pessoa a pessoa, se envia ao site ou à loja.', 'Haz clic en la etapa 2: Meta decide, persona a persona, si envía al sitio o a la tienda.') },
    { alvo: '[data-t=etapa-3]', clique: true, garante: function () { SIMOF.set({ etapa: 2 }) }, tit: T('Na loja', 'En la tienda'), txt: T('Clique na etapa 3: se ela for à loja, vê produtos dentro do app.', 'Haz clic en la etapa 3: si va a la tienda, ve productos dentro de la app.') },
    { alvo: '[data-t=etapa-4]', clique: true, garante: function () { SIMOF.set({ etapa: 3 }) }, tit: T('Comprar: ir ao site', 'Comprar: ir al sitio'), txt: T('Clique na etapa 4: ao tocar em comprar, ela vai ao URL de finalização da compra do site.', 'Haz clic en la etapa 4: al tocar en comprar, va a la URL de finalización de compra del sitio.') },
    { alvo: '[data-t=etapa-5]', clique: true, garante: function () { SIMOF.set({ etapa: 4 }) }, tit: T('A compra', 'La compra'), txt: T('Clique na etapa 5: a compra acontece no site.', 'Haz clic en la etapa 5: la compra ocurre en el sitio.') },
    { alvo: '[data-t=det-etapa]', garante: function () { SIMOF.set({ etapa: 5 }) }, tit: T('Compra no site', 'Compra en el sitio'), txt: T('Pagamento, pedido, envio e devolução são do site. As “compras na Meta” aparecem como 0; o evento Purchase do Pixel mede a compra. Clique em Próximo.', 'Pago, pedido, envío y devolución son del sitio. Las “compras en Meta” aparecen como 0; el evento Purchase del píxel mide la compra. Haz clic en Siguiente.') },
    { alvo: '[data-t=log-eventos]', fim: true, semVolta: true, garante: function () { SIMOF.set({ etapa: 5 }) }, tit: T('Os eventos da jornada 🎉', 'Los eventos del recorrido 🎉'), txt: T('Ao longo da jornada o Pixel registra ViewContent, AddToCart, InitiateCheckout e Purchase. Por isso o Pixel precisa estar certo. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'A lo largo del recorrido el píxel registra ViewContent, AddToCart, InitiateCheckout y Purchase. Por eso el píxel debe estar bien. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['pixel-e-catalogo'] = [
    { antes: function () { SIMOF.zera(); SIMOF.set({ tab: 'pixel' }) }, alvo: '[data-t=lista-pixel]', garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'pixel' }) }, tit: T('Quatro conferências', 'Cuatro revisiones'), txt: T('Para medir os anúncios das Lojas, o Pixel do site precisa estar conectado ao catálogo e bem configurado. São 4 conferências. Clique em Próximo.', 'Para medir los anuncios de Tiendas, el píxel del sitio debe estar vinculado al catálogo y bien configurado. Son 4 revisiones. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-chk1]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'pixel' }) }, tit: T('1. Pixel e catálogo', '1. Píxel y catálogo'), txt: T('Conecte o Pixel ao catálogo da loja.', 'Vincula el píxel al catálogo de la tienda.') },
    { alvo: '[data-t=btn-chk2]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'pixel', ligado: true }) }, tit: T('2. Content ID', '2. Content ID'), txt: T('O Content ID de cada item precisa ser o mesmo no catálogo e no Pixel. Clique em Comparar os IDs.', 'El Content ID de cada artículo debe ser el mismo en el catálogo y en el píxel. Haz clic en Comparar los IDs.') },
    { alvo: '[data-t=tab-ids]', garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'pixel', ligado: true, idVisto: true }) }, tit: T('IDs diferentes', 'IDs distintos'), txt: T('O catálogo diz CANECA_01 e o site manda “caneca-azul”. A Meta não consegue ligar os dois. Clique em Próximo.', 'El catálogo dice CANECA_01 y el sitio manda “caneca-azul”. Meta no puede vincular los dos. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-fix-id]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'pixel', ligado: true, idVisto: true }) }, tit: T('Ajustar o ID', 'Ajustar el ID'), txt: T('Ajuste o Content ID do site para CANECA_01.', 'Ajusta el Content ID del sitio a CANECA_01.') },
    { alvo: '[data-t=btn-chk4]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'pixel', ligado: true, idVisto: true, idOk: true }) }, tit: T('4. Eventos de teste', '4. Eventos de prueba'), txt: T('Agora confirme com a ferramenta Eventos de teste. Clique em Abrir Eventos de teste.', 'Ahora confirma con la herramienta Probar eventos. Haz clic en Abrir Probar eventos.') },
    { alvo: '[data-t=res-teste]', fim: true, semVolta: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'pixel', ligado: true, idVisto: true, idOk: true, evVisto: true }) }, tit: T('Eventos chegando 🎉', 'Eventos llegando 🎉'), txt: T('Os eventos chegam, mas cada compra aparece duas vezes: há duplicação (conferência 3). Esse é o próximo tutorial. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Los eventos llegan, pero cada compra aparece dos veces: hay duplicación (revisión 3). Ese es el próximo tutorial. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['achar-duplicacao'] = [
    { antes: function () { SIMOF.zera(); SIMOF.set({ tab: 'eventos' }) }, alvo: '[data-t=contagem]', garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'eventos' }) }, tit: T('Duas compras para um pedido', 'Dos compras para un pedido'), txt: T('A cliente comprou uma vez, mas o pedido 1042 aparece com 2 compras na Meta. Isso estraga a medição. Clique em Próximo.', 'La clienta compró una vez, pero el pedido 1042 aparece con 2 compras en Meta. Eso arruina la medición. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-ver-det]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'eventos' }) }, tit: T('Ver detalhes de Comprar', 'Ver detalles de Compra'), txt: T('No Gerenciador de Eventos: Fontes de dados, seu Pixel, Visão geral, Comprar, Ver detalhes. Clique em Ver detalhes.', 'En el Administrador de eventos: Fuentes de datos, tu píxel, Descripción general, Compra, Ver detalles. Haz clic en Ver detalles.') },
    { alvo: '[data-t=aviso-igual]', garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'eventos', dupVisto: true }) }, tit: T('Mesmo horário, mesmo URL', 'Mismo horario, misma URL'), txt: T('Dois eventos às 11:13 com o mesmo URL indicam que o mesmo evento foi registrado mais de uma vez. Clique em Próximo.', 'Dos eventos a las 11:13 con la misma URL indican que el mismo evento se registró más de una vez. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-compara]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'eventos', dupVisto: true }) }, tit: T('Achar a origem', 'Encontrar el origen'), txt: T('Agora descubra de onde vem cada evento. Clique em Comparar as origens.', 'Ahora descubre de dónde viene cada evento. Haz clic en Comparar los orígenes.') },
    { alvo: '[data-t=fonte-gtm]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'eventos', dupVisto: true, comparado: true }) }, tit: T('Qual remover?', '¿Cuál quitar?'), txt: T('Um evento vem do canal do Facebook e Instagram na Shopify (o recomendado) e o outro do Gerenciador de tags do Google. Remova o do Gerenciador de tags do Google.', 'Un evento viene del canal de Facebook e Instagram en Shopify (el recomendado) y el otro del Administrador de etiquetas de Google. Quita el del Administrador de etiquetas de Google.') },
    { alvo: '[data-t=btn-remove]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'eventos', dupVisto: true, comparado: true, fonte: 'gtm' }) }, tit: T('Aplicar', 'Aplicar'), txt: T('Clique em Aplicar.', 'Haz clic en Aplicar.') },
    { alvo: '[data-t=contagem]', fim: true, semVolta: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'eventos', dupVisto: true, comparado: true, fonte: 'gtm', removido: true }) }, tit: T('Uma compra, um evento 🎉', 'Una compra, un evento 🎉'), txt: T('Agora cada compra aparece uma vez. Ordem: achar a duplicação, descobrir a origem, remover só o evento repetido e testar de novo. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora cada compra aparece una vez. Orden: encontrar la duplicación, descubrir el origen, quitar solo el evento repetido y probar de nuevo. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['comparar-terceiros'] = [
    { antes: function () { SIMOF.zera(); SIMOF.set({ tab: 'terceiros' }) }, alvo: '[data-t=tabela-comp]', garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'terceiros' }) }, tit: T('71 contra 46', '71 contra 46'), txt: T('O Gerenciador de Anúncios mostra 71 compras e o Google Analytics, 46. A cliente acha que um está errado. Clique em Próximo.', 'El Administrador de anuncios muestra 71 compras y Google Analytics, 46. La clienta cree que uno está mal. Haz clic en Siguiente.') },
    { alvo: '[data-t=utm-padrao]', garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'terceiros' }) }, tit: T('UTM padrão', 'UTM predeterminados'), txt: T('Os parâmetros de UTM ajudam a identificar e filtrar a atividade no Google Analytics. Se você não criar, a Meta define os padrão. Clique em Próximo.', 'Los parámetros UTM ayudan a identificar y filtrar la actividad en Google Analytics. Si no los creas, Meta define los predeterminados. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-utm]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'terceiros' }) }, tit: T('Conferir os UTM', 'Revisar los UTM'), txt: T('Clique para conferir os UTM dos anúncios.', 'Haz clic para revisar los UTM de los anuncios.') },
    { alvo: '[data-t=chk-gatags]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'terceiros', utm: true }) }, tit: T('Tags de marketing de terceiros', 'Etiquetas de marketing de terceros'), txt: T('Ligue a opção de conectar tags de marketing de terceiros ao Google Analytics: assim ele passa a ver também eventos como Adicionar ao carrinho.', 'Activa la opción de conectar etiquetas de marketing de terceros a Google Analytics: así también pasa a ver eventos como Agregar al carrito.') },
    { alvo: '[data-t=aviso-jornada]', fim: true, semVolta: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'terceiros', utm: true, gaTags: true }) }, tit: T('A diferença diminuiu 🎉', 'La diferencia disminuyó 🎉'), txt: T('Agora o Google Analytics mostra mais compras, mas ainda pode diferir: ele pode não ligar a jornada de quem passou pela loja e foi ao site. Para comparar de verdade, use teste A/B. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora Google Analytics muestra más compras, pero aún puede diferir: puede no unir el recorrido de quien pasó por la tienda y fue al sitio. Para comparar de verdad, usa una prueba A/B. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['atualizar-loja-antiga'] = [
    { antes: function () { SIMOF.zera(); SIMOF.set({ tab: 'antiga' }) }, alvo: '[data-t=lista-migra]', garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'antiga' }) }, tit: T('Uma loja do tempo antigo', 'Una tienda del tiempo antiguo'), txt: T('Esta loja usava a finalização da compra no Facebook e no Instagram. Para a atualização, a loja precisa permanecer visível, e é melhor atualizar a existente do que criar outra. Clique em Próximo.', 'Esta tienda usaba la finalización de compra en Facebook e Instagram. Para la actualización, la tienda debe permanecer visible, y es mejor actualizar la existente que crear otra. Haz clic en Siguiente.') },
    { alvo: '[data-t=mig-url]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'antiga' }) }, tit: T('URL de finalização', 'URL de finalización'), txt: T('Marque: criar e adicionar um URL de finalização da compra.', 'Marca: crear y agregar una URL de finalización de compra.') },
    { alvo: '[data-t=mig-envio]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'antiga', mig: { url: true, envio: false, cat: false, var: false, dados: false } }) }, tit: T('Perfis de envio', 'Perfiles de envío'), txt: T('Marque: adicionar perfis de envio.', 'Marca: agregar perfiles de envío.') },
    { alvo: '[data-t=mig-cat]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'antiga', mig: { url: true, envio: true, cat: false, var: false, dados: false } }) }, tit: T('Catálogo', 'Catálogo'), txt: T('Marque: preparar o catálogo.', 'Marca: preparar el catálogo.') },
    { alvo: '[data-t=mig-var]', clique: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'antiga', mig: { url: true, envio: true, cat: true, var: false, dados: false } }) }, tit: T('Variantes', 'Variantes'), txt: T('Marque: conferir as variantes de produto do site e adicioná-las ao catálogo.', 'Marca: revisar las variantes de producto del sitio y agregarlas al catálogo.') },
    { alvo: '[data-t=msg-mig]', fim: true, semVolta: true, garante: function () { SIMOF.zera(); SIMOF.set({ tab: 'antiga', mig: { url: true, envio: true, cat: true, var: true, dados: false } }) }, tit: T('Pronto para atualizar 🎉', 'Listo para actualizar 🎉'), txt: T('Com os quatro itens obrigatórios feitos, a atualização pode seguir: campanhas ativas continuam e os rascunhos antigos passam ao local da conversão Site. O conjunto de dados é opcional. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Con los cuatro ítems obligatorios hechos, la actualización puede seguir: las campañas activas continúan y los borradores antiguos pasan al lugar de conversión Sitio web. El conjunto de datos es opcional. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
