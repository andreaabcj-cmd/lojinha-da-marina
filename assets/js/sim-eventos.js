/* ↩ Voltar à aula: depois do tutorial a pessoa fica para explorar à vontade; o botão no canto leva de volta quando ela quiser.
   Guardado na aba (sessionStorage 'tour.volta'); a plataforma apaga ao chegar na aula. */
window.VOLTA_AULA = window.VOLTA_AULA || (function () {
  var K = 'tour.volta', SEG = /^[a-z0-9_-]+\.html([?#][^\s<>\"']*)?$/i;
  function lang() { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } }
  function le() { try { var v = sessionStorage.getItem(K); return v && SEG.test(v) ? v : null } catch (e) { return null } }
  function mostra() {
    var v = le(), b = document.getElementById('tgVolta'); if (!v) { if (b) b.remove(); return }
    if (b || !document.body) return;
    var lab = /^laboratorio/.test(v), es = lang() === 'es';
    if (!document.getElementById('tgVoltaCss')) { var st = document.createElement('style'); st.id = 'tgVoltaCss';
      st.textContent = '.tg-volta{position:fixed;left:16px;bottom:16px;z-index:2147483600;display:inline-flex;align-items:center;gap:6px;padding:10px 16px;border-radius:12px;border:2px solid #16294A;background:#fff;color:#16294A;font:800 14px "Segoe UI",system-ui,Arial,sans-serif;text-decoration:none;box-shadow:3px 3px 0 #16294A;cursor:pointer}.tg-volta:hover{background:#FFE07A}body.em-tour .tg-volta{display:none}';
      document.head.appendChild(st) }
    b = document.createElement('a'); b.id = 'tgVolta'; b.className = 'tg-volta'; b.href = v;
    b.textContent = '↩ ' + (lab ? (es ? 'Volver al Laboratorio' : 'Voltar ao Laboratório') : (es ? 'Volver a la clase' : 'Voltar à aula'));
    b.onclick = function () { try { sessionStorage.removeItem(K) } catch (e) { } };
    document.body.appendChild(b);
  }
  function guarda(v) { if (!v || !SEG.test(v)) return; try { sessionStorage.setItem(K, v) } catch (e) { } mostra() }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mostra); else setTimeout(mostra, 0);
  return { guarda: guarda, mostra: mostra };
})();
/* Simulador do Gerenciador de Eventos da Meta (layout fiel, visual estilizado).
   - Estado salvo no navegador (localStorage "sim.eventos"); nada é enviado à Meta.
   - Os eventos chegam da Lojinha (localStorage "sim.feed", gravado por pixel-aula.js), até de outra aba.
   - Tutorial guiado: meta-eventos.html?tour=criar-pixel | ?tour=testar-eventos
   Textos das telas copiados do Gerenciador de Eventos em pt-BR. CONF = data em que a tela foi conferida com a real. */
(function () {
  var CONF = { visao: '14/10/2026', conectar: '13/10/2026', criar: '13/10/2026', lista: '13/10/2026' };
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var PORTFOLIO = 'Lojinha da Marina Aula', USUARIO = 'Marina';
  var params = new URLSearchParams(location.search);
  var MODO_ERRO = params.get('erro') === 'criar';   // reproduz o erro real "Esse conteúdo não está mais disponível"

  /* ---------- estado ---------- */
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function grava() { try { localStorage.setItem('sim.eventos', JSON.stringify(S)) } catch (e) { } }
  var S = ler('sim.eventos', null) || { datasets: [], testeDesde: 0 };
  function feed() { var f = ler('sim.feed', []); return Array.isArray(f) ? f : [] }   // se sobrou um estado antigo do simulador do Feed nessa chave, ignora (a fila do Pixel é uma lista)
  function ds(id) { return S.datasets.filter(function (d) { return d.id === id })[0] }
  function novoId() { var s = '1'; for (var i = 0; i < 14; i++) s += Math.floor(Math.random() * 10); return s }   // 15 dígitos, como um ID real
  function quando(t) { var d = Math.round((Date.now() - t) / 1000); return d < 60 ? 'há ' + Math.max(1, d) + ' s' : d < 3600 ? 'há ' + Math.round(d / 60) + ' min' : new Date(t).toLocaleString('pt-BR') }

  /* ---------- ícones simples ---------- */
  var IC = {
    sino: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0"/></svg>',
    painel: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="13" r="8"/><path d="M12 13l4-4"/></svg>',
    tabela: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/></svg>',
    pessoas: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c1-4 4-5 6-5s5 1 6 5M15 15c3 0 5 1 6 4"/></svg>',
    megafone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10v4h4l7 5V5L7 10zM18 9a4 4 0 0 1 0 6"/></svg>',
    eventos: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M12 9v3l-5 4M12 12l5 4"/></svg>',
    menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    mais: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
    grade: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/></svg>',
    ds: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/></svg>',
    estrela: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7l1.6 3.4 3.7.4-2.8 2.5.8 3.7L12 15l-3.3 2 .8-3.7-2.8-2.5 3.7-.4z"/></svg>',
    integ: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="18" r="2"/><path d="M7 6h4l6 6M7 18h4l6-6"/></svg>',
    web: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="12" rx="1"/><path d="M2 19h20"/></svg>',
    app: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="3" width="10" height="18" rx="2"/></svg>',
    loja: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9l2-5h12l2 5M4 9v11h16V9M9 20v-6h6v6"/></svg>',
    crm: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h10M4 12h7M4 17h10M17 5v14M14 8l3-3 3 3"/></svg>',
    msg: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16v11H9l-5 4z"/></svg>'
  };
  function mascote(px) {
    var rows = ['....uuuuuuu.....', '...uuuuuuuuuU...', '..UUUUUUUUUUUUU.', '...dddddddddd...', '...dssssssssd...', '...ssessssesss..', '...ssssssssss...', '...sssmmmmsss...', '....ssssssss....', '...wwwwwwwwww...', '..wwaawwwwaaww..', '..swaaaaaaaapwwp', '..swaaaaaaaapwkp', '...waaaaaaaapppp', '...aaaaaaaaaa...'];
    var P = { u: '#2F6FD6', U: '#1F4FA8', d: '#2A1E1A', s: '#F4CBA2', e: '#22304A', m: '#D0605A', w: '#fff', a: '#1F3A6E', p: '#A0703A', k: '#22304A' }, o = '';
    rows.forEach(function (r, y) { for (var x = 0; x < r.length; x++) if (r[x] !== '.') o += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + P[r[x]] + '"/>' });
    return '<svg viewBox="0 0 16 15" width="' + px + '" height="' + Math.round(px * 15 / 16) + '" shape-rendering="crispEdges">' + o + '</svg>';
  }

  /* ---------- rotas (#visao, #conjuntos, #ds/ID/aba) ---------- */
  function rota() { var h = (location.hash || '#visao').slice(1).split('/'); return { tela: h[0] || 'visao', id: h[1], aba: h[2] || 'visao' } }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }

  function esqueleto(titulo, menuAtivo, conteudo, conf) {
    var r = rota();
    return '<div class="sim-faixa">🧪 Simulador de treinamento do Gerenciador de Eventos · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' +
      '<div class="sim"><nav class="sim-trilho" aria-label="Ferramentas">' +
      '<span class="logo">' + mascote(24) + '</span>' +
      '<button title="Notificações">' + IC.sino + '</button><button title="Visão geral da conta">' + IC.painel + '</button><button title="Campanhas">' + IC.tabela + '</button>' +
      '<button title="Públicos">' + IC.pessoas + '</button><button title="Gerenciador de Anúncios">' + IC.megafone + '</button>' +
      '<button class="on" title="Gerenciador de Eventos">' + IC.eventos + '</button><button title="Todas as ferramentas">' + IC.menu + '</button></nav>' +
      '<header class="sim-cab"><h1>' + esc(titulo) + '</h1><div class="sim-portfolio" title="Portfólio empresarial"><span class="L">L</span>' + PORTFOLIO + '<span class="seta">▾</span></div><span class="sim-avatar">M</span></header>' +
      '<div class="sim-corpo"><aside class="sim-menu">' +
      '<button class="verde" data-acao="conectar" data-t="conectar">' + IC.mais + ' Conectar dados</button>' +
      '<button class="' + (menuAtivo === 'visao' ? 'on' : '') + '" data-ir="visao">' + IC.grade + ' Visão geral</button>' +
      '<button class="' + (menuAtivo === 'conjuntos' ? 'on' : '') + '" data-ir="conjuntos" data-t="menu-conjuntos">' + IC.ds + ' Conjuntos de dados</button>' +
      '<button disabled title="Fora do simulador por enquanto">' + IC.estrela + ' Conversões personalizadas</button>' +
      '<button disabled title="Fora do simulador por enquanto">' + IC.integ + ' Integrações</button></aside>' +
      '<main class="sim-main">' + conteudo +
      '<p class="conferido' + (conf ? '' : ' pendente') + '">' + (conf ? '✓ Layout conferido com o Gerenciador de Eventos real em ' + conf : '⚠ Tela montada pela documentação da Meta · a conferir com a tela real') + '</p></main></div></div>';
  }

  /* ---------- telas ---------- */
  function telaVisao() {
    var h = '<div class="cartao ola"><h2>Que bom ter você aqui, ' + USUARIO + '!</h2><p>O Gerenciador de Eventos é a central de configuração e gerenciamento de dados.</p></div>';
    if (S.datasets.length) {
      var d = S.datasets[0], n = feed().filter(function (e) { return e.pid === d.id }).length;
      h += '<div class="cartao"><h2>Seus conjuntos de dados</h2><table class="tabela"><tr><th>Nome</th><th>Identificação</th><th>Eventos recebidos</th><th>Status</th></tr>' +
        S.datasets.map(function (x) { var m = feed().filter(function (e) { return e.pid === x.id }).length; return '<tr class="clica" data-ir="ds/' + x.id + '"><td><b>' + esc(x.nome) + '</b></td><td><span class="id">' + x.id + '</span></td><td>' + m + '</td><td>' + status(m) + '</td></tr>' }).join('') + '</table></div>';
    }
    h += '<div class="cartao"><h2>Conecte seus dados</h2><p>A conexão do Pixel da Meta e da API de Conversões fornece mais dados sobre como os clientes interagem com sua empresa. Escolha um parceiro abaixo para começar.</p>' +
      '<p class="verde-txt">Redução de 25% no custo por conversão fora do site ⓘ</p><div class="parceiros">' +
      [['GTM', '#4C8BF5', 'Google Tag Manager'], ['S', '#5E8E3E', 'Shopify'], ['Woo', '#7F54B3', 'WooCommerce']].map(function (p) { return '<div class="parceiro"><i style="background:' + p[1] + '">' + p[0].slice(0, 3) + '</i><span><b>' + p[2] + '</b><small>Eventos da web</small></span><span class="radio"></span></div>' }).join('') +
      '</div><div style="display:flex;justify-content:space-between;align-items:center"><button class="lnk" data-acao="conectar">Ver outras maneiras de configurar</button><button class="btn" disabled>Configure para mim</button></div></div>';
    return esqueleto('Visão geral', 'visao', h, CONF.visao);
  }
  function status(n) { return n ? '<span class="st"><i></i>Ativo</span>' : '<span class="st cinza"><i></i>Nenhuma atividade ainda</span>' }

  function telaConjuntos() {
    var h;
    if (!S.datasets.length) h = '<div class="cartao vazio"><div class="ilus">🗂️</div><p>Os dados precisam ser conectados antes de você poder ver os conjuntos de dados</p><p><button class="btn" data-acao="conectar">Conectar dados</button></p></div>';
    else h = '<div class="cartao"><h2>Conjuntos de dados</h2><table class="tabela"><tr><th>Nome</th><th>Identificação</th><th>Status</th></tr>' +
      S.datasets.map(function (x) { var m = feed().filter(function (e) { return e.pid === x.id }).length; return '<tr class="clica" data-ir="ds/' + x.id + '" data-t="ds-abrir"><td><b>' + esc(x.nome) + '</b></td><td><span class="id" data-t="id-novo">' + x.id + '</span></td><td>' + status(m) + '</td></tr>' }).join('') + '</table></div>';
    return esqueleto('Conjuntos de dados', 'conjuntos', h, S.datasets.length ? null : CONF.lista);
  }

  function telaDataset(r) {
    var d = ds(r.id); if (!d) { vai('conjuntos'); return '' }
    var ev = feed().filter(function (e) { return e.pid === d.id });
    var abas = [['visao', 'Visão geral'], ['teste', 'Testar eventos'], ['diag', 'Diagnóstico'], ['hist', 'Histórico'], ['config', 'Configurações']];
    var h = '<div class="cartao"><div class="ds-cab"><span class="ic">' + IC.ds + '</span><div><h2>' + esc(d.nome) + '</h2><span class="miudo">Identificação do conjunto de dados: </span><span class="id" data-t="id-novo">' + d.id + '</span> <button class="lnk" data-acao="copiar" data-v="' + d.id + '">Copiar</button></div>' +
      '<button class="btn sec" style="margin-left:auto" data-acao="codigo" data-t="ver-codigo">Configurar o Pixel</button></div>' +
      '<nav class="abas">' + abas.map(function (a) { return '<button class="' + (r.aba === a[0] ? 'on' : '') + '" data-ir="ds/' + d.id + '/' + a[0] + '" data-t="aba-' + a[0] + '">' + a[1] + '</button>' }).join('') + '</nav></div>';
    if (S.recemCriado === d.id) h += '<div class="alerta ok"><b>Conjunto de dados criado</b>Próximo passo: colocar o código do Pixel no site. Clique em <b>Configurar o Pixel</b> para ver o código com este ID.</div>';
    if (r.aba === 'visao') h += abaVisao(d, ev);
    else if (r.aba === 'teste') h += abaTeste(d, ev);
    else if (r.aba === 'diag') h += abaDiag(d, ev);
    else if (r.aba === 'hist') h += '<div class="cartao"><h2>Histórico</h2><table class="tabela"><tr><th>Quando</th><th>O que aconteceu</th><th>Quem</th></tr><tr><td>' + new Date(d.criado).toLocaleString('pt-BR') + '</td><td>Conjunto de dados criado</td><td>' + USUARIO + '</td></tr></table></div>';
    else h += abaConfig(d);
    return esqueleto(d.nome, 'conjuntos', h, null);
  }

  /* ---------- desduplicação (Pixel × API de Conversões) e qualidade da correspondência ---------- */
  // Meta: o mesmo evento chegando pelo navegador e pelo servidor só conta uma vez se o event_name e o event_id forem iguais nos dois (vale o primeiro recebido).
  function marcaDup(lista) {
    var vistos = {}, out = lista.map(function (e) { return e });
    out.slice().sort(function (a, b) { return a.t - b.t }).forEach(function (e) {
      if (!e.eid) return; var k = e.nome + '|' + e.eid, o = vistos[k];
      if (o && o.fonte !== e.fonte) e.dup = true; else if (!o) vistos[k] = e;
    });
    return out;
  }
  var PROIBIDO = /(doen|saude|saúde|health|diagn|medic|cpf|cartao|cartão|card|senha|password|religi|etnia|orienta|salario|salário)/i;
  function proibidos(ev) {
    var r = []; ev.forEach(function (e) { Object.keys(e.params || {}).forEach(function (k) { if (PROIBIDO.test(k)) r.push({ evento: e.nome, param: k }) }) });
    return r;
  }
  var PESOS = [['em', 3, 'e-mail (prioridade alta)'], ['ph', 1.5, 'telefone (prioridade média)'], ['external_id', 1.5, 'ID externo (prioridade média)'], ['country', 1, 'país (prioridade média)'], ['fn', 0.7, 'primeiro nome (prioridade baixa)'], ['ln', 0.7, 'sobrenome (prioridade baixa)'], ['ct', 0.5, 'cidade (prioridade baixa)'], ['zp', 0.5, 'CEP (prioridade baixa)'], ['st', 0.3, 'estado (prioridade baixa)']];
  function qualidade(ev) {   // só eventos enviados pelo servidor (API de Conversões); pontuação de 0 a 10 do treino (a conferir)
    var srv = ev.filter(function (e) { return e.fonte === 'servidor' }); if (!srv.length) return null;
    var por = {}; srv.forEach(function (e) { var p = por[e.nome] = por[e.nome] || { n: 0, chaves: {} }; p.n++; (e.ud || []).forEach(function (c) { p.chaves[c] = true }) });
    return Object.keys(por).map(function (nome) {
      var ch = por[nome].chaves, s = 1; PESOS.forEach(function (w) { if (ch[w[0]]) s += w[1] });
      return { nome: nome, n: por[nome].n, nota: Math.min(10, Math.round(s * 10) / 10), falta: PESOS.filter(function (w) { return !ch[w[0]] }).map(function (w) { return w[2] }) };
    });
  }
  function cartaoQualidade(ev) {
    var q = qualidade(ev);
    var h = '<div class="cartao" data-t="emq-card"><h2>Qualidade da correspondência de eventos</h2><p class="miudo">Para eventos do site enviados pela API de Conversões. A pontuação vai de 0 a 10 e mostra o quanto as informações do cliente enviadas com o evento ajudam a ligá-lo a uma Conta Meta.</p>';
    if (!q) return h + '<div class="vazio"><p>Ainda não há eventos enviados pelo servidor (API de Conversões). A qualidade da correspondência só aparece para eles.</p></div></div>';
    h += q.map(function (x) {
      return '<div class="emq-lin" data-t="emq-' + esc(x.nome) + '"><b>' + esc(x.nome) + '</b> <span class="emq-nota ' + (x.nota >= 8 ? 'ok' : x.nota >= 5 ? 'med' : 'ruim') + '" data-t="emq-nota-' + esc(x.nome) + '">' + x.nota.toFixed(1).replace('.', ',') + ' / 10</span> <small>' + x.n + ' evento(s) · últimas 48 horas</small>' +
        (x.falta.length ? '<div class="emq-rec" data-t="emq-rec-' + esc(x.nome) + '"><b>Ações recomendadas:</b> enviar ' + x.falta.slice(0, 3).map(esc).join(', ') + '.</div>' : '<div class="emq-rec ok">Boa cobertura de parâmetros do cliente.</div>') + '</div>';
    }).join('');
    return h + '<p class="miudo">⚠ Pontuação do treino (a Meta só informa que depende da qualidade dos parâmetros e da porcentagem de eventos com correspondência): a conferir com a tela real.</p></div>';
  }

  function abaVisao(d, ev) {
    var agora = Date.now(), barras = [];
    for (var i = 11; i >= 0; i--) { var a = agora - (i + 1) * 3600e3, b = agora - i * 3600e3; barras.push(ev.filter(function (e) { return e.t >= a && e.t < b }).length) }
    var max = Math.max.apply(null, barras.concat([1]));
    var evOrig = ev; ev = marcaDup(ev).filter(function (e) { return !e.dup });   // desduplicados: o mesmo evento do navegador e do servidor conta uma vez
    var porNome = {}; ev.forEach(function (e) { var p = porNome[e.nome] = porNome[e.nome] || { n: 0, t: 0, srv: false, nav: false }; p.n++; p.t = Math.max(p.t, e.t); if (e.fonte === 'servidor') p.srv = true; else p.nav = true });
    var h = '<div class="cartao"><h2>Eventos nas últimas 12 horas</h2><div class="grafico">' + barras.map(function (n) { return '<span style="height:' + Math.round(n / max * 100) + '%" title="' + n + ' eventos"></span>' }).join('') + '</div>';
    if (!ev.length) h += '<div class="vazio"><p>Nenhum evento recebido ainda. Abra a Lojinha (aba <b>Testar eventos</b> › Abrir site) e navegue: os eventos aparecem aqui.</p></div>';
    else h += '<table class="tabela" data-t="tabela-visao"><tr><th>Eventos</th><th>Integração</th><th>Total de eventos</th><th>Última atividade</th><th>Status</th></tr>' +
      Object.keys(porNome).map(function (k) { return '<tr><td><b>' + esc(k) + '</b></td><td>' + (porNome[k].srv && porNome[k].nav ? 'Navegador e servidor' : porNome[k].srv ? 'Servidor' : 'Navegador') + '</td><td>' + porNome[k].n + '</td><td>' + quando(porNome[k].t) + '</td><td>' + status(1) + '</td></tr>' }).join('') + '</table>';
    return h + '</div>' + cartaoQualidade(evOrig);
  }

  function abaTeste(d, ev) {
    var lista = marcaDup(ev.filter(function (e) { return e.t >= (S.testeDesde || 0) })).slice().reverse();
    var url = new URL('loja.html', location.href).href;
    var h = '<div class="cartao"><h2>Testar eventos do navegador</h2><p>Confirme se os eventos do navegador estão configurados corretamente. Abra o site, faça as ações (ver produto, pôr no carrinho, comprar) e acompanhe os eventos chegando aqui.</p>' +
      '<div class="linha-url"><input id="urlTeste" value="' + esc(url) + '" aria-label="URL do site"/><button class="btn" data-acao="abrir-site" data-t="abrir-site">Abrir site</button></div></div>' +
      '<div class="cartao" data-t="feed"><div style="display:flex;justify-content:space-between;align-items:center"><h2>Atividade</h2><button class="lnk" data-acao="limpar">Limpar atividade</button></div>';
    if (!lista.length) h += '<div class="vazio"><div class="ilus">📡</div><p>Aguardando eventos… Abra o site e navegue. Se nada chegar, confira se o site usa <b>este</b> ID de Pixel.</p></div>';
    else h += lista.map(function (e, i) { return evLinha(e, i) }).join('');
    return h + '</div>';
  }
  var abertos = {};
  function evLinha(e, i) {
    var k = e.t + e.nome, on = abertos[k];
    var h = '<div class="ev"><button class="ev-cab" data-ev="' + esc(k) + '" data-t="ev-' + i + '"><b>' + esc(e.nome) + '</b><span class="st' + (e.dup ? ' dup' : '') + '"><i></i>' + (e.dup ? 'Desduplicado' : 'Processado') + '</span><small>' + (e.fonte === 'servidor' ? 'Servidor' : 'Navegador') + ' · ' + quando(e.t) + '</small><span class="seta">' + (on ? '▴' : '▾') + '</span></button>';
    if (on) {
      var ps = Object.keys(e.params || {});
      h += '<div class="ev-corpo"><h4>Parâmetros personalizados</h4>' + (ps.length ? '<table>' + ps.map(function (p) { var v = e.params[p]; return '<tr><td>' + esc(p) + '</td><td>' + esc(typeof v === 'object' ? JSON.stringify(v) : v) + (PROIBIDO.test(p) ? ' <b class="proib">⛔ bloqueado pela Meta: possível informação proibida</b>' : '') + '</td></tr>' }).join('') + '</table>' : '<p class="miudo">Nenhum parâmetro.</p>') +
        '<h4>Informações do evento</h4><table><tr><td>URL</td><td>' + esc(e.href || '') + '</td></tr><tr><td>ID do evento</td><td>' + esc(e.eid || '—') + '</td></tr><tr><td>Recebido de</td><td>' + (e.fonte === 'servidor' ? 'Servidor (API de Conversões)' : 'Navegador (Pixel da Meta)') + '</td></tr></table>' +
        (e.ud && e.ud.length ? '<h4>Correspondência avançada</h4><table>' + e.ud.map(function (c) { return '<tr><td>' + esc(c) + '</td><td>enviado com hash (SHA-256)</td></tr>' }).join('') + '</table>' : '') + '</div>';
    }
    return h + '</div>';
  }

  function abaDiag(d, ev) {
    ev = ev.filter(function (e) { return e.t >= (S.testeDesde || 0) });   // “Limpar atividade” recomeça também o diagnóstico
    var problemas = [];
    var compras = ev.filter(function (e) { return e.nome === 'Purchase' });
    var vBad = compras.some(function (e) { return typeof e.params.value !== 'number' || isNaN(e.params.value) }), cBad = compras.some(function (e) { return !/^[A-Z]{3}$/.test(String(e.params.currency || '')) });
    if (vBad) problemas.push(['erro', 'Preço ausente ou inválido no parâmetro de valor', 'O value do Purchase está vazio ou fora do formato: precisa ser um número decimal maior ou igual a zero, com ponto decimal, sem letras, símbolos de moeda nem vírgulas (ex.: 99.90).']);
    if (cBad) problemas.push(['erro', 'O parâmetro de moeda tem um código de 3 letras ausente e/ou inválido', 'O currency precisa ser o código de 3 letras da moeda (ex.: BRL ou USD).']);
    var pv = ev.filter(function (e) { return e.nome === 'PageView' });
    for (var i = 1; i < pv.length; i++) if (pv[i].href === pv[i - 1].href && pv[i].t - pv[i - 1].t < 1500) { problemas.push(['aviso', 'Possível código do Pixel duplicado', 'O mesmo evento PageView chegou duas vezes da mesma página ao mesmo tempo. Confira se o código base não foi instalado duas vezes (por exemplo, colado à mão e também pela integração).']); break }
    var padrao = ['PageView', 'ViewContent', 'Search', 'AddToCart', 'AddToWishlist', 'InitiateCheckout', 'AddPaymentInfo', 'Purchase', 'Lead', 'CompleteRegistration', 'Schedule', 'Contact'];
    var parecidos = ev.filter(function (e) { return e.custom && padrao.indexOf(e.nome) < 0 && padrao.some(function (p) { return p.toLowerCase() === String(e.nome).toLowerCase() }) });
    if (parecidos.length) problemas.push(['aviso', 'Incompatibilidade de nome de evento', 'O evento “' + parecidos[0].nome + '” é parecido com o evento padrão, mas não idêntico. Os nomes diferenciam maiúsculas de minúsculas: para medir como evento padrão, o código precisa usar exatamente “' + padrao.filter(function (p) { return p.toLowerCase() === String(parecidos[0].nome).toLowerCase() })[0] + '”.']);
    // Pixel e API de Conversões mandando o mesmo evento sem o mesmo event_id: a Meta não consegue desduplicar
    var dupSemId = false; ev.forEach(function (a1) { if (a1.fonte === 'servidor') ev.forEach(function (b1) { if (b1.fonte !== 'servidor' && b1.nome === a1.nome && Math.abs(b1.t - a1.t) < 5000 && b1.eid !== a1.eid) dupSemId = true }) });
    if (dupSemId) problemas.push(['aviso', 'Eventos duplicados do Pixel e da API de Conversões', 'O mesmo evento chegou pelo navegador e pelo servidor sem o mesmo event_id. Para desduplicar, o event_name e o event_id precisam ser idênticos nos dois: sem isso, a compra é contada duas vezes. (a conferir com a mensagem real)']);
    var prb = proibidos(ev); if (prb.length) problemas.push(['erro', 'Parâmetros bloqueados: possível informação proibida', 'Detectamos parâmetros com informações possivelmente sensíveis (ex.: “' + esc(prb[0].param) + '” no evento ' + esc(prb[0].evento) + '). Informações de saúde, financeiras e outras categorias sensíveis não podem ser compartilhadas (vale para parâmetros de URL e eventos personalizados). O anunciante é o responsável. (a conferir com a mensagem real)']);
    var foraObrigado = compras.filter(function (e) { return !/obrigado/.test(e.href || '') });
    var mesmaPagina = {}, vistos = {}; compras.forEach(function (e) { var k = e.href, u = k + '|' + (e.eid || Math.random()); if (vistos[u]) return; vistos[u] = 1; mesmaPagina[k] = (mesmaPagina[k] || 0) + 1 });   // navegador + servidor com o mesmo event_id = uma compra (desduplicada)
    var maxMesma = Math.max.apply(null, Object.keys(mesmaPagina).map(function (k) { return mesmaPagina[k] }).concat([0]));
    if (foraObrigado.length) problemas.push(['erro', 'Vários eventos em uma ação', 'O Purchase está chegando de páginas que não são de compra (ex.: ' + esc((foraObrigado[0].href || '').split('/').pop().split('?')[0]) + '). O pixel deve enviar um evento por ação do visitante. Verifique o cabeçalho do modelo HTML: o único código da Meta no cabeçalho deve ser o código base. O Purchase vai só na página que indica a compra.']);
    else if (maxMesma >= 4) problemas.push(['erro', 'Eventos de compra redundantes', 'O pixel recebeu quatro ou mais eventos de compra para uma única compra. Isso superestima as vendas. Deixe o Purchase em um só lugar.']);
    else if (maxMesma >= 2) problemas.push(['aviso', 'Vários eventos em uma ação', 'O pixel enviou mais de um evento de compra para uma única ação do visitante. Confira se o Purchase está em mais de um lugar (código manual e integração, por exemplo).']);
    var ids = (window.PRODUTOS || []).reduce(function (a, p) { a.push(p.id); (p.variantes || []).forEach(function (v) { a.push(v.id) }); return a }, []);
    if (ids.length && ev.some(function (e) { return (e.params.content_ids || []).some(function (c) { return ids.indexOf(c) < 0 }) })) problemas.push(['aviso', 'IDs de conteúdo não correspondem ao catálogo', 'Alguns eventos enviaram content_ids que não existem no catálogo (ex.: o nome do produto no lugar do código).']);
    var h = '<div class="cartao"><h2>Diagnóstico</h2><p>Problemas encontrados nos eventos recebidos por este conjunto de dados.</p>';
    if (!problemas.length) h += '<div class="alerta ok" data-t="diag-ok"><b>Nenhum problema ativo</b>' + (ev.length ? 'Os eventos recebidos não mostram problemas.' : 'Ainda não há eventos para analisar.') + '</div>';
    h += problemas.map(function (p, i) { return '<div class="alerta ' + p[0] + '" data-t="diag-' + i + '"><b>' + (p[0] === 'erro' ? '⛔ ' : '⚠️ ') + p[1] + '</b>' + p[2] + '</div>' }).join('');
    return h + '</div>';
  }

  function abaConfig(d) {
    function chave(k, rot, txt) { return '<div class="config-linha"><div><b>' + rot + '</b><p>' + txt + '</p></div><span class="chave' + (d[k] ? ' on' : '') + '" role="switch" aria-checked="' + !!d[k] + '" data-chave="' + k + '" data-t="chave-' + k + '"></span></div>' }
    return '<div class="cartao"><h2>Detalhes</h2><div class="config-linha"><div><b>Nome</b><p>' + esc(d.nome) + '</p></div></div><div class="config-linha"><div><b>Identificação do conjunto de dados</b><p><span class="id">' + d.id + '</span></p></div></div>' +
      '<div class="config-linha"><div><b>Proprietário</b><p>' + PORTFOLIO + '</p></div></div><div class="config-linha"><div><b>Criado por</b><p>' + USUARIO + ' · ' + new Date(d.criado).toLocaleDateString('pt-BR') + '</p></div></div></div>' +
      '<div class="cartao"><h2>Configurações do Pixel</h2>' +
      chave('am', 'Correspondência avançada automática', 'Usa informações que a pessoa digita no site (como email e telefone) para associar os eventos às contas, sempre com hash.') +
      chave('cookies', 'Usar cookies primários', 'Grava o cookie _fbp no domínio do próprio site, o que ajuda a medir as conversões.') +
      chave('auto', 'Rastrear eventos automaticamente sem código', 'A Meta sugere e detecta eventos padrão pelo comportamento do site, sem programar.') +
      chave('capi', 'API de Conversões com a Meta', 'Envia também os eventos pelo servidor da Meta. Na aula deixamos desligada para estudar o Pixel sozinho.') +
      '<div class="config-linha"><div><b>Tráfego permitido</b><p>Só aceita eventos destes domínios (vazio = todos):</p><p><span class="id">andreaabcj-cmd.github.io</span></p></div></div></div>';
  }

  /* ---------- janelas ---------- */
  var janela = null, escolha = null, cats = false;
  function abreJanela(qual) { janela = qual; escolha = null; cats = false; desenhaJanela() }
  function fechaJanela() { janela = null; var f = $('#fundo'); if (f) f.remove() }
  function desenhaJanela() {
    var f = $('#fundo'); if (f) f.remove(); if (!janela) return;
    f = document.createElement('div'); f.className = 'fundo'; f.id = 'fundo';
    var h = '';
    if (janela === 'conectar') {
      var ops = [['web', IC.web, 'Web', 'Conecte seu site para compartilhar a atividade que acontece online, incluindo visualizações de conteúdo, adições ao carrinho e compras.'],
        ['app', IC.app, 'App', 'Conecte seu app para compartilhar a atividade que ocorre no seu app, incluindo instalações e compras.'],
        ['offline', IC.loja, 'Offline', 'Conecte a atividade que ocorre offline, incluindo ligações telefônicas ou compras na loja.'],
        ['crm', IC.crm, 'CRM', 'Conecte seu CRM para veicular seus anúncios de geração de leads para as pessoas com maior probabilidade de conversão.'],
        ['msg', IC.msg, 'Mensagens', 'Conecte dados importantes de conversas comerciais que acontecem no WhatsApp, no Messenger e no Instagram.']];
      h = '<h3>Conectar uma nova fonte de dados<button class="x" data-acao="fechar">✕</button></h3><p>Compartilhe dados sobre como os clientes interagem com sua empresa. Isso pode ajudar a otimizar a veiculação dos anúncios e o desempenho.</p><div class="opcoes">' +
        ops.map(function (o) { return '<button class="opcao' + (escolha === o[0] ? ' on' : '') + '" data-escolha="' + o[0] + '" data-t="op-' + o[0] + '"><span class="radio"></span><span class="ico">' + o[1] + '</span><span><b>' + o[2] + '</b><small>' + o[3] + '</small></span></button>' }).join('') +
        '</div><div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="avancar" data-t="avancar" ' + (escolha === 'web' ? '' : 'disabled') + '>Avançar</button></div>' +
        (escolha && escolha !== 'web' ? '<p class="miudo">No simulador, só a opção Web (o Pixel) está ligada.</p>' : '') + '<p class="conferido">✓ Conferido com a tela real em ' + CONF.conectar + '</p>';
    } else if (janela === 'criar') {
      var nome = (window.__nomeDs || '');
      h = '<h3>Criar um conjunto de dados<button class="x" data-acao="fechar">✕</button></h3><p>A criação de um conjunto de dados ajuda você a acompanhar as atividades que são importantes para sua empresa, para que você possa direcionar melhor os públicos e melhorar o desempenho.</p>' +
        '<label class="campo" data-t="nome"><b>Insira um nome</b><input id="nomeDs" placeholder="Por exemplo, Dados do Jasper\'s Market" value="' + esc(nome) + '"/>' + (window.__erroCriar ? '<div class="erro-txt">Esse conteúdo não está mais disponível: O conteúdo solicitado não pode ser exibido no momento. Ele pode estar temporariamente indisponível, o link no qual você clicou pode ter expirado ou talvez você não tenha autorização para ver essa página.</div>' : '') + '</label>' +
        '<label class="marcar" data-t="capi"><input type="checkbox" id="capiDs" ' + (window.__capi === false ? '' : 'checked') + '/><span>Conecte <b>todos os conjuntos de dados novos e existentes</b> neste portfólio empresarial à API de Conversões com a Meta. Isso funciona junto com seu Pixel da Meta para enviar eventos da web para o lado do servidor da Meta e proporcionar um desempenho mais duradouro. Você pode desconectar conjuntos de dados específicos ou desativar a conexão para todo o portfólio quando quiser no Gerenciador de Negócios. <a>Ver termos</a> ou <a>saiba como funciona</a></span></label>' +
        '<div data-t="cats"><b>Selecione qualquer categoria aplicável</b> <span class="miudo">• Opcional</span><p>Suas escolhas serão aplicadas a todas as fontes de dados neste conjunto de dados. A seleção da categoria mais precisa para sua empresa pode ajudar a evitar o compartilhamento de informações proibidas pelos Termos das Ferramentas da Meta para Empresas. Dependendo da categoria e da localização, o compartilhamento de dados pode ser limitado ou bloqueado.</p><a>Sobre as categorias</a>' +
        '<div class="campo"><button class="btn sec" style="width:100%;justify-content:space-between" data-acao="cats">Escolha as opções que se aplicam <span>▾</span></button>' +
        (cats ? '<div class="lista-cat">' + [['Dificuldades pessoais', 'Está associado a indivíduos que provavelmente enfrentam dificuldades pessoais'], ['Nacionalidade', 'Está associado a indivíduos com status de cidadania, status de imigração ou status de refugiado específicos'], ['Política', 'Está associado a membros de um partido político específico, posição política ou contém tópicos relacionados a um tema político'], ['Raça', 'Está associado a indivíduos de uma raça ou etnia específica'], ['Religião', 'Está associado a indivíduos com crenças e práticas religiosas ou espirituais específicas'], ['Saúde e bem-estar ›', '']].map(function (c) { return '<label><input type="checkbox"/><span>' + c[0] + (c[1] ? '<small>' + c[1] + '</small>' : '') + '</span></label>' }).join('') + '</div><a class="miudo">Obtenha ajuda para atribuir categorias</a>' : '') + '</div></div>' +
        '<p class="miudo">Para estar em conformidade com nossas políticas e ajudar a proteger a privacidade de seus usuários, não compartilhe dados sensíveis de usuários conosco ao configurar eventos. Acesse a Central de Ajuda para saber mais sobre dados sensíveis.</p><p class="miudo">Ao continuar, você concorda com os Termos das Ferramentas Comerciais da Meta.</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="criar" data-t="criar" ' + (nome.trim() ? '' : 'disabled') + '>Criar</button></div><p class="conferido">✓ Conferido com a tela real em ' + CONF.criar + '</p>';
    } else if (janela === 'codigo') {
      var d = ds(rota().id);
      h = '<h3>Instalar o código manualmente<button class="x" data-acao="fechar">✕</button></h3><p>Copie o código base do Pixel e cole no <b>&lt;head&gt;</b> de todas as páginas do site, antes de &lt;/head&gt;. Se a loja é de uma plataforma parceira, dá para usar a integração em vez de colar o código.</p>' +
        '<h4>1. ' + 'Código base do Pixel' + '</h4><pre class="codigo" data-t="cod-base">' + esc(window.SITE ? SITE.base(d ? d.id : '') : '') + '</pre>' +
        '<div class="rodape-jan"><span></span><button class="btn" data-acao="copiar-base" data-t="btn-copiar-base">Copiar código base</button></div>' +
        '<h4>2. ' + 'Código de um evento (exemplo: Purchase)' + '</h4><p class="miudo">O código do evento vai SÓ na página da ação (para a compra, a página de pedido concluído), depois do código base. O valor e a moeda padrão são 0.00 e USD: troque pelos reais.</p>' +
        '<pre class="codigo" data-t="cod-purchase">' + esc("fbq('track', 'Purchase', {value: 0.00, currency: 'USD'});") + '</pre>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Fechar</button><button class="btn" data-acao="copiar-purchase" data-t="btn-copiar-purchase">Copiar código do Purchase</button></div><p class="conferido pendente">⚠ Tela montada pela documentação da Meta · a conferir com a tela real</p>';
    }
    f.innerHTML = '<div class="janela" role="dialog" aria-modal="true">' + h + '</div>';
    document.body.appendChild(f);
    var inp = $('#nomeDs'); if (inp) { inp.oninput = function () { window.__nomeDs = inp.value; window.__erroCriar = false; var b = $('[data-acao=criar]'); if (b) b.disabled = !inp.value.trim() }; if (document.activeElement === document.body) inp.focus() }
    var cap = $('#capiDs'); if (cap) cap.onchange = function () { window.__capi = cap.checked };
    tourAtualiza();
  }

  /* ---------- ações ---------- */
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-acao],[data-ir],[data-escolha],[data-ev],[data-chave]'); if (!a) return;
    if (a.hasAttribute('data-ir')) { S.recemCriado = S.recemCriado && a.getAttribute('data-ir').indexOf(S.recemCriado) >= 0 ? S.recemCriado : null; vai(a.getAttribute('data-ir')); tourClique(a); return }
    if (a.hasAttribute('data-escolha')) { escolha = a.getAttribute('data-escolha'); desenhaJanela(); tourClique(a); return }
    if (a.hasAttribute('data-ev')) { var k = a.getAttribute('data-ev'); abertos[k] = !abertos[k]; render(); tourClique(a); return }
    if (a.hasAttribute('data-chave')) { var d = ds(rota().id); if (d) { var c = a.getAttribute('data-chave'); d[c] = !d[c]; grava(); render() } return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'conectar') abreJanela('conectar');
    else if (ac === 'fechar') fechaJanela();
    else if (ac === 'avancar') { if (escolha === 'web') { window.__nomeDs = ''; window.__capi = true; window.__erroCriar = false; abreJanela('criar') } }
    else if (ac === 'cats') { cats = !cats; desenhaJanela() }
    else if (ac === 'criar') {
      var nome = (window.__nomeDs || '').trim(); if (!nome) return;
      if (MODO_ERRO) { window.__erroCriar = true; desenhaJanela(); tourClique(a); return }
      var d2 = { id: novoId(), nome: nome, criado: Date.now(), capi: window.__capi !== false, am: true, cookies: true, auto: false };
      S.datasets.unshift(d2); S.recemCriado = d2.id; S.testeDesde = Date.now(); grava(); fechaJanela(); vai('ds/' + d2.id + '/visao');
    }
    else if (ac === 'codigo') { S.recemCriado = null; grava(); render(); abreJanela('codigo') }
    else if (ac === 'copiar-base' || ac === 'copiar-purchase') {
      var d3 = ds(rota().id), txt = ac === 'copiar-base' ? SITE.base(d3 ? d3.id : '') : "<script>\nfbq('track', 'Purchase', {value: 0.00, currency: 'USD'});\n</script>";
      function plano() { var ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy') } catch (e) { } ta.remove() }
      try { navigator.clipboard.writeText(txt).catch(plano) } catch (e) { plano() }
      window.__copiado = ac === 'copiar-base' ? 'base' : 'purchase'; a.textContent = 'Copiado ✓'; tourClique(a);
    }
    else if (ac === 'copiar') { try { navigator.clipboard.writeText(a.getAttribute('data-v')) } catch (e) { } a.textContent = 'Copiado ✓' }
    else if (ac === 'abrir-site') { S.testeDesde = Date.now(); grava(); window.open($('#urlTeste').value, '_blank'); render() }
    else if (ac === 'limpar') { S.testeDesde = Date.now(); grava(); render() }
    tourClique(a);
  });

  function render() {
    var r = rota(), h = r.tela === 'conjuntos' ? telaConjuntos() : r.tela === 'ds' ? telaDataset(r) : telaVisao();
    if (!h) return;
    $('#app').innerHTML = h; document.title = 'Simulador · Gerenciador de Eventos';
    desenhaJanela(); tourAtualiza();
  }
  window.addEventListener('hashchange', render);
  // eventos chegando da Lojinha (outra aba) — atualiza a tela na hora
  window.addEventListener('storage', function (e) { if (e.key === 'sim.feed' || e.key === 'sim.eventos') { S = ler('sim.eventos', S); if (!janela) render(); tourChecaCondicao() } });

  /* ---------- tutorial guiado ---------- */
  var TLANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function tx(o) { return o == null ? '' : typeof o === 'string' ? o : (o[TLANG] || o.pt || '') }
  /* para a aula: se ainda não existe Pixel no simulador, cria um de exemplo (sem abrir janelas) */
  function garantePixel() { if (!S.datasets.length) { S.datasets.unshift({ id: novoId(), nome: 'Pixel da Lojinha da Marina', criado: Date.now(), capi: false, am: true, cookies: true, auto: false }); grava(); render() } }
  var TOURS = {
    'gerenciador-pixel': [
      { alvo: '[data-t=menu-conjuntos]', clique: true, pre: function () { garantePixel() },
        tit: { pt: 'Conjuntos de dados', es: 'Conjuntos de datos' }, txt: { pt: 'No atendimento, este é o primeiro lugar para olhar. Clique em Conjuntos de dados: é onde ficam os Pixels do cliente.', es: 'En la atención, este es el primer lugar donde mirar. Haz clic en Conjuntos de datos: ahí están los Pixels del cliente.' },
        dica: { pt: 'A Meta chama o Pixel de conjunto de dados. É a mesma coisa.', es: 'Meta llama al Pixel conjunto de datos. Es lo mismo.' } },
      { alvo: '[data-t=ds-abrir]', clique: true, tit: { pt: 'Abrir o Pixel', es: 'Abrir el Pixel' }, txt: { pt: 'Clique no Pixel do cliente.', es: 'Haz clic en el Pixel del cliente.' } },
      { alvo: '.ds-cab [data-t=id-novo]', tit: { pt: 'O ID do Pixel', es: 'El ID del Pixel' },
        txt: { pt: 'Este é o número de identificação. Ele tem que ser IGUAL ao número que está no site (dentro do init). Se for diferente, os eventos vão para outro Pixel.', es: 'Este es el número de identificación. Tiene que ser IGUAL al número que está en el sitio (dentro del init). Si es distinto, los eventos van a otro Pixel.' },
        dica: { pt: 'Para saber o número do site, peça um print ao cliente ou use a extensão Consultor de Dados.', es: 'Para saber el número del sitio, pide una captura al cliente o usa la extensión Asesor de datos.' } },
      { alvo: '[data-t=aba-teste]', clique: true, tit: { pt: 'Testar eventos', es: 'Probar eventos' }, txt: { pt: 'Agora veja se os eventos chegam. Abra a aba Testar eventos.', es: 'Ahora mira si llegan los eventos. Abre la pestaña Probar eventos.' } },
      { alvo: '[data-t=abrir-site]', clique: true, tit: { pt: 'Abrir o site', es: 'Abrir el sitio' }, txt: { pt: 'O endereço do site já está preenchido. Clique em Abrir site: a loja abre numa aba nova. Depois volte para esta aba.', es: 'La dirección del sitio ya está completa. Haz clic en Abrir sitio: la tienda se abre en una pestaña nueva. Luego vuelve a esta pestaña.' } },
      { alvo: '[data-t=feed]', cond: function () { return feed().some(function (e) { return e.t >= (S.testeDesde || 0) && e.nome === 'PageView' }) },
        tit: { pt: 'Esperando o PageView', es: 'Esperando el PageView' }, txt: { pt: 'Quando a loja abre, o PageView aparece aqui sozinho. Chegou? Então clique em Próximo.', es: 'Cuando la tienda se abre, el PageView aparece aquí solo. ¿Llegó? Entonces haz clic en Siguiente.' },
        dica: { pt: 'Não chegou? Pode ser o ID errado no site, o código faltando ou cookies recusados.', es: '¿No llegó? Puede ser el ID equivocado en el sitio, el código faltante o cookies rechazadas.' } },
      { alvo: '[data-t=feed]', fim: true, tit: { pt: 'Pronto! 🎉', es: '¡Listo! 🎉' },
        txt: { pt: 'Você conferiu no Gerenciador de Eventos: o Pixel existe, você sabe o ID e o PageView está chegando. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'Revisaste en el Administrador de eventos: el Pixel existe, sabes el ID y el PageView está llegando. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.' } }
    ],
    'criar-pixel': [
      { alvo: '[data-t=conectar]', clique: true, tit: { pt: 'Conectar dados', es: 'Conectar datos' }, garante: function () { fechaJanela() },
        txt: { pt: 'Este é o Gerenciador de Eventos do portfólio Lojinha da Marina Aula (confira sempre o nome no canto superior direito). Para criar o Pixel, clique em Conectar dados.', es: 'Este es el Administrador de eventos del portfolio Lojinha da Marina Aula (revisa siempre el nombre arriba a la derecha). Para crear el Pixel, haz clic en Conectar datos.' } },
      { alvo: '[data-t=op-web]', clique: true, tit: { pt: 'Tipo de dado: Web', es: 'Tipo de dato: Web' }, garante: function () { janelaCom('conectar') },
        txt: { pt: 'O Pixel mede o que acontece no SITE. Escolha Web.', es: 'El Pixel mide lo que pasa en el SITIO. Elige Web.' },
        dica: { pt: 'App, Offline, CRM e Mensagens são outras fontes de dados, para outras aulas.', es: 'App, Offline, CRM y Mensajes son otras fuentes de datos, para otras clases.' } },
      { alvo: '[data-t=avancar]', clique: true, tit: { pt: 'Avançar', es: 'Siguiente' }, txt: { pt: 'Clique em Avançar.', es: 'Haz clic en Siguiente.' }, garante: function () { janelaCom('conectar', true) } },
      { alvo: '[data-t=nome]', cond: function () { return (window.__nomeDs || '').trim().length > 2 }, tit: { pt: 'O nome', es: 'El nombre' }, garante: function () { janelaCom('criar') },
        txt: { pt: 'Digite um nome, por exemplo: Pixel Aula Lojinha da Marina. Depois clique em Próximo.', es: 'Escribe un nombre, por ejemplo: Pixel Aula Lojinha da Marina. Después haz clic en Siguiente.' },
        dica: { pt: 'A Meta agora chama o Pixel de conjunto de dados. É a mesma coisa.', es: 'Meta ahora llama al Pixel conjunto de datos. Es lo mismo.' } },
      { alvo: '[data-t=capi]', tit: { pt: 'API de Conversões', es: 'API de conversiones' }, garante: function () { janelaCom('criar') }, cond: function () { return window.__capi === false }, bloqueia: function (t) { return window.__capi === false && !!t.closest('label, input') }, erro: { pt: 'Na aula, a caixinha fica DESMARCADA. Clique em Próximo.', es: 'En la clase, la casilla queda DESMARCADA. Haz clic en Siguiente.' },
        txt: { pt: 'Esta caixinha liga também o envio pelo servidor. Na aula, DESMARQUE para estudar o Pixel sozinho primeiro (o Próximo só libera desmarcada).', es: 'Esta casilla activa también el envío por el servidor. En la clase, DESMÁRCALA para estudiar primero el Pixel solo (el Siguiente solo se habilita desmarcada).' },
        dica: { pt: 'Ela vale para o portfólio inteiro, não só para este Pixel.', es: 'Vale para todo el portfolio, no solo para este Pixel.' } },
      { alvo: '[data-t=cats]', cond: function () { return !document.querySelector('.lista-cat input:checked') }, bloqueia: function (t) { return !!t.closest('.lista-cat label') }, erro: { pt: 'A Lojinha não é de nenhuma dessas categorias: deixe todas desmarcadas.', es: 'La Lojinha no es de ninguna de estas categorías: déjalas todas sin marcar.' }, tit: { pt: 'Categorias', es: 'Categorías' }, garante: function () { janelaCom('criar') },
        txt: { pt: 'São categorias de assuntos sensíveis (saúde, religião, política…). Loja de canecas: não marque nenhuma.', es: 'Son categorías de temas sensibles (salud, religión, política…). Tienda de tazas: no marques ninguna.' } },
      { alvo: '[data-t=criar]', clique: true, tit: { pt: 'Criar', es: 'Crear' }, txt: { pt: 'Clique em Criar.', es: 'Haz clic en Crear.' }, garante: function () { janelaCom('criar') },
        dica: { pt: 'Ao criar, você aceita os Termos das Ferramentas Comerciais da Meta.', es: 'Al crear, aceptas las Condiciones de las Herramientas para empresas de Meta.' } },
      { alvo: '[data-t=id-novo]', semVolta: true, tit: { pt: 'O identificador do Pixel', es: 'El identificador del Pixel' },
        txt: { pt: 'Pronto! Este número é o identificador do Pixel. É ele que vai no código do site; é ele que você compara quando o cliente pergunta “é o Pixel certo?”.', es: '¡Listo! Este número es el identificador del Pixel. Es el que va en el código del sitio; es el que comparas cuando el cliente pregunta “¿es el Pixel correcto?”.' } },
      { alvo: '[data-t=ver-codigo]', clique: true, garante: function () { fechaJanela() }, tit: { pt: 'Colocar no site', es: 'Ponerlo en el sitio' },
        txt: { pt: 'Agora falta colocar o Pixel no site. Clique em Configurar o Pixel para ver o código com este número.', es: 'Ahora falta poner el Pixel en el sitio. Haz clic en Configurar el Pixel para ver el código con este número.' } },
      { alvo: '.janela .codigo', fim: true, garante: function () { janelaCom('codigo') }, tit: { pt: 'O código do seu Pixel', es: 'El código de tu Pixel' },
        txt: { pt: 'Este é o código, já com o número do Pixel dentro (no init). Ele vai no topo de todas as páginas do site, ou use a integração da plataforma da loja. Fim do tutorial! 🎉', es: 'Este es el código, ya con el número del Pixel adentro (en el init). Va arriba en todas las páginas del sitio, o usa la integración de la plataforma de la tienda. ¡Fin del tutorial! 🎉' } }
    ],
    'testar-eventos': [
      { alvo: '[data-t=menu-conjuntos]', tit: 'Conjuntos de dados', txt: 'Clique em Conjuntos de dados para ver seus Pixels.', clique: true, pre: function () { if (!S.datasets.length) { alert('Primeiro crie um Pixel: siga o tutorial "Criar o Pixel".'); location.href = '?tour=criar-pixel'; return false } } },
      { alvo: '[data-t=ds-abrir]', tit: 'Abrir o Pixel', txt: 'Clique no seu Pixel.', clique: true },
      { alvo: '[data-t=aba-teste]', tit: 'Testar eventos', txt: 'Abra a aba Testar eventos.', clique: true },
      { alvo: '[data-t=abrir-site]', tit: 'Abrir o site', txt: 'O endereço da Lojinha já está preenchido. Clique em Abrir site: a loja abre numa aba nova.', clique: true },
      { alvo: '[data-t=feed]', tit: 'Navegue na loja', txt: 'Na aba da Lojinha, abra um produto e ponha no carrinho. Depois volte para esta aba: os eventos aparecem aqui sozinhos.', dica: 'Não chegou nada? Confira se o laboratório 📓 caderno errado ou 🙈 olhos tapados está ligado, ou se você recusou os cookies.', cond: function () { return feed().some(function (e) { return e.t >= (S.testeDesde || 0) }) } },
      { alvo: '[data-t=ev-0]', tit: 'Abrir um evento', txt: 'Chegou! Clique no evento para ver os detalhes.', clique: true },
      { alvo: '[data-t=feed]', tit: 'Os detalhes', txt: 'Aqui estão os parâmetros (content_ids, value, currency...), o endereço da página e o ID do evento (eventID). É assim que se confere se o Pixel está enviando certo. 🎉', fim: true }
    ]
  };
  var tour = null, passo = 0, holo, balao, recorte, rotas = {};   // rotas[passo] = endereço (#...) em que o passo foi mostrado
  function janelaCom(qual, web) { if (janela !== qual) { abreJanela(qual) } if (web && escolha !== 'web') { escolha = 'web'; desenhaJanela() } }
  function tourInicia(nome) { if (!TOURS[nome]) return; tour = TOURS[nome]; passo = 0; recorte = document.createElement('div'); recorte.className = 'tour-recorte'; document.body.appendChild(recorte); holo = document.createElement('div'); holo.className = 'tour-holo'; balao = document.createElement('div'); balao.className = 'tour-balao'; document.body.appendChild(holo); document.body.appendChild(balao); document.body.classList.add('em-tour'); tourMostra() }
  var faltouEv = 0;
  function tourMostra() {
    if (!tour) return; var p = tour[passo];
    if (p.pre && p.pre() === false) return;
    var precisaProx = !p.clique && !p.fim; rotas[passo] = location.hash; faltouEv = 0; p._consertou = false;
    balao.innerHTML = '<span class="masc">' + mascote(54) + '</span><b>' + esc(tx(p.tit)) + '</b><p>' + esc(tx(p.txt)) + '</p>' + (p.dica ? '<div class="dica">💬 Pixel: ' + esc(tx(p.dica)) + '</div>' : '') +
      '<div class="ctrl"><small>Passo ' + (passo + 1) + ' de ' + tour.length + '</small><span>' + (passo && !p.semVolta ? '<button class="btn sec" data-tour="volta" title="Passo anterior">◀</button> ' : '') +
      (p.fim ? '<button class="btn" data-tour="fim">Concluir</button>' : precisaProx ? '<button class="btn" data-tour="prox" ' + (p.cond && !p.cond() ? 'disabled' : '') + '>Próximo ▶</button>' : '<small>👆 clique no destaque</small>') + '</span></div>';
    tourAtualiza();
  }
  function lugarBalao(caixa, alvo, bw, bh, topo) {
    var W = innerWidth, H = innerHeight, m = 12, c = [
      [caixa.right + 18, caixa.top], [caixa.left - bw - 18, caixa.top], [caixa.left, caixa.bottom + 16], [caixa.left, caixa.top - bh - 16],
      [W - bw - m, H - bh - m], [m, H - bh - m], [W - bw - m, topo], [m, topo]];
    function ajusta(p) { return [Math.max(m, Math.min(p[0], W - bw - m)), Math.max(topo, Math.min(p[1], H - bh - m))] }
    function cobre(p, r) { var x = Math.max(0, Math.min(p[0] + bw, r.right) - Math.max(p[0], r.left)), y = Math.max(0, Math.min(p[1] + bh, r.bottom) - Math.max(p[1], r.top)); return x * y }
    for (var i = 0; i < 4; i++) { var a = ajusta(c[i]); if (!cobre(a, caixa)) return a }
    var melhor = null, nota = 1e12; c.forEach(function (p) { var a = ajusta(p), n = cobre(a, alvo) * 1000 + cobre(a, caixa); if (n < nota) { nota = n; melhor = a } });
    return melhor;
  }
  function tourAtualiza() {
    if (!tour || !holo) return; var p = tour[passo], el = $(p.alvo);
    if (!el) { if (++faltouEv >= 3 && p.garante && !p._consertou) { p._consertou = true; try { p.garante() } catch (e) { } }   // destaque sumiu: arruma a tela sozinho, uma vez
      holo.style.opacity = 0; recorte.style.opacity = 0; balao.style.left = '50%'; balao.style.top = '80px'; balao.style.transform = 'translateX(-50%)'; return }
    var r = el.getBoundingClientRect(); holo.style.opacity = 1;
    var cx = el.closest('.janela, [role=dialog], .da-painel, .ma-panel, .tg-caixa'); if (cx === el) cx = null;   // dentro de uma janela: ela fica visível inteira
    holo.classList.toggle('na-janela', !!cx);
    if (cx) { var rc = cx.getBoundingClientRect(); recorte.style.opacity = 1; recorte.style.left = rc.left + 'px'; recorte.style.top = rc.top + 'px'; recorte.style.width = rc.width + 'px'; recorte.style.height = rc.height + 'px' } else recorte.style.opacity = 0;
    holo.style.left = r.left - 4 + 'px'; holo.style.top = r.top - 4 + 'px'; holo.style.width = r.width + 8 + 'px'; holo.style.height = r.height + 8 + 'px';
    var pos = lugarBalao(cx ? cx.getBoundingClientRect() : r, r, balao.offsetWidth || 340, balao.offsetHeight || 160, 42);
    balao.style.transform = 'none'; balao.style.left = pos[0] + 'px'; balao.style.top = pos[1] + 'px';
    var bt = balao.querySelector('[data-tour=prox]'); if (bt && p.cond) bt.disabled = !p.cond();
  }
  // modo guiado sem erros: fora do destaque e do balão, o clique não vale
  document.addEventListener('click', function (ev) {
    if (!tour || !balao || balao.contains(ev.target)) return; var p = tour[passo], el = p && $(p.alvo); if (!el) return;
    var bl = false; if (el === ev.target || el.contains(ev.target)) {
      // passo de "leia e clique em Próximo": botões dentro do destaque não valem (senão a tela anda e o tutorial fica para trás)
      if (!p.clique && !p.cond && !p.bloqueia && ev.target.closest('button, a, [data-acao], [data-ir], [data-escolha], [data-ev]')) { bl = true; p._leia = true }
      else { if (!p.bloqueia) return; try { bl = p.bloqueia(ev.target) } catch (x) { } if (!bl) return }
    }
    ev.preventDefault(); ev.stopImmediatePropagation();
    var a = balao.querySelector('.tg-avisa'); if (!a) { a = document.createElement('div'); a.className = 'tg-avisa'; balao.appendChild(a) }
    a.textContent = tx(bl && p._leia ? { pt: '📖 Primeiro leia e clique em Próximo no balão.', es: '📖 Primero lee y haz clic en Siguiente en el globo.' } : bl && p.erro ? p.erro : { pt: '👆 Siga o destaque amarelo (ou use os botões do balão).', es: '👆 Sigue lo destacado en amarillo (o usa los botones del globo).' });
    balao.classList.remove('tg-treme'); void balao.offsetWidth; balao.classList.add('tg-treme'); setTimeout(function () { if (a.parentNode) a.remove() }, 3500);
  }, true);
  function tourClique(el) { if (!tour) return; var p = tour[passo]; if (p.clique && el.matches(p.alvo)) { passo++; setTimeout(tourMostra, 120) } }
  function tourChecaCondicao() { if (tour) tourAtualiza() }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-tour]'); if (!b) return;
    var t = b.getAttribute('data-tour');
    if (t === 'prox') { passo++; tourMostra() } else if (t === 'volta') {   // volta de verdade: endereço do passo + janela certa
      passo = Math.max(0, passo - 1); var q = tour[passo];
      if (rotas[passo] !== undefined && rotas[passo] !== location.hash) location.hash = rotas[passo];
      if (q.garante) q.garante(); else fechaJanela();
      setTimeout(tourMostra, 150)
    }
    else if (t === 'fim') { holo.remove(); balao.remove(); recorte.remove(); tour = null; document.body.classList.remove('em-tour'); window.VOLTA_AULA.guarda(params.get('voltar')) }
  });
  document.addEventListener('input', function () { tourAtualiza() });
  document.addEventListener('change', function () { setTimeout(tourAtualiza, 0) });   // caixinhas: a resposta só vale depois do change
  setInterval(function () { if (tour) tourAtualiza() }, 500);
  window.addEventListener('resize', tourAtualiza); document.addEventListener('scroll', tourAtualiza, true);
  setInterval(function () { if (rota().aba === 'teste' && !janela && !tour) render() }, 5000);   // atualiza o "há X s"

  // começar do zero (para a aula): ?zerar=1
  if (params.get('zerar')) { S = { datasets: [], testeDesde: 0 }; grava(); try { localStorage.removeItem('sim.feed') } catch (e) { } }
  render();
  if (params.get('tour')) tourInicia(params.get('tour'));
})();
