/* Aula 17 · Excluir × desregistrar o número.
   Fontes lidas em 28/10/2026: developers.facebook.com › Business phone numbers (excluir: só admin, 30 dias sem mensagem paga, PIN se Conectado,
   não dá pela API), Registration (deregister: tira da API sem apagar; 10 em 72 h; não serve para coexistência), Error codes,
   Migrate an existing WhatsApp number (apagar a conta no app antes; até 3 minutos).
   13/11/2026: account-model-evolution e migrating-phone-numbers-among-solution-partners (migração entre parceiros não é mais
   suportada; compartilhar a Conta do WhatsApp; qualquer parceiro desregistra; PIN de 6 dígitos sendo aposentado).
   Telas reais: Gerenciador do WhatsApp (número do app sem lixeira; número da API com lixeira e "O telefone de teste não pode ser excluído")
   e app WhatsApp Business › Conta › Apagar conta, 28/10/2026 (só olhando). */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel, meta = N.meta;
  N.AULAS['17'] = {
    min: 10,
    objetivo: N.T('Entender por que excluir o número dá erro, o que é desregistrar e qual caminho serve em cada caso.', 'Entender por qué eliminar el número da error, qué es dar de baja y qué camino sirve en cada caso.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina vai trocar de parceiro da API e quer tirar o número da conta antiga.', '<b>Dónde estamos:</b> Marina va a cambiar de socio de la API y quiere sacar el número de la cuenta anterior.'],
      ['m', 'Fui excluir o número da conta antiga e dá erro. O parceiro novo disse que precisa “desregistrar”. É a mesma coisa?', 'Fui a eliminar el número de la cuenta anterior y da error. El socio nuevo dijo que hay que “dar de baja”. ¿Es lo mismo?'],
      ['r', 'Não. <b>Desregistrar</b> é tirar o número da API: quem faz é o desenvolvedor ou o parceiro, e não apaga o número nem as conversas.', 'No. <b>Dar de baja</b> es sacar el número de la API: lo hace el desarrollador o el socio, y no borra el número ni los chats.'],
      ['r', '<b>Excluir</b> é tirar o número da conta, no Gerenciador do WhatsApp › Números de telefone › lixeira. Só administrador pode, e <b>só 30 dias depois da última mensagem paga</b>. Se o número está Conectado, pede o PIN.', '<b>Eliminar</b> es sacar el número de la cuenta, en el Administrador de WhatsApp › Números de teléfono › papelera. Solo un administrador puede, y <b>solo 30 días después del último mensaje pago</b>. Si el número está Conectado, pide el PIN.'],
      ['r', 'E para o parceiro novo, nem precisa tirar o número: desde set–out/2026 a Meta <b>não move mais número entre parceiros</b>. A loja <b>compartilha a Conta do WhatsApp</b> (o número) com o parceiro novo, ou ele faz o cadastro com o mesmo número.', 'Y para el socio nuevo, ni hace falta sacar el número: desde sep–oct/2026 Meta <b>ya no mueve números entre socios</b>. La tienda <b>comparte la Cuenta de WhatsApp</b> (el número) con el socio nuevo, o él hace el registro con el mismo número.'],
      ['dica', 'Número em coexistência (app + API) não desregistra pela API: primeiro desconecta pelo app, na Plataforma comercial.', 'Un número en coexistencia (app + API) no se da de baja por la API: primero se desconecta desde la app, en Plataforma comercial.']
    ]),
    verDePerto: [
      ['h', 'Lado a lado', 'Lado a lado'],
      ['ul', [
        ['<b>Desregistrar:</b> pela API (desenvolvedor ou parceiro). O número para de funcionar na API, mas continua na conta e o histórico fica. Para usar de novo, registra outra vez.', '<b>Dar de baja:</b> por la API (desarrollador o socio). El número deja de funcionar en la API, pero sigue en la cuenta y el historial queda. Para usarlo de nuevo, se registra otra vez.'],
        ['<b>Excluir:</b> no Gerenciador do WhatsApp (lixeira). Tira o número da conta. Não dá para excluir pela API.', '<b>Eliminar:</b> en el Administrador de WhatsApp (papelera). Saca el número de la cuenta. No se puede eliminar por la API.'],
        ['<b>Apagar a conta no app</b> (celular): é o caminho para levar o número do app para a API sem coexistência. Apaga o histórico do celular; faça backup antes. O número fica livre em até 3 minutos.', '<b>Eliminar la cuenta en la app</b> (celular): es el camino para llevar el número de la app a la API sin coexistencia. Borra el historial del celular; haz copia antes. El número queda libre en hasta 3 minutos.']]],
      ['h', 'Trocar de parceiro (desde set–out/2026)', 'Cambiar de socio (desde sep–oct/2026)'],
      ['ul', [
        ['<b>Não existe mais migração</b> do número de um parceiro para outro. Desconectar o número antes não ajuda.', '<b>Ya no existe la migración</b> del número de un socio a otro. Desconectar el número antes no ayuda.'],
        ['O caminho é <b>compartilhar a Conta do WhatsApp</b> com o parceiro novo: Configurações › Contas › Contas do WhatsApp › o número › <b>Atribuir parceiro</b>. Ou o parceiro novo faz o cadastro com o mesmo número.', 'El camino es <b>compartir la Cuenta de WhatsApp</b> con el socio nuevo: Configuración › Cuentas › Cuentas de WhatsApp › el número › <b>Asignar socio</b>. O el socio nuevo hace el registro con el mismo número.'],
        ['O parceiro novo trabalha com a <b>própria Conta de mensagens</b>: modelos não passam sozinhos de uma Conta de mensagens para outra (é preciso recriar ou migrar os modelos).', 'El socio nuevo trabaja con su <b>propia Cuenta de mensajes</b>: las plantillas no pasan solas de una Cuenta de mensajes a otra (hay que recrearlas o migrarlas).'],
        ['<b>Desregistrar</b> continua igual: qualquer parceiro pode desregistrar o número.', '<b>Dar de baja</b> sigue igual: cualquier socio puede dar de baja el número.']]],
      ['h', 'Por que excluir dá erro', 'Por qué eliminar da error'],
      ['ul', [
        ['Quem tenta não é <b>administrador</b> do portfólio.', 'Quien lo intenta no es <b>administrador</b> del portfolio.'],
        ['Houve <b>mensagem paga nos últimos 30 dias</b>: só dá 30 dias depois da última.', 'Hubo un <b>mensaje pago en los últimos 30 días</b>: solo se puede 30 días después del último.'],
        ['Número <b>Conectado</b>: pede o PIN de duas etapas. PIN errado = erro 133005. (A Meta está aposentando esse PIN para parte dos números; quando a aba de duas etapas some, o pedido de PIN pode não aparecer.)', 'Número <b>Conectado</b>: pide el PIN de dos pasos. PIN incorrecto = error 133005. (Meta está retirando ese PIN para parte de los números; cuando la pestaña de dos pasos desaparece, puede que no se pida el PIN.)'],
        ['É o <b>número de teste</b>: “O telefone de teste não pode ser excluído”.', 'Es el <b>número de prueba</b>: “El teléfono de prueba no se puede eliminar”.'],
        ['Número do <b>app</b> no Gerenciador não tem lixeira: ele sai pelo app (Apagar conta) ou pela aula 12 (tirar do portfólio).', 'El número de la <b>app</b> en el Administrador no tiene papelera: sale desde la app (Eliminar cuenta) o con la clase 12 (sacarlo del portfolio).']]],
      ['h', 'Erros que aparecem', 'Errores que aparecen'],
      ['ul', [
        ['<b>133016:</b> tentativas demais (10 em 72 h) de registrar ou desregistrar. Esperar 72 horas.', '<b>133016:</b> demasiados intentos (10 en 72 h) de registrar o dar de baja. Esperar 72 horas.'],
        ['<b>133015:</b> o número foi excluído há pouco e a exclusão não terminou. Esperar 5 minutos.', '<b>133015:</b> el número se eliminó hace poco y la eliminación no terminó. Esperar 5 minutos.'],
        ['<b>133000:</b> um desregistro anterior falhou. Desregistrar de novo antes de registrar.', '<b>133000:</b> una baja anterior falló. Dar de baja de nuevo antes de registrar.'],
        ['<b>2388103:</b> o número pertence a outro portfólio.', '<b>2388103:</b> el número pertenece a otro portfolio.']]]
    ],
    praticar: {
      intro: N.T('No Gerenciador do WhatsApp, onde fica a lixeira (e onde não fica); no celular, o que acontece ao apagar a conta do app.', 'En el Administrador de WhatsApp, dónde está la papelera (y dónde no); en el celular, qué pasa al eliminar la cuenta de la app.'),
      tituloMeta: N.T('Meta Business Suite › Gerenciador do WhatsApp', 'Meta Business Suite › Administrador de WhatsApp'),
      lugares: ['cel', 'meta'], comeco: function () { CEL.zera(); CEL.por('conta'); META.por({ app: 'wam', pag: 'numeros' }) },
      passos: [
        P(meta({ app: 'wam', pag: 'numeros' }), 'wam-tabela', ['O número do app', 'El número de la app'], ['Nesta conta está o número do app. Repare: não tem lixeira, só a engrenagem. Ele não sai daqui.', 'En esta cuenta está el número de la app. Fíjate: no tiene papelera, solo el engranaje. No sale desde aquí.'], false, 'meta'),
        P(meta({ app: 'wam', pag: 'numeros' }), 'wam-conta', ['Trocar de conta', 'Cambiar de cuenta'], ['Clique no seletor de conta, no alto.', 'Haz clic en el selector de cuenta, arriba.'], true, 'meta'),
        P(meta({ app: 'wam', pag: 'numeros', contaPop: true }), 'wam-conta-api', ['A conta da API', 'La cuenta de la API'], ['Escolha a conta da API (Test Messaging Account).', 'Elige la cuenta de la API (Test Messaging Account).'], true, 'meta'),
        P(meta({ app: 'wam', pag: 'numeros', conta: 'api' }), 'wam-lixeira', ['A lixeira', 'La papelera'], ['Número da API tem lixeira. Clique nela.', 'Un número de la API tiene papelera. Haz clic en ella.'], true, 'meta'),
        P(meta({ app: 'wam', pag: 'numeros', conta: 'api', dica: true }), 'wam-dica-teste', ['Nem sempre dá', 'No siempre se puede'], ['Número de teste nunca sai. Com número real: só administrador, 30 dias depois da última mensagem paga e com o PIN, se estiver Conectado.', 'El número de prueba nunca sale. Con un número real: solo administrador, 30 días después del último mensaje pago y con el PIN, si está Conectado.'], false, 'meta'),
        P(cel('conta'), 'cel-conta-apagar', ['E o número do app?', '¿Y el número de la app?'], ['No celular: Configurações › Conta. Toque em Apagar conta (só para ver).', 'En el celular: Ajustes › Cuenta. Toca Eliminar cuenta (solo para ver).'], true),
        P(cel('apagar'), 'cel-apagar-historico', ['O que se perde', 'Qué se pierde'], ['Apagar a conta do app libera o número para a API, mas apaga o histórico de conversas. Backup antes!', 'Eliminar la cuenta de la app libera el número para la API, pero borra el historial de chats. ¡Copia antes!']),
        P(cel('apagar'), 'cel-apagar-bt', ['Pronto!', '¡Listo!'], ['No treino não apagamos nada. Se a loja quer manter o app, o caminho é a coexistência (aula 18), sem apagar.', 'En la práctica no borramos nada. Si la tienda quiere mantener la app, el camino es la coexistencia (clase 18), sin borrar.'])
      ]
    },
    quiz: [
      Q(['O parceiro novo pediu para “desregistrar” o número. O que isso faz?', 'El socio nuevo pidió “dar de baja” el número. ¿Qué hace eso?'], 1,
        [['Apaga o número e todas as conversas', 'Borra el número y todos los chats'], ['Tira da API, sem apagar o histórico', 'Saca de la API, sin borrar el historial'], ['Bane o número do WhatsApp por 30 dias', 'Suspende el número de WhatsApp por 30 días'], ['Passa o número para outro portfólio sozinho', 'Pasa el número a otro portfolio solo']],
        [['Desregistrar não apaga.', 'Dar de baja no borra.'], ['Isso! É o que a documentação diz.', '¡Eso! Es lo que dice la documentación.'], ['Não tem relação com banimento.', 'No tiene relación con suspensión.'], ['Não move o número.', 'No mueve el número.']]),
      Q(['A Marina é administradora e não consegue excluir o número real. Mandou promoção paga há uma semana. Por quê?', 'Marina es administradora y no puede eliminar el número real. Envió una promoción paga hace una semana. ¿Por qué?'], 3,
        [['Porque falta o selo azul na conta dela', 'Porque falta la insignia azul en su cuenta'], ['Porque número real nunca pode ser excluído', 'Porque un número real nunca se puede eliminar'], ['Porque o app do celular está desatualizado', 'Porque la app del celular está desactualizada'], ['Porque faltam 30 dias sem mensagem paga', 'Porque necesita 30 días sin mensaje pago']],
        [['Selo não tem relação.', 'La insignia no tiene relación.'], ['Pode, cumprindo as regras.', 'Se puede, cumpliendo las reglas.'], ['O app não interfere.', 'La app no interfiere.'], ['Isso! Só 30 dias depois da última mensagem paga.', '¡Eso! Solo 30 días después del último mensaje pago.']]),
      Q(['O desenvolvedor recebeu o erro 133016 ao desregistrar. O que fazer?', 'El desarrollador recibió el error 133016 al dar de baja. ¿Qué hacer?'], 0,
        [['Esperar 72 horas e tentar de novo', 'Esperar 72 horas e intentar de nuevo'], ['Trocar o PIN do número na hora', 'Cambiar el PIN del número al instante'], ['Excluir o portfólio inteiro da loja', 'Eliminar todo el portfolio de la tienda'], ['Apagar o app e instalar outra vez', 'Borrar la app e instalarla otra vez']],
        [['Isso! Foram tentativas demais (10 em 72 horas).', '¡Eso! Fueron demasiados intentos (10 en 72 horas).'], ['O erro não é de PIN.', 'El error no es de PIN.'], ['Exagero, e não resolve.', 'Exagerado, y no resuelve.'], ['O app não tem relação.', 'La app no tiene relación.']]),
      Q(['O número está em coexistência e o desenvolvedor não consegue desregistrar. Qual o caminho?', 'El número está en coexistencia y el desarrollador no puede dar de baja. ¿Cuál es el camino?'], 2,
        [['Excluir o número na lixeira do Gerenciador', 'Eliminar el número en la papelera del Administrador'], ['Mudar o nome de exibição e tentar de novo', 'Cambiar el nombre visible e intentar de nuevo'], ['Desconectar no app (Plataforma comercial)', 'Desconectar desde la app, en Plataforma comercial'], ['Pedir ao suporte que desregistre pela loja', 'Pedir al soporte que dé de baja por la tienda']],
        [['A lixeira tem outras regras e não é o primeiro passo.', 'La papelera tiene otras reglas y no es el primer paso.'], ['O nome não muda isso.', 'El nombre no cambia eso.'], ['Isso! A API não desregistra número em coexistência.', '¡Eso! La API no da de baja un número en coexistencia.'], ['O caminho é pelo app.', 'El camino es desde la app.']])
    ],
    fontes: [N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/phone-numbers', ['Números de telefone comerciais (excluir)', 'Números de teléfono comerciales (eliminar)']),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/business-phone-numbers/registration', ['Registrar e desregistrar números', 'Registrar y dar de baja números']),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes', ['Códigos de erro do WhatsApp', 'Códigos de error de WhatsApp']),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/migrate-existing-whatsapp-number-to-a-business-account', ['Levar um número do WhatsApp para a Plataforma', 'Llevar un número de WhatsApp a la Plataforma']),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/account-model-evolution/', ['Mudanças nas contas do WhatsApp Business (migração entre parceiros não é mais permitida)', 'Cambios en las cuentas de WhatsApp Business (la migración entre socios ya no se permite)'], '13/11/2026'),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/support/migrating-phone-numbers-among-solution-partners-via-embedded-signup', ['Migrar números entre parceiros (aviso do novo modelo)', 'Migrar números entre socios (aviso del nuevo modelo)'], '13/11/2026')],
    divergencias: [{ tema: N.T('O PIN ao excluir', 'El PIN al eliminar'),
      oficial: N.T('A página de números diz que excluir um número Conectado pede o PIN de duas etapas; a página das mudanças nas contas diz que a Meta está aposentando esse PIN para números elegíveis.', 'La página de números dice que eliminar un número Conectado pide el PIN de dos pasos; la página de cambios en las cuentas dice que Meta está retirando ese PIN para números elegibles.'),
      tela: N.T('Em 13/11/2026, o número de teste não tem mais a aba de duas etapas, e a lixeira dele aparece desativada.', 'El 13/11/2026, el número de prueba ya no tiene la pestaña de dos pasos, y su papelera aparece desactivada.'),
      aula: N.T('Ensina o PIN como a documentação ainda pede, avisando que ele pode não aparecer em parte dos números.', 'Enseña el PIN como la documentación todavía lo pide, avisando que puede no aparecer en parte de los números.') }],
    telas: N.T('Telas reais: Gerenciador do WhatsApp (28/10/2026; conferido de novo em 13/11/2026, quando a lixeira do número de teste já aparecia desativada) e app WhatsApp Business › Conta › Apagar conta (Android, 28/10/2026, só olhando). A janela de excluir um número real não foi vista (só o aviso do número de teste, em 28/10). Números fictícios.', 'Pantallas reales: Administrador de WhatsApp (28/10/2026; revisado de nuevo el 13/11/2026, cuando la papelera del número de prueba ya aparecía desactivada) y app WhatsApp Business › Cuenta › Eliminar cuenta (Android, 28/10/2026, solo mirando). La ventana de eliminar un número real no se vio (solo el aviso del número de prueba, el 28/10). Números ficticios.')
  };
})();
