/* Aula 04 · Conta invadida.
   Fontes lidas em 28/10/2026: faq.whatsapp.com/1131652977717250 (conta comprometida) e /1278661612895630 (duas etapas).
   Telas reais 28/10: Configurações, Dispositivos conectados, Conta, Verificação em duas etapas. */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  N.AULAS['04'] = {
    min: 7,
    objetivo: N.T('Guiar a recuperação de uma conta invadida pelo único caminho que funciona e deixar a conta protegida depois.', 'Guiar la recuperación de una cuenta robada por el único camino que funciona y dejar la cuenta protegida después.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> clientes avisam a Marina que “ela” está pedindo Pix em nome da loja.', '<b>Dónde estamos:</b> clientes avisan a Marina que “ella” está pidiendo pagos en nombre de la tienda.'],
      ['m', 'Alguém entrou no WhatsApp da loja! Eu troquei a senha do meu e-mail, mas continua.', '¡Alguien entró al WhatsApp de la tienda! Cambié la contraseña de mi correo, pero sigue.'],
      ['r', 'Trocar senha não tira ninguém. O único jeito é <b>confirmar o número de novo</b> no seu celular, com o código de 6 dígitos. Isso desconecta todos os aparelhos.', 'Cambiar la contraseña no saca a nadie. La única forma es <b>volver a confirmar el número</b> en tu celular, con el código de 6 dígitos. Eso desvincula todos los equipos.'],
      ['m', 'E se pedir um PIN que eu não sei?', '¿Y si pide un PIN que no sé?'],
      ['r', 'Pode ser que o invasor tenha ativado. Mesmo sem o PIN, ele sai quando você põe o código. Para entrar, espere 7 dias e tente de novo.', 'Puede que lo haya activado el intruso. Aun sin el PIN, sale cuando pones el código. Para entrar, espera 7 días e inténtalo de nuevo.'],
      ['r', 'E não denuncie a conta antes de recuperar: ela pode ser banida e você perde tudo. Avise os clientes que alguém pode se passar por você.', 'Y no denuncies la cuenta antes de recuperarla: podría ser suspendida y perderías todo. Avisa a los clientes que alguien puede hacerse pasar por ti.'],
      ['dica', 'Depois de recuperar: <b>verificação em duas etapas</b> ligada e <b>dispositivos conectados</b> conferidos.', 'Después de recuperar: <b>verificación en dos pasos</b> activada y <b>dispositivos vinculados</b> revisados.']
    ]),
    verDePerto: [
      ['h', 'Recuperar', 'Recuperar'],
      ['ol', [
        ['No celular com o chip do número: <b>Acessar conta novamente › Continuar</b>, número em formato internacional, código de 6 dígitos (SMS ou ligação).', 'En el celular con el chip del número: <b>volver a entrar a la cuenta › Continuar</b>, número en formato internacional, código de 6 dígitos (SMS o llamada).'],
        ['Ao registrar de novo, <b>todos os dispositivos conectados</b> saem automaticamente, inclusive o do invasor.', 'Al registrarse de nuevo, <b>todos los dispositivos vinculados</b> salen automáticamente, incluido el del intruso.'],
        ['Pediu PIN que ela não sabe? O invasor pode ter ativado. <b>Esperar 7 dias</b> e tentar de novo; o invasor já sai com o código.', '¿Pide un PIN que no sabe? El intruso pudo activarlo. <b>Esperar 7 días</b> e intentar otra vez; el intruso ya sale con el código.']]],
      ['h', 'O que não resolve', 'Lo que no resuelve'],
      ['ul', [
        ['Mudar senha (do e-mail, do celular): não tira ninguém da conta.', 'Cambiar contraseñas (del correo, del celular): no saca a nadie de la cuenta.'],
        ['Denunciar a própria conta antes de recuperar: ela pode ser banida e os dados se perdem.', 'Denunciar la propia cuenta antes de recuperarla: puede ser suspendida y se pierden los datos.'],
        ['Pedir ao WhatsApp para desativar: o WhatsApp não desativa contas a pedido.', 'Pedir a WhatsApp que la desactive: WhatsApp no desactiva cuentas a pedido.']]],
      ['caixa', 'As conversas antigas estão seguras', 'Los chats antiguos están seguros', 'As mensagens têm criptografia de ponta a ponta e ficam no aparelho: quem entrou em outro aparelho não lê as conversas antigas. Mas pode se passar pela loja daqui para a frente, por isso avisar os clientes.', 'Los mensajes tienen cifrado de extremo a extremo y quedan en el equipo: quien entró desde otro equipo no lee los chats antiguos. Pero puede hacerse pasar por la tienda desde ahora, por eso hay que avisar a los clientes.'],
      ['nota', 'Nunca peça nem aceite o código de 6 dígitos da cliente: ninguém deve receber esse código, nem amigos ou família.', 'Nunca pidas ni aceptes el código de 6 dígitos de la clienta: nadie debe recibir ese código, ni amigos ni familia.']
    ],
    praticar: {
      intro: N.T('Depois de recuperar: conferir aparelhos e ligar a verificação em duas etapas.', 'Después de recuperar: revisar equipos y activar la verificación en dos pasos.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Conta recuperada. Toque no WA Business.', 'Cuenta recuperada. Toca WA Business.'], true),
        P(cel('conversas'), 'cel-menu', ['Mais opções', 'Más opciones'], ['Toque nos três pontinhos.', 'Toca los tres puntos.'], true),
        P(cel('menu'), 'cel-menu-config', ['Configurações', 'Ajustes'], ['Toque em Configurações.', 'Toca Ajustes.'], true),
        P(cel('config'), 'cel-cfg-disp', ['Aparelhos', 'Equipos'], ['Primeiro, os aparelhos: toque em Dispositivos conectados.', 'Primero, los equipos: toca Dispositivos vinculados.'], true),
        P(cel('dispositivos'), 'cel-disp-conta', ['Ninguém conectado', 'Nadie vinculado'], ['Depois de confirmar o número de novo, a lista volta zerada: todos saíram. Se aparecer um aparelho que ela não reconhece, é só tocar nele e desconectar.', 'Después de volver a confirmar el número, la lista queda vacía: todos salieron. Si aparece un equipo que no reconoce, basta tocarlo y desvincularlo.']),
        P(cel('config'), 'cel-cfg-conta', ['Agora a conta', 'Ahora la cuenta'], ['Voltamos para Configurações. Toque em Conta.', 'Volvimos a Ajustes. Toca Cuenta.'], true),
        P(cel('conta'), 'cel-conta-2etapas', ['Duas etapas', 'Dos pasos'], ['Toque em Verificação em duas etapas.', 'Toca Verificación en dos pasos.'], true),
        P(cel('duasetapas'), 'cel-2etapas-txt', ['O PIN', 'El PIN'], ['Com ela ligada, o app pede um PIN sempre que alguém confirmar o número de novo. Quem tiver só o código do SMS não entra.', 'Con ella activa, la app pide un PIN cada vez que alguien vuelve a confirmar el número. Quien tenga solo el código del SMS no entra.']),
        P(cel('duasetapas'), 'cel-2etapas-ativar', ['Pronto!', '¡Listo!'], ['Em ATIVAR a cliente cria o PIN (no treino, não ativamos). Recado final: nunca compartilhar o código de 6 dígitos nem o PIN.', 'En ACTIVAR la clienta crea el PIN (en la práctica no lo activamos). Mensaje final: nunca compartir el código de 6 dígitos ni el PIN.'])
      ]
    },
    quiz: [
      Q(['Qual é o único jeito de tirar o invasor da conta?', '¿Cuál es la única forma de sacar al intruso de la cuenta?'], 1,
        [['Trocar a senha do e-mail e do celular da cliente', 'Cambiar la contraseña del correo de la clienta'], ['Confirmar o número de novo com o código', 'Volver a confirmar el número con el código'], ['Apagar as conversas do celular', 'Borrar los chats del celular'], ['Denunciar a própria conta no app', 'Denunciar la propia cuenta en la app']],
        [['Senha não remove ninguém da conta.', 'La contraseña no saca a nadie de la cuenta.'], ['Registrar de novo com o código de 6 dígitos desconecta todos os aparelhos.', 'Registrarse de nuevo con el código de 6 dígitos desvincula todos los equipos.'], ['Apagar conversas não tira o acesso.', 'Borrar chats no quita el acceso.'], ['Denunciar antes de recuperar pode banir a conta.', 'Denunciar antes de recuperar puede suspender la cuenta.']]),
      Q(['O app pede um PIN que a cliente nunca criou. O que fazer?', 'La app pide un PIN que la clienta nunca creó. ¿Qué hacer?'], 3,
        [['Pedir ao suporte que zere o PIN', 'Pedir a soporte que reinicie el PIN'], ['Reinstalar o app para pular o PIN', 'Reinstalar la app para saltar el PIN'], ['Esperar 24 horas e tentar de novo', 'Esperar 24 horas e intentar de nuevo'], ['Esperar 7 dias e tentar de novo', 'Esperar 7 días e intentar de nuevo']],
        [['A Central não fala em suporte zerando PIN.', 'El Servicio de ayuda no habla de soporte reiniciando el PIN.'], ['Reinstalar não pula o PIN.', 'Reinstalar no salta el PIN.'], ['24 horas é o prazo comum da análise de banimento, outra coisa.', '24 horas es el plazo habitual de la revisión de suspensión, otra cosa.'], ['Sem o PIN, a orientação oficial é esperar 7 dias.', 'Sin el PIN, la indicación oficial es esperar 7 días.']]),
      Q(['A cliente quer denunciar a conta invadida antes de tudo. O que você diz?', 'La clienta quiere denunciar la cuenta robada antes que nada. ¿Qué dices?'], 0,
        [['Recuperar antes: denunciar pode banir', 'Recuperar antes: denunciar puede suspender'], ['Denunciar logo acelera a recuperação', 'Denunciar ya acelera la recuperación de la cuenta'], ['Denunciar desconecta só o invasor', 'Denunciar desvincula solo al intruso'], ['Denunciar devolve as conversas perdidas', 'Denunciar devuelve los chats perdidos']],
        [['A conta denunciada pode ser banida e os dados se perdem.', 'La cuenta denunciada puede ser suspendida y se pierden los datos.'], ['Não acelera nada; pode é banir.', 'No acelera nada; puede suspenderla.'], ['Quem desconecta todos é o código de 6 dígitos.', 'Quien desvincula a todos es el código de 6 dígitos.'], ['Denúncia não recupera mensagens.', 'La denuncia no recupera mensajes.']]),
      Q(['O invasor consegue ler as conversas antigas da loja?', '¿El intruso puede leer los chats antiguos de la tienda?'], 2,
        [['Sim, todas, desde o primeiro dia', 'Sí, todos, desde el primer día de la cuenta'], ['Sim, as dos últimos 30 dias', 'Sí, los de los últimos 30 días'], ['Não: ficam no aparelho da cliente', 'No: quedan en el equipo de la clienta'], ['Só as conversas com fotos e vídeos', 'Solo los chats con fotos y videos']],
        [['As mensagens antigas ficam no aparelho, com criptografia.', 'Los mensajes antiguos quedan en el equipo, con cifrado.'], ['Não há essa regra de 30 dias para conversas.', 'No existe esa regla de 30 días para chats.'], ['Criptografia de ponta a ponta: quem entra em outro aparelho não lê o histórico.', 'Cifrado de extremo a extremo: quien entra desde otro equipo no lee el historial.'], ['Mídia segue a mesma regra das mensagens.', 'Los archivos siguen la misma regla que los mensajes.']]),
      Q(['Conta recuperada. O que fazer para não acontecer de novo?', 'Cuenta recuperada. ¿Qué hacer para que no vuelva a pasar?'], 1,
        [['Mudar o nome comercial do perfil', 'Cambiar el nombre comercial del perfil'], ['Ligar duas etapas e conferir aparelhos', 'Activar dos pasos y revisar equipos'], ['Desligar a mensagem de saudação', 'Desactivar el mensaje de bienvenida'], ['Apagar e reinstalar o app uma vez por semana', 'Borrar y reinstalar la app cada semana']],
        [['O nome não tem relação com segurança.', 'El nombre no tiene relación con la seguridad.'], ['É o que a Central recomenda depois de recuperar.', 'Es lo que recomienda el Servicio de ayuda después de recuperar.'], ['Saudação não protege a conta.', 'La bienvenida no protege la cuenta.'], ['Reinstalar não protege; o PIN sim.', 'Reinstalar no protege; el PIN sí.']])
    ],
    fontes: [N.F('https://faq.whatsapp.com/1131652977717250', ['Como recuperar uma conta comprometida', 'Cómo recuperar una cuenta robada']), N.F('https://faq.whatsapp.com/1278661612895630', ['Sobre a verificação em duas etapas', 'Sobre la verificación en dos pasos']), N.F('https://faq.whatsapp.com/647349420360876', ['Dispositivos conectados no app WhatsApp Business', 'Dispositivos vinculados en la app WhatsApp Business'])],
    telas: N.T('Telas reais: Configurações, Dispositivos conectados, Conta e Verificação em duas etapas (Android), vistas em 28/10/2026.', 'Pantallas reales: Ajustes, Dispositivos vinculados, Cuenta y Verificación en dos pasos (Android), vistas el 28/10/2026.')
  };
})();
