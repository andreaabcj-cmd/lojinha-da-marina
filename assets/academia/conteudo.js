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
  { id: 'entrega', fase: 3, status: 'planejado', icone: '🚚', titulo: { pt: 'Entrega de anúncios', es: 'Entrega de anuncios' }, resumo: { pt: 'Como a entrega funciona, a fase de aprendizado e a solução de problemas.', es: 'Cómo funciona la entrega, la fase de aprendizaje y la solución de problemas.' } },
    { id: 'regras', fase: 3, status: 'construcao', icone: '⚙️', titulo: { pt: 'Gerenciador de Anúncios · regras automatizadas', es: 'Administrador de anuncios · reglas automáticas' }, resumo: { pt: 'O que são, como criar sem falso positivo, acompanhar e corrigir.', es: 'Qué son, cómo crearlas sin falso positivo, seguirlas y corregirlas.' } },
  { id: 'pixel-avancado', fase: 3, status: 'planejado', icone: '🛰️', titulo: { pt: 'Pixel · avançado', es: 'Pixel · avanzado' }, resumo: { pt: 'Correspondência avançada, qualidade do sinal, API de Conversões e deduplicação, privacidade.', es: 'Coincidencia avanzada, calidad de la señal, API de conversiones y deduplicación, privacidad.' } },
  { id: 'verified', fase: 4, status: 'planejado', icone: '✅', titulo: { pt: 'Meta Verified para empresas', es: 'Meta Verified para empresas' }, resumo: { pt: 'O que é, recursos, escopo e casos.', es: 'Qué es, funciones, alcance y casos.' } },
  { id: 'commerce', fase: 4, status: 'planejado', icone: '🛍️', titulo: { pt: 'Introdução ao Commerce', es: 'Introducción a Commerce' }, resumo: { pt: 'O que é e qual o escopo.', es: 'Qué es y cuál es el alcance.' } },
  { id: 'shop-ads', fase: 4, status: 'planejado', icone: '🛒', titulo: { pt: 'Anúncios de loja (Shop Ads)', es: 'Anuncios de tienda (Shop Ads)' }, resumo: { pt: 'O que são os anúncios de loja e como funcionam.', es: 'Qué son los anuncios de tienda y cómo funcionan.' } },
  { id: 'shop-ads-offsite', fase: 4, status: 'planejado', icone: '🧾', titulo: { pt: 'Shop Ads · finalização da compra fora da Meta', es: 'Shop Ads · pago fuera de Meta' }, resumo: { pt: 'Finalização da compra, URL de checkout e métricas.', es: 'Finalización de la compra, URL de pago y métricas.' } },
  { id: 'portfolio-avancado', fase: 5, status: 'planejado', icone: '🧰', titulo: { pt: 'Portfólio empresarial · avançado', es: 'Portfolio comercial · avanzado' }, resumo: { pt: 'Como verificar e corrigir erros no portfólio.', es: 'Cómo verificar y corregir errores en el portfolio.' } },
  { id: 'mbe', fase: 5, status: 'planejado', icone: '🔌', titulo: { pt: 'Meta Business Extension (MBE)', es: 'Meta Business Extension (MBE)' }, resumo: { pt: 'Visão geral da extensão e da integração com parceiros.', es: 'Visión general de la extensión y de la integración con socios.' } },
  { id: 'integracoes', fase: 5, status: 'planejado', icone: '🧷', titulo: { pt: 'Integração com plataformas de terceiros', es: 'Integración con plataformas de terceros' }, resumo: { pt: 'Como integrar e os erros possíveis.', es: 'Cómo integrar y los errores posibles.' } },
  { id: 'shopify', fase: 5, status: 'planejado', icone: '🧩', titulo: { pt: 'Shopify e Meta', es: 'Shopify y Meta' }, resumo: { pt: 'Como integrar, solução de problemas e redirecionamento.', es: 'Cómo integrar, solución de problemas y redirección.' } },
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
  'pixel-avancado': [
    { id: '01', titulo: { pt: 'Correspondência avançada', es: 'Coincidencia avanzada' }, status: 'planejada' },
    { id: '02', titulo: { pt: 'Qualidade do sinal', es: 'Calidad de la señal' }, status: 'planejada' },
    { id: '03', titulo: { pt: 'API de Conversões e deduplicação', es: 'API de conversiones y deduplicación' }, status: 'planejada' },
    { id: '04', titulo: { pt: 'Privacidade e regras', es: 'Privacidad y reglas' }, status: 'planejada' }
  ]
};
