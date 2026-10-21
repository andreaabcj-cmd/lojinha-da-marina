/* Dicionário PT → ES do simulador do Microdata Debugger. Título, explicação, campo, botão e erro copiados da tela real em espanhol (16/10/2026);
   a Prévia e a mensagem de sucesso em espanhol não apareceram na tela real e seguem o padrão da Meta (a conferir). */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {};
  var A = {
    '🧪 Simulador de treinamento da Ferramenta de depuração de microdados · nada aqui vai para a Meta ·': '🧪 Simulador de capacitación de la Herramienta de depuración de microdatos · nada de aquí va a Meta ·', '← voltar à plataforma': '← volver a la plataforma',
    'Anúncios da Meta': 'Anuncios de Meta',
    'Seus microdados estão configurados corretamente?': '¿Los microdatos están configurados correctamente?',
    'Para adicionar produtos automaticamente do seu site para o catálogo da Meta, você precisará adicionar tags de microdados à sua instalação do Pixel da Meta.': 'Para agregar productos de tu sitio web al catálogo de Meta automáticamente, debes incluir las etiquetas de microdatos en la instalación del píxel de Meta.',
    'Microdados são os dados de marcação estruturados usados para indicar informações importantes sobre os produtos no seu site, como nomes, descrições e preços.': 'Los microdatos son datos de marcado estructurados que se usan para indicar información clave sobre los productos de tu sitio web, como nombres, descripciones y precios.', 'Saiba mais.': 'Más información.',
    'Link do site': 'Enlace al sitio web', 'Insira a URL de uma página da web com detalhes do inventário.': 'Ingresa la URL de una página web con detalles de inventario', 'Verificar microdados': 'Comprobar microdatos',
    'Site de mentirinha do simulador:': 'Sitio de mentira del simulador:', 'escolha uma página para testar sem digitar.': 'elige una página para probar sin escribir.', 'Escolher uma página…': 'Elegir una página…',
    'Aqui as páginas são de https://lojinha.exemplo.com.br/ (não existe de verdade). A ferramenta real lê qualquer página pública.': 'Aquí las páginas son de https://lojinha.exemplo.com.br/ (no existe de verdad). La herramienta real lee cualquier página pública.',
    'PRODUCT CATALOG DEBUG TOOLS': 'PRODUCT CATALOG DEBUG TOOLS', 'Ferramenta de depuração de pixel': 'Herramienta de depuración de píxeles',
    'Erros': 'Errores', 'Os produtos no seu site não podem ser adicionados automaticamente ao seu catálogo devido a esses problemas.': 'Estos problemas impiden que los productos de tu sitio web se agreguen al catálogo automáticamente.', 'Falha na validação de dados.': 'Error al validar los datos.',
    'Dica do simulador:': 'Pista del simulador:', '(A tela real mostra só “Falha na validação de dados”; esta dica é do simulador, para você aprender a achar a causa: a conferir.)': '(La pantalla real muestra solo “Error al validar los datos”; esta pista es del simulador, para que aprendas a encontrar la causa: por confirmar.)',
    'Prévia': 'Vista previa', 'É assim que os microdados são configurados no seu site. Corrija os erros abaixo para que todos os produtos no seu site possam ser adicionados automaticamente ao seu catálogo.': 'Así se configuran los microdatos en tu sitio web. Corrige los errores a continuación para que todos los productos de tu sitio web se puedan agregar al catálogo automáticamente.',
    'OpenGraph': 'OpenGraph', 'JSON-LD': 'JSON-LD', 'Parâmetro': 'Parámetro', 'Valor': 'Valor', 'Parabéns! Seus microdados parecem ótimos!': '¡Felicitaciones! ¡Tus microdatos se ven muy bien!',
    '✓ Tela, textos, tabelas e mensagens conferidos com a ferramenta real em 16/10/2026 (PT e ES). ⚠ Erros por campo específico e a lista completa de parâmetros não foram vistos (a conferir).': '✓ Pantalla, textos, tablas y mensajes revisados con la herramienta real el 16/10/2026 (PT y ES). ⚠ Los errores por campo específico y la lista completa de parámetros no se vieron (por confirmar).'
  };
  A['URL inválida'] = 'URL no válida'; A['Este endereço não é do site de mentirinha do simulador (a ferramenta real lê qualquer página pública da internet)'] = 'Esta dirección no es del sitio de mentira del simulador (la herramienta real lee cualquier página pública de internet)';
  A['Página não encontrada no site de mentirinha'] = 'Página no encontrada en el sitio de mentira'; A['A página não traz microdados de produto'] = 'La página no trae microdatos de producto';
  A['Falta ou está errado: o preço'] = 'Falta o está mal: el precio'; A['Falta ou está errado: o id'] = 'Falta o está mal: el id'; A['Falta ou está errado: o formato do preço'] = 'Falta o está mal: el formato del precio';
  A['o id é a Identificação do conteúdo do catálogo; sem ele a Meta não liga o produto ao catálogo nem ao Pixel'] = 'el id es el Identificador de contenido del catálogo; sin él Meta no une el producto con el catálogo ni con el Pixel';
  A['sem preço, o produto não entra no catálogo'] = 'sin precio, el producto no entra en el catálogo';
  A['o preço precisa ser um número com a moeda (por exemplo 54.90 e BRL); “R$ 54,90” escrito como texto não é entendido'] = 'el precio debe ser un número con la moneda (por ejemplo 54.90 y BRL); “R$ 54,90” escrito como texto no se entiende';
  /* página configurada pelo aluno (aula 05, 20/10/2026) */
  A['Falta ou está errado:'] = 'Falta o está mal:';
  A['falta o id (product:retailer_item_id ou productID): é a Identificação do conteúdo do produto no catálogo'] = 'falta el id (product:retailer_item_id o productID): es el Identificador de contenido del producto en el catálogo';
  A['falta o título (og:title ou name)'] = 'falta el título (og:title o name)';
  A['falta a descrição (og:description ou description)'] = 'falta la descripción (og:description o description)';
  A['falta o link da página (og:url ou url)'] = 'falta el enlace de la página (og:url o url)';
  A['o link precisa ser o endereço completo da página, começando com https://'] = 'el enlace debe ser la dirección completa de la página, empezando con https://';
  A['falta a imagem (og:image ou image)'] = 'falta la imagen (og:image o image)';
  A['a imagem precisa ser um endereço completo, começando com https://'] = 'la imagen debe ser una dirección completa, empezando con https://';
  A['falta a marca (product:brand ou brand)'] = 'falta la marca (product:brand o brand)';
  A['falta a disponibilidade (product:availability ou availability)'] = 'falta la disponibilidad (product:availability o availability)';
  A['a disponibilidade só aceita valores em inglês: in stock ou out of stock (também preorder, available for order e discontinued); “em estoque” não é entendido'] = 'la disponibilidad solo acepta valores en inglés: in stock u out of stock (también preorder, available for order y discontinued); “em estoque” no se entiende';
  A['falta a condição (product:condition ou itemCondition)'] = 'falta la condición (product:condition o itemCondition)';
  A['a condição aceita new, refurbished ou used, em inglês'] = 'la condición acepta new, refurbished o used, en inglés';
  A['falta o preço (product:price:amount ou price)'] = 'falta el precio (product:price:amount o price)';
  A['o preço é só o número, com ponto nos centavos: 39.90 (sem R$ e sem vírgula)'] = 'el precio es solo el número, con punto en los centavos: 39.90 (sin R$ y sin coma)';
  A['falta a moeda (product:price:currency ou priceCurrency)'] = 'falta la moneda (product:price:currency o priceCurrency)';
  A['a moeda é o código de 3 letras maiúsculas: BRL (não “R$” nem “reais”)'] = 'la moneda es el código de 3 letras mayúsculas: BRL (no “R$” ni “reales”)';
  A['o bloco JSON-LD tem um erro de escrita (vírgula, aspas ou chave faltando) e não pôde ser lido'] = 'el bloque JSON-LD tiene un error de escritura (falta una coma, comillas o llave) y no se pudo leer';
  A['a página não tem tags de produto (nem OpenGraph, nem JSON-LD, nem schema.org)'] = 'la página no tiene etiquetas de producto (ni OpenGraph, ni JSON-LD, ni schema.org)';
  A['Schema.org'] = 'Schema.org';
  A['✓ Tabela Schema.org conferida na ferramenta real em 20/10/2026: ela mostra menos campos que as outras (sem link, imagem e condição).'] = '✓ Tabla Schema.org revisada en la herramienta real el 20/10/2026: muestra menos campos que las otras (sin enlace, imagen ni condición).';
  A['o id desta página não é o do catálogo: lá a Ecobag é ECOBAG_03. Com outro id, a Meta não liga a página ao produto do catálogo nem aos eventos do Pixel'] = 'el id de esta página no es el del catálogo: allí la Ecobag es ECOBAG_03. Con otro id, Meta no une la página con el producto del catálogo ni con los eventos del píxel';
  A['ainda há valores do exemplo da Meta (como fb_tshirts ou facebook_tshirt_001): troque pelos da Ecobag ou apague a linha'] = 'todavía hay valores del ejemplo de Meta (como fb_tshirts o facebook_tshirt_001): cámbialos por los de la Ecobag o borra la línea';
  for (var k in A) D[k] = A[k];
  ['produto-ecobag_03.html', 'produto-caneca_01.html', 'produto-camiseta_02.html', 'produto-moletom_01.html', 'produto-so-jsonld.html', 'produto-sem-preco.html', 'produto-sem-id.html', 'produto-preco-texto.html', 'carrinho.html', 'index.html'].forEach(function (p) { D[p] = p });
})();
