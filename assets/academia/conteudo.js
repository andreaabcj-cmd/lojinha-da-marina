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
  { id: 'portfolio', fase: 1, status: 'construcao', icone: '🏢', titulo: { pt: 'Portfólio empresarial · básico', es: 'Portafolio comercial · básico' }, resumo: { pt: 'Como configurar o portfólio e seus principais recursos.', es: 'Cómo configurar el portafolio y sus principales recursos.' } },
  { id: 'instagram', fase: 1, status: 'construcao', icone: '📸', titulo: { pt: 'Instagram para empresas', es: 'Instagram para empresas' }, resumo: { pt: 'Como funciona o Instagram para empresas e seus anúncios.', es: 'Cómo funciona Instagram para empresas y sus anuncios.' } },
  { id: 'pixel', fase: 1, status: 'construcao', icone: '📡', titulo: { pt: 'Pixel · básico', es: 'Pixel · básico' }, resumo: { pt: 'O que é, como criar, como saber se está funcionando, os eventos e os primeiros avisos.', es: 'Qué es, cómo crearlo, cómo saber si funciona, los eventos y los primeros avisos.' } },
  { id: 'anuncios', fase: 2, status: 'construcao', icone: '📣', titulo: { pt: 'Gerenciador de Anúncios · criação e edição', es: 'Administrador de anuncios · creación y edición' }, resumo: { pt: 'Criar e editar anúncios, e os erros mais comuns.', es: 'Crear y editar anuncios, y los errores más comunes.' } },
  { id: 'feed', fase: 2, status: 'planejado', icone: '📰', titulo: { pt: 'Anúncios no Feed', es: 'Anuncios en el Feed' }, resumo: { pt: 'O que são e erros comuns.', es: 'Qué son y errores comunes.' } },
  { id: 'catalogo', fase: 2, status: 'planejado', icone: '🗂️', titulo: { pt: 'Catálogo', es: 'Catálogo' }, resumo: { pt: 'Introdução, como criar e como manter.', es: 'Introducción, cómo crearlo y cómo mantenerlo.' } },
  { id: 'relatorios', fase: 3, status: 'planejado', icone: '📊', titulo: { pt: 'Relatórios e métricas', es: 'Informes y métricas' }, resumo: { pt: 'Criar e interpretar relatórios; o efeito das mudanças de privacidade do iOS.', es: 'Crear e interpretar informes; el efecto de los cambios de privacidad de iOS.' } },
  { id: 'segmentacao', fase: 3, status: 'planejado', icone: '🎯', titulo: { pt: 'Públicos e segmentação', es: 'Públicos y segmentación' }, resumo: { pt: 'Públicos personalizados (visitantes do site pelo Pixel, lista de clientes), públicos semelhantes, público Advantage+, categorias especiais e erros comuns.', es: 'Públicos personalizados (visitantes del sitio por el Pixel, lista de clientes), públicos similares, público Advantage+, categorías especiales y errores comunes.' } },
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
  instagram: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'Pessoal ou profissional?', es: '¿Personal o profesional?' },
      antes: { pt: 'O portfólio da Marina está pronto, com pessoas e conta de anúncios.', es: 'El portafolio de Marina está listo, con personas y cuenta publicitaria.' },
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
      id: '02', min: 6, status: 'pronta',
      titulo: { pt: 'Um perfil que vende', es: 'Un perfil que vende' },
      antes: { pt: 'O Instagram da Marina virou conta profissional Comercial.', es: 'El Instagram de Marina se volvió cuenta profesional Comercial.' },
      gancho: { pt: '“Perfil pronto! Agora meu Instagram precisa entrar no portfólio, né?” Vamos juntar o Instagram à pasta da empresa.', es: '“¡Perfil listo! Ahora mi Instagram tiene que entrar al portafolio, ¿no?” Vamos a juntar el Instagram a la carpeta de la empresa.' },
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
      titulo: { pt: 'Instagram no portfólio', es: 'Instagram en el portafolio' },
      antes: { pt: 'O perfil da Marina está com cara de loja.', es: 'El perfil de Marina tiene cara de tienda.' },
      gancho: { pt: '“Instagram e Página no portfólio! Mas eles ainda não conversam entre si…” Vamos ligar os dois.', es: '“¡Instagram y Página en el portafolio! Pero todavía no se hablan entre sí…” Vamos a vincular los dos.' },
      objetivo: { pt: 'Saber adicionar o Instagram ao portfólio e os cuidados: só conta profissional, um ativo em um portfólio, e a conta de anúncios que vem junto.', es: 'Saber agregar el Instagram al portafolio y los cuidados: solo cuenta profesional, un activo en un portafolio, y la cuenta publicitaria que viene junto.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu Instagram precisa estar no portfólio? Ele já não é meu? 🤔', es: '¿Mi Instagram tiene que estar en el portafolio? ¿No es mío ya? 🤔' }],
          ['rafa', { pt: 'É seu, sim! No portfólio ele fica junto com a Página, a conta de anúncios e o Pixel, e você controla quem ajuda a cuidar dele.', es: '¡Es tuyo! En el portafolio queda junto con la Página, la cuenta publicitaria y el Pixel, y controlas quién ayuda a cuidarlo.' }],
          ['rafa', { pt: 'Para adicionar, você entra com a sua conta do Instagram numa janela de autorização. Eu nunca preciso da sua senha.', es: 'Para agregarlo, entras con tu cuenta de Instagram en una ventana de autorización. Nunca necesito tu contraseña.' }],
          ['pixel', { pt: 'Se o Instagram tiver uma conta de anúncios conectada, ela vem junto para o portfólio e não pode ser removida depois.', es: 'Si el Instagram tiene una cuenta publicitaria conectada, viene junto al portafolio y no se puede quitar después.' }]
        ],
        pontos: [
          { pt: '<b>Só conta profissional</b> entra no portfólio. Se for pessoal, ela vira profissional ao adicionar.', es: '<b>Solo la cuenta profesional</b> entra al portafolio. Si es personal, se vuelve profesional al agregarla.' },
          { pt: '<b>Um ativo, um portfólio:</b> se o Instagram está no portfólio de outra empresa, precisa ser liberado antes.', es: '<b>Un activo, un portafolio:</b> si el Instagram está en el portafolio de otra empresa, hay que liberarlo antes.' },
          { pt: '<b>Conta de anúncios conectada</b> vem junto e não pode ser removida. E o login é sempre da cliente.', es: '<b>La cuenta publicitaria conectada</b> viene junto y no se puede quitar. Y el inicio de sesión siempre es de la clienta.' }
        ],
        notas: { pt: 'Caminho: Configurações › Contas › Perfis do Instagram › Adicionar. Na tela real (14/10/2026) o título da página e a janela aparecem em inglês (“Instagram profiles”, “Add an Instagram profile”). Ligar o Instagram à Página é a aula 04.', es: 'Camino: Configuración › Cuentas › Perfiles de Instagram › Agregar. En la pantalla real (14/10/2026) el título de la página y la ventana aparecen en inglés (“Instagram profiles”, “Add an Instagram profile”). Vincular el Instagram a la Página es la clase 04.' }
      },
      ferramenta: 'ig-portfolio',
      praticar: {
        texto: { pt: 'No simulador do portfólio, o Pixel te guia para adicionar o Instagram da Marina, com os avisos da tela real.', es: 'En el simulador del portafolio, el Pixel te guía para agregar el Instagram de Marina, con los avisos de la pantalla real.' },
        tour: 'adicionar-instagram', pagina: 'meta-portfolio.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Fui adicionar meu Instagram no portfólio e ele diz que já pertence a outra empresa. Era de uma agência que me atendia. 😕', es: 'Fui a agregar mi Instagram al portafolio y dice que ya pertenece a otra empresa. Era de una agencia que me atendía. 😕' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Cada ativo só pode estar em um portfólio. Peça para a agência tirar o seu Instagram do portfólio deles; depois você adiciona no seu.”', es: '“Cada activo solo puede estar en un portafolio. Pídele a la agencia que quite tu Instagram de su portafolio; después lo agregas en el tuyo.”' }, fb: { pt: 'Isso! Você explicou a regra e deu o caminho certo, que depende de quem administra o outro portfólio.', es: '¡Eso! Explicaste la regla y diste el camino correcto, que depende de quien administra el otro portafolio.' } },
          { certa: false, txt: { pt: '“Me passa a senha do Instagram que eu resolvo.”', es: '“Pásame la contraseña de Instagram y lo resuelvo.”' }, fb: { pt: 'Nunca! O agente não pede senha, e isso nem resolveria: o Instagram está no portfólio da agência.', es: '¡Nunca! El agente no pide contraseña, y eso ni lo resolvería: el Instagram está en el portafolio de la agencia.' } },
          { certa: false, txt: { pt: '“Crie um Instagram novo.”', es: '“Crea un Instagram nuevo.”' }, fb: { pt: 'Ela perderia seguidores e posts. O caminho é a agência liberar.', es: 'Perdería seguidores y publicaciones. El camino es que la agencia lo libere.' } },
          { certa: false, txt: { pt: '“Adicione em dois portfólios ao mesmo tempo.”', es: '“Agrégalo en dos portafolios al mismo tiempo.”' }, fb: { pt: 'Não dá: cada ativo pertence a um portfólio só.', es: 'No se puede: cada activo pertenece a un solo portafolio.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Seu Instagram é conta profissional?', es: '¿Tu Instagram es cuenta profesional?' },
          { pt: 'Ele já está no portfólio de alguém (uma agência, outra empresa)?', es: '¿Ya está en el portafolio de alguien (una agencia, otra empresa)?' },
          { pt: 'Ele tem uma conta de anúncios conectada?', es: '¿Tiene una cuenta publicitaria conectada?' }],
        conferir: [{ pt: 'Conta profissional (se for pessoal, vira ao adicionar).', es: 'Cuenta profesional (si es personal, se vuelve al agregarla).' },
          { pt: 'Não está em outro portfólio.', es: 'No está en otro portafolio.' },
          { pt: 'A cliente sabe que a conta de anúncios conectada vem junto e não sai.', es: 'La clienta sabe que la cuenta publicitaria conectada viene junto y no sale.' }],
        frase: { pt: 'Cada ativo só pode estar em um portfólio. Peça para quem administra o outro portfólio liberar o seu Instagram; depois você adiciona no seu.', es: 'Cada activo solo puede estar en un portafolio. Pídele a quien administra el otro portafolio que libere tu Instagram; después lo agregas en el tuyo.' },
        passos: [{ pt: 'Configurações › Contas › Perfis do Instagram › Adicionar.', es: 'Configuración › Cuentas › Perfiles de Instagram › Agregar.' },
          { pt: 'Leia os avisos e clique em Add Instagram profile.', es: 'Lee los avisos y haz clic en Add Instagram profile.' },
          { pt: 'Na janela do Instagram, entre com a sua conta e confirme.', es: 'En la ventana de Instagram, entra con tu cuenta y confirma.' }],
        encaminhar: { pt: 'Se ninguém consegue liberar o Instagram do outro portfólio, oriente a seguir a Central de Ajuda da Meta para empresas.', es: 'Si nadie logra liberar el Instagram del otro portafolio, orienta a seguir el Centro de ayuda de Meta para empresas.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/620548115562686', titulo: { pt: 'Conectar uma conta do Instagram no Business Suite', es: 'Conectar una cuenta de Instagram en Business Suite' }, conferido: '14/10/2026' },
        { url: 'https://www.facebook.com/business/help/1125825714110549', titulo: { pt: 'Adicionar uma conta do Instagram ao portfólio (só um portfólio por conta)', es: 'Agregar una cuenta de Instagram al portafolio (solo un portafolio por cuenta)' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '04', min: 7, status: 'pronta',
      titulo: { pt: 'Instagram e Página juntos', es: 'Instagram y Página juntos' },
      antes: { pt: 'A Página e o Instagram da Marina estão no portfólio, mas ainda separados.', es: 'La Página y el Instagram de Marina están en el portafolio, pero todavía separados.' },
      gancho: { pt: '“Portfólio, Instagram, Página… tudo pronto! Agora uma amiga disse que eu preciso colocar o Pixel no site.” Próximo módulo: Pixel.', es: '“Portafolio, Instagram, Página… ¡todo listo! Ahora una amiga me dijo que tengo que poner el Pixel en el sitio.” Próximo módulo: Pixel.' },
      objetivo: { pt: 'Saber ligar o Instagram à Página, o que é preciso antes e o que muda para quem ajuda a cuidar dos dois.', es: 'Saber vincular el Instagram a la Página, qué se necesita antes y qué cambia para quien ayuda a cuidar los dos.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu Instagram e minha Página já estão no portfólio. Isso quer dizer que estão ligados? 🤔', es: 'Mi Instagram y mi Página ya están en el portafolio. ¿Eso quiere decir que están vinculados? 🤔' }],
          ['rafa', { pt: 'Ainda não! Estar no mesmo portfólio é estar na mesma pasta. Ligar é outro passo: aí você faz posts nos dois, junta os insights e usa as ferramentas de empresa do Instagram.', es: '¡Todavía no! Estar en el mismo portafolio es estar en la misma carpeta. Vincular es otro paso: ahí publicas en los dos, juntas las estadísticas y usas las herramientas de empresa de Instagram.' }],
          ['marina', { pt: 'E o que eu preciso para ligar?', es: '¿Y qué necesito para vincularlos?' }],
          ['rafa', { pt: 'Três coisas: Instagram profissional, controle total da Página e os dois no mesmo portfólio. Você já tem tudo!', es: 'Tres cosas: Instagram profesional, control total de la Página y los dos en el mismo portafolio. ¡Ya tienes todo!' }],
          ['pixel', { pt: 'Atenção: depois de ligar, quem cuida da Página OU do Instagram pode cuidar dos dois, conforme o acesso de cada um. E as mensagens do Instagram podem ir para a Caixa de Entrada.', es: 'Atención: después de vincular, quien cuida la Página O el Instagram puede cuidar los dos, según el acceso de cada uno. Y los mensajes de Instagram pueden ir a la Bandeja de entrada.' }]
        ],
        pontos: [
          { pt: '<b>Antes de ligar:</b> Instagram profissional + controle total da Página + os dois no mesmo portfólio.', es: '<b>Antes de vincular:</b> Instagram profesional + control total de la Página + los dos en el mismo portafolio.' },
          { pt: '<b>Onde:</b> no portfólio, Páginas › a Página › Conectar ativos › Conta do Instagram. (No app do Instagram: Editar perfil › Página › Conectar ou criar.)', es: '<b>Dónde:</b> en el portafolio, Páginas › la Página › Conectar activos › Cuenta de Instagram. (En la app de Instagram: Editar perfil › Página › Conectar o crear.)' },
          { pt: '<b>O que muda:</b> quem tem acesso à Página ou ao Instagram pode gerenciar os dois; as mensagens do Instagram podem ir para a Caixa de Entrada (dá para mudar depois).', es: '<b>Qué cambia:</b> quien tiene acceso a la Página o al Instagram puede gestionar los dos; los mensajes de Instagram pueden ir a la Bandeja de entrada (se puede cambiar después).' }
        ],
        notas: { pt: '📌 Cenário alternativo (visto de verdade em 14/10/2026): a Página estava no portfólio de outra pessoa. O caminho: quem administra aquele portfólio remove a Página (quem já administrava a Página não perde o acesso) e a dona adiciona no portfólio dela como “Página existente”. Telas de Conectar ativos conferidas em 14/10/2026.', es: '📌 Escenario alternativo (visto de verdad el 14/10/2026): la Página estaba en el portafolio de otra persona. El camino: quien administra ese portafolio quita la Página (quien ya administraba la Página no pierde el acceso) y la dueña la agrega en su portafolio como “Página existente”. Pantallas de Conectar activos revisadas el 14/10/2026.' }
      },
      ferramenta: 'ligar-ig',
      praticar: {
        texto: { pt: 'No simulador do portfólio, o Pixel te guia para ligar o Instagram da Marina à Página, com as telas reais.', es: 'En el simulador del portafolio, el Pixel te guía para vincular el Instagram de Marina a la Página, con las pantallas reales.' },
        tour: 'conectar-instagram', pagina: 'meta-portfolio.html?exemplo=1&aula=ig4'
      },
      atender: {
        cena: { pt: 'Liguei meu Instagram à Página e agora meu sócio, que só cuidava da Página, está lendo as mensagens do Instagram. Eu não queria isso! 😟', es: 'Vinculé mi Instagram a la Página y ahora mi socio, que solo cuidaba la Página, está leyendo los mensajes de Instagram. ¡Yo no quería eso! 😟' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Isso acontece porque, ligados, quem cuida da Página pode ver as mensagens do Instagram, conforme o acesso dele. Dá para mudar: você pode tirar o acesso às mensagens do Instagram nas configurações ou rever o acesso do seu sócio no portfólio. Quer ver comigo?”', es: '“Eso pasa porque, vinculados, quien cuida la Página puede ver los mensajes de Instagram, según su acceso. Se puede cambiar: puedes quitar el acceso a los mensajes de Instagram en la configuración o revisar el acceso de tu socio en el portafolio. ¿Lo vemos juntos?”' }, fb: { pt: 'Isso! Você explicou o porquê e deu as duas saídas, sem precisar desfazer a ligação.', es: '¡Eso! Explicaste el porqué y diste las dos salidas, sin tener que deshacer el vínculo.' } },
          { certa: false, txt: { pt: '“Desconecte o Instagram da Página.”', es: '“Desconecta el Instagram de la Página.”' }, fb: { pt: 'Resolve, mas perde tudo o que a ligação dá (posts nos dois, insights juntos). Dá para ajustar só as mensagens ou o acesso do sócio.', es: 'Lo resuelve, pero pierde todo lo que da el vínculo (publicar en los dos, estadísticas juntas). Se puede ajustar solo los mensajes o el acceso del socio.' } },
          { certa: false, txt: { pt: '“Isso é um erro da Meta, vou abrir um chamado.”', es: '“Es un error de Meta, voy a abrir un caso.”' }, fb: { pt: 'Não é erro: a própria tela avisa que, ligados, quem cuida da Página pode ver as mensagens do Instagram.', es: 'No es un error: la propia pantalla avisa que, vinculados, quien cuida la Página puede ver los mensajes de Instagram.' } },
          { certa: false, txt: { pt: '“Me passa a senha do Instagram que eu arrumo.”', es: '“Pásame la contraseña de Instagram y lo arreglo.”' }, fb: { pt: 'Nunca peça senha. O ajuste é feito pela própria cliente, com você orientando.', es: 'Nunca pidas contraseña. El ajuste lo hace la propia clienta, contigo orientando.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Seu Instagram é conta profissional?', es: '¿Tu Instagram es cuenta profesional?' },
          { pt: 'Você tem controle total da Página?', es: '¿Tienes control total de la Página?' },
          { pt: 'A Página e o Instagram estão no mesmo portfólio?', es: '¿La Página y el Instagram están en el mismo portafolio?' }],
        conferir: [{ pt: 'Instagram profissional (Comercial ou Criador).', es: 'Instagram profesional (Comercial o Creador).' },
          { pt: 'Controle total da Página.', es: 'Control total de la Página.' },
          { pt: 'Os dois no mesmo portfólio (se não, primeiro organizar os portfólios).', es: 'Los dos en el mismo portafolio (si no, primero organizar los portafolios).' }],
        frase: { pt: 'Para ligar, você precisa do Instagram profissional, controle total da Página e os dois no mesmo portfólio. Depois de ligados, quem cuida de um pode cuidar dos dois, conforme o acesso de cada pessoa.', es: 'Para vincular, necesitas el Instagram profesional, control total de la Página y los dos en el mismo portafolio. Después de vinculados, quien cuida uno puede cuidar los dos, según el acceso de cada persona.' },
        passos: [{ pt: 'No portfólio: Configurações › Contas › Páginas › escolha a Página.', es: 'En el portafolio: Configuración › Cuentas › Páginas › elige la Página.' },
          { pt: 'Conectar ativos › Conta do Instagram › Entrar no Instagram.', es: 'Conectar activos › Cuenta de Instagram › Entrar en Instagram.' },
          { pt: 'Escolha se as mensagens do Instagram vão para a Caixa de Entrada › Continuar.', es: 'Elige si los mensajes de Instagram van a la Bandeja de entrada › Continuar.' },
          { pt: 'Entre com a conta do Instagram, confira o resumo e clique em Adicionar.', es: 'Entra con la cuenta de Instagram, revisa el resumen y haz clic en Agregar.' },
          { pt: '💡 Cenário alternativo: a Página está no portfólio de outra pessoa? Quem administra aquele portfólio remove a Página, e a cliente adiciona no dela como “Página existente”.', es: '💡 Escenario alternativo: ¿la Página está en el portafolio de otra persona? Quien administra ese portafolio quita la Página, y la clienta la agrega en el suyo como “Página existente”.' }],
        encaminhar: { pt: 'Se aparecer erro ao ligar e os três requisitos estão certos, oriente a seguir a Central de Ajuda da Meta para empresas (erros de conexão entre Instagram e Página).', es: 'Si aparece un error al vincular y los tres requisitos están bien, orienta a seguir el Centro de ayuda de Meta para empresas (errores de conexión entre Instagram y Página).' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/898752960195806', titulo: { pt: 'Como conectar ou desconectar sua conta profissional do Instagram e uma Página do Facebook', es: 'Cómo conectar o desconectar tu cuenta profesional de Instagram y una Página de Facebook' }, conferido: '14/10/2026' }
      ]
    }
  ],
  portfolio: [
    {
      id: '01', min: 6, status: 'pronta',
      titulo: { pt: 'O que é um portfólio?', es: '¿Qué es un portafolio?' },
      antes: { pt: 'Este é o começo da história: a Marina tem a Lojinha (o site) e um Instagram, mas ainda não usa as ferramentas da Meta.', es: 'Este es el comienzo de la historia: Marina tiene la Lojinha (el sitio) y un Instagram, pero todavía no usa las herramientas de Meta.' },
      gancho: { pt: '“Entendi o que é. E como eu crio o meu?” Vamos criar o portfólio da Marina.', es: '“Entendí qué es. ¿Y cómo creo el mío?” Vamos a crear el portafolio de Marina.' },
      objetivo: { pt: 'Entender o portfólio empresarial: a “pasta” que reúne os ativos da empresa (Página, Instagram, conta de anúncios, Pixel…) e as pessoas que trabalham neles.', es: 'Entender el portafolio comercial: la “carpeta” que reúne los activos de la empresa (Página, Instagram, cuenta publicitaria, Pixel…) y las personas que trabajan en ellos.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Oi! Quero anunciar minha lojinha, mas a Meta me pede um tal de “portfólio empresarial”. É uma loja nova? Vou perder meu Instagram? 😟', es: '¡Hola! Quiero anunciar mi tiendita, pero Meta me pide un tal “portafolio comercial”. ¿Es una tienda nueva? ¿Voy a perder mi Instagram? 😟' }],
          ['rafa', { pt: 'Oi, Marina! Calma, não é loja nova e você não perde nada. O portfólio é como uma pasta da sua empresa: ele junta, num lugar só, suas coisas da Meta.', es: '¡Hola, Marina! Tranquila, no es una tienda nueva y no pierdes nada. El portafolio es como una carpeta de tu empresa: junta, en un solo lugar, tus cosas de Meta.' }],
          ['rafa', { pt: 'Lá dentro ficam os ativos (sua Página, seu Instagram, a conta de anúncios, o Pixel…) e as pessoas que te ajudam, cada uma com o acesso certo.', es: 'Adentro están los activos (tu Página, tu Instagram, la cuenta publicitaria, el Pixel…) y las personas que te ayudan, cada una con el acceso correcto.' }],
          ['pixel', { pt: 'Uma regra importante: cada ativo pertence a UM portfólio só. Eu, por exemplo, vou morar no portfólio da Marina.', es: 'Una regla importante: cada activo pertenece a UN solo portafolio. Yo, por ejemplo, voy a vivir en el portafolio de Marina.' }],
          ['marina', { pt: 'Ahh, então é a pasta da minha empresa! Ufa. 😅', es: '¡Ahh, entonces es la carpeta de mi empresa! Uf. 😅' }]
        ],
        pontos: [
          { pt: '<b>O portfólio é a “pasta” da empresa</b> na Meta (antes se chamava Gerenciador de Negócios).', es: '<b>El portafolio es la “carpeta” de la empresa</b> en Meta (antes se llamaba Business Manager).' },
          { pt: '<b>Dentro dele:</b> os ativos (Página, Instagram, conta de anúncios, Pixel, catálogo) e as pessoas, cada uma com o acesso que precisa.', es: '<b>Adentro:</b> los activos (Página, Instagram, cuenta publicitaria, Pixel, catálogo) y las personas, cada una con el acceso que necesita.' },
          { pt: '<b>Um ativo, um portfólio:</b> a mesma Página não pode estar em dois portfólios.', es: '<b>Un activo, un portafolio:</b> la misma Página no puede estar en dos portafolios.' }
        ],
        notas: { pt: 'A cliente nova tem medo de “perder” o que já tem. Primeiro tranquilize; depois explique a pasta. No atendimento, o primeiro passo de quase todo caso é conferir EM QUAL portfólio a pessoa está.', es: 'La clienta nueva tiene miedo de “perder” lo que ya tiene. Primero tranquiliza; después explica la carpeta. En la atención, el primer paso de casi todo caso es revisar EN CUÁL portafolio está la persona.' }
      },
      ferramenta: 'pasta-portfolio',
      praticar: {
        texto: { pt: 'No simulador das Configurações do portfólio, o Pixel te mostra onde ficam as pessoas, os ativos e a segurança.', es: 'En el simulador de la Configuración del portafolio, el Pixel te muestra dónde están las personas, los activos y la seguridad.' },
        tour: 'conhecer-portfolio', pagina: 'meta-portfolio.html?exemplo=1'
      },
      atender: {
        cena: { pt: 'Eu criei 3 portfólios porque não achava o primeiro… e agora não sei em qual estão minhas coisas. 😵', es: 'Creé 3 portafolios porque no encontraba el primero… y ahora no sé en cuál están mis cosas. 😵' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Sem problema, vamos organizar! Você pode me dizer o nome de cada portfólio e o que aparece em Contas › Páginas e Contas de anúncios em cada um? Assim descobrimos onde está cada coisa.”', es: '“¡No hay problema, vamos a organizar! ¿Puedes decirme el nombre de cada portafolio y lo que aparece en Cuentas › Páginas y Cuentas publicitarias en cada uno? Así descubrimos dónde está cada cosa.”' }, fb: { pt: 'Isso! Primeiro descobrir onde está cada ativo (cada um mora em um portfólio só). Depois decidem qual portfólio vai ser o principal.', es: '¡Eso! Primero descubrir dónde está cada activo (cada uno vive en un solo portafolio). Después deciden cuál portafolio va a ser el principal.' } },
          { certa: false, txt: { pt: '“Apague os três e crie um novo.”', es: '“Borra los tres y crea uno nuevo.”' }, fb: { pt: 'Não! Sem saber onde estão os ativos, apagar pode bagunçar ainda mais. Primeiro descubra o que tem em cada um.', es: '¡No! Sin saber dónde están los activos, borrar puede desordenar aún más. Primero descubre qué hay en cada uno.' } },
          { certa: false, txt: { pt: '“Coloque a mesma Página nos três, assim não perde.”', es: '“Pon la misma Página en los tres, así no la pierdes.”' }, fb: { pt: 'Não dá: cada ativo pertence a UM portfólio só.', es: 'No se puede: cada activo pertenece a UN solo portafolio.' } },
          { certa: false, txt: { pt: '“Isso não é com o suporte.”', es: '“Eso no es con el soporte.”' }, fb: { pt: 'É sim! Organizar onde estão os ativos é um atendimento comum e você consegue guiar.', es: '¡Sí lo es! Organizar dónde están los activos es una atención común y puedes guiarla.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual é o nome do portfólio que você está usando? (aparece no canto superior esquerdo das Configurações)', es: '¿Cuál es el nombre del portafolio que estás usando? (aparece arriba a la izquierda en la Configuración)' },
          { pt: 'O que aparece em Contas › Páginas e Contas de anúncios?', es: '¿Qué aparece en Cuentas › Páginas y Cuentas publicitarias?' },
          { pt: 'Você tem mais de um portfólio?', es: '¿Tienes más de un portafolio?' }],
        conferir: [{ pt: 'Em qual portfólio o cliente está (o nome no topo).', es: 'En qué portafolio está el cliente (el nombre arriba).' },
          { pt: 'Quais ativos estão nesse portfólio.', es: 'Qué activos están en ese portafolio.' },
          { pt: 'Lembrar: cada ativo mora em UM portfólio.', es: 'Recordar: cada activo vive en UN portafolio.' }],
        frase: { pt: 'O portfólio é como a pasta da sua empresa na Meta: ele junta seus ativos (Página, Instagram, conta de anúncios, Pixel) e as pessoas que te ajudam. Você não perde nada do que já tem.', es: 'El portafolio es como la carpeta de tu empresa en Meta: junta tus activos (Página, Instagram, cuenta publicitaria, Pixel) y las personas que te ayudan. No pierdes nada de lo que ya tienes.' },
        encaminhar: { pt: 'Se o cliente perdeu o acesso ao portfólio ou à conta pessoal, siga os caminhos oficiais de recuperação de acesso da Meta (Central de Ajuda).', es: 'Si el cliente perdió el acceso al portafolio o a la cuenta personal, sigue los caminos oficiales de recuperación de acceso de Meta (Centro de ayuda).' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/1710077379203657', titulo: { pt: 'Criar um portfólio empresarial (o que é e o que reúne)', es: 'Crear un portafolio comercial (qué es y qué reúne)' }, conferido: '14/10/2026' },
        { url: 'https://www.facebook.com/business/help/720478807965744', titulo: { pt: 'Adicionar uma Página ao portfólio (cada ativo em um portfólio só)', es: 'Agregar una Página al portafolio (cada activo en un solo portafolio)' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '02', min: 6, status: 'pronta',
      titulo: { pt: 'Criar o portfólio', es: 'Crear el portafolio' },
      antes: { pt: 'A Marina entendeu que o portfólio é a pasta da empresa. Agora ela quer o dela.', es: 'Marina entendió que el portafolio es la carpeta de la empresa. Ahora quiere el suyo.' },
      gancho: { pt: '“Criei! Meu sobrinho vai me ajudar com as postagens. Como dou acesso para ele?” Vamos ver pessoas e acessos.', es: '“¡Lo creé! Mi sobrino me va a ayudar con las publicaciones. ¿Cómo le doy acceso?” Vamos a ver personas y accesos.' },
      objetivo: { pt: 'Conhecer o passo a passo para criar o portfólio e os erros comuns (nome com caracteres especiais).', es: 'Conocer el paso a paso para crear el portafolio y los errores comunes (nombre con caracteres especiales).' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Fui criar o portfólio e deu erro no nome! Coloquei “Lojinha da Marina (oficial)”. 😤', es: '¡Fui a crear el portafolio y dio error en el nombre! Puse “Lojinha da Marina (oficial)”. 😤' }],
          ['rafa', { pt: 'Isso acontece! Os parênteses dão o erro “não pode conter caracteres especiais”. Tira os parênteses que passa.', es: '¡Pasa! Los paréntesis dan el error “no puede contener caracteres especiales”. Quita los paréntesis y pasa.' }],
          ['rafa', { pt: 'E o nome deve ser o nome público da sua empresa, porque fica visível na Meta. Depois vêm seus dados de contato (nome e email comercial), os ativos e as pessoas.', es: 'Y el nombre debe ser el nombre público de tu empresa, porque queda visible en Meta. Después vienen tus datos de contacto (nombre y correo comercial), los activos y las personas.' }],
          ['pixel', { pt: 'Quem cria o portfólio ganha controle total. É a Marina quem manda na pasta!', es: 'Quien crea el portafolio recibe control total. ¡Marina es quien manda en la carpeta!' }]
        ],
        pontos: [
          { pt: '<b>Nome:</b> o nome público da empresa. Os parênteses dão erro de caracteres especiais (visto de verdade).', es: '<b>Nombre:</b> el nombre público de la empresa. Los paréntesis dan error de caracteres especiales (visto de verdad).' },
          { pt: '<b>Contato:</b> nome, sobrenome e email comercial de quem cria (vira administrador).', es: '<b>Contacto:</b> nombre, apellido y correo comercial de quien crea (se vuelve administrador).' },
          { pt: '<b>Depois:</b> escolher os ativos, chamar pessoas (pode pular) e confirmar. Dá para editar tudo mais tarde.', es: '<b>Después:</b> elegir los activos, invitar personas (se puede saltar) y confirmar. Se puede editar todo más tarde.' }
        ],
        notas: { pt: 'O erro dos parênteses aconteceu de verdade quando criamos o portfólio da Lojinha em 13/10/2026. Use isso: é um caso real e comum.', es: 'El error de los paréntesis pasó de verdad cuando creamos el portafolio de la Lojinha el 13/10/2026. Úsalo: es un caso real y común.' }
      },
      ferramenta: 'nome-portfolio',
      praticar: {
        texto: { pt: 'No simulador, o Pixel te guia para criar o portfólio da Marina do zero, etapa por etapa (e você ainda pode testar o erro dos parênteses).', es: 'En el simulador, el Pixel te guía para crear el portafolio de Marina desde cero, etapa por etapa (y aún puedes probar el error de los paréntesis).' },
        tour: 'criar-portfolio', pagina: 'meta-portfolio.html?zerar=1'
      },
      atender: {
        cena: { pt: 'Está dando “O nome do portfólio empresarial não pode conter caracteres especiais”. Coloquei “Lojinha da Marina (oficial) ✨”.', es: 'Me sale “El nombre del portafolio comercial no puede contener caracteres especiales”. Puse “Lojinha da Marina (oficial) ✨”.' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Tira os parênteses e o emoji e deixa só o nome público da empresa, por exemplo: Lojinha da Marina. Aí ele passa.”', es: '“Quita los paréntesis y el emoji y deja solo el nombre público de la empresa, por ejemplo: Lojinha da Marina. Así pasa.”' }, fb: { pt: 'Isso! Resolveu junto, na hora, e ainda lembrou que o nome deve ser o nome público da empresa.', es: '¡Eso! Lo resolviste junto, al momento, y además recordaste que el nombre debe ser el nombre público de la empresa.' } },
          { certa: false, txt: { pt: '“É um erro da Meta, tente amanhã.”', es: '“Es un error de Meta, intenta mañana.”' }, fb: { pt: 'Não. O erro diz exatamente o problema: tem caractere especial no nome.', es: 'No. El error dice exactamente el problema: hay un carácter especial en el nombre.' } },
          { certa: false, txt: { pt: '“Coloque qualquer nome, depois ninguém vê.”', es: '“Pon cualquier nombre, después nadie lo ve.”' }, fb: { pt: 'Não: o nome fica visível na Meta e deve ser o nome público da empresa.', es: 'No: el nombre queda visible en Meta y debe ser el nombre público de la empresa.' } },
          { certa: false, txt: { pt: '“Crie com o email de outra pessoa.”', es: '“Créalo con el correo de otra persona.”' }, fb: { pt: 'Não! Quem cria vira administrador com controle total. Tem que ser a própria dona (ou quem administra a empresa).', es: '¡No! Quien crea se vuelve administrador con control total. Tiene que ser la propia dueña (o quien administra la empresa).' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Qual nome você colocou no portfólio?', es: '¿Qué nombre pusiste en el portafolio?' },
          { pt: 'Qual mensagem de erro aparece?', es: '¿Qué mensaje de error aparece?' },
          { pt: 'Você é a dona (ou quem administra) a empresa?', es: '¿Eres la dueña (o quien administra) la empresa?' }],
        conferir: [{ pt: 'O nome não tem parênteses, emojis nem símbolos.', es: 'El nombre no tiene paréntesis, emojis ni símbolos.' },
          { pt: 'O nome é o nome público da empresa.', es: 'El nombre es el nombre público de la empresa.' },
          { pt: 'Quem está criando é quem vai administrar (vira controle total).', es: 'Quien está creando es quien va a administrar (recibe control total).' }],
        frase: { pt: 'Tira os parênteses e o emoji e deixa só o nome público da empresa, por exemplo: Lojinha da Marina. Aí ele passa.', es: 'Quita los paréntesis y el emoji y deja solo el nombre público de la empresa, por ejemplo: Lojinha da Marina. Así pasa.' },
        passos: [{ pt: 'Abra o Meta Business Suite e escolha “Criar um portfólio empresarial”.', es: 'Abre Meta Business Suite y elige “Crear un portafolio comercial”.' },
          { pt: 'Digite o nome público da empresa (sem parênteses ou emojis).', es: 'Escribe el nombre público de la empresa (sin paréntesis ni emojis).' },
          { pt: 'Preencha seu nome, sobrenome e email comercial e clique em Criar.', es: 'Completa tu nombre, apellido y correo comercial y haz clic en Crear.' },
          { pt: 'Escolha os ativos (ou pule), chame pessoas (ou pule) e confirme.', es: 'Elige los activos (o salta), invita personas (o salta) y confirma.' }],
        encaminhar: { pt: 'Se a criação falhar mesmo com o nome certo, oriente a seguir a Central de Ajuda da Meta para criar o portfólio.', es: 'Si la creación falla incluso con el nombre correcto, orienta a seguir el Centro de ayuda de Meta para crear el portafolio.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/1710077379203657', titulo: { pt: 'Criar um portfólio empresarial no Meta Business Suite', es: 'Crear un portafolio comercial en Meta Business Suite' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '03', min: 7, status: 'pronta',
      titulo: { pt: 'Pessoas e acessos', es: 'Personas y accesos' },
      antes: { pt: 'O portfólio da Marina está criado, e ela tem controle total.', es: 'El portafolio de Marina está creado, y ella tiene control total.' },
      gancho: { pt: '“E minha Página? Ela está no portfólio de outra pessoa!” Vamos ver os ativos.', es: '“¿Y mi Página? ¡Está en el portafolio de otra persona!” Vamos a ver los activos.' },
      objetivo: { pt: 'Saber dar o acesso certo a cada pessoa: controle total, acesso básico com ativos atribuídos, ou parceiro.', es: 'Saber dar el acceso correcto a cada persona: control total, acceso básico con activos asignados, o socio.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Meu sobrinho vai fazer as postagens da Página. Dou controle total pra ele, né? É mais fácil. 😊', es: 'Mi sobrino va a hacer las publicaciones de la Página. Le doy control total, ¿no? Es más fácil. 😊' }],
          ['rafa', { pt: 'Mais fácil, mas não mais seguro! Com controle total ele mexeria em tudo, até em quem tem acesso. A Meta recomenda dar só o acesso que a pessoa precisa.', es: '¡Más fácil, pero no más seguro! Con control total tocaría todo, hasta quién tiene acceso. Meta recomienda dar solo el acceso que la persona necesita.' }],
          ['rafa', { pt: 'Você convida ele em Pessoas. Ele entra com acesso básico, que é o padrão, e você atribui só a Página para ele trabalhar.', es: 'Lo invitas en Personas. Entra con acceso básico, que es el predeterminado, y le asignas solo la Página para que trabaje.' }],
          ['pixel', { pt: 'E se for uma agência, de outra empresa? Aí ela entra como parceiro, não como pessoa.', es: '¿Y si es una agencia, de otra empresa? Entonces entra como socio, no como persona.' }]
        ],
        pontos: [
          { pt: '<b>Acesso total (“Tudo”):</b> para quem administra a empresa. Mexe em tudo, dá acesso total a outros e pode até excluir o portfólio.', es: '<b>Acceso total (“Todo”):</b> para quien administra la empresa. Toca todo, da acceso total a otros y puede hasta eliminar el portafolio.' },
          { pt: '<b>Acesso básico (padrão) + ativos atribuídos:</b> a pessoa trabalha só no que você der, com acesso parcial ou total àquele ativo.', es: '<b>Acceso básico (predeterminado) + activos asignados:</b> la persona trabaja solo en lo que le des, con acceso parcial o total a ese activo.' },
          { pt: '<b>Parceiro:</b> outra empresa (como uma agência) entra como parceiro. E ative a autenticação de dois fatores.', es: '<b>Socio:</b> otra empresa (como una agencia) entra como socio. Y activa la autenticación en dos pasos.' }
        ],
        notas: { pt: 'Erro clássico: dar controle total para todo mundo “porque é mais fácil”. Mostre o risco com calma. As 4 etapas do convite no simulador foram conferidas na tela real (14/10/2026). Na tela real, o acesso total aparece como “Tudo · Gerenciar” e avisa que a pessoa pode até excluir o portfólio.', es: 'Error clásico: dar control total a todos “porque es más fácil”. Muestra el riesgo con calma. Las 4 etapas de la invitación en el simulador se revisaron en la pantalla real (14/10/2026). En la pantalla real, el acceso total aparece como “Todo · Gestionar” y avisa que la persona puede hasta eliminar el portafolio.' }
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
          { certa: false, txt: { pt: '“Exclui o portfólio e cria outro só pra ele.”', es: '“Borra el portafolio y crea otro solo para él.”' }, fb: { pt: 'Não precisa! É só ajustar o acesso dele em Pessoas.', es: '¡No hace falta! Solo hay que ajustar su acceso en Personas.' } }
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
        { url: 'https://www.facebook.com/business/help/2169003770027706', titulo: { pt: 'Adicionar pessoas ao portfólio e atribuir ativos', es: 'Agregar personas al portafolio y asignar activos' }, conferido: '14/10/2026' },
        { url: 'https://www.facebook.com/business/help/1717412048538897', titulo: { pt: 'Dar acesso a um parceiro (controle total ou acesso parcial)', es: 'Dar acceso a un socio (control total o acceso parcial)' }, conferido: '14/10/2026' }
      ]
    },
    {
      id: '04', min: 8, status: 'pronta',
      titulo: { pt: 'Os ativos: Página e conta de anúncios', es: 'Los activos: Página y cuenta publicitaria' },
      antes: { pt: 'A Marina já tem portfólio e o sobrinho com o acesso certo.', es: 'Marina ya tiene portafolio y al sobrino con el acceso correcto.' },
      gancho: { pt: '“Portfólio pronto! Mas meu Instagram é pessoal… preciso mudar alguma coisa?” Próximo módulo: Instagram para empresas.', es: '“¡Portafolio listo! Pero mi Instagram es personal… ¿tengo que cambiar algo?” Próximo módulo: Instagram para empresas.' },
      objetivo: { pt: 'Saber trazer uma Página que está em outro portfólio (pelos caminhos oficiais) e criar a conta de anúncios certa (moeda e fuso não mudam depois).', es: 'Saber traer una Página que está en otro portafolio (por los caminos oficiales) y crear la cuenta publicitaria correcta (moneda y zona horaria no cambian después).' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Fui adicionar minha Página e ela está no portfólio da minha esposa, que eu usava antes! E agora? 😰', es: '¡Fui a agregar mi Página y está en el portafolio de mi esposa, que usaba antes! ¿Y ahora? 😰' }],
          ['rafa', { pt: 'Tem jeito! Não existe transferência direta, mas é simples: quem administra o portfólio da sua esposa remove a Página de lá, e aí você adiciona no seu, como “Página existente”.', es: '¡Tiene solución! No existe transferencia directa, pero es simple: quien administra el portafolio de tu esposa quita la Página de ahí, y entonces la agregas en el tuyo, como “Página existente”.' }],
          ['pixel', { pt: 'Se a Página tem Instagram conectado, o Instagram vai junto para o portfólio novo.', es: 'Si la Página tiene Instagram conectado, el Instagram va junto al nuevo portafolio.' }],
          ['marina', { pt: 'Ufa! E pra anunciar, preciso de uma conta de anúncios, né?', es: '¡Uf! ¿Y para anunciar necesito una cuenta publicitaria, no?' }],
          ['rafa', { pt: 'Isso! E atenção na hora de criar: moeda e fuso horário não podem ser trocados depois. Escolha real e o horário de São Paulo.', es: '¡Eso! Y atención al crearla: la moneda y la zona horaria no se pueden cambiar después. Elige real y el horario de São Paulo.' }]
        ],
        pontos: [
          { pt: '<b>Página em outro portfólio:</b> quem administra aquele portfólio remove a Página; depois a dona adiciona no portfólio dela. Não existe transferência direta.', es: '<b>Página en otro portafolio:</b> quien administra ese portafolio quita la Página; después la dueña la agrega en su portafolio. No existe transferencia directa.' },
          { pt: '<b>Agência?</b> Não precisa mudar o dono: ela pede “acesso compartilhado” à Página do cliente.', es: '<b>¿Agencia?</b> No hace falta cambiar el dueño: pide “acceso compartido” a la Página del cliente.' },
          { pt: '<b>Conta de anúncios:</b> moeda e fuso horário NÃO mudam depois, e a conta não pode ser removida do portfólio. Criar não cobra nada.', es: '<b>Cuenta publicitaria:</b> moneda y zona horaria NO cambian después, y la cuenta no se puede quitar del portafolio. Crearla no cobra nada.' }
        ],
        notas: { pt: 'O caso da Página “presa” em outro portfólio aconteceu de verdade com a nossa Lojinha. O fuso e a moeda errados (o padrão é dólar e horário de Los Angeles) são erros muito comuns de cliente nova.', es: 'El caso de la Página “atrapada” en otro portafolio pasó de verdad con nuestra Lojinha. La zona y la moneda equivocadas (lo predeterminado es dólar y horario de Los Ángeles) son errores muy comunes de clienta nueva.' }
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
          { certa: false, txt: { pt: '“Remove a conta do portfólio e cria de novo com o mesmo nome.”', es: '“Quita la cuenta del portafolio y créala otra vez con el mismo nombre.”' }, fb: { pt: 'Não dá: depois de adicionada, a conta de anúncios não pode ser removida do portfólio. Basta criar uma nova e usar a nova.', es: 'No se puede: después de agregada, la cuenta publicitaria no se puede quitar del portafolio. Basta crear una nueva y usar la nueva.' } },
          { certa: false, txt: { pt: '“Tanto faz, a Meta converte sozinha.”', es: '“Da igual, Meta lo convierte sola.”' }, fb: { pt: 'Não é assim: os relatórios e o orçamento ficam na moeda da conta. Por isso a escolha certa importa.', es: 'No es así: los informes y el presupuesto quedan en la moneda de la cuenta. Por eso la elección correcta importa.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Em qual portfólio a Página está hoje? Quem administra esse portfólio?', es: '¿En qué portafolio está la Página hoy? ¿Quién administra ese portafolio?' },
          { pt: 'Você é a dona da Página ou uma agência trabalhando para um cliente?', es: '¿Eres la dueña de la Página o una agencia trabajando para un cliente?' },
          { pt: 'Qual moeda e fuso aparecem na conta de anúncios?', es: '¿Qué moneda y zona horaria aparecen en la cuenta publicitaria?' }],
        conferir: [{ pt: 'Dono da Página: remove de um portfólio e adiciona no outro (não há transferência direta).', es: 'Dueño de la Página: la quita de un portafolio y la agrega en el otro (no hay transferencia directa).' },
          { pt: 'Agência: pede acesso compartilhado, sem mudar o dono.', es: 'Agencia: pide acceso compartido, sin cambiar el dueño.' },
          { pt: 'Conta de anúncios com a moeda e o fuso certos (não mudam depois).', es: 'Cuenta publicitaria con la moneda y la zona horaria correctas (no cambian después).' }],
        frase: { pt: 'A moeda e o fuso não podem ser trocados depois que a conta é criada. O caminho é criar uma nova conta de anúncios, escolhendo real e o fuso de São Paulo, e usar essa nos seus anúncios.', es: 'La moneda y la zona horaria no se pueden cambiar después de crear la cuenta. El camino es crear una nueva cuenta publicitaria, eligiendo real y la zona de São Paulo, y usar esa en tus anuncios.' },
        passos: [{ pt: 'Página em outro portfólio: quem administra aquele portfólio vai em Configurações › Contas › Páginas, seleciona a Página e clica em Remover.', es: 'Página en otro portafolio: quien administra ese portafolio va a Configuración › Cuentas › Páginas, selecciona la Página y hace clic en Quitar.' },
          { pt: 'Depois, no seu portfólio: Contas › Páginas › Adicionar › “Adicionar uma Página do Facebook existente”.', es: 'Después, en tu portafolio: Cuentas › Páginas › Agregar › “Agregar una Página de Facebook existente”.' },
          { pt: 'Conta de anúncios: Contas › Contas de anúncios › Adicionar › Criar uma nova conta de anúncios (escolha a moeda e o fuso certos).', es: 'Cuenta publicitaria: Cuentas › Cuentas publicitarias › Agregar › Crear una nueva cuenta publicitaria (elige la moneda y la zona horaria correctas).' }],
        encaminhar: { pt: 'Se quem administra o outro portfólio não responde ou não pode remover a Página, oriente a seguir a Central de Ajuda da Meta para Páginas.', es: 'Si quien administra el otro portafolio no responde o no puede quitar la Página, orienta a seguir el Centro de ayuda de Meta para Páginas.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/531142997352616', titulo: { pt: 'Remover uma Página do portfólio (e adicionar em outro)', es: 'Quitar una Página del portafolio (y agregarla en otro)' }, conferido: '14/10/2026' },
        { url: 'https://www.facebook.com/business/help/720478807965744', titulo: { pt: 'Adicionar uma Página ao portfólio', es: 'Agregar una Página al portafolio' }, conferido: '14/10/2026' }
      ]
    }
  ],
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
        conferir: [{ pt: 'O Pixel foi criado no portfólio certo (o da empresa do cliente).', es: 'El Pixel se creó en el portafolio correcto (el de la empresa del cliente).' },
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
      titulo: { pt: 'Turbinar ou Gerenciador de Anúncios?', es: '¿Impulsar o Administrador de anuncios?' },
      antes: { pt: 'A Marina tem Página, Instagram, conta de anúncios e o Pixel no site. Ela publicou um post e viu um botão azul: “Turbinar”.', es: 'Marina tiene Página, Instagram, cuenta publicitaria y el Pixel en el sitio. Publicó un post y vio un botón azul: “Impulsar”.' },
      gancho: { pt: '“Turbinei e deu certo! Mas eu quero vender de verdade, medindo as compras.” Vamos conhecer o Gerenciador de Anúncios e seus três níveis.', es: '“¡Impulsé y funcionó! Pero quiero vender de verdad, midiendo las compras.” Vamos a conocer el Administrador de anuncios y sus tres niveles.' },
      objetivo: { pt: 'Saber quando o Turbinar basta e quando é hora do Gerenciador, e fazer um turbinamento sem cair nas pegadinhas.', es: 'Saber cuándo basta Impulsar y cuándo es hora del Administrador, y hacer un impulso sin caer en las trampas.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Apareceu um botão “Turbinar” no meu post. É a mesma coisa que o Gerenciador de Anúncios? 🤔', es: 'Apareció un botón “Impulsar” en mi post. ¿Es lo mismo que el Administrador de anuncios? 🤔' }],
          ['rafa', { pt: 'Não é igual. Turbinar pega um post que já existe e transforma em anúncio, em poucos passos: meta, botão, público, duração e orçamento. É ótimo para dar uma força num post. O Gerenciador é onde você monta campanhas de verdade, com objetivo, conjunto de anúncios e anúncio.', es: 'No es igual. Impulsar toma un post que ya existe y lo convierte en anuncio, en pocos pasos: meta, botón, público, duración y presupuesto. Es genial para darle fuerza a un post. El Administrador es donde armas campañas de verdad, con objetivo, conjunto de anuncios y anuncio.' }],
          ['marina', { pt: 'E se o meu post for só a foto de perfil?', es: '¿Y si mi post es solo la foto de perfil?' }],
          ['rafa', { pt: 'Foto de perfil não pode ser turbinada. A saída é publicar a foto como um post novo e turbinar esse post.', es: 'La foto de perfil no se puede impulsar. La salida es publicar la foto como un post nuevo e impulsar ese post.' }],
          ['pixel', { pt: 'Pegadinha real: ao trocar a meta no Turbinar, o botão do anúncio não troca sozinho. Confira a prévia antes de publicar.', es: 'Trampa real: al cambiar la meta en Impulsar, el botón del anuncio no cambia solo. Revisa la vista previa antes de publicar.' }]
        ],
        pontos: [
          { pt: '<b>Turbinar:</b> transforma um <b>post que já existe</b> em anúncio, em poucos campos. Bom para engajamento, mensagens ou ligações.', es: '<b>Impulsar:</b> convierte un <b>post que ya existe</b> en anuncio, en pocos campos. Bueno para interacción, mensajes o llamadas.' },
          { pt: '<b>Gerenciador de Anúncios:</b> campanha › conjunto › anúncio. É onde entram o objetivo Vendas, o conjunto de dados (Pixel) e os testes de público.', es: '<b>Administrador de anuncios:</b> campaña › conjunto › anuncio. Es donde entran el objetivo Ventas, el conjunto de datos (Pixel) y las pruebas de público.' },
          { pt: '<b>Nem todo post pode ser turbinado:</b> foto de perfil, rascunho, álbum e post compartilhado, por exemplo, não podem.', es: '<b>No todo post se puede impulsar:</b> foto de perfil, borrador, álbum y post compartido, por ejemplo, no se pueden.' }
        ],
        notas: { pt: 'Fontes: Central de Ajuda da Meta, “Sobre os posts turbinados” e “Tipos de posts que não podem ser turbinados na sua Página do Facebook” (lidas em 16/10/2026). As telas do Turbinar foram vistas de verdade em 15/10/2026, e um anúncio de teste foi publicado de verdade (R$ 5,27 por 1 dia). A lista de metas do Turbinar não tem o objetivo Vendas; ele aparece no Gerenciador (e no “Criar anúncio” do Business Suite).', es: 'Fuentes: Centro de ayuda de Meta, “Acerca de las publicaciones impulsadas” y “Tipos de publicaciones que no se pueden impulsar en tu Página de Facebook” (leídas el 16/10/2026). Las pantallas de Impulsar se vieron de verdad el 15/10/2026, y se publicó de verdad un anuncio de prueba (R$ 5,27 por 1 día). La lista de metas de Impulsar no tiene el objetivo Ventas; aparece en el Administrador (y en “Crear anuncio” de Business Suite).' }
      },
      ferramenta: 'turbinar-ou-gerenciador',
      praticar: {
        texto: { pt: 'No simulador do Turbinar, o Pixel te leva para turbinar o post de teste da Marina: meta, botão, duração e orçamento, até o “em análise”.', es: 'En el simulador de Impulsar, el Pixel te lleva a impulsar el post de prueba de Marina: meta, botón, duración y presupuesto, hasta el “en revisión”.' },
        tour: 'turbinar-post', pagina: 'meta-turbinar.html?zerar=1'
      },
      atender: {
        cena: { pt: 'O botão Turbinar não aparece no meu post! E quando eu clico em Criar anúncio, diz que eu não tenho conteúdo. Está tudo quebrado! 😤', es: '¡El botón Impulsar no aparece en mi post! Y cuando hago clic en Crear anuncio, dice que no tengo contenido. ¡Está todo roto! 😤' },
        pergunta: { pt: 'O que você responde?', es: '¿Qué respondes?' },
        opcoes: [
          { certa: true, txt: { pt: '“Vamos ver que tipo de post é. Posts de troca de foto de perfil ou capa, rascunhos, álbuns e posts compartilhados não podem ser turbinados. Se for isso, publique a foto como um post novo: ele ganha o botão Turbinar.”', es: '“Veamos qué tipo de post es. Los posts de cambio de foto de perfil o portada, borradores, álbumes y posts compartidos no se pueden impulsar. Si es eso, publica la foto como un post nuevo: gana el botón Impulsar.”' }, fb: { pt: 'Isso! Você identificou a causa provável, citou os tipos que não turbinam e deu a saída.', es: '¡Eso! Identificaste la causa probable, citaste los tipos que no se impulsan y diste la salida.' } },
          { certa: false, txt: { pt: '“Isso é um erro da Meta. Espere um dia e tente de novo.”', es: '“Es un error de Meta. Espera un día e intenta de nuevo.”' }, fb: { pt: 'Não é erro: a Meta limita os tipos de post que podem ser turbinados. Esperar não resolve.', es: 'No es un error: Meta limita los tipos de post que se pueden impulsar. Esperar no lo resuelve.' } },
          { certa: false, txt: { pt: '“Adicione mais saldo na conta de anúncios.”', es: '“Agrega más saldo a la cuenta publicitaria.”' }, fb: { pt: 'Saldo não faz o botão aparecer: o problema é o tipo de post.', es: 'El saldo no hace aparecer el botón: el problema es el tipo de post.' } },
          { certa: false, txt: { pt: '“Troque a conta de anúncios por outra.”', es: '“Cambia la cuenta publicitaria por otra.”' }, fb: { pt: 'Exagero: antes de mexer em contas, confira o tipo de post.', es: 'Exagerado: antes de tocar cuentas, revisa el tipo de post.' } }
        ]
      },
      cola: {
        perguntas: [{ pt: 'Que tipo de post é: foto normal, foto de perfil ou capa, rascunho, álbum, compartilhado?', es: '¿Qué tipo de post es: foto normal, foto de perfil o portada, borrador, álbum, compartido?' },
          { pt: 'O post está publicado na Página (não em rascunho)?', es: '¿El post está publicado en la Página (no en borrador)?' },
          { pt: 'A conta de anúncios tem telefone verificado e saldo?', es: '¿La cuenta publicitaria tiene teléfono verificado y saldo?' }],
        conferir: [{ pt: 'Foto de perfil, rascunho, álbum e post compartilhado não podem ser turbinados.', es: 'Foto de perfil, borrador, álbum y post compartido no se pueden impulsar.' },
          { pt: 'Ao trocar a meta, conferir o botão do anúncio na prévia.', es: 'Al cambiar la meta, revisar el botón del anuncio en la vista previa.' },
          { pt: 'Sem telefone verificado a tela avisa e não deixa veicular.', es: 'Sin teléfono verificado la pantalla avisa y no deja publicar.' }],
        frase: { pt: 'Nem todo post pode ser turbinado: foto de perfil, rascunho, álbum e post compartilhado não podem. Se for foto de perfil, publique como um post novo e turbine esse post.', es: 'No todo post se puede impulsar: foto de perfil, borrador, álbum y post compartido no se pueden. Si es foto de perfil, publícala como un post nuevo e impulsa ese post.' },
        passos: [{ pt: 'No Business Suite, abra Conteúdo › Posts e reels.', es: 'En Business Suite, abre Contenido › Posts y reels.' },
          { pt: 'Ache o post publicado e clique em Turbinar.', es: 'Encuentra el post publicado y haz clic en Impulsar.' },
          { pt: 'Escolha a meta, o botão, a duração e o orçamento, confira a prévia e clique em Publicar.', es: 'Elige la meta, el botón, la duración y el presupuesto, revisa la vista previa y haz clic en Publicar.' }],
        encaminhar: { pt: 'Se o post parece turbinável e o botão não aparece, siga a Central de Ajuda da Meta: “Solucionar problemas de posts que não podem ser turbinados na sua Página do Facebook”.', es: 'Si el post parece poder impulsarse y el botón no aparece, sigue el Centro de ayuda de Meta: “Solucionar problemas de publicaciones que no se pueden impulsar en tu Página de Facebook”.' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/240208966080581', titulo: { pt: 'Sobre os posts turbinados', es: 'Acerca de las publicaciones impulsadas' }, conferido: '16/10/2026' },
        { url: 'https://www.facebook.com/business/help/244044399504197', titulo: { pt: 'Tipos de posts que não podem ser turbinados na sua Página do Facebook', es: 'Tipos de publicaciones que no se pueden impulsar en tu Página de Facebook' }, conferido: '16/10/2026' }
      ]
    },
    {
      id: '02', min: 6, status: 'pronta',
      titulo: { pt: 'Campanha, conjunto e anúncio', es: 'Campaña, conjunto y anuncio' },
      antes: { pt: 'A Marina já turbinou um post e viu anúncio de verdade rodando. Agora quer o Gerenciador de Anúncios, onde se controla tudo.', es: 'Marina ya impulsó un post y vio un anuncio de verdad corriendo. Ahora quiere el Administrador de anuncios, donde se controla todo.' },
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
          { pt: '<b>Campanha:</b> o objetivo (Vendas, Tráfego…) e o tipo de compra (Leilão). É a meta geral.', es: '<b>Campaña:</b> el objetivo (Ventas, Tráfico…) y el tipo de compra (Subasta). Es la meta general.' },
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
        notas: { pt: 'Telas vistas de verdade em 14–15/10/2026 (conta de aula, sempre em rascunho). A tela de “Conferir e publicar” ainda é montada a partir da documentação (a conferir). Anúncio em análise e anúncio ativo foram vistos em 15–16/10/2026 no Turbinar.', es: 'Pantallas vistas de verdad el 14–15/10/2026 (cuenta de aula, siempre en borrador). La pantalla de “Revisar y publicar” todavía se arma a partir de la documentación (por confirmar). Anuncio en revisión y anuncio activo se vieron el 15–16/10/2026 en Impulsar.' }
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
          { certa: true, txt: { pt: '“Conjunto de dados é o nome novo do Pixel: ele diz à campanha onde medir as compras do seu site. Abra o conjunto de anúncios, escolha o Pixel da loja ali, e a tela deixa publicar. Se ele não aparecer na lista, conferimos se está no portfólio e na conta certos.”', es: '“Conjunto de datos es el nombre nuevo del Pixel: le dice a la campaña dónde medir las compras de tu sitio. Abre el conjunto de anuncios, elige el Pixel de la tienda ahí, y la pantalla deja publicar. Si no aparece en la lista, revisamos si está en el portafolio y en la cuenta correctos.”' }, fb: { pt: 'Isso! Você traduziu o termo, mostrou onde resolver e já pensou no caso do Pixel não aparecer.', es: '¡Eso! Tradujiste el término, mostraste dónde resolverlo y ya pensaste en el caso de que el Pixel no aparezca.' } },
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
          { pt: 'O Pixel está no portfólio e na conta de anúncios corretos.', es: 'El Pixel está en el portafolio y en la cuenta publicitaria correctos.' }],
        frase: { pt: 'Conjunto de dados é o nome novo do Pixel. Em campanha de Vendas, ele diz onde medir as compras do site. Abra o conjunto de anúncios, escolha o Pixel da loja e depois confira a Página no anúncio.', es: 'Conjunto de datos es el nombre nuevo del Pixel. En una campaña de Ventas, dice dónde medir las compras del sitio. Abre el conjunto de anuncios, elige el Pixel de la tienda y luego revisa la Página en el anuncio.' },
        passos: [{ pt: 'No conjunto de anúncios, em Conversão, escolha o conjunto de dados.', es: 'En el conjunto de anuncios, en Conversión, elige el conjunto de datos.' },
          { pt: 'No anúncio, em Identidade, escolha a Página do Facebook.', es: 'En el anuncio, en Identidad, elige la Página de Facebook.' },
          { pt: 'Clique em Publicar (ou em Fechar para guardar o rascunho).', es: 'Haz clic en Publicar (o en Cerrar para guardar el borrador).' }],
        encaminhar: { pt: 'Se o Pixel não aparece na lista ou a Página não deixa escolher, revise permissões e o portfólio e siga a Central de Ajuda da Meta (solução de problemas ao criar ou publicar um anúncio).', es: 'Si el Pixel no aparece en la lista o la Página no deja elegirse, revisa permisos y el portafolio y sigue el Centro de ayuda de Meta (solución de problemas al crear o publicar un anuncio).' }
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
          { pt: '<b>Nem tudo se edita.</b> Objetivo e tipo de compra não mudam; o texto e a mídia de um post turbinado também não, depois de analisado.', es: '<b>No todo se edita.</b> Objetivo y tipo de compra no cambian; el texto y los medios de un post impulsado tampoco, una vez revisado.' }
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
          { pt: 'Objetivo e tipo de compra não mudam; texto e mídia de post turbinado também não.', es: 'Objetivo y tipo de compra no cambian; texto y medios de un post impulsado tampoco.' }],
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
      gancho: { pt: '“Consegui resolver! Agora quero entender os números: o que é alcance, o que é resultado?” Próxima fase: relatórios e métricas.', es: '“¡Logré resolverlo! Ahora quiero entender los números: ¿qué es alcance, qué es resultado?” Próxima fase: informes y métricas.' },
      objetivo: { pt: 'Descobrir, em ordem, o que bloqueia um anúncio: telefone, limite de gastos, saldo, conjunto de dados e Página.', es: 'Descubrir, en orden, qué bloquea un anuncio: teléfono, límite de gastos, saldo, conjunto de datos y Página.' },
      entender: {
        dialogo: [
          ['marina', { pt: 'Tentei publicar e o botão está apagado! E antes, meu anúncio parou de rodar sozinho. O que eu fiz de errado? 😭', es: '¡Intenté publicar y el botón está apagado! Y antes, mi anuncio dejó de correr solo. ¿Qué hice mal? 😭' }],
          ['rafa', { pt: 'Calma, quase sempre é uma destas causas: telefone não verificado, limite de gastos da conta atingido, saldo acabado, ou um campo obrigatório faltando, como o conjunto de dados (Pixel) ou a Página. A tela costuma avisar qual.', es: 'Calma, casi siempre es una de estas causas: teléfono no verificado, límite de gastos de la cuenta alcanzado, saldo agotado, o un campo obligatorio faltante, como el conjunto de datos (Pixel) o la Página. La pantalla suele avisar cuál.' }],
          ['marina', { pt: 'Mas eu tenho saldo! Por que parou?', es: '¡Pero tengo saldo! ¿Por qué se detuvo?' }],
          ['rafa', { pt: 'Saldo e limite são coisas diferentes. A conta pode ter um limite de gastos: ao chegar nele, os anúncios param, mesmo com saldo. Dá para ver na Visão geral da conta.', es: 'Saldo y límite son cosas distintas. La cuenta puede tener un límite de gastos: al llegar a él, los anuncios se detienen, aunque haya saldo. Se puede ver en la Visión general de la cuenta.' }],
          ['pixel', { pt: 'Caso real da conta de aula: a Visão geral mostrava “Limite de gastos da conta” com um valor baixo, e o Turbinar avisou “Você quase atingiu o limite de gastos”. Quem muda o limite é o responsável pela conta.', es: 'Caso real de la cuenta de aula: la Visión general mostraba “Límite de gastos de la cuenta” con un valor bajo, y Impulsar avisó “Casi alcanzaste el límite de gastos”. Quien cambia el límite es el responsable de la cuenta.' }]
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
        texto: { pt: 'No simulador do Turbinar, a conta da Marina vem com três bloqueios juntos. O Pixel te leva a resolver um por um, de cima para baixo, até publicar.', es: 'En el simulador de Impulsar, la cuenta de Marina viene con tres bloqueos juntos. El Pixel te lleva a resolverlos uno por uno, de arriba hacia abajo, hasta publicar.' },
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
        encaminhar: { pt: 'Se nenhuma dessas causas explica, ou a conta está restrita ou o anúncio foi rejeitado, siga a Central de Ajuda da Meta (“Solucionar problemas ao criar ou publicar um anúncio” e “Solucionar problemas com uma conta desativada ou restrita”).', es: 'Si ninguna de estas causas lo explica, o la cuenta está restringida o el anuncio fue rechazado, sigue el Centro de ayuda de Meta (“Solucionar problemas al crear o publicar un anuncio” y “Solucionar problemas con una cuenta desactivada o restringida”).' }
      },
      fontes: [
        { url: 'https://www.facebook.com/business/help/125897810822573', titulo: { pt: 'Como solucionar problemas ao criar ou publicar uma campanha de anúncios no Gerenciador de Anúncios da Meta', es: 'Cómo solucionar problemas al crear o publicar una campaña de anuncios en el Administrador de anuncios de Meta' }, conferido: '16/10/2026' }
      ]
    }
  ],
  'pixel-avancado': [
    { id: '01', titulo: { pt: 'Correspondência avançada', es: 'Coincidencia avanzada' }, status: 'planejada' },
    { id: '02', titulo: { pt: 'Qualidade do sinal', es: 'Calidad de la señal' }, status: 'planejada' },
    { id: '03', titulo: { pt: 'API de Conversões e deduplicação', es: 'API de conversiones y deduplicación' }, status: 'planejada' },
    { id: '04', titulo: { pt: 'Privacidade e regras', es: 'Privacidad y reglas' }, status: 'planejada' }
  ]
};
