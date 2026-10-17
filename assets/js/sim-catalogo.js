/* Simulador do Gerenciador de Comércio › Catálogo (criar catálogo, produtos, fontes de dados, eventos, configurações)
   — layout fiel, visual da Lojinha. Estado no navegador (localStorage "sim.catalogo"); nada é enviado à Meta.
   Textos copiados das telas reais (conta de aula, 15–16/10/2026), em português e em espanhol (?locale=es_LA).
   O que não foi visto de verdade fica marcado "a conferir". Ver _roteiro/amostras_meta.md.
   URL: meta-catalogo.html?zerar=1 (sem catálogo) · ?exemplo=1 (o catálogo de aula) · ?moeda=1 (feed em dólar)
   Tutoriais (tour.js): ?tour=criar-catalogo | adicionar-produtos | conferir-ids | achar-produto | conhecer-catalogo */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function novoId() { var s = '9'; for (var i = 0; i < 14; i++) s += Math.floor(Math.random() * 10); return s }

  /* os 12 itens do feed da Lojinha = 8 produtos (camisetas têm 3 tamanhos cada) */
  var BASE = [
    ['CANECA_01', '', 'Caneca azul', 49.9, 1], ['CANECA_02', '', 'Caneca amarela', 49.9, 1], ['CANECA_03', '', 'Caneca Boas Ideias', 54.9, 1],
    ['CAMISETA_02_P', 'CAMISETA_02', 'Camiseta Montanha - P', 69.9, 1], ['CAMISETA_02_M', 'CAMISETA_02', 'Camiseta Montanha - M', 69.9, 1], ['CAMISETA_02_G', 'CAMISETA_02', 'Camiseta Montanha - G', 69.9, 1],
    ['CAMISETA_03_P', 'CAMISETA_03', 'Camiseta Básica Branca - P', 59.9, 1], ['CAMISETA_03_M', 'CAMISETA_03', 'Camiseta Básica Branca - M', 59.9, 1], ['CAMISETA_03_G', 'CAMISETA_03', 'Camiseta Básica Branca - G', 59.9, 1],
    ['ECOBAG_03', '', 'Ecobag Folha', 39.9, 1], ['BONE_01', '', 'Boné Azul', 59.9, 1], ['MOLETOM_01', '', 'Moletom Marinho', 149.9, 0]
  ];
  function itensBase(moeda) { return BASE.map(function (b) { return { id: b[0], grupo: b[1], nome: b[2], preco: b[3], disp: b[4], moeda: moeda || 'BRL' } }) }
  function exemplo() {
    var usd = !!params.get('moeda');
    return { id: novoId(), nome: 'Catálogo Lojinha da Marina (aula)', tipo: 'Produtos online', itens: itensBase(usd ? 'USD' : 'BRL'), idioma: '', pais: '', siteCorrigido: false,
      fontes: [{ nome: 'Novo feed de dados para Catálogo Lojinha da Marina (aula)', tipo: 'Arquivo de dados', sub: 'Carregamento programado', n: 12, quando: 'Substituído todos os dias', moeda: usd ? 'USD' : 'BRL' }] };
  }
  var S = ler('sim.catalogo', null) || { cats: [exemplo()] };
  if (params.get('zerar')) S = { cats: [] };
  if (params.get('exemplo') && !S.cats.length) S.cats.push(exemplo());
  var W = { tipo: '', nome: '', como: '', url: '', nomeFeed: '', moeda: 'USD', freq: 'Diariamente', linhas: [{}, {}, {}, {}, {}], confirmou: false };   // assistente de novo catálogo
  function grava() { try { localStorage.setItem('sim.catalogo', JSON.stringify(S)) } catch (e) { } window.__simCm = { S: S, W: W } }
  grava();

  function rota() { var h = (location.hash || '#inicio').slice(1).split('/'); return { tela: h[0] || 'inicio', id: h[1], aba: h[2] || 'visao' } }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }
  function cat(id) { return S.cats.filter(function (c) { return c.id === id })[0] }
  function preco(it) { return (it.moeda === 'USD' ? 'US$' : 'R$') + it.preco.toFixed(2).replace('.', ',') }
  /* itens do feed → produtos (as variantes de um mesmo grupo viram um produto) */
  function produtos(c) {
    var vistos = {}, out = [];
    c.itens.forEach(function (it) {
      if (it.grupo) { if (vistos[it.grupo]) { vistos[it.grupo].vars++; return } var p = { chave: it.grupo, grupo: true, nome: it.nome, preco: it.preco, moeda: it.moeda, disp: it.disp, vars: 1 }; vistos[it.grupo] = p; out.push(p) }
      else out.push({ chave: it.id, grupo: false, nome: it.nome, preco: it.preco, moeda: it.moeda, disp: it.disp, vars: 0 });
    });
    return out;
  }

  /* ---------- esqueleto ---------- */
  function casca(corpo, menu, titulo) {
    var c = menu && menu.id ? cat(menu.id) : null, a = menu ? menu.aba : '';
    var item = function (rot, ir, on, t) { return '<button class="cm-it' + (on ? ' on' : '') + '" ' + (ir ? 'data-ir="' + ir + '"' : 'disabled') + (t ? ' data-t="' + t + '"' : '') + '>' + rot + '</button>' };
    var lado = '<aside class="cm-lado"><p class="cm-marca">∞ Meta</p><h2>Gerenciador de Comércio</h2><div class="cm-port"><i>L</i>Lojinha da Marina Aula</div>';
    if (c) {
      lado += '<p class="cm-sec" style="margin-top:0">' + esc(c.nome) + '</p>' + item('Visão geral', 'cat/' + c.id + '/visao', a === 'visao') + '<p class="cm-sec">Catálogo</p>' +
        item('Produtos', 'cat/' + c.id + '/produtos', a === 'produtos', 'menu-produtos') + item('Conjuntos', 'cat/' + c.id + '/conjuntos', a === 'conjuntos', 'menu-conjuntos') + item('Fontes de dados', 'cat/' + c.id + '/fontes', a === 'fontes', 'menu-fontes') +
        item('Eventos', 'cat/' + c.id + '/eventos', a === 'eventos', 'menu-eventos') + item('Modelos de imagem', '', false) + item('Ofertas', '', false) + item('Lojas', '', false) + item('Lista de tarefas', '', false) + item('Configurações', 'cat/' + c.id + '/config', a === 'config', 'menu-config');
    } else lado += item('Ativos', 'inicio', true, 'menu-ativos') + item('Todas as ferramentas', '', false);
    lado += '<p class="cm-sec">Usadas com frequência</p>' + item('Gerenciador de Anúncios', '', false) + item('Gerenciador de Eventos', '', false) + item('Regras automatizadas', '', false) + '</aside>';
    return '<div class="sim-faixa">🧪 Simulador de treinamento do Gerenciador de Comércio · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div><div class="cm">' + lado + '<main class="cm-corpo">' + corpo + '<p class="conferido">✓ Telas conferidas com o Gerenciador de Comércio real em ' + CONF + ' (catálogo de aula)</p></main></div>';
  }
  function pendente(t) { return '<p class="conferido pendente">⚠ ' + t + ' · a conferir com a tela real</p>' }

  /* ---------- Ativos (início) ---------- */
  function inicio(modal) {
    var lista = S.cats.map(function (c) { return '<div class="cm-cat" data-ir="cat/' + c.id + '/visao" data-t="cat-item"><span>🗂️</span><div><b>' + esc(c.nome) + '</b><br><small>ID do catálogo: ' + c.id + '</small></div></div>' }).join('') +
      '<div class="cm-cat" style="cursor:default;opacity:.85"><span>🗂️</span><div><b>WhatsApp Product Catalog</b><span class="cm-sem">Sem acesso</span><br><small>ID do catálogo: 100000000000002</small></div></div>';
    return casca('<h1>Ativos</h1><div class="cm-card"><h3>Contas comerciais</h3><p class="cm-vazio"><span class="ilus">🛒</span><br><b>Venda em uma loja personalizada</b><br>Para começar a vender seus produtos no Facebook e no Instagram, adicione uma loja. Durante a configuração, você pode conectar um catálogo com os produtos que gostaria de vender ou pode criar um novo catálogo.</p><button class="btn sec" disabled>Adicionar conta</button></div>' +
      '<div class="cm-card" data-t="cat-lista"><h3>Catálogos</h3><p class="cm-sub">Pesquisar por nome ou ID</p><div style="display:flex;gap:8px;margin-bottom:6px"><button class="btn" data-ir="' + (S.cats.length ? 'confirmar' : 'novo') + '" data-t="btn-mais" title="Para ter a melhor experiência de comércio, recomendamos que use apenas um catálogo para todo o seu inventário. Você pode atualizar, excluir ou substituir itens quando quiser.">＋</button><button class="btn sec" disabled>Gerenciar lista</button></div><div class="cm-lista">' + lista + '</div></div>', null) + (modal || '');
  }
  function modalConfirmar() {
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-confirmar"><h2>Tem certeza de que deseja criar um novo catálogo?</h2><h3>Melhore o desempenho dos anúncios com um catálogo</h3><p>Os anunciantes que usaram um catálogo tiveram uma redução de 17% no custo por resultado e um aumento de 15% no retorno sobre o investimento em publicidade. Consolide seus catálogos para ter melhores resultados.</p>' +
      '<p><b>Considere estas alternativas</b></p><ul><li>Criar conjuntos para agrupar produtos para campanhas específicas</li><li>Criar uma lista de países ou idiomas para localizar seu catálogo</li><li>Solicitar acesso a outros catálogos</li></ul>' +
      '<div class="rodape-jan"><button class="btn sec" data-ir="inicio" data-t="btn-usar-existente">Usar um catálogo existente</button><button class="btn" data-ir="novo" data-t="btn-continuar">Continuar</button></div></div></div>';
  }

  /* ---------- assistente: novo catálogo ---------- */
  var TIPOS = [['Produtos online', 'Produtos físicos', 'Produtos vendidos online, como artigos para casa e vestuário'], ['Imóveis', 'Produtos físicos', ''], ['Veículos', 'Produtos físicos', ''], ['Veículos e ofertas', 'Produtos físicos', ''], ['Produtos ou conteúdo digitais', '', ''], ['Serviços', '', ''], ['Produtos ou serviços locais', '', ''], ['Outro', '', '']];
  function etapas(n) { return '<div class="cm-etapas"><span class="' + (n === 1 ? 'on' : '') + '">Configurações</span><span class="' + (n === 2 ? 'on' : '') + '">Produtos</span></div>' }
  function novo() {
    var tipos = TIPOS.map(function (t, i) {
      var on = W.tipo === t[0];
      return (i === 0 ? '<p><b>Produtos físicos</b></p>' : '') + '<label class="cm-op sub' + (on ? ' on' : '') + '" data-t="' + (i === 0 ? 'tipo-online' : 'tipo-outro') + '"><input type="radio" name="cmTipo" value="' + esc(t[0]) + '"' + (on ? ' checked' : '') + '/><span><b>' + t[0] + '</b>' + (t[2] ? '<small>' + t[2] + '</small>' : '') + '</span></label>';
    }).join('').replace('<p><b>Produtos físicos</b></p>', '<p><b>Produtos físicos</b></p>');
    return casca('<h1>Novo catálogo</h1>' + etapas(1) + '<div class="cm-card" data-t="cm-config"><h3>Configure seu catálogo</h3><p class="cm-sub">Armazene e gerencie informações sobre os produtos, conteúdos ou serviços que você quer promover.</p>' +
      '<div data-t="cm-tipo"><p><b>Escolha o que melhor descreve seus produtos ou serviços</b></p><p class="cm-sub">Selecione a opção mais relevante para otimizar a configuração do seu catálogo. <b>Não será possível alterá-la depois.</b></p>' + tipos + '</div>' +
      '<label class="cm-op"><input type="checkbox" disabled/><span><b>Conectar-se a uma plataforma de parceiro</b><small>Sincronize e gerencie seus produtos de uma plataforma como Shopify ou WooCommerce +11</small></span></label>' +
      '<p><b>Portfólio empresarial</b>: Lojinha da Marina Aula</p><p><b>Nome do catálogo</b></p><input class="ga-in" id="cmNome" data-t="cat-nome" value="' + esc(W.nome) + '" placeholder="Nome do catálogo"/>' +
      '<div data-t="cm-acesso"><p><b>Gerenciar acesso</b> · Dar acesso às pessoas</p><p class="cm-sub">Os usuários da empresa terão acesso total automático a este catálogo. Você poderá atualizar o acesso individual quando quiser nas Configurações da empresa.</p></div>' +
      '<p><b>Conecte seus dados</b></p><p class="cm-sub">Selecione o conjunto de dados que você quer usar para rastrear os produtos ou serviços com os quais as pessoas interagem no seu site ou app. <button class="btn sec" disabled>Conectar dados</button></p>' +
      '<p class="cm-sub">Termos do Catálogo</p><div class="cm-rod"><button class="btn sec" data-ir="inicio">Cancelar</button><button class="btn" data-acao="novo-avancar" data-t="btn-avancar"' + (W.tipo && W.nome.trim() ? '' : ' disabled') + '>Avançar</button></div></div>');
  }
  function novoProdutos() {
    var op = function (id, t, d, tt) { return '<label class="cm-op' + (W.como === id ? ' on' : '') + '" data-t="' + tt + '"><input type="radio" name="cmComo" value="' + id + '"' + (W.como === id ? ' checked' : '') + '/><span><b>' + t + '</b><small>' + d + '</small></span></label>' };
    return casca('<h1>Novo catálogo</h1>' + etapas(2) + '<div class="cm-card"><h3>Escolha como adicionar seus produtos ou serviços</h3><div data-t="cm-como">' +
      op('arquivo', 'Carregar um arquivo de dados', 'Use uma planilha ou arquivo para adicionar e atualizar seus produtos automaticamente', 'op-arquivo') +
      op('redes', 'Produtos das suas redes sociais', 'Com sua permissão, adicionaremos automaticamente os produtos encontrados nos seus posts nos últimos 45 dias', 'op-redes') +
      op('manual', 'Adicionar seus produtos manualmente', 'Adicione e edite seus produtos um por um, ou em lote', 'op-manual') +
      op('depois', 'Adicionar produtos depois', 'Você pode criar o catálogo agora e adicionar os produtos mais tarde', 'op-depois') + '</div>' + pendente('Os textos das opções 2 a 4 foram resumidos das telas reais') +
      '<div class="cm-rod"><button class="btn sec" data-ir="novo">Voltar</button><button class="btn" data-acao="como-avancar" data-t="btn-como"' + (W.como ? '' : ' disabled') + '>Avançar</button></div></div>');
  }
  function novoArquivo() {
    var usd = W.moeda === 'USD';
    return casca('<h1>Novo catálogo</h1>' + etapas(2) + '<div class="cm-card"><h3>Carregar um arquivo de dados</h3><p class="cm-sub">Seu arquivo está formatado para qual plataforma? Gerenciador de Comércio · <a>Baixar modelo</a></p>' +
      '<p><b>Usar um URL ou o Planilhas Google</b></p><p class="cm-sub">Você pode direcionar para um arquivo CSV, TSV, XML (RSS/ATOM) ou XLSX de até 4 GB.</p><input class="ga-in" id="cmUrl" data-t="url-feed" value="' + esc(W.url) + '" placeholder="https://…/catalogo.csv"/><p class="cm-sub">Detalhes de login opcionais</p>' +
      '<div data-t="cm-confirmar"><h3 style="margin-top:14px">Confirmar configurações</h3><p><b>Nome do feed</b></p><input class="ga-in" id="cmFeed" value="' + esc(W.nomeFeed || 'Novo feed de dados') + '"/>' +
      '<p><b>Moeda padrão</b></p><select class="ga-in" id="cmMoeda" data-t="moeda-feed"><option value="USD"' + (usd ? ' selected' : '') + '>USD — Dólar americano</option><option value="BRL"' + (!usd ? ' selected' : '') + '>BRL — Real brasileiro</option><option value="EUR">EUR — Euro</option></select>' +
      (usd ? '<p class="cm-set" data-t="aviso-moeda">⚠ A moeda padrão veio em <b>USD</b>. Se o feed não trouxer a moeda em cada preço, os produtos entram em dólar. Troque para a moeda da loja.</p>' : '') +
      '<p><b>Programação do feed</b> · Frequência</p><select class="ga-in" id="cmFreq" data-t="freq-feed"><option value="A cada hora">A cada hora</option><option value="Diariamente" selected>Diariamente</option><option value="Semanalmente">Semanalmente</option></select></div>' +
      '<div class="cm-rod"><button class="btn sec" data-ir="novo-produtos">Voltar</button><button class="btn" data-acao="carregar-arquivo" data-t="btn-carregar"' + (/^https?:\/\//.test(W.url.trim()) ? '' : ' disabled') + '>Carregar</button></div></div>');
  }
  function novoManual() {
    var linhas = W.linhas.map(function (l, i) {
      return '<tr><td class="cm-nao">🖼</td><td><input data-ln="' + i + '" data-c="titulo" value="' + esc(l.titulo || '') + '" placeholder="Título"/></td><td class="cm-nao">0/9999</td><td class="cm-nao">https://…</td><td><input data-ln="' + i + '" data-c="preco" value="' + esc(l.preco || '') + '" placeholder="0,00"/></td><td class="cm-nao">—</td><td class="cm-nao">Categoria</td><td class="cm-nao">Novo</td><td class="cm-nao">Em estoque</td><td class="cm-nao">Mostrar</td><td class="cm-nao">Marca</td><td><input data-ln="' + i + '" data-c="id" value="' + esc(l.id || '') + '" placeholder="ID"/></td></tr>';
    }).join('');
    var ok = W.linhas.filter(function (l) { return l.titulo && l.preco && l.id }).length;
    return casca('<h1>Adicionar produtos</h1>' + etapas(2) + '<div class="cm-card"><p class="ga-aviso">Adicione pelo menos 5 produtos para veicular anúncios de catálogo Advantage+</p><div class="cm-grade" data-t="grade-manual"><table class="cm-tab"><thead><tr><th>Imagens e vídeos</th><th>Título (0/200)</th><th>Descrição (0/9999)</th><th>Link do site</th><th>Preço (BRL)</th><th>Preço promocional</th><th>Categoria de produto do Facebook</th><th>Condição</th><th>Disponibilidade</th><th>Status</th><th>Marca</th><th>Identificação do conteúdo (Retailer id)</th></tr></thead><tbody>' + linhas + '</tbody></table></div>' +
      '<div class="cm-rod"><button class="btn sec" data-acao="novo-produto">Novo produto</button><button class="btn" data-acao="carregar-manual" data-t="btn-carregar-manual"' + (ok ? '' : ' disabled') + '>Carregar produtos</button></div></div>');
  }

  /* ---------- dentro do catálogo ---------- */
  function visao(c, r) {
    var temFeed = c.fontes.length > 0;
    return casca('<h1>Visão geral</h1><div class="cm-card" data-t="cm-visao"><h3>Conclua a configuração do seu catálogo</h3><p class="cm-sub">Faltam apenas algumas etapas para você poder promover seus produtos ou serviços.</p>' +
      '<p><b>Configurações</b></p><p class="cm-sub">Conecte dados do seu site ou app. Isso nos ajuda a mostrar seus produtos ou serviços para as pessoas certas.</p><button class="btn sec" data-ir="cat/' + c.id + '/eventos" data-t="btn-conectar">Conectar dados</button>' +
      '<p style="margin-top:12px"><b>Produtos</b></p><p class="cm-sub">Seus produtos ou serviços foram salvos no catálogo.</p><button class="btn sec" data-ir="cat/' + c.id + '/produtos" data-t="btn-analisar">Analisar produtos</button></div>' +
      '<div class="cm-card"><h3>Próximas etapas para seu catálogo</h3><p><b>Os anúncios de catálogo Advantage+ agora estão desbloqueados para mais contas de anúncios</b></p><p class="cm-sub">Agora, as contas de anúncios com um pixel conectado a um catálogo podem usar esse catálogo para criar anúncios. Esse acesso é automático.</p>' +
      '<p><b>Destaque seus anúncios com modelos de imagem personalizados</b></p><p class="cm-sub">Crie um modelo de imagem que combine elementos da marca, como seu logotipo, fontes e cores, com informações dos produtos do seu catálogo.</p></div>' +
      '<div class="cm-card"><h3>Perguntas frequentes</h3><p>Por que os clientes não conseguem ver alguns dos meus produtos?</p><p>Como controlo quais produtos aparecem nas experiências de navegação de produtos?</p><p>Como posso oferecer promoções aos clientes?</p></div>', r);
  }
  function telaProdutos(c, r) {
    var ps = produtos(c);
    var linhas = ps.map(function (p) {
      var it = p.grupo ? p.chave : p.chave, esg = !p.disp;
      return '<tr data-t="prod-' + p.chave.toLowerCase() + '"><td class="nome"><b>' + esc(p.nome) + '</b><small>' + (p.grupo ? 'Identificação do grupo: ' : 'Identificação do conteúdo: ') + '<span data-t="idc-' + p.chave.toLowerCase() + '">' + p.chave + '</span></small></td><td><span class="cm-st"><i></i>' + (p.grupo ? 'Qualificadas' : 'Qualificado') + '</span></td><td>' + (p.grupo ? p.vars : '—') + '</td><td><span class="cm-st' + (esg ? ' verm' : '') + '" data-t="disp-' + p.chave.toLowerCase() + '"><i></i>' + (esg ? 'Indisponível' : 'Em estoque') + '</span>' + (p.grupo ? '<br><small>' + p.vars + ' variantes</small>' : '') + '</td><td>' + preco(p) + (p.moeda === 'USD' ? ' <span class="ga-tag am">dólar</span>' : '') + '</td><td>15 de out às 01:20</td><td><button class="btn sec" disabled>Ações</button></td></tr>';
    }).join('');
    return casca('<h1>Produtos</h1><p class="cm-sub">Veja e gerencie todos os ' + ps.length + ' produtos no seu catálogo. Você pode encontrar produtos específicos rapidamente usando a pesquisa ou os filtros.</p>' +
      '<div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap"><button class="btn sec" disabled>Criar campanha</button><button class="btn" data-ir="cat/' + c.id + '/produtos" data-t="btn-adicionar-prod">Adicionar</button><span class="ga-tag">Todos os produtos ' + ps.length + '</span><span class="ga-tag am">Ações 2</span><button class="btn sec" disabled>Criar conjunto</button></div>' +
      (ps.length ? '<div class="cm-card"><div class="cm-grade"><table class="cm-tab" data-t="tab-produtos"><thead><tr><th>Nome</th><th>Status</th><th>Variantes</th><th>Disponibilidade</th><th>Preço</th><th>Última atualização</th><th></th></tr></thead><tbody>' + linhas + '</tbody></table></div></div>' : '<div class="cm-card cm-vazio">Nenhum produto ainda. Adicione produtos ou conecte uma fonte de dados.</div>'), r);
  }
  function telaConjuntos(c, r) {
    var ps = produtos(c);
    return casca('<h1>Conjuntos de produtos</h1><p class="cm-sub">Crie e gerencie conjuntos de produtos no seu catálogo. Saiba mais</p><div style="display:flex;gap:8px;margin-bottom:10px"><button class="btn" data-acao="criar-conjunto">Criar conjunto</button><span class="cm-nao">Pesquisar conjuntos · Filtros</span></div>' +
      '<div class="cm-card"><table class="cm-tab" data-t="tab-conjuntos"><thead><tr><th>Conjuntos</th><th>Usado em</th><th>Data de criação</th><th>Ações</th></tr></thead><tbody><tr><td class="nome"><b>All Products</b><small>' + ps.length + ' produtos · ' + c.itens.length + ' variantes</small></td><td>—</td><td>15 de out de 2026</td><td><button class="btn sec" disabled>Mais</button></td></tr></tbody></table><p class="cm-sub">Escolha onde usar esse conjunto, crie um conjunto semelhante ou exclua-o.</p></div>' + pendente('A janela de “Criar conjunto” ainda não foi vista'), r);
  }
  /* Pixel como fonte de itens do catálogo: as 5 condições vêm da Central de Ajuda; aqui lemos o que as outras telas do treino já guardaram */
  var PX = { menu: false, jan: false };
  function lsj(k) { try { return JSON.parse(localStorage.getItem(k) || 'null') } catch (e) { return null } }
  function condPx() {
    var ev = lsj('sim.eventos'), ds = ev && ev.datasets && ev.datasets[0], feed = lsj('sim.feed') || [], md = lsj('sim.microdados'), agora = Date.now(), semana = 7 * 24 * 3600 * 1000;
    var vc = feed.some(function (e) { return e.nome === 'ViewContent' }), rec = feed.some(function (e) { return agora - (e.t || agora) < semana });
    return [
      { id: 'portf', ok: !!ds, txt: 'O Pixel e o catálogo estão no mesmo portfólio empresarial', ajuda: 'Crie ou conecte o Pixel no Gerenciador de Eventos.', link: 'meta-eventos.html', lk: 'Abrir o Gerenciador de Eventos' },
      { id: 'perm', ok: true, txt: 'Você tem controle total do catálogo e do Pixel', ajuda: '' },
      { id: 'vc', ok: vc, txt: 'O Pixel recebeu o evento ViewContent com a Identificação do conteúdo', ajuda: 'Abra um produto na loja (isso dispara o ViewContent) e confira em Testar eventos.', link: 'loja.html', lk: 'Abrir a loja' },
      { id: 'micro', ok: !!(md && md.res && md.res.ok), txt: 'As páginas de produto têm microdados (tags) corretos', ajuda: 'Verifique uma página de produto no Microdata Debugger.', link: 'meta-microdados.html', lk: 'Abrir o Microdata Debugger' },
      { id: 'sete', ok: rec, txt: 'O Pixel disparou nos últimos sete dias', ajuda: 'Abra uma página da loja para o Pixel disparar.', link: 'loja.html', lk: 'Abrir a loja' }
    ];
  }
  function janelaPixel(c) {
    var L = condPx(), tudo = L.every(function (x) { return x.ok });
    return '<div class="fundo" data-t="jan-pixel"><div class="janela"><h3>Adicionar itens com o Pixel<button class="x" data-acao="fonte-fecha">✕</button></h3><p>O Pixel pode adicionar e atualizar itens do catálogo quando alguém vê um produto. Cinco condições:</p><div data-t="lista-px">' +
      L.map(function (x) { return '<div class="pf-linha" data-t="cond-' + x.id + '"><span class="L">' + (x.ok ? '✓' : '✕') + '</span><span><b>' + x.txt + '</b>' + (x.ok ? '' : '<small>' + x.ajuda + (x.link ? ' <a href="' + x.link + '">' + x.lk + '</a>' : '') + '</small>') + '</span></div>' }).join('') + '</div>' +
      '<p class="miudo">Pode levar até 24 horas para ficar pronto; depois atualiza o catálogo a cada interação, normalmente em até 15 minutos. ⚠ Janela montada pela Central de Ajuda (a conferir).</p>' +
      '<div class="rodape-jan"><button class="btn sec" data-acao="fonte-fecha">Cancelar</button><button class="btn" data-acao="fonte-pixel-ok" data-t="btn-add-pixel"' + (tudo ? '' : ' disabled') + '>Adicionar</button></div></div></div>';
  }
  function telaFontes(c, r) {
    var f = c.fontes[0], extra = c.fontes.slice(1).map(function (x) { return '<tr data-t="fonte-linha-2"><td class="nome"><b>' + esc(x.nome) + '</b></td><td>' + x.tipo + '<br><small>' + x.sub + '</small></td><td>' + c.itens.length + '</td><td><span class="cm-st"><i></i>Tudo certo</span></td><td>agora<br><small>' + x.quando + '</small></td><td></td></tr>' }).join('');
    var corpo = f ? '<tr data-t="fonte-linha"><td class="nome"><b>' + esc(f.nome) + '</b></td><td>' + f.tipo + '<br><small>' + f.sub + '</small></td><td>' + c.itens.length + '</td><td><span class="cm-st"><i></i>Tudo certo</span></td><td>15 de out às 01:20<br><small>' + f.quando + '</small></td><td><button class="btn sec" data-acao="atualizar-feed" data-t="btn-atualizar">Atualizar</button></td></tr>' + extra : '<tr><td colspan="6" class="cm-vazio">Nenhuma fonte de dados ainda.</td></tr>';
    return casca('<h1>Fontes de dados</h1><p class="cm-sub">Gerencie as fontes de dados que fornecem informações sobre os produtos no seu catálogo. Saiba mais</p><div style="margin-bottom:10px;position:relative"><button class="btn" data-acao="fonte-menu" data-t="btn-add-fonte">Adicionar</button>' + (PX.menu ? '<div class="cm-card" data-t="menu-add-fonte" style="position:absolute;z-index:5;min-width:280px;margin-top:4px"><b>Adicionar itens</b><p class="cm-sub">Escolha de onde vêm os produtos.</p><button class="btn sec" disabled>Carregar um arquivo de dados</button> <button class="btn sec" disabled>API de Catálogo</button> <button class="btn" data-acao="fonte-pixel" data-t="op-pixel">Pixel da Meta</button><p class="cm-sub">⚠ Opções do menu montadas pela Central de Ajuda (a conferir com a tela real).</p></div>' : '') + '</div>' +
      '<p class="ga-aviso">Adicione produtos do seu site usando a API de Catálogo — A API de catálogo sincroniza produtos do seu site em tempo real. Crie um app para conectar e manter seu catálogo atualizado.</p>' +
      '<div class="cm-card"><table class="cm-tab"><thead><tr><th>Nome</th><th>Tipo</th><th>Produtos</th><th>Status</th><th>Última atualização</th><th></th></tr></thead><tbody>' + corpo + '</tbody></table></div>' +
      (PX.jan ? janelaPixel(c) : '') + (c.fontes.some(function (x) { return x.tipo === 'Pixel' }) ? '<div class="ga-aviso ok" data-t="msg-px"><b>✓ Pixel adicionado como fonte.</b> Pode levar até 24 horas para ficar pronto; depois atualiza o catálogo a cada interação, normalmente em até 15 minutos.</div>' : '') + (f ? '<p class="cm-set" data-t="cm-simulador">🧪 <b>Só no simulador:</b> o estoque mora no <b>site</b>, não aqui. <label><input type="checkbox" id="cmSite"' + (c.siteCorrigido ? ' checked' : '') + ' data-t="chk-site"/> o estoque do Moletom já foi corrigido no site</label> · depois clique em Atualizar.</p>' : ''), r);
  }
  function telaEventos(c, r) {
    return casca('<h1>Eventos</h1><div class="cm-card" data-t="cm-eventos"><h3>Conecte seus dados para acompanhar e personalizar melhor seus anúncios</h3><p>Conecte uma fonte de dados ao seu site ou app para:</p><ul><li>Encontrar novos clientes e garantir que seus anúncios apareçam para as pessoas certas.</li><li>Redirecionar pessoas que mostraram interesse nos produtos do seu site.</li><li>Fazer venda cruzada ou upsell de produtos relacionados para aumentar o valor da compra dos seus clientes.</li></ul>' +
      '<p><a>Como configurar o acompanhamento de eventos</a></p><a class="btn" href="meta-eventos.html" data-t="btn-eventos">Configurar no Gerenciador de Eventos</a></div>', r);
  }
  function telaConfig(c, r) {
    var idi = c.idioma || 'Clique em Editar para atualizar', pai = c.pais || 'Clique em Editar para atualizar';
    return casca('<h1>Configurações</h1><div class="cm-card"><h3>Marketing</h3><p>Colete emails de clientes com uma oferta para cadastro por email.</p><p>Destino da oferta: Site · Desativado</p><p class="cm-sub">Mostre sua oferta com anúncios que direcionam para seu site.</p>' +
      '<p><b>Merchandising da oferta</b> · Deixe a Meta mostrar automaticamente as ofertas detectadas quando as pessoas navegarem pelos seus produtos no Facebook e no Instagram.</p><p>Ofertas detectadas: Ativada · As ofertas detectadas estão ativadas</p></div>' +
      '<div class="cm-card"><h3>Envio e devoluções</h3><p>Envio: Nenhum perfil de envio</p><p>Devoluções: Sem janela de devolução</p></div>' +
      '<div class="cm-card" data-t="cfg-eventos"><h3>Fontes de eventos</h3><p class="cm-sub">Conecte um pixel ou app da Meta ao seu catálogo para mostrar produtos mais relevantes ao público.</p></div>' +
      '<div class="cm-card" data-t="cfg-idioma"><h3>Idioma e país padrões</h3><p class="cm-sub">Mostre às pessoas anúncios e posicionamentos de compras com suas informações de inventário no idioma de preferência delas e com informações relevantes específicas do país, como a moeda.</p>' +
      '<p>Idioma padrão: <b>' + esc(idi) + '</b></p><p>País padrão: <b>' + esc(pai) + '</b></p><button class="btn sec" data-acao="editar-idioma">Editar</button></div>' +
      '<div class="cm-card"><h3>Permissões</h3><p>Gerencie quem tem acesso ao seu catálogo.</p><p>2 pessoas têm acesso ao seu catálogo · Permissões automáticas ativadas para seu catálogo</p></div>' +
      '<div class="cm-card" data-t="cfg-visib"><h3>Produtos no Instagram e Facebook</h3><p class="cm-sub">Gerencie quais produtos aparecem para as pessoas adicionarem ao próprio conteúdo. Elas ainda poderão adicionar seus produtos diretamente usando um URL.</p><p>Visibilidade do produto: Todos os produtos · ' + c.itens.length + ' produtos</p><p>Contas impedidas de adicionar produtos: 0 contas do Instagram • 0 contas do Facebook</p></div>' +
      '<div class="cm-card"><h3>Termos e Condições</h3><p>Você aceitou o Acordo do Vendedor da Meta.</p></div>', r);
  }
  function modalIdioma() {
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-idioma"><h2>Idioma e país padrões</h2><p class="miudo">Pesquisa por idioma e país (no simulador, escolha uma opção).</p><p><b>Idioma padrão</b></p><select class="ga-in" id="cmIdi"><option value="">Selecione</option><option>Português (Brasil)</option><option>Espanhol (América Latina)</option><option>Inglês (EUA)</option></select><p><b>País padrão</b></p><select class="ga-in" id="cmPais"><option value="">Selecione</option><option>Brasil</option><option>México</option><option>Colômbia</option></select>' + pendente('A janela real de edição ainda não foi vista') + '<div class="rodape-jan"><button class="btn sec" data-ir="cat/' + (rota().id) + '/config">Cancelar</button><button class="btn" data-acao="salvar-idioma">Salvar</button></div></div></div>';
  }
  var ED = false;
  var TELAS = {
    inicio: function () { return inicio() },
    confirmar: function () { return inicio(modalConfirmar()) },
    novo: novo, 'novo-produtos': novoProdutos, 'novo-arquivo': novoArquivo, 'novo-manual': novoManual,
    cat: function () {
      var r = rota(), c = cat(r.id); if (!c) return inicio();
      var t = r.aba === 'produtos' ? telaProdutos(c, r) : r.aba === 'conjuntos' ? telaConjuntos(c, r) : r.aba === 'fontes' ? telaFontes(c, r) : r.aba === 'eventos' ? telaEventos(c, r) : r.aba === 'config' ? telaConfig(c, r) : visao(c, r);
      return t + (ED ? modalIdioma() : '');
    }
  };

  /* ---------- ações ---------- */
  function criaCatalogo(itens, fontes) {
    var c = { id: novoId(), nome: W.nome.trim() || 'Novo catálogo', tipo: W.tipo || 'Produtos online', itens: itens, fontes: fontes || [], idioma: '', pais: '', siteCorrigido: false };
    S.cats.push(c); grava();
    var id = c.id; W = { tipo: '', nome: '', como: '', url: '', nomeFeed: '', moeda: 'USD', freq: 'Diariamente', linhas: [{}, {}, {}, {}, {}] }; window.__simCm = { S: S, W: W };
    vai('cat/' + id + '/visao');
  }
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-ir],[data-acao]'); if (!a || a.disabled) return;
    if (a.hasAttribute('data-ir')) { var d = a.getAttribute('data-ir'); if (d === 'novo' && S.cats.length === 0) { } ED = false; vai(d); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'novo-avancar') { if (W.tipo && W.nome.trim()) vai('novo-produtos') }
    else if (ac === 'como-avancar') { if (W.como === 'arquivo') vai('novo-arquivo'); else if (W.como === 'manual') vai('novo-manual'); else if (W.como === 'redes' || W.como === 'depois') criaCatalogo([], []) }
    else if (ac === 'carregar-arquivo') { var moeda = W.moeda; criaCatalogo(itensBase(moeda), [{ nome: W.nomeFeed || 'Novo feed de dados', tipo: 'Arquivo de dados', sub: 'Carregamento programado', n: 12, quando: 'Substituído todos os dias', moeda: moeda }]) }
    else if (ac === 'novo-produto') { W.linhas.push({}); render() }
    else if (ac === 'carregar-manual') { var itens = W.linhas.filter(function (l) { return l.titulo && l.preco && l.id }).map(function (l) { return { id: l.id, grupo: '', nome: l.titulo, preco: parseFloat(String(l.preco).replace(',', '.')) || 0, disp: 1, moeda: 'BRL' } }); criaCatalogo(itens, []) }
    else if (ac === 'atualizar-feed') { var c = cat(rota().id); if (c) { if (c.siteCorrigido) c.itens.forEach(function (i) { if (i.id === 'MOLETOM_01') i.disp = 1 }); grava(); render() } }
    else if (ac === 'fonte-menu') { PX.menu = !PX.menu; render() }
    else if (ac === 'fonte-pixel') { PX.menu = false; PX.jan = true; render() }
    else if (ac === 'fonte-fecha') { PX.jan = false; render() }
    else if (ac === 'fonte-pixel-ok') { var cp = cat(rota().id); if (cp && !cp.fontes.some(function (x) { return x.tipo === 'Pixel' })) cp.fontes.push({ nome: 'Pixel da Mari', tipo: 'Pixel', sub: 'Atualização a cada interação', n: cp.itens.length, quando: 'Atualiza a cada interação' }); PX.jan = false; grava(); render() }
    else if (ac === 'editar-idioma') { ED = true; render() }
    else if (ac === 'salvar-idioma') { var c2 = cat(rota().id), i1 = $('#cmIdi'), p1 = $('#cmPais'); if (c2) { c2.idioma = i1.value || c2.idioma; c2.pais = p1.value || c2.pais; grava() } ED = false; render() }
    else if (ac === 'criar-conjunto') { alert('No simulador, a janela “Criar conjunto” ainda não está montada (a tela real não foi vista).') }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.name === 'cmTipo') { W.tipo = t.value; window.__simCm = { S: S, W: W }; render() }
    else if (t.name === 'cmComo') { W.como = t.value; window.__simCm = { S: S, W: W }; render() }
    else if (t.id === 'cmMoeda') { W.moeda = t.value; window.__simCm = { S: S, W: W }; render() }
    else if (t.id === 'cmFreq') { W.freq = t.value }
    else if (t.id === 'cmSite') { var c = cat(rota().id); if (c) { c.siteCorrigido = t.checked; grava() } }
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.id === 'cmNome') { W.nome = t.value; var b = $('[data-t=btn-avancar]'); if (b) b.disabled = !(W.tipo && W.nome.trim()) }
    else if (t.id === 'cmUrl') { W.url = t.value; var b2 = $('[data-t=btn-carregar]'); if (b2) b2.disabled = !/^https?:\/\//.test(W.url.trim()) }
    else if (t.id === 'cmFeed') W.nomeFeed = t.value;
    else if (t.hasAttribute && t.hasAttribute('data-ln')) { W.linhas[+t.getAttribute('data-ln')][t.getAttribute('data-c')] = t.value; var b3 = $('[data-t=btn-carregar-manual]'); if (b3) b3.disabled = !W.linhas.some(function (l) { return l.titulo && l.preco && l.id }) }
    else return;
    window.__simCm = { S: S, W: W };
  });
  window.addEventListener('hashchange', function () { ED = false; render() });
  function render() { var r = rota(); if (/^novo/.test(r.tela) === false && r.tela !== 'inicio' && r.tela !== 'confirmar' && r.tela !== 'cat') r.tela = 'inicio'; $('#app').innerHTML = (TELAS[r.tela] || TELAS.inicio)(); window.__simCm = { S: S, W: W } }
  window.SIMCM = { vai: vai, estado: function () { return { S: S, W: W } }, exemplo: function () { if (!S.cats.length) { S.cats.push(exemplo()); grava() } return S.cats[0].id }, limpa: function () { S = { cats: [] }; grava() }, wiz: function (o) { for (var k in o) W[k] = o[k] } };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function cm() { return window.__simCm || { S: S, W: W } }
  function cid() { return window.SIMCM.exemplo() }
  TOURS['criar-catalogo'] = [
    { alvo: '[data-t=btn-mais]', clique: true, garante: function () { SIMCM.limpa(); SIMCM.exemplo(); location.hash = 'inicio' },
      tit: T('Já existe um catálogo', 'Ya existe un catálogo'), txt: T('Aqui ficam os catálogos do portfólio. A Marina já tem um. Mesmo assim, vamos ver o caminho de criar outro: clique no +.', 'Aquí están los catálogos del portfolio. Marina ya tiene uno. Aun así, vamos a ver el camino para crear otro: haz clic en el +.') },
    { alvo: '[data-t=jan-confirmar]', garante: function () { SIMCM.exemplo(); location.hash = 'confirmar' }, bloqueia: function (t) { return !!t.closest('[data-t=btn-usar-existente]') }, erro: T('Neste tutorial vamos criar um, então siga com Continuar.', 'En este tutorial vamos a crear uno, así que sigue con Continuar.'),
      tit: T('O aviso: um catálogo só?', 'El aviso: ¿un solo catálogo?'), txt: T('A Meta pergunta se você tem certeza: um catálogo único costuma dar melhores resultados, e há alternativas (conjuntos, lista de países ou idiomas, pedir acesso). Leia e clique em Próximo.', 'Meta pregunta si estás seguro: un catálogo único suele dar mejores resultados, y hay alternativas (conjuntos, lista de países o idiomas, pedir acceso). Lee y haz clic en Siguiente.') },
    { alvo: '[data-t=btn-continuar]', clique: true, garante: function () { SIMCM.exemplo(); location.hash = 'confirmar' }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=cm-tipo]', garante: function () { location.hash = 'novo' }, cond: function () { return cm().W.tipo === 'Produtos online' },
      bloqueia: function (t) { var l = t.closest('label'); return !!(l && l.getAttribute('data-t') !== 'tipo-online') }, erro: T('A Marina vende canecas e camisetas pela internet: o tipo certo é Produtos online.', 'Marina vende tazas y camisetas por internet: el tipo correcto es Productos online.'),
      tit: T('O tipo do catálogo', 'El tipo de catálogo'), txt: T('Escolha o que melhor descreve os produtos. Atenção: não dá para mudar depois. A Marina vende pela internet: escolha Produtos online e clique em Próximo.', 'Elige lo que mejor describa los productos. Atención: no se puede cambiar después. Marina vende por internet: elige Productos online y haz clic en Siguiente.'),
      dica: T('Se errar o tipo, só criando outro catálogo.', 'Si te equivocas con el tipo, solo creando otro catálogo.') },
    { alvo: '[data-t=cat-nome]', garante: function () { location.hash = 'novo'; SIMCM.wiz({ tipo: 'Produtos online' }); render() }, cond: function () { return cm().W.nome.trim().length > 2 },
      tit: T('O nome', 'El nombre'), txt: T('Dê um nome fácil de reconhecer, por exemplo: Catálogo Lojinha da Marina. Depois clique em Próximo.', 'Dale un nombre fácil de reconocer, por ejemplo: Catálogo Lojinha da Marina. Después haz clic en Siguiente.') },
    { alvo: '[data-t=cm-acesso]', garante: function () { location.hash = 'novo'; SIMCM.wiz({ tipo: 'Produtos online', nome: 'Catálogo Lojinha da Marina' }); render() }, tit: T('Quem tem acesso', 'Quién tiene acceso'), txt: T('As pessoas do portfólio ganham acesso total ao catálogo automaticamente. Dá para ajustar o acesso de cada pessoa depois, nas Configurações da empresa. Clique em Próximo.', 'Las personas del portfolio obtienen acceso total al catálogo automáticamente. Se puede ajustar el acceso de cada persona después, en la configuración del negocio. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-avancar]', clique: true, garante: function () { location.hash = 'novo'; SIMCM.wiz({ tipo: 'Produtos online', nome: 'Catálogo Lojinha da Marina' }); render() }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=cm-como]', garante: function () { location.hash = 'novo-produtos' }, cond: function () { return cm().W.como === 'depois' },
      bloqueia: function (t) { var l = t.closest('label'); return !!(l && l.getAttribute('data-t') !== 'op-depois') }, erro: T('Neste tutorial vamos criar só o catálogo; os produtos entram na próxima aula. Escolha Adicionar produtos depois.', 'En este tutorial vamos a crear solo el catálogo; los productos entran en la próxima clase. Elige Agregar productos después.'),
      tit: T('Os produtos entram depois', 'Los productos entran después'), txt: T('Aqui a Meta oferece 3 jeitos de pôr produtos (arquivo, redes sociais, manual). Vamos ver isso na próxima aula: escolha Adicionar produtos depois e clique em Próximo.', 'Aquí Meta ofrece 3 formas de poner productos (archivo, redes sociales, manual). Lo veremos en la próxima clase: elige Agregar productos después y haz clic en Siguiente.') },
    { alvo: '[data-t=btn-como]', clique: true, garante: function () { location.hash = 'novo-produtos'; SIMCM.wiz({ como: 'depois' }); render() }, tit: T('Criar', 'Crear'), txt: T('Clique em Avançar para criar o catálogo.', 'Haz clic en Siguiente para crear el catálogo.') },
    { alvo: '[data-t=cm-visao]', fim: true, semVolta: true, tit: T('Catálogo criado! 🎉', '¡Catálogo creado! 🎉'), txt: T('Ele já aparece com as etapas que faltam: conectar dados (o Pixel) e adicionar produtos. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ya aparece con los pasos que faltan: conectar datos (el Pixel) y agregar productos. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['adicionar-produtos'] = [
    { alvo: '[data-t=cm-como]', garante: function () { SIMCM.limpa(); SIMCM.wiz({ tipo: 'Produtos online', nome: 'Catálogo Lojinha da Marina' }); location.hash = 'novo-produtos'; render() },
      tit: T('Três jeitos de pôr produtos', 'Tres formas de poner productos'), txt: T('Arquivo de dados (planilha ou feed, atualiza sozinho), produtos das redes sociais, ou manual (um por um). Para uma loja com site, o arquivo costuma ser o melhor, porque mantém tudo atualizado. Clique em Próximo.', 'Archivo de datos (hoja de cálculo o feed, se actualiza solo), productos de las redes sociales, o manual (uno por uno). Para una tienda con sitio web, el archivo suele ser lo mejor, porque mantiene todo actualizado. Haz clic en Siguiente.') },
    { alvo: '[data-t=cm-como]', garante: function () { location.hash = 'novo-produtos' }, cond: function () { return cm().W.como === 'arquivo' }, bloqueia: function (t) { var l = t.closest('label'); return !!(l && l.getAttribute('data-t') !== 'op-arquivo') }, erro: T('Para a Lojinha, que tem site e muitos produtos, o caminho é o arquivo de dados.', 'Para la Lojinha, que tiene sitio web y muchos productos, el camino es el archivo de datos.'), tit: T('Carregar um arquivo', 'Subir un archivo'), txt: T('Escolha Carregar um arquivo de dados e clique em Próximo.', 'Elige Subir un archivo de datos y haz clic en Siguiente.') },
    { alvo: '[data-t=btn-como]', clique: true, garante: function () { SIMCM.wiz({ como: 'arquivo' }); location.hash = 'novo-produtos'; render() }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=url-feed]', garante: function () { SIMCM.wiz({ como: 'arquivo' }); location.hash = 'novo-arquivo' }, cond: function () { return /^https?:\/\//.test(cm().W.url.trim()) },
      tit: T('O endereço do arquivo', 'La dirección del archivo'), txt: T('O arquivo pode ser CSV, TSV, XML ou XLSX de até 4 GB, num URL. Cole um endereço (por exemplo https://lojinha.exemplo/catalogo.csv). Depois clique em Próximo.', 'El archivo puede ser CSV, TSV, XML o XLSX de hasta 4 GB, en una URL. Pega una dirección (por ejemplo https://lojinha.exemplo/catalogo.csv). Después haz clic en Siguiente.') },
    { alvo: '[data-t=moeda-feed]', garante: function () { SIMCM.wiz({ como: 'arquivo', url: 'https://lojinha.exemplo/catalogo.csv' }); location.hash = 'novo-arquivo'; render() }, cond: function () { return cm().W.moeda === 'BRL' },
      tit: T('A pegadinha da moeda', 'La trampa de la moneda'), txt: T('Repare: a moeda padrão veio em USD (dólar). Se o arquivo não trouxer a moeda em cada preço, os produtos entram em dólar. A loja vende em reais: troque para BRL e clique em Próximo.', 'Fíjate: la moneda predeterminada vino en USD (dólar). Si el archivo no trae la moneda en cada precio, los productos entran en dólares. La tienda vende en reales: cambia a BRL y haz clic en Siguiente.'),
      dica: T('Preço em dólar no anúncio é um dos erros mais comuns.', 'El precio en dólares en el anuncio es uno de los errores más comunes.') },
    { alvo: '[data-t=freq-feed]', garante: function () { SIMCM.wiz({ como: 'arquivo', url: 'https://lojinha.exemplo/catalogo.csv', moeda: 'BRL' }); location.hash = 'novo-arquivo'; render() }, tit: T('Com que frequência?', '¿Con qué frecuencia?'), txt: T('O feed pode ser lido a cada hora, todo dia ou toda semana. “Diariamente” basta para a Lojinha. Quando o estoque muda no site, a mudança chega ao catálogo na próxima leitura. Clique em Próximo.', 'El feed se puede leer cada hora, todos los días o cada semana. “Diariamente” basta para la Lojinha. Cuando el stock cambia en el sitio, el cambio llega al catálogo en la próxima lectura. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-carregar]', clique: true, garante: function () { SIMCM.wiz({ como: 'arquivo', url: 'https://lojinha.exemplo/catalogo.csv', moeda: 'BRL' }); location.hash = 'novo-arquivo'; render() }, tit: T('Carregar', 'Subir'), txt: T('Clique em Carregar.', 'Haz clic en Subir.') },
    { alvo: '[data-t=menu-produtos]', clique: true, garante: function () { location.hash = 'cat/' + SIMCM.estado().S.cats[SIMCM.estado().S.cats.length - 1].id + '/visao' }, tit: T('Ver os produtos', 'Ver los productos'), txt: T('O catálogo foi criado com o feed. Abra Produtos para ver o que entrou.', 'El catálogo se creó con el feed. Abre Productos para ver lo que entró.') },
    { alvo: '[data-t=tab-produtos]', fim: true, semVolta: true, garante: function () { var s = SIMCM.estado().S; location.hash = 'cat/' + s.cats[s.cats.length - 1].id + '/produtos' }, tit: T('Produtos no catálogo! 🎉', '¡Productos en el catálogo! 🎉'), txt: T('São 12 itens do feed que viram 8 produtos (as camisetas têm 3 tamanhos cada). Cada produto tem a Identificação do conteúdo, o status, a disponibilidade e o preço em reais. Clique em Concluir.', 'Son 12 artículos del feed que se vuelven 8 productos (las camisetas tienen 3 tallas cada una). Cada producto tiene el Identificador de contenido, el estado, la disponibilidad y el precio en reales. Haz clic en Terminar.') }
  ];
  TOURS['conferir-ids'] = [
    { alvo: '[data-t=menu-produtos]', clique: true, garante: function () { SIMCM.limpa(); var id = cid(); location.hash = 'cat/' + id + '/visao' }, tit: T('O catálogo e o Pixel precisam falar a mesma língua', 'El catálogo y el Pixel necesitan hablar el mismo idioma'), txt: T('Para o anúncio de catálogo mostrar o produto certo, o código do produto no catálogo tem que ser igual ao que o Pixel manda nos eventos. Vamos achar o código no catálogo. Clique em Produtos.', 'Para que el anuncio de catálogo muestre el producto correcto, el código del producto en el catálogo tiene que ser igual al que el Pixel manda en los eventos. Vamos a encontrar el código en el catálogo. Haz clic en Productos.') },
    { alvo: '[data-t=idc-caneca_01]', garante: function () { location.hash = 'cat/' + cid() + '/produtos' }, tit: T('A Identificação do conteúdo', 'El Identificador de contenido'), txt: T('Este é o código do produto: CANECA_01. No Pixel, o evento de visualização do produto manda este mesmo valor em content_ids. Clique em Próximo.', 'Este es el código del producto: CANECA_01. En el Pixel, el evento de visualización del producto manda este mismo valor en content_ids. Haz clic en Siguiente.') },
    { alvo: '[data-t=prod-camiseta_02]', garante: function () { location.hash = 'cat/' + cid() + '/produtos' }, tit: T('Produtos com variantes', 'Productos con variantes'), txt: T('Camisetas têm tamanhos. Aqui o código é a Identificação do <b>grupo</b> (CAMISETA_02), e cada tamanho tem o seu código (por exemplo CAMISETA_02_P). Na loja, o Pixel precisa mandar o código certo, do tamanho ou do grupo, conforme o catálogo. Clique em Próximo.', 'Las camisetas tienen tallas. Aquí el código es el Identificador de <b>grupo</b> (CAMISETA_02), y cada talla tiene su código (por ejemplo CAMISETA_02_P). En la tienda, el Pixel necesita mandar el código correcto, de la talla o del grupo, según el catálogo. Haz clic en Siguiente.') },
    { alvo: '[data-t=menu-eventos]', clique: true, garante: function () { location.hash = 'cat/' + cid() + '/produtos' }, tit: T('Eventos', 'Eventos'), txt: T('Agora a outra metade. Clique em Eventos.', 'Ahora la otra mitad. Haz clic en Eventos.') },
    { alvo: '[data-t=cm-eventos]', fim: true, semVolta: true, garante: function () { location.hash = 'cat/' + cid() + '/eventos' }, tit: T('Conecte os dados 🎉', '¡Conecta los datos! 🎉'), txt: T('Aqui o catálogo pede a ligação com o Pixel, que se configura no Gerenciador de Eventos. Para conferir se os códigos batem, olhe o evento no Testar eventos e compare o content_ids com a Identificação do conteúdo do catálogo. Clique em Concluir.', 'Aquí el catálogo pide la conexión con el Pixel, que se configura en el Administrador de eventos. Para revisar si los códigos coinciden, mira el evento en Probar eventos y compara el content_ids con el Identificador de contenido del catálogo. Haz clic en Terminar.') }
  ];
  TOURS['achar-produto'] = [
    { alvo: '[data-t=menu-produtos]', clique: true, garante: function () { SIMCM.limpa(); var id = cid(); location.hash = 'cat/' + id + '/visao' }, tit: T('“Meu produto não aparece!”', '“¡Mi producto no aparece!”'), txt: T('A Marina diz que o Moletom não aparece nos anúncios. Primeiro, olhe o produto no catálogo. Clique em Produtos.', 'Marina dice que el Buzo no aparece en los anuncios. Primero, mira el producto en el catálogo. Haz clic en Productos.') },
    { alvo: '[data-t=disp-moletom_01]', garante: function () { location.hash = 'cat/' + cid() + '/produtos' }, tit: T('Indisponível', 'Agotado'), txt: T('Achamos: o Moletom está “Indisponível”. O status é Qualificado (não tem erro), mas o estoque veio zerado do site. Produto sem estoque não é mostrado. Clique em Próximo.', 'Lo encontramos: el Buzo está “Agotado”. El estado es Elegible (no tiene error), pero el stock vino en cero del sitio. Un producto sin stock no se muestra. Haz clic en Siguiente.') },
    { alvo: '[data-t=menu-fontes]', clique: true, garante: function () { location.hash = 'cat/' + cid() + '/produtos' }, tit: T('De onde vem o estoque?', '¿De dónde viene el stock?'), txt: T('O estoque vem da fonte de dados (o feed). Clique em Fontes de dados.', 'El stock viene de la fuente de datos (el feed). Haz clic en Orígenes de datos.') },
    { alvo: '[data-t=fonte-linha]', garante: function () { location.hash = 'cat/' + cid() + '/fontes' }, tit: T('O feed está bem', 'El feed está bien'), txt: T('O status é “Tudo certo” e a atualização é diária (“Substituído todos os dias”). Ou seja: o feed não tem defeito, ele só repete o que o site diz. O Moletom está sem estoque no site. Clique em Próximo.', 'El estado es “Sin errores” y la actualización es diaria (“Se reemplaza diariamente”). O sea: el feed no tiene defecto, solo repite lo que dice el sitio. El Buzo está sin stock en el sitio. Haz clic en Siguiente.') },
    { alvo: '[data-t=chk-site]', garante: function () { location.hash = 'cat/' + cid() + '/fontes' }, cond: function () { var c = cm().S.cats[0]; return !!(c && c.siteCorrigido) },
      tit: T('Corrigir no site, não no catálogo', 'Corregir en el sitio, no en el catálogo'), txt: T('A solução é o dono do site corrigir o estoque do Moletom no site. Marque a caixinha (só do simulador) para dizer que o site já foi corrigido. Depois clique em Próximo.', 'La solución es que el dueño del sitio corrija el stock del Buzo en el sitio. Marca la casilla (solo del simulador) para decir que el sitio ya se corrigió. Después haz clic en Siguiente.'),
      bloqueia: function (t) { return !!t.closest('[data-t=btn-atualizar]') }, erro: T('Primeiro marque a caixinha: o estoque tem que estar corrigido no site.', 'Primero marca la casilla: el stock tiene que estar corregido en el sitio.') },
    { alvo: '[data-t=btn-atualizar]', clique: true, garante: function () { location.hash = 'cat/' + cid() + '/fontes'; cm().S.cats[0].siteCorrigido = true; render() }, tit: T('Atualizar', 'Actualizar'), txt: T('Em vez de esperar a leitura diária, clique em Atualizar para o catálogo ler o feed agora.', 'En vez de esperar la lectura diaria, haz clic en Actualizar para que el catálogo lea el feed ahora.') },
    { alvo: '[data-t=menu-produtos]', clique: true, garante: function () { location.hash = 'cat/' + cid() + '/fontes' }, tit: T('Conferir', 'Revisar'), txt: T('Volte aos Produtos para conferir.', 'Vuelve a Productos para revisar.') },
    { alvo: '[data-t=disp-moletom_01]', fim: true, semVolta: true, garante: function () { location.hash = 'cat/' + cid() + '/produtos' }, tit: T('Moletom disponível! 🎉', '¡Buzo disponible! 🎉'), txt: T('Agora está “Em estoque”. Lição: quando um produto “some”, olhe a Disponibilidade, depois a fonte de dados, e corrija na origem (o site). Clique em Concluir.', 'Ahora está “Disponible”. Lección: cuando un producto “desaparece”, mira la Disponibilidad, luego la fuente de datos, y corrige en el origen (el sitio). Haz clic en Terminar.') }
  ];
})();
