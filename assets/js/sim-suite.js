/* Simulador do Meta Business Suite (Criar post no Facebook e no Instagram, Caixa de Entrada e Insights) — layout fiel, visual da Lojinha.
   Estado no navegador (localStorage "sim.suite"); nada é enviado à Meta.
   Textos copiados das telas reais (conta de aula, 14–16/10/2026), em português e em espanhol (?locale=es_LA).
   As conversas da Caixa de Entrada são de EXEMPLO (a conta de aula está vazia). O que não foi visto de verdade fica marcado "a conferir".
   Ver _roteiro/amostras_meta.md. URL: meta-suite.html?zerar=1 · rotas #inicio #criar #caixa #insights
   Tutoriais (tour.js): ?tour=publicar-dois | responder-mensagens | ler-insights */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var PAGINA = 'Lojinha da Marina - Fictício', IG = 'lojinhadamarina.aula';
  var FOTOS = [{ id: 'f1', nome: 'caneca-azul', img: 'assets/img/caneca_01.png' }, { id: 'f2', nome: 'camiseta-montanha', img: 'assets/img/camiseta_02.png' }, { id: 'f3', nome: 'ecobag-folha', img: 'assets/img/ecobag_03.png' }];
  function inicial() {
    return { dest: { fb: true, ig: true }, midia: '', texto: '', textoIg: '', pers: false, prog: false, story: false, turbinar: false, aviso: true, pub: false, escolhe: false,
      msgs: [
        { id: 'm1', canal: 'instagram', quem: 'ana.cafe', txt: 'Oi! Quais são os preços das canecas?', lida: false, resp: '' },
        { id: 'm2', canal: 'igcom', quem: 'bruna.arte', txt: 'Lindo! Tem em amarelo?', lida: false, resp: '', post: 'Caneca azul' },
        { id: 'm3', canal: 'messenger', quem: 'Carlos Exemplo', txt: 'Você envia para todo o Brasil?', lida: false, resp: '' },
        { id: 'm4', canal: 'fbcom', quem: 'Marcos Exemplo', txt: 'Quanto custa a camiseta?', lida: true, resp: '', post: 'Camiseta Montanha' },
        { id: 'm5', canal: 'instagram', quem: 'vizinha.da.loja', txt: 'Posso personalizar as camisetas?', lida: false, resp: '' }],
      canal: 'todos', filtro: '', sel: '', ent: 'Facebook', aba: 'resultados' };
  }
  var S = ler('sim.suite', null) || inicial();
  if (params.get('zerar')) S = inicial();
  var DEL = null;                                   // rascunho do post sendo escrito (não persiste a escolha de foto aberta)
  function grava() { try { localStorage.setItem('sim.suite', JSON.stringify(S)) } catch (e) { } window.__simSu = { S: S } }
  grava();
  function rota() { return (location.hash || '#inicio').slice(1) }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento do Meta Business Suite · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function conferido(msg) { return '<p class="conferido' + (msg ? ' pendente' : '') + '">' + (msg || '✓ Tela conferida com o Meta Business Suite real em ' + CONF + ' (conta de aula)') + '</p>' }

  var CANAIS = [['todos', 'Todas as mensagens'], ['messenger', 'Messenger'], ['instagram', 'Instagram'], ['whatsapp', 'WhatsApp'], ['fbcom', 'Comentários do Facebook'], ['igcom', 'Comentários do Instagram']];
  var ICONE = { instagram: '📸', messenger: '💬', igcom: '📸', fbcom: '👍', whatsapp: '🟢' };
  function nao() { return S.msgs.filter(function (m) { return !m.lida }).length }

  function nav(atual) {
    var it = function (id, ic, t, extra) { return '<button class="ss-it' + (atual === id ? ' on' : '') + '"' + (id ? ' data-ir="' + id + '" data-t="nav-' + id + '"' : ' disabled') + '><span>' + ic + '</span>' + t + (extra || '') + '</button>' };
    return '<nav class="ss-nav" data-t="menu">' + it('inicio', '🏠', 'Página inicial') + it('', '🔔', 'Notificações') + it('', '📣', 'Gerenciador de Anúncios') + it('caixa', '💬', 'Caixa de Entrada', nao() ? '<b class="ss-bol">' + nao() + '</b>' : '') + it('', '🗂️', 'Conteúdo') + it('', '🎬', 'Creator Marketing') + it('', '📅', 'Planner') + it('', '📢', 'Anúncios') + it('insights', '📊', 'Insights') + it('', '💰', 'Monetização') + it('', '☰', 'Todas as ferramentas') + '</nav>';
  }
  function pagina(atual, titulo, sub, corpo, botoes) {
    return casca('<div class="ss">' + nav(atual) + '<main class="ss-main"><div class="ss-topo"><div><h1>' + titulo + '</h1>' + (sub ? '<p class="ss-sub">' + sub + '</p>' : '') + '</div><div class="ss-bt">' + (botoes || '') + '</div></div>' + corpo + conferido() + '</main></div>');
  }

  /* ---------- início ---------- */
  function inicio() {
    return pagina('inicio', PAGINA, '', '<div class="ss-card"><h3>Perfil</h3><p>' + PAGINA + ' · @' + IG + '</p><p class="miudo">Editar Página do Facebook | Editar perfil do Instagram · Seguidores do Facebook · Seguidores do Instagram</p><p class="ss-acoes"><button class="btn" data-ir="criar" data-t="btn-criar-post">Criar post</button><button class="btn sec" disabled>Criar anúncio</button><button class="btn sec" disabled>Criar reel</button><button class="btn sec" disabled>Criar story</button><button class="btn sec" disabled>Mais</button></p></div>' +
      '<div class="ss-card"><h3>Lista de tarefas</h3><p class="miudo">Verifique as mensagens não lidas, os comentários e outros itens que precisam de atenção.</p>' + (nao() ? '<p data-t="tarefas"><b>' + nao() + '</b> itens na Caixa de Entrada esperando resposta (exemplo do simulador).</p>' : '<p>Você está em dia com sua lista de tarefas.</p>') + '</div>' +
      '<div class="ss-card"><h3>Gerencie seu conteúdo de marketing</h3><p class="miudo">Veja seus posts, stories e anúncios recentes e futuros, e programe conteúdo para se planejar com antecedência.</p></div>');
  }

  /* ---------- criar post ---------- */
  function foto() { return FOTOS.filter(function (f) { return f.id === S.midia })[0] }
  function podePublicar() { return !!(S.midia || S.texto.trim()) && (S.dest.fb || S.dest.ig) }
  function criar() {
    var f = foto(), ig = S.dest.ig, fb = S.dest.fb;
    var para = (fb ? PAGINA : '') + (fb && ig ? ' e ' : '') + (ig ? IG : '');
    var prev = '<div class="ss-prev"><div class="ss-prev-topo"><span class="ga-tag">Prévia do feed do Facebook ▾</span></div><div class="fd-card"><div class="fd-cab"><b>' + PAGINA + '</b><small>Agora há pouco · 🌐</small></div>' + (S.texto ? '<p class="fd-txt">' + esc(S.texto) + '</p>' : '<p class="fd-txt ss-ph">&nbsp;</p>') +
      '<div class="fd-quadro" style="aspect-ratio:1">' + (f ? '<div class="fd-img" style="aspect-ratio:1;width:100%;background:url(' + f.img + ') center/contain no-repeat #EAF1FB"></div>' : '<div class="ss-vazio">🖼️</div>') + '</div><div class="fd-acoes"><span>Curtir</span><span>Comentar</span><span>Compartilhar</span></div></div>' +
      (!fb ? '<p class="miudo">⚠ Sem a Página marcada em “Postar em”, a prévia do Facebook não é usada (a conferir).</p>' : '') + '</div>';
    var form = (S.aviso ? '<div class="ga-aviso" data-t="aviso-anuncio"><b>Quer criar um post de anúncio?</b> <button class="ss-x" data-acao="fecha-aviso">✕</button><br><small>Os posts de anúncios só podem ser criados no Facebook. Depois que você selecionar sua Página do Facebook na seção “Postar em”, um botão aparecerá nos detalhes do post para transformá-lo em anúncio.</small> <a>Ver mais</a></div>' : '') +
      '<div class="ga-sec" data-t="postar-em"><h3>Postar em</h3><label class="ga-lin' + (fb ? ' on' : '') + '" data-t="dest-fb"><input type="checkbox" data-dest="fb"' + (fb ? ' checked' : '') + '/><span><b>' + PAGINA + '</b><small>Página do Facebook</small></span></label>' +
      '<label class="ga-lin' + (ig ? ' on' : '') + '" data-t="dest-ig"><input type="checkbox" data-dest="ig"' + (ig ? ' checked' : '') + '/><span><b>' + IG + '</b><small>Perfil do Instagram</small></span></label>' + (!fb && !ig ? '<p class="miudo err">Escolha pelo menos um lugar para postar.</p>' : '') + '<p class="miudo">Postar em: ' + (para || '—') + '</p></div>' +
      '<div class="ga-sec" data-t="midia"><h3>Mídia</h3><p class="miudo">Compartilhe fotos e vídeos. Os posts do Instagram não podem ter mais de 10 fotos.</p>' + (f ? '<div class="fd-midia"><span class="fd-mini" style="background-image:url(' + f.img + ')"></span><span><b>' + f.nome + '</b><small>1080 × 1080</small></span><button class="btn sec" data-acao="tira-foto">Excluir</button></div>' : '<button class="btn sec" data-acao="abre-fotos" data-t="btn-add-foto">🖼️ Adicionar foto/vídeo</button>') +
      (S.escolhe ? '<div class="fd-lib" data-t="fotos">' + FOTOS.map(function (x) { return '<button class="fd-thumb" data-foto="' + x.id + '" data-t="foto-' + x.id + '"><span style="background-image:url(' + x.img + ')"></span><small>' + x.nome + '</small></button>' }).join('') + '</div>' : '') + '</div>' +
      '<div class="ga-sec" data-t="detalhes"><h3>Detalhes do post</h3><label class="ga-lin"><input type="checkbox" id="pPers"' + (S.pers ? ' checked' : '') + ' data-t="chk-pers"/><span><b>Personalizar post para o Facebook e o Instagram</b></span></label>' +
      (S.pers ? '<p class="miudo">Com isto ligado, cada rede pode ter o seu texto (a tela real mostra as duas versões; o formato exato não foi visto: a conferir).</p><p><b>Texto do Facebook</b></p><textarea class="ga-in" id="pTexto" rows="3" data-t="texto">' + esc(S.texto) + '</textarea><p><b>Texto do Instagram</b></p><textarea class="ga-in" id="pTextoIg" rows="3">' + esc(S.textoIg) + '</textarea>' :
        '<p><b>Texto</b></p><textarea class="ga-in" id="pTexto" rows="3" placeholder="Clique para abrir o menu de hashtag." data-t="texto">' + esc(S.texto) + '</textarea>') +
      '<p class="miudo"># · 😊 · Sentimento/atividade · Localização · Receber mensagens · Receber mensagens do WhatsApp · Teste A/B · Mais recursos</p></div>' +
      '<div class="ga-sec"><h3>Programar</h3><label class="ga-lin"><input type="checkbox" id="pProg"' + (S.prog ? ' checked' : '') + '/><span><b>Definir data e hora</b></span></label></div>' +
      '<div class="ga-sec"><h3>Compartilhar em</h3><label class="ga-lin"><input type="checkbox" id="pStory"' + (S.story ? ' checked' : '') + '/><span><b>' + PAGINA + '</b><small>Story do Facebook · Público</small></span></label></div>' +
      '<div class="ga-sec"><h3>Configurações de privacidade</h3><p class="miudo">Altere as configurações de privacidade para controlar quem pode ver seu post no feed, no Watch, nos resultados de pesquisa e no seu perfil.</p><label class="ga-lin on"><input type="radio" checked/><span><b>Público</b><small>Qualquer pessoa dentro ou fora do Facebook poderá ver seu post.</small></span></label></div>';
    return casca('<div class="ss ss-cria"><main class="ss-main ss-form"><div class="ss-topo"><h1>Criar post</h1></div><div class="ss-dois"><div class="ss-esq">' + form + '</div><div class="ss-dir">' + prev + '</div></div>' +
      '<div class="ga-rod"><label class="ss-tg"><input type="checkbox" id="pTurb"' + (S.turbinar ? ' checked' : '') + ' data-t="chk-turbinar"/> Turbinar</label><span class="esq"></span><button class="btn sec" data-ir="inicio" data-t="btn-cancelar">Cancelar</button><button class="btn sec" disabled>Concluir mais tarde</button><button class="btn" data-acao="publicar" data-t="btn-publicar"' + (podePublicar() ? '' : ' disabled') + '>Publicar</button></div>' +
      conferido('⚠ O seletor “Postar em” e o texto de cada rede ao personalizar foram montados pela documentação; o resto da tela foi conferido em ' + CONF + ' (a conferir)') + '</main></div>' + (S.pub ? modalPub() : ''));
  }
  function modalPub() {
    var onde = (S.dest.fb ? 'no Facebook' : '') + (S.dest.fb && S.dest.ig ? ' e ' : '') + (S.dest.ig ? 'no Instagram' : '');
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-pub"><h2>Post publicado ' + onde + '</h2><p>Há mais posts que você quer publicar? Programe um para não precisar lembrar depois.</p>' + (S.turbinar ? '<p class="ga-aviso">Você deixou “Turbinar” ligado: depois de publicar, a tela leva ao Turbinar (a conferir). No simulador, nada foi enviado à Meta.</p>' : '<p class="miudo">No simulador, nada foi enviado à Meta. Na lista de posts, o post novo ganha o botão Turbinar.</p>') + '<div class="rodape-jan"><button class="btn sec" data-acao="fecha-pub">Talvez mais tarde</button><button class="btn" data-acao="fecha-pub-novo">Programar outro post</button></div></div></div>';
  }

  /* ---------- caixa de entrada ---------- */
  function caixa() {
    var lista = S.msgs.filter(function (m) {
      var okc = S.canal === 'todos' ? m.canal !== 'igcom' && m.canal !== 'fbcom' : m.canal === S.canal;
      return okc && (S.filtro !== 'naolidas' || !m.lida);
    });
    var ab = CANAIS.map(function (c) { return '<button class="fd-aba' + (S.canal === c[0] ? ' on' : '') + '" data-canal="' + c[0] + '" data-t="canal-' + c[0] + '">' + c[1] + (c[0] === 'whatsapp' ? ' <span class="ga-tag vd">Novo</span>' : '') + '</button>' }).join('');
    var itens = lista.length ? lista.map(function (m) { return '<button class="ss-msg' + (S.sel === m.id ? ' on' : '') + (m.lida ? '' : ' nova') + '" data-msg="' + m.id + '" data-t="msg-' + m.id + '"><span class="ss-av">' + ICONE[m.canal] + '</span><span><b>' + esc(m.quem) + '</b><small>' + esc(m.resp ? 'Você: ' + m.resp : m.txt) + '</small></span></button>' }).join('') : '<p class="ss-vazio">' + (S.canal === 'whatsapp' ? 'Nenhuma conversa aqui. O WhatsApp não foi conectado nesta conta de aula (a conferir).' : 'Nenhuma conversa neste filtro.') + '</p>';
    var m = S.msgs.filter(function (x) { return x.id === S.sel })[0], dir;
    if (!m) dir = '<p class="ss-vazio">Escolha uma conversa à esquerda.</p>';
    else {
      var com = m.canal === 'igcom' || m.canal === 'fbcom';
      dir = '<div class="ss-conv" data-t="conversa"><p class="miudo">' + (com ? 'Comentário no post “' + esc(m.post) + '”' : 'Conversa') + ' · ' + (m.canal === 'instagram' || m.canal === 'igcom' ? 'Instagram' : m.canal === 'messenger' ? 'Messenger' : 'Facebook') + '</p><div class="ss-bal">' + esc(m.txt) + '</div>' + (m.resp ? '<div class="ss-bal eu">' + esc(m.resp) + '</div>' : '') +
        '<textarea class="ga-in" id="mResp" rows="3" placeholder="' + (com ? 'Escreva uma resposta…' : 'Escreva uma mensagem…') + '" data-t="resposta"></textarea><button class="btn" data-acao="envia" data-t="btn-enviar">Enviar</button></div>';
    }
    return pagina('caixa', 'Caixa de Entrada', 'Responda a mensagens, configure automações e muito mais.', '<div class="fd-abas" data-t="canais">' + ab + '</div><div class="ss-filtros"><button class="fd-aba' + (S.filtro === 'naolidas' ? ' on' : '') + '" data-filtro="naolidas" data-t="filtro-naolidas">Não lidas</button><button class="fd-aba" disabled>Prioridade</button><button class="fd-aba" disabled>Respostas a anúncios</button><span class="miudo">Conversas de exemplo do simulador (a conta de aula está vazia).</span></div><div class="ss-cx"><div class="ss-lista">' + itens + '</div><div class="ss-leitura">' + dir + '</div></div>',
      '<button class="btn sec" disabled>Automações</button><button class="btn sec" disabled>Criar anúncio de mensagens</button><button class="btn sec" disabled>Insights sobre mensagens</button><span class="ga-tag vd">Disponível</span>');
  }

  /* ---------- insights ---------- */
  var CARTOES = {
    Facebook: [['Visualizações', 15, 'Vistas de seguidores e de não seguidores'], ['Visualizadores', 2, ''], ['Interações com o conteúdo', 0, ''], ['Cliques no link do Facebook', 0, ''], ['Visitas ao Facebook', 7, ''], ['Seguidores', 0, '']],
    Instagram: [['Visualizações', 0, ''], ['Visualizadores', 0, ''], ['Interações com o conteúdo', 0, ''], ['Cliques no link', 0, '']]
  };
  function insights() {
    var ent = S.ent, aba = S.aba;
    var menu = '<div class="ss-sub-nav" data-t="menu-insights">' + [['visao', 'Visão geral'], ['plano', 'Plano'], ['resultados', 'Resultados'], ['publico', 'Público'], ['mensagens', 'Mensagens']].map(function (a) { return '<button class="fd-aba' + (aba === a[0] ? ' on' : '') + '"' + (a[0] === 'resultados' || a[0] === 'publico' ? ' data-aba2="' + a[0] + '" data-t="aba2-' + a[0] + '"' : ' disabled') + '>' + a[1] + '</button>' }).join('') + '</div>';
    var corpo;
    if (aba === 'publico') corpo = ent === 'Instagram' ? '<div class="ga-aviso" data-t="aviso-100">Você poderá saber mais sobre seu público quando sua conta do Instagram tiver pelo menos 100 seguidores.</div>' : '<div class="ga-aviso">Os dados de público do Facebook ainda não apareceram nesta conta de aula (a conferir).</div>';
    else corpo = '<div class="ss-grade" data-t="cartoes">' + CARTOES[ent].map(function (c) { return '<div class="ss-cartao"><b>' + c[0] + '</b><span class="ss-num">' + c[1] + '</span><small>' + (c[1] ? 'Últimos 28 dias' : 'Nenhuma atividade durante o intervalo de datas.') + '</small><button class="btn sec" disabled>Exportar</button></div>' }).join('') + '</div>';
    return pagina('insights', 'Insights', 'Veja os resultados de desempenho e outras informações.',
      '<div class="ss-ent"><label>Seletor de entidade <select class="ga-in" id="selEnt" data-t="sel-ent"><option' + (ent === 'Facebook' ? ' selected' : '') + '>Facebook</option><option' + (ent === 'Instagram' ? ' selected' : '') + '>Instagram</option></select></label><span class="ga-tag">Últimos 28 dias</span></div>' + menu + corpo +
      '<p class="miudo">Os números do Facebook são os da conta de aula (poucos, do anúncio de teste). Os do Instagram estavam zerados quando conferimos.</p>');
  }

  var TELAS = { inicio: inicio, criar: criar, caixa: caixa, insights: insights };
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-canal]'))) { S.canal = c.getAttribute('data-canal'); S.sel = ''; grava(); render(); return }
    if ((c = t.closest('[data-filtro]'))) { S.filtro = S.filtro === 'naolidas' ? '' : 'naolidas'; grava(); render(); return }
    if ((c = t.closest('[data-msg]'))) { S.sel = c.getAttribute('data-msg'); S.msgs.forEach(function (m) { if (m.id === S.sel) m.lida = true }); grava(); render(); return }
    if ((c = t.closest('[data-aba2]'))) { S.aba = c.getAttribute('data-aba2'); grava(); render(); return }
    if ((c = t.closest('[data-foto]'))) { S.midia = c.getAttribute('data-foto'); S.escolhe = false; grava(); render(); return }
    var a = t.closest('[data-ir],[data-acao]'); if (!a || a.disabled) return;
    if (a.hasAttribute('data-ir')) { vai(a.getAttribute('data-ir')); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'fecha-aviso') { S.aviso = false } else if (ac === 'abre-fotos') { S.escolhe = true } else if (ac === 'tira-foto') { S.midia = '' }
    else if (ac === 'publicar') { if (!podePublicar()) return; S.pub = true }
    else if (ac === 'fecha-pub' || ac === 'fecha-pub-novo') { S.pub = false; S.midia = ''; S.texto = ''; S.textoIg = ''; S.turbinar = false; vai(ac === 'fecha-pub' ? 'inicio' : 'criar') }
    else if (ac === 'envia') { var r = $('#mResp'); if (!r || !r.value.trim()) return; S.msgs.forEach(function (m) { if (m.id === S.sel) { m.resp = r.value.trim(); m.lida = true } }) }
    else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.getAttribute && t.getAttribute('data-dest')) { S.dest[t.getAttribute('data-dest')] = t.checked }
    else if (t.id === 'pPers') S.pers = t.checked; else if (t.id === 'pProg') S.prog = t.checked; else if (t.id === 'pStory') S.story = t.checked; else if (t.id === 'pTurb') S.turbinar = t.checked;
    else if (t.id === 'selEnt') S.ent = t.value; else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.id === 'pTexto') { S.texto = t.value; grava(); var b = $('[data-t=btn-publicar]'); if (b) b.disabled = !podePublicar(); var p = $('.fd-txt'); if (p) { p.textContent = S.texto; p.classList.remove('ss-ph') } }
    else if (t.id === 'pTextoIg') { S.textoIg = t.value; grava() }
  });
  window.addEventListener('hashchange', render);
  function render() {
    var r = rota(); if (!TELAS[r]) r = 'inicio';
    var foco = document.activeElement && document.activeElement.id, val = foco && document.activeElement.value;
    $('#app').innerHTML = TELAS[r]();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simSu = { S: S };
  }
  window.SIMSU = { vai: vai, estado: function () { return S }, zera: function () { S = inicial(); grava() }, set: function (o) { for (var k in o) S[k] = o[k]; grava() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function su() { return window.__simSu ? window.__simSu.S : S }
  TOURS['publicar-dois'] = [
    { alvo: '[data-t=btn-criar-post]', clique: true, garante: function () { SIMSU.zera(); location.hash = 'inicio'; render() }, tit: T('Criar um post', 'Crear una publicación'), txt: T('Esta é a Página inicial do Business Suite. A Marina quer publicar uma foto da Caneca azul no Facebook e no Instagram de uma vez. Clique em Criar post.', 'Esta es la página de inicio de Business Suite. Marina quiere publicar una foto de la Caneca azul en Facebook y en Instagram a la vez. Haz clic en Crear publicación.') },
    { alvo: '[data-t=aviso-anuncio]', garante: function () { SIMSU.zera(); location.hash = 'criar'; render() }, tit: T('Post ou anúncio?', '¿Publicación o anuncio?'), txt: T('Este aviso lembra: post de anúncio só se cria no Facebook. Um post comum é diferente de um anúncio, e depois dá para turbinar o post. Clique em Próximo.', 'Este aviso recuerda: una publicación de anuncio solo se crea en Facebook. Una publicación común es distinta de un anuncio, y después se puede promocionar la publicación. Haz clic en Siguiente.') },
    { alvo: '[data-t=postar-em]', garante: function () { SIMSU.zera(); location.hash = 'criar'; render() }, cond: function () { return su().dest.fb && su().dest.ig },
      tit: T('Onde postar', 'Dónde publicar'), txt: T('Em “Postar em” aparecem a Página do Facebook e o perfil do Instagram. Deixe os dois marcados: o post vai para os dois (é o chamado post cruzado). Se só um aparecer, falta ligar o Instagram à Página (aula 04). Clique em Próximo.', 'En “Publicar en” aparecen la Página de Facebook y el perfil de Instagram. Deja los dos marcados: la publicación va a los dos. Si solo aparece uno, falta vincular el Instagram a la Página (clase 04). Haz clic en Siguiente.'),
      bloqueia: function (t) { return false }, dica: T('Se desmarcou um, marque de novo.', 'Si desmarcaste uno, márcalo de nuevo.') },
    { alvo: '[data-t=btn-add-foto]', clique: true, garante: function () { SIMSU.zera(); location.hash = 'criar'; render() }, tit: T('A mídia', 'El contenido multimedia'), txt: T('A tela avisa: os posts do Instagram não podem ter mais de 10 fotos. Clique em Adicionar foto/vídeo.', 'La pantalla avisa: las publicaciones de Instagram no pueden tener más de 10 fotos. Haz clic en Agregar foto/video.') },
    { alvo: '[data-t=fotos]', garante: function () { SIMSU.zera(); SIMSU.set({ escolhe: true }); location.hash = 'criar'; render() }, cond: function () { return su().midia === 'f1' },
      bloqueia: function (t) { var b = t.closest('[data-foto]'); return !!(b && b.getAttribute('data-foto') !== 'f1') }, erro: T('Escolha a foto da caneca azul (a primeira).', 'Elige la foto de la taza azul (la primera).'), tit: T('Escolher a foto', 'Elegir la foto'), txt: T('Escolha a foto da caneca azul.', 'Elige la foto de la taza azul.') },
    { alvo: '[data-t=texto]', garante: function () { SIMSU.zera(); SIMSU.set({ midia: 'f1' }); location.hash = 'criar'; render() }, cond: function () { return su().texto.trim().length > 3 },
      tit: T('O texto', 'El texto'), txt: T('Escreva o texto do post, por exemplo: “Nova caneca azul na Lojinha! 💙”. Repare na prévia ao lado mudando enquanto você digita. Depois clique em Próximo.', 'Escribe el texto de la publicación, por ejemplo: “¡Nueva caneca azul en la Lojinha! 💙”. Fíjate en la vista previa de al lado cambiando mientras escribes. Después haz clic en Siguiente.'), dica: T('Digite pelo menos uma frase curta.', 'Escribe al menos una frase corta.') },
    { alvo: '[data-t=chk-pers]', garante: function () { SIMSU.zera(); SIMSU.set({ midia: 'f1', texto: 'Nova caneca azul na Lojinha! 💙' }); location.hash = 'criar'; render() }, tit: T('Personalizar para cada rede', 'Personalizar para cada red'), txt: T('Este interruptor permite um texto diferente para o Facebook e para o Instagram. Para a primeira vez, deixe desligado: o mesmo texto vai nos dois. Clique em Próximo.', 'Este interruptor permite un texto distinto para Facebook y para Instagram. Para la primera vez, déjalo desactivado: el mismo texto va en los dos. Haz clic en Siguiente.') },
    { alvo: '[data-t=chk-turbinar]', garante: function () { SIMSU.zera(); SIMSU.set({ midia: 'f1', texto: 'Nova caneca azul na Lojinha! 💙' }); location.hash = 'criar'; render() }, tit: T('Turbinar fica desligado', 'Promocionar queda desactivado'), txt: T('Aqui embaixo está o interruptor Turbinar. Ligado, ele leva a transformar o post em anúncio (e gastar dinheiro). A Marina só quer postar: deixe desligado. Clique em Próximo.', 'Aquí abajo está el interruptor Promocionar. Activado, lleva a convertir la publicación en anuncio (y gastar dinero). Marina solo quiere publicar: déjalo desactivado. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-publicar]', clique: true, garante: function () { SIMSU.zera(); SIMSU.set({ midia: 'f1', texto: 'Nova caneca azul na Lojinha! 💙' }); location.hash = 'criar'; render() }, tit: T('Publicar', 'Publicar'), txt: T('O botão Publicar só acendeu depois que havia foto e texto. Clique nele. (No simulador, nada vai para a Meta.)', 'El botón Publicar solo se encendió después de tener foto y texto. Haz clic en él. (En el simulador, nada va a Meta.)') },
    { alvo: '[data-t=jan-pub]', fim: true, semVolta: true, garante: function () { SIMSU.set({ midia: 'f1', texto: 'Nova caneca azul na Lojinha! 💙', pub: true }); location.hash = 'criar'; render() }, tit: T('Publicado nos dois! 🎉', '¡Publicado en los dos! 🎉'), txt: T('O post foi para a Página e para o Instagram de uma vez. Na lista de posts, ele ganha o botão Turbinar. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'La publicación fue a la Página y a Instagram a la vez. En la lista de publicaciones, gana el botón Promocionar. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['responder-mensagens'] = [
    { alvo: '[data-t=nav-caixa]', clique: true, garante: function () { SIMSU.zera(); location.hash = 'inicio'; render() }, tit: T('A Caixa de Entrada', 'Los Mensajes'), txt: T('Todas as mensagens e comentários da Página e do Instagram chegam num lugar só: a Caixa de Entrada. A bolinha mostra quantos esperam resposta. Clique nela.', 'Todos los mensajes y comentarios de la Página y de Instagram llegan a un solo lugar: Mensajes. El globito muestra cuántos esperan respuesta. Haz clic en él.') },
    { alvo: '[data-t=canais]', garante: function () { SIMSU.zera(); location.hash = 'caixa'; render() }, tit: T('Os canais', 'Los canales'), txt: T('Em cima ficam os canais: Todas as mensagens, Messenger, Instagram, WhatsApp, Comentários do Facebook e Comentários do Instagram. Mensagem direta e comentário são coisas diferentes. Clique em Próximo.', 'Arriba están los canales: Todos los mensajes, Messenger, Instagram, WhatsApp, Comentarios de Facebook y Comentarios de Instagram. Mensaje directo y comentario son cosas distintas. Haz clic en Siguiente.') },
    { alvo: '[data-t=canal-instagram]', clique: true, garante: function () { SIMSU.zera(); location.hash = 'caixa'; render() }, tit: T('Só o Instagram', 'Solo Instagram'), txt: T('Clique no canal Instagram para ver só as mensagens diretas de lá.', 'Haz clic en el canal Instagram para ver solo los mensajes directos de ahí.') },
    { alvo: '[data-t=msg-m1]', clique: true, garante: function () { SIMSU.zera(); SIMSU.set({ canal: 'instagram', sel: '' }); location.hash = 'caixa'; render() }, tit: T('Abrir uma conversa', 'Abrir una conversación'), txt: T('Uma cliente perguntou o preço das canecas. (Esta conversa é de exemplo.) Clique nela.', 'Una clienta preguntó el precio de las tazas. (Esta conversación es de ejemplo.) Haz clic en ella.') },
    { alvo: '[data-t=resposta]', garante: function () { SIMSU.zera(); SIMSU.set({ canal: 'instagram', sel: 'm1' }); location.hash = 'caixa'; render() }, cond: function () { return !!document.querySelector('#mResp') && document.querySelector('#mResp').value.trim().length > 3 },
      tit: T('Responder', 'Responder'), txt: T('Escreva uma resposta curta e simpática, por exemplo: “Oi! A Caneca azul custa R$ 49,90. Quer o link?”. Depois clique em Próximo.', 'Escribe una respuesta corta y simpática, por ejemplo: “¡Hola! La Caneca azul cuesta R$ 49,90. ¿Quieres el enlace?”. Después haz clic en Siguiente.'), dica: T('Digite pelo menos uma frase.', 'Escribe al menos una frase.') },
    { alvo: '[data-t=btn-enviar]', clique: true, garante: function () { SIMSU.zera(); SIMSU.set({ canal: 'instagram', sel: 'm1' }); location.hash = 'caixa'; render(); var r = document.querySelector('#mResp'); if (r && !r.value) r.value = 'Oi! A Caneca azul custa R$ 49,90. Quer o link?' }, tit: T('Enviar', 'Enviar'), txt: T('Clique em Enviar.', 'Haz clic en Enviar.') },
    { alvo: '[data-t=canal-igcom]', clique: true, garante: function () { SIMSU.zera(); SIMSU.set({ canal: 'instagram', sel: 'm1' }); SIMSU.estado().msgs[0].resp = 'Oi! A Caneca azul custa R$ 49,90. Quer o link?'; SIMSU.estado().msgs[0].lida = true; location.hash = 'caixa'; render() }, tit: T('E os comentários?', '¿Y los comentarios?'), txt: T('Quem comenta no post não manda mensagem: o comentário fica em outro canal. Clique em Comentários do Instagram.', 'Quien comenta en la publicación no manda mensaje: el comentario queda en otro canal. Haz clic en Comentarios de Instagram.') },
    { alvo: '[data-t=msg-m2]', garante: function () { SIMSU.zera(); SIMSU.set({ canal: 'igcom', sel: '' }); location.hash = 'caixa'; render() }, tit: T('Um comentário no post', 'Un comentario en la publicación'), txt: T('Aqui está o comentário de alguém no post da Caneca azul (exemplo). A resposta a um comentário aparece publicamente embaixo do post. Clique em Próximo.', 'Aquí está el comentario de alguien en la publicación de la Caneca azul (ejemplo). La respuesta a un comentario aparece públicamente debajo de la publicación. Haz clic en Siguiente.') },
    { alvo: '[data-t=filtro-naolidas]', fim: true, semVolta: true, garante: function () { SIMSU.zera(); SIMSU.set({ canal: 'todos', sel: '' }); location.hash = 'caixa'; render() }, tit: T('Não lidas primeiro! 🎉', '¡No leídos primero! 🎉'), txt: T('O filtro Não lidas ajuda a não perder ninguém. Regra: responder rápido, no canal certo (mensagem ou comentário). Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'El filtro No leídos ayuda a no perder a nadie. Regla: responder rápido, en el canal correcto (mensaje o comentario). Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['ler-insights'] = [
    { alvo: '[data-t=nav-insights]', clique: true, garante: function () { SIMSU.zera(); location.hash = 'inicio'; render() }, tit: T('Insights', 'Estadísticas'), txt: T('Os Insights mostram o desempenho da Página e do Instagram. Clique em Insights.', 'Las Estadísticas muestran el rendimiento de la Página y de Instagram. Haz clic en Estadísticas.') },
    { alvo: '[data-t=cartoes]', garante: function () { SIMSU.zera(); location.hash = 'insights'; render() }, tit: T('Resultados do Facebook', 'Resultados de Facebook'), txt: T('Cada cartão é uma métrica dos últimos 28 dias: Visualizações, Visualizadores, Interações, Cliques no link, Visitas, Seguidores. Visualizações é quantas vezes o conteúdo foi visto; Visualizadores é quantas pessoas diferentes viram. Clique em Próximo.', 'Cada tarjeta es una métrica de los últimos 28 días: Visualizaciones, Espectadores, Interacciones, Clics en el enlace, Visitas, Seguidores. Visualizaciones es cuántas veces se vio el contenido; Espectadores es cuántas personas distintas lo vieron. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-ent]', garante: function () { SIMSU.zera(); location.hash = 'insights'; render() }, cond: function () { return su().ent === 'Instagram' }, tit: T('Trocar para o Instagram', 'Cambiar a Instagram'), txt: T('Os números do Facebook e do Instagram são separados. No seletor de entidade, escolha Instagram.', 'Los números de Facebook y de Instagram son separados. En el selector de entidad, elige Instagram.'), dica: T('Escolha “Instagram” na lista.', 'Elige “Instagram” en la lista.') },
    { alvo: '[data-t=cartoes]', garante: function () { SIMSU.zera(); SIMSU.set({ ent: 'Instagram' }); location.hash = 'insights'; render() }, tit: T('Zerado: é normal?', 'En cero: ¿es normal?'), txt: T('Aqui os cartões do Instagram estão em zero e dizem “Nenhuma atividade durante o intervalo de datas”. Antes de achar que está quebrado: confira o período e se houve posts nele. Clique em Próximo.', 'Aquí las tarjetas de Instagram están en cero y dicen “Ninguna actividad durante el intervalo de fechas”. Antes de pensar que está roto: revisa el período y si hubo publicaciones en él. Haz clic en Siguiente.') },
    { alvo: '[data-t=aba2-publico]', clique: true, garante: function () { SIMSU.zera(); SIMSU.set({ ent: 'Instagram', aba: 'resultados' }); location.hash = 'insights'; render() }, tit: T('A aba Público', 'La pestaña Público'), txt: T('Clique em Público para ver quem são os seguidores.', 'Haz clic en Público para ver quiénes son los seguidores.') },
    { alvo: '[data-t=aviso-100]', fim: true, semVolta: true, garante: function () { SIMSU.zera(); SIMSU.set({ ent: 'Instagram', aba: 'publico' }); location.hash = 'insights'; render() }, tit: T('Só com 100 seguidores! 🎉', '¡Solo con 100 seguidores! 🎉'), txt: T('A tela explica: os dados de público do Instagram só aparecem quando a conta tem pelo menos 100 seguidores. Se o cliente reclama que o Público está vazio, essa é a primeira coisa a conferir. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'La pantalla explica: los datos de público de Instagram solo aparecen cuando la cuenta tiene al menos 100 seguidores. Si el cliente reclama que Público está vacío, eso es lo primero que hay que revisar. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
