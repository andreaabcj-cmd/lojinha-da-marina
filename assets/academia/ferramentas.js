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
        '<div class="cv-mora"><span>📄 ' + T({ pt: 'Mora no código do site', es: 'Vive en el código del sitio' }) + '</span><span>🏢 ' + T({ pt: 'Pertence ao portfólio da empresa', es: 'Pertenece al portfolio de la empresa' }) + '</span><span>📡 ' + T({ pt: 'Os avisos chegam no Gerenciador de Eventos', es: 'Los avisos llegan al Administrador de eventos' }) + '</span></div>';
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
    { ic: '🔑', n: { pt: 'A senha do Facebook da Marina', es: 'La contraseña de Facebook de Marina' }, ok: null, fb: { pt: 'Nunca! Senha não vai para o portfólio nem se compartilha. Cada pessoa entra com a própria conta.', es: '¡Nunca! La contraseña no va al portfolio ni se comparte. Cada persona entra con su propia cuenta.' } },
    { ic: '🧾', n: { pt: 'A planilha de vendas', es: 'La planilla de ventas' }, ok: null, fb: { pt: 'Não é um ativo da Meta. O portfólio guarda ativos da Meta (Páginas, contas, Pixel…), não arquivos da empresa.', es: 'No es un activo de Meta. El portfolio guarda activos de Meta (Páginas, cuentas, Pixel…), no archivos de la empresa.' } }
  ];
  F['pasta-portfolio'] = {
    titulo: { pt: 'O que mora no portfólio?', es: '¿Qué vive en el portfolio?' },
    resumo: { pt: 'Clique em cada coisa da Marina e veja se ela entra no portfólio, e onde.', es: 'Haz clic en cada cosa de Marina y mira si entra en el portfolio, y dónde.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="pp"><div class="pp-coisas">' + COISAS.map(function (c, i) { return '<button class="pp-c" data-pp="' + i + '"><span>' + c.ic + '</span>' + T(c.n) + '</button>' }).join('') + '</div>' +
        '<div class="pp-pasta"><b>🗃️ ' + T({ pt: 'Portfólio “Lojinha da Marina”', es: 'Portfolio “Lojinha da Marina”' }) + '</b>' + ['Usuários', 'Contas', 'Fontes de dados'].map(function (g) { return '<div class="pp-g" data-g="' + g + '"><small>' + T({ 'Usuários': { pt: 'Usuários', es: 'Usuarios' }, 'Contas': { pt: 'Contas', es: 'Cuentas' }, 'Fontes de dados': { pt: 'Fontes de dados', es: 'Fuentes de datos' } }[g]) + '</small><div class="pp-in"></div></div>' }).join('') + '</div></div>' +
        '<div class="pp-fb" id="ppFb">' + T({ pt: 'Clique numa coisa da Marina ☝️', es: 'Haz clic en una cosa de Marina ☝️' }) + '</div>' +
        '<p class="pp-regra">📌 ' + T({ pt: '<b>Regra da Meta:</b> cada ativo pertence a UM portfólio só. A mesma Página não pode estar em dois portfólios ao mesmo tempo.', es: '<b>Regla de Meta:</b> cada activo pertenece a UN solo portfolio. La misma Página no puede estar en dos portfolios al mismo tiempo.' }) + '</p>';
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
    resumo: { pt: 'Teste nomes de portfólio e veja o erro real de caracteres especiais.', es: 'Prueba nombres de portfolio y mira el error real de caracteres especiales.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="np"><label><b>' + T({ pt: 'Nome do portfólio empresarial', es: 'Nombre del portfolio comercial' }) + '</b><small>' + T({ pt: 'Deve corresponder ao nome público da empresa, pois ficará visível na Meta.', es: 'Debe corresponder al nombre público de la empresa, porque será visible en Meta.' }) + '</small><input id="npIn" placeholder="Lojinha da Marina"/></label><div id="npRes" class="np-res"></div>' +
        '<div class="np-ex">' + ['Lojinha da Marina', 'Lojinha da Marina (aula)', 'Lojinha da Marina Aula'].map(function (n) { return '<button data-np="' + n + '">' + n + '</button>' }).join('') + '</div>' +
        '<p class="miudo">' + T({ pt: 'Visto de verdade em 13/10/2026: os parênteses dão este erro. A Meta não publica a lista completa de caracteres; se o erro aparecer, tire símbolos e emojis do nome.', es: 'Visto de verdad el 13/10/2026: los paréntesis dan este error. Meta no publica la lista completa de caracteres; si aparece el error, quita símbolos y emojis del nombre.' }) + '</p></div>';
      var inp = el.querySelector('#npIn'), res = el.querySelector('#npRes');
      function testa() {
        var v = inp.value.trim();
        if (!v) { res.className = 'np-res'; res.innerHTML = ''; return }
        if (/[()]/.test(v)) { res.className = 'np-res erro'; res.innerHTML = '⛔ ' + T({ pt: 'O nome do portfólio empresarial não pode conter caracteres especiais.', es: 'El nombre del portfolio comercial no puede contener caracteres especiales.' }) }
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
    parceiro: { pt: 'Outra empresa entra como parceiro, não como pessoa: a agência usa o portfólio dela, e você compartilha só os ativos necessários.', es: 'Otra empresa entra como socio, no como persona: la agencia usa su propio portfolio, y compartes solo los activos necesarios.' },
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
    titulo: { pt: 'Minha Página está em outro portfólio', es: 'Mi Página está en otro portfolio' },
    resumo: { pt: 'Os caminhos oficiais quando um ativo está no portfólio de outra pessoa.', es: 'Los caminos oficiales cuando un activo está en el portfolio de otra persona.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="dq"><p class="dq-perg"><b>' + T({ pt: 'A Página está no portfólio de outra pessoa. Qual é a situação?', es: 'La Página está en el portfolio de otra persona. ¿Cuál es la situación?' }) + '</b></p><div class="dq-ops">' +
        '<button class="opcao" data-dq="dona">' + T({ pt: '🏠 A Página é da Marina e ela quer trazer para o portfólio dela', es: '🏠 La Página es de Marina y ella quiere traerla a su portfolio' }) + '</button>' +
        '<button class="opcao" data-dq="agencia">' + T({ pt: '🏢 Uma agência precisa trabalhar na Página de um cliente', es: '🏢 Una agencia necesita trabajar en la Página de un cliente' }) + '</button></div><div id="dqRes"></div>' +
        '<p class="pp-regra">📌 ' + T({ pt: '<b>Não existe transferência direta</b> de Página entre portfólios. E se a Página tem Instagram conectado, o Instagram vai junto para o portfólio novo.', es: '<b>No existe transferencia directa</b> de Página entre portfolios. Y si la Página tiene Instagram conectado, el Instagram va junto al nuevo portfolio.' }) + '</p></div>';
      var RES = {
        dona: [{ pt: 'Quem administra o portfólio onde a Página está vai em Configurações › Contas › Páginas, seleciona a Página e clica em Remover.', es: 'Quien administra el portfolio donde está la Página va a Configuración › Cuentas › Páginas, selecciona la Página y hace clic en Quitar.' },
          { pt: 'Depois, a Marina (dona da Página) vai no portfólio DELA: Contas › Páginas › Adicionar › “Adicionar uma Página do Facebook existente”.', es: 'Después, Marina (dueña de la Página) va a SU portfolio: Cuentas › Páginas › Agregar › “Agregar una Página de Facebook existente”.' },
          { pt: 'Se a Página tem Instagram conectado, ela adiciona o Instagram também.', es: 'Si la Página tiene Instagram conectado, también agrega el Instagram.' }],
        agencia: [{ pt: 'A Página continua no portfólio do cliente (o dono não muda).', es: 'La Página sigue en el portfolio del cliente (el dueño no cambia).' },
          { pt: 'No portfólio da agência: Contas › Páginas › Adicionar › “Solicitar acesso compartilhado a uma Página do Facebook”.', es: 'En el portfolio de la agencia: Cuentas › Páginas › Agregar › “Solicitar acceso compartido a una Página de Facebook”.' },
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
    titulo: { pt: 'O Instagram pode entrar no portfólio?', es: '¿El Instagram puede entrar al portfolio?' },
    resumo: { pt: 'Três perguntas antes de adicionar o Instagram ao portfólio.', es: 'Tres preguntas antes de agregar el Instagram al portfolio.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      var P = [
        [{ pt: 'O Instagram é conta profissional?', es: '¿El Instagram es cuenta profesional?' }, { pt: 'Ótimo, entra.', es: 'Perfecto, entra.' }, { pt: 'Se for pessoal, ao adicionar ele vira profissional (e público). Combine isso com a cliente antes.', es: 'Si es personal, al agregarlo se vuelve profesional (y público). Acuérdalo con la clienta antes.' }],
        [{ pt: 'Ele já está no portfólio de outra empresa?', es: '¿Ya está en el portfolio de otra empresa?' }, { pt: 'Não entra: cada ativo pertence a UM portfólio. Quem administra o outro portfólio precisa liberar primeiro.', es: 'No entra: cada activo pertenece a UN portfolio. Quien administra el otro portfolio tiene que liberarlo primero.' }, { pt: 'Ótimo, está livre.', es: 'Perfecto, está libre.' }],
        [{ pt: 'Ele tem uma conta de anúncios conectada?', es: '¿Tiene una cuenta publicitaria conectada?' }, { pt: 'Ela vem junto para o portfólio e NÃO pode ser removida depois. Confirme com a cliente.', es: 'Viene junto al portfolio y NO se puede quitar después. Confírmalo con la clienta.' }, { pt: 'Ótimo, nada vem junto.', es: 'Perfecto, nada viene junto.' }]
      ];
      el.innerHTML = '<div class="qp">' + P.map(function (x, i) { return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + (i + 1) + '</span>' + T(x[0]) + '</div><div class="qp-ops"><button data-ip="' + i + ':1">' + T({ pt: 'Sim', es: 'Sí' }) + '</button><button data-ip="' + i + ':2">' + T({ pt: 'Não', es: 'No' }) + '</button></div><p class="qp-fb"></p></div>' }).join('') + '</div>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-ip]'); if (!b) return; var v = b.getAttribute('data-ip').split(':'), box = el.querySelector('.qp-p[data-i="' + v[0] + '"]');
        box.querySelectorAll('[data-ip]').forEach(function (x) { x.classList.toggle('certa', x === b) }); box.querySelector('.qp-fb').innerHTML = T(P[+v[0]][+v[1]]);
      });
    }
  };


  /* ---------- 11a. Turbinar ou Gerenciador? (Anúncios 01) ---------- */
  var TG_ESC = { turbinar: { pt: 'Turbinar', es: 'Promocionar' }, gerenciador: { pt: 'Gerenciador de Anúncios', es: 'Administrador de anuncios' } };
  var TG_ITENS = [
    { ic: '🚀', n: { pt: 'Dar uma força num post que a Marina já publicou, rápido e sem mexer em nada técnico', es: 'Darle fuerza a un post que Marina ya publicó, rápido y sin tocar nada técnico' }, certo: 'turbinar',
      fb: { pt: 'Turbinar transforma um post que já existe em anúncio, em poucos campos.', es: 'Promocionar convierte un post que ya existe en anuncio, en pocos campos.' } },
    { ic: '🛒', n: { pt: 'Vender canecas pelo site e medir cada compra com o Pixel', es: 'Vender tazas por el sitio y medir cada compra con el Pixel' }, certo: 'gerenciador',
      fb: { pt: 'Para Vendas com o conjunto de dados (Pixel) escolhido, o caminho é o Gerenciador. A lista de metas do Turbinar não tem Vendas.', es: 'Para Ventas con el conjunto de datos (Pixel) elegido, el camino es el Administrador. La lista de metas de Promocionar no tiene Ventas.' } },
    { ic: '🧪', n: { pt: 'Testar dois públicos diferentes com o mesmo anúncio', es: 'Probar dos públicos distintos con el mismo anuncio' }, certo: 'gerenciador',
      fb: { pt: 'Dois públicos são dois conjuntos de anúncios dentro da campanha, e isso se monta no Gerenciador.', es: 'Dos públicos son dos conjuntos de anuncios dentro de la campaña, y eso se arma en el Administrador.' } },
    { ic: '👍', n: { pt: 'Ter mais curtidas e comentários no post de hoje, com R$ 5 por dia', es: 'Tener más reacciones y comentarios en el post de hoy, con R$ 5 por día' }, certo: 'turbinar',
      fb: { pt: 'Meta “Gerar engajamento” no Turbinar, com orçamento diário baixo (o mínimo era R$ 5,27).', es: 'Meta “Generar interacción” en Promocionar, con presupuesto diario bajo (el mínimo era R$ 5,27).' } }
  ];
  F['turbinar-ou-gerenciador'] = {
    titulo: { pt: 'Turbinar ou Gerenciador?', es: '¿Promocionar o Administrador?' },
    resumo: { pt: 'Para cada pedido da Marina, escolha a ferramenta certa.', es: 'Para cada pedido de Marina, elige la herramienta correcta.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="qp">' + TG_ITENS.map(function (g, i) {
        return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + g.ic + '</span>' + T(g.n) + '</div><div class="qp-ops">' + Object.keys(TG_ESC).map(function (k) { return '<button data-tu="' + i + ':' + k + '">' + T(TG_ESC[k]) + '</button>' }).join('') + '</div><p class="qp-fb"></p></div>'
      }).join('') + '</div>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-tu]'); if (!b) return; var v = b.getAttribute('data-tu').split(':'), g = TG_ITENS[+v[0]], box = el.querySelector('.qp-p[data-i="' + v[0] + '"]'), ok = g.certo === v[1];
        box.querySelectorAll('[data-tu]').forEach(function (x) { x.classList.remove('certa', 'errada') }); b.classList.add(ok ? 'certa' : 'errada');
        box.querySelector('.qp-fb').innerHTML = ok ? '✅ ' + T(g.fb) : '❌ ' + T({ pt: 'Pense: o post já existe e basta dar uma força, ou é preciso montar uma campanha com objetivo, público e medição?', es: 'Piensa: ¿el post ya existe y basta darle fuerza, o hay que armar una campaña con objetivo, público y medición?' });
        if (ok && window.MOV && el.querySelectorAll('.certa').length === TG_ITENS.length) MOV.confete(b);
      });
    }
  };

  /* ---------- 11d. Editar, duplicar ou criar novo? (Anúncios 04) ---------- */
  var EO_ESC = { editar: { pt: 'Editar', es: 'Editar' }, duplicar: { pt: 'Duplicar e mudar a cópia', es: 'Duplicar y cambiar la copia' }, novo: { pt: 'Criar algo novo', es: 'Crear algo nuevo' } };
  var EO_ITENS = [
    { ic: '💰', n: { pt: 'Mudar o orçamento diário de uma campanha que está rodando', es: 'Cambiar el presupuesto diario de una campaña que está corriendo' }, certo: 'editar',
      fb: { pt: 'Dá para editar, mas pode reiniciar a fase de aprendizado: faça uma vez, com motivo, e espere.', es: 'Se puede editar, pero puede reiniciar la fase de aprendizaje: hazlo una vez, con motivo, y espera.' } },
    { ic: '🧪', n: { pt: 'Testar outro texto sem perder o anúncio e os resultados atuais', es: 'Probar otro texto sin perder el anuncio y los resultados actuales' }, certo: 'duplicar',
      fb: { pt: 'Editar substitui a versão antiga sem volta e mistura as métricas. Para testar, duplique e mude a cópia.', es: 'Editar reemplaza la versión antigua sin vuelta y mezcla las métricas. Para probar, duplica y cambia la copia.' } },
    { ic: '🎯', n: { pt: 'Trocar o objetivo de uma campanha já publicada de Engajamento para Vendas', es: 'Cambiar el objetivo de una campaña ya publicada de Interacción a Ventas' }, certo: 'novo',
      fb: { pt: 'O objetivo fica em cinza depois de publicar. Para mudar, crie uma campanha nova com o objetivo certo.', es: 'El objetivo queda en gris después de publicar. Para cambiarlo, crea una campaña nueva con el objetivo correcto.' } },
    { ic: '🖼️', n: { pt: 'Trocar a imagem de um post turbinado que já foi analisado', es: 'Cambiar la imagen de un post promocionado que ya fue revisado' }, certo: 'novo',
      fb: { pt: 'A Central de Ajuda diz que não dá para editar texto, imagens ou vídeo de um post turbinado depois de analisado. Publique um post novo e turbine de novo.', es: 'El Centro de ayuda dice que no se puede editar el texto, las imágenes ni el video de un post promocionado después de revisado. Publica un post nuevo e promociona de nuevo.' } }
  ];
  F['editar-ou-novo'] = {
    titulo: { pt: 'Editar, duplicar ou criar novo?', es: '¿Editar, duplicar o crear nuevo?' },
    resumo: { pt: 'Para cada vontade da Marina, escolha o jeito mais seguro.', es: 'Para cada deseo de Marina, elige la forma más segura.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="qp">' + EO_ITENS.map(function (g, i) {
        return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + g.ic + '</span>' + T(g.n) + '</div><div class="qp-ops">' + Object.keys(EO_ESC).map(function (k) { return '<button data-eo="' + i + ':' + k + '">' + T(EO_ESC[k]) + '</button>' }).join('') + '</div><p class="qp-fb"></p></div>'
      }).join('') + '</div>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-eo]'); if (!b) return; var v = b.getAttribute('data-eo').split(':'), g = EO_ITENS[+v[0]], box = el.querySelector('.qp-p[data-i="' + v[0] + '"]'), ok = g.certo === v[1];
        box.querySelectorAll('[data-eo]').forEach(function (x) { x.classList.remove('certa', 'errada') }); b.classList.add(ok ? 'certa' : 'errada');
        box.querySelector('.qp-fb').innerHTML = ok ? '✅ ' + T(g.fb) : '❌ ' + T({ pt: 'Pense: dá para mudar esse campo? E se editar, perde o original e os resultados?', es: 'Piensa: ¿se puede cambiar ese campo? Y si editas, ¿pierdes el original y los resultados?' });
        if (ok && window.MOV && el.querySelectorAll('.certa').length === EO_ITENS.length) MOV.confete(b);
      });
    }
  };

  /* ---------- 11e. O que bloqueia o anúncio? (Anúncios 05) ---------- */
  var OB_ESC = { telefone: { pt: 'Telefone', es: 'Teléfono' }, limite: { pt: 'Limite de gastos', es: 'Límite de gastos' }, saldo: { pt: 'Saldo', es: 'Saldo' }, dados: { pt: 'Conjunto de dados', es: 'Conjunto de datos' } };
  var OB_ITENS = [
    { ic: '📱', n: { pt: 'A tela avisa: “É necessário ter um telefone verificado para esta conta antes de veicular anúncios.”', es: 'La pantalla avisa: “Se necesita un teléfono verificado para esta cuenta antes de publicar anuncios.”' }, certo: 'telefone',
      fb: { pt: 'É o telefone. A saída é Iniciar autenticação, feita pelo responsável da conta.', es: 'Es el teléfono. La salida es Iniciar autenticación, hecha por el responsable de la cuenta.' } },
    { ic: '🚧', n: { pt: 'A tela avisa: “Você quase atingiu o limite de gastos que definiu para essa conta de anúncios.” e a Marina tem saldo.', es: 'La pantalla avisa: “Casi alcanzaste el límite de gastos que definiste para esta cuenta publicitaria.” y Marina tiene saldo.' }, certo: 'limite',
      fb: { pt: 'É o limite de gastos da conta, que é diferente do saldo. Aumentar, redefinir ou remover o limite é com o responsável.', es: 'Es el límite de gastos de la cuenta, que es distinto del saldo. Aumentar, redefinir o quitar el límite es cosa del responsable.' } },
    { ic: '🪙', n: { pt: 'O anúncio rodou alguns dias e pausou. Saldo disponível: R$ 0,00.', es: 'El anuncio corrió algunos días y se pausó. Saldo disponible: R$ 0,00.' }, certo: 'saldo',
      fb: { pt: 'A tela explica: “Se não houver saldo disponível, os anúncios serão pausados.” Quem adiciona saldo é o responsável.', es: 'La pantalla explica: “Si no hay saldo disponible, los anuncios se pausarán.” Quien agrega saldo es el responsable.' } },
    { ic: '📡', n: { pt: 'Ao publicar a campanha de Vendas: “Um conjunto de dados (anteriormente conhecido como Pixel) é necessário.”', es: 'Al publicar la campaña de Ventas: “Se necesita un conjunto de datos (antes conocido como Pixel).”' }, certo: 'dados',
      fb: { pt: 'É o conjunto de dados, no conjunto de anúncios. Escolha o Pixel da loja ali.', es: 'Es el conjunto de datos, en el conjunto de anuncios. Elige ahí el Pixel de la tienda.' } }
  ];
  F['o-que-bloqueia'] = {
    titulo: { pt: 'O que bloqueia o anúncio?', es: '¿Qué bloquea el anuncio?' },
    resumo: { pt: 'Leia o aviso da tela e descubra a causa.', es: 'Lee el aviso de la pantalla y descubre la causa.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="qp">' + OB_ITENS.map(function (g, i) {
        return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + g.ic + '</span>' + T(g.n) + '</div><div class="qp-ops">' + Object.keys(OB_ESC).map(function (k) { return '<button data-ob="' + i + ':' + k + '">' + T(OB_ESC[k]) + '</button>' }).join('') + '</div><p class="qp-fb"></p></div>'
      }).join('') + '</div>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-ob]'); if (!b) return; var v = b.getAttribute('data-ob').split(':'), g = OB_ITENS[+v[0]], box = el.querySelector('.qp-p[data-i="' + v[0] + '"]'), ok = g.certo === v[1];
        box.querySelectorAll('[data-ob]').forEach(function (x) { x.classList.remove('certa', 'errada') }); b.classList.add(ok ? 'certa' : 'errada');
        box.querySelector('.qp-fb').innerHTML = ok ? '✅ ' + T(g.fb) : '❌ ' + T({ pt: 'Releia o aviso: que palavra dele aponta a causa (telefone, limite, saldo, conjunto de dados)?', es: 'Relee el aviso: ¿qué palabra señala la causa (teléfono, límite, saldo, conjunto de datos)?' });
        if (ok && window.MOV && el.querySelectorAll('.certa').length === OB_ITENS.length) MOV.confete(b);
      });
    }
  };

  /* ---------- 11b. Em qual nível fica? (Anúncios 02) ---------- */
  var NIVEIS = { campanha: { pt: 'Campanha', es: 'Campaña' }, conjunto: { pt: 'Conjunto de anúncios', es: 'Conjunto de anuncios' }, anuncio: { pt: 'Anúncio', es: 'Anuncio' } };
  var NIVEL_PQ = {
    campanha: { pt: 'Isso fica na campanha: é a meta geral (objetivo, tipo de compra, categorias especiais).', es: 'Eso queda en la campaña: es el objetivo general (objetivo, tipo de compra, categorías especiales).' },
    conjunto: { pt: 'Isso fica no conjunto de anúncios: é “para quem” e “como medir” (público, local da conversão, conjunto de dados).', es: 'Eso queda en el conjunto de anuncios: es “para quién” y “cómo medir” (público, lugar de la conversión, conjunto de datos).' },
    anuncio: { pt: 'Isso fica no anúncio: é o que a pessoa vê e quem assina (Página, formato, imagem e texto).', es: 'Eso queda en el anuncio: es lo que ve la persona y quién firma (Página, formato, imagen y texto).' }
  };
  var NIVEL_ITENS = [
    { ic: '🎯', n: { pt: 'O objetivo: Vendas', es: 'El objetivo: Ventas' }, certo: 'campanha' },
    { ic: '👥', n: { pt: 'Para quem o anúncio aparece (Brasil, 18+)', es: 'Para quién aparece el anuncio (Brasil, 18+)' }, certo: 'conjunto' },
    { ic: '📡', n: { pt: 'O conjunto de dados (o antigo Pixel) que mede as compras', es: 'El conjunto de datos (el antiguo Pixel) que mide las compras' }, certo: 'conjunto' },
    { ic: '🏪', n: { pt: 'A Página do Facebook que assina o anúncio', es: 'La Página de Facebook que firma el anuncio' }, certo: 'anuncio' },
    { ic: '🖼️', n: { pt: 'A imagem e o texto que a pessoa vê', es: 'La imagen y el texto que ve la persona' }, certo: 'anuncio' },
    { ic: '🔨', n: { pt: 'O tipo de compra: Leilão', es: 'El tipo de compra: Subasta' }, certo: 'campanha' }
  ];
  F['qual-nivel'] = {
    titulo: { pt: 'Em qual nível fica?', es: '¿En qué nivel queda?' },
    resumo: { pt: 'Para cada configuração, escolha: campanha, conjunto de anúncios ou anúncio.', es: 'Para cada configuración, elige: campaña, conjunto de anuncios o anuncio.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="qp">' + NIVEL_ITENS.map(function (g, i) {
        return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + g.ic + '</span>' + T(g.n) + '</div><div class="qp-ops">' + Object.keys(NIVEIS).map(function (k) { return '<button data-nv="' + i + ':' + k + '">' + T(NIVEIS[k]) + '</button>' }).join('') + '</div><p class="qp-fb"></p></div>'
      }).join('') + '</div>' +
        '<p class="qp-fb" style="margin-top:10px">' + T({ pt: 'Dica: o orçamento é o caso especial. Na Central de Ajuda da Meta ele fica no conjunto de anúncios; na tela de Vendas que o Pixel viu, aparece uma escolha: “Orçamento da campanha” ou “Orçamento do conjunto de anúncios”.', es: 'Pista: el presupuesto es el caso especial. En el Centro de ayuda de Meta queda en el conjunto de anuncios; en la pantalla de Ventas que vio el Pixel, aparece una opción: “Presupuesto de la campaña” o “Presupuesto del conjunto de anuncios”.' }) + '</p>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-nv]'); if (!b) return; var v = b.getAttribute('data-nv').split(':'), g = NIVEL_ITENS[+v[0]], box = el.querySelector('.qp-p[data-i="' + v[0] + '"]'), ok = g.certo === v[1];
        box.querySelectorAll('[data-nv]').forEach(function (x) { x.classList.remove('certa', 'errada') }); b.classList.add(ok ? 'certa' : 'errada');
        box.querySelector('.qp-fb').innerHTML = ok ? '✅ ' + T(NIVEL_PQ[v[1]]) : '❌ ' + T({ pt: 'Pense: isso é a meta geral, “para quem/como medir” ou o que a pessoa vê?', es: 'Piensa: ¿es el objetivo general, “para quién/cómo medir” o lo que ve la persona?' });
        if (ok && window.MOV && el.querySelectorAll('.certa').length === NIVEL_ITENS.length) MOV.confete(b);
      });
    }
  };

  /* ---------- 11c. O que falta para publicar? (Anúncios 03) ---------- */
  var FALTA = [
    { q: { pt: 'A tela avisa: “Um conjunto de dados (anteriormente conhecido como Pixel) é necessário.” O que a Marina faz?', es: 'La pantalla avisa: “Se necesita un conjunto de datos (antes conocido como Pixel).” ¿Qué hace Marina?' },
      o: [[{ pt: 'No conjunto de anúncios, escolhe o conjunto de dados (o Pixel da loja)', es: 'En el conjunto de anuncios, elige el conjunto de datos (el Pixel de la tienda)' }, 1, { pt: 'Isso! Campanha de Vendas com local “Site” precisa saber onde medir as compras: é o Pixel.', es: '¡Eso! Una campaña de Ventas con lugar “Sitio” necesita saber dónde medir las compras: es el Pixel.' }],
        [{ pt: 'Apaga a campanha e começa de novo', es: 'Borra la campaña y empieza de nuevo' }, 0, { pt: 'Não precisa: é só um campo do conjunto de anúncios que falta preencher.', es: 'No hace falta: es solo un campo del conjunto de anuncios que falta llenar.' }],
        [{ pt: 'Escreve o ID do Pixel no texto do anúncio', es: 'Escribe el ID del Pixel en el texto del anuncio' }, 0, { pt: 'O texto do anúncio é o que as pessoas leem; o conjunto de dados se escolhe no conjunto de anúncios.', es: 'El texto del anuncio es lo que lee la gente; el conjunto de datos se elige en el conjunto de anuncios.' }]] },
    { q: { pt: 'Ao publicar, a tela cobra a Página do Facebook. Onde se escolhe?', es: 'Al publicar, la pantalla pide la Página de Facebook. ¿Dónde se elige?' },
      o: [[{ pt: 'Na campanha, em Detalhes da campanha', es: 'En la campaña, en Detalles de la campaña' }, 0, { pt: 'Não: a Página assina o anúncio, então fica no nível do anúncio.', es: 'No: la Página firma el anuncio, así que queda en el nivel del anuncio.' }],
        [{ pt: 'No anúncio, em Identidade', es: 'En el anuncio, en Identidad' }, 1, { pt: 'Isso! Identidade é a Página (e o Instagram) que aparece no anúncio.', es: '¡Eso! Identidad es la Página (y el Instagram) que aparece en el anuncio.' }],
        [{ pt: 'No conjunto de anúncios, em Público', es: 'En el conjunto de anuncios, en Público' }, 0, { pt: 'Público é “quem vê”. “Quem assina” é a Identidade, no anúncio.', es: 'Público es “quién ve”. “Quién firma” es la Identidad, en el anuncio.' }]] },
    { q: { pt: 'A Marina quer parar agora e continuar amanhã, sem publicar nada ainda.', es: 'Marina quiere parar ahora y seguir mañana, sin publicar nada todavía.' },
      o: [[{ pt: 'Clica em Publicar para não perder o trabalho', es: 'Hace clic en Publicar para no perder el trabajo' }, 0, { pt: 'Publicar manda para análise e começa a gastar. Para guardar, basta Fechar.', es: 'Publicar manda a revisión y empieza a gastar. Para guardar, basta Cerrar.' }],
        [{ pt: 'Clica em Fechar: o rascunho fica salvo', es: 'Hace clic en Cerrar: el borrador queda guardado' }, 1, { pt: 'Isso! Ele aparece na lista como “Em rascunho” e dá para voltar depois.', es: '¡Eso! Aparece en la lista como “En borrador” y se puede volver después.' }],
        [{ pt: 'Clica em Descartar rascunhos', es: 'Hace clic en Descartar borradores' }, 0, { pt: 'Cuidado: descartar apaga o que ainda não foi publicado.', es: 'Cuidado: descartar borra lo que todavía no se publicó.' }]] }
  ];
  F['falta-publicar'] = {
    titulo: { pt: 'O que falta para publicar?', es: '¿Qué falta para publicar?' },
    resumo: { pt: 'Três situações reais do rascunho da Marina: escolha o que fazer.', es: 'Tres situaciones reales del borrador de Marina: elige qué hacer.' },
    paginas: '—', status: 'pronta',
    montar: function (el, T) {
      el.innerHTML = '<div class="qp">' + FALTA.map(function (s, i) {
        return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + (i + 1) + '</span>' + T(s.q) + '</div><div class="qp-ops" style="flex-direction:column;align-items:stretch">' + s.o.map(function (o, j) { return '<button data-fp="' + i + ':' + j + '">' + T(o[0]) + '</button>' }).join('') + '</div><p class="qp-fb"></p></div>'
      }).join('') + '</div>';
      el.addEventListener('click', function (e) {
        var b = e.target.closest('[data-fp]'); if (!b) return; var v = b.getAttribute('data-fp').split(':'), o = FALTA[+v[0]].o[+v[1]], box = el.querySelector('.qp-p[data-i="' + v[0] + '"]');
        box.querySelectorAll('[data-fp]').forEach(function (x) { x.classList.remove('certa', 'errada') }); b.classList.add(o[1] ? 'certa' : 'errada');
        box.querySelector('.qp-fb').innerHTML = (o[1] ? '✅ ' : '❌ ') + T(o[2]);
        if (o[1] && window.MOV && el.querySelectorAll('.certa').length === FALTA.length) MOV.confete(b);
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

  /* ---------- 13. Catálogo: cinco mini-quizzes (Catálogo 01–05) ---------- */
  function quizCatalogo(id, tit, res, itens) {
    itens.forEach(function (s, i) { var r = (i + id.length) % s.o.length; s.o = s.o.slice(r).concat(s.o.slice(0, r)) });   // a certa não fica sempre em primeiro
    F[id] = {
      titulo: tit, resumo: res, paginas: '—', status: 'pronta',
      montar: function (el, T) {
        el.innerHTML = '<div class="qp">' + itens.map(function (s, i) {
          return '<div class="qp-p" data-i="' + i + '"><div class="qp-n"><span>' + (i + 1) + '</span>' + T(s.q) + '</div><div class="qp-ops" style="flex-direction:column;align-items:stretch">' + s.o.map(function (o, j) { return '<button data-qc="' + i + ':' + j + '">' + T(o[0]) + '</button>' }).join('') + '</div><p class="qp-fb"></p></div>';
        }).join('') + '</div>';
        el.addEventListener('click', function (e) {
          var b = e.target.closest('[data-qc]'); if (!b) return; var v = b.getAttribute('data-qc').split(':'), o = itens[+v[0]].o[+v[1]], box = el.querySelector('.qp-p[data-i="' + v[0] + '"]');
          box.querySelectorAll('[data-qc]').forEach(function (x) { x.classList.remove('certa', 'errada') }); b.classList.add(o[1] ? 'certa' : 'errada');
          box.querySelector('.qp-fb').innerHTML = (o[1] ? '✅ ' : '❌ ') + T(o[2]);
          if (o[1] && window.MOV && el.querySelectorAll('.certa').length === itens.length) MOV.confete(b);
        });
      }
    };
  }
  quizCatalogo('um-ou-varios', { pt: 'Um catálogo ou vários?', es: '¿Un catálogo o varios?' }, { pt: 'Três situações da loja da Marina: escolha o melhor caminho.', es: 'Tres situaciones de la tienda de Marina: elige el mejor camino.' }, [
    { q: { pt: 'A Marina vende canecas e camisetas. Ela pensa em criar um catálogo para cada tipo de produto.', es: 'Marina vende tazas y camisetas. Piensa en crear un catálogo para cada tipo de producto.' },
      o: [[{ pt: 'Um só catálogo com tudo, e conjuntos de produtos para separar canecas e camisetas', es: 'Un solo catálogo con todo, y conjuntos de productos para separar tazas y camisetas' }, 1, { pt: 'Isso! A Meta recomenda um catálogo só para todo o estoque; os conjuntos servem para campanhas específicas.', es: '¡Eso! Meta recomienda un solo catálogo para todo el inventario; los conjuntos sirven para campañas específicas.' }],
        [{ pt: 'Um catálogo para canecas e outro para camisetas', es: 'Un catálogo para tazas y otro para camisetas' }, 0, { pt: 'A tela até avisa: use um só catálogo e separe com conjuntos.', es: 'La pantalla incluso avisa: usa un solo catálogo y sepáralo con conjuntos.' }],
        [{ pt: 'Um catálogo novo a cada mês', es: 'Un catálogo nuevo cada mes' }, 0, { pt: 'Não precisa: os itens do catálogo se atualizam, substituem ou excluem quando quiser.', es: 'No hace falta: los artículos del catálogo se actualizan, reemplazan o eliminan cuando quieras.' }]] },
    { q: { pt: 'A Marina clica no “+” para criar catálogo e aparece o aviso “Tem certeza de que deseja criar um novo catálogo?”. O que ela faz?', es: 'Marina hace clic en “+” para crear un catálogo y aparece el aviso “¿Confirmas que quieres crear un nuevo catálogo?”. ¿Qué hace?' },
      o: [[{ pt: 'Lê as alternativas do aviso: usar o catálogo que já existe, criar conjuntos ou pedir acesso', es: 'Lee las alternativas del aviso: usar el catálogo que ya existe, crear conjuntos o pedir acceso' }, 1, { pt: 'Isso! O aviso existe para evitar catálogos repetidos.', es: '¡Eso! El aviso existe para evitar catálogos repetidos.' }],
        [{ pt: 'Fecha o aviso sem ler e continua', es: 'Cierra el aviso sin leer y continúa' }, 0, { pt: 'Quem cria catálogo duplicado depois não sabe qual alimenta os anúncios.', es: 'Quien crea un catálogo duplicado después no sabe cuál alimenta los anuncios.' }],
        [{ pt: 'Desiste da loja', es: 'Desiste de la tienda' }, 0, { pt: 'Não precisa: é só um aviso de conferência.', es: 'No hace falta: es solo un aviso de revisión.' }]] },
    { q: { pt: 'Na lista aparece um catálogo com o selo “Sem acesso”. O que isso quer dizer?', es: 'En la lista aparece un catálogo con la etiqueta “Sin acceso”. ¿Qué significa?' },
      o: [[{ pt: 'O catálogo existe, mas a pessoa não tem permissão nele: dá para pedir acesso', es: 'El catálogo existe, pero la persona no tiene permiso en él: se puede pedir acceso' }, 1, { pt: 'Isso! Em vez de criar outro, peça acesso a quem administra.', es: '¡Eso! En lugar de crear otro, pide acceso a quien lo administra.' }],
        [{ pt: 'O catálogo foi apagado', es: 'El catálogo fue eliminado' }, 0, { pt: 'Não: ele continua existindo, só sem permissão para essa pessoa.', es: 'No: sigue existiendo, solo que sin permiso para esa persona.' }],
        [{ pt: 'O catálogo está sem produtos', es: 'El catálogo no tiene productos' }, 0, { pt: 'O selo fala de permissão, não de conteúdo.', es: 'La etiqueta habla de permiso, no de contenido.' }]] }
  ]);
  quizCatalogo('tipo-catalogo', { pt: 'Qual tipo escolher?', es: '¿Qué tipo elegir?' }, { pt: 'O tipo do catálogo não muda depois. Treine a escolha.', es: 'El tipo de catálogo no cambia después. Practica la elección.' }, [
    { q: { pt: 'A Lojinha da Marina vende canecas e camisetas pelo site. Qual opção descreve melhor?', es: 'La Lojinha de Marina vende tazas y camisetas por el sitio. ¿Qué opción la describe mejor?' },
      o: [[{ pt: 'Produtos online (artigos para casa, vestuário…)', es: 'Productos online (artículos para el hogar, ropa…)' }, 1, { pt: 'Isso! Produtos vendidos online.', es: '¡Eso! Productos que se venden online.' }],
        [{ pt: 'Imóveis', es: 'Inmuebles' }, 0, { pt: 'Imóveis é para anúncios de casas e apartamentos.', es: 'Inmuebles es para anuncios de casas y departamentos.' }],
        [{ pt: 'Serviços', es: 'Servicios' }, 0, { pt: 'Ela vende objetos, não serviços.', es: 'Vende objetos, no servicios.' }]] },
    { q: { pt: 'A Marina escolheu o tipo errado e quer trocar depois. É possível?', es: 'Marina eligió el tipo equivocado y quiere cambiarlo después. ¿Se puede?' },
      o: [[{ pt: 'Não: a própria tela avisa que não será possível alterar depois. Só criando outro catálogo', es: 'No: la propia pantalla avisa que no se podrá cambiar después. Solo creando otro catálogo' }, 1, { pt: 'Isso! Por isso vale conferir antes de avançar.', es: '¡Eso! Por eso conviene revisar antes de avanzar.' }],
        [{ pt: 'Sim, nas Configurações do catálogo', es: 'Sí, en la configuración del catálogo' }, 0, { pt: 'Não: o aviso da tela diz o contrário.', es: 'No: el aviso de la pantalla dice lo contrario.' }],
        [{ pt: 'Sim, pedindo ao suporte', es: 'Sí, pidiéndolo a soporte' }, 0, { pt: 'Não é caminho previsto: confira antes de avançar.', es: 'No es un camino previsto: revisa antes de avanzar.' }]] },
    { q: { pt: 'Na hora de nomear e escolher o portfólio, o que a Marina deve conferir?', es: 'Al nombrarlo y elegir el portfolio, ¿qué debe revisar Marina?' },
      o: [[{ pt: 'Que o portfólio empresarial é o da loja dela, e dar um nome que ela reconheça depois', es: 'Que el portfolio comercial sea el de su tienda, y darle un nombre que reconozca después' }, 1, { pt: 'Isso! O catálogo pertence a um portfólio.', es: '¡Eso! El catálogo pertenece a un portfolio.' }],
        [{ pt: 'Nada: qualquer portfólio serve', es: 'Nada: cualquier portfolio sirve' }, 0, { pt: 'O catálogo fica no portfólio escolhido; quem não tem acesso a ele não verá o catálogo.', es: 'El catálogo queda en el portfolio elegido; quien no tenga acceso a él no verá el catálogo.' }],
        [{ pt: 'Que o nome tenha só números', es: 'Que el nombre tenga solo números' }, 0, { pt: 'O nome é livre; escolha algo fácil de reconhecer.', es: 'El nombre es libre; elige algo fácil de reconocer.' }]] }
  ]);
  quizCatalogo('jeito-de-adicionar', { pt: 'Qual jeito de adicionar produtos?', es: '¿Qué forma de agregar productos?' }, { pt: 'Arquivo, manual, redes sociais ou depois: escolha conforme o caso.', es: 'Archivo, manual, redes sociales o después: elige según el caso.' }, [
    { q: { pt: 'A loja tem 300 produtos e muda o estoque todo dia.', es: 'La tienda tiene 300 productos y cambia el stock todos los días.' },
      o: [[{ pt: 'Carregar um arquivo de dados, com carregamento programado', es: 'Subir un archivo de datos, con subida programada' }, 1, { pt: 'Isso! O arquivo (feed) atualiza os produtos automaticamente na frequência escolhida.', es: '¡Eso! El archivo (feed) actualiza los productos automáticamente con la frecuencia elegida.' }],
        [{ pt: 'Adicionar manualmente, um por um', es: 'Agregar manualmente, uno por uno' }, 0, { pt: 'Para 300 itens com estoque mudando, é trabalho demais e fácil de errar.', es: 'Para 300 artículos con stock cambiando, es demasiado trabajo y fácil de equivocarse.' }],
        [{ pt: 'Deixar para depois e esquecer', es: 'Dejarlo para después y olvidarse' }, 0, { pt: 'Sem produtos, não há anúncio de catálogo.', es: 'Sin productos, no hay anuncio de catálogo.' }]] },
    { q: { pt: 'Um cliente quer testar com só 5 produtos antes de ligar o site.', es: 'Un cliente quiere probar con solo 5 productos antes de conectar el sitio.' },
      o: [[{ pt: 'Adicionar manualmente: a grade pede pelo menos 5 produtos para anúncios de catálogo Advantage+', es: 'Agregar manualmente: la cuadrícula pide al menos 5 productos para anuncios de catálogo Advantage+' }, 1, { pt: 'Isso! Bom para poucos itens e para aprender.', es: '¡Eso! Bueno para pocos artículos y para aprender.' }],
        [{ pt: 'Criar um feed com a moeda errada', es: 'Crear un feed con la moneda equivocada' }, 0, { pt: 'Não é um jeito de adicionar; e moeda errada vira problema depois.', es: 'No es una forma de agregar; y la moneda equivocada se vuelve un problema después.' }],
        [{ pt: 'Pedir ao cliente que mande foto de cada produto por mensagem', es: 'Pedir al cliente que mande foto de cada producto por mensaje' }, 0, { pt: 'Isso não alimenta o catálogo.', es: 'Eso no alimenta el catálogo.' }]] },
    { q: { pt: 'Ao carregar o arquivo, a moeda padrão vem em dólar (USD), mas a loja vende em reais.', es: 'Al subir el archivo, la moneda predeterminada viene en dólares (USD), pero la tienda vende en reales.' },
      o: [[{ pt: 'Trocar a moeda padrão para a da loja antes de carregar', es: 'Cambiar la moneda predeterminada a la de la tienda antes de subir' }, 1, { pt: 'Isso! Se o feed não trouxer a moeda em cada preço, os produtos entram na moeda padrão.', es: '¡Eso! Si el feed no trae la moneda en cada precio, los productos entran en la moneda predeterminada.' }],
        [{ pt: 'Deixar em dólar: depois se ajusta', es: 'Dejar en dólares: después se ajusta' }, 0, { pt: 'Os preços aparecem na moeda errada nos anúncios.', es: 'Los precios aparecen en la moneda equivocada en los anuncios.' }],
        [{ pt: 'Apagar o catálogo', es: 'Eliminar el catálogo' }, 0, { pt: 'Exagero: basta corrigir a moeda e carregar de novo.', es: 'Exagerado: basta corregir la moneda y subir de nuevo.' }]] }
  ]);
  quizCatalogo('ids-batem', { pt: 'Os IDs batem?', es: '¿Los IDs coinciden?' }, { pt: 'O Pixel e o catálogo precisam falar o mesmo “idioma” de produto.', es: 'El Pixel y el catálogo deben hablar el mismo “idioma” de producto.' }, [
    { q: { pt: 'O catálogo tem o produto “CANECA_01”. O Pixel manda, no evento, content_ids = [“caneca-azul”]. O que acontece?', es: 'El catálogo tiene el producto “CANECA_01”. El Pixel manda, en el evento, content_ids = [“caneca-azul”]. ¿Qué pasa?' },
      o: [[{ pt: 'Não bate: o evento não se liga ao produto do catálogo. É preciso igualar os IDs', es: 'No coincide: el evento no se vincula al producto del catálogo. Hay que igualar los IDs' }, 1, { pt: 'Isso! O content_id do evento tem que ser igual à Identificação do conteúdo do catálogo.', es: '¡Eso! El content_id del evento tiene que ser igual al Identificador de contenido del catálogo.' }],
        [{ pt: 'Bate: a Meta adivinha pelo nome', es: 'Coincide: Meta adivina por el nombre' }, 0, { pt: 'A Meta compara IDs, não nomes.', es: 'Meta compara IDs, no nombres.' }],
        [{ pt: 'Bate, só muda a cor da caneca', es: 'Coincide, solo cambia el color de la taza' }, 0, { pt: 'O ID é o que liga os dois lados.', es: 'El ID es lo que une los dos lados.' }]] },
    { q: { pt: 'A camiseta tem tamanhos P, M e G, todos com a mesma “Identificação do grupo”. Que ID o Pixel deve mandar quando a pessoa vê a camiseta P?', es: 'La camiseta tiene tallas P, M y G, todas con el mismo “Identificador de grupo”. ¿Qué ID debe mandar el Pixel cuando la persona ve la camiseta P?' },
      o: [[{ pt: 'O da variante que a pessoa viu (a Identificação do conteúdo do P)', es: 'El de la variante que la persona vio (el Identificador de contenido de la P)' }, 1, { pt: 'Isso! Cada variante tem o seu ID; o grupo só junta as variantes do mesmo produto.', es: '¡Eso! Cada variante tiene su ID; el grupo solo une las variantes del mismo producto.' }],
        [{ pt: 'Sempre o ID do grupo', es: 'Siempre el ID del grupo' }, 0, { pt: 'O grupo organiza as variantes; o evento deve citar a variante.', es: 'El grupo organiza las variantes; el evento debe citar la variante.' }],
        [{ pt: 'Um ID inventado pelo site', es: 'Un ID inventado por el sitio' }, 0, { pt: 'Se não existir no catálogo, o evento não encontra o produto.', es: 'Si no existe en el catálogo, el evento no encuentra el producto.' }]] },
    { q: { pt: 'Onde conferir se os eventos do Pixel estão chegando ao catálogo?', es: '¿Dónde revisar si los eventos del Pixel están llegando al catálogo?' },
      o: [[{ pt: 'No catálogo, na aba Eventos (e depois no Gerenciador de Eventos)', es: 'En el catálogo, en la pestaña Eventos (y luego en el Administrador de eventos)' }, 1, { pt: 'Isso! A aba Eventos mostra a fonte ligada ao catálogo.', es: '¡Eso! La pestaña Eventos muestra el origen conectado al catálogo.' }],
        [{ pt: 'Na aba Produtos', es: 'En la pestaña Productos' }, 0, { pt: 'Produtos mostra o estoque; os eventos ficam na aba Eventos.', es: 'Productos muestra el inventario; los eventos están en la pestaña Eventos.' }],
        [{ pt: 'Em Modelos de imagem', es: 'En Plantillas de imágenes' }, 0, { pt: 'Isso é para artes de anúncio, não para eventos.', es: 'Eso es para diseños de anuncios, no para eventos.' }]] }
  ]);
  /* ---------- Apps e iOS 14: o aviso de rastreamento do iPhone (ATT) ---------- */
  F['att-aviso'] = {
    titulo: { pt: 'O aviso do iPhone (rastreamento)', es: 'El aviso del iPhone (rastreo)' }, resumo: { pt: 'Responda ao aviso como um cliente da Lojinha e veja o que muda para a medição.', es: 'Responde al aviso como un cliente de la Lojinha y mira qué cambia para la medición.' }, paginas: '—', status: 'pronta',
    montar: function (el, T) {
      var TX = {
        app: { pt: 'Lojinha', es: 'Lojinha' },
        tit: { pt: 'Permitir que “Lojinha” rastreie sua atividade em apps e sites de outras empresas?', es: '¿Permitir que “Lojinha” rastree tu actividad en apps y sitios web de otras empresas?' },
        motivo: { pt: 'Usamos isso para mostrar ofertas da Lojinha que combinam com você.', es: 'Usamos esto para mostrarte ofertas de la Lojinha que van contigo.' },
        nao: { pt: 'Pedir ao app para não rastrear', es: 'Pedir a la app que no rastree' }, sim: { pt: 'Permitir', es: 'Permitir' },
        idfa: { pt: 'Identificador de anúncios do aparelho', es: 'Identificador de anuncios del dispositivo' },
        rNao: { pt: 'O SDK avisa à Meta que o rastreamento NÃO foi permitido. A compra feita no app ainda pode ser medida, mas de forma agregada e com proteção de privacidade (Mensuração de Eventos Agregados): sem identificar a pessoa e com relatórios e personalização mais limitados.', es: 'El SDK avisa a Meta que el rastreo NO fue permitido. La compra hecha en la app aún puede medirse, pero de forma agregada y con protección de privacidad (Medición de eventos agregados): sin identificar a la persona y con informes y personalización más limitados.' },
        rSim: { pt: 'O SDK avisa à Meta que o rastreamento foi permitido. O identificador de anúncios pode ser usado, e a medição e a personalização dos anúncios ficam menos limitadas para esta pessoa.', es: 'El SDK avisa a Meta que el rastreo fue permitido. El identificador de anuncios puede usarse, y la medición y la personalización de los anuncios quedan menos limitadas para esta persona.' },
        de: { pt: '↺ Ver o aviso de novo', es: '↺ Ver el aviso de nuevo' },
        quem: { pt: 'Quem escolhe é o cliente, não a loja. O app só escreve a frase do meio (o motivo) e não pode oferecer prêmio em troca do “Permitir”.', es: 'Quien elige es el cliente, no la tienda. La app solo escribe la frase del medio (el motivo) y no puede ofrecer premios a cambio del “Permitir”.' },
        nota: { pt: 'Recriação de treino. Regras da Apple (App Tracking Transparency, iOS 14.5+): sem permissão, o identificador de anúncios vem zerado. O texto exato do aviso em português no iPhone está a conferir.', es: 'Recreación de entrenamiento. Reglas de Apple (App Tracking Transparency, iOS 14.5+): sin permiso, el identificador de anuncios viene en ceros. El texto exacto del aviso en español en el iPhone está por confirmar.' }
      };
      function aviso() {
        return '<div class="att-cel" style="max-width:300px;margin:6px auto;border:3px solid #16294A;border-radius:28px;padding:14px;background:#EEF2F7">' +
          '<div style="text-align:center;font-weight:800;color:#64748B;margin-bottom:8px">' + T(TX.app) + '</div>' +
          '<div style="background:rgba(255,255,255,.96);border-radius:14px;text-align:center;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.15)">' +
          '<p style="margin:0;padding:14px 14px 4px;font-weight:700;font-size:15px">' + T(TX.tit) + '</p><p style="margin:0;padding:0 14px 12px;font-size:13px">' + T(TX.motivo) + '</p>' +
          '<button data-att="nao" style="display:block;width:100%;border:0;border-top:1px solid #CBD5E1;background:none;padding:11px;color:#2F6FD6;font:15px \'Segoe UI\',sans-serif;cursor:pointer">' + T(TX.nao) + '</button>' +
          '<button data-att="sim" style="display:block;width:100%;border:0;border-top:1px solid #CBD5E1;background:none;padding:11px;color:#2F6FD6;font:15px \'Segoe UI\',sans-serif;cursor:pointer">' + T(TX.sim) + '</button></div></div>';
      }
      function resultado(sim) {
        var id = sim ? '6D92078A-8246-4BA4-AE5B-76104861E7DC' : '00000000-0000-0000-0000-000000000000';
        return '<div style="border:2px solid #16294A;border-radius:12px;padding:12px;margin:8px 0;background:' + (sim ? '#E3F7EA' : '#FFF4D6') + '"><b>' + (sim ? '✅ ' + T(TX.sim) : '🙅 ' + T(TX.nao)) + '</b>' +
          '<p style="margin:8px 0 4px">' + T(TX.idfa) + ':<br><code>' + id + '</code></p><p style="margin:6px 0">' + T(sim ? TX.rSim : TX.rNao) + '</p>' +
          '<button class="btn sec" data-att="de" style="margin-top:4px">' + T(TX.de) + '</button></div>';
      }
      function desenha(r) { el.innerHTML = (r == null ? aviso() : resultado(r)) + '<p class="mais-lab">💡 ' + T(TX.quem) + '</p><p class="mais-lab"><small>' + T(TX.nota) + '</small></p>' }
      el.addEventListener('click', function (e) { var b = e.target.closest('[data-att]'); if (!b) return; var a = b.getAttribute('data-att'); desenha(a === 'de' ? null : a === 'sim') });
      desenha(null);
    }
  };
  quizCatalogo('ios-numeros', { pt: 'Por que o número é diferente?', es: '¿Por qué el número es distinto?' }, { pt: 'Situações reais de relatório depois do iOS 14: escolha a melhor explicação.', es: 'Situaciones reales de informes después de iOS 14: elige la mejor explicación.' }, [
    { q: { pt: 'A loja registrou 30 vendas no mês e o Gerenciador de Anúncios mostra 22 para a campanha.', es: 'La tienda registró 30 ventas en el mes y el Administrador de anuncios muestra 22 para la campaña.' },
      o: [[{ pt: 'Normal: com a privacidade do iPhone, parte das conversões chega parcial; e a loja conta vendas que não vieram do anúncio', es: 'Normal: con la privacidad del iPhone, parte de las conversiones llega parcial; y la tienda cuenta ventas que no vinieron del anuncio' }, 1, { pt: 'Isso! Os números não batem um a um; compare tendências.', es: '¡Eso! Los números no coinciden uno a uno; compara tendencias.' }],
        [{ pt: 'Erro da Meta: pedir reembolso', es: 'Error de Meta: pedir reembolso' }, 0, { pt: 'Não é erro: é efeito das regras de privacidade.', es: 'No es error: es efecto de las reglas de privacidad.' }],
        [{ pt: 'O Pixel parou: reinstalar já', es: 'El píxel se detuvo: reinstalarlo ya' }, 0, { pt: 'Diferença pequena e constante não é Pixel parado; investigue só se a queda for brusca.', es: 'Una diferencia pequeña y constante no es un píxel detenido; investiga solo si la caída es brusca.' }]] },
    { q: { pt: 'Ao passar o mouse num número, o relatório avisa que foi usada modelagem estatística.', es: 'Al pasar el mouse sobre un número, el informe avisa que se usó modelado estadístico.' },
      o: [[{ pt: 'A Meta completou dados parciais ou ausentes com modelos para dar uma visão mais completa', es: 'Meta completó datos parciales o faltantes con modelos para dar una visión más completa' }, 1, { pt: 'Isso! Sem modelagem, os resultados poderiam não incluir todas as conversões.', es: '¡Eso! Sin modelado, los resultados podrían no incluir todas las conversiones.' }],
        [{ pt: 'O número é inventado e deve ser ignorado', es: 'El número es inventado y hay que ignorarlo' }, 0, { pt: 'É uma estimativa baseada em dados de várias fontes, explicada pela Meta.', es: 'Es una estimación basada en datos de varias fuentes, explicada por Meta.' }],
        [{ pt: 'O anúncio foi reprovado', es: 'El anuncio fue rechazado' }, 0, { pt: 'Modelagem não tem relação com reprovação.', es: 'El modelado no tiene relación con un rechazo.' }]] },
    { q: { pt: 'Numa campanha de app que usa a SKAdNetwork, as instalações de ontem ainda não aparecem.', es: 'En una campaña de app que usa SKAdNetwork, las instalaciones de ayer todavía no aparecen.' },
      o: [[{ pt: 'Normal: a SKAdNetwork envia com pelo menos 24 horas de atraso e conta no dia em que chegou', es: 'Normal: SKAdNetwork envía con al menos 24 horas de retraso y cuenta el día en que llegó' }, 1, { pt: 'Isso! O resultado entra na data em que foi informado à Meta.', es: '¡Eso! El resultado entra en la fecha en que se informó a Meta.' }],
        [{ pt: 'O app parou de funcionar', es: 'La app dejó de funcionar' }, 0, { pt: 'Atraso de relatório não é app quebrado.', es: 'El retraso del informe no es una app rota.' }],
        [{ pt: 'Trocar a janela de atribuição para 28 dias resolve', es: 'Cambiar la ventana de atribución a 28 días lo resuelve' }, 0, { pt: 'A SKAdNetwork não usa as janelas de 1, 7 ou 28 dias.', es: 'SKAdNetwork no usa las ventanas de 1, 7 o 28 días.' }]] },
    { q: { pt: 'O público de quem visitou o site encolheu desde o ano passado.', es: 'El público de quienes visitaron el sitio se achicó desde el año pasado.' },
      o: [[{ pt: 'Esperado com mais aparelhos no iOS 14+: considerar público amplo ou a expansão de direcionamento', es: 'Esperado con más dispositivos en iOS 14+: considerar público amplio o la expansión de la segmentación' }, 1, { pt: 'Isso! É a própria recomendação da Meta.', es: '¡Eso! Es la propia recomendación de Meta.' }],
        [{ pt: 'Apagar o público e criar de novo', es: 'Borrar el público y crearlo de nuevo' }, 0, { pt: 'O público novo encolheria do mesmo jeito.', es: 'El público nuevo se achicaría igual.' }],
        [{ pt: 'Configurar 8 eventos na Mensuração de Eventos Agregados', es: 'Configurar 8 eventos en la Medición de eventos agregados' }, 0, { pt: 'Esse processo não existe mais e não muda o tamanho do público.', es: 'Ese proceso ya no existe y no cambia el tamaño del público.' }]] }
  ]);
  quizCatalogo('sdk-ou-pixel', { pt: 'Pixel, SDK ou API?', es: '¿Píxel, SDK o API?' }, { pt: 'Para cada situação, qual ferramenta mede o evento?', es: 'Para cada situación, ¿qué herramienta mide el evento?' }, [
    { q: { pt: 'Compra no site da Lojinha (navegador).', es: 'Compra en el sitio de la Lojinha (navegador).' },
      o: [[{ pt: 'Pixel (e, se quiser, a API de Conversões pelo servidor)', es: 'Píxel (y, si quieres, la API de Conversiones por el servidor)' }, 1, { pt: 'Isso! Site = Pixel; a API de Conversões complementa.', es: '¡Eso! Sitio = píxel; la API de Conversiones complementa.' }],
        [{ pt: 'SDK do Facebook', es: 'SDK de Facebook' }, 0, { pt: 'O SDK é para apps de celular.', es: 'El SDK es para apps de celular.' }],
        [{ pt: 'SKAdNetwork', es: 'SKAdNetwork' }, 0, { pt: 'SKAdNetwork é da Apple, para campanhas de app no iOS.', es: 'SKAdNetwork es de Apple, para campañas de app en iOS.' }]] },
    { q: { pt: 'Alguém instala o app da Lojinha e abre pela primeira vez.', es: 'Alguien instala la app de la Lojinha y la abre por primera vez.' },
      o: [[{ pt: 'O SDK do Facebook registra sozinho (instalação e abertura)', es: 'El SDK de Facebook lo registra solo (instalación y apertura)' }, 1, { pt: 'Isso! São eventos registrados automaticamente.', es: '¡Eso! Son eventos registrados automáticamente.' }],
        [{ pt: 'O Pixel, colado na tela inicial do app', es: 'El píxel, pegado en la pantalla de inicio de la app' }, 0, { pt: 'Pixel não é para apps.', es: 'El píxel no es para apps.' }],
        [{ pt: 'Ninguém: instalação não dá para medir', es: 'Nadie: la instalación no se puede medir' }, 0, { pt: 'O SDK mede instalações automaticamente.', es: 'El SDK mide instalaciones automáticamente.' }]] },
    { q: { pt: 'Compra de uma caneca dentro do app, para anúncio de catálogo.', es: 'Compra de una taza dentro de la app, para anuncio de catálogo.' },
      o: [[{ pt: 'Evento de compra do SDK com valor, moeda e o id do produto igual ao do catálogo', es: 'Evento de compra del SDK con valor, moneda y el id del producto igual al del catálogo' }, 1, { pt: 'Isso! O id liga o evento ao produto do catálogo.', es: '¡Eso! El id une el evento al producto del catálogo.' }],
        [{ pt: 'Qualquer evento, sem id', es: 'Cualquier evento, sin id' }, 0, { pt: 'Sem id do produto, o anúncio de catálogo não sabe o que foi comprado.', es: 'Sin id del producto, el anuncio de catálogo no sabe qué se compró.' }],
        [{ pt: 'Só o Pixel do site', es: 'Solo el píxel del sitio' }, 0, { pt: 'A compra foi no app: quem registra é o SDK.', es: 'La compra fue en la app: quien la registra es el SDK.' }]] },
    { q: { pt: 'Como o desenvolvedor testa se os eventos do app chegam?', es: '¿Cómo prueba el desarrollador si los eventos de la app llegan?' },
      o: [[{ pt: 'App Ads Helper (Testar eventos do app) e Gerenciador de Eventos', es: 'App Ads Helper (Probar eventos de la app) y Administrador de eventos' }, 1, { pt: 'Isso! São as ferramentas indicadas na documentação.', es: '¡Eso! Son las herramientas indicadas en la documentación.' }],
        [{ pt: 'Microdata Debugger', es: 'Microdata Debugger' }, 0, { pt: 'O Microdata Debugger confere páginas de produto do site.', es: 'El Microdata Debugger revisa páginas de producto del sitio.' }],
        [{ pt: 'Esperar 30 dias e olhar o relatório', es: 'Esperar 30 días y mirar el informe' }, 0, { pt: 'Teste antes: o App Ads Helper mostra os eventos na hora.', es: 'Prueba antes: el App Ads Helper muestra los eventos al momento.' }]] }
  ]);
  quizCatalogo('aem-ou-skan', { pt: 'AEM ou SKAdNetwork?', es: '¿AEM o SKAdNetwork?' }, { pt: 'Campanhas de app para iOS 14+: o que vale para cada caminho?', es: 'Campañas de app para iOS 14+: ¿qué vale para cada camino?' }, [
    { q: { pt: 'Relatórios quase em tempo real e janelas de clique de 1 e 7 dias.', es: 'Informes casi en tiempo real y ventanas de clic de 1 y 7 días.' },
      o: [[{ pt: 'Mensuração de Eventos Agregados (AEM)', es: 'Medición de eventos agregados (AEM)' }, 1, { pt: 'Isso! É uma das vantagens da AEM para campanhas de app.', es: '¡Eso! Es una de las ventajas de la AEM para campañas de app.' }],
        [{ pt: 'SKAdNetwork', es: 'SKAdNetwork' }, 0, { pt: 'A SKAdNetwork tem atraso de 24 h ou mais e não usa essas janelas.', es: 'SKAdNetwork tiene retraso de 24 h o más y no usa esas ventanas.' }]] },
    { q: { pt: 'Limite de 63 eventos do app e configuração no Gerenciador de Eventos.', es: 'Límite de 63 eventos de la app y configuración en el Administrador de eventos.' },
      o: [[{ pt: 'SKAdNetwork da Apple', es: 'SKAdNetwork de Apple' }, 1, { pt: 'Isso! A API da SKAdNetwork limita os apps a 63 eventos.', es: '¡Eso! La API de SKAdNetwork limita las apps a 63 eventos.' }],
        [{ pt: 'Mensuração de Eventos Agregados', es: 'Medición de eventos agregados' }, 0, { pt: 'Na AEM o que se confere é a qualificação do app.', es: 'En la AEM lo que se revisa es la elegibilidad de la app.' }]] },
    { q: { pt: 'O Gerenciador diz que o app não está qualificado. Onde conferir?', es: 'El Administrador dice que la app no es apta. ¿Dónde revisarlo?' },
      o: [[{ pt: 'Gerenciador de Eventos › conjunto de dados do app › Configurações › Verificar qualificação do app', es: 'Administrador de eventos › conjunto de datos de la app › Configuración › Comprobar elegibilidad de la app' }, 1, { pt: 'Isso! A coluna Qualificação mostra o que falta.', es: '¡Eso! La columna de elegibilidad muestra lo que falta.' }],
        [{ pt: 'Na aba Mensuração de Eventos Agregados (8 eventos)', es: 'En la pestaña Medición de eventos agregados (8 eventos)' }, 0, { pt: 'Essa aba foi removida.', es: 'Esa pestaña se eliminó.' }],
        [{ pt: 'Nas configurações do iPhone', es: 'En la configuración del iPhone' }, 0, { pt: 'A qualificação é da integração do app com a Meta.', es: 'La elegibilidad es de la integración de la app con Meta.' }]] },
    { q: { pt: 'A qualificação do app aparece como “pendente”.', es: 'La elegibilidad de la app aparece como “pendiente”.' },
      o: [[{ pt: 'A Meta ainda está aguardando ou verificando informações da integração', es: 'Meta todavía está esperando o verificando información de la integración' }, 1, { pt: 'Isso! É esperar e verificar de novo.', es: '¡Eso! Hay que esperar y comprobar de nuevo.' }],
        [{ pt: 'O app foi reprovado para sempre', es: 'La app fue rechazada para siempre' }, 0, { pt: 'Pendente não é reprovado.', es: 'Pendiente no es rechazado.' }],
        [{ pt: 'É preciso criar outro app', es: 'Hay que crear otra app' }, 0, { pt: 'Não: aguarde a verificação.', es: 'No: espera la verificación.' }]] }
  ]);
  quizCatalogo('tags-microdados', { pt: 'A tag está certa?', es: '¿La etiqueta está bien?' }, { pt: 'Tags de microdados da página de produto: ache o que o catálogo não entenderia.', es: 'Etiquetas de microdatos de la página de producto: encuentra lo que el catálogo no entendería.' }, [
    { q: { pt: '<code>&lt;meta property="product:price:amount" content="R$ 39,90"&gt;</code>', es: '<code>&lt;meta property="product:price:amount" content="R$ 39,90"&gt;</code>' },
      o: [[{ pt: 'Errada: o preço é só o número com ponto (39.90) e a moeda vai em product:price:currency (BRL)', es: 'Mal: el precio es solo el número con punto (39.90) y la moneda va en product:price:currency (BRL)' }, 1, { pt: 'Isso! Número e moeda ficam em tags separadas.', es: '¡Eso! Número y moneda van en etiquetas separadas.' }],
        [{ pt: 'Certa: é o formato brasileiro', es: 'Bien: es el formato brasileño' }, 0, { pt: 'A tag é para a Meta ler: número com ponto, sem símbolo.', es: 'La etiqueta es para que Meta la lea: número con punto, sin símbolo.' }],
        [{ pt: 'Certa, desde que a moeda também esteja escrita', es: 'Bien, siempre que la moneda también esté escrita' }, 0, { pt: 'O símbolo e a vírgula continuam errados no amount.', es: 'El símbolo y la coma siguen mal en el amount.' }]] },
    { q: { pt: '<code>&lt;meta property="product:availability" content="em estoque"&gt;</code>', es: '<code>&lt;meta property="product:availability" content="em estoque"&gt;</code>' },
      o: [[{ pt: 'Errada: o valor é em inglês, in stock (ou out of stock)', es: 'Mal: el valor va en inglés, in stock (u out of stock)' }, 1, { pt: 'Isso! Disponibilidade e condição só valem em inglês.', es: '¡Eso! Disponibilidad y condición solo valen en inglés.' }],
        [{ pt: 'Certa: a Meta traduz', es: 'Bien: Meta traduce' }, 0, { pt: 'Não traduz: só entende os valores em inglês.', es: 'No traduce: solo entiende los valores en inglés.' }],
        [{ pt: 'Tanto faz: disponibilidade é opcional', es: 'Da igual: la disponibilidad es opcional' }, 0, { pt: 'É um dos campos que o catálogo precisa.', es: 'Es uno de los campos que necesita el catálogo.' }]] },
    { q: { pt: '<code>&lt;meta property="product:retailer_item_id" content="facebook_tshirt_001"&gt;</code> na página da Ecobag (no catálogo ela é ECOBAG_03)', es: '<code>&lt;meta property="product:retailer_item_id" content="facebook_tshirt_001"&gt;</code> en la página de la Ecobag (en el catálogo es ECOBAG_03)' },
      o: [[{ pt: 'Errada: o id tem que ser o mesmo do catálogo (ECOBAG_03); esse veio do exemplo da Meta', es: 'Mal: el id debe ser el mismo del catálogo (ECOBAG_03); ese vino del ejemplo de Meta' }, 1, { pt: 'Isso! Com outro id, a página não se liga ao produto nem aos eventos do Pixel.', es: '¡Eso! Con otro id, la página no se une al producto ni a los eventos del píxel.' }],
        [{ pt: 'Certa: qualquer id serve, desde que exista', es: 'Bien: cualquier id sirve, siempre que exista' }, 0, { pt: 'O id é o que liga página, catálogo e Pixel: tem que ser igual.', es: 'El id es lo que une página, catálogo y píxel: debe ser igual.' }],
        [{ pt: 'Certa: é o id oficial da Meta', es: 'Bien: es el id oficial de Meta' }, 0, { pt: 'É só o valor do exemplo da documentação.', es: 'Es solo el valor del ejemplo de la documentación.' }]] },
    { q: { pt: 'O site tem as tags OpenGraph no &lt;head&gt; e mais nada (sem JSON-LD).', es: 'El sitio tiene las etiquetas OpenGraph en el &lt;head&gt; y nada más (sin JSON-LD).' },
      o: [[{ pt: 'Tudo bem: a Meta aceita OpenGraph, schema.org ou JSON-LD; um formato basta', es: 'Está bien: Meta acepta OpenGraph, schema.org o JSON-LD; con un formato basta' }, 1, { pt: 'Isso! Se tiver mais de um, os valores devem combinar.', es: '¡Eso! Si tiene más de uno, los valores deben coincidir.' }],
        [{ pt: 'Falta: precisa ter os três formatos', es: 'Falta: necesita los tres formatos' }, 0, { pt: 'Não precisa: um formato completo basta.', es: 'No hace falta: un formato completo basta.' }],
        [{ pt: 'Falta: OpenGraph só serve para o compartilhamento de links', es: 'Falta: OpenGraph solo sirve para compartir enlaces' }, 0, { pt: 'As tags og: e product: são um dos formatos que o catálogo lê.', es: 'Las etiquetas og: y product: son uno de los formatos que lee el catálogo.' }]] }
  ]);
  quizCatalogo('planilha-ok', { pt: 'A planilha está certa?', es: '¿La planilla está bien?' }, { pt: 'Ache o que a Meta recusaria em cada linha.', es: 'Encuentra lo que Meta rechazaría en cada fila.' }, [
    { q: { pt: 'price: R$ 54,90', es: 'price: R$ 54,90' },
      o: [[{ pt: 'Errado: tem que ser 54.90 BRL (número com ponto, espaço, moeda de 3 letras)', es: 'Mal: debe ser 54.90 BRL (número con punto, espacio, moneda de 3 letras)' }, 1, { pt: 'Isso! “Erros de preço ou moeda ausente ou inválida”.', es: '¡Eso! Error de precio o moneda faltante o no válida.' }],
        [{ pt: 'Certo: é o jeito brasileiro', es: 'Bien: es el formato brasileño' }, 0, { pt: 'A Meta pede ponto decimal e código ISO, sem símbolo.', es: 'Meta pide punto decimal y código ISO, sin símbolo.' }],
        [{ pt: 'Certo, desde que a loja seja brasileira', es: 'Bien, siempre que la tienda sea brasileña' }, 0, { pt: 'O formato é o mesmo para todas as moedas.', es: 'El formato es el mismo para todas las monedas.' }]] },
    { q: { pt: 'availability: em estoque', es: 'availability: em estoque' },
      o: [[{ pt: 'Errado: os valores aceitos são in stock ou out of stock', es: 'Mal: los valores aceptados son in stock u out of stock' }, 1, { pt: 'Isso! “Valores inválidos”.', es: '¡Eso! Valores no válidos.' }],
        [{ pt: 'Certo, a Meta traduz', es: 'Bien, Meta traduce' }, 0, { pt: 'Não traduz: só aceita os valores em inglês.', es: 'No traduce: solo acepta los valores en inglés.' }],
        [{ pt: 'Tanto faz, é opcional', es: 'Da igual, es opcional' }, 0, { pt: 'availability é obrigatório.', es: 'availability es obligatorio.' }]] },
    { q: { pt: 'Duas linhas com id CANECA_01 (Caneca azul e Caneca amarela)', es: 'Dos filas con id CANECA_01 (Caneca azul y Caneca amarela)' },
      o: [[{ pt: 'Errado: cada produto precisa de um id único', es: 'Mal: cada producto necesita un id único' }, 1, { pt: 'Isso! “Não pode haver identificações duplicadas”.', es: '¡Eso! No puede haber identificadores duplicados.' }],
        [{ pt: 'Certo: são canecas', es: 'Bien: son tazas' }, 0, { pt: 'Mesmo parecidos, cada produto tem o seu id.', es: 'Aunque sean parecidos, cada producto tiene su id.' }],
        [{ pt: 'Certo, se o preço for igual', es: 'Bien, si el precio es igual' }, 0, { pt: 'O id identifica o produto, não o preço.', es: 'El id identifica el producto, no el precio.' }]] },
    { q: { pt: 'A linha “Tapete listrado · Jasper\'s Market” que veio no modelo', es: 'La fila “Tapete listrado · Jasper\'s Market” que vino en la plantilla' },
      o: [[{ pt: 'Apagar antes de carregar: senão vira um produto no catálogo', es: 'Borrarla antes de subir: si no, se vuelve un producto en el catálogo' }, 1, { pt: 'Isso! A Meta pede para excluir as linhas de exemplo.', es: '¡Eso! Meta pide eliminar las filas de ejemplo.' }],
        [{ pt: 'Deixar: a Meta ignora', es: 'Dejarla: Meta la ignora' }, 0, { pt: 'Não ignora: é uma linha válida e entra no catálogo.', es: 'No la ignora: es una fila válida y entra al catálogo.' }],
        [{ pt: 'Deixar como modelo para o próximo produto', es: 'Dejarla como modelo para el próximo producto' }, 0, { pt: 'Ela entraria como produto de verdade.', es: 'Entraría como producto de verdad.' }]] }
  ]);
  quizCatalogo('por-que-nao-aparece', { pt: 'Por que o produto não aparece?', es: '¿Por qué no aparece el producto?' }, { pt: 'Três casos de “meu produto sumiu”: ache onde olhar primeiro.', es: 'Tres casos de “mi producto desapareció”: encuentra dónde mirar primero.' }, [
    { q: { pt: 'O Moletom aparece no catálogo como “Indisponível”. A loja diz que tem estoque.', es: 'El Moletom aparece en el catálogo como “Agotado”. La tienda dice que hay stock.' },
      o: [[{ pt: 'O estoque vem do arquivo (feed): corrija no site e depois use Atualizar na fonte de dados', es: 'El stock viene del archivo (feed): corrígelo en el sitio y luego usa Actualizar en el origen de datos' }, 1, { pt: 'Isso! O catálogo só repete o que o arquivo diz.', es: '¡Eso! El catálogo solo repite lo que dice el archivo.' }],
        [{ pt: 'Apagar o produto e criar de novo', es: 'Eliminar el producto y crearlo de nuevo' }, 0, { pt: 'Na próxima atualização do arquivo ele voltaria como estava.', es: 'En la próxima actualización del archivo volvería como estaba.' }],
        [{ pt: 'Criar outro catálogo', es: 'Crear otro catálogo' }, 0, { pt: 'O problema é a informação do arquivo, não o catálogo.', es: 'El problema es la información del archivo, no el catálogo.' }]] },
    { q: { pt: 'O cliente diz: “mudei o preço no site e o catálogo continua com o antigo”.', es: 'El cliente dice: “cambié el precio en el sitio y el catálogo sigue con el anterior”.' },
      o: [[{ pt: 'Ver na aba Fontes de dados quando foi a última atualização e a frequência; usar Atualizar', es: 'Ver en la pestaña Orígenes de datos cuándo fue la última actualización y la frecuencia; usar Actualizar' }, 1, { pt: 'Isso! O carregamento é programado (por exemplo, todos os dias).', es: '¡Eso! La subida es programada (por ejemplo, todos los días).' }],
        [{ pt: 'Dizer que a Meta está com defeito', es: 'Decir que Meta está fallando' }, 0, { pt: 'Primeiro confira a data da última atualização.', es: 'Primero revisa la fecha de la última actualización.' }],
        [{ pt: 'Pedir para o cliente refazer a loja', es: 'Pedir al cliente que rehaga la tienda' }, 0, { pt: 'Exagero: é questão de atualização.', es: 'Exagerado: es cuestión de actualización.' }]] },
    { q: { pt: 'Um produto não está “Qualificado”: aparece com aviso na lista.', es: 'Un producto no está “Elegible”: aparece con aviso en la lista.' },
      o: [[{ pt: 'Abrir o produto, ler o aviso, corrigir o dado no arquivo e atualizar. Se for recusa por política, seguir o encaminhamento do módulo', es: 'Abrir el producto, leer el aviso, corregir el dato en el archivo y actualizar. Si es rechazo por política, seguir la derivación del módulo' }, 1, { pt: 'Isso! Dados do arquivo você resolve; recusas por política vão para a área certa.', es: '¡Eso! Los datos del archivo los resuelves; los rechazos por política van al área correcta.' }],
        [{ pt: 'Prometer ao cliente que a Meta vai aprovar', es: 'Prometer al cliente que Meta va a aprobar' }, 0, { pt: 'Nunca prometa aprovação.', es: 'Nunca prometas aprobación.' }],
        [{ pt: 'Ignorar o aviso', es: 'Ignorar el aviso' }, 0, { pt: 'O aviso diz exatamente o que corrigir.', es: 'El aviso dice exactamente qué corregir.' }]] }
  ]);

  /* ---------- 14. Anúncios no Feed: cinco mini-quizzes (Feed 01–05) ---------- */
  quizCatalogo('anatomia-anuncio', { pt: 'Que parte do anúncio é essa?', es: '¿Qué parte del anuncio es esa?' }, { pt: 'Ligue o que a pessoa vê ao campo certo do Gerenciador.', es: 'Une lo que ve la persona con el campo correcto del Administrador.' }, [
    { q: { pt: 'O texto que aparece acima da imagem: “Canecas feitas com carinho. Peça a sua!”', es: 'El texto que aparece arriba de la imagen: “Tazas hechas con cariño. ¡Pide la tuya!”' },
      o: [[{ pt: 'Texto principal', es: 'Texto principal' }, 1, { pt: 'Isso! É o que as pessoas leem primeiro, acima da imagem.', es: '¡Eso! Es lo primero que lee la gente, arriba de la imagen.' }],
        [{ pt: 'Título', es: 'Título' }, 0, { pt: 'O título é a linha curta que fica abaixo da imagem, junto ao botão.', es: 'El título es la línea corta que queda debajo de la imagen, junto al botón.' }],
        [{ pt: 'URL do site', es: 'URL del sitio web' }, 0, { pt: 'O URL é o endereço para onde o clique leva, não um texto que a pessoa lê.', es: 'La URL es la dirección a la que lleva el clic, no un texto que lee la persona.' }]] },
    { q: { pt: 'O nome “Lojinha da Marina - Fictício” que aparece no topo do anúncio.', es: 'El nombre “Lojinha da Marina - Fictício” que aparece arriba del anuncio.' },
      o: [[{ pt: 'Identidade: a Página do Facebook que assina o anúncio', es: 'Identidad: la Página de Facebook que firma el anuncio' }, 1, { pt: 'Isso! A Página é obrigatória; o perfil do Instagram é opcional.', es: '¡Eso! La Página es obligatoria; el perfil de Instagram es opcional.' }],
        [{ pt: 'Chamada para ação', es: 'Llamada a la acción' }, 0, { pt: 'A chamada para ação é o botão (Ver detalhes, Comprar agora…).', es: 'La llamada a la acción es el botón (Ver detalles, Comprar ahora…).' }],
        [{ pt: 'Título', es: 'Título' }, 0, { pt: 'O título é outra coisa: fica abaixo da imagem.', es: 'El título es otra cosa: queda debajo de la imagen.' }]] },
    { q: { pt: 'O botão “Comprar agora” no canto do anúncio.', es: 'El botón “Comprar ahora” en la esquina del anuncio.' },
      o: [[{ pt: 'Chamada para ação', es: 'Llamada a la acción' }, 1, { pt: 'Isso! A lista tem Ver detalhes, Saiba mais, Comprar agora, Cadastre-se, Enviar mensagem, Ligar agora e Nenhum botão.', es: '¡Eso! La lista tiene Ver detalles, Más información, Comprar ahora, Registrarte, Enviar mensaje, Llamar ahora y Sin botón.' }],
        [{ pt: 'Descrição', es: 'Descripción' }, 0, { pt: 'A descrição é um texto extra com detalhes; o botão é a chamada para ação.', es: 'La descripción es un texto extra con detalles; el botón es la llamada a la acción.' }],
        [{ pt: 'Destino', es: 'Destino' }, 0, { pt: 'O destino é para onde o clique leva; o botão é só o convite a clicar.', es: 'El destino es adonde lleva el clic; el botón es solo la invitación a hacer clic.' }]] },
    { q: { pt: 'O endereço da página do produto, para onde a pessoa vai ao clicar.', es: 'La dirección de la página del producto, adonde va la persona al hacer clic.' },
      o: [[{ pt: 'Destino › URL do site (campo com asterisco, obrigatório)', es: 'Destino › URL del sitio web (campo con asterisco, obligatorio)' }, 1, { pt: 'Isso! Sem o URL, não há para onde levar a pessoa.', es: '¡Eso! Sin la URL, no hay adónde llevar a la persona.' }],
        [{ pt: 'Texto principal', es: 'Texto principal' }, 0, { pt: 'Escrever o endereço no texto não faz o clique funcionar.', es: 'Escribir la dirección en el texto no hace que funcione el clic.' }],
        [{ pt: 'Nome do anúncio', es: 'Nombre del anuncio' }, 0, { pt: 'O nome é só para você se organizar; ninguém o vê.', es: 'El nombre es solo para organizarte; nadie lo ve.' }]] }
  ]);
  quizCatalogo('imagem-ou-carrossel', { pt: 'Imagem única, carrossel ou vídeo?', es: '¿Imagen única, secuencia o video?' }, { pt: 'Escolha o formato certo para cada situação da Marina.', es: 'Elige el formato correcto para cada situación de Marina.' }, [
    { q: { pt: 'A Marina quer destacar só a Caneca azul, com uma boa foto.', es: 'Marina quiere destacar solo la Caneca azul, con una buena foto.' },
      o: [[{ pt: 'Formato “Imagem ou vídeo único”, com Anúncio em imagem', es: 'Formato “Una sola imagen o video”, con Anuncio en imagen' }, 1, { pt: 'Isso! Uma peça só para um produto só.', es: '¡Eso! Una sola pieza para un solo producto.' }],
        [{ pt: 'Carrossel, para mostrar vários cartões', es: 'Secuencia, para mostrar varias tarjetas' }, 0, { pt: 'O carrossel é para mostrar vários itens; aqui é um só.', es: 'La secuencia es para mostrar varios elementos; aquí es uno solo.' }],
        [{ pt: 'Deixar sem mídia', es: 'Dejarlo sin contenido multimedia' }, 0, { pt: 'Sem mídia a tela avisa “Especifique a mídia” e não dá para publicar.', es: 'Sin contenido multimedia la pantalla avisa “Especifica el contenido multimedia” y no se puede publicar.' }]] },
    { q: { pt: 'Na tela do anúncio aparece o aviso “Especifique a mídia para veicular com este anúncio”. O que fazer?', es: 'En la pantalla del anuncio aparece el aviso “Especifica el contenido multimedia para publicar este anuncio”. ¿Qué hacer?' },
      o: [[{ pt: 'Clicar em Configurar criativo e escolher Anúncio em imagem (ou em vídeo)', es: 'Hacer clic en Configurar contenido y elegir Anuncio en imagen (o en video)' }, 1, { pt: 'Isso! Depois escolha a mídia na biblioteca ou carregue uma nova.', es: '¡Eso! Después elige el contenido en la biblioteca o sube uno nuevo.' }],
        [{ pt: 'Escrever o texto principal e pronto', es: 'Escribir el texto principal y listo' }, 0, { pt: 'O texto não substitui a mídia.', es: 'El texto no sustituye al contenido multimedia.' }],
        [{ pt: 'Trocar o objetivo da campanha', es: 'Cambiar el objetivo de la campaña' }, 0, { pt: 'O objetivo não tem a ver com a mídia que falta.', es: 'El objetivo no tiene que ver con el contenido que falta.' }]] },
    { q: { pt: 'O cliente quer “o mesmo anúncio, mas em vídeo”. A tela até sugere: “duplique e adicione um vídeo”.', es: 'El cliente quiere “el mismo anuncio, pero en video”. La pantalla incluso sugiere: “duplícalo y agrega un video”.' },
      o: [[{ pt: 'Duplicar o anúncio de imagem e, no novo, configurar um Anúncio em vídeo', es: 'Duplicar el anuncio de imagen y, en el nuevo, configurar un Anuncio en video' }, 1, { pt: 'Isso! A própria tela diz que ter anúncios de imagem e de vídeo no conjunto ajuda nas conversões.', es: '¡Eso! La propia pantalla dice que tener anuncios de imagen y de video en el conjunto ayuda con las conversiones.' }],
        [{ pt: 'Apagar o anúncio de imagem', es: 'Eliminar el anuncio de imagen' }, 0, { pt: 'Não precisa: os dois podem ficar no mesmo conjunto.', es: 'No hace falta: los dos pueden quedar en el mismo conjunto.' }],
        [{ pt: 'Criar outra campanha', es: 'Crear otra campaña' }, 0, { pt: 'Exagero: basta um novo anúncio no mesmo conjunto.', es: 'Exagerado: basta un nuevo anuncio en el mismo conjunto.' }]] }
  ]);
  quizCatalogo('qual-corte', { pt: 'Qual corte para cada lugar?', es: '¿Qué recorte para cada lugar?' }, { pt: 'Cada grupo de posicionamentos recomenda um formato diferente.', es: 'Cada grupo de ubicaciones recomienda un formato distinto.' }, [
    { q: { pt: 'No grupo dos Feeds, qual corte a tela marca como recomendado?', es: 'En el grupo de Feeds, ¿qué recorte marca la pantalla como recomendado?' },
      o: [[{ pt: 'Quadrado 1:1', es: 'Cuadrado 1:1' }, 1, { pt: 'Isso! Para Feeds, “Quadrado 1:1 (recomendado)”. Também há Original, 9:16, 1,91:1 e 4:5.', es: '¡Eso! Para Feeds, “Cuadrado 1:1 (recomendado)”. También hay Original, 9:16, 1,91:1 y 4:5.' }],
        [{ pt: 'Vertical em tela cheia 9:16', es: 'Vertical en pantalla completa 9:16' }, 0, { pt: 'O 9:16 é o recomendado para Stories e Reels, não para os Feeds.', es: 'El 9:16 es el recomendado para Stories y Reels, no para los Feeds.' }],
        [{ pt: 'Horizontal 1,91:1', es: 'Horizontal 1,91:1' }, 0, { pt: 'Existe como opção, mas o recomendado é outro.', es: 'Existe como opción, pero el recomendado es otro.' }]] },
    { q: { pt: 'No grupo de Stories e Reels, qual é o corte recomendado?', es: 'En el grupo de Stories y Reels, ¿cuál es el recorte recomendado?' },
      o: [[{ pt: 'Vertical em tela cheia 9:16', es: 'Vertical en pantalla completa 9:16' }, 1, { pt: 'Isso! A tela é vertical: o 9:16 preenche sem faixas.', es: '¡Eso! La pantalla es vertical: el 9:16 llena sin franjas.' }],
        [{ pt: 'Quadrado 1:1', es: 'Cuadrado 1:1' }, 0, { pt: 'Um quadrado deixa faixas escuras em cima e embaixo.', es: 'Un cuadrado deja franjas oscuras arriba y abajo.' }],
        [{ pt: 'Horizontal 1,91:1', es: 'Horizontal 1,91:1' }, 0, { pt: 'Horizontal em tela vertical sobra ainda mais espaço.', es: 'Horizontal en pantalla vertical deja aún más espacio.' }]] },
    { q: { pt: 'A Marina ajustou o corte para 9:16 no grupo de Stories. O que acontece nos Feeds?', es: 'Marina ajustó el recorte a 9:16 en el grupo de Stories. ¿Qué pasa en los Feeds?' },
      o: [[{ pt: 'Nada: cada grupo tem o seu corte, e só o de Stories mudou', es: 'Nada: cada grupo tiene su recorte, y solo cambió el de Stories' }, 1, { pt: 'Isso! Cada “Editar grupo” mexe só no seu grupo.', es: '¡Eso! Cada “Editar grupo” solo cambia su grupo.' }],
        [{ pt: 'Os Feeds também viram 9:16', es: 'Los Feeds también pasan a 9:16' }, 0, { pt: 'Não: os grupos são independentes.', es: 'No: los grupos son independientes.' }],
        [{ pt: 'O anúncio é apagado e recriado', es: 'El anuncio se elimina y se vuelve a crear' }, 0, { pt: 'Não: só o corte daquele grupo muda.', es: 'No: solo cambia el recorte de ese grupo.' }]] }
  ]);
  quizCatalogo('destino-e-botao', { pt: 'Destino e botão: o que está certo?', es: 'Destino y botón: ¿qué está correcto?' }, { pt: 'Três casos de URL, link de exibição e botão.', es: 'Tres casos de URL, enlace visible y botón.' }, [
    { q: { pt: 'O campo “URL do site” está vazio e a tela não deixa publicar.', es: 'El campo “URL del sitio web” está vacío y la pantalla no deja publicar.' },
      o: [[{ pt: 'Preencher com o endereço da página do produto, começando com https://', es: 'Completar con la dirección de la página del producto, empezando con https://' }, 1, { pt: 'Isso! É um campo obrigatório (o asterisco avisa).', es: '¡Eso! Es un campo obligatorio (el asterisco avisa).' }],
        [{ pt: 'Escrever o endereço no texto principal', es: 'Escribir la dirección en el texto principal' }, 0, { pt: 'O campo de destino continua vazio; o clique não leva a lugar nenhum.', es: 'El campo de destino sigue vacío; el clic no lleva a ningún lado.' }],
        [{ pt: 'Marcar “Usar um link de exibição”', es: 'Marcar “Usar un enlace visible”' }, 0, { pt: 'O link de exibição só muda o texto mostrado; o URL real continua obrigatório.', es: 'El enlace visible solo cambia el texto mostrado; la URL real sigue siendo obligatoria.' }]] },
    { q: { pt: 'O cliente quer que o anúncio mostre “lojinha.com.br” em vez do endereço comprido. O que usar?', es: 'El cliente quiere que el anuncio muestre “lojinha.com” en lugar de la dirección larga. ¿Qué usar?' },
      o: [[{ pt: 'Usar um link de exibição: muda só o texto mostrado, e o clique continua indo para o URL', es: 'Usar un enlace visible: cambia solo el texto mostrado, y el clic sigue yendo a la URL' }, 1, { pt: 'Isso! E o link de exibição deve mostrar o mesmo site do URL real.', es: '¡Eso! Y el enlace visible debe mostrar el mismo sitio que la URL real.' }],
        [{ pt: 'Trocar o URL real por “lojinha.com.br” e esperar que funcione', es: 'Cambiar la URL real por “lojinha.com” y esperar que funcione' }, 0, { pt: 'Isso pode levar a pessoa a uma página que não é a do produto.', es: 'Eso puede llevar a la persona a una página que no es la del producto.' }],
        [{ pt: 'Não dá para fazer', es: 'No se puede hacer' }, 0, { pt: 'Dá: é a opção “Usar um link de exibição”.', es: 'Se puede: es la opción “Usar un enlace visible”.' }]] },
    { q: { pt: 'A Marina vai levar as pessoas à página de compra da caneca. Qual botão combina?', es: 'Marina va a llevar a las personas a la página de compra de la taza. ¿Qué botón combina?' },
      o: [[{ pt: '“Comprar agora” (ou o padrão “Ver detalhes”, que a tela diz render um CVR até 2,3% maior que “Saiba mais”)', es: '“Comprar ahora” (o el predeterminado “Ver detalles”, que la pantalla dice que rinde un CVR hasta un 2,3% mayor que “Más información”)' }, 1, { pt: 'Isso! O botão deve combinar com o que acontece ao clicar.', es: '¡Eso! El botón debe combinar con lo que pasa al hacer clic.' }],
        [{ pt: '“Ligar agora”', es: '“Llamar ahora”' }, 0, { pt: 'Esse botão convida a ligar, não a comprar no site.', es: 'Ese botón invita a llamar, no a comprar en el sitio.' }],
        [{ pt: '“Enviar mensagem”', es: '“Enviar mensaje”' }, 0, { pt: 'Esse botão convida a conversar; a Marina quer que a pessoa compre no site.', es: 'Ese botón invita a conversar; Marina quiere que la persona compre en el sitio.' }]] }
  ]);
  quizCatalogo('anuncio-esquisito', { pt: 'Meu anúncio ficou estranho: por quê?', es: 'Mi anuncio quedó raro: ¿por qué?' }, { pt: 'Quatro reclamações de clientes: ache onde olhar primeiro.', es: 'Cuatro reclamos de clientes: encuentra dónde mirar primero.' }, [
    { q: { pt: 'No Story, o anúncio aparece com faixas escuras em cima e embaixo.', es: 'En el Story, el anuncio aparece con franjas oscuras arriba y abajo.' },
      o: [[{ pt: 'Ver a prévia de Stories e ajustar o corte para 9:16 em Editar grupo', es: 'Ver la vista previa de Stories y ajustar el recorte a 9:16 en Editar grupo' }, 1, { pt: 'Isso! O corte “Original” de uma imagem quadrada deixa faixas na tela vertical.', es: '¡Eso! El recorte “Original” de una imagen cuadrada deja franjas en la pantalla vertical.' }],
        [{ pt: 'Dizer que é defeito da Meta', es: 'Decir que es un defecto de Meta' }, 0, { pt: 'É só o corte da imagem: se resolve na prévia e em Editar grupo.', es: 'Es solo el recorte de la imagen: se resuelve en la vista previa y en Editar grupo.' }],
        [{ pt: 'Trocar o objetivo da campanha', es: 'Cambiar el objetivo de la campaña' }, 0, { pt: 'O objetivo não muda o corte da imagem.', es: 'El objetivo no cambia el recorte de la imagen.' }]] },
    { q: { pt: 'O cliente diz: “meu anúncio ganhou música e animação que eu não pedi!”', es: 'El cliente dice: “¡mi anuncio recibió música y animación que yo no pedí!”' },
      o: [[{ pt: 'Conferir os Aprimoramentos de criativo: “Adicionar música” e “Adicionar animação” vêm “Ativado por padrão”', es: 'Revisar las Mejoras del contenido: “Agregar música” y “Agregar animación” vienen “Activado de forma predeterminada”' }, 1, { pt: 'Isso! Mostre onde estão e deixe o cliente decidir se quer manter.', es: '¡Eso! Muestra dónde están y deja que el cliente decida si quiere mantenerlas.' }],
        [{ pt: 'Dizer que ele mesmo escolheu e encerrar', es: 'Decir que él mismo lo eligió y terminar' }, 0, { pt: 'Não: vêm ativados por padrão, e o cliente pode não ter percebido.', es: 'No: vienen activados de forma predeterminada, y el cliente puede no haberlo notado.' }],
        [{ pt: 'Apagar a campanha', es: 'Eliminar la campaña' }, 0, { pt: 'Exagero: é só rever os aprimoramentos.', es: 'Exagerado: basta revisar las mejoras.' }]] },
    { q: { pt: 'A imagem aparece cortada em um dos lugares. A caixa “Anúncios com vários anunciantes” está marcada.', es: 'La imagen aparece recortada en uno de los lugares. La casilla “Anuncios multianunciante” está marcada.' },
      o: [[{ pt: 'Lembrar que a própria tela avisa: o criativo pode ser redimensionado ou cortado; ver a prévia de cada grupo e ajustar o corte', es: 'Recordar que la propia pantalla avisa: el contenido puede cambiar de tamaño o recortarse; ver la vista previa de cada grupo y ajustar el recorte' }, 1, { pt: 'Isso! O aviso está na tela, e a prévia mostra cada lugar.', es: '¡Eso! El aviso está en la pantalla, y la vista previa muestra cada lugar.' }],
        [{ pt: 'Prometer que a Meta nunca corta imagens', es: 'Prometer que Meta nunca recorta imágenes' }, 0, { pt: 'Nunca prometa o que a tela diz que pode acontecer.', es: 'Nunca prometas lo que la pantalla dice que puede pasar.' }],
        [{ pt: 'Pedir ao cliente que refaça a imagem em todos os tamanhos', es: 'Pedir al cliente que rehaga la imagen en todos los tamaños' }, 0, { pt: 'Primeiro ajuste o corte na prévia, que costuma bastar.', es: 'Primero ajusta el recorte en la vista previa, que suele bastar.' }]] },
    { q: { pt: 'O anúncio foi recusado por política e o cliente exige que você “aprove agora”.', es: 'El anuncio fue rechazado por política y el cliente exige que lo “apruebes ahora”.' },
      o: [[{ pt: 'Confirmar o sintoma, seguir a Central de Ajuda da Meta e encaminhar para a área responsável, sem prometer aprovação', es: 'Confirmar el síntoma, seguir el Centro de ayuda de Meta y derivar al área responsable, sin prometer aprobación' }, 1, { pt: 'Isso! Recusa por política é tratada por outra área.', es: '¡Eso! El rechazo por política lo trata otra área.' }],
        [{ pt: 'Prometer que vai aprovar hoje', es: 'Prometer que lo va a aprobar hoy' }, 0, { pt: 'Nunca prometa aprovação.', es: 'Nunca prometas aprobación.' }],
        [{ pt: 'Mudar a imagem sem avisar o cliente', es: 'Cambiar la imagen sin avisar al cliente' }, 0, { pt: 'O cliente precisa saber e decidir.', es: 'El cliente necesita saberlo y decidir.' }]] }
  ]);

  /* ---------- 15. Instagram 05–09: cinco mini-quizzes ---------- */
  quizCatalogo('identidade-ig', { pt: 'Quem assina o anúncio?', es: '¿Quién firma el anuncio?' }, { pt: 'Página, perfil do Instagram e anúncio em parceria: o que é o quê.', es: 'Página, perfil de Instagram y anuncio en colaboración: qué es qué.' }, [
    { q: { pt: 'Na Identidade do anúncio, o que é obrigatório?', es: 'En la Identidad del anuncio, ¿qué es obligatorio?' },
      o: [[{ pt: 'A Página do Facebook (tem asterisco). O perfil do Instagram é opcional', es: 'La Página de Facebook (tiene asterisco). El perfil de Instagram es opcional' }, 1, { pt: 'Isso! Sem Instagram o anúncio ainda publica, usando a Página.', es: '¡Eso! Sin Instagram el anuncio igual se publica, usando la Página.' }],
        [{ pt: 'O perfil do Instagram', es: 'El perfil de Instagram' }, 0, { pt: 'Não: o obrigatório é a Página.', es: 'No: lo obligatorio es la Página.' }],
        [{ pt: 'Os dois, sempre', es: 'Los dos, siempre' }, 0, { pt: 'Só a Página é obrigatória.', es: 'Solo la Página es obligatoria.' }]] },
    { q: { pt: 'A Marina escolheu o perfil lojinhadamarina.aula. O que muda no anúncio?', es: 'Marina eligió el perfil lojinhadamarina.aula. ¿Qué cambia en el anuncio?' },
      o: [[{ pt: 'Nos lugares do Instagram, o anúncio aparece com o nome e o @ da loja, e não com os da Página', es: 'En los lugares de Instagram, el anuncio aparece con el nombre y el @ de la tienda, y no con los de la Página' }, 1, { pt: 'Isso! Dá a cara da loja ao anúncio no Instagram.', es: '¡Eso! Le da la cara de la tienda al anuncio en Instagram.' }],
        [{ pt: 'O anúncio deixa de aparecer no Facebook', es: 'El anuncio deja de aparecer en Facebook' }, 0, { pt: 'Não: no Facebook continua a Página.', es: 'No: en Facebook sigue la Página.' }],
        [{ pt: 'Muda o objetivo da campanha', es: 'Cambia el objetivo de la campaña' }, 0, { pt: 'A identidade não tem relação com o objetivo.', es: 'La identidad no tiene relación con el objetivo.' }]] },
    { q: { pt: 'Uma influenciadora vai anunciar com a Lojinha e quer que o anúncio apareça com os dois perfis. Que opção da tela ajuda?', es: 'Una influencer va a anunciar con la Lojinha y quiere que el anuncio aparezca con los dos perfiles. ¿Qué opción de la pantalla ayuda?' },
      o: [[{ pt: '“Anúncio em parceria”: a tela diz que veicula anúncios com criadores de conteúdo, marcas e outras empresas', es: '“Anuncio en colaboración”: la pantalla dice que publica anuncios con creadores de contenido, marcas y otras empresas' }, 1, { pt: 'Isso! Ele vem “Desativado” por padrão. Como se configura em detalhe não foi visto (a conferir).', es: '¡Eso! Viene “Desactivado” de forma predeterminada. Cómo se configura en detalle no se vio (por confirmar).' }],
        [{ pt: 'Mídia do produto', es: 'Contenido multimedia de productos' }, 0, { pt: 'Isso mostra imagens do catálogo, não parceria.', es: 'Eso muestra imágenes del catálogo, no colaboración.' }],
        [{ pt: 'Usar um link de exibição', es: 'Usar un enlace visible' }, 0, { pt: 'O link de exibição é outra coisa: o texto do endereço.', es: 'El enlace visible es otra cosa: el texto de la dirección.' }]] }
  ]);
  quizCatalogo('ig-nao-aparece', { pt: 'O Instagram não aparece na lista', es: 'El Instagram no aparece en la lista' }, { pt: 'Ache a causa mais provável e o próximo passo.', es: 'Encuentra la causa más probable y el próximo paso.' }, [
    { q: { pt: 'Na Identidade do anúncio, a lista de perfis do Instagram só mostra “Usar a Página do Facebook”. O que conferir primeiro?', es: 'En la Identidad del anuncio, la lista de perfiles de Instagram solo muestra “Usar la Página de Facebook”. ¿Qué revisar primero?' },
      o: [[{ pt: 'Se o Instagram é profissional, está no portfólio e está ligado à Página', es: 'Si el Instagram es profesional, está en el portfolio y está vinculado a la Página' }, 1, { pt: 'Isso! São os três passos das aulas 03 e 04.', es: '¡Eso! Son los tres pasos de las clases 03 y 04.' }],
        [{ pt: 'Se o texto do anúncio está bonito', es: 'Si el texto del anuncio está lindo' }, 0, { pt: 'O texto não tem relação com a lista de perfis.', es: 'El texto no tiene relación con la lista de perfiles.' }],
        [{ pt: 'Se o orçamento é alto o bastante', es: 'Si el presupuesto es lo bastante alto' }, 0, { pt: 'O orçamento não afeta a lista de perfis.', es: 'El presupuesto no afecta la lista de perfiles.' }]] },
    { q: { pt: 'A conta do Instagram do cliente ainda é pessoal. O que explicar?', es: 'La cuenta de Instagram del cliente todavía es personal. ¿Qué explicar?' },
      o: [[{ pt: 'Que ela precisa virar conta profissional (e fica pública), antes de ser adicionada ao portfólio e ligada à Página', es: 'Que necesita pasar a cuenta profesional (y queda pública), antes de agregarse al portfolio y vincularse a la Página' }, 1, { pt: 'Isso! É o que a aula 01 mostrou.', es: '¡Eso! Es lo que mostró la clase 01.' }],
        [{ pt: 'Que não faz diferença', es: 'Que no hace diferencia' }, 0, { pt: 'Faz: só conta profissional entra no portfólio.', es: 'Sí hace: solo una cuenta profesional entra en el portfolio.' }],
        [{ pt: 'Pedir a senha do cliente para resolver por ele', es: 'Pedir la contraseña del cliente para resolverlo por él' }, 0, { pt: 'Nunca peça senha. Guie o cliente para ele mesmo fazer.', es: 'Nunca pidas contraseña. Guía al cliente para que lo haga él mismo.' }]] },
    { q: { pt: 'Depois de ligar o Instagram à Página, o perfil continua sem aparecer na lista do anúncio. O que fazer?', es: 'Después de vincular el Instagram a la Página, el perfil sigue sin aparecer en la lista del anuncio. ¿Qué hacer?' },
      o: [[{ pt: 'Confirmar o que a tela mostra, conferir se o cliente tem acesso à conta de anúncios e ao Instagram no portfólio, e seguir a Central de Ajuda da Meta', es: 'Confirmar lo que muestra la pantalla, revisar si el cliente tiene acceso a la cuenta publicitaria y al Instagram en el portfolio, y seguir el Centro de ayuda de Meta' }, 1, { pt: 'Isso! Confirmar o sintoma e as permissões antes de qualquer outra coisa.', es: '¡Eso! Confirmar el síntoma y los permisos antes que cualquier otra cosa.' }],
        [{ pt: 'Dizer que é impossível', es: 'Decir que es imposible' }, 0, { pt: 'Não diga isso sem conferir.', es: 'No digas eso sin revisar.' }],
        [{ pt: 'Criar outro Instagram para o cliente', es: 'Crear otro Instagram para el cliente' }, 0, { pt: 'Exagero e perde os seguidores.', es: 'Exagerado y pierde los seguidores.' }]] }
  ]);
  quizCatalogo('onde-posto', { pt: 'Onde esse post vai?', es: '¿Adónde va esta publicación?' }, { pt: 'Postar no Facebook, no Instagram ou nos dois.', es: 'Publicar en Facebook, en Instagram o en los dos.' }, [
    { q: { pt: 'A Marina quer postar só no Instagram, não no Facebook.', es: 'Marina quiere publicar solo en Instagram, no en Facebook.' },
      o: [[{ pt: 'Em “Postar em”, desmarcar a Página e deixar só o perfil do Instagram', es: 'En “Publicar en”, desmarcar la Página y dejar solo el perfil de Instagram' }, 1, { pt: 'Isso! A tela deixa escolher onde o post vai.', es: '¡Eso! La pantalla deja elegir adónde va la publicación.' }],
        [{ pt: 'Postar nos dois e apagar no Facebook depois', es: 'Publicar en los dos y borrar en Facebook después' }, 0, { pt: 'Dá mais trabalho e o post fica visível um tempo.', es: 'Da más trabajo y la publicación queda visible un tiempo.' }],
        [{ pt: 'Não dá', es: 'No se puede' }, 0, { pt: 'Dá: é só escolher em “Postar em”.', es: 'Se puede: solo hay que elegir en “Publicar en”.' }]] },
    { q: { pt: 'A tela diz que “os posts do Instagram não podem ter mais de 10 fotos”. A Marina tem 14 fotos da coleção.', es: 'La pantalla dice que “las publicaciones de Instagram no pueden tener más de 10 fotos”. Marina tiene 14 fotos de la colección.' },
      o: [[{ pt: 'Separar em dois posts de até 10 fotos para o Instagram', es: 'Separar en dos publicaciones de hasta 10 fotos para Instagram' }, 1, { pt: 'Isso! O limite é do Instagram.', es: '¡Eso! El límite es de Instagram.' }],
        [{ pt: 'Postar as 14 mesmo assim', es: 'Publicar las 14 igual' }, 0, { pt: 'Não passa do limite que a tela mostra.', es: 'No pasa del límite que muestra la pantalla.' }],
        [{ pt: 'Trocar de rede social', es: 'Cambiar de red social' }, 0, { pt: 'Exagero.', es: 'Exagerado.' }]] },
    { q: { pt: 'O cliente quer transformar o post em anúncio na hora de postar. Onde isso aparece?', es: 'El cliente quiere convertir la publicación en anuncio al publicar. ¿Dónde aparece eso?' },
      o: [[{ pt: 'No interruptor Turbinar, no rodapé da tela de Criar post (e a tela lembra: post de anúncio só se cria no Facebook)', es: 'En el interruptor Promocionar, al pie de la pantalla de Crear publicación (y la pantalla recuerda: la publicación de anuncio solo se crea en Facebook)' }, 1, { pt: 'Isso! Ligado, ele leva ao Turbinar; deixe desligado se o cliente só quer postar.', es: '¡Eso! Activado, lleva a Promocionar; déjalo desactivado si el cliente solo quiere publicar.' }],
        [{ pt: 'Em Programar', es: 'En Programar' }, 0, { pt: 'Programar escolhe data e hora, não cria anúncio.', es: 'Programar elige fecha y hora, no crea anuncio.' }],
        [{ pt: 'Em Configurações de privacidade', es: 'En Configuración de privacidad' }, 0, { pt: 'Privacidade controla quem vê o post.', es: 'La privacidad controla quién ve la publicación.' }]] }
  ]);
  quizCatalogo('canal-certo', { pt: 'Em qual canal está?', es: '¿En qué canal está?' }, { pt: 'Mensagem direta e comentário ficam em lugares diferentes da Caixa de Entrada.', es: 'El mensaje directo y el comentario están en lugares distintos de Mensajes.' }, [
    { q: { pt: 'Uma cliente perguntou o preço por mensagem direta no Instagram.', es: 'Una clienta preguntó el precio por mensaje directo en Instagram.' },
      o: [[{ pt: 'Caixa de Entrada › canal Instagram', es: 'Mensajes › canal Instagram' }, 1, { pt: 'Isso! Mensagens diretas do Instagram ficam nesse canal.', es: '¡Eso! Los mensajes directos de Instagram están en ese canal.' }],
        [{ pt: 'Comentários do Instagram', es: 'Comentarios de Instagram' }, 0, { pt: 'Aí ficam os comentários nos posts, não as mensagens diretas.', es: 'Ahí están los comentarios en las publicaciones, no los mensajes directos.' }],
        [{ pt: 'Comentários do Facebook', es: 'Comentarios de Facebook' }, 0, { pt: 'Esse é do Facebook.', es: 'Ese es de Facebook.' }]] },
    { q: { pt: 'Alguém comentou “Tem em amarelo?” no post da Caneca azul no Instagram.', es: 'Alguien comentó “¿Hay en amarillo?” en la publicación de la Caneca azul en Instagram.' },
      o: [[{ pt: 'Caixa de Entrada › Comentários do Instagram', es: 'Mensajes › Comentarios de Instagram' }, 1, { pt: 'Isso! A resposta a um comentário aparece embaixo do post.', es: '¡Eso! La respuesta a un comentario aparece debajo de la publicación.' }],
        [{ pt: 'Canal Instagram (mensagens)', es: 'Canal Instagram (mensajes)' }, 0, { pt: 'Comentário não chega como mensagem direta.', es: 'El comentario no llega como mensaje directo.' }],
        [{ pt: 'Messenger', es: 'Messenger' }, 0, { pt: 'O Messenger é do Facebook.', es: 'Messenger es de Facebook.' }]] },
    { q: { pt: 'A Marina tem dezenas de conversas e teme esquecer alguma.', es: 'Marina tiene decenas de conversaciones y teme olvidar alguna.' },
      o: [[{ pt: 'Usar o filtro Não lidas', es: 'Usar el filtro No leídos' }, 1, { pt: 'Isso! Mostra só o que ainda não foi aberto.', es: '¡Eso! Muestra solo lo que todavía no se abrió.' }],
        [{ pt: 'Apagar as conversas antigas', es: 'Borrar las conversaciones antiguas' }, 0, { pt: 'Isso apaga histórico; o filtro resolve sem apagar nada.', es: 'Eso borra historial; el filtro lo resuelve sin borrar nada.' }],
        [{ pt: 'Esperar o cliente escrever de novo', es: 'Esperar a que el cliente escriba de nuevo' }, 0, { pt: 'Vende menos: responda rápido.', es: 'Se vende menos: responde rápido.' }]] }
  ]);
  quizCatalogo('ler-numero', { pt: 'Ler os números do Instagram', es: 'Leer los números de Instagram' }, { pt: 'Visualizações, visualizadores, zeros e público.', es: 'Visualizaciones, espectadores, ceros y público.' }, [
    { q: { pt: 'Qual é a diferença entre Visualizações e Visualizadores?', es: '¿Cuál es la diferencia entre Visualizaciones y Espectadores?' },
      o: [[{ pt: 'Visualizações contam quantas vezes o conteúdo foi visto; Visualizadores contam quantas pessoas diferentes viram', es: 'Visualizaciones cuentan cuántas veces se vio el contenido; Espectadores cuentan cuántas personas distintas lo vieron' }, 1, { pt: 'Isso! Uma pessoa pode ver várias vezes.', es: '¡Eso! Una persona puede ver varias veces.' }],
        [{ pt: 'São a mesma coisa', es: 'Son lo mismo' }, 0, { pt: 'Não: um conta vezes, o outro conta pessoas.', es: 'No: uno cuenta veces, el otro cuenta personas.' }],
        [{ pt: 'Visualizadores é só de seguidores', es: 'Espectadores es solo de seguidores' }, 0, { pt: 'Inclui seguidores e não seguidores.', es: 'Incluye seguidores y no seguidores.' }]] },
    { q: { pt: 'Os cartões do Instagram estão em zero. O cliente diz que “está quebrado”.', es: 'Las tarjetas de Instagram están en cero. El cliente dice que “está roto”.' },
      o: [[{ pt: 'Conferir o período (Últimos 28 dias) e se houve posts ou atividade nele; a tela diz “Nenhuma atividade durante o intervalo de datas”', es: 'Revisar el período (Últimos 28 días) y si hubo publicaciones o actividad en él; la pantalla dice “Ninguna actividad durante el intervalo de fechas”' }, 1, { pt: 'Isso! Zero costuma ser falta de atividade no período, não defeito.', es: '¡Eso! Cero suele ser falta de actividad en el período, no un defecto.' }],
        [{ pt: 'Dizer que é um bug da Meta', es: 'Decir que es un error de Meta' }, 0, { pt: 'Primeiro confira período e atividade.', es: 'Primero revisa período y actividad.' }],
        [{ pt: 'Recriar a conta do Instagram', es: 'Recrear la cuenta de Instagram' }, 0, { pt: 'Exagero e perde os seguidores.', es: 'Exagerado y pierde los seguidores.' }]] },
    { q: { pt: 'A aba Público do Instagram não mostra nada. Por quê?', es: 'La pestaña Público de Instagram no muestra nada. ¿Por qué?' },
      o: [[{ pt: 'A tela explica: o público só aparece quando a conta do Instagram tem pelo menos 100 seguidores', es: 'La pantalla explica: el público solo aparece cuando la cuenta de Instagram tiene al menos 100 seguidores' }, 1, { pt: 'Isso! Nada de errado com a conta.', es: '¡Eso! Nada malo con la cuenta.' }],
        [{ pt: 'Porque a conta é pessoal e privada', es: 'Porque la cuenta es personal y privada' }, 0, { pt: 'O aviso da tela fala de 100 seguidores.', es: 'El aviso de la pantalla habla de 100 seguidores.' }],
        [{ pt: 'Porque falta pagar um plano', es: 'Porque falta pagar un plan' }, 0, { pt: 'Não há plano pago nisso.', es: 'No hay plan pago para eso.' }]] }
  ]);

  /* ---------- 16. Regras automatizadas: cinco mini-quizzes (Regras 01–05) ---------- */
  quizCatalogo('regra-ou-ajuste', { pt: 'Onde crio a regra?', es: '¿Dónde creo la regla?' }, { pt: 'Regra para todos ou para alguns? E o que são os ajustes automáticos?', es: '¿Regla para todos o para algunos? ¿Y qué son los ajustes automáticos?' }, [
    { q: { pt: 'A Marina quer que uma regra valha para só um conjunto de anúncios específico. Onde ela cria?', es: 'Marina quiere que una regla valga solo para un conjunto de anuncios específico. ¿Dónde la crea?' },
      o: [[{ pt: 'Na tabela de campanhas do Gerenciador: marca o conjunto e usa Mais › Criar nova regra', es: 'En la tabla de campañas del Administrador: marca el conjunto y usa Más › Crear nueva regla' }, 1, { pt: 'Isso! Assim a regra vale só para o que foi marcado.', es: '¡Eso! Así la regla vale solo para lo que se marcó.' }],
        [{ pt: 'Na página Regras automatizadas, sem marcar nada', es: 'En la página Reglas automáticas, sin marcar nada' }, 0, { pt: 'Ali a regra vale para todas as campanhas, conjuntos ou anúncios da conta.', es: 'Ahí la regla vale para todas las campañas, conjuntos o anuncios de la cuenta.' }],
        [{ pt: 'No Business Suite', es: 'En Business Suite' }, 0, { pt: 'As regras ficam no Gerenciador de Anúncios.', es: 'Las reglas están en el Administrador de anuncios.' }]] },
    { q: { pt: 'E se ela quer uma regra para todos os conjuntos ativos da conta?', es: '¿Y si quiere una regla para todos los conjuntos activos de la cuenta?' },
      o: [[{ pt: 'Na página Regras automatizadas, com + Criar regra', es: 'En la página Reglas automáticas, con + Crear regla' }, 1, { pt: 'Isso! O padrão é “Todos os conjuntos de anúncios ativos”.', es: '¡Eso! El valor predeterminado es “Todos los conjuntos de anuncios activos”.' }],
        [{ pt: 'Marcando um por um na tabela', es: 'Marcando uno por uno en la tabla' }, 0, { pt: 'Isso serve para poucos; para todos, a página de regras é mais simples.', es: 'Eso sirve para pocos; para todos, la página de reglas es más simple.' }],
        [{ pt: 'Não dá', es: 'No se puede' }, 0, { pt: 'Dá: é o padrão da janela.', es: 'Se puede: es el valor predeterminado de la ventana.' }]] },
    { q: { pt: 'A faixa no topo da página diz que “as regras para recomendações agora se chamam ajustes automáticos”. O que isso significa?', es: 'La franja de arriba de la página dice que “las reglas de las recomendaciones ahora se llaman ajustes automáticos”. ¿Qué significa?' },
      o: [[{ pt: 'Os ajustes automáticos são as antigas regras de recomendações; tem um botão Ver ajustes automáticos, separado das suas regras personalizadas', es: 'Los ajustes automáticos son las antiguas reglas de recomendaciones; hay un botón Ver ajustes automáticos, separado de tus reglas personalizadas' }, 1, { pt: 'Isso! É só uma mudança de nome.', es: '¡Eso! Es solo un cambio de nombre.' }],
        [{ pt: 'Que todas as regras da conta foram apagadas', es: 'Que todas las reglas de la cuenta fueron eliminadas' }, 0, { pt: 'Não: é só um aviso de mudança de nome.', es: 'No: es solo un aviso de cambio de nombre.' }],
        [{ pt: 'Que a Meta cria regras sozinha sem avisar', es: 'Que Meta crea reglas sola sin avisar' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] }
  ]);
  quizCatalogo('ler-regra', { pt: 'Que parte da regra é essa?', es: '¿Qué parte de la regla es esa?' }, { pt: 'Nome, Aplicar a, Ação, Condições, Intervalo, Programação e Notificação.', es: 'Nombre, Aplicar a, Acción, Condiciones, Intervalo, Programación y Notificación.' }, [
    { q: { pt: '“Gasto é maior que 20”', es: '“Gasto es mayor que 20”' },
      o: [[{ pt: 'Uma condição: o “se” da regra', es: 'Una condición: el “si” de la regla' }, 1, { pt: 'Isso! Métrica, operador e valor.', es: '¡Eso! Métrica, operador y valor.' }],
        [{ pt: 'A ação', es: 'La acción' }, 0, { pt: 'A ação é o que a regra faz (desativar, avisar…).', es: 'La acción es lo que hace la regla (desactivar, avisar…).' }],
        [{ pt: 'A programação', es: 'La programación' }, 0, { pt: 'Programação é de quanto em quanto tempo ela confere.', es: 'La programación es cada cuánto tiempo revisa.' }]] },
    { q: { pt: '“Últimos 7 dias”', es: '“Últimos 7 días”' },
      o: [[{ pt: 'O intervalo de tempo: a quantos dias de dados a regra se aplica', es: 'El intervalo de tiempo: a cuántos días de datos se aplica la regla' }, 1, { pt: 'Isso! O padrão da tela é 37 meses (máximo).', es: '¡Eso! El valor predeterminado de la pantalla es 37 meses (máximo).' }],
        [{ pt: 'A programação', es: 'La programación' }, 0, { pt: 'A programação é Continuamente, Diariamente ou Personalizado.', es: 'La programación es Continuamente, Diariamente o Personalizado.' }],
        [{ pt: 'O lugar onde a regra se aplica', es: 'El lugar donde se aplica la regla' }, 0, { pt: 'Isso é “Aplicar regra a”.', es: 'Eso es “Aplicar regla a”.' }]] },
    { q: { pt: '“Continuamente (normalmente entre 30 e 60 minutos)”', es: '“Continuamente (normalmente entre 30 y 60 minutos)”' },
      o: [[{ pt: 'A programação: de quanto em quanto tempo a regra é verificada', es: 'La programación: cada cuánto tiempo se revisa la regla' }, 1, { pt: 'Isso! As outras são Diariamente e Personalizado.', es: '¡Eso! Las otras son Diariamente y Personalizado.' }],
        [{ pt: 'A ação', es: 'La acción' }, 0, { pt: 'Não: ação é o que acontece.', es: 'No: acción es lo que pasa.' }],
        [{ pt: 'O intervalo de tempo', es: 'El intervalo de tiempo' }, 0, { pt: 'O intervalo fala dos dados, não da frequência.', es: 'El intervalo habla de los datos, no de la frecuencia.' }]] },
    { q: { pt: '“Enviar apenas uma notificação”', es: '“Enviar solo una notificación”' },
      o: [[{ pt: 'Uma ação segura: só avisa, não muda nada nos anúncios', es: 'Una acción segura: solo avisa, no cambia nada en los anuncios' }, 1, { pt: 'Isso! Ótima para a primeira regra.', es: '¡Eso! Excelente para la primera regla.' }],
        [{ pt: 'Uma condição', es: 'Una condición' }, 0, { pt: 'É uma ação.', es: 'Es una acción.' }],
        [{ pt: 'Uma ação que desativa o conjunto', es: 'Una acción que desactiva el conjunto' }, 0, { pt: 'O nome diz: “apenas uma notificação”.', es: 'El nombre lo dice: “solo una notificación”.' }]] }
  ]);
  quizCatalogo('falso-positivo', { pt: 'Essa regra é segura?', es: '¿Esta regla es segura?' }, { pt: 'Intervalo e condições mudam quem é atingido.', es: 'El intervalo y las condiciones cambian a quién se alcanza.' }, [
    { q: { pt: 'Regra: desativar se “Gasto é maior que 20”, intervalo “37 meses (máximo)”. O que pode dar errado?', es: 'Regla: desactivar si “Gasto es mayor que 20”, intervalo “37 meses (máximo)”. ¿Qué puede salir mal?' },
      o: [[{ pt: 'Ela soma o gasto de toda a vida do conjunto e pode desativar até os que vendem bem (falso positivo)', es: 'Suma el gasto de toda la vida del conjunto y puede desactivar incluso los que venden bien (falso positivo)' }, 1, { pt: 'Isso! Um intervalo curto e mais uma condição resolvem.', es: '¡Eso! Un intervalo corto y una condición más lo resuelven.' }],
        [{ pt: 'Nada: está perfeita', es: 'Nada: está perfecta' }, 0, { pt: 'Com 37 meses e uma só condição, quase todo conjunto antigo passa de R$ 20.', es: 'Con 37 meses y una sola condición, casi todo conjunto antiguo pasa de R$ 20.' }],
        [{ pt: 'Ela não roda sem programação', es: 'No corre sin programación' }, 0, { pt: 'A programação padrão é Continuamente.', es: 'La programación predeterminada es Continuamente.' }]] },
    { q: { pt: 'Como deixar a regra mais segura?', es: '¿Cómo dejar la regla más segura?' },
      o: [[{ pt: 'Usar “Últimos 7 dias” e somar a condição “Resultados é igual a 0”', es: 'Usar “Últimos 7 días” y sumar la condición “Resultados es igual a 0”' }, 1, { pt: 'Isso! Só pega quem gastou e não trouxe nada na última semana.', es: '¡Eso! Solo alcanza a quien gastó y no trajo nada en la última semana.' }],
        [{ pt: 'Aumentar o valor para 2000', es: 'Subir el valor a 2000' }, 0, { pt: 'Isso só esconde o problema; o intervalo longo continua.', es: 'Eso solo esconde el problema; el intervalo largo sigue.' }],
        [{ pt: 'Trocar a programação para Personalizado', es: 'Cambiar la programación a Personalizado' }, 0, { pt: 'A programação não muda quem é atingido.', es: 'La programación no cambia a quién se alcanza.' }]] },
    { q: { pt: 'A Marina nunca usou regras. Qual a melhor ação para a primeira?', es: 'Marina nunca usó reglas. ¿Cuál es la mejor acción para la primera?' },
      o: [[{ pt: '“Enviar apenas uma notificação”: ela vê o que a regra pegaria, antes de deixar desativar algo', es: '“Enviar solo una notificación”: ve lo que alcanzaría la regla, antes de dejar que desactive algo' }, 1, { pt: 'Isso! Primeiro avise, depois automatize.', es: '¡Eso! Primero avisa, después automatiza.' }],
        [{ pt: 'Desativar tudo que gastar mais de R$ 1', es: 'Desactivar todo lo que gaste más de R$ 1' }, 0, { pt: 'Perigoso: desativaria quase tudo.', es: 'Peligroso: desactivaría casi todo.' }],
        [{ pt: 'Aumentar o orçamento em 100%', es: 'Aumentar el presupuesto en un 100%' }, 0, { pt: 'Gasta dinheiro sem teste.', es: 'Gasta dinero sin prueba.' }]] }
  ]);
  quizCatalogo('editar-ou-excluir', { pt: 'Editar ou excluir?', es: '¿Editar o eliminar?' }, { pt: 'O que se pode mudar numa regra que já existe.', es: 'Qué se puede cambiar en una regla que ya existe.' }, [
    { q: { pt: 'A Marina quer mudar o intervalo de “37 meses” para “7 dias” numa regra já criada.', es: 'Marina quiere cambiar el intervalo de “37 meses” a “7 días” en una regla ya creada.' },
      o: [[{ pt: 'Editar a regra: o intervalo dá para mudar', es: 'Editar la regla: el intervalo se puede cambiar' }, 1, { pt: 'Isso! Nome, condições, intervalo e programação se editam.', es: '¡Eso! Nombre, condiciones, intervalo y programación se editan.' }],
        [{ pt: 'Excluir e criar outra', es: 'Eliminar y crear otra' }, 0, { pt: 'Não precisa: dá para editar.', es: 'No hace falta: se puede editar.' }],
        [{ pt: 'Não dá para mudar', es: 'No se puede cambiar' }, 0, { pt: 'Dá: é só Editar.', es: 'Se puede: solo hay que Editar.' }]] },
    { q: { pt: 'Ela criou a regra aplicada a “Todos os conjuntos de anúncios ativos” e agora quer só um conjunto. O que fazer?', es: 'Creó la regla aplicada a “Todos los conjuntos de anuncios activos” y ahora quiere solo un conjunto. ¿Qué hacer?' },
      o: [[{ pt: 'Excluir a regra e criar outra na tabela, marcando o conjunto', es: 'Eliminar la regla y crear otra en la tabla, marcando el conjunto' }, 1, { pt: 'Isso! Ao editar, não dá para mudar onde a regra se aplica nem a ação.', es: '¡Eso! Al editar, no se puede cambiar dónde se aplica la regla ni la acción.' }],
        [{ pt: 'Editar o “Aplicar regra a”', es: 'Editar el “Aplicar regla a”' }, 0, { pt: 'Esse campo fica apagado ao editar.', es: 'Ese campo queda apagado al editar.' }],
        [{ pt: 'Pedir à Meta para mudar', es: 'Pedirle a Meta que lo cambie' }, 0, { pt: 'Não precisa: é só excluir e recriar.', es: 'No hace falta: basta eliminar y recrear.' }]] },
    { q: { pt: 'O cliente quer parar a regra por uns dias, sem apagá-la.', es: 'El cliente quiere detener la regla por unos días, sin borrarla.' },
      o: [[{ pt: 'Desligar o interruptor de Status na linha da regra', es: 'Desactivar el interruptor de Estado en la fila de la regla' }, 1, { pt: 'Isso! Depois é só ligar de novo.', es: '¡Eso! Después solo hay que activarla de nuevo.' }],
        [{ pt: 'Excluir a regra', es: 'Eliminar la regla' }, 0, { pt: 'Excluir apaga de vez.', es: 'Eliminar borra del todo.' }],
        [{ pt: 'Trocar a ação para notificação', es: 'Cambiar la acción a notificación' }, 0, { pt: 'A ação não pode ser mudada ao editar.', es: 'La acción no se puede cambiar al editar.' }]] }
  ]);
  quizCatalogo('por-que-parou', { pt: 'Por que meu anúncio parou?', es: '¿Por qué se detuvo mi anuncio?' }, { pt: 'Quando algo para sem ninguém mexer, olhe as regras.', es: 'Cuando algo se detiene sin que nadie lo toque, mira las reglas.' }, [
    { q: { pt: 'Um conjunto de anúncios apareceu como Desativado, e ninguém mexeu nele. Onde olhar?', es: 'Un conjunto de anuncios apareció como Desactivado, y nadie lo tocó. ¿Dónde mirar?' },
      o: [[{ pt: 'Na página Regras automatizadas, na coluna Resultados da regra', es: 'En la página Reglas automáticas, en la columna Resultados de la regla' }, 1, { pt: 'Isso! Ela diz o que cada regra fez e quando.', es: '¡Eso! Dice qué hizo cada regla y cuándo.' }],
        [{ pt: 'Na aba Públicos', es: 'En la pestaña Públicos' }, 0, { pt: 'Públicos não desativam conjuntos.', es: 'Los públicos no desactivan conjuntos.' }],
        [{ pt: 'Só no cartão de crédito', es: 'Solo en la tarjeta de crédito' }, 0, { pt: 'Pagamento pode parar anúncio, mas primeiro confira as regras.', es: 'El pago puede detener un anuncio, pero primero revisa las reglas.' }]] },
    { q: { pt: 'A regra “Pausar conjunto caro” desativou 2 conjuntos, incluindo um bom. Depois de corrigir a regra, o bom volta sozinho?', es: 'La regla “Pausar conjunto caro” desactivó 2 conjuntos, incluido uno bueno. Después de corregir la regla, ¿el bueno vuelve solo?' },
      o: [[{ pt: 'Não: é preciso ativar de novo o conjunto na tabela', es: 'No: hay que activar de nuevo el conjunto en la tabla' }, 1, { pt: 'Isso! Corrigir a regra só evita novos casos.', es: '¡Eso! Corregir la regla solo evita nuevos casos.' }],
        [{ pt: 'Sim, na próxima execução', es: 'Sí, en la próxima ejecución' }, 0, { pt: 'Não: a regra desativou, ela não reativa sozinha.', es: 'No: la regla desactivó, no reactiva sola.' }],
        [{ pt: 'Só depois de 24 horas', es: 'Solo después de 24 horas' }, 0, { pt: 'Não há esse prazo.', es: 'No hay ese plazo.' }]] },
    { q: { pt: 'O cliente quer outra pessoa da equipe recebendo os avisos da regra. O que a Central de Ajuda diz sobre o Assinante?', es: 'El cliente quiere que otra persona del equipo reciba los avisos de la regla. ¿Qué dice el Centro de ayuda sobre el Suscriptor?' },
      o: [[{ pt: 'A pessoa precisa ter permissão de administrador na conta de anúncios e acesso de controle total ao portfólio', es: 'La persona necesita permiso de administrador en la cuenta publicitaria y acceso de control total al portfolio' }, 1, { pt: 'Isso! Sem isso ela não pode ser assinante.', es: '¡Eso! Sin eso no puede ser suscriptora.' }],
        [{ pt: 'Qualquer pessoa pode ser assinante', es: 'Cualquier persona puede ser suscriptora' }, 0, { pt: 'Há requisito de permissão.', es: 'Hay requisito de permiso.' }],
        [{ pt: 'Só o dono do Facebook pessoal', es: 'Solo el dueño del Facebook personal' }, 0, { pt: 'O requisito é de permissão na conta e no portfólio.', es: 'El requisito es de permiso en la cuenta y en el portfolio.' }]] }
  ]);

  /* ---------- 17. Relatórios: cinco mini-quizzes (Relatórios 01–05) ---------- */
  quizCatalogo('onde-olhar', { pt: 'Onde olho esse número?', es: '¿Dónde miro este número?' }, { pt: 'Gerenciador, Relatórios de Anúncios, Insights ou Gerenciador de Eventos: cada um tem seu papel.', es: 'Administrador, Informes de anuncios, Estadísticas o Administrador de eventos: cada uno tiene su papel.' }, [
    { q: { pt: 'O cliente quer uma tabela por campanha e por plataforma, com cliques e compras, para exportar.', es: 'El cliente quiere una tabla por campaña y por plataforma, con clics y compras, para exportar.' },
      o: [[{ pt: 'Relatórios de Anúncios: tabela dinâmica com Personalizar, Salvar e Exportar', es: 'Informes de anuncios: tabla dinámica con Personalizar, Guardar y Exportar' }, 1, { pt: 'Isso! É onde se monta e exporta o relatório.', es: '¡Eso! Es donde se arma y exporta el informe.' }],
        [{ pt: 'Business Suite › Insights', es: 'Business Suite › Estadísticas' }, 0, { pt: 'Insights mostra o desempenho da Página e do Instagram, não relatórios de anúncio personalizados.', es: 'Estadísticas muestra el rendimiento de la Página y de Instagram, no informes de anuncio personalizados.' }],
        [{ pt: 'Caixa de Entrada', es: 'Mensajes' }, 0, { pt: 'A Caixa de Entrada é para mensagens e comentários.', es: 'Mensajes es para mensajes y comentarios.' }]] },
    { q: { pt: 'A Marina quer saber quantas pessoas viram o post da Página no Instagram, sem falar de anúncio.', es: 'Marina quiere saber cuántas personas vieron la publicación de la Página en Instagram, sin hablar de anuncio.' },
      o: [[{ pt: 'Business Suite › Insights, escolhendo Instagram no seletor de entidade', es: 'Business Suite › Estadísticas, eligiendo Instagram en el selector de entidad' }, 1, { pt: 'Isso! Os números do Facebook e do Instagram são separados.', es: '¡Eso! Los números de Facebook y de Instagram son separados.' }],
        [{ pt: 'Regras automatizadas', es: 'Reglas automáticas' }, 0, { pt: 'Regras fazem mudanças ou avisos, não mostram desempenho de posts.', es: 'Las reglas hacen cambios o avisos, no muestran rendimiento de publicaciones.' }],
        [{ pt: 'Gerenciador de Comércio', es: 'Administrador de ventas' }, 0, { pt: 'Isso é do catálogo.', es: 'Eso es del catálogo.' }]] },
    { q: { pt: 'O número de compras no Gerenciador de Anúncios é diferente do que aparece no Gerenciador de Eventos. É defeito?', es: 'El número de compras en el Administrador de anuncios es distinto del que aparece en el Administrador de eventos. ¿Es un defecto?' },
      o: [[{ pt: 'Não necessariamente: cada tela conta de um jeito (a Central de Ajuda tem um artigo sobre as diferenças de contagem entre elas). Confira período e janela de atribuição', es: 'No necesariamente: cada pantalla cuenta de una forma (el Centro de ayuda tiene un artículo sobre las diferencias de conteo entre ellas). Revisa período y ventana de atribución' }, 1, { pt: 'Isso! Compare igual com igual antes de concluir.', es: '¡Eso! Compara igual con igual antes de concluir.' }],
        [{ pt: 'Sim, sempre é defeito do Pixel', es: 'Sí, siempre es un defecto del Pixel' }, 0, { pt: 'Contagens diferentes são esperadas em algumas situações.', es: 'Los conteos distintos se esperan en algunas situaciones.' }],
        [{ pt: 'Ignorar a diferença', es: 'Ignorar la diferencia' }, 0, { pt: 'Vale conferir por que difere, mas sem alarme.', es: 'Conviene revisar por qué difiere, pero sin alarma.' }]] }
  ]);
  quizCatalogo('ler-numeros', { pt: 'Alcance, impressões e frequência', es: 'Alcance, impresiones y frecuencia' }, { pt: 'Os números do anúncio de teste da Lojinha: 69, 71, 1,03 e R$ 2,77.', es: 'Los números del anuncio de prueba de la Lojinha: 69, 71, 1,03 y R$ 2,77.' }, [
    { q: { pt: 'O relatório mostra Alcance 69 e Impressões 71. O que isso diz?', es: 'El informe muestra Alcance 69 e Impresiones 71. ¿Qué dice eso?' },
      o: [[{ pt: '69 pessoas viram o anúncio, e ele apareceu 71 vezes no total', es: '69 personas vieron el anuncio, y apareció 71 veces en total' }, 1, { pt: 'Isso! Alcance conta pessoas; impressões contam vezes.', es: '¡Eso! Alcance cuenta personas; impresiones cuentan veces.' }],
        [{ pt: '71 pessoas viram e 69 clicaram', es: '71 personas vieron y 69 hicieron clic' }, 0, { pt: 'Clique é outra métrica (Cliques no link).', es: 'El clic es otra métrica (Clics en el enlace).' }],
        [{ pt: 'O anúncio custou R$ 71', es: 'El anuncio costó R$ 71' }, 0, { pt: 'O custo é a coluna Valor gasto.', es: 'El costo es la columna Monto gastado.' }]] },
    { q: { pt: 'A Frequência aparece como 1,03. Como se chega a esse número?', es: 'La Frecuencia aparece como 1,03. ¿Cómo se llega a ese número?' },
      o: [[{ pt: 'Impressões ÷ Alcance: 71 ÷ 69 ≈ 1,03 vezes por pessoa, em média', es: 'Impresiones ÷ Alcance: 71 ÷ 69 ≈ 1,03 veces por persona, en promedio' }, 1, { pt: 'Isso! Quase cada pessoa viu uma vez.', es: '¡Eso! Casi cada persona vio una vez.' }],
        [{ pt: 'Valor gasto ÷ Alcance', es: 'Monto gastado ÷ Alcance' }, 0, { pt: 'Isso seria um custo por pessoa alcançada.', es: 'Eso sería un costo por persona alcanzada.' }],
        [{ pt: 'Alcance × Impressões', es: 'Alcance × Impresiones' }, 0, { pt: 'Multiplicar daria um número gigante.', es: 'Multiplicar daría un número gigante.' }]] },
    { q: { pt: 'A Marina definiu orçamento de R$ 5,27 por dia, mas o relatório mostra Valor gasto R$ 2,77. Por quê?', es: 'Marina definió un presupuesto de R$ 5,27 por día, pero el informe muestra Monto gastado R$ 2,77. ¿Por qué?' },
      o: [[{ pt: 'O Valor gasto é o que foi realmente cobrado no período; o orçamento é só o limite que ela definiu', es: 'El Monto gastado es lo que realmente se cobró en el período; el presupuesto es solo el límite que ella definió' }, 1, { pt: 'Isso! Gastar menos que o orçamento é normal.', es: '¡Eso! Gastar menos que el presupuesto es normal.' }],
        [{ pt: 'A Meta guardou o resto como crédito', es: 'Meta guardó el resto como crédito' }, 0, { pt: 'Não há esse mecanismo na tela.', es: 'No hay ese mecanismo en la pantalla.' }],
        [{ pt: 'O relatório está errado', es: 'El informe está equivocado' }, 0, { pt: 'Não: valor gasto e orçamento são coisas diferentes.', es: 'No: monto gastado y presupuesto son cosas distintas.' }]] }
  ]);
  quizCatalogo('detalhe-ou-metrica', { pt: 'Detalhamento ou métrica?', es: '¿Desglose o métrica?' }, { pt: 'Detalhamento divide os números; métrica é o número.', es: 'El desglose divide los números; la métrica es el número.' }, [
    { q: { pt: '“Idade” ou “Plataforma”: o que são?', es: '“Edad” o “Plataforma”: ¿qué son?' },
      o: [[{ pt: 'Detalhamentos: dividem os números em grupos', es: 'Desgloses: dividen los números en grupos' }, 1, { pt: 'Isso! Ficam na aba Detalhamentos do painel Personalizar.', es: '¡Eso! Están en la pestaña Desgloses del panel Personalizar.' }],
        [{ pt: 'Métricas: são os números', es: 'Métricas: son los números' }, 0, { pt: 'Métricas são Alcance, Impressões, Valor gasto…', es: 'Métricas son Alcance, Impresiones, Monto gastado…' }],
        [{ pt: 'Períodos', es: 'Períodos' }, 0, { pt: 'O período é um seletor próprio.', es: 'El período es un selector propio.' }]] },
    { q: { pt: '“Cliques no link” e “Compras”: o que são?', es: '“Clics en el enlace” y “Compras”: ¿qué son?' },
      o: [[{ pt: 'Métricas: os números que aparecem nas colunas', es: 'Métricas: los números que aparecen en las columnas' }, 1, { pt: 'Isso! Ficam na aba Métricas.', es: '¡Eso! Están en la pestaña Métricas.' }],
        [{ pt: 'Detalhamentos', es: 'Desgloses' }, 0, { pt: 'Detalhamento divide; aqui são números.', es: 'El desglose divide; aquí son números.' }],
        [{ pt: 'Filtros', es: 'Filtros' }, 0, { pt: 'Filtro esconde linhas; métrica é uma coluna.', es: 'El filtro oculta filas; la métrica es una columna.' }]] },
    { q: { pt: 'A Marina quer ver quanto cada plataforma (Facebook ou Instagram) gastou. O que ela monta?', es: 'Marina quiere ver cuánto gastó cada plataforma (Facebook o Instagram). ¿Qué arma?' },
      o: [[{ pt: 'Detalhamento “Plataforma” e métrica “Valor gasto”', es: 'Desglose “Plataforma” y métrica “Monto gastado”' }, 1, { pt: 'Isso! Uma linha por plataforma, com o gasto de cada uma.', es: '¡Eso! Una fila por plataforma, con el gasto de cada una.' }],
        [{ pt: 'Detalhamento “Idade” e métrica “Compras”', es: 'Desglose “Edad” y métrica “Compras”' }, 0, { pt: 'Isso divide por idade, não por plataforma.', es: 'Eso divide por edad, no por plataforma.' }],
        [{ pt: 'Só a métrica Alcance', es: 'Solo la métrica Alcance' }, 0, { pt: 'Sem detalhamento não há divisão por plataforma.', es: 'Sin desglose no hay división por plataforma.' }]] }
  ]);
  quizCatalogo('janela-atribuicao', { pt: 'Qual janela de atribuição?', es: '¿Qué ventana de atribución?' }, { pt: 'Quando uma compra conta para o anúncio.', es: 'Cuándo una compra cuenta para el anuncio.' }, [
    { q: { pt: 'A coluna Configuração de atribuição mostra “Clique de 7 dias ou visualização de 1 dia”. O que significa?', es: 'La columna Configuración de atribución muestra “7 días tras clic o 1 días tras visualización”. ¿Qué significa?' },
      o: [[{ pt: 'Compras feitas até 7 dias depois de um clique, ou 1 dia depois de ver o anúncio, são atribuídas a ele', es: 'Las compras hechas hasta 7 días después de un clic, o 1 día después de ver el anuncio, se atribuyen a él' }, 1, { pt: 'Isso! É a regra de contagem das ações fora do anúncio.', es: '¡Eso! Es la regla de conteo de las acciones fuera del anuncio.' }],
        [{ pt: 'O anúncio dura 7 dias', es: 'El anuncio dura 7 días' }, 0, { pt: 'Não tem relação com a duração do anúncio.', es: 'No tiene relación con la duración del anuncio.' }],
        [{ pt: 'O relatório mostra os últimos 7 dias', es: 'El informe muestra los últimos 7 días' }, 0, { pt: 'O período é outro seletor.', es: 'El período es otro selector.' }]] },
    { q: { pt: 'Qual ação o anúncio conta direto, sem janela de atribuição?', es: '¿Qué acción cuenta el anuncio directo, sin ventana de atribución?' },
      o: [[{ pt: 'Ações dentro do anúncio, como impressões, cliques no link e visualizações de vídeo', es: 'Acciones dentro del anuncio, como impresiones, clics en el enlace y reproducciones de video' }, 1, { pt: 'Isso! Segundo a Central de Ajuda, essas aparecem direto nas colunas.', es: '¡Eso! Según el Centro de ayuda, esas aparecen directo en las columnas.' }],
        [{ pt: 'Uma compra no site', es: 'Una compra en el sitio' }, 0, { pt: 'Compra no site é ação fora do anúncio, e depende da janela.', es: 'La compra en el sitio es una acción fuera del anuncio, y depende de la ventana.' }],
        [{ pt: 'Uma compra na loja física', es: 'Una compra en la tienda física' }, 0, { pt: 'Também é fora do anúncio.', es: 'También es fuera del anuncio.' }]] },
    { q: { pt: 'Duas pessoas compararam as compras de uma campanha e os números não bateram. Primeira checagem?', es: 'Dos personas compararon las compras de una campaña y los números no coincidieron. ¿Primera revisión?' },
      o: [[{ pt: 'Ver se as duas telas usam o mesmo período e a mesma janela de atribuição', es: 'Ver si las dos pantallas usan el mismo período y la misma ventana de atribución' }, 1, { pt: 'Isso! Só se compara igual com igual.', es: '¡Eso! Solo se compara igual con igual.' }],
        [{ pt: 'Recriar a campanha', es: 'Recrear la campaña' }, 0, { pt: 'Exagero e perde histórico.', es: 'Exagerado y pierde historial.' }],
        [{ pt: 'Dizer que um dos dois mente', es: 'Decir que uno de los dos miente' }, 0, { pt: 'Provavelmente só usam regras de contagem diferentes.', es: 'Probablemente solo usan reglas de conteo distintas.' }]] }
  ]);
  quizCatalogo('por-que-vazio', { pt: 'Por que está vazio ou zerado?', es: '¿Por qué está vacío o en cero?' }, { pt: 'Quase sempre é período, filtro ou falta de atividade.', es: 'Casi siempre es período, filtro o falta de actividad.' }, [
    { q: { pt: 'O relatório diz “Nenhuma atividade durante o intervalo de datas selecionado”. O anúncio rodou ontem. Primeira checagem?', es: 'El informe dice “Ninguna actividad durante el intervalo de fechas seleccionado”. El anuncio corrió ayer. ¿Primera revisión?' },
      o: [[{ pt: 'O período do relatório: provavelmente não cobre o dia em que o anúncio rodou', es: 'El período del informe: probablemente no cubre el día en que corrió el anuncio' }, 1, { pt: 'Isso! Altere a data e pesquise de novo.', es: '¡Eso! Cambia la fecha y busca de nuevo.' }],
        [{ pt: 'Recriar o Pixel', es: 'Recrear el Pixel' }, 0, { pt: 'O Pixel não tem relação com este aviso.', es: 'El Pixel no tiene relación con este aviso.' }],
        [{ pt: 'Aguardar 30 dias', es: 'Esperar 30 días' }, 0, { pt: 'Não precisa: basta ajustar o período.', es: 'No hace falta: basta ajustar el período.' }]] },
    { q: { pt: 'O filtro “Teve veiculação” está ligado e a conta não aparece num período sem anúncios rodando. Como ver a conta com zeros?', es: 'El filtro “Con entrega” está activado y la cuenta no aparece en un período sin anuncios corriendo. ¿Cómo ver la cuenta con ceros?' },
      o: [[{ pt: 'Desmarcar “Teve veiculação”', es: 'Desmarcar “Con entrega”' }, 1, { pt: 'Isso! O filtro esconde contas sem atividade.', es: '¡Eso! El filtro oculta cuentas sin actividad.' }],
        [{ pt: 'Criar outra conta de anúncios', es: 'Crear otra cuenta publicitaria' }, 0, { pt: 'Não precisa.', es: 'No hace falta.' }],
        [{ pt: 'Esperar o relatório atualizar sozinho', es: 'Esperar a que el informe se actualice solo' }, 0, { pt: 'O filtro continua escondendo.', es: 'El filtro sigue ocultando.' }]] },
    { q: { pt: 'Um cliente reclama que “Compras” está zero na campanha de engajamento do post turbinado. Faz sentido?', es: 'Un cliente reclama que “Compras” está en cero en la campaña de interacción de la publicación promocionada. ¿Tiene sentido?' },
      o: [[{ pt: 'Sim: essa campanha busca engajamento, não compras, e não houve compra atribuída a ela', es: 'Sí: esa campaña busca interacción, no compras, y no hubo compra atribuida a ella' }, 1, { pt: 'Isso! A métrica certa depende do objetivo da campanha.', es: '¡Eso! La métrica correcta depende del objetivo de la campaña.' }],
        [{ pt: 'Não: o Pixel está quebrado', es: 'No: el Pixel está roto' }, 0, { pt: 'Primeiro confira o objetivo da campanha.', es: 'Primero revisa el objetivo de la campaña.' }],
        [{ pt: 'Não: a Meta apagou as compras', es: 'No: Meta borró las compras' }, 0, { pt: 'Não há sinal disso.', es: 'No hay señal de eso.' }]] }
  ]);

  /* ---------- 18. Segmentação: cinco mini-quizzes (Segmentação 01–05) ---------- */
  quizCatalogo('tipo-publico', { pt: 'Que tipo de público é esse?', es: '¿Qué tipo de público es este?' }, { pt: 'Personalizado, semelhante, salvo ou automático (Advantage+).', es: 'Personalizado, similar, guardado o automático (Advantage+).' }, [
    { q: { pt: 'Pessoas que já visitaram o site da Lojinha.', es: 'Personas que ya visitaron el sitio de la Lojinha.' },
      o: [[{ pt: 'Público personalizado (fonte: Site, pelo Pixel)', es: 'Público personalizado (origen: Sitio web, por el Pixel)' }, 1, { pt: 'Isso! Quem já demonstrou interesse na sua empresa.', es: '¡Eso! Quien ya mostró interés en tu negocio.' }],
        [{ pt: 'Público semelhante', es: 'Público similar' }, 0, { pt: 'O semelhante acha gente nova parecida com um público.', es: 'El similar encuentra gente nueva parecida a un público.' }],
        [{ pt: 'Público salvo', es: 'Público guardado' }, 0, { pt: 'O salvo guarda opções de segmentação, não pessoas.', es: 'El guardado conserva opciones de segmentación, no personas.' }]] },
    { q: { pt: 'Pessoas novas, parecidas com quem já comprou na loja.', es: 'Personas nuevas, parecidas a quien ya compró en la tienda.' },
      o: [[{ pt: 'Público semelhante, com os compradores como fonte', es: 'Público similar, con los compradores como origen' }, 1, { pt: 'Isso! Chega a gente nova com o perfil dos clientes.', es: '¡Eso! Llega a gente nueva con el perfil de los clientes.' }],
        [{ pt: 'Público personalizado do site', es: 'Público personalizado del sitio web' }, 0, { pt: 'Esse é de quem já visitou.', es: 'Ese es de quien ya visitó.' }],
        [{ pt: 'Público salvo', es: 'Público guardado' }, 0, { pt: 'O salvo não é parecido com ninguém: é uma combinação de opções.', es: 'El guardado no se parece a nadie: es una combinación de opciones.' }]] },
    { q: { pt: 'Localização Brasil, idade mínima 18, guardadas para reutilizar em vários anúncios.', es: 'Ubicación Brasil, edad mínima 18, guardadas para reutilizar en varios anuncios.' },
      o: [[{ pt: 'Público salvo', es: 'Público guardado' }, 1, { pt: 'Isso! Guarda as opções de segmentação.', es: '¡Eso! Guarda las opciones de segmentación.' }],
        [{ pt: 'Público semelhante', es: 'Público similar' }, 0, { pt: 'Semelhante parte de uma fonte de pessoas.', es: 'El similar parte de un origen de personas.' }],
        [{ pt: 'Público personalizado', es: 'Público personalizado' }, 0, { pt: 'Personalizado parte de pessoas que já interagiram.', es: 'El personalizado parte de personas que ya interactuaron.' }]] }
  ]);
  quizCatalogo('fonte-publico', { pt: 'Qual fonte escolher?', es: '¿Qué origen elegir?' }, { pt: 'Site, lista de clientes, Instagram, Página… cada fonte vem de um lugar.', es: 'Sitio web, lista de clientes, Instagram, Página… cada origen viene de un lugar.' }, [
    { q: { pt: 'Quem visitou a página de um produto no site da loja, medido pelo Pixel.', es: 'Quien visitó la página de un producto en el sitio de la tienda, medido por el Pixel.' },
      o: [[{ pt: 'Fonte Site, com o evento ViewContent (ou páginas específicas)', es: 'Origen Sitio web, con el evento ViewContent (o páginas específicas)' }, 1, { pt: 'Isso! A origem é o Pixel da loja.', es: '¡Eso! El origen es el Pixel de la tienda.' }],
        [{ pt: 'Fonte Lista de clientes', es: 'Origen Lista de clientes' }, 0, { pt: 'Lista de clientes é um arquivo de contatos, não visitas.', es: 'La lista de clientes es un archivo de contactos, no visitas.' }],
        [{ pt: 'Fonte Atividade no app', es: 'Origen Actividad en la app' }, 0, { pt: 'Isso é para quem usou um app.', es: 'Eso es para quien usó una app.' }]] },
    { q: { pt: 'Pessoas que interagiram com o perfil do Instagram da loja.', es: 'Personas que interactuaron con el perfil de Instagram de la tienda.' },
      o: [[{ pt: 'Fontes da Meta › Perfil do Instagram', es: 'Orígenes de Meta › Perfil de Instagram' }, 1, { pt: 'Isso! Fica entre as fontes da Meta.', es: '¡Eso! Está entre los orígenes de Meta.' }],
        [{ pt: 'Suas fontes › Site', es: 'Tus orígenes › Sitio web' }, 0, { pt: 'O Site é a atividade no seu site, não no Instagram.', es: 'El Sitio web es la actividad en tu sitio, no en Instagram.' }],
        [{ pt: 'Suas fontes › Catálogo', es: 'Tus orígenes › Catálogo' }, 0, { pt: 'Catálogo é sobre produtos.', es: 'Catálogo es sobre productos.' }]] },
    { q: { pt: 'Na retenção do público do site, a Marina quer que as pessoas fiquem 180 dias para compras. Dá?', es: 'En la retención del público del sitio, Marina quiere que las personas queden 180 días para compras. ¿Se puede?' },
      o: [[{ pt: 'Dá: para eventos de compra, a tela diz que o máximo de retenção foi aumentado, até 730 dias', es: 'Se puede: para eventos de compra, la pantalla dice que la retención máxima fue aumentada, hasta 730 días' }, 1, { pt: 'Isso! O padrão é 30 dias.', es: '¡Eso! El valor predeterminado es 30 días.' }],
        [{ pt: 'Não: o máximo é sempre 30 dias', es: 'No: el máximo es siempre 30 días' }, 0, { pt: '30 é o padrão, não o máximo.', es: '30 es el valor predeterminado, no el máximo.' }],
        [{ pt: 'Não dá para mudar a retenção', es: 'No se puede cambiar la retención' }, 0, { pt: 'Dá: é um campo da tela.', es: 'Se puede: es un campo de la pantalla.' }]] }
  ]);
  quizCatalogo('semelhante-ok', { pt: 'O semelhante vai funcionar?', es: '¿El similar va a funcionar?' }, { pt: 'Fonte, localização e tamanho de 1% a 10%.', es: 'Origen, ubicación y tamaño de 1% a 10%.' }, [
    { q: { pt: 'Qual fonte dá o melhor público semelhante?', es: '¿Qué origen da el mejor público similar?' },
      o: [[{ pt: 'Uma fonte maior e de qualidade, como os compradores do site', es: 'Un origen mayor y de calidad, como los compradores del sitio' }, 1, { pt: 'Isso! Melhor e maior a fonte, melhor o semelhante.', es: '¡Eso! Cuanto mejor y mayor el origen, mejor el similar.' }],
        [{ pt: 'Uma fonte com poucas dezenas de pessoas', es: 'Un origen con pocas decenas de personas' }, 0, { pt: 'Fonte pequena demais pode ser recusada.', es: 'Un origen demasiado pequeño puede ser rechazado.' }],
        [{ pt: 'Qualquer uma, não faz diferença', es: 'Cualquiera, no hace diferencia' }, 0, { pt: 'Faz muita diferença.', es: 'Hace mucha diferencia.' }]] },
    { q: { pt: 'A tela explica o 1%. O que acontece ao aumentar a porcentagem?', es: 'La pantalla explica el 1%. ¿Qué pasa al aumentar el porcentaje?' },
      o: [[{ pt: 'O público fica maior e mais amplo, e menos parecido com a fonte', es: 'El público queda mayor y más amplio, y menos parecido al origen' }, 1, { pt: 'Isso! O 1% são os mais parecidos.', es: '¡Eso! El 1% son los más parecidos.' }],
        [{ pt: 'O público fica menor e mais parecido', es: 'El público queda menor y más parecido' }, 0, { pt: 'É o contrário.', es: 'Es lo contrario.' }],
        [{ pt: 'Nada muda', es: 'Nada cambia' }, 0, { pt: 'Muda o tamanho.', es: 'Cambia el tamaño.' }]] },
    { q: { pt: 'A tela recusa criar o semelhante de uma fonte “Abaixo de 1.000”. O que fazer?', es: 'La pantalla rechaza crear el similar de un origen “Menos de 1.000”. ¿Qué hacer?' },
      o: [[{ pt: 'Escolher uma fonte maior, ou esperar o site ganhar visitas', es: 'Elegir un origen mayor, o esperar a que el sitio gane visitas' }, 1, { pt: 'Isso! Não é defeito: faltam dados.', es: '¡Eso! No es un defecto: faltan datos.' }],
        [{ pt: 'Abrir um chamado dizendo que a Meta quebrou', es: 'Abrir un caso diciendo que Meta se rompió' }, 0, { pt: 'É esperado com fonte pequena.', es: 'Se espera con un origen pequeño.' }],
        [{ pt: 'Criar o mesmo público de novo, 10 vezes', es: 'Crear el mismo público de nuevo, 10 veces' }, 0, { pt: 'Com a mesma fonte, o resultado é o mesmo.', es: 'Con el mismo origen, el resultado es el mismo.' }]] }
  ]);
  quizCatalogo('salvo-ou-automatico', { pt: 'Salvo, controles ou categoria especial?', es: '¿Guardado, controles o categoría especial?' }, { pt: 'Reutilizar opções, limitar o alcance e declarar assuntos sensíveis.', es: 'Reutilizar opciones, limitar el alcance y declarar temas sensibles.' }, [
    { q: { pt: 'A Marina quer que o anúncio nunca alcance menores de 18, mesmo com o público Advantage+ ativado.', es: 'Marina quiere que el anuncio nunca llegue a menores de 18, incluso con el público Advantage+ activado.' },
      o: [[{ pt: 'Usar Controles: idade mínima 18 (a tela diz que não alcança pessoas fora desses controles, mesmo com Advantage+)', es: 'Usar Controles: edad mínima 18 (la pantalla dice que no llega a personas fuera de esos controles, incluso con Advantage+)' }, 1, { pt: 'Isso! Controles valem mesmo com Advantage+.', es: '¡Eso! Los controles valen incluso con Advantage+.' }],
        [{ pt: 'Escrever “só maiores” no texto do anúncio', es: 'Escribir “solo mayores” en el texto del anuncio' }, 0, { pt: 'O texto não limita quem vê.', es: 'El texto no limita quién ve.' }],
        [{ pt: 'Não dá', es: 'No se puede' }, 0, { pt: 'Dá: é um dos controles.', es: 'Se puede: es uno de los controles.' }]] },
    { q: { pt: 'Um cliente de crédito pessoal quer anunciar empréstimos. O que a tela de campanha pede?', es: 'Un cliente de crédito personal quiere anunciar préstamos. ¿Qué pide la pantalla de campaña?' },
      o: [[{ pt: 'Declarar a categoria especial (produtos e serviços financeiros), o que limita a segmentação', es: 'Declarar la categoría especial (productos y servicios financieros), lo que limita la segmentación' }, 1, { pt: 'Isso! A declaração ajuda a evitar rejeições; os requisitos variam por país.', es: '¡Eso! La declaración ayuda a evitar rechazos; los requisitos varían según el país.' }],
        [{ pt: 'Nada: segmenta como qualquer outro', es: 'Nada: segmenta como cualquier otro' }, 0, { pt: 'Esses assuntos têm regras próprias.', es: 'Esos temas tienen reglas propias.' }],
        [{ pt: 'Usar só público semelhante', es: 'Usar solo público similar' }, 0, { pt: 'O semelhante também fica restrito nessas categorias (a conferir).', es: 'El similar también queda restringido en esas categorías (por confirmar).' }]] },
    { q: { pt: 'A Marina usa sempre as mesmas opções de segmentação em cinco anúncios. Que recurso ajuda?', es: 'Marina usa siempre las mismas opciones de segmentación en cinco anuncios. ¿Qué recurso ayuda?' },
      o: [[{ pt: 'Criar um público salvo', es: 'Crear un público guardado' }, 1, { pt: 'Isso! Salva e reutiliza.', es: '¡Eso! Guarda y reutiliza.' }],
        [{ pt: 'Criar um público semelhante', es: 'Crear un público similar' }, 0, { pt: 'Isso é outra coisa.', es: 'Eso es otra cosa.' }],
        [{ pt: 'Exportar o relatório', es: 'Exportar el informe' }, 0, { pt: 'Relatório não guarda opções de segmentação.', es: 'El informe no guarda opciones de segmentación.' }]] }
  ]);
  quizCatalogo('publico-pequeno-q', { pt: 'Por que o público está pequeno?', es: '¿Por qué el público está pequeño?' }, { pt: 'Tamanho e status: o que cada um quer dizer.', es: 'Tamaño y estado: qué quiere decir cada uno.' }, [
    { q: { pt: 'O público de visitantes mostra “Abaixo de 1.000”, “Tráfego baixo no site” e “Em preenchimento”. É defeito?', es: 'El público de visitantes muestra “Menos de 1.000”, “Poco tráfico en el sitio” y “Llenándose”. ¿Es un defecto?' },
      o: [[{ pt: 'Não: o site tem pouco tráfego e o público ainda está se preenchendo, mas está disponível para usar', es: 'No: el sitio tiene poco tráfico y el público todavía se está llenando, pero está disponible para usar' }, 1, { pt: 'Isso! Loja nova tem pouco tráfego.', es: '¡Eso! Una tienda nueva tiene poco tráfico.' }],
        [{ pt: 'Sim: o Pixel está desligado', es: 'Sí: el Pixel está apagado' }, 0, { pt: 'O status “Disponível para usar” não aponta Pixel desligado.', es: 'El estado “Disponible para usar” no indica Pixel apagado.' }],
        [{ pt: 'Sim: o público foi excluído', es: 'Sí: el público fue eliminado' }, 0, { pt: 'Ele está na lista e disponível.', es: 'Está en la lista y disponible.' }]] },
    { q: { pt: 'O cliente quer um semelhante hoje e só tem esse público pequeno. O que sugerir?', es: 'El cliente quiere un similar hoy y solo tiene ese público pequeño. ¿Qué sugerir?' },
      o: [[{ pt: 'Esperar mais visitas, usar outra fonte maior (como a Página) ou rodar com público automático e controles de localização e idade', es: 'Esperar más visitas, usar otro origen mayor (como la Página) o correr con público automático y controles de ubicación y edad' }, 1, { pt: 'Isso! Caminhos reais enquanto os dados crescem.', es: '¡Eso! Caminos reales mientras los datos crecen.' }],
        [{ pt: 'Prometer que o semelhante vai funcionar igual', es: 'Prometer que el similar va a funcionar igual' }, 0, { pt: 'Nunca prometa resultado.', es: 'Nunca prometas resultados.' }],
        [{ pt: 'Comprar visitas para o site', es: 'Comprar visitas para el sitio' }, 0, { pt: 'Não sugira isso.', es: 'No sugieras eso.' }]] },
    { q: { pt: 'Onde ver os públicos de uma conta?', es: '¿Dónde ver los públicos de una cuenta?' },
      o: [[{ pt: 'No Gerenciador de Anúncios, página Públicos', es: 'En el Administrador de anuncios, página Públicos' }, 1, { pt: 'Isso! Lá estão a tabela e o botão Criar público.', es: '¡Eso! Ahí están la tabla y el botón Crear público.' }],
        [{ pt: 'Na Caixa de Entrada', es: 'En Mensajes' }, 0, { pt: 'A Caixa de Entrada é de mensagens.', es: 'Mensajes es de mensajes.' }],
        [{ pt: 'No Gerenciador de Comércio', es: 'En el Administrador de ventas' }, 0, { pt: 'O Comércio cuida do catálogo.', es: 'Ventas cuida del catálogo.' }]] }
  ]);

  /* ---------- 19. Microdata Debugger: quatro mini-quizzes (Microdados 01–04) ---------- */
  quizCatalogo('para-que-microdados', { pt: 'Para que servem os microdados?', es: '¿Para qué sirven los microdatos?' }, { pt: 'Site, Pixel, catálogo e Microdata Debugger: quem faz o quê.', es: 'Sitio, Pixel, catálogo y Microdata Debugger: quién hace qué.' }, [
    { q: { pt: 'Um cliente quer que os produtos do site entrem sozinhos no catálogo da Meta. O que a Meta pede?', es: 'Un cliente quiere que los productos del sitio entren solos en el catálogo de Meta. ¿Qué pide Meta?' },
      o: [[{ pt: 'Tags de microdados nas páginas de produto, junto da instalação do Pixel', es: 'Etiquetas de microdatos en las páginas de producto, junto con la instalación del Pixel' }, 1, { pt: 'Isso! É o que a própria ferramenta explica.', es: '¡Eso! Es lo que explica la propia herramienta.' }],
        [{ pt: 'Mandar um print de cada produto', es: 'Mandar una captura de cada producto' }, 0, { pt: 'Print não alimenta o catálogo.', es: 'Una captura no alimenta el catálogo.' }],
        [{ pt: 'Criar um público personalizado', es: 'Crear un público personalizado' }, 0, { pt: 'Público é para segmentação, não para trazer produtos.', es: 'El público es para segmentación, no para traer productos.' }]] },
    { q: { pt: 'O que são microdados?', es: '¿Qué son los microdatos?' },
      o: [[{ pt: 'Dados de marcação estruturados que indicam informações do produto, como nome, descrição e preço', es: 'Datos de marcado estructurados que indican información del producto, como nombre, descripción y precio' }, 1, { pt: 'Isso! Ficam no código da página, invisíveis para o cliente comum.', es: '¡Eso! Están en el código de la página, invisibles para el cliente común.' }],
        [{ pt: 'Dados pessoais dos clientes', es: 'Datos personales de los clientes' }, 0, { pt: 'Não: são dados do produto, não das pessoas.', es: 'No: son datos del producto, no de las personas.' }],
        [{ pt: 'O texto do anúncio', es: 'El texto del anuncio' }, 0, { pt: 'Anúncio é outra coisa.', es: 'El anuncio es otra cosa.' }]] },
    { q: { pt: 'Quem normalmente adiciona os microdados no site?', es: '¿Quién suele agregar los microdatos en el sitio?' },
      o: [[{ pt: 'A plataforma da loja ou o desenvolvedor do site do cliente; o atendimento mostra o que falta com o Microdata Debugger', es: 'La plataforma de la tienda o el desarrollador del sitio del cliente; la atención muestra lo que falta con el Microdata Debugger' }, 1, { pt: 'Isso! O código do site não é seu: você mostra e orienta.', es: '¡Eso! El código del sitio no es tuyo: muestras y orientas.' }],
        [{ pt: 'O agente de atendimento, direto no código do cliente', es: 'El agente de atención, directo en el código del cliente' }, 0, { pt: 'Não: mexer no site é do cliente ou do desenvolvedor dele.', es: 'No: tocar el sitio es del cliente o de su desarrollador.' }],
        [{ pt: 'A própria Meta, sozinha', es: 'Meta misma, sola' }, 0, { pt: 'A Meta só lê o que o site publica.', es: 'Meta solo lee lo que el sitio publica.' }]] }
  ]);
  quizCatalogo('usar-debugger', { pt: 'Como uso o Microdata Debugger?', es: '¿Cómo uso el Microdata Debugger?' }, { pt: 'URL de uma página de produto, Verificar e ler a Prévia.', es: 'URL de una página de producto, Comprobar y leer la vista previa.' }, [
    { q: { pt: 'Qual URL colocar no campo “Link do site”?', es: '¿Qué URL poner en el campo “Enlace al sitio web”?' },
      o: [[{ pt: 'A de uma página de produto, com detalhes do inventário', es: 'La de una página de producto, con detalles de inventario' }, 1, { pt: 'Isso! A tela pede “a URL de uma página da web com detalhes do inventário”.', es: '¡Eso! La pantalla pide “la URL de una página web con detalles de inventario”.' }],
        [{ pt: 'A do Gerenciador de Anúncios', es: 'La del Administrador de anuncios' }, 0, { pt: 'A ferramenta lê o site do cliente, não a Meta.', es: 'La herramienta lee el sitio del cliente, no Meta.' }],
        [{ pt: 'A do Instagram da loja', es: 'La de Instagram de la tienda' }, 0, { pt: 'Precisa ser a página do produto no site.', es: 'Debe ser la página del producto en el sitio.' }]] },
    { q: { pt: 'A ferramenta mostra as tabelas OpenGraph e JSON-LD e, no fim, “Parabéns! Seus microdados parecem ótimos!”. O que significa?', es: 'La herramienta muestra las tablas OpenGraph y JSON-LD y, al final, “¡Felicitaciones! ¡Tus microdatos se ven muy bien!”. ¿Qué significa?' },
      o: [[{ pt: 'Que a Meta leu os dados de produto da página e não achou problema', es: 'Que Meta leyó los datos de producto de la página y no encontró problema' }, 1, { pt: 'Isso! Mas é de uma página: outras páginas podem ter problema.', es: '¡Eso! Pero es de una página: otras páginas pueden tener problema.' }],
        [{ pt: 'Que o catálogo está pronto e com todos os produtos', es: 'Que el catálogo está listo y con todos los productos' }, 0, { pt: 'A ferramenta olha uma página por vez.', es: 'La herramienta mira una página por vez.' }],
        [{ pt: 'Que o anúncio foi aprovado', es: 'Que el anuncio fue aprobado' }, 0, { pt: 'Não tem relação com anúncio.', es: 'No tiene relación con el anuncio.' }]] },
    { q: { pt: 'O cliente tem 300 produtos. Como conferir?', es: 'El cliente tiene 300 productos. ¿Cómo revisar?' },
      o: [[{ pt: 'Testar algumas páginas de tipos diferentes (por exemplo, produto normal, sem estoque e com variantes)', es: 'Probar algunas páginas de tipos distintos (por ejemplo, producto normal, sin stock y con variantes)' }, 1, { pt: 'Isso! A ferramenta verifica uma URL por vez.', es: '¡Eso! La herramienta verifica una URL por vez.' }],
        [{ pt: 'Testar só a página inicial', es: 'Probar solo la página de inicio' }, 0, { pt: 'A página inicial não tem os dados de um produto.', es: 'La página de inicio no tiene los datos de un producto.' }],
        [{ pt: 'Não precisa testar', es: 'No hace falta probar' }, 0, { pt: 'Vale testar para evitar surpresas.', es: 'Conviene probar para evitar sorpresas.' }]] }
  ]);
  quizCatalogo('campo-microdados', { pt: 'Que campo é esse?', es: '¿Qué campo es ese?' }, { pt: 'id, price, availability e a ligação com o catálogo e o Pixel.', es: 'id, price, availability y el vínculo con el catálogo y el Pixel.' }, [
    { q: { pt: 'O parâmetro “id” da tabela mostra CANECA_01. Com o que ele deve combinar?', es: 'El parámetro “id” de la tabla muestra CANECA_01. ¿Con qué debe coincidir?' },
      o: [[{ pt: 'Com a Identificação do conteúdo do produto no catálogo, e com o content_id que o Pixel manda', es: 'Con el Identificador de contenido del producto en el catálogo, y con el content_id que manda el Pixel' }, 1, { pt: 'Isso! É o mesmo “idioma” da aula 04 do Catálogo.', es: '¡Eso! Es el mismo “idioma” de la clase 04 del Catálogo.' }],
        [{ pt: 'Com o nome da Página', es: 'Con el nombre de la Página' }, 0, { pt: 'O id é do produto, não da Página.', es: 'El id es del producto, no de la Página.' }],
        [{ pt: 'Com o ID do anúncio', es: 'Con el ID del anuncio' }, 0, { pt: 'O id é do produto no catálogo.', es: 'El id es del producto en el catálogo.' }]] },
    { q: { pt: 'O preço da página aparece como “R$ 54,90” escrito como texto. O que está errado?', es: 'El precio de la página aparece como “R$ 54,90” escrito como texto. ¿Qué está mal?' },
      o: [[{ pt: 'O preço deve ser um número com a moeda, como 54.90 BRL', es: 'El precio debe ser un número con la moneda, como 54.90 BRL' }, 1, { pt: 'Isso! É o formato que a ferramenta mostra no sucesso.', es: '¡Eso! Es el formato que muestra la herramienta en el éxito.' }],
        [{ pt: 'Nada: texto é aceito', es: 'Nada: el texto se acepta' }, 0, { pt: 'Texto livre não é entendido como preço.', es: 'El texto libre no se entiende como precio.' }],
        [{ pt: 'O preço deveria estar em dólar', es: 'El precio debería estar en dólares' }, 0, { pt: 'A moeda deve ser a da loja (BRL).', es: 'La moneda debe ser la de la tienda (BRL).' }]] },
    { q: { pt: 'Um produto sem estoque. Como a página deve informar a disponibilidade?', es: 'Un producto sin stock. ¿Cómo debe informar la página la disponibilidad?' },
      o: [[{ pt: 'Com availability “out of stock”', es: 'Con availability “out of stock”' }, 1, { pt: 'Isso! Assim o catálogo mostra “Indisponível”.', es: '¡Eso! Así el catálogo muestra “Agotado”.' }],
        [{ pt: 'Sem o campo, e pronto', es: 'Sin el campo, y listo' }, 0, { pt: 'Falta de dado pode deixar o produto errado no catálogo.', es: 'La falta de datos puede dejar el producto mal en el catálogo.' }],
        [{ pt: 'Com availability “in stock”, para vender mais', es: 'Con availability “in stock”, para vender más' }, 0, { pt: 'Isso engana o cliente e gera reclamação.', es: 'Eso engaña al cliente y genera reclamos.' }]] }
  ]);
  quizCatalogo('por-que-erro-microdados', { pt: 'Por que deu erro?', es: '¿Por qué dio error?' }, { pt: '“Falha na validação de dados”: onde procurar.', es: '“Error al validar los datos”: dónde buscar.' }, [
    { q: { pt: 'A ferramenta mostra “Falha na validação de dados”. Ela diz qual campo está errado?', es: 'La herramienta muestra “Error al validar los datos”. ¿Dice qué campo está mal?' },
      o: [[{ pt: 'Não: é um aviso geral; é preciso comparar com uma página que funciona', es: 'No: es un aviso general; hay que comparar con una página que funciona' }, 1, { pt: 'Isso! Na tela real que vimos, não aparece o campo.', es: '¡Eso! En la pantalla real que vimos, no aparece el campo.' }],
        [{ pt: 'Sim: sempre diz o campo e a linha', es: 'Sí: siempre dice el campo y la línea' }, 0, { pt: 'Na tela que vimos, só a frase geral.', es: 'En la pantalla que vimos, solo la frase general.' }],
        [{ pt: 'Sim: diz o nome do desenvolvedor', es: 'Sí: dice el nombre del desarrollador' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Uma página mostra erro e a página de outro produto da mesma loja está ótima. Primeira ideia?', es: 'Una página muestra error y la página de otro producto de la misma tienda está perfecta. ¿Primera idea?' },
      o: [[{ pt: 'Comparar as duas tabelas: algum parâmetro (id, price, availability…) falta ou está em formato diferente na página com erro', es: 'Comparar las dos tablas: algún parámetro (id, price, availability…) falta o está en formato distinto en la página con error' }, 1, { pt: 'Isso! A diferença costuma ser um campo.', es: '¡Eso! La diferencia suele ser un campo.' }],
        [{ pt: 'Recriar o catálogo', es: 'Recrear el catálogo' }, 0, { pt: 'O problema está na página, não no catálogo.', es: 'El problema está en la página, no en el catálogo.' }],
        [{ pt: 'Trocar o domínio do site', es: 'Cambiar el dominio del sitio' }, 0, { pt: 'Exagero.', es: 'Exagerado.' }]] },
    { q: { pt: 'A página aparece sem microdados (por exemplo, um carrinho). O que dizer ao cliente?', es: 'La página aparece sin microdatos (por ejemplo, un carrito). ¿Qué decirle al cliente?' },
      o: [[{ pt: 'Que a ferramenta deve ser testada numa página de produto, que é onde ficam os dados do produto', es: 'Que la herramienta debe probarse en una página de producto, que es donde están los datos del producto' }, 1, { pt: 'Isso! Carrinho e página inicial não trazem os dados do produto.', es: '¡Eso! El carrito y la página de inicio no traen los datos del producto.' }],
        [{ pt: 'Que o site está quebrado', es: 'Que el sitio está roto' }, 0, { pt: 'Não: só é a página errada para testar.', es: 'No: solo es la página equivocada para probar.' }],
        [{ pt: 'Que a Meta bloqueou o site', es: 'Que Meta bloqueó el sitio' }, 0, { pt: 'Sem sinal disso.', es: 'Sin señal de eso.' }]] }
  ]);

  /* ---------- 20. Entrega: cinco mini-quizzes (Entrega 01–05) ---------- */
  quizCatalogo('o-que-e-aprendizado', { pt: 'O que é a fase de aprendizado?', es: '¿Qué es la fase de aprendizaje?' }, { pt: 'Quando aparece, quando termina e o que não fazer.', es: 'Cuándo aparece, cuándo termina y qué no hacer.' }, [
    { q: { pt: 'O que é a fase de aprendizado?', es: '¿Qué es la fase de aprendizaje?' },
      o: [[{ pt: 'Um defeito que precisa ser consertado', es: 'Un defecto que hay que arreglar' }, 0, { pt: 'Não é defeito: é o começo normal.', es: 'No es un defecto: es el comienzo normal.' }],
        [{ pt: 'O período em que o sistema ainda aprende como veicular o conjunto e qual desempenho ele pode ter', es: 'El período en que el sistema todavía aprende cómo entregar el conjunto y qué rendimiento puede tener' }, 1, { pt: 'Isso! É assim que a Central de Ajuda descreve.', es: '¡Eso! Así lo describe el Centro de ayuda.' }],
        [{ pt: 'Uma punição por anúncio ruim', es: 'Un castigo por un anuncio malo' }, 0, { pt: 'Não tem relação com punição.', es: 'No tiene relación con un castigo.' }]] },
    { q: { pt: 'Quando um conjunto costuma sair do aprendizado?', es: '¿Cuándo suele salir un conjunto del aprendizaje?' },
      o: [[{ pt: 'Em 24 horas, sempre', es: 'En 24 horas, siempre' }, 0, { pt: 'Não há prazo fixo.', es: 'No hay plazo fijo.' }],
        [{ pt: 'Quando o orçamento dobra', es: 'Cuando el presupuesto se duplica' }, 0, { pt: 'Não é por orçamento, é por resultados estáveis.', es: 'No es por presupuesto, es por resultados estables.' }],
        [{ pt: 'Quando o desempenho se estabiliza, normalmente depois de cerca de 50 resultados na semana seguinte à última edição significativa', es: 'Cuando el rendimiento se estabiliza, normalmente después de unos 50 resultados en la semana siguiente a la última edición significativa' }, 1, { pt: 'Isso!', es: '¡Eso!' }]] },
    { q: { pt: 'O cliente quer editar o conjunto todo dia durante o aprendizado. O que dizer?', es: 'El cliente quiere editar el conjunto todos los días durante el aprendizaje. ¿Qué decir?' },
      o: [[{ pt: 'Que algumas edições reiniciam o aprendizado e que o melhor é evitar edições desnecessárias', es: 'Que algunas ediciones reinician el aprendizaje y que lo mejor es evitar ediciones innecesarias' }, 1, { pt: 'Isso! É uma boa prática oficial.', es: '¡Eso! Es una buena práctica oficial.' }],
        [{ pt: 'Que pode editar à vontade, não muda nada', es: 'Que puede editar a gusto, no cambia nada' }, 0, { pt: 'Muda: edições significativas reiniciam.', es: 'Cambia: las ediciones significativas reinician.' }],
        [{ pt: 'Que a Meta proíbe editar', es: 'Que Meta prohíbe editar' }, 0, { pt: 'Pode editar, mas com bom motivo.', es: 'Se puede editar, pero con buen motivo.' }]] }
  ]);
  quizCatalogo('ler-veiculacao', { pt: 'Lendo a coluna Veiculação', es: 'Leyendo la columna Entrega' }, { pt: 'Status, resultados e o card de aprendizado.', es: 'Estados, resultados y la tarjeta de aprendizaje.' }, [
    { q: { pt: 'O que mostra a coluna Veiculação?', es: '¿Qué muestra la columna Entrega?' },
      o: [[{ pt: 'O estado do conjunto: Ativo, Aprendizado, Aprendizado limitado, Em análise, Desativado…', es: 'El estado del conjunto: Activo, Aprendizaje, Aprendizaje limitado, En revisión, Desactivado…' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O nome do público', es: 'El nombre del público' }, 0, { pt: 'Isso é outra coluna.', es: 'Eso es otra columna.' }],
        [{ pt: 'O lucro da loja', es: 'La ganancia de la tienda' }, 0, { pt: 'O Gerenciador não mostra lucro.', es: 'El Administrador no muestra ganancia.' }]] },
    { q: { pt: 'Desde quando contam os Resultados na tabela do simulador?', es: '¿Desde cuándo cuentan los Resultados en la tabla del simulador?' },
      o: [[{ pt: 'Desde que a conta foi criada', es: 'Desde que se creó la cuenta' }, 0, { pt: 'Não: recomeçam depois de uma edição significativa.', es: 'No: recomienzan después de una edición significativa.' }],
        [{ pt: 'Desde a última edição significativa', es: 'Desde la última edición significativa' }, 1, { pt: 'Isso! Por isso edição significativa “zera” o aprendizado.', es: '¡Eso! Por eso la edición significativa “pone a cero” el aprendizaje.' }],
        [{ pt: 'Só desde ontem', es: 'Solo desde ayer' }, 0, { pt: 'Não há esse corte.', es: 'No hay ese corte.' }]] },
    { q: { pt: 'O card “% gastos na fase de aprendizado” mostra…', es: 'La tarjeta “% de gasto en la fase de aprendizaje” muestra…' },
      o: [[{ pt: 'Quanto do dinheiro gasto está em conjuntos que ainda aprendem', es: 'Cuánto del dinero gastado está en conjuntos que todavía aprenden' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Quanto o cliente vai economizar', es: 'Cuánto va a ahorrar el cliente' }, 0, { pt: 'Não é economia.', es: 'No es ahorro.' }],
        [{ pt: 'A nota do anúncio', es: 'La nota del anuncio' }, 0, { pt: 'Não há nota.', es: 'No hay nota.' }]] }
  ]);
  quizCatalogo('edicao-significativa-q', { pt: 'Esta edição reinicia o aprendizado?', es: '¿Esta edición reinicia el aprendizaje?' }, { pt: 'Público, criativo, lance, orçamento e pausa.', es: 'Público, creativo, puja, presupuesto y pausa.' }, [
    { q: { pt: 'Qual destas é uma edição significativa?', es: '¿Cuál de estas es una edición significativa?' },
      o: [[{ pt: 'Mudar o orçamento de 100 para 101', es: 'Cambiar el presupuesto de 100 a 101' }, 0, { pt: 'Provavelmente não reinicia, pelo exemplo da Central de Ajuda.', es: 'Probablemente no reinicia, según el ejemplo del Centro de ayuda.' }],
        [{ pt: 'Mudar o público do conjunto', es: 'Cambiar el público del conjunto' }, 1, { pt: 'Isso! Mudar o direcionamento é edição significativa.', es: '¡Eso! Cambiar la segmentación es una edición significativa.' }],
        [{ pt: 'Olhar a tabela de resultados', es: 'Mirar la tabla de resultados' }, 0, { pt: 'Olhar não edita nada.', es: 'Mirar no edita nada.' }]] },
    { q: { pt: 'Adicionar um novo anúncio ao conjunto…', es: 'Agregar un anuncio nuevo al conjunto…' },
      o: [[{ pt: 'Não muda nada', es: 'No cambia nada' }, 0, { pt: 'Pela lista, adicionar anúncio é significativa.', es: 'Según la lista, agregar un anuncio es significativa.' }],
        [{ pt: 'Apaga a campanha', es: 'Borra la campaña' }, 0, { pt: 'Não apaga.', es: 'No borra.' }],
        [{ pt: 'É uma edição significativa e reinicia o aprendizado', es: 'Es una edición significativa y reinicia el aprendizaje' }, 1, { pt: 'Isso!', es: '¡Eso!' }]] },
    { q: { pt: 'Pausar um conjunto por 7 dias ou mais e voltar…', es: 'Pausar un conjunto por 7 días o más y volver…' },
      o: [[{ pt: 'Conta como edição significativa', es: 'Cuenta como edición significativa' }, 1, { pt: 'Isso! Está na lista da Central de Ajuda.', es: '¡Eso! Está en la lista del Centro de ayuda.' }],
        [{ pt: 'Nunca afeta nada', es: 'Nunca afecta nada' }, 0, { pt: 'Pausas longas reiniciam.', es: 'Las pausas largas reinician.' }],
        [{ pt: 'Dobra o orçamento', es: 'Duplica el presupuesto' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] }
  ]);
  quizCatalogo('aprendizado-limitado-q', { pt: 'Aprendizado limitado: o que fazer?', es: 'Aprendizaje limitado: ¿qué hacer?' }, { pt: 'Orçamento realista, poucas edições, conjuntos combinados.', es: 'Presupuesto realista, pocas ediciones, conjuntos combinados.' }, [
    { q: { pt: 'O que significa “Aprendizado limitado”?', es: '¿Qué significa “Aprendizaje limitado”?' },
      o: [[{ pt: 'Que o anúncio foi reprovado', es: 'Que el anuncio fue rechazado' }, 0, { pt: 'Reprovação aparece de outro jeito.', es: 'El rechazo aparece de otra forma.' }],
        [{ pt: 'Que o conjunto não está tendo resultados suficientes para sair do aprendizado', es: 'Que el conjunto no está teniendo resultados suficientes para salir del aprendizaje' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Que a conta foi bloqueada', es: 'Que la cuenta fue bloqueada' }, 0, { pt: 'Não é bloqueio.', es: 'No es un bloqueo.' }]] },
    { q: { pt: 'Qual é uma boa prática oficial para conjuntos em aprendizado limitado?', es: '¿Cuál es una buena práctica oficial para conjuntos en aprendizaje limitado?' },
      o: [[{ pt: 'Editar todo dia', es: 'Editar todos los días' }, 0, { pt: 'Edições desnecessárias atrapalham.', es: 'Las ediciones innecesarias estorban.' }],
        [{ pt: 'Zerar o orçamento', es: 'Poner el presupuesto en cero' }, 0, { pt: 'Sem orçamento, sem resultados.', es: 'Sin presupuesto, sin resultados.' }],
        [{ pt: 'Usar orçamento realista, evitar edições desnecessárias e combinar conjuntos semelhantes', es: 'Usar presupuesto realista, evitar ediciones innecesarias y combinar conjuntos parecidos' }, 1, { pt: 'Isso! São as boas práticas da Central de Ajuda.', es: '¡Eso! Son las buenas prácticas del Centro de ayuda.' }]] },
    { q: { pt: 'Por que combinar conjuntos de anúncios semelhantes ajuda?', es: '¿Por qué ayuda combinar conjuntos de anuncios parecidos?' },
      o: [[{ pt: 'Porque os aprendizados também se combinam', es: 'Porque los aprendizajes también se combinan' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Porque o anúncio fica mais barato por lei', es: 'Porque el anuncio queda más barato por ley' }, 0, { pt: 'Não é por lei.', es: 'No es por ley.' }],
        [{ pt: 'Porque a Meta dá um brinde', es: 'Porque Meta da un regalo' }, 0, { pt: 'Não há brinde.', es: 'No hay regalo.' }]] }
  ]);
  quizCatalogo('nao-veicula-q', { pt: 'Por que não veicula?', es: '¿Por qué no entrega?' }, { pt: 'Ordem: conta, status, nível.', es: 'Orden: cuenta, estado, nivel.' }, [
    { q: { pt: 'Todos os anúncios pararam e o topo da conta avisa que quase atingiu o limite de gastos. O que fazer?', es: 'Todos los anuncios se detuvieron y arriba en la cuenta avisa que casi alcanzó el límite de gasto. ¿Qué hacer?' },
      o: [[{ pt: 'Recriar todas as campanhas', es: 'Recrear todas las campañas' }, 0, { pt: 'O problema está na conta, não nas campanhas.', es: 'El problema está en la cuenta, no en las campañas.' }],
        [{ pt: 'Aumentar, redefinir ou remover o limite de gastos', es: 'Aumentar, restablecer o eliminar el límite de gasto' }, 1, { pt: 'Isso! É o que o aviso real diz.', es: '¡Eso! Es lo que dice el aviso real.' }],
        [{ pt: 'Esperar um mês', es: 'Esperar un mes' }, 0, { pt: 'Sem mudar o limite, não volta.', es: 'Sin cambiar el límite, no vuelve.' }]] },
    { q: { pt: 'Um conjunto está “Em análise”. O que isso diz?', es: 'Un conjunto está “En revisión”. ¿Qué dice eso?' },
      o: [[{ pt: 'Que a Meta avisa se o anúncio atende aos Padrões de Publicidade em até 24 horas', es: 'Que Meta avisa si el anuncio cumple las Normas de Publicidad en un plazo de 24 horas' }, 1, { pt: 'Isso! É o texto da tela real.', es: '¡Eso! Es el texto de la pantalla real.' }],
        [{ pt: 'Que o cliente precisa pagar uma taxa', es: 'Que el cliente debe pagar una tasa' }, 0, { pt: 'Não há taxa.', es: 'No hay tasa.' }],
        [{ pt: 'Que o anúncio foi apagado', es: 'Que el anuncio fue borrado' }, 0, { pt: 'Não foi.', es: 'No fue así.' }]] },
    { q: { pt: 'Um conjunto está “Desativado” e ninguém lembra de ter desativado. Onde olhar?', es: 'Un conjunto está “Desactivado” y nadie recuerda haberlo desactivado. ¿Dónde mirar?' },
      o: [[{ pt: 'No Instagram da loja', es: 'En el Instagram de la tienda' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }],
        [{ pt: 'No catálogo', es: 'En el catálogo' }, 0, { pt: 'O catálogo não desativa conjuntos.', es: 'El catálogo no desactiva conjuntos.' }],
        [{ pt: 'Nas Regras automatizadas: uma regra pode ter desativado', es: 'En las Reglas automáticas: una regla puede haberlo desactivado' }, 1, { pt: 'Isso! Lembra do módulo anterior.', es: '¡Eso! Recuerda el módulo anterior.' }]] }
  ]);

  /* ---------- 21. Meta Verified para empresas: seis mini-quizzes (Verified 01–06) ---------- */
  quizCatalogo('o-que-e-verified', { pt: 'O que é o Meta Verified?', es: '¿Qué es Meta Verified?' }, { pt: 'Assinatura paga: selo, suporte e proteção.', es: 'Suscripción paga: insignia, asistencia y protección.' }, [
    { q: { pt: 'O que é o Meta Verified para empresas?', es: '¿Qué es Meta Verified para empresas?' },
      o: [[{ pt: 'Um selo gratuito para toda Página', es: 'Una insignia gratuita para toda página' }, 0, { pt: 'Não é gratuito: é uma assinatura paga.', es: 'No es gratis: es una suscripción paga.' }],
        [{ pt: 'Uma assinatura paga com selo, suporte e proteção contra falsificação de identidade', es: 'Una suscripción paga con insignia, asistencia y protección contra la suplantación de identidad' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Um tipo de campanha de anúncios', es: 'Un tipo de campaña de anuncios' }, 0, { pt: 'Não é um produto de anúncios.', es: 'No es un producto de anuncios.' }]] },
    { q: { pt: 'Os benefícios do Meta Verified valem para…', es: 'Los beneficios de Meta Verified valen para…' },
      o: [[{ pt: 'Todas as contas do portfólio empresarial', es: 'Todas las cuentas del portfolio comercial' }, 0, { pt: 'Só para os ativos assinados.', es: 'Solo para los activos suscritos.' }],
        [{ pt: 'Só a Página, a conta do Instagram ou o número de WhatsApp assinados', es: 'Solo la página, la cuenta de Instagram o el número de WhatsApp suscritos' }, 1, { pt: 'Isso! A própria Meta explica assim.', es: '¡Eso! La propia Meta lo explica así.' }],
        [{ pt: 'Qualquer pessoa que siga a empresa', es: 'Cualquier persona que siga a la empresa' }, 0, { pt: 'Não é por seguidores.', es: 'No es por seguidores.' }]] },
    { q: { pt: 'Um cliente que já tem selo de verificado precisa fazer algo para mantê-lo?', es: 'Un cliente que ya tiene insignia de verificación, ¿necesita hacer algo para conservarla?' },
      o: [[{ pt: 'Assinar imediatamente', es: 'Suscribirse de inmediato' }, 0, { pt: 'Não: nenhuma ação é necessária.', es: 'No: no se necesita ninguna acción.' }],
        [{ pt: 'Pagar uma taxa anual', es: 'Pagar una tasa anual' }, 0, { pt: 'Não há essa taxa.', es: 'No hay esa tasa.' }],
        [{ pt: 'Nenhuma ação; pode assinar só se quiser os benefícios extras', es: 'Ninguna acción; puede suscribirse solo si quiere los beneficios adicionales' }, 1, { pt: 'Isso!', es: '¡Eso!' }]] }
  ]);
  quizCatalogo('planos-verified', { pt: 'Qual plano serve?', es: '¿Qué plan sirve?' }, { pt: 'Suporte e recursos por plano.', es: 'Asistencia y funciones por plan.' }, [
    { q: { pt: 'Qual é o plano mais baixo que inclui ligação de um agente?', es: '¿Cuál es el plan más bajo que incluye la llamada de un agente?' },
      o: [[{ pt: 'Business Básico', es: 'Business Standard' }, 0, { pt: 'O Básico tem chat e e-mail.', es: 'El Standard tiene chat y correo.' }],
        [{ pt: 'Business Plus', es: 'Business Plus' }, 0, { pt: 'O Plus tem suporte priorizado, mas não ligação.', es: 'Plus tiene asistencia prioritaria, pero no llamada.' }],
        [{ pt: 'Business Premium', es: 'Business Premium' }, 1, { pt: 'Isso! Premium e Max.', es: '¡Eso! Premium y Max.' }]] },
    { q: { pt: 'O monitoramento dedicado de casos aparece em qual plano?', es: '¿En qué plan aparece el monitoreo dedicado de casos?' },
      o: [[{ pt: 'Só no Business Max', es: 'Solo en Business Max' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Em todos', es: 'En todos' }, 0, { pt: 'Não: só no mais alto.', es: 'No: solo en el más alto.' }],
        [{ pt: 'Só no Plus', es: 'Solo en Plus' }, 0, { pt: 'O Plus tem suporte priorizado.', es: 'Plus tiene asistencia prioritaria.' }]] },
    { q: { pt: 'Por que um plano pode não aparecer para uma empresa?', es: '¿Por qué un plan puede no aparecer para una empresa?' },
      o: [[{ pt: 'Porque a Meta esqueceu de mostrar', es: 'Porque Meta se olvidó de mostrarlo' }, 0, { pt: 'Não é esquecimento.', es: 'No es un olvido.' }],
        [{ pt: 'Porque a empresa não pagou imposto', es: 'Porque la empresa no pagó impuestos' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }],
        [{ pt: 'Porque a Meta define a disponibilidade com base na atividade da empresa nos apps e na região', es: 'Porque Meta define la disponibilidad según la actividad de la empresa en las apps y la región' }, 1, { pt: 'Isso! É o que a página oficial diz.', es: '¡Eso! Es lo que dice la página oficial.' }]] }
  ]);
  quizCatalogo('cadastro-verified', { pt: 'Cadastro passo a passo', es: 'Registro paso a paso' }, { pt: 'Etapas, métodos e prazo.', es: 'Etapas, métodos y plazo.' }, [
    { q: { pt: 'Em quanto tempo a Meta dá o resultado da análise?', es: '¿En cuánto tiempo da Meta el resultado de la revisión?' },
      o: [[{ pt: 'Em até 3 dias úteis', es: 'En un plazo de 3 días hábiles' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Na hora, sempre', es: 'Al instante, siempre' }, 0, { pt: 'Há análise.', es: 'Hay revisión.' }],
        [{ pt: 'Em 6 meses', es: 'En 6 meses' }, 0, { pt: 'Muito mais rápido.', es: 'Mucho más rápido.' }]] },
    { q: { pt: 'Quantos ativos dá para verificar numa assinatura pelo app?', es: '¿Cuántos activos se pueden verificar en una suscripción desde la app?' },
      o: [[{ pt: 'Até dois do mesmo portfólio (até três pelo Meta Business Suite no computador)', es: 'Hasta dos del mismo portfolio (hasta tres desde Meta Business Suite en la computadora)' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Ilimitados', es: 'Ilimitados' }, 0, { pt: 'Há limite.', es: 'Hay un límite.' }],
        [{ pt: 'Só um, nunca mais', es: 'Solo uno, nunca más' }, 0, { pt: 'Dá para até dois ou três.', es: 'Se puede hasta dos o tres.' }]] },
    { q: { pt: 'Qual destes é um método de verificação da empresa?', es: '¿Cuál de estos es un método de verificación de la empresa?' },
      o: [[{ pt: 'Pagar a Meta para pular a análise', es: 'Pagarle a Meta para saltarse la revisión' }, 0, { pt: 'Não existe.', es: 'No existe.' }],
        [{ pt: 'Detalhes da empresa que batem com um registro público', es: 'Detalles de la empresa que coinciden con un registro público' }, 1, { pt: 'Isso! Há também documentação, identificação oficial, conta bancária e presença estabelecida.', es: '¡Eso! También hay documentación, identificación oficial, cuenta bancaria y presencia establecida.' }],
        [{ pt: 'Curtir a Página da Meta', es: 'Dar me gusta a la página de Meta' }, 0, { pt: 'Não verifica nada.', es: 'No verifica nada.' }]] }
  ]);
  quizCatalogo('nao-consigo-verified', { pt: 'A opção não aparece', es: 'La opción no aparece' }, { pt: 'Requisitos e Proteção Avançada.', es: 'Requisitos y Protección avanzada.' }, [
    { q: { pt: 'A opção de cadastro não aparece. Qual é a causa mais comum?', es: 'La opción de registro no aparece. ¿Cuál es la causa más común?' },
      o: [[{ pt: 'Algum requisito não foi atendido, por exemplo, uma pessoa com acesso sem Proteção Avançada', es: 'Algún requisito no se cumple, por ejemplo, una persona con acceso sin Protección avanzada' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O computador está lento', es: 'La computadora está lenta' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'O cliente deve esperar um ano', es: 'El cliente debe esperar un año' }, 0, { pt: 'Não há esse prazo.', es: 'No hay ese plazo.' }]] },
    { q: { pt: 'Depois de todas as pessoas ativarem a Proteção Avançada, o que fazer?', es: 'Después de que todas las personas activen la Protección avanzada, ¿qué hacer?' },
      o: [[{ pt: 'Apagar o portfólio', es: 'Eliminar el portfolio' }, 0, { pt: 'Não.', es: 'No.' }],
        [{ pt: 'Aguardar até 24 horas e tentar de novo', es: 'Esperar hasta 24 horas e intentarlo de nuevo' }, 1, { pt: 'Isso! A mudança pode levar esse tempo.', es: '¡Eso! El cambio puede tardar ese tiempo.' }],
        [{ pt: 'Pedir a senha de todos', es: 'Pedir la contraseña de todos' }, 0, { pt: 'Nunca peça senha.', es: 'Nunca pidas contraseñas.' }]] },
    { q: { pt: 'O documento de identificação aceito deve…', es: 'El documento de identificación aceptado debe…' },
      o: [[{ pt: 'Estar vencido, desde que legível', es: 'Estar vencido, siempre que sea legible' }, 0, { pt: 'Precisa ser válido, não expirado.', es: 'Debe ser válido, no vencido.' }],
        [{ pt: 'Ter qualquer nome', es: 'Tener cualquier nombre' }, 0, { pt: 'O nome precisa ser semelhante ao do ativo.', es: 'El nombre debe ser parecido al del activo.' }],
        [{ pt: 'Ser válido, legível e ter nome semelhante ao do ativo verificado', es: 'Ser válido, legible y tener un nombre parecido al del activo verificado' }, 1, { pt: 'Isso!', es: '¡Eso!' }]] }
  ]);
  quizCatalogo('nome-perfil-verified', { pt: 'Este nome é aceito?', es: '¿Este nombre se acepta?' }, { pt: 'Regras e limites do nome do perfil.', es: 'Reglas y límites del nombre del perfil.' }, [
    { q: { pt: 'Qual destes nomes de perfil costuma ser aceito?', es: '¿Cuál de estos nombres de perfil suele ser aceptado?' },
      o: [[{ pt: 'Marina Silva (parecido com o nome civil)', es: 'Marina Silva (parecido al nombre legal)' }, 1, { pt: 'Isso! Variação semelhante ao nome civil.', es: '¡Eso! Variante parecida al nombre legal.' }],
        [{ pt: 'Brigadeiros Gourmet 2000 (marca com número)', es: 'Brigadeiros Gourmet 2000 (marca con número)' }, 0, { pt: 'Números não são aceitos.', es: 'No se aceptan números.' }],
        [{ pt: 'MaRiNa!!!', es: 'MaRiNa!!!' }, 0, { pt: 'Símbolos e uso estranho de letras não são aceitos.', es: 'No se aceptan símbolos ni un uso extraño de letras.' }]] },
    { q: { pt: 'Qual é o limite de edições do nome no Instagram?', es: '¿Cuál es el límite de ediciones del nombre en Instagram?' },
      o: [[{ pt: 'Ilimitado', es: 'Ilimitado' }, 0, { pt: 'Há limite.', es: 'Hay un límite.' }],
        [{ pt: 'Duas vezes a cada 14 dias', es: 'Dos veces cada 14 días' }, 1, { pt: 'Isso! No Facebook é uma vez a cada 60 dias.', es: '¡Eso! En Facebook es una vez cada 60 días.' }],
        [{ pt: 'Uma vez por ano', es: 'Una vez al año' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'O nome de marca é muito diferente do nome civil. O que ajuda?', es: 'El nombre de marca es muy distinto del nombre legal. ¿Qué ayuda?' },
      o: [[{ pt: 'Atualizar o nome civil no portfólio empresarial ou escolher uma variação mais próxima', es: 'Actualizar el nombre legal en el portfolio comercial o elegir una variación más cercana' }, 1, { pt: 'Isso! É o que a Central de Ajuda orienta.', es: '¡Eso! Es lo que orienta el Centro de ayuda.' }],
        [{ pt: 'Pagar um plano maior', es: 'Pagar un plan más grande' }, 0, { pt: 'Plano não muda a regra.', es: 'El plan no cambia la regla.' }],
        [{ pt: 'Trocar várias vezes seguidas', es: 'Cambiarlo varias veces seguidas' }, 0, { pt: 'Há limite e a análise leva dias.', es: 'Hay un límite y la revisión tarda días.' }]] }
  ]);
  quizCatalogo('cancelar-verified', { pt: 'Cancelar ou revogada?', es: '¿Cancelar o revocada?' }, { pt: 'A diferença, o suporte e as causas.', es: 'La diferencia, la asistencia y las causas.' }, [
    { q: { pt: 'Depois de cancelar, a assinatura…', es: 'Después de cancelar, la suscripción…' },
      o: [[{ pt: 'Acaba na hora e devolve o dinheiro', es: 'Termina al instante y devuelve el dinero' }, 0, { pt: 'Não: não há reembolso por cancelamento.', es: 'No: no hay reembolso por cancelación.' }],
        [{ pt: 'Continua ativa até o fim do ciclo atual', es: 'Sigue activa hasta el final del ciclo actual' }, 1, { pt: 'Isso! E depois os ativos perdem a verificação.', es: '¡Eso! Y después los activos pierden la verificación.' }],
        [{ pt: 'Fica ativa para sempre', es: 'Queda activa para siempre' }, 0, { pt: 'Termina no fim do ciclo.', es: 'Termina al final del ciclo.' }]] },
    { q: { pt: 'Qual destes pode causar uma revogação?', es: '¿Cuál de estos puede causar una revocación?' },
      o: [[{ pt: 'Falha de pagamento sem forma de pagamento reserva', es: 'Falla de pago sin forma de pago de respaldo' }, 1, { pt: 'Isso! Há outras: verificação não aprovada, violação de políticas…', es: '¡Eso! Hay otras: verificación no aprobada, infracción de políticas…' }],
        [{ pt: 'Postar uma foto nova', es: 'Publicar una foto nueva' }, 0, { pt: 'Isso não revoga.', es: 'Eso no revoca.' }],
        [{ pt: 'Ter muitos seguidores', es: 'Tener muchos seguidores' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] },
    { q: { pt: 'O suporte por ligação de um agente está disponível a partir de qual plano?', es: '¿Desde qué plan está disponible la asistencia por llamada de un agente?' },
      o: [[{ pt: 'Business Premium', es: 'Business Premium' }, 1, { pt: 'Isso! Premium e Max.', es: '¡Eso! Premium y Max.' }],
        [{ pt: 'Business Básico', es: 'Business Standard' }, 0, { pt: 'Chat e e-mail apenas.', es: 'Solo chat y correo.' }],
        [{ pt: 'Qualquer um, mesmo sem assinatura', es: 'Cualquiera, incluso sin suscripción' }, 0, { pt: 'O suporte otimizado vale só para assinatura ativa.', es: 'La asistencia mejorada vale solo para suscripción activa.' }]] }
  ]);

  /* ---------- 22. Commerce (Gerenciador de Comércio): cinco mini-quizzes (Commerce 01–05) ---------- */
  quizCatalogo('o-que-e-commerce', { pt: 'O que é o Commerce?', es: '¿Qué es Commerce?' }, { pt: 'Gerenciador de Comércio, loja e finalização da compra.', es: 'Administrador de ventas, tienda y finalización de compra.' }, [
    { q: { pt: 'Para que serve o Gerenciador de Comércio?', es: '¿Para qué sirve el Administrador de ventas?' },
      o: [[{ pt: 'Só para criar anúncios', es: 'Solo para crear anuncios' }, 0, { pt: 'Anúncios são no Gerenciador de Anúncios.', es: 'Los anuncios se hacen en el Administrador de anuncios.' }],
        [{ pt: 'Para gerenciar catálogos, configurar uma loja e ver atividades de vendas no Facebook e no Instagram', es: 'Para gestionar catálogos, configurar una tienda y ver actividades de ventas en Facebook e Instagram' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Para pagar a conta de anúncios', es: 'Para pagar la cuenta publicitaria' }, 0, { pt: 'Pagamentos de anúncios são outra área.', es: 'Los pagos de anuncios son otra área.' }]] },
    { q: { pt: 'Onde o cliente termina a compra numa loja da Meta?', es: '¿Dónde termina el cliente la compra en una tienda de Meta?' },
      o: [[{ pt: 'Dentro do Instagram, pagando com cartão', es: 'Dentro de Instagram, pagando con tarjeta' }, 0, { pt: 'Isso foi descontinuado.', es: 'Eso fue discontinuado.' }],
        [{ pt: 'No WhatsApp', es: 'En WhatsApp' }, 0, { pt: 'Não é o método das Lojas.', es: 'No es el método de las Tiendas.' }],
        [{ pt: 'No site da empresa (finalização da compra no site)', es: 'En el sitio de la empresa (finalización de compra en el sitio)' }, 1, { pt: 'Isso! Desde setembro de 2025.', es: '¡Eso! Desde septiembre de 2025.' }]] },
    { q: { pt: 'Para usar etiquetas de produto em posts e anúncios, é obrigatório ter uma loja?', es: 'Para usar etiquetas de producto en publicaciones y anuncios, ¿es obligatorio tener una tienda?' },
      o: [[{ pt: 'Não: etiquetas de produto não exigem loja (os anúncios das Lojas, sim)', es: 'No: las etiquetas de producto no exigen tienda (los anuncios de Tiendas, sí)' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Sim, sempre', es: 'Sí, siempre' }, 0, { pt: 'Não é obrigatório.', es: 'No es obligatorio.' }],
        [{ pt: 'Só com Meta Verified', es: 'Solo con Meta Verified' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] }
  ]);
  quizCatalogo('criar-loja-q', { pt: 'Criando a loja', es: 'Creando la tienda' }, { pt: 'Etapas do assistente e o que checar antes.', es: 'Etapas del asistente y qué revisar antes.' }, [
    { q: { pt: 'Quanto custa configurar uma loja no Facebook e no Instagram?', es: '¿Cuánto cuesta configurar una tienda en Facebook e Instagram?' },
      o: [[{ pt: 'Uma taxa mensal', es: 'Una tasa mensual' }, 0, { pt: 'A tela diz que não custa nada.', es: 'La pantalla dice que no cuesta nada.' }],
        [{ pt: 'Nada: configurar a loja não custa nada', es: 'Nada: configurar la tienda no cuesta nada' }, 1, { pt: 'Isso! Está escrito na tela real.', es: '¡Eso! Está escrito en la pantalla real.' }],
        [{ pt: 'US$ 49,99', es: '49,99 USD' }, 0, { pt: 'Esse valor é de outro produto.', es: 'Ese valor es de otro producto.' }]] },
    { q: { pt: 'Qual destas é uma plataforma de parceiro do assistente?', es: '¿Cuál de estas es una plataforma de un socio del asistente?' },
      o: [[{ pt: 'Shopify', es: 'Shopify' }, 1, { pt: 'Isso! Também BigCommerce, Feedonomics, DataFeedWatch, Productsup e Magento.', es: '¡Eso! También BigCommerce, Feedonomics, DataFeedWatch, Productsup y Magento.' }],
        [{ pt: 'Netflix', es: 'Netflix' }, 0, { pt: 'Não é de comércio.', es: 'No es de comercio.' }],
        [{ pt: 'Google Maps', es: 'Google Maps' }, 0, { pt: 'Não é uma plataforma de loja.', es: 'No es una plataforma de tienda.' }]] },
    { q: { pt: 'O que acontece ao clicar em “Concluir a configuração” na última tela?', es: '¿Qué pasa al hacer clic en “Finalizar la configuración” en la última pantalla?' },
      o: [[{ pt: 'Nada, é só uma prévia', es: 'Nada, es solo una vista previa' }, 0, { pt: 'Ele envia a loja para análise.', es: 'Envía la tienda a revisión.' }],
        [{ pt: 'A loja é enviada para análise e o Acordo do Vendedor é aceito', es: 'La tienda se envía a revisión y se acepta el Acuerdo para vendedores' }, 1, { pt: 'Isso! Por isso confira tudo antes.', es: '¡Eso! Por eso revisa todo antes.' }],
        [{ pt: 'A loja é apagada', es: 'La tienda se elimina' }, 0, { pt: 'Não.', es: 'No.' }]] }
  ]);
  quizCatalogo('configurar-loja-q', { pt: 'Configurar e publicar', es: 'Configurar y publicar' }, { pt: 'Análise, perfil de envio e URL de finalização da compra.', es: 'Revisión, perfil de envío y URL de finalización de compra.' }, [
    { q: { pt: 'Quanto pode levar a análise da loja?', es: '¿Cuánto puede tardar la revisión de la tienda?' },
      o: [[{ pt: 'Até quatro semanas', es: 'Hasta cuatro semanas' }, 1, { pt: 'Isso! O status é atualizado no Gerenciador de Comércio.', es: '¡Eso! El estado se actualiza en el Administrador de ventas.' }],
        [{ pt: 'Sempre 1 hora', es: 'Siempre 1 hora' }, 0, { pt: 'Pode levar semanas.', es: 'Puede tardar semanas.' }],
        [{ pt: 'Não há análise', es: 'No hay revisión' }, 0, { pt: 'Há análise.', es: 'Hay revisión.' }]] },
    { q: { pt: 'Por que a loja não fica visível mesmo aprovada?', es: '¿Por qué la tienda no queda visible aunque esté aprobada?' },
      o: [[{ pt: 'Porque falta o URL de finalização da compra', es: 'Porque falta la URL de finalización de compra' }, 1, { pt: 'Isso! É obrigatório para a loja ficar visível.', es: '¡Eso! Es obligatoria para que la tienda sea visible.' }],
        [{ pt: 'Porque o Instagram está lento', es: 'Porque Instagram está lento' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Porque faltam seguidores', es: 'Porque faltan seguidores' }, 0, { pt: 'Não é isso nessa etapa.', es: 'No es eso en esta etapa.' }]] },
    { q: { pt: 'No perfil de envio, o que é exigido?', es: 'En el perfil de envío, ¿qué se exige?' },
      o: [[{ pt: 'Pelo menos um tipo de prazo de entrega', es: 'Al menos un tipo de plazo de entrega' }, 1, { pt: 'Isso! Padrão 5–8 dias, rápido 3–5, expresso 2–3.', es: '¡Eso! Estándar 5–8 días, rápido 3–5, exprés 2–3.' }],
        [{ pt: 'Nenhum prazo', es: 'Ningún plazo' }, 0, { pt: 'É preciso pelo menos um.', es: 'Se necesita al menos uno.' }],
        [{ pt: 'Fotos de cada pacote', es: 'Fotos de cada paquete' }, 0, { pt: 'Não é pedido.', es: 'No se pide.' }]] }
  ]);
  quizCatalogo('loja-nao-aparece-q', { pt: 'Por que a loja não aparece?', es: '¿Por qué la tienda no aparece?' }, { pt: 'Requisitos, domínio e ordem de conferência.', es: 'Requisitos, dominio y orden de revisión.' }, [
    { q: { pt: 'Quantos são os requisitos de qualificação para comércio?', es: '¿Cuántos son los requisitos de calificación para comercio?' },
      o: [[{ pt: 'Cinco: políticas, empresa e domínio, país compatível, confiabilidade e informações precisas', es: 'Cinco: políticas, empresa y dominio, país compatible, confiabilidad e información precisa' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Nenhum', es: 'Ninguno' }, 0, { pt: 'Há cinco.', es: 'Hay cinco.' }],
        [{ pt: 'Só um: pagar', es: 'Solo uno: pagar' }, 0, { pt: 'Não é por pagamento.', es: 'No es por pago.' }]] },
    { q: { pt: 'Sobre o domínio da loja, o que a Meta pede?', es: 'Sobre el dominio de la tienda, ¿qué pide Meta?' },
      o: [[{ pt: 'Qualquer link encurtado', es: 'Cualquier enlace acortado' }, 0, { pt: 'Encurtadores não são aceitos.', es: 'Los acortadores no se aceptan.' }],
        [{ pt: 'Vários domínios, sem verificação', es: 'Varios dominios, sin verificación' }, 0, { pt: 'É um domínio só.', es: 'Es un solo dominio.' }],
        [{ pt: 'Um único domínio, sem encurtadores; pode pedir verificação de domínio', es: 'Un único dominio, sin acortadores; puede pedir verificación de dominio' }, 1, { pt: 'Isso!', es: '¡Eso!' }]] },
    { q: { pt: 'Qual é a melhor ordem de conferência quando a loja não aparece?', es: '¿Cuál es el mejor orden de revisión cuando la tienda no aparece?' },
      o: [[{ pt: 'Requisitos, análise, perfil de envio, URL de finalização da compra e só então publicar', es: 'Requisitos, revisión, perfil de envío, URL de finalización de compra y solo entonces publicar' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Apagar a loja e criar de novo', es: 'Eliminar la tienda y crearla de nuevo' }, 0, { pt: 'Antes confira os requisitos.', es: 'Antes revisa los requisitos.' }],
        [{ pt: 'Comprar mais anúncios', es: 'Comprar más anuncios' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] }
  ]);
  quizCatalogo('mudancas-checkout-q', { pt: 'Descontinuado ou continua?', es: '¿Discontinuado o continúa?' }, { pt: 'O que mudou com a finalização da compra no site.', es: 'Qué cambió con la finalización de compra en el sitio.' }, [
    { q: { pt: 'Qual destes foi descontinuado nas Lojas?', es: '¿Cuál de estos fue discontinuado en las Tiendas?' },
      o: [[{ pt: 'As coleções da loja', es: 'Las colecciones de la tienda' }, 0, { pt: 'Coleções continuam.', es: 'Las colecciones continúan.' }],
        [{ pt: 'O gerenciamento de pedidos novos no Gerenciador de Comércio', es: 'La gestión de pedidos nuevos en el Administrador de ventas' }, 1, { pt: 'Isso! Agora é no site.', es: '¡Eso! Ahora es en el sitio.' }],
        [{ pt: 'O catálogo de produtos', es: 'El catálogo de productos' }, 0, { pt: 'O catálogo continua.', es: 'El catálogo continúa.' }]] },
    { q: { pt: 'Nos anúncios das Lojas, qual local da conversão usar agora?', es: 'En los anuncios de Tiendas, ¿qué lugar de conversión usar ahora?' },
      o: [[{ pt: 'Site e loja', es: 'Sitio y tienda' }, 0, { pt: 'Esse local foi descontinuado.', es: 'Ese lugar fue discontinuado.' }],
        [{ pt: 'Site, mantendo Lojas ativado em Destinos personalizados', es: 'Sitio, manteniendo Tiendas activado en Destinos personalizados' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Apenas Messenger', es: 'Solo Messenger' }, 0, { pt: 'Não é a orientação.', es: 'No es la orientación.' }]] },
    { q: { pt: 'Depois da mudança, “compras na Meta” aparecem como 0. O que isso significa?', es: 'Después del cambio, “compras en Meta” aparecen como 0. ¿Qué significa?' },
      o: [[{ pt: 'Que as vendas pararam', es: 'Que las ventas se detuvieron' }, 0, { pt: 'Não: as compras agora acontecem no site.', es: 'No: las compras ahora ocurren en el sitio.' }],
        [{ pt: 'Que a métrica não se aplica mais; acompanhe Compras no site', es: 'Que la métrica ya no se aplica; sigue Compras en el sitio' }, 1, { pt: 'Isso! Dados antigos ficam por até 39 meses.', es: '¡Eso! Los datos antiguos se conservan hasta 39 meses.' }],
        [{ pt: 'Que a conta foi bloqueada', es: 'Que la cuenta fue bloqueada' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] }
  ]);

  /* ---------- 23. Shop Ads (anúncios das Lojas): cinco mini-quizzes (Shop Ads 01–05) ---------- */
  quizCatalogo('o-que-e-shopads', { pt: 'O que são anúncios das Lojas?', es: '¿Qué son los anuncios de Tiendas?' }, { pt: 'Loja, destino e disponibilidade.', es: 'Tienda, destino y disponibilidad.' }, [
    { q: { pt: 'Para onde os anúncios das Lojas enviam as pessoas?', es: '¿Adónde envían los anuncios de Tiendas a las personas?' },
      o: [[{ pt: 'Sempre para a loja no Instagram', es: 'Siempre a la tienda en Instagram' }, 0, { pt: 'Não: depende de onde a conversão é mais provável.', es: 'No: depende de dónde la conversión es más probable.' }],
        [{ pt: 'Para o destino com maior chance de conversão: o site ou a loja', es: 'Al destino con más probabilidad de conversión: el sitio o la tienda' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Sempre para o WhatsApp', es: 'Siempre a WhatsApp' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Para criar anúncios das Lojas, é obrigatório ter…', es: 'Para crear anuncios de Tiendas, es obligatorio tener…' },
      o: [[{ pt: 'Uma loja', es: 'Una tienda' }, 1, { pt: 'Isso! Etiquetas de produto, não.', es: '¡Eso! Las etiquetas de producto, no.' }],
        [{ pt: 'Meta Verified', es: 'Meta Verified' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }],
        [{ pt: 'Um app próprio', es: 'Una app propia' }, 0, { pt: 'Não é necessário.', es: 'No es necesaria.' }]] },
    { q: { pt: 'Como a Central de Ajuda classifica o Brasil para as Lojas?', es: '¿Cómo clasifica el Centro de ayuda a Brasil para las Tiendas?' },
      o: [[{ pt: 'Experiência completa, igual aos EUA', es: 'Experiencia completa, igual que EE. UU.' }, 0, { pt: 'Os EUA têm a experiência completa.', es: 'EE. UU. tiene la experiencia completa.' }],
        [{ pt: 'Sem suporte nenhum', es: 'Sin ninguna compatibilidad' }, 0, { pt: 'Está em beta aberto.', es: 'Está en beta abierto.' }],
        [{ pt: 'Beta aberto: alguns vendedores podem não ter recursos completos', es: 'Beta abierto: algunos vendedores pueden no tener funciones completas' }, 1, { pt: 'Isso! Confirme na conta do cliente.', es: '¡Eso! Confirma en la cuenta del cliente.' }]] }
  ]);
  quizCatalogo('antes-shopads', { pt: 'O que preciso antes?', es: '¿Qué necesito antes?' }, { pt: 'Os 5 ativos e as permissões.', es: 'Los 5 activos y los permisos.' }, [
    { q: { pt: 'Qual destes NÃO é um dos 5 ativos exigidos?', es: '¿Cuál de estos NO es uno de los 5 activos exigidos?' },
      o: [[{ pt: 'Um catálogo conectado à loja', es: 'Un catálogo vinculado a la tienda' }, 0, { pt: 'É exigido.', es: 'Es exigido.' }],
        [{ pt: 'Um canal do YouTube', es: 'Un canal de YouTube' }, 1, { pt: 'Isso! Não faz parte da lista.', es: '¡Eso! No es parte de la lista.' }],
        [{ pt: 'Um Pixel da Meta conectado ao catálogo', es: 'Un píxel de Meta vinculado al catálogo' }, 0, { pt: 'É exigido.', es: 'Es exigido.' }]] },
    { q: { pt: 'Quem pode criar o anúncio das Lojas?', es: '¿Quién puede crear el anuncio de Tiendas?' },
      o: [[{ pt: 'Qualquer pessoa, sem permissão', es: 'Cualquier persona, sin permiso' }, 0, { pt: 'São exigidas permissões.', es: 'Se exigen permisos.' }],
        [{ pt: 'Quem tem controle total dos ativos ou a permissão específica de cada um', es: 'Quien tiene control total de los activos o el permiso específico de cada uno' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só a Meta', es: 'Solo Meta' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Qual é um bom primeiro passo quando a loja ou o catálogo parecem errados?', es: '¿Cuál es un buen primer paso cuando la tienda o el catálogo parecen incorrectos?' },
      o: [[{ pt: 'Conferir qual identidade e qual catálogo estão conectados à loja', es: 'Revisar qué identidad y qué catálogo están vinculados a la tienda' }, 1, { pt: 'Isso! A Central de Ajuda tem passos para isso.', es: '¡Eso! El Centro de ayuda tiene pasos para eso.' }],
        [{ pt: 'Criar outra conta de anúncios', es: 'Crear otra cuenta publicitaria' }, 0, { pt: 'Não resolve.', es: 'No resuelve.' }],
        [{ pt: 'Apagar o Pixel', es: 'Eliminar el píxel' }, 0, { pt: 'Isso piora.', es: 'Eso empeora.' }]] }
  ]);
  quizCatalogo('criar-shopads', { pt: 'Criando o anúncio', es: 'Creando el anuncio' }, { pt: 'Vendas, Site, evento e botão Loja.', es: 'Ventas, Sitio web, evento y botón Tienda.' }, [
    { q: { pt: 'Qual objetivo e qual local da conversão usar?', es: '¿Qué objetivo y qué lugar de conversión usar?' },
      o: [[{ pt: 'Tráfego e App', es: 'Tráfico y App' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Vendas e Site', es: 'Ventas y Sitio web' }, 1, { pt: 'Isso! O local “Site e loja” não existe mais.', es: '¡Eso! El lugar “Sitio web y tienda” ya no existe.' }],
        [{ pt: 'Reconhecimento e Messenger', es: 'Reconocimiento y Messenger' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Qual destes eventos de conversão é compatível com as Lojas?', es: '¿Cuál de estos eventos de conversión es compatible con Tiendas?' },
      o: [[{ pt: 'Cadastro concluído', es: 'Registro completado' }, 0, { pt: 'Não é compatível.', es: 'No es compatible.' }],
        [{ pt: 'Adicionar informações de pagamento', es: 'Agregar información de pago' }, 0, { pt: 'Não é compatível.', es: 'No es compatible.' }],
        [{ pt: 'Adicionar ao carrinho', es: 'Agregar al carrito' }, 1, { pt: 'Isso! Também lista de desejos, iniciar finalização, compra e conteúdo visualizado.', es: '¡Eso! También lista de deseos, iniciar compra, compra y contenido visto.' }]] },
    { q: { pt: 'O que transforma o anúncio em um anúncio das Lojas?', es: '¿Qué convierte el anuncio en un anuncio de Tiendas?' },
      o: [[{ pt: 'Ativar o botão Loja em Destinos personalizados e escolher o destino da loja', es: 'Activar el botón Tienda en Destinos personalizados y elegir el destino de la tienda' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Escolher uma imagem bonita', es: 'Elegir una imagen bonita' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }],
        [{ pt: 'Usar um texto longo', es: 'Usar un texto largo' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] }
  ]);
  quizCatalogo('so-site-shopads', { pt: 'Por que só vai ao site?', es: '¿Por qué solo va al sitio?' }, { pt: 'Requisitos de conjunto e de anúncio.', es: 'Requisitos de conjunto y de anuncio.' }, [
    { q: { pt: 'Com catálogo ativado, quais formatos funcionam nos anúncios das Lojas?', es: 'Con catálogo activado, ¿qué formatos funcionan en los anuncios de Tiendas?' },
      o: [[{ pt: 'Só carrossel ou coleção', es: 'Solo secuencia o colección' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só imagem única', es: 'Solo imagen única' }, 0, { pt: 'Com catálogo, não.', es: 'Con catálogo, no.' }],
        [{ pt: 'Qualquer formato', es: 'Cualquier formato' }, 0, { pt: 'Há restrição.', es: 'Hay restricción.' }]] },
    { q: { pt: 'Um posicionamento “somente Messenger” faz o anúncio…', es: 'Una ubicación “solo Messenger” hace que el anuncio…' },
      o: [[{ pt: 'Funcionar normalmente para as Lojas', es: 'Funcione normalmente para Tiendas' }, 0, { pt: 'Não: falta um posicionamento compatível.', es: 'No: falta una ubicación compatible.' }],
        [{ pt: 'Enviar pessoas só ao site, por falta de posicionamento compatível', es: 'Envíe personas solo al sitio, por falta de ubicación compatible' }, 1, { pt: 'Isso! É preciso Feed, Stories ou Reels.', es: '¡Eso! Se necesita Feed, Historias o Reels.' }],
        [{ pt: 'Ser reprovado sempre', es: 'Ser rechazado siempre' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Depois de corrigir a opção errada, o que fazer?', es: 'Después de corregir la opción incorrecta, ¿qué hacer?' },
      o: [[{ pt: 'Apagar tudo e recomeçar', es: 'Borrar todo y empezar de nuevo' }, 0, { pt: 'Não precisa.', es: 'No hace falta.' }],
        [{ pt: 'Esperar um mês', es: 'Esperar un mes' }, 0, { pt: 'Não precisa.', es: 'No hace falta.' }],
        [{ pt: 'Editar o conjunto ou o anúncio e publicar de novo', es: 'Editar el conjunto o el anuncio y publicar de nuevo' }, 1, { pt: 'Isso! Aí ele passa a levar ao site e à loja.', es: '¡Eso! Así pasa a llevar al sitio y a la tienda.' }]] }
  ]);
  quizCatalogo('resultados-shopads', { pt: 'Quais métricas olhar?', es: '¿Qué métricas mirar?' }, { pt: 'Recomendadas, “compras na Meta = 0” e terceiros.', es: 'Recomendadas, “compras en Meta = 0” y terceros.' }, [
    { q: { pt: 'Qual destas é uma métrica recomendada para anúncios das Lojas?', es: '¿Cuál de estas es una métrica recomendada para anuncios de Tiendas?' },
      o: [[{ pt: 'Custo por clique de saída único', es: 'Costo por clic de salida único' }, 0, { pt: 'Não dá o panorama completo.', es: 'No da el panorama completo.' }],
        [{ pt: 'ROAS de compras', es: 'ROAS de compras' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Compras na Meta', es: 'Compras en Meta' }, 0, { pt: 'Não se aplica mais.', es: 'Ya no se aplica.' }]] },
    { q: { pt: '“Compras na Meta” aparece como 0. O que dizer ao cliente?', es: '“Compras en Meta” aparece como 0. ¿Qué decirle al cliente?' },
      o: [[{ pt: 'Que as vendas pararam', es: 'Que las ventas se detuvieron' }, 0, { pt: 'Não: a métrica não se aplica mais.', es: 'No: la métrica ya no se aplica.' }],
        [{ pt: 'Que não é erro: as compras agora acontecem no site, e a métrica não se aplica mais', es: 'Que no es un error: las compras ahora ocurren en el sitio, y la métrica ya no se aplica' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Que a conta foi bloqueada', es: 'Que la cuenta fue bloqueada' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] },
    { q: { pt: 'O Google Analytics mostra um número de compras diferente do Gerenciador de Anúncios. Por quê?', es: 'Google Analytics muestra un número de compras distinto al del Administrador de anuncios. ¿Por qué?' },
      o: [[{ pt: 'Porque ferramentas de terceiros costumam medir só o site e não veem as conversões da loja', es: 'Porque las herramientas de terceros suelen medir solo el sitio y no ven las conversiones de la tienda' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Porque um dos dois está sempre quebrado', es: 'Porque uno de los dos siempre está roto' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Porque o cliente digitou errado', es: 'Porque el cliente escribió mal' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] }
  ]);

  /* ---------- 24. Shop Ads com compra no site: cinco mini-quizzes (Offsite 01–05) ---------- */
  quizCatalogo('jornada-offsite', { pt: 'Onde acontece cada coisa?', es: '¿Dónde ocurre cada cosa?' }, { pt: 'Jornada do anúncio das Lojas à compra no site.', es: 'Recorrido del anuncio de Tiendas a la compra en el sitio.' }, [
    { q: { pt: 'Onde termina a compra de um anúncio das Lojas?', es: '¿Dónde termina la compra de un anuncio de Tiendas?' },
      o: [[{ pt: 'No site (URL de finalização da compra)', es: 'En el sitio (URL de finalización de compra)' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Dentro do Instagram', es: 'Dentro de Instagram' }, 0, { pt: 'Isso foi descontinuado.', es: 'Eso fue discontinuado.' }],
        [{ pt: 'No Gerenciador de Comércio', es: 'En el Administrador de ventas' }, 0, { pt: 'O Gerenciador não processa compras.', es: 'El Administrador no procesa compras.' }]] },
    { q: { pt: 'Qual evento do Pixel marca a compra concluída?', es: '¿Qué evento del píxel marca la compra completada?' },
      o: [[{ pt: 'ViewContent', es: 'ViewContent' }, 0, { pt: 'É a visualização do produto.', es: 'Es la vista del producto.' }],
        [{ pt: 'AddToCart', es: 'AddToCart' }, 0, { pt: 'É adicionar ao carrinho.', es: 'Es agregar al carrito.' }],
        [{ pt: 'Purchase', es: 'Purchase' }, 1, { pt: 'Isso!', es: '¡Eso!' }]] },
    { q: { pt: 'Quem trata pagamento, pedido, envio e devolução?', es: '¿Quién gestiona pago, pedido, envío y devolución?' },
      o: [[{ pt: 'O site, ou a plataforma de e-commerce conectada', es: 'El sitio, o la plataforma de comercio electrónico conectada' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'A Meta, no Gerenciador de Comércio', es: 'Meta, en el Administrador de ventas' }, 0, { pt: 'Foi descontinuado.', es: 'Fue discontinuado.' }],
        [{ pt: 'Ninguém', es: 'Nadie' }, 0, { pt: 'O site cuida.', es: 'El sitio se encarga.' }]] }
  ]);
  quizCatalogo('pixel-offsite', { pt: 'Pixel e catálogo', es: 'Píxel y catálogo' }, { pt: 'As 4 dicas oficiais.', es: 'Los 4 consejos oficiales.' }, [
    { q: { pt: 'Para medir os anúncios das Lojas, o Pixel do site precisa estar…', es: 'Para medir los anuncios de Tiendas, el píxel del sitio debe estar…' },
      o: [[{ pt: 'Conectado ao catálogo usado na loja', es: 'Vinculado al catálogo usado en la tienda' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Desligado', es: 'Apagado' }, 0, { pt: 'Precisa funcionar.', es: 'Debe funcionar.' }],
        [{ pt: 'Só no app', es: 'Solo en la app' }, 0, { pt: 'É o Pixel do site.', es: 'Es el píxel del sitio.' }]] },
    { q: { pt: 'Qual parâmetro deve ser igual no catálogo e no Pixel?', es: '¿Qué parámetro debe ser igual en el catálogo y en el píxel?' },
      o: [[{ pt: 'O preço', es: 'El precio' }, 0, { pt: 'O que liga item e evento é o Content ID.', es: 'Lo que vincula artículo y evento es el Content ID.' }],
        [{ pt: 'O Content ID de cada item', es: 'El Content ID de cada artículo' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'A cor da foto', es: 'El color de la foto' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] },
    { q: { pt: 'Qual destes eventos NÃO é aceito pelos anúncios das Lojas?', es: '¿Cuál de estos eventos NO es aceptado por los anuncios de Tiendas?' },
      o: [[{ pt: 'Adicionar ao carrinho', es: 'Agregar al carrito' }, 0, { pt: 'É aceito.', es: 'Es aceptado.' }],
        [{ pt: 'Comprar', es: 'Comprar' }, 0, { pt: 'É aceito.', es: 'Es aceptado.' }],
        [{ pt: 'Cadastro concluído', es: 'Registro completado' }, 1, { pt: 'Isso! Só 5 eventos são aceitos.', es: '¡Eso! Solo 5 eventos son aceptados.' }]] }
  ]);
  quizCatalogo('duplicacao-offsite', { pt: 'Evento duplicado', es: 'Evento duplicado' }, { pt: 'Como achar e corrigir.', es: 'Cómo encontrar y corregir.' }, [
    { q: { pt: 'Como o Gerenciador de Eventos indica que um evento foi duplicado?', es: '¿Cómo indica el Administrador de eventos que un evento fue duplicado?' },
      o: [[{ pt: 'Dois eventos no mesmo horário e com o mesmo URL', es: 'Dos eventos en el mismo horario y con la misma URL' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Uma cor vermelha na tela', es: 'Un color rojo en la pantalla' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'O Pixel desliga sozinho', es: 'El píxel se apaga solo' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Qual é uma causa comum de duplicação?', es: '¿Cuál es una causa común de duplicación?' },
      o: [[{ pt: 'Pixel enviado pelo canal do Facebook e Instagram na Shopify e também pelo Gerenciador de tags do Google', es: 'Píxel enviado por el canal de Facebook e Instagram en Shopify y también por el Administrador de etiquetas de Google' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Ter poucas fotos no catálogo', es: 'Tener pocas fotos en el catálogo' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }],
        [{ pt: 'Usar o Instagram', es: 'Usar Instagram' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] },
    { q: { pt: 'Ao corrigir no Gerenciador de tags do Google, o que remover?', es: 'Al corregir en el Administrador de etiquetas de Google, ¿qué quitar?' },
      o: [[{ pt: 'Todas as tags, inclusive pesquisa e registro', es: 'Todas las etiquetas, incluidas búsqueda y registro' }, 0, { pt: 'Remova só os eventos duplicados.', es: 'Quita solo los eventos duplicados.' }],
        [{ pt: 'Só os eventos duplicados (ver conteúdo, carrinho, finalização, compra), mantendo os outros', es: 'Solo los eventos duplicados (ver contenido, carrito, finalización, compra), manteniendo los demás' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Nada', es: 'Nada' }, 0, { pt: 'É preciso remover o repetido.', es: 'Hay que quitar el repetido.' }]] }
  ]);
  quizCatalogo('terceiros-offsite', { pt: 'Meta × terceiros', es: 'Meta × terceros' }, { pt: 'UTM, tags e por que os números diferem.', es: 'UTM, etiquetas y por qué los números difieren.' }, [
    { q: { pt: 'Por que o Google Analytics pode mostrar menos compras que o Gerenciador de Anúncios?', es: '¿Por qué Google Analytics puede mostrar menos compras que el Administrador de anuncios?' },
      o: [[{ pt: 'Porque ele pode não conectar a jornada de quem passou pela loja e depois foi ao site', es: 'Porque puede no unir el recorrido de quien pasó por la tienda y luego fue al sitio' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Porque está quebrado', es: 'Porque está roto' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Porque a Meta mente', es: 'Porque Meta miente' }, 0, { pt: 'Não há sinal disso.', es: 'No hay señal de eso.' }]] },
    { q: { pt: 'Qual é o valor padrão de utm_medium que a Meta define?', es: '¿Cuál es el valor predeterminado de utm_medium que define Meta?' },
      o: [[{ pt: 'pago', es: 'pago' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'organico', es: 'organico' }, 0, { pt: 'O padrão é pago.', es: 'El predeterminado es pago.' }],
        [{ pt: 'email', es: 'email' }, 0, { pt: 'O padrão é pago.', es: 'El predeterminado es pago.' }]] },
    { q: { pt: 'Como comparar de verdade anúncios das Lojas com campanhas só de site?', es: '¿Cómo comparar de verdad anuncios de Tiendas con campañas solo de sitio?' },
      o: [[{ pt: 'Pelo achismo', es: 'Por intuición' }, 0, { pt: 'Use um teste.', es: 'Usa una prueba.' }],
        [{ pt: 'Com um teste A/B', es: 'Con una prueba A/B' }, 1, { pt: 'Isso! Se a loja usa finalização no site, A/B.', es: '¡Eso! Si la tienda usa finalización en el sitio, A/B.' }],
        [{ pt: 'Olhando só o Analytics', es: 'Mirando solo Analytics' }, 0, { pt: 'Ele não vê tudo.', es: 'No ve todo.' }]] }
  ]);
  quizCatalogo('antiga-offsite', { pt: 'Loja antiga', es: 'Tienda antigua' }, { pt: 'O que fazer ao atualizar.', es: 'Qué hacer al actualizar.' }, [
    { q: { pt: 'Uma loja antiga ainda não foi atualizada. O que a Meta recomenda?', es: 'Una tienda antigua todavía no fue actualizada. ¿Qué recomienda Meta?' },
      o: [[{ pt: 'Atualizar a loja existente, mantendo-a visível', es: 'Actualizar la tienda existente, manteniéndola visible' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Criar uma loja nova do zero', es: 'Crear una tienda nueva desde cero' }, 0, { pt: 'A recomendação é atualizar a existente.', es: 'La recomendación es actualizar la existente.' }],
        [{ pt: 'Apagar a loja', es: 'Eliminar la tienda' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'O que acontece com as campanhas ativas?', es: '¿Qué pasa con las campañas activas?' },
      o: [[{ pt: 'Param para sempre', es: 'Paran para siempre' }, 0, { pt: 'Elas continuam.', es: 'Continúan.' }],
        [{ pt: 'Continuam, com a finalização da compra no site', es: 'Continúan, con la finalización de compra en el sitio' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'São apagadas', es: 'Se borran' }, 0, { pt: 'Não são.', es: 'No se borran.' }]] },
    { q: { pt: 'Qual destes é um item da lista de atualização?', es: '¿Cuál de estos es un ítem de la lista de actualización?' },
      o: [[{ pt: 'Criar e adicionar um URL de finalização da compra', es: 'Crear y agregar una URL de finalización de compra' }, 1, { pt: 'Isso! Também perfis de envio, catálogo e variantes.', es: '¡Eso! También perfiles de envío, catálogo y variantes.' }],
        [{ pt: 'Trocar o logotipo', es: 'Cambiar el logotipo' }, 0, { pt: 'Não faz parte.', es: 'No forma parte.' }],
        [{ pt: 'Comprar anúncios', es: 'Comprar anuncios' }, 0, { pt: 'Não faz parte.', es: 'No forma parte.' }]] }
  ]);

  /* ---------- 25. MBE e integrações de parceiros: seis mini-quizzes (MBE 01–06) ---------- */
  quizCatalogo('o-que-e-mbe', { pt: 'Integração de parceiro e MBE', es: 'Integración de socio y MBE' }, { pt: 'O que são e o que conectam.', es: 'Qué son y qué conectan.' }, [
    { q: { pt: 'O que a integração de parceiros permite?', es: '¿Qué permite la integración de socios?' },
      o: [[{ pt: 'Capturar eventos do site sem editar o código, com Pixel e API de Conversões', es: 'Capturar eventos del sitio sin editar el código, con píxel y API de Conversiones' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Criar anúncios automaticamente', es: 'Crear anuncios automáticamente' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Pagar a conta de anúncios', es: 'Pagar la cuenta publicitaria' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'O que o lojista escolhe ou cria na janela do MBE?', es: '¿Qué elige o crea el comerciante en la ventana del MBE?' },
      o: [[{ pt: 'Portfólio, Página, Pixel e conta de anúncios', es: 'Portfolio, página, píxel y cuenta publicitaria' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só o catálogo', es: 'Solo el catálogo' }, 0, { pt: 'O fluxo não inclui o catálogo.', es: 'El flujo no incluye el catálogo.' }],
        [{ pt: 'O orçamento do anúncio', es: 'El presupuesto del anuncio' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'A plataforma do cliente não está na lista de parceiros. E agora?', es: 'La plataforma del cliente no está en la lista de socios. ¿Y ahora?' },
      o: [[{ pt: 'Não dá para usar a Meta', es: 'No se puede usar Meta' }, 0, { pt: 'Há alternativa manual.', es: 'Hay alternativa manual.' }],
        [{ pt: 'Configurar a API de Conversões manualmente ou falar com o provedor de serviços', es: 'Configurar la API de Conversiones manualmente o hablar con el proveedor de servicios' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Trocar de plataforma', es: 'Cambiar de plataforma' }, 0, { pt: 'Exagero.', es: 'Exagerado.' }]] }
  ]);
  quizCatalogo('galeria-mbe', { pt: 'Na Galeria de parceiros', es: 'En la Galería de socios' }, { pt: 'Onde olhar e como filtrar.', es: 'Dónde mirar y cómo filtrar.' }, [
    { q: { pt: 'Onde ficam as integrações de parceiros?', es: '¿Dónde están las integraciones de socios?' },
      o: [[{ pt: 'No Gerenciador de Eventos, em Integrações', es: 'En el Administrador de eventos, en Integraciones' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'No Gerenciador de Comércio', es: 'En el Administrador de ventas' }, 0, { pt: 'É no Gerenciador de Eventos.', es: 'Es en el Administrador de eventos.' }],
        [{ pt: 'No Instagram', es: 'En Instagram' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }]] },
    { q: { pt: 'O que indica a etiqueta “Eventos da web” em um parceiro?', es: '¿Qué indica la etiqueta “Eventos web” en un socio?' },
      o: [[{ pt: 'O tipo de evento que ele envia à Meta', es: 'El tipo de evento que envía a Meta' }, 1, { pt: 'Isso! Há também eventos do app, offline e de CRM.', es: '¡Eso! También hay eventos de la app, offline y de CRM.' }],
        [{ pt: 'O preço do parceiro', es: 'El precio del socio' }, 0, { pt: 'Não é preço.', es: 'No es precio.' }],
        [{ pt: 'O país do parceiro', es: 'El país del socio' }, 0, { pt: 'Não é país.', es: 'No es país.' }]] },
    { q: { pt: 'Para achar uma plataforma de loja virtual, qual categoria filtrar?', es: 'Para encontrar una plataforma de tienda virtual, ¿qué categoría filtrar?' },
      o: [[{ pt: 'Plataformas móveis', es: 'Plataformas para celulares' }, 0, { pt: 'Essa é de apps.', es: 'Esa es de apps.' }],
        [{ pt: 'Comércio eletrônico', es: 'Comercio electrónico' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Inteligência de ligação', es: 'Análisis de llamadas' }, 0, { pt: 'Essa é de ligações.', es: 'Esa es de llamadas.' }]] }
  ]);
  quizCatalogo('conectar-mbe', { pt: 'Conectar pela plataforma', es: 'Conectar desde la plataforma' }, { pt: 'O que a janela faz e o que não faz.', es: 'Qué hace la ventana y qué no.' }, [
    { q: { pt: 'O fluxo do MBE para Pixel e API de Conversões conecta o catálogo?', es: '¿El flujo del MBE para píxel y API de Conversiones conecta el catálogo?' },
      o: [[{ pt: 'Sim, sempre', es: 'Sí, siempre' }, 0, { pt: 'Não inclui catálogo.', es: 'No incluye catálogo.' }],
        [{ pt: 'Não: o catálogo se conecta por outro caminho', es: 'No: el catálogo se conecta por otro camino' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só se pagar', es: 'Solo si se paga' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] },
    { q: { pt: 'O site já tem um Pixel instalado à mão e o lojista cria outro pela extensão. Risco?', es: 'El sitio ya tiene un píxel instalado a mano y el comerciante crea otro por la extensión. ¿Riesgo?' },
      o: [[{ pt: 'Eventos duplicados', es: 'Eventos duplicados' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Nenhum', es: 'Ninguno' }, 0, { pt: 'Há risco de duplicação.', es: 'Hay riesgo de duplicación.' }],
        [{ pt: 'Perder a Página', es: 'Perder la página' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] },
    { q: { pt: 'Depois de concluir, a plataforma parceira…', es: 'Después de finalizar, la plataforma socia…' },
      o: [[{ pt: 'Passa a enviar eventos da web em nome do lojista, pelo navegador e pelo servidor', es: 'Pasa a enviar eventos web en nombre del comerciante, por el navegador y por el servidor' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Cria anúncios sozinha', es: 'Crea anuncios sola' }, 0, { pt: 'Não cria.', es: 'No crea.' }],
        [{ pt: 'Apaga os dados antigos', es: 'Borra los datos antiguos' }, 0, { pt: 'Não apaga.', es: 'No borra.' }]] }
  ]);
  quizCatalogo('capi-mbe', { pt: 'Qual opção da API de Conversões?', es: '¿Qué opción de la API de Conversiones?' }, { pt: 'Habilitada pela Meta, direta ou parceiro.', es: 'Habilitada por Meta, directa o socio.' }, [
    { q: { pt: 'Qual opção é grátis, de um clique e só para web?', es: '¿Qué opción es gratis, de un clic y solo para web?' },
      o: [[{ pt: 'API de Conversões habilitada pela Meta', es: 'API de Conversiones habilitada por Meta' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Integração direta', es: 'Integración directa' }, 0, { pt: 'Exige desenvolvedor.', es: 'Exige desarrollador.' }],
        [{ pt: 'Parceiro de CRM', es: 'Socio de CRM' }, 0, { pt: 'Depende do parceiro.', es: 'Depende del socio.' }]] },
    { q: { pt: 'Para eventos de app e de loja física, qual é a única opção hoje?', es: 'Para eventos de app y de tienda física, ¿cuál es la única opción hoy?' },
      o: [[{ pt: 'Integração direta', es: 'Integración directa' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Habilitada pela Meta', es: 'Habilitada por Meta' }, 0, { pt: 'Essa é só web.', es: 'Esa es solo web.' }],
        [{ pt: 'Nenhuma', es: 'Ninguna' }, 0, { pt: 'Há a integração direta.', es: 'Hay la integración directa.' }]] },
    { q: { pt: 'A loja é na Shopify. O que a Central de Ajuda diz sobre configurar a API de Conversões?', es: 'La tienda es en Shopify. ¿Qué dice el Centro de ayuda sobre configurar la API de Conversiones?' },
      o: [[{ pt: 'Dá para configurar com poucos cliques, sem custo adicional', es: 'Se puede configurar con pocos clics, sin costo adicional' }, 1, { pt: 'Isso! Vale também para WooCommerce, Wix e BigCommerce.', es: '¡Eso! Vale también para WooCommerce, Wix y BigCommerce.' }],
        [{ pt: 'Exige 4 semanas de programação', es: 'Exige 4 semanas de programación' }, 0, { pt: 'Isso é da integração direta.', es: 'Eso es de la integración directa.' }],
        [{ pt: 'Não é possível', es: 'No es posible' }, 0, { pt: 'É possível.', es: 'Es posible.' }]] }
  ]);
  quizCatalogo('problemas-mbe', { pt: 'Primeiro passo de conferência', es: 'Primer paso de revisión' }, { pt: 'Sintomas comuns.', es: 'Síntomas comunes.' }, [
    { q: { pt: 'Conectou, mas não chegam eventos. O que conferir primeiro?', es: 'Conectó, pero no llegan eventos. ¿Qué revisar primero?' },
      o: [[{ pt: 'Se o Pixel certo recebe atividade (Eventos de teste), se o plugin está atualizado e se o parceiro é o certo', es: 'Si el píxel correcto recibe actividad (Probar eventos), si el plugin está actualizado y si el socio es el correcto' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Trocar a conta de anúncios', es: 'Cambiar la cuenta publicitaria' }, 0, { pt: 'Não é o primeiro passo.', es: 'No es el primer paso.' }],
        [{ pt: 'Apagar o site', es: 'Borrar el sitio' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Eventos de compra aparecem em dobro. Provável causa?', es: 'Los eventos de compra aparecen duplicados. ¿Causa probable?' },
      o: [[{ pt: 'O mesmo evento chega por mais de um caminho (extensão e Pixel manual, por exemplo)', es: 'El mismo evento llega por más de un camino (extensión y píxel manual, por ejemplo)' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O cliente comprou duas vezes', es: 'El cliente compró dos veces' }, 0, { pt: 'Verifique antes se é duplicação.', es: 'Verifica antes si es duplicación.' }],
        [{ pt: 'A Meta cobra em dobro', es: 'Meta cobra el doble' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] },
    { q: { pt: 'Qual destas é uma boa prática para integrações de parceiros?', es: '¿Cuál de estas es una buena práctica para integraciones de socios?' },
      o: [[{ pt: 'Atualizar os plugins e extensões e monitorar os eventos no Gerenciador de Eventos', es: 'Actualizar los plugins y extensiones y monitorear los eventos en el Administrador de eventos' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Nunca atualizar', es: 'Nunca actualizar' }, 0, { pt: 'Atualize.', es: 'Actualiza.' }],
        [{ pt: 'Trocar de parceiro todo mês', es: 'Cambiar de socio todos los meses' }, 0, { pt: 'Não é recomendado.', es: 'No se recomienda.' }]] }
  ]);
  quizCatalogo('acesso-mbe', { pt: 'Dar acesso a um parceiro', es: 'Dar acceso a un socio' }, { pt: 'Quem pode, onde e que nível.', es: 'Quién puede, dónde y qué nivel.' }, [
    { q: { pt: 'Quem pode compartilhar ativos com parceiros?', es: '¿Quién puede compartir activos con socios?' },
      o: [[{ pt: 'Quem tem controle total do portfólio empresarial', es: 'Quien tiene control total del portfolio comercial' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Qualquer pessoa do portfólio', es: 'Cualquier persona del portfolio' }, 0, { pt: 'Só quem tem controle total.', es: 'Solo quien tiene control total.' }],
        [{ pt: 'Só o parceiro', es: 'Solo el socio' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'O que o parceiro precisa informar para receber os ativos?', es: '¿Qué necesita informar el socio para recibir los activos?' },
      o: [[{ pt: 'A senha do portfólio', es: 'La contraseña del portfolio' }, 0, { pt: 'Nunca senha.', es: 'Nunca la contraseña.' }],
        [{ pt: 'A identificação do portfólio empresarial dele', es: 'La identificación de su portfolio comercial' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O número do cartão', es: 'El número de la tarjeta' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Qual a diferença entre controle total e acesso parcial?', es: '¿Cuál es la diferencia entre control total y acceso parcial?' },
      o: [[{ pt: 'Controle total gerencia tudo, mas não compartilha o ativo com outra empresa; acesso parcial dá permissões para tarefas específicas', es: 'El control total administra todo, pero no comparte el activo con otra empresa; el acceso parcial da permisos para tareas específicas' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Não há diferença', es: 'No hay diferencia' }, 0, { pt: 'Há.', es: 'Hay.' }],
        [{ pt: 'Acesso parcial é mais caro', es: 'El acceso parcial es más caro' }, 0, { pt: 'Não tem preço.', es: 'No tiene precio.' }]] }
  ]);

  /* ---------- 26. Integração com plataformas de terceiros: cinco mini-quizzes (Integrações 01–05) ---------- */
  quizCatalogo('visao-integ', { pt: 'Integrações de terceiros: visão geral', es: 'Integraciones de terceros: visión general' }, { pt: 'O que entregam e o que fazer fora da lista.', es: 'Qué entregan y qué hacer fuera de la lista.' }, [
    { q: { pt: 'O que as integrações de parceiros entregam para o site?', es: '¿Qué entregan las integraciones de socios para el sitio?' },
      o: [[{ pt: 'Eventos do site capturados sem editar código, com Pixel e API de Conversões', es: 'Eventos del sitio capturados sin editar código, con píxel y API de Conversiones' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Um novo site pronto', es: 'Un nuevo sitio listo' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Criação automática de anúncios', es: 'Creación automática de anuncios' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Onde ver os parceiros disponíveis?', es: '¿Dónde ver los socios disponibles?' },
      o: [[{ pt: 'No Gerenciador de Eventos, em Integrações › Galeria de parceiros', es: 'En el Administrador de eventos, en Integraciones › Galería de socios' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Na página inicial do Instagram', es: 'En la página de inicio de Instagram' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }],
        [{ pt: 'No Gerenciador de Anúncios, em Públicos', es: 'En el Administrador de anuncios, en Públicos' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }]] },
    { q: { pt: 'A plataforma do cliente não está na lista. O que fazer?', es: 'La plataforma del cliente no está en la lista. ¿Qué hacer?' },
      o: [[{ pt: 'Configurar a API de Conversões manualmente ou falar com o provedor de serviços', es: 'Configurar la API de Conversiones manualmente o hablar con el proveedor de servicios' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Desistir da Meta', es: 'Desistir de Meta' }, 0, { pt: 'Há alternativa.', es: 'Hay alternativa.' }],
        [{ pt: 'Esperar a plataforma entrar', es: 'Esperar a que la plataforma entre' }, 0, { pt: 'Há alternativa agora.', es: 'Hay alternativa ahora.' }]] }
  ]);
  quizCatalogo('woo-integ', { pt: 'Conectar o WooCommerce', es: 'Conectar WooCommerce' }, { pt: 'Pré-requisitos e passos.', es: 'Requisitos previos y pasos.' }, [
    { q: { pt: 'Qual destes é um pré-requisito para conectar o WooCommerce à Meta?', es: '¿Cuál de estos es un requisito previo para conectar WooCommerce a Meta?' },
      o: [[{ pt: 'Autenticação de dois fatores habilitada para o portfólio empresarial', es: 'Autenticación de dos factores habilitada para el portfolio comercial' }, 1, { pt: 'Isso! Também: administrador do WordPress, WooCommerce instalado e controle total (ou permissão).', es: '¡Eso! También: administrador de WordPress, WooCommerce instalado y control total (o permiso).' }],
        [{ pt: 'Ter 10 mil seguidores', es: 'Tener 10 mil seguidores' }, 0, { pt: 'Não é exigido.', es: 'No se exige.' }],
        [{ pt: 'Pagar uma taxa à Meta', es: 'Pagar una tasa a Meta' }, 0, { pt: 'Não é exigido.', es: 'No se exige.' }]] },
    { q: { pt: 'Onde se inicia a conexão no painel do WordPress?', es: '¿Dónde se inicia la conexión en el panel de WordPress?' },
      o: [[{ pt: 'Marketing › Facebook › Começar', es: 'Marketing › Facebook › Empezar' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Configurações › Geral', es: 'Ajustes › General' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }],
        [{ pt: 'Aparência › Temas', es: 'Apariencia › Temas' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }]] },
    { q: { pt: 'Depois de conectar, quanto pode levar para a loja ser publicada sozinha?', es: 'Después de conectar, ¿cuánto puede tardar la tienda en publicarse sola?' },
      o: [[{ pt: 'De 10 a 30 minutos', es: 'De 10 a 30 minutos' }, 1, { pt: 'Isso! Volte depois para conferir.', es: '¡Eso! Vuelve después para revisar.' }],
        [{ pt: 'Um ano', es: 'Un año' }, 0, { pt: 'Muito mais rápido.', es: 'Mucho más rápido.' }],
        [{ pt: 'Nunca é publicada', es: 'Nunca se publica' }, 0, { pt: 'Se tudo certo, é publicada.', es: 'Si todo está bien, se publica.' }]] }
  ]);
  quizCatalogo('diag-integ', { pt: 'O que diz o Diagnóstico?', es: '¿Qué dice el Diagnóstico?' }, { pt: 'Causas e correções das mensagens.', es: 'Causas y correcciones de los mensajes.' }, [
    { q: { pt: '“Eventos de compra redundantes” aparece quando…', es: '“Eventos de compra redundantes” aparece cuando…' },
      o: [[{ pt: 'O Pixel recebe quatro ou mais eventos de compra para uma única compra', es: 'El píxel recibe cuatro o más eventos de compra para una sola compra' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O cliente não compra nada', es: 'El cliente no compra nada' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'O catálogo está vazio', es: 'El catálogo está vacío' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Qual escrita é a correta do evento de compra?', es: '¿Cuál es la escritura correcta del evento de compra?' },
      o: [[{ pt: 'compra (minúscula)', es: 'compra (minúscula)' }, 0, { pt: 'Os nomes diferenciam maiúsculas.', es: 'Los nombres distinguen mayúsculas.' }],
        [{ pt: 'Compra (com a inicial maiúscula)', es: 'Compra (con inicial mayúscula)' }, 1, { pt: 'Isso! Como o evento padrão.', es: '¡Eso! Como el evento estándar.' }],
        [{ pt: 'COMPRAR!!!', es: '¡COMPRAR!' }, 0, { pt: 'Não é o padrão.', es: 'No es el estándar.' }]] },
    { q: { pt: 'Como deve ser o parâmetro de valor de um evento?', es: '¿Cómo debe ser el parámetro de valor de un evento?' },
      o: [[{ pt: 'Um número decimal maior ou igual a zero, sem letras, símbolos de moeda ou vírgulas', es: 'Un número decimal mayor o igual a cero, sin letras, símbolos de moneda ni comas' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O texto “R$ 49,90”', es: 'El texto “R$ 49,90”' }, 0, { pt: 'Isso não é aceito.', es: 'Eso no se acepta.' }],
        [{ pt: 'Qualquer palavra', es: 'Cualquier palabra' }, 0, { pt: 'Precisa ser número.', es: 'Debe ser número.' }]] }
  ]);
  quizCatalogo('pixelfonte-integ', { pt: 'Pixel alimentando o catálogo', es: 'Píxel alimentando el catálogo' }, { pt: 'Condições e prazos.', es: 'Condiciones y plazos.' }, [
    { q: { pt: 'Qual condição é exigida para o Pixel atualizar itens do catálogo?', es: '¿Qué condición se exige para que el píxel actualice artículos del catálogo?' },
      o: [[{ pt: 'Tags de microdados nas páginas de produto', es: 'Etiquetas de microdatos en las páginas de producto' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Um vídeo no site', es: 'Un video en el sitio' }, 0, { pt: 'Não é exigido.', es: 'No se exige.' }],
        [{ pt: 'Ter anúncios ativos', es: 'Tener anuncios activos' }, 0, { pt: 'Não é exigido.', es: 'No se exige.' }]] },
    { q: { pt: 'O Pixel precisa ter disparado em qual período?', es: '¿En qué período debe haberse activado el píxel?' },
      o: [[{ pt: 'Nos últimos sete dias', es: 'En los últimos siete días' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Nos últimos 5 anos', es: 'En los últimos 5 años' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Hoje, às 3 da manhã', es: 'Hoy, a las 3 de la mañana' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Depois de adicionar o Pixel como fonte, quanto pode levar para ficar pronto?', es: 'Después de agregar el píxel como fuente, ¿cuánto puede tardar en estar listo?' },
      o: [[{ pt: 'Até 24 horas', es: 'Hasta 24 horas' }, 1, { pt: 'Isso! Depois, atualiza em geral em até 15 minutos.', es: '¡Eso! Después, actualiza por lo general en hasta 15 minutos.' }],
        [{ pt: 'Um mês', es: 'Un mes' }, 0, { pt: 'É até 24 horas.', es: 'Es hasta 24 horas.' }],
        [{ pt: 'Fica pronto na hora, sempre', es: 'Queda listo al instante, siempre' }, 0, { pt: 'Pode levar até 24 horas.', es: 'Puede tardar hasta 24 horas.' }]] }
  ]);
  quizCatalogo('manter-integ', { pt: 'Manter e desconectar', es: 'Mantener y desconectar' }, { pt: 'Atualizações e efeito nos produtos.', es: 'Actualizaciones y efecto en los productos.' }, [
    { q: { pt: 'Qual é uma boa prática com plugins de integração?', es: '¿Cuál es una buena práctica con plugins de integración?' },
      o: [[{ pt: 'Atualizar regularmente, ou habilitar as atualizações automáticas', es: 'Actualizar regularmente, o habilitar las actualizaciones automáticas' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Nunca atualizar', es: 'Nunca actualizar' }, 0, { pt: 'Atualize.', es: 'Actualiza.' }],
        [{ pt: 'Trocar de plugin todo mês', es: 'Cambiar de plugin todos los meses' }, 0, { pt: 'Não é recomendado.', es: 'No se recomienda.' }]] },
    { q: { pt: 'Ao desconectar o plugin, o que acontece com os produtos já sincronizados?', es: 'Al desconectar el plugin, ¿qué pasa con los productos ya sincronizados?' },
      o: [[{ pt: 'Permanecem no Gerenciador de Comércio, a menos que a sincronização seja cancelada antes ou eles sejam excluídos à mão', es: 'Permanecen en el Administrador de ventas, a menos que la sincronización se cancele antes o se eliminen a mano' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'São apagados na hora', es: 'Se borran al instante' }, 0, { pt: 'Não são.', es: 'No se borran.' }],
        [{ pt: 'Vão para a loja do Instagram', es: 'Van a la tienda de Instagram' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Onde se desconecta o WooCommerce da Meta?', es: '¿Dónde se desconecta WooCommerce de Meta?' },
      o: [[{ pt: 'Marketing › Facebook › aba Lojas › Configurações › Excluir conexão', es: 'Marketing › Facebook › pestaña Tiendas › Configuración › Eliminar conexión' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'No Gerenciador de Anúncios', es: 'En el Administrador de anuncios' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }],
        [{ pt: 'Apagando o site', es: 'Borrando el sitio' }, 0, { pt: 'Não é preciso.', es: 'No hace falta.' }]] }
  ]);

  /* ---------- 27. Shopify e Meta: cinco mini-quizzes (Shopify 01–05) ---------- */
  quizCatalogo('visao-shopify', { pt: 'Shopify e Meta', es: 'Shopify y Meta' }, { pt: 'O que a conexão entrega.', es: 'Qué entrega la conexión.' }, [
    { q: { pt: 'O que a conexão Shopify e Meta permite?', es: '¿Qué permite la conexión Shopify y Meta?' },
      o: [[{ pt: 'Sincronizar produtos, criar campanhas, vender no Facebook e Instagram e habilitar Pixel e API de Conversões', es: 'Sincronizar productos, crear campañas, vender en Facebook e Instagram y habilitar píxel y API de Conversiones' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só criar um logotipo', es: 'Solo crear un logotipo' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Trocar de plataforma automaticamente', es: 'Cambiar de plataforma automáticamente' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Onde acontecem os pedidos de uma loja Shopify conectada?', es: '¿Dónde ocurren los pedidos de una tienda Shopify conectada?' },
      o: [[{ pt: 'Na loja da Shopify', es: 'En la tienda de Shopify' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'No Gerenciador de Comércio', es: 'En el Administrador de ventas' }, 0, { pt: 'Foi descontinuado para pedidos novos.', es: 'Fue discontinuado para pedidos nuevos.' }],
        [{ pt: 'No Instagram', es: 'En Instagram' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }]] },
    { q: { pt: 'A Meta cobra tarifa adicional pelas vendas da loja Shopify conectada?', es: '¿Meta cobra una tarifa adicional por las ventas de la tienda Shopify conectada?' },
      o: [[{ pt: 'Sim, 5% por venda', es: 'Sí, 5% por venta' }, 0, { pt: 'Não há essa tarifa.', es: 'No hay esa tarifa.' }],
        [{ pt: 'Não: com o Shopify Payments, quem cobra as taxas é a Shopify', es: 'No: con Shopify Payments, quien cobra las tarifas es Shopify' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só em dezembro', es: 'Solo en diciembre' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] }
  ]);
  quizCatalogo('conectar-shop', { pt: 'Conectar a Shopify', es: 'Conectar Shopify' }, { pt: 'Pré-requisitos e ajustes.', es: 'Requisitos previos y ajustes.' }, [
    { q: { pt: 'Qual destes é um pré-requisito para conectar a Shopify?', es: '¿Cuál de estos es un requisito previo para conectar Shopify?' },
      o: [[{ pt: 'Uma loja que não seja protegida por senha', es: 'Una tienda que no esté protegida por contraseña' }, 1, { pt: 'Isso! Também plano básico ou superior, Página, portfólio dono da Página e permissão de administrador.', es: '¡Eso! También plan básico o superior, página, portfolio dueño de la página y permiso de administrador.' }],
        [{ pt: 'Ter 1000 produtos', es: 'Tener 1000 productos' }, 0, { pt: 'Não é exigido.', es: 'No se exige.' }],
        [{ pt: 'Ter anúncios ativos', es: 'Tener anuncios activos' }, 0, { pt: 'Não é exigido.', es: 'No se exige.' }]] },
    { q: { pt: 'Depois de conectar, qual compartilhamento de dados a Meta orienta escolher na Shopify?', es: 'Después de conectar, ¿qué uso compartido de datos orienta Meta a elegir en Shopify?' },
      o: [[{ pt: 'Aprimorado ou Máximo', es: 'Mejorado o Máximo' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Nenhum', es: 'Ninguno' }, 0, { pt: 'Escolha Aprimorado ou Máximo.', es: 'Elige Mejorado o Máximo.' }],
        [{ pt: 'Só o básico', es: 'Solo el básico' }, 0, { pt: 'Escolha Aprimorado ou Máximo.', es: 'Elige Mejorado o Máximo.' }]] },
    { q: { pt: 'Para o acesso a dados, qual opção a Meta recomenda?', es: 'Para el acceso a datos, ¿qué opción recomienda Meta?' },
      o: [[{ pt: 'Sempre ativo (ou Otimizado)', es: 'Siempre activo (u Optimizado)' }, 1, { pt: 'Isso! Sempre ativo é a mais confiável.', es: '¡Eso! Siempre activo es la más confiable.' }],
        [{ pt: 'Desligado', es: 'Apagado' }, 0, { pt: 'Isso reduz a qualidade.', es: 'Eso reduce la calidad.' }],
        [{ pt: 'Aleatório', es: 'Aleatorio' }, 0, { pt: 'Não existe.', es: 'No existe.' }]] }
  ]);
  quizCatalogo('onde-shop', { pt: 'Onde se gerencia?', es: '¿Dónde se gestiona?' }, { pt: 'Shopify, app ou Gerenciador de Comércio.', es: 'Shopify, app o Administrador de ventas.' }, [
    { q: { pt: 'Onde se gerenciam os pedidos?', es: '¿Dónde se gestionan los pedidos?' },
      o: [[{ pt: 'No administrador da Shopify', es: 'En el administrador de Shopify' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'No Gerenciador de Anúncios', es: 'En el Administrador de anuncios' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }],
        [{ pt: 'No Instagram', es: 'En Instagram' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }]] },
    { q: { pt: 'Onde se define o tempo de processamento da loja?', es: '¿Dónde se define el tiempo de procesamiento de la tienda?' },
      o: [[{ pt: 'No app Facebook e Instagram (Configurações de envio)', es: 'En la app Facebook e Instagram (Configuración de envío)' }, 1, { pt: 'Isso! O máximo é de 112 dias úteis.', es: '¡Eso! El máximo es de 112 días hábiles.' }],
        [{ pt: 'No Gerenciador de Comércio', es: 'En el Administrador de ventas' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }],
        [{ pt: 'No WhatsApp', es: 'En WhatsApp' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }]] },
    { q: { pt: 'O que se pode fazer no Gerenciador de Comércio com os produtos da Shopify?', es: '¿Qué se puede hacer en el Administrador de ventas con los productos de Shopify?' },
      o: [[{ pt: 'Ver as sincronizações, filtrar problemas e personalizar a loja', es: 'Ver las sincronizaciones, filtrar problemas y personalizar la tienda' }, 1, { pt: 'Isso! A correção dos dados é na Shopify.', es: '¡Eso! La corrección de los datos es en Shopify.' }],
        [{ pt: 'Corrigir os preços de forma permanente', es: 'Corregir los precios de forma permanente' }, 0, { pt: 'A sincronização substitui.', es: 'La sincronización reemplaza.' }],
        [{ pt: 'Gerenciar os pedidos novos', es: 'Gestionar los pedidos nuevos' }, 0, { pt: 'Foi descontinuado.', es: 'Fue discontinuado.' }]] }
  ]);
  quizCatalogo('sinc-shop', { pt: 'Sincronização e redirecionamento', es: 'Sincronización y redirección' }, { pt: 'O que entra e onde editar.', es: 'Qué entra y dónde editar.' }, [
    { q: { pt: 'Qual produto NÃO sincroniza com o Gerenciador de Comércio?', es: '¿Qué producto NO se sincroniza con el Administrador de ventas?' },
      o: [[{ pt: 'Um produto arquivado na Shopify', es: 'Un producto archivado en Shopify' }, 1, { pt: 'Isso! Também os não incluídos no canal Facebook e Instagram.', es: '¡Eso! También los no incluidos en el canal Facebook e Instagram.' }],
        [{ pt: 'Um produto incluído no canal', es: 'Un producto incluido en el canal' }, 0, { pt: 'Esse sincroniza.', es: 'Ese se sincroniza.' }],
        [{ pt: 'Um produto novo incluído', es: 'Un producto nuevo incluido' }, 0, { pt: 'Esse sincroniza.', es: 'Ese se sincroniza.' }]] },
    { q: { pt: 'Por que não se deve editar produtos sincronizados no Gerenciador de Comércio?', es: '¿Por qué no se deben editar productos sincronizados en el Administrador de ventas?' },
      o: [[{ pt: 'A próxima sincronização da Shopify substitui as mudanças', es: 'La próxima sincronización de Shopify reemplaza los cambios' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Porque é proibido por lei', es: 'Porque está prohibido por ley' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Porque apaga a loja', es: 'Porque borra la tienda' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'O que é “Redirecionar para a Shopify para adicionar e editar itens”?', es: '¿Qué es “Redirigir a Shopify para agregar y editar artículos”?' },
      o: [[{ pt: 'Uma configuração do catálogo: o Gerenciador pode levar a pessoa a editar na Shopify', es: 'Una configuración del catálogo: el Administrador puede llevar a la persona a editar en Shopify' }, 1, { pt: 'Isso! Está em Configurações › Catálogo.', es: '¡Eso! Está en Configuración › Catálogo.' }],
        [{ pt: 'Um tipo de anúncio', es: 'Un tipo de anuncio' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }],
        [{ pt: 'Um erro do Pixel', es: 'Un error del píxel' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] }
  ]);
  quizCatalogo('problemas-shop', { pt: 'Triagem Shopify e Meta', es: 'Clasificación Shopify y Meta' }, { pt: 'Queixas comuns e onde olhar.', es: 'Quejas comunes y dónde mirar.' }, [
    { q: { pt: 'Compras aparecem em dobro. Qual é a orientação para a Shopify?', es: 'Las compras aparecen duplicadas. ¿Cuál es la orientación para Shopify?' },
      o: [[{ pt: 'Enviar eventos só pelo canal Facebook e Instagram e tirar o Pixel de outros lugares (apps, tema, Gerenciador de tags do Google)', es: 'Enviar eventos solo por el canal Facebook e Instagram y sacar el píxel de otros lugares (apps, tema, Administrador de etiquetas de Google)' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Instalar mais um Pixel', es: 'Instalar un píxel más' }, 0, { pt: 'Isso piora.', es: 'Eso empeora.' }],
        [{ pt: 'Ignorar', es: 'Ignorar' }, 0, { pt: 'Distorce os relatórios.', es: 'Distorsiona los informes.' }]] },
    { q: { pt: 'Os produtos não aparecem. O que conferir na Shopify?', es: 'Los productos no aparecen. ¿Qué revisar en Shopify?' },
      o: [[{ pt: 'Se estão incluídos no canal Facebook e Instagram e não arquivados', es: 'Si están incluidos en el canal Facebook e Instagram y no archivados' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'A cor do tema', es: 'El color del tema' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }],
        [{ pt: 'O nome do cliente', es: 'El nombre del cliente' }, 0, { pt: 'Não tem relação.', es: 'No tiene relación.' }]] },
    { q: { pt: 'O código de desconto não aparece na loja. Onde se gerencia?', es: 'El código de descuento no aparece en la tienda. ¿Dónde se gestiona?' },
      o: [[{ pt: 'No administrador da Shopify, com Facebook e Instagram como canal de vendas', es: 'En el administrador de Shopify, con Facebook e Instagram como canal de ventas' }, 1, { pt: 'Isso! No Gerenciador de Comércio só se visualiza.', es: '¡Eso! En el Administrador de ventas solo se visualiza.' }],
        [{ pt: 'No Gerenciador de Comércio', es: 'En el Administrador de ventas' }, 0, { pt: 'Lá só dá para ver.', es: 'Allí solo se puede ver.' }],
        [{ pt: 'No Instagram', es: 'En Instagram' }, 0, { pt: 'Não é lá.', es: 'No es allí.' }]] }
  ]);

  /* ---------- 28. Pixel avançado: quatro mini-quizzes (Pixel avançado 01–04) ---------- */
  quizCatalogo('corr-pa', { pt: 'Correspondência avançada', es: 'Coincidencia avanzada' }, { pt: 'Automática, manual e o hash.', es: 'Automática, manual y el hash.' }, [
    { q: { pt: 'O que a correspondência avançada envia à Meta com os eventos do Pixel?', es: '¿Qué envía la coincidencia avanzada a Meta con los eventos del píxel?' },
      o: [[{ pt: 'Informações do cliente convertidas em hash', es: 'Información del cliente convertida en hash' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Senhas dos clientes', es: 'Contraseñas de los clientes' }, 0, { pt: 'Nunca.', es: 'Nunca.' }],
        [{ pt: 'Nada: só muda a cor do Pixel', es: 'Nada: solo cambia el color del píxel' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Uma empresa de seguros pode usar a correspondência avançada automática?', es: '¿Una empresa de seguros puede usar la coincidencia avanzada automática?' },
      o: [[{ pt: 'Não: é vertical restrita; use a manual', es: 'No: es vertical restringida; usa la manual' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Sim, sem restrições', es: 'Sí, sin restricciones' }, 0, { pt: 'Verticais restritas não têm a automática.', es: 'Las verticales restringidas no tienen la automática.' }],
        [{ pt: 'Só se pagar uma taxa', es: 'Solo si paga una tarifa' }, 0, { pt: 'Não há taxa.', es: 'No hay tarifa.' }]] },
    { q: { pt: 'O que a Meta faz com o dado depois do hash e da correspondência?', es: '¿Qué hace Meta con el dato después del hash y de la coincidencia?' },
      o: [[{ pt: 'Descarta', es: 'Lo descarta' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Vende a terceiros', es: 'Lo vende a terceros' }, 0, { pt: 'Não.', es: 'No.' }],
        [{ pt: 'Publica no perfil da pessoa', es: 'Lo publica en el perfil de la persona' }, 0, { pt: 'Não.', es: 'No.' }]] }
  ]);
  quizCatalogo('emq-pa', { pt: 'Qualidade da correspondência de eventos', es: 'Calidad de la coincidencia de eventos' }, { pt: 'A nota de 0 a 10.', es: 'La nota de 0 a 10.' }, [
    { q: { pt: 'Quais parâmetros têm prioridade alta?', es: '¿Qué parámetros tienen prioridad alta?' },
      o: [[{ pt: 'E-mail e identificação de clique', es: 'Correo e identificación de clic' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Cidade e CEP', es: 'Ciudad y código postal' }, 0, { pt: 'Esses são de prioridade baixa.', es: 'Esos son de prioridad baja.' }],
        [{ pt: 'Nome e sobrenome', es: 'Nombre y apellido' }, 0, { pt: 'Prioridade baixa.', es: 'Prioridad baja.' }]] },
    { q: { pt: 'A pontuação usa dados de qual período?', es: '¿La puntuación usa datos de qué período?' },
      o: [[{ pt: 'Últimas 48 horas', es: 'Últimas 48 horas' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Último ano', es: 'Último año' }, 0, { pt: 'Não.', es: 'No.' }],
        [{ pt: 'Só o dia da configuração', es: 'Solo el día de la configuración' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Como melhorar a pontuação?', es: '¿Cómo mejorar la puntuación?' },
      o: [[{ pt: 'Enviar mais parâmetros do cliente, quando disponíveis e permitidos', es: 'Enviar más parámetros del cliente, cuando estén disponibles y permitidos' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Pagar mais por anúncio', es: 'Pagar más por anuncio' }, 0, { pt: 'A nota não se compra.', es: 'La nota no se compra.' }],
        [{ pt: 'Enviar dados inventados', es: 'Enviar datos inventados' }, 0, { pt: 'Piora e viola os termos.', es: 'Empeora y viola los términos.' }]] }
  ]);
  quizCatalogo('dedup-pa', { pt: 'Deduplicação de eventos', es: 'Deduplicación de eventos' }, { pt: 'Navegador e servidor, uma compra só.', es: 'Navegador y servidor, una sola compra.' }, [
    { q: { pt: 'O que precisa ser igual nos dois eventos para a Meta desduplicar?', es: '¿Qué debe ser igual en los dos eventos para que Meta deduplique?' },
      o: [[{ pt: 'event_name e event_id', es: 'event_name y event_id' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só o valor da compra', es: 'Solo el valor de la compra' }, 0, { pt: 'Não basta.', es: 'No basta.' }],
        [{ pt: 'A cor do botão', es: 'El color del botón' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Se os dois eventos chegam parecidos, qual vale?', es: 'Si los dos eventos llegan parecidos, ¿cuál vale?' },
      o: [[{ pt: 'O que chegou primeiro', es: 'El que llegó primero' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Os dois, somados', es: 'Los dos, sumados' }, 0, { pt: 'Seria contar em dobro.', es: 'Sería contar doble.' }],
        [{ pt: 'O que tem valor maior', es: 'El de mayor valor' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Onde testar se a deduplicação funciona?', es: '¿Dónde probar si la deduplicación funciona?' },
      o: [[{ pt: 'Em Eventos de teste, no Gerenciador de Eventos', es: 'En Probar eventos, en el Administrador de eventos' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Esperando o fim do mês', es: 'Esperando el fin de mes' }, 0, { pt: 'Teste antes.', es: 'Prueba antes.' }],
        [{ pt: 'Em nenhum lugar', es: 'En ningún lugar' }, 0, { pt: 'Há onde testar.', es: 'Hay dónde probar.' }]] }
  ]);
  quizCatalogo('priv-pa', { pt: 'Privacidade e regras do Pixel', es: 'Privacidad y reglas del píxel' }, { pt: 'Consentimento e informações proibidas.', es: 'Consentimiento e información prohibida.' }, [
    { q: { pt: 'Quando o Pixel pode compartilhar dados em lugares que exigem consentimento de cookies?', es: '¿Cuándo puede el píxel compartir datos en lugares que exigen consentimiento de cookies?' },
      o: [[{ pt: 'Só depois de a pessoa aceitar', es: 'Solo después de que la persona acepte' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Assim que a página abre', es: 'Apenas abre la página' }, 0, { pt: 'Antes do consentimento, não.', es: 'Antes del consentimiento, no.' }],
        [{ pt: 'Nunca, em nenhum caso', es: 'Nunca, en ningún caso' }, 0, { pt: 'Pode, com consentimento.', es: 'Puede, con consentimiento.' }]] },
    { q: { pt: 'Qual destas informações nunca deve ser enviada?', es: '¿Cuál de estas informaciones nunca debe enviarse?' },
      o: [[{ pt: 'Dados de saúde, inclusive em parâmetro de URL', es: 'Datos de salud, incluso en parámetro de URL' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O nome do evento Purchase', es: 'El nombre del evento Purchase' }, 0, { pt: 'Isso é permitido.', es: 'Eso está permitido.' }],
        [{ pt: 'O valor da compra', es: 'El valor de la compra' }, 0, { pt: 'Isso é permitido.', es: 'Eso está permitido.' }]] },
    { q: { pt: 'Quem é responsável pelos dados enviados à Meta?', es: '¿Quién es responsable de los datos enviados a Meta?' },
      o: [[{ pt: 'O anunciante', es: 'El anunciante' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só a Meta', es: 'Solo Meta' }, 0, { pt: 'Os sistemas da Meta não substituem os seus controles.', es: 'Los sistemas de Meta no sustituyen tus controles.' }],
        [{ pt: 'O visitante do site', es: 'El visitante del sitio' }, 0, { pt: 'Não.', es: 'No.' }]] }
  ]);

  /* ---------- 29. Portfólio avançado: quatro mini-quizzes (Portfólio avançado 01–04) ---------- */
  quizCatalogo('ver-pv', { pt: 'Verificação da empresa', es: 'Verificación de la empresa' }, { pt: 'O que é, quem inicia e quanto leva.', es: 'Qué es, quién inicia y cuánto tarda.' }, [
    { q: { pt: 'A verificação da empresa dá o selo azul de verificado?', es: '¿La verificación de la empresa da la insignia azul de verificado?' },
      o: [[{ pt: 'Não: o selo é o Meta Verified, outra coisa', es: 'No: la insignia es Meta Verified, otra cosa' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Sim, é o mesmo', es: 'Sí, es lo mismo' }, 0, { pt: 'São coisas diferentes.', es: 'Son cosas distintas.' }],
        [{ pt: 'Só para empresas grandes', es: 'Solo para empresas grandes' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] },
    { q: { pt: 'Quem consegue iniciar a verificação na Central de Segurança?', es: '¿Quién puede iniciar la verificación en el Centro de seguridad?' },
      o: [[{ pt: 'Quem tem controle total do portfólio', es: 'Quien tiene control total del portafolio' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Qualquer pessoa com acesso a uma Página', es: 'Cualquier persona con acceso a una página' }, 0, { pt: 'Precisa de controle total do portfólio.', es: 'Necesita control total del portafolio.' }],
        [{ pt: 'Só o suporte da Meta', es: 'Solo el soporte de Meta' }, 0, { pt: 'O dono faz.', es: 'Lo hace el dueño.' }]] },
    { q: { pt: 'Quanto pode levar a decisão?', es: '¿Cuánto puede tardar la decisión?' },
      o: [[{ pt: 'Até 14 dias úteis', es: 'Hasta 14 días hábiles' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Na hora', es: 'Al instante' }, 0, { pt: 'Pode levar dias.', es: 'Puede tardar días.' }],
        [{ pt: 'Um ano', es: 'Un año' }, 0, { pt: 'Não tanto.', es: 'No tanto.' }]] }
  ]);
  quizCatalogo('doc-pv', { pt: 'Documentos da verificação', es: 'Documentos de la verificación' }, { pt: 'O que a Meta aceita e por que recusa.', es: 'Qué acepta Meta y por qué rechaza.' }, [
    { q: { pt: 'A conta de luz serve para provar o quê?', es: '¿Para qué sirve la factura de luz?' },
      o: [[{ pt: 'Endereço e telefone, não a razão social', es: 'Dirección y teléfono, no la razón social' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'A razão social', es: 'La razón social' }, 0, { pt: 'Não serve para isso.', es: 'No sirve para eso.' }],
        [{ pt: 'Nada', es: 'Nada' }, 0, { pt: 'Serve para endereço e telefone.', es: 'Sirve para dirección y teléfono.' }]] },
    { q: { pt: 'Qual destes documentos é aceito para a razão social?', es: '¿Cuál de estos documentos se acepta para la razón social?' },
      o: [[{ pt: 'Contrato ou certificado social', es: 'Contrato o certificado social' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Formulário preenchido sem assinatura nem carimbo', es: 'Formulario completado sin firma ni sello' }, 0, { pt: 'Não é aceito.', es: 'No se acepta.' }],
        [{ pt: 'Foto desfocada do documento', es: 'Foto borrosa del documento' }, 0, { pt: 'Precisa estar legível.', es: 'Debe estar legible.' }]] },
    { q: { pt: 'O que fazer com o CPF que aparece no documento?', es: '¿Qué hacer con el CPF que aparece en el documento?' },
      o: [[{ pt: 'Cobrir, porque a Meta não precisa dele', es: 'Cubrirlo, porque Meta no lo necesita' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Mandar em destaque', es: 'Mandarlo destacado' }, 0, { pt: 'Proteja dados pessoais.', es: 'Protege datos personales.' }],
        [{ pt: 'Trocar por outro número', es: 'Cambiarlo por otro número' }, 0, { pt: 'Nunca altere documentos.', es: 'Nunca alteres documentos.' }]] }
  ]);
  quizCatalogo('perm-pv', { pt: 'Permissões no portfólio', es: 'Permisos en el portafolio' }, { pt: 'Controle total e como ajustar.', es: 'Control total y cómo ajustar.' }, [
    { q: { pt: 'Por que o menu Pessoas pode não aparecer?', es: '¿Por qué el menú Personas puede no aparecer?' },
      o: [[{ pt: 'Você não tem controle total do portfólio', es: 'No tienes control total del portafolio' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O navegador está lento', es: 'El navegador está lento' }, 0, { pt: 'É questão de permissão.', es: 'Es cuestión de permiso.' }],
        [{ pt: 'Só aparece em feriados', es: 'Solo aparece en feriados' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Qual o caminho para alterar o acesso de alguém?', es: '¿Cuál es el camino para cambiar el acceso de alguien?' },
      o: [[{ pt: 'Configurações › Pessoas › nome › Gerenciar › Salvar', es: 'Configuración › Personas › nombre › Administrar › Guardar' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Pelo e-mail da pessoa', es: 'Por el correo de la persona' }, 0, { pt: 'É nas configurações.', es: 'Es en configuración.' }],
        [{ pt: 'Apagando o portfólio', es: 'Borrando el portafolio' }, 0, { pt: 'Nunca por isso.', es: 'Nunca por eso.' }]] },
    { q: { pt: 'Um parceiro compartilhou um ativo com você. O que vale?', es: 'Un socio compartió un activo contigo. ¿Qué vale?' },
      o: [[{ pt: 'As permissões que o parceiro atribuiu', es: 'Los permisos que el socio asignó' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Você sempre tem controle total', es: 'Siempre tienes control total' }, 0, { pt: 'Não necessariamente.', es: 'No necesariamente.' }],
        [{ pt: 'Nenhuma permissão', es: 'Ningún permiso' }, 0, { pt: 'Tem as atribuídas.', es: 'Tienes las asignadas.' }]] }
  ]);
  quizCatalogo('excl-pv', { pt: 'Excluir o portfólio', es: 'Eliminar el portafolio' }, { pt: 'Irreversível: o que impede e a alternativa.', es: 'Irreversible: qué impide y la alternativa.' }, [
    { q: { pt: 'Depois de excluir, dá para reabrir o portfólio?', es: 'Después de eliminar, ¿se puede reabrir el portafolio?' },
      o: [[{ pt: 'Não: fica pendente por 24 horas e depois não reabre', es: 'No: queda pendiente por 24 horas y luego no se reabre' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Sim, a qualquer momento', es: 'Sí, en cualquier momento' }, 0, { pt: 'Não.', es: 'No.' }],
        [{ pt: 'Só pagando', es: 'Solo pagando' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Qual destes pode impedir a exclusão?', es: '¿Cuál de estos puede impedir la eliminación?' },
      o: [[{ pt: 'Formas de pagamento e apps conectados', es: 'Formas de pago y apps conectadas' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'A cor do logotipo', es: 'El color del logotipo' }, 0, { pt: 'Não.', es: 'No.' }],
        [{ pt: 'O idioma do navegador', es: 'El idioma del navegador' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'O cliente só quer parar de anunciar. O que você sugere?', es: 'El cliente solo quiere dejar de anunciar. ¿Qué sugieres?' },
      o: [[{ pt: 'Desativar as contas de anúncios', es: 'Desactivar las cuentas publicitarias' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Excluir o portfólio sem avisar', es: 'Eliminar el portafolio sin avisar' }, 0, { pt: 'É irreversível.', es: 'Es irreversible.' }],
        [{ pt: 'Criar outro portfólio', es: 'Crear otro portafolio' }, 0, { pt: 'Não resolve.', es: 'No resuelve.' }]] }
  ]);

  /* ---------- 30. Diagnóstico de casos: cinco mini-quizzes (Diagnóstico 01–05) ---------- */
  quizCatalogo('met-dg', { pt: 'Como investigar um caso', es: 'Cómo investigar un caso' }, { pt: 'O método: relato, fontes, causa, solução, teste.', es: 'El método: relato, fuentes, causa, solución, prueba.' }, [
    { q: { pt: 'PageView, ViewContent e AddToCart chegam, mas o Purchase não. O que isso indica?', es: 'PageView, ViewContent y AddToCart llegan, pero el Purchase no. ¿Qué indica eso?' },
      o: [[{ pt: 'O pixel está vivo; o problema está no Purchase', es: 'El píxel está vivo; el problema está en el Purchase' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O pixel não está instalado', es: 'El píxel no está instalado' }, 0, { pt: 'Se os outros chegam, está instalado.', es: 'Si los otros llegan, está instalado.' }],
        [{ pt: 'A conta de anúncios foi desativada', es: 'La cuenta publicitaria fue desactivada' }, 0, { pt: 'Não há relação.', es: 'No hay relación.' }]] },
    { q: { pt: 'Quais são as fontes para investigar?', es: '¿Cuáles son las fuentes para investigar?' },
      o: [[{ pt: 'Eventos de teste, Diagnóstico, código da página e plataforma', es: 'Probar eventos, Diagnóstico, código de la página y plataforma' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só o palpite do cliente', es: 'Solo la corazonada del cliente' }, 0, { pt: 'Use as fontes.', es: 'Usa las fuentes.' }],
        [{ pt: 'Só o relatório de vendas', es: 'Solo el informe de ventas' }, 0, { pt: 'Não basta.', es: 'No basta.' }]] },
    { q: { pt: 'Como fechar a investigação?', es: '¿Cómo cerrar la investigación?' },
      o: [[{ pt: 'Com uma compra de teste conferida em Eventos de teste', es: 'Con una compra de prueba revisada en Probar eventos' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Esperando uma semana', es: 'Esperando una semana' }, 0, { pt: 'Teste antes.', es: 'Prueba antes.' }],
        [{ pt: 'Criando outro pixel', es: 'Creando otro píxel' }, 0, { pt: 'Não resolve.', es: 'No resuelve.' }]] }
  ]);
  quizCatalogo('cod-dg', { pt: 'Colar o código do Pixel', es: 'Pegar el código del píxel' }, { pt: 'Onde cada código vai.', es: 'Dónde va cada código.' }, [
    { q: { pt: 'Onde vai o código base do Pixel?', es: '¿Dónde va el código base del píxel?' },
      o: [[{ pt: 'Na seção head de todas as páginas', es: 'En la sección head de todas las páginas' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Só na página inicial', es: 'Solo en la página de inicio' }, 0, { pt: 'Precisa ser em todas.', es: 'Debe ser en todas.' }],
        [{ pt: 'Só na página de pedido concluído', es: 'Solo en la página de pedido completado' }, 0, { pt: 'Isso é do evento Purchase.', es: 'Eso es del evento Purchase.' }]] },
    { q: { pt: 'Qual é a forma certa do valor no Purchase?', es: '¿Cuál es la forma correcta del valor en el Purchase?' },
      o: [[{ pt: 'value: 99.90, currency: \'BRL\'', es: 'value: 99.90, currency: \'BRL\'' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'value: \'R$ 99,90\'', es: 'value: \'R$ 99,90\'' }, 0, { pt: 'Sem símbolo nem vírgula.', es: 'Sin símbolo ni coma.' }],
        [{ pt: 'value: 99,90, currency: reais', es: 'value: 99,90, currency: reais' }, 0, { pt: 'Ponto decimal e 3 letras.', es: 'Punto decimal y 3 letras.' }]] },
    { q: { pt: 'fbq(\'track\', \'purchase\') (com p minúsculo) cria o quê?', es: 'fbq(\'track\', \'purchase\') (con p minúscula) ¿qué crea?' },
      o: [[{ pt: 'Um evento personalizado chamado purchase, não o Purchase padrão', es: 'Un evento personalizado llamado purchase, no el Purchase estándar' }, 1, { pt: 'Isso! Os nomes diferenciam maiúsculas e minúsculas.', es: '¡Eso! Los nombres distinguen mayúsculas y minúsculas.' }],
        [{ pt: 'O Purchase padrão, igual', es: 'El Purchase estándar, igual' }, 0, { pt: 'Não é igual.', es: 'No es igual.' }],
        [{ pt: 'Nada', es: 'Nada' }, 0, { pt: 'Cria um evento personalizado.', es: 'Crea un evento personalizado.' }]] }
  ]);
  quizCatalogo('dup-dg', { pt: 'Duplicado e valor errado', es: 'Duplicado y valor incorrecto' }, { pt: 'Um evento por ação.', es: 'Un evento por acción.' }, [
    { q: { pt: 'Qual a causa comum do Purchase duplicado?', es: '¿Cuál es la causa común del Purchase duplicado?' },
      o: [[{ pt: 'O código do Purchase está em mais de um lugar', es: 'El código del Purchase está en más de un lugar' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O cliente comprou duas vezes', es: 'El cliente compró dos veces' }, 0, { pt: 'Confira antes.', es: 'Confirma antes.' }],
        [{ pt: 'A Meta conta sempre dobrado', es: 'Meta siempre cuenta doble' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Qual código da Meta deve ficar no cabeçalho do site?', es: '¿Qué código de Meta debe quedar en el encabezado del sitio?' },
      o: [[{ pt: 'Só o código base do Pixel', es: 'Solo el código base del píxel' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O código base e o Purchase', es: 'El código base y el Purchase' }, 0, { pt: 'O Purchase não fica no cabeçalho.', es: 'El Purchase no va en el encabezado.' }],
        [{ pt: 'Nenhum', es: 'Ninguno' }, 0, { pt: 'O base fica no head.', es: 'El base va en el head.' }]] },
    { q: { pt: 'O Purchase chega com valor zero e o Diagnóstico avisa de valor e moeda. O que corrigir?', es: 'El Purchase llega con valor cero y el Diagnóstico avisa de valor y moneda. ¿Qué corregir?' },
      o: [[{ pt: 'Value numérico com ponto decimal e currency de 3 letras', es: 'Value numérico con punto decimal y currency de 3 letras' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Criar outro pixel', es: 'Crear otro píxel' }, 0, { pt: 'Não resolve.', es: 'No resuelve.' }],
        [{ pt: 'Esperar o Diagnóstico sumir', es: 'Esperar que el Diagnóstico desaparezca' }, 0, { pt: 'O erro fica até corrigir.', es: 'El error queda hasta corregir.' }]] }
  ]);
  quizCatalogo('plat-dg', { pt: 'Plataforma conectada: níveis de dados', es: 'Plataforma conectada: niveles de datos' }, { pt: 'Conservador, Aprimorado e Máximo na Shopify.', es: 'Conservador, Mejorado y Máximo en Shopify.' }, [
    { q: { pt: 'Na preferência Conservador, quem envia os dados?', es: 'En la preferencia Conservador, ¿quién envía los datos?' },
      o: [[{ pt: 'Só o pixel do navegador, que um bloqueador de anúncios pode impedir', es: 'Solo el píxel del navegador, que un bloqueador de anuncios puede impedir' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'O pixel e a API de Conversões', es: 'El píxel y la API de Conversiones' }, 0, { pt: 'Isso é Aprimorado e Máximo.', es: 'Eso es Mejorado y Máximo.' }],
        [{ pt: 'Ninguém: fica desligado', es: 'Nadie: queda desactivado' }, 0, { pt: 'O pixel envia.', es: 'El píxel envía.' }]] },
    { q: { pt: 'Por que Aprimorado ou Máximo podem recuperar compras de quem usa bloqueador?', es: '¿Por qué Mejorado o Máximo pueden recuperar compras de quien usa bloqueador?' },
      o: [[{ pt: 'A API de Conversões envia a compra de servidor para servidor, sem passar pelo navegador', es: 'La API de Conversiones envía la compra de servidor a servidor, sin pasar por el navegador' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Porque desligam o bloqueador do cliente', es: 'Porque desactivan el bloqueador del cliente' }, 0, { pt: 'Não mexem no navegador do cliente.', es: 'No tocan el navegador del cliente.' }],
        [{ pt: 'Porque mudam o ID do pixel', es: 'Porque cambian el ID del píxel' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'O que avisar ao cliente antes de recomendar Aprimorado ou Máximo?', es: '¿Qué avisar al cliente antes de recomendar Mejorado o Máximo?' },
      o: [[{ pt: 'Que compartilham dados pessoais (nome, local, e-mail, telefone) e a política de privacidade precisa informar', es: 'Que comparten datos personales (nombre, ubicación, correo, teléfono) y la política de privacidad debe informarlo' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Nada: é sempre melhor', es: 'Nada: siempre es mejor' }, 0, { pt: 'O cliente decide e informa.', es: 'El cliente decide e informa.' }],
        [{ pt: 'Que a Meta cobra a mais', es: 'Que Meta cobra más' }, 0, { pt: 'Não é isso.', es: 'No es eso.' }]] }
  ]);
  quizCatalogo('queda-dg', { pt: 'Quando os eventos caem', es: 'Cuando los eventos caen' }, { pt: 'O roteiro da Central de Ajuda.', es: 'El guion del Centro de ayuda.' }, [
    { q: { pt: 'Depois de uma troca de tema, os eventos caíram a zero. Causa comum?', es: 'Después de un cambio de tema, los eventos cayeron a cero. ¿Causa común?' },
      o: [[{ pt: 'O código base foi removido do cabeçalho', es: 'El código base se eliminó del encabezado' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'A moeda da conta mudou', es: 'La moneda de la cuenta cambió' }, 0, { pt: 'Não.', es: 'No.' }],
        [{ pt: 'O cliente mudou de nome', es: 'El cliente cambió de nombre' }, 0, { pt: 'Não.', es: 'No.' }]] },
    { q: { pt: 'Qual é o primeiro passo do roteiro?', es: '¿Cuál es el primer paso del guion?' },
      o: [[{ pt: 'Confirmar a redução (todos os eventos ou só alguns)', es: 'Confirmar la reducción (todos los eventos o solo algunos)' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Criar campanhas novas', es: 'Crear campañas nuevas' }, 0, { pt: 'Primeiro entenda.', es: 'Primero entiende.' }],
        [{ pt: 'Apagar o pixel', es: 'Borrar el píxel' }, 0, { pt: 'Nunca.', es: 'Nunca.' }]] },
    { q: { pt: 'Como prevenir a queda no futuro?', es: '¿Cómo prevenir la caída en el futuro?' },
      o: [[{ pt: 'Testar o pixel sempre que o site mudar e monitorar o Gerenciador', es: 'Probar el píxel siempre que el sitio cambie y monitorear el Administrador' }, 1, { pt: 'Isso!', es: '¡Eso!' }],
        [{ pt: 'Nunca mexer no site', es: 'Nunca tocar el sitio' }, 0, { pt: 'Não é realista.', es: 'No es realista.' }],
        [{ pt: 'Trocar de pixel todo mês', es: 'Cambiar de píxel todos los meses' }, 0, { pt: 'Não.', es: 'No.' }]] }
  ]);

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
