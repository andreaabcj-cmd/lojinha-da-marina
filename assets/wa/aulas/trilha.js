/* A trilha: 19 aulas (15 a 18 pedidas pelo pessoal em 28/10/2026; 19 em 29/10) na ordem da história da Marina (roteiro aprovado em 27/10/2026). */
(function () {
  var T = N.T;
  N.TRILHA = [
    ['01', '🔀', T('App ou API? Primeiro descubra qual é', '¿App o API? Primero descubre cuál es')],
    ['02', '🔢', T('O código de verificação não chega', 'El código de verificación no llega')],
    ['03', '⛔', T('Conta banida × conta restrita', 'Cuenta suspendida × cuenta restringida')],
    ['04', '🔐', T('Conta invadida', 'Cuenta robada')],
    ['05', '📲', T('Trocou de celular ou de número', 'Cambió de celular o de número')],
    ['06', '💻', T('Dispositivos conectados', 'Dispositivos vinculados')],
    ['07', '🪪', T('Perfil, nome e selo', 'Perfil, nombre e insignia')],
    ['08', '🛍️', T('Item do catálogo em análise ou rejeitado', 'Artículo del catálogo en revisión o rechazado')],
    ['09', '🗂️', T('Catálogo do Commerce no WhatsApp', 'Catálogo de Commerce en WhatsApp')],
    ['10', '🛒', T('Carrinho, pedido e Pix', 'Carrito, pedido y Pix')],
    ['11', '🤖', T('Mensagem automática não sai', 'El mensaje automático no sale')],
    ['12', '🔗', T('Ligar Página e Instagram', 'Vincular Página e Instagram')],
    ['13', '📣', T('Anúncio para o WhatsApp e transmissão comercial', 'Anuncio a WhatsApp y difusión comercial')],
    ['14', '⚙️', T('API sem mistério', 'API sin misterio')],
    ['15', '➕', T('Pôr um número na conta da API', 'Agregar un número a la cuenta de la API')],
    ['16', '🧩', T('A API passo a passo e os parceiros', 'La API paso a paso y los socios')],
    ['17', '🗑️', T('Excluir × desregistrar o número', 'Eliminar × dar de baja el número')],
    ['18', '🤝', T('O mesmo número no app e na API', 'El mismo número en la app y en la API')],
    ['19', '☑️', T('Selo por notoriedade: Conta comercial oficial', 'Insignia por notoriedad: Cuenta comercial oficial')]
  ].map(function (a) { return { id: a[0], icone: a[1], titulo: a[2] } });
})();

/* atalhos para escrever as aulas */
(function () {
  var T = N.T;
  function tx(x) { return Array.isArray(x) ? T(x[0], x[1]) : x }
  /* tela do celular arrumada do zero (cada passo deixa o cenário igual, para Voltar/Avançar darem sempre o mesmo) */
  N.cel = function (tela, estado) { return function () { CEL.zera(estado); CEL.por(tela) } };
  N.meta = function (o) { return function () { META.por(o) } };
  /* passo do guia: N.P(prep, alvo, [tit pt, es], [txt pt, es], clique, onde) */
  N.P = function (prep, alvo, tit, txt, clique, onde) { return { onde: onde || 'cel', prep: prep, alvo: '[data-t=' + alvo + ']', clique: !!clique, tit: tx(tit), txt: tx(txt) } };
  /* pergunta: N.Q([p pt, es], certa, [[a pt, es] ×4], [[porquê pt, es] ×4]) */
  N.Q = function (p, certa, ops, por) { return { p: tx(p), certa: certa, ops: ops.map(tx), por: por.map(tx) } };
  N.F = function (url, tit, data) { return { url: url, tit: tx(tit), data: data || '28/10/2026' } };
  N.chat = function (lista) { return lista.map(function (m) { return [m[0], T(m[1], m[2])] }) };
})();
