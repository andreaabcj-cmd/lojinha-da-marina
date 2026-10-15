/* Dicionário PT → ES do simulador dos Relatórios de Anúncios (Informes de anuncios).
   Textos copiados da tela real em espanhol (?locale=es_LA, 16/10/2026); o que não foi visto fica no padrão da Meta (a conferir). */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {}, P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var A = {
    '🧪 Simulador de treinamento do Gerenciador de Anúncios · nada aqui vai para a Meta ·': '🧪 Simulador de capacitación del Administrador de anuncios · nada de aquí va a Meta ·', '← voltar à plataforma': '← volver a la plataforma',
    'Todos os relatórios ›': 'Todos los informes ›', 'Relatório sem título': 'Informe sin título', 'Lojinha da Marina Aula · 1 conta de anúncios': 'Lojinha da Marina Aula · 1 cuenta publicitaria', 'Lojinha da Marina Aula': 'Lojinha da Marina Aula',
    'Salvar': 'Guardar', 'Atualizar': 'Actualizar', 'Compartilhar': 'Compartir', 'Exportar': 'Exportar', 'Teve veiculação': 'Con entrega', 'Pesquise para filtrar por: nome, identificação ou métrica': 'Buscar para filtrar por nombre, ID o métricas',
    'Período': 'Período', 'Janela de atribuição (simulador)': 'Ventana de atribución (simulador)',
    'Hoje': 'Hoy', 'Ontem': 'Ayer', 'Últimos 7 dias': 'Últimos 7 días', 'Últimos 30 dias': 'Últimos 30 días', 'Este mês': 'Este mes', 'Mês passado': 'Mes pasado',
    'Tabela dinâmica': 'Tabla dinámica', 'Agrupar detalhamentos': 'Agrupar desgloses', 'Redefinir larguras das colunas': 'Restablecer ancho de columnas', 'Formatar': 'Formato', 'Personalizar': 'Personalizar',
    'Nenhuma atividade durante o intervalo de datas selecionado': 'Ninguna actividad durante el intervalo de fechas seleccionado', 'Selecione um intervalo de datas diferente e pesquise novamente.': 'Selecciona un intervalo de fechas diferente y vuelve a buscar.', 'Alterar data': 'Cambiar fecha',
    'Personalizar tabela dinâmica': 'Personalizar tabla dinámica', 'Fechar': 'Cerrar', 'Detalhamentos': 'Desgloses', 'Métricas': 'Métricas', 'Detalhamentos populares': 'Desgloses populares', 'Métricas populares': 'Métricas populares',
    'Nome da conta': 'Nombre de la cuenta', 'Nome da campanha': 'Nombre de la campaña', 'Nome do conjunto de anúncios': 'Nombre del conjunto de anuncios', 'Nome do anúncio': 'Nombre del anuncio', 'Idade': 'Edad', 'Plataforma': 'Plataforma', 'Posicionamento': 'Ubicación', 'Dia': 'Día', 'Detalhamento': 'Desglose',
    'No simulador, a tabela combina um nível (conta, campanha, conjunto ou anúncio) com um detalhamento por vez (a tela real combina mais).': 'En el simulador, la tabla combina un nivel (cuenta, campaña, conjunto o anuncio) con un desglose a la vez (la pantalla real combina más).',
    'A tela real tem dezenas de métricas em grupos (Desempenho, Engajamento, Conversões…). Aqui estão as principais.': 'La pantalla real tiene decenas de métricas en grupos (Rendimiento, Interacción, Conversiones…). Aquí están las principales.',
    'Alcance': 'Alcance', 'Impressões': 'Impresiones', 'Frequência': 'Frecuencia', 'Valor gasto': 'Monto gastado', 'Configuração de atribuição': 'Configuración de atribución', 'Cliques no link': 'Clics en el enlace', 'CPC (custo por clique no link)': 'CPC (costo por clic en el enlace)', 'CTR (taxa de cliques no link)': 'CTR (porcentaje de clics en el enlace)', 'CPM (custo por 1.000 impressões)': 'CPM (costo por mil impresiones)', 'Compras': 'Compras', 'Custo por compra': 'Costo por compra', 'Valor de conversão da compra': 'Valor de conversión de compras',
    'Contas Meta': 'Cuentas de Meta', 'Total': 'Total', 'Por Conta Meta': 'Por cuenta de Meta', 'Total usado': 'Gasto total',
    'Clique de 7 dias ou visualização de 1 dia': '7 días tras clic o 1 días tras visualización', 'Clique de 7 dias': '7 días tras clic', 'Clique de 1 dia': '1 día tras clic',
    'Relatório salvo (simulador). Na tela real o relatório passa a aparecer em Todos os relatórios (a conferir).': 'Informe guardado (simulador). En la pantalla real el informe pasa a aparecer en Todos los informes (por confirmar).',
    '✓ Colunas, total e lista de detalhamentos e métricas conferidos com os Relatórios de Anúncios reais em 16/10/2026. ⚠ Divisões por idade/plataforma/posicionamento, a campanha de exemplo e a janela de atribuição aqui são inventadas para o treino (a conferir).': '✓ Columnas, total y lista de desgloses y métricas revisados con los Informes de anuncios reales el 16/10/2026. ⚠ Las divisiones por edad/plataforma/ubicación, la campaña de ejemplo y la ventana de atribución aquí son inventadas para la práctica (por confirmar).',
    'Post: “🧪 TESTE de treinamento…”': 'Publicación: “🧪 TESTE de treinamento…”', 'Engajamento com o post': 'Interacción con la publicación', 'Anúncio do post turbinado': 'Anuncio de la publicación promocionada',
    'Vendas · Caneca azul (exemplo)': 'Ventas · Caneca azul (ejemplo)', 'Brasil · 18 a 54 anos (exemplo)': 'Brasil · 18 a 54 años (ejemplo)', 'Anúncio da Caneca azul (exemplo)': 'Anuncio de la Caneca azul (ejemplo)',
    'Facebook': 'Facebook', 'Instagram': 'Instagram', 'Feed do Facebook': 'Feed de Facebook', 'Reels do Facebook': 'Reels de Facebook', 'Stories do Instagram': 'Historias de Instagram', 'Feed do Instagram': 'Feed de Instagram', '15 de out de 2026': '15 de oct de 2026'
  };
  for (var k in A) D[k] = A[k];
  var tr = function (s) { return D[s] || s };
  P.push([/^(.+?)( · .+)+$/, function (m) { var partes = m[0].split(' · '); var ok = partes.every(function (p) { return D[p] || /^\d{2}-\d{2}$/.test(p) }); return ok ? partes.map(tr).join(' · ') : m[0] }]);
  P.push([/^(\d+)\/(\d+) linhas? exibidas?$/, function (m) { return m[1] + '/' + m[2] + ' fila' + (m[2] === '1' ? '' : 's') + ' mostrada' + (m[2] === '1' ? '' : 's') }]);
})();
