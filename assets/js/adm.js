/* Aba "ADM": só aparece para quem entrou com a senha de admin (plat.admin, em porta.js).
   O site é público, então a aba sozinha não protege nada: os arquivos sobem CIFRADOS (assets/adm, gerados por _ferramentas/cifrar_adm.py)
   e só abrem aqui, com a senha de admin digitada de novo. A senha nunca fica salva; a chave vive só enquanto a página está aberta. */
(function () {
  var chave = null;
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }
  function b64(s) { var b = atob(s), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u }
  function mb(n) { return n < 1048576 ? Math.max(1, Math.round(n / 1024)) + ' KB' : (n / 1048576).toFixed(n < 10485760 ? 1 : 0).replace('.', ',') + ' MB' }
  function admin() { try { return localStorage.getItem('plat.admin') === 'true' } catch (e) { return false } }
  function abre(cifrado) { return crypto.subtle.decrypt({ name: 'AES-GCM', iv: cifrado.slice(0, 12) }, chave, cifrado.slice(12)) }
  function destranca(senha) {
    var D = window.ADM_ARQUIVOS, enc = new TextEncoder();
    return crypto.subtle.importKey('raw', enc.encode(senha.trim().toLowerCase()), 'PBKDF2', false, ['deriveKey'])
      .then(function (k) { return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: b64(D.sal), iterations: D.iter, hash: 'SHA-256' }, k, { name: 'AES-GCM', length: 256 }, false, ['decrypt']) })
      .then(function (k) { chave = k; return abre(b64(D.teste)) })
      .catch(function (e) { chave = null; throw e });
  }
  function baixa(a, aviso) {
    var pedacos = [], i = 0;
    function proxima() {
      if (i >= a.partes.length) return Promise.resolve();
      aviso(i, a.partes.length);
      return fetch(a.partes[i]).then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.arrayBuffer() })
        .then(function (b) { return abre(new Uint8Array(b)) })
        .then(function (p) { pedacos.push(p); i++; return proxima() });
    }
    return proxima().then(function () {
      var url = URL.createObjectURL(new Blob(pedacos, { type: a.tipo })), l = document.createElement('a');
      l.href = url; l.download = a.arquivo; document.body.appendChild(l); l.click(); l.remove();
      setTimeout(function () { URL.revokeObjectURL(url) }, 60000);
    });
  }
  window.ADM = {
    admin: admin,
    html: function (T) {
      if (!admin()) return '<h1 class="pl-h1">🛠️ ADM</h1><p class="pl-lead">' + T({ pt: 'Esta área é só para quem administra a plataforma.', es: 'Esta área es solo para quien administra la plataforma.' }) + '</p>';
      var L = (window.ADM_ARQUIVOS || {}).arquivos || [];
      return '<h1 class="pl-h1">🛠️ ADM</h1><p class="pl-lead">' + T({ pt: 'Área de quem administra a plataforma. Os arquivos ficam trancados: para baixar, digite a senha de admin.', es: 'Área de quien administra la plataforma. Los archivos están protegidos: para descargar, escribe la contraseña de admin.' }) + '</p>' +
        '<form class="adm-senha" id="admForm" autocomplete="off"><input type="password" id="admSenha" placeholder="' + T({ pt: 'Senha de admin', es: 'Contraseña de admin' }) + '" aria-label="' + T({ pt: 'Senha de admin', es: 'Contraseña de admin' }) + '"/>' +
        '<button class="btn" type="submit">🔓 ' + T({ pt: 'Destrancar', es: 'Desbloquear' }) + '</button> <span class="adm-msg" id="admMsg" role="status"></span></form>' +
        '<h2 class="secao-tit">⬇️ ' + T({ pt: 'Arquivos para baixar', es: 'Archivos para descargar' }) + '</h2>' +
        (L.length ? '<ul class="adm-lista">' + L.map(function (a) {
          return '<li><div><b>' + (a.tipo.indexOf('video') === 0 ? '🎬 ' : '📄 ') + esc(T(a.nome)) + '</b>' + (T(a.desc) ? '<p class="miudo">' + esc(T(a.desc)) + '</p>' : '') +
            '<p class="miudo">' + esc(a.arquivo) + ' · ' + mb(a.tamanho) + '</p></div>' +
            '<div class="adm-acao"><button class="btn sec" data-adm="' + esc(a.id) + '" disabled>⬇️ ' + T({ pt: 'Baixar', es: 'Descargar' }) + '</button><span class="adm-prog miudo" id="admP-' + esc(a.id) + '"></span></div></li>';
        }).join('') + '</ul>' : '<p class="miudo">' + T({ pt: 'Nenhum arquivo ainda.', es: 'Ningún archivo todavía.' }) + '</p>');
    },
    liga: function (T) {
      var f = document.getElementById('admForm'); if (!f) return;
      var msg = document.getElementById('admMsg'), L = (window.ADM_ARQUIVOS || {}).arquivos || [];
      function botoes(on) { [].forEach.call(document.querySelectorAll('[data-adm]'), function (b) { b.disabled = !on }) }
      f.onsubmit = function (e) {
        e.preventDefault(); msg.textContent = T({ pt: 'Conferindo…', es: 'Verificando…' });
        destranca(document.getElementById('admSenha').value).then(function () {
          msg.textContent = '✓ ' + T({ pt: 'Destrancado. Escolha o arquivo.', es: 'Desbloqueado. Elige el archivo.' }); botoes(true);
        }, function () { msg.textContent = T({ pt: 'Senha incorreta.', es: 'Contraseña incorrecta.' }); botoes(false) });
      };
      document.addEventListener('click', function (e) {
        var b = e.target.closest && e.target.closest('[data-adm]'); if (!b || !chave) return;
        var a = L.filter(function (x) { return x.id === b.getAttribute('data-adm') })[0], p = document.getElementById('admP-' + a.id);
        b.disabled = true;
        baixa(a, function (i, n) { p.textContent = n > 1 ? T({ pt: 'Baixando parte ', es: 'Descargando parte ' }) + (i + 1) + ' ' + T({ pt: 'de', es: 'de' }) + ' ' + n + '…' : T({ pt: 'Baixando…', es: 'Descargando…' }) })
          .then(function () { p.textContent = '✓ ' + T({ pt: 'Pronto: veja os downloads do navegador.', es: 'Listo: mira las descargas del navegador.' }) },
            function () { p.textContent = T({ pt: 'Não deu para baixar. Confira a internet e tente de novo.', es: 'No se pudo descargar. Revisa la conexión e inténtalo de nuevo.' }) })
          .then(function () { b.disabled = false });
      });
    }
  };
})();
