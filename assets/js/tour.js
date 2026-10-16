/* ↩ Voltar à aula: depois do tutorial a pessoa fica para explorar à vontade; o botão no canto leva de volta quando ela quiser.
   Guardado na aba (sessionStorage 'tour.volta'); a plataforma apaga ao chegar na aula. */
window.VOLTA_AULA = window.VOLTA_AULA || (function () {
  var K = 'tour.volta', SEG = /^[a-z0-9_-]+\.html([?#][^\s<>\"']*)?$/i;
  function lang() { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } }
  function le() { try { var v = sessionStorage.getItem(K); return v && SEG.test(v) ? v : null } catch (e) { return null } }
  function mostra() {
    var v = le(), b = document.getElementById('tgVolta'); if (!v) { if (b) b.remove(); return }
    if (b || !document.body) return;
    var lab = /^laboratorio/.test(v), es = lang() === 'es';
    if (!document.getElementById('tgVoltaCss')) { var st = document.createElement('style'); st.id = 'tgVoltaCss';
      st.textContent = '.tg-volta{position:fixed;left:16px;bottom:16px;z-index:2147483600;display:inline-flex;align-items:center;gap:6px;padding:10px 16px;border-radius:12px;border:2px solid #16294A;background:#fff;color:#16294A;font:800 14px "Segoe UI",system-ui,Arial,sans-serif;text-decoration:none;box-shadow:3px 3px 0 #16294A;cursor:pointer}.tg-volta:hover{background:#FFE07A}body.em-tour .tg-volta{display:none}';
      document.head.appendChild(st) }
    b = document.createElement('a'); b.id = 'tgVolta'; b.className = 'tg-volta'; b.href = v;
    b.textContent = '↩ ' + (lab ? (es ? 'Volver al Laboratorio' : 'Voltar ao Laboratório') : (es ? 'Volver a la clase' : 'Voltar à aula'));
    b.onclick = function () { try { sessionStorage.removeItem(K) } catch (e) { } };
    document.body.appendChild(b);
  }
  function guarda(v) { if (!v || !SEG.test(v)) return; try { sessionStorage.setItem(K, v) } catch (e) { } mostra() }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mostra); else setTimeout(mostra, 0);
  return { guarda: guarda, mostra: mostra };
})();
/* Tutorial guiado (holofote + Pixel explicando), o mesmo em qualquer página do site.
   - Os roteiros ficam em window.TOURS[nome] = [passos]. Cada passo:
       { alvo: 'seletor' | function(){return elemento}, tit, txt, dica?, clique?: true (avança ao clicar no alvo),
         cond?: function(){return true quando pode avançar}, fim?: true, pagina?: 'loja.html' (passo em outra página),
         garante?: function(){arruma a tela para este passo — roda quando a pessoa VOLTA com ◀}, semVolta?: true,
         valida?: function(alvoClicado){só avança se true}, erro?: {pt,es}, livre?: 'seletor' (pode clicar sem avançar), bloqueia?: function(alvoClicado){true = escolha errada, não deixa} }
   - Ao voltar, o tutorial reabre a página onde aquele passo aconteceu e chama garante().
   - Inicia com ?tour=nome na URL ou TOUR.inicia('nome'). Continua entre páginas (sessionStorage).
   - Ao terminar volta para ?voltar=... (ex.: a aula). Textos {pt, es}. */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(o) { return o == null ? '' : typeof o === 'string' ? o : (o[LANG] || o.pt || '') }
  var UI = { passo: { pt: 'Passo', es: 'Paso' }, de: { pt: 'de', es: 'de' }, prox: { pt: 'Próximo ▶', es: 'Siguiente ▶' }, fim: { pt: 'Concluir 🎉', es: 'Terminar 🎉' },
    clique: { pt: '👆 clique no destaque', es: '👆 haz clic en lo destacado' }, sair: { pt: 'Sair do tutorial', es: 'Salir del tutorial' }, procura: { pt: 'Procurando o próximo lugar…', es: 'Buscando el siguiente lugar…' } };
  var css = '.tg-recorte{position:fixed;z-index:2147482999;border-radius:16px;box-shadow:0 0 0 9999px rgba(14,24,44,.55);pointer-events:none;opacity:0;transition:all .35s cubic-bezier(.3,.1,.2,1)}' +
    '.tg-avisa{margin-top:8px;padding:6px 8px;border-radius:8px;background:#FDE8EF;color:#9B1240;font-size:13px;font-weight:600}.tg-treme{animation:tgTreme .45s}@keyframes tgTreme{20%{margin-left:-6px}40%{margin-left:6px}60%{margin-left:-4px}80%{margin-left:3px}}' +
    '.tg-holo.na-janela{box-shadow:none}body.em-tour .fundo{background:transparent}' +
    '.tg-holo{position:fixed;z-index:2147483000;border-radius:10px;box-shadow:0 0 0 9999px rgba(14,24,44,.55);outline:3px solid #F2B632;outline-offset:3px;pointer-events:none;transition:all .35s cubic-bezier(.3,.1,.2,1);animation:tgPulso 1.6s infinite}' +
    '@keyframes tgPulso{50%{outline-offset:7px}}' +
    '.tg-balao{position:fixed;z-index:2147483001;width:370px;max-width:calc(100vw - 24px);background:#fff;border:3px solid #16294A;border-radius:14px;box-shadow:5px 5px 0 #16294A;padding:24px 14px 12px 74px;font:15px/1.45 "Segoe UI",system-ui,Arial,sans-serif;color:#16294A;transition:top .35s,left .35s}' +
    '.tg-balao .tg-masc{position:absolute;left:10px;top:12px;animation:tgBoing 1.2s ease-in-out infinite}@keyframes tgBoing{50%{transform:translateY(-5px)}}' +
    '.tg-balao b{display:block;font-size:16px;margin-bottom:3px}.tg-balao p{margin:0 0 8px;color:#3A4D6B}' +
    '.tg-dica{background:#FFF4D6;border-radius:8px;padding:6px 8px;font-size:13px;color:#5E4300}' +
    '.tg-ctrl{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:10px}.tg-ctrl small{color:#64748B;white-space:nowrap}' +
    '.tg-ctrl span{display:flex;gap:6px;align-items:center;white-space:nowrap}' +
    '.tg-btn{padding:7px 12px;border-radius:9px;border:2px solid #16294A;background:#2F6FD6;color:#fff;font-weight:800;cursor:pointer;box-shadow:2px 2px 0 #16294A}.tg-btn.sec{background:#fff;color:#16294A}.tg-btn[disabled]{opacity:.45;cursor:default}' +
    '.tg-sair{position:absolute;top:4px;right:8px;border:0;background:none;color:#64748B;cursor:pointer;font-size:12px}' +
    '.tg-balao{cursor:grab}.tg-balao.arrasta{cursor:grabbing;transition:none;user-select:none}.tg-balao button{cursor:pointer}' +
    '.tg-balao.compacto{width:300px;padding-left:14px;font-size:14px}.tg-balao.compacto .tg-masc{display:none}.tg-bal-min{position:absolute;top:4px;right:124px;border:0;background:none;color:#64748B;cursor:pointer;font-size:12px}' +
    '@media (max-width:480px){.tg-ctrl{flex-wrap:wrap}.tg-balao{padding-left:14px}.tg-balao .tg-masc{display:none}}';
  var holo, balao, recorte, tour, nome, passo = 0, timer, ouvindo = false, manual = null, compacto = (function () { try { var v = sessionStorage.getItem('tour.compacto'); return v === null ? innerWidth < 760 : v === '1' } catch (e) { return false } })();
  var voltar = null, paginas = {};
  // ?voltar= só aceita uma página da própria Lojinha (nada de javascript: nem site de fora num link montado por alguém)
  function seguro(v) { return typeof v === 'string' && /^[a-z0-9_-]+\.html([?#][^\s<>\"']*)?$/i.test(v) ? v : null }   // paginas[passo] = página onde o passo foi mostrado (para o ◀ voltar)
  function aqui() { return (location.pathname.split('/').pop() || 'index.html') + (location.hash || '') }   // página + tela (#...) dos simuladores
  function salva() { try { if (tour) sessionStorage.setItem('tour.ativo', JSON.stringify({ nome: nome, passo: passo, voltar: voltar, paginas: paginas })); else sessionStorage.removeItem('tour.ativo') } catch (e) { } }
  function alvoEl(p) { try { return typeof p.alvo === 'function' ? p.alvo() : document.querySelector(p.alvo) } catch (e) { return null } }
  function masc() { return window.PERSONAGEM ? window.PERSONAGEM('pixel', 3) : '' }
  function monta() {
    if (holo) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    holo = document.createElement('div'); holo.className = 'tg-holo'; balao = document.createElement('div'); balao.className = 'tg-balao';
    recorte = document.createElement('div'); recorte.className = 'tg-recorte'; document.body.appendChild(recorte);
    document.body.appendChild(holo); document.body.appendChild(balao); document.body.classList.add('em-tour');
    balao.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tg]'); if (!b) return; var a = b.getAttribute('data-tg');
      if (a === 'compacta') { compacto = !compacto; try { sessionStorage.setItem('tour.compacto', compacto ? '1' : '0') } catch (x) { } balao.classList.toggle('compacto', compacto); posiciona(); return }
      if (a === 'prox') vai(passo + 1); else if (a === 'volta') volta(); else if (a === 'fim' || a === 'sair') termina(a === 'fim');
    });
    // arrastar o balão: a pessoa escolhe onde ele fica para poder ler o que está marcado
    var drag = null;
    balao.addEventListener('mousedown', function (e) {
      if (e.button || e.target.closest('button, a, input, select')) return; var r0 = balao.getBoundingClientRect(); drag = [e.clientX - r0.left, e.clientY - r0.top]; balao.classList.add('arrasta'); e.preventDefault();
    });
    document.addEventListener('mousemove', function (e) { if (!drag || !balao) return; manual = [Math.max(0, Math.min(e.clientX - drag[0], innerWidth - 60)), Math.max(0, Math.min(e.clientY - drag[1], innerHeight - 40))]; balao.style.left = manual[0] + 'px'; balao.style.top = manual[1] + 'px' });
    document.addEventListener('mouseup', function () { if (drag && balao) balao.classList.remove('arrasta'); drag = null });
    if (ouvindo) return; ouvindo = true;   // os 'ouvidos' da página são ligados UMA vez (antes, cada tutorial novo duplicava os cliques)
    // modo guiado sem erros: só o destaque e o balão aceitam clique (se o destaque sumiu, não trava a pessoa)
    document.addEventListener('click', function (e) {
      if (!tour || !balao || balao.contains(e.target)) return; var p = tour[passo], el = alvoEl(p); if (!p || !el) return;
      var dentro = el === e.target || el.contains(e.target), q = tour[passo + 1], el2 = q && q.clique && p.cond && !p.clique ? alvoEl(q) : null, okc = false;
      if (el2) try { okc = p.cond() } catch (x) { }
      var proximoOk = el2 && okc && (el2 === e.target || el2.contains(e.target));
      if (!dentro && p.livre && e.target.closest && e.target.closest(p.livre)) return;   // partes que o passo deixa usar (ex.: escolher o tamanho)
      if (!dentro && !proximoOk) { e.preventDefault(); e.stopImmediatePropagation(); avisa(); return }
      // passo de "leia e clique em Próximo": os botões dentro do destaque não valem (senão a tela anda e o tutorial fica para trás)
      if (dentro && !p.clique && !proximoOk && !p.bloqueia && e.target.closest && e.target.closest('button, a, [data-acao], [data-ir]') && !(p.livre && e.target.closest(p.livre))) { e.preventDefault(); e.stopImmediatePropagation(); avisa({ pt: '📖 Primeiro leia e clique em Próximo no balão.', es: '📖 Primero lee y haz clic en Siguiente en el globo.' }); return }
      if (dentro && p.bloqueia) { var bl = false; try { bl = p.bloqueia(e.target) } catch (x) { } if (bl) { e.preventDefault(); e.stopImmediatePropagation(); avisa(p.erro); return } }
      if (dentro && p.clique && p.valida) { var v = false; try { v = p.valida(e.target) } catch (x) { } if (!v) { e.preventDefault(); e.stopImmediatePropagation(); avisa(p.erro); return } }
    }, true);
    document.addEventListener('click', function (e) {
      if (!tour) return; var p = tour[passo], el = alvoEl(p);
      if (p && p.clique && el && (el === e.target || el.contains(e.target))) { var n = passo + 1; passo = n; salva(); setTimeout(function () { vai(n) }, 150) }   // salva já: o clique pode abrir outra página
      // passo com condição já cumprida + a pessoa clicou direto no destaque do PRÓXIMO passo (ex.: digitou e clicou no Avançar da janela): acompanha
      else if (p && p.cond && !p.clique && tour[passo + 1] && tour[passo + 1].clique) {
        var q = tour[passo + 1], el2 = alvoEl(q); var okc = false; try { okc = p.cond() } catch (x) { }
        if (okc && el2 && (el2 === e.target || el2.contains(e.target))) { var n2 = passo + 2; passo = n2; salva(); setTimeout(function () { vai(n2) }, 150) }
      }
    }, true);
    window.addEventListener('resize', posiciona); document.addEventListener('scroll', posiciona, true);
  }
  function vai(n, atras) {
    passo = n; salva(); var p = tour[passo]; if (!p) return termina(true);
    if (atras) {   // voltando: primeiro a página certa, depois arruma a tela
      if (paginas[n] && paginas[n] !== aqui()) {
        var pg = paginas[n].split('#');
        if (pg[0] === aqui().split('#')[0]) location.hash = pg[1] || '';   // mesma página, outra tela
        else { location.href = paginas[n]; return }
      }
      if (p.garante) try { p.garante() } catch (e) { }
      return setTimeout(desenha, 250);
    }
    if (p.pula && p.pula()) return vai(n + 1);
    if (p.pagina && location.pathname.split('/').pop() !== p.pagina) { location.href = p.pagina; return }
    desenha();
  }
  var avisoT, faltou = 0;
  function avisa(txt) {   // a pessoa clicou fora do caminho: o balão balança e explica
    if (!balao) return; var a = balao.querySelector('.tg-avisa'); if (!a) { a = document.createElement('div'); a.className = 'tg-avisa'; balao.appendChild(a) }
    a.textContent = txt ? T(txt) : T({ pt: '👆 Siga o destaque amarelo (ou use os botões do balão).', es: '👆 Sigue lo destacado en amarillo (o usa los botones del globo).' });
    balao.classList.remove('tg-treme'); void balao.offsetWidth; balao.classList.add('tg-treme'); clearTimeout(avisoT); avisoT = setTimeout(function () { if (a.parentNode) a.remove() }, 3500);
  }
  function volta() {   // volta ao passo anterior que mostra algo (pula para trás os que foram pulados)
    var n = passo - 1; while (n > 0 && !(n in paginas)) n--; vai(Math.max(0, n), true);
  }
  function desenha() {
    var p = tour[passo], prox = !p.clique && !p.fim; paginas[passo] = aqui(); salva(); faltou = 0; p._consertou = false; manual = null;
    balao.classList.toggle('compacto', compacto);
    balao.innerHTML = '<button class="tg-sair" data-tg="sair">✕ ' + T(UI.sair) + '</button><button class="tg-bal-min" data-tg="compacta" title="' + T({ pt: 'Balão menor / maior (e dá para arrastá-lo)', es: 'Globo más pequeño / grande (y se puede arrastrar)' }) + '">' + T({ pt: '↔ menor/maior', es: '↔ menor/mayor' }) + '</button><span class="tg-masc">' + masc() + '</span><b>' + T(p.tit) + '</b><p>' + T(p.txt) + '</p>' +
      (p.dica ? '<div class="tg-dica">💬 Pixel: ' + T(p.dica) + '</div>' : '') +
      '<div class="tg-ctrl"><small>' + T(UI.passo) + ' ' + (passo + 1) + ' ' + T(UI.de) + ' ' + tour.length + '</small><span>' + (passo && !p.semVolta ? '<button class="tg-btn sec" data-tg="volta" title="' + T({ pt: 'Passo anterior', es: 'Paso anterior' }) + '">◀</button>' : '') +
      (p.fim ? '<button class="tg-btn" data-tg="fim">' + T(UI.fim) + '</button>' : prox ? '<button class="tg-btn" data-tg="prox">' + T(UI.prox) + '</button>' : '<small>' + T(UI.clique) + '</small>') + '</span></div>';
    p.antes && p.antes();
    posiciona();
  }
  // região "de contexto" do destaque: o próprio destaque + o grupo em que ele está + os irmãos logo abaixo/acima (o texto que a pessoa precisa ler)
  var GRUPO = 'fieldset, .vf-caixa, .cartao, .card, ul, ol, table, form, section, [role=radiogroup], [role=list], .ga-grupo';
  function contexto(el, r) {
    var H = innerHeight, u = { left: r.left, top: r.top, right: r.right, bottom: r.bottom };
    function uniao(b) { if (!b || !b.width || !b.height) return; u.left = Math.min(u.left, b.left); u.top = Math.min(u.top, b.top); u.right = Math.max(u.right, b.right); u.bottom = Math.max(u.bottom, b.bottom) }
    try {
      var g = el.parentElement && el.parentElement.closest(GRUPO); if (g) { var rg = g.getBoundingClientRect(); if (rg.height < H * .8 && rg.width < innerWidth * .98) uniao(rg) }
      var n = el, k;
      for (k = 0; k < 3 && (n = n.nextElementSibling); k++) { var rn = n.getBoundingClientRect(); if (rn.top - u.bottom < 60) uniao(rn) }
      n = el; for (k = 0; k < 1 && (n = n.previousElementSibling); k++) { var rp = n.getBoundingClientRect(); if (u.top - rp.bottom < 40) uniao(rp) }
    } catch (e) { }
    u.width = u.right - u.left; u.height = u.bottom - u.top; return u;
  }
  function lugarBalao(caixa, alvo, bw, bh, topo, ctx) {
    var W = innerWidth, H = innerHeight, m = 12, cx = ctx || caixa, c = [];
    function add(x, y) { c.push([x, y]) }
    [caixa, cx].forEach(function (b) {
      add(b.right + 18, b.top); add(b.right + 18, b.bottom - bh); add(b.left - bw - 18, b.top); add(b.left - bw - 18, b.bottom - bh);
      add(b.left, b.bottom + 16); add(b.right - bw, b.bottom + 16); add(b.left, b.top - bh - 16); add(b.right - bw, b.top - bh - 16);
    });
    add(W - bw - m, H - bh - m); add(m, H - bh - m); add((W - bw) / 2, H - bh - m); add(W - bw - m, topo); add(m, topo); add((W - bw) / 2, topo);
    function ajusta(p) { return [Math.max(m, Math.min(p[0], W - bw - m)), Math.max(topo, Math.min(p[1], H - bh - m))] }
    function cobre(p, r) { var x = Math.max(0, Math.min(p[0] + bw, r.right) - Math.max(p[0], r.left)), y = Math.max(0, Math.min(p[1] + bh, r.bottom) - Math.max(p[1], r.top)); return x * y }
    var melhor = null, nota = 1e18, ax = (alvo.left + alvo.right) / 2, ay = (alvo.top + alvo.bottom) / 2;
    c.forEach(function (p) {
      var a = ajusta(p), d = Math.abs(a[0] + bw / 2 - ax) + Math.abs(a[1] + bh / 2 - ay);
      var n = cobre(a, alvo) * 1e6 + cobre(a, caixa) * 1e3 + cobre(a, cx) * 20 + d;   // nunca cobre o destaque; depois a janela; depois o texto em volta; por fim fica perto
      if (n < nota) { nota = n; melhor = a }
    });
    return melhor;
  }
  function posiciona() {
    if (!tour || !holo) return; var p = tour[passo]; if (!p) return; var el = alvoEl(p);
    var bt = balao.querySelector('[data-tg=prox]'); if (bt && p.cond) bt.disabled = !p.cond();
    // destaque sumiu (a página recarregou, a janela fechou…): depois de ~1,5 s o passo arruma a tela sozinho, uma vez
    if (!el || !el.getClientRects().length) { if (++faltou >= 3 && p.garante && !p._consertou) { p._consertou = true; try { p.garante() } catch (e) { } }
      holo.style.opacity = 0; recorte.style.opacity = 0; balao.style.left = Math.max(10, (innerWidth - balao.offsetWidth) / 2) + 'px'; balao.style.top = '90px'; return }
    if (!p._rolou) { p._rolou = true; el.scrollIntoView({ block: 'center', behavior: 'smooth' }); setTimeout(posiciona, 400); return }
    var r = el.getBoundingClientRect(); holo.style.opacity = 1;
    // dentro de uma janela/painel: a janela inteira fica visível; só o resto da tela escurece
    var cx = el.closest && el.closest('.janela, [role=dialog], .da-painel, .ma-panel, .tg-caixa'); if (cx === el) cx = null;
    holo.classList.toggle('na-janela', !!cx);
    if (cx) { var rc = cx.getBoundingClientRect(); recorte.style.opacity = 1; recorte.style.left = rc.left + 'px'; recorte.style.top = rc.top + 'px'; recorte.style.width = rc.width + 'px'; recorte.style.height = rc.height + 'px'; recorte.style.borderRadius = getComputedStyle(cx).borderTopLeftRadius }
    else recorte.style.opacity = 0;
    holo.style.left = r.left - 4 + 'px'; holo.style.top = r.top - 4 + 'px'; holo.style.width = r.width + 8 + 'px'; holo.style.height = r.height + 8 + 'px';
    if (manual) { balao.style.left = manual[0] + 'px'; balao.style.top = manual[1] + 'px'; return }
    var pos = lugarBalao(cx ? cx.getBoundingClientRect() : r, r, balao.offsetWidth, balao.offsetHeight, 10, cx ? null : contexto(el, r));
    balao.style.left = pos[0] + 'px'; balao.style.top = pos[1] + 'px';
  }
  function termina(concluiu) {
    var v = voltar; tour = null; salva(); clearInterval(timer);
    if (holo) { holo.remove(); balao.remove(); recorte.remove(); holo = balao = recorte = null } document.body.classList.remove('em-tour');
    if (seguro(v)) window.VOLTA_AULA.guarda(v);   // não leva embora: a pessoa explora à vontade e volta pelo botão do canto
  }
  window.TOUR = {
    inicia: function (n, p0, volta, pgs, atras) {
      if (!window.TOURS || !window.TOURS[n]) return; tour = window.TOURS[n]; nome = n; voltar = seguro(volta); paginas = pgs || {}; monta();
      clearInterval(timer); timer = setInterval(posiciona, 500);   // acompanha painéis que abrem e conteúdo que carrega
      vai(p0 || 0, atras);
    }
  };
  function inicia() {
    var q = new URLSearchParams(location.search), st = null;
    try { st = JSON.parse(sessionStorage.getItem('tour.ativo') || 'null') } catch (e) { }
    if (q.get('tour')) window.TOUR.inicia(q.get('tour'), 0, q.get('voltar'));
    else if (st && window.TOURS && window.TOURS[st.nome]) window.TOUR.inicia(st.nome, st.passo, st.voltar, st.paginas, st.paginas && st.paginas[st.passo] === aqui());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(inicia, 300) }); else setTimeout(inicia, 300);
})();
