/* Roteiros guiados que rodam DENTRO da Lojinha (usam assets/js/tour.js). Textos {pt, es}. */
window.TOURS = window.TOURS || {};
function tgPainelAberto() { var p = document.getElementById('maPanel'); return !!(p && p.classList.contains('open')) }

/* Aula 02 · achar o Pixel no código da página */
window.TOURS['achar-codigo'] = [
  { alvo: '#maFab', clique: true, pula: tgPainelAberto,
    tit: { pt: 'O botão F12', es: 'El botón F12' },
    txt: { pt: 'Num computador, o código da página se abre com Ctrl+U ou com a tecla F12. Aqui, o botão F12 (simulação), no canto INFERIOR direito, faz esse papel. Clique nele.', es: 'En una computadora, el código de la página se abre con Ctrl+U o con la tecla F12. Aquí, el botón F12 (simulación), en la esquina INFERIOR derecha, cumple esa función. Haz clic en él.' } },
  { alvo: '.ma-tabs [data-aba=codigo]', clique: true,
    tit: { pt: 'A aba Código', es: 'La pestaña Código' },
    txt: { pt: 'Abra a aba 📄 Código. Ela mostra o código do Pixel desta página, sem precisar de ferramenta nenhuma do navegador.', es: 'Abre la pestaña 📄 Código. Muestra el código del Pixel de esta página, sin ninguna herramienta del navegador.' } },
  { alvo: '#maFonte .ma-m-com',
    tit: { pt: '1. O comentário', es: '1. El comentario' },
    txt: { pt: 'O Pixel começa aqui: Meta Pixel Code. Num site de cliente, é isso que se procura para saber se o Pixel está instalado.', es: 'El Pixel empieza aquí: Meta Pixel Code. En el sitio de un cliente, es lo que se busca para saber si el Pixel está instalado.' },
    dica: { pt: 'Em sites antigos o comentário pode estar como Facebook Pixel Code. É o mesmo.', es: 'En sitios antiguos el comentario puede decir Facebook Pixel Code. Es lo mismo.' } },
  { alvo: '#maFonte .ma-m-init',
    tit: { pt: '2. O ID do Pixel', es: '2. El ID del Pixel' },
    txt: { pt: 'Este número diz para qual Pixel os eventos vão. É ele que você compara com o ID que o cliente vê no Gerenciador de Eventos.', es: 'Este número dice a qué Pixel van los eventos. Es el que comparas con el ID que el cliente ve en el Administrador de eventos.' } },
  { alvo: '#maFonte .ma-m-pv',
    tit: { pt: '3. O PageView', es: '3. El PageView' },
    txt: { pt: 'Conta cada visita. Se ele está aqui, toda página aberta envia um PageView.', es: 'Cuenta cada visita. Si está aquí, cada página abierta envía un PageView.' } },
  { alvo: '#maPanel', fim: true,
    tit: { pt: 'Pronto! 🎉', es: '¡Listo! 🎉' },
    txt: { pt: 'Você achou as 3 coisas que importam: o comentário, o ID e o PageView. O resto do código é técnico: o cliente não mexe. Clique em Concluir para voltar à aula.', es: 'Encontraste las 3 cosas que importan: el comentario, el ID y el PageView. El resto del código es técnico: el cliente no lo toca. Haz clic en Terminar para volver a la clase.' } }
];

/* Aula 02 · prática do atendimento: conferir o Pixel do site com o Consultor de Dados (a extensão que o agente usa) */
function tgDaAberto() { return document.documentElement.classList.contains('da-aberto') }
window.TOURS['extensao-pixel'] = [
  { alvo: '#maExt', clique: true, pula: tgDaAberto,
    tit: { pt: 'A extensão Consultor de Dados', es: 'La extensión Asesor de datos' },
    txt: { pt: 'No atendimento, você não abre o código do site: usa a extensão Consultor de Dados de Anúncios da Meta, no Chrome. Aqui ela fica na faixa amarela. Clique nela.', es: 'En la atención no abres el código del sitio: usas la extensión Asesor de datos de anuncios de Meta, en Chrome. Aquí está en la franja amarilla. Haz clic en ella.' },
    dica: { pt: 'A extensão real é grátis e funciona em qualquer site público, inclusive no do cliente.', es: 'La extensión real es gratis y funciona en cualquier sitio público, incluso en el del cliente.' } },
  { alvo: '.da-chip', pula: function () { return !!document.querySelector('.da-card-id') },
    tit: { pt: 'Tem Pixel nesta página?', es: '¿Hay Pixel en esta página?' },
    txt: { pt: '“1 pixel”: a extensão achou o código do Pixel no site. Se aparecer “Nenhum pixel encontrado”, o código não está instalado (ou está quebrado).', es: '“1 pixel”: la extensión encontró el código del Pixel en el sitio. Si aparece “Ningún pixel encontrado”, el código no está instalado (o está roto).' } },
  { alvo: '.da-card-pixel', clique: true, pula: function () { return !!document.querySelector('.da-card-id') },
    tit: { pt: 'O ID do Pixel', es: 'El ID del Pixel' },
    txt: { pt: 'A “Identificação” é o número que está dentro do init, no código. Clique no cartão para ver os eventos.', es: 'La “Identificación” es el número que está dentro del init, en el código. Haz clic en la tarjeta para ver los eventos.' } },
  { alvo: '.da-card-id',
    tit: { pt: 'Compare com o do cliente', es: 'Compáralo con el del cliente' },
    txt: { pt: 'Este é o passo que resolve muitos casos: o número daqui tem que ser IGUAL ao ID do Pixel que o cliente vê no Gerenciador de Eventos. Se for diferente, os eventos estão indo para outro Pixel.', es: 'Este paso resuelve muchos casos: el número de aquí tiene que ser IGUAL al ID del Pixel que el cliente ve en el Administrador de eventos. Si es distinto, los eventos van a otro Pixel.' } },
  { alvo: '.da-ev-cab', clique: true,
    tit: { pt: 'O PageView', es: 'El PageView' },
    txt: { pt: 'O PageView aparece na lista: as visitas estão sendo contadas. Clique nele para ver os detalhes.', es: 'El PageView aparece en la lista: las visitas se están contando. Haz clic en él para ver los detalles.' } },
  { alvo: '.da-ev-corpo', fim: true,
    tit: { pt: 'Pronto! 🎉', es: '¡Listo! 🎉' },
    txt: { pt: 'Você conferiu o Pixel como no atendimento: tem Pixel? O ID é o do cliente? O PageView chega? Tudo sem mexer no código. Clique em Concluir para voltar à aula.', es: 'Revisaste el Pixel como en la atención: ¿hay Pixel? ¿El ID es el del cliente? ¿Llega el PageView? Todo sin tocar el código. Haz clic en Terminar para volver a la clase.' } }
];
