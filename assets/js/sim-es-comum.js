/* Dicionário PT → ES: o que é igual em todos os simuladores (faixa amarela, rodapés). Ver sim-i18n.js. */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {};
  var A = {
    '← voltar à plataforma': '← volver a la plataforma',
    '← voltar ao simulador': '← volver al simulador',
    'Lojinha da Marina': 'Lojinha da Marina', 'Cancelar': 'Cancelar', 'Concluir': 'Terminar', 'Continuar': 'Continuar', 'Voltar': 'Volver', 'Avançar': 'Siguiente', 'Salvar': 'Guardar', 'Fechar': 'Cerrar', 'Editar': 'Editar', 'Criar': 'Crear'
  };
  for (var k in A) D[k] = A[k];
})();

/* peças comuns de 01/11/2026 (sim-ads-comum.js, sim-config-menu.js, painel do Business Suite, tela inicial do celular, Central de Contas) */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {}, P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var A = {
    'Conta de aula da Lojinha (ID 123456789)': 'Cuenta de clase de la Lojinha (ID 123456789)', 'Atualizar dados da tabela': 'Actualizar datos de la tabla', 'Descartar rascunhos': 'Descartar borradores',
    'Conferir e publicar': 'Revisar y publicar', 'Todos os anúncios': 'Todos los anuncios', 'Anúncios ativos': 'Anuncios activos', 'Ações': 'Acciones', 'Tiveram veiculação': 'Tuvieron entrega',
    'Ver mais': 'Ver más', 'Criar uma visualização': 'Crear una vista', 'Campanhas': 'Campañas', 'Conjuntos de anúncios': 'Conjuntos de anuncios', 'Anúncios': 'Anuncios', 'Últimos 30 dias': 'Últimos 30 días',
    'Atividade': 'Actividad', 'Configurações': 'Configuración', 'Portfólio empresarial': 'Portafolio comercial', 'Tarefas': 'Tareas', 'Gerenciador de Comércio': 'Administrador de ventas',
    'Visão geral do Gerenciador de Eventos': 'Resumen del Administrador de eventos', 'Conta de anúncios': 'Cuenta publicitaria',
    'Stories': 'Historias', 'Testes A/B': 'Pruebas A/B', 'Feed e grade': 'Feed y cuadrícula', 'Menções e marcações': 'Menciones y etiquetas', 'Clipes': 'Clips', 'Coleções': 'Colecciones', 'Playlists': 'Listas',
    'Peças publicitárias': 'Piezas publicitarias', 'Vídeos para post cruzado': 'Videos para publicación cruzada', 'Programe, publique e gerencie posts, reels e stories e muito mais.': 'Programa, publica y administra publicaciones, reels, historias y mucho más.',
    'Resumo dos anúncios': 'Resumen de anuncios', 'Outras ferramentas': 'Otras herramientas', 'Gerenciador de Anúncios': 'Administrador de anuncios', 'Compare ferramentas de publicidade': 'Compara herramientas de publicidad',
    'Configuração e gerenciamento de anúncios simples para conteúdo turbinado ou anúncios individuais.': 'Configuración y administración de anuncios simples para contenido promocionado o anuncios individuales.',
    'Resumo da publicidade': 'Resumen de la publicidad', 'Lojinha da Marina Aula: anúncios dos últimos 60 dias.': 'Lojinha da Marina Aula: anuncios de los últimos 60 días.', 'Anúncios recentes': 'Anuncios recientes', 'Nenhum anúncio recente.': 'Ningún anuncio reciente.',
    'Criar anúncio': 'Crear anuncio', 'sábado, 1 de novembro': 'sábado, 1 de noviembre', 'Telefone': 'Teléfono', 'Mensagens': 'Mensajes', 'Câmera': 'Cámara', 'Tela inicial': 'Pantalla de inicio', 'Apps recentes': 'Apps recientes',
    'Controle como sua conta funciona em todos os apps e dispositivos.': 'Controla cómo funciona tu cuenta en todas las apps y dispositivos.', 'Saiba mais': 'Más información', 'Página inicial': 'Inicio',
    'Login e segurança': 'Contraseña y seguridad', 'Experiências multiperfil': 'Experiencias multiperfil', 'Suas informações e permissões': 'Tu información y permisos', 'Preferências de anúncios': 'Preferencias de anuncios',
    'Meta': 'Meta', '∞ Meta': '∞ Meta', 'Chrome': 'Chrome', 'Play Store': 'Play Store', 'Instagram': 'Instagram', 'Facebook': 'Facebook', 'Meta Pay': 'Meta Pay',
    'AI glasses': 'AI glasses', 'Meta Quest': 'Meta Quest', 'Meta VR Glasses': 'Meta VR Glasses', 'Explore Meta': 'Explore Meta', 'Support': 'Support', 'Log In': 'Log In',
    'Lojinha da Marina Aula': 'Lojinha da Marina Aula', 'Lojinha da Marina - Fictício · @lojinhadamarina.aula': 'Lojinha da Marina - Fictício · @lojinhadamarina.aula', 'andreaabcj-cmd.github.io/lojinha-da-marina': 'andreaabcj-cmd.github.io/lojinha-da-marina',
    '⚠ O menu Mais › Criar nova regra vem da Central de Ajuda da Meta; esta tabela do simulador é simplificada (a conferir).': '⚠ El menú Más › Crear nueva regla viene del Centro de ayuda de Meta; esta tabla del simulador está simplificada (por confirmar).',
    'Gerenciar conta': 'Administrar cuenta', 'Voltar às configurações do Facebook': 'Volver a la configuración de Facebook', 'Conta Meta': 'Cuenta de Meta'
  };
  for (var k in A) D[k] = A[k];
  P.push([/^Dia (\d+) do simulador$/, function (m) { return 'Día ' + m[1] + ' del simulador' }]);
})();
