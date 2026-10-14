/* Plataforma Lojinha da Marina: entrada com senha, topo, idioma (PT | ES) e as telas
   (início, módulos, módulo, aula, simuladores, laboratório, ferramenta). A tela vem de <body data-tela="...">. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s) };
  function lsGet(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v) } catch (e) { return d } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } }
  var LANG = lsGet('plat.lang', 'pt') === 'es' ? 'es' : 'pt';
  var T = window.T = function (o) { return o == null ? '' : typeof o === 'string' ? o : (o[LANG] || o.pt || '') };
  var U = {
    inicio: { pt: 'Início', es: 'Inicio' }, modulos: { pt: 'Módulos', es: 'Módulos' }, loja: { pt: 'Loja', es: 'Tienda' },
    simuladores: { pt: 'Simuladores', es: 'Simuladores' }, laboratorio: { pt: 'Laboratório', es: 'Laboratorio' },
    sub: { pt: 'plataforma de treinamento', es: 'plataforma de entrenamiento' },
    pronta: { pt: 'pronta', es: 'lista' }, construcao: { pt: 'em construção', es: 'en construcción' }, planejado: { pt: 'planejado', es: 'planificado' },
    planejada: { pt: 'em breve', es: 'próximamente' }, depois: { pt: 'depois', es: 'después' }, interno: { pt: 'material interno', es: 'material interno' },
    entender: { pt: 'Entender', es: 'Entender' }, ferramenta: { pt: 'Ver de perto', es: 'Ver de cerca' }, praticar: { pt: 'Praticar', es: 'Practicar' }, atender: { pt: 'Atender', es: 'Atender' }, colas: { pt: 'Colas', es: 'Guías' },
    ant: { pt: '◀ Anterior', es: '◀ Anterior' }, prox: { pt: 'Próximo ▶', es: 'Siguiente ▶' }, proxAula: { pt: 'Próxima aula ▶', es: 'Siguiente clase ▶' }, fimMod: { pt: 'Voltar ao módulo', es: 'Volver al módulo' },
    apresentar: { pt: '🎤 Apresentar', es: '🎤 Presentar' }, sairApr: { pt: '✕ Sair da apresentação', es: '✕ Salir de la presentación' }, notas: { pt: '📝 Notas', es: '📝 Notas' },
    fontes: { pt: 'Fontes oficiais', es: 'Fuentes oficiales' }, conferido: { pt: 'conferido em', es: 'revisado el' }, min: { pt: 'min', es: 'min' }
  };

  /* a entrada (senha) fica em porta.js, que também protege a loja e os simuladores */


  /* ---------- topo ---------- */
  function topo(ativo) {
    var links = [['index.html', 'inicio'], ['modulos.html', 'modulos'], ['loja.html', 'loja'], ['simuladores.html', 'simuladores'], ['laboratorio.html', 'laboratorio'], ['colas.html', 'colas']];
    return '<header class="pl-topo"><a class="pl-marca" href="index.html">' + (window.PERSONAGEM ? PERSONAGEM('pixel', 2) : '') + '<span>Lojinha da Marina<small>' + T(U.sub) + '</small></span></a>' +
      '<nav class="pl-nav">' + links.map(function (l) { return '<a href="' + l[0] + '" class="' + (ativo === l[1] ? 'on' : '') + '">' + T(U[l[1]]) + '</a>' }).join('') + '</nav>' +
      '<div class="pl-lang" role="group" aria-label="Idioma"><button data-lang="pt" class="' + (LANG === 'pt' ? 'on' : '') + '">PT</button><button data-lang="es" class="' + (LANG === 'es' ? 'on' : '') + '">ES</button></div></header>';
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang]'); if (!b || !b.closest('.pl-topo')) return;
    lsSet('plat.lang', b.getAttribute('data-lang')); try { localStorage.setItem('loja.tuLang', b.getAttribute('data-lang')) } catch (x) { } location.reload();
  });
  var Q = new URLSearchParams(location.search);
  function selo(st) { return '<span class="selo ' + st + '">' + T(U[st] || { pt: st }) + '</span>' }
  function feitas() { return lsGet('plat.feitas', {}) }

  /* ---------- telas ---------- */
  var TELAS = {
    inicio: function () {
      var ult = lsGet('plat.ultima', null), aula = ult && (window.AULAS[ult.m] || []).filter(function (a) { return a.id === ult.a && a.status === 'pronta' })[0];
      return '<div class="pl-ola">' + PERSONAGEM('marina', 4) + PERSONAGEM('rafa', 4) + PERSONAGEM('pixel', 4) + '</div>' +
        '<h1 class="pl-h1">' + T({ pt: 'Bem-vindo à Lojinha da Marina', es: 'Bienvenido a la Lojinha da Marina' }) + '</h1>' +
        '<p class="pl-lead">' + T({ pt: 'A Marina tem uma loja online, o Rafa é do suporte e o Pixel mede tudo o que acontece no site. Escolha por onde começar.', es: 'Marina tiene una tienda online, Rafa es del soporte y el Pixel mide todo lo que pasa en el sitio. Elige por dónde empezar.' }) + '</p>' +
        (aula ? '<div class="continuar">▶ ' + T({ pt: 'Continue de onde parou:', es: 'Sigue donde lo dejaste:' }) + ' <b>' + T(aula.titulo) + '</b> <a class="btn" href="aula-plataforma.html?m=' + ult.m + '&a=' + ult.a + '">' + T({ pt: 'Continuar', es: 'Continuar' }) + '</a></div>' : '') +
        '<div class="portas">' + [
          ['modulos.html', '🎓', U.modulos, { pt: 'Aprender: aulas curtas, em ordem, com prática guiada e atendimento.', es: 'Aprender: clases cortas, en orden, con casos prácticos.' }],
          ['loja.html', '🏪', U.loja, { pt: 'Praticar: a loja da Marina, com o Pixel funcionando e o Consultor de Dados.', es: 'Practicar: la tienda de Marina, con el Pixel funcionando y el Asesor de datos.' }],
          ['simuladores.html', '🕹️', U.simuladores, { pt: 'Ferramentas da Meta de treino: clique à vontade, nada vai para a Meta.', es: 'Herramientas de Meta de práctica: haz clic sin miedo, nada va a Meta.' }],
          ['laboratorio.html', '🧪', U.laboratorio, { pt: 'Explorar: as ferramentas das aulas, soltas, para explicar e testar.', es: 'Explorar: las herramientas de las clases, sueltas, para explicar y probar.' }]
        ].map(function (p) { return '<a class="porta-card" href="' + p[0] + '"><span class="ic">' + p[1] + '</span><b>' + T(p[2]) + '</b><span>' + T(p[3]) + '</span><em>' + T({ pt: 'Entrar →', es: 'Entrar →' }) + '</em></a>' }).join('') + '</div>';
    },
    modulos: function () {
      var F = window.FASES || [];
      function card(m) { var ok = window.AULAS[m.id]; return (ok ? '<a class="item" href="modulo.html?m=' + m.id + '">' : '<div class="item off">') + '<span class="ic">' + m.icone + '</span><b>' + T(m.titulo) + '</b><p>' + T(m.resumo) + '</p>' + selo(m.status) + (ok ? '</a>' : '</div>') }
      var h = '<h1 class="pl-h1">🎓 ' + T(U.modulos) + '</h1><p class="pl-lead">' + T({ pt: 'A trilha é a história da Marina: ela começa sem saber nada e, a cada fase, o negócio dela cresce e aparecem dúvidas novas. Cada módulo tem aulas de 5 a 10 minutos, sempre no mesmo formato: entender, ver de perto, praticar e atender.', es: 'La ruta es la historia de Marina: empieza sin saber nada y, en cada fase, su negocio crece y aparecen dudas nuevas. Cada módulo tiene clases de 5 a 10 minutos, siempre con el mismo formato: entender, ver de cerca, practicar y atender.' }) + '</p>';
      for (var f = 1; f < F.length; f++) {
        var ms = window.MODULOS.filter(function (m) { return m.fase === f }); if (!ms.length) continue;
        h += '<div class="fase-cab"><span class="fase-ic">' + F[f].icone + '</span><div><small>' + T({ pt: 'Fase', es: 'Fase' }) + ' ' + f + '</small><h2>' + T(F[f].nome) + '</h2><p>' + T(F[f].resumo) + '</p></div></div><div class="grade">' + ms.map(card).join('') + '</div>';
      }
      var fora = window.MODULOS.filter(function (m) { return !m.fase });
      if (fora.length) h += '<div class="fase-cab fora"><div><h2>' + T({ pt: 'Fora da trilha', es: 'Fuera de la ruta' }) + '</h2></div></div><div class="grade">' + fora.map(card).join('') + '</div>';
      return h;
    },
    modulo: function () {
      var m = window.MODULOS.filter(function (x) { return x.id === Q.get('m') })[0] || window.MODULOS[0], aulas = window.AULAS[m.id] || [], f = feitas();
      return '<p class="pl-trilha"><a href="modulos.html">' + T(U.modulos) + '</a> ›</p><h1 class="pl-h1">' + m.icone + ' ' + T(m.titulo) + '</h1>' + faseChip(m) + '<p class="pl-lead">' + T(m.resumo) + '</p>' +
        '<div class="aulas">' + aulas.map(function (a) {
          var ok = a.status === 'pronta', fe = f[m.id + '/' + a.id];
          return (ok ? '<a class="aula-l' + (fe ? ' feita' : '') + '" href="aula-plataforma.html?m=' + m.id + '&a=' + a.id + '">' : '<div class="aula-l off">') + '<span class="n">' + (fe ? '✓' : a.id) + '</span><b>' + T(a.titulo) + '</b><small>' + (a.min ? a.min + ' ' + T(U.min) : T(U.planejada)) + '</small>' + (ok ? '</a>' : '</div>')
        }).join('') + '</div>';
    },
    aula: function () { return aulaTela() },
    simuladores: function () {
      var sims = [['meta-eventos.html', '📡', { pt: 'Gerenciador de Eventos', es: 'Administrador de eventos' }, { pt: 'Criar o Pixel, Testar eventos (com os eventos da Lojinha), Diagnóstico e Configurações.', es: 'Crear el Pixel, Probar eventos (con los eventos de la Lojinha), Diagnóstico y Configuración.' }, 'pronta'],
        ['loja.html', '🔎', { pt: 'Consultor de Dados de Anúncios (extensão)', es: 'Asesor de datos de anuncios (extensión)' }, { pt: 'Na Lojinha, clique em “Consultor de Dados” na faixa amarela.', es: 'En la Lojinha, haz clic en “Consultor de Dados” en la franja amarilla.' }, 'pronta'],
        [null, '🏢', { pt: 'Configurações do portfólio (Business Suite)', es: 'Configuración del portafolio (Business Suite)' }, { pt: 'Pessoas, páginas, fontes de dados e permissões.', es: 'Personas, páginas, fuentes de datos y permisos.' }, 'planejada'],
        [null, '🗂️', { pt: 'Gerenciador de Comércio', es: 'Administrador de ventas' }, { pt: 'Catálogo, itens, fontes de dados e correspondência com o Pixel.', es: 'Catálogo, artículos, fuentes de datos y coincidencia con el Pixel.' }, 'planejada'],
        [null, '📣', { pt: 'Gerenciador de Anúncios', es: 'Administrador de anuncios' }, { pt: 'Campanhas, conjuntos de anúncios, anúncios e relatórios.', es: 'Campañas, conjuntos de anuncios, anuncios e informes.' }, 'planejada']];
      return '<h1 class="pl-h1">🕹️ ' + T(U.simuladores) + '</h1><p class="pl-lead">' + T({ pt: 'Cópias de treino das ferramentas da Meta: o mesmo layout e os mesmos nomes, com o visual da Lojinha. Cada tela mostra a data em que foi conferida com a ferramenta real.', es: 'Copias de práctica de las herramientas de Meta: el mismo diseño y los mismos nombres, con el estilo de la Lojinha. Cada pantalla muestra la fecha en que se revisó con la herramienta real.' }) + '</p>' +
        '<div class="grade">' + sims.map(function (s) { return (s[0] ? '<a class="item" href="' + s[0] + '">' : '<div class="item off">') + '<span class="ic">' + s[1] + '</span><b>' + T(s[2]) + '</b><p>' + T(s[3]) + '</p>' + selo(s[4]) + (s[0] ? '</a>' : '</div>') }).join('') + '</div>';
    },
    laboratorio: function () {
      var F = window.FERRAMENTAS;
      return '<h1 class="pl-h1">🧪 ' + T(U.laboratorio) + '</h1><p class="pl-lead">' + T({ pt: 'As ferramentas das aulas, soltas. Use para explicar um assunto ou testar uma dúvida, sem seguir a aula inteira.', es: 'Las herramientas de las clases, sueltas. Úsalas para explicar un tema o probar una duda, sin seguir la clase completa.' }) + '</p>' +
        '<div class="grade">' + Object.keys(F).map(function (id) {
          var f = F[id], ok = f.status === 'pronta', href = f.link || 'ferramenta.html?f=' + id;
          return (ok ? '<a class="item" href="' + href + '">' : '<div class="item off">') + '<b>' + T(f.titulo) + '</b><p>' + T(f.resumo) + '</p>' + selo(f.status) + (ok ? '</a>' : '</div>')
        }).join('') + '</div>' +
        '<h2 class="pl-h2" id="loja-por-dentro">🔬 ' + T({ pt: 'A loja por dentro (F12)', es: 'La tienda por dentro (F12)' }) + '</h2>' +
        '<a class="item dentro" href="loja.html?aula=camera"><b>' + T({ pt: 'Só mais um jeito de ver o Pixel', es: 'Solo otra forma de ver el Pixel' }) + '</b><p>' + T({ pt: 'É o mesmo Pixel e são os mesmos eventos que você vê no Consultor de Dados e no Gerenciador de Eventos, só que olhando por dentro do site, como no F12 (ferramentas de desenvolvedor). No atendimento não é preciso: serve para entender o que acontece por trás e para conversar com quem cuida do site.', es: 'Es el mismo Pixel y son los mismos eventos que ves en el Asesor de datos y en el Administrador de eventos, solo que mirando por dentro del sitio, como en el F12 (herramientas de desarrollador). En la atención no hace falta: sirve para entender lo que pasa por detrás y para hablar con quien cuida el sitio.' }) + '</p><p class="abas">' + T({ pt: 'Dentro dele: 📹 Câmera · 🌐 Rede · 🔍 Lupa · 📄 Código · 🧪 Falhas · 💡 Dica. Para voltar à loja normal, use “sair” na faixa amarela.', es: 'Adentro: 📹 Cámara · 🌐 Red · 🔍 Lupa · 📄 Código · 🧪 Fallas · 💡 Consejo. Para volver a la tienda normal, usa “salir” en la franja amarilla.' }) + '</p><em>' + T({ pt: 'Abrir a loja por dentro →', es: 'Abrir la tienda por dentro →' }) + '</em></a>';
    },
    ferramenta: function () {
      var id = Q.get('f'), f = window.FERRAMENTAS[id]; if (!f || !f.montar) return '<p>' + T({ pt: 'Ferramenta não encontrada.', es: 'Herramienta no encontrada.' }) + '</p>';
      setTimeout(function () { f.montar($('#ferr'), T, LANG) });
      return '<p class="pl-trilha"><a href="laboratorio.html">' + T(U.laboratorio) + '</a> ›</p><h1 class="pl-h1">' + T(f.titulo) + '</h1><p class="pl-lead">' + T(f.resumo) + '</p><div class="palco"><div id="ferr"></div></div>';
    }
  };

  /* ---------- AULA: uma parte por vez (ver · ferramenta · praticar · caso) ---------- */
  /* conversa no estilo do chat de atendimento: Marina (cliente) à esquerda, Rafa (agente) à direita, Pixel como dica no meio */
  var FOTOS = {
    'gerenciador': '<div class="foto-ger"><div class="fg-topo"><b>Gerenciador de Eventos</b><span>Lojinha da Marina</span></div><div class="fg-corpo"><div class="fg-menu"><i></i><i class="on"></i><i></i><i></i></div><div><b class="fg-nome">Pixel da Lojinha</b><span class="fg-id">Identificação: 1234567890123456</span><div class="fg-abas"><u>Visão geral</u> Testar eventos · Diagnóstico</div><div class="fg-barras"><i style="height:30%"></i><i style="height:55%"></i><i style="height:20%"></i><i style="height:70%"></i><i style="height:45%"></i></div><span class="fg-ev">PageView · Ativo</span></div></div></div>',
    'codigo-base': '<div class="foto-cod"><span class="c">&lt;!-- Meta Pixel Code --&gt;</span>\n<span class="t">&lt;script&gt;</span>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=…\n…(window, document,\'script\',\n\'https://connect.facebook.net/en_US/fbevents.js\');\n<span class="f">fbq</span>(\'init\', \'<span class="f-init">1234567890123456</span>\');\n<span class="f">fbq</span>(\'track\', \'PageView\');\n<span class="t">&lt;/script&gt;</span>\n<span class="c">&lt;!-- End Meta Pixel Code --&gt;</span></div>'
  };
  function chat(dialogo, quem0) {
    var min = 41, h = '<div class="chat"><div class="chat-sis">' + T({ pt: 'Rafa entrou na conversa.', es: 'Rafa se unió a la conversación.' }) + '</div>';
    function av(q) { return '<span class="av">' + PERSONAGEM(q, 1.6) + '</span>' }
    dialogo.forEach(function (d) {
      var hora = '17:' + (min++), m = d[1];
      if (d[0] === 'pixel') { h += '<div class="chat-dica">' + av('pixel') + '<span><b>Pixel:</b> ' + T(m) + '</span></div>'; return }
      var lado = d[0] === 'rafa' ? 'dir' : 'esq', corpo = m.foto ? '<div class="bolha foto" data-foto="' + m.foto + '">' + FOTOS[m.foto] + '</div>' : '<div class="bolha"' + (m.id ? ' data-msg="' + m.id + '"' : '') + '>' + T(m) + '</div>';
      if (m.foto) h += '<div class="chat-sis">' + T(m.legenda) + '</div>';
      h += '<div class="msg ' + lado + '">' + av(d[0]) + '<div>' + corpo + '<span class="hora">' + (PERSONAGEM_NOME[d[0]] || d[0]) + ' · ' + hora + '</span></div></div>';
    });
    return h + '</div>';
  }
  function colaTexto(c) {
    return [T({ pt: 'PERGUNTE AO CLIENTE', es: 'PREGUNTA AL CLIENTE' })].concat(c.perguntas.map(function (x) { return '• ' + T(x) }),
      ['', T({ pt: 'CONFIRA', es: 'REVISA' })], c.conferir.map(function (x) { return '☐ ' + T(x) }),
      ['', T({ pt: 'FRASE PRONTA', es: 'FRASE LISTA' }), T(c.frase)], c.passos ? [''].concat([T({ pt: 'PASSO A PASSO PARA O CLIENTE', es: 'PASO A PASO PARA EL CLIENTE' })], c.passos.map(function (x, i) { return (i + 1) + '. ' + T(x) })) : [], ['', T({ pt: 'QUANDO ENCAMINHAR', es: 'CUÁNDO DERIVAR' }), T(c.encaminhar)]).join('\n').replace(/<[^>]+>/g, '');
  }
  function colaHtml(c, id) {
    return '<div class="cola" id="' + id + '"><div class="cola-cab"><b>🗒️ ' + T({ pt: 'Cola do atendimento', es: 'Guía rápida de atención' }) + '</b><button class="btn sec" data-copiar="' + id + '">📋 ' + T({ pt: 'Copiar', es: 'Copiar' }) + '</button></div>' +
      '<div class="cola-grade"><div><h4>❓ ' + T({ pt: 'Pergunte ao cliente', es: 'Pregunta al cliente' }) + '</h4><ul>' + c.perguntas.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ul></div>' +
      '<div><h4>✅ ' + T({ pt: 'Confira', es: 'Revisa' }) + '</h4><ul class="ck">' + c.conferir.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ul></div></div>' +
      '<h4>💬 ' + T({ pt: 'Frase pronta', es: 'Frase lista' }) + '</h4><p class="cola-frase">' + T(c.frase) + '</p>' +
      (c.passos ? '<h4>🧭 ' + T({ pt: 'Passo a passo para o cliente', es: 'Paso a paso para el cliente' }) + '</h4><ol class="cola-passos">' + c.passos.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ol>' : '') +
      '<h4>🧑‍💻 ' + T({ pt: 'Quando encaminhar', es: 'Cuándo derivar' }) + '</h4><p>' + T(c.encaminhar) + '</p></div>';
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-copiar]'); if (!b) return;
    var mid = b.getAttribute('data-copiar').split('__'), a = (window.AULAS[mid[1]] || []).filter(function (x) { return x.id === mid[2] })[0]; if (!a) return;
    var txt = colaTexto(a.cola), ok = function () { b.textContent = '✓ ' + T({ pt: 'Copiado', es: 'Copiado' }) };
    try { navigator.clipboard.writeText(txt).then(ok, function () { }) } catch (x) { }
  });

  function faseChip(m) { var f = (window.FASES || [])[m && m.fase]; return f ? '<p class="fase-chip">' + PERSONAGEM('marina', 1.4) + T({ pt: 'Marina nesta fase:', es: 'Marina en esta fase:' }) + ' <b>' + f.icone + ' ' + T(f.nome) + '</b></p>' : '' }
  /* ---------- AULA: uma parte por vez (entender · ver de perto · praticar · atender) ---------- */
  var passoAtual = 0;
  function aulaTela() {
    var mid = Q.get('m'), aid = Q.get('a'), m = window.MODULOS.filter(function (x) { return x.id === mid })[0], lista = window.AULAS[mid] || [];
    var a = lista.filter(function (x) { return x.id === aid })[0];
    if (!m || !a || a.status !== 'pronta') return '<p>' + T({ pt: 'Aula não encontrada.', es: 'Clase no encontrada.' }) + ' <a href="modulos.html">' + T(U.modulos) + '</a></p>';
    lsSet('plat.ultima', { m: mid, a: aid });
    var partes = ['entender', 'ferramenta', 'praticar', 'atender'].filter(function (p) { return a[p] });
    passoAtual = Math.max(0, Math.min(partes.length - 1, (parseInt(Q.get('passo'), 10) || 1) - 1));
    var prox = lista[lista.indexOf(a) + 1], aqui = 'aula-plataforma.html?m=' + mid + '&a=' + aid;
    if (Q.get('feito')) { var fp0 = lsGet('plat.praticas', {}); fp0[mid + '/' + aid + '/' + Q.get('feito')] = true; lsSet('plat.praticas', fp0) }
    function desenha() {
      var p = partes[passoAtual], h = '';
      if (p === 'entender') h = '<h2>💬 ' + T(U.entender) + '</h2>' + (a.antes ? '<p class="fio antes">📖 <b>' + T({ pt: 'Onde paramos:', es: 'Dónde quedamos:' }) + '</b> ' + T(a.antes) + '</p>' : '') + chat(a.entender.dialogo) + '<ul class="pontos">' + a.entender.pontos.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ul>';
      else if (p === 'ferramenta') { var f = window.FERRAMENTAS[a.ferramenta]; h = '<h2>🔍 ' + T(U.ferramenta) + '</h2><div class="ferr-box" id="ferr"></div><p class="mais-lab">🧪 ' + T({ pt: 'Quer os detalhes técnicos?', es: '¿Quieres los detalles técnicos?' }) + ' <a href="ferramenta.html?f=' + a.ferramenta + '">' + T({ pt: 'Ferramenta completa no Laboratório', es: 'Herramienta completa en el Laboratorio' }) + '</a></p>'; setTimeout(function () { f.montar($('#ferr'), T, LANG, { modo: 'simples' }) }) }
      else if (p === 'praticar') {
        var volta = function (id) { return encodeURIComponent(aqui + '&passo=' + (passoAtual + 1) + '&feito=' + id) }, fp = lsGet('plat.praticas', {});
        var url = function (o) { return o.pagina + (o.pagina.indexOf('?') < 0 ? '?' : '&') + 'tour=' + o.tour + '&voltar=' + volta(o.id) };
        h = '<h2>🕹️ ' + T(U.praticar) + '</h2><div class="pratica"><span class="pratica-masc">' + PERSONAGEM('pixel', 4) + '</span><div><p class="pratica-txt">' + T(a.praticar.texto) + '</p>' +
          (a.praticar.opcoes ? '' : '<a class="btn amarelo grande" href="' + url({ pagina: a.praticar.pagina, tour: a.praticar.tour, id: 'unica' }) + '">▶ ' + T({ pt: 'Começar a prática guiada', es: 'Empezar la práctica guiada' }) + '</a>') + '</div></div>' +
          (a.praticar.opcoes ? '<div class="jeitos">' + a.praticar.opcoes.map(function (o, i) {
            var feito = fp[mid + '/' + aid + '/' + o.id];
            return '<a class="jeito' + (i === 0 ? ' principal' : '') + (feito ? ' feito' : '') + '" href="' + url(o) + '"><span class="n">' + (feito ? '✓' : i + 1) + '</span><span class="ic">' + o.icone + '</span><div><b>' + T(o.tit) + (o.selo ? ' <em>' + T(o.selo) + '</em>' : '') + '</b><p>' + T(o.txt) + '</p></div><span class="ir">▶</span></a>'
          }).join('') + '</div><p class="miudo">💡 ' + T({ pt: 'Se um jeito não estiver disponível, tente o próximo. Ao terminar um tutorial, você volta para cá.', es: 'Si una forma no está disponible, prueba la siguiente. Al terminar un tutorial, vuelves aquí.' }) + '</p>' : '<p class="miudo">' + T({ pt: 'Ao terminar, você volta para esta aula, no passo Atender.', es: 'Al terminar, vuelves a esta clase, en el paso Atender.' }) + '</p>');
      }
      else if (p === 'atender') h = '<h2>🎧 ' + T(U.atender) + '</h2>' + chat([['marina', a.atender.cena]]) + '<b>' + T(a.atender.pergunta) + '</b><div class="opcoes">' + a.atender.opcoes.map(function (o, i) { return '<button class="opcao" data-op="' + i + '">' + T(o.txt) + '</button>' }).join('') + '</div>' +
        (a.cola ? colaHtml(a.cola, 'cola__' + mid + '__' + aid) : '') + (a.gancho ? '<p class="fio depois">➡️ <b>' + T({ pt: 'Na próxima aula:', es: 'En la próxima clase:' }) + '</b> ' + T(a.gancho) + '</p>' : '');
      $('#palco').innerHTML = h;
      document.querySelectorAll('.passos button').forEach(function (b, i) { b.classList.toggle('on', i === passoAtual); b.classList.toggle('feito', i < passoAtual) });
      $('#bAnt').disabled = passoAtual === 0;
      var ultimo = passoAtual === partes.length - 1;
      $('#bProx').textContent = ultimo ? (prox && prox.status === 'pronta' ? T(U.proxAula) : T(U.fimMod)) : T(U.prox);
      if (ultimo) { var f2 = feitas(); f2[mid + '/' + aid] = true; lsSet('plat.feitas', f2) }
    }
    setTimeout(function () {
      desenha();
      $('#bAnt').onclick = function () { if (passoAtual > 0) { passoAtual--; desenha() } };
      $('#bProx').onclick = function () {
        if (passoAtual < partes.length - 1) { passoAtual++; desenha(); window.scrollTo({ top: 0, behavior: 'smooth' }) }
        else location.href = prox && prox.status === 'pronta' ? 'aula-plataforma.html?m=' + mid + '&a=' + prox.id : 'modulo.html?m=' + mid;
      };
      document.querySelectorAll('.passos button').forEach(function (b, i) { b.onclick = function () { passoAtual = i; desenha() } });
      $('#palco').addEventListener('click', function (e) {
        var o = e.target.closest('[data-op]'); if (!o) return; var op = a.atender.opcoes[+o.getAttribute('data-op')];
        if (o.querySelector('.fb')) return;
        o.classList.add(op.certa ? 'certa' : 'errada'); o.insertAdjacentHTML('beforeend', '<span class="fb">' + (op.certa ? '✅ ' : '❌ ') + T(op.fb) + '</span>');
      });
      $('#bApr').onclick = function () { document.documentElement.classList.toggle('apresentar'); this.textContent = document.documentElement.classList.contains('apresentar') ? T(U.sairApr) : T(U.apresentar) };
      $('#bNotas').onclick = function () { document.body.classList.toggle('mostra-notas') };
      document.addEventListener('keydown', function (e) { if (e.target.closest('input,textarea')) return; if (e.key === 'ArrowRight') $('#bProx').click(); if (e.key === 'ArrowLeft') $('#bAnt').click(); if (e.key === 'n' || e.key === 'N') $('#bNotas').click() });
    });
    return '<div class="barra-apr"><button class="btn sec" id="bNotas">' + T(U.notas) + '</button><button class="btn sec" id="bApr">' + T(U.apresentar) + '</button></div>' +
      '<p class="pl-trilha"><a href="modulos.html">' + T(U.modulos) + '</a> › <a href="modulo.html?m=' + mid + '">' + T(m.titulo) + '</a> › ' + T({ pt: 'Aula', es: 'Clase' }) + ' ' + a.id + '</p>' +
      '<h1 class="pl-h1">' + T(a.titulo) + '</h1>' + faseChip(m) + '<p class="pl-lead">🎯 ' + T(a.objetivo) + ' <small>· ' + a.min + ' ' + T(U.min) + '</small></p>' +
      '<div class="passos">' + partes.map(function (p, i) { return '<button><span class="num">' + (i + 1) + '</span>' + T(U[p]) + '</button>' }).join('') + '</div>' +
      '<div class="palco" id="palco"></div>' +
      '<div class="notas"><b>📝 ' + T({ pt: 'Notas para quem apresenta', es: 'Notas para quien presenta' }) + ':</b> ' + T(a.entender.notas) + '</div>' +
      '<div class="nav-aula"><button class="btn sec" id="bAnt">' + T(U.ant) + '</button><button class="btn" id="bProx">' + T(U.prox) + '</button></div>' +
      (a.fontes ? '<details class="fontes"><summary>📚 ' + T(U.fontes) + '</summary><ul>' + a.fontes.map(function (f) { return '<li><a href="' + f.url + '" target="_blank" rel="noopener">' + T(f.titulo) + '</a> · ' + T(U.conferido) + ' ' + f.conferido + '</li>' }).join('') + '</ul></details>' : '');
  }

  /* prática guiada feita na própria plataforma (ex.: pedir e ler o print do cliente) */
  TELAS.pratica = function () {
    var p = (window.PRATICAS || {})[Q.get('p')]; if (!p) return '<p>' + T({ pt: 'Prática não encontrada.', es: 'Práctica no encontrada.' }) + '</p>';
    setTimeout(function () {
      $('#palcoPratica').addEventListener('click', function (e) {
        var o = e.target.closest('[data-pp]'); if (!o || $('.pp-op.certa')) return; var op = p.pergunta.opcoes[+o.getAttribute('data-pp')];
        document.querySelectorAll('.pp-op .fb').forEach(function (x) { x.remove() }); document.querySelectorAll('.pp-op').forEach(function (x) { x.classList.remove('errada') });
        o.classList.add(op.certa ? 'certa' : 'errada'); o.insertAdjacentHTML('beforeend', '<span class="fb">' + (op.certa ? '✅ ' : '❌ ') + T(op.fb) + '</span>');
      });
    });
    return '<h1 class="pl-h1">🕹️ ' + T(p.titulo) + '</h1><p class="pl-lead">' + T(p.resumo) + '</p><div class="palco" id="palcoPratica">' + chat(p.dialogo) +
      '<div class="pp-pergunta"><b>' + T(p.pergunta.txt) + '</b><div class="opcoes">' + p.pergunta.opcoes.map(function (o, i) { return '<button class="opcao pp-op" data-pp="' + i + '">' + T(o.txt) + '</button>' }).join('') + '</div></div></div>';
  };

  /* página com todas as colas, para consulta rápida no dia a dia */
  TELAS.colas = function () {
    var h = '<h1 class="pl-h1">🗒️ ' + T({ pt: 'Colas do atendimento', es: 'Guías rápidas de atención' }) + '</h1><p class="pl-lead">' + T({ pt: 'O resumo prático de cada aula: o que perguntar, o que conferir, a frase pronta e quando encaminhar. Use o botão copiar durante o atendimento.', es: 'El resumen práctico de cada clase: qué preguntar, qué revisar, la frase lista y cuándo derivar. Usa el botón copiar durante la atención.' }) + '</p>';
    window.MODULOS.forEach(function (m) {
      var aulas = (window.AULAS[m.id] || []).filter(function (a) { return a.cola });
      if (!aulas.length) return;
      h += '<h2 class="secao-tit">' + m.icone + ' ' + T(m.titulo) + '</h2>' + aulas.map(function (a) { return '<h3>' + a.id + ' · ' + T(a.titulo) + ' <a class="miudo" href="aula-plataforma.html?m=' + m.id + '&a=' + a.id + '">' + T({ pt: 'abrir aula', es: 'abrir clase' }) + '</a></h3>' + colaHtml(a.cola, 'cola__' + m.id + '__' + a.id) }).join('');
    });
    return h;
  };

  /* ---------- montagem ---------- */
  function monta() {
    var tela = document.body.getAttribute('data-tela');
    if (!tela) return;   // páginas da loja/simulador só usam a porta
    var ativo = { inicio: 'inicio', modulos: 'modulos', modulo: 'modulos', aula: 'modulos', pratica: 'modulos', simuladores: 'simuladores', laboratorio: 'laboratorio', ferramenta: 'laboratorio', colas: 'colas' }[tela];
    document.documentElement.lang = LANG === 'es' ? 'es' : 'pt-BR';
    var tg = [].slice.call(document.querySelectorAll('.tg-holo,.tg-balao'));   // tutorial guiado já aberto: não apagar
    document.body.innerHTML = topo(ativo) + '<main class="pl-main">' + TELAS[tela]() + '</main>';
    tg.forEach(function (x) { document.body.appendChild(x) });
  }
  function inicia() {
    // cada prática começa do zero: sem F12, sem Consultor de Dados aberto, sem tutorial pela metade
    try { ['loja.labLoja', 'loja.daAberto', 'tour.ativo'].forEach(function (k) { sessionStorage.removeItem(k) }); localStorage.setItem('loja.aulaAberta', 'false') } catch (e) { }
    window.PLAT_PORTA(monta)
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inicia); else inicia();
})();
