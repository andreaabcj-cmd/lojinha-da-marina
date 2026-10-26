/* Simulador das Configurações do portfólio empresarial (Meta Business Suite) — layout fiel, visual estilizado.
   - Estado no navegador (localStorage "sim.portfolio"); nada é enviado à Meta.
   - Textos copiados das telas reais em pt-BR (conferidas em 13 e 14/10/2026). Telas que ainda não vimos
     de verdade levam o aviso "a conferir com a tela real".
   - Tutoriais guiados (assets/js/tour.js): meta-portfolio.html?tour=conhecer-portfolio | criar-portfolio | convidar-pessoa | criar-conta-anuncios
   - ?zerar=1 começa sem portfólio · ?exemplo=1 garante o portfólio de exemplo da Marina. */
(function () {
  var CONF = { menu: '14/10/2026', pessoas: '14/10/2026', convidar1: '14/10/2026', paginas: '14/10/2026', contas: '14/10/2026', seguranca: '25/10/2026', dominios: '20/10/2026', info: '14/10/2026', criar: '13/10/2026' };
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function grava() { try { localStorage.setItem('sim.portfolio', JSON.stringify(S)) } catch (e) { } }
  function novoId() { var s = '8'; for (var i = 0; i < 14; i++) s += Math.floor(Math.random() * 10); return s }
  var S = ler('sim.portfolio', null) || { pfs: [], atual: null };
  function exemplo() {
    return { id: novoId(), nome: 'Lojinha da Marina Aula', criado: Date.now(),
      pessoas: [{ nome: 'Marina (você)', email: 'marina@lojinha.exemplo', acesso: 'Acesso total', status: 'Ativo' }], paginas: [], contas: [], igs: [] };
  }
  if (params.get('zerar')) { S = { pfs: [], atual: null }; grava() }
  if (params.get('exemplo') && !S.pfs.length) { var ex = exemplo(); S.pfs.push(ex); S.atual = ex.id; grava() }
  function pf() { return S.pfs.filter(function (p) { return p.id === S.atual })[0] || S.pfs[0] || null }

  /* ---------- ícones ---------- */
  var IC = {
    info: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    user: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 5-6 8-6s7 1 8 6"/></svg>',
    conta: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>',
    dados: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/></svg>',
    escudo: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/></svg>',
    seta: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 15l6-6 6 6"/></svg>',
    mais: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M12 5v14M5 12h14"/></svg>',
    ilus: '<svg width="120" height="84" viewBox="0 0 120 84" fill="none"><rect x="10" y="6" width="100" height="72" rx="6" fill="#EEF1F6"/><rect x="18" y="16" width="40" height="26" rx="3" fill="#D9DFE8"/><rect x="62" y="16" width="40" height="26" rx="3" fill="#BFE3D2"/><rect x="18" y="46" width="40" height="24" rx="3" fill="#D9DFE8"/><rect x="62" y="46" width="40" height="24" rx="3" fill="#D9DFE8"/></svg>'
  };

  /* ---------- menu (rótulos da tela real, 14/10/2026) ---------- */
  var MENU = [
    ['Informações da empresa', 'info', IC.info],
    ['Usuários', null, IC.user, [['Pessoas', 'pessoas'], ['Parceiros'], ['Usuários do sistema']]],
    ['Contas', null, IC.conta, [['Páginas', 'paginas'], ['Contas de anúncios', 'contas'], ['Grupos de ativos de negócios'], ['Apps'], ['Perfis do Instagram', 'instagram'], ['Contas do WhatsApp'], ['Perfis do Threads']]],
    ['Fontes de dados', null, IC.dados, [['Catálogos'], ['Conjuntos de dados e pixels', 'pixel'], ['Conjuntos de eventos offline'], ['Conversões personalizadas'], ['Públicos compartilhados'], ['Pastas de criativos da empresa']]],
    ['Adequação e segurança para marcas', null, IC.escudo, [['Domínios', 'dominios'], ['Listas de bloqueio de publishers']]],   // tela real 20/10/2026
    ['Central de Segurança', 'seguranca', IC.escudo]
  ];
  function rota() { var h = (location.hash || '').slice(1); return h || (pf() ? 'info' : 'inicio') }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }

  function esqueleto(conteudo, conf) {
    var p = pf(), r = rota();
    var menu = MENU.map(function (m) {
      if (!m[3]) return '<button class="pf-item' + (r === m[1] ? ' on' : '') + '" data-ir="' + m[1] + '" data-t="menu-' + m[1] + '">' + m[2] + ' ' + m[0] + '</button>';
      return '<div class="pf-grupo"><span>' + m[2] + ' ' + m[0] + ' ' + IC.seta + '</span>' + m[3].map(function (s) {
        if (s[1] === 'pixel') return '<a class="pf-sub" href="meta-eventos.html" title="Abre o simulador do Gerenciador de Eventos">' + s[0] + ' ↗</a>';
        return s[1] ? '<button class="pf-sub' + (r === s[1] ? ' on' : '') + '" data-ir="' + s[1] + '" data-t="menu-' + s[1] + '">' + s[0] + '</button>' : '<button class="pf-sub" disabled title="Fora do simulador por enquanto">' + s[0] + '</button>';
      }).join('') + '</div>';
    }).join('');
    return '<div class="sim-faixa">🧪 Simulador de treinamento das Configurações do portfólio · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' +
      '<div class="pf"><header class="pf-cab"><b>Configurações</b>' + (p ? '<button class="pf-chip" data-ir="inicio" data-t="chip" title="Trocar de portfólio"><span class="L">L</span><span><b>' + esc(p.nome) + '</b><small>Portfólio empresarial</small></span></button>' : '') +
      '<button class="pf-tarefas">Tarefas</button><span class="sim-avatar">M</span></header>' +
      '<div class="pf-corpo">' + (p ? '<aside class="pf-menu" data-t="menu">' + menu + '</aside>' : '') + '<main class="pf-main">' + conteudo +
      '<p class="conferido' + (conf ? '' : ' pendente') + '">' + (conf ? '✓ Layout conferido com a tela real em ' + conf : '⚠ Tela montada pela documentação da Meta · a conferir com a tela real') + '</p></main></div></div>';
  }
  function vazio(tit, txt, botao) {
    return '<div class="pf-vazio">' + IC.ilus + '<b>' + tit + '</b><p>' + txt + '</p>' + (botao || '') + '</div>';
  }
  function cabTela(tit, botoes) { return '<div class="pf-tit"><h1>' + tit + ' <span class="i">ⓘ</span></h1><div class="pf-acoes"><input class="pf-busca" placeholder="Pesquisar por nome ou ID" aria-label="Pesquisar"/><button class="btn sec">Filtros</button>' + (botoes || '') + '</div></div>' }

  /* ---------- telas ---------- */
  var TELAS = {
    inicio: function () {   // como no Business Suite real (print de 13/10): o seletor de portfólios aberto, no topo à esquerda
      var lista = S.pfs.length ? S.pfs.map(function (p) { var n = p.paginas.length + p.contas.length; return '<button class="pf-linha" data-pf="' + p.id + '"><span class="L">L</span><span><b>' + esc(p.nome) + '</b><small>' + n + (n === 1 ? ' ativo de negócios' : ' ativos de negócios') + '</small></span></button>' }).join('') : '<p class="miudo">Você ainda não tem um portfólio empresarial.</p>';
      return '<div class="sim-faixa">🧪 Simulador de treinamento do Meta Business Suite · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' +
        '<div class="bs"><aside class="bs-lado"><b class="bs-logo">∞</b>' + ['🏠', '🔔', '✉️', '📝', '📣', '📊', '⚙️'].map(function (x) { return '<span>' + x + '</span>' }).join('') + '</aside>' +
        '<div class="bs-corpo"><header class="bs-topo"><span class="bs-marca"><b>Meta</b> Business Suite</span><button class="bs-seletor">' + (S.pfs.length ? 'Escolher um portfólio' : 'Lojinha da Marina') + ' ▾</button><span class="sim-avatar">M</span></header>' +
        '<div class="bs-drop pf-lista" data-t="seletor"><input class="bs-busca" placeholder="Procurar um ativo de negócios" aria-label="Procurar"/>' +
        '<h3>Portfólios empresariais <span class="i">ⓘ</span></h3>' + lista +
        '<h3>Outros ativos <span class="i">ⓘ</span></h3><p class="miudo">Nenhum ativo fora de um portfólio.</p>' +
        '<button class="btn sec bs-criar" data-acao="criar" data-t="criar-pf">Criar um portfólio empresarial</button></div>' +
        '<div class="bs-fundo"><h2>Página inicial</h2><div class="bs-cards"><i></i><i></i><i></i></div><div class="bs-cards dois"><i></i><i></i></div></div>' +
        '<p class="conferido">✓ Seletor de portfólios conferido com a tela real em ' + CONF.criar + '</p></div></div>';
    },
    info: function () {
      var p = pf();
      return esqueleto('<div class="cartao"><h2>Informações do portfólio empresarial</h2><p><b>' + esc(p.nome) + '</b></p><p class="miudo">Identificação do portfólio empresarial: <span class="id" data-t="pf-id">' + p.id + '</span><br>Página principal: ' + (p.paginas[0] ? esc(p.paginas[0]) : 'nenhuma') + '</p></div>' +
        '<div class="cartao"><h2>Detalhes da empresa</h2><table class="tabela"><tr><td>Razão social da empresa</td><td>Lojinha da Marina (empresa fictícia)</td></tr><tr><td>Site</td><td>andreaabcj-cmd.github.io/lojinha-da-marina</td></tr><tr><td>Status de verificação da empresa</td><td data-t="status-verificacao">' + (window.PFAV ? PFAV.statusTxt() : 'Não verificada') + '</td></tr></table></div>' +
        '<div class="cartao"><h2>Opções da empresa</h2><p><b>Autenticação de dois fatores</b><br><span class="miudo">Exigir um código de login para acessar este portfólio empresarial em navegadores desconhecidos.</span></p></div>' + (window.PFAV ? PFAV.cartoes('info') : ''), CONF.info);
    },
    pessoas: function () {
      var p = pf();
      var h = (window.PFAV ? PFAV.msgPerm() : '') + cabTela('Pessoas', '<button class="btn sec">Exportar</button><button class="btn" data-acao="convidar" data-t="convidar">' + IC.mais + ' Convidar pessoas</button>') +
        '<div class="cartao" data-t="lista-pessoas"><table class="tabela"><tr><th>Nome</th><th>Acesso ao portfólio empresarial</th><th>Última sessão ativa</th><th></th></tr>' +
        p.pessoas.map(function (x) { return '<tr><td><b>' + esc(x.nome) + '</b><br><span class="miudo">' + esc(x.email) + '</span></td><td>' + esc(x.acesso) + '<br><span class="miudo">' + (x.acesso === 'Acesso total' ? 'Tudo' : 'Básico') + '</span></td><td><span class="st' + (x.status === 'Ativo' ? '' : ' cinza') + '"><i></i>' + esc(x.status) + '</span></td><td>' + (window.PFAV ? PFAV.btnDet(x) : '<button class="lnk">Detalhes</button>') + '</td></tr>' }).join('') + '</table></div>';
      return esqueleto(h, CONF.pessoas);
    },
    paginas: function () {
      var p = pf(); p.conex = p.conex || {};
      var h = cabTela('Páginas', '<span class="pf-drop"><button class="btn" data-acao="menu-pag" data-t="add-pagina">' + IC.mais + ' Adicionar ▾</button>' + (menuPag ? menuPaginas() : '') + '</span>');
      if (!p.paginas.length) return esqueleto(h + '<div class="cartao">' + vazio('Nenhuma Página adicionada', 'Adicione Páginas a este portfólio empresarial para gerenciar todos os seus ativos de negócios em um só local.') + '</div>', CONF.paginas);
      var n = p.paginas[0], ig = p.conex[n];
      h += '<div class="pf-duas"><div class="cartao">' + p.paginas.map(function (x) { return '<div class="pf-linha on"><span class="L">f</span><span><b>' + esc(x) + '</b></span></div>' }).join('') + '</div>' +
        '<div class="cartao" data-t="pag-detalhe"><h2>' + esc(n) + '</h2><p class="miudo">Identificação: <span class="id">4196' + String(p.id || '').slice(-11) + '</span><br>Propriedade de: ' + esc(p.nome) + '</p>' +
        '<p><button class="btn sec">Ver no Facebook</button> <button class="btn sec">Boost</button> ' + (window.PFAV ? '<button class="btn sec" data-av="pag-remover" data-t="btn-remover-pag">Remover</button>' : '<button class="btn sec">Remover</button>') + '</p>' +
        '<p><button class="btn sec">Atribuir pessoas</button> <button class="btn sec">Atribuir parceiro</button> <button class="btn sec" data-acao="conectar-ativos" data-t="conectar-ativos">Conectar ativos</button></p>' +
        '<div class="pf-abas"><button data-acao="aba-pag" data-aba="pessoas" class="' + (abaPag === 'pessoas' ? 'on' : '') + '">Pessoas</button><button disabled>Parceiros</button><button data-acao="aba-pag" data-aba="ativos" data-t="aba-ativos" class="' + (abaPag === 'ativos' ? 'on' : '') + '">Ativos conectados</button></div>' +
        (abaPag === 'ativos' ? '<div data-t="pag-ativos">' + (ig ? '<h3>1 ativo está conectado a esta Página do Facebook</h3><p class="miudo">Você pode conectar ativos ou desconectá-los.</p><b>Conta do Instagram</b><div class="pf-linha"><span class="L">📸</span><span><b>' + esc(ig) + '</b><small>Conta do Instagram</small></span><button class="btn sec">Desconectar</button></div>' :
          vazio('Nenhum ativo conectado', '', '<button class="btn sec" data-acao="conectar-ativos">Conectar ativos</button>')) + '</div>' :
          '<div><h3>' + p.pessoas.length + (p.pessoas.length === 1 ? ' pessoa está atribuída' : ' pessoas estão atribuídas') + ' a essa Página do Facebook</h3><b>Pessoas com acesso total</b>' + p.pessoas.filter(function (x) { return x.acesso === 'Acesso total' }).map(function (x) { return '<div class="pf-linha"><span class="L">' + IC.user + '</span><span><b>' + esc(x.nome) + '</b><small>Acesso total</small></span></div>' }).join('') + '</div>') +
        '</div></div>';
      return esqueleto(h, CONF.paginas);
    },
    contas: function () {
      var p = pf();
      var h = cabTela('Contas de anúncios', '<button class="btn" data-acao="add-conta" data-t="add-conta">' + IC.mais + ' Adicionar</button>');
      if (!p.contas.length) h += '<div class="cartao">' + vazio('Nenhuma conta de anúncios adicionada', 'Adicione contas de anúncios a este portfólio empresarial para gerenciar todos os seus ativos de negócios em um só local.') + '</div>';
      else h += '<div class="pf-duas"><div class="cartao">' + p.contas.map(function (c) { return '<div class="pf-linha on"><span class="L">' + IC.conta + '</span><span><b>' + esc(c.nome) + '</b></span></div>' }).join('') + '</div>' +
        p.contas.slice(0, 1).map(function (c) { return '<div class="cartao" data-t="conta-detalhe"><h2>' + esc(c.nome) + '</h2><p class="miudo">Identificação: <span class="id">' + c.id + '</span><br>Propriedade de: ' + esc(p.nome) + '</p><h3>Formas de pagamento</h3><p class="miudo">Você não adicionou nenhuma forma de pagamento.</p><h3>Dados da empresa</h3><table class="tabela"><tr><td>Moeda</td><td><b>' + esc(c.moeda) + '</b></td></tr><tr><td>Fuso horário</td><td><b>' + esc(c.fuso) + '</b></td></tr></table></div>' }).join('') + '</div>';
      return esqueleto(h, CONF.contas);
    },
    instagram: function () {   // título em inglês na tela real (14/10/2026)
      var p = pf(); p.igs = p.igs || [];
      var h = cabTela('Instagram profiles', '<button class="btn" data-acao="add-ig" data-t="add-ig">' + IC.mais + ' Adicionar</button>');
      if (!p.igs.length) h += '<div class="cartao">' + vazio('Nenhuma conta do Instagram adicionada', 'Adicione contas do Instagram a este portfólio empresarial para gerenciar todos os seus ativos de negócios em um só local.') + '</div>';
      else h += '<div class="pf-duas"><div class="cartao">' + p.igs.map(function (g) { return '<div class="pf-linha on"><span class="L">📸</span><span><b>@' + esc(g.user) + '</b></span></div>' }).join('') + '</div>' +
        p.igs.slice(0, 1).map(function (g) { return '<div class="cartao" data-t="ig-detalhe"><h2>@' + esc(g.user) + '</h2><p class="miudo">Identificação: <span class="id">' + g.id + '</span><br>Propriedade de: ' + esc(p.nome) + '</p><p><button class="btn sec">Atribuir pessoas</button> <button class="btn sec">Atribuir parceiro</button> <button class="btn sec">Conectar ativos</button></p><p class="miudo">Pessoas · Parceiros · Ativos conectados</p></div>' }).join('') + '</div>';
      return esqueleto(h, CONF.menu);
    },
    dominios: function () {   // tela real 20/10/2026 (título em inglês na tela real)
      var p = pf();
      var h = '<div class="pf-tit"><h1>Domains</h1><div class="pf-acoes"><button class="btn" data-acao="add-dominio" data-t="add-dominio">' + IC.mais + ' Adicionar</button></div></div>' +
        (p.dominioInformado ? '<div class="pf-nota" data-t="dom-informado"><b>🧪 No simulador você informou ' + esc(p.dominioInformado) + '.</b><p>Nada foi adicionado de verdade: a etapa seguinte (provar que o domínio é seu) não foi conferida na tela real.</p></div>' : '') +
        '<div class="cartao">' + vazio('Nenhum domínio adicionado', 'Adicione domínios a este portfólio empresarial para gerenciar todos os seus ativos de negócios em um só local.', '<button class="btn" data-acao="add-dominio" data-t="add-dominio-2">' + IC.mais + ' Adicionar</button>') + '</div>';
      return esqueleto(h, CONF.dominios);
    },
    seguranca: function () {   // tela real vista em 14/10 e de novo em 25/10/2026 (só olhando; os textos em inglês são assim na tela real)
      var p = pf(), q = p.dois2fa || 'Ninguém', adm = p.pessoas.filter(function (x) { return x.acesso === 'Acesso total' }),
        pub = p.pessoas.filter(function (x) { return /@(email-gratis|gmail|hotmail|outlook|yahoo)\./i.test(x.email || '') }),
        alvo = q === 'Todos' ? p.pessoas : q === 'Somente administradores' ? adm : [], falta = alvo.filter(function (x) { return x.sem2fa }),
        n = function (k, um, varios) { return k + ' ' + (k === 1 ? um : varios) }, linhas = [];
      if (p.contas.length) linhas.push([n(p.contas.length, 'conta de anúncios', 'contas de anúncios') + ' sem segurança da conta de anúncios por aprovação de semelhantes', 'Cibercriminosos veiculam anúncios não autorizados com frequência. Esses anúncios podem ser publicados sem precisar de análise por outra pessoa.', 'Verifique os níveis de proteção e adicione usuários confiáveis para todas as contas de anúncios.']);
      if (pub.length) linhas.push([n(pub.length, 'usuário', 'usuários') + ' com um domínio de email público', 'Com frequência, os criminosos digitais usam domínios de email públicos de provedores de serviços de email grátis.', 'Remova do seu portfólio empresarial os usuários com domínios de email públicos.']);
      if (!linhas.length) linhas.push(['1 usuário without passkey enabled', 'Passkeys are the most secure way to protect users.', 'Remove users without passkeys from your business portfolio.']);   // linha vista em 14/10
      return esqueleto('<div class="pf-tit"><h1>Central de Segurança</h1></div>' +
        '<div class="cartao" data-t="seg-acoes"><h2>Action needed</h2><p class="miudo">Realize as ações recomendadas e aumente a segurança do seu portfólio empresarial.</p><table class="tabela"><tr><th>Description of risk</th><th>Recommendation to lower risk</th><th></th></tr>' +
        linhas.map(function (l) { return '<tr><td><b>⚠ ' + l[0] + '</b><br><span class="miudo">' + l[1] + '</span></td><td>' + l[2] + '</td><td><button class="btn sec" data-acao="seg-agir">Agir</button></td></tr>' }).join('') + '</table>' +
        '<div data-t="seg-concluidas"><h3>Ação concluída</h3><table class="tabela"><tr><th>Description</th></tr>' + (adm.length <= 10 ? '<tr><td>✅ Acesso com controle total limitado a 10 usuários ou menos</td></tr>' : '') + '</table></div></div>' +
        '<div class="pf-duas iguais"><div class="cartao" data-t="dois-fatores"><h2>🔒 Autenticação de dois fatores</h2><p class="miudo">A autenticação de dois fatores dificulta para outras pessoas obterem acesso ao seu portfólio empresarial e assumirem o controle dos seus ativos. <a>Gerenciar minhas configurações pessoais</a></p>' +
        '<label class="campo"><b>Quem precisa ativar a autenticação de dois fatores?</b><select id="fSeg2fa" data-t="seg-2fa-sel">' + ['Ninguém', 'Somente administradores', 'Todos'].map(function (o) { return '<option' + (o === q ? ' selected' : '') + '>' + o + '</option>' }).join('') + '</select></label>' +
        (q !== 'Ninguém' ? '<p class="miudo" data-t="seg-2fa-conta">' + falta.length + ' de ' + n(alvo.length, 'pessoa precisa', 'pessoas precisam') + ' ativar a autenticação de dois fatores para acessar este portfólio.</p>' : '') +
        '<button class="btn sec" data-ir="pessoas">Analisar o acesso das pessoas</button></div>' +
        '<div class="cartao" data-t="seg-admin2">' + (adm.length >= 2 ? '<h2>✓ Administrador secundário adicionado</h2><p class="miudo">Você tem pelo menos um outro administrador neste portfólio que pode ajudar se você perder acesso à sua conta.</p>' :
          '<h2>Administrador secundário</h2><p class="miudo">É útil ter mais de uma pessoa com controle total do portfólio: se uma pessoa sair, outra cuida das tarefas administrativas.</p><p class="conferido pendente">⚠ Sem outro administrador: este estado não foi visto na tela real (o portfólio de aula tem dois). O texto vem da Central de Ajuda.</p>') +
        '<button class="btn sec" data-acao="convidar">Adicionar</button></div></div>' +
        '<div class="cartao" data-t="seg-peer"><h2>Peer Approval</h2><p class="miudo">As pessoas podem tentar acessar sua empresa e controlar seus ativos por meio de ações específicas, como adicionar um administrador, compartilhar uma linha de crédito ou publicar um anúncio.</p>' +
        '<p><b>Segurança do domínio</b><br><span class="miudo">Require ads to use trusted website domains for all landing pages.</span> <button class="btn sec" data-acao="seg-agir">Manage</button></p><p><b>Segurança da conta de anúncios</b><br><span class="miudo">Exija que anúncios específicos sejam aprovados, como anúncios criados por um novo funcionário ou acima de determinado orçamento.</span> <button class="btn sec" data-acao="seg-agir">Manage</button></p></div>' +
        '<div class="cartao" data-t="seg-passkey"><h2>🔓 Passkey Management</h2><p class="miudo">Passkeys make it harder for users to be compromised, making it harder for others to gain access to your business portfolio and take control of your assets. For more information, <a>go to the help center</a>.</p><label class="campo"><b>Who\'s required to turn on Passkeys?</b><select><option>No one</option></select></label></div>' +
        (window.PFAV ? PFAV.cartoes('seguranca') : '') +
        '<div class="cartao" data-t="seg-rotulos"><h2>🏷️ Rótulos de campanha (tags)</h2><p class="miudo">Rótulos personalizados de campanha (tags) ajudam você a identificar rapidamente suas campanhas de anúncios e a entender melhor as cobranças nas suas faturas.</p><p class="miudo">Você pode mostrar rótulos de campanha ao criar campanhas de anúncios, mas eles ficam ocultos por padrão. Sempre aparecem como tags na visualização da lista de campanhas.</p><label class="campo"><b>Mostrar rótulos de campanha ao criar campanhas de anúncios?</b><select><option>Padrão</option></select></label></div>', CONF.seguranca);
    }
  };
  var menuPag = false, abaPag = 'pessoas';
  function menuPaginas() {
    return '<div class="pf-menu-drop" data-t="opcoes-pagina">' + [
      ['Adicionar uma Página do Facebook existente', 'Ideal para: quando você precisa gerenciar uma Página no mesmo portfólio empresarial que outras Páginas do Facebook, perfis do Instagram ou outros ativos de negócios.'],
      ['Solicitar acesso compartilhado a uma Página do Facebook', 'Access is shared with this business portfolio without connecting the Page. Best for: Agencies who need access to their client\'s Page.'],
      ['Criar uma nova Página do Facebook', 'Conecte-se e compartilhe com clientes novos e existentes no Facebook.']
    ].map(function (o, i) { return (i === 0 && window.PFAV ? '<button data-av="pag-add" data-t="op-pag-existente">' : '<button data-acao="op-pagina">') + '<b>' + o[0] + '</b><small>' + o[1] + '</small></button>' }).join('') + '</div>';
  }

  /* ---------- janelas ---------- */
  var jan = null, passoJ = 0, F = {};
  function abre(qual) { jan = qual; passoJ = 0; F = { nomePf: '', nome: '', sobrenome: '', email: '', convEmail: '', acesso: '', contaNome: '', fuso: '(GMT-07:00) America/Los Angeles', moeda: 'USD — Dólar americano', uso: 'minha', termos: false, erroNome: '' }; desenha() }
  function fecha() { jan = null; var f = $('#fundo'); if (f) f.remove() }
  function passos(lista) { return '<aside class="pf-passos">' + lista.map(function (t, i) { return '<span class="' + (i < passoJ ? 'ok' : i === passoJ ? 'on' : '') + '"><i>' + (i < passoJ ? '✓' : '') + '</i>' + t + '</span>' }).join('') + '</aside>' }
  var ESPECIAL = /[()]/;   // só o que vimos de verdade dar erro (13/10: parênteses). A Meta não publica a lista completa.
  function desenha() {
    var f = $('#fundo'); if (!jan) { if (f) f.remove(); return }
    if (!f) { f = document.createElement('div'); f.id = 'fundo'; f.className = 'fundo'; document.body.appendChild(f) }
    var h = '', larga = false, conf = true;
    if (jan === 'criar') {
      if (passoJ === 0) h = '<h3>Criar um portfólio empresarial<button class="x" data-acao="fechar">✕</button></h3><p>Os portfólios empresariais reúnem suas Páginas do Facebook, perfis do Instagram e as pessoas que trabalham nelas para você gerenciá-los no mesmo local.</p>' +
        '<label class="campo" data-t="pf-nome"><b>Nome do portfólio empresarial</b><small>Deve corresponder ao nome público da empresa, pois ficará visível na Meta. Você pode alterar o nome mais tarde nas Configurações.</small><input id="fNomePf" placeholder="Jasper\'s Market" value="' + esc(F.nomePf) + '" class="' + (F.erroNome ? 'erro' : '') + '"/>' + (F.erroNome ? '<small class="erro-txt">' + F.erroNome + '</small>' : '') + '</label><hr>' +
        '<div data-t="pf-contato"><b>Insira suas informações de contato</b><p class="miudo">Insira seu nome completo e email comercial para se tornar um administrador da empresa. Suas informações de contato ficarão visíveis para as outras pessoas adicionadas a este portfólio empresarial.</p>' +
        '<div class="pf-2col"><label class="campo"><b>Nome</b><input id="fNome" value="' + esc(F.nome) + '"/></label><label class="campo"><b>Sobrenome</b><input id="fSobrenome" value="' + esc(F.sobrenome) + '"/></label></div>' +
        '<label class="campo"><b>Email comercial</b><small>Usaremos esse email para entrar em contato com você sobre sua empresa. Ele não ficará visível para seus clientes.</small><input id="fEmail" type="email" value="' + esc(F.email) + '"/></label></div>' +
        '<p class="miudo">Suas informações de contato serão salvas neste portfólio empresarial. Você pode editá-las a qualquer momento nas configurações da empresa. Ao criar um portfólio empresarial, você concorda com os <a>Termos Comerciais</a> em nome da empresa.</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="pf-criar" data-t="pf-criar" ' + (okCriar() ? '' : 'disabled') + '>Criar</button></div>';
      else if (passoJ === 1) h = '<h3>O que você quer adicionar a este portfólio empresarial?<button class="x" data-acao="fechar">✕</button></h3><p>Adicione suas Páginas do Facebook e perfis do Instagram como ativos que você poderá gerenciar neste portfólio empresarial. Se uma Página já estiver conectada a um perfil do Instagram, eles serão adicionados juntos a este portfólio empresarial.</p>' +
        '<div class="pf-linha"><span class="L">L</span><span><b>' + esc(F.nomePf) + '</b><small>Portfólio empresarial</small></span></div><p class="miudo" style="margin-left:40px">Nenhuma Página disponível para adicionar.</p>' +
        '<div class="pf-nota"><b>ⓘ Selecione os ativos de negócios relevantes</b><p>Adicione Páginas do Facebook e perfis do Instagram relacionados à mesma empresa ou organização.</p></div><div class="pf-nota"><b>ⓘ Você pode editar esta seleção mais tarde</b></div>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="pf-prox" data-t="pf-pular">Pular</button><button class="btn" data-acao="pf-prox" data-t="pf-avancar1">Avançar</button></div>';
      else if (passoJ === 2) h = '<h3>Adicione pessoas a este portfólio empresarial<button class="x" data-acao="fechar">✕</button></h3><p>As pessoas a seguir já ajudam a gerenciar as Páginas do Facebook e perfis do Instagram que você está reivindicando para este portfólio empresarial. Adicione-as a este portfólio empresarial para que comecem a gerenciar os mesmos itens no Meta Business Suite.</p>' +
        '<div class="pf-linha" data-t="pf-admin"><span class="L">' + IC.user + '</span><span><b>' + esc(F.nome + ' ' + F.sobrenome) + '</b><small>' + esc(F.email) + '</small></span><em class="pf-selo">Controle total</em></div><hr>' +
        '<b>Adicionar outra pessoa por email:</b><div class="pf-2col"><input placeholder="Insira um endereço de email"/><select><option>Funcionário</option></select></div>' +
        '<div class="pf-nota"><b>ⓘ Analise o acesso das pessoas</b></div><div class="pf-nota"><b>ⓘ Como suas informações são usadas e exibidas</b></div>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="pf-volta">Voltar</button><button class="btn sec" data-acao="pf-prox">Pular</button><button class="btn" data-acao="pf-prox" data-t="pf-avancar2">Avançar</button></div>';
      else h = '<h3>Analise e confirme seu portfólio empresarial<button class="x" data-acao="fechar">✕</button></h3><p>Analise e confirme os detalhes deste portfólio empresarial.</p><b>Resumo do portfólio empresarial</b><p class="miudo">Os seguintes itens serão reivindicados neste portfólio:</p>' +
        '<div class="pf-linha"><span class="L">L</span><span><b>' + esc(F.nomePf) + '</b><small>Portfólio empresarial</small></span></div><b>Quem terá acesso a este portfólio empresarial?</b>' +
        '<div class="pf-linha"><span class="L">' + IC.user + '</span><span><b>' + esc(F.nome + ' ' + F.sobrenome) + '</b><small>' + esc(F.email) + '</small></span><em class="pf-selo">Controle total</em></div>' +
        '<div class="pf-nota"><b>ⓘ Você pode editar estes detalhes do portfólio mais tarde</b></div>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="pf-volta">Voltar</button><button class="btn" data-acao="pf-confirmar" data-t="pf-confirmar">Confirmar</button></div>';
    } else if (jan === 'convidar') {
      larga = true;   // as 4 etapas conferidas na tela real em 14/10/2026 (com um email de teste, sem enviar)
      var p = pf(), corpo, ativos = p.contas.map(function (c) { return { tipo: 'Contas de anúncios', n: c.nome } }).concat(p.paginas.map(function (n) { return { tipo: 'Páginas', n: n } }));
      if (F.fechar) corpo = '<h3>Tem certeza de que deseja fechar?<button class="x" data-acao="conv-naofecha">✕</button></h3><p>Você não concluiu as etapas necessárias e nenhuma pessoa será adicionada ao portfólio empresarial.</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="conv-naofecha">Voltar</button><button class="btn" data-acao="fechar">Sim, fechar</button></div>';
      else if (passoJ === 0) corpo = '<h3>Inserir endereços de email<button class="x" data-acao="conv-fechar">✕</button></h3><p>Insira os emails das pessoas que você quer convidar para o portfólio empresarial ' + esc(p.nome) + '. Notificações sobre o portfólio também serão enviadas para esses emails.</p>' +
        '<label class="campo" data-t="conv-email"><b>Endereço de email</b><input id="fConv" type="email" value="' + esc(F.convEmail) + '" placeholder="Insira os endereços de email"/></label><p><b>Configurações adicionais</b><br><span class="miudo">Acesso temporário</span></p>' +
        '<p class="miudo">Quer trabalhar com alguém de uma empresa diferente? <a>Adicione essa pessoa como parceiro</a></p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="conv-prox" data-t="conv-avancar" ' + (/.+@.+\..+/.test(F.convEmail) ? '' : 'disabled') + '>Avançar</button></div>';
      else if (passoJ === 1) corpo = '<h3>Conceder acesso ao portfólio empresarial<button class="x" data-acao="conv-fechar">✕</button></h3><p>Selecione as tarefas que correspondem melhor ao que as pessoas precisam fazer no portfólio empresarial de ' + esc(p.nome) + '.</p><div data-t="conv-acesso">' +
        '<div class="pf-nivel"><small>Acesso parcial</small><label class="pf-sw"><span><b>Básico</b><small>Veja as pessoas com controle total. Todas as pessoas adicionadas ao portfólio empresarial têm acesso básico. Elas podem trabalhar apenas nas Páginas, nas contas do Instagram e nos outros ativos de negócios atribuídos a elas.</small></span><input type="checkbox" checked disabled/><i></i></label></div>' +
        '<div class="pf-nivel"><small>Acesso total</small><label class="pf-sw" data-t="conv-gerenciar"><span><b>Tudo</b><small>Este é o nível máximo de controle que você pode dar. A pessoa poderá fazer tudo que foi mencionado acima, atribuir acesso total a outras pessoas e excluir o portfólio empresarial.</small><em>Gerenciar</em></span><input type="checkbox" id="fGerenciar"' + (F.gerenciar ? ' checked' : '') + '/><i></i></label></div></div>' +
        '<p class="miudo"><a>Ver opções avançadas</a> · <a>Saiba mais sobre como atribuir acesso a um portfólio empresarial</a></p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="conv-volta">Voltar</button><button class="btn" data-acao="conv-prox" data-t="conv-avancar2">Avançar</button></div>';
      else if (passoJ === 2) corpo = '<h3>Atribuir ativos de negócios<button class="x" data-acao="conv-fechar">✕</button></h3><p>Atribua pessoas para trabalhar em Páginas do Facebook, contas do Instagram ou outros ativos de negócios no portfólio empresarial ' + esc(p.nome) + '. <a>Troque para atribuição de ativo individual</a></p>' +
        '<div class="pf-3col" data-t="conv-ativos"><div><small>Selecione o tipo de ativo</small>' + (ativos.length ? ['Contas de anúncios', 'Páginas'].filter(function (t) { return ativos.some(function (a) { return a.tipo === t }) }).map(function (t, k) { return '<span class="pf-tipo' + (k === 0 ? ' on' : '') + '">' + t + '</span>' }).join('') : '<span class="miudo">Nenhum ativo neste portfólio ainda.</span>') + '</div>' +
        '<div><small>Selecione os ativos</small>' + (ativos.length ? '<label class="pf-ck"><input type="checkbox" data-todos/> Selecionar tudo</label>' + ativos.map(function (a, k) { return '<label class="pf-ck"><input type="checkbox" data-ativo="' + k + '"' + (F.ativos && F.ativos[k] ? ' checked' : '') + '/> ' + esc(a.n) + '</label>' }).join('') : '') + '</div>' +
        '<div><small>Atribuir permissões</small><p class="miudo">A atribuição de contas de anúncios permite que as pessoas criem, gerenciem e analisem o desempenho dos seus anúncios.</p><p class="miudo">Dica: se quiser que as pessoas veiculem anúncios, você também precisará dar a elas acesso a anúncios nas Páginas do Facebook ou nos perfis do Instagram.</p></div></div>' +
        '<p class="miudo">' + nAtivos() + ' ativos selecionados</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="conv-volta">Voltar</button><button class="btn" data-acao="conv-prox" data-t="conv-avancar3">Avançar</button></div>';
      else corpo = '<h3>Conferir o convite<button class="x" data-acao="conv-fechar">✕</button></h3><p>Enviaremos um convite para os emails abaixo chamando as pessoas para participar do portfólio empresarial de ' + esc(p.nome) + '.</p>' +
        '<div data-t="conv-resumo"><b>Adicionar ao portfólio empresarial</b><p>' + esc(F.convEmail) + '</p><b>Acesso ao portfólio e aos ativos</b><p>' + esc(p.nome) + '<br><span class="miudo">' + (F.gerenciar ? 'Acesso total: Tudo' : 'Acesso parcial: Básico') + '</span><br><span class="miudo">' + (nAtivos() ? nAtivos() + ' ativo(s) atribuído(s)' : 'Nenhum ativo atribuído') + '</span></p></div>' +
        '<p class="miudo">O nome da empresa, a data de criação do portfólio, o status de verificação, a razão social, o país, o site, as informações da Página principal e o número de seguidores da Página mais relevante da sua empresa ficarão disponíveis para os usuários convidados.</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="conv-volta">Voltar</button><button class="btn" data-acao="conv-enviar" data-t="conv-enviar">Convidar com ' + nAtivos() + ' ativos</button></div>';
      h = '<div class="pf-jan2">' + passos(['Inserir email', 'Conceder acesso', 'Atribuir ativos', 'Analisar']) + '<div>' + corpo + '</div></div>';
    } else if (jan === 'add-conta') {
      // tela real vista em 25/10/2026 no portfólio de aula (só aberta e fechada). Lá, “Criar” e “Adicionar existente” estavam apagadas, com o aviso:
      // “Você atingiu o número máximo de contas de anúncios permitido para um novo portfólio empresarial…” (o portfólio de aula já tem 1 conta)
      h = '<h3>Adicionar uma conta de anúncios<button class="x" data-acao="fechar">✕</button></h3><p class="miudo">Não é possível remover contas de anúncios de um portfólio empresarial depois que elas são adicionadas.</p>' +
        '<button class="pf-op" data-acao="conta-nova" data-t="conta-nova"><span>' + IC.mais + '</span><span><b>Criar uma nova conta de anúncios</b><small>Gerencie anúncios para sua empresa, marca ou organização.</small><small>Ideal para: quando você não tem acesso às contas de anúncios existentes e precisa de uma forma de veicular anúncios.</small></span></button>' +
        '<button class="pf-op" data-acao="conta-outra"><span>🏷️</span><span><b>Adicionar uma conta de anúncio existente</b><small>Transfira uma conta de anúncios para este portfólio empresarial. Você precisa ter acesso à conta de anúncios para adicioná-la.</small><small>Ideal para: quando você quer gerenciar a conta de anúncios em um portfólio com Páginas, perfis do Instagram e outros ativos de negócios em que trabalha.</small></span></button>' +
        '<button class="pf-op" data-acao="conta-outra"><span>🔑</span><span><b>Pedir acesso a uma conta de anúncios em outro portfólio empresarial</b><small>Tenha acesso a uma conta de anúncios em outro portfólio. A conta de anúncios não será transferida.</small><small>Ideal para: agências que precisam de acesso à conta de anúncios do cliente.</small></span></button>';
    } else if (jan === 'conta') {
      larga = true; var p2 = pf(), corpo2;
      if (passoJ === 0) corpo2 = '<h3>Crie uma nova conta de anúncios para este portfólio<button class="x" data-acao="fechar">✕</button></h3><p class="miudo">Gerencie os anúncios para sua empresa, marca ou organização.</p>' +
        '<label class="campo" data-t="conta-nome"><b>Nome da conta de anúncios</b><input id="fConta" value="' + esc(F.contaNome) + '"/></label>' +
        '<div data-t="conta-fuso-moeda"><label class="campo" data-t="conta-fuso"><b>Fuso horário</b><select id="fFuso">' + ['(GMT-07:00) America/Los Angeles', '(GMT-03:00) America/Sao Paulo', '(GMT-05:00) America/Bogota', '(GMT-06:00) America/Mexico City'].map(function (o) { return '<option' + (F.fuso === o ? ' selected' : '') + '>' + o + '</option>' }).join('') + '</select></label>' +
        '<label class="campo" data-t="conta-moeda"><b>Moeda</b><select id="fMoeda">' + ['USD — Dólar americano', 'BRL — Real brasileiro', 'COP — Peso colombiano', 'MXN — Peso mexicano', 'EUR — Euro'].map(function (o) { return '<option' + (F.moeda === o ? ' selected' : '') + '>' + o + '</option>' }).join('') + '</select></label></div>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="conta-prox" data-t="conta-avancar" ' + (F.contaNome.trim() ? '' : 'disabled') + '>Avançar</button></div>';
      else if (passoJ === 1) corpo2 = '<h3>Selecione quem usará esta conta de anúncios<button class="x" data-acao="fechar">✕</button></h3><b>Esta conta de anúncios será usada para</b><div data-t="conta-uso">' +
        [['minha', 'Minha empresa'], ['outra', 'Outra empresa ou cliente']].map(function (o) { return '<label class="pf-op' + (F.uso === o[0] ? ' on' : '') + '"><input type="radio" name="uso" value="' + o[0] + '"' + (F.uso === o[0] ? ' checked' : '') + '/><span><b>' + o[1] + '</b></span></label>' }).join('') + '</div>' +
        '<p class="miudo">Selecione "Outra empresa ou cliente" para garantir que o nome da outra empresa seja exibido no Facebook quando você criar um anúncio em nome dela, inclusive no diálogo "Por que estou vendo esse anúncio". Você também poderá acessar os recursos do Gerenciador de Público da outra empresa, incluindo o tamanho do público personalizado dela e a ferramenta de sobreposição de público.</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="conta-volta">Voltar</button><button class="btn" data-acao="conta-prox" data-t="conta-avancar2">Avançar</button></div>';
      else corpo2 = '<h3>Confirme a conta de anúncios que você quer criar<button class="x" data-acao="fechar">✕</button></h3><p>A conta de anúncios será criada e adicionada ao portfólio empresarial ' + esc(p2.nome) + '.</p>' +
        '<table class="tabela"><tr><td>Nome</td><td><b>' + esc(F.contaNome) + '</b></td></tr><tr><td>Fuso horário</td><td><b>' + esc(F.fuso) + '</b></td></tr><tr><td>Moeda</td><td><b>' + esc(F.moeda) + '</b></td></tr></table>' +
        '<p class="miudo">Pessoas que tiverem acesso com controle total a este portfólio empresarial também poderão gerenciar esta conta de anúncios.</p><p class="miudo"><b>Depois de adicionada, a conta de anúncios não pode ser removida do portfólio empresarial.</b></p>' +
        '<label class="pf-termos" data-t="conta-termos"><input type="checkbox" id="fTermos"' + (F.termos ? ' checked' : '') + '/> Concordo com os <a>Termos Comerciais da Meta</a> e as <a>Políticas de Publicidade</a> em nome do portfólio empresarial ' + esc(p2.nome) + '.</label>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="conta-volta">Voltar</button><button class="btn" data-acao="conta-criar" data-t="conta-criar" ' + (F.termos ? '' : 'disabled') + '>Criar conta de anúncios</button></div>';
      h = '<div class="pf-jan2">' + passos(['Detalhes', 'Uso', 'Confirmar']) + '<div>' + corpo2 + '</div></div>';
    } else if (jan === 'add-ig') {
      if (passoJ === 0) h = '<h3>Add an Instagram profile<button class="x" data-acao="fechar">✕</button></h3>' +
        '<div class="pf-nota" data-t="ig-aviso"><b>⚠ Somente contas profissionais do Instagram podem ser adicionadas a um portfólio empresarial. Se você adicionar uma conta pessoal, ela mudará para profissional.</b></div>' +
        '<p data-t="ig-anuncios">You\'ll be asked to log into the Instagram profile you want to add. If the profile has a connected ad account, both the profile and ad account will be moved into this business portfolio, giving you a single, secure place to manage tools, run ads and assign access. <b>The ad account can\'t be removed once added.</b></p>' +
        '<p class="miudo">By adding the Instagram profile, you agree to the Instagram Terms, and acknowledge the Privacy policy and Cookies policy on behalf of ' + esc(pf().nome) + ' business portfolio.</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="ig-login" data-t="ig-add">Add Instagram profile</button></div>';
      else if (passoJ === 1) h = '<div class="pf-insta" data-t="ig-autoriza"><p class="miudo" style="text-align:center">Solicitação de autorização</p><b class="ig-logo" style="display:block;text-align:center">Instagram</b>' +
        '<h3 style="justify-content:center;text-align:center">Entre no Meta Business Suite usando sua conta do Instagram</h3>' +
        '<button class="btn" style="width:100%;justify-content:center" data-acao="ig-entrar" data-t="ig-entrar">Entrar como lojinhadamarina</button><button class="btn sec" style="width:100%;justify-content:center;margin-top:8px" data-acao="fechar">Cancelar</button>' +
        '<p class="miudo" style="text-align:center">Não é lojinhadamarina? <a>Trocar de conta</a></p></div>';
      else h = '<h3>@lojinhadamarina was added to the business portfolio<button class="x" data-acao="fechar">✕</button></h3><p>As pessoas que entrarem no Meta Business Suite usando o perfil do Instagram @lojinhadamarina e a senha poderão realizar ações como: Ver a atividade do perfil no portfólio · Veicular anúncios e gerenciar lojas.</p>' +
        '<b>Resumo das alterações</b><div class="pf-linha"><span class="L">L</span><span><b>' + esc(pf().nome) + '</b><small>Portfólio empresarial</small></span></div><div class="pf-linha"><span class="L">📸</span><span><b>@lojinhadamarina</b><small>Perfil do Instagram</small></span></div>' +
        '<div class="rodape-jan"><button class="btn" data-acao="fechar" data-t="ig-concluir">Concluir</button></div>';
    } else if (jan === 'conectar') {   // telas reais de 14/10/2026 (Página › Conectar ativos › Instagram)
      var pg = pf().paginas[0] || 'Lojinha da Marina';
      if (passoJ === 0) h = '<h3>O que você quer conectar?<button class="x" data-acao="fechar">✕</button></h3>' +
        '<button class="pf-op" data-acao="con-prox" data-t="con-ig"><span>📸</span><span><b>Conta do Instagram</b><small>Inspire e conecte-se com seus clientes no Instagram.</small></span></button>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button></div>';
      else if (passoJ === 1) h = '<h3>Conectar ao Instagram<button class="x" data-acao="fechar">✕</button></h3><p class="pf-par">🏪 ··· 📸</p><div data-t="con-info">' +
        '<div class="pf-nota"><b>💡 Apenas uma conta profissional do Instagram pode ser conectada a uma Página do Facebook, e essa conexão pode ser vista por outras pessoas.</b></div>' +
        '<p>Após a conexão da sua Página do Facebook <b>' + esc(pg) + '</b> ao Instagram, as pessoas que gerenciam a Página ou o perfil do Instagram poderão gerenciar tarefas para ambos os perfis. Analise o acesso atribuído às pessoas em <a>Configurações</a>.</p>' +
        '<p>Dependendo do acesso atribuído a cada pessoa, essas tarefas podem incluir:</p><ul><li>Conteúdo e anúncios</li><li>Insights</li><li>Mensagens e comentários</li><li>Configurações e permissões</li></ul></div>' +
        '<div class="rodape-jan"><button class="btn sec" data-t="con-novo">Criar um novo perfil do Instagram</button><button class="btn" data-acao="con-prox" data-t="con-entrar">Entrar no Instagram</button></div>';
      else if (passoJ === 2) h = '<div style="text-align:center;font-size:40px">📸</div><h3 style="justify-content:center">Escolha as configurações de mensagem do Instagram</h3><div data-t="con-msg">' +
        '<label class="pf-sw"><span><b>Permitir acesso a mensagens do Instagram na Caixa de Entrada</b></span><input type="checkbox" id="fMsgIg"' + (F.msgIg === false ? '' : ' checked') + '/><i></i></label>' +
        '<p class="miudo">Dependendo das funções que tiverem, as pessoas que ajudam a gerenciar sua Página poderão ter acesso de visualização e resposta às mensagens do Instagram. Você pode alterar isso nas suas configurações a qualquer momento. <a>Saiba mais</a></p></div>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="con-prox" data-t="con-continuar">Continuar</button></div>';
      else if (passoJ === 3) h = '<div class="pf-insta" data-t="con-autoriza"><p class="miudo" style="text-align:center">Solicitação de autorização</p><b class="ig-logo" style="display:block;text-align:center">Instagram</b>' +
        '<h3 style="justify-content:center;text-align:center">Entre no Meta Business Suite usando sua conta do Instagram</h3><p style="text-align:center">Turbine o post para aumentar seus públicos</p>' +
        '<button class="btn" style="width:100%;justify-content:center" data-acao="con-prox" data-t="con-entrar-ig">Entrar como lojinhadamarina</button><button class="btn sec" style="width:100%;justify-content:center;margin-top:8px" data-acao="fechar">Cancelar</button>' +
        '<p class="miudo" style="text-align:center">Não é lojinhadamarina? <a>Trocar de conta</a></p><p class="miudo" style="text-align:center">Ao clicar em Continuar, você concorda com nossos Termos de Serviços da Meta</p></div>';
      else if (passoJ === 4) h = '<h3>Adição desse perfil do Instagram ao seu portfólio empresarial<button class="x" data-acao="fechar">✕</button></h3><div data-t="con-resumo">' +
        '<p>Se você conectar a Página do Facebook <b>' + esc(pg) + '</b> ao perfil do Instagram <b>lojinhadamarina</b>, o perfil do Instagram será adicionado ao seu portfólio empresarial.</p>' +
        '<b>Seu portfólio empresarial</b><div class="pf-linha"><span class="L">L</span><span><b>' + esc(pf().nome) + '</b><small>Portfólio empresarial · ' + pf().pessoas.length + (pf().pessoas.length === 1 ? ' pessoa tem' : ' pessoas têm') + ' acesso</small></span></div><p class="pf-par" style="margin-left:40px">🏪 🔗 📸</p>' +
        '<p class="miudo">Você tem controle total deste portfólio. Gerencie o acesso a esses ativos de negócios quando quiser e permita que outras pessoas tenham acesso a eles em <b>Configurações</b>.</p></div>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="con-ligar" data-t="con-adicionar">Adicionar</button></div>';
      else h = '<div style="text-align:center;font-size:44px">✅</div><h3 style="justify-content:center">Instagram conectado</h3><p style="text-align:center">A Página do Facebook <b>' + esc(pg) + '</b> agora está conectada ao perfil do Instagram <b>@lojinhadamarina</b>.</p>' +
        '<div class="rodape-jan"><button class="btn" data-acao="con-fim" data-t="con-concluir">Concluir</button></div>';
    } else if (jan === 'dominio') {   // telas reais 20/10/2026 até “Adicionar um domínio”; a etapa seguinte não foi vista
      if (passoJ === 0) h = '<h3>O que você quer fazer?<button class="x" data-acao="fechar">✕</button></h3>' +
        '<button class="pf-op" data-acao="dom-criar" data-t="dom-criar"><span>🌐</span><span><b>Criar um domínio</b><small>Você precisa de um novo domínio para sua empresa.</small></span></button>' +
        '<button class="pf-op" data-acao="dom-solicitar"><span>🤝</span><span><b>Solicitar acesso a um domínio</b><small>Sua empresa precisa usar este ativo em nome de outra empresa.</small></span></button>';
      else if (passoJ === 1) h = '<h3>Adicionar um domínio<button class="x" data-acao="fechar">✕</button></h3><p>Adicione o domínio formatado corretamente que você deseja associar à sua empresa.</p>' +
        '<p class="miudo" data-t="dom-regra">Você só pode verificar o domínio raiz (exemplo.com), e não um subdomínio (loja.exemplo.com) ou uma subpágina (exemplo.com/loja). Não adicione prefixos (http:// ou https://) no início.</p>' +
        '<label class="campo" data-t="dom-campo"><b>Seu domínio</b><input id="fDom" placeholder="exemplo.com ou exemplo.com.br" value="' + esc(F.dom || '') + '" class="' + (F.domErro ? 'erro' : '') + '"/>' + (F.domErro ? '<small class="erro-txt" data-t="dom-erro">' + F.domErro + ' <i>(dica do simulador)</i></small>' : '') + '</label>' +
        '<p class="miudo">Os domínios só podem ser adicionados a uma empresa, mas podem ser compartilhados com parceiros designados.</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="dom-add" data-t="dom-adicionar" ' + ((F.dom || '').trim() ? '' : 'disabled') + '>Adicionar</button></div>';
      else { conf = false; h = '<h3>🧪 O simulador para aqui<button class="x" data-acao="fechar">✕</button></h3><div data-t="dom-metodos"><p>Você informou <b data-sem-traduzir="1">' + esc(F.dom) + '</b>. Na vida real, depois de Adicionar, a Meta mostra como provar que o domínio é seu. Essa tela não foi conferida no portfólio de aula, então não está no simulador.</p>' +
        '<p><b>Pela Central de Ajuda da Meta, são 3 jeitos</b> (e depois o botão Verificar domínio):</p><ul><li>colar uma metatag no &lt;head&gt; da página inicial do site;</li><li>carregar um arquivo HTML na pasta raiz do site;</li><li>adicionar um registro TXT no DNS, no site onde o domínio foi registrado.</li></ul>' +
        '<p class="miudo">Quem faz é o desenvolvedor do site ou quem administra o domínio. Precisa de controle total do portfólio e acesso de administrador ou desenvolvedor ao domínio. Depois de verificado, a metatag, o arquivo ou o registro podem ser removidos.</p></div>' +
        '<div class="rodape-jan"><button class="btn" data-acao="fechar" data-t="dom-fechar">Fechar</button></div>' }
    } else if (jan === 'seg2fa') {   // a confirmação vem da Central de Ajuda (“Confirme sua seleção”); a janela real não foi vista
      conf = false;
      h = '<h3>Autenticação de dois fatores<button class="x" data-acao="fechar">✕</button></h3><p>Quem precisa ativar: <b>' + esc(F.seg2fa) + '</b></p>' +
        '<p class="miudo">O requisito entra em vigor imediatamente. As pessoas que ainda não configuraram a autenticação de dois fatores deverão fazer isso na próxima vez que tentarem acessar o portfólio empresarial.</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-acao="fechar">Cancelar</button><button class="btn" data-acao="seg2fa-ok" data-t="seg-2fa-ok">Confirmar</button></div>';
    } else if (jan === 'aviso') {
      conf = false;
      h = '<h3>Fora do simulador por enquanto<button class="x" data-acao="fechar">✕</button></h3><p>Esta etapa ainda não está montada no simulador, porque ainda não conferimos a tela real dela. Na vida real, siga a Central de Ajuda da Meta.</p><div class="rodape-jan"><button class="btn" data-acao="fechar">Entendi</button></div>';
    }
    f.innerHTML = '<div class="janela' + (larga ? ' larga' : '') + '" role="dialog" aria-modal="true">' + h +
      '<p class="conferido' + (conf ? '' : ' pendente') + '">' + (conf ? '✓ Conferido com a tela real' : '⚠ Tela montada pela documentação da Meta · a conferir com a tela real') + '</p></div>';
    liga();
  }
  // a regra da tela real: só o domínio raiz, sem prefixo, sem subdomínio nem subpágina (as mensagens são do simulador)
  function domErro(v) {
    v = String(v || '').trim().toLowerCase(); if (!v) return 'Escreva o domínio.';
    if (/^https?:\/\//.test(v)) return 'Sem prefixo: tire o http:// ou https:// do começo.';
    if (/\//.test(v)) return 'Só o domínio raiz: tire a parte depois da barra (a subpágina).';
    if (/\s/.test(v) || !/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(v)) return 'Escreva só o domínio, como exemplo.com.br.';
    var partes = v.split('.'), raiz = /\.(com|net|org|gov|edu|art|blog|eco|app|dev)\.[a-z]{2}$/.test(v) ? 3 : 2;
    if (partes.length > raiz) return 'Isso é um subdomínio (' + partes.slice(0, partes.length - raiz).join('.') + '.). Use o domínio raiz: ' + partes.slice(-raiz).join('.') + '.';
    return '';
  }
  function nAtivos() { return F.ativos ? Object.keys(F.ativos).filter(function (k) { return F.ativos[k] }).length : 0 }
  function okCriar() { return F.nomePf.trim() && !ESPECIAL.test(F.nomePf) && F.nome.trim() && F.sobrenome.trim() && /.+@.+\..+/.test(F.email) }
  function liga() {   // campos: guardam o valor e atualizam só o botão (sem redesenhar, para não perder o foco)
    function campo(id, k, cb) { var i = $('#' + id); if (i) i.oninput = i.onchange = function () { F[k] = i.type === 'checkbox' ? i.checked : i.value; if (cb) cb(); window.__simPf = F } }
    function botao(sel, ok) { var b = $(sel); if (b) b.disabled = !ok }
    campo('fNomePf', 'nomePf', function () { F.erroNome = ESPECIAL.test(F.nomePf) ? 'O nome do portfólio empresarial não pode conter caracteres especiais.' : ''; var i = $('#fNomePf'); i.classList.toggle('erro', !!F.erroNome); var t = i.parentNode.querySelector('.erro-txt'); if (F.erroNome && !t) i.insertAdjacentHTML('afterend', '<small class="erro-txt">' + F.erroNome + '</small>'); if (!F.erroNome && t) t.remove(); botao('[data-acao=pf-criar]', okCriar()) });
    ['fNome', 'fSobrenome', 'fEmail'].forEach(function (id, k) { campo(id, ['nome', 'sobrenome', 'email'][k], function () { botao('[data-acao=pf-criar]', okCriar()) }) });
    campo('fConv', 'convEmail', function () { botao('[data-acao=conv-prox]', /.+@.+\..+/.test(F.convEmail)) });
    campo('fConta', 'contaNome', function () { botao('[data-acao=conta-prox]', !!F.contaNome.trim()) });
    campo('fFuso', 'fuso'); campo('fMoeda', 'moeda');
    campo('fTermos', 'termos', function () { botao('[data-acao=conta-criar]', F.termos) });
    campo('fGerenciar', 'gerenciar');
    campo('fMsgIg', 'msgIg');
    campo('fDom', 'dom', function () { botao('[data-acao=dom-add]', !!(F.dom || '').trim()) });
    $$('[data-ativo]').forEach(function (c) { c.onchange = function () { F.ativos = F.ativos || {}; F.ativos[c.getAttribute('data-ativo')] = c.checked; desenha() } });
    $$('[data-todos]').forEach(function (c) { c.onchange = function () { F.ativos = {}; $$('[data-ativo]').forEach(function (x) { F.ativos[x.getAttribute('data-ativo')] = c.checked }); desenha() } });
    $$('[name=uso]').forEach(function (r) { r.onchange = function () { F.uso = r.value; window.__simPf = F; desenha() } });
    window.__simPf = F;
  }

  /* ---------- cliques ---------- */
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-ir],[data-acao],[data-pf]'); if (!a) { if (menuPag && !ev.target.closest('.pf-drop')) { menuPag = false; render() } return }
    if (a.hasAttribute('data-pf')) { S.atual = a.getAttribute('data-pf'); grava(); vai('info'); return }
    if (a.hasAttribute('data-ir')) { menuPag = false; vai(a.getAttribute('data-ir')); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'fechar') fecha();
    else if (ac === 'criar') abre('criar');
    else if (ac === 'pf-criar') { if (okCriar()) { passoJ = 1; desenha() } }
    else if (ac === 'pf-prox') { passoJ++; desenha() }
    else if (ac === 'pf-volta') { passoJ = Math.max(0, passoJ - 1); desenha() }
    else if (ac === 'pf-confirmar') {
      var novo = { id: novoId(), nome: F.nomePf.trim(), criado: Date.now(), pessoas: [{ nome: (F.nome + ' ' + F.sobrenome).trim() + ' (você)', email: F.email, acesso: 'Acesso total', status: 'Ativo' }], paginas: [], contas: [] };
      S.pfs.push(novo); S.atual = novo.id; grava(); fecha(); vai('info');
    }
    else if (ac === 'convidar') abre('convidar');
    else if (ac === 'conv-prox') { passoJ++; desenha() }
    else if (ac === 'conv-fechar') { F.fechar = true; desenha() }
    else if (ac === 'conv-naofecha') { F.fechar = false; desenha() }
    else if (ac === 'conv-volta') { passoJ = Math.max(0, passoJ - 1); desenha() }
    else if (ac === 'conv-enviar') { pf().pessoas.push({ nome: F.convEmail.split('@')[0], email: F.convEmail, acesso: F.gerenciar ? 'Acesso total' : 'Acesso parcial', status: 'Convite enviado' }); grava(); fecha(); render() }
    else if (ac === 'menu-pag') { menuPag = !menuPag; render() }
    else if (ac === 'op-pagina') { menuPag = false; render(); abre('aviso') }
    else if (ac === 'add-conta') abre('add-conta');
    else if (ac === 'aba-pag') { abaPag = a.getAttribute('data-aba'); render() }
    else if (ac === 'conectar-ativos') abre('conectar');
    else if (ac === 'con-prox') { passoJ++; desenha() }
    else if (ac === 'con-ligar') { var p1 = pf(); p1.conex = p1.conex || {}; p1.conex[p1.paginas[0]] = 'lojinhadamarina'; p1.igs = p1.igs || []; if (!p1.igs.length) p1.igs.push({ user: 'lojinhadamarina', id: '1784' + novoId().slice(4) }); grava(); passoJ = 5; desenha() }
    else if (ac === 'con-fim') { fecha(); abaPag = 'ativos'; render() }
    else if (ac === 'add-ig') abre('add-ig');
    else if (ac === 'add-dominio') abre('dominio');
    else if (ac === 'dom-criar') { passoJ = 1; desenha() }
    else if (ac === 'dom-solicitar' || ac === 'conta-outra' || ac === 'seg-agir') abre('aviso');
    else if (ac === 'seg2fa-ok') { pf().dois2fa = F.seg2fa; grava(); fecha(); render() }
    else if (ac === 'dom-add') { F.domErro = domErro(F.dom); if (F.domErro) { desenha(); return } F.dom = F.dom.trim().toLowerCase(); pf().dominioInformado = F.dom; grava(); passoJ = 2; desenha(); render() }
    else if (ac === 'ig-login') { passoJ = 1; desenha() }
    else if (ac === 'ig-entrar') { var p0 = pf(); p0.igs = p0.igs || []; if (!p0.igs.length) p0.igs.push({ user: 'lojinhadamarina', id: '1784' + novoId().slice(4) }); grava(); passoJ = 2; desenha(); render() }
    else if (ac === 'conta-nova') { var keep = jan; abre('conta') }
    else if (ac === 'conta-prox') { passoJ++; desenha() }
    else if (ac === 'conta-volta') { passoJ = Math.max(0, passoJ - 1); desenha() }
    else if (ac === 'conta-criar') { pf().contas.push({ id: '3' + novoId().slice(1), nome: F.contaNome.trim(), fuso: F.fuso.replace(/^\([^)]*\)\s*/, ''), moeda: F.moeda.slice(0, 3) }); grava(); fecha(); render() }
  });
  document.addEventListener('change', function (ev) {   // Central de Segurança: na tela real (26/10/2026) a escolha vale na hora, sem confirmação (a Central fala em “Confirme sua seleção”)
    if (ev.target.id !== 'fSeg2fa') return; var v = ev.target.value;
    if (v === (pf().dois2fa || 'Ninguém')) return; pf().dois2fa = v; grava(); render();
  });
  window.addEventListener('hashchange', function () { menuPag = false; render() });

  /* ---------- para os tutoriais arrumarem a tela quando a pessoa volta um passo ---------- */
  window.SIMPF = {
    dados: function () { return S }, novoId: novoId, fechaMenu: function () { menuPag = false },
    fecha: fecha, abre: function (q, p) { if (jan !== q) abre(q); if (p != null && passoJ !== p) { passoJ = p; desenha() } },
    garanteExemplo: function () { if (!S.pfs.length) { var e = exemplo(); S.pfs.push(e); S.atual = e.id; grava(); render() } },
    // aula 04 do Instagram: Página e Instagram já no portfólio, ainda sem ligação
    garanteAula4: function () { this.garanteExemplo(); var p = pf(); p.igs = p.igs || []; p.conex = p.conex || {}; if (!p.paginas.length) p.paginas.push('Lojinha da Marina'); if (!p.igs.length) p.igs.push({ user: 'lojinhadamarina', id: '1784' + novoId().slice(4) }); if (p.conex[p.paginas[0]] && !SIMPF._ligando) delete p.conex[p.paginas[0]]; grava(); render() },
    aba: function (x) { abaPag = x; render() },
    estado: function () { return { jan: jan, passo: passoJ, F: F, pf: pf() } },
    render: function () { render() }, pf: function () { return pf() }, grava: function () { grava() }, vai: function (h) { vai(h) },
    domErro: function (v) { return domErro(v) }, redesenha: function () { desenha() }
  };

  function render() {
    var r = rota(); if (!pf() && r !== 'inicio') r = 'inicio';
    $('#app').innerHTML = (TELAS[r] || TELAS.info)();
    if (window.PFAV) PFAV.aposRender();
  }
  render();
  if (params.get('aula') === 'ig4') SIMPF.garanteAula4();   // aula 04 do Instagram: Página + Instagram no portfólio, sem ligação

  /* ---------- tutoriais guiados (tour.js) ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  TOURS['conhecer-portfolio'] = [
    { alvo: '[data-t=chip]', garante: function () { SIMPF.garanteExemplo(); SIMPF.fecha() },
      tit: T('Em qual portfólio estou?', '¿En qué portfolio estoy?'), txt: T('Aqui em cima aparece o nome do portfólio aberto. No atendimento, confira SEMPRE este nome primeiro: muitos problemas são “estou no portfólio errado”.', 'Aquí arriba aparece el nombre del portfolio abierto. En la atención, revisa SIEMPRE este nombre primero: muchos problemas son “estoy en el portfolio equivocado”.') },
    { alvo: '[data-t=menu]', tit: T('O menu do portfólio', 'El menú del portfolio'), txt: T('O portfólio é a “pasta” da empresa. No menu ficam as pessoas (Usuários), os ativos (Contas: Páginas, contas de anúncios, Instagram…) e os dados (Fontes de dados: catálogos, Pixels…).', 'El portfolio es la “carpeta” de la empresa. En el menú están las personas (Usuarios), los activos (Cuentas: Páginas, cuentas publicitarias, Instagram…) y los datos (Fuentes de datos: catálogos, Pixels…).') },
    { alvo: '[data-t=menu-pessoas]', clique: true, tit: T('Pessoas', 'Personas'), txt: T('Clique em Pessoas.', 'Haz clic en Personas.') },
    { alvo: '[data-t=lista-pessoas]', tit: T('Quem trabalha no portfólio', 'Quién trabaja en el portfolio'), txt: T('Aqui ficam as pessoas e o acesso de cada uma. Quem cria o portfólio ganha acesso total.', 'Aquí están las personas y el acceso de cada una. Quien crea el portfolio recibe acceso total.') },
    { alvo: '[data-t=menu-paginas]', clique: true, tit: T('Os ativos: Páginas', 'Los activos: Páginas'), txt: T('Agora clique em Páginas, dentro de Contas.', 'Ahora haz clic en Páginas, dentro de Cuentas.') },
    { alvo: '.pf-vazio, [data-t=pag-detalhe]', tit: T('Um ativo, um portfólio', 'Un activo, un portfolio'), txt: T('Aqui ficam as Páginas do portfólio (a da Marina entra na aula 04). Regra da Meta: cada ativo (Página, conta de anúncios, Pixel…) pertence a UM portfólio só.', 'Aquí están las Páginas del portfolio (la de Marina entra en la clase 04). Regla de Meta: cada activo (Página, cuenta publicitaria, Pixel…) pertenece a UN solo portfolio.') },
    { alvo: '[data-t=menu-seguranca]', clique: true, tit: T('Central de Segurança', 'Centro de seguridad'), txt: T('Por último, clique em Central de Segurança.', 'Por último, haz clic en Centro de seguridad.') },
    { alvo: '[data-t=dois-fatores]', fim: true, tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Aqui a Meta mostra o que melhorar na segurança, como a autenticação de dois fatores. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Aquí Meta muestra qué mejorar en la seguridad, como la autenticación en dos pasos. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['criar-portfolio'] = [
    { alvo: '[data-t=criar-pf]', clique: true, garante: function () { SIMPF.fecha() },
      tit: T('Criar um portfólio', 'Crear un portfolio'), txt: T('A Marina ainda não tem portfólio. Clique em Criar um portfólio empresarial.', 'Marina todavía no tiene portfolio. Haz clic en Crear un portfolio comercial.') },
    { alvo: '[data-t=pf-nome]', garante: function () { SIMPF.abre('criar', 0) }, cond: function () { var f = window.__simPf; return !!(f && f.nomePf.trim() && !f.erroNome) },
      tit: T('O nome', 'El nombre'), txt: T('Digite o nome público da empresa, por exemplo: Lojinha da Marina. Depois clique em Próximo.', 'Escribe el nombre público de la empresa, por ejemplo: Lojinha da Marina. Después haz clic en Siguiente.'),
      dica: T('Teste digitar “Lojinha da Marina (aula)”: os parênteses dão erro de caracteres especiais. Aconteceu de verdade com a gente!', 'Prueba escribir “Lojinha da Marina (aula)”: los paréntesis dan error de caracteres especiales. ¡Nos pasó de verdad!') },
    { alvo: '[data-t=pf-contato]', garante: function () { SIMPF.abre('criar', 0) }, cond: function () { var f = window.__simPf; return !!(f && f.nome.trim() && f.sobrenome.trim() && /.+@.+\..+/.test(f.email)) },
      tit: T('Quem administra', 'Quién administra'), txt: T('Preencha nome, sobrenome e o email comercial (na aula, pode inventar, ex.: marina@lojinha.exemplo). Quem cria vira administrador.', 'Completa nombre, apellido y el correo comercial (en la clase, puedes inventarlo, ej.: marina@lojinha.exemplo). Quien crea se vuelve administrador.') },
    { alvo: '[data-t=pf-criar]', clique: true, garante: function () { SIMPF.abre('criar', 0) }, tit: T('Criar', 'Crear'), txt: T('Clique em Criar.', 'Haz clic en Crear.'),
      dica: T('Ao criar, a empresa aceita os Termos Comerciais da Meta.', 'Al crear, la empresa acepta las Condiciones Comerciales de Meta.') },
    { alvo: '[data-t=pf-avancar1]', clique: true, garante: function () { SIMPF.abre('criar', 1) }, tit: T('Os ativos', 'Los activos'), txt: T('Aqui dá para trazer Páginas e perfis do Instagram. A Marina vai trazer a Página da loja com calma na aula 04. Clique em Avançar.', 'Aquí se pueden traer Páginas y perfiles de Instagram. Marina va a traer la Página de la tienda con calma en la clase 04. Haz clic en Siguiente.') },
    { alvo: '[data-t=pf-admin]', garante: function () { SIMPF.abre('criar', 2) }, tit: T('Controle total', 'Control total'), txt: T('Quem cria o portfólio fica com controle total. Aqui dá para chamar mais pessoas, mas faremos isso com calma na aula 03.', 'Quien crea el portfolio queda con control total. Aquí se puede invitar a más personas, pero lo haremos con calma en la clase 03.') },
    { alvo: '[data-t=pf-avancar2]', clique: true, garante: function () { SIMPF.abre('criar', 2) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=pf-confirmar]', clique: true, garante: function () { SIMPF.abre('criar', 3) }, tit: T('Confirmar', 'Confirmar'), txt: T('Confira o resumo e clique em Confirmar.', 'Revisa el resumen y haz clic en Confirmar.') },
    { alvo: '[data-t=pf-id]', fim: true, semVolta: true, tit: T('Portfólio criado! 🎉', '¡Portfolio creado! 🎉'), txt: T('Este é o número de identificação do portfólio. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Este es el número de identificación del portfolio. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['convidar-pessoa'] = [
    { alvo: '[data-t=menu-pessoas]', clique: true, garante: function () { SIMPF.garanteExemplo(); SIMPF.fecha() }, tit: T('Pessoas', 'Personas'), txt: T('O sobrinho da Marina vai ajudar com as postagens. Clique em Pessoas.', 'El sobrino de Marina va a ayudar con las publicaciones. Haz clic en Personas.') },
    { alvo: '[data-t=convidar]', clique: true, garante: function () { SIMPF.fecha() }, tit: T('Convidar pessoas', 'Invitar personas'), txt: T('Clique em Convidar pessoas.', 'Haz clic en Invitar personas.') },
    { alvo: '[data-t=conv-email]', garante: function () { SIMPF.abre('convidar', 0) }, cond: function () { var f = window.__simPf; return !!(f && /.+@.+\..+/.test(f.convEmail)) },
      tit: T('O email', 'El correo'), txt: T('Digite o email do sobrinho (na aula, invente: sobrinho@lojinha.exemplo) e clique em Próximo.', 'Escribe el correo del sobrino (en la clase, invéntalo: sobrino@lojinha.exemplo) y haz clic en Siguiente.') },
    { alvo: '[data-t=conv-avancar]', clique: true, garante: function () { SIMPF.abre('convidar', 0) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-acesso]', garante: function () { SIMPF.abre('convidar', 1) }, cond: function () { var f = window.__simPf; return !!(f && !f.gerenciar) }, bloqueia: function (t) { return !!t.closest('[data-t=conv-gerenciar]') }, erro: T('Para quem ajuda no dia a dia, o Básico basta: deixe o Gerenciar desligado.', 'Para quien ayuda en el día a día, Básico alcanza: deja Administrar apagado.'),
      tit: T('Só o acesso necessário', 'Solo el acceso necesario'), txt: T('Todo mundo entra com acesso Básico: trabalha só nos ativos que você atribuir. Ele só vai postar, então NÃO ligue o Gerenciar (acesso total). Clique em Próximo.', 'Todos entran con acceso Básico: trabajan solo en los activos que asignes. Él solo va a publicar, así que NO actives Gestionar (acceso total). Haz clic en Siguiente.'),
      dica: T('Acesso total é para quem administra a empresa junto com você: pode até excluir o portfólio.', 'El acceso total es para quien administra la empresa contigo: puede hasta eliminar el portfolio.') },    { alvo: '[data-t=conv-avancar2]', clique: true, garante: function () { SIMPF.abre('convidar', 1) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-avancar3]', clique: true, garante: function () { SIMPF.abre('convidar', 2) }, tit: T('Atribuir ativos', 'Asignar activos'), txt: T('Aqui você escolhe em quais ativos ele trabalha. A Página da loja entra no portfólio na aula 04; depois é só atribuí-la a ele (Páginas › Atribuir pessoas). Por enquanto, avance sem marcar nada.', 'Aquí eliges en qué activos trabaja. La Página de la tienda entra al portfolio en la clase 04; después basta asignársela (Páginas › Asignar personas). Por ahora, avanza sin marcar nada.') },
    { alvo: '[data-t=conv-enviar]', clique: true, garante: function () { SIMPF.abre('convidar', 3) }, tit: T('Enviar o convite', 'Enviar la invitación'), txt: T('Confira o resumo e clique em Convidar.', 'Revisa el resumen y haz clic en Invitar.') },
    { alvo: '[data-t=lista-pessoas]', fim: true, semVolta: true, tit: T('Convite enviado! 🎉', '¡Invitación enviada! 🎉'), txt: T('Ele aparece na lista com acesso parcial: Básico. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Aparece en la lista con acceso parcial: Básico. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['adicionar-instagram'] = [
    { alvo: '[data-t=menu-instagram]', clique: true, garante: function () { SIMPF.garanteExemplo(); SIMPF.fecha() }, tit: T('Perfis do Instagram', 'Perfiles de Instagram'), txt: T('O Instagram da Marina já é profissional. Agora ele entra na “pasta” da empresa. Clique em Perfis do Instagram.', 'El Instagram de Marina ya es profesional. Ahora entra en la “carpeta” de la empresa. Haz clic en Perfiles de Instagram.') },
    { alvo: '[data-t=add-ig]', clique: true, garante: function () { SIMPF.fecha() }, tit: T('Adicionar', 'Agregar'), txt: T('Clique em Adicionar. (Repare: na tela real, o título desta página aparece em inglês.)', 'Haz clic en Agregar. (Fíjate: en la pantalla real, el título de esta página aparece en inglés.)') },
    { alvo: '[data-t=ig-aviso]', garante: function () { SIMPF.abre('add-ig', 0) }, tit: T('Só conta profissional', 'Solo cuenta profesional'), txt: T('Regra da Meta: só conta profissional entra no portfólio. Se a cliente adicionar uma pessoal, ela vira profissional (e pública).', 'Regla de Meta: solo la cuenta profesional entra al portfolio. Si la clienta agrega una personal, se vuelve profesional (y pública).') },
    { alvo: '[data-t=ig-anuncios]', garante: function () { SIMPF.abre('add-ig', 0) }, tit: T('⚠️ A conta de anúncios vem junto', '⚠️ La cuenta publicitaria viene junto'), txt: T('Se o Instagram já tiver uma conta de anúncios conectada, ela vem junto para este portfólio e NÃO pode ser removida depois. Confira isso com a cliente antes.', 'Si el Instagram ya tiene una cuenta publicitaria conectada, viene junto a este portfolio y NO se puede quitar después. Revísalo con la clienta antes.') },
    { alvo: '[data-t=ig-add]', clique: true, garante: function () { SIMPF.abre('add-ig', 0) }, tit: T('Adicionar o perfil', 'Agregar el perfil'), txt: T('Clique em Add Instagram profile (o portfólio aceita os Termos do Instagram).', 'Haz clic en Add Instagram profile (el portfolio acepta las Condiciones de Instagram).') },
    { alvo: '[data-t=ig-autoriza]', garante: function () { SIMPF.abre('add-ig', 1) }, tit: T('O login é da cliente', 'El inicio de sesión es de la clienta'), txt: T('Abre uma janela do Instagram pedindo autorização. Quem entra é a dona do Instagram, com a conta dela: o agente nunca pede a senha.', 'Se abre una ventana de Instagram pidiendo autorización. Quien entra es la dueña del Instagram, con su cuenta: el agente nunca pide la contraseña.') },
    { alvo: '[data-t=ig-entrar]', clique: true, garante: function () { SIMPF.abre('add-ig', 1) }, tit: T('Entrar', 'Entrar'), txt: T('Clique em Entrar como lojinhadamarina.', 'Haz clic en Entrar como lojinhadamarina.') },
    { alvo: '[data-t=ig-concluir]', clique: true, semVolta: true, tit: T('Adicionado! 🎉', '¡Agregado! 🎉'), txt: T('O Instagram agora pertence ao portfólio. Clique em Concluir.', 'El Instagram ahora pertenece al portfolio. Haz clic en Terminar.') },
    { alvo: '[data-t=ig-detalhe]', fim: true, semVolta: true, tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Repare em “Propriedade de”: o Instagram é do portfólio da Marina. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Fíjate en “Propiedad de”: el Instagram es del portfolio de Marina. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['conectar-instagram'] = [
    { alvo: '[data-t=menu-paginas]', clique: true, garante: function () { SIMPF._ligando = false; SIMPF.garanteAula4(); SIMPF.fecha() }, tit: T('Páginas', 'Páginas'), txt: T('A Página e o Instagram da Marina já estão no portfólio, mas ainda separados. Clique em Páginas.', 'La Página y el Instagram de Marina ya están en el portfolio, pero todavía separados. Haz clic en Páginas.') },
    { alvo: '[data-t=aba-ativos]', clique: true, garante: function () { SIMPF.fecha(); SIMPF.aba('pessoas'); location.hash = 'paginas' }, tit: T('Ativos conectados', 'Activos conectados'), txt: T('Clique na aba Ativos conectados para ver o que está ligado a esta Página.', 'Haz clic en la pestaña Activos conectados para ver qué está vinculado a esta Página.') },
    { alvo: '[data-t=pag-ativos]', garante: function () { SIMPF.fecha(); SIMPF.aba('ativos'); location.hash = 'paginas' }, bloqueia: function (t) { return !!t.closest('button') }, erro: T('Primeiro leia e clique em Próximo no balão.', 'Primero lee y haz clic en Siguiente en el globo.'), tit: T('Nada ligado ainda', 'Nada vinculado todavía'), txt: T('Estar no mesmo portfólio NÃO liga o Instagram à Página. A ligação é outro passo. Clique em Próximo.', 'Estar en el mismo portfolio NO vincula el Instagram a la Página. Es otro paso. Haz clic en Siguiente.') },
    { alvo: '[data-t=conectar-ativos]', clique: true, garante: function () { SIMPF.fecha(); SIMPF.aba('ativos'); location.hash = 'paginas' }, tit: T('Conectar ativos', 'Conectar activos'), txt: T('Clique em Conectar ativos.', 'Haz clic en Conectar activos.') },
    { alvo: '[data-t=con-ig]', clique: true, garante: function () { SIMPF.abre('conectar', 0) }, tit: T('Conta do Instagram', 'Cuenta de Instagram'), txt: T('Clique em Conta do Instagram.', 'Haz clic en Cuenta de Instagram.') },
    { alvo: '[data-t=con-info]', garante: function () { SIMPF.abre('conectar', 1) }, tit: T('Leia antes de ligar', 'Lee antes de vincular'), txt: T('Só conta profissional pode ser ligada. E depois de ligar, quem cuida da Página OU do Instagram pode cuidar dos dois (conforme o acesso de cada um). Clique em Próximo.', 'Solo una cuenta profesional se puede vincular. Y después de vincular, quien cuida la Página O el Instagram puede cuidar los dos (según el acceso de cada uno). Haz clic en Siguiente.') },
    { alvo: '[data-t=con-entrar]', clique: true, garante: function () { SIMPF.abre('conectar', 1) }, tit: T('Entrar no Instagram', 'Entrar en Instagram'), txt: T('A Marina já tem Instagram: clique em Entrar no Instagram (não em Criar um novo perfil).', 'Marina ya tiene Instagram: haz clic en Entrar en Instagram (no en Crear un perfil nuevo).') },
    { alvo: '[data-t=con-msg]', garante: function () { SIMPF.abre('conectar', 2) }, bloqueia: function (t) { return !!t.closest('label') }, erro: T('Na aula, deixe ligado: a Marina quer responder o Instagram pelo Business Suite.', 'En la clase, déjalo activado: Marina quiere responder el Instagram desde Business Suite.'), tit: T('Mensagens do Instagram', 'Mensajes de Instagram'), txt: T('Ligado, as mensagens do Instagram aparecem na Caixa de Entrada, e quem ajuda na Página pode ver e responder (conforme o acesso). Dá para mudar depois nas configurações. Clique em Próximo.', 'Activado, los mensajes de Instagram aparecen en la Bandeja de entrada, y quien ayuda en la Página puede verlos y responder (según el acceso). Se puede cambiar después en la configuración. Haz clic en Siguiente.') },
    { alvo: '[data-t=con-continuar]', clique: true, garante: function () { SIMPF.abre('conectar', 2) }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=con-entrar-ig]', clique: true, garante: function () { SIMPF.abre('conectar', 3) }, tit: T('O login é da cliente', 'El inicio de sesión es de la clienta'), txt: T('Abre a janela do Instagram. Quem entra é a dona do Instagram; o agente nunca pede a senha. Clique em Entrar como lojinhadamarina.', 'Se abre la ventana de Instagram. Quien entra es la dueña del Instagram; el agente nunca pide la contraseña. Haz clic en Entrar como lojinhadamarina.') },
    { alvo: '[data-t=con-adicionar]', clique: true, garante: function () { SIMPF.abre('conectar', 4) }, tit: T('Confirmar', 'Confirmar'), txt: T('A Meta mostra o resumo: portfólio, Página 🔗 Instagram. Clique em Adicionar.', 'Meta muestra el resumen: portfolio, Página 🔗 Instagram. Haz clic en Agregar.') },
    { alvo: '[data-t=con-concluir]', clique: true, semVolta: true, garante: function () { SIMPF._ligando = true }, tit: T('Conectado! 🎉', '¡Conectado! 🎉'), txt: T('Clique em Concluir.', 'Haz clic en Terminar.') },
    { alvo: '[data-t=pag-ativos]', fim: true, semVolta: true, tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Agora a Página mostra o Instagram em Ativos conectados (e tem o botão Desconectar, se um dia precisar). Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora la Página muestra el Instagram en Activos conectados (y tiene el botón Desconectar, si algún día hace falta). Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['criar-conta-anuncios'] = [
    { alvo: '[data-t=menu-contas]', clique: true, garante: function () { SIMPF.garanteExemplo(); SIMPF.fecha() }, tit: T('Contas de anúncios', 'Cuentas publicitarias'), txt: T('Para anunciar, a Marina precisa de uma conta de anúncios dentro do portfólio. Clique em Contas de anúncios.', 'Para anunciar, Marina necesita una cuenta publicitaria dentro del portfolio. Haz clic en Cuentas publicitarias.') },
    { alvo: '[data-t=add-conta]', clique: true, garante: function () { SIMPF.fecha() }, tit: T('Adicionar', 'Agregar'), txt: T('Clique em Adicionar.', 'Haz clic en Agregar.') },
    { alvo: '[data-t=conta-nova]', clique: true, garante: function () { SIMPF.abre('add-conta') }, tit: T('Criar uma nova', 'Crear una nueva'), txt: T('Escolha Criar uma nova conta de anúncios.', 'Elige Crear una nueva cuenta publicitaria.'),
      dica: T('Na tela real, se esta opção aparecer apagada, passe o mouse: a Meta avisa que o portfólio novo atingiu o limite de contas de anúncios e que dá para criar mais depois de algumas semanas seguindo as políticas.', 'En la pantalla real, si esta opción aparece apagada, pasa el mouse: Meta avisa que el portfolio nuevo alcanzó el límite de cuentas publicitarias y que se pueden crear más después de algunas semanas siguiendo las políticas.') },
    { alvo: '[data-t=conta-nome]', garante: function () { SIMPF.abre('conta', 0) }, cond: function () { var f = window.__simPf; return !!(f && f.contaNome.trim()) },
      tit: T('O nome da conta', 'El nombre de la cuenta'), txt: T('Digite um nome, por exemplo: Lojinha da Marina. Depois clique em Próximo.', 'Escribe un nombre, por ejemplo: Lojinha da Marina. Después haz clic en Siguiente.') },
    { alvo: '[data-t=conta-fuso-moeda]', garante: function () { SIMPF.abre('conta', 0) }, cond: function () { var f = window.__simPf; return !!(f && /Sao Paulo/.test(f.fuso) && /^BRL/.test(f.moeda)) },
      tit: T('⚠️ Fuso e moeda: não mudam depois!', '⚠️ Zona horaria y moneda: ¡no cambian después!'), txt: T('Escolha o fuso America/Sao Paulo e a moeda BRL (a Marina vende em reais). Atenção: depois de criada, a conta NÃO deixa trocar fuso nem moeda.', 'Elige la zona America/Sao Paulo y la moneda BRL (Marina vende en reales). Atención: después de creada, la cuenta NO permite cambiar zona ni moneda.'),
      dica: T('Erro comum: deixar o padrão (dólar e horário de Los Angeles). Aí os relatórios ficam em outra moeda e outro horário.', 'Error común: dejar lo predeterminado (dólar y horario de Los Ángeles). Así los informes quedan en otra moneda y otro horario.') },
    { alvo: '[data-t=conta-avancar]', clique: true, garante: function () { SIMPF.abre('conta', 0) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=conta-uso]', garante: function () { SIMPF.abre('conta', 1) }, cond: function () { var f = window.__simPf; return !!(f && f.uso === 'minha') }, bloqueia: function (t) { var l = t.closest('label'); return !!(l && l.querySelector('[value=outra]')) }, erro: T('A conta é da própria Marina: a opção certa é Minha empresa.', 'La cuenta es de la propia Marina: la opción correcta es Mi empresa.'), tit: T('Para quem é a conta', 'Para quién es la cuenta'), txt: T('A conta é da própria Marina: deixe Minha empresa e clique em Próximo. “Outra empresa ou cliente” é para agências que anunciam por clientes.', 'La cuenta es de la propia Marina: deja Mi empresa y haz clic en Siguiente. “Otra empresa o cliente” es para agencias que anuncian por clientes.') },
    { alvo: '[data-t=conta-avancar2]', clique: true, garante: function () { SIMPF.abre('conta', 1) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=conta-termos]', garante: function () { SIMPF.abre('conta', 2) }, cond: function () { var f = window.__simPf; return !!(f && f.termos) },
      tit: T('Confirmar', 'Confirmar'), txt: T('Leia o aviso: depois de adicionada, a conta não pode ser removida do portfólio. Marque a caixinha dos termos e clique em Próximo.', 'Lee el aviso: después de agregada, la cuenta no puede quitarse del portfolio. Marca la casilla de condiciones y haz clic en Siguiente.') },
    { alvo: '[data-t=conta-criar]', clique: true, garante: function () { SIMPF.abre('conta', 2) }, tit: T('Criar', 'Crear'), txt: T('Clique em Criar conta de anúncios.', 'Haz clic en Crear cuenta publicitaria.') },
    { alvo: '[data-t=conta-detalhe]', fim: true, semVolta: true, tit: T('Conta criada! 🎉', '¡Cuenta creada! 🎉'), txt: T('Repare: moeda BRL e fuso de São Paulo, para sempre. Criar a conta não cobra nada; a forma de pagamento só entra quando for anunciar. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Fíjate: moneda BRL y zona de São Paulo, para siempre. Crear la cuenta no cobra nada; la forma de pago solo entra al anunciar. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  /* Pixel avançado · aula 05: verificação de domínio — tela real vista em 20/10/2026 (Configurações › Adequação e segurança para marcas › Domínios,
     “O que você quer fazer?”, “Adicionar um domínio”). A etapa dos métodos (metatag, HTML, DNS) não foi vista: o simulador para e explica pelo artigo oficial. */
  function domTela(passo, dom) { return function () { SIMPF.garanteExemplo(); SIMPF.vai('dominios'); if (passo == null) { SIMPF.fecha(); return } var e = SIMPF.estado(); SIMPF.abre('dominio', passo); if (dom != null) { SIMPF.estado().F.dom = dom; SIMPF.redesenha() } } }
  var DOM_OK = 'lojinhadamarina.com.br';
  TOURS['dominio-portfolio'] = [
    { alvo: '[data-t=menu-dominios]', clique: true, garante: function () { SIMPF.garanteExemplo(); SIMPF.fecha(); SIMPF.vai('info') }, tit: T('Onde se verifica o domínio', 'Dónde se verifica el dominio'), txt: T('Não é no Gerenciador de Eventos: a verificação de domínio fica nas Configurações do portfólio. No menu, em “Adequação e segurança para marcas”, clique em Domínios.', 'No es en el Administrador de eventos: la verificación de dominio está en la Configuración del portfolio. En el menú, en “Adecuación y seguridad de la marca”, haz clic en Dominios.') },
    { alvo: '[data-t=add-dominio]', clique: true, garante: domTela(null), tit: T('Nenhum domínio ainda', 'Ningún dominio todavía'), txt: T('“Nenhum domínio adicionado”. Clique em + Adicionar.', '“No se agregó ningún dominio”. Haz clic en + Agregar.') },
    { alvo: '[data-t=dom-criar]', clique: true, garante: domTela(0), tit: T('Criar ou pedir acesso', 'Crear o pedir acceso'), txt: T('Criar um domínio: o domínio é da empresa. Solicitar acesso: a empresa usa o domínio de outra. O site da Marina é dela: clique em Criar um domínio.', 'Crear un dominio: el dominio es de la empresa. Solicitar acceso: la empresa usa el dominio de otra. El sitio de Marina es suyo: haz clic en Crear un dominio.') },
    { alvo: '[data-t=dom-campo]', garante: domTela(1), cond: function () { return String((SIMPF.estado().F || {}).dom || '').trim().toLowerCase() === DOM_OK }, tit: T('Só o domínio raiz ⭐', 'Solo el dominio raíz ⭐'), txt: T('Leia a regra acima do campo. O endereço da loja é https://www.lojinhadamarina.com.br/loja, mas o domínio raiz é só lojinhadamarina.com.br: sem https://, sem www. e sem /loja. Escreva e clique em Próximo.', 'Lee la regla arriba del campo. La dirección de la tienda es https://www.lojinhadamarina.com.br/loja, pero el dominio raíz es solo lojinhadamarina.com.br: sin https://, sin www. y sin /loja. Escríbelo y haz clic en Siguiente.'), dica: T('Digite “lojinhadamarina.com.br” (sem as aspas).', 'Escribe “lojinhadamarina.com.br” (sin las comillas).') },
    { alvo: '[data-t=dom-adicionar]', clique: true, livre: '#fDom', valida: function () { return !SIMPF.domErro(SIMPF.estado().F.dom) && String(SIMPF.estado().F.dom).trim().toLowerCase() === DOM_OK }, erro: T('Confira o domínio: só lojinhadamarina.com.br, sem https://, www. ou /loja. 🙂', 'Revisa el dominio: solo lojinhadamarina.com.br, sin https://, www. ni /loja. 🙂'), garante: domTela(1, DOM_OK), tit: T('Adicionar', 'Agregar'), txt: T('Clique em Adicionar.', 'Haz clic en Agregar.') },
    { alvo: '[data-t=dom-metodos]', garante: domTela(2, DOM_OK), tit: T('Provar que o domínio é seu', 'Probar que el dominio es tuyo'), txt: T('Aqui o simulador para: a tela seguinte não foi vista no portfólio de aula. Pela Central de Ajuda são 3 jeitos (metatag, arquivo HTML ou registro TXT no DNS) e depois o botão Verificar domínio. Quem faz é o desenvolvedor ou quem cuida do domínio. Clique em Próximo.', 'Aquí el simulador se detiene: la pantalla siguiente no se vio en el portfolio de clase. Según el Centro de ayuda hay 3 formas (metaetiqueta, archivo HTML o registro TXT en el DNS) y después el botón Verificar dominio. Lo hace el desarrollador o quien administra el dominio. Haz clic en Siguiente.') },
    { alvo: '[data-t=dom-metodos]', fim: true, semVolta: true, garante: domTela(2, DOM_OK), tit: T('Domínio entendido 🎉', '¡Dominio entendido! 🎉'), txt: T('Para o cliente: verificar o domínio NÃO é preciso para os eventos do Pixel. Serve para controlar quem edita os links dos anúncios, vender nos espaços de Comércio e verificar a empresa quando não há telefone ou email comercial. Clique em Concluir.', 'Para el cliente: verificar el dominio NO es necesario para los eventos del píxel. Sirve para controlar quién edita los enlaces de los anuncios, vender en los espacios de Comercio y verificar la empresa cuando no hay teléfono o correo comercial. Haz clic en Terminar.') }
  ];
})();
