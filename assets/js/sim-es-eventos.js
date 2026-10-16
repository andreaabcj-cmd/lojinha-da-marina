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
  P.push([/^(\d+) evento\(s\) · últimas 48 horas$/, function (m) { return m[1] + ' evento(s) · últimas 48 horas' }]);
  P.push([/^enviar (.+)\.$/, function (m) {
    var d = { 'e-mail (prioridade alta)': 'correo (prioridad alta)', 'telefone (prioridade média)': 'teléfono (prioridad media)', 'ID externo (prioridade média)': 'ID externo (prioridad media)', 'país (prioridade média)': 'país (prioridad media)', 'primeiro nome (prioridade baixa)': 'nombre (prioridad baja)', 'sobrenome (prioridade baixa)': 'apellido (prioridad baja)', 'cidade (prioridade baixa)': 'ciudad (prioridad baja)', 'CEP (prioridade baixa)': 'código postal (prioridad baja)', 'estado (prioridade baixa)': 'estado (prioridad baja)' };
    return 'enviar ' + m[1].split(', ').map(function (x) { return d[x] || x }).join(', ') + '.' }]);
  P.push([/^Detectamos parâmetros com informações possivelmente sensíveis \(ex\.: “(.+)” no evento (.+)\)\. Informações de saúde, financeiras e outras categorias sensíveis não podem ser compartilhadas \(vale para parâmetros de URL e eventos personalizados\)\. O anunciante é o responsável\. \(a conferir com a mensagem real\)$/, function (m) { return 'Detectamos parámetros con información posiblemente sensible (ej.: “' + m[1] + '” en el evento ' + m[2] + '). La información de salud, financiera y otras categorías sensibles no puede compartirse (vale para parámetros de URL y eventos personalizados). El anunciante es el responsable. (por confirmar con el mensaje real)' }]);
})();
