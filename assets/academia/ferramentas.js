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
  /* modo simples (aulas): só as 3 partes que o agente confere; o resto vira "parte técnica" */
  var SIMPLES = {
    cm: [{ pt: '1. O comentário: achou, achou o Pixel', es: '1. El comentario: si lo encuentras, encontraste el Pixel' }, { pt: '<code>Meta Pixel Code</code> marca onde o Pixel começa e termina. É o que se procura no código do site do cliente. Em sites antigos pode estar como <code>Facebook Pixel Code</code>.', es: '<code>Meta Pixel Code</code> marca dónde empieza y termina el Pixel. Es lo que se busca en el código del sitio del cliente. En sitios antiguos puede decir <code>Facebook Pixel Code</code>.' }],
    init: [{ pt: '2. O ID do Pixel ⭐', es: '2. El ID del Pixel ⭐' }, { pt: 'O número dentro de <code>init</code> diz para qual Pixel os eventos vão. Ele tem que ser <b>igual</b> ao ID do Pixel no Gerenciador de Eventos do cliente. ID diferente = eventos indo para outro Pixel.', es: 'El número dentro de <code>init</code> dice a qué Pixel van los eventos. Tiene que ser <b>igual</b> al ID del Pixel en el Administrador de eventos del cliente. ID diferente = eventos yendo a otro Pixel.' }],
    pv: [{ pt: '3. O PageView ⭐', es: '3. El PageView ⭐' }, { pt: 'Conta cada página aberta. Tem que estar aqui. Os outros eventos (compra, carrinho...) vêm depois, em outros lugares do site.', es: 'Cuenta cada página abierta. Tiene que estar aquí. Los otros eventos (compra, carrito...) vienen después, en otros lugares del sitio.' }],
    tec: [{ pt: 'Parte técnica: o cliente não mexe', es: 'Parte técnica: el cliente no la toca' }, { pt: 'Esta parte faz o Pixel carregar. Ninguém edita. Se no site do cliente ela estiver diferente, repetida ou faltando pedaços, oriente a falar com quem cuida do site (desenvolvedor ou a plataforma da loja).', es: 'Esta parte hace que el Pixel cargue. Nadie la edita. Si en el sitio del cliente está diferente, repetida o con partes faltantes, oriéntalo a hablar con quien cuida el sitio (desarrollador o la plataforma de la tienda).' }]
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
    montar: function (el, T, lang, opts) {
      var simples = opts && opts.modo === 'simples', TXT = simples ? SIMPLES : PARTES;
      el.innerHTML = '<div class="fr-cb"><div class="fr-codigo" role="list">' +
        '<div class="fr-codigo-tit">● ' + T({ pt: 'código base · como a Meta entrega', es: 'código base · como lo entrega Meta' }) + '</div>' +
        CODIGO.map(function (l) {
          var p = l[0], html = l[1];
          if (simples) { html = html.replace(/ data-p="[^"]+"/g, ''); p = p && !SIMPLES[p] ? 'tec' : p }
          return '<div class="fr-ln' + (p ? ' fr-hot' : '') + (p === 'tec' ? ' fr-tec' : '') + '"' + (p ? ' data-p="' + p + '" tabindex="0"' : '') + '>' + html + '</div>'
        }).join('') +
        '</div><div class="fr-exp" aria-live="polite"><span class="fr-exp-dica">' + T(simples ? { pt: '👈 Toque nas 3 partes destacadas: o comentário, o ID e o PageView. As partes em cinza são técnicas.', es: '👈 Toca las 3 partes destacadas: el comentario, el ID y el PageView. Las partes en gris son técnicas.' } : { pt: '👈 Passe o mouse ou toque numa parte destacada do código. As marcadas com ⭐ são as que mais importam.', es: '👈 Pasa el mouse o toca una parte destacada del código. Las marcadas con ⭐ son las que más importan.' }) + '</span></div></div>' +
        '<p class="fr-nota">' + T({ pt: 'ID fictício. O código real vem do Gerenciador de Eventos ou é instalado por um parceiro (ex.: uma plataforma de loja).', es: 'ID ficticio. El código real viene del Administrador de eventos o lo instala un socio (por ejemplo, una plataforma de tienda).' }) + '</p>';
      var exp = el.querySelector('.fr-exp'), fixo = null;
      function mostra(p) {
        var d = TXT[p]; if (!d) return;
        exp.innerHTML = '<b>' + T(d[0]) + '</b><p>' + T(d[1]) + '</p>';
        el.querySelectorAll('[data-p]').forEach(function (x) { x.classList.toggle('on', x.getAttribute('data-p') === p) });
      }
      el.addEventListener('mouseover', function (e) { var h = e.target.closest('[data-p]'); if (h && !fixo) mostra(h.getAttribute('data-p')) });
      el.addEventListener('click', function (e) { var h = e.target.closest('[data-p]'); if (!h) return; e.stopPropagation(); var p = h.getAttribute('data-p'); fixo = fixo === p ? null : p; mostra(p) });
      el.addEventListener('focusin', function (e) { var h = e.target.closest('[data-p]'); if (h) mostra(h.getAttribute('data-p')) });
    }
  };


  /* ---------- 2. O caminho de uma visita (aula 01): o que o Pixel faz, em linguagem de gente ---------- */
  var ACOES = {
    ver: { ev: 'ViewContent', ic: '👀', bt: { pt: 'Ver um produto', es: 'Ver un producto' }, nome: { pt: 'viu um produto', es: 'vio un producto' },
      uso: ['medir', 'publicos'], txt: { pt: 'Com esse aviso você sabe quantas pessoas viram seus produtos depois de um anúncio, e pode falar de novo com quem viu e não comprou.', es: 'Con este aviso sabes cuántas personas vieron tus productos después de un anuncio, y puedes volver a hablar con quien vio y no compró.' } },
    carrinho: { ev: 'AddToCart', ic: '🛒', bt: { pt: 'Pôr no carrinho', es: 'Poner en el carrito' }, nome: { pt: 'pôs no carrinho', es: 'puso en el carrito' },
      uso: ['melhorar', 'publicos'], txt: { pt: 'Pôr no carrinho mostra interesse de verdade: a Meta aprende que tipo de pessoa se interessa pelos seus produtos.', es: 'Poner en el carrito muestra interés real: Meta aprende qué tipo de persona se interesa por tus productos.' } },
    comprar: { ev: 'Purchase', ic: '💳', bt: { pt: 'Comprar', es: 'Comprar' }, nome: { pt: 'comprou', es: 'compró' },
      uso: ['medir', 'melhorar'], txt: { pt: 'O aviso mais importante: você vê quantas vendas o anúncio trouxe e quanto rendeu, e a Meta passa a mostrar seus anúncios para quem tem mais chance de comprar.', es: 'El aviso más importante: ves cuántas ventas trajo el anuncio y cuánto rindió, y Meta empieza a mostrar tus anuncios a quien tiene más chance de comprar.' } }
  };
  var USOS = { medir: { pt: '📏 Medir', es: '📏 Medir' }, melhorar: { pt: '🎯 Melhorar os anúncios', es: '🎯 Mejorar los anuncios' }, publicos: { pt: '👥 Criar públicos', es: '👥 Crear públicos' } };
  F['caminho-visita'] = {
    titulo: { pt: 'O caminho de uma visita', es: 'El camino de una visita' },
    resumo: { pt: 'Clique no que a pessoa faz na loja e veja o Pixel levar o aviso até a Meta, e para que ele serve.', es: 'Haz clic en lo que la persona hace en la tienda y mira al Pixel llevar el aviso hasta Meta, y para qué sirve.' },
    paginas: '10', status: 'pronta',
    montar: function (el, T) {
      var recebidos = [{ ev: 'PageView', nome: { pt: 'abriu o site', es: 'abrió el sitio' } }];
      el.innerHTML = '<div class="cv">' +
        '<div class="cv-col cv-loja"><b class="cv-tit">🏪 ' + T({ pt: 'Site da Marina', es: 'Sitio de Marina' }) + '</b><p class="cv-mut">' + T({ pt: 'O que a pessoa faz:', es: 'Lo que hace la persona:' }) + '</p>' +
          Object.keys(ACOES).map(function (k) { return '<button class="cv-bt" data-cv="' + k + '">' + ACOES[k].ic + ' ' + T(ACOES[k].bt) + '</button>' }).join('') + '</div>' +
        '<div class="cv-col cv-meio"><span class="cv-pixel">' + (window.PERSONAGEM ? PERSONAGEM('pixel', 3) : '') + '</span><div class="cv-trilho"><span class="cv-carta" id="cvCarta">✉️</span></div><small>' + T({ pt: 'o Pixel leva o aviso', es: 'el Pixel lleva el aviso' }) + '</small></div>' +
        '<div class="cv-col cv-meta"><b class="cv-tit">📡 ' + T({ pt: 'Gerenciador de Eventos', es: 'Administrador de eventos' }) + '</b><p class="cv-mut">' + T({ pt: 'Avisos que chegaram:', es: 'Avisos que llegaron:' }) + '</p><ul class="cv-lista" id="cvLista"></ul></div>' +
        '</div><div class="cv-uso" id="cvUso"><b>' + T({ pt: 'Clique numa ação da loja ☝️', es: 'Haz clic en una acción de la tienda ☝️' }) + '</b><p>' + T({ pt: 'Quando o site abriu, o Pixel já avisou: PageView (alguém abriu o site).', es: 'Cuando el sitio se abrió, el Pixel ya avisó: PageView (alguien abrió el sitio).' }) + '</p></div>' +
        '<div class="cv-mora"><span>📄 ' + T({ pt: 'Mora no código do site', es: 'Vive en el código del sitio' }) + '</span><span>🏢 ' + T({ pt: 'Pertence ao portfólio da empresa', es: 'Pertenece al portafolio de la empresa' }) + '</span><span>📡 ' + T({ pt: 'Os avisos chegam no Gerenciador de Eventos', es: 'Los avisos llegan al Administrador de eventos' }) + '</span></div>';
      var lista = el.querySelector('#cvLista'), carta = el.querySelector('#cvCarta'), uso = el.querySelector('#cvUso'), ocupado = false;
      function desenha() { lista.innerHTML = recebidos.map(function (r, i) { return '<li class="' + (i === recebidos.length - 1 && i ? 'novo' : '') + '"><code>' + r.ev + '</code> <span>' + T(r.nome) + '</span></li>' }).join('') }
      desenha();
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-cv]'); if (!b || ocupado) return; var a = ACOES[b.getAttribute('data-cv')]; ocupado = true;
        el.querySelectorAll('.cv-bt').forEach(function (x) { x.classList.toggle('on', x === b) });
        carta.classList.remove('voa'); void carta.offsetWidth; carta.classList.add('voa');
        setTimeout(function () {
          recebidos.push({ ev: a.ev, nome: a.nome }); desenha(); ocupado = false;
          uso.innerHTML = '<b>' + a.ic + ' ' + T({ pt: 'A pessoa', es: 'La persona' }) + ' ' + T(a.nome) + ' → <code>' + a.ev + '</code></b><p>' + T(a.txt) + '</p><div class="cv-chips">' + a.uso.map(function (u) { return '<span>' + T(USOS[u]) + '</span>' }).join('') + '</div>';
          uso.classList.remove('mv-chega'); void uso.offsetWidth; uso.classList.add('mv-chega');
        }, 900);
      });
    }
  };


  /* ---------- 3. Onde vai o código? (aula 02) ---------- */
  var PAGS = [{ ic: '🏠', n: { pt: 'Início', es: 'Inicio' }, ev: 'PageView' }, { ic: '🧸', n: { pt: 'Produto', es: 'Producto' }, ev: 'ViewContent' },
    { ic: '🛒', n: { pt: 'Carrinho', es: 'Carrito' }, ev: 'AddToCart' }, { ic: '🎉', n: { pt: 'Obrigado pela compra', es: 'Gracias por tu compra' }, ev: 'Purchase' }];
  var LUGARES = {
    head: { certo: true, tit: { pt: 'No topo (&lt;head&gt;) de TODAS as páginas', es: 'Arriba (&lt;head&gt;) de TODAS las páginas' }, mede: [1, 1, 1, 1],
      fb: { pt: 'Isso! É o que a Meta recomenda: o código no &lt;head&gt; de todas as páginas. Assim o Pixel está presente em cada passo, até a compra.', es: '¡Eso! Es lo que Meta recomienda: el código en el &lt;head&gt; de todas las páginas. Así el Pixel está presente en cada paso, hasta la compra.' } },
    plataforma: { certo: true, tit: { pt: 'Pela integração da plataforma da loja (ex.: Shopify)', es: 'Por la integración de la plataforma de la tienda (ej.: Shopify)' }, mede: [1, 1, 1, 1],
      fb: { pt: 'Também certo! Se a loja é de uma plataforma parceira, a integração coloca o Pixel em todas as páginas sem mexer em código.', es: '¡También es correcto! Si la tienda es de una plataforma socia, la integración pone el Pixel en todas las páginas sin tocar código.' } },
    inicio: { certo: false, tit: { pt: 'Só na página inicial', es: 'Solo en la página de inicio' }, mede: [1, 0, 0, 0],
      fb: { pt: 'Não. O Pixel só mede onde ele está: produto, carrinho e a COMPRA ficam de fora. A cliente não vê o resultado das vendas.', es: 'No. El Pixel solo mide donde está: producto, carrito y la COMPRA quedan fuera. La clienta no ve el resultado de las ventas.' } },
    rodape: { certo: false, tit: { pt: 'No rodapé, só da página de compra', es: 'En el pie, solo de la página de compra' }, mede: [0, 0, 0, 1],
      fb: { pt: 'Não. Fica faltando todo o caminho até a compra (visitas, produtos vistos, carrinho), e a Meta não aprende quem se interessa.', es: 'No. Falta todo el camino hasta la compra (visitas, productos vistos, carrito), y Meta no aprende quién se interesa.' } }
  };
  F['onde-colar'] = {
    titulo: { pt: 'Onde vai o código?', es: '¿Dónde va el código?' },
    resumo: { pt: 'Escolha onde colocar o código do Pixel e veja quais páginas passam a ser medidas.', es: 'Elige dónde poner el código del Pixel y mira qué páginas empiezan a medirse.' },
    paginas: '11', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="oc"><p class="oc-perg">' + T({ pt: 'O sobrinho da Marina vai colocar o código. Onde ele deve colar?', es: 'El sobrino de Marina va a poner el código. ¿Dónde debe pegarlo?' }) + '</p>' +
        '<div class="oc-ops">' + Object.keys(LUGARES).map(function (k) { return '<button class="opcao" data-oc="' + k + '">' + T(LUGARES[k].tit) + '</button>' }).join('') + '</div>' +
        '<div class="oc-site">' + PAGS.map(function (p, i) { return '<div class="oc-pag" data-i="' + i + '"><div class="oc-head">&lt;head&gt;</div><span class="oc-ic">' + p.ic + '</span><b>' + T(p.n) + '</b><code>' + p.ev + '</code><span class="oc-st">—</span></div>' }).join('') + '</div>' +
        '<div class="oc-fb" id="ocFb"></div></div>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-oc]'); if (!b) return; var L = LUGARES[b.getAttribute('data-oc')];
        el.querySelectorAll('[data-oc]').forEach(function (x) { x.classList.remove('certa', 'errada') }); b.classList.add(L.certo ? 'certa' : 'errada');
        el.querySelectorAll('.oc-pag').forEach(function (pg, i) {
          var ok = L.mede[i]; pg.classList.toggle('mede', !!ok); pg.classList.toggle('nao', !ok);
          pg.querySelector('.oc-st').textContent = ok ? T({ pt: '✓ medida', es: '✓ medida' }) : T({ pt: '✗ sem Pixel', es: '✗ sin Pixel' });
          pg.style.setProperty('--i', i); pg.classList.remove('mv-chega'); void pg.offsetWidth; pg.classList.add('mv-chega');
        });
        var fb = el.querySelector('#ocFb'); fb.className = 'oc-fb ' + (L.certo ? 'ok' : 'erro'); fb.innerHTML = (L.certo ? '✅ ' : '❌ ') + T(L.fb);
        if (L.certo && window.MOV) MOV.confete(b);
      });
    }
  };

  /* ---------- ferramentas que já existem em outros lugares do site ---------- */
  F['gerenciador-eventos'] = { titulo: { pt: 'Gerenciador de Eventos (simulador)', es: 'Administrador de eventos (simulador)' }, resumo: { pt: 'Criar o Pixel, Testar eventos com os eventos da Lojinha, Diagnóstico e Configurações.', es: 'Crear el Pixel, Probar eventos con los eventos de la Lojinha, Diagnóstico y Configuración.' }, paginas: '29', status: 'pronta', link: 'meta-eventos.html' };
  F['consultor-dados'] = { titulo: { pt: 'Consultor de Dados de Anúncios (simulação)', es: 'Asesor de datos de anuncios (simulación)' }, resumo: { pt: 'O painel da extensão da Meta, simulado. Abra a Lojinha e clique em “Consultor de Dados” na faixa amarela.', es: 'El panel de la extensión de Meta, simulado. Abre la Lojinha y haz clic en “Consultor de Dados” en la franja amarilla.' }, status: 'pronta', link: 'loja.html' };
  F['desculpas'] = { titulo: { pt: 'Laboratório de falhas do Pixel', es: 'Laboratorio de fallas del Pixel' }, resumo: { pt: 'Quebre o Pixel de propósito (as “desculpas do Pixel”) e veja o efeito na loja e no simulador. Abre a loja no modo laboratório, na aba 🧪 Lab.', es: 'Rompe el Pixel a propósito (las “excusas del Pixel”) y mira el efecto en la tienda y en el simulador. Abre la tienda en modo laboratorio, en la pestaña 🧪 Lab.' }, paginas: '47', status: 'pronta', link: 'loja.html?aula=lab' };
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
