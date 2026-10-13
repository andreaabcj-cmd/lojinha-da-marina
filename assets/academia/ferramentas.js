/* Ferramentas interativas: a MESMA ferramenta aparece dentro da aula e solta no Laboratório.
   FERRAMENTAS[id] = { titulo, resumo, paginas (do aulão), status, montar(el, T, lang) | link } */
(function () {
  var F = window.FERRAMENTAS = {};

  /* ---------- 1. Código base explicado ---------- */
  var PARTES = {
    cm: [{ pt: 'Comentários de início e fim', es: 'Comentarios de inicio y fin' }, { pt: 'Marcam onde o código do Pixel começa e termina. Não fazem nada, mas ajudam a achar o Pixel no código do site: procure por <code>Meta Pixel Code</code> (em sites mais antigos, <code>Facebook Pixel Code</code>).', es: 'Marcan dónde empieza y termina el código del Pixel. No hacen nada, pero ayudan a encontrar el Pixel en el código del sitio: busca <code>Meta Pixel Code</code> (en sitios más antiguos, <code>Facebook Pixel Code</code>).' }],
    carregador: [{ pt: 'O carregador (não se mexe)', es: 'El cargador (no se toca)' }, { pt: 'Prepara tudo quando a página abre: cria a função <code>fbq</code>, uma <b>fila</b> para os eventos e chama a biblioteca da Meta. Ninguém edita esta parte.', es: 'Prepara todo cuando se abre la página: crea la función <code>fbq</code>, una <b>fila</b> para los eventos y llama a la biblioteca de Meta. Nadie edita esta parte.' }],
    guarda: [{ pt: 'Proteção contra carregar duas vezes', es: 'Protección contra cargar dos veces' }, { pt: '<code>if(f.fbq)return;</code>: se o Pixel já existe na página, o carregador não roda de novo. Mas atenção: dois <code>init</code> ou eventos repetidos ainda causam duplicidade.', es: '<code>if(f.fbq)return;</code>: si el Pixel ya existe en la página, el cargador no vuelve a ejecutarse. Pero atención: dos <code>init</code> o eventos repetidos igual causan duplicidad.' }],
    fila: [{ pt: 'A fila', es: 'La fila' }, { pt: 'Eventos chamados <b>antes</b> de a biblioteca terminar de baixar entram nesta fila e são enviados depois. Nada se perde enquanto a página carrega.', es: 'Los eventos llamados <b>antes</b> de que la biblioteca termine de descargarse entran en esta fila y se envían después. Nada se pierde mientras la página carga.' }],
    async: [{ pt: 'Carregamento sem travar', es: 'Carga sin bloquear' }, { pt: '<code>async</code>: a biblioteca baixa em paralelo, sem deixar o site lento para o cliente.', es: '<code>async</code>: la biblioteca se descarga en paralelo, sin volver lento el sitio para el cliente.' }],
    lib: [{ pt: 'A biblioteca fbevents.js', es: 'La biblioteca fbevents.js' }, { pt: 'O endereço da biblioteca da Meta. Se um bloqueador de anúncios barrar este arquivo, <b>nenhum</b> evento do navegador sai. É por isso que existe a API de Conversões (que envia pelo servidor).', es: 'La dirección de la biblioteca de Meta. Si un bloqueador de anuncios bloquea este archivo, <b>ningún</b> evento del navegador sale. Por eso existe la API de conversiones (que envía desde el servidor).' }],
    init: [{ pt: 'init: o ID do Pixel ⭐', es: 'init: el ID del Pixel ⭐' }, { pt: 'Diz <b>para qual Pixel</b> os eventos vão. ID errado = eventos chegando em outro Pixel (a causa clássica do “meus eventos sumiram”). Pode receber um 3º dado: as informações de correspondência avançada.', es: 'Dice <b>a qué Pixel</b> van los eventos. ID equivocado = eventos llegando a otro Pixel (la causa clásica de “mis eventos desaparecieron”). Puede recibir un 3.er dato: la información de coincidencia avanzada.' }],
    pv: [{ pt: 'PageView: a visita ⭐', es: 'PageView: la visita ⭐' }, { pt: 'Conta cada página aberta. A Meta recomenda <b>manter</b> esta linha. Os outros eventos (ViewContent, AddToCart, Purchase…) são acrescentados nos lugares certos, nunca no lugar dela.', es: 'Cuenta cada página abierta. Meta recomienda <b>mantener</b> esta línea. Los otros eventos (ViewContent, AddToCart, Purchase…) se agregan en los lugares correctos, nunca en su lugar.' }],
    ns: [{ pt: 'noscript: o plano B', es: 'noscript: el plan B' }, { pt: 'Para quem navega sem JavaScript: uma imagem invisível de 1×1 pixel chama <code>facebook.com/tr</code>. Daí vem o nome “pixel”. Só registra o PageView.', es: 'Para quien navega sin JavaScript: una imagen invisible de 1×1 píxel llama a <code>facebook.com/tr</code>. De ahí viene el nombre “pixel”. Solo registra el PageView.' }]
  };
  var ID = '1234567890123456';
  var CODIGO = [
    ['cm', '<span class="c">&lt;!-- Meta Pixel Code --&gt;</span>'],
    [null, '<span class="t">&lt;script&gt;</span>'],
    ['carregador', '!<span class="k">function</span>(f,b,e,v,n,t,s)'],
    ['carregador', '{<span data-p="guarda"><span class="k">if</span>(f.fbq)<span class="k">return</span>;</span>n=f.fbq=<span class="k">function</span>(){n.callMethod?'],
    ['carregador', 'n.callMethod.apply(n,arguments):<span data-p="fila">n.queue.push(arguments)</span>};'],
    ['carregador', '<span class="k">if</span>(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version=<span class="s">\'2.0\'</span>;'],
    ['carregador', 'n.queue=[];<span data-p="async">t=b.createElement(e);t.async=!0;</span>'],
    ['carregador', 't.src=v;s=b.getElementsByTagName(e)[0];'],
    ['carregador', 's.parentNode.insertBefore(t,s)}(window, document,<span class="s">\'script\'</span>,'],
    ['lib', '<span class="s">\'https://connect.facebook.net/en_US/fbevents.js\'</span>);'],
    ['init', '<span class="f">fbq</span>(<span class="s">\'init\'</span>, <span class="s">\'' + ID + '\'</span>);'],
    ['pv', '<span class="f">fbq</span>(<span class="s">\'track\'</span>, <span class="s">\'PageView\'</span>);'],
    [null, '<span class="t">&lt;/script&gt;</span>'],
    ['ns', '<span class="t">&lt;noscript&gt;&lt;img</span> height="1" width="1" style="display:none"'],
    ['ns', 'src="https://www.facebook.com/tr?id=' + ID + '&amp;ev=PageView&amp;noscript=1"/&gt;<span class="t">&lt;/noscript&gt;</span>'],
    ['cm', '<span class="c">&lt;!-- End Meta Pixel Code --&gt;</span>']
  ];
  F['codigo-base'] = {
    titulo: { pt: 'Código base explicado', es: 'Código base explicado' },
    resumo: { pt: 'Passe o mouse (ou toque) em cada parte do código base do Pixel para ver o que ela faz.', es: 'Pasa el mouse (o toca) cada parte del código base del Pixel para ver qué hace.' },
    paginas: '9', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="fr-cb"><div class="fr-codigo" role="list">' +
        '<div class="fr-codigo-tit">● ' + T({ pt: 'código base · como a Meta entrega', es: 'código base · como lo entrega Meta' }) + '</div>' +
        CODIGO.map(function (l) { return '<div class="fr-ln' + (l[0] ? ' fr-hot' : '') + '"' + (l[0] ? ' data-p="' + l[0] + '" tabindex="0"' : '') + '>' + l[1] + '</div>' }).join('') +
        '</div><div class="fr-exp" aria-live="polite"><span class="fr-exp-dica">' + T({ pt: '👈 Passe o mouse ou toque numa parte destacada do código. As marcadas com ⭐ são as que mais importam.', es: '👈 Pasa el mouse o toca una parte destacada del código. Las marcadas con ⭐ son las que más importan.' }) + '</span></div></div>' +
        '<p class="fr-nota">' + T({ pt: 'ID fictício. O código real vem do Gerenciador de Eventos ou é instalado por um parceiro (ex.: uma plataforma de loja).', es: 'ID ficticio. El código real viene del Administrador de eventos o lo instala un socio (por ejemplo, una plataforma de tienda).' }) + '</p>';
      var exp = el.querySelector('.fr-exp'), fixo = null;
      function mostra(p) {
        var d = PARTES[p]; if (!d) return;
        exp.innerHTML = '<b>' + T(d[0]) + '</b><p>' + T(d[1]) + '</p>';
        el.querySelectorAll('[data-p]').forEach(function (x) { x.classList.toggle('on', x.getAttribute('data-p') === p) });
      }
      el.addEventListener('mouseover', function (e) { var h = e.target.closest('[data-p]'); if (h && !fixo) mostra(h.getAttribute('data-p')) });
      el.addEventListener('click', function (e) { var h = e.target.closest('[data-p]'); if (!h) return; e.stopPropagation(); var p = h.getAttribute('data-p'); fixo = fixo === p ? null : p; mostra(p) });
      el.addEventListener('focusin', function (e) { var h = e.target.closest('[data-p]'); if (h) mostra(h.getAttribute('data-p')) });
    }
  };

  /* ---------- ferramentas que já existem em outros lugares do site ---------- */
  F['gerenciador-eventos'] = { titulo: { pt: 'Gerenciador de Eventos (simulador)', es: 'Administrador de eventos (simulador)' }, resumo: { pt: 'Criar o Pixel, Testar eventos com os eventos da Lojinha, Diagnóstico e Configurações.', es: 'Crear el Pixel, Probar eventos con los eventos de la Lojinha, Diagnóstico y Configuración.' }, paginas: '29', status: 'pronta', link: 'meta-eventos.html' };
  F['consultor-dados'] = { titulo: { pt: 'Consultor de Dados de Anúncios (simulação)', es: 'Asesor de datos de anuncios (simulación)' }, resumo: { pt: 'O painel da extensão da Meta, simulado. Abra a Lojinha e clique em “Consultor de Dados” na faixa amarela.', es: 'El panel de la extensión de Meta, simulado. Abre la Lojinha y haz clic en “Consultor de Dados” en la franja amarilla.' }, status: 'pronta', link: 'loja.html' };
  F['desculpas'] = { titulo: { pt: 'Laboratório de falhas do Pixel', es: 'Laboratorio de fallas del Pixel' }, resumo: { pt: 'Quebre o Pixel de propósito (as “desculpas do Pixel”) e veja o efeito na loja e no simulador. Na Lojinha: Modo aula › 🧪 Lab.', es: 'Rompe el Pixel a propósito (las “excusas del Pixel”) y mira el efecto en la tienda y en el simulador. En la Lojinha: Modo aula › 🧪 Lab.' }, paginas: '47', status: 'pronta', link: 'loja.html' };
  F['depurador'] = { titulo: { pt: 'Depurador de Compartilhamento (tutorial)', es: 'Depurador de contenido compartido (tutorial)' }, resumo: { pt: 'O que o robô da Meta lê numa página de produto. Tutorial com a ferramenta real.', es: 'Lo que el robot de Meta lee en una página de producto. Tutorial con la herramienta real.' }, status: 'pronta', link: 'tutorial.html?e=06' };

  /* ---------- planejadas (vêm do aulão, adaptadas) ---------- */
  [['explorador', { pt: 'Explorador de eventos', es: 'Explorador de eventos' }, { pt: 'Escolha um evento e veja o código fbq(), os parâmetros, o envio e o que aparece no Gerenciador de Eventos.', es: 'Elige un evento y mira el código fbq(), los parámetros, el envío y lo que aparece en el Administrador de eventos.' }, '15, 19'],
   ['onde-mora', { pt: 'Onde o Pixel mora (e outros jeitos de ver)', es: 'Dónde vive el Pixel (y otras formas de verlo)' }, { pt: 'O código no site e as ferramentas do navegador, como mais um jeito de ver.', es: 'El código en el sitio y las herramientas del navegador, como otra forma de verlo.' }, '10, 11'],
   ['hash', { pt: 'Correspondência avançada na prática', es: 'Coincidencia avanzada en la práctica' }, { pt: 'Digite um email e veja como ele vira hash antes de sair.', es: 'Escribe un correo y mira cómo se convierte en hash antes de salir.' }, '25'],
   ['bussola', { pt: 'A bússola: 4 âncoras', es: 'La brújula: 4 anclas' }, { pt: 'Como achar qualquer coisa no Gerenciador de Eventos mesmo quando o layout muda.', es: 'Cómo encontrar cualquier cosa en el Administrador de eventos aunque cambie el diseño.' }, '28'],
   ['qualidade', { pt: 'Qualidade do sinal (versão simples)', es: 'Calidad de la señal (versión simple)' }, { pt: 'O que deixa um evento “forte” ou “fraco”, sem fórmula complicada.', es: 'Qué hace que un evento sea “fuerte” o “débil”, sin fórmulas complicadas.' }, '32'],
   ['servidor', { pt: 'Navegador × servidor e deduplicação', es: 'Navegador × servidor y deduplicación' }, { pt: 'Pixel e API de Conversões juntos, e como a Meta evita contar duas vezes.', es: 'Pixel y API de conversiones juntos, y cómo Meta evita contar dos veces.' }, '35, 36, 37'],
   ['ids-catalogo', { pt: 'IDs do Pixel × catálogo', es: 'IDs del Pixel × catálogo' }, { pt: 'Por que o content_id precisa ser igual ao ID do catálogo.', es: 'Por qué el content_id tiene que ser igual al ID del catálogo.' }, '40, 41'],
   ['regras', { pt: 'Regras e privacidade', es: 'Reglas y privacidad' }, { pt: 'Consentimento, dados que não podem ser enviados e categorias sensíveis.', es: 'Consentimiento, datos que no se pueden enviar y categorías sensibles.' }, '43, 44'],
   ['arvore', { pt: 'Árvore de diagnóstico', es: 'Árbol de diagnóstico' }, { pt: 'Do que o cliente diz até a causa: perguntas guiadas.', es: 'De lo que dice el cliente hasta la causa: preguntas guiadas.' }, '49'],
   ['biblioteca', { pt: 'Biblioteca de problemas e soluções', es: 'Biblioteca de problemas y soluciones' }, { pt: 'Todos os problemas conhecidos, com causa e solução.', es: 'Todos los problemas conocidos, con causa y solución.' }, '50'],
   ['fontes', { pt: 'Fontes oficiais e validade', es: 'Fuentes oficiales y vigencia' }, { pt: 'Os links da Meta que embasam cada aula, com a data da última conferência.', es: 'Los enlaces de Meta que respaldan cada clase, con la fecha de la última revisión.' }, '57']
  ].forEach(function (f) { F[f[0]] = { titulo: f[1], resumo: f[2], paginas: f[3], status: 'planejada' } });
})();
