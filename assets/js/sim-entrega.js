/* Simulador do Gerenciador de Anúncios › Conjuntos de anúncios: Veiculação, fase de aprendizado e edições significativas — layout fiel, visual da Lojinha.
   Estado no navegador (localStorage "sim.entrega"); nada é enviado à Meta.
   Real (conta de aula, 14–16/10/2026, PT e ES): colunas Veiculação/Entrega, Resultados, Custo por resultado, Orçamento, Valor gasto, Estratégia de lance, filtro Teve veiculação, "Em rascunho", "Ativo", "Em análise", "% gastos na fase de aprendizado" e o limite de gastos da conta.
   Real (Central de Ajuda da Meta, lida em 16/10/2026): fase de aprendizado (cerca de 50 resultados na semana após a última edição significativa; "Aprendizado" e "Aprendizado limitado"; lojas: 17 compras no site e 5 pela Meta) e a lista de edições significativas.
   INVENTADOS para o treino: os conjuntos, os números, o passar dos dias, o prazo de 7 dias para virar "Aprendizado limitado" e o limiar de 50% do orçamento. A caixa "Por que não veicula?" é do simulador (a conferir).
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
  function inicial() { return { ads: [mk('a', 'Caneca azul · Brasil', 25, 9, 0, 0), mk('b', 'Camiseta Montanha · Brasil', 15, 3, 0, 0), mk('c', 'Ecobag Folha · Brasil', 10, 6, 0, 0)], dia: 0, ed: null, aviso: '', limite: false } }
  function exemplo() { var s = inicial(); s.ads = [mk('a', 'Caneca azul · Brasil', 25, 9, 27, 3), mk('b', 'Camiseta Montanha · Brasil', 15, 3, 9, 3), mk('c', 'Ecobag Folha · Brasil', 10, 6, 18, 3)]; return s }
  function problema() {
    var s = exemplo(); s.ads = [mk('a', 'Caneca azul · Brasil', 25, 9, 60, 9), mk('d', 'Ecobag Folha · Brasil', 10, 6, 18, 3), mk('e', 'Boné Azul · Brasil', 12, 4, 0, 0), mk('f', 'Moletom Marinho · Brasil', 20, 5, 0, 0)];
    s.ads[1].ativo = false; s.ads[2].extra = 'analise'; s.ads[3].extra = 'programado'; s.limite = true; return s;
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
  function motivo(a) {
    var s = st(a);
    if (s === 'Desativado') return 'Este conjunto está desativado (por você ou por uma regra automatizada). Para voltar a veicular, ative-o.';
    if (s === 'Em análise') return 'Em análise: a Meta avisa se o anúncio atende aos Padrões de Publicidade em até 24 horas.';
    if (s === 'Programado') return 'Programado: a data de início ainda não chegou (começa amanhã).';
    if (S.limite) return 'A conta quase atingiu o limite de gastos. Aumente, redefina ou remova o limite para manter os anúncios em veiculação.';
    return 'Este conjunto está veiculando.';
  }
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento do Gerenciador de Anúncios · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function pctApr() { var tot = 0, apr = 0; S.ads.forEach(function (a) { var g = a.gasto; tot += g; if (/^Aprendizado/.test(st(a))) apr += g }); return tot ? Math.round(apr / tot * 100) : 0 }

  function tabela() {
    var linhas = S.ads.map(function (a) {
      var s = st(a), cl = s === 'Ativo' ? 'vd' : /^Aprendizado/.test(s) ? 'am' : '';
      return '<tr data-t="adset-' + a.id + '"><td><label class="rg-sw"><input type="checkbox" data-liga="' + a.id + '"' + (a.ativo ? ' checked' : '') + '/></label></td><td><b>' + esc(a.nome) + '</b><br><small>' + esc(a.pub) + ' · ' + esc(a.lance) + '</small></td>' +
        '<td data-t="status-' + a.id + '"><span class="ga-tag ' + cl + '">' + (s === 'Ativo' ? '● ' : '') + s + '</span> <button class="btn sec en-p" data-porque="' + a.id + '" data-t="btn-porque-' + a.id + '">?</button></td>' +
        '<td>' + a.res + '</td><td>' + (a.res ? brl(a.gasto / (a.res || 1)) : '—') + '</td><td>' + brl(a.orc) + '<br><small>Diário</small></td><td>' + brl(a.gasto) + '</td><td data-t="ult-' + a.id + '">' + esc(a.ult) + '</td>' +
        '<td><button class="btn sec" data-edita="' + a.id + '" data-t="btn-edita-' + a.id + '">Editar</button></td></tr>';
    }).join('');
    return '<table class="cm-tab" data-t="tabela-entrega"><thead><tr><th>Ativo</th><th>Conjunto de anúncios</th><th>Veiculação</th><th>Resultados (desde a última edição significativa)</th><th>Custo por resultado</th><th>Orçamento</th><th>Valor gasto</th><th>Última edição significativa</th><th></th></tr></thead><tbody>' + linhas + '</tbody></table>';
  }
  function painelPorque() {
    if (!S.por) return ''; var a = S.ads.filter(function (x) { return x.id === S.por })[0]; if (!a) return '';
    return '<div class="ga-aviso" data-t="painel-porque"><b>Por que ' + esc(a.nome) + ' está “' + st(a) + '”?</b><br>' + esc(motivo(a)) + '<br><small>Esta explicação é do simulador, montada a partir das mensagens reais e da Central de Ajuda (a conferir).</small></div>';
  }
  function painelEdicao() {
    var e = S.ed; if (!e) return ''; var a = S.ads.filter(function (x) { return x.id === e.id })[0];
    var sel = function (id, op, v, t) { return '<select class="ga-in" id="' + id + '" data-t="' + t + '">' + op.map(function (o) { return '<option value="' + o + '"' + (o === v ? ' selected' : '') + '>' + o + '</option>' }).join('') + '</select>' };
    return '<div class="ga-fundo"><div class="ga-jan fd-jan" data-t="jan-edicao"><h2>Editar conjunto de anúncios</h2><p class="miudo">' + esc(a.nome) + '</p>' +
      '<p><b>Orçamento diário (R$)</b></p><input class="ga-in rg-v" id="enOrc" value="' + esc(e.orc) + '" data-t="en-orcamento"/>' +
      '<p><b>Público</b></p>' + sel('enPub', PUBLICOS, e.pub, 'en-publico') + '<p><b>Criativo do anúncio</b></p>' + sel('enCri', CRIATIVOS, e.cri, 'en-criativo') +
      '<p><b>Evento de otimização</b></p>' + sel('enEv', EVENTOS, e.ev, 'en-evento') + '<p><b>Estratégia de lance</b></p>' + sel('enLance', LANCES, e.lance, 'en-lance') +
      '<label class="ga-lin"><input type="checkbox" id="enNovo"' + (e.novo ? ' checked' : '') + ' data-t="en-novo-anuncio"/><span><b>Adicionar um novo anúncio a este conjunto</b></span></label>' +
      '<p class="miudo">Pela Central de Ajuda, mudar o direcionamento (público), o criativo, o evento de otimização, a estratégia de lance, adicionar um anúncio ou pausar por 7 dias ou mais são edições significativas. Mudar o orçamento “poderá ou não” ser: depende do tamanho. <b>No simulador, uma mudança de 50% ou mais no orçamento conta como significativa.</b></p>' +
      '<div class="rodape-jan"><button class="btn sec" data-acao="cancela-ed" data-t="btn-cancela-ed">Cancelar</button><button class="btn" data-acao="publica-ed" data-t="btn-publica-ed">Publicar</button></div></div></div>';
  }
  function pagina() {
    return casca('<div class="ss"><nav class="ss-nav"><button class="ss-it" disabled>📣 Campanhas</button><button class="ss-it on">👥 Conjuntos de anúncios</button><button class="ss-it" disabled>🖼️ Anúncios</button><button class="ss-it" disabled>📊 Relatórios</button></nav><main class="ss-main"><div class="ss-topo"><div><h1>Conjuntos de anúncios</h1><p class="ss-sub">Lojinha da Marina Aula (123456789) · Dia ' + S.dia + ' do simulador</p></div><div class="ss-bt"><button class="btn sec" data-acao="dia" data-t="btn-dia">Avançar 1 dia (simulador)</button><button class="btn sec" data-acao="dia7" data-t="btn-dia7">Avançar 7 dias (simulador)</button></div></div>' +
      (S.limite ? '<div class="ga-aviso verm" data-t="aviso-limite"><b>Você quase atingiu o limite de gastos que definiu para essa conta de anúncios.</b> Aumente, redefina ou remova o limite para manter seus anúncios em veiculação. <a>Aumentar limite</a></div>' : '') +
      '<div class="ga-aviso" data-t="card-aprendizado"><b>% gastos na fase de aprendizado:</b> ' + pctApr() + '% <small>(quanto do dinheiro gasto está em conjuntos que ainda aprendem)</small></div>' +
      (S.aviso ? '<div class="ga-aviso" data-t="aviso-edicao">' + esc(S.aviso) + '</div>' : '') + tabela() + painelPorque() +
      '<p class="conferido">✓ Colunas, status “Ativo/Em análise/Rascunho”, o card “% gastos na fase de aprendizado” e o aviso de limite de gastos conferidos com o Gerenciador real em ' + CONF + '. ⚠ Os conjuntos, os números, o passar dos dias e a caixa “Por que não veicula?” são do simulador (a conferir).</p></main></div>' + painelEdicao());
  }
  function avanca(n) { S.ads.forEach(function (a) { if (!a.ativo || a.extra) return; for (var i = 0; i < n; i++) { a.res += a.taxa; a.dias++; a.gasto += a.orc * 0.9 } a.ult = 'há ' + a.dias + ' dias' }); S.dia += n }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-porque]'))) { S.por = S.por === c.getAttribute('data-porque') ? '' : c.getAttribute('data-porque'); grava(); render(); return }
    if ((c = t.closest('[data-edita]'))) { var a = S.ads.filter(function (x) { return x.id === c.getAttribute('data-edita') })[0]; S.ed = { id: a.id, orc: String(a.orc), pub: a.pub, cri: a.cri, ev: a.ev, lance: a.lance, novo: false }; S.aviso = ''; grava(); render(); return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-acao');
    if (ac === 'dia') avanca(1); else if (ac === 'dia7') avanca(7);
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
    { alvo: '[data-t=btn-porque-b]', clique: true, garante: function () { SIMEN.exemplo(); SIMEN.avanca(7) }, tit: T('Entender o status', 'Entender el estado'), txt: T('Clique no “?” para ver a explicação do status.', 'Haz clic en el “?” para ver la explicación del estado.') },
    { alvo: '[data-t=painel-porque]', garante: function () { SIMEN.exemplo(); SIMEN.avanca(7); SIMEN.set({ por: 'b' }) }, tit: T('O que fazer', 'Qué hacer'), txt: T('Segundo as boas práticas da Central de Ajuda: usar orçamentos realistas (nem baixo demais nem inflado), evitar edições desnecessárias, e combinar conjuntos de anúncios semelhantes, porque assim os aprendizados também se combinam. Clique em Próximo.', 'Según las buenas prácticas del Centro de ayuda: usar presupuestos realistas (ni demasiado bajos ni inflados), evitar ediciones innecesarias y combinar conjuntos de anuncios parecidos, porque así los aprendizajes también se combinan. Haz clic en Siguiente.') },
    { alvo: '[data-t=tabela-entrega]', fim: true, semVolta: true, garante: function () { SIMEN.exemplo(); SIMEN.avanca(7) }, tit: T('Limitado não é erro! 🎉', '¡Limitado no es un error! 🎉'), txt: T('Aprendizado limitado é um aviso de que faltam resultados, não um defeito. O caminho é dar ao conjunto condições de aprender (orçamento realista, poucas edições, conjuntos combinados). Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Aprendizaje limitado es un aviso de que faltan resultados, no un defecto. El camino es darle al conjunto condiciones de aprender (presupuesto realista, pocas ediciones, conjuntos combinados). Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['nao-veicula'] = [
    { antes: function () { SIMEN.problema() }, alvo: '[data-t=tabela-entrega]', garante: function () { SIMEN.problema() }, tit: T('“Meus anúncios não rodam!”', '“¡Mis anuncios no corren!”'), txt: T('A Marina diz que três conjuntos não estão veiculando. Para cada um, olhe a coluna Veiculação e use o “?”. Na Central de Ajuda, a solução de problemas começa pelo nível certo: campanha, conjunto de anúncios ou anúncio. Aqui vamos pelos conjuntos. Clique em Próximo.', 'Marina dice que tres conjuntos no están entregando. Para cada uno, mira la columna Entrega y usa el “?”. En el Centro de ayuda, la solución de problemas empieza por el nivel correcto: campaña, conjunto de anuncios o anuncio. Aquí vamos por los conjuntos. Haz clic en Siguiente.') },
    { alvo: '[data-t=aviso-limite]', garante: function () { SIMEN.problema() }, tit: T('Primeiro, a conta', 'Primero, la cuenta'), txt: T('No topo, um aviso real da conta: ela quase atingiu o limite de gastos. Quando o limite é atingido, os anúncios param de veicular. É a primeira coisa a conferir. Clique em Próximo.', 'Arriba, un aviso real de la cuenta: casi alcanzó el límite de gastos. Cuando se alcanza el límite, los anuncios dejan de entregar. Es lo primero que hay que revisar. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-porque-d]', clique: true, garante: function () { SIMEN.problema() }, tit: T('A Ecobag: Desativado', 'La Ecobag: Desactivado'), txt: T('A Ecobag está Desativada. Clique no “?” dela.', 'La Ecobag está Desactivada. Haz clic en su “?”.') },
    { alvo: '[data-t=painel-porque]', garante: function () { SIMEN.problema(); SIMEN.set({ por: 'd' }) }, tit: T('Quem desativou?', '¿Quién la desactivó?'), txt: T('Desativado: por você ou por uma regra automatizada. Se ninguém mexeu, olhe as Regras automatizadas (módulo anterior). Aqui vamos ativar de novo. Clique em Próximo.', 'Desactivado: por ti o por una regla automática. Si nadie lo tocó, mira las Reglas automáticas (módulo anterior). Aquí vamos a activarlo de nuevo. Haz clic en Siguiente.') },
    { alvo: '[data-t=adset-d] input', clique: true, garante: function () { SIMEN.problema(); SIMEN.set({ por: 'd' }) }, tit: T('Ativar', 'Activar'), txt: T('Ligue o interruptor da Ecobag.', 'Activa el interruptor de la Ecobag.') },
    { alvo: '[data-t=status-e]', garante: function () { SIMEN.problema(); SIMEN.ad('d').ativo = true }, tit: T('O Boné: Em análise', 'La Gorra: En revisión'), txt: T('O Boné está Em análise: a tela real diz que a Meta avisa se o anúncio atende aos Padrões de Publicidade em até 24 horas. Não há o que “consertar”: é esperar (e confirmar que o anúncio não foi recusado). Clique em Próximo.', 'La Gorra está En revisión: la pantalla real dice que Meta avisa si el anuncio cumple las Normas de Publicidad en un plazo de 24 horas. No hay nada que “arreglar”: es esperar (y confirmar que el anuncio no fue rechazado). Haz clic en Siguiente.') },
    { alvo: '[data-t=status-f]', garante: function () { SIMEN.problema(); SIMEN.ad('d').ativo = true }, tit: T('O Moletom: Programado', 'El Buzo: Programado'), txt: T('O Moletom está Programado: a data de início ainda não chegou. Também não é defeito. Nesta tela do simulador, só o tempo resolve. Clique em Próximo.', 'El Buzo está Programado: la fecha de inicio todavía no llegó. Tampoco es un defecto. En esta pantalla del simulador, solo el tiempo lo resuelve. Haz clic en Siguiente.') },
    { alvo: '[data-t=tabela-entrega]', fim: true, semVolta: true, garante: function () { SIMEN.problema(); SIMEN.ad('d').ativo = true }, tit: T('Cada status tem uma resposta! 🎉', '¡Cada estado tiene una respuesta! 🎉'), txt: T('Resumo: limite da conta, Desativado (por quem?), Em análise (esperar até 24 horas), Programado (data de início). Só depois, pense em orçamento baixo ou aprendizado limitado. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Resumen: límite de la cuenta, Desactivado (¿por quién?), En revisión (esperar hasta 24 horas), Programado (fecha de inicio). Solo después, piensa en presupuesto bajo o aprendizaje limitado. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
