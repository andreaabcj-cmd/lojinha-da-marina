/* Simulador do Meta One (assinatura) — celular (Instagram e Facebook), Central de Contas na web e Google Play.
   Estado no navegador (localStorage "sim.metaone"); nada é enviado à Meta.
   Textos copiados das telas reais de 01/11/2026 (Android, PT): o André ativou o Meta One grátis no perfil pessoal (Essencial) e no
   Instagram da Lojinha (Max); exploramos e cancelamos as duas a pedido dele. Notas em aulas_privado/meta_one_01-11.
   Nomes de pessoas e @ são da história da Lojinha (Marina). Não visto (a conferir): a tela de "Fazer a verificação agora" (não fizemos verificação).
   URL: meta-metaone.html?zerar=1 · #ig | #fb | #web | #play
   Tutoriais (tour.js): ?tour=explorar-planos | achar-assinatura | cancelar-meta-one | cancelar-no-app-certo | beneficios-suporte */
(function () {
  var CONF = '01/11/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }

  // a conta pessoal da Marina (Facebook + Instagram) e o Instagram profissional da loja
  var CONTAS = {
    pessoal: { usuario: 'marina.souza', nome: 'Marina Souza', plano: 'Essencial', data: '1 de dezembro de 2026', preco: 'R$95,00', perfis: 'Marina Souza, marina.souza' },
    loja: { usuario: 'lojinhadamarina', nome: 'Lojinha da Marina', plano: 'Max', data: '8 de novembro de 2026', preco: 'R$1.999,00', perfis: 'lojinhadamarina' }
  };
  var PESSOAIS = [['Básico', 'Explore novas maneiras de se expressar', 'R$32,00/mês', ['Mais uso mensal de IA', 'Tenha acesso a aprimoramentos de story exclusivos', 'Dê um upgrade na sua experiência de mensagens', 'Personalize seus apps']],
    ['Premium', 'Amplie suas possibilidades com a Meta AI', 'R$97,00/mês', ['Uso mensal de IA ampliado', 'Todos os benefícios do Básico']]];
  var CRIADOR = [['Essencial', 'Estabeleça sua presença e proteja sua empresa.', 'R$95,00/mês', ['Selo de verificado', 'Proteção contra falsificação de identidade', 'Página de links']],
    ['Avançado', 'Insights exclusivos para sua empresa crescer.', 'R$319,00/mês', ['8 links em reels e posts', 'Insights sobre a concorrência', '1 caso de suporte com um agente humano por mês', 'Todos os benefícios do Essencial']],
    ['Expert', 'Crie conteúdos incríveis com ainda mais IA.', 'R$990,00/mês', ['Uso mensal de IA ampliado', '16 links em reels e posts', '5 casos de suporte por mês com uma pessoa real', 'Todos os benefícios do Avançado']],
    ['Max', 'Ganhe vantagem competitiva com aconselhamento sobre conteúdo pessoal e muito mais.', 'R$3.199,00/mês', ['24 links em reels e posts', 'Suporte e monitoramento de casos ilimitados', 'Todos os benefícios do Expert']]];
  var LOJA = [['Essencial', 'Aprimore sua presença. Eleve o nível do seu conteúdo.', 'R$59,00/mês', ['Tenha um selo de verificado', 'Proteja-se contra perfis fakes']],
    ['Avançado', 'Aumente seu público criando com tecnologia de IA.', 'R$199,00/mês', ['Compare até 10 perfis semelhantes', 'Suporte dedicado 1 vez por mês']],
    ['Expert', 'Crie mais conteúdo. Converta mais leads.', 'R$599,00/mês', ['Suporte dedicado 5 vezes por mês', 'Um agente de IA que responde aos clientes em até 8.500 conversas por mês']],
    ['Max', 'Acesso máximo a insights e suporte.', 'R$1.999,00/mês', ['Um agente de IA que responde aos clientes em até 30.000 conversas por mês', 'Suporte dedicado ilimitado']]];
  var PLUS = {
    ig: ['Obtenha insights sobre revisualização de stories', 'Veja uma prévia dos stories', 'Pesquise na sua lista de visualizadores de stories', 'Desbloqueie fontes personalizadas para sua bio', 'Veja quando seu story foi visualizado', 'Escolha um ícone personalizado para o app'],
    fb: ['Obtenha insights sobre revisualização de stories', 'Veja uma prévia dos stories', 'Pesquise na sua lista de visualizadores de stories', 'Altere o tema do seu app', 'Escolha um ícone personalizado para o app'],
    wa: ['Envie figurinhas exclusivas', 'Altere o tema do seu app', 'Fixe mais conversas', 'Faça um upgrade das suas listas de conversas']
  };
  var MOTIVOS = ['Tive problemas técnicos', 'Não uso meus benefícios o suficiente para justificar o custo', 'O custo é muito alto', 'É difícil usar os benefícios', 'Outro (especifique)'];

  function inicial() { return { conta: 'pessoal', tela: 'config', aba: 'pessoal', abaLoja: 'Max', sanf: {}, cancelado: { pessoal: false, loja: false }, pop: '', trocaPop: false, fbTela: 'config', webPop: false } }
  var S = ler('sim.metaone', null) || inicial();
  if (params.get('zerar')) S = inicial();
  function grava() { try { localStorage.setItem('sim.metaone', JSON.stringify(S)) } catch (e) { } window.__simM1 = S }
  grava();
  function rota() { return (location.hash || '#ig').slice(1) }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }
  function C() { return CONTAS[S.conta] }
  function conferido(pend) { return pend ? '<p class="conferido pendente">⚠ ' + pend + '</p>' : '<p class="conferido">✓ Telas conferidas com o app real em ' + CONF + ' (Android, assinaturas de teste da conta de aula, canceladas depois)</p>' }

  /* ---------- moldura (01/11/2026: só o celular, como no simulador do WhatsApp Business; o computador fica na abinha "Computador") ---------- */
  function cel(corpo, pop) {
    return '<div class="cel-moldura m1-cel" data-t="celular"><div class="cel-barra"><span>9:41</span><span>📶 🔋</span></div><div class="cel-tela m1-tela">' + corpo + (pop || '') + '</div>' +
      '<div class="cel-nav"><button data-acao="volta" aria-label="Voltar" data-t="sis-volta">◀</button><button data-acao="home" aria-label="Tela inicial" data-t="sis-home">●</button><button data-acao="nada" aria-label="Apps recentes">■</button></div></div>';
  }
  function faixa() { return '<div class="sim-faixa">🧪 Simulador de treinamento do Meta One · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' }
  function pagina(atual, titulo, corpo, lado) { return faixa() + '<div class="m1-palco1">' + corpo + (lado ? '<div class="cel-ref m1-ref">' + lado + '</div>' : '') + '</div>' }
  /* tela inicial do Android (desenho nosso, só para achar o app, igual ao do celular do WhatsApp) */
  function home() {
    var ap = function (ic, nome, ir, t) { return '<button class="cel-app"' + (ir ? ' data-ir="' + ir + '"' : ' data-acao="nada"') + (t ? ' data-t="' + t + '"' : '') + '><span class="ic">' + ic + '</span>' + nome + '</button>' };
    return pagina('home', '', cel('<div class="cel-home"><p class="cel-hora">9:41</p><p class="cel-data">sábado, 1 de novembro</p><div class="cel-apps">' +
      ap('📞', 'Telefone') + ap('💬', 'Mensagens') + ap('🌐', 'Chrome') + ap('📷', 'Câmera') + ap('⚙️', 'Configurações') + ap('▶️', 'Play Store', 'play', 'app-play') +
      ap('<span class="m1-ic-ig">◎</span>', 'Instagram', 'ig', 'app-ig') + ap('<span class="m1-ic-fb">f</span>', 'Facebook', 'fb', 'app-fb') + '</div></div>'), '');
  }
  function topo(tit, voltar) { return '<div class="m1-topo">' + (voltar ? '<button data-acao="' + voltar + '" aria-label="Voltar" data-t="topo-volta">←</button>' : '') + '<b>' + tit + '</b></div>' }
  function linha(txt, sub, acao, t) { return '<button class="m1-linha" data-acao="' + acao + '"' + (t ? ' data-t="' + t + '"' : '') + '><span><b>' + txt + '</b>' + (sub ? '<small>' + sub + '</small>' : '') + '</span><span>›</span></button>' }

  /* ---------- Instagram ---------- */
  function igConfig() {
    var loja = S.conta === 'loja';
    return topo('Configurações e atividade') +
      '<div class="m1-usuario"><button data-acao="troca" data-t="ig-usuario">' + C().usuario + ' ▾</button>' + (S.trocaPop ? '<div class="m1-pop-lista" data-t="lista-contas"><button data-conta="pessoal" data-t="conta-pessoal">marina.souza</button><button data-conta="loja" data-t="conta-loja">lojinhadamarina</button></div>' : '') + '</div>' +
      '<p class="m1-sec">Sua conta</p>' + linha('Conta Meta', 'Senha, segurança, dados pessoais, preferências de anúncios', 'nada') +
      '<p class="m1-sec">Como você usa o Instagram</p>' + linha('Salvos', '', 'nada') + linha('Notificações', '', 'nada') +
      '<p class="m1-sec">Assinaturas</p>' + linha('Meta One', S.cancelado[S.conta] ? 'Expira em ' + C().data : 'Assinante', 'abre-m1', 'item-meta-one') +
      (loja ? '<p class="m1-sec">Seus insights e ferramentas</p>' + linha('Painel profissional', '', 'nada') : '') +
      '<p class="m1-sec">Mais informações e suporte</p>' + linha('Ajuda', '', 'ajuda') + linha('Conversar com o suporte', '', 'ajuda', 'item-conversar-suporte') + linha('Status da conta', '', 'nada');
  }
  function sanfona(id, tit) { var on = S.sanf[id]; return '<button class="m1-sanf" data-sanf="' + id + '" data-t="sanf-' + id + '">' + tit + ' <span>' + (on ? '⌃' : '⌄') + '</span></button>' + (on ? '<ul class="m1-plus" data-t="lista-' + id + '">' + PLUS[id].map(function (x) { return '<li>' + x + '</li>' }).join('') + '</ul>' : '') }
  function assinaturaBloco() {
    var c = C(), cx = S.cancelado[S.conta];
    return '<div class="m1-bloco" data-t="sua-assinatura"><p class="m1-sec">Sua assinatura</p>' + linha('Plano de assinatura', 'Meta One ' + c.plano + ' · Explorar planos', 'planos', 'btn-explorar') +
      '<div class="m1-linha m1-fixo" data-t="detalhes-cobranca"><span><b>Detalhes da cobrança</b><small>' + (cx ? 'Expira em ' : 'Renovação em ') + c.data + '</small></span><span>' + c.preco + '</span></div>' +
      linha('Forma de pagamento', '', 'pagamento', 'btn-forma-pagamento') + '</div>';
  }
  function igM1() {
    var c = C(), loja = S.conta === 'loja';
    var ben = loja ?
      '<p class="m1-sec">Seus benefícios</p><p class="m1-grupo">Promova seu conteúdo</p><div class="m1-cx">Temas personalizados para conversas</div><p class="m1-grupo">Mostre seu perfil autêntico</p><div class="m1-cx">Selo de verificado<br>Proteção contra falsificação de identidade</div>' +
        '<p class="m1-grupo">Proteja sua marca</p><div class="m1-cx">Casos ilimitados com especialistas em suporte<br>Crédito de conteúdo original</div><p class="m1-grupo">Receba insights avançados</p><div class="m1-cx">Insights sobre a concorrência<br>Histórico de insights estendido</div>' +
        '<p class="m1-sec">Também incluídos neste plano</p><div class="m1-cx" data-t="lista-max">Instagram Plus <small>Não disponível para seu perfil no momento</small><br>Programação avançada de conteúdo<br>Pesquisa otimizada<br>Página de links<br>12 links em reels<br>12 links em posts<br>Acesso compartilhado com 30 pessoas</div>'
      : '<p class="m1-sec">Seus benefícios</p><p class="m1-grupo">Mostre seu perfil autêntico</p><div class="m1-cx" data-t="ben-autentico">✔ Selo de verificado<br>🛡 Proteção contra falsificação de identidade</div><p class="m1-grupo">Promova seu conteúdo</p><div class="m1-cx">↑ Mais uso mensal de IA<br>▶ Mais imagens e vídeos de IA<br>▢ Acesse a IA em todos os apps</div><p class="m1-grupo">Gere resultados reais</p><div class="m1-cx">☰ Página de links</div>' +
        '<p class="m1-sec">Também incluídos neste plano</p><div data-t="ben-plus">' + sanfona('ig', 'Instagram Plus') + sanfona('fb', 'Facebook Plus') + sanfona('wa', 'WhatsApp Plus') + '</div>';
    var cartoes = loja && !S.cancelado.loja ? '<div class="m1-card" data-t="card-agent"><b>Configure seu Meta Business Agent</b><p>Não perca nenhuma pergunta de cliente usando a IA personalizável para responder quando você não estiver disponível.</p><button class="m1-bt" data-acao="nada">Configurar</button> <button class="m1-bt sec" data-acao="nada">Ignorar</button></div>' +
      '<div class="m1-card" data-t="card-verificacao"><b>Faça a verificação</b><p>Verifique sua identidade para receber o selo de verificado e os benefícios de proteção contra falsificação de identidade.</p><button class="m1-bt" data-acao="verificar" data-t="btn-verificar">Fazer a verificação agora</button></div>' : '';
    return topo('', 'fecha-m1') + '<div class="m1-capa"><div class="m1-logo">①</div><h2 data-t="m1-plano">Meta One <span>' + c.plano + '</span></h2><small>Ativo desde 1 de novembro de 2026</small></div>' +
      (loja ? '<p class="m1-sec">Perfis com assinatura</p><div class="m1-cx">' + c.perfis + '</div>' : '') + cartoes + ben +
      (loja ? assinaturaBloco() + '<p class="m1-sec">Precisa de ajuda?</p>' + linha('Obter ajuda', '', 'ajuda', 'btn-obter-ajuda') + (S.cancelado.loja ? '' : '<button class="m1-sair" data-acao="cancelar" data-t="btn-cancelar">Cancelar assinatura</button>')
        : '<p class="m1-sec">Precisa de ajuda?</p>' + linha('Obter ajuda', '', 'ajuda', 'btn-obter-ajuda') + linha('Gerenciar assinatura', '', 'gerenciar', 'btn-gerenciar'));
  }
  function igGerenciar() {
    var c = C(), cx = S.cancelado[S.conta];
    return topo('Gerenciar sua assinatura', 'volta-m1') + '<p class="m1-sec">Perfis com assinatura</p><div class="m1-cx" data-t="perfis-assinatura">' + c.perfis + '</div>' + assinaturaBloco() +
      (cx ? '<button class="m1-bt" data-acao="nada" data-t="btn-renovar">Renovar assinatura</button>' : '<button class="m1-sair" data-acao="cancelar" data-t="btn-cancelar">Cancelar assinatura</button>');
  }
  function cartaoPlano(p, atual, t) { return '<div class="m1-plano' + (atual ? ' atual' : '') + '" data-t="' + t + '"><b>' + p[0] + '</b>' + (atual ? ' <span class="m1-tag">Plano atual</span>' : p[0] === 'Avançado' && S.conta === 'pessoal' ? ' <span class="m1-tag">Recomendado</span>' : '') + '<p>' + p[1] + '</p><b class="m1-preco">' + p[2] + '</b>' + (S.conta === 'loja' ? ' <small>• O preço pode incluir impostos</small>' : '') + '<ul>' + p[3].map(function (x) { return '<li>' + x + '</li>' }).join('') + '</ul></div>' }
  function igPlanos() {
    var c = C();
    if (S.conta === 'loja') {
      var p = LOJA.filter(function (x) { return x[0] === S.abaLoja })[0];
      return topo('', 'volta-m1') + '<div class="m1-abas">' + LOJA.map(function (x) { return '<button class="' + (x[0] === S.abaLoja ? 'on' : '') + '" data-aba-loja="' + x[0] + '" data-t="aba-loja-' + x[0].toLowerCase().replace('ç', 'c') + '">' + x[0] + '</button>' }).join('') + '</div>' +
        '<div class="m1-capa"><h2>Meta One <span>' + p[0] + '</span></h2></div>' + cartaoPlano(p, p[0] === 'Max', 'plano-loja') + '<p class="m1-nota" data-t="nota-troca">Sua oferta atual expira no final desse ciclo de cobrança. Seu novo plano começará no ciclo de cobrança seguinte. A assinatura será renovada até ser cancelada.</p>';
    }
    var lista = S.aba === 'pessoal' ? PESSOAIS : CRIADOR;
    return topo('', 'volta-gerenciar') + '<div class="m1-capa"><div class="m1-logo">①</div><h2>Meta One</h2><small>Mais recursos para se conectar, criar e se destacar.</small></div><p class="m1-sec">Escolha seu plano</p>' +
      '<div class="m1-abas"><button class="' + (S.aba === 'pessoal' ? 'on' : '') + '" data-aba="pessoal" data-t="aba-pessoal">Pessoal</button><button class="' + (S.aba === 'criador' ? 'on' : '') + '" data-aba="criador" data-t="aba-criador">Criador de conteúdo</button></div>' +
      '<div data-t="lista-planos">' + lista.map(function (p, i) { return cartaoPlano(p, S.aba === 'criador' && p[0] === c.plano, 'plano-' + S.aba + '-' + i) }).join('') + '</div>';
  }
  function igCancel1() {
    return topo('', 'volta-m1') + '<div data-t="tem-certeza"><h2>Tem certeza de que quer cancelar?</h2><p>Se cancelar, você não terá mais acesso a:</p><div class="m1-cx">✔ <b>Selo de verificado</b><br><small>Aumentar sua credibilidade junto ao público.</small><br><br>📊 <b>Insights sobre a concorrência</b><br><small>Compare seu desempenho com o de perfis semelhantes ao seu.</small></div></div>' +
      '<button class="m1-bt" data-acao="cancel2" data-t="btn-continuar-cancel">Continuar cancelamento</button> <button class="m1-bt sec" data-acao="volta-m1" data-t="btn-manter">Manter o Meta One</button>';
  }
  function igCancel2() {
    var lista = S.conta === 'pessoal' ? MOTIVOS.slice(0, 4).concat(['O benefício que eu quero não está disponível', MOTIVOS[4]]) : MOTIVOS;
    return topo('', 'volta-m1') + '<div data-t="motivos"><h2>Por que você quer cancelar?</h2><p class="m1-nota">Sua resposta é opcional. Podemos usar seus dados para personalização, inovação, pesquisa e outros fins descritos na nossa Política de Privacidade.</p><p class="m1-sec">Escolha um motivo</p>' +
      lista.map(function (m) { return '<label class="m1-radio"><input type="radio" name="mMot"/> ' + m + '</label>' }).join('') + '<p class="m1-sec">Você poderia nos dar mais detalhes?</p><p class="m1-nota">Estamos trabalhando para aprimorar ' + (S.conta === 'loja' ? 'o Meta One Max' : 'sua experiência') + ' e queremos saber como deixá-lo melhor para você.</p></div>' +
      '<button class="m1-bt" data-acao="concluir" data-t="btn-concluir">Concluir o cancelamento</button>';
  }
  function igAjuda() {
    return topo('Ajuda e suporte', 'volta-m1') + '<div class="m1-busca">🔍 Pesquisar artigos de ajuda</div><div data-t="ajuda-lista">' + linha('Relatar um problema', '', 'nada') + linha('Status da conta', 'Analise o status de sua conta.', 'nada') + linha('Sua atividade de suporte', '', 'nada') +
      linha('Como corrigir um problema de falha no pagamento na Meta', '', 'nada') + linha('Assistente de suporte da Meta AI', '', 'assistente', 'btn-assistente') + '</div>' +
      (S.assist ? '<div class="m1-card" data-t="assistente-aberto"><b>Assistente de suporte da Meta AI</b><p>Escolha uma opção sugerida (como “Gerenciar minha assinatura do Meta One”) ou digite sua pergunta. Para falar com uma pessoa, peça “Conversar com alguém do suporte”: o assistente faz algumas perguntas para encaminhar.</p><small>Pela Central de Ajuda; a conversa por dentro não foi aberta no treino.</small></div>' : '');
  }
  var POPS = {
    cancelado: function () { return '<div class="m1-veu"><div class="m1-dlg" data-t="aviso-cancelado"><b>' + (S.conta === 'loja' ? 'Sua assinatura foi cancelada' : 'Você cancelou sua assinatura') + '</b><p>Você ainda terá acesso a todos os seus benefícios até ' + C().data + '.</p><button data-acao="pop-ok" data-t="btn-ok">OK</button></div></div>' },
    pagamento: function () { return '<div class="m1-veu"><div class="m1-dlg" data-t="aviso-pagamento"><b>Forma de pagamento</b><p>No app real, este botão abre a loja de apps (Google Play ou App Store), com as formas de pagamento da conta da loja. No treino, nenhum dado de cartão é mostrado.</p><button data-acao="pop-ok">OK</button></div></div>' },
    verificar: function () { return '<div class="m1-veu"><div class="m1-dlg" data-t="aviso-verificar"><b>Verificação</b><p>A verificação pede documento e não pode ser pulada para ter o selo e a proteção. No treino não abrimos esta tela (a conferir).</p><button data-acao="pop-ok">OK</button></div></div>' },
    plataforma: function () { var p = CONTAS.pessoal; return '<div class="m1-veu"><div class="m1-dlg" data-t="aviso-plataforma"><p>Você só pode gerenciar sua assinatura na conta, no app ou na plataforma em que a comprou.</p><div class="m1-cx"><b>' + p.usuario + '</b><br>Meta One ' + p.plano + '<br><small>Renovação em ' + p.data + '</small></div><p>Abra o Instagram e entre nessa conta em um dispositivo Android para gerenciar essa assinatura.</p><button data-acao="pop-ok" data-t="btn-ok-plataforma">OK</button></div></div>' }
  };
  function ig() {
    var t = { config: igConfig, m1: igM1, gerenciar: igGerenciar, planos: igPlanos, cancel1: igCancel1, cancel2: igCancel2, ajuda: igAjuda }[S.tela] || igConfig;
    return pagina('ig', 'Instagram (celular)', cel(t(), S.pop && POPS[S.pop] ? POPS[S.pop]() : ''), ladoIg()) + conferido();
  }
  function ladoIg() { return '<p class="miudo"><b>Conta aberta no app:</b> ' + C().usuario + (S.conta === 'loja' ? ' (conta profissional da loja)' : ' (perfil pessoal da Marina)') + '. Para trocar, toque no nome de usuário, no alto da tela de Configurações.</p><p class="miudo">O Meta One só se assina e se gerencia no app do celular.</p>' }

  /* ---------- Facebook ---------- */
  function fb() {
    var corpo;
    if (S.fbTela === 'm1') { var keep = S.conta; S.conta = 'pessoal'; corpo = igM1().replace('data-acao="fecha-m1"', 'data-acao="fb-config"').replace('data-acao="gerenciar"', 'data-acao="fb-gerenciar"'); S.conta = keep }
    else if (S.fbTela === 'gerenciar') { var k2 = S.conta; S.conta = 'pessoal'; corpo = igGerenciar().replace('data-acao="volta-m1"', 'data-acao="fb-m1"').replace('data-acao="cancelar"', 'data-acao="fb-cancelar"'); S.conta = k2 }
    else corpo = topo('Configurações e privacidade') + '<p class="m1-sec">Sua conta</p>' + linha('Conta Meta', 'Senha, segurança, dados pessoais, experiências multiperfil, preferências de anúncios, verificação', 'nada') +
      '<p class="m1-sec">Assinaturas</p>' + linha('Meta One', '', 'fb-m1', 'item-fb-meta-one') + '<p class="m1-sec">Ferramentas e recursos</p>' + linha('Checkup de Privacidade', '', 'nada') + linha('Central da Família', '', 'nada') +
      '<p class="m1-sec">Preferências</p>' + linha('Ícone do app', 'Benefício do Facebook Plus', 'nada', 'item-icone-app') + linha('Idioma e região', '', 'nada');
    return pagina('fb', 'Facebook (celular)', cel(corpo, S.pop && POPS[S.pop] ? POPS[S.pop]() : ''), '<p class="miudo">A assinatura pessoal da Marina vale para o Facebook e o Instagram dela (“Perfis com assinatura”). Ela foi comprada pelo Instagram, num Android.</p>') + conferido();
  }

  /* ---------- Central de Contas (web) e Google Play ---------- */
  function web() {   // Central de Contas na web (tela real 01/11/2026): menu "Conta Meta" à esquerda, Assinaturas à direita
    var menu = ['Página inicial', 'Login e segurança', 'Experiências multiperfil', 'Suas informações e permissões', 'Preferências de anúncios', 'Meta Pay', 'Assinaturas', 'Gerenciar conta'];
    return faixa() + '<div class="web-pag"><div class="m1-ac"><aside class="m1-ac-menu"><p class="m1-ac-logo">∞ Meta</p><h2>Conta Meta</h2><p class="miudo">Controle como sua conta funciona em todos os apps e dispositivos. <u>Saiba mais</u></p>' +
      menu.map(function (m) { return '<button class="m1-ac-it' + (m === 'Assinaturas' ? ' on' : '') + '" data-acao="nada">' + m + '</button>' }).join('') + '</aside>' +
      '<main class="m1-ac-main"><p class="m1-ac-volta">Voltar às configurações do Facebook</p><div class="m1-web" data-t="web-assinaturas"><h2>Assinaturas</h2><p>Encontre e gerencie suas assinaturas em um só lugar.</p><p class="m1-sec">Gerenciar</p>' +
      '<button class="m1-linha" data-acao="web-pop" data-t="web-meta-one"><span><b>Meta One</b><small>' + (S.cancelado.pessoal ? 'Expira em ' : 'Renovação em ') + CONTAS.pessoal.data + '</small></span><span>›</span></button>' +
      '<p class="m1-sec">Descobrir</p><div class="m1-linha m1-fixo"><span><b>Criadores de conteúdo</b><small>Apoie seus criadores de conteúdo favoritos.</small></span></div>' +
      (S.webPop ? '<div class="m1-dlg m1-dlg-web" data-t="web-aviso-celular"><b>Acesse seu dispositivo móvel para gerenciar a assinatura do Meta One</b><p>Como sua assinatura foi comprada em um dispositivo móvel, ela só pode ser gerenciada nele.</p><button data-acao="web-ok" data-t="web-ok">OK</button></div>' : '') +
      '</div>' + conferido() + '</main></div></div>';
  }
  function play() {
    return pagina('play', 'Google Play (celular)', cel(topo('Assinaturas') + '<p class="m1-nota">O Google pode compartilhar dados de assinaturas que não identificam você pessoalmente com desenvolvedores para ajudá-los a oferecer esses serviços.</p><p class="m1-sec">Ativo</p><div class="m1-cx" data-t="play-vazio">Você não tem assinaturas ativas</div><p class="m1-sec">Expirou</p><div class="m1-cx">Google One · 200 GB<br><small>Expirou em 2 de mar. de 2026</small></div>'),
      '<p class="miudo">A oferta grátis do Meta One foi dada pela própria Meta: por isso a loja de apps não mostra assinatura ativa. Quando a assinatura é paga pela loja, ela aparece aqui e pode ser cancelada aqui.</p>') + conferido();
  }

  var TELAS = { home: home, ig: ig, fb: fb, web: web, play: play };
  var APP = { home: 'tela inicial', ig: 'Instagram', fb: 'Facebook', play: 'Google Play' };
  window.MOLDURA_AGORA = function () {
    var r = rota(); if (!TELAS[r]) r = 'ig';
    return r === 'web' ? { lugar: 'pc', app: 'web', url: 'accountscenter.facebook.com/subscriptions', onde: 'Central de Contas', lugares: ['cel', 'pc'] }
      : { lugar: 'cel', onde: 'Celular da Marina · ' + APP[r], lugares: ['cel', 'pc'] };
  };
  window.MOLDURA_TROCA = function (l) { S.pop = ''; S.webPop = false; grava(); vai(l === 'pc' ? 'web' : (S.ultCel || 'home')) };
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-conta]'))) { S.conta = c.getAttribute('data-conta'); S.trocaPop = false; S.tela = 'config'; S.pop = ''; grava(); render(); return }
    if ((c = t.closest('[data-sanf]'))) { var id = c.getAttribute('data-sanf'); S.sanf[id] = !S.sanf[id]; grava(); render(); return }
    if ((c = t.closest('[data-aba]'))) { S.aba = c.getAttribute('data-aba'); grava(); render(); return }
    if ((c = t.closest('[data-aba-loja]'))) { S.abaLoja = c.getAttribute('data-aba-loja'); grava(); render(); return }
    var a = t.closest('[data-ir],[data-acao]'); if (!a || a.disabled) return;
    if (a.hasAttribute('data-ir')) { S.pop = ''; S.webPop = false; grava(); vai(a.getAttribute('data-ir')); return }
    var ac = a.getAttribute('data-acao');
    var M = {
      nada: function () { if (window.SIMAVISO) SIMAVISO('Neste treino isso não muda nada.') },
      home: function () { S.pop = ''; S.trocaPop = false; vai('home') },
      troca: function () { S.trocaPop = !S.trocaPop },
      'abre-m1': function () { S.tela = 'm1' }, 'fecha-m1': function () { S.tela = 'config' }, 'volta-m1': function () { S.tela = 'm1' }, 'volta-gerenciar': function () { S.tela = 'gerenciar' },
      gerenciar: function () { S.tela = 'gerenciar' }, planos: function () { S.tela = 'planos' }, ajuda: function () { S.tela = 'ajuda'; S.assist = false }, assistente: function () { S.assist = true },
      cancelar: function () { S.tela = S.conta === 'loja' ? 'cancel1' : 'cancel2' }, cancel2: function () { S.tela = 'cancel2' },
      concluir: function () { S.cancelado[S.conta] = true; S.pop = 'cancelado' },
      'pop-ok': function () { if (S.pop === 'cancelado') S.tela = S.conta === 'loja' ? 'm1' : 'gerenciar'; S.pop = '' },
      pagamento: function () { S.pop = 'pagamento' }, verificar: function () { S.pop = 'verificar' },
      volta: function () { if (S.pop) { S.pop = ''; return } if (rota() === 'fb') { S.fbTela = S.fbTela === 'gerenciar' ? 'm1' : 'config'; return } S.tela = { m1: 'config', gerenciar: 'm1', planos: S.conta === 'loja' ? 'm1' : 'gerenciar', cancel1: 'm1', cancel2: 'm1', ajuda: 'm1' }[S.tela] || 'config' },
      'fb-config': function () { S.fbTela = 'config' }, 'fb-m1': function () { S.fbTela = 'm1' }, 'fb-gerenciar': function () { S.fbTela = 'gerenciar' }, 'fb-cancelar': function () { S.pop = 'plataforma' },
      'web-pop': function () { S.webPop = true }, 'web-ok': function () { S.webPop = false }
    };
    if (!M[ac]) return; M[ac](); grava(); render();
  });
  window.addEventListener('hashchange', render);
  function render() { var r = rota(); if (!TELAS[r]) r = 'ig'; if (r !== 'web') S.ultCel = r; $('#app').innerHTML = TELAS[r](); window.__simM1 = S }
  window.SIMM1 = { zera: function () { S = inicial(); grava() }, set: function (o) { for (var k in (o || {})) S[k] = o[k]; grava() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function m1() { return window.__simM1 || S }
  function em(h, o) { return function () { SIMM1.zera(); SIMM1.set(o || {}); location.hash = h; render() } }
  TOURS['explorar-planos'] = [
    { alvo: '[data-t=item-meta-one]', clique: true, garante: em('ig', {}), tit: T('Onde mora o Meta One', 'Dónde está Meta One'), txt: T('No Instagram: perfil › ☰ › Configurações e atividade. Em “Assinaturas”, toque em Meta One.', 'En Instagram: perfil › ☰ › Configuración y actividad. En “Suscripciones”, toca Meta One.') },
    { alvo: '[data-t=m1-plano]', garante: em('ig', { tela: 'm1' }), tit: T('O plano da Marina', 'El plan de Marina'), txt: T('A tela diz qual plano está ativo e desde quando. Embaixo vêm os benefícios. Clique em Próximo.', 'La pantalla dice qué plan está activo y desde cuándo. Abajo vienen los beneficios. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-gerenciar]', clique: true, garante: em('ig', { tela: 'm1' }), tit: T('Gerenciar', 'Administrar'), txt: T('Lá no fim, toque em Gerenciar assinatura.', 'Al final, toca Administrar suscripción.') },
    { alvo: '[data-t=btn-explorar]', clique: true, garante: em('ig', { tela: 'gerenciar' }), tit: T('Ver os planos', 'Ver los planes'), txt: T('Toque em Plano de assinatura · Explorar planos.', 'Toca Plan de suscripción · Explorar planes.') },
    { alvo: '[data-t=aba-pessoal]', clique: true, garante: em('ig', { tela: 'planos', aba: 'criador' }), tit: T('Planos pessoais', 'Planes personales'), txt: T('Duas abas. Toque em Pessoal.', 'Dos pestañas. Toca Personal.') },
    { alvo: '[data-t=lista-planos]', garante: em('ig', { tela: 'planos', aba: 'pessoal' }), tit: T('Básico e Premium', 'Básico y Premium'), txt: T('Pessoais: Básico (R$32/mês) e Premium (R$97/mês). São mais IA e os recursos “Plus” (stories, mensagens, ícone do app). Sem selo. Clique em Próximo.', 'Personales: Básico y Premium. Son más IA y los recursos “Plus”. Sin insignia. Haz clic en Siguiente.') },
    { alvo: '[data-t=aba-criador]', clique: true, garante: em('ig', { tela: 'planos', aba: 'pessoal' }), tit: T('Planos de criador', 'Planes de creador'), txt: T('Toque em Criador de conteúdo.', 'Toca Creador de contenido.') },
    { alvo: '[data-t=lista-planos]', fim: true, semVolta: true, garante: em('ig', { tela: 'planos', aba: 'criador' }), tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Essencial, Avançado, Expert e Max: selo, links, insights e suporte com pessoa. Atenção: o preço muda com o tipo de conta. Num perfil pessoal o Essencial saiu por R$95; na conta profissional da loja, R$59. Sempre confira o preço na tela do cliente.', 'Essencial, Avanzado, Expert y Max: insignia, enlaces, estadísticas y soporte con persona. El precio cambia según el tipo de cuenta: confírmalo siempre en la pantalla del cliente.') }
  ];
  TOURS['achar-assinatura'] = [
    { alvo: '[data-t=web-meta-one]', clique: true, garante: em('web', {}), tit: T('Pelo computador', 'Desde la computadora'), txt: T('Na Central de Contas, em Assinaturas, aparece o Meta One com a data de renovação. Clique nele.', 'En el Centro de cuentas, en Suscripciones, aparece Meta One con la fecha de renovación. Haz clic.') },
    { alvo: '[data-t=web-aviso-celular]', garante: em('web', { webPop: true }), tit: T('Só no celular', 'Solo en el celular'), txt: T('“Como sua assinatura foi comprada em um dispositivo móvel, ela só pode ser gerenciada nele.” Pela web dá para ver, não para mexer. Clique em Próximo.', 'Por la web se ve, pero no se cambia: solo en el celular. Haz clic en Siguiente.') },
    { alvo: '[data-t=troca-cel]', clique: true, garante: em('web', {}), tit: T('Vamos ao celular', 'Vamos al celular'), txt: T('Agora no celular. Clique na abinha Celular, lá em cima.', 'Ahora en el celular. Haz clic en la pestaña Celular, arriba.') },
    { alvo: '[data-t=app-ig]', clique: true, garante: em('home', {}), tit: T('Abrir o Instagram', 'Abrir Instagram'), txt: T('Toque no Instagram.', 'Toca Instagram.') },
    { alvo: '[data-t=item-meta-one]', clique: true, garante: em('ig', {}), tit: T('Meta One', 'Meta One'), txt: T('Configurações e atividade › Assinaturas › Meta One.', 'Configuración y actividad › Suscripciones › Meta One.') },
    { alvo: '[data-t=btn-gerenciar]', clique: true, garante: em('ig', { tela: 'm1' }), tit: T('Gerenciar', 'Administrar'), txt: T('Toque em Gerenciar assinatura.', 'Toca Administrar suscripción.') },
    { alvo: '[data-t=perfis-assinatura]', garante: em('ig', { tela: 'gerenciar' }), tit: T('Perfis com assinatura', 'Perfiles con suscripción'), txt: T('Uma assinatura vale para os perfis da mesma Central de Contas: aqui, o Facebook e o Instagram da Marina. Clique em Próximo.', 'Una suscripción vale para los perfiles del mismo Centro de cuentas. Haz clic en Siguiente.') },
    { alvo: '[data-t=detalhes-cobranca]', fim: true, semVolta: true, garante: em('ig', { tela: 'gerenciar' }), tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Detalhes da cobrança: a data da próxima renovação e o valor. A forma de pagamento é a da loja de apps (Google Play ou App Store).', 'Detalles del cobro: fecha de renovación y valor. El método de pago es el de la tienda de apps.') }
  ];
  TOURS['cancelar-meta-one'] = [
    { alvo: '[data-t=ig-usuario]', clique: true, garante: em('ig', {}), tit: T('A conta certa', 'La cuenta correcta'), txt: T('A assinatura da loja está no Instagram da loja. Toque no nome de usuário para trocar de conta.', 'La suscripción de la tienda está en el Instagram de la tienda. Toca el nombre de usuario para cambiar de cuenta.') },
    { alvo: '[data-t=conta-loja]', clique: true, garante: em('ig', { trocaPop: true }), tit: T('Instagram da loja', 'Instagram de la tienda'), txt: T('Escolha lojinhadamarina.', 'Elige lojinhadamarina.') },
    { alvo: '[data-t=item-meta-one]', clique: true, garante: em('ig', { conta: 'loja' }), tit: T('Meta One', 'Meta One'), txt: T('Toque em Meta One.', 'Toca Meta One.') },
    { alvo: '[data-t=btn-cancelar]', clique: true, garante: em('ig', { conta: 'loja', tela: 'm1' }), tit: T('Cancelar', 'Cancelar'), txt: T('Na conta profissional, “Sua assinatura” fica nesta mesma tela. Lá no fim, toque em Cancelar assinatura.', 'En la cuenta profesional, “Tu suscripción” está en esta misma pantalla. Al final, toca Cancelar suscripción.') },
    { alvo: '[data-t=tem-certeza]', garante: em('ig', { conta: 'loja', tela: 'cancel1' }), tit: T('“Tem certeza?”', '“¿Seguro?”'), txt: T('A tela lembra o que se perde (selo e insights sobre a concorrência). Clique em Próximo.', 'La pantalla recuerda lo que se pierde. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-continuar-cancel]', clique: true, garante: em('ig', { conta: 'loja', tela: 'cancel1' }), tit: T('Continuar', 'Continuar'), txt: T('Toque em Continuar cancelamento.', 'Toca Continuar cancelación.') },
    { alvo: '[data-t=btn-concluir]', clique: true, garante: em('ig', { conta: 'loja', tela: 'cancel2' }), tit: T('O motivo é opcional', 'El motivo es opcional'), txt: T('Escolher um motivo é opcional. Toque em Concluir o cancelamento.', 'Elegir un motivo es opcional. Toca Finalizar cancelación.') },
    { alvo: '[data-t=aviso-cancelado]', garante: em('ig', { conta: 'loja', tela: 'cancel2', cancelado: { pessoal: false, loja: true }, pop: 'cancelado' }), tit: T('Cancelada', 'Cancelada'), txt: T('“Você ainda terá acesso a todos os seus benefícios até…” o fim do ciclo. Não há reembolso do período. Clique em Próximo.', 'Sigue con los beneficios hasta el final del ciclo. No hay reembolso. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-ok]', clique: true, garante: em('ig', { conta: 'loja', tela: 'cancel2', cancelado: { pessoal: false, loja: true }, pop: 'cancelado' }), tit: T('OK', 'OK'), txt: T('Toque em OK.', 'Toca OK.') },
    { alvo: '[data-t=detalhes-cobranca]', fim: true, semVolta: true, garante: em('ig', { conta: 'loja', tela: 'm1', cancelado: { pessoal: false, loja: true } }), tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Agora diz “Expira em” no lugar de “Renovação em”: é o sinal de que está cancelada e não vai cobrar de novo.', 'Ahora dice “Vence el” en lugar de “Renovación”: está cancelada y no vuelve a cobrar.') }
  ];
  TOURS['cancelar-no-app-certo'] = [
    { alvo: '[data-t=item-fb-meta-one]', clique: true, garante: em('fb', {}), tit: T('“Não consigo cancelar!”', '“¡No puedo cancelar!”'), txt: T('A Marina tentou pelo Facebook. Configurações › Assinaturas › Meta One.', 'Marina lo intentó por Facebook. Configuración › Suscripciones › Meta One.') },
    { alvo: '[data-t=btn-gerenciar]', clique: true, garante: em('fb', { fbTela: 'm1' }), tit: T('Gerenciar', 'Administrar'), txt: T('Toque em Gerenciar assinatura.', 'Toca Administrar suscripción.') },
    { alvo: '[data-t=btn-cancelar]', clique: true, garante: em('fb', { fbTela: 'gerenciar' }), tit: T('Cancelar', 'Cancelar'), txt: T('Toque em Cancelar assinatura.', 'Toca Cancelar suscripción.') },
    { alvo: '[data-t=aviso-plataforma]', garante: em('fb', { fbTela: 'gerenciar', pop: 'plataforma' }), tit: T('O app certo', 'La app correcta'), txt: T('“Você só pode gerenciar sua assinatura na conta, no app ou na plataforma em que a comprou.” Ela foi comprada no Instagram, num Android. Clique em Próximo.', 'Solo se administra en la cuenta, la app o la plataforma donde se compró. Haz clic en Siguiente.') },
    { alvo: '[data-t=sis-home]', clique: true, garante: em('fb', { fbTela: 'gerenciar' }), tit: T('E a loja de apps?', '¿Y la tienda de apps?'), txt: T('Vale olhar a loja de apps também. Toque no botão de início do celular (●).', 'Vale mirar la tienda de apps. Toca el botón de inicio del celular (●).') },
    { alvo: '[data-t=app-play]', clique: true, garante: em('home', {}), tit: T('Play Store', 'Play Store'), txt: T('Toque na Play Store. Lá: foto do perfil › Pagamentos e assinaturas › Assinaturas.', 'Toca Play Store. Ahí: foto del perfil › Pagos y suscripciones › Suscripciones.') },
    { alvo: '[data-t=play-vazio]', garante: em('play', {}), tit: T('Nada na loja', 'Nada en la tienda'), txt: T('“Você não tem assinaturas ativas”: a oferta grátis veio da Meta, não passou pela loja. Então é no Instagram mesmo. Clique em Próximo.', 'La oferta gratis vino de Meta, no pasó por la tienda. Entonces es en Instagram. Haz clic en Siguiente.') },
    { alvo: '[data-t=sis-home]', clique: true, garante: em('play', {}), tit: T('De volta ao início', 'De vuelta al inicio'), txt: T('Toque no botão de início do celular (●).', 'Toca el botón de inicio del celular (●).') },
    { alvo: '[data-t=app-ig]', clique: true, garante: em('home', {}), tit: T('Instagram', 'Instagram'), txt: T('Toque no Instagram.', 'Toca Instagram.') },
    { alvo: '[data-t=item-meta-one]', clique: true, garante: em('ig', {}), tit: T('Meta One', 'Meta One'), txt: T('Na conta pessoal da Marina, toque em Meta One.', 'En la cuenta personal de Marina, toca Meta One.') },
    { alvo: '[data-t=btn-gerenciar]', clique: true, garante: em('ig', { tela: 'm1' }), tit: T('Gerenciar', 'Administrar'), txt: T('Toque em Gerenciar assinatura.', 'Toca Administrar suscripción.') },
    { alvo: '[data-t=btn-cancelar]', clique: true, garante: em('ig', { tela: 'gerenciar' }), tit: T('Cancelar', 'Cancelar'), txt: T('Toque em Cancelar assinatura.', 'Toca Cancelar suscripción.') },
    { alvo: '[data-t=btn-concluir]', clique: true, garante: em('ig', { tela: 'cancel2' }), tit: T('Concluir', 'Finalizar'), txt: T('No plano pessoal vai direto para o motivo (opcional). Toque em Concluir o cancelamento.', 'En el plan personal va directo al motivo (opcional). Toca Finalizar cancelación.') },
    { alvo: '[data-t=aviso-cancelado]', fim: true, semVolta: true, garante: em('ig', { tela: 'cancel2', cancelado: { pessoal: true, loja: false }, pop: 'cancelado' }), tit: T('Resolvido! 🎉', '¡Resuelto! 🎉'), txt: T('Regra de ouro: cancelar no mesmo app, na mesma conta e no mesmo tipo de aparelho em que assinou. Se foi pela loja de apps, cancela-se na loja.', 'Regla de oro: cancelar en la misma app, cuenta y tipo de aparato donde se suscribió. Si fue por la tienda de apps, se cancela en la tienda.') }
  ];
  TOURS['beneficios-suporte'] = [
    { alvo: '[data-t=ben-autentico]', garante: em('ig', { tela: 'm1' }), tit: T('Selo e proteção', 'Insignia y protección'), txt: T('O selo e a proteção contra falsificação só ligam depois da verificação de identidade, que não pode ser pulada. Sem verificação, sem selo. Clique em Próximo.', 'La insignia y la protección solo se activan tras la verificación de identidad. Haz clic en Siguiente.') },
    { alvo: '[data-t=sanf-ig]', clique: true, garante: em('ig', { tela: 'm1' }), tit: T('O que vem junto', 'Lo que viene incluido'), txt: T('Os planos incluem Instagram Plus, Facebook Plus e WhatsApp Plus. Toque em Instagram Plus.', 'Los planes incluyen Instagram Plus, Facebook Plus y WhatsApp Plus. Toca Instagram Plus.') },
    { alvo: '[data-t=lista-ig]', garante: em('ig', { tela: 'm1', sanf: { ig: true } }), tit: T('Instagram Plus', 'Instagram Plus'), txt: T('Prévia de stories, quem reviu, buscar na lista de visualizadores, fontes da bio e ícone do app. Coisas de uso pessoal: não mexem em anúncios. Clique em Próximo.', 'Vista previa de historias, quién las volvió a ver, fuentes de la biografía, ícono de la app. No cambian nada de los anuncios. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-obter-ajuda]', clique: true, garante: em('ig', { tela: 'm1' }), tit: T('Suporte', 'Soporte'), txt: T('Toque em Obter ajuda.', 'Toca Obtener ayuda.') },
    { alvo: '[data-t=btn-assistente]', clique: true, garante: em('ig', { tela: 'ajuda' }), tit: T('Assistente de suporte', 'Asistente de soporte'), txt: T('Toque em Assistente de suporte da Meta AI.', 'Toca Asistente de soporte de Meta AI.') },
    { alvo: '[data-t=assistente-aberto]', fim: true, semVolta: true, garante: em('ig', { tela: 'ajuda', assist: true }), tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Casos com uma pessoa por mês: Avançado 1, Expert 5, Max ilimitado. No Essencial e nos pessoais, o caminho é o assistente e os artigos.', 'Casos con una persona por mes: Avanzado 1, Expert 5, Max ilimitado. En Essencial y personales, el camino es el asistente y los artículos.') }
  ];
})();
