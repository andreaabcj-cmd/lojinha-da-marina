/* PORTFÓLIO · AVANÇADO — dentro das telas reais das Configurações do portfólio (sim-portfolio.js, meta-portfolio.html):
   Central de Segurança › Verificação da empresa (Iniciar verificação, documentos recusados) · Usuários › Pessoas › Detalhes › acesso · Informações da empresa › Excluir portfólio.
   Real (Central de Ajuda da Meta, lida em 16/10/2026, PT): “Sobre a verificação da empresa no Meta Business Suite”, “Como verificar sua empresa…” (controle total, Central de Segurança ›
   Iniciar verificação, razão social, endereço, telefone e site com https, conexão por e-mail, telefone, SMS, WhatsApp ou domínio, até 14 dias úteis, editar os dados exige verificar de novo),
   “Por que não consigo iniciar a verificação…”, “Por que os documentos que enviei… não foram suficientes?”, “Quais documentos oficiais preciso carregar…”, “Como alterar as permissões de uma pessoa…”,
   “Como excluir o portfólio empresarial” (exclusão pendente por 24 horas) e “Entenda por que você não consegue excluir seu portfólio empresarial”.
   Real (tela, conta de aula): Configurações do portfólio, menu, Pessoas, Central de Segurança e Informações da empresa (13 e 14/10/2026).
   NÃO clicado de verdade (irreversível / sem necessidade): enviar a verificação, “Excluir empresa permanentemente” e o envio de documentos: essas janelas são do treino (a conferir).
   INVENTADOS: as pessoas (Ana, Bia, Caio), os ativos pendentes e os textos dos botões das janelas novas. Estado em p.av de cada portfólio (sim.portfolio). */
(function () {
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function Tx(pt, es) { return LANG === 'es' ? es : pt }
  var $ = function (s, r) { return (r || document).querySelector(s) };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) };
  var METODOS = [['', 'Escolha um método', 'Elige un método'], ['email', 'E-mail', 'Correo'], ['tel', 'Telefone', 'Teléfono'], ['sms', 'SMS', 'SMS'], ['wpp', 'Mensagem do WhatsApp', 'Mensaje de WhatsApp'], ['dominio', 'Verificação de domínio', 'Verificación de dominio']];
  var DOCS = [['luz', 'Conta de luz da empresa', 'Factura de luz de la empresa'], ['contrato', 'Contrato social da empresa', 'Contrato social de la empresa'], ['registro', 'Formulário de registro preenchido, sem assinatura nem carimbo', 'Formulario de registro completado, sin firma ni sello']];
  var PERM = [['total', 'Controle total', 'Control total'], ['parcial', 'Acesso parcial (só anúncios)', 'Acceso parcial (solo anuncios)'], ['remover', 'Remover acesso', 'Quitar acceso']];
  var BLOQ = [['pagamento', 'Formas de pagamento adicionadas à empresa', 'Formas de pago agregadas a la empresa', 'Remover a forma de pagamento (Configurações › Contas de anúncios › Pagamentos).', 'Quitar la forma de pago (Configuración › Cuentas publicitarias › Pagos).'],
    ['apps', 'Apps conectados ao portfólio', 'Apps conectadas al portafolio', 'Remover o app (Configurações › Contas › Apps).', 'Quitar la app (Configuración › Cuentas › Apps).'],
    ['leads', 'Acesso personalizado a leads em uma Página', 'Acceso personalizado a leads en una Página', 'Restaurar o acesso padrão a leads (Integrações › Acesso a leads).', 'Restaurar el acceso estándar a leads (Integraciones › Acceso a leads).']];
  function O(l) { return l.map(function (o) { return [o[0], LANG === 'es' ? o[2] : o[1]] }) }
  function sel(id, lista, v, tt) { return '<select class="av-in" id="' + id + '" data-t="' + tt + '">' + lista.map(function (o) { return '<option value="' + o[0] + '" data-pt="' + esc(o[1]) + '"' + (o[0] === v ? ' selected' : '') + '>' + esc(o[1]) + '</option>' }).join('') + '</select>' }
  function pf() { return SIMPF.pf() }
  function av() { var p = pf(); if (!p) return null; if (!p.av) p.av = padrao(); return p.av }
  function padrao() { return { verif: { status: 'nao', razao: '', site: '', metodo: '', doc: { tipo: 'luz', nome: false, legivel: false, valido: false, cpf: false } }, bloq: { pagamento: false, apps: false, leads: false }, ciente: false, pendente: false, jan: null, msgPerm: '' } }
  function salva() { SIMPF.grava() }
  function ir(h) { SIMPF.vai(h) }

  /* ---------- casos de treino (usados pelos tutoriais) ---------- */
  function caso(nome) {
    SIMPF.garanteExemplo();
    var D0 = SIMPF.dados(), cur = D0.pfs.filter(function (x) { return x.id === D0.atual })[0];
    if (cur && cur.antigo) { D0.pfs = D0.pfs.filter(function (x) { return !x.antigo }); D0.atual = D0.pfs[0].id }   // recomeçar a partir do portfólio do caso anterior: volta ao da aula
    var p = pf();
    p.pessoas = [{ nome: 'Marina (você)', email: 'marina@lojinha.exemplo', acesso: 'Acesso total', status: 'Ativo', k: 'marina' }, { nome: 'Ana', email: 'ana@lojinha.exemplo', acesso: 'Acesso total', status: 'Ativo', k: 'ana' }, { nome: 'Bia', email: 'bia@lojinha.exemplo', acesso: 'Acesso parcial', status: 'Ativo', k: 'bia' }, { nome: 'Caio (estagiário)', email: 'caio@lojinha.exemplo', acesso: 'Acesso total', status: 'Ativo', k: 'caio' }];
    if (!p.paginas.length) p.paginas.push('Lojinha da Marina');
    var a = p.av = padrao();
    if (nome === 'recusada') { a.verif.status = 'recusada'; a.verif.razao = 'Lojinha da Marina LTDA'; a.verif.site = 'https://lojinha.exemplo.com.br'; a.verif.metodo = 'dominio' }
    if (nome === 'excluir') a.bloq = { pagamento: true, apps: true, leads: true };
    if (nome === 'pagina-outro') {   // a Página da loja ficou no portfólio antigo da Marina; o novo está sem Página
      p.paginas = []; p.conex = {};
      var D = SIMPF.dados(); D.pfs = D.pfs.filter(function (x) { return x === p || !x.antigo });
      D.pfs.push({ id: SIMPF.novoId(), nome: 'Portfólio antigo da Mari', criado: Date.now(), antigo: true, pessoas: [{ nome: 'Marina (você)', email: 'marina@lojinha.exemplo', acesso: 'Acesso total', status: 'Ativo', k: 'marina' }], paginas: ['Lojinha da Marina'], contas: [], igs: [] });
      D.atual = p.id;
    }
    salva(); location.hash = nome === 'verificar' || nome === 'recusada' ? 'info' : nome === 'permissao' ? 'info' : 'info'; SIMPF.render(); aposRender();
  }

  /* ---------- cartões nas telas reais ---------- */
  function statusTxt() { var a = av(); if (!a) return 'Não verificada'; return { nao: 'Não verificada', analise: 'Em análise', recusada: 'Mais informações necessárias', ok: 'Verificada' }[a.verif.status] || 'Não verificada' }
  function cartoes(onde) {
    var a = av(); if (!a) return ''; var v = a.verif;
    if (onde === 'seguranca') {
      var corpo;
      if (v.status === 'nao') corpo = '<p class="miudo">' + Tx('Confirme que o portfólio pertence a uma empresa legítima. Só quem tem controle total do portfólio consegue iniciar. Não dá selo de verificado: isso é o Meta Verified, outra coisa.', 'Confirma que el portafolio pertenece a una empresa legítima. Solo quien tiene control total del portafolio puede iniciar. No da insignia de verificado: eso es Meta Verified, otra cosa.') + '</p><button class="btn" data-av="verif-abrir" data-t="btn-iniciar-verif">' + Tx('Iniciar verificação', 'Iniciar verificación') + '</button>';
      else if (v.status === 'analise') corpo = '<div class="av-aviso ok" data-t="status-verif"><b>✓ ' + Tx('Envio recebido.', 'Envío recibido.') + '</b> ' + Tx('Em análise: uma decisão pode levar até 14 dias úteis. Você recebe uma notificação quando terminar. Se editar os dados da empresa, será preciso verificar de novo.', 'En análisis: una decisión puede tardar hasta 14 días hábiles. Recibes una notificación al terminar. Si editas los datos de la empresa, habrá que verificar de nuevo.') + '</div>';
      else if (v.status === 'recusada') corpo = '<div class="av-aviso verm" data-t="box-motivo"><b>' + Tx('A Meta pediu mais informações.', 'Meta pidió más información.') + '</b> ' + Tx('O documento enviado (uma conta de luz) não comprova a razão social da empresa.', 'El documento enviado (una factura de luz) no comprueba la razón social de la empresa.') + '</div><button class="btn" data-av="docs-abrir" data-t="btn-reenviar-docs">' + Tx('Enviar documentos novamente', 'Enviar documentos nuevamente') + '</button>';
      else if (v.status === 'analise2') corpo = '<div class="av-aviso ok" data-t="status-docs"><b>✓ ' + Tx('Documento reenviado.', 'Documento reenviado.') + '</b> ' + Tx('A análise recomeça. Se a Meta pedir algo a mais e você não responder em até uma semana, será preciso reiniciar a verificação.', 'El análisis recomienza. Si Meta pide algo más y no respondes en hasta una semana, habrá que reiniciar la verificación.') + '</div>';
      else corpo = '<p>✓ ' + Tx('Empresa verificada.', 'Empresa verificada.') + '</p>';
      return '<div class="cartao" data-sem-traduzir="1" data-t="verif-card"><h2>' + Tx('Verificação da empresa', 'Verificación de la empresa') + '</h2>' + corpo + '<p class="conferido pendente">⚠ ' + Tx('Cartão montado pela Central de Ajuda da Meta · a conferir com a tela real', 'Tarjeta armada con el Centro de ayuda de Meta · por confirmar con la pantalla real') + '</p></div>';
    }
    if (onde === 'info') {
      if (a.pendente) return '<div class="cartao" data-sem-traduzir="1"><h2>' + Tx('Exclusão do portfólio', 'Eliminación del portafolio') + '</h2><div class="av-aviso ok" data-t="status-excl"><b>' + Tx('Exclusão pendente por 24 horas.', 'Eliminación pendiente por 24 horas.') + '</b> ' + Tx('Na vida real, depois desse prazo não dá para reabrir o portfólio. (Neste treino nada foi excluído.)', 'En la vida real, pasado ese plazo no se puede reabrir el portafolio. (En esta práctica no se eliminó nada.)') + '</div></div>';
      return '<div class="cartao" data-sem-traduzir="1" data-t="card-excluir"><h2>' + Tx('Excluir portfólio empresarial', 'Eliminar portafolio comercial') + '</h2><div class="av-aviso verm" data-t="aviso-irrev">' + Tx('Excluir o portfólio é definitivo. Se você só quer parar de anunciar, desative as contas de anúncios.', 'Eliminar el portafolio es definitivo. Si solo quieres dejar de anunciar, desactiva las cuentas publicitarias.') + '</div><button class="btn sec" data-av="excl-abrir" data-t="btn-excl-abrir">' + Tx('Excluir portfólio…', 'Eliminar portafolio…') + '</button><p class="conferido pendente">⚠ ' + Tx('Janela montada pela Central de Ajuda da Meta · a conferir com a tela real', 'Ventana armada con el Centro de ayuda de Meta · por confirmar con la pantalla real') + '</p></div>';
    }
    return '';
  }
  function btnDet(x) { return '<button class="lnk" data-av="det" data-k="' + esc(x.k || x.nome) + '" data-t="det-' + esc(x.k || x.nome) + '">' + 'Detalhes' + '</button>' }

  /* ---------- janelas ---------- */
  function siteOk(s) { return /^https:\/\/\S+\.\S+/.test(s || '') }
  function problemasDoc(d) {
    var p = [];
    if (d.tipo === 'luz') p.push(Tx('Conta de serviços públicos só vale para comprovar endereço e telefone; não vale para a razão social.', 'La factura de servicios públicos solo vale para comprobar dirección y teléfono; no vale para la razón social.'));
    if (d.tipo === 'registro') p.push(Tx('Formulário de registro da própria empresa sem assinatura nem carimbo oficial não é aceito.', 'Un formulario de registro de la propia empresa sin firma ni sello oficial no se acepta.'));
    if (!d.nome) p.push(Tx('Confirme que a razão social do documento é igual à das Informações da empresa.', 'Confirma que la razón social del documento es igual a la de la Información de la empresa.'));
    if (!d.legivel) p.push(Tx('O documento precisa estar legível: não pode ser pequeno, desfocado nem corrompido.', 'El documento debe ser legible: no puede ser pequeño, borroso ni dañado.'));
    if (!d.valido) p.push(Tx('O documento não pode estar vencido.', 'El documento no puede estar vencido.'));
    if (!d.cpf) p.push(Tx('Cubra informações pessoais de que a Meta não precisa, como o CPF.', 'Cubre información personal que Meta no necesita, como el CPF.'));
    return p;
  }
  function janela(a) {
    var j = a.jan, v = a.verif, h = '', X = '<button class="x" data-av="fechar" aria-label="' + Tx('Fechar', 'Cerrar') + '">✕</button>';
    if (j.t === 'verif') {
      var pas = '<p class="av-pas">' + [Tx('Informações da empresa', 'Información de la empresa'), Tx('Conexão com a empresa', 'Conexión con la empresa'), Tx('Revisar e enviar', 'Revisar y enviar')].map(function (n, i) { return '<span class="' + (i < j.p ? 'ok' : i === j.p ? 'on' : '') + '">' + (i + 1) + '. ' + n + '</span>' }).join(' › ') + '</p>';
      if (j.p === 0) h = '<h3>' + Tx('Verificar a empresa', 'Verificar la empresa') + X + '</h3>' + pas + '<p>' + Tx('Os dados precisam ser iguais ao registro oficial da empresa.', 'Los datos deben ser iguales al registro oficial de la empresa.') + '</p>' +
        '<label class="campo"><b>' + Tx('Razão social', 'Razón social') + '</b><input id="avRazao" class="av-in" value="' + esc(v.razao) + '" data-t="in-razao"/></label>' +
        '<label class="campo"><b>' + Tx('Endereço', 'Dirección') + '</b><input class="av-in" value="Rua Exemplo, 100, São Paulo" readonly/></label><label class="campo"><b>' + Tx('Telefone', 'Teléfono') + '</b><input class="av-in" value="(11) 5555-0100" readonly/></label>' +
        '<label class="campo"><b>' + Tx('Site da empresa', 'Sitio de la empresa') + '</b><input id="avSite" class="av-in" value="' + esc(v.site) + '" data-t="in-site"/></label>' + (v.site && !siteOk(v.site) ? '<div class="av-aviso verm" data-t="aviso-site">' + Tx('O site precisa carregar e usar uma conexão segura: o endereço começa com https://.', 'El sitio debe cargar y usar una conexión segura: la dirección empieza con https://.') + '</div>' : '') +
        '<div class="rodape-jan"><button class="btn sec" data-av="fechar">' + Tx('Cancelar', 'Cancelar') + '</button><button class="btn" data-av="verif-p1" data-t="btn-av-prox1"' + (v.razao.trim() && siteOk(v.site) ? '' : ' disabled') + '>' + Tx('Avançar', 'Avanzar') + '</button></div>';
      else if (j.p === 1) h = '<h3>' + Tx('Verificar a empresa', 'Verificar la empresa') + X + '</h3>' + pas + '<p><b>' + Tx('Como confirmar a sua conexão com a empresa', 'Cómo confirmar tu conexión con la empresa') + '</b></p>' + sel('avMetodo', O(METODOS), v.metodo, 'sel-metodo') +
        '<p class="miudo">' + Tx('A verificação de domínio confirma que o site é seu, com uma metatag ou um registro de DNS. Se não houver registro correspondente, a Meta pode pedir documentos oficiais.', 'La verificación de dominio confirma que el sitio es tuyo, con una metaetiqueta o un registro DNS. Si no hay registro correspondiente, Meta puede pedir documentos oficiales.') + '</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-av="verif-v0">' + Tx('Voltar', 'Volver') + '</button><button class="btn" data-av="verif-p2" data-t="btn-av-prox2"' + (v.metodo ? '' : ' disabled') + '>' + Tx('Avançar', 'Avanzar') + '</button></div>';
      else h = '<h3>' + Tx('Verificar a empresa', 'Verificar la empresa') + X + '</h3>' + pas + '<div data-t="av-resumo"><p><b>' + esc(v.razao) + '</b><br>' + esc(v.site) + '<br>' + Tx('Confirmação por: ', 'Confirmación por: ') + esc(O(METODOS).filter(function (m) { return m[0] === v.metodo })[0][1]) + '</p></div><p class="miudo">' + Tx('A decisão pode levar até 14 dias úteis. Informação falsa pode levar a restrições.', 'La decisión puede tardar hasta 14 días hábiles. La información falsa puede llevar a restricciones.') + '</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-av="verif-p1v">' + Tx('Voltar', 'Volver') + '</button><button class="btn" data-av="verif-enviar" data-t="btn-enviar-verif">' + Tx('Enviar verificação', 'Enviar verificación') + '</button></div>';
    } else if (j.t === 'docs') {
      var d = v.doc, pr = problemasDoc(d), ck = function (k, id, tx) { return '<label class="av-lin"><input type="checkbox" data-doc="' + k + '"' + (d[k] ? ' checked' : '') + ' data-t="chk-' + id + '"/> ' + tx + '</label>' };
      h = '<h3>' + Tx('Enviar documentos novamente', 'Enviar documentos nuevamente') + X + '</h3><p>' + Tx('Escolha um documento oficial que comprove a razão social da empresa.', 'Elige un documento oficial que compruebe la razón social de la empresa.') + '</p>' + sel('avDoc', O(DOCS), d.tipo, 'sel-doc') +
        ck('nome', 'nome', Tx('A razão social do documento é igual à das Informações da empresa', 'La razón social del documento es igual a la de la Información de la empresa')) + ck('legivel', 'legivel', Tx('O arquivo está legível (alta resolução, sem desfoque)', 'El archivo es legible (alta resolución, sin desenfoque)')) + ck('valido', 'valido', Tx('O documento está dentro da validade', 'El documento está vigente')) + ck('cpf', 'cpf', Tx('Cobri o CPF e outras informações pessoais desnecessárias', 'Cubrí el CPF y otra información personal innecesaria')) +
        '<div class="av-aviso ' + (pr.length ? 'verm' : 'ok') + '" data-t="docs-problemas">' + (pr.length ? '<b>' + Tx('Ainda impede:', 'Aún impide:') + '</b><ul>' + pr.map(function (x) { return '<li>' + x + '</li>' }).join('') + '</ul>' : '<b>✓ ' + Tx('Pronto para reenviar.', 'Listo para reenviar.') + '</b>') + '</div>' +
        '<p class="miudo">' + Tx('Aceitos: contrato social, documento de inscrição ou licença da empresa, documento fiscal do governo, extrato bancário da empresa. Conta de serviços públicos: só para endereço e telefone.', 'Aceptados: contrato social, documento de inscripción o licencia de la empresa, documento fiscal del gobierno, extracto bancario de la empresa. Factura de servicios públicos: solo para dirección y teléfono.') + '</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-av="fechar">' + Tx('Cancelar', 'Cancelar') + '</button><button class="btn" data-av="docs-enviar" data-t="btn-reenviar"' + (pr.length ? ' disabled' : '') + '>' + Tx('Reenviar documento', 'Reenviar documento') + '</button></div>';
    } else if (j.t === 'det') {
      var x = pfPessoa(j.k); if (!x) return '';
      var cur = x.acesso === 'Acesso total' ? 'total' : 'parcial', novo = j.perm || cur;
      h = '<h3>' + esc(x.nome) + X + '</h3><p class="miudo">' + esc(x.email) + '</p><p><b>' + Tx('Acesso ao portfólio empresarial', 'Acceso al portafolio comercial') + '</b><br>' + esc(x.acesso) + '</p>' +
        (cur === 'total' && x.k === 'caio' ? '<div class="av-aviso" data-t="aviso-caio">' + Tx('O Caio é estagiário e tem controle total: acesso demais. Dê só o que ele precisa.', 'Caio es pasante y tiene control total: demasiado acceso. Dale solo lo que necesita.') + '</div>' : '') +
        '<p><b>' + Tx('Gerenciar acesso', 'Administrar acceso') + '</b></p>' + sel('avPerm', O(PERM), novo, 'sel-perm') + '<p class="miudo">' + Tx('Se um parceiro compartilhou o ativo, você só tem as permissões que ele deu.', 'Si un socio compartió el activo, solo tienes los permisos que él dio.') + '</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-av="fechar">' + Tx('Cancelar', 'Cancelar') + '</button><button class="btn" data-av="perm-salvar" data-t="btn-salvar-perm">' + Tx('Salvar', 'Guardar') + '</button></div>';
    } else if (j.t === 'pag-add') {
      h = '<h3>' + Tx('Adicionar uma Página do Facebook existente', 'Agregar una Página de Facebook existente') + X + '</h3><p>' + Tx('Digite o nome ou o endereço da Página. Você precisa ser administrador dela.', 'Escribe el nombre o la dirección de la Página. Debes ser administrador de ella.') + '</p>' +
        '<label class="campo"><b>' + Tx('Página do Facebook', 'Página de Facebook') + '</b><input id="avPag" class="av-in" value="' + esc(j.nome || '') + '" data-t="pag-nome"/></label>' +
        (j.erro ? '<div class="av-aviso verm" data-t="pag-erro">' + j.erro + '</div>' : '') +
        '<div class="rodape-jan"><button class="btn sec" data-av="fechar" data-t="btn-pag-fechar">' + Tx('Fechar', 'Cerrar') + '</button><button class="btn" data-av="pag-add-ok" data-t="btn-pag-add">' + Tx('Adicionar Página', 'Agregar Página') + '</button></div>';
    } else if (j.t === 'pag-remover') {
      h = '<h3>' + Tx('Remover Página do portfólio?', '¿Quitar la Página del portafolio?') + X + '</h3><p>' + Tx('A Página “Lojinha da Marina” sai deste portfólio empresarial. Quem tinha acesso a ela por este portfólio perde o acesso. A Página NÃO é excluída do Facebook.', 'La Página “Lojinha da Marina” sale de este portafolio comercial. Quien tenía acceso a ella por este portafolio pierde el acceso. La Página NO se elimina de Facebook.') + '</p>' +
        '<div class="rodape-jan"><button class="btn sec" data-av="fechar">' + Tx('Cancelar', 'Cancelar') + '</button><button class="btn" data-av="pag-remover-ok" data-t="btn-confirma-remover">' + Tx('Remover', 'Quitar') + '</button></div>';
    } else if (j.t === 'excl') {
      var ativos = BLOQ.filter(function (b) { return a.bloq[b[0]] });
      h = '<h3>' + Tx('Excluir portfólio empresarial', 'Eliminar portafolio comercial') + X + '</h3><p>' + Tx('Antes de excluir, resolva o que impede:', 'Antes de eliminar, resuelve lo que lo impide:') + '</p>' +
        (ativos.length ? '<table class="tabela" data-t="tabela-bloq">' + ativos.map(function (b) { return '<tr><td><b>' + (LANG === 'es' ? b[2] : b[1]) + '</b><br><span class="miudo">' + (LANG === 'es' ? b[4] : b[3]) + '</span></td><td><button class="btn sec" data-av="resolve" data-b="' + b[0] + '" data-t="resolve-' + b[0] + '">' + Tx('Resolver', 'Resolver') + '</button></td></tr>' }).join('') + '</table>' : '<div class="av-aviso ok" data-t="sem-bloq">✓ ' + Tx('Nenhuma pendência.', 'Ninguna pendiente.') + '</div>') +
        '<label class="av-lin"><input type="checkbox" id="avCiente" data-t="chk-ciente"' + (a.ciente ? ' checked' : '') + (ativos.length ? ' disabled' : '') + '/> ' + Tx('Estou ciente de que isso não pode ser revertido.', 'Estoy enterado de que esto no se puede revertir.') + '</label>' +
        '<div class="rodape-jan"><button class="btn sec" data-av="fechar">' + Tx('Cancelar', 'Cancelar') + '</button><button class="btn" data-av="excl-ok" data-t="btn-excluir"' + (ativos.length || !a.ciente ? ' disabled' : '') + '>' + Tx('Excluir (só no treino)', 'Eliminar (solo en la práctica)') + '</button></div>';
    }
    return h;
  }
  function pfPessoa(k) { return pf().pessoas.filter(function (x) { return (x.k || x.nome) === k })[0] }
  function aposRender() {
    var a = av(), f = document.getElementById('avj');
    if (!a || !a.jan) { if (f) f.remove(); return }
    if (!f) { f = document.createElement('div'); f.id = 'avj'; f.className = 'fundo'; f.setAttribute('data-sem-traduzir', '1'); document.body.appendChild(f) }
    f.innerHTML = '<div class="janela" data-t="av-janela">' + janela(a) + '</div>';
    var foco = window.__avFoco; if (foco) { var el = document.getElementById(foco); if (el) { el.focus(); try { el.setSelectionRange(el.value.length, el.value.length) } catch (e) { } } }
  }
  function refaz() { salva(); SIMPF.render(); aposRender() }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-av]'); if (!b || b.disabled) return; var ac = b.getAttribute('data-av'), a = av(); if (!a) return;
    window.__avFoco = null;
    if (ac === 'verif-abrir') { a.jan = { t: 'verif', p: 0 }; refaz() }
    else if (ac === 'docs-abrir') { a.jan = { t: 'docs' }; refaz() }
    else if (ac === 'fechar') { a.jan = null; refaz() }
    else if (ac === 'verif-p1') { a.jan.p = 1; refaz() } else if (ac === 'verif-v0') { a.jan.p = 0; refaz() } else if (ac === 'verif-p2') { a.jan.p = 2; refaz() } else if (ac === 'verif-p1v') { a.jan.p = 1; refaz() }
    else if (ac === 'verif-enviar') { a.verif.status = 'analise'; a.jan = null; refaz() }
    else if (ac === 'docs-enviar') { a.verif.status = 'analise2'; a.jan = null; refaz() }
    else if (ac === 'det') { a.jan = { t: 'det', k: b.getAttribute('data-k') }; refaz() }
    else if (ac === 'perm-salvar') { var x = pfPessoa(a.jan.k), n = a.jan.perm || (x.acesso === 'Acesso total' ? 'total' : 'parcial'); if (n === 'remover') pf().pessoas = pf().pessoas.filter(function (y) { return y !== x }); else x.acesso = n === 'total' ? 'Acesso total' : 'Acesso parcial (só anúncios)'; a.msgPerm = '✓ ' + x.nome + ': ' + (n === 'remover' ? 'acesso removido' : x.acesso); a.jan = null; refaz() }
    else if (ac === 'pag-add') { SIMPF.fechaMenu(); a.jan = { t: 'pag-add', nome: '' }; refaz() }
    else if (ac === 'pag-add-ok') {
      var nome = String(a.jan.nome || '').trim(), dono = SIMPF.dados().pfs.filter(function (x) { return x !== pf() && (x.paginas || []).some(function (n) { return n.toLowerCase() === nome.toLowerCase() }) })[0];
      if (!nome) { a.jan.erro = Tx('Digite o nome da Página.', 'Escribe el nombre de la Página.'); refaz() }
      else if (dono) { a.jan.erro = Tx('Não foi possível adicionar: esta Página já pertence a outro portfólio empresarial (' + esc(dono.nome) + '). Uma Página só pode pertencer a um portfólio. Remova-a do outro portfólio ou peça acesso compartilhado.', 'No se pudo agregar: esta Página ya pertenece a otro portafolio comercial (' + esc(dono.antigo ? 'Portafolio antiguo de Mari' : dono.nome) + '). Una Página solo puede pertenecer a un portafolio. Quítala del otro portafolio o pide acceso compartido.'); refaz() }
      else { if (pf().paginas.indexOf('Lojinha da Marina') < 0) pf().paginas.push('Lojinha da Marina'); a.jan = null; refaz() }
    }
    else if (ac === 'pag-remover') { a.jan = { t: 'pag-remover' }; refaz() }
    else if (ac === 'pag-remover-ok') { pf().paginas = pf().paginas.filter(function (n) { return n !== 'Lojinha da Marina' }); a.jan = null; refaz() }
    else if (ac === 'excl-abrir') { a.jan = { t: 'excl' }; a.ciente = false; refaz() }
    else if (ac === 'resolve') { a.bloq[b.getAttribute('data-b')] = false; refaz() }
    else if (ac === 'excl-ok') { a.pendente = true; a.jan = null; refaz() }
  });
  document.addEventListener('input', function (e) {
    var a = av(); if (!a || !a.jan) return;
    if (e.target.id === 'avPag') { a.jan.nome = e.target.value; a.jan.erro = ''; window.__avFoco = 'avPag'; refaz(); return }
    if (e.target.id === 'avRazao') { a.verif.razao = e.target.value; window.__avFoco = 'avRazao'; refaz() } else if (e.target.id === 'avSite') { a.verif.site = e.target.value; window.__avFoco = 'avSite'; refaz() }
  });
  document.addEventListener('change', function (e) {
    var a = av(); if (!a || !a.jan) return; var t = e.target;
    if (t.id === 'avMetodo') { a.verif.metodo = t.value; refaz() } else if (t.id === 'avDoc') { a.verif.doc.tipo = t.value; refaz() } else if (t.id === 'avPerm') { a.jan.perm = t.value; refaz() } else if (t.id === 'avCiente') { a.ciente = t.checked; refaz() }
    else if (t.getAttribute && t.getAttribute('data-doc')) { a.verif.doc[t.getAttribute('data-doc')] = t.checked; refaz() }
  });
  window.PFAV = { cartoes: cartoes, statusTxt: statusTxt, btnDet: btnDet, aposRender: aposRender, caso: caso, msgPerm: function () { var a = av(); return a && a.msgPerm ? '<div class="av-aviso ok" data-t="status-perm" data-sem-traduzir="1">' + esc(a.msgPerm) + '</div>' : '' } };
  if (window.SIMPF) aposRender();

  /* ---------- tutoriais ---------- */
  var TOURS = window.TOURS = window.TOURS || {};
  function t(pt, es) { return { pt: pt, es: es } }
  function dep(x) { return t(x.pt + ' Clique em Próximo.', x.es + ' Haz clic en Siguiente.') }
  function ca(n) { return function () { if (!window.PFAV) return; var a = av(); if (!a || !window.__avCaso || window.__avCaso !== n) { window.__avCaso = n; PFAV.caso(n) } } }
  var FIM = ' Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta à plataforma.', FIME = ' Haz clic en Terminar. Después, explora a gusto: el botón ↩ de la esquina te lleva de vuelta a la plataforma.';
  function fim(tit, pt, es, alvo) { return { alvo: alvo, fim: true, semVolta: true, tit: tit, txt: t(pt + FIM, es + FIME) } }
  function menu(id, nome, nomeEs) { return { alvo: '[data-t=menu-' + id + ']', clique: true, tit: t(nome, nomeEs), txt: t('No menu da esquerda, clique em ' + nome + '.', 'En el menú de la izquierda, haz clic en ' + nomeEs + '.') } }
  function ir0(h) { return function () { if (location.hash !== '#' + h) location.hash = h } }
  function Z(n) { return function () { PFAV.caso(n) } }
  function bl(from) { return function () { var a = av(); if (!a) return; ir0('info')(); ['pagamento', 'apps', 'leads'].forEach(function (k, i) { if (i >= from) a.bloq[k] = true }); a.ciente = false; a.pendente = false; a.jan = { t: 'excl' }; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() } }   // voltar um passo: as pendências deste passo em diante voltam
  function sem(from) { return function () { var a = av(); if (!a) return; ['nome', 'legivel', 'valido', 'cpf'].forEach(function (k, i) { if (i >= from) a.verif.doc[k] = false }); a.verif.doc.tipo = 'contrato'; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() } }   // voltar um passo e avançar não pode desmarcar o que o passo marca
  TOURS['verificar-empresa'] = [
    { antes: Z('verificar'), alvo: '[data-t=chip]', garante: function () { if (!av() || av().verif.status !== 'nao' || av().jan) PFAV.caso('verificar') }, tit: t('A empresa da Marina', 'La empresa de Marina'), txt: dep(t('A Marina quer liberar um recurso que pede “empresa verificada”. Você está nas Configurações do portfólio dela, com controle total (só assim dá para iniciar a verificação). Confira o nome do portfólio antes de começar.', 'Marina quiere liberar una función que pide “empresa verificada”. Estás en la Configuración de su portafolio, con control total (solo así se puede iniciar la verificación). Revisa el nombre del portafolio antes de empezar.')) },
    Object.assign(menu('seguranca', 'Central de Segurança', 'Centro de seguridad'), { garante: function () { if (!av()) PFAV.caso('verificar') } }),
    { alvo: '[data-t=btn-iniciar-verif]', clique: true, garante: ir0('seguranca'), tit: t('Iniciar verificação', 'Iniciar verificación'), txt: t('No cartão Verificação da empresa, clique em Iniciar verificação.', 'En la tarjeta Verificación de la empresa, haz clic en Iniciar verificación.') },
    { alvo: '[data-t=in-razao]', garante: function () { ir0('seguranca')(); if (av() && !av().jan) { av().jan = { t: 'verif', p: 0 }; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() } }, cond: function () { return /lojinha/i.test((av().verif.razao) || '') }, tit: t('Razão social', 'Razón social'), txt: t('Os dados precisam ser iguais ao registro oficial. Digite a razão social Lojinha da Marina LTDA.', 'Los datos deben ser iguales al registro oficial. Escribe la razón social Lojinha da Marina LTDA.'), dica: t('Digite Lojinha da Marina LTDA.', 'Escribe Lojinha da Marina LTDA.') },
    { alvo: '[data-t=in-site]', cond: function () { return /^https:\/\//.test(av().verif.site || '') }, tit: t('Site com https', 'Sitio con https'), txt: t('O site precisa carregar e usar conexão segura (https://). Digite https://lojinha.exemplo.com.br', 'El sitio debe cargar y usar conexión segura (https://). Escribe https://lojinha.exemplo.com.br'), dica: t('Digite https://lojinha.exemplo.com.br.', 'Escribe https://lojinha.exemplo.com.br.') },
    { alvo: '[data-t=btn-av-prox1]', clique: true, tit: t('Avançar', 'Avanzar'), txt: t('Clique em Avançar.', 'Haz clic en Avanzar.') },
    { alvo: '[data-t=sel-metodo]', cond: function () { return av().verif.metodo === 'dominio' }, tit: t('Confirmar a conexão', 'Confirmar la conexión'), txt: t('Escolha como provar que você representa a empresa. A verificação de domínio confirma que o site é seu.', 'Elige cómo probar que representas a la empresa. La verificación de dominio confirma que el sitio es tuyo.'), dica: t('Escolha “Verificação de domínio”.', 'Elige “Verificación de dominio”.') },
    { alvo: '[data-t=btn-av-prox2]', clique: true, tit: t('Avançar', 'Avanzar'), txt: t('Clique em Avançar.', 'Haz clic en Avanzar.') },
    { alvo: '[data-t=btn-enviar-verif]', clique: true, tit: t('Enviar', 'Enviar'), txt: t('Confira o resumo e clique em Enviar verificação. (Neste treino nada vai para a Meta.)', 'Revisa el resumen y haz clic en Enviar verificación. (En esta práctica nada va a Meta.)') },
    fim(t('Em análise 🎉', '¡En análisis! 🎉'), 'A decisão pode levar até 14 dias úteis e você recebe uma notificação. Lembre: editar os dados depois exige verificar de novo; e a verificação da empresa não dá selo de verificado (isso é o Meta Verified).', 'La decisión puede tardar hasta 14 días hábiles y recibes una notificación. Recuerda: editar los datos después exige verificar de nuevo; y la verificación de la empresa no da insignia de verificado (eso es Meta Verified).', '[data-t=status-verif]')
  ];
  TOURS['corrigir-documento'] = [
    { antes: Z('recusada'), alvo: '[data-t=chip]', garante: function () { if (!av() || av().verif.status === 'nao') PFAV.caso('recusada') }, tit: t('A verificação foi recusada', 'La verificación fue rechazada'), txt: dep(t('A Marina enviou a verificação, mas a Meta pediu mais informações. Você está nas Configurações do portfólio dela.', 'Marina envió la verificación, pero Meta pidió más información. Estás en la Configuración de su portafolio.')) },
    menu('seguranca', 'Central de Segurança', 'Centro de seguridad'),
    { alvo: '[data-t=box-motivo]', garante: ir0('seguranca'), tit: t('O motivo da recusa', 'El motivo del rechazo'), txt: dep(t('O documento enviado foi uma conta de luz, que não comprova a razão social. Conta de serviços públicos só vale para endereço e telefone.', 'El documento enviado fue una factura de luz, que no comprueba la razón social. La factura de servicios públicos solo vale para dirección y teléfono.')) },
    { alvo: '[data-t=btn-reenviar-docs]', clique: true, garante: ir0('seguranca'), tit: t('Enviar de novo', 'Enviar de nuevo'), txt: t('Clique em Enviar documentos novamente.', 'Haz clic en Enviar documentos nuevamente.') },
    { alvo: '[data-t=sel-doc]', garante: function () { ir0('seguranca')(); if (av() && !av().jan) { av().jan = { t: 'docs' }; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() } }, cond: function () { return av().verif.doc.tipo === 'contrato' }, tit: t('Documento aceito', 'Documento aceptado'), txt: t('Escolha um documento que prove a razão social: o contrato social.', 'Elige un documento que pruebe la razón social: el contrato social.'), dica: t('Escolha “Contrato social da empresa”.', 'Elige “Contrato social de la empresa”.') },
    { alvo: '[data-t=chk-nome]', clique: true, garante: function () { ir0('seguranca')(); if (av() && !av().jan) { av().jan = { t: 'docs' }; SIMPF.grava() } sem(0)() }, tit: t('Nome igual', 'Nombre igual'), txt: t('A razão social do documento precisa ser igual à das Informações da empresa. Marque.', 'La razón social del documento debe ser igual a la de la Información de la empresa. Marca.') },
    { alvo: '[data-t=chk-legivel]', clique: true, garante: function () { ir0('seguranca')(); if (av() && !av().jan) { av().jan = { t: 'docs' }; SIMPF.grava() } sem(1)() }, tit: t('Legível', 'Legible'), txt: t('Nada de arquivo pequeno, desfocado ou corrompido. Marque.', 'Nada de archivo pequeño, borroso o dañado. Marca.') },
    { alvo: '[data-t=chk-valido]', clique: true, garante: function () { ir0('seguranca')(); if (av() && !av().jan) { av().jan = { t: 'docs' }; SIMPF.grava() } sem(2)() }, tit: t('Validade', 'Vigencia'), txt: t('O documento não pode estar vencido. Marque.', 'El documento no puede estar vencido. Marca.') },
    { alvo: '[data-t=chk-cpf]', clique: true, garante: function () { ir0('seguranca')(); if (av() && !av().jan) { av().jan = { t: 'docs' }; SIMPF.grava() } sem(3)() }, tit: t('Proteja dados pessoais', 'Protege datos personales'), txt: t('Cubra o CPF e outras informações pessoais que a Meta não precisa. Marque.', 'Cubre el CPF y otra información personal que Meta no necesita. Marca.') },
    { alvo: '[data-t=btn-reenviar]', clique: true, tit: t('Reenviar', 'Reenviar'), txt: t('Sem pendências. Clique em Reenviar documento.', 'Sin pendientes. Haz clic en Reenviar documento.') },
    fim(t('Reenviado 🎉', '¡Reenviado! 🎉'), 'Se a Meta pedir algo a mais e não houver resposta em até uma semana, será preciso reiniciar a verificação. Ao cliente: documento oficial que prove a razão social, legível, válido e com dados pessoais cobertos.', 'Si Meta pide algo más y no hay respuesta en hasta una semana, habrá que reiniciar la verificación. Al cliente: documento oficial que pruebe la razón social, legible, vigente y con datos personales cubiertos.', '[data-t=status-docs]')
  ];
  TOURS['corrigir-permissao'] = [
    { antes: Z('permissao'), alvo: '[data-t=chip]', garante: function () { if (!av()) PFAV.caso('permissao') }, tit: t('Acesso demais', 'Demasiado acceso'), txt: dep(t('A Marina contratou um estagiário, o Caio, e deu a ele controle total do portfólio. Você vai reduzir para o que ele precisa.', 'Marina contrató a un pasante, Caio, y le dio control total del portafolio. Vas a reducir a lo que necesita.')) },
    menu('pessoas', 'Pessoas', 'Personas'),
    { alvo: '[data-t=lista-pessoas]', garante: ir0('pessoas'), tit: t('Quem tem o quê', 'Quién tiene qué'), txt: dep(t('Aqui estão as pessoas do portfólio e o acesso de cada uma. O Caio tem Acesso total.', 'Aquí están las personas del portafolio y el acceso de cada una. Caio tiene Acceso total.')) },
    { alvo: '[data-t=det-caio]', clique: true, garante: ir0('pessoas'), tit: t('Detalhes', 'Detalles'), txt: t('Clique em Detalhes na linha do Caio.', 'Haz clic en Detalles en la fila de Caio.') },
    { alvo: '[data-t=sel-perm]', garante: function () { ir0('pessoas')(); if (av() && !av().jan) { av().jan = { t: 'det', k: 'caio' }; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() } }, cond: function () { return av().jan && av().jan.perm === 'parcial' }, tit: t('Mudar o acesso', 'Cambiar el acceso'), txt: t('Em Gerenciar acesso, escolha “Acesso parcial (só anúncios)”.', 'En Administrar acceso, elige “Acceso parcial (solo anuncios)”.'), dica: t('Escolha “Acesso parcial (só anúncios)”.', 'Elige “Acceso parcial (solo anuncios)”.') },
    { alvo: '[data-t=btn-salvar-perm]', clique: true, tit: t('Salvar', 'Guardar'), txt: t('Clique em Salvar.', 'Haz clic en Guardar.') },
    fim(t('Acesso ajustado 🎉', '¡Acceso ajustado! 🎉'), 'Dar o mínimo de acesso necessário é o jeito seguro. Se um parceiro compartilhou o ativo, você só tem as permissões que ele deu.', 'Dar el mínimo de acceso necesario es la forma segura. Si un socio compartió el activo, solo tienes los permisos que él dio.', '[data-t=lista-pessoas]')
  ];
  TOURS['excluir-portfolio'] = [
    { antes: Z('excluir'), alvo: '[data-t=chip]', garante: function () { if (!av() || !(av().bloq.pagamento || av().bloq.apps || av().bloq.leads || av().pendente)) PFAV.caso('excluir') }, tit: t('Excluir o portfólio?', '¿Eliminar el portafolio?'), txt: dep(t('A Marina quer excluir o portfólio dela. Antes de qualquer clique, confira que ela entende que é definitivo.', 'Marina quiere eliminar su portafolio. Antes de cualquier clic, confirma que entiende que es definitivo.')) },
    menu('info', 'Informações da empresa', 'Información de la empresa'),
    { alvo: '[data-t=aviso-irrev]', garante: ir0('info'), tit: t('Não dá para desfazer', 'No se puede deshacer'), txt: dep(t('Excluir o portfólio é definitivo. Se ela só quer parar de anunciar, basta desativar as contas de anúncios. Aqui vamos treinar a exclusão.', 'Eliminar el portafolio es definitivo. Si solo quiere dejar de anunciar, basta desactivar las cuentas publicitarias. Aquí vamos a practicar la eliminación.')) },
    { alvo: '[data-t=btn-excl-abrir]', clique: true, garante: ir0('info'), tit: t('Excluir portfólio', 'Eliminar portafolio'), txt: t('Clique em Excluir portfólio.', 'Haz clic en Eliminar portafolio.') },
    { alvo: '[data-t=tabela-bloq]', garante: function () { ir0('info')(); if (av() && !av().jan) { av().jan = { t: 'excl' }; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() } }, tit: t('O que impede', 'Qué lo impide'), txt: dep(t('Há três pendências: forma de pagamento, app conectado e acesso personalizado a leads. Cada uma precisa ser resolvida antes de excluir.', 'Hay tres pendientes: forma de pago, app conectada y acceso personalizado a leads. Cada una debe resolverse antes de eliminar.')) },
    { alvo: '[data-t=resolve-pagamento]', clique: true, garante: bl(0), tit: t('Forma de pagamento', 'Forma de pago'), txt: t('Remova a forma de pagamento da empresa.', 'Quita la forma de pago de la empresa.') },
    { alvo: '[data-t=resolve-apps]', clique: true, garante: bl(1), tit: t('Apps', 'Apps'), txt: t('Remova o app conectado.', 'Quita la app conectada.') },
    { alvo: '[data-t=resolve-leads]', clique: true, garante: bl(2), tit: t('Acesso a leads', 'Acceso a leads'), txt: t('Restaure o acesso padrão a leads.', 'Restaura el acceso estándar a leads.') },
    { alvo: '[data-t=chk-ciente]', clique: true, garante: function () { var a = av(); if (!a) return; ir0('info')(); a.bloq = { pagamento: false, apps: false, leads: false }; a.ciente = false; a.pendente = false; a.jan = { t: 'excl' }; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() }, tit: t('Estou ciente', 'Estoy enterado'), txt: t('Sem pendências. Confirme que entendeu que não pode ser revertido.', 'Sin pendientes. Confirma que entendiste que no se puede revertir.') },
    { alvo: '[data-t=btn-excluir]', clique: true, garante: function () { var a = av(); if (!a) return; ir0('info')(); a.bloq = { pagamento: false, apps: false, leads: false }; a.ciente = true; a.pendente = false; a.jan = { t: 'excl' }; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() }, tit: t('Excluir (só no treino)', 'Eliminar (solo en la práctica)'), txt: t('Neste treino nada é excluído de verdade. Clique no botão.', 'En esta práctica nada se elimina de verdad. Haz clic en el botón.') },
    fim(t('Pendente por 24 horas', 'Pendiente por 24 horas'), 'Na vida real, a exclusão fica pendente por 24 horas; depois não dá para reabrir. Sempre confirme com o cliente antes.', 'En la vida real, la eliminación queda pendiente por 24 horas; después no se puede reabrir. Siempre confirma con el cliente antes.', '[data-t=status-excl]')
  ];

  /* Diagnóstico · Contas 02 — a Página da loja está em outro portfólio (um ativo, um portfólio) */
  function irPf(nomeRx) { return function () { var b = [].slice.call(document.querySelectorAll('[data-pf]')).filter(function (x) { return nomeRx.test(x.textContent) })[0]; return b } }
  function ondeEstou(rx, h) { return function () { var D = SIMPF.dados(); var alvo = D.pfs.filter(function (x) { return rx.test(x.nome) })[0]; if (alvo && D.atual !== alvo.id) { D.atual = alvo.id; SIMPF.grava() } ir0(h)(); SIMPF.render(); PFAV.aposRender() } }
  var NOVO = { test: function (s) { return !/antig/i.test(s) } }, ANTIGO = /antig/i;   // “antigo” (PT) e “antiguo” (ES, nome traduzido na tela)   // o novo é o da aula (o nome pode mudar); o antigo é o do caso
  function abrePagAdd() { var a = av(); if (a && (!a.jan || a.jan.t !== 'pag-add')) { a.jan = { t: 'pag-add', nome: '' }; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() } }
  TOURS['pagina-outro-portfolio'] = [
    { antes: Z('pagina-outro'), alvo: '[data-t=chip]', garante: function () { if (!SIMPF.dados().pfs.some(function (x) { return x.antigo })) PFAV.caso('pagina-outro') }, tit: t('Marina: “a Página não entra”', 'Marina: “la Página no entra”'), txt: dep(t('A Marina criou um portfólio novo, mas não consegue colocar a Página da loja nele. Confira o nome do portfólio aberto: é o novo.', 'Marina creó un portafolio nuevo, pero no logra poner la Página de la tienda en él. Revisa el nombre del portafolio abierto: es el nuevo.')) },
    menu('paginas', 'Páginas', 'Páginas'),
    { alvo: '[data-t=add-pagina]', clique: true, garante: ondeEstou(NOVO, 'paginas'), tit: t('Adicionar', 'Agregar'), txt: t('Clique em Adicionar.', 'Haz clic en Agregar.') },
    { alvo: '[data-t=op-pag-existente]', clique: true, garante: function () { ondeEstou(NOVO, 'paginas')(); var b = document.querySelector('[data-t=add-pagina]'); if (b && !document.querySelector('[data-t=op-pag-existente]')) b.click() }, tit: t('Página existente', 'Página existente'), txt: t('Escolha Adicionar uma Página do Facebook existente.', 'Elige Agregar una Página de Facebook existente.') },
    { alvo: '[data-t=pag-nome]', garante: function () { ondeEstou(NOVO, 'paginas')(); abrePagAdd() }, cond: function () { return /lojinha/i.test((av().jan || {}).nome || '') }, tit: t('A Página da loja', 'La Página de la tienda'), txt: t('Digite o nome da Página: Lojinha da Marina.', 'Escribe el nombre de la Página: Lojinha da Marina.'), dica: t('Digite Lojinha da Marina.', 'Escribe Lojinha da Marina.') },
    { alvo: '[data-t=btn-pag-add]', clique: true, tit: t('Adicionar Página', 'Agregar Página'), txt: t('Clique em Adicionar Página.', 'Haz clic en Agregar Página.') },
    { alvo: '[data-t=pag-erro]', garante: function () { ondeEstou(NOVO, 'paginas')(); var a = av(); a.jan = { t: 'pag-add', nome: 'Lojinha da Marina' }; SIMPF.grava(); PFAV.aposRender(); var b = document.querySelector('[data-t=btn-pag-add]'); if (b) b.click() }, tit: t('O problema', 'El problema'), txt: dep(t('A Página já pertence a outro portfólio: o portfólio antigo da Marina. Uma Página só pode pertencer a UM portfólio. Como a Marina controla os dois, ela tira a Página do antigo e põe no novo.', 'La Página ya pertenece a otro portafolio: el portafolio antiguo de Marina. Una Página solo puede pertenecer a UN portafolio. Como Marina controla los dos, la quita del antiguo y la pone en el nuevo.')) },
    { alvo: '[data-t=btn-pag-fechar]', clique: true, tit: t('Fechar', 'Cerrar'), txt: t('Feche esta janela.', 'Cierra esta ventana.') },
    { alvo: '[data-t=chip]', clique: true, garante: ondeEstou(NOVO, 'paginas'), tit: t('Trocar de portfólio', 'Cambiar de portafolio'), txt: t('Clique no nome do portfólio, lá em cima, para trocar.', 'Haz clic en el nombre del portafolio, arriba, para cambiar.') },
    { alvo: irPf(ANTIGO), clique: true, garante: function () { if (location.hash !== '#inicio') location.hash = 'inicio' }, tit: t('O portfólio antigo', 'El portafolio antiguo'), txt: t('Abra o Portfólio antigo da Mari.', 'Abre el Portafolio antiguo de Mari.') },
    menu('paginas', 'Páginas', 'Páginas'),
    { alvo: '[data-t=btn-remover-pag]', clique: true, garante: ondeEstou(ANTIGO, 'paginas'), tit: t('Tirar a Página daqui', 'Quitar la Página de aquí'), txt: t('Aqui está a Página da loja. Clique em Remover (ela sai do portfólio, mas NÃO é excluída do Facebook).', 'Aquí está la Página de la tienda. Haz clic en Quitar (sale del portafolio, pero NO se elimina de Facebook).') },
    { alvo: '[data-t=btn-confirma-remover]', clique: true, garante: function () { ondeEstou(ANTIGO, 'paginas')(); var a = av(); if (a && !a.jan) { a.jan = { t: 'pag-remover' }; SIMPF.grava(); PFAV.aposRender() } }, tit: t('Confirmar', 'Confirmar'), txt: t('Confirme em Remover.', 'Confirma en Quitar.') },
    { alvo: '[data-t=chip]', clique: true, garante: ondeEstou(ANTIGO, 'paginas'), tit: t('Voltar ao portfólio novo', 'Volver al portafolio nuevo'), txt: t('Agora troque para o portfólio novo.', 'Ahora cambia al portafolio nuevo.') },
    { alvo: irPf(NOVO), clique: true, garante: function () { if (location.hash !== '#inicio') location.hash = 'inicio' }, tit: t('O portfólio novo', 'El portafolio nuevo'), txt: t('Abra o portfólio novo (o que não é o antigo).', 'Abre el portafolio nuevo (el que no es el antiguo).') },
    menu('paginas', 'Páginas', 'Páginas'),
    { alvo: '[data-t=add-pagina]', clique: true, garante: ondeEstou(NOVO, 'paginas'), tit: t('Adicionar de novo', 'Agregar de nuevo'), txt: t('Clique em Adicionar.', 'Haz clic en Agregar.') },
    { alvo: '[data-t=op-pag-existente]', clique: true, garante: function () { ondeEstou(NOVO, 'paginas')(); var b = document.querySelector('[data-t=add-pagina]'); if (b && !document.querySelector('[data-t=op-pag-existente]')) b.click() }, tit: t('Página existente', 'Página existente'), txt: t('Escolha Adicionar uma Página do Facebook existente.', 'Elige Agregar una Página de Facebook existente.') },
    { alvo: '[data-t=pag-nome]', garante: function () { ondeEstou(NOVO, 'paginas')(); abrePagAdd() }, cond: function () { return /lojinha/i.test((av().jan || {}).nome || '') }, tit: t('A Página da loja', 'La Página de la tienda'), txt: t('Digite: Lojinha da Marina.', 'Escribe: Lojinha da Marina.'), dica: t('Digite Lojinha da Marina.', 'Escribe Lojinha da Marina.') },
    { alvo: '[data-t=btn-pag-add]', clique: true, tit: t('Adicionar Página', 'Agregar Página'), txt: t('Clique em Adicionar Página.', 'Haz clic en Agregar Página.') },
    fim(t('Página no portfólio novo 🎉', '¡Página en el portafolio nuevo! 🎉'), 'A Página agora pertence ao portfólio novo. Ao cliente: uma Página só pode estar em um portfólio. Se o outro portfólio for dele, ele remove de lá e adiciona aqui; se for de uma agência ou de outra pessoa, peça para eles removerem ou peça acesso compartilhado.', 'La Página ahora pertenece al portafolio nuevo. Al cliente: una Página solo puede estar en un portafolio. Si el otro portafolio es suyo, la quita de allí y la agrega aquí; si es de una agencia o de otra persona, pide que la quiten o pide acceso compartido.', '[data-t=pag-detalhe]')
  ];

  /* Portfólio · aula 04 — o caminho normal: trazer a Página da loja e, depois, criar a conta de anúncios (passos de criar-conta-anuncios).
     Se antes a pessoa fez o caso do Diagnóstico (Página presa no portfólio antigo), o portfólio antigo sai, para a Página entrar sem erro. */
  function ativosInicio() {
    SIMPF.garanteExemplo(); SIMPF.fecha();
    var D = SIMPF.dados(); D.pfs = D.pfs.filter(function (x) { return !x.antigo }); if (!D.pfs.some(function (x) { return x.id === D.atual })) D.atual = D.pfs[0].id;
    SIMPF.pf().paginas = []; SIMPF.grava(); ir0('inicio')(); SIMPF.render(); PFAV.aposRender();
  }
  function paginaDentro() { ondeEstou(NOVO, 'paginas')(); var p = SIMPF.pf(); if (p.paginas.indexOf('Lojinha da Marina') < 0) p.paginas.push('Lojinha da Marina'); var a = av(); if (a) a.jan = null; SIMPF.grava(); SIMPF.render(); PFAV.aposRender() }
  TOURS['ativos-portfolio'] = [
    { alvo: '[data-t=menu-paginas]', clique: true, garante: ativosInicio, tit: t('Os ativos da Marina', 'Los activos de Marina'), txt: t('Para anunciar, o portfólio precisa de duas coisas: a Página da loja e uma conta de anúncios. Comece pela Página: no menu da esquerda, clique em Páginas.', 'Para anunciar, el portafolio necesita dos cosas: la Página de la tienda y una cuenta publicitaria. Empieza por la Página: en el menú de la izquierda, haz clic en Páginas.') },
    { alvo: '[data-t=add-pagina]', clique: true, garante: ondeEstou(NOVO, 'paginas'), tit: t('Adicionar', 'Agregar'), txt: t('Clique em Adicionar.', 'Haz clic en Agregar.') },
    { alvo: '[data-t=op-pag-existente]', clique: true, garante: function () { ondeEstou(NOVO, 'paginas')(); var b = document.querySelector('[data-t=add-pagina]'); if (b && !document.querySelector('[data-t=op-pag-existente]')) b.click() }, tit: t('Página existente', 'Página existente'), txt: t('A Página da loja já existe no Facebook: escolha Adicionar uma Página do Facebook existente.', 'La Página de la tienda ya existe en Facebook: elige Agregar una Página de Facebook existente.') },
    { alvo: '[data-t=pag-nome]', garante: function () { ondeEstou(NOVO, 'paginas')(); abrePagAdd() }, cond: function () { return /lojinha/i.test((av().jan || {}).nome || '') }, tit: t('A Página da loja', 'La Página de la tienda'), txt: t('Digite o nome da Página: Lojinha da Marina. (Para adicionar, você precisa ser administradora dela.)', 'Escribe el nombre de la Página: Lojinha da Marina. (Para agregarla, debes ser administradora de ella.)'), dica: t('Digite Lojinha da Marina.', 'Escribe Lojinha da Marina.') },
    { alvo: '[data-t=btn-pag-add]', clique: true, tit: t('Adicionar Página', 'Agregar Página'), txt: t('Clique em Adicionar Página.', 'Haz clic en Agregar Página.') },
    { alvo: '[data-t=pag-detalhe]', garante: paginaDentro, tit: t('A Página entrou ✓', 'La Página entró ✓'), txt: dep(t('A Página da loja agora está no portfólio. Se aparecesse um aviso dizendo que ela pertence a outro portfólio, seria outro caso (está no Diagnóstico › Contas). Agora, a conta de anúncios.', 'La Página de la tienda ahora está en el portafolio. Si apareciera un aviso diciendo que pertenece a otro portafolio, sería otro caso (está en Diagnóstico › Cuentas). Ahora, la cuenta publicitaria.')) }
  ].concat(TOURS['criar-conta-anuncios'] || []);
})();
