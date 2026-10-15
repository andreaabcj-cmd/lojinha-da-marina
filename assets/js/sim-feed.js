/* Simulador do Gerenciador de Anúncios › nível do anúncio (criativo, texto, destino, posicionamentos e prévia) — layout fiel, visual da Lojinha.
   Estado no navegador (localStorage "sim.feed"); nada é enviado à Meta.
   Textos copiados das telas reais (conta de aula, rascunho de Vendas, 16/10/2026), em português e em espanhol (?locale=es_LA).
   O que não foi visto de verdade fica marcado "a conferir". Ver _roteiro/telas_gerenciador_anuncios.md.
   URL: meta-feed.html?zerar=1 (anúncio vazio) · ?exemplo=1 (já com mídia e texto) · ?problemas=1 (mídia em Original, sem URL)
   Tutoriais (tour.js): ?tour=montar-criativo | ver-previa | destino-botao | resolver-criativo */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }

  var PAGINA = 'Lojinha da Marina - Fictício';
  var MIDIAS = [
    { id: 'm1', nome: 'caneca-azul', img: 'assets/img/caneca_01.png', w: 1080, h: 1080 },
    { id: 'm2', nome: 'camiseta-montanha', img: 'assets/img/camiseta_02.png', w: 1080, h: 1350 },
    { id: 'm3', nome: 'ecobag-folha', img: 'assets/img/ecobag_03.png', w: 1920, h: 1080 }
  ];
  var GRUPOS = {
    feeds: { nome: 'Feeds, Anúncios in-stream para reels', n: 10, cortes: ['orig', '1:1', '9:16', '1,91:1', '4:5'], rec: '1:1', frame: 'livre' },
    stories: { nome: 'Stories, Status e Reels, Resultados da pesquisa, Apps e sites', n: 8, cortes: ['orig', '9:16', '1:1', '1,91:1'], rec: '9:16', frame: 9 / 16 },
    coluna: { nome: 'Coluna da direita, Resultados da pesquisa', n: 2, cortes: ['orig', '1:1', '1,91:1'], rec: '1,91:1', frame: 1.91 }
  };
  var RAZAO = { '1:1': 1, '9:16': 9 / 16, '1,91:1': 1.91, '4:5': 0.8 };
  var CORTE_NOME = { 'orig': 'Original', '1:1': 'Quadrado', '9:16': 'Vertical em tela cheia', '1,91:1': 'Horizontal', '4:5': 'Vertical' };
  var CTAS = ['Ver detalhes', 'Saiba mais', 'Comprar agora', 'Cadastre-se', 'Enviar mensagem', 'Ligar agora', 'Nenhum botão'];

  function inicial() {
    return { pagina: '', formato: 'unica', multi: true, url: '', linkVis: false, midia: '', principal: '', titulo: '', desc: '', cta: 'Ver detalhes', tentou: false, publicado: false,
      aprim: { sobrep: false, retoques: false, texto: false, cta: false, etiq: false, musica: true, animacao: true },
      corte: { feeds: 'orig', stories: 'orig', coluna: 'orig' } };
  }
  function comMidia(s) { s.pagina = PAGINA; s.midia = 'm1'; s.principal = 'Canecas feitas com carinho. Peça a sua!'; s.titulo = 'Caneca azul'; s.cta = 'Ver detalhes'; return s }
  var S = ler('sim.feed', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('exemplo')) { S = comMidia(inicial()) }
  if (params.get('problemas')) { S = comMidia(inicial()) }
  var W = { passo: -1, sel: '', menu: false };     // assistente de mídia
  var G = { g: '', sel: '' };                      // janela "Editar grupo"
  var P = 'todo';                                  // aba da prévia
  function grava() { try { localStorage.setItem('sim.feed', JSON.stringify(S)) } catch (e) { } window.__simFd = { S: S, W: W, G: G } }
  grava();

  function rota() { return (location.hash || '#anu').slice(1) }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }
  function md() { return MIDIAS.filter(function (m) { return m.id === S.midia })[0] }
  function faltas() {
    var f = [];
    if (!S.pagina) f.push('Anúncio: selecione a Página do Facebook.');
    if (!S.midia) f.push('Anúncio: especifique a mídia para veicular com este anúncio.');
    if (!/^https?:\/\/\S+\.\S+/.test(S.url.trim())) f.push('Anúncio: insira o URL do site que as pessoas visitam depois do anúncio.');
    return f;
  }

  function casca(corpo) {
    return '<div class="sim-faixa">🧪 Simulador de treinamento do Gerenciador de Anúncios · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo;
  }
  function conferido(ok) { return ok === false ? '<p class="conferido pendente">⚠ Esta parte ainda não foi vista na tela real · a conferir</p>' : '<p class="conferido">✓ Tela conferida com o Gerenciador de Anúncios real em ' + CONF + ' (conta de aula, em rascunho)</p>' }
  function corteTxt(c, rec) { return '<b>' + CORTE_NOME[c] + '</b>' + (c === 'orig' ? '' : '<small>' + c + (rec ? ' (recomendado)' : '') + '</small>') }

  /* ---------- prévia: o mesmo criativo em cada grupo de posicionamento ---------- */
  function quadro(g) {
    var m = md(); if (!m) return '';
    var c = S.corte[g], r = c === 'orig' ? m.w / m.h : RAZAO[c], gr = GRUPOS[g], f = gr.frame === 'livre' ? r : gr.frame;
    var ajuste = r > f ? 'width:100%' : 'height:100%';
    var img = c === 'orig' ? 'background:url(' + m.img + ') center/contain no-repeat #EAF1FB' : 'background:url(' + m.img + ') center/cover #EAF1FB';
    return '<div class="fd-quadro" style="aspect-ratio:' + f.toFixed(4) + '"><div class="fd-img" style="aspect-ratio:' + r.toFixed(4) + ';' + ajuste + ';' + img + '" data-t="img-' + g + '"></div></div>';
  }
  function cartao(g) {
    var btn = S.cta === 'Nenhum botão' ? '' : '<span class="fd-cta">' + esc(S.cta) + '</span>';
    return '<div class="fd-card" data-t="card-' + g + '"><div class="fd-cab"><b>' + PAGINA + '</b><small>Anúncio</small></div>' +
      (S.principal ? '<p class="fd-txt">' + esc(S.principal) + '</p>' : '') + quadro(g) +
      '<div class="fd-rod"><div><b>' + esc(S.titulo || 'Título') + '</b>' + (S.desc ? '<small>' + esc(S.desc) + '</small>' : '') + '</div>' + btn + '</div>' +
      '<div class="fd-acoes"><span>Curtir</span><span>Comentar</span><span>Compartilhar</span></div></div>';
  }
  function previa() {
    var abas = [['todo', 'Todo'], ['feeds', 'Feeds, In-stream para Reels'], ['stories', 'Stories, Status e Reels, Resultados da pesquisa, Apps e sites'], ['coluna', 'Coluna da direita, Resultados da pesquisa']];
    var corpo;
    if (!S.midia) corpo = '<div class="fd-vazio">Adicione mídia para ver exemplos de anúncio.</div>';
    else if (P === 'todo') corpo = ['feeds', 'stories', 'coluna'].map(function (g) { return '<div class="fd-col"><small class="fd-rot">' + (g === 'feeds' ? 'Feeds' : g === 'stories' ? 'Stories e Reels' : 'Coluna da direita') + '</small>' + cartao(g) + '</div>' }).join('');
    else corpo = '<div class="fd-col">' + cartao(P) + '</div>';
    return '<div class="fd-prev" data-t="previa"><div class="fd-prev-topo"><b>Prévia do anúncio</b><button class="btn sec" disabled>Analisar configurações padrão <span class="ga-tag am">11</span></button></div>' +
      '<div class="fd-abas" data-t="prev-abas">' + abas.map(function (a) { return '<button class="fd-aba' + (P === a[0] ? ' on' : '') + '" data-aba="' + a[0] + '" data-t="aba-' + a[0] + '"' + (!S.midia ? ' disabled' : '') + '>' + a[1] + '</button>' }).join('') + '</div>' +
      '<div class="fd-corpo' + (P === 'todo' ? ' tres' : '') + '">' + corpo + '</div>' +
      '<p class="miudo">A exibição dos anúncios e a interação com eles podem variar dependendo do dispositivo, do formato e de outros fatores.</p></div>';
  }

  /* ---------- editor (campanha › conjunto › anúncio) ---------- */
  function editor(nivel, form) {
    var arv = '<div data-t="arvore"><button class="ga-no" disabled>🎯 Nova campanha de Vendas<small>Campanha · padrão</small></button>' +
      '<button class="ga-no f1' + (nivel === 'pos' ? ' on' : '') + '" data-ir="pos" data-t="no-conj">👥 Novo conjunto de anúncios de Vendas<small>Conjunto de anúncios · padrão</small></button>' +
      '<button class="ga-no f2' + (nivel === 'anu' ? ' on' : '') + '" data-ir="anu" data-t="no-anu">🖼️ Novo anúncio de Vendas<small>Anúncio · padrão</small></button></div>';
    var pont = S.midia ? '<div class="ga-pont am">78</div><p class="miudo">Sua campanha ainda pode melhorar mais.</p>' : '<div class="ga-pont">100</div><p class="miudo">Você está usando nossa configuração recomendada.</p>';
    return casca('<div class="ga"><div class="ga-topo"><h1>Em rascunho</h1><span class="ga-conta">Conta de aula da Lojinha (ID 123456789)</span><button class="btn sec" disabled>Editar</button><button class="btn sec" disabled>Analisar</button></div>' +
      '<div class="ga-ed fd-ed"><aside class="ga-arv">' + arv + '</aside><main class="ga-form" id="gaForm">' + form + '</main>' +
      '<aside class="ga-dir"><b>Pontuação da campanha</b>' + pont + (nivel === 'anu' ? previa() : '') + '</aside></div>' +
      '<div class="ga-rod"><span class="esq">' + (nivel === 'anu' ? 'Ao clicar em Publicar, você aceita que seu uso das ferramentas para anúncios da Meta está sujeito aos nossos Termos e Condições.' : '') + '</span>' +
      '<button class="btn sec" data-acao="fechar" data-t="fechar">Fechar</button>' +
      (nivel === 'anu' ? '<button class="btn sec" data-ir="pos">Voltar</button><button class="btn" data-acao="publicar" data-t="publicar">Publicar</button>' : '<button class="btn" data-ir="anu" data-t="avancar">Avançar</button>') + '</div></div>' +
      (nivel === 'anu' ? modalAssistente() + modalGrupo() : '') + (S.publicado ? modalAnalise() : ''));
  }

  function formAnu() {
    var m = md(), tem = !!m;
    var erro = function (c) { return S.tentou && c ? ' err' : '' };
    var f = faltas();
    var criativo;
    if (!tem) {
      criativo = '<div class="ga-sec" data-t="sec-criativo"><h3>Criativo do anúncio</h3><p class="miudo">Selecione e otimize o texto do anúncio, a mídia e os aprimoramentos.</p>' +
        '<div class="fd-menu"><button class="btn sec" data-acao="abre-menu" data-t="btn-config">Configurar criativo ▾</button>' +
        (W.menu ? '<div class="fd-op"><button data-acao="op-imagem" data-t="op-imagem">🖼️ Anúncio em imagem</button><button data-acao="op-video" data-t="op-video">🎬 Anúncio em vídeo</button></div>' : '') + '</div>' +
        '<p class="fd-info' + erro(1) + '">ⓘ Especifique a mídia para veicular com este anúncio.</p></div>';
    } else {
      var linhas = Object.keys(GRUPOS).map(function (g) { return '<div class="fd-grp"><span><b>' + GRUPOS[g].nome + '</b><small>' + GRUPOS[g].n + ' posicionamentos · corte: ' + CORTE_NOME[S.corte[g]] + (S.corte[g] === 'orig' ? '' : ' ' + S.corte[g]) + '</small></span><button class="btn sec" data-grupo="' + g + '" data-t="grp-' + g + '">Editar grupo</button></div>' }).join('');
      criativo = '<div class="ga-sec" data-t="sec-criativo"><h3>Criativo do anúncio</h3><p class="miudo">Selecione e otimize o texto do anúncio, a mídia e os aprimoramentos.</p>' +
        '<p><b>Configuração do criativo (1/4)</b></p><p class="fd-chips"><span class="on">Produtos</span><span>Elementos da marca</span><span>Links de site</span><span>Promoções</span> <button class="btn sec" data-acao="abre-assist" data-t="btn-config-criativo">Editar</button></p>' +
        '<p><b><span class="ga-req">*</span> Mídia</b></p><div class="fd-midia"><span class="fd-mini" style="background-image:url(' + m.img + ')"></span><span><b>' + m.nome + '</b><small>' + m.w + ' × ' + m.h + '</small></span><button class="btn sec" data-acao="abre-assist" data-t="btn-midia-editar">Editar</button><button class="btn sec" data-acao="remove-midia" data-t="btn-midia-remover">Remover mídia</button></div>' +
        '<div class="ga-aviso">Você pode aumentar as conversões se duplicar e adicionar um vídeo <span class="ga-tag am">+ 7 pontos</span><br><small>Ter anúncios de imagem e em vídeo em um conjunto de anúncios ajuda nas conversões. Como você já tem um anúncio de imagem, duplique-o e adicione um vídeo.</small></div>' +
        '<div data-t="grupos">' + linhas + '</div>' +
        '<p><b>Texto principal</b></p><textarea class="ga-in" id="fPrincipal" rows="2" placeholder="Informe às pessoas sobre o que é o seu anúncio" data-t="txt-principal">' + esc(S.principal) + '</textarea>' +
        '<p><b>Título</b></p><input class="ga-in" id="fTitulo" placeholder="Título" value="' + esc(S.titulo) + '" data-t="txt-titulo"/>' +
        '<p><b>Descrição</b></p><input class="ga-in" id="fDesc" placeholder="Inclua detalhes adicionais" value="' + esc(S.desc) + '"/>' +
        '<p><b>Chamada para ação</b></p><select class="ga-in" id="fCta" data-t="cta">' + CTAS.map(function (c) { return '<option' + (S.cta === c ? ' selected' : '') + '>' + c + '</option>' }).join('') + '</select>' +
        '<p class="miudo">“Ver detalhes” é o texto de chamada para ação padrão. “Ver detalhes” gera um CVR até 2,3% maior em comparação com “Saiba mais”. Você ainda pode escolher “Saiba mais” ou outra opção.</p></div>';
    }
    return '<div class="ga-sec"><h3>Nome do anúncio</h3><input class="ga-in" value="Novo anúncio de Vendas" disabled/></div>' +
      '<div class="ga-sec" data-t="an-identidade"><h3>Identidade</h3><p class="miudo">Os perfis e elementos de marca que serão usados no seu anúncio.</p><p><b><span class="ga-req">*</span> Página do Facebook</b></p>' +
      '<label class="ga-lin' + (S.pagina ? ' on' : erro(1)) + '" data-t="pg-lojinha"><input type="radio" name="fdPg"' + (S.pagina ? ' checked' : '') + '/><span><b>' + PAGINA + '</b></span></label>' +
      '<p class="miudo">Perfil do Instagram: lojinhadamarina.aula · Perfil do Threads: usar conta do Instagram · Marca: Inativo</p></div>' +
      '<div class="ga-sec" data-t="sec-formato"><h3>Configuração do anúncio</h3><p class="miudo">Selecione um post existente ou crie um novo · <b>Criar anúncio</b></p><p><b>Fonte do criativo</b></p><p class="miudo">Escolha como você quer fornecer a mídia para seu anúncio.</p>' +
      '<label class="ga-lin on"><input type="radio" name="fdFonte" checked/><span><b>Upload manual</b></span></label><label class="ga-lin"><input type="radio" name="fdFonte" disabled/><span><b>Mídia do produto</b><small>Mostre imagens e vídeos relevantes do seu catálogo.</small></span></label>' +
      '<p><b>Formato</b></p><p class="miudo">Escolha um layout para o criativo do anúncio.</p>' +
      '<label class="ga-lin' + (S.formato === 'unica' ? ' on' : '') + '" data-t="fmt-unica"><input type="radio" name="fdFmt" value="unica"' + (S.formato === 'unica' ? ' checked' : '') + '/><span><b>Imagem ou vídeo único</b></span></label>' +
      '<label class="ga-lin' + (S.formato === 'carrossel' ? ' on' : '') + '" data-t="fmt-carrossel"><input type="radio" name="fdFmt" value="carrossel"' + (S.formato === 'carrossel' ? ' checked' : '') + '/><span><b>Carrossel</b></span></label>' +
      '<label class="ga-lin"><input type="checkbox" id="fMulti"' + (S.multi ? ' checked' : '') + ' data-t="chk-multi"/><span><b>Anúncios com vários anunciantes</b><small>Seu anúncio pode aparecer com outros na mesma unidade de anúncios para ajudar a promover a descoberta. O criativo do seu anúncio pode ser redimensionado ou cortado.</small></span></label>' +
      (S.formato === 'carrossel' ? '<p class="ga-aviso">🧪 No simulador, só o formato Imagem ou vídeo único está montado (foi o que configuramos na tela real). O carrossel segue a mesma ideia com vários cartões.</p>' : '') + '</div>' +
      '<div class="ga-sec" data-t="sec-destino"><h3>Destino</h3><p class="miudo">Para onde você direciona as pessoas depois que elas clicam no seu anúncio.</p><p><b>Destino principal</b></p><select class="ga-in" disabled><option>Site</option></select>' +
      '<p><b><span class="ga-req">*</span> URL do site</b></p><input class="ga-in' + erro(!/^https?:\/\/\S+\.\S+/.test(S.url.trim())) + '" id="fUrl" placeholder="Insira o URL que as pessoas visitam após seu anúncio" value="' + esc(S.url) + '" data-t="url-site"/>' +
      '<label class="ga-lin"><input type="checkbox" id="fLink"' + (S.linkVis ? ' checked' : '') + ' data-t="chk-link"/><span><b>Usar um link de exibição</b>' + (S.linkVis ? '<small>O link de exibição é o texto que as pessoas veem no anúncio; ele pode ser diferente do URL real, mas deve mostrar o mesmo site.</small>' : '') + '</span></label>' +
      (S.linkVis ? '<input class="ga-in" id="fLinkTxt" placeholder="Insira o link que será exibido" value="' + esc(S.linkTxt || '') + '"/>' : '') +
      '<p><b>Destinos personalizados (' + (S.midia ? 1 : 0) + '/3)</b></p><p class="miudo">Encaminhe as pessoas para a experiência com maior probabilidade de resultar em uma conversão depois que elas clicam no seu anúncio.</p><p class="fd-chips"><span' + (S.midia ? ' class="on"' : '') + '>Product browsing</span><span>Otimizar destino do site</span><span>Complementos para navegador</span></p></div>' +
      criativo +
      '<div class="ga-sec"><h3>Rastreamento</h3><p class="miudo">Selecione os eventos de conversão a serem rastreados. O conjunto de dados de conversão selecionado desta conta de anúncios será rastreado por padrão.</p></div>' +
      (S.tentou && f.length ? '<div class="ga-aviso verm" data-t="erros"><b>Ainda não dá para publicar:</b><ul class="ga-erros">' + f.map(function (x) { return '<li>' + esc(x) + '</li>' }).join('') + '</ul><small>(texto de erro do simulador, resumindo o que a tela real cobra)</small></div>' : '') +
      conferido(S.midia ? true : true);
  }

  function formPos() {
    return '<div class="ga-sec" data-t="sec-pos"><h3>Posicionamentos <span class="ga-sel">Advantage+ ativado</span></h3><p>Mostraremos anúncios automaticamente nos locais onde as pessoas têm maior probabilidade de responder. <a>Sobre os posicionamentos</a></p>' +
      '<div class="ga-aviso"><b>Status do WhatsApp incluído</b><br><small>Para ajudar você a alcançar novos públicos, incluímos o posicionamento Status do WhatsApp. Os Status são fotos e vídeos verticais na aba Atualizações do WhatsApp que desaparecem após 24 horas.</small></div>' +
      '<p><b>Regras de valor de posicionamento</b></p><p class="miudo">Priorize os posicionamentos mais importantes para sua empresa ajustando os lances. <button class="btn sec" disabled>Criar um conjunto de regras</button></p>' +
      '<p data-t="pos-excluidos"><b>Controles da conta</b><br><small>Posicionamentos excluídos: Nenhum</small></p><p class="miudo">Mostrar mais configurações</p>' +
      '<p class="miudo">Na campanha de Vendas Advantage+, a escolha manual dos posicionamentos não apareceu na tela que conferimos (a conferir).</p></div>' +
      '<div class="ga-sec"><h3>Público <span class="ga-sel">Advantage+ ativado</span></h3><p class="miudo">Localizações: Inclusão Brasil · Idade mínima 18. (O público foi visto no módulo Anúncios.)</p></div>' + conferido();
  }

  /* ---------- assistente de mídia (janela com etapas) ---------- */
  var ETAPAS = ['Mídia', 'Configuração do criativo', 'Corte', 'Texto', 'Geração de imagem', 'Aprimoramentos', 'Tradução'];
  function modalAssistente() {
    if (W.passo < 0) return '';
    var p = W.passo, corpo = '';
    var cab = '<div class="fd-et">' + ETAPAS.map(function (e, i) { return '<span class="' + (i === p ? 'on' : i < p ? 'ok' : '') + (i === 6 ? ' off' : '') + '">' + (i < p ? '✓ ' : '') + e + '</span>' }).join('') + '</div>';
    if (p === 0) {
      corpo = '<h3>Mídia</h3><p class="miudo">Selecione ou carregue a mídia que quer usar para seu anúncio. Você pode selecionar uma imagem ou um vídeo.</p><p class="fd-tabs"><b>Tudo</b> · Conta · Empresa · Instagram · Página <span class="busca">Pesquisar mídia</span> <button class="btn sec" disabled>＋ Carregar</button></p>' +
        '<div class="fd-lib" data-t="biblioteca">' + MIDIAS.map(function (m) { return '<button class="fd-thumb' + (W.sel === m.id ? ' on' : '') + '" data-midia="' + m.id + '" data-t="midia-' + m.id + '"><span style="background-image:url(' + m.img + ')"></span><small>' + m.w + ' × ' + m.h + '</small></button>' }).join('') + '</div>' +
        '<p class="miudo">' + (W.sel ? '1' : '0') + ' selecionada(s) · Mídia sua</p>';
    } else if (p === 1) {
      corpo = '<h3>Configuração do criativo</h3><p class="miudo">Analise e gerencie as informações que encontramos nas suas fontes de anúncios. Elas serão usadas nos seus aprimoramentos escolhidos.</p><p><b>URL da fonte</b></p><input class="ga-in" placeholder="Insira o URL que as pessoas visitam após seu anúncio" disabled/>' +
        '<p><b>Extensões</b></p><div class="fd-ext"><p><b>Promoções</b> <span class="ga-tag">Desativado</span><br><small>Destaque suas promoções antes e depois de as pessoas tocarem no seu anúncio para aumentar as conversões e gerar leads por email.</small></p><p><b>Branding</b> <span class="ga-tag">Desativado</span><br><small>Defina os padrões da marca para este anúncio e anúncios futuros.</small></p><p><b>Links de site</b> <span class="ga-tag">Desativado</span><br><small>Aumente o potencial de conversões oferecendo mais maneiras para as pessoas se informarem e comprarem.</small></p><p><b>Produtos</b> <span class="ga-tag vd">Ativado</span></p></div>';
    } else if (p === 2) {
      corpo = '<h3>Corte</h3><p class="miudo">Escolha como a mídia é cortada para cada posicionamento. Esta etapa não foi vista com detalhe na tela real (a conferir); o corte de cada grupo você ajusta também em Editar grupo.</p><div class="fd-corte">' + ['orig', '1:1', '9:16', '1,91:1', '4:5'].map(function (c) { return '<span>' + corteTxt(c, c === '1:1') + '</span>' }).join('') + '</div>';
    } else if (p === 3) {
      corpo = '<h3>Texto</h3><p class="miudo">Adicione várias opções de texto, e mostraremos aquela que acreditamos que terá o melhor desempenho quando seu anúncio for veiculado.</p>' +
        '<p><b>Texto principal</b></p><textarea class="ga-in" id="wPrincipal" rows="2" placeholder="Informe às pessoas sobre o que é o seu anúncio" data-t="w-principal">' + esc(S.principal) + '</textarea>' +
        '<p><b>Título</b></p><input class="ga-in" id="wTitulo" placeholder="Título" value="' + esc(S.titulo) + '" data-t="w-titulo"/>' +
        '<p><b>Descrição</b></p><input class="ga-in" id="wDesc" placeholder="Inclua detalhes adicionais" value="' + esc(S.desc) + '"/>' +
        '<p><b>Chamada para ação</b></p><select class="ga-in" id="wCta" data-t="w-cta">' + CTAS.map(function (c) { return '<option' + (S.cta === c ? ' selected' : '') + '>' + c + '</option>' }).join('') + '</select>' +
        '<p class="miudo">“Ver detalhes” é o texto de chamada para ação padrão. “Ver detalhes” gera um CVR até 2,3% maior em comparação com “Saiba mais”. Você ainda pode escolher “Saiba mais” ou outra opção.</p>';
    } else if (p === 4) {
      corpo = '<h3>Geração de imagem para criativo Advantage+</h3><p class="miudo">Meta AI · Em nosso experimento, campanhas com todos os anúncios adicionando imagens geradas por IA tiveram incremento de 10% na CTR e incremento de 6% na CVR. Esta etapa é opcional: nada é gerado no simulador.</p>';
    } else {
      var A = [['sobrep', 'Adicionar sobreposições', ''], ['retoques', 'Retoques visuais', ''], ['texto', 'Melhorias no texto', ''], ['cta', 'Aprimorar CTA', ''], ['etiq', 'Adicionar etiquetas de produto', ''], ['musica', 'Adicionar música', 'Ativado por padrão'], ['animacao', 'Adicionar animação', 'Ativado por padrão']];
      corpo = '<h3>Aprimoramentos de criativo Advantage+</h3><p class="miudo">Ao usar os aprimoramentos de criativo com IA, você concorda com os Termos de IA Generativa para Criativo do Anúncio.</p><div class="fd-apr" data-t="aprimoramentos">' +
        A.map(function (a) { return '<label class="ga-lin' + (S.aprim[a[0]] ? ' on' : '') + '" data-t="apr-' + a[0] + '"><input type="checkbox" data-apr="' + a[0] + '"' + (S.aprim[a[0]] ? ' checked' : '') + '/><span><b>' + a[1] + '</b>' + (a[2] ? '<small>' + a[2] + '</small>' : '') + '</span></label>' }).join('') + '</div>' +
        '<p class="miudo">Os nomes dos aprimoramentos e o “Ativado por padrão” são da tela real; como se liga e desliga cada um (o botão “Personalizar”) não foi visto (a conferir).</p>';
    }
    var ultimo = p === 5, podeAv = p === 0 ? !!W.sel : true;
    return '<div class="ga-fundo"><div class="ga-jan fd-jan" data-t="jan-assistente">' + cab + '<div class="fd-pass">' + corpo + '</div><div class="rodape-jan"><button class="btn sec" data-acao="cancela-assist" data-t="assist-cancelar">Cancelar</button>' +
      (ultimo ? '<button class="btn" data-acao="conclui-assist" data-t="assist-concluir">Concluir</button>' : '<button class="btn" data-acao="avanca-assist" data-t="assist-avancar"' + (podeAv ? '' : ' disabled') + '>Avançar</button>') + '</div></div></div>';
  }

  /* ---------- janela "Editar grupo" (corte por grupo de posicionamentos) ---------- */
  function modalGrupo() {
    if (!G.g) return '';
    var gr = GRUPOS[G.g], m = md(), c = G.sel;
    var saved = S.corte[G.g];
    var lista = gr.cortes.map(function (k) { return '<button class="fd-corte-op' + (c === k ? ' on' : '') + '" data-corte="' + k + '" data-t="corte-' + k.replace(/[:,]/g, 'x') + '">' + corteTxt(k, k === gr.rec) + '</button>' }).join('');
    var fake = JSON.parse(JSON.stringify(S.corte)); var antes = S.corte[G.g]; S.corte[G.g] = c; var q = quadro(G.g); S.corte[G.g] = antes;
    return '<div class="ga-fundo"><div class="ga-jan fd-jan larga" data-t="jan-grupo"><h2>Editando ' + gr.n + ' posicionamentos</h2><div class="fd-dois"><div class="fd-esq">' +
      '<p><b>Mídia</b></p><div class="fd-midia"><span class="fd-mini" style="background-image:url(' + m.img + ')"></span><span><b>sem título</b><small>' + m.w + ' × ' + m.h + '</small></span></div><p class="fd-lado">⇄ Alterar</p><p class="fd-lado on">✂ Cortar</p>' +
      '<p><b>Texto</b></p><p class="fd-lado">Aa Texto principal ＋</p><p class="fd-lado">Aa Título ＋</p><p class="fd-lado">🔗 Destino ＋</p><p><b>Ferramentas de criação</b></p><p class="fd-lado">🏷 Etiquetas de produto ＋</p></div>' +
      '<div class="fd-meio"><p><b>Cortar mídia</b></p><div data-t="lista-cortes">' + lista + '</div></div><div class="fd-dir"><div class="fd-card sem">' + q + '</div></div></div>' +
      (G.g === 'coluna' ? '<p class="miudo">⚠ As opções do grupo Coluna da direita não foram vistas na tela real (a conferir).</p>' : '') +
      '<div class="rodape-jan"><button class="btn sec" data-acao="cancela-grupo" data-t="grupo-cancelar">Cancelar</button><button class="btn" data-acao="salva-grupo" data-t="grupo-salvar"' + (c !== saved ? '' : ' disabled') + '>Salvar</button></div></div></div>';
  }
  function modalAnalise() {
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-analise"><h2>Anúncio em análise</h2><p><b>Seu anúncio está sendo criado.</b> Avisaremos se ele atende aos Padrões de Publicidade da Meta em até 24 horas. Você também pode receber atualizações na Central de Anúncios.</p><p class="miudo">No simulador, nada foi enviado à Meta.</p><div class="rodape-jan"><button class="btn" data-acao="fecha-analise">Concluir</button></div></div></div>';
  }

  var TELAS = { anu: function () { return editor('anu', formAnu()) }, pos: function () { return editor('pos', formPos()) } };

  document.addEventListener('click', function (ev) {
    var t = ev.target;
    var ab = t.closest('[data-aba]'); if (ab && !ab.disabled) { P = ab.getAttribute('data-aba'); render(); return }
    var gp = t.closest('[data-grupo]'); if (gp) { G.g = gp.getAttribute('data-grupo'); G.sel = S.corte[G.g]; grava(); render(); return }
    var co = t.closest('[data-corte]'); if (co) { G.sel = co.getAttribute('data-corte'); grava(); render(); return }
    var mi = t.closest('[data-midia]'); if (mi) { W.sel = mi.getAttribute('data-midia'); grava(); render(); return }
    var a = t.closest('[data-ir],[data-acao]'); if (!a || a.disabled) return;
    if (a.hasAttribute('data-ir')) { vai(a.getAttribute('data-ir')); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'abre-menu') { W.menu = !W.menu; render() }
    else if (ac === 'op-imagem') { W = { passo: 0, sel: S.midia || '', menu: false }; grava(); render() }
    else if (ac === 'op-video') { W.menu = false; render() }
    else if (ac === 'abre-assist') { W = { passo: 0, sel: S.midia, menu: false }; grava(); render() }
    else if (ac === 'avanca-assist') { W.passo++; grava(); render() }
    else if (ac === 'cancela-assist') { W = { passo: -1, sel: '', menu: false }; grava(); render() }
    else if (ac === 'conclui-assist') { S.midia = W.sel; W = { passo: -1, sel: '', menu: false }; grava(); render() }
    else if (ac === 'remove-midia') { S.midia = ''; grava(); render() }
    else if (ac === 'cancela-grupo') { G = { g: '', sel: '' }; grava(); render() }
    else if (ac === 'salva-grupo') { S.corte[G.g] = G.sel; G = { g: '', sel: '' }; grava(); render() }
    else if (ac === 'fechar') { vai('anu'); render() }
    else if (ac === 'publicar') { S.tentou = true; if (faltas().length) { grava(); if (rota() !== 'anu') vai('anu'); else render(); return } S.publicado = true; grava(); render() }
    else if (ac === 'fecha-analise') { S.publicado = false; grava(); render() }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.name === 'fdPg') { S.pagina = PAGINA }
    else if (t.name === 'fdFmt') { S.formato = t.value }
    else if (t.id === 'fMulti') { S.multi = t.checked }
    else if (t.id === 'fLink') { S.linkVis = t.checked }
    else if (t.id === 'fCta' || t.id === 'wCta') { S.cta = t.value }
    else if (t.hasAttribute && t.hasAttribute('data-apr')) { S.aprim[t.getAttribute('data-apr')] = t.checked }
    else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target, mapa = { fUrl: 'url', fPrincipal: 'principal', wPrincipal: 'principal', fTitulo: 'titulo', wTitulo: 'titulo', fDesc: 'desc', wDesc: 'desc', fLinkTxt: 'linkTxt' };
    if (!mapa[t.id]) return;
    S[mapa[t.id]] = t.value; grava();
    var c = $('.fd-corpo'); if (c && S.midia && t.id !== 'fUrl' && t.id !== 'fLinkTxt') { var tmp = document.createElement('div'); tmp.innerHTML = previa(); var n = $('.fd-corpo', tmp); c.innerHTML = n.innerHTML }
  });
  window.addEventListener('hashchange', render);
  function render() {
    var r = rota(); if (!TELAS[r]) r = 'anu';
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = TELAS[r]();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simFd = { S: S, W: W, G: G };
  }
  window.SIMFD = { vai: vai, estado: function () { return { S: S, W: W, G: G } }, exemplo: function () { var c = S.corte, u = S.url; if (!S.midia || !S.pagina) { S = comMidia(inicial()); S.corte = c || S.corte; S.url = u || ''; grava() } }, zera: function () { S = inicial(); W = { passo: -1, sel: '', menu: false }; G = { g: '', sel: '' }; P = 'todo'; grava() },
    wiz: function (o) { for (var k in o) W[k] = o[k]; grava() }, grupo: function (g, sel) { G.g = g; G.sel = sel || S.corte[g]; grava() }, aba: function (a) { P = a }, cortes: function (o) { for (var k in o) S.corte[k] = o[k]; grava() }, pronto: function () { render() } };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function fd() { return window.__simFd || { S: S, W: W, G: G } }
  function sim() { return window.SIMFD }
  TOURS['montar-criativo'] = [
    { alvo: '[data-t=sec-formato]', garante: function () { sim().zera(); S.pagina = PAGINA; grava(); location.hash = 'anu'; render() },
      tit: T('O anúncio da Marina', 'El anuncio de Marina'), txt: T('Estamos no nível do anúncio, dentro de um rascunho de Vendas. A Marina vai montar o que as pessoas veem: o formato, a mídia e o texto. Primeiro o formato: “Imagem ou vídeo único” mostra uma peça só; “Carrossel” mostra vários cartões. Para a Marina, uma imagem só. Clique em Próximo.', 'Estamos en el nivel del anuncio, dentro de un borrador de Ventas. Marina va a armar lo que ven las personas: el formato, el contenido multimedia y el texto. Primero el formato: “Una sola imagen o video” muestra una sola pieza; “Secuencia” muestra varias tarjetas. Para Marina, una sola imagen. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-config]', clique: true, garante: function () { sim().zera(); S.pagina = PAGINA; grava(); location.hash = 'anu'; render() }, tit: T('Configurar criativo', 'Configurar contenido'), txt: T('Aqui ainda não há mídia: a tela avisa “Especifique a mídia”. Clique em Configurar criativo.', 'Aquí todavía no hay contenido multimedia: la pantalla avisa “Especifica el contenido”. Haz clic en Configurar contenido.') },
    { alvo: '[data-t=op-imagem]', clique: true, garante: function () { sim().zera(); S.pagina = PAGINA; W.menu = true; grava(); location.hash = 'anu'; render() }, tit: T('Imagem ou vídeo', 'Imagen o video'), txt: T('O menu oferece Anúncio em imagem ou Anúncio em vídeo. A Marina tem uma foto da caneca: clique em Anúncio em imagem.', 'El menú ofrece Anuncio en imagen o Anuncio en video. Marina tiene una foto de la taza: haz clic en Anuncio en imagen.') },
    { alvo: '[data-t=biblioteca]', garante: function () { sim().zera(); S.pagina = PAGINA; sim().wiz({ passo: 0, sel: '' }); location.hash = 'anu'; render() }, cond: function () { return fd().W.sel === 'm1' },
      bloqueia: function (t) { var b = t.closest('[data-midia]'); return !!(b && b.getAttribute('data-midia') !== 'm1') }, erro: T('Para este tutorial, escolha a imagem da caneca azul (a primeira).', 'Para este tutorial, elige la imagen de la taza azul (la primera).'),
      tit: T('Escolher a mídia', 'Elegir el contenido multimedia'), txt: T('A janela mostra as imagens da conta, com o tamanho embaixo de cada uma (1080 × 1080 é quadrada). Escolha a caneca azul e clique em Próximo.', 'La ventana muestra las imágenes de la cuenta, con el tamaño debajo de cada una (1080 × 1080 es cuadrada). Elige la taza azul y haz clic en Siguiente.') },
    { alvo: '[data-t=assist-avancar]', clique: true, garante: function () { sim().wiz({ passo: 0, sel: 'm1' }); render() }, tit: T('Avançar', 'Siguiente'), txt: T('Com a imagem escolhida, o botão Avançar acende. Clique nele.', 'Con la imagen elegida, el botón Siguiente se enciende. Haz clic en él.') },
    { alvo: '[data-t=jan-assistente]', garante: function () { sim().wiz({ passo: 1, sel: 'm1' }); render() }, tit: T('Configuração do criativo', 'Configuración del contenido'), txt: T('Aqui ficam extensões opcionais (promoções, branding, links de site). Nada disso é obrigatório para a primeira vez. Clique em Próximo.', 'Aquí están las extensiones opcionales (promociones, imagen de marca, enlaces al sitio). Nada de esto es obligatorio la primera vez. Haz clic en Siguiente.') },
    { alvo: '[data-t=assist-avancar]', clique: true, garante: function () { sim().wiz({ passo: 1, sel: 'm1' }); render() }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=jan-assistente]', garante: function () { sim().wiz({ passo: 2, sel: 'm1' }); render() }, tit: T('Corte', 'Recorte'), txt: T('Cada lugar onde o anúncio aparece prefere um formato de imagem. Vamos ver isso com calma na próxima aula. Por ora, clique em Próximo.', 'Cada lugar donde aparece el anuncio prefiere un formato de imagen. Lo vamos a ver con calma en la próxima clase. Por ahora, haz clic en Siguiente.') },
    { alvo: '[data-t=assist-avancar]', clique: true, garante: function () { sim().wiz({ passo: 2, sel: 'm1' }); render() }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar para ir ao texto.', 'Haz clic en Siguiente para ir al texto.') },
    { alvo: '[data-t=jan-assistente]', garante: function () { sim().wiz({ passo: 3, sel: 'm1' }); render() }, cond: function () { return fd().S.principal.trim().length > 3 && fd().S.titulo.trim().length > 0 },
      tit: T('O texto do anúncio', 'El texto del anuncio'), txt: T('Escreva o Texto principal (o que as pessoas leem acima da imagem, por exemplo: “Canecas feitas com carinho. Peça a sua!”) e um Título curto (por exemplo: “Caneca azul”). A chamada para ação já vem como “Ver detalhes”, o padrão. Quando terminar, clique em Próximo.', 'Escribe el Texto principal (lo que lee la gente arriba de la imagen, por ejemplo: “Tazas hechas con cariño. ¡Pide la tuya!”) y un Título corto (por ejemplo: “Caneca azul”). La llamada a la acción ya viene como “Ver detalles”, el valor predeterminado. Cuando termines, haz clic en Siguiente.'),
      dica: T('Os dois campos precisam ter algo escrito para o tutorial seguir.', 'Los dos campos deben tener algo escrito para que el tutorial siga.') },
    { alvo: '[data-t=assist-avancar]', clique: true, garante: function () { sim().wiz({ passo: 3, sel: 'm1' }); if (!fd().S.principal) { S.principal = 'Canecas feitas com carinho. Peça a sua!'; S.titulo = 'Caneca azul'; grava() } render() }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar. (A etapa seguinte é a geração de imagem com IA: opcional, vamos só passar.)', 'Haz clic en Siguiente. (La etapa siguiente es la generación de imágenes con IA: opcional, solo vamos a pasar.)') },
    { alvo: '[data-t=assist-avancar]', clique: true, garante: function () { sim().wiz({ passo: 4, sel: 'm1' }); render() }, tit: T('Geração de imagem', 'Generación de imágenes'), txt: T('Esta etapa oferece imagens geradas por IA. É opcional e a Marina não precisa. Clique em Avançar.', 'Esta etapa ofrece imágenes generadas con IA. Es opcional y Marina no la necesita. Haz clic en Siguiente.') },
    { alvo: '[data-t=aprimoramentos]', garante: function () { sim().wiz({ passo: 5, sel: 'm1' }); render() },
      tit: T('Aprimoramentos: atenção!', 'Mejoras: ¡atención!'), txt: T('Repare: “Adicionar música” e “Adicionar animação” aparecem como “Ativado por padrão”. A Meta pode mexer no seu criativo. Se o cliente quer o anúncio exatamente como fez, é aqui que se confere. Clique em Próximo.', 'Fíjate: “Agregar música” y “Agregar animación” aparecen como “Activado de forma predeterminada”. Meta puede modificar tu contenido. Si el cliente quiere el anuncio exactamente como lo hizo, aquí se revisa. Haz clic en Siguiente.') },
    { alvo: '[data-t=assist-concluir]', clique: true, garante: function () { sim().wiz({ passo: 5, sel: 'm1' }); render() }, tit: T('Concluir', 'Terminar'), txt: T('Clique em Concluir para aplicar ao anúncio.', 'Haz clic en Terminar para aplicar al anuncio.') },
    { alvo: '[data-t=previa]', fim: true, semVolta: true, garante: function () { sim().wiz({ passo: -1, sel: '' }); if (!fd().S.midia) { S.midia = 'm1'; S.principal = S.principal || 'Canecas feitas com carinho. Peça a sua!'; S.titulo = S.titulo || 'Caneca azul'; grava() } location.hash = 'anu'; render() },
      tit: T('Criativo pronto! 🎉', '¡Contenido listo! 🎉'), txt: T('A mídia entrou, e a prévia mostra o anúncio em cada grupo de posicionamentos. Ainda falta o URL do site (próxima aula). Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'El contenido entró, y la vista previa muestra el anuncio en cada grupo de ubicaciones. Todavía falta la URL del sitio (próxima clase). Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['ver-previa'] = [
    { alvo: '[data-t=no-conj]', clique: true, garante: function () { sim().exemplo(); location.hash = 'anu'; render() }, tit: T('Onde o anúncio aparece', 'Dónde aparece el anuncio'), txt: T('Os lugares onde o anúncio aparece (posicionamentos) são escolhidos no conjunto de anúncios, não no anúncio. Clique no conjunto de anúncios, na árvore.', 'Los lugares donde aparece el anuncio (ubicaciones) se eligen en el conjunto de anuncios, no en el anuncio. Haz clic en el conjunto de anuncios, en el árbol.') },
    { alvo: '[data-t=sec-pos]', garante: function () { sim().exemplo(); location.hash = 'pos'; render() }, tit: T('Posicionamentos Advantage+', 'Ubicaciones Advantage+'), txt: T('Nesta campanha de Vendas está “Advantage+ ativado”: a Meta mostra o anúncio automaticamente onde há mais chance de resposta. Abaixo, “Posicionamentos excluídos: Nenhum”. Isso quer dizer que o seu anúncio vai aparecer em vários lugares: feeds, stories, reels, coluna da direita… Clique em Próximo.', 'En esta campaña de Ventas está “Advantage+ activado”: Meta muestra el anuncio automáticamente donde hay más probabilidad de respuesta. Abajo, “Ubicaciones excluidas: Ninguna”. Eso quiere decir que tu anuncio va a aparecer en varios lugares: feeds, stories, reels, columna derecha… Haz clic en Siguiente.') },
    { alvo: '[data-t=no-anu]', clique: true, garante: function () { sim().exemplo(); location.hash = 'pos'; render() }, tit: T('De volta ao anúncio', 'De vuelta al anuncio'), txt: T('Agora clique no anúncio, na árvore, para ver como ele fica em cada lugar.', 'Ahora haz clic en el anuncio, en el árbol, para ver cómo queda en cada lugar.') },
    { alvo: '[data-t=prev-abas]', garante: function () { sim().exemplo(); sim().aba('todo'); location.hash = 'anu'; render() }, tit: T('A prévia por grupo', 'La vista previa por grupo'), txt: T('A prévia tem uma aba para cada grupo de posicionamentos: Feeds, Stories e Reels, e Coluna da direita. A mesma imagem pode aparecer diferente em cada um. Clique em Próximo.', 'La vista previa tiene una pestaña para cada grupo de ubicaciones: Feeds, Stories y Reels, y Columna derecha. La misma imagen puede verse diferente en cada uno. Haz clic en Siguiente.') },
    { alvo: '[data-t=aba-stories]', clique: true, garante: function () { sim().exemplo(); sim().cortes({ stories: 'orig' }); sim().aba('todo'); location.hash = 'anu'; render() }, tit: T('Ver os Stories', 'Ver los Stories'), txt: T('Clique na aba de Stories e Reels.', 'Haz clic en la pestaña de Stories y Reels.') },
    { alvo: '[data-t=card-stories]', garante: function () { sim().exemplo(); sim().cortes({ stories: 'orig' }); sim().aba('stories'); location.hash = 'anu'; render() }, tit: T('Barras nas laterais', 'Barras en los lados'), txt: T('Em Stories e Reels a tela é vertical (9:16). A imagem quadrada da Marina não preenche: sobram faixas escuras em cima e embaixo. Não é erro, é o corte “Original”. Dá para melhorar. Clique em Próximo.', 'En Stories y Reels la pantalla es vertical (9:16). La imagen cuadrada de Marina no la llena: sobran franjas oscuras arriba y abajo. No es un error, es el recorte “Original”. Se puede mejorar. Haz clic en Siguiente.') },
    { alvo: '[data-t=grp-stories]', clique: true, garante: function () { sim().exemplo(); sim().cortes({ stories: 'orig' }); sim().aba('stories'); location.hash = 'anu'; render() }, tit: T('Editar grupo', 'Editar grupo'), txt: T('Cada grupo tem o seu “Editar grupo”. Clique no de Stories (“Stories, Status e Reels…”).', 'Cada grupo tiene su “Editar grupo”. Haz clic en el de Stories (“Stories, estados y Reels…”).') },
    { alvo: '[data-t=lista-cortes]', garante: function () { sim().exemplo(); sim().cortes({ stories: 'orig' }); sim().grupo('stories', 'orig'); location.hash = 'anu'; render() }, cond: function () { return fd().G.sel === '9:16' },
      bloqueia: function (t) { var b = t.closest('[data-corte]'); return !!(b && b.getAttribute('data-corte') !== '9:16') || !!t.closest('[data-t=grupo-salvar]') }, erro: T('Escolha “Vertical em tela cheia 9:16”, a opção recomendada para este grupo.', 'Elige “Vertical en pantalla completa 9:16”, la opción recomendada para este grupo.'),
      tit: T('Cortar a mídia', 'Recortar el contenido'), txt: T('A janela se chama “Editando 8 posicionamentos”. Em “Cortar mídia”, o formato recomendado para Stories é Vertical em tela cheia 9:16. Escolha-o e veja a prévia à direita preencher a tela.', 'La ventana se llama “Editar 8 ubicaciones”. En “Recortar contenido”, el formato recomendado para Stories es Vertical en pantalla completa 9:16. Elígelo y mira cómo la vista previa de la derecha llena la pantalla.'),
      dica: T('A opção recomendada vem marcada com “(recomendado)”.', 'La opción recomendada viene marcada con “(recomendado)”.') },
    { alvo: '[data-t=grupo-salvar]', clique: true, garante: function () { sim().exemplo(); sim().cortes({ stories: 'orig' }); sim().grupo('stories', '9:16'); location.hash = 'anu'; render() }, tit: T('Salvar', 'Guardar'), txt: T('Clique em Salvar. Só o grupo de Stories muda; os feeds continuam como estavam.', 'Haz clic en Guardar. Solo cambia el grupo de Stories; los feeds siguen como estaban.') },
    { alvo: '[data-t=card-stories]', fim: true, semVolta: true, garante: function () { sim().exemplo(); sim().cortes({ stories: '9:16' }); sim().aba('stories'); sim().pronto(); location.hash = 'anu'; render() }, tit: T('Preencheu a tela! 🎉', '¡Llenó la pantalla! 🎉'), txt: T('Agora a imagem preenche a tela vertical, sem faixas. A regra: confira a prévia de cada grupo e ajuste o corte onde sobrar barra ou cortar algo importante. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora la imagen llena la pantalla vertical, sin franjas. La regla: revisa la vista previa de cada grupo y ajusta el recorte donde sobren barras o se corte algo importante. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['destino-botao'] = [
    { alvo: '[data-t=sec-destino]', garante: function () { sim().exemplo(); S.url = ''; grava(); location.hash = 'anu'; render() }, tit: T('Para onde a pessoa vai', 'A dónde va la persona'), txt: T('A seção Destino diz para onde as pessoas vão depois de clicar. Em Vendas com site, o Destino principal é “Site”, e o URL é obrigatório: repare no asterisco. Clique em Próximo.', 'La sección Destino dice a dónde van las personas después de hacer clic. En Ventas con sitio web, el Destino principal es “Sitio web”, y la URL es obligatoria: fíjate en el asterisco. Haz clic en Siguiente.') },
    { alvo: '[data-t=url-site]', garante: function () { sim().exemplo(); S.url = ''; grava(); location.hash = 'anu'; render() }, cond: function () { return /^https?:\/\/\S+\.\S+/.test(fd().S.url.trim()) },
      tit: T('O URL do site', 'La URL del sitio'), txt: T('Digite o endereço da loja da Marina, começando com https:// (por exemplo: https://lojinha.exemplo.com.br/caneca-azul). É para a página do produto, não para a página inicial, sempre que possível. Depois clique em Próximo.', 'Escribe la dirección de la tienda de Marina, empezando con https:// (por ejemplo: https://lojinha.ejemplo.com/caneca-azul). Es para la página del producto, no para la página de inicio, siempre que sea posible. Después haz clic en Siguiente.'),
      dica: T('O endereço precisa começar com http:// ou https://.', 'La dirección debe empezar con http:// o https://.') },
    { alvo: '[data-t=chk-link]', garante: function () { sim().exemplo(); if (!/^https?:/.test(fd().S.url)) { S.url = 'https://lojinha.exemplo.com.br/caneca-azul'; grava() } location.hash = 'anu'; render() }, tit: T('Link de exibição', 'Enlace visible'), txt: T('“Usar um link de exibição” serve para mostrar um endereço mais limpo no anúncio, no lugar do URL comprido. Ele só muda o que aparece escrito; o clique continua indo para o URL de cima. Não é obrigatório. Clique em Próximo.', '“Usar un enlace visible” sirve para mostrar una dirección más limpia en el anuncio, en lugar de la URL larga. Solo cambia lo que aparece escrito; el clic sigue yendo a la URL de arriba. No es obligatorio. Haz clic en Siguiente.') },
    { alvo: '[data-t=cta]', garante: function () { sim().exemplo(); if (!/^https?:/.test(fd().S.url)) { S.url = 'https://lojinha.exemplo.com.br/caneca-azul'; grava() } location.hash = 'anu'; render() }, cond: function () { return fd().S.cta === 'Comprar agora' },
      tit: T('O botão do anúncio', 'El botón del anuncio'), txt: T('A chamada para ação é o botão do anúncio. O padrão é “Ver detalhes”. A Marina quer que a pessoa compre: escolha “Comprar agora”. Repare o botão mudar na prévia ao lado.', 'La llamada a la acción es el botón del anuncio. El valor predeterminado es “Ver detalles”. Marina quiere que la persona compre: elige “Comprar ahora”. Fíjate cómo cambia el botón en la vista previa de al lado.'),
      dica: T('A tela lembra: “Ver detalhes” gera um CVR até 2,3% maior que “Saiba mais”.', 'La pantalla recuerda: “Ver detalles” genera un CVR hasta un 2,3% mayor que “Más información”.') },
    { alvo: '[data-t=card-feeds]', garante: function () { sim().exemplo(); S.cta = 'Comprar agora'; if (!/^https?:/.test(fd().S.url)) S.url = 'https://lojinha.exemplo.com.br/caneca-azul'; grava(); sim().aba('feeds'); location.hash = 'anu'; render() }, tit: T('O botão na prévia', 'El botón en la vista previa'), txt: T('O botão “Comprar agora” aparece no cartão do Feed. Cuidado: o botão tem que combinar com o que o clique entrega. “Comprar agora” é para quem vai a uma página de compra. Clique em Próximo.', 'El botón “Comprar ahora” aparece en la tarjeta del Feed. Cuidado: el botón tiene que combinar con lo que entrega el clic. “Comprar ahora” es para quien va a una página de compra. Haz clic en Siguiente.') },
    { alvo: '[data-t=fechar]', fim: true, semVolta: true, garante: function () { sim().exemplo(); S.cta = 'Comprar agora'; if (!/^https?:/.test(fd().S.url)) S.url = 'https://lojinha.exemplo.com.br/caneca-azul'; grava(); location.hash = 'anu'; render() }, tit: T('Destino e botão certos! 🎉', '¡Destino y botón correctos! 🎉'), txt: T('Com o URL preenchido, a tela não cobra mais o destino. Regra: URL certo (de preferência da página do produto) e botão que combina com o clique. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Con la URL completa, la pantalla ya no cobra el destino. Regla: URL correcta (de preferencia la de la página del producto) y botón que combine con el clic. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['resolver-criativo'] = [
    { alvo: '[data-t=publicar]', clique: true, garante: function () { location.hash = 'anu'; S.tentou = false; grava(); render() }, tit: T('“Não consigo publicar!”', '“¡No puedo publicar!”'), txt: T('A Marina diz que o anúncio dela não publica e que, no Story, ficou “estranho”. Vamos investigar. Primeiro, clique em Publicar para ver o que a tela cobra.', 'Marina dice que su anuncio no se publica y que, en el Story, quedó “raro”. Vamos a investigar. Primero, haz clic en Publicar para ver qué cobra la pantalla.') },
    { alvo: '[data-t=erros]', garante: function () { S.tentou = true; grava(); location.hash = 'anu'; render() }, tit: T('A lista do que falta', 'La lista de lo que falta'), txt: T('A tela aponta o que falta: aqui, o URL do site. (Esta lista é do simulador, resumindo o que a tela real cobra.) Sem o destino, não há para onde levar a pessoa. Clique em Próximo e vamos preencher.', 'La pantalla señala lo que falta: aquí, la URL del sitio. (Esta lista es del simulador, resumiendo lo que cobra la pantalla real.) Sin el destino, no hay a dónde llevar a la persona. Haz clic en Siguiente y vamos a completarlo.') },
    { alvo: '[data-t=url-site]', garante: function () { S.tentou = true; grava(); location.hash = 'anu'; render() }, cond: function () { return /^https?:\/\/\S+\.\S+/.test(fd().S.url.trim()) }, tit: T('Preencher o URL', 'Completar la URL'), txt: T('Digite o endereço da página do produto (por exemplo: https://lojinha.exemplo.com.br/caneca-azul) e clique em Próximo.', 'Escribe la dirección de la página del producto (por ejemplo: https://lojinha.ejemplo.com/caneca-azul) y haz clic en Siguiente.'), dica: T('Precisa começar com http:// ou https://.', 'Debe empezar con http:// o https://.') },
    { alvo: '[data-t=aba-stories]', clique: true, garante: function () { if (!/^https?:/.test(fd().S.url)) { S.url = 'https://lojinha.exemplo.com.br/caneca-azul' } S.corte.stories = 'orig'; sim().aba('todo'); grava(); location.hash = 'anu'; render() }, tit: T('O Story “estranho”', 'El Story “raro”'), txt: T('Agora o outro problema: o Story. Clique na aba de Stories e Reels da prévia.', 'Ahora el otro problema: el Story. Haz clic en la pestaña de Stories y Reels de la vista previa.') },
    { alvo: '[data-t=card-stories]', garante: function () { sim().aba('stories'); S.corte.stories = 'orig'; grava(); location.hash = 'anu'; render() }, tit: T('Achou a causa', 'Encontró la causa'), txt: T('A imagem está com o corte “Original”: no Story vertical sobram faixas escuras. Não é defeito da Meta, é o corte. Clique em Próximo.', 'La imagen está con el recorte “Original”: en el Story vertical sobran franjas oscuras. No es un defecto de Meta, es el recorte. Haz clic en Siguiente.') },
    { alvo: '[data-t=grp-stories]', clique: true, garante: function () { sim().aba('stories'); S.corte.stories = 'orig'; grava(); location.hash = 'anu'; render() }, tit: T('Editar grupo', 'Editar grupo'), txt: T('Clique em Editar grupo, no grupo de Stories.', 'Haz clic en Editar grupo, en el grupo de Stories.') },
    { alvo: '[data-t=lista-cortes]', garante: function () { sim().grupo('stories', 'orig'); location.hash = 'anu'; render() }, cond: function () { return fd().G.sel === '9:16' },
      bloqueia: function (t) { var b = t.closest('[data-corte]'); return !!(b && b.getAttribute('data-corte') !== '9:16') || !!t.closest('[data-t=grupo-salvar]') }, erro: T('Para o Story, escolha o vertical em tela cheia 9:16.', 'Para el Story, elige el vertical en pantalla completa 9:16.'), tit: T('O corte certo', 'El recorte correcto'), txt: T('Escolha “Vertical em tela cheia 9:16”.', 'Elige “Vertical en pantalla completa 9:16”.') },
    { alvo: '[data-t=grupo-salvar]', clique: true, garante: function () { sim().grupo('stories', '9:16'); location.hash = 'anu'; render() }, tit: T('Salvar', 'Guardar'), txt: T('Clique em Salvar.', 'Haz clic en Guardar.') },
    { alvo: '[data-t=publicar]', clique: true, garante: function () { if (!/^https?:/.test(fd().S.url)) S.url = 'https://lojinha.exemplo.com.br/caneca-azul'; S.corte.stories = '9:16'; S.tentou = true; grava(); location.hash = 'anu'; render() }, tit: T('Tentar de novo', 'Intentar de nuevo'), txt: T('O URL está preenchido e o Story, ajustado. Clique em Publicar. No simulador, nada vai para a Meta.', 'La URL está completa y el Story, ajustado. Haz clic en Publicar. En el simulador, nada va a Meta.') },
    { alvo: '[data-t=jan-analise]', fim: true, semVolta: true, garante: function () { if (!/^https?:/.test(fd().S.url)) S.url = 'https://lojinha.exemplo.com.br/caneca-azul'; S.corte.stories = '9:16'; S.tentou = true; S.publicado = true; grava(); location.hash = 'anu'; render() }, tit: T('Anúncio em análise! 🎉', '¡Anuncio en revisión! 🎉'), txt: T('Agora a tela aceita: “Anúncio em análise”. Resumo do caso: faltava o URL (destino) e o Story estava com corte Original. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora la pantalla acepta: “Anuncio en revisión”. Resumen del caso: faltaba la URL (destino) y el Story estaba con recorte Original. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
