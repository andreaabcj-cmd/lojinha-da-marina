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
