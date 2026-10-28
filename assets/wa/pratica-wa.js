/* Prática guiada das aulas de problemas do WhatsApp Business (meta-wacel.html?aula=NN) com o motor de tutoriais da Lojinha (tour.js).
   Os passos vêm das aulas (assets/wa/aulas/aNN.js): cada passo arruma a tela sozinho ao entrar (prep),
   então Voltar e Avançar de novo dão sempre o mesmo resultado. Tutorial: ?tour=wa-NN */
(function () {
  var t = N.t, T = N.T, Q = new URLSearchParams(location.search);
  var id = Q.get('aula') || ((Q.get('tour') || '').match(/^wa-(\d\d)$/) || [])[1] || '01', A = N.AULAS[id];
  var app = document.getElementById('app');
  if (!A || !A.praticar) { app.innerHTML = '<p style="padding:60px 20px">' + t(T('Aula não encontrada.', 'Clase no encontrada.')) + ' <a href="modulo.html?m=wa-problemas">' + t(T('Voltar ao módulo', 'Volver al módulo')) + '</a></p>'; return }
  var P = A.praticar, dois = P.lugares.length > 1;
  app.innerHTML = '<div class="sim-faixa">🧪 ' + t(T('Simulador de treinamento do WhatsApp Business · nada aqui vai para o WhatsApp nem para a Meta', 'Simulador de capacitación de WhatsApp Business · nada de aquí va a WhatsApp ni a Meta')) + ' · <a href="modulo.html?m=wa-problemas">← ' + t(T('voltar à plataforma', 'volver a la plataforma')) + '</a></div>' +
    '<div class="wc">' + (dois ? '<div class="wc-troca" role="tablist"><button data-lugar="cel" class="on" data-t="troca-cel">📱 ' + t(T('Celular', 'Celular')) + '</button><button data-lugar="meta" data-t="troca-meta">🖥️ ' + t(T('Computador', 'Computadora')) + '</button></div>' : '') + '<div class="wc-palco' + (dois ? ' dois' : P.lugares[0] === 'meta' ? ' so-meta' : '') + '">' +
    (P.lugares.indexOf('cel') >= 0 ? '<div class="wc-lugar ativo" data-l="cel"><h3>📱 ' + t(T('Celular da Marina · WhatsApp Business', 'Celular de Marina · WhatsApp Business')) + '</h3><div id="celEl"></div></div>' : '') +
    (P.lugares.indexOf('meta') >= 0 ? '<div class="wc-lugar' + (dois ? '' : ' ativo') + '" data-l="meta"><h3>🖥️ ' + t(P.tituloMeta || T('Meta Business Suite › Configurações', 'Meta Business Suite › Configuración')) + '</h3><div id="metaEl"></div></div>' : '') +
    '</div><p class="conferido">' + t(A.telas) + ' ' + t(T('Os textos do app em espanhol são tradução nossa (a conferir).', 'Los textos de la app en español son traducción nuestra (por confirmar).')) + '</p></div>';
  var c = document.getElementById('celEl'), m = document.getElementById('metaEl');
  if (c) CEL.montar(c); if (m) META.montar(m);
  P.comeco();
  function mostraLugar(l) {
    [].forEach.call(document.querySelectorAll('.wc-lugar'), function (e) { e.classList.toggle('ativo', e.getAttribute('data-l') === l) });
    [].forEach.call(document.querySelectorAll('.wc-troca button'), function (b) { b.classList.toggle('on', b.getAttribute('data-lugar') === l) });
  }
  document.addEventListener('click', function (e) { var b = e.target.closest && e.target.closest('.wc-troca [data-lugar]'); if (b) mostraLugar(b.getAttribute('data-lugar')) });
  // se o alvo do passo está escondido dentro de uma área com rolagem (a lista do celular, o painel da Meta), rola só essa área até ele
  function mostraAlvo() {
    try {
      var st = JSON.parse(sessionStorage.getItem('tour.ativo') || 'null'); if (!st || !window.TOURS || !TOURS[st.nome]) return;
      var p = TOURS[st.nome][st.passo], el = p && typeof p.alvo === 'string' && document.querySelector(p.alvo); if (!el) return;
      for (var r = el.parentElement; r && r !== document.body; r = r.parentElement) {
        if (r.scrollHeight > r.clientHeight + 2 && /auto|scroll/.test(getComputedStyle(r).overflowY)) {
          var a = el.getBoundingClientRect(), b = r.getBoundingClientRect();
          if (a.top < b.top || a.bottom > b.bottom) r.scrollTop += a.top - b.top - 12;
          break;
        }
      }
    } catch (e) { }
  }
  setInterval(mostraAlvo, 300);
  window.TOURS = window.TOURS || {};
  window.TOURS['wa-' + id] = P.passos.map(function (p, k) {
    var arruma = function () { if (p.onde) mostraLugar(p.onde); if (p.prep) p.prep() };
    var passo = { antes: arruma, garante: arruma, alvo: p.alvo, clique: p.clique, tit: p.tit, txt: p.txt };
    if (k === P.passos.length - 1) { passo.fim = true; passo.clique = false; passo.semVolta = true; passo.txt = { pt: t({ pt: p.txt.pt }) + ' Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: (p.txt.es || p.txt.pt) + ' Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.' } }
    return passo;
  });
})();
