/* Roteiros guiados que rodam DENTRO da Lojinha (usam assets/js/tour.js). Textos {pt, es}. */
window.TOURS = window.TOURS || {};
function tgPainelAberto() { var p = document.getElementById('maPanel'); return !!(p && p.classList.contains('open')) }

/* Aula 02 · achar o Pixel no código da página */
window.TOURS['achar-codigo'] = [
  { alvo: '#maFab', clique: true, pula: tgPainelAberto,
    tit: { pt: 'O botão Modo aula', es: 'El botón Modo aula' },
    txt: { pt: 'Ele fica no canto INFERIOR direito de todas as páginas da Lojinha e mostra o que o Pixel está fazendo. Clique nele.', es: 'Está en la esquina INFERIOR derecha de todas las páginas de la Lojinha y muestra lo que hace el Pixel. Haz clic en él.' } },
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
