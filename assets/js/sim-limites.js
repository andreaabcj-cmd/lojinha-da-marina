/* Simulador da ferramenta "Limites de anúncios por Página" (Gerenciador de Anúncios › Todas as ferramentas › Anúncios) — layout fiel, visual da Lojinha.
   Estado no navegador (localStorage "sim.limites"); nada é enviado à Meta.
   Real (conta de aula, 23/10/2026, PT e ES; nada salvo): tabela Páginas (Nome, Status "250 anúncios restantes", Anúncios em veiculação ou em análise,
   Limite de anúncios, Identificação), painel da Página (Anúncios restantes, Gerenciar limite de anúncios, Editar → caixas por linha, "0 de 250 alocados",
   avisos ⚠, Cancelar/Salvar; o botão vira Remover), dicas (i) e a ajuda da própria ferramenta (faixas 250/1.000/5.000/20.000, erro 3253001).
   INVENTADOS para o treino: a agência parceira, as quantidades de anúncios, a segunda Página e a Página no limite (status "0 anúncios restantes": a conferir).
   URL: meta-limites.html?zerar=1 (nada no ar) · ?problema=1 (Página da Marina no limite: agência 180 + Marina 70)
   Tutorial (tour.js): ?tour=limite-pagina */
(function () {
  var CONF = '23/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var LIMITE = 250;

  function pg(id, nome, ident, img, parceiros, dono, indiv) { return { id: id, nome: nome, ident: ident, img: img, parceiros: parceiros, dono: dono, indiv: indiv, lim: { dono: null, indiv: null } } }
  function inicial() { return { sel: '', ed: null, dica: '', pgs: [pg('loja', 'Lojinha da Marina - Fictício', '419613737897659', 'assets/img/caneca_01.png', [], 0, 0), pg('canecas', 'Canecas da Marina', '108200450771230', 'assets/img/caneca_02.png', [], 0, 0)] } }
  function problema() { var s = inicial(); s.pgs[0].parceiros = [{ nome: 'Agência Vitrine', n: 180, lim: null }]; s.pgs[0].dono = 70; s.pgs[1].dono = 12; return s }
  var S = ler('sim.limites', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('problema')) S = problema();
  function grava() { try { localStorage.setItem('sim.limites', JSON.stringify(S)) } catch (e) { } window.__simLim = S }
  grava();

  function total(p) { return p.parceiros.reduce(function (a, x) { return a + x.n }, 0) + p.dono + p.indiv }
  function restam(p) { return Math.max(0, LIMITE - total(p)) }
  function atual() { return S.pgs.filter(function (p) { return p.id === S.sel })[0] }
  function num(v) { return v == null || v === '' ? null : Math.max(0, Math.round(Number(v) || 0)) }

  var DICAS = {
    vei: 'O número atual de anúncios em veiculação ou em análise considerado para o limite de anúncios de uma Página. Isso se baseia no status do anúncio na coluna Veiculação.',
    lim: 'O número máximo de anúncios que essa Página pode ter em veiculação ou em análise simultaneamente. Você não poderá veicular mais anúncios nem publicar alterações nos anúncios já existentes de uma Página após o limite ser atingido.',
    zero: 'As contas de anúncios sujeitas a um limite de anúncios equivalente a zero não podem veicular anúncios para essa Página. Se elas tiverem anúncios existentes em veiculação ou em análise, não será possível publicar alterações neles.',
    salvar: 'Você pode salvar limites de anúncios para parceiros, pessoas ou o dono da Página inferiores ou iguais ao número de seus anúncios em veiculação ou em análise. No entanto, eles não poderão veicular mais anúncios ou publicar alterações nos existentes até o número de anúncios em veiculação ou em análise estar abaixo do limite.'
  };
  function i(k) { return ' <button class="lm-i" data-dica="' + k + '" data-t="dica-' + k + '" title="Mais informações">ⓘ</button>' + (S.dica === k ? '<span class="lm-pop" data-t="pop-' + k + '">' + DICAS[k] + '</span>' : '') }

  function tabela() {
    return '<div class="lm-card lm-pgs" data-t="tabela"><h2>Páginas</h2><p class="miudo">Selecione uma Página para ver o número de anúncios em veiculação ou em análise de parceiros e pessoas com acesso.</p>' +
      '<table class="lm-tab"><thead><tr><th></th><th>Nome da Página ⇅</th><th>Status ⇅</th><th>Anúncios em veiculação ou em análise' + i('vei') + '</th><th>Limite de anúncios' + i('lim') + '</th><th>Identificação da Página</th></tr></thead><tbody>' +
      S.pgs.map(function (p) {
        var r = restam(p);
        return '<tr class="' + (S.sel === p.id ? 'on' : '') + '" data-t="lin-' + p.id + '"><td><button class="lm-radio' + (S.sel === p.id ? ' on' : '') + '" data-pg="' + p.id + '" data-t="sel-' + p.id + '" aria-label="Selecionar"></button></td>' +
          '<td><span class="lm-pg"><span class="lm-av" style="background-image:url(' + p.img + ')"></span>' + esc(p.nome) + '</span></td>' +
          '<td><span class="lm-st' + (r ? '' : ' cheio') + '">● <span>' + r + ' anúncios restantes</span></span></td><td data-t="vei-' + p.id + '">' + total(p) + '</td><td>' + LIMITE + '</td><td class="lm-id">' + p.ident + '</td></tr>';
      }).join('') + '</tbody></table>' +
      '<p class="miudo">As Páginas, os números e a agência são de treino. Quando uma Página chega a 0, a cor e o texto exatos do status não foram vistos na tela real (a conferir).</p></div>';
  }

  function linha(rot, n, lim, campo, ed) {
    var celLim;
    if (ed) { var v = ed[campo]; celLim = '<input class="ga-in lm-num" data-campo="' + campo + '" data-t="lim-' + campo + '" inputmode="numeric" value="' + (v == null ? '' : v) + '"/>' + (v != null && v <= n ? i('zero').replace('ⓘ', '⚠').replace('lm-i', 'lm-i av') : '') }
    else celLim = lim == null ? 'Nenhum' : String(lim);
    return '<tr><td class="lm-conta">▤ ' + rot + '</td><td>' + n + '</td><td>' + celLim + '</td></tr>';
  }
  function painel() {
    var p = atual(); if (!p) return '';
    var ed = S.ed, r = restam(p), usado = total(p);
    var parc = p.parceiros.length ? p.parceiros.map(function (x, k) { return linha(x.nome, x.n, x.lim, 'p' + k, ed) }).join('') : '<tr><td class="lm-conta">▤ Nenhum</td><td>0</td><td></td></tr>';
    var alocado = 0, abaixo = false;
    if (ed) Object.keys(ed).forEach(function (k) { if (ed[k] != null) { alocado += ed[k]; var n = k === 'dono' ? p.dono : k === 'indiv' ? p.indiv : p.parceiros[Number(k.slice(1))].n; if (ed[k] <= n) abaixo = true } });
    var tot = p.parceiros.reduce(function (a, x) { return a + (x.lim || 0) }, 0) + (p.lim.dono || 0) + (p.lim.indiv || 0);
    var mudou = ed && JSON.stringify(ed) !== JSON.stringify(base(p));
    return '<div class="lm-card lm-painel" data-t="painel"><div class="lm-pt"><div><h2>' + esc(p.nome) + '</h2><p class="miudo">Identificação da Página: <a>' + p.ident + '</a></p></div><button class="lm-x" data-acao="fecha" data-t="painel-fechar" aria-label="Fechar">✕</button></div>' +
      '<div class="lm-res" data-t="restantes"><span>☐ Anúncios restantes: <b>' + r + '</b></span><span>Limite de anúncios: <b>' + LIMITE + '</b>' + i('lim') + '</span></div>' +
      '<div class="lm-barra"><span style="width:' + Math.min(100, usado / LIMITE * 100).toFixed(1) + '%"></span></div>' +
      '<h3>Gerenciar limite de anúncios</h3><p>' + (ed ? '<button class="btn sec" disabled>Remover</button>' : '<button class="btn sec" data-acao="editar" data-t="btn-editar">✎ Editar</button>') + '</p>' +
      '<table class="lm-tab lm-lim" data-t="tab-limites"><thead><tr><th>Anúncios dessa Página</th><th>Anúncios em veiculação ou em análise' + i('vei') + '</th><th>Limite de anúncios (definido pelo administrador da Página)</th></tr></thead><tbody>' +
      '<tr class="lm-sec"><td colspan="3"><b>Seus parceiros</b><small>Defina um limite de anúncios para cada portfólio empresarial de parceiro com acesso para veicular anúncios para essa Página.</small></td></tr>' + parc +
      '<tr class="lm-sec"><td colspan="3"><b>Dono da Página</b><small>Defina um limite de anúncios para o portfólio empresarial (Lojinha da Marina Aula) ao qual essa Página pertence.</small></td></tr>' + linha('Contas de anúncios', p.dono, p.lim.dono, 'dono', ed) +
      '<tr class="lm-sec"><td colspan="3"><b>Indivíduos</b><small>Defina um limite de anúncios compartilhado por todos os indivíduos com acesso para veicular anúncios para essa Página.</small></td></tr>' + linha('Contas de anúncios', p.indiv, p.lim.indiv, 'indiv', ed) +
      '<tr class="lm-tot"><td>Total</td><td data-t="total">' + usado + '</td><td data-t="alocados">' + (ed ? alocado + ' de ' + LIMITE + ' alocados' : (tot ? tot + ' de ' + LIMITE + ' alocados' : 'Nenhum')) + '</td></tr></tbody></table>' +
      (ed ? '<div class="lm-rod">' + (abaixo ? '<p class="lm-aviso" data-t="aviso-abaixo">⚠ Alguns limites de anúncios definidos são menores ou iguais ao número de anúncios em veiculação ou em análise.' + i('salvar') + '</p>' : '<span></span>') +
        '<span class="lm-bts"><button class="btn sec" data-acao="cancela" data-t="btn-cancelar">Cancelar</button><button class="btn" data-acao="salva" data-t="btn-salvar"' + (mudou && alocado <= LIMITE ? '' : ' disabled') + '>Salvar</button></span></div>' +
        (alocado > LIMITE ? '<p class="lm-aviso verm">A soma dos limites passa de ' + LIMITE + ' (texto do simulador; a mensagem real não foi vista).</p>' : '') : '') +
      (S.pgs[0].id === p.id && p.parceiros.length && !ed ? '<div class="lm-treino" data-t="treino"><b>🧪 Só no simulador</b><p class="miudo">No mundo real, quem desativa os anúncios é cada dono, no Gerenciador de Anúncios dele. Aqui, um botão faz de conta:</p>' +
        '<button class="btn sec" data-acao="agencia-pausa" data-t="btn-agencia" ' + (p.parceiros[0].n > 150 ? '' : 'disabled') + '>A agência desativou 30 anúncios antigos</button></div>' : '') + '</div>';
  }
  function base(p) { var o = { dono: p.lim.dono, indiv: p.lim.indiv }; p.parceiros.forEach(function (x, k) { o['p' + k] = x.lim }); return o }

  function tela() {
    return '<div class="sim-faixa">🧪 Simulador de treinamento · Limites de anúncios por Página · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' +
      '<div class="lm"><header class="lm-topo"><span class="lm-logo">∞</span><span>☰</span><h1>Limites de anúncios por Página</h1>' +
      '<span class="lm-busca">Pesquisar empresa ⌕</span><span class="lm-port"><span class="L">L</span>Lojinha da Marina Aula ▾</span></header>' +
      '<div class="lm-corpo' + (S.sel ? ' dois' : '') + '">' + tabela() + painel() + '</div>' +
      '<p class="conferido">✓ Tela conferida com a ferramenta real em ' + CONF + ' (conta de aula; nada foi salvo)</p></div>';
  }

  document.addEventListener('click', function (ev) {
    var t = ev.target;
    var d = t.closest('[data-dica]'); if (d) { var k = d.getAttribute('data-dica'); S.dica = S.dica === k ? '' : k; grava(); render(); return }
    if (S.dica && !t.closest('.lm-pop')) { S.dica = ''; grava(); render() }
    var r = t.closest('[data-pg]'); if (r) { S.sel = r.getAttribute('data-pg'); S.ed = null; grava(); render(); return }
    var a = t.closest('[data-acao]'); if (!a || a.disabled) return;
    var ac = a.getAttribute('data-acao'), p = atual();
    if (ac === 'fecha') { S.sel = ''; S.ed = null }
    else if (ac === 'editar') { S.ed = base(p) }
    else if (ac === 'cancela') { S.ed = null }
    else if (ac === 'salva') { p.lim.dono = S.ed.dono; p.lim.indiv = S.ed.indiv; p.parceiros.forEach(function (x, k) { x.lim = S.ed['p' + k] }); S.ed = null }
    else if (ac === 'agencia-pausa') { p.parceiros[0].n = Math.max(0, p.parceiros[0].n - 30) }
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target; if (!t.hasAttribute('data-campo') || !S.ed) return;
    S.ed[t.getAttribute('data-campo')] = num(t.value); grava(); render();
  });
  function render() {
    var foco = document.activeElement && document.activeElement.getAttribute && document.activeElement.getAttribute('data-campo');
    $('#app').innerHTML = tela();
    if (foco) { var el = $('[data-campo="' + foco + '"]'); if (el) el.focus() }
    window.__simLim = S;
  }
  window.SIMLIM = { estado: function () { return S }, problema: function () { S = problema(); grava() }, zera: function () { S = inicial(); grava() }, sel: function (id) { S.sel = id; S.ed = null; grava() },
    ed: function (o) { var p = atual(); S.ed = base(p); for (var k in o) S.ed[k] = o[k]; grava() }, pronto: function () { render() } };
  render();

  /* ---------- tutorial guiado: Diagnóstico › Anúncios 10 ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function sim() { return window.SIMLIM }
  function prob() { sim().problema(); render() }
  TOURS['limite-pagina'] = [
    { alvo: '[data-t=tabela]', garante: prob, tit: T('“O anúncio novo não sai!”', '“¡El anuncio nuevo no sale!”'),
      txt: T('A Marina tenta publicar e recebe o erro 3253001: limite de anúncios atingido. Esta é a ferramenta Limites de anúncios por Página (Gerenciador de Anúncios › Todas as ferramentas › Anúncios). Repare na Lojinha: “0 anúncios restantes”. Clique em Próximo.', 'Marina intenta publicar y recibe el error 3253001: se alcanzó el límite de anuncios. Esta es la herramienta Límites de anuncios por página (Administrador de anuncios › Todas las herramientas › Anuncios). Fíjate en la Lojinha: “0 anuncios restantes”. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-loja]', clique: true, garante: prob, tit: T('Abrir a Página', 'Abrir la página'), txt: T('Marque a bolinha da Lojinha da Marina para ver quem está usando o limite.', 'Marca el círculo de la Lojinha da Marina para ver quién está usando el límite.') },
    { alvo: '[data-t=tab-limites]', garante: function () { prob(); sim().sel('loja'); render() }, tit: T('O limite é da Página', 'El límite es de la página'),
      txt: T('Aqui está a resposta: a Agência Vitrine (parceira) tem 180 anúncios no ar com a Página da Marina, e as contas da própria Marina têm 70. 180 + 70 = 250. O limite não é por conta de anúncios: é da Página, somando todo mundo que anuncia com ela. Clique em Próximo.', 'Aquí está la respuesta: la Agência Vitrine (socia) tiene 180 anuncios activos con la página de Marina, y las cuentas de la propia Marina tienen 70. 180 + 70 = 250. El límite no es por cuenta publicitaria: es de la página, sumando a todos los que anuncian con ella. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-editar]', clique: true, garante: function () { prob(); sim().sel('loja'); render() }, tit: T('Dividir o limite', 'Repartir el límite'), txt: T('Como dona da Página, a Marina pode dividir os 250 entre a agência e ela. Clique em Editar.', 'Como dueña de la página, Marina puede repartir los 250 entre la agencia y ella. Haz clic en Editar.') },
    { alvo: '[data-t=tab-limites]', garante: function () { prob(); sim().sel('loja'); sim().ed({}); render() }, cond: function () { var e = window.__simLim.ed; return e && e.p0 === 150 && e.dono === 100 },
      tit: T('150 para a agência, 100 para a Marina', '150 para la agencia, 100 para Marina'), txt: T('Digite 150 no limite da Agência Vitrine e 100 no de Dono da Página (Contas de anúncios). Saia do campo: o total vira “250 de 250 alocados”. Repare no ⚠ ao lado dos 150: a agência tem 180 no ar, mais que o limite novo.', 'Escribe 150 en el límite de la Agência Vitrine y 100 en el de Propietario de la página (Cuentas publicitarias). Sal del campo: el total queda “250 de 250 asignados”. Fíjate en el ⚠ junto a los 150: la agencia tiene 180 activos, más que el límite nuevo.'),
      dica: T('Agência Vitrine: 150 · Dono da Página: 100.', 'Agência Vitrine: 150 · Propietario de la página: 100.') },
    { alvo: '[data-t=btn-salvar]', clique: true, garante: function () { prob(); sim().sel('loja'); sim().ed({ p0: 150, dono: 100 }); render() }, tit: T('Salvar', 'Guardar'), txt: T('O aviso de baixo explica: dá para salvar um limite menor que o número no ar, mas a agência não publica nada novo (nem edita) até baixar de 150. Clique em Salvar.', 'El aviso de abajo explica: se puede guardar un límite menor que el número activo, pero la agencia no publica nada nuevo (ni edita) hasta bajar de 150. Haz clic en Guardar.') },
    { alvo: '[data-t=btn-agencia]', clique: true, garante: function () { prob(); sim().sel('loja'); var s = window.__simLim, p = s.pgs[0]; p.parceiros[0].lim = 150; p.lim.dono = 100; render() }, tit: T('A agência faz a parte dela', 'La agencia hace su parte'), txt: T('Ainda está em 0 restantes: limite não apaga anúncio. Alguém precisa desativar ou excluir anúncios antigos. Faça de conta que a agência desativou 30: clique no botão de treino.', 'Todavía está en 0 restantes: el límite no borra anuncios. Alguien tiene que desactivar o eliminar anuncios viejos. Haz de cuenta que la agencia desactivó 30: haz clic en el botón de práctica.') },
    { alvo: '[data-t=restantes]', fim: true, semVolta: true, garante: function () { prob(); sim().sel('loja'); var p = window.__simLim.pgs[0]; p.parceiros[0].lim = 150; p.parceiros[0].n = 150; p.lim.dono = 100; render() },
      tit: T('30 vagas de volta 🎉', '30 lugares de vuelta 🎉'), txt: T('Agora sobram 30, e a Marina (70 de 100) já pode publicar o anúncio novo, reativando o que deu erro. Resumo: o limite é da Página; resolve-se desativando ou excluindo anúncios antigos, e a dona da Página pode dividir o limite entre parceiros. Não dá para pedir aumento: ele sobe sozinho com o gasto mensal. Clique em Concluir.', 'Ahora sobran 30, y Marina (70 de 100) ya puede publicar el anuncio nuevo, reactivando el que dio error. Resumen: el límite es de la página; se resuelve desactivando o eliminando anuncios viejos, y la dueña de la página puede repartir el límite entre socios. No se puede pedir un aumento: sube solo con el gasto mensual. Haz clic en Terminar.') }
  ];
})();
