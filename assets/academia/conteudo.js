/* Conteúdo da plataforma (PT | ES). Toda frase é {pt, es}.
   MODULOS = a trilha (projeção do André). AULAS = aulas de cada módulo.
   Cada aula tem sempre as mesmas partes, nesta ordem: ver · ferramenta · praticar · caso · fontes. */
window.MODULOS = [
  { id: 'pixel', status: 'construcao', icone: '📡', titulo: { pt: 'Introdução ao Pixel', es: 'Introducción al Pixel' }, resumo: { pt: 'O que é, como instalar, o Gerenciador de Eventos e a solução de problemas.', es: 'Qué es, cómo instalarlo, el Administrador de eventos y la solución de problemas.' } },
  { id: 'portfolio', status: 'planejado', icone: '🏢', titulo: { pt: 'Portfólio empresarial · básico', es: 'Portafolio comercial · básico' }, resumo: { pt: 'Como configurar o portfólio e seus principais recursos.', es: 'Cómo configurar el portafolio y sus principales recursos.' } },
  { id: 'portfolio-avancado', status: 'planejado', icone: '🧰', titulo: { pt: 'Portfólio empresarial · avançado', es: 'Portafolio comercial · avanzado' }, resumo: { pt: 'Como verificar e corrigir erros no portfólio.', es: 'Cómo verificar y corregir errores en el portafolio.' } },
  { id: 'catalogo', status: 'planejado', icone: '🗂️', titulo: { pt: 'Catálogo', es: 'Catálogo' }, resumo: { pt: 'Introdução, como criar e como manter.', es: 'Introducción, cómo crearlo y cómo mantenerlo.' } },
  { id: 'anuncios', status: 'planejado', icone: '📣', titulo: { pt: 'Gerenciador de Anúncios · criação e edição', es: 'Administrador de anuncios · creación y edición' }, resumo: { pt: 'Criar e editar anúncios, e os erros mais comuns.', es: 'Crear y editar anuncios, y los errores más comunes.' } },
  { id: 'feed', status: 'planejado', icone: '📰', titulo: { pt: 'Anúncios no Feed', es: 'Anuncios en el Feed' }, resumo: { pt: 'O que são e erros comuns.', es: 'Qué son y errores comunes.' } },
  { id: 'instagram', status: 'planejado', icone: '📸', titulo: { pt: 'Instagram para empresas', es: 'Instagram para empresas' }, resumo: { pt: 'Como funciona o Instagram para empresas e seus anúncios.', es: 'Cómo funciona Instagram para empresas y sus anuncios.' } },
  { id: 'regras', status: 'planejado', icone: '⚙️', titulo: { pt: 'Gerenciador de Anúncios · regras automatizadas', es: 'Administrador de anuncios · reglas automatizadas' }, resumo: { pt: 'Como funcionam e como configurar.', es: 'Cómo funcionan y cómo configurarlas.' } },
  { id: 'relatorios', status: 'planejado', icone: '📊', titulo: { pt: 'Relatórios e métricas', es: 'Informes y métricas' }, resumo: { pt: 'Criar e interpretar relatórios; o efeito das mudanças de privacidade do iOS.', es: 'Crear e interpretar informes; el efecto de los cambios de privacidad de iOS.' } },
  { id: 'segmentacao', status: 'planejado', icone: '🎯', titulo: { pt: 'Segmentação', es: 'Segmentación' }, resumo: { pt: 'Parâmetros, categorias especiais e erros comuns.', es: 'Parámetros, categorías especiales y errores comunes.' } },
  { id: 'entrega', status: 'planejado', icone: '🚚', titulo: { pt: 'Entrega de anúncios', es: 'Entrega de anuncios' }, resumo: { pt: 'Como a entrega funciona, a fase de aprendizado e a solução de problemas.', es: 'Cómo funciona la entrega, la fase de aprendizaje y la solución de problemas.' } },
  { id: 'verified', status: 'planejado', icone: '✅', titulo: { pt: 'Meta Verified para empresas', es: 'Meta Verified para empresas' }, resumo: { pt: 'O que é, recursos, escopo e casos.', es: 'Qué es, funciones, alcance y casos.' } },
  { id: 'commerce', status: 'planejado', icone: '🛍️', titulo: { pt: 'Introdução ao Commerce', es: 'Introducción a Commerce' }, resumo: { pt: 'O que é e qual o escopo.', es: 'Qué es y cuál es el alcance.' } },
  { id: 'shop-ads', status: 'planejado', icone: '🛒', titulo: { pt: 'Anúncios de loja (Shop Ads)', es: 'Anuncios de tienda (Shop Ads)' }, resumo: { pt: 'Como funcionam e a finalização da compra fora da Meta: URL de checkout e métricas.', es: 'Cómo funcionan y el pago fuera de Meta: URL de checkout y métricas.' } },
  { id: 'mbe', status: 'planejado', icone: '🔌', titulo: { pt: 'Meta Business Extension e parceiros', es: 'Meta Business Extension y socios' }, resumo: { pt: 'Integração com plataformas parceiras e erros possíveis.', es: 'Integración con plataformas socias y errores posibles.' } },
  { id: 'shopify', status: 'planejado', icone: '🧩', titulo: { pt: 'Shopify e Meta', es: 'Shopify y Meta' }, resumo: { pt: 'Como integrar, solução de problemas e redirecionamento.', es: 'Cómo integrar, solución de problemas y redirección.' } },
  { id: 'whatsapp', status: 'depois', icone: '💬', titulo: { pt: 'WhatsApp', es: 'WhatsApp' }, resumo: { pt: 'Fica para depois.', es: 'Para más adelante.' } },
];

window.AULAS = {
  pixel: [
    { id: '01', titulo: { pt: 'O que é o Pixel e onde ele mora', es: 'Qué es el Pixel y dónde vive' }, status: 'planejada' },
    {
      id: '02', min: 7, status: 'pronta',
      titulo: { pt: 'O código base do Pixel', es: 'El código base del Pixel' },
      objetivo: { pt: 'Reconhecer o código base num site e achar as 3 coisas que importam: o ID, o PageView e o lugar onde ele está.', es: 'Reconocer el código base en un sitio y encontrar las 3 cosas que importan: el ID, el PageView y el lugar donde está.' },
      ver: {
        dialogo: [
          ['marina', { pt: 'Esse monte de letra é o tal Pixel? Eu vou ter que decorar isso?', es: '¿Este montón de letras es el famoso Pixel? ¿Voy a tener que memorizar esto?' }],
          ['rafa', { pt: 'Não precisa decorar nada! O bloco do meio ninguém mexe. Só precisa saber achar três coisas: o ID do Pixel, o PageView e onde o código está na página.', es: '¡No tienes que memorizar nada! El bloque del medio nadie lo toca. Solo tienes que saber encontrar tres cosas: el ID del Pixel, el PageView y dónde está el código en la página.' }],
          ['pixel', { pt: 'Eu sou o Pixel! Esse código é o que me coloca para trabalhar no site.', es: '¡Soy el Pixel! Este código es el que me pone a trabajar en el sitio.' }]
        ],
        pontos: [
          { pt: '<b>O ID</b> está no <code>fbq(\'init\', \'…\')</code>. Ele diz para qual Pixel os eventos vão. ID errado = eventos chegando em outro Pixel.', es: '<b>El ID</b> está en <code>fbq(\'init\', \'…\')</code>. Dice a qué Pixel van los eventos. ID equivocado = eventos llegando a otro Pixel.' },
          { pt: '<b>O PageView</b> (<code>fbq(\'track\', \'PageView\')</code>) conta cada visita. A Meta recomenda manter essa linha.', es: '<b>El PageView</b> (<code>fbq(\'track\', \'PageView\')</code>) cuenta cada visita. Meta recomienda mantener esa línea.' },
          { pt: '<b>O lugar:</b> entre <code>&lt;head&gt;</code> e <code>&lt;/head&gt;</code>, em todas as páginas. Assim ele carrega cedo e corre menos risco de ser bloqueado.', es: '<b>El lugar:</b> entre <code>&lt;head&gt;</code> y <code>&lt;/head&gt;</code>, en todas las páginas. Así carga temprano y corre menos riesgo de ser bloqueado.' }
        ],
        notas: { pt: 'Não leia o código linha a linha para a turma: use a ferramenta e passe só pelos destaques. A mensagem é: o meio não se mexe; o que importa é o ID, o PageView e o lugar.', es: 'No leas el código línea por línea al grupo: usa la herramienta y pasa solo por los destacados. El mensaje es: el medio no se toca; lo que importa es el ID, el PageView y el lugar.' }
      },
      ferramenta: 'codigo-base',
      praticar: {
        texto: { pt: 'O botão abre a Lojinha já no <b>Modo aula</b>, na aba <b>📄 Código</b>, que mostra o código desta página. Ache: o comentário <code>Meta Pixel Code</code>, o endereço <code>fbevents.js</code> e o <code>fbq(\'init\')</code>.', es: 'El botón abre la Lojinha ya en el <b>Modo aula</b>, en la pestaña <b>📄 Código</b>, que muestra el código de esta página. Encuentra: el comentario <code>Meta Pixel Code</code>, la dirección <code>fbevents.js</code> y el <code>fbq(\'init\')</code>.' },
        botoes: [
          { href: 'loja.html?aula=codigo', rotulo: { pt: '🏪 Abrir a Lojinha no Modo aula › Código', es: '🏪 Abrir la Lojinha en Modo aula › Código' } },
          { href: 'meta-eventos.html?tour=criar-pixel', rotulo: { pt: '🕹️ Ver o código no simulador', es: '🕹️ Ver el código en el simulador' } }
        ]
      },
      caso: {
        cena: { pt: 'Um anunciante diz: <i>“Instalei o Pixel ontem e nenhum evento aparece no meu Gerenciador de Eventos.”</i> Ele manda o código do site, e você vê <code>fbq(\'init\', \'847291036615204\')</code>. No Gerenciador dele, o Pixel tem o ID <code>847291036615240</code>.', es: 'Un anunciante dice: <i>“Instalé el Pixel ayer y no aparece ningún evento en mi Administrador de eventos.”</i> Envía el código del sitio y ves <code>fbq(\'init\', \'847291036615204\')</code>. En su Administrador, el Pixel tiene el ID <code>847291036615240</code>.' },
        pergunta: { pt: 'Qual é a causa mais provável?', es: '¿Cuál es la causa más probable?' },
        opcoes: [
          { certa: true, txt: { pt: 'O ID no init está diferente do ID do Pixel (os dois últimos números trocados).', es: 'El ID del init es diferente del ID del Pixel (los dos últimos números cambiados).' }, fb: { pt: 'Isso! Os eventos estão indo para outro Pixel. Compare o ID do <code>init</code> com o do Gerenciador, número por número.', es: '¡Eso! Los eventos van a otro Pixel. Compara el ID del <code>init</code> con el del Administrador, número por número.' } },
          { certa: false, txt: { pt: 'Falta a parte do <code>&lt;noscript&gt;</code>.', es: 'Falta la parte del <code>&lt;noscript&gt;</code>.' }, fb: { pt: 'Não é isso. O noscript é só um plano B para quem está sem JavaScript, e registra apenas o PageView. Sem ele, os eventos normais continuam saindo.', es: 'No es eso. El noscript es solo un plan B para quien no tiene JavaScript y registra solo el PageView. Sin él, los eventos normales siguen saliendo.' } },
          { certa: false, txt: { pt: 'O código precisa ficar no <code>&lt;body&gt;</code>, não no <code>&lt;head&gt;</code>.', es: 'El código tiene que estar en el <code>&lt;body&gt;</code>, no en el <code>&lt;head&gt;</code>.' }, fb: { pt: 'É o contrário: a Meta recomenda o <code>&lt;head&gt;</code>. E mesmo fora do lugar ideal, o Pixel costuma funcionar. Não explicaria “nenhum evento”.', es: 'Es al revés: Meta recomienda el <code>&lt;head&gt;</code>. Y aunque esté fuera del lugar ideal, el Pixel suele funcionar. No explicaría “ningún evento”.' } },
          { certa: false, txt: { pt: 'Ele precisa apagar a linha do PageView para os outros eventos aparecerem.', es: 'Tiene que borrar la línea del PageView para que aparezcan los otros eventos.' }, fb: { pt: 'Não! A Meta recomenda manter o PageView. Os outros eventos são acrescentados, nunca no lugar dele.', es: '¡No! Meta recomienda mantener el PageView. Los otros eventos se agregan, nunca en su lugar.' } }
        ]
      },
      fontes: [
        { url: 'https://developers.facebook.com/docs/meta-pixel/get-started', titulo: { pt: 'Meta Pixel · Primeiros passos (código base e onde colocar)', es: 'Meta Pixel · Primeros pasos (código base y dónde colocarlo)' }, conferido: '13/10/2026' }
      ]
    },
    { id: '03', titulo: { pt: 'Eventos e parâmetros', es: 'Eventos y parámetros' }, status: 'planejada' },
    { id: '04', titulo: { pt: 'Criar o Pixel e instalar no site', es: 'Crear el Pixel e instalarlo en el sitio' }, status: 'planejada' },
    { id: '05', titulo: { pt: 'Testar eventos e o Consultor de Dados', es: 'Probar eventos y el Asesor de datos' }, status: 'planejada' },
    { id: '06', titulo: { pt: 'Correspondência avançada', es: 'Coincidencia avanzada' }, status: 'planejada' },
    { id: '07', titulo: { pt: 'O Gerenciador de Eventos e a bússola', es: 'El Administrador de eventos y la brújula' }, status: 'planejada' },
    { id: '08', titulo: { pt: 'Qualidade do sinal', es: 'Calidad de la señal' }, status: 'planejada' },
    { id: '09', titulo: { pt: 'API de Conversões e deduplicação', es: 'API de conversiones y deduplicación' }, status: 'planejada' },
    { id: '10', titulo: { pt: 'Pixel e catálogo', es: 'Pixel y catálogo' }, status: 'planejada' },
    { id: '11', titulo: { pt: 'Privacidade e regras', es: 'Privacidad y reglas' }, status: 'planejada' },
    { id: '12', titulo: { pt: 'Solução de problemas', es: 'Solución de problemas' }, status: 'planejada' }
  ]
};
