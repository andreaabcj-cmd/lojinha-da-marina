/* Simulador do Gerenciador de Anúncios › Relatórios de Anúncios (tabela dinâmica, detalhamentos, métricas, atribuição) — layout fiel, visual da Lojinha.
   Estado no navegador (localStorage "sim.relatorios"); nada é enviado à Meta.
   Textos copiados das telas reais (conta de aula, 16/10/2026), em português e em espanhol (?locale=es_LA).
   Os números da conta de aula (alcance 69, impressões 71, frequência 1,03, valor gasto R$ 2,77) são REAIS, do anúncio de teste. A divisão por idade, plataforma e posicionamento,
   a campanha de exemplo (?exemplo=1) e a troca de janela de atribuição dentro do relatório são INVENTADAS para o treino (a conferir).
   URL: meta-relatorios.html?zerar=1 · ?exemplo=1 (soma uma campanha de exemplo com compras) · ?vazio=1 (período sem atividade) · ?roas=1 (por campanha: gasto, compras, custo por compra)
   Tutoriais (tour.js): ?tour=ler-relatorio | montar-relatorio | comparar-atribuicao | relatorio-vazio | calcular-roas (caixinha de conta só do treino) */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function num(n, d) { return n.toFixed(d || 0).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.') }
  function pct(n) { return n.toFixed(2).replace('.', ',') + '%' }
  function brl(n) { return 'R$ ' + n.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d),)/g, '.') }

  /* ---------- dados: [impressões, alcance, cliques no link, gasto, compras, valor das compras] ---------- */
  var REAL = { camp: 'Post: “🧪 TESTE de treinamento…”', conj: 'Engajamento com o post', anu: 'Anúncio do post turbinado', tot: [71, 69, 3, 2.77, 0, 0],
    plat: { 'Facebook': [52, 51, 2, 2.03, 0, 0], 'Instagram': [19, 19, 1, 0.74, 0, 0] },
    pos: { 'Feed do Facebook': [40, 40, 2, 1.56, 0, 0], 'Reels do Facebook': [12, 12, 0, 0.47, 0, 0], 'Stories do Instagram': [12, 12, 1, 0.47, 0, 0], 'Feed do Instagram': [7, 7, 0, 0.27, 0, 0] },
    idade: { '18-24': [10, 10, 0, 0.39, 0, 0], '25-34': [28, 28, 2, 1.09, 0, 0], '35-44': [21, 21, 1, 0.82, 0, 0], '45-54': [12, 12, 0, 0.47, 0, 0] },
    pais: { 'Brasil': [71, 69, 3, 2.77, 0, 0] }, regiao: { 'São Paulo': [64, 62, 3, 2.5, 0, 0], 'Rio de Janeiro': [4, 4, 0, 0.17, 0, 0], 'Minas Gerais': [3, 3, 0, 0.1, 0, 0] },
    dia: { '15 de out de 2026': [71, 69, 3, 2.77, 0, 0] } };
  var EXEMPLO = { camp: 'Vendas · Caneca azul (exemplo)', conj: 'Brasil · 18 a 54 anos (exemplo)', anu: 'Anúncio da Caneca azul (exemplo)', tot: [18400, 11200, 410, 312.5, 14, 700],
    plat: { 'Facebook': [11000, 6900, 230, 187.5, 9, 450], 'Instagram': [7400, 4700, 180, 125, 5, 250] },
    pos: { 'Feed do Facebook': [7000, 4500, 150, 120, 6, 300], 'Reels do Facebook': [4000, 2600, 80, 67.5, 3, 150], 'Stories do Instagram': [4200, 2800, 110, 70, 2, 100], 'Feed do Instagram': [3200, 2000, 70, 55, 3, 150] },
    idade: { '18-24': [3000, 2100, 60, 50, 1, 50], '25-34': [7600, 4700, 180, 130, 7, 360], '35-44': [5200, 3300, 120, 90, 4, 200], '45-54': [2600, 1700, 50, 42.5, 2, 90] },
    pais: { 'Brasil': [18400, 11200, 410, 312.5, 14, 700] }, regiao: { 'São Paulo': [16800, 10200, 380, 285, 13, 650], 'Rio de Janeiro': [900, 580, 18, 16, 1, 50], 'Minas Gerais': [700, 420, 12, 11.5, 0, 0] },
    dia: { '15 de out de 2026': [620, 600, 14, 10.5, 1, 50] } };
  var JANELAS = { 'Clique de 7 dias ou visualização de 1 dia': 1, 'Clique de 7 dias': 0.86, 'Clique de 1 dia': 0.57 };
  var PERIODOS = ['Hoje', 'Ontem', 'Últimos 7 dias', 'Últimos 30 dias', 'Este mês', 'Mês passado'];
  var COM_DADOS = { 'Ontem': 1, 'Últimos 7 dias': 1, 'Últimos 30 dias': 1, 'Este mês': 1 };
  var DET = [['conta', 'Nome da conta'], ['camp', 'Nome da campanha'], ['conj', 'Nome do conjunto de anúncios'], ['anu', 'Nome do anúncio'], ['idade', 'Idade'], ['pais', 'País'], ['regiao', 'Região'], ['plat', 'Plataforma'], ['pos', 'Posicionamento'], ['dia', 'Dia']];
  var NIVEL = { conta: 1, camp: 1, conj: 1, anu: 1 };
  // explicação que a tela real mostra ao passar o mouse (Relatórios de Anúncios, 23/10/2026)
  var DICA_DET = { regiao: 'Visualize seus dados pela região (como estado ou província) onde as pessoas moram ou estavam localizadas quando viram seus anúncios, dependendo de como você definiu seu direcionamento de localização. Esses valores são estimados.' };
  var MET = [['alcance', 'Alcance'], ['impr', 'Impressões'], ['freq', 'Frequência'], ['gasto', 'Valor gasto'], ['atrib', 'Configuração de atribuição'], ['cliques', 'Cliques no link'], ['cpc', 'CPC (custo por clique no link)'], ['ctr', 'CTR (taxa de cliques no link)'], ['cpm', 'CPM (custo por 1.000 impressões)'], ['compras', 'Compras'], ['cpa', 'Custo por compra'], ['valor', 'Valor de conversão da compra']];
  var NOME_MET = {}; MET.forEach(function (m) { NOME_MET[m[0]] = m[1] });

  function inicial() { return { dims: ['conta'], mets: ['alcance', 'impr', 'freq', 'gasto', 'atrib'], periodo: 'Este mês', teve: true, janela: 'Clique de 7 dias ou visualização de 1 dia', exemplo: false, panel: false, tab: 'det', data: false } }
  var S = ler('sim.relatorios', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('exemplo')) { S = inicial(); S.exemplo = true; S.mets = ['alcance', 'impr', 'freq', 'gasto', 'atrib', 'compras', 'cpa'] }
  if (params.get('vazio')) { S = inicial(); S.periodo = 'Hoje' }
  if (params.get('roas')) { S = inicial(); S.exemplo = true; S.dims = ['camp']; S.mets = ['gasto', 'compras', 'cpa'] }   // Relatórios 06: uma linha por campanha
  function grava() { try { localStorage.setItem('sim.relatorios', JSON.stringify(S)) } catch (e) { } window.__simRl = { S: S } }
  grava();
  function rota() { return (location.hash || '#rel').slice(1) }
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento do Gerenciador de Anúncios · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }

  /* ---------- cálculo ---------- */
  function fontes() { return S.exemplo ? [REAL, EXEMPLO] : [REAL] }
  function soma(a, b) { return a.map(function (x, i) { return x + (b[i] || 0) }) }
  function mult(v) { var f = JANELAS[S.janela] || 1; return [v[0], v[1], v[2], v[3], v[4] * f, v[5] * f] }
  function linhaDe(v, nome) { return { nome: nome, v: mult(v) } }
  function linhas() {
    var dims = S.dims.slice(), seg = dims.filter(function (d) { return !NIVEL[d] })[0], niv = dims.filter(function (d) { return NIVEL[d] })[0];
    var fs = fontes(), out = [];
    function porNivel(f) { return niv === 'camp' ? f.camp : niv === 'conj' ? f.conj : niv === 'anu' ? f.anu : 'Lojinha da Marina Aula' }
    if (!dims.length) return [];
    if (!seg) { // só níveis: uma linha por item
      if (niv === 'conta') { var t = fs.map(function (f) { return f.tot }).reduce(soma); out.push(linhaDe(t, 'Lojinha da Marina Aula')) }
      else fs.forEach(function (f) { out.push(linhaDe(f.tot, porNivel(f))) });
    } else if (!niv || niv === 'conta') { // só um detalhamento: soma de todas as campanhas
      var ch = Object.keys(REAL[seg]); ch.forEach(function (k) { var v = fs.map(function (f) { return f[seg][k] }).reduce(soma); out.push(linhaDe(v, k)) });
      if (S.exemplo && seg === 'dia') { }
    } else { // nível + detalhamento: grupos por campanha/conjunto/anúncio
      fs.forEach(function (f) { Object.keys(f[seg]).forEach(function (k) { out.push(linhaDe(f[seg][k], porNivel(f) + ' · ' + k)) }) });
    }
    return out;
  }
  function totais() { var t = fontes().map(function (f) { return f.tot }).reduce(soma); return mult(t) }
  function celula(m, v, total) {
    var impr = v[0], reach = v[1], cl = v[2], g = v[3], cp = v[4], val = v[5];
    switch (m) {
      case 'alcance': return num(reach);
      case 'impr': return num(impr);
      case 'freq': return reach ? (impr / reach).toFixed(2).replace('.', ',') : '—';
      case 'gasto': return brl(g);
      case 'atrib': return S.janela;
      case 'cliques': return num(cl);
      case 'cpc': return cl ? brl(g / cl) : '—';
      case 'ctr': return impr ? pct(cl / impr * 100) : '—';
      case 'cpm': return impr ? brl(g / impr * 1000) : '—';
      case 'compras': return cp ? num(cp, 0) : '0';
      case 'cpa': return cp >= 0.5 ? brl(g / Math.round(cp)) : '—';
      case 'valor': return brl(val);
    }
    return '';
  }
  function legendaTotal(m) { return { alcance: 'Contas Meta', impr: 'Total', freq: 'Por Conta Meta', gasto: 'Total usado' }[m] || '' }

  /* ---------- tela ---------- */
  function painel() {
    if (!S.panel) return '';
    var det = S.tab === 'det';
    var lista = det ? DET : MET.filter(function (m) { return m[0] !== 'atrib' });
    var marcados = det ? S.dims : S.mets;
    return '<aside class="rl-pn" data-t="painel"><div class="rl-pn-t"><b>Personalizar tabela dinâmica</b><button class="btn sec" data-acao="fecha-painel" data-t="btn-fechar-painel">Fechar</button></div>' +
      '<div class="fd-abas"><button class="fd-aba' + (det ? ' on' : '') + '" data-tab="det" data-t="tab-det">Detalhamentos</button><button class="fd-aba' + (!det ? ' on' : '') + '" data-tab="met" data-t="tab-met">Métricas</button></div>' +
      '<p class="miudo">' + (det ? 'Detalhamentos populares' : 'Métricas populares') + '</p>' +
      lista.map(function (x) { var on = marcados.indexOf(x[0]) >= 0; return '<label class="ga-lin' + (on ? ' on' : '') + '" data-t="chk-' + (det ? 'det-' : 'met-') + x[0] + '"' + (det && DICA_DET[x[0]] ? ' title="' + DICA_DET[x[0]] + '"' : '') + '><input type="checkbox" data-' + (det ? 'det' : 'met') + '="' + x[0] + '"' + (on ? ' checked' : '') + '/><span><b>' + x[1] + '</b></span></label>' }).join('') +
      (det ? '<p class="miudo">No simulador, a tabela combina um nível (conta, campanha, conjunto ou anúncio) com um detalhamento por vez (a tela real combina mais).</p>' : '<p class="miudo">A tela real tem dezenas de métricas em grupos (Desempenho, Engajamento, Conversões…). Aqui estão as principais.</p>') + '</aside>';
  }
  function tabela() {
    var ls = linhas(), tot = totais(), ativ = tot[0] > 0, per = S.periodo, tem = !!COM_DADOS[per];
    var ths = '<th>' + (S.dims.length ? S.dims.map(function (d) { return DET.filter(function (x) { return x[0] === d })[0][1] }).join(' · ') : 'Detalhamento') + '</th>' + S.mets.map(function (m) { return '<th>' + NOME_MET[m] + '</th>' }).join('');
    if (!tem && S.teve) return '<div class="rg-vazio" data-t="sem-atividade"><div class="ilus">📭</div><b>Nenhuma atividade durante o intervalo de datas selecionado</b><p>Selecione um intervalo de datas diferente e pesquise novamente.</p><button class="btn" data-acao="alterar-data" data-t="btn-alterar-data">Alterar data</button></div>';
    var corpo;
    if (!tem) { corpo = '<tr><td>Lojinha da Marina Aula</td>' + S.mets.map(function (m) { return '<td>' + (m === 'atrib' ? esc(S.janela) : m === 'cpc' || m === 'ctr' || m === 'cpm' || m === 'cpa' ? '—' : m === 'gasto' || m === 'valor' ? 'R$ 0,00' : '0') + '</td>' }).join('') + '</tr>' }
    else corpo = ls.map(function (l) { return '<tr><td><b>' + esc(l.nome) + '</b></td>' + S.mets.map(function (m) { return '<td>' + esc(celula(m, l.v)) + '</td>' }).join('') + '</tr>' }).join('');
    var rod = tem ? '<tr class="rl-tot" data-t="linha-total"><td>Total</td>' + S.mets.map(function (m) { var lg = legendaTotal(m); return '<td><b>' + esc(celula(m, tot)) + '</b>' + (lg ? '<small>' + lg + '</small>' : '') + '</td>' }).join('') + '</tr>' : '';
    return '<div class="rl-scroll"><table class="cm-tab" data-t="tabela"><thead><tr>' + ths + '</tr></thead><tbody>' + corpo + rod + '</tbody></table></div><p class="miudo">' + (tem ? '1/1 linha exibida'.replace('1/1', ls.length + '/' + ls.length) : '0/0 linha exibida') + '</p>';
  }
  function pagina() {
    var per = PERIODOS.map(function (p) { return '<option value="' + p + '"' + (p === S.periodo ? ' selected' : '') + '>' + p + '</option>' }).join('');
    var jan = Object.keys(JANELAS).map(function (j) { return '<option value="' + j + '"' + (j === S.janela ? ' selected' : '') + '>' + j + '</option>' }).join('');
    return casca('<div class="rl"><div class="rl-topo"><div><p class="miudo">Todos os relatórios ›</p><h1>Relatório sem título</h1><p class="miudo">Lojinha da Marina Aula · 1 conta de anúncios</p></div><div class="ss-bt"><button class="btn sec" data-acao="salvar" data-t="btn-salvar">Salvar</button><button class="btn sec" data-acao="atualiza" data-t="btn-atualizar">Atualizar</button><button class="btn sec" disabled>Compartilhar</button><button class="btn sec" disabled>Exportar</button></div></div>' +
      '<div class="rl-barra"><label class="rg-sw" data-t="filtro-teve"><input type="checkbox" id="rTeve"' + (S.teve ? ' checked' : '') + '/> Teve veiculação</label><span class="busca">Pesquise para filtrar por: nome, identificação ou métrica</span><label>Período <select class="ga-in" id="rPer" data-t="sel-periodo">' + per + '</select></label>' + (S.mets.indexOf('compras') >= 0 || S.mets.indexOf('atrib') >= 0 ? '<label>Janela de atribuição (simulador) <select class="ga-in" id="rJan" data-t="sel-atrib">' + jan + '</select></label>' : '') + '</div>' +
      '<div class="rl-viz"><span class="ga-tag">Tabela dinâmica</span><button class="btn sec" disabled>Agrupar detalhamentos</button><button class="btn sec" disabled>Redefinir larguras das colunas</button><button class="btn sec" disabled>Formatar</button><button class="btn" data-acao="abre-painel" data-t="btn-personalizar">Personalizar</button></div>' +
      '<div class="rl-corpo"><div class="rl-tab">' + tabela() + '</div>' + painel() + '</div>' +
      (S.salvo ? '<p class="ga-aviso" data-t="aviso-salvo">Relatório salvo (simulador). Na tela real o relatório passa a aparecer em Todos os relatórios (a conferir).</p>' : '') + calc() +
      '<p class="conferido' + '">✓ Colunas, total e lista de detalhamentos e métricas conferidos com os Relatórios de Anúncios reais em ' + CONF + '. ⚠ Divisões por idade/plataforma/posicionamento, a campanha de exemplo e a janela de atribuição aqui são inventadas para o treino (a conferir).</p></div>');
  }
  /* caixinha de conta do treino (Relatórios 06): não existe na tela real — lá a coluna “ROAS de compras” já faz a conta */
  function roasCerto(txt) { var n = Number(String(txt || '').replace(',', '.')); return Math.abs(n - 700 / 312.5) < 0.011 }
  function calc() {
    if (!S.calc) return '';
    var ok = roasCerto(S.roasTxt), tem = String(S.roasTxt || '').trim();
    return '<div class="ga-aviso" data-t="calc-roas"><b>🧮 Conta do treino (só no simulador)</b><br><small>ROAS de compras = Valor de conversão da compra ÷ Valor gasto. Use os números da linha da campanha de Vendas.</small>' +
      '<p><label>ROAS = <input class="ga-in" id="rRoas" inputmode="decimal" style="width:110px;display:inline-block" value="' + esc(S.roasTxt || '') + '" data-t="calc-in"/></label> ' +
      (tem ? (ok ? '<b>✅ Isso! 700 ÷ 312,50 = 2,24</b>' : '<b>❌ Ainda não: divida o valor vendido pelo valor gasto.</b>') : '') + '</p></div>';
  }
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simRl = { S: S };
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); grava(); render(); return }
    var a = t.closest('[data-acao]'); if (!a || a.disabled) return;
    var ac = a.getAttribute('data-acao');
    if (ac === 'abre-painel') S.panel = true; else if (ac === 'fecha-painel') S.panel = false;
    else if (ac === 'alterar-data') { S.periodo = 'Últimos 30 dias'; S.data = true }
    else if (ac === 'salvar') S.salvo = true; else if (ac === 'atualiza') { }
    else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target, k;
    if (t.getAttribute && (k = t.getAttribute('data-det'))) { var i = S.dims.indexOf(k); if (i >= 0) S.dims.splice(i, 1); else S.dims.push(k) }
    else if (t.getAttribute && (k = t.getAttribute('data-met'))) { var j = S.mets.indexOf(k); if (j >= 0) S.mets.splice(j, 1); else S.mets.push(k) }
    else if (t.id === 'rTeve') S.teve = t.checked; else if (t.id === 'rPer') S.periodo = t.value; else if (t.id === 'rJan') S.janela = t.value;
    else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) { if (ev.target.id !== 'rRoas') return; S.roasTxt = ev.target.value; grava(); render() });
  render();
  window.SIMRL = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() } };

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function rl() { return window.__simRl ? window.__simRl.S : S }
  TOURS['ler-relatorio'] = [
    { alvo: '[data-t=tabela]', garante: function () { SIMRL.zera(); }, tit: T('A tabela dinâmica', 'La tabla dinámica'), txt: T('Este é o relatório padrão dos Relatórios de Anúncios: uma tabela dinâmica da conta, no período Este mês. As colunas padrão são Alcance, Impressões, Frequência, Valor gasto e Configuração de atribuição. Clique em Próximo.', 'Este es el informe predeterminado de Informes de anuncios: una tabla dinámica de la cuenta, en el período Este mes. Las columnas predeterminadas son Alcance, Impresiones, Frecuencia, Monto gastado y Configuración de atribución. Haz clic en Siguiente.') },
    { alvo: '[data-t=linha-total]', garante: function () { SIMRL.zera(); }, tit: T('Alcance × Impressões', 'Alcance × Impresiones'), txt: T('Alcance é quantas pessoas (Contas Meta) viram o anúncio: 69. Impressões é quantas vezes o anúncio apareceu: 71. A Frequência é a média de vezes por pessoa: 71 ÷ 69 = 1,03. Esses números são reais, do anúncio de teste. Clique em Próximo.', 'Alcance es cuántas personas (Cuentas de Meta) vieron el anuncio: 69. Impresiones es cuántas veces apareció el anuncio: 71. La Frecuencia es el promedio de veces por persona: 71 ÷ 69 = 1,03. Estos números son reales, del anuncio de prueba. Haz clic en Siguiente.') },
    { alvo: '[data-t=linha-total]', garante: function () { SIMRL.zera(); }, tit: T('Valor gasto', 'Monto gastado'), txt: T('O Valor gasto do período foi R$ 2,77 (rótulo “Total usado”). É o dinheiro que a Meta de fato cobrou, não o orçamento de R$ 5,27 que a Marina definiu para o dia. Clique em Próximo.', 'El Monto gastado del período fue R$ 2,77 (etiqueta “Total usado”). Es el dinero que Meta realmente cobró, no el presupuesto de R$ 5,27 que Marina definió para el día. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-periodo]', garante: function () { SIMRL.zera(); }, cond: function () { return rl().periodo !== 'Este mês' }, tit: T('O período', 'El período'), txt: T('Todo número depende do período. Troque o período para “Últimos 7 dias” e veja que o total continua igual (o anúncio rodou só em um dia).', 'Todo número depende del período. Cambia el período a “Últimos 7 días” y verás que el total sigue igual (el anuncio corrió solo un día).'), dica: T('Escolha “Últimos 7 dias”.', 'Elige “Últimos 7 días”.') },
    { alvo: '[data-t=tabela]', fim: true, semVolta: true, garante: function () { SIMRL.set({ periodo: 'Últimos 7 dias' }) }, tit: T('Você lê o relatório! 🎉', '¡Ya lees el informe! 🎉'), txt: T('Alcance conta pessoas, Impressões conta vezes, Frequência é a média e Valor gasto é o que foi cobrado; sempre olhe o período. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Alcance cuenta personas, Impresiones cuenta veces, Frecuencia es el promedio y Monto gastado es lo que se cobró; siempre mira el período. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['montar-relatorio'] = [
    { alvo: '[data-t=btn-personalizar]', clique: true, garante: function () { SIMRL.zera(); }, tit: T('Personalizar', 'Personalizar'), txt: T('A Marina quer ver o desempenho por campanha e por plataforma, com cliques e compras. Tudo isso se monta em Personalizar. Clique nele.', 'Marina quiere ver el rendimiento por campaña y por plataforma, con clics y compras. Todo eso se arma en Personalizar. Haz clic en él.') },
    { alvo: '[data-t=chk-det-camp]', garante: function () { SIMRL.zera(); SIMRL.set({ panel: true, tab: 'det' }) }, cond: function () { return rl().dims.indexOf('camp') >= 0 }, tit: T('Detalhamento: campanha', 'Desglose: campaña'), txt: T('Em Detalhamentos, marque “Nome da campanha”. Detalhamento é como o relatório divide os números: por campanha, por idade, por plataforma…', 'En Desgloses, marca “Nombre de la campaña”. Desglose es cómo el informe divide los números: por campaña, por edad, por plataforma…'), dica: T('Marque “Nome da campanha”.', 'Marca “Nombre de la campaña”.') },
    { alvo: '[data-t=chk-det-plat]', garante: function () { SIMRL.set({ panel: true, tab: 'det', dims: ['conta', 'camp'] }) }, cond: function () { return rl().dims.indexOf('plat') >= 0 }, tit: T('Detalhamento: plataforma', 'Desglose: plataforma'), txt: T('Agora marque também “Plataforma” (Facebook e Instagram).', 'Ahora marca también “Plataforma” (Facebook e Instagram).'), dica: T('Marque “Plataforma”.', 'Marca “Plataforma”.') },
    { alvo: '[data-t=tab-met]', clique: true, garante: function () { SIMRL.set({ panel: true, tab: 'det', dims: ['conta', 'camp', 'plat'] }) }, tit: T('Agora as métricas', 'Ahora las métricas'), txt: T('Os detalhamentos dividem; as métricas são os números. Clique na aba Métricas.', 'Los desgloses dividen; las métricas son los números. Haz clic en la pestaña Métricas.') },
    { alvo: '[data-t=chk-met-cliques]', garante: function () { SIMRL.set({ panel: true, tab: 'met', dims: ['conta', 'camp', 'plat'] }) }, cond: function () { return rl().mets.indexOf('cliques') >= 0 }, tit: T('Métrica: cliques no link', 'Métrica: clics en el enlace'), txt: T('Marque “Cliques no link”.', 'Marca “Clics en el enlace”.'), dica: T('Marque “Cliques no link”.', 'Marca “Clics en el enlace”.') },
    { alvo: '[data-t=chk-met-compras]', garante: function () { SIMRL.set({ panel: true, tab: 'met' }) }, cond: function () { return rl().mets.indexOf('compras') >= 0 }, tit: T('Métrica: compras', 'Métrica: compras'), txt: T('Marque também “Compras”. (O anúncio de teste não vendeu nada, então vai mostrar 0: o simulador soma uma campanha de exemplo para você ver números.)', 'Marca también “Compras”. (El anuncio de prueba no vendió nada, así que mostrará 0: el simulador suma una campaña de ejemplo para que veas números.)'), dica: T('Marque “Compras”.', 'Marca “Compras”.') },
    { alvo: '[data-t=btn-fechar-painel]', clique: true, garante: function () { SIMRL.set({ panel: true, exemplo: true }) }, tit: T('Fechar o painel', 'Cerrar el panel'), txt: T('Clique em Fechar para ver a tabela montada.', 'Haz clic en Cerrar para ver la tabla armada.') },
    { alvo: '[data-t=tabela]', fim: true, semVolta: true, garante: function () { SIMRL.set({ panel: false, exemplo: true }) }, tit: T('Relatório montado! 🎉', '¡Informe armado! 🎉'), txt: T('Agora a tabela mostra campanha × plataforma, com cliques e compras. Para guardar, existe o botão Salvar. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora la tabla muestra campaña × plataforma, con clics y compras. Para guardar, existe el botón Guardar. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  // Diagnóstico › Anúncios 05 — detalhamento Região (lista e explicação vistas nos Relatórios de Anúncios reais em 23/10/2026; números do treino inventados)
  var REG = {};
  function reg(o) { SIMRL.zera(); var b = {}; for (var k in REG) b[k] = REG[k]; for (var j in o || {}) b[j] = o[j]; SIMRL.set(b) }
  TOURS['detalhar-regiao'] = [
    { alvo: '[data-t=btn-personalizar]', clique: true, garante: function () { reg() }, tit: T('Onde está o público?', '¿Dónde está el público?'), txt: T('A Marina escolheu São Paulo e diz que aparece gente de Guarulhos e de Osasco. Vamos ver o que o relatório mostra sobre lugar. Clique em Personalizar.', 'Marina eligió São Paulo y dice que aparece gente de Guarulhos y de Osasco. Veamos qué muestra el informe sobre el lugar. Haz clic en Personalizar.') },
    { alvo: '[data-t=chk-det-regiao]', garante: function () { reg({ panel: true, tab: 'det' }) }, cond: function () { return rl().dims.indexOf('regiao') >= 0 }, tit: T('Detalhamento: Região', 'Desglose: Región'), txt: T('Marque “Região”. Na tela real, ao passar o mouse, a Meta explica: Região é o estado ou a província onde a pessoa mora ou estava quando viu o anúncio, e os valores são estimados.', 'Marca “Región”. En la pantalla real, al pasar el mouse, Meta explica: Región es el estado o la provincia donde la persona vive o estaba cuando vio el anuncio, y los valores son estimados.'), dica: T('Marque “Região”.', 'Marca “Región”.') },
    { alvo: '[data-t=btn-fechar-painel]', clique: true, garante: function () { reg({ panel: true, tab: 'det', dims: ['conta', 'regiao'] }) }, tit: T('Fechar o painel', 'Cerrar el panel'), txt: T('Clique em Fechar para ver a tabela.', 'Haz clic en Cerrar para ver la tabla.') },
    { alvo: '[data-t=tabela]', garante: function () { reg({ dims: ['conta', 'regiao'] }) }, tit: T('Estado, não cidade', 'Estado, no ciudad'), txt: T('A tabela mostra São Paulo, Rio de Janeiro e Minas Gerais: são estados. Guarulhos e Osasco ficam dentro de “São Paulo”, então o relatório não separa as cidades vizinhas. E quem é de outro estado entra porque estava em São Paulo quando viu o anúncio. (Os números do treino são inventados.) Clique em Próximo.', 'La tabla muestra São Paulo, Río de Janeiro y Minas Gerais: son estados. Guarulhos y Osasco quedan dentro de “São Paulo”, así que el informe no separa las ciudades vecinas. Y quien es de otro estado entra porque estaba en São Paulo cuando vio el anuncio. (Los números de práctica son inventados.) Haz clic en Siguiente.') },
    { alvo: '[data-t=tabela]', fim: true, semVolta: true, garante: function () { reg({ dims: ['conta', 'regiao'] }) }, tit: T('A causa está no conjunto 🎯', 'La causa está en el conjunto 🎯'), txt: T('Pela Central de Ajuda, ao escolher uma cidade a Meta põe um raio por padrão em volta dela, e o alcance inclui tudo o que fica dentro do raio. Para anunciar só na cidade, no conjunto de anúncios ajuste o raio ou escolha “Apenas a cidade atual”. Confira também a caixa “Alcançar mais pessoas…”. Clique em Concluir.', 'Según el Centro de ayuda, al elegir una ciudad Meta pone un radio predeterminado alrededor, y el alcance incluye todo lo que queda dentro del radio. Para anunciar solo en la ciudad, en el conjunto de anuncios ajusta el radio o elige “Solo ciudad actual”. Revisa también la casilla de alcanzar más personas. Haz clic en Terminar.') }
  ];
  TOURS['comparar-atribuicao'] = [
    { alvo: '[data-t=tabela]', garante: function () { SIMRL.zera(); SIMRL.set({ exemplo: true, mets: ['alcance', 'impr', 'gasto', 'atrib', 'compras', 'cpa'] }) }, tit: T('Compras e atribuição', 'Compras y atribución'), txt: T('Aqui a campanha de exemplo teve 14 compras. De onde elas vêm? A coluna Configuração de atribuição mostra a regra usada para contar: “Clique de 7 dias ou visualização de 1 dia”. Clique em Próximo.', 'Aquí la campaña de ejemplo tuvo 14 compras. ¿De dónde vienen? La columna Configuración de atribución muestra la regla usada para contar: “7 días tras clic o 1 día tras visualización”. Haz clic en Siguiente.') },
    { alvo: '[data-t=tabela]', garante: function () { SIMRL.set({ exemplo: true, mets: ['alcance', 'impr', 'gasto', 'atrib', 'compras', 'cpa'] }) }, tit: T('O que é atribuição', 'Qué es la atribución'), txt: T('Pela Central de Ajuda: ações dentro do anúncio (cliques, visualizações de vídeo) são contadas direto. Ações fora do anúncio, como uma compra no site, são atribuídas ao anúncio se acontecerem dentro de um número de dias, definido na configuração de atribuição do conjunto de anúncios. Clique em Próximo.', 'Según el Centro de ayuda: las acciones dentro del anuncio (clics, reproducciones de video) se cuentan directo. Las acciones fuera del anuncio, como una compra en el sitio, se atribuyen al anuncio si ocurren dentro de un número de días, definido en la configuración de atribución del conjunto de anuncios. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-atrib]', garante: function () { SIMRL.set({ exemplo: true, mets: ['alcance', 'impr', 'gasto', 'atrib', 'compras', 'cpa'], janela: 'Clique de 7 dias ou visualização de 1 dia' }) }, cond: function () { return rl().janela === 'Clique de 1 dia' }, tit: T('Mudar a janela', 'Cambiar la ventana'), txt: T('No simulador, você pode trocar a janela de atribuição para ver o efeito. Escolha “Clique de 1 dia”: só compras feitas até 1 dia depois de um clique contam. (Os números dessa troca são inventados; a tela real compara janelas de outro jeito: a conferir.)', 'En el simulador, puedes cambiar la ventana de atribución para ver el efecto. Elige “Clic de 1 día”: solo cuentan las compras hechas hasta 1 día después de un clic. (Los números de este cambio son inventados; la pantalla real compara ventanas de otra forma: por confirmar.)'), dica: T('Escolha “Clique de 1 dia”.', 'Elige “Clic de 1 día”.') },
    { alvo: '[data-t=tabela]', garante: function () { SIMRL.set({ exemplo: true, mets: ['alcance', 'impr', 'gasto', 'atrib', 'compras', 'cpa'], janela: 'Clique de 1 dia' }) }, tit: T('Menos compras, mesmo anúncio', 'Menos compras, mismo anuncio'), txt: T('As compras caíram (de 14 para cerca de 8) e o custo por compra subiu, mas o anúncio é o mesmo: só mudou a regra de contagem. Por isso, antes de comparar números, confira a janela. Clique em Próximo.', 'Las compras bajaron (de 14 a cerca de 8) y el costo por compra subió, pero el anuncio es el mismo: solo cambió la regla de conteo. Por eso, antes de comparar números, revisa la ventana. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-atrib]', fim: true, semVolta: true, garante: function () { SIMRL.set({ exemplo: true, mets: ['alcance', 'impr', 'gasto', 'atrib', 'compras', 'cpa'], janela: 'Clique de 7 dias ou visualização de 1 dia' }) }, tit: T('Compare igual com igual! 🎉', '¡Compara igual con igual! 🎉'), txt: T('Regra de ouro: duas telas só são comparáveis se usarem a mesma janela de atribuição e o mesmo período. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Regla de oro: dos pantallas solo son comparables si usan la misma ventana de atribución y el mismo período. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  // Relatórios 06 — custo por compra e ROAS (fórmula da Central de Ajuda; colunas ROAS vistas no Gerenciador real em 23/10/2026)
  var VENDAS = { exemplo: true, dims: ['camp'], panel: false, calc: false, roasTxt: '' };
  function base(o) { SIMRL.zera(); var b = {}; for (var k in VENDAS) b[k] = VENDAS[k]; b.mets = ['gasto', 'compras', 'cpa']; for (var j in o || {}) b[j] = o[j]; SIMRL.set(b) }
  var COMV = ['gasto', 'compras', 'cpa', 'valor'];
  TOURS['calcular-roas'] = [
    { alvo: '[data-t=tabela]', garante: function () { base() }, tit: T('“Valeu o dinheiro?”', '“¿Valió el dinero?”'),
      txt: T('Aqui está o relatório por campanha. A campanha de Vendas (exemplo) gastou R$ 312,50 e teve 14 compras. O Custo por compra já vem calculado: 312,50 ÷ 14 ≈ R$ 22,32. Mas falta saber quanto essas compras somaram. Clique em Próximo.', 'Aquí está el informe por campaña. La campaña de Ventas (ejemplo) gastó R$ 312,50 y tuvo 14 compras. El Costo por compra ya viene calculado: 312,50 ÷ 14 ≈ R$ 22,32. Pero falta saber cuánto sumaron esas compras. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-personalizar]', clique: true, garante: function () { base() }, tit: T('Personalizar', 'Personalizar'), txt: T('Clique em Personalizar para escolher mais uma métrica.', 'Haz clic en Personalizar para elegir una métrica más.') },
    { alvo: '[data-t=tab-met]', clique: true, garante: function () { base({ panel: true, tab: 'det' }) }, tit: T('Aba Métricas', 'Pestaña Métricas'), txt: T('Clique na aba Métricas.', 'Haz clic en la pestaña Métricas.') },
    { alvo: '[data-t=chk-met-valor]', garante: function () { base({ panel: true, tab: 'met' }) }, cond: function () { return rl().mets.indexOf('valor') >= 0 },
      tit: T('Valor de conversão da compra', 'Valor de conversión de compras'), txt: T('Marque “Valor de conversão da compra”: é a soma do valor das compras que o Pixel informou.', 'Marca “Valor de conversión de compras”: es la suma del valor de las compras que informó el píxel.'), dica: T('Marque “Valor de conversão da compra”.', 'Marca “Valor de conversión de compras”.') },
    { alvo: '[data-t=btn-fechar-painel]', clique: true, garante: function () { base({ panel: true, tab: 'met', mets: COMV }) }, tit: T('Fechar', 'Cerrar'), txt: T('Clique em Fechar para ver a tabela.', 'Haz clic en Cerrar para ver la tabla.') },
    { alvo: '[data-t=tabela]', garante: function () { base({ mets: COMV }) }, tit: T('R$ 700 em vendas', 'R$ 700 en ventas'), txt: T('Na linha de Vendas: Valor gasto R$ 312,50 e Valor de conversão da compra R$ 700,00. (O anúncio de teste, sem vendas, fica com zero.) Clique em Próximo para fazer a conta.', 'En la fila de Ventas: Monto gastado R$ 312,50 y Valor de conversión de compras R$ 700,00. (El anuncio de prueba, sin ventas, queda en cero.) Haz clic en Siguiente para hacer la cuenta.') },
    { alvo: '[data-t=calc-roas]', garante: function () { base({ mets: COMV, calc: true }) }, cond: function () { return roasCerto(rl().roasTxt) },
      tit: T('Calcule o ROAS', 'Calcula el ROAS'), txt: T('ROAS = Valor de conversão da compra ÷ Valor gasto. Faça a conta com os números da linha de Vendas e digite o resultado com duas casas (ex.: 1,50).', 'ROAS = Valor de conversión de compras ÷ Monto gastado. Haz la cuenta con los números de la fila de Ventas y escribe el resultado con dos decimales (ej.: 1,50).'), dica: T('700 ÷ 312,50.', '700 ÷ 312,50.') },
    { alvo: '[data-t=calc-roas]', fim: true, semVolta: true, garante: function () { base({ mets: COMV, calc: true, roasTxt: '2,24' }) },
      tit: T('ROAS 2,24 🎉', 'ROAS 2,24 🎉'), txt: T('Para cada R$ 1 em anúncio voltaram R$ 2,24 em vendas atribuídas. Lembre a Marina: é venda, não lucro. No Gerenciador de Anúncios, a coluna “ROAS de compras” (Personalizar colunas › Conversões) já mostra essa conta pronta. Clique em Concluir.', 'Por cada R$ 1 en anuncios volvieron R$ 2,24 en ventas atribuidas. Recuérdale a Marina: es venta, no ganancia. En el Administrador de anuncios, la columna “ROAS de compras” (Personalizar columnas › Conversiones) ya muestra esa cuenta lista. Haz clic en Terminar.') }
  ];
  TOURS['relatorio-vazio'] = [
    { alvo: '[data-t=sem-atividade]', garante: function () { SIMRL.zera(); SIMRL.set({ periodo: 'Hoje' }) }, tit: T('“Meu relatório está vazio!”', '“¡Mi informe está vacío!”'), txt: T('A Marina abriu o relatório e a tela diz: “Nenhuma atividade durante o intervalo de datas selecionado”. Antes de achar que perdeu os dados, olhe o período: está em Hoje, e o anúncio rodou ontem. Clique em Próximo.', 'Marina abrió el informe y la pantalla dice: “Ninguna actividad durante el intervalo de fechas seleccionado”. Antes de pensar que perdió los datos, mira el período: está en Hoy, y el anuncio corrió ayer. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-alterar-data]', clique: true, garante: function () { SIMRL.zera(); SIMRL.set({ periodo: 'Hoje' }) }, tit: T('Alterar data', 'Cambiar fecha'), txt: T('Clique em Alterar data. (No simulador, ele passa para Últimos 30 dias; na tela real você escolhe o intervalo.)', 'Haz clic en Cambiar fecha. (En el simulador, pasa a Últimos 30 días; en la pantalla real eliges el intervalo.)') },
    { alvo: '[data-t=tabela]', garante: function () { SIMRL.zera(); SIMRL.set({ periodo: 'Últimos 30 dias' }) }, tit: T('Os dados voltaram', 'Los datos volvieron'), txt: T('Com outro período, os números aparecem: Alcance 69, Impressões 71, Valor gasto R$ 2,77. Os dados nunca sumiram. Clique em Próximo.', 'Con otro período, los números aparecen: Alcance 69, Impresiones 71, Monto gastado R$ 2,77. Los datos nunca desaparecieron. Haz clic en Siguiente.') },
    { alvo: '[data-t=filtro-teve]', garante: function () { SIMRL.set({ periodo: 'Hoje', teve: true }) }, cond: function () { return !rl().teve }, tit: T('O filtro Teve veiculação', 'El filtro Con entrega'), txt: T('Esse filtro esconde contas sem atividade no período. Num período vazio, desmarque “Teve veiculação”: a conta aparece com zeros em vez de uma tela vazia. Desmarque o filtro.', 'Ese filtro oculta cuentas sin actividad en el período. En un período vacío, desmarca “Con entrega”: la cuenta aparece con ceros en lugar de una pantalla vacía. Desmarca el filtro.'), dica: T('Desmarque “Teve veiculação”.', 'Desmarca “Con entrega”.') },
    { alvo: '[data-t=tabela]', fim: true, semVolta: true, garante: function () { SIMRL.set({ periodo: 'Hoje', teve: false }) }, tit: T('Zero não é erro! 🎉', '¡Cero no es un error! 🎉'), txt: T('Agora a conta aparece com zeros: não houve veiculação hoje. Vazio ou zerado quase sempre é período errado ou filtro, não defeito. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora la cuenta aparece con ceros: no hubo entrega hoy. Vacío o en cero casi siempre es período equivocado o filtro, no un defecto. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
