/* Conteúdo da plataforma (PT | ES). Toda frase é {pt, es}.
   MODULOS = a trilha (projeção do André). AULAS = aulas de cada módulo.
   Cada aula tem sempre as mesmas partes, nesta ordem: entender · ver de perto (ferramenta) · praticar (guiado) · atender (+ cola) · fontes.
   Foco: o agente entende, identifica o problema e orienta o cliente; o que é técnico demais vai para o desenvolvedor. */
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
      id: '02', min: 6, status: 'pronta',
      titulo: { pt: 'O código base do Pixel', es: 'El código base del Pixel' },
      objetivo: { pt: 'Achar o Pixel no código de um site e conferir as 3 coisas que importam: o comentário, o ID e o PageView.', es: 'Encontrar el Pixel en el código de un sitio y revisar las 3 cosas que importan: el comentario, el ID y el PageView.' },
      entender: {
        dialogo: [
          ['marina', { foto: 'codigo-base', legenda: { pt: 'Marina enviou uma foto.', es: 'Marina envió una foto.' } }],
          ['marina', { pt: 'Oi! Achei isso no código do meu site. Isso é o Pixel? Tá certo?', es: '¡Hola! Encontré esto en el código de mi sitio. ¿Esto es el Pixel? ¿Está bien?' }],
          ['rafa', { pt: 'Oi, Marina! É ele, sim. Para conferir, não precisa entender o código todo: vou olhar só três coisas.', es: '¡Hola, Marina! Sí, es él. Para revisarlo no hace falta entender todo el código: voy a mirar solo tres cosas.' }],
          ['pixel', { pt: 'As 3 coisas: o comentário que me marca, o meu número (ID) e o PageView. O resto é técnico.', es: 'Las 3 cosas: el comentario que me marca, mi número (ID) y el PageView. El resto es técnico.' }]
        ],
        pontos: [
          { pt: '<b>O comentário</b> <code>Meta Pixel Code</code> mostra onde o Pixel começa. Achou ele, achou o Pixel.', es: '<b>El comentario</b> <code>Meta Pixel Code</code> muestra dónde empieza el Pixel. Si lo encuentras, encontraste el Pixel.' },
          { pt: '<b>O ID</b> (o número dentro de <code>init</code>) tem que ser igual ao do Pixel do cliente no Gerenciador de Eventos.', es: '<b>El ID</b> (el número dentro de <code>init</code>) tiene que ser igual al del Pixel del cliente en el Administrador de eventos.' },
          { pt: '<b>O PageView</b> conta as visitas. Se ele está lá, toda página aberta é contada.', es: '<b>El PageView</b> cuenta las visitas. Si está ahí, cada página abierta se cuenta.' }
        ],
        notas: { pt: 'A mensagem é: o agente não precisa entender o código, só achar 3 coisas. Se o código estiver estranho (duplicado, editado, faltando partes), o cliente deve chamar quem cuida do site.', es: 'El mensaje es: el agente no necesita entender el código, solo encontrar 3 cosas. Si el código está raro (duplicado, editado, con partes faltantes), el cliente debe llamar a quien cuida el sitio.' }
      },
      ferramenta: 'codigo-base',
      praticar: {
        texto: { pt: 'Na Lojinha, o Pixel vai te mostrar onde fica o Modo aula e onde achar as 3 coisas no código da página.', es: 'En la Lojinha, el Pixel te mostrará dónde está el Modo aula y dónde encontrar las 3 cosas en el código de la página.' },
        tour: 'achar-codigo', pagina: 'loja.html'
      },
      atender: {
        cena: { pt: 'Instalei o Pixel ontem e nenhum evento aparece no meu Gerenciador de Eventos. 😩', es: 'Instalé el Pixel ayer y no aparece ningún evento en mi Administrador de eventos. 😩' },
        pergunta: { pt: 'O que você responde primeiro?', es: '¿Qué respondes primero?' },
        opcoes: [
          { certa: true, txt: { pt: '“Vamos conferir juntos: você pode me mandar o número que aparece no código do site, dentro de init? Vou comparar com o ID do seu Pixel.”', es: '“Revisémoslo juntos: ¿puedes enviarme el número que aparece en el código del sitio, dentro de init? Voy a compararlo con el ID de tu Pixel.”' }, fb: { pt: 'Boa! O motivo mais comum de “nenhum evento” é o ID do site ser de outro Pixel. Você identifica isso sem mexer em nada.', es: '¡Bien! El motivo más común de “ningún evento” es que el ID del sitio es de otro Pixel. Lo identificas sin tocar nada.' } },
          { certa: false, txt: { pt: '“É normal, os eventos levam até 7 dias para aparecer.”', es: '“Es normal, los eventos tardan hasta 7 días en aparecer.”' }, fb: { pt: 'Não. Eventos aparecem em minutos (no Testar eventos, na hora). Esperar só atrasa a solução.', es: 'No. Los eventos aparecen en minutos (en Probar eventos, al instante). Esperar solo retrasa la solución.' } },
          { certa: false, txt: { pt: '“Vou te encaminhar agora para um desenvolvedor.”', es: '“Te voy a derivar ahora a un desarrollador.”' }, fb: { pt: 'Ainda não. Primeiro identifique a causa: conferir o ID é simples e você faz com o cliente. Encaminhe só se for preciso mexer no código e o cliente não souber.', es: 'Todavía no. Primero identifica la causa: revisar el ID es simple y lo haces con el cliente. Deriva solo si hay que tocar el código y el cliente no sabe.' } },
          { certa: false, txt: { pt: '“Apague a linha do PageView e instale de novo.”', es: '“Borra la línea del PageView e instálalo de nuevo.”' }, fb: { pt: 'Não! O PageView deve ficar. E orientar a apagar partes do código pode quebrar o site do cliente.', es: '¡No! El PageView debe quedarse. Y pedir que borre partes del código puede romper el sitio del cliente.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Você consegue ver o código do Pixel no site (o comentário Meta Pixel Code)?', es: '¿Puedes ver el código del Pixel en el sitio (el comentario Meta Pixel Code)?' },
          { pt: 'Qual número aparece dentro de init?', es: '¿Qué número aparece dentro de init?' },
          { pt: 'Qual é o ID do Pixel no seu Gerenciador de Eventos?', es: '¿Cuál es el ID del Pixel en tu Administrador de eventos?' }],
        conferir: [{ pt: 'O ID do init é igual ao do Pixel, número por número.', es: 'El ID del init es igual al del Pixel, número por número.' },
          { pt: 'O PageView está no código.', es: 'El PageView está en el código.' },
          { pt: 'O código aparece uma vez só (não está duplicado).', es: 'El código aparece una sola vez (no está duplicado).' }],
        frase: { pt: 'Vamos conferir juntos: você pode me mandar o número que aparece no código do site, dentro de init? Vou comparar com o ID do seu Pixel no Gerenciador de Eventos.', es: 'Revisémoslo juntos: ¿puedes enviarme el número que aparece en el código del sitio, dentro de init? Voy a compararlo con el ID de tu Pixel en el Administrador de eventos.' },
        encaminhar: { pt: 'Se o código está duplicado, editado ou faltando partes, e o cliente não sabe trocar: oriente a falar com quem cuida do site (desenvolvedor ou a plataforma da loja).', es: 'Si el código está duplicado, editado o con partes faltantes, y el cliente no sabe cambiarlo: oriéntalo a hablar con quien cuida el sitio (desarrollador o la plataforma de la tienda).' }
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
