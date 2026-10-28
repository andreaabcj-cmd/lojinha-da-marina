/* Personagens da Lojinha em pixel art: o Pixel (mascote), a Marina (dona da loja) e o Rafa (agente de suporte).
   Desenho de 24/10/2026 (aprovado pelo responsável): contorno escuro em volta da silhueta, brilho, olhos grandes e bochechas.
   O original fica em _teste_mascote/ (gerar_turma.js). Uso: PERSONAGEM('marina', 4) devolve um <svg>;
   PERSONAGEM('marina', 4, 'feliz') desenha o quadro feliz. Os personagens na tela piscam sozinhos de vez em quando. */
(function () {
  var PAL = {'B': '#2A4275', 'C': '#8E5E3C', 'D': '#4E3A30', 'G': '#6B7A94', 'H': '#A8703F', 'J': '#C98E1A', 'L': '#8DBBFF', 'R': '#D07A7A', 'S': '#DDA77F', 'U': '#1F4FA8', 'V': '#5B3CC4', 'b': '#3A5BA0', 'c': '#B07A52', 'd': '#2A1E1A', 'h': '#7A4A2A', 'j': '#F2B632', 'k': '#22304A', 'r': '#F49AAE', 's': '#F4CBA2', 'u': '#2F6FD6', 'v': '#7357FF', 'w': '#FFFFFF', 'y': '#FFD65A'};
  var SP = {
    pixel: {
      base: ['................', '................', '...kkkkkkkkkk...', '..kLLuuuuuuuuk..', '..kLuuuuuuuuuk..', '..kuwwuuuuwwuk..', '..kuwkuuuuwkuk..', '..kuwkuuuuwkuk..', '..kruuuuuuuurk..', '..kuuukuukuuuk..', '..kUuuukkuuuUk..', '..kUUUUUUUUUUk..', '...kkkkkkkkkk...', '....kUk..kUk....', '....kkk..kkk....'],
      pisca: { 5: '..kuuuuuuuuuuk..', 6: '..kuuuuuuuuuuk..', 7: '..kukkuuuukkuk..' },
      feliz: { 0: '.y............y.', 1: '..y..........y..', 5: '..kuukuuuukuuk..', 6: '..kukukuukukuk..', 7: '..kuuuuuuuuuuk..', 9: '..kuuukkkkuuuk..', 10: '..kUuuukrkuuUk..' }
    },
    marina: {
      base: ['.....kkkkkk.....', '...kkhhhhhhkk...', '..khhHHHhhhhhk..', '.khhHHhhhhhhhhk.', 'khhhHhssssssshhk', 'khhhssssssssshhk', 'khhswwsssswwshhk', 'khhswksssswkshhk', 'khhswksssswkshhk', 'khhrssssssssrhhk', 'khhsssksskssshhk', 'khhsssskksssshhk', '.khhSssssssShhk.', '.khhhkSSSSkhhhk.', '.khhjjjwwjjjhhk.', '.khjjjjwwjjjjhk.', '.kjjjjjwwjjjjjk.', 'ksjjjjjwwjjjjjsk', 'ksjjJjjwwjjJjjsk', '.kjjJjjwwjjJjjk.', '.kbbbbbbbbbbbbk.', '.kbbbbbBBbbbbbk.', '.kbbbbkkkkbbbbk.', '.kddddk..kddddk.', '..kkkk....kkkk..'],
      pisca: { 6: 'khhsssssssssshhk', 7: 'khhsssssssssshhk', 8: 'khhskksssskkshhk' },
      feliz: { 6: 'khhsskssssksshhk', 7: 'khhsksksskskshhk', 8: 'khhsssssssssshhk', 10: 'khhssskkkkssshhk', 11: 'khhssskrrkssshhk' }
    },
    rafa: {
      base: ['....kkkkkkkk....', '...kddddddddk...', '..kGDddDddDdGk..', '.kGdddDddddDdGk.', '.kGddccccccddGk.', '.kGdccccccccdGk.', 'kGGcwwccccwwcGGk', 'kGGcwkccccwkcGGk', 'kGGcwkccccwkcGGk', '.kGcRccccccRcGk.', '.kGGcckcckccck..', '..kGccckkcccCk..', '...kcccccccck...', '...kkCCCCCCkk...', '..kvvvwwwwvvvk..', '.kvvvvvwwvvvvvk.', '.kvvVvvvvvvVvvk.', 'kcvvVvvvvvvVvvck', 'kcvvvvvvvvvvvvck', '.kvvvvvvvvvvvvk.', '.kBBBBBBBBBBBBk.', '.kBBBBBbbBBBBBk.', '.kBBBBkkkkBBBBk.', '.kddddk..kddddk.', '..kkkk....kkkk..'],
      pisca: { 6: 'kGGccccccccccGGk', 7: 'kGGccccccccccGGk', 8: 'kGGckkcccckkcGGk' },
      feliz: { 6: 'kGGcckcccckccGGk', 7: 'kGGckckcckckcGGk', 8: 'kGGccccccccccGGk', 10: '.kGGcckkkkccck..', 11: '..kGcckrrkccCk..' }
    }
  };
  function linhasDe(nome, quadro) {
    var p = SP[nome] || SP.pixel, r = p.base.slice(), t = p[quadro] || {};
    for (var k in t) r[+k] = t[k];
    return r;
  }
  function desenho(rows, sc) {
    var o = '';
    rows.forEach(function (r, y) {
      for (var x = 0; x < r.length;) { var ch = r[x]; if (ch === '.') { x++; continue } var w = 1; while (r[x + w] === ch) w++; o += '<rect x="' + x * sc + '" y="' + y * sc + '" width="' + w * sc + '" height="' + sc + '" fill="' + PAL[ch] + '"/>'; x += w }
    });
    return o;
  }
  window.PERSONAGEM = function (nome, sc, quadro) {
    nome = SP[nome] ? nome : 'pixel'; sc = sc || 3;
    var rows = linhasDe(nome, quadro);
    return '<svg class="pers" data-p="' + nome + '" data-sc="' + sc + '" width="' + rows[0].length * sc + '" height="' + rows.length * sc + '" shape-rendering="crispEdges" aria-hidden="true">' + desenho(rows, sc) + '</svg>';
  };
  /* troca o quadro de um personagem já na tela (ex.: feliz ao acertar) */
  window.PERSONAGEM_QUADRO = function (svg, quadro) {
    if (!svg || !svg.getAttribute) return;
    svg.innerHTML = desenho(linhasDe(svg.getAttribute('data-p'), quadro), +svg.getAttribute('data-sc') || 3);
  };
  window.PERSONAGEM_NOME = { pixel: 'Pixel', marina: 'Marina', rafa: 'Rafa' };
  /* o desenho cru (linhas e cores), para quem anima em canvas (a intro) */
  window.PERSONAGEM_MAPA = function (nome, quadro) { return { linhas: linhasDe(nome, quadro), cores: PAL } };

  /* piscar: de tempos em tempos um personagem visível pisca (às vezes duas vezes seguidas) */
  if (typeof document === 'undefined' || !window.requestAnimationFrame) return;
  var calmo = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (calmo) return;
  function visiveis() {
    return [].filter.call(document.querySelectorAll('svg.pers[data-p]'), function (s) { var b = s.getBoundingClientRect(); return b.width && b.bottom > 0 && b.top < innerHeight && !s.__quadro });
  }
  function pisca(s, vezes) {
    PERSONAGEM_QUADRO(s, 'pisca');
    setTimeout(function () { PERSONAGEM_QUADRO(s, 'base'); if (vezes > 1) setTimeout(function () { pisca(s, vezes - 1) }, 160) }, 130);
  }
  (function ciclo() {
    var v = visiveis(); if (v.length && !document.hidden) pisca(v[Math.floor(Math.random() * v.length)], Math.random() < .25 ? 2 : 1);
    setTimeout(ciclo, 1400 + Math.random() * 1800);
  })();
})();
