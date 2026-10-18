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
        item('Eventos', 'cat/' + c.id + '/eventos', a === 'eventos', 'menu-eventos') + item('Problemas', 'cat/' + c.id + '/problemas', a === 'problemas', 'menu-problemas') + item('Modelos de imagem', '', false) + item('Ofertas', '', false) + item('Lojas', '', false) + item('Lista de tarefas', '', false) + item('Configurações', 'cat/' + c.id + '/config', a === 'config', 'menu-config');
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
    var P0 = S.plan, s0 = P0 && P0.subiu && P0.sessoes[0], extraMarina = s0 ? '<tr data-t="fonte-marina"><td class="nome"><b><a data-ir="cat/' + c.id + '/feed" data-t="link-feed-marina">catalogo-marina.csv</a></b></td><td>Arquivo de dados<br><small>Carregamento único</small></td><td>' + s0.ok + '</td><td><span class="cm-st' + (s0.falha ? ' verm' : '') + '"><i></i>' + (s0.falha ? 'Falha no upload de itens' : 'Tudo certo') + '</span></td><td>' + s0.quando + '</td><td></td></tr>' : '';
    var corpo = f ? '<tr data-t="fonte-linha"><td class="nome"><b>' + esc(f.nome) + '</b></td><td>' + f.tipo + '<br><small>' + f.sub + '</small></td><td>' + c.itens.length + '</td><td><span class="cm-st"><i></i>Tudo certo</span></td><td>15 de out às 01:20<br><small>' + f.quando + '</small></td><td><button class="btn sec" data-acao="atualizar-feed" data-t="btn-atualizar">Atualizar</button></td></tr>' + extra + extraMarina : '<tr><td colspan="6" class="cm-vazio">Nenhuma fonte de dados ainda.</td></tr>';
    return casca('<h1>Fontes de dados</h1><p class="cm-sub">Gerencie as fontes de dados que fornecem informações sobre os produtos no seu catálogo. Saiba mais</p><div style="margin-bottom:10px;position:relative"><button class="btn" data-acao="fonte-menu" data-t="btn-add-fonte">Adicionar</button>' + (PX.menu ? '<div class="cm-card cm-menu" data-t="menu-add-fonte" style="position:absolute;z-index:5;min-width:300px;margin-top:4px"><b>Adicionar produtos via</b><button class="cm-mi" data-acao="fonte-arquivo" data-t="op-arquivo"><b>Arquivo de dados</b><small>Adicione vários produtos usando um arquivo CSV ou do Excel preenchido automaticamente</small></button><button class="cm-mi" disabled><b>Página do Facebook ou perfil do Instagram</b></button><button class="cm-mi" disabled><b>Entrada manual</b></button><button class="cm-mi" disabled><b>Plataforma de parceiro</b><small>Sincronize produtos de uma plataforma conectada, por exemplo, Shopify</small></button><button class="cm-mi" data-acao="fonte-pixel" data-t="op-pixel"><b>Pixel</b><small>Adicione produtos do seu site usando a identificação do Pixel</small></button><b>Carregar informações adicionais</b><button class="cm-mi" disabled>Dados de país ou idioma</button><button class="cm-mi" disabled>Dados de conteúdo do parceiro</button><button class="cm-mi" disabled>Dados complementares</button><p class="cm-sub">✓ Menu conferido com a tela real (19/10/2026)</p></div>' : '') + '</div>' +
      '<p class="ga-aviso">Adicione produtos do seu site usando a API de Catálogo — A API de catálogo sincroniza produtos do seu site em tempo real. Crie um app para conectar e manter seu catálogo atualizado.</p>' +
      '<div class="cm-card"><table class="cm-tab"><thead><tr><th>Nome</th><th>Tipo</th><th>Produtos</th><th>Status</th><th>Última atualização</th><th></th></tr></thead><tbody>' + corpo + '</tbody></table></div>' +
      (PX.jan ? janelaPixel(c) : '') + (c.fontes.some(function (x) { return x.tipo === 'Pixel' }) ? '<div class="ga-aviso ok" data-t="msg-px"><b>✓ Pixel adicionado como fonte.</b> Pode levar até 24 horas para ficar pronto; depois atualiza o catálogo a cada interação, normalmente em até 15 minutos.</div>' : '') + (f ? '<p class="cm-set" data-t="cm-simulador">🧪 <b>Só no simulador:</b> o estoque mora no <b>site</b>, não aqui. <label><input type="checkbox" id="cmSite"' + (c.siteCorrigido ? ' checked' : '') + ' data-t="chk-site"/> o estoque do Moletom já foi corrigido no site</label> · depois clique em Atualizar.</p>' : ''), r);
  }
  /* PROBLEMAS do catálogo (Central de Ajuda da Meta, 19/10/2026: “Como usar a aba Problemas do catálogo”: erros em vermelho impedem o item de aparecer;
     avisos em amarelo não impedem; Revisar › corrigir; item de plataforma/arquivo se corrige NA FONTE e a próxima atualização leva a correção; rejeição por política: dá para
     pedir outra análise). O visual da aba e os textos exatos são do treino (a conferir com a tela real). */
  var PB = { aberto: '' };
  function probsAtivos(c) { return (c.probs || []).filter(function (x) { return x.st !== 'ok' }) }
  function telaProblemas(c, r) {
    var L = c.probs || [], erros = L.filter(function (x) { return x.tipo === 'erro' && !x.st }).length, avisos = L.filter(function (x) { return x.tipo === 'aviso' }).length, analise = L.filter(function (x) { return x.st === 'analise' }).length;
    var linhas = L.filter(function (x) { return x.st !== 'ok' }).map(function (x) {
      var ab = PB.aberto === x.id, det = '';
      if (ab) {
        if (x.id === 'img') det = '<p>' + x.det + '</p><p><b>Como corrigir:</b> o item vem do arquivo de dados (o site). Corrija o link da imagem na fonte e atualize a fonte de dados; a correção chega na próxima atualização.</p><p class="cm-set">🧪 <b>Só no simulador:</b> <label><input type="checkbox" id="cmImg"' + (c.imgCorrigida ? ' checked' : '') + ' data-t="chk-img"/> a imagem do Moletom já foi corrigida no site</label></p><button class="btn sec" data-ir="cat/' + c.id + '/fontes" data-t="ir-fontes">Ir para Fontes de dados</button>';
        else if (x.id === 'pol') det = '<p>' + x.det + '</p>' + (x.st === 'analise' ? '<p class="ga-aviso" data-t="pol-analise">Outra análise solicitada. O item é revisado de novo; enquanto isso, ele continua fora dos anúncios e da loja.</p>' : '<p>Se o item foi rejeitado por engano, peça outra análise. Se ele realmente não segue as políticas, edite o item na fonte ou remova.</p><button class="btn" data-acao="outra-analise" data-t="btn-outra-analise">Solicitar outra análise</button>');
        else det = '<p>' + x.det + '</p><p>Avisos não impedem o item de aparecer, mas podem piorar a qualidade do catálogo.</p>';
      }
      return '<tr data-t="prob-' + x.id + '"><td><span class="ga-tag ' + (x.tipo === 'erro' ? 'vm' : 'am') + '">' + (x.tipo === 'erro' ? '● Erro' : '▲ Aviso') + '</span></td><td><b>' + esc(x.tit) + '</b><br><small>' + esc(x.nome) + (x.st === 'analise' ? ' · em análise' : '') + '</small></td><td><button class="btn sec" data-acao="prob-rev" data-p="' + x.id + '" data-t="btn-rev-' + x.id + '">' + (ab ? 'Fechar' : 'Revisar') + '</button></td></tr>' + (ab ? '<tr data-t="prob-det-' + x.id + '"><td colspan="3">' + det + '</td></tr>' : '');
    }).join('');
    return casca('<h1>Problemas</h1><p class="cm-sub">Veja o que impede os itens de aparecer nos anúncios e na loja e como corrigir.</p>' +
      '<div class="cm-card" data-t="prob-resumo"><b>' + erros + (erros === 1 ? ' erro' : ' erros') + '</b> · ' + avisos + (avisos === 1 ? ' aviso' : ' avisos') + (analise ? ' · ' + analise + ' em análise' : '') + (erros ? '' : ' <span class="cm-st"><i></i>Nenhum erro impedindo itens</span>') + '</div>' +
      '<div class="cm-card"><table class="cm-tab" data-t="tab-problemas"><tbody>' + (linhas || '<tr><td>Nenhum problema.</td></tr>') + '</tbody></table></div>' +
      '<p class="conferido pendente">⚠ Aba montada pela Central de Ajuda da Meta · a conferir com a tela real</p>', r);
  }
  function casoProblemas() {
    if (!S.cats.length) S.cats.push(exemplo());
    var c = S.cats[0]; c.imgCorrigida = false; PB.aberto = '';
    c.probs = [{ id: 'img', tipo: 'erro', nome: 'Moletom Marinho (MOLETOM_01)', tit: 'Imagem inválida', det: 'O link da imagem não abre (a página devolve erro). Sem imagem válida, o item não aparece nos anúncios nem na loja.' },
      { id: 'pol', tipo: 'erro', nome: 'Boné Azul (BONE_01)', tit: 'Rejeitado: não segue as Políticas de Comércio', det: 'O item foi rejeitado na análise de política. É um boné comum, então a rejeição parece engano.' },
      { id: 'cat', tipo: 'aviso', nome: 'Caneca azul (CANECA_01)', tit: 'Falta a categoria do Google', det: 'Sem a categoria do produto, o item aparece, mas pode ser menos relevante.' }];
    grava(); return c.id;
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

  /* ---------- PLANILHA (feed de dados) da Marina: conferir antes e depois de carregar ----------
     Real (19/10/2026, Gerenciador de Comércio, catálogo de aula): Fontes de dados › Adicionar ▾ (Arquivo de dados…) › “Carregar arquivo de dados”
     (Seu arquivo está formatado para qual plataforma? · Baixar modelo ▾: Modelo padrão .xlsx/.csv e Modelo personalizado · Usar um URL ou o Planilhas Google ·
     Carregar do seu computador · Cancelar/Avançar) e a visão geral do feed (Atualizar · Recarregar arquivo de dados · Tipo · Produtos · Próxima atualização ·
     Arquivo de dados · Visão geral/Configurações · “Resumo do upload dos produtos”: Atualizados ou adicionados · Removidos · Falha no upload · Problemas).
     Central de Ajuda (PT-BR): “Como criar um feed de dados usando um modelo” (cabeçalho em inglês, um item por linha, apagar as linhas de exemplo) e
     “Como solucionar erros de feed de dados no catálogo” (nomes dos erros abaixo; “Baixar relatório de problemas”).
     A planilha (editor tipo Excel/Planilhas Google) e a lista de problemas da sessão são do treino: o relatório real é um arquivo baixado (a conferir). */
  var PCOLS = ['id', 'item_group_id', 'title', 'description', 'availability', 'condition', 'price', 'link', 'image_link', 'brand'];
  var LJ = 'https://lojinha.exemplo/';
  function planInicial() {
    return [
      { k: 'k0', v: ['1234', '', 'Tapete listrado', 'Preto e branco, 1,5 x 2 m', 'in stock', 'new', '24.99 USD', 'http://www.jaspersmarket.com/tapete', 'http://www.jaspersmarket.com/tapete.jpg', "Jasper's Market"] },
      { k: 'k1', v: ['CANECA_01', '', 'Caneca azul', 'Caneca de cerâmica azul, 300 ml.', 'in stock', 'new', '49.90 BRL', LJ + 'produto-caneca_01.html', LJ + 'img/caneca_01.png', 'Lojinha da Marina'] },
      { k: 'k2', v: ['CANECA_01', '', 'Caneca amarela', 'Caneca de cerâmica amarela, 300 ml.', 'in stock', 'new', '49.90 BRL', LJ + 'produto-caneca_02.html', LJ + 'img/caneca_02.png', 'Lojinha da Marina'] },
      { k: 'k3', v: ['CANECA_03', '', 'Caneca Boas Ideias', 'Caneca branca com coração, 300 ml.', 'in stock', 'new', 'R$ 54,90', LJ + 'produto-caneca_03.html', LJ + 'img/caneca_03.png', 'Lojinha da Marina'] },
      { k: 'k4', v: ['ECOBAG_03', '', 'Ecobag Folha', 'Ecobag de algodão com estampa de folha.', 'em estoque', 'new', '39.90 BRL', LJ + 'produto-ecobag_03.html', LJ + 'img/ecobag_03.png', 'Lojinha da Marina'] },
      { k: 'k5', v: ['BONE_01', '', 'Boné Azul', 'BONÉ AZUL DE ALGODÃO, AJUSTÁVEL', 'in stock', 'new', '59.90 BRL', LJ + 'produto-bone_01.html', LJ + 'img/bone_01.png', 'Lojinha da Marina'] },
      { k: 'k6', v: ['MOLETOM_01', '', 'Moletom Marinho', 'Moletom azul-marinho com capuz.', 'out of stock', 'new', '149.90 BRL', 'lojinha.exemplo/produto-moletom_01.html', LJ + 'img/moletom_01.png', ''] }
    ];
  }
  function planZera() { S.plan = { linhas: planInicial(), rasc: null, sessoes: [], subiu: false, menuModelo: false, escolhido: false, rel: false }; grava() }
  function plan() { if (!S.plan) planZera(); return S.plan }
  function linhasAtuais() { var P = plan(); return P.rasc || P.linhas }
  var ERR = { obrig: 'Um campo obrigatório está ausente', valor: 'Valores inválidos', preco: 'Erros de preço ou moeda ausente ou inválida', url: 'URL formatado incorretamente', dup: 'Não pode haver identificações duplicadas', maiusc: 'O campo não pode conter somente letras maiúsculas', univ: 'Estão faltando identificações universais, o GTIN é inválido' };
  function validar(L) {
    var probs = [], vistos = {}, porLinha = {};
    function add(row, col, tipo, chave) { probs.push({ k: row.k, id: row.v[0] || '—', col: col, tipo: tipo, msg: ERR[chave], chave: chave }); (porLinha[row.k] = porLinha[row.k] || []).push(tipo) }
    L.forEach(function (row) {
      var v = row.v, o = {}; PCOLS.forEach(function (c, i) { o[c] = String(v[i] == null ? '' : v[i]).trim() });
      ['id', 'title', 'description', 'availability', 'condition', 'price', 'link', 'image_link'].forEach(function (c) { if (!o[c]) add(row, c, 'erro', 'obrig') });
      if (o.availability && ['in stock', 'out of stock'].indexOf(o.availability) < 0) add(row, 'availability', 'erro', 'valor');
      if (o.condition && ['new', 'refurbished', 'used'].indexOf(o.condition) < 0) add(row, 'condition', 'erro', 'valor');
      if (o.price && !/^\d+(\.\d{1,2})? [A-Z]{3}$/.test(o.price)) add(row, 'price', 'erro', 'preco');
      ['link', 'image_link'].forEach(function (c) { if (o[c] && !/^https?:\/\/\S+\.\S+/.test(o[c])) add(row, c, 'erro', 'url') });
      if (o.id) { if (vistos[o.id]) add(row, 'id', 'erro', 'dup'); vistos[o.id] = true }
      if (o.description && /[A-ZÀ-Ý]/.test(o.description) && o.description === o.description.toUpperCase()) add(row, 'description', 'aviso', 'maiusc');
      if (!o.brand) add(row, 'brand', 'aviso', 'univ');
    });
    var falha = L.filter(function (r) { return (porLinha[r.k] || []).indexOf('erro') >= 0 }).length;
    return { probs: probs, falha: falha, ok: L.length - falha, total: L.length };
  }
  function sessaoNova() { var P = plan(), r = validar(P.linhas), d = new Date(), hh = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); P.sessoes.unshift({ quando: 'hoje às ' + hh, ok: r.ok, falha: r.falha, probs: r.probs }); P.subiu = true; P.rel = false; grava() }
  function celula(row, i) { var c = PCOLS[i], val = row.v[i] == null ? '' : row.v[i]; return '<td><input class="pl-cel" data-pk="' + row.k + '" data-pc="' + i + '" data-t="cel-' + row.k + '-' + c + '" value="' + esc(val) + '"/></td>' }
  function telaPlanilha() {
    var P = plan(), L = linhasAtuais(), c = cat(rota().id), sujo = !!P.rasc;
    var letras = 'ABCDEFGHIJ'.split('');
    return '<div class="sim-faixa">🧪 Planilha de treino (como o Excel ou o Planilhas Google) · arquivo da Marina · nada aqui vai para a Meta</div><div class="pl" data-t="planilha"><div class="pl-topo"><b>📗 catalogo-marina.csv</b><span class="pl-st" data-t="pl-status">' + (sujo ? '● Alterações não salvas' : '✓ Salvo') + '</span><span class="pl-acoes"><button class="btn" data-acao="pl-salvar" data-t="btn-salvar-planilha"' + (sujo ? '' : ' disabled') + '>Salvar</button><button class="btn sec" data-ir="cat/' + (c ? c.id : '') + '/' + (P.subiu ? 'feed' : 'carregar') + '" data-t="btn-voltar-cm">Voltar ao Gerenciador de Comércio</button></span></div>' +
      '<div class="pl-grade" data-sem-traduzir="1"><table class="pl-tab"><thead><tr><th></th>' + letras.map(function (l) { return '<th>' + l + '</th>' }).join('') + '<th></th></tr><tr class="pl-cab" data-t="pl-cabecalho"><th>1</th>' + PCOLS.map(function (x) { return '<td><b>' + x + '</b></td>' }).join('') + '<td></td></tr></thead><tbody>' +
      L.map(function (row, n) { return '<tr data-t="pl-linha-' + row.k + '"><th>' + (n + 2) + '</th>' + row.v.map(function (x, i) { return celula(row, i) }).join('') + '<td><button class="pl-del" data-acao="pl-del" data-k="' + row.k + '" data-t="btn-del-' + row.k + '" title="Excluir linha">🗑</button></td></tr>' }).join('') + '</tbody></table></div>' +
      '<p class="cm-sub">Linha 1 = cabeçalho (nomes dos campos em inglês, iguais às especificações da Meta). Uma linha por produto. Salve antes de carregar.</p></div>';
  }
  function telaCarregar(c, r) {
    var P = plan();
    return casca('<p class="cm-sub"><a data-ir="cat/' + c.id + '/fontes">Fontes de dados</a> › <b>Carregar arquivo de dados</b></p><div class="cm-duas"><div class="cm-card" data-t="carregar-card"><p><b>Seu arquivo está formatado para qual plataforma?</b></p><select class="ga-in" tabindex="-1"><option>Gerenciador de Comércio</option><option>Google Merchant Center</option></select>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;position:relative"><b>Escolha como carregar seu arquivo</b><span style="position:relative"><button class="btn sec" data-acao="pl-modelo" data-t="btn-baixar-modelo">⤓ Baixar modelo ▾</button>' +
      (P.menuModelo ? '<div class="cm-card cm-pop" data-t="menu-modelo"><p class="cm-sub" style="margin:0 0 4px">Modelo padrão</p><button class="btn sec" data-acao="pl-abrir" data-t="op-xlsx">.xlsx</button> <button class="btn sec" data-acao="pl-abrir" data-t="op-csv">.csv</button><p class="cm-sub" style="margin:8px 0 0">Modelo personalizado</p></div>' : '') + '</span></div>' +
      '<label class="cm-op"><input type="radio" name="cmCarga" disabled/> <span><b>Usar um URL ou o Planilhas Google</b><small>Insira um URL do seu servidor, site de hospedagem ou planilha Google. Você pode direcionar para um arquivo CSV, TSV, XML (RSS/ATOM) ou XLSX de até 4 GB.</small></span></label>' +
      '<label class="cm-op' + (P.escolhido ? ' on' : '') + '" data-t="op-computador" data-acao="pl-escolher"><input type="radio" name="cmCarga" tabindex="-1"' + (P.escolhido ? ' checked' : '') + '/> <span><b>Carregar do seu computador</b><small>' + (P.escolhido ? '📄 catalogo-marina.csv (o arquivo salvo da Marina)' : 'Escolha o arquivo no seu computador.') + '</small></span></label>' +
      '<div class="rodape-jan"><button class="btn sec" data-ir="cat/' + c.id + '/fontes">Cancelar</button><button class="btn" data-acao="pl-carregar" data-t="btn-avancar-carga"' + (P.escolhido && !P.rasc ? '' : ' disabled') + '>Avançar</button></div>' + (P.rasc ? '<p class="ga-aviso">A planilha tem alterações não salvas: salve antes de carregar.</p>' : '') + '</div>' +
      '<div class="cm-card"><b>' + (P.subiu ? 2 : 1) + ' feeds</b><p class="cm-sub">Novo feed de dados para ' + esc(c.nome) + '<br>12 produtos</p>' + (P.subiu ? '<p class="cm-sub">catalogo-marina.csv</p>' : '') + '</div></div>' +
      '<p class="conferido">✓ Página conferida no Gerenciador de Comércio real em 19/10/2026 (no simulador, “Baixar modelo” abre a planilha da Marina, que ela já baixou e preencheu)</p>', r);
  }
  function telaFeed(c, r) {
    var P = plan(), s = P.sessoes[0]; if (!s) return telaCarregar(c, r);
    var cont = function (rot, n, t, cor) { return '<div class="cm-cont"' + (t ? ' data-t="' + t + '"' : '') + '><small>' + rot + '</small><b' + (cor && n ? ' class="' + cor + '"' : '') + '>' + n + '</b></div>' };
    var rel = P.rel ? '<div class="cm-card" data-t="relatorio"><h3>Relatório de problemas (amostra)</h3><table class="cm-tab"><thead><tr><th>Identificação do conteúdo (id)</th><th>Campo</th><th>Problema</th></tr></thead><tbody>' +
      s.probs.map(function (x, i) { return '<tr data-t="rel-' + i + '"><td>' + esc(x.id) + '</td><td><code>' + x.col + '</code></td><td><span class="ga-tag ' + (x.tipo === 'erro' ? 'vm' : 'am') + '">' + (x.tipo === 'erro' ? '● Erro' : '▲ Aviso') + '</span> ' + x.msg + '</td></tr>' }).join('') + '</tbody></table><p class="cm-sub">🧪 Na vida real, “Baixar relatório de problemas” baixa um arquivo com uma amostra dos problemas; aqui ele aparece na tela.</p></div>' : '';
    return casca('<p class="cm-sub"><a data-ir="cat/' + c.id + '/fontes">Fontes de dados</a> › catalogo-marina.csv</p><div class="cm-card" data-t="feed-cab"><h2>⤒ catalogo-marina.csv</h2><p class="cm-sub">Atualização mais recente: ' + s.quando + '. Carregamento único.</p><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn sec" disabled>Atualizar</button><button class="btn sec" data-acao="pl-recarregar" data-t="btn-recarregar">Recarregar arquivo de dados</button><button class="btn sec" data-acao="pl-abrir" data-t="btn-abrir-planilha">📗 Abrir a planilha</button></div>' +
      '<div class="cm-meta"><span><small>Tipo</small>Arquivo de dados (Carregamento único)</span><span><small>Produtos</small>Ver ' + s.ok + ' produtos</span><span><small>Arquivo de dados</small>catalogo-marina.csv</span></div><p class="cm-abas"><b>Visão geral</b> · Configurações</p></div>' +
      '<div class="cm-card" data-t="resumo-upload"><h3>Resumo do upload dos produtos</h3><p class="cm-sub">Sessão de carregamento: ' + s.quando + (P.sessoes.length > 1 ? ' (' + P.sessoes.length + ' sessões)' : '') + '</p><div class="cm-conts">' + cont('Atualizados ou adicionados', s.ok, 'n-ok') + cont('Removidos', 0) + cont('⛔ Falha no upload', s.falha, 'n-falha', 'vm-txt') + cont('▲ Problemas', s.probs.length, 'n-probs', 'am-txt') + '</div>' +
      (s.probs.length ? '<button class="btn" data-acao="pl-relatorio" data-t="btn-relatorio">Baixar relatório de problemas</button>' : '<p class="ga-aviso ok" data-t="feed-ok"><b>✓ Nenhum problema nesta sessão.</b> Todos os itens foram atualizados ou adicionados.</p>') + '</div>' + rel +
      '<p class="conferido pendente">⚠ Visão geral e contadores conferidos com a tela real (19/10/2026); a lista de problemas da sessão e os textos dos erros vêm da Central de Ajuda · a conferir com a tela real</p>', r);
  }
  var ED = false;
  var TELAS = {
    inicio: function () { return inicio() },
    confirmar: function () { return inicio(modalConfirmar()) },
    novo: novo, 'novo-produtos': novoProdutos, 'novo-arquivo': novoArquivo, 'novo-manual': novoManual,
    cat: function () {
      var r = rota(), c = cat(r.id); if (!c) return inicio();
      if (r.aba === 'planilha') return telaPlanilha();
      if (r.aba === 'carregar') return telaCarregar(c, r);
      if (r.aba === 'feed') return telaFeed(c, r);
      var t = r.aba === 'produtos' ? telaProdutos(c, r) : r.aba === 'conjuntos' ? telaConjuntos(c, r) : r.aba === 'fontes' ? telaFontes(c, r) : r.aba === 'eventos' ? telaEventos(c, r) : r.aba === 'problemas' ? telaProblemas(c, r) : r.aba === 'config' ? telaConfig(c, r) : visao(c, r);
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
    else if (ac === 'prob-rev') { var pid = a.getAttribute('data-p'); PB.aberto = PB.aberto === pid ? '' : pid; render() }
    else if (ac === 'outra-analise') { var cp = cat(rota().id); (cp.probs || []).forEach(function (x) { if (x.id === 'pol') x.st = 'analise' }); grava(); render() }
    else if (ac === 'atualizar-feed') { var c = cat(rota().id); if (c) { if (c.imgCorrigida && c.probs) c.probs.forEach(function (x) { if (x.id === 'img') x.st = 'ok' }); if (c.siteCorrigido) c.itens.forEach(function (i) { if (i.id === 'MOLETOM_01') i.disp = 1 }); grava(); render() } }
    else if (ac === 'fonte-menu') { PX.menu = !PX.menu; render() }
    else if (ac === 'fonte-arquivo') { PX.menu = false; plan().menuModelo = false; grava(); vai('cat/' + rota().id + '/carregar') }
    else if (ac === 'pl-modelo') { var P1 = plan(); P1.menuModelo = !P1.menuModelo; grava(); render() }
    else if (ac === 'pl-abrir') { var P2 = plan(); P2.menuModelo = false; grava(); vai('cat/' + rota().id + '/planilha') }
    else if (ac === 'pl-del') { var P3 = plan(), kk = a.getAttribute('data-k'); P3.rasc = JSON.parse(JSON.stringify(linhasAtuais())).filter(function (x) { return x.k !== kk }); grava(); render() }
    else if (ac === 'pl-salvar') { var P4 = plan(); if (P4.rasc) { P4.linhas = P4.rasc; P4.rasc = null } grava(); render() }
    else if (ac === 'pl-escolher') { plan().escolhido = true; grava(); render() }
    else if (ac === 'pl-carregar') { var P5 = plan(); if (P5.escolhido && !P5.rasc) { sessaoNova(); vai('cat/' + rota().id + '/feed') } }
    else if (ac === 'pl-recarregar') { var P6 = plan(); if (!P6.rasc) { sessaoNova(); render() } }
    else if (ac === 'pl-relatorio') { plan().rel = true; grava(); render() }
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
    else if (t.id === 'cmImg') { var ci = cat(rota().id); if (ci) { ci.imgCorrigida = t.checked; grava() } }
    else if (t.id === 'cmSite') { var c = cat(rota().id); if (c) { c.siteCorrigido = t.checked; grava() } }
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.id === 'cmNome') { W.nome = t.value; var b = $('[data-t=btn-avancar]'); if (b) b.disabled = !(W.tipo && W.nome.trim()) }
    else if (t.id === 'cmUrl') { W.url = t.value; var b2 = $('[data-t=btn-carregar]'); if (b2) b2.disabled = !/^https?:\/\//.test(W.url.trim()) }
    else if (t.id === 'cmFeed') W.nomeFeed = t.value;
    else if (t.hasAttribute && t.hasAttribute('data-pk')) { var P7 = plan(), L7 = P7.rasc || JSON.parse(JSON.stringify(P7.linhas)), r7 = L7.filter(function (x) { return x.k === t.getAttribute('data-pk') })[0]; if (r7) { r7.v[+t.getAttribute('data-pc')] = t.value; P7.rasc = L7; grava(); var st7 = $('[data-t=pl-status]'); if (st7) st7.textContent = '● Alterações não salvas'; var b7 = $('[data-t=btn-salvar-planilha]'); if (b7) b7.disabled = false } return }
    else if (t.hasAttribute && t.hasAttribute('data-ln')) { W.linhas[+t.getAttribute('data-ln')][t.getAttribute('data-c')] = t.value; var b3 = $('[data-t=btn-carregar-manual]'); if (b3) b3.disabled = !W.linhas.some(function (l) { return l.titulo && l.preco && l.id }) }
    else return;
    window.__simCm = { S: S, W: W };
  });
  window.addEventListener('hashchange', function () { ED = false; render() });
  function render() { var r = rota(); if (/^novo/.test(r.tela) === false && r.tela !== 'inicio' && r.tela !== 'confirmar' && r.tela !== 'cat') r.tela = 'inicio'; $('#app').innerHTML = (TELAS[r.tela] || TELAS.inicio)(); window.__simCm = { S: S, W: W } }
  window.SIMCM = { vai: vai, estado: function () { return { S: S, W: W } }, exemplo: function () { if (!S.cats.length) { S.cats.push(exemplo()); grava() } return S.cats[0].id }, limpa: function () { S = { cats: [] }; grava() }, wiz: function (o) { for (var k in o) W[k] = o[k] }, casoProblemas: casoProblemas, abreProb: function (id) { PB.aberto = id; render() }, planZera: planZera, plan: plan, menuFonte: function (on) { PX.menu = !!on; render() }, validar: validar, planInicial: planInicial, plSet: function (o) { var P = plan(); for (var k in o) P[k] = o[k]; grava(); render() }, sessao: function () { sessaoNova(); render() } };
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

  /* Diagnóstico · Catálogo 02 — produto recusado / com erro (aba Problemas) */
  function cp() { return cm().S.cats[0] }
  function irProb() { var id = cid(); if (location.hash !== '#cat/' + id + '/problemas') location.hash = 'cat/' + id + '/problemas' }
  TOURS['catalogo-problemas'] = [
    { antes: function () { SIMCM.casoProblemas(); location.hash = 'cat/' + cid() + '/visao' }, alvo: '[data-t=menu-problemas]', clique: true, garante: function () { SIMCM.casoProblemas(); location.hash = 'cat/' + cid() + '/visao' }, tit: T('Marina: “produto recusado”', 'Marina: “producto rechazado”'), txt: T('O catálogo da Marina avisa que há itens com problema e alguns produtos não aparecem nos anúncios. Clique em Problemas.', 'El catálogo de Marina avisa que hay artículos con problemas y algunos productos no aparecen en los anuncios. Haz clic en Problemas.') },
    { alvo: '[data-t=prob-resumo]', garante: irProb, tit: T('Erros e avisos', 'Errores y avisos'), txt: T('Dois erros e um aviso. Erro (vermelho) impede o item de aparecer; aviso (amarelo) não impede. Comece pelos erros. Clique em Próximo.', 'Dos errores y un aviso. Error (rojo) impide que el artículo aparezca; aviso (amarillo) no lo impide. Empieza por los errores. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-rev-img]', clique: true, garante: function () { irProb(); SIMCM.abreProb('') }, tit: T('Revisar o primeiro erro', 'Revisar el primer error'), txt: T('Clique em Revisar no erro “Imagem inválida”.', 'Haz clic en Revisar en el error “Imagen inválida”.') },
    { alvo: '[data-t=prob-det-img]', garante: function () { irProb(); SIMCM.abreProb('img') }, tit: T('Onde se corrige', 'Dónde se corrige'), txt: T('O item vem do arquivo de dados do site. Então a correção é NA FONTE: a Marina (ou o desenvolvedor) corrige o link da imagem no site e depois a fonte de dados é atualizada. Clique em Próximo.', 'El artículo viene del archivo de datos del sitio. Entonces la corrección es EN LA FUENTE: Marina (o el desarrollador) corrige el enlace de la imagen en el sitio y luego se actualiza la fuente de datos. Haz clic en Siguiente.') },
    { alvo: '[data-t=chk-img]', clique: true, garante: function () { irProb(); SIMCM.abreProb('img'); var c = cp(); if (c.imgCorrigida) { c.imgCorrigida = false; SIMCM.abreProb('img') } }, tit: T('A imagem foi corrigida no site', 'La imagen se corrigió en el sitio'), txt: T('No simulador, marque que a imagem já foi corrigida no site.', 'En el simulador, marca que la imagen ya se corrigió en el sitio.') },
    { alvo: '[data-t=menu-fontes]', clique: true, garante: function () { irProb(); cp().imgCorrigida = true; SIMCM.abreProb('img') }, tit: T('Atualizar a fonte', 'Actualizar la fuente'), txt: T('Agora vá a Fontes de dados.', 'Ahora ve a Fuentes de datos.') },
    { alvo: '[data-t=btn-atualizar]', clique: true, garante: function () { location.hash = 'cat/' + cid() + '/fontes'; cp().imgCorrigida = true }, tit: T('Atualizar', 'Actualizar'), txt: T('Clique em Atualizar para buscar o arquivo de novo.', 'Haz clic en Actualizar para buscar el archivo de nuevo.') },
    { alvo: '[data-t=menu-problemas]', clique: true, garante: function () { location.hash = 'cat/' + cid() + '/fontes' }, tit: T('Conferir', 'Revisar'), txt: T('Volte a Problemas para conferir.', 'Vuelve a Problemas para revisar.') },
    { alvo: '[data-t=btn-rev-pol]', clique: true, garante: function () { irProb(); SIMCM.abreProb(''); (cp().probs || []).forEach(function (x) { if (x.id === 'img') x.st = 'ok'; if (x.id === 'pol') delete x.st }) }, tit: T('O segundo erro', 'El segundo error'), txt: T('O erro da imagem sumiu. Agora revise o Boné: “Rejeitado”.', 'El error de la imagen desapareció. Ahora revisa la Gorra: “Rechazado”.') },
    { alvo: '[data-t=btn-outra-analise]', clique: true, garante: function () { irProb(); SIMCM.abreProb('pol') }, tit: T('Pedir outra análise', 'Pedir otra revisión'), txt: T('É um boné comum: a rejeição parece engano. Clique em Solicitar outra análise.', 'Es una gorra común: el rechazo parece un error. Haz clic en Solicitar otra revisión.') },
    { alvo: '[data-t=prob-resumo]', fim: true, semVolta: true, garante: irProb, tit: T('Nenhum erro impedindo itens 🎉', '¡Ningún error impidiendo artículos! 🎉'), txt: T('Zero erros: a imagem foi corrigida na fonte e o Boné está em análise de novo. Ao cliente: erro vermelho impede o item; corrija na fonte (site, arquivo ou plataforma), atualize e, se a rejeição for engano, peça outra análise. Clique em Concluir.', 'Cero errores: la imagen se corrigió en la fuente y la Gorra está en revisión de nuevo. Al cliente: error rojo impide el artículo; corrige en la fuente (sitio, archivo o plataforma), actualiza y, si el rechazo es un error, pide otra revisión. Haz clic en Terminar.') }
  ];
  /* ============ Catálogo · conferir a planilha (feed de dados) antes e depois de carregar ============ */
  function rotaCat(aba) { return function () { var id = cid(), h = 'cat/' + id + '/' + aba; if (location.hash !== '#' + h) location.hash = h } }
  function plFix(n) {   // a planilha com as n primeiras correções já feitas (e a linha de exemplo apagada)
    var L = SIMCM.planInicial().filter(function (x) { return x.k !== 'k0' }), f = [['k2', 0, 'CANECA_02'], ['k3', 6, '54.90 BRL'], ['k4', 4, 'in stock'], ['k5', 3, 'Boné azul de algodão, ajustável'], ['k6', 7, 'https://lojinha.exemplo/produto-moletom_01.html'], ['k6', 9, 'Lojinha da Marina']];
    f.slice(0, n).forEach(function (x) { L.forEach(function (r) { if (r.k === x[0]) r.v[x[1]] = x[2] }) });
    return L;
  }
  function plPronta(n, rasc) { return function () { var P = SIMCM.plan(); if (!P.subiu) { SIMCM.plSet({ linhas: plFix(0), rasc: null, escolhido: true }); SIMCM.sessao() } var alvo = plFix(n), atual = P.rasc || P.linhas; if (JSON.stringify(atual) !== JSON.stringify(alvo)) SIMCM.plSet(rasc ? { rasc: alvo } : { linhas: alvo, rasc: null }); rotaCat('planilha')() } }
  function celOk(k, i, v) { return function () { var P = SIMCM.plan(), L = P.rasc || P.linhas, r = L.filter(function (x) { return x.k === k })[0]; return !!r && String(r.v[i]).trim() === v } }
  TOURS['conferir-planilha'] = [
    { alvo: '[data-t=btn-add-fonte]', clique: true, antes: function () { SIMCM.exemplo(); SIMCM.planZera() }, garante: function () { SIMCM.exemplo(); if (!SIMCM.plan().linhas) SIMCM.planZera(); rotaCat('fontes')(); SIMCM.menuFonte(false) },
      tit: T('Marina: “preenchi a planilha!”', 'Marina: “¡llené la planilla!”'), txt: T('A Marina baixou o modelo da Meta, preencheu com os produtos da loja e quer carregar. O caminho é Fontes de dados › Adicionar. Clique em Adicionar.', 'Marina descargó la plantilla de Meta, la llenó con los productos de la tienda y quiere subirla. El camino es Fuentes de datos › Agregar. Haz clic en Agregar.') },
    { alvo: '[data-t=op-arquivo]', clique: true, garante: function () { rotaCat('fontes')(); SIMCM.menuFonte(true) }, tit: T('Arquivo de dados', 'Archivo de datos'), txt: T('Planilha (CSV ou Excel) entra como Arquivo de dados. Clique nele.', 'Una planilla (CSV o Excel) entra como Archivo de datos. Haz clic en él.') },
    { alvo: '[data-t=btn-baixar-modelo]', clique: true, garante: function () { SIMCM.plSet({ menuModelo: false }); rotaCat('carregar')() }, tit: T('O modelo da Meta', 'La plantilla de Meta'), txt: T('Antes de carregar, vale saber de onde vem o modelo: o botão Baixar modelo. Clique nele.', 'Antes de subir, conviene saber de dónde viene la plantilla: el botón Descargar plantilla. Haz clic en él.') },
    { alvo: '[data-t=op-csv]', clique: true, garante: function () { SIMCM.plSet({ menuModelo: true }); rotaCat('carregar')() }, tit: T('Modelo padrão ou personalizado', 'Plantilla estándar o personalizada'), txt: T('Modelo padrão em .xlsx (Excel) ou .csv, ou um Modelo personalizado com campos da categoria. A Marina usou o .csv. Clique em .csv para abrir o arquivo que ela preencheu.', 'Plantilla estándar en .xlsx (Excel) o .csv, o una Plantilla personalizada con campos de la categoría. Marina usó el .csv. Haz clic en .csv para abrir el archivo que ella llenó.') },
    { alvo: '[data-t=pl-cabecalho]', garante: function () { SIMCM.plSet({ linhas: SIMCM.planInicial(), rasc: null }); rotaCat('planilha')() }, tit: T('O cabeçalho', 'El encabezado'), txt: T('Linha 1: os nomes dos campos. Eles ficam em inglês e iguais às especificações (id, title, price…): não traduza nem mude. Embaixo, um produto por linha. Clique em Próximo.', 'Fila 1: los nombres de los campos. Quedan en inglés e iguales a las especificaciones (id, title, price…): no los traduzcas ni cambies. Abajo, un producto por fila. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-del-k0]', clique: true, garante: function () { SIMCM.plSet({ linhas: SIMCM.planInicial(), rasc: null }); rotaCat('planilha')() }, tit: T('A linha de exemplo', 'La fila de ejemplo'), txt: T('A linha 2 é o exemplo que vem no modelo (Tapete listrado, Jasper\'s Market). A Meta pede para apagar as linhas de exemplo: se ficar, ela vira um produto de verdade no catálogo. Clique na lixeira dessa linha.', 'La fila 2 es el ejemplo que viene en la plantilla (Tapete listrado, Jasper\'s Market). Meta pide borrar las filas de ejemplo: si se queda, se vuelve un producto de verdad en el catálogo. Haz clic en la papelera de esa fila.') },
    { alvo: '[data-t=btn-salvar-planilha]', clique: true, garante: function () { SIMCM.plSet({ linhas: SIMCM.planInicial(), rasc: plFix(0) }); rotaCat('planilha')() }, tit: T('Salvar', 'Guardar'), txt: T('Clique em Salvar: só o arquivo salvo é carregado.', 'Haz clic en Guardar: solo se sube el archivo guardado.') },
    { alvo: '[data-t=btn-voltar-cm]', clique: true, garante: function () { SIMCM.plSet({ linhas: plFix(0), rasc: null }); rotaCat('planilha')() }, tit: T('De volta ao Gerenciador', 'De vuelta al Administrador'), txt: T('O resto parece certo à primeira vista. A melhor conferência é carregar e ler o que a Meta diz. Volte ao Gerenciador de Comércio.', 'Lo demás parece bien a primera vista. La mejor revisión es subir y leer lo que dice Meta. Vuelve al Administrador de ventas.') },
    { alvo: '[data-t=op-computador]', clique: true, garante: function () { SIMCM.plSet({ linhas: plFix(0), rasc: null, escolhido: false, menuModelo: false }); rotaCat('carregar')() }, tit: T('Carregar do computador', 'Subir desde la computadora'), txt: T('Escolha Carregar do seu computador (o arquivo salvo da Marina).', 'Elige Subir desde tu computadora (el archivo guardado de Marina).') },
    { alvo: '[data-t=btn-avancar-carga]', clique: true, garante: function () { SIMCM.plSet({ linhas: plFix(0), rasc: null, escolhido: true, menuModelo: false }); rotaCat('carregar')() }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar para carregar.', 'Haz clic en Siguiente para subir.') },
    { alvo: '[data-t=resumo-upload]', garante: function () { var P = SIMCM.plan(); if (!P.subiu) { SIMCM.plSet({ linhas: plFix(0), rasc: null, escolhido: true }); SIMCM.sessao() } SIMCM.plSet({ rel: false }); rotaCat('feed')() }, tit: T('Resumo do upload dos produtos', 'Resumen de la carga de productos'), txt: T('A visão geral do feed mostra a sessão: 2 atualizados ou adicionados, 4 com falha no upload (não entraram) e 6 problemas. Falha = o item ficou de fora; problema pode ser erro ou aviso. Clique em Próximo.', 'La vista general del feed muestra la sesión: 2 actualizados o agregados, 4 con error de carga (no entraron) y 6 problemas. Error de carga = el artículo quedó fuera; un problema puede ser error o advertencia. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-relatorio]', clique: true, garante: function () { SIMCM.plSet({ rel: false }); rotaCat('feed')() }, tit: T('O relatório de problemas', 'El informe de problemas'), txt: T('Clique em Baixar relatório de problemas.', 'Haz clic en Descargar informe de problemas.') },
    { alvo: '[data-t=relatorio]', garante: function () { SIMCM.plSet({ rel: true }); rotaCat('feed')() }, tit: T('Cada problema, com o nome oficial', 'Cada problema, con el nombre oficial'), txt: T('Duplicada: dois produtos com id CANECA_01. Preço: “R$ 54,90” (tem que ser número com ponto, espaço e moeda de 3 letras: 54.90 BRL). Valores inválidos: “em estoque” (aceita só in stock ou out of stock). Maiúsculas: a descrição do Boné. URL: link sem https://. Identificações universais: sem brand (ou gtin/mpn). Clique em Próximo.', 'Duplicado: dos productos con id CANECA_01. Precio: “R$ 54,90” (debe ser número con punto, espacio y moneda de 3 letras: 54.90 BRL). Valores no válidos: “em estoque” (acepta solo in stock u out of stock). Mayúsculas: la descripción de la Gorra. URL: enlace sin https://. Identificadores universales: sin brand (o gtin/mpn). Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-abrir-planilha]', clique: true, garante: function () { SIMCM.plSet({ rel: true }); rotaCat('feed')() }, tit: T('Corrigir na planilha', 'Corregir en la planilla'), txt: T('Quem corrige é a planilha (a fonte). Clique em Abrir a planilha.', 'Lo que se corrige es la planilla (la fuente). Haz clic en Abrir la planilla.') },
    { alvo: '[data-t=cel-k2-id]', garante: plPronta(0, true), cond: celOk('k2', 0, 'CANECA_02'), tit: T('1 · id duplicado', '1 · id duplicado'), txt: T('A Caneca amarela está com o id da azul. Troque para CANECA_02 e clique em Próximo.', 'La Caneca amarela tiene el id de la azul. Cámbialo a CANECA_02 y haz clic en Siguiente.'), dica: T('Digite CANECA_02.', 'Escribe CANECA_02.') },
    { alvo: '[data-t=cel-k3-price]', garante: plPronta(1, true), cond: celOk('k3', 6, '54.90 BRL'), tit: T('2 · preço', '2 · precio'), txt: T('Troque R$ 54,90 por 54.90 BRL e clique em Próximo.', 'Cambia R$ 54,90 por 54.90 BRL y haz clic en Siguiente.'), dica: T('Digite 54.90 BRL.', 'Escribe 54.90 BRL.') },
    { alvo: '[data-t=cel-k4-availability]', garante: plPronta(2, true), cond: celOk('k4', 4, 'in stock'), tit: T('3 · disponibilidade', '3 · disponibilidad'), txt: T('O valor tem que ser em inglês: troque “em estoque” por in stock e clique em Próximo.', 'El valor debe estar en inglés: cambia “em estoque” por in stock y haz clic en Siguiente.'), dica: T('Digite in stock.', 'Escribe in stock.') },
    { alvo: '[data-t=cel-k5-description]', garante: plPronta(3, true), cond: celOk('k5', 3, 'Boné azul de algodão, ajustável'), tit: T('4 · só maiúsculas', '4 · solo mayúsculas'), txt: T('Reescreva a descrição do Boné só com a inicial maiúscula e clique em Próximo.', 'Reescribe la descripción de la Gorra solo con la inicial mayúscula y haz clic en Siguiente.'), dica: T('Digite Boné azul de algodão, ajustável.', 'Escribe Boné azul de algodão, ajustável.') },
    { alvo: '[data-t=cel-k6-link]', garante: plPronta(4, true), cond: celOk('k6', 7, 'https://lojinha.exemplo/produto-moletom_01.html'), tit: T('5 · link', '5 · enlace'), txt: T('O link do Moletom precisa começar com https://. Corrija e clique em Próximo.', 'El enlace del Buzo debe empezar con https://. Corrige y haz clic en Siguiente.'), dica: T('Digite https://lojinha.exemplo/produto-moletom_01.html.', 'Escribe https://lojinha.exemplo/produto-moletom_01.html.') },
    { alvo: '[data-t=cel-k6-brand]', garante: plPronta(5, true), cond: celOk('k6', 9, 'Lojinha da Marina'), tit: T('6 · marca', '6 · marca'), txt: T('Falta a marca (brand) do Moletom. Escreva Lojinha da Marina e clique em Próximo.', 'Falta la marca (brand) del Buzo. Escribe Lojinha da Marina y haz clic en Siguiente.'), dica: T('Digite Lojinha da Marina.', 'Escribe Lojinha da Marina.') },
    { alvo: '[data-t=btn-salvar-planilha]', clique: true, livre: '.pl-cel', valida: function () { var P = SIMCM.plan(); return SIMCM.validar(P.rasc || P.linhas).probs.length === 0 }, erro: T('Ainda há algo para corrigir na planilha. Confira as 6 células. 🙂', 'Todavía hay algo por corregir en la planilla. Revisa las 6 celdas. 🙂'), garante: plPronta(6, true), tit: T('Salvar', 'Guardar'), txt: T('Tudo corrigido. Clique em Salvar.', 'Todo corregido. Haz clic en Guardar.') },
    { alvo: '[data-t=btn-voltar-cm]', clique: true, garante: plPronta(6, false), tit: T('Voltar ao feed', 'Volver al feed'), txt: T('Volte ao Gerenciador de Comércio.', 'Vuelve al Administrador de ventas.') },
    { alvo: '[data-t=btn-recarregar]', clique: true, garante: function () { plPronta(6, false)(); rotaCat('feed')() }, tit: T('Recarregar', 'Volver a subir'), txt: T('Clique em Recarregar arquivo de dados: a Meta lê a planilha corrigida numa nova sessão.', 'Haz clic en Volver a subir el archivo de datos: Meta lee la planilla corregida en una nueva sesión.') },
    { alvo: '[data-t=feed-ok], [data-t=resumo-upload]', fim: true, semVolta: true, garante: function () { var P = SIMCM.plan(); if (!P.sessoes[0] || P.sessoes[0].falha) { plPronta(6, false)(); SIMCM.sessao() } rotaCat('feed')() }, tit: T('Planilha aprovada 🎉', '¡Planilla aprobada! 🎉'), txt: T('Nova sessão: 6 atualizados ou adicionados, 0 falhas, 0 problemas. Para conferir uma planilha: cabeçalho em inglês sem mudanças, sem linhas de exemplo, um id único por produto, price como 54.90 BRL, availability e condition só com os valores aceitos, links com https://, brand (ou gtin/mpn) e nada só em maiúsculas. Depois de carregar, leia o Resumo do upload e o relatório de problemas, corrija na planilha e recarregue. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Nueva sesión: 6 actualizados o agregados, 0 errores, 0 problemas. Para revisar una planilla: encabezado en inglés sin cambios, sin filas de ejemplo, un id único por producto, price como 54.90 BRL, availability y condition solo con los valores aceptados, enlaces con https://, brand (o gtin/mpn) y nada solo en mayúsculas. Después de subir, lee el Resumen de la carga y el informe de problemas, corrige en la planilla y vuelve a subir. Haz clic en Terminar. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta.') }
  ];
})();
