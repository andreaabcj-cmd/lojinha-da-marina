/* Dicionário PT → ES das telas do simulador do Turbinar post (em espanhol da Meta: "Promocionar publicación").
   Termos copiados das telas reais (?locale=es_LA, 16/10/2026); ver _roteiro/glossario_es_meta.md. */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {}, P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var A = {
    '🧪 Simulador de treinamento do Turbinar post · nada aqui vai para a Meta ·': '🧪 Simulador de capacitación de Promocionar publicación · nada de aquí va a Meta ·',
    '✓ Tela conferida com o Meta Business Suite real em 15/10/2026 (conta de aula)': '✓ Pantalla revisada con Meta Business Suite real el 15/10/2026 (cuenta de práctica)',
    'No simulador, nada foi enviado à Meta.': 'En el simulador, no se envió nada a Meta.',
    '(no simulador, clicar aqui já verifica o telefone)': '(en el simulador, hacer clic aquí ya verifica el teléfono)',
    '(no simulador, cresce com o valor)': '(en el simulador, crece con el valor)',
    '(no simulador, soma R$ 10 de mentirinha)': '(en el simulador, suma R$ 10 de mentira)',
    '(impostos aproximados no simulador)': '(impuestos aproximados en el simulador)',
    /* Conteúdo › Publicações e reels */
    'Conteúdo': 'Contenido', 'Promover': 'Promocionar', 'Posts e reels': 'Publicaciones y reels', 'Publicados': 'Publicadas', 'Programados': 'Programadas', 'Rascunhos': 'Borradores',
    'Quase expirando': 'Programadas para caducar', 'Expirados': 'Caducadas', 'Posts de anúncios': 'Publicaciones de anuncios',
    'Título': 'Título', 'Data da publicação': 'Fecha de publicación', 'Status': 'Estado', 'Alcance': 'Alcance', 'Visualizações': 'Visualizaciones', 'Visualizadores': 'Espectadores', 'Seguidores': 'Seguimientos',
    'TESTE de treinamento — aqui não vendemos nada': 'TESTE de treinamento — aqui não vendemos nada',
    'Foto · Post cruzado': 'Foto · Publicación cruzada', 'Foto · Troca da foto do perfil': 'Foto · Cambio de la foto de perfil',
    'Quinta, 15 de outubro': 'jueves, 15 de octubre', 'Terça, 13 de outubro': 'martes, 13 de octubre',
    'Lojinha da Marina: loja fictícia, criada para treinamento': 'Lojinha da Marina: tienda ficticia, creada para capacitación',
    'Turbinar': 'Promocionar', 'Criar anúncio': 'Crear anuncio', 'Em análise': 'En revisión',
    'Lojinha da Marina - Fictício': 'Lojinha da Marina - Ficticio', 'Lojinha da Marina Aula': 'Lojinha da Marina Aula',
    /* Promover */
    'Anúncios Automatizados': 'Anuncios automatizados', 'Tenha anúncios personalizados que ajudam você a conseguir mais resultados.': 'Obtén anuncios personalizados que te ayudan a conseguir más resultados.',
    'Escolha uma meta e crie um anúncio do zero.': 'Elige un objetivo y crea un anuncio desde cero.', 'Turbinar conteúdo': 'Promocionar contenido', 'Use um post ou reel existente.': 'Usa una publicación o un reel existente.',
    'Selecione um conteúdo do Facebook': 'Selecciona un contenido de Facebook', 'Tipo de conteúdo: Todos': 'Tipo de contenido: Todos', 'Nenhum conteúdo para turbinar': 'No hay contenido para promocionar',
    'Parece que você não criou nenhum conteúdo (ou não é possível turbinar seu conteúdo existente). Crie um post ou reel agora para aumentar o engajamento com sua empresa.': 'Parece que no creaste ningún contenido (o no es posible promocionar tu contenido existente). Crea una publicación o un reel ahora para aumentar la interacción con tu negocio.',
    'A Central de Ajuda da Meta explica: fotos do perfil não podem ser transformadas em anúncios; para usá-las, carregue-as como um novo post e turbine-o.': 'El Centro de ayuda de Meta explica: las fotos de perfil no se pueden convertir en anuncios; para usarlas, súbelas como una publicación nueva y promociónala.',
    'Criar post': 'Crear publicación', 'Criar reel': 'Crear reel', 'Voltar': 'Volver',
    /* Promocionar publicación */
    'Turbinar post': 'Promocionar publicación',
    'É necessário ter um telefone verificado para esta conta antes de veicular anúncios.': 'Se necesita un teléfono verificado para esta cuenta antes de publicar anuncios.', 'Iniciar autenticação': 'Iniciar autenticación',
    'Meta': 'Objetivo', 'Quais resultados você gostaria de obter com esse anúncio?': '¿Qué resultados te gustaría obtener con este anuncio?', 'Alterar': 'Cambiar',
    'Automático - Receber mensagens': 'Automático - Recibir mensajes', 'Selecionamos a meta Receber mensagens com base na sua atividade anterior.': 'Seleccionamos el objetivo Recibir mensajes en función de tu actividad anterior.',
    'Gerar engajamento': 'Generar interacción', 'Mostre seu anúncio para pessoas com probabilidade de reagir, comentar e compartilhar.': 'Muestra tu anuncio a personas con probabilidades de reaccionar, comentar y compartir.',
    'Obter leads': 'Conseguir clientes potenciales', 'Use um formulário para coletar informações de contato de clientes potenciais.': 'Usa un formulario para recopilar información de contacto de clientes potenciales.',
    'Receber visitantes no site': 'Conseguir visitantes en el sitio web', 'Mostre seu anúncio para pessoas com probabilidade de clicar em um URL nele.': 'Muestra tu anuncio a personas con probabilidades de hacer clic en una URL.',
    'Atrair visitas e seguidores para a Página': 'Atraer visitas y seguidores a la página', 'Mostre seu anúncio para pessoas com probabilidade de visitar e seguir sua Página do Facebook.': 'Muestra tu anuncio a personas con probabilidades de visitar y seguir tu página de Facebook.',
    'Receba ligações': 'Recibir llamadas', 'Mostre seu anúncio para pessoas com probabilidade de ligar para sua empresa.': 'Muestra tu anuncio a personas con probabilidades de llamar a tu negocio.',
    'Salvar': 'Guardar', 'Cancelar': 'Cancelar',
    'Texto do anúncio': 'Texto del anuncio',
    'O que você deseja que o texto do seu anúncio diga? Você pode veicular um anúncio com o texto existente e também adicionar variações geradas por IA baseadas no texto existente.': '¿Qué quieres que diga el texto del anuncio? Puedes publicar un anuncio con el texto existente y también agregar variaciones generadas con IA basadas en el texto existente.',
    'Texto existente': 'Texto existente', 'Geração de texto (IA)': 'Generación de texto (IA)',
    ': Não é possível gerar variações de texto. Não temos variações de texto para este anúncio.': ': No se pueden generar variaciones de texto. No tenemos ninguna variación de texto para este anuncio.',
    'Criativo Advantage+': 'Contenido Advantage+', '· Usar os dados do Facebook para veicular automaticamente variações do criativo do anúncio quando houver probabilidade de melhorar o desempenho.': '· Aprovecha los datos de Facebook para mostrar automáticamente a las personas diferentes variaciones de contenido del anuncio cuando haya posibilidades de mejorar el rendimiento.',
    'Ativado': 'Activado',
    'Botão': 'Botón', 'Texto do botão': 'Texto del botón', 'Nenhum botão': 'Ningún botón', 'Agendar agora': 'Reservar ahora', 'Saiba mais': 'Más información', 'Comprar agora': 'Comprar ahora', 'Cadastre-se': 'Registrarte', 'Enviar mensagem': 'Enviar mensaje', 'Ligar agora': 'Llamar ahora',
    'Receber mais mensagens · Mais pessoas enviarão mensagens e comentários se você alterar para o objetivo de mensagens.': 'Recibir más mensajes · Más personas enviarán mensajes y comentarios si cambias al objetivo de mensajes.',
    '(o botão continua “Enviar mensagem” mesmo trocando a meta)': '(el botón sigue siendo “Enviar mensaje” aunque cambies el objetivo)',
    'Mensagens': 'Mensajes', 'Modelo de mensagem: Modelo de mensagem de boas-vindas padrão · Respostas automáticas: Desativado · Perguntas geradas por IA.': 'Plantilla de mensaje: plantilla de mensaje de bienvenida predeterminada · Respuestas automáticas: desactivadas · Preguntas generadas por IA.',
    'Destino das mensagens': 'Destino de los mensajes', '· Destino automático (Recomendado): direcione as pessoas para o app de mensagens em que elas mais interagem (Página / Instagram).': '· Destino automático (Recomendado): dirige a las personas a la app de mensajes con la que más interactúan (página / Instagram).',
    'Público': 'Público', 'Quem deve ver seu anúncio?': '¿Quién quieres que vea tu anuncio?', 'Público Advantage+': 'Público Advantage+',
    '· Permita que nossa tecnologia de anúncios encontre seu público automaticamente e se ajuste ao longo do tempo.': '· Permite que nuestra tecnología publicitaria encuentre automáticamente a tu público y lo ajuste con el transcurso del tiempo.',
    'Localização:': 'Lugar:', 'Brasil': 'Brasil', '· Idade mínima:': '· Edad mínima:', '· Público Advantage+: Ativado': '· Público Advantage+: Activado',
    'Transparência dos anúncios': 'Transparencia de anuncios',
    'Informe ao seu público quem se beneficia com este anúncio e quem paga por ele. Essas informações podem ser exibidas de forma pública em anúncios e na Biblioteca de Anúncios da Meta.': 'Informa a tu público quién se beneficia de este anuncio y quién lo paga. Esta información puede mostrarse públicamente en los anuncios y en la Biblioteca de anuncios de Meta.',
    'Programação e duração': 'Calendario y duración', 'Data de início: hoje': 'Fecha de inicio: hoy',
    'Veicular anúncio continuamente': 'Publicar anuncio continuamente', 'Seu anúncio será veiculado até que você o pause.': 'Tu anuncio estará en circulación hasta que lo pauses.', 'Escolher data de término': 'Elegir fecha de finalización', 'Dias': 'Días',
    'Anúncios que são veiculados por pelo menos 4 dias tendem a obter resultados melhores.': 'Los anuncios que se publican durante al menos 4 días suelen obtener mejores resultados.',
    'Orçamento diário': 'Presupuesto diario', 'R$ 5,27 (mínimo)': 'R$5,27 (mínimo)',
    'Posicionamentos': 'Ubicaciones', 'Recomendado': 'Recomendado', 'Posicionamentos Advantage+': 'Ubicaciones Advantage+',
    '· Vamos maximizar seu orçamento no Facebook, Messenger, Instagram e Audience Network da Meta para ajudar a mostrar seu anúncio para mais pessoas.': '· Permítenos maximizar tu presupuesto en Facebook, Messenger, Instagram y Meta Audience Network para que puedas mostrar tu anuncio a más personas.',
    'Forma de pagamento': 'Método de pago',
    'Deduziremos um valor do seu saldo por volta de uma vez por dia quando você veicular anúncios. Se não houver saldo disponível, os anúncios serão pausados.': 'Deduciremos un importe de tu saldo aproximadamente una vez al día mientras publiques anuncios. Si no hay saldo disponible, los anuncios se pausarán.',
    'Adicionar saldo': 'Agregar saldo', 'Resumo do pagamento': 'Resumen del pago', '· Seu anúncio será veiculado continuamente.': '· Tu anuncio se publicará continuamente.',
    'Aumentar limite': 'Aumentar límite',
    '⚠ Você quase atingiu o limite de gastos que definiu para essa conta de anúncios. Aumente, redefina ou remova o limite para manter seus anúncios em veiculação.': '⚠ Casi alcanzaste el límite de gastos que definiste para esta cuenta publicitaria. Aumenta, restablece o quita el límite para mantener tus anuncios en circulación.',
    'O saldo disponível (R$ 3,00) não cobre o valor total. Como a cobrança é diária, o anúncio pode ficar pausado quando o saldo acabar.': 'El saldo disponible (R$ 3,00) no cubre el valor total. Como el cobro es diario, el anuncio puede quedar pausado cuando se acabe el saldo.',
    'Ao clicar em Publicar, você reconhece que seu uso das ferramentas para anúncios da Meta está sujeito aos nossos Termos e condições. Esse anúncio será automaticamente salvo como rascunho se você sair antes de enviar.': 'Al hacer clic en Publicar, reconoces que el uso que haces de las herramientas publicitarias de Meta está sujeto a nuestras Condiciones. Este anuncio se guardará automáticamente como borrador si sales antes de enviarlo.',
    'Publicar': 'Publicar', 'Concluir': 'Terminar',
    'Prévia do anúncio': 'Vista previa del anuncio', 'Curtir · Comentar · Compartilhar': 'Me gusta · Comentar · Compartir', 'Lojinha da Marina - Fictício · Anúncio': 'Lojinha da Marina - Ficticio · Anuncio', 'Estimativa de resultados diários': 'Estimación de resultados diarios',
    '🧪 TESTE de treinamento — aqui não vendemos nada! Este anúncio faz parte de um exercício de aprendizado. Comente o que chamou a sua atenção…': '🧪 TESTE de treinamento — aqui não vendemos nada! Este anúncio faz parte de um exercício de aprendizado. Comente o que chamou a sua atenção…',
    'TESTE': 'TESTE', 'Anúncio em análise': 'Anuncio en revisión', 'Seu anúncio está sendo criado.': 'Tu anuncio se está creando.',
    'Avisaremos se ele atende aos Padrões de Publicidade da Meta em até 24 horas. Você também pode receber atualizações na Central de Anúncios.': 'Te avisaremos si cumple con las Normas de publicidad de Meta en un plazo de hasta 24 horas. También puedes recibir actualizaciones en el Centro de anuncios.'
  };
  for (var k in A) D[k] = A[k];
  var METAS = { 'Automático - Receber mensagens': 'Automático - Recibir mensajes', 'Gerar engajamento': 'Generar interacción', 'Obter leads': 'Conseguir clientes potenciales', 'Receber visitantes no site': 'Conseguir visitantes en el sitio web', 'Atrair visitas e seguidores para a Página': 'Atraer visitas y seguidores a la página', 'Receba ligações': 'Recibir llamadas' };
  var rs = function (v) { return 'R$' + v };
  var dias = function (n) { return n + (n === '1' ? ' día' : ' días') };
  P.push([/^\(R\$ ([\d,.]+) por dia × (\d+) dias?\)$/, function (m) { return '(R$' + m[1] + ' por día × ' + dias(m[2]) + ')' }]);
  P.push([/^Estimativa de ([\d,.]+) a ([\d,.]+) impressões por dia$/, function (m) { return 'Impresiones estimadas: ' + m[1] + ' - ' + m[2] + ' por día' }]);
  P.push([/^Impressões: ([\d,.]+) a ([\d,.]+)$/, function (m) { return 'Impresiones: ' + m[1] + ' - ' + m[2] }]);
  P.push([/^Orçamento total R\$ ([\d,.]+)$/, function (m) { return 'Presupuesto total R$' + m[1] }]);
  P.push([/^ISS estimado R\$ ([\d,.]+) · PIS\/COFINS estimado R\$ ([\d,.]+)$/, function (m) { return 'ISS estimado R$' + m[1] + ' · PIS/COFINS estimado R$' + m[2] }]);
  P.push([/^Valor total R\$ ([\d,.]+) BRL$/, function (m) { return 'Valor total R$' + m[1] + ' BRL' }]);
  P.push([/^Saldo disponível: R\$ ([\d,.]+)$/, function (m) { return 'Saldo disponible: R$' + m[1] }]);
  P.push([/^· Seu anúncio será veiculado por (\d+) dias?\.$/, function (m) { return '· Tu anuncio se publicará durante ' + dias(m[1]) + '.' }]);
  P.push([/^\(limite da conta: R\$ ([\d,.]+) · já gastos: R\$ ([\d,.]+) · no simulador, clicar aqui sobe o limite\)$/, function (m) { return '(límite de la cuenta: R$' + m[1] + ' · ya gastado: R$' + m[2] + ' · en el simulador, hacer clic aquí sube el límite)' }]);
  P.push([/^· Meta: (.+) · Valor total R\$ ([\d,.]+)$/, function (m) { return '· Objetivo: ' + (METAS[m[1]] || m[1]) + ' · Valor total R$' + m[2] }]);
  P.push([/^O saldo disponível \(R\$ ([\d,.]+)\) não cobre o valor total\. Como a cobrança é diária, o anúncio pode ficar pausado quando o saldo acabar\.$/, function (m) { return 'El saldo disponible (R$ ' + m[1] + ') no cubre el valor total. Como el cobro es diario, el anuncio puede quedar pausado cuando se acabe el saldo.' }]);
  P.push([/^R\$ ([\d,.]+)$/, function (m) { return 'R$' + m[1] }]);
})();
