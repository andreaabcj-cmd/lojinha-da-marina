/* Simulador do Gerenciador de Anúncios › Conjuntos de anúncios: Veiculação, fase de aprendizado e edições significativas — layout fiel, visual da Lojinha.
   Estado no navegador (localStorage "sim.entrega"); nada é enviado à Meta.
   Real (conta de aula, 14–16/10/2026, PT e ES): colunas Veiculação/Entrega, Resultados, Custo por resultado, Orçamento, Valor gasto, Estratégia de lance, filtro Teve veiculação, "Em rascunho", "Ativo", "Em análise", "% gastos na fase de aprendizado" e o limite de gastos da conta.
   Real (Central de Ajuda da Meta, lida em 16/10/2026): fase de aprendizado (cerca de 50 resultados na semana após a última edição significativa; "Aprendizado" e "Aprendizado limitado"; lojas: 17 compras no site e 5 pela Meta) e a lista de edições significativas.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Como ver o status da campanha, do conjunto de anúncios ou da veiculação de anúncio” (ícones ERRO/AVISO/PENDENTE/ATIVO/INATIVO; status Rejeitado, Aprendizado limitado, Programado, Em análise, Em processamento, Em preparação, Ativo, Aprendizado, Sem anúncios, Anúncios desativados / Conjunto de anúncios desativado, Concluído; ao passar o mouse sobre erros e avisos aparecem mais informações; verificar o status em todos os níveis) e “Solucionar problemas de veiculação” (histórico de atividades: pausas, mudanças de orçamento e de programação; limite de lance; fadiga do criativo).
   INVENTADOS para o treino: os conjuntos, os números, o passar dos dias, o prazo de 7 dias para virar "Aprendizado limitado", o limiar de 50% do orçamento, as campanhas, as entradas do histórico e o texto exato do balão do status (a conferir).
   URL: meta-entrega.html?zerar=1 (conjuntos novos) · ?exemplo=1 (3 conjuntos em aprendizado) · ?problema=1 (conjuntos que não veiculam)
   Tutoriais (tour.js): ?tour=ler-aprendizado | edicao-significativa | aprendizado-limitado | nao-veicula */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function brl(n) { return 'R$ ' + n.toFixed(2).replace('.', ',') }
  var PUBLICOS = ['Advantage+ (automático)', 'Visitantes do site 30 dias', 'Brasil 18+'];
  var CRIATIVOS = ['Foto da caneca azul', 'Foto da camiseta'];
  var EVENTOS = ['Compras', 'Adições ao carrinho'];
  var LANCES = ['Volume mais alto', 'Limite de custo'];
  function mk(id, nome, orc, taxa, res, dias) { return { id: id, nome: nome, orc: orc, taxa: taxa, res: res, dias: dias, gasto: orc * dias * 0.9, pub: PUBLICOS[0], cri: CRIATIVOS[0], ev: EVENTOS[0], lance: LANCES[0], ativo: true, extra: '', ult: dias ? 'há ' + dias + ' dias' : 'agora' } }
  function inicial() { return { aba: 'conj', hist: false, ads: [mk('a', 'Caneca azul · Brasil', 25, 9, 0, 0), mk('b', 'Camiseta Montanha · Brasil', 15, 3, 0, 0), mk('c', 'Ecobag Folha · Brasil', 10, 6, 0, 0)], dia: 0, ed: null, aviso: '', limite: false } }
  function exemplo() { var s = inicial(); s.aba = 'conj'; s.ads = [mk('a', 'Caneca azul · Brasil', 25, 9, 27, 3), mk('b', 'Camiseta Montanha · Brasil', 15, 3, 9, 3), mk('c', 'Ecobag Folha · Brasil', 10, 6, 18, 3)]; return s }
  function problema() {
    var s = exemplo(); s.ads = [mk('a', 'Caneca azul · Brasil', 25, 9, 60, 9), mk('d', 'Ecobag Folha · Brasil', 10, 6, 18, 3), mk('e', 'Boné Azul · Brasil', 12, 4, 0, 0), mk('f', 'Moletom Marinho · Brasil', 20, 5, 0, 0)];
    s.ads[1].ativo = false; s.ads[2].extra = 'analise'; s.ads[3].extra = 'programado'; s.limite = true; s.aba = 'conj'; s.hist = false; return s;
  }
  var S = ler('sim.entrega', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('exemplo')) S = exemplo();
  if (params.get('problema')) S = problema();
  function grava() { try { localStorage.setItem('sim.entrega', JSON.stringify(S)) } catch (e) { } window.__simEn = { S: S } }
  grava();
  function st(a) {
    if (!a.ativo) return 'Desativado'; if (a.extra === 'analise') return 'Em análise'; if (a.extra === 'programado') return 'Programado';
    if (a.res >= 50) return 'Ativo'; return a.dias >= 7 ? 'Aprendizado limitado' : 'Aprendizado';
  }
  /* ícones da coluna Veiculação (Central de Ajuda): ERRO, AVISO, PENDENTE, ATIVO, INATIVO */
  var ICONES = { erro: ['⛔', 'ERRO'], aviso: ['⚠️', 'AVISO'], pendente: ['🕓', 'PENDENTE'], ativo: ['🟢', 'ATIVO'], inativo: ['⚪', 'INATIVO'] };
  function icone(s) { return s === 'Aprendizado limitado' ? 'aviso' : s === 'Em análise' || s === 'Programado' ? 'pendente' : s === 'Desativado' || s === 'Concluído' ? 'inativo' : s === 'Rejeitado' ? 'erro' : 'ativo' }
  function motivo(a) {
    var s = st(a);
    if (s === 'Desativado') return 'O conjunto de anúncios não está sendo veiculado porque está desativado (o botão está cinza). Foi você ou uma regra automatizada. Para voltar a veicular, ative-o.';
    if (s === 'Em análise') return 'O anúncio está em análise para garantir a conformidade com os Padrões de Publicidade da Meta. Após a análise, ficará ativo e começará a ser veiculado conforme programado.';
    if (s === 'Programado') return 'O conjunto de anúncios está programado para ser veiculado em uma data futura. Você pode editar o conjunto de anúncios para alterar a programação.';
    if (s === 'Aprendizado limitado') return 'O conjunto de anúncios não gerou resultados suficientes para sair da fase de aprendizado.';
    if (s === 'Aprendizado') return 'O conjunto de anúncios e todos os seus anúncios ainda estão na fase de aprendizado. O desempenho é menos estável nesse período e os CPAs geralmente são piores.';
    return 'O conjunto de anúncios está sendo veiculado normalmente.';
  }
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento do Gerenciador de Anúncios · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function pctApr() { var tot = 0, apr = 0; S.ads.forEach(function (a) { var g = a.gasto; tot += g; if (/^Aprendizado/.test(st(a))) apr += g }); return tot ? Math.round(apr / tot * 100) : 0 }

  function tabela() {
    var linhas = S.ads.map(function (a) {
      var s = st(a), cl = s === 'Ativo' ? 'vd' : /^Aprendizado/.test(s) ? 'am' : '';
      return '<tr data-t="adset-' + a.id + '"><td><label class="rg-sw"><input type="checkbox" data-liga="' + a.id + '"' + (a.ativo ? ' checked' : '') + '/></label></td><td><b>' + esc(a.nome) + '</b><br><small>' + esc(a.pub) + ' · ' + esc(a.lance) + '</small></td>' +
        '<td data-t="status-' + a.id + '"><button class="en-st" data-porque="' + a.id + '" data-t="btn-status-' + a.id + '" title="' + esc(motivo(a)) + '"><span class="en-ic" title="' + ICONES[icone(s)][1] + '">' + ICONES[icone(s)][0] + '</span><span class="ga-tag ' + cl + '">' + s + '</span></button></td>' +
        '<td>' + a.res + '</td><td>' + (a.res ? brl(a.gasto / (a.res || 1)) : '—') + '</td><td>' + brl(a.orc) + '<br><small>Diário</small></td><td>' + brl(a.gasto) + '</td><td data-t="ult-' + a.id + '">' + esc(a.ult) + '</td>' +
        '<td><button class="btn sec" data-edita="' + a.id + '" data-t="btn-edita-' + a.id + '">Editar</button></td></tr>';
    }).join('');
    return '<table class="cm-tab" data-t="tabela-entrega"><thead><tr><th>Ativo</th><th>Conjunto de anúncios</th><th>Veiculação</th><th>Resultados (desde a última edição significativa)</th><th>Custo por resultado</th><th>Orçamento</th><th>Valor gasto</th><th>Última edição significativa</th><th></th></tr></thead><tbody>' + linhas + '</tbody></table>';
  }
  function painelPorque() {
    if (!S.por) return ''; var a = S.ads.filter(function (x) { return x.id === S.por })[0]; if (!a) return '';
    return '<div class="ga-aviso" data-t="painel-porque"><b>' + esc(a.nome) + ' · ' + ICONES[icone(st(a))][1] + ': ' + st(a) + '</b><br>' + esc(motivo(a)) + (S.limite && st(a) === 'Ativo' ? '<br>A conta quase atingiu o limite de gastos: aumente, redefina ou remova o limite para manter os anúncios em veiculação.' : '') + '<br><small>Na tela real, esta informação aparece quando você passa o ponteiro do mouse sobre o status. O significado vem da Central de Ajuda; o texto exato do balão é a conferir.</small></div>';
  }
  function painelEdicao() {
    var e = S.ed; if (!e) return ''; var a = S.ads.filter(function (x) { return x.id === e.id })[0];
    var sel = function (id, op, v, t) { return '<select class="ga-in" id="' + id + '" data-t="' + t + '">' + op.map(function (o) { return '<option value="' + o + '" data-pt="' + o + '"' + (o === v ? ' selected' : '') + '>' + o + '</option>' }).join('') + '</select>' };
    return '<div class="ga-fundo"><div class="ga-jan fd-jan" data-t="jan-edicao"><h2>Editar conjunto de anúncios</h2><p class="miudo">' + esc(a.nome) + '</p>' +
      '<p><b>Orçamento diário (R$)</b></p><input class="ga-in rg-v" id="enOrc" value="' + esc(e.orc) + '" data-t="en-orcamento"/>' +
      '<p><b>Público</b></p>' + sel('enPub', PUBLICOS, e.pub, 'en-publico') + '<p><b>Criativo do anúncio</b></p>' + sel('enCri', CRIATIVOS, e.cri, 'en-criativo') +
      '<p><b>Evento de otimização</b></p>' + sel('enEv', EVENTOS, e.ev, 'en-evento') + '<p><b>Estratégia de lance</b></p>' + sel('enLance', LANCES, e.lance, 'en-lance') +
      '<label class="ga-lin"><input type="checkbox" id="enNovo"' + (e.novo ? ' checked' : '') + ' data-t="en-novo-anuncio"/><span><b>Adicionar um novo anúncio a este conjunto</b></span></label>' +
      '<p class="miudo">Pela Central de Ajuda, mudar o direcionamento (público), o criativo, o evento de otimização, a estratégia de lance, adicionar um anúncio ou pausar por 7 dias ou mais são edições significativas. Mudar o orçamento “poderá ou não” ser: depende do tamanho. <b>No simulador, uma mudança de 50% ou mais no orçamento conta como significativa.</b></p>' +
      '<div class="rodape-jan"><button class="btn sec" data-acao="cancela-ed" data-t="btn-cancela-ed">Cancelar</button><button class="btn" data-acao="publica-ed" data-t="btn-publica-ed">Publicar</button></div></div></div>';
  }
  /* campanhas (nível de cima): cada uma reúne conjuntos; o status da campanha vem dos conjuntos (Ativo, Em análise, Programado, Desativado ou “Conjunto de anúncios desativado”) */
  function campanhas() {
    var G = S.camps || [{ id: 'c1', nome: 'Vendas · Caneca e Ecobag', sets: ['a', 'd'] }, { id: 'c2', nome: 'Vendas · Boné e Moletom', sets: ['e', 'f'] }];
    return G.map(function (g) {
      var L = g.sets.map(function (id) { return S.ads.filter(function (x) { return x.id === id })[0] }).filter(Boolean);
      if (!L.length) return null;
      var sts = L.map(st), ativo = sts.some(function (x) { return x === 'Ativo' || /^Aprendizado/.test(x) }), desl = sts.some(function (x) { return x === 'Desativado' });
      var s = ativo ? (desl ? 'Conjunto de anúncios desativado' : sts.indexOf('Aprendizado limitado') >= 0 && sts.every(function (x) { return x === 'Aprendizado limitado' }) ? 'Aprendizado limitado' : 'Ativo') : sts.indexOf('Em análise') >= 0 ? 'Em análise' : sts.indexOf('Programado') >= 0 ? 'Programado' : 'Desativado';
      var ic = s === 'Ativo' ? 'ativo' : s === 'Conjunto de anúncios desativado' || s === 'Aprendizado limitado' ? 'aviso' : s === 'Desativado' ? 'inativo' : 'pendente';
      return { id: g.id, nome: g.nome, s: s, ic: ic, ligada: s !== 'Desativado', gasto: L.reduce(function (n, x) { return n + x.gasto }, 0) };
    }).filter(Boolean);
  }
  function tabelaCamp() {
    return '<table class="cm-tab" data-t="tabela-campanhas"><thead><tr><th>Ativo</th><th>Campanha</th><th>Veiculação</th><th>Valor gasto</th></tr></thead><tbody>' + campanhas().map(function (c) {
      return '<tr data-t="camp-' + c.id + '"><td><label class="rg-sw"><input type="checkbox"' + (c.ligada ? ' checked' : '') + ' disabled/></label></td><td><b>' + esc(c.nome) + '</b></td><td data-t="camp-status-' + c.id + '"><span class="en-ic" title="' + ICONES[c.ic][1] + '">' + ICONES[c.ic][0] + '</span><span class="ga-tag ' + (c.ic === 'ativo' ? 'vd' : c.ic === 'aviso' ? 'am' : '') + '">' + c.s + '</span></td><td>' + brl(c.gasto) + '</td></tr>';
    }).join('') + '</tbody></table><p class="miudo">' + 'Campanha, conjunto de anúncios e anúncio podem ter status diferentes: verifique em todos os níveis. Ex.: a campanha aparece ativa, mas o conjunto está desativado.' + '</p>';
  }
  function historico() {
    if (!S.hist) return ''; var H = S.histl || [['hoje às 22:10', 'Orçamento do conjunto “Caneca azul · Brasil” alterado de R$ 25,00 para R$ 50,00'], ['hoje às 16:40', 'Conjunto “Ecobag Folha · Brasil” desativado'], ['ontem às 09:15', 'Data de início do conjunto “Moletom Marinho · Brasil” alterada para amanhã']];
    return '<div class="ga-fundo"><div class="ga-jan fd-jan" data-t="jan-historico"><h2>Histórico de atividades</h2><table class="cm-tab"><tbody>' + H.map(function (h) { return '<tr><td>' + h[0] + '</td><td>' + esc(h[1]) + '</td></tr>' }).join('') + '</tbody></table><p class="miudo">Procure mudanças feitas logo antes de a veiculação diminuir ou parar: pausas frequentes, mudanças de orçamento ou de programação perto do fim do dia. (As entradas são do simulador; o recurso é real.)</p><div class="rodape-jan"><button class="btn" data-acao="fecha-hist" data-t="btn-fecha-hist">Fechar</button></div></div></div>';
  }
  function pagina() {
    var aba = S.aba || 'conj', corpoT = aba === 'camp' ? tabelaCamp() : tabela();
    return casca('<div class="ss"><nav class="ss-nav"><button class="ss-it' + (aba === 'camp' ? ' on' : '') + '" data-aba="camp" data-t="tab-camp">📣 Campanhas</button><button class="ss-it' + (aba === 'conj' ? ' on' : '') + '" data-aba="conj" data-t="tab-conj">👥 Conjuntos de anúncios</button><button class="ss-it" disabled>🖼️ Anúncios</button><button class="ss-it" disabled>📊 Relatórios</button></nav><main class="ss-main"><div class="ss-topo"><div><h1>' + (aba === 'camp' ? 'Campanhas' : 'Conjuntos de anúncios') + '</h1><p class="ss-sub">Lojinha da Marina Aula (123456789) · Dia ' + S.dia + ' do simulador</p></div><div class="ss-bt"><button class="btn sec" data-acao="hist" data-t="btn-historico">Histórico de atividades</button><button class="btn sec" data-acao="dia" data-t="btn-dia">Avançar 1 dia (simulador)</button><button class="btn sec" data-acao="dia7" data-t="btn-dia7">Avançar 7 dias (simulador)</button></div></div>' +
      (S.limite ? '<div class="ga-aviso verm" data-t="aviso-limite"><b>Você quase atingiu o limite de gastos que definiu para essa conta de anúncios.</b> Aumente, redefina ou remova o limite para manter seus anúncios em veiculação. <a>Aumentar limite</a></div>' : '') +
      '<div class="ga-aviso" data-t="card-aprendizado"><b>% gastos na fase de aprendizado:</b> ' + pctApr() + '% <small>(quanto do dinheiro gasto está em conjuntos que ainda aprendem)</small></div>' +
      (S.aviso ? '<div class="ga-aviso" data-t="aviso-edicao">' + esc(S.aviso) + '</div>' : '') + corpoT + (aba === 'conj' ? painelPorque() : '') +
      '<p class="conferido">✓ Colunas, status “Ativo/Em análise/Rascunho”, o card “% gastos na fase de aprendizado” e o aviso de limite de gastos conferidos com o Gerenciador real em ' + CONF + '. ⚠ Os status e os ícones seguem a Central de Ajuda (16/10/2026). Os conjuntos, as campanhas, os números e o passar dos dias são do simulador (a conferir).</p></main></div>' + painelEdicao() + historico());
  }
  function avanca(n) { S.ads.forEach(function (a) { if (!a.ativo || a.extra) return; for (var i = 0; i < n; i++) { a.res += a.taxa; a.dias++; a.gasto += a.orc * 0.9 } a.ult = 'há ' + a.dias + ' dias' }); S.dia += n }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-aba]'))) { S.aba = c.getAttribute('data-aba'); S.por = ''; grava(); render(); return }
    if ((c = t.closest('[data-porque]'))) { S.por = S.por === c.getAttribute('data-porque') ? '' : c.getAttribute('data-porque'); grava(); render(); return }
    if ((c = t.closest('[data-edita]'))) { var a = S.ads.filter(function (x) { return x.id === c.getAttribute('data-edita') })[0]; S.ed = { id: a.id, orc: String(a.orc), pub: a.pub, cri: a.cri, ev: a.ev, lance: a.lance, novo: false }; S.aviso = ''; grava(); render(); return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-acao');
    if (ac === 'dia') avanca(1); else if (ac === 'dia7') avanca(7);
    else if (ac === 'hist') S.hist = true; else if (ac === 'fecha-hist') S.hist = false;
    else if (ac === 'cancela-ed') S.ed = null;
    else if (ac === 'publica-ed') {
      var e = S.ed, a2 = S.ads.filter(function (x) { return x.id === e.id })[0], orc = parseFloat(String(e.orc).replace(',', '.')); if (!(orc > 0)) return;
      var razao = orc / a2.orc, sig = e.pub !== a2.pub || e.cri !== a2.cri || e.ev !== a2.ev || e.lance !== a2.lance || e.novo || razao >= 1.5 || razao <= 0.5, motivos = [];
      if (e.pub !== a2.pub) motivos.push('mudou o público'); if (e.cri !== a2.cri) motivos.push('mudou o criativo'); if (e.ev !== a2.ev) motivos.push('mudou o evento de otimização'); if (e.lance !== a2.lance) motivos.push('mudou a estratégia de lance'); if (e.novo) motivos.push('adicionou um anúncio'); if (razao >= 1.5 || razao <= 0.5) motivos.push('mudou muito o orçamento');
      a2.orc = orc; a2.pub = e.pub; a2.cri = e.cri; a2.ev = e.ev; a2.lance = e.lance;
      if (sig) { a2.res = 0; a2.dias = 0; a2.ult = 'agora'; S.aviso = 'Edição salva. Foi uma edição significativa (' + motivos.join(', ') + '): o conjunto “' + a2.nome + '” voltou para a fase de aprendizado e a contagem de resultados recomeçou.' }
      else S.aviso = 'Edição salva. Não foi uma edição significativa: o conjunto “' + a2.nome + '” continua como estava, sem reiniciar o aprendizado.';
      S.ed = null;
    } else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.getAttribute && t.getAttribute('data-liga')) { S.ads.forEach(function (a) { if (a.id === t.getAttribute('data-liga')) a.ativo = t.checked }); grava(); render(); return }
    if (!S.ed) return;
    if (t.id === 'enPub') S.ed.pub = t.value; else if (t.id === 'enCri') S.ed.cri = t.value; else if (t.id === 'enEv') S.ed.ev = t.value; else if (t.id === 'enLance') S.ed.lance = t.value; else if (t.id === 'enNovo') S.ed.novo = t.checked; else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) { if (S.ed && ev.target.id === 'enOrc') { S.ed.orc = ev.target.value; grava() } });
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simEn = { S: S };
  }
  function ad(id) { return S.ads.filter(function (x) { return x.id === id })[0] }
  window.SIMEN = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, exemplo: function () { S = exemplo(); grava(); render() }, problema: function () { S = problema(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() },
    ad: ad, avanca: function (n) { avanca(n); grava(); render() }, abreEd: function (id, o) { var a = ad(id); S.ed = { id: id, orc: String(a.orc), pub: a.pub, cri: a.cri, ev: a.ev, lance: a.lance, novo: false }; for (var k in (o || {})) S.ed[k] = o[k]; grava(); render() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function en() { return window.__simEn ? window.__simEn.S : S }
  TOURS['ler-aprendizado'] = [
    { antes: function () { SIMEN.exemplo() }, alvo: '[data-t=tabela-entrega]', garante: function () { SIMEN.exemplo() }, tit: T('A coluna Veiculação', 'La columna Entrega'), txt: T('Na tabela de conjuntos de anúncios, a coluna Veiculação diz como cada conjunto está: Ativo, Em análise, Desativado… e, nos conjuntos novos, “Aprendizado”. Aqui os três conjuntos da Marina estão em Aprendizado. Clique em Próximo.', 'En la tabla de conjuntos de anuncios, la columna Entrega dice cómo está cada conjunto: Activo, En revisión, Desactivado… y, en los conjuntos nuevos, “Aprendizaje”. Aquí los tres conjuntos de Marina están en Aprendizaje. Haz clic en Siguiente.') },
    { alvo: '[data-t=status-a]', garante: function () { SIMEN.exemplo() }, tit: T('O que é “Aprendizado”', 'Qué es “Aprendizaje”'), txt: T('A fase de aprendizado é o período em que o sistema de veiculação ainda aprende como o conjunto pode ser veiculado e qual desempenho pode ter. Aparece quando o conjunto é novo ou depois de uma edição significativa. Clique em Próximo.', 'La fase de aprendizaje es el período en que el sistema de entrega todavía aprende cómo puede entregarse el conjunto y qué rendimiento puede tener. Aparece cuando el conjunto es nuevo o después de una edición significativa. Haz clic en Siguiente.') },
    { alvo: '[data-t=adset-a]', garante: function () { SIMEN.exemplo() }, tit: T('Quanto falta: 50 resultados', 'Cuánto falta: 50 resultados'), txt: T('Os conjuntos saem do aprendizado quando o desempenho se estabiliza: normalmente após cerca de 50 resultados na semana depois da última edição significativa. A “Caneca azul” tem 27 resultados: falta quase metade. Clique em Próximo.', 'Los conjuntos salen del aprendizaje cuando el rendimiento se estabiliza: normalmente después de unos 50 resultados en la semana posterior a la última edición significativa. La “Taza azul” tiene 27 resultados: falta casi la mitad. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-dia7]', clique: true, garante: function () { SIMEN.exemplo() }, tit: T('Deixar o tempo passar', 'Dejar pasar el tiempo'), txt: T('Vamos avançar 7 dias (isso só existe no simulador). Clique em Avançar 7 dias.', 'Vamos a avanzar 7 días (esto solo existe en el simulador). Haz clic en Avanzar 7 días.') },
    { alvo: '[data-t=tabela-entrega]', fim: true, semVolta: true, garante: function () { SIMEN.exemplo(); SIMEN.avanca(7) }, tit: T('Ativo ou limitado! 🎉', '¡Activo o limitado! 🎉'), txt: T('Depois dos dias, a “Caneca azul” chegou a mais de 50 resultados e ficou Ativo. Já a “Camiseta Montanha”, com poucos resultados, ficou em “Aprendizado limitado”: não teve resultados suficientes para sair do aprendizado. Isso é o assunto da aula 04. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Después de los días, la “Taza azul” llegó a más de 50 resultados y quedó Activo. En cambio, la “Camiseta Montaña”, con pocos resultados, quedó en “Aprendizaje limitado”: no tuvo resultados suficientes para salir del aprendizaje. Eso es tema de la clase 04. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['edicao-significativa'] = [
    { antes: function () { SIMEN.exemplo() }, alvo: '[data-t=btn-edita-a]', clique: true, garante: function () { SIMEN.exemplo() }, tit: T('Editar um conjunto', 'Editar un conjunto'), txt: T('A Marina quer mexer na “Caneca azul” (27 resultados, ainda aprendendo). Primeiro, uma edição pequena: clique em Editar.', 'Marina quiere tocar la “Taza azul” (27 resultados, todavía aprendiendo). Primero, una edición pequeña: haz clic en Editar.') },
    { alvo: '[data-t=en-orcamento]', garante: function () { SIMEN.exemplo(); SIMEN.abreEd('a') }, cond: function () { return en().ed && String(en().ed.orc) === '26' }, tit: T('Orçamento de 25 para 26', 'Presupuesto de 25 a 26'), txt: T('Mude o orçamento diário de 25 para 26. A Central de Ajuda dá um exemplo parecido: de 100 para 101 provavelmente não reinicia o aprendizado. Digite 26 e clique em Próximo.', 'Cambia el presupuesto diario de 25 a 26. El Centro de ayuda da un ejemplo parecido: de 100 a 101 probablemente no reinicia el aprendizaje. Escribe 26 y haz clic en Siguiente.'), dica: T('Digite 26.', 'Escribe 26.') },
    { alvo: '[data-t=btn-publica-ed]', clique: true, garante: function () { SIMEN.exemplo(); SIMEN.abreEd('a', { orc: '26' }) }, tit: T('Publicar a edição', 'Publicar la edición'), txt: T('Clique em Publicar.', 'Haz clic en Publicar.') },
    { alvo: '[data-t=aviso-edicao]', garante: function () { SIMEN.exemplo(); SIMEN.ad('a').orc = 26; SIMEN.set({ aviso: 'Edição salva. Não foi uma edição significativa: o conjunto “Caneca azul · Brasil” continua como estava, sem reiniciar o aprendizado.' }) }, tit: T('Nada mudou no aprendizado', 'Nada cambió en el aprendizaje'), txt: T('O aviso mostra: edição pequena, o conjunto continua como estava (27 resultados, Aprendizado). Clique em Próximo.', 'El aviso muestra: edición pequeña, el conjunto sigue como estaba (27 resultados, Aprendizaje). Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-edita-a]', clique: true, garante: function () { SIMEN.exemplo(); SIMEN.ad('a').orc = 26 }, tit: T('Agora uma edição grande', 'Ahora una edición grande'), txt: T('Agora a Marina quer trocar o público. Clique em Editar de novo.', 'Ahora Marina quiere cambiar el público. Haz clic en Editar de nuevo.') },
    { alvo: '[data-t=en-publico]', garante: function () { SIMEN.exemplo(); SIMEN.ad('a').orc = 26; SIMEN.abreEd('a') }, cond: function () { return en().ed && en().ed.pub === 'Brasil 18+' }, tit: T('Trocar o público', 'Cambiar el público'), txt: T('Mudar o direcionamento é uma edição significativa. Escolha o público “Brasil 18+”.', 'Cambiar la segmentación es una edición significativa. Elige el público “Brasil 18+”.'), dica: T('Escolha “Brasil 18+”.', 'Elige “Brasil 18+”.') },
    { alvo: '[data-t=btn-publica-ed]', clique: true, garante: function () { SIMEN.exemplo(); SIMEN.ad('a').orc = 26; SIMEN.abreEd('a', { pub: 'Brasil 18+' }) }, tit: T('Publicar', 'Publicar'), txt: T('Clique em Publicar.', 'Haz clic en Publicar.') },
    { alvo: '[data-t=adset-a]', fim: true, semVolta: true, garante: function () { SIMEN.exemplo(); var a = SIMEN.ad('a'); a.orc = 26; a.pub = 'Brasil 18+'; a.res = 0; a.dias = 0; a.ult = 'agora'; SIMEN.set({ aviso: 'Edição salva. Foi uma edição significativa (mudou o público): o conjunto “Caneca azul · Brasil” voltou para a fase de aprendizado e a contagem de resultados recomeçou.' }) }, tit: T('Voltou ao zero! 🎉', '¡Volvió a cero! 🎉'), txt: T('Os 27 resultados viraram 0 e a “Última edição significativa” é “agora”: o conjunto recomeçou o aprendizado. Por isso a regra de ouro: edite só com um bom motivo. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Los 27 resultados pasaron a 0 y la “Última edición significativa” es “ahora”: el conjunto recomenzó el aprendizaje. Por eso la regla de oro: edita solo con un buen motivo. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['aprendizado-limitado'] = [
    { antes: function () { SIMEN.exemplo(); SIMEN.avanca(7) }, alvo: '[data-t=status-b]', garante: function () { SIMEN.exemplo(); SIMEN.avanca(7) }, tit: T('“Aprendizado limitado”', '“Aprendizaje limitado”'), txt: T('A “Camiseta Montanha” ficou em Aprendizado limitado: passou o tempo e ela não teve resultados suficientes para sair do aprendizado. Pela Central de Ajuda, é isso que a coluna Veiculação mostra nesse caso. Clique em Próximo.', 'La “Camiseta Montaña” quedó en Aprendizaje limitado: pasó el tiempo y no tuvo resultados suficientes para salir del aprendizaje. Según el Centro de ayuda, eso es lo que muestra la columna Entrega en ese caso. Haz clic en Siguiente.') },
    { alvo: '[data-t=adset-b]', garante: function () { SIMEN.exemplo(); SIMEN.avanca(7) }, tit: T('Os números da camiseta', 'Los números de la camiseta'), txt: T('Repare: orçamento de R$ 15 por dia e só 30 resultados na semana, bem menos que os cerca de 50. Com poucos resultados, o desempenho é menos estável e o custo por resultado costuma ser mais alto. Clique em Próximo.', 'Fíjate: presupuesto de R$ 15 por día y solo 30 resultados en la semana, bastante menos que los cerca de 50. Con pocos resultados, el rendimiento es menos estable y el costo por resultado suele ser más alto. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-status-b]', clique: true, garante: function () { SIMEN.exemplo(); SIMEN.avanca(7) }, tit: T('Entender o status', 'Entender el estado'), txt: T('Na tela real, passar o ponteiro do mouse sobre o status mostra mais informações. Aqui, clique no status Aprendizado limitado.', 'En la pantalla real, pasar el puntero del mouse sobre el estado muestra más información. Aquí, haz clic en el estado Aprendizaje limitado.') },
    { alvo: '[data-t=painel-porque]', garante: function () { SIMEN.exemplo(); SIMEN.avanca(7); SIMEN.set({ por: 'b' }) }, tit: T('O que fazer', 'Qué hacer'), txt: T('Segundo as boas práticas da Central de Ajuda: usar orçamentos realistas (nem baixo demais nem inflado), evitar edições desnecessárias, e combinar conjuntos de anúncios semelhantes, porque assim os aprendizados também se combinam. Clique em Próximo.', 'Según las buenas prácticas del Centro de ayuda: usar presupuestos realistas (ni demasiado bajos ni inflados), evitar ediciones innecesarias y combinar conjuntos de anuncios parecidos, porque así los aprendizajes también se combinan. Haz clic en Siguiente.') },
    { alvo: '[data-t=tabela-entrega]', fim: true, semVolta: true, garante: function () { SIMEN.exemplo(); SIMEN.avanca(7) }, tit: T('Limitado não é erro! 🎉', '¡Limitado no es un error! 🎉'), txt: T('Aprendizado limitado é um aviso de que faltam resultados, não um defeito. O caminho é dar ao conjunto condições de aprender (orçamento realista, poucas edições, conjuntos combinados). Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Aprendizaje limitado es un aviso de que faltan resultados, no un defecto. El camino es darle al conjunto condiciones de aprender (presupuesto realista, pocas ediciones, conjuntos combinados). Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  function P0() { SIMEN.problema() }
  TOURS['nao-veicula'] = [
    { antes: P0, alvo: '[data-t=tabela-entrega]', garante: P0, tit: T('“Meus anúncios não rodam!”', '“¡Mis anuncios no corren!”'), txt: T('A Marina diz que alguns anúncios não estão veiculando. A Central de Ajuda orienta verificar o status em todos os níveis (campanha, conjunto de anúncios e anúncio) pela coluna Veiculação, que mostra um ícone: erro, aviso, pendente, ativo ou inativo. Clique em Próximo.', 'Marina dice que algunos anuncios no están entregando. El Centro de ayuda indica revisar el estado en todos los niveles (campaña, conjunto de anuncios y anuncio) en la columna Entrega, que muestra un ícono: error, aviso, pendiente, activo o inactivo. Haz clic en Siguiente.') },
    { alvo: '[data-t=aviso-limite]', garante: P0, tit: T('Primeiro, a conta', 'Primero, la cuenta'), txt: T('No topo, um aviso real da conta: ela quase atingiu o limite de gastos. Quando o limite é atingido, os anúncios param de veicular. É a primeira coisa a conferir. Clique em Próximo.', 'Arriba, un aviso real de la cuenta: casi alcanzó el límite de gastos. Cuando se alcanza el límite, los anuncios dejan de entregar. Es lo primero que hay que revisar. Haz clic en Siguiente.') },
    { alvo: '[data-t=tab-camp]', clique: true, garante: P0, tit: T('Nível da campanha', 'Nivel de la campaña'), txt: T('Vamos conferir os níveis. Comece pelas Campanhas: clique em Campanhas.', 'Vamos a revisar los niveles. Empieza por las Campañas: haz clic en Campañas.') },
    { alvo: '[data-t=tabela-campanhas]', garante: function () { P0(); SIMEN.set({ aba: 'camp' }) }, tit: T('A campanha pode enganar', 'La campaña puede engañar'), txt: T('A primeira campanha aparece ativa, mas com o status “Conjunto de anúncios desativado”: algo dentro dela está desligado. A segunda está “Em análise”. Clique em Próximo.', 'La primera campaña aparece activa, pero con el estado “Conjunto de anuncios desactivado”: algo dentro de ella está apagado. La segunda está “En revisión”. Haz clic en Siguiente.') },
    { alvo: '[data-t=tab-conj]', clique: true, garante: function () { P0(); SIMEN.set({ aba: 'camp' }) }, tit: T('Descer para os conjuntos', 'Bajar a los conjuntos'), txt: T('Agora clique em Conjuntos de anúncios para achar o que está desligado.', 'Ahora haz clic en Conjuntos de anuncios para encontrar lo que está apagado.') },
    { alvo: '[data-t=btn-status-d]', clique: true, garante: P0, tit: T('A Ecobag: Desativado', 'La Ecobag: Desactivado'), txt: T('A Ecobag está Desativada, com o ícone cinza (inativo). Clique no status dela para ver o significado.', 'La Ecobag está Desactivada, con el ícono gris (inactivo). Haz clic en su estado para ver el significado.') },
    { alvo: '[data-t=painel-porque]', garante: function () { P0(); SIMEN.set({ por: 'd' }) }, tit: T('Quem desativou?', '¿Quién la desactivó?'), txt: T('Desativado: botão cinza. Foi você ou uma regra automatizada. Para saber quem e quando, olhe o Histórico de atividades. Clique em Próximo.', 'Desactivado: botón gris. Fuiste tú o una regla automática. Para saber quién y cuándo, mira el Historial de actividades. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-historico]', clique: true, garante: function () { P0(); SIMEN.set({ por: 'd' }) }, tit: T('Histórico de atividades', 'Historial de actividades'), txt: T('Abra o Histórico de atividades.', 'Abre el Historial de actividades.') },
    { alvo: '[data-t=jan-historico]', garante: function () { P0(); SIMEN.set({ hist: true }) }, tit: T('Mudanças recentes', 'Cambios recientes'), txt: T('Procure o que mudou logo antes de a veiculação parar. Aqui: a Ecobag foi desativada hoje à tarde, o orçamento da Caneca dobrou à noite (mudança perto do fim do dia pode atrapalhar o sistema) e o Moletom ganhou data de início futura. Clique em Próximo.', 'Busca lo que cambió justo antes de que la entrega se detuviera. Aquí: la Ecobag se desactivó hoy por la tarde, el presupuesto de la Taza se duplicó por la noche (un cambio cerca del fin del día puede perjudicar al sistema) y el Buzo recibió fecha de inicio futura. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-fecha-hist]', clique: true, garante: function () { P0(); SIMEN.set({ hist: true }) }, tit: T('Fechar', 'Cerrar'), txt: T('Clique em Fechar.', 'Haz clic en Cerrar.') },
    { alvo: '[data-t=adset-d] input', clique: true, garante: function () { P0(); SIMEN.set({ hist: false }) }, tit: T('Ativar a Ecobag', 'Activar la Ecobag'), txt: T('Ligue o interruptor da Ecobag.', 'Activa el interruptor de la Ecobag.') },
    { alvo: '[data-t=btn-status-e]', clique: true, garante: function () { P0(); SIMEN.ad('d').ativo = true }, tit: T('O Boné: Em análise', 'La Gorra: En revisión'), txt: T('O Boné está Em análise, com o ícone de pendente. Clique no status.', 'La Gorra está En revisión, con el ícono de pendiente. Haz clic en el estado.') },
    { alvo: '[data-t=painel-porque]', garante: function () { P0(); SIMEN.ad('d').ativo = true; SIMEN.set({ por: 'e' }) }, tit: T('Esperar a análise', 'Esperar la revisión'), txt: T('Em análise: a Meta verifica se o anúncio segue os Padrões de Publicidade; depois ele fica ativo. Não há o que consertar, só esperar (e conferir se não virou Rejeitado, que é erro). Clique em Próximo.', 'En revisión: Meta verifica si el anuncio cumple las Normas de Publicidad; después queda activo. No hay nada que arreglar, solo esperar (y revisar que no pase a Rechazado, que es un error). Haz clic en Siguiente.') },
    { alvo: '[data-t=tabela-entrega]', fim: true, semVolta: true, garante: function () { P0(); SIMEN.ad('d').ativo = true }, tit: T('Cada ícone tem uma resposta! 🎉', '¡Cada ícono tiene una respuesta! 🎉'), txt: T('Resumo: limite da conta, depois os três níveis (campanha, conjunto, anúncio); Desativado (veja quem pelo histórico), Em análise e Programado (esperar), Rejeitado (corrigir o anúncio), Aprendizado limitado (aviso). E mudanças perto do fim do dia podem atrasar o sistema. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Resumen: límite de la cuenta, luego los tres niveles (campaña, conjunto, anuncio); Desactivado (mira quién en el historial), En revisión y Programado (esperar), Rechazado (corregir el anuncio), Aprendizaje limitado (aviso). Y los cambios cerca del fin del día pueden retrasar al sistema. Haz clic en Terminar. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta.') }
  ];
})();
