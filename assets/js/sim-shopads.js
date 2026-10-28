/* Simulador dos anúncios das Lojas (Shop Ads) no Gerenciador de Anúncios — visual da Lojinha.
   Estado no navegador (localStorage "sim.shopads"); nada é enviado à Meta.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): o que são os anúncios das Lojas; os ativos exigidos (loja, Página/Instagram, catálogo, Pixel, conta de anúncios); o caminho Criar › Vendas › local da conversão Site › Destinos personalizados › botão Loja; os eventos de conversão compatíveis; os destinos da loja (página inicial, produto, coleção); formatos; os requisitos para não enviar tráfego só ao site; as métricas recomendadas; e a lista de países (Brasil está em beta aberto: “alguns vendedores podem não ter recursos completos”).
   Real (tela, conta de aula, 16/10/2026): Gerenciador de Anúncios com as colunas e o campo “Destinos personalizados (0/3)” do nível do anúncio. NÃO visto: a aba “Loja” dentro de Destinos personalizados nem o botão Loja (a conta de aula não tem loja publicada); a tela do Gerenciador travou ao tentar abrir um rascunho. Essas telas são do simulador, montadas a partir da Central de Ajuda (a conferir).
   INVENTADOS para o treino: os números do relatório, o diagnóstico “por que só o site” (as regras são as da Central de Ajuda; o painel é nosso) e a lista de problemas do cenário ?problema=1.
   URL: meta-shopads.html?zerar=1 · ?problema=1 (anúncio que só envia ao site) · ?relatorio=1
   Tutoriais (tour.js): ?tour=criar-anuncio-lojas | mudancas-checkout | so-para-o-site | ler-relatorio-lojas */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var EVENTOS = ['Adicionar ao carrinho', 'Adicionar à lista de desejos', 'Iniciar finalização da compra', 'Compra', 'Conteúdo visualizado', 'Cadastro concluído', 'Adicionar informações de pagamento'];
  var OK_EV = ['Adicionar ao carrinho', 'Adicionar à lista de desejos', 'Iniciar finalização da compra', 'Compra', 'Conteúdo visualizado'];
  var POS = ['Posicionamentos Advantage+ (todos)', 'Feed do Instagram', 'Instagram Stories', 'Reels do Instagram', 'Somente Messenger (caixa de entrada)'];
  var FORMATOS = ['Carrossel', 'Coleção', 'Imagem única', 'Vídeo único'];
  var DESTINOS = ['Site', 'App', 'Evento do Facebook', 'Experiência instantânea'];
  var LOJA_DEST = ['Página inicial da loja', 'Página de um produto', 'Uma coleção'];
  var ATIVOS = [
    { id: 'loja', t: 'Uma loja no Facebook e no Instagram', det: 'Você precisa de controle total da conta comercial ou da permissão de Lojas no Facebook e no Instagram.', fix: 'Criar a loja (módulo Commerce)' },
    { id: 'pag', t: 'Uma Página do Facebook ou conta do Instagram conectada à loja', det: 'Controle total do ativo ou permissão de anúncio.', fix: 'Conectar a Página ou o Instagram à loja' },
    { id: 'cat', t: 'Um catálogo conectado à loja', det: 'Controle total do catálogo ou permissão para criar anúncios.', fix: 'Conectar o catálogo à loja' },
    { id: 'pixel', t: 'Um Pixel da Meta conectado ao catálogo', det: 'O conjunto de dados (Pixel) precisa estar ligado ao catálogo.', fix: 'Conectar o Pixel ao catálogo' },
    { id: 'conta', t: 'Uma conta de anúncios', det: 'Controle total da conta de anúncios ou permissão para gerenciar campanhas.', fix: '' }
  ];
  var MET = [
    { id: 'comprasite', t: 'Compras no site', v: '46', rec: true, grupo: 'Métricas de anúncios das Lojas', d: 'Métrica recomendada: compras que aconteceram no seu site.' },
    { id: 'compras', t: 'Compras', v: '71', rec: true, grupo: 'Métricas de anúncios das Lojas', d: 'Métrica recomendada: total de compras atribuídas ao anúncio.' },
    { id: 'roas', t: 'ROAS de compras', v: '3,4', rec: true, grupo: 'Métricas de anúncios das Lojas', d: 'Métrica recomendada: retorno sobre o investimento em publicidade de compras.' },
    { id: 'valor', t: 'Valor de conversão de compras', v: 'R$ 1.870,00', rec: true, grupo: 'Métricas de anúncios das Lojas', d: 'Métrica recomendada.' },
    { id: 'cpc', t: 'Custo por compra', v: 'R$ 7,75', rec: true, grupo: 'Métricas de anúncios das Lojas', d: 'Métrica recomendada.' },
    { id: 'ctr', t: 'CTR (taxa de cliques no link)', v: '1,9%', rec: true, grupo: 'Métricas de anúncios das Lojas', d: 'Métrica recomendada: use cliques no link, não cliques de saída.' },
    { id: 'cliqueslink', t: 'Cliques no link', v: '1.420', rec: true, grupo: 'Métricas de anúncios das Lojas', d: 'Métrica recomendada.' },
    { id: 'assist', t: 'Compras com assistência das lojas', v: '58', rec: true, grupo: 'Métricas das Lojas', d: 'Métrica das Lojas: compras em que a loja participou da jornada. Pode subir, já que todas as compras agora acontecem no site.' },
    { id: 'cliquesloja', t: 'Cliques na loja', v: '690', rec: true, grupo: 'Métricas das Lojas', d: 'Métrica das Lojas: ajuda a entender o papel da loja na jornada do comprador.' },
    { id: 'saida', t: 'Custo por clique de saída único', v: 'R$ 0,95', rec: false, grupo: 'Não recomendadas', d: 'Não dá o panorama completo. Use cliques no link (por exemplo, custo por clique único).' },
    { id: 'rosite', t: 'ROAS das compras no site', v: '2,6', rec: false, grupo: 'Não recomendadas', d: 'Não dá o panorama completo. Use ROAS de compras e valor de conversão de compras.' },
    { id: 'comprasmeta', t: 'Compras na Meta', v: '0', rec: false, grupo: 'Não se aplicam mais', d: 'Não se aplica mais: as Lojas não têm mais finalização da compra no Facebook e no Instagram, e esta métrica aparece como 0. Dados antigos ficam por até 39 meses.' }
  ];
  function inicial() { return { tab: 'criar', ativos: { loja: true, pag: true, cat: true, pixel: true, conta: true }, nivel: 1, adv: true, catOn: true, meta: 'Maximizar o número de conversões', evento: 'Compra', pos: POS[0], formato: 'Carrossel', destino: 'Site', url: '', lojaOn: false, lojaDest: LOJA_DEST[0], permiteMeta: false, pub: false, mensagem: '', metSel: '', soRec: false, verif: '', param: '', jan: false, pf: { origem: '', nome: '', conteudo: '' }, google: false } }
  function problema() { var s = inicial(); s.tab = 'criar'; s.nivel = 3; s.evento = 'Cadastro concluído'; s.pos = POS[4]; s.formato = 'Imagem única'; s.destino = 'App'; s.url = 'https://www.lojinha.exemplo.com.br/'; s.lojaOn = false; s.ativos.pixel = false; return s }
  var S = ler('sim.shopads', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('problema')) S = problema();
  if (params.get('relatorio')) { S = inicial(); S.tab = 'resultados' }
  function grava() { try { localStorage.setItem('sim.shopads', JSON.stringify(S)) } catch (e) { } window.__simSa = { S: S } }
  grava();
  function ativosOk() { return ATIVOS.every(function (a) { return S.ativos[a.id] }) }
  function lojaPossivel() { return OK_EV.indexOf(S.evento) >= 0 && S.destino === 'Site' }
  function motivos() {
    var m = [];
    ATIVOS.forEach(function (a) { if (!S.ativos[a.id]) m.push('Falta: ' + a.t + '.') });
    if (OK_EV.indexOf(S.evento) < 0) m.push('O evento de conversão “' + S.evento + '” não é compatível: use Adicionar ao carrinho, Adicionar à lista de desejos, Iniciar finalização da compra, Compra ou Conteúdo visualizado.');
    if (S.pos === POS[4]) m.push('Os posicionamentos escolhidos não incluem nenhum compatível (Feed, Stories ou Reels do Facebook ou do Instagram).');
    if (S.catOn && (S.formato === 'Imagem única' || S.formato === 'Vídeo único')) m.push('Com catálogo ativado, só dá para criar anúncio em carrossel ou de coleção; o formato escolhido não é compatível.');
    if (S.destino !== 'Site') m.push('O destino escolhido (' + S.destino + ') não é a loja: o anúncio não leva as pessoas para a loja.');
    if (S.destino === 'Site' && !S.lojaOn) m.push('O botão Loja, em Destinos personalizados, está desligado.');
    return m;
  }
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento dos anúncios das Lojas · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function nav() {
    var t = [['criar', '📣 Criar anúncio das Lojas'], ['resultados', '📊 Resultados']];
    return '<nav class="ss-nav">' + t.map(function (x) { return '<button class="ss-it' + (S.tab === x[0] ? ' on' : '') + '" data-tab="' + x[0] + '" data-t="tab-' + x[0] + '">' + x[1] + '</button>' }).join('') + '</nav>';
  }
  function selOpt(id, lista, v, t) { return '<select class="ga-in" id="' + id + '" data-t="' + t + '">' + lista.map(function (o) { return '<option value="' + o + '"' + (o === v ? ' selected' : '') + '>' + o + '</option>' }).join('') + '</select>' }
  /* Rastreamento do anúncio e a janela “Criar um parâmetro de URL” (tela real do Gerenciador de Anúncios, 28/10/2026; só olhada) */
  var DIN = ['{{campaign.id}}', '{{adset.id}}', '{{ad.id}}', '{{campaign.name}}', '{{adset.name}}', '{{ad.name}}', '{{placement}}', '{{site_source_name}}'];
  var PCAMPOS = [['origem', 'utm_source', 'Origem da campanha', 'Para identificar a origem do tráfego. Por exemplo: Facebook, Instagram, um mecanismo de pesquisa ou outra origem.'],
    ['nome', 'utm_campaign', 'Nome da campanha', 'Para identificar uma promoção específica ou campanha estratégica. Por exemplo: summer_sale.'],
    ['conteudo', 'utm_content', 'Conteúdo da campanha', 'Para diferenciar anúncios ou links que apontam para a mesma URL. Por exemplo: white_logo, black_logo.']];
  function previa() { return PCAMPOS.filter(function (c) { return S.pf[c[0]] }).map(function (c) { return c[1] + '=' + S.pf[c[0]] }).join('&') }
  function rastreamento() {
    return '<h3>Rastreamento</h3><div class="vf-caixa" data-t="rastreamento"><p class="miudo">Selecione os eventos de conversão a serem rastreados. O conjunto de dados de conversão selecionado desta conta de anúncios será rastreado por padrão.</p>' +
      '<p>Eventos do site ⓘ <button class="btn sec" disabled>Configurar</button> · Eventos do app ⓘ · Eventos offline ⓘ</p>' +
      '<p><b>Parâmetros de URL ⓘ</b></p><input class="ga-in" id="saParam" placeholder="key1=value1&amp;key2=value2" value="' + esc(S.param) + '" data-t="in-param"/>' +
      '<p><button class="cm-link" data-acao="param-abre" data-t="criar-param">Criar um parâmetro de URL</button></p>' +
      '<div data-t="terceiros-google"><p><b>Relatórios de terceiros</b><br><span class="miudo">As compras na Meta talvez não sejam incluídas nos seus relatórios do Google. Você pode conectar sua conta para mensurar ações em anúncios que direcionam as pessoas ao seu site ou à sua loja.</span></p>' +
      '<button class="btn sec" data-acao="google" data-t="btn-conectar-google">Conectar</button>' + (S.google ? '<p class="miudo" data-t="msg-google">Na tela real, Conectar abre a ligação com a conta do Google. Não foi feita no treino (a conferir).</p>' : '') + '</div></div>';
  }
  function janelaParam() {
    if (!S.jan) return '';
    var campo = function (c) { return '<label class="sa-pcampo"><b>' + c[2] + '</b><select id="saP_' + c[0] + '" data-t="param-' + c[0] + '"><option value="">Selecione um parâmetro dinâmico ou insira um valor</option>' + DIN.map(function (d) { return '<option' + (S.pf[c[0]] === d ? ' selected' : '') + '>' + d + '</option>' }).join('') + '</select><small>' + c[3] + '</small></label>' };
    return '<div class="fundo"><div class="janela larga" data-t="jan-param"><h3>Criar um parâmetro de URL <button class="x" data-acao="param-fecha" aria-label="Fechar">✕</button></h3>' +
      '<p>Preencha os campos no formulário abaixo para adicionar parâmetros à URL do seu site. Para obter informações automaticamente da sua campanha, conjunto de anúncios ou anúncio, clique em cada campo e selecione um parâmetro dinâmico, como id={{ad.id}}.</p>' +
      PCAMPOS.map(campo).join('') + '<p class="miudo">(Meio da campanha e “Adicionar parâmetro” ficaram de fora do simulador.)</p>' +
      '<p><b>Prévia do parâmetro</b></p><div class="sa-previa" data-t="param-previa">' + esc(previa()) + '</div>' +
      '<div class="rodape-jan"><button class="btn sec" data-acao="param-fecha">Cancelar</button><button class="btn" data-acao="param-aplica" data-t="btn-aplicar-param"' + (previa() ? '' : ' disabled') + '>Aplicar</button></div></div></div>';
  }
  function telaCriar() {
    var n = S.nivel, passos = ['Campanha', 'Conjunto de anúncios', 'Anúncio'];
    var cab = '<ol class="vf-pas">' + passos.map(function (x, i) { return '<li class="' + (i + 1 === n ? 'on' : i + 1 < n ? 'ok' : '') + '" data-t="nivel-' + (i + 1) + '">' + x + '</li>' }).join('') + '</ol>';
    var corpo = '', pode = true;
    if (!ativosOk()) corpo += '<div class="ga-aviso verm" data-t="aviso-ativos">Faltam ativos para criar anúncios das Lojas. Confira a loja nas Configurações do Gerenciador de Comércio.</div>';
    if (n === 1) { corpo += '<h3>Objetivo</h3><p data-t="obj"><b>Vendas</b> <span class="miudo">(campanha de vendas Advantage+)</span></p><label class="ga-lin"><input type="checkbox" id="saAdv"' + (S.adv ? ' checked' : '') + ' data-t="adv"/><span>Manter as configurações recomendadas do Advantage+ <small>(mudar pode desativar o Advantage+ ou reduzir a pontuação da campanha)</small></span></label>' }
    else if (n === 2) {
      corpo += '<h3>Conversão</h3><p>Local da conversão: <b data-t="local">Site</b> <span class="miudo">(o local “Site e loja” não está mais disponível)</span></p>' +
        '<label class="ga-lin"><input type="checkbox" id="saCat"' + (S.catOn ? ' checked' : '') + ' data-t="cat-on"/><span>Anúncios de catálogo Advantage+ (vendas do catálogo)</span></label>' +
        '<p><b>Evento de conversão</b></p>' + selOpt('saEv', EVENTOS, S.evento, 'sel-evento') +
        '<h3>Posicionamentos</h3>' + selOpt('saPos', POS, S.pos, 'sel-pos') + '<p class="miudo">Para anúncios das Lojas, escolha pelo menos um entre Feed, Stories ou Reels do Facebook ou do Instagram. Público: precisa incluir uma localização onde os anúncios das Lojas estão disponíveis (aqui: Brasil).</p>';
    } else {
      corpo += '<h3>Formato</h3>' + selOpt('saFmt', FORMATOS, S.formato, 'sel-formato') +
        '<h3>Destino</h3><p><b>Destino principal</b></p>' + selOpt('saDest', DESTINOS, S.destino, 'sel-destino') +
        '<p><b>URL do site</b></p><input class="ga-in" id="saUrl" placeholder="https://www.sualoja.com.br/" value="' + esc(S.url) + '" data-t="in-url"/>' +
        '<h3>Destinos personalizados</h3><div class="vf-caixa" data-t="dest-pers"><label class="ga-lin"><input type="checkbox" id="saLoja"' + (S.lojaOn ? ' checked' : '') + (lojaPossivel() ? '' : ' disabled') + ' data-t="btn-loja"/><span><b>Loja</b> <small>' + (lojaPossivel() ? 'Ative para transformar em um anúncio das Lojas.' : 'Botão ausente ou desabilitado: confira o evento de conversão e o destino principal.') + '</small></span></label>' +
        (S.lojaOn ? '<p>Destino da loja</p>' + selOpt('saLojaDest', LOJA_DEST, S.lojaDest, 'sel-lojadest') + '<label class="ga-lin"><input type="checkbox" id="saPerm"' + (S.permiteMeta ? ' checked' : '') + ' data-t="chk-permite"/><span>Permitir que a Meta direcione as pessoas para o destino da loja com maior probabilidade de melhorar o desempenho do anúncio <small>(recomendado)</small></span></label>' : '') + '</div>';
      corpo += rastreamento();
      pode = !!S.url && ativosOk();
    }
    var ms = motivos(), resumo = '';
    if (n === 3) resumo = '<div class="ga-aviso' + (ms.length ? ' verm' : ' ok') + '" data-t="resumo">' + (ms.length ? '<b>Este anúncio enviará pessoas apenas para o site.</b><ul data-t="lista-motivos">' + ms.map(function (x) { return '<li>' + esc(x) + '</li>' }).join('') + '</ul>' : '<b>Este anúncio pode enviar pessoas para o site e para a loja,</b> conforme a Meta achar mais provável de gerar uma conversão.') + '<div class="miudo">Painel do simulador, com as regras da Central de Ajuda (a conferir).</div></div>';
    var bot = '<div class="rodape-jan">' + (n > 1 ? '<button class="btn sec" data-acao="volta" data-t="btn-volta">Voltar</button>' : '') + (n < 3 ? '<button class="btn" data-acao="avanca" data-t="btn-avanca">Avançar</button>' : '<button class="btn" data-acao="publica" data-t="btn-publica"' + (pode ? '' : ' disabled') + '>Publicar</button>') + '</div>';
    var fim = S.mensagem ? '<div class="ga-aviso" data-t="msg-pub">' + esc(S.mensagem) + '</div>' : '';
    return '<h1>Criar um anúncio das Lojas</h1><p class="ss-sub">Gerenciador de Anúncios › Criar › Vendas.</p>' + cab + '<div class="vf-caixa" data-t="corpo-criar">' + corpo + '</div>' + resumo + fim + bot +
      '<p class="conferido">✓ O caminho (Criar › Vendas › conjunto › anúncio), o local da conversão Site, os eventos compatíveis, os destinos da loja, os formatos e a lista de requisitos vêm dos artigos “Como criar um anúncio das Lojas…” e “Por que os anúncios das Lojas só podem direcionar pessoas para seu site” (Central de Ajuda, ' + CONF + '). ⚠ As telas são do simulador: a aba Loja e o botão Loja não puderam ser vistos na conta de aula (a conferir).</p>';
  }
  function telaResultados() {
    var lista = MET.filter(function (m) { return !S.soRec || m.rec });
    var rows = lista.map(function (m) { return '<tr data-t="met-' + m.id + '" class="' + (m.rec ? '' : 'sa-nr') + '"><td><button class="btn sec" data-met="' + m.id + '">' + m.t + '</button></td><td>' + m.v + '</td><td>' + m.grupo + '</td></tr>' }).join('');
    var sel = MET.filter(function (m) { return m.id === S.metSel })[0];
    return '<h1>Resultados dos anúncios das Lojas</h1><p class="ss-sub">Os anúncios das Lojas otimizam para conversão: avalie pelos resultados no site e na loja (números de exemplo do simulador).</p>' +
      '<label class="ga-lin"><input type="checkbox" id="saRec"' + (S.soRec ? ' checked' : '') + ' data-t="chk-rec"/><span>Mostrar só as métricas recomendadas</span></label>' +
      '<table class="cm-tab" data-t="tabela-met"><thead><tr><th>Métrica</th><th>Valor (exemplo)</th><th>Grupo</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      (sel ? '<div class="vf-caixa" data-t="det-met"><b>' + sel.t + '</b><p>' + sel.d + '</p></div>' : '<p class="miudo">Clique em uma métrica para ver como usá-la.</p>') +
      '<div class="ga-aviso" data-t="aviso-site">Se o seu site recebe uma parte excessiva do tráfego dos anúncios das Lojas, ele pode estar convertendo mais compradores do que a loja. Também pode haver diferenças de contagem entre o Gerenciador de Anúncios e ferramentas de terceiros (como o Google Analytics).</div>' +
      '<p class="conferido">✓ As listas de métricas recomendadas e não recomendadas e os avisos vêm do artigo “Como entender seus relatórios de anúncios ao usar anúncios das Lojas” (Central de Ajuda, ' + CONF + '). ⚠ Os valores são inventados para o treino.</p>';
  }
  function pagina() {
    var corpo = S.tab === 'resultados' ? telaResultados() : telaCriar();
    return casca('<div class="ss">' + nav() + '<main class="ss-main">' + corpo + '</main></div>' + (S.tab === 'resultados' ? '' : janelaParam()));
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); S.mensagem = ''; grava(); render(); return }
    if ((c = t.closest('[data-met]'))) { S.metSel = c.getAttribute('data-met'); grava(); render(); return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-acao');
    if (/^fix-/.test(ac)) S.ativos[ac.slice(4)] = true;
    else if (ac === 'verif') S.verif = 'Identidade: Lojinha da Marina (Página do Facebook) e @lojinhadamarina.aula (Instagram). Catálogo: Catálogo Lojinha da Marina (aula).';
    else if (ac === 'avanca') S.nivel = Math.min(3, S.nivel + 1);
    else if (ac === 'volta') S.nivel = Math.max(1, S.nivel - 1);
    else if (ac === 'publica') { S.pub = true; S.mensagem = 'Seu anúncio será publicado após a análise.' }
    else if (ac === 'param-abre') { S.jan = true; S.pf = { origem: '', nome: '', conteudo: '' } }
    else if (ac === 'param-fecha') S.jan = false;
    else if (ac === 'param-aplica') { S.param = previa(); S.jan = false }
    else if (ac === 'google') S.google = true;
    else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'saEv') { S.evento = t.value; if (OK_EV.indexOf(t.value) < 0) S.lojaOn = false }
    else if (t.id === 'saPos') S.pos = t.value;
    else if (t.id === 'saFmt') S.formato = t.value;
    else if (t.id === 'saDest') { S.destino = t.value; if (t.value !== 'Site') S.lojaOn = false }
    else if (t.id === 'saLojaDest') S.lojaDest = t.value;
    else if (t.id === 'saLoja') S.lojaOn = t.checked;
    else if (/^saP_/.test(t.id)) S.pf[t.id.slice(4)] = t.value;
    else if (t.id === 'saPerm') S.permiteMeta = t.checked;
    else if (t.id === 'saCat') S.catOn = t.checked;
    else if (t.id === 'saAdv') S.adv = t.checked;
    else if (t.id === 'saRec') S.soRec = t.checked;
    else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) { if (ev.target.id === 'saUrl') { S.url = ev.target.value; grava() } else if (ev.target.id === 'saParam') { S.param = ev.target.value; grava() } });
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simSa = { S: S };
  }
  window.SIMSA = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, problema: function () { S = problema(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function sa() { return window.__simSa ? window.__simSa.S : S }
  var CRIA = { tab: 'criar' };
  TOURS['mudancas-checkout'] = [
    { antes: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 2 }) }, alvo: '[data-t=local]', garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 2 }) }, tit: T('“Site e loja” acabou', '“Sitio y tienda” terminó'), txt: T('Desde setembro de 2025 a compra termina no site. Por isso, no conjunto de anúncios, o local da conversão é Site: o antigo “Site e loja” não existe mais. Clique em Próximo.', 'Desde septiembre de 2025 la compra termina en el sitio. Por eso, en el conjunto de anuncios, el lugar de conversión es Sitio: el antiguo “Sitio y tienda” ya no existe. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-avanca]', clique: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 2 }) }, tit: T('Ir ao anúncio', 'Ir al anuncio'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-loja]', clique: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 3, url: 'https://www.lojinha.exemplo.com.br/' }) }, tit: T('A loja como destino', 'La tienda como destino'), txt: T('A loja continua: ela entra em Destinos personalizados. Ative o botão Loja.', 'La tienda continúa: entra en Destinos personalizados. Activa el botón Tienda.') },
    { alvo: '[data-t=resumo]', fim: true, semVolta: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 3, url: 'https://www.lojinha.exemplo.com.br/', lojaOn: true }) }, tit: T('O que mudou, na prática 🎉', 'Lo que cambió, en la práctica 🎉'), txt: T('Local da conversão = Site, loja ligada nos destinos personalizados, e os eventos de conversão são os mesmos. No relatório, “compras na Meta” passam a 0: acompanhe as compras no site.', 'Lugar de conversión = Sitio, tienda activada en los destinos personalizados, y los eventos de conversión son los mismos. En el informe, “compras en Meta” pasan a 0: sigue las compras en el sitio.') }
  ];
  var N3 = { tab: 'criar', nivel: 3, url: 'https://www.lojinha.exemplo.com.br/', lojaOn: true };
  function N3x(o) { SIMSA.zera(); SIMSA.set(N3); if (o) SIMSA.set(o) }
  TOURS['comparar-terceiros'] = [
    { antes: function () { N3x() }, alvo: '[data-t=rastreamento]', garante: function () { N3x() }, tit: T('“O Google mostra menos compras”', '“Google muestra menos compras”'), txt: T('A Marina vê 71 compras no Gerenciador de Anúncios e 46 no Google Analytics. Parte da diferença se resolve aqui, no Rastreamento do anúncio. Clique em Próximo.', 'Marina ve 71 compras en el Administrador de anuncios y 46 en Google Analytics. Parte de la diferencia se resuelve aquí, en el Seguimiento del anuncio. Haz clic en Siguiente.') },
    { alvo: '[data-t=criar-param]', clique: true, garante: function () { N3x() }, tit: T('Parâmetros de URL (UTM)', 'Parámetros de URL (UTM)'), txt: T('Os UTM dizem ao Google de onde veio a visita. Clique em “Criar um parâmetro de URL”.', 'Los UTM le dicen a Google de dónde vino la visita. Haz clic en “Crear un parámetro de URL”.') },
    { alvo: '[data-t=param-origem]', garante: function () { N3x({ jan: true }) }, cond: function () { return sa().pf && sa().pf.origem === '{{site_source_name}}' }, tit: T('Origem', 'Origen'), txt: T('Em Origem da campanha, escolha {{site_source_name}}: a Meta preenche sozinha se veio do Facebook ou do Instagram.', 'En Origen de la campaña, elige {{site_source_name}}: Meta completa sola si vino de Facebook o de Instagram.') },
    { alvo: '[data-t=param-nome]', garante: function () { N3x({ jan: true, pf: { origem: '{{site_source_name}}', nome: '', conteudo: '' } }) }, cond: function () { return sa().pf && sa().pf.nome === '{{campaign.name}}' }, tit: T('Nome', 'Nombre'), txt: T('Em Nome da campanha, escolha {{campaign.name}}.', 'En Nombre de la campaña, elige {{campaign.name}}.') },
    { alvo: '[data-t=param-previa]', garante: function () { N3x({ jan: true, pf: { origem: '{{site_source_name}}', nome: '{{campaign.name}}', conteudo: '' } }) }, tit: T('A prévia', 'La vista previa'), txt: T('A prévia mostra o que vai no fim do link do site. Clique em Próximo.', 'La vista previa muestra lo que va al final del enlace del sitio. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-aplicar-param]', clique: true, garante: function () { N3x({ jan: true, pf: { origem: '{{site_source_name}}', nome: '{{campaign.name}}', conteudo: '' } }) }, tit: T('Aplicar', 'Aplicar'), txt: T('Clique em Aplicar.', 'Haz clic en Aplicar.') },
    { alvo: '[data-t=terceiros-google]', fim: true, semVolta: true, garante: function () { N3x({ param: 'utm_source={{site_source_name}}&utm_campaign={{campaign.name}}' }) }, tit: T('E as compras na Meta 🎉', 'Y las compras en Meta 🎉'), txt: T('Parâmetros de URL preenchidos. A própria tela avisa: as compras na Meta talvez não entrem nos relatórios do Google, e dá para conectar a conta do Google aqui. Os números nunca batem 100%: explique isso à Marina.', 'Parámetros de URL completos. La propia pantalla avisa: las compras en Meta quizás no entren en los informes de Google, y aquí se puede conectar la cuenta de Google. Los números nunca coinciden al 100%: explícaselo a Marina.') }
  ];
  TOURS['criar-anuncio-lojas'] = [
    { antes: function () { SIMSA.zera(); SIMSA.set(CRIA) }, alvo: '[data-t=obj]', garante: function () { SIMSA.zera(); SIMSA.set(CRIA) }, tit: T('Objetivo Vendas', 'Objetivo Ventas'), txt: T('Um anúncio das Lojas começa como uma campanha de Vendas Advantage+. Mudar as configurações recomendadas pode desativar o Advantage+. Clique em Próximo.', 'Un anuncio de Tiendas empieza como una campaña de Ventas Advantage+. Cambiar la configuración recomendada puede desactivar Advantage+. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-avanca]', clique: true, garante: function () { SIMSA.zera(); SIMSA.set(CRIA) }, tit: T('Ir ao conjunto', 'Ir al conjunto'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=local]', garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 2 }) }, tit: T('Local da conversão: Site', 'Lugar de conversión: Sitio'), txt: T('O local da conversão é Site. O antigo “Site e loja” não existe mais: a loja entra depois, como destino personalizado. Clique em Próximo.', 'El lugar de conversión es Sitio. El antiguo “Sitio y tienda” ya no existe: la tienda entra después, como destino personalizado. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-evento]', garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 2 }) }, cond: function () { return sa().evento === 'Compra' }, tit: T('Evento de conversão', 'Evento de conversión'), txt: T('Só alguns eventos funcionam com as Lojas: Adicionar ao carrinho, Adicionar à lista de desejos, Iniciar finalização da compra, Compra e Conteúdo visualizado. Escolha “Compra”.', 'Solo algunos eventos funcionan con Tiendas: Agregar al carrito, Agregar a la lista de deseos, Iniciar compra, Compra y Contenido visto. Elige “Compra”.'), dica: T('Escolha Compra.', 'Elige Compra.') },
    { alvo: '[data-t=btn-avanca]', clique: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 2 }) }, tit: T('Ir ao anúncio', 'Ir al anuncio'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=in-url]', garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 3 }) }, cond: function () { return /^https:\/\/www\.lojinha\.exemplo\.com\.br/.test(sa().url || '') }, tit: T('Destino: o site', 'Destino: el sitio'), txt: T('No destino principal, escolha Site e coloque a URL. Digite https://www.lojinha.exemplo.com.br/.', 'En el destino principal, elige Sitio y pon la URL. Escribe https://www.lojinha.exemplo.com.br/.'), dica: T('Digite https://www.lojinha.exemplo.com.br/.', 'Escribe https://www.lojinha.exemplo.com.br/.') },
    { alvo: '[data-t=btn-loja]', clique: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 3, url: 'https://www.lojinha.exemplo.com.br/' }) }, tit: T('O botão Loja', 'El botón Tienda'), txt: T('Em Destinos personalizados, ative o botão Loja: é isso que transforma o anúncio em um anúncio das Lojas. Se ele estiver ausente ou desabilitado, confira o evento de conversão.', 'En Destinos personalizados, activa el botón Tienda: eso es lo que convierte el anuncio en un anuncio de Tiendas. Si está ausente o deshabilitado, revisa el evento de conversión.') },
    { alvo: '[data-t=chk-permite]', clique: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 3, url: 'https://www.lojinha.exemplo.com.br/', lojaOn: true }) }, tit: T('Deixar a Meta escolher', 'Dejar que Meta elija'), txt: T('Marque a caixa que permite à Meta direcionar as pessoas ao destino da loja com maior chance de melhorar o desempenho. É a recomendação oficial.', 'Marca la casilla que permite a Meta dirigir a las personas al destino de la tienda con más probabilidad de mejorar el rendimiento. Es la recomendación oficial.') },
    { alvo: '[data-t=resumo]', garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 3, url: 'https://www.lojinha.exemplo.com.br/', lojaOn: true, permiteMeta: true }) }, tit: T('O resumo', 'El resumen'), txt: T('Este painel do simulador mostra que o anúncio pode enviar pessoas ao site e à loja. Clique em Próximo.', 'Este panel del simulador muestra que el anuncio puede enviar personas al sitio y a la tienda. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-publica]', clique: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 3, url: 'https://www.lojinha.exemplo.com.br/', lojaOn: true, permiteMeta: true }) }, tit: T('Publicar', 'Publicar'), txt: T('Clique em Publicar.', 'Haz clic en Publicar.') },
    { alvo: '[data-t=msg-pub]', fim: true, semVolta: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'criar', nivel: 3, url: 'https://www.lojinha.exemplo.com.br/', lojaOn: true, permiteMeta: true, mensagem: 'Seu anúncio será publicado após a análise.' }) }, tit: T('Anúncio das Lojas criado! 🎉', '¡Anuncio de Tiendas creado! 🎉'), txt: T('O anúncio será publicado após a análise. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'El anuncio se publicará después de la revisión. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['so-para-o-site'] = [
    { antes: function () { SIMSA.problema() }, alvo: '[data-t=resumo]', garante: function () { SIMSA.problema() }, tit: T('“Só chega ao site”', '“Solo llega al sitio”'), txt: T('A Marina diz que o anúncio das Lojas só leva as pessoas ao site. O resumo confirma e lista os motivos. Vamos corrigir um por um. Clique em Próximo.', 'Marina dice que el anuncio de Tiendas solo lleva a las personas al sitio. El resumen lo confirma y lista los motivos. Corrijamos uno por uno. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-formato]', garante: function () { SIMSA.problema() }, cond: function () { return sa().formato === 'Carrossel' }, tit: T('Formato', 'Formato'), txt: T('Com catálogo ativado, só dá para criar anúncio em carrossel ou de coleção. Troque “Imagem única” por “Carrossel”.', 'Con catálogo activado, solo se puede crear un anuncio en secuencia o de colección. Cambia “Imagen única” por “Secuencia”.'), dica: T('Escolha Carrossel.', 'Elige Secuencia.') },
    { alvo: '[data-t=sel-destino]', garante: function () { SIMSA.problema(); SIMSA.set({ formato: 'Carrossel' }) }, cond: function () { return sa().destino === 'Site' }, tit: T('Destino', 'Destino'), txt: T('O destino “App” não é a loja. O principal precisa ser Site. Escolha “Site”.', 'El destino “App” no es la tienda. El principal debe ser Sitio. Elige “Sitio”.'), dica: T('Escolha Site.', 'Elige Site.') },
    { alvo: '[data-t=btn-volta]', clique: true, garante: function () { SIMSA.problema(); SIMSA.set({ formato: 'Carrossel', destino: 'Site' }) }, tit: T('Voltar', 'Volver'), txt: T('Clique em Voltar.', 'Haz clic en Atrás.') },
    { alvo: '[data-t=sel-evento]', garante: function () { SIMSA.problema(); SIMSA.set({ formato: 'Carrossel', destino: 'Site', nivel: 2 }) }, cond: function () { return sa().evento === 'Compra' }, tit: T('Evento de conversão', 'Evento de conversión'), txt: T('“Cadastro concluído” não é compatível com as Lojas. Escolha “Compra”.', '“Registro completado” no es compatible con Tiendas. Elige “Compra”.'), dica: T('Escolha Compra.', 'Elige Compra.') },
    { alvo: '[data-t=sel-pos]', garante: function () { SIMSA.problema(); SIMSA.set({ formato: 'Carrossel', destino: 'Site', nivel: 2, evento: 'Compra' }) }, cond: function () { return sa().pos === 'Posicionamentos Advantage+ (todos)' }, tit: T('Posicionamentos', 'Ubicaciones'), txt: T('Só Messenger não inclui nenhum posicionamento compatível. Escolha “Posicionamentos Advantage+ (todos)”, a recomendação oficial.', 'Solo Messenger no incluye ninguna ubicación compatible. Elige “Ubicaciones Advantage+ (todas)”, la recomendación oficial.'), dica: T('Escolha Posicionamentos Advantage+ (todos).', 'Elige Ubicaciones Advantage+ (todas).') },
    { alvo: '[data-t=btn-avanca]', clique: true, garante: function () { SIMSA.problema(); SIMSA.set({ formato: 'Carrossel', destino: 'Site', nivel: 2, evento: 'Compra', pos: 'Posicionamentos Advantage+ (todos)' }) }, tit: T('Ir ao anúncio', 'Ir al anuncio'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-loja]', clique: true, garante: function () { SIMSA.problema(); SIMSA.set({ formato: 'Carrossel', destino: 'Site', nivel: 3, evento: 'Compra', pos: 'Posicionamentos Advantage+ (todos)' }) }, tit: T('Ligar o botão Loja', 'Activar el botón Tienda'), txt: T('Agora que o evento e o destino estão certos, o botão Loja ficou disponível. Ligue-o.', 'Ahora que el evento y el destino están bien, el botón Tienda quedó disponible. Actívalo.') },
    { alvo: '[data-t=resumo]', garante: function () { SIMSA.problema(); SIMSA.set({ formato: 'Carrossel', destino: 'Site', nivel: 3, evento: 'Compra', pos: 'Posicionamentos Advantage+ (todos)', lojaOn: true }) }, fim: true, semVolta: true, tit: T('Falta um ativo', 'Falta un activo'), txt: T('Formato, destino, evento, posicionamentos e botão Loja corrigidos. O que sobra é o Pixel ligado ao catálogo: isso se confere na conta comercial da loja, em Configurações › Fontes de eventos (aula “Antes de criar”). Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Formato, destino, evento, ubicaciones y botón Tienda corregidos. Lo que queda es el píxel vinculado al catálogo: eso se revisa en la cuenta comercial de la tienda, en Configuración › Orígenes de eventos (clase “Antes de crear”). Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['ler-relatorio-lojas'] = [
    { antes: function () { SIMSA.zera(); SIMSA.set({ tab: 'resultados' }) }, alvo: '[data-t=tabela-met]', garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'resultados' }) }, tit: T('Os números das Lojas', 'Los números de Tiendas'), txt: T('Os anúncios das Lojas otimizam para conversão e o resultado se avalia no site e na loja. A tabela mostra métricas recomendadas, não recomendadas e uma que não se aplica mais. Clique em Próximo.', 'Los anuncios de Tiendas optimizan para conversión y el resultado se evalúa en el sitio y en la tienda. La tabla muestra métricas recomendadas, no recomendadas y una que ya no se aplica. Haz clic en Siguiente.') },
    { alvo: '[data-t=met-comprasmeta] button', clique: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'resultados' }) }, tit: T('“Compras na Meta = 0”', '“Compras en Meta = 0”'), txt: T('Uma cliente se assustou com “Compras na Meta = 0”. Clique nessa métrica para entender.', 'Una clienta se asustó con “Compras en Meta = 0”. Haz clic en esa métrica para entender.') },
    { alvo: '[data-t=det-met]', garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'resultados', metSel: 'comprasmeta' }) }, tit: T('Não é erro', 'No es un error'), txt: T('As Lojas não têm mais finalização da compra no Facebook e no Instagram, então essa métrica aparece como 0. Clique em Próximo.', 'Las Tiendas ya no tienen finalización de compra en Facebook e Instagram, así que esta métrica aparece como 0. Haz clic en Siguiente.') },
    { alvo: '[data-t=met-saida] button', clique: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'resultados', metSel: 'comprasmeta' }) }, tit: T('Uma métrica enganosa', 'Una métrica engañosa'), txt: T('Agora clique em “Custo por clique de saída único”.', 'Ahora haz clic en “Costo por clic de salida único”.') },
    { alvo: '[data-t=det-met]', garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'resultados', metSel: 'saida' }) }, tit: T('Use cliques no link', 'Usa clics en el enlace'), txt: T('Cliques de saída não dão o panorama completo: use métricas de cliques no link e de compras. Clique em Próximo.', 'Los clics de salida no dan el panorama completo: usa métricas de clics en el enlace y de compras. Haz clic en Siguiente.') },
    { alvo: '[data-t=chk-rec]', clique: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'resultados', metSel: 'saida' }) }, tit: T('Só as recomendadas', 'Solo las recomendadas'), txt: T('Marque “Mostrar só as métricas recomendadas”.', 'Marca “Mostrar solo las métricas recomendadas”.') },
    { alvo: '[data-t=aviso-site]', fim: true, semVolta: true, garante: function () { SIMSA.zera(); SIMSA.set({ tab: 'resultados', soRec: true }) }, tit: T('Pronto para explicar 🎉', 'Listo para explicar 🎉'), txt: T('Se o site recebe mais tráfego que a loja, ele pode estar convertendo mais compradores. E contagens diferentes em ferramentas de terceiros são esperadas. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Si el sitio recibe más tráfico que la tienda, puede estar convirtiendo a más compradores. Y los conteos distintos en herramientas de terceros son esperables. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
