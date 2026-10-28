/* Aula 07 · Perfil, nome e selo.
   Fontes lidas em 28/10/2026: faq.whatsapp.com/1594052115408959 (nome de usuário), /717472490411581 (selo removido),
   facebook.com/legal/mvb_terms (Meta Verified: troca de nome/número). Telas reais: Edit profile (25–26/10) e Nome comercial (28/10). */
(function () {
  var P = N.P, Q = N.Q, cel = N.cel;
  N.AULAS['07'] = {
    min: 7,
    objetivo: N.T('Resolver as dúvidas de nome comercial, nome de usuário e selo de verificado, sem confundir selo com restrição.', 'Resolver las dudas de nombre comercial, nombre de usuario e insignia de verificado, sin confundir insignia con restricción.'),
    chat: N.chat([
      ['sis', '<b>Onde estamos:</b> a loja cresceu e a Marina quer caprichar no perfil.', '<b>Dónde estamos:</b> la tienda creció y Marina quiere mejorar el perfil.'],
      ['m', 'Quero o @lojinhadamarina, mas o app diz “Este nome de usuário não está disponível”. Ninguém usa esse nome no WhatsApp!', 'Quiero @lojinhadamarina, pero la app dice “Este nombre de usuario no está disponible”. ¡Nadie usa ese nombre en WhatsApp!'],
      ['r', 'Esse nome existe no Instagram ou no Facebook? Se existir, ele fica guardado para o dono de lá.', '¿Ese nombre existe en Instagram o en Facebook? Si existe, queda guardado para el dueño de allá.'],
      ['m', 'É o Instagram da loja, é meu!', '¡Es el Instagram de la tienda, es mío!'],
      ['r', 'Então ponha o WhatsApp na mesma Central de Contas do Instagram e você consegue usar o mesmo nome. Mas tem prazo: depois ele fica livre para outras pessoas.', 'Entonces pon WhatsApp en el mismo Centro de cuentas de Instagram y podrás usar el mismo nombre. Pero hay plazo: después queda libre para otras personas.'],
      ['m', 'E o selo verde sumiu… fui restrita?', 'Y la insignia desapareció… ¿me restringieron?'],
      ['r', 'Não: selo removido não é restrição. A conta segue normal e a assinatura continua. Às vezes pedem documento e selfie para conferir.', 'No: quitar la insignia no es restricción. La cuenta sigue normal y la suscripción continúa. A veces piden documento y selfie para comprobar.']
    ]),
    verDePerto: [
      ['h', 'Nome comercial', 'Nombre comercial'],
      ['p', 'No app: Ferramentas › Perfil (a tela se chama “Edit profile”) › nome → tela <b>Nome comercial</b>, com até 75 caracteres.', 'En la app: Herramientas › Perfil (la pantalla se llama “Edit profile”) › nombre → pantalla <b>Nombre de la empresa</b>, con hasta 75 caracteres.'],
      ['h', 'Nome de usuário (@)', 'Nombre de usuario (@)'],
      ['ul', [
        ['Chega aos poucos e pode não estar disponível ainda; dá para <b>reservar</b>. Sem a opção: atualizar o app, conferir a região, reiniciar.', 'Llega de a poco y puede no estar disponible todavía; se puede <b>reservar</b>. Sin la opción: actualizar la app, revisar la región, reiniciar.'],
        ['“Este nome de usuário não está disponível”: já em uso; reservado para empresas, governos ou figuras públicas; retido porque existe no Instagram ou no Facebook; ou tem palavra/padrão restrito.', '“Este nombre de usuario no está disponible”: ya en uso; reservado para empresas, gobiernos o figuras públicas; retenido porque existe en Instagram o Facebook; o tiene una palabra o patrón restringido.'],
        ['Retido no Instagram/Facebook e é da cliente: pôr o WhatsApp na <b>mesma Central de Contas</b>, dentro do prazo.', 'Retenido en Instagram/Facebook y es de la clienta: poner WhatsApp en el <b>mismo Centro de cuentas</b>, dentro del plazo.']]],
      ['h', 'Selo de verificado', 'Insignia de verificado'],
      ['ul', [
        ['Selo removido <b>não é restrição</b>: conversas, ligações e grupos seguem normais.', 'Quitar la insignia <b>no es restricción</b>: chats, llamadas y grupos siguen normales.'],
        ['A assinatura do Meta One continua ativa e cobrada; saem só os benefícios que pedem conta verificada (canal verificado, página da empresa).', 'La suscripción de Meta One sigue activa y se cobra; solo se pierden los beneficios que piden cuenta verificada (canal verificado, página de la empresa).'],
        ['O WhatsApp pode pedir verificação extra (documento e selfie). Sem concluir, ou sem atender aos requisitos, o selo sai.', 'WhatsApp puede pedir verificación extra (documento y selfie). Sin completarla, o sin cumplir los requisitos, la insignia se quita.'],
        ['Termos do Meta Verified: muita troca de nome em pouco tempo pesa na elegibilidade; trocar o número de telefone pode cancelar a assinatura.', 'Términos de Meta Verified: muchos cambios de nombre en poco tiempo afectan la elegibilidad; cambiar el número de teléfono puede cancelar la suscripción.']]],
      ['nota', 'Banimento faz perder o Meta Verified na hora (aula 03).', 'La suspensión hace perder Meta Verified en el acto (clase 03).']
    ],
    praticar: {
      intro: N.T('Onde ficam o nome comercial e o nome de usuário.', 'Dónde están el nombre comercial y el nombre de usuario.'),
      lugares: ['cel'], comeco: cel('home'),
      passos: [
        P(cel('home'), 'cel-app-wab', ['Abrir o app', 'Abrir la app'], ['Toque no WA Business.', 'Toca WA Business.'], true),
        P(cel('conversas'), 'cel-aba-ferramentas', ['Ferramentas', 'Herramientas'], ['Toque na aba Ferramentas.', 'Toca la pestaña Herramientas.'], true),
        P(cel('ferramentas'), 'cel-ferr-perfil', ['Perfil', 'Perfil'], ['Em Gerencie sua conta, toque em Perfil.', 'En Administra tu cuenta, toca Perfil.'], true),
        P(cel('perfil'), 'cel-perfil-user', ['Nome de usuário', 'Nombre de usuario'], ['O @ aparece aqui, com “Nome de usuário reservado” enquanto o recurso não chega para todos.', 'El @ aparece aquí, con “Nombre de usuario reservado” mientras la función no llega a todos.']),
        P(cel('perfil'), 'cel-perfil-nome', ['Nome comercial', 'Nombre comercial'], ['Toque no nome da loja.', 'Toca el nombre de la tienda.'], true),
        P(cel('nome'), 'cel-nome-campo', ['Até 75 caracteres', 'Hasta 75 caracteres'], ['O contador mostra o limite. Se a loja tem Meta Verified, lembre: trocar de nome muitas vezes pesa na verificação.', 'El contador muestra el límite. Si la tienda tiene Meta Verified, recuerda: cambiar mucho de nombre afecta la verificación.']),
        P(cel('nome'), 'cel-nome-salvar', ['Pronto!', '¡Listo!'], ['SALVAR grava o nome novo (no treino, não salvamos).', 'GUARDAR graba el nombre nuevo (en la práctica no guardamos).'])
      ]
    },
    quiz: [
      Q(['O @ que a cliente quer “não está disponível”, mas é o nome do Instagram dela. O que fazer?', 'El @ que quiere la clienta “no está disponible”, pero es el nombre de su Instagram. ¿Qué hacer?'], 2,
        [['Esperar o nome ficar livre para todo mundo', 'Esperar a que el nombre quede libre para todos'], ['Apagar o Instagram para liberar o nome', 'Borrar el Instagram para liberar el nombre'], ['Pôr o WhatsApp na mesma Central de Contas', 'Poner WhatsApp en el mismo Centro de cuentas'], ['Abrir um chamado pedindo o nome de volta', 'Abrir un caso pidiendo el nombre de vuelta']],
        [['Se esperar demais, outra pessoa pode pegar.', 'Si espera demasiado, otra persona puede tomarlo.'], ['Não precisa apagar nada.', 'No hace falta borrar nada.'], ['Assim o dono do Instagram reivindica o mesmo nome, dentro do prazo.', 'Así el dueño del Instagram reclama el mismo nombre, dentro del plazo.'], ['O caminho é a Central de Contas, não um chamado.', 'El camino es el Centro de cuentas, no un caso.']]),
      Q(['O selo de verificado sumiu. O que isso muda nas conversas da loja?', 'Desapareció la insignia de verificado. ¿Qué cambia en los chats de la tienda?'], 0,
        [['Nada: a conta segue sem limites', 'Nada: la cuenta sigue sin límites'], ['A conta fica restrita por 3 dias', 'La cuenta queda restringida 3 días'], ['Ela não pode chamar contatos novos', 'No puede escribir a contactos nuevos'], ['Os grupos da loja são apagados', 'Los grupos de la tienda se eliminan']],
        [['Selo removido não é restrição; conversas, ligações e grupos seguem.', 'Quitar la insignia no es restricción; chats, llamadas y grupos siguen.'], ['3 dias é a suspensão da transmissão comercial, outra coisa.', '3 días es la suspensión de la difusión comercial, otra cosa.'], ['Isso é efeito de restrição, não de selo.', 'Eso es efecto de restricción, no de la insignia.'], ['Nada é apagado.', 'No se elimina nada.']]),
      Q(['E a cobrança do Meta One, depois que o selo sai?', '¿Y el cobro de Meta One, después de que se quita la insignia?'], 3,
        [['Para na hora, com reembolso do mês', 'Se detiene en el acto, con reembolso del mes'], ['Fica suspensa até o selo voltar', 'Queda suspendida hasta que vuelva la insignia'], ['Cai para o plano mais barato', 'Baja al plan más barato de la cuenta'], ['Continua ativa e cobrada', 'Sigue activa y se sigue cobrando']],
        [['A Central diz que a assinatura continua.', 'El Servicio de ayuda dice que la suscripción sigue.'], ['Não há suspensão da cobrança.', 'No hay suspensión del cobro.'], ['Não há troca automática de plano.', 'No hay cambio automático de plan.'], ['Só os benefícios que pedem conta verificada ficam indisponíveis.', 'Solo los beneficios que piden cuenta verificada quedan no disponibles.']]),
      Q(['Por que um @ pode aparecer como indisponível mesmo sem ninguém usando no WhatsApp?', '¿Por qué un @ puede salir no disponible aunque nadie lo use en WhatsApp?'], 1,
        [['Porque o @ precisa ter mais de 15 letras', 'Porque el @ necesita más de 15 letras'], ['Porque pode estar retido ou reservado', 'Porque puede estar retenido o reservado'], ['Porque o app só aceita @ com números', 'Porque la app solo acepta @ con números al final'], ['Porque precisa pagar para usar um @', 'Porque hay que pagar para usar un @']],
        [['A Central não fala em tamanho mínimo.', 'El Servicio de ayuda no habla de tamaño mínimo.'], ['Pode estar retido (Instagram/Facebook) ou reservado (empresas, governos, figuras públicas).', 'Puede estar retenido (Instagram/Facebook) o reservado (empresas, gobiernos, figuras públicas).'], ['Números são só uma sugestão de variação.', 'Los números son solo una sugerencia de variación.'], ['Não há cobrança pelo nome de usuário.', 'No hay cobro por el nombre de usuario.']]),
      Q(['A loja tem Meta Verified e quer trocar de número de telefone. O que avisar?', 'La tienda tiene Meta Verified y quiere cambiar de número. ¿Qué avisar?'], 2,
        [['Que o selo passa sozinho para o número novo', 'Que la insignia pasa sola al número nuevo'], ['Que precisa trocar o nome comercial junto', 'Que hay que cambiar el nombre comercial junto'], ['Que a assinatura pode ser cancelada', 'Que la suscripción puede cancelarse'], ['Que a troca só pode ser feita no iPhone', 'Que el cambio solo se hace en iPhone']],
        [['Os termos não garantem isso; falam em cancelamento.', 'Los términos no lo garantizan; hablan de cancelación.'], ['Trocar nome junto até pesa contra.', 'Cambiar el nombre junto hasta juega en contra.'], ['Os termos citam a troca do número entre os motivos para revogar a assinatura.', 'Los términos citan el cambio de número entre los motivos para revocar la suscripción.'], ['Não há essa limitação.', 'No existe esa limitación.']])
    ],
    fontes: [N.F('https://faq.whatsapp.com/1594052115408959', ['Como solucionar problemas de nome de usuário comercial', 'Cómo solucionar problemas de nombre de usuario comercial']), N.F('https://faq.whatsapp.com/717472490411581', ['Sobre contas restritas (selo removido)', 'Sobre cuentas restringidas (insignia quitada)']), N.F('https://www.facebook.com/legal/mvb_terms', ['Termos do Meta Verified para empresas', 'Términos de Meta Verified para empresas'], '27/10/2026')],
    telas: N.T('Telas reais: Edit profile (25–26/10/2026) e Nome comercial (28/10/2026), Android.', 'Pantallas reales: Edit profile (25–26/10/2026) y Nombre de la empresa (28/10/2026), Android.')
  };
})();
