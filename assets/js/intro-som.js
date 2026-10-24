/* Som da intro: efeitos, "vozinhas" de personagem e trilha — tudo gerado no navegador (Web Audio), sem arquivos
   de terceiros nem licença. A trilha é composta aqui (chiptune) e muda com a história.
   Uso (feito pelo intro.js): var som = INTRO_SOM.criar(ligarJa); som.tick(tReal, tDesenho, rodando); som.ui(item);
   som.seek(t); som.ligar(true/false); som.parar(). A escolha da pessoa (ligado/mudo) fica guardada em plat.introSom. */
(function () {
  function criar(ligarJa) {
    var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
    var ac; try { ac = new AC() } catch (e) { return null }
    var pref = (function () { try { return localStorage.getItem('plat.introSom') } catch (e) { return null } })();
    var ligado = !!ligarJa && pref !== 'off';

    var mestre = ac.createGain(); mestre.gain.value = ligado ? 1 : 0; mestre.connect(ac.destination);
    var comp = ac.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 3; comp.connect(mestre);
    var musica = ac.createGain(); musica.gain.value = .3; musica.connect(comp);
    var efeitos = ac.createGain(); efeitos.gain.value = .6; efeitos.connect(comp);
    var eco = ac.createDelay(); eco.delayTime.value = .24; var volta = ac.createGain(); volta.gain.value = .3; var ecoSai = ac.createGain(); ecoSai.gain.value = .28;
    eco.connect(volta); volta.connect(eco); eco.connect(ecoSai); ecoSai.connect(comp);
    var ruido = (function () { var b = ac.createBuffer(1, ac.sampleRate, ac.sampleRate), d = b.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return b })();
    function hz(m) { return 440 * Math.pow(2, (m - 69) / 12) }

    /* ---------- instrumentos ---------- */
    function tom(o) {   // f, f2 (desliza), dur, v, tipo, a (ataque), t0, lp (filtro), eco, saida
      var t0 = o.t0 || ac.currentTime, osc = ac.createOscillator(), g = ac.createGain(), a = o.a || .006, v = o.v || .2;
      osc.type = o.tipo || 'sine'; osc.frequency.setValueAtTime(o.f, t0);
      if (o.f2) osc.frequency.exponentialRampToValueAtTime(o.f2, t0 + (o.slide || o.dur));
      if (o.detune) osc.detune.value = o.detune;
      g.gain.setValueAtTime(.0001, t0); g.gain.exponentialRampToValueAtTime(v, t0 + a); g.gain.exponentialRampToValueAtTime(.0001, t0 + o.dur);
      var no = osc; if (o.lp) { var f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = o.lp; osc.connect(f); no = f }
      no.connect(g); g.connect(o.saida || efeitos); if (o.eco) g.connect(eco);
      osc.start(t0); osc.stop(t0 + o.dur + .05);
    }
    function chiado(o) {   // ruído filtrado: f, f2, dur, v, tipo (do filtro), q, a, t0
      var t0 = o.t0 || ac.currentTime, s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain(), v = o.v || .1, a = o.a || .005;
      s.buffer = ruido; f.type = o.tipo || 'bandpass'; f.frequency.setValueAtTime(o.f || 2000, t0); if (o.f2) f.frequency.exponentialRampToValueAtTime(o.f2, t0 + o.dur); f.Q.value = o.q || 1;
      g.gain.setValueAtTime(.0001, t0); g.gain.exponentialRampToValueAtTime(v, t0 + a); g.gain.exponentialRampToValueAtTime(.0001, t0 + o.dur);
      s.connect(f); f.connect(g); g.connect(o.saida || efeitos); s.start(t0, Math.random() * .5); s.stop(t0 + o.dur + .05);
    }

    /* ---------- efeitos ---------- */
    var SFX = {
      pincel: function () { chiado({ f: 3200, q: .8, dur: .09, v: .06 }) },
      plim: function () { var t = ac.currentTime; tom({ f: hz(84), dur: .6, v: .14, t0: t, eco: 1 }); tom({ f: hz(91), dur: .9, v: .11, t0: t + .08, eco: 1 }) },
      ideia: function () { var t = ac.currentTime; chiado({ f: 800, f2: 6000, dur: .5, v: .05, t0: t, tipo: 'highpass' }); [72, 76, 79, 84, 88].forEach(function (m, i) { tom({ f: hz(m), dur: .55, v: .1, t0: t + .08 + i * .06, eco: 1 }) }) },
      pulo: function () { tom({ f: 220, f2: 660, slide: .18, dur: .22, tipo: 'square', v: .06, lp: 1800 }) },
      pouso: function () { var t = ac.currentTime; tom({ f: 140, f2: 55, slide: .12, dur: .18, v: .22, t0: t }); chiado({ f: 400, dur: .08, v: .07, t0: t, tipo: 'lowpass' }) },
      whoosh: function () { chiado({ f: 300, f2: 2400, dur: .5, v: .1, a: .15, q: .7 }) },
      liga: function () { var t = ac.currentTime; tom({ f: hz(60), dur: .25, v: .09, t0: t }); tom({ f: hz(67), dur: .45, v: .09, t0: t + .1, eco: 1 }) },
      pop: function (n) { tom({ f: hz(72 + n * 2), f2: hz(79 + n * 2), slide: .05, dur: .12, v: .11, tipo: 'triangle' }) },
      coracao: function () { tom({ f: hz(76), f2: hz(88), slide: .08, dur: .28, v: .12, eco: 1 }) },
      tique: function () { tom({ f: hz(96), dur: .04, v: .05, tipo: 'square', lp: 4000 }) },
      folha: function () { chiado({ f: 1800, f2: 600, dur: .16, v: .09, q: .6 }) },
      vibra: function () {
        var t = ac.currentTime, o = ac.createOscillator(), g = ac.createGain(), f = ac.createBiquadFilter(), lfo = ac.createOscillator(), lg = ac.createGain();
        o.type = 'sawtooth'; o.frequency.value = 130; f.type = 'lowpass'; f.frequency.value = 420; lfo.frequency.value = 22; lg.gain.value = .045; g.gain.value = .045;
        lfo.connect(lg); lg.connect(g.gain); o.connect(f); f.connect(g); g.connect(efeitos); o.start(t); lfo.start(t); o.stop(t + .6); lfo.stop(t + .6);
      },
      notif: function () { var t = ac.currentTime; tom({ f: hz(83), dur: .25, v: .09, t0: t }); tom({ f: hz(88), dur: .45, v: .09, t0: t + .11, eco: 1 }) },
      pedido: function () { var t = ac.currentTime; [76, 79, 84, 88].forEach(function (m, i) { tom({ f: hz(m), dur: .4, v: .1, t0: t + i * .07, tipo: 'triangle', eco: 1 }) }) },
      magia: function () { var t = ac.currentTime; tom({ f: 200, f2: 1600, slide: .6, dur: .7, tipo: 'sawtooth', v: .04, lp: 2200, t0: t }); [79, 83, 86, 91].forEach(function (m, i) { tom({ f: hz(m), dur: .32, v: .07, t0: t + .3 + i * .05, eco: 1 }) }) },
      chacoalha: function () { var t = ac.currentTime; for (var i = 0; i < 5; i++) chiado({ f: 2600, dur: .04, v: .045, t0: t + i * .07 }) },
      bip: function () { var t = ac.currentTime; tom({ f: hz(84), dur: .07, tipo: 'square', v: .05, t0: t, lp: 3500 }); tom({ f: hz(91), dur: .09, tipo: 'square', v: .05, t0: t + .08, lp: 3500 }) },
      swish: function () { chiado({ f: 1200, f2: 5000, dur: .3, v: .05, a: .08, tipo: 'highpass' }) },
      clique: function () { tom({ f: 1800, dur: .03, tipo: 'square', v: .05, lp: 5000 }) },
      sucesso: function () { var t = ac.currentTime; [72, 76, 79, 84].forEach(function (m, i) { tom({ f: hz(m), dur: .45, v: .09, t0: t + i * .06, eco: 1 }) }) },
      brilho: function () { var t = ac.currentTime; [84, 88, 91, 96, 100].forEach(function (m, i) { tom({ f: hz(m), dur: .2, v: .045, t0: t + i * .035 }) }) },
      ping: function (n) { tom({ f: hz([84, 86, 88, 91, 93][n % 5]), dur: .45, v: .07, eco: 1 }) },
      compra: function () { var t = ac.currentTime; tom({ f: hz(79), dur: .08, tipo: 'square', v: .06, t0: t, lp: 3000 }); tom({ f: hz(91), dur: .25, tipo: 'square', v: .06, t0: t + .09, lp: 3000 }); tom({ f: hz(96), dur: .45, v: .07, t0: t + .18, eco: 1 }) },
      confete: function () { var t = ac.currentTime; chiado({ f: 3000, dur: .15, v: .09, t0: t, tipo: 'highpass' }); for (var i = 0; i < 6; i++) tom({ f: hz(84 + Math.floor(Math.random() * 12)), dur: .1, v: .035, t0: t + .05 + i * .04 }) }
    };
    // momentos dos efeitos no relógio do DESENHO (o mesmo de intro.js)
    var MOMENTOS = [];
    for (var i = 0; i < 9; i++) MOMENTOS.push([2.6 + i * 2.3 / 9, 'pincel']);
    MOMENTOS.push([5.0, 'plim'], [11.15, 'ideia'], [11.75, 'pulo'], [12.42, 'pouso'], [13.6, 'whoosh'], [14.6, 'liga'], [16.6, 'pop', 0],
      [17.2, 'pop', 1], [17.8, 'pop', 2], [18.4, 'pop', 3], [19.0, 'pop', 4], [19.8, 'swish'], [20.6, 'coracao'],
      [23.6, 'tique'], [24.2, 'tique'], [24.8, 'tique'], [27.0, 'folha'], [27.86, 'folha'], [28.73, 'folha'],
      [30.0, 'vibra'], [31.5, 'vibra'], [37.4, 'magia'], [38.7, 'pouso'], [38.85, 'chacoalha'], [39.44, 'pulo'], [40.34, 'pulo'],
      [48.35, 'clique'], [48.6, 'sucesso'], [50.2, 'brilho'], [55.0, 'brilho'], [53.9, 'whoosh'], [55.9, 'folha'],
      [57.65, 'pouso'], [57.66, 'confete'], [57.8, 'compra'], [58.04, 'pulo'], [59.24, 'pulo']);
    for (var j = 0; j < 5; j++) MOMENTOS.push([51.2 + j * .55, 'ping', j]);

    /* ---------- vozinhas: cada personagem "fala" sílabas enquanto o texto aparece ---------- */
    var VOZ = { marina: { base: 520, tipo: 'triangle', faixa: 130 }, rafa: { base: 220, tipo: 'triangle', faixa: 55 }, pixel: { base: 880, tipo: 'square', faixa: 320 } };
    function voz(quem, texto) {
      var v = VOZ[quem]; if (!v) return;
      var letras = String(texto).replace(/[^A-Za-zÀ-ÿ]/g, '').length, n = Math.min(16, Math.max(3, Math.round(letras / 2.6))), t = ac.currentTime + .05, pergunta = /\?\s*$/.test(texto);
      for (var i = 0; i < n; i++) {
        var f = v.base + (Math.sin(i * 2.3) * .5 + Math.random() * .5) * v.faixa; if (pergunta && i >= n - 2) f *= 1.22;
        var d = .055 + Math.random() * .03, osc = ac.createOscillator(), g = ac.createGain(), bp = ac.createBiquadFilter();
        osc.type = v.tipo; osc.frequency.setValueAtTime(f, t); osc.frequency.linearRampToValueAtTime(f * .92, t + d);
        bp.type = 'bandpass'; bp.frequency.value = f * 2.2; bp.Q.value = 1.1;
        g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(quem === 'pixel' ? .07 : .14, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + d);
        osc.connect(bp); bp.connect(g); osc.connect(g); g.connect(efeitos); osc.start(t); osc.stop(t + d + .02);
        t += d + .025 + (i % 4 === 3 ? .06 : 0);
      }
    }

    /* ---------- trilha (relógio REAL da intro; 96 bpm, compassos de 16 passos) ---------- */
    var PASSO = 60 / 96 / 4, COMP = 16 * PASSO;
    var AC_ = { Am: [57, 60, 64], F: [53, 57, 60], C: [55, 60, 64], G: [55, 59, 62], Em: [52, 55, 59], Fmaj7: [53, 57, 60, 64] };
    var SECOES = [   // início (s), progressão, estilo
      [0, ['Am', 'F', 'C', 'G'], 'calmo'], [11.2, ['C', 'G', 'Am', 'F'], 'arpejo'], [22.0, ['Am', 'Em', 'Am', 'Em'], 'vazio'],
      [35.2, ['C', 'Am', 'F', 'G'], 'saltitante'], [47.0, ['F', 'G', 'Em', 'Am'], 'constroi'], [51.6, ['F', 'G', 'C', 'Am'], 'cheio'],
      [57.0, ['Fmaj7', 'Fmaj7', 'Fmaj7', 'Fmaj7'], 'pad'], [59.05, ['C', 'G', 'Am', 'F'], 'festa'], [63.4, ['C'], 'final'], [67, [], 'mudo']
    ];
    var LEAD = [0, -1, -1, 2, -1, -1, 1, -1, 2, -1, 1, -1, 0, -1, -1, -1];
    function secao(tm) { var s = SECOES[0]; SECOES.forEach(function (x) { if (tm >= x[0]) s = x }); return s }
    function passo(n, quando) {
      var tm = n * PASSO, sc = secao(tm), est = sc[2]; if (est === 'mudo' || !sc[1].length) return;
      var p = n % 16, comp = Math.floor(n / 16), acorde = AC_[sc[1][comp % sc[1].length]], raiz = acorde[0];
      function nota(o) { o.saida = musica; o.t0 = quando; tom(o) }
      if (est === 'final') {   // acorde final, de uma vez só, logo no começo da seção
        if (Math.abs(tm - sc[0]) < PASSO * .6) { [48, 55, 60, 64, 67, 72].forEach(function (m, i) { nota({ f: hz(m), dur: 3.2, v: .05, a: .02 + i * .03, tipo: 'triangle', eco: 1 }) }) }
        return;
      }
      // fundo (pad): acorde inteiro no começo do compasso
      if (p === 0 && (est !== 'vazio' || comp % 2 === 0)) acorde.forEach(function (m, i) { nota({ f: hz(m), dur: COMP * 1.05, v: est === 'vazio' ? .025 : est === 'pad' ? .05 : .035, a: .35, tipo: 'triangle', detune: i % 2 ? 6 : -6, lp: 1400 }) });
      // baixo
      var B = { calmo: [0, 8], arpejo: [0, 8], vazio: [0], saltitante: [0, 6, 8, 14], constroi: [0, 4, 8, 12], cheio: [0, 3, 6, 8, 11, 14], pad: [], festa: [0, 4, 8, 12] }[est] || [];
      if (B.indexOf(p) >= 0) nota({ f: hz(raiz - 24), dur: est === 'saltitante' ? .16 : PASSO * 3.5, v: .11, tipo: 'triangle' });
      // caixinha de música (arpejo)
      var arp = est === 'calmo' ? p % 4 === 0 : est === 'arpejo' || est === 'cheio' || est === 'festa' ? p % 2 === 0 : est === 'constroi' ? true : false;
      if (arp) { var k = (est === 'constroi' ? p : p / 2 | 0) % acorde.length; nota({ f: hz(acorde[k] + 12 + (est === 'arpejo' && p % 8 === 6 ? 12 : 0)), dur: .35, v: est === 'constroi' ? .025 : .045, eco: 1 }) }
      // melodia (onda quadrada, abafada)
      if ((est === 'saltitante' || est === 'cheio' || est === 'festa') && LEAD[p] >= 0) nota({ f: hz(acorde[LEAD[p]] + 12), dur: .2, v: .035, tipo: 'square', lp: 2200 });
      // chimbal, bumbo e o "relógio" do silêncio
      if ((est === 'constroi' || est === 'cheio' || est === 'festa') && p % 2 === 1) chiado({ f: 8000, dur: .04, v: .025, tipo: 'highpass', t0: quando, saida: musica });
      if ((est === 'cheio' || est === 'festa') && p % 8 === 0) tom({ f: 120, f2: 45, slide: .12, dur: .2, v: .2, t0: quando, saida: musica });
      if (est === 'vazio' && p % 4 === 0) chiado({ f: 5000, dur: .02, v: .012, tipo: 'highpass', t0: quando, saida: musica });
    }

    /* ---------- relógio ---------- */
    var prox = -1, ultDesenho = -1, ultReal = -1;
    function tick(tReal, tDesenho, rodando) {
      if (!ligado || !rodando || ac.state !== 'running') { prox = -1; ultDesenho = tDesenho; ultReal = tReal; return }
      if (prox < 0 || Math.abs(tReal - ultReal) > .5) prox = Math.ceil(tReal / PASSO);
      while (prox * PASSO < tReal + .2) { var quando = ac.currentTime + Math.max(0, prox * PASSO - tReal); passo(prox, quando); prox++ }
      if (ultDesenho >= 0 && tDesenho > ultDesenho && tDesenho - ultDesenho < .5)
        MOMENTOS.forEach(function (m) { if (m[0] > ultDesenho && m[0] <= tDesenho) SFX[m[1]](m[2] || 0) });
      ultDesenho = tDesenho; ultReal = tReal;
    }
    function ui(u) {   // o que aparece por cima (legendas, placas, notificações, balões) também soa
      if (!ligado || ac.state !== 'running') return;
      if (u.notif) (u.notif.ic === '🛍️' ? SFX.pedido : SFX.notif)();
      else if (u.placa) { SFX.swish(); if (u.placa.nome === 'Pixel') setTimeout(function () { voz('pixel', 'bip bip bip') }, 250) }
      else if (u.chat) voz('rafa', u.chat.txt);
      else if (u.leg && u.cls === 'pensa' && !/dias|días/.test(u.leg)) voz('marina', u.leg);
    }
    function ligar(b) {
      ligado = !!b; try { localStorage.setItem('plat.introSom', ligado ? 'on' : 'off') } catch (e) { }
      if (ligado && ac.state !== 'running') ac.resume();
      mestre.gain.setTargetAtTime(ligado ? 1 : 0, ac.currentTime, .05); prox = -1;
    }
    if (ligado && ac.state !== 'running') ac.resume();
    return {
      tick: tick, ui: ui, ligar: ligar, ligado: function () { return ligado },
      seek: function () { prox = -1; ultDesenho = -1 },
      parar: function () { try { mestre.gain.setTargetAtTime(0, ac.currentTime, .05); setTimeout(function () { ac.close() }, 300) } catch (e) { } }
    };
  }
  window.INTRO_SOM = { criar: criar };
})();
