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


  /* ---------- 4. Explorador de eventos (aula 04): evento = o que aconteceu; parâmetro = o detalhe ---------- */
  var EVS = [
    { ev: 'PageView', ic: '🏠', passo: { pt: 'Abriu a loja', es: 'Abrió la tienda' }, quando: { pt: 'Em toda página aberta (o código base já envia).', es: 'En cada página abierta (el código base ya lo envía).' },
      params: [], ger: 'PageView · Navegador', code: "fbq('track', 'PageView');" },
    { ev: 'ViewContent', ic: '👀', passo: { pt: 'Viu um produto', es: 'Vio un producto' }, quando: { pt: 'Quando a pessoa abre a página de um produto.', es: 'Cuando la persona abre la página de un producto.' },
      params: [['🧸', { pt: 'produto', es: 'producto' }, 'CANECA_01'], ['💰', { pt: 'valor', es: 'valor' }, 'R$ 89,90'], ['🪙', { pt: 'moeda', es: 'moneda' }, 'BRL']], ger: 'ViewContent · Navegador',
      code: "fbq('track', 'ViewContent', {content_ids: ['CANECA_01'], value: 89.90, currency: 'BRL'});" },
    { ev: 'AddToCart', ic: '🛒', passo: { pt: 'Pôs no carrinho', es: 'Puso en el carrito' }, quando: { pt: 'No clique em “Adicionar ao carrinho”.', es: 'Al hacer clic en “Agregar al carrito”.' },
      params: [['🧸', { pt: 'produto', es: 'producto' }, 'CANECA_01'], ['🔢', { pt: 'quantidade', es: 'cantidad' }, '1'], ['💰', { pt: 'valor', es: 'valor' }, 'R$ 89,90'], ['🪙', { pt: 'moeda', es: 'moneda' }, 'BRL']], ger: 'AddToCart · Navegador',
      code: "fbq('track', 'AddToCart', {contents: [{id: 'CANECA_01', quantity: 1}], value: 89.90, currency: 'BRL'});" },
    { ev: 'InitiateCheckout', ic: '🧾', passo: { pt: 'Foi pagar', es: 'Fue a pagar' }, quando: { pt: 'Quando a pessoa abre a página de pagamento.', es: 'Cuando la persona abre la página de pago.' },
      params: [['📦', { pt: 'itens', es: 'artículos' }, '1'], ['💰', { pt: 'valor', es: 'valor' }, 'R$ 89,90'], ['🪙', { pt: 'moeda', es: 'moneda' }, 'BRL']], ger: 'InitiateCheckout · Navegador',
      code: "fbq('track', 'InitiateCheckout', {num_items: 1, value: 89.90, currency: 'BRL'});" },
    { ev: 'Purchase', ic: '🎉', passo: { pt: 'Comprou', es: 'Compró' }, quando: { pt: 'Na página de “obrigado pela compra”, uma vez por pedido.', es: 'En la página de “gracias por tu compra”, una vez por pedido.' },
      params: [['💰', { pt: 'valor', es: 'valor' }, 'R$ 89,90', 1], ['🪙', { pt: 'moeda', es: 'moneda' }, 'BRL', 1], ['🧸', { pt: 'produto', es: 'producto' }, 'CANECA_01']], ger: 'Purchase · Navegador · R$ 89,90',
      code: "fbq('track', 'Purchase', {value: 89.90, currency: 'BRL', content_ids: ['CANECA_01']});",
      dica: { pt: 'Valor e moeda são OBRIGATÓRIOS na compra. Sem eles, a Meta sabe que vendeu, mas não quanto.', es: 'Valor y moneda son OBLIGATORIOS en la compra. Sin ellos, Meta sabe que vendió, pero no cuánto.' } }
  ];
  F['explorador'] = {
    titulo: { pt: 'Explorador de eventos', es: 'Explorador de eventos' },
    resumo: { pt: 'Clique em cada passo da compra e veja o evento, os parâmetros e como ele aparece no Gerenciador de Eventos.', es: 'Haz clic en cada paso de la compra y mira el evento, los parámetros y cómo aparece en el Administrador de eventos.' },
    paginas: '15', status: 'pronta',
    montar: function (el, T, lang, opts) {
      var simples = opts && opts.modo === 'simples';
      el.innerHTML = '<div class="ex"><div class="ex-trilha">' + EVS.map(function (e, i) { return '<button class="ex-passo" data-ex="' + i + '"><span>' + e.ic + '</span><b>' + T(e.passo) + '</b><code>' + e.ev + '</code></button>' }).join('<i class="ex-seta">›</i>') + '</div><div class="ex-det" id="exDet"></div></div>';
      function mostra(i) {
        var e = EVS[i];
        el.querySelectorAll('.ex-passo').forEach(function (b, k) { b.classList.toggle('on', k === i) });
        el.querySelector('#exDet').innerHTML = '<div class="ex-cab"><span class="ex-ic">' + e.ic + '</span><div><small>' + T({ pt: 'Evento (o que aconteceu)', es: 'Evento (lo que pasó)' }) + '</small><h3>' + e.ev + '</h3><p>' + T(e.quando) + '</p></div></div>' +
          '<small>' + T({ pt: 'Parâmetros (os detalhes)', es: 'Parámetros (los detalles)' }) + '</small><div class="ex-params">' + (e.params.length ? e.params.map(function (p) { return '<span class="' + (p[3] ? 'obrig' : '') + '">' + p[0] + ' ' + T(p[1]) + ': <b>' + p[2] + '</b>' + (p[3] ? ' <em>' + T({ pt: 'obrigatório', es: 'obligatorio' }) + '</em>' : '') + '</span>' }).join('') : '<span class="vazio">' + T({ pt: 'nenhum: só avisa que a página abriu', es: 'ninguno: solo avisa que la página se abrió' }) + '</span>') + '</div>' +
          (e.dica ? '<p class="ex-dica">💡 ' + T(e.dica) + '</p>' : '') +
          '<small>' + T({ pt: 'Como aparece no Gerenciador de Eventos (Testar eventos)', es: 'Cómo aparece en el Administrador de eventos (Probar eventos)' }) + '</small><div class="ex-ger"><span class="st"></span>' + e.ger + ' <em>' + T({ pt: 'Processado', es: 'Procesado' }) + '</em></div>' +
          (simples ? '' : '<small>' + T({ pt: 'O código que dispara (técnico)', es: 'El código que lo dispara (técnico)' }) + '</small><pre class="ex-code">' + e.code + '</pre>');
        var d = el.querySelector('#exDet'); d.classList.remove('mv-chega'); void d.offsetWidth; d.classList.add('mv-chega');
      }
      el.addEventListener('click', function (ev) { var b = ev.target.closest('[data-ex]'); if (b) mostra(+b.getAttribute('data-ex')) });
      mostra(4);
    }
  };


  /* ---------- 5. O que mora no portfólio? (Portfólio 01) ---------- */
  var COISAS = [
    { ic: '📄', n: { pt: 'Página do Facebook', es: 'Página de Facebook' }, ok: 'Contas', fb: { pt: 'Ativo! Fica em Contas › Páginas.', es: '¡Activo! Va en Cuentas › Páginas.' } },
    { ic: '📸', n: { pt: 'Perfil do Instagram', es: 'Perfil de Instagram' }, ok: 'Contas', fb: { pt: 'Ativo! Fica em Contas › Perfis do Instagram.', es: '¡Activo! Va en Cuentas › Perfiles de Instagram.' } },
    { ic: '📣', n: { pt: 'Conta de anúncios', es: 'Cuenta publicitaria' }, ok: 'Contas', fb: { pt: 'Ativo! Fica em Contas › Contas de anúncios.', es: '¡Activo! Va en Cuentas › Cuentas publicitarias.' } },
    { ic: '📡', n: { pt: 'Pixel', es: 'Pixel' }, ok: 'Fontes de dados', fb: { pt: 'Ativo! Fica em Fontes de dados › Conjuntos de dados e pixels.', es: '¡Activo! Va en Fuentes de datos › Conjuntos de datos y píxeles.' } },
    { ic: '🗂️', n: { pt: 'Catálogo de produtos', es: 'Catálogo de productos' }, ok: 'Fontes de dados', fb: { pt: 'Ativo! Fica em Fontes de dados › Catálogos.', es: '¡Activo! Va en Fuentes de datos › Catálogos.' } },
    { ic: '👩', n: { pt: 'O sobrinho que ajuda', es: 'El sobrino que ayuda' }, ok: 'Usuários', fb: { pt: 'Pessoas não são ativos: entram em Usuários › Pessoas, cada uma com o acesso que precisa.', es: 'Las personas no son activos: entran en Usuarios › Personas, cada una con el acceso que necesita.' } },
    { ic: '🔑', n: { pt: 'A senha do Facebook da Marina', es: 'La contraseña de Facebook de Marina' }, ok: null, fb: { pt: 'Nunca! Senha não vai para o portfólio nem se compartilha. Cada pessoa entra com a própria conta.', es: '¡Nunca! La contraseña no va al portafolio ni se comparte. Cada persona entra con su propia cuenta.' } },
    { ic: '🧾', n: { pt: 'A planilha de vendas', es: 'La planilla de ventas' }, ok: null, fb: { pt: 'Não é um ativo da Meta. O portfólio guarda ativos da Meta (Páginas, contas, Pixel…), não arquivos da empresa.', es: 'No es un activo de Meta. El portafolio guarda activos de Meta (Páginas, cuentas, Pixel…), no archivos de la empresa.' } }
  ];
  F['pasta-portfolio'] = {
    titulo: { pt: 'O que mora no portfólio?', es: '¿Qué vive en el portafolio?' },
    resumo: { pt: 'Clique em cada coisa da Marina e veja se ela entra no portfólio, e onde.', es: 'Haz clic en cada cosa de Marina y mira si entra en el portafolio, y dónde.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="pp"><div class="pp-coisas">' + COISAS.map(function (c, i) { return '<button class="pp-c" data-pp="' + i + '"><span>' + c.ic + '</span>' + T(c.n) + '</button>' }).join('') + '</div>' +
        '<div class="pp-pasta"><b>🗃️ ' + T({ pt: 'Portfólio “Lojinha da Marina”', es: 'Portafolio “Lojinha da Marina”' }) + '</b>' + ['Usuários', 'Contas', 'Fontes de dados'].map(function (g) { return '<div class="pp-g" data-g="' + g + '"><small>' + T({ 'Usuários': { pt: 'Usuários', es: 'Usuarios' }, 'Contas': { pt: 'Contas', es: 'Cuentas' }, 'Fontes de dados': { pt: 'Fontes de dados', es: 'Fuentes de datos' } }[g]) + '</small><div class="pp-in"></div></div>' }).join('') + '</div></div>' +
        '<div class="pp-fb" id="ppFb">' + T({ pt: 'Clique numa coisa da Marina ☝️', es: 'Haz clic en una cosa de Marina ☝️' }) + '</div>' +
        '<p class="pp-regra">📌 ' + T({ pt: '<b>Regra da Meta:</b> cada ativo pertence a UM portfólio só. A mesma Página não pode estar em dois portfólios ao mesmo tempo.', es: '<b>Regla de Meta:</b> cada activo pertenece a UN solo portafolio. La misma Página no puede estar en dos portafolios al mismo tiempo.' }) + '</p>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-pp]'); if (!b) return; var c = COISAS[+b.getAttribute('data-pp')], fb = el.querySelector('#ppFb');
        if (c.ok) { var g = el.querySelector('[data-g="' + c.ok + '"] .pp-in'); if (!b.classList.contains('dentro')) { b.classList.add('dentro'); var x = document.createElement('span'); x.className = 'pp-x mv-chega'; x.innerHTML = c.ic + ' ' + T(c.n); g.appendChild(x) } fb.className = 'pp-fb ok' }
        else { b.classList.remove('treme'); void b.offsetWidth; b.classList.add('treme'); fb.className = 'pp-fb erro' }
        fb.innerHTML = (c.ok ? '✅ ' : '❌ ') + T(c.fb);
      });
    }
  };

  /* ---------- 6. Nome do portfólio (Portfólio 02) ---------- */
  F['nome-portfolio'] = {
    titulo: { pt: 'Esse nome passa?', es: '¿Ese nombre pasa?' },
    resumo: { pt: 'Teste nomes de portfólio e veja o erro real de caracteres especiais.', es: 'Prueba nombres de portafolio y mira el error real de caracteres especiales.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="np"><label><b>' + T({ pt: 'Nome do portfólio empresarial', es: 'Nombre del portafolio comercial' }) + '</b><small>' + T({ pt: 'Deve corresponder ao nome público da empresa, pois ficará visível na Meta.', es: 'Debe corresponder al nombre público de la empresa, porque será visible en Meta.' }) + '</small><input id="npIn" placeholder="Lojinha da Marina"/></label><div id="npRes" class="np-res"></div>' +
        '<div class="np-ex">' + ['Lojinha da Marina', 'Lojinha da Marina (aula)', 'Lojinha da Marina Aula'].map(function (n) { return '<button data-np="' + n + '">' + n + '</button>' }).join('') + '</div>' +
        '<p class="miudo">' + T({ pt: 'Visto de verdade em 13/10/2026: os parênteses dão este erro. A Meta não publica a lista completa de caracteres; se o erro aparecer, tire símbolos e emojis do nome.', es: 'Visto de verdad el 13/10/2026: los paréntesis dan este error. Meta no publica la lista completa de caracteres; si aparece el error, quita símbolos y emojis del nombre.' }) + '</p></div>';
      var inp = el.querySelector('#npIn'), res = el.querySelector('#npRes');
      function testa() {
        var v = inp.value.trim();
        if (!v) { res.className = 'np-res'; res.innerHTML = ''; return }
        if (/[()]/.test(v)) { res.className = 'np-res erro'; res.innerHTML = '⛔ ' + T({ pt: 'O nome do portfólio empresarial não pode conter caracteres especiais.', es: 'El nombre del portafolio comercial no puede contener caracteres especiales.' }) }
        else { res.className = 'np-res ok'; res.innerHTML = '✅ ' + T({ pt: 'Passa! Lembre: deve ser o nome público da empresa.', es: '¡Pasa! Recuerda: debe ser el nombre público de la empresa.' }) }
      }
      inp.addEventListener('input', testa);
      el.addEventListener('click', function (e) { var b = e.target.closest('[data-np]'); if (b) { inp.value = b.getAttribute('data-np'); testa() } });
    }
  };

  /* ---------- 7. Quem precisa de quê? (Portfólio 03) ---------- */
  var GENTE = [
    { ic: '👩‍💼', n: { pt: 'A sócia, que administra a loja junto com a Marina', es: 'La socia, que administra la tienda junto con Marina' }, certo: 'total' },
    { ic: '🧑', n: { pt: 'O sobrinho, que só faz as postagens da Página', es: 'El sobrino, que solo hace las publicaciones de la Página' }, certo: 'basico' },
    { ic: '🏢', n: { pt: 'A agência de outra empresa, que vai cuidar dos anúncios', es: 'La agencia de otra empresa, que va a cuidar los anuncios' }, certo: 'parceiro' },
    { ic: '🙋', n: { pt: 'Uma amiga que só quer “dar uma olhada”', es: 'Una amiga que solo quiere “echar un vistazo”' }, certo: 'nenhum' }
  ];
  var ACESSOS = { total: { pt: 'Controle total', es: 'Control total' }, basico: { pt: 'Acesso básico + só a Página', es: 'Acceso básico + solo la Página' }, parceiro: { pt: 'Parceiro (outra empresa)', es: 'Socio (otra empresa)' }, nenhum: { pt: 'Não precisa de acesso', es: 'No necesita acceso' } };
  var POR = {
    total: { pt: 'Controle total é para quem administra a empresa: mexe em tudo, até configurações e pessoas.', es: 'Control total es para quien administra la empresa: toca todo, hasta configuraciones y personas.' },
    basico: { pt: 'Ele entra com acesso básico (o padrão) e recebe só o ativo em que trabalha, a Página, com acesso parcial. A Meta recomenda dar só o acesso necessário.', es: 'Entra con acceso básico (el predeterminado) y recibe solo el activo en que trabaja, la Página, con acceso parcial. Meta recomienda dar solo el acceso necesario.' },
    parceiro: { pt: 'Outra empresa entra como parceiro, não como pessoa: a agência usa o portfólio dela, e você compartilha só os ativos necessários.', es: 'Otra empresa entra como socio, no como persona: la agencia usa su propio portafolio, y compartes solo los activos necesarios.' },
    nenhum: { pt: 'Quem não trabalha nos ativos não precisa de acesso. Menos gente com acesso = mais segurança.', es: 'Quien no trabaja en los activos no necesita acceso. Menos gente con acceso = más seguridad.' }
  };
  F['quem-precisa'] = {
    titulo: { pt: 'Quem precisa de quê?', es: '¿Quién necesita qué?' },
    resumo: { pt: 'Escolha o acesso certo para cada pessoa que vai ajudar a Marina.', es: 'Elige el acceso correcto para cada persona que va a ayudar a Marina.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="qp">' + GENTE.map(function (g, i) {
        return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + g.ic + '</span>' + T(g.n) + '</div><div class="qp-ops">' + Object.keys(ACESSOS).map(function (k) { return '<button data-qp="' + i + ':' + k + '">' + T(ACESSOS[k]) + '</button>' }).join('') + '</div><p class="qp-fb"></p></div>'
      }).join('') + '</div>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-qp]'); if (!b) return; var v = b.getAttribute('data-qp').split(':'), g = GENTE[+v[0]], box = el.querySelector('.qp-p[data-i="' + v[0] + '"]'), ok = g.certo === v[1];
        box.querySelectorAll('[data-qp]').forEach(function (x) { x.classList.remove('certa', 'errada') }); b.classList.add(ok ? 'certa' : 'errada');
        box.querySelector('.qp-fb').innerHTML = ok ? '✅ ' + T(POR[v[1]]) : '❌ ' + T({ pt: 'Hmm, pense de novo: o que essa pessoa vai fazer de verdade?', es: 'Mmm, piénsalo otra vez: ¿qué va a hacer esta persona de verdad?' });
        if (ok && window.MOV && el.querySelectorAll('.certa').length === GENTE.length) MOV.confete(b);
      });
    }
  };

  /* ---------- 8. De quem é este ativo? (Portfólio 04) ---------- */
  F['de-quem-e'] = {
    titulo: { pt: 'Minha Página está em outro portfólio', es: 'Mi Página está en otro portafolio' },
    resumo: { pt: 'Os caminhos oficiais quando um ativo está no portfólio de outra pessoa.', es: 'Los caminos oficiales cuando un activo está en el portafolio de otra persona.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="dq"><p class="dq-perg"><b>' + T({ pt: 'A Página está no portfólio de outra pessoa. Qual é a situação?', es: 'La Página está en el portafolio de otra persona. ¿Cuál es la situación?' }) + '</b></p><div class="dq-ops">' +
        '<button class="opcao" data-dq="dona">' + T({ pt: '🏠 A Página é da Marina e ela quer trazer para o portfólio dela', es: '🏠 La Página es de Marina y ella quiere traerla a su portafolio' }) + '</button>' +
        '<button class="opcao" data-dq="agencia">' + T({ pt: '🏢 Uma agência precisa trabalhar na Página de um cliente', es: '🏢 Una agencia necesita trabajar en la Página de un cliente' }) + '</button></div><div id="dqRes"></div>' +
        '<p class="pp-regra">📌 ' + T({ pt: '<b>Não existe transferência direta</b> de Página entre portfólios. E se a Página tem Instagram conectado, o Instagram vai junto para o portfólio novo.', es: '<b>No existe transferencia directa</b> de Página entre portafolios. Y si la Página tiene Instagram conectado, el Instagram va junto al nuevo portafolio.' }) + '</p></div>';
      var RES = {
        dona: [{ pt: 'Quem administra o portfólio onde a Página está vai em Configurações › Contas › Páginas, seleciona a Página e clica em Remover.', es: 'Quien administra el portafolio donde está la Página va a Configuración › Cuentas › Páginas, selecciona la Página y hace clic en Quitar.' },
          { pt: 'Depois, a Marina (dona da Página) vai no portfólio DELA: Contas › Páginas › Adicionar › “Adicionar uma Página do Facebook existente”.', es: 'Después, Marina (dueña de la Página) va a SU portafolio: Cuentas › Páginas › Agregar › “Agregar una Página de Facebook existente”.' },
          { pt: 'Se a Página tem Instagram conectado, ela adiciona o Instagram também.', es: 'Si la Página tiene Instagram conectado, también agrega el Instagram.' }],
        agencia: [{ pt: 'A Página continua no portfólio do cliente (o dono não muda).', es: 'La Página sigue en el portafolio del cliente (el dueño no cambia).' },
          { pt: 'No portfólio da agência: Contas › Páginas › Adicionar › “Solicitar acesso compartilhado a uma Página do Facebook”.', es: 'En el portafolio de la agencia: Cuentas › Páginas › Agregar › “Solicitar acceso compartido a una Página de Facebook”.' },
          { pt: 'O cliente aprova, e a agência trabalha na Página com o acesso que o cliente der (parcial ou total).', es: 'El cliente aprueba, y la agencia trabaja en la Página con el acceso que el cliente dé (parcial o total).' }]
      };
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-dq]'); if (!b) return; var k = b.getAttribute('data-dq');
        el.querySelectorAll('[data-dq]').forEach(function (x) { x.classList.toggle('certa', x === b) });
        el.querySelector('#dqRes').innerHTML = '<ol class="dq-passos mv-chega">' + RES[k].map(function (p) { return '<li>' + T(p) + '</li>' }).join('') + '</ol>';
      });
    }
  };


  /* ---------- 9. Pessoal, Criador ou Comercial? (Instagram 01) ---------- */
  var QUEM = [
    { ic: '🏪', n: { pt: 'A Marina, que vende canecas e camisetas', es: 'Marina, que vende tazas y camisetas' }, certo: 'comercial' },
    { ic: '🎤', n: { pt: 'Uma influenciadora que faz publis', es: 'Una influencer que hace publicidad' }, certo: 'criador' },
    { ic: '👨‍👩‍👧', n: { pt: 'A tia da Marina, que só posta fotos da família e quer conta privada', es: 'La tía de Marina, que solo publica fotos de la familia y quiere cuenta privada' }, certo: 'pessoal' },
    { ic: '🥐', n: { pt: 'Uma padaria do bairro', es: 'Una panadería del barrio' }, certo: 'comercial' }
  ];
  var TIPOS = { pessoal: { pt: 'Pessoal', es: 'Personal' }, criador: { pt: 'Criador de conteúdo', es: 'Creador de contenido' }, comercial: { pt: 'Comercial', es: 'Comercial' } };
  var PQ = {
    comercial: { pt: 'Comercial é para varejistas, negócios locais, marcas, organizações e prestadores de serviços: insights, promoções e botão de contato.', es: 'Comercial es para minoristas, negocios locales, marcas, organizaciones y prestadores de servicios: estadísticas, promociones y botón de contacto.' },
    criador: { pt: 'Criador de conteúdo é para figuras públicas, produtores de conteúdo, artistas e influenciadores.', es: 'Creador de contenido es para figuras públicas, productores de contenido, artistas e influencers.' },
    pessoal: { pt: 'Quem quer conta privada fica na pessoal: a conta profissional é sempre pública.', es: 'Quien quiere cuenta privada se queda en la personal: la cuenta profesional siempre es pública.' }
  };
  F['tipo-conta'] = {
    titulo: { pt: 'Pessoal, Criador ou Comercial?', es: '¿Personal, Creador o Comercial?' },
    resumo: { pt: 'Escolha o tipo de conta do Instagram certo para cada pessoa.', es: 'Elige el tipo de cuenta de Instagram correcto para cada persona.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="qp">' + QUEM.map(function (g, i) {
        return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + g.ic + '</span>' + T(g.n) + '</div><div class="qp-ops">' + Object.keys(TIPOS).map(function (k) { return '<button data-tc="' + i + ':' + k + '">' + T(TIPOS[k]) + '</button>' }).join('') + '</div><p class="qp-fb"></p></div>'
      }).join('') + '</div>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-tc]'); if (!b) return; var v = b.getAttribute('data-tc').split(':'), g = QUEM[+v[0]], box = el.querySelector('.qp-p[data-i="' + v[0] + '"]'), ok = g.certo === v[1];
        box.querySelectorAll('[data-tc]').forEach(function (x) { x.classList.remove('certa', 'errada') }); b.classList.add(ok ? 'certa' : 'errada');
        box.querySelector('.qp-fb').innerHTML = ok ? '✅ ' + T(PQ[v[1]]) : '❌ ' + T({ pt: 'Pense no que essa pessoa faz e se ela quer a conta privada.', es: 'Piensa en qué hace esta persona y si quiere la cuenta privada.' });
        if (ok && window.MOV && el.querySelectorAll('.certa').length === QUEM.length) MOV.confete(b);
      });
    }
  };

  /* ---------- 10. Um perfil que vende (Instagram 02) ---------- */
  F['perfil-que-vende'] = {
    titulo: { pt: 'Monte o perfil da loja', es: 'Arma el perfil de la tienda' },
    resumo: { pt: 'Escreva nome, @ e bio e veja como o perfil fica, com dicas do que funciona.', es: 'Escribe nombre, @ y bio y mira cómo queda el perfil, con consejos de lo que funciona.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="pv"><div class="pv-form"><label><small>' + T({ pt: 'Nome', es: 'Nombre' }) + '</small><input id="pvNome" value="Marina"/></label><label><small>' + T({ pt: 'Nome de usuário', es: 'Nombre de usuario' }) + '</small><input id="pvUser" value="marina.lojinha"/></label><label><small>Bio</small><textarea id="pvBio" rows="2">Amo fazer canecas 🧡</textarea></label>' +
        '<label class="pv-ck"><input type="checkbox" id="pvTel"/> ' + T({ pt: 'Mostrar meu telefone pessoal no perfil', es: 'Mostrar mi teléfono personal en el perfil' }) + '</label></div>' +
        '<div class="pv-prev"><span class="ig-foto">🧡</span><div><b id="pvU"></b><p><b id="pvN"></b> <small>Compras e varejo</small></p><p id="pvB"></p><p id="pvT" class="pv-tel"></p></div></div></div><ul class="pv-dicas" id="pvDicas"></ul>';
      var q = function (i) { return el.querySelector(i) };
      function atualiza() {
        var n = q('#pvNome').value, u = q('#pvUser').value, b = q('#pvBio').value, tel = q('#pvTel').checked, d = [];
        q('#pvN').textContent = n; q('#pvU').textContent = u; q('#pvB').textContent = b; q('#pvT').textContent = tel ? '📞 +55 11 9xxxx-xxxx (público!)' : '';
        d.push(/lojinha|loja/i.test(n) ? ['ok', { pt: 'O nome mostra a loja: quem procura acha.', es: 'El nombre muestra la tienda: quien busca la encuentra.' }] : ['erro', { pt: 'Use o nome da loja no Nome (ele aparece em negrito e na busca).', es: 'Usa el nombre de la tienda en Nombre (aparece en negrita y en la búsqueda).' }]);
        d.push(/\s/.test(u) ? ['erro', { pt: 'O @ não pode ter espaços.', es: 'El @ no puede tener espacios.' }] : ['ok', { pt: 'O @ é o endereço do perfil: curto e fácil de digitar.', es: 'El @ es la dirección del perfil: corto y fácil de escribir.' }]);
        d.push(/(caneca|camiseta|ecobag|vend|loja|feit)/i.test(b) ? ['ok', { pt: 'A bio diz o que a loja vende.', es: 'La bio dice qué vende la tienda.' }] : ['erro', { pt: 'Na bio, diga em uma frase o que a loja vende.', es: 'En la bio, di en una frase qué vende la tienda.' }]);
        d.push(tel ? ['erro', { pt: 'O contato aparece PUBLICAMENTE no perfil. Prefira um telefone ou email comercial.', es: 'El contacto aparece PÚBLICAMENTE en el perfil. Prefiere un teléfono o correo comercial.' }] : ['ok', { pt: 'Nada pessoal exposto.', es: 'Nada personal expuesto.' }]);
        q('#pvDicas').innerHTML = d.map(function (x) { return '<li class="' + x[0] + '">' + (x[0] === 'ok' ? '✅ ' : '⚠️ ') + T(x[1]) + '</li>' }).join('');
      }
      el.addEventListener('input', atualiza); el.addEventListener('change', atualiza); atualiza();
    }
  };

  /* ---------- 11. O Instagram pode entrar no portfólio? (Instagram 03) ---------- */
  F['ig-portfolio'] = {
    titulo: { pt: 'O Instagram pode entrar no portfólio?', es: '¿El Instagram puede entrar al portafolio?' },
    resumo: { pt: 'Três perguntas antes de adicionar o Instagram ao portfólio.', es: 'Tres preguntas antes de agregar el Instagram al portafolio.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      var P = [
        [{ pt: 'O Instagram é conta profissional?', es: '¿El Instagram es cuenta profesional?' }, { pt: 'Ótimo, entra.', es: 'Perfecto, entra.' }, { pt: 'Se for pessoal, ao adicionar ele vira profissional (e público). Combine isso com a cliente antes.', es: 'Si es personal, al agregarlo se vuelve profesional (y público). Acuérdalo con la clienta antes.' }],
        [{ pt: 'Ele já está no portfólio de outra empresa?', es: '¿Ya está en el portafolio de otra empresa?' }, { pt: 'Não entra: cada ativo pertence a UM portfólio. Quem administra o outro portfólio precisa liberar primeiro.', es: 'No entra: cada activo pertenece a UN portafolio. Quien administra el otro portafolio tiene que liberarlo primero.' }, { pt: 'Ótimo, está livre.', es: 'Perfecto, está libre.' }],
        [{ pt: 'Ele tem uma conta de anúncios conectada?', es: '¿Tiene una cuenta publicitaria conectada?' }, { pt: 'Ela vem junto para o portfólio e NÃO pode ser removida depois. Confirme com a cliente.', es: 'Viene junto al portafolio y NO se puede quitar después. Confírmalo con la clienta.' }, { pt: 'Ótimo, nada vem junto.', es: 'Perfecto, nada viene junto.' }]
      ];
      el.innerHTML = '<div class="qp">' + P.map(function (x, i) { return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + (i + 1) + '</span>' + T(x[0]) + '</div><div class="qp-ops"><button data-ip="' + i + ':1">' + T({ pt: 'Sim', es: 'Sí' }) + '</button><button data-ip="' + i + ':2">' + T({ pt: 'Não', es: 'No' }) + '</button></div><p class="qp-fb"></p></div>' }).join('') + '</div>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-ip]'); if (!b) return; var v = b.getAttribute('data-ip').split(':'), box = el.querySelector('.qp-p[data-i="' + v[0] + '"]');
        box.querySelectorAll('[data-ip]').forEach(function (x) { x.classList.toggle('certa', x === b) }); box.querySelector('.qp-fb').innerHTML = T(P[+v[0]][+v[1]]);
      });
    }
  };


  /* ---------- 12. O que muda quando eu ligo? (Instagram 04) ---------- */
  F['ligar-ig'] = {
    titulo: { pt: 'O que muda quando eu ligo?', es: '¿Qué cambia cuando los vinculo?' },
    resumo: { pt: 'Ligue e desligue o Instagram da Página e veja o que cada pessoa passa a poder fazer.', es: 'Vincula y desvincula el Instagram de la Página y mira qué puede hacer cada persona.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      var est = { ligado: false, msg: true };
      var PESS = [
        { ic: '👩', n: { pt: 'Marina (acesso total à Página)', es: 'Marina (acceso total a la Página)' }, pag: true },
        { ic: '🧑', n: { pt: 'Sobrinho (cuida só da Página)', es: 'Sobrino (cuida solo la Página)' }, pag: true },
        { ic: '📱', n: { pt: 'Amiga que só tem acesso ao Instagram', es: 'Amiga que solo tiene acceso al Instagram' }, ig: true }
      ];
      function desenha() {
        el.innerHTML = '<div class="li"><div class="li-ctrl"><label class="li-sw"><input type="checkbox" data-k="ligado"' + (est.ligado ? ' checked' : '') + '/> ' + T({ pt: 'Instagram ligado à Página', es: 'Instagram vinculado a la Página' }) + '</label>' +
          '<label class="li-sw' + (est.ligado ? '' : ' off') + '"><input type="checkbox" data-k="msg"' + (est.msg ? ' checked' : '') + (est.ligado ? '' : ' disabled') + '/> ' + T({ pt: 'Mensagens do Instagram na Caixa de Entrada', es: 'Mensajes de Instagram en la Bandeja de entrada' }) + '</label></div>' +
          '<div class="li-par">🏪 ' + (est.ligado ? '🔗' : '···') + ' 📸</div>' +
          PESS.map(function (p) {
            var vePag = p.pag || est.ligado, veIg = p.ig || est.ligado, veMsg = p.ig || (est.ligado && est.msg);
            return '<div class="li-p"><b>' + p.ic + ' ' + T(p.n) + '</b><span class="' + (vePag ? 'sim' : 'nao') + '">' + (vePag ? '✅' : '—') + ' ' + T({ pt: 'Página', es: 'Página' }) + '</span><span class="' + (veIg ? 'sim' : 'nao') + '">' + (veIg ? '✅' : '—') + ' Instagram</span><span class="' + (veMsg ? 'sim' : 'nao') + '">' + (veMsg ? '✅' : '—') + ' ' + T({ pt: 'Mensagens do Instagram', es: 'Mensajes de Instagram' }) + '</span></div>';
          }).join('') +
          '<p class="li-nota">' + (est.ligado ? T({ pt: '🔗 Ligados: quem cuida da Página OU do Instagram pode cuidar dos dois — sempre conforme o acesso que cada pessoa recebeu.', es: '🔗 Vinculados: quien cuida la Página O el Instagram puede cuidar los dos — siempre según el acceso que recibió cada persona.' }) : T({ pt: 'Separados: cada pessoa só mexe no que recebeu.', es: 'Separados: cada persona solo toca lo que recibió.' })) + '</p></div>';
      }
      el.addEventListener('change', function (e) { var k = e.target.getAttribute('data-k'); if (!k) return; est[k] = e.target.checked; desenha() });
      desenha();
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
  ].forEach(function (f) { if (F[f[0]]) return; F[f[0]] = { titulo: f[1], resumo: f[2], paginas: f[3], status: 'planejada' } });
})();
