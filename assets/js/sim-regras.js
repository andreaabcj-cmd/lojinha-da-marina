/* Simulador do Gerenciador de Anúncios › Regras automatizadas — layout fiel, visual da Lojinha.
   Estado no navegador (localStorage "sim.regras"); nada é enviado à Meta.
   Textos copiados das telas reais (conta de aula, 16/10/2026), em português e em espanhol (?locale=es_LA): página Regras automatizadas e janela Criar regra.
   Os DADOS (conjuntos de anúncios, gastos e resultados) são inventados para o treino. Ações e métricas conferidas com a tela real em 25/10/2026 (PT e ES); o botão "Ver quais conjuntos seriam atingidos"
   não foi visto na tela real (a conferir). Ver _roteiro/telas_gerenciador_anuncios.md.
   URL: meta-regras.html?zerar=1 · ?exemplo=1 (uma regra pronta) · ?problema=1 (regra larga que desativou um bom conjunto)
   Tutoriais (tour.js): ?tour=criar-regra | evitar-falso-positivo | acompanhar-editar | regra-desativou-tudo */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function fmt(n) { return 'R$ ' + n.toFixed(2).replace('.', ',') }

  var INTERVALOS = ['Hoje', 'Ontem', 'Últimos 7 dias', 'Últimos 14 dias', '37 meses (máximo)'];
  var METRICAS = ['Gasto', 'Resultados', 'Custo por resultado'];
  var OPS = ['é maior que', 'é menor que', 'é igual a'];
  var ACOES = ['Desativar conjuntos de anúncios', 'Somente enviar notificação', 'Aumentar orçamento diário em', 'Reduzir orçamento diário em'];
  var APLICA = ['Todos os conjuntos de anúncios ativos', 'Todas as campanhas ativas', 'Conjuntos de anúncios selecionados na tabela'];
  // dados do treino: por conjunto e por intervalo [gasto, resultados]
  var DADOS = {
    a: { nome: 'Caneca azul · Brasil', d: { 'Hoje': [6, 1], 'Ontem': [12, 2], 'Últimos 7 dias': [42.1, 6], 'Últimos 14 dias': [80, 11], '37 meses (máximo)': [180, 25] } },
    b: { nome: 'Camiseta Montanha · Brasil', d: { 'Hoje': [4, 0], 'Ontem': [9, 0], 'Últimos 7 dias': [31.5, 0], 'Últimos 14 dias': [50, 2], '37 meses (máximo)': [95, 4] } },
    c: { nome: 'Ecobag Folha · Brasil', d: { 'Hoje': [1, 0], 'Ontem': [2, 0], 'Últimos 7 dias': [8, 0], 'Últimos 14 dias': [8, 0], '37 meses (máximo)': [8, 0] } }
  };
  function inicial() { return { rules: [], seq: 0, st: { a: 'Ativo', b: 'Ativo', c: 'Ativo' }, sel: {}, sub: '' } }
  var S = ler('sim.regras', null) || inicial();
  var RULE_EX = function () { return { id: 'r1', nome: 'Pausar conjunto sem resultado', aplica: APLICA[0], acao: ACOES[0], pct: '', conds: [{ m: 'Gasto', op: 'é maior que', v: '20' }, { m: 'Resultados', op: 'é igual a', v: '0' }], intervalo: 'Últimos 7 dias', prog: 'Diariamente', notif: true, ativa: true, res: '', ultima: '' } };
  if (params.get('zerar')) S = inicial();
  if (params.get('exemplo')) { S = inicial(); S.rules = [RULE_EX()]; S.seq = 1 }
  if (params.get('problema')) { S = inicial(); var rp = RULE_EX(); rp.nome = 'Pausar conjunto caro'; rp.conds = [{ m: 'Gasto', op: 'é maior que', v: '20' }]; rp.intervalo = '37 meses (máximo)'; rp.prog = 'Continuamente'; rp.res = 'Desativou 2 conjuntos de anúncios'; rp.ultima = 'agora há pouco'; S.rules = [rp]; S.seq = 1; S.st.a = 'Desativado'; S.st.b = 'Desativado' }
  var D = null;                                    // janela Criar/Editar regra (rascunho)
  var M = false;                                   // menu "Mais" da tabela
  function grava() { try { localStorage.setItem('sim.regras', JSON.stringify(S)) } catch (e) { } window.__simRg = { S: S, D: D } }
  grava();
  function rota() { return (location.hash || '#lista').slice(1) }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento do Gerenciador de Anúncios · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function conferido(pend) { return pend ? '<p class="conferido pendente">⚠ ' + pend + '</p>' : '<p class="conferido">✓ Tela conferida com o Gerenciador de Anúncios real em ' + CONF + ' (conta de aula)</p>' }

  /* ---------- lógica das regras (só do simulador) ---------- */
  function casa(r, id) {
    var dd = DADOS[id].d[r.intervalo] || [0, 0], g = dd[0], res = dd[1], cpr = res ? g / res : 0;
    return r.conds.every(function (c) {
      var v = parseFloat(String(c.v).replace(',', '.')), x = c.m === 'Gasto' ? g : c.m === 'Resultados' ? res : cpr;
      if (isNaN(v)) return false;
      return c.op === 'é maior que' ? x > v : c.op === 'é menor que' ? x < v : Math.abs(x - v) < 0.001;
    });
  }
  function alvos(r) { return Object.keys(DADOS).filter(function (id) { return S.st[id] === 'Ativo' && (r.aplica !== APLICA[2] || S.sel[id] || r.fixo && r.fixo.indexOf(id) >= 0) && casa(r, id) }) }
  function executa(r) {
    var al = alvos(r);
    if (r.acao === ACOES[0]) al.forEach(function (id) { S.st[id] = 'Desativado' });
    r.res = r.acao === ACOES[0] ? (al.length ? 'Desativou ' + al.length + (al.length === 1 ? ' conjunto de anúncios' : ' conjuntos de anúncios') : 'Nenhum conjunto atendeu às condições') : (al.length ? 'Notificou sobre ' + al.length + (al.length === 1 ? ' conjunto' : ' conjuntos') : 'Nenhum conjunto atendeu às condições');
    r.ultima = 'agora há pouco'; return al;
  }
  function novoRascunho(aplicaIdx, fixo) { return { id: '', nome: '', aplica: APLICA[aplicaIdx || 0], fixo: fixo || null, acao: '', pct: '10', conds: [{ m: 'Gasto', op: 'é maior que', v: '' }], intervalo: '37 meses (máximo)', prog: 'Continuamente', notif: true, editando: '', tentou: false } }

  /* ---------- páginas ---------- */
  function nav(atual) {
    return '<nav class="ss-nav"><button class="ss-it' + (atual === 'lista' ? ' on' : '') + '" data-ir="lista" data-t="nav-regras">⚙️ Regras automatizadas</button><button class="ss-it' + (atual === 'campanhas' ? ' on' : '') + '" data-ir="campanhas" data-t="nav-campanhas">📣 Campanhas</button><button class="ss-it" disabled>🕒 Atividade</button><button class="ss-it" disabled>☰ Todas as ferramentas</button></nav>';
  }
  function pagina(atual, titulo, corpo, topo) {
    return casca('<div class="ss">' + nav(atual) + '<main class="ss-main"><div class="ss-topo"><div><h1>' + titulo + '</h1><p class="ss-sub">Lojinha da Marina Aula (123456789)</p></div><div class="ss-bt">' + (topo || '') + '</div></div>' + corpo + '</main></div>' + modalDialogo());
  }
  function lista() {
    var linhas = S.rules.length ? S.rules.map(function (r) {
      return '<tr data-t="regra-' + r.id + '"><td><b>' + esc(r.nome) + '</b></td><td><label class="rg-sw"><input type="checkbox" data-liga="' + r.id + '"' + (r.ativa ? ' checked' : '') + '/> ' + (r.ativa ? 'Ativa' : 'Desativada') + '</label></td><td>' + r.id.toUpperCase() + '</td><td>' + esc(r.aplica) + '</td><td>' + esc(r.acao) + (r.acao.indexOf('orçamento') > 0 ? ' ' + esc(r.pct) + '%' : '') + '<br><small>' + r.conds.map(function (c) { return esc(c.m) + ' ' + esc(c.op) + ' ' + esc(c.v) }).join(' e ') + ' · ' + esc(r.intervalo) + '</small></td><td data-t="res-' + r.id + '">' + (r.res ? esc(r.res) + '<br><small>' + esc(r.ultima) + '</small>' : '—') + '</td><td>' + esc(r.prog) + '</td><td>Você</td><td class="rg-ac"><button class="btn sec" data-exec="' + r.id + '" data-t="btn-exec">Executar agora (simulador)</button> <button class="btn sec" data-edita="' + r.id + '" data-t="btn-edita">Editar</button> <button class="btn sec" data-exclui="' + r.id + '" data-t="btn-exclui">Excluir</button></td></tr>';
    }).join('') : '';
    var vazio = S.rules.length ? '' : '<div class="rg-vazio" data-t="vazio"><div class="ilus">🧰</div><b>Nenhuma regra automatizada</b><p>Não há regras automatizadas para esta conta. Você pode criar uma regra selecionando as campanhas, conjuntos de anúncios ou anúncios aos quais deseja aplicá-la no Gerenciador de Anúncios.</p></div>';
    return pagina('lista', 'Regras automatizadas', '<div class="ga-aviso"><b>As regras para recomendações agora se chamam ajustes automáticos</b><br><small>Gerencie os ajustes automáticos que você já configurou ou crie novos.</small><p><button class="btn sec" disabled>Ver ajustes automáticos</button></p></div>' +
      '<p><button class="btn" data-acao="nova" data-t="btn-criar-regra">＋ Criar regra</button> <button class="btn sec" disabled>Personalizar colunas</button></p>' +
      '<div class="rg-tab"><table class="cm-tab"><thead><tr><th>Nome da regra</th><th>Status</th><th>Número de identificação</th><th>Aplicada a</th><th>Ação e condição</th><th>Resultados da regra</th><th>Quando a regra é executada</th><th>Criada por</th><th>Ações</th></tr></thead><tbody>' + linhas + '</tbody></table>' + vazio + '</div>' + conferido());
  }
  function campanhas() {
    var linhas = Object.keys(DADOS).map(function (id) { var dd = DADOS[id].d['Últimos 7 dias']; return '<tr><td><input type="checkbox" data-sel="' + id + '"' + (S.sel[id] ? ' checked' : '') + ' data-t="chk-' + id + '"/></td><td><b>' + DADOS[id].nome + '</b></td><td><span class="ga-tag ' + (S.st[id] === 'Ativo' ? 'vd' : 'am') + '">' + (S.st[id] === 'Ativo' ? '● Ativo' : '○ Desativado') + '</span>' + (S.st[id] === 'Ativo' ? '' : ' <button class="btn sec" data-reativa="' + id + '" data-t="btn-reativa-' + id + '">Ativar</button>') + '</td><td>' + fmt(dd[0]) + '</td><td>' + dd[1] + '</td></tr>' }).join('');
    var n = Object.keys(S.sel).filter(function (k) { return S.sel[k] }).length;
    return pagina('campanhas', 'Conjuntos de anúncios', '<div class="ga-barra"><button class="btn sec" data-acao="menu-mais" data-t="btn-mais">Mais ▾</button>' + (M ? '<div class="fd-op"><button data-acao="nova-sel" data-t="op-nova-regra"' + (n ? '' : ' disabled') + '>Criar nova regra</button><button disabled>Criar regra a partir do modelo</button></div>' : '') + '<span class="miudo">' + (n ? n + ' selecionado(s)' : 'Marque a caixa de um ou mais conjuntos para aplicar uma regra a eles.') + '</span></div>' +
      '<table class="cm-tab"><thead><tr><th></th><th>Conjunto de anúncios</th><th>Veiculação</th><th>Valor gasto (7 dias)</th><th>Resultados (7 dias)</th></tr></thead><tbody>' + linhas + '</tbody></table><p class="miudo">Os conjuntos e os números são inventados para o treino.</p>' + conferido('O menu Mais › Criar nova regra vem da Central de Ajuda da Meta; esta tabela do simulador é simplificada (a conferir).'));
  }

  /* ---------- janela Criar/Editar regra ---------- */
  function sel(id, opts, atual, t, dis) { return '<select class="ga-in" id="' + id + '" data-t="' + t + '"' + (dis ? ' disabled' : '') + '>' + opts.map(function (o) { return '<option value="' + o + '"' + (o === atual ? ' selected' : '') + '>' + o + '</option>' }).join('') + '</select>' }
  function modalDialogo() {
    if (!D) return '';
    var ed = !!D.editando, al = D.acao ? alvos({ aplica: D.aplica, fixo: D.fixo, acao: D.acao, conds: D.conds, intervalo: D.intervalo }) : [];
    var conds = D.conds.map(function (c, i) { return '<div class="rg-cond" data-t="cond-' + i + '">' + sel('cM' + i, METRICAS, c.m, 'cond-metrica-' + i) + sel('cO' + i, OPS, c.op, 'cond-op-' + i) + '<input class="ga-in rg-v" id="cV' + i + '" value="' + esc(c.v) + '" placeholder="valor" data-t="cond-valor-' + i + '"/>' + (D.conds.length > 1 ? '<button class="btn sec" data-rmcond="' + i + '">✕</button>' : '') + '</div>' }).join('');
    var erro = D.tentou ? (!D.nome.trim() ? 'Dê um nome à regra.' : !D.acao ? 'Selecione uma ação.' : D.conds.some(function (c) { return String(c.v).trim() === '' || isNaN(parseFloat(String(c.v).replace(',', '.'))) }) ? 'Preencha o valor de cada condição com um número.' : '') : '';
    var prev = D.acao ? '<div class="ga-aviso" data-t="previa-regra"><b>Quem seria atingido hoje (simulador):</b> ' + (al.length ? al.map(function (id) { return DADOS[id].nome }).join(' · ') : 'ninguém') + '<br><small>Esta prévia é só do simulador, para você enxergar o efeito. A tela real não mostra isso (a conferir).</small></div>' : '';
    return '<div class="ga-fundo"><div class="ga-jan fd-jan larga" data-t="jan-regra"><h2>' + (ed ? 'Editar regra' : 'Crie uma regra personalizada') + '</h2><p class="miudo">Atualize automaticamente as configurações de campanhas, conjuntos de anúncios ou anúncios específicos criando uma regra.</p>' +
      '<p><b>Nome da regra</b></p><input class="ga-in' + (erro && !D.nome.trim() ? ' err' : '') + '" id="rNome" value="' + esc(D.nome) + '" data-t="regra-nome"/>' +
      '<p><b>Aplicar regra a</b></p>' + sel('rAplica', D.fixo ? APLICA : APLICA.slice(0, 2), D.aplica, 'regra-aplica', ed) + '<p class="miudo">' + (D.aplica === APLICA[0] ? 'Sua regra será aplicada a todos os conjuntos de anúncios ativos no momento da execução da regra.' : D.aplica === APLICA[1] ? 'Sua regra será aplicada a todas as campanhas ativas no momento da execução da regra (a conferir).' : 'Sua regra será aplicada só aos conjuntos que você marcou na tabela.') + '</p>' +
      '<p><b>Ação</b></p><select class="ga-in' + (erro && !D.acao ? ' err' : '') + '" id="rAcao" data-t="regra-acao"' + (ed ? ' disabled' : '') + '><option value="">Selecione uma opção</option>' + ACOES.map(function (o) { return '<option value="' + o + '"' + (o === D.acao ? ' selected' : '') + '>' + o + '</option>' }).join('') + '</select>' +
      '<p class="miudo" data-t="regra-listas">Na tela real (25/10/2026) a lista tem 12 ações (também Ativar conjuntos de anúncios, orçamento total e lance) e as métricas vêm em grupos: Mais comuns, Configurações, Tempo, Conversões no site (Pixel da Meta), Eventos do app, Conversões offline e Outro. O treino usa só as principais.</p>' +
      (D.acao.indexOf('orçamento') > 0 ? ' <input class="ga-in rg-v" id="rPct" value="' + esc(D.pct) + '" data-t="regra-pct"/> %' : '') + (ed ? '<p class="miudo">Ao editar, não dá para mudar onde a regra se aplica nem a ação: para isso, exclua a regra e crie outra.</p>' : '') +
      '<p><b>Condições</b></p><p class="miudo">Há correspondência em todos os itens a seguir. Algumas métricas de anúncio podem atrasar e oscilariam por horas. Você pode adicionar alguns buffers às suas condições baseadas em métricas para ajudar a evitar falsos positivos.</p>' + conds + '<button class="btn sec" data-acao="add-cond" data-t="btn-add-cond">＋ Adicionar condição</button>' +
      '<p><b>Intervalo de tempo</b></p>' + sel('rInt', INTERVALOS, D.intervalo, 'regra-intervalo') + '<p class="miudo">O intervalo diz a quantos dias de dados a regra se aplica.</p>' +
      '<p><b>Programação</b></p><div class="rg-prog" data-t="regra-prog">' + ['Continuamente', 'Diariamente', 'Personalizado'].map(function (p) { return '<label class="ga-lin' + (D.prog === p ? ' on' : '') + '"><input type="radio" name="rProg" value="' + p + '"' + (D.prog === p ? ' checked' : '') + '/><span><b>' + p + '</b>' + (p === 'Continuamente' ? '<small>A regra é verificada continuamente, normalmente entre 30 e 60 minutos.</small>' : '') + '</span></label>' }).join('') + '</div>' +
      '<p><b>Notificação</b></p><p class="miudo">No Facebook · Assinante: você</p>' + prev + (erro ? '<p class="miudo err" data-t="erro-regra">' + erro + '</p>' : '') +
      '<div class="rodape-jan"><button class="btn sec" data-acao="cancela" data-t="regra-cancelar">Cancelar</button><button class="btn" data-acao="salva" data-t="regra-criar">' + (ed ? 'Salvar' : 'Criar') + '</button></div></div></div>';
  }

  var TELAS = { lista: lista, campanhas: campanhas };
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-exec]'))) { var r = S.rules.filter(function (x) { return x.id === c.getAttribute('data-exec') })[0]; executa(r); grava(); render(); return }
    if ((c = t.closest('[data-edita]'))) { var r2 = S.rules.filter(function (x) { return x.id === c.getAttribute('data-edita') })[0]; D = JSON.parse(JSON.stringify(r2)); D.editando = r2.id; D.pct = D.pct || '10'; D.tentou = false; grava(); render(); return }
    if ((c = t.closest('[data-exclui]'))) { S.rules = S.rules.filter(function (x) { return x.id !== c.getAttribute('data-exclui') }); grava(); render(); return }
    if ((c = t.closest('[data-reativa]'))) { S.st[c.getAttribute('data-reativa')] = 'Ativo'; grava(); render(); return }
    if ((c = t.closest('[data-rmcond]'))) { D.conds.splice(+c.getAttribute('data-rmcond'), 1); render(); return }
    var a = t.closest('[data-ir],[data-acao]'); if (!a || a.disabled) return;
    if (a.hasAttribute('data-ir')) { M = false; vai(a.getAttribute('data-ir')); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'nova') { D = novoRascunho(0); }
    else if (ac === 'menu-mais') { M = !M }
    else if (ac === 'nova-sel') { M = false; var fx = Object.keys(S.sel).filter(function (k) { return S.sel[k] }); D = novoRascunho(2, fx); }
    else if (ac === 'add-cond') { D.conds.push({ m: 'Gasto', op: 'é maior que', v: '' }) }
    else if (ac === 'cancela') { D = null }
    else if (ac === 'salva') {
      D.tentou = true; var bad = !D.nome.trim() || !D.acao || D.conds.some(function (cc) { return String(cc.v).trim() === '' || isNaN(parseFloat(String(cc.v).replace(',', '.'))) });
      if (!bad) {
        if (D.editando) { var rr = S.rules.filter(function (x) { return x.id === D.editando })[0]; rr.nome = D.nome; rr.conds = D.conds; rr.intervalo = D.intervalo; rr.prog = D.prog; rr.pct = D.pct }
        else { S.seq++; S.rules.push({ id: 'r' + S.seq, nome: D.nome.trim(), aplica: D.aplica, fixo: D.fixo, acao: D.acao, pct: D.pct, conds: D.conds, intervalo: D.intervalo, prog: D.prog, notif: true, ativa: true, res: '', ultima: '' }) }
        D = null; S.sel = {}; vai('lista');
      }
    } else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.getAttribute && t.getAttribute('data-liga')) { S.rules.forEach(function (r) { if (r.id === t.getAttribute('data-liga')) r.ativa = t.checked }) }
    else if (t.getAttribute && t.getAttribute('data-sel')) { S.sel[t.getAttribute('data-sel')] = t.checked }
    else if (D && t.id === 'rAplica') D.aplica = t.value;
    else if (D && t.id === 'rAcao') D.acao = t.value;
    else if (D && t.id === 'rInt') D.intervalo = t.value;
    else if (D && t.name === 'rProg') D.prog = t.value;
    else if (D && /^cM\d+$/.test(t.id)) D.conds[+t.id.slice(2)].m = t.value;
    else if (D && /^cO\d+$/.test(t.id)) D.conds[+t.id.slice(2)].op = t.value;
    else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target; if (!D) return;
    if (t.id === 'rNome') D.nome = t.value; else if (t.id === 'rPct') D.pct = t.value;
    else if (/^cV\d+$/.test(t.id)) { D.conds[+t.id.slice(2)].v = t.value; var p = $('[data-t=previa-regra]'); if (p) { var tmp = document.createElement('div'); tmp.innerHTML = modalDialogo(); var n = $('[data-t=previa-regra]', tmp); if (n) p.innerHTML = n.innerHTML } }
    else return;
    grava();
  });
  window.addEventListener('hashchange', render);
  function render() {
    var r = rota(); if (!TELAS[r]) r = 'lista';
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = TELAS[r]();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simRg = { S: S, D: D };
  }
  window.SIMRG = { vai: vai, estado: function () { return { S: S, D: D } }, zera: function () { S = inicial(); D = null; grava() }, exemplo: function () { S = inicial(); S.rules = [RULE_EX()]; S.seq = 1; D = null; grava() },
    abre: function (o) { D = novoRascunho(0); for (var k in o) D[k] = o[k]; grava() }, problema: function () { S = inicial(); var rp = RULE_EX(); rp.nome = 'Pausar conjunto caro'; rp.conds = [{ m: 'Gasto', op: 'é maior que', v: '20' }]; rp.intervalo = '37 meses (máximo)'; rp.prog = 'Continuamente'; rp.res = 'Desativou 2 conjuntos de anúncios'; rp.ultima = 'agora há pouco'; S.rules = [rp]; S.seq = 1; S.st.a = 'Desativado'; S.st.b = 'Desativado'; D = null; grava() },
    sel: function (o) { S.sel = o; grava() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function rg() { return window.__simRg || { S: S, D: D } }
  TOURS['criar-regra'] = [
    { alvo: '[data-t=vazio]', garante: function () { SIMRG.zera(); location.hash = 'lista'; render() }, tit: T('Regras automatizadas', 'Reglas automáticas'), txt: T('Esta é a página Regras automatizadas, em Todas as ferramentas. Ainda não há nenhuma regra. Uma regra faz mudanças sozinha, ou avisa você, quando campanhas, conjuntos de anúncios ou anúncios atendem às condições. Clique em Próximo.', 'Esta es la página Reglas automáticas, en Más herramientas. Todavía no hay ninguna regla. Una regla hace cambios sola, o te avisa, cuando campañas, conjuntos de anuncios o anuncios cumplen las condiciones. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-criar-regra]', clique: true, garante: function () { SIMRG.zera(); location.hash = 'lista'; render() }, tit: T('Criar regra', 'Crear regla'), txt: T('Clique em Criar regra.', 'Haz clic en Crear regla.') },
    { alvo: '[data-t=regra-nome]', garante: function () { SIMRG.zera(); SIMRG.abre({}); location.hash = 'lista'; render() }, cond: function () { return rg().D && rg().D.nome.trim().length > 2 }, tit: T('Nome da regra', 'Nombre de la regla'), txt: T('Dê um nome que explique o que a regra faz, por exemplo: “Avisar gasto sem resultado”. Depois clique em Próximo.', 'Dale un nombre que explique qué hace la regla, por ejemplo: “Avisar gasto sin resultado”. Después haz clic en Siguiente.'), dica: T('Digite pelo menos três letras.', 'Escribe al menos tres letras.') },
    { alvo: '[data-t=regra-aplica]', garante: function () { SIMRG.abre({ nome: rg().D && rg().D.nome || 'Avisar gasto sem resultado' }); location.hash = 'lista'; render() }, tit: T('Aplicar regra a', 'Aplicar regla a'), txt: T('Aqui você escolhe onde a regra vale. O padrão é “Todos os conjuntos de anúncios ativos”: a regra olha todos os conjuntos que estiverem ativos no momento da execução. Deixe assim. Clique em Próximo.', 'Aquí eliges dónde vale la regla. El valor predeterminado es “Todos los conjuntos de anuncios activos”: la regla mira todos los conjuntos que estén activos en el momento de la ejecución. Déjalo así. Haz clic en Siguiente.') },
    { alvo: '[data-t=regra-acao]', garante: function () { SIMRG.abre({ nome: rg().D && rg().D.nome || 'Avisar gasto sem resultado' }); location.hash = 'lista'; render() }, cond: function () { return rg().D && rg().D.acao === 'Somente enviar notificação' },
      bloqueia: function (t) { return false }, tit: T('A ação', 'La acción'), txt: T('A ação é o que a regra faz quando a condição acontece. Para a primeira regra, o mais seguro é só avisar: escolha “Somente enviar notificação”. Assim nada é desativado sem você ver.', 'La acción es lo que hace la regla cuando se cumple la condición. Para la primera regla, lo más seguro es solo avisar: elige “Solo enviar notificaciones”. Así nada se desactiva sin que lo veas.'), dica: T('Abra a lista e escolha “Somente enviar notificação”.', 'Abre la lista y elige “Solo enviar notificaciones”.') },
    { alvo: '[data-t=cond-0]', garante: function () { SIMRG.abre({ nome: rg().D && rg().D.nome || 'Avisar gasto sem resultado', acao: 'Somente enviar notificação' }); location.hash = 'lista'; render() }, cond: function () { var c = rg().D && rg().D.conds[0]; return !!c && c.m === 'Gasto' && parseFloat(String(c.v).replace(',', '.')) > 0 },
      tit: T('A condição', 'La condición'), txt: T('A condição é o “se”. Deixe “Gasto é maior que” e digite 20 no valor. Na tela real, “há correspondência em todos os itens”: todas as condições precisam ser verdadeiras ao mesmo tempo. Depois clique em Próximo.', 'La condición es el “si”. Deja “Gasto es mayor que” y escribe 20 en el valor. En la pantalla real, “hay coincidencia en todos los elementos”: todas las condiciones deben cumplirse al mismo tiempo. Después haz clic en Siguiente.'), dica: T('Digite 20 no campo de valor.', 'Escribe 20 en el campo de valor.') },
    { alvo: '[data-t=regra-intervalo]', garante: function () { SIMRG.abre({ nome: rg().D && rg().D.nome || 'Avisar gasto sem resultado', acao: 'Somente enviar notificação' }); if (!rg().D.conds[0].v) rg().D.conds[0].v = '20'; location.hash = 'lista'; render() }, cond: function () { return rg().D && rg().D.intervalo !== '37 meses (máximo)' },
      tit: T('O intervalo de tempo', 'El intervalo de tiempo'), txt: T('Cuidado: o padrão é “37 meses (máximo)”. Isso quer dizer que a regra olharia o gasto de toda a vida do conjunto! Para uma checagem do dia a dia, escolha “Últimos 7 dias”.', 'Cuidado: el valor predeterminado es “37 meses (máximo)”. ¡Eso quiere decir que la regla miraría el gasto de toda la vida del conjunto! Para una revisión del día a día, elige “Últimos 7 días”.'), dica: T('Troque para “Últimos 7 dias”.', 'Cambia a “Últimos 7 días”.') },
    { alvo: '[data-t=regra-prog]', garante: function () { SIMRG.abre({ nome: rg().D && rg().D.nome || 'Avisar gasto sem resultado', acao: 'Somente enviar notificação', intervalo: 'Últimos 7 dias' }); if (!rg().D.conds[0].v) rg().D.conds[0].v = '20'; location.hash = 'lista'; render() }, tit: T('Programação', 'Programación'), txt: T('A programação diz de quanto em quanto tempo a regra confere: Continuamente (normalmente a cada 30 a 60 minutos), Diariamente ou Personalizado. Para um aviso, Diariamente basta. Escolha Diariamente e clique em Próximo.', 'La programación dice cada cuánto revisa la regla: Continuamente (normalmente cada 30 a 60 minutos), Diariamente o Personalizado. Para un aviso, Diariamente basta. Elige Diariamente y haz clic en Siguiente.') },
    { alvo: '[data-t=regra-criar]', clique: true, garante: function () { SIMRG.abre({ nome: rg().D && rg().D.nome || 'Avisar gasto sem resultado', acao: 'Somente enviar notificação', intervalo: 'Últimos 7 dias', prog: 'Diariamente' }); if (!rg().D.conds[0].v) rg().D.conds[0].v = '20'; location.hash = 'lista'; render() }, tit: T('Criar', 'Crear'), txt: T('Tudo preenchido. Clique em Criar.', 'Todo completo. Haz clic en Crear.') },
    { alvo: '[data-t=regra-r1]', fim: true, semVolta: true, garante: function () { if (!rg().S.rules.length) { SIMRG.exemplo() } location.hash = 'lista'; render() }, tit: T('Regra ativa! 🎉', '¡Regla activa! 🎉'), txt: T('A regra aparece na tabela, com o status Ativa. A Central de Ajuda diz: “Sua regra agora está ativa. Rastreie a atividade em Regras automatizadas.” Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'La regla aparece en la tabla, con el estado Activa. El Centro de ayuda dice: “Tu regla ahora está activa. Haz un seguimiento de la actividad en Reglas automáticas.” Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['evitar-falso-positivo'] = [
    { alvo: '[data-t=jan-regra]', garante: function () { SIMRG.zera(); SIMRG.abre({ nome: 'Desativar conjunto caro', acao: 'Desativar conjuntos de anúncios' }); rg().D.conds[0].v = '20'; location.hash = 'lista'; render() }, tit: T('Uma regra que desativa', 'Una regla que desactiva'), txt: T('A Marina montou uma regra para desativar conjuntos que gastam mais de R$ 20. Parece razoável, mas vamos ver o que ela atingiria. Olhe a caixa “Quem seria atingido hoje” (essa caixa é só do simulador). Clique em Próximo.', 'Marina armó una regla para desactivar conjuntos que gastan más de R$ 20. Parece razonable, pero vamos a ver qué alcanzaría. Mira la caja “Quién sería alcanzado hoy” (esa caja es solo del simulador). Haz clic en Siguiente.') },
    { alvo: '[data-t=previa-regra]', garante: function () { SIMRG.zera(); SIMRG.abre({ nome: 'Desativar conjunto caro', acao: 'Desativar conjuntos de anúncios' }); rg().D.conds[0].v = '20'; location.hash = 'lista'; render() }, tit: T('O susto', 'El susto'), txt: T('A regra pegaria a “Caneca azul”, que gastou muito mas trouxe 25 resultados! É que o intervalo está em “37 meses (máximo)”: ela soma o gasto de toda a vida do conjunto. Isso é um falso positivo: a regra pega quem não devia. Clique em Próximo.', '¡La regla alcanzaría la “Caneca azul”, que gastó mucho pero trajo 25 resultados! Es que el intervalo está en “37 meses (máximo)”: suma el gasto de toda la vida del conjunto. Eso es un falso positivo: la regla alcanza a quien no debía. Haz clic en Siguiente.') },
    { alvo: '[data-t=regra-intervalo]', garante: function () { SIMRG.zera(); SIMRG.abre({ nome: 'Desativar conjunto caro', acao: 'Desativar conjuntos de anúncios' }); rg().D.conds[0].v = '20'; location.hash = 'lista'; render() }, cond: function () { return rg().D && rg().D.intervalo === 'Últimos 7 dias' }, tit: T('Encurtar o intervalo', 'Acortar el intervalo'), txt: T('Primeira correção: olhe só a última semana. Escolha “Últimos 7 dias”.', 'Primera corrección: mira solo la última semana. Elige “Últimos 7 días”.'), dica: T('Escolha “Últimos 7 dias”.', 'Elige “Últimos 7 días”.') },
    { alvo: '[data-t=btn-add-cond]', clique: true, garante: function () { SIMRG.zera(); SIMRG.abre({ nome: 'Desativar conjunto caro', acao: 'Desativar conjuntos de anúncios', intervalo: 'Últimos 7 dias' }); rg().D.conds[0].v = '20'; location.hash = 'lista'; render() }, tit: T('Mais uma condição', 'Una condición más'), txt: T('Segunda correção: gastar muito só é problema se não vier resultado. Clique em Adicionar condição.', 'Segunda corrección: gastar mucho solo es un problema si no llega resultado. Haz clic en Agregar condición.') },
    { alvo: '[data-t=cond-1]', garante: function () { SIMRG.zera(); SIMRG.abre({ nome: 'Desativar conjunto caro', acao: 'Desativar conjuntos de anúncios', intervalo: 'Últimos 7 dias' }); rg().D.conds[0].v = '20'; rg().D.conds.push({ m: 'Gasto', op: 'é maior que', v: '' }); location.hash = 'lista'; render() }, cond: function () { var c = rg().D && rg().D.conds[1]; return !!c && c.m === 'Resultados' && c.op === 'é igual a' && String(c.v).trim() === '0' },
      tit: T('Resultados é igual a 0', 'Resultados es igual a 0'), txt: T('Na segunda linha escolha a métrica “Resultados”, o operador “é igual a” e o valor 0. Agora a regra só pega quem gastou mais de R$ 20 E não teve nenhum resultado.', 'En la segunda línea elige la métrica “Resultados”, el operador “es igual a” y el valor 0. Ahora la regla solo alcanza a quien gastó más de R$ 20 Y no tuvo ningún resultado.'), dica: T('Resultados · é igual a · 0.', 'Resultados · es igual a · 0.') },
    { alvo: '[data-t=previa-regra]', garante: function () { SIMRG.zera(); SIMRG.abre({ nome: 'Desativar conjunto caro', acao: 'Desativar conjuntos de anúncios', intervalo: 'Últimos 7 dias' }); rg().D.conds = [{ m: 'Gasto', op: 'é maior que', v: '20' }, { m: 'Resultados', op: 'é igual a', v: '0' }]; location.hash = 'lista'; render() }, tit: T('Agora sim', 'Ahora sí'), txt: T('Só a “Camiseta Montanha” (R$ 31,50 em 7 dias e nenhum resultado) seria atingida. A “Caneca azul” está a salvo. Clique em Próximo.', 'Solo la “Camiseta Montanha” (R$ 31,50 en 7 días y ningún resultado) sería alcanzada. La “Caneca azul” está a salvo. Haz clic en Siguiente.') },
    { alvo: '[data-t=regra-criar]', clique: true, fim: false, garante: function () { SIMRG.zera(); SIMRG.abre({ nome: 'Desativar conjunto caro', acao: 'Desativar conjuntos de anúncios', intervalo: 'Últimos 7 dias' }); rg().D.conds = [{ m: 'Gasto', op: 'é maior que', v: '20' }, { m: 'Resultados', op: 'é igual a', v: '0' }]; location.hash = 'lista'; render() }, tit: T('Criar', 'Crear'), txt: T('Clique em Criar.', 'Haz clic en Crear.') },
    { alvo: '[data-t=regra-r1]', fim: true, semVolta: true, garante: function () { if (!rg().S.rules.length) { SIMRG.exemplo() } location.hash = 'lista'; render() }, tit: T('Regra segura! 🎉', '¡Regla segura! 🎉'), txt: T('Lição: ao desativar algo automaticamente, use um intervalo curto e mais de uma condição, para evitar falsos positivos. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Lección: al desactivar algo automáticamente, usa un intervalo corto y más de una condición, para evitar falsos positivos. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['acompanhar-editar'] = [
    { alvo: '[data-t=regra-r1]', garante: function () { SIMRG.exemplo(); location.hash = 'lista'; render() }, tit: T('Sua regra na tabela', 'Tu regla en la tabla'), txt: T('Cada regra é uma linha: nome, status, onde se aplica, a ação e a condição, os resultados da regra, quando ela é executada e quem criou. Clique em Próximo.', 'Cada regla es una fila: nombre, estado, dónde se aplica, la acción y la condición, los resultados de la regla, cuándo se ejecuta y quién la creó. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-exec]', clique: true, garante: function () { SIMRG.exemplo(); location.hash = 'lista'; render() }, tit: T('Ver a regra trabalhando', 'Ver la regla trabajando'), txt: T('Na vida real a regra roda sozinha, na programação escolhida. No simulador, clique em “Executar agora” para ver o efeito.', 'En la vida real la regla corre sola, en la programación elegida. En el simulador, haz clic en “Ejecutar ahora” para ver el efecto.') },
    { alvo: '[data-t=res-r1]', garante: function () { SIMRG.exemplo(); rg().S.rules[0].res = 'Desativou 1 conjunto de anúncios'; rg().S.rules[0].ultima = 'agora há pouco'; rg().S.st.b = 'Desativado'; location.hash = 'lista'; render() }, tit: T('Resultados da regra', 'Resultados de la regla'), txt: T('A coluna Resultados da regra conta o que a regra fez: aqui, desativou 1 conjunto. É o primeiro lugar para olhar quando alguém pergunta “por que meu anúncio parou?”. Clique em Próximo.', 'La columna Resultados de la regla cuenta lo que hizo la regla: aquí, desactivó 1 conjunto. Es el primer lugar para mirar cuando alguien pregunta “¿por qué se detuvo mi anuncio?”. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-edita]', clique: true, garante: function () { SIMRG.exemplo(); location.hash = 'lista'; render() }, tit: T('Editar', 'Editar'), txt: T('Clique em Editar.', 'Haz clic en Editar.') },
    { alvo: '[data-t=jan-regra]', garante: function () { SIMRG.exemplo(); var r = rg().S.rules[0]; SIMRG.abre({}); var d = rg().D; for (var k in r) d[k] = JSON.parse(JSON.stringify(r[k])); d.editando = 'r1'; d.pct = '10'; location.hash = 'lista'; render() }, tit: T('O que dá e o que não dá para mudar', 'Lo que se puede y lo que no se puede cambiar'), txt: T('Repare: “Aplicar regra a” e “Ação” ficam apagados. Pela Central de Ajuda, ao editar não dá para mudar onde a regra se aplica nem a ação: para isso, exclua e crie outra. Nome, condições, intervalo e programação dá para mudar. Clique em Próximo.', 'Fíjate: “Aplicar regla a” y “Acción” quedan apagados. Según el Centro de ayuda, al editar no se puede cambiar dónde se aplica la regla ni la acción: para eso, elimínala y crea otra. Nombre, condiciones, intervalo y programación sí se pueden cambiar. Haz clic en Siguiente.') },
    { alvo: '[data-t=regra-cancelar]', clique: true, garante: function () { SIMRG.exemplo(); var r = rg().S.rules[0]; SIMRG.abre({}); var d = rg().D; for (var k in r) d[k] = JSON.parse(JSON.stringify(r[k])); d.editando = 'r1'; location.hash = 'lista'; render() }, tit: T('Cancelar', 'Cancelar'), txt: T('Não vamos mudar nada agora. Clique em Cancelar.', 'No vamos a cambiar nada ahora. Haz clic en Cancelar.') },
    { alvo: '[data-t=btn-exclui]', fim: true, semVolta: true, garante: function () { SIMRG.exemplo(); location.hash = 'lista'; render() }, tit: T('Excluir é para recomeçar! 🎉', '¡Eliminar es para recomenzar! 🎉'), txt: T('O botão Excluir apaga a regra; ele serve para quando é preciso mudar o que não se edita (onde aplica ou a ação). O interruptor de Status liga e desliga a regra sem apagar. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'El botón Eliminar borra la regla; sirve para cuando hace falta cambiar lo que no se edita (dónde se aplica o la acción). El interruptor de Estado activa y desactiva la regla sin borrarla. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['regra-desativou-tudo'] = [
    { alvo: '[data-t=nav-campanhas]', clique: true, garante: function () { SIMRG.problema(); location.hash = 'lista'; render() }, tit: T('“Meus anúncios pararam!”', '“¡Mis anuncios se detuvieron!”'), txt: T('A Marina diz que dois conjuntos de anúncios pararam sozinhos. Ninguém mexeu neles. Primeiro, vamos ver o estado deles. Clique em Campanhas.', 'Marina dice que dos conjuntos de anuncios se detuvieron solos. Nadie los tocó. Primero, veamos su estado. Haz clic en Campañas.') },
    { alvo: '[data-t=btn-reativa-a]', garante: function () { SIMRG.problema(); location.hash = 'campanhas'; render() }, tit: T('Dois desativados', 'Dos desactivados'), txt: T('A “Caneca azul” e a “Camiseta Montanha” estão Desativadas. Quando algo para sem ninguém ter mexido, uma regra automatizada é suspeita. Clique em Próximo.', 'La “Caneca azul” y la “Camiseta Montanha” están Desactivadas. Cuando algo se detiene sin que nadie lo haya tocado, una regla automática es sospechosa. Haz clic en Siguiente.') },
    { alvo: '[data-t=nav-regras]', clique: true, garante: function () { SIMRG.problema(); location.hash = 'campanhas'; render() }, tit: T('Olhar as regras', 'Mirar las reglas'), txt: T('Vá à página Regras automatizadas e veja se há alguma regra na conta. Clique em Regras automatizadas.', 'Ve a la página Reglas automáticas y mira si hay alguna regla en la cuenta. Haz clic en Reglas automáticas.') },
    { alvo: '[data-t=res-r1]', garante: function () { SIMRG.problema(); location.hash = 'lista'; render() }, tit: T('Achou o culpado', 'Encontró al culpable'), txt: T('Há uma regra, “Pausar conjunto caro”, e a coluna Resultados da regra diz: “Desativou 2 conjuntos de anúncios”. Foi ela. Clique em Próximo.', 'Hay una regla, “Pausar conjunto caro”, y la columna Resultados de la regla dice: “Desactivó 2 conjuntos de anuncios”. Fue ella. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-edita]', clique: true, garante: function () { SIMRG.problema(); location.hash = 'lista'; render() }, tit: T('Entender a regra', 'Entender la regla'), txt: T('A condição é só “Gasto é maior que 20” e o intervalo é “37 meses (máximo)”: pega todo conjunto que já gastou mais de R$ 20 na vida, mesmo os que vendem bem. Clique em Editar para corrigir.', 'La condición es solo “Gasto es mayor que 20” y el intervalo es “37 meses (máximo)”: alcanza a todo conjunto que alguna vez gastó más de R$ 20, incluso los que venden bien. Haz clic en Editar para corregir.') },
    { alvo: '[data-t=regra-intervalo]', garante: function () { SIMRG.problema(); var r = rg().S.rules[0]; SIMRG.abre({}); var d = rg().D; for (var k in r) d[k] = JSON.parse(JSON.stringify(r[k])); d.editando = 'r1'; d.pct = '10'; location.hash = 'lista'; render() }, cond: function () { return rg().D && rg().D.intervalo === 'Últimos 7 dias' }, tit: T('Encurtar o intervalo', 'Acortar el intervalo'), txt: T('Troque o intervalo para “Últimos 7 dias”.', 'Cambia el intervalo a “Últimos 7 días”.'), dica: T('Escolha “Últimos 7 dias”.', 'Elige “Últimos 7 días”.') },
    { alvo: '[data-t=btn-add-cond]', clique: true, garante: function () { SIMRG.problema(); var r = rg().S.rules[0]; SIMRG.abre({}); var d = rg().D; for (var k in r) d[k] = JSON.parse(JSON.stringify(r[k])); d.editando = 'r1'; d.intervalo = 'Últimos 7 dias'; d.pct = '10'; location.hash = 'lista'; render() }, tit: T('Adicionar a condição de resultado', 'Agregar la condición de resultado'), txt: T('Clique em Adicionar condição.', 'Haz clic en Agregar condición.') },
    { alvo: '[data-t=cond-1]', garante: function () { SIMRG.problema(); var r = rg().S.rules[0]; SIMRG.abre({}); var d = rg().D; for (var k in r) d[k] = JSON.parse(JSON.stringify(r[k])); d.editando = 'r1'; d.intervalo = 'Últimos 7 dias'; d.conds.push({ m: 'Gasto', op: 'é maior que', v: '' }); d.pct = '10'; location.hash = 'lista'; render() }, cond: function () { var c = rg().D && rg().D.conds[1]; return !!c && c.m === 'Resultados' && c.op === 'é igual a' && String(c.v).trim() === '0' }, tit: T('Só quem não tem resultado', 'Solo quien no tiene resultado'), txt: T('Configure: Resultados · é igual a · 0.', 'Configura: Resultados · es igual a · 0.'), dica: T('Resultados · é igual a · 0.', 'Resultados · es igual a · 0.') },
    { alvo: '[data-t=regra-criar]', clique: true, garante: function () { SIMRG.problema(); var r = rg().S.rules[0]; SIMRG.abre({}); var d = rg().D; for (var k in r) d[k] = JSON.parse(JSON.stringify(r[k])); d.editando = 'r1'; d.intervalo = 'Últimos 7 dias'; d.conds = [{ m: 'Gasto', op: 'é maior que', v: '20' }, { m: 'Resultados', op: 'é igual a', v: '0' }]; d.pct = '10'; location.hash = 'lista'; render() }, tit: T('Salvar', 'Guardar'), txt: T('Clique em Salvar.', 'Haz clic en Guardar.') },
    { alvo: '[data-t=nav-campanhas]', clique: true, garante: function () { location.hash = 'lista'; render() }, tit: T('Reativar o que foi desativado', 'Reactivar lo que se desactivó'), txt: T('Corrigir a regra não reativa sozinho o que ela já desativou. Volte a Campanhas e ative a “Caneca azul” de novo.', 'Corregir la regla no reactiva solo lo que ya desactivó. Vuelve a Campañas y activa la “Caneca azul” de nuevo.') },
    { alvo: '[data-t=btn-reativa-a]', clique: true, garante: function () { location.hash = 'campanhas'; render() }, tit: T('Ativar', 'Activar'), txt: T('Clique em Ativar na “Caneca azul”. (A “Camiseta Montanha” gastou R$ 31,50 sem resultado: pode continuar desativada.)', 'Haz clic en Activar en la “Caneca azul”. (La “Camiseta Montanha” gastó R$ 31,50 sin resultado: puede seguir desactivada.)') },
    { alvo: '[data-t=btn-reativa-b]', fim: true, semVolta: true, garante: function () { location.hash = 'campanhas'; render() }, tit: T('Caso resolvido! 🎉', '¡Caso resuelto! 🎉'), txt: T('A causa era uma regra larga demais (intervalo de 37 meses e uma só condição). Resumo para o atendimento: ver Resultados da regra, ler a condição e o intervalo, corrigir a regra e reativar o que for preciso. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'La causa era una regla demasiado amplia (intervalo de 37 meses y una sola condición). Resumen para la atención: ver Resultados de la regla, leer la condición y el intervalo, corregir la regla y reactivar lo que haga falta. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
