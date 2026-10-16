/* Simulador do Portfólio empresarial · avançado: verificação da empresa, documentos recusados, permissões e exclusão do portfólio — visual da Lojinha.
   Estado no navegador (localStorage "sim.portfolioav"); nada é enviado à Meta.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Sobre a verificação da empresa no Meta Business Suite”, “Como verificar sua empresa…” (controle total, passos, até 14 dias úteis),
   “Por que não consigo iniciar a verificação…”, “Por que os documentos que enviei… não foram suficientes?”, “Quais documentos oficiais preciso carregar…”, “Como alterar as permissões de uma pessoa…”,
   “Como excluir o portfólio empresarial” e “Entenda por que você não consegue excluir seu portfólio empresarial”.
   Real (tela, conta de aula): Configurações do portfólio › Pessoas e Central de Segurança já vistas no simulador básico (14/10/2026). As telas de envio da verificação, de documentos recusados,
   de “Gerenciar” permissões e de “Excluir empresa permanentemente” NÃO foram clicadas (irreversível / sem necessidade): as telas daqui são do treino (a conferir).
   INVENTADOS para o treino: a conta de aula fictícia, as pessoas (Ana, Bia, Caio), as listas de pendências e os botões “Resolver”.
   URL: meta-portfolioav.html?zerar=1
   Tutoriais (tour.js): ?tour=verificar-empresa | corrigir-documento | corrigir-permissao | excluir-portfolio */
(function () {
  var CONF = '16/10/2026';
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var params = new URLSearchParams(location.search);
  function ler(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
  var METODOS = [['', 'Escolha um método'], ['email', 'E-mail'], ['tel', 'Telefone'], ['sms', 'SMS'], ['wpp', 'Mensagem do WhatsApp'], ['dominio', 'Verificação de domínio']];
  var DOCS = [['luz', 'Conta de luz da empresa'], ['contrato', 'Contrato social da empresa'], ['registro', 'Formulário de registro preenchido, sem assinatura nem carimbo']];
  var BLOQ = [['saldo', 'Contas de anúncios com saldo devedor'], ['pagamento', 'Formas de pagamento adicionadas à empresa'], ['apps', 'Apps conectados ao portfólio'], ['sist', 'Usuários do sistema'], ['ig', 'Conta profissional do Instagram'], ['wpp', 'Conta do WhatsApp Business com número'], ['leads', 'Acesso personalizado a leads em uma Página']];
  var PERM = [['total', 'Controle total'], ['parcial', 'Acesso parcial (só anúncios)'], ['remover', 'Remover acesso']];
  function inicial() {
    return { tab: 'verif', acesso: 'total', razao: '', site: '', metodo: '', enviado: false,
      docs: { tipo: 'luz', nome: false, legivel: false, valido: false, cpf: false, enviado: false },
      pessoas: { ana: 'total', bia: 'parcial', caio: 'total' }, ger: '', salvo: '',
      excl: { saldo: false, pagamento: true, apps: true, sist: false, ig: false, wpp: false, leads: true, ciente: false, feito: false } };
  }
  var S = ler('sim.portfolioav', null) || inicial();
  if (params.get('zerar')) S = inicial();
  function grava() { try { localStorage.setItem('sim.portfolioav', JSON.stringify(S)) } catch (e) { } window.__simPv = { S: S } }
  grava();
  function total() { return S.acesso === 'total' }
  function casca(corpo) { return '<div class="sim-faixa">🧪 Simulador de treinamento do Portfólio empresarial avançado · nada aqui vai para a Meta · <a href="simuladores.html">← voltar à plataforma</a></div>' + corpo }
  function nav() {
    var t = [['verif', '✅ Verificação da empresa'], ['docs', '📄 Documentos recusados'], ['perm', '👥 Permissões'], ['excl', '🗑️ Excluir portfólio']];
    return '<nav class="ss-nav">' + t.map(function (x) { return '<button class="ss-it' + (S.tab === x[0] ? ' on' : '') + '" data-tab="' + x[0] + '" data-t="tab-' + x[0] + '">' + x[1] + '</button>' }).join('') + '</nav>';
  }
  function selOpt(id, lista, v, t) { return '<select class="ga-in" id="' + id + '" data-t="' + t + '">' + lista.map(function (o) { return '<option value="' + o[0] + '" data-pt="' + esc(o[1]) + '"' + (o[0] === v ? ' selected' : '') + '>' + o[1] + '</option>' }).join('') + '</select>' }
  function seuAcesso() {
    return '<p><b>Seu acesso neste portfólio</b> ' + selOpt('pvAcesso', [['total', 'Controle total'], ['parcial', 'Acesso parcial']], S.acesso, 'sel-acesso') + '</p>' +
      (total() ? '' : '<div class="ga-aviso verm" data-t="aviso-parcial">Você não tem controle total do portfólio empresarial: não vê Pessoas, não consegue iniciar a verificação e não pode excluir o portfólio. Peça a quem tem controle total para fazer ou para dar a você esse acesso.</div>');
  }
  function siteOk() { return /^https:\/\/\S+\.\S+/.test(S.site || '') }
  function podeEnviar() { return total() && !!S.razao.trim() && siteOk() && !!S.metodo }
  function telaVerif() {
    var e = S.enviado;
    return '<h1>Verificação da empresa</h1><p class="ss-sub">Central de Segurança › Verificação da empresa. Ajuda a confirmar que o portfólio pertence a uma empresa legítima e a liberar recursos que exigem verificação.</p>' + seuAcesso() +
      '<div class="ga-aviso">Não é o selo do Meta Verified: a verificação da empresa <b>não dá selo de verificado</b>. Se o portfólio não se qualifica, a Central de Segurança mostra “Não se qualifica para verificação”.</div>' +
      (e ? '<div class="ga-aviso ok" data-t="status-verif"><b>✓ Envio recebido.</b> Em análise: uma decisão pode levar até 14 dias úteis. Você receberá uma notificação quando a análise terminar. Se editar os dados da empresa, será preciso refazer a verificação.</div>' :
        '<div class="vf-caixa" data-t="box-dados"><b>Dados da empresa (iguais ao registro oficial)</b>' +
        '<p><input class="ga-in" id="pvRazao" placeholder="Razão social" value="' + esc(S.razao) + '" data-t="in-razao"/></p>' +
        '<p><input class="ga-in" id="pvSite" placeholder="Site da empresa" value="' + esc(S.site) + '" data-t="in-site"/></p>' +
        (S.site && !siteOk() ? '<div class="ga-aviso verm" data-t="aviso-site">O site precisa carregar e usar uma conexão segura: o endereço começa com https://.</div>' : '') +
        '<p><b>Como confirmar a sua conexão com a empresa</b> ' + selOpt('pvMetodo', METODOS, S.metodo, 'sel-metodo') + '</p>' +
        '<p class="miudo">A verificação de domínio confirma que o site é seu, com uma metatag ou um registro de DNS. Se não houver registro correspondente, a Meta pode pedir documentos oficiais.</p>' +
        '<button class="btn" data-acao="enviar-verif" data-t="btn-enviar-verif"' + (podeEnviar() ? '' : ' disabled') + '>Concluído · enviar verificação</button></div>') +
      '<p class="conferido">✓ Controle total, os passos, o https, os métodos de confirmação, o prazo de até 14 dias úteis e a diferença para o Meta Verified vêm dos artigos “Sobre a verificação da empresa” e “Como verificar sua empresa” (Central de Ajuda, ' + CONF + '). ⚠ As telas são do treino (a conferir).</p>';
  }
  function problemasDoc() {
    var d = S.docs, p = [];
    if (d.tipo === 'luz') p.push('Conta de serviços públicos só vale para comprovar endereço e telefone; não vale para a razão social.');
    if (d.tipo === 'registro') p.push('Formulário de registro da própria empresa sem assinatura nem carimbo oficial não é aceito.');
    if (!d.nome) p.push('Confirme que a razão social do documento é igual à das Informações da empresa.');
    if (!d.legivel) p.push('O documento precisa estar legível: não pode ser pequeno, desfocado nem corrompido.');
    if (!d.valido) p.push('O documento não pode estar vencido.');
    if (!d.cpf) p.push('Cubra informações pessoais de que a Meta não precisa, como o CPF.');
    return p;
  }
  function telaDocs() {
    var d = S.docs, pr = problemasDoc();
    var chk = function (k, id, tx) { return '<label class="ga-lin" data-t="lin-' + id + '"><input type="checkbox" data-doc="' + k + '"' + (d[k] ? ' checked' : '') + ' data-t="chk-' + id + '"/><span>' + tx + '</span></label>' };
    return '<h1>Documentos recusados</h1><p class="ss-sub">A Meta avisou que o envio da verificação precisa de mais informações.</p>' + seuAcesso() +
      (d.enviado ? '<div class="ga-aviso ok" data-t="status-docs"><b>✓ Documento reenviado.</b> A análise recomeça; se for pedido algo a mais e você não responder em até uma semana, será preciso reiniciar a verificação.</div>' :
        '<div class="ga-aviso verm" data-t="box-motivo"><b>Motivo informado:</b> o documento enviado (uma conta de luz) não comprova a razão social da empresa.</div>' +
        '<div class="vf-caixa" data-t="box-doc"><b>Documento para reenviar</b> ' + selOpt('pvDoc', DOCS, d.tipo, 'sel-doc') +
        chk('nome', 'nome', 'A razão social do documento é igual à das Informações da empresa') + chk('legivel', 'legivel', 'O arquivo está legível (alta resolução, sem desfoque)') + chk('valido', 'valido', 'O documento está dentro da validade') + chk('cpf', 'cpf', 'Cobri o CPF e outras informações pessoais desnecessárias') +
        '<div class="ga-aviso ' + (pr.length ? 'verm' : 'ok') + '" data-t="docs-problemas">' + (pr.length ? '<b>Ainda impede:</b><ul>' + pr.map(function (x) { return '<li>' + x + '</li>' }).join('') + '</ul>' : '<b>✓ Pronto para reenviar.</b>') + '</div>' +
        '<button class="btn" data-acao="reenviar" data-t="btn-reenviar"' + (pr.length || !total() ? ' disabled' : '') + '>Reenviar documento</button></div>') +
      '<p class="miudo">Documentos aceitos: certificado ou contrato social, documento de inscrição ou licença da empresa, documento fiscal emitido pelo governo, extrato bancário da empresa. Conta de serviços públicos: só para endereço e telefone, com a razão social.</p>' +
      '<p class="conferido">✓ Os motivos e os tipos de documento vêm dos artigos “Por que os documentos que enviei… não foram suficientes?” e “Quais documentos oficiais preciso carregar…” (Central de Ajuda, ' + CONF + '). ⚠ A tela é do treino (a conferir).</p>';
  }
  var PESSOAS = [['ana', 'Ana (você)', 'Dona da Lojinha'], ['bia', 'Bia', 'Atendimento'], ['caio', 'Caio', 'Estagiário']];
  function rotuloPerm(v) { return v === 'total' ? 'Controle total' : v === 'parcial' ? 'Acesso parcial (só anúncios)' : 'Sem acesso' }
  function telaPerm() {
    var linhas = PESSOAS.map(function (p) {
      var v = S.pessoas[p[0]];
      return '<tr data-t="pessoa-' + p[0] + '"><td><b>' + p[1] + '</b><br><span class="miudo">' + p[2] + '</span></td><td>' + rotuloPerm(v) + '</td><td>' + (p[0] === 'ana' ? '' : '<button class="btn" data-ger="' + p[0] + '" data-t="ger-' + p[0] + '"' + (total() ? '' : ' disabled') + '>Gerenciar</button>') + '</td></tr>';
    }).join('');
    var painel = '';
    if (S.ger && total()) {
      painel = '<div class="vf-caixa" data-t="painel-perm"><b>Acesso de ' + esc(PESSOAS.filter(function (p) { return p[0] === S.ger })[0][1]) + ' ao portfólio</b> ' + selOpt('pvPerm', PERM, S.pessoas[S.ger], 'sel-perm') +
        '<p class="miudo">Em um ativo compartilhado por um parceiro (por exemplo, uma agência), você só tem as permissões que o parceiro atribuiu e talvez não possa dar controle total.</p>' +
        '<button class="btn" data-acao="salvar-perm" data-t="btn-salvar-perm">Salvar</button></div>';
    }
    return '<h1>Pessoas</h1><p class="ss-sub">Configurações › Pessoas. Só quem tem controle total do portfólio vê e muda as permissões.</p>' + seuAcesso() +
      (total() ? '<table class="cm-tab" data-t="tabela-pessoas"><thead><tr><th>Pessoa</th><th>Acesso ao portfólio</th><th></th></tr></thead><tbody>' + linhas + '</tbody></table>' + painel : '<div class="ga-aviso verm" data-t="sem-pessoas">O menu “Pessoas” não aparece para quem não tem controle total.</div>') +
      (S.salvo ? '<div class="ga-aviso ok" data-t="status-perm"><b>✓ Permissão salva:</b> ' + esc(S.salvo) + '</div>' : '') +
      '<p class="conferido">✓ O caminho Configurações › Pessoas › nome › Gerenciar › Salvar (ou Remover acesso), a exigência de controle total e a limitação por parceiros vêm do artigo “Como alterar as permissões de uma pessoa…” (Central de Ajuda, ' + CONF + '). ⚠ A tela é do treino (a conferir).</p>';
  }
  function pendentes() { return BLOQ.filter(function (b) { return S.excl[b[0]] }) }
  function telaExcl() {
    var x = S.excl, pend = pendentes();
    var linhas = BLOQ.map(function (b) {
      var p = x[b[0]];
      return '<tr data-t="bloq-' + b[0] + '"><td>' + b[1] + '</td><td>' + (p ? 'Pendente' : '✓ Sem pendência') + '</td><td>' + (p ? '<button class="btn" data-resolve="' + b[0] + '" data-t="resolve-' + b[0] + '">Resolver</button>' : '') + '</td></tr>';
    }).join('');
    return '<h1>Excluir portfólio</h1><p class="ss-sub">Configurações › Informações da empresa › Excluir empresa permanentemente.</p>' + seuAcesso() +
      '<div class="ga-aviso verm" data-t="aviso-irrev"><b>Atenção: não dá para desfazer.</b> Excluir apaga grupos de origens de eventos, a biblioteca de ativos e projetos, e remove seu acesso a ativos de outras empresas. A exclusão fica pendente por 24 horas; depois disso não é possível reabrir. Se você só quer parar de anunciar, pode desativar as contas de anúncios.</div>' +
      (x.feito ? '<div class="ga-aviso ok" data-t="status-excl"><b>✓ Exclusão pendente por 24 horas.</b> Páginas voltam para o perfil pessoal de quem as criou ou podem ir para outro portfólio.</div>' :
        '<table class="cm-tab" data-t="tabela-bloq"><thead><tr><th>O que pode impedir a exclusão</th><th>Situação</th><th></th></tr></thead><tbody>' + linhas + '</tbody></table>' +
        '<label class="ga-lin"><input type="checkbox" id="pvCiente"' + (x.ciente ? ' checked' : '') + ' data-t="chk-ciente"/><span>Entendi que a exclusão não pode ser revertida</span></label>' +
        '<p><button class="btn" data-acao="excluir" data-t="btn-excluir"' + (!pend.length && x.ciente && total() ? '' : ' disabled') + '>Excluir empresa permanentemente</button></p>' +
        (pend.length ? '<div class="ga-aviso" data-t="aviso-pend">Ainda há ' + pend.length + ' pendência(s). Resolva cada uma antes de excluir.</div>' : '')) +
      '<p class="conferido">✓ A lista de bloqueios, o aviso de irreversível e a espera de 24 horas vêm dos artigos “Como excluir o portfólio empresarial” e “Entenda por que você não consegue excluir seu portfólio empresarial” (Central de Ajuda, ' + CONF + '). ⚠ A tela é do treino e nada foi excluído na conta de aula (a conferir).</p>';
  }
  function pagina() {
    var corpo = S.tab === 'verif' ? telaVerif() : S.tab === 'docs' ? telaDocs() : S.tab === 'perm' ? telaPerm() : telaExcl();
    return casca('<div class="ss">' + nav() + '<main class="ss-main">' + corpo + '</main></div>');
  }
  document.addEventListener('click', function (ev) {
    var t = ev.target, c;
    if ((c = t.closest('[data-tab]'))) { S.tab = c.getAttribute('data-tab'); grava(); render(); return }
    if ((c = t.closest('[data-ger]'))) { S.ger = c.getAttribute('data-ger'); S.salvo = ''; grava(); render(); return }
    if ((c = t.closest('[data-resolve]'))) { if (!c.disabled) { S.excl[c.getAttribute('data-resolve')] = false; grava(); render() } return }
    var b = t.closest('[data-acao]'); if (!b || b.disabled) return;
    var a = b.getAttribute('data-acao');
    if (a === 'enviar-verif' && podeEnviar()) S.enviado = true;
    else if (a === 'reenviar' && !problemasDoc().length) S.docs.enviado = true;
    else if (a === 'salvar-perm') { var p = PESSOAS.filter(function (q) { return q[0] === S.ger })[0]; S.salvo = p[1] + ': ' + rotuloPerm(S.pessoas[S.ger]); S.ger = '' }
    else if (a === 'excluir' && !pendentes().length && S.excl.ciente && total()) S.excl.feito = true;
    else return;
    grava(); render();
  });
  document.addEventListener('change', function (ev) {
    var t = ev.target;
    if (t.id === 'pvAcesso') S.acesso = t.value;
    else if (t.id === 'pvMetodo') S.metodo = t.value;
    else if (t.id === 'pvDoc') S.docs.tipo = t.value;
    else if (t.id === 'pvPerm') S.pessoas[S.ger] = t.value;
    else if (t.id === 'pvCiente') S.excl.ciente = t.checked;
    else if (t.hasAttribute && t.hasAttribute('data-doc')) S.docs[t.getAttribute('data-doc')] = t.checked;
    else return;
    grava(); render();
  });
  document.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.id === 'pvRazao') S.razao = t.value; else if (t.id === 'pvSite') { S.site = t.value; var av = $('[data-t=aviso-site]'); if (av && siteOk()) av.remove() } else return;
    grava();
    var bt = $('[data-t=btn-enviar-verif]'); if (bt) bt.disabled = !podeEnviar();
  });
  function render() {
    var foco = document.activeElement && document.activeElement.id;
    $('#app').innerHTML = pagina();
    if (foco) { var el = document.getElementById(foco); if (el && el.focus) { el.focus(); try { var l = el.value.length; el.setSelectionRange(l, l) } catch (e) { } } }
    window.__simPv = { S: S };
  }
  window.SIMPV = { estado: function () { return S }, zera: function () { S = inicial(); grava(); render() }, set: function (o) { for (var k in o) S[k] = o[k]; grava(); render() }, pronto: render };
  render();

  /* ---------- tutoriais guiados ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function T(pt, es) { return { pt: pt, es: es } }
  function pv() { return window.__simPv ? window.__simPv.S : S }
  var Z = function (o) { return function () { SIMPV.zera(); if (o) SIMPV.set(o) } };
  TOURS['verificar-empresa'] = [
    { antes: Z(), alvo: '[data-t=sel-acesso]', garante: Z(), tit: T('Controle total primeiro', 'Primero, control total'), txt: T('Só quem tem controle total do portfólio consegue iniciar a verificação da empresa. Aqui você tem controle total. Clique em Próximo.', 'Solo quien tiene control total del portafolio puede iniciar la verificación de la empresa. Aquí tienes control total. Haz clic en Siguiente.') },
    { alvo: '[data-t=in-razao]', garante: Z(), cond: function () { return /lojinha/i.test(pv().razao || '') }, tit: T('Razão social', 'Razón social'), txt: T('Os dados precisam ser iguais ao registro oficial da empresa. Digite a razão social Lojinha da Marina LTDA.', 'Los datos deben ser iguales al registro oficial de la empresa. Escribe la razón social Lojinha da Marina LTDA.'), dica: T('Digite Lojinha da Marina LTDA.', 'Escribe Lojinha da Marina LTDA.') },
    { alvo: '[data-t=in-site]', garante: Z({ razao: 'Lojinha da Marina LTDA' }), cond: function () { return /^https:\/\//.test(pv().site || '') }, tit: T('Site com https', 'Sitio con https'), txt: T('O site precisa carregar e usar conexão segura, com endereço começando por https://. Digite https://lojinha.exemplo.com.br', 'El sitio debe cargar y usar conexión segura, con dirección que empiece por https://. Escribe https://lojinha.exemplo.com.br'), dica: T('Digite https://lojinha.exemplo.com.br.', 'Escribe https://lojinha.exemplo.com.br.') },
    { alvo: '[data-t=sel-metodo]', garante: Z({ razao: 'Lojinha da Marina LTDA', site: 'https://lojinha.exemplo.com.br' }), cond: function () { return pv().metodo === 'dominio' }, tit: T('Confirmar a conexão', 'Confirmar la conexión'), txt: T('Escolha como provar que você representa a empresa. A verificação de domínio confirma que o site é seu. Escolha “Verificação de domínio”.', 'Elige cómo probar que representas a la empresa. La verificación de dominio confirma que el sitio es tuyo. Elige “Verificación de dominio”.'), dica: T('Escolha “Verificação de domínio”.', 'Elige “Verificación de dominio”.') },
    { alvo: '[data-t=btn-enviar-verif]', clique: true, garante: Z({ razao: 'Lojinha da Marina LTDA', site: 'https://lojinha.exemplo.com.br', metodo: 'dominio' }), tit: T('Enviar', 'Enviar'), txt: T('Tudo preenchido. Clique para enviar a verificação.', 'Todo completo. Haz clic para enviar la verificación.') },
    { alvo: '[data-t=status-verif]', fim: true, semVolta: true, garante: Z({ razao: 'Lojinha da Marina LTDA', site: 'https://lojinha.exemplo.com.br', metodo: 'dominio', enviado: true }), tit: T('Em análise 🎉', '¡En análisis! 🎉'), txt: T('A decisão pode levar até 14 dias úteis e você recebe uma notificação. Lembre: editar os dados depois exige verificar de novo. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta à plataforma.', 'La decisión puede tardar hasta 14 días hábiles y recibes una notificación. Recuerda: editar los datos después exige verificar de nuevo. Haz clic en Concluir. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta a la plataforma.') }
  ];
  TOURS['corrigir-documento'] = [
    { antes: Z({ tab: 'docs' }), alvo: '[data-t=box-motivo]', garante: Z({ tab: 'docs' }), tit: T('O motivo da recusa', 'El motivo del rechazo'), txt: T('A Meta disse que a conta de luz enviada não comprova a razão social. Conta de serviços públicos só vale para endereço e telefone. Clique em Próximo.', 'Meta dijo que la factura de luz enviada no comprueba la razón social. La factura de servicios públicos solo vale para dirección y teléfono. Haz clic en Siguiente.') },
    { alvo: '[data-t=sel-doc]', garante: Z({ tab: 'docs' }), cond: function () { return pv().docs.tipo === 'contrato' }, tit: T('Documento aceito', 'Documento aceptado'), txt: T('Escolha um documento que prove a razão social: o contrato social. Escolha “Contrato social da empresa”.', 'Elige un documento que pruebe la razón social: el contrato social. Elige “Contrato social de la empresa”.'), dica: T('Escolha “Contrato social da empresa”.', 'Elige “Contrato social de la empresa”.') },
    { alvo: '[data-t=chk-nome]', clique: true, garante: Z({ tab: 'docs', docs: { tipo: 'contrato', nome: false, legivel: false, valido: false, cpf: false, enviado: false } }), tit: T('Nome igual', 'Nombre igual'), txt: T('A razão social do documento precisa ser igual à das Informações da empresa. Marque.', 'La razón social del documento debe ser igual a la de la Información de la empresa. Marca.') },
    { alvo: '[data-t=chk-legivel]', clique: true, garante: Z({ tab: 'docs', docs: { tipo: 'contrato', nome: true, legivel: false, valido: false, cpf: false, enviado: false } }), tit: T('Legível', 'Legible'), txt: T('Nada de arquivo pequeno, desfocado ou corrompido. Marque.', 'Nada de archivo pequeño, borroso o dañado. Marca.') },
    { alvo: '[data-t=chk-valido]', clique: true, garante: Z({ tab: 'docs', docs: { tipo: 'contrato', nome: true, legivel: true, valido: false, cpf: false, enviado: false } }), tit: T('Validade', 'Vigencia'), txt: T('O documento não pode estar vencido. Marque.', 'El documento no puede estar vencido. Marca.') },
    { alvo: '[data-t=chk-cpf]', clique: true, garante: Z({ tab: 'docs', docs: { tipo: 'contrato', nome: true, legivel: true, valido: true, cpf: false, enviado: false } }), tit: T('Proteja dados pessoais', 'Protege datos personales'), txt: T('Cubra o CPF e outras informações pessoais que a Meta não precisa. Marque.', 'Cubre el CPF y otra información personal que Meta no necesita. Marca.') },
    { alvo: '[data-t=btn-reenviar]', clique: true, garante: Z({ tab: 'docs', docs: { tipo: 'contrato', nome: true, legivel: true, valido: true, cpf: true, enviado: false } }), tit: T('Reenviar', 'Reenviar'), txt: T('Sem pendências. Clique para reenviar.', 'Sin pendientes. Haz clic para reenviar.') },
    { alvo: '[data-t=status-docs]', fim: true, semVolta: true, garante: Z({ tab: 'docs', docs: { tipo: 'contrato', nome: true, legivel: true, valido: true, cpf: true, enviado: true } }), tit: T('Reenviado 🎉', '¡Reenviado! 🎉'), txt: T('Se a Meta pedir algo a mais e não houver resposta em até uma semana, será preciso reiniciar a verificação. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta à plataforma.', 'Si Meta pide algo más y no hay respuesta en hasta una semana, habrá que reiniciar la verificación. Haz clic en Concluir. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta a la plataforma.') }
  ];
  TOURS['corrigir-permissao'] = [
    { antes: Z({ tab: 'perm' }), alvo: '[data-t=tabela-pessoas]', garante: Z({ tab: 'perm' }), tit: T('Quem tem o quê', 'Quién tiene qué'), txt: T('O Caio é estagiário e tem controle total do portfólio: acesso demais. Vamos reduzir para só anúncios. Clique em Próximo.', 'Caio es pasante y tiene control total del portafolio: demasiado acceso. Vamos a reducirlo a solo anuncios. Haz clic en Siguiente.') },
    { alvo: '[data-t=ger-caio]', clique: true, garante: Z({ tab: 'perm' }), tit: T('Gerenciar', 'Administrar'), txt: T('Clique em Gerenciar na linha do Caio.', 'Haz clic en Administrar en la fila de Caio.') },
    { alvo: '[data-t=sel-perm]', garante: Z({ tab: 'perm', ger: 'caio' }), cond: function () { return pv().pessoas.caio === 'parcial' }, tit: T('Mudar o acesso', 'Cambiar el acceso'), txt: T('Escolha “Acesso parcial (só anúncios)”.', 'Elige “Acceso parcial (solo anuncios)”.'), dica: T('Escolha “Acesso parcial (só anúncios)”.', 'Elige “Acceso parcial (solo anuncios)”.') },
    { alvo: '[data-t=btn-salvar-perm]', clique: true, garante: Z({ tab: 'perm', ger: 'caio', pessoas: { ana: 'total', bia: 'parcial', caio: 'parcial' } }), tit: T('Salvar', 'Guardar'), txt: T('Clique em Salvar.', 'Haz clic en Guardar.') },
    { alvo: '[data-t=status-perm]', fim: true, semVolta: true, garante: Z({ tab: 'perm', pessoas: { ana: 'total', bia: 'parcial', caio: 'parcial' }, salvo: 'Caio: Acesso parcial (só anúncios)' }), tit: T('Acesso ajustado 🎉', '¡Acceso ajustado! 🎉'), txt: T('Dar o mínimo de acesso necessário é o jeito seguro. Se um parceiro compartilhou o ativo, você só tem as permissões que ele deu. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta à plataforma.', 'Dar el mínimo de acceso necesario es la forma segura. Si un socio compartió el activo, solo tienes los permisos que él dio. Haz clic en Concluir. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta a la plataforma.') }
  ];
  TOURS['excluir-portfolio'] = [
    { antes: Z({ tab: 'excl' }), alvo: '[data-t=aviso-irrev]', garante: Z({ tab: 'excl' }), tit: T('Não dá para desfazer', 'No se puede deshacer'), txt: T('Excluir o portfólio é definitivo. Se você só quer parar de anunciar, desative as contas de anúncios. Aqui vamos treinar a exclusão. Clique em Próximo.', 'Eliminar el portafolio es definitivo. Si solo quieres dejar de anunciar, desactiva las cuentas publicitarias. Aquí vamos a practicar la eliminación. Haz clic en Siguiente.') },
    { alvo: '[data-t=tabela-bloq]', garante: Z({ tab: 'excl' }), tit: T('O que impede', 'Qué lo impide'), txt: T('Há três pendências: forma de pagamento, app conectado e acesso personalizado a leads. Cada uma precisa ser resolvida antes. Clique em Próximo.', 'Hay tres pendientes: forma de pago, app conectada y acceso personalizado a leads. Cada una debe resolverse antes. Haz clic en Siguiente.') },
    { alvo: '[data-t=resolve-pagamento]', clique: true, garante: Z({ tab: 'excl' }), tit: T('Forma de pagamento', 'Forma de pago'), txt: T('Remova a forma de pagamento da empresa.', 'Quita la forma de pago de la empresa.') },
    { alvo: '[data-t=resolve-apps]', clique: true, garante: Z({ tab: 'excl', excl: { saldo: false, pagamento: false, apps: true, sist: false, ig: false, wpp: false, leads: true, ciente: false, feito: false } }), tit: T('Apps', 'Apps'), txt: T('Remova o app conectado.', 'Quita la app conectada.') },
    { alvo: '[data-t=resolve-leads]', clique: true, garante: Z({ tab: 'excl', excl: { saldo: false, pagamento: false, apps: false, sist: false, ig: false, wpp: false, leads: true, ciente: false, feito: false } }), tit: T('Acesso a leads', 'Acceso a leads'), txt: T('Restaure o acesso padrão a leads (em Integrações › Acesso a leads).', 'Restaura el acceso estándar a leads (en Integraciones › Acceso a leads).') },
    { alvo: '[data-t=chk-ciente]', clique: true, garante: Z({ tab: 'excl', excl: { saldo: false, pagamento: false, apps: false, sist: false, ig: false, wpp: false, leads: false, ciente: false, feito: false } }), tit: T('Estou ciente', 'Estoy enterado'), txt: T('Confirme que entendeu que não pode ser revertido.', 'Confirma que entendiste que no se puede revertir.') },
    { alvo: '[data-t=btn-excluir]', clique: true, garante: Z({ tab: 'excl', excl: { saldo: false, pagamento: false, apps: false, sist: false, ig: false, wpp: false, leads: false, ciente: true, feito: false } }), tit: T('Excluir (só no treino)', 'Eliminar (solo en el entrenamiento)'), txt: T('Neste simulador nada é excluído de verdade. Clique no botão.', 'En este simulador nada se elimina de verdad. Haz clic en el botón.') },
    { alvo: '[data-t=status-excl]', fim: true, semVolta: true, garante: Z({ tab: 'excl', excl: { saldo: false, pagamento: false, apps: false, sist: false, ig: false, wpp: false, leads: false, ciente: true, feito: true } }), tit: T('Pendente por 24 horas', 'Pendiente por 24 horas'), txt: T('Na vida real, a exclusão fica pendente por 24 horas; depois não dá para reabrir. Sempre confirme com o cliente antes. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta à plataforma.', 'En la vida real, la eliminación queda pendiente por 24 horas; después no se puede reabrir. Confirma siempre con el cliente antes. Haz clic en Concluir. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta a la plataforma.') }
  ];
})();
