/* Entrada da plataforma: pede a senha uma vez por navegador.
   É um "porteiro" para afastar visitas por acaso, não uma segurança de verdade (o site é público).
   Uso: PLAT_PORTA(function(){ ...monta a página... }). Em páginas da loja/simulador basta incluir este arquivo. */
(function () {
  var CHAVE = 'plat.ok', SENHA = 'support.fb.com';
  // senha de quem apresenta: libera o botão Apresentar. Só o hash fica no código (o site é público)
  var ADMIN = 'a680d6b331f5bd414f01194e7d4d86b0ec47ee73cb852d83d54759771fbb4340';
  function hash(t) { try { return crypto.subtle.digest('SHA-256', new TextEncoder().encode(t)).then(function (b) { return Array.prototype.map.call(new Uint8Array(b), function (x) { return ('0' + x.toString(16)).slice(-2) }).join('') }) } catch (e) { return Promise.resolve('') } }
  function ok() { try { return localStorage.getItem(CHAVE) === 'true' } catch (e) { return true } }
  function lang() { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } }
  var TX = { pt: ['Plataforma de treinamento. Digite a senha para entrar.', 'Senha', 'Entrar', 'Senha incorreta. Peça ao seu líder.'],
    es: ['Plataforma de entrenamiento. Escribe la contraseña para entrar.', 'Contraseña', 'Entrar', 'Contraseña incorrecta. Pídela a tu líder.'] };
  window.PLAT_PORTA = function (depois) {
    depois = depois || function () { };
    // ?entrar=1 mostra a entrada de novo (para quem já entrou e quer usar a senha de quem apresenta)
    if (ok() && !/[?&]entrar=1/.test(location.search)) return depois();
    var t = TX[lang()], st = document.createElement('style');
    st.textContent = '.pt-porta{position:fixed;inset:0;z-index:2147483646;display:grid;place-items:center;background:#16294A;padding:20px;font-family:"Segoe UI",system-ui,Arial,sans-serif}' +
      '.pt-caixa{width:min(400px,100%);background:#fff;border:3px solid #16294A;border-radius:18px;box-shadow:6px 6px 0 #F2B632;padding:26px;text-align:center;color:#16294A}' +
      '.pt-caixa h1{margin:10px 0 4px;font-size:24px}.pt-caixa p{color:#3A4D6B;margin:0 0 16px}' +
      '.pt-caixa input{width:100%;box-sizing:border-box;padding:12px;border:2px solid #E2E8F0;border-radius:10px;font:inherit;margin-bottom:10px;text-align:center}' +
      '.pt-caixa button{padding:10px 22px;border-radius:10px;border:2px solid #16294A;background:#2F6FD6;color:#fff;font-weight:800;cursor:pointer;box-shadow:3px 3px 0 #16294A}' +
      '.pt-erro{color:#E0245E;font-size:14px;min-height:20px;margin:8px 0 0!important}';
    document.head.appendChild(st);
    var p = document.createElement('div'); p.className = 'pt-porta';
    p.innerHTML = '<form class="pt-caixa">' + (window.PERSONAGEM ? window.PERSONAGEM('pixel', 5) : '') + '<h1>Lojinha da Marina</h1><p>' + t[0] + '</p>' +
      '<input type="password" autocomplete="off" placeholder="' + t[1] + '" aria-label="' + t[1] + '"/><button type="submit">' + t[2] + '</button><p class="pt-erro"></p></form>';
    (document.body || document.documentElement).appendChild(p);
    var inp = p.querySelector('input'); setTimeout(function () { inp.focus() }, 50);
    p.querySelector('form').onsubmit = function (e) {
      e.preventDefault();
      var v = inp.value.trim().toLowerCase();
      function entra(admin) { try { localStorage.setItem(CHAVE, 'true'); localStorage.setItem('plat.admin', admin ? 'true' : 'false') } catch (x) { } p.remove(); depois() }
      if (v === SENHA) return entra(false);
      hash(v).then(function (h) { if (h === ADMIN) entra(true); else { p.querySelector('.pt-erro').textContent = t[3]; inp.select() } });
    };
  };
  // páginas que não montam a plataforma (loja, simulador): mostra a porta assim que a página carregar
  document.addEventListener('DOMContentLoaded', function () { if (!document.body.hasAttribute('data-tela')) window.PLAT_PORTA() });
})();
