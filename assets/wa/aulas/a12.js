/* Aula 12 · Ligar Página e Instagram.
   Fontes lidas em 28/10/2026: facebook.com/business/help/1583303048513172 (Página ↔ WhatsApp, erro "vinculado a outra empresa"),
   faq.whatsapp.com/647574060315065 (Instagram ↔ WhatsApp Business). Telas reais: app › Instagram e Facebook (25–26/10);
   Business Suite › Contas de mensagens › ⋯ (27/10). */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel, meta = N.meta;
  N.AULAS['12'] = {
    min: 8,
    objetivo: N.T('Ligar o WhatsApp Business à Página e ao Instagram e resolver os dois erros mais comuns.', 'Vincular WhatsApp Business a la Página y a Instagram y resolver los dos errores más comunes.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina quer o botão do WhatsApp no Instagram e anúncios que abram conversa.', '<b>Dónde estamos:</b> Marina quiere el botón de WhatsApp en Instagram y anuncios que abran un chat.'],
      ['m', 'Fui ligar a Página e deu “Número do WhatsApp vinculado a outra empresa no Facebook”. Que empresa?', 'Fui a vincular la Página y salió “Número de WhatsApp vinculado a otra empresa en Facebook”. ¿Qué empresa?'],
      ['r', 'Seu número já está em outro portfólio, talvez de uma agência antiga. É preciso tirar o número como ativo de lá.', 'Tu número ya está en otro portfolio, quizá de una agencia anterior. Hay que quitar el número como activo de allí.'],
      ['m', 'E no Instagram deu “A categoria da sua empresa do Instagram não é compatível com o WhatsApp”.', 'Y en Instagram salió “La categoría de tu empresa de Instagram no es compatible con WhatsApp”.'],
      ['r', 'Aí é no Instagram: mudar a categoria da empresa para uma compatível com a Política Comercial do WhatsApp. Qual escolher é decisão sua; não dá para eu indicar.', 'Ahí es en Instagram: cambiar la categoría de la empresa por una compatible con la Política comercial de WhatsApp. Cuál elegir es decisión tuya; no puedo indicarla.'],
      ['dica', 'Instagram precisa ser <b>conta profissional</b>. Conectado, o perfil ganha o botão “Clique para o WhatsApp”.', 'Instagram debe ser <b>cuenta profesional</b>. Conectado, el perfil gana el botón “Clic para WhatsApp”.']
    ]),
    verDePerto: [
      ['h', 'Página do Facebook', 'Página de Facebook'],
      ['ul', [
        ['Serve para os anúncios de clique para o WhatsApp. Dá para ligar <b>vários números</b> à mesma Página.', 'Sirve para los anuncios de clic a WhatsApp. Se pueden vincular <b>varios números</b> a la misma Página.'],
        ['Três lugares para ligar: no <b>app WhatsApp Business</b> (Ferramentas › Instagram e Facebook), nas <b>configurações da Página</b> (Permissões › Contas vinculadas › WhatsApp › código) ou no <b>Gerenciador de Anúncios</b> (conjunto de anúncios › Destinos de mensagem › Conectar conta).', 'Tres lugares para vincular: en la <b>app WhatsApp Business</b> (Herramientas › Instagram y Facebook), en la <b>configuración de la Página</b> (Permisos › Cuentas vinculadas › WhatsApp › código) o en el <b>Administrador de anuncios</b> (conjunto de anuncios › Destinos de mensajes › Conectar cuenta).'],
        ['Erro <b>“Número do WhatsApp vinculado a outra empresa no Facebook”</b>: o número já é ativo de outro portfólio → remover de lá.', 'Error <b>“Número de WhatsApp vinculado a otra empresa en Facebook”</b>: el número ya es activo de otro portfolio → quitarlo de allí.'],
        ['Desligar: Página › Configurações › Contas vinculadas › WhatsApp › Remover › Remover.', 'Desvincular: Página › Configuración › Cuentas vinculadas › WhatsApp › Eliminar › Eliminar.'],
        ['Usa a Plataforma (API)? O caminho é outro (pedido de conexão do número da Plataforma).', '¿Usa la Plataforma (API)? El camino es otro (solicitud de conexión del número de la Plataforma).']]],
      ['h', 'Instagram', 'Instagram'],
      ['ul', [
        ['Precisa: conta <b>profissional</b> do Instagram, conta do WhatsApp Business e os dois apps atualizados.', 'Necesita: cuenta <b>profesional</b> de Instagram, cuenta de WhatsApp Business y las dos apps actualizadas.'],
        ['No app: Ferramentas › Facebook e Instagram › Instagram › Continuar › entrar no Instagram (ou Continuar com o Facebook). Conta pessoal vira profissional no caminho (Empresa ou Criador de conteúdo).', 'En la app: Herramientas › Facebook e Instagram › Instagram › Continuar › entrar a Instagram (o Continuar con Facebook). La cuenta personal pasa a profesional en el camino (Empresa o Creador de contenido).'],
        ['Erro de categoria incompatível: mudar a categoria <b>no Instagram</b>, de acordo com a Política Comercial do WhatsApp.', 'Error de categoría incompatible: cambiar la categoría <b>en Instagram</b>, según la Política comercial de WhatsApp.'],
        ['Desligar: Ferramentas › Facebook e Instagram › a conta › Remover a conta do WhatsApp › Remover.', 'Desvincular: Herramientas › Facebook e Instagram › la cuenta › Quitar la cuenta de WhatsApp › Quitar.']]]
    ],
    praticar: {
      intro: N.T('No celular, onde a Marina liga Instagram e Facebook; na Meta, onde se tira o número de um portfólio.', 'En el celular, dónde vincula Marina Instagram y Facebook; en Meta, dónde se quita el número de un portfolio.'),
      lugares: ['cel', 'meta'], comeco: function () { CEL.zera(); CEL.por('home'); META.por() },
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Toque no WA Business.', 'Toca WA Business.'], true),
        P(cel('conversas'), 'cel-aba-ferramentas', ['Ferramentas', 'Herramientas'], ['Toque na aba Ferramentas.', 'Toca la pestaña Herramientas.'], true),
        P(cel('ferramentas'), 'cel-ferr-instafb', ['Instagram e Facebook', 'Instagram y Facebook'], ['Em Gerencie sua conta, toque em Instagram e Facebook.', 'En Administra tu cuenta, toca Instagram y Facebook.'], true),
        P(cel('instafb'), 'cel-instafb-contas', ['As duas ligações', 'Las dos conexiones'], ['O Instagram já está ligado; o Facebook mostra CONECTAR. Ligando a Página, a loja pode fazer anúncios que abrem conversa no WhatsApp.', 'Instagram ya está vinculado; Facebook muestra CONECTAR. Al vincular la Página, la tienda puede hacer anuncios que abren chats en WhatsApp.']),
        P(meta({ pag: 'carregando' }), 'mt-menu-msg', ['O outro portfólio', 'El otro portfolio'], ['Agora, o erro “vinculado a outra empresa”. Este é o portfólio antigo onde o número ficou. Toque em <b>Contas de mensagens</b>.', 'Ahora, el error “vinculado a otra empresa”. Este es el portfolio anterior donde quedó el número. Toca <b>Cuentas de mensajes</b>.'], true, 'meta'),
        P(meta({ pag: 'msg' }), 'mt-conta', ['A conta', 'La cuenta'], ['Toque na conta.', 'Toca la cuenta.'], true, 'meta'),
        P(meta({ pag: 'msg', sel: true, aba: 'resumo' }), 'mt-aba-numeros', ['O número', 'El número'], ['Toque na aba <b>WhatsApp accounts</b> para conferir se o número é o da cliente.', 'Toca la pestaña <b>WhatsApp accounts</b> para comprobar que el número es el de la clienta.'], true, 'meta'),
        P(meta({ pag: 'msg', sel: true, aba: 'numeros' }), 'mt-numeros', ['É o número dela', 'Es su número'], ['Número conferido. Agora, o menu ⋯ no alto do painel.', 'Número comprobado. Ahora, el menú ⋯ arriba del panel.'], false, 'meta'),
        P(meta({ pag: 'msg', sel: true, aba: 'numeros', pop: true }), 'mt-pop-remover', ['Pronto!', '¡Listo!'], ['<b>Remover do portfólio empresarial</b> (precisa de controle total da conta). Depois disso o número fica livre para ligar à Página do portfólio certo. No treino, nada é removido.', '<b>Eliminar del portfolio comercial</b> (requiere control total de la cuenta). Después el número queda libre para vincularlo a la Página del portfolio correcto. En la práctica no se elimina nada.'], false, 'meta')
      ]
    },
    quiz: [
      Q(['Erro “Número do WhatsApp vinculado a outra empresa no Facebook”. O que fazer?', 'Error “Número de WhatsApp vinculado a otra empresa en Facebook”. ¿Qué hacer?'], 2,
        [['Trocar o número de telefone da loja', 'Cambiar el número de teléfono de la tienda'], ['Criar uma Página nova e tentar com ela', 'Crear una Página nueva e intentar con ella'], ['Tirar o número do outro portfólio', 'Quitar el número del otro portfolio'], ['Esperar 7 dias e tentar ligar de novo', 'Esperar 7 días e intentar vincular de nuevo']],
        [['Não precisa trocar de número.', 'No hace falta cambiar de número.'], ['O problema é o número, não a Página.', 'El problema es el número, no la Página.'], ['A Meta diz: remover o número como ativo de negócios da outra empresa.', 'Meta dice: quitar el número como activo comercial de la otra empresa.'], ['Esperar não solta o número.', 'Esperar no libera el número.']]),
      Q(['Erro “A categoria da sua empresa do Instagram não é compatível com o WhatsApp”. Onde se resolve?', 'Error “La categoría de tu empresa de Instagram no es compatible con WhatsApp”. ¿Dónde se resuelve?'], 0,
        [['No Instagram, mudando a categoria', 'En Instagram, cambiando la categoría'], ['No perfil do WhatsApp, na categoria', 'En el perfil de WhatsApp, en la categoría'], ['No Gerenciador de Anúncios, no conjunto', 'En el Administrador de anuncios, en el conjunto'], ['Nas configurações da Página do Facebook', 'En la configuración de la Página de Facebook']],
        [['A categoria a mudar é a do Instagram, seguindo a Política Comercial do WhatsApp.', 'La categoría a cambiar es la de Instagram, según la Política comercial de WhatsApp.'], ['O erro fala da categoria do Instagram.', 'El error habla de la categoría de Instagram.'], ['Anúncio não muda categoria de conta.', 'Un anuncio no cambia la categoría de la cuenta.'], ['A Página não define a categoria do Instagram.', 'La Página no define la categoría de Instagram.']]),
      Q(['A cliente pergunta qual categoria do Instagram escolher. O que responder?', 'La clienta pregunta qué categoría de Instagram elegir. ¿Qué responder?'], 3,
        [['Indicar a categoria “Outras empresas”', 'Indicar la categoría “Otras empresas”'], ['Indicar a mesma categoria do WhatsApp', 'Indicar la misma categoría de WhatsApp'], ['Indicar a categoria mais vendida na região', 'Indicar la categoría más vendida en la región'], ['Explicar a regra, sem escolher por ela', 'Explicar la regla, sin elegir por ella']],
        [['Escolher pela cliente não é papel do suporte.', 'Elegir por la clienta no es papel de soporte.'], ['Nem sempre é compatível; a escolha é dela.', 'No siempre es compatible; la elección es suya.'], ['Isso não existe como regra.', 'Eso no existe como regla.'], ['A categoria deve combinar com a Política Comercial; a escolha é da empresa.', 'La categoría debe coincidir con la Política comercial; la elección es de la empresa.']]),
      Q(['O que o Instagram precisa para se ligar ao WhatsApp Business?', '¿Qué necesita Instagram para vincularse a WhatsApp Business?'], 1,
        [['Ter pelo menos mil seguidores', 'Tener al menos mil seguidores'], ['Ser conta profissional', 'Ser cuenta profesional'], ['Ter Meta Verified ativo', 'Tener Meta Verified activo'], ['Ter loja no Instagram ligada', 'Tener tienda en Instagram vinculada']],
        [['Não há mínimo de seguidores.', 'No hay mínimo de seguidores.'], ['Conta profissional (Empresa ou Criador de conteúdo), com os apps atualizados.', 'Cuenta profesional (Empresa o Creador de contenido), con las apps actualizadas.'], ['Meta Verified é opcional.', 'Meta Verified es opcional.'], ['Loja não é requisito.', 'La tienda no es requisito.']]),
      Q(['Em quantos lugares dá para ligar a Página ao WhatsApp do app?', '¿En cuántos lugares se puede vincular la Página al WhatsApp de la app?'], 2,
        [['Só no app WhatsApp Business', 'Solo en la app WhatsApp Business'], ['Só nas configurações da Página', 'Solo en la configuración de la Página'], ['App, Página ou Gerenciador', 'App, Página o Administrador'], ['Só pelo suporte da Meta', 'Solo con el soporte de Meta']],
        [['Também dá na Página e no Gerenciador de Anúncios.', 'También en la Página y en el Administrador de anuncios.'], ['Também dá no app e no Gerenciador.', 'También en la app y en el Administrador.'], ['São três lugares, segundo a Central de Ajuda da Meta.', 'Son tres lugares, según el Servicio de ayuda de Meta.'], ['A própria loja faz.', 'La propia tienda lo hace.']])
    ],
    fontes: [N.F('https://www.facebook.com/business/help/1583303048513172', ['Como conectar sua Página do Facebook ao WhatsApp', 'Cómo conectar tu Página de Facebook a WhatsApp']), N.F('https://faq.whatsapp.com/647574060315065', ['Como conectar uma conta do WhatsApp Business ao Instagram', 'Cómo conectar WhatsApp Business a Instagram']),
      N.F('https://www.facebook.com/business/help/353293243562513', ['Remover a conta do WhatsApp Business (Central de Ajuda)', 'Quitar la cuenta de WhatsApp Business (Servicio de ayuda)'], '27/10/2026')],
    divergencias: [{ tema: N.T('Tirar o WhatsApp do portfólio', 'Quitar WhatsApp del portfolio'),
      oficial: N.T('Configurações › Contas do WhatsApp › a conta › Opções › Remover do portfólio empresarial.', 'Configuración › Cuentas de WhatsApp › la cuenta › Opciones › Eliminar del portfolio comercial.'),
      tela: N.T('No portfólio de aula (27/10/2026), “Contas do WhatsApp” estava vazia; a conta do app aparecia em Contas de mensagens, e o Remover fica no menu ⋯ do painel.', 'En el portfolio de práctica (27/10/2026), “Cuentas de WhatsApp” estaba vacía; la cuenta de la app aparecía en Cuentas de mensajes, y Eliminar está en el menú ⋯ del panel.'),
      aula: N.T('Ensina a olhar as duas listas e usar Contas de mensagens › ⋯ › Remover do portfólio empresarial quando a conta estiver lá.', 'Enseña a mirar las dos listas y usar Cuentas de mensajes › ⋯ › Eliminar del portfolio comercial cuando la cuenta esté allí.') }],
    telas: N.T('Telas reais: app › Instagram e Facebook (Android, 25–26/10/2026) e Business Suite › Contas de mensagens (27/10/2026, PT e ES). Número e identificação fictícios.', 'Pantallas reales: app › Instagram y Facebook (Android, 25–26/10/2026) y Business Suite › Cuentas de mensajes (27/10/2026, PT y ES). Número e identificador ficticios.')
  };
})();
