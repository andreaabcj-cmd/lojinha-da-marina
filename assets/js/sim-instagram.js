/* Simulador do Instagram (perfil, virar conta profissional e editar perfil) — layout fiel, visual da Lojinha.
   - Estado no navegador (localStorage "sim.instagram"); nada é enviado ao Instagram.
   - Textos das telas reais em pt-BR conferidos em 14/10/2026 (instagram.com e app Android, conta de aula).
   - Tutoriais (tour.js): meta-instagram.html?tour=virar-profissional | editar-perfil · ?zerar=1 volta para conta pessoal. */
(function () {
  var CONF = '14/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function inicial() { return { tipo: 'pessoal', privada: true, nome: 'Marina', user: 'marina.lojinha', bio: 'Amo fazer canecas 🧡', categoria: '', mostrarCat: true, contato: false, posts: 12, seg: 214 } }
  var S = ler('sim.instagram', null) || inicial();
  if (params.get('zerar')) S = inicial();
  function grava() { try { localStorage.setItem('sim.instagram', JSON.stringify(S)) } catch (e) { } }
  grava();

  var CATS = ['Blog pessoal', 'Produto/serviço', 'Arte', 'Musicista/banda', 'Compras e varejo', 'Saúde/beleza', 'Mercearia'];
  function rota() { return (location.hash || '#perfil').slice(1) }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }

  function casca(conteudo, conf) {   // conf === false: tela montada pela ajuda oficial (ainda não vista)
    return '<div class="sim-faixa">🧪 Simulador de treinamento do Instagram · nada aqui vai para o Instagram · <a href="simuladores.html">← voltar à plataforma</a></div>' +
      '<div class="ig"><aside class="ig-lado"><b class="ig-logo">Instagram</b>' +
      ['🏠 Página inicial', '🔍 Pesquisa', '🧭 Explorar', '🎬 Reels', '✉️ Mensagens', '❤️ Notificações', '➕ Criar'].map(function (x) { return '<span class="ig-l">' + x + '</span>' }).join('') +
      '<button class="ig-l on" data-ir="perfil" data-t="lado-perfil">👤 Perfil</button><button class="ig-l" data-ir="config" data-t="lado-mais">☰ Mais</button></aside>' +
      '<main class="ig-main">' + conteudo + (conf === false ? '<p class="conferido pendente">⚠ Caminho montado pela Central de Ajuda do Instagram · a conferir com a tela real</p>' : '<p class="conferido">✓ Tela conferida com o Instagram real em ' + CONF + '</p>') + '</main></div>';
  }
  function cabecalho() {
    return '<div class="ig-cab"><span class="ig-foto">🧡</span><div><div class="ig-linha1"><b data-t="ig-user">' + esc(S.user) + '</b>' +
      '<button class="btn sec" data-ir="editar" data-t="editar-perfil">Editar perfil</button>' + (S.tipo !== 'pessoal' ? '<button class="btn sec">Painel profissional</button>' : '') + '</div>' +
      '<p class="ig-num"><b>' + POSTS.length + '</b> posts · <b>' + S.seg + '</b> seguidores · <b>180</b> seguindo</p>' +
      '<p class="ig-nome"><b>' + esc(S.nome) + '</b>' + (S.tipo !== 'pessoal' && S.categoria && S.mostrarCat ? '<span class="ig-cat">' + esc(S.categoria) + '</span>' : '') + '</p>' +
      '<p class="ig-bio">' + esc(S.bio) + '</p>' + (S.tipo !== 'pessoal' && S.contato ? '<button class="btn sec">Contato</button>' : '') +
      '<p class="ig-selo" data-t="ig-tipo">' + (S.tipo === 'pessoal' ? (S.privada ? '🔒 Conta pessoal · privada' : 'Conta pessoal · pública') : S.tipo === 'comercial' ? '🏪 Conta profissional · Comercial · pública' : '⭐ Conta profissional · Criador de conteúdo · pública') + '</p></div></div>';
  }
  /* posts de mentirinha da Marina (fotos dos produtos da Lojinha + posts de texto) */
  var POSTS = [
    { img: 'caneca_01', txt: 'Caneca nova saindo do forno ☕', c: 87, m: 12, fixo: 1 },
    { cor: '#FFD23F', txt: 'FRETE GRÁTIS\nacima de R$ 120 🚚', c: 64, m: 9 },
    { img: 'camiseta_02', txt: 'Estampa feita à mão 🎨', c: 52, m: 4 },
    { img: 'ecobag_03', txt: 'Ecobag para a feira 🛍️', c: 41, m: 3 },
    { cor: '#2F6FDB', txt: 'Bastidores:\npintando canecas 🖌️', c: 73, m: 15, reel: 1 },
    { img: 'caneca_02', txt: 'Presente que abraça 🧡', c: 58, m: 6 },
    { img: 'moletom_01', txt: 'Moletom chegou! ❄️', c: 95, m: 21 },
    { cor: '#FF8FA3', txt: 'Obrigada pelos\n200 seguidores! 💕', c: 120, m: 33 },
    { img: 'bone_01', txt: 'Boné da Lojinha 🧢', c: 33, m: 2 },
    { img: 'caneca_03', txt: 'Kit café da manhã ☕🥐', c: 47, m: 5 },
    { cor: '#3DBE8B', txt: 'Encomendas\npela DM ✉️', c: 29, m: 7 },
    { img: 'camiseta_03', txt: 'Camiseta coleção primavera 🌸', c: 61, m: 8 }
  ];
  function post(p) {
    var fundo = p.img ? '<img src="assets/img/' + p.img + '.png" alt="" loading="lazy"/>' : '<em style="background:' + p.cor + '">' + esc(p.txt).replace(/\n/g, '<br>') + '</em>';
    return '<span class="ig-post" title="' + esc(p.txt) + '">' + fundo + (p.fixo ? '<i class="ig-marca">📌</i>' : p.reel ? '<i class="ig-marca">▶</i>' : '') + '<small>❤ ' + p.c + ' · 💬 ' + p.m + '</small></span>';
  }
  function destaques() {
    return '<div class="ig-dest">' + [['☕', 'Canecas'], ['👕', 'Camisetas'], ['⭐', 'Clientes'], ['🚚', 'Entregas'], ['❓', 'Dúvidas']].map(function (d) { return '<span><i>' + d[0] + '</i>' + d[1] + '</span>' }).join('') + '</div>';
  }
  var TELAS = {
    perfil: function () {
      return casca(cabecalho() + destaques() + '<div class="ig-abas"><b class="on">▦ Posts</b><span>▶ Reels</span><span>◫ Marcados</span></div><div class="ig-grade">' + POSTS.map(post).join('') + '</div>');
    },
    config: function () {
      return casca('<div class="cartao ig-cfg"><h2>Configurações e atividade</h2>' +
        '<p class="ig-sec">Como você usa o Instagram</p><span class="ig-it">Central de Contas</span><span class="ig-it">Notificações</span>' +
        '<p class="ig-sec">Para profissionais</p><button class="ig-it bt" data-ir="tipo" data-t="tipo-ferramentas">Tipo de conta e ferramentas ›</button>' +
        '<p class="ig-sec">Quem pode ver seu conteúdo</p><span class="ig-it">Privacidade da conta · ' + (S.tipo === 'pessoal' && S.privada ? 'Privada' : 'Pública') + '</span></div>', false);
    },
    tipo: function () {
      return casca('<div class="cartao ig-cfg"><h2>Tipo de conta e ferramentas</h2>' +
        (S.tipo === 'pessoal' ? '<button class="ig-it bt" data-ir="converter" data-t="mudar-profissional">Mudar para conta profissional ›</button>' :
          '<span class="ig-it">Tipo de conta: <b>' + (S.tipo === 'comercial' ? 'Comercial' : 'Criador de conteúdo') + '</b></span><button class="ig-it bt" data-acao="voltar-pessoal">Mudar para conta pessoal</button>') + '</div>', false);
    },
    converter: function () { return casca('<div class="cartao ig-conv tg-caixa" data-t="conv-caixa">' + passoConv() + '</div>') },
    editar: function () {
      return casca('<div class="cartao ig-edit tg-caixa"><h2>Editar perfil</h2><div class="ig-fotos"><span class="ig-foto">🧡</span><a>Editar foto ou avatar</a></div>' +
        campo('Nome', 'eNome', S.nome, 'ed-nome') + campo('Nome de usuário', 'eUser', S.user, 'ed-user') + campo('Pronomes', 'ePron', '', null) +
        '<label class="ig-campo" data-t="ed-bio"><small>Bio</small><textarea id="eBio" rows="2">' + esc(S.bio) + '</textarea></label>' +
        '<div class="ig-row"><span>Links</span><a>Adicionar link</a></div><div class="ig-row"><span>Banners</span><a>Adicionar banners</a></div>' +
        '<div class="rodape-jan"><button class="btn sec" data-ir="perfil">Cancelar</button><button class="btn" data-acao="salvar-perfil" data-t="ed-salvar">Concluir</button></div></div>');
    }
  };
  function campo(rot, id, v, t) { return '<label class="ig-campo"' + (t ? ' data-t="' + t + '"' : '') + '><small>' + rot + '</small><input id="' + id + '" value="' + esc(v) + '"/></label>' }

  /* o caminho real (web) de virar conta profissional: 6 telas */
  var C = { passo: 0, tipo: '', cat: '' };
  function passoConv() {
    if (C.passo === 0) return '<h2>Qual opção melhor descreve você?</h2>' +
      [['criador', '⭐', 'Criador de conteúdo', 'Melhor para figuras públicas, produtores de conteúdo, artistas e influenciadores.'], ['comercial', '🏪', 'Comercial', 'Melhor para varejistas, negócios locais, marcas, organizações e prestadores de serviços.']].map(function (o) {
        return '<label class="ig-op' + (C.tipo === o[0] ? ' on' : '') + '" data-t="op-' + o[0] + '"><input type="radio" name="igTipo" value="' + o[0] + '"' + (C.tipo === o[0] ? ' checked' : '') + '/><span class="ig-op-ic">' + o[1] + '</span><b>' + o[2] + '</b><small>' + o[3] + '</small></label>' }).join('') +
      '<div class="rodape-jan"><button class="btn" data-acao="conv-prox" data-t="conv-avancar0" ' + (C.tipo ? '' : 'disabled') + '>Avançar</button></div>';
    if (C.passo === 1) return '<h2>' + (C.tipo === 'comercial' ? 'Comercial' : 'Criador de conteúdo') + '</h2><p class="miudo">' + (C.tipo === 'comercial' ? 'Melhor para varejistas, negócios locais, marcas, organizações e prestadores de serviços.' : 'Melhor para figuras públicas, produtores de conteúdo, artistas e influenciadores.') + '</p>' +
      '<ul class="ig-benef" data-t="conv-benef"><li><b>Saiba mais sobre seus seguidores</b><br>Obtenha insights sobre seus seguidores e veja como está o desempenho dos seus posts.</li><li><b>Alcance seus clientes</b><br>Crie promoções no Instagram para alcançar mais clientes e expandir seu negócio.</li><li><b>Obtenha novas opções de contato</b><br>Adicione um botão de contato ao seu perfil para que as pessoas possam entrar em contato com você mais facilmente.</li></ul>' +
      '<div class="rodape-jan"><button class="btn sec" data-acao="conv-volta">Voltar</button><button class="btn" data-acao="conv-prox" data-t="conv-avancar1">Avançar</button></div>';
    if (C.passo === 2) return '<h2>Selecione uma categoria</h2><p class="miudo">Escolha uma categoria que descreva melhor o que você faz. Você terá a opção de exibir ou ocultar isso no seu perfil.</p>' +
      '<label class="ig-sw"><span>Mostrar categoria no perfil</span><input type="checkbox" id="cMostrar"' + (S.mostrarCat ? ' checked' : '') + '/></label><p class="ig-sec">Sugestões</p><div data-t="conv-cats">' +
      CATS.map(function (c) { return '<label class="ig-cat-op' + (C.cat === c ? ' on' : '') + '"><input type="radio" name="igCat" value="' + c + '"' + (C.cat === c ? ' checked' : '') + '/> ' + c + '</label>' }).join('') + '</div>' +
      '<div class="rodape-jan"><button class="btn sec" data-acao="conv-volta">Voltar</button><button class="btn" data-acao="conv-prox" data-t="conv-concluir" ' + (C.cat ? '' : 'disabled') + '>Concluir</button></div>';
    if (C.passo === 3) return '<div class="ig-dialogo" data-t="conv-confirma"><h3>Trocar para uma conta profissional?</h3><p>Seu perfil e conteúdo no Instagram se tornarão públicos.</p>' +
      '<button class="btn" data-acao="conv-prox" data-t="conv-continuar">Continuar</button><button class="btn sec" data-acao="conv-volta">Cancelar</button></div>';
    if (C.passo === 4) return '<h2>Verificar suas informações de contato</h2><p class="miudo">Essas informações serão exibidas no seu perfil publicamente para que as pessoas possam entrar em contato com você. Você pode editar ou remover essas informações quando quiser.</p>' +
      '<div data-t="conv-contato"><label class="ig-sw"><span>Mostrar informações de contato no perfil</span><input type="checkbox" disabled/></label><p class="ig-sec">Informações comerciais públicas</p><input class="ig-in" placeholder="BR +55"/></div>' +
      '<div class="rodape-jan"><button class="btn sec" data-acao="conv-semcontato" data-t="conv-semcontato">Não usar minhas informações de contato</button><button class="btn" data-acao="conv-semcontato">Salvar</button></div>';
    return '<h2>Sua conta comercial do Instagram está pronta</h2><p>Agora você tem mais ferramentas para se conectar com seu público no Instagram.</p><p class="miudo">Acesse o app para celular para conhecer os seguidores de ' + esc(S.user) + ' com insights, exibir e editar botões de contato, alcançar clientes com promoções e muito mais. Gerencie sua nova conta comercial no desktop com o Business Suite.</p>' +
      '<div class="rodape-jan"><button class="btn" data-ir="perfil" data-t="conv-fim">Concluir</button></div>';
  }
  function liga() {
    $$('[name=igTipo]').forEach(function (r) { r.onchange = function () { C.tipo = r.value; window.__simIg = { C: C, S: S }; render() } });
    $$('[name=igCat]').forEach(function (r) { r.onchange = function () { C.cat = r.value; window.__simIg = { C: C, S: S }; render() } });
    var m = $('#cMostrar'); if (m) m.onchange = function () { S.mostrarCat = m.checked };
    ['eNome', 'eUser', 'eBio'].forEach(function (id) { var i = $('#' + id); if (i) i.oninput = function () { F[id] = i.value; window.__simIg = { C: C, S: S, F: F } } });
    window.__simIg = { C: C, S: S, F: F };
  }
  var F = {};
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-ir],[data-acao]'); if (!a) return;
    if (a.hasAttribute('data-ir')) { if (a.getAttribute('data-ir') === 'converter') C = { passo: 0, tipo: '', cat: '' }; if (a.getAttribute('data-ir') === 'editar') F = {}; vai(a.getAttribute('data-ir')); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'conv-prox') { if (C.passo === 3) { S.tipo = C.tipo; S.privada = false; S.categoria = C.cat; grava() } C.passo++; render() }
    else if (ac === 'conv-volta') { C.passo = C.passo === 3 ? 2 : Math.max(0, C.passo - 1); render() }
    else if (ac === 'conv-semcontato') { S.contato = false; grava(); C.passo = 5; render() }
    else if (ac === 'voltar-pessoal') { S.tipo = 'pessoal'; grava(); render() }
    else if (ac === 'salvar-perfil') { if (F.eNome != null) S.nome = F.eNome; if (F.eUser != null) S.user = F.eUser.trim() || S.user; if (F.eBio != null) S.bio = F.eBio; grava(); vai('perfil') }
  });
  window.addEventListener('hashchange', render);
  window.SIMIG = { conv: function (p) { if (rota() !== 'converter') { location.hash = 'converter' } C.passo = p; render() }, perfilComercial: function () { if (S.tipo === 'pessoal') { S.tipo = 'comercial'; S.privada = false; S.categoria = 'Compras e varejo'; grava() } }, estado: function () { return { C: C, S: S, F: F } } };
  function render() { var r = rota(); $('#app').innerHTML = (TELAS[r] || TELAS.perfil)(); $$('.ig-l[data-ir]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-ir') === (r === 'perfil' || r === 'editar' ? 'perfil' : 'config')) }); liga() }
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function ig() { return window.__simIg || {} }
  TOURS['virar-profissional'] = [
    { alvo: '[data-t=ig-tipo]', garante: function () { location.hash = 'perfil' },
      tit: T('Hoje: conta pessoal', 'Hoy: cuenta personal'), txt: T('O Instagram da Marina ainda é pessoal (e privado). Para usar ferramentas de empresa, ele precisa virar conta profissional.', 'El Instagram de Marina todavía es personal (y privado). Para usar herramientas de empresa, tiene que volverse cuenta profesional.') },
    { alvo: '[data-t=lado-mais]', clique: true, garante: function () { location.hash = 'perfil' }, tit: T('Configurações', 'Configuración'), txt: T('Clique em ☰ Mais para abrir as configurações.', 'Haz clic en ☰ Más para abrir la configuración.') },
    { alvo: '[data-t=tipo-ferramentas]', clique: true, tit: T('Para profissionais', 'Para profesionales'), txt: T('Em “Para profissionais”, clique em Tipo de conta e ferramentas.', 'En “Para profesionales”, haz clic en Tipo de cuenta y herramientas.') },
    { alvo: '[data-t=mudar-profissional]', clique: true, tit: T('Mudar para conta profissional', 'Cambiar a cuenta profesional'), txt: T('Clique em Mudar para conta profissional.', 'Haz clic en Cambiar a cuenta profesional.') },
    { alvo: '[data-t=conv-caixa]', garante: function () { SIMIG.conv(0) }, cond: function () { return (ig().C || {}).tipo === 'comercial' }, bloqueia: function (t) { return !!t.closest('[data-t=op-criador]') || (!!t.closest('[data-t=conv-avancar0]') && (ig().C || {}).tipo !== 'comercial') }, erro: T('A Marina tem uma loja: a opção certa é Comercial.', 'Marina tiene una tienda: la opción correcta es Comercial.'),
      tit: T('Comercial ou Criador?', '¿Comercial o Creador?'), txt: T('A Marina tem uma loja: escolha Comercial (para varejistas, negócios e marcas) e clique em Próximo.', 'Marina tiene una tienda: elige Comercial (para minoristas, negocios y marcas) y haz clic en Siguiente.'),
      dica: T('Criador de conteúdo é para influenciadores e artistas.', 'Creador de contenido es para influencers y artistas.') },
    { alvo: '[data-t=conv-avancar0]', clique: true, garante: function () { SIMIG.conv(0) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-benef]', garante: function () { SIMIG.conv(1) }, tit: T('O que a conta Comercial dá', 'Lo que da la cuenta Comercial'), txt: T('Insights dos seguidores, promoções (anúncios) e botão de contato. Clique em Próximo.', 'Estadísticas de seguidores, promociones (anuncios) y botón de contacto. Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-avancar1]', clique: true, garante: function () { SIMIG.conv(1) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-cats]', garante: function () { SIMIG.conv(2) }, cond: function () { return (ig().C || {}).cat === 'Compras e varejo' }, bloqueia: function (t) { var l = t.closest('.ig-cat-op'); return !!(l && !l.querySelector('[value="Compras e varejo"]')) }, erro: T('Loja de canecas e camisetas: a categoria certa é Compras e varejo.', 'Tienda de tazas y camisetas: la categoría correcta es Compras y venta minorista.'),
      tit: T('A categoria', 'La categoría'), txt: T('Canecas e camisetas: escolha Compras e varejo e clique em Próximo.', 'Tazas y camisetas: elige Compras y venta minorista y haz clic en Siguiente.') },
    { alvo: '[data-t=conv-concluir]', clique: true, garante: function () { SIMIG.conv(2) }, tit: T('Concluir', 'Terminar'), txt: T('Clique em Concluir.', 'Haz clic en Terminar.') },
    { alvo: '[data-t=conv-confirma]', garante: function () { SIMIG.conv(3) }, bloqueia: function (t) { return !!t.closest('button') }, erro: T('Primeiro leia o aviso e clique em Próximo no balão.', 'Primero lee el aviso y haz clic en Siguiente en el globo.'), tit: T('⚠️ Vai ficar pública', '⚠️ Va a quedar pública'), txt: T('Leia o aviso: a conta profissional é sempre pública. Se a cliente quer privacidade, a conta profissional não serve. Clique em Próximo.', 'Lee el aviso: la cuenta profesional siempre es pública. Si la clienta quiere privacidad, la cuenta profesional no sirve. Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-continuar]', clique: true, garante: function () { SIMIG.conv(3) }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=conv-contato]', garante: function () { SIMIG.conv(4) }, tit: T('Contato público?', '¿Contacto público?'), txt: T('O que entra aqui aparece PUBLICAMENTE no perfil. A Marina não quer expor o telefone pessoal agora. Clique em Próximo.', 'Lo que pongas aquí aparece PÚBLICAMENTE en el perfil. Marina no quiere exponer su teléfono personal ahora. Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-semcontato]', clique: true, garante: function () { SIMIG.conv(4) }, tit: T('Sem contato por enquanto', 'Sin contacto por ahora'), txt: T('Clique em Não usar minhas informações de contato (dá para adicionar depois).', 'Haz clic en No usar mi información de contacto (se puede agregar después).') },
    { alvo: '[data-t=conv-fim]', clique: true, semVolta: true, tit: T('Conta comercial pronta! 🎉', '¡Cuenta comercial lista! 🎉'), txt: T('Clique em Concluir para ver o perfil.', 'Haz clic en Terminar para ver el perfil.') },
    { alvo: '[data-t=ig-tipo]', fim: true, semVolta: true, tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Agora é conta profissional Comercial, pública, com a categoria no perfil. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora es cuenta profesional Comercial, pública, con la categoría en el perfil. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['editar-perfil'] = [
    { alvo: '[data-t=editar-perfil]', clique: true, garante: function () { SIMIG.perfilComercial(); location.hash = 'perfil' }, tit: T('Editar perfil', 'Editar perfil'), txt: T('Vamos deixar o perfil com cara de loja. Clique em Editar perfil.', 'Vamos a dejar el perfil con cara de tienda. Haz clic en Editar perfil.') },
    { alvo: '[data-t=ed-nome]', garante: function () { location.hash = 'editar' }, cond: function () { var f = (ig().F || {}); return /lojinha/i.test(f.eNome || '') },
      tit: T('O nome', 'El nombre'), txt: T('O nome aparece em negrito no perfil e na busca. Troque para o nome da loja: Lojinha da Marina. Depois clique em Próximo.', 'El nombre aparece en negrita en el perfil y en la búsqueda. Cámbialo por el nombre de la tienda: Lojinha da Marina. Después haz clic en Siguiente.') },
    { alvo: '[data-t=ed-user]', garante: function () { location.hash = 'editar' }, cond: function () { var f = (ig().F || {}); return /lojinha/i.test(f.eUser || '') && !/\s/.test(f.eUser || '') },
      tit: T('O nome de usuário (@)', 'El nombre de usuario (@)'), txt: T('O @ é o endereço do perfil. Coloque um @ da loja, sem espaços (ex.: lojinhadamarina). Depois clique em Próximo.', 'El @ es la dirección del perfil. Pon un @ de la tienda, sin espacios (ej.: lojinhadamarina). Después haz clic en Siguiente.') },
    { alvo: '[data-t=ed-bio]', garante: function () { location.hash = 'editar' }, cond: function () { var f = (ig().F || {}); return (f.eBio || '').trim().length > 10 },
      tit: T('A bio', 'La bio'), txt: T('Em uma frase: o que a loja vende. Ex.: Canecas, camisetas e ecobags feitas à mão. Depois clique em Próximo.', 'En una frase: qué vende la tienda. Ej.: Tazas, camisetas y ecobags hechas a mano. Después haz clic en Siguiente.') },
    { alvo: '[data-t=ed-salvar]', clique: true, garante: function () { location.hash = 'editar' }, tit: T('Concluir', 'Terminar'), txt: T('Clique em Concluir para salvar.', 'Haz clic en Terminar para guardar.') },
    { alvo: '.ig-cab', fim: true, semVolta: true, tit: T('Perfil de loja! 🎉', '¡Perfil de tienda! 🎉'), txt: T('Nome, @ e bio de loja. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Nombre, @ y bio de tienda. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
