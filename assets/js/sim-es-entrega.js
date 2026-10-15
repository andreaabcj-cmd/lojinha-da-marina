/* Dicionário PT → ES do simulador de Entrega. Colunas e status copiados do Administrador de anuncios real em español (14–16/10/2026);
   explicações do botão “?”, a lista de edições e o passar dos dias são do simulador (a conferir). */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {};
  var A = {
    '🧪 Simulador de treinamento do Gerenciador de Anúncios · nada aqui vai para a Meta ·': '🧪 Simulador de capacitación del Administrador de anuncios · nada de aquí va a Meta ·', '← voltar à plataforma': '← volver a la plataforma',
    '📣 Campanhas': '📣 Campañas', '👥 Conjuntos de anúncios': '👥 Conjuntos de anuncios', '🖼️ Anúncios': '🖼️ Anuncios', '📊 Relatórios': '📊 Informes',
    'Conjuntos de anúncios': 'Conjuntos de anuncios', 'Avançar 1 dia (simulador)': 'Avanzar 1 día (simulador)', 'Avançar 7 dias (simulador)': 'Avanzar 7 días (simulador)',
    'Você quase atingiu o limite de gastos que definiu para essa conta de anúncios.': 'Casi alcanzaste el límite de gasto que estableciste para esta cuenta publicitaria.', 'Aumente, redefina ou remova o limite para manter seus anúncios em veiculação.': 'Aumenta, restablece o elimina el límite para mantener tus anuncios en circulación.', 'Aumentar limite': 'Aumentar límite',
    '% gastos na fase de aprendizado:': '% de gasto en la fase de aprendizaje:', '(quanto do dinheiro gasto está em conjuntos que ainda aprendem)': '(cuánto del dinero gastado está en conjuntos que todavía aprenden)',
    'Ativo': 'Activo', 'Veiculação': 'Entrega', 'Resultados (desde a última edição significativa)': 'Resultados (desde la última edición significativa)', 'Custo por resultado': 'Costo por resultado', 'Orçamento': 'Presupuesto', 'Valor gasto': 'Importe gastado', 'Última edição significativa': 'Última edición significativa', 'Editar': 'Editar', 'Diário': 'Diario',
    'Desativado': 'Desactivado', 'Em análise': 'En revisión', 'Programado': 'Programado', 'Aprendizado': 'Aprendizaje', 'Aprendizado limitado': 'Aprendizaje limitado', '● Ativo': '● Activo',
    'agora': 'ahora', 'Conjunto de anúncios': 'Conjunto de anuncios', 'Advantage+ (automático)': 'Advantage+ (automático)', 'Brasil 18+': 'Brasil 18+', 'Compras': 'Compras',
    'Editar conjunto de anúncios': 'Editar conjunto de anuncios', 'Orçamento diário (R$)': 'Presupuesto diario (R$)', 'Público': 'Público', 'Criativo do anúncio': 'Creativo del anuncio', 'Evento de otimização': 'Evento de optimización', 'Estratégia de lance': 'Estrategia de puja',
    'Visitantes do site 30 dias': 'Visitantes del sitio 30 días', 'Foto da caneca azul': 'Foto de la taza azul', 'Foto da camiseta': 'Foto de la camiseta', 'Adições ao carrinho': 'Adiciones al carrito', 'Volume mais alto': 'Volumen más alto', 'Limite de custo': 'Límite de costo',
    'Adicionar um novo anúncio a este conjunto': 'Agregar un anuncio nuevo a este conjunto', 'Cancelar': 'Cancelar', 'Publicar': 'Publicar',
    'Pela Central de Ajuda, mudar o direcionamento (público), o criativo, o evento de otimização, a estratégia de lance, adicionar um anúncio ou pausar por 7 dias ou mais são edições significativas. Mudar o orçamento “poderá ou não” ser: depende do tamanho.': 'Según el Centro de ayuda, cambiar la segmentación (público), el creativo, el evento de optimización, la estrategia de puja, agregar un anuncio o pausar por 7 días o más son ediciones significativas. Cambiar el presupuesto “puede serlo o no”: depende del tamaño.',
    'No simulador, uma mudança de 50% ou mais no orçamento conta como significativa.': 'En el simulador, un cambio del 50 % o más en el presupuesto cuenta como significativo.',
    'Este conjunto está desativado (por você ou por uma regra automatizada). Para voltar a veicular, ative-o.': 'Este conjunto está desactivado (por ti o por una regla automática). Para volver a entregar, actívalo.',
    'Em análise: a Meta avisa se o anúncio atende aos Padrões de Publicidade em até 24 horas.': 'En revisión: Meta avisa si el anuncio cumple las Normas de Publicidad en un plazo de 24 horas.',
    'Programado: a data de início ainda não chegou (começa amanhã).': 'Programado: la fecha de inicio todavía no llegó (empieza mañana).',
    'A conta quase atingiu o limite de gastos. Aumente, redefina ou remova o limite para manter os anúncios em veiculação.': 'La cuenta casi alcanzó el límite de gasto. Aumenta, restablece o elimina el límite para mantener los anuncios en circulación.',
    'Este conjunto está veiculando.': 'Este conjunto está en circulación.',
    'Esta explicação é do simulador, montada a partir das mensagens reais e da Central de Ajuda (a conferir).': 'Esta explicación es del simulador, armada a partir de los mensajes reales y del Centro de ayuda (por confirmar).',
    '✓ Colunas, status “Ativo/Em análise/Rascunho”, o card “% gastos na fase de aprendizado” e o aviso de limite de gastos conferidos com o Gerenciador real em 16/10/2026. ⚠ Os conjuntos, os números, o passar dos dias e a caixa “Por que não veicula?” são do simulador (a conferir).': '✓ Columnas, estados “Activo/En revisión/Borrador”, la tarjeta “% de gasto en la fase de aprendizaje” y el aviso de límite de gasto revisados con el Administrador real el 16/10/2026. ⚠ Los conjuntos, los números, el paso de los días y la caja “¿Por qué no entrega?” son del simulador (por confirmar).'
  };
  for (var k in A) D[k] = A[k];
  var P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var ST = { 'Ativo': 'Activo', 'Aprendizado': 'Aprendizaje', 'Aprendizado limitado': 'Aprendizaje limitado', 'Desativado': 'Desactivado', 'Em análise': 'En revisión', 'Programado': 'Programado' };
  var NM = { 'Caneca azul': 'Taza azul', 'Camiseta Montanha': 'Camiseta Montaña', 'Ecobag Folha': 'Ecobag Hoja', 'Boné Azul': 'Gorra Azul', 'Moletom Marinho': 'Buzo Marino' };
  var MT = { 'mudou o público': 'cambió el público', 'mudou o criativo': 'cambió el creativo', 'mudou o evento de otimização': 'cambió el evento de optimización', 'mudou a estratégia de lance': 'cambió la estrategia de puja', 'adicionou um anúncio': 'agregó un anuncio', 'mudou muito o orçamento': 'cambió mucho el presupuesto' };
  function nome(n) { return n.replace(/^(Caneca azul|Camiseta Montanha|Ecobag Folha|Boné Azul|Moletom Marinho)/, function (x) { return NM[x] }) }
  P.push([/^Lojinha da Marina Aula \(123456789\) · Dia (\d+) do simulador$/, function (m) { return 'Lojinha da Marina Aula (123456789) · Día ' + m[1] + ' del simulador' }]);
  P.push([/^Por que (.+) está “(.+)”\?$/, function (m) { return '¿Por qué ' + nome(m[1]) + ' está “' + (ST[m[2]] || m[2]) + '”?' }]);
  P.push([/^há (\d+) dias$/, function (m) { return 'hace ' + m[1] + ' días' }]);
  P.push([/^Edição salva\. Não foi uma edição significativa: o conjunto “(.+)” continua como estava, sem reiniciar o aprendizado\.$/, function (m) { return 'Edición guardada. No fue una edición significativa: el conjunto “' + nome(m[1]) + '” sigue como estaba, sin reiniciar el aprendizaje.' }]);
  P.push([/^Edição salva\. Foi uma edição significativa \((.+)\): o conjunto “(.+)” voltou para a fase de aprendizado e a contagem de resultados recomeçou\.$/, function (m) {
    return 'Edición guardada. Fue una edición significativa (' + m[1].split(', ').map(function (x) { return MT[x] || x }).join(', ') + '): el conjunto “' + nome(m[2]) + '” volvió a la fase de aprendizaje y el conteo de resultados recomenzó.' }]);
  P.push([/^(Caneca azul|Camiseta Montanha|Ecobag Folha|Boné Azul|Moletom Marinho) · Brasil$/, function (m) { return nome(m[0]) }]);
  P.push([/^(Advantage\+ \(automático\)|Visitantes do site 30 dias|Brasil 18\+) · (Volume mais alto|Limite de custo)$/, function (m) { return (D[m[1]] || m[1]) + ' · ' + (m[2] === 'Limite de custo' ? 'Límite de costo' : 'Volumen más alto') }]);
})();
