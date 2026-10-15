/* Simulador do Turbinar post (Meta Business Suite › Conteúdo › Posts e reels › Turbinar) — layout fiel, visual da Lojinha.
   - Estado no navegador (localStorage "sim.turbinar"); nada é enviado à Meta.
   - Textos das telas reais em pt-BR conferidos em 15/10/2026 (conta de aula; aberto e depois publicado de verdade com R$ 5,27 × 1 dia).
     Ver _roteiro/telas_gerenciador_anuncios.md.
   - Tutorial (tour.js): meta-turbinar.html?tour=turbinar-post · ?zerar=1 recomeça · ?semtelefone=1 mostra o bloqueio do telefone. */
(function () {
  var CONF = '15/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function inicial() { return { meta: 'mensagens', botao: 'Enviar mensagem', fim: 'continuo', dias: 7, valor: 5.27, tel: true, saldo: 10.27, publicado: false, limite: null } }
  var S = ler('sim.turbinar', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('semtelefone')) S.tel = false;
  function problemasIniciais() { S.tel = false; S.saldo = 3; S.limite = { max: 10, gasto: 8.2 } }   // conta com os 3 bloqueios juntos
  if (params.get('problemas')) problemasIniciais();
  var M = { aberta: false, sel: '' };   // janela "Meta" aberta e opção marcada (ainda não salva)
  function grava() { try { localStorage.setItem('sim.turbinar', JSON.stringify(S)) } catch (e) { } window.__simTb = { S: S, M: M } }
  grava();

  var METAS = [
    ['mensagens', 'Automático - Receber mensagens', 'Selecionamos a meta Receber mensagens com base na sua atividade anterior.'],
    ['engajamento', 'Gerar engajamento', 'Mostre seu anúncio para pessoas com probabilidade de reagir, comentar e compartilhar.'],
    ['leads', 'Obter leads', 'Use um formulário para coletar informações de contato de clientes potenciais.'],
    ['site', 'Receber visitantes no site', 'Mostre seu anúncio para pessoas com probabilidade de clicar em um URL nele.'],
    ['pagina', 'Atrair visitas e seguidores para a Página', 'Mostre seu anúncio para pessoas com probabilidade de visitar e seguir sua Página do Facebook.'],
    ['ligacoes', 'Receba ligações', 'Mostre seu anúncio para pessoas com probabilidade de ligar para sua empresa.']
  ];
  var BOTOES = ['Nenhum botão', 'Agendar agora', 'Saiba mais', 'Comprar agora', 'Cadastre-se', 'Enviar mensagem', 'Ligar agora'];
  var TEXTO = '🧪 TESTE de treinamento — aqui não vendemos nada! Este anúncio faz parte de um exercício de aprendizado. Comente o que chamou a sua atenção…';
  function metaNome(id) { return METAS.filter(function (m) { return m[0] === id })[0][1] }
  function rs(v) { return 'R$ ' + (Math.round(v * 100) / 100).toFixed(2).replace('.', ',') }
  function nDias() { return S.fim === 'data' ? Math.max(1, S.dias | 0) : 1 }
  function totais() { var base = S.valor * nDias(), iss = base * 0.0323, pis = base * 0.1044; return { base: base, iss: iss, pis: pis, total: base + iss + pis } }

  function rota() { return (location.hash || '#posts').slice(1) }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }
  function casca(corpo) {
    return '<div class="sim-faixa">🧪 Simulador de treinamento do Turbinar post · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo;
  }
  function conferido(ok) { return ok === false ? '<p class="conferido pendente">⚠ Tela montada pela documentação oficial · a conferir com a tela real</p>' : '<p class="conferido">✓ Tela conferida com o Meta Business Suite real em ' + CONF + ' (conta de aula)</p>' }

  /* ---------- Conteúdo › Posts e reels ---------- */
  function menuTopo(on) { return '<div class="ga-menu"><button class="' + (on === 'posts' ? 'on' : '') + '" data-ir="posts">Posts e reels</button><button class="' + (on === 'promover' ? 'on' : '') + '" data-ir="promover" data-t="menu-promover">Promover</button></div>' }
  function posts() {
    var st = S.publicado ? '<span class="ga-tag vd">Em análise</span>' : '—';
    return casca('<div class="ga"><div class="ga-topo"><h1>Conteúdo</h1><span class="ga-conta">Lojinha da Marina - Fictício</span></div>' + menuTopo('posts') +
      '<div class="ga-corpo"><div class="ga-abas"><span class="ga-aba on">Publicados</span><span class="ga-aba">Programados</span><span class="ga-aba">Rascunhos</span><span class="ga-aba">Quase expirando</span><span class="ga-aba">Expirados</span><span class="ga-aba">Posts de anúncios</span></div>' +
      '<table class="ga-tab"><thead><tr><th>Título</th><th>Data da publicação</th><th>Status</th><th>Alcance</th><th>Visualizações</th><th>Visualizadores</th><th>Seguidores</th><th></th></tr></thead><tbody>' +
      '<tr data-t="linha-post"><td>🖼️ <b>TESTE de treinamento — aqui não vendemos nada</b><br><small>Foto · Post cruzado</small></td><td>Quinta, 15 de outubro</td><td>' + st + '</td><td>0</td><td>0</td><td>0</td><td>0</td><td><button class="btn" data-ir="turbinar" data-t="btn-turbinar">Turbinar</button></td></tr>' +
      '<tr data-t="linha-foto"><td>🏪 <b>Lojinha da Marina: loja fictícia, criada para treinamento</b><br><small>Foto · Troca da foto do perfil</small></td><td>Terça, 13 de outubro</td><td>—</td><td>0</td><td>0</td><td>0</td><td>0</td><td><button class="btn sec" data-ir="semconteudo" data-t="btn-criar-anuncio">Criar anúncio</button></td></tr>' +
      '</tbody></table>' + conferido() + '</div></div>');
  }
  function promover() {
    return casca('<div class="ga"><div class="ga-topo"><h1>Promover</h1><span class="ga-conta">Lojinha da Marina - Fictício</span></div>' + menuTopo('promover') +
      '<div class="ga-corpo"><div class="ga-cards"><button class="ga-card" data-ir="promover"><b>Anúncios Automatizados</b><small>Tenha anúncios personalizados que ajudam você a conseguir mais resultados.</small></button>' +
      '<button class="ga-card" data-ir="promover"><b>Criar anúncio</b><small>Escolha uma meta e crie um anúncio do zero.</small></button>' +
      '<button class="ga-card" data-ir="posts" data-t="card-turbinar"><b>Turbinar conteúdo</b><small>Use um post ou reel existente.</small></button></div>' + conferido() + '</div></div>');
  }
  function semconteudo() {
    return casca('<div class="ga"><div class="ga-topo"><h1>Selecione um conteúdo do Facebook</h1><span class="ga-conta">Tipo de conteúdo: Todos</span></div><div class="ga-corpo"><div class="ga-sec" data-t="sem-conteudo"><h3>Nenhum conteúdo para turbinar</h3>' +
      '<p>Parece que você não criou nenhum conteúdo (ou não é possível turbinar seu conteúdo existente). Crie um post ou reel agora para aumentar o engajamento com sua empresa.</p><p class="miudo">A Central de Ajuda da Meta explica: fotos do perfil não podem ser transformadas em anúncios; para usá-las, carregue-as como um novo post e turbine-o.</p>' +
      '<div class="rodape-jan"><button class="btn sec" data-ir="posts">Voltar</button><button class="btn" data-ir="posts" data-t="btn-criar-post">Criar post</button><button class="btn sec" disabled>Criar reel</button></div></div>' + conferido() + '</div></div>');
  }

  /* ---------- Turbinar post ---------- */
  function secMeta() {
    return '<div class="ga-sec" data-t="sec-meta"><h3>Meta</h3><p class="miudo">Quais resultados você gostaria de obter com esse anúncio?</p><p><b>' + esc(metaNome(S.meta)) + '</b><br><small>' + esc(METAS.filter(function (m) { return m[0] === S.meta })[0][2]) + '</small></p><button class="btn sec" data-acao="meta-abrir" data-t="btn-meta">Alterar</button></div>';
  }
  function secTexto() {
    return '<div class="ga-sec"><h3>Texto do anúncio</h3><p class="miudo">O que você deseja que o texto do seu anúncio diga? Você pode veicular um anúncio com o texto existente e também adicionar variações geradas por IA baseadas no texto existente.</p><p><b>Texto existente</b></p><p class="miudo">' + esc(TEXTO) + '</p><p class="miudo"><b>Geração de texto (IA)</b>: Não é possível gerar variações de texto. Não temos variações de texto para este anúncio.</p><p class="miudo"><b>Criativo Advantage+</b> · Usar os dados do Facebook para veicular automaticamente variações do criativo do anúncio quando houver probabilidade de melhorar o desempenho. <span class="ga-sel">Ativado</span></p></div>';
  }
  function secBotao() {
    var dica = S.meta !== 'mensagens' && S.botao === 'Enviar mensagem' ? '<p class="ga-aviso" data-t="dica-botao">Receber mais mensagens · Mais pessoas enviarão mensagens e comentários se você alterar para o objetivo de mensagens. <small>(o botão continua “Enviar mensagem” mesmo trocando a meta)</small></p>' : '';
    return '<div class="ga-sec" data-t="sec-botao"><h3>Botão</h3>' + dica + '<p><b>Texto do botão</b></p>' + BOTOES.map(function (b, i) { var on = S.botao === b; return '<label class="ga-lin' + (on ? ' on' : '') + '" data-t="bt-' + (i === 0 ? 'nenhum' : i) + '"><input type="radio" name="tbBot" value="' + esc(b) + '"' + (on ? ' checked' : '') + '/><span><b>' + b + '</b></span></label>' }).join('') + '</div>';
  }
  function secMsgs() {
    if (S.meta !== 'mensagens') return '';
    return '<div class="ga-sec"><h3>Mensagens</h3><p class="miudo">Modelo de mensagem: Modelo de mensagem de boas-vindas padrão · Respostas automáticas: Desativado · Perguntas geradas por IA.</p><p><b>Destino das mensagens</b> · Destino automático (Recomendado): direcione as pessoas para o app de mensagens em que elas mais interagem (Página / Instagram).</p></div>';
  }
  function secPublico() {
    return '<div class="ga-sec"><h3>Público</h3><p class="miudo">Quem deve ver seu anúncio?</p><p><b>Público Advantage+</b> · Permita que nossa tecnologia de anúncios encontre seu público automaticamente e se ajuste ao longo do tempo.</p><p>Localização: <b>Brasil</b> · Idade mínima: <b>18</b> · Público Advantage+: Ativado</p></div>' +
      '<div class="ga-sec"><h3>Transparência dos anúncios</h3><p class="miudo">Informe ao seu público quem se beneficia com este anúncio e quem paga por ele. Essas informações podem ser exibidas de forma pública em anúncios e na Biblioteca de Anúncios da Meta.</p></div>';
  }
  function secProg() {
    return '<div class="ga-sec" data-t="sec-prog"><h3>Programação e duração</h3><p class="miudo">Data de início: hoje</p>' +
      '<label class="ga-lin' + (S.fim === 'continuo' ? ' on' : '') + '" data-t="prog-continuo"><input type="radio" name="tbFim" value="continuo"' + (S.fim === 'continuo' ? ' checked' : '') + '/><span><b>Veicular anúncio continuamente</b><small>Seu anúncio será veiculado até que você o pause.</small></span></label>' +
      '<label class="ga-lin' + (S.fim === 'data' ? ' on' : '') + '" data-t="prog-data"><input type="radio" name="tbFim" value="data"' + (S.fim === 'data' ? ' checked' : '') + '/><span><b>Escolher data de término</b></span></label>' +
      (S.fim === 'data' ? '<p>Dias <input class="ga-in" id="tbDias" type="number" min="1" max="90" value="' + S.dias + '" style="width:90px" data-t="dias"/> ' + (S.dias < 4 ? '<small>Anúncios que são veiculados por pelo menos 4 dias tendem a obter resultados melhores.</small>' : '') + '</p>' : '') + '</div>';
  }
  function passouLimite() { return !!S.limite && S.limite.gasto + totais().base > S.limite.max }
  function secOrc() {
    var f = S.valor / 5.27, lo = Math.round(829 * f), hi = Math.round(2400 * f);
    return '<div class="ga-sec" data-t="sec-orc"><h3>Orçamento diário</h3>' +
      (passouLimite() ? '<div class="ga-aviso" data-t="aviso-limite">⚠ Você quase atingiu o limite de gastos que definiu para essa conta de anúncios. Aumente, redefina ou remova o limite para manter seus anúncios em veiculação. <button class="btn sec" data-acao="limite-aumentar" data-t="btn-limite">Aumentar limite</button> <small>(limite da conta: ' + rs(S.limite.max) + ' · já gastos: ' + rs(S.limite.gasto) + ' · no simulador, clicar aqui sobe o limite)</small></div>' : '') + '<p class="miudo">Estimativa de ' + lo.toLocaleString('pt-BR') + ' a ' + hi.toLocaleString('pt-BR') + ' impressões por dia <small>(no simulador, cresce com o valor)</small></p><p class="ga-pont" style="font-size:28px;color:var(--blue)">' + rs(S.valor) + '</p>' +
      '<input id="tbValor" type="range" min="5.27" max="200" step="0.01" value="' + S.valor + '" style="width:100%"/><p class="miudo" style="display:flex;justify-content:space-between"><span>R$ 5,27 (mínimo)</span><span>R$ 200,00</span></p></div>' +
      '<div class="ga-sec"><h3>Posicionamentos</h3><p class="miudo">Recomendado</p><p><b>Posicionamentos Advantage+</b> · Vamos maximizar seu orçamento no Facebook, Messenger, Instagram e Audience Network da Meta para ajudar a mostrar seu anúncio para mais pessoas.</p></div>';
  }
  function secPag() {
    var t = totais(), falta = t.total > S.saldo;
    return '<div class="ga-sec" data-t="sec-pag"><h3>Forma de pagamento</h3><p><b>Saldo disponível: ' + rs(S.saldo) + '</b> <button class="btn sec" data-acao="saldo-add" data-t="btn-saldo">Adicionar saldo</button> <small>(no simulador, soma R$ 10 de mentirinha)</small></p><p class="miudo">Deduziremos um valor do seu saldo por volta de uma vez por dia quando você veicular anúncios. Se não houver saldo disponível, os anúncios serão pausados.</p>' +
      '<p><b>Resumo do pagamento</b> · ' + (S.fim === 'data' ? 'Seu anúncio será veiculado por ' + nDias() + ' dia' + (nDias() > 1 ? 's' : '') + '.' : 'Seu anúncio será veiculado continuamente.') + '</p>' +
      '<p>Orçamento total ' + rs(t.base) + ' <small>(' + rs(S.valor) + ' por dia × ' + nDias() + ' dia' + (nDias() > 1 ? 's' : '') + ')</small><br>ISS estimado ' + rs(t.iss) + ' · PIS/COFINS estimado ' + rs(t.pis) + '<br><b>Valor total ' + rs(t.total) + ' BRL</b> <small>(impostos aproximados no simulador)</small></p>' +
      (falta ? '<p class="ga-aviso verm" data-t="aviso-saldo">O saldo disponível (' + rs(S.saldo) + ') não cobre o valor total. Como a cobrança é diária, o anúncio pode ficar pausado quando o saldo acabar.</p>' : '') + '</div>';
  }
  function previa() {
    return '<aside class="gt-prev"><div class="ga-prev"><b>Prévia do anúncio</b><p class="miudo">Lojinha da Marina - Fictício · Anúncio</p><p class="miudo">' + esc(TEXTO) + '</p><div class="gt-img">TESTE</div>' +
      (S.botao !== 'Nenhum botão' ? '<span class="gt-btn" data-t="prev-botao">' + esc(S.botao) + '</span>' : '') + '<p class="miudo">Curtir · Comentar · Compartilhar</p></div>' +
      '<div class="ga-prev" style="margin-top:10px"><b>Estimativa de resultados diários</b><p class="miudo">Impressões: ' + Math.round(829 * S.valor / 5.27).toLocaleString('pt-BR') + ' a ' + Math.round(2400 * S.valor / 5.27).toLocaleString('pt-BR') + '</p></div></aside>';
  }
  function modalMeta() {
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-meta"><h2>Meta</h2>' + METAS.map(function (m) {
      var on = M.sel === m[0]; return '<label class="ga-lin' + (on ? ' on' : '') + '" data-t="meta-' + m[0] + '"><input type="radio" name="tbMeta" value="' + m[0] + '"' + (on ? ' checked' : '') + '/><span><b>' + m[1] + '</b><small>' + m[2] + '</small></span></label>' }).join('') +
      '<div class="rodape-jan"><button class="btn sec" data-acao="meta-cancelar">Cancelar</button><button class="btn" data-acao="meta-salvar" data-t="meta-salvar">Salvar</button></div></div></div>';
  }
  function modalAnalise() {
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-analise"><h2>Anúncio em análise</h2><p><b>Seu anúncio está sendo criado.</b> Avisaremos se ele atende aos Padrões de Publicidade da Meta em até 24 horas. Você também pode receber atualizações na Central de Anúncios.</p>' +
      '<p>Status <span class="ga-tag vd">Em análise</span> · Meta: ' + esc(metaNome(S.meta)) + ' · Valor total ' + rs(totais().total) + '</p><p class="miudo">No simulador, nada foi enviado à Meta.</p><div class="rodape-jan"><button class="btn" data-ir="posts" data-t="analise-ok">Concluir</button></div></div></div>';
  }
  function turbinar(modal) {
    var bloqueio = !S.tel ? '<div class="ga-aviso verm" data-t="aviso-tel">É necessário ter um telefone verificado para esta conta antes de veicular anúncios. <button class="btn sec" data-acao="verificar-tel" data-t="btn-tel">Iniciar autenticação</button> <small>(no simulador, clicar aqui já verifica o telefone)</small></div>' : '';
    return casca('<div class="ga"><div class="ga-topo"><h1>Turbinar post</h1><span class="ga-conta">Lojinha da Marina Aula</span></div><div class="gt"><main>' + bloqueio + secMeta() + secTexto() + secBotao() + secMsgs() + secPublico() + secProg() + secOrc() + secPag() + conferido() + '</main>' + previa() + '</div>' +
      '<div class="ga-rod"><span class="esq">Ao clicar em Publicar, você reconhece que seu uso das ferramentas para anúncios da Meta está sujeito aos nossos Termos e condições. Esse anúncio será automaticamente salvo como rascunho se você sair antes de enviar.</span><button class="btn sec" data-ir="posts" data-t="cancelar">Cancelar</button><button class="btn" data-acao="publicar" data-t="publicar"' + (S.tel ? '' : ' disabled') + '>Publicar</button></div></div>' + (modal || ''));
  }
  var TELAS = {
    posts: posts, promover: promover, semconteudo: semconteudo,
    turbinar: function () { return turbinar(M.aberta ? modalMeta() : '') },
    analise: function () { return turbinar(modalAnalise()) }
  };

  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-ir],[data-acao]'); if (!a || a.disabled) return;
    if (a.hasAttribute('data-ir')) { var d = a.getAttribute('data-ir'); if (d === 'turbinar') { M.aberta = false } vai(d); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'meta-abrir') { M.aberta = true; M.sel = S.meta; render() }
    else if (ac === 'meta-cancelar') { M.aberta = false; render() }
    else if (ac === 'meta-salvar') { if (M.sel) S.meta = M.sel; M.aberta = false; grava(); render() }
    else if (ac === 'verificar-tel') { S.tel = true; grava(); render() }
    else if (ac === 'limite-aumentar') { if (S.limite) S.limite.max = 50; grava(); render() }
    else if (ac === 'saldo-add') { S.saldo += 10; grava(); render() }
    else if (ac === 'publicar') { if (!S.tel) return; S.publicado = true; grava(); vai('analise') }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.name === 'tbMeta') { M.sel = t.value; window.__simTb = { S: S, M: M }; render() }
    else if (t.name === 'tbBot') { S.botao = t.value; grava(); render() }
    else if (t.name === 'tbFim') { S.fim = t.value; if (S.fim === 'data' && !(S.dias > 0)) S.dias = 7; grava(); render() }
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.id === 'tbDias') { var v = parseInt(t.value, 10); if (v > 0) { S.dias = v; grava(); var r = $('[data-t=sec-pag]'); if (r) { var n = document.createElement('div'); n.innerHTML = secPag(); r.replaceWith(n.firstChild) } } }
    else if (t.id === 'tbValor') { S.valor = Math.max(5.27, parseFloat(t.value) || 5.27); grava(); var p = $('[data-t=sec-pag]'); if (p) { var n2 = document.createElement('div'); n2.innerHTML = secPag(); p.replaceWith(n2.firstChild) } var o = $('[data-t=sec-orc] .ga-pont'); if (o) o.textContent = rs(S.valor) }
  });
  window.addEventListener('hashchange', render);
  function render() { var r = rota(); $('#app').innerHTML = (TELAS[r] || TELAS.posts)(); window.__simTb = { S: S, M: M } }
  window.SIMTB = { vai: vai, estado: function () { return { S: S, M: M } }, problemas: function (q) { if (!S.limite && !S.publicado) { problemasIniciais() } if (q) { if (q.tel) S.tel = true; if (q.limite && S.limite) S.limite.max = 50; if (q.saldo) S.saldo = 13 } grava() } };
  if (params.get('tour') === 'resolver-publicacao' || params.get('tour') === 'turbinar-post' && false) { if (rota() === 'posts') location.hash = 'turbinar' }   // este tutorial começa na tela do Turbinar
  render();

  /* ---------- tutorial guiado ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function tb() { return window.__simTb || { S: S, M: M } }
  TOURS['resolver-publicacao'] = [
    { alvo: '[data-t=aviso-tel]', garante: function () { SIMTB.problemas(); location.hash = 'turbinar'; M.aberta = false; render() },
      tit: T('O anúncio da Marina não publica', 'El anuncio de Marina no se publica'), txt: T('A Marina tentou turbinar e não consegue publicar. Repare: o botão Publicar está apagado e há um aviso no topo. O agente resolve um bloqueio de cada vez, de cima para baixo. Clique em Próximo.', 'Marina intentó promocionar y no puede publicar. Fíjate: el botón Publicar está apagado y hay un aviso arriba. El agente resuelve un bloqueo a la vez, de arriba hacia abajo. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-tel]', clique: true, garante: function () { SIMTB.problemas(); location.hash = 'turbinar'; render() }, tit: T('1º bloqueio: telefone', '1.er bloqueo: teléfono'), txt: T('“É necessário ter um telefone verificado para esta conta antes de veicular anúncios.” Sem isso a Meta não deixa veicular. Clique em Iniciar autenticação. (No simulador, ela já verifica.)', '“Se necesita un teléfono verificado para esta cuenta antes de publicar anuncios.” Sin eso Meta no deja publicar. Haz clic en Iniciar autenticación. (En el simulador, ya verifica.)') },
    { alvo: '[data-t=aviso-limite]', garante: function () { SIMTB.problemas({ tel: true }); location.hash = 'turbinar'; render() },
      tit: T('2º bloqueio: limite de gastos', '2.º bloqueo: límite de gastos'), txt: T('Agora outro aviso, dentro do orçamento: a conta tem um limite de gastos e a Marina quase chegou nele. Mesmo com saldo, o anúncio para quando o limite é atingido. Clique em Próximo.', 'Ahora otro aviso, dentro del presupuesto: la cuenta tiene un límite de gastos y Marina casi llegó a él. Aunque haya saldo, el anuncio se detiene cuando se alcanza el límite. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-limite]', clique: true, garante: function () { SIMTB.problemas({ tel: true }); location.hash = 'turbinar'; render() }, tit: T('Aumentar o limite', 'Aumentar el límite'), txt: T('Clique em Aumentar limite. (Na conta real, esse botão leva às configurações de cobrança, onde o limite é aumentado, redefinido ou removido.)', 'Haz clic en Aumentar límite. (En la cuenta real, ese botón lleva a la configuración de facturación, donde el límite se aumenta, redefine o quita.)') },
    { alvo: '[data-t=aviso-saldo]', garante: function () { SIMTB.problemas({ tel: true, limite: true }); location.hash = 'turbinar'; render() },
      tit: T('3º bloqueio: saldo', '3.er bloqueo: saldo'), txt: T('Por fim, o saldo (R$ 3,00) não cobre o valor total. A Meta cobra por volta de uma vez por dia e, “se não houver saldo disponível, os anúncios serão pausados”. Clique em Próximo.', 'Por último, el saldo (R$ 3,00) no cubre el valor total. Meta cobra más o menos una vez al día y, “si no hay saldo disponible, los anuncios se pausarán”. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-saldo]', clique: true, garante: function () { SIMTB.problemas({ tel: true, limite: true }); location.hash = 'turbinar'; render() }, tit: T('Adicionar saldo', 'Agregar saldo'), txt: T('Clique em Adicionar saldo. (Aqui é de mentirinha: na conta real, quem paga é o responsável pela conta, nunca o agente.)', 'Haz clic en Agregar saldo. (Aquí es de mentira: en la cuenta real, paga el responsable de la cuenta, nunca el agente.)') },
    { alvo: '[data-t=publicar]', clique: true, garante: function () { SIMTB.problemas({ tel: true, limite: true, saldo: true }); location.hash = 'turbinar'; render() }, tit: T('Agora publica', 'Ahora publica'), txt: T('Os três bloqueios saíram e o botão Publicar acendeu. Clique em Publicar.', 'Los tres bloqueos salieron y el botón Publicar se encendió. Haz clic en Publicar.') },
    { alvo: '[data-t=jan-analise]', fim: true, semVolta: true, tit: T('Resolvido! 🎉', '¡Resuelto! 🎉'), txt: T('Telefone, limite de gastos e saldo: as três causas mais comuns de “não publica” ou “parou de rodar” no Turbinar. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Teléfono, límite de gastos y saldo: las tres causas más comunes de “no se publica” o “dejó de correr” en Promocionar. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['turbinar-post'] = [
    { alvo: '[data-t=btn-turbinar]', clique: true, garante: function () { location.hash = 'posts' },
      tit: T('Turbinar um post', 'Promocionar un post'), txt: T('A Marina publicou um post de teste e quer que mais gente veja e comente. Na lista de posts, cada post publicado tem o botão Turbinar. Clique nele.', 'Marina publicó un post de prueba y quiere que más gente lo vea y comente. En la lista de posts, cada post publicado tiene el botón Promocionar. Haz clic en él.') },
    { alvo: '[data-t=btn-meta]', clique: true, garante: function () { tb().M.aberta = false; location.hash = 'turbinar'; render() },
      tit: T('A meta', 'El objetivo'), txt: T('A primeira escolha é a meta: o resultado que a Marina quer. A Meta sugeriu “Receber mensagens”, mas ela quer outra coisa. Clique em Alterar.', 'La primera elección es el objetivo: el resultado que Marina quiere. Meta sugirió “Recibir mensajes”, pero ella quiere otra cosa. Haz clic en Cambiar.') },
    { alvo: '[data-t=jan-meta]', garante: function () { location.hash = 'turbinar'; tb().M.aberta = true; tb().M.sel = ''; render() }, cond: function () { return tb().M.sel === 'engajamento' },
      bloqueia: function (t) { var l = t.closest('label'); return !!(l && l.getAttribute('data-t') !== 'meta-engajamento') || !!t.closest('[data-t=meta-salvar]') && tb().M.sel !== 'engajamento' }, erro: T('A Marina quer que as pessoas reajam e comentem: a meta certa é Gerar engajamento.', 'Marina quiere que la gente reaccione y comente: el objetivo correcto es Generar interacción.'),
      tit: T('Qual meta?', '¿Qué objetivo?'), txt: T('Ela quer curtidas e comentários no post, não mensagens nem visitas ao site. Escolha Gerar engajamento e clique em Próximo.', 'Ella quiere reacciones y comentarios en el post, no mensajes ni visitas al sitio. Elige Generar interacción y haz clic en Siguiente.'),
      dica: T('Receber visitantes no site leva as pessoas para fora do Facebook.', 'Recibir visitantes en el sitio lleva a la gente fuera de Facebook.') },
    { alvo: '[data-t=meta-salvar]', clique: true, garante: function () { location.hash = 'turbinar'; tb().M.aberta = true; tb().M.sel = 'engajamento'; render() }, tit: T('Salvar', 'Guardar'), txt: T('Clique em Salvar.', 'Haz clic en Guardar.') },
    { alvo: '[data-t=sec-botao]', garante: function () { location.hash = 'turbinar'; tb().M.aberta = false; tb().S.meta = 'engajamento'; render() }, cond: function () { return tb().S.botao === 'Nenhum botão' },
      bloqueia: function (t) { var l = t.closest('label'); return !!(l && l.getAttribute('data-t') !== 'bt-nenhum') }, erro: T('A Marina não quer levar ninguém a lugar nenhum: o botão certo é Nenhum botão.', 'Marina no quiere llevar a nadie a ningún lado: el botón correcto es Ningún botón.'),
      tit: T('A pegadinha do botão', 'La trampa del botón'), txt: T('Repare: mesmo trocando a meta, o botão continua “Enviar mensagem”. Para o post só receber reações, escolha Nenhum botão e clique em Próximo.', 'Fíjate: aunque cambies el objetivo, el botón sigue siendo “Enviar mensaje”. Para que el post solo reciba reacciones, elige Ningún botón y haz clic en Siguiente.'),
      dica: T('Quem confere o anúncio pronto vê o botão na prévia, à direita.', 'Quien revisa el anuncio listo ve el botón en la vista previa, a la derecha.') },
    { alvo: '[data-t=sec-prog]', garante: function () { location.hash = 'turbinar' }, cond: function () { return tb().S.fim === 'data' && tb().S.dias === 1 },
      bloqueia: function (t) { return !!t.closest('[data-t=prog-continuo]') }, erro: T('Com pouco saldo, não deixe o anúncio rodar continuamente: escolha uma data de término.', 'Con poco saldo, no dejes el anuncio corriendo continuamente: elige una fecha de finalización.'),
      tit: T('Quanto tempo?', '¿Cuánto tiempo?'), txt: T('Por padrão o anúncio roda sem parar, até alguém pausar. A Marina tem pouco saldo: escolha “Escolher data de término” e coloque 1 dia. Depois clique em Próximo.', 'Por defecto el anuncio corre sin parar, hasta que alguien lo pause. Marina tiene poco saldo: elige “Elegir fecha de finalización” y pon 1 día. Después haz clic en Siguiente.'),
      dica: T('Ao escolher data de término, a tela sugere 7 dias por padrão.', 'Al elegir fecha de finalización, la pantalla sugiere 7 días por defecto.') },
    { alvo: '[data-t=sec-orc]', garante: function () { location.hash = 'turbinar' }, tit: T('Orçamento diário', 'Presupuesto diario'), txt: T('Aqui é quanto gastar por dia. O mínimo é R$ 5,27 e já mostra a estimativa de pessoas alcançadas. Deixe no mínimo e clique em Próximo.', 'Aquí es cuánto gastar por día. El mínimo es R$ 5,27 y ya muestra la estimación de personas alcanzadas. Déjalo en el mínimo y haz clic en Siguiente.') },
    { alvo: '[data-t=sec-pag]', garante: function () { location.hash = 'turbinar' }, tit: T('Pagamento', 'Pago'), txt: T('Confira o saldo e o valor total, com impostos estimados. A cobrança é diária e, se o saldo acabar, o anúncio pausa. Aqui o total cabe no saldo. Clique em Próximo.', 'Revisa el saldo y el valor total, con impuestos estimados. El cobro es diario y, si el saldo se acaba, el anuncio se pausa. Aquí el total cabe en el saldo. Haz clic en Siguiente.') },
    { alvo: '[data-t=publicar]', clique: true, garante: function () { location.hash = 'turbinar' }, tit: T('Publicar', 'Publicar'), txt: T('Tudo certo: meta, botão, duração e orçamento. Clique em Publicar. (No simulador não vai nada para a Meta.)', 'Todo listo: objetivo, botón, duración y presupuesto. Haz clic en Publicar. (En el simulador no va nada a Meta.)') },
    { alvo: '[data-t=jan-analise]', fim: true, semVolta: true, tit: T('Em análise! 🎉', '¡En revisión! 🎉'), txt: T('Todo anúncio passa por análise e a Meta avisa em até 24 horas. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Todo anuncio pasa por revisión y Meta avisa en hasta 24 horas. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
