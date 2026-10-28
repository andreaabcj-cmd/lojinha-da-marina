/* Núcleo do módulo “Problemas do WhatsApp Business” (veio do módulo separado de 27/10/2026 e entrou na Lojinha, Trilha Completa, em 28/10/2026):
   idioma (o mesmo da plataforma: plat.lang), textos e o registro das aulas. As aulas viram aulas da Lojinha em assets/academia/conteudo-wa.js. */
(function () {
  var W = window;
  function guardaLer(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function guardaGravar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } }

  var N = W.N = {
    lang: guardaLer('plat.lang', 'pt') === 'es' ? 'es' : 'pt',
    T: function (pt, es) { return { pt: pt, es: es } },
    /* texto no idioma atual: aceita {pt, es} ou texto solto */
    t: function (o) { if (o == null) return ''; if (typeof o === 'string') return o; return o[N.lang] != null ? o[N.lang] : o.pt },
    esc: function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) },
    $: function (s, r) { return (r || document).querySelector(s) },
    $$: function (s, r) { return [].slice.call((r || document).querySelectorAll(s)) },
    ler: guardaLer, gravar: guardaGravar,
    trocaLang: function (l) { N.lang = l; guardaGravar('plat.lang', l); document.documentElement.lang = l === 'es' ? 'es' : 'pt-BR' },
    /* progresso: { '01': { abas: {entender:1,…}, quiz: {acertos, total} } } */
    prog: guardaLer('wasup.prog', {}),
    marca: function (aula, aba) { var p = N.prog[aula] = N.prog[aula] || { abas: {} }; p.abas[aba] = 1; guardaGravar('wasup.prog', N.prog) },
    quiz: function (aula, acertos, total) { var p = N.prog[aula] = N.prog[aula] || { abas: {} }; p.quiz = { acertos: acertos, total: total }; guardaGravar('wasup.prog', N.prog) },
    zeraProg: function () { N.prog = {}; guardaGravar('wasup.prog', N.prog) },
    AULAS: {},          // conteúdo de cada aula pronta (aulas/aNN.js)
    TRILHA: [],         // a lista das 14 aulas (aulas/trilha.js)
    aviso: function (txt) {
      var a = document.createElement('div'); a.className = 'aviso'; a.setAttribute('role', 'status'); a.textContent = N.t(txt);
      document.body.appendChild(a); setTimeout(function () { a.classList.add('sai') }, 2600); setTimeout(function () { a.remove() }, 3100);
    }
  };
  document.documentElement.lang = N.lang === 'es' ? 'es' : 'pt-BR';
})();
