/* Simulador do WhatsApp: à esquerda o celular da Marina (WhatsApp Business), à direita o celular de uma cliente (WhatsApp comum).
   O que a Marina muda no perfil aparece na hora no celular da cliente.
   - Estado no navegador (localStorage "sim.whatsapp"); nada é enviado ao WhatsApp. ?zerar=1 volta ao começo.
   - Telas do app real vistas em 25/10/2026 (app Android, conta de aula, tema escuro): Ferramentas, Edit profile, Prévia,
     Escolha as categorias, Horário de atendimento (1ª tela), Selecionar faixa. As cores do tema claro e as telas
     marcadas "a conferir" ainda não foram vistas. O espanhol das telas é tradução nossa (a conferir).
   - O que a cliente vê no perfil: o que a Prévia real mostrou (nome, @, botões, produtos, telefone, horário) e, pela
     Central de Ajuda, categoria e descrição (a ordem desses dois é a conferir).
   - Tutoriais (tour.js): meta-whatsapp.html?tour=perfil-whatsapp */
(function () {
  var CONF = '25/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function perfilInicial() { return { nome: 'Lojinha da Marina', user: 'lojinhadamarina', cats: ['Outras empresas'], horario: '', faixa: '', desc: 'Canecas, camisetas e ecobags feitas à mão.', site: 'lojinhadamarina.com.br' } }
  function inicial() { return { p: perfilInicial(), m: 'conversas', c: 'conversa', F: {} } }
  var S = ler('sim.whatsapp', null) || inicial();
  if (params.get('zerar')) S = inicial();
  function grava() { try { localStorage.setItem('sim.whatsapp', JSON.stringify(S)) } catch (e) { } }
  grava();

  var CATS = ['Outras empresas', 'Serviço automotivo', 'Roupas e vestuário', 'Artes e entretenimento', 'Beleza, cosméticos e cuidados pessoais', 'Educação', 'Promotor(a) de eventos', 'Finanças', 'Mercearia', 'Hotel', 'Medicina e saúde'];
  var HOR = [['especificos', 'Aberta no horários específicos'], ['sempre', 'Sempre aberta'], ['marcada', 'Somente com hora marcada']];   // "no horários" (sic) é como está no app real
  var FAIXAS = [['$', 'Econômico'], ['$$', 'Preço médio'], ['$$$', 'Premium'], ['$$$$', 'Luxo']];
  var DIAS = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  var PRODUTOS = ['caneca_01', 'caneca_02', 'caneca_03'];

  /* ---------- pedaços ---------- */
  function topo(tit, dir, voltar) { return '<div class="wa-topo">' + (voltar ? '<button class="wa-ic" data-wa="' + voltar + '" aria-label="Voltar">←</button>' : '') + '<b>' + tit + '</b><span class="wa-dir">' + (dir || '') + '</span></div>' }
  function abas(on) {
    return '<nav class="wa-abas">' + [['conversas', '💬', 'Conversas'], ['ligacoes', '📞', 'Ligações'], ['atualizacoes', '⭕', 'Atualizações'], ['ferramentas', '🏪', 'Ferramentas']].map(function (a) {
      return '<button data-wa="m:' + a[0] + '" data-t="wa-aba-' + a[0] + '" class="' + (on === a[0] ? 'on' : '') + '"><i>' + a[1] + '</i>' + a[2] + '</button>' }).join('') + '</nav>';
  }
  function item(ic, tit, sub, wa, t) { return '<button class="wa-item" data-wa="' + wa + '"' + (t ? ' data-t="' + t + '"' : '') + '><i>' + ic + '</i><span><b>' + tit + '</b>' + (sub ? '<small>' + sub + '</small>' : '') + '</span></button>' }
  function horarioDias() {
    var h = S.p.horario;
    if (h === 'sempre') return DIAS.map(function (d, i) { return '<span class="wa-dia"><span>' + d + '</span><span>Aberta 24 horas</span></span>' }).join('');
    if (h === 'marcada') return '<span class="wa-dia"><span>Somente com hora marcada</span></span>';
    return '';
  }
  function campo(ic, valor, vazio, wa, t, pendente) {
    return '<button class="wa-campo' + (valor ? '' : ' vazio') + '" data-wa="' + wa + '"' + (t ? ' data-t="' + t + '"' : '') + (pendente ? ' data-pendente="1"' : '') + '><i>' + ic + '</i><span>' + (valor || vazio) + '</span></button>';
  }

  /* ---------- celular da Marina (WhatsApp Business) ---------- */
  var M = {
    conversas: function () {
      return topo('WhatsApp', '📷 ⋮') + '<div class="wa-busca">🔍 Pesquisar...</div>' +
        '<div class="wa-faixa-verde">Toque para conectar sua conta comercial a até 4 outros dispositivos. <b>Abrir</b></div>' +
        '<div class="wa-conv"><span class="wa-av">B</span><span><b>Bia (cliente)</b><small>Vocês abrem que horas?</small></span><em>09:12</em></div>' +
        abas('conversas');
    },
    ligacoes: function () { return topo('Ligações') + '<p class="wa-vazio">Neste treino as ligações ficam de fora.</p>' + abas('ligacoes') },
    atualizacoes: function () { return topo('Atualizações') + '<p class="wa-vazio">Status e Canais ficam para outra aula.</p>' + abas('atualizacoes') },
    ferramentas: function () {
      return topo('Ferramentas', '⋮') + '<div class="wa-rolar">' +
        '<p class="wa-sec">Desempenho dos últimos sete dias ⓘ</p><div class="wa-cards"><span><i>💬</i><b>0</b>Conversas iniciadas</span><span><i>▦</i><b>— —</b>Visualizações do catálogo</span><span><i>⭕</i><b>— —</b>Visualizações do status</span></div>' +
        '<p class="wa-sec forte">Expanda sua empresa</p>' +
        item('①', 'Meta One', 'Desbloqueie recursos premium nos apps da Meta', 'x:depois') + item('▦', 'Catálogo', 'Exiba produtos e serviços', 'x:depois') +
        item('📣', 'Anúncios', 'Alcance novos clientes com anúncios que direcionam para o WhatsApp', 'x:depois') + item('📍', 'Guia de negócios', 'Ajude as pessoas a encontrar sua empresa', 'x:depois') +
        item('🧾', 'Cobranças', 'Gerencie cobranças e pagamentos', 'x:depois') + item('💠', 'Pagamentos', 'Gerencie suas informações de pagamento', 'x:depois') +
        '<p class="wa-sec forte">Organize suas conversas</p>' +
        item('🏷️', 'Listas', 'Gerencie pessoas e grupos', 'x:depois') + item('👋', 'Mensagem de saudação', 'Dê as boas-vindas a clientes novos', 'x:depois') +
        item('🌙', 'Mensagem de ausência', 'Avise quando você não estiver disponível', 'x:depois') + item('⚡', 'Respostas rápidas', 'Reutilize mensagens frequentes', 'x:depois') +
        '<p class="wa-sec forte">Gerencie sua conta</p>' +
        item('🏪', 'Perfil', 'Gerencie os dados da empresa', 'm:perfil', 'wa-ferr-perfil') + item('🔗', 'Instagram e Facebook', 'Conecte para alcançar mais clientes.', 'x:depois') +
        item('❔', 'Central de Ajuda', 'Obtenha ajuda, fale conosco', 'x:depois') + '</div>' + abas('ferramentas');
    },
    perfil: function () {   // "Edit profile" (título em inglês no app real)
      var p = S.p;
      return topo('Edit profile', '<button class="wa-ic" data-wa="x:depois" title="Turbinar perfil">📣</button><button class="wa-ic" data-wa="x:depois" title="Compartilhar">🔗</button><button class="wa-ic" data-wa="m:previa" data-t="wa-previa" title="Prévia">👤</button>', 'm:ferramentas') +
        '<div class="wa-rolar"><div class="wa-capa"><span class="wa-foto">🏪</span></div><p class="wa-nome">' + esc(p.nome) + '</p>' +
        '<div data-t="wa-perfil-dados"><p class="wa-sec forte">Dados da empresa</p>' +
        campo('👤', esc(p.nome), 'Nome', 'x:conferir') +
        campo('@', esc(p.user) + '<small>Nome de usuário reservado</small>', '', 'x:conferir') +
        campo('🔷', esc(p.cats.join(', ')), 'Categoria', 'm:categoria', 'wa-campo-cat') +
        campo('🕘', horarioDias(), 'Horário de atendimento', 'm:horario', 'wa-campo-hor') +
        campo('📄', esc(p.desc), 'Descrição', 'x:conferir') +
        campo('📍', '', 'Endereço', 'x:conferir') + '</div>' +
        '<p class="wa-sec forte">Produtos e serviços</p>' + campo('▦', 'Catálogo', '', 'x:depois') +
        '<div class="wa-prods">' + PRODUTOS.map(function (n) { return '<img src="assets/img/' + n + '.png" alt=""/>' }).join('') + '</div>' +
        campo('🏷️', p.faixa ? (FAIXAS.filter(function (f) { return f[0] === p.faixa })[0] || [])[1] + ' ' + p.faixa : '', 'Faixa de preço', 'm:faixa', 'wa-campo-faixa') +
        '<p class="wa-sec forte">Links</p>' + campo('🌐', esc(p.site), 'Site', 'x:conferir') + campo('ⓕ', '', 'Facebook', 'x:depois') +
        '<p class="wa-sec forte">Informações de contato</p>' + campo('✉️', '', 'Email comercial', 'x:conferir') + campo('📞', '+55 11 90000-0000', '', 'x:conferir') + campo('💬', '', 'Recado', 'x:depois') +
        '</div>';
    },
    categoria: function () {
      var sel = S.F.cats || S.p.cats.slice();
      return topo('Escolha as categorias', '<button class="wa-txt" data-wa="cat:salvar" data-t="wa-cat-salvar">Salvar</button> 🔍', 'm:perfil') +
        '<div class="wa-rolar"><p class="wa-sec">Sugestões</p><div data-t="wa-cat-lista">' + CATS.map(function (c) {
          return '<label class="wa-op"><input type="checkbox" data-cat="' + esc(c) + '"' + (sel.indexOf(c) >= 0 ? ' checked' : '') + '/> ' + esc(c) + '</label>' }).join('') + '</div>' +
        '<p class="wa-nota">Até 3 categorias (Central de Ajuda do WhatsApp).</p></div>';
    },
    horario: function () {
      var v = S.F.hor || S.p.horario;
      return topo('Horário de atendimento', '', 'm:perfil') + '<div class="wa-rolar"><p class="wa-txtc">Informe aos clientes quando você está disponível.</p><div data-t="wa-hor-lista">' +
        HOR.map(function (o) { return '<label class="wa-op"><input type="radio" name="wahor" value="' + o[0] + '"' + (v === o[0] ? ' checked' : '') + '/> ' + o[1] + '</label>' }).join('') + '</div></div>' +
        '<button class="wa-bt" data-wa="hor:avancar" data-t="wa-hor-avancar">Avançar</button>';
    },
    faixa: function () {
      var v = S.F.faixa != null ? S.F.faixa : S.p.faixa;
      return topo('Selecionar faixa', '<button class="wa-txt" data-wa="faixa:salvar" data-t="wa-faixa-salvar">Salvar</button>', 'm:perfil') +
        '<div class="wa-rolar"><p class="wa-txtc">Selecione a faixa de preço que melhor representa os preços dos seus produtos ou serviços</p>' +
        FAIXAS.map(function (f) { return '<label class="wa-op"><input type="radio" name="wafaixa" value="' + f[0] + '"' + (v === f[0] ? ' checked' : '') + '/> <span><b>' + f[1] + '</b><small>' + f[0] + '</small></span></label>' }).join('') + '</div>';
    },
    previa: function () { return topo('', '⋮', 'm:perfil') + '<div class="wa-rolar">' + perfilVisto(true) + '</div>' }
  };

  /* ---------- o perfil como a cliente vê (igual à Prévia) ---------- */
  function perfilVisto(voce) {
    var p = S.p, h = p.horario;
    return '<div data-t="' + (voce ? 'wa-previa-tela' : 'wa-cli-perfil') + '"><div class="wa-capa"><span class="wa-foto">🏪</span></div>' +
      '<p class="wa-nome">' + esc(p.nome) + (voce ? ' (Você)' : '') + '</p><p class="wa-user">@' + esc(p.user) + '</p>' +
      '<div class="wa-botoes"><span>💬<small>Conversar</small></span><span>🏪<small>Catálogo</small></span><span>↪<small>Compartilhar</small></span></div>' +
      '<p class="wa-linha">📋 Adicionar às listas</p><p class="wa-linha">📝 Adicionar notas</p>' +
      '<p class="wa-sec">Produtos <span class="wa-dir">MOSTRAR TUDO ›</span></p><div class="wa-prods">' + PRODUTOS.map(function (n) { return '<img src="assets/img/' + n + '.png" alt=""/>' }).join('') + '</div>' +
      '<p class="wa-linha">📞 +55 11 90000-0000</p>' +
      '<p class="wa-linha" data-t="' + (voce ? 'wa-prev-hor' : 'wa-cli-hor') + '">🕘 ' + (h === 'sempre' ? '<span class="wa-verde">Aberta agora</span> · Aberta 24 horas' : h === 'marcada' ? 'Somente com hora marcada' : '<span class="wa-cinza">Sem horário de atendimento</span>') + '</p>' +
      '<div class="wa-pend"><p class="wa-linha" data-t="' + (voce ? 'wa-prev-cat' : 'wa-cli-cat') + '">🔷 ' + esc(p.cats.join(', ')) + '</p><p class="wa-linha">📄 ' + esc(p.desc) + '</p><p class="wa-linha">🌐 ' + esc(p.site) + '</p>' +
      '<p class="wa-nota">Categoria, descrição e site: a Central de Ajuda diz que o cliente vê; a posição exata na tela é a conferir.</p></div></div>';
  }

  /* ---------- celular da cliente (WhatsApp comum) ---------- */
  var C = {
    conversa: function () {
      return '<div class="wa-topo"><span class="wa-av">🏪</span><button class="wa-cab-conv" data-wa="c:perfil" data-t="wa-cli-cab"><b>' + esc(S.p.nome) + '</b><small>Conta comercial</small></button><span class="wa-dir">🏪 📞 ⋮</span></div>' +
        '<div class="wa-chat"><p class="wa-cripto">🔒 As mensagens e ligações são protegidas com a criptografia de ponta a ponta.</p><p class="wa-msg eu">Vocês abrem que horas?<small>09:12 ✓✓</small></p></div>' +
        '<div class="wa-escrever">😊 Mensagem <span>📎 📷 🎤</span></div>';
    },
    perfil: function () { return topo('', '⋮', 'c:conversa') + '<div class="wa-rolar">' + perfilVisto(false) + '</div>' }
  };

  /* ---------- desenhar ---------- */
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = '<div class="sim-faixa">🧪 Simulador de treinamento do WhatsApp · nada aqui vai para o WhatsApp · <a href="simuladores.html">← voltar à plataforma</a></div>' +
      '<div class="wa-palco"><section class="wa-lado"><h2>📱 Celular da Marina <small>WhatsApp Business</small></h2><div class="wa-cel" data-t="wa-cel-marina">' + (M[S.m] || M.conversas)() + '</div></section>' +
      '<section class="wa-lado"><h2>📱 Celular da cliente <small>WhatsApp</small></h2><div class="wa-cel cli" data-t="wa-cel-cliente">' + (C[S.c] || C.conversa)() + '</div></section></div>' +
      '<p class="conferido pendente wa-conf">✓ Telas do app conferidas em ' + CONF + ' (tema escuro) · ⚠ cores do tema claro e itens marcados: a conferir</p>' +
      '<div class="wa-toast" id="waToast" hidden></div>';
    if (foco && document.getElementById(foco)) document.getElementById(foco).focus();
  }
  function toast(t) { var e = $('#waToast'); if (!e) return; e.textContent = t; e.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(function () { e.hidden = true }, 2600) }
  function vai(lado, tela) { if (lado === 'm') { S.m = tela; if (tela !== 'categoria' && tela !== 'horario' && tela !== 'faixa') S.F = {} } else S.c = tela; grava(); render() }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-wa]'); if (!b) return; var a = b.getAttribute('data-wa');
    if (a.indexOf('m:') === 0) return vai('m', a.slice(2));
    if (a.indexOf('c:') === 0) return vai('c', a.slice(2));
    if (a === 'x:depois') return toast('Fica para as próximas aulas do módulo.');
    if (a === 'x:conferir') return toast('Esta tela ainda não foi conferida no app real: fica de fora por enquanto.');
    if (a === 'cat:salvar') { var c = S.F.cats || S.p.cats; if (!c.length) return toast('Escolha pelo menos 1 categoria.'); S.p.cats = c.slice(0, 3); S.F = {}; S.m = 'perfil'; grava(); return render() }
    if (a === 'hor:avancar') { var h = S.F.hor || S.p.horario; if (!h) return toast('Escolha uma opção.'); if (h === 'especificos') return toast('A tela dos horários de cada dia ainda não foi conferida: escolha Sempre aberta neste treino.'); S.p.horario = h; S.F = {}; S.m = 'perfil'; grava(); return render() }
    if (a === 'faixa:salvar') { if (S.F.faixa != null) S.p.faixa = S.F.faixa; S.F = {}; S.m = 'perfil'; grava(); return render() }
  });
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.hasAttribute('data-cat')) {
      var c = (S.F.cats || S.p.cats).slice(), n = t.getAttribute('data-cat'), i = c.indexOf(n);
      if (t.checked && i < 0) { if (c.length >= 3) { t.checked = false; return toast('No máximo 3 categorias.') } c.push(n) } else if (!t.checked && i >= 0) c.splice(i, 1);
      S.F.cats = c; grava(); return;
    }
    if (t.name === 'wahor') { S.F.hor = t.value; grava() }
    if (t.name === 'wafaixa') { S.F.faixa = t.value; grava() }
  });

  window.SIMWA = {
    estado: function () { return S }, render: render,
    perfilZerado: function () { S.p = perfilInicial(); S.F = {}; grava() },
    tela: function (lado, tela) { if (lado === 'm') S.m = tela; else S.c = tela; grava(); render() },
    escolhas: function (o) { for (var k in o) S.F[k] = o[k]; grava(); render() },
    perfil: function (o) { for (var k in o) S.p[k] = o[k]; grava(); render() }
  };
  render();

  /* ---------- tutoriais ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function dep(x) { return T(x.pt + ' Clique em Próximo.', x.es + ' Haz clic en Siguiente.') }
  function W() { return window.SIMWA }
  TOURS['perfil-whatsapp'] = [
    { antes: function () { W().perfilZerado(); W().tela('c', 'perfil'); W().tela('m', 'conversas') }, alvo: '[data-t=wa-cli-perfil]',
      garante: function () { W().perfilZerado(); W().tela('m', 'conversas'); W().tela('c', 'perfil') },
      tit: T('O que a cliente vê', 'Lo que ve la clienta'), txt: dep(T('À direita, a Bia abriu o perfil da Lojinha no celular dela: sem horário e com a categoria “Outras empresas”. Ela não sabe se a loja está aberta.', 'A la derecha, Bia abrió el perfil de la Lojinha en su celular: sin horario y con la categoría “Otras empresas”. No sabe si la tienda está abierta.')) },
    { alvo: '[data-t=wa-aba-ferramentas]', clique: true, garante: function () { W().tela('m', 'conversas') }, tit: T('Ferramentas', 'Herramientas'), txt: T('No celular da Marina, toque na aba Ferramentas.', 'En el celular de Marina, toca la pestaña Herramientas.') },
    { alvo: '[data-t=wa-ferr-perfil]', clique: true, garante: function () { W().tela('m', 'ferramentas') }, tit: T('Perfil', 'Perfil'), txt: T('Em Gerencie sua conta, toque em Perfil.', 'En Administra tu cuenta, toca Perfil.') },
    { alvo: '[data-t=wa-perfil-dados]', garante: function () { W().tela('m', 'perfil') }, tit: T('Os dados da empresa', 'Los datos de la empresa'), txt: dep(T('Aqui ficam nome, nome de usuário, categoria, horário, descrição e endereço. Campo vazio aparece em cinza.', 'Aquí están nombre, nombre de usuario, categoría, horario, descripción y dirección. Un campo vacío aparece en gris.')) },
    { alvo: '[data-t=wa-campo-cat]', clique: true, garante: function () { W().tela('m', 'perfil') }, tit: T('A categoria', 'La categoría'), txt: T('Toque em Outras empresas para trocar a categoria.', 'Toca Otras empresas para cambiar la categoría.') },
    { alvo: '[data-t=wa-cat-lista]', garante: function () { W().tela('m', 'categoria') }, cond: function () { var c = W().estado().F.cats || []; return c.indexOf('Roupas e vestuário') >= 0 && c.indexOf('Outras empresas') < 0 },
      tit: T('Até 3 categorias', 'Hasta 3 categorías'), txt: T('Desmarque Outras empresas e marque Roupas e vestuário (camisetas, moletom, boné). Depois clique em Próximo.', 'Desmarca Otras empresas y marca Ropa y vestuario (camisetas, sudadera, gorra). Después haz clic en Siguiente.') },
    { alvo: '[data-t=wa-cat-salvar]', clique: true, garante: function () { W().tela('m', 'categoria'); W().escolhas({ cats: ['Roupas e vestuário'] }) }, tit: T('Salvar', 'Guardar'), txt: T('Toque em Salvar.', 'Toca Guardar.') },
    { alvo: '[data-t=wa-campo-hor]', clique: true, garante: function () { W().perfil({ cats: ['Roupas e vestuário'] }); W().tela('m', 'perfil') }, tit: T('O horário', 'El horario'), txt: T('Agora toque em Horário de atendimento.', 'Ahora toca Horario de atención.') },
    { alvo: '[data-t=wa-hor-lista]', garante: function () { W().tela('m', 'horario') }, cond: function () { return W().estado().F.hor === 'sempre' },
      tit: T('Quando a loja atende', 'Cuándo atiende la tienda'), txt: T('São três jeitos: horários específicos, Sempre aberta ou Somente com hora marcada. A loja online da Marina atende o tempo todo: escolha Sempre aberta e clique em Próximo.', 'Son tres formas: horarios específicos, Siempre abierta o Solo con cita. La tienda online de Marina atiende todo el tiempo: elige Siempre abierta y haz clic en Siguiente.') },
    { alvo: '[data-t=wa-hor-avancar]', clique: true, garante: function () { W().tela('m', 'horario'); W().escolhas({ hor: 'sempre' }) }, tit: T('Avançar', 'Siguiente'), txt: T('Toque em Avançar.', 'Toca Siguiente.') },
    { alvo: '[data-t=wa-cli-hor]', garante: function () { W().perfil({ cats: ['Roupas e vestuário'], horario: 'sempre' }); W().tela('m', 'perfil'); W().tela('c', 'perfil') },
      tit: T('Do lado da cliente', 'Del lado de la clienta'), txt: dep(T('No celular da Bia já aparece “Aberta agora · Aberta 24 horas” e a nova categoria. Ela já sabe que pode chamar.', 'En el celular de Bia ya aparece “Abierta ahora · Abierta 24 horas” y la nueva categoría. Ya sabe que puede escribir.')) },
    { alvo: '[data-t=wa-previa]', clique: true, garante: function () { W().tela('m', 'perfil') }, tit: T('Prévia', 'Vista previa'), txt: T('Para conferir sem outro celular, a Marina usa a Prévia. Toque no ícone de pessoa no alto.', 'Para revisar sin otro celular, Marina usa la Vista previa. Toca el ícono de persona arriba.') },
    { alvo: '[data-t=wa-previa-tela]', fim: true, semVolta: true, garante: function () { W().tela('m', 'previa') }, tit: T('Perfil pronto 🎉', '¡Perfil listo! 🎉'),
      txt: T('A Prévia mostra o perfil como o cliente vê, com “(Você)” no nome. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'La Vista previa muestra el perfil como lo ve el cliente, con “(Tú)” en el nombre. Haz clic en Terminar. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta.') }
  ];
})();
