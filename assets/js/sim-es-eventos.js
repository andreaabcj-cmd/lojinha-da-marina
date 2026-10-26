/* Dicionário PT → ES das telas do simulador do Gerenciador de Eventos (Administrador de eventos).
   O menu "Administrador de eventos / Conjuntos de datos y píxeles / Públicos" foi visto na tela real em espanhol; as telas internas
   do Pixel (Probar eventos, Diagnóstico…) seguem o padrão da Meta em espanhol, a conferir com a tela real (a página não abriu nesta janela). */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {}, P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var A = {
    '🧪 Simulador de treinamento do Gerenciador de Eventos · nada aqui vai para a Meta ·': '🧪 Simulador de capacitación del Administrador de eventos · nada de aquí va a Meta ·',
    '⚠ Tela montada pela documentação da Meta · a conferir com a tela real': '⚠ Pantalla armada con la documentación de Meta · por confirmar con la pantalla real',
    '✓ Conferido com a tela real em 13/10/2026': '✓ Revisado con la pantalla real el 13/10/2026',
    '✓ Layout conferido com o Gerenciador de Eventos real em 13/10/2026': '✓ Diseño revisado con el Administrador de eventos real el 13/10/2026',
    '✓ Layout conferido com o Gerenciador de Eventos real em 14/10/2026': '✓ Diseño revisado con el Administrador de eventos real el 14/10/2026',
    'Fora do simulador por enquanto': 'Fuera del simulador por ahora',
    /* menu */
    'Gerenciador de Eventos': 'Administrador de eventos', 'Visão geral': 'Resumen', 'Visão geral da conta': 'Resumen de la cuenta', 'Conjuntos de dados': 'Conjuntos de datos', 'Testar eventos': 'Probar eventos', 'Diagnóstico': 'Diagnóstico', 'Histórico': 'Historial', 'Configurações': 'Configuración',
    'Campanhas': 'Campañas', 'Públicos': 'Públicos', 'Notificações': 'Notificaciones', 'Integrações': 'Integraciones', 'Conversões personalizadas': 'Conversiones personalizadas', 'Ferramentas': 'Herramientas', 'Todas as ferramentas': 'Todas las herramientas', 'Gerenciador de Anúncios': 'Administrador de anuncios',
    'Portfólio empresarial': 'Portfolio comercial', 'Lojinha da Marina Aula': 'Lojinha da Marina Aula', 'Marina': 'Marina', 'Que bom ter você aqui, Marina!': '¡Qué bueno tenerte aquí, Marina!',
    'O Gerenciador de Eventos é a central de configuração e gerenciamento de dados.': 'El Administrador de eventos es el centro de configuración y administración de datos.',
    'Seus conjuntos de dados': 'Tus conjuntos de datos', 'Pixel da Lojinha da Marina': 'Píxel de la Lojinha da Marina', 'Nome': 'Nombre', 'Status': 'Estado', 'Identificação': 'Identificador', 'Identificação do conjunto de dados': 'Identificador del conjunto de datos', 'Identificação do conjunto de dados:': 'Identificador del conjunto de datos:', 'ID de Pixel.': 'ID de píxel.',
    'Atividade': 'Actividad', 'Proprietário': 'Propietario', 'Criado por': 'Creado por', 'Marina · 14/10/2026': 'Marina · 14/10/2026', 'Detalhes': 'Detalles', 'Copiar ID': 'Copiar ID', 'Copiar': 'Copiar', 'Copiado ✓': 'Copiado ✓',
    'Os dados precisam ser conectados antes de você poder ver os conjuntos de dados': 'Los datos se deben conectar antes de que puedas ver los conjuntos de datos',
    /* conectar fonte de dados */
    'Conectar uma nova fonte de dados': 'Conectar un nuevo origen de datos', 'Conectar dados': 'Conectar datos', 'Conecte seus dados': 'Conecta tus datos', 'Configurar o Pixel': 'Configurar el píxel',
    'Compartilhe dados sobre como os clientes interagem com sua empresa. Isso pode ajudar a otimizar a veiculação dos anúncios e o desempenho.': 'Comparte datos sobre cómo interactúan los clientes con tu negocio. Esto puede ayudar a optimizar la publicación de los anuncios y el rendimiento.',
    'Web': 'Web', 'App': 'App', 'CRM': 'CRM', 'Offline': 'Offline', 'Mensagens': 'Mensajes',
    'Conecte seu site para compartilhar a atividade que acontece online, incluindo visualizações de conteúdo, adições ao carrinho e compras.': 'Conecta tu sitio web para compartir la actividad que ocurre en línea, incluidas las visualizaciones de contenido, las adiciones al carrito y las compras.',
    'Conecte seu app para compartilhar a atividade que ocorre no seu app, incluindo instalações e compras.': 'Conecta tu app para compartir la actividad que ocurre en ella, incluidas las instalaciones y las compras.',
    'Conecte seu CRM para veicular seus anúncios de geração de leads para as pessoas com maior probabilidade de conversão.': 'Conecta tu CRM para mostrar tus anuncios de generación de clientes potenciales a las personas con mayor probabilidad de conversión.',
    'Conecte a atividade que ocorre offline, incluindo ligações telefônicas ou compras na loja.': 'Conecta la actividad que ocurre offline, incluidas las llamadas telefónicas o las compras en la tienda.',
    'Conecte dados importantes de conversas comerciais que acontecem no WhatsApp, no Messenger e no Instagram.': 'Conecta datos importantes de las conversaciones comerciales que ocurren en WhatsApp, Messenger e Instagram.',
    'A conexão do Pixel da Meta e da API de Conversões fornece mais dados sobre como os clientes interagem com sua empresa. Escolha um parceiro abaixo para começar.': 'Conectar el píxel de Meta y la API de Conversiones aporta más datos sobre cómo interactúan los clientes con tu negocio. Elige un socio abajo para empezar.',
    'API de Conversões com a Meta': 'API de Conversiones con Meta', 'Google Tag Manager': 'Google Tag Manager', 'GTM': 'GTM', 'Shopify': 'Shopify', 'WooCommerce': 'WooCommerce', 'Woo': 'Woo',
    'Ver outras maneiras de configurar': 'Ver otras formas de configurar', 'Configure para mim': 'Configúralo por mí', 'Instalar o código manualmente': 'Instalar el código manualmente',
    'URL do site': 'URL del sitio web', 'Conjunto de dados criado': 'Conjunto de datos creado',
    'Copie o código base do Pixel e cole no': 'Copia el código base del píxel y pégalo en el', 'de todas as páginas do site, antes de </head>. Se a loja é de uma plataforma parceira, dá para usar a integração em vez de colar o código.': 'de todas las páginas del sitio, antes de </head>. Si la tienda es de una plataforma asociada, se puede usar la integración en vez de pegar el código.',
    'este': 'este',
    /* Visão geral do Pixel */
    'Eventos da web': 'Eventos web', 'Eventos nas últimas 12 horas': 'Eventos en las últimas 12 horas', 'Eventos recebidos': 'Eventos recibidos', '0 eventos': '0 eventos', 'Nenhuma atividade ainda': 'Todavía no hay actividad', 'Limpar atividade': 'Borrar actividad',
    'Redução de 25% no custo por conversão fora do site ⓘ': 'Reducción del 25 % en el costo por conversión fuera del sitio ⓘ', 'Usar cookies primários': 'Usar cookies propias', 'Grava o cookie _fbp no domínio do próprio site, o que ajuda a medir as conversões.': 'Guarda la cookie _fbp en el dominio del propio sitio, lo que ayuda a medir las conversiones.',
    /* Testar eventos */
    'Testar eventos do navegador': 'Probar eventos del navegador', 'Abrir site': 'Abrir sitio web',
    'Confirme se os eventos do navegador estão configurados corretamente. Abra o site, faça as ações (ver produto, pôr no carrinho, comprar) e acompanhe os eventos chegando aqui.': 'Confirma que los eventos del navegador estén configurados correctamente. Abre el sitio web, realiza las acciones (ver producto, agregar al carrito, comprar) y mira cómo llegan los eventos aquí.',
    'Aguardando eventos… Abra o site e navegue. Se nada chegar, confira se o site usa': 'Esperando eventos… Abre el sitio web y navega. Si no llega nada, revisa si el sitio usa',
    'Nenhum evento recebido ainda. Abra a Lojinha (aba': 'Todavía no se recibió ningún evento. Abre la Lojinha (pestaña', '› Abrir site) e navegue: os eventos aparecem aqui.': '› Abrir sitio web) y navega: los eventos aparecen aquí.',
    'Quando': 'Cuándo', 'Quem': 'Quién', 'O que aconteceu': 'Qué pasó',
    /* Diagnóstico e configurações */
    'Problemas encontrados nos eventos recebidos por este conjunto de dados.': 'Problemas encontrados en los eventos recibidos por este conjunto de datos.', 'Nenhum problema ativo': 'Ningún problema activo', 'Ainda não há eventos para analisar.': 'Todavía no hay eventos para analizar.',
    'Configurações do Pixel': 'Configuración del píxel', 'Correspondência avançada automática': 'Coincidencia avanzada automática',
    'Usa informações que a pessoa digita no site (como email e telefone) para associar os eventos às contas, sempre com hash.': 'Usa la información que la persona escribe en el sitio (como correo electrónico y teléfono) para asociar los eventos a las cuentas, siempre con hash.',
    'Rastrear eventos automaticamente sem código': 'Hacer seguimiento de eventos automáticamente sin código', 'A Meta sugere e detecta eventos padrão pelo comportamento do site, sem programar.': 'Meta sugiere y detecta eventos estándar según el comportamiento del sitio, sin programar.',
    'Tráfego permitido': 'Tráfico permitido', 'Só aceita eventos destes domínios (vazio = todos):': 'Solo acepta eventos de estos dominios (vacío = todos):',
    'Envia também os eventos pelo servidor da Meta. Na aula deixamos desligada para estudar o Pixel sozinho.': 'También envía los eventos por el servidor de Meta. En la clase la dejamos desactivada para estudiar el píxel solo.',
    'Processado': 'Procesado', 'Parâmetros personalizados': 'Parámetros personalizados', 'Informações do evento': 'Información del evento', 'ID do evento': 'ID del evento', 'Recebido de': 'Recibido de',
    'Navegador (Pixel da Meta)': 'Navegador (píxel de Meta)', 'Navegador': 'Navegador', 'Correspondência avançada': 'Coincidencia avanzada', 'enviado com hash (SHA-256)': 'enviado con hash (SHA-256)', 'Nenhum parâmetro.': 'Ningún parámetro.',
    'Ativo': 'Activo', 'Eventos': 'Eventos', 'Integração': 'Integración', 'Total de eventos': 'Total de eventos', 'Última atividade': 'Última actividad',
    'Parâmetro obrigatório ausente no evento Purchase': 'Falta un parámetro obligatorio en el evento Purchase', '⛔ Parâmetro obrigatório ausente no evento Purchase': '⛔ Falta un parámetro obligatorio en el evento Purchase',
    'Alguns eventos Purchase chegaram sem value ou currency. Sem eles a Meta não calcula o valor das compras nem otimiza por valor.': 'Algunos eventos Purchase llegaron sin value o currency. Sin ellos, Meta no calcula el valor de las compras ni optimiza por valor.',
    '⚠️ Possível código do Pixel duplicado': '⚠️ Posible código del píxel duplicado', 'O mesmo evento PageView chegou duas vezes da mesma página ao mesmo tempo. Confira se o código base não foi instalado duas vezes.': 'El mismo evento PageView llegó dos veces desde la misma página al mismo tiempo. Revisa que el código base no se haya instalado dos veces.',
    '⚠️ IDs de conteúdo não correspondem ao catálogo': '⚠️ Los ID de contenido no coinciden con el catálogo', 'Alguns eventos enviaram content_ids que não existem no catálogo (ex.: o nome do produto no lugar do código).': 'Algunos eventos enviaron content_ids que no existen en el catálogo (ej.: el nombre del producto en vez del código).',
    'Os eventos recebidos não mostram problemas.': 'Los eventos recibidos no muestran problemas.',
    'Cancelar': 'Cancelar', 'Avançar': 'Siguiente', 'Fechar': 'Cerrar'
  };
  /* Configurações reais do Pixel (20/10/2026); espanhol traduzido por nós, a conferir */
  A['Configurações do Pixel da Meta'] = 'Configuración del píxel de Meta';
  A['Incluir automaticamente informações mais detalhadas de páginas e produtos'] = 'Incluir automáticamente información más detallada de páginas y productos';
  A['Ativado'] = 'Activado';
  A['Desativada'] = 'Desactivada';
  A['Esse recurso usa IA para identificar e enviar mais detalhes do site, como informações básicas da página, avaliações e preços, além dos dados existentes do seu Pixel da Meta.'] = 'Esta función usa IA para identificar y enviar más detalles del sitio, como información básica de la página, opiniones y precios, además de los datos existentes de tu píxel de Meta.';
  A['Mensure as conversões nos dispositivos dos clientes'] = 'Mide las conversiones en los dispositivos de los clientes';
  A['Mensuração a partir de 12 de novembro de 2026'] = 'Medición a partir del 12 de noviembre de 2026';
  A['A Meta mensura as conversões dos seus anúncios para que você possa ver quais deles estão funcionando. Com esse recurso ativado, a mensuração acontece no dispositivo do cliente em vez de apenas nos servidores da Meta.'] = 'Meta mide las conversiones de tus anuncios para que puedas ver cuáles funcionan. Con esta función activada, la medición ocurre en el dispositivo del cliente en lugar de solo en los servidores de Meta.';
  A['Controles de dados'] = 'Controles de datos';
  A['Configuração básica'] = 'Configuración básica';
  A['Quando ativadas, as Ferramentas Comerciais da Meta podem restringir dados como parâmetros personalizado e partes de URL após o domínio.'] = 'Cuando están activadas, las Herramientas para empresas de Meta pueden restringir datos como parámetros personalizados y partes de la URL después del dominio.';
  A['Configurações do site'] = 'Configuración del sitio';
  /* Controles de dados do Pixel e Domínios (telas reais 20/10/2026; espanhol traduzido por nós, a conferir) */
  A['Gerencie as categorias de fontes de dados'] = 'Gestiona las categorías de fuentes de datos';
  A['Podemos usar a categoria das fontes de dados para determinar o tipo de informações que você pode compartilhar usando as Ferramentas Comerciais da Meta.'] = 'Podemos usar la categoría de las fuentes de datos para determinar el tipo de información que puedes compartir con las Herramientas para empresas de Meta.';
  A['Saiba mais'] = 'Más información';
  A['Gerenciar'] = 'Gestionar';
  A['Analisar'] = 'Revisar';
  A['Ativar'] = 'Activar';
  A['Gerencie o bloqueio de parâmetros'] = 'Gestiona el bloqueo de parámetros';
  A['Analise os parâmetros que foram bloqueados porque eles talvez não sigam nossos Termos das Ferramentas Comerciais da Meta. Você pode solicitar que os parâmetros corrigidos sejam desbloqueados ou mantê-los bloqueados.'] = 'Revisa los parámetros que se bloquearon porque quizás no cumplen nuestras Condiciones de las Herramientas para empresas de Meta. Puedes solicitar que los parámetros corregidos se desbloqueen o mantenerlos bloqueados.';
  A['Gerencie o bloqueio de eventos'] = 'Gestiona el bloqueo de eventos';
  A['Analise e acompanhe os status dos eventos.'] = 'Revisa y sigue el estado de los eventos.';
  A['Configuração básica: desativada'] = 'Configuración básica: desactivada';
  A['Permissões de tráfego'] = 'Permisos de tráfico';
  A['Use uma lista de bloqueio ou de permissão para controlar se os domínios podem enviar eventos do Facebook pelo seu pixel. Sugerimos o uso de uma lista de permissão porque ajuda a garantir que o pixel não seja usado para enviar eventos por domínios não autorizados.'] = 'Usa una lista de bloqueados o de permitidos para controlar si los dominios pueden enviar eventos de Facebook por tu píxel. Te sugerimos usar una lista de permitidos porque ayuda a asegurar que el píxel no se use para enviar eventos desde dominios no autorizados.';
  A['Lista de permissão: só os domínios adicionados à lista de permissão podem enviar eventos por esse pixel para o Facebook. Os domínios que não estiverem na lista de permissão não poderão enviar eventos.'] = 'Lista de permitidos: solo los dominios agregados a la lista de permitidos pueden enviar eventos por este píxel a Facebook. Los dominios que no estén en la lista de permitidos no podrán enviar eventos.';
  A['Lista de bloqueio: só os domínios adicionados à lista de bloqueio não poderão enviar eventos por esse pixel para o Facebook. Os domínios que não estiverem na lista de bloqueio poderão enviar eventos.'] = 'Lista de bloqueados: solo los dominios agregados a la lista de bloqueados no podrán enviar eventos por este píxel a Facebook. Los dominios que no estén en la lista de bloqueados podrán enviar eventos.';
  A['Criar lista de permissão'] = 'Crear lista de permitidos';
  A['Criar lista de bloqueio'] = 'Crear lista de bloqueados';
  A['Gerenciar categorias de fontes de dados'] = 'Gestionar categorías de fuentes de datos';
  A['Analise as categorias das suas fontes de dados. Podemos usar essas categorias para ajudar a determinar e restringir certos tipos de informações que você pode compartilhar por meio das Ferramentas Comerciais da Meta. Essa categorização ajuda a evitar o compartilhamento com dados da Meta que sejam inconsistentes com nossos'] = 'Revisa las categorías de tus fuentes de datos. Podemos usar estas categorías para ayudar a determinar y restringir ciertos tipos de información que puedes compartir mediante las Herramientas para empresas de Meta. Esta categorización ayuda a evitar compartir con Meta datos que no sean coherentes con nuestras';
  A['Termos das Ferramentas Comerciais da Meta'] = 'Condiciones de las Herramientas para empresas de Meta';
  A['. Para saber mais, incluindo informações sobre quais restrições são aplicadas à sua fonte de dados, selecione Ver detalhes.'] = '. Para obtener más información, incluso sobre qué restricciones se aplican a tu fuente de datos, selecciona Ver detalles.';
  A['Sobre as restrições'] = 'Información sobre las restricciones';
  A['Filtrar por'] = 'Filtrar por';
  A['Canal ▾'] = 'Canal ▾';
  A['Categoria ▾'] = 'Categoría ▾';
  A['Status da análise ▾'] = 'Estado de la revisión ▾';
  A['Fonte de dados'] = 'Fuente de datos';
  A['Canal'] = 'Canal';
  A['Categoria'] = 'Categoría';
  A['Status da análise'] = 'Estado de la revisión';
  A['Nenhuma fonte de dados tem categorias aplicadas no momento.'] = 'Ninguna fuente de datos tiene categorías aplicadas en este momento.';
  A['Pesquisar fontes de dados'] = 'Buscar fuentes de datos';
  A['Gerenciar permissões de tráfego'] = 'Gestionar permisos de tráfico';
  A['Permita somente que determinados domínios enviem dados de tráfego e evento para você adicionando-os a uma lista de permissão. Você não receberá mais dados de tráfego e evento de todos os outros domínios que não estiverem na lista de permissão e que tiverem esse pixel instalado.'] = 'Permite que solo determinados dominios te envíen datos de tráfico y eventos agregándolos a una lista de permitidos. Ya no recibirás datos de tráfico y eventos de todos los demás dominios que no estén en la lista de permitidos y que tengan este píxel instalado.';
  A['Bloqueie domínios específicos e impeça-os de usar seu pixel adicionando o nome do domínio que você deseja bloquear a uma lista de bloqueio. Você continuará recebendo dados de tráfego e evento de todos os outros domínios que não estiverem incluídos na lista de bloqueio e que tiverem o código de base desse pixel instalado.'] = 'Bloquea dominios específicos e impide que usen tu píxel agregando el nombre del dominio que quieres bloquear a una lista de bloqueados. Seguirás recibiendo datos de tráfico y eventos de todos los demás dominios que no estén incluidos en la lista de bloqueados y que tengan el código base de este píxel instalado.';
  A['Insira um domínio'] = 'Ingresa un dominio';
  A['Pesquise ou insira um domínio (por exemplo, amostra.com)'] = 'Busca o ingresa un dominio (por ejemplo, ejemplo.com)';
  A['Avançar ›'] = 'Siguiente ›';
  A['Tráfego de domínio mais relevante ⓘ'] = 'Tráfico de dominio más relevante ⓘ';
  A['Domínio'] = 'Dominio';
  A['Eventos recebidos'] = 'Eventos recibidos';
  A['Permissões'] = 'Permisos';
  A['recebido pela última vez há 3 horas'] = 'recibido por última vez hace 3 horas';
  A['Recebido pela última vez há 5 dias'] = 'Recibido por última vez hace 5 días';
  A['recebido pela última vez há 2 horas'] = 'recibido por última vez hace 2 horas';
  A['Permitido'] = 'Permitido';
  A['Adicionar à lista de permissão'] = 'Agregar a la lista de permitidos';
  A['Adicionar à lista de bloqueio'] = 'Agregar a la lista de bloqueados';
  A['🧪 O simulador para aqui'] = '🧪 El simulador se detiene aquí';
  A['Você escolheu'] = 'Elegiste';
  A['para a lista de permissão. A tela que aparece depois disso não foi conferida, então não está no simulador. Lembre: com a lista de permissão, os outros domínios ficam bloqueados na hora, e os eventos perdidos enquanto um domínio está bloqueado não voltam.'] = 'para la lista de permitidos. La pantalla que aparece después no se revisó, así que no está en el simulador. Recuerda: con la lista de permitidos, los demás dominios quedan bloqueados al instante, y los eventos perdidos mientras un dominio está bloqueado no vuelven.';
  A['para a lista de bloqueio. A tela que aparece depois disso não foi conferida, então não está no simulador. Lembre: com a lista de bloqueio, só os domínios da lista deixam de enviar eventos; os outros continuam.'] = 'para la lista de bloqueados. La pantalla que aparece después no se revisó, así que no está en el simulador. Recuerda: con la lista de bloqueados, solo los dominios de la lista dejan de enviar eventos; los demás siguen.';
  A['Fechar'] = 'Cerrar';
  A['Abrir menu suspenso'] = 'Abrir menú desplegable';
  A['Fora do simulador (tela não conferida)'] = 'Fuera del simulador (pantalla no revisada)';
  A['Não simulado: na tela real o botão liga a restrição na hora'] = 'No simulado: en la pantalla real el botón activa la restricción al instante';
  for (var k in A) D[k] = A[k];
  var un = function (u) { return u === 's' ? 's' : u === 'min' ? ' min' : u === 'h' ? ' h' : ' ' + u };
  /* --- Diagnóstico de casos (16/10/2026): avisos do Diagnóstico, origem Servidor e janela "Instalar o código manualmente" --- */
  var N = {
    '⛔ Preço ausente ou inválido no parâmetro de valor': '⛔ Precio ausente o inválido en el parámetro de valor',
    'O value do Purchase está vazio ou fora do formato: precisa ser um número decimal maior ou igual a zero, com ponto decimal, sem letras, símbolos de moeda nem vírgulas (ex.: 99.90).': 'El value del Purchase está vacío o fuera del formato: debe ser un número decimal mayor o igual a cero, con punto decimal, sin letras, símbolos de moneda ni comas (ej.: 99.90).',
    '⛔ O parâmetro de moeda tem um código de 3 letras ausente e/ou inválido': '⛔ El parámetro de moneda tiene un código de 3 letras ausente y/o inválido',
    'O currency precisa ser o código de 3 letras da moeda (ex.: BRL ou USD).': 'El currency debe ser el código de 3 letras de la moneda (ej.: BRL o USD).',
    'O mesmo evento PageView chegou duas vezes da mesma página ao mesmo tempo. Confira se o código base não foi instalado duas vezes (por exemplo, colado à mão e também pela integração).': 'El mismo evento PageView llegó dos veces de la misma página al mismo tiempo. Revisa que el código base no se haya instalado dos veces (por ejemplo, pegado a mano y también por la integración).',
    '⚠️ Incompatibilidade de nome de evento': '⚠️ Incompatibilidad de nombre de evento',
    '⛔ Vários eventos em uma ação': '⛔ Varios eventos en una acción',
    '⛔ Eventos de compra redundantes': '⛔ Eventos de compra redundantes',
    '⚠️ Vários eventos em uma ação': '⚠️ Varios eventos en una acción',
    'O pixel recebeu quatro ou mais eventos de compra para uma única compra. Isso superestima as vendas. Deixe o Purchase em um só lugar.': 'El píxel recibió cuatro o más eventos de compra para una sola compra. Eso sobreestima las ventas. Deja el Purchase en un solo lugar.',
    'O pixel enviou mais de um evento de compra para uma única ação do visitante. Confira se o Purchase está em mais de um lugar (código manual e integração, por exemplo).': 'El píxel envió más de un evento de compra para una sola acción del visitante. Revisa si el Purchase está en más de un lugar (código manual e integración, por ejemplo).',
    '1. Código base do Pixel': '1. Código base del píxel', 'Copiar código base': 'Copiar código base',
    '2. Código de um evento (exemplo: Purchase)': '2. Código de un evento (ejemplo: Purchase)',
    'O código do evento vai SÓ na página da ação (para a compra, a página de pedido concluído), depois do código base. O valor e a moeda padrão são 0.00 e USD: troque pelos reais.': 'El código del evento va SOLO en la página de la acción (para la compra, la página de pedido completado), después del código base. El valor y la moneda por defecto son 0.00 y USD: cámbialos por los reales.',
    'Copiar código do Purchase': 'Copiar código del Purchase',
    'Pixel da Mari': 'Pixel da Mari', 'Purchase': 'Purchase', 'purchase': 'purchase', 'PageView': 'PageView', '<head>': '<head>', 'andreaabcj-cmd.github.io': 'andreaabcj-cmd.github.io', 'http://localhost:8765/loja.html': 'http://localhost:8765/loja.html'
  };
  for (var kk in N) D[kk] = N[kk];
  P.push([/^Marina · ([\d\/]+)$/, function (m) { return 'Marina · ' + m[1] }]);
  P.push([/^Servidor · há (\d+) ?(s|min|h|d)$/, function (m) { return 'Servidor · hace ' + m[1] + un(m[2]) }]);
  P.push([/^O Purchase está chegando de páginas que não são de compra \(ex\.: (.+)\)\. O pixel deve enviar um evento por ação do visitante\. Verifique o cabeçalho do modelo HTML: o único código da Meta no cabeçalho deve ser o código base\. O Purchase vai só na página que indica a compra\.$/, function (m) { return 'El Purchase está llegando de páginas que no son de compra (ej.: ' + m[1] + '). El píxel debe enviar un evento por acción del visitante. Revisa el encabezado de la plantilla HTML: el único código de Meta en el encabezado debe ser el código base. El Purchase va solo en la página que indica la compra.' }]);
  P.push([/^O evento “(.+)” é parecido com o evento padrão, mas não idêntico\. Os nomes diferenciam maiúsculas de minúsculas: para medir como evento padrão, o código precisa usar exatamente “(.+)”\.$/, function (m) { return 'El evento “' + m[1] + '” es parecido al evento estándar, pero no idéntico. Los nombres distinguen mayúsculas de minúsculas: para medir como evento estándar, el código debe usar exactamente “' + m[2] + '”.' }]);
  P.push([/^(\d+) eventos?$/, function (m) { return m[1] + (m[1] === '1' ? ' evento' : ' eventos') }]);
  P.push([/^Navegador · há (\d+) ?(s|min|h|d)$/, function (m) { return 'Navegador · hace ' + m[1] + un(m[2]) }]);
  P.push([/^há (\d+) ?(s|min|h|d)$/, function (m) { return 'hace ' + m[1] + un(m[2]) }]);
  /* Pixel avanzado: calidad de la coincidencia, deduplicación e información prohibida (textos de entrenamiento, por confirmar) */
  A['Navegador e servidor'] = 'Navegador y servidor';
  A['Qualidade da correspondência de eventos'] = 'Calidad de la coincidencia de eventos';
  A['Para eventos do site enviados pela API de Conversões. A pontuação vai de 0 a 10 e mostra o quanto as informações do cliente enviadas com o evento ajudam a ligá-lo a uma Conta Meta.'] = 'Para eventos del sitio enviados por la API de Conversiones. La puntuación va de 0 a 10 y muestra cuánto ayudan las informaciones del cliente enviadas con el evento a vincularlo con una cuenta de Meta.';
  A['Ainda não há eventos enviados pelo servidor (API de Conversões). A qualidade da correspondência só aparece para eles.'] = 'Aún no hay eventos enviados por el servidor (API de Conversiones). La calidad de la coincidencia solo aparece para ellos.';
  A['Ações recomendadas:'] = 'Acciones recomendadas:';
  A['Boa cobertura de parâmetros do cliente.'] = 'Buena cobertura de parámetros del cliente.';
  A['⚠ Pontuação do treino (a Meta só informa que depende da qualidade dos parâmetros e da porcentagem de eventos com correspondência): a conferir com a tela real.'] = '⚠ Puntuación del entrenamiento (Meta solo informa que depende de la calidad de los parámetros y del porcentaje de eventos con coincidencia): por confirmar con la pantalla real.';
  A['Desduplicado'] = 'Deduplicado';
  A['⛔ bloqueado pela Meta: possível informação proibida'] = '⛔ bloqueado por Meta: posible información prohibida';
  A['⚠️ Eventos duplicados do Pixel e da API de Conversões'] = '⚠️ Eventos duplicados del píxel y de la API de Conversiones';
  A['O mesmo evento chegou pelo navegador e pelo servidor sem o mesmo event_id. Para desduplicar, o event_name e o event_id precisam ser idênticos nos dois: sem isso, a compra é contada duas vezes. (a conferir com a mensagem real)'] = 'El mismo evento llegó por el navegador y por el servidor sin el mismo event_id. Para deduplicar, el event_name y el event_id deben ser idénticos en los dos: sin eso, la compra se cuenta dos veces. (por confirmar con el mensaje real)';
  A['⛔ Parâmetros bloqueados: possível informação proibida'] = '⛔ Parámetros bloqueados: posible información prohibida';
  for (var k3 in A) D[k3] = A[k3];   // as linhas acima vieram depois da cópia para o dicionário (19/10: estavam sem efeito)
  P.push([/^(\d+) evento\(s\) · últimas 48 horas$/, function (m) { return m[1] + ' evento(s) · últimas 48 horas' }]);
  P.push([/^enviar (.+)\.$/, function (m) {
    var d = { 'e-mail (prioridade alta)': 'correo (prioridad alta)', 'telefone (prioridade média)': 'teléfono (prioridad media)', 'ID externo (prioridade média)': 'ID externo (prioridad media)', 'país (prioridade média)': 'país (prioridad media)', 'primeiro nome (prioridade baixa)': 'nombre (prioridad baja)', 'sobrenome (prioridade baixa)': 'apellido (prioridad baja)', 'cidade (prioridade baixa)': 'ciudad (prioridad baja)', 'CEP (prioridade baixa)': 'código postal (prioridad baja)', 'estado (prioridade baixa)': 'estado (prioridad baja)' };
    return 'enviar ' + m[1].split(', ').map(function (x) { return d[x] || x }).join(', ') + '.' }]);
  P.push([/^Detectamos parâmetros com informações possivelmente sensíveis \(ex\.: “(.+)” no evento (.+)\)\. Informações de saúde, financeiras e outras categorias sensíveis não podem ser compartilhadas \(vale para parâmetros de URL e eventos personalizados\)\. O anunciante é o responsável\. \(a conferir com a mensagem real\)$/, function (m) { return 'Detectamos parámetros con información posiblemente sensible (ej.: “' + m[1] + '” en el evento ' + m[2] + '). La información de salud, financiera y otras categorías sensibles no puede compartirse (vale para parámetros de URL y eventos personalizados). El anunciante es el responsable. (por confirmar con el mensaje real)' }]);
  // Conversões personalizadas (tela real em es_LA, 23/10/2026)
  var CC = {
    'Conversões personalizadas': 'Conversiones personalizadas', 'Comece com conversões personalizadas': 'Empieza a usar las conversiones personalizadas',
    'Use as conversões personalizadas para mensurar os resultados importantes para a sua empresa e otimizar os anúncios para eventos personalizados e tráfego da URL.': 'Usa conversiones personalizadas para medir los resultados que le importan a tu negocio y optimizar tus anuncios para impulsar el tráfico de la URL y los eventos personalizados.',
    'Saiba mais': 'Más información', 'Criar conversão personalizada': 'Crear conversión personalizada', 'Mensurar': 'Medir', 'Otimizar': 'Optimizar', 'Compartilhar': 'Compartir',
    'Use as conversões personalizadas para mensurar as interações importantes para a sua empresa. Elas podem ser usadas para criar públicos personalizados ao direcionar seus anúncios.': 'Usa las conversiones personalizadas para medir las interacciones que le importan a tu negocio. Podrás usarlas para crear públicos personalizados para tus anuncios.',
    'Use as conversões personalizadas para mostrar anúncios para as pessoas com maior probabilidade de realizar ações específicas. Você pode mapear seus eventos personalizados para os eventos padrão e usá-los para otimizar sua veiculação de anúncios.': 'Usa las conversiones personalizadas para mostrar anuncios a las personas que tienen más probabilidades de realizar acciones específicas. Puedes asignar tus eventos personalizados a eventos estándar y usarlos para optimizar la entrega de anuncios.',
    'Colabore em uma campanha compartilhando conversões personalizadas com outras contas comerciais ou de anúncios no Facebook ou com agências de terceiros.': 'Colabora en una campaña y comparte conversiones personalizadas con otras cuentas publicitarias o comerciales en Facebook o con agencias de terceros.',
    'Criar uma conversão personalizada': 'Crear una conversión personalizada', 'Nome': 'Nombre', 'Descrição': 'Descripción', '· Opcional': '· Opcional', 'Fonte de dados': 'Origen de datos', 'Evento': 'Evento',
    'Lead': 'Cliente potencial', 'Pesquisar': 'Buscar', 'Adicionar informações de pagamento': 'Agregar información de pago', 'Compra': 'Comprar', 'Iniciar finalização da compra': 'Iniciar pago', 'Adicionar ao carrinho': 'Agregar al carrito', 'Ver conteúdo': 'Ver contenido', 'Todo o tráfego do URL': 'Todo el tráfico de la URL',
    'Escolha um evento padrão para a otimização': 'Elegir un evento estándar para la optimización', 'Categoria selecionada pela Meta (recomendado)': 'Categoría seleccionada por Meta (recomendado)',
    'A Meta escolherá e gerenciará ativamente a melhor categoria de otimização para sua conversão personalizada.': 'Meta elegirá y administrará de forma activa la mejor categoría de optimización para tu conversión personalizada.',
    'Adicionar à lista de desejos': 'Agregar a la lista de deseos', 'Assinar': 'Suscribirte', 'Concluir inscrição': 'Completar registro', 'Contato': 'Contactar', 'Doar': 'Donar', 'Encontrar localização': 'Buscar ubicación', 'Enviar candidatura': 'Enviar solicitud', 'Iniciar período de avaliação': 'Iniciar prueba', 'Personalizar produto': 'Personalizar producto', 'Programação': 'Programar', 'Atribuição personalizada': 'Atribución personalizada',
    'Regras': 'Reglas', '· Obrigatório': '· Obligatorio', 'Essa conversão personalizada deve cumprir todas estas regras:': 'La conversión personalizada debe cumplir todas estas reglas:', 'contém': 'contiene', 'não contém': 'no contiene', 'é igual a': 'es igual a',
    'No simulador, só a regra URL está montada (os outros tipos foram vistos só na lista).': 'En el simulador, solo la regla URL está armada (los otros tipos se vieron solo en la lista).',
    'Inserir um valor de conversão ⓘ': 'Ingresar un valor de conversión ⓘ',
    'Insira um valor monetário para essa conversão para que você possa rastrear seu retorno sobre o gasto com o anúncio. Se você deixar esse campo em branco, o valor será zero por padrão para cada conversão.': 'Ingresa un valor monetario para esta conversión para que puedas hacer un seguimiento del retorno de la inversión publicitaria. Si dejas este campo en blanco, el valor será cero de forma predeterminada para cada conversión.',
    'Para cumprir nossas políticas e ajudar a proteger a privacidade dos seus usuários, não compartilhe dados que incluam ou se baseiem em, diretamente ou não, informações de saúde, informações financeiras, informações de relatórios do consumidor ou outras categorias de informações sensíveis ao criar conversões personalizadas. Acesse a Central de Ajuda para saber mais sobre informações proibidas.': 'Para cumplir con nuestras políticas y ayudar a proteger la privacidad de tus usuarios, no compartas datos que incluyan o se basen, de forma directa o indirecta, en información de salud, información financiera, información de consumidores u otras categorías de información confidencial cuando crees conversiones personalizadas. Ve al servicio de ayuda para obtener más detalles sobre la información prohibida.',
    'Ao continuar, você concorda com os Termos das Ferramentas Comerciais da Meta.': 'Al continuar, aceptas las Condiciones de las herramientas empresariales de Meta.',
    'Cancelar': 'Cancelar', 'Criar': 'Crear', '✓ Conferido com a tela real em 23/10/2026 (nada foi criado)': '✓ Revisado con la pantalla real el 23/10/2026 (no se creó nada)',
    'Regra': 'Regla', 'Valor': 'Valor', 'Status': 'Estado', 'Nenhuma atividade ainda': 'Todavía no hay actividad',
    'Até 100 conversões personalizadas por conta de anúncios. As regras não podem ser editadas depois (só nome, descrição e valor); para mudar uma regra, crie outra. Sem uso por 2 anos, ela é arquivada. (Central de Ajuda da Meta.) A lista e o status do simulador não foram vistos na tela real (a conferir).': 'Hasta 100 conversiones personalizadas por cuenta publicitaria. Las reglas no se pueden editar después (solo nombre, descripción y valor); para cambiar una regla, crea otra. Sin uso por 2 años, se archiva. (Centro de ayuda de Meta.) La lista y el estado del simulador no se vieron en la pantalla real (por confirmar).',
    '✓ Layout conferido com o Gerenciador de Eventos real em 23/10/2026': '✓ Diseño revisado con el Administrador de eventos real el 23/10/2026',
    'Como você a identificará': 'Cómo la identificarás', 'Forneça detalhes para informar o contexto': 'Agrega detalles para tener más contexto', 'Adicionar palavras-chave da URL': 'Agrega palabras clave de URL', 'Insira um valor numérico': 'Ingresa un valor numérico'
  };
  for (var k4 in CC) D[k4] = CC[k4];
  /* Telas do Pixel conferidas em 25/10/2026 (espanhol real da Meta onde visto) */
  var PX = {
    'Eventos de teste': 'Probar eventos',
    'Eventos de Teste': 'Probar eventos',
    'Mensure automaticamente as conversões nos dispositivos dos clientes': 'Medir las conversiones automáticamente en los dispositivos de los clientes',
    'Em 12 de novembro de 2026, todos os pixels qualificados começarão a mensurar conversões em dispositivos de clientes. Nenhuma informação de identificação do cliente desse processo será compartilhada com a Meta. Você pode recusar quando quiser no Gerenciador de Eventos.': 'A partir del 12 de noviembre de 2026, todos los píxeles que cumplan los requisitos comenzarán a medir las conversiones en los dispositivos de los clientes. No se comparte con Meta ningún dato de identificación de los clientes obtenido en este proceso. Puedes desactivar esta opción cuando quieras en el administrador de eventos.',
    'Status': 'Estado',
    'Usado por': 'Usado por',
    'Método de conexão': 'Método de conexión',
    'Ver conteúdo': 'Ver contenido',
    'Adicionar ao carrinho': 'Agregar al carrito',
    'Iniciar finalização da compra': 'Iniciar pago',
    'Compra': 'Comprar',
    'Adicionar informações de pagamento': 'Agregar información de pago',
    'Pesquisar': 'Buscar',
    'Lead': 'Cliente potencial',
    'Adicionar à lista de desejos': 'Agregar a la lista de deseos',
    'Concluir cadastro': 'Completar registro',
    'Contato': 'Contacto',
    'Agendar': 'Programar',
    'Teste seus eventos': 'Probar los eventos',
    'Use os eventos de teste para confirmar se os eventos do site, app, CRM e servidor foram configurados corretamente.': 'Usa los eventos de prueba para verificar que los eventos de tu sitio web, app, CRM y servidor estén bien configurados.',
    'O comportamento do teste pode ser diferente dos ambientes reais. Suas configurações de anúncios pessoais não afetarão os dados do teste.': 'Ten en cuenta que el comportamiento de prueba puede diferir en los entornos en vivo y que la configuración personal del anuncio no afectará los datos de prueba.',
    'Confirme se os eventos do seu servidor estão configurados corretamente': 'Confirma que los eventos de tu servidor estén configurados correctamente',
    'Confirme se os eventos do seu site estão configurados corretamente': 'Confirma que los eventos de tu sitio web estén configurados correctamente',
    'Você pode realizar um teste para verificar se o servidor está se conectando e compartilhando dados de eventos. Certifique-se de que a página Testar eventos permaneça aberta no Gerenciador de Eventos durante o teste.': 'Puedes realizar una prueba para asegurarte de que tu servidor se esté conectando y esté compartiendo datos de eventos. Asegúrate de que la página \"Probar eventos\" permanezca abierta en el administrador de eventos durante la prueba.',
    'Para executar o teste:': 'Para ejecutar la prueba:',
    'Copie seu código de teste único. Esse código será usado para validar seus dados na próxima etapa.': 'Copia el código de prueba único. Ese código se usará para validar tus datos en el próximo paso.',
    'Abra o Explorador da Graph API. Verifique se todos os parâmetros inseridos acima correspondem ao conteúdo exibido no payload. Envie e retorne para esta página.': 'Abre el explorador de la API Graph. Asegúrate de que todos los parámetros ingresados arriba coincidan con lo que se muestra en la carga útil. Luego, realiza el envío y vuelve a esta página.',
    'Certifique-se de que a página Testar eventos permaneça aberta no Gerenciador de Eventos durante o teste.': 'Asegúrate de que la página \"Probar eventos\" permanezca abierta en el administrador de eventos durante la prueba.',
    'Insira o URL do seu site e clique em Eventos de Teste.': 'Ingresa la URL de tu sitio web y haz clic en \"Probar eventos\".',
    'Realize uma ação em uma página do site.': 'Realiza una acción en una página del sitio web.',
    'Por exemplo, adicione um item ao seu carrinho ou simule uma transação de compra.': 'Por ejemplo, agrega un artículo al carrito o simula una transacción de compra.',
    'A página Testar eventos deve exibir os eventos das ações que você executou no site.': 'La página \"Probar eventos\" debe mostrar los eventos de las acciones que realizaste en el sitio web.',
    'Insira a URL do site': 'Ingresa la URL del sitio web',
    '⚠ A lista de eventos chegando é do treino: no Pixel real o teste não foi rodado (a conferir).': '⚠ La lista de eventos que llegan es de la capacitación: en el píxel real no se ejecutó la prueba (por confirmar).',
    '› botão Eventos de Teste) e navegue: os eventos aparecem aqui.': '› botón Probar eventos) y navega: los eventos aparecen aquí.',
    'Encontre e resolva problemas que estejam impedindo seus pixels de serem disparado corretamente. Receba recomendações sobre como melhorar seus eventos.': 'Encuentra y resuelve problemas que impiden que los píxeles se activen correctamente. Obtén recomendaciones sobre cómo mejorar los eventos.',
    'Detectados anteriormente': 'Detectados previamente',
    'Ignorados': 'Ignorados',
    'Erros ativos': 'Errores activos',
    'Se um erro for detectado nos últimos 3 dias, ele aparecerá aqui. Siga as etapas para resolvê-lo.': 'Si se detectó un error durante los últimos 3 días, se mostrará aquí. Sigue los pasos para resolverlo.',
    'Veja os detalhes do seu Pixel da Meta.': 'Consulta los detalles de tu píxel de Meta.',
    'Identificação do pixel': 'Identificador del píxel',
    'Criador de conteúdo': 'Creador',
    'Proprietário': 'Propietario',
    'Gerencie as categorias de fontes de dados': 'Administrar categorías de orígenes de datos',
    'Gerenciar': 'Administrar',
    'Configuração de eventos': 'Configuración de eventos',
    'Adicione eventos ausentes recomendados por IA automaticamente ou edite e gerencie seus eventos de Pixel manualmente usando a ferramenta de configuração de eventos.': 'Agrega automáticamente los eventos que faltan según la recomendación de la IA o edita y administra tus eventos del píxel de forma manual por medio de la herramienta de configuración de eventos.',
    'Abrir a ferramenta de configuração de eventos': 'Abrir herramienta de configuración de eventos',
    'Eventos automáticos': 'Eventos automáticos',
    'Desativado': 'Desactivado',
    'Quando esse recurso está habilitado, você concorda em permitir que a IA adicione e gerencie eventos padrão no seu site. Você pode analisar os eventos e desativar o recurso quando quiser aqui.': 'Cuando esta opción está activada, aceptas que la IA agregue eventos estándar a tu sitio web y los administre. Puedes revisar los eventos y desactivar la función cuando quieras aquí.',
    'Gerenciar eventos': 'Administrar eventos',
    'Configurações de cookies': 'Configuración de cookies',
    'Escolha como deseja usar seu Pixel da Meta com cookies.': 'Elige cómo quieres usar tu píxel de Meta con cookies.',
    'Uso de cookies': 'Uso de cookies',
    'Cookies internos: ativados': 'Cookies de origen: activadas',
    'Cookies internos: desativados': 'Cookies de origen: desactivadas',
    'Você pode optar por compartilhar dados dos cookies internos do seu site com o Facebook. Isso nos ajudará a veicular anúncios relevantes para pessoas que possam ter interesse nos seus produtos ou serviços.': 'Puedes optar por compartir datos de las cookies de origen de tu sitio web con Facebook. De este modo, podremos mostrar anuncios relevantes a las personas que podrían estar interesadas en tus productos o servicios.',
    'Editar': 'Editar',
    'Ativar correspondência avançada automática': 'Activar coincidencias avanzadas automáticas',
    'Correspondência avançada automática': 'Coincidencias avanzadas automáticas',
    'Use as informações do cliente para corresponder instâncias de eventos no seu site a uma Conta Meta. Isso nos ajuda a mostrar anúncios relevantes para as pessoas na Meta.': 'Usa la información de los clientes para asociar instancias de eventos en tu sitio web con una cuenta de Meta. Esto nos ayuda a mostrar anuncios relevantes a las personas en Meta.',
    'Mostrar parâmetros de informações do cliente': 'Mostrar parámetros de información del cliente',
    'Email': 'Correo electrónico',
    'Gênero': 'Sexo',
    'Cidade, estado, código postal e país': 'Ciudad, estado/provincia, código postal y país',
    'Nome e sobrenome': 'Nombre y apellido',
    'Número de telefone': 'Número de teléfono',
    'Data de nascimento': 'Fecha de nacimiento',
    'Identificação externa': 'Identificador externo',
    'API de Conversões': 'API de conversiones',
    'Envie eventos da web diretamente do seu servidor usando um dos métodos de integração a seguir.': 'Envía eventos web directamente desde tu servidor usando uno de los siguientes métodos de integración.',
    'Configurar manualmente': 'Configurar manualmente',
    'Você pode configurar a API de Conversões seguindo nosso guia passo a passo.': 'Puedes configurar la API de conversiones con nuestra guía paso a paso.',
    'Começar': 'Empezar',
    'Configurar integração direta': 'Configurar integración directa',
    'A integração direta é uma opção mais personalizável para configurar a API de Conversões e o Pixel da Meta. Você precisará da ajuda de um desenvolvedor para realizar esse processo.': 'La integración directa es una opción más personalizable para configurar la API de conversiones y el píxel de Meta. Necesitarás la ayuda de un desarrollador para este proceso.',
    'Configurar por meio de uma integração de parceiros': 'Configurar mediante una integración de socios',
    'Conecte facilmente sua atividade da web por meio de uma integração de parceiros, sem a necessidade de código. Escolha entre o Wordpress, o Tealium, o Segment e muitos outros.': 'Conecta fácilmente tu actividad web mediante una integración de socios, sin necesidad de código. Elige entre WordPress, Tealium, Segment y muchos otros.',
    'Escolher um parceiro': 'Elegir un socio',
    '🧪 Só no treino: simular a API de Conversões': '🧪 Solo en la capacitación: simular la API de conversiones',
    'Liga eventos de servidor de mentira na Lojinha, para estudar desduplicação e qualidade da correspondência. Na tela real esta chave não existe: a API se configura por um dos caminhos acima.': 'Activa eventos de servidor ficticios en la Lojinha, para estudiar la deduplicación y la calidad de la coincidencia. En la pantalla real este interruptor no existe: la API se configura por uno de los caminos de arriba.',
    'Seu Pixel da Meta pode encontrar e relatar eventos importantes no site, como compras ou inscrições, com base no tráfego do seu site, no texto do botão e nos metadados da página. Esse recurso pode ajudar você a configurar eventos sem precisar instalar um código. Você pode optar por ativar ou desativar essa funcionalidade.': 'Tu píxel de Meta puede encontrar y registrar eventos importantes en el sitio web, como compras o registros, según el tráfico del sitio, el texto de los botones y los metadatos de la página. Esta función puede ayudarte a configurar eventos sin instalar código. Puedes activarla o desactivarla.',
    '✓ Layout conferido com o Gerenciador de Eventos real em 25/10/2026': '✓ Diseño revisado con el Administrador de eventos real el 25/10/2026'
  };
  for (var k5 in PX) D[k5] = PX[k5];
  P.push([/^Recebido pela última vez há (\d+) ?(s|min|h|d)$/, function (m) { return 'Última recepción: Hace ' + m[1] + ' ' + m[2] }]);
  P.push([/^Ativos \((\d+)\)$/, function (m) { return 'Activos (' + m[1] + ')' }]);
})();
