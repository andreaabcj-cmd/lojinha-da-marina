/* Simulador do Meta Verified e da Meta One para empresas — visual da Lojinha.
   Estado no navegador (localStorage "sim.verified2"); nada é enviado à Meta e nada é cobrado.
   Real (Meta Business Suite › Configurações › Meta Verified, portfólio de aula, 28/10/2026, PT): “Cresça com o Meta Verified”, o botão Começar
   desligado com “Você não se qualifica para fazer o cadastro ou o gerenciamento do Meta Verified. Entre em contato com outro administrador…”
   e os quatro benefícios. O Começar LIGADO (quem tem controle total) não foi visto: a conferir.
   Real (meta.com/meta-one-plans, aba Business, 28/10/2026, em inglês): os planos Essential, Advanced, Expert e Max, preços em US$ e recursos
   (traduzidos por nós). Nomes e preços em reais: Newsroom da Meta Brasil, 15/09/2026 (Essencial, Avançado, Expert, Máximo).
   A página pública antiga dos planos do Meta Verified para empresas saiu do ar (28/10/2026: “This page isn't available”).
   Cadastro, verificação, nome do perfil, cancelar e revogação ficam no “Ver de perto” das aulas: as telas internas só aparecem assinando.
   URL: meta-verified.html?zerar=1 (administrador com controle total) · ?problema=1 (sem permissão, como na conta de aula) · ?planos=1
   Tutoriais (tour.js): ?tour=escolher-plano | cadastrar-meta-verified | nao-consigo-cadastrar */
(function () {
  var CONF = '28/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  /* Meta One · planos para empresas (meta.com/meta-one-plans, 28/10/2026; R$ do Newsroom da Meta Brasil, 15/09/2026) */
  var PLANOS = [
    { id: 'essential', nome: 'Essencial', en: 'Essential', lema: 'Conecte-se com seus clientes e proteja sua empresa.', usd: 'US$ 14,99', brl: 'R$ 59',
      fbig: ['Página de links no Instagram', 'Selo de verificado*'], wa: ['Meta Business Agent: mais respostas de IA 24/7', 'URL personalizado', '1 canal verificado', 'Selo de verificado*'] },
    { id: 'advanced', nome: 'Avançado', en: 'Advanced', lema: 'Seja encontrado e tenha insights mais completos.', usd: 'US$ 49,99', brl: 'R$ 199',
      fbig: ['Links em reels', 'Links em posts no Instagram', 'Perfil aprimorado para 3 locais', 'Insights de público personalizados no Facebook', 'Insights competitivos no Instagram', '1 caso de suporte por mês', 'Acesso compartilhado com 4 pessoas no Instagram', 'Programação avançada de conteúdo', 'Selo de verificado*'],
      wa: ['Meta Business Agent: ainda mais respostas de IA 24/7', '3 canais verificados', '500 créditos de transmissão', '1 caso de suporte por mês', 'Selo de verificado*'] },
    { id: 'expert', nome: 'Expert', en: 'Expert', lema: 'Economize tempo e faça a empresa crescer.', usd: 'US$ 149,00', brl: 'R$ 599',
      fbig: ['Mais links em reels e posts', 'Perfil aprimorado para 5 locais', 'Insights de público e competitivos', '5 casos de suporte por mês', 'Acesso compartilhado com 8 pessoas no Instagram', 'Selo de verificado*'],
      wa: ['Meta Business Agent: acesso ampliado', '5 canais verificados', '1.250 créditos de transmissão', '10 contas comerciais protegidas', '5 casos de suporte por mês', 'Selo de verificado*'] },
    { id: 'max', nome: 'Máximo', en: 'Max', lema: 'O máximo da IA e das ferramentas estratégicas para a empresa.', usd: 'US$ 499,00', brl: 'R$ 1.999',
      fbig: ['O máximo de links em reels e posts', 'Perfil aprimorado para 8 locais', 'Insights de público e competitivos', 'Casos de suporte sem limite mensal', 'Acesso compartilhado com 30 pessoas no Instagram', 'Selo de verificado*'],
      wa: ['Meta Business Agent: acesso máximo', '10 canais verificados', '5.000 créditos de transmissão', '50 contas comerciais protegidas', 'Casos de suporte sem limite mensal', 'Selo de verificado*'] }
  ];
  function inicial() { return { tab: 'config', admin: true, sel: '', aviso: '' } }
  function problema() { var s = inicial(); s.admin = false; return s }
  var S = ler('sim.verified2', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('problema')) S = problema();
  if (params.get('planos')) { S = inicial(); S.tab = 'planos' }
  function grava() { try { localStorage.setItem('sim.verified2', JSON.stringify(S)) } catch (e) { } window.__simVf = { S: S } }
  grava();
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento do Meta Verified e da Meta One · nada aqui vai para a Meta e nada é cobrado · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function nav() {
    var t = [['config', '⚙️ Business Suite › Configurações › Meta Verified'], ['planos', '🌐 meta.com › Planos da Meta One']];
    return '<nav class="ss-nav">' + t.map(function (x) { return '<button class="ss-it' + (S.tab === x[0] ? ' on' : '') + '" data-tab="' + x[0] + '" data-t="tab-' + x[0] + '">' + x[1] + '</button>' }).join('') + '</nav>';
  }
  /* Configurações › Meta Verified (tela real, 28/10/2026) */
  function telaConfig() {
    var ben = [['✔️', 'Selo de verificado', 'Aparece onde você aparece'], ['🛡️', 'Proteção contra falsificação de identidade', 'Não se preocupe, estamos de olho'], ['💬', 'Suporte de agente por email e conversa', 'Ajuda quando e onde precisar'], ['⭐', 'Recursos diferenciados para o perfil', 'Apresente melhor sua empresa']];
    return '<h1>Meta Verified</h1><div class="cartao vf-mv" data-t="mv-cartao"><h2>Cresça com o Meta Verified</h2><p>Aumente sua credibilidade junto aos clientes.</p>' +
      '<button class="btn sec" data-acao="comecar" data-t="btn-comecar"' + (S.admin ? '' : ' disabled') + '>Começar</button>' +
      (S.admin ? '<p class="miudo">⚠ Com controle total, o botão fica ligado. O que ele abre não foi visto na conta de aula (a conferir).</p>' : '<p class="miudo" data-t="mv-nao-qualifica">Você não se qualifica para fazer o cadastro ou o gerenciamento do Meta Verified. Entre em contato com outro administrador de Lojinha da Marina Aula para continuar. <u>Saiba mais</u></p>') +
      '<div class="vf-ben" data-t="mv-beneficios"><p class="vf-ben-1"><span>' + ben[0][0] + '</span><b>' + ben[0][1] + '</b><small>' + ben[0][2] + '</small></p><p class="miudo"><b>Mais benefícios em destaque</b></p>' +
      ben.slice(1).map(function (b) { return '<p><span>' + b[0] + '</span><b>' + b[1] + '</b><small>' + b[2] + '</small></p>' }).join('') + '</div></div>' +
      '<p class="miudo">Os benefícios finais dependem dos detalhes da sua assinatura. Alguns benefícios podem não estar disponíveis para todos.</p>' +
      '<p class="conferido">✓ Tela conferida no Meta Business Suite real em ' + CONF + ' (PT), no portfólio de aula, onde o botão Começar aparece desligado.</p>';
  }
  /* meta.com › Planos da Meta One, aba Empresas (tela real em inglês, 28/10/2026) */
  function telaPlanos() {
    var card = function (p) {
      var lista = function (t, it) { return '<p class="miudo"><b>' + t + '</b></p><ul>' + it.map(function (x) { return '<li>' + x + '</li>' }).join('') + '</ul>' };
      return '<div class="vf-plano' + (S.sel === p.id ? ' on' : '') + '" data-t="plano-' + p.id + '"><h3>' + p.nome + ' <small>(' + p.en + ')</small></h3><p>' + p.lema + '</p>' +
        '<p class="vf-preco"><b>' + p.usd + '/mês</b><br><span class="miudo">por Página do Facebook, perfil do Instagram ou número do WhatsApp Business</span></p>' +
        '<p class="vf-brl" data-t="brl-' + p.id + '">No Brasil: a partir de <b>' + p.brl + '/mês</b></p>' +
        lista('Facebook e Instagram', p.fbig) + lista('WhatsApp Business', p.wa) +
        '<button class="btn' + (S.sel === p.id ? '' : ' sec') + '" data-escolhe="' + p.id + '" data-t="btn-escolhe-' + p.id + '">' + (S.sel === p.id ? '✓ Escolhido' : 'Escolher') + '</button></div>';
    };
    return '<h1>Meta One</h1><p class="ss-sub">Planos e preços para empresas · “Planos, benefícios e disponibilidade podem variar por região, app e conta.”</p>' +
      '<div class="cm-abas"><button disabled>Pessoal</button><button disabled>Criador</button><button class="on">Empresas</button></div>' +
      '<div class="ga-aviso" data-t="mv-x-one"><b>Meta Verified × Meta One:</b> a Meta One amplia o Meta Verified com mais recursos e IA no Facebook, Instagram e WhatsApp. Todos os planos dão direito a pedir o selo (*exige verificação). Para quem já assina o Meta Verified, “nada muda por enquanto”.</div>' +
      '<div class="vf-planos" data-t="tabela-planos">' + PLANOS.map(card).join('') + '</div>' +
      (S.sel ? '<div class="rodape-jan"><button class="btn" data-acao="assinar" data-t="btn-assinar">Assinar ' + PLANOS.filter(function (p) { return p.id === S.sel })[0].nome + '</button></div>' : '') +
      (S.aviso ? '<div class="ga-aviso verm" data-t="msg-pago">' + S.aviso + '</div>' : '') +
      '<p class="miudo">A Meta One não está disponível em todas as regiões. É preciso cumprir requisitos para assinar. A Meta decide quais planos aparecem com base na atividade da empresa nos apps.</p>' +
      '<p class="conferido">✓ Planos, preços em US$ e recursos conferidos na página pública da Meta One em ' + CONF + ' (em inglês; os nomes dos recursos foram traduzidos por nós, a conferir). Nomes em português e preços em R$ do Newsroom da Meta Brasil (15/09/2026). A Meta diz que a Meta One está em teste e pode não aparecer para todas as contas.</p>';
  }
  function pagina() { return casca('<div class="ss">' + nav() + '<main class="ss-main">' + (S.tab === 'planos' ? telaPlanos() : telaConfig()) + '</main></div>') }
  function render() { $('#app').innerHTML = pagina(); window.__simVf = { S: S } }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); S.aviso = ''; grava(); render(); return }
    if ((c = t.closest('[data-escolhe]'))) { S.sel = c.getAttribute('data-escolhe'); S.aviso = ''; grava(); render(); return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-acao');
    if (ac === 'comecar') { S.tab = 'planos'; S.aviso = '' }
    else if (ac === 'assinar') S.aviso = '⛔ Aqui começaria a assinatura e o pagamento (no app ou na loja de apps). O simulador para antes: nada é assinado nem cobrado.';
    else return;
    grava(); render();
  });
  window.SIMVF = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, problema: function () { S = problema(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() } };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  var PL = function (o) { SIMVF.zera(); SIMVF.set({ tab: 'planos' }); if (o) SIMVF.set(o) };
  var PAGO = '⛔ Aqui começaria a assinatura e o pagamento (no app ou na loja de apps). O simulador para antes: nada é assinado nem cobrado.';
  TOURS['escolher-plano'] = [
    { antes: function () { PL() }, alvo: '[data-t=mv-x-one]', garante: function () { PL() }, tit: T('Meta One', 'Meta One'), txt: T('Os planos para empresas agora se chamam Meta One. Ela amplia o Meta Verified: todos os planos dão direito a pedir o selo. Clique em Próximo.', 'Los planes para empresas ahora se llaman Meta One. Amplía Meta Verified: todos los planes permiten pedir la insignia. Haz clic en Siguiente.') },
    { alvo: '[data-t=plano-essential]', garante: function () { PL() }, tit: T('Essencial', 'Essential'), txt: T('O de entrada: selo, página de links no Instagram e, no WhatsApp, 1 canal verificado e respostas de IA. No Brasil, a partir de R$ 59 por mês. Clique em Próximo.', 'El de entrada: insignia, página de enlaces en Instagram y, en WhatsApp, 1 canal verificado y respuestas de IA. En Brasil, desde R$ 59 al mes. Haz clic en Siguiente.') },
    { alvo: '[data-t=plano-advanced]', garante: function () { PL() }, tit: T('A Marina quer links nos reels', 'Marina quiere enlaces en los reels'), txt: T('Links em reels e em posts do Instagram aparecem a partir do Avançado. Ele também traz 1 caso de suporte por mês. Clique em Próximo.', 'Los enlaces en reels y en publicaciones de Instagram aparecen desde Advanced. También trae 1 caso de soporte al mes. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-escolhe-advanced]', clique: true, garante: function () { PL() }, tit: T('Escolher', 'Elegir'), txt: T('Para o que a Marina pediu, o Avançado basta. Clique em Escolher, no Avançado.', 'Para lo que pidió Marina, Advanced alcanza. Haz clic en Elegir, en Advanced.') },
    { alvo: '[data-t=plano-advanced]', fim: true, semVolta: true, garante: function () { PL({ sel: 'advanced' }) }, tit: T('Plano certo para a necessidade 🎉', 'Plan correcto para la necesidad 🎉'), txt: T('Escolha pelo que a empresa precisa, não pelo preço. E lembre: planos e preços variam por região, e a Meta decide quais aparecem para cada conta.', 'Elige por lo que la empresa necesita, no por el precio. Y recuerda: planes y precios varían según la región, y Meta decide cuáles aparecen para cada cuenta.') }
  ];
  TOURS['cadastrar-meta-verified'] = [
    { antes: function () { SIMVF.zera() }, alvo: '[data-t=mv-cartao]', garante: function () { SIMVF.zera() }, tit: T('Onde fica', 'Dónde está'), txt: T('No Meta Business Suite: Configurações › Meta Verified. A tela mostra o selo e os benefícios. Clique em Próximo.', 'En Meta Business Suite: Configuración › Meta Verified. La pantalla muestra la insignia y los beneficios. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-comecar]', clique: true, garante: function () { SIMVF.zera() }, tit: T('Começar', 'Empezar'), txt: T('Quem tem controle total do portfólio vê o botão ligado. Clique em Começar.', 'Quien tiene control total del portfolio ve el botón activado. Haz clic en Empezar.') },
    { alvo: '[data-t=btn-escolhe-essential]', clique: true, garante: function () { PL() }, tit: T('Escolher o plano', 'Elegir el plan'), txt: T('Escolha o plano que a cliente decidiu. Clique em Escolher, no Essencial.', 'Elige el plan que decidió la clienta. Haz clic en Elegir, en Essential.') },
    { alvo: '[data-t=btn-assinar]', clique: true, garante: function () { PL({ sel: 'essential' }) }, tit: T('Assinar', 'Suscribirse'), txt: T('Clique em Assinar. Aqui é só treino: o simulador para antes do pagamento.', 'Haz clic en Suscribirse. Aquí es solo práctica: el simulador se detiene antes del pago.') },
    { alvo: '[data-t=msg-pago]', fim: true, semVolta: true, garante: function () { PL({ sel: 'essential', aviso: PAGO }) }, tit: T('Depois de assinar 🎉', 'Después de suscribirse 🎉'), txt: T('Depois do pagamento, a Meta tenta verificar a empresa sozinha pela presença nos apps. Se não der, pede dados da empresa, documento, identificação com foto ou domínio. A verificação é automática e não dá para pular.', 'Después del pago, Meta intenta verificar la empresa sola por su presencia en las apps. Si no puede, pide datos de la empresa, un documento, identificación con foto o dominio. La verificación es automática y no se puede omitir.') }
  ];
  TOURS['nao-consigo-cadastrar'] = [
    { antes: function () { SIMVF.problema() }, alvo: '[data-t=btn-comecar]', garante: function () { SIMVF.problema() }, tit: T('“O botão não funciona”', '“El botón no funciona”'), txt: T('A Marina diz que o Começar não funciona. Repare: ele está desligado. Clique em Próximo.', 'Marina dice que Empezar no funciona. Fíjate: está desactivado. Haz clic en Siguiente.') },
    { alvo: '[data-t=mv-nao-qualifica]', garante: function () { SIMVF.problema() }, tit: T('A própria tela explica', 'La propia pantalla lo explica'), txt: T('“Você não se qualifica para fazer o cadastro ou o gerenciamento… Entre em contato com outro administrador.” Quem assina precisa ter controle total do portfólio. Clique em Próximo.', '“No cumples los requisitos para registrarte o administrar… Comunícate con otro administrador.” Quien se suscribe necesita control total del portfolio. Haz clic en Siguiente.') },
    { alvo: '[data-t=mv-beneficios]', fim: true, semVolta: true, garante: function () { SIMVF.problema() }, tit: T('O caminho 🎉', 'El camino 🎉'), txt: T('Oriente: pedir a quem tem controle total para assinar, ou para dar controle total à Marina (Configurações › Pessoas). Depois, conferir se a conta da empresa é qualificada e se o plano aparece para ela.', 'Orienta: pedir a quien tiene control total que se suscriba, o que le dé control total a Marina (Configuración › Personas). Después, revisar si la cuenta de la empresa califica y si el plan le aparece.') }
  ];
})();
