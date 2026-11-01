/* Menu das Configurações do Meta Business Suite (portfólio): o MESMO em todos os simuladores que mostram as Configurações
   (meta-portfolio.html e meta-verified.html). Itens, ordem e grupos copiados da tela real em 01/11/2026 (conta de aula, só olhando):
   Usuários e Contas abertos; Fontes de dados, Adequação e segurança para marcas e Integrações fechados; Pedidos solto; Cobrança e pagamentos abre fora (↗).
   Cada item: [rótulo, rota] — a rota diz o que o item faz no simulador:
     'nome' = tela do meta-portfolio.html (#nome) · 'pagina.html' = abre outro simulador · sem rota = existe na Meta, mas fora do treino. */
(function () {
  var MENU = [
    ['Informações da empresa', 'info', 'info'],
    ['Usuários', null, 'user', [['Pessoas', 'pessoas'], ['Parceiros', 'parceiros'], ['Usuários do sistema']], true],
    ['Contas', null, 'conta', [['Páginas', 'paginas'], ['Contas de anúncios', 'contas'], ['Grupos de ativos de negócios'], ['Apps'], ['Contas comerciais'], ['Perfis do Instagram', 'instagram'], ['Contas do WhatsApp'], ['Contas de mensagens'], ['Perfis do Threads']], true],
    ['Fontes de dados', null, 'dados', [['Catálogos'], ['Conjuntos de dados e pixels', 'meta-eventos.html'], ['Conjuntos de eventos offline'], ['Conversões personalizadas'], ['Públicos compartilhados'], ['Pastas de criativos da empresa']]],
    ['Pedidos', '', 'pedidos'],
    ['Adequação e segurança para marcas', null, 'escudo', [['Domínios', 'dominios'], ['Listas de bloqueio de publishers']]],
    ['Integrações', null, 'integ', [['Apps conectados'], ['Acesso a leads'], ['Encaminhamento da conversa'], ['Servidor MCP de anúncios']]],
    ['Cobrança e pagamentos ↗', '', 'cartao'],
    ['Meta Verified', 'meta-verified.html', 'selo'],
    ['Páginas de notícias', '', 'jornal'],
    ['Central de Anúncios em Parceria', '', 'parceria'],
    ['Central de Segurança', 'seguranca', 'cadeado'],
    ['Notificações', '', 'sino']
  ];
  var ES = { 'Informações da empresa': 'Información del negocio', 'Usuários': 'Usuarios', 'Pessoas': 'Personas', 'Parceiros': 'Socios', 'Usuários do sistema': 'Usuarios del sistema', 'Contas': 'Cuentas',
    'Páginas': 'Páginas', 'Contas de anúncios': 'Cuentas publicitarias', 'Grupos de ativos de negócios': 'Grupos de activos comerciales', 'Contas comerciais': 'Cuentas comerciales', 'Perfis do Instagram': 'Perfiles de Instagram',
    'Contas do WhatsApp': 'Cuentas de WhatsApp', 'Contas de mensagens': 'Cuentas de mensajes', 'Perfis do Threads': 'Perfiles de Threads', 'Fontes de dados': 'Orígenes de datos', 'Catálogos': 'Catálogos',
    'Conjuntos de dados e pixels': 'Conjuntos de datos y píxeles', 'Conjuntos de eventos offline': 'Conjuntos de eventos offline', 'Conversões personalizadas': 'Conversiones personalizadas', 'Públicos compartilhados': 'Públicos compartidos',
    'Pastas de criativos da empresa': 'Carpetas de contenido creativo del negocio', 'Pedidos': 'Pedidos', 'Adequação e segurança para marcas': 'Idoneidad y seguridad de marca', 'Domínios': 'Dominios',
    'Listas de bloqueio de publishers': 'Listas de bloqueo de editores', 'Integrações': 'Integraciones', 'Apps conectados': 'Apps conectadas', 'Acesso a leads': 'Acceso a clientes potenciales',
    'Encaminhamento da conversa': 'Transferencia de la conversación', 'Servidor MCP de anúncios': 'Servidor MCP de anuncios', 'Cobrança e pagamentos ↗': 'Facturación y pagos ↗', 'Meta Verified': 'Meta Verified',
    'Páginas de notícias': 'Páginas de noticias', 'Central de Anúncios em Parceria': 'Centro de anuncios en colaboración', 'Central de Segurança': 'Centro de seguridad', 'Notificações': 'Notificaciones', 'Apps': 'Apps' };
  var ic = function (d) { return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>' };
  var IC = { info: ic('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5h8v2"/>'), user: ic('<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="2.5"/><path d="M8 17c.8-2 2.2-3 4-3s3.2 1 4 3"/>'),
    conta: ic('<path d="M4 7h16v12H4zM4 7l2-3h12l2 3"/>'), dados: ic('<circle cx="12" cy="5" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 7v4M12 11l-5 5M12 11l5 5"/>'),
    pedidos: ic('<circle cx="10" cy="8" r="4"/><path d="M3 20c1-4 4-6 7-6M15 15l2 2 4-4"/>'), escudo: ic('<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/>'),
    integ: ic('<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.3 11l7.4-3.8M8.3 13l7.4 3.8"/>'), cartao: ic('<path d="M3 10l9-6 9 6M5 10v8M19 10v8M9 10v8M15 10v8M3 20h18"/>'),
    selo: ic('<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>'), jornal: ic('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>'),
    parceria: ic('<path d="M4 14l4 4 4-4M12 6l4 4 4-4M8 18V8M16 10v10"/>'), cadeado: ic('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'), sino: ic('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0"/>'),
    seta: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>' };
  function lang() { try { return JSON.parse(localStorage.getItem('plat.lang')) === 'es' } catch (e) { return false } }
  /* html do menu. ativo = rota acesa ('info', 'meta-verified.html'…); aqui = 'portfolio' (rotas viram data-ir) ou outra página (rotas viram link para meta-portfolio.html#rota) */
  window.MENU_CONFIG = function (ativo, aqui) {
    var es = lang(), t = function (s) { return es && ES[s] ? ES[s] : s }, port = aqui === 'portfolio';
    function item(rot, rota, cls, ico) {
      var on = rota && rota === ativo ? ' on' : '', ic2 = ico ? IC[ico] + ' ' : '';
      if (rota && /\.html/.test(rota)) return '<a data-sem-traduzir="1" class="' + cls + on + '" href="' + rota + '" data-t="menu-' + rota.replace('.html', '') + '">' + ic2 + t(rot) + '</a>';
      if (rota) return port ? '<button data-sem-traduzir="1" class="' + cls + on + '" data-ir="' + rota + '" data-t="menu-' + rota + '">' + ic2 + t(rot) + '</button>'
        : '<a data-sem-traduzir="1" class="' + cls + on + '" href="meta-portfolio.html#' + rota + '" data-t="menu-' + rota + '">' + ic2 + t(rot) + '</a>';
      return '<button data-sem-traduzir="1" class="' + cls + '" disabled title="' + (es ? 'Existe en Meta, pero no forma parte de esta práctica' : 'Existe na Meta, mas não faz parte deste treino') + '">' + ic2 + t(rot) + '</button>';
    }
    return MENU.map(function (m) {
      if (!m[3]) return item(m[0], m[1], 'pf-item', m[2]);
      var aberto = m[4] || m[3].some(function (s) { return s[1] && s[1] === ativo });
      return '<div data-sem-traduzir="1" class="pf-grupo' + (aberto ? '' : ' fechado') + '"><button class="pf-grupo-t" data-grupo-cfg>' + IC[m[2]] + ' ' + t(m[0]) + ' <span class="pf-seta">' + IC.seta + '</span></button>' +
        m[3].map(function (s) { return item(s[0], s[1], 'pf-sub') }).join('') + '</div>';
    }).join('');
  };
  // abrir/fechar grupo, como na tela real
  document.addEventListener('click', function (e) { var b = e.target.closest && e.target.closest('[data-grupo-cfg]'); if (b) b.parentNode.classList.toggle('fechado') });
})();
