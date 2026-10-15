/* Simulador do Gerenciador de Anúncios (criar campanha → conjunto → anúncio, em rascunho) — layout fiel, visual da Lojinha.
   - Estado no navegador (localStorage "sim.anuncios"); nada é enviado à Meta.
   - Textos das telas reais em pt-BR conferidos em 14–15/10/2026 (conta de aula, só rascunho). Ver _roteiro/telas_gerenciador_anuncios.md.
   - Tutorial (tour.js): meta-anuncios.html?tour=primeiro-anuncio · ?zerar=1 apaga o rascunho. */
(function () {
  var CONF = '15/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function inicial() {
    return { rasc: false, publicado: false,
      camp: { nome: 'Nova campanha de Vendas', orc: 'campanha', valor: 25 },
      conj: { nome: 'Novo conjunto de anúncios de Vendas', dataset: '' },
      an: { nome: 'Novo anúncio de Vendas', pagina: '', insta: true } };
  }
  var S = ler('sim.anuncios', null) || inicial();
  if (params.get('zerar')) S = inicial();
  function grava() { try { localStorage.setItem('sim.anuncios', JSON.stringify(S)) } catch (e) { } window.__simGa = { S: S, O: O } }
  var O = { obj: '' };          // objetivo escolhido na janela "Criar nova campanha" (ainda não vira rascunho)
  var DATASET = 'Pixel da Lojinha da Marina';
  var PAGINAS = ['Lojinha da Marina - Fictício', 'Marina Presentes (página antiga)'];
  grava();

  function rota() { return (location.hash || '#lista').slice(1) }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }
  function faltas() {
    var f = [];
    if (!S.conj.dataset) f.push('Conjunto de anúncios: um conjunto de dados (anteriormente conhecido como Pixel) é necessário. Para publicar, configure seu conjunto de dados ou escolha uma otimização diferente, como visualizações da página de destino.');
    if (!S.an.pagina) f.push('Anúncio: selecione a Página do Facebook.');
    return f;
  }

  function casca(corpo, conf) {
    return '<div class="sim-faixa">🧪 Simulador de treinamento do Gerenciador de Anúncios · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo;
  }
  function conferido(ok) { return ok === false ? '<p class="conferido pendente">⚠ Tela montada pela documentação oficial · a conferir com a tela real</p>' : '<p class="conferido">✓ Tela conferida com o Gerenciador de Anúncios real em ' + CONF + ' (conta de aula, em rascunho)</p>' }

  /* ---------- lista de campanhas ---------- */
  function lista(modal) {
    var n = S.rasc && !S.publicado ? 3 : 0;
    var linha = S.rasc ? '<tr class="' + (S.publicado ? '' : 'rasc') + '" data-t="linha-rascunho"><td>' + (S.publicado ? '🟢' : '⚪') + '</td><td><b>' + esc(S.camp.nome) + '</b>' + (S.publicado ? '' : '<br><span class="ga-tag am">Em rascunho</span>') + '</td><td>' + (S.publicado ? '<span class="ga-tag vd">Em análise</span>' : '—') + '</td><td>—</td><td>—</td><td>—</td><td>R$ ' + S.camp.valor + ',00<br><small>Diário</small></td><td>R$ 0,00</td><td>—</td><td>—</td></tr>' :
      '<tr><td colspan="10" class="ga-vazio">Nenhuma campanha ainda. Clique em <b>Criar</b> para começar.</td></tr>';
    return casca('<div class="ga"><div class="ga-topo"><h1>Campanhas</h1><span class="ga-conta">Conta de aula da Lojinha (ID 123456789)</span>' +
      '<button class="btn sec" data-ir="lista">Atualizar dados da tabela</button>' +
      '<button class="btn sec" data-ir="descartar" data-t="btn-descartar"' + (n ? '' : ' disabled') + '>Descartar rascunhos</button>' +
      '<button class="btn" data-ir="revisar" data-t="btn-conferir"' + (n ? '' : ' disabled') + '>Conferir e publicar' + (n ? ' (' + n + ')' : '') + '</button></div>' +
      '<div class="ga-vistas"><b>Todos os anúncios</b><span>Anúncios ativos</span><span>Ações</span><span>Tiveram veiculação</span><span>Ver mais</span><span>Criar uma visualização</span></div>' +
      '<div class="ga-corpo"><div class="ga-aviso">Prepare-se para veicular anúncios · Confirme alguns detalhes em “Visão geral da conta” para publicar sua primeira campanha de anúncios. <b>Ir para a Visão geral da conta</b> <small>(a conta de aula já está pronta: telefone verificado, Página e pagamento ok)</small></div>' +
      '<div class="ga-abas"><span class="ga-aba on">Campanhas</span><span class="ga-aba" data-t="aba-conjuntos">Conjuntos de anúncios</span><span class="ga-aba">Anúncios</span><span style="margin-left:auto;align-self:center;color:var(--muted);font-size:13px">Últimos 30 dias</span></div>' +
      '<div class="ga-barra"><button class="btn" data-ir="objetivo" data-t="btn-criar">＋ Criar</button><button class="btn sec" disabled>Duplicar</button><button class="btn sec" disabled>Editar</button><button class="btn sec" disabled>Analisar</button><button class="btn sec" disabled>Teste A/B</button><span class="busca">Pesquise para filtrar por: nome, identificação ou métrica</span></div>' +
      '<table class="ga-tab"><thead><tr><th></th><th>Campanha</th><th>Veiculação</th><th>Ações</th><th>Configuração de atribuição</th><th>Resultados</th><th>Orçamento</th><th>Valor gasto</th><th>Impressões</th><th>Alcance</th></tr></thead><tbody>' + linha + '</tbody></table>' + conferido() + '</div></div>' + (modal || ''));
  }
  var OBJ = [['Reconhecimento', 'Mostre seus anúncios para o maior número de pessoas que puder ver.'], ['Tráfego', 'Leve pessoas a um destino, como um site ou app.'], ['Engajamento', 'Consiga mais curtidas, comentários, mensagens ou seguidores.'], ['Leads', 'Colete informações de pessoas interessadas.'], ['Promoção do app', 'Consiga mais instalações do app.'], ['Vendas', 'Encontre pessoas com probabilidade de comprar seus produtos ou serviços.']];
  function modalObjetivo() {
    return '<div class="ga-fundo"><div class="ga-jan"><h2>Criar nova campanha</h2><p class="miudo"><b>Escolha um tipo de compra</b>: <span class="ga-tag vd">Leilão</span></p><p><b>Escolha um objetivo da campanha</b></p>' +
      '<div class="ga-obj"><div data-t="obj-lista">' + OBJ.map(function (o) { return '<label class="' + (O.obj === o[0] ? 'on' : '') + '" data-t="' + (o[0] === 'Vendas' ? 'obj-vendas' : 'obj-outro') + '"><input type="radio" name="gaObj" value="' + o[0] + '"' + (O.obj === o[0] ? ' checked' : '') + '/> ' + o[0] + '</label>' }).join('') + '</div>' +
      '<div class="lado">O objetivo da campanha é a meta de negócios que você espera atingir veiculando seus anúncios. Passe o ponteiro do mouse sobre cada um para obter mais informações.' + (O.obj ? '<p><b>' + O.obj + '</b>: ' + esc(OBJ.filter(function (o) { return o[0] === O.obj })[0][1]) + ' <small>(descrição do simulador)</small></p>' : '') + '' + (O.obj && O.obj !== 'Vendas' ? '<p class="ga-aviso">🧪 No simulador, só o objetivo <b>Vendas</b> está montado (foi o que conferimos na tela real). Os outros objetivos seguem a mesma ideia de campanha › conjunto › anúncio, mas com telas diferentes.</p>' : '') + '<p><a>Sobre os objetivos da campanha</a></p></div></div>' +
      '<div class="rodape-jan"><button class="btn sec" data-ir="lista">Cancelar</button><button class="btn" data-acao="continuar" data-t="obj-continuar"' + (O.obj === 'Vendas' ? '' : ' disabled') + '>Continuar</button></div></div></div>';
  }
  function modalDescartar() {
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-descartar"><h2>Descartar rascunhos</h2><p>Qualquer alteração nesta conta de anúncios Conta de aula da Lojinha (123456789) que ainda não foi publicado será descartada.</p><div class="rodape-jan"><button class="btn sec" data-ir="lista">Cancelar</button><button class="btn" data-acao="descartar">Descartar</button></div></div></div>';
  }

  /* ---------- editor (campanha › conjunto › anúncio) ---------- */
  function editor(nivel, form) {
    var arv = '<div data-t="arvore"><button class="ga-no' + (nivel === 'camp' ? ' on' : '') + '" data-ir="camp">🎯 ' + esc(S.camp.nome) + '<small>Campanha · padrão</small></button>' +
      '<button class="ga-no f1' + (nivel === 'conj' ? ' on' : '') + '" data-ir="conj" data-t="no-conj">👥 ' + esc(S.conj.nome) + '<small>Conjunto de anúncios · padrão</small></button>' +
      '<button class="ga-no f2' + (nivel === 'anu' ? ' on' : '') + '" data-ir="anu" data-t="no-anu">🖼️ ' + esc(S.an.nome) + '<small>Anúncio · padrão</small></button></div>';
    var ultimo = nivel === 'anu', prox = nivel === 'camp' ? 'conj' : 'anu';
    return casca('<div class="ga"><div class="ga-topo"><h1>Em rascunho</h1><span class="ga-conta">Conta de aula da Lojinha (ID 123456789)</span><button class="btn sec" disabled>Editar</button><button class="btn sec" disabled>Analisar</button></div>' +
      '<div class="ga-ed"><aside class="ga-arv">' + arv + '</aside><main class="ga-form" id="gaForm">' + form + conferido() + '</main>' +
      '<aside class="ga-dir"><b>Pontuação da campanha</b><div class="ga-pont">100</div><p class="miudo">Você está usando nossa configuração recomendada.</p><p><b>Campanha de vendas Advantage+</b> <span class="ga-sel">Ativado</span></p></aside></div>' +
      '<div class="ga-rod"><span class="esq">' + (ultimo ? 'Ao clicar em Publicar, você aceita que seu uso das ferramentas para anúncios da Meta está sujeito aos nossos Termos e Condições.' : '') + '</span>' +
      '<button class="btn sec" data-ir="lista" data-t="fechar">Fechar</button>' +
      (nivel === 'camp' ? '' : '<button class="btn sec" data-ir="' + (nivel === 'anu' ? 'conj' : 'camp') + '">Voltar</button>') +
      (ultimo ? '<button class="btn" data-acao="publicar" data-t="publicar">Publicar</button>' : '<button class="btn" data-ir="' + prox + '" data-t="avancar">Avançar</button>') + '</div></div>');
  }
  function formCamp() {
    var v = S.camp.valor, max = (v * 1.75).toFixed(2).replace('.', ','), sem = (v * 7).toFixed(2).replace('.', ',');
    return '<div class="ga-sec"><h3>Nome da campanha</h3><input class="ga-in" id="cNome" value="' + esc(S.camp.nome) + '" data-t="camp-nome"/></div>' +
      '<div class="ga-sec"><h3>Detalhes da campanha</h3><p>Tipo de compra <b>Leilão</b> · Objetivo <b>Vendas</b></p><p class="miudo">“Ver detalhes” é o texto de chamada para ação padrão (“Ver detalhes” gera um CVR até 2,3% maior em comparação com “Saiba mais”…). Dados do produto: Nenhum catálogo disponível.</p></div>' +
      '<div class="ga-sec" data-t="camp-orc"><h3>Orçamento <span class="ga-sel">Advantage+ ativado</span></h3><p><b>Estratégia de orçamento</b></p>' +
      '<label class="ga-lin' + (S.camp.orc === 'campanha' ? ' on' : '') + '" data-t="orc-campanha"><input type="radio" name="gaOrc" value="campanha"' + (S.camp.orc === 'campanha' ? ' checked' : '') + '/><span><b>Orçamento da campanha</b><small>Distribua seu orçamento automaticamente para as melhores oportunidades na sua campanha. Também chamado de orçamento de campanha Advantage+.</small></span></label>' +
      '<label class="ga-lin' + (S.camp.orc === 'conjunto' ? ' on' : '') + '" data-t="orc-conjunto"><input type="radio" name="gaOrc" value="conjunto"' + (S.camp.orc === 'conjunto' ? ' checked' : '') + '/><span><b>Orçamento do conjunto de anúncios</b><small>Defina estratégias de lance ou programações de orçamento diferentes para cada conjunto de anúncios.</small></span></label>' +
      (S.camp.orc === 'campanha' ? '<p><b>Orçamento diário</b> R$ <input class="ga-in" id="cValor" type="number" min="1" value="' + v + '" style="width:110px" data-t="camp-valor"/> BRL</p><p>Gastaremos cerca de R$ ' + v + ',00 por dia. Seu gasto diário máximo é de R$ ' + max + ', e seu gasto semanal máximo é de R$ ' + sem + '.</p><p class="miudo">Os gastos podem ser maiores em alguns dias e menores em outros. Estratégia de lance da campanha: <b>Volume mais alto</b>.</p>' :
        '<p class="miudo">Com esta opção, o orçamento e o lance são definidos em cada conjunto de anúncios.</p>') + '</div>' +
      '<div class="ga-sec"><h3>Categorias de anúncio especiais</h3><p>Declare se seus anúncios são relacionados a produtos e serviços financeiros, emprego, moradia, temas sociais, eleições ou política para ajudar a evitar rejeições. Os requisitos variam por país.</p><p class="miudo">Declarar categoria se aplicável.</p></div>';
  }
  function formConj() {
    var d = S.conj.dataset;
    return '<div class="ga-sec"><h3>Nome do conjunto de anúncios</h3><input class="ga-in" id="jNome" value="' + esc(S.conj.nome) + '"/></div>' +
      '<div class="ga-sec"><h3>Conversão</h3><p>Local da conversão <b>Site</b> · Meta de desempenho <b>Maximizar o número de conversões</b></p>' +
      '<div data-t="conj-dataset"><p><b><span class="ga-req">*</span> Conjunto de dados</b></p><p class="miudo">Um conjunto de dados (anteriormente conhecido como Pixel) é necessário. Para publicar, configure seu conjunto de dados ou escolha uma otimização diferente, como visualizações da página de destino.</p>' +
      [DATASET, 'Nenhum conjunto de dados'].map(function (x, i) { var on = i === 0 ? d === DATASET : !d && S.conj.escolheuNenhum; return '<label class="ga-lin' + (on ? ' on' : (!d && i === 0 && S.conj.tentou ? ' err' : '')) + '" data-t="' + (i === 0 ? 'ds-pixel' : 'ds-nenhum') + '"><input type="radio" name="gaDs" value="' + i + '"' + (on ? ' checked' : '') + '/><span><b>' + x + '</b>' + (i === 0 ? '<small>Criado no Gerenciador de Eventos (módulo Pixel)</small>' : '') + '</span></label>' }).join('') + '<p><button class="btn sec" disabled>Criar conjunto de dados</button> <small>(no simulador, o Pixel já foi criado no módulo Pixel)</small></p></div>' +
      '<p class="miudo">Modelo de atribuição <b>Padrão</b> · Meta de custo por resultado <b>Nenhum</b> · Regras de valor “Habilitado: não”.</p></div>' +
      '<div class="ga-sec" data-t="conj-publico"><h3>Público <span class="ga-sel">Advantage+ ativado</span></h3><p>Configure seu público usando controles e sugestões.</p><p><b>Controles</b> — “Não vamos alcançar pessoas fora destas configurações, mesmo com o Advantage+ ativado.”</p>' +
      '<p>Localizações: Inclusão <b>Brasil</b> · Idade mínima <b>18</b> · Status da instalação do app: Qualquer pessoa · Idiomas: Todos os idiomas</p>' +
      '<p><b>Sugira um público</b>: “Também vamos alcançar pessoas fora das configurações de público personalizado, idade, gênero e direcionamento detalhado aplicadas por você quando houver probabilidade de melhorar o desempenho.”</p>' +
      '<p class="miudo">Tamanho estimado do público: 159.100.000 - 187.200.000</p></div>';
  }
  function formAnu() {
    var f = faltas().filter(function (x) { return /^Anúncio/.test(x) });
    return '<div class="ga-sec"><h3>Nome do anúncio</h3><input class="ga-in" id="aNome" value="' + esc(S.an.nome) + '"/></div>' +
      '<div class="ga-sec" data-t="an-identidade"><h3>Identidade</h3><p class="miudo">Os perfis e elementos de marca que serão usados no seu anúncio.</p><p><b><span class="ga-req">*</span> Página do Facebook</b></p>' +
      PAGINAS.map(function (p, i) { var on = S.an.pagina === p; return '<label class="ga-lin' + (on ? ' on' : (!S.an.pagina && S.an.tentou ? ' err' : '')) + '" data-t="' + (i === 0 ? 'pg-lojinha' : 'pg-outra') + '"><input type="radio" name="gaPg" value="' + i + '"' + (on ? ' checked' : '') + '/><span><b>' + p + '</b></span></label>' }).join('') +
      '<p class="miudo">Perfil do Instagram: ' + (S.an.insta ? 'lojinhadamarina (conta de aula)' : '—') + ' · Perfil do Threads: usar conta do Instagram · Marca: Inativo</p></div>' +
      '<div class="ga-sec"><h3>Configuração do anúncio</h3><p>Selecione um post existente ou crie um novo · <b>Criar anúncio</b> · Fonte do criativo: <b>Upload manual</b> · Formato: <b>Imagem ou vídeo único</b> / Carrossel</p></div>' +
      '<div class="ga-sec"><h3>Criativo do anúncio</h3><p class="miudo">Selecione e otimize o texto do anúncio, a mídia e os aprimoramentos.</p></div>' +
      '<div class="ga-sec"><h3>Rastreamento</h3><p class="miudo">Selecione os eventos de conversão a serem rastreados. O conjunto de dados de conversão selecionado desta conta de anúncios será rastreado por padrão.</p></div>' +
      '<div class="ga-prev"><b>Prévia do anúncio</b> · Analisar configurações padrão · Prévia avançada</div>' +
      (S.an.tentou && faltas().length ? '<div class="ga-aviso verm" data-t="erros"><b>Ainda não dá para publicar:</b><ul class="ga-erros">' + faltas().map(function (x) { return '<li>' + esc(x) + '</li>' }).join('') + '</ul><small>(texto de erro do simulador, resumindo o que a tela real cobra)</small></div>' : '');
  }
  function revisar() {
    var f = faltas();
    return casca('<div class="ga"><div class="ga-topo"><h1>Conferir e publicar</h1></div><div class="ga-corpo"><div class="ga-sec" data-t="revisar"><h3>Rascunhos desta conta de anúncios</h3><p>1 campanha · 1 conjunto de anúncios · 1 anúncio</p>' +
      (f.length ? '<div class="ga-aviso verm"><b>Ainda tem coisa faltando:</b><ul class="ga-erros">' + f.map(function (x) { return '<li>' + esc(x) + '</li>' }).join('') + '</ul></div>' : '<div class="ga-aviso">Tudo preenchido. No simulador, o botão Publicar é só de treino.</div>') +
      '<div class="rodape-jan"><button class="btn sec" data-ir="lista">Voltar</button><button class="btn" data-acao="publicar" ' + (f.length ? 'disabled' : '') + '>Publicar</button></div></div>' + conferido(false) + '</div></div>');
  }
  function modalAnalise() {
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-analise"><h2>Anúncio em análise</h2><p><b>Seu anúncio está sendo criado.</b> Avisaremos se ele atende aos Padrões de Publicidade da Meta em até 24 horas. Você também pode receber atualizações na Central de Anúncios.</p><p>Status <span class="ga-tag vd">Em análise</span></p><p class="miudo">No simulador, nada foi enviado à Meta.</p><div class="rodape-jan"><button class="btn" data-ir="lista">Concluir</button></div></div></div>';
  }
  var TELAS = {
    lista: function () { return lista() },
    objetivo: function () { return lista(modalObjetivo()) },
    descartar: function () { return lista(modalDescartar()) },
    camp: function () { return editor('camp', formCamp()) },
    conj: function () { return editor('conj', formConj()) },
    anu: function () { return editor('anu', formAnu()) },
    revisar: function () { return revisar() },
    analise: function () { return lista(modalAnalise()) }
  };

  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-ir],[data-acao]'); if (!a || a.disabled) return;
    if (a.hasAttribute('data-ir')) { var d = a.getAttribute('data-ir'); if (d === 'objetivo') O.obj = ''; if (d === 'anu') S.an.tentou = S.an.tentou; vai(d); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'continuar') { if (!O.obj) return; if (O.obj === 'Vendas' || true) { S.camp.nome = 'Nova campanha de ' + O.obj; S.conj.nome = 'Novo conjunto de anúncios de ' + O.obj; S.an.nome = 'Novo anúncio de ' + O.obj; S.rasc = true; S.publicado = false; S.conj.dataset = ''; S.an.pagina = ''; S.conj.tentou = false; S.an.tentou = false; grava(); vai('camp') } }
    else if (ac === 'descartar') { var z = inicial(); S = z; grava(); vai('lista') }
    else if (ac === 'publicar') { S.an.tentou = true; S.conj.tentou = true; if (faltas().length) { grava(); if (rota() === 'revisar') render(); else vai('anu'); render(); return } S.publicado = true; grava(); vai('analise') }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.name === 'gaObj') { O.obj = t.value; window.__simGa = { S: S, O: O }; render() }
    else if (t.name === 'gaOrc') { S.camp.orc = t.value; grava(); render() }
    else if (t.name === 'gaDs') { S.conj.dataset = t.value === '0' ? DATASET : ''; S.conj.escolheuNenhum = t.value !== '0'; grava(); render() }
    else if (t.name === 'gaPg') { S.an.pagina = PAGINAS[+t.value]; grava(); render() }
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.id === 'cNome') S.camp.nome = t.value; else if (t.id === 'jNome') S.conj.nome = t.value; else if (t.id === 'aNome') S.an.nome = t.value;
    else if (t.id === 'cValor') { var v = parseInt(t.value, 10); if (v > 0) S.camp.valor = v }
    else return;
    grava();
  });
  window.addEventListener('hashchange', render);
  function render() { var r = rota(); if (!S.rasc && /^(camp|conj|anu|revisar)$/.test(r)) r = 'lista'; $('#app').innerHTML = (TELAS[r] || TELAS.lista)(); window.__simGa = { S: S, O: O } }
  window.SIMGA = { vai: vai, estado: function () { return { S: S, O: O } },
    rascunho: function () { if (!S.rasc) { O.obj = 'Vendas'; S.camp.nome = 'Nova campanha de Vendas'; S.rasc = true; grava() } } };
  render();

  /* ---------- tutorial guiado ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function ga() { return window.__simGa || { S: S, O: O } }
  TOURS['primeiro-anuncio'] = [
    { alvo: '[data-t=btn-criar]', clique: true, garante: function () { location.hash = 'lista' },
      tit: T('O Gerenciador de Anúncios', 'El Administrador de anuncios'), txt: T('Aqui ficam todas as campanhas da conta. A Marina ainda não tem nenhuma. Clique em Criar.', 'Aquí están todas las campañas de la cuenta. Marina todavía no tiene ninguna. Haz clic en Crear.') },
    { alvo: '[data-t=obj-lista]', garante: function () { SIMGA.vai('objetivo') }, cond: function () { return ga().O.obj === 'Vendas' },
      bloqueia: function (t) { var l = t.closest('label'); return !!(l && l.getAttribute('data-t') !== 'obj-vendas') }, erro: T('A Marina quer vender canecas e camisetas: o objetivo certo é Vendas.', 'Marina quiere vender tazas y camisetas: el objetivo correcto es Ventas.'),
      tit: T('Qual é o objetivo?', '¿Cuál es el objetivo?'), txt: T('O objetivo é a meta de negócios que a Marina espera atingir com os anúncios. Ela quer que as pessoas comprem na loja: escolha Vendas.', 'El objetivo es la meta de negocio que Marina espera lograr con los anuncios. Ella quiere que compren en la tienda: elige Ventas.'),
      dica: T('Tráfego leva gente ao site; Vendas busca quem tem mais chance de comprar.', 'Tráfico lleva gente al sitio; Ventas busca a quien tiene más probabilidad de comprar.') },
    { alvo: '[data-t=obj-continuar]', clique: true, garante: function () { SIMGA.vai('objetivo'); ga().O.obj = 'Vendas'; render() }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=arvore]', garante: function () { SIMGA.rascunho(); location.hash = 'camp' },
      tit: T('Campanha › conjunto › anúncio', 'Campaña › conjunto › anuncio'), txt: T('Tudo começa em rascunho e tem 3 níveis: a campanha (objetivo e orçamento), o conjunto de anúncios (público e conversão) e o anúncio (o que a pessoa vê). Clique em Próximo.', 'Todo empieza en borrador y tiene 3 niveles: la campaña (objetivo y presupuesto), el conjunto de anuncios (público y conversión) y el anuncio (lo que ve la persona). Haz clic en Siguiente.') },
    { alvo: '[data-t=camp-orc]', garante: function () { location.hash = 'camp' }, cond: function () { return ga().S.camp.orc === 'campanha' },
      bloqueia: function (t) { return !!t.closest('[data-t=orc-conjunto]') }, erro: T('Para a primeira campanha, deixe o orçamento da campanha (Advantage+), que distribui sozinho.', 'Para la primera campaña, deja el presupuesto de la campaña (Advantage+), que se reparte solo.'),
      tit: T('O orçamento', 'El presupuesto'), txt: T('Deixe “Orçamento da campanha” e o valor diário de R$ 25 (se mudar o valor, veja o texto abaixo mudar junto). Repare: “Gastaremos cerca de R$ 25,00 por dia”, e o máximo é maior em alguns dias. Clique em Próximo.', 'Deja “Presupuesto de la campaña” y el valor diario de R$ 25 (si cambias el valor, mira cómo cambia el texto de abajo). Fíjate: “Gastaremos cerca de R$ 25,00 por día”, y el máximo es mayor en algunos días. Haz clic en Siguiente.'),
      dica: T('O gasto diário máximo é R$ 43,75 (25 × 1,75).', 'El gasto diario máximo es R$ 43,75 (25 × 1,75).') },
    { alvo: '[data-t=avancar]', clique: true, garante: function () { location.hash = 'camp' }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar para ir ao conjunto de anúncios.', 'Haz clic en Siguiente para ir al conjunto de anuncios.') },
    { alvo: '[data-t=conj-dataset]', garante: function () { location.hash = 'conj' }, cond: function () { return ga().S.conj.dataset === 'Pixel da Lojinha da Marina' },
      bloqueia: function (t) { return !!t.closest('[data-t=ds-nenhum]') }, erro: T('Sem o conjunto de dados (Pixel) a campanha de Vendas não publica.', 'Sin el conjunto de datos (Pixel) la campaña de Ventas no se publica.'),
      tit: T('O Pixel é obrigatório aqui', 'El Pixel es obligatorio aquí'), txt: T('Campanha de Vendas com local “Site” exige um conjunto de dados (o antigo Pixel). Escolha o Pixel da Lojinha da Marina e clique em Próximo.', 'Una campaña de Ventas con lugar “Sitio” exige un conjunto de datos (el antiguo Pixel). Elige el Pixel de la Lojinha da Marina y haz clic en Siguiente.'),
      dica: T('Sem ele, a tela avisa: “Um conjunto de dados é necessário. Para publicar, configure…”.', 'Sin él, la pantalla avisa: “Se necesita un conjunto de datos. Para publicar, configura…”.') },
    { alvo: '[data-t=conj-publico]', garante: function () { location.hash = 'conj'; if (!ga().S.conj.dataset) { ga().S.conj.dataset = 'Pixel da Lojinha da Marina'; render() } },
      tit: T('O público', 'El público'), txt: T('Aqui fica o público (e não na campanha). Está em Advantage+: a Meta encontra as pessoas, dentro dos controles (Brasil, 18+). Para a primeira vez, deixe assim. Clique em Próximo.', 'Aquí está el público (y no en la campaña). Está en Advantage+: Meta encuentra a las personas, dentro de los controles (Brasil, 18+). Para la primera vez, déjalo así. Haz clic en Siguiente.') },
    { alvo: '[data-t=avancar]', clique: true, garante: function () { location.hash = 'conj' }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar para ir ao anúncio.', 'Haz clic en Siguiente para ir al anuncio.') },
    { alvo: '[data-t=an-identidade]', garante: function () { location.hash = 'anu' }, cond: function () { return ga().S.an.pagina === 'Lojinha da Marina - Fictício' },
      bloqueia: function (t) { return !!t.closest('[data-t=pg-outra]') }, erro: T('A Página certa é a da loja: Lojinha da Marina.', 'La Página correcta es la de la tienda: Lojinha da Marina.'),
      tit: T('Quem aparece no anúncio', 'Quién aparece en el anuncio'), txt: T('A Identidade é a Página (e o Instagram) que assina o anúncio. A Página do Facebook é obrigatória: escolha Lojinha da Marina e clique em Próximo.', 'La Identidad es la Página (y el Instagram) que firma el anuncio. La Página de Facebook es obligatoria: elige Lojinha da Marina y haz clic en Siguiente.') },
    { alvo: '[data-t=fechar]', clique: true, garante: function () { location.hash = 'anu' }, tit: T('Fechar mantém o rascunho', 'Cerrar mantiene el borrador'), txt: T('Não vamos publicar agora. Clique em Fechar: o que você fez fica salvo como rascunho.', 'No vamos a publicar ahora. Haz clic en Cerrar: lo que hiciste queda guardado como borrador.') },
    { alvo: '[data-t=btn-conferir]', fim: true, semVolta: true, garante: function () { location.hash = 'lista' },
      tit: T('Rascunho pronto! 🎉', '¡Borrador listo! 🎉'), txt: T('A campanha ficou “Em rascunho”. Para publicar, é o botão Conferir e publicar. Se desistir, Descartar rascunhos apaga tudo o que não foi publicado. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'La campaña quedó “En borrador”. Para publicar, es el botón Revisar y publicar. Si desistes, Descartar borradores borra todo lo que no se publicó. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
