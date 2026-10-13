/* Personagens da Lojinha em pixel art: o Pixel (mascote), a Marina (dona da loja) e o Rafa (agente de suporte).
   Uso: PERSONAGEM('marina', 4) devolve um <svg>. */
(function () {
  var PAL = { k: '#22304A', h: '#7A4A2A', H: '#9C6436', s: '#F4CBA2', S: '#DDA77F', w: '#FFFFFF', e: '#22304A', m: '#D0605A',
    y: '#F2B632', Y: '#C98E1A', b: '#3A5BA0', B: '#2A4275', o: '#5A3A2A', d: '#2A1E1A', c: '#B07A52', u: '#2F6FD6', U: '#1F4FA8',
    a: '#1F3A6E', p: '#A0703A', v: '#7357FF', V: '#5B3CC4', g: '#1E9E55' };
  var SP = {
    pixel: ['....uuuuuuu.....', '...uuuuuuuuuU...', '..UUUUUUUUUUUUU.', '...dddddddddd...', '...dssssssssd...', '...ssessssesss..', '...ssssssssss...', '...sssmmmmsss...', '....ssssssss....', '...wwwwwwwwww...', '..wwaawwwwaaww..', '..swaaaaaaaapwwp', '..swaaaaaaaapwkp', '..swaaaaaaaapwwp', '...waaaaaaaapppp', '...aaaaaaaaaa...', '...bbbb..bbbb...', '...bbbb..bbbb...', '...oooo..oooo...'],
    marina: ['.....hhhhhh.....', '...hhhHhhHhhh...', '..hhhhhhhhhhhh..', '.hhhhssssssshhh.', '.hhhsssssssssh.h', '.hhkkkksskkkkhh.', '.hhkwekssskewkh.', '.hhkkkksskkkkhh.', '.hhhsssssssshhh.', '..hhssSmmSsshh..', '..hh.ssssss.hh..', '..hhyyywwyyyhh..', '..hyyyywwyyyyh..', '..yyyyywwyyyyy..', '.syyyyywwyyyyys.', '.syyYyywwyyYyys.', '..yyYyywwyyYyy..', '..bbbbbbbbbbbb..', '..bbbbbBBbbbbb..', '..bbbbb..bbbbb..', '..bbbbb..bbbbb..', '..bbbb....bbbb..', '..oooo....oooo..'],
    rafa: ['....dddddddd....', '...dddddddddd...', '..kddddddddddk..', '..kddccccccddk..', '..kdccccccccdk..', '..kdccecceccdk..', '..kkccccccccd...', '...dkccmmcccd...', '....ckkkcccc....', '.....cccccc.....', '...vvvvvvvvvv...', '..vvvvwvvwvvvv..', '..vvvvVvvVvvvv..', '.cvvvvVvvVvvvvc.', '.cvvvvvvvvvvvvc.', '..vvvvvvvvvvvv..', '..bbbbbbbbbbbb..', '..bbbbBBbbbbbb..', '..bbbb..bbbb....', '..bbbb..bbbb....', '..oooo..oooo....']
  };
  window.PERSONAGEM = function (nome, sc) {
    var rows = SP[nome] || SP.pixel, o = ''; sc = sc || 3;
    rows.forEach(function (r, y) {
      for (var x = 0; x < r.length;) { var ch = r[x]; if (ch === '.') { x++; continue } var w = 1; while (r[x + w] === ch) w++; o += '<rect x="' + x * sc + '" y="' + y * sc + '" width="' + w * sc + '" height="' + sc + '" fill="' + PAL[ch] + '"/>'; x += w }
    });
    return '<svg class="pers" width="' + rows[0].length * sc + '" height="' + rows.length * sc + '" shape-rendering="crispEdges" aria-hidden="true">' + o + '</svg>';
  };
  window.PERSONAGEM_NOME = { pixel: 'Pixel', marina: 'Marina', rafa: 'Rafa' };
})();
