/* Simulador das Integrações de parceiros / Meta Business Extension (MBE) — visual da Lojinha.
   Estado no navegador (localStorage "sim.mbe"); nada é enviado à Meta.
   Real (Gerenciador de Eventos da conta de aula, 16/10/2026, PT e ES): a página Integrações (abas Minhas integrações | Galeria de parceiros), as recomendações “Google Tag Manager, Shopify, WooCommerce” e a Galeria de parceiros com as categorias e parceiros listados abaixo.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Sobre as Integrações de Parceiros para eventos do site”, “Integrações de parceiros do Facebook”, “Comparar as opções de configuração da API de Conversões” (custo, tempo, recursos) e “Como conceder acesso a ativos de negócios… para um parceiro”.
   Real (documentação para desenvolvedores da Meta, inglês, 16/10/2026): o fluxo do Meta Business Extension (FBE) permite ao lojista criar ou selecionar portfólio, Página e Pixel (e conta de anúncios); recomendado para parceiros com hospedagem de sites; não inclui catálogo; permissão privada manage_business_extension exige que um representante da Meta inclua o app na lista de permissões.
   28/10/2026: a página foi refeita igual à tela real (moldura do Gerenciador de Eventos, menu Conectar dados · Visão geral · Conjuntos de dados ·
   Conversões personalizadas · Integrações, abas Minhas integrações | Galeria de parceiros). Saíram as telas que NÃO existem na Meta (“Conectar pela
   plataforma”, “Opções da API de Conversões”, “Problemas comuns”, “Dar acesso a um parceiro”): a comparação das opções e a triagem ficam no “Ver de perto”
   das aulas (ferramentas da Lojinha); dar acesso a parceiro virou tutorial em Configurações › Parceiros (meta-portfolio.html); a janela do MBE fica na
   admin da Shopify (mbe-janela.js); as opções da API de Conversões, nas Configurações do Pixel (meta-eventos.html).
   NÃO visto: a lista completa do “Ver tudo” da galeria e a tela de cada parceiro.
   URL: meta-mbe.html?zerar=1 · Tutorial (tour.js): ?tour=galeria-parceiros */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var CATS = [
    ['Produtos da Meta', [['Meta Pixel', 'Eventos da web'], ['Conversions API', 'Eventos da web'], ['Facebook SDK', 'Eventos do app'], ['Conversions API Gateway', 'Eventos da web'], ['Signals Gateway', 'Eventos da web']]],
    ['Comércio eletrônico', [['BigCommerce', 'Eventos da web'], ['3dcart', 'Eventos da web'], ['Facebook Marketplace', 'Sincro'], ['Ecwid', 'Eventos da web'], ['Eventbrite', 'Eventos da web']]],
    ['Análises', [['Google Analytics', 'Eventos da web'], ['TrackBee', 'Eventos da web • Eventos offline']]],
    ['Plataformas de site', [['Bandzoogle', 'Eventos da web'], ['Drupal', 'Eventos da web'], ['GoDaddy', 'Eventos da web'], ['Hotmart', 'Eventos da web'], ['Imweb', 'Eventos da web'], ['Jimdo', 'Eventos da web']]],
    ['Plataformas de dados do cliente', [['Adobe Real-Time CDP', 'Eventos da web'], ['Commanders Act', 'Eventos da web'], ['Exponea', 'Eventos da web'], ['Segment', 'Eventos do app • Eventos offline • Eventos da web'], ['Singular', 'Eventos do app'], ['Tealium', 'Eventos da web']]],
    ['CRM e software de marketing', [['HubSpot', 'Eventos da web • Eventos de CRM'], ['Infusionsoft', 'Eventos offline'], ['Salesforce', 'Eventos offline • Eventos de CRM'], ['Voyantis', 'Eventos da web'], ['CRM da Zoho', 'Eventos offline'], ['Privyr', 'Eventos de CRM']]],
    ['Gerenciamento de tags', [['Ensighten', 'Eventos da web'], ['Gerenciador de tags do Google', 'Eventos da web'], ['PixelYourSite', 'Eventos da web'], ['Stape', 'Eventos da web']]],
    ['Plataformas móveis', [['AppsFlyer', 'Eventos do app'], ['Adjust', 'Eventos do app'], ['mParticle', 'Eventos do app'], ['Branch', 'Eventos do app'], ['Kochava', 'Eventos do app']]]
  ];
  function inicial() { return { tab: 'minhas', cat: 'Todas as categorias', par: '', rec: '' } }
  var S = ler('sim.mbe', null) || inicial();
  if (params.get('zerar') || !S.tab || ['minhas', 'galeria'].indexOf(S.tab) < 0) S = inicial();
  function grava() { try { localStorage.setItem('sim.mbe', JSON.stringify(S)) } catch (e) { } window.__simMb = { S: S } }
  grava();
  var ic = function (d, w) { return '<svg width="' + (w || 20) + '" height="' + (w || 20) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + d + '</svg>' };
  var IC = {
    sino: ic('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0"/>'), painel: ic('<circle cx="12" cy="13" r="8"/><path d="M12 13l4-4"/>'),
    tabela: ic('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 4v16"/>'), pessoas: ic('<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c1-4 4-5 6-5s5 1 6 5M15 15c3 0 5 1 6 4"/>'),
    megafone: ic('<path d="M3 10v4h4l7 5V5L7 10zM18 9a4 4 0 0 1 0 6"/>'), eventos: ic('<circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M12 9v3l-5 4M12 12l5 4"/>'), menu: ic('<path d="M4 6h16M4 12h16M4 18h16"/>'),
    mais: ic('<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>', 18), grade: ic('<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/>', 18),
    ds: ic('<circle cx="12" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/>', 18), estrela: ic('<circle cx="12" cy="12" r="9"/><path d="M12 7l1.6 3.4 3.7.4-2.8 2.5.8 3.7L12 15l-3.3 2 .8-3.7-2.8-2.5 3.7-.4z"/>', 18),
    integ: ic('<circle cx="5" cy="6" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="18" r="2"/><path d="M7 6h4l6 6M7 18h4l6-6"/>', 18)
  };
  // moldura igual à do simulador do Gerenciador de Eventos (sim-eventos.js): os itens do menu levam para lá
  function casca(corpo) {
    return '<div class="sim-faixa">🧪 Simulador de treinamento do Gerenciador de Eventos · Integrações · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' +
      '<div class="sim"><nav class="sim-trilho" aria-label="Ferramentas"><span class="logo meta-inf" aria-label="Meta">∞</span><button title="Notificações">' + IC.sino + '</button><button title="Visão geral da conta">' + IC.painel + '</button><button title="Campanhas">' + IC.tabela + '</button><button title="Públicos">' + IC.pessoas + '</button><button title="Gerenciador de Anúncios">' + IC.megafone + '</button><button class="on" title="Gerenciador de Eventos">' + IC.eventos + '</button><button title="Todas as ferramentas">' + IC.menu + '</button></nav>' +
      '<header class="sim-cab"><h1>Integrações</h1><div class="sim-portfolio" title="Portfólio empresarial"><span class="L">L</span>Lojinha da Marina Aula<span class="seta">▾</span></div><span class="sim-avatar">M</span></header>' +
      '<div class="sim-corpo"><aside class="sim-menu"><a class="verde" href="meta-eventos.html#visao">' + IC.mais + ' Conectar dados</a><a href="meta-eventos.html#visao">' + IC.grade + ' Visão geral</a><a href="meta-eventos.html#conjuntos">' + IC.ds + ' Conjuntos de dados</a><a href="meta-eventos.html#cc">' + IC.estrela + ' Conversões personalizadas</a><button class="on">' + IC.integ + ' Integrações</button></aside>' +
      '<main class="sim-main">' + corpo + '</main></div></div>';
  }
  function selOpt(id, lista, v, t) { return '<select class="ga-in" id="' + id + '" data-t="' + t + '">' + lista.map(function (o) { return '<option value="' + o[0] + '" data-pt="' + esc(o[1]) + '"' + (o[0] === v ? ' selected' : '') + '>' + o[1] + '</option>' }).join('') + '</select>' }
  var REC = [['Google Tag Manager', 'Eventos da web'], ['Shopify', 'Eventos da web'], ['WooCommerce', 'Eventos da web']];
  function telaMinhas() {   // tela real 16/10 e 28/10/2026
    return '<div class="cartao" data-t="recomend"><h2>Configure suas integrações</h2><p class="miudo">Você não tem dados conectados. Veja abaixo as recomendações de parceiros com base no site da sua empresa.</p>' +
      REC.map(function (r) { return '<label class="mb-rec"><span><b>' + r[0] + '</b><small>' + r[1] + '</small></span><input type="radio" name="mbRec" value="' + esc(r[0]) + '"' + (S.rec === r[0] ? ' checked' : '') + '/></label>' }).join('') +
      '<p class="mb-rodape"><a class="lnk">Ver outras maneiras de configurar</a><button class="btn" disabled title="Fora do simulador: na tela real abre a configuração com o parceiro">Configure para mim</button></p></div>';
  }
  function telaGaleria() {
    var nomes = [['Todas as categorias', 'Todas as categorias']].concat(CATS.map(function (c) { return [c[0], c[0]] }));
    var blocos = CATS.filter(function (c) { return S.cat === 'Todas as categorias' || S.cat === c[0] }).map(function (c) {
      return '<h3>' + c[0] + '</h3><div class="mb-grade">' + c[1].map(function (p) { return '<button class="btn ' + (S.par === p[0] ? '' : 'sec') + ' mb-par" data-par="' + esc(p[0]) + '" data-t="parceiro-' + p[0].toLowerCase().replace(/[^a-z0-9]+/g, '-') + '">' + p[0] + '<br><small>' + p[1] + '</small></button>' }).join('') + '</div>';
    }).join('');
    var det = '';
    if (S.par) { var found = null; CATS.forEach(function (c) { c[1].forEach(function (p) { if (p[0] === S.par) found = p }) }); det = '<div class="vf-caixa" data-t="det-parceiro"><b>' + esc(S.par) + '</b><br>' + (found ? found[1] : '') + '<p class="miudo">A tela de cada parceiro não foi vista (a conferir): na real, ela mostra as instruções de configuração daquele parceiro.</p></div>' }
    return '<div class="cartao"><p>Filtrar por categoria: ' + selOpt('mbCat', nomes, S.cat, 'filtro-cat') + '</p><div data-t="lista-parceiros">' + blocos + '</div>' + det + '</div>';
  }
  function pagina() {
    return casca('<div class="cartao mb-topo"><h2>Integrações</h2><p class="miudo">Conecte os dados de marketing da sua empresa e confira insights para otimizar as campanhas de anúncios.</p>' +
      '<nav class="abas"><button class="' + (S.tab === 'minhas' ? 'on' : '') + '" data-tab="minhas" data-t="tab-minhas">Minhas integrações</button><button class="' + (S.tab === 'galeria' ? 'on' : '') + '" data-tab="galeria" data-t="tab-galeria">Galeria de parceiros</button></nav></div>' +
      (S.tab === 'galeria' ? telaGaleria() : telaMinhas()) +
      '<p class="conferido">✓ Esta página, o menu, as recomendações e a galeria (categorias e parceiros listados) foram vistos de verdade no Gerenciador de Eventos em 16/10 e 28/10/2026 (PT e ES). A lista completa (“Ver tudo”) e a tela de cada parceiro não foram vistas (a conferir).</p>');
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); grava(); render(); return }
    if ((c = t.closest('[data-par]'))) { S.par = c.getAttribute('data-par'); grava(); render(); return }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'mbCat') S.cat = t.value; else if (t.name === 'mbRec') S.rec = t.value; else return;
    grava(); render();
  });
  function render() { $('#app').innerHTML = pagina(); window.__simMb = { S: S } }
  window.SIMMB = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function mb() { return window.__simMb ? window.__simMb.S : S }
  TOURS['galeria-parceiros'] = [
    { antes: function () { SIMMB.zera() }, alvo: '[data-t=recomend]', garante: function () { SIMMB.zera() }, tit: T('Integrações no Gerenciador de Eventos', 'Integraciones en el Administrador de eventos'), txt: T('No Gerenciador de Eventos, em Integrações, a aba Minhas integrações recomenda parceiros com base no site da empresa: aqui, Google Tag Manager, Shopify e WooCommerce. Clique em Próximo.', 'En el Administrador de eventos, en Integraciones, la pestaña Mis integraciones recomienda socios según el sitio de la empresa: aquí, Google Tag Manager, Shopify y WooCommerce. Haz clic en Siguiente.') },
    { alvo: '[data-t=tab-galeria]', clique: true, garante: function () { SIMMB.zera() }, tit: T('Galeria de parceiros', 'Galería de socios'), txt: T('Se a plataforma do cliente não está nas recomendações, procure na galeria. Clique em Galeria de parceiros.', 'Si la plataforma del cliente no está en las recomendaciones, búscala en la galería. Haz clic en Galería de socios.') },
    { alvo: '[data-t=filtro-cat]', garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'galeria' }) }, cond: function () { return mb().cat === 'Comércio eletrônico' }, tit: T('Filtrar por categoria', 'Filtrar por categoría'), txt: T('A Galeria de parceiros tem categorias. Filtre por “Comércio eletrônico”.', 'La Galería de socios tiene categorías. Filtra por “Comercio electrónico”.'), dica: T('Escolha Comércio eletrônico.', 'Elige Comercio electrónico.') },
    { alvo: '[data-t=parceiro-bigcommerce]', clique: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'galeria', cat: 'Comércio eletrônico' }) }, tit: T('Escolher um parceiro', 'Elegir un socio'), txt: T('Clique em BigCommerce.', 'Haz clic en BigCommerce.') },
    { alvo: '[data-t=det-parceiro]', garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'galeria', cat: 'Comércio eletrônico', par: 'BigCommerce' }) }, tit: T('Eventos da web', 'Eventos web'), txt: T('Cada parceiro mostra o tipo de evento que envia: BigCommerce envia Eventos da web. Já Segment, por exemplo, envia eventos de app, offline e da web. Clique em Próximo.', 'Cada socio muestra el tipo de evento que envía: BigCommerce envía Eventos web. En cambio Segment, por ejemplo, envía eventos de la app, offline y web. Haz clic en Siguiente.') },
    { alvo: '[data-t=lista-parceiros]', fim: true, semVolta: true, garante: function () { SIMMB.zera(); SIMMB.set({ tab: 'galeria', cat: 'Comércio eletrônico', par: 'BigCommerce' }) }, tit: T('Achou o parceiro 🎉', '¡Encontraste el socio! 🎉'), txt: T('Se a plataforma do cliente estiver na galeria, a integração dispensa editar o código. Se não estiver, a API de Conversões é manual. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Si la plataforma del cliente está en la galería, la integración evita editar el código. Si no está, la API de Conversiones es manual. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
