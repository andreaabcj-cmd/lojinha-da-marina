/* Simulação do painel lateral da extensão "Meta Ads Data Advisor"
   (em português: "Consultor de Dados de Anúncios da Meta"), para computadores sem a extensão.
   Textos, seções e status copiados do painel real (versão pt-BR, out/2026). Os dados vêm dos
   eventos que esta loja disparou (window.LOJA.eventos). Sem logo da Meta: ícone neutro. */
(function () {
  if (window.__dataAdvisor) return; window.__dataAdvisor = true;
  var css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'assets/css/data-advisor.css'; document.head.appendChild(css);

  var IC = {
    logo: '<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="3" fill="#7aa7ff"/><path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4M8.8 8.8a4.5 4.5 0 0 0 0 6.4M15.2 8.8a4.5 4.5 0 0 1 0 6.4" fill="none" stroke="#b18cff" stroke-width="1.8" stroke-linecap="round"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 4h6l-1 5 3 3H7l3-3zM12 12v7M4 4l16 16"/></svg>',
    x: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    sino: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1c1e21" stroke-width="1.7"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0"/></svg>',
    opiniao: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1c1e21" stroke-width="1.7"><path d="M4 5h11M4 5v12h4v3l4-3h8V10"/><path d="M8 10h6M8 13h4M19 2v6M16 5h6"/></svg>',
    cima: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1c1e21" stroke-width="1.8"><path d="M6 15l6-6 6 6"/></svg>',
    baixo: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1c1e21" stroke-width="1.8"><path d="M6 9l6 6 6-6"/></svg>',
    dir: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1c1e21" stroke-width="1.8"><path d="M9 6l6 6-6 6"/></svg>',
    voltar: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1c1e21" stroke-width="1.8"><path d="M15 6l-6 6 6 6"/></svg>',
    copiar: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1c1e21" stroke-width="1.8"><rect x="5" y="3" width="11" height="15" rx="2"/><path d="M8 21h9a2 2 0 0 0 2-2V7M8 8h5M8 11h5M8 14h3"/></svg>',
    param: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1c1e21" stroke-width="1.8"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><path d="M18 2l3 3-8 8H10v-3z" fill="#1c1e21"/></svg>',
    pessoa: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1c1e21" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>',
    engrenagem: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#65676b" stroke-width="1.7"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>',
    local: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1c1e21" stroke-width="1.8"><path d="M3 11l18-8-8 18-2-8z"/></svg>',
    tema: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1c1e21" stroke-width="1.8"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/></svg>',
    url: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1c1e21" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/></svg>',
    eid: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1c1e21" stroke-width="1.8"><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="12" r="3" fill="#1c1e21"/></svg>',
    ok: '<svg viewBox="0 0 96 96" width="92" height="92" fill="none" stroke="#5f6368" stroke-width="5"><circle cx="48" cy="48" r="40"/><path d="M30 49l12 12 24-26" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  var STATUS = { ativo: ['Ativo', '#31a24c'], aviso: ['Aviso', '#f7b928'], erro: ['Erro', '#e41e3f'], inativo: ['Inativo', '#8a8d91'] };

  var aberto = false, vista = 'inicio', todos = false, nestaAberto = true, abertos = {}, mostrar = {};
  var painel = null;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }
  function L() { return window.LOJA || {} }
  function dados() { return L().eventos ? L().eventos() : { pagina: [], sessao: [] } }

  // o que a extensão "veria": eventos realmente disparados (perdido = nunca disparou; bloqueado = Pixel não carregou)
  function visiveis(lista) { return lista.filter(function (e) { return e.status !== 'perdido' && e.status !== 'bloqueado' }) }
  function statusEv(e, lista) {
    if (e.status === 'segurado') return 'inativo';
    if (/duplicado/i.test(e.nota || '') && e.nome === 'PageView') return 'erro';
    if (e.nome === 'Purchase' && (e.params.value === undefined || !e.params.currency)) return 'aviso';
    return 'ativo';
  }
  function statusPixel(lista) {
    if (!lista.length) return 'inativo';
    if (lista.every(function (e) { return e.status === 'segurado' })) return 'inativo';
    if (lista.some(function (e) { return statusEv(e) !== 'ativo' })) return 'aviso';
    return 'ativo';
  }
  function pid() { var p = String(L().pixelId || ''); return /^\d{8,20}$/.test(p) ? p : '000000000000000' }
  function dot(st) { var s = STATUS[st]; return '<span class="da-st"><i style="background:' + s[1] + '"></i>' + s[0] + '</span>' }

  function contaBadge() {
    var b = document.getElementById('maExtBadge'); if (!b) return;
    var n = L().bloqueado ? 0 : visiveis(dados().pagina).length; b.textContent = n || ''; b.style.display = n ? '' : 'none';
  }

  /* ---------- telas ---------- */
  function telaInicio() {
    var pag = visiveis(dados().pagina), bloq = L().bloqueado;
    var h = '<div class="da-sec"><button class="da-sec-tit" data-acao="nesta"><span>Nesta página</span>' + (nestaAberto ? IC.cima : IC.baixo) + '</button>';
    if (nestaAberto) {
      if (bloq) h += '<p class="da-vazio-txt">Nenhum pixel encontrado nesta página.</p>';
      else h += '<span class="da-chip">1 pixel</span><button class="da-card da-card-pixel" data-acao="pixel"><div><b>Pixel da Meta</b><span class="da-sub">Identificação: ' + pid() + '</span>' +
        '<div class="da-linha">' + dot(statusPixel(pag)) + '<span class="da-pill">' + pag.length + (pag.length === 1 ? ' evento' : ' eventos') + '</span></div></div>' + IC.dir + '</button>';
    }
    h += '</div><div class="da-vazio">' + IC.ok + '<b>Nenhuma ação disponível</b><p>Acessar <a href="https://www.facebook.com/events_manager2" target="_blank" rel="noopener">Gerenciador de Eventos</a> para oportunidades de desempenho</p></div>';
    return h;
  }

  function linhaParam(ic, nome, valor, chave, sempreMostrar) {
    var longo = sempreMostrar || typeof valor === 'object' || String(valor).length > 40;
    var txt = typeof valor === 'object' ? JSON.stringify(valor) : String(valor);
    if (typeof valor === 'object' && txt.length <= 6) longo = false;
    var v = !longo ? '<span class="da-val">' + esc(txt) + '</span>' :
      (mostrar[chave] ? '<span class="da-val da-quebra">' + esc(txt) + '</span><a class="da-link" data-mostrar="' + chave + '">Ocultar</a>' : '<a class="da-link" data-mostrar="' + chave + '">Mostrar</a>');
    return '<div class="da-item">' + ic + '<div><b>' + esc(nome) + '</b>' + v + '</div></div>';
  }

  function detalheEvento(e, k) {
    var h = '<div class="da-grupo">Parâmetros personalizados</div>';
    var ps = Object.keys(e.params || {});
    if (!ps.length) h += '<div class="da-item da-mut">Nenhum parâmetro enviado</div>';
    ps.forEach(function (p) { h += linhaParam(IC.param, p, e.params[p], k + 'p' + p) });
    if (e.ud) {
      h += '<div class="da-grupo">Parâmetros de correspondência avançada enviados</div>';
      Object.keys(e.ud).forEach(function (c) { var v = c === 'external_id' ? e.ud[c] : L().sha256 ? L().sha256(e.ud[c]) : e.ud[c]; h += linhaParam(IC.pessoa, c, v , k + 'u' + c, true) });
    }
    h += '<div class="da-grupo">Informações do evento</div>' +
      '<div class="da-item">' + IC.engrenagem + '<div><b>Método de configuração</b><span class="da-val">Manual</span></div></div>' +
      linhaParam(IC.local, 'Localização do pixel', (e.href || location.href), k + 'loc', true) +
      '<div class="da-item">' + IC.tema + '<div><b>Tema</b><span class="da-val">Janela</span></div></div>' +
      linhaParam(IC.url, 'URL chamado', e.url, k + 'url', true) +
      linhaParam(IC.eid, 'Identificação do evento', (e.eid || ''), k + 'eid', true);
    return h;
  }

  function listaEventos(lista, comUrl) {
    return '<div class="da-lista">' + lista.map(function (e) {
      var k = e._k, st = statusEv(e);
      return '<div class="da-ev' + (abertos[k] ? ' on' : '') + '"><button class="da-ev-cab" data-ev="' + k + '"><div><b>' + esc(e.nome) + '</b>' +
        (comUrl && e._outra ? '<span class="da-url">' + esc(e.href || '') + '</span>' : '') + dot(st) + '</div>' + (abertos[k] ? IC.cima : IC.baixo) + '</button>' +
        (abertos[k] ? '<div class="da-ev-corpo">' + detalheEvento(e, k) + '</div>' : '') + '</div>';
    }).join('') + '</div>';
  }

  function telaPixel() {
    var d = dados(), pag = visiveis(d.pagina);
    pag.forEach(function (e, i) { e._k = 'p' + i });
    var h = '<button class="da-voltar" data-acao="inicio" title="Voltar">' + IC.voltar + '</button>' +
      '<div class="da-card da-card-id"><div><b>Pixel da Meta</b><span class="da-sub">Identificação: ' + pid() + '</span></div><button class="da-ic" data-acao="copiar" title="Copiar">' + IC.copiar + '</button></div>';
    if (!todos) {
      h += '<div class="da-sec"><div class="da-sec-tit"><span>Eventos nesta página</span>' + IC.cima + '</div>' + (pag.length ? listaEventos(pag, false) : '<p class="da-vazio-txt">Nenhum evento nesta página.</p>') + '</div>' +
        '<a class="da-mais" data-acao="todos">Mostrar todos os eventos</a>';
    } else {
      // sessão inteira: eventos desta página primeiro; depois os anteriores, com o endereço
      var sess = visiveis(d.sessao).filter(function (e) { return pag.indexOf(e) < 0 && !pag.some(function (p) { return p.eid === e.eid && p.nome === e.nome }) });
      sess.forEach(function (e, i) { e._k = 's' + i; e._outra = true });
      h += '<div class="da-sec"><div class="da-sec-tit"><span>Eventos</span>' + IC.cima + '</div>' + listaEventos(pag.concat(sess), true) + '</div>' +
        '<a class="da-mais" data-acao="menos">Mostrar menos eventos</a>';
    }
    return h;
  }

  function render() {
    if (!painel) return;
    contaBadge();
    if (!aberto) return;
    document.getElementById('daCorpo').innerHTML = (vista === 'pixel' && !L().bloqueado) ? telaPixel() : telaInicio();
  }

  function monta() {
    painel = document.createElement('aside'); painel.className = 'da-painel'; painel.setAttribute('aria-label', 'Consultor de Dados de Anúncios da Meta (simulação)');
    painel.innerHTML = '<header class="da-cab">' + IC.logo + '<span>Consultor de Dados de Anúncios da Meta</span><button class="da-ic2" title="Fixar">' + IC.pin + '</button><button class="da-ic2" data-acao="fechar" title="Fechar">' + IC.x + '</button></header>' +
      '<div class="da-caixa"><div class="da-topo"><button class="da-ic" title="Notificações">' + IC.sino + '</button><button class="da-ic" title="Enviar comentários">' + IC.opiniao + '</button></div>' +
      '<div class="da-corpo" id="daCorpo"></div><p class="da-aviso">Simulação para treinamento. A extensão real (Meta Ads Data Advisor) fica no Chrome.</p></div>';
    document.body.appendChild(painel);
    painel.addEventListener('click', function (ev) {
      var a = ev.target.closest('[data-acao],[data-ev],[data-mostrar]'); if (!a) return;
      var ac = a.getAttribute('data-acao');
      if (a.hasAttribute('data-ev')) { var k = a.getAttribute('data-ev'); abertos[k] = !abertos[k] }
      else if (a.hasAttribute('data-mostrar')) { var m = a.getAttribute('data-mostrar'); mostrar[m] = !mostrar[m] }
      else if (ac === 'fechar') { alterna(false); return }
      else if (ac === 'nesta') nestaAberto = !nestaAberto;
      else if (ac === 'pixel') { vista = 'pixel'; todos = false }
      else if (ac === 'inicio') vista = 'inicio';
      else if (ac === 'todos') todos = true;
      else if (ac === 'menos') todos = false;
      else if (ac === 'copiar') { try { navigator.clipboard.writeText(pid()) } catch (e) { } }
      render();
    });
    render();
  }
  function alterna(on) {
    aberto = on === undefined ? !aberto : on;
    try { sessionStorage.setItem('loja.daAberto', aberto ? '1' : '') } catch (e) { }
    if (painel) painel.classList.toggle('open', aberto);
    if (aberto) try { document.dispatchEvent(new CustomEvent('loja:ferramenta', { detail: 'da' })) } catch (e) { }   // uma ferramenta por vez
    document.documentElement.classList.toggle('da-aberto', aberto);
    render();
  }

  document.addEventListener('click', function (ev) { if (ev.target.closest && ev.target.closest('#maExt')) alterna() });
  document.addEventListener('loja:ferramenta', function (e) { if (e.detail !== 'da' && aberto) alterna(false) });
  document.addEventListener('loja:evento', function () { render() });
  document.addEventListener('loja:faixa', function () { contaBadge() });
  function inicia() { monta(); try { if (sessionStorage.getItem('loja.daAberto')) alterna(true) } catch (e) { } }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inicia); else inicia();
})();
