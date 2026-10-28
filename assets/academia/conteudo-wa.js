/* Módulo extra “Problemas do WhatsApp Business” — SÓ na Trilha Completa (decisão de 28/10/2026).
   As aulas foram escritas no módulo separado de 27/10 (assets/wa/aulas/aNN.js, formato próprio) e aqui viram aulas da Lojinha,
   com as mesmas partes de sempre: Entender (a conversa) · Ver de perto · Praticar (tutorial guiado em meta-wacel.html) · Atender (as perguntas) · Fontes.
   Precisa de: conteudo.js, ferramentas.js, assets/wa/nucleo.js, assets/wa/aulas/trilha.js e aNN.js carregados antes. */
(function () {
  var N = window.N; if (!N || !window.AULAS || !window.MODULOS) return;
  var MID = 'wa-problemas';
  var quem = { m: 'marina', r: 'rafa', dica: 'pixel', p: 'pixel' };
  var L = function (x) { return x && typeof x === 'object' && 'pt' in x ? x : { pt: String(x || ''), es: String(x || '') } };
  var sem = function (s) { return String(s || '').replace(/<[^>]+>/g, '') };

  window.MODULOS.push({ id: MID, extra: true, status: 'construcao', icone: '🛟', titulo: { pt: 'WhatsApp Business · problemas comuns', es: 'WhatsApp Business · problemas comunes' },
    resumo: { pt: 'App ou API, código que não chega, conta banida ou invadida, celular novo, aparelhos conectados, perfil e selo, catálogo, pedidos, mensagens automáticas, Página e Instagram, anúncios e transmissão.', es: 'App o API, código que no llega, cuenta suspendida o robada, celular nuevo, dispositivos vinculados, perfil e insignia, catálogo, pedidos, mensajes automáticos, Página e Instagram, anuncios y difusión.' } });
  var tc = (window.TRILHAS || []).filter(function (t) { return t.id === 'completa' })[0];
  if (tc && tc.extras.indexOf(MID) < 0) tc.extras.unshift(MID);

  /* “Ver de perto” do módulo: os blocos da aula, no visual da Lojinha */
  function verHTML(A, T) {
    if (typeof A.verDePerto === 'function') return A.verDePerto(N.t);
    return (A.verDePerto || []).map(function (b) {
      var k = b[0], x = function (i) { return T({ pt: b[i], es: b[i + 1] }) };
      if (k === 'h') return '<h3>' + x(1) + '</h3>';
      if (k === 'p') return '<p>' + x(1) + '</p>';
      if (k === 'nota') return '<p class="miudo">' + x(1) + '</p>';
      if (k === 'caixa') return '<div class="wa-caixa"><b>' + x(1) + '</b><p>' + x(3) + '</p></div>';
      if (k === 'ol' || k === 'ul') return '<' + k + ' class="wa-lista">' + b[1].map(function (i) { return '<li>' + T({ pt: i[0], es: i[1] }) + '</li>' }).join('') + '</' + k + '>';
      return '';
    }).join('');
  }
  function pergunta(q) {
    return { pergunta: L(q.p), opcoes: q.ops.map(function (o, j) { return { certa: j === q.certa, txt: L(o), fb: L(q.por[j]) } }) };
  }

  var lista = [];
  N.TRILHA.forEach(function (it, k) {
    var A = N.AULAS[it.id], prox = N.TRILHA[k + 1];
    if (!A) { lista.push({ id: it.id, soCompleta: true, status: 'planejada', titulo: it.titulo }); return }
    var chat = A.chat || [], antes = null, dialogo = [];
    chat.forEach(function (m) {
      var tx = L(m[1]);
      if (m[0] === 'sis') antes = { pt: sem(tx.pt).replace(/^Onde estamos:\s*/, ''), es: sem(tx.es).replace(/^Dónde estamos:\s*/, '') };
      else dialogo.push([quem[m[0]] || 'rafa', tx]);
    });
    var cena = (chat.filter(function (m) { return m[0] === 'm' })[0] || [0, ''])[1];
    var Q = (A.quiz || []).map(pergunta), at = Q[0] ? { cena: L(cena), pergunta: Q[0].pergunta, opcoes: Q[0].opcoes, mais: Q.slice(1) } : null;
    var fer = 'wa-ver-' + it.id;
    window.FERRAMENTAS[fer] = { titulo: it.titulo, montar: function (el, T) { el.innerHTML = '<div class="wa-ver">' + verHTML(A, T) + '</div>' } };
    lista.push({
      id: it.id, soCompleta: true, min: A.min || 7, status: 'pronta',
      titulo: it.titulo, objetivo: A.objetivo, antes: antes,
      gancho: prox ? { pt: '“' + prox.titulo.pt + '”', es: '“' + prox.titulo.es + '”' } : null,
      entender: { dialogo: dialogo, pontos: [], notas: A.telas },
      ferramenta: fer,
      praticar: A.praticar ? { texto: A.praticar.intro, tour: 'wa-' + it.id, pagina: 'meta-wacel.html?aula=' + it.id } : null,
      atender: at,
      fontes: (A.fontes || []).map(function (f) { return { url: f.url, titulo: L(f.tit), conferido: f.data } }),
      divergencias: A.divergencias, telas: A.telas
    });
  });
  window.AULAS[MID] = lista;
})();
