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

  /* conf === false: tela montada pela ajuda oficial (ainda não vista) · conf = 'dd/mm/aaaa': conferida nesse dia (senão CONF).
     Barra lateral e menu ☰ Mais copiados do instagram.com real em 02/11/2026 (só olhando). */
  var MAIS = false, CC = null, SALVO = false;   // CC: janela aberta na Central de Contas ('lista' | 'perfil' | 'nome' | 'user')
  function casca(conteudo, conf) {
    return '<div class="sim-faixa">🧪 Simulador de treinamento do Instagram · nada aqui vai para o Instagram · <a href="simuladores.html">← voltar à plataforma</a></div>' +
      '<div class="ig"><aside class="ig-lado"><b class="ig-logo">Instagram</b>' +
      ['🏠 Página inicial', '🎬 Reels', '✉️ Mensagens', '🔍 Pesquisa', '❤️ Notificações', '➕ Criar'].map(function (x) { return '<span class="ig-l">' + x + '</span>' }).join('') +
      '<button class="ig-l on" data-ir="perfil" data-t="lado-perfil">👤 Perfil</button><span class="ig-esp"></span>' +
      (MAIS ? '<div class="ig-mais" data-t="mais-menu"><button class="ig-mi" data-ir="config" data-t="mais-config">⚙️ Configurações</button>' +
        ['📈 Sua atividade', '🔖 Salvos', '🌗 Alternar exibição', '⚠️ Relatar um problema'].map(function (x) { return '<span class="ig-mi">' + x + '</span>' }).join('') +
        '<hr><span class="ig-mi">Trocar de perfil</span><hr><span class="ig-mi">Sair</span></div>' : '') +
      '<button class="ig-l' + (MAIS ? ' aberto' : '') + '" data-acao="mais" data-t="lado-mais">☰ Mais</button><span class="ig-l">⊞ Também da Meta</span></aside>' +
      '<main class="ig-main">' + conteudo + (conf === false ? '<p class="conferido pendente">⚠ Caminho montado pela Central de Ajuda do Instagram · a conferir com a tela real</p>' : '<p class="conferido">✓ Tela conferida com o Instagram real em ' + (conf || CONF) + '</p>') + '</main></div>';
  }
  /* Configurações do instagram.com (02/11/2026): coluna com os grupos reais à esquerda, a tela escolhida à direita */
  var CFG = [['Sua conta', [['Conta Meta', 'cc', 'cfg-conta-meta']]], ['Como você usa o Instagram', [['Editar perfil', 'config'], ['Notificações']]],
    ['Quem pode ver seu conteúdo', [['Privacidade da conta'], ['Amigos Próximos'], ['Bloqueados'], ['Ocultar story e live']]],
    ['Como outras pessoas podem interagir com você', [['Mensagens e respostas a stories'], ['Marcações e menções'], ['Comentários'], ['Compartilhamento'], ['Restritos'], ['Palavras ocultas']]],
    ['O que você vê', [['Silenciados'], ['Preferências de conteúdo'], ['Número de curtidas e compartilhamentos'], ['Assinaturas de criador de conteúdo']]],
    ['Seu app e suas mídias', [['Arquivar e baixar'], ['Acessibilidade'], ['Idioma'], ['Permissões do site do app']]],
    ['Central da Família', [['Supervisão para Contas de Adolescente']]], ['Para profissionais', [['Tipo e ferramentas da conta', 'tipo', 'tipo-ferramentas'], ['Meta Verified']]],
    ['Mais informações e suporte', [['Ajuda'], ['Central de Privacidade'], ['Status da conta']]]];
  function configs(ativo, corpo) {
    return '<div class="ig-cfgs"><nav class="ig-cfg-menu"><h2>Configurações</h2>' + CFG.map(function (g) {
      return '<p class="ig-sec">' + g[0] + '</p>' + g[1].map(function (i) {
        return i[1] ? '<button class="ig-it bt' + (i[1] === ativo ? ' on' : '') + '" data-ir="' + i[1] + '"' + (i[2] ? ' data-t="' + i[2] + '"' : '') + '>' + i[0] + '</button>' : '<span class="ig-it">' + i[0] + '</span>';
      }).join('');
    }).join('') + '</nav><div class="ig-cfg-corpo">' + corpo + '</div></div>';
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
    config: function () { return TELAS.editar('config') },   // "Configurações" abre em Editar perfil, como no instagram.com
    tipo: function () {
      // conta pessoal: tela vista em 02/11/2026; conta profissional: ainda não vista (montada pela Central de Ajuda)
      return casca(configs('tipo', '<h2>Tipo e ferramentas da conta</h2><p class="ig-sec">Tipo de conta</p>' +
        (S.tipo === 'pessoal' ? '<button class="ig-it bt ig-cfg-cartao" data-ir="converter" data-t="mudar-profissional">Trocar para conta profissional ›</button>' :
          '<span class="ig-it">Tipo de conta: <b>' + (S.tipo === 'comercial' ? 'Comercial' : 'Criador de conteúdo') + '</b></span><button class="ig-it bt" data-acao="voltar-pessoal">Mudar para conta pessoal</button>')), S.tipo === 'pessoal' ? '02/11/2026' : false);
    },
    converter: function () { return casca('<div class="cartao ig-conv tg-caixa" data-t="conv-caixa">' + passoConv() + '</div>') },
    /* Editar perfil do instagram.com (02/11/2026): no computador só a bio muda aqui; nome e @ ficam na Central de Contas */
    editar: function (ativo) {
      var bio = F.eBio != null ? F.eBio : S.bio;
      return casca(configs(ativo || 'config', '<h2>Editar perfil</h2><div class="ig-cfg-cartao"><span class="ig-foto">🧡</span><div><b>' + esc(S.user) + '</b><br><small>' + esc(S.nome) + '</small></div></div>' +
        '<p class="ig-sec">Site</p><div class="ig-cfg-cartao ig-apagado">Site</div><p class="miudo">Somente é possível editar os links no celular. Acesse o app do Instagram e edite seu perfil para alterar os sites na sua bio.</p>' +
        '<p class="ig-sec">Bio</p><label class="ig-campo" data-t="ed-bio"><textarea id="eBio" rows="3" maxlength="150">' + esc(bio) + '</textarea><small class="ig-conta">' + bio.length + ' / 150</small></label>' +
        '<label class="ig-sw ig-cfg-cartao"><span>Mostrar selo do Threads</span><input type="checkbox" disabled/></label>' +
        '<label class="ig-sw ig-cfg-cartao"><span>Perfil gerado por IA<br><small class="miudo">Adicione este rótulo se o seu perfil apresentar uma pessoa gerada por IA.</small></span><input type="checkbox" disabled/></label>' +
        '<p class="ig-sec">Gênero</p><div class="ig-cfg-cartao">Feminino</div><p class="miudo">Isso não fará parte do seu perfil público.</p>' +
        '<label class="ig-sw ig-cfg-cartao"><span>Mostrar sugestões de contas em perfis</span><input type="checkbox" checked disabled/></label>' +
        '<p class="miudo">Certas informações do perfil, como seu nome, a bio e os links, são visíveis para todos.</p>' +
        (SALVO ? '<p class="ig-salvo" data-t="ed-salvo">✓ Perfil salvo.</p>' : '') +
        '<div class="rodape-jan"><button class="btn" data-acao="salvar-bio" data-t="ed-salvar">Enviar</button></div>'), '02/11/2026');
    },
    /* Central de Contas (Conta Meta) na web, vista em 02/11/2026: Página inicial → Sua conta → perfil → Nome / Nome de usuário */
    cc: function () {
      var menu = ['Página inicial', 'Login e segurança', 'Experiências multiperfil', 'Suas informações e permissões', 'Preferências de anúncios', 'Meta Pay', 'Assinaturas', 'Gerenciar conta'];
      var x = '<button class="ig-cc-x" data-acao="cc-fecha" title="Fechar">✕</button>', volta = function (p) { return '<button class="ig-cc-volta" data-acao="cc-' + p + '" title="Voltar">‹</button>' };
      var dlg = '';
      if (CC === 'lista') dlg = x + '<h3>Sua conta</h3><p class="ig-sec">Informações de contato padrão</p><p class="miudo">Use isto para reconhecer sua conta mais facilmente.</p><div class="ig-cc-linha">✉️ marina.teste@exemplo.com<span>›</span></div>' +
        '<p class="ig-sec">Perfis</p><div class="ig-cc-linha">👩 Marina<small>Facebook</small><span>›</span></div><button class="ig-cc-linha" data-acao="cc-perfil" data-t="cc-perfil-ig">🧡 ' + esc(S.user) + '<small>Instagram</small><span>›</span></button><p class="ig-cc-mais">Adicionar mais</p>';
      else if (CC === 'perfil') dlg = volta('lista') + x + '<div class="ig-cc-topo"><span class="ig-foto">🧡</span><b>' + esc(S.nome) + '</b><small>Instagram</small></div>' +
        '<button class="ig-cc-linha" data-acao="cc-nome" data-t="cc-nome">Nome<span>›</span></button><button class="ig-cc-linha" data-acao="cc-user" data-t="cc-user">Nome de usuário<span>›</span></button>' +
        '<div class="ig-cc-linha">Foto do perfil<span>›</span></div><div class="ig-cc-linha">Avatar<span>›</span></div>';
      else if (CC === 'nome') dlg = volta('perfil') + x + '<h3>Nome</h3><label class="ig-campo" data-t="cc-campo-nome"><small>Nome</small><input id="eNome" value="' + esc(F.eNome != null ? F.eNome : S.nome) + '"/></label>' +
        '<p class="miudo">Você só pode alterar seu nome duas vezes em 14 dias.</p><button class="btn ig-cc-ok" data-acao="cc-salva-nome" data-t="cc-concluir-nome">Concluir</button>';
      else if (CC === 'user') dlg = volta('perfil') + x + '<h3>Nome de usuário</h3><p class="miudo">A alteração do seu nome de usuário também mudará o endereço do seu perfil do Instagram.</p>' +
        '<label class="ig-campo" data-t="cc-campo-user"><small>Nome de usuário</small><input id="eUser" value="' + esc(F.eUser != null ? F.eUser : S.user) + '"/></label><button class="btn ig-cc-ok" data-acao="cc-salva-user" data-t="cc-concluir-user">Concluir</button>';
      return '<div class="sim-faixa">🧪 Simulador de treinamento do Instagram · nada aqui vai para o Instagram · <a href="simuladores.html">← voltar à plataforma</a></div>' +
        '<div class="ig-cc"><button class="ig-cc-sair" data-ir="config" data-t="cc-sair" title="Fechar">✕</button><aside class="ig-cc-menu"><p class="ig-cc-logo">∞ Meta</p><h2>Conta Meta</h2><p class="miudo">Controle como sua conta funciona em todos os apps e dispositivos da Meta. <u>Saiba mais</u></p>' +
        menu.map(function (m, i) { return '<span class="ig-cc-it' + (i ? '' : ' on') + '">' + m + '</span>' }).join('') + '</aside>' +
        '<main class="ig-cc-main"><h2>Página inicial</h2><p>Gerencie as configurações de todos os seus perfis e dispositivos da Meta em um só lugar.</p>' +
        '<button class="ig-cc-card" data-acao="cc-lista" data-t="cc-conta"><span>∞ <b>marina.teste@exemplo.com</b><small>2 perfis</small></span><span>🧡👩 ›</span></button>' +
        '<div class="ig-cc-card"><span>🛡️ <b>Checkup de Segurança da Meta</b></span><span>›</span></div><p class="ig-sec">Mais da Meta</p><div class="ig-cc-duas"><div class="ig-cc-card">👪 Central da Família</div><div class="ig-cc-card">👓 Óculos com IA</div></div>' +
        '<p class="conferido">✓ Tela conferida com a Central de Contas real em 02/11/2026</p></main>' +
        (dlg ? '<div class="ig-cc-fundo"><div class="ig-cc-dlg tg-caixa" data-t="cc-dlg">' + dlg + '</div></div>' : '') + '</div>';
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
    ['eNome', 'eUser', 'eBio'].forEach(function (id) { var i = $('#' + id); if (i) i.oninput = function () { F[id] = i.value; window.__simIg = { C: C, S: S, F: F }; var n = $('.ig-conta'); if (n && id === 'eBio') n.textContent = i.value.length + ' / 150' } });
    window.__simIg = { C: C, S: S, F: F };
    var on = $('.ig-cfg-menu .on'); if (on) on.scrollIntoView({ block: 'nearest' });   // item aceso à vista, como no Instagram
  }
  var F = {};
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('[data-ir],[data-acao]'); if (!a) return;
    if (a.hasAttribute('data-ir')) { if (a.getAttribute('data-ir') === 'converter') C = { passo: 0, tipo: '', cat: '' }; if (a.getAttribute('data-ir') === 'editar') F = {}; vai(a.getAttribute('data-ir')); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'mais') { MAIS = !MAIS; render(); return }
    if (ac === 'salvar-bio') { if (F.eBio != null) S.bio = F.eBio; grava(); SALVO = true; render(); return }
    if (/^cc-(lista|perfil|nome|user)$/.test(ac)) { CC = ac.slice(3); render(); return }
    if (ac === 'cc-fecha') { CC = null; render(); return }
    if (ac === 'cc-salva-nome') { if (F.eNome != null && F.eNome.trim()) S.nome = F.eNome.trim(); grava(); CC = 'perfil'; render(); return }
    if (ac === 'cc-salva-user') { if (F.eUser != null && F.eUser.trim()) S.user = F.eUser.trim().replace(/\s+/g, ''); grava(); CC = 'perfil'; render(); return }
    if (ac === 'conv-prox') { if (C.passo === 3) { S.tipo = C.tipo; S.privada = false; S.categoria = C.cat; grava() } C.passo++; render() }
    else if (ac === 'conv-volta') { C.passo = C.passo === 3 ? 2 : Math.max(0, C.passo - 1); render() }
    else if (ac === 'conv-semcontato') { S.contato = false; grava(); C.passo = 5; render() }
    else if (ac === 'voltar-pessoal') { S.tipo = 'pessoal'; grava(); render() }
    else if (ac === 'salvar-perfil') { if (F.eNome != null) S.nome = F.eNome; if (F.eUser != null) S.user = F.eUser.trim() || S.user; if (F.eBio != null) S.bio = F.eBio; grava(); vai('perfil') }
  });
  window.addEventListener('hashchange', function () { MAIS = false; SALVO = false; if (rota() !== 'cc') CC = null; render() });
  window.SIMIG = { conv: function (p) { if (rota() !== 'converter') { location.hash = 'converter' } C.passo = p; render() }, perfilComercial: function () { if (S.tipo === 'pessoal') { S.tipo = 'comercial'; S.privada = false; S.categoria = 'Compras e varejo'; grava(); render() } }, estado: function () { return { C: C, S: S, F: F } },
    cc: function (e) { if (rota() !== 'cc') location.hash = 'cc'; CC = e; render() } };
  // onde você está: a Central de Contas é outro endereço (accountscenter.instagram.com)
  window.MOLDURA_AGORA = function () { return rota() === 'cc' ? { url: 'accountscenter.instagram.com', onde: 'Central de Contas (Conta Meta) no computador' } : {} };
  function render() { var r = rota(); $('#app').innerHTML = (TELAS[r] || TELAS.perfil)(); $$('.ig-l[data-ir]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-ir') === (r === 'perfil' ? 'perfil' : 'config')) }); liga(); if (window.MOLDURA) MOLDURA.atualiza() }
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function ig() { return window.__simIg || {} }
  TOURS['virar-profissional'] = [
    { alvo: '[data-t=ig-tipo]', garante: function () { location.hash = 'perfil' },
      tit: T('Hoje: conta pessoal', 'Hoy: cuenta personal'), txt: T('O Instagram da Marina ainda é pessoal (e privado). Para usar ferramentas de empresa, ele precisa virar conta profissional.', 'El Instagram de Marina todavía es personal (y privado). Para usar herramientas de empresa, tiene que volverse cuenta profesional.') },
    { alvo: '[data-t=lado-mais]', clique: true, garante: function () { location.hash = 'perfil' }, tit: T('O menu Mais', 'El menú Más'), txt: T('Clique em ☰ Mais, no pé da barra da esquerda.', 'Haz clic en ☰ Más, al pie de la barra de la izquierda.') },
    { alvo: '[data-t=mais-config]', clique: true, garante: function () { if (!document.querySelector('[data-t=mais-config]')) document.querySelector('[data-t=lado-mais]').click() }, tit: T('Configurações', 'Configuración'), txt: T('No menu que abriu, clique em Configurações.', 'En el menú que se abrió, haz clic en Configuración.') },
    { alvo: '[data-t=tipo-ferramentas]', clique: true, garante: function () { location.hash = 'config' }, tit: T('Para profissionais', 'Para profesionales'), txt: T('Na coluna das configurações, desça até “Para profissionais” e clique em Tipo e ferramentas da conta.', 'En la columna de configuración, baja hasta “Para profesionales” y haz clic en Tipo de cuenta y herramientas.') },
    { alvo: '[data-t=mudar-profissional]', clique: true, garante: function () { location.hash = 'tipo' }, tit: T('Trocar para conta profissional', 'Cambiar a cuenta profesional'), txt: T('Em “Tipo de conta”, clique em Trocar para conta profissional.', 'En “Tipo de cuenta”, haz clic en Cambiar a cuenta profesional.') },
    { alvo: '[data-t=conv-caixa]', garante: function () { SIMIG.conv(0) }, cond: function () { return (ig().C || {}).tipo === 'comercial' }, bloqueia: function (t) { return !!t.closest('[data-t=op-criador]') || (!!t.closest('[data-t=conv-avancar0]') && (ig().C || {}).tipo !== 'comercial') }, erro: T('A Marina tem uma loja: a opção certa é Comercial.', 'Marina tiene una tienda: la opción correcta es Comercial.'),
      tit: T('Comercial ou Criador?', '¿Comercial o Creador?'), txt: T('A Marina tem uma loja: escolha Comercial (para varejistas, negócios e marcas) e clique em Próximo.', 'Marina tiene una tienda: elige Comercial (para minoristas, negocios y marcas) y haz clic en Siguiente.'),
      dica: T('Criador de conteúdo é para influenciadores e artistas.', 'Creador de contenido es para influencers y artistas.') },
    { alvo: '[data-t=conv-avancar0]', clique: true, garante: function () { SIMIG.conv(0) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-benef]', garante: function () { SIMIG.conv(1) }, tit: T('O que a conta Comercial dá', 'Lo que da la cuenta Comercial'), txt: T('Insights dos seguidores, promoções (anúncios) e botão de contato. Clique em Próximo.', 'Estadísticas de seguidores, promociones (anuncios) y botón de contacto. Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-avancar1]', clique: true, garante: function () { SIMIG.conv(1) }, tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-cats]', garante: function () { SIMIG.conv(2) }, cond: function () { return (ig().C || {}).cat === 'Compras e varejo' }, bloqueia: function (t) { var l = t.closest('.ig-cat-op'); return !!(l && !l.querySelector('[value="Compras e varejo"]')) }, erro: T('Loja de canecas e camisetas: a categoria certa é Compras e varejo.', 'Tienda de tazas y camisetas: la categoría correcta es Compras y venta minorista.'),
      tit: T('A categoria', 'La categoría'), txt: T('Canecas e camisetas: escolha Compras e varejo e clique em Próximo.', 'Tazas y camisetas: elige Compras y venta minorista y haz clic en Siguiente.') },
    { alvo: '[data-t=conv-concluir]', clique: true, garante: function () { SIMIG.conv(2) }, tit: T('Concluir', 'Terminar'), txt: T('Clique em Concluir.', 'Haz clic en Listo.') },
    { alvo: '[data-t=conv-confirma]', garante: function () { SIMIG.conv(3) }, bloqueia: function (t) { return !!t.closest('button') }, erro: T('Primeiro leia o aviso e clique em Próximo no balão.', 'Primero lee el aviso y haz clic en Siguiente en el globo.'), tit: T('⚠️ Vai ficar pública', '⚠️ Va a quedar pública'), txt: T('Leia o aviso: a conta profissional é sempre pública. Se a cliente quer privacidade, a conta profissional não serve. Clique em Próximo.', 'Lee el aviso: la cuenta profesional siempre es pública. Si la clienta quiere privacidad, la cuenta profesional no sirve. Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-continuar]', clique: true, garante: function () { SIMIG.conv(3) }, tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar.', 'Haz clic en Continuar.') },
    { alvo: '[data-t=conv-contato]', garante: function () { SIMIG.conv(4) }, tit: T('Contato público?', '¿Contacto público?'), txt: T('O que entra aqui aparece PUBLICAMENTE no perfil. A Marina não quer expor o telefone pessoal agora. Clique em Próximo.', 'Lo que pongas aquí aparece PÚBLICAMENTE en el perfil. Marina no quiere exponer su teléfono personal ahora. Haz clic en Siguiente.') },
    { alvo: '[data-t=conv-semcontato]', clique: true, garante: function () { SIMIG.conv(4) }, tit: T('Sem contato por enquanto', 'Sin contacto por ahora'), txt: T('Clique em Não usar minhas informações de contato (dá para adicionar depois).', 'Haz clic en No usar mi información de contacto (se puede agregar después).') },
    { alvo: '[data-t=conv-fim]', clique: true, semVolta: true, tit: T('Conta comercial pronta! 🎉', '¡Cuenta comercial lista! 🎉'), txt: T('Clique em Concluir para ver o perfil.', 'Haz clic en Listo para ver el perfil.') },
    { alvo: '[data-t=ig-tipo]', fim: true, semVolta: true, tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Agora é conta profissional Comercial, pública, com a categoria no perfil. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora es cuenta profesional Comercial, pública, con la categoría en el perfil. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  /* no computador (instagram.com, 02/11/2026): a bio muda em Editar perfil; o nome e o @ mudam na Central de Contas */
  function escreve(id, v) { var i = document.getElementById(id); if (i) { i.value = v; i.dispatchEvent(new Event('input', { bubbles: true })) } }
  TOURS['editar-perfil'] = [
    { alvo: '[data-t=editar-perfil]', clique: true, antes: function () { SIMIG.perfilComercial() },   // quem não fez o tutorial anterior começa com a conta já comercial
      garante: function () { SIMIG.perfilComercial(); location.hash = 'perfil' }, tit: T('Editar perfil', 'Editar perfil'), txt: T('Vamos deixar o perfil com cara de loja. Clique em Editar perfil.', 'Vamos a dejar el perfil con cara de tienda. Haz clic en Editar perfil.') },
    { alvo: '[data-t=ed-bio]', garante: function () { location.hash = 'editar' }, cond: function () { var f = (ig().F || {}); return (f.eBio || '').trim().length > 10 }, auto: function () { escreve('eBio', 'Canecas, camisetas e ecobags feitas à mão') },
      tit: T('A bio', 'La bio'), txt: T('No computador, aqui você muda a bio (o nome e o @ ficam na Central de Contas: já vamos lá). Em uma frase, o que a loja vende. Ex.: Canecas, camisetas e ecobags feitas à mão. Depois clique em Próximo.', 'En la computadora, aquí cambias la presentación (el nombre y el @ están en el Centro de cuentas: ya vamos). En una frase, qué vende la tienda. Ej.: Tazas, camisetas y ecobags hechas a mano. Después haz clic en Siguiente.') },
    { alvo: '[data-t=ed-salvar]', clique: true, garante: function () { location.hash = 'editar' }, tit: T('Enviar', 'Enviar'), txt: T('Clique em Enviar para salvar a bio.', 'Haz clic en Enviar para guardar la presentación.') },
    { alvo: '[data-t=cfg-conta-meta]', clique: true, garante: function () { location.hash = 'editar' }, tit: T('Nome e @: Conta Meta', 'Nombre y @: Cuenta de Meta'), txt: T('No computador, o nome e o @ mudam na Central de Contas. Clique em Conta Meta, no alto da coluna das configurações.', 'En la computadora, el nombre y el @ cambian en el Centro de cuentas. Haz clic en Cuenta de Meta, arriba en la columna de configuración.') },
    { alvo: '[data-t=cc-conta]', clique: true, garante: function () { SIMIG.cc(null) }, tit: T('Sua conta', 'Tu cuenta'), txt: T('Esta é a Central de Contas (Conta Meta). Clique no cartão da sua conta, com o e-mail e os perfis.', 'Este es el Centro de cuentas (Cuenta de Meta). Haz clic en la tarjeta de tu cuenta, con el correo y los perfiles.') },
    { alvo: '[data-t=cc-perfil-ig]', clique: true, garante: function () { SIMIG.cc('lista') }, tit: T('O perfil do Instagram', 'El perfil de Instagram'), txt: T('Em Perfis, clique no perfil do Instagram (não no do Facebook).', 'En Perfiles, haz clic en el perfil de Instagram (no en el de Facebook).') },
    { alvo: '[data-t=cc-nome]', clique: true, garante: function () { SIMIG.cc('perfil') }, tit: T('Nome', 'Nombre'), txt: T('Clique em Nome.', 'Haz clic en Nombre.') },
    { alvo: '[data-t=cc-campo-nome]', garante: function () { SIMIG.cc('nome') }, cond: function () { var f = (ig().F || {}); return /lojinha/i.test(f.eNome || '') }, auto: function () { escreve('eNome', 'Lojinha da Marina') },
      tit: T('O nome', 'El nombre'), txt: T('O nome aparece em negrito no perfil e na busca. Troque para o nome da loja: Lojinha da Marina. Atenção: só dá para trocar o nome duas vezes em 14 dias. Depois clique em Próximo.', 'El nombre aparece en negrita en el perfil y en la búsqueda. Cámbialo por el nombre de la tienda: Lojinha da Marina. Ojo: solo se puede cambiar el nombre dos veces en 14 días. Después haz clic en Siguiente.') },
    { alvo: '[data-t=cc-concluir-nome]', clique: true, garante: function () { SIMIG.cc('nome') }, tit: T('Concluir', 'Listo'), txt: T('Clique em Concluir.', 'Haz clic en Listo.') },
    { alvo: '[data-t=cc-user]', clique: true, garante: function () { SIMIG.cc('perfil') }, tit: T('Nome de usuário', 'Nombre de usuario'), txt: T('Agora o @: clique em Nome de usuário.', 'Ahora el @: haz clic en Nombre de usuario.') },
    { alvo: '[data-t=cc-campo-user]', garante: function () { SIMIG.cc('user') }, cond: function () { var f = (ig().F || {}); return /lojinha/i.test(f.eUser || '') && !/\s/.test(f.eUser || '') }, auto: function () { escreve('eUser', 'lojinhadamarina') },
      tit: T('O nome de usuário (@)', 'El nombre de usuario (@)'), txt: T('O @ é o endereço do perfil (muda o link também). Coloque um @ da loja, sem espaços (ex.: lojinhadamarina). Depois clique em Próximo.', 'El @ es la dirección del perfil (también cambia el enlace). Pon un @ de la tienda, sin espacios (ej.: lojinhadamarina). Después haz clic en Siguiente.') },
    { alvo: '[data-t=cc-concluir-user]', clique: true, garante: function () { SIMIG.cc('user') }, tit: T('Concluir', 'Listo'), txt: T('Clique em Concluir.', 'Haz clic en Listo.') },
    { alvo: '[data-t=cc-sair]', clique: true, garante: function () { SIMIG.cc(null) }, tit: T('Fechar a Central de Contas', 'Cerrar el Centro de cuentas'), txt: T('Pronto. Feche a Central de Contas no ✕ do canto: você volta para as configurações do Instagram.', 'Listo. Cierra el Centro de cuentas con la ✕ de la esquina: vuelves a la configuración de Instagram.') },
    { alvo: '[data-t=lado-perfil]', clique: true, garante: function () { location.hash = 'config' }, tit: T('Ver o perfil', 'Ver el perfil'), txt: T('Clique em Perfil, na barra da esquerda, para ver como ficou.', 'Haz clic en Perfil, en la barra de la izquierda, para ver cómo quedó.') },
    { alvo: '.ig-cab', fim: true, semVolta: true, garante: function () { location.hash = 'perfil' }, tit: T('Perfil de loja! 🎉', '¡Perfil de tienda! 🎉'), txt: T('De volta ao perfil: nome, @ e bio de loja. (No app do celular, os três ficam juntos em Editar perfil.) Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'De vuelta al perfil: nombre, @ y presentación de tienda. (En la app del celular, los tres están juntos en Editar perfil.) Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
