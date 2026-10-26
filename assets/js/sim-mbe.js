/* Simulador das Integrações de parceiros / Meta Business Extension (MBE) — visual da Lojinha.
   Estado no navegador (localStorage "sim.mbe"); nada é enviado à Meta.
   Real (Gerenciador de Eventos da conta de aula, 16/10/2026, PT e ES): a página Integrações (abas Minhas integrações | Galeria de parceiros), as recomendações “Google Tag Manager, Shopify, WooCommerce” e a Galeria de parceiros com as categorias e parceiros listados abaixo.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Sobre as Integrações de Parceiros para eventos do site”, “Integrações de parceiros do Facebook”, “Comparar as opções de configuração da API de Conversões” (custo, tempo, recursos) e “Como conceder acesso a ativos de negócios… para um parceiro”.
   Real (documentação para desenvolvedores da Meta, inglês, 16/10/2026): o fluxo do Meta Business Extension (FBE) permite ao lojista criar ou selecionar portfólio, Página e Pixel (e conta de anúncios); recomendado para parceiros com hospedagem de sites; não inclui catálogo; permissão privada manage_business_extension exige que um representante da Meta inclua o app na lista de permissões.
   NÃO visto: a janela do MBE funcionando dentro de uma plataforma parceira (exige conectar de verdade) — o fluxo do simulador é montado a partir da documentação e da Central de Ajuda (a conferir); a lista completa do “Ver tudo” da galeria.
   URL: meta-mbe.html?zerar=1
   Tutoriais (tour.js): ?tour=galeria-parceiros | conectar-extensao | escolher-capi | eventos-nao-chegam | dar-acesso-parceiro */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var CATS = [
    ['Produtos da Meta', [['Meta Pixel', 'Eventos da web'], ['Conversions API', 'Eventos da web'], ['Facebook SDK', 'Eventos do app'], ['Conversions API Gateway', 'Eventos da web'], ['Signals Gateway', 'Eventos da web']]],
    ['Comércio eletrônico', [['BigCommerce', 'Eventos da web'], ['3dcart', 'Eventos da web'], ['Facebook Marketplace', 'Sincro'], ['Ecwid', 'Eventos da web'], ['Eventbrite', 'Eventos da web']]],
    ['Análises', [['Google Analytics', 'Eventos da web'], ['TrackBee', 'Eventos da web • Eventos offline']]],
    ['Plataformas de site', [['Bandzoogle', 'Eventos da web'], ['Drupal', 'Eventos da web'], ['GoDaddy', 'Eventos da web'], ['Hotmart', 'Eventos da web'], ['Imweb', 'Eventos da web'], ['Jimdo', 'Eventos da web']]],
    ['Plataformas de dados do cliente', [['Adobe Real-Time CDP', 'Eventos da web'], ['Commanders Act', 'Eventos da web'], ['Exponea', 'Eventos da web'], ['Segment', 'Eventos do app • Eventos offline • Eventos da web'], ['Singular', 'Eventos do app'], ['Tealium', 'Eventos da web']]],
    ['CRM e software de marketing', [['HubSpot', 'Eventos da web • Eventos de CRM'], ['Infusionsoft', 'Eventos offline'], ['Salesforce', 'Eventos offline • Eventos de CRM'], ['Voyantis', 'Eventos da web'], ['CRM da Zoho', 'Eventos offline'], ['Privyr', 'Eventos de CRM']]],
    ['Gerenciamento de tags', [['Ensighten', 'Eventos da web'], ['Gerenciador de tags do Google', 'Eventos da web'], ['PixelYourSite', 'Eventos da web'], ['Stape', 'Eventos da web']]],
    ['Plataformas móveis', [['AppsFlyer', 'Eventos do app'], ['Adjust', 'Eventos do app'], ['mParticle', 'Eventos do app'], ['Branch', 'Eventos do app'], ['Kochava', 'Eventos do app']]]
  ];
  var FLUXO = ['Portfólio empresarial', 'Página', 'Pixel', 'Conta de anúncios', 'Confirmar'];
  var CENARIOS = [
    { id: 'shopify', t: 'Minha loja é na Shopify ou WooCommerce e eu não programo', res: 'Integração com parceiro de plataforma de comércio: alguns cliques, sem custo adicional (Shopify, WooCommerce, Wix, BigCommerce).' },
    { id: 'pixel', t: 'Já tenho o Pixel da Meta no site e quero a API de Conversões sem programar', res: 'API de Conversões habilitada pela Meta: um clique, grátis, só para web, e os eventos do Pixel são desduplicados automaticamente.' },
    { id: 'app', t: 'Quero enviar eventos de app ou de loja física (offline)', res: 'Integração direta: é a única opção disponível para eventos de app e offline. Exige um desenvolvedor.' },
    { id: 'gtm', t: 'Meu site usa o Gerenciador de tags do Google', res: 'Integração de parceiros: o Gerenciador de tags do Google é um parceiro da Meta; configure pela integração do parceiro.' }
  ];
  var SINTOMAS = [
    { id: 'semeventos', t: 'Conectei pela plataforma, mas não chegam eventos', res: 'Confira no Gerenciador de Eventos se o Pixel certo está recebendo atividade (Visão geral e Eventos de teste), se o plugin ou a extensão está na versão mais recente e se o parceiro selecionado é o da plataforma do site.' },
    { id: 'dupli', t: 'Os eventos de compra aparecem em dobro', res: 'Provável duplicação: o mesmo evento chegando pela extensão e por outro caminho (Pixel manual, Gerenciador de tags do Google). Veja o módulo anterior e deixe só um caminho.' },
    { id: 'catalogo', t: 'O catálogo não aparece depois de conectar', res: 'O fluxo do MBE para Pixel e API de Conversões não inclui catálogo: o catálogo se conecta por outro caminho (Gerenciador de Comércio). Verifique se o catálogo está ligado ao Pixel.' },
    { id: 'acesso', t: 'A agência não consegue ver o Pixel nem a Página', res: 'O parceiro precisa de acesso aos ativos: com controle total do portfólio, em Parceiros, use Conceder a um parceiro acesso aos seus recursos, com a identificação do portfólio dele e o nível de acesso.' },
    { id: 'naolistada', t: 'Minha plataforma não está na galeria', res: 'Se a plataforma não estiver listada, configure a API de Conversões manualmente (integração direta) ou fale com o provedor de serviços.' }
  ];
  function inicial() { return { tab: 'galeria', cat: 'Todas as categorias', par: '', etapa: 0, portf: '', pagina: '', pixel: '', conta: '', conectado: false, cenario: '', sintoma: '', ac: { ctrl: true, passo: 0, id: '', nivel: '', ativos: false, feito: false } } }
  var S = ler('sim.mbe', null) || inicial();
  if (params.get('zerar')) S = inicial();
  function grava() { try { localStorage.setItem('sim.mbe', JSON.stringify(S)) } catch (e) { } window.__simMb = { S: S } }
  grava();
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento das Integrações de parceiros (MBE) · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function nav() {
    var t = [['galeria', '🧩 Galeria de parceiros'], ['conectar', '🔌 Conectar pela plataforma'], ['capi', '⚖️ Opções da API de Conversões'], ['problemas', '🩺 Problemas comuns'], ['acesso', '🤝 Dar acesso a um parceiro']];
    return '<nav class="ss-nav">' + t.map(function (x) { return '<button class="ss-it' + (S.tab === x[0] ? ' on' : '') + '" data-tab="' + x[0] + '" data-t="tab-' + x[0] + '">' + x[1] + '</button>' }).join('') + '</nav>';
  }
  function selOpt(id, lista, v, t) { return '<select class="ga-in" id="' + id + '" data-t="' + t + '">' + lista.map(function (o) { return '<option value="' + o[0] + '" data-pt="' + esc(o[1]) + '"' + (o[0] === v ? ' selected' : '') + '>' + o[1] + '</option>' }).join('') + '</select>' }
  function telaGaleria() {
    var nomes = [['Todas as categorias', 'Todas as categorias']].concat(CATS.map(function (c) { return [c[0], c[0]] }));
    var blocos = CATS.filter(function (c) { return S.cat === 'Todas as categorias' || S.cat === c[0] }).map(function (c) {
      return '<h3>' + c[0] + '</h3><div class="mb-grade">' + c[1].map(function (p) { return '<button class="btn ' + (S.par === p[0] ? '' : 'sec') + ' mb-par" data-par="' + esc(p[0]) + '" data-t="parceiro-' + p[0].toLowerCase().replace(/[^a-z0-9]+/g, '-') + '">' + p[0] + '<br><small>' + p[1] + '</small></button>' }).join('') + '</div>';
    }).join('');
    var det = '';
    if (S.par) { var found = null; CATS.forEach(function (c) { c[1].forEach(function (p) { if (p[0] === S.par) found = p }) }); det = '<div class="vf-caixa" data-t="det-parceiro"><b>' + esc(S.par) + '</b><br>' + (found ? found[1] : '') + '<p class="miudo">Parceiro da galeria. Para configurar, siga as instruções que aparecem ao escolher o parceiro (tela do simulador, a conferir).</p></div>' }
    return '<h1>Integrações</h1><p class="ss-sub">Conecte os dados de marketing da sua empresa e confira insights para otimizar as campanhas de anúncios.</p>' +
      '<div class="ss-bt"><span class="ga-lin"><b>Minhas integrações</b></span> <span class="ga-lin"><b>· Galeria de parceiros</b></span></div>' +
      '<div class="ga-aviso" data-t="recomend">Você não tem dados conectados. Recomendações de parceiros com base no site da sua empresa: <b>Google Tag Manager</b> (Eventos da web) · <b>Shopify</b> (Eventos da web) · <b>WooCommerce</b> (Eventos da web).</div>' +
      '<p>Filtrar por categoria: ' + selOpt('mbCat', nomes, S.cat, 'filtro-cat') + '</p><div data-t="lista-parceiros">' + blocos + '</div>' + det +
      '<p class="conferido">✓ Esta página, as recomendações e a galeria (categorias e parceiros listados) foram vistas de verdade no Gerenciador de Eventos em ' + CONF + ' (PT e ES). A lista completa (“Ver tudo”) e a tela de cada parceiro não foram vistas (a conferir).</p>';
  }
  function telaConectar() {
    var e = S.etapa, corpo = '', pode = true;
    var cab = '<ol class="vf-pas">' + FLUXO.map(function (n, i) { return '<li class="' + (i === e ? 'on' : i < e ? 'ok' : '') + '">' + n + '</li>' }).join('') + '</ol>';
    if (S.conectado) return '<h1>Conectar pela plataforma (MBE)</h1><div class="ga-aviso ok" data-t="mbe-final"><b>✓ Conectado.</b> A plataforma parceira agora envia eventos da web para a Meta (Pixel no navegador e API de Conversões no servidor) usando: portfólio <b>' + esc(S.portf) + '</b>, Página <b>' + esc(S.pagina) + '</b>, Pixel <b>' + esc(S.pixel) + '</b>, conta de anúncios <b>' + esc(S.conta) + '</b>.</div><p class="miudo">Esse fluxo não inclui o catálogo: ele se conecta por outro caminho.</p><button class="btn sec" data-acao="reinicia" data-t="btn-reinicia">Recomeçar</button>' +
      '<p class="conferido">✓ O que o fluxo cria ou seleciona (portfólio, Página, Pixel e conta de anúncios) e a ausência de catálogo vêm da documentação do Meta Business Extension (' + CONF + '). ⚠ As telas são do simulador (a conferir).</p>';
    if (e === 0) { corpo = '<h3>Entre e escolha o portfólio empresarial</h3><p class="miudo">A janela do MBE abre dentro da plataforma do lojista (por exemplo, Shopify). Escolha ou crie um portfólio.</p><label class="ga-lin"><input type="radio" name="mbP" value="Lojinha da Marina Aula"' + (S.portf === 'Lojinha da Marina Aula' ? ' checked' : '') + ' data-t="mb-portf"/><span>Lojinha da Marina Aula</span></label><label class="ga-lin"><input type="radio" name="mbP" value="Novo portfólio"' + (S.portf === 'Novo portfólio' ? ' checked' : '') + '/><span>Criar um novo portfólio</span></label>'; pode = !!S.portf }
    else if (e === 1) { corpo = '<h3>Escolha a Página</h3><label class="ga-lin"><input type="radio" name="mbPg" value="Lojinha da Marina - Ficticio"' + (S.pagina === 'Lojinha da Marina - Ficticio' ? ' checked' : '') + ' data-t="mb-pagina"/><span>Lojinha da Marina - Ficticio</span></label><label class="ga-lin"><input type="radio" name="mbPg" value="Outra Página (exemplo)"' + (S.pagina === 'Outra Página (exemplo)' ? ' checked' : '') + '/><span>Outra Página (exemplo)</span></label>'; pode = !!S.pagina }
    else if (e === 2) { corpo = '<h3>Crie ou selecione o Pixel</h3><label class="ga-lin"><input type="radio" name="mbPx" value="Pixel da Lojinha (novo)"' + (S.pixel === 'Pixel da Lojinha (novo)' ? ' checked' : '') + ' data-t="mb-pixel"/><span>Criar um novo Pixel</span></label><label class="ga-lin"><input type="radio" name="mbPx" value="Pixel existente"' + (S.pixel === 'Pixel existente' ? ' checked' : '') + '/><span>Usar um Pixel que já existe</span></label><p class="miudo">Se o site já tem um Pixel instalado à mão, escolher um novo Pixel ou deixar os dois ativos pode gerar eventos duplicados.</p>'; pode = !!S.pixel }
    else if (e === 3) { corpo = '<h3>Conta de anúncios</h3><label class="ga-lin"><input type="radio" name="mbCt" value="Lojinha da Marina Aula (3659357964239462)"' + (S.conta ? ' checked' : '') + ' data-t="mb-conta"/><span>Lojinha da Marina Aula (3659357964239462)</span></label>'; pode = !!S.conta }
    else { corpo = '<h3>Confirmar</h3><p>Portfólio: <b>' + esc(S.portf) + '</b><br>Página: <b>' + esc(S.pagina) + '</b><br>Pixel: <b>' + esc(S.pixel) + '</b><br>Conta de anúncios: <b>' + esc(S.conta) + '</b></p><p class="miudo">Ao concluir, a plataforma parceira poderá enviar eventos em seu nome, pelo navegador e pelo servidor.</p>' }
    return '<h1>Conectar pela plataforma (MBE)</h1><p class="ss-sub">O que o lojista faz na janela da Meta, dentro da plataforma parceira.</p>' + cab + '<div class="vf-caixa" data-t="mbe-corpo">' + corpo + '</div><div class="rodape-jan">' + (e ? '<button class="btn sec" data-acao="volta" data-t="btn-mbe-volta">Voltar</button>' : '') + '<button class="btn" data-acao="' + (e === 4 ? 'conclui' : 'avanca') + '" data-t="btn-mbe-avanca"' + (pode ? '' : ' disabled') + '>' + (e === 4 ? 'Concluir' : 'Continuar') + '</button></div>' +
      '<p class="conferido">✓ O que o fluxo cria ou seleciona (portfólio, Página, Pixel, conta de anúncios) e que ele não inclui catálogo vêm da documentação do Meta Business Extension (' + CONF + '). ⚠ As telas e a ordem são do simulador: a janela real só aparece dentro de uma plataforma parceira (a conferir).</p>';
  }
  function telaCapi() {
    var c = CENARIOS.filter(function (x) { return x.id === S.cenario })[0];
    return '<h1>Opções de configuração da API de Conversões</h1><table class="cm-tab" data-t="tabela-capi"><thead><tr><th></th><th>Habilitada pela Meta</th><th>Integração direta</th><th>Parceiros da Meta</th></tr></thead><tbody>' +
      '<tr><td>Custo</td><td>Grátis</td><td>Varia com o desenvolvimento e a manutenção</td><td>Depende do parceiro</td></tr>' +
      '<tr><td>Tempo</td><td>Um clique</td><td>2 a 4 semanas (1 a 2 se já enviava eventos do site)</td><td>Depende do parceiro</td></tr>' +
      '<tr><td>Recursos</td><td>Pixel da Meta</td><td>Desenvolvedor</td><td>Dependem do parceiro</td></tr>' +
      '<tr><td>Fonte da ação</td><td>Web</td><td>Web, app, offline, CRM, mensagens</td><td>Dependem do parceiro</td></tr></tbody></table>' +
      '<h3>Qual opção para cada cliente?</h3>' + selOpt('mbCen', [['', 'Escolha um cenário…']].concat(CENARIOS.map(function (x) { return [x.id, x.t] })), S.cenario, 'sel-cenario') +
      (c ? '<div class="ga-aviso" data-t="res-capi"><b>Recomendação:</b> ' + c.res + '</div>' : '') +
      '<p class="conferido">✓ A tabela e as descrições das opções vêm do artigo “Comparar as opções de configuração da API de Conversões” (Central de Ajuda, ' + CONF + '). ⚠ Os cenários e as recomendações são do simulador, montados a partir do artigo (a conferir).</p>';
  }
  function telaProblemas() {
    var c = SINTOMAS.filter(function (x) { return x.id === S.sintoma })[0];
    return '<h1>Problemas comuns com integrações de parceiros</h1><p class="ss-sub">Escolha o que o cliente relata.</p>' + selOpt('mbSin', [['', 'Escolha um sintoma…']].concat(SINTOMAS.map(function (x) { return [x.id, x.t] })), S.sintoma, 'sel-sintoma') +
      (c ? '<div class="vf-caixa" data-t="res-triagem"><b>O que olhar:</b><p>' + c.res + '</p></div>' : '') +
      '<div class="ga-aviso" data-t="boas-praticas"><b>Boas práticas:</b> atualize os plugins ou extensões para a versão mais recente; use integrações de parceiros para evitar erros de código manuais; monitore o rastreamento de eventos no Gerenciador de Eventos para conferir a integridade e a precisão.</div>' +
      '<p class="conferido">✓ As boas práticas e a lista de plataformas vêm do artigo “Sobre as Integrações de Parceiros para eventos do site” e a causa “catálogo fora do fluxo”, da documentação do MBE (' + CONF + '). ⚠ A triagem é do simulador (a conferir).</p>';
  }
  function telaAcesso() {
    var a = S.ac, corpo = '';
    if (a.feito) return '<h1>Dar acesso a um parceiro</h1><div class="ga-aviso ok" data-t="ac-final"><b>✓ Ativos atribuídos.</b> A agência (portfólio ' + esc(a.id) + ') recebeu acesso ' + esc(a.nivel) + ' ao Pixel e à Página. Outra pessoa com controle total pode precisar aprovar. Os dois lados veem os ativos compartilhados nas Configurações dos respectivos portfólios.</div><button class="btn sec" data-acao="ac-reinicia" data-t="btn-ac-reinicia">Recomeçar</button>';
    var p = a.passo;
    corpo += '<label class="ga-lin"><input type="checkbox" id="acCtrl"' + (a.ctrl ? ' checked' : '') + ' data-t="chk-ctrl"/><span>Eu tenho controle total do portfólio empresarial</span></label>';
    if (p === 0) corpo += '<p>Meta Business Suite › <b>Configurações</b> (do portfólio da empresa).</p><button class="btn" data-acao="ac-1" data-t="btn-ac1">Abrir Configurações</button>';
    else if (p === 1) corpo += (a.ctrl ? '<p>No menu da esquerda, seção Usuários, clique em <b>Parceiros</b>.</p><button class="btn" data-acao="ac-2" data-t="btn-ac2">Parceiros</button>' : '<div class="ga-aviso verm" data-t="sem-parceiros">Você não vê “Parceiros”: talvez não tenha controle total do portfólio. Só quem tem controle total pode compartilhar ativos com parceiros.</div>');
    else if (p === 2) corpo += '<p>Clique em Adicionar e selecione <b>Conceder a um parceiro acesso aos seus recursos</b>.</p><button class="btn" data-acao="ac-3" data-t="btn-ac3">Conceder a um parceiro acesso aos seus recursos</button>';
    else if (p === 3) corpo += '<p>Informe a identificação do portfólio empresarial do <b>parceiro</b> (peça a ele; fica nas Configurações do portfólio dele).</p><input class="ga-in" id="acId" placeholder="Identificação do portfólio do parceiro" value="' + esc(a.id) + '" data-t="in-id-parceiro"/> <button class="btn" data-acao="ac-4" data-t="btn-ac4"' + (a.id ? '' : ' disabled') + '>Avançar</button>';
    else if (p === 4) corpo += '<p>Escolha os ativos e o nível de acesso.</p><label class="ga-lin"><input type="checkbox" id="acAtv"' + (a.ativos ? ' checked' : '') + ' data-t="chk-ativos"/><span>Pixel (conjunto de dados) e Página</span></label>' + selOpt('acNivel', [['', 'Nível de acesso…'], ['parcial', 'Acesso parcial (tarefas específicas)'], ['total', 'Controle total do ativo']], a.nivel, 'sel-nivel') + '<p class="miudo">Com controle total o parceiro gerencia tudo, mas não pode compartilhar o ativo com outra empresa. O acesso parcial dá permissões para tarefas específicas.</p><button class="btn" data-acao="ac-5" data-t="btn-ac5"' + (a.ativos && a.nivel ? '' : ' disabled') + '>Atribuir ativos</button>';
    return '<h1>Dar acesso a um parceiro</h1><p class="ss-sub">Para uma agência ou plataforma ver o Pixel e a Página do cliente.</p><div class="vf-caixa" data-t="ac-corpo">' + corpo + '</div>' +
      '<p class="conferido">✓ Os passos e as regras (só com controle total; ID do portfólio do parceiro; controle total × acesso parcial; aprovação por outra pessoa) vêm do artigo “Como conceder acesso a ativos de negócios no seu portfólio empresarial para um parceiro” (Central de Ajuda, ' + CONF + '). ⚠ As telas são do simulador (a conferir).</p>';
  }
  function pagina() {
    var corpo = S.tab === 'galeria' ? telaGaleria() : S.tab === 'conectar' ? telaConectar() : S.tab === 'capi' ? telaCapi() : S.tab === 'problemas' ? telaProblemas() : telaAcesso();
    return casca('<div class="ss">' + nav() + '<main class="ss-main">' + corpo + '</main></div>');
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); grava(); render(); return }
    if ((c = t.closest('[data-par]'))) { S.par = c.getAttribute('data-par'); grava(); render(); return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-acao'), a = S.ac;
    if (ac === 'avanca') S.etapa = Math.min(4, S.etapa + 1);
    else if (ac === 'volta') S.etapa = Math.max(0, S.etapa - 1);
    else if (ac === 'conclui') S.conectado = true;
    else if (ac === 'reinicia') { S.conectado = false; S.etapa = 0; S.portf = S.pagina = S.pixel = S.conta = '' }
    else if (/^ac-[1-5]$/.test(ac)) { var n = parseInt(ac.slice(3), 10); if (n === 5) a.feito = true; else a.passo = n }
    else if (ac === 'ac-reinicia') S.ac = { ctrl: true, passo: 0, id: '', nivel: '', ativos: false, feito: false };
    else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'mbCat') S.cat = t.value;
    else if (t.name === 'mbP') S.portf = t.value; else if (t.name === 'mbPg') S.pagina = t.value; else if (t.name === 'mbPx') S.pixel = t.value; else if (t.name === 'mbCt') S.conta = t.value;
    else if (t.id === 'mbCen') S.cenario = t.value; else if (t.id === 'mbSin') S.sintoma = t.value;
    else if (t.id === 'acCtrl') S.ac.ctrl = t.checked; else if (t.id === 'acAtv') S.ac.ativos = t.checked; else if (t.id === 'acNivel') S.ac.nivel = t.value;
    else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) { if (ev.target.id === 'acId') { S.ac.id = ev.target.value; grava(); var b = document.getElementById('acId'); var bt = document.querySelector('[data-t=btn-ac4]'); if (bt) bt.disabled = !S.ac.id } });
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simMb = { S: S };
  }
  window.SIMMB = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, setAc: function (o) { for (var k in o) S.ac[k] = o[k]; grava(); render() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function mb() { return window.__simMb ? window.__simMb.S : S }
  TOURS['galeria-parceiros'] = [
    { antes: function () { SIMMB.zera() }, alvo: '[data-t=recomend]', garante: function () { SIMMB.zera() }, tit: T('Integrações no Gerenciador de Eventos', 'Integraciones en el Administrador de eventos'), txt: T('No Gerenciador de Eventos, a página Integrações recomenda parceiros com base no site da empresa: aqui, Google Tag Manager, Shopify e WooCommerce. Clique em Próximo.', 'En el Administrador de eventos, la página Integraciones recomienda socios según el sitio de la empresa: aquí, Google Tag Manager, Shopify y WooCommerce. Haz clic en Siguiente.') },
    { alvo: '[data-t=filtro-cat]', garante: function () { SIMMB.zera() }, cond: function () { return mb().cat === 'Comércio eletrônico' }, tit: T('Filtrar por categoria', 'Filtrar por categoría'), txt: T('A Galeria de parceiros tem categorias. Filtre por “Comércio eletrônico”.', 'La Galería de socios tiene categorías. Filtra por “Comercio electrónico”.'), dica: T('Escolha Comércio eletrônico.', 'Elige Comercio electrónico.') },
    { alvo: '[data-t=parceiro-bigcommerce]', clique: true, garante: function () { SIMMB.zera(); SIMMB.set({ cat: 'Comércio eletrônico' }) }, tit: T('Escolher um parceiro', 'Elegir un socio'), txt: T('Clique em BigCommerce.', 'Haz clic en BigCommerce.') },
    { alvo: '[data-t=det-parceiro]', garante: function () { SIMMB.zera(); SIMMB.set({ cat: 'Comércio eletrônico', par: 'BigCommerce' }) }, tit: T('Eventos da web', 'Eventos web'), txt: T('Cada parceiro mostra o tipo de evento que envia: BigCommerce envia Eventos da web. Já Segment, por exemplo, envia eventos de app, offline e da web. Clique em Próximo.', 'Cada socio muestra el tipo de evento que envía: BigCommerce envía Eventos web. En cambio Segment, por ejemplo, envía eventos de la app, offline y web. Haz clic en Siguiente.') },
    { alvo: '[data-t=lista-parceiros]', fim: true, semVolta: true, garante: function () { SIMMB.zera(); SIMMB.set({ cat: 'Comércio eletrônico', par: 'BigCommerce' }) }, tit: T('Achou o parceiro 🎉', '¡Encontraste el socio! 🎉'), txt: T('Se a plataforma do cliente estiver na galeria, a integração dispensa editar o código. Se não estiver, a API de Conversões é manual. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Si la plataforma del cliente está en la galería, la integración evita editar el código. Si no está, la API de Conversiones es manual. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['escolher-capi'] = [
    { antes: function () { SIMMB.zera(); SIMMB.set({ tab: 'capi' }) }, alvo: '[data-t=tabela-capi]', garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'capi' }) }, tit: T('Três formas de configurar', 'Tres formas de configurar'), txt: T('Há três formas: habilitada pela Meta (um clique, grátis, só web), integração direta (precisa de desenvolvedor, serve a app e offline) e parceiros (depende do parceiro). Clique em Próximo.', 'Hay tres formas: habilitada por Meta (un clic, gratis, solo web), integración directa (necesita desarrollador, sirve a app y offline) y socios (depende del socio). Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-cenario]', garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'capi' }) }, cond: function () { return mb().cenario === 'pixel' }, tit: T('Cliente 1', 'Cliente 1'), txt: T('Um cliente já tem o Pixel no site e quer a API de Conversões sem programar. Escolha esse cenário.', 'Un cliente ya tiene el píxel en el sitio y quiere la API de Conversiones sin programar. Elige ese escenario.'), dica: T('Escolha “Já tenho o Pixel da Meta no site e quero a API de Conversões sem programar”.', 'Elige “Ya tengo el píxel de Meta en el sitio y quiero la API de Conversiones sin programar”.') },
    { alvo: '[data-t=res-capi]', garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'capi', cenario: 'pixel' }) }, tit: T('Um clique', 'Un clic'), txt: T('A API de Conversões habilitada pela Meta: um clique, grátis, só web, com desduplicação automática. Clique em Próximo.', 'La API de Conversiones habilitada por Meta: un clic, gratis, solo web, con deduplicación automática. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-cenario]', garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'capi', cenario: 'pixel' }) }, cond: function () { return mb().cenario === 'app' }, tit: T('Cliente 2', 'Cliente 2'), txt: T('Outro cliente quer enviar eventos de app e de loja física. Escolha esse cenário.', 'Otro cliente quiere enviar eventos de app y de tienda física. Elige ese escenario.'), dica: T('Escolha “Quero enviar eventos de app ou de loja física (offline)”.', 'Elige “Quiero enviar eventos de app o de tienda física (offline)”.') },
    { alvo: '[data-t=res-capi]', fim: true, semVolta: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'capi', cenario: 'app' }) }, tit: T('Só integração direta 🎉', '¡Solo integración directa! 🎉'), txt: T('Para eventos de app e offline, a integração direta é a única opção, e exige desenvolvedor. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Para eventos de app y offline, la integración directa es la única opción, y exige desarrollador. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['dar-acesso-parceiro'] = [
    { antes: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }) }, alvo: '[data-t=chk-ctrl]', garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }) }, tit: T('Primeiro: controle total', 'Primero: control total'), txt: T('Só quem tem controle total do portfólio pode compartilhar ativos com parceiros. Aqui, você tem. Clique em Próximo.', 'Solo quien tiene control total del portfolio puede compartir activos con socios. Aquí, lo tienes. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-ac1]', clique: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }) }, tit: T('Configurações', 'Configuración'), txt: T('Abra as Configurações do portfólio.', 'Abre la Configuración del portfolio.') },
    { alvo: '[data-t=btn-ac2]', clique: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }); SIMMB.setAc({ passo: 1 }) }, tit: T('Parceiros', 'Socios'), txt: T('Em Usuários, clique em Parceiros. Se não aparecer, falta controle total.', 'En Usuarios, haz clic en Socios. Si no aparece, falta control total.') },
    { alvo: '[data-t=btn-ac3]', clique: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }); SIMMB.setAc({ passo: 2 }) }, tit: T('Conceder acesso', 'Conceder acceso'), txt: T('Clique em Conceder a um parceiro acesso aos seus recursos.', 'Haz clic en Conceder a un socio acceso a tus recursos.') },
    { alvo: '[data-t=in-id-parceiro]', garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }); SIMMB.setAc({ passo: 3 }) }, cond: function () { return /^123456789012345/.test(mb().ac.id || '') }, tit: T('Identificação do parceiro', 'Identificación del socio'), txt: T('Peça à agência a identificação do portfólio dela e digite. Use 123456789012345.', 'Pide a la agencia la identificación de su portfolio y escríbela. Usa 123456789012345.'), dica: T('Digite 123456789012345.', 'Escribe 123456789012345.') },
    { alvo: '[data-t=btn-ac4]', clique: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }); SIMMB.setAc({ passo: 3, id: '123456789012345' }) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=chk-ativos]', clique: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }); SIMMB.setAc({ passo: 4, id: '123456789012345' }) }, tit: T('Os ativos', 'Los activos'), txt: T('Marque o Pixel e a Página.', 'Marca el píxel y la página.') },
    { alvo: '[data-t=sel-nivel]', garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }); SIMMB.setAc({ passo: 4, id: '123456789012345', ativos: true }) }, cond: function () { return mb().ac.nivel === 'parcial' }, tit: T('Nível de acesso', 'Nivel de acceso'), txt: T('Prefira o acesso parcial, só para as tarefas necessárias. Com controle total, o parceiro gerencia tudo. Escolha “parcial”.', 'Prefiere el acceso parcial, solo para las tareas necesarias. Con control total, el socio administra todo. Elige “parcial”.'), dica: T('Escolha “Acesso parcial (tarefas específicas)”.', 'Elige “Acceso parcial (tareas específicas)”.') },
    { alvo: '[data-t=btn-ac5]', clique: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }); SIMMB.setAc({ passo: 4, id: '123456789012345', ativos: true, nivel: 'parcial' }) }, tit: T('Atribuir ativos', 'Asignar activos'), txt: T('Clique em Atribuir ativos.', 'Haz clic en Asignar activos.') },
    { alvo: '[data-t=ac-final]', fim: true, semVolta: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'acesso' }); SIMMB.setAc({ passo: 4, id: '123456789012345', ativos: true, nivel: 'parcial', feito: true }) }, tit: T('Acesso concedido 🎉', '¡Acceso concedido! 🎉'), txt: T('A agência recebeu acesso parcial. Outra pessoa com controle total pode precisar aprovar, e os dois lados veem os ativos compartilhados nas Configurações. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'La agencia recibió acceso parcial. Otra persona con control total puede necesitar aprobar, y los dos lados ven los activos compartidos en Configuración. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
