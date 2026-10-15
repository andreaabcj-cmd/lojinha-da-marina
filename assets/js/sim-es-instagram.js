/* Dicionário PT → ES das telas do simulador do Instagram (perfil e conta profissional).
   Espanhol padrão do Instagram (Latinoamérica), a conferir com a tela real. */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {}, P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var A = {
    '🧪 Simulador de treinamento do Instagram · nada aqui vai para o Instagram ·': '🧪 Simulador de capacitación de Instagram · nada de aquí va a Instagram ·',
    '✓ Tela conferida com o Instagram real em 14/10/2026': '✓ Pantalla revisada con Instagram real el 14/10/2026',
    '⚠ Caminho montado pela Central de Ajuda do Instagram · a conferir com a tela real': '⚠ Camino armado con el Centro de ayuda de Instagram · por confirmar con la pantalla real',
    /* barra lateral */
    '🏠 Página inicial': '🏠 Inicio', '🔍 Pesquisa': '🔍 Búsqueda', '🧭 Explorar': '🧭 Explorar', '🎬 Reels': '🎬 Reels', '✉️ Mensagens': '✉️ Mensajes', '❤️ Notificações': '❤️ Notificaciones', '➕ Criar': '➕ Crear', '👤 Perfil': '👤 Perfil', '☰ Mais': '☰ Más', 'Instagram': 'Instagram',
    /* perfil */
    'Editar perfil': 'Editar perfil', 'Painel profissional': 'Panel profesional', 'posts ·': 'publicaciones ·', 'seguidores ·': 'seguidores ·', 'seguindo': 'seguidos', 'Marina': 'Marina',
    '🔒 Conta pessoal · privada': '🔒 Cuenta personal · privada', '⭐ Conta profissional · Criador de conteúdo · pública': '⭐ Cuenta profesional · Creador de contenido · pública',
    '🏪 Conta profissional · Comercial · pública': '🏪 Cuenta profesional · Comercial · pública', 'Conta pessoal · pública': 'Cuenta personal · pública',
    'Canecas': 'Tazas', 'Camisetas': 'Camisetas', 'Clientes': 'Clientes', 'Entregas': 'Envíos', 'Dúvidas': 'Preguntas', 'Encomendas': 'Pedidos',
    '▦ Posts': '▦ Publicaciones', '▶ Reels': '▶ Reels', '◫ Marcados': '◫ Etiquetadas', 'Contato': 'Contacto',
    'Amo fazer canecas 🧡': 'Me encanta hacer tazas 🧡', 'Caneca nova saindo do forno ☕': 'Taza nueva saliendo del horno ☕', 'FRETE GRÁTIS': 'ENVÍO GRATIS', 'acima de R$ 120 🚚': 'desde R$ 120 🚚', 'FRETE GRÁTIS acima de R$ 120 🚚': 'ENVÍO GRATIS desde R$ 120 🚚',
    'Estampa feita à mão 🎨': 'Estampado hecho a mano 🎨', 'Ecobag para a feira 🛍️': 'Ecobag para el mercado 🛍️', 'Bastidores:': 'Detrás de escena:', 'pintando canecas 🖌️': 'pintando tazas 🖌️', 'Bastidores: pintando canecas 🖌️': 'Detrás de escena: pintando tazas 🖌️',
    'Presente que abraça 🧡': 'Un regalo que abraza 🧡', 'Moletom chegou! ❄️': '¡Llegó el buzo! ❄️', 'Obrigada pelos': 'Gracias por los', '200 seguidores! 💕': '200 seguidores! 💕', 'Obrigada pelos 200 seguidores! 💕': '¡Gracias por los 200 seguidores! 💕',
    'Boné da Lojinha 🧢': 'Gorra de la Lojinha 🧢', 'Kit café da manhã ☕🥐': 'Kit de desayuno ☕🥐', 'Encomendas pela DM ✉️': 'Pedidos por DM ✉️', 'pela DM ✉️': 'por DM ✉️', 'Camiseta coleção primavera 🌸': 'Camiseta colección primavera 🌸',
    /* configurações */
    'Configurações e atividade': 'Configuración y actividad', 'Como você usa o Instagram': 'Cómo usas Instagram', 'Central de Contas': 'Centro de cuentas', 'Notificações': 'Notificaciones', 'Para profissionais': 'Para profesionales',
    'Tipo de conta e ferramentas ›': 'Tipo de cuenta y herramientas ›', 'Tipo de conta e ferramentas': 'Tipo de cuenta y herramientas', 'Quem pode ver seu conteúdo': 'Quién puede ver tu contenido',
    'Privacidade da conta · Privada': 'Privacidad de la cuenta · Privada', 'Privacidade da conta · Pública': 'Privacidad de la cuenta · Pública',
    'Mudar para conta profissional ›': 'Cambiar a cuenta profesional ›', 'Mudar para conta pessoal': 'Cambiar a cuenta personal', 'Tipo de conta:': 'Tipo de cuenta:', 'Comercial': 'Comercial', 'Criador de conteúdo': 'Creador de contenido',
    /* virar profissional */
    'Qual opção melhor descreve você?': '¿Qué opción te describe mejor?',
    'Melhor para figuras públicas, produtores de conteúdo, artistas e influenciadores.': 'Ideal para figuras públicas, creadores de contenido, artistas e influencers.',
    'Melhor para varejistas, negócios locais, marcas, organizações e prestadores de serviços.': 'Ideal para minoristas, negocios locales, marcas, organizaciones y prestadores de servicios.',
    'Saiba mais sobre seus seguidores': 'Obtén más información sobre tus seguidores', 'Obtenha insights sobre seus seguidores e veja como está o desempenho dos seus posts.': 'Obtén estadísticas sobre tus seguidores y mira cómo va el rendimiento de tus publicaciones.',
    'Alcance seus clientes': 'Llega a tus clientes', 'Crie promoções no Instagram para alcançar mais clientes e expandir seu negócio.': 'Crea promociones en Instagram para llegar a más clientes y hacer crecer tu negocio.',
    'Obtenha novas opções de contato': 'Obtén nuevas opciones de contacto', 'Adicione um botão de contato ao seu perfil para que as pessoas possam entrar em contato com você mais facilmente.': 'Agrega un botón de contacto a tu perfil para que las personas puedan comunicarse contigo con más facilidad.',
    'Selecione uma categoria': 'Selecciona una categoría', 'Escolha uma categoria que descreva melhor o que você faz. Você terá a opção de exibir ou ocultar isso no seu perfil.': 'Elige la categoría que mejor describa lo que haces. Podrás mostrar u ocultar esto en tu perfil.',
    'Mostrar categoria no perfil': 'Mostrar categoría en el perfil', 'Sugestões': 'Sugerencias',
    'Blog pessoal': 'Blog personal', 'Produto/serviço': 'Producto/servicio', 'Arte': 'Arte', 'Musicista/banda': 'Músico/banda', 'Compras e varejo': 'Compras y venta minorista', 'Saúde/beleza': 'Salud/belleza', 'Mercearia': 'Tienda de comestibles',
    'Trocar para uma conta profissional?': '¿Cambiar a una cuenta profesional?', 'Seu perfil e conteúdo no Instagram se tornarão públicos.': 'Tu perfil y tu contenido en Instagram se harán públicos.',
    'Verificar suas informações de contato': 'Revisar tu información de contacto',
    'Essas informações serão exibidas no seu perfil publicamente para que as pessoas possam entrar em contato com você. Você pode editar ou remover essas informações quando quiser.': 'Esta información se mostrará públicamente en tu perfil para que las personas puedan comunicarse contigo. Puedes editarla o quitarla cuando quieras.',
    'Mostrar informações de contato no perfil': 'Mostrar información de contacto en el perfil', 'Informações comerciais públicas': 'Información comercial pública', 'BR +55': 'BR +55',
    'Não usar minhas informações de contato': 'No usar mi información de contacto',
    /* editar perfil */
    'Editar foto ou avatar': 'Editar foto o avatar', 'Nome': 'Nombre', 'Nome de usuário': 'Nombre de usuario', 'Pronomes': 'Pronombres', 'Bio': 'Presentación', 'Links': 'Enlaces', 'Adicionar link': 'Agregar enlace', 'Banners': 'Banners', 'Adicionar banners': 'Agregar banners',
    'Sua conta comercial do Instagram está pronta': 'Tu cuenta comercial de Instagram está lista', 'Agora você tem mais ferramentas para se conectar com seu público no Instagram.': 'Ahora tienes más herramientas para conectar con tu público en Instagram.',
    'Lojinha da Marina': 'Lojinha da Marina',
    'marina.lojinha': 'marina.lojinha', 'Cancelar': 'Cancelar', 'Concluir': 'Listo', 'Continuar': 'Continuar', 'Voltar': 'Atrás', 'Avançar': 'Siguiente', 'Salvar': 'Guardar'
  };
  for (var k in A) D[k] = A[k];
  P.push([/^Acesse o app para celular para conhecer os seguidores de (.+) com insights, exibir e editar botões de contato, alcançar clientes com promoções e muito mais\. Gerencie sua nova conta comercial no desktop com o Business Suite\.$/, function (m) { return 'Accede a la app para celular para conocer a los seguidores de ' + m[1] + ' con estadísticas, mostrar y editar botones de contacto, llegar a clientes con promociones y mucho más. Administra tu nueva cuenta comercial en computadora con Business Suite.' }]);
  P.push([/^(\d+)$/, function (m) { return m[1] }]);
})();
