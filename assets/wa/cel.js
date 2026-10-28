/* O celular da Marina: um só aparelho, com o WhatsApp Business.
   Telas do app real vistas em 25–26/10/2026 (conta de aula, Android). A tela inicial do Android é desenho nosso.
   O espanhol das telas do app é tradução nossa (as telas reais em espanhol ainda não foram vistas: a conferir).
   Uso: CEL.montar(el); CEL.ir('ferramentas'). Cada aula pode registrar telas novas em CEL.telas. */
(function () {
  var T = N.T, t = N.t, esc = N.esc;
  var CEL = window.CEL = { tela: 'home', el: null, telas: {} };

  function icoWa(negocio) {   // ícone redondo verde com o balão; o do Business tem um B
    return '<svg viewBox="0 0 50 50" aria-hidden="true"><circle cx="25" cy="25" r="25" fill="#25D366"/>' +
      '<path d="M25 11a14 14 0 0 0-12.1 21l-2 7.3 7.5-2A14 14 0 1 0 25 11z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>' +
      (negocio ? '<text x="25" y="31" text-anchor="middle" font-family="Segoe UI,Arial" font-weight="800" font-size="17" fill="#fff">B</text>'
        : '<path d="M20.2 18.5c.5-.6 1.3-.5 1.6.2l1.1 2.6c.2.5 0 1-.3 1.4l-.8.9c1 2 2.6 3.6 4.6 4.6l.9-.8c.4-.3.9-.5 1.4-.3l2.6 1.1c.7.3.8 1.1.2 1.6l-1.2 1.2c-.9.9-2.2 1.1-3.3.6-3.6-1.6-6.4-4.4-8-8-.5-1.1-.3-2.4.6-3.3z" fill="#fff"/>') + '</svg>';
  }
  CEL.icoWa = icoWa;

  function topo(tit, dir) { return '<div class="wa-topo"><b>' + tit + '</b><span class="wa-dir">' + (dir || '') + '</span></div>' }
  function abas(on) {
    return '<nav class="wa-abas">' + [['conversas', '💬', T('Conversas', 'Chats')], ['ligacoes', '📞', T('Ligações', 'Llamadas')], ['atualizacoes', '⭕', T('Atualizações', 'Novedades')], ['ferramentas', '🏪', T('Ferramentas', 'Herramientas')]].map(function (a) {
      return '<button data-cel="ir:' + a[0] + '" data-t="cel-aba-' + a[0] + '" class="' + (on === a[0] ? 'on' : '') + '"><i>' + a[1] + '</i>' + t(a[2]) + '</button>' }).join('') + '</nav>';
  }
  function item(ic, tit, sub, acao, alvo) {
    return '<button class="wa-item" data-cel="' + (acao || 'fora') + '"' + (alvo ? ' data-t="' + alvo + '"' : '') + '><i>' + ic + '</i><span><b>' + t(tit) + '</b><small>' + t(sub) + '</small></span></button>';
  }
  CEL.pecas = { topo: topo, abas: abas, item: item };

  CEL.telas.home = function () {
    var apps = [['📞', T('Telefone', 'Teléfono')], ['💬', T('Mensagens', 'Mensajes')], ['🌐', T('Chrome', 'Chrome')], ['📷', T('Câmera', 'Cámara')],
      ['🖼️', T('Galeria', 'Galería')], ['⚙️', T('Configurações', 'Ajustes')]];
    return '<div class="cel-home"><p class="cel-hora">9:41</p><p class="cel-data">' + t(T('terça-feira, 27 de outubro', 'martes, 27 de octubre')) + '</p>' +
      '<div class="cel-apps">' + apps.map(function (a) { return '<button class="cel-app" data-cel="outroapp"><span class="ic">' + a[0] + '</span>' + t(a[1]) + '</button>' }).join('') +
      '<button class="cel-app" data-cel="whatsapp" data-t="cel-app-wa">' + icoWa(false) + 'WhatsApp</button>' +
      '<button class="cel-app" data-cel="ir:conversas" data-t="cel-app-wab">' + icoWa(true) + 'WA Business</button></div></div>';
  };
  CEL.telas.conversas = function () {
    return topo('WhatsApp', '📷 <button class="wa-ic" data-cel="ir:menu" data-t="cel-menu" aria-label="' + esc(t(T('Mais opções', 'Más opciones'))) + '">⋮</button>') + '<div class="wa-rolar"><div class="wa-busca">🔍 ' + t(T('Pesquisar...', 'Buscar...')) + '</div>' +
      '<div class="wa-faixa" data-t="cel-faixa-dispositivos">' + t(T('Toque para conectar sua conta comercial a até 4 outros dispositivos.', 'Toca para vincular tu cuenta comercial a hasta 4 dispositivos más.')) + ' <b>' + t(T('Abrir', 'Abrir')) + '</b></div>' +
      '<div class="wa-chips"><span class="on">' + t(T('Todas', 'Todos')) + '</span><span>' + t(T('Não lidas', 'No leídos')) + '</span><span>' + t(T('Favoritos', 'Favoritos')) + '</span><span>' + t(T('Grupos', 'Grupos')) + '</span></div>' +
      '<button class="wa-conv" data-cel="ir:conv" data-t="cel-conv-bia"><span class="wa-av">B</span><span><b>Bia</b><small>' + t(T('Vocês abrem que horas?', '¿A qué hora abren?')) + '</small></span><em>09:12</em></button>' +
      '<button class="wa-conv" data-cel="fora"><span class="wa-av">F</span><span><b>' + t(T('Fornecedor de canecas', 'Proveedor de tazas')) + '</b><small>' + t(T('O pedido sai na sexta.', 'El pedido sale el viernes.')) + '</small></span><em>' + t(T('Ontem', 'Ayer')) + '</em></button>' +
      '</div><span class="wa-roxo" title="Meta AI">✳</span><span class="wa-fab">＋</span>' + abas('conversas');
  };
  CEL.telas.ligacoes = function () { return topo(t(T('Ligações', 'Llamadas'))) + '<p class="wa-vazio">' + t(T('Neste treino as ligações ficam de fora.', 'En esta práctica las llamadas quedan fuera.')) + '</p>' + abas('ligacoes') };
  CEL.telas.atualizacoes = function () { return topo(t(T('Atualizações', 'Novedades'))) + '<p class="wa-vazio">' + t(T('Status e Canais ficam de fora deste treino.', 'Estados y Canales quedan fuera de esta práctica.')) + '</p>' + abas('atualizacoes') };
  CEL.telas.ferramentas = function () {
    return topo(t(T('Ferramentas', 'Herramientas')), '⋮') + '<div class="wa-rolar" data-t="cel-ferramentas">' +
      '<p class="wa-sec">' + t(T('Desempenho dos últimos sete dias ⓘ', 'Rendimiento de los últimos siete días ⓘ')) + '</p>' +
      '<div class="wa-cards"><span><i>💬</i><b>0</b>' + t(T('Conversas iniciadas', 'Chats iniciados')) + '</span><span><i>▦</i><b>— —</b>' + t(T('Visualizações do catálogo', 'Visualizaciones del catálogo')) + '</span><span><i>⭕</i><b>— —</b>' + t(T('Visualizações do status', 'Visualizaciones del estado')) + '</span></div>' +
      '<div data-t="cel-ferr-expanda"><p class="wa-sec forte">' + t(T('Expanda sua empresa', 'Haz crecer tu empresa')) + '</p>' +
      item('①', 'Meta One', T('Desbloqueie recursos premium nos apps da Meta', 'Desbloquea funciones premium en las apps de Meta')) +
      item('▦', T('Catálogo', 'Catálogo'), T('Exiba produtos e serviços', 'Muestra productos y servicios'), 'ir:catalogo', 'cel-ferr-catalogo') +
      item('📣', T('Anúncios', 'Anuncios'), T('Alcance novos clientes com anúncios que direcionam para o WhatsApp', 'Llega a nuevos clientes con anuncios que dirigen a WhatsApp'), 'ir:anuncio1', 'cel-ferr-anuncios') +
      item('📍', T('Guia de negócios', 'Directorio de empresas'), T('Ajude as pessoas a encontrar sua empresa', 'Ayuda a las personas a encontrar tu empresa')) +
      item('🧾', T('Cobranças', 'Cobros'), T('Gerencie cobranças e pagamentos', 'Administra cobros y pagos')) +
      item('💠', T('Pagamentos', 'Pagos'), T('Gerencie suas informações de pagamento', 'Administra tu información de pago')) + '</div>' +
      '<p class="wa-sec forte">' + t(T('Organize suas conversas', 'Organiza tus chats')) + '</p>' +
      item('🏷️', T('Listas', 'Listas'), T('Gerencie pessoas e grupos', 'Administra personas y grupos'), 'ir:listas', 'cel-ferr-listas') +
      item('👋', T('Mensagem de saudação', 'Mensaje de bienvenida'), T('Dê as boas-vindas a clientes novos', 'Da la bienvenida a clientes nuevos'), 'ir:saudacao', 'cel-ferr-saudacao') +
      item('🌙', T('Mensagem de ausência', 'Mensaje de ausencia'), T('Avise quando você não estiver disponível', 'Avisa cuando no estés disponible'), 'ir:ausencia', 'cel-ferr-ausencia') +
      item('⚡', T('Respostas rápidas', 'Respuestas rápidas'), T('Reutilize mensagens frequentes', 'Reutiliza mensajes frecuentes')) +
      '<div data-t="cel-ferr-conta"><p class="wa-sec forte">' + t(T('Gerencie sua conta', 'Administra tu cuenta')) + '</p>' +
      item('🏪', T('Perfil', 'Perfil'), T('Gerencie os dados da empresa', 'Administra los datos de la empresa'), 'ir:perfil', 'cel-ferr-perfil') +
      item('🔗', T('Instagram e Facebook', 'Instagram y Facebook'), T('Conecte para alcançar mais clientes.', 'Conecta para llegar a más clientes.'), 'ir:instafb', 'cel-ferr-instafb') +
      item('❔', T('Central de Ajuda', 'Servicio de ayuda'), T('Obtenha ajuda, fale conosco', 'Obtén ayuda, contáctanos'), 'ir:central', 'cel-ferr-central') + '</div></div>' + abas('ferramentas');
  };

  var AVISOS = {
    fora: T('Esta parte do app fica para outra aula.', 'Esta parte de la app queda para otra clase.'),
    outroapp: T('Neste treino só os apps do WhatsApp abrem.', 'En esta práctica solo abren las apps de WhatsApp.'),
    whatsapp: T('Este é o WhatsApp comum, o pessoal. A loja usa o WA Business, o do B.', 'Este es el WhatsApp común, el personal. La tienda usa WA Business, el de la B.')
  };

  CEL.render = function () {
    if (!CEL.el) return;
    var f = CEL.telas[CEL.tela] || CEL.telas.home;
    CEL.el.innerHTML = '<div class="cel-moldura" data-t="cel"><div class="cel-barra"><span>9:41</span><span>📶 🔋</span></div><div class="cel-tela">' + f() + '</div>' +
      '<div class="cel-nav"><button data-cel="volta" aria-label="' + esc(t(T('Voltar', 'Atrás'))) + '">◀</button><button data-cel="ir:home" aria-label="' + esc(t(T('Tela inicial', 'Pantalla de inicio'))) + '">●</button><button data-cel="fora" aria-label="' + esc(t(T('Apps recentes', 'Apps recientes'))) + '">■</button></div></div>';
  };
  CEL.ir = function (tela) { if (CEL.tela !== tela) { CEL.hist.push(CEL.tela); CEL.tela = tela } CEL.render() };
  CEL.por = function (tela) { CEL.hist = []; CEL.tela = tela; CEL.render() };   // coloca direto (o guia usa)
  CEL.hist = [];
  CEL.montar = function (el, tela) { CEL.el = el; CEL.hist = []; CEL.tela = tela || 'home'; CEL.render() };

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-cel]'); if (!b || !CEL.el || !CEL.el.contains(b)) return;
    var a = b.getAttribute('data-cel');
    if (a.indexOf('ir:') === 0) return CEL.ir(a.slice(3));
    if (a === 'volta') { CEL.tela = CEL.hist.pop() || 'home'; return CEL.render() }
    if (AVISOS[a]) return N.aviso(AVISOS[a]);
    if (CEL.acao && CEL.acao(a)) return;
  });
})();
