/* Casca comum dos simuladores da família "Business Suite" (.ss): trilho de ícones + cabeçalho com o portfólio da Marina,
   iguais aos do Gerenciador de Eventos (sim.css: .sim-trilho / .sim-cab). Assim todos os simuladores parecem o mesmo ecossistema Meta.
   Não mexe no conteúdo de nenhum simulador: só acrescenta o trilho e o cabeçalho por cima (e redimensiona .ss em sim-casca.css).
   Cada simulador redesenha o #app inteiro a cada ação; o observador recoloca a casca logo depois. */
(function () {
  var app = document.getElementById('app'); if (!app) return;
  var pag = (location.pathname.split('/').pop() || '').replace('.html', '');
  var ic = function (d) { return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + d + '</svg>' };
  var IC = {
    sino: ic('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0"/>'), painel: ic('<circle cx="12" cy="13" r="8"/><path d="M12 13l4-4"/>'),
    tabela: ic('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/>'), pessoas: ic('<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c1-4 4-5 6-5s5 1 6 5M15 15c3 0 5 1 6 4"/>'),
    megafone: ic('<path d="M3 10v4h4l7 5V5L7 10zM18 9a4 4 0 0 1 0 6"/>'), eventos: ic('<circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M12 9v3l-5 4M12 12l5 4"/>'),
    menu: ic('<path d="M4 6h16M4 12h16M4 18h16"/>'), loja: ic('<path d="M4 9l2-5h12l2 5M4 9v11h16V9M9 20v-6h6v6"/>')
  };
  // qual ícone fica aceso em cada simulador (o que mais se parece com a ferramenta real)
  var ON = { 'meta-publicos': 'pessoas', 'meta-regras': 'megafone', 'meta-relatorios': 'tabela', 'meta-suite': 'menu', 'meta-pixelavancado': 'eventos', 'meta-terceiros': 'eventos', 'meta-mbe': 'eventos',
    'meta-shopify': 'loja', 'meta-commerce': 'loja', 'meta-checkoutsite': 'loja', 'meta-shopads': 'megafone', 'meta-entrega': 'megafone', 'meta-microdados': 'eventos', 'meta-verified': 'menu', 'meta-portfolioav': 'menu' };
  function mascote(px) {
    var rows = ['....uuuuuuu.....', '...uuuuuuuuuU...', '..UUUUUUUUUUUUU.', '...dddddddddd...', '...dssssssssd...', '...ssessssesss..', '...ssssssssss...', '...sssmmmmsss...', '....ssssssss....', '...wwwwwwwwww...', '..wwaawwwwaaww..', '..swaaaaaaaapwwp', '..swaaaaaaaapwkp', '...waaaaaaaapppp', '...aaaaaaaaaa...'];
    var P = { u: '#2F6FD6', U: '#1F4FA8', d: '#2A1E1A', s: '#F4CBA2', e: '#22304A', m: '#D0605A', w: '#fff', a: '#1F3A6E', p: '#A0703A', k: '#22304A' }, o = '';
    rows.forEach(function (r, y) { for (var x = 0; x < r.length; x++) if (r[x] !== '.') o += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + P[r[x]] + '"/>' });
    return '<svg viewBox="0 0 16 15" width="' + px + '" height="' + Math.round(px * 15 / 16) + '" shape-rendering="crispEdges">' + o + '</svg>';
  }
  function titulo() {
    var on = app.querySelector('.ss-it.on'); var t = on ? on.textContent : ''; t = t.replace(/^[^\p{L}\p{N}]+/u, '').replace(/\s*\d+\s*$/, '').trim();
    if (t) return t; var h = app.querySelector('.ss-main h1, .ss-topo h1'); return h ? h.textContent.trim() : '';
  }
  function poe() {
    var ss = app.querySelector('.ss'); document.body.classList.toggle('com-casca', !!ss); if (!ss) return;
    var cab = app.querySelector('.ssc-cab'), tr = app.querySelector('.ssc-trilho');
    if (!tr) {
      var on = ON[pag] || 'menu', b = function (k, t) { return '<button title="' + t + '" tabindex="-1"' + (k === on ? ' class="on"' : '') + '>' + IC[k] + '</button>' };
      tr = document.createElement('nav'); tr.className = 'sim-trilho ssc-trilho'; tr.setAttribute('data-sem-traduzir', '1'); tr.setAttribute('aria-label', 'Ferramentas');
      tr.innerHTML = '<span class="logo">' + mascote(24) + '</span>' + b('sino', 'Notificações') + b('painel', 'Visão geral da conta') + b('tabela', 'Campanhas') + b('pessoas', 'Públicos') + b('megafone', 'Gerenciador de Anúncios') + b('eventos', 'Gerenciador de Eventos') + b('menu', 'Todas as ferramentas');
      app.appendChild(tr);
    }
    if (!cab) { cab = document.createElement('header'); cab.className = 'sim-cab ssc-cab'; cab.setAttribute('data-sem-traduzir', '1'); cab.innerHTML = '<h1></h1><div class="sim-portfolio" title="Portfólio empresarial"><span class="L">L</span>Lojinha da Marina Aula<span class="seta">▾</span></div><span class="sim-avatar">M</span>'; app.appendChild(cab) }
    var h1 = cab.querySelector('h1'), t = titulo(); if (t && h1.textContent !== t) h1.textContent = t;
  }
  var tm = null; function agenda() { clearTimeout(tm); tm = setTimeout(poe, 90) }
  new MutationObserver(agenda).observe(app, { childList: true }); agenda();
  document.addEventListener('click', agenda); window.addEventListener('hashchange', agenda);
})();
