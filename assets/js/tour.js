/* Tutorial guiado (holofote + Pixel explicando), o mesmo em qualquer página do site.
   - Os roteiros ficam em window.TOURS[nome] = [passos]. Cada passo:
       { alvo: 'seletor' | function(){return elemento}, tit, txt, dica?, clique?: true (avança ao clicar no alvo),
         cond?: function(){return true quando pode avançar}, fim?: true, pagina?: 'loja.html' (passo em outra página),
         garante?: function(){arruma a tela para este passo — roda quando a pessoa VOLTA com ◀}, semVolta?: true }
   - Ao voltar, o tutorial reabre a página onde aquele passo aconteceu e chama garante().
   - Inicia com ?tour=nome na URL ou TOUR.inicia('nome'). Continua entre páginas (sessionStorage).
   - Ao terminar volta para ?voltar=... (ex.: a aula). Textos {pt, es}. */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(o) { return o == null ? '' : typeof o === 'string' ? o : (o[LANG] || o.pt || '') }
  var UI = { passo: { pt: 'Passo', es: 'Paso' }, de: { pt: 'de', es: 'de' }, prox: { pt: 'Próximo ▶', es: 'Siguiente ▶' }, fim: { pt: 'Concluir 🎉', es: 'Terminar 🎉' },
    clique: { pt: '👆 clique no destaque', es: '👆 haz clic en lo destacado' }, sair: { pt: 'Sair do tutorial', es: 'Salir del tutorial' }, procura: { pt: 'Procurando o próximo lugar…', es: 'Buscando el siguiente lugar…' } };
  var css = '.tg-holo{position:fixed;z-index:2147483000;border-radius:10px;box-shadow:0 0 0 9999px rgba(14,24,44,.55);outline:3px solid #F2B632;outline-offset:3px;pointer-events:none;transition:all .35s cubic-bezier(.3,.1,.2,1);animation:tgPulso 1.6s infinite}' +
    '@keyframes tgPulso{50%{outline-offset:7px}}' +
    '.tg-balao{position:fixed;z-index:2147483001;width:370px;max-width:calc(100vw - 24px);background:#fff;border:3px solid #16294A;border-radius:14px;box-shadow:5px 5px 0 #16294A;padding:24px 14px 12px 74px;font:15px/1.45 "Segoe UI",system-ui,Arial,sans-serif;color:#16294A;transition:top .35s,left .35s}' +
    '.tg-balao .tg-masc{position:absolute;left:10px;top:12px;animation:tgBoing 1.2s ease-in-out infinite}@keyframes tgBoing{50%{transform:translateY(-5px)}}' +
    '.tg-balao b{display:block;font-size:16px;margin-bottom:3px}.tg-balao p{margin:0 0 8px;color:#3A4D6B}' +
    '.tg-dica{background:#FFF4D6;border-radius:8px;padding:6px 8px;font-size:13px;color:#5E4300}' +
    '.tg-ctrl{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:10px}.tg-ctrl small{color:#64748B;white-space:nowrap}' +
    '.tg-ctrl span{display:flex;gap:6px;align-items:center;white-space:nowrap}' +
    '.tg-btn{padding:7px 12px;border-radius:9px;border:2px solid #16294A;background:#2F6FD6;color:#fff;font-weight:800;cursor:pointer;box-shadow:2px 2px 0 #16294A}.tg-btn.sec{background:#fff;color:#16294A}.tg-btn[disabled]{opacity:.45;cursor:default}' +
    '.tg-sair{position:absolute;top:4px;right:8px;border:0;background:none;color:#64748B;cursor:pointer;font-size:12px}' +
    '@media (max-width:480px){.tg-ctrl{flex-wrap:wrap}.tg-balao{padding-left:14px}.tg-balao .tg-masc{display:none}}';
  var holo, balao, tour, nome, passo = 0, timer;
  var voltar = null, paginas = {};   // paginas[passo] = página onde o passo foi mostrado (para o ◀ voltar)
  function aqui() { return (location.pathname.split('/').pop() || 'index.html') + (location.hash || '') }   // página + tela (#...) dos simuladores
  function salva() { try { if (tour) sessionStorage.setItem('tour.ativo', JSON.stringify({ nome: nome, passo: passo, voltar: voltar, paginas: paginas })); else sessionStorage.removeItem('tour.ativo') } catch (e) { } }
  function alvoEl(p) { try { return typeof p.alvo === 'function' ? p.alvo() : document.querySelector(p.alvo) } catch (e) { return null } }
  function masc() { return window.PERSONAGEM ? window.PERSONAGEM('pixel', 3) : '' }
  function monta() {
    if (holo) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    holo = document.createElement('div'); holo.className = 'tg-holo'; balao = document.createElement('div'); balao.className = 'tg-balao';
    document.body.appendChild(holo); document.body.appendChild(balao);
    balao.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tg]'); if (!b) return; var a = b.getAttribute('data-tg');
      if (a === 'prox') vai(passo + 1); else if (a === 'volta') volta(); else if (a === 'fim' || a === 'sair') termina(a === 'fim');
    });
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
  function volta() {   // volta ao passo anterior que mostra algo (pula para trás os que foram pulados)
    var n = passo - 1; while (n > 0 && !(n in paginas)) n--; vai(Math.max(0, n), true);
  }
  function desenha() {
    var p = tour[passo], prox = !p.clique && !p.fim; paginas[passo] = aqui(); salva();
    balao.innerHTML = '<button class="tg-sair" data-tg="sair">✕ ' + T(UI.sair) + '</button><span class="tg-masc">' + masc() + '</span><b>' + T(p.tit) + '</b><p>' + T(p.txt) + '</p>' +
      (p.dica ? '<div class="tg-dica">💬 Pixel: ' + T(p.dica) + '</div>' : '') +
      '<div class="tg-ctrl"><small>' + T(UI.passo) + ' ' + (passo + 1) + ' ' + T(UI.de) + ' ' + tour.length + '</small><span>' + (passo && !p.semVolta ? '<button class="tg-btn sec" data-tg="volta" title="' + T({ pt: 'Passo anterior', es: 'Paso anterior' }) + '">◀</button>' : '') +
      (p.fim ? '<button class="tg-btn" data-tg="fim">' + T(UI.fim) + '</button>' : prox ? '<button class="tg-btn" data-tg="prox">' + T(UI.prox) + '</button>' : '<small>' + T(UI.clique) + '</small>') + '</span></div>';
    p.antes && p.antes();
    posiciona();
  }
  function posiciona() {
    if (!tour || !holo) return; var p = tour[passo]; if (!p) return; var el = alvoEl(p);
    var bt = balao.querySelector('[data-tg=prox]'); if (bt && p.cond) bt.disabled = !p.cond();
    if (!el || !el.getClientRects().length) { holo.style.opacity = 0; balao.style.left = Math.max(10, (innerWidth - balao.offsetWidth) / 2) + 'px'; balao.style.top = '90px'; return }
    if (!p._rolou) { p._rolou = true; el.scrollIntoView({ block: 'center', behavior: 'smooth' }); setTimeout(posiciona, 400); return }
    var r = el.getBoundingClientRect(); holo.style.opacity = 1;
    holo.style.left = r.left - 4 + 'px'; holo.style.top = r.top - 4 + 'px'; holo.style.width = r.width + 8 + 'px'; holo.style.height = r.height + 8 + 'px';
    var bw = balao.offsetWidth, bh = balao.offsetHeight, x = r.right + 18, y = r.top;
    if (x + bw > innerWidth - 10) { x = r.left - bw - 18; if (x < 10) { x = Math.max(10, Math.min(r.left, innerWidth - bw - 10)); y = r.bottom + 16; if (y + bh > innerHeight - 10) y = r.top - bh - 16 } }
    balao.style.left = Math.max(10, Math.min(x, innerWidth - bw - 10)) + 'px'; balao.style.top = Math.max(10, Math.min(y, innerHeight - bh - 10)) + 'px';
  }
  function termina(concluiu) {
    var v = voltar; tour = null; salva(); clearInterval(timer);
    if (holo) { holo.remove(); balao.remove(); holo = balao = null }
    if (concluiu && v) location.href = v;
  }
  window.TOUR = {
    inicia: function (n, p0, volta, pgs, atras) {
      if (!window.TOURS || !window.TOURS[n]) return; tour = window.TOURS[n]; nome = n; voltar = volta || null; paginas = pgs || {}; monta();
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
