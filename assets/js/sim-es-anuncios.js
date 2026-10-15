/* Dicionário PT → ES das telas do simulador do Gerenciador de Anúncios (Administrador de anuncios).
   Termos da Meta copiados das telas reais em espanhol (?locale=es_LA, 16/10/2026); ver _roteiro/glossario_es_meta.md. */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {}, P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var A = {
    /* faixa e rodapés do simulador */
    '🧪 Simulador de treinamento do Gerenciador de Anúncios · nada aqui vai para a Meta ·': '🧪 Simulador de capacitación del Administrador de anuncios · nada de aquí va a Meta ·',
    '✓ Tela conferida com o Gerenciador de Anúncios real em 15/10/2026 (conta de aula, em rascunho)': '✓ Pantalla revisada con el Administrador de anuncios real el 15/10/2026 (cuenta de práctica, en borrador)',
    '⚠ Tela montada pela documentação oficial · a conferir com a tela real': '⚠ Pantalla armada con la documentación oficial · por confirmar con la pantalla real',
    '(Mensagem do simulador: a tela real não foi vista.)': '(Mensaje del simulador: la pantalla real no se vio.)',
    '(a conta de aula já está pronta: telefone verificado, Página e pagamento ok)': '(la cuenta de práctica ya está lista: teléfono verificado, Página y pago en orden)',
    '(descrição do simulador)': '(descripción del simulador)',
    '(texto da Central de Ajuda da Meta, não é uma mensagem da tela)': '(texto del Centro de ayuda de Meta, no es un mensaje de la pantalla)',
    'No simulador, nada foi enviado à Meta.': 'En el simulador, no se envió nada a Meta.',
    /* lista de campanhas */
    'Campanhas': 'Campañas', 'Campanha': 'Campaña', 'Conjuntos de anúncios': 'Conjuntos de anuncios', 'Anúncios': 'Anuncios',
    'Conta de aula da Lojinha (ID 123456789)': 'Cuenta de práctica de la Lojinha (ID 123456789)',
    'Atualizar dados da tabela': 'Actualizar datos de la tabla', 'Descartar rascunhos': 'Descartar borradores', 'Descartar rascunho': 'Descartar borrador',
    'Conferir e publicar': 'Revisar y publicar', 'Todos os anúncios': 'Todos los anuncios', 'Anúncios ativos': 'Anuncios activos', 'Ações': 'Acciones',
    'Tiveram veiculação': 'Con entrega', 'Ver mais': 'Ver más', 'Criar uma visualização': 'Crear una vista', '＋ Criar': '＋ Crear', 'Duplicar': 'Duplicar', 'Editar': 'Editar',
    'Analisar': 'Analizar', 'Teste A/B': 'Prueba A/B', 'Pesquise para filtrar por: nome, identificação ou métrica': 'Buscar para filtrar por: nombre, ID o métricas',
    'Últimos 30 dias': 'Últimos 30 días', 'Veiculação': 'Entrega', 'Orçamento': 'Presupuesto', 'Valor gasto': 'Monto gastado', 'Término': 'Finalización',
    'Estratégia de lance': 'Estrategia de puja', 'Última edição significativa': 'Última edición significativa', 'Resultados': 'Resultados',
    'Diário': 'Diario', 'Volume mais alto': 'Volumen más alto', '● Ativo': '● Activa', '⚠ 1 dia restante': '⚠ Queda 1 día', '16 de out…': '16 de oct…',
    'Em rascunho': 'Borrador', 'Em análise': 'En revisión',
    'Prepare-se para veicular anúncios · Confirme alguns detalhes em “Visão geral da conta” para publicar sua primeira campanha de anúncios.': 'Prepárate para publicar anuncios · Confirma algunos detalles en “Resumen de la cuenta” para publicar tu primera campaña de anuncios.',
    'Ir para a Visão geral da conta': 'Ir al Resumen de la cuenta',
    'Nenhuma campanha ainda. Clique em': 'Todavía no hay campañas. Haz clic en', 'para começar.': 'para empezar.', 'Criar': 'Crear',
    /* criar nova campanha */
    'Criar nova campanha': 'Crear nueva campaña', 'Escolha um tipo de compra': 'Elige un tipo de compra', 'Leilão': 'Subasta', 'Escolha um objetivo da campanha': 'Elige un objetivo de campaña',
    'Reconhecimento': 'Reconocimiento', 'Tráfego': 'Tráfico', 'Engajamento': 'Interacción', 'Leads': 'Clientes potenciales', 'Promoção do app': 'Promoción de la app', 'Vendas': 'Ventas',
    'O objetivo da campanha é a meta de negócios que você espera atingir veiculando seus anúncios. Passe o ponteiro do mouse sobre cada um para obter mais informações.': 'El objetivo de la campaña es la finalidad comercial que persigues con tus anuncios. Pasa el cursor por cada uno para obtener más información.',
    'O objetivo da campanha é a meta de negócios que você espera atingir veiculando seus anúncios. Passe o ponteiro do mouse sobre cada um para obter mais informações.': 'El objetivo de la campaña es la finalidad comercial que persigues con tus anuncios. Pasa el cursor por cada uno para obtener más información.',
    'Sobre os objetivos da campanha': 'Información sobre los objetivos de campañas', 'Cancelar': 'Cancelar', 'Continuar': 'Continuar',
    ': Mostre seus anúncios para o maior número de pessoas que puder ver.': ': Muestra tus anuncios al mayor número posible de personas.',
    ': Leve pessoas a um destino, como um site ou app.': ': Lleva a las personas a un destino, como un sitio web o una app.',
    ': Consiga mais curtidas, comentários, mensagens ou seguidores.': ': Consigue más reacciones, comentarios, mensajes o seguidores.',
    ': Colete informações de pessoas interessadas.': ': Recopila información de personas interesadas.',
    ': Consiga mais instalações do app.': ': Consigue más instalaciones de la app.',
    ': Encontre pessoas com probabilidade de comprar seus produtos ou serviços.': ': Encuentra personas con probabilidad de comprar tus productos o servicios.',
    'está montado (foi o que conferimos na tela real). Os outros objetivos seguem a mesma ideia de campanha › conjunto › anúncio, mas com telas diferentes.': 'está armado (fue lo que revisamos en la pantalla real). Los otros objetivos siguen la misma idea de campaña › conjunto › anuncio, pero con pantallas distintas.',
    '🧪 No simulador, só o objetivo': '🧪 En el simulador, solo el objetivo',
    /* editor */
    'Fechar': 'Cerrar', 'Voltar': 'Volver', 'Avançar': 'Siguiente', 'Publicar': 'Publicar', 'Concluir': 'Terminar',
    'Pontuação da campanha': 'Puntuación de la campaña', 'Você está usando nossa configuração recomendada.': 'Estás usando nuestra configuración recomendada.', 'Campanha de vendas Advantage+': 'Campaña de ventas Advantage+', 'Ativado': 'Activado',
    'Campanha · padrão': 'Campaña · predeterminada', 'Conjunto de anúncios · padrão': 'Conjunto de anuncios · predeterminada', 'Anúncio · padrão': 'Anuncio · predeterminada',
    'Nome da campanha': 'Nombre de la campaña', 'Nome do conjunto de anúncios': 'Nombre del conjunto de anuncios', 'Nome do anúncio': 'Nombre del anuncio',
    'Detalhes da campanha': 'Detalles de la campaña', 'Tipo de compra': 'Tipo de compra', 'Objetivo da campanha': 'Objetivo de la campaña',
    'Orçamento da campanha': 'Presupuesto de la campaña', 'Orçamento do conjunto de anúncios': 'Presupuesto del conjunto de anuncios', 'Estratégia de orçamento': 'Estrategia de presupuesto',
    'Advantage+ ativado': 'Advantage+ activado', 'Orçamento diário': 'Presupuesto diario',
    'Distribua seu orçamento automaticamente para as melhores oportunidades na sua campanha. Também chamado de orçamento de campanha Advantage+.': 'Distribuye tu presupuesto automáticamente entre las mejores oportunidades de tu campaña. También conocido como presupuesto de la campaña Advantage+.',
    'Defina estratégias de lance ou programações de orçamento diferentes para cada conjunto de anúncios.': 'Establece diferentes estrategias de puja o programaciones de presupuesto para cada conjunto de anuncios.',
    'Com esta opção, o orçamento e o lance são definidos em cada conjunto de anúncios.': 'Con esta opción, el presupuesto y la puja se definen en cada conjunto de anuncios.',
    'Os gastos podem ser maiores em alguns dias e menores em outros. Estratégia de lance da campanha:': 'El gasto puede ser mayor algunos días y menor otros. Estrategia de puja de la campaña:',
    'Categorias de anúncio especiais': 'Categorías de anuncios especiales',
    'Declare se seus anúncios são relacionados a produtos e serviços financeiros, emprego, moradia, temas sociais, eleições ou política para ajudar a evitar rejeições. Os requisitos variam por país.': 'Declara si tus anuncios están relacionados con productos y servicios financieros, empleos, viviendas, temas sociales, elecciones o política para evitar que se rechacen. Los requisitos varían en función del país.',
    'Declarar categoria se aplicável.': 'Declara la categoría si corresponde.',
    '“Ver detalhes” é o texto de chamada para ação padrão (“Ver detalhes” gera um CVR até 2,3% maior em comparação com “Saiba mais”…). Dados do produto: Nenhum catálogo disponível.': '“Ver detalles” es el texto de llamada a la acción predeterminado (“Ver detalles” genera una tasa de conversión hasta un 2,3 % mayor que “Más información”…). Datos de productos: ningún catálogo disponible.',
    'Conversão': 'Conversión', 'Local da conversão:': 'Ubicación de la conversión:', 'Site': 'Sitio web', 'Meta de desempenho': 'Objetivo de rendimiento', 'Maximizar o número de conversões': 'Maximizar el número de conversiones',
    'Conjunto de dados': 'Conjunto de datos',
    'Um conjunto de dados (anteriormente conhecido como Pixel) é necessário. Para publicar, configure seu conjunto de dados ou escolha uma otimização diferente, como visualizações da página de destino.': 'Se necesita un conjunto de datos (antes conocido como "píxel"). Para publicar, configura tu conjunto de datos o usa otra optimización, como visitas a la página de destino.',
    'Pixel da Lojinha da Marina': 'Píxel de la Lojinha da Marina', 'Nenhum conjunto de dados': 'Ningún conjunto de datos',
    'Criado no Gerenciador de Eventos (módulo Pixel)': 'Creado en el Administrador de eventos (módulo Píxel)', 'Criar conjunto de dados': 'Crear conjunto de datos',
    '(no simulador, o Pixel já foi criado no módulo Pixel)': '(en el simulador, el Píxel ya se creó en el módulo Píxel)',
    'Modelo de atribuição Padrão · Meta de custo por resultado Nenhum · Regras de valor “Habilitado: não”.': 'Modelo de atribución Estándar · Objetivo de costo por resultado Ninguno · Reglas de valor “Activado: no”.',
    'Público': 'Público', 'Configure seu público usando controles e sugestões.': 'Configura tu público con controles y sugerencias.',
    'Controles': 'Controles', '— “Não vamos alcançar pessoas fora destas configurações, mesmo com o Advantage+ ativado.”': '— “No llegaremos a personas fuera de esta configuración, aunque tengas Advantage+ activado.”',
    'Sugira um público': 'Sugerir un público', ': “Também vamos alcançar pessoas fora das configurações de público personalizado, idade, gênero e direcionamento detalhado aplicadas por você quando houver probabilidade de melhorar o desempenho.”': ': “También llegaremos a personas fuera de la configuración de público personalizado, edad, sexo y segmentación detallada que definiste si es probable que mejore el rendimiento.”',
    'Tamanho estimado do público: 159.100.000 - 187.200.000': 'Tamaño de público estimado: 159.100.000 - 187.100.000',
    'Tamanho estimado do público: 164.800.000 - 193.900.000': 'Tamaño de público estimado: 164.800.000 - 193.900.000',
    'Identidade': 'Identidad', 'Os perfis e elementos de marca que serão usados no seu anúncio.': 'Los perfiles que se usarán en tu anuncio.', 'Página do Facebook': 'Página de Facebook', 'Página do Facebook:': 'Página de Facebook:',
    'Lojinha da Marina - Fictício': 'Lojinha da Marina - Ficticio', 'Marina Presentes (página antiga)': 'Marina Presentes (página antigua)',
    '· Perfil do Instagram:': '· Perfil de Instagram:',
    'Configuração do anúncio': 'Configuración del anuncio', 'Criativo do anúncio': 'Contenido del anuncio', 'Rastreamento': 'Seguimiento',
    'Selecione e otimize o texto do anúncio, a mídia e os aprimoramentos.': 'Selecciona y optimiza el texto, el contenido multimedia y las mejoras del anuncio.',
    'Selecione os eventos de conversão a serem rastreados. O conjunto de dados de conversão selecionado desta conta de anúncios será rastreado por padrão.': 'Elige eventos de conversión para hacer un seguimiento. De forma predeterminada, se hará un seguimiento del conjunto de datos de conversión seleccionado de esta cuenta publicitaria.',
    'Prévia do anúncio': 'Vista previa del anuncio', '· Analisar configurações padrão · Prévia avançada': '· Revisar opciones predeterminadas · Vista previa avanzada',
    'Ainda não dá para publicar:': 'Todavía no se puede publicar:',
    'Conjunto de anúncios: um conjunto de dados (anteriormente conhecido como Pixel) é necessário. Para publicar, configure seu conjunto de dados ou escolha uma otimização diferente, como visualizações da página de destino.': 'Conjunto de anuncios: se necesita un conjunto de datos (antes conocido como "píxel"). Para publicar, configura tu conjunto de datos o usa otra optimización, como visitas a la página de destino.',
    'Anúncio: selecione a Página do Facebook.': 'Anuncio: selecciona la Página de Facebook.',
    '(texto de erro do simulador, resumindo o que a tela real cobra)': '(texto de error del simulador, que resume lo que pide la pantalla real)',
    'Ainda tem coisa faltando:': 'Todavía falta algo:', 'Rascunhos desta conta de anúncios': 'Borradores de esta cuenta publicitaria', '1 campanha · 1 conjunto de anúncios · 1 anúncio': '1 campaña · 1 conjunto de anuncios · 1 anuncio',
    'Tudo preenchido. No simulador, o botão Publicar é só de treino.': 'Todo completo. En el simulador, el botón Publicar es solo de práctica.',
    'Anúncio em análise': 'Anuncio en revisión', 'Seu anúncio está sendo criado.': 'Tu anuncio se está creando.',
    'Avisaremos se ele atende aos Padrões de Publicidade da Meta em até 24 horas. Você também pode receber atualizações na Central de Anúncios.': 'Te avisaremos si cumple con las Normas de publicidad de Meta en un plazo de hasta 24 horas. También puedes recibir actualizaciones en el Centro de anuncios.',
    'Status': 'Estado',
    'Qualquer alteração nesta conta de anúncios Conta de aula da Lojinha (123456789) que ainda não foi publicado será descartada.': 'Se descartarán todos los cambios realizados en la cuenta publicitaria Cuenta de práctica de la Lojinha (123456789) que aún no se hayan publicado.',
    'Descartar': 'Descartar',
    'Ao clicar em Publicar, você aceita que seu uso das ferramentas para anúncios da Meta está sujeito aos nossos Termos e Condições.': 'Al hacer clic en Publicar, reconoces que el uso que haces de las herramientas publicitarias de Meta está sujeto a nuestras Condiciones.',
    /* campanha já publicada (edição) */
    'Recomendações da campanha': 'Recomendaciones de la campaña',
    'Você pode ter resultados melhores com posicionamentos Advantage+ para 1 conjunto de anúncios. A inclusão de mais posicionamentos frequentemente ajuda a encontrar um público mais amplo.': 'Puedes obtener mejores resultados con las ubicaciones Advantage+ para 1 conjunto de anuncios. La inclusión de más ubicaciones suele ayudar a encontrar un público más amplio.',
    'Aplicar agora': 'Aplicar ahora', 'Ver no conjunto de anúncios': 'Ver en el conjunto de anuncios', '👥 1 Conjunto de anúncios': '👥 1 Conjunto de anuncios', '🖼️ 1 anúncio': '🖼️ 1 Anuncio',
    ': Orçamento da campanha': ': Presupuesto de la campaña', ': Desativado': ': Desactivado',
    ': aumente seu orçamento durante dias ou horários específicos ·': ': aumenta tu presupuesto durante días u horarios específicos ·', ': veicular anúncios o tempo todo ·': ': publicar anuncios todo el tiempo ·',
    'Programação do orçamento': 'Programación del presupuesto', 'Programação de anúncios': 'Programación de anuncios', 'Controle da frequência': 'Control de frecuencia',
    'Os dois campos ficam cinza: depois de publicada, a campanha não troca de objetivo nem de tipo de compra.': 'Los dos campos quedan en gris: una vez publicada, la campaña no cambia de objetivo ni de tipo de compra.',
    'Atenção:': 'Atención:',
    'editar certos detalhes da campanha pode reiniciar a fase de aprendizado ou fazer a análise de anúncios revisar o anúncio de novo. A nova versão substitui a antiga e não dá para reverter nem separar as métricas de antes e depois.': 'editar ciertos detalles de la campaña puede reiniciar la fase de aprendizaje o hacer que la revisión de anuncios vuelva a revisar el anuncio. La nueva versión reemplaza a la antigua y no se puede revertir ni separar las métricas de antes y después.',
    '· Tipo de engajamento:': '· Tipo de interacción:', 'Engajamento com o post': 'Interacción con la publicación', 'No seu anúncio': 'En tu anuncio',
    'A opção Maximizar o alcance e a impressão não está mais disponível para Engajamento. Meta de desempenho: Maximizar o engajamento com um post. Lance: a Meta tentará usar todo o seu orçamento e obter o máximo de engajamentos com o post usando a estratégia de lance de volume mais alto.': 'La opción Maximizar el alcance y las impresiones ya no está disponible para Interacción. Objetivo de rendimiento: Maximizar la interacción con una publicación. Puja: Meta intentará usar todo tu presupuesto y obtener la mayor cantidad de interacciones con la publicación con la estrategia de puja de volumen más alto.',
    'Usar post existente': 'Usar publicación existente',
    'Pela Central de Ajuda: não é possível editar o texto, as imagens ou o vídeo de um post turbinado depois de ele ser analisado e publicado como anúncio. Para mudar o criativo, publique outro post e turbine de novo.': 'Según el Centro de ayuda: no es posible editar el texto, las imágenes ni el video de una publicación promocionada una vez que se revisó y se publicó como anuncio. Para cambiar el contenido, publica otra publicación y promociónala de nuevo.',
    '/ Carrossel': '/ Carrusel', 'Brasil': 'Brasil', 'Criar anúncio': 'Crear anuncio', 'Imagem ou vídeo único': 'Imagen o video único', 'Local da conversão': 'Ubicación de la conversión', 'Localizações: Inclusão': 'Ubicaciones: Inclusión',
    'Modelo de atribuição': 'Modelo de atribución', 'Nenhum': 'Ninguno', 'Padrão': 'Estándar', 'Upload manual': 'Subida manual',
    'Perfil do Instagram: lojinhadamarina (conta de aula) · Perfil do Threads: usar conta do Instagram · Marca: Inativo': 'Perfil de Instagram: lojinhadamarina (cuenta de práctica) · Perfil de Threads: usar cuenta de Instagram · Marca: Inactiva',
    'Selecione um post existente ou crie um novo ·': 'Selecciona una publicación existente o crea una nueva ·',
    '· Fonte do criativo:': '· Origen del contenido:', '· Formato:': '· Formato:', '· Idade mínima': '· Edad mínima', '· Meta de custo por resultado': '· Objetivo de costo por resultado', '· Meta de desempenho': '· Objetivo de rendimiento', '· Objetivo': '· Objetivo',
    '· Regras de valor “Habilitado: não”.': '· Reglas de valor “Activado: no”.', '· Status da instalação do app: Qualquer pessoa · Idiomas: Todos os idiomas': '· Estado de instalación de la app: Cualquiera · Idiomas: Todos los idiomas',
    'Alterações publicadas': 'Cambios publicados',
    'Pela Central de Ajuda, uma edição assim pode reiniciar a fase de aprendizado (a coluna Veiculação mostraria “Aprendizado”) e o anúncio pode passar por análise de novo.': 'Según el Centro de ayuda, una edición así puede reiniciar la fase de aprendizaje (la columna Entrega mostraría “Aprendizaje”) y el anuncio puede pasar por revisión de nuevo.'
  };
  for (var k in A) D[k] = A[k];
  var OBJ = { 'Vendas': 'Ventas', 'Engajamento': 'Interacción', 'Tráfego': 'Tráfico', 'Leads': 'Clientes potenciales', 'Reconhecimento': 'Reconocimiento', 'Promoção do app': 'Promoción de la app' };
  var ob = function (x) { return OBJ[x] || x };
  P.push([/^🎯 Nova campanha de (.+)$/, function (m) { return '🎯 Nueva campaña de ' + ob(m[1]) }]);
  P.push([/^👥 Novo conjunto de anúncios de (.+)$/, function (m) { return '👥 Nuevo conjunto de anuncios de ' + ob(m[1]) }]);
  P.push([/^🖼️ Novo anúncio de (.+)$/, function (m) { return '🖼️ Nuevo anuncio de ' + ob(m[1]) }]);
  P.push([/^Conferir e publicar \((\d+)\)$/, function (m) { return 'Revisar y publicar (' + m[1] + ')' }]);
  P.push([/^Nova campanha de (.+)$/, function (m) { return 'Nueva campaña de ' + ob(m[1]) }]);
  P.push([/^Novo conjunto de anúncios de (.+)$/, function (m) { return 'Nuevo conjunto de anuncios de ' + ob(m[1]) }]);
  P.push([/^Novo anúncio de (.+)$/, function (m) { return 'Nuevo anuncio de ' + ob(m[1]) }]);
  P.push([/^Gastaremos cerca de R\$ ([\d,.]+) por dia\. Seu gasto diário máximo é de R\$ ([\d,.]+), e seu gasto semanal máximo é de R\$ ([\d,.]+)\.$/, function (m) { return 'Gastaremos aproximadamente R$' + m[1] + ' por día. El gasto diario máximo es de R$' + m[2] + ' y el gasto semanal máximo es de R$' + m[3] + '.' }]);
  P.push([/^O orçamento diário agora é R\$ ([\d,.]+)\. A versão antiga foi substituída\.$/, function (m) { return 'El presupuesto diario ahora es de R$' + m[1] + '. La versión antigua fue reemplazada.' }]);
  P.push([/^R\$ ([\d,.]+)$/, function (m) { return 'R$' + m[1] }]);
})();
