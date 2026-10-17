/* Dicionário PT → ES das telas do simulador do Gerenciador de Comércio (Administrador de ventas) · Catálogo.
   Textos copiados das telas reais em espanhol (?locale=es_LA, 16/10/2026); o que não foi visto fica no padrão da Meta (a conferir). Ver _roteiro/glossario_es_meta.md. */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {}, P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var A = {
    '🧪 Simulador de treinamento do Gerenciador de Comércio · nada aqui vai para a Meta ·': '🧪 Simulador de capacitación del Administrador de ventas · nada de aquí va a Meta ·',
    '✓ Telas conferidas com o Gerenciador de Comércio real em 16/10/2026 (catálogo de aula)': '✓ Pantallas revisadas con el Administrador de ventas real el 16/10/2026 (catálogo de práctica)',
    '⚠ A janela de “Criar conjunto” ainda não foi vista · a conferir com a tela real': '⚠ La ventana de “Crear conjunto” todavía no se vio · por confirmar con la pantalla real',
    '⚠ A janela real de edição ainda não foi vista · a conferir com a tela real': '⚠ La ventana real de edición todavía no se vio · por confirmar con la pantalla real',
    '⚠ Os textos das opções 2 a 4 foram resumidos das telas reais · a conferir com a tela real': '⚠ Los textos de las opciones 2 a 4 se resumieron de las pantallas reales · por confirmar con la pantalla real',
    'Pesquisa por idioma e país (no simulador, escolha uma opção).': 'Búsqueda por idioma y país (en el simulador, elige una opción).',
    /* menu e início */
    'Gerenciador de Comércio': 'Administrador de ventas', 'Ativos': 'Activos', 'Todas as ferramentas': 'Todas las herramientas', 'Usadas com frequência': 'Usadas frecuentemente',
    'Gerenciador de Anúncios': 'Administrador de anuncios', 'Gerenciador de Eventos': 'Administrador de eventos', 'Regras automatizadas': 'Reglas automáticas', 'Lojinha da Marina Aula': 'Lojinha da Marina Aula',
    'Visão geral': 'Resumen', 'Catálogo': 'Catálogo', 'Produtos': 'Productos', 'Conjuntos': 'Conjuntos', 'Fontes de dados': 'Orígenes de datos', 'Eventos': 'Eventos', 'Modelos de imagem': 'Plantillas de imágenes', 'Ofertas': 'Ofertas', 'Lojas': 'Tiendas', 'Lista de tarefas': 'Lista de tareas pendientes', 'Configurações': 'Configurar',
    'Contas comerciais': 'Cuentas de comercio', 'Adicionar conta': 'Agregar cuenta', 'Venda em uma loja personalizada': 'Vender desde una tienda personalizada',
    'Para começar a vender seus produtos no Facebook e no Instagram, adicione uma loja. Durante a configuração, você pode conectar um catálogo com os produtos que gostaria de vender ou pode criar um novo catálogo.': 'Agrega una tienda para empezar a vender tus productos en Facebook e Instagram. Durante la configuración, puedes conectar un catálogo preexistente con productos que quieras vender, o bien crear uno nuevo.',
    'Catálogos': 'Catálogos', 'Pesquisar por nome ou ID': 'Buscar por nombre o identificador', 'Gerenciar lista': 'Administrar lista', 'Sem acesso': 'Sin acceso',
    'Para ter a melhor experiência de comércio, recomendamos que use apenas um catálogo para todo o seu inventário. Você pode atualizar, excluir ou substituir itens quando quiser.': 'Para obtener una experiencia comercial óptima, recomendamos usar un solo catálogo para todo el inventario. Puedes actualizar, eliminar o reemplazar artículos cuando quieras.',
    /* aviso de novo catálogo */
    'Tem certeza de que deseja criar um novo catálogo?': '¿Confirmas que quieres crear un nuevo catálogo?', 'Melhore o desempenho dos anúncios com um catálogo': 'Mejora el rendimiento de los anuncios con un catálogo',
    'Os anunciantes que usaram um catálogo tiveram uma redução de 17% no custo por resultado e um aumento de 15% no retorno sobre o investimento em publicidade. Consolide seus catálogos para ter melhores resultados.': 'Los anunciantes que usaron un catálogo obtuvieron un costo por resultado un 17% más bajo y un retorno de la inversión en publicidad un 15% más alto. Consolida los catálogos para obtener mejores resultados.',
    'Considere estas alternativas': 'Ten en cuenta estas alternativas', 'Criar conjuntos para agrupar produtos para campanhas específicas': 'Crear conjuntos para agrupar productos para campañas específicas',
    'Criar uma lista de países ou idiomas para localizar seu catálogo': 'Crear una lista de países o idiomas para localizar tu catálogo', 'Solicitar acesso a outros catálogos': 'Solicitar acceso a otros catálogos', 'Usar um catálogo existente': 'Usar un catálogo existente',
    /* novo catálogo */
    'Novo catálogo': 'Nuevo catálogo', 'Configure seu catálogo': 'Configurar tu catálogo', 'Armazene e gerencie informações sobre os produtos, conteúdos ou serviços que você quer promover.': 'Almacena y administra la información sobre los productos, el contenido o los servicios que quieras promocionar.',
    'Escolha o que melhor descreve seus produtos ou serviços': 'Elige lo que mejor describa tus productos o servicios', 'Selecione a opção mais relevante para otimizar a configuração do seu catálogo.': 'Selecciona la opción más relevante para optimizar la configuración de tu catálogo.', 'Não será possível alterá-la depois.': 'No podrás cambiarla más adelante.',
    'Produtos físicos': 'Productos físicos', 'Produtos online': 'Productos online', 'Produtos vendidos online, como artigos para casa e vestuário': 'Productos que se venden online, como artículos para el hogar y ropa', 'Imóveis': 'Inmuebles', 'Veículos': 'Vehículos', 'Veículos e ofertas': 'Vehículos y ofertas',
    'Produtos ou conteúdo digitais': 'Productos o contenido digitales', 'Serviços': 'Servicios', 'Produtos ou serviços locais': 'Productos o servicios locales', 'Outro': 'Otro',
    'Conectar-se a uma plataforma de parceiro': 'Conectar con una plataforma de socios', 'Sincronize e gerencie seus produtos de uma plataforma como Shopify ou WooCommerce +11': 'Sincroniza y administra tus productos desde una plataforma, como Shopify o WooCommerce +11',
    'Portfólio empresarial': 'Portfolio comercial', ': Lojinha da Marina Aula': ': Lojinha da Marina Aula', 'Nome do catálogo': 'Nombre del catálogo', 'Gerenciar acesso': 'Administra el acceso', '· Dar acesso às pessoas': '· Otorgar acceso a las personas',
    'Os usuários da empresa terão acesso total automático a este catálogo. Você poderá atualizar o acesso individual quando quiser nas Configurações da empresa.': 'Las personas del negocio obtendrán acceso total a este catálogo automáticamente. Puedes actualizar el acceso de forma individual más adelante en la configuración del negocio.',
    'Conecte seus dados': 'Conecta tus datos', 'Selecione o conjunto de dados que você quer usar para rastrear os produtos ou serviços com os quais as pessoas interagem no seu site ou app.': 'Selecciona el conjunto de datos que quieras usar para hacer un seguimiento de los productos o servicios con los que interactúan las personas en tu sitio web o app.',
    'Conectar dados': 'Conectar datos', 'Termos do Catálogo': 'Condiciones del catálogo', 'Cancelar': 'Cancelar', 'Avançar': 'Siguiente', 'Voltar': 'Volver',
    'Escolha como adicionar seus produtos ou serviços': 'Elige cómo agregar tus productos o servicios', 'Carregar um arquivo de dados': 'Subir un archivo de datos', 'Use uma planilha ou arquivo para adicionar e atualizar seus produtos automaticamente': 'Usa una hoja de cálculo o un archivo para agregar y actualizar tus productos automáticamente',
    'Produtos das suas redes sociais': 'Productos de tus redes sociales', 'Com sua permissão, adicionaremos automaticamente os produtos encontrados nos seus posts nos últimos 45 dias': 'Con tu permiso, agregaremos automáticamente los productos que encontremos en tus publicaciones de los últimos 45 días',
    'Adicionar seus produtos manualmente': 'Agregar tus productos manualmente', 'Adicione e edite seus produtos um por um, ou em lote': 'Agrega y edita tus productos uno por uno o en lote', 'Adicionar produtos depois': 'Agregar productos más tarde', 'Você pode criar o catálogo agora e adicionar os produtos mais tarde': 'Puedes crear el catálogo ahora y agregar los productos más tarde',
    /* arquivo de dados */
    'Seu arquivo está formatado para qual plataforma? Gerenciador de Comércio ·': '¿Para qué plataforma está formateado tu archivo? Administrador de ventas ·', 'Baixar modelo': 'Descargar plantilla', 'Usar um URL ou o Planilhas Google': 'Usar una URL o Hojas de cálculo de Google',
    'Você pode direcionar para um arquivo CSV, TSV, XML (RSS/ATOM) ou XLSX de até 4 GB.': 'Puedes dirigir a un archivo CSV, TSV, XML (RSS/ATOM) o XLSX de hasta 4 GB.', 'Detalhes de login opcionais': 'Datos de inicio de sesión opcionales',
    'Confirmar configurações': 'Confirmar configuración', 'Nome do feed': 'Nombre del feed', 'Novo feed de dados': 'Nuevo feed de datos', 'Moeda padrão': 'Moneda predeterminada', 'USD — Dólar americano': 'USD — Dólar estadounidense', 'BRL — Real brasileiro': 'BRL — Real brasileño', 'EUR — Euro': 'EUR — Euro',
    '⚠ A moeda padrão veio em': '⚠ La moneda predeterminada vino en', '. Se o feed não trouxer a moeda em cada preço, os produtos entram em dólar. Troque para a moeda da loja.': '. Si el feed no trae la moneda en cada precio, los productos entran en dólares. Cambia a la moneda de la tienda.',
    'Programação do feed': 'Programación del feed', '· Frequência': '· Frecuencia', 'A cada hora': 'Cada hora', 'Diariamente': 'Diariamente', 'Semanalmente': 'Semanalmente', 'Carregar': 'Subir',
    /* manual */
    'Adicionar produtos': 'Agregar productos', 'Adicione pelo menos 5 produtos para veicular anúncios de catálogo Advantage+': 'Agrega al menos 5 productos para publicar anuncios de catálogo Advantage+',
    'Imagens e vídeos': 'Imágenes y videos', 'Título (0/200)': 'Título (0/200)', 'Descrição (0/9999)': 'Descripción (0/9999)', 'Link do site': 'Enlace del sitio web', 'Preço (BRL)': 'Precio (BRL)', 'Preço promocional': 'Precio promocional', 'Categoria de produto do Facebook': 'Categoría de producto de Facebook',
    'Condição': 'Condición', 'Disponibilidade': 'Disponibilidad', 'Status': 'Estado', 'Marca': 'Marca', 'Identificação do conteúdo (Retailer id)': 'Identificador de contenido (Retailer id)', 'Novo': 'Nuevo', 'Em estoque': 'Disponible', 'Mostrar': 'Mostrar', 'Categoria': 'Categoría', 'Título': 'Título',
    'Novo produto': 'Producto nuevo', 'Carregar produtos': 'Subir productos',
    /* visão geral */
    'Conclua a configuração do seu catálogo': 'Finaliza la configuración del catálogo', 'Faltam apenas algumas etapas para você poder promover seus produtos ou serviços.': 'Solo te faltan unos pocos pasos para poder promocionar tus productos o servicios.',
    'Conecte dados do seu site ou app. Isso nos ajuda a mostrar seus produtos ou serviços para as pessoas certas.': 'Conecta los datos de tu sitio web o app. Esto nos ayuda a mostrar tus productos o servicios a las personas adecuadas.',
    'Seus produtos ou serviços foram salvos no catálogo.': 'Tus productos o servicios se guardaron en el catálogo.', 'Analisar produtos': 'Revisar productos', 'Próximas etapas para seu catálogo': 'Próximos pasos para tu catálogo',
    'Os anúncios de catálogo Advantage+ agora estão desbloqueados para mais contas de anúncios': 'Los anuncios de catálogo Advantage+ ahora están disponibles para más cuentas publicitarias',
    'Agora, as contas de anúncios com um pixel conectado a um catálogo podem usar esse catálogo para criar anúncios. Esse acesso é automático.': 'Las cuentas publicitarias con un píxel conectado a un catálogo ahora pueden usar ese catálogo para crear anuncios. Este acceso es automático.',
    'Destaque seus anúncios com modelos de imagem personalizados': 'Haz que los anuncios se destaquen con plantillas de imagen personalizadas',
    'Crie um modelo de imagem que combine elementos da marca, como seu logotipo, fontes e cores, com informações dos produtos do seu catálogo.': 'Crea una plantilla de imagen que combine elementos de la marca, como el logotipo, las fuentes y los colores, con la información de los productos de tu catálogo.',
    'Perguntas frequentes': 'Preguntas frecuentes', 'Por que os clientes não conseguem ver alguns dos meus produtos?': '¿Por qué los clientes no pueden ver algunos de mis productos?', 'Como controlo quais produtos aparecem nas experiências de navegação de produtos?': '¿Cómo controlo qué productos se muestran en las experiencias de navegación de productos?', 'Como posso oferecer promoções aos clientes?': '¿Cómo puedo ofrecer promociones a los clientes?',
    /* produtos */
    'Criar campanha': 'Crear campaña', 'Adicionar': 'Agregar', 'Criar conjunto': 'Crear conjunto', 'Nome': 'Nombre', 'Variantes': 'Variantes', 'Preço': 'Precio', 'Última atualização': 'Última actualización', 'Ações': 'Acciones',
    'Identificação do conteúdo:': 'Identificador de contenido:', 'Identificação do grupo:': 'Identificador de grupo:', 'Qualificado': 'Elegible', 'Qualificadas': 'Elegibles', 'Indisponível': 'Agotado', '15 de out às 01:20': '15 de oct a las 01:20', 'dólar': 'dólares',
    'Nenhum produto ainda. Adicione produtos ou conecte uma fonte de dados.': 'Todavía no hay productos. Agrega productos o conecta un origen de datos.',
    /* conjuntos */
    'Conjuntos de produtos': 'Conjuntos de productos', 'Crie e gerencie conjuntos de produtos no seu catálogo. Saiba mais': 'Crea y administra conjuntos de productos en tu catálogo. Más información', 'Pesquisar conjuntos · Filtros': 'Buscar conjuntos · Filtros',
    'Usado em': 'Dónde se usa', 'Data de criação': 'Fecha de creación', 'Mais': 'Más', '15 de out de 2026': '15 de oct de 2026', 'All Products': 'All Products', 'Escolha onde usar esse conjunto, crie um conjunto semelhante ou exclua-o.': 'Elige dónde usar este conjunto, crea uno similar o elimínalo.',
    /* fontes */
    'Gerencie as fontes de dados que fornecem informações sobre os produtos no seu catálogo. Saiba mais': 'Administra los orígenes de datos que brindan información sobre los productos del catálogo. Más información',
    'Adicione produtos do seu site usando a API de Catálogo — A API de catálogo sincroniza produtos do seu site em tempo real. Crie um app para conectar e manter seu catálogo atualizado.': 'Agrega productos de tu sitio web con la API de catálogos — La API de catálogos sincroniza los productos de tu sitio en tiempo real. Crea una app para conectar tu catálogo y mantenerlo actualizado.',
    'Tipo': 'Tipo', 'Arquivo de dados': 'Archivo de datos', 'Carregamento programado': 'Subida programada', 'Tudo certo': 'Sin errores', 'Substituído todos os dias': 'Se reemplaza diariamente', 'Atualizar': 'Actualizar',
    'Novo feed de dados para Catálogo Lojinha da Marina (aula)': 'Novo feed de dados para Catálogo Lojinha da Marina (aula)', 'Só no simulador:': 'Solo en el simulador:', 'o estoque mora no': 'el stock vive en el', 'site': 'sitio web', ', não aqui.': ', no aquí.',
    'o estoque do Moletom já foi corrigido no site': 'el stock del Moletom ya se corrigió en el sitio', '· depois clique em Atualizar.': '· después haz clic en Actualizar.',
    /* eventos */
    'Conecte seus dados para acompanhar e personalizar melhor seus anúncios': 'Conecta tus datos para realizar un seguimiento más preciso de tus anuncios y personalizarlos mejor', 'Conecte uma fonte de dados ao seu site ou app para:': 'Conecta un origen de datos a tu sitio web o app para celulares para:',
    'Encontrar novos clientes e garantir que seus anúncios apareçam para as pessoas certas.': 'Encontrar nuevos clientes y asegurarte de que tus anuncios se muestren a las personas adecuadas.', 'Redirecionar pessoas que mostraram interesse nos produtos do seu site.': 'Volver a dirigirte a aquellas personas que hayan mostrado interés por productos de tu sitio web.',
    'Fazer venda cruzada ou upsell de produtos relacionados para aumentar o valor da compra dos seus clientes.': 'Hacer ventas dirigidas y cruzadas de productos relacionados para aumentar el valor total de tus clientes.', 'Como configurar o acompanhamento de eventos': 'Cómo configurar el seguimiento de eventos', 'Configurar no Gerenciador de Eventos': 'Configurar en el administrador de eventos',
    /* configurações */
    'Marketing': 'Marketing', 'Colete emails de clientes com uma oferta para cadastro por email.': 'Recopila los correos electrónicos de los clientes con una oferta de registro por correo electrónico.', 'Destino da oferta: Site · Desativado': 'Destino de la oferta: Sitio web · Desactivado',
    'Mostre sua oferta com anúncios que direcionam para seu site.': 'Muestra tu oferta con anuncios que dirijan a las personas a tu sitio web.', 'Merchandising da oferta': 'Promoción de ofertas', '· Deixe a Meta mostrar automaticamente as ofertas detectadas quando as pessoas navegarem pelos seus produtos no Facebook e no Instagram.': '· Permite que Meta muestre automáticamente las ofertas detectadas cuando las personas exploren tus productos en Facebook e Instagram.',
    'Ofertas detectadas: Ativada · As ofertas detectadas estão ativadas': 'Ofertas detectadas: Activadas · Las ofertas detectadas están activadas', 'Envio e devoluções': 'Envíos y devoluciones', 'Envio: Nenhum perfil de envio': 'Envío: No se encontró un perfil de envío', 'Devoluções: Sem janela de devolução': 'Devoluciones: Sin período de devolución',
    'Fontes de eventos': 'Orígenes de eventos', 'Conecte um pixel ou app da Meta ao seu catálogo para mostrar produtos mais relevantes ao público.': 'Conecta un píxel o una app de Meta a tu catálogo para mostrar productos más relevantes al público.',
    'Idioma e país padrões': 'Idioma y país predeterminados', 'Mostre às pessoas anúncios e posicionamentos de compras com suas informações de inventário no idioma de preferência delas e com informações relevantes específicas do país, como a moeda.': 'Muestra a las personas anuncios y ubicaciones de compra que incluyan datos de tu inventario en su idioma de preferencia, así como información específica del país, como la divisa.',
    'Idioma padrão:': 'Idioma predeterminado:', 'País padrão:': 'País predeterminado:', 'Clique em Editar para atualizar': 'Haz clic en "Editar" para actualizar', 'Idioma padrão': 'Idioma predeterminado', 'País padrão': 'País predeterminado', 'Selecione': 'Selecciona', 'Português (Brasil)': 'Portugués (Brasil)', 'Espanhol (América Latina)': 'Español (Latinoamérica)', 'Inglês (EUA)': 'Inglés (EE. UU.)', 'Brasil': 'Brasil', 'México': 'México', 'Colômbia': 'Colombia', 'Salvar': 'Guardar',
    'Permissões': 'Permisos', 'Gerencie quem tem acesso ao seu catálogo.': 'Administra quién tiene acceso a tu catálogo.', '2 pessoas têm acesso ao seu catálogo · Permissões automáticas ativadas para seu catálogo': '2 personas tienen acceso a tu catálogo · Los permisos automáticos están activados para tu catálogo',
    'Produtos no Instagram e Facebook': 'Productos en Instagram y Facebook', 'Gerencie quais produtos aparecem para as pessoas adicionarem ao próprio conteúdo. Elas ainda poderão adicionar seus produtos diretamente usando um URL.': 'Administra qué productos aparecen para que las personas los agreguen a su contenido. Las personas podrán seguir agregando tus productos directamente con una URL.',
    'Contas impedidas de adicionar produtos: 0 contas do Instagram • 0 contas do Facebook': 'Cuentas que no pueden agregar productos: 0 cuentas de Instagram • 0 cuentas de Facebook', 'Termos e Condições': 'Términos y condiciones', 'Você aceitou o Acordo do Vendedor da Meta.': 'Aceptaste el Acuerdo del vendedor de Meta.', 'ID': 'ID', '∞ Meta': '∞ Meta',
    /* aba Problemas (Diagnóstico · Catálogo 02, 19/10/2026; termos do padrão da Meta em espanhol, a conferir) */
    'Problemas': 'Problemas',
    'Veja o que impede os itens de aparecer nos anúncios e na loja e como corrigir.': 'Mira qué impide que los artículos aparezcan en los anuncios y en la tienda, y cómo corregirlo.',
    '● Erro': '● Error',
    '▲ Aviso': '▲ Advertencia',
    'Imagem inválida': 'Imagen no válida',
    'Rejeitado: não segue as Políticas de Comércio': 'Rechazado: no cumple las Políticas de comercio',
    'Falta a categoria do Google': 'Falta la categoría de Google',
    'Revisar': 'Revisar',
    'Fechar': 'Cerrar',
    'Nenhum problema.': 'Ningún problema.',
    'Nenhum erro impedindo itens': 'Ningún error impide artículos',
    '⚠ Aba montada pela Central de Ajuda da Meta · a conferir com a tela real': '⚠ Pestaña armada con el Centro de ayuda de Meta · por confirmar con la pantalla real',
    'O link da imagem não abre (a página devolve erro). Sem imagem válida, o item não aparece nos anúncios nem na loja.': 'El enlace de la imagen no abre (la página devuelve un error). Sin una imagen válida, el artículo no aparece en los anuncios ni en la tienda.',
    'Como corrigir:': 'Cómo corregirlo:',
    'o item vem do arquivo de dados (o site). Corrija o link da imagem na fonte e atualize a fonte de dados; a correção chega na próxima atualização.': 'el artículo viene del archivo de datos (el sitio). Corrige el enlace de la imagen en la fuente y actualiza la fuente de datos; la corrección llega en la próxima actualización.',
    '🧪': '🧪',
    'Só no simulador:': 'Solo en el simulador:',
    'a imagem do Moletom já foi corrigida no site': 'la imagen del Buzo ya se corrigió en el sitio',
    'Ir para Fontes de dados': 'Ir a Fuentes de datos',
    'O item foi rejeitado na análise de política. É um boné comum, então a rejeição parece engano.': 'El artículo fue rechazado en la revisión de políticas. Es una gorra común, así que el rechazo parece un error.',
    'Se o item foi rejeitado por engano, peça outra análise. Se ele realmente não segue as políticas, edite o item na fonte ou remova.': 'Si el artículo se rechazó por error, pide otra revisión. Si realmente no cumple las políticas, edita el artículo en la fuente o elimínalo.',
    'Solicitar outra análise': 'Solicitar otra revisión',
    'Outra análise solicitada. O item é revisado de novo; enquanto isso, ele continua fora dos anúncios e da loja.': 'Se solicitó otra revisión. El artículo se revisa de nuevo; mientras tanto, sigue fuera de los anuncios y de la tienda.',
    'Sem a categoria do produto, o item aparece, mas pode ser menos relevante.': 'Sin la categoría del producto, el artículo aparece, pero puede ser menos relevante.',
    'Avisos não impedem o item de aparecer, mas podem piorar a qualidade do catálogo.': 'Las advertencias no impiden que el artículo aparezca, pero pueden empeorar la calidad del catálogo.',
  };
  for (var k in A) D[k] = A[k];
  var n = function (x) { return x };
  P.push([/^ID do catálogo: (\d+)$/, function (m) { return 'Identificador del catálogo: ' + m[1] }]);
  P.push([/^Todos os produtos (\d+)$/, function (m) { return 'Todos los productos ' + m[1] }]);
  P.push([/^Ações (\d+)$/, function (m) { return 'Acciones ' + m[1] }]);
  P.push([/^Veja e gerencie todos os (\d+) produtos no seu catálogo\. Você pode encontrar produtos específicos rapidamente usando a pesquisa ou os filtros\.$/, function (m) { return 'Ve y administra los ' + m[1] + ' productos de tu catálogo. Usa la búsqueda o los filtros para encontrar productos específicos rápidamente.' }]);
  P.push([/^(\d+) produtos? · (\d+) variantes$/, function (m) { return m[1] + ' productos · ' + m[2] + ' variantes' }]);
  P.push([/^(\d+) variantes$/, function (m) { return m[1] + ' variantes' }]);
  P.push([/^Visibilidade do produto: Todos os produtos · (\d+) produtos$/, function (m) { return 'Visibilidad del producto: Todos los productos · ' + m[1] + ' productos' }]);
  P.push([/^(US\$|R\$)([\d,.]+)$/, function (m) { return m[1] + m[2] }]);
  P.push([/^(\d+) erros?$/, function (m) { return m[1] + (m[1] === '1' ? ' error' : ' errores') }]);
  P.push([/^· (\d+) avisos?(?: · (\d+) em análise)?$/, function (m) { return '· ' + m[1] + (m[1] === '1' ? ' advertencia' : ' advertencias') + (m[2] ? ' · ' + m[2] + ' en revisión' : '') }]);
  P.push([/^(.+) · em análise$/, function (m) { return m[1] + ' · en revisión' }]);
})();
