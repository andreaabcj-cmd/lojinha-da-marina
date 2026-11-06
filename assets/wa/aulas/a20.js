/* Aula 20 · O Flow não publica (06/11/2026).
   Fontes lidas em 06/11/2026: developers.facebook.com › Flows API (requisitos de publicação, publish, validation_errors, health_status),
   códigos de erro (139000, 139002), monitoramento de saúde (checagens), ciclo de vida; relato público no fórum de desenvolvedores (popup vazio + 139000).
   Telas reais: Gerenciador do WhatsApp › Flows na conta de teste, 06/11/2026, PT e ES. O Flow e o JSON são da Marina (fictícios). */
(function () {
  var P = N.P, Q = N.Q, meta = N.meta;
  function w(pag, extra) { var o = { app: 'wam', pag: pag, conta: 'api' }; for (var k in (extra || {})) o[k] = extra[k]; return meta(o) }
  N.AULAS['20'] = {
    min: 9,
    objetivo: N.T('Saber o que a Meta pede para publicar um Flow e como descobrir o motivo quando a tela não diz nada.', 'Saber qué pide Meta para publicar un Flow y cómo descubrir el motivo cuando la pantalla no dice nada.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina quer um formulário dentro do WhatsApp para receber encomendas de caneca. O desenvolvedor dela criou o Flow.', '<b>Dónde estamos:</b> Marina quiere un formulario dentro de WhatsApp para recibir pedidos de tazas. Su desarrollador creó el Flow.'],
      ['m', 'Cliquei em Postar e abriu uma janelinha com um título e mais nada. O editor mostra 0 erros. O que está errado?', 'Hice clic en Publicar y se abrió una ventanita con un título y nada más. El editor muestra 0 errores. ¿Qué está mal?'],
      ['r', '<b>0 erros</b> só quer dizer que o JSON do Flow está válido. Para publicar, a Meta pede mais: <b>empresa verificada</b> e <b>boa qualidade de mensagens</b>, além de outras checagens.', '<b>0 errores</b> solo quiere decir que el JSON del Flow es válido. Para publicar, Meta pide más: <b>empresa verificada</b> y <b>buena calidad de mensajes</b>, además de otras comprobaciones.'],
      ['r', 'Vamos por partes. Primeiro, a verificação da empresa, que é o mais rápido de conferir. Se estiver tudo certo, o desenvolvedor pega o <b>erro completo pela API</b>, com o código.', 'Vamos por partes. Primero, la verificación de la empresa, que es lo más rápido de revisar. Si todo está bien, el desarrollador obtiene el <b>error completo por la API</b>, con el código.'],
      ['dica', 'Janela vazia não é diagnóstico. Enquanto não houver o erro, não diga que é “falha da ferramenta” nem “limitação da conta”. Diga o que já foi conferido e o que falta.', 'Una ventana vacía no es un diagnóstico. Mientras no haya error, no digas que es “falla de la herramienta” ni “limitación de la cuenta”. Di qué ya se revisó y qué falta.']
    ]),
    verDePerto: [
      ['h', 'O que a Meta pede para publicar', 'Qué pide Meta para publicar'],
      ['ul', [
        ['<b>Empresa verificada</b> e <b>alta qualidade de mensagens</b>. A página inicial de Flows também avisa isso.', '<b>Empresa verificada</b> y <b>alta calidad de mensajes</b>. La página inicial de Flows también lo avisa.'],
        ['<b>Sem erros de validação</b> e com as <b>checagens de publicação</b> resolvidas.', '<b>Sin errores de validación</b> y con las <b>comprobaciones de publicación</b> resueltas.'],
        ['Respeitar os Termos do WhatsApp e a Política de Mensagens.', 'Respetar las Condiciones de WhatsApp y la Política de Mensajes.']]],
      ['h', 'As checagens de publicação', 'Las comprobaciones de publicación'],
      ['ul', [
        ['Número de telefone conectado à conta.', 'Número de teléfono conectado a la cuenta.'],
        ['JSON válido, em uma versão aceita.', 'JSON válido, en una versión aceptada.'],
        ['App da Meta ligado ao Flow e conta inscrita nos webhooks de Flows.', 'App de Meta vinculada al Flow y cuenta suscrita a los webhooks de Flows.'],
        ['Chave pública assinada, URI de dados definida e endpoint respondendo.', 'Clave pública firmada, URI de datos definida y punto de conexión respondiendo.']]],
      ['h', 'Como descobrir o motivo', 'Cómo descubrir el motivo'],
      ['ol', [
        ['Conferir a <b>verificação da empresa</b> e a <b>qualidade das mensagens</b>.', 'Revisar la <b>verificación de la empresa</b> y la <b>calidad de los mensajes</b>.'],
        ['Tentar publicar um <b>Flow novo, de modelo</b>. Se a janela vier vazia de novo, dificilmente o problema é aquele JSON.', 'Intentar publicar un <b>Flow nuevo, de plantilla</b>. Si la ventana vuelve a salir vacía, es difícil que el problema sea ese JSON.'],
        ['Pedir ao desenvolvedor os detalhes do Flow: <b>GET /{FLOW-ID}?fields=validation_errors,health_status</b>. O campo <b>can_send_message</b> vem como AVAILABLE, LIMITED ou BLOCKED, com os erros de cada parte.', 'Pedirle al desarrollador los detalles del Flow: <b>GET /{FLOW-ID}?fields=validation_errors,health_status</b>. El campo <b>can_send_message</b> viene como AVAILABLE, LIMITED o BLOCKED, con los errores de cada parte.'],
        ['Se ainda não estiver claro, tentar publicar pela API: <b>POST /{FLOW-ID}/publish</b>. Faça isso com a versão final ou uma cópia, porque, se passar, o Flow é publicado de verdade.', 'Si todavía no está claro, intentar publicar por la API: <b>POST /{FLOW-ID}/publish</b>. Hazlo con la versión final o una copia, porque, si pasa, el Flow se publica de verdad.']]],
      ['h', 'O que o erro quer dizer', 'Qué quiere decir el error'],
      ['ul', [
        ['<b>139000 Blocked By Integrity:</b> a conta tem um problema de integridade que impede criar ou publicar. Não há correção técnica: o caminho é o suporte da Meta.', '<b>139000 Blocked By Integrity:</b> la cuenta tiene un problema de integridad que impide crear o publicar. No hay corrección técnica: el camino es el soporte de Meta.'],
        ['<b>139002:</b> a própria mensagem diz o que falta, como erro de validação, chave pública, app ligado, endpoint ou webhooks.', '<b>139002:</b> el propio mensaje dice qué falta, como error de validación, clave pública, app vinculada, punto de conexión o webhooks.']]],
      ['h', 'Se precisar escalar', 'Si necesitas escalar'],
      ['ul', [
        ['Leve: identificação da conta e do Flow, o <b>fbtrace_id</b>, o erro completo e um vídeo da tela.', 'Lleva: identificador de la cuenta y del Flow, el <b>fbtrace_id</b>, el error completo y un video de la pantalla.'],
        ['Enquanto isso, um rascunho ainda pode ser enviado só para teste (<b>"mode": "draft"</b>).', 'Mientras tanto, un borrador todavía se puede enviar solo para prueba (<b>"mode": "draft"</b>).']]],
      ['nota', 'A janela vazia em si não está na documentação: vem de um print real e de um relato público no fórum de desenvolvedores, em que a API devolvia 139000. A Meta não confirmou a causa nesse relato, então a janela vazia não prova nenhum motivo.', 'La ventana vacía en sí no está en la documentación: viene de una captura real y de un reporte público en el foro de desarrolladores, donde la API devolvía 139000. Meta no confirmó la causa en ese reporte, así que la ventana vacía no prueba ningún motivo.']
    ],
    praticar: {
      intro: N.T('No Gerenciador do WhatsApp: o caminho até Flows, o aviso da página inicial, o rascunho e a janela vazia ao clicar em Postar.', 'En el Administrador de WhatsApp: el camino hasta Flows, el aviso de la página inicial, el borrador y la ventana vacía al hacer clic en Publicar.'),
      tituloMeta: N.T('Gerenciador do WhatsApp', 'Administrador de WhatsApp'),
      lugares: ['meta'], comeco: function () { META.por({ app: 'wam', pag: 'visao', conta: 'api' }) },
      passos: [
        P(w('visao'), 'wam-menu-flows', ['Onde ficam os Flows', 'Dónde están los Flows'], ['Em Ferramentas da conta, clique em Flows.', 'En Herramientas de la cuenta, haz clic en Flows.'], true, 'meta'),
        P(w('flows'), 'wam-flows-aviso', ['A tela já avisa', 'La pantalla ya avisa'], ['Sem nenhum Flow criado, esta página já diz o que a Meta pede para publicar: qualidade das mensagens e verificação da empresa.', 'Sin ningún Flow creado, esta página ya dice qué pide Meta para publicar: calidad de los mensajes y verificación de la empresa.'], false, 'meta'),
        P(w('flows'), 'wam-flows-comecar', ['Começar', 'Empezar'], ['Criar um rascunho é permitido mesmo assim. Clique em Começar.', 'Crear un borrador se permite de todos modos. Haz clic en Empezar.'], true, 'meta'),
        P(w('flowcriar'), 'wam-fc-campos', ['Nome, categoria e modelo', 'Nombre, categoría y plantilla'], ['O Flow precisa de nome e categoria. Sem endpoint e no modelo Padrão, ele já nasce com um JSON pronto para editar.', 'El Flow necesita nombre y categoría. Sin punto de conexión y con la plantilla Predeterminado, nace con un JSON listo para editar.'], false, 'meta'),
        P(w('flowcriar'), 'wam-fc-criar', ['Criar', 'Crear'], ['Clique em Criar.', 'Haz clic en Crear.'], true, 'meta'),
        P(w('flowedit', { flowTem: true }), 'wam-fe-erros', ['0 erros', '0 errores'], ['Aqui está o rascunho. 0 erros quer dizer que o JSON está válido. Ainda não quer dizer que ele pode ser publicado.', 'Aquí está el borrador. 0 errores quiere decir que el JSON es válido. Todavía no quiere decir que se pueda publicar.'], false, 'meta'),
        P(w('flowedit', { flowTem: true }), 'wam-fe-postar', ['Postar', 'Publicar'], ['Agora o que a Marina fez: clique em Postar.', 'Ahora lo que hizo Marina: haz clic en Publicar.'], true, 'meta'),
        P(w('flowedit', { flowTem: true, flowPop: true }), 'wam-fe-pop', ['A janela vazia', 'La ventana vacía'], ['Só o título e mais nada. Não é tela cortada: não veio mensagem nenhuma. Ela não diz o motivo, então precisamos investigar.', 'Solo el título y nada más. No es una pantalla cortada: no vino ningún mensaje. No dice el motivo, así que hay que investigar.'], false, 'meta'),
        P(meta({ pag: 'msg', sel: true, aba: 'resumo' }), 'mt-verificacao', ['Primeira conferência', 'Primera revisión'], ['Nas Configurações do portfólio, a Marina vê “Não verificado”. Ela verifica a empresa e tenta de novo. Se continuar igual, o desenvolvedor pega o erro completo pela API.', 'En la Configuración del portfolio, Marina ve “No verificado”. Verifica la empresa e intenta de nuevo. Si sigue igual, el desarrollador obtiene el error completo por la API.'], false, 'meta')
      ]
    },
    quiz: [
      Q(['O Flow tem 0 erros, mas Postar abre uma janela só com o título. O que conferir primeiro?', 'El Flow tiene 0 errores, pero Publicar abre una ventana solo con el título. ¿Qué revisar primero?'], 1,
        [['Se a categoria do Flow está certa', 'Si la categoría del Flow es correcta'], ['Se a empresa está verificada', 'Si la empresa está verificada'], ['Se o navegador está atualizado', 'Si el navegador está actualizado'], ['Se o nome do Flow tem acento', 'Si el nombre del Flow tiene acento']],
        [['A categoria não é o que a Meta pede para publicar.', 'La categoría no es lo que Meta pide para publicar.'], ['Isso! A documentação e a página de Flows pedem empresa verificada e boa qualidade.', '¡Eso! La documentación y la página de Flows piden empresa verificada y buena calidad.'], ['Pode até ajudar em outros erros, mas não é o primeiro ponto aqui.', 'Puede ayudar en otros errores, pero no es el primer punto aquí.'], ['Acento no nome não é requisito de publicação.', 'Un acento en el nombre no es requisito de publicación.']]),
      Q(['O que “0 erros” no editor garante?', '¿Qué garantiza “0 errores” en el editor?'], 3,
        [['Que o Flow já pode ser publicado', 'Que el Flow ya se puede publicar'], ['Que a empresa já está verificada', 'Que la empresa ya está verificada'], ['Que a conta não tem bloqueio', 'Que la cuenta no tiene bloqueos'], ['Que o JSON do Flow está válido', 'Que el JSON del Flow es válido']],
        [['Publicar pede mais do que o JSON certo.', 'Publicar pide más que un JSON correcto.'], ['O editor não confere a verificação nesse contador.', 'El editor no revisa la verificación en ese contador.'], ['Esse contador não olha bloqueios da conta.', 'Ese contador no mira los bloqueos de la cuenta.'], ['Isso! Ele fala do JSON, não da conta.', '¡Eso! Habla del JSON, no de la cuenta.']]),
      Q(['A API devolveu 139000, “Blocked By Integrity”. Qual é o próximo passo?', 'La API devolvió 139000, “Blocked By Integrity”. ¿Cuál es el siguiente paso?'], 0,
        [['Encaminhar para o suporte da Meta', 'Derivar al soporte de Meta'], ['Corrigir o JSON e publicar de novo', 'Corregir el JSON y publicar otra vez'], ['Clonar o Flow e publicar a cópia', 'Clonar el Flow y publicar la copia'], ['Trocar o número de telefone da conta', 'Cambiar el número de teléfono de la cuenta']],
        [['Isso! A documentação manda falar com o suporte: não há correção técnica para esse erro.', '¡Eso! La documentación dice que se contacte a soporte: no hay corrección técnica para este error.'], ['O erro não é do JSON. Mexer nele não resolve.', 'El error no es del JSON. Cambiarlo no resuelve.'], ['Clonar serve para outro erro; o bloqueio é da conta.', 'Clonar sirve para otro error; el bloqueo es de la cuenta.'], ['O número não é o que está bloqueando.', 'El número no es lo que está bloqueando.']]),
      Q(['O cliente pergunta a causa, mas você ainda não tem o erro completo. O que responder?', 'El cliente pregunta la causa, pero todavía no tienes el error completo. ¿Qué responder?'], 2,
        [['Que é uma falha da ferramenta da Meta', 'Que es una falla de la herramienta de Meta'], ['Que é uma limitação da conta da API', 'Que es una limitación de la cuenta de la API'], ['Que falta confirmar, e o que falta', 'Que falta confirmar, y qué falta'], ['Que o problema é do desenvolvedor dele', 'Que el problema es de su desarrollador']],
        [['Sem o erro, isso é só um palpite.', 'Sin el error, eso es solo una suposición.'], ['Sem fonte nem erro, não dá para afirmar isso.', 'Sin fuente ni error, no se puede afirmar.'], ['Isso! Diga o que já foi conferido e qual é o próximo passo.', '¡Eso! Di qué ya se revisó y cuál es el siguiente paso.'], ['Culpar alguém sem o erro não ajuda e pode estar errado.', 'Culpar a alguien sin el error no ayuda y puede ser incorrecto.']])
    ],
    fontes: [N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/reference/flowsapi', ['API de Flows: publicar e ler detalhes', 'API de Flows: publicar y leer detalles'], '06/11/2026'),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/reference/error-codes', ['Flows: códigos de erro', 'Flows: códigos de error'], '06/11/2026'),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/healthmonitoring', ['Flows: monitoramento de saúde e checagens', 'Flows: monitoreo de salud y comprobaciones'], '06/11/2026'),
      N.F('https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/lifecycle', ['Flows: ciclo de vida', 'Flows: ciclo de vida'], '06/11/2026'),
      N.F('https://developers.facebook.com/community/threads/1102552059383813/', ['Relato no fórum de desenvolvedores: popup vazio e erro 139000 (não oficial)', 'Reporte en el foro de desarrolladores: ventana vacía y error 139000 (no oficial)'], '06/11/2026')],
    divergencias: [{ tema: N.T('Editar depois de publicar', 'Editar después de publicar'),
      oficial: N.T('A documentação se contradiz: o ciclo de vida diz que dá para alterar um Flow publicado e ele volta a rascunho. A página da API e o erro 139001 dizem que, depois de publicado, ele não pode mais ser alterado.', 'La documentación se contradice: el ciclo de vida dice que se puede cambiar un Flow publicado y vuelve a borrador. La página de la API y el error 139001 dicen que, una vez publicado, ya no se puede cambiar.'),
      tela: N.T('Não testado: nenhum Flow foi publicado na conta de aula.', 'No probado: no se publicó ningún Flow en la cuenta de práctica.'),
      aula: N.T('Ensina a testar com a versão final ou com uma cópia, e não afirma se dá para editar depois.', 'Enseña a probar con la versión final o con una copia, y no afirma si se puede editar después.') }],
    telas: N.T('Telas reais: Gerenciador do WhatsApp › Flows (página inicial, Criar e editor) na conta de teste, 06/11/2026, em PT e ES. O Flow, o nome e o JSON são fictícios. A janela vazia segue um print real, com o título em inglês. Essa janela em PT e ES e a página inicial em ES não foram vistas (a conferir).', 'Pantallas reales: Administrador de WhatsApp › Flows (página inicial, Crear y editor) en la cuenta de prueba, 06/11/2026, en PT y ES. El Flow, el nombre y el JSON son ficticios. La ventana vacía sigue una captura real, con el título en inglés. Esa ventana en PT y ES y la página inicial en ES no se vieron (por confirmar).')
  };
})();
