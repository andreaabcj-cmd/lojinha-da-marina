/* ↩ Voltar à aula: depois do tutorial a pessoa fica para explorar à vontade; o botão no canto leva de volta quando ela quiser.
   Guardado na aba (sessionStorage 'tour.volta'); a plataforma apaga ao chegar na aula. */
window.VOLTA_AULA = window.VOLTA_AULA || (function () {
  var K = 'tour.volta', SEG = /^[a-z0-9_-]+\.html([?#][^\s<>\"']*)?$/i;
  function lang() { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } }
  function le() { try { var v = sessionStorage.getItem(K); return v && SEG.test(v) ? v : null } catch (e) { return null } }
  function mostra() {
    var v = le(), b = document.getElementById('tgVolta'); if (!v) { if (b) b.remove(); return }
    if (!document.body) return;
    var host = document.querySelector('.sim-faixa, #maFaixa');   // a faixa é redesenhada pelos simuladores: o relógio abaixo recoloca o botão
    if (b && b.parentNode === (host || document.body)) return;
    var lab = /^laboratorio/.test(v), es = lang() === 'es';
    if (!document.getElementById('tgVoltaCss')) { var st = document.createElement('style'); st.id = 'tgVoltaCss';
      st.textContent = '.tg-volta{position:fixed;left:16px;bottom:16px;z-index:2147483600;display:inline-flex;align-items:center;gap:6px;padding:10px 16px;border-radius:12px;border:2px solid #16294A;background:#fff;color:#16294A;font:800 14px "Segoe UI",system-ui,Arial,sans-serif;text-decoration:none;box-shadow:3px 3px 0 #16294A;cursor:pointer}.tg-volta:hover{background:#FFE07A}body.em-tour .tg-volta{display:none}.ma-faixa:has(.tg-volta)>span:not(.ma-pix){max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tg-volta.na-faixa{position:static;padding:2px 10px;border-radius:8px;font-size:12px;box-shadow:2px 2px 0 #16294A;flex:none;white-space:nowrap}';
      document.head.appendChild(st) }
    if (!b) { b = document.createElement('a'); b.id = 'tgVolta'; b.href = v;
      b.textContent = '↩ ' + (lab ? (es ? 'Volver al Laboratorio' : 'Voltar ao Laboratório') : (es ? 'Volver a la clase' : 'Voltar à aula'));
      b.onclick = function () { try { sessionStorage.removeItem(K) } catch (e) { } } }
    b.className = 'tg-volta' + (host ? ' na-faixa' : '');
    var ref = host && host.id === 'maFaixa' ? host.querySelector('.ma-plat') : null;   // na loja: logo depois de "Plataforma"
    if (ref) ref.insertAdjacentElement('afterend', b); else (host || document.body).appendChild(b);
  }
  function guarda(v) { if (!v || !SEG.test(v)) return; try { sessionStorage.setItem(K, v) } catch (e) { } mostra() }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mostra); else setTimeout(mostra, 0);
  setInterval(mostra, 1000);
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
  var css = '.tg-recorte{position:fixed;z-index:2147482999;border-radius:16px;box-shadow:0 0 0 9999px rgba(14,24,44,.55);pointer-events:none;opacity:0;transition:left .75s cubic-bezier(.16,1,.3,1),top .75s cubic-bezier(.16,1,.3,1),width .75s cubic-bezier(.16,1,.3,1),height .75s cubic-bezier(.16,1,.3,1),opacity .6s}' +
    '.tg-avisa{margin-top:8px;padding:6px 8px;border-radius:8px;background:#FDE8EF;color:#9B1240;font-size:13px;font-weight:600}.tg-treme{animation:tgTreme .45s}@keyframes tgTreme{20%{margin-left:-6px}40%{margin-left:6px}60%{margin-left:-4px}80%{margin-left:3px}}' +
    '.tg-holo.na-janela{box-shadow:none}body.em-tour .fundo{background:transparent}' +
    '.tg-holo{position:fixed;z-index:2147483000;border-radius:10px;box-shadow:0 0 0 9999px rgba(14,24,44,.55);outline:3px solid #F2B632;outline-offset:3px;pointer-events:none;transition:left .75s cubic-bezier(.16,1,.3,1),top .75s cubic-bezier(.16,1,.3,1),width .75s cubic-bezier(.16,1,.3,1),height .75s cubic-bezier(.16,1,.3,1),opacity .6s;animation:tgPulso 1.6s infinite}' +
    '@keyframes tgPulso{50%{outline-offset:7px}}' +
    '.tg-balao{position:fixed;z-index:2147483001;width:370px;max-width:calc(100vw - 24px);background:#fff;border:3px solid #16294A;border-radius:14px;box-shadow:5px 5px 0 #16294A;padding:24px 14px 12px 74px;font:15px/1.45 "Segoe UI",system-ui,Arial,sans-serif;color:#16294A;transition:top .85s cubic-bezier(.16,1,.3,1) .05s,left .85s cubic-bezier(.16,1,.3,1) .05s}' +
    '.tg-balao .tg-masc{position:absolute;left:10px;top:12px;animation:tgBoing 1.2s ease-in-out infinite}@keyframes tgBoing{50%{transform:translateY(-5px)}}' +
    '.tg-balao b{display:block;font-size:16px;margin-bottom:3px}.tg-balao p{margin:0 0 8px;color:#3A4D6B}' +
    '.tg-dica{background:#FFF4D6;border-radius:8px;padding:6px 8px;font-size:13px;color:#5E4300}' +
    '.tg-ctrl{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:10px}.tg-ctrl small{color:#64748B;white-space:nowrap}' +
    '.tg-ctrl span{display:flex;gap:6px;align-items:center;white-space:nowrap}' +
    '.tg-btn{padding:7px 12px;border-radius:9px;border:2px solid #16294A;background:#2F6FD6;color:#fff;font-weight:800;cursor:pointer;box-shadow:2px 2px 0 #16294A}.tg-btn.sec{background:#fff;color:#16294A}.tg-btn[disabled]{opacity:.45;cursor:default}' +
    '.tg-sair{position:absolute;top:4px;right:8px;border:0;background:none;color:#64748B;cursor:pointer;font-size:12px}' +
    '.tg-balao.folha,.tg-balao.folha.compacto{width:auto!important;max-width:none!important}' +
    '.tg-balao.folha{left:8px!important;right:8px!important;top:auto!important;bottom:8px!important;width:auto;max-width:none;padding:9px 12px 8px;font-size:13.5px;line-height:1.35;cursor:default;transition:none;box-shadow:3px 3px 0 #16294A}' +
    '.tg-balao.folha.folha-topo{bottom:auto!important}.tg-balao.folha .tg-masc,.tg-balao.folha .tg-bal-min{display:none}.tg-balao.folha b{display:inline;font-size:14px;margin:0 6px 0 0}.tg-balao.folha p{display:inline;margin:0}' +
    '.tg-balao.folha .tg-dica{margin-top:5px;padding:4px 8px;font-size:12.5px}.tg-balao.folha .tg-ctrl{margin-top:6px}.tg-balao.folha .tg-sair{position:static;float:right;margin:-2px 0 0 8px}' +
    '.tg-balao{cursor:grab}.tg-balao.arrasta{cursor:grabbing;transition:none;user-select:none}.tg-balao button{cursor:pointer}' +
    '.tg-balao.compacto{width:300px;padding-left:14px;font-size:14px}.tg-balao.compacto .tg-masc{display:none}.tg-balao.fino{width:232px;padding:22px 10px 10px;font-size:13px;line-height:1.35}.tg-balao.fino .tg-masc{display:none}.tg-balao.fino .tg-sair{right:6px}.tg-balao.fino .tg-bal-min{left:10px;right:auto}.tg-bal-min{position:absolute;top:4px;right:124px;border:0;background:none;color:#64748B;cursor:pointer;font-size:12px}' +
    '.tg-passo-bt{border:0;background:none;color:#64748B;font:inherit;font-size:12.5px;cursor:pointer;padding:2px 4px;border-radius:6px;white-space:nowrap;text-decoration:underline dotted}.tg-passo-bt:hover{background:#EEF2F7;color:#16294A}' +
    '.tg-onde{background:#E0F2FE;border:2px solid #16294A;border-radius:9px;padding:5px 8px;margin:2px 0 7px;font-size:13px;line-height:1.3;color:#16294A}.tg-onde small{display:block;font-size:12px;color:#475569}' +
    '.tg-passos{margin-top:8px;max-height:230px;overflow:auto;border:2px solid #16294A;border-radius:10px;background:#F8FAFC;padding:4px}.tg-passos b{display:block;font-size:12px;color:#64748B;margin:2px 6px 4px}' +
    '.tg-passos button{display:flex;gap:8px;width:100%;text-align:left;border:0;background:none;padding:5px 6px;border-radius:7px;font:13px/1.3 "Segoe UI",system-ui,Arial,sans-serif;color:#16294A;cursor:pointer}.tg-passos button:hover{background:#FFE07A}.tg-passos button.on{background:#16294A;color:#fff}.tg-passos button i{font-style:normal;min-width:22px;color:inherit;opacity:.7}' +
    '@media (max-width:480px){.tg-ctrl{flex-wrap:wrap}.tg-balao{padding-left:14px}.tg-balao .tg-masc{display:none}}';
  var holo, balao, recorte, tour, nome, passo = 0, timer, ouvindo = false, manual = null, compacto = (function () { try { var v = sessionStorage.getItem('tour.compacto'); return v === null ? innerWidth < 760 : v === '1' } catch (e) { return false } })();
  var voltar = null, paginas = {};
  // ?voltar= só aceita uma página da própria Lojinha (nada de javascript: nem site de fora num link montado por alguém)
  function seguro(v) { return typeof v === 'string' && /^[a-z0-9_-]+\.html([?#][^\s<>\"']*)?$/i.test(v) ? v : null }   // paginas[passo] = página onde o passo foi mostrado (para o ◀ voltar)
  function aqui() { return (location.pathname.split('/').pop() || 'index.html') + (location.hash || '') }   // página + tela (#...) dos simuladores
  function salva() { try { if (tour) sessionStorage.setItem('tour.ativo', JSON.stringify({ nome: nome, passo: passo, voltar: voltar, paginas: paginas })); else sessionStorage.removeItem('tour.ativo') } catch (e) { } }
  function alvoEl(p) { try { return typeof p.alvo === 'function' ? p.alvo() : document.querySelector(p.alvo) } catch (e) { return null } }
  function masc() { return window.PERSONAGEM ? window.PERSONAGEM('pixel', 3) : '' }
  // "Você está no…": na 1ª vez que o tutorial chega numa página, o balão diz qual ferramenta real ela imita
  var LOJA = { pt: 'Site da Lojinha da Marina|a loja como o cliente vê', es: 'Sitio de la Lojinha da Marina|la tienda como la ve el cliente' };
  var GA = function (s, e) { return { pt: 'Gerenciador de Anúncios' + (s ? ' · ' + s : '') + '|onde se criam e acompanham as campanhas', es: 'Administrador de anuncios' + (e ? ' · ' + e : '') + '|donde se crean y siguen las campañas' } };
  var ONDE = {
    'meta-portfolio.html': { pt: 'Configurações do portfólio empresarial (Meta Business Suite)|pessoas, páginas, contas e pixels da empresa', es: 'Configuración del portfolio comercial (Meta Business Suite)|personas, páginas, cuentas y píxeles de la empresa' },
    'meta-suite.html': { pt: 'Meta Business Suite|posts, mensagens e as contas do Facebook e do Instagram', es: 'Meta Business Suite|publicaciones, mensajes y las cuentas de Facebook e Instagram' },
    'meta-anuncios.html': GA(), 'meta-feed.html': GA('anúncio no Feed', 'anuncio en el Feed'), 'meta-publicos.html': GA('Públicos', 'Públicos'),
    'meta-regras.html': GA('Regras automatizadas', 'Reglas automatizadas'), 'meta-relatorios.html': GA('Relatórios', 'Informes'), 'meta-entrega.html': GA('entrega dos anúncios', 'entrega de los anuncios'),
    'meta-shopads.html': GA('Anúncios das Lojas', 'Anuncios de Tiendas'), 'meta-limites.html': GA('Limites de anúncios por Página', 'Límites de anuncios por página'),
    'meta-catalogo.html': { pt: 'Gerenciador de Comércio|o catálogo de produtos e as fontes de dados', es: 'Administrador de ventas|el catálogo de productos y las fuentes de datos' },
    'meta-commerce.html': { pt: 'Gerenciador de Comércio|a loja no Facebook e no Instagram', es: 'Administrador de ventas|la tienda en Facebook e Instagram' },
    'meta-eventos.html': { pt: 'Gerenciador de Eventos|o Pixel, a API de Conversões e os eventos do site', es: 'Administrador de eventos|el píxel, la API de conversiones y los eventos del sitio' },
    'meta-mbe.html': { pt: 'Integração de parceiro da Meta (Meta Business Extension)|a janela que a plataforma da loja abre para ligar à Meta', es: 'Integración de socio de Meta (Meta Business Extension)|la ventana que abre la plataforma de la tienda para conectarse con Meta' },
    'meta-microdados.html': { pt: 'Ferramenta de depuração de microdados (Meta)|confere as etiquetas de produto de uma página', es: 'Herramienta de depuración de microdatos (Meta)|revisa las etiquetas de producto de una página' },
    'meta-instagram.html': { pt: 'Instagram|o perfil da loja como as pessoas veem', es: 'Instagram|el perfil de la tienda como lo ve la gente' },
    'meta-whatsapp.html': { pt: 'WhatsApp Business e WhatsApp|o celular da Marina e o de uma cliente', es: 'WhatsApp Business y WhatsApp|el celular de Marina y el de una clienta' },
    'meta-turbinar.html': { pt: 'Turbinar post (Página do Facebook / Instagram)|o atalho para anunciar um post pronto', es: 'Promocionar publicación (página de Facebook / Instagram)|el atajo para anunciar una publicación lista' },
    'meta-verified.html': { pt: 'Meta Verified para empresas|a assinatura de selo e suporte', es: 'Meta Verified para empresas|la suscripción de insignia y soporte' },
    'meta-checkoutsite.html': { pt: 'Compra no site (vinda de um anúncio)|o que o cliente vê depois de clicar no anúncio', es: 'Compra en el sitio (desde un anuncio)|lo que ve el cliente después de hacer clic en el anuncio' },
    'admin-shopify.html': { pt: 'Admin da Shopify|o painel onde a dona da loja Shopify cuida dela', es: 'Admin de Shopify|el panel donde la dueña de la tienda Shopify la administra' },
    'admin-woo.html': { pt: 'Painel do WordPress (WooCommerce)|onde a dona da loja WooCommerce cuida dela', es: 'Panel de WordPress (WooCommerce)|donde la dueña de la tienda WooCommerce la administra' },
    'arquivos-site.html': { pt: 'Editor de arquivos do site|os arquivos da hospedagem, onde fica o código', es: 'Editor de archivos del sitio|los archivos del alojamiento, donde está el código' },
    'ver-fonte.html': { pt: 'Código-fonte da página (Ctrl+U)|o arquivo da página, como o navegador recebeu', es: 'Código fuente de la página (Ctrl+U)|el archivo de la página, como lo recibió el navegador' },
    'codigo-fonte.html': { pt: 'Código-fonte da página (Ctrl+U no navegador)|o código que o navegador recebeu', es: 'Código fuente de la página (Ctrl+U en el navegador)|el código que recibió el navegador' },
    'loja.html': LOJA, 'produtos.html': LOJA, 'catalogo.html': LOJA, 'produto.html': LOJA, 'carrinho.html': LOJA, 'checkout.html': LOJA, 'obrigado.html': LOJA
  };
  function onde() {   // só no 1º passo do tutorial mostrado nesta página
    function de(f) { return ONDE[f] || (/^produto-/.test(f) ? LOJA : null) }
    var o = de(aqui().split('#')[0]); if (!o) return '';
    for (var k in paginas) if (+k < passo && de(String(paginas[k]).split('#')[0]) === o) return '';   // as páginas da loja contam como um lugar só
    var s = String(T(o)).split('|');
    return '<div class="tg-onde">📍 ' + T({ pt: 'Onde você está', es: 'Dónde estás' }) + ': <b>' + s[0] + '</b>' + (s[1] ? '<small>' + s[1] + '</small>' : '') + '</div>';
  }
  function monta() {
    if (holo) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    holo = document.createElement('div'); holo.className = 'tg-holo'; balao = document.createElement('div'); balao.className = 'tg-balao';
    recorte = document.createElement('div'); recorte.className = 'tg-recorte'; document.body.appendChild(recorte);
    document.body.appendChild(holo); document.body.appendChild(balao); document.body.classList.add('em-tour');
    balao.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tg]'); if (!b) return; var a = b.getAttribute('data-tg');
      if (a === 'compacta') { compacto = !compacto; try { sessionStorage.setItem('tour.compacto', compacto ? '1' : '0') } catch (x) { } balao.classList.toggle('compacto', compacto); posiciona(); return }
      if (a === 'passos') { listaPassos(); return }
      if (a === 'ir') { irPara(+b.getAttribute('data-n')); return }
      if (a === 'prox') vai(passo + 1); else if (a === 'volta') volta(); else if (a === 'fim' || a === 'sair') termina(a === 'fim');
    });
    // arrastar o balão: a pessoa escolhe onde ele fica para poder ler o que está marcado
    var drag = null;
    balao.addEventListener('mousedown', function (e) {
      if (e.button || balao.classList.contains('folha') || e.target.closest('button, a, input, select')) return; var r0 = balao.getBoundingClientRect(); drag = [e.clientX - r0.left, e.clientY - r0.top]; balao.classList.add('arrasta'); e.preventDefault();
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
      // passo de "leia e clique em Próximo": os botões dentro do destaque não valem (senão a tela anda e o tutorial fica para trás).
      // Passo com cond espera uma ação dentro do destaque (ex.: responder a pergunta): aí os botões valem.
      if (dentro && !p.clique && !p.cond && !proximoOk && !p.bloqueia && e.target.closest && e.target.closest('button, a, [data-acao], [data-ir]') && !(p.livre && e.target.closest(p.livre))) { e.preventDefault(); e.stopImmediatePropagation(); avisa({ pt: '📖 Primeiro leia e clique em Próximo no balão.', es: '📖 Primero lee y haz clic en Siguiente en el globo.' }); return }
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
    if (p.pagina && location.pathname.split('/').pop() !== p.pagina.split('?')[0]) { location.href = p.pagina; return }   // a página pode vir com ?parâmetros: compara só o nome
    var salto = false; try { if (sessionStorage.getItem('tour.salto') === String(n)) { sessionStorage.removeItem('tour.salto'); salto = true } } catch (e) { }
    if (salto) { if (p.garante) try { p.garante() } catch (e) { } return setTimeout(desenha, 250) }   // chegou por “Selecionar passo”: arruma a tela deste passo
    desenha();
  }
  var avisoT, faltou = 0;
  function avisa(txt) {   // a pessoa clicou fora do caminho: o balão balança e explica
    if (!balao) return; var a = balao.querySelector('.tg-avisa'); if (!a) { a = document.createElement('div'); a.className = 'tg-avisa'; balao.appendChild(a) }
    a.textContent = txt ? T(txt) : T({ pt: '👆 Siga o destaque amarelo (ou use os botões do balão).', es: '👆 Sigue lo destacado en amarillo (o usa los botones del globo).' });
    balao.classList.remove('tg-treme'); void balao.offsetWidth; balao.classList.add('tg-treme'); clearTimeout(avisoT); avisoT = setTimeout(function () { if (a.parentNode) a.remove() }, 3500);
  }
  /* Selecionar passo: a pessoa escolhe qualquer passo na lista. Passo já visto = como o ◀ (abre a página onde ele aconteceu);
     passo adiante = abre a página do passo (ou a do último passo antes dele que tem página) e o garante() arruma a tela. */
  function listaPassos() {
    var l = balao.querySelector('.tg-passos'); if (l) { l.remove(); posiciona(); return }
    l = document.createElement('div'); l.className = 'tg-passos';
    l.innerHTML = '<b>' + T({ pt: 'Selecionar passo', es: 'Seleccionar paso' }) + '</b>' + tour.map(function (q, i) {
      var tit = String(T(q.tit) || '').replace(/<[^>]*>/g, '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) || '…';
      return '<button data-tg="ir" data-n="' + i + '"' + (i === passo ? ' class="on"' : '') + '><i>' + (i + 1) + '</i><span>' + tit + '</span></button>' }).join('');
    balao.appendChild(l); var on = l.querySelector('.on'); if (on) l.scrollTop = Math.max(0, on.offsetTop - 60); posiciona();
  }
  function irPara(n) {
    if (!tour || n === passo || n < 0 || n >= tour.length) { var l0 = balao && balao.querySelector('.tg-passos'); if (l0) l0.remove(); return }
    if (n in paginas) return vai(n, true);
    if (!tour[n].pagina) { var j = n; while (j > 0 && !tour[j - 1].pagina && !(j - 1 in paginas)) j--; if (j !== n && j > 0) n = j }   // meio de um caminho sem página fixa (ex.: a compra): começa do início dele
    if (n in paginas) return vai(n, true);
    var pg = null; for (var k = n; k >= 0; k--) if (tour[k].pagina) { pg = tour[k].pagina; break }
    passo = n; salva();
    if (pg && pg.split('?')[0] !== location.pathname.split('/').pop()) { try { sessionStorage.setItem('tour.salto', String(n)) } catch (e) { } location.href = pg; return }
    var p = tour[n]; if (p.garante) try { p.garante() } catch (e) { }
    setTimeout(desenha, 250);
  }
  function volta() {   // volta ao passo anterior que mostra algo (pula para trás os que foram pulados)
    var n = passo - 1; while (n > 0 && !(n in paginas)) n--; vai(Math.max(0, n), true);
  }
  function desenha() {
    var p = tour[passo], prox = !p.clique && !p.fim, ond = onde(); paginas[passo] = aqui(); salva(); faltou = 0; p._consertou = false; manual = null; p._sig = null; p._sigF = null; p._fn = 0; p._dock = false;
    balao.classList.toggle('compacto', compacto); balao.classList.remove('fino');
    balao.innerHTML = '<button class="tg-sair" data-tg="sair">✕ ' + T(UI.sair) + '</button><button class="tg-bal-min" data-tg="compacta" title="' + T({ pt: 'Balão menor / maior (e dá para arrastá-lo)', es: 'Globo más pequeño / grande (y se puede arrastrar)' }) + '">' + T({ pt: '↔ menor/maior', es: '↔ menor/mayor' }) + '</button><span class="tg-masc">' + masc() + '</span>' + ond + '<b>' + T(p.tit) + '</b><p>' + T(p.txt) + '</p>' +
      (p.dica ? '<div class="tg-dica">💬 Pixel: ' + T(p.dica) + '</div>' : '') +
      '<div class="tg-ctrl"><button class="tg-passo-bt" data-tg="passos" title="' + T({ pt: 'Selecionar passo: escolher um passo na lista', es: 'Seleccionar paso: elegir un paso de la lista' }) + '">' + T(UI.passo) + ' ' + (passo + 1) + ' ' + T(UI.de) + ' ' + tour.length + ' ▾</button><span>' + (passo && !p.semVolta ? '<button class="tg-btn sec" data-tg="volta" title="' + T({ pt: 'Passo anterior', es: 'Paso anterior' }) + '">◀</button>' : '') +
      (p.fim ? '<button class="tg-btn" data-tg="fim">' + T(UI.fim) + '</button>' : prox ? '<button class="tg-btn" data-tg="prox">' + T(UI.prox) + '</button>' : '<small>' + T(UI.clique) + '</small>') + '</span></div>';
    p.antes && p.antes();
    posiciona();
  }
  // Onde pôr o balão: o lugar que cubra MENOS texto da tela (cada linha de texto e cada controle visível conta), nunca o destaque.
  // Se mesmo assim cobrir demais (lista comprida em tela estreita), rola o destaque para o alto e encaixa o balão embaixo.
  function textos() {
    var out = [], W = innerWidth, H = innerHeight, rg = document.createRange(), n, rs, k;
    function ok(r) { return r.width > 1 && r.height > 1 && r.bottom > 0 && r.top < H && r.right > 0 && r.left < W }
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: function (x) {
      if (!/\S/.test(x.nodeValue)) return 2; var q = x.parentElement; return !q || q.closest('.tg-balao,.tg-holo,.tg-recorte,script,style,noscript,[hidden]') ? 2 : 1 } });
    while ((n = w.nextNode())) { rg.selectNodeContents(n); rs = rg.getClientRects(); for (k = 0; k < rs.length; k++) if (ok(rs[k])) out.push(rs[k]) }
    [].forEach.call(document.querySelectorAll('input,select,textarea,button,img,svg'), function (e) { if (e.closest('.tg-balao,.tg-holo,.tg-recorte')) return; var r = e.getBoundingClientRect(); if (ok(r)) out.push(r) });
    return out;
  }
  function inter(x, y, w, h, r) { var a = Math.max(0, Math.min(x + w, r.right) - Math.max(x, r.left)), b = Math.max(0, Math.min(y + h, r.bottom) - Math.max(y, r.top)); return a * b }
  function melhorLugar(alvo, caixa, R, bw, bh, topo) {
    var W = innerWidth, H = innerHeight, m = 12, c = [], i, j;
    function add(x, y) { c.push([Math.max(m, Math.min(x, W - bw - m)), Math.max(topo, Math.min(y, H - bh - m))]) }
    var xs = Math.max(16, (W - bw - 2 * m) / 14), ys = Math.max(16, (H - bh - topo - m) / 14);
    for (i = m; i <= W - bw - m + 1; i += xs) for (j = topo; j <= H - bh - m + 1; j += ys) add(i, j);
    [alvo, caixa].forEach(function (b) { if (!b) return;
      add(b.right + 18, b.top); add(b.right + 18, b.bottom - bh); add(b.left - bw - 18, b.top); add(b.left - bw - 18, b.bottom - bh);
      add(b.left, b.bottom + 16); add(b.right - bw, b.bottom + 16); add(b.left, b.top - bh - 16); add(b.right - bw, b.top - bh - 16) });
    add((W - bw) / 2, H - bh - m); add((W - bw) / 2, topo);
    var ax = (alvo.left + alvo.right) / 2, ay = (alvo.top + alvo.bottom) / 2, melhor = null, nota = 1e18, k;
    c.forEach(function (p) {
      var n = inter(p[0], p[1], bw, bh, alvo) * 1e4 + (caixa ? inter(p[0], p[1], bw, bh, caixa) * 0.05 : 0);
      for (k = 0; k < R.length && n < nota; k++) n += inter(p[0], p[1], bw, bh, R[k]);
      n += (Math.abs(p[0] + bw / 2 - ax) + Math.abs(p[1] + bh / 2 - ay)) * 0.3;
      if (n < nota) { nota = n; melhor = [p[0], p[1], n] }
    });
    return melhor;
  }
  function topoFixo() {   // quanto da parte de cima da tela está ocupado por faixas/cabeçalhos fixos da página
    var m = 0; [].forEach.call(document.querySelectorAll('body > *, #app > *'), function (e) { if (e.closest('.tg-balao,.tg-holo,.tg-recorte')) return; var c = getComputedStyle(e); if (c.position === 'fixed') { var r = e.getBoundingClientRect(); if (r.top < 100 && r.height < 130 && r.width > innerWidth * .5) m = Math.max(m, r.bottom) } }); return m;
  }
  function paiRolavel(el) { var n = el.parentElement; while (n && n !== document.body) { var o = getComputedStyle(n).overflowY; if ((o === 'auto' || o === 'scroll') && n.scrollHeight > n.clientHeight + 4) return n; n = n.parentElement } return null }
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
    // telas estreitas: o balão vira uma "folha" colada embaixo e a página rola para o destaque ficar em cima dela (nada fica escondido atrás do balão)
    var folha = innerWidth < 760; balao.classList.toggle('folha', folha);
    if (folha) {
      var hS = balao.offsetHeight, tf = topoFixo(), H = innerHeight, sobra = function (a, b) { return Math.max(0, Math.min(r.bottom, b) - Math.max(r.top, a)) };
      var ovB = sobra(H - hS - 8, H), ovT = sobra(tf + 6, tf + 6 + hS), ok = r.bottom > tf && r.top < H;   // quanto do destaque ficaria atrás da folha embaixo / em cima
      // o destaque está embaixo na tela? a folha vai para cima; senão fica embaixo e, se preciso, a página rola para o destaque ficar acima dela
      if (ovB > 0 && ovT === 0 && ok) { balao.classList.add('folha-topo'); balao.style.setProperty('top', (tf + 6) + 'px', 'important') }
      else { balao.classList.remove('folha-topo'); balao.style.removeProperty('top') }
      var sg = [r.top | 0, r.height | 0, H, hS, passo, ovB > 0 ? 1 : 0].join();
      if (p._sigF !== sg && !p._folhaRolou2 && (ovB > 0 && (ovT > 0 || !ok) || r.top < tf + 4 || !ok)) {
        p._sigF = sg; var dy = r.top - (tf + 12);
        if (Math.abs(dy) > 6 && (p._fn = (p._fn || 0) + 1) <= 3) { p._folhaRolou2 = true; var sp2 = paiRolavel(el); if (sp2) sp2.scrollBy({ top: dy, behavior: 'smooth' }); else window.scrollBy({ top: dy, behavior: 'smooth' }); setTimeout(function () { p._folhaRolou2 = false; posiciona() }, 600) }
      }
      return;
    }
    if (manual) { balao.style.left = manual[0] + 'px'; balao.style.top = manual[1] + 'px'; return }
    var sig = [r.left | 0, r.top | 0, r.width | 0, r.height | 0, innerWidth, innerHeight, passo, compacto, p._dock ? 1 : 0].join();
    if (p._sig === sig) return; p._sig = sig;   // nada mudou: não recalcula (o relógio chama isto a cada 0,5 s)
    var R = textos(), cb = cx ? cx.getBoundingClientRect() : null, opcoes = [];
    (compacto ? ['compacto', 'fino'] : ['', 'compacto', 'fino']).forEach(function (v) {   // três larguras: normal, compacta e fina (cabe numa faixa vazia ao lado)
      balao.classList.toggle('compacto', v === 'compacto'); balao.classList.toggle('fino', v === 'fino');
      var bw = balao.offsetWidth, bh = balao.offsetHeight, q = melhorLugar(r, cb, R, bw, bh, 10); q[2] += v === 'fino' ? 400 : v === 'compacto' && !compacto ? 150 : 0;   // o menor só ganha se for bem melhor
      opcoes.push({ q: q, v: v });
    });
    opcoes.sort(function (a, b) { return a.q[2] - b.q[2] }); var o = opcoes[0]; window.__tgOpcoes = opcoes;   // (para depurar a escolha)
    balao.classList.toggle('compacto', o.v === 'compacto'); balao.classList.toggle('fino', o.v === 'fino');
    // ainda cobre muito texto (lista comprida em tela estreita): rola o destaque para cima e encaixa o balão embaixo, uma vez por passo
    if (o.q[2] > 2500 && !p._dock && r.top > 120) {
      p._dock = true; var sp = paiRolavel(el), d = r.top - 90;
      if (sp) sp.scrollBy({ top: d, behavior: 'smooth' }); else window.scrollBy({ top: d, behavior: 'smooth' });
      p._sig = null; setTimeout(posiciona, 450); return;
    }
    balao.style.left = o.q[0] + 'px'; balao.style.top = o.q[1] + 'px';
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
