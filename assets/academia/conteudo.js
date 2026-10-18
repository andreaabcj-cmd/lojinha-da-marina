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
  { id: 'portfolio', fase: 1, status: 'construcao', icone: '🏢', titulo: { pt: 'Portfólio empresarial · básico', es: 'Portfolio comercial · básico' }, resumo: { pt: 'Como configurar o portfólio e seus principais recursos.', es: 'Cómo configurar el portfolio y sus principales recursos.' } },
  { id: 'instagram', fase: 1, status: 'construcao', icone: '📸', titulo: { pt: 'Instagram para empresas', es: 'Instagram para empresas' }, resumo: { pt: 'Como funciona o Instagram para empresas e seus anúncios.', es: 'Cómo funciona Instagram para empresas y sus anuncios.' } },
  { id: 'pixel', fase: 1, status: 'construcao', icone: '📡', titulo: { pt: 'Pixel · básico', es: 'Pixel · básico' }, resumo: { pt: 'O que é, como criar, como saber se está funcionando, os eventos e os primeiros avisos.', es: 'Qué es, cómo crearlo, cómo saber si funciona, los eventos y los primeros avisos.' } },
  { id: 'anuncios', fase: 2, status: 'construcao', icone: '📣', titulo: { pt: 'Gerenciador de Anúncios · criação e edição', es: 'Administrador de anuncios · creación y edición' }, resumo: { pt: 'Criar e editar anúncios, e os erros mais comuns.', es: 'Crear y editar anuncios, y los errores más comunes.' } },
  { id: 'feed', fase: 2, status: 'construcao', icone: '📰', titulo: { pt: 'Anúncios no Feed', es: 'Anuncios en el Feed' }, resumo: { pt: 'Criativo, texto, destino, posicionamentos e erros comuns.', es: 'Contenido, texto, destino, ubicaciones y errores comunes.' } },
  { id: 'catalogo', fase: 2, status: 'construcao', icone: '🗂️', titulo: { pt: 'Catálogo', es: 'Catálogo' }, resumo: { pt: 'Introdução, como criar e como manter.', es: 'Introducción, cómo crearlo y cómo mantenerlo.' } },
  { id: 'microdados', fase: 2, status: 'construcao', icone: '🔎', titulo: { pt: 'Microdata Debugger', es: 'Microdata Debugger' }, resumo: { pt: 'Conferir se as páginas de produto do site falam a língua do catálogo.', es: 'Revisar si las páginas de producto del sitio hablan el idioma del catálogo.' } },
  { id: 'relatorios', fase: 3, status: 'construcao', icone: '📊', titulo: { pt: 'Relatórios e métricas', es: 'Informes y métricas' }, resumo: { pt: 'Ler, montar e comparar relatórios; atribuição e relatórios vazios.', es: 'Leer, armar y comparar informes; atribución e informes vacíos.' } },
  { id: 'segmentacao', fase: 3, status: 'construcao', icone: '🎯', titulo: { pt: 'Públicos e segmentação', es: 'Públicos y segmentación' }, resumo: { pt: 'Públicos personalizados do site, semelhantes, salvos e controles; erros comuns.', es: 'Públicos personalizados del sitio, similares, guardados y controles; errores comunes.' } },
  { id: 'entrega', fase: 3, status: 'construcao', icone: '🚚', titulo: { pt: 'Entrega de anúncios', es: 'Entrega de anuncios' }, resumo: { pt: 'A fase de aprendizado, as edições significativas e o que fazer quando o anúncio não veicula.', es: 'La fase de aprendizaje, las ediciones significativas y qué hacer cuando el anuncio no entrega.' } },
    { id: 'regras', fase: 3, status: 'construcao', icone: '⚙️', titulo: { pt: 'Gerenciador de Anúncios · regras automatizadas', es: 'Administrador de anuncios · reglas automáticas' }, resumo: { pt: 'O que são, como criar sem falso positivo, acompanhar e corrigir.', es: 'Qué son, cómo crearlas sin falso positivo, seguirlas y corregirlas.' } },
  { id: 'pixel-avancado', fase: 3, status: 'construcao', icone: '🛰️', titulo: { pt: 'Pixel · avançado', es: 'Pixel · avanzado' }, resumo: { pt: 'Correspondência avançada, qualidade do sinal, API de Conversões e deduplicação, privacidade.', es: 'Coincidencia avanzada, calidad de la señal, API de conversiones y deduplicación, privacidad.' } },
  /* ÁREA DIAGNÓSTICO (fora das trilhas): casos de verdade, por categoria. Cada bloco é um "módulo" com area: 'diagnostico' e cada caso é uma "aula"
     no formato de caso: a Marina reclama → tutorial guiado → o porquê → Atender e Cola. */
  { id: 'dg-pixel', area: 'diagnostico', status: 'construcao', icone: '📡', titulo: { pt: 'Pixel e eventos', es: 'Píxel y eventos' }, resumo: { pt: 'Compra que não chega, código colado à mão, compras em dobro, valor errado, queda de eventos e Purchase em todas as páginas.', es: 'Compra que no llega, código pegado a mano, compras duplicadas, valor incorrecto, caída de eventos y Purchase en todas las páginas.' } },
  { id: 'dg-integracoes', area: 'diagnostico', status: 'construcao', icone: '🧩', titulo: { pt: 'Integrações e plataformas', es: 'Integraciones y plataformas' }, resumo: { pt: 'Loja conectada pela Shopify, WooCommerce ou parceiro que não envia o que devia.', es: 'Tienda conectada por Shopify, WooCommerce o socio que no envía lo que debería.' } },
  { id: 'dg-anuncios', area: 'diagnostico', status: 'construcao', icone: '📣', titulo: { pt: 'Anúncios: criação, publicação e entrega', es: 'Anuncios: creación, publicación y entrega' }, resumo: { pt: 'Anúncio que não publica, não veicula ou parou de entregar.', es: 'Anuncio que no se publica, no entrega o dejó de entregar.' } },
  { id: 'dg-catalogo', area: 'diagnostico', status: 'construcao', icone: '🗂️', titulo: { pt: 'Catálogo e produtos', es: 'Catálogo y productos' }, resumo: { pt: 'Produtos que não aparecem, não sincronizam ou não batem com o Pixel.', es: 'Productos que no aparecen, no se sincronizan o no coinciden con el píxel.' } },
  { id: 'dg-contas', area: 'diagnostico', status: 'construcao', icone: '🏢', titulo: { pt: 'Contas, acessos e portfólio', es: 'Cuentas, accesos y portafolio' }, resumo: { pt: 'Quem tem acesso a quê, ativos no portfólio errado e verificação da empresa.', es: 'Quién tiene acceso a qué, activos en el portafolio equivocado y verificación de la empresa.' } },
  { id: 'dg-instagram', area: 'diagnostico', status: 'construcao', icone: '📸', titulo: { pt: 'Instagram e Página', es: 'Instagram y Página' }, resumo: { pt: 'Instagram que não conecta ou não aparece no anúncio.', es: 'Instagram que no se conecta o no aparece en el anuncio.' } },
  { id: 'dg-commerce', area: 'diagnostico', status: 'planejado', icone: '🛍️', titulo: { pt: 'Commerce e lojas', es: 'Commerce y tiendas' }, resumo: { pt: 'Loja que não fica visível e anúncios das Lojas que só levam ao site.', es: 'Tienda que no queda visible y anuncios de Tiendas que solo llevan al sitio.' } },
  { id: 'verified', fase: 4, status: 'construcao', icone: '✅', titulo: { pt: 'Meta Verified para empresas', es: 'Meta Verified para empresas' }, resumo: { pt: 'Planos, cadastro, requisitos, nome do perfil, cancelamento e suporte da assinatura.', es: 'Planes, registro, requisitos, nombre del perfil, cancelación y asistencia de la suscripción.' } },
  { id: 'commerce', fase: 4, status: 'construcao', icone: '🛍️', titulo: { pt: 'Introdução ao Commerce', es: 'Introducción a Commerce' }, resumo: { pt: 'Criar e publicar a loja no Gerenciador de Comércio, requisitos e o que mudou com a finalização da compra no site.', es: 'Crear y publicar la tienda en el Administrador de ventas, requisitos y qué cambió con la finalización de compra en el sitio.' } },
  { id: 'shop-ads', fase: 4, status: 'construcao', icone: '🛒', titulo: { pt: 'Anúncios de loja (Shop Ads)', es: 'Anuncios de tienda (Shop Ads)' }, resumo: { pt: 'Antes de criar, criar o anúncio das Lojas, por que só chega ao site e como ler os resultados.', es: 'Antes de crear, crear el anuncio de Tiendas, por qué solo llega al sitio y cómo leer los resultados.' } },
  { id: 'shop-ads-offsite', fase: 4, status: 'construcao', icone: '🧾', titulo: { pt: 'Shop Ads · finalização da compra fora da Meta', es: 'Shop Ads · pago fuera de Meta' }, resumo: { pt: 'A jornada até a compra no site, Pixel e catálogo, eventos duplicados, UTM e terceiros, e atualizar loja antiga.', es: 'El recorrido hasta la compra en el sitio, píxel y catálogo, eventos duplicados, UTM y terceros, y actualizar tienda antigua.' } },
  { id: 'portfolio-avancado', fase: 5, status: 'construcao', icone: '🧰', titulo: { pt: 'Portfólio empresarial · avançado', es: 'Portfolio comercial · avanzado' }, resumo: { pt: 'Como verificar e corrigir erros no portfólio.', es: 'Cómo verificar y corregir errores en el portfolio.' } },
  { id: 'mbe', fase: 5, status: 'construcao', icone: '🔌', titulo: { pt: 'Meta Business Extension (MBE)', es: 'Meta Business Extension (MBE)' }, resumo: { pt: 'Galeria de parceiros, a janela do MBE, opções da API de Conversões, problemas comuns e acesso de parceiros.', es: 'Galería de socios, la ventana del MBE, opciones de la API de Conversiones, problemas comunes y acceso de socios.' } },
  { id: 'integracoes', fase: 5, status: 'construcao', icone: '🧷', titulo: { pt: 'Integração com plataformas de terceiros', es: 'Integración con plataformas de terceros' }, resumo: { pt: 'Conectar a plataforma (WooCommerce), ler os erros do Diagnóstico, Pixel como fonte do catálogo e manter ou desconectar.', es: 'Conectar la plataforma (WooCommerce), leer los errores del Diagnóstico, píxel como fuente del catálogo y mantener o desconectar.' } },
  { id: 'shopify', fase: 5, status: 'construcao', icone: '🧩', titulo: { pt: 'Shopify e Meta', es: 'Shopify y Meta' }, resumo: { pt: 'Conectar a Shopify, quem gerencia o quê, sincronização e redirecionamento, e problemas comuns.', es: 'Conectar Shopify, quién gestiona qué, sincronización y redirección, y problemas comunes.' } },
  { id: 'pagamentos', extra: true, status: 'planejado', icone: '💳', titulo: { pt: 'Pagamentos e cobrança', es: 'Pagos y facturación' }, resumo: { pt: 'Formas de pagamento, saldo, limites de gastos e cobranças.', es: 'Métodos de pago, saldo, límites de gasto y cobros.' } },
  { id: 'acesso', extra: true, status: 'planejado', icone: '🔐', titulo: { pt: 'Acesso e login', es: 'Acceso e inicio de sesión' }, resumo: { pt: 'Senha, verificação em duas etapas e contas ou ativos comprometidos.', es: 'Contraseña, verificación en dos pasos y cuentas o activos comprometidos.' } },
  { id: 'restricoes', extra: true, status: 'planejado', icone: '🚧', titulo: { pt: 'Contas e restrições', es: 'Cuentas y restricciones' }, resumo: { pt: 'Contas desativadas ou restritas, limites de recursos e verificações.', es: 'Cuentas desactivadas o restringidas, límites de funciones y verificaciones.' } },
  { id: 'politicas', extra: true, status: 'planejado', icone: '📜', titulo: { pt: 'Políticas e anúncios rejeitados', es: 'Políticas y anuncios rechazados' }, resumo: { pt: 'Por que um anúncio é rejeitado e o que o cliente pode fazer.', es: 'Por qué se rechaza un anuncio y qué puede hacer el cliente.' } },
  { id: 'ig-organico', extra: true, status: 'planejado', icone: '📷', titulo: { pt: 'Instagram e Facebook orgânicos', es: 'Instagram y Facebook orgánicos' }, resumo: { pt: 'Perfil, conteúdo e recursos do dia a dia fora dos anúncios.', es: 'Perfil, contenido y funciones del día a día fuera de los anuncios.' } },
  { id: 'whatsapp', fase: 5, status: 'depois', icone: '💬', titulo: { pt: 'WhatsApp', es: 'WhatsApp' }, resumo: { pt: 'Fica para depois.', es: 'Para más adelante.' } }
];

/* As TRILHAS são só listas e ordens de módulos: o conteúdo (módulos e aulas) é um só, compartilhado.
   Foco = a ordem de estudo de anúncios, medição e comércio. Completa = o Foco + os módulos extras (de outras áreas). */
window.TRILHAS = [
  { id: 'foco', icone: '🎯', nome: { pt: 'Trilha Foco', es: 'Ruta Foco' }, sub: { pt: 'Anúncios, medição e comércio', es: 'Anuncios, medición y comercio' },
    resumo: { pt: 'A ordem de estudo de quem atende anúncios, medição e comércio. Foca no que você resolve e, quando um caso é de outra área, mostra só uma linha de encaminhamento.', es: 'El orden de estudio de quien atiende anuncios, medición y comercio. Se centra en lo que tú resuelves y, cuando un caso es de otra área, muestra solo una línea de derivación.' },
    modulos: ['portfolio', 'portfolio-avancado', 'pixel', 'pixel-avancado', 'catalogo', 'microdados', 'anuncios', 'feed', 'instagram', 'regras', 'relatorios', 'segmentacao', 'entrega', 'verified', 'commerce', 'shop-ads', 'shop-ads-offsite', 'mbe', 'integracoes', 'shopify', 'whatsapp'] },
  { id: 'completa', icone: '🧭', nome: { pt: 'Trilha Completa', es: 'Ruta Completa' }, sub: { pt: 'Tudo do Foco e mais', es: 'Todo el Foco y más' },
    resumo: { pt: 'Para os demais departamentos: todos os módulos do Foco com a solução inteira de cada caso, mais os módulos extras (pagamentos, acesso e login, contas e restrições, políticas, orgânico).', es: 'Para los demás departamentos: todos los módulos del Foco con la solución completa de cada caso, más los módulos extras (pagos, acceso e inicio de sesión, cuentas y restricciones, políticas, orgánico).' },
    modulos: null, extras: ['pagamentos', 'acesso', 'restricoes', 'politicas', 'ig-organico'] }
];
window.TRILHAS[1].modulos = window.TRILHAS[0].modulos;   // a Completa começa pelos mesmos módulos do Foco

window.AULAS = {
  instagram: [
    {
      id: '01', soCompleta: true, min: 6, status: 'pronta',
      titulo: { pt: 'Pessoal ou profissional?', es: '¿Personal o profesional?' },
      antes: { pt: 'O portfólio da Marina está pronto, com pessoas e conta de anúncios.', es: 'El portfolio de Marina está listo, con personas y cuenta publicitaria.' },
      gancho: { pt: '“Virei profissional! E agora, o que eu coloco no perfil?” Vamos deixar o perfil com cara de loja.', es: '“¡Me volví profesional! ¿Y ahora qué pongo en el perfil?” Vamos a darle al perfil cara de tienda.' },
      objetivo: { pt: 'Entender a diferença entre conta pessoal e profissional (Comercial ou Criador de conteúdo) e o que muda ao trocar.', es: 'Entender la diferencia entre cuenta personal y profesional (Comercial o Creador de contenido) y qué cambia al cambiar.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu Instagram é pessoal e privado. Para vender, preciso mudar alguma coisa? 🤔', es: 'Mi Instagram es personal y privado. Para vender, ¿tengo que cambiar algo? 🤔' }],
          ['rafa', { pt: 'Precisa sim: virar conta profissional. Para loja, o tipo certo é Comercial. Com ela você vê os insights dos seguidores, faz promoções e ganha botão de contato.', es: 'Sí: volverse cuenta profesional. Para tienda, el tipo correcto es Comercial. Con ella ves las estadísticas de los seguidores, haces promociones y tienes botón de contacto.' }],
          ['pixel', { pt: 'Atenção: conta profissional é sempre PÚBLICA. Se hoje é privada, ela fica pública ao trocar.', es: 'Atención: la cuenta profesional siempre es PÚBLICA. Si hoy es privada, queda pública al cambiar.' }],
          ['marina', { pt: 'E se eu me arrepender?', es: '¿Y si me arrepiento?' }],
          ['rafa', { pt: 'Dá para voltar para pessoal quando quiser, mas aí você perde as ferramentas de empresa, como o Business Suite e o Gerenciador de Anúncios.', es: 'Se puede volver a personal cuando quieras, pero pierdes las herramientas de empresa, como Business Suite y el Administrador de anuncios.' }]
        ],
        pontos: [
          { pt: '<b>Conta profissional</b> tem dois tipos: <b>Comercial</b> (lojas, negócios, marcas) e <b>Criador de conteúdo</b> (influenciadores, artistas).', es: '<b>La cuenta profesional</b> tiene dos tipos: <b>Comercial</b> (tiendas, negocios, marcas) y <b>Creador de contenido</b> (influencers, artistas).' },
          { pt: '<b>Ela é sempre pública.</b> Quem quer conta privada fica na pessoal.', es: '<b>Siempre es pública.</b> Quien quiere cuenta privada se queda en la personal.' },
          { pt: '<b>Dá para voltar</b> para pessoal, mas perde as ferramentas de empresa.', es: '<b>Se puede volver</b> a personal, pero se pierden las herramientas de empresa.' }
        ],
        notas: { pt: 'O caminho no app: Perfil › ☰ › Configurações e atividade › Para profissionais › Tipo de conta e ferramentas. Na web (instagram.com), a opção se chama “Comercial”. As telas da troca foram vistas de verdade em 14/10/2026.', es: 'El camino en la app: Perfil › ☰ › Configuración y actividad › Para profesionales › Tipo de cuenta y herramientas. En la web (instagram.com), la opción se llama “Comercial”. Las pantallas del cambio se vieron de verdad el 14/10/2026.' }
      },
      ferramenta: 'tipo-conta',
      praticar: {
        texto: { pt: 'No simulador do Instagram, o Pixel te guia para virar a conta da Marina em Comercial, tela por tela, como na real.', es: 'En el simulador de Instagram, el Pixel te guía para volver Comercial la cuenta de Marina, pantalla por pantalla, como en la real.' },
        tour: 'virar-profissional', pagina: 'meta-instagram.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Virei meu Instagram para profissional e agora qualquer pessoa vê minhas fotos! Quero deixar privado de novo, mas continuar com as ferramentas de loja. 😣', es: '¡Volví mi Instagram profesional y ahora cualquiera ve mis fotos! Quiero dejarlo privado otra vez, pero seguir con las herramientas de tienda. 😣' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Conta profissional é sempre pública, não dá para deixar privada. Se a privacidade for mais importante, dá para voltar para conta pessoal, mas aí perde as ferramentas de loja. Quer pensar juntas no que faz mais sentido?”', es: '“La cuenta profesional siempre es pública, no se puede dejar privada. Si la privacidad es más importante, se puede volver a cuenta personal, pero se pierden las herramientas de tienda. ¿Pensamos juntas qué tiene más sentido?”' }, fb: { pt: 'Isso! Você foi honesto sobre a regra e ajudou a cliente a escolher, sem pressionar.', es: '¡Eso! Fuiste honesto sobre la regla y ayudaste a la clienta a elegir, sin presionar.' } },
          { certa: false, txt: { pt: '“É só ir em Privacidade e deixar privada.”', es: '“Solo ve a Privacidad y déjala privada.”' }, fb: { pt: 'Não existe essa opção na conta profissional: ela é sempre pública.', es: 'No existe esa opción en la cuenta profesional: siempre es pública.' } },
          { certa: false, txt: { pt: '“Crie uma conta nova e apague esta.”', es: '“Crea una cuenta nueva y borra esta.”' }, fb: { pt: 'Exagero: ela perderia seguidores e posts. Primeiro entenda o que ela prefere: privacidade ou ferramentas.', es: 'Exagerado: perdería seguidores y publicaciones. Primero entiende qué prefiere: privacidad o herramientas.' } },
          { certa: false, txt: { pt: '“Isso é bug, vou abrir um chamado.”', es: '“Es un error, voy a abrir un caso.”' }, fb: { pt: 'Não é bug: é a regra da conta profissional, avisada na própria tela de troca.', es: 'No es un error: es la regla de la cuenta profesional, avisada en la propia pantalla de cambio.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Sua conta é pessoal ou profissional?', es: '¿Tu cuenta es personal o profesional?' },
          { pt: 'Você vende algo (loja, serviço) ou cria conteúdo (influenciador, artista)?', es: '¿Vendes algo (tienda, servicio) o creas contenido (influencer, artista)?' },
          { pt: 'Tudo bem a conta ficar pública?', es: '¿Está bien que la cuenta quede pública?' }],
        conferir: [{ pt: 'Loja ou negócio = Comercial; influenciador ou artista = Criador de conteúdo.', es: 'Tienda o negocio = Comercial; influencer o artista = Creador de contenido.' },
          { pt: 'A cliente sabe que a conta profissional é sempre pública.', es: 'La clienta sabe que la cuenta profesional siempre es pública.' },
          { pt: 'Voltar para pessoal tira as ferramentas de empresa.', es: 'Volver a personal quita las herramientas de empresa.' }],
        frase: { pt: 'Para loja, o ideal é a conta profissional do tipo Comercial: você ganha insights, promoções e botão de contato. Só lembrando: a conta profissional é sempre pública.', es: 'Para tienda, lo ideal es la cuenta profesional tipo Comercial: obtienes estadísticas, promociones y botón de contacto. Solo recuerda: la cuenta profesional siempre es pública.' },
        passos: [{ pt: 'No app: Perfil › ☰ › Configurações e atividade.', es: 'En la app: Perfil › ☰ › Configuración y actividad.' },
          { pt: 'Em “Para profissionais”, toque em Tipo de conta e ferramentas › Mudar para conta profissional.', es: 'En “Para profesionales”, toca Tipo de cuenta y herramientas › Cambiar a cuenta profesional.' },
          { pt: 'Escolha a categoria e o tipo (Comercial), e confirme.', es: 'Elige la categoría y el tipo (Comercial), y confirma.' }],
        encaminhar: { pt: 'Se a opção não aparece ou dá erro, oriente a seguir a Central de Ajuda do Instagram.', es: 'Si la opción no aparece o da error, orienta a seguir el Centro de ayuda de Instagram.' }
      },
      fontes: [
        { url: 'https://help.instagram.com/502981923235522', titulo: { pt: 'Configurar uma conta profissional no Instagram', es: 'Configurar una cuenta profesional en Instagram' }, conferido: '14/10/2026' },
        { url: 'https://help.instagram.com/1717693135113805/', titulo: { pt: 'Voltar para conta pessoal', es: 'Volver a una cuenta personal' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '02', soCompleta: true, min: 6, status: 'pronta',
      titulo: { pt: 'Um perfil que vende', es: 'Un perfil que vende' },
      antes: { pt: 'O Instagram da Marina virou conta profissional Comercial.', es: 'El Instagram de Marina se volvió cuenta profesional Comercial.' },
      gancho: { pt: '“Perfil pronto! Agora meu Instagram precisa entrar no portfólio, né?” Vamos juntar o Instagram à pasta da empresa.', es: '“¡Perfil listo! Ahora mi Instagram tiene que entrar al portfolio, ¿no?” Vamos a juntar el Instagram a la carpeta de la empresa.' },
      objetivo: { pt: 'Saber o que vai no perfil de uma loja (nome, @, bio, foto) e cuidar do que fica público, como o contato.', es: 'Saber qué va en el perfil de una tienda (nombre, @, bio, foto) y cuidar lo que queda público, como el contacto.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu perfil ainda diz “Marina, amo fazer canecas”. Está bom assim? 😅', es: 'Mi perfil todavía dice “Marina, amo hacer tazas”. ¿Así está bien? 😅' }],
          ['rafa', { pt: 'Dá para melhorar! Coloque o nome da loja no Nome (ele aparece em negrito e na busca), um @ da loja e, na bio, o que você vende em uma frase.', es: '¡Se puede mejorar! Pon el nombre de la tienda en Nombre (aparece en negrita y en la búsqueda), un @ de la tienda y, en la bio, lo que vendes en una frase.' }],
          ['marina', { pt: 'E coloco meu celular para as pessoas me chamarem?', es: '¿Y pongo mi celular para que me llamen?' }],
          ['pixel', { pt: 'Cuidado: o contato do perfil fica PÚBLICO. Use um telefone ou email comercial, não o pessoal.', es: 'Cuidado: el contacto del perfil queda PÚBLICO. Usa un teléfono o correo comercial, no el personal.' }]
        ],
        pontos: [
          { pt: '<b>Nome:</b> o nome da loja (aparece em negrito e ajuda na busca).', es: '<b>Nombre:</b> el nombre de la tienda (aparece en negrita y ayuda en la búsqueda).' },
          { pt: '<b>@ (nome de usuário):</b> o endereço do perfil, sem espaços, fácil de digitar.', es: '<b>@ (nombre de usuario):</b> la dirección del perfil, sin espacios, fácil de escribir.' },
          { pt: '<b>Bio e contato:</b> a bio diz o que a loja vende; o contato aparece publicamente, então use dados comerciais.', es: '<b>Bio y contacto:</b> la bio dice qué vende la tienda; el contacto aparece públicamente, así que usa datos comerciales.' }
        ],
        notas: { pt: 'Na tela real de contato, o Instagram avisa: “Essas informações serão exibidas no seu perfil publicamente… Você pode editar ou remover essas informações quando quiser.” A tela Editar perfil foi vista no app em 14/10/2026.', es: 'En la pantalla real de contacto, Instagram avisa: “Esta información se mostrará públicamente en tu perfil… Puedes editarla o quitarla cuando quieras.” La pantalla Editar perfil se vio en la app el 14/10/2026.' }
      },
      ferramenta: 'perfil-que-vende',
      praticar: {
        texto: { pt: 'No simulador do Instagram, o Pixel te guia para deixar o perfil da Marina com cara de loja: nome, @ e bio.', es: 'En el simulador de Instagram, el Pixel te guía para darle al perfil de Marina cara de tienda: nombre, @ y bio.' },
        tour: 'editar-perfil', pagina: 'meta-instagram.html'
      },
      atender: {
        cena: { pt: 'Coloquei meu celular pessoal no perfil e agora não param de me ligar, até de madrugada! 😩', es: '¡Puse mi celular personal en el perfil y ahora no paran de llamarme, hasta de madrugada! 😩' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“O contato do perfil fica público, por isso todo mundo vê. Você pode editar ou remover quando quiser: troque por um telefone ou email comercial, ou tire o telefone. Te mostro onde.”', es: '“El contacto del perfil queda público, por eso todos lo ven. Puedes editarlo o quitarlo cuando quieras: cámbialo por un teléfono o correo comercial, o quita el teléfono. Te muestro dónde.”' }, fb: { pt: 'Isso! Você explicou o porquê e deu a solução na hora, sem complicar.', es: '¡Eso! Explicaste el porqué y diste la solución al momento, sin complicar.' } },
          { certa: false, txt: { pt: '“Volte para conta pessoal.”', es: '“Vuelve a cuenta personal.”' }, fb: { pt: 'Exagero: ela perderia as ferramentas de loja. É só editar o contato.', es: 'Exagerado: perdería las herramientas de tienda. Solo hay que editar el contacto.' } },
          { certa: false, txt: { pt: '“Não tem como tirar, agora já foi.”', es: '“No se puede quitar, ya está.”' }, fb: { pt: 'Tem sim: o próprio Instagram diz que dá para editar ou remover quando quiser.', es: 'Sí se puede: el propio Instagram dice que se puede editar o quitar cuando quieras.' } },
          { certa: false, txt: { pt: '“Bloqueie quem ligar.”', es: '“Bloquea a quien llame.”' }, fb: { pt: 'Não resolve a causa: o número continua público. Primeiro tire ou troque o contato.', es: 'No resuelve la causa: el número sigue público. Primero quita o cambia el contacto.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O Nome do perfil tem o nome da loja?', es: '¿El Nombre del perfil tiene el nombre de la tienda?' },
          { pt: 'A bio diz o que você vende?', es: '¿La bio dice qué vendes?' },
          { pt: 'O contato no perfil é comercial ou pessoal?', es: '¿El contacto del perfil es comercial o personal?' }],
        conferir: [{ pt: 'Nome = nome da loja; @ sem espaços.', es: 'Nombre = nombre de la tienda; @ sin espacios.' },
          { pt: 'Bio com o que a loja vende.', es: 'Bio con lo que vende la tienda.' },
          { pt: 'Contato público só com dados comerciais.', es: 'Contacto público solo con datos comerciales.' }],
        frase: { pt: 'O contato do perfil fica público. Você pode editar ou remover quando quiser: troque por um telefone ou email comercial. Te mostro onde.', es: 'El contacto del perfil queda público. Puedes editarlo o quitarlo cuando quieras: cámbialo por un teléfono o correo comercial. Te muestro dónde.' },
        passos: [{ pt: 'No app, vá no seu perfil e toque em Editar perfil.', es: 'En la app, ve a tu perfil y toca Editar perfil.' },
          { pt: 'Ajuste Nome, Nome de usuário e Bio, e toque em Concluir.', es: 'Ajusta Nombre, Nombre de usuario y Bio, y toca Terminar.' }],
        encaminhar: { pt: 'Se a cliente não consegue trocar o nome ou o @ (o Instagram limita mudanças), oriente a seguir a Central de Ajuda do Instagram.', es: 'Si la clienta no logra cambiar el nombre o el @ (Instagram limita cambios), orienta a seguir el Centro de ayuda de Instagram.' }
      },
      fontes: [
        { url: 'https://help.instagram.com/502981923235522', titulo: { pt: 'Conta profissional: contato e exibição no perfil', es: 'Cuenta profesional: contacto y visualización en el perfil' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '03', min: 6, status: 'pronta',
      titulo: { pt: 'Instagram no portfólio', es: 'Instagram en el portfolio' },
      antes: { pt: 'O Instagram da Marina já é uma conta profissional.', es: 'El Instagram de Marina ya es una cuenta profesional.' },
      gancho: { pt: '“Instagram e Página no portfólio! Mas eles ainda não conversam entre si…” Vamos ligar os dois.', es: '“¡Instagram y Página en el portfolio! Pero todavía no se hablan entre sí…” Vamos a vincular los dos.' },
      objetivo: { pt: 'Saber adicionar o Instagram ao portfólio e os cuidados: só conta profissional, um ativo em um portfólio, e a conta de anúncios que vem junto.', es: 'Saber agregar el Instagram al portfolio y los cuidados: solo cuenta profesional, un activo en un portfolio, y la cuenta publicitaria que viene junto.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu Instagram precisa estar no portfólio? Ele já não é meu? 🤔', es: '¿Mi Instagram tiene que estar en el portfolio? ¿No es mío ya? 🤔' }],
          ['rafa', { pt: 'É seu, sim! No portfólio ele fica junto com a Página, a conta de anúncios e o Pixel, e você controla quem ajuda a cuidar dele.', es: '¡Es tuyo! En el portfolio queda junto con la Página, la cuenta publicitaria y el Pixel, y controlas quién ayuda a cuidarlo.' }],
          ['rafa', { pt: 'Para adicionar, você entra com a sua conta do Instagram numa janela de autorização. Eu nunca preciso da sua senha.', es: 'Para agregarlo, entras con tu cuenta de Instagram en una ventana de autorización. Nunca necesito tu contraseña.' }],
          ['pixel', { pt: 'Se o Instagram tiver uma conta de anúncios conectada, ela vem junto para o portfólio e não pode ser removida depois.', es: 'Si el Instagram tiene una cuenta publicitaria conectada, viene junto al portfolio y no se puede quitar después.' }]
        ],
        pontos: [
          { pt: '<b>Só conta profissional</b> entra no portfólio. Se for pessoal, ela vira profissional ao adicionar.', es: '<b>Solo la cuenta profesional</b> entra al portfolio. Si es personal, se vuelve profesional al agregarla.' },
          { pt: '<b>Um ativo, um portfólio:</b> se o Instagram está no portfólio de outra empresa, precisa ser liberado antes.', es: '<b>Un activo, un portfolio:</b> si el Instagram está en el portfolio de otra empresa, hay que liberarlo antes.' },
          { pt: '<b>Conta de anúncios conectada</b> vem junto e não pode ser removida. E o login é sempre da cliente.', es: '<b>La cuenta publicitaria conectada</b> viene junto y no se puede quitar. Y el inicio de sesión siempre es de la clienta.' }
        ],
        notas: { pt: 'Caminho: Configurações › Contas › Perfis do Instagram › Adicionar. Na tela real (14/10/2026) o título da página e a janela aparecem em inglês (“Instagram profiles”, “Add an Instagram profile”). Ligar o Instagram à Página é a aula 04.', es: 'Camino: Configuración › Cuentas › Perfiles de Instagram › Agregar. En la pantalla real (14/10/2026) el título de la página y la ventana aparecen en inglés (“Instagram profiles”, “Add an Instagram profile”). Vincular el Instagram a la Página es la clase 04.' }
      },
      ferramenta: 'ig-portfolio',
      praticar: {
        texto: { pt: 'No simulador do portfólio, o Pixel te guia para adicionar o Instagram da Marina, com os avisos da tela real.', es: 'En el simulador del portfolio, el Pixel te guía para agregar el Instagram de Marina, con los avisos de la pantalla real.' },
        tour: 'adicionar-instagram', pagina: 'meta-portfolio.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Fui adicionar meu Instagram no portfólio e ele diz que já pertence a outra empresa. Era de uma agência que me atendia. 😕', es: 'Fui a agregar mi Instagram al portfolio y dice que ya pertenece a otra empresa. Era de una agencia que me atendía. 😕' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Cada ativo só pode estar em um portfólio. Peça para a agência tirar o seu Instagram do portfólio deles; depois você adiciona no seu.”', es: '“Cada activo solo puede estar en un portfolio. Pídele a la agencia que quite tu Instagram de su portfolio; después lo agregas en el tuyo.”' }, fb: { pt: 'Isso! Você explicou a regra e deu o caminho certo, que depende de quem administra o outro portfólio.', es: '¡Eso! Explicaste la regla y diste el camino correcto, que depende de quien administra el otro portfolio.' } },
          { certa: false, txt: { pt: '“Me passa a senha do Instagram que eu resolvo.”', es: '“Pásame la contraseña de Instagram y lo resuelvo.”' }, fb: { pt: 'Nunca! O agente não pede senha, e isso nem resolveria: o Instagram está no portfólio da agência.', es: '¡Nunca! El agente no pide contraseña, y eso ni lo resolvería: el Instagram está en el portfolio de la agencia.' } },
          { certa: false, txt: { pt: '“Crie um Instagram novo.”', es: '“Crea un Instagram nuevo.”' }, fb: { pt: 'Ela perderia seguidores e posts. O caminho é a agência liberar.', es: 'Perdería seguidores y publicaciones. El camino es que la agencia lo libere.' } },
          { certa: false, txt: { pt: '“Adicione em dois portfólios ao mesmo tempo.”', es: '“Agrégalo en dos portfolios al mismo tiempo.”' }, fb: { pt: 'Não dá: cada ativo pertence a um portfólio só.', es: 'No se puede: cada activo pertenece a un solo portfolio.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Seu Instagram é conta profissional?', es: '¿Tu Instagram es cuenta profesional?' },
          { pt: 'Ele já está no portfólio de alguém (uma agência, outra empresa)?', es: '¿Ya está en el portfolio de alguien (una agencia, otra empresa)?' },
          { pt: 'Ele tem uma conta de anúncios conectada?', es: '¿Tiene una cuenta publicitaria conectada?' }],
        conferir: [{ pt: 'Conta profissional (se for pessoal, vira ao adicionar).', es: 'Cuenta profesional (si es personal, se vuelve al agregarla).' },
          { pt: 'Não está em outro portfólio.', es: 'No está en otro portfolio.' },
          { pt: 'A cliente sabe que a conta de anúncios conectada vem junto e não sai.', es: 'La clienta sabe que la cuenta publicitaria conectada viene junto y no sale.' }],
        frase: { pt: 'Cada ativo só pode estar em um portfólio. Peça para quem administra o outro portfólio liberar o seu Instagram; depois você adiciona no seu.', es: 'Cada activo solo puede estar en un portfolio. Pídele a quien administra el otro portfolio que libere tu Instagram; después lo agregas en el tuyo.' },
        passos: [{ pt: 'Configurações › Contas › Perfis do Instagram › Adicionar.', es: 'Configuración › Cuentas › Perfiles de Instagram › Agregar.' },
          { pt: 'Leia os avisos e clique em Add Instagram profile.', es: 'Lee los avisos y haz clic en Add Instagram profile.' },
          { pt: 'Na janela do Instagram, entre com a sua conta e confirme.', es: 'En la ventana de Instagram, entra con tu cuenta y confirma.' }],
        encaminhar: { pt: 'Se ninguém consegue liberar o Instagram do outro portfólio, oriente a seguir a Central de Ajuda da Meta para empresas.', es: 'Si nadie logra liberar el Instagram del otro portfolio, orienta a seguir el Centro de ayuda de Meta para empresas.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/620548115562686', titulo: { pt: 'Conectar uma conta do Instagram no Business Suite', es: 'Conectar una cuenta de Instagram en Business Suite' }, conferido: '14/10/2026' },
        { url: 'https://www.facebook.com/business/help/1125825714110549', titulo: { pt: 'Adicionar uma conta do Instagram ao portfólio (só um portfólio por conta)', es: 'Agregar una cuenta de Instagram al portfolio (solo un portfolio por cuenta)' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '04', min: 7, status: 'pronta',
      titulo: { pt: 'Instagram e Página juntos', es: 'Instagram y Página juntos' },
      antes: { pt: 'A Página e o Instagram da Marina estão no portfólio, mas ainda separados.', es: 'La Página y el Instagram de Marina están en el portfolio, pero todavía separados.' },
      gancho: { pt: '“Portfólio, Instagram, Página… tudo ligado! Agora quero usar o Instagram de verdade: nos anúncios, nos posts e nas mensagens.” Vamos lá.', es: '“Portfolio, Instagram, Página… ¡todo conectado! Ahora quiero usar el Instagram de verdad: en los anuncios, en las publicaciones y en los mensajes.” Vamos.' },
      objetivo: { pt: 'Saber ligar o Instagram à Página, o que é preciso antes e o que muda para quem ajuda a cuidar dos dois.', es: 'Saber vincular el Instagram a la Página, qué se necesita antes y qué cambia para quien ayuda a cuidar los dos.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu Instagram e minha Página já estão no portfólio. Isso quer dizer que estão ligados? 🤔', es: 'Mi Instagram y mi Página ya están en el portfolio. ¿Eso quiere decir que están vinculados? 🤔' }],
          ['rafa', { pt: 'Ainda não! Estar no mesmo portfólio é estar na mesma pasta. Ligar é outro passo: aí você faz posts nos dois, junta os insights e usa as ferramentas de empresa do Instagram.', es: '¡Todavía no! Estar en el mismo portfolio es estar en la misma carpeta. Vincular es otro paso: ahí publicas en los dos, juntas las estadísticas y usas las herramientas de empresa de Instagram.' }],
          ['marina', { pt: 'E o que eu preciso para ligar?', es: '¿Y qué necesito para vincularlos?' }],
          ['rafa', { pt: 'Três coisas: Instagram profissional, controle total da Página e os dois no mesmo portfólio. Você já tem tudo!', es: 'Tres cosas: Instagram profesional, control total de la Página y los dos en el mismo portfolio. ¡Ya tienes todo!' }],
          ['pixel', { pt: 'Atenção: depois de ligar, quem cuida da Página OU do Instagram pode cuidar dos dois, conforme o acesso de cada um. E as mensagens do Instagram podem ir para a Caixa de Entrada.', es: 'Atención: después de vincular, quien cuida la Página O el Instagram puede cuidar los dos, según el acceso de cada uno. Y los mensajes de Instagram pueden ir a la Bandeja de entrada.' }]
        ],
        pontos: [
          { pt: '<b>Antes de ligar:</b> Instagram profissional + controle total da Página + os dois no mesmo portfólio.', es: '<b>Antes de vincular:</b> Instagram profesional + control total de la Página + los dos en el mismo portfolio.' },
          { pt: '<b>Onde:</b> no portfólio, Páginas › a Página › Conectar ativos › Conta do Instagram. (No app do Instagram: Editar perfil › Página › Conectar ou criar.)', es: '<b>Dónde:</b> en el portfolio, Páginas › la Página › Conectar activos › Cuenta de Instagram. (En la app de Instagram: Editar perfil › Página › Conectar o crear.)' },
          { pt: '<b>O que muda:</b> quem tem acesso à Página ou ao Instagram pode gerenciar os dois; as mensagens do Instagram podem ir para a Caixa de Entrada (dá para mudar depois).', es: '<b>Qué cambia:</b> quien tiene acceso a la Página o al Instagram puede gestionar los dos; los mensajes de Instagram pueden ir a la Bandeja de entrada (se puede cambiar después).' }
        ],
        notas: { pt: '📌 Cenário alternativo (visto de verdade em 14/10/2026): a Página estava no portfólio de outra pessoa. O caminho: quem administra aquele portfólio remove a Página (quem já administrava a Página não perde o acesso) e a dona adiciona no portfólio dela como “Página existente”. Telas de Conectar ativos conferidas em 14/10/2026.', es: '📌 Escenario alternativo (visto de verdad el 14/10/2026): la Página estaba en el portfolio de otra persona. El camino: quien administra ese portfolio quita la Página (quien ya administraba la Página no pierde el acceso) y la dueña la agrega en su portfolio como “Página existente”. Pantallas de Conectar activos revisadas el 14/10/2026.' }
      },
      ferramenta: 'ligar-ig',
      praticar: {
        texto: { pt: 'No simulador do portfólio, o Pixel te guia para ligar o Instagram da Marina à Página, com as telas reais.', es: 'En el simulador del portfolio, el Pixel te guía para vincular el Instagram de Marina a la Página, con las pantallas reales.' },
        tour: 'conectar-instagram', pagina: 'meta-portfolio.html?exemplo=1&aula=ig4'
      },
      atender: {
        cena: { pt: 'Liguei meu Instagram à Página e agora meu sócio, que só cuidava da Página, está lendo as mensagens do Instagram. Eu não queria isso! 😟', es: 'Vinculé mi Instagram a la Página y ahora mi socio, que solo cuidaba la Página, está leyendo los mensajes de Instagram. ¡Yo no quería eso! 😟' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Isso acontece porque, ligados, quem cuida da Página pode ver as mensagens do Instagram, conforme o acesso dele. Dá para mudar: você pode tirar o acesso às mensagens do Instagram nas configurações ou rever o acesso do seu sócio no portfólio. Quer ver comigo?”', es: '“Eso pasa porque, vinculados, quien cuida la Página puede ver los mensajes de Instagram, según su acceso. Se puede cambiar: puedes quitar el acceso a los mensajes de Instagram en la configuración o revisar el acceso de tu socio en el portfolio. ¿Lo vemos juntos?”' }, fb: { pt: 'Isso! Você explicou o porquê e deu as duas saídas, sem precisar desfazer a ligação.', es: '¡Eso! Explicaste el porqué y diste las dos salidas, sin tener que deshacer el vínculo.' } },
          { certa: false, txt: { pt: '“Desconecte o Instagram da Página.”', es: '“Desconecta el Instagram de la Página.”' }, fb: { pt: 'Resolve, mas perde tudo o que a ligação dá (posts nos dois, insights juntos). Dá para ajustar só as mensagens ou o acesso do sócio.', es: 'Lo resuelve, pero pierde todo lo que da el vínculo (publicar en los dos, estadísticas juntas). Se puede ajustar solo los mensajes o el acceso del socio.' } },
          { certa: false, txt: { pt: '“Isso é um erro da Meta, vou abrir um chamado.”', es: '“Es un error de Meta, voy a abrir un caso.”' }, fb: { pt: 'Não é erro: a própria tela avisa que, ligados, quem cuida da Página pode ver as mensagens do Instagram.', es: 'No es un error: la propia pantalla avisa que, vinculados, quien cuida la Página puede ver los mensajes de Instagram.' } },
          { certa: false, txt: { pt: '“Me passa a senha do Instagram que eu arrumo.”', es: '“Pásame la contraseña de Instagram y lo arreglo.”' }, fb: { pt: 'Nunca peça senha. O ajuste é feito pela própria cliente, com você orientando.', es: 'Nunca pidas contraseña. El ajuste lo hace la propia clienta, contigo orientando.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Seu Instagram é conta profissional?', es: '¿Tu Instagram es cuenta profesional?' },
          { pt: 'Você tem controle total da Página?', es: '¿Tienes control total de la Página?' },
          { pt: 'A Página e o Instagram estão no mesmo portfólio?', es: '¿La Página y el Instagram están en el mismo portfolio?' }],
        conferir: [{ pt: 'Instagram profissional (Comercial ou Criador).', es: 'Instagram profesional (Comercial o Creador).' },
          { pt: 'Controle total da Página.', es: 'Control total de la Página.' },
          { pt: 'Os dois no mesmo portfólio (se não, primeiro organizar os portfólios).', es: 'Los dos en el mismo portfolio (si no, primero organizar los portfolios).' }],
        frase: { pt: 'Para ligar, você precisa do Instagram profissional, controle total da Página e os dois no mesmo portfólio. Depois de ligados, quem cuida de um pode cuidar dos dois, conforme o acesso de cada pessoa.', es: 'Para vincular, necesitas el Instagram profesional, control total de la Página y los dos en el mismo portfolio. Después de vinculados, quien cuida uno puede cuidar los dos, según el acceso de cada persona.' },
        passos: [{ pt: 'No portfólio: Configurações › Contas › Páginas › escolha a Página.', es: 'En el portfolio: Configuración › Cuentas › Páginas › elige la Página.' },
          { pt: 'Conectar ativos › Conta do Instagram › Entrar no Instagram.', es: 'Conectar activos › Cuenta de Instagram › Entrar en Instagram.' },
          { pt: 'Escolha se as mensagens do Instagram vão para a Caixa de Entrada › Continuar.', es: 'Elige si los mensajes de Instagram van a la Bandeja de entrada › Continuar.' },
          { pt: 'Entre com a conta do Instagram, confira o resumo e clique em Adicionar.', es: 'Entra con la cuenta de Instagram, revisa el resumen y haz clic en Agregar.' },
          { pt: '💡 Cenário alternativo: a Página está no portfólio de outra pessoa? Quem administra aquele portfólio remove a Página, e a cliente adiciona no dela como “Página existente”.', es: '💡 Escenario alternativo: ¿la Página está en el portfolio de otra persona? Quien administra ese portfolio quita la Página, y la clienta la agrega en el suyo como “Página existente”.' }],
        encaminhar: { pt: 'Se aparecer erro ao ligar e os três requisitos estão certos, oriente a seguir a Central de Ajuda da Meta para empresas (erros de conexão entre Instagram e Página).', es: 'Si aparece un error al vincular y los tres requisitos están bien, orienta a seguir el Centro de ayuda de Meta para empresas (errores de conexión entre Instagram y Página).' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/898752960195806', titulo: { pt: 'Como conectar ou desconectar sua conta profissional do Instagram e uma Página do Facebook', es: 'Cómo conectar o desconectar tu cuenta profesional de Instagram y una Página de Facebook' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '05', min: 7, status: 'pronta',
      titulo: { pt: 'O Instagram no anúncio', es: 'El Instagram en el anuncio' },
      antes: { pt: 'A Marina ligou o Instagram à Página e já sabe montar o criativo do anúncio.', es: 'Marina vinculó el Instagram a la Página y ya sabe armar el contenido del anuncio.' },
      gancho: { pt: '“No Instagram, o anúncio aparece com o nome da Página! Eu queria o @ da minha loja.” Vamos ao campo certo.', es: '“¡En Instagram, el anuncio aparece con el nombre de la Página! Yo quería el @ de mi tienda.” Vamos al campo correcto.' },
      objetivo: { pt: 'Escolher o perfil do Instagram na Identidade do anúncio e ver o efeito na prévia.', es: 'Elegir el perfil de Instagram en la Identidad del anuncio y ver el efecto en la vista previa.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'O anúncio da Marina aparece no Instagram com o nome da Página do Facebook. Dá para usar o @ da loja? 🤔', es: 'El anuncio de Marina aparece en Instagram con el nombre de la Página de Facebook. ¿Se puede usar el @ de la tienda? 🤔' }],
          ['rafa', { pt: 'Dá: na Identidade do anúncio tem o campo Perfil do Instagram. Escolhendo o perfil, nos lugares do Instagram o anúncio aparece com o nome e o @ da loja.', es: 'Se puede: en la Identidad del anuncio está el campo Perfil de Instagram. Al elegir el perfil, en los lugares de Instagram el anuncio aparece con el nombre y el @ de la tienda.' }],
          ['marina', { pt: 'E se eu não escolher nada?', es: '¿Y si no elijo nada?' }],
          ['rafa', { pt: 'O anúncio continua publicando: só a Página é obrigatória. O Instagram usa a Página como identidade, e a lista mostra “Usar a Página do Facebook”.', es: 'El anuncio igual se publica: solo la Página es obligatoria. Instagram usa la Página como identidad, y la lista muestra “Usar la Página de Facebook”.' }],
          ['pixel', { pt: 'Na mesma seção tem “Anúncio em parceria”, que vem Desativado: serve para veicular com criadores de conteúdo, marcas e outras empresas.', es: 'En la misma sección está “Anuncio en colaboración”, que viene Desactivado: sirve para publicar con creadores de contenido, marcas y otras empresas.' }]
        ],
        pontos: [
          { pt: '<b>Página do Facebook:</b> obrigatória. <b>Perfil do Instagram:</b> opcional, mas dá a cara da loja.', es: '<b>Página de Facebook:</b> obligatoria. <b>Perfil de Instagram:</b> opcional, pero le da la cara a la tienda.' },
          { pt: '<b>Na prévia</b>, o cartão dos lugares do Instagram mostra o perfil escolhido.', es: '<b>En la vista previa</b>, la tarjeta de los lugares de Instagram muestra el perfil elegido.' },
          { pt: '<b>Anúncio em parceria:</b> desativado por padrão, para anunciar junto com outros perfis.', es: '<b>Anuncio en colaboración:</b> desactivado de forma predeterminada, para anunciar junto con otros perfiles.' }
        ],
        notas: { pt: 'Campos da Identidade vistos de verdade em 14–16/10/2026 (Página do Facebook, Perfil do Instagram, Threads, WhatsApp, Anúncio em parceria). Como o perfil aparece em cada lugar na prévia real, e as opções exatas da lista do Instagram, não foram vistos (a conferir).', es: 'Campos de la Identidad vistos de verdad el 14–16/10/2026 (Página de Facebook, Perfil de Instagram, Threads, WhatsApp, Anuncio en colaboración). Cómo aparece el perfil en cada lugar en la vista previa real, y las opciones exactas de la lista de Instagram, no se vieron (por confirmar).' }
      },
      ferramenta: 'identidade-ig',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva à Identidade do anúncio, escolhe o perfil do Instagram e confere o resultado na prévia de Stories e Reels.', es: 'En el simulador, el Pixel te lleva a la Identidad del anuncio, elige el perfil de Instagram y revisa el resultado en la vista previa de Stories y Reels.' },
        tour: 'identidade-instagram', pagina: 'meta-feed.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Meu anúncio aparece no Instagram com o nome da Página, não com o @ da minha loja. Está errado? 😕', es: '¡Mi anuncio aparece en Instagram con el nombre de la Página, no con el @ de mi tienda! ¿Está mal? 😕' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Não está errado: sem perfil escolhido, o Instagram usa a Página. Abra o anúncio, vá em Identidade e escolha seu perfil em Perfil do Instagram. Depois confira na prévia de Stories e Reels.”', es: '“No está mal: sin perfil elegido, Instagram usa la Página. Abre el anuncio, ve a Identidad y elige tu perfil en Perfil de Instagram. Después revisa en la vista previa de Stories y Reels.”' }, fb: { pt: 'Isso! Explicou o porquê e mostrou o campo.', es: '¡Eso! Explicaste el porqué y mostraste el campo.' } },
          { certa: false, txt: { pt: '“Troque o nome da Página para @lojinha.”', es: '“Cambia el nombre de la Página a @lojinha.”' }, fb: { pt: 'Não precisa mexer na Página: o campo é Perfil do Instagram.', es: 'No hace falta tocar la Página: el campo es Perfil de Instagram.' } },
          { certa: false, txt: { pt: '“É assim mesmo e não dá para mudar.”', es: '“Es así y no se puede cambiar.”' }, fb: { pt: 'Dá para mudar: é só escolher o perfil.', es: 'Se puede cambiar: solo hay que elegir el perfil.' } },
          { certa: false, txt: { pt: '“Crie um anúncio novo no app do Instagram.”', es: '“Crea un anuncio nuevo en la app de Instagram.”' }, fb: { pt: 'Não precisa: o ajuste é na Identidade do mesmo anúncio.', es: 'No hace falta: el ajuste es en la Identidad del mismo anuncio.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual perfil do Instagram aparece escolhido na Identidade do anúncio?', es: '¿Qué perfil de Instagram aparece elegido en la Identidad del anuncio?' },
          { pt: 'O anúncio foi visto em qual lugar (Feed, Stories, Reels)?', es: '¿En qué lugar se vio el anuncio (Feed, Stories, Reels)?' }],
        conferir: [{ pt: 'Identidade › Perfil do Instagram.', es: 'Identidad › Perfil de Instagram.' },
          { pt: 'Prévia, aba de Stories e Reels.', es: 'Vista previa, pestaña de Stories y Reels.' }],
        frase: { pt: 'Sem escolher o perfil do Instagram, o anúncio aparece com a Página. Em Identidade, escolha o perfil da loja e confira na prévia.', es: 'Sin elegir el perfil de Instagram, el anuncio aparece con la Página. En Identidad, elige el perfil de la tienda y revisa en la vista previa.' },
        passos: [{ pt: 'No anúncio, abra Identidade e escolha o Perfil do Instagram.', es: 'En el anuncio, abre Identidad y elige el Perfil de Instagram.' },
          { pt: 'Confira a prévia de Stories e Reels.', es: 'Revisa la vista previa de Stories y Reels.' }],
        encaminhar: { pt: 'Se o perfil não aparece na lista, siga a próxima aula (Meu Instagram não aparece no anúncio).', es: 'Si el perfil no aparece en la lista, sigue la próxima clase (Mi Instagram no aparece en el anuncio).' }
      }
    },
    {
      id: '06', min: 7, status: 'pronta',
      titulo: { pt: 'Meu Instagram não aparece no anúncio', es: 'Mi Instagram no aparece en el anuncio' },
      antes: { pt: 'A Marina quer escolher o @ da loja no anúncio.', es: 'Marina quiere elegir el @ de la tienda en el anuncio.' },
      gancho: { pt: '“Abri a lista de Perfil do Instagram e o meu @ não está lá!” Quase sempre a causa está na ligação, não no anúncio.', es: '“¡Abrí la lista de Perfil de Instagram y mi @ no está ahí!” Casi siempre la causa está en el vínculo, no en el anuncio.' },
      objetivo: { pt: 'Diagnosticar por que o Instagram não aparece na lista, na ordem certa: conta profissional, portfólio e ligação com a Página.', es: 'Diagnosticar por qué el Instagram no aparece en la lista, en el orden correcto: cuenta profesional, portfolio y vínculo con la Página.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu @ não aparece na lista do anúncio! Será que o anúncio está com defeito? 😟', es: '¡Mi @ no aparece en la lista del anuncio! ¿Será que el anuncio tiene un defecto? 😟' }],
          ['rafa', { pt: 'Não é o anúncio. A lista mostra os perfis que a Página enxerga. Se o Instagram não está ligado à Página, ele não aparece.', es: 'No es el anuncio. La lista muestra los perfiles que la Página ve. Si el Instagram no está vinculado a la Página, no aparece.' }],
          ['marina', { pt: 'E o que eu confiro?', es: '¿Y qué reviso?' }],
          ['rafa', { pt: 'Três coisas, nesta ordem: 1) é conta profissional? 2) foi adicionada ao portfólio empresarial? 3) está ligada à Página? Foram as aulas 01, 03 e 04.', es: 'Tres cosas, en este orden: 1) ¿es cuenta profesional? 2) ¿se agregó al portfolio comercial? 3) ¿está vinculada a la Página? Fueron las clases 01, 03 y 04.' }],
          ['pixel', { pt: 'Lembre: nunca peça a senha do cliente. Mostre onde clicar e deixe que ele mesmo faça.', es: 'Recuerda: nunca pidas la contraseña del cliente. Muestra dónde hacer clic y deja que lo haga él mismo.' }]
        ],
        pontos: [
          { pt: '<b>Lista sem o perfil:</b> o problema quase nunca é o anúncio.', es: '<b>Lista sin el perfil:</b> el problema casi nunca es el anuncio.' },
          { pt: '<b>Ordem:</b> conta profissional › no portfólio › ligada à Página.', es: '<b>Orden:</b> cuenta profesional › en el portfolio › vinculada a la Página.' },
          { pt: '<b>Segurança:</b> nunca peça senha; guie o cliente.', es: '<b>Seguridad:</b> nunca pidas contraseña; guía al cliente.' }
        ],
        notas: { pt: 'A lista de perfis com o Instagram fora do ar (vazia) não foi vista na tela real: o simulador mostra só “Usar a Página do Facebook” (a conferir). Os três passos de conferência vêm das aulas 01, 03 e 04, vistas de verdade em 14–15/10/2026.', es: 'La lista de perfiles con el Instagram sin vincular (vacía) no se vio en la pantalla real: el simulador muestra solo “Usar la Página de Facebook” (por confirmar). Los tres pasos de revisión vienen de las clases 01, 03 y 04, vistas de verdad el 14–15/10/2026.' }
      },
      ferramenta: 'ig-nao-aparece',
      praticar: {
        texto: { pt: 'No simulador, o Instagram da Marina não aparece na lista. O Pixel te guia pela lista de conferência até ele aparecer.', es: 'En el simulador, el Instagram de Marina no aparece en la lista. El Pixel te guía por la lista de revisión hasta que aparezca.' },
        tour: 'perfil-nao-aparece', pagina: 'meta-feed.html?igsem=1'
      },
      atender: {
        cena: { pt: 'O Instagram da minha loja não aparece na lista do anúncio e já tentei de tudo! Pode entrar no meu Instagram e arrumar? Minha senha é… 😭', es: '¡El Instagram de mi tienda no aparece en la lista del anuncio y ya probé de todo! ¿Puedes entrar en mi Instagram y arreglarlo? Mi contraseña es… 😭' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Não precisa me passar a senha, e nunca passe a ninguém. Vamos conferir juntos, passo a passo, que você mesma faz: sua conta é profissional? Está no portfólio? Está ligada à Página?”', es: '“No hace falta que me pases la contraseña, y nunca se la pases a nadie. Revisemos juntos, paso a paso, y lo haces tú misma: ¿tu cuenta es profesional? ¿Está en el portfolio? ¿Está vinculada a la Página?”' }, fb: { pt: 'Isso! Protegeu o cliente e abriu o diagnóstico.', es: '¡Eso! Protegiste al cliente y abriste el diagnóstico.' } },
          { certa: false, txt: { pt: '“Pode mandar a senha, eu resolvo rapidinho.”', es: '“Puedes mandarme la contraseña, lo resuelvo rapidito.”' }, fb: { pt: 'Nunca peça nem aceite senha de cliente.', es: 'Nunca pidas ni aceptes contraseña de un cliente.' } },
          { certa: false, txt: { pt: '“Crie um Instagram novo.”', es: '“Crea un Instagram nuevo.”' }, fb: { pt: 'Exagero: perderia os seguidores. Primeiro confira a ligação.', es: 'Exagerado: perdería los seguidores. Primero revisa el vínculo.' } },
          { certa: false, txt: { pt: '“Isso é bug da Meta, espere uns dias.”', es: '“Eso es un error de Meta, espera unos días.”' }, fb: { pt: 'Quase sempre é falta de ligação, que se resolve na hora.', es: 'Casi siempre es falta de vínculo, que se resuelve al momento.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'A conta do Instagram é profissional (Comercial ou Criador de conteúdo)?', es: '¿La cuenta de Instagram es profesional (Comercial o Creador de contenido)?' },
          { pt: 'O Instagram aparece em Contas do Instagram no portfólio? E está ligado à Página?', es: '¿El Instagram aparece en Cuentas de Instagram en el portfolio? ¿Y está vinculado a la Página?' },
          { pt: 'A pessoa que está escolhendo o perfil tem acesso à conta de anúncios e ao Instagram no portfólio?', es: '¿La persona que está eligiendo el perfil tiene acceso a la cuenta publicitaria y al Instagram en el portfolio?' }],
        conferir: [{ pt: 'Perfil do Instagram: conta profissional.', es: 'Perfil de Instagram: cuenta profesional.' },
          { pt: 'Configurações da empresa › Contas › Contas do Instagram, e a ligação com a Página.', es: 'Configuración del negocio › Cuentas › Cuentas de Instagram, y el vínculo con la Página.' }],
        frase: { pt: 'Vamos conferir três coisas, nesta ordem: se a conta é profissional, se está no portfólio e se está ligada à Página. Você faz cada passo e me conta o que vê. Nunca precisa me passar sua senha.', es: 'Vamos a revisar tres cosas, en este orden: si la cuenta es profesional, si está en el portfolio y si está vinculada a la Página. Tú haces cada paso y me cuentas qué ves. Nunca necesitas pasarme tu contraseña.' },
        passos: [{ pt: 'Confirme que a conta é profissional (aula 01).', es: 'Confirma que la cuenta es profesional (clase 01).' },
          { pt: 'Adicione ao portfólio e ligue à Página (aulas 03 e 04), depois recarregue o anúncio.', es: 'Agrégala al portfolio y vincúlala a la Página (clases 03 y 04), después recarga el anuncio.' }],
        encaminhar: { pt: 'Se tudo está ligado e mesmo assim o perfil não aparece, confirme o que a tela mostra e as permissões da pessoa, e siga a Central de Ajuda da Meta.', es: 'Si todo está vinculado y aun así el perfil no aparece, confirma lo que muestra la pantalla y los permisos de la persona, y sigue el Centro de ayuda de Meta.' }
      }
    },
    {
      id: '07', min: 8, status: 'pronta',
      titulo: { pt: 'Postar no Facebook e no Instagram juntos', es: 'Publicar en Facebook y en Instagram a la vez' },
      antes: { pt: 'A Marina ligou o Instagram à Página e sabe usar a identidade nos anúncios.', es: 'Marina vinculó el Instagram a la Página y sabe usar la identidad en los anuncios.' },
      gancho: { pt: '“Tenho que postar a mesma foto duas vezes, uma em cada rede?” Não: o Business Suite posta nas duas de uma vez.', es: '“¿Tengo que publicar la misma foto dos veces, una en cada red?” No: Business Suite publica en las dos a la vez.' },
      objetivo: { pt: 'Criar um post no Business Suite e escolher onde ele vai: Facebook, Instagram ou os dois.', es: 'Crear una publicación en Business Suite y elegir adónde va: Facebook, Instagram o los dos.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Quero postar a foto da Caneca azul nas duas redes. Preciso entrar em cada app? 🤔', es: 'Quiero publicar la foto de la Caneca azul en las dos redes. ¿Tengo que entrar en cada app? 🤔' }],
          ['rafa', { pt: 'Não. No Meta Business Suite, clique em Criar post. Em “Postar em” aparecem a Página e o perfil do Instagram. Marque onde quer postar.', es: 'No. En Meta Business Suite, haz clic en Crear publicación. En “Publicar en” aparecen la Página y el perfil de Instagram. Marca dónde quieres publicar.' }],
          ['marina', { pt: 'E se eu quiser um texto diferente em cada rede?', es: '¿Y si quiero un texto distinto en cada red?' }],
          ['rafa', { pt: 'Ligue “Personalizar post para o Facebook e o Instagram”. Também dá para programar o post (Definir data e hora) e compartilhar como Story do Facebook.', es: 'Activa “Personalizar la publicación para Facebook e Instagram”. También se puede programar la publicación (Establecer fecha y hora) y compartir como historia de Facebook.' }],
          ['pixel', { pt: 'Cuidado com o interruptor Turbinar, no rodapé: ligado, ele leva a transformar o post em anúncio. E lembre: os posts do Instagram não podem ter mais de 10 fotos.', es: 'Cuidado con el interruptor Promocionar, al pie: activado, lleva a convertir la publicación en anuncio. Y recuerda: las publicaciones de Instagram no pueden tener más de 10 fotos.' }]
        ],
        pontos: [
          { pt: '<b>Postar em:</b> Página, Instagram ou os dois (o chamado post cruzado).', es: '<b>Publicar en:</b> Página, Instagram o los dos.' },
          { pt: '<b>Limites e extras:</b> até 10 fotos no Instagram; texto por rede; programar; Story do Facebook.', es: '<b>Límites y extras:</b> hasta 10 fotos en Instagram; texto por red; programar; historia de Facebook.' },
          { pt: '<b>Turbinar:</b> só ligue se o cliente quer transformar o post em anúncio.', es: '<b>Promocionar:</b> solo actívalo si el cliente quiere convertir la publicación en anuncio.' }
        ],
        notas: { pt: 'Tela de Criar post vista de verdade em 14–16/10/2026 (aviso de post de anúncio, Mídia, Detalhes do post, Programar, Compartilhar em, privacidade, Turbinar, prévia). A lista do seletor “Postar em” e o texto separado por rede ao personalizar não foram abertos (a conferir).', es: 'Pantalla de Crear publicación vista de verdad el 14–16/10/2026 (aviso de publicación de anuncio, Contenido multimedia, Detalles de la publicación, Programar, Compartir en, privacidad, Promocionar, vista previa). La lista del selector “Publicar en” y el texto separado por red al personalizar no se abrieron (por confirmar).' }
      },
      ferramenta: 'onde-posto',
      praticar: {
        texto: { pt: 'No simulador do Business Suite, o Pixel te guia para criar o post da Caneca azul e publicar no Facebook e no Instagram.', es: 'En el simulador de Business Suite, el Pixel te guía para crear la publicación de la Caneca azul y publicarla en Facebook y en Instagram.' },
        tour: 'publicar-dois', pagina: 'meta-suite.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Postei e a foto só saiu no Facebook, não no Instagram! O que aconteceu? 😕', es: '¡Publiqué y la foto salió solo en Facebook, no en Instagram! ¿Qué pasó? 😕' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Na hora de criar o post, em “Postar em”, o perfil do Instagram precisa estar marcado junto com a Página. Se ele nem aparece ali, falta ligar o Instagram à Página. Vamos conferir os dois.”', es: '“Al crear la publicación, en “Publicar en”, el perfil de Instagram tiene que estar marcado junto con la Página. Si ni siquiera aparece ahí, falta vincular el Instagram a la Página. Revisemos los dos.”' }, fb: { pt: 'Isso! Duas causas prováveis, nesta ordem.', es: '¡Eso! Dos causas probables, en este orden.' } },
          { certa: false, txt: { pt: '“O Instagram demora dias para publicar.”', es: '“Instagram demora días en publicar.”' }, fb: { pt: 'Não é demora: é onde o post foi marcado para ir.', es: 'No es demora: es adónde se marcó que fuera la publicación.' } },
          { certa: false, txt: { pt: '“Poste de novo, mas no app do Instagram.”', es: '“Publica de nuevo, pero en la app de Instagram.”' }, fb: { pt: 'Dá para resolver no mesmo Business Suite, sem duplicar.', es: 'Se puede resolver en el mismo Business Suite, sin duplicar.' } },
          { certa: false, txt: { pt: '“Ligue o Turbinar para forçar o Instagram.”', es: '“Activa Promocionar para forzar Instagram.”' }, fb: { pt: 'Turbinar cria anúncio e gasta dinheiro; não serve para isso.', es: 'Promocionar crea un anuncio y gasta dinero; no sirve para eso.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Em “Postar em”, quais perfis apareciam marcados na hora de postar?', es: 'En “Publicar en”, ¿qué perfiles aparecían marcados al publicar?' },
          { pt: 'O post tinha mais de 10 fotos?', es: '¿La publicación tenía más de 10 fotos?' }],
        conferir: [{ pt: 'Criar post › Postar em: Página e Instagram marcados.', es: 'Crear publicación › Publicar en: Página e Instagram marcados.' },
          { pt: 'Se o Instagram não aparece: ligação com a Página (aula 04).', es: 'Si el Instagram no aparece: vínculo con la Página (clase 04).' }],
        frase: { pt: 'No Business Suite, em Postar em, você escolhe onde o post vai. Vamos conferir se o Instagram estava marcado e, se nem aparecia, se está ligado à Página.', es: 'En Business Suite, en Publicar en, eliges adónde va la publicación. Revisemos si el Instagram estaba marcado y, si ni aparecía, si está vinculado a la Página.' },
        passos: [{ pt: 'Abra Criar post e olhe Postar em.', es: 'Abre Crear publicación y mira Publicar en.' },
          { pt: 'Marque os dois e publique; se o Instagram não aparecer, ligue-o à Página.', es: 'Marca los dos y publica; si el Instagram no aparece, vincúlalo a la Página.' }],
        encaminhar: { pt: 'Se o post sumiu ou foi removido, confirme o sintoma e siga a Central de Ajuda da Meta; regras de conteúdo são tratadas por outra área.', es: 'Si la publicación desapareció o fue eliminada, confirma el síntoma y sigue el Centro de ayuda de Meta; las reglas de contenido las trata otra área.' }
      }
    },
    {
      id: '08', min: 8, status: 'pronta',
      titulo: { pt: 'A Caixa de Entrada: mensagens e comentários', es: 'Mensajes: mensajes y comentarios' },
      antes: { pt: 'Os posts da Marina estão no ar nas duas redes. As primeiras perguntas chegaram.', es: 'Las publicaciones de Marina están en las dos redes. Llegaron las primeras preguntas.' },
      gancho: { pt: '“Alguém perguntou o preço, mas não sei onde! Mensagem? Comentário?” Tudo cai na Caixa de Entrada.', es: '“¡Alguien preguntó el precio, pero no sé dónde! ¿Mensaje? ¿Comentario?” Todo llega a Mensajes.' },
      objetivo: { pt: 'Achar e responder mensagens e comentários do Instagram e do Facebook na Caixa de Entrada.', es: 'Encontrar y responder mensajes y comentarios de Instagram y de Facebook en Mensajes.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Onde vejo o que chega no Instagram e no Facebook? 🤔', es: '¿Dónde veo lo que llega a Instagram y a Facebook? 🤔' }],
          ['rafa', { pt: 'Na Caixa de Entrada do Business Suite. Em cima ficam os canais: Todas as mensagens, Messenger, Instagram, WhatsApp, Comentários do Facebook e Comentários do Instagram.', es: 'En Mensajes de Business Suite. Arriba están los canales: Todos los mensajes, Messenger, Instagram, WhatsApp, Comentarios de Facebook y Comentarios de Instagram.' }],
          ['marina', { pt: 'E se eu tiver muitas conversas?', es: '¿Y si tengo muchas conversaciones?' }],
          ['rafa', { pt: 'Use os filtros: Não lidas, Prioridade e Respostas a anúncios. Mensagem direta e comentário são canais diferentes: quem comenta no post não aparece como mensagem.', es: 'Usa los filtros: No leídos, Prioridad y Respuestas de anuncios. Mensaje directo y comentario son canales distintos: quien comenta en la publicación no aparece como mensaje.' }],
          ['pixel', { pt: 'No topo também há Automações, Criar anúncio de mensagens e o seu Status de disponibilidade (“Disponível”).', es: 'Arriba también hay Automatizaciones, Crear anuncio de mensajes y tu Estado de disponibilidad (“Disponible”).' }]
        ],
        pontos: [
          { pt: '<b>Canais:</b> mensagens (Messenger, Instagram, WhatsApp) e comentários (Facebook e Instagram) em abas separadas.', es: '<b>Canales:</b> mensajes (Messenger, Instagram, WhatsApp) y comentarios (Facebook e Instagram) en pestañas separadas.' },
          { pt: '<b>Filtros:</b> Não lidas, Prioridade, Respostas a anúncios.', es: '<b>Filtros:</b> No leídos, Prioridad, Respuestas de anuncios.' },
          { pt: '<b>Responder rápido</b> e no canal certo.', es: '<b>Responder rápido</b> y en el canal correcto.' }
        ],
        notas: { pt: 'Caixa de Entrada vista de verdade em 14–16/10/2026 em português e espanhol: canais, filtros e botões do topo. A conta de aula não tem conversas, então as conversas do simulador são de exemplo e a tela de uma conversa aberta (campo de resposta) foi montada pela documentação (a conferir).', es: 'Mensajes vistos de verdad el 14–16/10/2026 en portugués y español: canales, filtros y botones de arriba. La cuenta de práctica no tiene conversaciones, así que las conversaciones del simulador son de ejemplo y la pantalla de una conversación abierta (campo de respuesta) se armó con la documentación (por confirmar).' }
      },
      ferramenta: 'canal-certo',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva pela Caixa de Entrada: canais, uma conversa do Instagram (exemplo), um comentário e o filtro Não lidas.', es: 'En el simulador, el Pixel te lleva por Mensajes: canales, una conversación de Instagram (ejemplo), un comentario y el filtro No leídos.' },
        tour: 'responder-mensagens', pagina: 'meta-suite.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Uma cliente disse que comentou no meu post perguntando o preço e eu não vi nada na caixa de mensagens! 😤', es: '¡Una clienta dijo que comentó en mi publicación preguntando el precio y no vi nada en la bandeja de mensajes! 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Comentário não chega como mensagem: fica em outro canal. Abra a Caixa de Entrada e clique em Comentários do Instagram (ou do Facebook, se foi lá). Vamos achar o comentário e responder.”', es: '“El comentario no llega como mensaje: queda en otro canal. Abre Mensajes y haz clic en Comentarios de Instagram (o de Facebook, si fue ahí). Busquemos el comentario y respondámoslo.”' }, fb: { pt: 'Isso! Mensagem e comentário são canais diferentes.', es: '¡Eso! Mensaje y comentario son canales distintos.' } },
          { certa: false, txt: { pt: '“A cliente deve ter errado, comentários não chegam.”', es: '“La clienta debe haberse equivocado, los comentarios no llegan.”' }, fb: { pt: 'Chegam, mas num canal próprio.', es: 'Llegan, pero en un canal propio.' } },
          { certa: false, txt: { pt: '“Peça para ela mandar mensagem de novo.”', es: '“Pídele que mande mensaje de nuevo.”' }, fb: { pt: 'Primeiro olhe o canal de comentários: o recado já está lá.', es: 'Primero mira el canal de comentarios: el mensaje ya está ahí.' } },
          { certa: false, txt: { pt: '“Aguarde: comentários demoram a aparecer.”', es: '“Espera: los comentarios tardan en aparecer.”' }, fb: { pt: 'Não é demora: é o canal certo a abrir.', es: 'No es demora: es el canal correcto que hay que abrir.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Foi mensagem direta ou comentário em um post?', es: '¿Fue mensaje directo o comentario en una publicación?' },
          { pt: 'Em qual rede (Instagram, Facebook, Messenger)?', es: '¿En qué red (Instagram, Facebook, Messenger)?' }],
        conferir: [{ pt: 'Caixa de Entrada › canal certo (mensagens × comentários).', es: 'Mensajes › canal correcto (mensajes × comentarios).' },
          { pt: 'Filtro Não lidas.', es: 'Filtro No leídos.' }],
        frase: { pt: 'Mensagens diretas e comentários ficam em canais diferentes da Caixa de Entrada. Vamos abrir o canal certo e filtrar por Não lidas.', es: 'Los mensajes directos y los comentarios están en canales distintos de Mensajes. Abramos el canal correcto y filtremos por No leídos.' },
        passos: [{ pt: 'Abra a Caixa de Entrada e escolha o canal.', es: 'Abre Mensajes y elige el canal.' },
          { pt: 'Use o filtro Não lidas e responda.', es: 'Usa el filtro No leídos y responde.' }],
        encaminhar: { pt: 'Se um canal (como o WhatsApp) não está conectado, confirme o que a tela mostra e siga a Central de Ajuda da Meta.', es: 'Si un canal (como WhatsApp) no está conectado, confirma lo que muestra la pantalla y sigue el Centro de ayuda de Meta.' }
      }
    },
    {
      id: '09', min: 7, status: 'pronta',
      titulo: { pt: 'Insights do Instagram: ler os números', es: 'Estadísticas de Instagram: leer los números' },
      antes: { pt: 'A Marina já posta, responde e anuncia. Agora quer saber se está funcionando.', es: 'Marina ya publica, responde y anuncia. Ahora quiere saber si está funcionando.' },
      gancho: { pt: '“Os números do Instagram estão tudo zero! Está quebrado?” Antes de se preocupar, vamos aprender a ler os Insights. Depois, as Regras automatizadas.', es: '“¡Los números de Instagram están todos en cero! ¿Está roto?” Antes de preocuparte, vamos a aprender a leer las Estadísticas. Después, las Reglas automáticas.' },
      objetivo: { pt: 'Ler os Insights do Instagram e do Facebook, trocar de entidade e entender zeros e a aba Público.', es: 'Leer las Estadísticas de Instagram y de Facebook, cambiar de entidad y entender los ceros y la pestaña Público.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Entrei em Insights e vi números do Facebook. E o Instagram? 🤔', es: 'Entré en Estadísticas y vi números de Facebook. ¿Y Instagram? 🤔' }],
          ['rafa', { pt: 'Em cima tem o Seletor de entidade: Facebook ou Instagram. Os números são separados. O período padrão é Últimos 28 dias.', es: 'Arriba está el Selector de entidad: Facebook o Instagram. Los números son separados. El período predeterminado es Últimos 28 días.' }],
          ['marina', { pt: 'Que cartões eu vejo?', es: '¿Qué tarjetas veo?' }],
          ['rafa', { pt: 'Na aba Resultados: Visualizações, Visualizadores, Interações com o conteúdo e Cliques no link (no Facebook também Visitas e Seguidores). Cada um tem o botão Exportar.', es: 'En la pestaña Resultados: Visualizaciones, Espectadores, Interacciones con el contenido y Clics en el enlace (en Facebook también Visitas y Seguidores). Cada una tiene el botón Exportar.' }],
          ['pixel', { pt: 'E na aba Público do Instagram a tela explica: só dá para saber mais sobre o público quando a conta tem pelo menos 100 seguidores.', es: 'Y en la pestaña Público de Instagram la pantalla explica: solo se puede saber más sobre el público cuando la cuenta tiene al menos 100 seguidores.' }]
        ],
        pontos: [
          { pt: '<b>Seletor de entidade:</b> Facebook e Instagram têm números separados.', es: '<b>Selector de entidad:</b> Facebook e Instagram tienen números separados.' },
          { pt: '<b>Visualizações × Visualizadores:</b> vezes que foi visto × pessoas diferentes.', es: '<b>Visualizaciones × Espectadores:</b> veces que se vio × personas distintas.' },
          { pt: '<b>Zero:</b> confira o período e se houve atividade. <b>Público:</b> só com 100 seguidores.', es: '<b>Cero:</b> revisa el período y si hubo actividad. <b>Público:</b> solo con 100 seguidores.' }
        ],
        notas: { pt: 'Telas vistas de verdade em 15–16/10/2026 em português e espanhol (Insights › Resultados com o seletor de entidade; no Instagram os cartões estavam zerados e a aba Público mostrava o aviso dos 100 seguidores). Os números do Facebook no simulador são os da conta de aula. As demais abas (Visão geral, Plano, Mensagens) não foram abertas (a conferir).', es: 'Pantallas vistas de verdad el 15–16/10/2026 en portugués y español (Estadísticas › Resultados con el selector de entidad; en Instagram las tarjetas estaban en cero y la pestaña Público mostraba el aviso de los 100 seguidores). Los números de Facebook en el simulador son los de la cuenta de práctica. Las demás pestañas (Resumen, Plan, Mensajes) no se abrieron (por confirmar).' }
      },
      ferramenta: 'ler-numero',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva pelos Insights: cartões do Facebook, troca para o Instagram, zeros e a aba Público.', es: 'En el simulador, el Pixel te lleva por las Estadísticas: tarjetas de Facebook, cambio a Instagram, ceros y la pestaña Público.' },
        tour: 'ler-insights', pagina: 'meta-suite.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Minha conta do Instagram tem só 40 seguidores e a aba Público está vazia. Está com defeito? 😟', es: '¡Mi cuenta de Instagram tiene solo 40 seguidores y la pestaña Público está vacía! ¿Tiene un defecto? 😟' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Não está com defeito: a própria tela explica que os dados de público do Instagram só aparecem quando a conta tem pelo menos 100 seguidores. Quando chegar lá, eles aparecem.”', es: '“No tiene un defecto: la propia pantalla explica que los datos de público de Instagram solo aparecen cuando la cuenta tiene al menos 100 seguidores. Cuando llegues ahí, aparecen.”' }, fb: { pt: 'Isso! Citou a regra que a tela mostra.', es: '¡Eso! Citaste la regla que muestra la pantalla.' } },
          { certa: false, txt: { pt: '“Sua conta foi limitada pela Meta.”', es: '“Tu cuenta fue limitada por Meta.”' }, fb: { pt: 'Não há sinal disso: é o limite de 100 seguidores.', es: 'No hay señal de eso: es el límite de 100 seguidores.' } },
          { certa: false, txt: { pt: '“Recrie a conta para os dados voltarem.”', es: '“Recrea la cuenta para que vuelvan los datos.”' }, fb: { pt: 'Exagero: perderia os seguidores.', es: 'Exagerado: perdería los seguidores.' } },
          { certa: false, txt: { pt: '“Compre seguidores para chegar a 100.”', es: '“Compra seguidores para llegar a 100.”' }, fb: { pt: 'Nunca sugira isso: fere as regras e a confiança.', es: 'Nunca sugieras eso: va contra las reglas y la confianza.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual entidade está no seletor (Facebook ou Instagram) e qual período?', es: '¿Qué entidad está en el selector (Facebook o Instagram) y qué período?' },
          { pt: 'Houve posts ou anúncios nesse período?', es: '¿Hubo publicaciones o anuncios en ese período?' },
          { pt: 'Quantos seguidores a conta tem?', es: '¿Cuántos seguidores tiene la cuenta?' }],
        conferir: [{ pt: 'Insights › Seletor de entidade e período.', es: 'Estadísticas › Selector de entidad y período.' },
          { pt: 'Aba Público: aviso dos 100 seguidores.', es: 'Pestaña Público: aviso de los 100 seguidores.' }],
        frase: { pt: 'Os números do Facebook e do Instagram são separados, e o período importa. Vamos conferir a entidade, o período e se houve atividade nele.', es: 'Los números de Facebook y de Instagram son separados, y el período importa. Revisemos la entidad, el período y si hubo actividad en él.' },
        passos: [{ pt: 'Em Insights, escolha a entidade e o período.', es: 'En Estadísticas, elige la entidad y el período.' },
          { pt: 'Na aba Público, leia o aviso da tela.', es: 'En la pestaña Público, lee el aviso de la pantalla.' }],
        encaminhar: { pt: 'Se os números não batem com o que o cliente vê, confirme período e entidade e siga a Central de Ajuda da Meta.', es: 'Si los números no coinciden con lo que ve el cliente, confirma período y entidad y sigue el Centro de ayuda de Meta.' }
      }
    }
  ],
  portfolio: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'O que é um portfólio?', es: '¿Qué es un portfolio?' },
      antes: { pt: 'Este é o começo da história: a Marina tem a Lojinha (o site) e um Instagram, mas ainda não usa as ferramentas da Meta.', es: 'Este es el comienzo de la historia: Marina tiene la Lojinha (el sitio) y un Instagram, pero todavía no usa las herramientas de Meta.' },
      gancho: { pt: '“Entendi o que é. E como eu crio o meu?” Vamos criar o portfólio da Marina.', es: '“Entendí qué es. ¿Y cómo creo el mío?” Vamos a crear el portfolio de Marina.' },
      objetivo: { pt: 'Entender o portfólio empresarial: a “pasta” que reúne os ativos da empresa (Página, Instagram, conta de anúncios, Pixel…) e as pessoas que trabalham neles.', es: 'Entender el portfolio comercial: la “carpeta” que reúne los activos de la empresa (Página, Instagram, cuenta publicitaria, Pixel…) y las personas que trabajan en ellos.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Oi! Quero anunciar minha lojinha, mas a Meta me pede um tal de “portfólio empresarial”. É uma loja nova? Vou perder meu Instagram? 😟', es: '¡Hola! Quiero anunciar mi tiendita, pero Meta me pide un tal “portfolio comercial”. ¿Es una tienda nueva? ¿Voy a perder mi Instagram? 😟' }],
          ['rafa', { pt: 'Oi, Marina! Calma, não é loja nova e você não perde nada. O portfólio é como uma pasta da sua empresa: ele junta, num lugar só, suas coisas da Meta.', es: '¡Hola, Marina! Tranquila, no es una tienda nueva y no pierdes nada. El portfolio es como una carpeta de tu empresa: junta, en un solo lugar, tus cosas de Meta.' }],
          ['rafa', { pt: 'Lá dentro ficam os ativos (sua Página, seu Instagram, a conta de anúncios, o Pixel…) e as pessoas que te ajudam, cada uma com o acesso certo.', es: 'Adentro están los activos (tu Página, tu Instagram, la cuenta publicitaria, el Pixel…) y las personas que te ayudan, cada una con el acceso correcto.' }],
          ['pixel', { pt: 'Uma regra importante: cada ativo pertence a UM portfólio só. Eu, por exemplo, vou morar no portfólio da Marina.', es: 'Una regla importante: cada activo pertenece a UN solo portfolio. Yo, por ejemplo, voy a vivir en el portfolio de Marina.' }],
          ['marina', { pt: 'Ahh, então é a pasta da minha empresa! Ufa. 😅', es: '¡Ahh, entonces es la carpeta de mi empresa! Uf. 😅' }]
        ],
        pontos: [
          { pt: '<b>O portfólio é a “pasta” da empresa</b> na Meta (antes se chamava Gerenciador de Negócios).', es: '<b>El portfolio es la “carpeta” de la empresa</b> en Meta (antes se llamaba Business Manager).' },
          { pt: '<b>Dentro dele:</b> os ativos (Página, Instagram, conta de anúncios, Pixel, catálogo) e as pessoas, cada uma com o acesso que precisa.', es: '<b>Adentro:</b> los activos (Página, Instagram, cuenta publicitaria, Pixel, catálogo) y las personas, cada una con el acceso que necesita.' },
          { pt: '<b>Um ativo, um portfólio:</b> a mesma Página não pode estar em dois portfólios.', es: '<b>Un activo, un portfolio:</b> la misma Página no puede estar en dos portfolios.' }
        ],
        notas: { pt: 'A cliente nova tem medo de “perder” o que já tem. Primeiro tranquilize; depois explique a pasta. No atendimento, o primeiro passo de quase todo caso é conferir EM QUAL portfólio a pessoa está.', es: 'La clienta nueva tiene miedo de “perder” lo que ya tiene. Primero tranquiliza; después explica la carpeta. En la atención, el primer paso de casi todo caso es revisar EN CUÁL portfolio está la persona.' }
      },
      ferramenta: 'pasta-portfolio',
      praticar: {
        texto: { pt: 'No simulador das Configurações do portfólio, o Pixel te mostra onde ficam as pessoas, os ativos e a segurança.', es: 'En el simulador de la Configuración del portfolio, el Pixel te muestra dónde están las personas, los activos y la seguridad.' },
        tour: 'conhecer-portfolio', pagina: 'meta-portfolio.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Eu criei 3 portfólios porque não achava o primeiro… e agora não sei em qual estão minhas coisas. 😵', es: 'Creé 3 portfolios porque no encontraba el primero… y ahora no sé en cuál están mis cosas. 😵' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Sem problema, vamos organizar! Você pode me dizer o nome de cada portfólio e o que aparece em Contas › Páginas e Contas de anúncios em cada um? Assim descobrimos onde está cada coisa.”', es: '“¡No hay problema, vamos a organizar! ¿Puedes decirme el nombre de cada portfolio y lo que aparece en Cuentas › Páginas y Cuentas publicitarias en cada uno? Así descubrimos dónde está cada cosa.”' }, fb: { pt: 'Isso! Primeiro descobrir onde está cada ativo (cada um mora em um portfólio só). Depois decidem qual portfólio vai ser o principal.', es: '¡Eso! Primero descubrir dónde está cada activo (cada uno vive en un solo portfolio). Después deciden cuál portfolio va a ser el principal.' } },
          { certa: false, txt: { pt: '“Apague os três e crie um novo.”', es: '“Borra los tres y crea uno nuevo.”' }, fb: { pt: 'Não! Sem saber onde estão os ativos, apagar pode bagunçar ainda mais. Primeiro descubra o que tem em cada um.', es: '¡No! Sin saber dónde están los activos, borrar puede desordenar aún más. Primero descubre qué hay en cada uno.' } },
          { certa: false, txt: { pt: '“Coloque a mesma Página nos três, assim não perde.”', es: '“Pon la misma Página en los tres, así no la pierdes.”' }, fb: { pt: 'Não dá: cada ativo pertence a UM portfólio só.', es: 'No se puede: cada activo pertenece a UN solo portfolio.' } },
          { certa: false, txt: { pt: '“Isso não é com o suporte.”', es: '“Eso no es con el soporte.”' }, fb: { pt: 'É sim! Organizar onde estão os ativos é um atendimento comum e você consegue guiar.', es: '¡Sí lo es! Organizar dónde están los activos es una atención común y puedes guiarla.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual é o nome do portfólio que você está usando? (aparece no canto superior esquerdo das Configurações)', es: '¿Cuál es el nombre del portfolio que estás usando? (aparece arriba a la izquierda en la Configuración)' },
          { pt: 'O que aparece em Contas › Páginas e Contas de anúncios?', es: '¿Qué aparece en Cuentas › Páginas y Cuentas publicitarias?' },
          { pt: 'Você tem mais de um portfólio?', es: '¿Tienes más de un portfolio?' }],
        conferir: [{ pt: 'Em qual portfólio o cliente está (o nome no topo).', es: 'En qué portfolio está el cliente (el nombre arriba).' },
          { pt: 'Quais ativos estão nesse portfólio.', es: 'Qué activos están en ese portfolio.' },
          { pt: 'Lembrar: cada ativo mora em UM portfólio.', es: 'Recordar: cada activo vive en UN portfolio.' }],
        frase: { pt: 'O portfólio é como a pasta da sua empresa na Meta: ele junta seus ativos (Página, Instagram, conta de anúncios, Pixel) e as pessoas que te ajudam. Você não perde nada do que já tem.', es: 'El portfolio es como la carpeta de tu empresa en Meta: junta tus activos (Página, Instagram, cuenta publicitaria, Pixel) y las personas que te ayudan. No pierdes nada de lo que ya tienes.' },
        encaminhar: { pt: 'Se o cliente perdeu o acesso ao portfólio ou à conta pessoal, siga os caminhos oficiais de recuperação de acesso da Meta (Central de Ajuda).', es: 'Si el cliente perdió el acceso al portfolio o a la cuenta personal, sigue los caminos oficiales de recuperación de acceso de Meta (Centro de ayuda).' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/1710077379203657', titulo: { pt: 'Criar um portfólio empresarial (o que é e o que reúne)', es: 'Crear un portfolio comercial (qué es y qué reúne)' }, conferido: '14/10/2026' },
        { url: 'https://www.facebook.com/business/help/720478807965744', titulo: { pt: 'Adicionar uma Página ao portfólio (cada ativo em um portfólio só)', es: 'Agregar una Página al portfolio (cada activo en un solo portfolio)' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '02', min: 6, status: 'pronta',
      titulo: { pt: 'Criar o portfólio', es: 'Crear el portfolio' },
      antes: { pt: 'A Marina entendeu que o portfólio é a pasta da empresa. Agora ela quer o dela.', es: 'Marina entendió que el portfolio es la carpeta de la empresa. Ahora quiere el suyo.' },
      gancho: { pt: '“Criei! Meu sobrinho vai me ajudar com as postagens. Como dou acesso para ele?” Vamos ver pessoas e acessos.', es: '“¡Lo creé! Mi sobrino me va a ayudar con las publicaciones. ¿Cómo le doy acceso?” Vamos a ver personas y accesos.' },
      objetivo: { pt: 'Conhecer o passo a passo para criar o portfólio e os erros comuns (nome com caracteres especiais).', es: 'Conocer el paso a paso para crear el portfolio y los errores comunes (nombre con caracteres especiales).' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Fui criar o portfólio e deu erro no nome! Coloquei “Lojinha da Marina (oficial)”. 😤', es: '¡Fui a crear el portfolio y dio error en el nombre! Puse “Lojinha da Marina (oficial)”. 😤' }],
          ['rafa', { pt: 'Isso acontece! Os parênteses dão o erro “não pode conter caracteres especiais”. Tira os parênteses que passa.', es: '¡Pasa! Los paréntesis dan el error “no puede contener caracteres especiales”. Quita los paréntesis y pasa.' }],
          ['rafa', { pt: 'E o nome deve ser o nome público da sua empresa, porque fica visível na Meta. Depois vêm seus dados de contato (nome e email comercial), os ativos e as pessoas.', es: 'Y el nombre debe ser el nombre público de tu empresa, porque queda visible en Meta. Después vienen tus datos de contacto (nombre y correo comercial), los activos y las personas.' }],
          ['pixel', { pt: 'Quem cria o portfólio ganha controle total. É a Marina quem manda na pasta!', es: 'Quien crea el portfolio recibe control total. ¡Marina es quien manda en la carpeta!' }]
        ],
        pontos: [
          { pt: '<b>Nome:</b> o nome público da empresa. Os parênteses dão erro de caracteres especiais (visto de verdade).', es: '<b>Nombre:</b> el nombre público de la empresa. Los paréntesis dan error de caracteres especiales (visto de verdad).' },
          { pt: '<b>Contato:</b> nome, sobrenome e email comercial de quem cria (vira administrador).', es: '<b>Contacto:</b> nombre, apellido y correo comercial de quien crea (se vuelve administrador).' },
          { pt: '<b>Depois:</b> escolher os ativos, chamar pessoas (pode pular) e confirmar. Dá para editar tudo mais tarde.', es: '<b>Después:</b> elegir los activos, invitar personas (se puede saltar) y confirmar. Se puede editar todo más tarde.' }
        ],
        notas: { pt: 'O erro dos parênteses aconteceu de verdade quando criamos o portfólio da Lojinha em 13/10/2026. Use isso: é um caso real e comum.', es: 'El error de los paréntesis pasó de verdad cuando creamos el portfolio de la Lojinha el 13/10/2026. Úsalo: es un caso real y común.' }
      },
      ferramenta: 'nome-portfolio',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para criar o portfólio da Marina do zero, etapa por etapa (e você ainda pode testar o erro dos parênteses).', es: 'En el simulador, el Pixel te guía para crear el portfolio de Marina desde cero, etapa por etapa (y aún puedes probar el error de los paréntesis).' },
        tour: 'criar-portfolio', pagina: 'meta-portfolio.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Está dando “O nome do portfólio empresarial não pode conter caracteres especiais”. Coloquei “Lojinha da Marina (oficial) ✨”.', es: 'Me sale “El nombre del portfolio comercial no puede contener caracteres especiales”. Puse “Lojinha da Marina (oficial) ✨”.' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Tira os parênteses e o emoji e deixa só o nome público da empresa, por exemplo: Lojinha da Marina. Aí ele passa.”', es: '“Quita los paréntesis y el emoji y deja solo el nombre público de la empresa, por ejemplo: Lojinha da Marina. Así pasa.”' }, fb: { pt: 'Isso! Resolveu junto, na hora, e ainda lembrou que o nome deve ser o nome público da empresa.', es: '¡Eso! Lo resolviste junto, al momento, y además recordaste que el nombre debe ser el nombre público de la empresa.' } },
          { certa: false, txt: { pt: '“É um erro da Meta, tente amanhã.”', es: '“Es un error de Meta, intenta mañana.”' }, fb: { pt: 'Não. O erro diz exatamente o problema: tem caractere especial no nome.', es: 'No. El error dice exactamente el problema: hay un carácter especial en el nombre.' } },
          { certa: false, txt: { pt: '“Coloque qualquer nome, depois ninguém vê.”', es: '“Pon cualquier nombre, después nadie lo ve.”' }, fb: { pt: 'Não: o nome fica visível na Meta e deve ser o nome público da empresa.', es: 'No: el nombre queda visible en Meta y debe ser el nombre público de la empresa.' } },
          { certa: false, txt: { pt: '“Crie com o email de outra pessoa.”', es: '“Créalo con el correo de otra persona.”' }, fb: { pt: 'Não! Quem cria vira administrador com controle total. Tem que ser a própria dona (ou quem administra a empresa).', es: '¡No! Quien crea se vuelve administrador con control total. Tiene que ser la propia dueña (o quien administra la empresa).' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual nome você colocou no portfólio?', es: '¿Qué nombre pusiste en el portfolio?' },
          { pt: 'Qual mensagem de erro aparece?', es: '¿Qué mensaje de error aparece?' },
          { pt: 'Você é a dona (ou quem administra) a empresa?', es: '¿Eres la dueña (o quien administra) la empresa?' }],
        conferir: [{ pt: 'O nome não tem parênteses, emojis nem símbolos.', es: 'El nombre no tiene paréntesis, emojis ni símbolos.' },
          { pt: 'O nome é o nome público da empresa.', es: 'El nombre es el nombre público de la empresa.' },
          { pt: 'Quem está criando é quem vai administrar (vira controle total).', es: 'Quien está creando es quien va a administrar (recibe control total).' }],
        frase: { pt: 'Tira os parênteses e o emoji e deixa só o nome público da empresa, por exemplo: Lojinha da Marina. Aí ele passa.', es: 'Quita los paréntesis y el emoji y deja solo el nombre público de la empresa, por ejemplo: Lojinha da Marina. Así pasa.' },
        passos: [{ pt: 'Abra o Meta Business Suite e escolha “Criar um portfólio empresarial”.', es: 'Abre Meta Business Suite y elige “Crear un portfolio comercial”.' },
          { pt: 'Digite o nome público da empresa (sem parênteses ou emojis).', es: 'Escribe el nombre público de la empresa (sin paréntesis ni emojis).' },
          { pt: 'Preencha seu nome, sobrenome e email comercial e clique em Criar.', es: 'Completa tu nombre, apellido y correo comercial y haz clic en Crear.' },
          { pt: 'Escolha os ativos (ou pule), chame pessoas (ou pule) e confirme.', es: 'Elige los activos (o salta), invita personas (o salta) y confirma.' }],
        encaminhar: { pt: 'Se a criação falhar mesmo com o nome certo, oriente a seguir a Central de Ajuda da Meta para criar o portfólio.', es: 'Si la creación falla incluso con el nombre correcto, orienta a seguir el Centro de ayuda de Meta para crear el portfolio.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/1710077379203657', titulo: { pt: 'Criar um portfólio empresarial no Meta Business Suite', es: 'Crear un portfolio comercial en Meta Business Suite' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '03', min: 7, status: 'pronta',
      titulo: { pt: 'Pessoas e acessos', es: 'Personas y accesos' },
      antes: { pt: 'O portfólio da Marina está criado, e ela tem controle total.', es: 'El portfolio de Marina está creado, y ella tiene control total.' },
      gancho: { pt: '“E minha Página? Ela está no portfólio de outra pessoa!” Vamos ver os ativos.', es: '“¿Y mi Página? ¡Está en el portfolio de otra persona!” Vamos a ver los activos.' },
      objetivo: { pt: 'Saber dar o acesso certo a cada pessoa: controle total, acesso básico com ativos atribuídos, ou parceiro.', es: 'Saber dar el acceso correcto a cada persona: control total, acceso básico con activos asignados, o socio.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu sobrinho vai fazer as postagens da Página. Dou controle total pra ele, né? É mais fácil. 😊', es: 'Mi sobrino va a hacer las publicaciones de la Página. Le doy control total, ¿no? Es más fácil. 😊' }],
          ['rafa', { pt: 'Mais fácil, mas não mais seguro! Com controle total ele mexeria em tudo, até em quem tem acesso. A Meta recomenda dar só o acesso que a pessoa precisa.', es: '¡Más fácil, pero no más seguro! Con control total tocaría todo, hasta quién tiene acceso. Meta recomienda dar solo el acceso que la persona necesita.' }],
          ['rafa', { pt: 'Você convida ele em Pessoas. Ele entra com acesso básico, que é o padrão, e você atribui só a Página para ele trabalhar.', es: 'Lo invitas en Personas. Entra con acceso básico, que es el predeterminado, y le asignas solo la Página para que trabaje.' }],
          ['pixel', { pt: 'E se for uma agência, de outra empresa? Aí ela entra como parceiro, não como pessoa.', es: '¿Y si es una agencia, de otra empresa? Entonces entra como socio, no como persona.' }]
        ],
        pontos: [
          { pt: '<b>Acesso total (“Tudo”):</b> para quem administra a empresa. Mexe em tudo, dá acesso total a outros e pode até excluir o portfólio.', es: '<b>Acceso total (“Todo”):</b> para quien administra la empresa. Toca todo, da acceso total a otros y puede hasta eliminar el portfolio.' },
          { pt: '<b>Acesso básico (padrão) + ativos atribuídos:</b> a pessoa trabalha só no que você der, com acesso parcial ou total àquele ativo.', es: '<b>Acceso básico (predeterminado) + activos asignados:</b> la persona trabaja solo en lo que le des, con acceso parcial o total a ese activo.' },
          { pt: '<b>Parceiro:</b> outra empresa (como uma agência) entra como parceiro. E ative a autenticação de dois fatores.', es: '<b>Socio:</b> otra empresa (como una agencia) entra como socio. Y activa la autenticación en dos pasos.' }
        ],
        notas: { pt: 'Erro clássico: dar controle total para todo mundo “porque é mais fácil”. Mostre o risco com calma. As 4 etapas do convite no simulador foram conferidas na tela real (14/10/2026). Na tela real, o acesso total aparece como “Tudo · Gerenciar” e avisa que a pessoa pode até excluir o portfólio.', es: 'Error clásico: dar control total a todos “porque es más fácil”. Muestra el riesgo con calma. Las 4 etapas de la invitación en el simulador se revisaron en la pantalla real (14/10/2026). En la pantalla real, el acceso total aparece como “Todo · Gestionar” y avisa que la persona puede hasta eliminar el portfolio.' }
      },
      ferramenta: 'quem-precisa',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para convidar o sobrinho da Marina com o acesso certo.', es: 'En el simulador, el Pixel te guía para invitar al sobrino de Marina con el acceso correcto.' },
        tour: 'convidar-pessoa', pagina: 'meta-portfolio.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Dei controle total pro estagiário postar no Instagram. Tem algum problema? 🤔', es: 'Le di control total al pasante para publicar en Instagram. ¿Hay algún problema? 🤔' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Funciona, mas é arriscado: com controle total ele pode mexer em tudo, até tirar pessoas. O ideal é acesso básico e atribuir só o Instagram para ele. Quer que eu te mostre onde trocar?”', es: '“Funciona, pero es arriesgado: con control total puede tocar todo, hasta quitar personas. Lo ideal es acceso básico y asignarle solo el Instagram. ¿Quieres que te muestre dónde cambiarlo?”' }, fb: { pt: 'Isso! Você explicou o risco sem assustar e mostrou o caminho recomendado pela Meta: só o acesso necessário.', es: '¡Eso! Explicaste el riesgo sin asustar y mostraste el camino recomendado por Meta: solo el acceso necesario.' } },
          { certa: false, txt: { pt: '“Nenhum problema, quanto mais acesso melhor.”', es: '“Ningún problema, cuanto más acceso, mejor.”' }, fb: { pt: 'Não. A Meta recomenda o contrário: dar só o acesso que a pessoa precisa.', es: 'No. Meta recomienda lo contrario: dar solo el acceso que la persona necesita.' } },
          { certa: false, txt: { pt: '“Passa sua senha pra ele, é mais rápido.”', es: '“Pásale tu contraseña, es más rápido.”' }, fb: { pt: 'Nunca! Senha não se compartilha. Cada pessoa entra com a própria conta e o acesso que você der.', es: '¡Nunca! La contraseña no se comparte. Cada persona entra con su propia cuenta y el acceso que le des.' } },
          { certa: false, txt: { pt: '“Exclui o portfólio e cria outro só pra ele.”', es: '“Borra el portfolio y crea otro solo para él.”' }, fb: { pt: 'Não precisa! É só ajustar o acesso dele em Pessoas.', es: '¡No hace falta! Solo hay que ajustar su acceso en Personas.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O que essa pessoa vai fazer de verdade (postar, anunciar, administrar)?', es: '¿Qué va a hacer esta persona de verdad (publicar, anunciar, administrar)?' },
          { pt: 'Ela é da sua empresa ou de outra empresa (agência)?', es: '¿Es de tu empresa o de otra empresa (agencia)?' },
          { pt: 'A autenticação de dois fatores está ativada?', es: '¿La autenticación en dos pasos está activada?' }],
        conferir: [{ pt: 'Controle total só para quem administra a empresa.', es: 'Control total solo para quien administra la empresa.' },
          { pt: 'Os outros: acesso básico + só os ativos em que trabalham.', es: 'Los demás: acceso básico + solo los activos en que trabajan.' },
          { pt: 'Outra empresa = parceiro. Senha nunca se compartilha.', es: 'Otra empresa = socio. La contraseña nunca se comparte.' }],
        frase: { pt: 'O ideal é dar só o acesso que a pessoa precisa: convide em Pessoas com acesso básico e atribua só o ativo em que ela vai trabalhar.', es: 'Lo ideal es dar solo el acceso que la persona necesita: invítala en Personas con acceso básico y asígnale solo el activo en que va a trabajar.' },
        passos: [{ pt: 'Configurações › Usuários › Pessoas › Convidar pessoas.', es: 'Configuración › Usuarios › Personas › Invitar personas.' },
          { pt: 'Digite o email da pessoa e avance.', es: 'Escribe el correo de la persona y avanza.' },
          { pt: 'Escolha o acesso e atribua só os ativos necessários.', es: 'Elige el acceso y asigna solo los activos necesarios.' },
          { pt: 'Analise e envie o convite.', es: 'Revisa y envía la invitación.' }],
        encaminhar: { pt: 'Se o cliente perdeu o acesso de administrador (ninguém tem controle total), siga os caminhos oficiais de recuperação de acesso da Central de Ajuda da Meta.', es: 'Si el cliente perdió el acceso de administrador (nadie tiene control total), sigue los caminos oficiales de recuperación de acceso del Centro de ayuda de Meta.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/2169003770027706', titulo: { pt: 'Adicionar pessoas ao portfólio e atribuir ativos', es: 'Agregar personas al portfolio y asignar activos' }, conferido: '14/10/2026' },
        { url: 'https://www.facebook.com/business/help/1717412048538897', titulo: { pt: 'Dar acesso a um parceiro (controle total ou acesso parcial)', es: 'Dar acceso a un socio (control total o acceso parcial)' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '04', min: 8, status: 'pronta',
      titulo: { pt: 'Os ativos: Página e conta de anúncios', es: 'Los activos: Página y cuenta publicitaria' },
      antes: { pt: 'A Marina já tem portfólio e o sobrinho com o acesso certo.', es: 'Marina ya tiene portfolio y al sobrino con el acceso correcto.' },
      gancho: { pt: '“Portfólio pronto! Agora uma amiga disse que eu preciso colocar o Pixel no site.” Próximo módulo: Pixel.', es: '“¡Portfolio listo! Ahora una amiga me dijo que tengo que poner el Pixel en el sitio.” Próximo módulo: Pixel.' },
      objetivo: { pt: 'Saber trazer uma Página que está em outro portfólio (pelos caminhos oficiais) e criar a conta de anúncios certa (moeda e fuso não mudam depois).', es: 'Saber traer una Página que está en otro portfolio (por los caminos oficiales) y crear la cuenta publicitaria correcta (moneda y zona horaria no cambian después).' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Fui adicionar minha Página e ela está no portfólio da minha esposa, que eu usava antes! E agora? 😰', es: '¡Fui a agregar mi Página y está en el portfolio de mi esposa, que usaba antes! ¿Y ahora? 😰' }],
          ['rafa', { pt: 'Tem jeito! Não existe transferência direta, mas é simples: quem administra o portfólio da sua esposa remove a Página de lá, e aí você adiciona no seu, como “Página existente”.', es: '¡Tiene solución! No existe transferencia directa, pero es simple: quien administra el portfolio de tu esposa quita la Página de ahí, y entonces la agregas en el tuyo, como “Página existente”.' }],
          ['pixel', { pt: 'Se a Página tem Instagram conectado, o Instagram vai junto para o portfólio novo.', es: 'Si la Página tiene Instagram conectado, el Instagram va junto al nuevo portfolio.' }],
          ['marina', { pt: 'Ufa! E pra anunciar, preciso de uma conta de anúncios, né?', es: '¡Uf! ¿Y para anunciar necesito una cuenta publicitaria, no?' }],
          ['rafa', { pt: 'Isso! E atenção na hora de criar: moeda e fuso horário não podem ser trocados depois. Escolha real e o horário de São Paulo.', es: '¡Eso! Y atención al crearla: la moneda y la zona horaria no se pueden cambiar después. Elige real y el horario de São Paulo.' }]
        ],
        pontos: [
          { pt: '<b>Página em outro portfólio:</b> quem administra aquele portfólio remove a Página; depois a dona adiciona no portfólio dela. Não existe transferência direta.', es: '<b>Página en otro portfolio:</b> quien administra ese portfolio quita la Página; después la dueña la agrega en su portfolio. No existe transferencia directa.' },
          { pt: '<b>Agência?</b> Não precisa mudar o dono: ela pede “acesso compartilhado” à Página do cliente.', es: '<b>¿Agencia?</b> No hace falta cambiar el dueño: pide “acceso compartido” a la Página del cliente.' },
          { pt: '<b>Conta de anúncios:</b> moeda e fuso horário NÃO mudam depois, e a conta não pode ser removida do portfólio. Criar não cobra nada.', es: '<b>Cuenta publicitaria:</b> moneda y zona horaria NO cambian después, y la cuenta no se puede quitar del portfolio. Crearla no cobra nada.' }
        ],
        notas: { pt: 'O caso da Página “presa” em outro portfólio aconteceu de verdade com a nossa Lojinha. O fuso e a moeda errados (o padrão é dólar e horário de Los Angeles) são erros muito comuns de cliente nova.', es: 'El caso de la Página “atrapada” en otro portfolio pasó de verdad con nuestra Lojinha. La zona y la moneda equivocadas (lo predeterminado es dólar y horario de Los Ángeles) son errores muy comunes de clienta nueva.' }
      },
      ferramenta: 'de-quem-e',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para criar a conta de anúncios da Marina, com a moeda e o fuso certos.', es: 'En el simulador, el Pixel te guía para crear la cuenta publicitaria de Marina, con la moneda y la zona horaria correctas.' },
        tour: 'criar-conta-anuncios', pagina: 'meta-portfolio.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Criei minha conta de anúncios ontem e os valores estão em dólar! Como troco para real? 💵', es: '¡Creé mi cuenta publicitaria ayer y los valores están en dólares! ¿Cómo lo cambio a reales? 💵' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“A moeda não pode ser trocada depois que a conta é criada. O caminho é criar uma nova conta de anúncios, escolhendo real e o fuso de São Paulo, e usar essa nos seus anúncios.”', es: '“La moneda no se puede cambiar después de crear la cuenta. El camino es crear una nueva cuenta publicitaria, eligiendo real y la zona de São Paulo, y usar esa en tus anuncios.”' }, fb: { pt: 'Isso! Você foi honesto sobre o limite e já deu a solução oficial. E lembrou do fuso, que tem a mesma regra.', es: '¡Eso! Fuiste honesto sobre el límite y ya diste la solución oficial. Y recordaste la zona horaria, que tiene la misma regla.' } },
          { certa: false, txt: { pt: '“Vai em Configurações e troca a moeda.”', es: '“Ve a Configuración y cambia la moneda.”' }, fb: { pt: 'Não existe essa opção: moeda e fuso ficam fixos depois de criar.', es: 'No existe esa opción: moneda y zona horaria quedan fijas después de crear.' } },
          { certa: false, txt: { pt: '“Remove a conta do portfólio e cria de novo com o mesmo nome.”', es: '“Quita la cuenta del portfolio y créala otra vez con el mismo nombre.”' }, fb: { pt: 'Não dá: depois de adicionada, a conta de anúncios não pode ser removida do portfólio. Basta criar uma nova e usar a nova.', es: 'No se puede: después de agregada, la cuenta publicitaria no se puede quitar del portfolio. Basta crear una nueva y usar la nueva.' } },
          { certa: false, txt: { pt: '“Tanto faz, a Meta converte sozinha.”', es: '“Da igual, Meta lo convierte sola.”' }, fb: { pt: 'Não é assim: os relatórios e o orçamento ficam na moeda da conta. Por isso a escolha certa importa.', es: 'No es así: los informes y el presupuesto quedan en la moneda de la cuenta. Por eso la elección correcta importa.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Em qual portfólio a Página está hoje? Quem administra esse portfólio?', es: '¿En qué portfolio está la Página hoy? ¿Quién administra ese portfolio?' },
          { pt: 'Você é a dona da Página ou uma agência trabalhando para um cliente?', es: '¿Eres la dueña de la Página o una agencia trabajando para un cliente?' },
          { pt: 'Qual moeda e fuso aparecem na conta de anúncios?', es: '¿Qué moneda y zona horaria aparecen en la cuenta publicitaria?' }],
        conferir: [{ pt: 'Dono da Página: remove de um portfólio e adiciona no outro (não há transferência direta).', es: 'Dueño de la Página: la quita de un portfolio y la agrega en el otro (no hay transferencia directa).' },
          { pt: 'Agência: pede acesso compartilhado, sem mudar o dono.', es: 'Agencia: pide acceso compartido, sin cambiar el dueño.' },
          { pt: 'Conta de anúncios com a moeda e o fuso certos (não mudam depois).', es: 'Cuenta publicitaria con la moneda y la zona horaria correctas (no cambian después).' }],
        frase: { pt: 'A moeda e o fuso não podem ser trocados depois que a conta é criada. O caminho é criar uma nova conta de anúncios, escolhendo real e o fuso de São Paulo, e usar essa nos seus anúncios.', es: 'La moneda y la zona horaria no se pueden cambiar después de crear la cuenta. El camino es crear una nueva cuenta publicitaria, eligiendo real y la zona de São Paulo, y usar esa en tus anuncios.' },
        passos: [{ pt: 'Página em outro portfólio: quem administra aquele portfólio vai em Configurações › Contas › Páginas, seleciona a Página e clica em Remover.', es: 'Página en otro portfolio: quien administra ese portfolio va a Configuración › Cuentas › Páginas, selecciona la Página y hace clic en Quitar.' },
          { pt: 'Depois, no seu portfólio: Contas › Páginas › Adicionar › “Adicionar uma Página do Facebook existente”.', es: 'Después, en tu portfolio: Cuentas › Páginas › Agregar › “Agregar una Página de Facebook existente”.' },
          { pt: 'Conta de anúncios: Contas › Contas de anúncios › Adicionar › Criar uma nova conta de anúncios (escolha a moeda e o fuso certos).', es: 'Cuenta publicitaria: Cuentas › Cuentas publicitarias › Agregar › Crear una nueva cuenta publicitaria (elige la moneda y la zona horaria correctas).' }],
        encaminhar: { pt: 'Criar a conta de anúncios e mudar moeda ou fuso não são do seu escopo: confirme o que a cliente precisa e encaminhe à área de contas. Se quem administra o outro portfólio não responde ou não pode remover a Página, oriente a seguir a Central de Ajuda da Meta para Páginas.', es: 'Crear la cuenta publicitaria y cambiar moneda o zona horaria no son de tu alcance: confirma qué necesita la clienta y deriva al área de cuentas. Si quien administra el otro portfolio no responde o no puede quitar la Página, orienta a seguir el Centro de ayuda de Meta para Páginas.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/531142997352616', titulo: { pt: 'Remover uma Página do portfólio (e adicionar em outro)', es: 'Quitar una Página del portfolio (y agregarla en otro)' }, conferido: '14/10/2026' },
        { url: 'https://www.facebook.com/business/help/720478807965744', titulo: { pt: 'Adicionar uma Página ao portfólio', es: 'Agregar una Página al portfolio' }, conferido: '14/10/2026' }
      ]
    }
  ],
  pixel: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'O que é o Pixel?', es: '¿Qué es el Pixel?' },
      antes: { pt: 'A Marina já tem o portfólio empresarial, com as pessoas e os ativos no lugar. Agora uma amiga disse que ela “precisa colocar o Pixel”.', es: 'Marina ya tiene el portfolio comercial, con las personas y los activos en su lugar. Ahora una amiga le dijo que “tiene que poner el Pixel”.' },
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
          { pt: 'Você já tem um portfólio empresarial?', es: '¿Ya tienes un portfolio comercial?' }],
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
      objetivo: { pt: 'Saber onde o Pixel é criado (no Gerenciador de Eventos, dentro do portfólio) e os jeitos de colocar no site.', es: 'Saber dónde se crea el Pixel (en el Administrador de eventos, dentro del portfolio) y las formas de ponerlo en el sitio.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Quero o meu Pixel! A IA me mandou um código pronto do Pixel. Posso colar esse no meu site? 🤔', es: '¡Quiero mi Pixel! La IA me mandó un código listo del Pixel. ¿Puedo pegar ese en mi sitio? 🤔' }],
          ['rafa', { pt: 'Melhor não! Cada Pixel tem o seu próprio identificador. Um código de outro lugar manda os dados para o Pixel de outra pessoa (ou para lugar nenhum).', es: '¡Mejor no! Cada Pixel tiene su propio identificador. Un código de otro lugar manda los datos al Pixel de otra persona (o a ningún lado).' }],
          ['rafa', { pt: 'Você cria o seu no Gerenciador de Eventos, dentro do seu portfólio, e pega lá mesmo o código com o SEU número.', es: 'Creas el tuyo en el Administrador de eventos, dentro de tu portfolio, y ahí mismo tomas el código con TU número.' }],
          ['pixel', { pt: 'A Meta agora me chama de “conjunto de dados”. É o mesmo Pixel!', es: 'Meta ahora me llama “conjunto de datos”. ¡Es el mismo Pixel!' }],
          ['marina', { pt: 'E depois de criar, como coloco no site?', es: '¿Y después de crearlo, cómo lo pongo en el sitio?' }],
          ['rafa', { pt: 'Se sua loja é de uma plataforma (como a Shopify), dá para conectar pela integração. Se não, o código vai no topo de todas as páginas. Ou você manda o código para quem cuida do site.', es: 'Si tu tienda es de una plataforma (como Shopify), se puede conectar por la integración. Si no, el código va arriba en todas las páginas. O le mandas el código a quien cuida el sitio.' }]
        ],
        pontos: [
          { pt: '<b>Onde criar:</b> no Gerenciador de Eventos, dentro do portfólio empresarial (Conectar dados › Web).', es: '<b>Dónde crearlo:</b> en el Administrador de eventos, dentro del portfolio comercial (Conectar datos › Web).' },
          { pt: '<b>Um Pixel, um número:</b> o código tem que ter o identificador do Pixel DO CLIENTE. Nunca use código copiado de outro lugar.', es: '<b>Un Pixel, un número:</b> el código tiene que tener el identificador del Pixel DEL CLIENTE. Nunca uses código copiado de otro lugar.' },
          { pt: '<b>Como colocar no site:</b> pela integração da plataforma, no topo (&lt;head&gt;) de todas as páginas, ou enviando o código para quem cuida do site.', es: '<b>Cómo ponerlo en el sitio:</b> por la integración de la plataforma, arriba (&lt;head&gt;) en todas las páginas, o enviando el código a quien cuida el sitio.' }
        ],
        notas: { pt: 'O “código da IA” prepara a aula 03 (“é o Pixel certo?”). O agente não instala nada no site do cliente: ele explica onde criar, os jeitos de colocar e, se for preciso, orienta a chamar quem cuida do site. Cenário alternativo (visto de verdade em 14/10/2026): o botão Criar dá erro em um computador e funciona em outro — extensões do navegador ou a rede podem bloquear; a dica de outro navegador/dispositivo está na Cola.', es:'El “código de la IA” prepara la clase 03 (“¿es el Pixel correcto?”). El agente no instala nada en el sitio del cliente: explica dónde crearlo, las formas de ponerlo y, si hace falta, orienta a llamar a quien cuida el sitio. Escenario alternativo (visto de verdad el 14/10/2026): el botón Crear da error en una computadora y funciona en otra — las extensiones del navegador o la red pueden bloquear; el consejo de otro navegador/dispositivo está en la Guía rápida.' }
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
        conferir: [{ pt: 'O Pixel foi criado no portfólio certo (o da empresa do cliente).', es: 'El Pixel se creó en el portfolio correcto (el de la empresa del cliente).' },
          { pt: 'O código usado é o do Pixel dele, não um copiado de outro lugar.', es: 'El código usado es el de su Pixel, no uno copiado de otro lugar.' },
          { pt: 'O código está em todas as páginas (ou a integração da plataforma está ligada).', es: 'El código está en todas las páginas (o la integración de la plataforma está activa).' }],
        frase: { pt: 'O código vai no topo de todas as páginas do site, não só na inicial. Se sua loja é de uma plataforma, dá para conectar pela integração, sem mexer em código.', es: 'El código va arriba en todas las páginas del sitio, no solo en la de inicio. Si tu tienda es de una plataforma, se puede conectar por la integración, sin tocar código.' },
        passos: [{ pt: 'Abra o Gerenciador de Eventos e clique em Conectar dados.', es: 'Abre el Administrador de eventos y haz clic en Conectar datos.' },
          { pt: 'Escolha Web e clique em Avançar.', es: 'Elige Web y haz clic en Siguiente.' },
          { pt: 'Dê um nome ao Pixel e clique em Criar.', es: 'Ponle un nombre al Pixel y haz clic en Crear.' },
          { pt: 'Depois, coloque no site pela integração da sua plataforma ou cole o código no topo de todas as páginas.', es: 'Después, ponlo en el sitio por la integración de tu plataforma o pega el código arriba en todas las páginas.' },
          { pt: '💡 Deu erro ao clicar em Criar (“O conteúdo solicitado não pode ser exibido no momento…”)? Antes de tentar de novo, peça para usar outro navegador, uma janela anônima ou outro dispositivo/rede: extensões do navegador e algumas redes bloqueiam a criação. Evite repetir várias vezes no mesmo lugar.', es: '💡 ¿Dio error al hacer clic en Crear (“El contenido solicitado no se puede mostrar en este momento…”)? Antes de intentar de nuevo, pide usar otro navegador, una ventana de incógnito u otro dispositivo/red: las extensiones del navegador y algunas redes bloquean la creación. Evita repetir varias veces en el mismo lugar.' }],
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
  anuncios: [
    {
      id: '01', min: 7, status: 'pronta',
      titulo: { pt: 'Turbinar ou Gerenciador de Anúncios?', es: '¿Promocionar o Administrador de anuncios?' },
      antes: { pt: 'A Marina tem a Página, a conta de anúncios e o Pixel no site. Ela publicou um post e viu um botão azul: “Turbinar”.', es: 'Marina tiene la Página, la cuenta publicitaria y el Pixel en el sitio. Publicó un post y vio un botón azul: “Promocionar”.' },
      gancho: { pt: '“Turbinei e deu certo! Mas eu quero vender de verdade, medindo as compras.” Vamos conhecer o Gerenciador de Anúncios e seus três níveis.', es: '“¡Promocioné y funcionó! Pero quiero vender de verdad, midiendo las compras.” Vamos a conocer el Administrador de anuncios y sus tres niveles.' },
      objetivo: { pt: 'Saber quando o Turbinar basta e quando é hora do Gerenciador, e fazer um turbinamento sem cair nas pegadinhas.', es: 'Saber cuándo basta Promocionar y cuándo es hora del Administrador, y hacer un promoción sin caer en las trampas.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Apareceu um botão “Turbinar” no meu post. É a mesma coisa que o Gerenciador de Anúncios? 🤔', es: 'Apareció un botón “Promocionar” en mi post. ¿Es lo mismo que el Administrador de anuncios? 🤔' }],
          ['rafa', { pt: 'Não é igual. Turbinar pega um post que já existe e transforma em anúncio, em poucos passos: meta, botão, público, duração e orçamento. É ótimo para dar uma força num post. O Gerenciador é onde você monta campanhas de verdade, com objetivo, conjunto de anúncios e anúncio.', es: 'No es igual. Promocionar toma un post que ya existe y lo convierte en anuncio, en pocos pasos: objetivo, botón, público, duración y presupuesto. Es genial para darle fuerza a un post. El Administrador es donde armas campañas de verdad, con objetivo, conjunto de anuncios y anuncio.' }],
          ['marina', { pt: 'E se o meu post for só a foto de perfil?', es: '¿Y si mi post es solo la foto de perfil?' }],
          ['rafa', { pt: 'Foto de perfil não pode ser turbinada. A saída é publicar a foto como um post novo e turbinar esse post.', es: 'La foto de perfil no se puede promocionar. La salida es publicar la foto como un post nuevo e promocionar ese post.' }],
          ['pixel', { pt: 'Pegadinha real: ao trocar a meta no Turbinar, o botão do anúncio não troca sozinho. Confira a prévia antes de publicar.', es: 'Trampa real: al cambiar el objetivo en Promocionar, el botón del anuncio no cambia solo. Revisa la vista previa antes de publicar.' }]
        ],
        pontos: [
          { pt: '<b>Turbinar:</b> transforma um <b>post que já existe</b> em anúncio, em poucos campos. Bom para engajamento, mensagens ou ligações.', es: '<b>Promocionar:</b> convierte un <b>post que ya existe</b> en anuncio, en pocos campos. Bueno para interacción, mensajes o llamadas.' },
          { pt: '<b>Gerenciador de Anúncios:</b> campanha › conjunto › anúncio. É onde entram o objetivo Vendas, o conjunto de dados (Pixel) e os testes de público.', es: '<b>Administrador de anuncios:</b> campaña › conjunto › anuncio. Es donde entran el objetivo Ventas, el conjunto de datos (Pixel) y las pruebas de público.' },
          { pt: '<b>Nem todo post pode ser turbinado:</b> foto de perfil, rascunho, álbum e post compartilhado, por exemplo, não podem.', es: '<b>No todo post se puede promocionar:</b> foto de perfil, borrador, álbum y post compartido, por ejemplo, no se pueden.' }
        ],
        notas: { pt: 'Fontes: Central de Ajuda da Meta, “Sobre os posts turbinados” e “Tipos de posts que não podem ser turbinados na sua Página do Facebook” (lidas em 16/10/2026). As telas do Turbinar foram vistas de verdade em 15/10/2026, e um anúncio de teste foi publicado de verdade (R$ 5,27 por 1 dia). A lista de metas do Turbinar não tem o objetivo Vendas; ele aparece no Gerenciador (e no “Criar anúncio” do Business Suite).', es: 'Fuentes: Centro de ayuda de Meta, “Acerca de las publicaciones promocionadas” y “Tipos de publicaciones que no se pueden promocionar en tu Página de Facebook” (leídas el 16/10/2026). Las pantallas de Promocionar se vieron de verdad el 15/10/2026, y se publicó de verdad un anuncio de prueba (R$ 5,27 por 1 día). La lista de metas de Promocionar no tiene el objetivo Ventas; aparece en el Administrador (y en “Crear anuncio” de Business Suite).' }
      },
      ferramenta: 'turbinar-ou-gerenciador',
      praticar: {
        texto: { pt: 'No simulador do Turbinar, o Pixel te leva para turbinar o post de teste da Marina: meta, botão, duração e orçamento, até o “em análise”.', es: 'En el simulador de Promocionar, el Pixel te lleva a promocionar el post de prueba de Marina: objetivo, botón, duración y presupuesto, hasta el “en revisión”.' },
        tour: 'turbinar-post', pagina: 'meta-turbinar.html?zerar=1'
      },
      atender: {
        cena: { pt: 'O botão Turbinar não aparece no meu post! E quando eu clico em Criar anúncio, diz que eu não tenho conteúdo. Está tudo quebrado! 😤', es: '¡El botón Promocionar no aparece en mi post! Y cuando hago clic en Crear anuncio, dice que no tengo contenido. ¡Está todo roto! 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Vamos ver que tipo de post é. Posts de troca de foto de perfil ou capa, rascunhos, álbuns e posts compartilhados não podem ser turbinados. Se for isso, publique a foto como um post novo: ele ganha o botão Turbinar.”', es: '“Veamos qué tipo de post es. Los posts de cambio de foto de perfil o portada, borradores, álbumes y posts compartidos no se pueden promocionar. Si es eso, publica la foto como un post nuevo: gana el botón Promocionar.”' }, fb: { pt: 'Isso! Você identificou a causa provável, citou os tipos que não turbinam e deu a saída.', es: '¡Eso! Identificaste la causa probable, citaste los tipos que no se promocionan y diste la salida.' } },
          { certa: false, txt: { pt: '“Isso é um erro da Meta. Espere um dia e tente de novo.”', es: '“Es un error de Meta. Espera un día e intenta de nuevo.”' }, fb: { pt: 'Não é erro: a Meta limita os tipos de post que podem ser turbinados. Esperar não resolve.', es: 'No es un error: Meta limita los tipos de post que se pueden promocionar. Esperar no lo resuelve.' } },
          { certa: false, txt: { pt: '“Adicione mais saldo na conta de anúncios.”', es: '“Agrega más saldo a la cuenta publicitaria.”' }, fb: { pt: 'Saldo não faz o botão aparecer: o problema é o tipo de post.', es: 'El saldo no hace aparecer el botón: el problema es el tipo de post.' } },
          { certa: false, txt: { pt: '“Troque a conta de anúncios por outra.”', es: '“Cambia la cuenta publicitaria por otra.”' }, fb: { pt: 'Exagero: antes de mexer em contas, confira o tipo de post.', es: 'Exagerado: antes de tocar cuentas, revisa el tipo de post.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Que tipo de post é: foto normal, foto de perfil ou capa, rascunho, álbum, compartilhado?', es: '¿Qué tipo de post es: foto normal, foto de perfil o portada, borrador, álbum, compartido?' },
          { pt: 'O post está publicado na Página (não em rascunho)?', es: '¿El post está publicado en la Página (no en borrador)?' },
          { pt: 'A conta de anúncios tem telefone verificado e saldo?', es: '¿La cuenta publicitaria tiene teléfono verificado y saldo?' }],
        conferir: [{ pt: 'Foto de perfil, rascunho, álbum e post compartilhado não podem ser turbinados.', es: 'Foto de perfil, borrador, álbum y post compartido no se pueden promocionar.' },
          { pt: 'Ao trocar a meta, conferir o botão do anúncio na prévia.', es: 'Al cambiar el objetivo, revisar el botón del anuncio en la vista previa.' },
          { pt: 'Sem telefone verificado a tela avisa e não deixa veicular.', es: 'Sin teléfono verificado la pantalla avisa y no deja publicar.' }],
        frase: { pt: 'Nem todo post pode ser turbinado: foto de perfil, rascunho, álbum e post compartilhado não podem. Se for foto de perfil, publique como um post novo e turbine esse post.', es: 'No todo post se puede promocionar: foto de perfil, borrador, álbum y post compartido no se pueden. Si es foto de perfil, publícala como un post nuevo e promociona ese post.' },
        passos: [{ pt: 'No Business Suite, abra Conteúdo › Posts e reels.', es: 'En Business Suite, abre Contenido › Posts y reels.' },
          { pt: 'Ache o post publicado e clique em Turbinar.', es: 'Encuentra el post publicado y haz clic en Promocionar.' },
          { pt: 'Escolha a meta, o botão, a duração e o orçamento, confira a prévia e clique em Publicar.', es: 'Elige el objetivo, el botón, la duración y el presupuesto, revisa la vista previa y haz clic en Publicar.' }],
        encaminhar: { pt: 'Se o post parece turbinável e o botão não aparece, siga a Central de Ajuda da Meta: “Solucionar problemas de posts que não podem ser turbinados na sua Página do Facebook”.', es: 'Si el post parece poder promocionarse y el botón no aparece, sigue el Centro de ayuda de Meta: “Solucionar problemas de publicaciones que no se pueden promocionar en tu Página de Facebook”.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/240208966080581', titulo: { pt: 'Sobre os posts turbinados', es: 'Acerca de las publicaciones promocionadas' }, conferido: '16/10/2026' },
        { url: 'https://www.facebook.com/business/help/244044399504197', titulo: { pt: 'Tipos de posts que não podem ser turbinados na sua Página do Facebook', es: 'Tipos de publicaciones que no se pueden promocionar en tu Página de Facebook' }, conferido: '16/10/2026' }
      ]
    },
    {
      id: '02', min: 6, status: 'pronta',
      titulo: { pt: 'Campanha, conjunto e anúncio', es: 'Campaña, conjunto y anuncio' },
      antes: { pt: 'A Marina já turbinou um post e viu anúncio de verdade rodando. Agora quer o Gerenciador de Anúncios, onde se controla tudo.', es: 'Marina ya promocionó un post y vio un anuncio de verdad corriendo. Ahora quiere el Administrador de anuncios, donde se controla todo.' },
      gancho: { pt: '“Entendi os três níveis! Vamos montar meu primeiro anúncio de vendas?” Vamos criar a primeira campanha da Marina.', es: '“¡Entendí los tres niveles! ¿Armamos mi primer anuncio de ventas?” Vamos a crear la primera campaña de Marina.' },
      objetivo: { pt: 'Saber o que fica em cada nível (campanha, conjunto de anúncios e anúncio) para achar qualquer configuração sem se perder.', es: 'Saber qué queda en cada nivel (campaña, conjunto de anuncios y anuncio) para encontrar cualquier configuración sin perderse.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Abri o Gerenciador de Anúncios e tem campanha, conjunto de anúncios e anúncio. Por que tanta coisa? 😵', es: 'Abrí el Administrador de anuncios y hay campaña, conjunto de anuncios y anuncio. ¿Por qué tanto? 😵' }],
          ['rafa', { pt: 'São três níveis, do mais geral ao mais específico. A campanha tem o objetivo (o que você quer, como Vendas). O conjunto de anúncios diz para quem e como medir. O anúncio é o que a pessoa vê.', es: 'Son tres niveles, del más general al más específico. La campaña tiene el objetivo (lo que quieres, como Ventas). El conjunto de anuncios dice para quién y cómo medir. El anuncio es lo que ve la persona.' }],
          ['marina', { pt: 'E se eu quiser testar dois públicos?', es: '¿Y si quiero probar dos públicos?' }],
          ['rafa', { pt: 'Aí você cria dois conjuntos de anúncios dentro da mesma campanha. O público e o conjunto de dados ficam no conjunto, então cada um pode ser diferente.', es: 'Entonces creas dos conjuntos de anuncios dentro de la misma campaña. El público y el conjunto de datos quedan en el conjunto, así que cada uno puede ser distinto.' }],
          ['pixel', { pt: 'Atenção ao orçamento: a Central de Ajuda diz que ele fica no conjunto, mas na tela de Vendas aparece a escolha “Orçamento da campanha” ou “do conjunto de anúncios”. Confira qual está marcada.', es: 'Atención al presupuesto: el Centro de ayuda dice que queda en el conjunto, pero en la pantalla de Ventas aparece la opción “Presupuesto de la campaña” o “del conjunto de anuncios”. Revisa cuál está marcada.' }]
        ],
        pontos: [
          { pt: '<b>Campanha:</b> o objetivo (Vendas, Tráfego…) e o tipo de compra (Leilão). É a meta geral.', es: '<b>Campaña:</b> el objetivo (Ventas, Tráfico…) y el tipo de compra (Subasta). Es el objetivo general.' },
          { pt: '<b>Conjunto de anúncios:</b> o público (quem vê), onde acontece a conversão e o conjunto de dados (o antigo Pixel). Todos os anúncios do conjunto compartilham isso.', es: '<b>Conjunto de anuncios:</b> el público (quién ve), dónde ocurre la conversión y el conjunto de datos (el antiguo Pixel). Todos los anuncios del conjunto lo comparten.' },
          { pt: '<b>Anúncio:</b> a Página (e o Instagram) que assina, o formato, a imagem e o texto.', es: '<b>Anuncio:</b> la Página (y el Instagram) que firma, el formato, la imagen y el texto.' }
        ],
        notas: { pt: 'Fonte: Central de Ajuda da Meta, “Quais são os níveis de publicidade no Gerenciador de Anúncios da Meta?” (lida em 16/10/2026). As telas do rascunho de Vendas foram vistas de verdade em 14–15/10/2026; ali o orçamento aparece tanto como “Orçamento da campanha” quanto “do conjunto de anúncios”. Em outros objetivos, as telas podem mudar (a conferir).', es: 'Fuente: Centro de ayuda de Meta, “¿Cuáles son los niveles de publicidad en el Administrador de anuncios de Meta?” (leída el 16/10/2026). Las pantallas del borrador de Ventas se vieron de verdad el 14–15/10/2026; allí el presupuesto aparece tanto como “Presupuesto de la campaña” como “del conjunto de anuncios”. En otros objetivos, las pantallas pueden cambiar (por confirmar).' }
      },
      ferramenta: 'qual-nivel',
      praticar: {
        texto: { pt: 'No simulador do Gerenciador de Anúncios, o Pixel te leva pelos três níveis de um rascunho, mostrando o que mora em cada um.', es: 'En el simulador del Administrador de anuncios, el Pixel te lleva por los tres niveles de un borrador, mostrando qué vive en cada uno.' },
        tour: 'conhecer-niveis', pagina: 'meta-anuncios.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Mudei o público lá na campanha e o anúncio continua aparecendo para gente que não é do meu público! Onde eu mexo?? 😠', es: '¡Cambié el público en la campaña y el anuncio sigue apareciendo para gente que no es de mi público! ¿Dónde lo cambio?? 😠' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“O público não fica na campanha: fica no conjunto de anúncios. Abra o conjunto, vá em Público e ajuste ali. Te mostro o caminho: campanha › conjunto › anúncio.”', es: '“El público no queda en la campaña: queda en el conjunto de anuncios. Abre el conjunto, ve a Público y ajústalo ahí. Te muestro el camino: campaña › conjunto › anuncio.”' }, fb: { pt: 'Isso! Você achou onde fica a configuração e ensinou o mapa dos três níveis.', es: '¡Eso! Encontraste dónde queda la configuración y enseñaste el mapa de los tres niveles.' } },
          { certa: false, txt: { pt: '“Isso é bug do Gerenciador, vou abrir um chamado.”', es: '“Eso es un error del Administrador, voy a abrir un caso.”' }, fb: { pt: 'Não é bug: ela procurou no nível errado. Primeiro mostre o nível certo.', es: 'No es un error: buscó en el nivel equivocado. Primero muestra el nivel correcto.' } },
          { certa: false, txt: { pt: '“Apague a campanha e crie outra.”', es: '“Borra la campaña y crea otra.”' }, fb: { pt: 'Exagero: basta editar o público no conjunto de anúncios.', es: 'Exagerado: basta editar el público en el conjunto de anuncios.' } },
          { certa: false, txt: { pt: '“Mude o texto do anúncio para falar com o público certo.”', es: '“Cambia el texto del anuncio para hablar con el público correcto.”' }, fb: { pt: 'O texto não limita quem vê. Quem vê é definido no público, no conjunto.', es: 'El texto no limita quién ve. Quién ve se define en el público, en el conjunto.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O que você quer mudar: o objetivo, quem vê ou o que a pessoa vê?', es: '¿Qué quieres cambiar: el objetivo, quién ve o lo que ve la persona?' },
          { pt: 'Em qual nível você está agora (campanha, conjunto ou anúncio)?', es: '¿En qué nivel estás ahora (campaña, conjunto o anuncio)?' },
          { pt: 'É uma campanha de Vendas? O orçamento está na campanha ou no conjunto?', es: '¿Es una campaña de Ventas? ¿El presupuesto está en la campaña o en el conjunto?' }],
        conferir: [{ pt: 'Objetivo e tipo de compra: campanha.', es: 'Objetivo y tipo de compra: campaña.' },
          { pt: 'Público e conjunto de dados (Pixel): conjunto de anúncios.', es: 'Público y conjunto de datos (Pixel): conjunto de anuncios.' },
          { pt: 'Página, formato, imagem e texto: anúncio.', es: 'Página, formato, imagen y texto: anuncio.' }],
        frase: { pt: 'No Gerenciador são três níveis: a campanha tem o objetivo, o conjunto de anúncios tem o público e o conjunto de dados, e o anúncio tem a Página, a imagem e o texto. Vamos ver em qual nível está o que você quer mudar.', es: 'En el Administrador son tres niveles: la campaña tiene el objetivo, el conjunto de anuncios tiene el público y el conjunto de datos, y el anuncio tiene la Página, la imagen y el texto. Veamos en qué nivel está lo que quieres cambiar.' },
        passos: [{ pt: 'Na lista de campanhas, clique em Editar na campanha.', es: 'En la lista de campañas, haz clic en Editar en la campaña.' },
          { pt: 'Na árvore à esquerda, escolha o nível: campanha, conjunto de anúncios ou anúncio.', es: 'En el árbol de la izquierda, elige el nivel: campaña, conjunto de anuncios o anuncio.' },
          { pt: 'Ajuste a configuração e confira antes de publicar.', es: 'Ajusta la configuración y revisa antes de publicar.' }],
        encaminhar: { pt: 'Se a configuração não aparece onde deveria, confira o objetivo da campanha (as telas mudam por objetivo) e siga a Central de Ajuda da Meta.', es: 'Si la configuración no aparece donde debería, revisa el objetivo de la campaña (las pantallas cambian por objetivo) y sigue el Centro de ayuda de Meta.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/621956575422138', titulo: { pt: 'Quais são os níveis de publicidade no Gerenciador de Anúncios da Meta?', es: '¿Cuáles son los niveles de publicidad en el Administrador de anuncios de Meta?' }, conferido: '16/10/2026' }
      ]
    },
    {
      id: '03', min: 8, status: 'pronta',
      titulo: { pt: 'O primeiro anúncio da Marina', es: 'El primer anuncio de Marina' },
      antes: { pt: 'A Marina entendeu os três níveis: campanha, conjunto de anúncios e anúncio.', es: 'Marina entendió los tres niveles: campaña, conjunto de anuncios y anuncio.' },
      gancho: { pt: '“Deixei tudo em rascunho! E se eu errar depois de publicar, como edito sem bagunçar?” Vamos ver rascunho, publicado e edição.', es: '“¡Dejé todo en borrador! ¿Y si me equivoco después de publicar, cómo edito sin desordenar?” Vamos a ver borrador, publicado y edición.' },
      objetivo: { pt: 'Montar uma campanha de Vendas em rascunho, do objetivo à Página, e saber o que falta para poder publicar.', es: 'Armar una campaña de Ventas en borrador, del objetivo a la Página, y saber qué falta para poder publicar.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Quero vender mais canecas pela loja. Qual objetivo eu escolho? 🤔', es: 'Quiero vender más tazas por la tienda. ¿Qué objetivo elijo? 🤔' }],
          ['rafa', { pt: 'Vendas. Aí a campanha vai atrás de quem tem mais chance de comprar. Como a conversão acontece no site, o conjunto de anúncios pede o conjunto de dados: é o Pixel que você criou.', es: 'Ventas. Así la campaña busca a quien tiene más probabilidad de comprar. Como la conversión ocurre en el sitio, el conjunto de anuncios pide el conjunto de datos: es el Pixel que creaste.' }],
          ['marina', { pt: 'E o orçamento? Quanto eu gasto?', es: '¿Y el presupuesto? ¿Cuánto gasto?' }],
          ['rafa', { pt: 'Você define um valor por dia. A tela explica: “Gastaremos cerca de R$ 25,00 por dia”, mas alguns dias gastam mais e outros menos, e há um máximo diário e semanal.', es: 'Defines un valor por día. La pantalla explica: “Gastaremos cerca de R$ 25,00 por día”, pero algunos días gasta más y otros menos, y hay un máximo diario y semanal.' }],
          ['pixel', { pt: 'Tudo isso fica em rascunho. Nada vai para a Meta até clicar em Publicar. E “Fechar” guarda o rascunho; “Descartar rascunhos” apaga o que não foi publicado.', es: 'Todo esto queda en borrador. Nada va a Meta hasta hacer clic en Publicar. Y “Cerrar” guarda el borrador; “Descartar borradores” borra lo que no se publicó.' }]
        ],
        pontos: [
          { pt: '<b>Vendas com local “Site”</b> exige o conjunto de dados (Pixel). Sem ele, a tela avisa e não deixa publicar.', es: '<b>Ventas con lugar “Sitio”</b> exige el conjunto de datos (Pixel). Sin él, la pantalla avisa y no deja publicar.' },
          { pt: '<b>A Página do Facebook é obrigatória</b> no anúncio (Identidade). O Instagram é opcional.', es: '<b>La Página de Facebook es obligatoria</b> en el anuncio (Identidad). El Instagram es opcional.' },
          { pt: '<b>Rascunho não gasta nada.</b> Só depois de Publicar vai para análise, e depois fica ativo.', es: '<b>El borrador no gasta nada.</b> Solo después de Publicar va a revisión, y luego queda activo.' }
        ],
        notas: { pt: 'Telas vistas de verdade em 14–15/10/2026 (conta de aula, sempre em rascunho). A tela de “Conferir e publicar” ainda é montada a partir da documentação (a conferir). Anúncio em análise e anúncio ativo foram vistos em 15–16/10/2026 no Turbinar.', es: 'Pantallas vistas de verdad el 14–15/10/2026 (cuenta de aula, siempre en borrador). La pantalla de “Revisar y publicar” todavía se arma a partir de la documentación (por confirmar). Anuncio en revisión y anuncio activo se vieron el 15–16/10/2026 en Promocionar.' }
      },
      ferramenta: 'falta-publicar',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para montar a primeira campanha de Vendas da Marina e deixar tudo em rascunho, sem publicar.', es: 'En el simulador, el Pixel te guía para armar la primera campaña de Ventas de Marina y dejar todo en borrador, sin publicar.' },
        tour: 'primeiro-anuncio', pagina: 'meta-anuncios.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Não consigo publicar minha campanha de Vendas! A tela diz que um tal de “conjunto de dados” é necessário. Que é isso?? 😩', es: '¡No puedo publicar mi campaña de Ventas! La pantalla dice que un tal “conjunto de datos” es necesario. ¿Qué es eso?? 😩' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Conjunto de dados é o nome novo do Pixel: ele diz à campanha onde medir as compras do seu site. Abra o conjunto de anúncios, escolha o Pixel da loja ali, e a tela deixa publicar. Se ele não aparecer na lista, conferimos se está no portfólio e na conta certos.”', es: '“Conjunto de datos es el nombre nuevo del Pixel: le dice a la campaña dónde medir las compras de tu sitio. Abre el conjunto de anuncios, elige el Pixel de la tienda ahí, y la pantalla deja publicar. Si no aparece en la lista, revisamos si está en el portfolio y en la cuenta correctos.”' }, fb: { pt: 'Isso! Você traduziu o termo, mostrou onde resolver e já pensou no caso do Pixel não aparecer.', es: '¡Eso! Tradujiste el término, mostraste dónde resolverlo y ya pensaste en el caso de que el Pixel no aparezca.' } },
          { certa: false, txt: { pt: '“Isso é um erro da Meta, tente de novo mais tarde.”', es: '“Es un error de Meta, intenta de nuevo más tarde.”' }, fb: { pt: 'Não é erro: é um campo obrigatório que falta preencher.', es: 'No es un error: es un campo obligatorio que falta llenar.' } },
          { certa: false, txt: { pt: '“Mude o objetivo para Reconhecimento, que não pede isso.”', es: '“Cambia el objetivo a Reconocimiento, que no pide eso.”' }, fb: { pt: 'Isso muda o que a campanha busca (não é mais vender). Primeiro tente resolver com o Pixel.', es: 'Eso cambia lo que busca la campaña (ya no es vender). Primero intenta resolver con el Pixel.' } },
          { certa: false, txt: { pt: '“Crie uma conta de anúncios nova.”', es: '“Crea una cuenta publicitaria nueva.”' }, fb: { pt: 'Exagero: o problema é só o campo do conjunto de dados.', es: 'Exagerado: el problema es solo el campo del conjunto de datos.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual é o objetivo da campanha? Onde acontece a conversão (site, app…)?', es: '¿Cuál es el objetivo de la campaña? ¿Dónde ocurre la conversión (sitio, app…)?' },
          { pt: 'O conjunto de dados (Pixel) aparece na lista do conjunto de anúncios?', es: '¿El conjunto de datos (Pixel) aparece en la lista del conjunto de anuncios?' },
          { pt: 'A Página do Facebook está escolhida na Identidade do anúncio?', es: '¿La Página de Facebook está elegida en la Identidad del anuncio?' }],
        conferir: [{ pt: 'Vendas + Site: conjunto de dados escolhido no conjunto de anúncios.', es: 'Ventas + Sitio: conjunto de datos elegido en el conjunto de anuncios.' },
          { pt: 'Página do Facebook escolhida no anúncio.', es: 'Página de Facebook elegida en el anuncio.' },
          { pt: 'O Pixel está no portfólio e na conta de anúncios corretos.', es: 'El Pixel está en el portfolio y en la cuenta publicitaria correctos.' }],
        frase: { pt: 'Conjunto de dados é o nome novo do Pixel. Em campanha de Vendas, ele diz onde medir as compras do site. Abra o conjunto de anúncios, escolha o Pixel da loja e depois confira a Página no anúncio.', es: 'Conjunto de datos es el nombre nuevo del Pixel. En una campaña de Ventas, dice dónde medir las compras del sitio. Abre el conjunto de anuncios, elige el Pixel de la tienda y luego revisa la Página en el anuncio.' },
        passos: [{ pt: 'No conjunto de anúncios, em Conversão, escolha o conjunto de dados.', es: 'En el conjunto de anuncios, en Conversión, elige el conjunto de datos.' },
          { pt: 'No anúncio, em Identidade, escolha a Página do Facebook.', es: 'En el anuncio, en Identidad, elige la Página de Facebook.' },
          { pt: 'Clique em Publicar (ou em Fechar para guardar o rascunho).', es: 'Haz clic en Publicar (o en Cerrar para guardar el borrador).' }],
        encaminhar: { pt: 'Se o Pixel não aparece na lista ou a Página não deixa escolher, revise permissões e o portfólio e siga a Central de Ajuda da Meta (solução de problemas ao criar ou publicar um anúncio).', es: 'Si el Pixel no aparece en la lista o la Página no deja elegirse, revisa permisos y el portfolio y sigue el Centro de ayuda de Meta (solución de problemas al crear o publicar un anuncio).' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/621956575422138', titulo: { pt: 'Quais são os níveis de publicidade no Gerenciador de Anúncios da Meta? (lista “Solucionar problemas ao criar ou publicar um anúncio”)', es: '¿Cuáles son los niveles de publicidad en el Administrador de anuncios de Meta? (lista “Solucionar problemas al crear o publicar un anuncio”)' }, conferido: '16/10/2026' }
      ]
    },
    {
      id: '04', min: 7, status: 'pronta',
      titulo: { pt: 'Editar sem bagunçar', es: 'Editar sin desordenar' },
      antes: { pt: 'O anúncio de teste da Marina foi publicado, passou pela análise e está ativo. Agora ela quer mexer em coisas.', es: 'El anuncio de prueba de Marina se publicó, pasó la revisión y está activo. Ahora quiere tocar cosas.' },
      gancho: { pt: '“E se eu tentar publicar e não conseguir? Ou se o anúncio parar sozinho?” Vamos ver o que bloqueia um anúncio.', es: '“¿Y si intento publicar y no puedo? ¿O si el anuncio se detiene solo?” Vamos a ver qué bloquea un anuncio.' },
      objetivo: { pt: 'Saber o que dá e o que não dá para mudar numa campanha publicada, a diferença entre rascunho e publicado, e quando é melhor esperar.', es: 'Saber qué se puede y qué no se puede cambiar en una campaña publicada, la diferencia entre borrador y publicado, y cuándo es mejor esperar.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu anúncio está rodando, mas acho que o orçamento ficou baixo. Posso só mudar o número? 🤔', es: 'Mi anuncio está corriendo, pero creo que el presupuesto quedó bajo. ¿Puedo solo cambiar el número? 🤔' }],
          ['rafa', { pt: 'Pode editar, mas com cuidado: a nova versão substitui a antiga, não dá para desfazer e as métricas de antes e depois ficam misturadas. Além disso, mudar certas coisas pode reiniciar a fase de aprendizado.', es: 'Puedes editar, pero con cuidado: la nueva versión reemplaza la antigua, no se puede deshacer y las métricas de antes y después quedan mezcladas. Además, cambiar ciertas cosas puede reiniciar la fase de aprendizaje.' }],
          ['marina', { pt: 'Fase de aprendizado? 😵', es: '¿Fase de aprendizaje? 😵' }],
          ['rafa', { pt: 'É o período em que a Meta ainda está aprendendo a veicular seu anúncio. Ela costuma terminar com cerca de 50 resultados na semana depois da última edição significativa. Se você fica mexendo toda hora, o aprendizado recomeça.', es: 'Es el período en que Meta todavía está aprendiendo a mostrar tu anuncio. Suele terminar con unos 50 resultados en la semana después de la última edición significativa. Si cambias todo el tiempo, el aprendizaje empieza de nuevo.' }],
          ['pixel', { pt: 'Duas pegadinhas reais: o Objetivo e o Tipo de compra ficam em cinza depois de publicar, e o botão Publicar só acende depois que algo muda. Fechar guarda como rascunho; só Publicar vale.', es: 'Dos trampas reales: el Objetivo y el Tipo de compra quedan en gris después de publicar, y el botón Publicar solo se enciende después de que algo cambia. Cerrar guarda como borrador; solo Publicar vale.' }]
        ],
        pontos: [
          { pt: '<b>Rascunho não vale.</b> Fechar guarda a mudança como rascunho; só Publicar a coloca no ar. O que está rodando continua como estava.', es: '<b>El borrador no vale.</b> Cerrar guarda el cambio como borrador; solo Publicar lo pone en el aire. Lo que está corriendo sigue como estaba.' },
          { pt: '<b>Editar substitui.</b> Não dá para voltar atrás nem separar as métricas de antes e depois. Para testar sem perder o original, melhor duplicar e mudar a cópia.', es: '<b>Editar reemplaza.</b> No se puede volver atrás ni separar las métricas de antes y después. Para probar sin perder el original, mejor duplicar y cambiar la copia.' },
          { pt: '<b>Nem tudo se edita.</b> Objetivo e tipo de compra não mudam; o texto e a mídia de um post turbinado também não, depois de analisado.', es: '<b>No todo se edita.</b> Objetivo y tipo de compra no cambian; el texto y los medios de un post promocionado tampoco, una vez revisado.' }
        ],
        notas: { pt: 'Telas vistas de verdade em 16/10/2026, só olhando (nada foi salvo): lista com a campanha ativa, editor da campanha, do conjunto e do anúncio. Fontes: Central de Ajuda da Meta, “Como editar campanhas de anúncios” e “Sobre a fase de aprendizado”. A tela que aparece depois de clicar em Publicar numa edição e a coluna “Aprendizado” ainda não foram vistas (a conferir); o botão Duplicar também ainda não foi usado.', es: 'Pantallas vistas de verdad el 16/10/2026, solo mirando (no se guardó nada): lista con la campaña activa, editor de la campaña, del conjunto y del anuncio. Fuentes: Centro de ayuda de Meta, “Cómo editar campañas de anuncios” y “Acerca de la fase de aprendizaje”. La pantalla que aparece después de hacer clic en Publicar en una edición y la columna “Aprendizaje” todavía no se vieron (por confirmar); el botón Duplicar tampoco se usó todavía.' }
      },
      ferramenta: 'editar-ou-novo',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva a abrir a campanha que está rodando, mexer no orçamento, ver os avisos e decidir: fechar como rascunho e descartar, sem estragar nada.', es: 'En el simulador, el Pixel te lleva a abrir la campaña que está corriendo, tocar el presupuesto, ver los avisos y decidir: cerrar como borrador y descartar, sin estropear nada.' },
        tour: 'editar-publicado', pagina: 'meta-anuncios.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Fiquei mudando o orçamento do meu anúncio quase todo dia e os resultados só pioraram! Será que o anúncio está com defeito? 😤', es: '¡Estuve cambiando el presupuesto de mi anuncio casi todos los días y los resultados solo empeoraron! ¿Será que el anuncio tiene un defecto? 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Provavelmente não é defeito: cada edição significativa, como mexer no orçamento, pode reiniciar a fase de aprendizado, e com mudanças toda hora ele nunca estabiliza. Vamos esperar uns dias sem mexer e olhar a coluna Última edição significativa. Edite só quando tiver um bom motivo.”', es: '“Probablemente no es un defecto: cada edición significativa, como tocar el presupuesto, puede reiniciar la fase de aprendizaje, y con cambios todo el tiempo nunca se estabiliza. Esperemos unos días sin tocar y miremos la columna Última edición significativa. Edita solo cuando tengas un buen motivo.”' }, fb: { pt: 'Isso! Você ligou o sintoma à causa provável (edições frequentes reiniciam o aprendizado) e deu um plano simples.', es: '¡Eso! Conectaste el síntoma con la causa probable (ediciones frecuentes reinician el aprendizaje) y diste un plan simple.' } },
          { certa: false, txt: { pt: '“Aumente o orçamento de novo, para compensar.”', es: '“Aumenta el presupuesto otra vez, para compensar.”' }, fb: { pt: 'Mais uma edição reinicia o aprendizado de novo e piora o que já está instável.', es: 'Otra edición reinicia el aprendizaje de nuevo y empeora lo que ya está inestable.' } },
          { certa: false, txt: { pt: '“É um bug da Meta, vou abrir um chamado.”', es: '“Es un error de Meta, voy a abrir un caso.”' }, fb: { pt: 'Não é bug: é como a fase de aprendizado funciona, e está explicado na Central de Ajuda.', es: 'No es un error: así funciona la fase de aprendizaje, y está explicado en el Centro de ayuda.' } },
          { certa: false, txt: { pt: '“Apague a campanha e crie outra igual.”', es: '“Borra la campaña y crea otra igual.”' }, fb: { pt: 'Criar de novo também começa o aprendizado do zero. Melhor esperar e parar de editar.', es: 'Crear de nuevo también empieza el aprendizaje de cero. Mejor esperar y dejar de editar.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O que você mudou e quando? Foi mais de uma vez na semana?', es: '¿Qué cambiaste y cuándo? ¿Fue más de una vez por semana?' },
          { pt: 'A campanha está em Aprendizado ou Aprendizado limitado?', es: '¿La campaña está en Aprendizaje o Aprendizaje limitado?' },
          { pt: 'A mudança foi publicada ou ficou só como rascunho?', es: '¿El cambio se publicó o quedó solo como borrador?' }],
        conferir: [{ pt: 'Coluna Última edição significativa (em Colunas, se não aparecer).', es: 'Columna Última edición significativa (en Columnas, si no aparece).' },
          { pt: 'Rascunho só vale depois de Publicar.', es: 'El borrador solo vale después de Publicar.' },
          { pt: 'Objetivo e tipo de compra não mudam; texto e mídia de post turbinado também não.', es: 'Objetivo y tipo de compra no cambian; texto y medios de un post promocionado tampoco.' }],
        frase: { pt: 'Cada edição significativa pode reiniciar a fase de aprendizado, e a nova versão substitui a antiga sem volta. Vamos esperar uns dias sem mexer e edite só quando tiver um bom motivo.', es: 'Cada edición significativa puede reiniciar la fase de aprendizaje, y la nueva versión reemplaza a la antigua sin vuelta. Esperemos unos días sin tocar y edita solo cuando tengas un buen motivo.' },
        passos: [{ pt: 'No Gerenciador, marque a campanha e clique em Editar.', es: 'En el Administrador, marca la campaña y haz clic en Editar.' },
          { pt: 'Escolha o nível (campanha, conjunto ou anúncio) e mude só o necessário.', es: 'Elige el nivel (campaña, conjunto o anuncio) y cambia solo lo necesario.' },
          { pt: 'Clique em Publicar para valer, ou em Fechar para guardar como rascunho.', es: 'Haz clic en Publicar para que valga, o en Cerrar para guardarlo como borrador.' }],
        encaminhar: { pt: 'Se a edição dá erro ou não salva, siga a Central de Ajuda da Meta: “Solucionar problemas de edição de anúncios” (código de erro 1860014).', es: 'Si la edición da error o no guarda, sigue el Centro de ayuda de Meta: “Solucionar problemas de edición de anuncios” (código de error 1860014).' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/2169779963333459', titulo: { pt: 'Como editar campanhas de anúncios no Gerenciador de Anúncios da Meta', es: 'Cómo editar campañas de anuncios en el Administrador de anuncios de Meta' }, conferido: '16/10/2026' },
        { url: 'https://www.facebook.com/business/help/112167992830700', titulo: { pt: 'Sobre a fase de aprendizado', es: 'Acerca de la fase de aprendizaje' }, conferido: '16/10/2026' }
      ]
    },
    {
      id: '05', min: 7, status: 'pronta',
      titulo: { pt: '“Meu anúncio não publica!”', es: '“¡Mi anuncio no se publica!”' },
      antes: { pt: 'A Marina já sabe criar, publicar e editar. Mas um dia o anúncio dela não publica, ou para de rodar.', es: 'Marina ya sabe crear, publicar y editar. Pero un día su anuncio no se publica, o deja de correr.' },
      gancho: { pt: '“Consegui resolver! Mas onde esse anúncio aparece para as pessoas?” Próximo módulo: Anúncios no Feed.', es: '“¡Logré resolverlo! Pero ¿dónde aparece este anuncio para la gente?” Próximo módulo: Anuncios en el Feed.' },
      objetivo: { pt: 'Descobrir, em ordem, o que bloqueia um anúncio: telefone, limite de gastos, saldo, conjunto de dados e Página.', es: 'Descubrir, en orden, qué bloquea un anuncio: teléfono, límite de gastos, saldo, conjunto de datos y Página.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Tentei publicar e o botão está apagado! E antes, meu anúncio parou de rodar sozinho. O que eu fiz de errado? 😭', es: '¡Intenté publicar y el botón está apagado! Y antes, mi anuncio dejó de correr solo. ¿Qué hice mal? 😭' }],
          ['rafa', { pt: 'Calma, quase sempre é uma destas causas: telefone não verificado, limite de gastos da conta atingido, saldo acabado, ou um campo obrigatório faltando, como o conjunto de dados (Pixel) ou a Página. A tela costuma avisar qual.', es: 'Calma, casi siempre es una de estas causas: teléfono no verificado, límite de gastos de la cuenta alcanzado, saldo agotado, o un campo obligatorio faltante, como el conjunto de datos (Pixel) o la Página. La pantalla suele avisar cuál.' }],
          ['marina', { pt: 'Mas eu tenho saldo! Por que parou?', es: '¡Pero tengo saldo! ¿Por qué se detuvo?' }],
          ['rafa', { pt: 'Saldo e limite são coisas diferentes. A conta pode ter um limite de gastos: ao chegar nele, os anúncios param, mesmo com saldo. Dá para ver na Visão geral da conta.', es: 'Saldo y límite son cosas distintas. La cuenta puede tener un límite de gastos: al llegar a él, los anuncios se detienen, aunque haya saldo. Se puede ver en la Visión general de la cuenta.' }],
          ['pixel', { pt: 'Caso real da conta de aula: a Visão geral mostrava “Limite de gastos da conta” com um valor baixo, e o Turbinar avisou “Você quase atingiu o limite de gastos”. Quem muda o limite é o responsável pela conta.', es: 'Caso real de la cuenta de aula: la Visión general mostraba “Límite de gastos de la cuenta” con un valor bajo, y Promocionar avisó “Casi alcanzaste el límite de gastos”. Quien cambia el límite es el responsable de la cuenta.' }]
        ],
        pontos: [
          { pt: '<b>Telefone verificado:</b> sem ele a tela avisa “É necessário ter um telefone verificado para esta conta antes de veicular anúncios” e não deixa veicular.', es: '<b>Teléfono verificado:</b> sin él la pantalla avisa “Se necesita un teléfono verificado para esta cuenta antes de publicar anuncios” y no deja publicar.' },
          { pt: '<b>Limite de gastos × saldo:</b> o saldo paga os anúncios; o limite é um teto da conta. Sem saldo, os anúncios pausam; com o limite atingido, também param.', es: '<b>Límite de gastos × saldo:</b> el saldo paga los anuncios; el límite es un tope de la cuenta. Sin saldo, los anuncios se pausan; con el límite alcanzado, también se detienen.' },
          { pt: '<b>Campos obrigatórios:</b> em Vendas, o conjunto de dados; em todo anúncio, a Página do Facebook.', es: '<b>Campos obligatorios:</b> en Ventas, el conjunto de datos; en todo anuncio, la Página de Facebook.' }
        ],
        notas: { pt: 'Telas reais vistas em 15–16/10/2026: bloqueio do telefone, aviso do limite de gastos, saldo e Visão geral da conta (com o limite de gastos). A Central de Ajuda da Meta lista erros específicos, como “A Página do Facebook está ausente” (1443121), “As Páginas não correspondem” (1885029) e “Nenhum objeto de promoção foi encontrado” (1815430 e 1487790); o passo a passo de cada um não foi lido nem testado aqui (a conferir). Quem paga ou muda limites é sempre o responsável pela conta, nunca o agente.', es: 'Pantallas reales vistas el 15–16/10/2026: bloqueo del teléfono, aviso del límite de gastos, saldo y Visión general de la cuenta (con el límite de gastos). El Centro de ayuda de Meta lista errores específicos, como “Falta la Página de Facebook” (1443121), “Las Páginas no coinciden” (1885029) y “No se encontró ningún objeto de promoción” (1815430 y 1487790); el paso a paso de cada uno no se leyó ni se probó aquí (por confirmar). Quien paga o cambia límites es siempre el responsable de la cuenta, nunca el agente.' }
      },
      ferramenta: 'o-que-bloqueia',
      praticar: {
        texto: { pt: 'No simulador do Turbinar, a conta da Marina vem com três bloqueios juntos. O Pixel te leva a resolver um por um, de cima para baixo, até publicar.', es: 'En el simulador de Promocionar, la cuenta de Marina viene con tres bloqueos juntos. El Pixel te lleva a resolverlos uno por uno, de arriba hacia abajo, hasta publicar.' },
        tour: 'resolver-publicacao', pagina: 'meta-turbinar.html?zerar=1&problemas=1'
      },
      atender: {
        cena: { pt: 'Meu anúncio parou de rodar do nada! Eu tenho saldo na conta e não mexi em nada. Isso é golpe da Meta?! 😡', es: '¡Mi anuncio dejó de correr de la nada! Tengo saldo en la cuenta y no toqué nada. ¡¿Es una estafa de Meta?! 😡' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Entendo o susto. Ter saldo não basta: a conta pode ter um limite de gastos, e quando ele é atingido os anúncios param. Vamos abrir a Visão geral da conta e ver o limite e quanto já foi gasto. Se for isso, quem administra a conta aumenta ou remove o limite.”', es: '“Entiendo el susto. Tener saldo no basta: la cuenta puede tener un límite de gastos, y cuando se alcanza los anuncios se detienen. Abramos la Visión general de la cuenta y veamos el límite y cuánto ya se gastó. Si es eso, quien administra la cuenta aumenta o quita el límite.”' }, fb: { pt: 'Isso! Você acalmou a cliente, apontou a causa mais provável (limite, não saldo) e disse onde conferir e quem resolve.', es: '¡Eso! Calmaste a la clienta, señalaste la causa más probable (límite, no saldo) y dijiste dónde revisar y quién lo resuelve.' } },
          { certa: false, txt: { pt: '“Coloque mais saldo que volta a rodar.”', es: '“Pon más saldo y vuelve a correr.”' }, fb: { pt: 'Ela já tem saldo. Se o limite de gastos foi atingido, saldo extra não resolve.', es: 'Ella ya tiene saldo. Si se alcanzó el límite de gastos, saldo extra no lo resuelve.' } },
          { certa: false, txt: { pt: '“Crie outro anúncio igual.”', es: '“Crea otro anuncio igual.”' }, fb: { pt: 'Se o limite da conta foi atingido, o novo anúncio também não vai rodar.', es: 'Si se alcanzó el límite de la cuenta, el nuevo anuncio tampoco va a correr.' } },
          { certa: false, txt: { pt: '“Pode ser golpe mesmo, desative a conta.”', es: '“Puede ser una estafa, desactiva la cuenta.”' }, fb: { pt: 'Exagero e perigoso: não há sinal de golpe. Primeiro confira os bloqueios comuns.', es: 'Exagerado y peligroso: no hay señal de estafa. Primero revisa los bloqueos comunes.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'A tela mostra algum aviso? Qual é o texto exato?', es: '¿La pantalla muestra algún aviso? ¿Cuál es el texto exacto?' },
          { pt: 'O telefone da conta está verificado? Qual é o saldo e o limite de gastos da conta?', es: '¿El teléfono de la cuenta está verificado? ¿Cuál es el saldo y el límite de gastos de la cuenta?' },
          { pt: 'Em Vendas: o conjunto de dados está escolhido? A Página está escolhida no anúncio?', es: 'En Ventas: ¿el conjunto de datos está elegido? ¿La Página está elegida en el anuncio?' }],
        conferir: [{ pt: 'Telefone verificado na conta de anúncios.', es: 'Teléfono verificado en la cuenta publicitaria.' },
          { pt: 'Visão geral da conta: limite de gastos e valor já gasto; e o saldo disponível.', es: 'Visión general de la cuenta: límite de gastos y valor ya gastado; y el saldo disponible.' },
          { pt: 'Conjunto de dados (Vendas) e Página do Facebook escolhidos.', es: 'Conjunto de datos (Ventas) y Página de Facebook elegidos.' }],
        frase: { pt: 'Vamos conferir, em ordem: telefone verificado, limite de gastos e saldo da conta, e os campos obrigatórios do anúncio. Quase sempre o problema está em um deles, e a própria tela costuma avisar qual.', es: 'Vamos a revisar, en orden: teléfono verificado, límite de gastos y saldo de la cuenta, y los campos obligatorios del anuncio. Casi siempre el problema está en uno de ellos, y la propia pantalla suele avisar cuál.' },
        passos: [{ pt: 'Peça o texto exato do aviso (ou um print).', es: 'Pide el texto exacto del aviso (o una captura).' },
          { pt: 'Abra a Visão geral da conta e confira o limite de gastos e o saldo.', es: 'Abre la Visión general de la cuenta y revisa el límite de gastos y el saldo.' },
          { pt: 'Se o telefone não está verificado, oriente o responsável a usar Iniciar autenticação.', es: 'Si el teléfono no está verificado, orienta al responsable a usar Iniciar autenticación.' }],
        encaminhar: { pt: 'Se a causa é pagamento, saldo ou limite de gastos da conta, confirme o sintoma e encaminhe à área de pagamentos (quem paga e muda limites é o responsável pela conta). Se nenhuma dessas causas explica, ou a conta está restrita ou o anúncio foi rejeitado, siga a Central de Ajuda da Meta (“Solucionar problemas ao criar ou publicar um anúncio” e “Solucionar problemas com uma conta desativada ou restrita”).', es: 'Si la causa es pago, saldo o límite de gastos de la cuenta, confirma el síntoma y deriva al área de pagos (quien paga y cambia límites es el responsable de la cuenta). Si ninguna de estas causas lo explica, o la cuenta está restringida o el anuncio fue rechazado, sigue el Centro de ayuda de Meta (“Solucionar problemas al crear o publicar un anuncio” y “Solucionar problemas con una cuenta desactivada o restringida”).' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/125897810822573', titulo: { pt: 'Como solucionar problemas ao criar ou publicar uma campanha de anúncios no Gerenciador de Anúncios da Meta', es: 'Cómo solucionar problemas al crear o publicar una campaña de anuncios en el Administrador de anuncios de Meta' }, conferido: '16/10/2026' }
      ]
    }
  ],
  catalogo: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'O catálogo: um só para tudo', es: 'El catálogo: uno solo para todo' },
      antes: { pt: 'O Pixel da Marina já mede o que acontece no site: visitas, carrinho, compra.', es: 'El Pixel de Marina ya mide lo que pasa en el sitio: visitas, carrito, compra.' },
      gancho: { pt: '“Quero que o anúncio mostre exatamente a caneca que a pessoa olhou. Como a Meta sabe quais produtos eu tenho?” Vamos conhecer o catálogo.', es: '“Quiero que el anuncio muestre exactamente la taza que la persona miró. ¿Cómo sabe Meta qué productos tengo?” Vamos a conocer el catálogo.' },
      objetivo: { pt: 'Entender o que é o catálogo, onde ele mora (Gerenciador de Comércio) e por que se usa um só para todo o estoque.', es: 'Entender qué es el catálogo, dónde vive (Administrador de ventas) y por qué se usa uno solo para todo el inventario.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Tenho canecas, camisetas, ecobag… Como a Meta fica sabendo de tudo isso? 🤔', es: 'Tengo tazas, camisetas, ecobag… ¿Cómo se entera Meta de todo eso? 🤔' }],
          ['rafa', { pt: 'Pelo catálogo: é uma lista dos seus produtos, com nome, preço, foto, link e estoque. Ele mora no Gerenciador de Comércio e os anúncios usam essa lista.', es: 'Por el catálogo: es una lista de tus productos, con nombre, precio, foto, enlace y stock. Vive en el Administrador de ventas y los anuncios usan esa lista.' }],
          ['marina', { pt: 'Posso fazer um catálogo para canecas e outro para camisetas?', es: '¿Puedo hacer un catálogo para tazas y otro para camisetas?' }],
          ['rafa', { pt: 'A Meta recomenda um só catálogo para todo o estoque. Para separar, você cria conjuntos de produtos. A própria tela avisa isso quando você tenta criar outro.', es: 'Meta recomienda un solo catálogo para todo el inventario. Para separar, creas conjuntos de productos. La propia pantalla avisa eso cuando intentas crear otro.' }],
          ['pixel', { pt: 'Dica: se aparece “Sem acesso” ao lado de um catálogo, ele existe, mas você não tem permissão. Peça acesso em vez de criar um novo.', es: 'Pista: si aparece “Sin acceso” junto a un catálogo, existe, pero no tienes permiso. Pide acceso en lugar de crear uno nuevo.' }]
        ],
        pontos: [
          { pt: '<b>Catálogo</b> = a lista dos produtos que os anúncios e as lojas usam.', es: '<b>Catálogo</b> = la lista de productos que usan los anuncios y las tiendas.' },
          { pt: '<b>Um só</b> para todo o estoque; <b>conjuntos</b> para separar por campanha.', es: '<b>Uno solo</b> para todo el inventario; <b>conjuntos</b> para separar por campaña.' },
          { pt: 'Ele <b>pertence a um portfólio empresarial</b> e tem seu próprio ID.', es: 'Él <b>pertenece a un portfolio comercial</b> y tiene su propio ID.' }
        ],
        notas: { pt: 'Telas vistas de verdade em 16/10/2026 (Gerenciador de Comércio › Ativos › Catálogos), com um catálogo de aula. Nomes de menus conferidos em português e em espanhol (Administrador de ventas).', es: 'Pantallas vistas de verdad el 16/10/2026 (Administrador de ventas › Activos › Catálogos), con un catálogo de práctica. Nombres de menús revisados en portugués y en español (Administrador de ventas).' }
      },
      ferramenta: 'um-ou-varios',
      atender: {
        cena: { pt: 'Vou vender canecas e camisetas. Criei um catálogo para cada um, mas meus anúncios ficaram bagunçados. O que fiz de errado? 😕', es: 'Voy a vender tazas y camisetas. Creé un catálogo para cada uno, pero mis anuncios quedaron desordenados. ¿Qué hice mal? 😕' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“O ideal é um catálogo só para todo o estoque. Para separar canecas e camisetas, use conjuntos de produtos dentro dele. Vamos juntar tudo em um e criar os conjuntos.”', es: '“Lo ideal es un solo catálogo para todo el inventario. Para separar tazas y camisetas, usa conjuntos de productos dentro de él. Juntemos todo en uno y creemos los conjuntos.”' }, fb: { pt: 'Isso! Você explicou a regra e já indicou o caminho.', es: '¡Eso! Explicaste la regla y ya indicaste el camino.' } },
          { certa: false, txt: { pt: '“Crie um terceiro catálogo para os dois.”', es: '“Crea un tercer catálogo para los dos.”' }, fb: { pt: 'Isso só aumenta a bagunça: o ideal é um catálogo único.', es: 'Eso solo aumenta el desorden: lo ideal es un catálogo único.' } },
          { certa: false, txt: { pt: '“Apague a conta de anúncios e comece de novo.”', es: '“Elimina la cuenta publicitaria y empieza de nuevo.”' }, fb: { pt: 'Exagero: o problema é organizar o catálogo.', es: 'Exagerado: el problema es organizar el catálogo.' } },
          { certa: false, txt: { pt: '“Isso é normal, a Meta embaralha os produtos.”', es: '“Eso es normal, Meta mezcla los productos.”' }, fb: { pt: 'Não é isso: a Meta recomenda um catálogo único.', es: 'No es eso: Meta recomienda un catálogo único.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Quantos catálogos existem hoje no portfólio? Algum aparece como “Sem acesso”?', es: '¿Cuántos catálogos existen hoy en el portfolio? ¿Alguno aparece como “Sin acceso”?' },
          { pt: 'O que a pessoa quer separar: tipo de produto, campanha ou loja?', es: '¿Qué quiere separar la persona: tipo de producto, campaña o tienda?' }],
        conferir: [{ pt: 'Gerenciador de Comércio › Ativos › Catálogos: a lista e os IDs.', es: 'Administrador de ventas › Activos › Catálogos: la lista y los IDs.' },
          { pt: 'Para separar por campanha: aba Conjuntos do catálogo.', es: 'Para separar por campaña: pestaña Conjuntos del catálogo.' }],
        frase: { pt: 'A Meta recomenda usar um só catálogo para todo o estoque. Para separar por tipo ou campanha, a gente cria conjuntos de produtos dentro dele.', es: 'Meta recomienda usar un solo catálogo para todo el inventario. Para separar por tipo o campaña, creamos conjuntos de productos dentro de él.' },
        passos: [{ pt: 'Abra o catálogo principal e vá na aba Conjuntos.', es: 'Abre el catálogo principal y ve a la pestaña Conjuntos.' },
          { pt: 'Crie um conjunto para cada grupo de produtos.', es: 'Crea un conjunto para cada grupo de productos.' }],
        encaminhar: { pt: 'Se a pessoa não achar o catálogo ou não tiver acesso, confirme o portfólio e peça acesso a quem administra.', es: 'Si la persona no encuentra el catálogo o no tiene acceso, confirma el portfolio y pide acceso a quien lo administra.' }
      }
    },
    {
      id: '02', min: 8, status: 'pronta',
      titulo: { pt: 'Criar o catálogo da Marina', es: 'Crear el catálogo de Marina' },
      antes: { pt: 'A Marina entendeu: um catálogo só, com os produtos dentro.', es: 'Marina entendió: un solo catálogo, con los productos dentro.' },
      gancho: { pt: '“Vou criar agora! Mas tem uma pergunta que diz que não dá para mudar depois…” Vamos passo a passo.', es: '“¡Lo voy a crear ahora! Pero hay una pregunta que dice que no se puede cambiar después…” Vamos paso a paso.' },
      objetivo: { pt: 'Criar um catálogo: escolher o tipo certo, o portfólio e o nome, e saber o que ainda falta depois.', es: 'Crear un catálogo: elegir el tipo correcto, el portfolio y el nombre, y saber qué falta después.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Cliquei em “+” e apareceu um aviso perguntando se tenho certeza. Posso continuar? 🤔', es: 'Hice clic en “+” y apareció un aviso preguntando si estoy segura. ¿Puedo continuar? 🤔' }],
          ['rafa', { pt: 'Pode. O aviso só lembra que um catálogo único é melhor. Se você ainda não tem nenhum, siga em frente.', es: 'Puedes. El aviso solo recuerda que un catálogo único es mejor. Si todavía no tienes ninguno, sigue adelante.' }],
          ['marina', { pt: 'E essa pergunta de “o que descreve seus produtos”?', es: '¿Y esa pregunta de “qué describe tus productos”?' }],
          ['rafa', { pt: 'Escolha com cuidado: a tela avisa que não dá para alterar depois. Para a loja da Marina, é “Produtos online”.', es: 'Elige con cuidado: la pantalla avisa que no se puede cambiar después. Para la tienda de Marina, es “Productos online”.' }],
          ['pixel', { pt: 'Depois vêm o portfólio, o nome e, mais adiante, a conexão de dados (Pixel). O catálogo nasce vazio: os produtos entram no próximo passo.', es: 'Después vienen el portfolio, el nombre y, más adelante, la conexión de datos (Pixel). El catálogo nace vacío: los productos entran en el próximo paso.' }]
        ],
        pontos: [
          { pt: '<b>O tipo não muda depois.</b> Escolha o que melhor descreve os produtos.', es: '<b>El tipo no cambia después.</b> Elige lo que mejor describa los productos.' },
          { pt: '<b>Portfólio empresarial</b> certo, e um <b>nome</b> fácil de reconhecer.', es: '<b>Portfolio comercial</b> correcto y un <b>nombre</b> fácil de reconocer.' },
          { pt: '<b>Conectar dados</b> liga o Pixel ao catálogo (dá para fazer depois, na aba Eventos).', es: '<b>Conectar datos</b> vincula el Pixel al catálogo (se puede hacer después, en la pestaña Eventos).' }
        ],
        notas: { pt: 'Fluxo visto de verdade em 16/10/2026 até a tela “Configure seu catálogo” (catálogo de aula). Opções 2 a 4 do tipo foram resumidas (a conferir).', es: 'Flujo visto de verdad el 16/10/2026 hasta la pantalla “Configurar tu catálogo” (catálogo de práctica). Las opciones 2 a 4 del tipo se resumieron (por confirmar).' }
      },
      ferramenta: 'tipo-catalogo',
      praticar: {
        texto: { pt: 'No simulador do Gerenciador de Comércio, o Pixel te guia para criar o catálogo da Marina, do “+” até o catálogo pronto.', es: 'En el simulador del Administrador de ventas, el Pixel te guía para crear el catálogo de Marina, del “+” hasta el catálogo listo.' },
        tour: 'criar-catalogo', pagina: 'meta-catalogo.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Criei o catálogo como “Serviços” sem querer e agora quero mudar para “Produtos online”. Onde eu troco?? 😰', es: 'Creé el catálogo como “Servicios” sin querer y ahora quiero cambiarlo a “Productos online”. ¿Dónde lo cambio?? 😰' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Esse tipo não dá para alterar depois: a própria tela avisa. O caminho é criar um catálogo novo com o tipo certo e passar os produtos para ele. Se ainda estiver vazio, é rápido.”', es: '“Ese tipo no se puede cambiar después: la propia pantalla lo avisa. El camino es crear un catálogo nuevo con el tipo correcto y pasar los productos a él. Si todavía está vacío, es rápido.”' }, fb: { pt: 'Isso! Honesto sobre a limitação e já com o caminho.', es: '¡Eso! Honesto sobre la limitación y ya con el camino.' } },
          { certa: false, txt: { pt: '“Vá em Configurações e troque o tipo.”', es: '“Ve a Configurar y cambia el tipo.”' }, fb: { pt: 'Esse campo não existe: o tipo não muda depois.', es: 'Ese campo no existe: el tipo no cambia después.' } },
          { certa: false, txt: { pt: '“Peça ao suporte para trocar e aguarde.”', es: '“Pide a soporte que lo cambie y espera.”' }, fb: { pt: 'Não é um caminho previsto e atrasa o cliente.', es: 'No es un camino previsto y retrasa al cliente.' } },
          { certa: false, txt: { pt: '“Deixe assim, não faz diferença.”', es: '“Déjalo así, no hace diferencia.”' }, fb: { pt: 'O tipo define como o catálogo é configurado: vale acertar.', es: 'El tipo define cómo se configura el catálogo: conviene acertar.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual tipo foi escolhido na criação? Ainda está vazio?', es: '¿Qué tipo se eligió al crear? ¿Todavía está vacío?' },
          { pt: 'Em qual portfólio empresarial o catálogo foi criado?', es: '¿En qué portfolio comercial se creó el catálogo?' }],
        conferir: [{ pt: 'Tipo do catálogo: não pode ser alterado depois.', es: 'Tipo de catálogo: no se puede cambiar después.' },
          { pt: 'Portfólio e acesso das pessoas na aba Configurações › Permissões.', es: 'Portfolio y acceso de las personas en la pestaña Configurar › Permisos.' }],
        frase: { pt: 'O tipo do catálogo não pode ser alterado depois. Se foi escolhido errado, o caminho é criar um catálogo novo com o tipo certo e levar os produtos para ele.', es: 'El tipo de catálogo no se puede cambiar después. Si se eligió mal, el camino es crear un catálogo nuevo con el tipo correcto y llevar los productos a él.' },
        passos: [{ pt: 'Em Ativos › Catálogos, clique em “+” e crie o novo catálogo.', es: 'En Activos › Catálogos, haz clic en “+” y crea el nuevo catálogo.' },
          { pt: 'Escolha o tipo certo, o portfólio e o nome.', es: 'Elige el tipo correcto, el portfolio y el nombre.' }],
        encaminhar: { pt: 'Se o portfólio ou as permissões estiverem erradas, siga o módulo de Portfólio empresarial.', es: 'Si el portfolio o los permisos están mal, sigue el módulo de Portfolio comercial.' }
      }
    },
    {
      id: '03', min: 8, status: 'pronta',
      titulo: { pt: 'Colocar os produtos no catálogo', es: 'Poner los productos en el catálogo' },
      antes: { pt: 'O catálogo da Marina está criado, mas ainda vazio.', es: 'El catálogo de Marina está creado, pero todavía vacío.' },
      gancho: { pt: '“Tenho uma planilha com meus produtos. Qual dos jeitos eu uso?” Vamos ver as opções e carregar o arquivo.', es: '“Tengo una hoja de cálculo con mis productos. ¿Cuál de las formas uso?” Vamos a ver las opciones y subir el archivo.' },
      objetivo: { pt: 'Escolher o jeito de adicionar produtos, carregar um arquivo (feed) com a moeda certa e conferir o resultado.', es: 'Elegir la forma de agregar productos, subir un archivo (feed) con la moneda correcta y revisar el resultado.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Apareceram quatro jeitos de adicionar produtos. Qual escolho? 🤔', es: 'Aparecieron cuatro formas de agregar productos. ¿Cuál elijo? 🤔' }],
          ['rafa', { pt: 'Com muitos produtos ou estoque que muda, use um arquivo de dados. Para poucos, dá para adicionar à mão. Também dá para trazer das redes sociais ou deixar para depois.', es: 'Con muchos productos o stock que cambia, usa un archivo de datos. Para pocos, se puede agregar a mano. También se puede traer de las redes sociales o dejarlo para después.' }],
          ['marina', { pt: 'E o arquivo, de onde vem?', es: '¿Y el archivo, de dónde viene?' }],
          ['rafa', { pt: 'Pode ser um link (URL) ou uma planilha do Google, e a Meta lê o arquivo na frequência que você escolher, por exemplo todos os dias.', es: 'Puede ser un enlace (URL) o una hoja de cálculo de Google, y Meta lee el archivo con la frecuencia que elijas, por ejemplo todos los días.' }],
          ['pixel', { pt: 'Cuidado com a moeda padrão! Se o arquivo não trouxer a moeda em cada preço, os produtos entram na moeda padrão da tela. Confira antes de carregar.', es: '¡Cuidado con la moneda predeterminada! Si el archivo no trae la moneda en cada precio, los productos entran en la moneda predeterminada de la pantalla. Revísala antes de subir.' }]
        ],
        pontos: [
          { pt: '<b>Arquivo de dados</b> (feed): atualiza sozinho na frequência escolhida.', es: '<b>Archivo de datos</b> (feed): se actualiza solo con la frecuencia elegida.' },
          { pt: '<b>Manual</b>: bom para poucos produtos; a grade pede pelo menos 5 para anúncios de catálogo Advantage+.', es: '<b>Manual</b>: bueno para pocos productos; la cuadrícula pide al menos 5 para anuncios de catálogo Advantage+.' },
          { pt: '<b>Moeda padrão</b> certa antes de carregar.', es: '<b>Moneda predeterminada</b> correcta antes de subir.' }
        ],
        notas: { pt: 'Telas vistas de verdade em 16/10/2026 (feed de aula carregado por URL). A janela real de edição de produto ainda não foi vista (a conferir).', es: 'Pantallas vistas de verdad el 16/10/2026 (feed de práctica subido por URL). La ventana real de edición de producto todavía no se vio (por confirmar).' }
      },
      ferramenta: 'jeito-de-adicionar',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para carregar o arquivo de produtos da Marina com a moeda certa e ver os 8 produtos chegarem.', es: 'En el simulador, el Pixel te guía para subir el archivo de productos de Marina con la moneda correcta y ver llegar los 8 productos.' },
        tour: 'adicionar-produtos', pagina: 'meta-catalogo.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Carreguei meu arquivo e os preços ficaram todos em dólar! Minha loja é em reais. 😱', es: '¡Subí mi archivo y los precios quedaron todos en dólares! Mi tienda es en reales. 😱' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Isso acontece quando o arquivo não traz a moeda em cada preço e a moeda padrão ficou em dólar. Vamos corrigir a moeda padrão da fonte de dados (ou colocar a moeda em cada preço no arquivo) e atualizar.”', es: '“Eso pasa cuando el archivo no trae la moneda en cada precio y la moneda predeterminada quedó en dólares. Corrijamos la moneda predeterminada del origen de datos (o pongamos la moneda en cada precio en el archivo) y actualicemos.”' }, fb: { pt: 'Isso! Você achou a causa provável e o caminho.', es: '¡Eso! Encontraste la causa probable y el camino.' } },
          { certa: false, txt: { pt: '“A Meta converteu sozinha, é assim mesmo.”', es: '“Meta convirtió sola, es así.”' }, fb: { pt: 'Não: ela só usou a moeda padrão configurada.', es: 'No: solo usó la moneda predeterminada configurada.' } },
          { certa: false, txt: { pt: '“Edite os 8 preços um por um na tela.”', es: '“Edita los 8 precios uno por uno en la pantalla.”' }, fb: { pt: 'Na próxima atualização do arquivo eles voltariam. Corrija na origem.', es: 'En la próxima actualización del archivo volverían. Corrige en el origen.' } },
          { certa: false, txt: { pt: '“Apague o catálogo e crie outro.”', es: '“Elimina el catálogo y crea otro.”' }, fb: { pt: 'Exagero: basta corrigir a moeda e atualizar.', es: 'Exagerado: basta corregir la moneda y actualizar.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O arquivo é CSV, XML ou planilha? Está em um link público?', es: '¿El archivo es CSV, XML u hoja de cálculo? ¿Está en un enlace público?' },
          { pt: 'Qual moeda padrão está na fonte de dados? Os preços do arquivo trazem a moeda?', es: '¿Qué moneda predeterminada está en el origen de datos? ¿Los precios del archivo traen la moneda?' }],
        conferir: [{ pt: 'Aba Fontes de dados: tipo, frequência, última atualização, status.', es: 'Pestaña Orígenes de datos: tipo, frecuencia, última actualización, estado.' },
          { pt: 'Aba Produtos: quantidade, preços e moeda.', es: 'Pestaña Productos: cantidad, precios y moneda.' }],
        frase: { pt: 'Se o arquivo não traz a moeda em cada preço, a Meta usa a moeda padrão da fonte de dados. Vamos conferir qual está marcada e carregar de novo.', es: 'Si el archivo no trae la moneda en cada precio, Meta usa la moneda predeterminada del origen de datos. Revisemos cuál está marcada y subamos de nuevo.' },
        passos: [{ pt: 'Abra a aba Fontes de dados e a fonte do arquivo.', es: 'Abre la pestaña Orígenes de datos y el origen del archivo.' },
          { pt: 'Ajuste a moeda padrão e clique em Atualizar.', es: 'Ajusta la moneda predeterminada y haz clic en Actualizar.' }],
        encaminhar: { pt: 'Se o arquivo em si está errado (colunas faltando, link fora do ar), o ajuste é na loja ou na plataforma do cliente; a Central de Ajuda da Meta explica o formato.', es: 'Si el archivo en sí está mal (columnas faltantes, enlace caído), el ajuste es en la tienda o en la plataforma del cliente; el Centro de ayuda de Meta explica el formato.' }
      }
    },
    {
      id: '04', min: 7, status: 'pronta',
      titulo: { pt: 'Catálogo e Pixel falando a mesma língua', es: 'Catálogo y Pixel hablando el mismo idioma' },
      antes: { pt: 'Os 8 produtos da Marina já estão no catálogo, e o Pixel mede o site.', es: 'Los 8 productos de Marina ya están en el catálogo, y el Pixel mide el sitio.' },
      gancho: { pt: '“O anúncio não mostra a caneca que a pessoa viu!” Pode ser que os IDs não combinem. Vamos conferir.', es: '“¡El anuncio no muestra la taza que vio la persona!” Puede ser que los IDs no coincidan. Vamos a revisar.' },
      objetivo: { pt: 'Entender que o ID do produto no catálogo e o content_id do evento do Pixel precisam ser iguais, e onde conferir cada um.', es: 'Entender que el ID del producto en el catálogo y el content_id del evento del Pixel deben ser iguales, y dónde revisar cada uno.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'O Pixel manda “caneca-azul” e o catálogo chama “CANECA_01”. Dá problema? 🤔', es: 'El Pixel manda “caneca-azul” y el catálogo se llama “CANECA_01”. ¿Hay problema? 🤔' }],
          ['rafa', { pt: 'Dá. A Meta liga o evento ao produto pelo ID. Se o content_id do evento não for igual à Identificação do conteúdo do catálogo, ela não acha o produto.', es: 'Sí. Meta vincula el evento al producto por el ID. Si el content_id del evento no es igual al Identificador de contenido del catálogo, no encuentra el producto.' }],
          ['marina', { pt: 'E a camiseta, que tem P, M e G?', es: '¿Y la camiseta, que tiene P, M y G?' }],
          ['rafa', { pt: 'Cada tamanho é uma variante, com seu próprio ID. A “Identificação do grupo” só junta as variantes do mesmo produto. O evento deve citar a variante que a pessoa viu.', es: 'Cada talla es una variante, con su propio ID. El “Identificador de grupo” solo une las variantes del mismo producto. El evento debe citar la variante que la persona vio.' }],
          ['pixel', { pt: 'Para ver se o catálogo está recebendo eventos, olhe a aba Eventos do catálogo; os detalhes dos eventos ficam no Gerenciador de Eventos.', es: 'Para ver si el catálogo está recibiendo eventos, mira la pestaña Eventos del catálogo; los detalles de los eventos están en el Administrador de eventos.' }]
        ],
        pontos: [
          { pt: '<b>content_id do Pixel = Identificação do conteúdo do catálogo.</b>', es: '<b>content_id del Pixel = Identificador de contenido del catálogo.</b>' },
          { pt: '<b>Variantes</b> têm ID próprio; o <b>grupo</b> só as agrupa.', es: '<b>Las variantes</b> tienen ID propio; el <b>grupo</b> solo las agrupa.' },
          { pt: '<b>Aba Eventos</b> do catálogo mostra a fonte ligada.', es: '<b>La pestaña Eventos</b> del catálogo muestra el origen conectado.' }
        ],
        notas: { pt: 'Nomes das colunas e dos IDs vistos de verdade em 16/10/2026. A tela real da aba Eventos com o Pixel já ligado ainda não foi vista (a conferir).', es: 'Nombres de las columnas y de los IDs vistos de verdad el 16/10/2026. La pantalla real de la pestaña Eventos con el Pixel ya conectado todavía no se vio (por confirmar).' }
      },
      ferramenta: 'ids-batem',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva pelas colunas de ID do catálogo e pelas variantes da camiseta, e mostra onde conferir os eventos.', es: 'En el simulador, el Pixel te lleva por las columnas de ID del catálogo y por las variantes de la camiseta, y muestra dónde revisar los eventos.' },
        tour: 'conferir-ids', pagina: 'meta-catalogo.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Meu anúncio de catálogo mostra produtos que nada têm a ver com o que o cliente olhou. O Pixel está funcionando! 😤', es: 'Mi anuncio de catálogo muestra productos que nada tienen que ver con lo que miró el cliente. ¡El Pixel está funcionando! 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“O Pixel funcionar não basta: o ID que ele manda no evento (content_id) precisa ser igual ao ID do produto no catálogo. Vamos comparar um exemplo: o ID do evento e a Identificação do conteúdo na aba Produtos.”', es: '“Que el Pixel funcione no basta: el ID que manda en el evento (content_id) debe ser igual al ID del producto en el catálogo. Comparemos un ejemplo: el ID del evento y el Identificador de contenido en la pestaña Productos.”' }, fb: { pt: 'Isso! Você apontou a causa mais comum e como conferir.', es: '¡Eso! Señalaste la causa más común y cómo revisar.' } },
          { certa: false, txt: { pt: '“Aumente o orçamento do anúncio.”', es: '“Aumenta el presupuesto del anuncio.”' }, fb: { pt: 'Orçamento não muda quais produtos aparecem.', es: 'El presupuesto no cambia qué productos aparecen.' } },
          { certa: false, txt: { pt: '“Recrie o Pixel do zero.”', es: '“Recrea el Pixel desde cero.”' }, fb: { pt: 'Exagero: o Pixel está funcionando; o problema é o ID.', es: 'Exagerado: el Pixel está funcionando; el problema es el ID.' } },
          { certa: false, txt: { pt: '“Troque o nome dos produtos no catálogo.”', es: '“Cambia el nombre de los productos en el catálogo.”' }, fb: { pt: 'A Meta compara IDs, não nomes.', es: 'Meta compara IDs, no nombres.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual é o content_id que o evento manda? (Testar eventos, no Gerenciador de Eventos.)', es: '¿Cuál es el content_id que manda el evento? (Probar eventos, en el Administrador de eventos.)' },
          { pt: 'Qual é a Identificação do conteúdo do mesmo produto no catálogo?', es: '¿Cuál es el Identificador de contenido del mismo producto en el catálogo?' },
          { pt: 'O produto tem variantes (tamanho, cor)? O evento manda a variante certa?', es: '¿El producto tiene variantes (talla, color)? ¿El evento manda la variante correcta?' }],
        conferir: [{ pt: 'content_id do evento igual à Identificação do conteúdo do catálogo.', es: 'content_id del evento igual al Identificador de contenido del catálogo.' },
          { pt: 'Aba Eventos do catálogo: fonte ligada.', es: 'Pestaña Eventos del catálogo: origen conectado.' }],
        frase: { pt: 'Para o catálogo e o Pixel se entenderem, o ID do produto no evento precisa ser igual ao ID no catálogo. Vamos comparar um exemplo.', es: 'Para que el catálogo y el Pixel se entiendan, el ID del producto en el evento debe ser igual al ID en el catálogo. Comparemos un ejemplo.' },
        passos: [{ pt: 'Com Testar eventos, veja o content_id de um ViewContent.', es: 'Con Probar eventos, mira el content_id de un ViewContent.' },
          { pt: 'No catálogo, aba Produtos, compare com a Identificação do conteúdo.', es: 'En el catálogo, pestaña Productos, compara con el Identificador de contenido.' }],
        encaminhar: { pt: 'Se os IDs do site precisam mudar, o ajuste é feito no site ou na plataforma da loja do cliente (o módulo de Integrações explica).', es: 'Si los IDs del sitio necesitan cambiar, el ajuste se hace en el sitio o en la plataforma de la tienda del cliente (el módulo de Integraciones lo explica).' }
      }
    },
    {
      id: '05', min: 8, status: 'pronta',
      titulo: { pt: 'Meu produto não aparece!', es: '¡Mi producto no aparece!' },
      antes: { pt: 'Catálogo criado, produtos carregados, IDs combinando.', es: 'Catálogo creado, productos cargados, IDs coincidiendo.' },
      gancho: { pt: '“O Moletom está como indisponível, mas eu tenho no estoque!” Vamos achar a causa.', es: '“¡El Moletom aparece como agotado, pero lo tengo en stock!” Vamos a encontrar la causa.' },
      objetivo: { pt: 'Achar por que um produto não aparece como esperado: ler o status, a disponibilidade e a fonte de dados, e corrigir onde o dado nasce.', es: 'Encontrar por qué un producto no aparece como se espera: leer el estado, la disponibilidad y el origen de datos, y corregir donde nace el dato.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu Moletom aparece como “Indisponível” no catálogo. Eu tenho estoque! 😩', es: 'Mi Moletom aparece como “Agotado” en el catálogo. ¡Tengo stock! 😩' }],
          ['rafa', { pt: 'O catálogo só repete o que o arquivo diz. Veja na aba Fontes de dados quando foi a última atualização. Se o estoque mudou no site depois, falta atualizar.', es: 'El catálogo solo repite lo que dice el archivo. Mira en la pestaña Orígenes de datos cuándo fue la última actualización. Si el stock cambió en el sitio después, falta actualizar.' }],
          ['marina', { pt: 'Então corrijo o estoque no site e clico em Atualizar?', es: '¿Entonces corrijo el stock en el sitio y hago clic en Actualizar?' }],
          ['rafa', { pt: 'Isso. Se você editar só no catálogo, a próxima leitura do arquivo desfaz a edição.', es: 'Eso. Si editas solo en el catálogo, la próxima lectura del archivo deshace la edición.' }],
          ['pixel', { pt: 'Na lista, o status também diz se o produto está “Qualificado”. Se não estiver, abra o produto e leia o aviso.', es: 'En la lista, el estado también dice si el producto está “Elegible”. Si no lo está, abre el producto y lee el aviso.' }]
        ],
        pontos: [
          { pt: '<b>Onde olhar primeiro:</b> status, disponibilidade e última atualização da fonte.', es: '<b>Dónde mirar primero:</b> estado, disponibilidad y última actualización del origen.' },
          { pt: '<b>Corrija na origem</b> (o site ou o arquivo) e depois atualize.', es: '<b>Corrige en el origen</b> (el sitio o el archivo) y luego actualiza.' },
          { pt: '<b>Produto não qualificado:</b> leia o aviso do produto.', es: '<b>Producto no elegible:</b> lee el aviso del producto.' }
        ],
        notas: { pt: 'Telas vistas de verdade em 16/10/2026 (lista de produtos com “Qualificado”, Disponibilidade e Fontes de dados). A lista de motivos de produtos recusados não foi vista e não é escopo deste treinamento (a conferir).', es: 'Pantallas vistas de verdad el 16/10/2026 (lista de productos con “Elegible”, Disponibilidad y Orígenes de datos). La lista de motivos de productos rechazados no se vio y no es alcance de esta capacitación (por confirmar).' }
      },
      ferramenta: 'por-que-nao-aparece',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva a achar o Moletom indisponível, ver a fonte de dados e corrigir o estoque na origem.', es: 'En el simulador, el Pixel te lleva a encontrar el Moletom agotado, ver el origen de datos y corregir el stock en el origen.' },
        tour: 'achar-produto', pagina: 'meta-catalogo.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Troquei o estoque do Moletom direto no catálogo e, no outro dia, voltou a ficar indisponível! 😡', es: '¡Cambié el stock del Moletom directo en el catálogo y, al otro día, volvió a quedar agotado! 😡' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Como os produtos vêm do arquivo, a leitura seguinte sobrescreve o que foi editado só no catálogo. Corrija o estoque no site (a origem) e clique em Atualizar na fonte de dados.”', es: '“Como los productos vienen del archivo, la lectura siguiente sobrescribe lo que se editó solo en el catálogo. Corrige el stock en el sitio (el origen) y haz clic en Actualizar en el origen de datos.”' }, fb: { pt: 'Isso! Você explicou por que voltou e onde corrigir.', es: '¡Eso! Explicaste por qué volvió y dónde corregir.' } },
          { certa: false, txt: { pt: '“Edite de novo todo dia no catálogo.”', es: '“Edítalo de nuevo todos los días en el catálogo.”' }, fb: { pt: 'Isso é trabalho sem fim: corrija na origem.', es: 'Eso es trabajo sin fin: corrige en el origen.' } },
          { certa: false, txt: { pt: '“É um bug da Meta, aguarde.”', es: '“Es un error de Meta, espera.”' }, fb: { pt: 'Não é bug: o arquivo mandou o estoque antigo.', es: 'No es un error: el archivo mandó el stock antiguo.' } },
          { certa: false, txt: { pt: '“Prometo que a Meta aprova o produto hoje.”', es: '“Prometo que Meta aprueba el producto hoy.”' }, fb: { pt: 'Nunca prometa aprovação, e aqui o problema é o estoque do arquivo.', es: 'Nunca prometas aprobación, y aquí el problema es el stock del archivo.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual é o produto e qual status ou aviso aparece nele?', es: '¿Cuál es el producto y qué estado o aviso aparece en él?' },
          { pt: 'Quando foi a última atualização da fonte de dados? Qual a frequência?', es: '¿Cuándo fue la última actualización del origen de datos? ¿Cuál es la frecuencia?' },
          { pt: 'O dado (preço, estoque) está certo no site?', es: '¿El dato (precio, stock) está correcto en el sitio?' }],
        conferir: [{ pt: 'Aba Produtos: status, disponibilidade, preço.', es: 'Pestaña Productos: estado, disponibilidad, precio.' },
          { pt: 'Aba Fontes de dados: última atualização, frequência, status.', es: 'Pestaña Orígenes de datos: última actualización, frecuencia, estado.' }],
        frase: { pt: 'O catálogo repete o que o arquivo diz. Vamos corrigir o dado na origem, no site, e atualizar a fonte de dados.', es: 'El catálogo repite lo que dice el archivo. Corrijamos el dato en el origen, en el sitio, y actualicemos el origen de datos.' },
        passos: [{ pt: 'Corrija o estoque ou o preço no site.', es: 'Corrige el stock o el precio en el sitio.' },
          { pt: 'No catálogo, aba Fontes de dados, clique em Atualizar e confira o produto.', es: 'En el catálogo, pestaña Orígenes de datos, haz clic en Actualizar y revisa el producto.' }],
        encaminhar: { pt: 'Se o produto foi recusado por política ou o aviso não é sobre dados do arquivo, confirme o sintoma e siga a Central de Ajuda da Meta; esse tema é tratado por outra área.', es: 'Si el producto fue rechazado por política o el aviso no es sobre datos del archivo, confirma el síntoma y sigue el Centro de ayuda de Meta; ese tema lo trata otra área.' }
      }
    }
  ],
  feed: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'O anúncio no Feed: o que a pessoa vê', es: 'El anuncio en el Feed: lo que ve la persona' },
      antes: { pt: 'A Marina já sabe criar a campanha, o conjunto de anúncios e o catálogo. Falta cuidar do que a pessoa realmente vê.', es: 'Marina ya sabe crear la campaña, el conjunto de anuncios y el catálogo. Falta cuidar lo que realmente ve la persona.' },
      gancho: { pt: '“Meu anúncio vai aparecer no Feed? E como ele vai ficar?” Vamos separar as peças do anúncio e saber onde cada uma mora.', es: '“¿Mi anuncio va a aparecer en el Feed? ¿Y cómo va a quedar?” Vamos a separar las piezas del anuncio y saber dónde vive cada una.' },
      objetivo: { pt: 'Reconhecer as partes do anúncio (Página, texto principal, mídia, título, descrição, botão e destino) e achar onde cada uma é configurada.', es: 'Reconocer las partes del anuncio (Página, texto principal, contenido multimedia, título, descripción, botón y destino) y encontrar dónde se configura cada una.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Já escolhi o público e o orçamento. Mas o anúncio em si, o que a pessoa vê, onde eu monto? 🤔', es: 'Ya elegí el público y el presupuesto. Pero el anuncio en sí, lo que ve la persona, ¿dónde lo armo? 🤔' }],
          ['rafa', { pt: 'No nível do anúncio, o terceiro da árvore. Lá ficam a Identidade (a Página que assina), o formato, a mídia, o texto, o botão e o destino.', es: 'En el nivel del anuncio, el tercero del árbol. Ahí están la Identidad (la Página que firma), el formato, el contenido multimedia, el texto, el botón y el destino.' }],
          ['marina', { pt: 'E o que aparece no Feed, afinal?', es: '¿Y qué aparece en el Feed, entonces?' }],
          ['rafa', { pt: 'O nome da Página, o texto principal em cima, a imagem no meio e, embaixo, o título e o botão. Para ver exatamente como fica, a tela tem a Prévia do anúncio.', es: 'El nombre de la Página, el texto principal arriba, la imagen en el medio y, abajo, el título y el botón. Para ver exactamente cómo queda, la pantalla tiene la Vista previa del anuncio.' }],
          ['pixel', { pt: 'Importante: o Feed é só um dos lugares. Com os posicionamentos Advantage+, o mesmo anúncio também aparece em Stories, Reels e outros. A prévia tem uma aba para cada grupo.', es: 'Importante: el Feed es solo uno de los lugares. Con las ubicaciones Advantage+, el mismo anuncio también aparece en Stories, Reels y otros. La vista previa tiene una pestaña para cada grupo.' }]
        ],
        pontos: [
          { pt: '<b>Identidade:</b> a Página do Facebook que assina (obrigatória). O Instagram é opcional.', es: '<b>Identidad:</b> la Página de Facebook que firma (obligatoria). El Instagram es opcional.' },
          { pt: '<b>O que a pessoa lê:</b> texto principal (em cima), título e descrição (embaixo) e o botão (chamada para ação).', es: '<b>Lo que lee la persona:</b> texto principal (arriba), título y descripción (abajo) y el botón (llamada a la acción).' },
          { pt: '<b>Para onde vai:</b> em Destino, o URL do site, obrigatório.', es: '<b>A dónde va:</b> en Destino, la URL del sitio web, obligatoria.' }
        ],
        notas: { pt: 'Telas vistas de verdade em 16/10/2026 (rascunho de Vendas na conta de aula; nada foi publicado). Nomes conferidos em português e em espanhol (Administrador de anuncios).', es: 'Pantallas vistas de verdad el 16/10/2026 (borrador de Ventas en la cuenta de práctica; no se publicó nada). Nombres revisados en portugués y en español (Administrador de anuncios).' }
      },
      ferramenta: 'anatomia-anuncio',
      atender: {
        cena: { pt: 'Coloquei o endereço da loja no texto do anúncio, mas quando clicam nada acontece! Onde eu coloquei errado? 😕', es: '¡Puse la dirección de la tienda en el texto del anuncio, pero cuando hacen clic no pasa nada! ¿Dónde me equivoqué? 😕' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“O texto do anúncio é só para ler: o clique é definido no campo Destino. Abra o anúncio, vá em Destino e preencha o URL do site (é obrigatório). Aí o botão leva a pessoa até lá.”', es: '“El texto del anuncio es solo para leer: el clic se define en el campo Destino. Abre el anuncio, ve a Destino y completa la URL del sitio web (es obligatoria). Ahí el botón lleva a la persona hasta allí.”' }, fb: { pt: 'Isso! Você separou o que se lê do que se clica e mostrou o campo certo.', es: '¡Eso! Separaste lo que se lee de lo que se hace clic y mostraste el campo correcto.' } },
          { certa: false, txt: { pt: '“Escreva o endereço em letras maiores no texto.”', es: '“Escribe la dirección en letras más grandes en el texto.”' }, fb: { pt: 'Tamanho de letra não cria o clique: é o campo Destino que faz isso.', es: 'El tamaño de letra no crea el clic: lo hace el campo Destino.' } },
          { certa: false, txt: { pt: '“Troque a Página que assina o anúncio.”', es: '“Cambia la Página que firma el anuncio.”' }, fb: { pt: 'A Página só identifica quem anuncia; não decide para onde o clique vai.', es: 'La Página solo identifica quién anuncia; no decide adónde va el clic.' } },
          { certa: false, txt: { pt: '“Aguarde 24 horas, a Meta ativa o link sozinha.”', es: '“Espera 24 horas, Meta activa el enlace sola.”' }, fb: { pt: 'Não ativa: o destino precisa ser preenchido por você.', es: 'No se activa: el destino tienes que completarlo tú.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Em qual nível do rascunho você está (campanha, conjunto ou anúncio)?', es: '¿En qué nivel del borrador estás (campaña, conjunto o anuncio)?' },
          { pt: 'O que a pessoa vê hoje no anúncio e o que ela queria ver?', es: '¿Qué ve hoy la persona en el anuncio y qué quería ver?' }],
        conferir: [{ pt: 'Nível do anúncio: Identidade, formato, mídia, texto, botão e Destino.', es: 'Nivel del anuncio: Identidad, formato, contenido multimedia, texto, botón y Destino.' },
          { pt: 'Prévia do anúncio: uma aba por grupo de posicionamentos.', es: 'Vista previa del anuncio: una pestaña por grupo de ubicaciones.' }],
        frase: { pt: 'O que a pessoa lê é o texto principal, o título e o botão. O lugar para onde ela vai ao clicar é o Destino, onde fica o URL do site. Vamos conferir os dois no nível do anúncio.', es: 'Lo que lee la persona es el texto principal, el título y el botón. El lugar al que va al hacer clic es el Destino, donde está la URL del sitio web. Revisemos los dos en el nivel del anuncio.' },
        passos: [{ pt: 'Abra o anúncio e role até Destino.', es: 'Abre el anuncio y desplázate hasta Destino.' },
          { pt: 'Confira o URL do site e a prévia ao lado.', es: 'Revisa la URL del sitio web y la vista previa de al lado.' }],
        encaminhar: { pt: 'Se a pessoa não encontrar o nível do anúncio ou o rascunho, volte ao módulo de Anúncios (criação e edição).', es: 'Si la persona no encuentra el nivel del anuncio o el borrador, vuelve al módulo de Anuncios (creación y edición).' }
      }
    },
    {
      id: '02', min: 9, status: 'pronta',
      titulo: { pt: 'Montar o criativo da Marina', es: 'Armar el contenido de Marina' },
      antes: { pt: 'A Marina conhece as partes do anúncio e tem a foto da Caneca azul pronta.', es: 'Marina conoce las partes del anuncio y tiene lista la foto de la Caneca azul.' },
      gancho: { pt: '“A tela pede ‘Especifique a mídia’… e depois aparece uma janela cheia de etapas!” Vamos montar o criativo sem se perder.', es: '“La pantalla pide ‘Especifica el contenido multimedia’… ¡y después aparece una ventana llena de etapas!” Vamos a armar el contenido sin perdernos.' },
      objetivo: { pt: 'Escolher o formato, adicionar a mídia pelo assistente (mídia, texto, aprimoramentos) e ver o resultado na prévia.', es: 'Elegir el formato, agregar el contenido multimedia con el asistente (contenido, texto, mejoras) y ver el resultado en la vista previa.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Escolhi “Imagem ou vídeo único”. E agora, onde coloco a foto? 🤔', es: 'Elegí “Una sola imagen o video”. ¿Y ahora dónde pongo la foto? 🤔' }],
          ['rafa', { pt: 'Em “Criativo do anúncio”, clique em Configurar criativo e escolha Anúncio em imagem. Abre uma janela com etapas: Mídia, Configuração do criativo, Corte, Texto, Geração de imagem, Aprimoramentos.', es: 'En “Contenido del anuncio”, haz clic en Configurar contenido y elige Anuncio en imagen. Se abre una ventana con etapas: Contenido multimedia, Configuración del contenido, Recorte, Texto, Generación de imágenes, Mejoras.' }],
          ['marina', { pt: 'Preciso mexer em todas?', es: '¿Tengo que tocar todas?' }],
          ['rafa', { pt: 'Não. O essencial é escolher a mídia e escrever o texto principal e o título. As extensões e a geração de imagem com IA são opcionais.', es: 'No. Lo esencial es elegir el contenido multimedia y escribir el texto principal y el título. Las extensiones y la generación de imágenes con IA son opcionales.' }],
          ['pixel', { pt: 'Atenção nos Aprimoramentos: “Adicionar música” e “Adicionar animação” aparecem como “Ativado por padrão”. Se o cliente quer o anúncio exatamente como fez, confira aí.', es: 'Atención a las Mejoras: “Agregar música” y “Agregar animación” aparecen como “Activado de forma predeterminada”. Si el cliente quiere el anuncio exactamente como lo hizo, revísalo ahí.' }]
        ],
        pontos: [
          { pt: '<b>Formato:</b> “Imagem ou vídeo único” (uma peça) ou “Carrossel” (vários cartões).', es: '<b>Formato:</b> “Una sola imagen o video” (una pieza) o “Secuencia” (varias tarjetas).' },
          { pt: '<b>Assistente de mídia:</b> escolha a mídia, escreva texto principal e título e confira os aprimoramentos.', es: '<b>Asistente de contenido:</b> elige el contenido, escribe texto principal y título y revisa las mejoras.' },
          { pt: '<b>Depois de concluir:</b> a mídia aparece no anúncio e a prévia mostra o resultado.', es: '<b>Al terminar:</b> el contenido aparece en el anuncio y la vista previa muestra el resultado.' }
        ],
        notas: { pt: 'Assistente e etapas vistos de verdade em 16/10/2026 (nomes das etapas, campos de texto e lista de aprimoramentos). A etapa “Corte” dentro do assistente e o botão “Personalizar” dos aprimoramentos não foram vistos em detalhe (a conferir).', es: 'Asistente y etapas vistos de verdad el 16/10/2026 (nombres de las etapas, campos de texto y lista de mejoras). La etapa “Recorte” dentro del asistente y el botón “Personalizar” de las mejoras no se vieron en detalle (por confirmar).' }
      },
      ferramenta: 'imagem-ou-carrossel',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia pelo assistente: Configurar criativo, escolher a imagem, escrever o texto e passar pelos aprimoramentos.', es: 'En el simulador, el Pixel te guía por el asistente: Configurar contenido, elegir la imagen, escribir el texto y pasar por las mejoras.' },
        tour: 'montar-criativo', pagina: 'meta-feed.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Terminei de montar e, depois, vi que apareceu música no meu anúncio! Eu não quis música! 😤', es: '¡Terminé de armarlo y, después, vi que apareció música en mi anuncio! ¡Yo no quise música! 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“No assistente do criativo, na etapa Aprimoramentos, “Adicionar música” e “Adicionar animação” vêm “Ativado por padrão”. Vamos abrir essa etapa e ver o que você quer manter.”', es: '“En el asistente del contenido, en la etapa Mejoras, “Agregar música” y “Agregar animación” vienen “Activado de forma predeterminada”. Abramos esa etapa y veamos qué quieres mantener.”' }, fb: { pt: 'Isso! Você achou a causa provável e o lugar onde conferir.', es: '¡Eso! Encontraste la causa probable y el lugar donde revisar.' } },
          { certa: false, txt: { pt: '“A música é culpa da sua foto, tente outra.”', es: '“La música es culpa de tu foto, prueba otra.”' }, fb: { pt: 'Não tem relação com a foto: é um aprimoramento ativado por padrão.', es: 'No tiene relación con la foto: es una mejora activada de forma predeterminada.' } },
          { certa: false, txt: { pt: '“Isso não acontece, você deve ter colocado sem querer.”', es: '“Eso no pasa, debes haberla puesto sin querer.”' }, fb: { pt: 'Acontece: a própria tela mostra “Ativado por padrão”. Não culpe o cliente.', es: 'Pasa: la propia pantalla muestra “Activado de forma predeterminada”. No culpes al cliente.' } },
          { certa: false, txt: { pt: '“Apague o anúncio e crie outro.”', es: '“Elimina el anuncio y crea otro.”' }, fb: { pt: 'Exagero: basta rever os aprimoramentos.', es: 'Exagerado: basta revisar las mejoras.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O anúncio é de imagem ou de vídeo? Qual formato está marcado (único ou carrossel)?', es: '¿El anuncio es de imagen o de video? ¿Qué formato está marcado (único o secuencia)?' },
          { pt: 'O que apareceu no anúncio que o cliente não pediu (música, animação, texto)?', es: '¿Qué apareció en el anuncio que el cliente no pidió (música, animación, texto)?' }],
        conferir: [{ pt: 'Criativo do anúncio › Editar: etapas Mídia, Texto e Aprimoramentos.', es: 'Contenido del anuncio › Editar: etapas Contenido multimedia, Texto y Mejoras.' },
          { pt: 'Prévia do anúncio: confira o resultado em cada aba.', es: 'Vista previa del anuncio: revisa el resultado en cada pestaña.' }],
        frase: { pt: 'Alguns aprimoramentos do criativo, como música e animação, vêm ativados por padrão. Vamos abrir o assistente do criativo e conferir o que você quer manter.', es: 'Algunas mejoras del contenido, como música y animación, vienen activadas de forma predeterminada. Abramos el asistente del contenido y revisemos qué quieres mantener.' },
        passos: [{ pt: 'No anúncio, em Criativo do anúncio, clique em Editar.', es: 'En el anuncio, en Contenido del anuncio, haz clic en Editar.' },
          { pt: 'Vá até a etapa Aprimoramentos e confira cada item.', es: 'Ve a la etapa Mejoras y revisa cada elemento.' }],
        encaminhar: { pt: 'Se a opção de desligar um aprimoramento não aparecer como esperado, confirme o que a tela mostra e siga a Central de Ajuda da Meta.', es: 'Si la opción de desactivar una mejora no aparece como se espera, confirma lo que muestra la pantalla y sigue el Centro de ayuda de Meta.' }
      }
    },
    {
      id: '03', min: 8, status: 'pronta',
      titulo: { pt: 'Posicionamentos e cortes', es: 'Ubicaciones y recortes' },
      antes: { pt: 'A mídia da Marina entrou no anúncio e a prévia mostrou três cartões diferentes.', es: 'El contenido de Marina entró en el anuncio y la vista previa mostró tres tarjetas distintas.' },
      gancho: { pt: '“No Feed ficou lindo, mas no Story tem uma faixa escura!” Vamos entender onde o anúncio aparece e como ajustar o corte.', es: '“En el Feed quedó lindo, ¡pero en el Story hay una franja oscura!” Vamos a entender dónde aparece el anuncio y cómo ajustar el recorte.' },
      objetivo: { pt: 'Entender os posicionamentos Advantage+, ler a prévia por grupo e ajustar o corte da mídia em Editar grupo.', es: 'Entender las ubicaciones Advantage+, leer la vista previa por grupo y ajustar el recorte del contenido en Editar grupo.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Escolhi só o Feed e não vi essa opção em lugar nenhum! Onde fica? 🤔', es: '¡Elegí solo el Feed y no vi esa opción en ningún lado! ¿Dónde queda? 🤔' }],
          ['rafa', { pt: 'Os posicionamentos ficam no conjunto de anúncios. Nesta campanha de Vendas aparece “Advantage+ ativado”: a Meta mostra o anúncio onde há mais chance de resposta. Abaixo está “Posicionamentos excluídos: Nenhum”.', es: 'Las ubicaciones están en el conjunto de anuncios. En esta campaña de Ventas aparece “Advantage+ activado”: Meta muestra el anuncio donde hay más probabilidad de respuesta. Abajo está “Ubicaciones excluidas: Ninguna”.' }],
          ['marina', { pt: 'Então o anúncio aparece em vários lugares, não só no Feed.', es: 'Entonces el anuncio aparece en varios lugares, no solo en el Feed.' }],
          ['rafa', { pt: 'Isso. A tela junta os lugares em três grupos: Feeds e in-stream, Stories e Reels (com resultados da pesquisa e apps), e Coluna da direita. Cada grupo tem o seu “Editar grupo” e o seu corte.', es: 'Eso. La pantalla junta los lugares en tres grupos: Feeds e instream, Stories y Reels (con resultados de búsqueda y apps), y Columna derecha. Cada grupo tiene su “Editar grupo” y su recorte.' }],
          ['pixel', { pt: 'Os cortes recomendados que a tela mostra: Feeds, Quadrado 1:1; Stories e Reels, Vertical em tela cheia 9:16. Para o Original, repare nas faixas escuras na prévia.', es: 'Los recortes recomendados que muestra la pantalla: Feeds, Cuadrado 1:1; Stories y Reels, Vertical en pantalla completa 9:16. Con el Original, fíjate en las franjas oscuras en la vista previa.' }]
        ],
        pontos: [
          { pt: '<b>Posicionamentos</b> ficam no conjunto de anúncios; com Advantage+ a Meta escolhe os lugares.', es: '<b>Las ubicaciones</b> están en el conjunto de anuncios; con Advantage+ Meta elige los lugares.' },
          { pt: '<b>Três grupos</b> na prévia e em Editar grupo, cada um com o seu corte.', es: '<b>Tres grupos</b> en la vista previa y en Editar grupo, cada uno con su recorte.' },
          { pt: '<b>Recomendados:</b> Feeds 1:1 · Stories e Reels 9:16.', es: '<b>Recomendados:</b> Feeds 1:1 · Stories y Reels 9:16.' }
        ],
        notas: { pt: 'Telas vistas de verdade em 16/10/2026 (prévia por grupo, janela Editar grupo com os cortes de Feeds e de Stories, seção Posicionamentos Advantage+). O corte do grupo Coluna da direita e a escolha manual de posicionamentos não foram vistos (a conferir).', es: 'Pantallas vistas de verdad el 16/10/2026 (vista previa por grupo, ventana Editar grupo con los recortes de Feeds y de Stories, sección Ubicaciones Advantage+). El recorte del grupo Columna derecha y la elección manual de ubicaciones no se vieron (por confirmar).' }
      },
      ferramenta: 'qual-corte',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva ao conjunto de anúncios, depois à prévia por grupo, e ajusta o corte de Stories para 9:16.', es: 'En el simulador, el Pixel te lleva al conjunto de anuncios, luego a la vista previa por grupo, y ajusta el recorte de Stories a 9:16.' },
        tour: 'ver-previa', pagina: 'meta-feed.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Meu anúncio aparece com uma faixa escura em cima e embaixo nos Stories. Está quebrado? 😟', es: '¡Mi anuncio aparece con una franja oscura arriba y abajo en los Stories! ¿Está roto? 😟' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Não está quebrado: sua imagem é quadrada e o Story é vertical, então sobram faixas. Na prévia de Stories e Reels, abra Editar grupo e escolha o corte Vertical em tela cheia 9:16. Só o grupo de Stories muda.”', es: '“No está roto: tu imagen es cuadrada y el Story es vertical, por eso sobran franjas. En la vista previa de Stories y Reels, abre Editar grupo y elige el recorte Vertical en pantalla completa 9:16. Solo cambia el grupo de Stories.”' }, fb: { pt: 'Isso! Explicação simples, caminho claro e sem mexer no resto.', es: '¡Eso! Explicación simple, camino claro y sin tocar el resto.' } },
          { certa: false, txt: { pt: '“É um bug conhecido, aguarde a Meta corrigir.”', es: '“Es un error conocido, espera a que Meta lo corrija.”' }, fb: { pt: 'Não é bug: é o corte “Original” da imagem.', es: 'No es un error: es el recorte “Original” de la imagen.' } },
          { certa: false, txt: { pt: '“Troque a imagem por uma horizontal.”', es: '“Cambia la imagen por una horizontal.”' }, fb: { pt: 'Horizontal em tela vertical sobra ainda mais espaço.', es: 'Horizontal en pantalla vertical deja aún más espacio.' } },
          { certa: false, txt: { pt: '“Desmarque os Stories nos posicionamentos para nunca mais ver isso.”', es: '“Desmarca los Stories en las ubicaciones para no volver a verlo.”' }, fb: { pt: 'Isso tira o anúncio de um lugar importante. Primeiro ajuste o corte.', es: 'Eso saca el anuncio de un lugar importante. Primero ajusta el recorte.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Em qual aba da prévia aparece o problema (Feeds, Stories e Reels ou Coluna da direita)?', es: '¿En qué pestaña de la vista previa aparece el problema (Feeds, Stories y Reels o Columna derecha)?' },
          { pt: 'Qual é o tamanho da imagem? (A mídia mostra, por exemplo, 1080 × 1080.)', es: '¿Cuál es el tamaño de la imagen? (El contenido muestra, por ejemplo, 1080 × 1080.)' }],
        conferir: [{ pt: 'Prévia do anúncio, aba do grupo com o problema.', es: 'Vista previa del anuncio, pestaña del grupo con el problema.' },
          { pt: 'Editar grupo › Cortar mídia: qual corte está marcado.', es: 'Editar grupo › Recortar archivo multimedia: qué recorte está marcado.' }],
        frase: { pt: 'Cada lugar onde o anúncio aparece tem um formato preferido. Vamos abrir a prévia do grupo e ajustar o corte da imagem só ali.', es: 'Cada lugar donde aparece el anuncio tiene un formato preferido. Abramos la vista previa del grupo y ajustemos el recorte de la imagen solo ahí.' },
        passos: [{ pt: 'Na prévia, abra a aba do grupo com a faixa escura.', es: 'En la vista previa, abre la pestaña del grupo con la franja oscura.' },
          { pt: 'Clique em Editar grupo, escolha o corte recomendado e Salvar.', es: 'Haz clic en Editar grupo, elige el recorte recomendado y Guardar.' }],
        encaminhar: { pt: 'Se o cliente quiser escolher manualmente onde o anúncio aparece, confira no conjunto de anúncios o que a tela oferece para a campanha dele e siga a Central de Ajuda da Meta.', es: 'Si el cliente quiere elegir manualmente dónde aparece el anuncio, revisa en el conjunto de anuncios lo que ofrece la pantalla para su campaña y sigue el Centro de ayuda de Meta.' }
      }
    },
    {
      id: '04', min: 7, status: 'pronta',
      titulo: { pt: 'Destino e botão', es: 'Destino y botón' },
      antes: { pt: 'O criativo da Marina está bonito em todos os lugares. Falta o clique levar a algum lugar.', es: 'El contenido de Marina se ve lindo en todos los lugares. Falta que el clic lleve a algún lado.' },
      gancho: { pt: '“Preenchi tudo e a tela ainda não deixa publicar! O que está faltando?” Quase sempre é o destino.', es: '“¡Completé todo y la pantalla todavía no deja publicar! ¿Qué falta?” Casi siempre es el destino.' },
      objetivo: { pt: 'Preencher o URL do site, entender o link de exibição e escolher um botão que combine com o clique.', es: 'Completar la URL del sitio web, entender el enlace visible y elegir un botón que combine con el clic.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Na seção Destino tem um campo com asterisco: URL do site. É obrigatório mesmo? 🤔', es: 'En la sección Destino hay un campo con asterisco: URL del sitio web. ¿Es obligatorio de verdad? 🤔' }],
          ['rafa', { pt: 'É: o asterisco avisa. Em Vendas com site, o Destino principal é “Site” e o URL diz para onde a pessoa vai ao clicar. Uma boa prática é usar o endereço da página do produto, e não a página inicial.', es: 'Lo es: el asterisco avisa. En Ventas con sitio web, el Destino principal es “Sitio web” y la URL dice adónde va la persona al hacer clic. Una buena práctica es usar la dirección de la página del producto, y no la página de inicio.' }],
          ['marina', { pt: 'E “Usar um link de exibição”?', es: '¿Y “Usar un enlace visible”?' }],
          ['rafa', { pt: 'Serve para mostrar um endereço mais limpo no anúncio. Muda só o que aparece escrito; o clique continua indo para o URL. E precisa mostrar o mesmo site.', es: 'Sirve para mostrar una dirección más limpia en el anuncio. Cambia solo lo que aparece escrito; el clic sigue yendo a la URL. Y debe mostrar el mismo sitio.' }],
          ['pixel', { pt: 'O botão (chamada para ação) vem como “Ver detalhes”. A tela diz que ele gera um CVR até 2,3% maior que “Saiba mais”. Mas o botão tem que combinar com o que o clique entrega.', es: 'El botón (llamada a la acción) viene como “Ver detalles”. La pantalla dice que genera un CVR hasta un 2,3% mayor que “Más información”. Pero el botón tiene que combinar con lo que entrega el clic.' }]
        ],
        pontos: [
          { pt: '<b>URL do site:</b> obrigatório (asterisco), começando com http:// ou https://.', es: '<b>URL del sitio web:</b> obligatoria (asterisco), empezando con http:// o https://.' },
          { pt: '<b>Link de exibição:</b> só muda o texto mostrado, não o destino.', es: '<b>Enlace visible:</b> solo cambia el texto mostrado, no el destino.' },
          { pt: '<b>Botão:</b> Ver detalhes, Saiba mais, Comprar agora, Cadastre-se, Enviar mensagem, Ligar agora ou Nenhum botão.', es: '<b>Botón:</b> Ver detalles, Más información, Comprar ahora, Registrarte, Enviar mensaje, Llamar ahora o Sin botón.' }
        ],
        notas: { pt: 'Telas vistas de verdade em 16/10/2026 (Destino com URL obrigatório, link de exibição, Destinos personalizados e o texto da chamada para ação). A lista completa de botões foi vista no Turbinar; no Gerenciador ela fica no menu da chamada para ação (a conferir). O texto exato do erro quando o URL falta não foi visto (a conferir).', es: 'Pantallas vistas de verdad el 16/10/2026 (Destino con URL obligatoria, enlace visible, Destinos personalizados y el texto de la llamada a la acción). La lista completa de botones se vio en Promocionar; en el Administrador está en el menú de la llamada a la acción (por confirmar). El texto exacto del error cuando falta la URL no se vio (por confirmar).' }
      },
      ferramenta: 'destino-e-botao',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para preencher o URL, ver o link de exibição e trocar o botão para “Comprar agora”.', es: 'En el simulador, el Pixel te guía para completar la URL, ver el enlace visible y cambiar el botón a “Comprar ahora”.' },
        tour: 'destino-botao', pagina: 'meta-feed.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Quando clico no botão do meu anúncio ele leva à página inicial da loja, e não à caneca que eu anunciei! 😠', es: '¡Cuando hago clic en el botón de mi anuncio me lleva a la página de inicio de la tienda, y no a la taza que anuncié! 😠' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“O botão leva ao que está no campo URL do site, na seção Destino. Se estiver o endereço da página inicial, troque pelo endereço da página da caneca, comece com https:// e confira de novo na prévia.”', es: '“El botón lleva a lo que está en el campo URL del sitio web, en la sección Destino. Si está la dirección de la página de inicio, cámbiala por la dirección de la página de la taza, empieza con https:// y revisa de nuevo en la vista previa.”' }, fb: { pt: 'Isso! O destino é o URL: basta corrigi-lo.', es: '¡Eso! El destino es la URL: basta corregirla.' } },
          { certa: false, txt: { pt: '“Troque o botão para ‘Saiba mais’.”', es: '“Cambia el botón a ‘Más información’.”' }, fb: { pt: 'O texto do botão não muda para onde ele leva.', es: 'El texto del botón no cambia adónde lleva.' } },
          { certa: false, txt: { pt: '“Use um link de exibição com o endereço da caneca.”', es: '“Usa un enlace visible con la dirección de la taza.”' }, fb: { pt: 'O link de exibição só muda o texto mostrado; o clique continua indo para o URL.', es: 'El enlace visible solo cambia el texto mostrado; el clic sigue yendo a la URL.' } },
          { certa: false, txt: { pt: '“Escreva o endereço da caneca no texto principal.”', es: '“Escribe la dirección de la taza en el texto principal.”' }, fb: { pt: 'O texto principal não define o destino do clique.', es: 'El texto principal no define el destino del clic.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual URL está no campo “URL do site”? É a página do produto ou a inicial?', es: '¿Qué URL está en el campo “URL del sitio web”? ¿Es la página del producto o la de inicio?' },
          { pt: 'Foi marcado “Usar um link de exibição”? O que está escrito nele?', es: '¿Se marcó “Usar un enlace visible”? ¿Qué está escrito en él?' },
          { pt: 'Qual botão (chamada para ação) está escolhido?', es: '¿Qué botón (llamada a la acción) está elegido?' }],
        conferir: [{ pt: 'Destino › URL do site (começa com https://).', es: 'Destino › URL del sitio web (empieza con https://).' },
          { pt: 'Prévia: o botão mostrado é o escolhido.', es: 'Vista previa: el botón mostrado es el elegido.' }],
        frase: { pt: 'O lugar para onde o clique leva é o URL do site, no Destino. O link de exibição só muda o texto que aparece. Vamos conferir o URL e o botão na prévia.', es: 'El lugar adonde lleva el clic es la URL del sitio web, en Destino. El enlace visible solo cambia el texto que aparece. Revisemos la URL y el botón en la vista previa.' },
        passos: [{ pt: 'No anúncio, abra a seção Destino.', es: 'En el anuncio, abre la sección Destino.' },
          { pt: 'Corrija o URL do site e confira o botão na prévia.', es: 'Corrige la URL del sitio web y revisa el botón en la vista previa.' }],
        encaminhar: { pt: 'Se o URL está certo e mesmo assim a página não abre ou não é a esperada, o problema é no site do cliente: peça que ele confira a página.', es: 'Si la URL está correcta y aun así la página no abre o no es la esperada, el problema está en el sitio del cliente: pídele que revise la página.' }
      }
    },
    {
      id: '05', min: 8, status: 'pronta',
      titulo: { pt: 'Meu anúncio não publica ou ficou estranho!', es: '¡Mi anuncio no se publica o quedó raro!' },
      antes: { pt: 'A Marina já montou, ajustou os cortes e preencheu o destino. Mas algo ainda não está certo.', es: 'Marina ya armó, ajustó los recortes y completó el destino. Pero algo todavía no está bien.' },
      gancho: { pt: '“Não publica, e o Story ficou estranho!” Vamos investigar como um detetive: o que falta, e o que está diferente do esperado.', es: '“¡No se publica, y el Story quedó raro!” Vamos a investigar como un detective: qué falta, y qué es diferente de lo esperado.' },
      objetivo: { pt: 'Resolver os dois casos mais comuns do criativo: o que falta para publicar (destino, mídia, Página) e o que ficou diferente do esperado (corte, aprimoramentos).', es: 'Resolver los dos casos más comunes del contenido: qué falta para publicar (destino, contenido, Página) y qué quedó diferente de lo esperado (recorte, mejoras).' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Cliquei em Publicar e a tela me barrou. O que ela quer? 😩', es: 'Hice clic en Publicar y la pantalla me frenó. ¿Qué quiere? 😩' }],
          ['rafa', { pt: 'Procure o que está obrigatório e vazio: a Página do Facebook, a mídia (“Especifique a mídia”) e o URL do site (campo com asterisco).', es: 'Busca lo que es obligatorio y está vacío: la Página de Facebook, el contenido multimedia (“Especifica el contenido multimedia”) y la URL del sitio web (campo con asterisco).' }],
          ['marina', { pt: 'Preenchi e publiquei. Mas o anúncio ficou estranho nos Stories e tem música!', es: 'Completé y publiqué. ¡Pero el anuncio quedó raro en los Stories y tiene música!' }],
          ['rafa', { pt: 'São dois casos diferentes. Faixas escuras: é o corte do grupo de Stories, ajuste em Editar grupo. Música ou animação: confira os Aprimoramentos, que vêm ativados por padrão.', es: 'Son dos casos distintos. Franjas oscuras: es el recorte del grupo de Stories, ajusta en Editar grupo. Música o animación: revisa las Mejoras, que vienen activadas de forma predeterminada.' }],
          ['pixel', { pt: 'E se o anúncio for recusado por política? Isso é outro assunto: registre o sintoma, siga a Central de Ajuda da Meta e encaminhe, sem prometer aprovação.', es: '¿Y si el anuncio es rechazado por política? Eso es otro tema: registra el síntoma, sigue el Centro de ayuda de Meta y deriva, sin prometer aprobación.' }]
        ],
        pontos: [
          { pt: '<b>Não publica:</b> procure o obrigatório vazio (Página, mídia, URL do site).', es: '<b>No se publica:</b> busca lo obligatorio vacío (Página, contenido multimedia, URL del sitio web).' },
          { pt: '<b>Ficou estranho:</b> veja a prévia de cada grupo e ajuste o corte; confira os aprimoramentos.', es: '<b>Quedó raro:</b> mira la vista previa de cada grupo y ajusta el recorte; revisa las mejoras.' },
          { pt: '<b>Recusa por política:</b> registrar o sintoma e encaminhar, sem prometer aprovação.', es: '<b>Rechazo por política:</b> registrar el síntoma y derivar, sin prometer aprobación.' }
        ],
        notas: { pt: 'Telas do criativo vistas de verdade em 16/10/2026. A lista de erros ao publicar é do simulador, resumindo o que a tela real cobra (o texto exato dos erros não foi visto: a conferir). Motivos de recusa por política não fazem parte deste treinamento.', es: 'Pantallas del contenido vistas de verdad el 16/10/2026. La lista de errores al publicar es del simulador, resumiendo lo que cobra la pantalla real (el texto exacto de los errores no se vio: por confirmar). Los motivos de rechazo por política no forman parte de esta capacitación.' }
      },
      ferramenta: 'anuncio-esquisito',
      praticar: {
        texto: { pt: 'No simulador, o anúncio da Marina não publica e o Story está com faixas. O Pixel te guia até resolver os dois.', es: 'En el simulador, el anuncio de Marina no se publica y el Story tiene franjas. El Pixel te guía hasta resolver los dos.' },
        tour: 'resolver-criativo', pagina: 'meta-feed.html?problemas=1'
      },
      atender: {
        cena: { pt: 'Meu anúncio não publica e eu não sei por quê. A tela só marca uns campos em vermelho! 😖', es: '¡Mi anuncio no se publica y no sé por qué! ¡La pantalla solo marca unos campos en rojo! 😖' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Os campos em vermelho são o que falta. Vamos olhar um por um: a Página do Facebook, a mídia e o URL do site (o que tem asterisco é obrigatório). Preencha o que estiver vazio e tente Publicar de novo.”', es: '“Los campos en rojo son lo que falta. Miremos uno por uno: la Página de Facebook, el contenido multimedia y la URL del sitio web (lo que tiene asterisco es obligatorio). Completa lo que esté vacío e intenta Publicar de nuevo.”' }, fb: { pt: 'Isso! Transformou o vermelho em uma lista simples de tarefas.', es: '¡Eso! Convertiste el rojo en una lista simple de tareas.' } },
          { certa: false, txt: { pt: '“É um problema da conta, abra um chamado.”', es: '“Es un problema de la cuenta, abre un caso.”' }, fb: { pt: 'Antes de abrir qualquer chamado, confira o que está vazio e obrigatório.', es: 'Antes de abrir cualquier caso, revisa lo que está vacío y es obligatorio.' } },
          { certa: false, txt: { pt: '“Crie o anúncio de novo do zero.”', es: '“Crea el anuncio de nuevo desde cero.”' }, fb: { pt: 'Exagero: basta completar o que falta.', es: 'Exagerado: basta completar lo que falta.' } },
          { certa: false, txt: { pt: '“Tente de novo mais tarde, às vezes passa.”', es: '“Intenta de nuevo más tarde, a veces pasa.”' }, fb: { pt: 'Não passa sozinho: um campo obrigatório vazio continua vazio.', es: 'No pasa solo: un campo obligatorio vacío sigue vacío.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O que a tela mostra em vermelho ou como aviso? Pode me enviar um print?', es: '¿Qué muestra la pantalla en rojo o como aviso? ¿Puedes enviarme una captura?' },
          { pt: 'Quais campos obrigatórios estão vazios: Página, mídia, URL do site?', es: '¿Qué campos obligatorios están vacíos: Página, contenido multimedia, URL del sitio web?' },
          { pt: 'O problema é para publicar, ou é como o anúncio ficou depois (corte, música, texto)?', es: '¿El problema es para publicar, o es cómo quedó el anuncio después (recorte, música, texto)?' }],
        conferir: [{ pt: 'Identidade (Página), Mídia, Destino (URL).', es: 'Identidad (Página), contenido multimedia, Destino (URL).' },
          { pt: 'Prévia por grupo e Aprimoramentos.', es: 'Vista previa por grupo y Mejoras.' }],
        frase: { pt: 'Vamos olhar o que falta para publicar: a Página, a mídia e o URL do site são obrigatórios. Se o anúncio já publicou e ficou diferente do esperado, vemos o corte e os aprimoramentos.', es: 'Veamos qué falta para publicar: la Página, el contenido multimedia y la URL del sitio web son obligatorios. Si el anuncio ya se publicó y quedó diferente de lo esperado, vemos el recorte y las mejoras.' },
        passos: [{ pt: 'Complete Página, mídia e URL do site no nível do anúncio.', es: 'Completa Página, contenido multimedia y URL del sitio web en el nivel del anuncio.' },
          { pt: 'Confira a prévia de cada grupo e ajuste o corte onde precisar.', es: 'Revisa la vista previa de cada grupo y ajusta el recorte donde haga falta.' }],
        encaminhar: { pt: 'Se o anúncio foi recusado por política ou a conta está restrita, confirme o sintoma e siga a Central de Ajuda da Meta; esse tema é tratado por outra área. Nunca prometa aprovação.', es: 'Si el anuncio fue rechazado por política o la cuenta está restringida, confirma el síntoma y sigue el Centro de ayuda de Meta; ese tema lo trata otra área. Nunca prometas aprobación.' }
      }
    }
  ],
  regras: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'Regras automatizadas: para que servem', es: 'Reglas automáticas: para qué sirven' },
      antes: { pt: 'A Marina já posta, anuncia e responde clientes. Agora ela passa o dia olhando os anúncios.', es: 'Marina ya publica, anuncia y responde clientes. Ahora se pasa el día mirando los anuncios.' },
      gancho: { pt: '“Queria que o anúncio fraco parasse sozinho, sem eu ficar olhando.” Existe: são as regras automatizadas.', es: '“Quería que el anuncio flojo se detuviera solo, sin que yo esté mirando.” Existe: son las reglas automáticas.' },
      objetivo: { pt: 'Saber o que é uma regra automatizada, onde ela mora e onde criá-la conforme o alcance (algumas campanhas ou todas).', es: 'Saber qué es una regla automática, dónde vive y dónde crearla según el alcance (algunas campañas o todas).' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Dá para o Gerenciador pausar sozinho o anúncio que só gasta? 🤔', es: '¿Se puede hacer que el Administrador pause solo el anuncio que solo gasta? 🤔' }],
          ['rafa', { pt: 'Dá, com uma regra automatizada: ela faz uma mudança sozinha, ou só avisa, quando campanhas, conjuntos de anúncios ou anúncios atendem às condições que você define.', es: 'Se puede, con una regla automática: hace un cambio sola, o solo avisa, cuando campañas, conjuntos de anuncios o anuncios cumplen las condiciones que defines.' }],
          ['marina', { pt: 'Onde ela fica?', es: '¿Dónde está?' }],
          ['rafa', { pt: 'Em Todas as ferramentas › Regras automatizadas. Lá tem a tabela das regras e o botão Criar regra. Aparece também uma faixa avisando que as regras para recomendações agora se chamam ajustes automáticos.', es: 'En Más herramientas › Reglas automáticas. Ahí está la tabla de reglas y el botón Crear regla. También aparece una franja avisando que las reglas de las recomendaciones ahora se llaman ajustes automáticos.' }],
          ['pixel', { pt: 'Dois jeitos de criar: na tabela de campanhas, marcando o que quer (a regra vale só para aquilo), ou na página de regras (vale para todas as campanhas, conjuntos ou anúncios). Há também modelos, como reduzir sobreposição no leilão.', es: 'Dos formas de crear: en la tabla de campañas, marcando lo que quieres (la regla vale solo para eso), o en la página de reglas (vale para todas las campañas, conjuntos o anuncios). También hay plantillas, como reducir la superposición en la subasta.' }]
        ],
        pontos: [
          { pt: '<b>Regra automatizada:</b> muda algo ou avisa quando uma condição acontece.', es: '<b>Regla automática:</b> cambia algo o avisa cuando se cumple una condición.' },
          { pt: '<b>Onde:</b> Todas as ferramentas › Regras automatizadas (tabela e Criar regra).', es: '<b>Dónde:</b> Más herramientas › Reglas automáticas (tabla y Crear regla).' },
          { pt: '<b>Alcance:</b> pela tabela de campanhas, só o que foi marcado; pela página de regras, todos.', es: '<b>Alcance:</b> por la tabla de campañas, solo lo que se marcó; por la página de reglas, todos.' }
        ],
        notas: { pt: 'Página Regras automatizadas vista de verdade em 16/10/2026 em português e espanhol (faixa de ajustes automáticos, Criar regra, colunas da tabela e tela vazia). Os dois caminhos de criação e os modelos vêm da Central de Ajuda da Meta, “Como criar uma regra automatizada”, lida em 16/10/2026. A janela Criar regra não abriu em espanhol (a conferir).', es: 'Página Reglas automáticas vista de verdad el 16/10/2026 en portugués y español (franja de ajustes automáticos, Crear regla, columnas de la tabla y pantalla vacía). Las dos formas de creación y las plantillas vienen del Centro de ayuda de Meta, “Cómo crear una regla automática”, leída el 16/10/2026. La ventana Crear regla no abrió en español (por confirmar).' }
      },
      ferramenta: 'regra-ou-ajuste',
      atender: {
        cena: { pt: 'Quero que uma regra pause só o conjunto “Camiseta Montanha”, não os outros. Criei na página de regras e ela pegou todos! 😠', es: '¡Quiero que una regla pause solo el conjunto “Camiseta Montanha”, no los otros. La creé en la página de reglas y alcanzó a todos! 😠' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Na página de regras, o padrão é aplicar a todos os conjuntos ativos. Para valer só para um, crie a regra na tabela de campanhas: marque o conjunto e use Mais › Criar nova regra.”', es: '“En la página de reglas, el valor predeterminado es aplicar a todos los conjuntos activos. Para que valga solo para uno, crea la regla en la tabla de campañas: marca el conjunto y usa Más › Crear nueva regla.”' }, fb: { pt: 'Isso! Você achou a diferença entre os dois caminhos.', es: '¡Eso! Encontraste la diferencia entre los dos caminos.' } },
          { certa: false, txt: { pt: '“Regras sempre valem para tudo, não tem como limitar.”', es: '“Las reglas siempre valen para todo, no hay cómo limitar.”' }, fb: { pt: 'Tem: criando pela tabela e marcando o conjunto.', es: 'Sí hay: creándola por la tabla y marcando el conjunto.' } },
          { certa: false, txt: { pt: '“Apague a conta de anúncios e comece de novo.”', es: '“Elimina la cuenta publicitaria y empieza de nuevo.”' }, fb: { pt: 'Exagero: é só recriar a regra pelo caminho certo.', es: 'Exagerado: solo hay que recrear la regla por el camino correcto.' } },
          { certa: false, txt: { pt: '“Ligue os ajustes automáticos, eles resolvem.”', es: '“Activa los ajustes automáticos, ellos lo resuelven.”' }, fb: { pt: 'Ajustes automáticos são as antigas regras de recomendações; não é esse o caso.', es: 'Los ajustes automáticos son las antiguas reglas de recomendaciones; no es este el caso.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'A regra deve valer para tudo ou só para alguns conjuntos, campanhas ou anúncios?', es: '¿La regla debe valer para todo o solo para algunos conjuntos, campañas o anuncios?' },
          { pt: 'Onde a regra foi criada: na tabela de campanhas ou na página Regras automatizadas?', es: '¿Dónde se creó la regla: en la tabla de campañas o en la página Reglas automáticas?' }],
        conferir: [{ pt: 'Regras automatizadas › coluna “Aplicada a”.', es: 'Reglas automáticas › columna “Se aplica a”.' },
          { pt: 'Tabela de campanhas: Mais › Criar nova regra.', es: 'Tabla de campañas: Más › Crear nueva regla.' }],
        frase: { pt: 'Se a regra é criada pela página de regras, ela vale para todos. Para valer só para alguns itens, crie pela tabela de campanhas marcando o que quer.', es: 'Si la regla se crea por la página de reglas, vale para todos. Para que valga solo para algunos elementos, créala por la tabla de campañas marcando lo que quieres.' },
        passos: [{ pt: 'No Gerenciador, marque o conjunto na tabela.', es: 'En el Administrador, marca el conjunto en la tabla.' },
          { pt: 'Mais › Criar nova regra e configure.', es: 'Más › Crear nueva regla y configura.' }],
        encaminhar: { pt: 'Se o cliente quer um modelo pronto (como reduzir sobreposição no leilão), mostre a escolha “Regra personalizada” ou os modelos na janela e siga a Central de Ajuda da Meta.', es: 'Si el cliente quiere una plantilla lista (como reducir la superposición en la subasta), muestra la opción “Regla personalizada” o las plantillas en la ventana y sigue el Centro de ayuda de Meta.' }
      }
    },
    {
      id: '02', min: 9, status: 'pronta',
      titulo: { pt: 'Criar a primeira regra', es: 'Crear la primera regla' },
      antes: { pt: 'A Marina entendeu: regra = “se isto, então aquilo”.', es: 'Marina entendió: regla = “si esto, entonces aquello”.' },
      gancho: { pt: '“Cliquei em Criar regra e apareceu um formulário enorme!” Vamos preencher peça por peça.', es: '“¡Hice clic en Crear regla y apareció un formulario enorme!” Vamos a completarlo pieza por pieza.' },
      objetivo: { pt: 'Preencher a janela “Crie uma regra personalizada”: nome, onde aplica, ação, condição, intervalo e programação.', es: 'Completar la ventana “Crea una regla personalizada”: nombre, dónde se aplica, acción, condición, intervalo y programación.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'O formulário tem Nome, Aplicar regra a, Ação, Condições, Intervalo, Programação, Notificação… por onde começo? 🤔', es: 'El formulario tiene Nombre, Aplicar regla a, Acción, Condiciones, Intervalo, Programación, Notificación… ¿por dónde empiezo? 🤔' }],
          ['rafa', { pt: 'Pelo nome: algo que explique a regra. Depois o “Aplicar regra a”: o padrão é “Todos os conjuntos de anúncios ativos”. Depois a Ação: o que a regra faz.', es: 'Por el nombre: algo que explique la regla. Después el “Aplicar regla a”: el valor predeterminado es “Todos los conjuntos de anuncios activos”. Después la Acción: lo que hace la regla.' }],
          ['marina', { pt: 'E a condição?', es: '¿Y la condición?' }],
          ['rafa', { pt: 'É o “se”: uma métrica (como Gasto), um operador (é maior que) e um valor. Todas as condições precisam ser verdadeiras ao mesmo tempo. A tela avisa que algumas métricas atrasam e sugere buffers para evitar falsos positivos.', es: 'Es el “si”: una métrica (como Gasto), un operador (es mayor que) y un valor. Todas las condiciones deben cumplirse al mismo tiempo. La pantalla avisa que algunas métricas demoran y sugiere márgenes para evitar falsos positivos.' }],
          ['pixel', { pt: 'Por fim: o Intervalo de tempo (a quantos dias de dados a regra olha), a Programação (de quanto em quanto tempo ela confere) e a Notificação. Clique em Criar e a regra fica ativa.', es: 'Por último: el Intervalo de tiempo (a cuántos días de datos mira la regla), la Programación (cada cuánto tiempo revisa) y la Notificación. Haz clic en Crear y la regla queda activa.' }]
        ],
        pontos: [
          { pt: '<b>Ação</b> = o que a regra faz. <b>Condição</b> = quando faz (métrica, operador, valor).', es: '<b>Acción</b> = lo que hace la regla. <b>Condición</b> = cuándo lo hace (métrica, operador, valor).' },
          { pt: '<b>Intervalo</b> = quantos dias de dados. <b>Programação</b> = com que frequência confere.', es: '<b>Intervalo</b> = cuántos días de datos. <b>Programación</b> = con qué frecuencia revisa.' },
          { pt: '<b>Primeira regra:</b> prefira só avisar (“Enviar apenas uma notificação”).', es: '<b>Primera regla:</b> prefiere solo avisar (“Enviar solo una notificación”).' }
        ],
        notas: { pt: 'Janela Criar regra vista de verdade em 16/10/2026 em português (nome, Aplicar regra a, Ação, Condições com o aviso de buffers, Intervalo de tempo com padrão de 37 meses, Programação Continuamente/Diariamente/Personalizado, Notificação, Assinante). A lista exata de ações e de métricas não foi vista (a conferir); no simulador há quatro ações e três métricas como exemplo.', es: 'Ventana Crear regla vista de verdad el 16/10/2026 en portugués (nombre, Aplicar regla a, Acción, Condiciones con el aviso de márgenes, Intervalo de tiempo con valor predeterminado de 37 meses, Programación Continuamente/Diariamente/Personalizado, Notificación, Suscriptor). La lista exacta de acciones y de métricas no se vio (por confirmar); en el simulador hay cuatro acciones y tres métricas como ejemplo.' }
      },
      ferramenta: 'ler-regra',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para criar uma regra de aviso: nome, ação, condição de gasto, intervalo e programação.', es: 'En el simulador, el Pixel te guía para crear una regla de aviso: nombre, acción, condición de gasto, intervalo y programación.' },
        tour: 'criar-regra', pagina: 'meta-regras.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Preenchi tudo mas o botão Criar não funciona! Aparece um aviso vermelho que não entendo. 😩', es: '¡Completé todo pero el botón Crear no funciona! ¡Aparece un aviso rojo que no entiendo! 😩' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Confira o que está em vermelho: costuma ser o nome vazio, a ação sem escolher (“Selecione uma opção”) ou o valor de alguma condição em branco. Preencha esses três e clique em Criar de novo.”', es: '“Revisa lo que está en rojo: suele ser el nombre vacío, la acción sin elegir (“Selecciona una opción”) o el valor de alguna condición en blanco. Completa esos tres y haz clic en Crear de nuevo.”' }, fb: { pt: 'Isso! Lista curta de conferência.', es: '¡Eso! Lista corta de revisión.' } },
          { certa: false, txt: { pt: '“Atualize a página e refaça tudo.”', es: '“Actualiza la página y rehaz todo.”' }, fb: { pt: 'Perde o que foi feito, e o problema continua.', es: 'Se pierde lo que se hizo, y el problema continúa.' } },
          { certa: false, txt: { pt: '“Regras só funcionam em contas antigas.”', es: '“Las reglas solo funcionan en cuentas antiguas.”' }, fb: { pt: 'Não é isso: é campo obrigatório vazio.', es: 'No es eso: es un campo obligatorio vacío.' } },
          { certa: false, txt: { pt: '“Use outro navegador.”', es: '“Usa otro navegador.”' }, fb: { pt: 'Antes de trocar de navegador, confira os campos.', es: 'Antes de cambiar de navegador, revisa los campos.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O nome da regra está preenchido? A Ação foi escolhida?', es: '¿El nombre de la regla está completo? ¿Se eligió la Acción?' },
          { pt: 'Cada condição tem métrica, operador e valor?', es: '¿Cada condición tiene métrica, operador y valor?' }],
        conferir: [{ pt: 'Janela “Crie uma regra personalizada”: campos em vermelho.', es: 'Ventana “Crea una regla personalizada”: campos en rojo.' },
          { pt: 'Intervalo de tempo e Programação.', es: 'Intervalo de tiempo y Programación.' }],
        frase: { pt: 'Vamos olhar o que ficou em vermelho: nome, ação e o valor de cada condição precisam estar preenchidos. Depois clique em Criar.', es: 'Veamos qué quedó en rojo: nombre, acción y el valor de cada condición deben estar completos. Después haz clic en Crear.' },
        passos: [{ pt: 'Preencha o nome, escolha a ação e digite o valor.', es: 'Completa el nombre, elige la acción y escribe el valor.' },
          { pt: 'Clique em Criar e confira a regra na tabela.', es: 'Haz clic en Crear y revisa la regla en la tabla.' }],
        encaminhar: { pt: 'Se a regra não pode ser criada mesmo com tudo preenchido, confirme o texto que a tela mostra e siga a Central de Ajuda da Meta.', es: 'Si la regla no se puede crear aun con todo completo, confirma el texto que muestra la pantalla y sigue el Centro de ayuda de Meta.' }
      }
    },
    {
      id: '03', min: 8, status: 'pronta',
      titulo: { pt: 'Regra segura: intervalo e condições', es: 'Regla segura: intervalo y condiciones' },
      antes: { pt: 'A Marina criou uma regra de aviso. Agora quer uma que desative.', es: 'Marina creó una regla de aviso. Ahora quiere una que desactive.' },
      gancho: { pt: '“Se eu desativar tudo que gasta mais de R$ 20, resolvo!” Cuidado: é assim que se desativa o anúncio que vende.', es: '“¡Si desactivo todo lo que gasta más de R$ 20, resuelvo!” Cuidado: así se desactiva el anuncio que vende.' },
      objetivo: { pt: 'Entender o intervalo de tempo e o falso positivo, e montar uma regra que só atinge quem gastou e não teve resultado.', es: 'Entender el intervalo de tiempo y el falso positivo, y armar una regla que solo alcance a quien gastó y no tuvo resultado.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Quero desativar conjuntos que gastam mais de R$ 20. Qual o problema? 🤔', es: 'Quiero desactivar conjuntos que gastan más de R$ 20. ¿Cuál es el problema? 🤔' }],
          ['rafa', { pt: 'O intervalo de tempo. O padrão da tela é “37 meses (máximo)”: a regra soma o gasto da vida inteira do conjunto. Quase todo conjunto antigo passa de R$ 20, até os que vendem bem.', es: 'El intervalo de tiempo. El valor predeterminado de la pantalla es “37 meses (máximo)”: la regla suma el gasto de toda la vida del conjunto. Casi todo conjunto antiguo pasa de R$ 20, incluso los que venden bien.' }],
          ['marina', { pt: 'Então o que eu faço?', es: '¿Entonces qué hago?' }],
          ['rafa', { pt: 'Duas coisas: encurte o intervalo (por exemplo, Últimos 7 dias) e some uma segunda condição: Resultados é igual a 0. Assim só entra quem gastou e não trouxe nada na semana.', es: 'Dos cosas: acorta el intervalo (por ejemplo, Últimos 7 días) y suma una segunda condición: Resultados es igual a 0. Así solo entra quien gastó y no trajo nada en la semana.' }],
          ['pixel', { pt: 'A tela avisa: algumas métricas atrasam e oscilam por horas, e dá a dica de adicionar buffers às condições para evitar falsos positivos.', es: 'La pantalla avisa: algunas métricas demoran y fluctúan durante horas, y da la pista de agregar márgenes a las condiciones para evitar falsos positivos.' }]
        ],
        pontos: [
          { pt: '<b>Intervalo:</b> o padrão é 37 meses (máximo); para o dia a dia, use poucos dias.', es: '<b>Intervalo:</b> el valor predeterminado es 37 meses (máximo); para el día a día, usa pocos días.' },
          { pt: '<b>Falso positivo:</b> a regra pega quem não devia.', es: '<b>Falso positivo:</b> la regla alcanza a quien no debía.' },
          { pt: '<b>Mais de uma condição</b> (todas precisam ser verdadeiras) deixa a regra mais precisa.', es: '<b>Más de una condición</b> (todas deben cumplirse) deja la regla más precisa.' }
        ],
        notas: { pt: 'Padrão “37 meses (máximo)”, aviso sobre métricas que atrasam e buffers, e “há correspondência em todos os itens” vistos de verdade em 16/10/2026. Os números de gasto e resultados e a caixa “Quem seria atingido hoje” são só do simulador (a tela real não mostra essa prévia).', es: 'Valor predeterminado “37 meses (máximo)”, aviso sobre métricas que demoran y márgenes, y “hay coincidencia en todos los elementos” vistos de verdad el 16/10/2026. Los números de gasto y resultados y la caja “Quién sería alcanzado hoy” son solo del simulador (la pantalla real no muestra esa vista previa).' }
      },
      ferramenta: 'falso-positivo',
      praticar: {
        texto: { pt: 'No simulador, uma regra que desativa pega a “Caneca azul”, que vende bem. O Pixel te guia para encurtar o intervalo e somar a condição de resultado.', es: 'En el simulador, una regla que desactiva alcanza la “Caneca azul”, que vende bien. El Pixel te guía para acortar el intervalo y sumar la condición de resultado.' },
        tour: 'evitar-falso-positivo', pagina: 'meta-regras.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Criei uma regra para desativar quem gasta mais de R$ 20 e ela desativou o meu melhor anúncio! Que absurdo! 😡', es: '¡Creé una regla para desactivar a quien gasta más de R$ 20 y desactivó mi mejor anuncio! ¡Qué absurdo! 😡' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Entendo o susto. O intervalo da regra estava em 37 meses, então ela somou o gasto de toda a vida do anúncio. Vamos editar: intervalo de 7 dias e mais uma condição, Resultados igual a 0. E reativamos o anúncio bom.”', es: '“Entiendo el susto. El intervalo de la regla estaba en 37 meses, así que sumó el gasto de toda la vida del anuncio. Editemos: intervalo de 7 días y una condición más, Resultados igual a 0. Y reactivamos el anuncio bueno.”' }, fb: { pt: 'Isso! Causa, correção e reativação.', es: '¡Eso! Causa, corrección y reactivación.' } },
          { certa: false, txt: { pt: '“Foi erro da Meta, ela não deveria ter desativado.”', es: '“Fue un error de Meta, no debería haber desactivado.”' }, fb: { pt: 'A regra fez o que foi configurado: a configuração é que estava larga.', es: 'La regla hizo lo que se configuró: lo que estaba amplio era la configuración.' } },
          { certa: false, txt: { pt: '“Nunca mais use regras.”', es: '“No uses reglas nunca más.”' }, fb: { pt: 'Regras ajudam: só precisam ser bem configuradas.', es: 'Las reglas ayudan: solo necesitan estar bien configuradas.' } },
          { certa: false, txt: { pt: '“Aumente o valor da condição para 1000 e pronto.”', es: '“Sube el valor de la condición a 1000 y listo.”' }, fb: { pt: 'Isso esconde o problema; o certo é encurtar o intervalo.', es: 'Eso esconde el problema; lo correcto es acortar el intervalo.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual é o intervalo de tempo da regra? E quais são as condições?', es: '¿Cuál es el intervalo de tiempo de la regla? ¿Y cuáles son las condiciones?' },
          { pt: 'A regra olha o gasto de quanto tempo?', es: '¿La regla mira el gasto de cuánto tiempo?' }],
        conferir: [{ pt: 'Regras automatizadas › Ação e condição (intervalo ao lado).', es: 'Reglas automáticas › Acción y condición (intervalo al lado).' },
          { pt: 'Editar › Intervalo de tempo e Condições.', es: 'Editar › Intervalo de tiempo y Condiciones.' }],
        frase: { pt: 'Quando o intervalo é longo, como 37 meses, a regra soma o gasto da vida inteira e pode atingir quem vende bem. Encurte o intervalo e some uma condição de resultado.', es: 'Cuando el intervalo es largo, como 37 meses, la regla suma el gasto de toda la vida y puede alcanzar a quien vende bien. Acorta el intervalo y suma una condición de resultado.' },
        passos: [{ pt: 'Edite a regra: intervalo para poucos dias.', es: 'Edita la regla: intervalo a pocos días.' },
          { pt: 'Adicione a condição “Resultados é igual a 0” e salve.', es: 'Agrega la condición “Resultados es igual a 0” y guarda.' }],
        encaminhar: { pt: 'Se o cliente perdeu vendas por causa da regra, reative o que for preciso e explique o ajuste; reembolsos e valores não são tratados aqui.', es: 'Si el cliente perdió ventas por culpa de la regla, reactiva lo que haga falta y explica el ajuste; los reembolsos y valores no se tratan aquí.' }
      }
    },
    {
      id: '04', min: 7, status: 'pronta',
      titulo: { pt: 'Acompanhar, editar e excluir', es: 'Seguir, editar y eliminar' },
      antes: { pt: 'A regra da Marina está criada e ativa.', es: 'La regla de Marina está creada y activa.' },
      gancho: { pt: '“Criei, e agora? Como sei se a regra fez alguma coisa, e se eu quiser mudar?” Vamos acompanhar.', es: '“Creé, ¿y ahora? ¿Cómo sé si la regla hizo algo, y si quiero cambiarla?” Vamos a hacer el seguimiento.' },
      objetivo: { pt: 'Ler a tabela de regras, ver o que a regra fez, e saber o que dá e o que não dá para editar.', es: 'Leer la tabla de reglas, ver qué hizo la regla, y saber qué se puede y qué no se puede editar.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Onde vejo se minha regra já fez alguma coisa? 🤔', es: '¿Dónde veo si mi regla ya hizo algo? 🤔' }],
          ['rafa', { pt: 'Na tabela de Regras automatizadas. Cada regra é uma linha: Nome, Status, Número de identificação, Aplicada a, Ação e condição, Resultados da regra, Quando a regra é executada, Criada por e Ações.', es: 'En la tabla de Reglas automáticas. Cada regla es una fila: Nombre, Estado, Identificador, Se aplica a, Acción y condición, Resultados de la regla, Cuándo se ejecuta la regla, Creada por y Acciones.' }],
          ['marina', { pt: 'E se eu quiser mudar a regra?', es: '¿Y si quiero cambiar la regla?' }],
          ['rafa', { pt: 'Dá para editar nome, condições, intervalo e programação. Não dá para mudar onde a regra se aplica nem a ação: nesse caso, exclua a regra e crie outra.', es: 'Se pueden editar nombre, condiciones, intervalo y programación. No se puede cambiar dónde se aplica la regla ni la acción: en ese caso, elimina la regla y crea otra.' }],
          ['pixel', { pt: 'E para parar a regra por uns dias sem apagar, use o interruptor de Status.', es: 'Y para detener la regla por unos días sin borrarla, usa el interruptor de Estado.' }]
        ],
        pontos: [
          { pt: '<b>Resultados da regra</b> diz o que ela fez; <b>Quando a regra é executada</b>, com que frequência.', es: '<b>Resultados de la regla</b> dice lo que hizo; <b>Cuándo se ejecuta la regla</b>, con qué frecuencia.' },
          { pt: '<b>Editar:</b> nome, condições, intervalo e programação. <b>Não edita:</b> onde se aplica e a ação.', es: '<b>Editar:</b> nombre, condiciones, intervalo y programación. <b>No se edita:</b> dónde se aplica y la acción.' },
          { pt: '<b>Excluir</b> para recomeçar; <b>Status</b> para pausar sem apagar.', es: '<b>Eliminar</b> para recomenzar; <b>Estado</b> para pausar sin borrar.' }
        ],
        notas: { pt: 'Colunas da tabela vistas de verdade em 16/10/2026 (a conta de aula ainda não tem regras, então o conteúdo das linhas é do simulador). A regra de edição (não muda onde aplica nem a ação) vem da Central de Ajuda da Meta, “Editar ou excluir uma regra automatizada”. O interruptor de Status na linha é uma suposição do simulador (a conferir).', es: 'Columnas de la tabla vistas de verdad el 16/10/2026 (la cuenta de práctica todavía no tiene reglas, así que el contenido de las filas es del simulador). La regla de edición (no cambia dónde se aplica ni la acción) viene del Centro de ayuda de Meta, “Editar o eliminar una regla automática”. El interruptor de Estado en la fila es una suposición del simulador (por confirmar).' }
      },
      ferramenta: 'editar-ou-excluir',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva pela tabela, mostra a regra trabalhando (Executar agora) e abre a edição para ver o que fica apagado.', es: 'En el simulador, el Pixel te lleva por la tabla, muestra la regla trabajando (Ejecutar ahora) y abre la edición para ver qué queda apagado.' },
        tour: 'acompanhar-editar', pagina: 'meta-regras.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Quero mudar a minha regra para valer só para a campanha de camisetas, mas o campo “Aplicar regra a” está cinza! 😣', es: '¡Quiero cambiar mi regla para que valga solo para la campaña de camisetas, pero el campo “Aplicar regla a” está gris! 😣' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Esse campo fica cinza de propósito: depois de criada, a regra não muda onde se aplica nem a ação. O caminho é excluir esta regra e criar outra pela tabela de campanhas, marcando as camisetas.”', es: '“Ese campo queda gris a propósito: una vez creada, la regla no cambia dónde se aplica ni la acción. El camino es eliminar esta regla y crear otra por la tabla de campañas, marcando las camisetas.”' }, fb: { pt: 'Isso! Explicou a limitação e já deu o caminho.', es: '¡Eso! Explicaste la limitación y ya diste el camino.' } },
          { certa: false, txt: { pt: '“O campo está com defeito, aguarde.”', es: '“El campo tiene un defecto, espera.”' }, fb: { pt: 'Não é defeito: é regra do produto.', es: 'No es un defecto: es regla del producto.' } },
          { certa: false, txt: { pt: '“Edite o nome da regra para ‘só camisetas’.”', es: '“Edita el nombre de la regla a ‘solo camisetas’.”' }, fb: { pt: 'O nome não muda onde ela vale.', es: 'El nombre no cambia dónde vale.' } },
          { certa: false, txt: { pt: '“Desligue o Status e a regra passa a valer só para camisetas.”', es: '“Desactiva el Estado y la regla pasa a valer solo para camisetas.”' }, fb: { pt: 'O Status só liga e desliga a regra inteira.', es: 'El Estado solo activa y desactiva la regla entera.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O que o cliente quer mudar: nome, condição, intervalo, programação, ou onde a regra vale / a ação?', es: '¿Qué quiere cambiar el cliente: nombre, condición, intervalo, programación, o dónde vale la regla / la acción?' },
          { pt: 'A regra está ativa? O que diz em “Resultados da regra”?', es: '¿La regla está activa? ¿Qué dice en “Resultados de la regla”?' }],
        conferir: [{ pt: 'Regras automatizadas › linha da regra › Editar.', es: 'Reglas automáticas › fila de la regla › Editar.' },
          { pt: 'Campos apagados ao editar: Aplicar regra a e Ação.', es: 'Campos apagados al editar: Aplicar regla a y Acción.' }],
        frase: { pt: 'Depois de criada, dá para editar nome, condições, intervalo e programação. Para mudar onde a regra vale ou a ação, a gente exclui a regra e cria outra.', es: 'Una vez creada, se pueden editar nombre, condiciones, intervalo y programación. Para cambiar dónde vale la regla o la acción, eliminamos la regla y creamos otra.' },
        passos: [{ pt: 'Para editar: Regras automatizadas › Editar.', es: 'Para editar: Reglas automáticas › Editar.' },
          { pt: 'Para recomeçar: Excluir e criar nova pela tabela de campanhas.', es: 'Para recomenzar: Eliminar y crear una nueva por la tabla de campañas.' }],
        encaminhar: { pt: 'Se a regra não pode ser editada ou excluída mesmo com permissão, confirme o que a tela mostra e siga a Central de Ajuda da Meta.', es: 'Si la regla no se puede editar o eliminar aun con permiso, confirma lo que muestra la pantalla y sigue el Centro de ayuda de Meta.' }
      }
    },
    {
      id: '05', min: 8, status: 'pronta',
      titulo: { pt: 'Meus anúncios pararam sozinhos!', es: '¡Mis anuncios se detuvieron solos!' },
      antes: { pt: 'A Marina tem regras e sabe lê-las. Um dia, a campanha amanhece diferente.', es: 'Marina tiene reglas y sabe leerlas. Un día, la campaña amanece distinta.' },
      gancho: { pt: '“Dois anúncios pararam e ninguém mexeu!” Quando algo para sem ninguém mexer, olhe as regras.', es: '“¡Dos anuncios se detuvieron y nadie los tocó!” Cuando algo se detiene sin que nadie lo toque, mira las reglas.' },
      objetivo: { pt: 'Descobrir se uma regra desativou algo, achar qual e por quê, corrigi-la e reativar o que for preciso.', es: 'Descubrir si una regla desactivó algo, encontrar cuál y por qué, corregirla y reactivar lo que haga falta.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Dois conjuntos aparecem como Desativados e eu não toquei neles! 😱', es: '¡Dos conjuntos aparecen como Desactivados y yo no los toqué! 😱' }],
          ['rafa', { pt: 'Respire. Primeiro ache a causa: abra Regras automatizadas e veja a coluna Resultados da regra. Se alguma regra diz “Desativou 2 conjuntos”, foi ela.', es: 'Respira. Primero encuentra la causa: abre Reglas automáticas y mira la columna Resultados de la regla. Si alguna regla dice “Desactivó 2 conjuntos”, fue ella.' }],
          ['marina', { pt: 'E agora, como conserto?', es: '¿Y ahora cómo lo arreglo?' }],
          ['rafa', { pt: 'Leia a condição e o intervalo. Se estiver larga demais, edite: intervalo curto e mais uma condição. Depois, volte à tabela de conjuntos e ative de novo o que foi desativado sem merecer.', es: 'Lee la condición y el intervalo. Si está demasiado amplia, edita: intervalo corto y una condición más. Después, vuelve a la tabla de conjuntos y activa de nuevo lo que se desactivó sin merecerlo.' }],
          ['pixel', { pt: 'Corrigir a regra não reativa sozinho o que ela já desativou. Esse passo é manual.', es: 'Corregir la regla no reactiva solo lo que ya desactivó. Ese paso es manual.' }]
        ],
        pontos: [
          { pt: '<b>Parou sem ninguém mexer?</b> Olhe Resultados da regra.', es: '<b>¿Se detuvo sin que nadie lo toque?</b> Mira Resultados de la regla.' },
          { pt: '<b>Corrija a regra</b> (intervalo curto, condições a mais) e <b>reative</b> o que foi desativado.', es: '<b>Corrige la regla</b> (intervalo corto, más condiciones) y <b>reactiva</b> lo que se desactivó.' },
          { pt: '<b>Outras causas</b> (pagamento, política) são outros assuntos: confira antes de culpar a regra.', es: '<b>Otras causas</b> (pago, política) son otros temas: revisa antes de culpar a la regla.' }
        ],
        notas: { pt: 'A página de regras e a janela de criação foram vistas de verdade em 16/10/2026; o caso do simulador (regra larga que desativa dois conjuntos) e os números são inventados para o treino. Que corrigir a regra não reative sozinho o que ela desativou é o comportamento esperado de uma regra de “desativar”, mas não foi testado na tela real (a conferir).', es: 'La página de reglas y la ventana de creación se vieron de verdad el 16/10/2026; el caso del simulador (regla amplia que desactiva dos conjuntos) y los números son inventados para la práctica. Que corregir la regla no reactive solo lo que desactivó es el comportamiento esperado de una regla de “desactivar”, pero no se probó en la pantalla real (por confirmar).' }
      },
      ferramenta: 'por-que-parou',
      praticar: {
        texto: { pt: 'No simulador, dois conjuntos pararam. O Pixel te guia: achar a regra, entender, corrigir e reativar o que foi desativado sem merecer.', es: 'En el simulador, dos conjuntos se detuvieron. El Pixel te guía: encontrar la regla, entender, corregir y reactivar lo que se desactivó sin merecerlo.' },
        tour: 'regra-desativou-tudo', pagina: 'meta-regras.html?problema=1'
      },
      atender: {
        cena: { pt: 'Meus anúncios pararam e eu já perdi vendas hoje! Quero saber quem desativou e quero tudo no ar agora! 😤', es: '¡Mis anuncios se detuvieron y ya perdí ventas hoy! ¡Quiero saber quién los desactivó y quiero todo al aire ahora! 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Vamos resolver agora. Abra Regras automatizadas: se alguma regra aparece com resultados como “Desativou 2 conjuntos”, foi ela. Vamos corrigir a regra, ativar de novo os conjuntos que merecem e deixar a regra mais segura.”', es: '“Vamos a resolverlo ahora. Abre Reglas automáticas: si alguna regla aparece con resultados como “Desactivó 2 conjuntos”, fue ella. Corrijamos la regla, activemos de nuevo los conjuntos que lo merecen y dejemos la regla más segura.”' }, fb: { pt: 'Isso! Acolheu, achou a causa e apresentou o plano.', es: '¡Eso! Acogiste, encontraste la causa y presentaste el plan.' } },
          { certa: false, txt: { pt: '“Só reative os conjuntos e pronto.”', es: '“Solo reactiva los conjuntos y listo.”' }, fb: { pt: 'Sem corrigir a regra, ela desativa de novo na próxima verificação.', es: 'Sin corregir la regla, desactiva de nuevo en la próxima revisión.' } },
          { certa: false, txt: { pt: '“Foi a Meta, não tem o que fazer.”', es: '“Fue Meta, no hay nada que hacer.”' }, fb: { pt: 'Foi uma regra da conta, e dá para ver e corrigir.', es: 'Fue una regla de la cuenta, y se puede ver y corregir.' } },
          { certa: false, txt: { pt: '“Exclua a conta de anúncios e crie outra.”', es: '“Elimina la cuenta publicitaria y crea otra.”' }, fb: { pt: 'Exagero e perde o histórico.', es: 'Exagerado y pierde el historial.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Existe alguma regra em Regras automatizadas? O que diz em Resultados da regra?', es: '¿Existe alguna regla en Reglas automáticas? ¿Qué dice en Resultados de la regla?' },
          { pt: 'Quais conjuntos estão Desativados e desde quando?', es: '¿Qué conjuntos están Desactivados y desde cuándo?' },
          { pt: 'Alguém desativou à mão, ou houve problema de pagamento?', es: '¿Alguien desactivó a mano, o hubo un problema de pago?' }],
        conferir: [{ pt: 'Regras automatizadas › Resultados da regra, condição e intervalo.', es: 'Reglas automáticas › Resultados de la regla, condición e intervalo.' },
          { pt: 'Tabela de conjuntos: status de cada um.', es: 'Tabla de conjuntos: estado de cada uno.' }],
        frase: { pt: 'Quando algo para sem ninguém mexer, uma regra pode ser a causa. Vamos olhar a página de regras, corrigir o que estiver largo demais e reativar o que foi desativado sem precisar.', es: 'Cuando algo se detiene sin que nadie lo toque, una regla puede ser la causa. Veamos la página de reglas, corrijamos lo que esté demasiado amplio y reactivemos lo que se desactivó sin necesidad.' },
        passos: [{ pt: 'Abra Regras automatizadas e leia Resultados da regra.', es: 'Abre Reglas automáticas y lee Resultados de la regla.' },
          { pt: 'Edite a regra (intervalo e condições) e ative de novo os conjuntos.', es: 'Edita la regla (intervalo y condiciones) y activa de nuevo los conjuntos.' }],
        encaminhar: { pt: 'Se não há regra e o anúncio parou, outras causas (pagamento, limite de gastos, política) entram em jogo: siga a aula de “Meu anúncio não publica” e a Central de Ajuda da Meta; recusas por política são tratadas por outra área.', es: 'Si no hay regla y el anuncio se detuvo, entran en juego otras causas (pago, límite de gastos, política): sigue la clase de “Mi anuncio no se publica” y el Centro de ayuda de Meta; los rechazos por política los trata otra área.' }
      }
    }
  ],
  relatorios: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'Onde ficam os números', es: 'Dónde están los números' },
      antes: { pt: 'A Marina tem anúncios, regras e posts. Agora quer saber se tudo isso está funcionando.', es: 'Marina tiene anuncios, reglas y publicaciones. Ahora quiere saber si todo eso está funcionando.' },
      gancho: { pt: '“Onde eu vejo quanto gastei e quantas pessoas viram?” Há mais de um lugar, e cada um serve para uma coisa.', es: '“¿Dónde veo cuánto gasté y cuántas personas vieron?” Hay más de un lugar, y cada uno sirve para una cosa.' },
      objetivo: { pt: 'Saber os lugares onde se veem números (Gerenciador, Relatórios de Anúncios, Insights, Gerenciador de Eventos) e qual usar em cada caso.', es: 'Saber los lugares donde se ven números (Administrador, Informes de anuncios, Estadísticas, Administrador de eventos) y cuál usar en cada caso.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Vi números no Gerenciador de Anúncios, no Business Suite e no Gerenciador de Eventos. Qual é o certo? 🤔', es: 'Vi números en el Administrador de anuncios, en Business Suite y en el Administrador de eventos. ¿Cuál es el correcto? 🤔' }],
          ['rafa', { pt: 'Todos, cada um no seu papel. A tabela de campanhas e os Relatórios de Anúncios são para anúncios. Os Insights do Business Suite mostram a Página e o Instagram. O Gerenciador de Eventos mostra o que o Pixel recebeu.', es: 'Todos, cada uno en su papel. La tabla de campañas y los Informes de anuncios son para anuncios. Las Estadísticas de Business Suite muestran la Página y Instagram. El Administrador de eventos muestra lo que recibió el Pixel.' }],
          ['marina', { pt: 'E se um número não bater com o outro?', es: '¿Y si un número no coincide con el otro?' }],
          ['rafa', { pt: 'A Central de Ajuda tem um artigo só sobre as diferenças de contagem entre essas telas. Antes de achar defeito, confira período e janela de atribuição (veremos na aula 04).', es: 'El Centro de ayuda tiene un artículo solo sobre las diferencias de conteo entre esas pantallas. Antes de pensar en un defecto, revisa período y ventana de atribución (lo veremos en la clase 04).' }],
          ['pixel', { pt: 'Nos Relatórios de Anúncios dá para montar uma tabela dinâmica, salvar, compartilhar e exportar. É a ferramenta para o cliente que pede “um relatório”.', es: 'En los Informes de anuncios se puede armar una tabla dinámica, guardar, compartir y exportar. Es la herramienta para el cliente que pide “un informe”.' }]
        ],
        pontos: [
          { pt: '<b>Anúncios:</b> tabela de campanhas e Relatórios de Anúncios.', es: '<b>Anuncios:</b> tabla de campañas e Informes de anuncios.' },
          { pt: '<b>Página e Instagram:</b> Insights do Business Suite.', es: '<b>Página e Instagram:</b> Estadísticas de Business Suite.' },
          { pt: '<b>Pixel e eventos:</b> Gerenciador de Eventos. Contagens podem diferir entre telas.', es: '<b>Pixel y eventos:</b> Administrador de eventos. Los conteos pueden diferir entre pantallas.' }
        ],
        notas: { pt: 'Relatórios de Anúncios vistos de verdade em 16/10/2026 em português e espanhol, com os números reais do anúncio de teste da conta de aula. Os títulos dos artigos da Central de Ajuda (atribuição, diferenças de contagem, anúncio sem dados) foram lidos em 16/10/2026; o conteúdo do artigo de diferenças de contagem não foi lido (a conferir).', es: 'Informes de anuncios vistos de verdad el 16/10/2026 en portugués y español, con los números reales del anuncio de prueba de la cuenta de práctica. Los títulos de los artículos del Centro de ayuda (atribución, diferencias de conteo, anuncio sin datos) se leyeron el 16/10/2026; el contenido del artículo de diferencias de conteo no se leyó (por confirmar).' }
      },
      ferramenta: 'onde-olhar',
      atender: {
        cena: { pt: 'O Gerenciador de Anúncios diz 14 compras e o Gerenciador de Eventos diz 17. Qual está errado? 😠', es: '¡El Administrador de anuncios dice 14 compras y el Administrador de eventos dice 17. ¿Cuál está mal? 😠' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Nenhum dos dois está necessariamente errado: cada tela conta de um jeito. O Gerenciador de Anúncios conta as compras atribuídas ao anúncio, segundo uma janela de atribuição, e o Gerenciador de Eventos mostra os eventos que o Pixel recebeu. Vamos comparar o período e a janela.”', es: '“Ninguno de los dos está necesariamente mal: cada pantalla cuenta de una forma. El Administrador de anuncios cuenta las compras atribuidas al anuncio, según una ventana de atribución, y el Administrador de eventos muestra los eventos que recibió el Pixel. Comparemos el período y la ventana.”' }, fb: { pt: 'Isso! Explicou por que podem diferir e o que conferir.', es: '¡Eso! Explicaste por qué pueden diferir y qué revisar.' } },
          { certa: false, txt: { pt: '“O Pixel está quebrado, vamos recriar.”', es: '“El Pixel está roto, vamos a recrearlo.”' }, fb: { pt: 'Diferença de contagem não prova defeito no Pixel.', es: 'Una diferencia de conteo no prueba un defecto en el Pixel.' } },
          { certa: false, txt: { pt: '“Use só o maior número.”', es: '“Usa solo el número mayor.”' }, fb: { pt: 'Escolher o mais bonito não é método.', es: 'Elegir el más bonito no es un método.' } },
          { certa: false, txt: { pt: '“Ignore o Gerenciador de Eventos.”', es: '“Ignora el Administrador de eventos.”' }, fb: { pt: 'Ele serve para checar se o Pixel envia os eventos.', es: 'Sirve para comprobar si el Pixel envía los eventos.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Em qual tela o cliente viu cada número? Qual período usou em cada uma?', es: '¿En qué pantalla vio el cliente cada número? ¿Qué período usó en cada una?' },
          { pt: 'Qual é a configuração de atribuição (coluna do relatório)?', es: '¿Cuál es la configuración de atribución (columna del informe)?' }],
        conferir: [{ pt: 'Relatórios de Anúncios › coluna Configuração de atribuição e período.', es: 'Informes de anuncios › columna Configuración de atribución y período.' },
          { pt: 'Gerenciador de Eventos: período e eventos recebidos.', es: 'Administrador de eventos: período y eventos recibidos.' }],
        frase: { pt: 'Cada tela conta de um jeito, então os números nem sempre batem. Vamos comparar o período e a janela de atribuição das duas telas.', es: 'Cada pantalla cuenta de una forma, así que los números no siempre coinciden. Comparemos el período y la ventana de atribución de las dos pantallas.' },
        passos: [{ pt: 'Coloque as duas telas no mesmo período.', es: 'Pon las dos pantallas en el mismo período.' },
          { pt: 'Veja a Configuração de atribuição e compare de novo.', es: 'Mira la Configuración de atribución y compara de nuevo.' }],
        encaminhar: { pt: 'Se a diferença continuar grande mesmo com período e janela iguais, siga a Central de Ajuda da Meta sobre diferenças de contagem de eventos.', es: 'Si la diferencia sigue siendo grande aun con período y ventana iguales, sigue el Centro de ayuda de Meta sobre diferencias de conteo de eventos.' }
      }
    },
    {
      id: '02', min: 7, status: 'pronta',
      titulo: { pt: 'Ler o relatório: alcance, impressões, gasto', es: 'Leer el informe: alcance, impresiones, gasto' },
      antes: { pt: 'A Marina abriu os Relatórios de Anúncios pela primeira vez.', es: 'Marina abrió los Informes de anuncios por primera vez.' },
      gancho: { pt: '“Tem 69, 71, 1,03… o que significa cada número?” Vamos ler a tabela com os números reais do anúncio de teste.', es: '“Hay 69, 71, 1,03… ¿qué significa cada número?” Vamos a leer la tabla con los números reales del anuncio de prueba.' },
      objetivo: { pt: 'Ler as colunas padrão (Alcance, Impressões, Frequência, Valor gasto, Configuração de atribuição) e o efeito do período.', es: 'Leer las columnas predeterminadas (Alcance, Impresiones, Frecuencia, Monto gastado, Configuración de atribución) y el efecto del período.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'O relatório mostra Alcance 69, Impressões 71 e Frequência 1,03. Parece difícil! 😅', es: 'El informe muestra Alcance 69, Impresiones 71 y Frecuencia 1,03. ¡Parece difícil! 😅' }],
          ['rafa', { pt: 'Alcance é quantas pessoas viram: 69. Impressões é quantas vezes o anúncio apareceu: 71. A Frequência é a média: 71 ÷ 69 = 1,03, quase uma vez por pessoa.', es: 'Alcance es cuántas personas vieron: 69. Impresiones es cuántas veces apareció el anuncio: 71. La Frecuencia es el promedio: 71 ÷ 69 = 1,03, casi una vez por persona.' }],
          ['marina', { pt: 'E o Valor gasto, R$ 2,77? Eu coloquei R$ 5,27 por dia!', es: '¿Y el Monto gastado, R$ 2,77? ¡Yo puse R$ 5,27 por día!' }],
          ['rafa', { pt: 'R$ 5,27 era o orçamento, o limite. O Valor gasto é o que foi cobrado de verdade: R$ 2,77.', es: 'R$ 5,27 era el presupuesto, el límite. El Monto gastado es lo que se cobró de verdad: R$ 2,77.' }],
          ['pixel', { pt: 'E repare que o relatório mostra um período (aqui, Este mês). Troque o período e os números mudam, se houve atividade.', es: 'Y fíjate que el informe muestra un período (aquí, Este mes). Cambia el período y los números cambian, si hubo actividad.' }]
        ],
        pontos: [
          { pt: '<b>Alcance</b> = pessoas. <b>Impressões</b> = vezes. <b>Frequência</b> = impressões ÷ alcance.', es: '<b>Alcance</b> = personas. <b>Impresiones</b> = veces. <b>Frecuencia</b> = impresiones ÷ alcance.' },
          { pt: '<b>Valor gasto</b> = o que foi cobrado, não o orçamento.', es: '<b>Monto gastado</b> = lo que se cobró, no el presupuesto.' },
          { pt: '<b>Sempre olhe o período</b> e a configuração de atribuição.', es: '<b>Siempre mira el período</b> y la configuración de atribución.' }
        ],
        notas: { pt: 'Linha e linha de total vistas de verdade em 16/10/2026 (conta de aula): Alcance 69 (rótulo “Contas Meta”), Impressões 71 (“Total”), Frequência 1,03 (“Por Conta Meta”), Valor gasto R$ 2,77 (“Total usado”) e atribuição “Clique de 7 dias ou visualização de 1 dias”.', es: 'Fila y fila de total vistas de verdad el 16/10/2026 (cuenta de práctica): Alcance 69 (etiqueta “Cuentas de Meta”), Impresiones 71 (“Total”), Frecuencia 1,03 (“Por cuenta de Meta”), Monto gastado R$ 2,77 (“Gasto total”) y atribución “7 días tras clic o 1 días tras visualización”.' }
      },
      ferramenta: 'ler-numeros',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia pela tabela com os números reais do anúncio de teste e mostra o efeito do período.', es: 'En el simulador, el Pixel te guía por la tabla con los números reales del anuncio de prueba y muestra el efecto del período.' },
        tour: 'ler-relatorio', pagina: 'meta-relatorios.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Meu relatório diz que gastei R$ 2,77, mas eu defini R$ 5,27 por dia! A Meta ficou com a diferença? 😡', es: '¡Mi informe dice que gasté R$ 2,77, pero definí R$ 5,27 por día! ¿Meta se quedó con la diferencia? 😡' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Ninguém ficou com a diferença: R$ 5,27 é o limite que você definiu, e o Valor gasto é o que foi realmente cobrado, R$ 2,77. É normal gastar menos que o orçamento.”', es: '“Nadie se quedó con la diferencia: R$ 5,27 es el límite que definiste, y el Monto gastado es lo que realmente se cobró, R$ 2,77. Es normal gastar menos que el presupuesto.”' }, fb: { pt: 'Isso! Diferenciou orçamento de gasto.', es: '¡Eso! Diferenciaste presupuesto de gasto.' } },
          { certa: false, txt: { pt: '“É uma taxa da Meta.”', es: '“Es una tarifa de Meta.”' }, fb: { pt: 'Não é taxa: é só gasto menor que o limite.', es: 'No es tarifa: es solo gasto menor que el límite.' } },
          { certa: false, txt: { pt: '“O relatório está com defeito.”', es: '“El informe tiene un defecto.”' }, fb: { pt: 'Sem sinal de defeito: orçamento e gasto são coisas diferentes.', es: 'Sin señal de defecto: presupuesto y gasto son cosas distintas.' } },
          { certa: false, txt: { pt: '“Peça reembolso da diferença.”', es: '“Pide reembolso de la diferencia.”' }, fb: { pt: 'Não há nada a reembolsar: ela só foi cobrada pelo que gastou.', es: 'No hay nada que reembolsar: solo se le cobró lo que gastó.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual período o relatório mostra?', es: '¿Qué período muestra el informe?' },
          { pt: 'O cliente está comparando orçamento com Valor gasto?', es: '¿El cliente está comparando presupuesto con Monto gastado?' }],
        conferir: [{ pt: 'Colunas Alcance, Impressões, Frequência e Valor gasto, e a linha Total.', es: 'Columnas Alcance, Impresiones, Frecuencia y Monto gastado, y la fila Total.' },
          { pt: 'Período do relatório.', es: 'Período del informe.' }],
        frase: { pt: 'Alcance conta pessoas, Impressões conta vezes, e o Valor gasto é o que foi realmente cobrado, que pode ser menos que o orçamento. Vamos olhar o período do relatório.', es: 'Alcance cuenta personas, Impresiones cuenta veces, y el Monto gastado es lo que realmente se cobró, que puede ser menos que el presupuesto. Veamos el período del informe.' },
        passos: [{ pt: 'Abra o relatório e confira o período.', es: 'Abre el informe y revisa el período.' },
          { pt: 'Leia as colunas e a linha Total.', es: 'Lee las columnas y la fila Total.' }],
        encaminhar: { pt: 'Se houver cobrança que o cliente não reconhece, o assunto é de pagamento: confirme o que a tela mostra e siga a Central de Ajuda da Meta; reembolsos são tratados por outra área.', es: 'Si hay un cobro que el cliente no reconoce, el tema es de pagos: confirma lo que muestra la pantalla y sigue el Centro de ayuda de Meta; los reembolsos los trata otra área.' }
      }
    },
    {
      id: '03', min: 9, status: 'pronta',
      titulo: { pt: 'Montar o seu relatório', es: 'Armar tu informe' },
      antes: { pt: 'A Marina sabe ler a tabela padrão, mas quer mais detalhe.', es: 'Marina sabe leer la tabla predeterminada, pero quiere más detalle.' },
      gancho: { pt: '“Quero ver por campanha e por plataforma, com cliques e compras!” Isso se monta em Personalizar.', es: '“¡Quiero ver por campaña y por plataforma, con clics y compras!” Eso se arma en Personalizar.' },
      objetivo: { pt: 'Usar Personalizar para escolher detalhamentos (como dividir) e métricas (os números), e salvar o relatório.', es: 'Usar Personalizar para elegir desgloses (cómo dividir) y métricas (los números), y guardar el informe.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Como eu mudo as colunas do relatório? 🤔', es: '¿Cómo cambio las columnas del informe? 🤔' }],
          ['rafa', { pt: 'Clique em Personalizar. Abre o painel “Personalizar tabela dinâmica” com duas abas: Detalhamentos e Métricas.', es: 'Haz clic en Personalizar. Se abre el panel “Personalizar tabla dinámica” con dos pestañas: Desgloses y Métricas.' }],
          ['marina', { pt: 'E qual a diferença?', es: '¿Y cuál es la diferencia?' }],
          ['rafa', { pt: 'Detalhamento é como o relatório divide os números: por nome da campanha, do conjunto, do anúncio, idade, gênero, país, plataforma, posicionamento, dia, mês. Métrica é o número: valor gasto, impressões, cliques no link, compras, CPM, CTR…', es: 'Desglose es cómo el informe divide los números: por nombre de la campaña, del conjunto, del anuncio, edad, sexo, país, plataforma, ubicación, día, mes. Métrica es el número: monto gastado, impresiones, clics en el enlace, compras, CPM, CTR…' }],
          ['pixel', { pt: 'Alguns detalhamentos, como Hora do dia, só estão disponíveis para os últimos 13 meses. E o botão Salvar guarda o relatório para você voltar depois.', es: 'Algunos desgloses, como Hora, solo están disponibles para los últimos 13 meses. Y el botón Guardar guarda el informe para que vuelvas después.' }]
        ],
        pontos: [
          { pt: '<b>Detalhamentos</b> dividem (campanha, idade, plataforma, posicionamento, dia…).', es: '<b>Los desgloses</b> dividen (campaña, edad, plataforma, ubicación, día…).' },
          { pt: '<b>Métricas</b> são os números (valor gasto, cliques no link, compras, CPM, CTR…).', es: '<b>Las métricas</b> son los números (monto gastado, clics en el enlace, compras, CPM, CTR…).' },
          { pt: '<b>Salvar</b> guarda o relatório; <b>Exportar</b> e <b>Compartilhar</b> levam para fora.', es: '<b>Guardar</b> guarda el informe; <b>Exportar</b> y <b>Compartir</b> lo llevan afuera.' }
        ],
        notas: { pt: 'Painel Personalizar tabela dinâmica visto de verdade em 16/10/2026 em português e espanhol (abas Detalhamentos e Métricas, listas populares e grupos; “Disponível para os últimos 13 meses”). O simulador combina um nível com um detalhamento por vez e usa dados inventados para as divisões; o que acontece ao clicar em Salvar não foi visto (a conferir).', es: 'Panel Personalizar tabla dinámica visto de verdad el 16/10/2026 en portugués y español (pestañas Desgloses y Métricas, listas populares y grupos; “Disponibles para los últimos 13 meses”). El simulador combina un nivel con un desglose a la vez y usa datos inventados para las divisiones; lo que pasa al hacer clic en Guardar no se vio (por confirmar).' }
      },
      ferramenta: 'detalhe-ou-metrica',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para adicionar os detalhamentos Campanha e Plataforma e as métricas Cliques no link e Compras.', es: 'En el simulador, el Pixel te guía para agregar los desgloses Campaña y Plataforma y las métricas Clics en el enlace y Compras.' },
        tour: 'montar-relatorio', pagina: 'meta-relatorios.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Quero um relatório do que cada plataforma gastou e vendeu, mas só vejo uma linha com tudo junto! 😩', es: '¡Quiero un informe de lo que gastó y vendió cada plataforma, pero solo veo una fila con todo junto! 😩' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“A tabela está sem divisão. Clique em Personalizar e, na aba Detalhamentos, marque Plataforma; depois, na aba Métricas, deixe Valor gasto e Compras marcados. Aí aparece uma linha por plataforma.”', es: '“La tabla está sin división. Haz clic en Personalizar y, en la pestaña Desgloses, marca Plataforma; después, en la pestaña Métricas, deja Monto gastado y Compras marcados. Ahí aparece una fila por plataforma.”' }, fb: { pt: 'Isso! Detalhamento para dividir, métricas para os números.', es: '¡Eso! Desglose para dividir, métricas para los números.' } },
          { certa: false, txt: { pt: '“Crie uma campanha para cada plataforma.”', es: '“Crea una campaña para cada plataforma.”' }, fb: { pt: 'Não precisa mexer nas campanhas: é só dividir o relatório.', es: 'No hace falta tocar las campañas: solo hay que dividir el informe.' } },
          { certa: false, txt: { pt: '“Esse relatório só mostra tudo junto.”', es: '“Ese informe solo muestra todo junto.”' }, fb: { pt: 'Mostra por plataforma, com o detalhamento certo.', es: 'Muestra por plataforma, con el desglose correcto.' } },
          { certa: false, txt: { pt: '“Exporte e separe no Excel.”', es: '“Exporta y separa en Excel.”' }, fb: { pt: 'O próprio relatório já divide: basta o detalhamento.', es: 'El propio informe ya divide: basta el desglose.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Como o cliente quer dividir os números (campanha, idade, plataforma, dia…)?', es: '¿Cómo quiere el cliente dividir los números (campaña, edad, plataforma, día…)?' },
          { pt: 'Quais números ele quer ver (gasto, cliques, compras…)?', es: '¿Qué números quiere ver (gasto, clics, compras…)?' }],
        conferir: [{ pt: 'Personalizar › Detalhamentos e Métricas marcados.', es: 'Personalizar › Desgloses y Métricas marcados.' },
          { pt: 'Período e filtro Teve veiculação.', es: 'Período y filtro Con entrega.' }],
        frase: { pt: 'Em Personalizar, a aba Detalhamentos define como dividir e a aba Métricas define os números. Vamos marcar o que você quer ver.', es: 'En Personalizar, la pestaña Desgloses define cómo dividir y la pestaña Métricas define los números. Marquemos lo que quieres ver.' },
        passos: [{ pt: 'Clique em Personalizar e marque os detalhamentos.', es: 'Haz clic en Personalizar y marca los desgloses.' },
          { pt: 'Na aba Métricas, marque os números e feche o painel.', es: 'En la pestaña Métricas, marca los números y cierra el panel.' }],
        encaminhar: { pt: 'Se uma métrica que o cliente quer não aparece na lista, confira o objetivo da campanha (a métrica certa depende dele) e siga a Central de Ajuda da Meta.', es: 'Si una métrica que quiere el cliente no aparece en la lista, revisa el objetivo de la campaña (la métrica correcta depende de él) y sigue el Centro de ayuda de Meta.' }
      }
    },
    {
      id: '04', min: 8, status: 'pronta',
      titulo: { pt: 'Atribuição: de onde vêm as compras', es: 'Atribución: de dónde vienen las compras' },
      antes: { pt: 'A Marina montou o relatório e viu 14 compras numa campanha de exemplo.', es: 'Marina armó el informe y vio 14 compras en una campaña de ejemplo.' },
      gancho: { pt: '“De onde saíram essas 14 compras? Um amigo viu 8 na tela dele!” A resposta está na janela de atribuição.', es: '“¿De dónde salieron esas 14 compras? ¡Un amigo vio 8 en su pantalla!” La respuesta está en la ventana de atribución.' },
      objetivo: { pt: 'Entender a Configuração de atribuição (como uma compra é contada para o anúncio) e por que só se compara igual com igual.', es: 'Entender la Configuración de atribución (cómo se cuenta una compra para el anuncio) y por qué solo se compara igual con igual.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Tem uma coluna “Configuração de atribuição” com “Clique de 7 dias ou visualização de 1 dia”. O que é isso? 🤔', es: 'Hay una columna “Configuración de atribución” con “7 días tras clic o 1 día tras visualización”. ¿Qué es eso? 🤔' }],
          ['rafa', { pt: 'Pela Central de Ajuda: ações dentro do anúncio, como impressões e cliques no link, a Meta conta direto. Ações fora do anúncio, como uma compra no site, são atribuídas ao anúncio se acontecerem em um número de dias.', es: 'Según el Centro de ayuda: las acciones dentro del anuncio, como impresiones y clics en el enlace, Meta las cuenta directo. Las acciones fuera del anuncio, como una compra en el sitio, se atribuyen al anuncio si ocurren en un número de días.' }],
          ['marina', { pt: 'E onde se define esse número de dias?', es: '¿Y dónde se define ese número de días?' }],
          ['rafa', { pt: 'Por padrão, a configuração de atribuição é do conjunto de anúncios. Na tela vem “Clique de 7 dias ou visualização de 1 dia”: conta a compra até 7 dias depois de um clique, ou 1 dia depois de só ver o anúncio.', es: 'De forma predeterminada, la configuración de atribución es del conjunto de anuncios. En la pantalla viene “7 días tras clic o 1 día tras visualización”: cuenta la compra hasta 7 días después de un clic, o 1 día después de solo ver el anuncio.' }],
          ['pixel', { pt: 'Por isso, janela diferente dá número diferente. Duas telas só são comparáveis com a mesma janela e o mesmo período.', es: 'Por eso, ventana distinta da número distinto. Dos pantallas solo son comparables con la misma ventana y el mismo período.' }]
        ],
        pontos: [
          { pt: '<b>No anúncio:</b> impressões, cliques, visualizações: contadas direto.', es: '<b>En el anuncio:</b> impresiones, clics, reproducciones: contadas directo.' },
          { pt: '<b>Fora do anúncio</b> (compra no site): atribuída por uma janela de dias.', es: '<b>Fuera del anuncio</b> (compra en el sitio): atribuida por una ventana de días.' },
          { pt: '<b>Comparar:</b> mesma janela e mesmo período.', es: '<b>Comparar:</b> misma ventana y mismo período.' }
        ],
        notas: { pt: 'Coluna Configuração de atribuição vista de verdade em 16/10/2026. As regras (ações no anúncio × fora do anúncio; atribuição definida no conjunto) vêm da Central de Ajuda da Meta, “Sobre o sistema de atribuição do Facebook”, lida em 16/10/2026. A troca de janela dentro do relatório e os números da campanha de exemplo são do simulador (a conferir). Os efeitos das mudanças de privacidade (como as do iOS) sobre os relatórios não foram lidos nesta aula (a conferir).', es: 'Columna Configuración de atribución vista de verdad el 16/10/2026. Las reglas (acciones en el anuncio × fuera del anuncio; atribución definida en el conjunto) vienen del Centro de ayuda de Meta, “Acerca del sistema de atribución de Facebook”, leído el 16/10/2026. El cambio de ventana dentro del informe y los números de la campaña de ejemplo son del simulador (por confirmar). Los efectos de los cambios de privacidad (como los de iOS) sobre los informes no se leyeron en esta clase (por confirmar).' }
      },
      ferramenta: 'janela-atribuicao',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva pela coluna de atribuição e troca a janela para “Clique de 1 dia”, para você ver as compras mudarem.', es: 'En el simulador, el Pixel te lleva por la columna de atribución y cambia la ventana a “1 día tras clic”, para que veas cambiar las compras.' },
        tour: 'comparar-atribuicao', pagina: 'meta-relatorios.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Meu relatório mostra 14 compras e o do meu sócio, 8, da mesma campanha. Um de nós está errado! 😤', es: '¡Mi informe muestra 14 compras y el de mi socio, 8, de la misma campaña. ¡Uno de nosotros está equivocado! 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Provavelmente nenhum dos dois: confira a coluna Configuração de atribuição de cada relatório. Se uma tela usa clique de 7 dias ou visualização de 1 dia e a outra só clique de 1 dia, os números diferem. Coloquem a mesma janela e o mesmo período.”', es: '“Probablemente ninguno de los dos: revisen la columna Configuración de atribución de cada informe. Si una pantalla usa 7 días tras clic o 1 día tras visualización y la otra solo 1 día tras clic, los números difieren. Pongan la misma ventana y el mismo período.”' }, fb: { pt: 'Isso! Achou a causa mais provável.', es: '¡Eso! Encontraste la causa más probable.' } },
          { certa: false, txt: { pt: '“O relatório do seu sócio está errado.”', es: '“El informe de tu socio está equivocado.”' }, fb: { pt: 'Não dá para dizer sem comparar as janelas.', es: 'No se puede decir sin comparar las ventanas.' } },
          { certa: false, txt: { pt: '“A Meta conta compras ao acaso.”', es: '“Meta cuenta compras al azar.”' }, fb: { pt: 'Há uma regra de contagem: a janela de atribuição.', es: 'Hay una regla de conteo: la ventana de atribución.' } },
          { certa: false, txt: { pt: '“Some os dois números.”', es: '“Suma los dos números.”' }, fb: { pt: 'Somar contaria as mesmas compras duas vezes.', es: 'Sumar contaría las mismas compras dos veces.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual é a Configuração de atribuição em cada relatório?', es: '¿Cuál es la Configuración de atribución en cada informe?' },
          { pt: 'Os dois estão no mesmo período?', es: '¿Los dos están en el mismo período?' }],
        conferir: [{ pt: 'Coluna Configuração de atribuição de cada tela.', es: 'Columna Configuración de atribución de cada pantalla.' },
          { pt: 'Período de cada tela.', es: 'Período de cada pantalla.' }],
        frase: { pt: 'Compras são atribuídas ao anúncio dentro de uma janela de dias. Se as janelas ou os períodos são diferentes, os números diferem. Vamos igualar os dois.', es: 'Las compras se atribuyen al anuncio dentro de una ventana de días. Si las ventanas o los períodos son distintos, los números difieren. Igualemos los dos.' },
        passos: [{ pt: 'Veja a coluna Configuração de atribuição nos dois relatórios.', es: 'Mira la columna Configuración de atribución en los dos informes.' },
          { pt: 'Igualar janela e período e comparar de novo.', es: 'Igualar ventana y período y comparar de nuevo.' }],
        encaminhar: { pt: 'Se mesmo com janela e período iguais os números continuam muito diferentes, siga a Central de Ajuda da Meta sobre diferenças de contagem; efeitos de mudanças de privacidade nos relatórios ficam para a Central de Ajuda.', es: 'Si aun con ventana y período iguales los números siguen siendo muy distintos, sigue el Centro de ayuda de Meta sobre diferencias de conteo; los efectos de cambios de privacidad en los informes se consultan en el Centro de ayuda.' }
      }
    },
    {
      id: '05', min: 7, status: 'pronta',
      titulo: { pt: 'Relatório vazio, zerado ou diferente', es: 'Informe vacío, en cero o distinto' },
      antes: { pt: 'A Marina já lê, monta e compara relatórios. Um dia, a tela amanhece vazia.', es: 'Marina ya lee, arma y compara informes. Un día, la pantalla amanece vacía.' },
      gancho: { pt: '“Meu relatório sumiu! Está tudo vazio!” Quase nunca é defeito: costuma ser período ou filtro.', es: '“¡Mi informe desapareció! ¡Está todo vacío!” Casi nunca es un defecto: suele ser período o filtro.' },
      objetivo: { pt: 'Diagnosticar relatório vazio ou zerado: período, filtro Teve veiculação, objetivo da campanha.', es: 'Diagnosticar informe vacío o en cero: período, filtro Con entrega, objetivo de la campaña.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Abri o relatório e diz “Nenhuma atividade durante o intervalo de datas selecionado”. Perdi tudo? 😱', es: 'Abrí el informe y dice “Ninguna actividad durante el intervalo de fechas seleccionado”. ¿Perdí todo? 😱' }],
          ['rafa', { pt: 'Calma. A própria tela sugere: selecione um intervalo de datas diferente. Olhe o período: se estiver em Hoje e o anúncio rodou ontem, não há atividade hoje.', es: 'Calma. La propia pantalla sugiere: selecciona un intervalo de fechas diferente. Mira el período: si está en Hoy y el anuncio corrió ayer, no hay actividad hoy.' }],
          ['marina', { pt: 'E se a conta aparece sumida?', es: '¿Y si la cuenta aparece desaparecida?' }],
          ['rafa', { pt: 'Veja o filtro Teve veiculação: ele esconde contas sem atividade. Desmarque para ver a conta com zeros.', es: 'Mira el filtro Con entrega: oculta cuentas sin actividad. Desmárcalo para ver la cuenta con ceros.' }],
          ['pixel', { pt: 'E zero em Compras numa campanha de engajamento é normal: a métrica certa depende do objetivo. Para anúncio sem dados, a Central de Ajuda tem um artigo próprio.', es: 'Y cero en Compras en una campaña de interacción es normal: la métrica correcta depende del objetivo. Para un anuncio sin datos, el Centro de ayuda tiene un artículo propio.' }]
        ],
        pontos: [
          { pt: '<b>Vazio:</b> confira o período e clique em Alterar data.', es: '<b>Vacío:</b> revisa el período y haz clic en Cambiar fecha.' },
          { pt: '<b>Conta sumida:</b> filtro Teve veiculação.', es: '<b>Cuenta desaparecida:</b> filtro Con entrega.' },
          { pt: '<b>Zero numa métrica:</b> veja o objetivo da campanha e se houve atividade.', es: '<b>Cero en una métrica:</b> mira el objetivo de la campaña y si hubo actividad.' }
        ],
        notas: { pt: 'Tela vazia (“Nenhuma atividade durante o intervalo de datas selecionado”, Alterar data) e filtro Teve veiculação vistos de verdade em 15–16/10/2026. No simulador, Alterar data passa direto para Últimos 30 dias; na tela real escolhe-se o intervalo (a conferir). Existe um artigo da Central de Ajuda sobre anúncios sem dados, não lido (a conferir).', es: 'Pantalla vacía (“Ninguna actividad durante el intervalo de fechas seleccionado”, Cambiar fecha) y filtro Con entrega vistos de verdad el 15–16/10/2026. En el simulador, Cambiar fecha pasa directo a Últimos 30 días; en la pantalla real se elige el intervalo (por confirmar). Existe un artículo del Centro de ayuda sobre anuncios sin datos, no leído (por confirmar).' }
      },
      ferramenta: 'por-que-vazio',
      praticar: {
        texto: { pt: 'No simulador, o relatório amanhece vazio. O Pixel te guia: achar o período certo e entender o filtro Teve veiculação.', es: 'En el simulador, el informe amanece vacío. El Pixel te guía: encontrar el período correcto y entender el filtro Con entrega.' },
        tour: 'relatorio-vazio', pagina: 'meta-relatorios.html?vazio=1'
      },
      atender: {
        cena: { pt: 'Meu relatório está todo vazio! Perdi meus dados! Quero que a Meta restaure agora! 😭', es: '¡Mi informe está todo vacío! ¡Perdí mis datos! ¡Quiero que Meta los restaure ahora! 😭' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Seus dados não sumiram. A tela diz que não há atividade no intervalo de datas escolhido. Vamos olhar o período no topo e clicar em Alterar data; se a conta ainda não aparecer, vemos o filtro Teve veiculação.”', es: '“Tus datos no desaparecieron. La pantalla dice que no hay actividad en el intervalo de fechas elegido. Miremos el período arriba y hagamos clic en Cambiar fecha; si la cuenta aún no aparece, vemos el filtro Con entrega.”' }, fb: { pt: 'Isso! Tranquilizou e deu o caminho.', es: '¡Eso! Tranquilizaste y diste el camino.' } },
          { certa: false, txt: { pt: '“Abra um chamado para restaurar os dados.”', es: '“Abre un caso para restaurar los datos.”' }, fb: { pt: 'Não há dados perdidos: antes de chamado, confira o período.', es: 'No hay datos perdidos: antes de un caso, revisa el período.' } },
          { certa: false, txt: { pt: '“Recrie o relatório do zero.”', es: '“Recrea el informe desde cero.”' }, fb: { pt: 'Não resolve: o período continuaria igual.', es: 'No resuelve: el período seguiría igual.' } },
          { certa: false, txt: { pt: '“Sua conta foi apagada.”', es: '“Tu cuenta fue eliminada.”' }, fb: { pt: 'Não: o relatório só não tem atividade naquele período.', es: 'No: el informe solo no tiene actividad en ese período.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual período está no relatório? O anúncio rodou nesse período?', es: '¿Qué período está en el informe? ¿El anuncio corrió en ese período?' },
          { pt: 'O filtro Teve veiculação está ligado?', es: '¿El filtro Con entrega está activado?' },
          { pt: 'O que a campanha busca (objetivo)? A métrica que falta é do objetivo dela?', es: '¿Qué busca la campaña (objetivo)? ¿La métrica que falta es de su objetivo?' }],
        conferir: [{ pt: 'Período no topo e botão Alterar data.', es: 'Período arriba y botón Cambiar fecha.' },
          { pt: 'Filtro Teve veiculação.', es: 'Filtro Con entrega.' }],
        frase: { pt: 'Quando o relatório aparece vazio, quase sempre é o período ou o filtro. Vamos mudar o intervalo de datas e olhar o filtro Teve veiculação.', es: 'Cuando el informe aparece vacío, casi siempre es el período o el filtro. Cambiemos el intervalo de fechas y miremos el filtro Con entrega.' },
        passos: [{ pt: 'Clique em Alterar data e escolha um período em que o anúncio rodou.', es: 'Haz clic en Cambiar fecha y elige un período en que el anuncio corrió.' },
          { pt: 'Se a conta sumir, desmarque Teve veiculação.', es: 'Si la cuenta desaparece, desmarca Con entrega.' }],
        encaminhar: { pt: 'Se o anúncio rodou naquele período e mesmo assim não há dados, siga a Central de Ajuda da Meta sobre anúncios sem dados ou métricas.', es: 'Si el anuncio corrió en ese período y aun así no hay datos, sigue el Centro de ayuda de Meta sobre anuncios sin datos o métricas.' }
      }
    }
  ],
  segmentacao: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'Quem vê o anúncio: tipos de público', es: 'Quién ve el anuncio: tipos de público' },
      antes: { pt: 'A Marina já mede e lê relatórios. Agora quer escolher melhor quem vê os anúncios.', es: 'Marina ya mide y lee informes. Ahora quiere elegir mejor quién ve los anuncios.' },
      gancho: { pt: '“Quero mostrar o anúncio para quem já conhece a loja, e para gente parecida.” A página Públicos faz isso.', es: '“Quiero mostrar el anuncio a quien ya conoce la tienda, y a gente parecida.” La página Públicos hace eso.' },
      objetivo: { pt: 'Distinguir os três tipos de público (personalizado, semelhante e salvo) e o público automático Advantage+ com controles.', es: 'Distinguir los tres tipos de público (personalizado, similar y guardado) y el público automático Advantage+ con controles.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Abri Públicos e vi três cartões. Qual uso? 🤔', es: 'Abrí Públicos y vi tres tarjetas. ¿Cuál uso? 🤔' }],
          ['rafa', { pt: 'Depende do que você quer. Público personalizado: gente que já demonstrou interesse na loja, por site, app ou lista de clientes. Público semelhante: gente nova parecida com um público que você já tem. Público salvo: suas opções de segmentação guardadas.', es: 'Depende de lo que quieras. Público personalizado: gente que ya mostró interés en la tienda, por sitio, app o lista de clientes. Público similar: gente nueva parecida a un público que ya tienes. Público guardado: tus opciones de segmentación guardadas.' }],
          ['marina', { pt: 'E no anúncio, onde eu escolho?', es: '¿Y en el anuncio, dónde elijo?' }],
          ['rafa', { pt: 'No conjunto de anúncios, na seção Público. Nas campanhas de Vendas aparece “Advantage+ ativado”: a Meta encontra as pessoas sozinha, dentro dos Controles que você define (localização, idade mínima, idiomas).', es: 'En el conjunto de anuncios, en la sección Público. En las campañas de Ventas aparece “Advantage+ activado”: Meta encuentra a las personas sola, dentro de los Controles que defines (ubicación, edad mínima, idiomas).' }],
          ['pixel', { pt: 'E os Controles são firmes: a tela diz que não alcança pessoas fora deles, mesmo com Advantage+ ativado.', es: 'Y los Controles son firmes: la pantalla dice que no llega a personas fuera de ellos, incluso con Advantage+ activado.' }]
        ],
        pontos: [
          { pt: '<b>Personalizado</b> = quem já interagiu. <b>Semelhante</b> = gente nova parecida. <b>Salvo</b> = opções guardadas.', es: '<b>Personalizado</b> = quien ya interactuó. <b>Similar</b> = gente nueva parecida. <b>Guardado</b> = opciones guardadas.' },
          { pt: '<b>Onde:</b> página Públicos (criar) e conjunto de anúncios › Público (usar).', es: '<b>Dónde:</b> página Públicos (crear) y conjunto de anuncios › Público (usar).' },
          { pt: '<b>Advantage+ com Controles:</b> a Meta busca, mas respeita localização, idade mínima e idiomas.', es: '<b>Advantage+ con Controles:</b> Meta busca, pero respeta ubicación, edad mínima e idiomas.' }
        ],
        notas: { pt: 'Página Públicos (três cartões) vista de verdade em 15–16/10/2026 em português e espanhol, e a seção Público do conjunto de anúncios (Advantage+ e Controles) vista em 14–15/10/2026.', es: 'Página Públicos (tres tarjetas) vista de verdad el 15–16/10/2026 en portugués y español, y la sección Público del conjunto de anuncios (Advantage+ y Controles) vista el 14–15/10/2026.' }
      },
      ferramenta: 'tipo-publico',
      atender: {
        cena: { pt: 'Quero que meu anúncio apareça só para quem já viu minha loja, mas ele está aparecendo para todo mundo no Brasil! 😤', es: '¡Quiero que mi anuncio aparezca solo para quien ya vio mi tienda, pero está apareciendo para todo Brasil! 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Para falar só com quem já conhece a loja, é preciso um público personalizado, como Visitantes do site, e escolhê-lo no conjunto de anúncios, na seção Público. Sem isso, o público é automático dentro da localização e idade que você definiu. Vamos criar o público primeiro.”', es: '“Para hablar solo con quien ya conoce la tienda, hace falta un público personalizado, como Visitantes del sitio, y elegirlo en el conjunto de anuncios, en la sección Público. Sin eso, el público es automático dentro de la ubicación y edad que definiste. Creemos el público primero.”' }, fb: { pt: 'Isso! Explicou o que falta e o caminho.', es: '¡Eso! Explicaste lo que falta y el camino.' } },
          { certa: false, txt: { pt: '“O anúncio está com defeito, aguarde.”', es: '“El anuncio tiene un defecto, espera.”' }, fb: { pt: 'Não é defeito: sem público personalizado, ele é automático.', es: 'No es un defecto: sin público personalizado, es automático.' } },
          { certa: false, txt: { pt: '“Escreva ‘só para clientes’ no texto.”', es: '“Escribe ‘solo para clientes’ en el texto.”' }, fb: { pt: 'O texto não limita quem vê.', es: 'El texto no limita quién ve.' } },
          { certa: false, txt: { pt: '“Mude a campanha para outro objetivo.”', es: '“Cambia la campaña a otro objetivo.”' }, fb: { pt: 'O objetivo não define quem já conhece a loja.', es: 'El objetivo no define quién ya conoce la tienda.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Quem o cliente quer alcançar: gente que já conhece a loja, gente parecida ou todo mundo?', es: '¿A quién quiere llegar el cliente: gente que ya conoce la tienda, gente parecida o todos?' },
          { pt: 'O conjunto de anúncios usa Advantage+ ou um público escolhido?', es: '¿El conjunto de anuncios usa Advantage+ o un público elegido?' }],
        conferir: [{ pt: 'Conjunto de anúncios › Público e Controles.', es: 'Conjunto de anuncios › Público y Controles.' },
          { pt: 'Página Públicos: que públicos existem.', es: 'Página Públicos: qué públicos existen.' }],
        frase: { pt: 'Para falar só com quem já conhece a loja, criamos um público personalizado e o escolhemos no conjunto de anúncios. Sem isso, o público é automático dentro dos controles.', es: 'Para hablar solo con quien ya conoce la tienda, creamos un público personalizado y lo elegimos en el conjunto de anuncios. Sin eso, el público es automático dentro de los controles.' },
        passos: [{ pt: 'Crie o público em Públicos.', es: 'Crea el público en Públicos.' },
          { pt: 'No conjunto de anúncios, escolha-o na seção Público.', es: 'En el conjunto de anuncios, elígelo en la sección Público.' }],
        encaminhar: { pt: 'Se o cliente quer segmentar por assuntos sensíveis, confira as categorias especiais e siga a Central de Ajuda da Meta; regras de política são tratadas por outra área.', es: 'Si el cliente quiere segmentar por temas sensibles, revisa las categorías especiales y sigue el Centro de ayuda de Meta; las reglas de política las trata otra área.' }
      }
    },
    {
      id: '02', min: 9, status: 'pronta',
      titulo: { pt: 'Público de quem visitou o site', es: 'Público de quien visitó el sitio' },
      antes: { pt: 'A Marina entendeu os tipos de público. Quer o primeiro: quem visitou a loja.', es: 'Marina entendió los tipos de público. Quiere el primero: quien visitó la tienda.' },
      gancho: { pt: '“O Pixel já sabe quem visitou a loja. Como transformo isso em público?” Vamos criar.', es: '“El Pixel ya sabe quién visitó la tienda. ¿Cómo lo convierto en público?” Vamos a crearlo.' },
      objetivo: { pt: 'Criar um público personalizado do site: fonte, evento, retenção e nome, e ler o tamanho e os status.', es: 'Crear un público personalizado del sitio web: origen, evento, retención y nombre, y leer el tamaño y los estados.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Cliquei em criar público personalizado e pediram uma “fonte”. O que é? 🤔', es: 'Hice clic en crear público personalizado y pidieron un “origen”. ¿Qué es? 🤔' }],
          ['rafa', { pt: 'É de onde vêm as pessoas. Suas fontes: Site, Atividade no app, Catálogo, Lista de clientes, Atividade offline. Fontes da Meta: Vídeo, Formulário de lead, Perfil do Instagram, Página do Facebook… Para quem visitou a loja, é Site.', es: 'Es de dónde vienen las personas. Tus orígenes: Sitio web, Actividad en la app, Catálogo, Lista de clientes, Actividad offline. Orígenes de Meta: Video, Formulario para clientes potenciales, Perfil de Instagram, Página de Facebook… Para quien visitó la tienda, es Sitio web.' }],
          ['marina', { pt: 'E depois?', es: '¿Y después?' }],
          ['rafa', { pt: 'A Origem é o Pixel da loja. Em Eventos: Todos os visitantes do site, páginas específicas, tempo gasto, ou um evento do Pixel (PageView, ViewContent, AddToCart, Purchase). A Retenção é por quantos dias a pessoa fica no público: padrão 30; para compras, até 730.', es: 'El Origen es el Pixel de la tienda. En Eventos: Todos los visitantes del sitio web, páginas específicas, tiempo dedicado, o un evento del Pixel (PageView, ViewContent, AddToCart, Purchase). La Retención es por cuántos días la persona queda en el público: predeterminado 30; para compras, hasta 730.' }],
          ['pixel', { pt: 'Depois de criar, o público começa pequeno: aparece “Abaixo de 1.000” e os status “Tráfego baixo no site”, “Em preenchimento” e “Disponível para usar”. É normal em loja nova.', es: 'Después de crear, el público empieza pequeño: aparece “Menos de 1.000” y los estados “Poco tráfico en el sitio”, “Llenándose” y “Disponible para usar”. Es normal en una tienda nueva.' }]
        ],
        pontos: [
          { pt: '<b>Fonte Site</b> = o Pixel da loja. Sem Pixel funcionando, o público não enche (módulo Pixel).', es: '<b>Origen Sitio web</b> = el Pixel de la tienda. Sin Pixel funcionando, el público no se llena (módulo Pixel).' },
          { pt: '<b>Evento + retenção:</b> quem, e por quantos dias.', es: '<b>Evento + retención:</b> quién, y por cuántos días.' },
          { pt: '<b>Tamanho pequeno</b> no começo é esperado.', es: '<b>Tamaño pequeño</b> al comienzo es lo esperado.' }
        ],
        notas: { pt: 'Lista de fontes e formulário do público do site vistos de verdade em 15–16/10/2026 (a lista de fontes também em espanhol). O formulário em espanhol não abriu e segue o padrão da Meta (a conferir).', es: 'Lista de orígenes y formulario del público del sitio web vistos de verdad el 15–16/10/2026 (la lista de orígenes también en español). El formulario en español no abrió y sigue el estándar de Meta (por confirmar).' }
      },
      ferramenta: 'fonte-publico',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para criar o público “Visitantes do site 30 dias”, da fonte ao nome, e ler o resultado na lista.', es: 'En el simulador, el Pixel te guía para crear el público “Visitantes del sitio 30 días”, del origen al nombre, y leer el resultado en la lista.' },
        tour: 'criar-publico-site', pagina: 'meta-publicos.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Criei o público de visitantes e ele diz “Abaixo de 1.000” e “Tráfego baixo no site”. Não deveria ter milhares? 😟', es: '¡Creé el público de visitantes y dice “Menos de 1.000” y “Poco tráfico en el sitio”. ¿No debería tener miles? 😟' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“O tamanho do público depende do tráfego do site: se poucas pessoas visitaram, o público é pequeno. O status “Em preenchimento” mostra que ele ainda está enchendo, e “Disponível para usar” que já pode ser usado. Não é defeito.”', es: '“El tamaño del público depende del tráfico del sitio: si pocas personas visitaron, el público es pequeño. El estado “Llenándose” muestra que todavía se está llenando, y “Disponible para usar” que ya se puede usar. No es un defecto.”' }, fb: { pt: 'Isso! Leu os status em vez de se assustar.', es: '¡Eso! Leíste los estados en lugar de asustarte.' } },
          { certa: false, txt: { pt: '“Recrie o Pixel.”', es: '“Recrea el Pixel.”' }, fb: { pt: 'Nada indica Pixel quebrado.', es: 'Nada indica un Pixel roto.' } },
          { certa: false, txt: { pt: '“Aumente a retenção para 730 dias.”', es: '“Sube la retención a 730 días.”' }, fb: { pt: 'Isso vale só para compras e não cria visitantes que não existem.', es: 'Eso vale solo para compras y no crea visitantes que no existen.' } },
          { certa: false, txt: { pt: '“Exclua o público e crie de novo.”', es: '“Elimina el público y créalo de nuevo.”' }, fb: { pt: 'Não muda o tráfego.', es: 'No cambia el tráfico.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual fonte e qual evento foram escolhidos? Qual a retenção?', es: '¿Qué origen y qué evento se eligieron? ¿Cuál es la retención?' },
          { pt: 'O Pixel está recebendo eventos (Gerenciador de Eventos)?', es: '¿El Pixel está recibiendo eventos (Administrador de eventos)?' }],
        conferir: [{ pt: 'Públicos › coluna Tamanho e Status.', es: 'Públicos › columna Tamaño y Estado.' },
          { pt: 'Gerenciador de Eventos: o Pixel recebe visitas.', es: 'Administrador de eventos: el Pixel recibe visitas.' }],
        frase: { pt: 'O público do site se enche conforme as pessoas visitam a loja. No começo ele é pequeno, e os status mostram em que etapa está.', es: 'El público del sitio se llena a medida que las personas visitan la tienda. Al comienzo es pequeño, y los estados muestran en qué etapa está.' },
        passos: [{ pt: 'Em Públicos, leia o tamanho e os status.', es: 'En Públicos, lee el tamaño y los estados.' },
          { pt: 'Confira no Gerenciador de Eventos se o Pixel recebe visitas.', es: 'Revisa en el Administrador de eventos si el Pixel recibe visitas.' }],
        encaminhar: { pt: 'Se o Pixel não recebe eventos, siga as aulas do módulo Pixel; o público depende dele.', es: 'Si el Pixel no recibe eventos, sigue las clases del módulo Pixel; el público depende de él.' }
      }
    },
    {
      id: '03', min: 8, status: 'pronta',
      titulo: { pt: 'Público semelhante', es: 'Público similar' },
      antes: { pt: 'A Marina tem públicos personalizados. Agora quer achar gente nova parecida.', es: 'Marina tiene públicos personalizados. Ahora quiere encontrar gente nueva parecida.' },
      gancho: { pt: '“Quero mais clientes como os que já compraram.” O público semelhante faz isso, se a fonte for boa.', es: '“Quiero más clientes como los que ya compraron.” El público similar hace eso, si el origen es bueno.' },
      objetivo: { pt: 'Criar um público semelhante (fonte, localização, tamanho) e entender por que uma fonte pequena é recusada.', es: 'Crear un público similar (origen, ubicación, tamaño) y entender por qué un origen pequeño es rechazado.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Como funciona o semelhante? 🤔', es: '¿Cómo funciona el similar? 🤔' }],
          ['rafa', { pt: 'Você escolhe uma fonte (um público seu, o Pixel ou a Página), um país e um tamanho. A Meta acha pessoas parecidas com a fonte, naquele país.', es: 'Eliges un origen (un público tuyo, el Pixel o la Página), un país y un tamaño. Meta encuentra personas parecidas al origen, en ese país.' }],
          ['marina', { pt: 'E o tamanho?', es: '¿Y el tamaño?' }],
          ['rafa', { pt: 'Vai de 1% a 10%. A tela explica: o 1% semelhante são as pessoas mais parecidas com a fonte; aumentar a porcentagem cria um público maior e mais amplo.', es: 'Va de 1% a 10%. La pantalla explica: el 1% similar son las personas más parecidas al origen; aumentar el porcentaje crea un público mayor y más amplio.' }],
          ['pixel', { pt: 'Se a fonte for pequena demais, a criação é recusada. Aconteceu de verdade na conta de aula, com o público pequeno de visitantes.', es: 'Si el origen es demasiado pequeño, la creación es rechazada. Pasó de verdad en la cuenta de práctica, con el público pequeño de visitantes.' }]
        ],
        pontos: [
          { pt: '<b>Fonte + país + tamanho</b> (1% a 10%).', es: '<b>Origen + país + tamaño</b> (1% a 10%).' },
          { pt: '<b>1%</b> = os mais parecidos; mais % = maior e mais amplo.', es: '<b>1%</b> = los más parecidos; más % = mayor y más amplio.' },
          { pt: '<b>Fonte pequena</b> = recusa. Melhor e maior a fonte, melhor o semelhante.', es: '<b>Origen pequeño</b> = rechazo. Cuanto mejor y mayor el origen, mejor el similar.' }
        ],
        notas: { pt: 'Passos do público semelhante e o texto do 1% vistos de verdade em 15/10/2026; a criação foi recusada com a fonte pequena da conta de aula. O texto exato da recusa e o mínimo de pessoas da fonte não foram anotados (a conferir). Os tamanhos de público no simulador são inventados.', es: 'Pasos del público similar y el texto del 1% vistos de verdad el 15/10/2026; la creación fue rechazada con el origen pequeño de la cuenta de práctica. El texto exacto del rechazo y el mínimo de personas del origen no se anotaron (por confirmar). Los tamaños de público en el simulador son inventados.' }
      },
      ferramenta: 'semelhante-ok',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva a tentar o semelhante com a fonte pequena, ver a recusa e refazer com os compradores.', es: 'En el simulador, el Pixel te lleva a intentar el similar con el origen pequeño, ver el rechazo y rehacerlo con los compradores.' },
        tour: 'criar-semelhante', pagina: 'meta-publicos.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Tentei criar um público semelhante e a tela não deixa! Já tentei três vezes! 😠', es: '¡Intenté crear un público similar y la pantalla no deja! ¡Ya probé tres veces! 😠' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Repetir com a mesma fonte dá o mesmo resultado. Vamos ver qual fonte você escolheu: se for pequena (abaixo de 1.000), a tela recusa. Escolha uma fonte maior, como os compradores, ou espere o site ganhar visitas.”', es: '“Repetir con el mismo origen da el mismo resultado. Veamos qué origen elegiste: si es pequeño (menos de 1.000), la pantalla rechaza. Elige un origen mayor, como los compradores, o espera a que el sitio gane visitas.”' }, fb: { pt: 'Isso! Achou a causa provável.', es: '¡Eso! Encontraste la causa probable.' } },
          { certa: false, txt: { pt: '“Tente de novo mais algumas vezes.”', es: '“Intenta de nuevo algunas veces más.”' }, fb: { pt: 'Com a mesma fonte, não muda.', es: 'Con el mismo origen, no cambia.' } },
          { certa: false, txt: { pt: '“É bug da Meta.”', es: '“Es un error de Meta.”' }, fb: { pt: 'Não: é fonte pequena.', es: 'No: es un origen pequeño.' } },
          { certa: false, txt: { pt: '“Aumente o tamanho para 10%.”', es: '“Sube el tamaño al 10%.”' }, fb: { pt: 'O tamanho não resolve fonte pequena.', es: 'El tamaño no resuelve un origen pequeño.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual fonte foi escolhida e quantas pessoas ela tem?', es: '¿Qué origen se eligió y cuántas personas tiene?' },
          { pt: 'O que a tela diz ao recusar?', es: '¿Qué dice la pantalla al rechazar?' }],
        conferir: [{ pt: 'Públicos › tamanho da fonte.', es: 'Públicos › tamaño del origen.' },
          { pt: 'Criar semelhante: fonte, país e tamanho.', es: 'Crear similar: origen, país y tamaño.' }],
        frase: { pt: 'O público semelhante precisa de uma fonte com pessoas suficientes. Se a fonte é pequena, a tela recusa; escolha uma fonte maior ou espere o site ganhar visitas.', es: 'El público similar necesita un origen con suficientes personas. Si el origen es pequeño, la pantalla rechaza; elige un origen mayor o espera a que el sitio gane visitas.' },
        passos: [{ pt: 'Veja o tamanho da fonte em Públicos.', es: 'Mira el tamaño del origen en Públicos.' },
          { pt: 'Escolha uma fonte maior e crie de novo.', es: 'Elige un origen mayor y crea de nuevo.' }],
        encaminhar: { pt: 'Se a fonte é grande e mesmo assim a criação é recusada, confirme o texto da tela e siga a Central de Ajuda da Meta.', es: 'Si el origen es grande y aun así la creación es rechazada, confirma el texto de la pantalla y sigue el Centro de ayuda de Meta.' }
      }
    },
    {
      id: '04', min: 8, status: 'pronta',
      titulo: { pt: 'Público salvo, controles e categorias especiais', es: 'Público guardado, controles y categorías especiales' },
      antes: { pt: 'A Marina cria públicos e quer reutilizar suas escolhas.', es: 'Marina crea públicos y quiere reutilizar sus elecciones.' },
      gancho: { pt: '“Sempre ponho Brasil e 18+ de novo!” O público salvo e os controles resolvem. Mas há assuntos que pedem cuidado.', es: '“¡Siempre pongo Brasil y 18+ de nuevo!” El público guardado y los controles lo resuelven. Pero hay temas que piden cuidado.' },
      objetivo: { pt: 'Criar um público salvo, entender os Controles do público Advantage+ e saber quando declarar uma categoria especial de anúncio.', es: 'Crear un público guardado, entender los Controles del público Advantage+ y saber cuándo declarar una categoría especial de anuncio.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Posso guardar minhas escolhas de segmentação? 🤔', es: '¿Puedo guardar mis elecciones de segmentación? 🤔' }],
          ['rafa', { pt: 'Pode: é o público salvo. Você escolhe dados demográficos, interesses e comportamentos, salva, e reutiliza em outros anúncios.', es: 'Puedes: es el público guardado. Eliges datos demográficos, intereses y comportamientos, lo guardas, y lo reutilizas en otros anuncios.' }],
          ['marina', { pt: 'E no conjunto de anúncios, o público é automático?', es: '¿Y en el conjunto de anuncios, el público es automático?' }],
          ['rafa', { pt: 'Nas campanhas de Vendas aparece Advantage+ ativado, com Controles: localização, idade mínima, idiomas. A tela avisa: “Não vamos alcançar pessoas fora destas configurações, mesmo com o Advantage+ ativado”.', es: 'En las campañas de Ventas aparece Advantage+ activado, con Controles: ubicación, edad mínima, idiomas. La pantalla avisa: “No llegaremos a personas fuera de estas configuraciones, incluso con Advantage+ activado”.' }],
          ['pixel', { pt: 'Cuidado com as categorias especiais: se o anúncio é sobre produtos e serviços financeiros, emprego, moradia, temas sociais, eleições ou política, é preciso declarar, para ajudar a evitar rejeições. Os requisitos variam por país.', es: 'Cuidado con las categorías especiales: si el anuncio es sobre productos y servicios financieros, empleo, vivienda, temas sociales, elecciones o política, hay que declararlo, para ayudar a evitar rechazos. Los requisitos varían según el país.' }]
        ],
        pontos: [
          { pt: '<b>Público salvo:</b> guarda as opções de segmentação para reutilizar.', es: '<b>Público guardado:</b> guarda las opciones de segmentación para reutilizar.' },
          { pt: '<b>Controles:</b> localização, idade mínima e idiomas valem mesmo com Advantage+.', es: '<b>Controles:</b> ubicación, edad mínima e idiomas valen incluso con Advantage+.' },
          { pt: '<b>Categorias especiais:</b> declare quando o assunto for financeiro, emprego, moradia, social ou político.', es: '<b>Categorías especiales:</b> declara cuando el tema sea financiero, empleo, vivienda, social o político.' }
        ],
        notas: { pt: 'Controles e a frase “Não vamos alcançar pessoas fora destas configurações…” vistos de verdade em 14–15/10/2026; o texto das categorias especiais vem da tela de campanha. O cartão Público salvo foi visto; a janela de criação do público salvo e interesses/comportamentos não foram vistos (a conferir).', es: 'Controles y la frase “No llegaremos a personas fuera de estas configuraciones…” vistos de verdad el 14–15/10/2026; el texto de las categorías especiales viene de la pantalla de campaña. La tarjeta Público guardado se vio; la ventana de creación del público guardado e intereses/comportamientos no se vieron (por confirmar).' }
      },
      ferramenta: 'salvo-ou-automatico',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para criar o público salvo “Brasil 18+” e mostra o aviso das categorias especiais.', es: 'En el simulador, el Pixel te guía para crear el público guardado “Brasil 18+” y muestra el aviso de las categorías especiales.' },
        tour: 'criar-salvo', pagina: 'meta-publicos.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Vou anunciar empréstimos pessoais e não consigo segmentar por idade como sempre faço! Que absurdo! 😡', es: '¡Voy a anunciar préstamos personales y no puedo segmentar por edad como siempre hago! ¡Qué absurdo! 😡' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Anúncios sobre produtos e serviços financeiros entram em uma categoria especial de anúncio, que precisa ser declarada na campanha e limita algumas opções de segmentação. Os requisitos variam por país. Vamos declarar a categoria e ver o que continua disponível.”', es: '“Los anuncios sobre productos y servicios financieros entran en una categoría especial de anuncios, que debe declararse en la campaña y limita algunas opciones de segmentación. Los requisitos varían según el país. Declaremos la categoría y veamos qué sigue disponible.”' }, fb: { pt: 'Isso! Explicou a regra sem prometer nada.', es: '¡Eso! Explicaste la regla sin prometer nada.' } },
          { certa: false, txt: { pt: '“Não declare a categoria para ter mais opções.”', es: '“No declares la categoría para tener más opciones.”' }, fb: { pt: 'Não declarar pode levar a rejeições: nunca oriente a esconder.', es: 'No declarar puede llevar a rechazos: nunca orientes a esconder.' } },
          { certa: false, txt: { pt: '“Use um público salvo, ele ignora a regra.”', es: '“Usa un público guardado, ignora la regla.”' }, fb: { pt: 'Nenhum público ignora as regras das categorias.', es: 'Ningún público ignora las reglas de las categorías.' } },
          { certa: false, txt: { pt: '“É um bug, espere uns dias.”', es: '“Es un error, espera unos días.”' }, fb: { pt: 'Não é bug: é regra para esse assunto.', es: 'No es un error: es una regla para ese tema.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O anúncio é sobre produtos e serviços financeiros, emprego, moradia, temas sociais, eleições ou política?', es: '¿El anuncio es sobre productos y servicios financieros, empleo, vivienda, temas sociales, elecciones o política?' },
          { pt: 'Qual categoria está declarada na campanha?', es: '¿Qué categoría está declarada en la campaña?' }],
        conferir: [{ pt: 'Campanha › Categorias de anúncio especiais.', es: 'Campaña › Categorías de anuncios especiales.' },
          { pt: 'Conjunto de anúncios › Público e Controles.', es: 'Conjunto de anuncios › Público y Controles.' }],
        frase: { pt: 'Alguns assuntos exigem uma categoria especial de anúncio, e isso limita a segmentação. Vamos declarar a categoria certa e ver o que continua disponível.', es: 'Algunos temas exigen una categoría especial de anuncios, y eso limita la segmentación. Declaremos la categoría correcta y veamos qué sigue disponible.' },
        passos: [{ pt: 'Na campanha, declare a categoria especial.', es: 'En la campaña, declara la categoría especial.' },
          { pt: 'No conjunto de anúncios, confira o que mudou em Público.', es: 'En el conjunto de anuncios, revisa qué cambió en Público.' }],
        encaminhar: { pt: 'Rejeições e regras de política dessas categorias são tratadas por outra área: confirme o sintoma, siga a Central de Ajuda da Meta e não prometa aprovação.', es: 'Los rechazos y las reglas de política de esas categorías los trata otra área: confirma el síntoma, sigue el Centro de ayuda de Meta y no prometas aprobación.' }
      }
    },
    {
      id: '05', min: 7, status: 'pronta',
      titulo: { pt: 'Meu público não funciona!', es: '¡Mi público no funciona!' },
      antes: { pt: 'A Marina criou públicos e anúncios, mas os números do público parecem baixos.', es: 'Marina creó públicos y anuncios, pero los números del público parecen bajos.' },
      gancho: { pt: '“Meu público está quebrado!” Quase nunca: costuma ser tráfego pequeno, uma fonte pequena ou falta de tempo.', es: '“¡Mi público está roto!” Casi nunca: suele ser poco tráfico, un origen pequeño o falta de tiempo.' },
      objetivo: { pt: 'Diagnosticar um público pequeno ou um semelhante recusado, e dizer ao cliente o que fazer enquanto os dados crescem.', es: 'Diagnosticar un público pequeño o un similar rechazado, y decirle al cliente qué hacer mientras los datos crecen.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu público de visitantes tem “Abaixo de 1.000”. E meu semelhante foi recusado. O que está errado? 😩', es: 'Mi público de visitantes tiene “Menos de 1.000”. Y mi similar fue rechazado. ¿Qué está mal? 😩' }],
          ['rafa', { pt: 'Provavelmente nada: leia os status. “Tráfego baixo no site” e “Em preenchimento” dizem que o público ainda está pequeno e enchendo. “Disponível para usar” diz que já pode ser usado.', es: 'Probablemente nada: lee los estados. “Poco tráfico en el sitio” y “Llenándose” dicen que el público todavía es pequeño y se está llenando. “Disponible para usar” dice que ya se puede usar.' }],
          ['marina', { pt: 'E o semelhante?', es: '¿Y el similar?' }],
          ['rafa', { pt: 'Foi recusado porque a fonte é pequena. Com poucos dados, não dá para o semelhante aprender o padrão.', es: 'Fue rechazado porque el origen es pequeño. Con pocos datos, el similar no puede aprender el patrón.' }],
          ['pixel', { pt: 'Enquanto o site ganha visitas: use o público automático (Advantage+) com controles de localização e idade, ou outra fonte maior, como a Página. E nunca prometa o resultado do semelhante.', es: 'Mientras el sitio gana visitas: usa el público automático (Advantage+) con controles de ubicación y edad, u otro origen mayor, como la Página. Y nunca prometas el resultado del similar.' }]
        ],
        pontos: [
          { pt: '<b>Leia os status</b> antes de concluir que há defeito.', es: '<b>Lee los estados</b> antes de concluir que hay un defecto.' },
          { pt: '<b>Semelhante recusado</b> = fonte pequena.', es: '<b>Similar rechazado</b> = origen pequeño.' },
          { pt: '<b>Enquanto os dados crescem:</b> Advantage+ com controles, ou outra fonte maior.', es: '<b>Mientras los datos crecen:</b> Advantage+ con controles, u otro origen mayor.' }
        ],
        notas: { pt: 'Tamanho “Abaixo de 1.000” e os status “Tráfego baixo no site”, “Em preenchimento” e “Disponível para usar” vistos de verdade em 15/10/2026 na conta de aula; a recusa do semelhante também. Os conselhos para o cliente são boas práticas de atendimento, não texto da tela.', es: 'Tamaño “Menos de 1.000” y los estados “Poco tráfico en el sitio”, “Llenándose” y “Disponible para usar” vistos de verdad el 15/10/2026 en la cuenta de práctica; el rechazo del similar también. Los consejos para el cliente son buenas prácticas de atención, no texto de la pantalla.' }
      },
      ferramenta: 'publico-pequeno-q',
      praticar: {
        texto: { pt: 'No simulador, o público de visitantes está pequeno. O Pixel te guia: ler os status, tentar o semelhante e ver a recusa.', es: 'En el simulador, el público de visitantes está pequeño. El Pixel te guía: leer los estados, intentar el similar y ver el rechazo.' },
        tour: 'publico-pequeno', pagina: 'meta-publicos.html?pequeno=1'
      },
      atender: {
        cena: { pt: 'Meu público é pequeno demais, a Meta não me deixa criar o semelhante e eu preciso de vendas já! Faça funcionar! 😤', es: '¡Mi público es demasiado pequeño, Meta no me deja crear el similar y necesito ventas ya! ¡Haz que funcione! 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Entendo a urgência. O público ainda é pequeno porque o site tem pouco tráfego, e o semelhante precisa de uma fonte maior. Por enquanto, podemos rodar com público automático (Advantage+), com controles de localização e idade, e criar o semelhante quando o público crescer. Não posso prometer resultado, mas é o caminho disponível.”', es: '“Entiendo la urgencia. El público todavía es pequeño porque el sitio tiene poco tráfico, y el similar necesita un origen mayor. Por ahora, podemos correr con público automático (Advantage+), con controles de ubicación y edad, y crear el similar cuando el público crezca. No puedo prometer resultados, pero es el camino disponible.”' }, fb: { pt: 'Isso! Acolheu, explicou e deu alternativa honesta.', es: '¡Eso! Acogiste, explicaste y diste una alternativa honesta.' } },
          { certa: false, txt: { pt: '“Prometo que o semelhante vai vender.”', es: '“Prometo que el similar va a vender.”' }, fb: { pt: 'Nunca prometa resultado.', es: 'Nunca prometas resultados.' } },
          { certa: false, txt: { pt: '“Compre tráfego para o site.”', es: '“Compra tráfico para el sitio.”' }, fb: { pt: 'Não é um conselho seguro nem pedido.', es: 'No es un consejo seguro ni pedido.' } },
          { certa: false, txt: { pt: '“Sem semelhante não dá para anunciar.”', es: '“Sin similar no se puede anunciar.”' }, fb: { pt: 'Dá para anunciar com público automático e controles.', es: 'Se puede anunciar con público automático y controles.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual o tamanho do público e que status aparecem?', es: '¿Cuál es el tamaño del público y qué estados aparecen?' },
          { pt: 'Qual fonte foi usada para o semelhante e o que a tela disse?', es: '¿Qué origen se usó para el similar y qué dijo la pantalla?' }],
        conferir: [{ pt: 'Públicos › Tamanho estimado e Status.', es: 'Públicos › Tamaño estimado y Estado.' },
          { pt: 'Pixel recebendo eventos no Gerenciador de Eventos.', es: 'Pixel recibiendo eventos en el Administrador de eventos.' }],
        frase: { pt: 'Público pequeno e semelhante recusado vêm de pouco tráfego e pouca fonte, e não de defeito. Enquanto os dados crescem, podemos usar público automático com controles.', es: 'Un público pequeño y un similar rechazado vienen de poco tráfico y poco origen, y no de un defecto. Mientras los datos crecen, podemos usar público automático con controles.' },
        passos: [{ pt: 'Leia os status do público em Públicos.', es: 'Lee los estados del público en Públicos.' },
          { pt: 'Rode com Advantage+ e controles, e volte ao semelhante depois.', es: 'Corre con Advantage+ y controles, y vuelve al similar después.' }],
        encaminhar: { pt: 'Se o público não enche mesmo com tráfego no site, confira o Pixel (módulo Pixel) e siga a Central de Ajuda da Meta.', es: 'Si el público no se llena aun con tráfico en el sitio, revisa el Pixel (módulo Pixel) y sigue el Centro de ayuda de Meta.' }
      }
    }
  ],
  microdados: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'Microdados: como o site fala com o catálogo', es: 'Microdatos: cómo habla el sitio con el catálogo' },
      antes: { pt: 'A Marina tem o catálogo pronto, com 8 produtos que entraram por um arquivo.', es: 'Marina tiene el catálogo listo, con 8 productos que entraron por un archivo.' },
      gancho: { pt: '“E se os produtos do site entrassem sozinhos no catálogo?” Isso depende de um detalhe no código das páginas: os microdados.', es: '“¿Y si los productos del sitio entraran solos en el catálogo?” Eso depende de un detalle en el código de las páginas: los microdatos.' },
      objetivo: { pt: 'Entender o que são microdados, por que o catálogo precisa deles e qual é a ferramenta para conferir.', es: 'Entender qué son los microdatos, por qué el catálogo los necesita y cuál es la herramienta para revisarlos.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'No catálogo eu coloquei os produtos por um arquivo. Existe um jeito de o próprio site mandar? 🤔', es: 'En el catálogo puse los productos por un archivo. ¿Existe una forma de que el propio sitio los mande? 🤔' }],
          ['rafa', { pt: 'Existe: para adicionar produtos do site automaticamente ao catálogo da Meta, as páginas precisam ter tags de microdados, junto da instalação do Pixel.', es: 'Existe: para agregar productos del sitio automáticamente al catálogo de Meta, las páginas necesitan tener etiquetas de microdatos, junto con la instalación del Pixel.' }],
          ['marina', { pt: 'E o que são microdados?', es: '¿Y qué son los microdatos?' }],
          ['rafa', { pt: 'São dados de marcação estruturados, escondidos no código da página, que dizem coisas do produto: nome, descrição, preço, estoque. Quem vê a loja não enxerga; a Meta, sim.', es: 'Son datos de marcado estructurados, escondidos en el código de la página, que dicen cosas del producto: nombre, descripción, precio, stock. Quien ve la tienda no los ve; Meta sí.' }],
          ['pixel', { pt: 'E para conferir se estão certos há uma ferramenta própria: a Ferramenta de depuração de microdados, o Microdata Debugger. Você cola a URL de uma página de produto e ela mostra o que a Meta leu.', es: 'Y para revisar si están bien hay una herramienta propia: la Herramienta de depuración de microdatos, el Microdata Debugger. Pegas la URL de una página de producto y muestra lo que Meta leyó.' }]
        ],
        pontos: [
          { pt: '<b>Microdados</b> = dados estruturados do produto no código da página.', es: '<b>Microdatos</b> = datos estructurados del producto en el código de la página.' },
          { pt: '<b>Para quê:</b> o catálogo puxar os produtos do site automaticamente.', es: '<b>Para qué:</b> que el catálogo traiga los productos del sitio automáticamente.' },
          { pt: '<b>Conferir:</b> Ferramenta de depuração de microdados (uma URL por vez).', es: '<b>Revisar:</b> Herramienta de depuración de microdatos (una URL por vez).' }
        ],
        notas: { pt: 'Ferramenta vista de verdade em 16/10/2026 em português e espanhol (textos da explicação, campo Link do site e botão), com a página de produto da Lojinha. Fonte oficial: o próprio texto da ferramenta e o link “Saiba mais” para a Central de Ajuda da Meta (artigo 1175004275966513, não lido).', es: 'Herramienta vista de verdad el 16/10/2026 en portugués y español (textos de la explicación, campo Enlace al sitio web y botón), con la página de producto de la Lojinha. Fuente oficial: el propio texto de la herramienta y el enlace “Más información” al Centro de ayuda de Meta (artículo 1175004275966513, no leído).' }
      },
      ferramenta: 'para-que-microdados',
      atender: {
        cena: { pt: 'Meu site tem 300 produtos e não quero subir arquivo toda semana. Dá para a Meta puxar sozinha do site? 🙏', es: 'Mi sitio tiene 300 productos y no quiero subir un archivo cada semana. ¿Se puede hacer que Meta los traiga sola del sitio? 🙏' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“A Meta pode adicionar produtos do site ao catálogo automaticamente se as páginas de produto tiverem tags de microdados, junto da instalação do Pixel. Vamos conferir uma página sua na ferramenta de depuração de microdados.”', es: '“Meta puede agregar productos del sitio al catálogo automáticamente si las páginas de producto tienen etiquetas de microdatos, junto con la instalación del Pixel. Revisemos una página tuya en la herramienta de depuración de microdatos.”' }, fb: { pt: 'Isso! Explicou o requisito e o primeiro passo.', es: '¡Eso! Explicaste el requisito y el primer paso.' } },
          { certa: false, txt: { pt: '“Não dá, só por arquivo.”', es: '“No se puede, solo por archivo.”' }, fb: { pt: 'Dá, com microdados nas páginas.', es: 'Se puede, con microdatos en las páginas.' } },
          { certa: false, txt: { pt: '“Basta ligar o Pixel, ele manda os produtos.”', es: '“Basta activar el Pixel, él manda los productos.”' }, fb: { pt: 'O Pixel mede eventos; os dados de produto vêm dos microdados.', es: 'El Pixel mide eventos; los datos de producto vienen de los microdatos.' } },
          { certa: false, txt: { pt: '“Passe o login do site para eu configurar.”', es: '“Pásame el acceso del sitio para configurarlo.”' }, fb: { pt: 'Nunca peça acesso: oriente o cliente ou o desenvolvedor dele.', es: 'Nunca pidas acceso: orienta al cliente o a su desarrollador.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'O site é feito em uma plataforma de loja ou sob medida? Quem cuida do código?', es: '¿El sitio está hecho en una plataforma de tienda o a medida? ¿Quién se encarga del código?' },
          { pt: 'Qual é a URL de uma página de produto?', es: '¿Cuál es la URL de una página de producto?' }],
        conferir: [{ pt: 'Ferramenta de depuração de microdados: Verificar microdados com a URL do produto.', es: 'Herramienta de depuración de microdatos: Comprobar microdatos con la URL del producto.' },
          { pt: 'Catálogo › Fontes de dados.', es: 'Catálogo › Orígenes de datos.' }],
        frase: { pt: 'Para os produtos do site entrarem sozinhos no catálogo, as páginas precisam ter microdados. Vamos conferir uma página de produto na ferramenta de depuração.', es: 'Para que los productos del sitio entren solos en el catálogo, las páginas necesitan tener microdatos. Revisemos una página de producto en la herramienta de depuración.' },
        passos: [{ pt: 'Abra a ferramenta e cole a URL de um produto.', es: 'Abre la herramienta y pega la URL de un producto.' },
          { pt: 'Clique em Verificar microdados e leia o resultado.', es: 'Haz clic en Comprobar microdatos y lee el resultado.' }],
        encaminhar: { pt: 'Adicionar ou corrigir microdados é mudança no código do site: quem faz é a plataforma da loja ou o desenvolvedor do cliente.', es: 'Agregar o corregir microdatos es un cambio en el código del sitio: lo hace la plataforma de la tienda o el desarrollador del cliente.' }
      }
    },
    {
      id: '02', min: 7, status: 'pronta',
      titulo: { pt: 'Usar o Microdata Debugger', es: 'Usar el Microdata Debugger' },
      antes: { pt: 'A Marina sabe que o site precisa de microdados. Quer conferir os da Caneca azul.', es: 'Marina sabe que el sitio necesita microdatos. Quiere revisar los de la Caneca azul.' },
      gancho: { pt: '“Como eu sei se o meu site está certo?” Cola a URL, clica, e a Meta mostra o que enxergou.', es: '“¿Cómo sé si mi sitio está bien?” Pegas la URL, haces clic, y Meta muestra lo que vio.' },
      objetivo: { pt: 'Abrir a ferramenta, verificar uma página de produto e ler a Prévia e a mensagem final.', es: 'Abrir la herramienta, verificar una página de producto y leer la vista previa y el mensaje final.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Abri a ferramenta e só tem um campo. 🤔', es: 'Abrí la herramienta y solo hay un campo. 🤔' }],
          ['rafa', { pt: 'É isso: Link do site. Coloque a URL de uma página de produto, com detalhes do inventário, e clique em Verificar microdados.', es: 'Es eso: Enlace al sitio web. Pon la URL de una página de producto, con detalles de inventario, y haz clic en Comprobar microdatos.' }],
          ['marina', { pt: 'E o que aparece?', es: '¿Y qué aparece?' }],
          ['rafa', { pt: 'Uma Prévia: “É assim que os microdados são configurados no seu site”. Embaixo, tabelas com Parâmetro e Valor: uma para OpenGraph e outra para JSON-LD, que são dois formatos de publicar os dados.', es: 'Una vista previa: “Así se configuran los microdatos en tu sitio web”. Abajo, tablas con Parámetro y Valor: una para OpenGraph y otra para JSON-LD, que son dos formatos de publicar los datos.' }],
          ['pixel', { pt: 'Se estiver tudo certo, termina com “Parabéns! Seus microdados parecem ótimos!”. Isso vale para aquela página: teste outras também.', es: 'Si está todo bien, termina con “¡Felicitaciones! ¡Tus microdatos se ven muy bien!”. Eso vale para esa página: prueba otras también.' }]
        ],
        pontos: [
          { pt: '<b>Uma página de produto por vez</b> (não a loja inteira).', es: '<b>Una página de producto por vez</b> (no toda la tienda).' },
          { pt: '<b>OpenGraph e JSON-LD:</b> dois formatos, com os mesmos dados.', es: '<b>OpenGraph y JSON-LD:</b> dos formatos, con los mismos datos.' },
          { pt: '<b>“Parabéns”</b> vale só para a página testada.', es: '<b>“Felicitaciones”</b> vale solo para la página probada.' }
        ],
        notas: { pt: 'Resultado de sucesso visto de verdade em português em 16/10/2026 com a página da Caneca azul (Prévia, OpenGraph, JSON-LD e “Parabéns!”). Em espanhol, uma nova tentativa da mesma página deu erro, e o texto de sucesso em espanhol não foi visto (a conferir).', es: 'Resultado de éxito visto de verdad en portugués el 16/10/2026 con la página de la Caneca azul (vista previa, OpenGraph, JSON-LD y “¡Felicitaciones!”). En español, un nuevo intento de la misma página dio error, y el texto de éxito en español no se vio (por confirmar).' }
      },
      ferramenta: 'usar-debugger',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para verificar a página da Caneca azul e ler a Prévia e o “Parabéns!”.', es: 'En el simulador, el Pixel te guía para verificar la página de la Caneca azul y leer la vista previa y el “¡Felicitaciones!”.' },
        tour: 'verificar-microdados', pagina: 'meta-microdados.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Testei meu site na ferramenta e deu “Parabéns”, então por que só 5 dos meus 300 produtos entraram no catálogo? 😠', es: '¡Probé mi sitio en la herramienta y dio “Felicitaciones”, entonces por qué solo 5 de mis 300 productos entraron en el catálogo? 😠' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“A ferramenta confere uma página por vez: o “Parabéns” vale só para a que você testou. Vamos testar outras páginas de produto, de tipos diferentes, e comparar quais dão erro.”', es: '“La herramienta revisa una página por vez: el “Felicitaciones” vale solo para la que probaste. Probemos otras páginas de producto, de tipos distintos, y comparemos cuáles dan error.”' }, fb: { pt: 'Isso! Explicou o alcance da ferramenta.', es: '¡Eso! Explicaste el alcance de la herramienta.' } },
          { certa: false, txt: { pt: '“A Meta demora, espere.”', es: '“Meta demora, espera.”' }, fb: { pt: 'Primeiro teste outras páginas.', es: 'Primero prueba otras páginas.' } },
          { certa: false, txt: { pt: '“O catálogo só aceita 5 produtos.”', es: '“El catálogo solo acepta 5 productos.”' }, fb: { pt: 'Não há esse limite.', es: 'No hay ese límite.' } },
          { certa: false, txt: { pt: '“Teste a página inicial.”', es: '“Prueba la página de inicio.”' }, fb: { pt: 'A página inicial não traz os dados de um produto.', es: 'La página de inicio no trae los datos de un producto.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual URL foi testada? É de um produto?', es: '¿Qué URL se probó? ¿Es de un producto?' },
          { pt: 'O resultado foi Prévia com “Parabéns” ou Erros?', es: '¿El resultado fue vista previa con “Felicitaciones” o Errores?' }],
        conferir: [{ pt: 'Tabelas OpenGraph e JSON-LD da Prévia.', es: 'Tablas OpenGraph y JSON-LD de la vista previa.' },
          { pt: 'Outras páginas de produto, de tipos diferentes.', es: 'Otras páginas de producto, de tipos distintos.' }],
        frase: { pt: 'A ferramenta confere uma página de produto por vez. Vamos testar algumas páginas diferentes e comparar os resultados.', es: 'La herramienta revisa una página de producto por vez. Probemos algunas páginas distintas y comparemos los resultados.' },
        passos: [{ pt: 'Cole a URL de um produto e verifique.', es: 'Pega la URL de un producto y verifica.' },
          { pt: 'Repita com outros produtos e compare.', es: 'Repite con otros productos y compara.' }],
        encaminhar: { pt: 'Se algumas páginas dão erro e outras não, a diferença está no código dessas páginas: oriente o cliente ou o desenvolvedor dele.', es: 'Si algunas páginas dan error y otras no, la diferencia está en el código de esas páginas: orienta al cliente o a su desarrollador.' }
      }
    },
    {
      id: '03', min: 8, status: 'pronta',
      titulo: { pt: 'Os campos que o catálogo precisa', es: 'Los campos que necesita el catálogo' },
      antes: { pt: 'A Marina viu as tabelas da Prévia, cheias de siglas.', es: 'Marina vio las tablas de la vista previa, llenas de siglas.' },
      gancho: { pt: '“id, title, price, availability… o que cada um faz?” Vamos ler a tabela como quem lê uma ficha.', es: '“id, title, price, availability… ¿qué hace cada uno?” Vamos a leer la tabla como quien lee una ficha.' },
      objetivo: { pt: 'Ler os parâmetros principais (id, title, description, price, link, image_link, availability, condition, brand) e ligar o id ao catálogo e ao Pixel.', es: 'Leer los parámetros principales (id, title, description, price, link, image_link, availability, condition, brand) y vincular el id con el catálogo y el Pixel.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Na tabela tem id, title, description, price, link, image_link, availability, condition, brand… 😵', es: 'En la tabla hay id, title, description, price, link, image_link, availability, condition, brand… 😵' }],
          ['rafa', { pt: 'É a ficha do produto. title é o nome, description a descrição, price o preço, link a página, image_link a foto, availability o estoque, condition se é novo, brand a marca.', es: 'Es la ficha del producto. title es el nombre, description la descripción, price el precio, link la página, image_link la foto, availability el stock, condition si es nuevo, brand la marca.' }],
          ['marina', { pt: 'E o id?', es: '¿Y el id?' }],
          ['rafa', { pt: 'O id é o mais importante: ele é o CANECA_01, o mesmo código da Identificação do conteúdo no catálogo. É ele que liga a página ao produto, e o evento do Pixel ao produto (lembra do content_id?).', es: 'El id es el más importante: es CANECA_01, el mismo código del Identificador de contenido en el catálogo. Es el que une la página con el producto, y el evento del Pixel con el producto (¿recuerdas el content_id?).' }],
          ['pixel', { pt: 'O preço aparece como 49.90 BRL: número com ponto e a moeda. E availability diz “in stock” ou “out of stock”.', es: 'El precio aparece como 49.90 BRL: número con punto y la moneda. Y availability dice “in stock” o “out of stock”.' }]
        ],
        pontos: [
          { pt: '<b>id</b> = Identificação do conteúdo do catálogo (e content_id do Pixel).', es: '<b>id</b> = Identificador de contenido del catálogo (y content_id del Pixel).' },
          { pt: '<b>price</b> = número com ponto + moeda (49.90 BRL).', es: '<b>price</b> = número con punto + moneda (49.90 BRL).' },
          { pt: '<b>availability</b> = in stock / out of stock, e os valores iguais nos dois formatos.', es: '<b>availability</b> = in stock / out of stock, y los valores iguales en los dos formatos.' }
        ],
        notas: { pt: 'Parâmetros e valores vistos de verdade em 16/10/2026 (OpenGraph: id, title, description, price, link, image_link, availability, condition, brand, additional_image_link; JSON-LD: sem condition e additional_image_link). Os significados de cada campo são os nomes do próprio catálogo; a lista completa de parâmetros aceitos não foi lida (a conferir).', es: 'Parámetros y valores vistos de verdad el 16/10/2026 (OpenGraph: id, title, description, price, link, image_link, availability, condition, brand, additional_image_link; JSON-LD: sin condition y additional_image_link). Los significados de cada campo son los nombres del propio catálogo; la lista completa de parámetros aceptados no se leyó (por confirmar).' }
      },
      ferramenta: 'campo-microdados',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te leva pelos campos da Prévia: id, price, availability e a diferença entre OpenGraph e JSON-LD.', es: 'En el simulador, el Pixel te lleva por los campos de la vista previa: id, price, availability y la diferencia entre OpenGraph y JSON-LD.' },
        tour: 'ler-campos', pagina: 'meta-microdados.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Na ferramenta, o id da minha página é “caneca-azul”, mas no catálogo é CANECA_01. Isso importa? 🤔', es: 'En la herramienta, el id de mi página es “caneca-azul”, pero en el catálogo es CANECA_01. ¿Eso importa? 🤔' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Importa: o id da página precisa ser igual à Identificação do conteúdo no catálogo (CANECA_01); é ele que liga o produto, e o evento do Pixel, ao catálogo. Vale ajustar o site, ou o catálogo, para os dois usarem o mesmo código.”', es: '“Importa: el id de la página debe ser igual al Identificador de contenido en el catálogo (CANECA_01); es el que une el producto, y el evento del Pixel, con el catálogo. Conviene ajustar el sitio, o el catálogo, para que los dos usen el mismo código.”' }, fb: { pt: 'Isso! Ligou microdados, catálogo e Pixel.', es: '¡Eso! Uniste microdatos, catálogo y Pixel.' } },
          { certa: false, txt: { pt: '“Não importa, a Meta entende pelo nome.”', es: '“No importa, Meta entiende por el nombre.”' }, fb: { pt: 'A Meta compara ids, não nomes.', es: 'Meta compara ids, no nombres.' } },
          { certa: false, txt: { pt: '“Apague o catálogo.”', es: '“Elimina el catálogo.”' }, fb: { pt: 'Exagero: basta alinhar os ids.', es: 'Exagerado: basta alinear los ids.' } },
          { certa: false, txt: { pt: '“Escreva o id no título do produto.”', es: '“Escribe el id en el título del producto.”' }, fb: { pt: 'O id é um campo próprio.', es: 'El id es un campo propio.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual é o id mostrado na ferramenta? E a Identificação do conteúdo no catálogo?', es: '¿Cuál es el id mostrado en la herramienta? ¿Y el Identificador de contenido en el catálogo?' },
          { pt: 'O preço aparece como número com moeda (ex.: 49.90 BRL)?', es: '¿El precio aparece como número con moneda (ej.: 49.90 BRL)?' }],
        conferir: [{ pt: 'Tabela da Prévia: id, price, availability.', es: 'Tabla de la vista previa: id, price, availability.' },
          { pt: 'Catálogo › Produtos › Identificação do conteúdo.', es: 'Catálogo › Productos › Identificador de contenido.' }],
        frase: { pt: 'O id da página precisa ser igual à Identificação do conteúdo no catálogo. Vamos comparar os dois e alinhar.', es: 'El id de la página debe ser igual al Identificador de contenido en el catálogo. Comparemos los dos y alineemos.' },
        passos: [{ pt: 'Veja o id na Prévia da ferramenta.', es: 'Mira el id en la vista previa de la herramienta.' },
          { pt: 'Compare com a Identificação do conteúdo no catálogo.', es: 'Compara con el Identificador de contenido en el catálogo.' }],
        encaminhar: { pt: 'Mudar o id nas páginas do site é trabalho do site do cliente; mudar no catálogo, da fonte de dados. Oriente o cliente sobre qual lado ajustar.', es: 'Cambiar el id en las páginas del sitio es trabajo del sitio del cliente; cambiarlo en el catálogo, del origen de datos. Orienta al cliente sobre qué lado ajustar.' }
      }
    },
    {
      id: '04', min: 8, status: 'pronta',
      titulo: { pt: '“Falha na validação de dados”', es: '“Error al validar los datos”' },
      antes: { pt: 'A Marina testou a página do Boné e a ferramenta mostrou Erros.', es: 'Marina probó la página de la Gorra y la herramienta mostró Errores.' },
      gancho: { pt: '“Deu erro e não diz o quê!” Vamos achar a causa comparando com uma página que funciona.', es: '“¡Dio error y no dice qué!” Vamos a encontrar la causa comparando con una página que funciona.' },
      objetivo: { pt: 'Ler a tela de erro, achar a causa comparando com uma página boa e orientar o cliente sem mexer no site.', es: 'Leer la pantalla de error, encontrar la causa comparando con una página buena y orientar al cliente sin tocar el sitio.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Apareceu “Erros: os produtos no seu site não podem ser adicionados automaticamente ao seu catálogo devido a esses problemas”. E embaixo só “Falha na validação de dados”. 😩', es: 'Apareció “Errores: estos problemas impiden que los productos de tu sitio web se agreguen al catálogo automáticamente”. Y abajo solo “Error al validar los datos”. 😩' }],
          ['rafa', { pt: 'É um aviso geral, que não aponta o campo. O truque é comparar: teste uma página do mesmo site que funcione e veja o que a página com erro não tem ou tem diferente.', es: 'Es un aviso general, que no señala el campo. El truco es comparar: prueba una página del mismo sitio que funcione y mira qué no tiene o qué tiene distinto la página con error.' }],
          ['marina', { pt: 'E se eu testar o carrinho?', es: '¿Y si pruebo el carrito?' }],
          ['rafa', { pt: 'Também dá erro, porque carrinho e página inicial não trazem dados de um produto. Teste sempre uma página de produto.', es: 'También da error, porque el carrito y la página de inicio no traen datos de un producto. Prueba siempre una página de producto.' }],
          ['pixel', { pt: 'Causas comuns: faltar o id ou o preço, ou o preço vir como texto (“R$ 54,90”). Quem corrige é o site do cliente ou a plataforma da loja: você mostra a diferença e orienta.', es: 'Causas comunes: faltar el id o el precio, o que el precio venga como texto (“R$ 54,90”). Quien corrige es el sitio del cliente o la plataforma de la tienda: tú muestras la diferencia y orientas.' }]
        ],
        pontos: [
          { pt: '<b>Erro geral:</b> “Falha na validação de dados” não diz o campo.', es: '<b>Error general:</b> “Error al validar los datos” no dice el campo.' },
          { pt: '<b>Compare</b> com uma página de produto que funciona.', es: '<b>Compara</b> con una página de producto que funciona.' },
          { pt: '<b>Teste páginas de produto</b>, não carrinho nem página inicial.', es: '<b>Prueba páginas de producto</b>, no carrito ni página de inicio.' }
        ],
        notas: { pt: 'Tela de erro vista de verdade em 16/10/2026 em português e espanhol (com a página do carrinho, e, em espanhol, também numa nova tentativa da página de produto). As causas comuns e os casos “sem preço”, “sem id” e “preço em texto” do simulador são nossos, a partir do que a ferramenta lê (a tela real não aponta o campo: a conferir). Uma falha pode também ser momentânea; a causa da falha em espanhol não foi apurada.', es: 'Pantalla de error vista de verdad el 16/10/2026 en portugués y español (con la página del carrito y, en español, también en un nuevo intento de la página de producto). Las causas comunes y los casos “sin precio”, “sin id” y “precio en texto” del simulador son nuestros, a partir de lo que lee la herramienta (la pantalla real no señala el campo: por confirmar). Un fallo también puede ser momentáneo; la causa del fallo en español no se determinó.' }
      },
      ferramenta: 'por-que-erro-microdados',
      praticar: {
        texto: { pt: 'No simulador, a página do Boné dá erro. O Pixel te guia para comparar com a página da Caneca azul e achar o que falta.', es: 'En el simulador, la página de la Gorra da error. El Pixel te guía para comparar con la página de la Caneca azul y encontrar lo que falta.' },
        tour: 'erro-microdados', pagina: 'meta-microdados.html?zerar=1'
      },
      atender: {
        cena: { pt: 'A ferramenta diz “Falha na validação de dados” e não diz o que consertar! Isso é inútil! Resolve você! 😡', es: '¡La herramienta dice “Error al validar los datos” y no dice qué arreglar! ¡Eso es inútil! ¡Resuélvelo tú! 😡' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Entendo, o aviso é geral mesmo. Vamos descobrir juntos: teste uma página de produto que funcione e compare com a que dá erro, campo por campo (id, preço, estoque). A correção é no código do site ou na plataforma da loja, e eu te mostro exatamente o que está diferente.”', es: '“Entiendo, el aviso es general de verdad. Descubrámoslo juntos: prueba una página de producto que funcione y compárala con la que da error, campo por campo (id, precio, stock). La corrección es en el código del sitio o en la plataforma de la tienda, y te muestro exactamente qué está distinto.”' }, fb: { pt: 'Isso! Acolheu, deu método e deixou claro quem corrige.', es: '¡Eso! Acogiste, diste método y dejaste claro quién corrige.' } },
          { certa: false, txt: { pt: '“É assim mesmo, não tem o que fazer.”', es: '“Es así, no hay nada que hacer.”' }, fb: { pt: 'Há método: comparar com uma página boa.', es: 'Hay método: comparar con una página buena.' } },
          { certa: false, txt: { pt: '“Me passe o acesso ao site que eu corrijo.”', es: '“Pásame el acceso al sitio y yo lo corrijo.”' }, fb: { pt: 'Nunca peça acesso: oriente.', es: 'Nunca pidas acceso: orienta.' } },
          { certa: false, txt: { pt: '“Tente de novo 10 vezes.”', es: '“Intenta de nuevo 10 veces.”' }, fb: { pt: 'Se a página não mudou, o resultado não muda (embora uma falha momentânea possa passar).', es: 'Si la página no cambió, el resultado no cambia (aunque un fallo momentáneo pueda pasar).' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual URL deu erro? É uma página de produto?', es: '¿Qué URL dio error? ¿Es una página de producto?' },
          { pt: 'Existe uma página de produto do mesmo site que funcione?', es: '¿Existe una página de producto del mismo sitio que funcione?' }],
        conferir: [{ pt: 'Compare as tabelas das duas páginas: id, price, availability.', es: 'Compara las tablas de las dos páginas: id, price, availability.' },
          { pt: 'Preço como número com moeda (49.90 BRL).', es: 'Precio como número con moneda (49.90 BRL).' }],
        frase: { pt: 'O aviso da ferramenta é geral, então comparamos com uma página que funciona para ver o que está faltando ou diferente. A correção é feita no site do cliente.', es: 'El aviso de la herramienta es general, así que comparamos con una página que funciona para ver qué falta o qué es distinto. La corrección se hace en el sitio del cliente.' },
        passos: [{ pt: 'Teste uma página de produto boa e a com erro.', es: 'Prueba una página de producto buena y la que da error.' },
          { pt: 'Mostre ao cliente a diferença entre as tabelas.', es: 'Muestra al cliente la diferencia entre las tablas.' }],
        encaminhar: { pt: 'Corrigir microdados é mudança no site: a plataforma da loja ou o desenvolvedor do cliente faz. Se ainda houver dúvida, siga a Central de Ajuda da Meta (artigo da ferramenta).', es: 'Corregir microdatos es un cambio en el sitio: lo hace la plataforma de la tienda o el desarrollador del cliente. Si aún hay duda, sigue el Centro de ayuda de Meta (artículo de la herramienta).' }
      }
    }
  ],
  entrega: (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA_CENTRAL = L('Conteúdo da Central de Ajuda da Meta lida em 16/10/2026 (fase de aprendizado, edições significativas, solução de problemas de veiculação). Colunas, status e avisos vistos de verdade no Gerenciador de Anúncios em português e espanhol. Os números do simulador (resultados, dias, o limiar de 50% do orçamento) e a caixa “?” são do treino (a conferir).', L('', '').es);
    NOTA_CENTRAL.es = 'Contenido del Centro de ayuda de Meta leído el 16/10/2026 (fase de aprendizaje, ediciones significativas, solución de problemas de entrega). Columnas, estados y avisos vistos de verdad en el Administrador de anuncios en portugués y español. Los números del simulador (resultados, días, el umbral del 50 % del presupuesto) y la caja “?” son del entrenamiento (por confirmar).';
    var FERR = L('Gerenciador de Anúncios › Conjuntos de anúncios.', 'Administrador de anuncios › Conjuntos de anuncios.');
    return [
      {
        id: '01', min: 6, status: 'pronta',
        titulo: L('A fase de aprendizado', 'La fase de aprendizaje'),
        antes: L('A Marina publicou as campanhas da Lojinha. No dia seguinte, os conjuntos mostram “Aprendizado” e ela acha que algo quebrou.', 'Marina publicó las campañas de la Lojinha. Al día siguiente, los conjuntos muestran “Aprendizaje” y ella cree que algo se rompió.'),
        gancho: L('“Está escrito Aprendizado, travou?” Calma: é o começo normal de todo anúncio.', '“Dice Aprendizaje, ¿se trabó?” Calma: es el comienzo normal de todo anuncio.'),
        objetivo: L('Entender o que é a fase de aprendizado, quando ela aparece e por que não se deve mexer à toa.', 'Entender qué es la fase de aprendizaje, cuándo aparece y por qué no hay que tocar sin motivo.'),
        entender: {
          dialogo: [
            ['marina', L('Publiquei ontem e na tabela está “Aprendizado”. Os anúncios estão quebrados? 😰', 'Publiqué ayer y en la tabla dice “Aprendizaje”. ¿Los anuncios están rotos? 😰')],
            ['rafa', L('Não. A fase de aprendizado é o período em que o sistema de veiculação ainda aprende como o conjunto pode ser veiculado e qual desempenho pode ter.', 'No. La fase de aprendizaje es el período en que el sistema de entrega todavía aprende cómo puede entregarse el conjunto y qué rendimiento puede tener.')],
            ['marina', L('E quando acaba?', '¿Y cuándo termina?')],
            ['rafa', L('Quando o desempenho se estabiliza: normalmente depois de cerca de 50 resultados na semana seguinte à última edição significativa.', 'Cuando el rendimiento se estabiliza: normalmente después de unos 50 resultados en la semana siguiente a la última edición significativa.')],
            ['pixel', L('Aparece em conjunto novo e depois de uma edição significativa. Durante o aprendizado o desempenho é menos estável: por isso, quanto menos mexer, melhor.', 'Aparece en un conjunto nuevo y después de una edición significativa. Durante el aprendizaje el rendimiento es menos estable: por eso, cuanto menos se toque, mejor.')]
          ],
          pontos: [
            L('<b>Aprendizado</b> = o sistema ainda está aprendendo; é normal no começo.', '<b>Aprendizaje</b> = el sistema todavía está aprendiendo; es normal al comienzo.'),
            L('<b>Sai</b> quando estabiliza: cerca de 50 resultados na semana após a última edição significativa.', '<b>Sale</b> cuando se estabiliza: unos 50 resultados en la semana posterior a la última edición significativa.'),
            L('<b>Volta</b> se houver uma edição significativa. Edite só com bom motivo.', '<b>Vuelve</b> si hay una edición significativa. Edita solo con buen motivo.')
          ],
          notas: NOTA_CENTRAL
        },
        ferramenta: 'o-que-e-aprendizado',
        atender: {
          cena: L('Meu anúncio está em “Aprendizado” há 2 dias. Está com defeito? Quero que você conserte! 😠', 'Mi anuncio está en “Aprendizaje” hace 2 días. ¿Tiene un defecto? ¡Quiero que lo arregles! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Não é defeito: todo conjunto novo passa pela fase de aprendizado, em que o sistema ainda aprende como veicular. Ela costuma terminar depois de cerca de 50 resultados na semana. O melhor agora é não editar sem necessidade, porque algumas edições reiniciam o aprendizado.”', '“No es un defecto: todo conjunto nuevo pasa por la fase de aprendizaje, en la que el sistema todavía aprende cómo entregar. Suele terminar después de unos 50 resultados en la semana. Lo mejor ahora es no editar sin necesidad, porque algunas ediciones reinician el aprendizaje.”'), fb: L('Isso! Tranquilizou e deu a regra de ouro.', '¡Eso! Tranquilizaste y diste la regla de oro.') },
            { certa: false, txt: L('“Sim, está quebrado. Vou apagar e criar de novo.”', '“Sí, está roto. Voy a borrarlo y crearlo de nuevo.”'), fb: L('Recriar só reinicia o aprendizado do zero.', 'Recrearlo solo reinicia el aprendizaje desde cero.') },
            { certa: false, txt: L('“Aumente o orçamento em 10 vezes para sair logo.”', '“Aumenta el presupuesto 10 veces para salir pronto.”'), fb: L('Mudança grande de orçamento pode ser edição significativa e não garante sair do aprendizado.', 'Un cambio grande de presupuesto puede ser una edición significativa y no garantiza salir del aprendizaje.') },
            { certa: false, txt: L('“Me passe o acesso à conta que eu mexo.”', '“Pásame el acceso a la cuenta y yo lo toco.”'), fb: L('Nunca peça acesso: oriente o cliente.', 'Nunca pidas acceso: orienta al cliente.') }
          ]
        },
        cola: {
          perguntas: [L('Há quantos dias o conjunto está publicado? Houve alguma edição?', '¿Hace cuántos días está publicado el conjunto? ¿Hubo alguna edición?'), L('O que aparece na coluna Veiculação?', '¿Qué aparece en la columna Entrega?')],
          conferir: [FERR, L('Coluna Veiculação e a data da última edição significativa.', 'Columna Entrega y la fecha de la última edición significativa.')],
          frase: L('A fase de aprendizado é normal em conjuntos novos: o sistema ainda aprende como veicular. Vamos esperar sem editar, porque algumas edições reiniciam o aprendizado.', 'La fase de aprendizaje es normal en conjuntos nuevos: el sistema todavía aprende cómo entregar. Esperemos sin editar, porque algunas ediciones reinician el aprendizaje.'),
          passos: [L('Veja o status do conjunto na coluna Veiculação.', 'Mira el estado del conjunto en la columna Entrega.'), L('Combine com o cliente de esperar sem editar.', 'Acuerda con el cliente esperar sin editar.')],
          encaminhar: L('Aprendizado não é problema para resolver: é orientar o cliente a esperar. Se aparecer outro aviso na conta, siga a mensagem e a Central de Ajuda da Meta.', 'El aprendizaje no es un problema para resolver: es orientar al cliente a esperar. Si aparece otro aviso en la cuenta, sigue el mensaje y el Centro de ayuda de Meta.')
        }
      },
      {
        id: '02', min: 7, status: 'pronta',
        titulo: L('Ler a coluna Veiculação', 'Leer la columna Entrega'),
        antes: L('A Marina quer saber como cada conjunto está, de uma olhada só.', 'Marina quiere saber cómo está cada conjunto, de un vistazo.'),
        gancho: L('Uma coluna conta a história: Ativo, Aprendizado, Em análise, Desativado…', 'Una columna cuenta la historia: Activo, Aprendizaje, En revisión, Desactivado…'),
        objetivo: L('Ler a coluna Veiculação, o card “% gastos na fase de aprendizado” e saber o que falta para sair do aprendizado.', 'Leer la columna Entrega, la tarjeta “% de gasto en la fase de aprendizaje” y saber qué falta para salir del aprendizaje.'),
        entender: {
          dialogo: [
            ['marina', L('Na tabela de conjuntos tem a coluna Veiculação. O que ela diz? 🤔', 'En la tabla de conjuntos hay una columna Entrega. ¿Qué dice? 🤔')],
            ['rafa', L('Ela mostra o estado de cada conjunto: Ativo (veiculando bem), Aprendizado, Aprendizado limitado, Em análise, Desativado…', 'Muestra el estado de cada conjunto: Activo (entregando bien), Aprendizaje, Aprendizaje limitado, En revisión, Desactivado…')],
            ['marina', L('E esses resultados ao lado?', '¿Y esos resultados al lado?')],
            ['rafa', L('Contam os resultados desde a última edição significativa. Perto de 50 é o ponto em que o conjunto costuma sair do aprendizado.', 'Cuentan los resultados desde la última edición significativa. Cerca de 50 es el punto en que el conjunto suele salir del aprendizaje.')],
            ['pixel', L('Ainda tem um card no topo: “% gastos na fase de aprendizado”. Mostra quanto do dinheiro gasto está em conjuntos que ainda aprendem.', 'Además hay una tarjeta arriba: “% de gasto en la fase de aprendizaje”. Muestra cuánto del dinero gastado está en conjuntos que todavía aprenden.')]
          ],
          pontos: [
            L('<b>Veiculação</b> = estado de cada conjunto.', '<b>Entrega</b> = estado de cada conjunto.'),
            L('<b>Resultados</b> contam desde a última edição significativa.', '<b>Resultados</b> cuentan desde la última edición significativa.'),
            L('<b>% gastos no aprendizado</b> = peso do aprendizado no gasto total.', '<b>% de gasto en aprendizaje</b> = peso del aprendizaje en el gasto total.')
          ],
          notas: NOTA_CENTRAL
        },
        ferramenta: 'ler-veiculacao',
        praticar: {
          texto: L('No simulador, o Pixel te guia pela coluna Veiculação e deixa o tempo passar para ver quem sai do aprendizado.', 'En el simulador, el Pixel te guía por la columna Entrega y deja pasar el tiempo para ver quién sale del aprendizaje.'),
          tour: 'ler-aprendizado', pagina: 'meta-entrega.html?exemplo=1'
        },
        atender: {
          cena: L('Minha caneca tem 27 resultados e a camiseta 9. Quando elas saem do aprendizado? ⏳', 'Mi taza tiene 27 resultados y la camiseta 9. ¿Cuándo salen del aprendizaje? ⏳'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Elas saem quando o desempenho se estabiliza, normalmente depois de cerca de 50 resultados na semana seguinte à última edição significativa. A caneca está mais perto. Se ninguém editar, a contagem segue sozinha.”', '“Salen cuando el rendimiento se estabiliza, normalmente después de unos 50 resultados en la semana siguiente a la última edición significativa. La taza está más cerca. Si nadie edita, el conteo sigue solo.”'), fb: L('Isso! Deu a referência e o que fazer.', '¡Eso! Diste la referencia y qué hacer.') },
            { certa: false, txt: L('“Saem em 24 horas, sempre.”', '“Salen en 24 horas, siempre.”'), fb: L('Não há prazo fixo: depende dos resultados.', 'No hay plazo fijo: depende de los resultados.') },
            { certa: false, txt: L('“Só saem se você pagar mais.”', '“Solo salen si pagas más.”'), fb: L('Pagar mais não é regra; depende de estabilizar.', 'Pagar más no es la regla; depende de estabilizarse.') },
            { certa: false, txt: L('“Quando a Meta quiser.”', '“Cuando Meta quiera.”'), fb: L('Há uma referência clara: cerca de 50 resultados.', 'Hay una referencia clara: unos 50 resultados.') }
          ]
        },
        cola: {
          perguntas: [L('Quantos resultados cada conjunto tem? Houve edição recente?', '¿Cuántos resultados tiene cada conjunto? ¿Hubo edición reciente?'), L('O card “% gastos na fase de aprendizado” mostra quanto?', '¿Cuánto muestra la tarjeta “% de gasto en la fase de aprendizaje”?')],
          conferir: [FERR, L('Coluna Resultados e Última edição significativa.', 'Columna Resultados y Última edición significativa.')],
          frase: L('O conjunto sai do aprendizado quando estabiliza, normalmente depois de cerca de 50 resultados na semana após a última edição significativa. Vamos acompanhar a coluna Veiculação.', 'El conjunto sale del aprendizaje cuando se estabiliza, normalmente después de unos 50 resultados en la semana posterior a la última edición significativa. Sigamos la columna Entrega.'),
          passos: [L('Abra Conjuntos de anúncios e olhe Veiculação e Resultados.', 'Abre Conjuntos de anuncios y mira Entrega y Resultados.'), L('Compare com a data da última edição significativa.', 'Compara con la fecha de la última edición significativa.')],
          encaminhar: L('Se o conjunto não chegar a resultados suficientes, veja a aula 04 (aprendizado limitado).', 'Si el conjunto no llega a resultados suficientes, mira la clase 04 (aprendizaje limitado).')
        }
      },
      {
        id: '03', min: 8, status: 'pronta',
        titulo: L('Edições significativas', 'Ediciones significativas'),
        antes: L('A Marina quer trocar o público e a foto da Caneca azul para “testar”.', 'Marina quiere cambiar el público y la foto de la Caneca azul para “probar”.'),
        gancho: L('Nem toda edição é igual: algumas mexem pouco, outras zeram o aprendizado.', 'No toda edición es igual: algunas tocan poco, otras ponen a cero el aprendizaje.'),
        objetivo: L('Saber quais edições reiniciam o aprendizado e decidir se vale editar.', 'Saber qué ediciones reinician el aprendizaje y decidir si vale editar.'),
        entender: {
          dialogo: [
            ['marina', L('Mudei o orçamento de 25 para 26 e nada aconteceu. Aí troquei o público e tudo zerou! 😵', 'Cambié el presupuesto de 25 a 26 y no pasó nada. Luego cambié el público y ¡todo se puso a cero! 😵')],
            ['rafa', L('É isso: existem as edições significativas. Segundo a Central de Ajuda, são mudanças no direcionamento (público), no criativo, no evento de otimização, na estratégia de lance, adicionar um anúncio ou pausar por 7 dias ou mais.', 'Eso: existen las ediciones significativas. Según el Centro de ayuda, son cambios en la segmentación (público), en el creativo, en el evento de optimización, en la estrategia de puja, agregar un anuncio o pausar por 7 días o más.')],
            ['marina', L('E o orçamento?', '¿Y el presupuesto?')],
            ['rafa', L('Poderá ou não: depende do tamanho da mudança. De 100 para 101 provavelmente não; uma mudança grande pode.', 'Puede serlo o no: depende del tamaño del cambio. De 100 a 101 probablemente no; un cambio grande puede serlo.')],
            ['pixel', L('Na dúvida, planeje as mudanças, faça de uma vez e espere os resultados. O botão Editar do simulador mostra o aviso na hora.', 'Ante la duda, planifica los cambios, hazlos de una vez y espera los resultados. El botón Editar del simulador muestra el aviso en el momento.')]
          ],
          pontos: [
            L('<b>Reiniciam:</b> público, criativo, evento de otimização, lance, novo anúncio, pausa de 7+ dias.', '<b>Reinician:</b> público, creativo, evento de optimización, puja, anuncio nuevo, pausa de 7+ días.'),
            L('<b>Orçamento:</b> poderá ou não, conforme o tamanho (no simulador, 50% ou mais).', '<b>Presupuesto:</b> puede serlo o no, según el tamaño (en el simulador, 50 % o más).'),
            L('<b>Boa prática:</b> evite edições desnecessárias.', '<b>Buena práctica:</b> evita ediciones innecesarias.')
          ],
          notas: NOTA_CENTRAL
        },
        ferramenta: 'edicao-significativa-q',
        praticar: {
          texto: L('No simulador, o Pixel te guia por uma edição pequena (orçamento 25→26) e uma grande (trocar o público), e você vê o aprendizado zerar.', 'En el simulador, el Pixel te guía por una edición pequeña (presupuesto 25→26) y una grande (cambiar el público), y ves el aprendizaje ponerse a cero.'),
          tour: 'edicao-significativa', pagina: 'meta-entrega.html?exemplo=1'
        },
        atender: {
          cena: L('Eu troco o público e a foto todo dia pra ver qual funciona. Por que nunca sai do aprendizado? 😤', 'Cambio el público y la foto todos los días para ver cuál funciona. ¿Por qué nunca sale del aprendizaje? 😤'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Trocar o público ou o criativo é uma edição significativa: cada troca reinicia a fase de aprendizado e zera a contagem de resultados. Vamos planejar: fazer as mudanças de uma vez, esperar os resultados e só então decidir.”', '“Cambiar el público o el creativo es una edición significativa: cada cambio reinicia la fase de aprendizaje y pone a cero el conteo de resultados. Planifiquemos: hacer los cambios de una vez, esperar los resultados y solo entonces decidir.”'), fb: L('Isso! Explicou a causa e deu um plano.', '¡Eso! Explicaste la causa y diste un plan.') },
            { certa: false, txt: L('“É um erro da Meta, vai passar.”', '“Es un error de Meta, ya pasará.”'), fb: L('Não é erro: é efeito das edições.', 'No es un error: es efecto de las ediciones.') },
            { certa: false, txt: L('“Continue trocando, mais rápido.”', '“Sigue cambiando, más rápido.”'), fb: L('Isso piora: nunca sai do aprendizado.', 'Eso empeora: nunca sale del aprendizaje.') },
            { certa: false, txt: L('“Crie uma conta nova.”', '“Crea una cuenta nueva.”'), fb: L('Exagero e não resolve a causa.', 'Exagerado y no resuelve la causa.') }
          ]
        },
        cola: {
          perguntas: [L('O que foi editado e quando?', '¿Qué se editó y cuándo?'), L('A coluna Última edição significativa mostra que dia?', '¿Qué día muestra la columna Última edición significativa?')],
          conferir: [FERR, L('Central de Ajuda da Meta: edições significativas.', 'Centro de ayuda de Meta: ediciones significativas.')],
          frase: L('Algumas edições reiniciam o aprendizado, como trocar público ou criativo. Vamos planejar as mudanças e fazê-las de uma vez.', 'Algunas ediciones reinician el aprendizaje, como cambiar público o creativo. Planifiquemos los cambios y hagámoslos de una vez.'),
          passos: [L('Liste o que o cliente quer mudar.', 'Haz la lista de lo que el cliente quiere cambiar.'), L('Faça de uma vez e espere os resultados.', 'Hazlo de una vez y espera los resultados.')],
          encaminhar: L('Se o cliente quiser testar versões, ajude a planejar o teste antes de editar o conjunto atual.', 'Si el cliente quiere probar versiones, ayúdalo a planificar la prueba antes de editar el conjunto actual.')
        }
      },
      {
        id: '04', min: 8, status: 'pronta',
        titulo: L('Aprendizado limitado', 'Aprendizaje limitado'),
        antes: L('A “Camiseta Montanha” da Marina passou dias e ficou em “Aprendizado limitado”.', 'La “Camiseta Montaña” de Marina pasó días y quedó en “Aprendizaje limitado”.'),
        gancho: L('Não é defeito: é um aviso de que faltam resultados.', 'No es un defecto: es un aviso de que faltan resultados.'),
        objetivo: L('Entender o “Aprendizado limitado” e o que fazer para o conjunto aprender.', 'Entender el “Aprendizaje limitado” y qué hacer para que el conjunto aprenda.'),
        entender: {
          dialogo: [
            ['marina', L('A camiseta passou da semana e continua “Aprendizado limitado”. Fiz algo errado? 😟', 'La camiseta pasó la semana y sigue en “Aprendizaje limitado”. ¿Hice algo mal? 😟')],
            ['rafa', L('Não é erro. Quer dizer que o conjunto não está tendo resultados suficientes para sair do aprendizado.', 'No es un error. Quiere decir que el conjunto no está teniendo resultados suficientes para salir del aprendizaje.')],
            ['marina', L('E o que eu faço?', '¿Y qué hago?')],
            ['rafa', L('A Central de Ajuda dá boas práticas: usar orçamentos realistas, evitar edições desnecessárias e combinar conjuntos de anúncios semelhantes, porque assim os aprendizados também se combinam.', 'El Centro de ayuda da buenas prácticas: usar presupuestos realistas, evitar ediciones innecesarias y combinar conjuntos de anuncios parecidos, porque así los aprendizajes también se combinan.')],
            ['pixel', L('Com poucos resultados, o desempenho fica menos estável e o custo por resultado costuma ser mais alto. Por isso vale agir.', 'Con pocos resultados, el rendimiento queda menos estable y el costo por resultado suele ser más alto. Por eso vale la pena actuar.')]
          ],
          pontos: [
            L('<b>Limitado</b> = faltam resultados, não é defeito.', '<b>Limitado</b> = faltan resultados, no es un defecto.'),
            L('<b>Orçamento realista</b> (nem baixo demais nem inflado).', '<b>Presupuesto realista</b> (ni demasiado bajo ni inflado).'),
            L('<b>Combine</b> conjuntos semelhantes e evite editar à toa.', '<b>Combina</b> conjuntos parecidos y evita editar sin motivo.')
          ],
          notas: NOTA_CENTRAL
        },
        ferramenta: 'aprendizado-limitado-q',
        praticar: {
          texto: L('No simulador, a camiseta fica em “Aprendizado limitado” (ícone de aviso). O Pixel te guia pelos números e pelo significado do status, com o que fazer.', 'En el simulador, la camiseta queda en “Aprendizaje limitado” (ícono de aviso). El Pixel te guía por los números y por el significado del estado, con qué hacer.'),
          tour: 'aprendizado-limitado', pagina: 'meta-entrega.html?exemplo=1'
        },
        atender: {
          cena: L('Meu conjunto está em “Aprendizado limitado”. O anúncio é ruim? Quero desistir! 😩', 'Mi conjunto está en “Aprendizaje limitado”. ¿El anuncio es malo? ¡Quiero rendirme! 😩'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Não é um defeito nem quer dizer que o anúncio é ruim: o conjunto não teve resultados suficientes para sair do aprendizado. Vamos dar a ele condições de aprender: orçamento realista, poucas edições e, se houver conjuntos parecidos, combiná-los.”', '“No es un defecto ni quiere decir que el anuncio es malo: el conjunto no tuvo resultados suficientes para salir del aprendizaje. Démosle condiciones de aprender: presupuesto realista, pocas ediciones y, si hay conjuntos parecidos, combinarlos.”'), fb: L('Isso! Tirou o medo e deu o caminho.', '¡Eso! Quitaste el miedo y diste el camino.') },
            { certa: false, txt: L('“Sim, é ruim. Apague.”', '“Sí, es malo. Bórralo.”'), fb: L('O aviso fala de resultados, não de qualidade.', 'El aviso habla de resultados, no de calidad.') },
            { certa: false, txt: L('“Reduza o orçamento pela metade.”', '“Reduce el presupuesto a la mitad.”'), fb: L('Menos orçamento costuma dar ainda menos resultados.', 'Menos presupuesto suele dar aún menos resultados.') },
            { certa: false, txt: L('“Edite o anúncio todo dia até funcionar.”', '“Edita el anuncio todos los días hasta que funcione.”'), fb: L('Edições significativas reiniciam o aprendizado.', 'Las ediciones significativas reinician el aprendizaje.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o orçamento diário e quantos resultados teve na semana?', '¿Cuál es el presupuesto diario y cuántos resultados tuvo en la semana?'), L('Há outros conjuntos parecidos que poderiam ser combinados?', '¿Hay otros conjuntos parecidos que se podrían combinar?')],
          conferir: [FERR, L('Coluna Veiculação, Orçamento e Resultados.', 'Columna Entrega, Presupuesto y Resultados.')],
          frase: L('Aprendizado limitado é um aviso de que faltam resultados, não um defeito. Vamos ajustar para o conjunto aprender: orçamento realista, poucas edições e conjuntos semelhantes combinados.', 'Aprendizaje limitado es un aviso de que faltan resultados, no un defecto. Ajustemos para que el conjunto aprenda: presupuesto realista, pocas ediciones y conjuntos parecidos combinados.'),
          passos: [L('Veja orçamento e resultados do conjunto.', 'Mira presupuesto y resultados del conjunto.'), L('Proponha orçamento realista e combinar conjuntos.', 'Propón presupuesto realista y combinar conjuntos.')],
          encaminhar: L('Combinar conjuntos e mexer no orçamento é decisão do cliente: explique as opções e deixe-o escolher.', 'Combinar conjuntos y tocar el presupuesto es decisión del cliente: explica las opciones y déjalo elegir.')
        }
      },
      {
        id: '05', min: 9, status: 'pronta',
        titulo: L('“Meu anúncio não roda”', '“Mi anuncio no corre”'),
        antes: L('A Marina diz que três conjuntos não estão veiculando.', 'Marina dice que tres conjuntos no están entregando.'),
        gancho: L('Cada status tem uma resposta. Comece pela conta, depois pelo conjunto.', 'Cada estado tiene una respuesta. Empieza por la cuenta, luego por el conjunto.'),
        objetivo: L('Seguir uma ordem para achar por que um anúncio não veicula: conta, status do conjunto e nível certo.', 'Seguir un orden para encontrar por qué un anuncio no entrega: cuenta, estado del conjunto y nivel correcto.'),
        entender: {
          dialogo: [
            ['marina', L('Três conjuntos parados! Por onde eu começo? 😱', '¡Tres conjuntos parados! ¿Por dónde empiezo? 😱')],
            ['rafa', L('Pela conta: se ela quase atingiu o limite de gastos, os anúncios param. A tela avisa para aumentar, redefinir ou remover o limite.', 'Por la cuenta: si casi alcanzó el límite de gasto, los anuncios se detienen. La pantalla avisa para aumentar, restablecer o eliminar el límite.')],
            ['marina', L('E depois?', '¿Y después?')],
            ['rafa', L('Olhe o status de cada conjunto: Desativado (por quem? por uma regra automatizada?), Em análise (a Meta responde em até 24 horas) ou Programado (a data de início ainda não chegou).', 'Mira el estado de cada conjunto: Desactivado (¿por quién?, ¿por una regla automática?), En revisión (Meta responde en un plazo de 24 horas) o Programado (la fecha de inicio todavía no llegó).')],
            ['pixel', L('A Central de Ajuda também organiza por nível: campanha, conjunto de anúncios e anúncio. Só depois pense em orçamento baixo ou aprendizado limitado.', 'El Centro de ayuda también organiza por nivel: campaña, conjunto de anuncios y anuncio. Solo después piensa en presupuesto bajo o aprendizaje limitado.')]
          ],
          pontos: [
            L('<b>1º a conta:</b> limite de gastos.', '<b>1.º la cuenta:</b> límite de gasto.'),
            L('<b>2º o status:</b> Desativado, Em análise, Programado.', '<b>2.º el estado:</b> Desactivado, En revisión, Programado.'),
            L('<b>3º o resto:</b> orçamento, aprendizado limitado, nível certo.', '<b>3.º lo demás:</b> presupuesto, aprendizaje limitado, nivel correcto.')
          ],
          notas: NOTA_CENTRAL
        },
        ferramenta: 'nao-veicula-q',
        praticar: {
          texto: L('No simulador, você confere o status em todos os níveis (campanha e conjunto de anúncios), lê os ícones da coluna Veiculação e usa o Histórico de atividades para achar o que mudou. O Pixel te guia na ordem certa.', 'En el simulador, revisas el estado en todos los niveles (campaña y conjunto de anuncios), lees los íconos de la columna Entrega y usas el Historial de actividades para encontrar lo que cambió. El Pixel te guía en el orden correcto.'),
          tour: 'nao-veicula', pagina: 'meta-entrega.html?problema=1'
        },
        atender: {
          cena: L('Meus anúncios não rodam! Eu gastei tempo e dinheiro. Conserte agora! 😡', '¡Mis anuncios no corren! Gasté tiempo y dinero. ¡Arréglalo ya! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Entendo a pressa. Vamos por ordem: primeiro vejo se a conta chegou ao limite de gastos; depois o status de cada conjunto (Desativado, Em análise, Programado). Cada um tem uma resposta diferente, e eu te digo qual é.”', '“Entiendo la urgencia. Vamos en orden: primero veo si la cuenta llegó al límite de gasto; después el estado de cada conjunto (Desactivado, En revisión, Programado). Cada uno tiene una respuesta distinta, y te digo cuál es.”'), fb: L('Isso! Acolheu e deu método.', '¡Eso! Acogiste y diste método.') },
            { certa: false, txt: L('“Aumente o orçamento.”', '“Aumenta el presupuesto.”'), fb: L('Orçamento é só uma das possibilidades, e não a primeira.', 'El presupuesto es solo una posibilidad, y no la primera.') },
            { certa: false, txt: L('“Espere uma semana.”', '“Espera una semana.”'), fb: L('Alguns casos pedem ação (limite de gastos, desativado).', 'Algunos casos piden acción (límite de gasto, desactivado).') },
            { certa: false, txt: L('“Me passe a senha da conta.”', '“Pásame la contraseña de la cuenta.”'), fb: L('Nunca peça senha: oriente.', 'Nunca pidas la contraseña: orienta.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o status de cada conjunto na coluna Veiculação?', '¿Cuál es el estado de cada conjunto en la columna Entrega?'), L('Há aviso de limite de gastos no topo da conta?', '¿Hay un aviso de límite de gasto arriba en la cuenta?')],
          conferir: [FERR, L('Aviso de limite de gastos e as Regras automatizadas.', 'Aviso de límite de gasto y las Reglas automáticas.')],
          frase: L('Vamos por ordem: primeiro o limite de gastos da conta, depois o status de cada conjunto, e só então orçamento e aprendizado.', 'Vamos en orden: primero el límite de gasto de la cuenta, luego el estado de cada conjunto, y solo después presupuesto y aprendizaje.'),
          passos: [L('Veja o aviso de limite de gastos no topo.', 'Mira el aviso de límite de gasto arriba.'), L('Veja o status de cada conjunto e use o “?” do simulador como guia.', 'Mira el estado de cada conjunto y usa el “?” del simulador como guía.')],
          encaminhar: L('Se o anúncio foi recusado ou a conta tem uma restrição, oriente o cliente a seguir as mensagens da própria conta e da Central de Ajuda da Meta.', 'Si el anuncio fue rechazado o la cuenta tiene una restricción, orienta al cliente a seguir los mensajes de la propia cuenta y del Centro de ayuda de Meta.')
        }
      }
    ];
  })(),
  verified: (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Planos, preços e números vistos de verdade na página pública da Meta em 16/10/2026 (PT e ES). Regras de cadastro, identificação, nome do perfil, suporte, cancelamento e revogação lidas na Central de Ajuda da Meta para Empresas em português (artigos do Meta Verified para empresas). As telas internas do fluxo de assinatura não foram vistas (não se vê sem assinar; nada foi comprado): as do simulador são montadas a partir do texto da Central de Ajuda (a conferir). Preços em US$ e disponibilidade variam por região, app e conta.', 'Planes, precios y números vistos de verdad en la página pública de Meta el 16/10/2026 (PT y ES). Reglas de registro, identificación, nombre del perfil, asistencia, cancelación y revocación leídas en el Centro de ayuda de Meta para Empresas en portugués (artículos de Meta Verified para empresas). Las pantallas internas del flujo de suscripción no se vieron (no se ven sin suscribirse; no se compró nada): las del simulador están armadas a partir del texto del Centro de ayuda (por confirmar). Los precios en USD y la disponibilidad varían según la región, la app y la cuenta.');
    var FERR = L('Meta Business Suite › Meta Verified (e a Central de Ajuda da Meta para Empresas).', 'Meta Business Suite › Meta Verified (y el Centro de ayuda de Meta para Empresas).');
    return [
      {
        id: '01', min: 6, status: 'pronta',
        titulo: L('O que é o Meta Verified para empresas', 'Qué es Meta Verified para empresas'),
        antes: L('A Marina viu o selo azul em outras lojas e quer saber se a Lojinha deveria ter um.', 'Marina vio la insignia azul en otras tiendas y quiere saber si la Lojinha debería tener una.'),
        gancho: L('“Quero o selo azul!” Antes de assinar, é bom saber o que ele é e o que não é.', '“¡Quiero la insignia azul!” Antes de suscribirse, conviene saber qué es y qué no es.'),
        objetivo: L('Entender o que é o Meta Verified para empresas, o que a assinatura inclui e onde o selo aparece.', 'Entender qué es Meta Verified para empresas, qué incluye la suscripción y dónde aparece la insignia.'),
        entender: {
          dialogo: [
            ['marina', L('O que é esse tal de Meta Verified? É um selo grátis? 🤔', '¿Qué es ese Meta Verified? ¿Es una insignia gratis? 🤔')],
            ['rafa', L('Não é grátis: é um serviço de assinatura pago, mensal ou anual, no Instagram, no Facebook e no WhatsApp. Ajuda a empresa a construir credibilidade e proteger a identidade da marca.', 'No es gratis: es un servicio de suscripción paga, mensual o anual, en Instagram, Facebook y WhatsApp. Ayuda a la empresa a construir credibilidad y proteger la identidad de la marca.')],
            ['marina', L('E o que vem na assinatura?', '¿Y qué viene con la suscripción?')],
            ['rafa', L('Selo de verificado, suporte ao cliente, proteção contra falsificação de identidade e outras ferramentas. Os recursos variam conforme o plano.', 'Insignia de verificación, atención al cliente, protección contra la suplantación de identidad y otras herramientas. Las funciones varían según el plan.')],
            ['pixel', L('Dois detalhes: o selo aparece nos ativos que você assinar (Página do Facebook, Instagram, WhatsApp), e os benefícios só valem para esses ativos, não para o portfólio inteiro. E não é um produto de anúncios: é outra coisa.', 'Dos detalles: la insignia aparece en los activos que suscribas (página de Facebook, Instagram, WhatsApp), y los beneficios solo valen para esos activos, no para todo el portfolio. Y no es un producto de anuncios: es otra cosa.')]
          ],
          pontos: [
            L('<b>Assinatura paga</b>, mensal ou anual; dá para cancelar quando quiser.', '<b>Suscripción paga</b>, mensual o anual; se puede cancelar en cualquier momento.'),
            L('<b>Inclui:</b> selo, suporte, proteção contra falsificação de identidade.', '<b>Incluye:</b> insignia, asistencia, protección contra la suplantación de identidad.'),
            L('<b>Vale só</b> para os ativos assinados (Página, Instagram, WhatsApp).', '<b>Vale solo</b> para los activos suscritos (página, Instagram, WhatsApp).')
          ],
          notas: NOTA
        },
        ferramenta: 'o-que-e-verified',
        atender: {
          cena: L('Eu já tenho um selo azul. Preciso pagar de novo? E o Meta Verified faz meus anúncios venderem mais? 🙏', 'Ya tengo una insignia azul. ¿Tengo que pagar de nuevo? ¿Y Meta Verified hace que mis anuncios vendan más? 🙏'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Quem já tem o selo não precisa fazer nada para mantê-lo; pode assinar o Meta Verified se quiser os benefícios extras e cumprir os requisitos. A assinatura inclui selo, suporte e proteção contra falsificação de identidade: ela não é uma ferramenta de anúncios e não promete mais vendas.”', '“Quien ya tiene la insignia no necesita hacer nada para conservarla; puede suscribirse a Meta Verified si quiere los beneficios adicionales y cumple los requisitos. La suscripción incluye insignia, asistencia y protección contra la suplantación de identidad: no es una herramienta de anuncios y no promete más ventas.”'), fb: L('Isso! Explicou sem prometer o que não existe.', '¡Eso! Explicaste sin prometer lo que no existe.') },
            { certa: false, txt: L('“Sim, com o Meta Verified seus anúncios vendem o dobro.”', '“Sí, con Meta Verified tus anuncios venden el doble.”'), fb: L('Nunca prometa resultado: não é uma ferramenta de anúncios.', 'Nunca prometas resultados: no es una herramienta de anuncios.') },
            { certa: false, txt: L('“Seu selo vai sumir se você não assinar.”', '“Tu insignia va a desaparecer si no te suscribes.”'), fb: L('Não: nenhuma ação é necessária para manter o selo.', 'No: no se necesita ninguna acción para conservar la insignia.') },
            { certa: false, txt: L('“Passe a senha da conta que eu assino para você.”', '“Pásame la contraseña de la cuenta y yo me suscribo por ti.”'), fb: L('Nunca peça senha: oriente.', 'Nunca pidas la contraseña: orienta.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o objetivo: selo, suporte ou proteção da marca?', '¿Cuál es el objetivo: insignia, asistencia o protección de la marca?'), L('A empresa já tem selo de verificado em algum ativo?', '¿La empresa ya tiene insignia de verificación en algún activo?')],
          conferir: [FERR, L('Página pública do Meta Verified para empresas.', 'Página pública de Meta Verified para empresas.')],
          frase: L('O Meta Verified é uma assinatura paga com selo, suporte e proteção contra falsificação de identidade, válida para os ativos assinados. Não é uma ferramenta de anúncios.', 'Meta Verified es una suscripción paga con insignia, asistencia y protección contra la suplantación de identidad, válida para los activos suscritos. No es una herramienta de anuncios.'),
          passos: [L('Pergunte o objetivo do cliente.', 'Pregunta el objetivo del cliente.'), L('Explique o que a assinatura inclui e o que não inclui.', 'Explica qué incluye la suscripción y qué no.')],
          encaminhar: L('Decidir assinar é do cliente. Explique as opções e deixe a escolha com ele.', 'Decidir suscribirse es del cliente. Explica las opciones y deja la elección en sus manos.')
        }
      },
      {
        id: '02', min: 8, status: 'pronta',
        titulo: L('Planos e benefícios', 'Planes y beneficios'),
        antes: L('A Marina quer entender qual dos quatro planos serve para a Lojinha.', 'Marina quiere entender cuál de los cuatro planes sirve para la Lojinha.'),
        gancho: L('Quatro planos, preços diferentes e suporte diferente: o certo depende do que o cliente precisa.', 'Cuatro planes, precios distintos y asistencia distinta: el correcto depende de lo que necesita el cliente.'),
        objetivo: L('Comparar os planos, ler o suporte de cada um e saber por que nem todos aparecem para todo mundo.', 'Comparar los planes, leer la asistencia de cada uno y saber por qué no todos aparecen para todos.'),
        entender: {
          dialogo: [
            ['marina', L('Tem Business Básico, Plus, Premium e Max. Qual é a diferença? 😵', 'Hay Business Standard, Plus, Premium y Max. ¿Cuál es la diferencia? 😵')],
            ['rafa', L('Todos têm o selo e a proteção contra falsificação de identidade, e suporte por chat e e-mail 24 h. Subindo de plano, vêm mais recursos: o suporte priorizado começa no Plus, a ligação de um agente no Premium e o monitoramento dedicado de casos só no Max.', 'Todos tienen la insignia y la protección contra la suplantación de identidad, y asistencia por chat y correo 24 h. Al subir de plan, vienen más funciones: la asistencia prioritaria empieza en Plus, la llamada de un agente en Premium y el monitoreo dedicado de casos solo en Max.')],
            ['marina', L('E o preço?', '¿Y el precio?')],
            ['rafa', L('Na página da Meta aparecem em dólar: US$ 14,99, 49,99, 149,99 e 499,99 por mês. Mas planos, preços e disponibilidade podem variar por região, app e conta.', 'En la página de Meta aparecen en dólares: 14,99, 49,99, 149,99 y 499,99 USD por mes. Pero los planes, los precios y la disponibilidad pueden variar según la región, la app y la cuenta.')],
            ['pixel', L('E nem todos os planos aparecem para todos: a Meta define a disponibilidade com base na atividade da empresa nos apps (visitas ao perfil, engajamento…). Por isso, confirme o que aparece na conta do cliente.', 'Y no todos los planes aparecen para todos: Meta define la disponibilidad según la actividad de la empresa en las apps (visitas al perfil, interacción…). Por eso, confirma qué aparece en la cuenta del cliente.')]
          ],
          pontos: [
            L('<b>Todos:</b> selo, proteção contra falsificação, chat e e-mail 24 h.', '<b>Todos:</b> insignia, protección contra la suplantación, chat y correo 24 h.'),
            L('<b>Suporte sobe com o plano:</b> priorizado (Plus), ligação (Premium), monitoramento (Max).', '<b>La asistencia sube con el plan:</b> prioritaria (Plus), llamada (Premium), monitoreo (Max).'),
            L('<b>Disponibilidade</b> depende da atividade da empresa; preços variam por região.', '<b>La disponibilidad</b> depende de la actividad de la empresa; los precios varían según la región.')
          ],
          notas: NOTA
        },
        ferramenta: 'planos-verified',
        praticar: {
          texto: L('No simulador, o Pixel te guia pela tabela de planos e pelo suporte de cada um, e você escolhe o plano certo para uma necessidade.', 'En el simulador, el Pixel te guía por la tabla de planes y por la asistencia de cada uno, y eliges el plan correcto para una necesidad.'),
          tour: 'escolher-plano', pagina: 'meta-verified.html?zerar=1'
        },
        atender: {
          cena: L('Quero o plano mais caro, deve ser o melhor. Ou o mais barato, para economizar. Qual você recomenda? 🤷', 'Quiero el plan más caro, debe ser el mejor. O el más barato, para ahorrar. ¿Cuál recomiendas? 🤷'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Depende do que você precisa. Todos têm selo, proteção contra falsificação e suporte por chat e e-mail 24 h. Se quiser suporte priorizado, vá de Plus para cima; ligação de um agente, Premium para cima. Veja também o que aparece na sua conta, porque a disponibilidade varia.”', '“Depende de lo que necesites. Todos tienen insignia, protección contra la suplantación y asistencia por chat y correo 24 h. Si quieres asistencia prioritaria, desde Plus; llamada de un agente, desde Premium. Mira también qué aparece en tu cuenta, porque la disponibilidad varía.”'), fb: L('Isso! Perguntou a necessidade e deu o caminho.', '¡Eso! Preguntaste la necesidad y diste el camino.') },
            { certa: false, txt: L('“O mais caro, sempre.”', '“El más caro, siempre.”'), fb: L('Mais caro nem sempre é o certo.', 'Más caro no siempre es el correcto.') },
            { certa: false, txt: L('“O mais barato já faz tudo.”', '“El más barato ya hace todo.”'), fb: L('Os recursos aumentam com o plano.', 'Las funciones aumentan con el plan.') },
            { certa: false, txt: L('“Escolho por você, é o Max.”', '“Elijo por ti, es el Max.”'), fb: L('A escolha é do cliente.', 'La elección es del cliente.') }
          ]
        },
        cola: {
          perguntas: [L('O que o cliente mais precisa: suporte, proteção ou selo?', '¿Qué necesita más el cliente: asistencia, protección o insignia?'), L('Quais planos aparecem na conta dele?', '¿Qué planes aparecen en su cuenta?')],
          conferir: [FERR, L('Página de planos e preços da Meta (valores em US$).', 'Página de planes y precios de Meta (valores en USD).')],
          frase: L('Todos os planos têm selo, proteção e suporte por chat e e-mail; o suporte priorizado, a ligação e o monitoramento aparecem conforme o plano. Vamos ver o que está disponível na sua conta.', 'Todos los planes tienen insignia, protección y asistencia por chat y correo; la asistencia prioritaria, la llamada y el monitoreo aparecen según el plan. Veamos qué está disponible en tu cuenta.'),
          passos: [L('Pergunte a necessidade principal.', 'Pregunta la necesidad principal.'), L('Mostre a tabela de planos e o suporte de cada um.', 'Muestra la tabla de planes y la asistencia de cada uno.')],
          encaminhar: L('Preços e planos mudam por região: confirme sempre na tela da conta do cliente, sem prometer valores.', 'Los precios y planes cambian según la región: confirma siempre en la pantalla de la cuenta del cliente, sin prometer valores.')
        }
      },
      {
        id: '03', min: 8, status: 'pronta',
        titulo: L('Cadastrar a empresa', 'Registrar la empresa'),
        antes: L('A Marina decidiu: quer o Plus para o Instagram da Lojinha.', 'Marina decidió: quiere Plus para el Instagram de la Lojinha.'),
        gancho: L('Plano, ativos, pagamento, verificação e confirmação: cada etapa tem uma regra.', 'Plan, activos, pago, verificación y confirmación: cada etapa tiene una regla.'),
        objetivo: L('Seguir as etapas do cadastro, entender os métodos de verificação e saber o prazo de análise.', 'Seguir las etapas del registro, entender los métodos de verificación y saber el plazo de revisión.'),
        entender: {
          dialogo: [
            ['marina', L('Por onde começo o cadastro? 😬', '¿Por dónde empiezo el registro? 😬')],
            ['rafa', L('Você escolhe o plano, depois os ativos que quer verificar, configura o pagamento e verifica os detalhes da empresa. Dá para verificar até dois ativos do mesmo portfólio (por exemplo, o Instagram e a Página); se usar o Meta Business Suite no computador, até três.', 'Eliges el plan, luego los activos que quieres verificar, configuras el pago y verificas los detalles de la empresa. Se pueden verificar hasta dos activos del mismo portfolio (por ejemplo, Instagram y la página); si usas Meta Business Suite en la computadora, hasta tres.')],
            ['marina', L('Como a Meta confirma que a empresa é minha?', '¿Cómo confirma Meta que la empresa es mía?')],
            ['rafa', L('Há métodos: detalhes da empresa (que precisam bater com um registro público), documentação, identificação oficial, conta bancária empresarial ou presença estabelecida nos produtos da Meta. Depois, você confirma a conexão por e-mail, SMS, ligação, identidade ou domínio.', 'Hay métodos: detalles de la empresa (que deben coincidir con un registro público), documentación, identificación oficial, cuenta bancaria empresarial o presencia establecida en los productos de Meta. Después, confirmas la conexión por correo, SMS, llamada, identidad o dominio.')],
            ['pixel', L('A Meta analisa e dá o resultado em até 3 dias úteis. Se a verificação não for concluída em três dias, a assinatura é cancelada e pode haver reembolso. O selo só aparece depois da aprovação.', 'Meta revisa y da el resultado en un plazo de 3 días hábiles. Si la verificación no se completa en tres días, la suscripción se cancela y puede haber reembolso. La insignia aparece solo después de la aprobación.')]
          ],
          pontos: [
            L('<b>Etapas:</b> plano → ativos → pagamento → verificação → confirmação.', '<b>Etapas:</b> plan → activos → pago → verificación → confirmación.'),
            L('<b>Até 2 ativos</b> (3 pelo Meta Business Suite no computador); com mais de um, preço com desconto.', '<b>Hasta 2 activos</b> (3 desde Meta Business Suite en la computadora); con más de uno, precio con descuento.'),
            L('<b>Análise</b> em até 3 dias úteis; selo só depois de aprovado.', '<b>Revisión</b> en un plazo de 3 días hábiles; insignia solo después de aprobado.')
          ],
          notas: NOTA
        },
        ferramenta: 'cadastro-verified',
        praticar: {
          texto: L('No simulador, o Pixel te guia por todo o cadastro: Plus, Instagram, pagamento (simulado), detalhes da empresa, e-mail e envio.', 'En el simulador, el Pixel te guía por todo el registro: Plus, Instagram, pago (simulado), detalles de la empresa, correo y envío.'),
          tour: 'cadastrar-meta-verified', pagina: 'meta-verified.html?zerar=1'
        },
        atender: {
          cena: L('Enviei tudo e o selo não apareceu! Foi golpe? Já se passaram 2 dias! 😡', '¡Envié todo y la insignia no apareció! ¿Fue una estafa? ¡Ya pasaron 2 días! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Calma: a Meta analisa a inscrição e envia uma atualização do status em até 3 dias úteis; o selo só aparece depois da aprovação. Vamos olhar o status na sua assinatura. Enquanto está em análise, talvez você não consiga mudar o nome do perfil.”', '“Calma: Meta revisa la solicitud y envía una actualización del estado en un plazo de 3 días hábiles; la insignia aparece solo después de la aprobación. Veamos el estado en tu suscripción. Mientras está en revisión, quizás no puedas cambiar el nombre del perfil.”'), fb: L('Isso! Deu o prazo e o que olhar.', '¡Eso! Diste el plazo y qué mirar.') },
            { certa: false, txt: L('“Foi golpe, peça o dinheiro de volta.”', '“Fue una estafa, pide que te devuelvan el dinero.”'), fb: L('Não há sinal disso; primeiro olhe o status.', 'No hay señal de eso; primero mira el estado.') },
            { certa: false, txt: L('“Cadastre de novo.”', '“Regístrate de nuevo.”'), fb: L('Pode duplicar a cobrança; primeiro veja o status.', 'Puede duplicar el cobro; primero mira el estado.') },
            { certa: false, txt: L('“Compre um plano maior para acelerar.”', '“Compra un plan más grande para acelerar.”'), fb: L('Plano maior não acelera a análise.', 'Un plan más grande no acelera la revisión.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o status da assinatura e há quantos dias úteis foi enviada?', '¿Cuál es el estado de la suscripción y hace cuántos días hábiles se envió?'), L('Qual método de verificação foi escolhido?', '¿Qué método de verificación se eligió?')],
          conferir: [FERR, L('Status da inscrição na assinatura.', 'Estado de la solicitud en la suscripción.')],
          frase: L('A análise do Meta Verified leva até 3 dias úteis; o selo aparece depois da aprovação. Vamos conferir o status da sua inscrição.', 'La revisión de Meta Verified tarda hasta 3 días hábiles; la insignia aparece después de la aprobación. Revisemos el estado de tu solicitud.'),
          passos: [L('Abra a assinatura e veja o status.', 'Abre la suscripción y mira el estado.'), L('Se passou de 3 dias úteis, veja a aula 04.', 'Si pasaron más de 3 días hábiles, mira la clase 04.')],
          encaminhar: L('Se a análise passar do prazo ou algo não bater, siga as mensagens da conta e o suporte do Meta Verified.', 'Si la revisión pasa del plazo o algo no cuadra, sigue los mensajes de la cuenta y la asistencia de Meta Verified.')
        }
      },
      {
        id: '04', min: 9, status: 'pronta',
        titulo: L('“Não consigo cadastrar”', '“No puedo registrar”'),
        antes: L('A Marina abriu o Meta Business Suite e a opção de cadastro nem aparece.', 'Marina abrió Meta Business Suite y la opción de registro ni aparece.'),
        gancho: L('Quando a opção some, quase sempre falta um requisito. Vamos conferir um por um.', 'Cuando la opción desaparece, casi siempre falta un requisito. Revisemos uno por uno.'),
        objetivo: L('Conferir os requisitos (perfil completo, controle total, ativo qualificado, Proteção Avançada de todos) e entender a identificação.', 'Revisar los requisitos (perfil completo, control total, activo que cumple, Protección avanzada de todos) y entender la identificación.'),
        entender: {
          dialogo: [
            ['marina', L('Não aparece nada para me cadastrar. 😩', 'No aparece nada para registrarme. 😩')],
            ['rafa', L('Se qualquer requisito não for atendido, a opção não fica disponível. Confira: perfil completo (foto, nome, categoria e contato), controle total de um portfólio no Meta Business Suite, pelo menos um ativo qualificado e Proteção Avançada de todas as pessoas com acesso.', 'Si algún requisito no se cumple, la opción no queda disponible. Revisa: perfil completo (foto, nombre, categoría y contacto), control total de un portfolio en Meta Business Suite, al menos un activo que cumpla los requisitos y Protección avanzada de todas las personas con acceso.')],
            ['marina', L('Proteção Avançada?', '¿Protección avanzada?')],
            ['rafa', L('É uma configuração de segurança que exige, por exemplo, autenticação de dois fatores em cada login. Cada pessoa ativa na própria conta. Se uma só não ativar, a opção não aparece. Depois de corrigir, aguarde até 24 horas.', 'Es una configuración de seguridad que exige, por ejemplo, autenticación de dos factores en cada inicio de sesión. Cada persona la activa en su propia cuenta. Si una sola no la activa, la opción no aparece. Después de corregir, espera hasta 24 horas.')],
            ['pixel', L('Se o problema for na verificação já iniciada, a identificação oficial precisa ser válida, com foto, quatro cantos visíveis, sem flash, e com nome semelhante ao do ativo (“Flores da Ana Silva” pede “Ana” ou “Silva”).', 'Si el problema es en la verificación ya iniciada, la identificación oficial debe ser válida, con foto, cuatro esquinas visibles, sin flash, y con un nombre parecido al del activo (“Flores da Ana Silva” pide “Ana” o “Silva”).')]
          ],
          pontos: [
            L('<b>Requisitos:</b> perfil completo, controle total, ativo qualificado, Proteção Avançada de todos.', '<b>Requisitos:</b> perfil completo, control total, activo que cumple, Protección avanzada de todos.'),
            L('<b>Depois de corrigir</b>, aguarde até 24 horas.', '<b>Después de corregir</b>, espera hasta 24 horas.'),
            L('<b>Documento:</b> válido, legível, nome semelhante ao do ativo.', '<b>Documento:</b> válido, legible, nombre parecido al del activo.')
          ],
          notas: NOTA
        },
        ferramenta: 'nao-consigo-verified',
        praticar: {
          texto: L('No simulador, a opção de cadastro não aparece. O Pixel te guia para achar a foto que falta e a Proteção Avançada de uma pessoa.', 'En el simulador, la opción de registro no aparece. El Pixel te guía para encontrar la foto que falta y la Protección avanzada de una persona.'),
          tour: 'nao-consigo-cadastrar', pagina: 'meta-verified.html?problema=1'
        },
        atender: {
          cena: L('Já tentei tudo e continua não aparecendo! Você precisa liberar para mim! 😡', '¡Ya intenté todo y sigue sin aparecer! ¡Tienes que habilitarlo para mí! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Entendo. A opção só aparece quando todos os requisitos estão certos, e eu não consigo liberar por fora. Vamos conferir: perfil completo com foto, controle total do portfólio e, muito importante, se todas as pessoas com acesso ativaram a Proteção Avançada. Depois, pode levar até 24 horas.”', '“Entiendo. La opción solo aparece cuando todos los requisitos están correctos, y yo no puedo habilitarla por fuera. Revisemos: perfil completo con foto, control total del portfolio y, muy importante, si todas las personas con acceso activaron la Protección avanzada. Después, puede tardar hasta 24 horas.”'), fb: L('Isso! Acolheu, deu a lista e o prazo.', '¡Eso! Acogiste, diste la lista y el plazo.') },
            { certa: false, txt: L('“Vou liberar agora.”', '“Lo habilito ahora.”'), fb: L('Não existe liberação por fora.', 'No existe una habilitación por fuera.') },
            { certa: false, txt: L('“Me passe a senha de todos que eu ativo.”', '“Pásame la contraseña de todos y yo la activo.”'), fb: L('Nunca peça senha; cada pessoa ativa na própria conta.', 'Nunca pidas la contraseña; cada persona la activa en su propia cuenta.') },
            { certa: false, txt: L('“É erro da Meta, espere um mês.”', '“Es un error de Meta, espera un mes.”'), fb: L('Normalmente falta um requisito.', 'Normalmente falta un requisito.') }
          ]
        },
        cola: {
          perguntas: [L('O perfil tem foto, nome, categoria e contato? Quem tem controle total do portfólio?', '¿El perfil tiene foto, nombre, categoría y contacto? ¿Quién tiene control total del portfolio?'), L('Todas as pessoas com acesso ativaram a Proteção Avançada?', '¿Todas las personas con acceso activaron la Protección avanzada?')],
          conferir: [L('Meta Business Suite › Configurações do portfólio › Pessoas.', 'Meta Business Suite › Configuración del portfolio › Personas.'), L('Cada ativo: foto, categoria, contato.', 'Cada activo: foto, categoría, contacto.')],
          frase: L('A opção de cadastro só aparece quando todos os requisitos estão atendidos. Vamos conferir um por um, começando pela Proteção Avançada de cada pessoa.', 'La opción de registro solo aparece cuando todos los requisitos se cumplen. Revisemos uno por uno, empezando por la Protección avanzada de cada persona.'),
          passos: [L('Veja a lista de pessoas do portfólio.', 'Mira la lista de personas del portfolio.'), L('Peça a quem falta que ative a Proteção Avançada e espere até 24 horas.', 'Pide a quien falta que active la Protección avanzada y espera hasta 24 horas.')],
          encaminhar: L('Se tudo estiver certo e ainda não aparecer, oriente o cliente a falar com o suporte da Meta pelos canais da própria conta.', 'Si todo está correcto y aún no aparece, orienta al cliente a hablar con la asistencia de Meta por los canales de la propia cuenta.')
        }
      },
      {
        id: '05', min: 8, status: 'pronta',
        titulo: L('Nome do perfil verificado', 'Nombre del perfil verificado'),
        antes: L('A Marina quer trocar o nome do perfil para o nome de marca.', 'Marina quiere cambiar el nombre del perfil por el nombre de marca.'),
        gancho: L('O nome do perfil verificado segue regras: precisa lembrar o nome civil.', 'El nombre del perfil verificado sigue reglas: debe recordar el nombre legal.'),
        objetivo: L('Saber o que a Meta aceita e recusa ao trocar o nome do perfil e os limites de edição.', 'Saber qué acepta y rechaza Meta al cambiar el nombre del perfil y los límites de edición.'),
        entender: {
          dialogo: [
            ['marina', L('Quero mudar o nome para “Brigadeiros Gourmet 2000”. Por que foi recusado? 😤', 'Quiero cambiar el nombre a “Brigadeiros Gourmet 2000”. ¿Por qué fue rechazado? 😤')],
            ['rafa', L('O nome do perfil verificado deve ser semelhante ao nome civil no portfólio e ao nome usado no cadastro. Nome fantasia ou de marca muito diferente pode ser rejeitado. E símbolos, números e repetição de letras não são aceitos.', 'El nombre del perfil verificado debe ser parecido al nombre legal en el portfolio y al nombre usado en el registro. Un nombre de fantasía o de marca muy distinto puede ser rechazado. Y no se aceptan símbolos, números ni repetición de letras.')],
            ['marina', L('Então o que aceitam?', '¿Entonces qué aceptan?')],
            ['rafa', L('Abreviações (Sid para Siddharth), variações de grafia, iniciais e nomes compostos. Se o novo nome for muito diferente, dá para atualizar o nome civil no portfólio para ajudar.', 'Abreviaturas (Sid por Siddharth), variantes de ortografía, iniciales y nombres compuestos. Si el nombre nuevo es muy distinto, se puede actualizar el nombre legal en el portfolio para ayudar.')],
            ['pixel', L('Limites: no Instagram, 2 mudanças a cada 14 dias; no Facebook, 1 a cada 60 dias. A análise leva até 3 dias, e enquanto ela está pendente talvez não dê para editar de novo.', 'Límites: en Instagram, 2 cambios cada 14 días; en Facebook, 1 cada 60 días. La revisión tarda hasta 3 días, y mientras está pendiente quizás no se pueda editar de nuevo.')]
          ],
          pontos: [
            L('<b>Nome parecido</b> com o nome civil e com o do cadastro.', '<b>Nombre parecido</b> al nombre legal y al del registro.'),
            L('<b>Não aceitos:</b> símbolos, números, repetição, ofensas, alguns títulos.', '<b>No se aceptan:</b> símbolos, números, repetición, ofensas, algunos títulos.'),
            L('<b>Limites:</b> Instagram 2 vezes a cada 14 dias; Facebook 1 vez a cada 60 dias.', '<b>Límites:</b> Instagram 2 veces cada 14 días; Facebook 1 vez cada 60 días.')
          ],
          notas: NOTA
        },
        ferramenta: 'nome-perfil-verified',
        praticar: {
          texto: L('No simulador, o Pixel te guia por um nome recusado (“Brigadeiros Gourmet 2000”) e por um aprovado (“Marina Silva”).', 'En el simulador, el Pixel te guía por un nombre rechazado (“Brigadeiros Gourmet 2000”) y por uno aprobado (“Marina Silva”).'),
          tour: 'nome-perfil', pagina: 'meta-verified.html?ativa=1'
        },
        atender: {
          cena: L('Eu pago o Meta Verified e não posso nem escolher o nome da minha marca? Isso é um absurdo! 😠', '¿Pago Meta Verified y ni siquiera puedo elegir el nombre de mi marca? ¡Es un absurdo! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Entendo a frustração. Para manter a verificação, o nome do perfil precisa ser semelhante ao nome civil no portfólio e ao nome do cadastro; nomes de marca muito diferentes podem ser recusados. Podemos tentar uma variação mais próxima ou atualizar o nome civil no portfólio.”', '“Entiendo la frustración. Para mantener la verificación, el nombre del perfil debe ser parecido al nombre legal en el portfolio y al nombre del registro; los nombres de marca muy distintos pueden ser rechazados. Podemos probar una variación más cercana o actualizar el nombre legal en el portfolio.”'), fb: L('Isso! Acolheu e ofereceu as saídas reais.', '¡Eso! Acogiste y ofreciste las salidas reales.') },
            { certa: false, txt: L('“Pague um plano maior e o nome é liberado.”', '“Paga un plan más grande y se libera el nombre.”'), fb: L('Plano maior não muda a regra.', 'Un plan más grande no cambia la regla.') },
            { certa: false, txt: L('“Coloque o nome com símbolos para driblar.”', '“Pon el nombre con símbolos para esquivarlo.”'), fb: L('Símbolos não são aceitos, e burlar a análise pode gerar ação na conta.', 'No se aceptan símbolos, y burlar la revisión puede generar acciones en la cuenta.') },
            { certa: false, txt: L('“Não dá, desista.”', '“No se puede, olvídalo.”'), fb: L('Há saídas: variação semelhante ou atualizar o nome civil.', 'Hay salidas: variación parecida o actualizar el nombre legal.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o nome civil no portfólio e qual foi o nome do cadastro?', '¿Cuál es el nombre legal en el portfolio y cuál fue el nombre del registro?'), L('Já foram usadas as edições permitidas neste período?', '¿Ya se usaron las ediciones permitidas en este período?')],
          conferir: [L('Assinatura › Atualizar informações do perfil.', 'Suscripción › Actualizar información del perfil.'), L('Nome civil no portfólio (Meta Business Suite).', 'Nombre legal en el portfolio (Meta Business Suite).')],
          frase: L('O nome do perfil verificado precisa ser semelhante ao nome civil no portfólio e ao nome do cadastro. Vamos escolher uma variação que respeite isso.', 'El nombre del perfil verificado debe ser parecido al nombre legal en el portfolio y al nombre del registro. Elijamos una variación que lo respete.'),
          passos: [L('Compare o nome desejado com o nome civil.', 'Compara el nombre deseado con el nombre legal.'), L('Evite símbolos e números e respeite os limites de edição.', 'Evita símbolos y números y respeta los límites de edición.')],
          encaminhar: L('Se o nome for rejeitado várias vezes, oriente o cliente a revisar o nome civil no portfólio e a seguir as mensagens da conta.', 'Si el nombre es rechazado varias veces, orienta al cliente a revisar el nombre legal en el portfolio y a seguir los mensajes de la cuenta.')
        }
      },
      {
        id: '06', min: 9, status: 'pronta',
        titulo: L('Cancelar, revogada e suporte', 'Cancelar, revocada y asistencia'),
        antes: L('A Marina pensa em cancelar. E uma amiga teve a assinatura revogada.', 'Marina piensa en cancelar. Y una amiga tuvo la suscripción revocada.'),
        gancho: L('Cancelar e revogar parecem iguais, mas não são. E quem tem assinatura ativa tem um suporte especial.', 'Cancelar y revocar parecen iguales, pero no lo son. Y quien tiene una suscripción activa tiene una asistencia especial.'),
        objetivo: L('Explicar as regras de cancelamento, listar causas de revogação e indicar o suporte de cada plano.', 'Explicar las reglas de cancelación, listar causas de revocación e indicar la asistencia de cada plan.'),
        entender: {
          dialogo: [
            ['marina', L('Se eu cancelar, perco o selo na hora? 😟', 'Si cancelo, ¿pierdo la insignia al instante? 😟')],
            ['rafa', L('Não: continua ativa até o fim do ciclo. Para não pagar o ciclo seguinte, cancele pelo menos 24 horas antes da próxima cobrança. Não há reembolso nem crédito parcial. No fim do ciclo, todos os ativos perdem a verificação e o suporte acaba, inclusive casos abertos.', 'No: sigue activa hasta el final del ciclo. Para no pagar el ciclo siguiente, cancela al menos 24 horas antes del próximo cobro. No hay reembolso ni crédito parcial. Al final del ciclo, todos los activos pierden la verificación y la asistencia termina, incluidos los casos abiertos.')],
            ['marina', L('E onde eu cancelo?', '¿Y dónde cancelo?')],
            ['rafa', L('Onde você comprou: Meta Business Suite no computador, App Store da Apple ou Google Play, com o acesso certo (controle total do portfólio, ou a conta Apple/Google da compra).', 'Donde compraste: Meta Business Suite en la computadora, App Store de Apple o Google Play, con el acceso correcto (control total del portfolio, o la cuenta de Apple/Google de la compra).')],
            ['pixel', L('Já a revogação tira os benefícios na hora. Causas comuns: pagamento que falhou sem forma reserva, verificação não aprovada, violação de políticas, exclusão da conta ou mudança de plano direto na loja de apps. O suporte avançado (chat e e-mail) vale só para assinatura ativa.', 'En cambio, la revocación quita los beneficios al instante. Causas comunes: pago que falló sin forma de respaldo, verificación no aprobada, infracción de políticas, eliminación de la cuenta o cambio de plan directo en la tienda de apps. La asistencia mejorada (chat y correo) vale solo para suscripción activa.')]
          ],
          pontos: [
            L('<b>Cancelar:</b> ativa até o fim do ciclo, cancelar 24 h antes, sem reembolso.', '<b>Cancelar:</b> activa hasta el final del ciclo, cancelar 24 h antes, sin reembolso.'),
            L('<b>Revogada:</b> perde tudo na hora; causas comuns na lista da Central de Ajuda.', '<b>Revocada:</b> pierde todo al instante; causas comunes en la lista del Centro de ayuda.'),
            L('<b>Suporte:</b> chat e e-mail em todos os planos; mais em Plus, Premium e Max.', '<b>Asistencia:</b> chat y correo en todos los planes; más en Plus, Premium y Max.')
          ],
          notas: NOTA
        },
        ferramenta: 'cancelar-verified',
        praticar: {
          texto: L('No simulador, o Pixel te guia para cancelar uma assinatura ativa, lendo cada aviso antes de confirmar.', 'En el simulador, el Pixel te guía para cancelar una suscripción activa, leyendo cada aviso antes de confirmar.'),
          tour: 'cancelar-assinatura', pagina: 'meta-verified.html?ativa=1'
        },
        atender: {
          cena: L('Minha assinatura foi revogada do nada! Quero o dinheiro de volta e o selo agora! 😡', '¡Mi suscripción fue revocada de la nada! ¡Quiero mi dinero de vuelta y la insignia ahora! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Sinto muito. Quando a assinatura é revogada, os benefícios acabam na hora, e isso costuma ter uma causa: pagamento que falhou sem forma reserva, verificação não aprovada, atualização de perfil reprovada ou violação de políticas. Vamos olhar a conta para ver qual foi. Se a verificação não passou depois do primeiro pagamento, há direito a reembolso.”', '“Lo lamento. Cuando la suscripción se revoca, los beneficios terminan al instante, y suele tener una causa: pago que falló sin forma de respaldo, verificación no aprobada, actualización de perfil rechazada o infracción de políticas. Veamos la cuenta para saber cuál fue. Si la verificación no se aprobó después del primer pago, hay derecho a reembolso.”'), fb: L('Isso! Acolheu, deu as causas reais e o que olhar.', '¡Eso! Acogiste, diste las causas reales y qué mirar.') },
            { certa: false, txt: L('“Foi um erro, vou reativar agora.”', '“Fue un error, la reactivo ahora.”'), fb: L('Não dá para reativar por fora; primeiro descubra a causa.', 'No se puede reactivar por fuera; primero descubre la causa.') },
            { certa: false, txt: L('“Você violou as regras, a culpa é sua.”', '“Infringiste las reglas, la culpa es tuya.”'), fb: L('Pode ser outra causa; não acuse sem olhar.', 'Puede ser otra causa; no acuses sin mirar.') },
            { certa: false, txt: L('“Prometo reembolso total hoje.”', '“Prometo reembolso total hoy.”'), fb: L('Não prometa o que não depende de você.', 'No prometas lo que no depende de ti.') }
          ]
        },
        cola: {
          perguntas: [L('Foi cancelamento ou revogação? Onde a assinatura foi comprada?', '¿Fue cancelación o revocación? ¿Dónde se compró la suscripción?'), L('Houve falha de pagamento, mudança de conta ou aviso de política?', '¿Hubo falla de pago, cambio de cuenta o aviso de política?')],
          conferir: [L('Assinatura › status e histórico de pagamentos.', 'Suscripción › estado e historial de pagos.'), L('Central de Ajuda: Assinaturas do Meta Verified para empresas revogadas.', 'Centro de ayuda: Suscripciones de Meta Verified para empresas revocadas.')],
          frase: L('Cancelar mantém os benefícios até o fim do ciclo; revogar tira tudo na hora e costuma ter uma causa. Vamos ver qual foi no seu caso.', 'Cancelar mantiene los beneficios hasta el final del ciclo; revocar quita todo al instante y suele tener una causa. Veamos cuál fue en tu caso.'),
          passos: [L('Veja o status e o histórico de pagamentos.', 'Mira el estado y el historial de pagos.'), L('Compare com a lista de causas de revogação.', 'Compara con la lista de causas de revocación.')],
          encaminhar: L('Reembolsos e casos de revogação são analisados pela Meta. Oriente o cliente a usar o suporte do Meta Verified pelos canais da conta e não prometa valores.', 'Los reembolsos y los casos de revocación los analiza Meta. Orienta al cliente a usar la asistencia de Meta Verified por los canales de la cuenta y no prometas valores.')
        }
      }
    ];
  })(),
  commerce: (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Telas do assistente de criação (Ativos, país, plataforma de parceiro, canais, catálogo e prévia) vistas de verdade no Gerenciador de Comércio da conta de aula em 16/10/2026, em português e espanhol; o botão final não foi clicado (envia a loja para análise). O checklist “Configurar sua loja”, os requisitos e as mudanças de setembro de 2025 vêm da Central de Ajuda da Meta para Empresas (português, lida em 16/10/2026; os detalhes dos 5 requisitos, do artigo em inglês). A tela do checklist no simulador, o passar das semanas e os botões de correção são do treino (a conferir). A disponibilidade das Lojas depende do país.', 'Pantallas del asistente de creación (Activos, país, plataforma de un socio, canales, catálogo y vista previa) vistas de verdad en el Administrador de ventas de la cuenta de clase el 16/10/2026, en portugués y español; el botón final no se hizo clic (envía la tienda a revisión). La lista “Configurar tu tienda”, los requisitos y los cambios de septiembre de 2025 vienen del Centro de ayuda de Meta para Empresas (portugués, leído el 16/10/2026; los detalles de los 5 requisitos, del artículo en inglés). La pantalla de la lista en el simulador, el paso de las semanas y los botones de corrección son del entrenamiento (por confirmar). La disponibilidad de las Tiendas depende del país.');
    var FERR = L('Gerenciador de Comércio (Ativos › Adicionar conta) e Central de Ajuda da Meta para Empresas.', 'Administrador de ventas (Activos › Agregar cuenta) y Centro de ayuda de Meta para Empresas.');
    return [
      {
        id: '01', min: 7, status: 'pronta',
        titulo: L('O que é o Commerce da Meta', 'Qué es Commerce de Meta'),
        antes: L('A Marina tem catálogo e anúncios. Agora quer uma vitrine dentro do Instagram e do Facebook.', 'Marina tiene catálogo y anuncios. Ahora quiere una vitrina dentro de Instagram y Facebook.'),
        gancho: L('“Dá para vender direto no Instagram?” Quase: a loja mostra, e a compra termina no site.', '“¿Se puede vender directo en Instagram?” Casi: la tienda muestra, y la compra termina en el sitio.'),
        objetivo: L('Entender o que é o Gerenciador de Comércio, o que é uma loja da Meta e o que ela faz (e não faz).', 'Entender qué es el Administrador de ventas, qué es una tienda de Meta y qué hace (y qué no).'),
        entender: {
          dialogo: [
            ['marina', L('Já tenho catálogo. O que mais o Commerce faz? 🤔', 'Ya tengo catálogo. ¿Qué más hace Commerce? 🤔')],
            ['rafa', L('O Gerenciador de Comércio é a ferramenta central das vendas online no Facebook e no Instagram: nela você gerencia catálogos, configura uma loja e vê atividades de vendas.', 'El Administrador de ventas es la herramienta central de las ventas online en Facebook e Instagram: en él gestionas catálogos, configuras una tienda y ves actividades de ventas.')],
            ['marina', L('E a loja?', '¿Y la tienda?')],
            ['rafa', L('É uma vitrine digital personalizada: página inicial, coleções e páginas de produto, dentro do app. Mas desde setembro de 2025 os clientes são levados ao seu site para finalizar a compra.', 'Es una vitrina digital personalizada: página de inicio, colecciones y páginas de producto, dentro de la app. Pero desde septiembre de 2025 los clientes son llevados a tu sitio para finalizar la compra.')],
            ['pixel', L('A loja é obrigatória para os anúncios das Lojas. Mas para usar etiquetas de produto em posts e anúncios você não precisa de uma loja.', 'La tienda es obligatoria para los anuncios de Tiendas. Pero para usar etiquetas de producto en publicaciones y anuncios no necesitas una tienda.')]
          ],
          pontos: [
            L('<b>Gerenciador de Comércio</b> = catálogos + loja + atividade de vendas.', '<b>Administrador de ventas</b> = catálogos + tienda + actividad de ventas.'),
            L('<b>Loja</b> = vitrine no Facebook e no Instagram; a <b>compra termina no site</b>.', '<b>Tienda</b> = vitrina en Facebook e Instagram; la <b>compra termina en el sitio</b>.'),
            L('<b>Anúncios das Lojas</b> exigem uma loja; etiquetas de produto, não.', '<b>Los anuncios de Tiendas</b> exigen una tienda; las etiquetas de producto, no.')
          ],
          notas: NOTA
        },
        ferramenta: 'o-que-e-commerce',
        atender: {
          cena: L('Eu quero vender dentro do Instagram, sem o cliente sair do app para pagar. Dá? 🙏', 'Quiero vender dentro de Instagram, sin que el cliente salga de la app para pagar. ¿Se puede? 🙏'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Você pode ter uma loja no Facebook e no Instagram, com página inicial, coleções e páginas de produto. Mas, desde setembro de 2025, a finalização da compra é feita no seu site: o cliente navega na loja e termina a compra lá. Vamos ver como configurar.”', '“Puedes tener una tienda en Facebook e Instagram, con página de inicio, colecciones y páginas de producto. Pero, desde septiembre de 2025, la finalización de la compra se hace en tu sitio: el cliente explora la tienda y termina la compra allí. Veamos cómo configurarla.”'), fb: L('Isso! Honesto sobre o que mudou.', '¡Eso! Honesto sobre lo que cambió.') },
            { certa: false, txt: L('“Dá, o cliente paga direto no Instagram.”', '“Sí, el cliente paga directo en Instagram.”'), fb: L('Esse pagamento dentro da Meta foi descontinuado nas Lojas.', 'Ese pago dentro de Meta fue discontinuado en las Tiendas.') },
            { certa: false, txt: L('“Não existe loja no Instagram.”', '“No existe tienda en Instagram.”'), fb: L('Existe, com finalização da compra no site.', 'Existe, con finalización de compra en el sitio.') },
            { certa: false, txt: L('“Pague um plano e a loja libera.”', '“Paga un plan y la tienda se habilita.”'), fb: L('Configurar a loja não custa nada.', 'Configurar la tienda no tiene ningún costo.') }
          ]
        },
        cola: {
          perguntas: [L('A empresa já tem catálogo e site com finalização da compra?', '¿La empresa ya tiene catálogo y sitio con finalización de compra?'), L('Quer só etiquetar produtos ou ter uma loja completa?', '¿Quiere solo etiquetar productos o tener una tienda completa?')],
          conferir: [FERR, L('Catálogo ligado ao portfólio da empresa.', 'Catálogo vinculado al portfolio de la empresa.')],
          frase: L('A loja da Meta funciona como vitrine no Facebook e no Instagram, e a compra é finalizada no site. Vamos ver o que você já tem e como configurar.', 'La tienda de Meta funciona como vitrina en Facebook e Instagram, y la compra se finaliza en el sitio. Veamos qué tienes ya y cómo configurarla.'),
          passos: [L('Confirme que há catálogo e site de compra.', 'Confirma que hay catálogo y sitio de compra.'), L('Explique que a compra termina no site.', 'Explica que la compra termina en el sitio.')],
          encaminhar: L('A disponibilidade das Lojas depende do país: confirme na tela da conta e nos requisitos da Central de Ajuda.', 'La disponibilidad de las Tiendas depende del país: confirma en la pantalla de la cuenta y en los requisitos del Centro de ayuda.')
        }
      },
      {
        id: '02', min: 8, status: 'pronta',
        titulo: L('Criar a loja', 'Crear la tienda'),
        antes: L('A Marina decidiu: quer a loja da Lojinha no Instagram e no Facebook.', 'Marina decidió: quiere la tienda de la Lojinha en Instagram y Facebook.'),
        gancho: L('Cinco telas, um catálogo e uma escolha importante: onde a compra termina.', 'Cinco pantallas, un catálogo y una elección importante: dónde termina la compra.'),
        objetivo: L('Percorrer o assistente de criação da loja: país, plataforma de parceiro, canais, catálogo e prévia.', 'Recorrer el asistente de creación de la tienda: país, plataforma de un socio, canales, catálogo y vista previa.'),
        entender: {
          dialogo: [
            ['marina', L('Cliquei em Adicionar conta e apareceu um assistente. 😬', 'Hice clic en Agregar cuenta y apareció un asistente. 😬')],
            ['rafa', L('Antes, precisa ter controle total do portfólio, da Página e do catálogo. No assistente: primeiro o país (Brasil) e “Começar”; depois, se você usa uma plataforma de parceiro (Shopify, BigCommerce, Feedonomics, DataFeedWatch, Productsup ou Magento), pode configurar por ela.', 'Antes necesitas control total del portfolio, de la página y del catálogo. En el asistente: primero el país (Brasil) y “Empezar”; luego, si usas una plataforma de un socio (Shopify, BigCommerce, Feedonomics, DataFeedWatch, Productsup o Magento), puedes configurar desde ella.')],
            ['marina', L('Eu não uso nenhuma.', 'Yo no uso ninguna.')],
            ['rafa', L('Então “Eu não uso essas plataformas”. Depois, os canais de vendas (a conta com a Página e o Instagram) e o catálogo. Última tela: a prévia, com o método “Finalização da compra em outro site”.', 'Entonces “No uso estas plataformas”. Luego, los canales de venta (la cuenta con la página e Instagram) y el catálogo. Última pantalla: la vista previa, con el método “Finalizar compra en otro sitio web”.')],
            ['pixel', L('Atenção: depois da prévia, não dá para alterar até concluir a configuração, e o botão final envia a loja para análise e aceita o Acordo do Vendedor. Confira tudo antes.', 'Atención: después de la vista previa, no se puede cambiar hasta completar la configuración, y el botón final envía la tienda a revisión y acepta el Acuerdo para vendedores. Revisa todo antes.')]
          ],
          pontos: [
            L('<b>Antes:</b> controle total do portfólio, da Página e do catálogo; Instagram comercial no portfólio.', '<b>Antes:</b> control total del portfolio, de la página y del catálogo; Instagram comercial en el portfolio.'),
            L('<b>5 telas:</b> país → parceiro → canais → catálogo → prévia.', '<b>5 pantallas:</b> país → socio → canales → catálogo → vista previa.'),
            L('<b>Prévia:</b> a compra termina em outro site; o botão final envia para análise.', '<b>Vista previa:</b> la compra termina en otro sitio; el botón final envía a revisión.')
          ],
          notas: NOTA
        },
        ferramenta: 'criar-loja-q',
        praticar: {
          texto: L('No simulador, o Pixel te guia pelas 5 telas reais do assistente até a loja ser criada.', 'En el simulador, el Pixel te guía por las 5 pantallas reales del asistente hasta que se crea la tienda.'),
          tour: 'criar-loja', pagina: 'meta-commerce.html?zerar=1'
        },
        atender: {
          cena: L('Não encontro onde criar a loja! E já mandei criar e não deu certo, pagar é só pelo cartão? 😡', '¡No encuentro dónde crear la tienda! Y ya intenté y no salió, ¿se paga solo con tarjeta? 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Calma: criar a loja não custa nada. No Gerenciador de Comércio, em Ativos, use Adicionar conta e siga as telas: país, plataforma de parceiro (se usa), canais de vendas, catálogo e a prévia. Antes, confirme que você tem controle total do portfólio, da Página e do catálogo.”', '“Calma: crear la tienda no tiene ningún costo. En el Administrador de ventas, en Activos, usa Agregar cuenta y sigue las pantallas: país, plataforma de un socio (si usas), canales de venta, catálogo y vista previa. Antes, confirma que tienes control total del portfolio, de la página y del catálogo.”'), fb: L('Isso! Corrigiu o custo e deu o caminho.', '¡Eso! Corregiste el costo y diste el camino.') },
            { certa: false, txt: L('“Sim, paga com cartão a taxa de criação.”', '“Sí, se paga con tarjeta la tasa de creación.”'), fb: L('Não há taxa: configurar a loja não custa nada.', 'No hay tasa: configurar la tienda no tiene ningún costo.') },
            { certa: false, txt: L('“Me passe a senha que eu crio.”', '“Pásame la contraseña y yo la creo.”'), fb: L('Nunca peça senha: oriente.', 'Nunca pidas contraseñas: orienta.') },
            { certa: false, txt: L('“Crie uma Página nova para cada produto.”', '“Crea una página nueva para cada producto.”'), fb: L('Não: uma loja usa a Página e o catálogo existentes.', 'No: una tienda usa la página y el catálogo existentes.') }
          ]
        },
        cola: {
          perguntas: [L('Você tem controle total do portfólio, da Página e do catálogo?', '¿Tienes control total del portfolio, de la página y del catálogo?'), L('Já usa Shopify ou outra plataforma de parceiro?', '¿Ya usas Shopify u otra plataforma de un socio?')],
          conferir: [FERR, L('Catálogo que será usado na loja.', 'Catálogo que se usará en la tienda.')],
          frase: L('Criar a loja não custa nada. No Gerenciador de Comércio, vamos seguir as telas: país, canais, catálogo e a prévia, e só concluímos depois de conferir tudo.', 'Crear la tienda no tiene ningún costo. En el Administrador de ventas, sigamos las pantallas: país, canales, catálogo y vista previa, y solo finalizamos después de revisar todo.'),
          passos: [L('Abra Ativos e clique em Adicionar conta.', 'Abre Activos y haz clic en Agregar cuenta.'), L('Revise a prévia antes de concluir.', 'Revisa la vista previa antes de finalizar.')],
          encaminhar: L('Se o cliente usa uma plataforma como a Shopify, a loja pode ser configurada por ela; oriente-o a seguir o guia da própria plataforma.', 'Si el cliente usa una plataforma como Shopify, la tienda puede configurarse desde ella; oriéntalo a seguir la guía de la propia plataforma.')
        }
      },
      {
        id: '03', min: 9, status: 'pronta',
        titulo: L('Configurar e publicar a loja', 'Configurar y publicar la tienda'),
        antes: L('A loja da Marina foi criada e enviada para análise. Agora falta deixá-la pronta.', 'La tienda de Marina fue creada y enviada a revisión. Ahora falta dejarla lista.'),
        gancho: L('Seis tarefas e um botão: Publicar loja só liga quando as obrigatórias terminam.', 'Seis tareas y un botón: Publicar tienda solo se enciende cuando terminan las obligatorias.'),
        objetivo: L('Saber as tarefas de “Configurar sua loja”, o prazo da análise e como o perfil de envio e o URL de finalização da compra funcionam.', 'Saber las tareas de “Configurar tu tienda”, el plazo de la revisión y cómo funcionan el perfil de envío y la URL de finalización de compra.'),
        entender: {
          dialogo: [
            ['marina', L('Criei a loja, e agora? 😅', 'Creé la tienda, ¿y ahora? 😅')],
            ['rafa', L('Em Configurar sua loja há tarefas: criar loja (já feita), verificar as informações (a análise), otimizar o catálogo, configurar o perfil de envio, adicionar o URL de finalização da compra, otimizar a loja (opcional) e publicar.', 'En Configurar tu tienda hay tareas: crear tienda (ya hecha), verificar la información (la revisión), optimizar el catálogo, configurar el perfil de envío, agregar la URL de finalización de compra, optimizar la tienda (opcional) y publicar.')],
            ['marina', L('Quanto demora a análise?', '¿Cuánto tarda la revisión?')],
            ['rafa', L('Pode levar até quatro semanas; a Meta atualiza o status no Gerenciador de Comércio e avisa por e-mail se houver ação a fazer.', 'Puede tardar hasta cuatro semanas; Meta actualiza el estado en el Administrador de ventas y avisa por correo si hay alguna acción por hacer.')],
            ['pixel', L('No perfil de envio você coloca pelo menos um prazo: padrão (5 a 8 dias), rápido (3 a 5) ou expresso (2 a 3), incluindo o processamento. E o URL de finalização da compra é obrigatório: sem ele a loja não fica visível.', 'En el perfil de envío pones al menos un plazo: estándar (5 a 8 días), rápido (3 a 5) o exprés (2 a 3), incluido el procesamiento. Y la URL de finalización de compra es obligatoria: sin ella la tienda no queda visible.')]
          ],
          pontos: [
            L('<b>Análise:</b> até quatro semanas; o status aparece no Gerenciador de Comércio.', '<b>Revisión:</b> hasta cuatro semanas; el estado aparece en el Administrador de ventas.'),
            L('<b>Perfil de envio:</b> pelo menos um prazo de entrega.', '<b>Perfil de envío:</b> al menos un plazo de entrega.'),
            L('<b>URL de finalização da compra:</b> obrigatório para a loja ficar visível.', '<b>URL de finalización de compra:</b> obligatoria para que la tienda sea visible.')
          ],
          notas: NOTA
        },
        ferramenta: 'configurar-loja-q',
        praticar: {
          texto: L('No simulador, o Pixel te guia pelo checklist: perfil de envio, URL de finalização da compra, a espera da análise e a publicação.', 'En el simulador, el Pixel te guía por la lista: perfil de envío, URL de finalización de compra, la espera de la revisión y la publicación.'),
          tour: 'configurar-loja', pagina: 'meta-commerce.html?loja=1'
        },
        atender: {
          cena: L('Faz duas semanas e minha loja ainda não foi aprovada. Vocês me enrolando? 😠', 'Hace dos semanas y mi tienda todavía no fue aprobada. ¿Me están dando vueltas? 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Entendo a ansiedade. A análise da loja pode levar até quatro semanas, e o status é atualizado no Gerenciador de Comércio; se houver algo a corrigir, a Meta avisa por e-mail. Enquanto isso, vamos terminar o perfil de envio e o URL de finalização da compra para a loja sair assim que for aprovada.”', '“Entiendo la ansiedad. La revisión de la tienda puede tardar hasta cuatro semanas, y el estado se actualiza en el Administrador de ventas; si hay algo que corregir, Meta avisa por correo. Mientras tanto, terminemos el perfil de envío y la URL de finalización de compra para que la tienda salga apenas sea aprobada.”'), fb: L('Isso! Deu o prazo real e o que adiantar.', '¡Eso! Diste el plazo real y qué adelantar.') },
            { certa: false, txt: L('“Em 24 horas está aprovada.”', '“En 24 horas está aprobada.”'), fb: L('O prazo oficial é de até quatro semanas.', 'El plazo oficial es de hasta cuatro semanas.') },
            { certa: false, txt: L('“Crie outra loja, assim vai mais rápido.”', '“Crea otra tienda, así va más rápido.”'), fb: L('Criar outra só reinicia o processo.', 'Crear otra solo reinicia el proceso.') },
            { certa: false, txt: L('“Publique agora mesmo.”', '“Publica ahora mismo.”'), fb: L('Só dá para publicar quando as etapas obrigatórias terminam.', 'Solo se puede publicar cuando terminan las etapas obligatorias.') }
          ]
        },
        cola: {
          perguntas: [L('O que aparece em “Verificar as informações da sua loja”?', '¿Qué aparece en “Verificar la información de tu tienda”?'), L('O perfil de envio e o URL de finalização da compra já foram adicionados?', '¿El perfil de envío y la URL de finalización de compra ya fueron agregados?')],
          conferir: [FERR, L('Checklist “Configurar sua loja”.', 'Lista “Configurar tu tienda”.')],
          frase: L('A análise da loja pode levar até quatro semanas. Vamos deixar tudo pronto: perfil de envio e URL de finalização da compra, para publicar assim que ela for aprovada.', 'La revisión de la tienda puede tardar hasta cuatro semanas. Dejemos todo listo: perfil de envío y URL de finalización de compra, para publicar apenas sea aprobada.'),
          passos: [L('Adicione pelo menos um prazo de entrega.', 'Agrega al menos un plazo de entrega.'), L('Cole o URL de finalização da compra do site.', 'Pega la URL de finalización de compra del sitio.')],
          encaminhar: L('Se a análise passar de quatro semanas, oriente o cliente a falar com o suporte da Meta pelos canais da conta.', 'Si la revisión pasa de cuatro semanas, orienta al cliente a hablar con la asistencia de Meta por los canales de la cuenta.')
        }
      },
      {
        id: '04', min: 9, status: 'pronta',
        titulo: L('“Minha loja não aparece”', '“Mi tienda no aparece”'),
        antes: L('A Marina diz que a loja ainda não aparece para os clientes.', 'Marina dice que la tienda todavía no aparece para los clientes.'),
        gancho: L('Quase sempre é um requisito, uma etapa do checklist ou o status. Vamos por ordem.', 'Casi siempre es un requisito, una etapa de la lista o el estado. Vamos en orden.'),
        objetivo: L('Conferir os 5 requisitos de qualificação, o domínio e a política de devolução e seguir a ordem de conferência.', 'Revisar los 5 requisitos de calificación, el dominio y la política de devolución y seguir el orden de revisión.'),
        entender: {
          dialogo: [
            ['marina', L('A loja não aparece. Por onde começo? 😩', 'La tienda no aparece. ¿Por dónde empiezo? 😩')],
            ['rafa', L('Pelos requisitos: cumprir as políticas, representar sua empresa e seu domínio, estar em um país compatível, demonstrar confiabilidade e fornecer informações precisas e seguir as boas práticas. Não cumprir a qualquer momento pode levar à perda de acesso aos recursos de comércio.', 'Por los requisitos: cumplir las políticas, representar a tu empresa y tu dominio, estar en un país compatible, demostrar confiabilidad y proporcionar información precisa y seguir las buenas prácticas. No cumplirlos en cualquier momento puede llevar a la pérdida de acceso a las funciones de comercio.')],
            ['marina', L('E o que é “representar o domínio”?', '¿Y qué es “representar el dominio”?')],
            ['rafa', L('Informar à Meta um único domínio, sem encurtadores de link, pelo qual você vende; a Meta pode pedir a verificação de domínio para confirmar que é seu. E, nas boas práticas, a política de devolução e reembolso precisa estar clara e acessível.', 'Informar a Meta un único dominio, sin acortadores de enlaces, por el cual vendes; Meta puede pedir la verificación del dominio para confirmar que es tuyo. Y, en las buenas prácticas, la política de devolución y reembolso debe estar clara y accesible.')],
            ['pixel', L('Depois dos requisitos, veja o checklist: análise concluída, perfil de envio e URL de finalização da compra. Sem o URL a loja não fica visível. Só então publique.', 'Después de los requisitos, mira la lista: revisión terminada, perfil de envío y URL de finalización de compra. Sin la URL la tienda no queda visible. Solo entonces publica.')]
          ],
          pontos: [
            L('<b>1º requisitos:</b> políticas, domínio, país, confiabilidade, informações precisas.', '<b>1.º requisitos:</b> políticas, dominio, país, confiabilidad, información precisa.'),
            L('<b>Domínio:</b> um só, sem encurtadores; pode exigir verificação.', '<b>Dominio:</b> uno solo, sin acortadores; puede exigir verificación.'),
            L('<b>2º checklist:</b> análise, envio, URL; <b>3º</b> publicar.', '<b>2.º lista:</b> revisión, envío, URL; <b>3.º</b> publicar.')
          ],
          notas: NOTA
        },
        ferramenta: 'loja-nao-aparece-q',
        praticar: {
          texto: L('No simulador, a análise pede ação: domínio e política de devolução faltando. O Pixel te guia na ordem certa.', 'En el simulador, la revisión pide acción: faltan el dominio y la política de devolución. El Pixel te guía en el orden correcto.'),
          tour: 'loja-nao-aparece', pagina: 'meta-commerce.html?problema=1'
        },
        atender: {
          cena: L('Minha loja não aparece e eu preciso vender hoje! Libere para mim! 😡', '¡Mi tienda no aparece y necesito vender hoy! ¡Habilítala para mí! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Entendo a urgência. Eu não consigo liberar por fora, mas posso te guiar na ordem certa: primeiro os requisitos (domínio, política de devolução, informações corretas), depois o status da análise, o perfil de envio e o URL de finalização da compra; só então dá para publicar.”', '“Entiendo la urgencia. No puedo habilitarla por fuera, pero puedo guiarte en el orden correcto: primero los requisitos (dominio, política de devolución, información correcta), luego el estado de la revisión, el perfil de envío y la URL de finalización de compra; solo entonces se puede publicar.”'), fb: L('Isso! Acolheu e deu a ordem.', '¡Eso! Acogiste y diste el orden.') },
            { certa: false, txt: L('“Vou aprovar agora.”', '“La apruebo ahora.”'), fb: L('Ninguém aprova por fora.', 'Nadie aprueba por fuera.') },
            { certa: false, txt: L('“Use um link encurtado no URL, é mais fácil.”', '“Usa un enlace acortado en la URL, es más fácil.”'), fb: L('Encurtadores não são aceitos: use o domínio da loja.', 'Los acortadores no se aceptan: usa el dominio de la tienda.') },
            { certa: false, txt: L('“Apague a loja e comece de novo.”', '“Elimina la tienda y empieza de nuevo.”'), fb: L('Antes confira requisitos e checklist.', 'Antes revisa requisitos y lista.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o domínio da loja? Ele foi informado e verificado?', '¿Cuál es el dominio de la tienda? ¿Fue informado y verificado?'), L('A política de devolução e reembolso está visível no site?', '¿La política de devolución y reembolso está visible en el sitio?')],
          conferir: [FERR, L('Requisitos de qualificação para comércio (Central de Ajuda).', 'Requisitos de calificación para comercio (Centro de ayuda).')],
          frase: L('Vamos por ordem: primeiro os requisitos (domínio e política de devolução), depois a análise, o perfil de envio e o URL de finalização da compra; aí publicamos.', 'Vamos en orden: primero los requisitos (dominio y política de devolución), luego la revisión, el perfil de envío y la URL de finalización de compra; entonces publicamos.'),
          passos: [L('Confira os 5 requisitos.', 'Revisa los 5 requisitos.'), L('Complete o checklist e publique.', 'Completa la lista y publica.')],
          encaminhar: L('Se tudo estiver certo e a loja continuar invisível, oriente o cliente a seguir as mensagens da conta e o suporte da Meta.', 'Si todo está correcto y la tienda sigue invisible, orienta al cliente a seguir los mensajes de la cuenta y la asistencia de Meta.')
        }
      },
      {
        id: '05', min: 9, status: 'pronta',
        titulo: L('Finalização da compra no site: o que mudou', 'Finalización de compra en el sitio: qué cambió'),
        antes: L('Uma cliente antiga da Marina pergunta onde foram parar os pedidos e as devoluções da loja dela.', 'Una clienta antigua de Marina pregunta adónde fueron los pedidos y las devoluciones de su tienda.'),
        gancho: L('Desde setembro de 2025, tudo que vem depois do clique em “comprar” acontece no site.', 'Desde septiembre de 2025, todo lo que viene después del clic en “comprar” ocurre en el sitio.'),
        objetivo: L('Explicar o que foi descontinuado e o que continua nas Lojas, e como ficam os anúncios e os relatórios.', 'Explicar qué fue discontinuado y qué continúa en las Tiendas, y cómo quedan los anuncios y los informes.'),
        entender: {
          dialogo: [
            ['marina', L('Cadê o gerenciamento de pedidos no Gerenciador de Comércio? 😕', '¿Dónde está la gestión de pedidos en el Administrador de ventas? 😕')],
            ['rafa', L('A partir de setembro de 2025, as Lojas passaram a usar a finalização da compra no site. Por isso foram descontinuados o processamento de pagamentos, o gerenciamento de pedidos novos, as devoluções, as contestações e estornos e a Caixa de Entrada para clientes. Isso tudo passa a ser no seu site.', 'A partir de septiembre de 2025, las Tiendas pasaron a usar la finalización de compra en el sitio. Por eso se discontinuaron el procesamiento de pagos, la gestión de pedidos nuevos, las devoluciones, las disputas y reembolsos forzosos y la Bandeja de entrada para clientes. Todo eso pasa a hacerse en tu sitio.')],
            ['marina', L('E a loja continua?', '¿Y la tienda continúa?')],
            ['rafa', L('Continua, com página inicial, coleções e páginas de produto; só a compra termina no site.', 'Continúa, con página de inicio, colecciones y páginas de producto; solo la compra termina en el sitio.')],
            ['pixel', L('Nos anúncios das Lojas, o local da conversão “Site e loja” acabou: escolha Site. E no relatório, “compras na Meta” aparecem como 0, mas os dados antigos ficam por até 39 meses. Acompanhe “Compras no site”.', 'En los anuncios de Tiendas, el lugar de conversión “Sitio y tienda” terminó: elige Sitio. Y en el informe, “compras en Meta” aparecen como 0, pero los datos antiguos se conservan hasta 39 meses. Sigue “Compras en el sitio”.')]
          ],
          pontos: [
            L('<b>Descontinuado:</b> pagamentos, pedidos novos, devoluções, estornos, Caixa de Entrada.', '<b>Discontinuado:</b> pagos, pedidos nuevos, devoluciones, reembolsos forzosos, Bandeja de entrada.'),
            L('<b>Continua:</b> página inicial, coleções, páginas de produto, catálogo.', '<b>Continúa:</b> página de inicio, colecciones, páginas de producto, catálogo.'),
            L('<b>Anúncios:</b> local da conversão = Site; “compras na Meta” = 0.', '<b>Anuncios:</b> lugar de conversión = Sitio; “compras en Meta” = 0.')
          ],
          notas: NOTA
        },
        ferramenta: 'mudancas-checkout-q',
        praticar: {
          texto: L('No simulador, o Pixel te guia por uma lista “descontinuado × continua”, pelo local da conversão nos anúncios e pelas métricas em 0.', 'En el simulador, el Pixel te guía por una lista “discontinuado × continúa”, por el lugar de conversión en los anuncios y por las métricas en 0.'),
          tour: 'mudancas-checkout', pagina: 'meta-commerce.html?zerar=1'
        },
        atender: {
          cena: L('Minhas compras na Meta viraram zero no relatório! Meus anúncios pararam de vender? 😱', '¡Mis compras en Meta pasaron a cero en el informe! ¿Mis anuncios dejaron de vender? 😱'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Calma: desde a mudança de setembro de 2025, as compras acontecem só no seu site, e as métricas de compras na Meta passam a aparecer como 0; não quer dizer que as vendas pararam. Os dados antigos ficam por até 39 meses. Para acompanhar, use Compras no site, Compras com assistência das lojas ou Compras direto no site.”', '“Calma: desde el cambio de septiembre de 2025, las compras ocurren solo en tu sitio, y las métricas de compras en Meta pasan a aparecer como 0; no significa que las ventas se detuvieron. Los datos antiguos se conservan hasta 39 meses. Para seguir, usa Compras en el sitio, Compras con asistencia de las tiendas o Compras directas en el sitio.”'), fb: L('Isso! Explicou sem alarme e deu as métricas certas.', '¡Eso! Explicaste sin alarma y diste las métricas correctas.') },
            { certa: false, txt: L('“Sim, os anúncios quebraram.”', '“Sí, los anuncios se rompieron.”'), fb: L('Não: é efeito da mudança do método de finalização.', 'No: es efecto del cambio del método de finalización.') },
            { certa: false, txt: L('“Crie outra conta de anúncios.”', '“Crea otra cuenta publicitaria.”'), fb: L('Não resolve: as compras são medidas no site.', 'No resuelve: las compras se miden en el sitio.') },
            { certa: false, txt: L('“Reative o pagamento na Meta.”', '“Reactiva el pago en Meta.”'), fb: L('O processamento de pagamentos nas Lojas foi descontinuado.', 'El procesamiento de pagos en las Tiendas fue discontinuado.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o período do relatório: inclui datas antes ou depois de setembro de 2025?', '¿Cuál es el período del informe: incluye fechas antes o después de septiembre de 2025?'), L('Que local de conversão está nos anúncios das Lojas?', '¿Qué lugar de conversión hay en los anuncios de Tiendas?')],
          conferir: [L('Gerenciador de Anúncios › local da conversão e destinos personalizados.', 'Administrador de anuncios › lugar de conversión y destinos personalizados.'), L('Relatórios: Compras no site.', 'Informes: Compras en el sitio.')],
          frase: L('Desde setembro de 2025 a finalização da compra é no site, e as métricas de compras na Meta aparecem como 0. Vamos acompanhar as compras no site.', 'Desde septiembre de 2025 la finalización de compra es en el sitio, y las métricas de compras en Meta aparecen como 0. Sigamos las compras en el sitio.'),
          passos: [L('Veja o local da conversão do anúncio.', 'Mira el lugar de conversión del anuncio.'), L('Troque a métrica do relatório para Compras no site.', 'Cambia la métrica del informe a Compras en el sitio.')],
          encaminhar: L('Pedidos, devoluções e contestações agora são do site do cliente: oriente-o a usar a plataforma de e-commerce dele.', 'Los pedidos, devoluciones y disputas ahora son del sitio del cliente: oriéntalo a usar su plataforma de comercio electrónico.')
        }
      }
    ];
  })(),
  'shop-ads': (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Conteúdo da Central de Ajuda da Meta para Empresas lida em 16/10/2026 (português): “Sobre os anúncios das Lojas”, “Como criar um anúncio das Lojas…”, “Por que os anúncios das Lojas só podem direcionar pessoas para seu site”, “Boas práticas…”, “Como entender seus relatórios…” e “Países com suporte para Lojas…”. O Brasil aparece como beta aberto: “alguns vendedores podem não ter recursos completos”. Na conta de aula, o Gerenciador de Anúncios foi visto de verdade, mas a aba Loja e o botão Loja (em Destinos personalizados) não puderam ser vistos, porque a conta não tem loja publicada. As telas do simulador e os números do relatório são do treino (a conferir).', 'Contenido del Centro de ayuda de Meta para Empresas leído el 16/10/2026 (portugués): “Acerca de los anuncios de Tiendas”, “Cómo crear un anuncio de Tiendas…”, “Por qué los anuncios de Tiendas solo pueden dirigir a las personas a tu sitio web”, “Buenas prácticas…”, “Cómo entender tus informes…” y “Países compatibles con las Tiendas…”. Brasil aparece como beta abierto: “algunos vendedores pueden no tener funciones completas”. En la cuenta de clase, el Administrador de anuncios se vio de verdad, pero la pestaña Tienda y el botón Tienda (en Destinos personalizados) no pudieron verse, porque la cuenta no tiene tienda publicada. Las pantallas del simulador y los números del informe son del entrenamiento (por confirmar).');
    var FERR = L('Gerenciador de Anúncios › Criar › Vendas, e a loja no Gerenciador de Comércio.', 'Administrador de anuncios › Crear › Ventas, y la tienda en el Administrador de ventas.');
    return [
      {
        id: '01', min: 7, status: 'pronta',
        titulo: L('O que são os anúncios das Lojas', 'Qué son los anuncios de Tiendas'),
        antes: L('A Marina já tem a loja. Agora quer anúncios que levem as pessoas até ela.', 'Marina ya tiene la tienda. Ahora quiere anuncios que lleven a las personas hasta ella.'),
        gancho: L('“Anúncio da loja” não é só um anúncio com link: a Meta decide para onde a pessoa vai.', '“Anuncio de la tienda” no es solo un anuncio con enlace: Meta decide adónde va la persona.'),
        objetivo: L('Entender o que são os anúncios das Lojas, para quem servem e onde estão disponíveis (inclusive o Brasil).', 'Entender qué son los anuncios de Tiendas, para quién sirven y dónde están disponibles (incluido Brasil).'),
        entender: {
          dialogo: [
            ['marina', L('O que é um anúncio das Lojas (Shop Ads)? 🤔', '¿Qué es un anuncio de Tiendas (Shop Ads)? 🤔')],
            ['rafa', L('É um anúncio que usa a sua loja. Com tecnologia de IA, ele envia cada pessoa ao destino com mais chance de gerar uma conversão: o seu site ou a sua loja no Facebook e no Instagram.', 'Es un anuncio que usa tu tienda. Con tecnología de IA, envía a cada persona al destino con más probabilidad de generar una conversión: tu sitio web o tu tienda en Facebook e Instagram.')],
            ['marina', L('Posso escolher para onde vai cada pessoa?', '¿Puedo elegir adónde va cada persona?')],
            ['rafa', L('Você escolhe o destino da loja (página inicial, um produto ou uma coleção), mas é a Meta quem decide, pessoa a pessoa, entre site e loja. E uma loja é obrigatória para esse tipo de anúncio.', 'Eliges el destino de la tienda (página de inicio, un producto o una colección), pero es Meta quien decide, persona a persona, entre sitio y tienda. Y una tienda es obligatoria para este tipo de anuncio.')],
            ['pixel', L('Disponibilidade: a experiência completa é nos EUA. O Brasil está em beta aberto, e alguns vendedores podem não ter todos os recursos. Confirme sempre na conta.', 'Disponibilidad: la experiencia completa es en EE. UU. Brasil está en beta abierto, y algunos vendedores pueden no tener todas las funciones. Confirma siempre en la cuenta.')]
          ],
          pontos: [
            L('<b>Anúncio das Lojas</b> = anúncio de Vendas ligado à loja; a Meta escolhe site ou loja.', '<b>Anuncio de Tiendas</b> = anuncio de Ventas vinculado a la tienda; Meta elige sitio o tienda.'),
            L('<b>Exige uma loja</b> (etiquetas de produto não exigem).', '<b>Exige una tienda</b> (las etiquetas de producto no).'),
            L('<b>Brasil:</b> beta aberto; recursos podem ser parciais.', '<b>Brasil:</b> beta abierto; las funciones pueden ser parciales.')
          ],
          notas: NOTA
        },
        ferramenta: 'o-que-e-shopads',
        atender: {
          cena: L('Quero que todo mundo que clicar no anúncio caia direto na minha loja do Instagram, nunca no site. Dá para forçar? 🙏', 'Quiero que todos los que hagan clic en el anuncio caigan directo en mi tienda de Instagram, nunca en el sitio. ¿Se puede forzar? 🙏'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Nos anúncios das Lojas, quem decide é a Meta: ela envia cada pessoa ao destino com maior chance de converter, que pode ser a loja ou o site. Você escolhe o destino da loja (página inicial, produto ou coleção) e pode permitir que a Meta escolha o melhor caminho. E lembre que a compra termina no seu site.”', '“En los anuncios de Tiendas, quien decide es Meta: envía a cada persona al destino con más probabilidad de convertir, que puede ser la tienda o el sitio. Tú eliges el destino de la tienda (página de inicio, producto o colección) y puedes permitir que Meta elija el mejor camino. Y recuerda que la compra termina en tu sitio.”'), fb: L('Isso! Explicou a lógica e o limite.', '¡Eso! Explicaste la lógica y el límite.') },
            { certa: false, txt: L('“Dá, é só marcar a opção ‘só loja’.”', '“Sí, solo marca la opción ‘solo tienda’.”'), fb: L('Não existe essa opção nos anúncios das Lojas.', 'No existe esa opción en los anuncios de Tiendas.') },
            { certa: false, txt: L('“Use um link encurtado da loja.”', '“Usa un enlace acortado de la tienda.”'), fb: L('Isso não muda a lógica e pode atrapalhar.', 'Eso no cambia la lógica y puede estorbar.') },
            { certa: false, txt: L('“Não se preocupe, a Meta sempre manda para a loja.”', '“No te preocupes, Meta siempre manda a la tienda.”'), fb: L('Não: ela decide pessoa a pessoa.', 'No: decide persona a persona.') }
          ]
        },
        cola: {
          perguntas: [L('A empresa já tem loja e catálogo? Em qual país a loja foi criada?', '¿La empresa ya tiene tienda y catálogo? ¿En qué país se creó la tienda?'), L('O objetivo é vender no site, na loja ou nos dois?', '¿El objetivo es vender en el sitio, en la tienda o en ambos?')],
          conferir: [FERR, L('Países com suporte para Lojas (Central de Ajuda).', 'Países compatibles con Tiendas (Centro de ayuda).')],
          frase: L('Os anúncios das Lojas usam a sua loja e a Meta envia cada pessoa ao site ou à loja, conforme a chance de conversão. No Brasil o recurso está em beta aberto, então vamos conferir o que aparece na sua conta.', 'Los anuncios de Tiendas usan tu tienda y Meta envía a cada persona al sitio o a la tienda, según la probabilidad de conversión. En Brasil la función está en beta abierto, así que revisemos qué aparece en tu cuenta.'),
          passos: [L('Confirme que a loja existe e está publicada.', 'Confirma que la tienda existe y está publicada.'), L('Explique que a Meta escolhe o destino.', 'Explica que Meta elige el destino.')],
          encaminhar: L('Se os recursos não aparecerem na conta, pode ser a limitação do beta: oriente o cliente a seguir os avisos da conta e o suporte da Meta.', 'Si las funciones no aparecen en la cuenta, puede ser la limitación del beta: orienta al cliente a seguir los avisos de la cuenta y la asistencia de Meta.')
        }
      },
      {
        id: '02', min: 8, status: 'pronta',
        titulo: L('Antes de criar o anúncio', 'Antes de crear el anuncio'),
        antes: L('A Marina quer criar o primeiro anúncio das Lojas, mas não sabe se está tudo pronto.', 'Marina quiere crear el primer anuncio de Tiendas, pero no sabe si está todo listo.'),
        gancho: L('Cinco ativos e as permissões certas: sem isso, nem o botão da loja aparece.', 'Cinco activos y los permisos correctos: sin eso, ni aparece el botón de la tienda.'),
        objetivo: L('Conferir os 5 ativos exigidos e as permissões, e saber onde conferir identidade e catálogo da loja.', 'Revisar los 5 activos exigidos y los permisos, y saber dónde revisar identidad y catálogo de la tienda.'),
        entender: {
          dialogo: [
            ['marina', L('O que preciso ter antes de criar o anúncio? 😬', '¿Qué necesito tener antes de crear el anuncio? 😬')],
            ['rafa', L('Cinco coisas: uma loja no Facebook e no Instagram; uma Página ou conta do Instagram conectada à loja; um catálogo conectado à loja; um Pixel da Meta conectado ao catálogo; e uma conta de anúncios.', 'Cinco cosas: una tienda en Facebook e Instagram; una página o cuenta de Instagram vinculada a la tienda; un catálogo vinculado a la tienda; un píxel de Meta vinculado al catálogo; y una cuenta publicitaria.')],
            ['marina', L('E quem pode criar?', '¿Y quién puede crearlo?')],
            ['rafa', L('Quem tem controle total desses ativos, ou a permissão certa: permissão de Lojas, permissão de anúncio, permissão para criar anúncios no catálogo e permissão para gerenciar campanhas na conta de anúncios.', 'Quien tiene control total de esos activos, o el permiso correcto: permiso de Tiendas, permiso de anuncios, permiso para crear anuncios en el catálogo y permiso para administrar campañas en la cuenta publicitaria.')],
            ['pixel', L('A Central de Ajuda também ensina a conferir qual identidade e qual catálogo estão ligados à loja. É um bom primeiro passo quando algo não aparece.', 'El Centro de ayuda también enseña a revisar qué identidad y qué catálogo están vinculados a la tienda. Es un buen primer paso cuando algo no aparece.')]
          ],
          pontos: [
            L('<b>5 ativos:</b> loja, Página/Instagram, catálogo, Pixel, conta de anúncios.', '<b>5 activos:</b> tienda, página/Instagram, catálogo, píxel, cuenta publicitaria.'),
            L('<b>Permissões:</b> controle total ou a permissão específica de cada ativo.', '<b>Permisos:</b> control total o el permiso específico de cada activo.'),
            L('<b>Conferir</b> identidade e catálogo ligados à loja.', '<b>Revisar</b> identidad y catálogo vinculados a la tienda.')
          ],
          notas: NOTA
        },
        ferramenta: 'antes-shopads',
        praticar: {
          texto: L('No simulador, o Pixel te guia pelos 5 ativos, acha o que falta e confere a loja.', 'En el simulador, el Pixel te guía por los 5 activos, encuentra lo que falta y revisa la tienda.'),
          tour: 'antes-de-criar', pagina: 'meta-shopads.html?zerar=1'
        },
        atender: {
          cena: L('Quero criar o anúncio das Lojas, mas a opção da loja nem aparece! 😠', '¡Quiero crear el anuncio de Tiendas, pero la opción de la tienda ni aparece! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Vamos conferir os ativos: precisa ter loja, Página ou Instagram ligados à loja, catálogo ligado, Pixel ligado ao catálogo e conta de anúncios, e as permissões certas. Também vale confirmar qual identidade e qual catálogo estão ligados à loja. E no Brasil o recurso está em beta aberto.”', '“Revisemos los activos: se necesita tienda, página o Instagram vinculados a la tienda, catálogo vinculado, píxel vinculado al catálogo y cuenta publicitaria, y los permisos correctos. También conviene confirmar qué identidad y qué catálogo están vinculados a la tienda. Y en Brasil la función está en beta abierto.”'), fb: L('Isso! Lista completa e honesta sobre o beta.', '¡Eso! Lista completa y honesta sobre el beta.') },
            { certa: false, txt: L('“Crie outro anúncio normal, é igual.”', '“Crea otro anuncio normal, es igual.”'), fb: L('Um anúncio normal não usa a loja.', 'Un anuncio normal no usa la tienda.') },
            { certa: false, txt: L('“Me passe a senha da conta que eu ligo.”', '“Pásame la contraseña de la cuenta y yo lo activo.”'), fb: L('Nunca peça senha: oriente.', 'Nunca pidas contraseñas: orienta.') },
            { certa: false, txt: L('“Compre um plano premium.”', '“Compra un plan premium.”'), fb: L('Não existe plano para isso.', 'No existe un plan para eso.') }
          ]
        },
        cola: {
          perguntas: [L('Qual dos 5 ativos falta? Quem tem controle total da conta?', '¿Cuál de los 5 activos falta? ¿Quién tiene control total de la cuenta?'), L('A loja já está publicada?', '¿La tienda ya está publicada?')],
          conferir: [FERR, L('Pixel e catálogo ligados.', 'Píxel y catálogo vinculados.')],
          frase: L('Vamos conferir os cinco ativos do anúncio das Lojas, um por um, antes de criar a campanha.', 'Revisemos los cinco activos del anuncio de Tiendas, uno por uno, antes de crear la campaña.'),
          passos: [L('Confira loja, Página/Instagram, catálogo, Pixel e conta de anúncios.', 'Revisa tienda, página/Instagram, catálogo, píxel y cuenta publicitaria.'), L('Veja as permissões de quem vai criar.', 'Mira los permisos de quien va a crear.')],
          encaminhar: L('Dar permissão é decisão do dono do portfólio: oriente o cliente a ajustar em Configurações do negócio.', 'Dar permiso es decisión del dueño del portfolio: orienta al cliente a ajustar en Configuración del negocio.')
        }
      },
      {
        id: '03', min: 9, status: 'pronta',
        titulo: L('Criar o anúncio das Lojas', 'Crear el anuncio de Tiendas'),
        antes: L('Os ativos da Marina estão em dia. Hora de criar a campanha.', 'Los activos de Marina están al día. Hora de crear la campaña.'),
        gancho: L('Vendas, Site e o botão Loja: três escolhas que transformam um anúncio comum em um anúncio das Lojas.', 'Ventas, Sitio y el botón Tienda: tres elecciones que convierten un anuncio común en un anuncio de Tiendas.'),
        objetivo: L('Criar um anúncio das Lojas: objetivo Vendas, local Site, evento de conversão compatível, botão Loja e destino da loja.', 'Crear un anuncio de Tiendas: objetivo Ventas, lugar Sitio web, evento de conversión compatible, botón Tienda y destino de la tienda.'),
        entender: {
          dialogo: [
            ['marina', L('Por onde começo? 😅', '¿Por dónde empiezo? 😅')],
            ['rafa', L('No Gerenciador de Anúncios: Criar, objetivo Vendas, e a campanha de vendas Advantage+. No conjunto, o local da conversão é Site (o antigo “Site e loja” acabou) e o evento de conversão precisa ser compatível.', 'En el Administrador de anuncios: Crear, objetivo Ventas, y la campaña de ventas Advantage+. En el conjunto, el lugar de conversión es Sitio web (el antiguo “Sitio web y tienda” terminó) y el evento de conversión debe ser compatible.')],
            ['marina', L('Quais eventos?', '¿Qué eventos?')],
            ['rafa', L('Adicionar ao carrinho, Adicionar à lista de desejos, Iniciar finalização da compra, Compra e Conteúdo visualizado. Com outro evento, o botão Loja não aparece.', 'Agregar al carrito, Agregar a la lista de deseos, Iniciar compra, Compra y Contenido visto. Con otro evento, el botón Tienda no aparece.')],
            ['pixel', L('No anúncio: destino principal Site com a URL, e em Destinos personalizados, aba Loja, ative o botão Loja e escolha o destino da loja (página inicial, produto ou coleção). Recomenda-se marcar a caixa que deixa a Meta escolher o melhor caminho. Depois, Publicar: o anúncio sai após a análise.', 'En el anuncio: destino principal Sitio web con la URL, y en Destinos personalizados, pestaña Tienda, activa el botón Tienda y elige el destino de la tienda (página de inicio, producto o colección). Se recomienda marcar la casilla que deja a Meta elegir el mejor camino. Luego, Publicar: el anuncio sale después de la revisión.')]
          ],
          pontos: [
            L('<b>Vendas</b> + <b>local Site</b>; o “Site e loja” não existe mais.', '<b>Ventas</b> + <b>lugar Sitio web</b>; “Sitio web y tienda” ya no existe.'),
            L('<b>Eventos compatíveis:</b> carrinho, lista de desejos, iniciar compra, compra, conteúdo visualizado.', '<b>Eventos compatibles:</b> carrito, lista de deseos, iniciar compra, compra, contenido visto.'),
            L('<b>Botão Loja</b> em Destinos personalizados é o que torna o anúncio das Lojas.', '<b>El botón Tienda</b> en Destinos personalizados es lo que hace que sea un anuncio de Tiendas.')
          ],
          notas: NOTA
        },
        ferramenta: 'criar-shopads',
        praticar: {
          texto: L('No simulador, o Pixel te guia pelos 3 níveis (campanha, conjunto e anúncio) até publicar um anúncio das Lojas.', 'En el simulador, el Pixel te guía por los 3 niveles (campaña, conjunto y anuncio) hasta publicar un anuncio de Tiendas.'),
          tour: 'criar-anuncio-lojas', pagina: 'meta-shopads.html?zerar=1'
        },
        atender: {
          cena: L('Eu escolhi “Compra” e o botão Loja sumiu! Antes aparecia “Site e loja”! 😡', '¡Elegí “Compra” y el botón Tienda desapareció! ¡Antes aparecía “Sitio web y tienda”! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“O local ‘Site e loja’ não existe mais: agora o local da conversão é Site, e a loja entra em Destinos personalizados, ativando o botão Loja. Para o botão aparecer, o evento de conversão precisa ser um dos compatíveis; ‘Compra’ é. Vamos ver o destino principal e o evento.”', '“El lugar ‘Sitio web y tienda’ ya no existe: ahora el lugar de conversión es Sitio web, y la tienda entra en Destinos personalizados, activando el botón Tienda. Para que el botón aparezca, el evento de conversión debe ser uno de los compatibles; ‘Compra’ lo es. Veamos el destino principal y el evento.”'), fb: L('Isso! Explicou a mudança e o caminho.', '¡Eso! Explicaste el cambio y el camino.') },
            { certa: false, txt: L('“Foi um bug, espere voltar.”', '“Fue un bug, espera a que vuelva.”'), fb: L('Não: o local mudou.', 'No: el lugar cambió.') },
            { certa: false, txt: L('“Escolha o objetivo Tráfego.”', '“Elige el objetivo Tráfico.”'), fb: L('O caminho é o objetivo Vendas.', 'El camino es el objetivo Ventas.') },
            { certa: false, txt: L('“Crie uma campanha por produto.”', '“Crea una campaña por producto.”'), fb: L('Não é isso.', 'No es eso.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o objetivo, o local da conversão e o evento escolhidos?', '¿Cuál es el objetivo, el lugar de conversión y el evento elegidos?'), L('O botão Loja aparece em Destinos personalizados?', '¿El botón Tienda aparece en Destinos personalizados?')],
          conferir: [FERR, L('Evento de conversão e destino principal.', 'Evento de conversión y destino principal.')],
          frase: L('Para o anúncio ser das Lojas, usamos o objetivo Vendas, local Site, um evento compatível e ativamos o botão Loja em Destinos personalizados. Vamos conferir cada um.', 'Para que el anuncio sea de Tiendas, usamos el objetivo Ventas, lugar Sitio web, un evento compatible y activamos el botón Tienda en Destinos personalizados. Revisemos cada uno.'),
          passos: [L('Confira o evento de conversão.', 'Revisa el evento de conversión.'), L('Ative o botão Loja e escolha o destino da loja.', 'Activa el botón Tienda y elige el destino de la tienda.')],
          encaminhar: L('Se o botão Loja continuar ausente com tudo certo, pode ser a limitação do beta no país: oriente o cliente a seguir os avisos da conta.', 'Si el botón Tienda sigue ausente con todo correcto, puede ser la limitación del beta en el país: orienta al cliente a seguir los avisos de la cuenta.')
        }
      },
      {
        id: '04', min: 9, status: 'pronta',
        titulo: L('“Meu anúncio só leva ao site”', '“Mi anuncio solo lleva al sitio”'),
        antes: L('A Marina notou que o anúncio das Lojas só manda as pessoas para o site.', 'Marina notó que el anuncio de Tiendas solo manda a las personas al sitio.'),
        gancho: L('Existe uma lista oficial de requisitos. Basta um item errado para o tráfego ir só ao site.', 'Existe una lista oficial de requisitos. Basta un ítem mal para que el tráfico vaya solo al sitio.'),
        objetivo: L('Usar os requisitos oficiais para achar por que o anúncio só envia pessoas ao site e corrigir.', 'Usar los requisitos oficiales para encontrar por qué el anuncio solo envía personas al sitio y corregirlo.'),
        entender: {
          dialogo: [
            ['marina', L('Meu anúncio das Lojas só manda gente para o site. 😩', 'Mi anuncio de Tiendas solo manda gente al sitio. 😩')],
            ['rafa', L('Pode ser um problema técnico na loja ou uma opção que não cumpre os requisitos. Veja o conjunto: o público precisa incluir um país onde os anúncios das Lojas estão disponíveis; os posicionamentos precisam incluir Feed, Stories ou Reels; e o evento de conversão precisa ser compatível.', 'Puede ser un problema técnico en la tienda o una opción que no cumple los requisitos. Mira el conjunto: el público debe incluir un país donde los anuncios de Tiendas están disponibles; las ubicaciones deben incluir Feed, Historias o Reels; y el evento de conversión debe ser compatible.')],
            ['marina', L('E no anúncio?', '¿Y en el anuncio?')],
            ['rafa', L('O formato: sem catálogo, imagem única, vídeo único ou carrossel; com catálogo, só carrossel ou coleção. O destino precisa ser a loja: app, evento do Facebook ou experiência instantânea não levam à loja. E, com a Shopify, o conjunto de produtos só pode ter produtos de uma loja Shopify sediada nos EUA.', 'El formato: sin catálogo, imagen única, video único o secuencia; con catálogo, solo secuencia o colección. El destino debe ser la tienda: app, evento de Facebook o experiencia instantánea no llevan a la tienda. Y, con Shopify, el conjunto de productos solo puede tener productos de una tienda Shopify con sede en EE. UU.')],
            ['pixel', L('Corrigiu o item? Edite o conjunto ou o anúncio e publique de novo: o anúncio passa a levar ao site e à loja.', '¿Corregiste el ítem? Edita el conjunto o el anuncio y publica de nuevo: el anuncio pasa a llevar al sitio y a la tienda.')]
          ],
          pontos: [
            L('<b>Conjunto:</b> país disponível, posicionamentos compatíveis, evento compatível.', '<b>Conjunto:</b> país disponible, ubicaciones compatibles, evento compatible.'),
            L('<b>Anúncio:</b> formato certo (com catálogo: carrossel/coleção) e destino = loja.', '<b>Anuncio:</b> formato correcto (con catálogo: secuencia/colección) y destino = tienda.'),
            L('<b>Corrigiu?</b> Edite e publique de novo.', '<b>¿Corregiste?</b> Edita y publica de nuevo.')
          ],
          notas: NOTA
        },
        ferramenta: 'so-site-shopads',
        praticar: {
          texto: L('No simulador, o anúncio só chega ao site por vários motivos. O Pixel te guia para corrigir um por um.', 'En el simulador, el anuncio solo llega al sitio por varios motivos. El Pixel te guía para corregir uno por uno.'),
          tour: 'so-para-o-site', pagina: 'meta-shopads.html?problema=1'
        },
        atender: {
          cena: L('Pago por anúncio das Lojas e ele só leva ao site! Vocês me enganaram! 😡', '¡Pago por un anuncio de Tiendas y solo lleva al sitio! ¡Me engañaron! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Entendo. Isso costuma acontecer quando alguma opção não cumpre os requisitos: evento de conversão, posicionamentos, formato, destino ou algum ativo. Vamos conferir cada um; ao corrigir e publicar de novo, o anúncio volta a levar ao site e à loja, conforme a Meta decidir.”', '“Entiendo. Esto suele ocurrir cuando alguna opción no cumple los requisitos: evento de conversión, ubicaciones, formato, destino o algún activo. Revisemos cada uno; al corregir y publicar de nuevo, el anuncio vuelve a llevar al sitio y a la tienda, según decida Meta.”'), fb: L('Isso! Acolheu, deu a lista e o caminho.', '¡Eso! Acogiste, diste la lista y el camino.') },
            { certa: false, txt: L('“Ninguém enganou, é assim mesmo.”', '“Nadie engañó, es así.”'), fb: L('Existe causa e correção.', 'Existe causa y corrección.') },
            { certa: false, txt: L('“Aumente o orçamento.”', '“Aumenta el presupuesto.”'), fb: L('Orçamento não muda o destino.', 'El presupuesto no cambia el destino.') },
            { certa: false, txt: L('“Apague a campanha e comece outra.”', '“Elimina la campaña y empieza otra.”'), fb: L('Basta corrigir e publicar de novo.', 'Basta corregir y publicar de nuevo.') }
          ]
        },
        cola: {
          perguntas: [L('Quais eventos, posicionamentos, formato e destino foram escolhidos?', '¿Qué eventos, ubicaciones, formato y destino se eligieron?'), L('O botão Loja está ligado?', '¿El botón Tienda está activado?')],
          conferir: [FERR, L('Conjunto de produtos e país do público.', 'Conjunto de productos y país del público.')],
          frase: L('O anúncio só vai ao site quando alguma opção não cumpre os requisitos. Vamos revisar evento, posicionamentos, formato e destino, corrigir e publicar de novo.', 'El anuncio solo va al sitio cuando alguna opción no cumple los requisitos. Revisemos evento, ubicaciones, formato y destino, corrijamos y publiquemos de nuevo.'),
          passos: [L('Compare cada opção com a lista de requisitos.', 'Compara cada opción con la lista de requisitos.'), L('Edite e publique de novo.', 'Edita y publica de nuevo.')],
          encaminhar: L('Se tudo cumprir os requisitos e ainda for só ao site, pode ser um problema técnico na loja: oriente o cliente a falar com o suporte da Meta.', 'Si todo cumple los requisitos y aun así va solo al sitio, puede ser un problema técnico en la tienda: orienta al cliente a hablar con la asistencia de Meta.')
        }
      },
      {
        id: '05', min: 9, status: 'pronta',
        titulo: L('Ler os resultados das Lojas', 'Leer los resultados de Tiendas'),
        antes: L('Os primeiros anúncios das Lojas rodaram. A Marina abre o relatório e vê números estranhos.', 'Los primeros anuncios de Tiendas corrieron. Marina abre el informe y ve números extraños.'),
        gancho: L('“Compras na Meta = 0”? Calma. É preciso saber quais métricas olhar.', '“¿Compras en Meta = 0?” Calma. Hay que saber qué métricas mirar.'),
        objetivo: L('Escolher as métricas certas para os anúncios das Lojas e explicar “compras na Meta = 0” e diferenças com ferramentas de terceiros.', 'Elegir las métricas correctas para los anuncios de Tiendas y explicar “compras en Meta = 0” y diferencias con herramientas de terceros.'),
        entender: {
          dialogo: [
            ['marina', L('Que números devo olhar nos anúncios das Lojas? 🤔', '¿Qué números debo mirar en los anuncios de Tiendas? 🤔')],
            ['rafa', L('Os anúncios otimizam para conversão: avalie pelos resultados no site e na loja. As métricas recomendadas incluem compras no site, compras, ROAS de compras, valor de conversão de compras, custo por compra, CTR, cliques no link e custo por clique único.', 'Los anuncios optimizan para conversión: evalúa por los resultados en el sitio y en la tienda. Las métricas recomendadas incluyen compras en el sitio, compras, ROAS de compras, valor de conversión de compras, costo por compra, CTR, clics en el enlace y costo por clic único.')],
            ['marina', L('E “compras na Meta” zeradas?', '¿Y “compras en Meta” en cero?')],
            ['rafa', L('Depois que a finalização da compra foi para o site, essa métrica não se aplica mais e aparece como 0. Use também as métricas das Lojas, como compras com assistência das lojas e cliques na loja, para entender o papel da loja.', 'Después de que la finalización de compra pasó al sitio, esa métrica ya no se aplica y aparece como 0. Usa también las métricas de Tiendas, como compras con asistencia de las tiendas y clics en la tienda, para entender el papel de la tienda.')],
            ['pixel', L('Cuidado com cliques de saída e com ROAS de compras no site: não dão o panorama completo. E ferramentas de terceiros, como o Google Analytics, podem contar diferente: elas não veem as conversões na loja.', 'Cuidado con los clics de salida y con el ROAS de compras en el sitio: no dan el panorama completo. Y las herramientas de terceros, como Google Analytics, pueden contar distinto: no ven las conversiones en la tienda.')]
          ],
          pontos: [
            L('<b>Recomendadas:</b> compras, ROAS de compras, valor de conversão, cliques no link.', '<b>Recomendadas:</b> compras, ROAS de compras, valor de conversión, clics en el enlace.'),
            L('<b>Compras na Meta = 0:</b> não se aplica mais; não é erro.', '<b>Compras en Meta = 0:</b> ya no se aplica; no es un error.'),
            L('<b>Terceiros</b> contam diferente; teste A/B para comparar.', '<b>Terceros</b> cuentan distinto; prueba A/B para comparar.')
          ],
          notas: NOTA
        },
        ferramenta: 'resultados-shopads',
        praticar: {
          texto: L('No simulador, o Pixel te guia pela tabela de métricas: o que é “compras na Meta = 0” e quais usar.', 'En el simulador, el Pixel te guía por la tabla de métricas: qué es “compras en Meta = 0” y cuáles usar.'),
          tour: 'ler-relatorio-lojas', pagina: 'meta-shopads.html?relatorio=1'
        },
        atender: {
          cena: L('O relatório diz zero compras na Meta, mas o Google Analytics mostra outro número! Qual está certo? 😠', '¡El informe dice cero compras en Meta, pero Google Analytics muestra otro número! ¿Cuál está bien? 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Compras na Meta aparece como zero porque a finalização da compra agora é no site: não é erro. E é normal haver diferença com o Google Analytics, que não vê as conversões na loja. Para avaliar, use métricas recomendadas como compras, ROAS de compras e valor de conversão de compras.”', '“Compras en Meta aparece como cero porque la finalización de compra ahora es en el sitio: no es un error. Y es normal que haya diferencia con Google Analytics, que no ve las conversiones en la tienda. Para evaluar, usa métricas recomendadas como compras, ROAS de compras y valor de conversión de compras.”'), fb: L('Isso! Explicou os dois motivos e as métricas certas.', '¡Eso! Explicaste los dos motivos y las métricas correctas.') },
            { certa: false, txt: L('“O Google Analytics está sempre certo.”', '“Google Analytics siempre está bien.”'), fb: L('Ele pode não ver as conversões da loja.', 'Puede no ver las conversiones de la tienda.') },
            { certa: false, txt: L('“O relatório da Meta está quebrado.”', '“El informe de Meta está roto.”'), fb: L('Não: a métrica não se aplica mais.', 'No: la métrica ya no se aplica.') },
            { certa: false, txt: L('“Olhe só cliques de saída.”', '“Mira solo los clics de salida.”'), fb: L('Cliques de saída não dão o panorama completo.', 'Los clics de salida no dan el panorama completo.') }
          ]
        },
        cola: {
          perguntas: [L('Quais métricas o cliente está olhando? Compara com outra ferramenta?', '¿Qué métricas está mirando el cliente? ¿Compara con otra herramienta?'), L('O período inclui datas antes da mudança da finalização da compra?', '¿El período incluye fechas antes del cambio de finalización de compra?')],
          conferir: [L('Gerenciador de Anúncios › Colunas e relatórios.', 'Administrador de anuncios › Columnas e informes.'), L('Métricas recomendadas para anúncios das Lojas.', 'Métricas recomendadas para anuncios de Tiendas.')],
          frase: L('Os anúncios das Lojas se avaliam pelos resultados no site e na loja. Vamos usar as métricas recomendadas e entender por que algumas aparecem como zero.', 'Los anuncios de Tiendas se evalúan por los resultados en el sitio y en la tienda. Usemos las métricas recomendadas y entendamos por qué algunas aparecen como cero.'),
          passos: [L('Troque as colunas pelas métricas recomendadas.', 'Cambia las columnas por las métricas recomendadas.'), L('Explique as diferenças com ferramentas de terceiros.', 'Explica las diferencias con herramientas de terceros.')],
          encaminhar: L('Para comparar anúncios das Lojas com campanhas só de site, use teste A/B. Se a diferença for grande e sem explicação, siga o suporte da Meta.', 'Para comparar anuncios de Tiendas con campañas solo de sitio, usa una prueba A/B. Si la diferencia es grande y sin explicación, sigue la asistencia de Meta.')
        }
      }
    ];
  })(),
  'shop-ads-offsite': (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Conteúdo da Central de Ajuda da Meta para Empresas lida em 16/10/2026 (português): “Dicas para usar o Pixel da Meta nos anúncios da sua loja”, “Como corrigir a duplicação do Pixel da Meta ao usar anúncios das Lojas”, “Sobre relatórios de terceiros para o desempenho dos anúncios das Lojas”, “Como entender seus relatórios…” e “Sobre as mudanças nas Lojas e na finalização da compra…”. A tela da prévia da loja com “Finalização da compra em outro site” foi vista de verdade no Gerenciador de Comércio (módulo Commerce). O Gerenciador de Eventos com compras reais e a extensão Consultor de Dados de Anúncios não foram vistos (a conta de aula não tem Pixel com compras). Eventos, horários e números do simulador são do treino (a conferir).', 'Contenido del Centro de ayuda de Meta para Empresas leído el 16/10/2026 (portugués): “Consejos para usar el píxel de Meta en los anuncios de tu tienda”, “Cómo corregir la duplicación del píxel de Meta al usar anuncios de Tiendas”, “Acerca de los informes de terceros para el rendimiento de los anuncios de Tiendas”, “Cómo entender tus informes…” y “Acerca de los cambios en Tiendas y en la finalización de compra…”. La pantalla de la vista previa de la tienda con “Finalizar compra en otro sitio web” se vio de verdad en el Administrador de ventas (módulo Commerce). El Administrador de eventos con compras reales y la extensión Asesor de datos de anuncios no se vieron (la cuenta de clase no tiene píxel con compras). Los eventos, horarios y números del simulador son del entrenamiento (por confirmar).');
    var FERR = L('Gerenciador de Eventos › Fontes de dados › seu Pixel, e o Gerenciador de Anúncios.', 'Administrador de eventos › Fuentes de datos › tu píxel, y el Administrador de anuncios.');
    return [
      {
        id: '01', min: 7, status: 'pronta',
        titulo: L('Do anúncio à compra no site', 'Del anuncio a la compra en el sitio'),
        antes: L('A Marina quer entender o caminho completo: o cliente clica no anúncio das Lojas e… onde compra?', 'Marina quiere entender el camino completo: la clienta hace clic en el anuncio de Tiendas y… ¿dónde compra?'),
        gancho: L('A compra termina sempre no site. Entender isso explica quase todas as dúvidas de medição.', 'La compra termina siempre en el sitio. Entender eso explica casi todas las dudas de medición.'),
        objetivo: L('Descrever a jornada do anúncio das Lojas à compra no site e saber qual evento o Pixel registra em cada etapa.', 'Describir el recorrido del anuncio de Tiendas a la compra en el sitio y saber qué evento registra el píxel en cada etapa.'),
        entender: {
          dialogo: [
            ['marina', L('Se o cliente compra no site, o que a loja da Meta faz? 🤔', 'Si el cliente compra en el sitio, ¿qué hace la tienda de Meta? 🤔')],
            ['rafa', L('A loja é a vitrine: página inicial, coleções e páginas de produto. A pessoa pode ir à loja ou direto ao site, conforme a Meta achar que converte mais. Na hora de comprar, ela é levada ao URL de finalização da compra do seu site.', 'La tienda es la vitrina: página de inicio, colecciones y páginas de producto. La persona puede ir a la tienda o directo al sitio, según Meta considere que convierte más. A la hora de comprar, es llevada a la URL de finalización de compra de tu sitio.')],
            ['marina', L('E quem cuida do pagamento e do pedido?', '¿Y quién se encarga del pago y del pedido?')],
            ['rafa', L('O seu site, ou a plataforma de e-commerce conectada: pagamento, pedido, envio e devolução.', 'Tu sitio, o la plataforma de comercio electrónico conectada: pago, pedido, envío y devolución.')],
            ['pixel', L('E a Meta sabe da compra pelo Pixel do site: ele registra ViewContent, AddToCart, InitiateCheckout e Purchase. As “compras na Meta” ficam em 0, porque a compra é medida como compra no site.', 'Y Meta sabe de la compra por el píxel del sitio: registra ViewContent, AddToCart, InitiateCheckout y Purchase. Las “compras en Meta” quedan en 0, porque la compra se mide como compra en el sitio.')]
          ],
          pontos: [
            L('<b>Loja</b> = vitrine; <b>compra</b> = no site (URL de finalização da compra).', '<b>Tienda</b> = vitrina; <b>compra</b> = en el sitio (URL de finalización de compra).'),
            L('<b>Pixel do site</b> registra a jornada: ViewContent, AddToCart, InitiateCheckout, Purchase.', '<b>El píxel del sitio</b> registra el recorrido: ViewContent, AddToCart, InitiateCheckout, Purchase.'),
            L('<b>“Compras na Meta”</b> = 0; meça compras no site.', '<b>“Compras en Meta”</b> = 0; mide compras en el sitio.')
          ],
          notas: NOTA
        },
        ferramenta: 'jornada-offsite',
        praticar: {
          texto: L('Você faz a jornada de um cliente na loja da Marina (abrir um produto, carrinho, pagamento) e vê no Gerenciador de Eventos os eventos que o Pixel mandou em cada etapa. O Pixel te guia.', 'Haces el recorrido de un cliente en la tienda de Marina (abrir un producto, carrito, pago) y ves en el Administrador de eventos los eventos que el píxel mandó en cada etapa. El Pixel te guía.'),
          tour: 'jornada-compra-site', pagina: 'loja.html'
        },
        atender: {
          cena: L('Se a compra é no site, por que eu preciso de loja no Instagram? E quem trata meus pedidos? 😕', 'Si la compra es en el sitio, ¿por qué necesito una tienda en Instagram? ¿Y quién gestiona mis pedidos? 😕'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“A loja é a vitrine: página inicial, coleções e páginas de produto dentro do app, que ajudam a descoberta. A compra termina no seu site, e pagamento, pedidos, envio e devoluções são tratados por lá ou pela plataforma de e-commerce conectada. A Meta mede pelo Pixel do site.”', '“La tienda es la vitrina: página de inicio, colecciones y páginas de producto dentro de la app, que ayudan al descubrimiento. La compra termina en tu sitio, y pago, pedidos, envío y devoluciones se gestionan allí o con la plataforma de comercio electrónico conectada. Meta mide por el píxel del sitio.”'), fb: L('Isso! Explicou o papel de cada lado.', '¡Eso! Explicaste el papel de cada lado.') },
            { certa: false, txt: L('“Os pedidos aparecem no Gerenciador de Comércio.”', '“Los pedidos aparecen en el Administrador de ventas.”'), fb: L('Para pedidos novos, o gerenciamento foi descontinuado.', 'Para pedidos nuevos, la gestión fue discontinuada.') },
            { certa: false, txt: L('“Não precisa de loja, ignore.”', '“No necesitas tienda, ignórala.”'), fb: L('Para anúncios das Lojas, a loja é obrigatória.', 'Para anuncios de Tiendas, la tienda es obligatoria.') },
            { certa: false, txt: L('“A Meta processa o pagamento.”', '“Meta procesa el pago.”'), fb: L('O processamento de pagamentos nas Lojas foi descontinuado.', 'El procesamiento de pagos en las Tiendas fue discontinuado.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o URL de finalização da compra da loja? Qual plataforma o site usa?', '¿Cuál es la URL de finalización de compra de la tienda? ¿Qué plataforma usa el sitio?'), L('O Pixel do site está conectado ao catálogo?', '¿El píxel del sitio está vinculado al catálogo?')],
          conferir: [FERR, L('Gerenciador de Comércio › Configurações da loja.', 'Administrador de ventas › Configuración de la tienda.')],
          frase: L('A loja é a vitrine e a compra termina no seu site. A Meta mede a jornada pelo Pixel do site, então vamos conferir se ele está certo.', 'La tienda es la vitrina y la compra termina en tu sitio. Meta mide el recorrido por el píxel del sitio, así que revisemos si está bien.'),
          passos: [L('Confirme o URL de finalização da compra.', 'Confirma la URL de finalización de compra.'), L('Confira o Pixel (aula 02).', 'Revisa el píxel (clase 02).')],
          encaminhar: L('Pedidos, pagamentos e devoluções são do site do cliente: oriente-o a usar a plataforma de e-commerce dele.', 'Los pedidos, pagos y devoluciones son del sitio del cliente: oriéntalo a usar su plataforma de comercio electrónico.')
        }
      },
      {
        id: '02', min: 8, status: 'pronta',
        titulo: L('Pixel e catálogo falando a mesma língua', 'Píxel y catálogo hablando el mismo idioma'),
        antes: L('Os anúncios da Marina rodam, mas as compras não aparecem direito.', 'Los anuncios de Marina corren, pero las compras no aparecen bien.'),
        gancho: L('Se Pixel e catálogo não combinam, a Meta não liga o produto ao evento.', 'Si píxel y catálogo no coinciden, Meta no vincula el producto con el evento.'),
        objetivo: L('Aplicar as 4 dicas oficiais: Pixel ligado ao catálogo, Content ID igual, sem duplicação e teste com Eventos de teste.', 'Aplicar los 4 consejos oficiales: píxel vinculado al catálogo, Content ID igual, sin duplicación y prueba con Probar eventos.'),
        entender: {
          dialogo: [
            ['marina', L('Como confiro se o Pixel está bom para os anúncios das Lojas? 😬', '¿Cómo reviso si el píxel está bien para los anuncios de Tiendas? 😬')],
            ['rafa', L('Quatro conferências. Primeiro, o Pixel do site precisa estar conectado ao catálogo da loja (Gerenciador de Comércio, sua loja, Configurações, Catálogo).', 'Cuatro revisiones. Primero, el píxel del sitio debe estar vinculado al catálogo de la tienda (Administrador de ventas, tu tienda, Configuración, Catálogo).')],
            ['marina', L('E depois?', '¿Y después?')],
            ['rafa', L('Segundo, o Content ID de cada item no catálogo precisa ser o mesmo que o Pixel manda; só estes eventos servem: Adicionar ao carrinho, Adicionar à lista de desejos, Iniciar finalização da compra, Comprar e Ver conteúdo.', 'Segundo, el Content ID de cada artículo en el catálogo debe ser el mismo que manda el píxel; solo estos eventos sirven: Agregar al carrito, Agregar a la lista de deseos, Iniciar compra, Comprar y Ver contenido.')],
            ['pixel', L('Terceiro, ver se há duplicação (Shopify, Gerenciador de tags do Google, ou Pixel mais API de Conversões, que exige desduplicar). Quarto, testar com a ferramenta Eventos de teste para ver se as ações do site chegam à Meta.', 'Tercero, ver si hay duplicación (Shopify, Administrador de etiquetas de Google, o píxel más API de Conversiones, que exige deduplicar). Cuarto, probar con la herramienta Probar eventos para ver si las acciones del sitio llegan a Meta.')]
          ],
          pontos: [
            L('<b>1.</b> Pixel conectado ao catálogo da loja.', '<b>1.</b> Píxel vinculado al catálogo de la tienda.'),
            L('<b>2.</b> Content ID igual no catálogo e no Pixel; só 5 eventos aceitos.', '<b>2.</b> Content ID igual en el catálogo y en el píxel; solo 5 eventos aceptados.'),
            L('<b>3 e 4.</b> Sem duplicação; testar com Eventos de teste.', '<b>3 y 4.</b> Sin duplicación; probar con Probar eventos.')
          ],
          notas: NOTA
        },
        ferramenta: 'pixel-offsite',
        praticar: {
          texto: L('Você confere no catálogo a Identificação do conteúdo dos produtos, que precisa ser a mesma que o Pixel manda nos eventos. É o mesmo tutorial do módulo Catálogo. O Pixel te guia.', 'Compruebas en el catálogo el Identificador de contenido de los productos, que debe ser el mismo que el píxel manda en los eventos. Es el mismo tutorial del módulo Catálogo. El Pixel te guía.'),
          tour: 'conferir-ids', pagina: 'meta-catalogo.html?exemplo=1'
        },
        atender: {
          cena: L('Os anúncios vendem, mas a Meta não mostra quais produtos foram comprados! 😠', '¡Los anuncios venden, pero Meta no muestra qué productos se compraron! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Vamos conferir o Pixel: se ele está conectado ao catálogo e se o Content ID de cada produto é igual no catálogo e no Pixel do site; sem isso a Meta não consegue ligar o produto ao evento. Depois, testamos com a ferramenta Eventos de teste.”', '“Revisemos el píxel: si está vinculado al catálogo y si el Content ID de cada producto es igual en el catálogo y en el píxel del sitio; sin eso Meta no puede vincular el producto con el evento. Después, probamos con la herramienta Probar eventos.”'), fb: L('Isso! Causa provável e teste.', '¡Eso! Causa probable y prueba.') },
            { certa: false, txt: L('“Crie um catálogo novo.”', '“Crea un catálogo nuevo.”'), fb: L('Antes confira o Content ID.', 'Antes revisa el Content ID.') },
            { certa: false, txt: L('“Apague o Pixel e instale de novo.”', '“Elimina el píxel e instálalo de nuevo.”'), fb: L('Exagero: primeiro confira ligação e IDs.', 'Exagerado: primero revisa vínculo e IDs.') },
            { certa: false, txt: L('“É normal, a Meta nunca mostra isso.”', '“Es normal, Meta nunca muestra eso.”'), fb: L('Com IDs iguais, a ligação funciona.', 'Con IDs iguales, el vínculo funciona.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é o Content ID de um produto no catálogo e no site?', '¿Cuál es el Content ID de un producto en el catálogo y en el sitio?'), L('O Pixel está conectado ao catálogo da loja?', '¿El píxel está vinculado al catálogo de la tienda?')],
          conferir: [FERR, L('Eventos de teste durante uma compra de teste.', 'Probar eventos durante una compra de prueba.')],
          frase: L('Para a Meta ligar compra e produto, o Pixel precisa estar conectado ao catálogo e o Content ID precisa ser igual nos dois. Vamos conferir e testar.', 'Para que Meta vincule compra y producto, el píxel debe estar vinculado al catálogo y el Content ID debe ser igual en los dos. Revisemos y probemos.'),
          passos: [L('Compare o Content ID do catálogo com o do site.', 'Compara el Content ID del catálogo con el del sitio.'), L('Teste com Eventos de teste.', 'Prueba con Probar eventos.')],
          encaminhar: L('Mudar o ID no site é trabalho do site do cliente ou da plataforma dele: oriente e mostre a diferença.', 'Cambiar el ID en el sitio es trabajo del sitio del cliente o de su plataforma: orienta y muestra la diferencia.')
        }
      },
      {
        id: '03', min: 9, status: 'pronta',
        titulo: L('Compras contadas em dobro', 'Compras contadas dos veces'),
        antes: L('A Marina viu 2 compras para um pedido só.', 'Marina vio 2 compras para un solo pedido.'),
        gancho: L('Mesmo evento, dois caminhos: Shopify e Gerenciador de tags do Google brigando.', 'Mismo evento, dos caminos: Shopify y el Administrador de etiquetas de Google peleando.'),
        objetivo: L('Achar eventos de compra duplicados no Gerenciador de Eventos, descobrir a origem e remover só o evento repetido.', 'Encontrar eventos de compra duplicados en el Administrador de eventos, descubrir el origen y quitar solo el evento repetido.'),
        entender: {
          dialogo: [
            ['marina', L('Cada compra aparece duas vezes na Meta! 😱', '¡Cada compra aparece dos veces en Meta! 😱')],
            ['rafa', L('Isso é duplicação: o mesmo evento chegando por mais de um caminho, por exemplo o canal do Facebook e Instagram na Shopify e também um Pixel no Gerenciador de tags do Google.', 'Eso es duplicación: el mismo evento llegando por más de un camino, por ejemplo el canal de Facebook e Instagram en Shopify y también un píxel en el Administrador de etiquetas de Google.')],
            ['marina', L('Como eu vejo?', '¿Cómo lo veo?')],
            ['rafa', L('No Gerenciador de Eventos: Fontes de dados, seu Pixel, Visão geral, em Atividades clique em Comprar e Ver detalhes, aba Atividades recentes. Dois eventos no mesmo horário e com o mesmo URL indicam duplicação. Também dá para usar a extensão Consultor de Dados de Anúncios no Chrome.', 'En el Administrador de eventos: Fuentes de datos, tu píxel, Descripción general, en Actividades haz clic en Comprar y Ver detalles, pestaña Actividades recientes. Dos eventos en el mismo horario y con la misma URL indican duplicación. También se puede usar la extensión Asesor de datos de anuncios en Chrome.')],
            ['pixel', L('Para corrigir, ache a origem. Na Shopify, use o canal do Facebook e Instagram e tire o Pixel de outros lugares (apps, tema). No Gerenciador de tags do Google, remova só os eventos duplicados, sem apagar eventos de pesquisa ou registro.', 'Para corregir, encuentra el origen. En Shopify, usa el canal de Facebook e Instagram y saca el píxel de otros lugares (apps, tema). En el Administrador de etiquetas de Google, quita solo los eventos duplicados, sin borrar eventos de búsqueda o registro.')]
          ],
          pontos: [
            L('<b>Duplicação</b> = mesmo evento por mais de um caminho (Shopify, tags do Google, Pixel + API).', '<b>Duplicación</b> = mismo evento por más de un camino (Shopify, etiquetas de Google, píxel + API).'),
            L('<b>Como ver:</b> Atividades recentes: mesmo horário e mesmo URL.', '<b>Cómo verlo:</b> Actividades recientes: mismo horario y misma URL.'),
            L('<b>Corrigir:</b> achar a origem e remover só o evento repetido.', '<b>Corregir:</b> encontrar el origen y quitar solo el evento repetido.')
          ],
          notas: NOTA
        },
        ferramenta: 'duplicacao-offsite',
        praticar: {
          texto: L('Uma loja Shopify com compras em dobro: você faz uma compra de teste, acha a duplicação (Gerenciador de Eventos e código-fonte) e remove o código manual do tema, deixando só o canal da Shopify. O Pixel te guia.', 'Una tienda Shopify con compras duplicadas: haces una compra de prueba, encuentras la duplicación (Administrador de eventos y código fuente) y quitas el código manual del tema, dejando solo el canal de Shopify. El Pixel te guía.'),
          tour: 'corrigir-duplicado', pagina: 'loja.html'
        },
        atender: {
          cena: L('Meu ROAS está lindo, mas as vendas reais são metade! Vocês inflaram meus números! 😡', '¡Mi ROAS está lindo, pero las ventas reales son la mitad! ¡Inflaron mis números! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Pode ser compra contada em dobro: o mesmo evento chegando por mais de um caminho. Vamos olhar no Gerenciador de Eventos as atividades recentes do evento Comprar: dois eventos no mesmo horário e URL indicam duplicação. Depois achamos a origem, como Shopify ou Gerenciador de tags do Google, e removemos só o repetido.”', '“Puede ser una compra contada dos veces: el mismo evento llegando por más de un camino. Veamos en el Administrador de eventos las actividades recientes del evento Comprar: dos eventos en el mismo horario y URL indican duplicación. Después encontramos el origen, como Shopify o el Administrador de etiquetas de Google, y quitamos solo el repetido.”'), fb: L('Isso! Hipótese real e método.', '¡Eso! Hipótesis real y método.') },
            { certa: false, txt: L('“A Meta inflou de propósito.”', '“Meta infló a propósito.”'), fb: L('Não há sinal disso; é um problema de configuração.', 'No hay señal de eso; es un problema de configuración.') },
            { certa: false, txt: L('“Apague todo o Gerenciador de tags do Google.”', '“Borra todo el Administrador de etiquetas de Google.”'), fb: L('Remova só os eventos duplicados.', 'Quita solo los eventos duplicados.') },
            { certa: false, txt: L('“Ignore, o ROAS é só um número.”', '“Ignóralo, el ROAS es solo un número.”'), fb: L('Duplicação distorce a otimização e os relatórios.', 'La duplicación distorsiona la optimización y los informes.') }
          ]
        },
        cola: {
          perguntas: [L('A loja usa Shopify, Gerenciador de tags do Google ou API de Conversões?', '¿La tienda usa Shopify, Administrador de etiquetas de Google o API de Conversiones?'), L('Há dois eventos de compra no mesmo horário e URL?', '¿Hay dos eventos de compra en el mismo horario y URL?')],
          conferir: [FERR, L('Atividades recentes do evento Comprar.', 'Actividades recientes del evento Comprar.')],
          frase: L('Vamos ver se a mesma compra chega duas vezes: se sim, achamos a origem e removemos só o evento repetido.', 'Veamos si la misma compra llega dos veces: si es así, encontramos el origen y quitamos solo el evento repetido.'),
          passos: [L('Abra as atividades recentes do evento Comprar.', 'Abre las actividades recientes del evento Comprar.'), L('Compare horário e URL e ache a origem.', 'Compara horario y URL y encuentra el origen.')],
          encaminhar: L('Mexer no Gerenciador de tags do Google ou no tema da Shopify é com quem cuida do site: oriente e mostre qual evento remover.', 'Tocar el Administrador de etiquetas de Google o el tema de Shopify es de quien se encarga del sitio: orienta y muestra qué evento quitar.')
        }
      },
      {
        id: '04', min: 8, status: 'pronta',
        titulo: L('Meta × Google Analytics: números diferentes', 'Meta × Google Analytics: números distintos'),
        antes: L('A Marina compara o Gerenciador de Anúncios com o Google Analytics e os números não batem.', 'Marina compara el Administrador de anuncios con Google Analytics y los números no coinciden.'),
        gancho: L('Duas ferramentas, duas formas de contar. Dá para reduzir a diferença, mas não zerar.', 'Dos herramientas, dos formas de contar. Se puede reducir la diferencia, pero no eliminarla.'),
        objetivo: L('Usar UTM e tags de marketing de terceiros e explicar por que terceiros não veem tudo.', 'Usar UTM y etiquetas de marketing de terceros y explicar por qué los terceros no ven todo.'),
        entender: {
          dialogo: [
            ['marina', L('A Meta diz 71 compras e o Analytics, 46. Quem está certo? 🤷', 'Meta dice 71 compras y Analytics, 46. ¿Quién está bien? 🤷')],
            ['rafa', L('Os dois contam de formas diferentes. Muitas ferramentas de terceiros medem um canal só, o site, e não veem o que acontece só dentro da Meta, como Ver conteúdo e Adicionar ao carrinho na loja.', 'Los dos cuentan de formas distintas. Muchas herramientas de terceros miden un solo canal, el sitio, y no ven lo que ocurre solo dentro de Meta, como Ver contenido y Agregar al carrito en la tienda.')],
            ['marina', L('E dá para melhorar?', '¿Y se puede mejorar?')],
            ['rafa', L('Dá: use parâmetros de UTM (a Meta põe padrões: pago, Facebook ou Instagram, ID da campanha, do anúncio e do conjunto) e conecte tags de marketing de terceiros no Google Analytics.', 'Sí: usa parámetros UTM (Meta pone predeterminados: pago, Facebook o Instagram, ID de la campaña, del anuncio y del conjunto) y conecta etiquetas de marketing de terceros en Google Analytics.')],
            ['pixel', L('Mesmo assim, a ferramenta pode não ligar a jornada de quem passou pela loja e depois foi ao site. Para comparar de verdade, use teste A/B. Ferramentas como Triple Whale, Northbeam e Measured rastreiam eventos da loja se ligadas à API de Marketing.', 'Aun así, la herramienta puede no unir el recorrido de quien pasó por la tienda y luego fue al sitio. Para comparar de verdad, usa una prueba A/B. Herramientas como Triple Whale, Northbeam y Measured rastrean eventos de la tienda si se conectan a la API de Marketing.')]
          ],
          pontos: [
            L('<b>UTM padrão:</b> pago, fonte, ID da campanha, anúncio e conjunto.', '<b>UTM predeterminados:</b> pago, fuente, ID de campaña, anuncio y conjunto.'),
            L('<b>Terceiros</b> podem não ver Ver conteúdo e Adicionar ao carrinho da loja.', '<b>Los terceros</b> pueden no ver Ver contenido y Agregar al carrito de la tienda.'),
            L('<b>Comparar de verdade:</b> teste A/B.', '<b>Comparar de verdad:</b> prueba A/B.')
          ],
          notas: NOTA
        },
        ferramenta: 'terceiros-offsite',
        praticar: {
          texto: L('No simulador, o Pixel te guia pela diferença 71 × 46, pelos UTM padrão e pelas tags de marketing de terceiros.', 'En el simulador, el Pixel te guía por la diferencia 71 × 46, por los UTM predeterminados y por las etiquetas de marketing de terceros.'),
          tour: 'comparar-terceiros', pagina: 'meta-checkoutsite.html?zerar=1'
        },
        atender: {
          cena: L('Meu Google Analytics mostra bem menos vendas que a Meta. Alguém está mentindo! 😠', '¡Mi Google Analytics muestra bastantes menos ventas que Meta! ¡Alguien está mintiendo! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Ninguém mente: as ferramentas contam de forma diferente, e muitas de terceiros não veem as conversões ligadas à loja da Meta nem conectam a jornada de quem passou pela loja e depois foi ao site. Dá para reduzir a diferença com UTM e tags de marketing de terceiros no Google Analytics, e para comparar de verdade usamos um teste A/B.”', '“Nadie miente: las herramientas cuentan de forma distinta, y muchas de terceros no ven las conversiones ligadas a la tienda de Meta ni unen el recorrido de quien pasó por la tienda y luego fue al sitio. Se puede reducir la diferencia con UTM y etiquetas de marketing de terceros en Google Analytics, y para comparar de verdad usamos una prueba A/B.”'), fb: L('Isso! Explicou e deu o caminho.', '¡Eso! Explicaste y diste el camino.') },
            { certa: false, txt: L('“O Analytics está sempre errado.”', '“Analytics siempre está mal.”'), fb: L('Nenhum está “errado”: medem de formas diferentes.', 'Ninguno está “mal”: miden de formas distintas.') },
            { certa: false, txt: L('“Desligue o Google Analytics.”', '“Apaga Google Analytics.”'), fb: L('Ele ajuda; só precisa de UTM e tags.', 'Ayuda; solo necesita UTM y etiquetas.') },
            { certa: false, txt: L('“Mude os UTM todo dia.”', '“Cambia los UTM todos los días.”'), fb: L('UTM estáveis ajudam a filtrar.', 'UTM estables ayudan a filtrar.') }
          ]
        },
        cola: {
          perguntas: [L('Quais ferramentas o cliente usa para medir? Há UTM nos anúncios?', '¿Qué herramientas usa el cliente para medir? ¿Hay UTM en los anuncios?'), L('O Google Analytics tem tags de marketing de terceiros conectadas?', '¿Google Analytics tiene etiquetas de marketing de terceros conectadas?')],
          conferir: [FERR, L('Parâmetros de UTM do anúncio.', 'Parámetros UTM del anuncio.')],
          frase: L('As ferramentas contam de formas diferentes; vamos usar UTM e conectar as tags de terceiros para reduzir a diferença, e um teste A/B para comparar de verdade.', 'Las herramientas cuentan de formas distintas; usemos UTM y conectemos las etiquetas de terceros para reducir la diferencia, y una prueba A/B para comparar de verdad.'),
          passos: [L('Confira os UTM dos anúncios.', 'Revisa los UTM de los anuncios.'), L('Conecte as tags de marketing de terceiros.', 'Conecta las etiquetas de marketing de terceros.')],
          encaminhar: L('Configurar o Google Analytics é com quem cuida do site ou do marketing do cliente: oriente com as páginas da Central de Ajuda.', 'Configurar Google Analytics es de quien se encarga del sitio o del marketing del cliente: orienta con las páginas del Centro de ayuda.')
        }
      },
      {
        id: '05', min: 8, status: 'pronta',
        titulo: L('Atualizar uma loja que usava a finalização da compra na Meta', 'Actualizar una tienda que usaba la finalización de compra en Meta'),
        antes: L('Uma cliente antiga da Marina tinha loja com finalização da compra dentro do Instagram. Agora a loja mudou.', 'Una clienta antigua de Marina tenía tienda con finalización de compra dentro de Instagram. Ahora la tienda cambió.'),
        gancho: L('Atualizar a loja existente é melhor do que criar outra. E há uma lista do que fazer.', 'Actualizar la tienda existente es mejor que crear otra. Y hay una lista de qué hacer.'),
        objetivo: L('Listar o que fazer para atualizar uma loja antiga para a finalização da compra no site e o que acontece com campanhas e rascunhos.', 'Listar qué hacer para actualizar una tienda antigua a la finalización de compra en el sitio y qué pasa con campañas y borradores.'),
        entender: {
          dialogo: [
            ['marina', L('A loja dela usava checkout na Meta. O que acontece agora? 😟', 'Su tienda usaba checkout en Meta. ¿Qué pasa ahora? 😟')],
            ['rafa', L('Ela foi atualizada para a finalização da compra no site, ou ficou invisível. Se ainda não foi atualizada, a loja precisa permanecer visível, e a Meta recomenda atualizar a existente em vez de criar uma nova.', 'Fue actualizada a la finalización de compra en el sitio, o quedó invisible. Si todavía no fue actualizada, la tienda debe permanecer visible, y Meta recomienda actualizar la existente en lugar de crear una nueva.')],
            ['marina', L('O que ela precisa fazer?', '¿Qué necesita hacer?')],
            ['rafa', L('Criar e adicionar o URL de finalização da compra; adicionar perfis de envio; preparar o catálogo; conferir as variantes de produto do site e adicioná-las; e, opcionalmente, conectar um conjunto de dados para rastrear as interações.', 'Crear y agregar la URL de finalización de compra; agregar perfiles de envío; preparar el catálogo; revisar las variantes de producto del sitio y agregarlas; y, opcionalmente, conectar un conjunto de datos para rastrear las interacciones.')],
            ['pixel', L('E as campanhas? As ativas continuam, só que a compra passa a ser no site. Os rascunhos antigos são atualizados para o local da conversão Site, com a loja ligada por padrão para personalizar a jornada do comprador.', '¿Y las campañas? Las activas continúan, solo que la compra pasa a ser en el sitio. Los borradores antiguos se actualizan al lugar de conversión Sitio web, con la tienda activada por defecto para personalizar el recorrido del comprador.')]
          ],
          pontos: [
            L('<b>Atualize</b> a loja existente; ela deve ficar visível até a atualização.', '<b>Actualiza</b> la tienda existente; debe quedar visible hasta la actualización.'),
            L('<b>Faça:</b> URL de finalização, perfis de envio, catálogo e variantes.', '<b>Haz:</b> URL de finalización, perfiles de envío, catálogo y variantes.'),
            L('<b>Campanhas ativas</b> continuam; rascunhos viram local Site.', '<b>Las campañas activas</b> continúan; los borradores pasan a lugar Sitio web.')
          ],
          notas: NOTA
        },
        ferramenta: 'antiga-offsite',
        praticar: {
          texto: L('No simulador, o Pixel te guia pela lista de atualização de uma loja antiga, item por item.', 'En el simulador, el Pixel te guía por la lista de actualización de una tienda antigua, ítem por ítem.'),
          tour: 'atualizar-loja-antiga', pagina: 'meta-checkoutsite.html?zerar=1'
        },
        atender: {
          cena: L('Minha loja sumiu e meus anúncios mudaram! Vou criar uma loja nova do zero! 😡', '¡Mi tienda desapareció y mis anuncios cambiaron! ¡Voy a crear una tienda nueva desde cero! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Antes de criar outra, atualize a loja que você já tem: a Meta recomenda isso. A loja precisa ficar visível e você precisa adicionar o URL de finalização da compra, os perfis de envio, preparar o catálogo e conferir as variantes. Suas campanhas ativas continuam, com a compra no site.”', '“Antes de crear otra, actualiza la tienda que ya tienes: Meta lo recomienda. La tienda debe quedar visible y debes agregar la URL de finalización de compra, los perfiles de envío, preparar el catálogo y revisar las variantes. Tus campañas activas continúan, con la compra en el sitio.”'), fb: L('Isso! Evitou recomeçar e deu a lista.', '¡Eso! Evitaste empezar de nuevo y diste la lista.') },
            { certa: false, txt: L('“Crie uma loja nova, é mais simples.”', '“Crea una tienda nueva, es más simple.”'), fb: L('A Meta recomenda atualizar a existente.', 'Meta recomienda actualizar la existente.') },
            { certa: false, txt: L('“Oculte a loja até a Meta resolver.”', '“Oculta la tienda hasta que Meta lo resuelva.”'), fb: L('Se ainda não foi atualizada, deve ficar visível.', 'Si todavía no fue actualizada, debe quedar visible.') },
            { certa: false, txt: L('“Apague as campanhas ativas.”', '“Borra las campañas activas.”'), fb: L('As campanhas ativas continuam.', 'Las campañas activas continúan.') }
          ]
        },
        cola: {
          perguntas: [L('A loja está visível ou oculta? Já tem URL de finalização da compra?', '¿La tienda está visible u oculta? ¿Ya tiene URL de finalización de compra?'), L('Há campanhas ativas ou rascunhos ligados à loja?', '¿Hay campañas activas o borradores vinculados a la tienda?')],
          conferir: [L('Gerenciador de Comércio › loja › Configurações.', 'Administrador de ventas › tienda › Configuración.'), L('Gerenciador de Anúncios › local da conversão dos rascunhos.', 'Administrador de anuncios › lugar de conversión de los borradores.')],
          frase: L('Vamos atualizar a loja que você já tem para a finalização da compra no site: URL de finalização, perfis de envio, catálogo e variantes. As campanhas ativas continuam.', 'Actualicemos la tienda que ya tienes a la finalización de compra en el sitio: URL de finalización, perfiles de envío, catálogo y variantes. Las campañas activas continúan.'),
          passos: [L('Adicione o URL de finalização da compra e os perfis de envio.', 'Agrega la URL de finalización de compra y los perfiles de envío.'), L('Prepare o catálogo e as variantes.', 'Prepara el catálogo y las variantes.')],
          encaminhar: L('Se a loja ficou invisível, siga os avisos do Gerenciador de Comércio para atualizá-la, em vez de criar outra.', 'Si la tienda quedó invisible, sigue los avisos del Administrador de ventas para actualizarla, en lugar de crear otra.')
        }
      }
    ];
  })(),
  mbe: (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Galeria de parceiros e página Integrações vistas de verdade no Gerenciador de Eventos da conta de aula em 16/10/2026, em português e espanhol. Textos da Central de Ajuda da Meta para Empresas (português): “Sobre as Integrações de Parceiros para eventos do site”, “Integrações de parceiros do Facebook”, “Comparar as opções de configuração da API de Conversões” e “Como conceder acesso a ativos de negócios… para um parceiro”. O Meta Business Extension (MBE/FBE) é descrito na documentação para desenvolvedores da Meta (inglês, lida em 16/10/2026): permite ao lojista criar ou selecionar portfólio, Página e Pixel (e conta de anúncios) dentro da plataforma parceira, sem catálogo; a permissão privada exige liberação do app por um representante da Meta. A janela do MBE funcionando dentro de uma plataforma parceira não foi vista (as telas do simulador são do treino, a conferir).', 'Galería de socios y página Integraciones vistas de verdad en el Administrador de eventos de la cuenta de clase el 16/10/2026, en portugués y español. Textos del Centro de ayuda de Meta para Empresas (portugués): “Acerca de las integraciones de socios para eventos del sitio web”, “Integraciones de socios de Facebook”, “Comparar las opciones de configuración de la API de Conversiones” y “Cómo conceder acceso a activos comerciales… a un socio”. Meta Business Extension (MBE/FBE) se describe en la documentación para desarrolladores de Meta (inglés, leída el 16/10/2026): permite al comerciante crear o seleccionar portfolio, página y píxel (y cuenta publicitaria) dentro de la plataforma socia, sin catálogo; el permiso privado exige que un representante de Meta habilite la app. No se vio la ventana del MBE funcionando dentro de una plataforma socia (las pantallas del simulador son del entrenamiento, por confirmar).');
    var FERR = L('Gerenciador de Eventos › Integrações › Galeria de parceiros.', 'Administrador de eventos › Integraciones › Galería de socios.');
    return [
      {
        id: '01', min: 7, status: 'pronta',
        titulo: L('O que são as integrações de parceiros e o MBE', 'Qué son las integraciones de socios y el MBE'),
        antes: L('A Marina usa uma plataforma de loja virtual e não quer mexer no código do site.', 'Marina usa una plataforma de tienda virtual y no quiere tocar el código del sitio.'),
        gancho: L('“Dá para ligar o Pixel sem programar?” Dá: é para isso que servem os parceiros e o MBE.', '“¿Se puede activar el píxel sin programar?” Sí: para eso sirven los socios y el MBE.'),
        objetivo: L('Entender o que é uma integração de parceiro, o que é o Meta Business Extension e o que ele conecta (e o que não conecta).', 'Entender qué es una integración de socio, qué es Meta Business Extension y qué conecta (y qué no).'),
        entender: {
          dialogo: [
            ['marina', L('Como ligo meu site à Meta sem editar o código? 🤔', '¿Cómo vinculo mi sitio a Meta sin editar el código? 🤔')],
            ['rafa', L('Com uma integração de parceiro: se o site roda em uma plataforma compatível (WordPress, Shopify, WooCommerce, BigCommerce, Magento…), a Meta captura os eventos do site automaticamente, sem editar código, usando o Pixel no navegador e a API de Conversões no servidor.', 'Con una integración de socio: si el sitio corre en una plataforma compatible (WordPress, Shopify, WooCommerce, BigCommerce, Magento…), Meta captura los eventos del sitio automáticamente, sin editar código, usando el píxel en el navegador y la API de Conversiones en el servidor.')],
            ['marina', L('E o MBE, o que é?', '¿Y el MBE, qué es?')],
            ['rafa', L('É a extensão da Meta que a plataforma parceira embute: o lojista clica em conectar e abre uma janela da Meta em que ele cria ou escolhe o portfólio, a Página, o Pixel e a conta de anúncios. Quem constrói isso é o parceiro, com permissões que a Meta precisa liberar.', 'Es la extensión de Meta que la plataforma socia integra: el comerciante hace clic en conectar y se abre una ventana de Meta en la que crea o elige el portfolio, la página, el píxel y la cuenta publicitaria. Quien construye eso es el socio, con permisos que Meta debe habilitar.')],
            ['pixel', L('Cuidado: o fluxo do MBE para Pixel e API de Conversões não inclui o catálogo, que se conecta por outro caminho. E se a plataforma do cliente não estiver na lista, a API de Conversões é manual.', 'Cuidado: el flujo del MBE para píxel y API de Conversiones no incluye el catálogo, que se conecta por otro camino. Y si la plataforma del cliente no está en la lista, la API de Conversiones es manual.')]
          ],
          pontos: [
            L('<b>Integração de parceiro</b> = Pixel + API de Conversões sem editar o código.', '<b>Integración de socio</b> = píxel + API de Conversiones sin editar el código.'),
            L('<b>MBE</b> = janela da Meta dentro da plataforma: portfólio, Página, Pixel, conta de anúncios.', '<b>MBE</b> = ventana de Meta dentro de la plataforma: portfolio, página, píxel, cuenta publicitaria.'),
            L('<b>Não inclui catálogo;</b> plataforma fora da lista = API de Conversões manual.', '<b>No incluye catálogo;</b> plataforma fuera de la lista = API de Conversiones manual.')
          ],
          notas: NOTA
        },
        ferramenta: 'o-que-e-mbe',
        atender: {
          cena: L('Meu site é na Shopify. Preciso contratar um programador para ligar o Pixel e a API de Conversões? 💸', 'Mi sitio es en Shopify. ¿Necesito contratar a un programador para activar el píxel y la API de Conversiones? 💸'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Não precisa programar: a Shopify é uma plataforma parceira, e a integração captura os eventos automaticamente, com o Pixel no navegador e a API de Conversões no servidor, sem editar o código. Vamos ver no Gerenciador de Eventos, em Integrações, e seguir as instruções do parceiro.”', '“No necesitas programar: Shopify es una plataforma socia, y la integración captura los eventos automáticamente, con el píxel en el navegador y la API de Conversiones en el servidor, sin editar el código. Veamos en el Administrador de eventos, en Integraciones, y sigamos las instrucciones del socio.”'), fb: L('Isso! Honesto e prático.', '¡Eso! Honesto y práctico.') },
            { certa: false, txt: L('“Precisa, é código manual.”', '“Sí, es código manual.”'), fb: L('Com parceiro, não precisa editar código.', 'Con socio, no hace falta editar código.') },
            { certa: false, txt: L('“A Meta instala tudo sozinha no seu site.”', '“Meta instala todo sola en tu sitio.”'), fb: L('Quem conecta é o lojista, pela plataforma parceira.', 'Quien conecta es el comerciante, por la plataforma socia.') },
            { certa: false, txt: L('“Passe a senha da loja para eu configurar.”', '“Pásame la contraseña de la tienda y yo lo configuro.”'), fb: L('Nunca peça senha: oriente.', 'Nunca pidas contraseñas: orienta.') }
          ]
        },
        cola: {
          perguntas: [L('Qual plataforma o site usa? Já tem Pixel instalado à mão?', '¿Qué plataforma usa el sitio? ¿Ya tiene un píxel instalado a mano?'), L('Quer só eventos do site ou também catálogo e app?', '¿Quiere solo eventos del sitio o también catálogo y app?')],
          conferir: [FERR, L('Se a plataforma está na lista.', 'Si la plataforma está en la lista.')],
          frase: L('Se a sua plataforma é parceira da Meta, a integração captura os eventos do site sem editar código, com Pixel e API de Conversões. Vamos ver se ela está na galeria.', 'Si tu plataforma es socia de Meta, la integración captura los eventos del sitio sin editar código, con píxel y API de Conversiones. Veamos si está en la galería.'),
          passos: [L('Abra Integrações no Gerenciador de Eventos.', 'Abre Integraciones en el Administrador de eventos.'), L('Procure a plataforma na Galeria de parceiros.', 'Busca la plataforma en la Galería de socios.')],
          encaminhar: L('Se a plataforma não aparecer, oriente o cliente a configurar a API de Conversões manualmente ou falar com o provedor de serviços.', 'Si la plataforma no aparece, orienta al cliente a configurar la API de Conversiones manualmente o hablar con el proveedor de servicios.')
        }
      },
      {
        id: '02', min: 7, status: 'pronta',
        titulo: L('Achar o parceiro na galeria', 'Encontrar el socio en la galería'),
        antes: L('A Marina quer saber se a plataforma do cliente dela tem integração.', 'Marina quiere saber si la plataforma de su cliente tiene integración.'),
        gancho: L('A galeria lista dezenas de parceiros por categoria. Saber filtrar poupa tempo.', 'La galería lista decenas de socios por categoría. Saber filtrar ahorra tiempo.'),
        objetivo: L('Usar a página Integrações: recomendações, Galeria de parceiros, categorias e o tipo de evento de cada parceiro.', 'Usar la página Integraciones: recomendaciones, Galería de socios, categorías y el tipo de evento de cada socio.'),
        entender: {
          dialogo: [
            ['marina', L('Onde vejo os parceiros? 😅', '¿Dónde veo los socios? 😅')],
            ['rafa', L('No Gerenciador de Eventos, em Integrações. Há duas abas: Minhas integrações e Galeria de parceiros. Se você não tem dados conectados, a página já recomenda parceiros com base no site da empresa, como Google Tag Manager, Shopify e WooCommerce.', 'En el Administrador de eventos, en Integraciones. Hay dos pestañas: Mis integraciones y Galería de socios. Si no tienes datos conectados, la página ya recomienda socios según el sitio de la empresa, como Google Tag Manager, Shopify y WooCommerce.')],
            ['marina', L('E a galeria?', '¿Y la galería?')],
            ['rafa', L('Tem categorias: Produtos da Meta, Comércio eletrônico, Análises, Plataformas de site, Plataformas de dados do cliente, Plataformas de conexão de dados, CRM e software de marketing, Gerenciamento de tags, Plataformas móveis, Inteligência de ligação e Engajamento conversacional.', 'Tiene categorías: Productos de Meta, Comercio electrónico, Análisis, Plataformas de sitios web, Plataformas de datos de clientes, Plataformas de conexión de datos, Software de marketing y CRM, Administración de etiquetas, Plataformas para celulares, Análisis de llamadas e Interacción conversacional.')],
            ['pixel', L('Cada parceiro mostra o que envia: eventos da web, do app, offline ou de CRM. Escolha o que combina com o que o cliente precisa.', 'Cada socio muestra qué envía: eventos web, de la app, offline o de CRM. Elige el que combina con lo que necesita el cliente.')]
          ],
          pontos: [
            L('<b>Integrações</b> tem duas abas: Minhas integrações e Galeria de parceiros.', '<b>Integraciones</b> tiene dos pestañas: Mis integraciones y Galería de socios.'),
            L('<b>Recomendações</b> vêm do site da empresa.', '<b>Las recomendaciones</b> vienen del sitio de la empresa.'),
            L('<b>Cada parceiro</b> indica o tipo de evento: web, app, offline, CRM.', '<b>Cada socio</b> indica el tipo de evento: web, app, offline, CRM.')
          ],
          notas: NOTA
        },
        ferramenta: 'galeria-mbe',
        praticar: {
          texto: L('No simulador, o Pixel te guia pela página Integrações real: recomendações, filtro por categoria e o tipo de evento de um parceiro.', 'En el simulador, el Pixel te guía por la página Integraciones real: recomendaciones, filtro por categoría y el tipo de evento de un socio.'),
          tour: 'galeria-parceiros', pagina: 'meta-mbe.html?zerar=1'
        },
        atender: {
          cena: L('Minha plataforma não aparece nas recomendações. Isso quer dizer que não tem integração? 😕', 'Mi plataforma no aparece en las recomendaciones. ¿Eso quiere decir que no tiene integración? 😕'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Não necessariamente: as recomendações são baseadas no site, e a Galeria de parceiros tem muitos outros, organizados por categoria. Vamos filtrar pela categoria que combina com a sua plataforma. Se ela realmente não estiver, a API de Conversões pode ser configurada manualmente.”', '“No necesariamente: las recomendaciones se basan en el sitio, y la Galería de socios tiene muchos otros, organizados por categoría. Filtremos por la categoría que combina con tu plataforma. Si realmente no está, la API de Conversiones se puede configurar manualmente.”'), fb: L('Isso! Mostrou onde procurar e a alternativa.', '¡Eso! Mostraste dónde buscar y la alternativa.') },
            { certa: false, txt: L('“Se não aparece, não existe.”', '“Si no aparece, no existe.”'), fb: L('A galeria tem muito mais que as recomendações.', 'La galería tiene mucho más que las recomendaciones.') },
            { certa: false, txt: L('“Troque de plataforma.”', '“Cambia de plataforma.”'), fb: L('Exagero: há alternativa manual.', 'Exagerado: hay alternativa manual.') },
            { certa: false, txt: L('“Instale o Pixel em outro site.”', '“Instala el píxel en otro sitio.”'), fb: L('Não resolve.', 'No resuelve.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é a plataforma do site? Aparece na Galeria de parceiros?', '¿Cuál es la plataforma del sitio? ¿Aparece en la Galería de socios?'), L('Que tipo de evento o cliente precisa: web, app, offline?', '¿Qué tipo de evento necesita el cliente: web, app, offline?')],
          conferir: [FERR, L('Filtro por categoria.', 'Filtro por categoría.')],
          frase: L('Vamos procurar a sua plataforma na Galeria de parceiros, filtrando pela categoria, e ver que tipo de evento ela envia.', 'Busquemos tu plataforma en la Galería de socios, filtrando por categoría, y veamos qué tipo de evento envía.'),
          passos: [L('Abra a Galeria de parceiros.', 'Abre la Galería de socios.'), L('Filtre por categoria e abra o parceiro.', 'Filtra por categoría y abre el socio.')],
          encaminhar: L('Se o parceiro não estiver listado, oriente o cliente a falar com o provedor da plataforma ou configurar a API de Conversões manualmente.', 'Si el socio no está en la lista, orienta al cliente a hablar con el proveedor de la plataforma o configurar la API de Conversiones manualmente.')
        }
      },
      {
        id: '03', min: 8, status: 'pronta',
        titulo: L('Conectar pela plataforma (a janela do MBE)', 'Conectar desde la plataforma (la ventana del MBE)'),
        antes: L('A Marina vai conectar a loja pela plataforma, mas quer saber o que vai aparecer.', 'Marina va a conectar la tienda por la plataforma, pero quiere saber qué va a aparecer.'),
        gancho: L('Quatro escolhas e um resumo: portfólio, Página, Pixel e conta de anúncios.', 'Cuatro elecciones y un resumen: portfolio, página, píxel y cuenta publicitaria.'),
        objetivo: L('Descrever o que o lojista escolhe na janela do MBE, o que ela não inclui e o risco de Pixel duplicado.', 'Describir qué elige el comerciante en la ventana del MBE, qué no incluye y el riesgo de píxel duplicado.'),
        entender: {
          dialogo: [
            ['marina', L('Cliquei em conectar na plataforma e abriu uma janela da Meta. 😬', 'Hice clic en conectar en la plataforma y se abrió una ventana de Meta. 😬')],
            ['rafa', L('É o MBE. Nela você escolhe ou cria o portfólio empresarial, a Página, o Pixel e a conta de anúncios, confere o resumo e conclui.', 'Es el MBE. En ella eliges o creas el portfolio comercial, la página, el píxel y la cuenta publicitaria, revisas el resumen y finalizas.')],
            ['marina', L('E o catálogo?', '¿Y el catálogo?')],
            ['rafa', L('Esse fluxo é para Pixel e API de Conversões e não inclui o catálogo: ele se conecta por outro caminho, como no Gerenciador de Comércio.', 'Este flujo es para píxel y API de Conversiones y no incluye el catálogo: se conecta por otro camino, como en el Administrador de ventas.')],
            ['pixel', L('Atenção ao Pixel: se o site já tem um instalado à mão, criar um novo e deixar os dois ativos pode duplicar eventos. Depois de concluir, a plataforma envia eventos em seu nome, pelo navegador e pelo servidor.', 'Atención al píxel: si el sitio ya tiene uno instalado a mano, crear uno nuevo y dejar los dos activos puede duplicar eventos. Después de finalizar, la plataforma envía eventos en tu nombre, por el navegador y por el servidor.')]
          ],
          pontos: [
            L('<b>Na janela:</b> portfólio, Página, Pixel, conta de anúncios, resumo.', '<b>En la ventana:</b> portfolio, página, píxel, cuenta publicitaria, resumen.'),
            L('<b>Catálogo</b> fica de fora: outro caminho.', '<b>El catálogo</b> queda fuera: otro camino.'),
            L('<b>Cuidado</b> com Pixel antigo + novo: duplicação.', '<b>Cuidado</b> con píxel antiguo + nuevo: duplicación.')
          ],
          notas: NOTA
        },
        ferramenta: 'conectar-mbe',
        praticar: {
          texto: L('Você abre a janela do MBE de dentro da Shopify, vê o erro mais comum (o portfólio que não é dono da Página) e conecta do jeito certo. O Pixel te guia.', 'Abres la ventana del MBE desde dentro de Shopify, ves el error más común (el portafolio que no es dueño de la Página) y conectas de la forma correcta. El Pixel te guía.'),
          tour: 'conectar-extensao', pagina: 'admin-shopify.html'
        },
        atender: {
          cena: L('Conectei, mas meu catálogo não apareceu, e ainda criei um Pixel novo por engano! 😰', '¡Conecté, pero mi catálogo no apareció, y además creé un píxel nuevo por error! 😰'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Calma. Sobre o catálogo: esse fluxo conecta Pixel e API de Conversões, mas não o catálogo, que se conecta por outro caminho (Gerenciador de Comércio). Sobre o Pixel novo: vamos conferir no Gerenciador de Eventos se há dois Pixels enviando o mesmo evento, para não duplicar, e deixar só um.”', '“Calma. Sobre el catálogo: este flujo conecta píxel y API de Conversiones, pero no el catálogo, que se conecta por otro camino (Administrador de ventas). Sobre el píxel nuevo: revisemos en el Administrador de eventos si hay dos píxeles enviando el mismo evento, para no duplicar, y dejar solo uno.”'), fb: L('Isso! Explicou o limite e o risco real.', '¡Eso! Explicaste el límite y el riesgo real.') },
            { certa: false, txt: L('“Refaça tudo do zero.”', '“Rehaz todo desde cero.”'), fb: L('Antes confira o que está enviando.', 'Antes revisa qué está enviando.') },
            { certa: false, txt: L('“O catálogo some sempre, é normal.”', '“El catálogo desaparece siempre, es normal.”'), fb: L('Ele não faz parte desse fluxo.', 'No forma parte de este flujo.') },
            { certa: false, txt: L('“Apague a conta de anúncios.”', '“Elimina la cuenta publicitaria.”'), fb: L('Não tem relação.', 'No tiene relación.') }
          ]
        },
        cola: {
          perguntas: [L('Qual portfólio, Página, Pixel e conta de anúncios foram escolhidos na janela?', '¿Qué portfolio, página, píxel y cuenta publicitaria se eligieron en la ventana?'), L('O site já tinha um Pixel instalado antes?', '¿El sitio ya tenía un píxel instalado antes?')],
          conferir: [FERR, L('Atividade do Pixel no Gerenciador de Eventos.', 'Actividad del píxel en el Administrador de eventos.')],
          frase: L('Na janela da extensão você escolhe portfólio, Página, Pixel e conta de anúncios; o catálogo se conecta por outro caminho. Vamos conferir se os eventos estão chegando sem duplicar.', 'En la ventana de la extensión eliges portfolio, página, píxel y cuenta publicitaria; el catálogo se conecta por otro camino. Revisemos si los eventos están llegando sin duplicar.'),
          passos: [L('Confirme os ativos escolhidos.', 'Confirma los activos elegidos.'), L('Confira os eventos no Gerenciador de Eventos.', 'Revisa los eventos en el Administrador de eventos.')],
          encaminhar: L('Problemas dentro da janela da plataforma são resolvidos com o suporte da plataforma parceira; os da Meta, pelo suporte da Meta.', 'Los problemas dentro de la ventana de la plataforma se resuelven con la asistencia de la plataforma socia; los de Meta, con la asistencia de Meta.')
        }
      },
      {
        id: '04', min: 8, status: 'pronta',
        titulo: L('Escolher a configuração da API de Conversões', 'Elegir la configuración de la API de Conversiones'),
        antes: L('Três clientes da Marina, três situações diferentes.', 'Tres clientes de Marina, tres situaciones distintas.'),
        gancho: L('Um clique, um desenvolvedor ou um parceiro? A resposta depende do cliente.', '¿Un clic, un desarrollador o un socio? La respuesta depende del cliente.'),
        objetivo: L('Comparar as três opções por custo, tempo e recursos e indicar a certa para cada cliente.', 'Comparar las tres opciones por costo, tiempo y recursos e indicar la correcta para cada cliente.'),
        entender: {
          dialogo: [
            ['marina', L('Como configuro a API de Conversões? Vi várias opções. 😵', '¿Cómo configuro la API de Conversiones? Vi varias opciones. 😵')],
            ['rafa', L('Três: a habilitada pela Meta (um clique, grátis, só web, usa o Pixel que você já tem), a integração direta (precisa de desenvolvedor e leva 2 a 4 semanas, mas serve para web, app, offline, CRM e mensagens) e os parceiros (custo e tempo dependem do parceiro).', 'Tres: la habilitada por Meta (un clic, gratis, solo web, usa el píxel que ya tienes), la integración directa (necesita desarrollador y tarda 2 a 4 semanas, pero sirve para web, app, offline, CRM y mensajes) y los socios (costo y tiempo dependen del socio).')],
            ['marina', L('E se a loja é na Shopify?', '¿Y si la tienda es en Shopify?')],
            ['rafa', L('Plataformas de comércio como Shopify, WooCommerce, Wix e BigCommerce configuram a API de Conversões com poucos cliques e sem custo adicional.', 'Las plataformas de comercio como Shopify, WooCommerce, Wix y BigCommerce configuran la API de Conversiones con pocos clics y sin costo adicional.')],
            ['pixel', L('E para eventos de app ou de loja física (offline), a integração direta é a única opção hoje.', 'Y para eventos de app o de tienda física (offline), la integración directa es la única opción hoy.')]
          ],
          pontos: [
            L('<b>Habilitada pela Meta:</b> grátis, um clique, só web.', '<b>Habilitada por Meta:</b> gratis, un clic, solo web.'),
            L('<b>Integração direta:</b> desenvolvedor; web, app, offline, CRM e mensagens.', '<b>Integración directa:</b> desarrollador; web, app, offline, CRM y mensajes.'),
            L('<b>Parceiros:</b> custo e tempo variam; lojas de plataformas conhecidas: poucos cliques.', '<b>Socios:</b> costo y tiempo varían; tiendas de plataformas conocidas: pocos clics.')
          ],
          notas: NOTA
        },
        ferramenta: 'capi-mbe',
        praticar: {
          texto: L('No simulador, o Pixel te guia pela tabela de opções e por dois cenários de cliente.', 'En el simulador, el Pixel te guía por la tabla de opciones y por dos escenarios de cliente.'),
          tour: 'escolher-capi', pagina: 'meta-mbe.html?zerar=1'
        },
        atender: {
          cena: L('Quero mandar também as vendas da minha loja física para a Meta. Qual opção uso? 🏬', '¡Quiero mandar también las ventas de mi tienda física a Meta! ¿Qué opción uso? 🏬'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Para eventos de loja física (offline) e de app, a integração direta é a única opção disponível hoje; ela exige um desenvolvedor e costuma levar de 2 a 4 semanas. Os eventos do site você pode seguir enviando pelo parceiro ou pelo Pixel.”', '“Para eventos de tienda física (offline) y de app, la integración directa es la única opción disponible hoy; exige un desarrollador y suele tardar de 2 a 4 semanas. Los eventos del sitio puedes seguir enviándolos por el socio o por el píxel.”'), fb: L('Isso! Opção e prazo reais.', '¡Eso! Opción y plazo reales.') },
            { certa: false, txt: L('“Use a API de Conversões habilitada pela Meta, é um clique.”', '“Usa la API de Conversiones habilitada por Meta, es un clic.”'), fb: L('Essa é só para web.', 'Esa es solo para web.') },
            { certa: false, txt: L('“Não dá para mandar vendas físicas.”', '“No se pueden mandar ventas físicas.”'), fb: L('Dá, por integração direta.', 'Se puede, por integración directa.') },
            { certa: false, txt: L('“Use o Pixel no balcão.”', '“Usa el píxel en el mostrador.”'), fb: L('O Pixel é do site.', 'El píxel es del sitio.') }
          ]
        },
        cola: {
          perguntas: [L('Que eventos o cliente quer enviar: site, app, offline, CRM?', '¿Qué eventos quiere enviar el cliente: sitio, app, offline, CRM?'), L('Tem desenvolvedor? Qual plataforma usa?', '¿Tiene desarrollador? ¿Qué plataforma usa?')],
          conferir: [L('Comparar as opções de configuração da API de Conversões (Central de Ajuda).', 'Comparar las opciones de configuración de la API de Conversiones (Centro de ayuda).'), FERR],
          frase: L('Cada opção serve a um caso: um clique para quem só tem site e Pixel, parceiros para plataformas conhecidas, e integração direta para app e offline.', 'Cada opción sirve a un caso: un clic para quien solo tiene sitio y píxel, socios para plataformas conocidas, e integración directa para app y offline.'),
          passos: [L('Pergunte que eventos e que plataforma.', 'Pregunta qué eventos y qué plataforma.'), L('Indique a opção pela tabela.', 'Indica la opción según la tabla.')],
          encaminhar: L('Integração direta é com o desenvolvedor do cliente: oriente com as páginas da Central de Ajuda e do Meta for Developers.', 'La integración directa es con el desarrollador del cliente: orienta con las páginas del Centro de ayuda y de Meta for Developers.')
        }
      },
      {
        id: '05', min: 8, status: 'pronta',
        titulo: L('Quando a integração dá problema', 'Cuando la integración da problemas'),
        antes: L('Um cliente conectou a plataforma, mas os resultados não aparecem como esperado.', 'Un cliente conectó la plataforma, pero los resultados no aparecen como se esperaba.'),
        gancho: L('Cinco sintomas comuns e o primeiro lugar para olhar em cada um.', 'Cinco síntomas comunes y el primer lugar para mirar en cada uno.'),
        objetivo: L('Triar os problemas mais comuns de integração e indicar o primeiro passo de conferência.', 'Clasificar los problemas más comunes de integración e indicar el primer paso de revisión.'),
        entender: {
          dialogo: [
            ['marina', L('Conectei e nada chega! O que olho primeiro? 😩', '¡Conecté y no llega nada! ¿Qué miro primero? 😩')],
            ['rafa', L('Gerenciador de Eventos: o Pixel certo está recebendo atividade? Use Eventos de teste. Depois, veja se o plugin ou a extensão está na versão mais recente e se o parceiro escolhido é o da plataforma do site.', 'Administrador de eventos: ¿el píxel correcto está recibiendo actividad? Usa Probar eventos. Luego, mira si el plugin o la extensión está en la versión más reciente y si el socio elegido es el de la plataforma del sitio.')],
            ['marina', L('E compras em dobro?', '¿Y compras duplicadas?')],
            ['rafa', L('Duplicação: o mesmo evento chegando pela extensão e por outro caminho, como um Pixel manual. Deixe só um caminho.', 'Duplicación: el mismo evento llegando por la extensión y por otro camino, como un píxel manual. Deja un solo camino.')],
            ['pixel', L('Boas práticas: atualize plugins, use integrações de parceiros em vez de código manual e monitore o rastreamento no Gerenciador de Eventos. Catálogo ausente: ele é outro caminho. Agência sem acesso: dê acesso ao parceiro (próxima aula).', 'Buenas prácticas: actualiza plugins, usa integraciones de socios en lugar de código manual y monitorea el rastreo en el Administrador de eventos. Catálogo ausente: es otro camino. Agencia sin acceso: da acceso al socio (próxima clase).')]
          ],
          pontos: [
            L('<b>Sem eventos:</b> Pixel certo, plugin atualizado, parceiro certo.', '<b>Sin eventos:</b> píxel correcto, plugin actualizado, socio correcto.'),
            L('<b>Em dobro:</b> mais de um caminho enviando; deixe um só.', '<b>Duplicados:</b> más de un camino enviando; deja uno solo.'),
            L('<b>Catálogo ausente:</b> outro caminho; <b>agência sem acesso:</b> dar acesso ao parceiro.', '<b>Catálogo ausente:</b> otro camino; <b>agencia sin acceso:</b> dar acceso al socio.')
          ],
          notas: NOTA
        },
        ferramenta: 'problemas-mbe',
        praticar: {
          texto: L('Dois sintomas. Escolha um e o Pixel te guia; faça os dois se quiser.', 'Dos síntomas. Elige uno y el Pixel te guía; haz los dos si quieres.'),
          opcoes: [
            { id: 'eventos', icone: '📡', pagina: 'loja.html', tour: 'plataforma-conectada', selo: L('mais comum', 'más común'),
              tit: L('Os eventos não chegam', 'Los eventos no llegan'), txt: L('Fazer uma compra, ver que nada chega e ajustar o compartilhamento de dados na plataforma.', 'Hacer una compra, ver que no llega nada y ajustar compartir datos en la plataforma.') },
            { id: 'catalogo', icone: '🗂️', pagina: 'admin-shopify.html', tour: 'produtos-sumidos',
              tit: L('O catálogo não aparece', 'El catálogo no aparece'), txt: L('Achar os produtos que não estão disponíveis no canal e corrigir.', 'Encontrar los productos que no están disponibles en el canal y corregir.') }
          ]
        },
        atender: {
          cena: L('A integração está quebrada! Desde que conectei, nada funciona! Quero cancelar tudo! 😡', '¡La integración está rota! ¡Desde que conecté, nada funciona! ¡Quiero cancelar todo! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Vamos por partes antes de cancelar. Primeiro, no Gerenciador de Eventos, vemos se o Pixel certo recebe atividade com Eventos de teste; depois, se o plugin está atualizado e se o parceiro escolhido é o da sua plataforma. Se houver evento em dobro, deixamos só um caminho. Se for o catálogo, ele se conecta por outro caminho.”', '“Vamos por partes antes de cancelar. Primero, en el Administrador de eventos, vemos si el píxel correcto recibe actividad con Probar eventos; después, si el plugin está actualizado y si el socio elegido es el de tu plataforma. Si hay evento duplicado, dejamos un solo camino. Si es el catálogo, se conecta por otro camino.”'), fb: L('Isso! Acolheu e deu a ordem.', '¡Eso! Acogiste y diste el orden.') },
            { certa: false, txt: L('“Cancele e instale o código manual.”', '“Cancela e instala el código manual.”'), fb: L('Código manual aumenta o risco de erro.', 'El código manual aumenta el riesgo de error.') },
            { certa: false, txt: L('“Espere uma semana.”', '“Espera una semana.”'), fb: L('Dá para conferir agora.', 'Se puede revisar ahora.') },
            { certa: false, txt: L('“A Meta está fora do ar.”', '“Meta está caída.”'), fb: L('Sem sinal disso.', 'Sin señal de eso.') }
          ]
        },
        cola: {
          perguntas: [L('O que acontece exatamente: não chegam eventos, duplicam, falta catálogo, falta acesso?', '¿Qué pasa exactamente: no llegan eventos, se duplican, falta catálogo, falta acceso?'), L('Qual plataforma e qual versão do plugin?', '¿Qué plataforma y qué versión del plugin?')],
          conferir: [FERR, L('Eventos de teste e Diagnóstico no Gerenciador de Eventos.', 'Probar eventos y Diagnóstico en el Administrador de eventos.')],
          frase: L('Vamos conferir por ordem: se o Pixel certo recebe eventos, se o plugin está atualizado, se há duplicação e, se for o catálogo, o caminho dele.', 'Revisemos en orden: si el píxel correcto recibe eventos, si el plugin está actualizado, si hay duplicación y, si es el catálogo, su camino.'),
          passos: [L('Abra Eventos de teste e faça uma ação no site.', 'Abre Probar eventos y haz una acción en el sitio.'), L('Compare com os eventos recebidos.', 'Compara con los eventos recibidos.')],
          encaminhar: L('Se o problema estiver dentro da plataforma parceira, oriente o cliente a falar com o suporte dela.', 'Si el problema está dentro de la plataforma socia, orienta al cliente a hablar con su asistencia.')
        }
      },
      {
        id: '06', min: 8, status: 'pronta',
        titulo: L('Dar acesso a um parceiro', 'Dar acceso a un socio'),
        antes: L('A agência da Marina precisa ver o Pixel e a Página do cliente.', 'La agencia de Marina necesita ver el píxel y la página del cliente.'),
        gancho: L('Controle total só para quem precisa. Para os outros, acesso parcial.', 'Control total solo para quien lo necesita. Para los demás, acceso parcial.'),
        objetivo: L('Conceder a um parceiro acesso aos ativos do portfólio: pré-requisitos, passos e a diferença entre controle total e acesso parcial.', 'Conceder a un socio acceso a los activos del portfolio: requisitos previos, pasos y la diferencia entre control total y acceso parcial.'),
        entender: {
          dialogo: [
            ['marina', L('A agência diz que não vê o Pixel. 😕', 'La agencia dice que no ve el píxel. 😕')],
            ['rafa', L('Você precisa compartilhar os ativos com o portfólio dela. Só quem tem controle total do portfólio pode fazer isso, e o parceiro precisa ter um portfólio e informar a identificação dele. Ative também a autenticação de dois fatores no portfólio, se ainda não estiver.', 'Debes compartir los activos con su portfolio. Solo quien tiene control total del portfolio puede hacerlo, y el socio debe tener un portfolio e informar su identificación. Activa también la autenticación de dos factores en el portfolio, si todavía no está.')],
            ['marina', L('Onde faço?', '¿Dónde lo hago?')],
            ['rafa', L('Nas Configurações do portfólio, em Parceiros, Adicionar, Conceder a um parceiro acesso aos seus recursos; informe a identificação do portfólio do parceiro, escolha os ativos e o nível de acesso, e clique em Atribuir ativos.', 'En la Configuración del portfolio, en Socios, Agregar, Conceder a un socio acceso a tus recursos; ingresa la identificación del portfolio del socio, elige los activos y el nivel de acceso, y haz clic en Asignar activos.')],
            ['pixel', L('Controle total deixa o parceiro gerenciar tudo (mas não compartilhar o ativo com outra empresa); acesso parcial dá só as tarefas escolhidas. Outra pessoa com controle total pode precisar aprovar.', 'El control total deja al socio administrar todo (pero no compartir el activo con otra empresa); el acceso parcial da solo las tareas elegidas. Otra persona con control total puede necesitar aprobar.')]
          ],
          pontos: [
            L('<b>Só com controle total</b> do portfólio; o parceiro precisa de um portfólio e do ID.', '<b>Solo con control total</b> del portfolio; el socio necesita un portfolio y el ID.'),
            L('<b>Caminho:</b> Configurações › Parceiros › Adicionar › Conceder acesso › ID › ativos e nível › Atribuir.', '<b>Camino:</b> Configuración › Socios › Agregar › Conceder acceso › ID › activos y nivel › Asignar.'),
            L('<b>Prefira acesso parcial;</b> controle total só se necessário.', '<b>Prefiere acceso parcial;</b> control total solo si es necesario.')
          ],
          notas: NOTA
        },
        ferramenta: 'acesso-mbe',
        praticar: {
          texto: L('No simulador, o Pixel te guia pelos passos para dar à agência acesso parcial ao Pixel e à Página.', 'En el simulador, el Pixel te guía por los pasos para dar a la agencia acceso parcial al píxel y a la página.'),
          tour: 'dar-acesso-parceiro', pagina: 'meta-mbe.html?zerar=1'
        },
        atender: {
          cena: L('Entrei nas Configurações e não vejo a opção Parceiros. A Meta escondeu? 😠', 'Entré en Configuración y no veo la opción Socios. ¿Meta la escondió? 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Ninguém escondeu: a opção Parceiros só aparece para quem tem controle total do portfólio empresarial. Veja se você tem esse acesso; se não tiver, peça a quem é dono do portfólio para conceder ou para fazer o compartilhamento.”', '“Nadie la escondió: la opción Socios solo aparece para quien tiene control total del portfolio comercial. Mira si tienes ese acceso; si no, pide a quien es dueño del portfolio que te lo conceda o que haga el uso compartido.”'), fb: L('Isso! Causa real e caminho.', '¡Eso! Causa real y camino.') },
            { certa: false, txt: L('“É um bug, espere.”', '“Es un bug, espera.”'), fb: L('É falta de controle total.', 'Es falta de control total.') },
            { certa: false, txt: L('“Use a conta da agência para compartilhar.”', '“Usa la cuenta de la agencia para compartir.”'), fb: L('Quem compartilha é quem tem controle total do portfólio dono do ativo.', 'Quien comparte es quien tiene control total del portfolio dueño del activo.') },
            { certa: false, txt: L('“Crie um novo portfólio.”', '“Crea un nuevo portfolio.”'), fb: L('Antes confira o seu acesso.', 'Antes revisa tu acceso.') }
          ]
        },
        cola: {
          perguntas: [L('Quem tem controle total do portfólio? Qual é a identificação do portfólio do parceiro?', '¿Quién tiene control total del portfolio? ¿Cuál es la identificación del portfolio del socio?'), L('O parceiro precisa de controle total ou acesso parcial? Para quais tarefas?', '¿El socio necesita control total o acceso parcial? ¿Para qué tareas?')],
          conferir: [L('Meta Business Suite › Configurações › Usuários › Parceiros.', 'Meta Business Suite › Configuración › Usuarios › Socios.'), L('Autenticação de dois fatores no portfólio.', 'Autenticación de dos factores en el portfolio.')],
          frase: L('Para a agência ver o Pixel e a Página, quem tem controle total do portfólio compartilha os ativos com o portfólio dela, preferindo o acesso parcial. Vamos fazer juntos.', 'Para que la agencia vea el píxel y la página, quien tiene control total del portfolio comparte los activos con su portfolio, prefiriendo el acceso parcial. Hagámoslo juntos.'),
          passos: [L('Peça a identificação do portfólio da agência.', 'Pide la identificación del portfolio de la agencia.'), L('Atribua os ativos com acesso parcial.', 'Asigna los activos con acceso parcial.')],
          encaminhar: L('Se o cliente não tem controle total, quem é dono do portfólio precisa agir: oriente-o a falar com essa pessoa.', 'Si el cliente no tiene control total, quien es dueño del portfolio debe actuar: oriéntalo a hablar con esa persona.')
        }
      }
    ];
  })(),
  integracoes: (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Galeria de parceiros e página Integrações vistas de verdade no Gerenciador de Eventos da conta de aula em 16/10/2026 (PT e ES); a conta não tem conjunto de dados, então a aba Diagnóstico real não foi vista. Central de Ajuda da Meta para Empresas lida em português: “Como conectar sua conta do WooCommerce à Meta”, “Como solucionar mensagens de erro e aviso do Pixel da Meta no Gerenciador de Eventos da Meta” e “Sobre as Integrações de Parceiros para eventos do site”. Pixel como fonte do catálogo e Wix Premium vêm de páginas da Central de Ajuda achadas em pesquisa (inglês e espanhol), não lidas na íntegra (a conferir). As telas do simulador são do treino.', 'Galería de socios y página Integraciones vistas de verdad en el Administrador de eventos de la cuenta de clase el 16/10/2026 (PT y ES); la cuenta no tiene conjunto de datos, así que la pestaña Diagnóstico real no se vio. Centro de ayuda de Meta para Empresas leído en portugués: “Cómo conectar tu cuenta de WooCommerce a Meta”, “Cómo solucionar los mensajes de error y de advertencia del píxel de Meta en el Administrador de eventos de Meta” y “Acerca de las integraciones de socios para eventos del sitio web”. Píxel como fuente del catálogo y Wix Premium vienen de páginas del Centro de ayuda halladas en una búsqueda (inglés y español), no leídas completas (por confirmar). Las pantallas del simulador son del entrenamiento.');
    var FERR = L('Gerenciador de Eventos › Integrações e Diagnóstico.', 'Administrador de eventos › Integraciones y Diagnóstico.');
    return [
      {
        id: '01', min: 7, status: 'pronta',
        titulo: L('Como a integração com plataformas de terceiros funciona', 'Cómo funciona la integración con plataformas de terceros'),
        antes: L('Os clientes da Marina usam plataformas diferentes: WooCommerce, Wix, Google Tag Manager…', 'Los clientes de Marina usan plataformas distintas: WooCommerce, Wix, Google Tag Manager…'),
        gancho: L('Cada plataforma tem seu jeito de conectar, mas o objetivo é o mesmo: eventos chegando certos à Meta.', 'Cada plataforma tiene su forma de conectar, pero el objetivo es el mismo: eventos llegando bien a Meta.'),
        objetivo: L('Saber os tipos de parceiro, o que cada integração entrega e o que fazer se a plataforma não estiver na lista.', 'Saber los tipos de socio, qué entrega cada integración y qué hacer si la plataforma no está en la lista.'),
        entender: {
          dialogo: [
            ['marina', L('Cada cliente tem uma plataforma. Como a Meta se conecta a todas? 🤔', 'Cada cliente tiene una plataforma. ¿Cómo se conecta Meta a todas? 🤔')],
            ['rafa', L('Pelas Integrações de Parceiros: plataformas de sites (WordPress, Shopify, Joomla), de comércio (WooCommerce, BigCommerce, Ecwid, OpenCart, PrestaShop, Magento/Adobe Commerce, SHOPLINE), gerenciadores de tags, plataformas de dados de clientes e mais. Elas capturam os eventos do site sem editar código.', 'Por las Integraciones de Socios: plataformas de sitios web (WordPress, Shopify, Joomla), de comercio (WooCommerce, BigCommerce, Ecwid, OpenCart, PrestaShop, Magento/Adobe Commerce, SHOPLINE), administradores de etiquetas, plataformas de datos de clientes y más. Capturan los eventos del sitio sin editar código.')],
            ['marina', L('E o que elas entregam?', '¿Y qué entregan?')],
            ['rafa', L('Pixel no navegador e API de Conversões no servidor, para dados mais precisos. Algumas, como o plugin do WooCommerce, também sincronizam os produtos com o Gerenciador de Comércio.', 'Píxel en el navegador y API de Conversiones en el servidor, para datos más precisos. Algunas, como el plugin de WooCommerce, también sincronizan los productos con el Administrador de ventas.')],
            ['pixel', L('Se a plataforma não estiver listada, dá para configurar a API de Conversões manualmente ou chamar o provedor de serviços. E depois de conectar, vale monitorar o Gerenciador de Eventos e manter os plugins atualizados.', 'Si la plataforma no está en la lista, se puede configurar la API de Conversiones manualmente o llamar al proveedor de servicios. Y después de conectar, conviene monitorear el Administrador de eventos y mantener los plugins actualizados.')]
          ],
          pontos: [
            L('<b>Parceiro</b> = eventos do site sem editar código (Pixel + API de Conversões).', '<b>Socio</b> = eventos del sitio sin editar código (píxel + API de Conversiones).'),
            L('<b>Alguns plugins</b> também sincronizam produtos (ex.: WooCommerce).', '<b>Algunos plugins</b> también sincronizan productos (ej.: WooCommerce).'),
            L('<b>Fora da lista:</b> API de Conversões manual ou provedor de serviços.', '<b>Fuera de la lista:</b> API de Conversiones manual o proveedor de servicios.')
          ],
          notas: NOTA
        },
        ferramenta: 'visao-integ',
        atender: {
          cena: L('Uso uma plataforma que ninguém conhece. A Meta funciona comigo ou não? 😕', 'Uso una plataforma que nadie conoce. ¿Meta funciona conmigo o no? 😕'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Funciona. Primeiro vemos se a sua plataforma está na Galeria de parceiros, em Integrações no Gerenciador de Eventos. Se não estiver, dá para configurar a API de Conversões manualmente ou falar com o seu provedor de serviços.”', '“Funciona. Primero vemos si tu plataforma está en la Galería de socios, en Integraciones en el Administrador de eventos. Si no está, se puede configurar la API de Conversiones manualmente o hablar con tu proveedor de servicios.”'), fb: L('Isso! Caminho e alternativa.', '¡Eso! Camino y alternativa.') },
            { certa: false, txt: L('“Não funciona, mude de plataforma.”', '“No funciona, cambia de plataforma.”'), fb: L('Há alternativa manual.', 'Hay alternativa manual.') },
            { certa: false, txt: L('“Funciona sempre, sem fazer nada.”', '“Funciona siempre, sin hacer nada.”'), fb: L('É preciso conectar.', 'Hay que conectar.') },
            { certa: false, txt: L('“Passe a senha da plataforma.”', '“Pásame la contraseña de la plataforma.”'), fb: L('Nunca peça senha.', 'Nunca pidas contraseñas.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é a plataforma? Está na Galeria de parceiros?', '¿Cuál es la plataforma? ¿Está en la Galería de socios?'), L('Já existe um Pixel ou outra integração ativa?', '¿Ya existe un píxel u otra integración activa?')],
          conferir: [FERR],
          frase: L('Vamos ver se a sua plataforma está na Galeria de parceiros; se estiver, conectamos sem editar código; se não, configuramos a API de Conversões manualmente.', 'Veamos si tu plataforma está en la Galería de socios; si está, conectamos sin editar código; si no, configuramos la API de Conversiones manualmente.'),
          passos: [L('Abra Integrações › Galeria de parceiros.', 'Abre Integraciones › Galería de socios.'), L('Siga as instruções do parceiro.', 'Sigue las instrucciones del socio.')],
          encaminhar: L('Detalhes da plataforma são do provedor dela: oriente o cliente a usar o suporte da plataforma.', 'Los detalles de la plataforma son de su proveedor: orienta al cliente a usar la asistencia de la plataforma.')
        }
      },
      {
        id: '02', min: 8, status: 'pronta',
        titulo: L('Conectar o WooCommerce à Meta', 'Conectar WooCommerce a Meta'),
        antes: L('Uma cliente da Marina tem loja em WordPress com WooCommerce.', 'Una clienta de Marina tiene tienda en WordPress con WooCommerce.'),
        gancho: L('Quatro pré-requisitos, seis passos e uns 10 a 30 minutos de espera.', 'Cuatro requisitos previos, seis pasos y unos 10 a 30 minutos de espera.'),
        objetivo: L('Conferir os pré-requisitos e seguir o passo a passo do plugin Meta para WooCommerce.', 'Revisar los requisitos previos y seguir el paso a paso del plugin Meta para WooCommerce.'),
        entender: {
          dialogo: [
            ['marina', L('O que a cliente precisa antes de começar? 😅', '¿Qué necesita la clienta antes de empezar? 😅')],
            ['rafa', L('Um site WordPress com função de administrador, o plugin do WooCommerce, controle total do portfólio empresarial (ou permissão para gerenciar os ativos) e autenticação de dois fatores no portfólio.', 'Un sitio WordPress con rol de administrador, el plugin de WooCommerce, control total del portfolio comercial (o permiso para administrar los activos) y autenticación de dos factores en el portfolio.')],
            ['marina', L('E depois?', '¿Y después?')],
            ['rafa', L('Instala o plugin “Meta para WooCommerce”, ativa, vai em Marketing, Facebook, Começar, entra no Facebook, cria ou escolhe os ativos (portfólio, Página, Instagram, catálogo, conta de anúncios e Pixel), informa e-mail de contato, política de devolução e de privacidade e autoriza a conexão.', 'Instala el plugin “Meta para WooCommerce”, lo activa, va a Marketing, Facebook, Empezar, inicia sesión en Facebook, crea o elige los activos (portfolio, página, Instagram, catálogo, cuenta publicitaria y píxel), informa correo de contacto, política de devolución y de privacidad y autoriza la conexión.')],
            ['pixel', L('Pronto: os produtos sincronizam com o Gerenciador de Comércio e o Pixel e a API de Conversões enviam eventos. A loja pode ser publicada sozinha em 10 a 30 minutos, então volte depois para conferir se terminou sem erros.', 'Listo: los productos se sincronizan con el Administrador de ventas y el píxel y la API de Conversiones envían eventos. La tienda puede publicarse sola en 10 a 30 minutos, así que vuelve después para revisar si terminó sin errores.')]
          ],
          pontos: [
            L('<b>Pré-requisitos:</b> WordPress admin, WooCommerce, controle total (ou permissão) e 2FA.', '<b>Requisitos previos:</b> WordPress admin, WooCommerce, control total (o permiso) y 2FA.'),
            L('<b>Passos:</b> instalar plugin › Marketing › Facebook › Começar › ativos › dados da loja › autorizar.', '<b>Pasos:</b> instalar plugin › Marketing › Facebook › Empezar › activos › datos de la tienda › autorizar.'),
            L('<b>Depois:</b> 10 a 30 minutos; conferir se terminou sem erros.', '<b>Después:</b> 10 a 30 minutos; revisar si terminó sin errores.')
          ],
          notas: NOTA
        },
        ferramenta: 'woo-integ',
        praticar: {
          texto: L('Rita tem uma loja WooCommerce. Você ativa o plugin Meta for WooCommerce, abre Marketing › Facebook, conecta pela janela da Meta (portfólio, Página, conta de anúncios, Pixel e catálogo), sincroniza os produtos e confere com uma compra de teste. O Pixel te guia, no admin do WordPress.', 'Rita tiene una tienda WooCommerce. Activas el plugin Meta for WooCommerce, abres Marketing › Facebook, conectas por la ventana de Meta (portafolio, Página, cuenta publicitaria, píxel y catálogo), sincronizas los productos y compruebas con una compra de prueba. El Pixel te guía, en el admin de WordPress.'),
          tour: 'conectar-woocommerce', pagina: 'admin-woo.html'
        },
        atender: {
          cena: L('Instalei o plugin, mas na hora de conectar não deixa! Que sistema horrível! 😠', '¡Instalé el plugin, pero a la hora de conectar no deja! ¡Qué sistema horrible! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Vamos conferir os pré-requisitos: se você tem a função de administrador no WordPress, se o WooCommerce está instalado, se tem controle total do portfólio empresarial (ou a permissão dos ativos) e se a autenticação de dois fatores está ativada no portfólio. Muitas vezes falta um desses.”', '“Revisemos los requisitos previos: si tienes el rol de administrador en WordPress, si WooCommerce está instalado, si tienes control total del portfolio comercial (o el permiso de los activos) y si la autenticación de dos factores está activada en el portfolio. Muchas veces falta uno de esos.”'), fb: L('Isso! Os quatro pré-requisitos reais.', '¡Eso! Los cuatro requisitos reales.') },
            { certa: false, txt: L('“Desinstale tudo e use outra plataforma.”', '“Desinstala todo y usa otra plataforma.”'), fb: L('Antes confira os pré-requisitos.', 'Antes revisa los requisitos previos.') },
            { certa: false, txt: L('“É um bug do plugin, espere.”', '“Es un bug del plugin, espera.”'), fb: L('Geralmente falta um pré-requisito.', 'Generalmente falta un requisito previo.') },
            { certa: false, txt: L('“Me passe a senha do WordPress.”', '“Pásame la contraseña de WordPress.”'), fb: L('Nunca peça senha.', 'Nunca pidas contraseñas.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é a função da pessoa no WordPress? O WooCommerce está ativo?', '¿Cuál es el rol de la persona en WordPress? ¿WooCommerce está activo?'), L('Ela tem controle total do portfólio e 2FA ativado?', '¿Tiene control total del portfolio y 2FA activado?')],
          conferir: [L('WordPress › Plugins; Meta Business Suite › Configurações do portfólio.', 'WordPress › Plugins; Meta Business Suite › Configuración del portfolio.'), FERR],
          frase: L('Vamos conferir os quatro pré-requisitos e depois seguir o passo a passo do plugin Meta para WooCommerce.', 'Revisemos los cuatro requisitos previos y luego sigamos el paso a paso del plugin Meta para WooCommerce.'),
          passos: [L('Confira os pré-requisitos.', 'Revisa los requisitos previos.'), L('Siga os 6 passos e espere 10 a 30 minutos.', 'Sigue los 6 pasos y espera 10 a 30 minutos.')],
          encaminhar: L('Problemas dentro do WordPress ou do plugin são resolvidos com o suporte do plugin e da hospedagem; os da Meta, pelo suporte da Meta.', 'Los problemas dentro de WordPress o del plugin se resuelven con la asistencia del plugin y del hosting; los de Meta, con la asistencia de Meta.')
        }
      },
      {
        id: '03', min: 9, status: 'pronta',
        titulo: L('Ler os erros do Diagnóstico do Pixel', 'Leer los errores del Diagnóstico del píxel'),
        antes: L('A cliente conectou a plataforma, mas o Gerenciador de Eventos mostra mensagens em vermelho e amarelo.', 'La clienta conectó la plataforma, pero el Administrador de eventos muestra mensajes en rojo y amarillo.'),
        gancho: L('Doze mensagens, cada uma com causa e correção. Saber ler poupa horas.', 'Doce mensajes, cada uno con causa y corrección. Saber leer ahorra horas.'),
        objetivo: L('Interpretar as mensagens do Diagnóstico e indicar a correção das mais comuns.', 'Interpretar los mensajes del Diagnóstico e indicar la corrección de las más comunes.'),
        entender: {
          dialogo: [
            ['marina', L('Apareceu “Eventos de compra redundantes”. Isso é grave? 😰', 'Apareció “Eventos de compra redundantes”. ¿Es grave? 😰')],
            ['rafa', L('Aparece quando o Pixel recebe quatro ou mais eventos de compra para uma única compra: superestima os relatórios e pode atrapalhar a veiculação. Deixe o código de compra só na página de agradecimento (ou numa ação como Comprar agora) e nunca no cabeçalho do modelo do site.', 'Aparece cuando el píxel recibe cuatro o más eventos de compra para una sola compra: sobrestima los informes y puede estorbar la entrega. Deja el código de compra solo en la página de agradecimiento (o en una acción como Comprar ahora) y nunca en el encabezado de la plantilla del sitio.')],
            ['marina', L('E “incompatibilidade de nome de evento”?', '¿Y “incompatibilidad de nombre de evento”?')],
            ['rafa', L('Um evento parecido com um padrão, mas não idêntico. Os nomes diferenciam maiúsculas: “Compra”, não “compra”. O botão “Ver URLs afetados” mostra as páginas com o código errado.', 'Un evento parecido a uno estándar, pero no idéntico. Los nombres distinguen mayúsculas: “Compra”, no “compra”. El botón “Ver URLs afectadas” muestra las páginas con el código incorrecto.')],
            ['pixel', L('Outras comuns: moeda ou valor ausente ou inválido (use ISO como BRL e número decimal sem símbolo), eventos duplicados com eventos automáticos, vários eventos numa ação, e as notificações de domínio novo, parâmetros bloqueados e dados restritos, que falam de privacidade e dos Termos das Ferramentas Comerciais.', 'Otras comunes: moneda o valor ausente o no válido (usa ISO como BRL y número decimal sin símbolo), eventos duplicados con eventos automáticos, varios eventos en una acción, y las notificaciones de dominio nuevo, parámetros bloqueados y datos restringidos, que hablan de privacidad y de las Condiciones de las Herramientas Comerciales.')]
          ],
          pontos: [
            L('<b>Redundantes:</b> compra só na página de agradecimento, nunca no cabeçalho.', '<b>Redundantes:</b> compra solo en la página de agradecimiento, nunca en el encabezado.'),
            L('<b>Nome:</b> “Compra”, não “compra”; use Ver URLs afetados.', '<b>Nombre:</b> “Compra”, no “compra”; usa Ver URLs afectadas.'),
            L('<b>Valor e moeda:</b> ISO de 3 letras e número decimal sem símbolos.', '<b>Valor y moneda:</b> ISO de 3 letras y número decimal sin símbolos.')
          ],
          notas: NOTA
        },
        ferramenta: 'diag-integ',
        praticar: {
          texto: L('Dois avisos reais do Diagnóstico. Escolha um e o Pixel te guia; faça os dois se quiser.', 'Dos avisos reales del Diagnóstico. Elige uno y el Pixel te guía; haz los dos si quieres.'),
          opcoes: [
            { id: 'redundante', icone: '🔁', pagina: 'loja.html', tour: 'corrigir-duplicado', selo: L('mais comum', 'más común'),
              tit: L('Compras redundantes, vários eventos', 'Compras redundantes, varios eventos'), txt: L('Fazer uma compra, ler o aviso no Diagnóstico e achar a causa.', 'Hacer una compra, leer el aviso en el Diagnóstico y encontrar la causa.') },
            { id: 'valor', icone: '💲', pagina: 'loja.html', tour: 'corrigir-valor',
              tit: L('Valor e moeda inválidos', 'Valor y moneda inválidos'), txt: L('Ler os avisos de valor e moeda e corrigir o código.', 'Leer los avisos de valor y moneda y corregir el código.') }
          ]
        },
        atender: {
          cena: L('O Diagnóstico está cheio de erro, a Meta está sabotando meu Pixel! 😡', '¡El Diagnóstico está lleno de errores, Meta está saboteando mi píxel! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Ninguém sabota: cada mensagem tem causa e correção. Vamos abrir uma por uma e usar o botão Ver URLs afetados para achar as páginas. Por exemplo, compras redundantes costumam vir de código de compra no cabeçalho do site, e nome de evento errado costuma ser maiúscula versus minúscula.”', '“Nadie sabotea: cada mensaje tiene causa y corrección. Abramos uno por uno y usemos el botón Ver URLs afectadas para encontrar las páginas. Por ejemplo, las compras redundantes suelen venir de código de compra en el encabezado del sitio, y el nombre de evento incorrecto suele ser mayúscula versus minúscula.”'), fb: L('Isso! Acolheu e deu método.', '¡Eso! Acogiste y diste método.') },
            { certa: false, txt: L('“Ignore os erros, não importa.”', '“Ignora los errores, no importa.”'), fb: L('Erros afetam relatórios e veiculação.', 'Los errores afectan informes y entrega.') },
            { certa: false, txt: L('“Apague o Pixel.”', '“Elimina el píxel.”'), fb: L('Corrija a causa.', 'Corrige la causa.') },
            { certa: false, txt: L('“Espere, some sozinho.”', '“Espera, desaparece solo.”'), fb: L('Precisa corrigir.', 'Hay que corregir.') }
          ]
        },
        cola: {
          perguntas: [L('Qual é a mensagem exata no Diagnóstico?', '¿Cuál es el mensaje exacto en el Diagnóstico?'), L('Quais URLs aparecem em Ver URLs afetados?', '¿Qué URL aparecen en Ver URLs afectadas?')],
          conferir: [L('Gerenciador de Eventos › Pixel › Diagnóstico.', 'Administrador de eventos › píxel › Diagnóstico.'), FERR],
          frase: L('Cada mensagem do Diagnóstico tem uma causa e uma correção. Vamos abrir a sua e ver as páginas afetadas.', 'Cada mensaje del Diagnóstico tiene una causa y una corrección. Abramos el tuyo y veamos las páginas afectadas.'),
          passos: [L('Abra a mensagem e use Ver URLs afetados.', 'Abre el mensaje y usa Ver URLs afectadas.'), L('Corrija no site e confira de novo.', 'Corrige en el sitio y revisa de nuevo.')],
          encaminhar: L('Se a correção for no código do site, oriente o cliente ou o desenvolvedor dele, mostrando a página e a mensagem.', 'Si la corrección es en el código del sitio, orienta al cliente o a su desarrollador, mostrando la página y el mensaje.')
        }
      },
      {
        id: '04', min: 8, status: 'pronta',
        titulo: L('Pixel como fonte do catálogo', 'Píxel como fuente del catálogo'),
        antes: L('A Marina quer que o catálogo se atualize sozinho conforme as pessoas veem os produtos.', 'Marina quiere que el catálogo se actualice solo según las personas ven los productos.'),
        gancho: L('Cinco condições: se uma falha, o Pixel não alimenta o catálogo.', 'Cinco condiciones: si una falla, el píxel no alimenta el catálogo.'),
        objetivo: L('Conferir as condições para usar o Pixel como fonte de dados do catálogo e saber os prazos.', 'Revisar las condiciones para usar el píxel como fuente de datos del catálogo y saber los plazos.'),
        entender: {
          dialogo: [
            ['marina', L('Dá para o Pixel atualizar o catálogo? 🤔', '¿El píxel puede actualizar el catálogo? 🤔')],
            ['rafa', L('Dá, adicionando o Pixel como fonte de dados do catálogo, a cada vez que alguém interage com uma página de produto. Mas há condições.', 'Sí, agregando el píxel como fuente de datos del catálogo, cada vez que alguien interactúa con una página de producto. Pero hay condiciones.')],
            ['marina', L('Quais?', '¿Cuáles?')],
            ['rafa', L('Catálogo e Pixel no mesmo portfólio (ou compartilhados), permissão nos dois, evento ViewContent nas páginas de produto, tags de microdados nelas e o Pixel ter disparado nos últimos sete dias.', 'Catálogo y píxel en el mismo portfolio (o compartidos), permiso en los dos, evento ViewContent en las páginas de producto, etiquetas de microdatos en ellas y que el píxel se haya activado en los últimos siete días.')],
            ['pixel', L('Depois de conectar, pode levar até 24 horas para ficar pronto; a partir daí, atualiza o catálogo em geral em até 15 minutos após cada interação. Sem microdados, o Pixel não consegue adicionar nem atualizar itens.', 'Después de conectar, puede tardar hasta 24 horas en estar listo; a partir de ahí, actualiza el catálogo por lo general en hasta 15 minutos tras cada interacción. Sin microdatos, el píxel no puede agregar ni actualizar artículos.')]
          ],
          pontos: [
            L('<b>5 condições:</b> mesmo portfólio, permissões, ViewContent, microdados, disparo em 7 dias.', '<b>5 condiciones:</b> mismo portfolio, permisos, ViewContent, microdatos, activación en 7 días.'),
            L('<b>Prazo:</b> até 24 horas para ficar pronto; depois ~15 minutos por interação.', '<b>Plazo:</b> hasta 24 horas para estar listo; después ~15 minutos por interacción.'),
            L('<b>Sem microdados</b> não adiciona nem atualiza itens.', '<b>Sin microdatos</b> no agrega ni actualiza artículos.')
          ],
          notas: NOTA
        },
        ferramenta: 'pixelfonte-integ',
        praticar: {
          texto: L('A Marina quer que o Pixel adicione e atualize os itens do catálogo sozinho. Você vai ao catálogo (Fontes de dados › Adicionar › Pixel da Meta), vê as cinco condições, resolve as que falham (microdados no Microdata Debugger e ViewContent na loja) e adiciona o Pixel como fonte. O Pixel te guia por três telas.', 'Marina quiere que el píxel agregue y actualice los artículos del catálogo solo. Vas al catálogo (Fuentes de datos › Agregar › Píxel de Meta), ves las cinco condiciones, resuelves las que fallan (microdatos en el Microdata Debugger y ViewContent en la tienda) y agregas el píxel como fuente. El Pixel te guía por tres pantallas.'),
          tour: 'pixel-fonte-catalogo', pagina: 'meta-catalogo.html'
        },
        atender: {
          cena: L('Adicionei o Pixel como fonte do catálogo e nada atualiza! 😠', '¡Agregué el píxel como fuente del catálogo y nada se actualiza! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Vamos conferir as condições: catálogo e Pixel no mesmo portfólio ou compartilhados, permissão nos dois, ViewContent e microdados nas páginas de produto e se o Pixel disparou nos últimos sete dias. E lembre que pode levar até 24 horas para ficar pronto.”', '“Revisemos las condiciones: catálogo y píxel en el mismo portfolio o compartidos, permiso en los dos, ViewContent y microdatos en las páginas de producto y si el píxel se activó en los últimos siete días. Y recuerda que puede tardar hasta 24 horas en estar listo.”'), fb: L('Isso! Lista e prazo reais.', '¡Eso! Lista y plazo reales.') },
            { certa: false, txt: L('“Crie outro catálogo.”', '“Crea otro catálogo.”'), fb: L('Antes confira as condições.', 'Antes revisa las condiciones.') },
            { certa: false, txt: L('“O Pixel nunca atualiza catálogo.”', '“El píxel nunca actualiza el catálogo.”'), fb: L('Atualiza, se as condições estiverem certas.', 'Actualiza, si las condiciones están correctas.') },
            { certa: false, txt: L('“Espere um mês.”', '“Espera un mes.”'), fb: L('O prazo é de até 24 horas.', 'El plazo es de hasta 24 horas.') }
          ]
        },
        cola: {
          perguntas: [L('Catálogo e Pixel estão no mesmo portfólio? Há microdados nas páginas de produto?', '¿El catálogo y el píxel están en el mismo portfolio? ¿Hay microdatos en las páginas de producto?'), L('O Pixel recebeu um ViewContent nos últimos 7 dias?', '¿El píxel recibió un ViewContent en los últimos 7 días?')],
          conferir: [L('Gerenciador de Comércio › catálogo › Fontes de dados.', 'Administrador de ventas › catálogo › Orígenes de datos.'), L('Microdata Debugger.', 'Microdata Debugger.')],
          frase: L('Para o Pixel alimentar o catálogo, cinco condições precisam estar certas. Vamos conferir uma por uma.', 'Para que el píxel alimente el catálogo, cinco condiciones deben estar correctas. Revisemos una por una.'),
          passos: [L('Confira as cinco condições.', 'Revisa las cinco condiciones.'), L('Adicione o Pixel como fonte e espere até 24 horas.', 'Agrega el píxel como fuente y espera hasta 24 horas.')],
          encaminhar: L('Microdados no site são trabalho do site do cliente: oriente com o módulo Microdata Debugger.', 'Los microdatos en el sitio son trabajo del sitio del cliente: orienta con el módulo Microdata Debugger.')
        }
      },
      {
        id: '05', min: 7, status: 'pronta',
        titulo: L('Manter e desconectar a integração', 'Mantener y desconectar la integración'),
        antes: L('A cliente da Marina vai trocar de plataforma e quer desconectar o WooCommerce.', 'La clienta de Marina va a cambiar de plataforma y quiere desconectar WooCommerce.'),
        gancho: L('Manter atualizado evita erros. Desconectar sem pensar deixa produtos para trás.', 'Mantener actualizado evita errores. Desconectar sin pensar deja productos atrás.'),
        objetivo: L('Atualizar o plugin, ativar atualizações automáticas e desconectar sabendo o efeito nos produtos.', 'Actualizar el plugin, activar actualizaciones automáticas y desconectar sabiendo el efecto en los productos.'),
        entender: {
          dialogo: [
            ['marina', L('Como mantenho a integração em dia? 🤔', '¿Cómo mantengo la integración al día? 🤔')],
            ['rafa', L('Atualize plugins e extensões com regularidade. No WordPress, em Plugins instalados, procure “Meta para WooCommerce” e clique em Atualizar agora, ou habilite as atualizações automáticas.', 'Actualiza plugins y extensiones con regularidad. En WordPress, en Plugins instalados, busca “Meta para WooCommerce” y haz clic en Actualizar ahora, o habilita las actualizaciones automáticas.')],
            ['marina', L('E se ela quiser desconectar?', '¿Y si ella quiere desconectar?')],
            ['rafa', L('Em Marketing, Facebook, aba Lojas, Configurações, Excluir conexão. A conta do WooCommerce deixa de ligar aos ativos da Meta e as atualizações de produtos param de sincronizar.', 'En Marketing, Facebook, pestaña Tiendas, Configuración, Eliminar conexión. La cuenta de WooCommerce deja de vincularse a los activos de Meta y las actualizaciones de productos dejan de sincronizarse.')],
            ['pixel', L('Atenção: os produtos já sincronizados continuam no Gerenciador de Comércio, a menos que você cancele a sincronização antes ou os exclua à mão depois.', 'Atención: los productos ya sincronizados siguen en el Administrador de ventas, a menos que canceles la sincronización antes o los elimines a mano después.')]
          ],
          pontos: [
            L('<b>Atualize</b> o plugin (ou ative atualização automática).', '<b>Actualiza</b> el plugin (o activa la actualización automática).'),
            L('<b>Desconectar:</b> Marketing › Facebook › Lojas › Configurações › Excluir conexão.', '<b>Desconectar:</b> Marketing › Facebook › Tiendas › Configuración › Eliminar conexión.'),
            L('<b>Produtos</b> ficam no Gerenciador de Comércio se a sincronização não for cancelada antes.', '<b>Los productos</b> quedan en el Administrador de ventas si la sincronización no se cancela antes.')
          ],
          notas: NOTA
        },
        ferramenta: 'manter-integ',
        praticar: {
          texto: L('A integração da Rita está com o plugin desatualizado. Você atualiza o plugin, para a sincronização e desconecta pela janela da Meta. O Pixel te guia.', 'La integración de Rita tiene el plugin desactualizado. Actualizas el plugin, detienes la sincronización y desconectas por la ventana de Meta. El Pixel te guía.'),
          tour: 'manter-desconectar', pagina: 'admin-woo.html'
        },
        atender: {
          cena: L('Desconectei o plugin e meus produtos continuam no catálogo da Meta! Eles roubaram meus dados? 😱', '¡Desconecté el plugin y mis productos siguen en el catálogo de Meta! ¿Robaron mis datos? 😱'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Calma, ninguém roubou nada: ao desconectar o plugin, os produtos que já tinham sido sincronizados permanecem no Gerenciador de Comércio, a menos que se cancele a sincronização antes ou se excluam manualmente depois. Podemos excluir os que você não quer lá.”', '“Calma, nadie robó nada: al desconectar el plugin, los productos que ya se habían sincronizado permanecen en el Administrador de ventas, a menos que se cancele la sincronización antes o se eliminen manualmente después. Podemos eliminar los que no quieres allí.”'), fb: L('Isso! Explicou o comportamento real.', '¡Eso! Explicaste el comportamiento real.') },
            { certa: false, txt: L('“É um erro da Meta.”', '“Es un error de Meta.”'), fb: L('É o comportamento esperado.', 'Es el comportamiento esperado.') },
            { certa: false, txt: L('“Reconecte para apagar.”', '“Reconecta para borrar.”'), fb: L('Dá para excluir no Gerenciador de Comércio.', 'Se puede eliminar en el Administrador de ventas.') },
            { certa: false, txt: L('“Os produtos somem em 24 horas.”', '“Los productos desaparecen en 24 horas.”'), fb: L('Não somem sozinhos.', 'No desaparecen solos.') }
          ]
        },
        cola: {
          perguntas: [L('A sincronização foi cancelada antes de desconectar?', '¿Se canceló la sincronización antes de desconectar?'), L('O plugin estava atualizado?', '¿El plugin estaba actualizado?')],
          conferir: [L('WordPress › Plugins instalados › Meta para WooCommerce.', 'WordPress › Plugins instalados › Meta para WooCommerce.'), L('Gerenciador de Comércio › catálogo › itens.', 'Administrador de ventas › catálogo › artículos.')],
          frase: L('Ao desconectar, os produtos já sincronizados continuam no Gerenciador de Comércio até serem excluídos. Vamos limpar o que você não quer manter.', 'Al desconectar, los productos ya sincronizados siguen en el Administrador de ventas hasta que se eliminen. Limpiemos lo que no quieres mantener.'),
          passos: [L('Cancele a sincronização antes de desconectar.', 'Cancela la sincronización antes de desconectar.'), L('Exclua os itens restantes, se necessário.', 'Elimina los artículos restantes, si es necesario.')],
          encaminhar: L('Excluir produtos do catálogo é decisão do cliente: mostre onde fazer e deixe-o escolher.', 'Eliminar productos del catálogo es decisión del cliente: muestra dónde hacerlo y déjalo elegir.')
        }
      }
    ];
  })(),
  shopify: (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Central de Ajuda da Meta para Empresas lida em português em 16/10/2026: “Como conectar a Shopify ao Facebook e ao Instagram”, “Como criar uma loja e anúncios das Lojas… para vendedores da Shopify”, “Sobre o gerenciamento do seu catálogo com a Shopify” (inclui o redirecionamento para a Shopify), “Configurações e recursos da loja que os vendedores da Shopify precisam gerenciar” e “Como corrigir a duplicação do Pixel da Meta ao usar anúncios das Lojas”. A tela do Gerenciador de Eventos com a Shopify como integração recomendada e o botão “Configure para mim” foram vistos de verdade na conta de aula (PT e ES); o botão não foi clicado. O app dentro da Shopify e a configuração “Redirecionar para a Shopify…” no Gerenciador de Comércio não foram vistos (a conta de aula não tem loja Shopify); as telas do simulador são do treino (a conferir).', 'Centro de ayuda de Meta para Empresas leído en portugués el 16/10/2026: “Cómo conectar Shopify a Facebook e Instagram”, “Cómo crear una tienda y anuncios de Tiendas… para vendedores de Shopify”, “Acerca de la gestión de tu catálogo con Shopify” (incluye la redirección a Shopify), “Configuraciones y funciones de la tienda que los vendedores de Shopify deben gestionar” y “Cómo corregir la duplicación del píxel de Meta al usar anuncios de Tiendas”. La pantalla del Administrador de eventos con Shopify como integración recomendada y el botón “Configurar para mí” se vieron de verdad en la cuenta de clase (PT y ES); el botón no se hizo clic. La app dentro de Shopify y la configuración “Redirigir a Shopify…” en el Administrador de ventas no se vieron (la cuenta de clase no tiene tienda Shopify); las pantallas del simulador son del entrenamiento (por confirmar).');
    var FERR = L('Administrador da Shopify, app Facebook e Instagram e Gerenciador de Comércio.', 'Administrador de Shopify, app Facebook e Instagram y Administrador de ventas.');
    return [
      {
        id: '01', min: 7, status: 'pronta',
        titulo: L('O que a Shopify e a Meta fazem juntas', 'Qué hacen Shopify y Meta juntas'),
        antes: L('A Marina agora atende lojistas que vendem pela Shopify.', 'Marina ahora atiende a comerciantes que venden por Shopify.'),
        gancho: L('Um app, quatro benefícios: produtos, anúncios, vendas e dados.', 'Una app, cuatro beneficios: productos, anuncios, ventas y datos.'),
        objetivo: L('Entender o que a conexão Shopify e Meta entrega e quem cuida de cada parte.', 'Entender qué entrega la conexión Shopify y Meta y quién se ocupa de cada parte.'),
        entender: {
          dialogo: [
            ['marina', L('Por que tanta gente usa a Shopify com a Meta? 🤔', '¿Por qué tanta gente usa Shopify con Meta? 🤔')],
            ['rafa', L('Conectando a Shopify pelo app Facebook e Instagram, você sincroniza os produtos com o Gerenciador de Comércio, cria campanhas e vê insights, vende no Facebook e no Instagram e habilita o Pixel e a API de Conversões para compartilhar dados de forma confiável.', 'Conectando Shopify por la app Facebook e Instagram, sincronizas los productos con el Administrador de ventas, creas campañas y ves estadísticas, vendes en Facebook e Instagram y habilitas el píxel y la API de Conversiones para compartir datos de forma confiable.')],
            ['marina', L('E a loja do Instagram, quem cuida dos pedidos?', '¿Y la tienda de Instagram, quién gestiona los pedidos?')],
            ['rafa', L('Todos os pedidos acontecem na loja da Shopify, e pagamentos e pós-compra também são gerenciados lá. Se você usar o Shopify Payments, a Shopify cobra as taxas direto de você: não há custo adicional da Meta.', 'Todos los pedidos ocurren en la tienda de Shopify, y los pagos y el posventa también se gestionan allí. Si usas Shopify Payments, Shopify cobra las tarifas directamente: no hay costo adicional de Meta.')],
            ['pixel', L('Você continua gerenciando os produtos como de costume na Shopify, e a sincronização cuida do resto. É por isso que o suporte precisa saber onde cada coisa se resolve: na Shopify, no app ou no Gerenciador de Comércio.', 'Sigues gestionando los productos como de costumbre en Shopify, y la sincronización se ocupa del resto. Por eso la asistencia necesita saber dónde se resuelve cada cosa: en Shopify, en la app o en el Administrador de ventas.')]
          ],
          pontos: [
            L('<b>O app Facebook e Instagram</b> sincroniza produtos, liga anúncios, loja, Pixel e API de Conversões.', '<b>La app Facebook e Instagram</b> sincroniza productos, vincula anuncios, tienda, píxel y API de Conversiones.'),
            L('<b>Pedidos e pagamentos:</b> na Shopify; sem custo extra da Meta.', '<b>Pedidos y pagos:</b> en Shopify; sin costo extra de Meta.'),
            L('<b>Produtos:</b> gerenciados na Shopify e sincronizados.', '<b>Productos:</b> gestionados en Shopify y sincronizados.')
          ],
          notas: NOTA
        },
        ferramenta: 'visao-shopify',
        atender: {
          cena: L('Se eu conectar a Shopify, a Meta cobra uma taxa por cada venda da minha loja? 💸', 'Si conecto Shopify, ¿Meta cobra una tarifa por cada venta de mi tienda? 💸'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Pelo que a Central de Ajuda diz, não há tarifa adicional da Meta: os pedidos e o processamento de pagamento são feitos na sua loja da Shopify, e se você usar o Shopify Payments, quem cobra as taxas é a Shopify.”', '“Según dice el Centro de ayuda, no hay tarifa adicional de Meta: los pedidos y el procesamiento de pagos se hacen en tu tienda de Shopify, y si usas Shopify Payments, quien cobra las tarifas es Shopify.”'), fb: L('Isso! Honesto e fiel à fonte.', '¡Eso! Honesto y fiel a la fuente.') },
            { certa: false, txt: L('“Sim, 5% por venda.”', '“Sí, 5% por venta.”'), fb: L('Não há essa taxa da Meta.', 'No hay esa tarifa de Meta.') },
            { certa: false, txt: L('“Depende do mês.”', '“Depende del mes.”'), fb: L('Não é isso.', 'No es eso.') },
            { certa: false, txt: L('“A Meta processa o pagamento.”', '“Meta procesa el pago.”'), fb: L('Os pedidos e pagamentos são na Shopify.', 'Los pedidos y pagos son en Shopify.') }
          ]
        },
        cola: {
          perguntas: [L('A loja é hospedada na Shopify? Já tem o app Facebook e Instagram?', '¿La tienda está alojada en Shopify? ¿Ya tiene la app Facebook e Instagram?'), L('O objetivo é produtos, anúncios, loja ou dados?', '¿El objetivo es productos, anuncios, tienda o datos?')],
          conferir: [FERR],
          frase: L('Conectando a Shopify pelo app Facebook e Instagram, os produtos sincronizam, e os pedidos e pagamentos continuam na Shopify, sem tarifa adicional da Meta.', 'Conectando Shopify por la app Facebook e Instagram, los productos se sincronizan, y los pedidos y pagos siguen en Shopify, sin tarifa adicional de Meta.'),
          passos: [L('Confirme que a loja é Shopify.', 'Confirma que la tienda es Shopify.'), L('Explique o que cada lado faz.', 'Explica qué hace cada lado.')],
          encaminhar: L('Taxas e planos da Shopify são com a Shopify: oriente o cliente a falar com o suporte dela.', 'Las tarifas y planes de Shopify son con Shopify: orienta al cliente a hablar con su asistencia.')
        }
      },
      {
        id: '02', min: 8, status: 'pronta',
        titulo: L('Conectar a Shopify à Meta', 'Conectar Shopify a Meta'),
        antes: L('Um cliente da Marina quer conectar a loja Shopify dele.', 'Un cliente de Marina quiere conectar su tienda Shopify.'),
        gancho: L('Cinco pré-requisitos, sete passos e dois ajustes de dados no final.', 'Cinco requisitos previos, siete pasos y dos ajustes de datos al final.'),
        objetivo: L('Conferir os pré-requisitos, seguir os passos do app e ajustar compartilhamento e acesso a dados.', 'Revisar los requisitos previos, seguir los pasos de la app y ajustar uso compartido y acceso a datos.'),
        entender: {
          dialogo: [
            ['marina', L('Como conecto a Shopify? Preciso de quê? 😅', '¿Cómo conecto Shopify? ¿Qué necesito? 😅')],
            ['rafa', L('Uma loja online da Shopify que não seja protegida por senha, o plano básico ou superior, uma Página do Facebook, um portfólio empresarial da Meta que seja dono da Página e permissões de administrador nesse portfólio.', 'Una tienda online de Shopify que no esté protegida por contraseña, el plan básico o superior, una página de Facebook, un portfolio comercial de Meta que sea dueño de la página y permisos de administrador en ese portfolio.')],
            ['marina', L('E os passos?', '¿Y los pasos?')],
            ['rafa', L('Na Shopify (conferido numa loja real em 19/10/2026): Configurações › Canais de vendas › Shopify App Store › Facebook & Instagram › Instalar (e aprovar os acessos do app) › Começar › Configure sua loja: Perfil do Facebook (Conectar conta), Ativos de negócios, Catálogo, Compartilhamento de dados (preferência e Pixel), Termos e Condições › Enviar para análise.', 'En Shopify (revisado en una tienda real el 19/10/2026): Configuración › Canales de venta › Shopify App Store › Facebook & Instagram › Instalar (y aprobar los accesos de la app) › Comenzar › Configura tu tienda: Perfil de Facebook (Conectar cuenta), Activos comerciales, Catálogo, Compartir datos (preferencia y píxel), Términos y condiciones › Enviar para revisión.')],
            ['pixel', L('Depois de conectar, confira se os produtos sincronizaram e, nas configurações da Shopify, escolha compartilhamento de dados Aprimorado ou Máximo e acesso a dados Sempre ativo ou Otimizado. A Meta recomenda Sempre ativo.', 'Después de conectar, revisa si los productos se sincronizaron y, en la configuración de Shopify, elige uso compartido de datos Mejorado o Máximo y acceso a datos Siempre activo u Optimizado. Meta recomienda Siempre activo.')]
          ],
          pontos: [
            L('<b>Pré-requisitos:</b> loja sem senha, plano básico+, Página, portfólio dono da Página, admin.', '<b>Requisitos previos:</b> tienda sin contraseña, plan básico+, página, portfolio dueño de la página, admin.'),
            L('<b>Passo a passo:</b> Canais de vendas › Facebook e Instagram › instalar › Entrar com o Facebook › Enviar.', '<b>Paso a paso:</b> Canales de ventas › Facebook e Instagram › instalar › Iniciar sesión con Facebook › Enviar.'),
            L('<b>Depois:</b> produtos sincronizados; dados Aprimorado/Máximo; acesso Sempre ativo/Otimizado.', '<b>Después:</b> productos sincronizados; datos Mejorado/Máximo; acceso Siempre activo/Optimizado.')
          ],
          notas: NOTA
        },
        ferramenta: 'conectar-shop',
        praticar: {
          texto: L('Davi tem uma loja Shopify nova. Você instala o canal Facebook e Instagram pelo App Store, conecta a conta na janela da Meta, aceita os termos, liga o compartilhamento de dados com o Pixel certo e confere com uma compra de teste. O Pixel te guia, nas telas do admin da Shopify.', 'Davi tiene una tienda Shopify nueva. Instalas el canal Facebook e Instagram desde la App Store, conectas la cuenta en la ventana de Meta, aceptas los términos, activas compartir datos con el píxel correcto y compruebas con una compra de prueba. El Pixel te guía, en las pantallas del admin de Shopify.'),
          tour: 'conectar-shopify', pagina: 'admin-shopify.html'
        },
        atender: {
          cena: L('Instalei o app mas não consigo conectar! Minha loja ainda está em testes, com senha. 😕', '¡Instalé la app pero no puedo conectar! Mi tienda todavía está en pruebas, con contraseña. 😕'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Esse pode ser o motivo: um dos pré-requisitos é que a loja da Shopify não seja protegida por senha. Também confira se o plano é básico ou superior, se a Página existe e está num portfólio seu e se você tem permissão de administrador nesse portfólio.”', '“Ese puede ser el motivo: uno de los requisitos es que la tienda de Shopify no esté protegida por contraseña. Revisa también si el plan es básico o superior, si la página existe y está en un portfolio tuyo y si tienes permiso de administrador en ese portfolio.”'), fb: L('Isso! Achou a causa e deu a lista.', '¡Eso! Encontraste la causa y diste la lista.') },
            { certa: false, txt: L('“O app está quebrado.”', '“La app está rota.”'), fb: L('Antes confira os pré-requisitos.', 'Antes revisa los requisitos previos.') },
            { certa: false, txt: L('“Compre outro plano de anúncios.”', '“Compra otro plan de anuncios.”'), fb: L('Não tem relação.', 'No tiene relación.') },
            { certa: false, txt: L('“Passe a senha da loja para eu tirar.”', '“Pásame la contraseña de la tienda y yo la quito.”'), fb: L('Nunca peça senha.', 'Nunca pidas contraseñas.') }
          ]
        },
        cola: {
          perguntas: [L('A loja tem senha? Qual é o plano da Shopify?', '¿La tienda tiene contraseña? ¿Cuál es el plan de Shopify?'), L('Qual portfólio é dono da Página? A pessoa é admin dele?', '¿Qué portfolio es dueño de la página? ¿La persona es admin de él?')],
          conferir: [L('Shopify › Canais de vendas › Facebook e Instagram.', 'Shopify › Canales de ventas › Facebook e Instagram.'), FERR],
          frase: L('Vamos conferir os pré-requisitos da conexão com a Shopify e depois seguir o passo a passo do app, um por um.', 'Revisemos los requisitos previos de la conexión con Shopify y luego sigamos el paso a paso de la app, uno por uno.'),
          passos: [L('Confira os 5 pré-requisitos.', 'Revisa los 5 requisitos previos.'), L('Siga os passos e ajuste os dados no final.', 'Sigue los pasos y ajusta los datos al final.')],
          encaminhar: L('Problemas dentro da Shopify são resolvidos com o suporte da Shopify; os da Meta, pelo suporte da Meta.', 'Los problemas dentro de Shopify se resuelven con la asistencia de Shopify; los de Meta, con la asistencia de Meta.')
        }
      },
      {
        id: '03', min: 8, status: 'pronta',
        titulo: L('Quem gerencia o quê', 'Quién gestiona qué'),
        antes: L('A Marina fica em dúvida: onde se muda o prazo de entrega? E o desconto?', 'Marina duda: ¿dónde se cambia el plazo de entrega? ¿Y el descuento?'),
        gancho: L('Três lugares, e cada coisa tem o seu. Saber qual é evita muita ida e volta.', 'Tres lugares, y cada cosa tiene el suyo. Saber cuál es evita mucho ir y venir.'),
        objetivo: L('Indicar se um recurso é gerenciado no administrador da Shopify, no app Facebook e Instagram ou no Gerenciador de Comércio.', 'Indicar si una función se gestiona en el administrador de Shopify, en la app Facebook e Instagram o en el Administrador de ventas.'),
        entender: {
          dialogo: [
            ['marina', L('Onde eu mexo no desconto e no prazo de entrega? 😵', '¿Dónde toco el descuento y el plazo de entrega? 😵')],
            ['rafa', L('No administrador da Shopify ficam pedidos, descontos que serão sincronizados, perfis de envio, produtos e coleções.', 'En el administrador de Shopify están pedidos, descuentos que se sincronizarán, perfiles de envío, productos y colecciones.')],
            ['marina', L('E o prazo?', '¿Y el plazo?')],
            ['rafa', L('Tempos de processamento e prazos de transporte das taxas personalizadas ficam no app Facebook e Instagram, em Configurações de envio; as inscrições de e-mail, em Marketing. O máximo de processamento é de 112 dias úteis.', 'Los tiempos de procesamiento y los plazos de transporte de las tarifas personalizadas están en la app Facebook e Instagram, en Configuración de envío; las suscripciones por correo, en Marketing. El máximo de procesamiento es de 112 días hábiles.')],
            ['pixel', L('No Gerenciador de Comércio você vê as sincronizações, filtra produtos com problemas e personaliza a loja. Mas para corrigir os dados de um produto, volta à Shopify.', 'En el Administrador de ventas ves las sincronizaciones, filtras productos con problemas y personalizas la tienda. Pero para corregir los datos de un producto, vuelves a Shopify.')]
          ],
          pontos: [
            L('<b>Shopify:</b> pedidos, descontos, perfis de envio, produtos, coleções.', '<b>Shopify:</b> pedidos, descuentos, perfiles de envío, productos, colecciones.'),
            L('<b>App Facebook e Instagram:</b> tempos de processamento, prazos de transporte, e-mails.', '<b>App Facebook e Instagram:</b> tiempos de procesamiento, plazos de transporte, correos.'),
            L('<b>Gerenciador de Comércio:</b> ver sincronizações, problemas, personalizar a loja.', '<b>Administrador de ventas:</b> ver sincronizaciones, problemas, personalizar la tienda.')
          ],
          notas: NOTA
        },
        ferramenta: 'onde-shop',
        praticar: {
          texto: L('Você passeia pelo admin da Shopify da Mari: Pedidos, Produtos, o canal Facebook e Instagram (envio e status dos produtos) e entende onde cada coisa é gerenciada. O Pixel te guia.', 'Recorres el admin de Shopify de la Mari: Pedidos, Productos, el canal Facebook e Instagram (envío y estado de los productos) y entiendes dónde se gestiona cada cosa. El Pixel te guía.'),
          tour: 'onde-gerenciar', pagina: 'admin-shopify.html'
        },
        atender: {
          cena: L('Mudei o prazo de entrega no Gerenciador de Comércio e a loja continua mostrando o antigo! 😠', '¡Cambié el plazo de entrega en el Administrador de ventas y la tienda sigue mostrando el antiguo! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Os perfis de envio são gerenciados na Shopify, e os tempos de processamento e os prazos de transporte das taxas personalizadas, no app Facebook e Instagram (Configurações, Configurações de envio). Vamos ajustar lá, não no Gerenciador de Comércio.”', '“Los perfiles de envío se gestionan en Shopify, y los tiempos de procesamiento y los plazos de transporte de las tarifas personalizadas, en la app Facebook e Instagram (Configuración, Configuración de envío). Ajustemos allí, no en el Administrador de ventas.”'), fb: L('Isso! Indicou o lugar certo.', '¡Eso! Indicaste el lugar correcto.') },
            { certa: false, txt: L('“Espere, o Gerenciador demora a atualizar.”', '“Espera, el Administrador demora en actualizar.”'), fb: L('Não é demora: é o lugar errado.', 'No es demora: es el lugar equivocado.') },
            { certa: false, txt: L('“Edite de novo, mais forte.”', '“Edita de nuevo, más fuerte.”'), fb: L('Não resolve.', 'No resuelve.') },
            { certa: false, txt: L('“Apague a loja.”', '“Elimina la tienda.”'), fb: L('Exagero.', 'Exagerado.') }
          ]
        },
        cola: {
          perguntas: [L('O que o cliente quer mudar: pedido, desconto, envio, produto, e-mail?', '¿Qué quiere cambiar el cliente: pedido, descuento, envío, producto, correo?'), L('Em qual tela ele tentou mudar?', '¿En qué pantalla intentó cambiarlo?')],
          conferir: [FERR],
          frase: L('Cada recurso tem o seu lugar: pedidos e produtos na Shopify, prazos no app Facebook e Instagram, e acompanhamento no Gerenciador de Comércio. Vamos achar o lugar da sua mudança.', 'Cada función tiene su lugar: pedidos y productos en Shopify, plazos en la app Facebook e Instagram, y seguimiento en el Administrador de ventas. Busquemos el lugar de tu cambio.'),
          passos: [L('Identifique o recurso.', 'Identifica la función.'), L('Mostre onde ele é gerenciado.', 'Muestra dónde se gestiona.')],
          encaminhar: L('Recursos da Shopify são do suporte da Shopify: oriente o cliente a seguir os artigos de ajuda dela.', 'Las funciones de Shopify son de la asistencia de Shopify: orienta al cliente a seguir sus artículos de ayuda.')
        }
      },
      {
        id: '04', min: 9, status: 'pronta',
        titulo: L('Sincronizar produtos e o redirecionamento', 'Sincronizar productos y la redirección'),
        antes: L('Uma cliente edita produtos no Gerenciador de Comércio e as mudanças desaparecem.', 'Una clienta edita productos en el Administrador de ventas y los cambios desaparecen.'),
        gancho: L('A Shopify manda: o que se edita fora dela é substituído.', 'Shopify manda: lo que se edita fuera de ella se reemplaza.'),
        objetivo: L('Explicar quais produtos sincronizam, por que editar no Gerenciador de Comércio é inútil e o que é “Redirecionar para a Shopify”.', 'Explicar qué productos se sincronizan, por qué editar en el Administrador de ventas es inútil y qué es “Redirigir a Shopify”.'),
        entender: {
          dialogo: [
            ['marina', L('Quais produtos vão para o Gerenciador de Comércio? 🤔', '¿Qué productos van al Administrador de ventas? 🤔')],
            ['rafa', L('Os que estão incluídos no canal de vendas Facebook e Instagram, na Shopify. Se você arquivar um produto na Shopify, ele não sincroniza, ou sai do Gerenciador de Comércio se já tinha sincronizado. Os dados atualizam a cada poucos minutos.', 'Los que están incluidos en el canal de ventas Facebook e Instagram, en Shopify. Si archivas un producto en Shopify, no se sincroniza, o sale del Administrador de ventas si ya se había sincronizado. Los datos se actualizan cada pocos minutos.')],
            ['marina', L('E se eu editar no Gerenciador de Comércio?', '¿Y si edito en el Administrador de ventas?')],
            ['rafa', L('Não edite produtos sincronizados lá: a próxima sincronização da Shopify substitui as mudanças. Por isso, se você tentar adicionar ou editar itens, o Gerenciador pode redirecionar você para a Shopify.', 'No edites productos sincronizados allí: la próxima sincronización de Shopify reemplaza los cambios. Por eso, si intentas agregar o editar artículos, el Administrador puede redirigirte a Shopify.')],
            ['pixel', L('Esse redirecionamento se liga ou desliga em Configurações, Catálogo, Redirecionar para a Shopify para adicionar e editar itens, com o botão Editar. Para feeds avançados, dá até para deixar a Shopify atualizar só preço, disponibilidade e quantidade.', 'Esa redirección se activa o desactiva en Configuración, Catálogo, Redirigir a Shopify para agregar y editar artículos, con el botón Editar. Para feeds avanzados, incluso se puede dejar que Shopify actualice solo precio, disponibilidad y cantidad.')]
          ],
          pontos: [
            L('<b>Sincronizam</b> os produtos incluídos no canal Facebook e Instagram e não arquivados.', '<b>Se sincronizan</b> los productos incluidos en el canal Facebook e Instagram y no archivados.'),
            L('<b>Edite na Shopify:</b> mudanças no Gerenciador de Comércio são substituídas.', '<b>Edita en Shopify:</b> los cambios en el Administrador de ventas se reemplazan.'),
            L('<b>Redirecionar para a Shopify:</b> configuração em Configurações › Catálogo.', '<b>Redirigir a Shopify:</b> configuración en Configuración › Catálogo.')
          ],
          notas: NOTA
        },
        ferramenta: 'sinc-shop',
        praticar: {
          texto: L('A Ecobag não chegou à Meta. Você abre o produto na Shopify, torna ele disponível no canal Facebook e Instagram, confere o status dos produtos e corrige o problema da Camiseta. O Pixel te guia.', 'La Ecobag no llegó a Meta. Abres el producto en Shopify, lo haces disponible en el canal Facebook e Instagram, revisas el estado de los productos y corriges el problema de la Camiseta. El Pixel te guía.'),
          tour: 'sincronizar-produtos', pagina: 'admin-shopify.html'
        },
        atender: {
          cena: L('Mudei o preço da caneca no Gerenciador de Comércio e voltou para o antigo sozinho! 😡', '¡Cambié el precio de la taza en el Administrador de ventas y volvió al antiguo solo! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Isso é esperado: com a Shopify conectada, o preço é gerenciado na Shopify, e a próxima sincronização substitui o que foi editado no Gerenciador de Comércio. Vamos mudar o preço na Shopify; em alguns minutos ele sincroniza.”', '“Eso es lo esperado: con Shopify conectada, el precio se gestiona en Shopify, y la próxima sincronización reemplaza lo editado en el Administrador de ventas. Cambiemos el precio en Shopify; en unos minutos se sincroniza.”'), fb: L('Isso! Explicou a regra e a solução.', '¡Eso! Explicaste la regla y la solución.') },
            { certa: false, txt: L('“É um bug, a Meta vai corrigir.”', '“Es un bug, Meta lo va a corregir.”'), fb: L('É o comportamento esperado.', 'Es el comportamiento esperado.') },
            { certa: false, txt: L('“Edite de novo toda vez.”', '“Edita de nuevo cada vez.”'), fb: L('Seria substituído de novo.', 'Se reemplazaría otra vez.') },
            { certa: false, txt: L('“Desconecte a Shopify.”', '“Desconecta Shopify.”'), fb: L('Exagero: edite na Shopify.', 'Exagerado: edita en Shopify.') }
          ]
        },
        cola: {
          perguntas: [L('O produto está incluído no canal Facebook e Instagram e não está arquivado?', '¿El producto está incluido en el canal Facebook e Instagram y no está archivado?'), L('Onde o cliente fez a edição?', '¿Dónde hizo la edición el cliente?')],
          conferir: [L('Shopify › Produtos › Canal de vendas › Facebook e Instagram.', 'Shopify › Productos › Canal de ventas › Facebook e Instagram.'), L('Gerenciador de Comércio › Catálogo › Fontes de dados.', 'Administrador de ventas › Catálogo › Orígenes de datos.')],
          frase: L('Com a Shopify conectada, os produtos são editados na Shopify e sincronizam em alguns minutos. Edições feitas no Gerenciador de Comércio são substituídas.', 'Con Shopify conectada, los productos se editan en Shopify y se sincronizan en unos minutos. Las ediciones hechas en el Administrador de ventas se reemplazan.'),
          passos: [L('Edite o produto na Shopify.', 'Edita el producto en Shopify.'), L('Confira a sincronização em Fontes de dados.', 'Revisa la sincronización en Orígenes de datos.')],
          encaminhar: L('Se o produto não sincroniza mesmo incluído, siga a aula de problemas comuns e a ajuda da Shopify.', 'Si el producto no se sincroniza aun incluido, sigue la clase de problemas comunes y la ayuda de Shopify.')
        }
      },
      {
        id: '05', min: 8, status: 'pronta',
        titulo: L('Problemas comuns Shopify e Meta', 'Problemas comunes Shopify y Meta'),
        antes: L('Seis clientes da Marina, seis queixas diferentes.', 'Seis clientes de Marina, seis quejas distintas.'),
        gancho: L('Quase sempre a resposta está em “quem gerencia o quê”.', 'Casi siempre la respuesta está en “quién gestiona qué”.'),
        objetivo: L('Triar as queixas mais comuns e indicar onde olhar primeiro.', 'Clasificar las quejas más comunes e indicar dónde mirar primero.'),
        entender: {
          dialogo: [
            ['marina', L('Os produtos não aparecem no Gerenciador de Comércio. 😩', 'Los productos no aparecen en el Administrador de ventas. 😩')],
            ['rafa', L('Na Shopify, veja se eles estão incluídos no canal Facebook e Instagram (filtre por Excluídos) e se não foram arquivados. Confira também se a loja não tem senha e se o plano é básico ou superior.', 'En Shopify, mira si están incluidos en el canal Facebook e Instagram (filtra por Excluidos) y si no fueron archivados. Revisa también si la tienda no tiene contraseña y si el plan es básico o superior.')],
            ['marina', L('E as compras em dobro?', '¿Y las compras duplicadas?')],
            ['rafa', L('Use só o canal Facebook e Instagram para enviar eventos e tire o Pixel de outros lugares da Shopify: apps, código do tema (theme.liquid) e o Gerenciador de tags do Google.', 'Usa solo el canal Facebook e Instagram para enviar eventos y saca el píxel de otros lugares de Shopify: apps, código del tema (theme.liquid) y el Administrador de etiquetas de Google.')],
            ['pixel', L('Desconto que não aparece, prazo errado e pedidos faltando seguem a mesma lógica: desconto, pedidos e perfis de envio são da Shopify; processamento e transporte, do app. Pedidos novos não têm mais gerenciamento no Gerenciador de Comércio.', 'Descuento que no aparece, plazo equivocado y pedidos faltantes siguen la misma lógica: descuento, pedidos y perfiles de envío son de Shopify; procesamiento y transporte, de la app. Los pedidos nuevos ya no tienen gestión en el Administrador de ventas.')]
          ],
          pontos: [
            L('<b>Sem produtos:</b> canal Facebook e Instagram, arquivados, senha, plano.', '<b>Sin productos:</b> canal Facebook e Instagram, archivados, contraseña, plan.'),
            L('<b>Compras em dobro:</b> só o canal oficial envia o Pixel.', '<b>Compras duplicadas:</b> solo el canal oficial envía el píxel.'),
            L('<b>Desconto, pedido, envio:</b> Shopify; processamento e transporte: app.', '<b>Descuento, pedido, envío:</b> Shopify; procesamiento y transporte: app.')
          ],
          notas: NOTA
        },
        ferramenta: 'problemas-shop',
        praticar: {
          texto: L('Dois problemas comuns. Escolha um e o Pixel te guia; faça os dois se quiser.', 'Dos problemas comunes. Elige uno y el Pixel te guía; haz los dos si quieres.'),
          opcoes: [
            { id: 'produtos', icone: '🏷️', pagina: 'admin-shopify.html', tour: 'produtos-sumidos', selo: L('mais comum', 'más común'),
              tit: L('Os produtos não aparecem na Meta', 'Los productos no aparecen en Meta'), txt: L('Filtrar na Shopify o que não está no canal e tornar disponível.', 'Filtrar en Shopify lo que no está en el canal y hacerlo disponible.') },
            { id: 'dobro', icone: '🔁', pagina: 'loja.html', tour: 'corrigir-duplicado',
              tit: L('As compras aparecem em dobro', 'Las compras aparecen duplicadas'), txt: L('Achar o código manual no tema e tirar, deixando só o canal.', 'Encontrar el código manual en el tema y quitarlo, dejando solo el canal.') }
          ]
        },
        atender: {
          cena: L('Meus pedidos sumiram do Gerenciador de Comércio! Perdi tudo! 😱', '¡Mis pedidos desaparecieron del Administrador de ventas! ¡Perdí todo! 😱'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Calma, nada se perdeu: os pedidos acontecem e são gerenciados na sua loja da Shopify. Com a finalização da compra no site, o gerenciamento de pedidos no Gerenciador de Comércio foi descontinuado para pedidos novos. É na Shopify que você vê e trata os pedidos.”', '“Calma, nada se perdió: los pedidos ocurren y se gestionan en tu tienda de Shopify. Con la finalización de compra en el sitio, la gestión de pedidos en el Administrador de ventas fue discontinuada para pedidos nuevos. Es en Shopify donde ves y tratas los pedidos.”'), fb: L('Isso! Tirou o susto e indicou o lugar.', '¡Eso! Quitaste el susto e indicaste el lugar.') },
            { certa: false, txt: L('“Sim, perdeu, sinto muito.”', '“Sí, se perdió, lo lamento.”'), fb: L('Não perdeu: está na Shopify.', 'No se perdió: está en Shopify.') },
            { certa: false, txt: L('“Reconecte a Shopify para recuperar.”', '“Reconecta Shopify para recuperar.”'), fb: L('Não é necessário.', 'No es necesario.') },
            { certa: false, txt: L('“A Meta apagou por política.”', '“Meta borró por política.”'), fb: L('Não é isso.', 'No es eso.') }
          ]
        },
        cola: {
          perguntas: [L('O que exatamente o cliente não vê: produtos, pedidos, descontos, prazos?', '¿Qué es exactamente lo que el cliente no ve: productos, pedidos, descuentos, plazos?'), L('Onde ele procurou?', '¿Dónde buscó?')],
          conferir: [FERR],
          frase: L('Vamos descobrir onde esse recurso é gerenciado: Shopify, app Facebook e Instagram ou Gerenciador de Comércio, e conferir lá.', 'Descubramos dónde se gestiona esa función: Shopify, app Facebook e Instagram o Administrador de ventas, y revisemos allí.'),
          passos: [L('Identifique o recurso.', 'Identifica la función.'), L('Confira no lugar certo.', 'Revisa en el lugar correcto.')],
          encaminhar: L('Se tudo estiver certo e ainda houver problema, oriente o cliente a falar com o suporte da Shopify e o da Meta, cada um na sua parte.', 'Si todo está correcto y aún hay problema, orienta al cliente a hablar con la asistencia de Shopify y la de Meta, cada una en su parte.')
        }
      }
    ];
  })(),
  'pixel-avancado': (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Central de Ajuda da Meta para Empresas lida em português em 16/10/2026: “Sobre a correspondência avançada na web”, “Sobre a qualidade da correspondência de eventos”, “Sobre a desduplicação de eventos do Pixel da Meta e da API de Conversões”, “Requisitos de privacidade e uso de dados para as Ferramentas da Meta para Empresas” e “Comparar as opções de configuração da API de Conversões”. A conta de aula não tem conjunto de dados, então as telas reais de correspondência avançada, qualidade da correspondência de eventos e Eventos de teste não foram vistas: a prática recria essas telas com o site da Lojinha da Marina, e a pontuação e os textos de aviso são do treino (a conferir).', 'Centro de ayuda de Meta para Empresas leído en portugués el 16/10/2026: “Acerca de la coincidencia avanzada en la web”, “Acerca de la calidad de la coincidencia de eventos”, “Acerca de la deduplicación de eventos del píxel de Meta y de la API de Conversiones”, “Requisitos de privacidad y uso de datos para las Herramientas de Meta para Empresas” y “Comparar las opciones de configuración de la API de Conversiones”. La cuenta de clase no tiene conjunto de datos, así que las pantallas reales de coincidencia avanzada, calidad de coincidencia de eventos y Probar eventos no se vieron: la práctica recrea esas pantallas con el sitio de la Lojinha de Marina, y la puntuación y los textos de aviso son del entrenamiento (por confirmar).');
    var FERR = L('Gerenciador de Eventos › seu Pixel › Visão geral, Eventos de teste e Diagnóstico.', 'Administrador de eventos › tu píxel › Descripción general, Probar eventos y Diagnóstico.');
    return [
      {
        id: '01', min: 8, status: 'pronta',
        titulo: L('Correspondência avançada', 'Coincidencia avanzada'),
        antes: L('A Marina quer atribuir mais conversões sem gastar mais com anúncio.', 'Marina quiere atribuir más conversiones sin gastar más en anuncios.'),
        gancho: L('Dá para a Meta reconhecer melhor quem comprou. A chave é o dado do cliente, protegido por hash.', 'Se puede lograr que Meta reconozca mejor quién compró. La clave es el dato del cliente, protegido por hash.'),
        objetivo: L('Entender a correspondência avançada, as versões automática e manual e quando cada uma se aplica.', 'Entender la coincidencia avanzada, las versiones automática y manual y cuándo se aplica cada una.'),
        entender: {
          dialogo: [
            ['marina', L('O que é correspondência avançada? 🤔', '¿Qué es la coincidencia avanzada? 🤔')],
            ['rafa', L('É enviar à Meta informações de clientes convertidas em hash, junto com os eventos do Pixel. Isso pode atribuir mais conversões, aumentar o tamanho do público personalizado e diminuir o custo por conversão.', 'Es enviar a Meta información de clientes convertida en hash, junto con los eventos del píxel. Eso puede atribuir más conversiones, aumentar el tamaño del público personalizado y disminuir el costo por conversión.')],
            ['marina', L('Preciso programar?', '¿Necesito programar?')],
            ['rafa', L('A automática não precisa de código: ativa no Gerenciador de Eventos, e o Pixel procura campos de formulário reconhecíveis e faz o hash no navegador do visitante. A manual pede mudar o código base do Pixel para passar a entrada do visitante, por exemplo o e-mail.', 'La automática no necesita código: se activa en el Administrador de eventos, y el píxel busca campos de formulario reconocibles y hace el hash en el navegador del visitante. La manual pide cambiar el código base del píxel para pasar la entrada del visitante, por ejemplo el correo.')],
            ['pixel', L('Atenção: empresas em verticais restritas (bancos, empréstimos, serviços financeiros, seguros, farmacêuticos e saúde) ou com Pixel em iframe ou Pixel de imagem podem não ter a automática. Nesses casos, use a manual. E depois do hash e da correspondência, a Meta descarta o dado.', 'Atención: las empresas en verticales restringidas (bancos, préstamos, servicios financieros, seguros, farmacéuticos y salud) o con píxel en iframe o píxel de imagen pueden no tener la automática. En esos casos, usa la manual. Y después del hash y de la coincidencia, Meta descarta el dato.')]
          ],
          pontos: [
            L('<b>Para quê:</b> mais conversões atribuídas, públicos maiores, custo por conversão menor.', '<b>Para qué:</b> más conversiones atribuidas, públicos más grandes, costo por conversión menor.'),
            L('<b>Automática:</b> sem código, ativa no Gerenciador de Eventos; <b>manual:</b> muda o código base.', '<b>Automática:</b> sin código, se activa en el Administrador de eventos; <b>manual:</b> cambia el código base.'),
            L('<b>Verticais restritas, iframe e Pixel de imagem:</b> sem automática; use a manual.', '<b>Verticales restringidas, iframe y píxel de imagen:</b> sin automática; usa la manual.')
          ],
          notas: NOTA
        },
        ferramenta: 'corr-pa',
        praticar: {
          texto: L('A cliente quer atribuir mais compras. Você faz uma compra de teste na Lojinha, vê no Gerenciador de Eventos que a Meta não recebeu dados do cliente, liga a correspondência avançada em Configurações e confere o resultado em Eventos de teste. O Pixel te guia.', 'La clienta quiere atribuir más compras. Haces una compra de prueba en la Lojinha, ves en el Administrador de eventos que Meta no recibió datos del cliente, activas la coincidencia avanzada en Configuración y compruebas el resultado en Probar eventos. El Pixel te guía.'),
          tour: 'correspondencia-avancada', pagina: 'loja.html'
        },
        atender: {
          cena: L('Quero mandar o e-mail dos meus clientes para a Meta. Isso é seguro? Vão ver meus dados? 😰', 'Quiero mandar el correo de mis clientes a Meta. ¿Es seguro? ¿Van a ver mis datos? 😰'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Na correspondência avançada, as informações do cliente são convertidas em hash no navegador antes de ir à Meta, que as usa para fazer a correspondência e depois as descarta. Você precisa ter base legal e consentimento para compartilhar, e não pode enviar informações proibidas. Vale conversar com a sua assessoria jurídica.”', '“En la coincidencia avanzada, la información del cliente se convierte en hash en el navegador antes de ir a Meta, que la usa para hacer la coincidencia y luego la descarta. Debes tener base legal y consentimiento para compartir, y no puedes enviar información prohibida. Conviene hablar con tu asesor jurídico.”'), fb: L('Isso! Explicou o hash, o descarte e a responsabilidade.', '¡Eso! Explicaste el hash, el descarte y la responsabilidad.') },
            { certa: false, txt: L('“Totalmente seguro, nada a considerar.”', '“Totalmente seguro, nada que considerar.”'), fb: L('Há responsabilidade e consentimento.', 'Hay responsabilidad y consentimiento.') },
            { certa: false, txt: L('“Envie o e-mail em texto aberto.”', '“Envía el correo en texto abierto.”'), fb: L('O dado é convertido em hash.', 'El dato se convierte en hash.') },
            { certa: false, txt: L('“Manda tudo: saúde, cartão…”', '“Manda todo: salud, tarjeta…”'), fb: L('Informações proibidas não podem ser enviadas.', 'La información prohibida no puede enviarse.') }
          ]
        },
        cola: {
          perguntas: [L('A empresa é de um setor restrito? O Pixel está em iframe?', '¿La empresa es de un sector restringido? ¿El píxel está en un iframe?'), L('O cliente tem consentimento para compartilhar o dado?', '¿El cliente tiene consentimiento para compartir el dato?')],
          conferir: [FERR],
          frase: L('A correspondência avançada manda à Meta dados do cliente com hash para atribuir mais conversões. Se for permitida, ativamos a automática; se não, usamos a manual.', 'La coincidencia avanzada manda a Meta datos del cliente con hash para atribuir más conversiones. Si está permitida, activamos la automática; si no, usamos la manual.'),
          passos: [L('Veja se a automática está disponível.', 'Mira si la automática está disponible.'), L('Se não, peça ao desenvolvedor a manual.', 'Si no, pide al desarrollador la manual.')],
          encaminhar: L('A correspondência manual exige mudar o código do site: oriente o cliente ou o desenvolvedor dele com a documentação da Meta.', 'La coincidencia manual exige cambiar el código del sitio: orienta al cliente o a su desarrollador con la documentación de Meta.')
        }
      },
      {
        id: '02', min: 8, status: 'pronta',
        titulo: L('Qualidade do sinal: correspondência de eventos', 'Calidad de la señal: coincidencia de eventos'),
        antes: L('A Marina vê uma pontuação baixa nos eventos de compra do servidor.', 'Marina ve una puntuación baja en los eventos de compra del servidor.'),
        gancho: L('De 0 a 10: quanto o evento do servidor ajuda a Meta a ligar a compra a uma pessoa.', 'De 0 a 10: cuánto ayuda el evento del servidor a Meta a vincular la compra con una persona.'),
        objetivo: L('Ler a pontuação de qualidade da correspondência de eventos e saber quais parâmetros mais ajudam.', 'Leer la puntuación de calidad de la coincidencia de eventos y saber qué parámetros ayudan más.'),
        entender: {
          dialogo: [
            ['marina', L('O que é essa pontuação de 0 a 10? 😕', '¿Qué es esa puntuación de 0 a 10? 😕')],
            ['rafa', L('É a qualidade da correspondência de eventos: indica o quanto as informações do cliente enviadas com o evento do servidor funcionam para ligar o evento a Contas Meta. Vale para eventos do site enviados pela API de Conversões.', 'Es la calidad de la coincidencia de eventos: indica cuánto funcionan las informaciones del cliente enviadas con el evento del servidor para vincular el evento con Cuentas Meta. Vale para eventos del sitio enviados por la API de Conversiones.')],
            ['marina', L('Como melhoro?', '¿Cómo mejoro?')],
            ['rafa', L('Enviando vários parâmetros de informações do cliente quando disponíveis. Os de prioridade alta são e-mail e identificação de clique; média, entre outros, telefone, país, data de nascimento e identificação externa; baixa, nome, sobrenome, cidade e CEP.', 'Enviando varios parámetros de información del cliente cuando estén disponibles. Los de prioridad alta son correo e identificación de clic; media, entre otros, teléfono, país, fecha de nacimiento e identificación externa; baja, nombre, apellido, ciudad y código postal.')],
            ['pixel', L('A pontuação usa os dados das últimas 48 horas, então eventos regulares mantêm a nota em dia. Uma qualidade maior ajuda a atribuir conversões, a veicular para quem tem mais chance de converter e pode baixar o custo por ação. Sempre respeitando os termos de dados.', 'La puntuación usa los datos de las últimas 48 horas, así que eventos regulares mantienen la nota al día. Una calidad mayor ayuda a atribuir conversiones, a entregar a quien tiene más probabilidad de convertir y puede bajar el costo por acción. Siempre respetando los términos de datos.')]
          ],
          pontos: [
            L('<b>Pontuação 0–10</b> para eventos do site enviados pela API de Conversões.', '<b>Puntuación 0–10</b> para eventos del sitio enviados por la API de Conversiones.'),
            L('<b>Prioridade alta:</b> e-mail e identificação de clique; envie vários parâmetros.', '<b>Prioridad alta:</b> correo e identificación de clic; envía varios parámetros.'),
            L('<b>48 horas:</b> a nota usa dados recentes; mande eventos com regularidade.', '<b>48 horas:</b> la nota usa datos recientes; manda eventos con regularidad.')
          ],
          notas: NOTA
        },
        ferramenta: 'emq-pa',
        praticar: {
          texto: L('O cliente usa a API de Conversões e a nota está baixa. Você faz uma compra de teste, olha o cartão de qualidade da correspondência de eventos na Visão geral, liga a correspondência avançada e vê a nota subir. O Pixel te guia.', 'El cliente usa la API de Conversiones y la nota está baja. Haces una compra de prueba, miras la tarjeta de calidad de la coincidencia de eventos en la Descripción general, activas la coincidencia avanzada y ves subir la nota. El Pixel te guía.'),
          tour: 'qualidade-sinal', pagina: 'loja.html'
        },
        atender: {
          cena: L('Minha pontuação é 3 de 10. Vocês estão me penalizando? Quero 10 agora! 😠', 'Mi puntuación es 3 de 10. ¿Me están penalizando? ¡Quiero 10 ya! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Não é punição: a pontuação mostra o quanto as informações do cliente enviadas com o evento ajudam a Meta a ligá-lo a uma pessoa. Para subir, envie mais parâmetros quando você os tiver, sobretudo e-mail e identificação de clique, que têm prioridade alta, e mantenha os eventos chegando com regularidade.”', '“No es un castigo: la puntuación muestra cuánto ayudan las informaciones del cliente enviadas con el evento a Meta a vincularlo con una persona. Para subir, envía más parámetros cuando los tengas, sobre todo correo e identificación de clic, que tienen prioridad alta, y mantén los eventos llegando con regularidad.”'), fb: L('Isso! Explicou o que é e como subir.', '¡Eso! Explicaste qué es y cómo subir.') },
            { certa: false, txt: L('“Pague mais para a Meta subir a nota.”', '“Paga más a Meta para que suba la nota.”'), fb: L('A nota não se compra.', 'La nota no se compra.') },
            { certa: false, txt: L('“Mande dados falsos para aumentar.”', '“Manda datos falsos para aumentar.”'), fb: L('Dados falsos pioram e violam os termos.', 'Los datos falsos empeoran y violan los términos.') },
            { certa: false, txt: L('“Ignore, não importa.”', '“Ignóralo, no importa.”'), fb: L('Ela influencia atribuição e veiculação.', 'Influye en la atribución y la entrega.') }
          ]
        },
        cola: {
          perguntas: [L('Quais informações do cliente já estão sendo enviadas com o evento?', '¿Qué informaciones del cliente ya se están enviando con el evento?'), L('Os eventos do servidor chegam todos os dias?', '¿Los eventos del servidor llegan todos los días?')],
          conferir: [L('Gerenciador de Eventos › Conjuntos de dados › Visão geral › qualidade da correspondência de eventos.', 'Administrador de eventos › Conjuntos de datos › Descripción general › calidad de la coincidencia de eventos.'), FERR],
          frase: L('A pontuação indica o quanto os dados do cliente enviados com o evento ajudam a Meta a ligá-lo a uma pessoa. Vamos ver quais parâmetros faltam e mandar os de prioridade alta.', 'La puntuación indica cuánto ayudan los datos del cliente enviados con el evento a Meta a vincularlo con una persona. Veamos qué parámetros faltan y mandemos los de prioridad alta.'),
          passos: [L('Veja as ações recomendadas no Gerenciador de Eventos.', 'Mira las acciones recomendadas en el Administrador de eventos.'), L('Envie mais parâmetros, respeitando os termos.', 'Envía más parámetros, respetando los términos.')],
          encaminhar: L('Incluir novos parâmetros no envio do servidor é com o desenvolvedor ou a plataforma do cliente.', 'Incluir nuevos parámetros en el envío del servidor es con el desarrollador o la plataforma del cliente.')
        }
      },
      {
        id: '03', min: 9, status: 'pronta',
        titulo: L('API de Conversões e deduplicação', 'API de Conversiones y deduplicación'),
        antes: L('A Marina ativou a API de Conversões e agora as compras aparecem em dobro.', 'Marina activó la API de Conversiones y ahora las compras aparecen duplicadas.'),
        gancho: L('Navegador e servidor contando a mesma compra: sem deduplicação, vira duas.', 'Navegador y servidor contando la misma compra: sin deduplicación, se vuelven dos.'),
        objetivo: L('Entender por que e quando desduplicar e como a Meta reconhece o mesmo evento.', 'Entender por qué y cuándo deduplicar y cómo reconoce Meta el mismo evento.'),
        entender: {
          dialogo: [
            ['marina', L('O Pixel e a API de Conversões mandam o mesmo evento. Por quê? 🤔', 'El píxel y la API de Conversiones mandan el mismo evento. ¿Por qué? 🤔')],
            ['rafa', L('O Pixel roda no navegador e pode ser bloqueado por configurações do navegador ou conexão; a API de Conversões envia do servidor e é mais resistente. Muita gente envia a compra pelos dois para não perder evento.', 'El píxel corre en el navegador y puede ser bloqueado por configuraciones del navegador o la conexión; la API de Conversiones envía desde el servidor y es más resistente. Mucha gente envía la compra por los dos para no perder eventos.')],
            ['marina', L('E aí conta em dobro?', '¿Y entonces cuenta doble?')],
            ['rafa', L('Só se não houver desduplicação. A Meta desduplica quando o event_name é igual e o event_id é idêntico nos dois, ou quando o event_name e o external_ID ou o fbp combinam. Se forem parecidos, vale o que chegou primeiro.', 'Solo si no hay deduplicación. Meta deduplica cuando el event_name es igual y el event_id es idéntico en los dos, o cuando el event_name y el external_ID o el fbp coinciden. Si son parecidos, vale el que llegó primero.')],
            ['pixel', L('Se você manda eventos diferentes de cada fonte (carrinho do navegador, compra do servidor), não precisa desduplicar. Parceiros como Shopify e WooCommerce costumam cuidar disso; na configuração manual, você adiciona event_name e event_id. Teste com Eventos de teste.', 'Si mandas eventos distintos de cada fuente (carrito del navegador, compra del servidor), no necesitas deduplicar. Socios como Shopify y WooCommerce suelen encargarse de eso; en la configuración manual, agregas event_name y event_id. Prueba con Probar eventos.')]
          ],
          pontos: [
            L('<b>Desduplicar</b> quando o mesmo evento vem do navegador e do servidor.', '<b>Deduplicar</b> cuando el mismo evento viene del navegador y del servidor.'),
            L('<b>Como:</b> mesmo event_name + mesmo event_id (ou external_ID/fbp).', '<b>Cómo:</b> mismo event_name + mismo event_id (o external_ID/fbp).'),
            L('<b>Teste</b> com Eventos de teste: recebido, desduplicado ou descartado.', '<b>Prueba</b> con Probar eventos: recibido, deduplicado o descartado.')
          ],
          notas: NOTA
        },
        ferramenta: 'dedup-pa',
        praticar: {
          texto: L('A compra aparece em dobro. Você faz a compra de teste, vê as duas fontes e o aviso no Diagnóstico, acha no código-fonte o Purchase sem eventID, corrige no arquivo do site (como o desenvolvedor) e confirma em Eventos de teste que ficou “Desduplicado”. O Pixel te guia.', 'La compra aparece doble. Haces la compra de prueba, ves las dos fuentes y el aviso en el Diagnóstico, encuentras en el código fuente el Purchase sin eventID, lo corriges en el archivo del sitio (como el desarrollador) y confirmas en Probar eventos que quedó “Deduplicado”. El Pixel te guía.'),
          tour: 'desduplicar-eventos', pagina: 'loja.html'
        },
        atender: {
          cena: L('Desde que ativei a API de Conversões, minhas vendas na Meta dobraram, mas no banco não mudou nada! 😡', '¡Desde que activé la API de Conversiones, mis ventas en Meta se duplicaron, pero en el banco no cambió nada! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Provavelmente as compras estão sendo contadas duas vezes, uma pelo Pixel e outra pelo servidor. A Meta desduplica quando o nome do evento e o event_id são idênticos nos dois (ou event_name com external_ID ou fbp). Vamos conferir o event_id e testar em Eventos de teste.”', '“Probablemente las compras se están contando dos veces, una por el píxel y otra por el servidor. Meta deduplica cuando el nombre del evento y el event_id son idénticos en los dos (o event_name con external_ID o fbp). Revisemos el event_id y probemos en Probar eventos.”'), fb: L('Isso! Causa provável e método.', '¡Eso! Causa probable y método.') },
            { certa: false, txt: L('“As vendas realmente dobraram.”', '“Las ventas realmente se duplicaron.”'), fb: L('Confira antes a duplicação.', 'Revisa antes la duplicación.') },
            { certa: false, txt: L('“Desligue a API de Conversões.”', '“Apaga la API de Conversiones.”'), fb: L('Ela ajuda; o ajuste é o event_id.', 'Ayuda; el ajuste es el event_id.') },
            { certa: false, txt: L('“Use event_id diferente em cada.”', '“Usa event_id distinto en cada una.”'), fb: L('Precisa ser idêntico.', 'Debe ser idéntico.') }
          ]
        },
        cola: {
          perguntas: [L('Que eventos vêm do navegador e quais do servidor?', '¿Qué eventos vienen del navegador y cuáles del servidor?'), L('O event_id é o mesmo nos dois?', '¿El event_id es el mismo en los dos?')],
          conferir: [FERR, L('Contagens de Compra no Gerenciador de Eventos × no banco de pedidos.', 'Conteos de Compra en el Administrador de eventos × en la base de pedidos.')],
          frase: L('Se o mesmo evento chega por navegador e por servidor, a Meta só conta uma vez quando o event_name e o event_id são idênticos. Vamos conferir isso nos seus eventos.', 'Si el mismo evento llega por navegador y por servidor, Meta solo cuenta una vez cuando el event_name y el event_id son idénticos. Revisemos eso en tus eventos.'),
          passos: [L('Veja os eventos e suas fontes.', 'Mira los eventos y sus fuentes.'), L('Garanta event_id idêntico e teste.', 'Asegura un event_id idéntico y prueba.')],
          encaminhar: L('Ajustar o event_id é com o desenvolvedor ou a plataforma do cliente: mostre o evento e o que precisa mudar.', 'Ajustar el event_id es con el desarrollador o la plataforma del cliente: muestra el evento y qué debe cambiar.')
        }
      },
      {
        id: '04', min: 8, status: 'pronta',
        titulo: L('Privacidade e regras', 'Privacidad y reglas'),
        antes: L('Uma cliente da Marina de clínica quer rastrear tudo, inclusive a doença de cada paciente.', 'Una clienta de Marina de una clínica quiere rastrear todo, incluida la enfermedad de cada paciente.'),
        gancho: L('Você é o responsável pelos dados que manda. E há coisas que nunca podem ir.', 'Tú eres el responsable de los datos que mandas. Y hay cosas que nunca pueden ir.'),
        objetivo: L('Explicar consentimento, informações proibidas, responsabilidade do anunciante e as consequências.', 'Explicar consentimiento, información prohibida, responsabilidad del anunciante y las consecuencias.'),
        entender: {
          dialogo: [
            ['marina', L('Posso mandar qualquer dado do cliente para a Meta? 😅', '¿Puedo mandar cualquier dato del cliente a Meta? 😅')],
            ['rafa', L('Não. Primeiro, é preciso base legal e consentimento antes de compartilhar. Em alguns lugares, como a União Europeia, é exigido consentimento informado para cookies. O Pixel não pode compartilhar dados até a pessoa aceitar, e a API de Conversões não deve enviar dados de quem não consentiu.', 'No. Primero, hace falta base legal y consentimiento antes de compartir. En algunos lugares, como la Unión Europea, se exige consentimiento informado para cookies. El píxel no puede compartir datos hasta que la persona acepte, y la API de Conversiones no debe enviar datos de quien no consintió.')],
            ['marina', L('E o que nunca pode ir?', '¿Y qué nunca puede ir?')],
            ['rafa', L('Informações proibidas: de saúde, financeiras e outras categorias sensíveis. Vale para todos os formatos, inclusive parâmetros de URL e eventos personalizados.', 'Información prohibida: de salud, financiera y otras categorías sensibles. Vale para todos los formatos, incluidos parámetros de URL y eventos personalizados.')],
            ['pixel', L('Os sistemas da Meta tentam bloquear o que detectam, mas não substituem os seus controles: você é o responsável. Descumprir pode gerar problemas de desempenho, restrições de dados e até suspensão das ferramentas, e a Meta pode auditar. Explique ao cliente, em linguagem simples, o que coleta e com quem compartilha.', 'Los sistemas de Meta intentan bloquear lo que detectan, pero no sustituyen tus controles: tú eres el responsable. Incumplir puede generar problemas de rendimiento, restricciones de datos e incluso suspensión de las herramientas, y Meta puede auditar. Explica al cliente, en lenguaje simple, qué recopila y con quién comparte.')]
          ],
          pontos: [
            L('<b>Consentimento antes</b> de compartilhar; Pixel e API respeitam a escolha da pessoa.', '<b>Consentimiento antes</b> de compartir; píxel y API respetan la elección de la persona.'),
            L('<b>Proibido:</b> saúde, financeiro e outros sensíveis, inclusive em URL e eventos personalizados.', '<b>Prohibido:</b> salud, financiero y otros sensibles, incluso en URL y eventos personalizados.'),
            L('<b>Você é o responsável;</b> descumprir pode restringir dados ou suspender as ferramentas.', '<b>Tú eres el responsable;</b> incumplir puede restringir datos o suspender las herramientas.')
          ],
          notas: NOTA
        },
        ferramenta: 'priv-pa',
        praticar: {
          texto: L('Há dois casos de privacidade. Escolha um e o Pixel te guia; faça os dois se quiser.', 'Hay dos casos de privacidad. Elige uno y el Pixel te guía; haz los dos si quieres.'),
          opcoes: [
            { id: 'sensivel', icone: '🩺', pagina: 'loja.html', tour: 'info-proibida', selo: L('mais comum', 'más común'),
              tit: L('Informação de saúde nos eventos', 'Información de salud en los eventos'), txt: L('A Meta bloqueou parâmetros: achar no Diagnóstico e no código-fonte e remover o que é proibido.', 'Meta bloqueó parámetros: encontrarlos en el Diagnóstico y en el código fuente y quitar lo prohibido.') },
            { id: 'consentimento', icone: '🍪', pagina: 'loja.html', tour: 'consentimento-pixel',
              tit: L('Pixel antes do aceite de cookies', 'Píxel antes de aceptar las cookies'), txt: L('Ver o Pixel disparando com o banner na tela e corrigir o código para esperar o aceite.', 'Ver el píxel disparándose con el banner en pantalla y corregir el código para esperar la aceptación.') }
          ]
        },
        atender: {
          cena: L('A Meta bloqueou parâmetros do meu Pixel! Ela quer me impedir de vender! 😡', '¡Meta bloqueó parámetros de mi píxel! ¡Quiere impedirme vender! 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Entendo o susto. A Meta bloqueia parâmetros que parecem conter informações que podem violar os Termos das Ferramentas Comerciais, como dados de saúde ou financeiros, inclusive em parâmetros de URL e eventos personalizados. Vamos analisar o que o site está enviando, remover o que for proibido e depois pedir o desbloqueio no Gerenciador de Eventos.”', '“Entiendo el susto. Meta bloquea parámetros que parecen contener información que puede infringir las Condiciones de las Herramientas Comerciales, como datos de salud o financieros, incluso en parámetros de URL y eventos personalizados. Analicemos qué está enviando el sitio, quitemos lo que sea prohibido y luego pidamos el desbloqueo en el Administrador de eventos.”'), fb: L('Isso! Explicou a causa e o caminho.', '¡Eso! Explicaste la causa y el camino.') },
            { certa: false, txt: L('“É perseguição, ignore.”', '“Es persecución, ignóralo.”'), fb: L('É por conformidade com os termos.', 'Es por cumplimiento de los términos.') },
            { certa: false, txt: L('“Envie os mesmos dados por outro caminho.”', '“Envía los mismos datos por otro camino.”'), fb: L('Isso viola os termos.', 'Eso viola los términos.') },
            { certa: false, txt: L('“Crie outro Pixel.”', '“Crea otro píxel.”'), fb: L('Não resolve a causa.', 'No resuelve la causa.') }
          ]
        },
        cola: {
          perguntas: [L('Que parâmetros foram bloqueados e o que eles continham?', '¿Qué parámetros fueron bloqueados y qué contenían?'), L('O site só dispara o Pixel depois do aceite de cookies?', '¿El sitio solo dispara el píxel después de aceptar las cookies?')],
          conferir: [L('Gerenciador de Eventos › Diagnóstico (parâmetros bloqueados).', 'Administrador de eventos › Diagnóstico (parámetros bloqueados).'), FERR],
          frase: L('A Meta bloqueia parâmetros que podem violar os termos. Vamos revisar o que o site envia, remover o proibido e confirmar que o Pixel só dispara com consentimento.', 'Meta bloquea parámetros que pueden infringir los términos. Revisemos qué envía el sitio, quitemos lo prohibido y confirmemos que el píxel solo se dispara con consentimiento.'),
          passos: [L('Liste o que o site envia.', 'Haz la lista de lo que envía el sitio.'), L('Remova informações proibidas e confira o consentimento.', 'Quita información prohibida y revisa el consentimiento.')],
          encaminhar: L('Questões legais são do jurídico do cliente: oriente-o a falar com a assessoria jurídica e não dê parecer.', 'Las cuestiones legales son del área jurídica del cliente: oriéntalo a hablar con su asesor jurídico y no des dictamen.')
        }
      }
    ];
  })(),
  'portfolio-avancado': (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Central de Ajuda da Meta para Empresas lida em português em 16/10/2026: “Sobre a verificação da empresa no Meta Business Suite”, “Como verificar sua empresa…”, “Por que não consigo iniciar a verificação da empresa…”, “Por que os documentos que enviei… não foram suficientes?”, “Quais documentos oficiais preciso carregar…”, “Como alterar as permissões de uma pessoa…”, “Como excluir o portfólio empresarial” e “Entenda por que você não consegue excluir seu portfólio empresarial”. Nenhum botão irreversível foi clicado na conta de aula (envio da verificação e exclusão ficaram só no simulador): as telas do simulador são do treino (a conferir).', 'Centro de ayuda de Meta para Empresas leído en portugués el 16/10/2026: “Acerca de la verificación de la empresa en Meta Business Suite”, “Cómo verificar tu empresa…”, “Por qué no puedo iniciar la verificación de la empresa…”, “¿Por qué los documentos que envié… no fueron suficientes?”, “¿Qué documentos oficiales debo subir…?”, “Cómo cambiar los permisos de una persona…”, “Cómo eliminar el portafolio comercial” y “Entiende por qué no puedes eliminar tu portafolio comercial”. Ningún botón irreversible se pulsó en la cuenta de clase (el envío de la verificación y la eliminación quedaron solo en el simulador): las pantallas del simulador son del entrenamiento (por confirmar).');
    var FERR = L('Configurações do portfólio › Central de Segurança, Pessoas e Informações da empresa.', 'Configuración del portafolio › Centro de seguridad, Personas e Información de la empresa.');
    return [
      {
        id: '01', min: 8, status: 'pronta',
        titulo: L('Verificação da empresa', 'Verificación de la empresa'),
        antes: L('A Marina quer liberar um recurso que pede “empresa verificada”.', 'Marina quiere liberar una función que pide “empresa verificada”.'),
        gancho: L('Prova de que a empresa existe e de que quem pede a representa.', 'Prueba de que la empresa existe y de que quien lo pide la representa.'),
        objetivo: L('Entender o que é a verificação da empresa, quem pode iniciá-la e os passos até a decisão.', 'Entender qué es la verificación de la empresa, quién puede iniciarla y los pasos hasta la decisión.'),
        entender: {
          dialogo: [
            ['marina', L('O que é verificar a empresa? É o selo azul? 🤔', '¿Qué es verificar la empresa? ¿Es la insignia azul? 🤔')],
            ['rafa', L('Não. É confirmar que o portfólio pertence a uma empresa legítima e que você é um representante autorizado. Não dá selo de verificado: isso é o Meta Verified, outra coisa.', 'No. Es confirmar que el portafolio pertenece a una empresa legítima y que eres un representante autorizado. No da insignia de verificado: eso es Meta Verified, otra cosa.')],
            ['marina', L('Quem faz e onde?', '¿Quién lo hace y dónde?')],
            ['rafa', L('Quem tem controle total do portfólio, na Central de Segurança, em Iniciar verificação. Você informa razão social, endereço, telefone e site (que precisa carregar e começar com https://), confirma a conexão por e-mail, telefone, SMS, WhatsApp ou domínio e conclui.', 'Quien tiene control total del portafolio, en el Centro de seguridad, en Iniciar verificación. Informas razón social, dirección, teléfono y sitio (que debe cargar y empezar por https://), confirmas la conexión por correo, teléfono, SMS, WhatsApp o dominio y concluyes.')],
            ['pixel', L('A decisão pode levar até 14 dias úteis. Nem toda empresa precisa ou pode verificar: pode aparecer “Não se qualifica para verificação”. E se você editar os dados depois, terá de verificar de novo.', 'La decisión puede tardar hasta 14 días hábiles. No toda empresa necesita o puede verificar: puede aparecer “No califica para verificación”. Y si editas los datos después, tendrás que verificar de nuevo.')]
          ],
          pontos: [
            L('<b>Não é selo:</b> verificar a empresa é diferente do Meta Verified.', '<b>No es insignia:</b> verificar la empresa es distinto de Meta Verified.'),
            L('<b>Controle total</b> do portfólio para iniciar; dados iguais ao registro oficial; site com https.', '<b>Control total</b> del portafolio para iniciar; datos iguales al registro oficial; sitio con https.'),
            L('<b>Prazo:</b> até 14 dias úteis; informação falsa pode levar a restrições.', '<b>Plazo:</b> hasta 14 días hábiles; la información falsa puede llevar a restricciones.')
          ],
          notas: NOTA
        },
        ferramenta: 'ver-pv',
        praticar: {
          texto: L('Nas Configurações do portfólio da Marina, você abre a Central de Segurança, inicia a verificação, preenche a razão social e o site com https, escolhe como confirmar a conexão e envia. O Pixel te guia, nas telas do portfólio.', 'En la Configuración del portafolio de Marina, abres el Centro de seguridad, inicias la verificación, completas la razón social y el sitio con https, eliges cómo confirmar la conexión y envías. El Pixel te guía, en las pantallas del portafolio.'),
          tour: 'verificar-empresa', pagina: 'meta-portfolio.html'
        },
        atender: {
          cena: L('Preciso verificar minha empresa para liberar um recurso, mas já tenho o selo azul no Instagram. Não basta? 😕', 'Necesito verificar mi empresa para liberar una función, pero ya tengo la insignia azul en Instagram. ¿No basta? 😕'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“São coisas diferentes: o selo azul é o Meta Verified; a verificação da empresa confirma que o portfólio pertence a uma empresa legítima e é exigida para alguns recursos. Quem tem controle total do portfólio inicia na Central de Segurança.”', '“Son cosas distintas: la insignia azul es Meta Verified; la verificación de la empresa confirma que el portafolio pertenece a una empresa legítima y se exige para algunas funciones. Quien tiene control total del portafolio inicia en el Centro de seguridad.”'), fb: L('Isso! Separou as duas coisas e disse quem inicia.', '¡Eso! Separaste las dos cosas y dijiste quién inicia.') },
            { certa: false, txt: L('“Sim, o selo azul já conta como verificação.”', '“Sí, la insignia azul ya cuenta como verificación.”'), fb: L('Não conta: são coisas diferentes.', 'No cuenta: son cosas distintas.') },
            { certa: false, txt: L('“Mande os dados de outra empresa que esteja verificada.”', '“Manda los datos de otra empresa que esté verificada.”'), fb: L('Informação falsa pode bloquear a verificação.', 'La información falsa puede bloquear la verificación.') },
            { certa: false, txt: L('“Pague uma taxa para acelerar.”', '“Paga una tarifa para acelerar.”'), fb: L('Não existe essa taxa.', 'No existe esa tarifa.') }
          ]
        },
        cola: {
          perguntas: [L('A pessoa tem controle total do portfólio?', '¿La persona tiene control total del portafolio?'), L('A Central de Segurança mostra Iniciar verificação ou Não se qualifica?', '¿El Centro de seguridad muestra Iniciar verificación o No califica?')],
          conferir: [FERR],
          frase: L('A verificação da empresa confirma que o portfólio é de uma empresa legítima e não dá selo azul. Quem tem controle total inicia na Central de Segurança, e a decisão leva até 14 dias úteis.', 'La verificación de la empresa confirma que el portafolio es de una empresa legítima y no da insignia azul. Quien tiene control total inicia en el Centro de seguridad, y la decisión tarda hasta 14 días hábiles.'),
          passos: [L('Veja se há Iniciar verificação.', 'Mira si hay Iniciar verificación.'), L('Confira se os dados são iguais ao registro oficial.', 'Revisa que los datos sean iguales al registro oficial.')],
          encaminhar: L('Se o portfólio não se qualifica ou o cliente não tem controle total, oriente o cliente a ver as instruções que a Meta enviar por e-mail ou notificação.', 'Si el portafolio no califica o el cliente no tiene control total, orienta al cliente a seguir las instrucciones que Meta envíe por correo o notificación.')
        }
      },
      {
        id: '02', min: 8, status: 'pronta',
        titulo: L('Verificação travada ou documentos recusados', 'Verificación trabada o documentos rechazados'),
        antes: L('A Marina recebeu o aviso de que o documento enviado não foi suficiente.', 'Marina recibió el aviso de que el documento enviado no fue suficiente.'),
        gancho: L('Quase sempre a causa é o documento ou o nome que não bate.', 'Casi siempre la causa es el documento o el nombre que no coincide.'),
        objetivo: L('Descobrir por que a verificação não inicia ou foi recusada e orientar o reenvio.', 'Descubrir por qué la verificación no inicia o fue rechazada y orientar el reenvío.'),
        entender: {
          dialogo: [
            ['marina', L('O botão Iniciar verificação está desativado. Por quê? 😕', 'El botón Iniciar verificación está desactivado. ¿Por qué? 😕')],
            ['rafa', L('Três causas: o portfólio pode não se qualificar no momento; se é desenvolvedor de apps, é preciso conectar um app ao portfólio antes; ou a pessoa não tem controle total.', 'Tres causas: el portafolio puede no calificar por ahora; si es desarrollador de apps, hay que conectar una app al portafolio antes; o la persona no tiene control total.')],
            ['marina', L('E se enviou e voltou recusado?', '¿Y si lo envió y volvió rechazado?')],
            ['rafa', L('Veja o motivo: tipo de documento não aceito, só o formulário de registro sem assinatura ou carimbo, idioma não aceito, arquivo ilegível, documento vencido, razão social, endereço ou telefone que não batem. Conta de serviços públicos só vale para endereço e telefone, nunca para a razão social.', 'Mira el motivo: tipo de documento no aceptado, solo el formulario de registro sin firma o sello, idioma no aceptado, archivo ilegible, documento vencido, razón social, dirección o teléfono que no coinciden. La factura de servicios públicos solo vale para dirección y teléfono, nunca para la razón social.')],
            ['pixel', L('Aceitos: contrato ou certificado social, inscrição ou licença, documento fiscal emitido pelo governo, extrato bancário. Cubra o CPF. Se pedirem mais informação e você não responder em uma semana, a verificação reinicia.', 'Aceptados: contrato o certificado social, inscripción o licencia, documento fiscal emitido por el gobierno, extracto bancario. Cubre el CPF. Si piden más información y no respondes en una semana, la verificación reinicia.')]
          ],
          pontos: [
            L('<b>Botão desativado:</b> não qualifica, falta app conectado (desenvolvedor) ou falta controle total.', '<b>Botón desactivado:</b> no califica, falta app conectada (desarrollador) o falta control total.'),
            L('<b>Recusa:</b> o nome, o endereço e o telefone do documento têm de bater com as Informações da empresa.', '<b>Rechazo:</b> el nombre, la dirección y el teléfono del documento deben coincidir con la Información de la empresa.'),
            L('<b>Conta de luz</b> só para endereço e telefone, não para razão social.', '<b>Factura de luz</b> solo para dirección y teléfono, no para razón social.')
          ],
          notas: NOTA
        },
        ferramenta: 'doc-pv',
        praticar: {
          texto: L('A verificação da Marina foi recusada. Na Central de Segurança você lê o motivo e reenvia um documento que comprove a razão social, conferindo nome, legibilidade, validade e dados pessoais. O Pixel te guia.', 'La verificación de Marina fue rechazada. En el Centro de seguridad lees el motivo y reenvías un documento que compruebe la razón social, revisando nombre, legibilidad, vigencia y datos personales. El Pixel te guía.'),
          tour: 'corrigir-documento', pagina: 'meta-portfolio.html'
        },
        atender: {
          cena: L('Enviei minha conta de luz e vocês recusaram! Ela tem meu endereço e o nome da minha loja! 😤', '¡Envié mi factura de luz y la rechazaron! ¡Tiene mi dirección y el nombre de mi tienda! 😤'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Entendo. Conta de serviços públicos só vale para comprovar endereço e telefone, não a razão social. Envie um documento oficial como o contrato social ou a licença da empresa, legível, vigente e com a razão social igual à das Informações da empresa. Cubra o CPF.”', '“Entiendo. La factura de servicios públicos solo vale para comprobar dirección y teléfono, no la razón social. Envía un documento oficial como el contrato social o la licencia de la empresa, legible, vigente y con la razón social igual a la de la Información de la empresa. Cubre el CPF.”'), fb: L('Isso! Explicou a causa e o que enviar.', '¡Eso! Explicaste la causa y qué enviar.') },
            { certa: false, txt: L('“Reenvie a mesma conta de luz até aceitar.”', '“Reenvía la misma factura de luz hasta que la acepten.”'), fb: L('Vai ser recusada de novo.', 'Será rechazada de nuevo.') },
            { certa: false, txt: L('“Altere o nome no documento.”', '“Cambia el nombre en el documento.”'), fb: L('Nunca altere documentos.', 'Nunca alteres documentos.') },
            { certa: false, txt: L('“Crie outra empresa.”', '“Crea otra empresa.”'), fb: L('Não resolve.', 'No resuelve.') }
          ]
        },
        cola: {
          perguntas: [L('Qual foi o motivo informado na recusa?', '¿Cuál fue el motivo informado en el rechazo?'), L('O nome e o endereço do documento são iguais aos das Informações da empresa?', '¿El nombre y la dirección del documento son iguales a los de la Información de la empresa?')],
          conferir: [FERR],
          frase: L('Vamos ver o motivo da recusa. Em geral é o tipo do documento ou um dado que não bate com as Informações da empresa. Envie um documento oficial legível e vigente.', 'Veamos el motivo del rechazo. En general es el tipo de documento o un dato que no coincide con la Información de la empresa. Envía un documento oficial legible y vigente.'),
          passos: [L('Leia o motivo no aviso.', 'Lee el motivo en el aviso.'), L('Corrija e reenvie em até uma semana.', 'Corrige y reenvía en hasta una semana.')],
          encaminhar: L('Se o documento não puder ser aceito no país do cliente, oriente-o a usar os canais de ajuda que a Meta indicar no aviso.', 'Si el documento no puede aceptarse en el país del cliente, oriéntalo a usar los canales de ayuda que Meta indique en el aviso.')
        }
      },
      {
        id: '03', min: 7, status: 'pronta',
        titulo: L('Permissões: quem pode o quê', 'Permisos: quién puede qué'),
        antes: L('A Marina deu controle total a um estagiário sem pensar.', 'Marina dio control total a un pasante sin pensarlo.'),
        gancho: L('Controle total é a chave do portfólio. Dê só o necessário.', 'El control total es la llave del portafolio. Da solo lo necesario.'),
        objetivo: L('Alterar ou remover o acesso de uma pessoa e entender por que alguns menus não aparecem.', 'Cambiar o quitar el acceso de una persona y entender por qué algunos menús no aparecen.'),
        entender: {
          dialogo: [
            ['marina', L('Não vejo o menu Pessoas. Sumiu? 🤔', 'No veo el menú Personas. ¿Desapareció? 🤔')],
            ['rafa', L('Provavelmente você não tem controle total do portfólio: só quem tem vê Pessoas e consegue mudar permissões, verificar a empresa ou excluir o portfólio.', 'Probablemente no tienes control total del portafolio: solo quien lo tiene ve Personas y puede cambiar permisos, verificar la empresa o eliminar el portafolio.')],
            ['marina', L('E como mudo o acesso de alguém?', '¿Y cómo cambio el acceso de alguien?')],
            ['rafa', L('Configurações › Pessoas › clique no nome › Gerenciar na linha do portfólio ou de um ativo › altere e Salvar, ou Remover acesso e confirme. A pessoa precisa já estar no portfólio.', 'Configuración › Personas › clic en el nombre › Administrar en la línea del portafolio o de un activo › cambia y Guardar, o Quitar acceso y confirma. La persona ya debe estar en el portafolio.')],
            ['pixel', L('Se uma agência parceira compartilhou um ativo com você, você só tem as permissões que ela atribuiu e talvez não possa dar controle total daquele ativo.', 'Si una agencia socia compartió un activo contigo, solo tienes los permisos que ella asignó y quizá no puedas dar control total de ese activo.')]
          ],
          pontos: [
            L('<b>Controle total</b> é o nível mais alto; só quem o tem vê Pessoas e muda permissões.', '<b>Control total</b> es el nivel más alto; solo quien lo tiene ve Personas y cambia permisos.'),
            L('<b>Caminho:</b> Configurações › Pessoas › nome › Gerenciar › Salvar (ou Remover acesso).', '<b>Camino:</b> Configuración › Personas › nombre › Administrar › Guardar (o Quitar acceso).'),
            L('<b>Ativo de parceiro:</b> vale o que o parceiro permitiu.', '<b>Activo de un socio:</b> vale lo que el socio permitió.')
          ],
          notas: NOTA
        },
        ferramenta: 'perm-pv',
        praticar: {
          texto: L('O estagiário Caio tem controle total. Em Pessoas, você abre os Detalhes dele e reduz o acesso para só anúncios. O Pixel te guia.', 'El pasante Caio tiene control total. En Personas, abres sus Detalles y reduces el acceso a solo anuncios. El Pixel te guía.'),
          tour: 'corrigir-permissao', pagina: 'meta-portfolio.html'
        },
        atender: {
          cena: L('Contratei uma agência e agora não consigo tirar o acesso de um funcionário a um ativo que ela compartilhou. O botão não deixa! 😤', 'Contraté una agencia y ahora no puedo quitar el acceso de un empleado a un activo que ella compartió. ¡El botón no me deja! 😤'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Quando um parceiro compartilha um ativo, você só tem as permissões específicas que ele atribuiu, e isso pode limitar o que você muda. Peça à agência para ajustar o acesso ou liberar a permissão necessária.”', '“Cuando un socio comparte un activo, solo tienes los permisos específicos que él asignó, y eso puede limitar lo que cambias. Pídele a la agencia que ajuste el acceso o libere el permiso necesario.”'), fb: L('Isso! Explicou a limitação e o caminho.', '¡Eso! Explicaste la limitación y el camino.') },
            { certa: false, txt: L('“Exclua o portfólio e comece de novo.”', '“Elimina el portafolio y empieza de nuevo.”'), fb: L('Exagerado e irreversível.', 'Exagerado e irreversible.') },
            { certa: false, txt: L('“Use a senha da agência para entrar.”', '“Usa la contraseña de la agencia para entrar.”'), fb: L('Nunca compartilhe nem peça senha.', 'Nunca compartas ni pidas contraseña.') },
            { certa: false, txt: L('“Ignore, não é importante.”', '“Ignóralo, no es importante.”'), fb: L('Acesso demais é risco.', 'Demasiado acceso es riesgo.') }
          ]
        },
        cola: {
          perguntas: [L('A pessoa tem controle total do portfólio?', '¿La persona tiene control total del portafolio?'), L('O ativo foi compartilhado por um parceiro?', '¿El activo fue compartido por un socio?')],
          conferir: [FERR],
          frase: L('Para mudar o acesso de alguém é preciso ter controle total do portfólio. Vamos em Configurações, Pessoas, e ajustamos só o que a pessoa precisa.', 'Para cambiar el acceso de alguien hay que tener control total del portafolio. Vamos a Configuración, Personas, y ajustamos solo lo que la persona necesita.'),
          passos: [L('Abra Pessoas e o nome.', 'Abre Personas y el nombre.'), L('Gerenciar, ajuste e Salvar.', 'Administrar, ajusta y Guardar.')],
          encaminhar: L('Se o cliente perdeu o acesso de controle total, oriente-o a pedir a quem ainda tem esse acesso que o devolva, e nunca peça senhas.', 'Si el cliente perdió el acceso de control total, oriéntalo a pedir a quien aún lo tiene que se lo devuelva, y nunca pidas contraseñas.')
        }
      },
      {
        id: '04', min: 8, status: 'pronta',
        titulo: L('Excluir o portfólio: o que impede e o que muda', 'Eliminar el portafolio: qué lo impide y qué cambia'),
        antes: L('Um cliente quer apagar o portfólio, mas aparece um erro.', 'Un cliente quiere borrar el portafolio, pero aparece un error.'),
        gancho: L('Excluir não tem volta. Antes de tudo, confirme se é isso mesmo que ele quer.', 'Eliminar no tiene vuelta. Antes de todo, confirma si es eso lo que realmente quiere.'),
        objetivo: L('Explicar o que a exclusão apaga, o que impede e como resolver cada bloqueio.', 'Explicar qué borra la eliminación, qué la impide y cómo resolver cada bloqueo.'),
        entender: {
          dialogo: [
            ['marina', L('Quero excluir o portfólio, mas dá erro. 😕', 'Quiero eliminar el portafolio, pero da error. 😕')],
            ['rafa', L('Antes: excluir é definitivo e apaga, entre outras coisas, grupos de origens de eventos, a biblioteca de ativos e projetos, e remove seu acesso a ativos de outras empresas. Fica pendente por 24 horas; depois não dá para reabrir. Se só quer parar de anunciar, desative as contas de anúncios.', 'Antes: eliminar es definitivo y borra, entre otras cosas, grupos de orígenes de eventos, la biblioteca de activos y proyectos, y quita tu acceso a activos de otras empresas. Queda pendiente por 24 horas; después no se puede reabrir. Si solo quieres dejar de anunciar, desactiva las cuentas publicitarias.')],
            ['marina', L('E o erro?', '¿Y el error?')],
            ['rafa', L('Vem de bloqueios: contas de anúncios com saldo devedor, formas de pagamento, apps conectados, usuários do sistema, conta profissional do Instagram, conta do WhatsApp Business com número, acesso personalizado a leads e rótulos de anúncios políticos nos EUA. Resolva um por um.', 'Viene de bloqueos: cuentas publicitarias con saldo deudor, formas de pago, apps conectadas, usuarios del sistema, cuenta profesional de Instagram, cuenta de WhatsApp Business con número, acceso personalizado a leads y etiquetas de anuncios políticos en EE. UU. Resuélvelos uno por uno.')],
            ['pixel', L('Cada Página precisa ficar com pelo menos uma pessoa com controle total, senão todos perdem o acesso. Só quem tem controle total exclui: Configurações › Informações da empresa › Excluir empresa permanentemente.', 'Cada página debe quedar con al menos una persona con control total, si no todos pierden el acceso. Solo quien tiene control total elimina: Configuración › Información de la empresa › Eliminar empresa permanentemente.')]
          ],
          pontos: [
            L('<b>Sem volta:</b> pendente por 24 horas e depois não reabre; desativar as contas de anúncios é a alternativa.', '<b>Sin vuelta:</b> pendiente por 24 horas y luego no se reabre; desactivar las cuentas publicitarias es la alternativa.'),
            L('<b>Bloqueios:</b> saldo, pagamento, apps, usuários do sistema, Instagram, WhatsApp, leads.', '<b>Bloqueos:</b> saldo, pago, apps, usuarios del sistema, Instagram, WhatsApp, leads.'),
            L('<b>Páginas:</b> cada uma com ao menos uma pessoa de controle total.', '<b>Páginas:</b> cada una con al menos una persona de control total.')
          ],
          notas: NOTA
        },
        ferramenta: 'excl-pv',
        praticar: {
          texto: L('A Marina quer excluir o portfólio. Em Informações da empresa, você abre a exclusão, resolve as pendências (pagamento, app e leads), confirma que entende que é definitivo e vê o que acontece. Nada é excluído de verdade. O Pixel te guia.', 'Marina quiere eliminar el portafolio. En Información de la empresa, abres la eliminación, resuelves los pendientes (pago, app y leads), confirmas que entiendes que es definitivo y ves qué pasa. Nada se elimina de verdad. El Pixel te guía.'),
          tour: 'excluir-portfolio', pagina: 'meta-portfolio.html'
        },
        atender: {
          cena: L('Quero excluir meu portfólio agora! Mas o botão dá erro, e eu só quero parar de pagar anúncio! 😤', '¡Quiero eliminar mi portafolio ahora! ¡Pero el botón da error, y yo solo quiero dejar de pagar anuncios! 😤'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Se o que você quer é parar de anunciar, não precisa excluir: pode desativar as contas de anúncios. Excluir o portfólio é definitivo e apaga itens como a biblioteca de ativos. Se mesmo assim quiser, o erro costuma vir de pendências como saldo, forma de pagamento ou apps conectados; vamos resolver cada uma.”', '“Si lo que quieres es dejar de anunciar, no necesitas eliminar: puedes desactivar las cuentas publicitarias. Eliminar el portafolio es definitivo y borra elementos como la biblioteca de activos. Si aun así quieres, el error suele venir de pendientes como saldo, forma de pago o apps conectadas; resolvamos cada una.”'), fb: L('Isso! Ofereceu a alternativa segura e o caminho.', '¡Eso! Ofreciste la alternativa segura y el camino.') },
            { certa: false, txt: L('“Vou excluir por você agora.”', '“Lo elimino por ti ahora.”'), fb: L('É irreversível: só o cliente, com controle total, decide e executa.', 'Es irreversible: solo el cliente, con control total, decide y ejecuta.') },
            { certa: false, txt: L('“Ignore o erro e clique de novo.”', '“Ignora el error y haz clic de nuevo.”'), fb: L('O erro mostra o bloqueio real.', 'El error muestra el bloqueo real.') },
            { certa: false, txt: L('“Basta tirar as Páginas.”', '“Basta quitar las páginas.”'), fb: L('Há outros bloqueios; e cada Página precisa ficar com alguém.', 'Hay otros bloqueos; y cada página debe quedar con alguien.') }
          ]
        },
        cola: {
          perguntas: [L('O cliente quer mesmo excluir ou só parar de anunciar?', '¿El cliente realmente quiere eliminar o solo dejar de anunciar?'), L('Qual bloqueio aparece: saldo, pagamento, apps, Instagram, WhatsApp, leads?', '¿Qué bloqueo aparece: saldo, pago, apps, Instagram, WhatsApp, leads?')],
          conferir: [FERR],
          frase: L('Excluir o portfólio é definitivo. Se a ideia é parar de anunciar, desativamos as contas de anúncios. Se quiser excluir mesmo, vamos resolver as pendências uma a uma.', 'Eliminar el portafolio es definitivo. Si la idea es dejar de anunciar, desactivamos las cuentas publicitarias. Si realmente quieres eliminar, resolvamos los pendientes uno a uno.'),
          passos: [L('Confirme a intenção do cliente.', 'Confirma la intención del cliente.'), L('Resolva cada bloqueio e deixe o cliente executar.', 'Resuelve cada bloqueo y deja que el cliente ejecute.')],
          encaminhar: L('Saldo devedor pode levar até duas semanas para processar: oriente o cliente a quitar e aguardar.', 'El saldo deudor puede tardar hasta dos semanas en procesarse: orienta al cliente a pagarlo y esperar.')
        }
      }
    ];
  })(),
  diagnostico: (function () {
    function L(pt, es) { return { pt: pt, es: es } }
    var PERG = L('O que você responde?', '¿Qué respondes?');
    var NOTA = L('Central de Ajuda da Meta para Empresas lida em português em 16/10/2026: “Como configurar e instalar o Pixel da Meta”, “Boas práticas para a configuração de eventos padrão com o Pixel da Meta”, “Como definir o valor e a moeda dos seus eventos padrão do Pixel da Meta”, “Como solucionar mensagens de erro e aviso do Pixel da Meta no Gerenciador de Eventos da Meta” e “O que fazer se o Pixel da Meta registrar menos eventos do site”. Central de Ajuda da Shopify (em inglês, 16/10/2026): “Facebook data sharing” e “Meta pixel”. A conta de aula não tem conjunto de dados nem loja Shopify: as telas de Eventos de teste, Diagnóstico, o editor de arquivos, o admin da Shopify e o código-fonte são recriações de treino feitas a partir dessas páginas (a conferir com as telas reais). O site do cliente é a própria Lojinha da Marina, de faz-de-conta.', 'Centro de ayuda de Meta para Empresas leído en portugués el 16/10/2026: “Cómo configurar e instalar el píxel de Meta”, “Prácticas recomendadas para la configuración de eventos estándar con el píxel de Meta”, “Cómo definir el valor y la moneda de tus eventos estándar del píxel de Meta”, “Cómo solucionar mensajes de error y aviso del píxel de Meta en el Administrador de eventos de Meta” y “Qué hacer si el píxel de Meta registra menos eventos del sitio”. Centro de ayuda de Shopify (en inglés, 16/10/2026): “Facebook data sharing” y “Meta pixel”. La cuenta de clase no tiene conjunto de datos ni tienda Shopify: las pantallas de Probar eventos, Diagnóstico, el editor de archivos, el admin de Shopify y el código fuente son recreaciones de práctica hechas a partir de esas páginas (por confirmar con las pantallas reales). El sitio del cliente es la propia Lojinha da Marina, de mentira.');
    var FERR = L('Loja do cliente › Consultor de Dados › Gerenciador de Eventos (Testar eventos e Diagnóstico) › Código-fonte da página › plataforma do cliente.', 'Tienda del cliente › Asesor de datos › Administrador de eventos (Probar eventos y Diagnóstico) › Código fuente de la página › plataforma del cliente.');
    return [
      {
        id: '01', min: 10, status: 'pronta',
        titulo: L('Método: investigar um caso (Purchase que não chega)', 'Método: investigar un caso (Purchase que no llega)'),
        reclamacao: [
          ['marina', L('Socorro! Eu vendo todo dia na loja, mas o Gerenciador de Eventos mostra zero compras. O Pixel quebrou?! 😫', '¡Socorro! Vendo todos los días en la tienda, pero el Administrador de eventos muestra cero compras. ¿Se rompió el píxel?! 😫')],
          ['rafa', L('Calma, Marina, vamos descobrir juntos. Vou fazer uma compra de teste no seu site, igual a uma cliente, e ver o que chega para a Meta.', 'Tranquila, Marina, vamos a descubrirlo juntos. Haré una compra de prueba en tu sitio, igual que una clienta, y veré qué le llega a Meta.')]
        ],
        antes: L('A Marina ouviu de uma cliente: “Vendo todo dia, mas o Gerenciador não mostra nenhuma compra”.', 'Marina oyó de una clienta: “Vendo todos los días, pero el Administrador no muestra ninguna compra”.'),
        gancho: L('Um sintoma, várias causas possíveis. O segredo é refazer o que o cliente faz e olhar as fontes na ordem certa.', 'Un síntoma, varias causas posibles. El secreto es rehacer lo que hace el cliente y mirar las fuentes en el orden correcto.'),
        objetivo: L('Reproduzir o caso numa compra de teste e investigar com o Consultor de Dados, Eventos de teste, Diagnóstico e o código-fonte.', 'Reproducir el caso en una compra de prueba e investigar con el Asesor de datos, Probar eventos, Diagnóstico y el código fuente.'),
        entender: {
          dialogo: [
            ['marina', L('Por onde eu começo quando o Purchase não chega? 😵', '¿Por dónde empiezo cuando el Purchase no llega? 😵')],
            ['rafa', L('Refaça o que o cliente faz: uma compra de teste no site dele. Depois olhe o que a Meta recebeu: no Consultor de Dados (a extensão), em Eventos de teste e na aba Diagnóstico do Gerenciador de Eventos. Por fim, olhe o código da página.', 'Rehaz lo que hace el cliente: una compra de prueba en su sitio. Después mira lo que recibió Meta: en el Asesor de datos (la extensión), en Probar eventos y en la pestaña Diagnóstico del Administrador de eventos. Por último, mira el código de la página.')],
            ['marina', L('E como eu olho o código?', '¿Y cómo miro el código?')],
            ['rafa', L('Abra o código-fonte da página (no navegador, “Exibir código-fonte da página”) e procure por fbq, que é o nome do código do Pixel. Se o código base está lá mas não há um fbq(\'track\', \'Purchase\'...) na página de pedido concluído, o evento nunca foi colocado.', 'Abre el código fuente de la página (en el navegador, “Ver código fuente de la página”) y busca fbq, que es el nombre del código del píxel. Si el código base está ahí pero no hay un fbq(\'track\', \'Purchase\'...) en la página de pedido completado, el evento nunca se colocó.')],
            ['pixel', L('Se PageView, ViewContent e AddToCart chegam, o pixel está vivo: o problema é só no Purchase. Pixels de apps de plataformas não aparecem no código-fonte: para esses, use o Consultor de Dados.', 'Si PageView, ViewContent y AddToCart llegan, el píxel está vivo: el problema es solo en el Purchase. Los píxeles de apps de plataformas no aparecen en el código fuente: para esos, usa el Asesor de datos.')]
          ],
          pontos: [
            L('<b>Refaça o caso:</b> uma compra de teste no site do cliente.', '<b>Rehaz el caso:</b> una compra de prueba en el sitio del cliente.'),
            L('<b>Fontes, em ordem:</b> Consultor de Dados, Eventos de teste, Diagnóstico, código-fonte (procure fbq).', '<b>Fuentes, en orden:</b> Asesor de datos, Probar eventos, Diagnóstico, código fuente (busca fbq).'),
            L('<b>Quais eventos chegam</b> mostram onde está o problema; feche com um teste.', '<b>Qué eventos llegan</b> muestra dónde está el problema; cierra con una prueba.')
          ],
          notas: NOTA
        },
        ferramenta: 'met-dg',
        praticar: { texto: L('Você vai fazer a compra de teste, olhar o Consultor de Dados, Eventos de teste, o Diagnóstico e o código-fonte, e fechar o diagnóstico. O Pixel te guia, e tudo acontece em telas que imitam as de verdade.', 'Vas a hacer la compra de prueba, mirar el Asesor de datos, Probar eventos, el Diagnóstico y el código fuente, y cerrar el diagnóstico. El Pixel te guía, y todo ocurre en pantallas que imitan las de verdad.'), tour: 'investigar-purchase', pagina: 'loja.html' },
        atender: {
          cena: L('Meu Pixel não funciona! Vendo todo dia e a Meta não mostra nada. Quero que vocês arrumem agora! 😠', '¡Mi píxel no funciona! Vendo todos los días y Meta no muestra nada. ¡Quiero que lo arreglen ya! 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Vamos descobrir onde está o problema. Faça uma compra de teste e vou ver o que a Meta recebe e o que o Diagnóstico diz. Se só a compra falta, provavelmente o código do evento de compra não está na página de pedido concluído, e aí a correção é do seu desenvolvedor. Depois confirmamos com outra compra de teste.”', '“Vamos a descubrir dónde está el problema. Haz una compra de prueba y veré lo que recibe Meta y lo que dice el Diagnóstico. Si solo falta la compra, probablemente el código del evento de compra no está en la página de pedido completado, y entonces la corrección es de tu desarrollador. Después confirmamos con otra compra de prueba.”'), fb: L('Isso! Método, expectativa e quem corrige.', '¡Eso! Método, expectativa y quién corrige.') },
            { certa: false, txt: L('“Crie um pixel novo.”', '“Crea un píxel nuevo.”'), fb: L('Antes de trocar qualquer coisa, descubra a causa.', 'Antes de cambiar nada, descubre la causa.') },
            { certa: false, txt: L('“É problema da Meta, aguarde.”', '“Es problema de Meta, espera.”'), fb: L('Quase sempre é configuração do lado do cliente; investigue.', 'Casi siempre es configuración del lado del cliente; investiga.') },
            { certa: false, txt: L('“Me passe a senha do site para eu mexer.”', '“Pásame la contraseña del sitio para que yo lo toque.”'), fb: L('Nunca peça senha: oriente o cliente ou o desenvolvedor.', 'Nunca pidas contraseña: orienta al cliente o a su desarrollador.') }
          ]
        },
        cola: {
          perguntas: [L('Quais eventos chegam em Eventos de teste (PageView, ViewContent, AddToCart, Purchase)?', '¿Qué eventos llegan en Probar eventos (PageView, ViewContent, AddToCart, Purchase)?'), L('O Diagnóstico mostra algum erro ou aviso?', '¿El Diagnóstico muestra algún error o aviso?'), L('O código da página tem o fbq do evento? O site usa plataforma ou código colado à mão?', '¿El código de la página tiene el fbq del evento? ¿El sitio usa plataforma o código pegado a mano?')],
          conferir: [FERR],
          frase: L('Vamos refazer a compra, ver o que chega e o que o Diagnóstico diz, e olhar o código. Quando acharmos a causa, eu te explico o ajuste e fazemos uma compra de teste para confirmar.', 'Rehagamos la compra, veamos qué llega y qué dice el Diagnóstico, y miremos el código. Cuando hallemos la causa, te explico el ajuste y hacemos una compra de prueba para confirmar.'),
          passos: [L('Peça uma compra de teste e o endereço da página de pedido concluído.', 'Pide una compra de prueba y la dirección de la página de pedido completado.'), L('Abra Eventos de teste e o Diagnóstico; procure fbq no código.', 'Abre Probar eventos y el Diagnóstico; busca fbq en el código.')],
          encaminhar: L('Se a correção for no código do site, oriente o cliente a passar o ajuste ao desenvolvedor dele.', 'Si la corrección es en el código del sitio, orienta al cliente a pasar el ajuste a su desarrollador.')
        }
      },
      {
        id: '02', min: 12, status: 'pronta',
        titulo: L('Pixel: colar o código à mão', 'Píxel: pegar el código a mano'),
        reclamacao: [
          ['marina', L('Meu site novo não tem nenhum app da Meta. O desenvolvedor sumiu e me disseram para “colar o código do Pixel”. Colar onde?? 😰', 'Mi sitio nuevo no tiene ninguna app de Meta. El desarrollador desapareció y me dijeron que “pegue el código del píxel”. ¿¿Pegar dónde?? 😰')],
          ['rafa', L('Te mostro passo a passo: onde pegar o código, em que lugar do site ele vai e como a gente confirma no fim que está funcionando.', 'Te muestro paso a paso: dónde tomar el código, en qué lugar del sitio va y cómo confirmamos al final que funciona.')]
        ],
        antes: L('O site da cliente não tem integração pronta: o código vai na mão.', 'El sitio de la clienta no tiene integración lista: el código va a mano.'),
        gancho: L('Copiar do Gerenciador de Eventos, colar no lugar certo, salvar e testar.', 'Copiar del Administrador de eventos, pegar en el lugar correcto, guardar y probar.'),
        objetivo: L('Saber onde colar o código base e o do Purchase, com valor e moeda, e como orientar o cliente e o desenvolvedor.', 'Saber dónde pegar el código base y el del Purchase, con valor y moneda, y cómo orientar al cliente y al desarrollador.'),
        entender: {
          dialogo: [
            ['marina', L('Como se coloca o Pixel num site sem integração? 🤔', '¿Cómo se coloca el píxel en un sitio sin integración? 🤔')],
            ['rafa', L('São duas etapas: criar o pixel no Gerenciador de Eventos e colocar o código base no site; depois configurar os eventos, como a compra. No Gerenciador de Eventos, em Instalar o código manualmente, você copia o código e entrega a quem edita o site. Quando há integração de parceiro, dá para fazer por ela.', 'Son dos etapas: crear el píxel en el Administrador de eventos y poner el código base en el sitio; después configurar los eventos, como la compra. En el Administrador de eventos, en Instalar el código manualmente, copias el código y se lo das a quien edita el sitio. Cuando hay integración de socio, se puede hacer por ella.')],
            ['marina', L('Onde exatamente vai cada código?', '¿Dónde exactamente va cada código?')],
            ['rafa', L('O código base vai na seção head de cada página; ele já envia o PageView. O código do evento (por exemplo, Purchase) vai só na página que indica a ação, como o pedido concluído, depois do código base. O valor e a moeda padrão do código do evento são 0.00 e USD: troque pelo valor real do pedido (número com ponto decimal) e pela moeda de 3 letras, como BRL.', 'El código base va en la sección head de cada página; ya envía el PageView. El código del evento (por ejemplo, Purchase) va solo en la página que indica la acción, como el pedido completado, después del código base. El valor y la moneda por defecto del código del evento son 0.00 y USD: cámbialos por el valor real del pedido (número con punto decimal) y la moneda de 3 letras, como BRL.')],
            ['pixel', L('Cuidado: os nomes dos eventos diferenciam maiúsculas e minúsculas: fbq(\'track\', \'purchase\') cria um evento personalizado chamado purchase, que não é o Purchase padrão. E o único código da Meta no cabeçalho deve ser o código base. Depois de salvar, sempre teste.', 'Cuidado: los nombres de los eventos distinguen mayúsculas y minúsculas: fbq(\'track\', \'purchase\') crea un evento personalizado llamado purchase, que no es el Purchase estándar. Y el único código de Meta en el encabezado debe ser el código base. Después de guardar, prueba siempre.')]
          ],
          pontos: [
            L('<b>Código base:</b> copie no Gerenciador de Eventos e cole no head de TODAS as páginas.', '<b>Código base:</b> copia en el Administrador de eventos y pega en el head de TODAS las páginas.'),
            L('<b>Evento Purchase:</b> só na página de pedido concluído, com value (ponto decimal) e currency (3 letras).', '<b>Evento Purchase:</b> solo en la página de pedido completado, con value (punto decimal) y currency (3 letras).'),
            L('<b>Salve e teste:</b> Eventos de teste; maiúsculas importam (Purchase, não purchase).', '<b>Guarda y prueba:</b> Probar eventos; las mayúsculas importan (Purchase, no purchase).')
          ],
          notas: NOTA
        },
        ferramenta: 'cod-dg',
        praticar: {
          texto: L('Faça as duas partes: o código base (para o PageView) e o código do Purchase. Você copia do Gerenciador de Eventos, cola no editor de arquivos do site (o que o desenvolvedor faria), salva e testa.', 'Haz las dos partes: el código base (para el PageView) y el código del Purchase. Copias del Administrador de eventos, pegas en el editor de archivos del sitio (lo que haría el desarrollador), guardas y pruebas.'),
          opcoes: [
            { id: 'base', icone: '🧩', pagina: 'meta-eventos.html', tour: 'colar-codigo-base', selo: L('comece por aqui', 'empieza aquí'), tit: L('Colar o código base', 'Pegar el código base'), txt: L('Site novo sem Pixel: copie, cole no head, salve e veja o PageView chegar.', 'Sitio nuevo sin píxel: copia, pega en el head, guarda y mira llegar el PageView.') },
            { id: 'compra', icone: '🛒', pagina: 'meta-eventos.html', tour: 'colar-codigo-compra', tit: L('Colar o código do Purchase', 'Pegar el código del Purchase'), txt: L('Cole o evento só na página de pedido concluído, troque valor e moeda e teste com uma compra.', 'Pega el evento solo en la página de pedido completado, cambia valor y moneda y prueba con una compra.') }
          ]
        },
        atender: {
          cena: L('Meu desenvolvedor colou o código do Pixel só na página inicial. Está certo? E tenho que colar o Purchase em todas as páginas? 🤷', 'Mi desarrollador pegó el código del píxel solo en la página de inicio. ¿Está bien? ¿Y tengo que pegar el Purchase en todas las páginas? 🤷'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“O código base precisa estar na seção head de todas as páginas, não só na inicial. Já o código do Purchase vai só na página que indica a compra, o pedido concluído, com o valor e a moeda. Peça ao seu desenvolvedor para ajustar e depois testamos com uma compra.”', '“El código base debe estar en la sección head de todas las páginas, no solo en la de inicio. En cambio, el código del Purchase va solo en la página que indica la compra, el pedido completado, con el valor y la moneda. Pídele a tu desarrollador que lo ajuste y luego probamos con una compra.”'), fb: L('Isso! Base em todas, evento só onde a ação acontece.', '¡Eso! Base en todas, evento solo donde ocurre la acción.') },
            { certa: false, txt: L('“Cole o Purchase também no cabeçalho de todas as páginas.”', '“Pega el Purchase también en el encabezado de todas las páginas.”'), fb: L('Isso gera compras duplicadas e avisos no Diagnóstico.', 'Eso genera compras duplicadas y avisos en el Diagnóstico.') },
            { certa: false, txt: L('“Só a página inicial basta.”', '“Solo la página de inicio basta.”'), fb: L('Sem o código base nas outras páginas, as ações lá não são medidas.', 'Sin el código base en las otras páginas, las acciones allí no se miden.') },
            { certa: false, txt: L('“Escreva value: R$ 99,90.”', '“Escribe value: R$ 99,90.”'), fb: L('O valor é só número com ponto decimal, e a moeda vai em currency.', 'El valor es solo número con punto decimal, y la moneda va en currency.') }
          ]
        },
        cola: {
          perguntas: [L('Onde está o código base: no head de todas as páginas?', '¿Dónde está el código base: en el head de todas las páginas?'), L('O Purchase está só na página de pedido concluído, com value e currency?', '¿El Purchase está solo en la página de pedido completado, con value y currency?')],
          conferir: [FERR],
          frase: L('O código base vai no head de todas as páginas e o código da compra vai só na página de pedido concluído, com valor e moeda. Seu desenvolvedor faz o ajuste e nós confirmamos com uma compra de teste.', 'El código base va en el head de todas las páginas y el código de la compra va solo en la página de pedido completado, con valor y moneda. Tu desarrollador hace el ajuste y lo confirmamos con una compra de prueba.'),
          passos: [L('Peça o código da página de pedido concluído (código-fonte).', 'Pide el código de la página de pedido completado (código fuente).'), L('Compare com o formato do Gerenciador de Eventos.', 'Compara con el formato del Administrador de eventos.')],
          encaminhar: L('Mexer no código do site é com o cliente ou o desenvolvedor dele: explique o ajuste e nunca peça senha.', 'Tocar el código del sitio es con el cliente o su desarrollador: explica el ajuste y nunca pidas contraseña.')
        }
      },
      {
        id: '03', min: 12, status: 'pronta',
        titulo: L('Pixel: compras em dobro e valor errado', 'Píxel: compras dobles y valor incorrecto'),
        reclamacao: [
          ['marina', L('As vendas no Gerenciador estão o dobro do que entrou no caixa… e o valor aparece estranho! Estou pagando anúncio olhando número errado? 😡', 'Las ventas en el Administrador son el doble de lo que entró en caja… ¡y el valor aparece raro! ¿Estoy pagando anuncios mirando un número equivocado? 😡')],
          ['rafa', L('Pode ser a compra contada duas vezes ou o valor enviado no formato errado. Vamos refazer uma compra e ver exatamente o que a Meta recebe.', 'Puede ser la compra contada dos veces o el valor enviado en el formato incorrecto. Rehagamos una compra y veamos exactamente qué recibe Meta.')]
        ],
        antes: L('Dois clientes da Marina com o mesmo tipo de problema: o dobro de vendas e o valor zerado.', 'Dos clientes de Marina con el mismo tipo de problema: el doble de ventas y el valor en cero.'),
        gancho: L('Dois casos fora da rota padrão, cada um com sua causa, sua tela e sua solução.', 'Dos casos fuera de la ruta estándar, cada uno con su causa, su pantalla y su solución.'),
        objetivo: L('Reconhecer o Purchase duplicado (pixel em dois lugares) e o valor errado (formato do value e da moeda) e orientar a correção.', 'Reconocer el Purchase duplicado (píxel en dos lugares) y el valor incorrecto (formato del value y de la moneda) y orientar la corrección.'),
        entender: {
          dialogo: [
            ['marina', L('Cliente diz que as vendas dobraram, mas o banco não mudou. 🤨', 'Un cliente dice que las ventas se duplicaron, pero el banco no cambió. 🤨')],
            ['rafa', L('Veja o Diagnóstico: “Vários eventos em uma ação” aparece quando o pixel manda mais de um evento para uma única ação do visitante, e “Eventos de compra redundantes” aparece com quatro ou mais compras para uma só. A causa comum é o Purchase em mais de um lugar: cabeçalho do tema, página de pedido concluído e app da plataforma.', 'Mira el Diagnóstico: “Varios eventos en una acción” aparece cuando el píxel manda más de un evento para una sola acción del visitante, y “Eventos de compra redundantes” aparece con cuatro o más compras para una sola. La causa común es el Purchase en más de un lugar: encabezado del tema, página de pedido completado y app de la plataforma.')],
            ['marina', L('E em lojas de plataforma, como a Shopify?', '¿Y en tiendas de plataforma, como Shopify?')],
            ['rafa', L('A Shopify orienta: se havia código do Pixel no tema, remova-o depois de configurar pelo app Facebook e Instagram, senão a loja fica com mais de um pixel. O caminho: Loja virtual › tema atual › ⋯ › Editar código › theme.liquid › apagar o código do Pixel entre head e /head › Salvar.', 'Shopify indica: si había código del píxel en el tema, quítalo después de configurar por la app Facebook e Instagram, si no la tienda queda con más de un píxel. El camino: Tienda online › tema actual › ⋯ › Editar código › theme.liquid › borrar el código del píxel entre head y /head › Guardar.')],
            ['pixel', L('E valor errado? O Diagnóstico avisa “Preço ausente ou inválido no parâmetro de valor” e/ou moeda inválida. O value precisa ser número decimal com ponto, sem letras, símbolos de moeda nem vírgulas, e o currency precisa ter 3 letras (BRL, USD).', '¿Y valor incorrecto? El Diagnóstico avisa “Precio ausente o inválido en el parámetro de valor” y/o moneda inválida. El value debe ser número decimal con punto, sin letras, símbolos de moneda ni comas, y el currency debe tener 3 letras (BRL, USD).')]
          ],
          pontos: [
            L('<b>Duplicado:</b> Purchase em mais de um lugar. Deixe em um só (na plataforma, só o app) e teste.', '<b>Duplicado:</b> Purchase en más de un lugar. Déjalo en uno solo (en la plataforma, solo la app) y prueba.'),
            L('<b>Valor errado:</b> value numérico com ponto (99.90), currency de 3 letras (BRL).', '<b>Valor incorrecto:</b> value numérico con punto (99.90), currency de 3 letras (BRL).'),
            L('<b>O Diagnóstico</b> costuma dizer exatamente o que está errado: leia a mensagem.', '<b>El Diagnóstico</b> suele decir exactamente qué está mal: lee el mensaje.')
          ],
          notas: NOTA
        },
        ferramenta: 'dup-dg',
        praticar: {
          texto: L('Escolha um caso. O Pixel te guia pela investigação e pela correção, passando pela loja, pelo Gerenciador de Eventos, pelo código-fonte e pelo editor ou pelo admin da Shopify.', 'Elige un caso. El Pixel te guía por la investigación y la corrección, pasando por la tienda, el Administrador de eventos, el código fuente y el editor o el admin de Shopify.'),
          opcoes: [
            { id: 'duplicado', icone: '🔁', pagina: 'loja.html', tour: 'corrigir-duplicado', selo: L('mais comum', 'más común'), tit: L('Compras em dobro (Shopify)', 'Compras dobles (Shopify)'), txt: L('App conectado e código manual no tema: ache e remova o que duplica.', 'App conectada y código manual en el tema: halla y quita lo que duplica.') },
            { id: 'valor', icone: '💲', pagina: 'loja.html', tour: 'corrigir-valor', tit: L('Valor errado', 'Valor incorrecto'), txt: L('Compras com valor estranho: o que o Diagnóstico aponta e como corrigir.', 'Compras con valor raro: qué señala el Diagnóstico y cómo corregir.') }
          ]
        },
        atender: {
          cena: L('As vendas na Meta dobraram, mas no meu banco não mudou nada! Vocês estão inflando os números para eu gastar mais? 😡', '¡Las ventas en Meta se duplicaron, pero en mi banco no cambió nada! ¿Están inflando los números para que gaste más? 😡'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Entendo a preocupação. O mais provável é que a compra esteja sendo enviada mais de uma vez, por exemplo por um código manual no tema além do app. Vamos ver o Diagnóstico e o código para achar onde o Purchase está repetido, deixar em um só lugar e testar de novo.”', '“Entiendo la preocupación. Lo más probable es que la compra se esté enviando más de una vez, por ejemplo por un código manual en el tema además de la app. Veamos el Diagnóstico y el código para hallar dónde está repetido el Purchase, dejarlo en un solo lugar y probar de nuevo.”'), fb: L('Isso! Causa provável, método e correção.', '¡Eso! Causa probable, método y corrección.') },
            { certa: false, txt: L('“Suas vendas realmente dobraram.”', '“Tus ventas realmente se duplicaron.”'), fb: L('Confirme antes de afirmar: o banco não mudou.', 'Confirma antes de afirmar: el banco no cambió.') },
            { certa: false, txt: L('“É normal, a Meta sempre conta dobrado.”', '“Es normal, Meta siempre cuenta doble.”'), fb: L('Não é normal: é sinal de evento repetido.', 'No es normal: es señal de evento repetido.') },
            { certa: false, txt: L('“Apague o Pixel e crie outro.”', '“Borra el píxel y crea otro.”'), fb: L('Trocar de pixel não resolve o código repetido.', 'Cambiar de píxel no resuelve el código repetido.') }
          ]
        },
        cola: {
          perguntas: [L('Cada compra de teste mostra quantos Purchase? Em quais páginas?', '¿Cuántos Purchase muestra cada compra de prueba? ¿En qué páginas?'), L('Há Purchase no cabeçalho e também o app conectado?', '¿Hay Purchase en el encabezado y también la app conectada?'), L('O Diagnóstico mostra aviso de valor ou de moeda?', '¿El Diagnóstico muestra aviso de valor o de moneda?')],
          conferir: [FERR],
          frase: L('Se a compra chega mais de uma vez, vamos achar onde o Purchase está sendo enviado e deixar em um só lugar. Se chega com valor errado, vamos ajustar o valor e a moeda no formato que a Meta pede.', 'Si la compra llega más de una vez, vamos a hallar dónde se está enviando el Purchase y dejarlo en un solo lugar. Si llega con valor incorrecto, ajustaremos el valor y la moneda en el formato que pide Meta.'),
          passos: [L('Faça uma compra de teste e conte os eventos.', 'Haz una compra de prueba y cuenta los eventos.'), L('Leia a mensagem do Diagnóstico e o código.', 'Lee el mensaje del Diagnóstico y el código.')],
          encaminhar: L('Se o cliente quer corrigir a contagem de vendas antigas, oriente-o a olhar os relatórios com o período certo e a não esperar que o histórico mude.', 'Si el cliente quiere corregir el conteo de ventas antiguas, oriéntalo a mirar los informes con el período correcto y a no esperar que el historial cambie.')
        }
      },
      {
        id: '04', min: 10, status: 'pronta',
        titulo: L('Plataformas: conectada, mas a compra some', 'Plataformas: conectada, pero la compra desaparece'),
        reclamacao: [
          ['marina', L('Minha loja é Shopify e já está conectada com a Meta, mas tem compra que simplesmente não aparece. Se está conectado, por que some? 🤔', 'Mi tienda es Shopify y ya está conectada con Meta, pero hay compras que simplemente no aparecen. Si está conectado, ¿por qué desaparecen? 🤔')],
          ['rafa', L('Vamos testar como uma cliente que usa bloqueador de anúncios e conferir o nível de compartilhamento de dados na sua Shopify.', 'Probemos como una clienta que usa bloqueador de anuncios y revisemos el nivel de compartir datos en tu Shopify.')]
        ],
        antes: L('O cliente garante: “Já conectei a Shopify à Meta”, mas algumas compras não aparecem.', 'El cliente asegura: “Ya conecté Shopify a Meta”, pero algunas compras no aparecen.'),
        gancho: L('Conectado não quer dizer que tudo chega: o nível de compartilhamento de dados decide.', 'Conectado no quiere decir que todo llega: el nivel de compartir datos decide.'),
        objetivo: L('Investigar uma loja Shopify conectada cujas compras somem para quem usa bloqueador e escolher o nível de dados certo.', 'Investigar una tienda Shopify conectada cuyas compras desaparecen para quien usa bloqueador y elegir el nivel de datos correcto.'),
        entender: {
          dialogo: [
            ['marina', L('Já está conectado, por que faltam compras? 🤔', 'Ya está conectado, ¿por qué faltan compras? 🤔')],
            ['rafa', L('Na Shopify, no canal Facebook & Instagram › Compartilhamento de dados, a janela de preferências tem a chave Compartilhar dados e três opções. Conservador: só o Pixel da Meta, um cookie no navegador, que um bloqueador de anúncios pode impedir. Aprimorado e Máximo: Pixel, correspondência avançada e API de Conversões, que envia a compra de servidor para servidor, sem passar pelo bloqueador.', 'En Shopify, en el canal Facebook & Instagram › Compartir datos, la ventana de preferencias tiene el interruptor Compartir datos y tres opciones. Conservador: solo el píxel de Meta, una cookie en el navegador, que un bloqueador de anuncios puede impedir. Mejorado y Máximo: píxel, coincidencia avanzada y API de Conversiones, que envía la compra de servidor a servidor, sin pasar por el bloqueador.')],
            ['marina', L('Então é só escolher o Máximo?', '¿Entonces solo elijo el Máximo?')],
            ['rafa', L('Atenção: Avançado e Máximo compartilham dados pessoais do cliente (nome, local, e-mail, telefone) para a correspondência. Quem decide é o cliente: ele precisa entender e informar isso na política de privacidade. Explique a diferença antes de recomendar.', 'Atención: Avanzado y Máximo comparten datos personales del cliente (nombre, ubicación, correo, teléfono) para la coincidencia. Decide el cliente: debe entenderlo e informarlo en su política de privacidad. Explica la diferencia antes de recomendar.')],
            ['pixel', L('Outros pontos: o pixel conectado precisa ser o da conta de anúncios do cliente, e código do Pixel colado à mão no tema por cima do app duplica o evento. Confirme com a ajuda da própria plataforma antes de afirmar um passo exato.', 'Otros puntos: el píxel conectado debe ser el de la cuenta publicitaria del cliente, y el código del píxel pegado a mano en el tema encima de la app duplica el evento. Confirma con la ayuda de la propia plataforma antes de afirmar un paso exacto.')]
          ],
          pontos: [
            L('<b>Padrão:</b> só o pixel do navegador; bloqueadores de anúncios podem impedir.', '<b>Estándar:</b> solo el píxel del navegador; los bloqueadores de anuncios pueden impedir.'),
            L('<b>Avançado e Máximo:</b> pixel + API de Conversões (a compra vai de servidor a servidor), com mais dados pessoais compartilhados.', '<b>Avanzado y Máximo:</b> píxel + API de Conversiones (la compra va de servidor a servidor), con más datos personales compartidos.'),
            L('<b>Cuidado:</b> pixel certo, sem código manual por cima, e o cliente informado sobre a privacidade.', '<b>Cuidado:</b> píxel correcto, sin código manual encima, y el cliente informado sobre la privacidad.')
          ],
          notas: NOTA
        },
        ferramenta: 'plat-dg',
        praticar: { texto: L('Você investiga uma loja Shopify conectada em que as compras de quem usa bloqueador somem, e muda o nível de compartilhamento de dados no admin, como o cliente faria.', 'Investigas una tienda Shopify conectada en la que las compras de quien usa bloqueador desaparecen, y cambias el nivel de compartir datos en el admin, como lo haría el cliente.'), tour: 'plataforma-conectada', pagina: 'loja.html' },
        atender: {
          cena: L('Já está conectado com a Meta, mas faltam compras nos relatórios. Vocês me venderam uma coisa que não funciona! 😤', 'Ya está conectado con Meta, pero faltan compras en los informes. ¡Me vendieron algo que no funciona! 😤'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Conectado é o primeiro passo. Na preferência Conservador só o navegador envia, e quem usa bloqueador de anúncios pode não ser contado. As preferências Aprimorado e Máximo também enviam a compra pelo servidor, mas compartilham mais dados do cliente, então preciso que você decida isso e atualize a política de privacidade. Quer que eu te explique o caminho no admin?”', '“Conectado es el primer paso. En la preferencia Conservador solo envía el navegador, y quien usa bloqueador de anuncios puede no ser contado. Las preferencias Mejorado y Máximo también envían la compra por el servidor, pero comparten más datos del cliente, así que necesito que lo decidas y actualices la política de privacidad. ¿Quieres que te explique el camino en el admin?”'), fb: L('Isso! Explicou a causa, a solução e a decisão que é do cliente.', '¡Eso! Explicaste la causa, la solución y la decisión que es del cliente.') },
            { certa: false, txt: L('“Ative o Máximo, é sempre melhor.”', '“Activa el Máximo, siempre es mejor.”'), fb: L('Compartilha mais dados pessoais: o cliente decide e informa.', 'Comparte más datos personales: el cliente decide e informa.') },
            { certa: false, txt: L('“Cole este código do Purchase no seu tema.”', '“Pega este código del Purchase en tu tema.”'), fb: L('Por cima do app, isso duplica.', 'Encima de la app, esto duplica.') },
            { certa: false, txt: L('“Desconecte tudo e conecte de novo.”', '“Desconecta todo y conecta de nuevo.”'), fb: L('Antes de refazer, descubra o que está faltando.', 'Antes de rehacer, descubre qué falta.') }
          ]
        },
        cola: {
          perguntas: [L('Qual a preferência de compartilhamento de dados (Conservador, Aprimorado ou Máximo)?', '¿Cuál es la preferencia para compartir datos (Conservador, Mejorado o Máximo)?'), L('O pixel conectado é o da conta de anúncios do cliente?', '¿El píxel conectado es el de la cuenta publicitaria del cliente?'), L('Há código do Pixel colado à mão no tema ou um pixel personalizado (Eventos de clientes) além do app?', '¿Hay código del píxel pegado a mano en el tema o un píxel personalizado (Eventos de clientes) además de la app?')],
          conferir: [L('Shopify: Canais de vendas › Facebook e Instagram › Configurações › Compartilhamento de dados; Loja virtual › Temas › Editar código.', 'Shopify: Canales de venta › Facebook e Instagram › Configuración › Compartir datos; Tienda online › Temas › Editar código.'), FERR],
          frase: L('A integração está conectada; vamos conferir o nível de compartilhamento de dados, o pixel e se não há código duplicado. Depois fazemos uma compra de teste.', 'La integración está conectada; revisemos el nivel de compartir datos, el píxel y si no hay código duplicado. Después hacemos una compra de prueba.'),
          passos: [L('Veja o nível e o pixel conectado.', 'Mira el nivel y el píxel conectado.'), L('Explique a diferença de dados e deixe o cliente decidir; teste.', 'Explica la diferencia de datos y deja que el cliente decida; prueba.')],
          encaminhar: L('Opções específicas da plataforma e a política de privacidade da loja são do cliente e do suporte da própria plataforma: oriente-o a falar com eles.', 'Las opciones específicas de la plataforma y la política de privacidad de la tienda son del cliente y del soporte de la propia plataforma: oriéntalo a hablar con ellos.')
        }
      },
      {
        id: '05', min: 10, status: 'pronta',
        titulo: L('Pixel: quando os eventos caem', 'Píxel: cuando los eventos caen'),
        reclamacao: [
          ['marina', L('Troquei o tema do site ontem e hoje chegou um alerta de queda de eventos. Eu não mexi em nada da Meta! 😱', 'Cambié el tema del sitio ayer y hoy llegó una alerta de caída de eventos. ¡No toqué nada de Meta! 😱')],
          ['rafa', L('Troca de tema muitas vezes leva o código junto. Vou abrir a sua loja e conferir se o Pixel ainda está lá.', 'Un cambio de tema muchas veces se lleva el código. Voy a abrir tu tienda y revisar si el píxel sigue ahí.')]
        ],
        antes: L('Depois de uma atualização do site, o Gerenciador mandou um alerta.', 'Después de una actualización del sitio, el Administrador mandó una alerta.'),
        gancho: L('Do alerta à causa: o roteiro que a própria Central de Ajuda recomenda.', 'De la alerta a la causa: el guion que recomienda el propio Centro de ayuda.'),
        objetivo: L('Seguir os passos para investigar uma queda de eventos, reinstalar o código base e propor a prevenção.', 'Seguir los pasos para investigar una caída de eventos, reinstalar el código base y proponer la prevención.'),
        entender: {
          dialogo: [
            ['marina', L('Chegou um alerta de redução de eventos. O que faço? 😟', 'Llegó una alerta de reducción de eventos. ¿Qué hago? 😟')],
            ['rafa', L('A Meta avisa quando os eventos usados em campanhas ou públicos caem de forma considerável em relação à semana anterior e à média dos últimos sete dias. Os motivos comuns: problema no código base (ausente, apagado ou mal posicionado, muitas vezes depois de uma mudança), problema no código do evento, flutuação natural de tráfego, links quebrados, site fora do ar e lista de domínios permitidos ou bloqueados errada.', 'Meta avisa cuando los eventos usados en campañas o públicos caen de forma considerable respecto a la semana anterior y al promedio de los últimos siete días. Los motivos comunes: problema en el código base (ausente, borrado o mal ubicado, muchas veces después de un cambio), problema en el código del evento, fluctuación natural de tráfico, enlaces rotos, sitio caído y lista de dominios permitidos o bloqueados equivocada.')],
            ['marina', L('Qual é o roteiro?', '¿Cuál es el guion?')],
            ['rafa', L('Um: confirmar a redução (todos os eventos ou só alguns? compare com outra ferramenta de análise). Dois: conferir o código base no head de cada página, principalmente se o site foi atualizado: procure fbq no código-fonte. Três: testar em Eventos de teste e olhar o Diagnóstico. Quatro: links, site no ar e permissões de tráfego.', 'Uno: confirmar la reducción (¿todos los eventos o solo algunos? compara con otra herramienta de análisis). Dos: revisar el código base en el head de cada página, sobre todo si el sitio fue actualizado: busca fbq en el código fuente. Tres: probar en Probar eventos y mirar el Diagnóstico. Cuatro: enlaces, sitio en línea y permisos de tráfico.')],
            ['pixel', L('Para prevenir: monitore o Gerenciador regularmente, teste o pixel sempre que o site mudar e combine com o desenvolvedor de conferir o código base depois de cada atualização do cabeçalho.', 'Para prevenir: monitorea el Administrador con regularidad, prueba el píxel siempre que el sitio cambie y acuerda con el desarrollador revisar el código base después de cada actualización del encabezado.')]
          ],
          pontos: [
            L('<b>Confirme a queda</b> e se são todos os eventos ou só alguns.', '<b>Confirma la caída</b> y si son todos los eventos o solo algunos.'),
            L('<b>Código base no head</b> de cada página: costuma sumir em atualizações de tema. Procure fbq.', '<b>Código base en el head</b> de cada página: suele desaparecer en actualizaciones de tema. Busca fbq.'),
            L('<b>Teste e prevenção:</b> Eventos de teste, Diagnóstico e testar após cada mudança no site.', '<b>Prueba y prevención:</b> Probar eventos, Diagnóstico y probar después de cada cambio en el sitio.')
          ],
          notas: NOTA
        },
        ferramenta: 'queda-dg',
        praticar: { texto: L('Você investiga uma queda de eventos depois da troca de tema: olha a loja, Eventos de teste e o código-fonte, e reinstala o código base como o desenvolvedor faria.', 'Investigas una caída de eventos después del cambio de tema: miras la tienda, Probar eventos y el código fuente, y reinstalas el código base como lo haría el desarrollador.'), tour: 'caso-queda', pagina: 'loja.html' },
        atender: {
          cena: L('Desde que o site mudou de tema, minhas campanhas pararam de entregar direito e recebi um alerta. O que vocês fizeram? 😠', 'Desde que el sitio cambió de tema, mis campañas dejaron de entregar bien y recibí una alerta. ¿Qué hicieron ustedes? 😠'),
          pergunta: PERG,
          opcoes: [
            { certa: true, txt: L('“Não foi uma mudança nossa. A mudança de tema pode ter removido o código base do Pixel do cabeçalho, que é uma causa comum de queda de eventos. Vamos conferir em Eventos de teste se o PageView chega e, se não chegar, o seu desenvolvedor reinstala o código base no head de todas as páginas.”', '“No fue un cambio nuestro. El cambio de tema puede haber eliminado el código base del píxel del encabezado, que es una causa común de caída de eventos. Vamos a confirmar en Probar eventos si el PageView llega y, si no llega, tu desarrollador reinstala el código base en el head de todas las páginas.”'), fb: L('Isso! Explicou a causa provável e o teste.', '¡Eso! Explicaste la causa probable y la prueba.') },
            { certa: false, txt: L('“Espere uns dias, volta sozinho.”', '“Espera unos días, vuelve solo.”'), fb: L('Código base ausente não volta sozinho.', 'El código base ausente no vuelve solo.') },
            { certa: false, txt: L('“Troque a conta de anúncios.”', '“Cambia la cuenta publicitaria.”'), fb: L('A conta não é a causa.', 'La cuenta no es la causa.') },
            { certa: false, txt: L('“Crie campanhas novas.”', '“Crea campañas nuevas.”'), fb: L('Sem eventos chegando, as novas também não otimizam.', 'Sin eventos llegando, las nuevas tampoco optimizan.') }
          ]
        },
        cola: {
          perguntas: [L('A queda é em todos os eventos ou só em alguns?', '¿La caída es en todos los eventos o solo en algunos?'), L('O site foi atualizado ou mudou de tema recentemente?', '¿El sitio fue actualizado o cambió de tema recientemente?'), L('O PageView chega em Eventos de teste? Há fbq no código-fonte?', '¿El PageView llega en Probar eventos? ¿Hay fbq en el código fuente?')],
          conferir: [FERR],
          frase: L('Vamos seguir o roteiro da Central de Ajuda: confirmar a queda, conferir o código base no head de cada página, testar em Eventos de teste e olhar o Diagnóstico. Depois combinamos como prevenir.', 'Sigamos el guion del Centro de ayuda: confirmar la caída, revisar el código base en el head de cada página, probar en Probar eventos y mirar el Diagnóstico. Después acordamos cómo prevenir.'),
          passos: [L('Confirme a queda e quando começou.', 'Confirma la caída y cuándo empezó.'), L('Cruze com a data de mudança do site.', 'Cruza con la fecha de cambio del sitio.')],
          encaminhar: L('Se o site está fora do ar ou a hospedagem tem problema, oriente o cliente a falar com o desenvolvedor ou a hospedagem dele.', 'Si el sitio está caído o el hosting tiene un problema, orienta al cliente a hablar con su desarrollador o su hosting.')
        }
      }
    ];
  })()
};
/* Área Diagnóstico: os casos (escritos acima, em AULAS.diagnostico) são distribuídos pelos blocos da área. Os ids dos tutoriais não mudam. */
(function () {
  var D = window.AULAS.diagnostico; if (!D) return;
  var por = {}; D.forEach(function (a) { por[a.id] = a });   // pega todos antes de renumerar
  function caso(id, novo) { var a = por[id]; a.id = novo; return a }
  window.AULAS['dg-pixel'] = [caso('01', '01'), caso('02', '02'), caso('03', '03'), caso('05', '04')];
  window.AULAS['dg-integracoes'] = [caso('04', '01')];
  delete window.AULAS.diagnostico;
})();
/* Área Diagnóstico — casos novos (pesquisa de 17/10/2026, _roteiro/DIAGNOSTICO_PESQUISA.md): cada caso começa com a Marina reclamando,
   depois o tutorial guiado resolve nas telas de treino e confere que o problema sumiu. Os tutoriais vêm dos módulos (mesmo id) ou são próprios do Diagnóstico. */
(function () {
  var A = window.AULAS; if (!A) return;
  function L(pt, es) { return { pt: pt, es: es } }
  var PERG = L('O que você responde?', '¿Qué respondes?');
  var NOTA = L('Casos montados a partir da Central de Ajuda da Meta para Empresas, da Central de Ajuda da Shopify e das queixas mais repetidas em fóruns públicos (usados só para medir frequência), lidos em 17/10/2026. As telas são recriações de treino a partir dessas páginas (a conferir com as telas reais). A cliente é a Marina, da Lojinha da Marina, de faz-de-conta.', 'Casos armados a partir del Centro de ayuda de Meta para Empresas, del Centro de ayuda de Shopify y de las quejas más repetidas en foros públicos (usados solo para medir frecuencia), leídos el 17/10/2026. Las pantallas son recreaciones de práctica a partir de esas páginas (por confirmar con las pantallas reales). La clienta es Marina, de la Lojinha da Marina, de mentira.');
  function op(certa, txt, fb) { return { certa: certa, txt: txt, fb: fb } }
  function caso(o) { o.status = 'pronta'; o.entender.notas = NOTA; o.atender.pergunta = PERG; return o }
  function poe(bloco, lista) { A[bloco] = (A[bloco] || []).concat(lista) }

  /* ================= Pixel e eventos ================= */
  poe('dg-pixel', [
    caso({ id: '05', min: 10,
      titulo: L('API de Conversões: compras contadas duas vezes', 'API de Conversiones: compras contadas dos veces'),
      reclamacao: [
        ['marina', L('Liguei a tal API de Conversões, como vocês recomendaram, e agora cada venda aparece duas vezes no Gerenciador! Piorou! 😤', '¡Activé la famosa API de Conversiones, como ustedes recomendaron, y ahora cada venta aparece dos veces en el Administrador! ¡Empeoró! 😤')],
        ['rafa', L('A API não é o problema: ela precisa “combinar” com o Pixel. Vamos fazer uma compra e ver se os dois mandam o mesmo número de pedido.', 'La API no es el problema: debe “coincidir” con el píxel. Hagamos una compra y veamos si los dos mandan el mismo número de pedido.')]
      ],
      objetivo: L('Achar por que a compra conta em dobro com Pixel + API de Conversões (falta o event_id igual), corrigir e confirmar que a Meta desduplica.', 'Hallar por qué la compra cuenta doble con píxel + API de Conversiones (falta el event_id igual), corregir y confirmar que Meta deduplica.'),
      entender: {
        dialogo: [
          ['marina', L('Então a API manda a mesma compra que o Pixel?', '¿Entonces la API manda la misma compra que el píxel?')],
          ['rafa', L('Sim, de propósito: se o navegador falhar, o servidor garante. Para a Meta contar uma vez só, os dois precisam mandar o mesmo nome de evento e o mesmo event_id. Sem isso, ela vê duas compras.', 'Sí, a propósito: si el navegador falla, el servidor lo garantiza. Para que Meta cuente una sola vez, los dos deben mandar el mismo nombre de evento y el mismo event_id. Sin eso, ve dos compras.')],
          ['pixel', L('No Pixel, o eventID vai no último argumento do fbq. O servidor usa o mesmo número (o do pedido, por exemplo). Plataformas como a Shopify já fazem isso sozinhas.', 'En el píxel, el eventID va en el último argumento del fbq. El servidor usa el mismo número (el del pedido, por ejemplo). Plataformas como Shopify ya lo hacen solas.')]
        ],
        pontos: [
          L('<b>Sinal:</b> Purchase “Navegador e servidor” com 2 eventos para 1 compra, e aviso no Diagnóstico.', '<b>Señal:</b> Purchase “Navegador y servidor” con 2 eventos para 1 compra, y aviso en el Diagnóstico.'),
          L('<b>Causa:</b> event_id diferente (ou ausente) entre Pixel e servidor.', '<b>Causa:</b> event_id diferente (o ausente) entre píxel y servidor.'),
          L('<b>Prova:</b> nova compra de teste mostra um dos Purchase como “Desduplicado”.', '<b>Prueba:</b> una nueva compra de prueba muestra uno de los Purchase como “Deduplicado”.')
        ]
      },
      ferramenta: 'dedup-pa',
      praticar: { texto: L('Você faz a compra, lê a contagem e o Diagnóstico, acha o código sem eventID, corrige como o desenvolvedor e confere com uma nova compra.', 'Haces la compra, lees el conteo y el Diagnóstico, hallas el código sin eventID, corriges como el desarrollador y verificas con una nueva compra.'), tour: 'desduplicar-eventos', pagina: 'loja.html' },
      atender: {
        cena: L('Desde que liguei a API de Conversões, as vendas dobraram no Gerenciador. Desligo tudo?', 'Desde que activé la API de Conversiones, las ventas se duplicaron en el Administrador. ¿Apago todo?'),
        opcoes: [
          op(true, L('“Não precisa desligar. O Pixel e a API mandam a mesma compra; para a Meta contar uma vez, os dois precisam do mesmo event_id. Vamos pedir ao desenvolvedor para enviar o número do pedido nos dois e testar com uma compra.”', '“No hace falta apagar. El píxel y la API mandan la misma compra; para que Meta cuente una vez, los dos necesitan el mismo event_id. Pidamos al desarrollador que envíe el número del pedido en los dos y probemos con una compra.”'), L('Isso! Causa, correção e teste.', '¡Eso! Causa, corrección y prueba.')),
          op(false, L('“Desligue a API de Conversões.”', '“Apaga la API de Conversiones.”'), L('Resolve a contagem, mas perde a garantia do servidor. A correção é o event_id.', 'Resuelve el conteo, pero pierde la garantía del servidor. La corrección es el event_id.')),
          op(false, L('“É normal contar em dobro no começo.”', '“Es normal contar doble al principio.”'), L('Não é normal: é falta de desduplicação.', 'No es normal: es falta de deduplicación.')),
          op(false, L('“Crie outro Pixel só para a API.”', '“Crea otro píxel solo para la API.”'), L('Dois pixels só complicam. Os dois envios devem ir ao mesmo, com o mesmo event_id.', 'Dos píxeles solo complican. Los dos envíos deben ir al mismo, con el mismo event_id.'))
        ]
      },
      cola: {
        perguntas: [L('Uma compra aparece como 2 eventos “Navegador e servidor”?', '¿Una compra aparece como 2 eventos “Navegador y servidor”?'), L('O código do Purchase tem eventID?', '¿El código del Purchase tiene eventID?'), L('O servidor manda o mesmo número?', '¿El servidor manda el mismo número?')],
        conferir: [L('Gerenciador de Eventos › seu Pixel › Visão geral e Diagnóstico.', 'Administrador de eventos › tu píxel › Descripción general y Diagnóstico.')],
        frase: L('O Pixel e a API mandam a mesma compra de propósito; vamos fazer os dois enviarem o mesmo número de pedido para a Meta contar uma vez só.', 'El píxel y la API mandan la misma compra a propósito; haremos que los dos envíen el mismo número de pedido para que Meta cuente una sola vez.'),
        passos: [L('Compra de teste e contagem.', 'Compra de prueba y conteo.'), L('eventID igual nos dois envios.', 'eventID igual en los dos envíos.'), L('Nova compra: um aparece “Desduplicado”.', 'Nueva compra: uno aparece “Deduplicado”.')],
        encaminhar: L('Se a API foi ligada por um parceiro ou plataforma e o cliente não tem acesso ao código, oriente-o a pedir a correção a quem fez a integração.', 'Si la API la activó un socio o plataforma y el cliente no tiene acceso al código, oriéntalo a pedir la corrección a quien hizo la integración.')
      }
    }),
    caso({ id: '06', min: 10,
      titulo: L('Purchase em todas as páginas', 'Purchase en todas las páginas'),
      reclamacao: [
        ['marina', L('O Gerenciador diz que eu vendi muito mais do que vendi de verdade. Tem “compra” até de gente que só olhou a loja! 🤯', '¡El Administrador dice que vendí mucho más de lo que vendí de verdad! ¡Hay “compras” hasta de gente que solo miró la tienda! 🤯')],
        ['rafa', L('Isso tem cara de código no lugar errado. Vamos visitar a loja sem comprar e ver o que o Pixel manda.', 'Eso tiene cara de código en el lugar equivocado. Visitemos la tienda sin comprar y veamos qué manda el píxel.')]
      ],
      objetivo: L('Descobrir que o Purchase foi colado no cabeçalho (que entra em todas as páginas), mover para a página de pedido concluído e confirmar: uma compra = um Purchase.', 'Descubrir que el Purchase se pegó en el encabezado (que entra en todas las páginas), moverlo a la página de pedido completado y confirmar: una compra = un Purchase.'),
      entender: {
        dialogo: [
          ['marina', L('Mas por que uma visita vira compra?', '¿Pero por qué una visita se vuelve compra?')],
          ['rafa', L('O cabeçalho do site entra em TODAS as páginas. Quem colou o código do Purchase ali fez cada página aberta mandar uma “compra”. A Meta avisa no Diagnóstico: “Vários eventos em uma ação”.', 'El encabezado del sitio entra en TODAS las páginas. Quien pegó el código del Purchase ahí hizo que cada página abierta mande una “compra”. Meta avisa en el Diagnóstico: “Varios eventos en una acción”.')],
          ['pixel', L('A regra: no cabeçalho, só o código base (init e PageView). O Purchase vai só na página que confirma a compra, com valor e moeda.', 'La regla: en el encabezado, solo el código base (init y PageView). El Purchase va solo en la página que confirma la compra, con valor y moneda.')]
        ],
        pontos: [
          L('<b>Sinal:</b> Purchase chegando de páginas que não são de compra (e sem valor).', '<b>Señal:</b> Purchase llegando de páginas que no son de compra (y sin valor).'),
          L('<b>Causa:</b> código do Purchase no cabeçalho.', '<b>Causa:</b> código del Purchase en el encabezado.'),
          L('<b>Prova:</b> depois da correção, uma compra de teste = um Purchase, e o Diagnóstico fica limpo.', '<b>Prueba:</b> después de la corrección, una compra de prueba = un Purchase, y el Diagnóstico queda limpio.')
        ]
      },
      ferramenta: 'dup-dg',
      praticar: { texto: L('Você visita a loja sem comprar, vê o Purchase chegando, lê o Diagnóstico, acha o código no cabeçalho, move para a página certa e testa com uma compra.', 'Visitas la tienda sin comprar, ves el Purchase llegando, lees el Diagnóstico, hallas el código en el encabezado, lo mueves a la página correcta y pruebas con una compra.'), tour: 'purchase-cabecalho', pagina: 'loja.html' },
      atender: {
        cena: L('Meu Gerenciador mostra 40 vendas hoje, mas eu vendi 3. O que está acontecendo?', 'Mi Administrador muestra 40 ventas hoy, pero vendí 3. ¿Qué está pasando?'),
        opcoes: [
          op(true, L('“Parece que o código da compra está num lugar que aparece em todas as páginas, então cada visita conta como compra. Vamos conferir o Diagnóstico e o código: o Purchase deve ficar só na página de pedido concluído. Depois testamos com uma compra.”', '“Parece que el código de la compra está en un lugar que aparece en todas las páginas, entonces cada visita cuenta como compra. Revisemos el Diagnóstico y el código: el Purchase debe quedar solo en la página de pedido completado. Después probamos con una compra.”'), L('Isso! Causa, onde corrigir e como confirmar.', '¡Eso! Causa, dónde corregir y cómo confirmar.')),
          op(false, L('“A Meta estima vendas, é normal ser diferente.”', '“Meta estima ventas, es normal que sea diferente.”'), L('40 contra 3 não é estimativa: é código errado.', '40 contra 3 no es estimación: es código incorrecto.')),
          op(false, L('“Apague o Pixel do site.”', '“Borra el píxel del sitio.”'), L('O código base deve ficar. Só o Purchase muda de lugar.', 'El código base debe quedar. Solo el Purchase cambia de lugar.')),
          op(false, L('“Espere uns dias que estabiliza.”', '“Espera unos días que se estabiliza.”'), L('Não estabiliza: enquanto o código estiver no cabeçalho, cada visita vira compra.', 'No se estabiliza: mientras el código esté en el encabezado, cada visita se vuelve compra.'))
        ]
      },
      cola: {
        perguntas: [L('Uma visita sem compra já manda Purchase?', '¿Una visita sin compra ya manda Purchase?'), L('O Diagnóstico mostra “Vários eventos em uma ação”?', '¿El Diagnóstico muestra “Varios eventos en una acción”?'), L('Onde está o fbq(\'track\', \'Purchase\')?', '¿Dónde está el fbq(\'track\', \'Purchase\')?')],
        conferir: [L('Consultor de Dados, Gerenciador de Eventos (Testar eventos e Diagnóstico) e o código-fonte da página.', 'Asesor de datos, Administrador de eventos (Probar eventos y Diagnóstico) y el código fuente de la página.')],
        frase: L('O código da compra está num lugar que aparece em todas as páginas; vamos deixá-lo só na página de pedido concluído e testar.', 'El código de la compra está en un lugar que aparece en todas las páginas; lo dejaremos solo en la página de pedido completado y probaremos.'),
        passos: [L('Visita sem compra: há Purchase?', 'Visita sin compra: ¿hay Purchase?'), L('Tirar o Purchase do cabeçalho.', 'Quitar el Purchase del encabezado.'), L('Colocar na página de pedido concluído e testar.', 'Ponerlo en la página de pedido completado y probar.')],
        encaminhar: L('Se o cliente quer corrigir os números de dias passados, explique que o histórico não muda: vale a contagem a partir da correção.', 'Si el cliente quiere corregir los números de días pasados, explica que el historial no cambia: vale el conteo a partir de la corrección.')
      }
    })
  ]);

  /* ================= Anúncios ================= */
  poe('dg-anuncios', [
    caso({ id: '01', min: 10,
      titulo: L('Meus anúncios não estão rodando', 'Mis anuncios no están corriendo'),
      reclamacao: [
        ['marina', L('Paguei, criei tudo direitinho e os anúncios não rodam! Não aparece nada pra ninguém! 😩', '¡Pagué, creé todo bien y los anuncios no corren! ¡No le aparece nada a nadie! 😩')],
        ['rafa', L('Vamos pela ordem que a Meta recomenda: primeiro a conta, depois campanha, conjunto e anúncio, olhando a coluna Veiculação.', 'Vamos en el orden que Meta recomienda: primero la cuenta, después campaña, conjunto y anuncio, mirando la columna Entrega.')]
      ],
      objetivo: L('Ler a coluna Veiculação nos três níveis, achar o que está desligado ou em análise, usar o Histórico de atividades e religar o que parou.', 'Leer la columna Entrega en los tres niveles, hallar lo que está apagado o en revisión, usar el Historial de actividades y reactivar lo que se detuvo.'),
      entender: {
        dialogo: [
          ['marina', L('Mas a campanha aparece ativa!', '¡Pero la campaña aparece activa!')],
          ['rafa', L('A campanha pode estar ativa e algo dentro dela, não. A coluna Veiculação mostra um ícone por nível: erro, aviso, pendente, ativo ou inativo. O Histórico de atividades mostra quem mudou o quê e quando.', 'La campaña puede estar activa y algo dentro de ella, no. La columna Entrega muestra un ícono por nivel: error, aviso, pendiente, activo o inactivo. El Historial de actividades muestra quién cambió qué y cuándo.')],
          ['pixel', L('Cada status tem uma resposta: Desativado = religar; Em análise ou Programado = esperar; Rejeitado = corrigir o anúncio; limite de gastos da conta atingido = ajustar a cobrança.', 'Cada estado tiene una respuesta: Desactivado = reactivar; En revisión o Programado = esperar; Rechazado = corregir el anuncio; límite de gastos de la cuenta alcanzado = ajustar la facturación.')]
        ],
        pontos: [
          L('<b>Ordem:</b> conta › campanha › conjunto › anúncio.', '<b>Orden:</b> cuenta › campaña › conjunto › anuncio.'),
          L('<b>Ferramentas:</b> coluna Veiculação e Histórico de atividades.', '<b>Herramientas:</b> columna Entrega e Historial de actividades.'),
          L('<b>Prova:</b> o conjunto desligado volta a ficar ativo.', '<b>Prueba:</b> el conjunto apagado vuelve a quedar activo.')
        ]
      },
      ferramenta: 'nao-veicula-q',
      praticar: { texto: L('No Gerenciador de Anúncios de treino, você confere a conta, desce pelos níveis, lê os status, abre o Histórico de atividades e religa o conjunto desligado.', 'En el Administrador de anuncios de práctica, revisas la cuenta, bajas por los niveles, lees los estados, abres el Historial de actividades y reactivas el conjunto apagado.'), tour: 'nao-veicula', pagina: 'meta-entrega.html?problema=1' },
      atender: {
        cena: L('Meus anúncios estão ativos, mas não gastam nada e ninguém vê. Vocês estão me bloqueando?', 'Mis anuncios están activos, pero no gastan nada y nadie los ve. ¿Me están bloqueando?'),
        opcoes: [
          op(true, L('“Vamos conferir juntos: primeiro avisos da conta, depois o status em cada nível na coluna Veiculação. Às vezes a campanha está ativa, mas o conjunto está desligado ou o anúncio está em análise. O Histórico de atividades mostra o que mudou.”', '“Revisemos juntos: primero avisos de la cuenta, después el estado en cada nivel en la columna Entrega. A veces la campaña está activa, pero el conjunto está apagado o el anuncio está en revisión. El Historial de actividades muestra qué cambió.”'), L('Isso! Método em ordem, sem culpar ninguém.', '¡Eso! Método en orden, sin culpar a nadie.')),
          op(false, L('“Aumente o orçamento que ele começa a rodar.”', '“Aumenta el presupuesto y empieza a correr.”'), L('Mais orçamento não religa um conjunto desligado.', 'Más presupuesto no reactiva un conjunto apagado.')),
          op(false, L('“Crie a campanha de novo.”', '“Crea la campaña de nuevo.”'), L('Antes de refazer, ache a causa: pode ser só um interruptor.', 'Antes de rehacer, halla la causa: puede ser solo un interruptor.')),
          op(false, L('“É instabilidade da Meta, espere.”', '“Es inestabilidad de Meta, espera.”'), L('Sem conferir os status, não dá para afirmar isso.', 'Sin revisar los estados, no se puede afirmar eso.'))
        ]
      },
      cola: {
        perguntas: [L('Há aviso no topo da conta?', '¿Hay aviso arriba en la cuenta?'), L('Qual o status em cada nível?', '¿Cuál es el estado en cada nivel?'), L('O que mudou no Histórico de atividades?', '¿Qué cambió en el Historial de actividades?')],
        conferir: [L('Gerenciador de Anúncios › coluna Veiculação e Histórico de atividades.', 'Administrador de anuncios › columna Entrega e Historial de actividades.')],
        frase: L('Vamos olhar o status de cada nível para achar exatamente o que está segurando a veiculação.', 'Miremos el estado de cada nivel para hallar exactamente qué está frenando la entrega.'),
        passos: [L('Conta.', 'Cuenta.'), L('Campanha, conjunto, anúncio.', 'Campaña, conjunto, anuncio.'), L('Histórico e correção.', 'Historial y corrección.')],
        encaminhar: L('Se o anúncio foi rejeitado e o cliente discorda, oriente-o a pedir uma nova análise pelo próprio anúncio.', 'Si el anuncio fue rechazado y el cliente no está de acuerdo, oriéntalo a pedir una nueva revisión desde el propio anuncio.')
      }
    }),
    caso({ id: '02', min: 8,
      titulo: L('O botão Publicar não acende', 'El botón Publicar no se enciende'),
      reclamacao: [
        ['marina', L('Quero turbinar um post e o botão Publicar fica apagado! Já tentei mil vezes! 😫', '¡Quiero promocionar un post y el botón Publicar queda apagado! ¡Ya lo intenté mil veces! 😫')],
        ['rafa', L('Quando o Publicar não acende, a Meta mostra o motivo em avisos. Vamos ler de cima para baixo e resolver um de cada vez.', 'Cuando Publicar no se enciende, Meta muestra el motivo en avisos. Leamos de arriba hacia abajo y resolvamos uno a la vez.')]
      ],
      objetivo: L('Ler os avisos que bloqueiam a publicação (telefone, limite de gastos, saldo), resolver um por um e publicar.', 'Leer los avisos que bloquean la publicación (teléfono, límite de gastos, saldo), resolverlos uno por uno y publicar.'),
      entender: {
        dialogo: [
          ['marina', L('Mas nada diz “erro”…', 'Pero nada dice “error”…')],
          ['rafa', L('Os avisos ficam no topo e dentro do orçamento. Os mais comuns: telefone não verificado na conta, limite de gastos quase atingido e saldo que não cobre o valor.', 'Los avisos están arriba y dentro del presupuesto. Los más comunes: teléfono no verificado en la cuenta, límite de gastos casi alcanzado y saldo que no cubre el valor.')],
          ['pixel', L('Pagamento e limite são da cliente: o agente orienta onde fica, mas nunca paga nem mexe na cobrança por ela.', 'El pago y el límite son de la clienta: el agente orienta dónde está, pero nunca paga ni toca la facturación por ella.')]
        ],
        pontos: [
          L('<b>Sinal:</b> Publicar apagado e avisos na tela.', '<b>Señal:</b> Publicar apagado y avisos en la pantalla.'),
          L('<b>Método:</b> um bloqueio de cada vez, de cima para baixo.', '<b>Método:</b> un bloqueo a la vez, de arriba hacia abajo.'),
          L('<b>Prova:</b> o Publicar acende e o anúncio vai para análise.', '<b>Prueba:</b> Publicar se enciende y el anuncio pasa a revisión.')
        ]
      },
      ferramenta: 'o-que-bloqueia',
      praticar: { texto: L('No Turbinar de treino, você lê e resolve os três bloqueios e publica.', 'En Promocionar de práctica, lees y resuelves los tres bloqueos y publicas.'), tour: 'resolver-publicacao', pagina: 'meta-turbinar.html?zerar=1&problemas=1' },
      atender: {
        cena: L('O botão de publicar não funciona. O sistema de vocês está com defeito?', 'El botón de publicar no funciona. ¿El sistema de ustedes tiene un defecto?'),
        opcoes: [
          op(true, L('“Quando o Publicar fica apagado, a tela mostra o motivo em avisos. Vamos ler juntos: pode ser o telefone da conta, o limite de gastos ou o saldo. Resolvendo um por um, ele acende.”', '“Cuando Publicar queda apagado, la pantalla muestra el motivo en avisos. Leámoslos juntos: puede ser el teléfono de la cuenta, el límite de gastos o el saldo. Resolviendo uno por uno, se enciende.”'), L('Isso! Leitura dos avisos e ordem.', '¡Eso! Lectura de los avisos y orden.')),
          op(false, L('“Me passe os dados do cartão que eu resolvo.”', '“Pásame los datos de la tarjeta y lo resuelvo.”'), L('Nunca peça dados de pagamento: a cliente resolve na conta dela.', 'Nunca pidas datos de pago: la clienta lo resuelve en su cuenta.')),
          op(false, L('“Tente em outro navegador.”', '“Intenta en otro navegador.”'), L('Os avisos já dizem o motivo; não é o navegador.', 'Los avisos ya dicen el motivo; no es el navegador.')),
          op(false, L('“Use o Gerenciador de Anúncios em vez do Turbinar.”', '“Usa el Administrador de anuncios en lugar de Promocionar.”'), L('Os mesmos bloqueios valem lá também.', 'Los mismos bloqueos valen allí también.'))
        ]
      },
      cola: {
        perguntas: [L('Que avisos aparecem na tela?', '¿Qué avisos aparecen en la pantalla?'), L('O telefone da conta está verificado?', '¿El teléfono de la cuenta está verificado?'), L('Limite e saldo cobrem o valor?', '¿El límite y el saldo cubren el valor?')],
        conferir: [L('Turbinar › avisos do topo e do orçamento; configurações de cobrança da conta.', 'Promocionar › avisos de arriba y del presupuesto; configuración de facturación de la cuenta.')],
        frase: L('O botão fica apagado até os avisos serem resolvidos; vamos resolver um de cada vez.', 'El botón queda apagado hasta que se resuelvan los avisos; vamos a resolver uno a la vez.'),
        passos: [L('Telefone.', 'Teléfono.'), L('Limite de gastos.', 'Límite de gastos.'), L('Saldo e publicar.', 'Saldo y publicar.')],
        encaminhar: L('Se o problema for uma cobrança recusada ou contestada, oriente o cliente a falar com o banco e a conferir as configurações de cobrança da conta.', 'Si el problema es un cobro rechazado o disputado, orienta al cliente a hablar con su banco y a revisar la configuración de facturación de la cuenta.')
      }
    })
  ]);

  /* ================= Catálogo ================= */
  poe('dg-catalogo', [
    caso({ id: '01', min: 8,
      titulo: L('Produtos da Shopify que não aparecem na Meta', 'Productos de Shopify que no aparecen en Meta'),
      reclamacao: [
        ['marina', L('Cadastrei a Ecobag e o Boné na Shopify, mas no catálogo da Meta eles não existem! Sumiram! 😠', '¡Registré la Ecobag y la Gorra en Shopify, pero en el catálogo de Meta no existen! ¡Desaparecieron! 😠')],
        ['rafa', L('A Shopify só manda à Meta o que está disponível no canal Facebook e Instagram. Vamos conferir isso primeiro.', 'Shopify solo manda a Meta lo que está disponible en el canal Facebook e Instagram. Revisemos eso primero.')]
      ],
      objetivo: L('Filtrar os produtos indisponíveis no canal, tornar disponível o que deve ir à Meta e reconhecer o que não sincroniza (arquivado).', 'Filtrar los productos no disponibles en el canal, hacer disponible lo que debe ir a Meta y reconocer lo que no se sincroniza (archivado).'),
      entender: {
        dialogo: [
          ['marina', L('Mas o produto está na loja!', '¡Pero el producto está en la tienda!')],
          ['rafa', L('Estar na loja virtual não basta: cada produto escolhe em quais canais aparece. E produto arquivado não sincroniza nunca.', 'Estar en la tienda online no basta: cada producto elige en qué canales aparece. Y un producto archivado no se sincroniza nunca.')],
          ['pixel', L('Checklist: disponível no canal? arquivado? imagem e categoria preenchidas? loja sem senha e plano ativo?', 'Checklist: ¿disponible en el canal? ¿archivado? ¿imagen y categoría completas? ¿tienda sin contraseña y plan activo?')]
        ],
        pontos: [
          L('<b>Onde olhar:</b> admin da Shopify › Produtos › coluna Canais de vendas (filtro “Canal de vendas não é Facebook & Instagram”).', '<b>Dónde mirar:</b> admin de Shopify › Productos › columna Canales de venta (filtro “Canal de venta no es Facebook & Instagram”).'),
          L('<b>Correção:</b> selecionar › ⋯ › Incluir nos canais de vendas › Facebook & Instagram › Incluir produtos.', '<b>Corrección:</b> seleccionar › ⋯ › Incluir en los canales de venta › Facebook & Instagram › Incluir productos.'),
          L('<b>Prova:</b> o produto sai da lista de indisponíveis.', '<b>Prueba:</b> el producto sale de la lista de no disponibles.')
        ]
      },
      ferramenta: 'por-que-nao-aparece',
      praticar: { texto: L('No admin da Shopify de treino, você filtra os indisponíveis, adiciona o canal à Ecobag e descobre por que o Boné fica de fora.', 'En el admin de Shopify de práctica, filtras los no disponibles, agregas el canal a la Ecobag y descubres por qué la Gorra queda fuera.'), tour: 'produtos-sumidos', pagina: 'admin-shopify.html' },
      atender: {
        cena: L('Meus produtos novos não aparecem no catálogo da Meta. A integração quebrou?', 'Mis productos nuevos no aparecen en el catálogo de Meta. ¿Se rompió la integración?'),
        opcoes: [
          op(true, L('“Provavelmente não quebrou. Na Shopify, cada produto escolhe os canais. Vamos filtrar os que não estão disponíveis no Facebook e Instagram, adicionar o canal e conferir se algum está arquivado.”', '“Probablemente no se rompió. En Shopify, cada producto elige los canales. Filtremos los que no están disponibles en Facebook e Instagram, agreguemos el canal y revisemos si alguno está archivado.”'), L('Isso! Causa comum e caminho.', '¡Eso! Causa común y camino.')),
          op(false, L('“Desconecte e conecte a Shopify de novo.”', '“Desconecta y conecta Shopify de nuevo.”'), L('Reconectar não muda a disponibilidade do produto.', 'Reconectar no cambia la disponibilidad del producto.')),
          op(false, L('“Cadastre os produtos direto no Gerenciador de Comércio.”', '“Registra los productos directo en el Administrador de comercio.”'), L('Com a Shopify conectada, os produtos se editam na Shopify.', 'Con Shopify conectada, los productos se editan en Shopify.')),
          op(false, L('“Demora uma semana para sincronizar.”', '“Tarda una semana en sincronizar.”'), L('Depois de disponível, leva minutos, não semanas.', 'Una vez disponible, tarda minutos, no semanas.'))
        ]
      },
      cola: {
        perguntas: [L('O produto está disponível no canal Facebook e Instagram?', '¿El producto está disponible en el canal Facebook e Instagram?'), L('Está arquivado?', '¿Está archivado?'), L('Tem imagem e categoria?', '¿Tiene imagen y categoría?')],
        conferir: [L('Admin da Shopify › Produtos e o canal Facebook e Instagram.', 'Admin de Shopify › Productos y el canal Facebook e Instagram.')],
        frase: L('Na Shopify, cada produto escolhe onde aparece; vamos deixá-lo disponível no canal da Meta.', 'En Shopify, cada producto elige dónde aparece; vamos a dejarlo disponible en el canal de Meta.'),
        passos: [L('Filtrar indisponíveis.', 'Filtrar no disponibles.'), L('Adicionar o canal.', 'Agregar el canal.'), L('Conferir arquivados.', 'Revisar archivados.')],
        encaminhar: L('Se a dúvida for sobre o plano ou a senha da loja na Shopify, oriente o cliente a falar com o suporte da Shopify.', 'Si la duda es sobre el plan o la contraseña de la tienda en Shopify, orienta al cliente a hablar con el soporte de Shopify.')
      }
    }),
    caso({ id: '02', min: 10,
      titulo: L('Itens rejeitados no catálogo', 'Artículos rechazados en el catálogo'),
      reclamacao: [
        ['marina', L('O catálogo diz que tenho produtos com problema e alguns nem aparecem nos anúncios. Um deles foi “rejeitado”… é só um boné! 😤', '¡El catálogo dice que tengo productos con problemas y algunos ni aparecen en los anuncios! Uno fue “rechazado”… ¡es solo una gorra! 😤')],
        ['rafa', L('O catálogo tem uma área de Problemas que diz exatamente o que impede cada item. Vamos lá.', 'El catálogo tiene un área de Problemas que dice exactamente qué impide cada artículo. Vamos allá.')]
      ],
      objetivo: L('Ler a área de Problemas, separar erro de aviso, corrigir na fonte, atualizar e pedir outra análise quando a rejeição parecer engano.', 'Leer el área de Problemas, separar error de aviso, corregir en la fuente, actualizar y pedir otra revisión cuando el rechazo parezca un error.'),
      entender: {
        dialogo: [
          ['marina', L('Posso corrigir direto no catálogo?', '¿Puedo corregir directo en el catálogo?')],
          ['rafa', L('Depende de onde o item vem. Se vem de um arquivo de dados ou de uma plataforma, a correção é na fonte; senão, a próxima atualização desfaz.', 'Depende de dónde viene el artículo. Si viene de un archivo de datos o de una plataforma, la corrección es en la fuente; si no, la próxima actualización la deshace.')],
          ['pixel', L('Erro (vermelho) impede o item; aviso (amarelo) não impede. Rejeição por política que parece engano: Solicitar outra análise.', 'Error (rojo) impide el artículo; aviso (amarillo) no lo impide. Rechazo por política que parece un error: Solicitar otra revisión.')]
        ],
        pontos: [
          L('<b>Onde olhar:</b> Gerenciador de Comércio › catálogo › Problemas.', '<b>Dónde mirar:</b> Administrador de comercio › catálogo › Problemas.'),
          L('<b>Correção:</b> na fonte e depois Atualizar a fonte de dados.', '<b>Corrección:</b> en la fuente y después Actualizar la fuente de datos.'),
          L('<b>Prova:</b> nenhum erro impedindo itens.', '<b>Prueba:</b> ningún error impidiendo artículos.')
        ]
      },
      ferramenta: 'por-que-nao-aparece',
      praticar: { texto: L('No catálogo de treino, você lê os problemas, corrige a imagem na fonte, atualiza e pede outra análise para o Boné.', 'En el catálogo de práctica, lees los problemas, corriges la imagen en la fuente, actualizas y pides otra revisión para la Gorra.'), tour: 'catalogo-problemas', pagina: 'meta-catalogo.html?exemplo=1' },
      atender: {
        cena: L('Vocês rejeitaram meu boné! É um boné! Isso é perseguição?', '¡Rechazaron mi gorra! ¡Es una gorra! ¿Es persecución?'),
        opcoes: [
          op(true, L('“Entendo. A rejeição pode ser engano da análise automática: na área de Problemas do catálogo dá para Solicitar outra análise. E vamos ver os outros erros: se for imagem, a correção é no site e depois atualizamos a fonte.”', '“Entiendo. El rechazo puede ser un error del análisis automático: en el área de Problemas del catálogo se puede Solicitar otra revisión. Y veamos los otros errores: si es imagen, la corrección es en el sitio y después actualizamos la fuente.”'), L('Isso! Acolhe, explica e dá o caminho.', '¡Eso! Acoge, explica y da el camino.')),
          op(false, L('“Apague o produto e cadastre de novo.”', '“Borra el producto y regístralo de nuevo.”'), L('Recadastrar não muda a análise e perde o histórico.', 'Volver a registrar no cambia el análisis y pierde el historial.')),
          op(false, L('“Não dá para fazer nada.”', '“No se puede hacer nada.”'), L('Dá sim: pedir outra análise.', 'Sí se puede: pedir otra revisión.')),
          op(false, L('“Mude o nome para outra coisa.”', '“Cambia el nombre a otra cosa.”'), L('Disfarçar o produto vai contra as políticas.', 'Disfrazar el producto va contra las políticas.'))
        ]
      },
      cola: {
        perguntas: [L('É erro ou aviso?', '¿Es error o aviso?'), L('De onde vem o item (arquivo, plataforma, manual)?', '¿De dónde viene el artículo (archivo, plataforma, manual)?'), L('A rejeição parece engano?', '¿El rechazo parece un error?')],
        conferir: [L('Gerenciador de Comércio › catálogo › Problemas e Fontes de dados.', 'Administrador de comercio › catálogo › Problemas y Fuentes de datos.')],
        frase: L('Cada item com problema mostra o motivo; vamos corrigir na origem e, se for engano, pedir outra análise.', 'Cada artículo con problema muestra el motivo; vamos a corregir en el origen y, si es un error, pedir otra revisión.'),
        passos: [L('Ler Problemas.', 'Leer Problemas.'), L('Corrigir na fonte e atualizar.', 'Corregir en la fuente y actualizar.'), L('Pedir outra análise.', 'Pedir otra revisión.')],
        encaminhar: L('Se a outra análise mantiver a rejeição, oriente o cliente a ler a política indicada no item e a ajustar o produto ou o anúncio.', 'Si la otra revisión mantiene el rechazo, orienta al cliente a leer la política indicada en el artículo y a ajustar el producto o el anuncio.')
      }
    })
  ]);

  /* ================= Instagram ================= */
  poe('dg-instagram', [
    caso({ id: '01', min: 10,
      titulo: L('O Instagram não aparece no anúncio', 'El Instagram no aparece en el anuncio'),
      reclamacao: [
        ['marina', L('Fui criar o anúncio e o meu Instagram não aparece na lista! Só tem “Usar a Página do Facebook”. Cadê o meu @? 😩', '¡Fui a crear el anuncio y mi Instagram no aparece en la lista! Solo está “Usar la Página de Facebook”. ¿Dónde está mi @? 😩')],
        ['rafa', L('O problema quase nunca está no anúncio: está na ligação entre Instagram, portfólio e Página. Vamos conferir.', 'El problema casi nunca está en el anuncio: está en el vínculo entre Instagram, portafolio y Página. Revisemos.')]
      ],
      objetivo: L('Seguir a lista de conferência (conta profissional, portfólio, ligação com a Página), ligar o Instagram e confirmar que o @ aparece no anúncio.', 'Seguir la lista de revisión (cuenta profesional, portafolio, vínculo con la Página), vincular el Instagram y confirmar que el @ aparece en el anuncio.'),
      entender: {
        dialogo: [
          ['marina', L('Mas eu entro no Instagram todo dia!', '¡Pero entro a Instagram todos los días!')],
          ['rafa', L('Para anunciar, a conta precisa ser profissional, estar no portfólio empresarial e estar ligada à Página do Facebook. Quase sempre falta a terceira.', 'Para anunciar, la cuenta debe ser profesional, estar en el portafolio comercial y estar vinculada a la Página de Facebook. Casi siempre falta la tercera.')],
          ['pixel', L('A ligação se faz nas configurações do portfólio (Contas do Instagram) ou da Página. Depois disso, o @ aparece na lista de identidade.', 'El vínculo se hace en la configuración del portafolio (Cuentas de Instagram) o de la Página. Después de eso, el @ aparece en la lista de identidad.')]
        ],
        pontos: [
          L('<b>1)</b> Conta profissional?', '<b>1)</b> ¿Cuenta profesional?'),
          L('<b>2)</b> No portfólio empresarial?', '<b>2)</b> ¿En el portafolio comercial?'),
          L('<b>3)</b> Ligada à Página? <b>Prova:</b> o @ aparece no anúncio.', '<b>3)</b> ¿Vinculada a la Página? <b>Prueba:</b> el @ aparece en el anuncio.')
        ]
      },
      ferramenta: 'ig-nao-aparece',
      praticar: {
        texto: L('Comece pelo anúncio (onde a Marina viu o problema) e, se quiser, faça a ligação nas configurações do portfólio.', 'Empieza por el anuncio (donde Marina vio el problema) y, si quieres, haz el vínculo en la configuración del portafolio.'),
        opcoes: [
          { id: 'anuncio', icone: '🔎', pagina: 'meta-feed.html?igsem=1', tour: 'perfil-nao-aparece', selo: L('comece aqui', 'empieza aquí'), tit: L('Investigar no anúncio', 'Investigar en el anuncio'), txt: L('A lista de identidade sem o @, a conferência e a confirmação.', 'La lista de identidad sin el @, la revisión y la confirmación.') },
          { id: 'ligar', icone: '🔗', pagina: 'meta-portfolio.html?exemplo=1&aula=ig4', tour: 'conectar-instagram', tit: L('Ligar o Instagram no portfólio', 'Vincular el Instagram en el portafolio'), txt: L('O caminho completo nas configurações do portfólio.', 'El camino completo en la configuración del portafolio.') }
        ]
      },
      atender: {
        cena: L('Meu Instagram não aparece quando vou criar o anúncio. Vocês bloquearam minha conta?', 'Mi Instagram no aparece cuando voy a crear el anuncio. ¿Bloquearon mi cuenta?'),
        opcoes: [
          op(true, L('“Não parece bloqueio. Para aparecer, o Instagram precisa ser profissional, estar no seu portfólio e estar ligado à Página. Vamos conferir esses três pontos; normalmente falta a ligação com a Página.”', '“No parece un bloqueo. Para aparecer, el Instagram debe ser profesional, estar en tu portafolio y estar vinculado a la Página. Revisemos esos tres puntos; normalmente falta el vínculo con la Página.”'), L('Isso! Lista de conferência em ordem.', '¡Eso! Lista de revisión en orden.')),
          op(false, L('“Use a Página do Facebook no lugar.”', '“Usa la Página de Facebook en su lugar.”'), L('Funciona, mas não resolve o que ela pediu.', 'Funciona, pero no resuelve lo que pidió.')),
          op(false, L('“Crie um Instagram novo.”', '“Crea un Instagram nuevo.”'), L('Ela perde seguidores; o problema é a ligação.', 'Pierde seguidores; el problema es el vínculo.')),
          op(false, L('“Me passe a senha do Instagram que eu ligo.”', '“Pásame la contraseña del Instagram y lo vinculo.”'), L('Nunca peça senha.', 'Nunca pidas contraseña.'))
        ]
      },
      cola: {
        perguntas: [L('A conta é profissional?', '¿La cuenta es profesional?'), L('Está no portfólio empresarial?', '¿Está en el portafolio comercial?'), L('Está ligada à Página?', '¿Está vinculada a la Página?')],
        conferir: [L('Configurações do portfólio › Contas do Instagram; lista de identidade no anúncio.', 'Configuración del portafolio › Cuentas de Instagram; lista de identidad en el anuncio.')],
        frase: L('O Instagram aparece no anúncio quando está ligado à sua Página no portfólio; vamos conferir essa ligação.', 'El Instagram aparece en el anuncio cuando está vinculado a tu Página en el portafolio; revisemos ese vínculo.'),
        passos: [L('Profissional.', 'Profesional.'), L('Portfólio.', 'Portafolio.'), L('Ligação com a Página.', 'Vínculo con la Página.')],
        encaminhar: L('Se o Instagram estiver desativado ou com acesso perdido, oriente o cliente a recuperar a conta pela central de ajuda do Instagram.', 'Si el Instagram está desactivado o con acceso perdido, orienta al cliente a recuperar la cuenta por el centro de ayuda de Instagram.')
      }
    })
  ]);

  /* ================= Integrações ================= */
  poe('dg-integracoes', [
    caso({ id: '02', min: 10,
      titulo: L('Shopify conectada, mas nenhuma compra chega', 'Shopify conectada, pero no llega ninguna compra'),
      reclamacao: [
        ['marina', L('Conectei a Shopify com a Meta, apareceu tudo verdinho… e nenhuma venda aparece no Gerenciador! 🤨', 'Conecté Shopify con Meta, apareció todo en verde… ¡y ninguna venta aparece en el Administrador! 🤨')],
        ['rafa', L('Conectar a conta não liga o Pixel sozinho. Vamos fazer uma compra e ver o que chega.', 'Conectar la cuenta no enciende el píxel solo. Hagamos una compra y veamos qué llega.')]
      ],
      objetivo: L('Confirmar que nada chega, achar no canal Facebook e Instagram que não há Pixel nem compartilhamento, ativar e confirmar a compra chegando.', 'Confirmar que no llega nada, hallar en el canal Facebook e Instagram que no hay píxel ni compartir datos, activar y confirmar la compra llegando.'),
      entender: {
        dialogo: [
          ['marina', L('Mas a conexão deu certo!', '¡Pero la conexión salió bien!')],
          ['rafa', L('A conexão liga a loja ao portfólio. O envio de eventos é outra configuração: Compartilhamento de dados do cliente, com nível e Pixel escolhidos.', 'La conexión une la tienda al portafolio. El envío de eventos es otra configuración: Compartir datos del cliente, con nivel y píxel elegidos.')],
          ['pixel', L('Nível Padrão = só o Pixel; Avançado ou Máximo = Pixel + API de Conversões (a compra também vem do servidor).', 'Nivel Estándar = solo el píxel; Mejorado o Máximo = píxel + API de Conversiones (la compra también viene del servidor).')]
        ],
        pontos: [
          L('<b>Sinal:</b> o Consultor de Dados não acha Pixel e nenhuma compra chega.', '<b>Señal:</b> el Asesor de datos no encuentra píxel y no llega ninguna compra.'),
          L('<b>Causa:</b> canal conectado sem Pixel e com compartilhamento desligado.', '<b>Causa:</b> canal conectado sin píxel y con compartir apagado.'),
          L('<b>Prova:</b> nova compra chega do navegador e do servidor.', '<b>Prueba:</b> una nueva compra llega del navegador y del servidor.')
        ]
      },
      ferramenta: 'plat-dg',
      praticar: { texto: L('Você compra na loja, vê que nada chega, abre o canal na Shopify, ativa o compartilhamento com o Pixel certo e confirma com outra compra.', 'Compras en la tienda, ves que no llega nada, abres el canal en Shopify, activas compartir datos con el píxel correcto y confirmas con otra compra.'), tour: 'shopify-sem-pixel', pagina: 'loja.html' },
      atender: {
        cena: L('Conectei a Shopify e as vendas não aparecem na Meta. A integração de vocês não funciona!', 'Conecté Shopify y las ventas no aparecen en Meta. ¡La integración de ustedes no funciona!'),
        opcoes: [
          op(true, L('“A conexão costuma estar certa; o que falta é ligar o envio de dados. No canal Facebook e Instagram, em Configurações › Compartilhamento de dados, ative, escolha o nível e o seu Pixel. Depois fazemos uma compra de teste.”', '“La conexión suele estar bien; lo que falta es activar el envío de datos. En el canal Facebook e Instagram, en Configuración › Compartir datos, actívalo, elige el nivel y tu píxel. Después hacemos una compra de prueba.”'), L('Isso! Diferença entre conectar e enviar dados.', '¡Eso! Diferencia entre conectar y enviar datos.')),
          op(false, L('“Cole o código do Pixel no tema.”', '“Pega el código del píxel en el tema.”'), L('Na Shopify, o Pixel vem pelo canal; código manual duplica depois.', 'En Shopify, el píxel viene por el canal; código manual duplica después.')),
          op(false, L('“Espere 48 horas.”', '“Espera 48 horas.”'), L('Sem compartilhamento ligado, nada chega, por mais que espere.', 'Sin compartir activado, no llega nada, por más que espere.')),
          op(false, L('“Desinstale o app e instale de novo.”', '“Desinstala la app e instálala de nuevo.”'), L('Não precisa: é uma configuração dentro do canal.', 'No hace falta: es una configuración dentro del canal.'))
        ]
      },
      cola: {
        perguntas: [L('O Consultor de Dados acha algum Pixel na loja?', '¿El Asesor de datos encuentra algún píxel en la tienda?'), L('O compartilhamento de dados está ativo?', '¿Compartir datos está activo?'), L('Qual Pixel e qual nível?', '¿Qué píxel y qué nivel?')],
        conferir: [L('Admin da Shopify › Facebook e Instagram › Configurações › Compartilhamento de dados.', 'Admin de Shopify › Facebook e Instagram › Configuración › Compartir datos.')],
        frase: L('A loja está conectada, mas o envio de dados está desligado; vamos ligar e escolher o seu Pixel.', 'La tienda está conectada, pero el envío de datos está apagado; vamos a activarlo y elegir tu píxel.'),
        passos: [L('Compra de teste.', 'Compra de prueba.'), L('Ativar compartilhamento, nível e Pixel.', 'Activar compartir, nivel y píxel.'), L('Nova compra.', 'Nueva compra.')],
        encaminhar: L('Se o canal Facebook e Instagram não abre ou dá erro dentro da Shopify, oriente o cliente a falar com o suporte da Shopify.', 'Si el canal Facebook e Instagram no abre o da error dentro de Shopify, orienta al cliente a hablar con el soporte de Shopify.')
      }
    }),
    caso({ id: '03', min: 10,
      titulo: L('Produto que não sincroniza e produto com problema', 'Producto que no se sincroniza y producto con problema'),
      reclamacao: [
        ['marina', L('Quero vender a Ecobag no Instagram e ela não chega à Meta. E o canal diz que tem “1 produto com problema”. Que problema?! 😵', '¡Quiero vender la Ecobag en Instagram y no llega a Meta! Y el canal dice que hay “1 producto con problema”. ¡¿Qué problema?! 😵')],
        ['rafa', L('Dois casos em um: um produto fora do canal e outro sem um dado obrigatório. Vamos resolver os dois na Shopify.', 'Dos casos en uno: un producto fuera del canal y otro sin un dato obligatorio. Resolvamos los dos en Shopify.')]
      ],
      objetivo: L('Tornar a Ecobag disponível no canal, completar a categoria da Camiseta e confirmar 0 produtos com problema.', 'Hacer la Ecobag disponible en el canal, completar la categoría de la Camiseta y confirmar 0 productos con problema.'),
      entender: {
        dialogo: [
          ['marina', L('Posso arrumar no Gerenciador de Comércio?', '¿Puedo arreglarlo en el Administrador de comercio?')],
          ['rafa', L('Com a Shopify conectada, os produtos se editam na Shopify. O que for mudado na Meta é substituído na próxima sincronização.', 'Con Shopify conectada, los productos se editan en Shopify. Lo que se cambie en Meta se reemplaza en la próxima sincronización.')],
          ['pixel', L('O status dos produtos, no canal, mostra quantos sincronizaram e quantos têm problema. É ali que se confere o resultado.', 'El estado de los productos, en el canal, muestra cuántos se sincronizaron y cuántos tienen problema. Ahí se verifica el resultado.')]
        ],
        pontos: [
          L('<b>Publicação:</b> o produto precisa estar publicado no canal Facebook & Instagram (quadro Publicação › Gerenciar publicação).', '<b>Publicación:</b> el producto debe estar publicado en el canal Facebook & Instagram (cuadro Publicación › Administrar publicación).'),
          L('<b>Dados:</b> imagem e categoria preenchidas.', '<b>Datos:</b> imagen y categoría completas.'),
          L('<b>Prova:</b> status com 0 produtos com problema.', '<b>Prueba:</b> estado con 0 productos con problema.')
        ]
      },
      ferramenta: 'sinc-shop',
      praticar: { texto: L('No admin da Shopify de treino, você deixa a Ecobag disponível no canal, completa a categoria da Camiseta e confere o status.', 'En el admin de Shopify de práctica, dejas la Ecobag disponible en el canal, completas la categoría de la Camiseta y verificas el estado.'), tour: 'sincronizar-produtos', pagina: 'admin-shopify.html' },
      atender: {
        cena: L('O canal da Meta na Shopify diz que tenho produto com problema, mas não diz qual. O que eu faço?', 'El canal de Meta en Shopify dice que tengo un producto con problema, pero no dice cuál. ¿Qué hago?'),
        opcoes: [
          op(true, L('“No canal Facebook e Instagram, em Ver produtos, aparece qual é e o que falta (por exemplo, a categoria). A correção é feita na Shopify; depois o status volta a 0 com problema.”', '“En el canal Facebook e Instagram, en Ver productos, aparece cuál es y qué falta (por ejemplo, la categoría). La corrección se hace en Shopify; después el estado vuelve a 0 con problema.”'), L('Isso! Onde ver e onde corrigir.', '¡Eso! Dónde ver y dónde corregir.')),
          op(false, L('“Corrija no Gerenciador de Comércio.”', '“Corrige en el Administrador de comercio.”'), L('A próxima sincronização desfaz.', 'La próxima sincronización lo deshace.')),
          op(false, L('“Ignore, é só um aviso.”', '“Ignóralo, es solo un aviso.”'), L('Produto com problema pode ficar fora dos anúncios.', 'Un producto con problema puede quedar fuera de los anuncios.')),
          op(false, L('“Apague o produto.”', '“Borra el producto.”'), L('Basta completar o dado que falta.', 'Basta completar el dato que falta.'))
        ]
      },
      cola: {
        perguntas: [L('O produto está disponível no canal?', '¿El producto está disponible en el canal?'), L('Qual dado falta (imagem, categoria)?', '¿Qué dato falta (imagen, categoría)?'), L('O status do canal mostra quantos com problema?', '¿El estado del canal muestra cuántos con problema?')],
        conferir: [L('Admin da Shopify › Produtos e Facebook e Instagram › Ver produtos.', 'Admin de Shopify › Productos y Facebook e Instagram › Ver productos.')],
        frase: L('Vamos deixar o produto disponível no canal e completar o dado que falta, tudo na Shopify.', 'Vamos a dejar el producto disponible en el canal y completar el dato que falta, todo en Shopify.'),
        passos: [L('Publicação no canal.', 'Publicación en el canal.'), L('Categoria.', 'Categoría.'), L('Status do canal.', 'Estado del canal.')],
        encaminhar: L('Se o erro for de um app da própria Shopify, oriente o cliente a falar com o suporte da Shopify.', 'Si el error es de una app de la propia Shopify, orienta al cliente a hablar con el soporte de Shopify.')
      }
    })
  ]);

  /* ================= Contas e portfólio ================= */
  poe('dg-contas', [
    caso({ id: '01', min: 8,
      titulo: L('A Página não aparece ao conectar a loja', 'La Página no aparece al conectar la tienda'),
      reclamacao: [
        ['marina', L('Fui conectar a Shopify com a Meta e, na hora de escolher a Página, a lista está vazia! A minha Página existe! 😡', '¡Fui a conectar Shopify con Meta y, a la hora de elegir la Página, la lista está vacía! ¡Mi Página existe! 😡')],
        ['rafa', L('Na janela de conexão, a lista de Páginas depende do portfólio escolhido. Vamos refazer o caminho e ver qual foi.', 'En la ventana de conexión, la lista de Páginas depende del portafolio elegido. Rehagamos el camino y veamos cuál fue.')]
      ],
      objetivo: L('Reproduzir o erro (portfólio errado), trocar para o portfólio dono da Página e concluir a conexão.', 'Reproducir el error (portafolio equivocado), cambiar al portafolio dueño de la Página y concluir la conexión.'),
      entender: {
        dialogo: [
          ['marina', L('Eu escolhi o primeiro portfólio que apareceu…', 'Elegí el primer portafolio que apareció…')],
          ['rafa', L('Esse é o erro mais comum: escolher o portfólio pessoal. A Página só aparece se o portfólio escolhido for o dono dela.', 'Ese es el error más común: elegir el portafolio personal. La Página solo aparece si el portafolio elegido es su dueño.')],
          ['pixel', L('E quem conecta precisa ter controle total do portfólio e da Página.', 'Y quien conecta necesita control total del portafolio y de la Página.')]
        ],
        pontos: [
          L('<b>Sinal:</b> lista de Páginas vazia na janela de conexão.', '<b>Señal:</b> lista de Páginas vacía en la ventana de conexión.'),
          L('<b>Causa:</b> portfólio que não é o dono da Página.', '<b>Causa:</b> portafolio que no es el dueño de la Página.'),
          L('<b>Prova:</b> a Shopify mostra portfólio e Página conectados.', '<b>Prueba:</b> Shopify muestra portafolio y Página conectados.')
        ]
      },
      ferramenta: 'conectar-mbe',
      praticar: { texto: L('Você abre a janela de conexão pela Shopify, repete o erro do portfólio pessoal, troca para o certo e conclui.', 'Abres la ventana de conexión desde Shopify, repites el error del portafolio personal, cambias al correcto y concluyes.'), tour: 'conectar-extensao', pagina: 'admin-shopify.html' },
      atender: {
        cena: L('Na hora de conectar, minha Página não aparece. Vocês apagaram minha Página?', 'A la hora de conectar, mi Página no aparece. ¿Borraron mi Página?'),
        opcoes: [
          op(true, L('“Sua Página está lá. A lista mostra só as Páginas do portfólio escolhido. Vamos voltar e escolher o portfólio da empresa, que é o dono da Página.”', '“Tu Página está ahí. La lista muestra solo las Páginas del portafolio elegido. Volvamos y elijamos el portafolio de la empresa, que es el dueño de la Página.”'), L('Isso! Tranquiliza e corrige.', '¡Eso! Tranquiliza y corrige.')),
          op(false, L('“Crie uma Página nova.”', '“Crea una Página nueva.”'), L('Ela perde seguidores e o problema continua.', 'Pierde seguidores y el problema sigue.')),
          op(false, L('“É erro da Shopify.”', '“Es error de Shopify.”'), L('Não é: é a escolha do portfólio.', 'No lo es: es la elección del portafolio.')),
          op(false, L('“Me dê acesso ao seu Facebook.”', '“Dame acceso a tu Facebook.”'), L('Nunca peça acesso à conta pessoal.', 'Nunca pidas acceso a la cuenta personal.'))
        ]
      },
      cola: {
        perguntas: [L('Qual portfólio foi escolhido na janela?', '¿Qué portafolio se eligió en la ventana?'), L('Esse portfólio é o dono da Página?', '¿Ese portafolio es el dueño de la Página?'), L('Quem conecta tem controle total?', '¿Quien conecta tiene control total?')],
        conferir: [L('Janela de conexão da Meta (pela Shopify) e Configurações do portfólio › Páginas.', 'Ventana de conexión de Meta (desde Shopify) y Configuración del portafolio › Páginas.')],
        frase: L('A Página aparece quando escolhemos o portfólio que é dono dela; vamos refazer com o portfólio certo.', 'La Página aparece cuando elegimos el portafolio que es su dueño; rehagámoslo con el portafolio correcto.'),
        passos: [L('Abrir a janela.', 'Abrir la ventana.'), L('Portfólio da empresa.', 'Portafolio de la empresa.'), L('Página e Concluir.', 'Página y Concluir.')],
        encaminhar: L('Se a Página estiver no portfólio de outra pessoa ou agência, oriente o cliente a pedir que a removam de lá ou que compartilhem o acesso.', 'Si la Página está en el portafolio de otra persona o agencia, orienta al cliente a pedir que la quiten de allí o que compartan el acceso.')
      }
    }),
    caso({ id: '02', min: 10,
      titulo: L('A Página está presa em outro portfólio', 'La Página está atrapada en otro portafolio'),
      reclamacao: [
        ['marina', L('Criei um portfólio novo e não consigo colocar a Página da loja nele! Dá erro! 😤', '¡Creé un portafolio nuevo y no logro poner la Página de la tienda en él! ¡Da error! 😤')],
        ['rafa', L('Uma Página só pode pertencer a um portfólio. Se ela já está em outro, primeiro sai de lá. Vamos ver onde ela está.', 'Una Página solo puede pertenecer a un portafolio. Si ya está en otro, primero sale de allí. Veamos dónde está.')]
      ],
      objetivo: L('Ler o erro, achar a Página no portfólio antigo, remover de lá (sem excluir do Facebook) e adicionar no novo.', 'Leer el error, hallar la Página en el portafolio antiguo, quitarla de allí (sin eliminarla de Facebook) y agregarla en el nuevo.'),
      entender: {
        dialogo: [
          ['marina', L('Remover a Página não apaga ela?', '¿Quitar la Página no la borra?')],
          ['rafa', L('Não: remover do portfólio só tira a Página daquela “pasta”. Ela continua no Facebook, com seguidores e posts.', 'No: quitar del portafolio solo saca la Página de esa “carpeta”. Sigue en Facebook, con seguidores y posts.')],
          ['pixel', L('Se o outro portfólio é da própria cliente, ela remove e adiciona. Se é de agência ou de outra pessoa, ela pede para removerem ou para compartilharem o acesso.', 'Si el otro portafolio es de la propia clienta, ella quita y agrega. Si es de una agencia o de otra persona, pide que la quiten o que compartan el acceso.')]
        ],
        pontos: [
          L('<b>Regra:</b> um ativo, um portfólio dono.', '<b>Regla:</b> un activo, un portafolio dueño.'),
          L('<b>Correção:</b> remover do antigo, adicionar no novo.', '<b>Corrección:</b> quitar del antiguo, agregar en el nuevo.'),
          L('<b>Prova:</b> a Página aparece no portfólio novo e sumiu do antigo.', '<b>Prueba:</b> la Página aparece en el portafolio nuevo y desapareció del antiguo.')
        ]
      },
      ferramenta: 'de-quem-e',
      praticar: { texto: L('Nas Configurações do portfólio de treino, você tenta adicionar, lê o erro, vai ao portfólio antigo, remove a Página e adiciona no novo.', 'En la Configuración del portafolio de práctica, intentas agregar, lees el error, vas al portafolio antiguo, quitas la Página y la agregas en el nuevo.'), tour: 'pagina-outro-portfolio', pagina: 'meta-portfolio.html' },
      atender: {
        cena: L('Diz que minha Página já pertence a outro portfólio. Mas a Página é minha!', 'Dice que mi Página ya pertenece a otro portafolio. ¡Pero la Página es mía!'),
        opcoes: [
          op(true, L('“Ela é sua, sim; só está guardada em outro portfólio, e cada Página só pode estar em um. Se o outro portfólio também é seu, removemos de lá (ela não é excluída) e adicionamos no novo. Se for de uma agência, eles precisam remover.”', '“Es tuya, sí; solo está guardada en otro portafolio, y cada Página solo puede estar en uno. Si el otro portafolio también es tuyo, la quitamos de allí (no se elimina) y la agregamos en el nuevo. Si es de una agencia, ellos deben quitarla.”'), L('Isso! Regra clara e os dois caminhos.', '¡Eso! Regla clara y los dos caminos.')),
          op(false, L('“Exclua o portfólio antigo.”', '“Elimina el portafolio antiguo.”'), L('Exclusão é definitiva e desnecessária: basta remover a Página.', 'La eliminación es definitiva e innecesaria: basta quitar la Página.')),
          op(false, L('“Crie uma Página nova para o portfólio novo.”', '“Crea una Página nueva para el portafolio nuevo.”'), L('Perde seguidores; a Página certa pode mudar de portfólio.', 'Pierde seguidores; la Página correcta puede cambiar de portafolio.')),
          op(false, L('“Não tem como mudar.”', '“No hay cómo cambiar.”'), L('Tem: remover de um e adicionar no outro.', 'Sí hay: quitar de uno y agregar en el otro.'))
        ]
      },
      cola: {
        perguntas: [L('Em qual portfólio a Página está hoje?', '¿En qué portafolio está hoy la Página?'), L('Esse portfólio é da cliente?', '¿Ese portafolio es de la clienta?'), L('Ela tem controle total nos dois?', '¿Tiene control total en los dos?')],
        conferir: [L('Configurações do portfólio › Contas › Páginas (nos dois portfólios).', 'Configuración del portafolio › Cuentas › Páginas (en los dos portafolios).')],
        frase: L('Cada Página fica em um portfólio só; vamos tirá-la do antigo, sem excluir, e colocar no novo.', 'Cada Página queda en un solo portafolio; vamos a quitarla del antiguo, sin eliminarla, y ponerla en el nuevo.'),
        passos: [L('Ler o erro.', 'Leer el error.'), L('Remover do antigo.', 'Quitar del antiguo.'), L('Adicionar no novo.', 'Agregar en el nuevo.')],
        encaminhar: L('Se o portfólio antigo for de alguém que não responde e a cliente não tem acesso, oriente-a a usar a opção de solicitar acesso à Página e acompanhar pela Central de Ajuda.', 'Si el portafolio antiguo es de alguien que no responde y la clienta no tiene acceso, oriéntala a usar la opción de solicitar acceso a la Página y seguir por el Centro de ayuda.')
      }
    })
  ]);
})();
/* Diagnóstico · Integrações 04 (19/10/2026): pixel personalizado da Shopify + app = compras em dobro (telas conferidas numa loja real) */
(function () {
  var A = window.AULAS; if (!A) return;
  function L(pt, es) { return { pt: pt, es: es } }
  A['dg-integracoes'] = (A['dg-integracoes'] || []).concat([{
    id: '04', min: 12, status: 'pronta',
    titulo: L('Shopify: compras em dobro com pixel personalizado', 'Shopify: compras dobles con píxel personalizado'),
    reclamacao: [
      ['marina', L('Meu sobrinho “instalou o Pixel” na Shopify e agora o Gerenciador mostra o dobro de vendas! Mas eu já tinha o app da Meta… 🤯', '¡Mi sobrino “instaló el píxel” en Shopify y ahora el Administrador muestra el doble de ventas! Pero yo ya tenía la app de Meta… 🤯')],
      ['rafa', L('O código não aparece no tema? Na Shopify existe outro lugar: os pixels personalizados. Vamos comprar e procurar.', '¿El código no aparece en el tema? En Shopify hay otro lugar: los píxeles personalizados. Compremos y busquemos.')]
    ],
    objetivo: L('Achar o segundo Pixel num pixel personalizado (Configurações › Eventos de clientes), que não aparece no código-fonte, desconectar e confirmar uma compra só.', 'Hallar el segundo píxel en un píxel personalizado (Configuración › Eventos de clientes), que no aparece en el código fuente, desconectarlo y confirmar una sola compra.'),
    entender: {
      dialogo: [
        ['marina', L('Mas eu procurei “fbq” na página e não achei nada!', '¡Pero busqué “fbq” en la página y no encontré nada!')],
        ['rafa', L('Na Shopify, o app Facebook & Instagram e os pixels personalizados rodam isolados, fora do tema: não aparecem no código-fonte. A lista completa fica em Configurações › Eventos de clientes.', 'En Shopify, la app Facebook & Instagram y los píxeles personalizados funcionan aislados, fuera del tema: no aparecen en el código fuente. La lista completa está en Configuración › Eventos de clientes.')],
        ['pixel', L('O pixel personalizado aceita só JavaScript (a própria Shopify avisa: “certifique-se de excluir o HTML”) e recebe os eventos por analytics.subscribe. Se ele manda PageView e Purchase para o mesmo Pixel que o app, cada compra conta de novo, com outro event_id.', 'El píxel personalizado acepta solo JavaScript (la propia Shopify avisa: “asegúrate de excluir el HTML”) y recibe los eventos por analytics.subscribe. Si envía PageView y Purchase al mismo píxel que la app, cada compra cuenta otra vez, con otro event_id.')]
      ],
      pontos: [
        L('<b>Sinal:</b> dois PageView por página e Purchase a mais, com event_id diferente do app.', '<b>Señal:</b> dos PageView por página y Purchase de más, con event_id distinto al de la app.'),
        L('<b>Onde está:</b> Configurações › Eventos de clientes › pixel personalizado (não aparece no código-fonte).', '<b>Dónde está:</b> Configuración › Eventos de clientes › píxel personalizado (no aparece en el código fuente).'),
        L('<b>Correção e prova:</b> desconectar o pixel personalizado, ficar só com o app e fazer uma compra de teste.', '<b>Corrección y prueba:</b> desconectar el píxel personalizado, quedarse solo con la app y hacer una compra de prueba.')
      ],
      notas: L('Telas da Shopify conferidas numa loja de teste real em 19/10/2026 (Configurações › Eventos de clientes, página do pixel personalizado com Privacidade do cliente e Código, e o pixel do app Facebook & Instagram). O botão Desconectar de um pixel personalizado já conectado: a conferir. Avisos do Diagnóstico: Central de Ajuda da Meta para Empresas. A loja da Marina é de faz-de-conta.', 'Pantallas de Shopify revisadas en una tienda de prueba real el 19/10/2026 (Configuración › Eventos de clientes, página del píxel personalizado con Privacidad del cliente y Código, y el píxel de la app Facebook & Instagram). El botón Desconectar de un píxel personalizado ya conectado: por confirmar. Avisos del Diagnóstico: Centro de ayuda de Meta para Empresas. La tienda de Marina es de mentira.')
    },
    ferramenta: 'dup-dg',
    praticar: { texto: L('Você compra, vê tudo em dobro, procura no código-fonte (e não acha), encontra o pixel personalizado em Eventos de clientes, desconecta e confere com outra compra.', 'Compras, ves todo doble, buscas en el código fuente (y no encuentras), hallas el píxel personalizado en Eventos de clientes, lo desconectas y verificas con otra compra.'), tour: 'pixel-personalizado-dobro', pagina: 'loja.html' },
    atender: {
      cena: L('Já procurei o código do Pixel no meu site e não tem nada duplicado. Por que as compras estão em dobro?', 'Ya busqué el código del píxel en mi sitio y no hay nada duplicado. ¿Por qué las compras están dobles?'),
      pergunta: L('O que você responde?', '¿Qué respondes?'),
      opcoes: [
        { certa: true, txt: L('“Na Shopify, alguns pixels não aparecem no código da página. Vamos abrir Configurações › Eventos de clientes: se tiver um pixel personalizado da Meta além do app, ele envia a compra de novo. Desconectamos o personalizado e fazemos uma compra de teste.”', '“En Shopify, algunos píxeles no aparecen en el código de la página. Abramos Configuración › Eventos de clientes: si hay un píxel personalizado de Meta además de la app, envía la compra otra vez. Desconectamos el personalizado y hacemos una compra de prueba.”'), fb: L('Isso! Lugar certo, causa e prova.', '¡Eso! Lugar correcto, causa y prueba.') },
        { certa: false, txt: L('“Então é erro da Meta, ela está contando em dobro.”', '“Entonces es error de Meta, está contando doble.”'), fb: L('Não: o site está enviando duas vezes, só que por fora do tema.', 'No: el sitio está enviando dos veces, solo que por fuera del tema.') },
        { certa: false, txt: L('“Desinstale o app Facebook & Instagram.”', '“Desinstala la app Facebook & Instagram.”'), fb: L('O app é o caminho recomendado (e manda pelo servidor). Quem sobra é o pixel personalizado.', 'La app es el camino recomendado (y envía por el servidor). Lo que sobra es el píxel personalizado.') },
        { certa: false, txt: L('“Crie um Pixel novo para separar.”', '“Crea un píxel nuevo para separar.”'), fb: L('Dois pixels só complicam a medição.', 'Dos píxeles solo complican la medición.') }
      ]
    },
    cola: {
      perguntas: [L('Cada página manda dois PageView?', '¿Cada página envía dos PageView?'), L('Há Purchase com event_id diferente do app?', '¿Hay Purchase con event_id distinto al de la app?'), L('O que aparece em Configurações › Eventos de clientes?', '¿Qué aparece en Configuración › Eventos de clientes?')],
      conferir: [L('Gerenciador de Eventos (Testar eventos e Diagnóstico) e admin da Shopify › Configurações › Eventos de clientes.', 'Administrador de eventos (Probar eventos y Diagnóstico) y admin de Shopify › Configuración › Eventos de clientes.')],
      frase: L('Na Shopify, o Pixel pode estar num pixel personalizado que não aparece no código da página; vamos conferir em Eventos de clientes e deixar só o app.', 'En Shopify, el píxel puede estar en un píxel personalizado que no aparece en el código de la página; revisemos Eventos de clientes y dejemos solo la app.'),
      passos: [L('Compra de teste.', 'Compra de prueba.'), L('Configurações › Eventos de clientes.', 'Configuración › Eventos de clientes.'), L('Desconectar o pixel personalizado e testar.', 'Desconectar el píxel personalizado y probar.')],
      encaminhar: L('Se quem colou o pixel personalizado foi uma agência ou um desenvolvedor, oriente o cliente a combinar com eles antes de desconectar.', 'Si quien pegó el píxel personalizado fue una agencia o un desarrollador, orienta al cliente a acordarlo con ellos antes de desconectarlo.')
    }
  }]);
})();
