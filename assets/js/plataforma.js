/* Plataforma Lojinha da Marina: entrada com senha, topo, idioma (PT | ES) e as telas
   (início, módulos, módulo, aula, simuladores, laboratório, ferramenta). A tela vem de <body data-tela="...">. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s) };
  function lsGet(k, d) { try { var v = localStorage.getItem(k); return v == null ? d : JSON.parse(v) } catch (e) { return d } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } }
  var LANG = lsGet('plat.lang', 'pt') === 'es' ? 'es' : 'pt';
  function mov() { return (window.MOV || { chat: function (c, f) { f && f() }, cascata: function () { }, confete: function () { } }) }
  var T = window.T = function (o) { return o == null ? '' : typeof o === 'string' ? o : (o[LANG] || o.pt || '') };
  var U = {
    inicio: { pt: 'Início', es: 'Inicio' }, modulos: { pt: 'Módulos', es: 'Módulos' }, diagnostico: { pt: 'Diagnóstico', es: 'Diagnóstico' }, reclamacao: { pt: 'A Marina reclama', es: 'Marina reclama' }, resolver: { pt: 'Resolver', es: 'Resolver' }, porque: { pt: 'Por que aconteceu', es: 'Por qué pasó' }, loja: { pt: 'Loja', es: 'Tienda' },
    feedback: { pt: 'Feedback', es: 'Feedback' }, simuladores: { pt: 'Simuladores', es: 'Simuladores' }, laboratorio: { pt: 'Laboratório', es: 'Laboratorio' },
    sub: { pt: 'plataforma de treinamento', es: 'plataforma de entrenamiento' },
    pronta: { pt: 'pronta', es: 'lista' }, construcao: { pt: 'em construção', es: 'en construcción' }, planejado: { pt: 'planejado', es: 'planificado' },
    planejada: { pt: 'em breve', es: 'próximamente' }, depois: { pt: 'depois', es: 'después' }, interno: { pt: 'material interno', es: 'material interno' },
    entender: { pt: 'Entender', es: 'Entender' }, ferramenta: { pt: 'Ver de perto', es: 'Ver de cerca' }, praticar: { pt: 'Praticar', es: 'Practicar' }, atender: { pt: 'Atender', es: 'Atender' }, colas: { pt: 'Colas', es: 'Guías' }, faq: { pt: 'FAQ', es: 'FAQ' },
    ant: { pt: '◀ Anterior', es: '◀ Anterior' }, prox: { pt: 'Próximo ▶', es: 'Siguiente ▶' }, proxAula: { pt: 'Próxima aula ▶', es: 'Siguiente clase ▶' }, proxMod: { pt: 'Próximo módulo ▶', es: 'Siguiente módulo ▶' }, fimMod: { pt: 'Voltar ao módulo', es: 'Volver al módulo' },
    apresentar: { pt: '🎤 Apresentar', es: '🎤 Presentar' }, sairApr: { pt: '✕ Sair da apresentação', es: '✕ Salir de la presentación' }, notas: { pt: '📝 Notas', es: '📝 Notas' },
    fontes: { pt: 'Fontes oficiais', es: 'Fuentes oficiales' }, conferido: { pt: 'conferido em', es: 'revisado el' }, min: { pt: 'min', es: 'min' }
  };

  /* a entrada (senha) fica em porta.js, que também protege a loja e os simuladores */


  /* ---------- topo ---------- */
  function topo(ativo) {
    var links = [['index.html', 'inicio'], ['modulos.html', 'modulos'], ['diagnostico.html', 'diagnostico'], ['loja.html', 'loja'], ['simuladores.html', 'simuladores'], ['laboratorio.html', 'laboratorio'], ['faq.html', 'faq']];
    if (window.PUB_ESCONDIDA) links = links.filter(function (l) { return !window.PUB_ESCONDIDA(l[0]) });   // abas Simuladores e Laboratório escondidas (site publicado e, desde 25/10, encostadas)
    if (window.MODO_PUBLICO) links.push(['feedback.html', 'feedback']);   // só no site publicado, ao lado de Colas
    return '<header class="pl-topo"><a class="pl-marca" href="index.html">' + (window.PERSONAGEM ? PERSONAGEM('marina', 1.5) : '') + '<span>Lojinha da Marina<small>' + T(U.sub) + '</small></span></a>' +
      '<nav class="pl-nav">' + links.map(function (l) { return '<a href="' + l[0] + '" class="' + (ativo === l[1] ? 'on' : '') + '">' + T(U[l[1]]) + '</a>' }).join('') + '</nav>' +
      (window.BUSCA ? '<button class="pp-botao" data-pergunte title="' + T({ pt: 'Pergunte ao Pixel (atalho: tecla /)', es: 'Pregúntale al Pixel (atajo: tecla /)' }) + '">🔎 <span>' + T({ pt: 'Pergunte ao Pixel', es: 'Pregúntale al Pixel' }) + '</span></button>' : '') +
      '<div class="pl-lang" role="group" aria-label="Idioma"><button data-lang="pt" class="' + (LANG === 'pt' ? 'on' : '') + '">PT</button><button data-lang="es" class="' + (LANG === 'es' ? 'on' : '') + '">ES</button></div></header>';
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-lang]'); if (!b || !b.closest('.pl-topo')) return;
    lsSet('plat.lang', b.getAttribute('data-lang')); try { localStorage.setItem('loja.tuLang', b.getAttribute('data-lang')) } catch (x) { } location.reload();
  });
  var Q = new URLSearchParams(location.search);
  function selo(st) { return '<span class="selo ' + st + '">' + T(U[st] || { pt: st }) + '</span>' }
  function feitas() { return lsGet('plat.feitas', {}) }

  /* ---------- trilhas (Foco | Completa): só listas e ordens de módulos; o conteúdo é um só ---------- */
  function trilhaAtual() {
    var L = window.TRILHAS || [], id = Q.get('t');
    if (id && L.filter(function (t) { return t.id === id }).length) lsSet('plat.trilha', id); else id = lsGet('plat.trilha', 'foco');
    return L.filter(function (t) { return t.id === id })[0] || L[0];
  }
  function modulosDaTrilha(tr) {
    return (tr.modulos || []).map(function (id) { return window.MODULOS.filter(function (m) { return m.id === id })[0] }).filter(Boolean);
  }
  /* aulas de um módulo na trilha atual: na Foco, as que são só da Completa (soCompleta) ficam de fora */
  function aulasDaTrilha(mid) {
    var tr = trilhaAtual(), L = window.AULAS[mid] || [];
    return tr.id === 'foco' ? L.filter(function (a) { return !a.soCompleta }) : L;
  }
  /* próximo módulo da trilha atual que já tem aula pronta (o botão aparece quando o módulo termina) */
  function proximoModulo(mid) {
    var tr = trilhaAtual(), ids = (tr.modulos || []).concat(tr.extras || []), k = ids.indexOf(mid);
    for (var i = k < 0 ? ids.length : k + 1; i < ids.length; i++) {
      var m = window.MODULOS.filter(function (x) { return x.id === ids[i] })[0];
      if (m && aulasDaTrilha(m.id).some(function (a) { return a.status === 'pronta' })) return m;
    }
    return null;
  }
  function trilhaChip(m) {
    var tr = trilhaAtual(), ids = (tr.modulos || []).concat(tr.extras || []), k = ids.indexOf(m.id);
    return k < 0 ? '' : '<p class="trilha-chip">' + tr.icone + ' ' + T(tr.nome) + ' · ' + T({ pt: 'módulo', es: 'módulo' }) + ' ' + (k + 1) + ' ' + T({ pt: 'de', es: 'de' }) + ' ' + ids.length + '</p>';
  }

  /* ---------- telas ---------- */
  var TELAS = {
    inicio: function () {
      var ult = lsGet('plat.ultima', null), aula = ult && (window.AULAS[ult.m] || []).filter(function (a) { return a.id === ult.a && a.status === 'pronta' })[0];
      return '<div class="pl-ola">' + (window.INTRO ? '<button class="ola-marina" data-intro aria-label="' + T({ pt: 'Ver a história da Marina', es: 'Ver la historia de Marina' }) + '">' + PERSONAGEM('marina', 4) + '</button>' : PERSONAGEM('marina', 4)) + PERSONAGEM('rafa', 4) + PERSONAGEM('pixel', 4) + '</div>' +
        '<h1 class="pl-h1">' + T({ pt: 'Bem-vindo à Lojinha da Marina', es: 'Bienvenido a la Lojinha da Marina' }) + '</h1>' +
        '<p class="pl-lead">' + T({ pt: 'A Marina tem uma loja online e quer crescer com a Meta. O Rafa é do suporte e ajuda a Marina em cada fase. O Pixel, nosso mascote, te guia pelo caminho. Escolha por onde começar.', es: 'Marina tiene una tienda online y quiere crecer con Meta. Rafa es del soporte y ayuda a Marina en cada fase. El Pixel, nuestra mascota, te guía en el camino. Elige por dónde empezar.' }) + '</p>' +
        (window.BUSCA ? '<form class="pp-hero" role="search"><input type="search" placeholder="' + T({ pt: '🔎 Pergunte ao Pixel: escreva sua dúvida do seu jeito', es: '🔎 Pregúntale al Pixel: escribe tu duda a tu manera' }) + '" aria-label="' + T({ pt: 'Pergunte ao Pixel', es: 'Pregúntale al Pixel' }) + '"/><button class="btn amarelo">' + T({ pt: 'Perguntar', es: 'Preguntar' }) + '</button></form>' : '') +
        (aula ? '<div class="continuar">▶ ' + T({ pt: 'Continue de onde parou:', es: 'Sigue donde lo dejaste:' }) + ' <b>' + T(aula.titulo) + '</b> <a class="btn" href="aula-plataforma.html?m=' + ult.m + '&a=' + ult.a + '">' + T({ pt: 'Continuar', es: 'Continuar' }) + '</a></div>' : '') +
        '<div class="portas">' + [
          ['modulos.html', '🎓', U.modulos, { pt: 'Aprender: aulas curtas, em ordem, com prática guiada e atendimento.', es: 'Aprender: clases cortas, en orden, con casos prácticos.' }],
          ['diagnostico.html', '🩺', U.diagnostico, { pt: 'Resolver: casos de verdade, do jeito que o cliente reclama, com o tutorial guiado até o problema sumir.', es: 'Resolver: casos reales, tal como el cliente reclama, con el tutorial guiado hasta que el problema desaparece.' }],
          ['loja.html', '🏪', U.loja, { pt: 'Praticar: a loja da Marina, com o Pixel funcionando e o Consultor de Dados.', es: 'Practicar: la tienda de Marina, con el Pixel funcionando y el Asesor de datos.' }],
          ['simuladores.html', '🕹️', U.simuladores, { pt: 'Ferramentas da Meta de treino: clique à vontade, nada vai para a Meta.', es: 'Herramientas de Meta de práctica: haz clic sin miedo, nada va a Meta.' }],
          ['laboratorio.html', '🧪', U.laboratorio, { pt: 'Explorar: as ferramentas das aulas, soltas, para explicar e testar.', es: 'Explorar: las herramientas de las clases, sueltas, para explicar y probar.' }]
        ].filter(function (p) { return !window.PUB_ESCONDIDA(p[0]) }).map(function (p) { return '<a class="porta-card" href="' + p[0] + '"><span class="ic">' + p[1] + '</span><b>' + T(p[2]) + '</b><span>' + T(p[3]) + '</span><em>' + T({ pt: 'Entrar →', es: 'Entrar →' }) + '</em></a>' }).join('') + '</div>';
    },
    modulos: function () {
      var tr = trilhaAtual(), n = 0; setTimeout(ligaRecomecar);
      function card(m) {
        n++; var ok = window.AULAS[m.id];
        return (ok ? '<a class="item" href="modulo.html?m=' + m.id + '">' : '<div class="item off">') + '<span class="num">' + n + '</span><span class="ic">' + m.icone + '</span><b>' + T(m.titulo) + '</b><p>' + T(m.resumo) + '</p>' + selo(m.status) + (ok ? '</a>' : '</div>');
      }
      var abas = '<div class="trilhas-abas" role="tablist">' + window.TRILHAS.map(function (t) {
        return '<a role="tab" class="trilha-aba' + (t.id === tr.id ? ' on' : '') + '" href="modulos.html?t=' + t.id + '"><span class="ic">' + t.icone + '</span><b>' + T(t.nome) + '</b><small>' + T(t.sub) + '</small></a>';
      }).join('') + '</div>';
      var h = '<h1 class="pl-h1">🎓 ' + T(U.modulos) + '</h1>' + abas + '<p class="pl-lead">' + T(tr.resumo) + '</p>' +
        '<p class="pl-lead"><small>' + T({ pt: 'Cada módulo tem aulas de 5 a 10 minutos, sempre no mesmo formato: entender, ver de perto, praticar e atender. A história da Marina acompanha todas as aulas.', es: 'Cada módulo tiene clases de 5 a 10 minutos, siempre con el mismo formato: entender, ver de cerca, practicar y atender. La historia de Marina acompaña todas las clases.' }) + '</small></p>' +
        recomecarMini() + '<div class="grade">' + modulosDaTrilha(tr).map(card).join('') + '</div>';
      if (tr.extras && tr.extras.length) {
        h += '<div class="fase-cab fora"><div><h2>' + T({ pt: 'Módulos extras', es: 'Módulos extras' }) + '</h2><p>' + T({ pt: 'Só na Trilha Completa: assuntos de outras áreas, ainda em construção.', es: 'Solo en la Ruta Completa: temas de otras áreas, todavía en construcción.' }) + '</p></div></div><div class="grade">' +
          tr.extras.map(function (id) { return card(window.MODULOS.filter(function (m) { return m.id === id })[0]) }).join('') + '</div>';
      }
      return h;
    },
    modulo: function () {
      var m = window.MODULOS.filter(function (x) { return x.id === Q.get('m') })[0] || window.MODULOS[0], aulas = aulasDaTrilha(m.id), f = feitas();
      var dg = m.area === 'diagnostico';
      return '<p class="pl-trilha"><a href="' + (dg ? 'diagnostico.html' : 'modulos.html') + '">' + T(dg ? U.diagnostico : U.modulos) + '</a> ›</p><h1 class="pl-h1">' + m.icone + ' ' + T(m.titulo) + '</h1>' + (dg ? '' : trilhaChip(m)) + '<p class="pl-lead">' + T(m.resumo) + '</p>' +
        '<div class="aulas">' + aulas.map(function (a) {
          var ok = a.status === 'pronta', fe = f[m.id + '/' + a.id];
          return (ok ? '<a class="aula-l' + (fe ? ' feita' : '') + '" href="aula-plataforma.html?m=' + m.id + '&a=' + a.id + '">' : '<div class="aula-l off">') + '<span class="n">' + (fe ? '✓' : a.id) + '</span><span class="aula-tx"><b>' + T(a.titulo) + (a.opcional ? ' <span class="selo-opc">' + T({ pt: 'opcional', es: 'opcional' }) + '</span>' : '') + '</b>' + (ok && a.objetivo ? '<span class="aula-obj">' + T(a.objetivo) + '</span>' : '') + '</span><small>' + (a.min ? a.min + ' ' + T(U.min) : T(U.planejada)) + '</small>' + (ok ? '</a>' : '</div>')
        }).join('') + '</div>' + (function () {
          var prontas = aulas.filter(function (a) { return a.status === 'pronta' && !a.opcional }), pm = dg ? null : proximoModulo(m.id);
          var tudo = prontas.length && prontas.every(function (a) { return f[m.id + '/' + a.id] });
          return tudo && pm ? '<p class="prox-mod">🎉 ' + T({ pt: 'Módulo concluído!', es: '¡Módulo completado!' }) + ' <a class="btn" href="modulo.html?m=' + pm.id + '">' + T({ pt: 'Próximo módulo:', es: 'Siguiente módulo:' }) + ' ' + pm.icone + ' ' + T(pm.titulo) + ' ▶</a></p>' : '';
        })();
    },
    aula: function () { return aulaTela() },
    diagnostico: function () {
      var B = window.MODULOS.filter(function (m) { return m.area === 'diagnostico' }), n = 0, f = feitas();
      return '<h1 class="pl-h1">🩺 ' + T({ pt: 'Diagnóstico de casos', es: 'Diagnóstico de casos' }) + '</h1>' +
        '<p class="pl-lead">' + T({ pt: 'Fora da rota das trilhas: problemas que os clientes trazem de verdade, separados por assunto. Cada caso começa com a Marina reclamando, do jeito que um cliente fala; depois o Pixel te guia, nas telas reais, até o problema sumir. No fim: por que aconteceu, como responder e a cola.', es: 'Fuera de la ruta de las rutas de estudio: problemas que los clientes traen de verdad, separados por tema. Cada caso empieza con Marina reclamando, tal como habla un cliente; luego el Pixel te guía, en las pantallas reales, hasta que el problema desaparece. Al final: por qué pasó, cómo responder y la guía rápida.' }) + '</p>' +
        '<div class="grade">' + B.map(function (m) {
          n++; var casos = (window.AULAS[m.id] || []).filter(function (a) { return a.status === 'pronta' }), ok = casos.length, fe = casos.filter(function (a) { return f[m.id + '/' + a.id] }).length;
          return (ok ? '<a class="item" href="modulo.html?m=' + m.id + '">' : '<div class="item off">') + '<span class="num">' + n + '</span><span class="ic">' + m.icone + '</span><b>' + T(m.titulo) + '</b><p>' + T(m.resumo) + '</p>' +
            (ok ? '<span class="selo construcao">' + casos.length + ' ' + T(casos.length === 1 ? { pt: 'caso', es: 'caso' } : { pt: 'casos', es: 'casos' }) + (fe ? ' · ' + fe + ' ✓' : '') + '</span>' : selo('planejado')) + (ok ? '</a>' : '</div>');
        }).join('') + '</div>';
    },
    simuladores: function () {
      setTimeout(ligaRecomecar);
      var sims = [['meta-eventos.html', '📡', { pt: 'Gerenciador de Eventos', es: 'Administrador de eventos' }, { pt: 'Criar o Pixel, usar os Eventos de teste (com os eventos da Lojinha), Diagnóstico e Configurações.', es: 'Crear el Pixel, Probar eventos (con los eventos de la Lojinha), Diagnóstico y Configuración.' }, 'pronta'],
        ['meta-instagram.html', '📸', { pt: 'Instagram (perfil e conta profissional)', es: 'Instagram (perfil y cuenta profesional)' }, { pt: 'Virar conta profissional e editar o perfil, com as telas reais.', es: 'Volverse cuenta profesional y editar el perfil, con las pantallas reales.' }, 'pronta'],
        ['meta-portfolio.html', '🏢', { pt: 'Configurações do portfólio (Business Suite)', es: 'Configuración del portfolio (Business Suite)' }, { pt: 'Criar o portfólio, convidar pessoas, Páginas, contas de anúncios e Central de Segurança.', es: 'Crear el portfolio, invitar personas, Páginas, cuentas publicitarias y Centro de seguridad.' }, 'pronta'],
        ['meta-catalogo.html', '🗂️', { pt: 'Gerenciador de Comércio (Catálogo)', es: 'Administrador de ventas (Catálogo)' }, { pt: 'Criar o catálogo, carregar produtos por arquivo, conferir IDs e achar produtos que não aparecem, com as telas reais.', es: 'Crear el catálogo, subir productos por archivo, revisar IDs y encontrar productos que no aparecen, con las pantallas reales.' }, 'pronta'],
        ['meta-feed.html', '📰', { pt: 'Gerenciador de Anúncios (anúncio no Feed)', es: 'Administrador de anuncios (anuncio en el Feed)' }, { pt: 'O criativo, o texto, o destino, os posicionamentos e a prévia do anúncio, com as telas reais.', es: 'El contenido, el texto, el destino, las ubicaciones y la vista previa del anuncio, con las pantallas reales.' }, 'pronta'],
        ['meta-suite.html', '💬', { pt: 'Meta Business Suite (posts, Caixa de Entrada e Insights)', es: 'Meta Business Suite (publicaciones, Mensajes y Estadísticas)' }, { pt: 'Criar post no Facebook e no Instagram, responder mensagens e comentários e ler os Insights, com as telas reais.', es: 'Crear publicaciones en Facebook y en Instagram, responder mensajes y comentarios y leer las Estadísticas, con las pantallas reales.' }, 'pronta'],
        ['meta-regras.html', '⚙️', { pt: 'Regras automatizadas (Gerenciador de Anúncios)', es: 'Reglas automáticas (Administrador de anuncios)' }, { pt: 'Criar, acompanhar, editar e corrigir regras automatizadas, com as telas reais.', es: 'Crear, seguir, editar y corregir reglas automáticas, con las pantallas reales.' }, 'pronta'],
        ['meta-relatorios.html', '📊', { pt: 'Relatórios de Anúncios', es: 'Informes de anuncios' }, { pt: 'Ler a tabela dinâmica, montar o seu relatório, entender a atribuição e destravar relatórios vazios, com as telas reais.', es: 'Leer la tabla dinámica, armar tu informe, entender la atribución y destrabar informes vacíos, con las pantallas reales.' }, 'pronta'],
        ['meta-publicos.html', '👥', { pt: 'Públicos (Gerenciador de Anúncios)', es: 'Públicos (Administrador de anuncios)' }, { pt: 'Criar público do site, semelhante e salvo, e entender públicos pequenos, com as telas reais.', es: 'Crear público del sitio, similar y guardado, y entender públicos pequeños, con las pantallas reales.' }, 'pronta'],
        ['meta-microdados.html', '🔎', { pt: 'Microdata Debugger (depuração de microdados)', es: 'Microdata Debugger (depuración de microdatos)' }, { pt: 'Verificar uma página de produto, ler os campos e achar erros, com a tela real.', es: 'Verificar una página de producto, leer los campos y encontrar errores, con la pantalla real.' }, 'pronta'],
        ['meta-entrega.html', '🚚', { pt: 'Entrega (Conjuntos de anúncios)', es: 'Entrega (Conjuntos de anuncios)' }, { pt: 'Fase de aprendizado, edições significativas e anúncios que não veiculam, com as telas reais.', es: 'Fase de aprendizaje, ediciones significativas y anuncios que no entregan, con las pantallas reales.' }],
        ['meta-limites.html', '🧮', { pt: 'Limites de anúncios por Página', es: 'Límites de anuncios por página' }, { pt: 'Ver quem está usando o limite de anúncios da Página e dividir o limite entre parceiros, com a tela real.', es: 'Ver quién usa el límite de anuncios de la página y repartir el límite entre socios, con la pantalla real.' }],
        ['meta-verified.html', '✅', { pt: 'Meta Verified para empresas', es: 'Meta Verified para empresas' }, { pt: 'Planos, cadastro, requisitos, nome do perfil e cancelamento, com a página pública real e telas do fluxo (a conferir).', es: 'Planes, registro, requisitos, nombre del perfil y cancelación, con la página pública real y pantallas del flujo (por confirmar).' }],
        ['meta-commerce.html', '🛍️', { pt: 'Gerenciador de Comércio (loja)', es: 'Administrador de ventas (tienda)' }, { pt: 'Criar a loja, perfil de envio, URL de finalização da compra e por que a loja não aparece, com as telas reais da loja criada na conta de aula.', es: 'Crear la tienda, perfil de envío, URL de finalización de compra y por qué la tienda no aparece, con las pantallas reales de la tienda creada en la cuenta de práctica.' }],
        ['meta-shopads.html', '🛒', { pt: 'Anúncios das Lojas (Shop Ads)', es: 'Anuncios de Tiendas (Shop Ads)' }, { pt: 'Criar o anúncio das Lojas (local da conversão Site e o botão Loja), achar por que só chega ao site e ler os resultados (partes a conferir).', es: 'Crear el anuncio de Tiendas (lugar de conversión Sitio y el botón Tienda), encontrar por qué solo llega al sitio y leer los resultados (partes por confirmar).' }],
        ['meta-mbe.html', '🔌', { pt: 'Integrações de parceiros (MBE)', es: 'Integraciones de socios (MBE)' }, { pt: 'A página Integrações do Gerenciador de Eventos, igual à real: recomendações de parceiros e a Galeria de parceiros.', es: 'La página Integraciones del Administrador de eventos, igual a la real: recomendaciones de socios y la Galería de socios.' }],
        ['meta-turbinar.html', '🚀', { pt: 'Turbinar post (Business Suite)', es: 'Promocionar publicación (Business Suite)' }, { pt: 'Turbinar um post existente: meta, botão, duração, orçamento e pagamento, com as telas reais.', es: 'Promocionar un post existente: meta, botón, duración, presupuesto y pago, con las pantallas reales.' }, 'pronta'],
        ['meta-anuncios.html', '📣', { pt: 'Gerenciador de Anúncios', es: 'Administrador de anuncios' }, { pt: 'Criar a primeira campanha (Vendas) em rascunho: campanha, conjunto de anúncios e anúncio. Relatórios virão depois.', es: 'Crear la primera campaña (Ventas) en borrador: campaña, conjunto de anuncios y anuncio. Los informes vendrán después.' }, 'pronta']];
      return '<h1 class="pl-h1">🕹️ ' + T(U.simuladores) + '</h1><p class="pl-lead">' + T({ pt: 'Cópias de treino das ferramentas da Meta: o mesmo layout e os mesmos nomes, com o visual da Lojinha. Cada tela mostra a data em que foi conferida com a ferramenta real.', es: 'Copias de práctica de las herramientas de Meta: el mismo diseño y los mismos nombres, con el estilo de la Lojinha. Cada pantalla muestra la fecha en que se revisó con la herramienta real.' }) + '</p>' +
        '<div class="grade">' + sims.map(function (s) { return (s[0] ? '<a class="item" href="' + s[0] + '">' : '<div class="item off">') + '<span class="ic">' + s[1] + '</span><b>' + T(s[2]) + '</b><p>' + T(s[3]) + '</p>' + selo(s[4]) + (s[0] ? '</a>' : '</div>') }).join('') + '</div>' + recomecarHTML();
    },
    laboratorio: function () {
      var F = window.FERRAMENTAS;
      setTimeout(ligaComo); setTimeout(ligaRecomecar);
      return '<h1 class="pl-h1">🧪 ' + T(U.laboratorio) + '</h1><p class="pl-lead">' + T({ pt: 'Tudo das aulas, solto: os tutoriais guiados (“como fazer…”), as ferramentas e a loja por dentro. Use para tirar uma dúvida ou mostrar um passo a passo sem seguir a aula inteira.', es: 'Todo lo de las clases, suelto: los tutoriales guiados (“cómo hacer…”), las herramientas y la tienda por dentro. Úsalo para resolver una duda o mostrar un paso a paso sin seguir la clase completa.' }) + '</p>' +
        comoFazer() +
        '<h2 class="pl-h2">🧰 ' + T({ pt: 'Ferramentas das aulas', es: 'Herramientas de las clases' }) + '</h2>' +
        '<div class="grade">' + Object.keys(F).map(function (id) {
          var f = F[id], ok = f.status === 'pronta', href = f.link || 'ferramenta.html?f=' + id;
          return (ok ? '<a class="item" href="' + href + '">' : '<div class="item off">') + '<b>' + T(f.titulo) + '</b><p>' + T(f.resumo) + '</p>' + selo(f.status) + (ok ? '</a>' : '</div>')
        }).join('') + '</div>' + recomecarHTML();
    },
    ferramenta: function () {
      var id = Q.get('f'), f = window.FERRAMENTAS[id]; if (!f || !f.montar) return '<p>' + T({ pt: 'Ferramenta não encontrada.', es: 'Herramienta no encontrada.' }) + '</p>';
      setTimeout(function () { f.montar($('#ferr'), T, LANG) });
      return '<p class="pl-trilha">' + (window.PUB_ESCONDIDA && window.PUB_ESCONDIDA('laboratorio.html') ? '<a href="modulos.html">' + T(U.modulos) + '</a>' : '<a href="laboratorio.html">' + T(U.laboratorio) + '</a>') + ' ›</p><h1 class="pl-h1">' + T(f.titulo) + '</h1><p class="pl-lead">' + T(f.resumo) + '</p><div class="palco"><div id="ferr"></div></div>';
    }
  };

  /* ---------- 🧹 Recomeçar do zero: apaga o que a pessoa fez nos simuladores e na loja (só neste navegador) ---------- */
  function recomecarHTML() {
    return '<div class="recomecar" id="recomecar"><h2 class="pl-h2">🧹 ' + T({ pt: 'Recomeçar do zero', es: 'Empezar de cero' }) + '</h2>' +
      '<p>' + T({ pt: 'Apaga o que você fez nos simuladores (Pixels criados, eventos, portfólios, convites, contas de anúncios, perfil do Instagram) e na loja (carrinho, pedidos, dados do checkout, cookies, falhas do Laboratório). Só neste navegador: não mexe no de mais ninguém.', es: 'Borra lo que hiciste en los simuladores (Pixels creados, eventos, portfolios, invitaciones, cuentas publicitarias, perfil de Instagram) y en la tienda (carrito, pedidos, datos del checkout, cookies, fallas del Laboratorio). Solo en este navegador: no toca el de nadie más.' }) + '</p>' +
      '<label class="rc-ck"><input type="checkbox" id="rcProg"/> ' + T({ pt: 'Apagar também meu progresso nas aulas (os ✓)', es: 'Borrar también mi progreso en las clases (los ✓)' }) + '</label>' +
      '<div class="rc-bts" id="rcBts"><button class="btn sec" id="rcIr">🧹 ' + T({ pt: 'Recomeçar do zero', es: 'Empezar de cero' }) + '</button></div></div>';
  }
  function recomecarMini() {   // versão curta, no topo da página Módulos: já vem marcado apagar também os ✓ das aulas
    return '<div class="recomecar rc-mini" id="recomecar"><span class="rc-tx">🧹 <b>' + T({ pt: 'Recomeçar as aulas do zero', es: 'Empezar las clases de cero' }) + '</b> <small>' + T({ pt: 'apaga o que você fez nos simuladores e na loja, só neste navegador', es: 'borra lo que hiciste en los simuladores y en la tienda, solo en este navegador' }) + '</small></span>' +
      '<label class="rc-ck"><input type="checkbox" id="rcProg" checked/> ' + T({ pt: 'também os ✓ das aulas', es: 'también los ✓ de las clases' }) + '</label><span class="rc-bts" id="rcBts"></span></div>';
  }
  function ligaRecomecar() {
    var box = document.getElementById('rcBts'); if (!box) return;
    function inicial() {
      box.innerHTML = '<button class="btn sec" id="rcIr">🧹 ' + T({ pt: 'Recomeçar do zero', es: 'Empezar de cero' }) + '</button>';
      document.getElementById('rcIr').onclick = function () {
        box.innerHTML = '<b>' + T({ pt: 'Tem certeza? Não dá para desfazer.', es: '¿Seguro? No se puede deshacer.' }) + '</b> <button class="btn" id="rcSim">' + T({ pt: 'Sim, apagar', es: 'Sí, borrar' }) + '</button> <button class="btn sec" id="rcNao">' + T({ pt: 'Cancelar', es: 'Cancelar' }) + '</button>';
        document.getElementById('rcNao').onclick = inicial;
        document.getElementById('rcSim').onclick = function () {
          var prog = document.getElementById('rcProg').checked;
          try {
            Object.keys(localStorage).forEach(function (k) {
              if (/^(sim\.|loja\.|aulaoPixel\.)/.test(k) || (prog && /^plat\.(feitas|praticas|ultima)$/.test(k))) localStorage.removeItem(k);   // fica: senha da porta (plat.ok) e idioma
            });
            Object.keys(sessionStorage).forEach(function (k) { if (/^(loja\.|tour\.)/.test(k)) sessionStorage.removeItem(k) });
          } catch (e) { }
          box.innerHTML = '✅ ' + T({ pt: 'Pronto! Tudo zerado' + (prog ? ', inclusive o progresso nas aulas.' : '. Seu progresso nas aulas foi mantido.'), es: '¡Listo! Todo en cero' + (prog ? ', incluido el progreso en las clases.' : '. Tu progreso en las clases se mantuvo.') });
          setTimeout(inicial, 4000);
        };
      };
    }
    inicial();
  }

  /* ---------- Laboratório › Como fazer…: todos os tutoriais guiados, na ordem da história da Marina ---------- */
  var COMO = [
    { m: 'portfolio', itens: [
      ['conhecer-portfolio', 'meta-portfolio.html?exemplo=1', 'portfolio', '01', { pt: 'Como conhecer as Configurações do portfólio', es: 'Cómo conocer la Configuración del portfolio' }],
      ['criar-portfolio', 'meta-portfolio.html?zerar=1', 'portfolio', '02', { pt: 'Como criar um portfólio empresarial', es: 'Cómo crear un portfolio comercial' }],
      ['convidar-pessoa', 'meta-portfolio.html?exemplo=1', 'portfolio', '03', { pt: 'Como convidar uma pessoa (com o acesso certo)', es: 'Cómo invitar a una persona (con el acceso correcto)' }],
      ['ativos-portfolio', 'meta-portfolio.html?exemplo=1', 'portfolio', '04', { pt: 'Como trazer a Página da loja e criar a conta de anúncios', es: 'Cómo traer la Página de la tienda y crear la cuenta publicitaria' }] ] },
    { m: 'instagram', itens: [
      ['virar-profissional', 'meta-instagram.html?zerar=1', 'instagram', '01', { pt: 'Como virar conta profissional no Instagram', es: 'Cómo volverse cuenta profesional en Instagram' }],
      ['editar-perfil', 'meta-instagram.html', 'instagram', '02', { pt: 'Como deixar o perfil com cara de loja', es: 'Cómo darle al perfil cara de tienda' }],
      ['adicionar-instagram', 'meta-portfolio.html?exemplo=1', 'instagram', '03', { pt: 'Como adicionar o Instagram ao portfólio', es: 'Cómo agregar el Instagram al portfolio' }],
      ['conectar-instagram', 'meta-portfolio.html?exemplo=1&aula=ig4', 'instagram', '04', { pt: 'Como ligar o Instagram à Página', es: 'Cómo vincular el Instagram a la Página' }],
      ['identidade-instagram', 'meta-feed.html?exemplo=1', 'instagram', '05', { pt: 'Como escolher o perfil do Instagram no anúncio', es: 'Cómo elegir el perfil de Instagram en el anuncio' }],
      ['perfil-nao-aparece', 'meta-feed.html?igsem=1', 'instagram', '06', { pt: 'Como achar por que o Instagram não aparece no anúncio', es: 'Cómo encontrar por qué el Instagram no aparece en el anuncio' }],
      ['publicar-dois', 'meta-suite.html?zerar=1', 'instagram', '07', { pt: 'Como postar no Facebook e no Instagram ao mesmo tempo', es: 'Cómo publicar en Facebook y en Instagram al mismo tiempo' }],
      ['responder-mensagens', 'meta-suite.html?zerar=1', 'instagram', '08', { pt: 'Como responder mensagens e comentários na Caixa de Entrada', es: 'Cómo responder mensajes y comentarios en Mensajes' }],
      ['ler-insights', 'meta-suite.html?zerar=1', 'instagram', '09', { pt: 'Como ler os Insights do Instagram', es: 'Cómo leer las Estadísticas de Instagram' }] ] },
    { m: 'pixel', itens: [
      ['pixel-em-acao', 'loja.html', 'pixel', '01', { pt: 'Como ver o Pixel trabalhando na loja', es: 'Cómo ver el Pixel trabajando en la tienda' }],
      ['criar-pixel', 'meta-eventos.html', 'pixel', '02', { pt: 'Como criar um Pixel no Gerenciador de Eventos', es: 'Cómo crear un Pixel en el Administrador de eventos' }],
      ['gerenciador-pixel', 'meta-eventos.html', 'pixel', '03', { pt: 'Como conferir o Pixel no Gerenciador de Eventos', es: 'Cómo revisar el Pixel en el Administrador de eventos' }],
      ['print-pixel', 'pratica.html?p=print-pixel', 'pixel', '03', { pt: 'Como pedir e ler o print do cliente', es: 'Cómo pedir y leer la captura del cliente' }],
      ['extensao-pixel', 'loja.html', 'pixel', '03', { pt: 'Como ver o Pixel com a extensão (Consultor de Dados)', es: 'Cómo ver el Pixel con la extensión (Asesor de datos)' }],
      ['achar-codigo', 'loja.html', 'pixel', '03', { pt: 'Como achar o código do Pixel no site (técnico)', es: 'Cómo encontrar el código del Pixel en el sitio (técnico)' }],
      ['testar-eventos', 'meta-eventos.html', 'pixel', '03', { pt: 'Como usar os Eventos de teste', es: 'Cómo usar Probar eventos' }],
      ['compra-completa', 'loja.html', 'pixel', '04', { pt: 'Como conferir se a compra chega (Purchase)', es: 'Cómo revisar si la compra llega (Purchase)' }] ] },
    { m: 'pixel-avancado', itens: [
      ['correspondencia-avancada', 'loja.html', 'pixel-avancado', '01', { pt: 'Como ativar a correspondência avançada (automática e manual)', es: 'Cómo activar la coincidencia avanzada (automática y manual)' }],
      ['qualidade-sinal', 'loja.html', 'pixel-avancado', '02', { pt: 'Como subir a pontuação de qualidade da correspondência de eventos', es: 'Cómo subir la puntuación de calidad de la coincidencia de eventos' }],
      ['desduplicar-eventos', 'loja.html', 'pixel-avancado', '03', { pt: 'Como desduplicar eventos do navegador e do servidor', es: 'Cómo deduplicar eventos del navegador y del servidor' }],
      ['info-proibida', 'loja.html', 'pixel-avancado', '04', { pt: 'Como achar e remover informação sensível dos eventos', es: 'Cómo encontrar y quitar información sensible de los eventos' }],
      ['consentimento-pixel', 'loja.html', 'pixel-avancado', '04', { pt: 'Como fazer o Pixel esperar o aceite de cookies', es: 'Cómo hacer que el píxel espere la aceptación de cookies' }],
      ['conversao-personalizada', 'meta-eventos.html', 'pixel-avancado', '07', { pt: 'Como criar uma conversão personalizada com regra de URL', es: 'Cómo crear una conversión personalizada con regla de URL' }],
      ['permissoes-trafego', 'meta-eventos.html', 'pixel-avancado', '05', { pt: 'Como ver quem usa o seu Pixel e abrir a lista de permissão de tráfego', es: 'Cómo ver quién usa tu píxel y abrir la lista de permitidos de tráfico' }],
      ['categoria-pixel', 'meta-eventos.html', 'pixel-avancado', '06', { pt: 'Como ver a categoria da fonte de dados e a configuração básica', es: 'Cómo ver la categoría de la fuente de datos y la configuración básica' }]
      ] },
    { m: 'whatsapp', itens: [
      ['perfil-whatsapp', 'meta-whatsapp.html?zerar=1', 'whatsapp', '01', { pt: 'Como preencher categoria e horário do perfil comercial e conferir na Prévia', es: 'Cómo completar categoría y horario del perfil comercial y revisar en la Vista previa' }],
      ['catalogo-whatsapp', 'meta-whatsapp.html?zerar=1', 'whatsapp', '02', { pt: 'Como criar uma coleção e ocultar um item do catálogo', es: 'Cómo crear una colección y ocultar un artículo del catálogo' }],
      ['pedido-whatsapp', 'meta-whatsapp.html?zerar=1', 'whatsapp', '03', { pt: 'Como aceitar um pedido do carrinho e atualizar o status', es: 'Cómo aceptar un pedido del carrito y actualizar el estado' }],
      ['pix-whatsapp', 'meta-whatsapp.html?zerar=1', 'whatsapp', '04', { pt: 'Como pedir um pagamento Pix na conversa', es: 'Cómo pedir un pago Pix en el chat' }],
      ['saudacao-whatsapp', 'meta-whatsapp.html?zerar=1', 'whatsapp', '05', { pt: 'Como ligar a saudação e criar uma resposta rápida', es: 'Cómo activar la bienvenida y crear una respuesta rápida' }],
      ['listas-whatsapp', 'meta-whatsapp.html?zerar=1', 'whatsapp', '06', { pt: 'Como criar uma lista (antiga etiqueta) e onde fica a transmissão comercial', es: 'Cómo crear una lista (antigua etiqueta) y dónde está la difusión comercial' }],
      ['anuncio-whatsapp', 'meta-whatsapp.html?zerar=1', 'whatsapp', '07', { pt: 'Como criar um anúncio pelo app do WhatsApp Business', es: 'Cómo crear un anuncio desde la app de WhatsApp Business' }],
      ['ia-whatsapp', 'meta-whatsapp.html?zerar=1', 'whatsapp', '08', { pt: 'Como achar o assistente da Meta AI e os planos com agente de IA', es: 'Cómo encontrar el asistente de Meta AI y los planes con agente de IA' }],
      ['conectar-whatsapp', 'meta-whatsapp.html?zerar=1', 'whatsapp', '09', { pt: 'Como chegar à conexão com Instagram e Facebook', es: 'Cómo llegar a la conexión con Instagram y Facebook' }] ] },
    { m: 'portfolio-avancado', itens: [
      ['verificar-empresa', 'meta-portfolio.html', 'portfolio-avancado', '01', { pt: 'Como verificar a empresa na Central de Segurança', es: 'Cómo verificar la empresa en el Centro de seguridad' }],
      ['corrigir-documento', 'meta-portfolio.html', 'portfolio-avancado', '02', { pt: 'Como corrigir documentos recusados da verificação', es: 'Cómo corregir documentos rechazados de la verificación' }],
      ['corrigir-permissao', 'meta-portfolio.html', 'portfolio-avancado', '03', { pt: 'Como alterar o acesso de uma pessoa ao portfólio', es: 'Cómo cambiar el acceso de una persona al portafolio' }],
      ['excluir-portfolio', 'meta-portfolio.html', 'portfolio-avancado', '04', { pt: 'Como entender e resolver o que impede excluir o portfólio', es: 'Cómo entender y resolver lo que impide eliminar el portafolio' }],
      ['dominio-portfolio', 'meta-portfolio.html?exemplo=1', 'portfolio-avancado', '05', { pt: 'Como achar a verificação de domínio e escrever o domínio raiz', es: 'Cómo encontrar la verificación de dominio y escribir el dominio raíz' }],
      ['central-seguranca', 'meta-portfolio.html', 'portfolio-avancado', '06', { pt: 'Como exigir os dois fatores e conferir o administrador de reserva na Central de Segurança', es: 'Cómo exigir los dos factores y revisar el administrador de reserva en el Centro de seguridad' }] ] },
    { m: 'dg-pixel', itens: [
      ['investigar-purchase', 'loja.html', 'dg-pixel', '01', { pt: 'Como investigar um Purchase que não chega (compra de teste, Eventos de teste, código-fonte)', es: 'Cómo investigar un Purchase que no llega (compra de prueba, Probar eventos, código fuente)' }],
      ['colar-codigo-base', 'meta-eventos.html', 'dg-pixel', '02', { pt: 'Como colar o código base do Pixel (copiar, colar no head, salvar, testar)', es: 'Cómo pegar el código base del píxel (copiar, pegar en el head, guardar, probar)' }],
      ['colar-codigo-compra', 'meta-eventos.html', 'dg-pixel', '02', { pt: 'Como colar o código do Purchase com valor e moeda', es: 'Cómo pegar el código del Purchase con valor y moneda' }],
      ['corrigir-duplicado', 'loja.html', 'dg-pixel', '03', { pt: 'Como achar e corrigir compras em dobro (Shopify: app + código manual)', es: 'Cómo hallar y corregir compras dobles (Shopify: app + código manual)' }],
      ['corrigir-valor', 'loja.html', 'dg-pixel', '03', { pt: 'Como corrigir o valor e a moeda do Purchase', es: 'Cómo corregir el valor y la moneda del Purchase' }],
      ['caso-queda', 'loja.html', 'dg-pixel', '04', { pt: 'Como investigar uma queda de eventos depois da troca de tema', es: 'Cómo investigar una caída de eventos después del cambio de tema' }],
      ['desduplicar-eventos', 'loja.html', 'dg-pixel', '05', { pt: 'Como resolver compras em dobro com Pixel + API de Conversões (event_id)', es: 'Cómo resolver compras dobles con píxel + API de Conversiones (event_id)' }],
      ['purchase-cabecalho', 'loja.html', 'dg-pixel', '06', { pt: 'Como resolver o Purchase que dispara em todas as páginas', es: 'Cómo resolver el Purchase que se dispara en todas las páginas' }] ] },
    { m: 'dg-integracoes', itens: [
      ['plataforma-conectada', 'loja.html', 'dg-integracoes', '01', { pt: 'Como investigar uma plataforma conectada em que a compra some (níveis de dados)', es: 'Cómo investigar una plataforma conectada en la que la compra desaparece (niveles de datos)' }],
      ['shopify-sem-pixel', 'loja.html', 'dg-integracoes', '02', { pt: 'Como resolver Shopify conectada sem compras chegando (canal sem Pixel)', es: 'Cómo resolver Shopify conectada sin compras llegando (canal sin píxel)' }],
      ['sincronizar-produtos', 'admin-shopify.html', 'dg-integracoes', '03', { pt: 'Como resolver produto que não sincroniza e produto com problema', es: 'Cómo resolver producto que no se sincroniza y producto con problema' }],
      ['pixel-personalizado-dobro', 'loja.html', 'dg-integracoes', '04', { pt: 'Como achar um pixel personalizado da Shopify que duplica as compras', es: 'Cómo hallar un píxel personalizado de Shopify que duplica las compras' }],
      ['pixel-personalizado-html', 'admin-shopify.html', 'dg-integracoes', '05', { pt: 'Como resolver o pixel personalizado da Shopify que não salva (código com HTML)', es: 'Cómo resolver el píxel personalizado de Shopify que no se guarda (código con HTML)' }] ] },
    { m: 'dg-anuncios', itens: [
      ['nao-veicula', 'meta-entrega.html?problema=1', 'dg-anuncios', '01', { pt: 'Como investigar anúncios que não rodam (Veiculação nos três níveis)', es: 'Cómo investigar anuncios que no corren (Entrega en los tres niveles)' }],
      ['resolver-publicacao', 'meta-turbinar.html?zerar=1&problemas=1', 'dg-anuncios', '02', { pt: 'Como resolver o botão Publicar apagado (telefone, limite, saldo)', es: 'Cómo resolver el botón Publicar apagado (teléfono, límite, saldo)' }],
      ['detalhar-regiao', 'meta-relatorios.html?zerar=1', 'dg-anuncios', '05', { pt: 'Como ver de onde vem o público (detalhamento Região) e achar a causa da cidade vizinha', es: 'Cómo ver de dónde viene el público (desglose Región) y encontrar la causa de la ciudad vecina' }],
      ['excluir-posicionamento', 'meta-feed.html?exemplo=1', 'dg-anuncios', '09', { pt: 'Como mexer nos posicionamentos sem a escolha manual (controles da conta e regras de valor)', es: 'Cómo cambiar las ubicaciones sin la elección manual (controles de la cuenta y reglas de valor)' }],
      ['limite-pagina', 'meta-limites.html?problema=1', 'dg-anuncios', '10', { pt: 'Como resolver o limite de anúncios da Página atingido', es: 'Cómo resolver el límite de anuncios de la página alcanzado' }] ] },
    { m: 'dg-catalogo', itens: [
      ['produtos-sumidos', 'admin-shopify.html', 'dg-catalogo', '01', { pt: 'Como resolver produtos da Shopify que não aparecem na Meta', es: 'Cómo resolver productos de Shopify que no aparecen en Meta' }],
      ['catalogo-problemas', 'meta-catalogo.html?exemplo=1', 'dg-catalogo', '02', { pt: 'Como resolver itens com erro ou rejeitados no catálogo', es: 'Cómo resolver artículos con error o rechazados en el catálogo' }] ] },
    { m: 'dg-instagram', itens: [
      ['perfil-nao-aparece', 'meta-feed.html?igsem=1', 'dg-instagram', '01', { pt: 'Como investigar o Instagram que não aparece no anúncio', es: 'Cómo investigar el Instagram que no aparece en el anuncio' }],
      ['conectar-instagram', 'meta-portfolio.html?exemplo=1&aula=ig4', 'dg-instagram', '01', { pt: 'Como ligar o Instagram no portfólio', es: 'Cómo vincular el Instagram en el portafolio' }] ] },
    { m: 'dg-contas', itens: [
      ['conectar-extensao', 'admin-shopify.html', 'dg-contas', '01', { pt: 'Como resolver a Página que não aparece ao conectar a loja', es: 'Cómo resolver la Página que no aparece al conectar la tienda' }],
      ['pagina-outro-portfolio', 'meta-portfolio.html', 'dg-contas', '02', { pt: 'Como tirar a Página de outro portfólio e colocar no novo', es: 'Cómo sacar la Página de otro portafolio y ponerla en el nuevo' }] ] },
    { m: 'segmentacao', itens: [
      ['criar-publico-site', 'meta-publicos.html?zerar=1', 'segmentacao', '02', { pt: 'Como criar um público de quem visitou o site', es: 'Cómo crear un público de quien visitó el sitio' }],
      ['criar-semelhante', 'meta-publicos.html?exemplo=1', 'segmentacao', '03', { pt: 'Como criar um público semelhante', es: 'Cómo crear un público similar' }],
      ['criar-salvo', 'meta-publicos.html?zerar=1', 'segmentacao', '04', { pt: 'Como criar um público salvo', es: 'Cómo crear un público guardado' }],
      ['publico-pequeno', 'meta-publicos.html?pequeno=1', 'segmentacao', '05', { pt: 'Como entender um público pequeno ou recusado', es: 'Cómo entender un público pequeño o rechazado' }] ] },
    { m: 'relatorios', itens: [
      ['ler-relatorio', 'meta-relatorios.html?zerar=1', 'relatorios', '02', { pt: 'Como ler a tabela do relatório (alcance, impressões, gasto)', es: 'Cómo leer la tabla del informe (alcance, impresiones, gasto)' }],
      ['montar-relatorio', 'meta-relatorios.html?zerar=1', 'relatorios', '03', { pt: 'Como montar o seu relatório (detalhamentos e métricas)', es: 'Cómo armar tu informe (desgloses y métricas)' }],
      ['comparar-atribuicao', 'meta-relatorios.html?exemplo=1', 'relatorios', '04', { pt: 'Como entender a janela de atribuição', es: 'Cómo entender la ventana de atribución' }],
      ['relatorio-vazio', 'meta-relatorios.html?vazio=1', 'relatorios', '05', { pt: 'Como destravar um relatório vazio', es: 'Cómo destrabar un informe vacío' }],
      ['calcular-roas', 'meta-relatorios.html?roas=1', 'relatorios', '06', { pt: 'Como calcular o custo por compra e o ROAS', es: 'Cómo calcular el costo por compra y el ROAS' }] ] },
    { m: 'regras', itens: [
      ['criar-regra', 'meta-regras.html?zerar=1', 'regras', '02', { pt: 'Como criar uma regra automatizada', es: 'Cómo crear una regla automática' }],
      ['evitar-falso-positivo', 'meta-regras.html?zerar=1', 'regras', '03', { pt: 'Como montar uma regra segura (intervalo e condições)', es: 'Cómo armar una regla segura (intervalo y condiciones)' }],
      ['acompanhar-editar', 'meta-regras.html?exemplo=1', 'regras', '04', { pt: 'Como acompanhar, editar e excluir uma regra', es: 'Cómo seguir, editar y eliminar una regla' }],
      ['regra-desativou-tudo', 'meta-regras.html?problema=1', 'regras', '05', { pt: 'Como achar a regra que desativou meus anúncios', es: 'Cómo encontrar la regla que desactivó mis anuncios' }] ] },
    { m: 'feed', itens: [
      ['montar-criativo', 'meta-feed.html?zerar=1', 'feed', '02', { pt: 'Como montar o criativo do anúncio (mídia, texto e aprimoramentos)', es: 'Cómo armar el contenido del anuncio (multimedia, texto y mejoras)' }],
      ['ver-previa', 'meta-feed.html?exemplo=1', 'feed', '03', { pt: 'Como ver a prévia por grupo e ajustar o corte', es: 'Cómo ver la vista previa por grupo y ajustar el recorte' }],
      ['destino-botao', 'meta-feed.html?exemplo=1', 'feed', '04', { pt: 'Como preencher o destino e escolher o botão', es: 'Cómo completar el destino y elegir el botón' }],
      ['resolver-criativo', 'meta-feed.html?problemas=1', 'feed', '05', { pt: 'Como destravar um anúncio que não publica e ajustar o que ficou estranho', es: 'Cómo destrabar un anuncio que no se publica y ajustar lo que quedó raro' }] ] },
    { m: 'shopify', itens: [
      ['conectar-shopify', 'admin-shopify.html', 'shopify', '02', { pt: 'Como conectar a Shopify à Meta', es: 'Cómo conectar Shopify a Meta' }],
      ['onde-gerenciar', 'admin-shopify.html', 'shopify', '03', { pt: 'Como saber onde cada recurso é gerenciado (Shopify, app ou Gerenciador de Comércio)', es: 'Cómo saber dónde se gestiona cada función (Shopify, app o Administrador de ventas)' }],
      ['sincronizar-produtos', 'admin-shopify.html', 'shopify', '04', { pt: 'Como sincronizar produtos e entender o redirecionamento para a Shopify', es: 'Cómo sincronizar productos y entender la redirección a Shopify' }],
      ['produtos-sumidos', 'admin-shopify.html', 'shopify', '05', { pt: 'Como achar produtos que não chegam à Meta e torná-los disponíveis', es: 'Cómo encontrar productos que no llegan a Meta y hacerlos disponibles' }] ] },
    { m: 'integracoes', itens: [
      ['conectar-woocommerce', 'admin-woo.html', 'integracoes', '02', { pt: 'Como conectar o WooCommerce à Meta', es: 'Cómo conectar WooCommerce a Meta' }],
      ['pixel-fonte-catalogo', 'meta-catalogo.html', 'integracoes', '04', { pt: 'Como usar o Pixel como fonte de dados do catálogo', es: 'Cómo usar el píxel como fuente de datos del catálogo' }],
      ['manter-desconectar', 'admin-woo.html', 'integracoes', '05', { pt: 'Como manter e desconectar uma integração', es: 'Cómo mantener y desconectar una integración' }] ] },
    { m: 'mbe', itens: [
      ['galeria-parceiros', 'meta-mbe.html?zerar=1', 'mbe', '02', { pt: 'Como achar um parceiro na Galeria de parceiros', es: 'Cómo encontrar un socio en la Galería de socios' }],
      ['conectar-extensao', 'admin-shopify.html', 'mbe', '03', { pt: 'Como é a janela do MBE ao conectar pela plataforma', es: 'Cómo es la ventana del MBE al conectar desde la plataforma' }],
      ['escolher-capi', 'meta-eventos.html', 'mbe', '04', { pt: 'Como escolher a configuração da API de Conversões', es: 'Cómo elegir la configuración de la API de Conversiones' }],
      ['dar-acesso-parceiro', 'meta-portfolio.html?exemplo=1', 'mbe', '06', { pt: 'Como dar acesso a um parceiro (agência)', es: 'Cómo dar acceso a un socio (agencia)' }] ] },
    { m: 'shop-ads-offsite', itens: [
      ['jornada-compra-site', 'loja.html', 'shop-ads-offsite', '01', { pt: 'Como é a jornada do anúncio das Lojas até a compra no site', es: 'Cómo es el recorrido del anuncio de Tiendas hasta la compra en el sitio' }],
      ['comparar-terceiros', 'meta-shopads.html?zerar=1', 'shop-ads-offsite', '04', { pt: 'Como explicar a diferença entre a Meta e o Google Analytics', es: 'Cómo explicar la diferencia entre Meta y Google Analytics' }],
      ['atualizar-loja-antiga', 'meta-commerce.html?loja=1', 'shop-ads-offsite', '05', { pt: 'Como atualizar uma loja que usava a finalização da compra na Meta', es: 'Cómo actualizar una tienda que usaba la finalización de compra en Meta' }] ] },
    { m: 'shop-ads', itens: [
      ['antes-de-criar', 'meta-commerce.html?loja=1', 'shop-ads', '02', { pt: 'Como conferir os ativos da loja antes de criar o anúncio das Lojas', es: 'Cómo revisar los activos de la tienda antes de crear el anuncio de Tiendas' }],
      ['criar-anuncio-lojas', 'meta-shopads.html?zerar=1', 'shop-ads', '03', { pt: 'Como criar um anúncio das Lojas (Vendas, Site e botão Loja)', es: 'Cómo crear un anuncio de Tiendas (Ventas, Sitio web y botón Tienda)' }],
      ['so-para-o-site', 'meta-shopads.html?problema=1', 'shop-ads', '04', { pt: 'Como descobrir por que o anúncio só leva ao site', es: 'Cómo descubrir por qué el anuncio solo lleva al sitio' }],
      ['ler-relatorio-lojas', 'meta-shopads.html?relatorio=1', 'shop-ads', '05', { pt: 'Como ler os resultados dos anúncios das Lojas', es: 'Cómo leer los resultados de los anuncios de Tiendas' }] ] },
    { m: 'commerce', itens: [
      ['criar-loja', 'meta-commerce.html?zerar=1', 'commerce', '02', { pt: 'Como criar uma loja no Gerenciador de Comércio', es: 'Cómo crear una tienda en el Administrador de ventas' }],
      ['configurar-loja', 'meta-commerce.html?loja=1', 'commerce', '03', { pt: 'Como configurar o envio e a finalização da compra', es: 'Cómo configurar el envío y la finalización de compra' }],
      ['loja-nao-aparece', 'meta-commerce.html?problema=1', 'commerce', '04', { pt: 'Como descobrir por que a loja não aparece', es: 'Cómo descubrir por qué la tienda no aparece' }],
      ['mudancas-checkout', 'meta-shopads.html?zerar=1', 'commerce', '05', { pt: 'Como explicar o que mudou com a finalização da compra no site', es: 'Cómo explicar qué cambió con la finalización de compra en el sitio' }] ] },
    { m: 'verified', itens: [
      ['escolher-plano', 'meta-verified.html?zerar=1', 'verified', '02', { pt: 'Como comparar os planos do Meta Verified', es: 'Cómo comparar los planes de Meta Verified' }],
      ['cadastrar-meta-verified', 'meta-verified.html?zerar=1', 'verified', '03', { pt: 'Como cadastrar a empresa no Meta Verified', es: 'Cómo registrar la empresa en Meta Verified' }],
      ['nao-consigo-cadastrar', 'meta-verified.html?problema=1', 'verified', '04', { pt: 'Como achar por que a opção de cadastro não aparece', es: 'Cómo encontrar por qué no aparece la opción de registro' }],
      ['nome-perfil', 'meta-verified.html?ativa=1', 'verified', '05', { pt: 'Como mudar o nome do perfil verificado', es: 'Cómo cambiar el nombre del perfil verificado' }],
      ['cancelar-assinatura', 'meta-verified.html?ativa=1', 'verified', '06', { pt: 'Como cancelar a assinatura e o que acontece', es: 'Cómo cancelar la suscripción y qué pasa' }] ] },
    { m: 'entrega', itens: [
      ['ler-aprendizado', 'meta-entrega.html?exemplo=1', 'entrega', '02', { pt: 'Como ler a coluna Veiculação e a fase de aprendizado', es: 'Cómo leer la columna Entrega y la fase de aprendizaje' }],
      ['edicao-significativa', 'meta-entrega.html?exemplo=1', 'entrega', '03', { pt: 'Como saber se uma edição reinicia o aprendizado', es: 'Cómo saber si una edición reinicia el aprendizaje' }],
      ['aprendizado-limitado', 'meta-entrega.html?exemplo=1', 'entrega', '04', { pt: 'Como agir com “Aprendizado limitado”', es: 'Cómo actuar con “Aprendizaje limitado”' }],
      ['nao-veicula', 'meta-entrega.html?problema=1', 'entrega', '05', { pt: 'Como descobrir por que um anúncio não veicula', es: 'Cómo descubrir por qué un anuncio no entrega' }] ] },
    { m: 'microdados', itens: [
      ['verificar-microdados', 'meta-microdados.html?zerar=1', 'microdados', '02', { pt: 'Como verificar uma página de produto no Microdata Debugger', es: 'Cómo verificar una página de producto en el Microdata Debugger' }],
      ['ler-campos', 'meta-microdados.html?zerar=1', 'microdados', '03', { pt: 'Como ler os campos da Prévia (id, preço, estoque)', es: 'Cómo leer los campos de la vista previa (id, precio, stock)' }],
      ['tags-no-codigo', 'produto-caneca_01.html', 'microdados', '03', { pt: 'Como achar as tags de produto no código-fonte (Ctrl+U)', es: 'Cómo encontrar las etiquetas de producto en el código fuente (Ctrl+U)' }],
      ['erro-microdados', 'meta-microdados.html?zerar=1', 'microdados', '04', { pt: 'Como ler Erros e Avisos do Microdata Debugger', es: 'Cómo leer Errores y Advertencias del Microdata Debugger' }],
      ['configurar-microdados', 'arquivos-site.html?arq=ecobag&mdzerar=1', 'microdados', '05', { pt: 'Como configurar as tags de microdados numa página de produto', es: 'Cómo configurar las etiquetas de microdatos en una página de producto' }] ] },
    { m: 'catalogo', itens: [
      ['criar-catalogo', 'meta-catalogo.html?zerar=1', 'catalogo', '02', { pt: 'Como criar um catálogo no Gerenciador de Comércio', es: 'Cómo crear un catálogo en el Administrador de ventas' }],
      ['adicionar-produtos', 'meta-catalogo.html?zerar=1', 'catalogo', '03', { pt: 'Como carregar os produtos por arquivo (feed)', es: 'Cómo subir los productos por archivo (feed)' }],
      ['conferir-ids', 'meta-catalogo.html?exemplo=1', 'catalogo', '04', { pt: 'Como conferir os IDs dos produtos', es: 'Cómo revisar los IDs de los productos' }],
      ['achar-produto', 'meta-catalogo.html?exemplo=1', 'catalogo', '05', { pt: 'Como achar e corrigir um produto que não aparece', es: 'Cómo encontrar y corregir un producto que no aparece' }],
      ['entrada-manual', 'meta-catalogo.html?exemplo=1', 'catalogo', '07', { pt: 'Como cadastrar um produto à mão no catálogo (Entrada manual)', es: 'Cómo cargar un producto a mano en el catálogo (Entrada manual)' }],
      ['catalogo-pais-idioma', 'meta-catalogo.html?exemplo=1', 'catalogo', '08', { pt: 'Como montar o modelo de feed de país (preço em outra moeda)', es: 'Cómo armar la plantilla de lista de países (precio en otra moneda)' }],
      ['conferir-planilha', 'meta-catalogo.html?exemplo=1', 'catalogo', '06', { pt: 'Como conferir a planilha do catálogo (modelo, formatos, Resumo do upload e relatório de problemas)', es: 'Cómo revisar la planilla del catálogo (plantilla, formatos, Resumen de la carga e informe de problemas)' }],
      ['programar-feed', 'meta-catalogo.html?exemplo=1', 'catalogo', '06', { pt: 'Como ver a programação do feed: substituições ou atualizações', es: 'Cómo ver la programación del feed: reemplazo o actualización' }] ] },
    { m: 'anuncios', itens: [
      ['turbinar-post', 'meta-turbinar.html?zerar=1', 'anuncios', '01', { pt: 'Como turbinar um post', es: 'Cómo promocionar un post' }],
      ['conhecer-niveis', 'meta-anuncios.html?zerar=1', 'anuncios', '02', { pt: 'Como achar cada coisa: campanha, conjunto e anúncio', es: 'Cómo encontrar cada cosa: campaña, conjunto y anuncio' }],
      ['primeiro-anuncio', 'meta-anuncios.html?zerar=1', 'anuncios', '03', { pt: 'Como montar o primeiro anúncio (campanha de Vendas em rascunho)', es: 'Cómo armar el primer anuncio (campaña de Ventas en borrador)' }],
      ['editar-publicado', 'meta-anuncios.html?zerar=1', 'anuncios', '04', { pt: 'Como editar uma campanha que já está rodando', es: 'Cómo editar una campaña que ya está corriendo' }],
      ['resolver-publicacao', 'meta-turbinar.html?zerar=1&problemas=1', 'anuncios', '05', { pt: 'Como destravar um anúncio que não publica', es: 'Cómo destrabar un anuncio que no se publica' }] ] }
  ];
  window.COMO = COMO;   // a busca (Pergunte ao Pixel) também lê os tutoriais
  function comoFazer() {
    var volta = encodeURIComponent('laboratorio.html#como');
    return '<h2 class="pl-h2" id="como">🧭 ' + T({ pt: 'Como fazer…', es: 'Cómo hacer…' }) + '</h2>' +
      '<p class="pl-lead">' + T({ pt: 'Os tutoriais guiados das aulas, um por um. O Pixel te leva pela mão; no fim, você volta para cá.', es: 'Los tutoriales guiados de las clases, uno por uno. El Pixel te lleva de la mano; al final, vuelves aquí.' }) + '</p>' +
      '<input class="como-busca" id="comoBusca" type="search" placeholder="' + T({ pt: '🔎 O que você quer fazer? (ex.: convidar, Pixel, Instagram)', es: '🔎 ¿Qué quieres hacer? (ej.: invitar, Pixel, Instagram)' }) + '" aria-label="' + T({ pt: 'Buscar tutorial', es: 'Buscar tutorial' }) + '"/>' +
      '<div class="como-cols">' + COMO.map(function (g) {
        var mod = window.MODULOS.filter(function (x) { return x.id === g.m })[0] || { icone: '', titulo: { pt: g.m, es: g.m } };
        return '<div class="como-grupo"><h3>' + mod.icone + ' ' + (mod.area ? T(U.diagnostico) + ' · ' : '') + T(mod.titulo) + '</h3>' + g.itens.map(function (it) {
          var href = it[1] + (it[1].indexOf('?') < 0 ? '?' : '&') + 'tour=' + it[0] + '&voltar=' + volta;
          var t = T(it[4]).replace(/^C[oó]mo /, ''); t = t.charAt(0).toUpperCase() + t.slice(1);   // o título da seção já diz "Como fazer…"
          return '<div class="como-it"><a class="como-ir" href="' + href + '" title="' + T(it[4]) + '">' + t + '</a>' + (((window.AULAS[it[2]] || []).filter(function (a) { return a.id === it[3] && a.status === 'pronta' }).length) ? '<a class="como-aula" href="aula-plataforma.html?m=' + it[2] + '&a=' + it[3] + '">' + T({ pt: 'aula', es: 'clase' }) + ' ' + it[3] + '</a>' : '') + '</div>';
        }).join('') + '</div>';
      }).join('') + '</div><p class="como-nada" id="comoNada" hidden>' + T({ pt: 'Nada encontrado. Tente outra palavra.', es: 'Nada encontrado. Prueba otra palabra.' }) + '</p>';
  }
  function ligaComo() {
    var b = document.getElementById('comoBusca'); if (!b) return;
    var sem = function (x) { return String(x).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') };
    b.oninput = function () {
      var q = sem(b.value.trim()), algum = false;
      [].forEach.call(document.querySelectorAll('.como-grupo'), function (g) {
        var vis = 0; [].forEach.call(g.querySelectorAll('.como-it'), function (it) { var ok = !q || sem(it.textContent + ' ' + g.querySelector('h3').textContent).indexOf(q) >= 0; it.hidden = !ok; if (ok) vis++ });
        g.hidden = !vis; if (vis) algum = true;
      });
      document.getElementById('comoNada').hidden = algum;
    };
  }

  /* ---------- AULA: uma parte por vez (ver · ferramenta · praticar · caso) ---------- */
  /* conversa no estilo do chat de atendimento: Marina (cliente) à esquerda, Rafa (agente) à direita, Pixel como dica no meio */
  var FOTOS = {
    'gerenciador': '<div class="foto-ger"><div class="fg-topo"><b>Gerenciador de Eventos</b><span>Lojinha da Marina</span></div><div class="fg-corpo"><div class="fg-menu"><i></i><i class="on"></i><i></i><i></i></div><div><b class="fg-nome">Pixel da Lojinha</b><span class="fg-id">Identificação: 1234567890123456</span><div class="fg-abas"><u>Visão geral</u> Eventos de teste · Diagnóstico</div><div class="fg-barras"><i style="height:30%"></i><i style="height:55%"></i><i style="height:20%"></i><i style="height:70%"></i><i style="height:45%"></i></div><span class="fg-ev">PageView · Ativo</span></div></div></div>',
    'codigo-base': '<div class="foto-cod"><span class="c">&lt;!-- Meta Pixel Code --&gt;</span>\n<span class="t">&lt;script&gt;</span>\n!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=…\n…(window, document,\'script\',\n\'https://connect.facebook.net/en_US/fbevents.js\');\n<span class="f">fbq</span>(\'init\', \'<span class="f-init">1234567890123456</span>\');\n<span class="f">fbq</span>(\'track\', \'PageView\');\n<span class="t">&lt;/script&gt;</span>\n<span class="c">&lt;!-- End Meta Pixel Code --&gt;</span></div>'
  };
  function chat(dialogo, antes) {
    var min = 41, h = '<div class="chat"><div class="chat-sis' + (antes ? ' onde' : '') + '">' + (antes ? '<b>' + T({ pt: 'Onde paramos:', es: 'Dónde quedamos:' }) + '</b> ' + T(antes) : T({ pt: 'Rafa entrou na conversa.', es: 'Rafa se unió a la conversación.' })) + '</div>';
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
    // fechada por padrão (dropdown): abre ao clicar no título; o Copiar funciona mesmo fechada
    return '<details class="cola" id="' + id + '"><summary class="cola-cab"><b>🗒️ ' + T({ pt: 'Cola do atendimento', es: 'Guía rápida de atención' }) + '</b><span class="cola-dica">' + T({ pt: 'clique para abrir', es: 'haz clic para abrir' }) + '</span><button class="btn sec" data-copiar="' + id + '">📋 ' + T({ pt: 'Copiar', es: 'Copiar' }) + '</button></summary>' +
      '<div class="cola-grade"><div><h4>❓ ' + T({ pt: 'Pergunte ao cliente', es: 'Pregunta al cliente' }) + '</h4><ul>' + c.perguntas.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ul></div>' +
      '<div><h4>✅ ' + T({ pt: 'Confira', es: 'Revisa' }) + '</h4><ul class="ck">' + c.conferir.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ul></div></div>' +
      '<h4>💬 ' + T({ pt: 'Frase pronta', es: 'Frase lista' }) + '</h4><p class="cola-frase">' + T(c.frase) + '</p>' +
      (c.passos ? '<h4>🧭 ' + T({ pt: 'Passo a passo para o cliente', es: 'Paso a paso para el cliente' }) + '</h4><ol class="cola-passos">' + c.passos.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ol>' : '') +
      '<h4>🧑‍💻 ' + T({ pt: 'Quando encaminhar', es: 'Cuándo derivar' }) + '</h4><p>' + T(c.encaminhar) + '</p></details>';
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-copiar]'); if (!b) return;
    e.preventDefault();   // o botão fica no título da cola: copiar não abre/fecha
    var mid = b.getAttribute('data-copiar').split('__'), a = (window.AULAS[mid[1]] || []).filter(function (x) { return x.id === mid[2] })[0]; if (!a) return;
    var txt = colaTexto(a.cola), orig = b.getAttribute('data-orig') || b.textContent; b.setAttribute('data-orig', orig);
    var volta = function () { clearTimeout(b._t); b._t = setTimeout(function () { b.textContent = orig }, 2500) };
    var ok = function () { b.textContent = '✓ ' + T({ pt: 'Copiado', es: 'Copiado' }); volta() };
    // plano B (navegador de empresa costuma bloquear a cópia moderna): jeito antigo; se nem assim, avisa
    var antigo = function () {
      var t = document.createElement('textarea'); t.value = txt; t.setAttribute('readonly', ''); t.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.appendChild(t); t.select(); var foi = false; try { foi = document.execCommand('copy') } catch (x) { } t.remove();
      if (foi) ok(); else { b.textContent = '⚠ ' + T({ pt: 'Não copiou: abra e selecione o texto', es: 'No se copió: abre y selecciona el texto' }); volta() }
    };
    try { navigator.clipboard.writeText(txt).then(ok, antigo) } catch (x) { antigo() }
  });

  /* a linha das 5 fases: enche conforme as aulas concluídas; a Marina fica onde a pessoa está */
  function trilhaFases() {
    var F = window.FASES || [], fe = feitas(), pos = 0, n = F.length - 1;
    for (var f = 1; f <= n; f++) {
      var tot = 0, ok = 0;
      window.MODULOS.filter(function (m) { return m.fase === f }).forEach(function (m) {
        var aulas = window.AULAS[m.id]; if (!aulas) { tot++; return }
        aulas.forEach(function (a) { tot++; if (fe[m.id + '/' + a.id]) ok++ });
      });
      if (ok < tot) { pos = (f - 1) + ok / tot; break }
      pos = f;
    }
    var pct = Math.min(100, pos / (n - 1) * 100);
    var h = '<div class="trilha" style="--pct:' + pct.toFixed(1) + '%"><div class="trilha-linha"><span></span></div><span class="trilha-marina" title="Marina">' + PERSONAGEM('marina', 2) + '</span>';
    for (var k = 1; k <= n; k++) h += '<a class="trilha-no' + (k - 1 <= pos ? ' ok' : '') + '" href="#fase-' + k + '" style="left:' + ((k - 1) / (n - 1) * 100) + '%"><span>' + F[k].icone + '</span><small>' + T(F[k].nome) + '</small></a>';
    return h + '</div>';
  }
  function faseChip(m) { var f = (window.FASES || [])[m && m.fase]; return f ? '<p class="fase-chip">' + PERSONAGEM('marina', 1.4) + T({ pt: 'Marina nesta fase:', es: 'Marina en esta fase:' }) + ' <b>' + f.icone + ' ' + T(f.nome) + '</b></p>' : '' }
  /* Ordem das respostas: embaralhada, mas sempre a MESMA para a mesma aula (semente = id). A certa cai em qualquer posição
     (A, B, C e D aparecem certas em quantidades parecidas: regra das perguntas, 28/10/2026).
     Devolve os índices originais, para o resto do código continuar achando a opção pelo número. */
  function ordemOpcoes(opcoes, semente) {
    var h = 2166136261, i; for (i = 0; i < semente.length; i++) { h ^= semente.charCodeAt(i); h = Math.imul(h, 16777619) }
    var pos = (h >>> 0) % opcoes.length;
    function rnd() { h += 0x6D2B79F5; var t = Math.imul(h ^ (h >>> 15), 1 | h); t ^= t + Math.imul(t ^ (t >>> 7), 61 | t); return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
    var idx = opcoes.map(function (o, k) { return k }).filter(function (k) { return !opcoes[k].certa }), j, tmp;
    for (i = idx.length - 1; i > 0; i--) { j = Math.floor(rnd() * (i + 1)); tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp }
    opcoes.forEach(function (o, k) { if (o.certa) idx.splice(Math.min(pos, idx.length), 0, k) });
    return idx;
  }
  /* depois que a pessoa acerta, cada alternativa mostra por que está certa ou errada */
  function revelaPorques(raiz, opcoes, attr) {
    raiz.querySelectorAll('[' + attr + ']').forEach(function (b) {
      if (b.querySelector('.fb')) return; var op = opcoes[+b.getAttribute(attr)];
      b.classList.add(op.certa ? 'certa' : 'errada', 'revelada'); b.insertAdjacentHTML('beforeend', '<span class="fb">' + (op.certa ? '✅ ' : '❌ ') + T(op.fb) + '</span>');
    });
  }

  /* ---------- AULA: uma parte por vez (entender · ver de perto · praticar · atender) ---------- */
  var passoAtual = 0;
  function aulaTela() {
    var mid = Q.get('m'), aid = Q.get('a'), m = window.MODULOS.filter(function (x) { return x.id === mid })[0], lista = window.AULAS[mid] || [];
    var a = lista.filter(function (x) { return x.id === aid })[0];
    if (!m || !a || a.status !== 'pronta') return '<p>' + T({ pt: 'Aula não encontrada.', es: 'Clase no encontrada.' }) + ' <a href="modulos.html">' + T(U.modulos) + '</a></p>';
    lsSet('plat.ultima', { m: mid, a: aid });
    var dg = m.area === 'diagnostico';   // caso do Diagnóstico: a Marina reclama → o tutorial guiado → por que aconteceu → atender
    var partes = (dg ? ['reclamacao', 'praticar', 'entender', 'ferramenta', 'atender'] : ['entender', 'ferramenta', 'praticar', 'atender']).filter(function (p) { return a[p] });
    passoAtual = Math.max(0, Math.min(partes.length - 1, (parseInt(Q.get('passo'), 10) || 1) - 1));
    var prox = aulasDaTrilha(mid).filter(function (x) { return lista.indexOf(x) > lista.indexOf(a) })[0], aqui = 'aula-plataforma.html?m=' + mid + '&a=' + aid, chatVisto = !!Q.get('passo');
    if (Q.get('feito')) { var fp0 = lsGet('plat.praticas', {}); fp0[mid + '/' + aid + '/' + Q.get('feito')] = true; lsSet('plat.praticas', fp0) }
    function fioDepois() {
      var pmF = !(prox && prox.status === 'pronta' && !prox.opcional) ? proximoModulo(mid) : null, g = T(a.gancho);
      if (pmF) g = g.replace(/\s*Próximo módulo:[^”]*$/, '');
      return '<p class="fio depois">➡️ <b>' + (pmF ? T({ pt: 'No próximo módulo', es: 'En el próximo módulo' }) + ' (' + T(pmF.titulo) + '):' : T({ pt: 'Na próxima aula:', es: 'En la próxima clase:' })) + '</b> ' + g + '</p>';
    }
    function desenha() {
      var p = partes[passoAtual], h = '';
      if (p === 'reclamacao') h = chat(a.reclamacao) + '<p class="fio depois">🧭 <b>' + T({ pt: 'O que vamos fazer:', es: 'Qué vamos a hacer:' }) + '</b> ' + T(a.objetivo) + '</p><p><button class="btn amarelo grande" id="bResolver">▶ ' + T(a.praticar ? { pt: 'Resolver com o tutorial guiado', es: 'Resolver con el tutorial guiado' } : { pt: 'Ver por que acontece', es: 'Ver por qué pasa' }) + '</button></p>';
      else if (p === 'entender') h = chat(a.entender.dialogo, a.antes) + (a.entender.pontos && a.entender.pontos.length ? '<ul class="pontos">' + a.entender.pontos.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ul>' : '');
      else if (p === 'ferramenta') { var f = window.FERRAMENTAS[a.ferramenta]; h = '<div class="ferr-box" id="ferr"></div>' + (!window.LAB_ABERTA || window.LAB_ABERTA(a.ferramenta) ? '<p class="mais-lab">🧪 ' + T({ pt: 'Quer os detalhes técnicos?', es: '¿Quieres los detalles técnicos?' }) + ' <a href="ferramenta.html?f=' + a.ferramenta + '">' + T({ pt: 'Ferramenta completa no Laboratório', es: 'Herramienta completa en el Laboratorio' }) + '</a></p>' : ''); setTimeout(function () { f.montar($('#ferr'), T, LANG, { modo: 'simples' }) }) }
      else if (p === 'praticar') {
        var volta = function (id) { return encodeURIComponent(aqui + '&passo=' + (passoAtual + (a.praticar.opcoes ? 1 : 2)) + '&feito=' + id) },   // várias práticas: volta para escolher outra; uma só: segue para o Atender
          fp = lsGet('plat.praticas', {});
        var url = function (o) { return o.pagina + (o.pagina.indexOf('?') < 0 ? '?' : '&') + 'tour=' + o.tour + '&voltar=' + volta(o.id) };
        h = '<div class="pratica"><span class="pratica-masc">' + PERSONAGEM('pixel', 4) + '</span><div><p class="pratica-txt">' + T(a.praticar.texto) + '</p>' +
          (a.praticar.opcoes ? '' : '<a class="btn amarelo grande" href="' + url({ pagina: a.praticar.pagina, tour: a.praticar.tour, id: 'unica' }) + '">▶ ' + T({ pt: 'Começar a prática guiada', es: 'Empezar la práctica guiada' }) + '</a>') + '</div></div>' +
          (a.praticar.opcoes ? '<div class="jeitos">' + a.praticar.opcoes.map(function (o, i) {
            var feito = fp[mid + '/' + aid + '/' + o.id];
            return '<a class="jeito' + (i === 0 ? ' principal' : '') + (feito ? ' feito' : '') + (Q.get('feito') === o.id ? ' pop' : '') + '" href="' + url(o) + '"><span class="n">' + (feito ? '✓' : i + 1) + '</span><span class="ic">' + o.icone + '</span><div><b>' + T(o.tit) + (o.selo ? ' <em>' + T(o.selo) + '</em>' : '') + '</b><p>' + T(o.txt) + '</p></div><span class="ir">▶</span></a>'
          }).join('') + '</div><p class="miudo">💡 ' + T({ pt: 'Se um jeito não estiver disponível, tente o próximo. Ao terminar um tutorial, você volta para cá.', es: 'Si una forma no está disponible, prueba la siguiente. Al terminar un tutorial, vuelves aquí.' }) + '</p>' : '<p class="miudo">' + T(a.atender ? { pt: 'Ao terminar, você volta para esta aula, no passo Atender.', es: 'Al terminar, vuelves a esta clase, en el paso Atender.' } : { pt: 'Ao terminar, você volta para esta aula.', es: 'Al terminar, vuelves a esta clase.' }) + '</p>');
      }
      else if (p === 'atender') h = chat([['marina', a.atender.cena]]) + '<b>' + T(a.atender.pergunta) + '</b><div class="opcoes">' + ordemOpcoes(a.atender.opcoes, mid + '/' + aid).map(function (i) { var o = a.atender.opcoes[i]; return '<button class="opcao" data-op="' + i + '">' + T(o.txt) + '</button>' }).join('') + '</div>' +
        // mais perguntas da mesma aula (módulo de problemas do WhatsApp): mesmo visual, uma embaixo da outra
        (a.atender.mais || []).map(function (q, k) { return '<div class="mais-q" data-q="' + k + '"><b><span class="mais-n">' + (k + 2) + '/' + (a.atender.mais.length + 1) + '</span> ' + T(q.pergunta) + '</b><div class="opcoes">' + ordemOpcoes(q.opcoes, mid + '/' + aid + '/' + k).map(function (i) { return '<button class="opcao" data-op2="' + i + '">' + T(q.opcoes[i].txt) + '</button>' }).join('') + '</div></div>' }).join('') +
        (a.gancho && !dg ? fioDepois() : '');
      // aula sem Atender (ex.: Portfólio 01): o “Na próxima aula” vai no fim da última etapa
      if (p !== 'atender' && passoAtual === partes.length - 1 && a.gancho && !dg) h += fioDepois();
      $('#palco').innerHTML = h; $('#palco').classList.remove('mv-troca'); void $('#palco').offsetWidth; $('#palco').classList.add('mv-troca'); mov().cascata($('#palco'));
      if (p === 'reclamacao') { var bR = $('#bResolver'); if (bR) bR.onclick = function () { $('#bProx').click() }; if (!chatVisto) { chatVisto = true; mov().chat($('#palco'), function () { }) } }
      if (p === 'entender' && !chatVisto) { chatVisto = true; var pts = $('#palco .pontos'); if (pts) pts.classList.add('mv-oculta'); mov().chat($('#palco'), function () { if (pts) { pts.classList.remove('mv-oculta'); pts.classList.add('mv-chega') } }) }
      document.querySelectorAll('.passos button').forEach(function (b, i) { b.classList.toggle('on', i === passoAtual); b.classList.toggle('feito', i < passoAtual) });
      $('#bAnt').disabled = passoAtual === 0;
      var ultimo = passoAtual === partes.length - 1;
      var pm = ultimo && !(prox && prox.status === 'pronta' && !prox.opcional) && !dg ? proximoModulo(mid) : null;   // última aula do módulo: segue para o próximo módulo da trilha
      $('#bProx').textContent = ultimo ? (prox && prox.status === 'pronta' && !prox.opcional ? T(U.proxAula) : pm ? T(U.proxMod) : T(U.fimMod)) : T(U.prox);
      if (ultimo) { var f2 = feitas(); f2[mid + '/' + aid] = true; lsSet('plat.feitas', f2) }
    }
    setTimeout(function () {
      desenha();
      $('#bAnt').onclick = function () { if (passoAtual > 0) { passoAtual--; desenha() } };
      $('#bProx').onclick = function () {
        if (passoAtual < partes.length - 1) { passoAtual++; desenha(); window.scrollTo({ top: 0, behavior: 'smooth' }) }
        else { var pm2 = !dg && !(prox && prox.status === 'pronta' && !prox.opcional) ? proximoModulo(mid) : null; location.href = prox && prox.status === 'pronta' && !prox.opcional ? 'aula-plataforma.html?m=' + mid + '&a=' + prox.id : 'modulo.html?m=' + (pm2 ? pm2.id : mid) }
      };
      document.querySelectorAll('.passos button').forEach(function (b, i) { b.onclick = function () { passoAtual = i; desenha() } });
      $('#palco').addEventListener('click', function (e) {
        var o2 = e.target.closest('[data-op2]');
        if (o2) { var bloco = o2.closest('.mais-q'), q2 = a.atender.mais[+bloco.getAttribute('data-q')], op2 = q2.opcoes[+o2.getAttribute('data-op2')]; if (o2.querySelector('.fb') || bloco.querySelector('.opcao.certa')) return;
          o2.classList.add(op2.certa ? 'certa' : 'errada'); o2.insertAdjacentHTML('beforeend', '<span class="fb">' + (op2.certa ? '✅ ' : '❌ ') + T(op2.fb) + '</span>'); if (op2.certa) { mov().confete(o2); revelaPorques(bloco, q2.opcoes, 'data-op2') } return }
        var o = e.target.closest('[data-op]'); if (!o) return; var op = a.atender.opcoes[+o.getAttribute('data-op')];
        if (o.querySelector('.fb') || $('#palco > .opcoes .opcao.certa')) return;
        o.classList.add(op.certa ? 'certa' : 'errada'); o.insertAdjacentHTML('beforeend', '<span class="fb">' + (op.certa ? '✅ ' : '❌ ') + T(op.fb) + '</span>');
        if (op.certa) { mov().confete(o); revelaPorques($('#palco'), a.atender.opcoes, 'data-op') }
      });
      if ($('#bApr')) $('#bApr').onclick = function () { document.documentElement.classList.toggle('apresentar'); this.textContent = document.documentElement.classList.contains('apresentar') ? T(U.sairApr) : T(U.apresentar) };
      document.addEventListener('keydown', function (e) { if (e.target.closest('input,textarea')) return; if (e.key === 'ArrowRight') $('#bProx').click(); if (e.key === 'ArrowLeft') $('#bAnt').click() });
    });
    return (lsGet('plat.admin', false) === true ? '<div class="barra-apr"><button class="btn sec" id="bApr">' + T(U.apresentar) + '</button></div>' : '') +
      '<p class="pl-trilha"><a href="' + (dg ? 'diagnostico.html' : 'modulos.html') + '">' + T(dg ? U.diagnostico : U.modulos) + '</a> › <a href="modulo.html?m=' + mid + '">' + T(m.titulo) + '</a> › ' + T(dg ? { pt: 'Caso', es: 'Caso' } : { pt: 'Aula', es: 'Clase' }) + ' ' + a.id + '</p>' +
      '<h1 class="pl-h1">' + T(a.titulo) + '</h1>' + (mid === 'dg-workaround' ? '<p class="ga-aviso">🧪 <b>' + T({ pt: 'Workaround plausível:', es: 'Workaround plausible:' }) + '</b> ' + T({ pt: 'a Meta não documenta esta saída; a comunidade relata que costuma funcionar. Use só como tentativa, depois do caminho oficial, e nunca prometa resultado.', es: 'Meta no documenta esta salida; la comunidad relata que suele funcionar. Úsala solo como intento, después del camino oficial, y nunca prometas resultado.' }) + '</p>' : '') +
      '<div class="passos">' + partes.map(function (p, i) { return '<button><span class="num">' + (i + 1) + '</span>' + T(dg && p === 'praticar' ? U.resolver : dg && p === 'entender' ? U.porque : U[p]) + '</button>' }).join('') + '</div>' +
      '<div class="palco" id="palco"></div>' +
      '<div class="nav-aula"><button class="btn sec" id="bAnt">' + T(U.ant) + '</button><button class="btn" id="bProx">' + T(U.prox) + '</button></div>' +
      (a.fontes ? '<details class="fontes"><summary>📚 ' + T(mid === 'dg-workaround' ? { pt: 'Fontes da comunidade (não oficiais)', es: 'Fuentes de la comunidad (no oficiales)' } : U.fontes) + '</summary><ul>' + a.fontes.map(function (f) { return '<li><a href="' + f.url + '" target="_blank" rel="noopener">' + T(f.titulo) + '</a> · ' + T(U.conferido) + ' ' + f.conferido + '</li>' }).join('') + '</ul>' + (a.telas ? '<p class="miudo">🖥️ ' + T(a.telas) + '</p>' : '') + '</details>' : '') +
      // quando a Central de Ajuda e a tela real não batem: as duas versões e o que a aula ensina
      (a.divergencias ? '<details class="fontes divergencias"><summary>⚖️ ' + T({ pt: 'Divergências: Central de Ajuda × tela real', es: 'Diferencias: Centro de ayuda × pantalla real' }) + '</summary><ul>' + a.divergencias.map(function (d) {
        return '<li><b>' + T(d.tema) + '</b><br>📚 ' + T({ pt: 'Central de Ajuda', es: 'Centro de ayuda' }) + ': ' + T(d.oficial) + '<br>🖥️ ' + T({ pt: 'Tela real', es: 'Pantalla real' }) + ': ' + T(d.tela) + '<br>✅ ' + T({ pt: 'Na aula', es: 'En la clase' }) + ': ' + T(d.aula) + '</li>'
      }).join('') + '</ul></details>' : '');
  }

  /* prática guiada feita na própria plataforma (ex.: pedir e ler o print do cliente) */
  TELAS.pratica = function () {
    var p = (window.PRATICAS || {})[Q.get('p')]; if (!p) return '<p>' + T({ pt: 'Prática não encontrada.', es: 'Práctica no encontrada.' }) + '</p>';
    setTimeout(function () {
      $('#palcoPratica').addEventListener('click', function (e) {
        var o = e.target.closest('[data-pp]'); if (!o || $('.pp-op.certa')) return; var op = p.pergunta.opcoes[+o.getAttribute('data-pp')];
        document.querySelectorAll('.pp-op .fb').forEach(function (x) { x.remove() }); document.querySelectorAll('.pp-op').forEach(function (x) { x.classList.remove('errada') });
        o.classList.add(op.certa ? 'certa' : 'errada'); o.insertAdjacentHTML('beforeend', '<span class="fb">' + (op.certa ? '✅ ' : '❌ ') + T(op.fb) + '</span>');
        if (op.certa) { mov().confete(o); revelaPorques($('#palcoPratica'), p.pergunta.opcoes, 'data-pp') }
      });
    });
    return '<h1 class="pl-h1">🕹️ ' + T(p.titulo) + '</h1><p class="pl-lead">' + T(p.resumo) + '</p><div class="palco" id="palcoPratica">' + chat(p.dialogo) +
      '<div class="pp-pergunta"><b>' + T(p.pergunta.txt) + '</b><div class="opcoes">' + ordemOpcoes(p.pergunta.opcoes, 'p/' + Q.get('p')).map(function (i) { var o = p.pergunta.opcoes[i]; return '<button class="opcao pp-op" data-pp="' + i + '">' + T(o.txt) + '</button>' }).join('') + '</div></div></div>';
  };

  /* página com todas as colas, para consulta rápida no dia a dia */
  TELAS.colas = function () {
    var h = '<h1 class="pl-h1">🗒️ ' + T({ pt: 'Colas do atendimento', es: 'Guías rápidas de atención' }) + '</h1><p class="pl-lead">' + T({ pt: 'O resumo prático de cada aula: o que perguntar, o que conferir, a frase pronta e quando encaminhar. Use o botão copiar durante o atendimento.', es: 'El resumen práctico de cada clase: qué preguntar, qué revisar, la frase lista y cuándo derivar. Usa el botón copiar durante la atención.' }) + '</p>';
    window.MODULOS.forEach(function (m) {
      var aulas = (window.AULAS[m.id] || []).filter(function (a) { return a.cola });
      if (!aulas.length) return;
      h += '<h2 class="secao-tit">' + m.icone + ' ' + (m.area ? T(U.diagnostico) + ' · ' : '') + T(m.titulo) + '</h2>' + aulas.map(function (a) { return '<h3>' + a.id + ' · ' + T(a.titulo) + ' <a class="miudo" href="aula-plataforma.html?m=' + m.id + '&a=' + a.id + '">' + T({ pt: 'abrir aula', es: 'abrir clase' }) + '</a></h3>' + colaHtml(a.cola, 'cola__' + m.id + '__' + a.id) }).join('');
    });
    return h;
  };

  /* FAQ: mitos e correções + dúvidas comuns de atendimento (conteúdo em assets/academia/faq.js) */
  TELAS.faq = function () {
    var S = window.FAQ || [], q = (Q.get('q') || '').toLowerCase();
    var h = '<h1 class="pl-h1">❓ ' + T({ pt: 'Perguntas frequentes', es: 'Preguntas frecuentes' }) + '</h1><p class="pl-lead">' + T({ pt: 'O que circula por aí e não é bem assim, e as dúvidas que mais aparecem no atendimento. Cada resposta foi conferida na Central de Ajuda da Meta ou na tela real; o link leva à aula ou ao caso.', es: 'Lo que circula por ahí y no es así, y las dudas que más aparecen en la atención. Cada respuesta se revisó en el Centro de ayuda de Meta o en la pantalla real; el enlace lleva a la clase o al caso.' }) + '</p>' +
      (window.FAQ_AVISO ? '<div class="faq-aviso"><b class="faq-aviso-tit">⚠️ ' + T(FAQ_AVISO.titulo) + '</b><ol>' + FAQ_AVISO.itens.map(function (x) {
        return '<li>' + T(x.t) + ' ' + (x.o || []).map(function (u) { return '<a class="miudo" href="' + u + '" target="_blank" rel="noopener">📚 ' + T({ pt: 'fonte', es: 'fuente' }) + '</a>' }).join(' ') +
          (x.c ? ' <a class="miudo" href="' + x.c.url + '" target="_blank" rel="noopener">💬 ' + T(x.c.t) + ' (' + T({ pt: 'não oficial', es: 'no oficial' }) + ')</a>' : '') + '</li>'
      }).join('') + '</ol><p class="miudo">' + T(FAQ_AVISO.rodape) + '</p></div>' : '') +
      '<p class="faq-indice">' + S.map(function (s) { return '<a href="#faq-' + s.id + '">' + s.icone + ' ' + T(s.titulo) + '</a>' }).join(' · ') + '</p>';
    S.forEach(function (s) {
      h += '<h2 class="secao-tit" id="faq-' + s.id + '">' + s.icone + ' ' + T(s.titulo) + '</h2>' + (s.sub ? '<p class="miudo">' + T(s.sub) + '</p>' : '') +
        s.itens.map(function (it, i) {
          var m = it.aula && (window.MODULOS || []).filter(function (x) { return x.id === it.aula[0] })[0];
          var lk = it.aula ? ' <a class="miudo" href="aula-plataforma.html?m=' + it.aula[0] + '&a=' + it.aula[1] + '">' + T(m && m.area ? { pt: 'abrir o caso', es: 'abrir el caso' } : { pt: 'abrir a aula', es: 'abrir la clase' }) + ' ›</a>' : '';
          var fo = it.fonte ? ' <a class="miudo" href="' + it.fonte + '" target="_blank" rel="noopener">📚 ' + T({ pt: 'fonte', es: 'fuente' }) + '</a>' : '';
          var aberto = q && (T(it.p) + ' ' + T(it.r)).toLowerCase().indexOf(q) >= 0;
          return '<details class="faq-it" id="faq-' + s.id + '-' + i + '"' + (aberto ? ' open' : '') + '><summary>' + T(it.p) + '</summary><p>' + T(it.r) + lk + fo + '</p></details>';
        }).join('');
    });
    return h;
  };

  TELAS.feedback = function () { return window.FEEDBACK ? window.FEEDBACK.html(T) : '' };

  /* ---------- montagem ---------- */
  function monta() {
    var tela = document.body.getAttribute('data-tela');
    if (!tela) return;   // páginas da loja/simulador só usam a porta
    var mAtual = (window.MODULOS || []).filter(function (x) { return x.id === Q.get('m') })[0], naArea = !!(mAtual && mAtual.area === 'diagnostico');
    var ativo = { inicio: 'inicio', modulos: 'modulos', diagnostico: 'diagnostico', modulo: naArea ? 'diagnostico' : 'modulos', aula: naArea ? 'diagnostico' : 'modulos', pratica: 'modulos', simuladores: 'simuladores', laboratorio: 'laboratorio', ferramenta: 'laboratorio', colas: 'colas', faq: 'faq', feedback: 'feedback' }[tela];
    document.documentElement.lang = LANG === 'es' ? 'es' : 'pt-BR';
    var tg = [].slice.call(document.querySelectorAll('.tg-holo,.tg-balao'));   // tutorial guiado já aberto: não apagar
    // aviso discreto de obra nas páginas de entrada (não mexe no conteúdo de cada tela)
    var obra = ['inicio', 'modulos', 'diagnostico', 'faq'].indexOf(tela) >= 0 ? '<p class="pl-obra">🚧 ' + T({ pt: 'Plataforma em construção: algumas aulas e telas ainda estão sendo revisadas e podem mudar.', es: 'Plataforma en construcción: algunas clases y pantallas todavía se están revisando y pueden cambiar.' }) + ' <a href="feedback.html">' + T({ pt: 'Viu algo estranho? Conte no Feedback', es: '¿Viste algo raro? Cuéntalo en Feedback' }) + '</a></p>' : '';
    document.body.innerHTML = topo(ativo) + '<main class="pl-main">' + obra + TELAS[tela]() + '</main>';
    tg.forEach(function (x) { document.body.appendChild(x) });
    if (tela !== 'aula') mov().cascata($('.pl-main'));
    if (tela === 'feedback' && window.FEEDBACK) window.FEEDBACK.liga(T);
    // FAQ montado depois do carregamento: o #âncora do link (ex.: faq.html#faq-verified) só existe agora
    if (tela === 'faq' && location.hash) { var alvoF = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (alvoF) { if (alvoF.tagName === 'DETAILS') alvoF.open = true; setTimeout(function () { alvoF.scrollIntoView({ block: 'start' }) }, 60) } }
    // a intro (assets/js/intro.js): sozinha na primeira visita ao início; depois, clicando na Marina
    if (tela === 'inicio' && window.INTRO && !lsGet('plat.introVista', false)) { lsSet('plat.introVista', true); abreIntro(false) }   // abriu sozinha: começa muda (o navegador não deixa tocar sem clique)
  }
  function abreIntro(comSom) { window.INTRO.abrir({ som: !!comSom, aoComecar: function () { location.href = 'modulos.html' } }) }
  document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('[data-intro]') && window.INTRO) abreIntro(true) });
  function inicia() {
    // cada prática começa do zero: sem F12, sem Consultor de Dados aberto, sem tutorial peel objetivode
    try { ['loja.labLoja', 'loja.daAberto', 'tour.ativo', 'tour.volta'].forEach(function (k) { sessionStorage.removeItem(k) }); localStorage.setItem('loja.aulaAberta', 'false') } catch (e) { }
    window.PLAT_PORTA(monta)
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inicia); else inicia();
})();
