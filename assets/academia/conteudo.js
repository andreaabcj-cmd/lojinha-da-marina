/* Conteúdo da plataforma (PT | ES). Toda frase é {pt, es}.
   MODULOS = a trilha. AULAS = aulas de cada módulo.
   Cada aula tem sempre as mesmas partes, nesta ordem: entender · ver de perto (ferramenta) · praticar (guiado) · atender (+ cola) · fontes.
   Foco: o agente entende, identifica o problema e orienta o cliente; o que é técnico demais vai para o desenvolvedor. */
/* As fases da Marina: a trilha é a história dela, de "o que é isso?" até o ecossistema inteiro (ver _roteiro/HISTORIA.md). */
window.FASES = [
  null,
  { icone: '🌱', nome: { pt: 'Cliente nova', es: 'Clienta nueva' }, resumo: { pt: 'A Marina não sabe nada e às vezes chega com resposta pronta de IA.', es: 'Marina no sabe nada y a veces llega con respuestas hechas de IA.' } },
  { icone: '🚀', nome: { pt: 'Em ascensão', es: 'En ascenso' }, resumo: { pt: 'Primeiras vendas: ela já sabe o básico, mas ainda confunde.', es: 'Primeras ventas: ya sabe lo básico, pero todavía confunde.' } },
  { icone: '📈', nome: { pt: 'Consolidada', es: 'Consolidada' }, resumo: { pt: 'Investe todo mês e quer entender os números.', es: 'Invierte cada mes y quiere entender los números.' } },
  { icone: '⭐', nome: { pt: 'Referência', es: 'Referente' }, resumo: { pt: 'Loja séria: quer confiança e vender dentro da Meta.', es: 'Tienda seria: quiere confianza y vender dentro de Meta.' } },
  { icone: '🏆', nome: { pt: 'Grande anunciante', es: 'Gran anunciante' }, resumo: { pt: 'Tem equipe, agência ou desenvolvedor; as perguntas são técnicas.', es: 'Tiene equipo, agencia o desarrollador; las preguntas son técnicas.' } }
];

window.MODULOS = [
  { id: 'portfolio', fase: 1, status: 'planejado', icone: '🏢', titulo: { pt: 'Portfólio empresarial · básico', es: 'Portafolio comercial · básico' }, resumo: { pt: 'Como configurar o portfólio e seus principais recursos.', es: 'Cómo configurar el portafolio y sus principales recursos.' } },
  { id: 'instagram', fase: 1, status: 'planejado', icone: '📸', titulo: { pt: 'Instagram para empresas', es: 'Instagram para empresas' }, resumo: { pt: 'Como funciona o Instagram para empresas e seus anúncios.', es: 'Cómo funciona Instagram para empresas y sus anuncios.' } },
  { id: 'pixel', fase: 1, status: 'construcao', icone: '📡', titulo: { pt: 'Pixel · básico', es: 'Pixel · básico' }, resumo: { pt: 'O que é, como criar, como saber se está funcionando, os eventos e os primeiros avisos.', es: 'Qué es, cómo crearlo, cómo saber si funciona, los eventos y los primeros avisos.' } },
  { id: 'anuncios', fase: 2, status: 'planejado', icone: '📣', titulo: { pt: 'Gerenciador de Anúncios · criação e edição', es: 'Administrador de anuncios · creación y edición' }, resumo: { pt: 'Criar e editar anúncios, e os erros mais comuns.', es: 'Crear y editar anuncios, y los errores más comunes.' } },
  { id: 'feed', fase: 2, status: 'planejado', icone: '📰', titulo: { pt: 'Anúncios no Feed', es: 'Anuncios en el Feed' }, resumo: { pt: 'O que são e erros comuns.', es: 'Qué son y errores comunes.' } },
  { id: 'catalogo', fase: 2, status: 'planejado', icone: '🗂️', titulo: { pt: 'Catálogo', es: 'Catálogo' }, resumo: { pt: 'Introdução, como criar e como manter.', es: 'Introducción, cómo crearlo y cómo mantenerlo.' } },
  { id: 'relatorios', fase: 3, status: 'planejado', icone: '📊', titulo: { pt: 'Relatórios e métricas', es: 'Informes y métricas' }, resumo: { pt: 'Criar e interpretar relatórios; o efeito das mudanças de privacidade do iOS.', es: 'Crear e interpretar informes; el efecto de los cambios de privacidad de iOS.' } },
  { id: 'segmentacao', fase: 3, status: 'planejado', icone: '🎯', titulo: { pt: 'Segmentação', es: 'Segmentación' }, resumo: { pt: 'Parâmetros, categorias especiais e erros comuns.', es: 'Parámetros, categorías especiales y errores comunes.' } },
  { id: 'entrega', fase: 3, status: 'planejado', icone: '🚚', titulo: { pt: 'Entrega de anúncios', es: 'Entrega de anuncios' }, resumo: { pt: 'Como a entrega funciona, a fase de aprendizado e a solução de problemas.', es: 'Cómo funciona la entrega, la fase de aprendizaje y la solución de problemas.' } },
  { id: 'regras', fase: 3, status: 'planejado', icone: '⚙️', titulo: { pt: 'Gerenciador de Anúncios · regras automatizadas', es: 'Administrador de anuncios · reglas automatizadas' }, resumo: { pt: 'Como funcionam e como configurar.', es: 'Cómo funcionan y cómo configurarlas.' } },
  { id: 'pixel-avancado', fase: 3, status: 'planejado', icone: '🛰️', titulo: { pt: 'Pixel · avançado', es: 'Pixel · avanzado' }, resumo: { pt: 'Correspondência avançada, qualidade do sinal, API de Conversões e deduplicação, privacidade.', es: 'Coincidencia avanzada, calidad de la señal, API de conversiones y deduplicación, privacidad.' } },
  { id: 'verified', fase: 4, status: 'planejado', icone: '✅', titulo: { pt: 'Meta Verified para empresas', es: 'Meta Verified para empresas' }, resumo: { pt: 'O que é, recursos, escopo e casos.', es: 'Qué es, funciones, alcance y casos.' } },
  { id: 'commerce', fase: 4, status: 'planejado', icone: '🛍️', titulo: { pt: 'Introdução ao Commerce', es: 'Introducción a Commerce' }, resumo: { pt: 'O que é e qual o escopo.', es: 'Qué es y cuál es el alcance.' } },
  { id: 'shop-ads', fase: 4, status: 'planejado', icone: '🛒', titulo: { pt: 'Anúncios de loja (Shop Ads)', es: 'Anuncios de tienda (Shop Ads)' }, resumo: { pt: 'Como funcionam e a finalização da compra fora da Meta: URL de checkout e métricas.', es: 'Cómo funcionan y el pago fuera de Meta: URL de checkout y métricas.' } },
  { id: 'portfolio-avancado', fase: 5, status: 'planejado', icone: '🧰', titulo: { pt: 'Portfólio empresarial · avançado', es: 'Portafolio comercial · avanzado' }, resumo: { pt: 'Como verificar e corrigir erros no portfólio.', es: 'Cómo verificar y corregir errores en el portafolio.' } },
  { id: 'mbe', fase: 5, status: 'planejado', icone: '🔌', titulo: { pt: 'Meta Business Extension e parceiros', es: 'Meta Business Extension y socios' }, resumo: { pt: 'Integração com plataformas parceiras e erros possíveis.', es: 'Integración con plataformas socias y errores posibles.' } },
  { id: 'shopify', fase: 5, status: 'planejado', icone: '🧩', titulo: { pt: 'Shopify e Meta', es: 'Shopify y Meta' }, resumo: { pt: 'Como integrar, solução de problemas e redirecionamento.', es: 'Cómo integrar, solución de problemas y redirección.' } },
  { id: 'whatsapp', fase: 5, status: 'depois', icone: '💬', titulo: { pt: 'WhatsApp', es: 'WhatsApp' }, resumo: { pt: 'Fica para depois.', es: 'Para más adelante.' } }
];

window.AULAS = {
  pixel: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'O que é o Pixel?', es: '¿Qué es el Pixel?' },
      antes: { pt: 'A Marina já abriu o portfólio empresarial e conectou o Instagram. Agora uma amiga disse que ela “precisa colocar o Pixel”.', es: 'Marina ya abrió el portafolio comercial y conectó Instagram. Ahora una amiga le dijo que “tiene que poner el Pixel”.' },
      gancho: { pt: '“Entendi! E como eu crio o meu?” A Marina quer o Pixel dela. Vamos criar e colocar no site.', es: '“¡Entendí! ¿Y cómo creo el mío?” Marina quiere su Pixel. Vamos a crearlo y ponerlo en el sitio.' },
      objetivo: { pt: 'Explicar o que o Pixel faz em linguagem simples: ele mede o que acontece no site para medir, melhorar os anúncios e criar públicos.', es: 'Explicar qué hace el Pixel en lenguaje simple: mide lo que pasa en el sitio para medir, mejorar los anuncios y crear públicos.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Oi! Uma amiga disse que eu preciso colocar o Pixel no meu site. Perguntei pra IA e ela disse que o Pixel “rastreia tudo das pessoas” e “faz os anúncios venderem sozinhos”. É isso? 😅', es: '¡Hola! Una amiga me dijo que tengo que poner el Pixel en mi sitio. Le pregunté a la IA y me dijo que el Pixel “rastrea todo de las personas” y “hace que los anuncios vendan solos”. ¿Es así? 😅' }],
          ['rafa', { pt: 'Oi, Marina! Quase. O Pixel é um pedacinho de código que fica no seu site e conta para a Meta o que as pessoas fazem lá: viram um produto, puseram no carrinho, compraram.', es: '¡Hola, Marina! Casi. El Pixel es un pedacito de código que está en tu sitio y le cuenta a Meta lo que las personas hacen ahí: vieron un producto, lo pusieron en el carrito, compraron.' }],
          ['rafa', { pt: 'Ele não vende sozinho: ele mede. Com isso você vê se o anúncio deu resultado, e a Meta mostra seus anúncios para quem tem mais chance de comprar.', es: 'No vende solo: mide. Con eso ves si el anuncio dio resultado, y Meta muestra tus anuncios a quien tiene más chance de comprar.' }],
          ['pixel', { pt: 'Eu não “rastreio tudo”: só aviso a Meta das ações que o site me pede para avisar, seguindo as regras de privacidade do site.', es: 'Yo no “rastreo todo”: solo aviso a Meta de las acciones que el sitio me pide avisar, siguiendo las reglas de privacidad del sitio.' }],
          ['marina', { pt: 'Ahh, então ele é tipo um contador da minha loja! 😄', es: '¡Ahh, entonces es como un contador de mi tienda! 😄' }]
        ],
        pontos: [
          { pt: '<b>📏 Medir:</b> ver quantas vendas e visitas vieram dos anúncios.', es: '<b>📏 Medir:</b> ver cuántas ventas y visitas vinieron de los anuncios.' },
          { pt: '<b>🎯 Melhorar os anúncios:</b> a Meta aprende quem tem mais chance de comprar e mostra os anúncios para essas pessoas.', es: '<b>🎯 Mejorar los anuncios:</b> Meta aprende quién tiene más chance de comprar y muestra los anuncios a esas personas.' },
          { pt: '<b>👥 Criar públicos:</b> falar de novo com quem visitou a loja (por exemplo, quem pôs no carrinho e não comprou).', es: '<b>👥 Crear públicos:</b> volver a hablar con quien visitó la tienda (por ejemplo, quien puso en el carrito y no compró).' }
        ],
        notas: { pt: 'A Marina chega com uma ideia errada vinda da IA. O ponto da aula: corrigir a INFORMAÇÃO com gentileza, nunca a pessoa. O Pixel mede; quem vende é o negócio dela, com a ajuda dos anúncios.', es: 'Marina llega con una idea equivocada que vino de la IA. El punto de la clase: corregir la INFORMACIÓN con amabilidad, nunca a la persona. El Pixel mide; quien vende es su negocio, con la ayuda de los anuncios.' }
      },
      ferramenta: 'caminho-visita',
      praticar: {
        texto: { pt: 'Na Lojinha, o Pixel vai te guiar: abra um produto, ponha no carrinho e veja os avisos registrados no Consultor de Dados. É a prova de que ele conta o que as pessoas fazem.', es: 'En la Lojinha, el Pixel te guiará: abre un producto, ponlo en el carrito y mira los avisos registrados en el Asesor de datos. Es la prueba de que cuenta lo que hacen las personas.' },
        tour: 'pixel-em-acao', pagina: 'loja.html'
      },
      atender: {
        cena: { pt: 'A IA me disse que, com o Pixel, meus anúncios vendem sozinhos. Então posso parar de mexer neles? 🤖', es: 'La IA me dijo que, con el Pixel, mis anuncios venden solos. ¿Entonces puedo dejar de tocarlos? 🤖' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“O Pixel não vende sozinho: ele mede o que acontece no seu site. Com isso, você vê o resultado dos anúncios e a Meta entende quem tem mais chance de comprar. Seus anúncios continuam precisando de você.”', es: '“El Pixel no vende solo: mide lo que pasa en tu sitio. Con eso, ves el resultado de los anuncios y Meta entiende quién tiene más chance de comprar. Tus anuncios siguen necesitándote.”' }, fb: { pt: 'Isso! Você corrigiu a ideia com gentileza e explicou para que o Pixel serve, sem termo técnico.', es: '¡Eso! Corregiste la idea con amabilidad y explicaste para qué sirve el Pixel, sin términos técnicos.' } },
          { certa: false, txt: { pt: '“Isso mesmo, a IA está certa.”', es: '“Así es, la IA tiene razón.”' }, fb: { pt: 'Não. Confirmar uma ideia errada gera frustração depois: quando as vendas não vierem sozinhas, a cliente volta ainda mais chateada.', es: 'No. Confirmar una idea equivocada genera frustración después: cuando las ventas no lleguen solas, la clienta vuelve aún más molesta.' } },
          { certa: false, txt: { pt: '“Esquece a IA, ela não sabe de nada.”', es: '“Olvida la IA, no sabe nada.”' }, fb: { pt: 'Cuidado: isso soa como bronca e a cliente se fecha. Corrija a informação, não a pessoa nem a ferramenta que ela usou.', es: 'Cuidado: suena a regaño y la clienta se cierra. Corrige la información, no a la persona ni la herramienta que usó.' } },
          { certa: false, txt: { pt: '“O Pixel é um script JavaScript que dispara eventos pelo fbq e envia para o endpoint de conversões.”', es: '“El Pixel es un script JavaScript que dispara eventos por fbq y los envía al endpoint de conversiones.”' }, fb: { pt: 'Está certo, mas é técnico demais para quem está começando. Ela não entende e continua com a ideia errada.', es: 'Es correcto, pero demasiado técnico para quien está empezando. No lo entiende y sigue con la idea equivocada.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Você tem um site? (o Pixel é para site)', es: '¿Tienes un sitio web? (el Pixel es para sitios)' },
          { pt: 'O site é seu ou de uma plataforma de loja?', es: '¿El sitio es tuyo o de una plataforma de tienda?' },
          { pt: 'Você já tem um portfólio empresarial?', es: '¿Ya tienes un portafolio comercial?' }],
        conferir: [{ pt: 'O cliente entendeu que o Pixel MEDE (não vende sozinho).', es: 'El cliente entendió que el Pixel MIDE (no vende solo).' },
          { pt: 'Ele sabe os 3 usos: medir, melhorar os anúncios e criar públicos.', es: 'Conoce los 3 usos: medir, mejorar los anuncios y crear públicos.' },
          { pt: 'Se ele trouxe uma ideia de IA, você corrigiu a informação com gentileza.', es: 'Si trajo una idea de IA, corregiste la información con amabilidad.' }],
        frase: { pt: 'O Pixel não vende sozinho: ele mede o que acontece no seu site. Com isso, você vê o resultado dos anúncios e a Meta entende quem tem mais chance de comprar. Seus anúncios continuam precisando de você.', es: 'El Pixel no vende solo: mide lo que pasa en tu sitio. Con eso, ves el resultado de los anuncios y Meta entiende quién tiene más chance de comprar. Tus anuncios siguen necesitándote.' },
        encaminhar: { pt: 'Dúvidas jurídicas sobre dados pessoais e privacidade: oriente o cliente a consultar a Central de Privacidade da Meta (e, se for o caso, o jurídico dele). Não dê parecer jurídico.', es: 'Dudas legales sobre datos personales y privacidad: orienta al cliente a consultar el Centro de privacidad de Meta (y, si corresponde, su área legal). No des opinión legal.' }
      },
      fontes: [
        { url: 'https://developers.facebook.com/docs/meta-pixel', titulo: { pt: 'Meta Pixel · visão geral (o que é e para que serve)', es: 'Meta Pixel · descripción general (qué es y para qué sirve)' }, conferido: '13/10/2026' }
      ]
    },
    {
      id: '02', min: 7, status: 'pronta',
      titulo: { pt: 'Criar o Pixel e colocar no site', es: 'Crear el Pixel y ponerlo en el sitio' },
      antes: { pt: 'A Marina entendeu que o Pixel mede o que acontece no site. Agora ela quer o dela.', es: 'Marina entendió que el Pixel mide lo que pasa en el sitio. Ahora quiere el suyo.' },
      gancho: { pt: '“Coloquei! Mas como eu sei se está funcionando?” Vamos conferir com 3 perguntas.', es: '“¡Lo puse! ¿Pero cómo sé si está funcionando?” Vamos a revisarlo con 3 preguntas.' },
      objetivo: { pt: 'Saber onde o Pixel é criado (no Gerenciador de Eventos, dentro do portfólio) e os jeitos de colocar no site.', es: 'Saber dónde se crea el Pixel (en el Administrador de eventos, dentro del portafolio) y las formas de ponerlo en el sitio.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Quero o meu Pixel! A IA me mandou um código pronto do Pixel. Posso colar esse no meu site? 🤔', es: '¡Quiero mi Pixel! La IA me mandó un código listo del Pixel. ¿Puedo pegar ese en mi sitio? 🤔' }],
          ['rafa', { pt: 'Melhor não! Cada Pixel tem o seu próprio identificador. Um código de outro lugar manda os dados para o Pixel de outra pessoa (ou para lugar nenhum).', es: '¡Mejor no! Cada Pixel tiene su propio identificador. Un código de otro lugar manda los datos al Pixel de otra persona (o a ningún lado).' }],
          ['rafa', { pt: 'Você cria o seu no Gerenciador de Eventos, dentro do seu portfólio, e pega lá mesmo o código com o SEU número.', es: 'Creas el tuyo en el Administrador de eventos, dentro de tu portafolio, y ahí mismo tomas el código con TU número.' }],
          ['pixel', { pt: 'A Meta agora me chama de “conjunto de dados”. É o mesmo Pixel!', es: 'Meta ahora me llama “conjunto de datos”. ¡Es el mismo Pixel!' }],
          ['marina', { pt: 'E depois de criar, como coloco no site?', es: '¿Y después de crearlo, cómo lo pongo en el sitio?' }],
          ['rafa', { pt: 'Se sua loja é de uma plataforma (como a Shopify), dá para conectar pela integração. Se não, o código vai no topo de todas as páginas. Ou você manda o código para quem cuida do site.', es: 'Si tu tienda es de una plataforma (como Shopify), se puede conectar por la integración. Si no, el código va arriba en todas las páginas. O le mandas el código a quien cuida el sitio.' }]
        ],
        pontos: [
          { pt: '<b>Onde criar:</b> no Gerenciador de Eventos, dentro do portfólio empresarial (Conectar dados › Web).', es: '<b>Dónde crearlo:</b> en el Administrador de eventos, dentro del portafolio comercial (Conectar datos › Web).' },
          { pt: '<b>Um Pixel, um número:</b> o código tem que ter o identificador do Pixel DO CLIENTE. Nunca use código copiado de outro lugar.', es: '<b>Un Pixel, un número:</b> el código tiene que tener el identificador del Pixel DEL CLIENTE. Nunca uses código copiado de otro lugar.' },
          { pt: '<b>Como colocar no site:</b> pela integração da plataforma, no topo (&lt;head&gt;) de todas as páginas, ou enviando o código para quem cuida do site.', es: '<b>Cómo ponerlo en el sitio:</b> por la integración de la plataforma, arriba (&lt;head&gt;) en todas las páginas, o enviando el código a quien cuida el sitio.' }
        ],
        notas: { pt: 'O “código da IA” prepara a aula 03 (“é o Pixel certo?”). O agente não instala nada no site do cliente: ele explica onde criar, os jeitos de colocar e, se for preciso, orienta a chamar quem cuida do site.', es: 'El “código de la IA” prepara la clase 03 (“¿es el Pixel correcto?”). El agente no instala nada en el sitio del cliente: explica dónde crearlo, las formas de ponerlo y, si hace falta, orienta a llamar a quien cuida el sitio.' }
      },
      ferramenta: 'onde-colar',
      praticar: {
        texto: { pt: 'No simulador do Gerenciador de Eventos, o Pixel te guia para criar um Pixel do zero: Conectar dados, Web, o nome e onde fica o identificador.', es: 'En el simulador del Administrador de eventos, el Pixel te guía para crear un Pixel desde cero: Conectar datos, Web, el nombre y dónde está el identificador.' },
        tour: 'criar-pixel', pagina: 'meta-eventos.html'
      },
      atender: {
        cena: { pt: 'Criei o Pixel! 🎉 Meu sobrinho quer saber onde cola o código. A IA disse que é só colar na página inicial.', es: '¡Creé el Pixel! 🎉 Mi sobrino quiere saber dónde pega el código. La IA dijo que basta pegarlo en la página de inicio.' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“O código vai no topo de TODAS as páginas do site, não só na inicial. Se sua loja é de uma plataforma, dá para conectar pela integração, sem mexer em código.”', es: '“El código va arriba en TODAS las páginas del sitio, no solo en la de inicio. Si tu tienda es de una plataforma, se puede conectar por la integración, sin tocar código.”' }, fb: { pt: 'Isso! Você corrigiu a ideia da IA e ainda deu o caminho mais fácil (a integração), sem termo técnico.', es: '¡Eso! Corregiste la idea de la IA y además diste el camino más fácil (la integración), sin términos técnicos.' } },
          { certa: false, txt: { pt: '“Só na página inicial já basta.”', es: '“Solo en la página de inicio ya alcanza.”' }, fb: { pt: 'Não. O Pixel só mede onde está: a página de compra ficaria de fora e a cliente não veria as vendas.', es: 'No. El Pixel solo mide donde está: la página de compra quedaría fuera y la clienta no vería las ventas.' } },
          { certa: false, txt: { pt: '“Me passa a senha do seu site que eu colo para você.”', es: '“Pásame la contraseña de tu sitio y lo pego por ti.”' }, fb: { pt: 'Nunca! Não peça senha nem acesso ao site do cliente. Você orienta; quem mexe no site é o cliente ou quem cuida dele.', es: '¡Nunca! No pidas contraseña ni acceso al sitio del cliente. Tú orientas; quien toca el sitio es el cliente o quien lo cuida.' } },
          { certa: false, txt: { pt: '“Cola em qualquer lugar, tanto faz.”', es: '“Pégalo en cualquier lugar, da igual.”' }, fb: { pt: 'Não faz diferença? Faz, sim: fora do lugar certo o Pixel pode nem carregar ou deixar páginas sem medir.', es: '¿Da igual? No: fuera del lugar correcto el Pixel puede ni cargar o dejar páginas sin medir.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Você já criou o Pixel no Gerenciador de Eventos?', es: '¿Ya creaste el Pixel en el Administrador de eventos?' },
          { pt: 'Sua loja é de uma plataforma (como Shopify) ou foi feita sob medida?', es: '¿Tu tienda es de una plataforma (como Shopify) o fue hecha a medida?' },
          { pt: 'Quem cuida do código do seu site?', es: '¿Quién cuida el código de tu sitio?' }],
        conferir: [{ pt: 'O Pixel foi criado no portfólio certo (o da empresa do cliente).', es: 'El Pixel se creó en el portafolio correcto (el de la empresa del cliente).' },
          { pt: 'O código usado é o do Pixel dele, não um copiado de outro lugar.', es: 'El código usado es el de su Pixel, no uno copiado de otro lugar.' },
          { pt: 'O código está em todas as páginas (ou a integração da plataforma está ligada).', es: 'El código está en todas las páginas (o la integración de la plataforma está activa).' }],
        frase: { pt: 'O código vai no topo de todas as páginas do site, não só na inicial. Se sua loja é de uma plataforma, dá para conectar pela integração, sem mexer em código.', es: 'El código va arriba en todas las páginas del sitio, no solo en la de inicio. Si tu tienda es de una plataforma, se puede conectar por la integración, sin tocar código.' },
        passos: [{ pt: 'Abra o Gerenciador de Eventos e clique em Conectar dados.', es: 'Abre el Administrador de eventos y haz clic en Conectar datos.' },
          { pt: 'Escolha Web e clique em Avançar.', es: 'Elige Web y haz clic en Siguiente.' },
          { pt: 'Dê um nome ao Pixel e clique em Criar.', es: 'Ponle un nombre al Pixel y haz clic en Crear.' },
          { pt: 'Depois, coloque no site pela integração da sua plataforma ou cole o código no topo de todas as páginas.', es: 'Después, ponlo en el sitio por la integración de tu plataforma o pega el código arriba en todas las páginas.' }],
        encaminhar: { pt: 'Se o cliente não mexe em código e a loja não tem integração: oriente a enviar o código para quem cuida do site (desenvolvedor ou a plataforma da loja). Nunca peça senha ou acesso ao site.', es: 'Si el cliente no toca código y la tienda no tiene integración: oriéntalo a enviar el código a quien cuida el sitio (desarrollador o la plataforma de la tienda). Nunca pidas contraseña ni acceso al sitio.' }
      },
      fontes: [
        { url: 'https://developers.facebook.com/docs/meta-pixel/get-started', titulo: { pt: 'Meta Pixel · Primeiros passos (código no &lt;head&gt; de todas as páginas)', es: 'Meta Pixel · Primeros pasos (código en el &lt;head&gt; de todas las páginas)' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '03', min: 7, status: 'pronta',
      titulo: { pt: 'O Pixel está funcionando?', es: '¿El Pixel está funcionando?' },
      antes: { pt: 'Na aula anterior, a Marina criou o Pixel e colocou o código no site.', es: 'En la clase anterior, Marina creó el Pixel y puso el código en el sitio.' },
      gancho: { pt: 'As visitas estão chegando! Mas a Marina quer saber: “e quando alguém COMPRA, o Pixel percebe?” Vamos ver os eventos e parâmetros.', es: '¡Las visitas están llegando! Pero Marina quiere saber: “y cuando alguien COMPRA, ¿el Pixel se da cuenta?” Veremos los eventos y parámetros.' },
      objetivo: { pt: 'Saber se o Pixel está funcionando com 3 perguntas: tem Pixel no site? É o Pixel certo? As visitas (PageView) estão chegando?', es: 'Saber si el Pixel está funcionando con 3 preguntas: ¿hay Pixel en el sitio? ¿Es el Pixel correcto? ¿Están llegando las visitas (PageView)?' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Oi! Coloquei o Pixel no meu site ontem. 🎉 Mas como eu sei se ele está funcionando?', es: '¡Hola! Puse el Pixel en mi sitio ayer. 🎉 ¿Pero cómo sé si está funcionando?' }],
          ['rafa', { pt: 'Oi, Marina! Dá para saber com 3 perguntas: tem Pixel no site? É o Pixel certo, o seu? E as visitas estão chegando?', es: '¡Hola, Marina! Se sabe con 3 preguntas: ¿hay Pixel en el sitio? ¿Es el Pixel correcto, el tuyo? ¿Y las visitas están llegando?' }],
          ['marina', { foto: 'codigo-base', legenda: { pt: 'Marina enviou uma foto.', es: 'Marina envió una foto.' } }],
          ['marina', { pt: 'Meu sobrinho achou isso no código do site. É ele?', es: 'Mi sobrino encontró esto en el código del sitio. ¿Es él?' }],
          ['rafa', { pt: 'É ele, sim! E as 3 respostas estão aí dentro. Já te mostro onde.', es: '¡Sí, es él! Y las 3 respuestas están ahí adentro. Ya te muestro dónde.' }],
          ['pixel', { pt: 'Cada página aberta no site me faz avisar a Meta: “teve uma visita!”. Esse aviso se chama PageView.', es: 'Cada página abierta en el sitio me hace avisar a Meta: “¡hubo una visita!”. Ese aviso se llama PageView.' }]
        ],
        pontos: [
          { pt: '<b>Tem Pixel no site?</b> Se o código não está no site, nada é medido.', es: '<b>¿Hay Pixel en el sitio?</b> Si el código no está en el sitio, no se mide nada.' },
          { pt: '<b>É o Pixel certo?</b> O identificador do Pixel no site tem que ser o mesmo do Gerenciador de Eventos do cliente. Se for de outro Pixel, os eventos vão para outro lugar.', es: '<b>¿Es el Pixel correcto?</b> El identificador del Pixel en el sitio tiene que ser el mismo del Administrador de eventos del cliente. Si es de otro Pixel, los eventos van a otro lugar.' },
          { pt: '<b>As visitas estão chegando?</b> O PageView aparece em minutos no Gerenciador de Eventos (em Testar eventos, na hora).', es: '<b>¿Están llegando las visitas?</b> El PageView aparece en minutos en el Administrador de eventos (en Probar eventos, al instante).' }
        ],
        notas: { pt: 'A aula inteira gira em torno de 3 perguntas. O código aparece só para mostrar ONDE as respostas moram; no atendimento, o agente confere pelo Gerenciador de Eventos, pelo print do cliente ou pela extensão. Se o código estiver estranho (duplicado, editado, faltando partes), o cliente chama quem cuida do site.', es: 'Toda la clase gira en torno a 3 preguntas. El código aparece solo para mostrar DÓNDE viven las respuestas; en la atención, el agente revisa por el Administrador de eventos, la captura del cliente o la extensión. Si el código está raro (duplicado, editado, con partes faltantes), el cliente llama a quien cuida el sitio.' }
      },
      ferramenta: 'codigo-base',
      praticar: {
        texto: { pt: 'Há vários jeitos de ver as 3 coisas (tem Pixel? qual é o ID? o PageView chega?). Escolha um e o Pixel te guia. Comece pelo primeiro: é o que mais se usa no atendimento.', es: 'Hay varias formas de ver las 3 cosas (¿hay Pixel? ¿cuál es el ID? ¿llega el PageView?). Elige una y el Pixel te guía. Empieza por la primera: es la que más se usa en la atención.' },
        opcoes: [
          { id: 'gerenciador', icone: '📡', pagina: 'meta-eventos.html', tour: 'gerenciador-pixel', selo: { pt: 'mais usado', es: 'el más usado' },
            tit: { pt: 'Gerenciador de Eventos', es: 'Administrador de eventos' }, txt: { pt: 'Ver o ID do Pixel e o PageView chegando em Testar eventos.', es: 'Ver el ID del Pixel y el PageView llegando en Probar eventos.' } },
          { id: 'print', icone: '📸', pagina: 'pratica.html?p=print-pixel', tour: 'print-pixel',
            tit: { pt: 'Print do cliente', es: 'Captura del cliente' }, txt: { pt: 'Como pedir o print certo (com o caminho exato) e o que ler nele.', es: 'Cómo pedir la captura correcta (con el camino exacto) y qué leer en ella.' } },
          { id: 'extensao', icone: '🔎', pagina: 'loja.html', tour: 'extensao-pixel',
            tit: { pt: 'Extensão Consultor de Dados', es: 'Extensión Asesor de datos' }, txt: { pt: 'Abrir o site do cliente e ver o Pixel, o ID e os eventos.', es: 'Abrir el sitio del cliente y ver el Pixel, el ID y los eventos.' } },
          { id: 'codigo', icone: '🧑‍💻', pagina: 'loja.html?lab=1', tour: 'achar-codigo', selo: { pt: 'técnico', es: 'técnico' },
            tit: { pt: 'Código-fonte da página', es: 'Código fuente de la página' }, txt: { pt: 'Achar o comentário, o init e o PageView direto no código (como Ctrl+U ou F12).', es: 'Encontrar el comentario, el init y el PageView directo en el código (como Ctrl+U o F12).' } }
        ]
      },
      atender: {
        cena: { pt: 'Instalei o Pixel ontem e nenhum evento aparece no meu Gerenciador de Eventos. 😩', es: 'Instalé el Pixel ayer y no aparece ningún evento en mi Administrador de eventos. 😩' },
        pergunta: { pt: 'O que você responde primeiro?', es: '¿Qué respondes primero?' },
        opcoes: [
          { certa: true, txt: { pt: '“Pode me confirmar o identificador do seu Pixel? Se não souber onde ver, posso te ajudar com o passo a passo.”', es: '“¿Puedes confirmarme el identificador de tu Pixel? Si no sabes dónde verlo, puedo ayudarte con el paso a paso.”' }, fb: { pt: 'Boa! Com o identificador você abre o Pixel certo no Gerenciador de Eventos e confere se os eventos chegam. E oferecer o passo a passo evita que o cliente trave.', es: '¡Bien! Con el identificador abres el Pixel correcto en el Administrador de eventos y revisas si llegan los eventos. Y ofrecer el paso a paso evita que el cliente se trabe.' } },
          { certa: false, txt: { pt: '“É normal, os eventos levam até 7 dias para aparecer.”', es: '“Es normal, los eventos tardan hasta 7 días en aparecer.”' }, fb: { pt: 'Não. Os eventos aparecem em minutos (no Testar eventos, na hora). Esperar só atrasa a solução.', es: 'No. Los eventos aparecen en minutos (en Probar eventos, al instante). Esperar solo retrasa la solución.' } },
          { certa: false, txt: { pt: '“Vou te encaminhar agora para um desenvolvedor.”', es: '“Te voy a derivar ahora a un desarrollador.”' }, fb: { pt: 'Ainda não. Primeiro descubra a causa: muitas vezes é só o site usando outro Pixel, e isso você confere com o cliente. Encaminhe só se for preciso mexer no site e o cliente não souber.', es: 'Todavía no. Primero descubre la causa: muchas veces es solo que el sitio usa otro Pixel, y eso lo revisas con el cliente. Deriva solo si hay que tocar el sitio y el cliente no sabe.' } },
          { certa: false, txt: { pt: '“Apague o Pixel e instale de novo.”', es: '“Borra el Pixel e instálalo de nuevo.”' }, fb: { pt: 'Não! Sem saber a causa, reinstalar pode criar um Pixel duplicado e piorar o problema.', es: '¡No! Sin saber la causa, reinstalar puede crear un Pixel duplicado y empeorar el problema.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Pode me confirmar o identificador do seu Pixel?', es: '¿Puedes confirmarme el identificador de tu Pixel?' },
          { pt: 'Qual é o endereço do seu site?', es: '¿Cuál es la dirección de tu sitio?' },
          { pt: 'Se não souber: pode me mandar um print do Gerenciador de Eventos, com o seu Pixel aberto?', es: 'Si no sabe: ¿puedes enviarme una captura del Administrador de eventos, con tu Pixel abierto?' }],
        conferir: [{ pt: 'O Pixel do site é o mesmo do Gerenciador de Eventos (mesmo identificador, número por número).', es: 'El Pixel del sitio es el mismo del Administrador de eventos (mismo identificador, número por número).' },
          { pt: 'O PageView está chegando (Testar eventos).', es: 'El PageView está llegando (Probar eventos).' },
          { pt: 'Aparece só um Pixel no site (não está duplicado).', es: 'Aparece un solo Pixel en el sitio (no está duplicado).' },
          { pt: 'Se um jeito não der, tente outro: Gerenciador de Eventos → print do cliente → extensão → código-fonte.', es: 'Si una forma no funciona, prueba otra: Administrador de eventos → captura del cliente → extensión → código fuente.' }],
        frase: { pt: 'Pode me confirmar o identificador do seu Pixel? Se não souber onde ver, posso te ajudar com o passo a passo.', es: '¿Puedes confirmarme el identificador de tu Pixel? Si no sabes dónde verlo, puedo ayudarte con el paso a paso.' },
        passos: [{ pt: 'Abra o Gerenciador de Eventos.', es: 'Abre el Administrador de eventos.' },
          { pt: 'Clique no seu Pixel.', es: 'Haz clic en tu Pixel.' },
          { pt: 'O identificador é o número que aparece embaixo do nome do Pixel. Pode copiar e me mandar (ou mandar um print da tela inteira).', es: 'El identificador es el número que aparece debajo del nombre del Pixel. Puedes copiarlo y enviármelo (o enviar una captura de la pantalla completa).' }],
        encaminhar: { pt: 'Se o site está usando outro Pixel, o Pixel aparece duplicado ou falta o código, e o cliente não sabe mexer no site: oriente a falar com quem cuida do site (desenvolvedor ou a plataforma da loja).', es: 'Si el sitio usa otro Pixel, el Pixel aparece duplicado o falta el código, y el cliente no sabe tocar el sitio: oriéntalo a hablar con quien cuida el sitio (desarrollador o la plataforma de la tienda).' }
      },
      fontes: [
        { url: 'https://developers.facebook.com/docs/meta-pixel/get-started', titulo: { pt: 'Meta Pixel · Primeiros passos (código base e onde colocar)', es: 'Meta Pixel · Primeros pasos (código base y dónde colocarlo)' }, conferido: '13/10/2026' }
      ]
    },
    {
      id: '04', min: 8, status: 'pronta',
      titulo: { pt: 'Ele sabe quando alguém compra?', es: '¿Sabe cuándo alguien compra?' },
      antes: { pt: 'O Pixel da Marina está funcionando: as visitas (PageView) chegam.', es: 'El Pixel de Marina está funcionando: las visitas (PageView) llegan.' },
      gancho: { pt: '“O valor aparece zerado e agora tem um AVISO no Gerenciador de Eventos… quebrei alguma coisa?” Na próxima aula você vira detetive: descobre o que está falhando, explica para a cliente e decide se resolvem juntos ou se encaminha.', es: '“El valor aparece en cero y ahora hay un AVISO en el Administrador de eventos… ¿rompí algo?” En la próxima clase te vuelves detective: descubres qué está fallando, se lo explicas a la clienta y decides si lo resuelven juntos o si lo derivas.' },
      objetivo: { pt: 'Entender eventos (o que aconteceu) e parâmetros (os detalhes), e conferir se a compra chega com valor e moeda.', es: 'Entender eventos (lo que pasó) y parámetros (los detalles), y revisar si la compra llega con valor y moneda.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'As visitas chegam! 🙌 Mas o que eu quero saber é: quando alguém COMPRA, o Pixel percebe? E sabe quanto eu vendi? 💰', es: '¡Las visitas llegan! 🙌 Pero lo que quiero saber es: cuando alguien COMPRA, ¿el Pixel se da cuenta? ¿Y sabe cuánto vendí? 💰' }],
          ['rafa', { pt: 'Percebe, se o site avisar! Cada ação importante tem um nome, que é o evento: ver um produto é ViewContent, pôr no carrinho é AddToCart, comprar é Purchase.', es: '¡Se da cuenta, si el sitio avisa! Cada acción importante tiene un nombre, que es el evento: ver un producto es ViewContent, poner en el carrito es AddToCart, comprar es Purchase.' }],
          ['rafa', { pt: 'Junto com o evento vão os detalhes, que são os parâmetros. Na compra, são o valor e a moeda, por exemplo 89,90 em reais.', es: 'Junto con el evento van los detalles, que son los parámetros. En la compra, son el valor y la moneda, por ejemplo 89,90 en reales.' }],
          ['pixel', { pt: 'Sem valor e moeda, eu até aviso que teve uma compra, mas a Meta não sabe quanto rendeu.', es: 'Sin valor y moneda, aviso que hubo una compra, pero Meta no sabe cuánto rindió.' }],
          ['marina', { pt: 'Ah, então o evento é O QUE aconteceu e o parâmetro é o detalhe! 💡', es: '¡Ah, entonces el evento es LO QUE pasó y el parámetro es el detalle! 💡' }]
        ],
        pontos: [
          { pt: '<b>Evento = o que aconteceu.</b> A Meta tem nomes padrão: PageView, ViewContent, AddToCart, InitiateCheckout, Purchase…', es: '<b>Evento = lo que pasó.</b> Meta tiene nombres estándar: PageView, ViewContent, AddToCart, InitiateCheckout, Purchase…' },
          { pt: '<b>Parâmetro = o detalhe:</b> o valor, a moeda, o produto, a quantidade.', es: '<b>Parámetro = el detalle:</b> el valor, la moneda, el producto, la cantidad.' },
          { pt: '<b>Na compra (Purchase), valor e moeda são obrigatórios.</b> Sem eles, a Meta não sabe quanto o anúncio rendeu.', es: '<b>En la compra (Purchase), valor y moneda son obligatorios.</b> Sin ellos, Meta no sabe cuánto rindió el anuncio.' }
        ],
        notas: { pt: 'Mostre o caminho da compra como uma história: cada passo da cliente vira um evento. O agente não escreve código: ele confere se o evento chega e se tem valor e moeda; o ajuste é com quem cuida do site.', es: 'Muestra el camino de la compra como una historia: cada paso de la clienta se vuelve un evento. El agente no escribe código: revisa si el evento llega y si tiene valor y moneda; el ajuste es con quien cuida el sitio.' }
      },
      ferramenta: 'explorador',
      praticar: {
        texto: { pt: 'Na Lojinha, o Pixel te guia numa compra completa (de mentirinha): produto, carrinho, pagamento e a página de obrigado. No fim, você acha o Purchase com o valor e a moeda no Consultor de Dados.', es: 'En la Lojinha, el Pixel te guía en una compra completa (de mentira): producto, carrito, pago y la página de gracias. Al final, encuentras el Purchase con el valor y la moneda en el Asesor de datos.' },
        tour: 'compra-completa', pagina: 'loja.html'
      },
      atender: {
        cena: { pt: 'No Gerenciador de Eventos aparece Purchase, mas o valor das vendas aparece zerado. 🤔', es: 'En el Administrador de eventos aparece Purchase, pero el valor de las ventas aparece en cero. 🤔' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Achei: o Pixel está avisando a compra, mas sem o valor e a moeda. O Pixel funciona; o que falta são os detalhes da compra. Vamos ver juntos de onde vem isso.”', es: '“Lo encontré: el Pixel está avisando la compra, pero sin el valor ni la moneda. El Pixel funciona; lo que falta son los detalles de la compra. Veamos juntos de dónde viene.”' }, fb: { pt: 'Isso! Você identificou o problema (faltam os parâmetros) e tranquilizou a cliente. Na próxima aula você aprende a investigar a causa e decidir se resolve junto com o cliente ou se encaminha.', es: '¡Eso! Identificaste el problema (faltan los parámetros) y tranquilizaste a la clienta. En la próxima clase aprendes a investigar la causa y decidir si lo resuelves con el cliente o si lo derivas.' } },
          { certa: false, txt: { pt: '“Isso é normal, o valor aparece depois.”', es: '“Es normal, el valor aparece después.”' }, fb: { pt: 'Não. Se o site não manda o valor, ele nunca aparece sozinho.', es: 'No. Si el sitio no envía el valor, nunca aparece solo.' } },
          { certa: false, txt: { pt: '“Apague o Pixel e crie outro.”', es: '“Borra el Pixel y crea otro.”' }, fb: { pt: 'Não. O Pixel está funcionando (o Purchase chega): o que falta são os detalhes da compra.', es: 'No. El Pixel está funcionando (el Purchase llega): lo que falta son los detalles de la compra.' } },
          { certa: false, txt: { pt: '“Troque o Purchase por PageView.”', es: '“Cambia el Purchase por PageView.”' }, fb: { pt: 'Não! Aí a compra deixa de ser medida de vez. PageView é só a visita.', es: '¡No! Así la compra deja de medirse por completo. PageView es solo la visita.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual evento aparece no Gerenciador de Eventos quando alguém compra?', es: '¿Qué evento aparece en el Administrador de eventos cuando alguien compra?' },
          { pt: 'Nesse evento aparecem o valor e a moeda?', es: '¿En ese evento aparecen el valor y la moneda?' },
          { pt: 'Sua loja é de uma plataforma (como Shopify) ou foi feita sob medida?', es: '¿Tu tienda es de una plataforma (como Shopify) o fue hecha a medida?' }],
        conferir: [{ pt: 'Depois de uma compra, o Purchase chega (Testar eventos ou Consultor de Dados).', es: 'Después de una compra, el Purchase llega (Probar eventos o Asesor de datos).' },
          { pt: 'O Purchase tem value (valor) e currency (moeda).', es: 'El Purchase tiene value (valor) y currency (moneda).' },
          { pt: 'A moeda é a da loja (por exemplo, BRL).', es: 'La moneda es la de la tienda (por ejemplo, BRL).' }],
        frase: { pt: 'Achei: o Pixel está avisando a compra, mas sem o valor e a moeda. O Pixel funciona; o que falta são os detalhes da compra. Vamos ver juntos de onde vem isso.', es: 'Lo encontré: el Pixel está avisando la compra, pero sin el valor ni la moneda. El Pixel funciona; lo que falta son los detalles de la compra. Veamos juntos de dónde viene.' },
        encaminhar: { pt: 'Falta value/currency: em site feito sob medida, quem ajusta é o desenvolvedor; em loja de plataforma, a integração ou o suporte da plataforma.', es: 'Falta value/currency: en un sitio hecho a medida, lo ajusta el desarrollador; en tienda de plataforma, la integración o el soporte de la plataforma.' }
      },
      fontes: [
        { url: 'https://developers.facebook.com/docs/meta-pixel/reference', titulo: { pt: 'Meta Pixel · Referência (eventos padrão; no Purchase, value e currency são obrigatórios)', es: 'Meta Pixel · Referencia (eventos estándar; en Purchase, value y currency son obligatorios)' }, conferido: '14/10/2026' }
      ]
    },
    { id: '05', titulo: { pt: 'Apareceu um aviso: quebrei alguma coisa?', es: 'Apareció un aviso: ¿rompí algo?' }, status: 'planejada' }
  ],
  'pixel-avancado': [
    { id: '01', titulo: { pt: 'Correspondência avançada', es: 'Coincidencia avanzada' }, status: 'planejada' },
    { id: '02', titulo: { pt: 'Qualidade do sinal', es: 'Calidad de la señal' }, status: 'planejada' },
    { id: '03', titulo: { pt: 'API de Conversões e deduplicação', es: 'API de conversiones y deduplicación' }, status: 'planejada' },
    { id: '04', titulo: { pt: 'Privacidade e regras', es: 'Privacidad y reglas' }, status: 'planejada' }
  ]
};
