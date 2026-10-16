/* Aba "Feedback" (site publicado): quem usa sugere aulas, ferramentas, melhorias ou avisa de erro.
   As sugestões vão para uma planilha do André via Google Apps Script (window.FEEDBACK_URL, em feedback-config.js).
   A "Área da equipe" pede a senha e lista as respostas; a senha é conferida NO SERVIDOR do André (nunca fica neste site).
   Sem URL configurada: modo teste (tudo fica só no navegador, e a página avisa). */
(function () {
  var LS = 'feedback.local', LIM = { assunto: 120, detalhe: 2000, nome: 60 };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }
  function ler() { try { return JSON.parse(localStorage.getItem(LS) || '[]') } catch (e) { return [] } }
  var TIPOS = [['aula', { pt: 'Sugestão de aula ou módulo', es: 'Sugerencia de clase o módulo' }], ['ferramenta', { pt: 'Sugestão de ferramenta ou simulador', es: 'Sugerencia de herramienta o simulador' }],
    ['melhoria', { pt: 'Melhoria em algo que já existe', es: 'Mejora de algo que ya existe' }], ['erro', { pt: 'Encontrei um erro', es: 'Encontré un error' }], ['outro', { pt: 'Outro assunto', es: 'Otro tema' }]];
  window.FEEDBACK = {
    html: function (T) {
      var on = !!window.FEEDBACK_URL;
      return '<h1 class="pl-h1">💬 ' + T({ pt: 'Feedback', es: 'Feedback' }) + '</h1><p class="pl-lead">' + T({ pt: 'Quer uma aula nova, uma ferramenta, ou viu algo para melhorar? Conte aqui. Cada sugestão é lida.', es: '¿Quieres una clase nueva, una herramienta, o viste algo para mejorar? Cuéntalo aquí. Cada sugerencia se lee.' }) + '</p>' +
        (on ? '' : '<div class="fb-aviso">🧪 ' + T({ pt: 'Modo teste: o envio ainda não está ligado. O que você escrever fica só neste navegador.', es: 'Modo de prueba: el envío aún no está activado. Lo que escribas queda solo en este navegador.' }) + '</div>') +
        '<form class="fb-form" id="fbForm" autocomplete="off"><label>' + T({ pt: 'O que você quer sugerir?', es: '¿Qué quieres sugerir?' }) + '<select id="fbTipo">' + TIPOS.map(function (t) { return '<option value="' + t[0] + '">' + esc(T(t[1])) + '</option>' }).join('') + '</select></label>' +
        '<label>' + T({ pt: 'Assunto (resuma em uma frase)', es: 'Asunto (resume en una frase)' }) + '<input id="fbAssunto" maxlength="' + LIM.assunto + '" required/></label>' +
        '<label>' + T({ pt: 'Detalhes (o que você precisa e por quê)', es: 'Detalles (qué necesitas y por qué)' }) + '<textarea id="fbDetalhe" rows="5" maxlength="' + LIM.detalhe + '"></textarea></label>' +
        '<label>' + T({ pt: 'Seu nome (opcional)', es: 'Tu nombre (opcional)' }) + '<input id="fbNome" maxlength="' + LIM.nome + '"/></label>' +
        '<p class="miudo">🔒 ' + T({ pt: 'Não escreva dados de clientes, senhas nem informações internas da sua empresa.', es: 'No escribas datos de clientes, contraseñas ni información interna de tu empresa.' }) + '</p>' +
        '<input id="fbSite" class="fb-isca" tabindex="-1" aria-hidden="true" autocomplete="off"/>' +
        '<button class="btn" type="submit" id="fbEnviar">' + T({ pt: 'Enviar sugestão', es: 'Enviar sugerencia' }) + '</button> <span id="fbMsg" class="fb-msg" role="status"></span></form>' +
        '<details class="fb-equipe"><summary>🔒 ' + T({ pt: 'Área da equipe', es: 'Área del equipo' }) + '</summary><p class="miudo">' + T({ pt: 'Só quem tem a senha vê as sugestões recebidas.', es: 'Solo quien tiene la contraseña ve las sugerencias recibidas.' }) + '</p>' +
        '<form id="fbEntrar" autocomplete="off"><input type="password" id="fbSenha" placeholder="' + esc(T({ pt: 'Senha', es: 'Contraseña' })) + '" autocomplete="off"/> <button class="btn" type="submit">' + T({ pt: 'Entrar', es: 'Entrar' }) + '</button> <span id="fbMsg2" class="fb-msg" role="status"></span></form><div id="fbLista"></div></details>';
    },
    liga: function (T) {
      var $ = function (s) { return document.getElementById(s) }, URL_ = window.FEEDBACK_URL;
      function post(corpo) { return fetch(URL_, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(corpo) }).then(function (r) { return r.json() }) }
      $('fbForm').onsubmit = function (e) {
        e.preventDefault(); var msg = $('fbMsg');
        if ($('fbSite').value) return;   // isca contra robôs: pessoas não veem este campo
        var ult = +localStorage.getItem('feedback.ult') || 0; if (Date.now() - ult < 20000) { msg.textContent = T({ pt: 'Aguarde um instante antes de enviar outra.', es: 'Espera un momento antes de enviar otra.' }); return }
        var d = { acao: 'enviar', tipo: $('fbTipo').value, assunto: $('fbAssunto').value.trim().slice(0, LIM.assunto), detalhe: $('fbDetalhe').value.trim().slice(0, LIM.detalhe), nome: $('fbNome').value.trim().slice(0, LIM.nome), idioma: (document.documentElement.lang || 'pt').slice(0, 2), quando: new Date().toISOString() };
        if (!d.assunto) return; $('fbEnviar').disabled = true;
        function ok(txt) { localStorage.setItem('feedback.ult', String(Date.now())); msg.textContent = txt; $('fbForm').reset(); $('fbEnviar').disabled = false }
        if (!URL_) { var l = ler(); l.push(d); try { localStorage.setItem(LS, JSON.stringify(l.slice(-100))) } catch (x) { } ok(T({ pt: '✓ Salvo neste navegador (modo teste).', es: '✓ Guardado en este navegador (modo de prueba).' })); return }
        post(d).then(function (r) { if (r && r.ok) ok(T({ pt: '✓ Enviado! Obrigado pela sugestão.', es: '✓ ¡Enviado! Gracias por la sugerencia.' })); else throw 0 })
          .catch(function () { msg.textContent = T({ pt: 'Não consegui enviar agora. Tente de novo em instantes.', es: 'No pude enviar ahora. Inténtalo de nuevo en un momento.' }); $('fbEnviar').disabled = false });
      };
      function lista(itens) {
        $('fbLista').innerHTML = itens.length ? '<ul class="fb-lista">' + itens.slice().reverse().map(function (i) {
          return '<li><b>' + esc(i.assunto) + '</b> <em>' + esc(i.tipo) + '</em><br><span>' + esc(i.detalhe) + '</span><br><small>' + esc(i.nome || '—') + ' · ' + esc(String(i.quando || '').slice(0, 16).replace('T', ' ')) + '</small></li>' }).join('') + '</ul>' : '<p class="miudo">' + T({ pt: 'Nenhuma sugestão ainda.', es: 'Ninguna sugerencia aún.' }) + '</p>';
      }
      $('fbEntrar').onsubmit = function (e) {
        e.preventDefault(); var m = $('fbMsg2');
        if (!URL_) { lista(ler()); m.textContent = T({ pt: 'Modo teste: mostrando só o que foi escrito neste navegador.', es: 'Modo de prueba: mostrando solo lo escrito en este navegador.' }); return }
        post({ acao: 'listar', senha: $('fbSenha').value }).then(function (r) { $('fbSenha').value = ''; if (r && r.ok) { m.textContent = ''; lista(r.itens || []) } else { m.textContent = T({ pt: 'Senha incorreta.', es: 'Contraseña incorrecta.' }); $('fbLista').innerHTML = '' } })
          .catch(function () { m.textContent = T({ pt: 'Não consegui entrar agora.', es: 'No pude entrar ahora.' }) });
      };
    }
  };
})();
