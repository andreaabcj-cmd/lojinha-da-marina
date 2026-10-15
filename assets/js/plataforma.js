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
  function trilhaChip(m) {
    var tr = trilhaAtual(), ids = (tr.modulos || []).concat(tr.extras || []), k = ids.indexOf(m.id);
    return k < 0 ? '' : '<p class="trilha-chip">' + tr.icone + ' ' + T(tr.nome) + ' · ' + T({ pt: 'módulo', es: 'módulo' }) + ' ' + (k + 1) + ' ' + T({ pt: 'de', es: 'de' }) + ' ' + ids.length + '</p>';
  }

  /* ---------- telas ---------- */
  var TELAS = {
    inicio: function () {
      var ult = lsGet('plat.ultima', null), aula = ult && (window.AULAS[ult.m] || []).filter(function (a) { return a.id === ult.a && a.status === 'pronta' })[0];
      return '<div class="pl-ola">' + PERSONAGEM('marina', 4) + PERSONAGEM('rafa', 4) + PERSONAGEM('pixel', 4) + '</div>' +
        '<h1 class="pl-h1">' + T({ pt: 'Bem-vindo à Lojinha da Marina', es: 'Bienvenido a la Lojinha da Marina' }) + '</h1>' +
        '<p class="pl-lead">' + T({ pt: 'A Marina tem uma loja online e quer crescer com a Meta. O Rafa é do suporte e ajuda a Marina em cada fase. O Pixel, nosso mascote, te guia pelo caminho. Escolha por onde começar.', es: 'Marina tiene una tienda online y quiere crecer con Meta. Rafa es del soporte y ayuda a Marina en cada fase. El Pixel, nuestra mascota, te guía en el camino. Elige por dónde empezar.' }) + '</p>' +
        (aula ? '<div class="continuar">▶ ' + T({ pt: 'Continue de onde parou:', es: 'Sigue donde lo dejaste:' }) + ' <b>' + T(aula.titulo) + '</b> <a class="btn" href="aula-plataforma.html?m=' + ult.m + '&a=' + ult.a + '">' + T({ pt: 'Continuar', es: 'Continuar' }) + '</a></div>' : '') +
        '<div class="portas">' + [
          ['modulos.html', '🎓', U.modulos, { pt: 'Aprender: aulas curtas, em ordem, com prática guiada e atendimento.', es: 'Aprender: clases cortas, en orden, con casos prácticos.' }],
          ['loja.html', '🏪', U.loja, { pt: 'Praticar: a loja da Marina, com o Pixel funcionando e o Consultor de Dados.', es: 'Practicar: la tienda de Marina, con el Pixel funcionando y el Asesor de datos.' }],
          ['simuladores.html', '🕹️', U.simuladores, { pt: 'Ferramentas da Meta de treino: clique à vontade, nada vai para a Meta.', es: 'Herramientas de Meta de práctica: haz clic sin miedo, nada va a Meta.' }],
          ['laboratorio.html', '🧪', U.laboratorio, { pt: 'Explorar: as ferramentas das aulas, soltas, para explicar e testar.', es: 'Explorar: las herramientas de las clases, sueltas, para explicar y probar.' }]
        ].map(function (p) { return '<a class="porta-card" href="' + p[0] + '"><span class="ic">' + p[1] + '</span><b>' + T(p[2]) + '</b><span>' + T(p[3]) + '</span><em>' + T({ pt: 'Entrar →', es: 'Entrar →' }) + '</em></a>' }).join('') + '</div>';
    },
    modulos: function () {
      var tr = trilhaAtual(), n = 0;
      function card(m) {
        n++; var ok = window.AULAS[m.id];
        return (ok ? '<a class="item" href="modulo.html?m=' + m.id + '">' : '<div class="item off">') + '<span class="num">' + n + '</span><span class="ic">' + m.icone + '</span><b>' + T(m.titulo) + '</b><p>' + T(m.resumo) + '</p>' + selo(m.status) + (ok ? '</a>' : '</div>');
      }
      var abas = '<div class="trilhas-abas" role="tablist">' + window.TRILHAS.map(function (t) {
        return '<a role="tab" class="trilha-aba' + (t.id === tr.id ? ' on' : '') + '" href="modulos.html?t=' + t.id + '"><span class="ic">' + t.icone + '</span><b>' + T(t.nome) + '</b><small>' + T(t.sub) + '</small></a>';
      }).join('') + '</div>';
      var h = '<h1 class="pl-h1">🎓 ' + T(U.modulos) + '</h1>' + abas + '<p class="pl-lead">' + T(tr.resumo) + '</p>' +
        '<p class="pl-lead"><small>' + T({ pt: 'Cada módulo tem aulas de 5 a 10 minutos, sempre no mesmo formato: entender, ver de perto, praticar e atender. A história da Marina acompanha todas as aulas.', es: 'Cada módulo tiene clases de 5 a 10 minutos, siempre con el mismo formato: entender, ver de cerca, practicar y atender. La historia de Marina acompaña todas las clases.' }) + '</small></p>' +
        '<div class="grade">' + modulosDaTrilha(tr).map(card).join('') + '</div>';
      if (tr.extras && tr.extras.length) {
        h += '<div class="fase-cab fora"><div><h2>' + T({ pt: 'Módulos extras', es: 'Módulos extras' }) + '</h2><p>' + T({ pt: 'Só na Trilha Completa: assuntos de outras áreas, ainda em construção.', es: 'Solo en la Ruta Completa: temas de otras áreas, todavía en construcción.' }) + '</p></div></div><div class="grade">' +
          tr.extras.map(function (id) { return card(window.MODULOS.filter(function (m) { return m.id === id })[0]) }).join('') + '</div>';
      }
      return h;
    },
    modulo: function () {
      var m = window.MODULOS.filter(function (x) { return x.id === Q.get('m') })[0] || window.MODULOS[0], aulas = aulasDaTrilha(m.id), f = feitas();
      return '<p class="pl-trilha"><a href="modulos.html">' + T(U.modulos) + '</a> ›</p><h1 class="pl-h1">' + m.icone + ' ' + T(m.titulo) + '</h1>' + trilhaChip(m) + faseChip(m) + '<p class="pl-lead">' + T(m.resumo) + '</p>' +
        '<div class="aulas">' + aulas.map(function (a) {
          var ok = a.status === 'pronta', fe = f[m.id + '/' + a.id];
          return (ok ? '<a class="aula-l' + (fe ? ' feita' : '') + '" href="aula-plataforma.html?m=' + m.id + '&a=' + a.id + '">' : '<div class="aula-l off">') + '<span class="n">' + (fe ? '✓' : a.id) + '</span><b>' + T(a.titulo) + '</b><small>' + (a.min ? a.min + ' ' + T(U.min) : T(U.planejada)) + '</small>' + (ok ? '</a>' : '</div>')
        }).join('') + '</div>';
    },
    aula: function () { return aulaTela() },
    simuladores: function () {
      setTimeout(ligaRecomecar);
      var sims = [['meta-eventos.html', '📡', { pt: 'Gerenciador de Eventos', es: 'Administrador de eventos' }, { pt: 'Criar o Pixel, Testar eventos (com os eventos da Lojinha), Diagnóstico e Configurações.', es: 'Crear el Pixel, Probar eventos (con los eventos de la Lojinha), Diagnóstico y Configuración.' }, 'pronta'],
        ['meta-instagram.html', '📸', { pt: 'Instagram (perfil e conta profissional)', es: 'Instagram (perfil y cuenta profesional)' }, { pt: 'Virar conta profissional e editar o perfil, com as telas reais.', es: 'Volverse cuenta profesional y editar el perfil, con las pantallas reales.' }, 'pronta'],
        ['meta-portfolio.html', '🏢', { pt: 'Configurações do portfólio (Business Suite)', es: 'Configuración del portfolio (Business Suite)' }, { pt: 'Criar o portfólio, convidar pessoas, Páginas, contas de anúncios e Central de Segurança.', es: 'Crear el portfolio, invitar personas, Páginas, cuentas publicitarias y Centro de seguridad.' }, 'pronta'],
        ['meta-catalogo.html', '🗂️', { pt: 'Gerenciador de Comércio (Catálogo)', es: 'Administrador de ventas (Catálogo)' }, { pt: 'Criar o catálogo, carregar produtos por arquivo, conferir IDs e achar produtos que não aparecem, com as telas reais.', es: 'Crear el catálogo, subir productos por archivo, revisar IDs y encontrar productos que no aparecen, con las pantallas reales.' }, 'pronta'],
        ['meta-feed.html', '📰', { pt: 'Gerenciador de Anúncios (anúncio no Feed)', es: 'Administrador de anuncios (anuncio en el Feed)' }, { pt: 'O criativo, o texto, o destino, os posicionamentos e a prévia do anúncio, com as telas reais.', es: 'El contenido, el texto, el destino, las ubicaciones y la vista previa del anuncio, con las pantallas reales.' }, 'pronta'],
        ['meta-suite.html', '💬', { pt: 'Meta Business Suite (posts, Caixa de Entrada e Insights)', es: 'Meta Business Suite (publicaciones, Mensajes y Estadísticas)' }, { pt: 'Criar post no Facebook e no Instagram, responder mensagens e comentários e ler os Insights, com as telas reais.', es: 'Crear publicaciones en Facebook y en Instagram, responder mensajes y comentarios y leer las Estadísticas, con las pantallas reales.' }, 'pronta'],
        ['meta-regras.html', '⚙️', { pt: 'Regras automatizadas (Gerenciador de Anúncios)', es: 'Reglas automáticas (Administrador de anuncios)' }, { pt: 'Criar, acompanhar, editar e corrigir regras automatizadas, com as telas reais.', es: 'Crear, seguir, editar y corregir reglas automáticas, con las pantallas reales.' }, 'pronta'],
        ['meta-relatorios.html', '📊', { pt: 'Relatórios de Anúncios', es: 'Informes de anuncios' }, { pt: 'Ler a tabela dinâmica, montar o seu relatório, entender a atribuição e destravar relatórios vazios, com as telas reais.', es: 'Leer la tabla dinámica, armar tu informe, entender la atribución y destrabar informes vacíos, con las pantallas reales.' }, 'pronta'],
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
        }).join('') + '</div>' +
        '<h2 class="pl-h2" id="loja-por-dentro">🔬 ' + T({ pt: 'A loja por dentro (F12)', es: 'La tienda por dentro (F12)' }) + '</h2>' +
        '<a class="item dentro" href="loja.html?aula=camera"><b>' + T({ pt: 'Só mais um jeito de ver o Pixel', es: 'Solo otra forma de ver el Pixel' }) + '</b><p>' + T({ pt: 'É o mesmo Pixel e são os mesmos eventos que você vê no Consultor de Dados e no Gerenciador de Eventos, só que olhando por dentro do site, como no F12 (ferramentas de desenvolvedor). No atendimento não é preciso: serve para entender o que acontece por trás e para conversar com quem cuida do site.', es: 'Es el mismo Pixel y son los mismos eventos que ves en el Asesor de datos y en el Administrador de eventos, solo que mirando por dentro del sitio, como en el F12 (herramientas de desarrollador). En la atención no hace falta: sirve para entender lo que pasa por detrás y para hablar con quien cuida el sitio.' }) + '</p><p class="abas">' + T({ pt: 'Dentro dele: 📹 Câmera · 🌐 Rede · 🔍 Lupa · 📄 Código · 🧪 Falhas · 💡 Dica. Para voltar à loja normal, use “sair” na faixa amarela.', es: 'Adentro: 📹 Cámara · 🌐 Red · 🔍 Lupa · 📄 Código · 🧪 Fallas · 💡 Consejo. Para volver a la tienda normal, usa “salir” en la franja amarilla.' }) + '</p><em>' + T({ pt: 'Abrir a loja por dentro →', es: 'Abrir la tienda por dentro →' }) + '</em></a>' + recomecarHTML();
    },
    ferramenta: function () {
      var id = Q.get('f'), f = window.FERRAMENTAS[id]; if (!f || !f.montar) return '<p>' + T({ pt: 'Ferramenta não encontrada.', es: 'Herramienta no encontrada.' }) + '</p>';
      setTimeout(function () { f.montar($('#ferr'), T, LANG) });
      return '<p class="pl-trilha"><a href="laboratorio.html">' + T(U.laboratorio) + '</a> ›</p><h1 class="pl-h1">' + T(f.titulo) + '</h1><p class="pl-lead">' + T(f.resumo) + '</p><div class="palco"><div id="ferr"></div></div>';
    }
  };

  /* ---------- 🧹 Recomeçar do zero: apaga o que a pessoa fez nos simuladores e na loja (só neste navegador) ---------- */
  function recomecarHTML() {
    return '<div class="recomecar" id="recomecar"><h2 class="pl-h2">🧹 ' + T({ pt: 'Recomeçar do zero', es: 'Empezar de cero' }) + '</h2>' +
      '<p>' + T({ pt: 'Apaga o que você fez nos simuladores (Pixels criados, eventos, portfólios, convites, contas de anúncios, perfil do Instagram) e na loja (carrinho, pedidos, dados do checkout, cookies, falhas do Laboratório). Só neste navegador: não mexe no de mais ninguém.', es: 'Borra lo que hiciste en los simuladores (Pixels creados, eventos, portfolios, invitaciones, cuentas publicitarias, perfil de Instagram) y en la tienda (carrito, pedidos, datos del checkout, cookies, fallas del Laboratorio). Solo en este navegador: no toca el de nadie más.' }) + '</p>' +
      '<label class="rc-ck"><input type="checkbox" id="rcProg"/> ' + T({ pt: 'Apagar também meu progresso nas aulas (os ✓)', es: 'Borrar también mi progreso en las clases (los ✓)' }) + '</label>' +
      '<div class="rc-bts" id="rcBts"><button class="btn sec" id="rcIr">🧹 ' + T({ pt: 'Recomeçar do zero', es: 'Empezar de cero' }) + '</button></div></div>';
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
      ['criar-conta-anuncios', 'meta-portfolio.html?exemplo=1', 'portfolio', '04', { pt: 'Como criar uma conta de anúncios', es: 'Cómo crear una cuenta publicitaria' }] ] },
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
      ['achar-codigo', 'loja.html?lab=1', 'pixel', '03', { pt: 'Como achar o código do Pixel no site (técnico)', es: 'Cómo encontrar el código del Pixel en el sitio (técnico)' }],
      ['testar-eventos', 'meta-eventos.html', 'pixel', '03', { pt: 'Como usar o Testar eventos', es: 'Cómo usar Probar eventos' }],
      ['compra-completa', 'loja.html', 'pixel', '04', { pt: 'Como conferir se a compra chega (Purchase)', es: 'Cómo revisar si la compra llega (Purchase)' }] ] },
    { m: 'relatorios', itens: [
      ['ler-relatorio', 'meta-relatorios.html?zerar=1', 'relatorios', '02', { pt: 'Como ler a tabela do relatório (alcance, impressões, gasto)', es: 'Cómo leer la tabla del informe (alcance, impresiones, gasto)' }],
      ['montar-relatorio', 'meta-relatorios.html?zerar=1', 'relatorios', '03', { pt: 'Como montar o seu relatório (detalhamentos e métricas)', es: 'Cómo armar tu informe (desgloses y métricas)' }],
      ['comparar-atribuicao', 'meta-relatorios.html?exemplo=1', 'relatorios', '04', { pt: 'Como entender a janela de atribuição', es: 'Cómo entender la ventana de atribución' }],
      ['relatorio-vazio', 'meta-relatorios.html?vazio=1', 'relatorios', '05', { pt: 'Como destravar um relatório vazio', es: 'Cómo destrabar un informe vacío' }] ] },
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
    { m: 'catalogo', itens: [
      ['criar-catalogo', 'meta-catalogo.html?zerar=1', 'catalogo', '02', { pt: 'Como criar um catálogo no Gerenciador de Comércio', es: 'Cómo crear un catálogo en el Administrador de ventas' }],
      ['adicionar-produtos', 'meta-catalogo.html?zerar=1', 'catalogo', '03', { pt: 'Como carregar os produtos por arquivo (feed)', es: 'Cómo subir los productos por archivo (feed)' }],
      ['conferir-ids', 'meta-catalogo.html?exemplo=1', 'catalogo', '04', { pt: 'Como conferir os IDs dos produtos', es: 'Cómo revisar los IDs de los productos' }],
      ['achar-produto', 'meta-catalogo.html?exemplo=1', 'catalogo', '05', { pt: 'Como achar e corrigir um produto que não aparece', es: 'Cómo encontrar y corregir un producto que no aparece' }] ] },
    { m: 'anuncios', itens: [
      ['turbinar-post', 'meta-turbinar.html?zerar=1', 'anuncios', '01', { pt: 'Como turbinar um post', es: 'Cómo promocionar un post' }],
      ['conhecer-niveis', 'meta-anuncios.html?zerar=1', 'anuncios', '02', { pt: 'Como achar cada coisa: campanha, conjunto e anúncio', es: 'Cómo encontrar cada cosa: campaña, conjunto y anuncio' }],
      ['primeiro-anuncio', 'meta-anuncios.html?zerar=1', 'anuncios', '03', { pt: 'Como montar o primeiro anúncio (campanha de Vendas em rascunho)', es: 'Cómo armar el primer anuncio (campaña de Ventas en borrador)' }],
      ['editar-publicado', 'meta-anuncios.html?zerar=1', 'anuncios', '04', { pt: 'Como editar uma campanha que já está rodando', es: 'Cómo editar una campaña que ya está corriendo' }],
      ['resolver-publicacao', 'meta-turbinar.html?zerar=1&problemas=1', 'anuncios', '05', { pt: 'Como destravar um anúncio que não publica', es: 'Cómo destrabar un anuncio que no se publica' }] ] }
  ];
  function comoFazer() {
    var volta = encodeURIComponent('laboratorio.html#como');
    return '<h2 class="pl-h2" id="como">🧭 ' + T({ pt: 'Como fazer…', es: 'Cómo hacer…' }) + '</h2>' +
      '<p class="pl-lead">' + T({ pt: 'Os tutoriais guiados das aulas, um por um. O Pixel te leva pela mão; no fim, você volta para cá.', es: 'Los tutoriales guiados de las clases, uno por uno. El Pixel te lleva de la mano; al final, vuelves aquí.' }) + '</p>' +
      '<input class="como-busca" id="comoBusca" type="search" placeholder="' + T({ pt: '🔎 O que você quer fazer? (ex.: convidar, Pixel, Instagram)', es: '🔎 ¿Qué quieres hacer? (ej.: invitar, Pixel, Instagram)' }) + '" aria-label="' + T({ pt: 'Buscar tutorial', es: 'Buscar tutorial' }) + '"/>' +
      '<div class="como-cols">' + COMO.map(function (g) {
        var mod = window.MODULOS.filter(function (x) { return x.id === g.m })[0] || { icone: '', titulo: { pt: g.m, es: g.m } };
        return '<div class="como-grupo"><h3>' + mod.icone + ' ' + T(mod.titulo) + '</h3>' + g.itens.map(function (it) {
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
  /* Ordem das respostas: embaralhada, mas sempre a MESMA para a mesma aula (semente = id), e a certa nunca fica em primeiro.
     Devolve os índices originais, para o resto do código continuar achando a opção pelo número. */
  function ordemOpcoes(opcoes, semente) {
    var h = 2166136261, i; for (i = 0; i < semente.length; i++) { h ^= semente.charCodeAt(i); h = Math.imul(h, 16777619) }
    function rnd() { h += 0x6D2B79F5; var t = Math.imul(h ^ (h >>> 15), 1 | h); t ^= t + Math.imul(t ^ (t >>> 7), 61 | t); return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
    var idx = opcoes.map(function (o, k) { return k }), j, tmp;
    for (i = idx.length - 1; i > 0; i--) { j = Math.floor(rnd() * (i + 1)); tmp = idx[i]; idx[i] = idx[j]; idx[j] = tmp }
    if (idx.length > 1 && opcoes[idx[0]].certa) { j = 1 + Math.floor(rnd() * (idx.length - 1)); tmp = idx[0]; idx[0] = idx[j]; idx[j] = tmp }
    return idx;
  }

  /* ---------- AULA: uma parte por vez (entender · ver de perto · praticar · atender) ---------- */
  var passoAtual = 0;
  function aulaTela() {
    var mid = Q.get('m'), aid = Q.get('a'), m = window.MODULOS.filter(function (x) { return x.id === mid })[0], lista = window.AULAS[mid] || [];
    var a = lista.filter(function (x) { return x.id === aid })[0];
    if (!m || !a || a.status !== 'pronta') return '<p>' + T({ pt: 'Aula não encontrada.', es: 'Clase no encontrada.' }) + ' <a href="modulos.html">' + T(U.modulos) + '</a></p>';
    lsSet('plat.ultima', { m: mid, a: aid });
    var partes = ['entender', 'ferramenta', 'praticar', 'atender'].filter(function (p) { return a[p] });
    passoAtual = Math.max(0, Math.min(partes.length - 1, (parseInt(Q.get('passo'), 10) || 1) - 1));
    var prox = aulasDaTrilha(mid).filter(function (x) { return lista.indexOf(x) > lista.indexOf(a) })[0], aqui = 'aula-plataforma.html?m=' + mid + '&a=' + aid, chatVisto = !!Q.get('passo');
    if (Q.get('feito')) { var fp0 = lsGet('plat.praticas', {}); fp0[mid + '/' + aid + '/' + Q.get('feito')] = true; lsSet('plat.praticas', fp0) }
    function desenha() {
      var p = partes[passoAtual], h = '';
      if (p === 'entender') h = '<h2>💬 ' + T(U.entender) + '</h2>' + (a.antes ? '<p class="fio antes">📖 <b>' + T({ pt: 'Onde paramos:', es: 'Dónde quedamos:' }) + '</b> ' + T(a.antes) + '</p>' : '') + chat(a.entender.dialogo) + '<ul class="pontos">' + a.entender.pontos.map(function (x) { return '<li>' + T(x) + '</li>' }).join('') + '</ul>';
      else if (p === 'ferramenta') { var f = window.FERRAMENTAS[a.ferramenta]; h = '<h2>🔍 ' + T(U.ferramenta) + '</h2><div class="ferr-box" id="ferr"></div><p class="mais-lab">🧪 ' + T({ pt: 'Quer os detalhes técnicos?', es: '¿Quieres los detalles técnicos?' }) + ' <a href="ferramenta.html?f=' + a.ferramenta + '">' + T({ pt: 'Ferramenta completa no Laboratório', es: 'Herramienta completa en el Laboratorio' }) + '</a></p>'; setTimeout(function () { f.montar($('#ferr'), T, LANG, { modo: 'simples' }) }) }
      else if (p === 'praticar') {
        var volta = function (id) { return encodeURIComponent(aqui + '&passo=' + (passoAtual + (a.praticar.opcoes ? 1 : 2)) + '&feito=' + id) },   // várias práticas: volta para escolher outra; uma só: segue para o Atender
          fp = lsGet('plat.praticas', {});
        var url = function (o) { return o.pagina + (o.pagina.indexOf('?') < 0 ? '?' : '&') + 'tour=' + o.tour + '&voltar=' + volta(o.id) };
        h = '<h2>🕹️ ' + T(U.praticar) + '</h2><div class="pratica"><span class="pratica-masc">' + PERSONAGEM('pixel', 4) + '</span><div><p class="pratica-txt">' + T(a.praticar.texto) + '</p>' +
          (a.praticar.opcoes ? '' : '<a class="btn amarelo grande" href="' + url({ pagina: a.praticar.pagina, tour: a.praticar.tour, id: 'unica' }) + '">▶ ' + T({ pt: 'Começar a prática guiada', es: 'Empezar la práctica guiada' }) + '</a>') + '</div></div>' +
          (a.praticar.opcoes ? '<div class="jeitos">' + a.praticar.opcoes.map(function (o, i) {
            var feito = fp[mid + '/' + aid + '/' + o.id];
            return '<a class="jeito' + (i === 0 ? ' principal' : '') + (feito ? ' feito' : '') + (Q.get('feito') === o.id ? ' pop' : '') + '" href="' + url(o) + '"><span class="n">' + (feito ? '✓' : i + 1) + '</span><span class="ic">' + o.icone + '</span><div><b>' + T(o.tit) + (o.selo ? ' <em>' + T(o.selo) + '</em>' : '') + '</b><p>' + T(o.txt) + '</p></div><span class="ir">▶</span></a>'
          }).join('') + '</div><p class="miudo">💡 ' + T({ pt: 'Se um jeito não estiver disponível, tente o próximo. Ao terminar um tutorial, você volta para cá.', es: 'Si una forma no está disponible, prueba la siguiente. Al terminar un tutorial, vuelves aquí.' }) + '</p>' : '<p class="miudo">' + T({ pt: 'Ao terminar, você volta para esta aula, no passo Atender.', es: 'Al terminar, vuelves a esta clase, en el paso Atender.' }) + '</p>');
      }
      else if (p === 'atender') h = '<h2>🎧 ' + T(U.atender) + '</h2>' + chat([['marina', a.atender.cena]]) + '<b>' + T(a.atender.pergunta) + '</b><div class="opcoes">' + ordemOpcoes(a.atender.opcoes, mid + '/' + aid).map(function (i) { var o = a.atender.opcoes[i]; return '<button class="opcao" data-op="' + i + '">' + T(o.txt) + '</button>' }).join('') + '</div>' +
        (a.cola ? colaHtml(a.cola, 'cola__' + mid + '__' + aid) : '') + (a.gancho ? '<p class="fio depois">➡️ <b>' + T({ pt: 'Na próxima aula:', es: 'En la próxima clase:' }) + '</b> ' + T(a.gancho) + '</p>' : '');
      $('#palco').innerHTML = h; $('#palco').classList.remove('mv-troca'); void $('#palco').offsetWidth; $('#palco').classList.add('mv-troca'); mov().cascata($('#palco'));
      if (p === 'entender' && !chatVisto) { chatVisto = true; var pts = $('#palco .pontos'); if (pts) pts.classList.add('mv-oculta'); mov().chat($('#palco'), function () { if (pts) { pts.classList.remove('mv-oculta'); pts.classList.add('mv-chega') } }) }
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
        if (op.certa) mov().confete(o);
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
        if (op.certa) mov().confete(o);
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
    if (tela !== 'aula') mov().cascata($('.pl-main'));
  }
  function inicia() {
    // cada prática começa do zero: sem F12, sem Consultor de Dados aberto, sem tutorial peel objetivode
    try { ['loja.labLoja', 'loja.daAberto', 'tour.ativo', 'tour.volta'].forEach(function (k) { sessionStorage.removeItem(k) }); localStorage.setItem('loja.aulaAberta', 'false') } catch (e) { }
    window.PLAT_PORTA(monta)
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inicia); else inicia();
})();
