/* Simulador do WhatsApp: celular da Marina (WhatsApp Business) e celular de uma cliente, a Bia (WhatsApp comum).
   O que um celular faz aparece na hora no outro (perfil, catálogo, conversa, pedido, Pix, status).
   - Estado no navegador (localStorage "sim.whatsapp"); nada é enviado ao WhatsApp. ?zerar=1 volta ao começo.
   - Telas do app real vistas em 25/10/2026 (tema escuro e, depois, tema claro, cores medidas na foto), conta de aula:
     Conversas, Ferramentas, Edit profile, Prévia, categorias, horário (Selecionar horários), faixa de preço, Gerenciador de
     Catálogos, item, Coleções, Configurações do catálogo, conversa (Anexar, ⋮), enviar item, Formulários, Pix (Solicitar
     pagamento), Cobrar cliente, pedido (Aceitar pedido, Atualizar status), saudação, ausência, respostas rápidas, Listas,
     transmissão comercial (até o aviso de preço), Turbinar perfil (até "Pagar e criar anúncio"), Meta One, assistente da
     Meta AI (até os termos), Instagram e Facebook. Lado da cliente: conversa, perfil, catálogo, carrinho, Pagar com Pix.
   - O que não foi visto avisa "a conferir" e não segue. O espanhol das telas é tradução nossa (a conferir).
   - Tutoriais: sim-whatsapp-tours.js (meta-whatsapp.html?tour=…). */
(function () {
  var CONF = '25/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  function perfilInicial() { return { nome: 'Lojinha da Marina', user: 'lojinhadamarina', cats: ['Outras empresas'], horario: '', dias: [true, true, true, true, true, true, true], faixa: '', desc: 'Canecas, camisetas e ecobags feitas à mão.', site: 'lojinhadamarina.com.br' } }
  function catInicial() {
    return { itens: [
      { id: 'boas', nome: 'Caneca Boas Ideais', preco: 54.9, img: 'caneca_03' },
      { id: 'amarelo', nome: 'Caneca Amarelo', preco: 49.9, img: 'caneca_02' },
      { id: 'azul', nome: 'Caneca Azul', preco: 39.9, de: 49.9, img: 'caneca_01' },
      { id: 'camiseta', nome: 'Camiseta Lojinha', preco: 69.9, img: 'camiseta_02' },
      { id: 'ecobag', nome: 'Ecobag Lojinha', preco: 34.9, img: 'ecobag_03' }], cols: [] };
  }
  function chatInicial() { return [{ de: 'cli', t: 'txt', x: 'Vocês abrem que horas?', h: '09:12' }] }
  function inicial() {
    return { p: perfilInicial(), cat: catInicial(), chat: chatInicial(), car: {}, ped: null, cobN: 0,
      saud: { on: false, texto: 'Lojinha da Marina agradece seu contato. Como podemos ajudar?', dest: 'Todos' },
      aus: { on: false, texto: 'Agradecemos sua mensagem. Não estamos disponíveis no momento, mas responderemos assim que possível.', hora: 'Enviar sempre' },
      rr: [{ a: 'obrigado', t: 'Agradecemos por utilizar nossos serviços! Esperamos trabalhar com você novamente em breve.' }, { a: 'Horário de atendimento', t: 'Estamos abertos agora. Nosso horário de atendimento é:' }],
      listas: [], m: 'conversas', c: 'conversa', F: {} };
  }
  var S = ler('sim.whatsapp', null) || inicial();
  if (params.get('zerar')) S = inicial();
  (function completa() { var I = inicial(); for (var k in I) if (S[k] === undefined) S[k] = I[k]; if (!S.p.dias) S.p.dias = I.p.dias })();
  function grava() { try { localStorage.setItem('sim.whatsapp', JSON.stringify(S)) } catch (e) { } }
  grava();

  var CATS = ['Outras empresas', 'Serviço automotivo', 'Roupas e vestuário', 'Artes e entretenimento', 'Beleza, cosméticos e cuidados pessoais', 'Educação', 'Promotor(a) de eventos', 'Finanças', 'Mercearia', 'Hotel', 'Medicina e saúde'];
  var HOR = [['especificos', 'Aberta no horários específicos'], ['sempre', 'Sempre aberta'], ['marcada', 'Somente com hora marcada']];   // "no horários" (sic) é como está no app real
  var FAIXAS = [['$', 'Econômico'], ['$$', 'Preço médio'], ['$$$', 'Premium'], ['$$$$', 'Luxo']];
  var DIAS = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  var STATUS = ['Pagamento pedido', 'Preparando para o envio', 'Enviado', 'Entregue', 'Concluído', 'Cancelado'];
  var LISTA_SUG = ['Novo cliente', 'Novo pedido', 'Pagamento pendente', 'Pago'];

  /* ---------- pedaços ---------- */
  function rs(v) { return 'R$ ' + Number(v).toFixed(2).replace('.', ',') }
  function itemPor(id) { return S.cat.itens.filter(function (i) { return i.id === id })[0] }
  function visiveis() { return S.cat.itens.filter(function (i) { return !i.oculto }) }
  function preco(i) { return '<span class="wa-preco">' + rs(i.preco) + (i.de ? ' <s>' + rs(i.de) + '</s>' : '') + '</span>' }
  function img(i, cls) { return '<img class="' + (cls || 'wa-mini') + '" src="assets/img/' + i.img + '.png" alt=""/>' }
  function topo(tit, dir, voltar) { return '<div class="wa-topo">' + (voltar ? '<button class="wa-ic" data-wa="' + voltar + '" aria-label="Voltar">←</button>' : '') + '<b>' + tit + '</b><span class="wa-dir">' + (dir || '') + '</span></div>' }
  function abas(on) {
    return '<nav class="wa-abas">' + [['conversas', '💬', 'Conversas'], ['ligacoes', '📞', 'Ligações'], ['atualizacoes', '⭕', 'Atualizações'], ['ferramentas', '🏪', 'Ferramentas']].map(function (a) {
      return '<button data-wa="m:' + a[0] + '" data-t="wa-aba-' + a[0] + '" class="' + (on === a[0] ? 'on' : '') + '"><i>' + a[1] + '</i>' + a[2] + '</button>' }).join('') + '</nav>';
  }
  function item(ic, tit, sub, wa, t) { return '<button class="wa-item" data-wa="' + wa + '"' + (t ? ' data-t="' + t + '"' : '') + '><i>' + ic + '</i><span><b>' + tit + '</b>' + (sub ? '<small>' + sub + '</small>' : '') + '</span></button>' }
  function horarioDias() {
    var h = S.p.horario;
    if (h === 'sempre') return DIAS.map(function (d, i) { return '<span class="wa-dia"><span>' + d + '</span><span>' + (S.p.dias[i] ? 'Aberta 24 horas' : 'Fechada') + '</span></span>' }).join('');
    if (h === 'marcada') return '<span class="wa-dia"><span>Somente com hora marcada</span></span>';
    return '';
  }
  function campo(ic, valor, vazio, wa, t) { return '<button class="wa-campo' + (valor ? '' : ' vazio') + '" data-wa="' + wa + '"' + (t ? ' data-t="' + t + '"' : '') + '><i>' + ic + '</i><span>' + (valor || vazio) + '</span></button>' }
  function chave(on, wa, t) { return '<button class="wa-tog' + (on ? ' on' : '') + '" data-wa="' + wa + '"' + (t ? ' data-t="' + t + '"' : '') + ' aria-label="Ligar ou desligar"></button>' }
  function folha(html, t) { return '<div class="wa-veu" data-wa="folha:fechar"></div><div class="wa-folha"' + (t ? ' data-t="' + t + '"' : '') + '><span class="wa-alca"></span>' + html + '</div>' }
  function capaCat(link) { return '<div class="wa-capacat"><span>🏪</span><b>' + esc(S.p.nome) + (link ? ' ›' : '') + '</b><small>' + esc(S.p.desc) + '</small></div>' }

  /* ---------- a conversa (mesmas mensagens nos dois celulares) ---------- */
  function msg(m, lado) {   // lado: 'm' (Marina) ou 'c' (cliente)
    var meu = (m.de === 'loja') === (lado === 'm'), cls = 'wa-msg' + (meu ? ' eu' : ''), h = '<small>' + (m.h || '') + (meu ? ' ✓✓' : '') + '</small>';
    if (m.t === 'txt') return '<p class="' + cls + '">' + esc(m.x) + h + '</p>';
    if (m.t === 'item') { var i = itemPor(m.id) || {}; return '<div class="' + cls + ' wa-card">' + (i.img ? img(i, 'wa-cardimg') : '') + '<b>' + esc(i.nome) + '</b>' + (i.preco ? preco(i) : '') + h + '<span class="wa-cardbt">Ver</span></div>' }
    if (m.t === 'pedido') return '<div class="' + cls + ' wa-card" data-t="wa-' + lado + '-msg-pedido"><span class="wa-cardtit">Pedido feito via catálogo</span><b>🛒 ' + m.qtd + ' itens</b><span>Subtotal: ' + rs(m.total) + '</span>' + h +
      (lado === 'm' ? '<button class="wa-cardbt" data-wa="m:pedido" data-t="wa-mostrar-pedido">Mostrar pedido</button>' : '<span class="wa-cardbt">Mostrar detalhes</span>') + '</div>';
    if (m.t === 'cob') return '<div class="' + cls + ' wa-card" data-t="wa-' + lado + '-msg-cob"><span class="wa-cardtit">Nº da cobrança: ' + m.num + '</span><b>' + esc(m.nomes) + '</b><span>' + m.qtd + ' itens · Total ' + rs(m.total) + '</span>' + h +
      (lado === 'm' ? '<button class="wa-cardbt" data-wa="m:status" data-t="wa-atualizar-status">Atualizar status</button><span class="wa-cardbt">Mostrar detalhes</span>' : '<button class="wa-cardbt" data-wa="c:pagarpix" data-t="wa-cli-pagarpix-cob">Pagar com Pix</button>') + '</div>';
    if (m.t === 'status') return '<p class="' + cls + '" data-t="wa-' + lado + '-msg-status"><b>' + esc(m.nomes) + '</b><br><span class="wa-cinza">Quantidade ' + m.qtd + ' • ' + rs(m.total) + '</span><br>Status: ' + esc(m.st.toLowerCase()) + (m.recado ? '<br>' + esc(m.recado) : '') + h + '</p>';
    if (m.t === 'pix') return '<div class="' + cls + ' wa-card" data-t="wa-' + lado + '-msg-pix"><b class="wa-pixval">' + rs(m.valor) + '</b><span>Pagar com 💠</span><span>' + (lado === 'm' ? 'Você solicitou um pagamento.' : esc(S.p.nome) + ' solicitou um pagamento.') + '</span>' + h +
      (lado === 'c' ? '<button class="wa-cardbt" data-wa="c:pagarpix" data-t="wa-cli-pagarpix">Pagar com Pix</button>' : '') + '</div>';
    return '';
  }
  function conversa(lado) { return '<div class="wa-chat" data-t="wa-' + lado + '-chat"><p class="wa-cripto">🔒 As mensagens e ligações são protegidas com a criptografia de ponta a ponta.</p>' + S.chat.map(function (m) { return msg(m, lado) }).join('') + '</div>' }
  function hora() { var d = new Date(); return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) }
  function manda(m) { m.h = m.h || hora(); S.chat.push(m) }
  function primeiraDaCliente() { return !S.chat.some(function (m) { return m.de === 'cli' }) }

  /* ---------- celular da Marina (WhatsApp Business) ---------- */
  var M = {
    conversas: function () {
      var ult = S.chat[S.chat.length - 1] || {}, lista = S.F.filtro ? S.listas.filter(function (l) { return l.n === S.F.filtro })[0] : null;
      var mostra = !lista || lista.membros.indexOf('Bia') >= 0;
      return topo('WhatsApp', '📷 ⋮') + '<div class="wa-busca">🔍 Pesquisar...</div>' +
        '<div class="wa-faixa-verde">Toque para conectar sua conta comercial a até 4 outros dispositivos. <b>Abrir</b></div>' +
        '<div class="wa-chips" data-t="wa-filtros"><button data-wa="filtro:" class="' + (!S.F.filtro ? 'on' : '') + '">Todas</button><span>Não lidas</span><span>Favoritos</span><span>Grupos</span>' +
        S.listas.map(function (l) { return '<button data-wa="filtro:' + esc(l.n) + '" data-t="wa-filtro-lista" class="' + (S.F.filtro === l.n ? 'on' : '') + '">' + esc(l.n) + '</button>' }).join('') + '</div>' +
        (mostra ? '<button class="wa-conv" data-wa="m:conv" data-t="wa-conv-bia"><span class="wa-av">B</span><span><b>Bia (cliente)</b><small>' + esc(ult.t === 'txt' ? ult.x : ult.t === 'pedido' ? '🛒 Pedido feito via catálogo' : 'Mensagem') + '</small>' +
          S.listas.filter(function (l) { return l.membros.indexOf('Bia') >= 0 }).map(function (l) { return '<em class="wa-tag">' + esc(l.n.toUpperCase()) + '</em>' }).join('') + '</span><em>' + (ult.h || '') + '</em></button>' : '<p class="wa-vazio">Nenhuma conversa nesta lista.</p>') +
        '<button class="wa-roxo" data-wa="m:assistente" data-t="wa-botao-ia" title="Converse com seu assistente">✳</button><span class="wa-fab" title="Nova conversa">＋</span>' + abas('conversas');
    },
    ligacoes: function () { return topo('Ligações') + '<p class="wa-vazio">Neste treino as ligações ficam de fora.</p>' + abas('ligacoes') },
    atualizacoes: function () { return topo('Atualizações') + '<p class="wa-vazio">Status e Canais ficam de fora deste módulo.</p>' + abas('atualizacoes') },
    ferramentas: function () {
      return topo('Ferramentas', '⋮') + '<div class="wa-rolar">' +
        '<p class="wa-sec">Desempenho dos últimos sete dias ⓘ</p><div class="wa-cards"><span><i>💬</i><b>0</b>Conversas iniciadas</span><span><i>▦</i><b>— —</b>Visualizações do catálogo</span><span><i>⭕</i><b>— —</b>Visualizações do status</span></div>' +
        '<p class="wa-sec forte">Expanda sua empresa</p>' +
        item('①', 'Meta One', 'Desbloqueie recursos premium nos apps da Meta', 'm:metaone', 'wa-ferr-metaone') + item('▦', 'Catálogo', 'Exiba produtos e serviços', 'm:catalogo', 'wa-ferr-catalogo') +
        item('📣', 'Anúncios', 'Alcance novos clientes com anúncios que direcionam para o WhatsApp', 'm:an1', 'wa-ferr-anuncios') + item('📍', 'Guia de negócios', 'Ajude as pessoas a encontrar sua empresa', 'x:guia') +
        item('🧾', 'Cobranças', 'Gerencie cobranças e pagamentos', 'm:cobrancas', 'wa-ferr-cobrancas') + item('💠', 'Pagamentos', 'Gerencie suas informações de pagamento', 'x:depois') +
        '<p class="wa-sec forte">Organize suas conversas</p>' +
        item('🏷️', 'Listas', 'Gerencie pessoas e grupos', 'm:listas', 'wa-ferr-listas') + item('👋', 'Mensagem de saudação', 'Dê as boas-vindas a clientes novos', 'm:saudacao', 'wa-ferr-saudacao') +
        item('🌙', 'Mensagem de ausência', 'Avise quando você não estiver disponível', 'm:ausencia', 'wa-ferr-ausencia') + item('⚡', 'Respostas rápidas', 'Reutilize mensagens frequentes', 'm:respostas', 'wa-ferr-respostas') +
        '<p class="wa-sec forte">Gerencie sua conta</p>' +
        item('🏪', 'Perfil', 'Gerencie os dados da empresa', 'm:perfil', 'wa-ferr-perfil') + item('🔗', 'Instagram e Facebook', 'Conecte para alcançar mais clientes.', 'm:conectar', 'wa-ferr-conectar') +
        item('❔', 'Central de Ajuda', 'Obtenha ajuda, fale conosco', 'x:depois') + '</div>' + abas('ferramentas');
    },
    perfil: function () {   // "Edit profile" (título em inglês no app real)
      var p = S.p;
      return topo('Edit profile', '<button class="wa-ic" data-wa="m:an1" data-t="wa-turbinar-perfil" title="Turbinar perfil">📣</button><button class="wa-ic" data-wa="x:compartilhar" title="Compartilhar">🔗</button><button class="wa-ic" data-wa="m:previa" data-t="wa-previa" title="Prévia">👤</button>', 'm:ferramentas') +
        '<div class="wa-rolar"><div class="wa-capa"><span class="wa-foto">🏪</span></div><p class="wa-nome">' + esc(p.nome) + '</p>' +
        '<div data-t="wa-perfil-dados"><p class="wa-sec forte">Dados da empresa</p>' +
        campo('👤', esc(p.nome), 'Nome', 'x:conferir') + campo('@', esc(p.user) + '<small>Nome de usuário reservado</small>', '', 'x:conferir') +
        campo('🔷', esc(p.cats.join(', ')), 'Categoria', 'm:categoria', 'wa-campo-cat') + campo('🕘', horarioDias(), 'Horário de atendimento', 'm:horario', 'wa-campo-hor') +
        campo('📄', esc(p.desc), 'Descrição', 'x:conferir') + campo('📍', '', 'Endereço', 'x:conferir') + '</div>' +
        '<p class="wa-sec forte">Produtos e serviços</p>' + campo('▦', 'Catálogo', '', 'm:catalogo') +
        '<div class="wa-prods">' + visiveis().slice(0, 3).map(function (i) { return img(i, '') }).join('') + '</div>' +
        campo('🏷️', p.faixa ? (FAIXAS.filter(function (f) { return f[0] === p.faixa })[0] || [])[1] + ' ' + p.faixa : '', 'Faixa de preço', 'm:faixa', 'wa-campo-faixa') +
        '<p class="wa-sec forte">Links</p>' + campo('🌐', esc(p.site), 'Site', 'x:conferir') + campo('ⓕ', '', 'Facebook', 'm:conectar') +
        '<p class="wa-sec forte">Informações de contato</p>' + campo('✉️', '', 'Email comercial', 'x:conferir') + campo('📞', '+55 11 90000-0000', '', 'x:conferir') + campo('💬', '', 'Recado', 'x:depois') + '</div>';
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
        HOR.map(function (o) { return '<label class="wa-op"><input type="radio" name="wahor" value="' + o[0] + '"' + (v === o[0] ? ' checked' : '') + '/> <span>' + o[1] + (v === o[0] ? '<span class="sel">Selecionado</span>' : '') + '</span></label>' }).join('') + '</div></div>' +
        '<button class="wa-bt" data-wa="hor:avancar" data-t="wa-hor-avancar">Avançar</button>';
    },
    dias: function () {   // "Selecionar horários" (vista em 26/10/2026): uma chave por dia; desligada = Fechada
      var d = S.F.dias || S.p.dias;
      return topo('Selecionar horários', '', 'm:horario') + '<div class="wa-rolar" data-t="wa-dias-lista">' + DIAS.map(function (n, i) {
        return '<div class="wa-dia2"><span>' + n + '<small>' + (d[i] ? 'Aberta 24 horas' : 'Fechada') + '</small></span>' + chave(d[i], 'dia:' + i, 'wa-dia-' + i) + '</div>' }).join('') + '</div>' +
        '<button class="wa-bt" data-wa="dias:salvar" data-t="wa-dias-salvar">Salvar</button>';
    },
    faixa: function () {
      var v = S.F.faixa != null ? S.F.faixa : S.p.faixa;
      return topo('Selecionar faixa', '<button class="wa-txt" data-wa="faixa:salvar" data-t="wa-faixa-salvar">Salvar</button>', 'm:perfil') +
        '<div class="wa-rolar"><p class="wa-txtc">Selecione a faixa de preço que melhor representa os preços dos seus produtos ou serviços</p>' +
        FAIXAS.map(function (f) { return '<label class="wa-op"><input type="radio" name="wafaixa" value="' + f[0] + '"' + (v === f[0] ? ' checked' : '') + '/> <span><b>' + f[1] + '</b><small>' + f[0] + '</small></span></label>' }).join('') + '</div>';
    },
    previa: function () { return topo('', '⋮', 'm:perfil') + '<div class="wa-rolar">' + perfilVisto(true) + '</div>' },

    /* --- catálogo (aula 02) --- */
    catalogo: function () {
      return topo('Gerenciador de Catálogos', '<button class="wa-ic" data-wa="m:catmenu" data-t="wa-cat-menu" aria-label="Mais opções">⋮</button>', 'm:ferramentas') + '<div class="wa-rolar">' + capaCat() +
        '<div class="wa-pilulas"><span>📣 Turbinar item</span><span>🔗 Compartilhar</span></div>' +
        '<button class="wa-prod-linha" data-wa="x:conferir"><span class="wa-mais-q">＋</span><span class="wa-cinza">Adicionar item</span></button>' +
        '<button class="wa-prod-linha" data-wa="m:colecoes" data-t="wa-add-colecao"><span class="wa-mais-q">＋</span><span class="wa-cinza">Adicionar coleção</span></button>' +
        S.cat.itens.map(function (i) { return '<button class="wa-prod-linha" data-wa="item:' + i.id + '" data-t="wa-item-' + i.id + '">' + img(i) + '<span><b>' + esc(i.nome) + '</b>' + preco(i) + (i.oculto ? '<em class="wa-oculto">Oculto</em>' : '') + '</span></button>' }).join('') +
        '</div><span class="wa-fab" style="bottom:16px">＋</span>';
    },
    catmenu: function () { return M.catalogo() + '<div class="wa-menu" data-t="wa-cat-menu-lista"><button data-wa="x:depois">Compartilhar</button><button data-wa="m:colecoes" data-t="wa-menu-colecoes">Coleções</button><button data-wa="m:catconfig">Configurações do catálogo</button><button data-wa="x:depois">Turbinar catálogo</button></div>' },
    catconfig: function () {
      return topo('Configurações do catálogo', '', 'm:catalogo') + '<div class="wa-rolar"><p class="wa-sec forte">Pedidos</p><p class="wa-txtc">Ao fazer compras, os clientes podem adicionar itens ao carrinho. <span class="wa-link">Saiba mais</span></p>' +
        '<div class="wa-dia2"><span>Mostrar o botão Adicionar ao carrinho<small>Os carrinhos existentes não serão afetados ao desativar essa opção.</small></span>' + chave(S.cat.semCarrinho ? false : true, 'carrinho:alternar', 'wa-chave-carrinho') + '</div>' +
        '<p class="wa-sec forte">Conectar catálogo do Meta Business Suite</p><p class="wa-txtc">Conecte um catálogo do Meta Business Suite para que os clientes possam acessá-lo no WhatsApp. <span class="wa-link">Saiba mais</span></p><p class="wa-linha link">Conectar catálogo</p></div>';
    },
    item: function () {
      var i = itemPor(S.F.item) || S.cat.itens[0];
      return topo('', '↪ 🔗 <button class="wa-ic" data-wa="m:itemmenu" data-t="wa-item-menu" aria-label="Mais opções">⋮</button>', 'm:catalogo') + '<div class="wa-rolar">' + img(i, 'wa-grande') +
        '<p class="wa-nome" style="text-align:left;margin:12px 16px 2px">' + esc(i.nome) + '</p><p style="margin:0 16px">' + preco(i) + '</p>' + (i.oculto ? '<p class="wa-nota">Item oculto: os clientes não veem.</p>' : '') +
        '<div class="wa-pilulas"><span>📣 TURBINAR</span><span>🔗 COMPARTILHAR</span></div></div><span class="wa-fab" style="bottom:16px" title="Editar item">✎</span>';
    },
    itemmenu: function () { var i = itemPor(S.F.item) || {}; return M.item() + '<div class="wa-menu" data-t="wa-item-menu-lista"><button data-wa="item:ocultar" data-t="wa-ocultar">' + (i.oculto ? 'Mostrar' : 'Ocultar') + '</button><button data-wa="x:apagar">Apagar</button></div>' },
    colecoes: function () {
      var c = S.cat.cols;
      return topo('Coleções', '⋮', 'm:catalogo') + '<div class="wa-rolar">' + (c.length ? c.map(function (k) { return '<div class="wa-prod-linha" data-t="wa-colecao-criada"><span class="wa-mais-q">▦</span><span><b>' + esc(k.nome) + '</b><small>' + k.itens.length + ' itens</small></span></div>' }).join('') :
        '<div class="wa-vazio"><b style="font-size:20px;color:var(--wa-tx)">Organize seu catálogo<br>para atrair mais clientes</b><p>Crie coleções para que seja mais fácil encontrar seus itens e deixe seu catálogo ainda mais interessante.</p></div>') +
        '</div><button class="wa-fab" style="bottom:16px" data-wa="m:colnome" data-t="wa-nova-colecao" title="Adicionar coleção">＋</button>';
    },
    colnome: function () {
      return M.colecoes() + folha('<input class="wa-campo-txt" id="waColNome" placeholder="Nome da coleção" value="' + esc(S.F.colNome || '') + '" data-t="wa-col-nome"/><div class="wa-folha-bts"><button class="wa-txt" data-wa="m:colecoes">Cancelar</button><button class="wa-txt" data-wa="col:avancar" data-t="wa-col-avancar">Avançar</button></div>', 'wa-folha-col');
    },
    colitens: function () {
      var sel = S.F.colItens || [];
      return topo(sel.length ? 'Selecionados: ' + sel.length : 'Adicionar itens', '<button class="wa-txt" data-wa="col:ok" data-t="wa-col-ok">OK</button>', 'm:colecoes') + '<div class="wa-rolar" data-t="wa-col-lista">' +
        S.cat.itens.map(function (i) { return '<label class="wa-prod-linha"><input type="checkbox" data-colitem="' + i.id + '"' + (sel.indexOf(i.id) >= 0 ? ' checked' : '') + '/>' + img(i) + '<span><b>' + esc(i.nome) + '</b>' + preco(i) + '</span></label>' }).join('') + '</div>';
    },

    /* --- conversa com a cliente (aulas 03, 04, 05) --- */
    conv: function () {
      var barra = S.F.barra ? '<div class="wa-rr" data-t="wa-rr-lista"><p class="wa-sec">Respostas rápidas <span class="wa-dir">EDITAR</span></p>' + S.rr.map(function (r, k) { return '<button class="wa-item" data-wa="rr:' + k + '" data-t="wa-rr-' + esc(r.a) + '"><span><b>' + esc(r.a) + '</b><small>' + esc(r.t) + '</small></span></button>' }).join('') + '</div>' : '';
      return '<div class="wa-topo"><button class="wa-ic" data-wa="m:conversas">←</button><span class="wa-av">B</span><b>Bia (cliente)</b><span class="wa-dir">🏷️ 📞 <button class="wa-ic" data-wa="m:convmenu" data-t="wa-conv-menu" aria-label="Mais opções">⋮</button></span></div>' +
        conversa('m') + barra + '<div class="wa-escrever" data-t="wa-m-entrada"><input id="waMsg" class="wa-entrada" placeholder="Mensagem" value="' + esc(S.F.texto || '') + '" autocomplete="off"/><button class="wa-ic" data-wa="m:anexo" data-t="wa-anexar" aria-label="Anexar">📎</button><button class="wa-ic" data-wa="m:enviar" data-t="wa-m-enviar" aria-label="Enviar">➤</button></div>';
    },
    anexo: function () {
      return M.conv() + '<div class="wa-anexos" data-t="wa-anexos">' + [['📄', 'Documento', 'x:depois'], ['📋', 'Formulários', 'x:form'], ['💠', 'Pix', 'm:pix'], ['▦', 'Catálogo', 'm:catenvio'], ['⚡', 'Resposta rápida', 'barra:abrir'], ['📍', 'Localização', 'x:depois'], ['👤', 'Contato', 'x:depois'], ['📊', 'Enquete', 'x:depois'], ['📅', 'Evento', 'x:depois']].map(function (a) {
        return '<button data-wa="' + a[2] + '" data-t="wa-anexo-' + a[1].toLowerCase().replace(/[^a-z]/g, '') + '"><i>' + a[0] + '</i>' + a[1] + '</button>' }).join('') + '</div>';
    },
    convmenu: function () { return M.conv() + '<div class="wa-menu"><button data-wa="m:cobrar" data-t="wa-cobrar-cliente">Cobrar cliente</button><button data-wa="m:perfil">Mostrar contato</button><button>Pesquisar</button><button>Mídia, links e docs</button><button>Silenciar notificações</button><button>Mensagens temporárias</button><button>Novo grupo</button><button>Mais ›</button></div>' },
    catenvio: function () {
      var sel = S.F.envio || [];
      return topo(sel.length ? '' + sel.length : 'Enviar para Bia', '✎ ⋮', 'm:conv') + '<div class="wa-rolar"><p class="wa-sec forte">Enviar catálogo</p><div data-t="wa-envio-lista">' + visiveis().map(function (i) {
        return '<label class="wa-prod-linha"><input type="checkbox" data-envio="' + i.id + '"' + (sel.indexOf(i.id) >= 0 ? ' checked' : '') + '/>' + img(i) + '<span><b>' + esc(i.nome) + '</b>' + preco(i) + '</span></label>' }).join('') + '</div></div>' +
        (sel.length ? '<button class="wa-fab" style="bottom:16px" data-wa="envio:ok" data-t="wa-enviar-item" title="Enviar item">➤</button>' : '');
    },
    pix: function () {
      return M.conv() + folha('<p class="wa-folha-tit">Solicitar pagamento</p><p class="wa-txtc" style="text-align:center">Bia poderá copiar sua chave ou código Pix a partir da conversa.</p>' +
        '<div class="wa-pixcard"><span class="wa-pixlogo">💠</span><span><b>Marina (Lojinha)</b><small>chave Pix de exemplo</small></span><span>✎</span></div>' +
        '<label class="wa-campo-txt-l">Valor (opcional)<span>R$ <input id="waPixVal" inputmode="decimal" value="' + esc(S.F.pixVal || '') + '" data-t="wa-pix-valor"/></span></label>' +
        (S.F.pixErro ? '<p class="wa-erro" data-t="wa-pix-erro">' + S.F.pixErro + '</p>' : '') +
        '<button class="wa-bt" data-wa="pix:enviar" data-t="wa-pix-enviar">ENVIAR SOLICITAÇÃO</button>', 'wa-folha-pix');
    },
    cobrar: function () { return topo('Cobrar cliente', '', 'm:conv') + '<div class="wa-rolar"><p class="wa-nome" style="margin-top:20px">' + esc(S.p.nome) + '</p><p class="wa-linha">＋ Adicionar item</p><p class="wa-linha">Subtotal <span class="wa-dir">R$ 0,00</span></p></div><button class="wa-bt" data-wa="x:cobranca">COBRAR SEM CATÁLOGO</button>' },
    pedido: function () {
      var p = S.ped; if (!p) return topo('Pedido', '', 'm:conv') + '<p class="wa-vazio">Nenhum pedido.</p>';
      return topo('Pedido', '⋮', 'm:conv') + '<div class="wa-rolar"><p class="wa-linha"><span class="wa-cinza">From</span> <span class="wa-av" style="width:30px;height:30px">B</span><b>Bia</b></p>' +
        Object.keys(p.itens).map(function (id) { var i = itemPor(id); return '<div class="wa-prod-linha">' + img(i) + '<span><b>' + esc(i.nome) + '</b><small>Quantidade: ' + p.itens[id] + '</small></span><span class="wa-dir">' + rs(i.preco * p.itens[id]) + '</span></div>' }).join('') +
        '<p class="wa-linha wa-cinza">Adicionar desconto, frete ou imposto</p><p class="wa-linha"><b>Total</b><span class="wa-dir"><b>' + rs(p.total) + '</b></span></p></div>' +
        (p.aceito ? '<p class="wa-nota" style="text-align:center">Pedido aceito.</p>' : '<button class="wa-bt" data-wa="pedido:aceitar" data-t="wa-aceitar-pedido">ACEITAR PEDIDO</button><p class="wa-nota" style="text-align:center">O cliente recebe uma notificação quando você aceita o pedido.</p>');
    },
    status: function () {
      var v = S.F.st || '';
      return topo('Atualizar status', '', 'm:conv') + '<div class="wa-rolar"><p class="wa-sec forte">Status do pagamento</p><div class="wa-dia2"><span>Pago</span>' + chave(false, 'x:depois') + '</div>' +
        '<p class="wa-sec forte">Status do pedido</p><div data-t="wa-status-lista">' + STATUS.map(function (s) { return '<label class="wa-op"><input type="radio" name="wast" value="' + s + '"' + (v === s ? ' checked' : '') + '/> ' + s + '</label>' }).join('') + '</div>' +
        '<p class="wa-sec forte">Mensagem</p><input class="wa-campo-txt" id="waRecado" placeholder="Adicionar recado (opcional)" value="' + esc(S.F.recado || '') + '" data-t="wa-recado"/></div>' +
        '<button class="wa-bt" data-wa="status:enviar" data-t="wa-enviar-status">ENVIAR ATUALIZAÇÃO</button>';
    },
    cobrancas: function () {
      var h = S.chat.filter(function (m) { return m.t === 'cob' });
      return topo('Cobranças', '', 'm:ferramentas') + '<div class="wa-rolar"><p class="wa-txtc">Todas as informações de pagamento da sua empresa agora estão em Pagamentos.</p><p class="wa-sec forte">Pedidos</p><p class="wa-txtc">Nenhum pedido</p><p class="wa-sec forte">Histórico</p>' +
        (h.length ? h.map(function (m) { return '<div class="wa-prod-linha"><span class="wa-av">B</span><span><b>Bia</b><small>' + esc(m.nomes) + '</small></span><span class="wa-dir">' + rs(m.total) + '<br><small>' + esc(S.F.ultStatus || 'Pagamento pedido') + '</small></span></div>' }).join('') : '<p class="wa-txtc">Nenhuma cobrança ainda.</p>') + '</div>';
    },

    /* --- atendimento automático (aula 05) --- */
    saudacao: function () {
      var s = S.saud, f = S.F.saud || s;
      return topo('Mensagem de saudação', '<button class="wa-txt" data-wa="saud:salvar" data-t="wa-saud-salvar">Salvar</button> ⋮', 'm:ferramentas') + '<div class="wa-rolar">' +
        '<div class="wa-dia2" data-t="wa-saud-chave-linha"><span><b>Enviar mensagem de saudação</b><small>Envie uma mensagem de saudação em resposta à primeira mensagem de seus clientes ou após 14 dias de inatividade.</small></span>' + chave(f.on, 'saud:alternar', 'wa-saud-chave') + '</div>' +
        '<div class="wa-linha' + (f.on ? '' : ' wa-apagado') + '" style="display:block"><b>Mensagem de saudação</b><br><span class="wa-cinza">' + esc(f.texto) + '</span></div>' +
        '<div class="wa-linha' + (f.on ? '' : ' wa-apagado') + '" style="display:block"><b>Destinatários</b><br><span class="wa-cinza">Enviar para todos</span></div>' +
        '<p class="wa-nota">As mensagens de saudação só serão enviadas quando seu celular estiver conectado à internet. <span class="wa-link">Saiba mais</span></p></div>';
    },
    ausencia: function () {
      var a = S.aus;
      return topo('Mensagem de ausência', '<button class="wa-txt" data-wa="m:ferramentas">Salvar</button> ⋮', 'm:ferramentas') + '<div class="wa-rolar">' +
        '<div class="wa-dia2"><span><b>Enviar mensagem de ausência</b><small>Responda automaticamente com uma mensagem quando você não estiver disponível.</small></span>' + chave(a.on, 'x:ausencia') + '</div>' +
        '<div class="wa-linha wa-apagado" style="display:block"><b>Mensagem de ausência</b><br><span class="wa-cinza">' + esc(a.texto) + '</span></div>' +
        '<div class="wa-linha wa-apagado" style="display:block" data-t="wa-aus-horario"><b>Horário</b><br><span class="wa-cinza">Enviar sempre · Horário programado · Fora do horário de atendimento</span></div>' +
        '<div class="wa-linha wa-apagado" style="display:block"><b>Destinatários</b><br><span class="wa-cinza">Enviar para todos</span></div>' +
        '<p class="wa-nota">As mensagens de ausência só serão enviadas quando seu celular estiver conectado à internet.</p></div>';
    },
    respostas: function () {
      return topo('Respostas rápidas', '', 'm:ferramentas') + '<div class="wa-rolar"><p class="wa-sec forte">Suas respostas</p><p class="wa-txtc">Crie e salve respostas para usar com facilidade</p><div data-t="wa-rr-salvas">' +
        S.rr.map(function (r) { return '<div class="wa-linha" style="display:block"><b>' + esc(r.a) + '</b><br><span class="wa-cinza">' + esc(r.t) + '</span></div>' }).join('') + '</div></div>' +
        '<button class="wa-fab" style="bottom:16px" data-wa="m:rrnova" data-t="wa-rr-nova" title="Criar nova resposta rápida">＋</button>';
    },
    rrnova: function () {
      return topo('Adicionar resposta rápida', '<button class="wa-txt" data-wa="rr:salvar" data-t="wa-rr-salvar">SALVAR</button>', 'm:respostas') + '<div class="wa-rolar" style="padding:8px 16px">' +
        '<input class="wa-campo-txt" id="waRrAtalho" placeholder="Atalho" maxlength="25" value="' + esc(S.F.rrA || '') + '" data-t="wa-rr-atalho"/><p class="wa-nota" style="margin:4px 0 18px">Insira uma palavra que localize rapidamente essa resposta</p>' +
        '<textarea class="wa-campo-txt" id="waRrTexto" rows="3" placeholder="Mensagem da resposta" data-t="wa-rr-texto">' + esc(S.F.rrT || '') + '</textarea><p class="wa-nota" style="margin:4px 0">Insira texto ou adicione uma mídia</p></div>';
    },

    /* --- listas e transmissão (aula 06) --- */
    listas: function () {
      return topo('Listas', '✎', 'm:ferramentas') + '<div class="wa-rolar"><p class="wa-txtc" style="text-align:center">Dê destaque ao que mais importa.<br>Envie e compartilhe conteúdo com facilidade no WhatsApp.</p>' +
        '<button class="wa-item" data-wa="m:listaaviso" data-t="wa-criar-lista"><i>＋</i><span><b>Criar lista personalizada</b></span></button><p class="wa-sec forte">Suas listas</p>' +
        '<p class="wa-linha"><span>Não lidas<br><small class="wa-cinza">Padrão</small></span></p><p class="wa-linha"><span>Favoritos<br><small class="wa-cinza">Adicionar pessoas ou grupos</small></span></p><p class="wa-linha"><span>Grupos<br><small class="wa-cinza">Padrão</small></span></p>' +
        S.listas.map(function (l) { return '<button class="wa-item" data-wa="lista:' + esc(l.n) + '" data-t="wa-lista-criada"><span><b>' + esc(l.n) + '</b><small>' + l.membros.length + ' na lista</small></span></button>' }).join('') + '</div>';
    },
    listaaviso: function () {
      return M.listas() + folha('<p class="wa-folha-tit">As etiquetas agora são as Listas</p><p class="wa-linha">✅ Com as listas, fica ainda mais fácil organizar suas conversas.</p><p class="wa-linha">🏷️ Suas etiquetas continuarão as mesmas na seção Listas.</p><p class="wa-linha">✎ Você pode editar suas listas quando quiser em Ferramentas.</p><button class="wa-bt" data-wa="m:listanova" data-t="wa-listas-continuar">CONTINUAR</button>', 'wa-folha-listas');
    },
    listanova: function () {
      var n = S.F.listaNome || '';
      return topo('Nova lista', '', 'm:listas') + '<div class="wa-rolar" style="padding:8px 16px"><input class="wa-campo-txt" id="waListaNome" placeholder="Exemplo: lead qualificado, pedido" value="' + esc(n) + '" data-t="wa-lista-nome"/>' +
        '<p class="wa-nota" style="margin:6px 0 14px">As listas que você cria viram um filtro na parte de cima da aba Conversas.</p><p class="wa-sec" style="margin:0 0 6px">Sugestões</p><div data-t="wa-lista-sug">' +
        LISTA_SUG.map(function (s) { return '<button class="wa-linha wa-sug" data-wa="sug:' + s + '">🏷️ ' + s + '</button>' }).join('') + '</div></div>' +
        '<button class="wa-bt" data-wa="lista:pessoas" data-t="wa-lista-pessoas">ADICIONAR PESSOAS OU GRUPOS</button>';
    },
    listapessoas: function () {
      var sel = S.F.listaMembros || [];
      return topo('Adicionar à lista', '🔍', 'm:listanova') + '<div class="wa-rolar"><p class="wa-txtc">Adicione quantas pessoas e quantos grupos você quiser. Só você pode ver quem está incluído nas suas listas.</p><p class="wa-sec">Contatos frequentes</p>' +
        '<label class="wa-prod-linha" data-t="wa-lista-bia"><input type="checkbox" data-membro="Bia"' + (sel.indexOf('Bia') >= 0 ? ' checked' : '') + '/><span class="wa-av">B</span><span><b>Bia (cliente)</b></span></label></div>' +
        '<button class="wa-fab" style="bottom:16px" data-wa="lista:ok" data-t="wa-lista-ok" title="OK">✓</button>';
    },
    listadetalhe: function () {
      var l = S.listas.filter(function (x) { return x.n === S.F.lista })[0] || { n: '', membros: [] };
      return topo(esc(l.n), '<button class="wa-ic" data-wa="m:listamenu" data-t="wa-lista-menu" aria-label="Mais opções">⋮</button>', 'm:listas') + '<div class="wa-rolar"><p class="wa-sec forte">Na lista</p><p class="wa-linha">＋ Adicionar pessoas ou grupos</p>' +
        l.membros.map(function (m) { return '<p class="wa-linha"><span class="wa-av">B</span>' + esc(m) + ' (cliente)</p>' }).join('') + '</div>';
    },
    listamenu: function () { return M.listadetalhe() + '<div class="wa-menu"><button>Editar</button><button>Apagar</button><button data-wa="m:transm" data-t="wa-transmissao">Enviar transmissão comercial</button></div>' },
    transm: function () {
      return M.listadetalhe() + folha('<p class="wa-folha-tit">Mais jeitos de se conectar com as listas de transmissão comercial</p><p class="wa-txtc" style="text-align:center">Envie transmissões para alcançar seus clientes diretamente nas conversas. <span class="wa-link">Saiba mais</span></p>' +
        '<p class="wa-linha">🕘 Programe e envie mensagens no momento certo.</p><p class="wa-linha">📈 Acompanhe o desempenho para otimizar os resultados.</p><p class="wa-linha" data-t="wa-transm-preco">💲 Pague o mesmo preço por cada mensagem entregue.</p>' +
        '<p class="wa-nota" style="text-align:center">Ao continuar, você concorda com os Termos da Meta para Listas de Transmissão Comercial do WhatsApp e a Política de Privacidade da Meta.</p>' +
        '<button class="wa-bt" data-wa="x:pago" data-t="wa-transm-continuar">CONTINUAR</button>', 'wa-folha-transm');
    },

    /* --- anúncio pelo app (aula 07): até "Pagar e criar anúncio" --- */
    an1: function () {
      var v = S.F.anObj || '';
      return topo('Meta', '', 'm:ferramentas') + '<div class="wa-rolar" style="padding:0 6px"><p class="wa-folha-tit" style="text-align:left;margin:30px 12px 14px">O que você quer que as pessoas façam quando virem seu anúncio?</p><div data-t="wa-an-objetivo">' +
        '<label class="wa-op"><input type="radio" name="waobj" value="site"' + (v === 'site' ? ' checked' : '') + '/> <span><b>Visitem seu site</b><small>Gere mais vendas, aumente suas reservas e mostre às pessoas o que sua empresa tem a oferecer.</small><small>https://' + esc(S.p.site) + '</small></span></label>' +
        '<label class="wa-op"><input type="radio" name="waobj" value="msg"' + (v === 'msg' ? ' checked' : '') + '/> <span><b>Enviem uma mensagem para você</b><small>Responda a perguntas, conclua pedidos e interaja de diversas formas com clientes em potencial.</small></span></label></div></div>' +
        '<button class="wa-bt" data-wa="an:1" data-t="wa-an-avancar1">Avançar</button>';
    },
    an2: function () {
      return M.an1() + folha('<p class="wa-folha-tit">Marina Exemplo</p><p class="wa-link" style="text-align:center">Não é você?</p><p class="wa-txtc" style="text-align:center"><b>Confirme sua conta do Facebook para continuar</b><br>Essas informações serão usadas para manter seus dados de pagamento seguros. <span class="wa-link">Saiba mais</span></p>' +
        '<button class="wa-bt" data-wa="x:entrarfb">ENTRAR COMO MARINA EXEMPLO</button><button class="wa-txt" style="display:block;margin:0 auto 10px" data-wa="an:2" data-t="wa-an-pular">PULAR</button>', 'wa-an-facebook');
    },
    an3: function () {
      return topo('Criar anúncio', '❔', 'm:an1') + '<div class="wa-rolar"><p class="wa-folha-tit" style="text-align:left;margin:10px 16px 2px">Promova sua empresa</p><p class="wa-txtc">Anúncios com boas descrições podem atrair mais clientes.</p>' +
        '<div class="wa-anprev" data-t="wa-an-previa"><p class="wa-linha"><span class="wa-av">🏪</span><span><b>' + esc(S.p.nome) + '</b><br><small class="wa-cinza">Patrocinado</small></span></p><div class="wa-capa" style="margin:0;height:170px"></div></div>' +
        '<p class="wa-nota">O nome e a foto ou o vídeo da sua empresa serão compartilhados com a Meta para criar seu anúncio.</p></div><button class="wa-bt" data-wa="an:3" data-t="wa-an-avancar3">Avançar</button>';
    },
    an4: function () {
      return topo('Público', '', 'm:an3') + '<div class="wa-rolar"><p class="wa-folha-tit" style="text-align:left;margin:10px 16px">Escolha para quem o anúncio será exibido</p><div data-t="wa-an-publico">' +
        '<p class="wa-linha" style="display:block"><b>Público sugerido</b><br><small class="wa-cinza">Usa o público Advantage+ para encontrar pessoas que têm mais chance de interagir com seu anúncio.</small><br>Localização: Brasil<br>Idade mínima: 18, desconhecida<br>Público Advantage+: Ativado <span class="wa-link">Editar</span></p>' +
        '<p class="wa-linha">＋ Criar público</p></div><p class="wa-sec forte">Requisitos especiais</p><p class="wa-linha" data-t="wa-an-especiais">☐ Seu anúncio trata de produtos e serviços financeiros, emprego, moradia, temas sociais, eleições ou política?</p>' +
        '<p class="wa-linha">Estimativa de impressões diárias <span class="wa-dir">42 mil a 78 mil</span></p></div><button class="wa-bt" data-wa="an:4" data-t="wa-an-avancar4">Avançar</button>';
    },
    an5: function () {
      return topo('Definir orçamento', '', 'm:an4') + '<div class="wa-rolar"><p class="wa-folha-tit" style="text-align:left;margin:10px 16px 2px">Qual é seu orçamento para o anúncio?</p><p class="wa-txtc">O orçamento e a duração afetam o alcance do anúncio.</p>' +
        '<div data-t="wa-an-orcamento"><p class="wa-linha" style="display:block"><b>Orçamento diário</b><br><span class="wa-pixval" style="font-size:22px">R$25</span> ✎<br><span class="wa-cinza">R$5,40 ━━●━━━━ R$5.078</span><br><small>💡 Seu orçamento está na faixa recomendada.</small></p>' +
        '<p class="wa-sec forte">Duração</p><label class="wa-op"><input type="radio" checked name="wadur"/> <span>Veicular este anúncio até eu pausá-lo<span class="sel">Recomendado</span></span></label><label class="wa-op"><input type="radio" name="wadur"/> Veicular o anúncio por um tempo definido</label></div></div>' +
        '<button class="wa-bt" data-wa="an:5" data-t="wa-an-avancar5">Avançar</button>';
    },
    an6: function () {
      return topo('Configurações de anúncios', '', 'm:an5') + '<div class="wa-rolar"><p class="wa-folha-tit" style="text-align:left;margin:10px 16px 2px">Seu anúncio está pronto</p><p class="wa-txtc">Confira se está tudo certo e adicione uma forma de pagamento.</p>' +
        '<p class="wa-linha">Meta · Mensagens</p><p class="wa-linha">Prévia do anúncio · ' + esc(S.p.nome) + '</p><p class="wa-linha">Público · Brasil · 18+ · Advantage+</p><p class="wa-linha">Orçamento · R$25 por dia</p>' +
        '<p class="wa-linha" data-t="wa-an-pagamento">💳 Adicionar forma de pagamento<br></p><p class="wa-linha">Estimativa de impressões diárias <span class="wa-dir">42 mil a 78 mil</span></p></div>' +
        '<button class="wa-bt" data-wa="x:pago" data-t="wa-an-pagar">Pagar e criar anúncio</button><p class="wa-nota" style="text-align:center">Ao criar este anúncio, você concorda com os Termos e Condições da Meta.</p>';
    },

    /* --- IA (aula 08) --- */
    assistente: function () {
      return '<div class="wa-topo"><button class="wa-ic" data-wa="m:conversas">←</button><span class="wa-av" style="background:#EDE4FF">✳</span><span><b>Assistente para empresas</b><br><small class="wa-cinza">da Meta AI</small></span><span class="wa-dir">⋮</span></div>' +
        '<div class="wa-chat" style="background:#fff"><p class="wa-nome" style="margin-top:60px" data-t="wa-ia-ola">Boa noite, Lojinha</p></div>' +
        '<div class="wa-escrever"><input class="wa-entrada" placeholder="Mensagem" data-wa="m:iatermos" data-t="wa-ia-entrada" readonly/></div>';
    },
    iatermos: function () {
      return M.assistente() + folha('<p class="wa-folha-tit">Pergunte ao assistente da Meta AI para empresas</p><p class="wa-linha">🕘 <span><b>Assistência 24 horas por dia</b><br><small class="wa-cinza">Receba recomendações, insights personalizados e aprenda coisas novas para expandir sua empresa.</small></span></p>' +
        '<p class="wa-linha">✅ <span><b>Aumente sua produtividade</b><br><small class="wa-cinza">A IA ajuda a manter a organização para que você possa usar seu tempo fazendo o que é importante.</small></span></p>' +
        '<p class="wa-linha">🎨 <span><b>Use a criatividade para sua empresa</b><br><small class="wa-cinza">Gere imagens e conteúdo únicos para preencher seu catálogo, criar anúncios e atualizar seu status.</small></span></p>' +
        '<p class="wa-nota" data-t="wa-ia-termos">O assistente da Meta AI para empresas é um serviço opcional. Ao usar o assistente da Meta AI para empresas, você concorda com os Termos das IAs da Meta e seu uso está sujeito à Política de Privacidade da Meta. Suas interações com as IAs podem ser usadas para melhorar a IA na Meta.</p>' +
        '<button class="wa-bt" data-wa="x:termos">OK</button>', 'wa-folha-ia');
    },
    metaone: function () {
      var P = { Essencial: ['500', '', ''], 'Avançado': ['2.500', '6', '1 vez por mês'], Expert: ['8.500', '8', '5 vezes por mês'], Max: ['30.000', '10', 'ilimitado'] }, a = S.F.plano || 'Essencial', x = P[a];
      return '<div class="wa-topo"><button class="wa-ic" data-wa="m:ferramentas">✕</button>' + Object.keys(P).map(function (k) { return '<button class="wa-aba-plano' + (k === a ? ' on' : '') + '" data-wa="plano:' + k + '" data-t="wa-plano-' + k.toLowerCase().replace('ç', 'c') + '">' + k + '</button>' }).join('') + '</div>' +
        '<div class="wa-rolar" data-t="wa-metaone-plano"><p class="wa-folha-tit" style="margin:18px 16px">Experimente o Meta One ' + a + ' grátis por uma semana</p>' +
        '<p class="wa-linha">🤖 <span><b>Agente de IA</b><br><small class="wa-cinza">Um agente de IA que responde aos clientes em até ' + x[0] + ' conversas por mês, mesmo quando você não está.</small></span></p>' +
        (a === 'Essencial' ? '<p class="wa-linha">🎨 <span><b>Tenha acesso aos recursos do WhatsApp Plus</b><br><small class="wa-cinza">Temas personalizados, figurinhas exclusivas e muito mais.</small></span></p><p class="wa-linha">🔗 <span><b>URL da web personalizado</b></span></p>' :
          '<p class="wa-linha">📱 <span><b>Conecte ' + x[1] + ' dispositivos</b></span></p><p class="wa-linha">🧑‍💼 <span><b>Suporte dedicado ' + x[2] + '</b></span></p>') +
        '<p class="wa-nota">Os preços não carregaram quando a tela real foi vista; neste treino nada é assinado.</p></div><button class="wa-bt" data-wa="x:pago">Carregando...</button>';
    },

    /* --- Instagram e Facebook (aula 09) --- */
    conectar: function () {
      return topo('Conectar', '⋮', 'm:ferramentas') + '<div class="wa-rolar"><p class="wa-txtc">Permita que os clientes iniciem conversas no WhatsApp a partir do Facebook e do Instagram <span class="wa-link">Saiba mais</span></p><div data-t="wa-conectar-lista">' +
        '<div class="wa-dia2"><span>📸 Instagram<small>' + esc(S.p.user) + '</small></span><span class="wa-cinza">conectado</span></div>' +
        '<div class="wa-dia2"><span>ⓕ Facebook</span><button class="wa-txt" data-wa="x:conectarfb" data-t="wa-conectar-fb">CONECTAR</button></div></div>' +
        '<p class="wa-nota">Conecte ativos de negócios para ter acesso a mais recursos profissionais. Usaremos as informações… <span class="wa-link">Sobre os ativos conectados.</span></p></div>';
    }
  };

  /* ---------- o perfil como a cliente vê (igual à Prévia) ---------- */
  function horaHoje() {   // como a Prévia real: dia de hoje aberto = "Aberta agora · Aberta 24 horas"; fechado = "<dia> · Fechada"
    var p = S.p, h = p.horario, hoje = new Date().getDay();
    if (h === 'sempre') return p.dias[hoje] ? '<span class="wa-verde">Aberta agora</span><span class="wa-dir">Aberta 24 horas ⌄</span>' : '<span>' + DIAS[hoje] + '</span><span class="wa-dir">Fechada ⌄</span>';
    if (h === 'marcada') return '<span>Somente com hora marcada</span>';
    return '<span class="wa-cinza">Sem horário de atendimento</span>';
  }
  function perfilVisto(voce) {   // ordem conferida na Prévia real (26/10/2026)
    var p = S.p;
    return '<div data-t="' + (voce ? 'wa-previa-tela' : 'wa-cli-perfil') + '"><div class="wa-capa"><span class="wa-foto">🏪</span></div>' +
      '<p class="wa-nome">' + esc(p.nome) + (voce ? ' (Você)' : '') + '</p><p class="wa-user">@' + esc(p.user) + '</p>' +
      '<div class="wa-botoes"><span>💬<small>Conversar</small></span><span>🏪<small>Catálogo</small></span><span>↪<small>Compartilhar</small></span></div>' +
      '<div class="wa-banda"></div><p class="wa-linha">📋 Adicionar às listas</p><p class="wa-linha">📝 Adicionar notas</p><div class="wa-banda"></div>' +
      '<p class="wa-sec">Produtos <span class="wa-dir">MOSTRAR TUDO ›</span></p><div class="wa-prods">' + visiveis().slice(0, 3).map(function (i) { return img(i, '') }).join('') + '</div><div class="wa-banda"></div>' +
      '<p class="wa-linha">📞 <span>+55 11 90000-0000</span></p>' +
      '<p class="wa-linha" data-t="' + (voce ? 'wa-prev-hor' : 'wa-cli-hor') + '">🕘 ' + horaHoje() + '</p>' +
      '<p class="wa-linha" data-t="' + (voce ? 'wa-prev-cat' : 'wa-cli-cat') + '">🔷 <span>' + esc(p.cats.join(', ')) + '</span></p><p class="wa-linha">🏪 <span>' + esc(p.desc) + '</span></p><p class="wa-linha link">🌐 <span>https://' + esc(p.site) + '</span></p>' +
      '<div class="wa-banda"></div><p class="wa-linha">Empresa cadastrada há um mês</p></div>';
  }

  /* ---------- celular da cliente (WhatsApp comum) ---------- */
  var C = {
    conversa: function () {
      return '<div class="wa-topo"><span class="wa-av">🏪</span><button class="wa-cab-conv" data-wa="c:perfil" data-t="wa-cli-cab"><b>' + esc(S.p.nome) + '</b><small>Conta comercial</small></button><span class="wa-dir"><button class="wa-ic" data-wa="c:catalogo" data-t="wa-cli-catalogo-bt" title="Mostrar catálogo">🏪</button> 📞 ⋮</span></div>' +
        conversa('c') + '<div class="wa-escrever" data-t="wa-c-entrada"><input id="waMsgC" class="wa-entrada" placeholder="Mensagem" value="' + esc(S.F.textoC || '') + '" autocomplete="off"/><button class="wa-ic" data-wa="c:enviar" data-t="wa-c-enviar" aria-label="Enviar">➤</button></div>';
    },
    perfil: function () { return topo('', '⋮', 'c:conversa') + '<div class="wa-rolar">' + perfilVisto(false) + '</div>' },
    catalogo: function () {
      var carr = !S.cat.semCarrinho, n = Object.keys(S.car).reduce(function (a, k) { return a + S.car[k] }, 0);
      function linha(i) { var q = S.car[i.id] || 0; return '<div class="wa-prod-linha">' + img(i) + '<span><b>' + esc(i.nome) + '</b>' + preco(i) + '</span>' + (carr ? '<button class="wa-mais" data-wa="car:+' + i.id + '" data-t="wa-cli-add-' + i.id + '" aria-label="Adicionar ao carrinho">' + (q ? q : '＋') + '</button>' : '') + '</div>' }
      return topo('Catálogo', (carr ? '<button class="wa-ic" data-wa="c:carrinho" data-t="wa-cli-carrinho" aria-label="Carrinho">🛒' + (n ? '<sup>' + n + '</sup>' : '') + '</button>' : '') + ' 🔗', 'c:conversa') + '<div class="wa-rolar" data-t="wa-cli-catalogo">' + capaCat(true) +
        S.cat.cols.map(function (c) { var it = c.itens.map(itemPor).filter(function (i) { return i && !i.oculto }); return '<p class="wa-sec forte" data-t="wa-cli-colecao">' + esc(c.nome) + '<span class="wa-dir"><span class="wa-mostrar">Mostrar tudo</span></span></p>' + it.map(linha).join('') }).join('') +
        '<p class="wa-sec forte">Todos os itens</p><div data-t="wa-cli-todos">' + visiveis().map(linha).join('') + '</div></div>';
    },
    carrinho: function () {
      var ids = Object.keys(S.car).filter(function (k) { return S.car[k] > 0 }), sub = 0, eco = 0, n = 0;
      ids.forEach(function (k) { var i = itemPor(k); sub += i.preco * S.car[k]; n += S.car[k]; if (i.de) eco += (i.de - i.preco) * S.car[k] });
      return C.catalogo() + folha('<p class="wa-folha-tit">Seu pedido</p><p class="wa-linha">' + n + (n === 1 ? ' item' : ' itens') + ' <span class="wa-dir wa-link" data-wa="c:catalogo">CONTINUAR COMPRANDO</span></p><div data-t="wa-cli-car-itens">' +
        ids.map(function (k) { var i = itemPor(k); return '<div class="wa-prod-linha">' + img(i) + '<span><b>' + esc(i.nome) + '</b><span class="wa-qtd"><button data-wa="car:-' + k + '">−</button>' + S.car[k] + '<button data-wa="car:+' + k + '">+</button></span></span><span class="wa-dir">' + preco(i) + '</span></div>' }).join('') + '</div>' +
        (eco ? '<p class="wa-linha">Você economiza <span class="wa-dir">' + rs(eco) + '</span></p>' : '') + '<p class="wa-linha"><b>Subtotal</b><span class="wa-dir"><b>' + rs(sub) + '</b></span></p>' +
        '<p class="wa-nota">Ao continuar, você concorda em compartilhar seu carrinho, nome e número de telefone com a ' + esc(S.p.nome) + '.</p>' +
        '<button class="wa-bt" data-wa="car:enviar" data-t="wa-cli-enviar-pedido"' + (n ? '' : ' disabled') + '>ENVIAR PEDIDO</button>', 'wa-cli-folha-carrinho');
    },
    pagarpix: function () {
      return topo('Pagar com Pix', '', 'c:conversa') + '<div class="wa-rolar"><div class="wa-busca">🔍 Procure seu banco</div><p class="wa-sec">Bancos mais usados</p><div class="wa-bancos" data-t="wa-cli-bancos"><span>🏦<small>Nubank</small></span><span>🏦<small>Caixa</small></span><span>🏦<small>Santander</small></span><span>🏦<small>Itaú</small></span></div>' +
        '<p class="wa-linha">99Pay</p><p class="wa-linha">Accredito</p><p class="wa-linha">Agi</p></div><button class="wa-bt" data-wa="x:banco">SELECIONE O APP DO BANCO</button><button class="wa-txt" style="display:block;margin:0 auto 12px" data-wa="x:copiarpix" data-t="wa-cli-copiar-pix">Copiar código Pix</button>';
    }
  };

  /* ---------- desenhar ---------- */
  // moldura do Android, igual à do módulo de WhatsApp (28/10/2026): barra de status em cima e botões do sistema embaixo
  function celular(tela, inicio) {
    return '<div class="wa-barra"><span>9:41</span><span>📶 🔋</span></div><div class="wa-tela">' + tela + '</div>' +
      '<div class="wa-sisnav"><button data-wanav="volta" aria-label="Voltar">◀</button><button data-wa="' + inicio + '" aria-label="Tela inicial">●</button><button data-wanav="recentes" aria-label="Apps recentes">■</button></div>';
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-wanav]'); if (!b) return;
    if (b.getAttribute('data-wanav') === 'recentes') return toast('Apps recentes: fica de fora deste treino.');
    var cel = b.closest('.wa-cel'), alvo = cel && (cel.querySelector('.wa-veu[data-wa], [data-wa="folha:fechar"]') || cel.querySelector('.wa-topo [data-wa]'));
    if (alvo) alvo.click();
  });
  function render() {
    var foco = document.activeElement && document.activeElement.id, pos = foco && document.activeElement.selectionStart;
    var rol = {}; [].forEach.call(document.querySelectorAll('.wa-cel'), function (c) { var r = c.querySelector('.wa-rolar, .wa-chat'); if (r) rol[c.getAttribute('data-t')] = [c.getAttribute('data-tela'), r.scrollTop] });
    $('#app').innerHTML = '<div class="sim-faixa">🧪 Simulador de treinamento do WhatsApp · nada aqui vai para o WhatsApp · <a href="simuladores.html">← voltar à plataforma</a></div>' +
      '<div class="wa-palco"><section class="wa-lado"><h2>📱 Celular da Marina <small>WhatsApp Business</small></h2><div class="wa-cel" data-t="wa-cel-marina" data-tela="' + S.m + '">' + celular((M[S.m] || M.conversas)(), 'm:conversas') + '</div></section>' +
      '<section class="wa-lado"><h2>📱 Celular da cliente <small>WhatsApp</small></h2><div class="wa-cel cli" data-t="wa-cel-cliente" data-tela="' + S.c + '">' + celular((C[S.c] || C.conversa)(), 'c:conversa') + '</div></section></div>' +
      '<p class="conferido wa-conf">✓ Telas do app conferidas em ' + CONF + ' (temas escuro e claro) · o que avisa “a conferir” ainda não foi visto · nada é pago nem enviado de verdade</p>' +
      '<div class="wa-toast" id="waToast" hidden></div>';
    [].forEach.call(document.querySelectorAll('.wa-cel'), function (c) { var k = rol[c.getAttribute('data-t')], r = c.querySelector('.wa-rolar, .wa-chat'); if (!r) return; if (k && k[0] === c.getAttribute('data-tela')) r.scrollTop = k[1]; else if (r.classList.contains('wa-chat')) r.scrollTop = r.scrollHeight });
    if (foco && document.getElementById(foco)) { var el = document.getElementById(foco); el.focus(); try { if (pos != null) el.setSelectionRange(pos, pos) } catch (e) { } }
  }
  // tutorial: se o alvo do passo está escondido dentro da tela rolável do celular, rola só a tela de dentro até ele
  function mostraAlvo() {
    try {
      var st = JSON.parse(sessionStorage.getItem('tour.ativo') || 'null'); if (!st || !window.TOURS || !TOURS[st.nome]) return;
      var p = TOURS[st.nome][st.passo], el = p && typeof p.alvo === 'string' && document.querySelector(p.alvo), rol = el && el.closest('.wa-rolar, .wa-chat');
      if (!rol || rol === el) return; var a = el.getBoundingClientRect(), b = rol.getBoundingClientRect();
      if (a.top < b.top || a.bottom > b.bottom) rol.scrollTop += a.top - b.top - 12;
    } catch (e) { }
  }
  setInterval(mostraAlvo, 400);
  function toast(t) { var e = $('#waToast'); if (!e) return; e.textContent = t; e.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(function () { e.hidden = true }, 3200) }
  var FORM = ['categoria', 'horario', 'dias', 'faixa', 'colnome', 'colitens', 'catenvio', 'pix', 'status', 'rrnova', 'listanova', 'listapessoas', 'an1', 'an2', 'an3', 'an4', 'an5', 'an6', 'conv', 'anexo', 'convmenu', 'item', 'itemmenu', 'listadetalhe', 'listamenu', 'transm', 'metaone', 'saudacao', 'catalogo', 'catmenu'];
  function vai(lado, tela) { if (lado === 'm') { if (FORM.indexOf(tela) < 0) { var f = S.F.filtro; S.F = {}; if (f) S.F.filtro = f } S.m = tela } else S.c = tela; grava(); render() }
  var AVISOS = {
    'x:depois': 'Fica de fora deste módulo.', 'x:conferir': 'Esta tela ainda não foi conferida no app real: fica de fora por enquanto.',
    'x:guia': 'Guia de negócios: “Adicione seu perfil ao guia para que os clientes descubram sua empresa”. Não seguimos: deixaria a empresa pública.',
    'x:compartilhar': 'Compartilhar link curto via… (folha do celular). O link curto é criado sozinho.',
    'x:form': 'Formulários: “Usar um modelo” (Dados do cliente) e “Gerar formulário automaticamente”. Fica para depois neste simulador.',
    'x:cobranca': 'Cobrança avulsa: neste treino a cobrança nasce do pedido aceito.', 'x:apagar': 'Apagar tira o item de vez. Neste treino, use Ocultar.',
    'x:ausencia': 'A ausência fica desligada neste treino: com ela ligada, toda mensagem recebe a resposta automática.',
    'x:pago': '⛔ Aqui começaria um pagamento ou uma assinatura. O simulador para antes, como na tela real vista.',
    'x:entrarfb': 'Neste treino usamos PULAR (anúncio sem conta do Facebook, com e-mail).',
    'x:termos': 'Aceitar termos é decisão da cliente. O simulador para aqui.',
    'x:conectarfb': 'Na tela real, CONECTAR abre o login do Facebook. Não foi conferido: o simulador para aqui.',
    'x:banco': 'O pagamento acontece no app do banco, fora do WhatsApp. Nada é pago neste treino.',
    'x:copiarpix': 'Código Pix copiado (de mentira). A cliente cola no app do banco.'
  };

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-wa]'); if (!b || b.disabled) return; var a = b.getAttribute('data-wa');
    if (AVISOS[a]) return toast(AVISOS[a]);
    if (a === 'folha:fechar') { if (S.m === 'an2' || S.m === 'pix' || S.m === 'colnome' || S.m === 'listaaviso' || S.m === 'transm' || S.m === 'iatermos') { S.m = { an2: 'an1', pix: 'conv', colnome: 'colecoes', listaaviso: 'listas', transm: 'listadetalhe', iatermos: 'assistente' }[S.m]; grava(); return render() } if (S.c === 'carrinho') return vai('c', 'catalogo'); return }
    if (a === 'm:enviar') { var t = (S.F.texto || '').trim(); if (!t) return; manda({ de: 'loja', t: 'txt', x: t }); S.F.texto = ''; S.F.barra = false; grava(); return render() }
    if (a === 'c:enviar') { var tc = (S.F.textoC || '').trim(); if (!tc) return; var nova = primeiraDaCliente(); manda({ de: 'cli', t: 'txt', x: tc }); S.F.textoC = ''; if (nova && S.saud.on) manda({ de: 'loja', t: 'txt', x: S.saud.texto, auto: 1 }); grava(); return render() }
    if (a.indexOf('m:') === 0) return vai('m', a.slice(2));
    if (a.indexOf('c:') === 0) return vai('c', a.slice(2));
    if (a.indexOf('filtro:') === 0) { S.F.filtro = a.slice(7); grava(); return render() }
    if (a === 'cat:salvar') { var c = S.F.cats || S.p.cats; if (!c.length) return toast('Escolha pelo menos 1 categoria.'); S.p.cats = c.slice(0, 3); S.F = {}; S.m = 'perfil'; grava(); return render() }
    if (a === 'hor:avancar') { var h = S.F.hor || S.p.horario; if (!h) return toast('Escolha uma opção.'); if (h !== 'sempre') return toast('Neste treino só a opção Sempre aberta foi conferida até o fim: escolha Sempre aberta.'); S.F.hor = h; S.F.dias = (S.F.dias || S.p.dias).slice(); S.m = 'dias'; grava(); return render() }
    if (a.indexOf('dia:') === 0) { var i = +a.slice(4), d = (S.F.dias || S.p.dias).slice(); d[i] = !d[i]; S.F.dias = d; grava(); return render() }
    if (a === 'dias:salvar') { S.p.horario = S.F.hor || 'sempre'; S.p.dias = (S.F.dias || S.p.dias).slice(); S.F = {}; S.m = 'perfil'; grava(); return render() }
    if (a === 'faixa:salvar') { if (S.F.faixa != null) S.p.faixa = S.F.faixa; S.F = {}; S.m = 'perfil'; grava(); return render() }
    // catálogo
    if (a.indexOf('item:') === 0 && a !== 'item:ocultar') { S.F.item = a.slice(5); S.m = 'item'; grava(); return render() }
    if (a === 'item:ocultar') { var it = itemPor(S.F.item); if (it) it.oculto = !it.oculto; S.m = 'item'; grava(); render(); return toast(it && it.oculto ? 'Item oculto: os clientes não veem mais no catálogo.' : 'Item visível de novo.') }
    if (a === 'carrinho:alternar') { S.cat.semCarrinho = !S.cat.semCarrinho; grava(); return render() }
    if (a === 'col:avancar') { if (!(S.F.colNome || '').trim()) return toast('Escreva o nome da coleção.'); S.F.colItens = S.F.colItens || []; S.m = 'colitens'; grava(); return render() }
    if (a === 'col:ok') { if (!(S.F.colItens || []).length) return toast('Marque pelo menos 1 item.'); S.cat.cols.push({ nome: S.F.colNome.trim(), itens: S.F.colItens.slice() }); S.F = {}; S.m = 'colecoes'; grava(); render(); return toast('Salvando… Coleção criada.') }
    // conversa
    if (a === 'barra:abrir') { S.F.barra = true; S.m = 'conv'; grava(); return render() }
    if (a.indexOf('rr:') === 0 && /^rr:\d+$/.test(a)) { S.F.texto = S.rr[+a.slice(3)].t; S.F.barra = false; S.m = 'conv'; grava(); return render() }
    if (a === 'envio:ok') { (S.F.envio || []).forEach(function (id) { manda({ de: 'loja', t: 'item', id: id }) }); S.F = {}; S.m = 'conv'; grava(); return render() }
    if (a === 'pix:enviar') {
      var v = String(S.F.pixVal || '').trim();
      if (v.indexOf(',') >= 0) { S.F.pixErro = 'Este campo não aceita vírgula: no app real, 39,90 vira 3990. Use ponto: 39.90'; grava(); return render() }
      var n = v ? parseFloat(v) : 0; if (v && !(n > 0)) { S.F.pixErro = 'Valor inválido.'; grava(); return render() }
      manda({ de: 'loja', t: 'pix', valor: n }); S.F = {}; S.m = 'conv'; grava(); return render();
    }
    if (a === 'pedido:aceitar') { var p = S.ped; if (!p || p.aceito) return; p.aceito = true; S.cobN++; manda({ de: 'loja', t: 'cob', num: '4WJ9G' + ('00' + S.cobN).slice(-3) + 'AULA', nomes: p.nomes, qtd: p.qtd, total: p.total }); S.m = 'conv'; grava(); return render() }
    if (a === 'status:enviar') { if (!S.F.st) return toast('Escolha o status do pedido.'); var pd = S.ped || { nomes: '', qtd: 0, total: 0 }; manda({ de: 'loja', t: 'status', st: S.F.st, recado: S.F.recado || '', nomes: pd.nomes, qtd: pd.qtd, total: pd.total }); var ult = S.F.st; S.F = { ultStatus: ult }; S.m = 'conv'; grava(); return render() }
    // atendimento automático
    if (a === 'saud:alternar') { var f = S.F.saud || JSON.parse(JSON.stringify(S.saud)); f.on = !f.on; S.F.saud = f; grava(); return render() }
    if (a === 'saud:salvar') { if (S.F.saud) S.saud = S.F.saud; S.F = {}; S.m = 'ferramentas'; grava(); render(); return toast(S.saud.on ? 'Mensagem de saudação ligada.' : 'Mensagem de saudação desligada.') }
    if (a === 'rr:salvar') { var at = (S.F.rrA || '').trim(), tx = (S.F.rrT || '').trim(); if (!at || !tx) return toast('Preencha o atalho e a mensagem.'); S.rr.push({ a: at, t: tx }); S.F = {}; S.m = 'respostas'; grava(); return render() }
    // listas
    if (a.indexOf('sug:') === 0) { S.F.listaNome = a.slice(4); grava(); return render() }
    if (a === 'lista:pessoas') { if (!(S.F.listaNome || '').trim()) return toast('Dê um nome à lista.'); S.F.listaMembros = S.F.listaMembros || []; S.m = 'listapessoas'; grava(); return render() }
    if (a === 'lista:ok') { var nome = S.F.listaNome.trim(); S.listas = S.listas.filter(function (l) { return l.n !== nome }); S.listas.push({ n: nome, membros: (S.F.listaMembros || []).slice() }); S.F = { filtro: nome }; S.m = 'conversas'; grava(); return render() }
    if (a.indexOf('lista:') === 0) { S.F.lista = a.slice(6); S.m = 'listadetalhe'; grava(); return render() }
    // anúncio
    if (a === 'an:1') { if (!S.F.anObj) return toast('Escolha o que as pessoas devem fazer.'); S.m = S.F.anObj === 'msg' ? 'an2' : 'an3'; grava(); return render() }
    if (a.indexOf('an:') === 0) { S.m = 'an' + (+a.slice(3) + 1); grava(); return render() }
    if (a.indexOf('plano:') === 0) { S.F.plano = a.slice(6); grava(); return render() }
    // cliente
    if (a.indexOf('car:+') === 0) { var id = a.slice(5); S.car[id] = (S.car[id] || 0) + 1; grava(); return render() }
    if (a.indexOf('car:-') === 0) { var id2 = a.slice(5); S.car[id2] = Math.max(0, (S.car[id2] || 0) - 1); if (!S.car[id2]) delete S.car[id2]; grava(); return render() }
    if (a === 'car:enviar') {
      var ks = Object.keys(S.car).filter(function (k) { return S.car[k] > 0 }); if (!ks.length) return;
      var tot = 0, q = 0, nomes = [], itens = {}; ks.forEach(function (k) { var x = itemPor(k); tot += x.preco * S.car[k]; q += S.car[k]; nomes.push(x.nome); itens[k] = S.car[k] });
      var primeira = primeiraDaCliente();
      S.ped = { itens: itens, total: Math.round(tot * 100) / 100, qtd: q, nomes: nomes.join(', '), aceito: false };
      manda({ de: 'cli', t: 'pedido', qtd: q, total: S.ped.total }); if (primeira && S.saud.on) manda({ de: 'loja', t: 'txt', x: S.saud.texto, auto: 1 });
      S.car = {}; S.c = 'conversa'; grava(); return render();
    }
  });
  document.addEventListener('input', function (e) {
    var t = e.target, mapa = { waMsg: 'texto', waMsgC: 'textoC', waColNome: 'colNome', waPixVal: 'pixVal', waRecado: 'recado', waRrAtalho: 'rrA', waRrTexto: 'rrT', waListaNome: 'listaNome' };
    if (!mapa[t.id]) return; S.F[mapa[t.id]] = t.value; if (t.id === 'waPixVal') S.F.pixErro = '';
    if (t.id === 'waMsg') { var abre = t.value === '/'; if (abre !== !!S.F.barra) { S.F.barra = abre; grava(); return render() } }
    grava();
  });
  document.addEventListener('keydown', function (e) { if (e.key !== 'Enter') return; if (e.target.id === 'waMsg') { e.preventDefault(); $('[data-wa="m:enviar"]').click() } if (e.target.id === 'waMsgC') { e.preventDefault(); $('[data-wa="c:enviar"]').click() } });
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.hasAttribute('data-cat')) {
      var c = (S.F.cats || S.p.cats).slice(), n = t.getAttribute('data-cat'), i = c.indexOf(n);
      if (t.checked && i < 0) { if (c.length >= 3) { t.checked = false; return toast('No máximo 3 categorias.') } c.push(n) } else if (!t.checked && i >= 0) c.splice(i, 1);
      S.F.cats = c; grava(); return;
    }
    function marca(k, v) { var l = (S.F[k] || []).slice(), j = l.indexOf(v); if (t.checked && j < 0) l.push(v); if (!t.checked && j >= 0) l.splice(j, 1); S.F[k] = l; grava(); render() }
    if (t.hasAttribute('data-colitem')) return marca('colItens', t.getAttribute('data-colitem'));
    if (t.hasAttribute('data-envio')) return marca('envio', t.getAttribute('data-envio'));
    if (t.hasAttribute('data-membro')) return marca('listaMembros', t.getAttribute('data-membro'));
    if (t.name === 'wahor') { S.F.hor = t.value; grava() }
    if (t.name === 'wafaixa') { S.F.faixa = t.value; grava() }
    if (t.name === 'wast') { S.F.st = t.value; grava() }
    if (t.name === 'waobj') { S.F.anObj = t.value; grava() }
  });

  window.SIMWA = {
    estado: function () { return S }, render: render, grava: grava, inicial: inicial,
    perfilZerado: function () { S.p = perfilInicial(); S.F = {}; grava() },
    zera: function (o) { var I = inicial(); for (var k in I) S[k] = I[k]; for (var j in (o || {})) S[j] = o[j]; grava(); render() },
    tela: function (lado, tela) { if (lado === 'm') S.m = tela; else S.c = tela; grava(); render() },
    escolhas: function (o) { for (var k in o) S.F[k] = o[k]; grava(); render() },
    perfil: function (o) { for (var k in o) S.p[k] = o[k]; grava(); render() },
    muda: function (fn) { fn(S); grava(); render() }, itemPor: itemPor
  };
  render();
})();
