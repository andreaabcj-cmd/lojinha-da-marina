/* Práticas guiadas que acontecem na própria plataforma (pratica.html?p=nome).
   Cada prática = uma conversa de atendimento + um roteiro do tour.js (window.TOURS[p.tour]). Textos {pt, es}. */
window.PRATICAS = window.PRATICAS || {};
window.TOURS = window.TOURS || {};

/* ---------- Pedir e ler o print do cliente (aula 02) ---------- */
window.PRATICAS['print-pixel'] = {
  tour: 'print-pixel',
  titulo: { pt: 'Pedir e ler o print do cliente', es: 'Pedir y leer la captura del cliente' },
  resumo: { pt: 'Quando você não consegue ver sozinho, o cliente mostra. O segredo é pedir o print com o caminho exato.', es: 'Cuando no puedes verlo solo, el cliente lo muestra. El secreto es pedir la captura con el camino exacto.' },
  dialogo: [
    ['marina', { pt: 'Meu Pixel não está funcionando, acho. 😕', es: 'Creo que mi Pixel no está funcionando. 😕' }],
    ['rafa', { id: 'pedido1', pt: 'Vamos conferir juntos! Abra o Gerenciador de Eventos, clique no seu Pixel e me mande um print da tela inteira, sem cortar, mostrando o nome e o número de identificação.', es: '¡Revisémoslo juntos! Abre el Administrador de eventos, haz clic en tu Pixel y envíame una captura de la pantalla completa, sin recortar, donde se vea el nombre y el número de identificación.' }],
    ['marina', { foto: 'gerenciador', legenda: { pt: 'Marina enviou uma foto.', es: 'Marina envió una foto.' } }],
    ['rafa', { id: 'pedido2', pt: 'Obrigado! Agora abra o seu site, aperte Ctrl+U (abre o código da página), depois Ctrl+F e procure por fbq. Me mande um print dessa parte.', es: '¡Gracias! Ahora abre tu sitio, presiona Ctrl+U (abre el código de la página), luego Ctrl+F y busca fbq. Envíame una captura de esa parte.' }],
    ['marina', { foto: 'codigo-base', legenda: { pt: 'Marina enviou uma foto.', es: 'Marina envió una foto.' } }]
  ],
  pergunta: {
    txt: { pt: 'O número do site (init) é igual ao ID do Pixel no Gerenciador de Eventos?', es: '¿El número del sitio (init) es igual al ID del Pixel en el Administrador de eventos?' },
    opcoes: [
      { certa: true, txt: { pt: 'Sim, são iguais', es: 'Sí, son iguales' }, fb: { pt: 'Isso! 1234567890123456 nos dois: o site envia para o Pixel certo.', es: '¡Eso! 1234567890123456 en los dos: el sitio envía al Pixel correcto.' } },
      { certa: false, txt: { pt: 'Não, são diferentes', es: 'No, son distintos' }, fb: { pt: 'Confira de novo, número por número: aqui eles são iguais. Quando são diferentes, os eventos vão para outro Pixel.', es: 'Revisa otra vez, número por número: aquí son iguales. Cuando son distintos, los eventos van a otro Pixel.' } }
    ]
  }
};

function tpRespondeu() { return !!document.querySelector('.pp-op.certa') }
window.TOURS['print-pixel'] = [
  { alvo: '[data-msg=pedido1]',
    tit: { pt: 'Peça com o caminho exato', es: 'Pide con el camino exacto' },
    txt: { pt: 'Um pedido vago (“me manda um print”) volta com o print errado. Diga ONDE clicar e O QUE precisa aparecer: o Pixel aberto, com o nome e o número.', es: 'Un pedido vago (“mándame una captura”) vuelve con la captura equivocada. Di DÓNDE hacer clic y QUÉ tiene que verse: el Pixel abierto, con el nombre y el número.' },
    dica: { pt: 'Peça a tela inteira, sem cortar. E lembre o cliente de não mandar senhas nem dados de cartão.', es: 'Pide la pantalla completa, sin recortar. Y recuerda al cliente que no envíe contraseñas ni datos de tarjeta.' } },
  { alvo: '[data-foto=gerenciador] .fg-id',
    tit: { pt: 'Print 1: o ID do Pixel', es: 'Captura 1: el ID del Pixel' },
    txt: { pt: 'No Gerenciador de Eventos, o número de identificação fica embaixo do nome do Pixel. Guarde este número.', es: 'En el Administrador de eventos, el número de identificación está debajo del nombre del Pixel. Guarda este número.' } },
  { alvo: '[data-msg=pedido2]',
    tit: { pt: 'Print 2: o código do site', es: 'Captura 2: el código del sitio' },
    txt: { pt: 'Para ver o que o SITE usa, peça o código da página. Ctrl+U abre o código; Ctrl+F acha o fbq rapidinho.', es: 'Para ver lo que usa el SITIO, pide el código de la página. Ctrl+U abre el código; Ctrl+F encuentra el fbq rápido.' },
    dica: { pt: 'Se o cliente não conseguir (no celular, por exemplo), tente outro jeito: a extensão Consultor de Dados também mostra o ID.', es: 'Si el cliente no puede (en el celular, por ejemplo), prueba otra forma: la extensión Asesor de datos también muestra el ID.' } },
  { alvo: '[data-foto=codigo-base] .f-init',
    tit: { pt: 'O número do site', es: 'El número del sitio' },
    txt: { pt: 'Este é o número dentro do init: é para ele que o site envia os eventos.', es: 'Este es el número dentro del init: es a donde el sitio envía los eventos.' } },
  { alvo: '.pp-pergunta', cond: tpRespondeu,
    tit: { pt: 'Compare', es: 'Compara' },
    txt: { pt: 'Agora responda: os dois números são iguais?', es: 'Ahora responde: ¿los dos números son iguales?' } },
  { alvo: '.pp-pergunta', fim: true,
    tit: { pt: 'Pronto! 🎉', es: '¡Listo! 🎉' },
    txt: { pt: 'Você pediu os prints certos e comparou os números, sem precisar de acesso ao site. Clique em Concluir. Depois, explore à vontade: o botão ↩ no canto leva de volta.', es: 'Pediste las capturas correctas y comparaste los números, sin necesitar acceso al sitio. Haz clic en Terminar. Después, explora a gusto: el botón ↩ en la esquina te lleva de vuelta.' } }
];
