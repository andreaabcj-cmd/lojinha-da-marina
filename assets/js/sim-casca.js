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
  // telas que NÃO existem na Meta (resumos da Central de Ajuda montados para estudar): ficam marcadas como painel de treino da Lojinha,
  // para ninguém achar que é uma tela real (pente fino 28/10/2026; refazer com a tela real quando ela for vista)
  var TREINO = { 'meta-commerce': ['mudancas'], 'meta-checkoutsite': ['jornada', 'pixel', 'eventos', 'terceiros', 'antiga'], 'meta-shopads': ['antes'], 'meta-verified': ['planos', 'cadastro', 'assinatura'] };
  function marcaTreino() {
    var L = TREINO[pag]; if (!L) return;
    var es = (function () { try { return JSON.parse(localStorage.getItem('plat.lang')) === 'es' } catch (e) { return false } })();
    L.forEach(function (id) { var b = app.querySelector('[data-t="tab-' + id + '"]'); if (b && !b.classList.contains('treino')) { b.classList.add('treino'); b.setAttribute('data-treino', es ? 'práctica' : 'treino'); b.title = es ? 'Panel de práctica de la Lojinha: esta pantalla no existe en Meta' : 'Painel de treino da Lojinha: esta tela não existe na Meta' } });
    var on = app.querySelector('.ss-it.on.treino'), main = app.querySelector('.ss-main'), av = main && main.querySelector('.treino-aviso');
    if (on && main && !av) main.insertAdjacentHTML('afterbegin', '<p class="treino-aviso" data-sem-traduzir="1">🧪 ' + (es ? '<b>Panel de práctica de la Lojinha.</b> Esta pantalla no existe en Meta: resume el Centro de ayuda para estudiar. En la herramienta real, sigue el camino que muestra la clase.' : '<b>Painel de treino da Lojinha.</b> Esta tela não existe na Meta: ela resume a Central de Ajuda para você estudar. Na ferramenta real, siga o caminho que a aula mostra.') + '</p>');
    if (!on && av) av.remove();
  }
  function titulo() {
    var on = app.querySelector('.ss-it.on'); var t = on ? on.textContent : ''; t = t.replace(/^[^\p{L}\p{N}]+/u, '').replace(/\s*\d+\s*$/, '').trim();
    if (t) return t; var h = app.querySelector('.ss-main h1, .ss-topo h1'); return h ? h.textContent.trim() : '';
  }
  // Gerenciador de Anúncios (campanhas, Feed, relatórios): na Meta real a faixa de ícones da esquerda aparece aqui também; só ela entra (o cabeçalho é do próprio simulador)
  var SO_TRILHO = { 'meta-anuncios': 'megafone', 'meta-feed': 'megafone', 'meta-relatorios': 'tabela' };
  function poe() {
    var ss = app.querySelector('.ss'), so = !ss && SO_TRILHO[pag] && app.querySelector('.ga, .rl');
    document.body.classList.toggle('com-casca', !!ss); document.body.classList.toggle('com-trilho', !!so); if (!ss && !so) return;
    var cab = app.querySelector('.ssc-cab'), tr = app.querySelector('.ssc-trilho');
    if (!tr) {
      var on = ON[pag] || SO_TRILHO[pag] || 'menu', b = function (k, t) { return '<button title="' + t + '" tabindex="-1"' + (k === on ? ' class="on"' : '') + '>' + IC[k] + '</button>' };
      tr = document.createElement('nav'); tr.className = 'sim-trilho ssc-trilho'; tr.setAttribute('data-sem-traduzir', '1'); tr.setAttribute('aria-label', 'Ferramentas');
      tr.innerHTML = '<span class="logo meta-inf" aria-label="Meta">∞</span>' + b('sino', 'Notificações') + b('painel', 'Visão geral da conta') + b('tabela', 'Campanhas') + b('pessoas', 'Públicos') + b('megafone', 'Gerenciador de Anúncios') + b('eventos', 'Gerenciador de Eventos') + b('menu', 'Todas as ferramentas');
      app.appendChild(tr);
    }
    if (so) return;
    if (!cab) { cab = document.createElement('header'); cab.className = 'sim-cab ssc-cab'; cab.setAttribute('data-sem-traduzir', '1'); cab.innerHTML = '<h1></h1><div class="sim-portfolio" title="Portfólio empresarial"><span class="L">L</span>Lojinha da Marina Aula<span class="seta">▾</span></div><span class="sim-avatar">M</span>'; app.appendChild(cab) }
    var h1 = cab.querySelector('h1'), t = titulo(); if (t && h1.textContent !== t) h1.textContent = t;
    marcaTreino();
  }
  // recoloca na hora: o MutationObserver roda antes da tela ser pintada, então a casca não some nem pisca entre um desenho e outro
  var tm = null; function agenda() { clearTimeout(tm); tm = setTimeout(poe, 0) }
  new MutationObserver(poe).observe(app, { childList: true }); poe();
  document.addEventListener('click', agenda); window.addEventListener('hashchange', agenda);
})();
