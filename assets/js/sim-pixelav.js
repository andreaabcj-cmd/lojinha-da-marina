/* Simulador do Pixel avançado: correspondência avançada, qualidade do sinal (correspondência de eventos), API de Conversões e deduplicação, privacidade e regras — visual da Lojinha.
   Estado no navegador (localStorage "sim.pixelav"); nada é enviado à Meta.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Sobre a correspondência avançada na web” (automática × manual, verticais restritas, hash), “Sobre a qualidade da correspondência de eventos” (pontuação de 0 a 10, últimas 48 horas, tabela de parâmetros e prioridades), “Sobre a desduplicação de eventos do Pixel da Meta e da API de Conversões” (event_name + event_id, external_ID/fbp, o primeiro recebido tem preferência), “Requisitos de privacidade e uso de dados para as Ferramentas da Meta para Empresas” (consentimento, informações proibidas, consequências).
   Real (tela, conta de aula, 16/10/2026): a conta NÃO tem conjunto de dados (“Os dados precisam ser conectados antes de você poder ver os conjuntos de dados”), então não deu para ver a tela de correspondência avançada, de qualidade de correspondência de eventos nem de Eventos de teste.
   INVENTADOS para o treino: a conta de aula fictícia, o cálculo da pontuação (a Meta só diz que é de 0 a 10 e depende da qualidade dos parâmetros e da % de eventos com correspondência), os eventos e os botões (a conferir).
   URL: meta-pixelavancado.html?zerar=1
   Tutoriais (tour.js): ?tour=correspondencia-avancada | qualidade-sinal | desduplicar-eventos | privacidade-pixel */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var PARAMS = [['email', 'E-mail', 'Alta', 2], ['click', 'Identificação de clique', 'Alta', 2], ['fblogin', 'Identificação do login do Facebook', 'Média', 0.75], ['dob', 'Data de nascimento', 'Média', 0.75], ['pais', 'País', 'Média', 0.75], ['tel', 'Telefone', 'Média', 0.75], ['ext', 'Identificação externa (ID único do anunciante)', 'Média', 0.75], ['browser', 'Identificação do navegador', 'Média', 0.75], ['cad', 'Cadastro', 'Baixa', 0.3], ['nome', 'Nome', 'Baixa', 0.3], ['sobren', 'Sobrenome', 'Baixa', 0.3], ['cidade', 'Cidade', 'Baixa', 0.3], ['cep', 'Código postal ou CEP', 'Baixa', 0.3]];
  var ITENS = [['hash', 'E-mail do cliente (com hash)', false, ''], ['valor', 'Valor e moeda da compra', false, ''], ['pedido', 'ID do pedido', false, ''], ['saude', 'Condição de saúde do cliente em um parâmetro da URL (?doenca=…)', true, 'Informação de saúde'], ['cartao', 'Número do cartão em um evento personalizado', true, 'Informação financeira'], ['saldo', 'Saldo bancário do cliente em um evento personalizado', true, 'Informação financeira']];
  function inicial() { return { tab: 'corr', tipo: 'loja', iframe: false, auto: false, email: '', hash: '', emq: { email: false, click: false, fblogin: false, dob: false, pais: false, tel: false, ext: false, browser: false, cad: false, nome: false, sobren: false, cidade: false, cep: false }, br: { purchase: true, addtocart: true }, sv: { purchase: true, addtocart: false }, evid: 'diferente', extid: false, priv: { consent: false, ctrlCons: false, itens: { hash: true, valor: true, pedido: true, saude: true, cartao: false, saldo: false } } } }
  var S = ler('sim.pixelav', null) || inicial();
  if (params.get('zerar')) S = inicial();
  function grava() { try { localStorage.setItem('sim.pixelav', JSON.stringify(S)) } catch (e) { } window.__simPa = { S: S } }
  grava();
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento do Pixel avançado · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function nav() {
    var t = [['corr', '🔗 Correspondência avançada'], ['emq', '📶 Qualidade do sinal'], ['dedup', '🔁 API de Conversões e deduplicação'], ['priv', '🔒 Privacidade e regras']];
    return '<nav class="ss-nav">' + t.map(function (x) { return '<button class="ss-it' + (S.tab === x[0] ? ' on' : '') + '" data-tab="' + x[0] + '" data-t="tab-' + x[0] + '">' + x[1] + '</button>' }).join('') + '</nav>';
  }
  function selOpt(id, lista, v, t) { return '<select class="ga-in" id="' + id + '" data-t="' + t + '">' + lista.map(function (o) { return '<option value="' + o[0] + '" data-pt="' + esc(o[1]) + '"' + (o[0] === v ? ' selected' : '') + '>' + o[1] + '</option>' }).join('') + '</select>' }
  function hashSim(s) { var h = 0, i; s = String(s).trim().toLowerCase(); for (i = 0; i < s.length; i++) { h = ((h << 5) - h + s.charCodeAt(i)) | 0 } var x = Math.abs(h).toString(16); while (x.length < 8) x = '0' + x; return x + x.split('').reverse().join('') + x + x.split('').reverse().join('') }
  function restrita() { return S.tipo === 'banco' }
  function autoDisponivel() { return !restrita() && !S.iframe }
  function telaCorr() {
    var disp = autoDisponivel();
    return '<h1>Correspondência avançada</h1><p class="ss-sub">Envie informações de clientes com hash junto com os eventos do Pixel, para atribuir mais conversões e alcançar mais pessoas.</p>' +
      '<div class="ga-aviso">A correspondência avançada pode: <b>aumentar as conversões atribuídas</b>, <b>aumentar o tamanho do público personalizado</b> e <b>diminuir o custo por conversão</b>.</div>' +
      '<p><b>Tipo da empresa</b> ' + selOpt('paTipo', [['loja', 'Loja virtual'], ['banco', 'Banco ou serviço financeiro (vertical restrita)']], S.tipo, 'sel-tipo') + ' <label class="ga-lin"><input type="checkbox" id="paIfr"' + (S.iframe ? ' checked' : '') + ' data-t="chk-iframe"/><span>O Pixel está dentro de um iframe (ou é um Pixel de imagem)</span></label></p>' +
      '<div class="vf-caixa" data-t="box-auto"><b>Correspondência avançada automática</b><p class="miudo">Não precisa de código: ative no Gerenciador de Eventos. O Pixel procura campos de formulário reconhecíveis (nome, sobrenome, e-mail) e converte em hash no navegador do visitante; depois de fazer a correspondência, a Meta descarta o hash.</p>' +
      (disp ? '<label class="ga-lin"><input type="checkbox" id="paAuto"' + (S.auto ? ' checked' : '') + ' data-t="chk-auto-adv"/><span>Ativar a correspondência avançada automática</span></label>' : '<div class="ga-aviso verm" data-t="auto-indisp">Não é possível usar a correspondência avançada automática: ' + (restrita() ? 'a empresa pertence a uma vertical restrita (por exemplo, bancos, empréstimos, serviços financeiros, seguros, produtos farmacêuticos e de saúde).' : 'o Pixel está em um iframe ou é um Pixel de imagem.') + ' Use a correspondência manual.</div>') + '</div>' +
      '<div class="vf-caixa" data-t="box-manual"><b>Correspondência avançada manual</b><p class="miudo">Você ou seu desenvolvedor modificam o código base do Pixel para passar a entrada do visitante (por exemplo, e-mail) na inicialização. O Pixel faz o hash sozinho, exceto se for um Pixel de imagem (nesse caso, você faz o hash). Funciona em iframe, com Pixel de imagem e em qualquer setor.</p>' +
      '<input class="ga-in" id="paEmail" placeholder="e-mail de teste do cliente" value="' + esc(S.email) + '" data-t="in-email"/> <button class="btn" data-acao="hash" data-t="btn-hash"' + (S.email ? '' : ' disabled') + '>Ver o hash enviado (simulado)</button>' + (S.hash ? '<p class="miudo" data-t="res-hash">Enviado à Meta: <code>' + esc(S.hash) + '</code> (hash simulado: o real segue a documentação para desenvolvedores)</p>' : '') + '</div>' +
      '<p class="conferido">✓ Os benefícios, as duas versões (automática e manual), a limitação para verticais restritas, iframe e Pixel de imagem vêm do artigo “Sobre a correspondência avançada na web” (Central de Ajuda, ' + CONF + '). ⚠ A tela é do simulador: a conta de aula não tem conjunto de dados, então não vimos a tela real; o hash mostrado é só ilustração (a conferir).</p>';
  }
  function emqScore() { var t = 0; PARAMS.forEach(function (p) { if (S.emq[p[0]]) t += p[3] }); return Math.min(10, Math.round(t * 10) / 10) }
  function telaEmq() {
    var sc = emqScore(), cl = sc >= 8 ? 'ok' : sc >= 5 ? '' : 'verm';
    var linhas = PARAMS.map(function (p) { return '<tr data-t="par-' + p[0] + '"><td><label class="ga-lin"><input type="checkbox" data-emq="' + p[0] + '"' + (S.emq[p[0]] ? ' checked' : '') + ' data-t="emq-' + p[0] + '"/><span>' + p[1] + '</span></label></td><td>' + p[2] + '</td></tr>' }).join('');
    var rec = []; if (!S.emq.email) rec.push('Envie o e-mail (prioridade alta).'); if (!S.emq.click) rec.push('Envie a identificação de clique (prioridade alta).'); if (S.emq.email && S.emq.click && sc < 8) rec.push('Envie mais parâmetros de prioridade média quando disponíveis.');
    return '<h1>Qualidade da correspondência de eventos</h1><p class="ss-sub">Para eventos do site enviados pela API de Conversões. A Meta dá uma pontuação de 0 a 10 por evento.</p>' +
      '<div class="ga-aviso ' + cl + '" data-t="pontuacao">Evento “Compra” (servidor): pontuação <b>' + sc.toFixed(1) + '</b> de 10 <small>(valor simulado)</small></div>' +
      '<p class="miudo">A pontuação usa as informações do cliente enviadas e a porcentagem de eventos com correspondência, com os dados das últimas 48 horas: envie eventos regularmente.</p>' +
      '<table class="cm-tab" data-t="tabela-emq"><thead><tr><th>Parâmetro de informações do cliente (marque o que você envia)</th><th>Prioridade</th></tr></thead><tbody>' + linhas + '</tbody></table>' +
      (rec.length ? '<div class="vf-caixa" data-t="acoes-rec"><b>Ações recomendadas</b><ul>' + rec.map(function (x) { return '<li>' + x + '</li>' }).join('') + '</ul></div>' : '<div class="ga-aviso ok" data-t="acoes-ok">Boa configuração. Mantenha o envio regular e respeite os termos de privacidade.</div>') +
      '<p class="conferido">✓ A pontuação de 0 a 10, as últimas 48 horas, a validade para eventos do site pela API de Conversões e a tabela de parâmetros com prioridades vêm do artigo “Sobre a qualidade da correspondência de eventos” (Central de Ajuda, ' + CONF + '). ⚠ A fórmula da pontuação mostrada é inventada para o treino: a Meta não divulga o cálculo (a conferir).</p>';
  }
  function contagem(ev) {
    var b = S.br[ev], s = S.sv[ev];
    if (b && s) { if (S.evid === 'igual' || S.extid) return { n: 1, st: 'Desduplicado: contado uma vez' }; return { n: 2, st: 'DUPLICADO: contado duas vezes' } }
    if (b || s) return { n: 1, st: 'Só uma fonte: não precisa desduplicar' };
    return { n: 0, st: 'Não enviado' };
  }
  function telaDedup() {
    var evs = [['purchase', 'Compra (Purchase)'], ['addtocart', 'Adicionar ao carrinho (AddToCart)']];
    var linhas = evs.map(function (e) { var c = contagem(e[0]); return '<tr data-t="ev-' + e[0] + '"><td>' + e[1] + '</td><td><label class="ga-lin"><input type="checkbox" data-br="' + e[0] + '"' + (S.br[e[0]] ? ' checked' : '') + ' data-t="br-' + e[0] + '"/><span>Pixel (navegador)</span></label></td><td><label class="ga-lin"><input type="checkbox" data-sv="' + e[0] + '"' + (S.sv[e[0]] ? ' checked' : '') + ' data-t="sv-' + e[0] + '"/><span>API de Conversões (servidor)</span></label></td><td class="' + (c.n > 1 ? 'verm' : '') + '" data-t="res-' + e[0] + '">' + c.n + ' · ' + c.st + '</td></tr>' }).join('');
    var tot = contagem('purchase').n + contagem('addtocart').n;
    return '<h1>API de Conversões e deduplicação</h1><p class="ss-sub">Quando o mesmo evento chega pelo navegador e pelo servidor, a Meta precisa saber que é um só.</p>' +
      '<table class="cm-tab" data-t="tabela-dedup"><thead><tr><th>Evento</th><th>De onde vem</th><th></th><th>Contado na Meta</th></tr></thead><tbody>' + linhas + '</tbody></table>' +
      '<div class="vf-caixa" data-t="box-evid"><b>Como a Meta reconhece que são o mesmo evento</b><p class="miudo">Condições: o <b>event_name</b> precisa ser igual e o <b>event_id</b> idêntico nos dois. Também pode desduplicar com event_name e external_ID ou fbp que combinem. Se os eventos forem semelhantes, a Meta dá preferência ao que chegou primeiro.</p><p>event_id enviado:</p>' + selOpt('paEvid', [['diferente', 'Diferente em cada fonte'], ['nenhum', 'Nenhum event_id'], ['igual', 'Idêntico nas duas fontes']], S.evid, 'sel-evid') + ' <label class="ga-lin"><input type="checkbox" id="paExt"' + (S.extid ? ' checked' : '') + ' data-t="chk-extid"/><span>external_ID ou fbp iguais nos dois (alternativa)</span></label></div>' +
      '<div class="ga-aviso ' + (tot > 2 ? 'verm' : 'ok') + '" data-t="total-dedup">Total contado: <b>' + tot + '</b> (esperado: 2, uma compra e um carrinho)' + (tot > 2 ? '. Compras e carrinhos em dobro distorcem ROAS, atribuição e otimização.' : '.') + '</div>' +
      '<p class="miudo">Parceiros como Shopify e WooCommerce costumam gerenciar esses parâmetros sozinhos; na configuração manual, você mesmo adiciona event_name e event_id. Use Eventos de teste para ver o que foi recebido, desduplicado ou descartado.</p>' +
      '<p class="conferido">✓ As condições de desduplicação (event_name + event_id, ou external_ID/fbp), a preferência pelo primeiro evento recebido e as duas estratégias (eventos diferentes × os mesmos eventos) vêm do artigo “Sobre a desduplicação de eventos do Pixel da Meta e da API de Conversões” (Central de Ajuda, ' + CONF + '). ⚠ A tela é do simulador (a conferir).</p>';
  }
  function problemasPriv() {
    var p = [];
    ITENS.forEach(function (it) { if (it[2] && S.priv.itens[it[0]]) p.push('Compartilha informação proibida (' + it[3] + '): ' + it[1]) });
    if (!S.priv.consent) p.push('O Pixel dispara antes de a pessoa aceitar os cookies, onde o consentimento é exigido.');
    return p;
  }
  function telaPriv() {
    var lista = ITENS.map(function (it) { return '<label class="ga-lin" data-t="item-' + it[0] + '"><input type="checkbox" data-pit="' + it[0] + '"' + (S.priv.itens[it[0]] ? ' checked' : '') + ' data-t="pit-' + it[0] + '"/><span>' + it[1] + '</span></label>' }).join('');
    var pr = problemasPriv();
    return '<h1>Privacidade e regras</h1><p class="ss-sub">Você é o responsável pelos dados que compartilha com a Meta pelo Pixel e pela API de Conversões.</p>' +
      '<div class="vf-caixa" data-t="box-consent"><b>Consentimento</b><label class="ga-lin"><input type="checkbox" id="paCons"' + (S.priv.consent ? ' checked' : '') + ' data-t="chk-consent"/><span>O Pixel só dispara depois de a pessoa aceitar os cookies (e a API de Conversões só envia quem consentiu)</span></label><p class="miudo">Algumas jurisdições, como a União Europeia, exigem consentimento informado para armazenar e acessar cookies. Obtenha os consentimentos necessários e converse com a assessoria jurídica.</p></div>' +
      '<div class="vf-caixa" data-t="box-itens"><b>O que o site envia à Meta</b>' + lista + '<p class="miudo">Informações proibidas: saúde, financeiras e outras categorias sensíveis. Isso vale para todos os formatos, inclusive parâmetros de URL e eventos personalizados.</p></div>' +
      '<div class="ga-aviso ' + (pr.length ? 'verm' : 'ok') + '" data-t="resultado-priv">' + (pr.length ? '<b>Problemas:</b><ul>' + pr.map(function (x) { return '<li>' + x + '</li>' }).join('') + '</ul>Descumprir os termos pode causar problemas de desempenho, restrições de dados ou suspensão ou encerramento do uso das Ferramentas da Meta para Empresas. A Meta pode auditar o uso.' : '<b>✓ Em conformidade com o que este simulador checa.</b> Mantenha o inventário dos dados e explique ao cliente, em linguagem simples, o que é coletado e compartilhado.') + '</div>' +
      '<p class="conferido">✓ Consentimento, informações proibidas, responsabilidade do anunciante e consequências vêm do artigo “Requisitos de privacidade e uso de dados para as Ferramentas da Meta para Empresas” (Central de Ajuda, ' + CONF + '). ⚠ O verificador é do simulador e não substitui a assessoria jurídica (a conferir).</p>';
  }
  function pagina() {
    var corpo = S.tab === 'corr' ? telaCorr() : S.tab === 'emq' ? telaEmq() : S.tab === 'dedup' ? telaDedup() : telaPriv();
    return casca('<div class="ss">' + nav() + '<main class="ss-main">' + corpo + '</main></div>');
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); grava(); render(); return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return;
    if (b.getAttribute('data-acao') === 'hash') { S.hash = hashSim(S.email); grava(); render() }
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target, g;
    if (t.id === 'paTipo') { S.tipo = t.value; if (!autoDisponivel()) S.auto = false }
    else if (t.id === 'paIfr') { S.iframe = t.checked; if (!autoDisponivel()) S.auto = false }
    else if (t.id === 'paAuto') S.auto = t.checked;
    else if (t.hasAttribute && t.hasAttribute('data-emq')) S.emq[t.getAttribute('data-emq')] = t.checked;
    else if (t.hasAttribute && t.hasAttribute('data-br')) S.br[t.getAttribute('data-br')] = t.checked;
    else if (t.hasAttribute && t.hasAttribute('data-sv')) S.sv[t.getAttribute('data-sv')] = t.checked;
    else if (t.id === 'paEvid') S.evid = t.value; else if (t.id === 'paExt') S.extid = t.checked;
    else if (t.id === 'paCons') S.priv.consent = t.checked;
    else if (t.hasAttribute && t.hasAttribute('data-pit')) S.priv.itens[t.getAttribute('data-pit')] = t.checked;
    else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) { if (ev.target.id === 'paEmail') { S.email = ev.target.value; S.hash = ''; grava(); var bt = document.querySelector('[data-t=btn-hash]'); if (bt) bt.disabled = !S.email } });
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simPa = { S: S };
  }
  window.SIMPA = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function pa() { return window.__simPa ? window.__simPa.S : S }
  TOURS['correspondencia-avancada'] = [
    { antes: function () { SIMPA.zera() }, alvo: '[data-t=box-auto]', garante: function () { SIMPA.zera() }, tit: T('Correspondência avançada automática', 'Coincidencia avanzada automática'), txt: T('Uma loja virtual quer atribuir mais conversões. A correspondência avançada automática não precisa de código: ativa-se no Gerenciador de Eventos. Clique em Próximo.', 'Una tienda virtual quiere atribuir más conversiones. La coincidencia avanzada automática no necesita código: se activa en el Administrador de eventos. Haz clic en Siguiente.') },
    { alvo: '[data-t=chk-auto-adv]', clique: true, garante: function () { SIMPA.zera() }, tit: T('Ativar', 'Activar'), txt: T('Ative a correspondência avançada automática.', 'Activa la coincidencia avanzada automática.') },
    { alvo: '[data-t=sel-tipo]', garante: function () { SIMPA.zera(); SIMPA.set({ auto: true }) }, cond: function () { return pa().tipo === 'banco' }, tit: T('Um banco', 'Un banco'), txt: T('Agora, um cliente de um banco. Escolha “Banco ou serviço financeiro”.', 'Ahora, un cliente de un banco. Elige “Banco o servicio financiero”.'), dica: T('Escolha “Banco ou serviço financeiro (vertical restrita)”.', 'Elige “Banco o servicio financiero (vertical restringida)”.') },
    { alvo: '[data-t=auto-indisp]', garante: function () { SIMPA.zera(); SIMPA.set({ tipo: 'banco' }) }, tit: T('Vertical restrita', 'Vertical restringida'), txt: T('Em verticais restritas (bancos, empréstimos, seguros, saúde…), a correspondência automática não está disponível. A saída é a manual. Clique em Próximo.', 'En verticales restringidas (bancos, préstamos, seguros, salud…), la coincidencia automática no está disponible. La salida es la manual. Haz clic en Siguiente.') },
    { alvo: '[data-t=in-email]', garante: function () { SIMPA.zera(); SIMPA.set({ tipo: 'banco' }) }, cond: function () { return /@/.test(pa().email || '') }, tit: T('Manual: o hash', 'Manual: el hash'), txt: T('Na correspondência manual, o código passa o dado do visitante (como o e-mail) e o Pixel faz o hash. Digite o e-mail ana@exemplo.com.br.', 'En la coincidencia manual, el código pasa el dato del visitante (como el correo) y el píxel hace el hash. Escribe el correo ana@exemplo.com.br.'), dica: T('Digite ana@exemplo.com.br.', 'Escribe ana@exemplo.com.br.') },
    { alvo: '[data-t=btn-hash]', clique: true, garante: function () { SIMPA.zera(); SIMPA.set({ tipo: 'banco', email: 'ana@exemplo.com.br' }) }, tit: T('Ver o hash', 'Ver el hash'), txt: T('Clique para ver o que seria enviado: um código com hash, não o e-mail.', 'Haz clic para ver lo que se enviaría: un código con hash, no el correo.') },
    { alvo: '[data-t=res-hash]', fim: true, semVolta: true, garante: function () { SIMPA.zera(); SIMPA.set({ tipo: 'banco', email: 'ana@exemplo.com.br', hash: 'a1b2c3d4' }) }, tit: T('Hash enviado 🎉', '¡Hash enviado! 🎉'), txt: T('A Meta recebe o hash, usa para a correspondência e descarta. Em verticais restritas, a manual resolve. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Meta recibe el hash, lo usa para la coincidencia y lo descarta. En verticales restringidas, la manual lo resuelve. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['qualidade-sinal'] = [
    { antes: function () { SIMPA.zera(); SIMPA.set({ tab: 'emq' }) }, alvo: '[data-t=pontuacao]', garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'emq' }) }, tit: T('Pontuação de 0 a 10', 'Puntuación de 0 a 10'), txt: T('A qualidade da correspondência de eventos mostra, de 0 a 10, o quanto as informações do cliente enviadas pelo servidor ajudam a ligar o evento a uma Conta Meta. Hoje: zero. Clique em Próximo.', 'La calidad de coincidencia de eventos muestra, de 0 a 10, cuánto ayudan las informaciones del cliente enviadas por el servidor a vincular el evento con una Cuenta Meta. Hoy: cero. Haz clic en Siguiente.') },
    { alvo: '[data-t=tabela-emq]', garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'emq' }) }, tit: T('Prioridades', 'Prioridades'), txt: T('Cada parâmetro tem prioridade: Alta (e-mail, identificação de clique), Média (telefone, país, data de nascimento…) e Baixa (nome, cidade, CEP…). Clique em Próximo.', 'Cada parámetro tiene prioridad: Alta (correo, identificación de clic), Media (teléfono, país, fecha de nacimiento…) y Baja (nombre, ciudad, código postal…). Haz clic en Siguiente.') },
    { alvo: '[data-t=emq-email]', clique: true, garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'emq' }) }, tit: T('E-mail', 'Correo'), txt: T('Marque que você envia o e-mail.', 'Marca que envías el correo.') },
    { alvo: '[data-t=emq-click]', clique: true, garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'emq' }); SIMPA.estado().emq.email = true }, tit: T('Identificação de clique', 'Identificación de clic'), txt: T('Marque também a identificação de clique.', 'Marca también la identificación de clic.') },
    { alvo: '[data-t=emq-tel]', clique: true, garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'emq', emq: { email: true, click: true, fblogin: false, dob: false, pais: false, tel: false, ext: false, browser: false, cad: false, nome: false, sobren: false, cidade: false, cep: false } }) }, tit: T('Mais parâmetros', 'Más parámetros'), txt: T('Envie também o telefone, se o cliente informar.', 'Envía también el teléfono, si el cliente lo informa.') },
    { alvo: '[data-t=pontuacao]', fim: true, semVolta: true, garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'emq', emq: { email: true, click: true, fblogin: false, dob: false, pais: false, tel: true, ext: false, browser: false, cad: false, nome: false, sobren: false, cidade: false, cep: false } }) }, tit: T('Pontuação subiu 🎉', '¡La puntuación subió! 🎉'), txt: T('Mais parâmetros de qualidade, principalmente os de prioridade alta, aumentam a chance de correspondência. A pontuação usa as últimas 48 horas, então envie eventos regularmente. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Más parámetros de calidad, sobre todo los de prioridad alta, aumentan la probabilidad de coincidencia. La puntuación usa las últimas 48 horas, así que envía eventos regularmente. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['desduplicar-eventos'] = [
    { antes: function () { SIMPA.zera(); SIMPA.set({ tab: 'dedup' }) }, alvo: '[data-t=total-dedup]', garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'dedup' }) }, tit: T('Compra em dobro', 'Compra duplicada'), txt: T('A loja envia a Compra pelo navegador e pelo servidor, mas com event_id diferentes. Resultado: a compra conta duas vezes. Clique em Próximo.', 'La tienda envía la Compra por el navegador y por el servidor, pero con event_id distintos. Resultado: la compra cuenta dos veces. Haz clic en Siguiente.') },
    { alvo: '[data-t=ev-addtocart]', garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'dedup' }) }, tit: T('Só uma fonte', 'Una sola fuente'), txt: T('Repare no carrinho: ele só vem do navegador. Eventos diferentes em cada fonte não precisam de desduplicação. Clique em Próximo.', 'Fíjate en el carrito: solo viene del navegador. Eventos distintos en cada fuente no necesitan deduplicación. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-evid]', garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'dedup' }) }, cond: function () { return pa().evid === 'igual' }, tit: T('event_id idêntico', 'event_id idéntico'), txt: T('Para a Meta reconhecer o mesmo evento, o event_name e o event_id precisam ser iguais nas duas fontes. Escolha “Idêntico nas duas fontes”.', 'Para que Meta reconozca el mismo evento, el event_name y el event_id deben ser iguales en las dos fuentes. Elige “Idéntico en las dos fuentes”.'), dica: T('Escolha “Idêntico nas duas fontes”.', 'Elige “Idéntico en las dos fuentes”.') },
    { alvo: '[data-t=total-dedup]', fim: true, semVolta: true, garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'dedup', evid: 'igual' }) }, tit: T('Contado uma vez 🎉', '¡Contado una vez! 🎉'), txt: T('Agora a Meta desduplica e a compra conta uma vez; se vierem dois eventos parecidos, ela dá preferência ao que chegou primeiro. Teste sempre com Eventos de teste. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Ahora Meta deduplica y la compra cuenta una vez; si llegan dos eventos parecidos, da preferencia al que llegó primero. Prueba siempre con Probar eventos. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
  TOURS['privacidade-pixel'] = [
    { antes: function () { SIMPA.zera(); SIMPA.set({ tab: 'priv' }) }, alvo: '[data-t=resultado-priv]', garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'priv' }) }, tit: T('Dois problemas', 'Dos problemas'), txt: T('Este site tem dois problemas: dispara o Pixel antes do consentimento e envia uma informação de saúde. Vamos corrigir. Clique em Próximo.', 'Este sitio tiene dos problemas: dispara el píxel antes del consentimiento y envía una información de salud. Corrijámoslos. Haz clic en Siguiente.') },
    { alvo: '[data-t=chk-consent]', clique: true, garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'priv' }) }, tit: T('Consentimento', 'Consentimiento'), txt: T('Onde o consentimento é exigido, o Pixel só pode disparar depois de a pessoa aceitar os cookies. Marque essa configuração.', 'Donde se exige consentimiento, el píxel solo puede dispararse después de que la persona acepte las cookies. Marca esa configuración.') },
    { alvo: '[data-t=pit-saude]', clique: true, garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'priv', priv: { consent: true, ctrlCons: false, itens: { hash: true, valor: true, pedido: true, saude: true, cartao: false, saldo: false } } }) }, tit: T('Informação proibida', 'Información prohibida'), txt: T('A condição de saúde na URL é informação proibida: vale para parâmetros de URL e eventos personalizados. Desmarque esse envio.', 'La condición de salud en la URL es información prohibida: vale para parámetros de URL y eventos personalizados. Desmarca ese envío.') },
    { alvo: '[data-t=resultado-priv]', fim: true, semVolta: true, garante: function () { SIMPA.zera(); SIMPA.set({ tab: 'priv', priv: { consent: true, ctrlCons: false, itens: { hash: true, valor: true, pedido: true, saude: false, cartao: false, saldo: false } } }) }, tit: T('Em conformidade 🎉', '¡En cumplimiento! 🎉'), txt: T('Lembre: você é o responsável pelo que compartilha, os sistemas da Meta não substituem seus controles, e descumprir pode gerar restrições ou suspensão. Converse com o jurídico do cliente. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', 'Recuerda: tú eres el responsable de lo que compartes, los sistemas de Meta no sustituyen tus controles, e incumplir puede generar restricciones o suspensión. Habla con el área legal del cliente. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.') }
  ];
})();
