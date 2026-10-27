/* CÓDIGO-FONTE DA PÁGINA (Ctrl+U) — o arquivo de verdade de uma página da Lojinha, como o view-source do Chrome.
   Abre por ver-fonte.html?u=<página> (o tutorial manda para cá quando a pessoa aperta Ctrl+U ou toca no botão Ctrl+U).
   Lê a página com fetch e mostra cada linha numerada, com as cores do Chrome e a “Quebra de linha”.
   Única troca: na Lojinha o init e o PageView rodam em assets/js/pixel-aula.js (por causa do consentimento e do laboratório);
   aqui o comentário que explica isso vira as duas linhas que um site real tem, com o ID de assets/js/config.js.
   As linhas que os tutoriais destacam ganham data-t (vf-com, vf-init, vf-pv… e, nas páginas de produto, vf-og, vf-id, vf-preco, vf-ld). */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return LANG === 'es' ? es : pt }
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var q = new URLSearchParams(location.search), u = (q.get('u') || 'loja.html').replace(/[^\w.\-]/g, '');
  if (!/\.html$/.test(u)) u = 'loja.html';
  var base = location.href.replace(/[^\/]*$/, ''), endereco = 'view-source:' + base + u;
  var quebra = (function () { try { return localStorage.getItem('vf.quebra') !== '0' } catch (e) { return true } })();

  var MARCAS = [   // [data-t, teste da linha]
    ['vf-com', function (l) { return l.indexOf('<!-- Meta Pixel Code -->') >= 0 }],
    ['vf-base', function (l) { return l.indexOf('fbevents.js') >= 0 }],
    ['vf-init', function (l) { return /fbq\('init'/.test(l) }],
    ['vf-pv', function (l) { return /fbq\('track', 'PageView'\)/.test(l) }],
    ['vf-fim', function (l) { return l.indexOf('<!-- End Meta Pixel Code -->') >= 0 }],
    ['vf-og', function (l) { return /property="og:title"/.test(l) }],
    ['vf-id', function (l) { return /property="product:retailer_item_id"/.test(l) }],
    ['vf-preco', function (l) { return /property="product:price:amount"/.test(l) }],
    ['vf-moeda', function (l) { return /property="product:price:currency"/.test(l) }],
    ['vf-disp', function (l) { return /property="product:availability"/.test(l) }],
    ['vf-ld', function (l) { return /application\/ld\+json/.test(l) }]
  ];
  function comoSiteReal(txt) {   // o comentário da Lojinha vira o init + PageView de um site real
    var id = (window.LOJA_CONFIG && /^\d+$/.test(LOJA_CONFIG.pixelId) && LOJA_CONFIG.pixelId) || 'SEU_PIXEL_ID';
    return txt.replace(/\/\* O init e o PageView ficam[\s\S]*?\*\//, "fbq('init', '" + id + "');\nfbq('track', 'PageView');");
  }
  function attrs(s) {   // nome="valor" com as cores do Chrome
    return s.replace(/([^\s=]+)(\s*=\s*)("[^"]*"|'[^']*'|[^\s"'>]+)?|([^\s]+)/g, function (m, n, ig, v, solto) {
      if (solto) return esc(solto);
      return '<span class="vf-an">' + esc(n) + '</span>' + esc(ig) + (v ? '<span class="vf-av">' + esc(v) + '</span>' : '');
    });
  }
  function colore(l) {
    var out = '', i = 0, re = /<!--[\s\S]*?-->|<!doctype[^>]*>|<\/?[a-zA-Z][\w-]*[^>]*>/gi, m;
    while ((m = re.exec(l))) {
      out += esc(l.slice(i, m.index)); var t = m[0];
      if (/^<!--/.test(t)) out += '<span class="vf-c">' + esc(t) + '</span>';
      else if (/^<!doctype/i.test(t)) out += '<span class="vf-d">' + esc(t) + '</span>';
      else {
        var p = /^<(\/?)([\w-]+)([\s\S]*?)(\/?)>$/.exec(t);
        out += p ? '<span class="vf-t">&lt;' + p[1] + p[2] + '</span>' + attrs(p[3]) + '<span class="vf-t">' + p[4] + '&gt;</span>' : esc(t);
      }
      i = m.index + t.length;
    }
    return out + esc(l.slice(i));
  }
  function monta(txt) {
    var linhas = comoSiteReal(txt.replace(/\r\n?/g, '\n')).split('\n'), usadas = {};
    if (linhas.length && linhas[linhas.length - 1] === '') linhas.pop();
    var corpo = linhas.map(function (l, i) {
      var dt = ''; MARCAS.forEach(function (mk) { if (!dt && !usadas[mk[0]] && mk[1](l)) { dt = mk[0]; usadas[mk[0]] = 1 } });
      return '<tr' + (dt ? ' data-t="' + dt + '"' : '') + '><td class="vf-n">' + (i + 1) + '</td><td class="vf-l">' + (colore(l) || ' ') + '</td></tr>';
    }).join('');
    document.getElementById('vfCod').innerHTML = '<table class="vf-tab"><tbody>' + corpo + '</tbody></table>';
  }
  function tela() {
    document.getElementById('app').innerHTML =
      '<div class="vf-faixa">🧪 ' + T('Tela de treino: o código-fonte da página, como o Ctrl+U do navegador', 'Pantalla de práctica: el código fuente de la página, como el Ctrl+U del navegador') +
        ' · <a href="' + esc(u) + '" data-t="vf-volta">↩ ' + T('voltar à página', 'volver a la página') + '</a></div>' +
      '<div class="vf-barra"><span class="vf-url" data-t="vf-url">' + esc(endereco) + '</span></div>' +
      '<label class="vf-quebra"><span>' + T('Quebra de linha', 'Ajuste de línea') + '</span> <input type="checkbox" id="vfQuebra"' + (quebra ? ' checked' : '') + '/></label>' +
      '<div class="vf-cod' + (quebra ? ' quebra' : '') + '" id="vfCod" data-t="vf-cod"><p class="vf-carrega">' + T('Abrindo o código…', 'Abriendo el código…') + '</p></div>';
    document.getElementById('vfQuebra').onchange = function () {
      quebra = this.checked; try { localStorage.setItem('vf.quebra', quebra ? '1' : '0') } catch (e) { }
      document.getElementById('vfCod').classList.toggle('quebra', quebra);
    };
    document.title = endereco;
    fetch(u, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw r.status; return r.text() }).then(monta).catch(function () {
      document.getElementById('vfCod').innerHTML = '<p class="vf-carrega">' + T('Não deu para abrir o código desta página. Volte e tente de novo.', 'No se pudo abrir el código de esta página. Vuelve e inténtalo de nuevo.') + '</p>';
    });
  }
  tela();
})();
