/* Simulador de integração com plataformas de terceiros: conectar (WooCommerce, Wix, Google Tag Manager, outras), erros do Pixel no Diagnóstico, Pixel como fonte do catálogo, manter e desconectar — visual da Lojinha.
   Estado no navegador (localStorage "sim.terceiros"); nada é enviado à Meta.
   Real (Gerenciador de Eventos da conta de aula, 16/10/2026, PT e ES): Integrações › Galeria de parceiros (inclui “Gerenciador de tags do Google: Configurar automaticamente / Status da automação”), “Conjuntos de dados” vazio (“Os dados precisam ser conectados antes de você poder ver os conjuntos de dados”) e as opções recomendadas Google Tag Manager, Shopify, WooCommerce.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Como conectar sua conta do WooCommerce à Meta”, “Como solucionar mensagens de erro e aviso do Pixel da Meta no Gerenciador de Eventos da Meta” (12 mensagens), “Sobre as Integrações de Parceiros para eventos do site”. Pesquisa (Central de Ajuda em inglês/espanhol, não lida na íntegra): Pixel como fonte do catálogo (requisitos) e Wix Premium.
   NÃO visto: a aba Diagnóstico real (a conta de aula não tem conjunto de dados), as telas do plugin no WordPress, a integração do Wix e do Gerenciador de tags do Google funcionando.
   INVENTADOS para o treino: a ordem das telas, os cenários, os botões de correção e os números.
   URL: meta-terceiros.html?zerar=1
   Tutoriais (tour.js): ?tour=conectar-woocommerce | ler-diagnostico | pixel-fonte-catalogo | manter-desconectar */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var PRE = [['wp', 'Um site do WordPress com a função de administrador'], ['woo', 'O plugin do WooCommerce instalado no painel do WordPress'], ['ctrl', 'Controle total do portfólio empresarial (ou permissão para gerenciar os ativos: Página, Instagram, catálogo, conta de anúncios, Pixel)'], ['dois', 'Autenticação de dois fatores habilitada para o portfólio empresarial']];
  var PASSOS = ['Instalar o plugin: Plugins › Adicionar novo plugin › pesquisar “Meta para WooCommerce” › Instalar agora › Ativar', 'No painel do WordPress: Marketing › Facebook › Começar', 'Entrar no Facebook com a conta que quer conectar', 'Criar ou escolher os ativos: portfólio, Página, Instagram, catálogo, conta de anúncios e Pixel', 'Informar e-mail de contato, política de devolução e política de privacidade', 'Autorizar a conexão entre o WooCommerce e a Meta'];
  var ERROS = [
    { id: 'moeda', tipo: 'Erro', t: 'O parâmetro de moeda tem um código de 3 letras ausente e/ou inválido', d: 'O código de moeda não foi inserido ou está mal formatado. Ele deve seguir os códigos ISO de 3 letras, como USD ou BRL. O código de evento padrão vem com valor zero e moeda USD: atualize para o valor e a moeda do evento.' },
    { id: 'valor', tipo: 'Aviso', t: 'Preço ausente ou inválido no parâmetro de valor', d: 'O campo de valor está vazio, ausente ou mal formatado. Ele deve ser um número decimal maior ou igual a zero, sem letras, caracteres especiais, símbolos de moeda ou vírgulas.' },
    { id: 'moedavalor', tipo: 'Aviso', t: 'Incompatibilidade nos parâmetros de moeda e/ou valor', d: 'Moeda e valor são diferentes no Pixel e na API de Conversões. Se os eventos forem desduplicados, o evento mantido pode não refletir o valor real e o ROAS fica inexato.' },
    { id: 'altobaixo', tipo: 'Aviso', t: 'O preço no parâmetro de valor está mais alto/mais baixo que o normal', d: 'O valor parece excepcionalmente alto ou baixo. Confira se o campo de valor é preciso, para evitar resultados inesperados de ROAS.' },
    { id: 'nome', tipo: 'Aviso', t: 'Incompatibilidade de nome de evento', d: 'Um evento é parecido, mas não idêntico, a um evento padrão. Os nomes diferenciam maiúsculas de minúsculas: “Compra”, não “compra”. Use Ver URLs afetados para achar as páginas e corrija o código do evento.' },
    { id: 'varios', tipo: 'Erro', t: 'Vários eventos em uma ação', d: 'O Pixel envia mais de um evento para uma única ação do visitante. Coloque cada código de evento só nas páginas ou ações em que ele acontece e deixe no cabeçalho apenas o código base do Pixel (que contém Visualização da Página).' },
    { id: 'redund', tipo: 'Erro', t: 'Eventos de compra redundantes', d: 'O Pixel recebeu quatro ou mais eventos de compra para uma única compra. Isso superestima os relatórios e pode prejudicar a veiculação. Deixe o código de compra só na página de agradecimento ou confirmação (ou numa ação como “Comprar agora”) e nunca no cabeçalho do modelo.' },
    { id: 'email', tipo: 'Erro', t: 'Email fornecido inválido', d: 'O Pixel recebeu um e-mail de cliente inválido, o que afeta a correspondência avançada. Abra o código-fonte e confira se a correspondência avançada recebe as informações certas.' },
    { id: 'dup', tipo: 'Erro', t: 'Eventos duplicados detectados', d: 'Um evento é registrado pelo código do site e também como evento automático. Desative os eventos automáticos: você continua recebendo o evento que está no código.' },
    { id: 'dominio', tipo: 'Notificação', t: 'Novo domínio enviando dados', d: 'O Pixel começou a enviar eventos de um domínio novo. Crie uma lista de permissão ou de bloqueio de domínios para controlar quem pode enviar eventos pelo Pixel.' },
    { id: 'bloq', tipo: 'Notificação', t: 'Parâmetros de eventos bloqueados', d: 'Um ou mais parâmetros foram bloqueados por conter informações que podem violar os Termos das Ferramentas Comerciais da Meta. Analise os dados compartilhados, corrija e, no Gerenciador de Eventos, peça o desbloqueio ou mantenha bloqueados.' },
    { id: 'restr', tipo: 'Notificação', t: 'Seus dados estão restritos', d: 'Os parâmetros enviaram repetidamente dados que podem violar os Termos das Ferramentas Comerciais da Meta, e a ferramenta ficou em configuração básica (restringe parâmetros personalizados e partes de URLs após o domínio). Analise e garanta a conformidade.' }
  ];
  var PX = [['portf', 'O catálogo e o Pixel pertencem ao mesmo portfólio empresarial (ou foram compartilhados com ele)', 'Compartilhe o Pixel ou o catálogo com o outro portfólio, adicionando-o como parceiro'], ['perm', 'Você tem permissão de gerenciamento no catálogo e no Pixel', 'Peça a quem tem controle total para conceder a permissão'], ['vc', 'O evento ViewContent está no código de cada página de produto', 'Adicione ViewContent às páginas de produto'], ['micro', 'As páginas de produto têm tags de microdados', 'Adicione microdados às páginas de produto (módulo Microdata Debugger)'], ['sete', 'O Pixel disparou nos últimos sete dias (alguém viu um item no site)', 'Abra uma página de produto no site para gerar um ViewContent e espere']];
  function inicial() { return { tab: 'conectar', plat: '', pre: { wp: false, woo: false, ctrl: false, dois: false }, passos: [false, false, false, false, false, false], wixPrem: false, erro: '', corrigidos: {}, px: { portf: true, perm: true, vc: true, micro: false, sete: false }, pxAdd: false, versao: 'antiga', auto: false, desc: false, canc: false } }
  var S = ler('sim.terceiros', null) || inicial();
  if (params.get('zerar')) S = inicial();
  function grava() { try { localStorage.setItem('sim.terceiros', JSON.stringify(S)) } catch (e) { } window.__simTc = { S: S } }
  grava();
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento das integrações de terceiros · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function nav() {
    var t = [['conectar', '🔌 Conectar a plataforma'], ['erros', '🩺 Erros do Pixel (Diagnóstico)'], ['catalogo', '🗂️ Pixel como fonte do catálogo'], ['manter', '🔧 Manter e desconectar']];
    return '<nav class="ss-nav">' + t.map(function (x) { return '<button class="ss-it' + (S.tab === x[0] ? ' on' : '') + '" data-tab="' + x[0] + '" data-t="tab-' + x[0] + '">' + x[1] + '</button>' }).join('') + '</nav>';
  }
  function telaConectar() {
    var pl = [['woo', 'WooCommerce'], ['wix', 'Wix'], ['gtm', 'Google Tag Manager'], ['outra', 'Outra plataforma']];
    var botoes = '<div class="mb-grade">' + pl.map(function (p) { return '<button class="btn ' + (S.plat === p[0] ? '' : 'sec') + '" data-plat="' + p[0] + '" data-t="plat-' + p[0] + '">' + p[1] + '</button>' }).join('') + '</div>';
    var corpo = '<p class="miudo">Escolha a plataforma do cliente.</p>';
    if (S.plat === 'woo') {
      var pre = PRE.map(function (x) { return '<label class="ga-lin"><input type="checkbox" data-pre="' + x[0] + '"' + (S.pre[x[0]] ? ' checked' : '') + ' data-t="pre-' + x[0] + '"/><span>' + x[1] + '</span></label>' }).join('');
      var preOk = PRE.every(function (x) { return S.pre[x[0]] });
      var pas = PASSOS.map(function (x, i) { return '<label class="ga-lin"><input type="checkbox" data-passo="' + i + '"' + (S.passos[i] ? ' checked' : '') + (preOk ? '' : ' disabled') + ' data-t="passo-' + i + '"/><span>' + (i + 1) + '. ' + x + '</span></label>' }).join('');
      var fim = S.passos.every(function (x) { return x });
      corpo = '<div class="vf-caixa" data-t="box-pre"><b>Antes de começar</b>' + pre + '</div>' + (preOk ? '' : '<div class="ga-aviso verm" data-t="aviso-pre">Faltam pré-requisitos: sem eles a conexão não funciona. Marque cada um que o cliente já tem.</div>') +
        '<div class="vf-caixa" data-t="passos-woo"><b>Passo a passo (plugin Meta para WooCommerce)</b>' + pas + '</div>' +
        (fim ? '<div class="ga-aviso ok" data-t="res-woo"><b>✓ WooCommerce conectado.</b> Os produtos passam a sincronizar com o Gerenciador de Comércio, e o Pixel e a API de Conversões começam a enviar eventos. Pode ser pedido confirmar informações adicionais da loja; senão, o processo publica a loja sozinho em 10 a 30 minutos. Volte depois para conferir se terminou sem erros.</div>' : '');
    } else if (S.plat === 'wix') {
      corpo = '<div class="vf-caixa" data-t="card-wix"><b>Wix</b><p>A integração nativa é compatível com o Wix Premium: não precisa editar código. No Gerenciador de Eventos, abra a página do Wix, selecione o Pixel e informe o ID dele na sua conta (em Marketing Integrations, dentro de Marketing Tools).</p><label class="ga-lin"><input type="checkbox" id="tcWix"' + (S.wixPrem ? ' checked' : '') + ' data-t="chk-wix"/><span>O cliente tem Wix Premium</span></label>' + (S.wixPrem ? '<div class="ga-aviso ok">Pode usar a integração nativa.</div>' : '<div class="ga-aviso verm">Sem Wix Premium a integração nativa não está disponível; veja as outras opções (API de Conversões manual ou outro parceiro).</div>') + '<p class="miudo">Fonte: página de ajuda do Wix (antiga): confirme os nomes dos menus no painel atual (a conferir).</p></div>';
    } else if (S.plat === 'gtm') {
      corpo = '<div class="vf-caixa" data-t="card-gtm"><b>Google Tag Manager</b><p>Na Galeria de parceiros, o Gerenciador de tags do Google aparece com as opções <b>Configurar automaticamente</b> e <b>Status da automação</b> (vistas de verdade). Se o site também usa o app do Facebook na Shopify, cuidado: o Pixel não pode disparar eventos duas vezes (veja o módulo Shop Ads com compra no site).</p><p class="miudo">O passo a passo da configuração automática não foi visto (a conferir).</p></div>';
    } else if (S.plat === 'outra') {
      corpo = '<div class="vf-caixa" data-t="card-outra"><b>Outra plataforma</b><p>Veja se ela está na Galeria de parceiros (WordPress, Shopify, Joomla, BigCommerce, Ecwid, OpenCart, PrestaShop, Magento/Adobe Commerce, SHOPLINE e outras). Se a plataforma não estiver listada, configure a API de Conversões manualmente ou fale com o provedor de serviços.</p></div>';
    }
    return '<h1>Conectar a plataforma do cliente</h1><p class="ss-sub">Integrações de parceiros capturam eventos do site sem editar o código.</p>' + botoes + corpo +
      '<p class="conferido">✓ O passo a passo e os pré-requisitos do WooCommerce vêm do artigo “Como conectar sua conta do WooCommerce à Meta” (Central de Ajuda, ' + CONF + '), e a galeria foi vista de verdade no Gerenciador de Eventos. O Wix é de uma página antiga e o Gerenciador de tags do Google não foi visto em detalhe (a conferir). A tela do plugin é do simulador.</p>';
  }
  function telaErros() {
    var lista = ERROS.map(function (e) { return '<tr data-t="erro-' + e.id + '"><td><button class="btn sec" data-erro="' + e.id + '">' + e.t + '</button></td><td>' + e.tipo + '</td><td>' + (S.corrigidos[e.id] ? '✓ corrigido' : '—') + '</td></tr>' }).join('');
    var det = ERROS.filter(function (e) { return e.id === S.erro })[0];
    var n = ERROS.filter(function (e) { return S.corrigidos[e.id] }).length;
    return '<h1>Diagnóstico do Pixel</h1><p class="ss-sub">Gerenciador de Eventos › seu Pixel › Diagnóstico. Estas são as mensagens da Central de Ajuda.</p>' +
      '<div class="ga-aviso" data-t="contagem-erros">Mensagens tratadas: <b>' + n + '</b> de ' + ERROS.length + '</div>' +
      '<table class="cm-tab" data-t="lista-erros"><thead><tr><th>Mensagem</th><th>Tipo</th><th>Situação</th></tr></thead><tbody>' + lista + '</tbody></table>' +
      (det ? '<div class="vf-caixa" data-t="det-erro"><b>' + det.t + '</b><p>' + det.d + '</p><p class="miudo">Dica: use o botão “Ver URLs afetados” para achar as páginas com o problema.</p>' + (S.corrigidos[det.id] ? '' : '<button class="btn" data-acao="corrige" data-t="btn-corrigido">Marcar como corrigido</button>') + '</div>' : '<p class="miudo">Clique em uma mensagem para ver a causa e o que fazer.</p>') +
      '<p class="conferido">✓ As 12 mensagens, as causas e as correções vêm do artigo “Como solucionar mensagens de erro e aviso do Pixel da Meta no Gerenciador de Eventos da Meta” (Central de Ajuda, ' + CONF + '). ⚠ A aba Diagnóstico real não foi vista (a conta de aula não tem conjunto de dados); o formato da tabela e o rótulo “tipo” são do simulador (a conferir).</p>';
  }
  function telaCatalogo() {
    var tudo = PX.every(function (x) { return S.px[x[0]] });
    var lista = PX.map(function (x) { var ok = S.px[x[0]]; return '<li class="' + (ok ? 'vd' : 'verm') + '" data-t="chk-px-' + x[0] + '">' + (ok ? '✓ ' : '✗ ') + x[1] + (!ok ? '<div><button class="btn sec" data-acao="fix-px-' + x[0] + '" data-t="btn-fix-px-' + x[0] + '">' + x[2] + '</button></div>' : '') + '</li>' }).join('');
    return '<h1>Pixel como fonte de dados do catálogo</h1><p class="ss-sub">O Pixel pode adicionar e atualizar itens do catálogo sempre que alguém vê uma página de produto.</p><ul class="vf-req" data-t="lista-px">' + lista + '</ul>' +
      '<button class="btn" data-acao="add-px" data-t="btn-add-pixel"' + (tudo ? '' : ' disabled') + '>Adicionar itens › Pixel</button> <span class="miudo">(Gerenciador de Comércio › catálogo › Fontes de dados)</span>' +
      (S.pxAdd ? '<div class="ga-aviso ok" data-t="msg-px"><b>✓ Pixel conectado como fonte.</b> Pode levar até 24 horas para ficar pronto. Depois, ele atualiza o catálogo a cada interação com uma página de produto, normalmente em até 15 minutos. Informe também os sites confiáveis e a moeda padrão.</div>' : '') +
      '<p class="conferido">⚠ Esta tela vem de páginas da Central de Ajuda encontradas em pesquisa (inglês/espanhol), não lidas na íntegra, e do simulador (a conferir): requisitos de portfólio, permissão, ViewContent, microdados e disparo nos últimos 7 dias; prazos de 24 horas e 15 minutos.</p>';
  }
  function telaManter() {
    return '<h1>Manter e desconectar</h1>' +
      '<div class="vf-caixa" data-t="card-versao"><b>Plugin Meta para WooCommerce</b> · versão: <b>' + (S.versao === 'atual' ? 'mais recente' : 'desatualizada') + '</b><br>' + (S.versao === 'atual' ? '' : '<button class="btn" data-acao="atualiza" data-t="btn-atualizar">Atualizar agora</button> ') + '<label class="ga-lin"><input type="checkbox" id="tcAuto"' + (S.auto ? ' checked' : '') + ' data-t="chk-auto"/><span>Habilitar atualizações automáticas</span></label><p class="miudo">Boa prática da Central de Ajuda: atualize plugins e extensões regularmente.</p></div>' +
      '<div class="vf-caixa" data-t="card-desc"><b>Desconectar o WooCommerce da Meta</b><p>Marketing › Facebook › aba Lojas › Configurações › Excluir conexão.</p><label class="ga-lin"><input type="checkbox" id="tcCanc"' + (S.canc ? ' checked' : '') + ' data-t="chk-canc"/><span>Cancelar a sincronização dos produtos antes de desconectar</span></label><button class="btn sec" data-acao="desc" data-t="btn-desconectar">Excluir conexão</button></div>' +
      (S.desc ? '<div class="ga-aviso" data-t="res-desc"><b>Desconectado.</b> A conta do WooCommerce não está mais ligada aos ativos da Meta e as atualizações de produtos deixam de sincronizar. ' + (S.canc ? 'Como você cancelou a sincronização antes, os produtos saíram do Gerenciador de Comércio.' : 'Os produtos já sincronizados permanecem no Gerenciador de Comércio, a menos que sejam excluídos manualmente por lá.') + '</div>' : '') +
      '<p class="conferido">✓ Atualizar o plugin, habilitar atualizações automáticas e os efeitos de desconectar vêm do artigo “Como conectar sua conta do WooCommerce à Meta” (Central de Ajuda, ' + CONF + '). ⚠ A tela é do simulador (a conferir).</p>';
  }
  function pagina() {
    var corpo = S.tab === 'conectar' ? telaConectar() : S.tab === 'erros' ? telaErros() : S.tab === 'catalogo' ? telaCatalogo() : telaManter();
    return casca('<div class="ss">' + nav() + '<main class="ss-main">' + corpo + '</main></div>');
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); grava(); render(); return }
    if ((c = t.closest('[data-plat]'))) { S.plat = c.getAttribute('data-plat'); grava(); render(); return }
    if ((c = t.closest('[data-erro]'))) { S.erro = c.getAttribute('data-erro'); grava(); render(); return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-acao');
    if (ac === 'corrige') S.corrigidos[S.erro] = true;
    else if (/^fix-px-/.test(ac)) S.px[ac.slice(7)] = true;
    else if (ac === 'add-px') S.pxAdd = true;
    else if (ac === 'atualiza') S.versao = 'atual';
    else if (ac === 'desc') S.desc = true;
    else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.getAttribute && t.getAttribute('data-pre')) S.pre[t.getAttribute('data-pre')] = t.checked;
    else if (t.getAttribute && t.getAttribute('data-passo')) S.passos[parseInt(t.getAttribute('data-passo'), 10)] = t.checked;
    else if (t.id === 'tcWix') S.wixPrem = t.checked; else if (t.id === 'tcAuto') S.auto = t.checked; else if (t.id === 'tcCanc') S.canc = t.checked;
    else return;
    grava(); render();
  });
  function render() { $('#app').innerHTML = pagina(); window.__simTc = { S: S } }
  window.SIMTC = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  var PRE_OK = { wp: true, woo: true, ctrl: true, dois: true };
  TOURS['pixel-fonte-catalogo'] = [
    { antes: function () { SIMTC.zera(); SIMTC.set({ tab: 'catalogo' }) }, alvo: '[data-t=lista-px]', garante: function () { SIMTC.zera(); SIMTC.set({ tab: 'catalogo' }) }, tit: T('Pixel alimentando o catálogo', 'Píxel alimentando el catálogo'), txt: T('O Pixel pode adicionar e atualizar itens do catálogo quando alguém vê um produto. Há cinco condições. Duas falham aqui. Clique em Próximo.', 'El píxel puede agregar y actualizar artículos del catálogo cuando alguien ve un producto. Hay cinco condiciones. Dos fallan aquí. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-fix-px-micro]', clique: true, garante: function () { SIMTC.zera(); SIMTC.set({ tab: 'catalogo' }) }, tit: T('Microdados', 'Microdatos'), txt: T('Sem tags de microdados nas páginas de produto, o Pixel não consegue adicionar nem atualizar itens. Clique para simular que foram adicionados.', 'Sin etiquetas de microdatos en las páginas de producto, el píxel no puede agregar ni actualizar artículos. Haz clic para simular que se agregaron.') },
    { alvo: '[data-t=btn-fix-px-sete]', clique: true, garante: function () { SIMTC.zera(); SIMTC.set({ tab: 'catalogo', px: { portf: true, perm: true, vc: true, micro: true, sete: false } }) }, tit: T('Disparo recente', 'Disparo reciente'), txt: T('O Pixel precisa ter disparado nos últimos sete dias (alguém viu um item no site). Clique para simular que isso aconteceu.', 'El píxel debe haberse activado en los últimos siete días (alguien vio un artículo en el sitio). Haz clic para simular que eso ocurrió.') },
    { alvo: '[data-t=btn-add-pixel]', clique: true, garante: function () { SIMTC.zera(); SIMTC.set({ tab: 'catalogo', px: { portf: true, perm: true, vc: true, micro: true, sete: true } }) }, tit: T('Adicionar o Pixel', 'Agregar el píxel'), txt: T('Agora as cinco condições estão certas. Clique em Adicionar itens › Pixel.', 'Ahora las cinco condiciones están correctas. Haz clic en Agregar artículos › Píxel.') },
    { alvo: '[data-t=msg-px]', fim: true, semVolta: true, garante: function () { SIMTC.zera(); SIMTC.set({ tab: 'catalogo', px: { portf: true, perm: true, vc: true, micro: true, sete: true }, pxAdd: true }) }, tit: T('Pixel como fonte 🎉', 'Píxel como fuente 🎉'), txt: T('Pode levar até 24 horas para ficar pronto; depois atualiza o catálogo a cada interação, normalmente em até 15 minutos. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Puede tardar hasta 24 horas en estar listo; después actualiza el catálogo en cada interacción, normalmente en hasta 15 minutos. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
