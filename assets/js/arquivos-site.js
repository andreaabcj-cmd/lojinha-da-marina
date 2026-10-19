/* EDITOR DE ARQUIVOS DO SITE (hospedagem do cliente, faz-de-conta): onde o desenvolvedor do cliente cola o código do Pixel.
   Dois trechos editáveis, como em muitas hospedagens e construtores de site:
     • cabecalho.html  → inserido no <head> de TODAS as páginas (aqui vai o código base do Pixel)
     • obrigado-fim.html → inserido no fim da página de pedido concluído (aqui vai o código do evento Purchase)
   O que for salvo aqui muda o que o site de fato envia (veja Código-fonte, Consultor de Dados e Eventos de teste).
   Treino: o agente NÃO mexe no site do cliente; aqui você faz o que o desenvolvedor faria, para entender o que pedir a ele e conferir o resultado.
   Real (Central de Ajuda da Meta): código base no head de cada página; código do evento só na página da ação, depois do código base; value numérico com ponto e currency de 3 letras. */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(pt, es) { return LANG === 'es' ? es : pt }
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var ARQ = {
    cabecalho: { nome: 'cabecalho.html', pasta: 'public_html/includes/', campo: 'cabecalho', desc: T('Trecho incluído no <head> de TODAS as páginas do site.', 'Fragmento incluido en el <head> de TODAS las páginas del sitio.'), dica: '<!-- ' + T('Cole aqui o código base do Pixel', 'Pega aquí el código base del píxel') + ' -->' },
    obrigado: { nome: 'obrigado-fim.html', pasta: 'public_html/includes/', campo: 'obrigado', desc: T('Trecho incluído no fim da página de pedido concluído (só nela).', 'Fragmento incluido al final de la página de pedido completado (solo en ella).'), dica: '<!-- ' + T('Cole aqui o código do evento Purchase', 'Pega aquí el código del evento Purchase') + ' -->' }
    ,ecobag: { nome: 'produto-ecobag_03.html', pasta: 'public_html/', md: true, desc: T('A página de produto da Ecobag Folha (só a parte com os microdados). Aqui vão as tags que o catálogo da Meta lê: OpenGraph ou JSON-LD no <head>, ou schema.org no corpo da página. Confira o resultado no Microdata Debugger.', 'La página de producto de la Ecobag Folha (solo la parte con los microdatos). Aquí van las etiquetas que lee el catálogo de Meta: OpenGraph o JSON-LD en el <head>, o schema.org en el cuerpo de la página. Revisa el resultado en el Microdata Debugger.'), dica: '<!-- ' + T('Tags de microdados do produto', 'Etiquetas de microdatos del producto') + ' -->' }
  };
  var OUTROS = [['produto.html', 'public_html/'], ['carrinho.html', 'public_html/'], ['checkout.html', 'public_html/'], ['loja.css', 'public_html/assets/css/'], ['loja.js', 'public_html/assets/js/']];
  var Q0 = new URLSearchParams(location.search); if (Q0.get('mdzerar') && window.MDPAG) { MDPAG.zera(Q0.get('mdzerar')); try { sessionStorage.removeItem('ae.rasc.ecobag') } catch (x) { } }   // prática dos microdados começa com o exemplo colado pelo desenvolvedor
  var atual = (Q0.get('arq') === 'ecobag' && window.MDPAG) ? 'ecobag' : 'cabecalho', rascunho = (function () { try { var r = sessionStorage.getItem('ae.rasc.ecobag'); return r != null ? { ecobag: r } : {} } catch (x) { return {} } })(), salvoEm = null, msg = '';
  function texto(k) { if (rascunho[k] != null) return rascunho[k]; if (ARQ[k].md) return window.MDPAG ? MDPAG.get() : ''; return SITE.get().proprio[ARQ[k].campo] || '' }
  function render() {
    var s = SITE.get(), a = ARQ[atual], t = texto(atual), linhas = Math.max(12, t.split('\n').length + 2), n = '';
    for (var i = 1; i <= linhas; i++) n += i + '\n';
    var arvore = '<div class="ae-pasta">📁 public_html</div><div class="ae-pasta ae-n1">📁 includes</div>' + Object.keys(ARQ).filter(function (k) { return !ARQ[k].md }).map(function (k) {
      return '<button class="ae-arq ae-n2' + (atual === k ? ' on' : '') + '" data-f="' + k + '" data-t="arq-' + k + '">📄 ' + ARQ[k].nome + (rascunho[k] != null ? ' ●' : '') + '</button>' }).join('') +
      Object.keys(ARQ).filter(function (k) { return ARQ[k].md && window.MDPAG }).map(function (k) { return '<button class="ae-arq ae-n1' + (atual === k ? ' on' : '') + '" data-f="' + k + '" data-t="arq-' + k + '">📄 ' + ARQ[k].nome + (rascunho[k] != null ? ' ●' : '') + '</button>' }).join('') +
      OUTROS.map(function (o) { return '<div class="ae-arq off ae-n1" title="' + T('Somente leitura neste treino', 'Solo lectura en este entrenamiento') + '">📄 ' + o[0] + '</div>' }).join('');
    $('#app').innerHTML = '<div data-sem-traduzir="1"><div class="ae-topo"><b>' + T('Editor de código', 'Editor de código') + '</b> · ' + T('Hospedagem do site', 'Hosting del sitio') + ' <span class="ae-site">lojinhadamarina.exemplo</span></div>' +
      '<div class="ae-corpo"><aside class="ae-arvore" data-t="arvore">' + arvore + '</aside><main class="ae-main">' +
      '<div class="ae-cab"><span class="ae-caminho" data-t="caminho">' + a.pasta + '<b>' + a.nome + '</b></span><span class="ae-btns"><button class="ae-bt" data-ac="recarregar" data-t="btn-recarregar">' + T('Recarregar', 'Recargar') + '</button><button class="ae-bt prim" data-ac="salvar" data-t="btn-salvar">' + T('Salvar alterações', 'Guardar cambios') + '</button></span></div>' +
      '<p class="ae-desc" data-t="desc">' + esc(a.desc) + '</p>' +
      '<div class="ae-ed"><pre class="ae-num" aria-hidden="true">' + n + '</pre><textarea id="aeTexto" spellcheck="false" wrap="off" placeholder="' + esc(a.dica) + '" data-t="ed-texto">' + esc(t) + '</textarea></div>' +
      '<div class="ae-rodape"><span id="aeStatus" data-t="ed-status">' + (msg || (salvoEm ? '✓ ' + T('Salvo às ', 'Guardado a las ') + salvoEm : T('Sem alterações novas.', 'Sin cambios nuevos.'))) + '</span></div>' +
      '<p class="ae-nota">' + T('Treino: o agente não mexe no site do cliente. Aqui você faz o que o desenvolvedor dele faria, para entender o que pedir e conferir o resultado em Código-fonte, no Consultor de Dados e em Eventos de teste.', 'Entrenamiento: el agente no toca el sitio del cliente. Aquí haces lo que haría su desarrollador, para entender qué pedir y revisar el resultado en Código fuente, en el Asesor de datos y en Probar eventos.') + '</p></main></div></div>';
    window.__simAe = { atual: atual, rascunho: rascunho };
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-f]'); if (b) { atual = b.getAttribute('data-f'); msg = ''; render(); return }
    b = e.target.closest('[data-ac]'); if (!b) return;
    if (b.getAttribute('data-ac') === 'salvar') {
      var s = SITE.get(), k = atual; if (rascunho[k] != null) { if (ARQ[k].md) { MDPAG.set(rascunho[k]); try { sessionStorage.removeItem('ae.rasc.ecobag') } catch (x) { } } else { s.proprio[ARQ[k].campo] = rascunho[k]; SITE.set(s) } delete rascunho[k] }
      var d = new Date(); salvoEm = ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2); msg = ''; render();
    } else if (b.getAttribute('data-ac') === 'recarregar') { delete rascunho[atual]; msg = ''; render() }
  });
  document.addEventListener('input', function (e) { if (e.target.id === 'aeTexto') { rascunho[atual] = e.target.value; if (ARQ[atual].md) try { sessionStorage.setItem('ae.rasc.ecobag', e.target.value) } catch (x) { }; var st = $('#aeStatus'); if (st) st.textContent = T('● Alterações não salvas.', '● Cambios sin guardar.'); var n = $('.ae-num'); if (n) { var l = Math.max(12, e.target.value.split('\n').length + 2), x = ''; for (var i = 1; i <= l; i++) x += i + '\n'; n.textContent = x } var tr = document.querySelector('[data-f=' + atual + ']'); if (tr && !/●/.test(tr.textContent)) tr.textContent += ' ●' } });
  window.addEventListener('site:mudou', function () { /* outro lugar mudou o site */ if (!Object.keys(rascunho).length) render() });
  window.AE = { render: render, abre: function (k) { atual = k; render() }, estado: function () { return { atual: atual, rascunho: rascunho } } };
  render();
})();
