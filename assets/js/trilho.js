/* PILOTO (isolado): o primeiro tutorial de um módulo começa na página inicial e leva a pessoa, passo a passo,
   até o simulador (Início › Módulos › o módulo › a aula › Praticar › simulador), e daí segue o tutorial normal.
   Os outros tutoriais do módulo continuam como sempre (abrem direto no simulador).
   - Só mexe nos tutoriais listados em TRILHOS. Nada mais no site muda. Para desligar: apagar a linha do tutorial em TRILHOS.
   - Entrada: na lista “Como fazer…” (laboratorio.html#como) o link do tutorial piloto passa a abrir index.html?tour=<trilho>.
   - Este arquivo é carregado nas páginas da plataforma (index, modulos, modulo, aula-plataforma, laboratorio) e na página do simulador do piloto. */
(function () {
  var TRILHOS = {
    'verificar-empresa': { id: 'trilho-verificar-empresa', modulo: 'portfolio-avancado', aula: '01', cauda: 6 }   // cauda = quantos passos tem o tutorial normal (só para a contagem “Passo x de y” ser a mesma em todas as páginas)
  };
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return { pt: pt, es: es } }
  var TOURS = window.TOURS = window.TOURS || {};

  Object.keys(TRILHOS).forEach(function (base) {
    var cfg = TRILHOS[base], mod = cfg.modulo, aula = cfg.aula;
    var prefixo = [
      { tit: T('Vamos achar o tutorial 🧭', '¡Vamos a encontrar el tutorial! 🧭'),
        txt: T('Vou te levar da página inicial até o simulador, como você faria sozinha. Primeiro, clique em Módulos.', 'Te llevaré desde la página de inicio hasta el simulador, como lo harías sola. Primero, haz clic en Módulos.'), clique: true,
        alvo: function () { return document.querySelector('header nav a[href="modulos.html"]') || document.querySelector('a[href="modulos.html"]') } },
      { tit: T('O módulo', 'El módulo'), txt: T('Aqui estão todos os módulos. Clique no módulo do tutorial.', 'Aquí están todos los módulos. Haz clic en el módulo del tutorial.'), clique: true,
        alvo: function () { return document.querySelector('a.item[href="modulo.html?m=' + mod + '"]') } },
      { tit: T('A aula', 'La clase'), txt: T('Cada módulo tem aulas. Este tutorial é da aula 01: clique nela.', 'Cada módulo tiene clases. Este tutorial es de la clase 01: haz clic en ella.'), clique: true,
        alvo: function () { return document.querySelector('a.aula-l[href*="a=' + aula + '"]') } },
      { tit: T('As etapas da aula', 'Las etapas de la clase'), txt: T('A aula tem 4 etapas: Entender, Ver de perto, Praticar e Atender. O tutorial guiado fica em Praticar: clique nele.', 'La clase tiene 4 etapas: Entender, Ver de cerca, Practicar y Atender. El tutorial guiado está en Practicar: haz clic en él.'), clique: true,
        alvo: function () { return [].slice.call(document.querySelectorAll('button')).filter(function (b) { return /Praticar|Practicar/.test(b.textContent) && /\d/.test(b.textContent) })[0] } },
      { tit: T('Começar a prática', 'Empezar la práctica'), txt: T('Este é o botão da prática guiada. Clique para abrir o simulador.', 'Este es el botón de la práctica guiada. Haz clic para abrir el simulador.'), clique: true,
        alvo: function () { return document.querySelector('a.btn.amarelo.grande') } }
    ];
    var N = prefixo.length;
    // o passo N em diante vem do tutorial normal (que só existe na página do simulador): montado na hora em que é pedido
    Object.defineProperty(TOURS, cfg.id, { configurable: true, enumerable: true, get: function () {
      var cauda = Object.getOwnPropertyDescriptor(TOURS, base) ? TOURS[base] : null;
      if (cauda) return prefixo.concat(cauda);
      var vazio = []; for (var i = 0; i < cfg.cauda; i++) vazio.push({ alvo: 'body', tit: '', txt: '' });
      return prefixo.concat(vazio);
    } });

    // chegando no simulador pelo trilho: não reinicia o tutorial normal; continua o trilho no passo N
    var st = null; try { st = JSON.parse(sessionStorage.getItem('tour.ativo') || 'null') } catch (e) { }
    var q = new URLSearchParams(location.search);
    if (q.get('tour') === base && st && st.nome === cfg.id && st.passo === N && /aula-plataforma/.test(document.referrer || '')) {
      q.delete('tour'); try { history.replaceState(null, '', location.pathname + (q.toString() ? '?' + q.toString() : '') + location.hash) } catch (e) { }
    }
  });

  // as páginas da plataforma apagam o estado do tutorial ao abrir (“cada prática começa do zero”); o trilho precisa atravessar essas páginas,
  // então guarda o estado dele e devolve logo depois (sem mexer no plataforma.js)
  (function () {
    var K = 'tour.ativo', salvo = null;
    try { var v = sessionStorage.getItem(K); if (v && /"nome":"trilho-/.test(v)) salvo = v } catch (e) { }
    if (!salvo) return;
    function devolve() { try { if (!sessionStorage.getItem(K)) sessionStorage.setItem(K, salvo) } catch (e) { } }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(devolve, 30) }); else setTimeout(devolve, 30);
  })();

  // entrada: na lista “Como fazer…”, o link do tutorial piloto começa pela página inicial
  function religa() {
    [].forEach.call(document.querySelectorAll('a.como-ir'), function (a) {
      var m = /[?&]tour=([a-z0-9_-]+)/i.exec(a.getAttribute('href') || ''); if (!m || !TRILHOS[m[1]] || a.getAttribute('data-trilho')) return;
      var v = /[?&]voltar=([^&]+)/.exec(a.getAttribute('href')); a.setAttribute('data-trilho', '1');
      a.setAttribute('href', 'index.html?tour=' + TRILHOS[m[1]].id + (v ? '&voltar=' + v[1] : ''));
      a.title = (LANG === 'es' ? 'Empieza en la página de inicio y te lleva hasta el simulador. ' : 'Começa na página inicial e leva até o simulador. ') + (a.title || '');
    });
  }
  if (document.querySelector('#como, .como-ir')) { religa(); new MutationObserver(religa).observe(document.body, { childList: true, subtree: true }) }
  else document.addEventListener('DOMContentLoaded', function () { religa(); new MutationObserver(religa).observe(document.body, { childList: true, subtree: true }) });
})();
