/* Simulador dos anúncios de lead (formulário instantâneo) — layout fiel, visual da Lojinha.
   Estado no navegador (localStorage "sim.leads"); nada é enviado à Meta.
   Textos copiados das telas reais (conta de aula, 29/10/2026, PT, só olhando): Meta Business Suite › Formulários de anúncios de lead
   (abas, colunas, janela Criar formulário, editor de 5 etapas com os erros de campo, Configurações), Integração de leads (Conectar CRM),
   Central de Leads (tela de entrada com os termos), Gerenciador de Anúncios › + Criar › Leads (Local da conversão, Página e termos,
   Meta de desempenho, Destino do anúncio) e a Ferramenta de testes de anúncios de lead. Notas em aulas_privado/telas_reais_29-10/lead_ads.md.
   Não vistos (a conferir): a lista da Central de Leads por dentro, o próximo passo de cada "Conectar" do CRM e a tela depois de "Criar lead".
   URL: meta-leads.html?zerar=1 · ?exemplo=1 (um formulário ativo) · #formularios | #crm | #central | #campanha | #teste
   Tutoriais (tour.js): ?tour=local-conversao | criar-formulario | formulario-erros | campanha-leads | onde-ficam-leads | conectar-crm */
(function () {
  var CONF = '29/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var url = function (s) { return /^https?:\/\/[^\s.]+\.[^\s]+$/.test(String(s || '').trim()) };

  var VARIOS = ['Formulários no site e instantâneos', 'Site e ligações', 'Formulários instantâneos e Messenger'];
  var UNICO = ['Vídeo ao vivo do Instagram', 'Site', 'Formulários instantâneos', 'Messenger', 'Instagram', 'WhatsApp', 'Ligações', 'App'];
  var CRMS = ['Microsoft Excel', 'Google Sheets', 'Zapier', 'HubSpot by Zapier', 'Salesforce by Zapier', 'Microsoft Excel by Zapier', 'Google Drive', 'Google Sheets by Zapier', 'Gmail', 'HubSpot', 'ActiveCampaign by Zapier', 'LeadConnector by Zapier', 'Pipedrive by Zapier'];
  var PERG = [['Múltipla escolha', 'Use as opções de resposta para categorizar, classificar e filtrar os leads.'], ['Resposta curta', 'Obtenha informações adicionais em poucas frases.'], ['Condicional', 'Mostre somente as opções de resposta que se aplicam. Altere-as com base nas respostas anteriores.'], ['Solicitação de hora marcada', 'Permita que as pessoas marquem um horário para conversar com você.']];

  function inicial() { return { forms: [], seq: 0, crmPop: false, crmSel: '', central: false, testeLead: false, C: { dlg: false, obj: '', nivel: 'camp', local: VARIOS[0], localPop: false, meta: 'Maximizar o número de leads', metaPop: false, form: '', email: false, criado: false } } }
  function exemploForm() { return { id: 'f1', nome: 'Orçamento de caneca personalizada', status: 'Ativo', criado: '29/10/2026', leads: 0, comp: 'Restrito' } }
  var S = ler('sim.leads', null) || inicial();
  if (params.get('zerar')) S = inicial();
  if (params.get('exemplo')) { S = inicial(); S.forms = [exemploForm()]; S.seq = 1 }
  var D = null;          // editor do formulário (rascunho)
  var J = null;          // janela "Criar formulário" (novo × duplicar)
  function novoRascunho() { return { passo: 1, vis: {}, nome: 'Formulário sem título 29/10/2026 23:25', tipo: 'Mais volume', fone: false, flex: true, flexModo: 'Otimizado', fundo: false, saud: true, tit: '', desc: '', fmt: 'Parágrafo', perg: [], logica: false, menuPerg: false, descContato: '', pol: '', polTxt: "Visit Lojinha da Marina - Ficticio's Privacy Policy.", encTit: "Thanks, you're all set.", encDesc: 'You can visit our website or exit the form now.', acao: 'Ir para o site', link: '', cta: 'View website', idioma: 'English (US)', comp: 'Restrito', cfg: false, cfgAba: 'conf', fechar: false, tentou: false } }
  function grava() { try { localStorage.setItem('sim.leads', JSON.stringify(S)) } catch (e) { } window.__simLd = { S: S, D: D, J: J } }
  grava();
  function rota() { return (location.hash || '#formularios').slice(1) }
  function vai(h) { if (location.hash === '#' + h) render(); else location.hash = h }
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento dos anúncios de lead · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function conferido(pend) { return pend ? '<p class="conferido pendente">⚠ ' + pend + '</p>' : '<p class="conferido">✓ Tela conferida com a tela real em ' + CONF + ' (conta de aula)</p>' }

  /* ---------- erros de cada etapa do editor (textos da tela real) ---------- */
  function erros(d, p) {
    var e = {};
    if (p === 2 && d.saud) { if (!d.tit.trim()) e.tit = 'O conteúdo do título será necessário se o cartão de contexto estiver selecionado para anúncios de lead'; if (!d.desc.trim()) e.desc = 'O conteúdo será necessário se o cartão de contexto estiver selecionado para anúncios de lead' }
    if (p === 3 && !d.descContato.trim()) e.descContato = 'Você deve informar como usará os dados das pessoas.';
    if (p === 4 && !url(d.pol)) e.pol = 'Forneça um URL válido da Política de Privacidade da empresa';
    if (p === 5 && d.acao === 'Ir para o site' && !url(d.link)) e.link = 'Forneça um URL válido de um site.';
    return e;
  }
  function temErro(d, p) { return Object.keys(erros(d, p)).length > 0 }
  function mostra(d, p) { return d.tentou || d.vis[p] }
  function ativos() { return S.forms.filter(function (f) { return f.status === 'Ativo' }) }

  /* ---------- Meta Business Suite: formulários ---------- */
  function nav(atual) {
    var it = [['formularios', '📝', 'Formulários instantâneos'], ['central', '👥', 'Central de Leads'], ['campanha', '📣', 'Gerenciador de Anúncios'], ['teste', '🧪', 'Ferramenta de testes']];
    return '<nav class="ss-nav">' + it.map(function (m) { return '<button class="ss-it' + (atual === m[0] || (atual === 'crm' && m[0] === 'formularios') ? ' on' : '') + '" data-ir="' + m[0] + '" data-t="nav-' + m[0] + '">' + m[1] + ' ' + m[2] + '</button>' }).join('') + '</nav>';
  }
  function pagina(atual, titulo, sub, corpo, topo) {
    return casca('<div class="ss">' + nav(atual) + '<main class="ss-main"><div class="ss-topo"><div><h1>' + titulo + '</h1>' + (sub ? '<p class="ss-sub">' + sub + '</p>' : '') + '</div><div class="ss-bt">' + (topo || '') + '</div></div>' + corpo + '</main></div>' + janelaCriar() + editor() + janelaCrm());
  }
  function abas(atual) {
    return '<div class="ld-abas"><button class="' + (atual === 'formularios' ? 'on' : '') + '" data-ir="formularios" data-t="aba-formularios">Formulários</button><button data-acao="nada">Rascunhos de formulário</button><button class="' + (atual === 'crm' ? 'on' : '') + '" data-ir="crm" data-t="aba-crm">' + (atual === 'crm' ? 'Integração de leads' : 'Configuração do CRM') + '</button></div>';
  }
  function topoForms() { return '<button class="btn" data-acao="criar" data-t="btn-criar-form">Criar formulário</button> <button class="btn sec" data-acao="nada">Tarefas</button>' }
  function formularios() {
    var linhas = S.forms.map(function (f) { return '<tr data-t="form-' + f.id + '"><td><b>' + esc(f.nome) + '</b></td><td><span class="ga-tag vd">' + f.status + '</span></td><td>' + f.criado + '</td><td data-t="leads-' + f.id + '">' + f.leads + '</td><td>' + f.comp + '</td><td><button class="btn sec mini" data-acao="baixar" data-t="baixar-' + f.id + '">Baixar</button></td><td>—</td></tr>' }).join('');
    return pagina('formularios', 'Formulários de anúncios de lead', 'Gerencie formulários e conecte seu software de CRM para anúncios de lead.',
      abas('formularios') + '<div class="ld-barra"><button class="btn sec" data-acao="nada">Pesquisar</button> <button class="btn sec" data-acao="nada">Filtros: 1</button> <button class="btn sec" disabled>Ações</button></div>' +
      '<table class="cm-tab" data-t="tabela-forms"><thead><tr><th>Nome</th><th>Status</th><th>Criado</th><th>Número de leads</th><th>Compartilhamento</th><th>Cadastros</th><th>Turbinamento</th></tr></thead><tbody>' + linhas + '</tbody></table>' +
      (S.forms.length ? '' : '<p class="miudo" data-t="forms-vazio">Nenhum formulário ainda.</p>') +
      (S.baixou ? '<div class="ga-aviso" data-t="aviso-baixar"><b>No treino não baixamos arquivo.</b> Na vida real sai um arquivo CSV com os leads dos <b>últimos 90 dias</b>; os mais antigos expiram. Por padrão, só administradores da Página (ou quem pode enviar mensagens) baixam, a não ser que o portfólio tenha personalizado o Acesso a leads.</div>' : '') +
      '<p class="miudo">Os formulários da tabela são do treino. A coluna “Cadastros” é onde, na vida real, aparece o botão para baixar os leads (Central de Ajuda; a conferir na tela real, que estava vazia).</p>' + conferido(), topoForms());
  }
  function crm() {
    var tem = ativos().length;
    return pagina('crm', 'Formulários de anúncios de lead', 'Gerencie formulários e conecte seu software de CRM para anúncios de lead.',
      abas('crm') + '<div class="ld-barra" style="justify-content:flex-end"><button class="btn" data-acao="crm-abre" data-t="btn-conectar-crm">＋ Conectar CRM</button></div>' +
      (tem ? '<p class="miudo" data-t="crm-pronto">Há um formulário ativo: já dá para conectar um CRM.</p>' : '<div class="ga-aviso am" data-t="aviso-crm">⚠ <b>Você precisa de um formulário ativo para conectar um CRM</b><br><small>Crie um novo formulário ou reative um formulário arquivado na página Formulários.</small><p><button class="btn sec" data-ir="formularios">Ir para a página Formulários</button></p></div>') +
      (S.crmSel ? '<div class="ga-aviso" data-t="crm-escolhido"><b>' + esc(S.crmSel) + '</b> escolhido. Na vida real, “Conectar” leva ao site do CRM (ou do Zapier) e você segue as instruções de lá. No treino paramos aqui: a tela seguinte não foi vista (a conferir).</div>' : '') +
      conferido(), topoForms());
  }
  function janelaCrm() {
    if (!S.crmPop) return '';
    var cards = ['Microsoft Excel', 'Google Sheets', 'Zapier', 'HubSpot', 'Gmail'].map(function (c) { return '<div class="ld-card"><b>' + c + '</b><button class="link" data-crm="' + c + '" data-t="crm-' + c.replace(/\s/g, '-').toLowerCase() + '">Conectar</button></div>' }).join('');
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-crm"><button class="ld-x" data-acao="crm-fecha" aria-label="Fechar">✕</button><h2>Receba leads automaticamente com a configuração do CRM</h2><p class="miudo">Veja, gerencie e receba leads automaticamente em seu sistema de CRM conectando-o à Meta.</p>' +
      '<div class="ld-cards">' + cards + '</div><p><b>Selecione um sistema de CRM</b></p><select class="ga-in" id="crmLista" data-t="crm-lista"><option value="">Pesquisar nos sistemas de CRM</option>' + CRMS.map(function (c) { return '<option>' + c + '</option>' }).join('') + '</select>' +
      (!ativos().length ? '<p class="miudo err" data-t="crm-sem-form">Sem formulário ativo, a conexão não termina (aviso da aba Integração de leads).</p>' : '') + '</div></div>';
  }
  function janelaCriar() {
    if (!J) return '';
    return '<div class="ga-fundo"><div class="ga-jan" data-t="jan-criar"><h2>Criar formulário</h2><p><b>Criar um formulário de lead</b></p>' +
      '<label class="ga-lin' + (J.modo === 'novo' ? ' on' : '') + '"><input type="radio" name="jModo" value="novo"' + (J.modo === 'novo' ? ' checked' : '') + ' data-t="op-novo"/><span><b>Novo formulário</b><small>Crie um novo formulário e insira todas as novas informações.</small></span></label>' +
      '<label class="ga-lin' + (J.modo === 'dup' ? ' on' : '') + '"><input type="radio" name="jModo" value="dup"' + (J.modo === 'dup' ? ' checked' : '') + (S.forms.length ? '' : ' disabled') + ' data-t="op-dup"/><span><b>Duplicar um formulário existente</b><small>Duplique um dos seus formulários existentes e altere apenas o que quiser.</small></span></label>' +
      '<div class="rodape-jan"><button class="btn sec" data-acao="j-cancela">Cancelar</button><button class="btn" data-acao="j-avanca" data-t="j-avancar">Avançar</button></div></div></div>';
  }

  /* ---------- o editor de 5 etapas ---------- */
  var ETAPAS = ['Tipo de formulário', 'Apresentação', 'Perguntas', 'Política de privacidade', 'Encerramento'];
  function campo(id, val, max, err, ph) { return '<input class="ga-in' + (err ? ' err' : '') + '" id="' + id + '" value="' + esc(val) + '" placeholder="' + (ph || '') + '" data-t="' + id + '"/>' + (max ? '<small class="ld-cont">' + val.length + '/' + max + '</small>' : '') + (err ? '<p class="miudo err" data-t="err-' + id + '">' + err + '</p>' : '') }
  function radio(nome, val, atual, tit, txt, t, extra) { return '<label class="ga-lin' + (val === atual ? ' on' : '') + '"><input type="radio" name="' + nome + '" value="' + val + '"' + (val === atual ? ' checked' : '') + (t ? ' data-t="' + t + '"' : '') + '/><span><b>' + tit + '</b>' + (txt ? '<small>' + txt + '</small>' : '') + (extra || '') + '</span></label>' }
  function corpoEtapa(d) {
    var p = d.passo, e = mostra(d, p) ? erros(d, p) : {};
    if (p === 1) return '<h3>Nome do formulário</h3><p class="miudo">O nome que você escolher só será visto no Gerenciador de Anúncios.</p>' + campo('fNome', d.nome) +
      '<h3>Tipo de formulário</h3><p class="miudo">Personalize seu formulário dependendo da meta da sua campanha de geração de leads. As opções que você selecionar poderão afetar o volume de envios e o custo por lead.</p><div data-t="tipos">' +
      radio('fTipo', 'Mais volume', d.tipo, 'Mais volume', 'Use um formulário que seja rápido para preencher e enviar em um dispositivo móvel.', 'tipo-volume') +
      radio('fTipo', 'Maior intenção', d.tipo, 'Maior intenção', 'Adicione uma etapa de verificação para que as pessoas tenham uma chance de confirmar as informações.', 'tipo-intencao', d.tipo === 'Maior intenção' ? '<label class="ld-chk"><input type="checkbox" id="fFone"' + (d.fone ? ' checked' : '') + '/> Exigir que os leads verifiquem o próprio número de telefone com um código de acesso de uso único.</label>' : '') +
      radio('fTipo', 'Criativo avançado', d.tipo, 'Criativo avançado', 'Mantenha o interesse do seu público com este formulário que reúne as imagens e as mensagens da sua empresa, incluindo seções opcionais de informações sobre o negócio, detalhes dos produtos e avaliações.', 'tipo-criativo') + '</div>' +
      '<h3>Entrega de formulário flexível <label class="ld-sw"><input type="checkbox" id="fFlex"' + (d.flex ? ' checked' : '') + '/></label></h3><p class="miudo">Deixe a Meta ajustar ou remover os elementos do formulário com base no que as pessoas têm mais probabilidade de responder.</p>' +
      (d.flex ? radio('fFlexModo', 'Otimizado', d.flexModo, 'Otimizado', 'A Meta ajustará o formulário para cada pessoa a fim de conseguir o máximo de desempenho.') + radio('fFlexModo', 'Manual', d.flexModo, 'Manual', 'Você seleciona os elementos do formulário que devem ser ajustados para cada pessoa.') : '');
    if (p === 2) return '<h3>Imagem de plano de fundo · Opcional <label class="ld-sw"><input type="checkbox" id="fFundo"' + (d.fundo ? ' checked' : '') + '/></label></h3><p class="miudo">A imagem que você escolher será mostrada no topo da tela e atrás do seu formulário.</p>' +
      '<h3>Saudação · Opcional <label class="ld-sw"><input type="checkbox" id="fSaud"' + (d.saud ? ' checked' : '') + ' data-t="sw-saudacao"/></label></h3><p class="miudo">Inclua detalhes relevantes e explique por que as pessoas devem preencher seu formulário.</p>' +
      (d.saud ? '<div data-t="bloco-saudacao"><p><b>Título</b></p>' + campo('fTit', d.tit, 60, e.tit, 'Insira um título curto') + '<p><b>Descrição</b></p><div class="ld-par">' + radio('fFmt', 'Parágrafo', d.fmt, 'Parágrafo') + radio('fFmt', 'Lista', d.fmt, 'Lista') + '</div>' +
        '<textarea class="ga-in' + (e.desc ? ' err' : '') + '" id="fDesc" placeholder="Inclua detalhes adicionais" data-t="fDesc">' + esc(d.desc) + '</textarea>' + (e.desc ? '<p class="miudo err" data-t="err-fDesc">' + e.desc + '</p>' : '') +
        '<p><button class="btn sec" data-acao="rm-saud" data-t="btn-remover-saudacao">🗑 Remover saudação</button></p></div>' : '');
    if (p === 3) return '<h3>Perguntas · Opcional <label class="ld-sw" title="Lógica condicional"><input type="checkbox" id="fLog"' + (d.logica ? ' checked' : '') + '/> <small>Lógica condicional</small></label></h3><p class="miudo">Adicione perguntas ao seu formulário para entender melhor seus leads.</p>' +
      '<div class="ga-aviso"><b>☆ A filtragem de leads agora é uma lógica condicional</b></div>' +
      '<div class="ld-menu-pai"><button class="btn sec" data-acao="menu-perg" data-t="btn-add-pergunta">＋ Adicionar pergunta ▾</button>' + (d.menuPerg ? '<div class="fd-op ld-op" data-t="menu-perguntas">' + PERG.map(function (q, i) { return '<button data-perg="' + i + '" data-t="perg-' + i + '"><b>' + q[0] + '</b><small>' + q[1] + '</small></button>' }).join('') + '</div>' : '') + '</div>' +
      d.perg.map(function (q, i) { return '<div class="ld-q" data-t="q-' + i + '"><b>' + q + '</b> <button class="btn sec mini" data-rmq="' + i + '">🗑</button><p class="miudo">No treino a pergunta entra só com o tipo; o texto e as opções não são editados aqui.</p></div>' }).join('') +
      '<h3>Informações de contato</h3><p class="miudo">Peça informações de contato e dados pessoais adicionais. Essas informações serão preenchidas automaticamente com base no perfil do Facebook da pessoa.</p>' +
      '<div class="ld-caixa"><p><b>Descrição</b></p><p class="miudo">Informe como as informações que as pessoas fornecerem serão usadas ou compartilhadas.</p>' + campo('fDescCont', d.descContato, 0, e.descContato, 'Insira uma mensagem') +
      '<p><b>Escolha o tipo de informação de que você precisa</b></p><div class="ld-q">Email <small>☐ Opcional · Coletar email profissional</small></div><div class="ld-q">Full name</div><p><button class="btn sec" data-acao="nada">Adicionar categoria</button></p></div>';
    if (p === 4) return '<h3>Política de privacidade</h3><p class="miudo">Como você coletará as informações do cliente, é necessário incluir um link para a política de privacidade da sua empresa. Seu link aparecerá no aviso legal padrão de privacidade do Facebook.</p>' +
      '<p><b>Link</b></p>' + campo('fPolLink', d.pol, 0, e.pol) + '<p><b>Texto do link</b> · Opcional</p>' + campo('fPolTxt', d.polTxt, 70) +
      '<h3>Avisos personalizados · Opcional</h3><p class="miudo">Você pode acrescentar opções de aceitação de mensagens de marketing e avisos legais ao aviso legal padrão de privacidade do Facebook.</p><button class="btn sec" data-acao="nada">＋ Adicionar aviso legal personalizado</button>';
    return '<h3>Mensagem para leads</h3><p class="miudo">Informe o que acontece a seguir.</p><p><b>Título</b></p>' + campo('fEncTit', d.encTit, 60) + '<p><b>Descrição</b></p><textarea class="ga-in" id="fEncDesc">' + esc(d.encDesc) + '</textarea>' +
      '<p><b>Ação adicional</b></p>' + radio('fAcao', 'Ir para o site', d.acao, 'Ir para o site', 'Compartilhe um URL para as pessoas acessarem seu site.', 'acao-site') + radio('fAcao', 'Ver arquivo', d.acao, 'Ver arquivo', 'Compartilhe conteúdo restrito, como arquivos PDF, JPEG ou PNG.') + radio('fAcao', 'Ligar para a empresa', d.acao, 'Ligar para a empresa', 'Permita que as pessoas liguem instantaneamente para sua empresa.') +
      (d.acao === 'Ir para o site' ? '<p><b>Link</b></p>' + campo('fLink', d.link, 0, e.link) + '<p><b>Chamada para ação</b></p>' + campo('fCta', d.cta, 60) : '<p class="miudo">No treino só a opção “Ir para o site” tem os campos montados.</p>') +
      '<h3>Conectar com leads no Messenger</h3><label class="ld-chk"><input type="checkbox" disabled/> Iniciar conversas no Messenger</label>';
  }
  function previa(d) {
    var ing = d.idioma === 'English (US)', p = d.passo;
    var tela = p <= 2 ? '<b>Lojinha da Marina - Ficticio</b><p>' + (d.saud && d.tit ? esc(d.tit) : 'Texto da descrição') + '</p><span class="ld-pv-bt">' + (ing ? 'Continue' : 'Continuar') + ' →</span>'
      : p === 3 ? '<b>' + (ing ? 'Contact information' : 'Informações de contato') + '</b><p>Email<br>' + (ing ? 'Full name' : 'Nome completo') + '</p><span class="ld-pv-bt">' + (ing ? 'Continue' : 'Continuar') + '</span>'
      : p === 4 ? '<b>' + (ing ? 'Privacy policy' : 'Política de privacidade') + '</b><p class="miudo">' + (ing ? 'By clicking Submit, you agree to send your info to Lojinha da Marina - Ficticio…' : 'Ao clicar em Enviar, você concorda em enviar suas informações para Lojinha da Marina - Ficticio…') + '</p><span class="ld-pv-bt">' + (ing ? 'Submit' : 'Enviar') + '</span>'
      : '<b>' + esc(d.encTit) + '</b><p class="miudo">' + esc(d.encDesc) + '</p><span class="ld-pv-bt">' + esc(d.cta) + '</span>';
    return '<div class="ld-prev" data-t="previa" data-sem-traduzir="1"><div class="ld-pv-abas"><span class="on">Facebook</span><span>Instagram</span></div><div class="ld-pv-cel">' + tela + '</div><small>' + Math.min(p === 1 ? 1 : p - 1, 4) + ' de 4</small></div>';
  }
  function icone(d, i) { var p = i + 1; if (p === d.passo) return '◐'; if (mostra(d, p) && temErro(d, p)) return '❗'; return (d.vis[p] || p < d.passo) ? '✅' : '○' }
  function editor() {
    if (!D) return '';
    var d = D, lado = ETAPAS.map(function (n, i) { return '<button class="ld-et' + (d.passo === i + 1 ? ' on' : '') + (mostra(d, i + 1) && temErro(d, i + 1) ? ' err' : '') + '" data-etapa="' + (i + 1) + '" data-t="etapa-' + (i + 1) + '"><span>' + icone(d, i) + '</span> ' + n + '</button>' }).join('');
    var cfg = d.cfg ? '<div class="ga-fundo ld-sobre"><div class="ga-jan" data-t="jan-config"><button class="ld-x" data-acao="cfg-fecha" aria-label="Fechar">✕</button><h2>Configurações do formulário</h2><div class="ld-cfg"><div class="ld-cfg-menu"><button class="on">Configuração do formulário</button><button data-acao="nada">Nomes dos campos</button><button data-acao="nada">Parâmetros de rastreamento</button></div><div>' +
      '<p><b>Idioma</b></p><select class="ga-in" id="fIdioma" data-t="cfg-idioma">' + ['English (US)', 'Português (Brasil)', 'Español'].map(function (o) { return '<option' + (o === d.idioma ? ' selected' : '') + '>' + o + '</option>' }).join('') + '</select>' +
      '<p><b>Compartilhamento</b></p>' + radio('fComp', 'Restrito', d.comp, 'Restrito', 'Somente as pessoas para quem seu anúncio for veiculado diretamente poderão enviar esse formulário.', 'comp-restrito') + radio('fComp', 'Aberto', d.comp, 'Aberto', 'Seu anúncio pode ser compartilhado, e qualquer pessoa pode enviar esse formulário.', 'comp-aberto') +
      '</div></div><div class="rodape-jan"><button class="btn" data-acao="cfg-fecha" data-t="cfg-concluir">Concluir</button></div></div></div>' : '';
    var fechar = d.fechar ? '<div class="ga-fundo ld-sobre"><div class="ga-jan" data-t="jan-fechar"><h2>Fechar formulário de lead?</h2><p>Tem certeza de que deseja fechar o formulário de lead? Se você fechar o formulário, todo o trabalho em andamento será perdido.</p><div class="rodape-jan"><button class="btn sec" data-acao="fechar-nao">Cancelar</button><button class="btn" data-acao="fechar-sim" data-t="fechar-ok">OK</button></div></div></div>' : '';
    var ult = d.passo === 5;
    return '<div class="ga-fundo"><div class="ga-jan ld-editor" data-t="jan-editor"><div class="ld-ed-topo"><b>Criar formulário</b><span><button class="btn sec mini" data-acao="cfg" data-t="btn-config">⚙ Configurações</button> <button class="ld-x" data-acao="fechar" aria-label="Fechar" data-t="btn-fechar-editor">✕</button></span></div>' +
      '<div class="ld-ed"><div class="ld-ed-lado">' + lado + '</div><div class="ld-ed-meio" data-t="etapa-corpo">' + corpoEtapa(d) + '</div>' + previa(d) + '</div>' +
      (d.tentou && ETAPAS.some(function (n, i) { return temErro(d, i + 1) }) ? '<p class="miudo err" data-t="erro-criar">Corrija as etapas marcadas com ❗ para criar o formulário.</p>' : '') +
      '<div class="rodape-jan"><button class="btn sec" data-acao="nada">Salvar rascunho</button>' + (d.passo > 1 ? '<button class="btn sec" data-acao="ant" data-t="btn-anterior">Anterior</button>' : '') + (ult ? '<button class="btn" data-acao="cria" data-t="btn-criar-final">Criar formulário</button>' : '<button class="btn" data-acao="prox" data-t="btn-avancar">Avançar</button>') + '</div></div></div>' + cfg + fechar;
  }

  /* ---------- Central de Leads ---------- */
  function central() {
    return pagina('central', 'Central de Leads', '', '<div class="ld-barra"><button class="btn sec" data-acao="nada">Públicos ▾</button> <button class="btn sec" data-acao="nada" title="Baixar leads">⤓</button> <button class="btn sec" data-acao="nada" title="Lembretes">🔔</button> <button class="btn sec" disabled>＋ Adicionar leads ▾</button></div>' +
      (S.central ? '<div class="ga-aviso am" data-t="central-dentro"><b>No treino paramos aqui.</b> A lista da Central de Leads por dentro não foi vista na tela real (entrar pede aceitar os termos). Pela Central de Ajuda: o ícone de baixar gera um CSV com o filtro atual (data, nome, e-mail, telefone, etapa, origem e responsável), até 10.000 leads por arquivo.</div>'
        : '<div class="ld-intro" data-t="central-intro"><h2>Apresentamos a Central de Leads</h2><p>Para ajudar você a começar, vamos importar leads recentes dos seus anúncios e da sua Caixa de Entrada no Meta Business Suite.</p><ul><li>⏱ Poupe tempo gerenciando seus leads no mesmo lugar</li><li>☰ Faça a triagem e organize seus leads em estágios com o gerenciamento de pipeline</li><li>⚡ Melhore a eficiência com ferramentas como a atribuição de administrador e os lembretes</li></ul>' +
          '<p class="miudo">A Central de Leads e outras ferramentas que processam dados de contato ou de mensagens estão sujeitos aos Termos de Serviço da Central de Leads.</p><p class="miudo">Ao selecionar Continuar, você concorda com esses termos.</p><button class="btn" data-acao="central-ok" data-t="btn-central-continuar">Continuar</button></div>') +
      conferido(S.central ? 'Tela de entrada conferida em 29/10/2026; a lista por dentro, a conferir.' : ''));
  }

  /* ---------- Gerenciador de Anúncios: campanha de leads ---------- */
  function campanha() {
    var C = S.C, corpo;
    if (!C.criado) corpo = '<div class="ga-barra"><button class="btn" data-acao="c-criar" data-t="btn-mais-criar">＋ Criar</button></div><p class="miudo">Clique em ＋ Criar para começar uma campanha (no treino, só um rascunho).</p>';
    else {
      var niv = '<div class="ld-arv"><button class="' + (C.nivel === 'camp' ? 'on' : '') + '" data-nivel="camp" data-t="nivel-camp">📁 Nova campanha de Leads</button><button class="' + (C.nivel === 'conj' ? 'on' : '') + '" data-nivel="conj" data-t="nivel-conj">▦ Novo conjunto de anúncios de Leads</button><button class="' + (C.nivel === 'anuncio' ? 'on' : '') + '" data-nivel="anuncio" data-t="nivel-anuncio">▢ Novo anúncio de Leads</button></div>';
      var meio;
      if (C.nivel === 'camp') meio = '<div class="ld-bloco"><h3>Nome da campanha</h3><input class="ga-in" value="Nova campanha de Leads" readonly/></div><div class="ld-bloco"><h3>Detalhes da campanha</h3><p class="miudo">Tipo de compra: Leilão · Objetivo da campanha: Leads</p></div><div class="ld-bloco" data-t="bloco-orcamento"><h3>Orçamento <span class="ga-tag vd">Advantage+ ativado</span></h3><p class="miudo">Orçamento da campanha · Orçamento diário R$ 25,00</p></div><div class="ga-aviso">✦ <b>Campanha de leads Advantage+</b> · Ativado · Pontuação da campanha 100</div>';
      else if (C.nivel === 'conj') {
        var formInst = C.local === 'Formulários instantâneos';
        meio = '<div class="ld-bloco" data-t="bloco-conversao"><h3>Conversão</h3><p><b>Local da conversão</b></p><p class="miudo">Escolha onde você quer gerar leads.</p>' +
          '<div class="ld-menu-pai"><button class="ga-in ld-sel" data-acao="local-pop" data-t="sel-local">' + C.local + ' ▾</button>' + (C.localPop ? '<div class="fd-op ld-op" data-t="lista-local"><p class="ld-grupo"><b>Vários</b><small>Direcione as pessoas para onde elas têm maior probabilidade de conversão.</small></p>' + VARIOS.map(function (o, i) { return '<button data-local="' + o + '" data-t="local-v' + i + '">' + (o === C.local ? '◉ ' : '○ ') + o + '</button>' }).join('') + '<p class="ld-grupo"><b>Único</b><small>Direcione as pessoas para uma localização onde você quer que elas façam a conversão.</small></p>' + UNICO.map(function (o, i) { return '<button data-local="' + o + '" data-t="local-u' + i + '">' + (o === C.local ? '◉ ' : '○ ') + o + '</button>' }).join('') + '</div>' : '') + '</div>' +
          (formInst ? '<p><b>Página do Facebook</b></p><p class="miudo">Escolha a Página que você quer promover.</p><input class="ga-in" value="Lojinha da Marina - Ficticio" readonly/><div class="ga-aviso" data-t="aviso-termos">ⓘ Você aceitou os Termos para Anúncios de Cadastros da Meta para esta Página. <u>Ler os termos</u></div>' +
            '<p><b>Meta de desempenho</b></p><div class="ld-menu-pai"><button class="ga-in ld-sel" data-acao="meta-pop" data-t="sel-meta">' + C.meta + ' ▾</button>' + (C.metaPop ? '<div class="fd-op ld-op" data-t="lista-meta"><button data-meta="Maximizar o número de leads" data-t="meta-leads"><b>Maximizar o número de leads</b><small>Tentaremos mostrar seus anúncios para as pessoas com maior probabilidade de compartilhar as informações de contato delas com você.</small></button><button data-meta="Maximizar o número de leads qualificados" data-t="meta-qualificados"><b>Maximizar o número de leads qualificados</b><small>Tentaremos mostrar seus anúncios para as pessoas com maior probabilidade de conversão depois de compartilharem as informações de contato delas com você.</small></button></div>' : '') + '</div>' +
            (C.meta.indexOf('qualificados') > 0 ? '<p class="miudo" data-t="nota-qualificados">Leads qualificados: a Central de Ajuda pede conectar o CRM para enviar à Meta o que aconteceu com cada lead (Gerenciador de Eventos › conjunto de dados de CRM).</p>' : '')
            : C.local === VARIOS[0] ? '<p><b>Meta de desempenho</b></p><input class="ga-in" value="Maximizar o número de conversões" readonly/><div class="ga-aviso am" data-t="aviso-dataset">Um conjunto de dados (anteriormente conhecido como Pixel) é necessário. Para publicar, configure seu conjunto de dados ou escolha uma otimização diferente, como visualizações da página de destino.</div><button class="btn sec" data-acao="nada">Criar conjunto de dados</button>'
            : '<p class="miudo">No treino, só “Formulários instantâneos” e o padrão “Formulários no site e instantâneos” têm a continuação montada.</p>') + '</div>';
      } else {
        var lista = ativos().map(function (f) { return '<label class="ga-lin' + (C.form === f.id ? ' on' : '') + '" data-t="escolhe-' + f.id + '"><input type="radio" name="cForm" value="' + f.id + '"' + (C.form === f.id ? ' checked' : '') + '/><span><b>' + esc(f.nome) + '</b><small>Ativo</small></span></label>' }).join('');
        meio = C.local !== 'Formulários instantâneos' ? '<div class="ga-aviso am" data-t="sem-destino-form">O destino “Formulário instantâneo” aparece quando o conjunto usa formulários. Volte ao conjunto de anúncios e escolha o local da conversão “Formulários instantâneos”.</div>' :
          '<div class="ld-bloco" data-t="bloco-destino"><h3>Destino</h3><p class="miudo">Escolha para onde direcionar as pessoas imediatamente após elas tocarem ou clicarem no seu anúncio.</p><p><b>Formulário instantâneo</b></p><p class="miudo">Faça conexões com as pessoas permitindo que elas enviem informações de contato e outros detalhes para você por meio de um formulário.</p>' +
          '<div class="ld-opcoes"><button class="ld-op-card" data-acao="nada"><b>Gerar um formulário</b><small>Usando um formulário existente no site.</small></button><button class="ld-op-card" data-acao="criar" data-t="btn-criar-um-form"><b>＋ Criar um formulário</b><small>Crie seu próprio formulário exclusivo.</small></button></div>' +
          '<p><b>Pesquise seus formulários</b></p><div class="ld-abas"><button class="on">Ativos</button><button data-acao="nada">Arquivados</button></div><div data-t="lista-forms-anuncio">' + (lista || '<div class="ga-aviso">ⓘ Escolha ou crie um formulário instantâneo para sua campanha de leads</div>') + '</div>' +
          '<p><b>Filtros de qualidade</b></p><label class="ld-chk"><input type="checkbox" id="cEmail"' + (C.email ? ' checked' : '') + (C.form ? '' : ' disabled') + ' data-t="chk-email-prof"/> Exigir email profissional <small>Os leads devem fazer a verificação usando um endereço de email ativo associado a uma organização real.</small></label></div>' +
          '<div class="ld-bloco"><h3>Cultivo de leads do formulário instantâneo</h3><p class="miudo">Alcance os leads onde eles estão mais ativos com acompanhamentos após o envio personalizados usando os canais exclusivos da Meta.</p></div>' +
          '<p class="miudo">Ao clicar em Publicar, você aceita que seu uso das ferramentas para anúncios da Meta está sujeito aos nossos Termos e Condições.</p><button class="btn" disabled title="No treino não publicamos" data-t="btn-publicar">Publicar</button>';
      }
      corpo = '<div class="ld-cmp">' + niv + '<div class="ld-cmp-meio">' + meio + '</div></div>';
    }
    var dlg = C.dlg ? '<div class="ga-fundo"><div class="ga-jan" data-t="jan-objetivo"><h2>Criar nova campanha</h2><p><b>Escolha um tipo de compra</b></p><input class="ga-in" value="Leilão" readonly/><p><b>Escolha um objetivo da campanha</b></p>' +
      ['Reconhecimento', 'Tráfego', 'Engajamento', 'Leads', 'Promoção do app', 'Vendas'].map(function (o) { return '<label class="ga-lin' + (C.obj === o ? ' on' : '') + '" data-t="obj-' + o.toLowerCase().replace(/\s/g, '-') + '"><input type="radio" name="cObj" value="' + o + '"' + (C.obj === o ? ' checked' : '') + '/><span><b>' + o + '</b></span></label>' }).join('') +
      (C.obj === 'Leads' ? '<div class="ga-aviso" data-t="obj-leads-info"><b>Leads</b> — Consiga leads para sua empresa ou marca.<br><small>Bom para: Formulários no site e instantâneos · Formulários instantâneos · Messenger, Instagram e WhatsApp · Conversões · Ligações</small></div>' : '') +
      '<div class="rodape-jan"><button class="btn sec" data-acao="c-cancela">Cancelar</button><button class="btn" data-acao="c-continua" data-t="btn-continuar-obj"' + (C.obj === 'Leads' ? '' : ' disabled') + '>Continuar</button></div><p class="miudo">No treino só o objetivo Leads continua.</p></div></div>' : '';
    return pagina('campanha', 'Gerenciador de Anúncios', 'Lojinha da Marina Aula (123456789)', corpo + dlg + conferido());
  }

  /* ---------- Ferramenta de testes ---------- */
  function teste() {
    var f = ativos()[0];
    return pagina('teste', 'Ferramenta de testes de anúncios de lead', 'Meta for Developers', '<p>Use esta ferramenta para testar sua integração de API ou CRM. Você pode criar um lead de teste para confirmar que a sua integração está configurada para receber os dados corretamente.</p>' +
      '<p><b>Página:</b></p><input class="ga-in" value="Lojinha da Marina - Ficticio" readonly/>' +
      '<div class="ld-caixa" data-t="diagnostico-pagina"><b>Diagnóstico da Página</b><ul><li>O usuário tem permissão de leads ⚠</li><li>Gerenciador de Acesso a Leads habilitado ⚠</li><li>O usuário é administrador da Página ✅</li></ul></div>' +
      '<p><b>Produto:</b> Lead Retrieval</p><p><b>Formulário:</b></p>' + (f ? '<input class="ga-in" value="' + esc(f.nome) + '" readonly data-t="teste-form"/>' : '<div class="ga-aviso am" data-t="teste-sem-form">⛔ Esta Página não tem nenhum formulário associado a ela. Crie um novo formulário ou altere a Página selecionada.</div>') +
      '<p class="miudo">You can create one lead per form. You\'ll need to delete an existing lead in order to create a new one.</p>' +
      '<button class="btn" data-acao="t-criar" data-t="btn-criar-lead"' + (f ? '' : ' disabled') + '>Criar lead</button> <button class="btn sec" disabled>Excluir lead</button> <button class="btn sec" disabled>Ver prévia do formulário</button>' +
      (S.testeLead ? '<div class="ga-aviso" data-t="teste-feito"><b>Lead de teste criado (no treino).</b> Na vida real, ele deve chegar ao seu CRM em poucos minutos e aparece no arquivo para baixar, mas não conta na coluna Resultados do Gerenciador. A tela depois de “Criar lead” não foi vista (a conferir).</div>' : ''), '') + '';
  }

  var TELAS = { formularios: formularios, crm: crm, central: central, campanha: campanha, teste: teste };
  function criaForm() {
    S.seq++; var id = 'f' + S.seq; S.forms.push({ id: id, nome: D.nome.trim() || 'Formulário sem título', status: 'Ativo', criado: '29/10/2026', leads: 0, comp: D.comp });
    if (S.C.criado && S.C.nivel === 'anuncio') S.C.form = id;
    D = null;
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-etapa]')) && D) { D.vis[D.passo] = 1; D.passo = +c.getAttribute('data-etapa'); D.menuPerg = false; grava(); render(); return }
    if ((c = t.closest('[data-perg]')) && D) { D.perg.push(PERG[+c.getAttribute('data-perg')][0]); D.menuPerg = false; grava(); render(); return }
    if ((c = t.closest('[data-rmq]')) && D) { D.perg.splice(+c.getAttribute('data-rmq'), 1); grava(); render(); return }
    if ((c = t.closest('[data-crm]'))) { S.crmSel = c.getAttribute('data-crm'); S.crmPop = false; grava(); vai('crm'); return }
    if ((c = t.closest('[data-local]'))) { S.C.local = c.getAttribute('data-local'); S.C.localPop = false; grava(); render(); return }
    if ((c = t.closest('[data-meta]'))) { S.C.meta = c.getAttribute('data-meta'); S.C.metaPop = false; grava(); render(); return }
    if ((c = t.closest('[data-nivel]'))) { S.C.nivel = c.getAttribute('data-nivel'); S.C.localPop = S.C.metaPop = false; grava(); render(); return }
    var a = t.closest('[data-ir],[data-acao]'); if (!a || a.disabled) return;
    if (a.hasAttribute('data-ir')) { S.crmPop = false; grava(); vai(a.getAttribute('data-ir')); return }
    var ac = a.getAttribute('data-acao');
    if (ac === 'nada') { if (window.SIMAVISO) SIMAVISO('Neste treino isso não muda nada.'); return }
    if (ac === 'criar') J = { modo: 'novo' };
    else if (ac === 'j-cancela') J = null;
    else if (ac === 'j-avanca') { if (J.modo === 'dup' && S.forms[0]) { D = novoRascunho(); D.nome = S.forms[0].nome + ' (cópia)' } else D = novoRascunho(); J = null }
    else if (ac === 'prox') { D.vis[D.passo] = 1; D.passo = Math.min(5, D.passo + 1); D.menuPerg = false }
    else if (ac === 'ant') { D.vis[D.passo] = 1; D.passo = Math.max(1, D.passo - 1); D.menuPerg = false }
    else if (ac === 'cria') { D.vis[5] = 1; D.tentou = true; if (![1, 2, 3, 4, 5].some(function (p) { return temErro(D, p) })) criaForm() }
    else if (ac === 'rm-saud') { D.saud = false }
    else if (ac === 'menu-perg') D.menuPerg = !D.menuPerg;
    else if (ac === 'cfg') D.cfg = true;
    else if (ac === 'cfg-fecha') D.cfg = false;
    else if (ac === 'fechar') D.fechar = true;
    else if (ac === 'fechar-nao') D.fechar = false;
    else if (ac === 'fechar-sim') D = null;
    else if (ac === 'baixar') S.baixou = true;
    else if (ac === 'crm-abre') S.crmPop = true;
    else if (ac === 'crm-fecha') S.crmPop = false;
    else if (ac === 'central-ok') S.central = true;
    else if (ac === 'c-criar') { S.C.dlg = true; S.C.obj = '' }
    else if (ac === 'c-cancela') S.C.dlg = false;
    else if (ac === 'c-continua') { S.C.dlg = false; S.C.criado = true; S.C.nivel = 'camp' }
    else if (ac === 'local-pop') { S.C.localPop = !S.C.localPop; S.C.metaPop = false }
    else if (ac === 'meta-pop') { S.C.metaPop = !S.C.metaPop; S.C.localPop = false }
    else if (ac === 't-criar') S.testeLead = true;
    else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (J && t.name === 'jModo') J.modo = t.value;
    else if (D && t.name === 'fTipo') D.tipo = t.value;
    else if (D && t.id === 'fFone') D.fone = t.checked;
    else if (D && t.id === 'fFlex') D.flex = t.checked;
    else if (D && t.name === 'fFlexModo') D.flexModo = t.value;
    else if (D && t.id === 'fFundo') D.fundo = t.checked;
    else if (D && t.id === 'fSaud') D.saud = t.checked;
    else if (D && t.name === 'fFmt') D.fmt = t.value;
    else if (D && t.id === 'fLog') D.logica = t.checked;
    else if (D && t.name === 'fAcao') D.acao = t.value;
    else if (D && t.id === 'fIdioma') D.idioma = t.value;
    else if (D && t.name === 'fComp') D.comp = t.value;
    else if (t.name === 'cObj') S.C.obj = t.value;
    else if (t.name === 'cForm') S.C.form = t.value;
    else if (t.id === 'cEmail') S.C.email = t.checked;
    else if (t.id === 'crmLista' && t.value) { S.crmSel = t.value; S.crmPop = false; grava(); vai('crm'); return }
    else return;
    grava(); render();
  });
  var CAMPOS = { fNome: 'nome', fTit: 'tit', fDesc: 'desc', fDescCont: 'descContato', fPolLink: 'pol', fPolTxt: 'polTxt', fEncTit: 'encTit', fEncDesc: 'encDesc', fLink: 'link', fCta: 'cta' };
  document.addEventListener('input', function (ev) {
    var t = ev.target; if (!D || !CAMPOS[t.id]) return;
    D[CAMPOS[t.id]] = t.value; grava();
    // erros e contadores acompanham a digitação sem perder o cursor
    var tmp = document.createElement('div'); tmp.innerHTML = editor();
    ['[data-t=etapa-corpo]', '[data-t=previa]'].forEach(function (s) { var n = $(s), m = $(s, tmp); if (n && m && s !== '[data-t=etapa-corpo]') n.innerHTML = m.innerHTML });
    var err = t.parentNode.querySelector('[data-t=err-' + t.id + ']'), novo = $('[data-t=err-' + t.id + ']', tmp);
    if (err && !novo) { err.remove(); t.classList.remove('err') } else if (!err && novo) { t.insertAdjacentHTML('afterend', novo.outerHTML); t.classList.add('err') }
    var cont = t.nextElementSibling; if (cont && cont.classList.contains('ld-cont')) cont.textContent = t.value.length + '/' + (t.id === 'fPolTxt' ? 70 : 60);
    var lado = $('.ld-ed-lado'), ln = $('.ld-ed-lado', tmp); if (lado && ln) lado.innerHTML = ln.innerHTML;
  });
  window.addEventListener('hashchange', render);
  function render() {
    var r = rota(); if (!TELAS[r]) r = 'formularios';
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = TELAS[r]();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simLd = { S: S, D: D, J: J };
  }
  /* comandos usados pelos tutoriais (cada passo arruma o cenário do zero) */
  window.SIMLD = {
    zera: function () { S = inicial(); D = null; J = null; grava() },
    exemplo: function () { S = inicial(); S.forms = [exemploForm()]; S.seq = 1; D = null; J = null; grava() },
    editor: function (o) { D = novoRascunho(); for (var k in (o || {})) D[k] = o[k]; J = null; grava() },
    janela: function () { J = { modo: 'novo' }; D = null; grava() },
    camp: function (o) { for (var k in (o || {})) S.C[k] = o[k]; D = null; J = null; grava() },
    set: function (o) { for (var k in (o || {})) S[k] = o[k]; D = null; J = null; grava() },
    pronto: render
  };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function ld() { return window.__simLd || { S: S, D: D, J: J } }
  function em(h, f) { return function () { f && f(); location.hash = h; render() } }
  var OK_ED = { nome: 'Orçamento de caneca personalizada', tit: 'Caneca com a sua frase', desc: 'Conte o que você quer e mandamos o orçamento no WhatsApp.', descContato: 'Usaremos seus dados só para mandar o orçamento.', pol: 'https://lojinhadamarina.com.br/privacidade', link: 'https://lojinhadamarina.com.br', idioma: 'Português (Brasil)' };
  function ed(passo, extra) { return function () { var o = { passo: passo }; for (var k in OK_ED) o[k] = OK_ED[k]; for (var j in (extra || {})) o[j] = extra[j]; for (var p = 1; p < passo; p++) (o.vis = o.vis || {})[p] = 1; SIMLD.editor(o); location.hash = 'formularios'; render() } }

  TOURS['local-conversao'] = [
    { alvo: '[data-t=btn-mais-criar]', clique: true, garante: em('campanha', function () { SIMLD.zera() }), tit: T('Começar pela campanha', 'Empezar por la campaña'), txt: T('No Gerenciador de Anúncios, clique em ＋ Criar.', 'En el Administrador de anuncios, haz clic en ＋ Crear.') },
    { alvo: '[data-t=obj-leads]', cond: function () { return ld().S.C.obj === 'Leads' }, garante: em('campanha', function () { SIMLD.zera(); SIMLD.camp({ dlg: true }) }), tit: T('O objetivo Leads', 'El objetivo Clientes potenciales'), txt: T('Escolha o objetivo Leads. Repare no “Bom para”: formulários no site e instantâneos, mensagens, conversões e ligações.', 'Elige el objetivo Clientes potenciales. Fíjate en el “Ideal para”: formularios en el sitio e instantáneos, mensajes, conversiones y llamadas.') },
    { alvo: '[data-t=btn-continuar-obj]', clique: true, garante: em('campanha', function () { SIMLD.zera(); SIMLD.camp({ dlg: true, obj: 'Leads' }) }), tit: T('Continuar', 'Continuar'), txt: T('Clique em Continuar. Nasce um rascunho com campanha, conjunto e anúncio.', 'Haz clic en Continuar. Nace un borrador con campaña, conjunto y anuncio.') },
    { alvo: '[data-t=nivel-conj]', clique: true, garante: em('campanha', function () { SIMLD.zera(); SIMLD.camp({ criado: true, nivel: 'camp' }) }), tit: T('Onde se escolhe o local', 'Dónde se elige el lugar'), txt: T('O local da conversão fica no conjunto de anúncios. Clique em “Novo conjunto de anúncios de Leads”.', 'El lugar de conversión está en el conjunto de anuncios. Haz clic en el conjunto de anuncios.') },
    { alvo: '[data-t=aviso-dataset]', garante: em('campanha', function () { SIMLD.zera(); SIMLD.camp({ criado: true, nivel: 'conj' }) }), tit: T('O padrão pede Pixel', 'El valor predeterminado pide píxel'), txt: T('O padrão é “Formulários no site e instantâneos”: ele mistura o site, e por isso pede um conjunto de dados (o antigo Pixel). Sem Pixel, não publica.', 'El valor predeterminado mezcla el sitio, y por eso pide un conjunto de datos (el antiguo píxel). Sin píxel, no se publica.') },
    { alvo: '[data-t=sel-local]', clique: true, garante: em('campanha', function () { SIMLD.zera(); SIMLD.camp({ criado: true, nivel: 'conj' }) }), tit: T('Ver os locais', 'Ver los lugares'), txt: T('Clique na caixa do local da conversão.', 'Haz clic en el cuadro del lugar de conversión.') },
    { alvo: '[data-t=local-u2]', clique: true, garante: em('campanha', function () { SIMLD.zera(); SIMLD.camp({ criado: true, nivel: 'conj', localPop: true }) }), tit: T('Só o formulário', 'Solo el formulario'), txt: T('Há locais “Vários” e “Único”. Para o formulário que abre dentro do Facebook e do Instagram, escolha “Formulários instantâneos”.', 'Hay lugares “Varios” y “Único”. Para el formulario que se abre dentro de Facebook e Instagram, elige “Formularios instantáneos”.') },
    { alvo: '[data-t=aviso-termos]', fim: true, semVolta: true, garante: em('campanha', function () { SIMLD.zera(); SIMLD.camp({ criado: true, nivel: 'conj', local: 'Formulários instantâneos' }) }), tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Com formulários instantâneos aparecem a Página e o aviso dos Termos para Anúncios de Cadastros, que precisam estar aceitos para a Página. O Pixel não é mais exigido.', 'Con formularios instantáneos aparecen la Página y el aviso de los Términos de anuncios para clientes potenciales, que deben estar aceptados para la Página. El píxel ya no se exige.') }
  ];
  TOURS['criar-formulario'] = [
    { alvo: '[data-t=btn-criar-form]', clique: true, garante: em('formularios', function () { SIMLD.zera() }), tit: T('Formulários instantâneos', 'Formularios instantáneos'), txt: T('No Meta Business Suite, em Formulários instantâneos, clique em Criar formulário.', 'En Meta Business Suite, en Formularios instantáneos, haz clic en Crear formulario.') },
    { alvo: '[data-t=j-avancar]', clique: true, garante: em('formularios', function () { SIMLD.zera(); SIMLD.janela() }), tit: T('Novo ou duplicado', 'Nuevo o duplicado'), txt: T('Dá para começar do zero ou duplicar um formulário que já existe. Deixe “Novo formulário” e clique em Avançar.', 'Se puede empezar de cero o duplicar uno existente. Deja “Nuevo formulario” y haz clic en Siguiente.') },
    { alvo: '[data-t=fNome]', cond: function () { return ld().D && ld().D.nome.trim().length > 3 && !/sem título/.test(ld().D.nome) }, garante: ed(1, { nome: 'Formulário sem título 29/10/2026 23:25' }), tit: T('Dê um nome', 'Ponle un nombre'), txt: T('O nome só aparece no Gerenciador de Anúncios. Troque “Formulário sem título…” por algo que você reconheça, como “Orçamento de caneca”.', 'El nombre solo aparece en el Administrador de anuncios. Cambia el nombre predeterminado por algo que reconozcas.') },
    { alvo: '[data-t=tipos]', garante: ed(1), tit: T('O tipo de formulário', 'El tipo de formulario'), txt: T('Mais volume = rápido de enviar (padrão). Maior intenção = uma tela para conferir antes de enviar (e pode exigir código no telefone). Criativo avançado = mais imagens e texto da marca.', 'Más volumen = rápido de enviar. Mayor intención = una pantalla para revisar antes de enviar. Creativo avanzado = más imágenes y texto de la marca.') },
    { alvo: '[data-t=btn-avancar]', clique: true, garante: ed(1), tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar para ir à Apresentação.', 'Haz clic en Siguiente para ir a la Presentación.') },
    { alvo: '[data-t=bloco-saudacao]', cond: function () { var d = ld().D; return d && d.tit.trim() && d.desc.trim() }, garante: ed(2, { tit: '', desc: '' }), tit: T('A saudação', 'El saludo'), txt: T('A saudação vem ligada. Se ficar ligada, título e descrição são obrigatórios. Escreva os dois (ou use “Remover saudação”).', 'El saludo viene activado. Si queda activado, título y descripción son obligatorios. Escribe los dos.') },
    { alvo: '[data-t=btn-avancar]', clique: true, garante: ed(2), tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=fDescCont]', cond: function () { var d = ld().D; return d && d.descContato.trim() }, garante: ed(3, { descContato: '' }), tit: T('Como vai usar os dados', 'Cómo usarás los datos'), txt: T('Em Informações de contato, a Descrição é obrigatória: diga como vai usar os dados, por exemplo “Só para mandar o orçamento”.', 'En Información de contacto, la Descripción es obligatoria: di cómo usarás los datos.') },
    { alvo: '[data-t=btn-add-pergunta]', garante: ed(3), tit: T('Perguntas extras', 'Preguntas extra'), txt: T('Aqui dá para somar perguntas: múltipla escolha, resposta curta, condicional e solicitação de hora marcada. E-mail e nome já vêm, preenchidos pelo perfil da pessoa. Clique em Próximo.', 'Aquí se suman preguntas: opción múltiple, respuesta corta, condicional y solicitud de cita. Correo y nombre ya vienen. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-avancar]', clique: true, garante: ed(3), tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=fPolLink]', cond: function () { var d = ld().D; return d && url(d.pol) }, garante: ed(4, { pol: '' }), tit: T('Política de privacidade', 'Política de privacidad'), txt: T('O link é obrigatório na tela (a Central de Ajuda fala em opcional). Cole o endereço da política da loja, começando com https://.', 'El enlace es obligatorio en la pantalla. Pega la dirección de la política de la tienda, empezando con https://.') },
    { alvo: '[data-t=btn-avancar]', clique: true, garante: ed(4), tit: T('Avançar', 'Siguiente'), txt: T('Clique em Avançar.', 'Haz clic en Siguiente.') },
    { alvo: '[data-t=fLink]', cond: function () { var d = ld().D; return d && url(d.link) }, garante: ed(5, { link: '' }), tit: T('O encerramento', 'El cierre'), txt: T('Depois de enviar, a pessoa vê a Mensagem para leads. Com “Ir para o site”, o Link é obrigatório: cole o site da loja.', 'Después de enviar, la persona ve el Mensaje para clientes potenciales. Con “Ir al sitio”, el Enlace es obligatorio.') },
    { alvo: '[data-t=btn-config]', clique: true, garante: ed(5, { idioma: 'English (US)' }), tit: T('O idioma (pegadinha!)', 'El idioma (¡trampa!)'), txt: T('Repare na prévia: está em inglês. O idioma padrão vem English (US). Clique em Configurações.', 'Fíjate en la vista previa: está en inglés. El idioma predeterminado es English (US). Haz clic en Configuración.') },
    { alvo: '[data-t=cfg-idioma]', cond: function () { var d = ld().D; return d && d.idioma === 'Português (Brasil)' }, garante: ed(5, { idioma: 'English (US)', cfg: true }), tit: T('Trocar o idioma', 'Cambiar el idioma'), txt: T('Escolha “Português (Brasil)”. O compartilhamento fica Restrito (padrão): só quem viu o anúncio envia.', 'Elige el idioma de las clientas. El uso compartido queda Restringido (predeterminado).') },
    { alvo: '[data-t=cfg-concluir]', clique: true, garante: ed(5, { cfg: true }), tit: T('Concluir', 'Listo'), txt: T('Clique em Concluir.', 'Haz clic en Listo.') },
    { alvo: '[data-t=btn-criar-final]', clique: true, garante: ed(5), tit: T('Criar formulário', 'Crear formulario'), txt: T('Tudo preenchido: clique em Criar formulário.', 'Todo completo: haz clic en Crear formulario.') },
    { alvo: '[data-t=form-f1]', fim: true, semVolta: true, garante: em('formularios', function () { if (!ld().S.forms.length) SIMLD.exemplo() }), tit: T('Formulário ativo! 🎉', '¡Formulario activo! 🎉'), txt: T('O formulário aparece na lista como Ativo. Atenção: formulário publicado não se edita; para mudar, duplique e ajuste a cópia.', 'El formulario aparece en la lista como Activo. Atención: un formulario publicado no se edita; para cambiarlo, duplícalo y ajusta la copia.') }
  ];
  TOURS['formulario-erros'] = [
    { alvo: '[data-t=btn-criar-final]', clique: true, garante: function () { SIMLD.editor({ passo: 5 }); location.hash = 'formularios'; render() }, tit: T('“Não deixa criar!”', '“¡No me deja crear!”'), txt: T('A Marina foi direto ao fim, sem preencher nada. Clique em Criar formulário para ver o que a tela diz.', 'Marina fue directo al final sin completar nada. Haz clic en Crear formulario para ver qué dice la pantalla.') },
    { alvo: '[data-t=etapa-2]', clique: true, garante: function () { SIMLD.editor({ passo: 5, tentou: true, vis: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 } }); location.hash = 'formularios'; render() }, tit: T('Os ❗ do lado', 'Los ❗ del costado'), txt: T('Cada etapa com problema ganha um ❗. Comece pela Apresentação: clique nela.', 'Cada paso con problema tiene un ❗. Empieza por la Presentación: haz clic en ella.') },
    { alvo: '[data-t=btn-remover-saudacao]', clique: true, garante: function () { SIMLD.editor({ passo: 2, tentou: true, vis: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 } }); location.hash = 'formularios'; render() }, tit: T('Saudação vazia', 'Saludo vacío'), txt: T('O erro diz que o título é necessário com o “cartão de contexto” (a saudação) ligado. Ou preenche, ou remove: clique em Remover saudação.', 'El error dice que el título es necesario con la tarjeta de contexto (el saludo) activada. O completas, o la quitas: haz clic en Quitar saludo.') },
    { alvo: '[data-t=fDescCont]', cond: function () { var d = ld().D; return d && d.descContato.trim() }, garante: function () { SIMLD.editor({ passo: 3, saud: false, tentou: true, vis: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 } }); location.hash = 'formularios'; render() }, tit: T('“Você deve informar…”', '“Debes indicar…”'), txt: T('Em Perguntas, o erro é: “Você deve informar como usará os dados das pessoas.” Escreva a descrição.', 'En Preguntas, el error es que falta decir cómo usarás los datos. Escribe la descripción.') },
    { alvo: '[data-t=fPolLink]', cond: function () { var d = ld().D; return d && url(d.pol) }, garante: function () { SIMLD.editor({ passo: 4, saud: false, descContato: OK_ED.descContato, tentou: true, vis: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 } }); location.hash = 'formularios'; render() }, tit: T('Link da política', 'Enlace de la política'), txt: T('“Forneça um URL válido da Política de Privacidade da empresa.” Cole um endereço completo, com https://. Não vale PDF nem imagem.', 'Pega una dirección completa, con https://. No vale PDF ni imagen.') },
    { alvo: '[data-t=fLink]', cond: function () { var d = ld().D; return d && url(d.link) }, garante: function () { SIMLD.editor({ passo: 5, saud: false, descContato: OK_ED.descContato, pol: OK_ED.pol, tentou: true, vis: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 } }); location.hash = 'formularios'; render() }, tit: T('Link do site', 'Enlace del sitio'), txt: T('No Encerramento, com “Ir para o site”: “Forneça um URL válido de um site.” Cole o site da loja.', 'En el Cierre, con “Ir al sitio”, falta un enlace válido. Pega el sitio de la tienda.') },
    { alvo: '[data-t=btn-criar-final]', clique: true, garante: function () { SIMLD.editor({ passo: 5, saud: false, descContato: OK_ED.descContato, pol: OK_ED.pol, link: OK_ED.link, idioma: 'Português (Brasil)', tentou: true, vis: { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 } }); location.hash = 'formularios'; render() }, tit: T('Agora vai', 'Ahora sí'), txt: T('Sem ❗, clique em Criar formulário.', 'Sin ❗, haz clic en Crear formulario.') },
    { alvo: '[data-t=form-f1]', fim: true, semVolta: true, garante: em('formularios', function () { if (!ld().S.forms.length) SIMLD.exemplo() }), tit: T('Caso resolvido! 🎉', '¡Caso resuelto! 🎉'), txt: T('Quatro campos travam o formulário: saudação ligada e vazia, a descrição de como os dados serão usados, o link da política e o link do site no encerramento.', 'Cuatro campos traban el formulario: saludo activado y vacío, la descripción del uso de datos, el enlace de la política y el enlace del sitio en el cierre.') }
  ];
  TOURS['campanha-leads'] = [
    { alvo: '[data-t=nivel-conj]', clique: true, garante: em('campanha', function () { SIMLD.exemplo(); SIMLD.camp({ criado: true, nivel: 'camp' }) }), tit: T('A campanha de leads', 'La campaña de clientes potenciales'), txt: T('A campanha já nasce como “Campanha de leads Advantage+”, com orçamento da campanha. Vá ao conjunto de anúncios.', 'La campaña ya nace como campaña Advantage+, con presupuesto de la campaña. Ve al conjunto de anuncios.') },
    { alvo: '[data-t=sel-meta]', clique: true, garante: em('campanha', function () { SIMLD.exemplo(); SIMLD.camp({ criado: true, nivel: 'conj', local: 'Formulários instantâneos' }) }), tit: T('Meta de desempenho', 'Objetivo de rendimiento'), txt: T('O local já é Formulários instantâneos. Abra a Meta de desempenho.', 'El lugar ya es Formularios instantáneos. Abre el objetivo de rendimiento.') },
    { alvo: '[data-t=lista-meta]', garante: em('campanha', function () { SIMLD.exemplo(); SIMLD.camp({ criado: true, nivel: 'conj', local: 'Formulários instantâneos', metaPop: true }) }), tit: T('Leads ou leads qualificados', 'Clientes potenciales o calificados'), txt: T('“Maximizar o número de leads” busca quem mais envia. “Leads qualificados” busca quem mais vira cliente, e para isso a Meta precisa saber o que aconteceu: CRM conectado. Clique em Próximo.', '“Maximizar clientes potenciales” busca a quien más envía. “Calificados” busca a quien más se convierte, y para eso Meta necesita el CRM conectado. Haz clic en Siguiente.') },
    { alvo: '[data-t=nivel-anuncio]', clique: true, garante: em('campanha', function () { SIMLD.exemplo(); SIMLD.camp({ criado: true, nivel: 'conj', local: 'Formulários instantâneos' }) }), tit: T('O anúncio', 'El anuncio'), txt: T('O formulário se escolhe no anúncio. Clique em “Novo anúncio de Leads”.', 'El formulario se elige en el anuncio. Haz clic en el anuncio.') },
    { alvo: '[data-t=escolhe-f1]', cond: function () { return ld().S.C.form === 'f1' }, garante: em('campanha', function () { SIMLD.exemplo(); SIMLD.camp({ criado: true, nivel: 'anuncio', local: 'Formulários instantâneos' }) }), tit: T('Escolher o formulário', 'Elegir el formulario'), txt: T('Em Destino › Formulário instantâneo aparecem os formulários Ativos. Escolha o da caneca. (Dá também para criar um ali mesmo.)', 'En Destino › Formulario instantáneo aparecen los formularios activos. Elige el de la taza.') },
    { alvo: '[data-t=chk-email-prof]', garante: em('campanha', function () { SIMLD.exemplo(); SIMLD.camp({ criado: true, nivel: 'anuncio', local: 'Formulários instantâneos', form: 'f1' }) }), tit: T('Filtro de qualidade', 'Filtro de calidad'), txt: T('“Exigir email profissional” só deixa enviar com e-mail de empresa real. Para loja que vende para pessoas, isso derruba quase todos os leads: deixe desmarcado. Clique em Próximo.', '“Exigir correo profesional” solo deja enviar con correo de empresa. Para una tienda que vende a personas, déjalo sin marcar. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-publicar]', fim: true, semVolta: true, garante: em('campanha', function () { SIMLD.exemplo(); SIMLD.camp({ criado: true, nivel: 'anuncio', local: 'Formulários instantâneos', form: 'f1' }) }), tit: T('Pronto para publicar! 🎉', '¡Listo para publicar! 🎉'), txt: T('Na vida real, Publicar põe o anúncio para rodar (e cobra). No treino ele fica apagado. Lembre: anúncio de lead não pode ser direcionado para menores de 18 anos.', 'En la vida real, Publicar pone el anuncio a circular (y cobra). En la práctica queda apagado. Recuerda: no se puede dirigir a menores de 18 años.') }
  ];
  TOURS['onde-ficam-leads'] = [
    { alvo: '[data-t=tabela-forms]', garante: em('formularios', function () { SIMLD.exemplo(); SIMLD.set({ forms: [{ id: 'f1', nome: 'Orçamento de caneca personalizada', status: 'Ativo', criado: '29/10/2026', leads: 37, comp: 'Restrito' }] }) }), tit: T('A lista de formulários', 'La lista de formularios'), txt: T('Em Formulários instantâneos cada formulário mostra o Número de leads. A coluna Cadastros é por onde se baixa (pela Central de Ajuda). Clique em Próximo.', 'En Formularios instantáneos cada formulario muestra el número de clientes potenciales. Haz clic en Siguiente.') },
    { alvo: '[data-t=baixar-f1]', clique: true, garante: em('formularios', function () { SIMLD.exemplo(); SIMLD.set({ forms: [{ id: 'f1', nome: 'Orçamento de caneca personalizada', status: 'Ativo', criado: '29/10/2026', leads: 37, comp: 'Restrito' }] }) }), tit: T('Baixar', 'Descargar'), txt: T('Clique em Baixar.', 'Haz clic en Descargar.') },
    { alvo: '[data-t=aviso-baixar]', garante: em('formularios', function () { SIMLD.exemplo(); SIMLD.set({ forms: [{ id: 'f1', nome: 'Orçamento de caneca personalizada', status: 'Ativo', criado: '29/10/2026', leads: 37, comp: 'Restrito' }], baixou: true }) }), tit: T('90 dias e permissão', '90 días y permiso'), txt: T('Duas regras que explicam quase todo “sumiram meus leads”: só os últimos 90 dias saem no arquivo, e só quem tem permissão baixa. Clique em Próximo.', 'Dos reglas explican casi todo “desaparecieron mis clientes potenciales”: solo los últimos 90 días y solo quien tiene permiso. Haz clic en Siguiente.') },
    { alvo: '[data-t=nav-central]', clique: true, garante: em('formularios', function () { SIMLD.exemplo() }), tit: T('A Central de Leads', 'El Centro de clientes potenciales'), txt: T('Outro lugar dos leads: a Central de Leads. Clique nela.', 'Otro lugar: el Centro de clientes potenciales. Haz clic en él.') },
    { alvo: '[data-t=central-intro]', fim: true, semVolta: true, garante: em('central', function () { SIMLD.exemplo() }), tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('Na primeira vez, a Central de Leads pede aceitar os termos dela. Lá dentro os leads ficam em etapas (pipeline), com responsável e lembretes, e dá para baixar um CSV do que está filtrado.', 'La primera vez pide aceptar sus términos. Adentro, los clientes potenciales quedan en etapas, con responsable y recordatorios.') }
  ];
  // no caminho natural a Marina ainda não tem formulário: a partir daqui ele passa a existir (garante só roda ao recarregar ou voltar)
  function comForm() { if (!ld().S.forms.length) { SIMLD.set({ forms: [exemploForm()], seq: 1 }); render() } }
  TOURS['conectar-crm'] = [
    { alvo: '[data-t=aba-crm]', clique: true, garante: em('formularios', function () { SIMLD.zera() }), tit: T('A aba do CRM', 'La pestaña del CRM'), txt: T('Em Formulários instantâneos, abra a aba Configuração do CRM.', 'En Formularios instantáneos, abre la pestaña de configuración del CRM.') },
    { alvo: '[data-t=aviso-crm]', garante: em('crm', function () { SIMLD.zera() }), tit: T('Precisa de formulário ativo', 'Necesita formulario activo'), txt: T('A aba vira “Integração de leads” e avisa: sem formulário ativo, não dá para conectar um CRM. Clique em Próximo.', 'La pestaña avisa: sin formulario activo no se puede conectar un CRM. Haz clic en Siguiente.') },
    { alvo: '[data-t=btn-conectar-crm]', clique: true, antes: comForm, garante: em('crm', function () { SIMLD.exemplo() }), tit: T('Com formulário ativo', 'Con formulario activo'), txt: T('Agora a Marina tem um formulário ativo. Clique em Conectar CRM.', 'Ahora Marina tiene un formulario activo. Haz clic en Conectar CRM.') },
    { alvo: '[data-t=jan-crm]', garante: em('crm', function () { SIMLD.exemplo(); SIMLD.set({ forms: [exemploForm()], crmPop: true }) }), tit: T('As opções', 'Las opciones'), txt: T('Aparecem atalhos (Excel, Google Sheets, Zapier, HubSpot, Gmail) e a busca com a lista completa. Vários são “by Zapier”: a ponte é o Zapier. Clique em Próximo.', 'Aparecen atajos (Excel, Google Sheets, Zapier, HubSpot, Gmail) y la búsqueda. Varios son “by Zapier”. Haz clic en Siguiente.') },
    { alvo: '[data-t=crm-google-sheets]', clique: true, garante: em('crm', function () { SIMLD.exemplo(); SIMLD.set({ forms: [exemploForm()], crmPop: true }) }), tit: T('Planilha também conta', 'Una planilla también cuenta'), txt: T('Loja pequena nem sempre tem CRM: uma planilha já resolve. Clique em Conectar do Google Sheets.', 'Una tienda pequeña no siempre tiene CRM: una planilla resuelve. Haz clic en Conectar de Google Sheets.') },
    { alvo: '[data-t=crm-escolhido]', garante: em('crm', function () { SIMLD.exemplo(); SIMLD.set({ forms: [exemploForm()], crmSel: 'Google Sheets' }) }), tit: T('Continua no site do CRM', 'Sigue en el sitio del CRM'), txt: T('Daqui a conexão segue no site do CRM. Depois, cada lead novo vai sozinho para lá, sem baixar arquivo. Para tirar: Configurações do perfil › Integrações comerciais. Clique em Próximo.', 'Desde aquí la conexión sigue en el sitio del CRM. Después, cada nuevo cliente potencial va solo. Para quitarla: Integraciones comerciales. Haz clic en Siguiente.') },
    { alvo: '[data-t=nav-teste]', clique: true, garante: em('crm', function () { SIMLD.exemplo(); SIMLD.set({ forms: [exemploForm()], crmSel: 'Google Sheets' }) }), tit: T('Testar', 'Probar'), txt: T('Conectou? Teste antes de anunciar. Clique em Ferramenta de testes.', '¿Conectaste? Prueba antes de anunciar. Haz clic en la herramienta de prueba.') },
    { alvo: '[data-t=btn-criar-lead]', clique: true, garante: em('teste', function () { SIMLD.exemplo() }), tit: T('Diagnóstico e lead de teste', 'Diagnóstico y prueba'), txt: T('A ferramenta mostra o Diagnóstico da Página (permissão de leads, Acesso a leads, administrador). Clique em Criar lead.', 'La herramienta muestra el diagnóstico de la Página. Haz clic en Crear cliente potencial.') },
    { alvo: '[data-t=teste-feito]', fim: true, semVolta: true, garante: em('teste', function () { SIMLD.exemplo(); SIMLD.set({ forms: [exemploForm()], testeLead: true }) }), tit: T('Pronto! 🎉', '¡Listo! 🎉'), txt: T('O lead de teste deve aparecer no CRM. Se não chega, os avisos ⚠ do diagnóstico costumam dizer por quê: falta permissão ou o Acesso a leads não incluiu o CRM.', 'El cliente potencial de prueba debe aparecer en el CRM. Si no llega, los avisos ⚠ del diagnóstico suelen decir por qué.') }
  ];
})();
