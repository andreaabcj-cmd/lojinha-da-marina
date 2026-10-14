/* Movimento da plataforma: leve e com a cara da Lojinha.
   - MOV.chat(caixa, fim): mensagens aparecem uma por vez, com "digitando…" antes
   - MOV.cascata(raiz): cartões entram um depois do outro
   - MOV.confete(origem): festinha curta (acertou / concluiu)
   Com "menos animação" ligado no sistema (comum em computadores de empresa), só o confete some: o resto é suave e ajuda a contar a história. */
(function () {
  var reduz = false;
  try { reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches } catch (e) { }
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();

  function cascata(raiz) {
    if (!raiz) return;
    var itens = raiz.querySelectorAll('.porta-card, .item, .aula-l, .jeito, .fase-cab, .opcao');
    for (var i = 0; i < itens.length; i++) { itens[i].style.setProperty('--i', Math.min(i, 14)); itens[i].classList.add('mv-entra') }
  }

  function chat(caixa, fim) {
    var box = caixa && caixa.querySelector('.chat');
    var itens = box ? [].slice.call(box.querySelectorAll(':scope > .msg, :scope > .chat-dica, :scope > .chat-sis')) : [];
    if (itens.length < 3) { if (fim) fim(); return function () { } }
    var i = 1, timer, acabou = false, dig = null;
    itens.forEach(function (x, k) { if (k > 0) x.classList.add('mv-oculta') });
    var pular = document.createElement('button'); pular.className = 'mv-pular'; pular.type = 'button';
    pular.textContent = LANG === 'es' ? '⏩ Mostrar todo' : '⏩ Mostrar tudo';
    box.appendChild(pular);
    function termina() {
      if (acabou) return; acabou = true; clearTimeout(timer); if (dig) dig.remove(); pular.remove();
      itens.forEach(function (x) { x.classList.remove('mv-oculta') }); if (fim) fim();
    }
    pular.onclick = termina;
    function prox() {
      if (i >= itens.length) return termina();
      var el = itens[i];
      if (el.classList.contains('msg')) {
        var lado = el.classList.contains('dir') ? 'dir' : 'esq', av = el.querySelector('.av');
        dig = document.createElement('div'); dig.className = 'msg ' + lado + ' mv-digitando';
        dig.innerHTML = (av ? av.outerHTML : '') + '<div class="bolha"><i></i><i></i><i></i></div>';
        box.insertBefore(dig, el);
        var tam = (el.textContent || '').length, espera = el.querySelector('.foto') ? 1100 : Math.min(1700, 550 + tam * 11);
        timer = setTimeout(function () { dig.remove(); dig = null; mostra(el) }, espera);
      } else timer = setTimeout(function () { mostra(el) }, 450);
    }
    function mostra(el) { el.classList.remove('mv-oculta'); el.classList.add('mv-chega'); i++; timer = setTimeout(prox, 380) }
    timer = setTimeout(prox, 500);
    return termina;
  }

  function confete(origem) {
    if (reduz) return;
    var r = origem && origem.getBoundingClientRect ? origem.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 3, width: 0, height: 0 };
    var cx = r.left + r.width / 2, cy = r.top + Math.min(r.height / 2, 40);
    var cores = ['#F2B632', '#2F6FD6', '#1E9E55', '#E0245E', '#5B3CC4', '#16294A'];
    var camada = document.createElement('div'); camada.className = 'mv-confete'; document.body.appendChild(camada);
    for (var k = 0; k < 28; k++) {
      var p = document.createElement('i'), ang = Math.random() * Math.PI * 2, dist = 60 + Math.random() * 110;
      p.style.left = cx + 'px'; p.style.top = cy + 'px'; p.style.background = cores[k % cores.length];
      p.style.setProperty('--dx', Math.cos(ang) * dist + 'px'); p.style.setProperty('--dy', Math.sin(ang) * dist - 40 + 'px');
      p.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg'); p.style.animationDelay = Math.random() * 80 + 'ms';
      camada.appendChild(p);
    }
    setTimeout(function () { camada.remove() }, 1500);
  }

  window.MOV = { reduz: reduz, cascata: cascata, chat: chat, confete: confete };
})();
