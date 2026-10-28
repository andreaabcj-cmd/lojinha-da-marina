/* Aula 08 · Item do catálogo em análise ou rejeitado.
   Fonte lida em 28/10/2026: faq.whatsapp.com/833697274483076. Telas reais (25–26/10): Gerenciador de Catálogos, item, Editar item (País), ⋮ Ocultar.
   O ícone vermelho de item recusado e o "Solicitar outra análise" não foram vistos (nenhum item recusado na conta de aula). */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  N.AULAS['08'] = {
    min: 7,
    objetivo: N.T('Explicar por que um item não aparece para os clientes e como contestar quando ele foi recusado.', 'Explicar por qué un artículo no aparece a los clientes y cómo apelar cuando fue rechazado.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina cadastrou canecas novas no catálogo do app.', '<b>Dónde estamos:</b> Marina cargó tazas nuevas en el catálogo de la app.'],
      ['m', 'Coloquei a caneca nova há 10 minutos e a cliente diz que não aparece no catálogo!', '¡Subí la taza nueva hace 10 minutos y la clienta dice que no aparece en el catálogo!'],
      ['r', 'Todo item novo passa por análise, e só aparece para os clientes depois de aprovado. Em análise ou recusado, ele fica escondido.', 'Todo artículo nuevo pasa por revisión, y solo aparece a los clientes después de aprobado. En revisión o rechazado, queda oculto.'],
      ['m', 'E como eu sei se foi recusado?', '¿Y cómo sé si fue rechazado?'],
      ['r', 'Aparece um ponto de exclamação vermelho ao lado da foto. Se achar que foi engano: toque no item › Solicitar outra análise › motivo › Continuar.', 'Aparece un signo de exclamación rojo al lado de la foto. Si crees que es un error: toca el artículo › Solicitar otra revisión › motivo › Continuar.'],
      ['dica', 'Item novo ou editado precisa do <b>País de origem</b>: é obrigatório.', 'Un artículo nuevo o editado necesita el <b>País de origen</b>: es obligatorio.']
    ]),
    verDePerto: [
      ['h', 'Por que o item não aparece', 'Por qué el artículo no aparece'],
      ['ul', [
        ['<b>Em análise</b>: fotos, vídeos e o produto são analisados pela Política de Mensagens do WhatsApp Business. Até aprovar, o cliente não vê. Aprovado, entra sozinho.', '<b>En revisión</b>: fotos, videos y el producto se revisan según la Política de mensajes de WhatsApp Business. Hasta aprobarse, el cliente no lo ve. Aprobado, entra solo.'],
        ['<b>Recusado</b>: ícone com ponto de exclamação vermelho ao lado da imagem. O cliente não vê.', '<b>Rechazado</b>: ícono con signo de exclamación rojo al lado de la imagen. El cliente no lo ve.'],
        ['<b>Oculto</b>: a própria loja escondeu (item › ⋮ › Ocultar). Continua na lista dela, com aviso de oculto.', '<b>Oculto</b>: la propia tienda lo escondió (artículo › ⋮ › Ocultar). Sigue en su lista, con aviso de oculto.']]],
      ['h', 'Contestar uma recusa', 'Apelar un rechazo'],
      ['ol', [
        ['Tocar no item recusado.', 'Tocar el artículo rechazado.'],
        ['<b>Solicitar outra análise</b>.', '<b>Solicitar otra revisión</b>.'],
        ['Informar o motivo e tocar em Continuar.', 'Indicar el motivo y tocar Continuar.'],
        ['Recusado de novo, e a política já foi lida? Responder ao e-mail da decisão pedindo uma terceira análise.', '¿Rechazado otra vez, y ya se leyó la política? Responder al correo de la decisión pidiendo una tercera revisión.']]],
      ['h', 'Ao cadastrar', 'Al cargar'],
      ['ul', [
        ['Até 10 fotos ou vídeos (vídeo até 50 MB).', 'Hasta 10 fotos o videos (video hasta 50 MB).'],
        ['<b>País de origem obrigatório</b> ao adicionar ou editar (“ajuda a cumprir a Política Comercial”).', '<b>País de origen obligatorio</b> al agregar o editar (“ayuda a cumplir la Política comercial”).'],
        ['Opcionais: preço, preço promocional, descrição, link e código do item.', 'Opcionales: precio, precio promocional, descripción, enlace y código del artículo.']]],
      ['nota', 'Catálogo que vem do Commerce Manager tem outras regras: aula 09. O ícone vermelho e a tela de contestação não aparecem na prática: a conta de aula não tem item recusado.', 'El catálogo que viene de Commerce Manager tiene otras reglas: clase 09. El ícono rojo y la pantalla de apelación no aparecen en la práctica: la cuenta de práctica no tiene artículos rechazados.']
    ],
    praticar: {
      intro: N.T('No catálogo da Marina: o País de origem e o Ocultar.', 'En el catálogo de Marina: el País de origen y Ocultar.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Toque no WA Business.', 'Toca WA Business.'], true),
        P(cel('conversas'), 'cel-aba-ferramentas', ['Ferramentas', 'Herramientas'], ['Toque na aba Ferramentas.', 'Toca la pestaña Herramientas.'], true),
        P(cel('ferramentas'), 'cel-ferr-catalogo', ['Catálogo', 'Catálogo'], ['Toque em Catálogo.', 'Toca Catálogo.'], true),
        P(cel('catalogo'), 'cel-item-azul', ['Um item', 'Un artículo'], ['Os itens aprovados ficam aqui. Recusado teria um ponto de exclamação vermelho na foto. Toque na Caneca Azul.', 'Los artículos aprobados están aquí. Uno rechazado tendría un signo de exclamación rojo en la foto. Toca la Taza Azul.'], true),
        P(cel('item'), 'cel-item-editar', ['Editar', 'Editar'], ['Toque no lápis para editar.', 'Toca el lápiz para editar.'], true),
        P(cel('editaritem'), 'cel-editar-pais', ['País de origem', 'País de origen'], ['Obrigatório ao adicionar ou editar. Sem ele, o item não salva.', 'Obligatorio al agregar o editar. Sin él, el artículo no se guarda.']),
        P(cel('item'), 'cel-item-menu', ['Ocultar', 'Ocultar'], ['De volta ao item. Toque nos três pontinhos.', 'De vuelta al artículo. Toca los tres puntos.'], true),
        P(cel('itemmenu'), 'cel-item-ocultar', ['Ocultar', 'Ocultar'], ['Toque em Ocultar.', 'Toca Ocultar.'], true),
        P(cel('item', { oculto: true }), 'cel-item-oculto', ['Pronto!', '¡Listo!'], ['Item oculto: some para os clientes, mas fica na lista da loja. Às vezes o “sumiço” é só isso. Para voltar: ⋮ › Mostrar.', 'Artículo oculto: desaparece para los clientes, pero queda en la lista de la tienda. A veces la “desaparición” es solo eso. Para volver: ⋮ › Mostrar.'])
      ]
    },
    quiz: [
      Q(['O item foi cadastrado há 10 minutos e a cliente não vê. O que é mais provável?', 'El artículo se cargó hace 10 minutos y la clienta no lo ve. ¿Qué es lo más probable?'], 1,
        [['O catálogo está fora do ar para todos', 'El catálogo está caído para todos'], ['O item ainda está em análise', 'El artículo todavía está en revisión'], ['A conta da loja foi restrita', 'La cuenta de la tienda fue restringida'], ['O cliente precisa salvar o contato da loja', 'El cliente debe guardar el contacto de la tienda']],
        [['Nada indica falha geral.', 'Nada indica una falla general.'], ['Item novo só aparece depois de aprovado.', 'El artículo nuevo solo aparece después de aprobado.'], ['Restrição tem outra mensagem e outros efeitos.', 'La restricción tiene otro mensaje y otros efectos.'], ['Salvar contato não muda o catálogo.', 'Guardar el contacto no cambia el catálogo.']]),
      Q(['Como a loja vê que um item foi recusado?', '¿Cómo ve la tienda que un artículo fue rechazado?'], 3,
        [['Recebe um SMS com o motivo da recusa', 'Recibe un SMS con el motivo del rechazo'], ['O item some da lista dela também', 'El artículo desaparece también de su lista'], ['O catálogo inteiro fica oculto', 'Todo el catálogo queda oculto'], ['Exclamação vermelha ao lado da foto', 'Exclamación roja junto a la foto']],
        [['A Central não fala em SMS.', 'El Servicio de ayuda no habla de SMS.'], ['Para a loja, o item continua na lista.', 'Para la tienda, el artículo sigue en la lista.'], ['A recusa é por item.', 'El rechazo es por artículo.'], ['É o sinal oficial: ícone com exclamação vermelha ao lado da imagem.', 'Es la señal oficial: ícono con exclamación roja al lado de la imagen.']]),
      Q(['A loja acha que a recusa foi engano. Qual é o caminho?', 'La tienda cree que el rechazo fue un error. ¿Cuál es el camino?'], 0,
        [['Item › Solicitar outra análise', 'Artículo › Solicitar otra revisión'], ['Apagar e cadastrar o item várias vezes', 'Borrar y cargar el artículo varias veces'], ['Mudar o país de origem para outro', 'Cambiar el país de origen por otro'], ['Ocultar o item até ele ser aprovado', 'Ocultar el artículo hasta que lo aprueben']],
        [['É o caminho de contestação da Central.', 'Es el camino de apelación del Servicio de ayuda.'], ['Recadastrar não contesta nada.', 'Volver a cargar no apela nada.'], ['O país tem que ser o verdadeiro.', 'El país debe ser el verdadero.'], ['Ocultar só esconde; não pede análise.', 'Ocultar solo esconde; no pide revisión.']]),
      Q(['Qual campo é obrigatório ao adicionar ou editar um item?', '¿Qué campo es obligatorio al agregar o editar un artículo?'], 2,
        [['O preço promocional do item', 'El precio promocional del artículo'], ['O link para o site da loja', 'El enlace al sitio de la tienda'], ['O país de origem do item', 'El país de origen del artículo'], ['O código interno do item', 'El código interno del artículo']],
        [['Preço promocional é opcional.', 'El precio promocional es opcional.'], ['Link é opcional.', 'El enlace es opcional.'], ['A Central diz: é necessário selecionar o país de origem.', 'El Servicio de ayuda dice: hay que seleccionar el país de origen.'], ['Código é opcional.', 'El código es opcional.']]),
      Q(['Contestação recusada de novo. Ainda tem saída?', 'Apelación rechazada otra vez. ¿Todavía hay salida?'], 1,
        [['Não: a segunda recusa é definitiva e encerra o caso', 'No: el segundo rechazo es definitivo y cierra el caso'], ['Sim: responder ao e-mail da decisão', 'Sí: responder al correo de la decisión'], ['Sim: abrir o item no WhatsApp Web', 'Sí: abrir el artículo en WhatsApp Web'], ['Sim: ligar para o número da loja', 'Sí: llamar al número de la tienda']],
        [['A Central prevê uma terceira análise.', 'El Servicio de ayuda prevé una tercera revisión.'], ['Depois de ler a política, responde-se ao e-mail explicando o caso.', 'Después de leer la política, se responde al correo explicando el caso.'], ['WhatsApp Web não muda a análise.', 'WhatsApp Web no cambia la revisión.'], ['Não existe esse canal.', 'No existe ese canal.']])
    ],
    fontes: [N.F('https://faq.whatsapp.com/833697274483076', ['Como criar e gerenciar um catálogo', 'Cómo crear y administrar un catálogo'])],
    telas: N.T('Telas reais: Gerenciador de Catálogos, item, Editar item e ⋮ Ocultar (Android, 25–26/10/2026). O ícone de recusa e a contestação não foram vistos.', 'Pantallas reales: Administrador de catálogos, artículo, Editar artículo y ⋮ Ocultar (Android, 25–26/10/2026). El ícono de rechazo y la apelación no se vieron.')
  };
})();
