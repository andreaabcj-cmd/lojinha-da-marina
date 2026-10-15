/* Simulador do Meta Verified para empresas: planos, cadastro, requisitos, assinatura (nome do perfil, cancelar, revogada) — visual da Lojinha.
   Estado no navegador (localStorage "sim.verified"); nada é enviado à Meta e nada é cobrado.
   Real (página pública da Meta, 16/10/2026, PT e ES): os 4 planos (PT: Business Básico, Plus, Premium, Max; ES: Business Standard, Plus, Premium, Max), os preços em US$, os números de cada plano (links nos Reels, endereços, funcionários, canais, dispositivos, contas protegidas), onde o selo aparece, "análise em até três dias úteis", "pode cancelar quando quiser".
   Real (Central de Ajuda, 16/10/2026, PT): requisitos (perfil completo com foto, controle total do portfólio, ativo qualificado, Proteção Avançada de todas as pessoas, espera de até 24 h), métodos de verificação e de confirmação, regras do nome do perfil, tipos de suporte por plano, causas de revogação, regras de cancelamento.
   NÃO visto: as telas internas do fluxo de assinatura (a Meta não permite ver sem assinar; nada foi comprado). Essas telas são do simulador, montadas a partir do texto da Central de Ajuda (a conferir).
   URL: meta-verified.html?zerar=1 · ?problema=1 (requisitos faltando) · ?ativa=1 (assinatura ativa) · ?revogada=1
   Tutoriais (tour.js): ?tour=escolher-plano | cadastrar-meta-verified | nao-consigo-cadastrar | nome-perfil | cancelar-assinatura */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var PLANOS = [
    { id: 'basico', nome: 'Business Básico', preco: 'US$ 14,99/mês', sup: ['Chat e e-mail 24 h'], num: ['—', '—', '—', '1', '4', '—'] },
    { id: 'plus', nome: 'Business Plus', preco: 'US$ 49,99/mês', sup: ['Chat e e-mail 24 h', 'Suporte priorizado'], num: ['2', '3', '—', '3', '6', '—'] },
    { id: 'premium', nome: 'Business Premium', preco: 'US$ 149,99/mês', sup: ['Chat e e-mail 24 h', 'Suporte priorizado', 'Ligação de um agente'], num: ['4', '5', '2', '5', '8', '10'] },
    { id: 'max', nome: 'Business Max', preco: 'US$ 499,99/mês', sup: ['Chat e e-mail 24 h', 'Suporte priorizado', 'Ligação de um agente', 'Monitoramento dedicado de casos'], num: ['6', '8', '5', '10', '10', '50'] }
  ];
  var LINHAS = ['Links nos Reels (por mês)', 'Endereços comerciais compartilhados', 'Funcionários protegidos contra falsificação', 'Canais verificados no WhatsApp', 'Dispositivos conectados no WhatsApp', 'Contas comerciais protegidas'];
  var METODOS = ['Detalhes da empresa', 'Documentação', 'Identificação oficial', 'Conta bancária empresarial', 'Presença estabelecida em produtos da Meta'];
  var CONFIRMA = ['E-mail', 'Mensagem de texto (SMS)', 'Ligação', 'Verificação de identidade', 'Verificação de domínio'];
  var CAUSAS = ['Falha no pagamento sem forma de pagamento reserva', 'Verificação não aprovada após o primeiro pagamento', 'Atualização de perfil reprovada por violar políticas', 'Violação das políticas da Meta', 'Exclusão da conta verificada', 'Desativação da conta por mais de 30 dias', 'Mudança da conta do Instagram de comercial para pessoal (cancela após 7 dias)', 'Mudança nas regras de qualificação (por exemplo, mudar para onde não há Meta Verified)', 'Mudança do plano direto na App Store ou Google Play'];
  function inicial() { return { tab: 'planos', sel: 'plus', etapa: 0, ativos: { ig: false, fb: false }, pag: false, met: '', conf: '', status: 'nenhuma', plano: '', fot: true, pa: { marina: true, rafa: true }, ctrl: true, espera: 0, nome: 'Lojinha da Marina', compra: 'Meta Business Suite (computador)', canc: null, motivo: '', msg: '', modalCancela: false, confDia: 0, ciclo: 12, novoNome: '', limiteNome: 0 } }
  function problema() { var s = inicial(); s.fot = false; s.pa.rafa = false; return s }
  function ativa() { var s = inicial(); s.status = 'ativa'; s.plano = 'plus'; s.ativos = { ig: true, fb: true }; s.tab = 'assinatura'; s.sel = 'plus'; return s }
  function revogada() { var s = ativa(); s.status = 'revogada'; s.motivo = CAUSAS[0]; return s }
  var S = ler('sim.verified', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('problema')) S = problema();
  if (params.get('ativa')) S = ativa();
  if (params.get('revogada')) S = revogada();
  function grava() { try { localStorage.setItem('sim.verified', JSON.stringify(S)) } catch (e) { } window.__simVf = { S: S } }
  grava();
  function plano(id) { return PLANOS.filter(function (p) { return p.id === id })[0] }
  function req() {
    var pessoas = [{ id: 'marina', n: 'Marina (você)' }, { id: 'rafa', n: 'Rafa' }];
    return [
      { id: 'foto', ok: S.fot, t: 'Perfil completo, com foto do perfil, nome, categoria e contato', fix: 'Adicionar foto de perfil', acao: 'fix-foto' },
      { id: 'ctrl', ok: S.ctrl, t: 'Controle total de um portfólio empresarial no Meta Business Suite', fix: 'Pedir controle total ao dono', acao: 'fix-ctrl' },
      { id: 'ativo', ok: true, t: 'O portfólio tem pelo menos um ativo de negócios qualificado (Página do Facebook ou conta do Instagram)' }
    ].concat(pessoas.map(function (p) { return { id: 'pa-' + p.id, ok: S.pa[p.id], t: 'Proteção Avançada ativada: ' + p.n, fix: 'Pedir para ' + p.n.split(' ')[0] + ' ativar', acao: 'fix-pa-' + p.id } }));
  }
  function reqOk() { return req().every(function (r) { return r.ok }) }
  function opcaoCadastro() { return reqOk() && S.espera <= 0 }
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento do Meta Verified · nada aqui vai para a Meta e nada é cobrado · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function nav() {
    var t = [['planos', '🏷️ Planos'], ['cadastro', '📝 Cadastrar empresa'], ['assinatura', '⚙️ Minha assinatura']];
    return '<nav class="ss-nav">' + t.map(function (x) { return '<button class="ss-it' + (S.tab === x[0] ? ' on' : '') + '" data-tab="' + x[0] + '" data-t="tab-' + x[0] + '">' + x[1] + '</button>' }).join('') + '</nav>';
  }
  function telaPlanos() {
    var cab = PLANOS.map(function (p) { return '<th data-t="plano-' + p.id + '"><b>' + p.nome + '</b><br><span class="miudo">' + p.preco + '</span><br><button class="btn' + (S.sel === p.id ? '' : ' sec') + '" data-escolhe="' + p.id + '" data-t="btn-escolhe-' + p.id + '">' + (S.sel === p.id ? 'Escolhido' : 'Escolher') + '</button></th>' }).join('');
    var base = [['Selo de verificado', 1, 1, 1, 1], ['Proteção contra falsificação de identidade', 1, 1, 1, 1]].map(function (r) { return '<tr><td>' + r[0] + '</td>' + r.slice(1).map(function () { return '<td>✓</td>' }).join('') + '</tr>' }).join('');
    var sup = ['Chat e e-mail 24 h', 'Suporte priorizado', 'Ligação de um agente', 'Monitoramento dedicado de casos'].map(function (nm) { return '<tr data-t="sup-' + nm.split(' ')[0].toLowerCase() + '"><td>' + nm + '</td>' + PLANOS.map(function (p) { return '<td>' + (p.sup.indexOf(nm) >= 0 ? '✓' : '—') + '</td>' }).join('') + '</tr>' }).join('');
    var nums = LINHAS.map(function (l, i) { return '<tr><td>' + l + '</td>' + PLANOS.map(function (p) { return '<td>' + p.num[i] + '</td>' }).join('') + '</tr>' }).join('');
    return '<h1>Meta Verified para empresas</h1><p class="ss-sub">Assinatura paga: selo de verificado, suporte e proteção contra falsificação de identidade.</p>' +
      '<div class="ga-aviso">Planos, benefícios e disponibilidade podem variar por região, app e conta. Você pode cancelar quando quiser.</div>' +
      '<table class="cm-tab" data-t="tabela-planos"><thead><tr><th></th>' + cab + '</tr></thead><tbody>' + base + sup + nums + '</tbody></table>' +
      '<p class="conferido">✓ Planos, preços em US$ e números conferidos com a página pública da Meta em ' + CONF + ' (PT e ES). Quais linhas pertencem a cada plano nos itens sem número não ficaram claros no texto da página, por isso não aparecem aqui (a conferir). O suporte por plano é do artigo da Central de Ajuda.</p>';
  }
  function telaCadastro() {
    if (S.status !== 'nenhuma') return '<h1>Cadastrar empresa</h1><div class="ga-aviso">Esta empresa já tem uma assinatura (' + S.status + '). Veja a aba Minha assinatura.</div>';
    if (!opcaoCadastro()) {
      var itens = req().map(function (r) { return '<li data-t="req-' + r.id + '" class="' + (r.ok ? 'vd' : 'verm') + '">' + (r.ok ? '✓ ' : '✗ ') + r.t + (!r.ok && r.fix ? ' <button class="btn sec" data-acao="' + r.acao + '" data-t="btn-' + r.acao + '">' + r.fix + '</button>' : '') + '</li>' }).join('');
      return '<h1>Cadastrar empresa</h1><div class="ga-aviso verm" data-t="sem-opcao"><b>A opção de cadastro do Meta Verified não aparece para esta empresa.</b> Se qualquer requisito não for atendido, a opção não fica disponível.</div>' +
        '<h3>Verificar requisitos <small>(painel do simulador, a conferir)</small></h3><ul class="vf-req" data-t="lista-req">' + itens + '</ul>' +
        (reqOk() ? '<div class="ga-aviso" data-t="aguarde-24h">Tudo certo. Aguarde até 24 horas para as mudanças entrarem em vigor e tente de novo. <button class="btn" data-acao="dia24" data-t="btn-dia24">Avançar 24 horas (simulador)</button></div>' : '') +
        '<p class="conferido">✓ Os requisitos e a espera de até 24 h são do artigo “Por que não consigo cadastrar minha empresa no Meta Verified?” (Central de Ajuda, ' + CONF + '). ⚠ O painel e os botões de correção são do simulador (a conferir).</p>';
    }
    var e = S.etapa, pass = ['Requisitos', 'Plano', 'Ativos', 'Pagamento', 'Verificação', 'Confirmação'];
    var cab = '<ol class="vf-pas">' + pass.map(function (n, i) { return '<li class="' + (i === e ? 'on' : i < e ? 'ok' : '') + '">' + n + '</li>' }).join('') + '</ol>';
    var corpo = '', pode = false;
    if (e === 0) { corpo = '<div class="ga-aviso vd">✓ Sua empresa cumpre os requisitos para cadastrar. Você precisa de controle total do portfólio e Proteção Avançada para todas as pessoas com acesso. Se não concluir a verificação em três dias, a assinatura é cancelada e você pode receber reembolso.</div>'; pode = true }
    else if (e === 1) { corpo = '<p><b>Escolha um plano</b></p>' + PLANOS.map(function (p) { return '<label class="ga-lin"><input type="radio" name="vfPl" value="' + p.id + '"' + (S.sel === p.id ? ' checked' : '') + ' data-t="radio-' + p.id + '"/><span><b>' + p.nome + '</b> · ' + p.preco + '</span></label>' }).join(''); pode = !!S.sel }
    else if (e === 2) { corpo = '<p><b>Quais ativos verificar?</b> (até 2 no app; até 3 pelo Meta Business Suite no computador)</p><label class="ga-lin"><input type="checkbox" id="vfIg"' + (S.ativos.ig ? ' checked' : '') + ' data-t="ativo-ig"/><span>Conta do Instagram · @lojinhadamarina</span></label><label class="ga-lin"><input type="checkbox" id="vfFb"' + (S.ativos.fb ? ' checked' : '') + ' data-t="ativo-fb"/><span>Página do Facebook · Lojinha da Marina</span></label><p class="miudo">Ao combinar mais de um ativo, o preço tem desconto, e os ativos podem precisar de nomes semelhantes.</p>'; pode = S.ativos.ig || S.ativos.fb }
    else if (e === 3) { corpo = '<p><b>Pagamento da assinatura</b></p><p class="miudo">Simulado: nada é cobrado. Tenha uma forma de pagamento reserva para a assinatura não ser cancelada se a principal falhar.</p><button class="btn' + (S.pag ? ' sec' : '') + '" data-acao="paga" data-t="btn-pagamento">' + (S.pag ? '✓ Pagamento configurado' : 'Configurar pagamento (simulado)') + '</button>'; pode = S.pag }
    else if (e === 4) { corpo = '<p><b>Como verificar sua empresa?</b></p>' + METODOS.map(function (m) { return '<label class="ga-lin"><input type="radio" name="vfMet" value="' + esc(m) + '"' + (S.met === m ? ' checked' : '') + ' data-t="met-' + METODOS.indexOf(m) + '"/><span>' + m + '</span></label>' }).join('') + '<p class="miudo">Alguns métodos podem não estar disponíveis para todas as regiões ou empresas.</p>'; pode = !!S.met }
    else { corpo = '<p><b>Confirme sua conexão com a empresa</b></p>' + CONFIRMA.map(function (m) { return '<label class="ga-lin"><input type="radio" name="vfCf" value="' + esc(m) + '"' + (S.conf === m ? ' checked' : '') + ' data-t="conf-' + CONFIRMA.indexOf(m) + '"/><span>' + m + '</span></label>' }).join(''); pode = !!S.conf }
    var ult = e === 5;
    return '<h1>Cadastrar empresa no Meta Verified</h1>' + cab + '<div class="vf-caixa" data-t="passo-cad">' + corpo + '</div><div class="rodape-jan">' + (e ? '<button class="btn sec" data-acao="volta" data-t="btn-volta">Voltar</button>' : '') + '<button class="btn" data-acao="' + (ult ? 'envia' : 'avanca') + '" data-t="btn-' + (ult ? 'envia' : 'avanca') + '"' + (pode ? '' : ' disabled') + '>' + (ult ? 'Enviar inscrição' : 'Continuar') + '</button></div>' +
      '<p class="conferido">✓ A ordem (plano, ativos, pagamento, verificação), os métodos de verificação e de confirmação e o prazo de 3 dias úteis são do artigo “Cadastre sua empresa no Meta Verified” e de “Métodos de verificação” (' + CONF + '). ⚠ As telas são do simulador: o fluxo interno não pôde ser visto sem assinar (a conferir).</p>';
  }
  function telaAssinatura() {
    var st = S.status, h = '<h1>Minha assinatura</h1>', p = plano(S.plano);
    if (st === 'nenhuma') return h + '<div class="ga-aviso">Esta empresa ainda não tem assinatura. Use a aba Cadastrar empresa.</div>';
    var base = '<div class="vf-caixa" data-t="card-assinatura"><b>' + (p ? p.nome : '') + '</b> · ' + (p ? p.preco : '') + '<br>Ativos: ' + (S.ativos.ig ? 'Instagram ' : '') + (S.ativos.fb ? 'Página do Facebook' : '') + '<br>Nome do perfil: <b data-t="nome-atual">' + esc(S.nome) + '</b><br>Comprado em: ' + esc(S.compra) + '</div>';
    if (st === 'analise') return h + base + '<div class="ga-aviso" data-t="status-analise"><b>Em análise.</b> Enviaremos uma atualização do status em até 3 dias úteis. Enquanto isso, você talvez não consiga atualizar o nome do perfil, o nome de usuário ou a localização. <button class="btn" data-acao="dia3" data-t="btn-dia3">Avançar 3 dias úteis (simulador)</button></div>';
    if (st === 'revogada') return h + base + '<div class="ga-aviso verm" data-t="status-revogada"><b>Assinatura revogada.</b> Os benefícios acabaram imediatamente (selo e suporte). Diferente do cancelamento, em que os benefícios continuam até o fim do ciclo.</div><h3>Motivos comuns para a revogação</h3><ul data-t="lista-causas">' + CAUSAS.map(function (c) { return '<li' + (c === S.motivo ? ' class="verm"><b>' + c + ' ← possível causa nesta conta</b>' : '>' + c) + '</li>' }).join('') + '</ul><p class="miudo">Se a verificação não passou após o primeiro pagamento, a assinatura é cancelada e a pessoa tem direito a reembolso.</p><p class="conferido">✓ Lista de motivos do artigo “Assinaturas do Meta Verified para empresas revogadas” (Central de Ajuda, ' + CONF + '). ⚠ A “possível causa nesta conta” é do simulador.</p>';
    if (st === 'cancelada-fim') return h + base + '<div class="ga-aviso" data-t="status-cancelada">Assinatura cancelada. Ela permanece ativa até o fim do ciclo atual (faltam ' + S.ciclo + ' dias); depois, todos os ativos perdem a verificação e o suporte acaba, inclusive os casos abertos.</div>';
    var ok = '<div class="ga-aviso vd" data-t="status-ativa">✓ <b>Ativa.</b> Selo de verificado exibido nos ativos assinados. Ciclo de cobrança: faltam ' + S.ciclo + ' dias.</div>';
    var nomeBox = '<h3>Atualizar o nome do perfil</h3><input class="ga-in" id="vfNome" placeholder="Novo nome do perfil" value="' + esc(S.novoNome) + '" data-t="campo-nome"/> <button class="btn" data-acao="troca-nome" data-t="btn-troca-nome">Enviar para análise</button>' + (S.msg ? '<div class="ga-aviso" data-t="msg-nome">' + esc(S.msg) + '</div>' : '') +
      '<p class="miudo">Regras (Central de Ajuda): o novo nome deve ser semelhante ao nome civil no portfólio (Marina Costa Silva) e ao nome usado no cadastro. Aceitos: abreviações, variações de grafia, iniciais, nomes compostos. Não aceitos: símbolos, números, repetição de letras, ofensas. Limites: Instagram 2 vezes a cada 14 dias; Facebook 1 vez a cada 60 dias. A análise leva até 3 dias.</p>';
    var sup = '<h3>Suporte do seu plano</h3><ul data-t="lista-suporte">' + (p ? p.sup.map(function (x) { return '<li>' + x + '</li>' }).join('') : '') + '</ul><p class="miudo">O chat fica no app do Instagram/Facebook (celular) ou no Meta Business Suite (computador). O e-mail é 24 h.</p>';
    var canc = '<h3>Cancelar</h3><button class="btn sec" data-acao="abre-cancela" data-t="btn-cancela">Cancelar assinatura</button>';
    return h + base + ok + nomeBox + sup + canc;
  }
  function modalCancela() {
    if (!S.modalCancela) return '';
    return '<div class="ga-fundo"><div class="ga-jan fd-jan" data-t="jan-cancela"><h2>Cancelar o Meta Verified?</h2><ul class="miudo"><li>A assinatura continua ativa até o fim do ciclo atual.</li><li>Para não ser cobrado no próximo ciclo, cancele pelo menos 24 horas antes da próxima data de pagamento.</li><li>Não há reembolso nem crédito parcial para cancelamentos.</li><li>Você perde todos os benefícios (inclusive suporte e casos abertos) e todos os ativos perdem a verificação no fim do ciclo.</li></ul>' +
      '<p class="miudo">Você comprou em: ' + esc(S.compra) + '.</p><p class="miudo">Só dá para cancelar onde comprou (Meta Business Suite no computador; App Store da Apple; Google Play) e com o nível de acesso certo (controle total do portfólio, ou a conta Apple/Google usada na compra).</p>' +
      '<label class="ga-lin"><input type="checkbox" id="vfEntendi" data-t="entendi"/><span>Entendi</span></label><div class="rodape-jan"><button class="btn sec" data-acao="fecha-cancela" data-t="btn-fecha">Voltar</button><button class="btn" id="vfConfCanc" data-acao="confirma-cancela" data-t="btn-confirma-cancela" disabled>Cancelar assinatura</button></div></div></div>';
  }
  function pagina() {
    var corpo = S.tab === 'planos' ? telaPlanos() : S.tab === 'cadastro' ? telaCadastro() : telaAssinatura();
    return casca('<div class="ss">' + nav() + '<main class="ss-main">' + corpo + '</main></div>' + modalCancela());
  }
  function semelhante(novo) {
    var a = String(novo).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''), ref = 'marina costa silva lojinha da marina'.split(' ');
    return a.split(/\s+/).some(function (w) { return w.length > 1 && ref.indexOf(w) >= 0 });
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); grava(); render(); return }
    if ((c = t.closest('[data-escolhe]'))) { S.sel = c.getAttribute('data-escolhe'); grava(); render(); return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-acao');
    if (ac === 'fix-foto') S.fot = true; else if (ac === 'fix-ctrl') S.ctrl = true; else if (ac === 'fix-pa-marina') S.pa.marina = true; else if (ac === 'fix-pa-rafa') S.pa.rafa = true;
    if (/^fix-/.test(ac)) { if (reqOk() && S.espera === 0) S.espera = 1 }
    else if (ac === 'dia24') S.espera = 0;
    else if (ac === 'avanca') S.etapa = Math.min(5, S.etapa + 1);
    else if (ac === 'volta') S.etapa = Math.max(0, S.etapa - 1);
    else if (ac === 'paga') S.pag = true;
    else if (ac === 'envia') { S.status = 'analise'; S.plano = S.sel; S.tab = 'assinatura'; S.msg = '' }
    else if (ac === 'dia3') { S.status = 'ativa'; S.ciclo = 30 }
    else if (ac === 'troca-nome') {
      var n = String(S.novoNome || '').trim();
      if (!n) return;
      if (/[0-9@#$%&*!?_]/.test(n)) S.msg = 'Nome recusado: o nome do perfil não pode ter símbolos nem números.';
      else if (!/\s/.test(n)) S.msg = 'Nome recusado: é preciso um nome e um sobrenome (nome de uma palavra só pode ser rejeitado).';
      else if (!semelhante(n)) S.msg = 'Nome recusado: o novo nome é muito diferente do nome civil no portfólio e do nome do cadastro. Atualize o nome civil no portfólio ou escolha um nome semelhante.';
      else if (S.limiteNome >= 2) S.msg = 'Você atingiu o limite de edições do Instagram (2 a cada 14 dias). Aguarde antes de tentar de novo.';
      else { S.nome = n; S.limiteNome++; S.msg = 'Enviado para análise e aprovado: o novo nome aparece no perfil verificado. (Na vida real, a análise leva até 3 dias.)' }
    }
    else if (ac === 'abre-cancela') S.modalCancela = true;
    else if (ac === 'fecha-cancela') S.modalCancela = false;
    else if (ac === 'confirma-cancela') { S.modalCancela = false; S.status = 'cancelada-fim' }
    else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.name === 'vfPl') S.sel = t.value; else if (t.name === 'vfMet') S.met = t.value; else if (t.name === 'vfCf') S.conf = t.value;
    else if (t.id === 'vfIg') S.ativos.ig = t.checked; else if (t.id === 'vfFb') S.ativos.fb = t.checked;
    else if (t.id === 'vfEntendi') { var bt = document.getElementById('vfConfCanc'); if (bt) bt.disabled = !t.checked; return }
    else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) { if (ev.target.id === 'vfNome') { S.novoNome = ev.target.value; S.msg = ''; grava() } });
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simVf = { S: S };
  }
  window.SIMVF = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, problema: function () { S = problema(); grava(); render() }, ativa: function () { S = ativa(); grava(); render() }, revogada: function () { S = revogada(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function vf() { return window.__simVf ? window.__simVf.S : S }
  function pronto() { SIMVF.zera(); SIMVF.set({ tab: 'cadastro' }) }
  TOURS['escolher-plano'] = [
    { antes: function () { SIMVF.zera() }, alvo: '[data-t=tabela-planos]', garante: function () { SIMVF.zera() }, tit: T('Os quatro planos', 'Los cuatro planes'), txt: T('O Meta Verified para empresas é uma assinatura paga, com quatro planos: Básico, Plus, Premium e Max. Planos e preços podem variar por região, app e conta. Clique em Próximo.', 'Meta Verified para empresas es una suscripción paga, con cuatro planes: Standard, Plus, Premium y Max. Los planes y precios pueden variar según la región, la app y la cuenta. Haz clic en Siguiente.') },
    { alvo: '[data-t=sup-chat]', garante: function () { SIMVF.zera() }, tit: T('Suporte: todos os planos', 'Asistencia: todos los planes'), txt: T('Todos os planos incluem o selo, a proteção contra falsificação de identidade e suporte por chat e e-mail 24 h. É o suporte “avançado”: só vale enquanto a assinatura estiver ativa. Clique em Próximo.', 'Todos los planes incluyen la insignia, la protección contra la suplantación de identidad y asistencia por chat y correo 24 h. Es la asistencia “mejorada”: solo vale mientras la suscripción esté activa. Haz clic en Siguiente.') },
    { alvo: '[data-t=sup-ligação]', garante: function () { SIMVF.zera() }, tit: T('Mais suporte, plano mais alto', 'Más asistencia, plan más alto'), txt: T('O suporte priorizado começa no Plus; a ligação de um agente, no Premium; o monitoramento dedicado de casos, só no Max. Clique em Próximo.', 'La asistencia prioritaria empieza en Plus; la llamada de un agente, en Premium; el monitoreo dedicado de casos, solo en Max. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-escolhe-premium]', clique: true, garante: function () { SIMVF.zera() }, tit: T('Escolher um plano', 'Elegir un plan'), txt: T('Uma cliente quer ligação de um agente quando tiver problema. Qual é o plano mais barato que dá isso? Clique em Escolher no Premium.', 'Una clienta quiere la llamada de un agente cuando tenga un problema. ¿Cuál es el plan más barato que lo ofrece? Haz clic en Elegir en Premium.') },
    { alvo: '[data-t=tabela-planos]', fim: true, semVolta: true, garante: function () { SIMVF.zera(); SIMVF.set({ sel: 'premium' }) }, tit: T('Premium! 🎉', '¡Premium! 🎉'), txt: T('Isso: ligação de um agente só do Premium para cima. Lembre que o plano mais caro nem sempre é o certo: o que o cliente precisa decide. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Eso: la llamada de un agente solo desde Premium. Recuerda que el plan más caro no siempre es el correcto: lo que necesita el cliente decide. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['cadastrar-meta-verified'] = [
    { antes: function () { pronto() }, alvo: '[data-t=passo-cad]', garante: function () { pronto() }, tit: T('Primeiro, os requisitos', 'Primero, los requisitos'), txt: T('Para cadastrar, a empresa precisa de perfil completo, controle total do portfólio, um ativo qualificado e Proteção Avançada de todas as pessoas. Aqui está tudo certo. Clique em Próximo.', 'Para registrarse, la empresa necesita perfil completo, control total del portfolio, un activo que cumpla los requisitos y Protección avanzada de todas las personas. Aquí está todo bien. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-avanca]', clique: true, garante: function () { pronto() }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=radio-plus]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 1 }) }, tit: T('Escolher o plano', 'Elegir el plan'), txt: T('Escolha o Business Plus.', 'Elige Business Plus.') },
    { alvo: '[data-t=btn-avanca]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 1, sel: 'plus' }) }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=ativo-ig]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 2, sel: 'plus' }) }, tit: T('Escolher os ativos', 'Elegir los activos'), txt: T('Marque a conta do Instagram. Dá para verificar até dois ativos do mesmo portfólio (até três pelo Meta Business Suite no computador); com mais de um, o preço tem desconto.', 'Marca la cuenta de Instagram. Se pueden verificar hasta dos activos del mismo portfolio (hasta tres desde Meta Business Suite en la computadora); con más de uno, el precio tiene descuento.') },
    { alvo: '[data-t=btn-avanca]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 2, sel: 'plus', ativos: { ig: true, fb: false } }) }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=btn-pagamento]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 3, sel: 'plus', ativos: { ig: true, fb: false } }) }, tit: T('Pagamento', 'Pago'), txt: T('Configure o pagamento (simulado, nada é cobrado). Na vida real, convém ter uma forma de pagamento reserva.', 'Configura el pago (simulado, no se cobra nada). En la vida real, conviene tener una forma de pago de respaldo.') },
    { alvo: '[data-t=btn-avanca]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 3, sel: 'plus', ativos: { ig: true, fb: false }, pag: true }) }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=met-0]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 4, sel: 'plus', ativos: { ig: true, fb: false }, pag: true }) }, tit: T('Verificar a empresa', 'Verificar la empresa'), txt: T('Escolha “Detalhes da empresa”: as informações precisam corresponder a um registro público de empresa. As outras opções são documentação, identificação oficial, conta bancária empresarial e presença estabelecida.', 'Elige “Detalles de la empresa”: la información debe coincidir con un registro público de empresas. Las otras opciones son documentación, identificación oficial, cuenta bancaria empresarial y presencia establecida.') },
    { alvo: '[data-t=btn-avanca]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 4, sel: 'plus', ativos: { ig: true, fb: false }, pag: true, met: 'Detalhes da empresa' }) }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=conf-0]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 5, sel: 'plus', ativos: { ig: true, fb: false }, pag: true, met: 'Detalhes da empresa' }) }, tit: T('Confirmar a conexão', 'Confirmar la conexión'), txt: T('Escolha “E-mail”: você receberá um código no e-mail mostrado na tela. Também há SMS, ligação, identidade e domínio.', 'Elige “Correo electrónico”: recibirás un código en el correo que muestra la pantalla. También hay SMS, llamada, identidad y dominio.') },
    { alvo: '[data-t=btn-envia]', clique: true, garante: function () { SIMVF.set({ tab: 'cadastro', etapa: 5, sel: 'plus', ativos: { ig: true, fb: false }, pag: true, met: 'Detalhes da empresa', conf: 'E-mail' }) }, tit: T('Enviar', 'Enviar'), txt: T('Clique em Enviar inscrição.', 'Haz clic en Enviar inscripción.') },
    { alvo: '[data-t=status-analise]', fim: true, semVolta: true, garante: function () { SIMVF.set({ tab: 'assinatura', status: 'analise', plano: 'plus', ativos: { ig: true, fb: false } }) }, tit: T('Em análise! 🎉', '¡En revisión! 🎉'), txt: T('A inscrição foi para análise: a atualização do status chega em até 3 dias úteis. O selo só aparece depois da aprovação. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'La solicitud pasó a revisión: la actualización del estado llega en un plazo de 3 días hábiles. La insignia aparece solo después de la aprobación. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['nao-consigo-cadastrar'] = [
    { antes: function () { SIMVF.problema(); SIMVF.set({ tab: 'cadastro' }) }, alvo: '[data-t=sem-opcao]', garante: function () { SIMVF.problema(); SIMVF.set({ tab: 'cadastro' }) }, tit: T('“Não aparece o cadastro”', '“No aparece el registro”'), txt: T('A Marina não vê a opção de cadastro do Meta Verified. A Central de Ajuda diz: se qualquer requisito não for atendido, a opção não aparece. Vamos conferir um por um. Clique em Próximo.', 'Marina no ve la opción de registro de Meta Verified. El Centro de ayuda dice: si algún requisito no se cumple, la opción no aparece. Revisemos uno por uno. Haz clic en Siguiente.') },
    { alvo: '[data-t=req-foto]', garante: function () { SIMVF.problema(); SIMVF.set({ tab: 'cadastro' }) }, tit: T('Perfil completo', 'Perfil completo'), txt: T('Primeiro problema: o perfil não tem foto. Perfil completo = foto, nome, categoria e contato. Clique em Próximo.', 'Primer problema: el perfil no tiene foto. Perfil completo = foto, nombre, categoría y contacto. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-fix-foto]', clique: true, garante: function () { SIMVF.problema(); SIMVF.set({ tab: 'cadastro' }) }, tit: T('Corrigir a foto', 'Corregir la foto'), txt: T('Adicione a foto de perfil.', 'Agrega la foto de perfil.') },
    { alvo: '[data-t=req-pa-rafa]', garante: function () { SIMVF.problema(); SIMVF.set({ tab: 'cadastro', fot: true }) }, tit: T('Proteção Avançada de todos', 'Protección avanzada de todos'), txt: T('Segundo problema, o mais comum: todas as pessoas com acesso ao portfólio precisam ter a Proteção Avançada ativada na própria conta. O Rafa não ativou. Se pelo menos uma pessoa não tiver, a opção não aparece. Clique em Próximo.', 'Segundo problema, el más común: todas las personas con acceso al portfolio deben tener activada la Protección avanzada en su propia cuenta. Rafa no la activó. Si al menos una persona no la tiene, la opción no aparece. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-fix-pa-rafa]', clique: true, garante: function () { SIMVF.problema(); SIMVF.set({ tab: 'cadastro', fot: true }) }, tit: T('Pedir ao Rafa', 'Pedirle a Rafa'), txt: T('Você não ativa por ele: cada pessoa ativa na própria conta. Aqui, clique para simular que o Rafa ativou.', 'No la activas por él: cada persona la activa en su propia cuenta. Aquí, haz clic para simular que Rafa la activó.') },
    { alvo: '[data-t=aguarde-24h]', garante: function () { SIMVF.problema(); SIMVF.set({ tab: 'cadastro', fot: true, pa: { marina: true, rafa: true }, espera: 1 }) }, tit: T('Aguarde até 24 horas', 'Espera hasta 24 horas'), txt: T('Tudo certo, mas as mudanças podem levar até 24 horas para valer. Clique em Próximo.', 'Todo bien, pero los cambios pueden tardar hasta 24 horas en tener efecto. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-dia24]', clique: true, garante: function () { SIMVF.problema(); SIMVF.set({ tab: 'cadastro', fot: true, pa: { marina: true, rafa: true }, espera: 1 }) }, tit: T('Deixar passar o tempo', 'Dejar pasar el tiempo'), txt: T('Clique em Avançar 24 horas (só existe no simulador).', 'Haz clic en Avanzar 24 horas (solo existe en el simulador).') },
    { alvo: '[data-t=passo-cad]', fim: true, semVolta: true, garante: function () { SIMVF.problema(); SIMVF.set({ tab: 'cadastro', fot: true, pa: { marina: true, rafa: true }, espera: 0 }) }, tit: T('A opção apareceu! 🎉', '¡Apareció la opción! 🎉'), txt: T('Agora o cadastro está disponível. Ordem de conferência: perfil completo, controle total do portfólio, ativo qualificado, Proteção Avançada de todos e espera de até 24 h. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora el registro está disponible. Orden de revisión: perfil completo, control total del portfolio, activo que cumple los requisitos, Protección avanzada de todos y espera de hasta 24 h. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['nome-perfil'] = [
    { antes: function () { SIMVF.ativa() }, alvo: '[data-t=card-assinatura]', garante: function () { SIMVF.ativa() }, tit: T('Assinatura ativa', 'Suscripción activa'), txt: T('A Marina já é verificada e quer mudar o nome do perfil. O nome novo é analisado contra o nome civil no portfólio (Marina Costa Silva) e o nome do cadastro. Clique em Próximo.', 'Marina ya está verificada y quiere cambiar el nombre del perfil. El nombre nuevo se compara con el nombre legal en el portfolio (Marina Costa Silva) y el nombre del registro. Haz clic en Siguiente.') },
    { alvo: '[data-t=campo-nome]', garante: function () { SIMVF.ativa() }, cond: function () { return /^Brigadeiros/.test(String(vf().novoNome || '')) }, tit: T('Um nome de marca', 'Un nombre de marca'), txt: T('Ela quer “Brigadeiros Gourmet 2000”. Digite esse nome para ver o que acontece.', 'Ella quiere “Brigadeiros Gourmet 2000”. Escribe ese nombre para ver qué pasa.'), dica: T('Digite Brigadeiros Gourmet 2000.', 'Escribe Brigadeiros Gourmet 2000.') },
    { alvo: '[data-t=btn-troca-nome]', clique: true, garante: function () { SIMVF.ativa(); SIMVF.set({ novoNome: 'Brigadeiros Gourmet 2000' }) }, tit: T('Enviar', 'Enviar'), txt: T('Clique em Enviar para análise.', 'Haz clic en Enviar para revisión.') },
    { alvo: '[data-t=msg-nome]', garante: function () { SIMVF.ativa(); SIMVF.set({ novoNome: 'Brigadeiros Gourmet 2000', msg: 'Nome recusado: o nome do perfil não pode ter símbolos nem números.' }) }, tit: T('Recusado', 'Rechazado'), txt: T('Recusado: números não são aceitos, e o nome também é muito diferente do nome civil. Aceitos: abreviações, variações de grafia, iniciais e nomes compostos. Clique em Próximo.', 'Rechazado: no se aceptan números, y además el nombre es muy distinto del nombre legal. Se aceptan: abreviaturas, variantes de ortografía, iniciales y nombres compuestos. Haz clic en Siguiente.') },
    { alvo: '[data-t=campo-nome]', garante: function () { SIMVF.ativa() }, cond: function () { return /^Marina Silva/.test(String(vf().novoNome || '')) }, tit: T('Um nome parecido', 'Un nombre parecido'), txt: T('Agora tente “Marina Silva”, parecido com o nome civil. Digite o nome.', 'Ahora prueba “Marina Silva”, parecido con el nombre legal. Escribe el nombre.'), dica: T('Digite Marina Silva.', 'Escribe Marina Silva.') },
    { alvo: '[data-t=btn-troca-nome]', clique: true, garante: function () { SIMVF.ativa(); SIMVF.set({ novoNome: 'Marina Silva' }) }, tit: T('Enviar', 'Enviar'), txt: T('Clique em Enviar para análise.', 'Haz clic en Enviar para revisión.') },
    { alvo: '[data-t=nome-atual]', fim: true, semVolta: true, garante: function () { SIMVF.ativa(); SIMVF.set({ nome: 'Marina Silva', msg: 'Enviado para análise e aprovado: o novo nome aparece no perfil verificado. (Na vida real, a análise leva até 3 dias.)' }) }, tit: T('Aprovado! 🎉', '¡Aprobado! 🎉'), txt: T('Funcionou porque o nome é parecido com o nome civil. Lembre dos limites: Instagram 2 vezes a cada 14 dias; Facebook 1 vez a cada 60 dias. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Funcionó porque el nombre es parecido al nombre legal. Recuerda los límites: Instagram 2 veces cada 14 días; Facebook 1 vez cada 60 días. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['cancelar-assinatura'] = [
    { antes: function () { SIMVF.ativa() }, alvo: '[data-t=btn-cancela]', clique: true, garante: function () { SIMVF.ativa() }, tit: T('Cancelar', 'Cancelar'), txt: T('A cliente quer cancelar o Meta Verified. Clique em Cancelar assinatura e leia o aviso antes de confirmar.', 'La clienta quiere cancelar Meta Verified. Haz clic en Cancelar suscripción y lee el aviso antes de confirmar.') },
    { alvo: '[data-t=jan-cancela]', garante: function () { SIMVF.ativa(); SIMVF.set({ modalCancela: true }) }, tit: T('O que ela precisa saber', 'Lo que necesita saber'), txt: T('Cancelar não é imediato: continua ativa até o fim do ciclo. Para não pagar o próximo, cancelar pelo menos 24 h antes. Não há reembolso. E só se cancela onde comprou, com o acesso certo. Clique em Próximo.', 'Cancelar no es inmediato: sigue activa hasta el final del ciclo. Para no pagar el siguiente, hay que cancelar al menos 24 h antes. No hay reembolso. Y solo se cancela donde se compró, con el acceso correcto. Haz clic en Siguiente.') },
    { alvo: '[data-t=entendi]', clique: true, garante: function () { SIMVF.ativa(); SIMVF.set({ modalCancela: true }) }, tit: T('Confirmar a leitura', 'Confirmar la lectura'), txt: T('Marque “Entendi”.', 'Marca “Entendí”.') },
    { alvo: '[data-t=btn-confirma-cancela]', clique: true, garante: function () { SIMVF.ativa(); SIMVF.set({ modalCancela: true }); var c = document.getElementById('vfEntendi'); if (c) { c.checked = true; c.dispatchEvent(new Event('change', { bubbles: true })) } }, tit: T('Cancelar', 'Cancelar'), txt: T('Clique em Cancelar assinatura.', 'Haz clic en Cancelar suscripción.') },
    { alvo: '[data-t=status-cancelada]', fim: true, semVolta: true, garante: function () { SIMVF.ativa(); SIMVF.set({ status: 'cancelada-fim' }) }, tit: T('Cancelada, mas ainda ativa 🎉', 'Cancelada, pero todavía activa 🎉'), txt: T('O status mostra: continua ativa até o fim do ciclo, e depois todos os ativos perdem a verificação. Diferente da revogação, em que tudo acaba na hora. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'El estado muestra: sigue activa hasta el final del ciclo, y después todos los activos pierden la verificación. Diferente de la revocación, donde todo termina al instante. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
