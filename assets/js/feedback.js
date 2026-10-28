/* Aba "Feedback": quem usa sugere aulas, ferramentas, melhorias ou avisa de erro. Sem login: o nome é opcional.
   O envio vai para o Google Forms do responsável (window.FEEDBACK_FORM, em feedback-config.js); as respostas ele lê no próprio Forms.
   O Google não devolve confirmação para outro site (modo no-cors): se a rede bloquear, a página oferece abrir o formulário direto.
   Sem formulário configurado: modo teste (tudo fica só no navegador, e a página avisa). */
(function () {
  var LS = 'feedback.local', LIM = { assunto: 120, detalhe: 2000, nome: 60 };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }
  function ler() { try { return JSON.parse(localStorage.getItem(LS) || '[]') } catch (e) { return [] } }
  // o valor enviado é o texto em português: é assim que as opções estão no Google Forms
  var TIPOS = [['aula', { pt: 'Sugestão de aula ou módulo', es: 'Sugerencia de clase o módulo' }], ['ferramenta', { pt: 'Sugestão de ferramenta ou simulador', es: 'Sugerencia de herramienta o simulador' }],
    ['melhoria', { pt: 'Melhoria em algo que já existe', es: 'Mejora de algo que ya existe' }], ['erro', { pt: 'Encontrei um erro', es: 'Encontré un error' }], ['outro', { pt: 'Outro assunto', es: 'Otro tema' }]];
  function form() { var f = window.FEEDBACK_FORM; return f && f.id ? f : null }
  function linkForm() { var f = form(); return f ? 'https://docs.google.com/forms/d/e/' + f.id + '/viewform' : '' }
  window.FEEDBACK = {
    html: function (T) {
      var on = !!form();
      return '<h1 class="pl-h1">💬 ' + T({ pt: 'Feedback', es: 'Feedback' }) + '</h1><p class="pl-lead">' + T({ pt: 'Quer uma aula nova, uma ferramenta, ou viu algo para melhorar? Conte aqui. Cada sugestão é lida.', es: '¿Quieres una clase nueva, una herramienta, o viste algo para mejorar? Cuéntalo aquí. Cada sugerencia se lee.' }) + '</p>' +
        (on ? '' : '<div class="fb-aviso">🧪 ' + T({ pt: 'Modo teste: o envio ainda não está ligado. O que você escrever fica só neste navegador.', es: 'Modo de prueba: el envío aún no está activado. Lo que escribas queda solo en este navegador.' }) + '</div>') +
        '<form class="fb-form" id="fbForm" autocomplete="off"><label>' + T({ pt: 'O que você quer sugerir?', es: '¿Qué quieres sugerir?' }) + '<select id="fbTipo">' + TIPOS.map(function (t) { return '<option value="' + t[0] + '">' + esc(T(t[1])) + '</option>' }).join('') + '</select></label>' +
        '<label>' + T({ pt: 'Assunto (resuma em uma frase)', es: 'Asunto (resume en una frase)' }) + '<input id="fbAssunto" maxlength="' + LIM.assunto + '" required/></label>' +
        '<label>' + T({ pt: 'Detalhes (o que você precisa e por quê)', es: 'Detalles (qué necesitas y por qué)' }) + '<textarea id="fbDetalhe" rows="5" maxlength="' + LIM.detalhe + '"></textarea></label>' +
        '<label>' + T({ pt: 'Seu nome (opcional)', es: 'Tu nombre (opcional)' }) + '<input id="fbNome" maxlength="' + LIM.nome + '"/></label>' +
        '<p class="miudo">🔒 ' + T({ pt: 'Não precisa entrar com conta. Não escreva dados de clientes, senhas nem informações internas da sua empresa.', es: 'No hace falta iniciar sesión. No escribas datos de clientes, contraseñas ni información interna de tu empresa.' }) + '</p>' +
        '<input id="fbSite" class="fb-isca" tabindex="-1" aria-hidden="true" autocomplete="off"/>' +
        '<button class="btn" type="submit" id="fbEnviar">' + T({ pt: 'Enviar sugestão', es: 'Enviar sugerencia' }) + '</button> <span id="fbMsg" class="fb-msg" role="status"></span></form>' +
        (on ? '<p class="miudo">' + T({ pt: 'Prefere responder direto no Google Forms?', es: '¿Prefieres responder directo en Google Forms?' }) + ' <a href="' + linkForm() + '" target="_blank" rel="noopener">' + T({ pt: 'Abrir o formulário', es: 'Abrir el formulario' }) + ' ↗</a></p>' : '');
    },
    liga: function (T) {
      var $ = function (s) { return document.getElementById(s) }, F = form();
      $('fbForm').onsubmit = function (e) {
        e.preventDefault(); var msg = $('fbMsg');
        if ($('fbSite').value) return;   // isca contra robôs: pessoas não veem este campo
        var ult = +localStorage.getItem('feedback.ult') || 0; if (Date.now() - ult < 20000) { msg.textContent = T({ pt: 'Aguarde um instante antes de enviar outra.', es: 'Espera un momento antes de enviar otra.' }); return }
        var es = (document.documentElement.lang || 'pt').slice(0, 2) === 'es', tipo = TIPOS.filter(function (t) { return t[0] === $('fbTipo').value })[0] || TIPOS[4];
        var d = { tipo: tipo[1].pt, assunto: $('fbAssunto').value.trim().slice(0, LIM.assunto), detalhe: $('fbDetalhe').value.trim().slice(0, LIM.detalhe) + (es ? '\n\n(enviado pela plataforma em espanhol)' : ''), nome: $('fbNome').value.trim().slice(0, LIM.nome) };
        if (!d.assunto) return; $('fbEnviar').disabled = true;
        function ok(txt) { localStorage.setItem('feedback.ult', String(Date.now())); msg.textContent = txt; $('fbForm').reset(); $('fbEnviar').disabled = false }
        if (!F) { var l = ler(); d.quando = new Date().toISOString(); l.push(d); try { localStorage.setItem(LS, JSON.stringify(l.slice(-100))) } catch (x) { } ok(T({ pt: '✓ Salvo neste navegador (modo teste).', es: '✓ Guardado en este navegador (modo de prueba).' })); return }
        var corpo = new URLSearchParams(); Object.keys(F.campos).forEach(function (k) { if (d[k]) corpo.append(F.campos[k], d[k]) });
        fetch('https://docs.google.com/forms/d/e/' + F.id + '/formResponse', { method: 'POST', mode: 'no-cors', body: corpo })
          .then(function () { ok(T({ pt: '✓ Enviado! Obrigado pela sugestão.', es: '✓ ¡Enviado! Gracias por la sugerencia.' })) })
          .catch(function () { msg.innerHTML = esc(T({ pt: 'Não consegui enviar daqui (a rede pode bloquear). Tente pelo', es: 'No pude enviar desde aquí (la red puede bloquearlo). Prueba por el' })) + ' <a href="' + linkForm() + '" target="_blank" rel="noopener">' + esc(T({ pt: 'formulário do Google', es: 'formulario de Google' })) + ' ↗</a>.'; $('fbEnviar').disabled = false });
      };
    }
  };
})();
