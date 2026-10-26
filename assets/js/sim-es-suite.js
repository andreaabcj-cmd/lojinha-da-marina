/* Dicionário PT → ES do simulador do Meta Business Suite (Criar post, Caixa de Entrada, Insights).
   Textos copiados das telas reais em espanhol (?locale=es_LA, 16/10/2026); o que não foi visto fica no padrão da Meta (a conferir). */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {}, P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var A = {
    '🧪 Simulador de treinamento do Meta Business Suite · nada aqui vai para a Meta ·': '🧪 Simulador de capacitación de Meta Business Suite · nada de aquí va a Meta ·', '← voltar à plataforma': '← volver a la plataforma',
    '✓ Tela conferida com o Meta Business Suite real em 16/10/2026 (conta de aula)': '✓ Pantalla revisada con Meta Business Suite real el 16/10/2026 (cuenta de práctica)',
    '⚠ O seletor “Postar em” e o texto de cada rede ao personalizar foram montados pela documentação; o resto da tela foi conferido em 16/10/2026 (a conferir)': '⚠ El selector “Publicar en” y el texto de cada red al personalizar se armaron con la documentación; el resto de la pantalla se revisó el 16/10/2026 (por confirmar)',
    'Página inicial': 'Inicio', 'Notificações': 'Notificaciones', 'Gerenciador de Anúncios': 'Administrador de anuncios', 'Caixa de Entrada': 'Mensajes', 'Conteúdo': 'Contenido', 'Creator Marketing': 'Herramienta de marketing de creadores', 'Planner': 'Planificador', 'Anúncios': 'Anuncios', 'Insights': 'Estadísticas', 'Monetização': 'Monetización', 'Todas as ferramentas': 'Más herramientas',
    'Lojinha da Marina - Fictício': 'Lojinha da Marina - Fictício', 'Perfil': 'Perfil', 'Editar Página do Facebook | Editar perfil do Instagram · Seguidores do Facebook · Seguidores do Instagram': 'Editar Página de Facebook | Editar perfil de Instagram · Seguidores de Facebook · Seguidores de Instagram',
    'Criar post': 'Crear publicación', 'Criar anúncio': 'Crear anuncio', 'Criar reel': 'Crear reel', 'Criar story': 'Crear historia', 'Mais': 'Más',
    'Lista de tarefas': 'Tareas pendientes', 'Verifique as mensagens não lidas, os comentários e outros itens que precisam de atenção.': 'Revisa los mensajes no leídos, los comentarios y otros elementos que necesitan atención.', 'Você está em dia com sua lista de tarefas.': 'Estás al día con tus tareas pendientes.',
    'Gerencie seu conteúdo de marketing': 'Administra tu contenido de marketing', 'Veja seus posts, stories e anúncios recentes e futuros, e programe conteúdo para se planejar com antecedência.': 'Mira tus publicaciones, historias y anuncios recientes y futuros, y programa contenido para planificar con anticipación.',
    'Quer criar um post de anúncio?': '¿Quieres crear una publicación de anuncio?', 'Os posts de anúncios só podem ser criados no Facebook. Depois que você selecionar sua Página do Facebook na seção “Postar em”, um botão aparecerá nos detalhes do post para transformá-lo em anúncio.': 'Las publicaciones de anuncios solo se pueden crear en Facebook. Una vez que selecciones tu página de Facebook en la sección "Publicar en", aparecerá un botón en los detalles de la publicación que te permite convertirla en un anuncio.', 'Ver mais': 'Ver más',
    'Postar em': 'Publicar en', 'Página do Facebook': 'Página de Facebook', 'Perfil do Instagram': 'Perfil de Instagram', 'Escolha pelo menos um lugar para postar.': 'Elige al menos un lugar donde publicar.',
    'Mídia': 'Contenido multimedia', 'Compartilhe fotos e vídeos. Os posts do Instagram não podem ter mais de 10 fotos.': 'Comparte fotos y videos. Las publicaciones de Instagram no pueden tener más de 10 fotos.', '🖼️ Adicionar foto/vídeo': '🖼️ Agregar foto/video', 'Excluir': 'Eliminar',
    'Detalhes do post': 'Detalles de la publicación', 'Personalizar post para o Facebook e o Instagram': 'Personalizar la publicación para Facebook e Instagram', 'Texto': 'Texto', 'Clique para abrir o menu de hashtag.': 'Haz clic para abrir el menú de hashtag.',
    'Com isto ligado, cada rede pode ter o seu texto (a tela real mostra as duas versões; o formato exato não foi visto: a conferir).': 'Con esto activado, cada red puede tener su texto (la pantalla real muestra las dos versiones; el formato exacto no se vio: por confirmar).', 'Texto do Facebook': 'Texto de Facebook', 'Texto do Instagram': 'Texto de Instagram',
    '# · 😊 · Sentimento/atividade · Localização · Receber mensagens · Receber mensagens do WhatsApp · Teste A/B · Mais recursos': '# · 😊 · Sentimiento/actividad · Ubicación · Recibir mensajes · Recibir mensajes de WhatsApp · Prueba A/B · Más funciones',
    'Programar': 'Programar', 'Definir data e hora': 'Establecer fecha y hora', 'Compartilhar em': 'Compartir en', 'Story do Facebook · Público': 'Historia de Facebook ・ Pública',
    'Configurações de privacidade': 'Configuración de privacidad', 'Altere as configurações de privacidade para controlar quem pode ver seu post no feed, no Watch, nos resultados de pesquisa e no seu perfil.': 'Cambia la configuración de privacidad para controlar quién puede ver tu publicación en el feed, en Watch, en los resultados de búsqueda y en tu perfil.', 'Público': 'Público', 'Qualquer pessoa dentro ou fora do Facebook poderá ver seu post.': 'Cualquiera dentro y fuera de Facebook podrá ver tu publicación.',
    'Prévia do feed do Facebook ▾': 'Vista previa del feed de Facebook ▾', 'Agora há pouco · 🌐': 'Hace un momento · 🌐', 'Curtir': 'Me gusta', 'Comentar': 'Comentario', 'Compartilhar': 'Compartir',
    '⚠ Sem a Página marcada em “Postar em”, a prévia do Facebook não é usada (a conferir).': '⚠ Sin la Página marcada en “Publicar en”, no se usa la vista previa de Facebook (por confirmar).',
    'Turbinar': 'Promocionar', 'Cancelar': 'Cancelar', 'Concluir mais tarde': 'Finalizar más tarde', 'Publicar': 'Publicar',
    'Há mais posts que você quer publicar? Programe um para não precisar lembrar depois.': '¿Hay más publicaciones que quieres publicar? Programa una para no tener que acordarte después.',
    'Você deixou “Turbinar” ligado: depois de publicar, a tela leva ao Turbinar (a conferir). No simulador, nada foi enviado à Meta.': 'Dejaste “Promocionar” activado: después de publicar, la pantalla lleva a Promocionar (por confirmar). En el simulador, no se envió nada a Meta.',
    'No simulador, nada foi enviado à Meta. Na lista de posts, o post novo ganha o botão Turbinar.': 'En el simulador, no se envió nada a Meta. En la lista de publicaciones, la publicación nueva gana el botón Promocionar.', 'Talvez mais tarde': 'Quizás más tarde', 'Programar outro post': 'Programar otra publicación',
    'Responda a mensagens, configure automações e muito mais.': 'Responde mensajes, configura automatizaciones y más.', 'Automações': 'Automatizaciones', 'Criar anúncio de mensagens': 'Crear anuncio de mensajes', 'Insights sobre mensagens': 'Estadísticas de mensajes', 'Disponível': 'Disponible',
    'Todas as mensagens': 'Todos los mensajes', 'Messenger': 'Messenger', 'Instagram': 'Instagram', 'WhatsApp': 'WhatsApp', 'Novo': 'Nuevo', 'Comentários do Facebook': 'Comentarios de Facebook', 'Comentários do Instagram': 'Comentarios de Instagram',
    'Não lidas': 'No leídos', 'Prioridade': 'Prioridad', 'Respostas a anúncios': 'Respuestas de anuncios', 'Conversas de exemplo do simulador (a conta de aula está vazia).': 'Conversaciones de ejemplo del simulador (la cuenta de práctica está vacía).',
    'Oi! Quais são os preços das canecas?': '¡Hola! ¿Cuáles son los precios de las tazas?', 'Lindo! Tem em amarelo?': '¡Lindo! ¿Hay en amarillo?', 'Você envia para todo o Brasil?': '¿Envían a todo Brasil?', 'Quanto custa a camiseta?': '¿Cuánto cuesta la camiseta?', 'Posso personalizar as camisetas?': '¿Puedo personalizar las camisetas?',
    'Nenhuma conversa neste filtro.': 'Ninguna conversación en este filtro.', 'Nenhuma conversa aqui. O WhatsApp não foi conectado nesta conta de aula (a conferir).': 'Ninguna conversación aquí. WhatsApp no se conectó en esta cuenta de práctica (por confirmar).', 'Escolha uma conversa à esquerda.': 'Elige una conversación a la izquierda.',
    'Enviar': 'Enviar', 'Escreva uma resposta…': 'Escribe una respuesta…', 'Escreva uma mensagem…': 'Escribe un mensaje…',
    'Veja os resultados de desempenho e outras informações.': 'Revisa el rendimiento.', 'Seletor de entidade': 'Selector de entidad', 'Últimos 28 dias': 'Últimos 28 días', 'Visão geral': 'Resumen', 'Plano': 'Plan', 'Resultados': 'Resultados', 'Mensagens': 'Mensajes',
    'Visualizações': 'Visualizaciones', 'Visualizadores': 'Espectadores', 'Interações com o conteúdo': 'Interacciones con el contenido', 'Cliques no link do Facebook': 'Clics en el enlace de Facebook', 'Cliques no link': 'Clics en el enlace', 'Visitas ao Facebook': 'Visitas de Facebook', 'Seguidores': 'Seguidores', 'Exportar': 'Exportar',
    'Nenhuma atividade durante o intervalo de datas.': 'Ninguna actividad durante el intervalo de fechas.', 'Facebook': 'Facebook',
    'Você poderá saber mais sobre seu público quando sua conta do Instagram tiver pelo menos 100 seguidores.': 'Podrás saber más sobre tu público cuando tu cuenta de Instagram tenga al menos 100 seguidores.',
    'Os dados de público do Facebook ainda não apareceram nesta conta de aula (a conferir).': 'Los datos de público de Facebook todavía no aparecieron en esta cuenta de práctica (por confirmar).',
    'Os números do Facebook são os da conta de aula (poucos, do anúncio de teste). Os do Instagram estavam zerados quando conferimos.': 'Los números de Facebook son los de la cuenta de práctica (pocos, del anuncio de prueba). Los de Instagram estaban en cero cuando los revisamos.'
  };
  A['itens na Caixa de Entrada esperando resposta (exemplo do simulador).'] = 'elementos en Mensajes esperando respuesta (ejemplo del simulador).';
  for (var k in A) D[k] = A[k];
  P.push([/^Comentário no post “(.+)” · (Instagram|Messenger|Facebook)$/, function (m) { return 'Comentario en la publicación “' + m[1] + '” · ' + m[2] }]);
  P.push([/^Conversa · (Instagram|Messenger|Facebook)$/, function (m) { return 'Conversación · ' + m[1] }]);
  P.push([/^Postar em: (.+)$/, function (m) { return 'Publicar en: ' + m[1].replace(/ e /g, ' y ') }]);
  P.push([/^Post publicado (.+)$/, function (m) { return 'Publicación publicada ' + m[1].replace('no Facebook', 'en Facebook').replace('no Instagram', 'en Instagram').replace(' e ', ' y ') }]);
  P.push([/^(\d+) itens na Caixa de Entrada esperando resposta \(exemplo do simulador\)\.$/, function (m) { return m[1] + ' elementos en Mensajes esperando respuesta (ejemplo del simulador).' }]);
  P.push([/^Você: (.+)$/, function (m) { return 'Tú: ' + m[1] }]);
  /* Insights: abas vistas em 25/10/2026 (espanhol traduzido por nós) */
  D["Avaliação comparativa"] = "Evaluación comparativa";
  D["Conteúdo"] = "Contenido";
  D["Plano semanal"] = "Plan semanal";
  D["6 dias restantes"] = "Quedan 6 días";
  D["Prepare sua empresa para o sucesso realizando as tarefas recomendadas. Realize pelo menos 4 tarefas para concluir este plano."] = "Prepara tu negocio para el éxito con las tareas recomendadas. Completa al menos 4 tareas para terminar este plan.";
  D["Meta semanal"] = "Meta semanal";
  D["· 0 de 5 tarefas concluídas"] = "· 0 de 5 tareas completadas";
  D["Publicar um anúncio · 0 de 1"] = "Publicar un anuncio · 0 de 1";
  D["Publicar 1 story no Instagram · 0 de 1"] = "Publicar 1 historia en Instagram · 0 de 1";
  D["Publicar 5 posts no Facebook · 0 de 5"] = "Publicar 5 publicaciones en Facebook · 0 de 5";
  D["Publicar 3 posts no Instagram · 0 de 3"] = "Publicar 3 publicaciones en Instagram · 0 de 3";
  D["Conecte seu site e comece a anunciar para clientes em potencial"] = "Conecta tu sitio web y empieza a anunciar a clientes potenciales";
  D["Use o Pixel da Meta para entender como as pessoas interagem com seu site, fazer o direcionamento de anúncios para o público certo e muito mais. · 1/4 etapas"] = "Usa el píxel de Meta para entender cómo interactúan las personas con tu sitio web, dirigir anuncios al público correcto y mucho más. · 1/4 pasos";
  D["Continuar a configuração"] = "Continuar la configuración";
  D["Desempenho das mensagens"] = "Rendimiento de los mensajes";
  D["Os resultados são atribuídos a todos os tipos de anúncios em qualquer conta de anúncios. As métricas são relatadas no Horário do Pacífico, exceto se especificado de outra maneira."] = "Los resultados se atribuyen a todos los tipos de anuncios en cualquier cuenta publicitaria. Las métricas se informan en la hora del Pacífico, salvo que se indique otra cosa.";
  D["As métricas dos anúncios de mensagens agora estão disponíveis no resumo dos anúncios (conversas por mensagem iniciadas, custo por conversa e valor gasto)."] = "Las métricas de los anuncios de mensajes ahora están en el resumen de los anuncios (conversaciones con mensajes iniciadas, costo por conversación e importe gastado).";
  D["Contatos"] = "Contactos";
  D["Estas são as pessoas que enviaram mensagens para sua empresa."] = "Estas son las personas que enviaron mensajes a tu negocio.";
  D["Total de contatos"] = "Total de contactos";
  D["Conversas por mensagem iniciadas"] = "Conversaciones con mensajes iniciadas";
  D["Novos contatos"] = "Contactos nuevos";
  D["Orgânicos 0 · Pagos 0"] = "Orgánicos 0 · Pagados 0";
  D["Contatos que retornaram"] = "Contactos que volvieron";
  D["Contatos com pedidos"] = "Contactos con pedidos";
  D["Os insights sobre criadores de conteúdo, empresas e mensagens agora estão em um só lugar."] = "Las estadísticas de creadores, negocios y mensajes ahora están en un solo lugar.";
  D["Desempenho"] = "Rendimiento";
  D["Visualizações"] = "Visualizaciones";
  D["De seguidores <0,1% · De não seguidores 100%"] = "De seguidores <0,1 % · De no seguidores 100 %";
  D["Visualizadores"] = "Espectadores";
  D["Seguidores"] = "Seguidores";
  D["Deixaram de seguir 0 · Seguidores líquidos 0"] = "Dejaron de seguir 0 · Seguidores netos 0";
  D["Visitas ao Facebook"] = "Visitas a Facebook";
  D["Interações com o conteúdo"] = "Interacciones con el contenido";
  D["De não seguidores 40"] = "De no seguidores 40";
  D["Visualizações de 3 segundos"] = "Reproducciones de 3 segundos";
  D["Vídeos e reels"] = "Videos y reels";
  D["No Instagram da conta de aula os números estavam zerados."] = "En el Instagram de la cuenta de clase los números estaban en cero.";
  D["Postar no Facebook e no Instagram"] = "Publicar en Facebook e Instagram";
  D["Escolha onde postar ▾"] = "Elige dónde publicar ▾";
  D["Facebook"] = "Facebook";
  D["Instagram"] = "Instagram";
  D["Texto do Facebook"] = "Texto de Facebook";
  D["Texto do Instagram"] = "Texto de Instagram";
  P.push([/^(.+) e (.+) ▾$/, function (m) { return m[1] + ' y ' + m[2] + ' ▾' }]);
})();
