/* Aula 05 · Trocou de celular ou de número.
   Fontes lidas em 28/10/2026: faq.whatsapp.com/1197347060992858 (trocar de celular) e /209942271778103 (transferir histórico).
   Telas reais 28/10: Conta › Mudar número; Configurações › Conversas › Backup de conversas e Transferir conversas. */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  N.AULAS['05'] = {
    min: 8,
    objetivo: N.T('Orientar a troca de celular e a troca de número sem a loja perder conversas, dados ou a ligação com a Plataforma.', 'Orientar el cambio de celular y de número sin que la tienda pierda chats, datos ni la conexión con la Plataforma.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a Marina vai trocar de celular e, de quebra, de número.', '<b>Dónde estamos:</b> Marina va a cambiar de celular y, de paso, de número.'],
      ['m', 'Comprei celular novo e chip novo. Já instalei o WhatsApp Business no novo com o número novo… as conversas sumiram!', 'Compré celular nuevo y chip nuevo. Ya instalé WhatsApp Business en el nuevo con el número nuevo… ¡los chats desaparecieron!'],
      ['r', 'Para trocar de aparelho <b>e</b> de número, o app pede uma ordem: primeiro mudar o número no WhatsApp do celular <b>antigo</b>. Ainda está com ele?', 'Para cambiar de equipo <b>y</b> de número, la app pide un orden: primero cambiar el número en WhatsApp del celular <b>anterior</b>. ¿Todavía lo tienes?'],
      ['m', 'Está aqui, ainda com o WhatsApp antigo.', 'Lo tengo aquí, todavía con el WhatsApp viejo.'],
      ['r', 'Ótimo. No antigo: Configurações › Conta › Mudar número de telefone. Os dados da conta, os grupos e as configurações vão para o número novo. Depois a gente leva o histórico para o celular novo.', 'Perfecto. En el anterior: Ajustes › Cuenta › Cambiar número de teléfono. Los datos de la cuenta, los grupos y los ajustes pasan al número nuevo. Después llevamos el historial al celular nuevo.'],
      ['dica', 'Mudar número <b>desconecta a Plataforma comercial</b> e cancela pagamentos pendentes. Avise antes!', 'Cambiar de número <b>desconecta la Plataforma comercial</b> y cancela pagos pendientes. ¡Avísalo antes!']
    ]),
    verDePerto: [
      ['h', 'Mudar de número (tela real do app)', 'Cambiar de número (pantalla real de la app)'],
      ['ul', [
        ['Antes: o número novo precisa receber SMS ou ligação.', 'Antes: el número nuevo debe recibir SMS o llamadas.'],
        ['<b>Trocando de aparelho e de número: mudar o número primeiro no aparelho antigo.</b>', '<b>Cambiando de equipo y de número: cambiar el número primero en el equipo anterior.</b>'],
        ['Vão para o número novo: dados da conta, grupos e configurações.', 'Pasan al número nuevo: datos de la cuenta, grupos y ajustes.'],
        ['Somem: eventos e ligações programadas. São cancelados: pagamentos pendentes. É desconectada: a <b>plataforma comercial</b>.', 'Desaparecen: eventos y llamadas programadas. Se cancelan: pagos pendientes. Se desconecta: la <b>plataforma comercial</b>.']]],
      ['h', 'Trocar de celular (mesmo número)', 'Cambiar de celular (mismo número)'],
      ['ul', [
        ['Android → Android, três jeitos: <b>transferência da conta</b> (a melhor, na tela de registro, lendo um QR code no antigo), <b>backup na Conta do Google</b> ou <b>transferir conversas</b> (Configurações › Conversas).', 'Android → Android, tres formas: <b>transferencia de la cuenta</b> (la mejor, en la pantalla de registro, leyendo un QR en el anterior), <b>copia en la Cuenta de Google</b> o <b>transferir chats</b> (Ajustes › Chats).'],
        ['Transferir conversas: mesmo número; Android 6 ou mais nos dois; perto um do outro, na tomada, com Wi-Fi ligado (não precisa de internet). <b>Não confirmar o número no novo antes de começar no antigo.</b>', 'Transferir chats: mismo número; Android 6 o más en los dos; cerca, enchufados, con Wi-Fi activado (no hace falta internet). <b>No confirmar el número en el nuevo antes de empezar en el anterior.</b>'],
        ['Só instalou e confirmou o número no novo? O antigo é desconectado. Às vezes o app pede uma espera de segurança, que não dá para acelerar.', '¿Solo instaló y confirmó el número en el nuevo? El anterior se desconecta. A veces la app pide una espera de seguridad, que no se puede acelerar.'],
        ['iPhone ↔ Android: dá para manter os dados e transferir o histórico.', 'iPhone ↔ Android: se pueden mantener los datos y transferir el historial.']]],
      ['nota', 'Divergência: uma versão antiga da Central dizia que o WhatsApp Business não transferia conversas; a versão atual não diz isso e o app real tem “Transferir conversas” (ver Fontes).', 'Diferencia: una versión antigua del Servicio de ayuda decía que WhatsApp Business no transfería chats; la versión actual no lo dice y la app real tiene “Transferir chats” (ver Fuentes).']
    ],
    praticar: {
      intro: N.T('No celular antigo da Marina: o aviso de Mudar número e as opções de levar o histórico.', 'En el celular anterior de Marina: el aviso de Cambiar número y las opciones para llevar el historial.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['O celular antigo', 'El celular anterior'], ['Este é o celular antigo. Toque no WA Business.', 'Este es el celular anterior. Toca WA Business.'], true),
        P(cel('conversas'), 'cel-menu', ['Mais opções', 'Más opciones'], ['Toque nos três pontinhos.', 'Toca los tres puntos.'], true),
        P(cel('menu'), 'cel-menu-config', ['Configurações', 'Ajustes'], ['Toque em Configurações.', 'Toca Ajustes.'], true),
        P(cel('config'), 'cel-cfg-conta', ['Conta', 'Cuenta'], ['Toque em Conta.', 'Toca Cuenta.'], true),
        P(cel('conta'), 'cel-conta-mudar', ['Mudar número', 'Cambiar número'], ['Toque em Mudar número de telefone.', 'Toca Cambiar número de teléfono.'], true),
        P(cel('mudarnum'), 'cel-mudar-antigo', ['A ordem', 'El orden'], ['O próprio app avisa: trocando de aparelho e de número, <b>primeiro</b> mude o número no aparelho antigo.', 'La propia app avisa: cambiando de equipo y de número, <b>primero</b> cambia el número en el equipo anterior.']),
        P(cel('mudarnum'), 'cel-mudar-efeitos', ['O que acontece', 'Qué pasa'], ['Dados, grupos e configurações vão para o número novo. Pagamentos pendentes são cancelados e a plataforma comercial é desconectada (quem usa app + API junto precisa refazer a ligação).', 'Datos, grupos y ajustes pasan al número nuevo. Los pagos pendientes se cancelan y la plataforma comercial se desconecta (quien usa app + API junto debe rehacer la conexión).']),
        P(cel('config'), 'cel-cfg-conversas', ['O histórico', 'El historial'], ['Agora, o histórico. Em Configurações, toque em Conversas.', 'Ahora, el historial. En Ajustes, toca Chats.'], true),
        P(cel('cfgconversas'), 'cel-conv-historico', ['Duas saídas', 'Dos salidas'], ['Backup de conversas (Conta do Google) ou Transferir conversas (de celular para celular). Toque em Backup de conversas.', 'Copia de seguridad (Cuenta de Google) o Transferir chats (de celular a celular). Toca Copia de seguridad.']),
        P(cel('cfgconversas'), 'cel-conv-backup', ['Backup', 'Copia'], ['Toque em Backup de conversas.', 'Toca Copia de seguridad.'], true),
        P(cel('backup'), 'cel-backup-google', ['Sem conta do Google', 'Sin cuenta de Google'], ['Aqui está o problema da Marina: <b>Último backup: nunca</b> e nenhuma Conta do Google. Sem backup, o caminho é transferir direto do celular antigo.', 'Aquí está el problema de Marina: <b>Última copia: nunca</b> y ninguna Cuenta de Google. Sin copia, el camino es transferir directo del celular anterior.']),
        P(cel('cfgconversas'), 'cel-conv-transferir', ['Transferir', 'Transferir'], ['Toque em Transferir conversas.', 'Toca Transferir chats.'], true),
        P(cel('transferir'), 'cel-transferir-iniciar', ['Pronto!', '¡Listo!'], ['Em INICIAR, o antigo lê o QR code do novo. Lembre: os dois perto, na tomada e com Wi-Fi ligado, e sem confirmar o número no novo antes de começar aqui.', 'En INICIAR, el anterior lee el QR del nuevo. Recuerda: los dos cerca, enchufados y con Wi-Fi activado, y sin confirmar el número en el nuevo antes de empezar aquí.'])
      ]
    },
    quiz: [
      Q(['A cliente vai trocar de celular e de número. Por onde começa?', 'La clienta va a cambiar de celular y de número. ¿Por dónde empieza?'], 2,
        [['Instalar o app no celular novo com o número novo', 'Instalar la app en el celular nuevo con el número nuevo'], ['Apagar a conta no antigo e criar outra no novo', 'Eliminar la cuenta en el anterior y crear otra en el nuevo'], ['Mudar o número no app do celular antigo', 'Cambiar el número en la app del celular anterior'], ['Fazer backup e desinstalar o app do antigo', 'Hacer copia y desinstalar la app del anterior']],
        [['Assim a conta começa do zero e as conversas não vêm.', 'Así la cuenta empieza de cero y los chats no llegan.'], ['Apagar a conta perde tudo.', 'Eliminar la cuenta pierde todo.'], ['É o que o próprio app manda: primeiro no aparelho antigo.', 'Es lo que manda la propia app: primero en el equipo anterior.'], ['O backup é do número antigo; falta mudar o número.', 'La copia es del número anterior; falta cambiar el número.']]),
      Q(['A loja usa app e Plataforma juntos e vai mudar de número. O que avisar?', 'La tienda usa app y Plataforma juntas y va a cambiar de número. ¿Qué avisar?'], 0,
        [['Que a plataforma comercial é desconectada', 'Que la plataforma comercial se desconecta'], ['Que nada muda na ligação com a Plataforma comercial', 'Que nada cambia en la conexión con la Plataforma comercial'], ['Que os grupos são apagados na mudança', 'Que los grupos se eliminan con el cambio'], ['Que o catálogo passa a ser da Plataforma', 'Que el catálogo pasa a ser de la Plataforma']],
        [['A tela de Mudar número diz isso com todas as letras.', 'La pantalla de Cambiar número lo dice claramente.'], ['Muda, sim: a plataforma comercial é desconectada.', 'Sí cambia: la plataforma comercial se desconecta.'], ['Os grupos vão para o número novo.', 'Los grupos pasan al número nuevo.'], ['A tela não fala de mudança no catálogo.', 'La pantalla no habla de cambios en el catálogo.']]),
      Q(['Na transferência de conversas entre dois Android, o que NÃO pode?', 'En la transferencia de chats entre dos Android, ¿qué NO se puede?'], 3,
        [['Deixar os dois celulares na tomada', 'Dejar los dos celulares enchufados'], ['Ligar o Wi-Fi sem conectar à internet', 'Activar el Wi-Fi sin conectar a internet'], ['Usar o mesmo número nos dois aparelhos', 'Usar el mismo número en los dos equipos'], ['Confirmar o número no novo antes', 'Confirmar el número en el nuevo antes']],
        [['Na tomada é o recomendado.', 'Enchufados es lo recomendado.'], ['Wi-Fi ligado basta; internet não é obrigatória.', 'Wi-Fi activado basta; internet no es obligatoria.'], ['É exigido o mesmo número.', 'Se exige el mismo número.'], ['A Central pede para não confirmar no novo antes de iniciar no antigo.', 'El Servicio de ayuda pide no confirmar en el nuevo antes de iniciar en el anterior.']]),
      Q(['O que acontece com eventos e ligações programadas ao mudar de número?', '¿Qué pasa con eventos y llamadas programadas al cambiar de número?'], 1,
        [['Vão junto para o número novo', 'Pasan junto al número nuevo'], ['São apagados na troca', 'Se eliminan en el cambio'], ['Ficam pausados por 7 dias', 'Quedan en pausa por 7 días'], ['Ficam só no aparelho antigo', 'Quedan solo en el equipo anterior']],
        [['A tela avisa o contrário: não são transferidos.', 'La pantalla avisa lo contrario: no se transfieren.'], ['“Não serão transferidos para seu novo número e serão apagados.”', '“No se transferirán a tu nuevo número y se eliminarán.”'], ['Não existe pausa de 7 dias aqui.', 'No existe pausa de 7 días aquí.'], ['São apagados, não guardados.', 'Se eliminan, no se guardan.']]),
      Q(['Mesmo número, celular novo, e a cliente só instalou e confirmou o número no novo. E o antigo?', 'Mismo número, celular nuevo, y la clienta solo instaló y confirmó el número en el nuevo. ¿Y el anterior?'], 2,
        [['Continua funcionando junto com o novo', 'Sigue funcionando junto con el nuevo'], ['Vira um dispositivo conectado do novo', 'Pasa a ser un dispositivo vinculado del nuevo'], ['É desconectado da conta', 'Se desconecta de la cuenta'], ['Fica bloqueado por inatividade', 'Queda bloqueado por inactividad']],
        [['Só um celular principal por número.', 'Solo un celular principal por número.'], ['Celular antigo não vira dispositivo conectado sozinho.', 'El celular anterior no se vuelve dispositivo vinculado solo.'], ['Confirmar o número no novo desconecta o antigo.', 'Confirmar el número en el nuevo desconecta el anterior.'], ['Bloqueio por inatividade é outra situação.', 'El bloqueo por inactividad es otra situación.']])
    ],
    fontes: [N.F('https://faq.whatsapp.com/1197347060992858', ['Sobre trocar de celular', 'Sobre cambiar de celular']), N.F('https://faq.whatsapp.com/209942271778103', ['Como transferir seu histórico de conversas', 'Cómo transferir tu historial de chats'])],
    divergencias: [{ tema: N.T('Transferir conversas no WhatsApp Business', 'Transferir chats en WhatsApp Business'),
      oficial: N.T('Uma versão antiga da página “Sobre trocar de celular” dizia que não era possível transferir conversas no app WhatsApp Business. A versão atual (28/10/2026) não traz mais essa frase.', 'Una versión antigua de “Sobre cambiar de celular” decía que no se podían transferir chats en la app WhatsApp Business. La versión actual (28/10/2026) ya no trae esa frase.'),
      tela: N.T('O app Business (Android, 28/10/2026) tem Configurações › Conversas › Transferir conversas, com INICIAR.', 'La app Business (Android, 28/10/2026) tiene Ajustes › Chats › Transferir chats, con INICIAR.'),
      aula: N.T('Ensina a transferência, que existe na tela. Se a cliente achar um artigo antigo dizendo o contrário, vale a tela.', 'Enseña la transferencia, que existe en la pantalla. Si la clienta encuentra un artículo antiguo que dice lo contrario, vale la pantalla.') }],
    telas: N.T('Telas reais: Conta › Mudar número, Conversas › Backup de conversas e Transferir conversas (Android), vistas em 28/10/2026.', 'Pantallas reales: Cuenta › Cambiar número, Chats › Copia de seguridad y Transferir chats (Android), vistas el 28/10/2026.')
  };
})();
