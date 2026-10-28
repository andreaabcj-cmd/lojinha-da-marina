/* Aula 09 · Catálogo do Commerce no WhatsApp.
   Fontes lidas em 28/10/2026: facebook.com/business/help/158662536425974 (conectar catálogo à conta do WhatsApp Business — Plataforma),
   /1168881033546362 (produtos que não aparecem: Gerenciador de Comércio › Produtos › Status e problemas).
   Tela real (25–26/10): app › Catálogo › ⋮ › Configurações do catálogo › "Conectar catálogo do Meta Business Suite" (não tocado). */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  N.AULAS['09'] = {
    min: 7,
    objetivo: N.T('Entender como um catálogo do Gerenciador de Comércio chega ao WhatsApp e onde investigar quando um produto não aparece.', 'Entender cómo llega un catálogo de Commerce Manager a WhatsApp y dónde investigar cuando un producto no aparece.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina já tem o catálogo da loja no Gerenciador de Comércio, usado nos anúncios.', '<b>Dónde estamos:</b> Marina ya tiene el catálogo de la tienda en Commerce Manager, usado en los anuncios.'],
      ['m', 'Não quero cadastrar tudo de novo no WhatsApp. Dá para usar o catálogo que já está na Meta?', 'No quiero cargar todo de nuevo en WhatsApp. ¿Puedo usar el catálogo que ya está en Meta?'],
      ['r', 'Dá. No app: Catálogo › ⋮ › Configurações do catálogo › <b>Conectar catálogo do Meta Business Suite</b>.', 'Sí. En la app: Catálogo › ⋮ › Ajustes del catálogo › <b>Conectar catálogo de Meta Business Suite</b>.'],
      ['m', 'Conectei, mas dois produtos não aparecem.', 'Lo conecté, pero dos productos no aparecen.'],
      ['r', 'Então o problema está no catálogo, não no WhatsApp: no Gerenciador de Comércio, Produtos, abre o produto e vê <b>Status e problemas</b>. Pode ser política, item arquivado, oculto, imagem ou link quebrado.', 'Entonces el problema está en el catálogo, no en WhatsApp: en Commerce Manager, Productos, abre el producto y mira <b>Estado y problemas</b>. Puede ser política, artículo archivado, oculto, imagen o enlace roto.'],
      ['dica', 'Catálogo que vem de uma plataforma parceira (Shopify, por exemplo) se corrige <b>na plataforma</b>: mexer só no Gerenciador de Comércio é sobrescrito na próxima sincronização.', 'El catálogo que viene de una plataforma socia (Shopify, por ejemplo) se corrige <b>en la plataforma</b>: cambiar solo en Commerce Manager se sobrescribe en la próxima sincronización.']
    ]),
    verDePerto: [
      ['h', 'Dois caminhos para conectar', 'Dos caminos para conectar'],
      ['ul', [
        ['<b>App WhatsApp Business</b>: Ferramentas › Catálogo › ⋮ › Configurações do catálogo › “Conectar catálogo do Meta Business Suite” (“Conecte um catálogo do Meta Business Suite para que os clientes possam acessá-lo no WhatsApp”).', '<b>App WhatsApp Business</b>: Herramientas › Catálogo › ⋮ › Ajustes del catálogo › “Conectar catálogo de Meta Business Suite”.'],
        ['<b>Plataforma (API)</b>: Business Suite › Todas as ferramentas › <b>Gerenciador do WhatsApp</b> › a conta › Catálogo › Escolher um catálogo › Conectar catálogo.', '<b>Plataforma (API)</b>: Business Suite › Todas las herramientas › <b>Administrador de WhatsApp</b> › la cuenta › Catálogo › Elegir un catálogo › Conectar catálogo.'],
        ['Para conectar: o catálogo tem que ser <b>da empresa ou compartilhado com ela</b>, e a pessoa precisa da <b>permissão para gerenciar catálogos</b>.', 'Para conectar: el catálogo debe ser <b>de la empresa o compartido con ella</b>, y la persona necesita el <b>permiso para administrar catálogos</b>.']]],
      ['h', 'Produto não aparece', 'El producto no aparece'],
      ['ol', [
        ['Gerenciador de Comércio › o catálogo › Catálogo › <b>Produtos</b>.', 'Commerce Manager › el catálogo › Catálogo › <b>Productos</b>.'],
        ['<b>Filtros</b> à direita: por Status (Arquivados, Ocultos nas Lojas) ou por Problemas.', '<b>Filtros</b> a la derecha: por Estado (Archivados, Ocultos en tiendas) o por Problemas.'],
        ['Abrir o produto › <b>Status e problemas</b>.', 'Abrir el producto › <b>Estado y problemas</b>.'],
        ['Causas comuns: violação de política, indisponível, arquivado, oculto, imagem ou vídeo que não carrega, link quebrado, campo obrigatório faltando, preço inválido.', 'Causas comunes: infracción de política, no disponible, archivado, oculto, imagen o video que no carga, enlace roto, campo obligatorio faltante, precio no válido.']]],
      ['caixa', 'Uma conta, um catálogo', 'Una cuenta, un catálogo', 'Pela documentação da Plataforma, cada conta do WhatsApp tem <b>um</b> catálogo conectado (um mesmo catálogo pode servir a vários números). Se a cliente quer “outro catálogo”, primeiro desconecta o atual.', 'Según la documentación de la Plataforma, cada cuenta de WhatsApp tiene <b>un</b> catálogo conectado (un mismo catálogo puede servir a varios números). Si la clienta quiere “otro catálogo”, primero desconecta el actual.'],
      ['nota', 'A tela de escolher o catálogo dentro do app não foi aberta (o botão conecta de verdade). O Gerenciador de Comércio aparece na Lojinha da Marina, módulo Catálogo.', 'La pantalla para elegir el catálogo dentro de la app no se abrió (el botón conecta de verdad). Commerce Manager aparece en la Lojinha da Marina, módulo Catálogo.']
    ],
    praticar: {
      intro: N.T('Onde fica, no app, a ligação com o catálogo da Meta.', 'Dónde está, en la app, la conexión con el catálogo de Meta.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Toque no WA Business.', 'Toca WA Business.'], true),
        P(cel('conversas'), 'cel-aba-ferramentas', ['Ferramentas', 'Herramientas'], ['Toque na aba Ferramentas.', 'Toca la pestaña Herramientas.'], true),
        P(cel('ferramentas'), 'cel-ferr-catalogo', ['Catálogo', 'Catálogo'], ['Toque em Catálogo.', 'Toca Catálogo.'], true),
        P(cel('catalogo'), 'cel-cat-menu', ['Mais opções', 'Más opciones'], ['Toque nos três pontinhos do Gerenciador de Catálogos.', 'Toca los tres puntos del Administrador de catálogos.'], true),
        P(cel('catmenu'), 'cel-catmenu-config', ['Configurações', 'Ajustes'], ['Toque em Configurações do catálogo.', 'Toca Ajustes del catálogo.'], true),
        P(cel('catconfig'), 'cel-catcfg-conectar', ['Conectar catálogo', 'Conectar catálogo'], ['Aqui o app liga um catálogo do Meta Business Suite. O catálogo precisa ser da empresa (ou compartilhado) e a pessoa precisa de permissão para gerenciar catálogos.', 'Aquí la app conecta un catálogo de Meta Business Suite. El catálogo debe ser de la empresa (o compartido) y la persona necesita permiso para administrar catálogos.']),
        P(cel('catconfig'), 'cel-catcfg-conectar', ['Pronto!', '¡Listo!'], ['Conectou e algum produto não aparece? Vá ao Gerenciador de Comércio › Produtos › Status e problemas. O WhatsApp só mostra o que o catálogo deixa.', '¿Conectó y algún producto no aparece? Ve a Commerce Manager › Productos › Estado y problemas. WhatsApp solo muestra lo que el catálogo permite.'])
      ]
    },
    quiz: [
      Q(['No app, onde a cliente liga o catálogo que já existe na Meta?', 'En la app, ¿dónde conecta la clienta el catálogo que ya existe en Meta?'], 3,
        [['Em Configurações › Conta › Plataforma comercial', 'En Ajustes › Cuenta › Plataforma comercial'], ['Em Ferramentas › Perfil › Produtos e serviços', 'En Herramientas › Perfil › Productos y servicios'], ['Em ⋮ › Dispositivos conectados › Catálogo', 'En ⋮ › Dispositivos vinculados › Catálogo'], ['Em Catálogo › ⋮ › Configurações do catálogo', 'En Catálogo › ⋮ › Ajustes del catálogo']],
        [['Plataforma comercial é a coexistência com a API.', 'Plataforma comercial es la coexistencia con la API.'], ['No perfil só se vê o catálogo.', 'En el perfil solo se ve el catálogo.'], ['Dispositivos conectados não tem catálogo.', 'Dispositivos vinculados no tiene catálogo.'], ['Lá está “Conectar catálogo do Meta Business Suite”.', 'Allí está “Conectar catálogo de Meta Business Suite”.']]),
      Q(['A cliente não consegue conectar o catálogo. O que conferir primeiro?', 'La clienta no logra conectar el catálogo. ¿Qué revisar primero?'], 0,
        [['Se o catálogo é dela e se tem permissão', 'Si el catálogo es suyo y si tiene permiso'], ['Se o celular está com o Wi-Fi ligado agora', 'Si el celular tiene el Wi-Fi activado ahora'], ['Se a loja tem o selo de verificado', 'Si la tienda tiene la insignia de verificado'], ['Se o catálogo tem menos de 10 itens', 'Si el catálogo tiene menos de 10 artículos']],
        [['Requisitos oficiais: catálogo da empresa (ou compartilhado) e permissão para gerenciar catálogos.', 'Requisitos oficiales: catálogo de la empresa (o compartido) y permiso para administrar catálogos.'], ['Wi-Fi não é requisito citado.', 'El Wi-Fi no es un requisito citado.'], ['Selo não é requisito.', 'La insignia no es requisito.'], ['Não há esse limite.', 'No existe ese límite.']]),
      Q(['Catálogo conectado, mas um produto não aparece no WhatsApp. Onde investigar?', 'Catálogo conectado, pero un producto no aparece en WhatsApp. ¿Dónde investigar?'], 2,
        [['Nas Configurações do catálogo do app', 'En los Ajustes del catálogo de la app'], ['No perfil comercial da loja no app', 'En el perfil comercial de la tienda en la app'], ['No produto, em Status e problemas', 'En el producto, en Estado y problemas'], ['Na Central de Ajuda do app', 'En el Servicio de ayuda de la app']],
        [['Ali só se conecta ou se liga o carrinho.', 'Allí solo se conecta o se activa el carrito.'], ['O perfil não mostra problemas de produto.', 'El perfil no muestra problemas de producto.'], ['Gerenciador de Comércio › Produtos › o produto › Status e problemas.', 'Commerce Manager › Productos › el producto › Estado y problemas.'], ['A Central explica, mas não mostra o produto.', 'El Servicio de ayuda explica, pero no muestra el producto.']]),
      Q(['O catálogo vem da Shopify. A cliente corrigiu o preço no Gerenciador de Comércio e voltou o antigo. Por quê?', 'El catálogo viene de Shopify. La clienta corrigió el precio en Commerce Manager y volvió el anterior. ¿Por qué?'], 1,
        [['Porque o WhatsApp guarda preço por 7 dias', 'Porque WhatsApp guarda el precio por 7 días'], ['Porque a sincronização sobrescreveu', 'Porque la sincronización lo sobrescribió'], ['Porque o item ainda está em análise', 'Porque el artículo aún está en revisión'], ['Porque o preço tem que estar sem vírgula', 'Porque el precio debe ir sin coma']],
        [['Não existe essa regra.', 'No existe esa regla.'], ['Catálogo de parceiro se corrige no parceiro; o resto é sobrescrito.', 'El catálogo de un socio se corrige en el socio; lo demás se sobrescribe.'], ['Análise não devolve o preço antigo.', 'La revisión no devuelve el precio anterior.'], ['Formato não explica o preço voltar.', 'El formato no explica que vuelva el precio.']]),
      Q(['Quantos catálogos uma conta do WhatsApp tem conectados ao mesmo tempo?', '¿Cuántos catálogos tiene conectados una cuenta de WhatsApp a la vez?'], 3,
        [['Um por número e outro para cada coleção', 'Uno por número y otro para cada colección'], ['Até cinco, um para cada país', 'Hasta cinco, uno por país'], ['Quantos o portfólio tiver', 'Los que tenga el portfolio'], ['Um, que pode servir a vários números', 'Uno, que puede servir a varios números']],
        [['Coleção é parte do catálogo, não outro catálogo.', 'La colección es parte del catálogo, no otro catálogo.'], ['A documentação fala em um só.', 'La documentación habla de uno solo.'], ['O portfólio pode ter vários; a conta do WhatsApp liga um.', 'El portfolio puede tener varios; la cuenta de WhatsApp conecta uno.'], ['Um catálogo por conta (que pode servir a vários números).', 'Un catálogo por cuenta (que puede servir a varios números).']])
    ],
    fontes: [N.F('https://www.facebook.com/business/help/158662536425974', ['Como conectar um catálogo à sua conta do WhatsApp Business', 'Cómo conectar un catálogo a tu cuenta de WhatsApp Business']),
      N.F('https://www.facebook.com/business/help/1168881033546362', ['Produtos que não aparecem na loja ou em anúncios', 'Productos que no aparecen en la tienda o en anuncios']),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/catalogs/upload-inventory', ['Catálogo na Plataforma: um por conta (Meta for Developers)', 'Catálogo en la Plataforma: uno por cuenta (Meta for Developers)'], '27/10/2026')],
    telas: N.T('Telas reais: Gerenciador de Catálogos, ⋮ e Configurações do catálogo (Android, 25–26/10/2026). A escolha do catálogo no app não foi aberta.', 'Pantallas reales: Administrador de catálogos, ⋮ y Ajustes del catálogo (Android, 25–26/10/2026). La elección del catálogo en la app no se abrió.')
  };
})();
