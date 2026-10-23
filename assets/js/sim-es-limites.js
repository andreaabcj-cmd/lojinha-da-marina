/* Dicionário PT → ES do simulador "Limites de anúncios por Página".
   Textos copiados da ferramenta real em espanhol (?locale=es_LA, 23/10/2026). O que é só do simulador segue o padrão da Meta. */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {}, P = window.SIM_ES_PADROES = window.SIM_ES_PADROES || [];
  var A = {
    '🧪 Simulador de treinamento · Limites de anúncios por Página · nada aqui vai para a Meta ·': '🧪 Simulador de capacitación · Límites de anuncios por página · nada de aquí va a Meta ·',
    '← voltar à plataforma': '← volver a la plataforma',
    'Limites de anúncios por Página': 'Límites de anuncios por página', 'Pesquisar empresa ⌕': 'Buscar en negocio ⌕', 'Lojinha da Marina Aula ▾': 'Lojinha da Marina Aula ▾',
    'Páginas': 'Páginas', 'Selecione uma Página para ver o número de anúncios em veiculação ou em análise de parceiros e pessoas com acesso.': 'Selecciona una página para ver el número de anuncios en circulación o en revisión de socios y de personas que tienen acceso a ella.',
    'Nome da Página ⇅': 'Nombre de la página ⇅', 'Status ⇅': 'Estado ⇅', 'Anúncios em veiculação ou em análise': 'Anuncios en circulación o revisión', 'Limite de anúncios': 'Límite de anuncios', 'Identificação da Página': 'Identificador de la página',
    'Lojinha da Marina - Fictício': 'Lojinha da Marina - Fictício', 'Canecas da Marina': 'Canecas da Marina',
    'As Páginas, os números e a agência são de treino. Quando uma Página chega a 0, a cor e o texto exatos do status não foram vistos na tela real (a conferir).': 'Las páginas, los números y la agencia son de práctica. Cuando una página llega a 0, el color y el texto exactos del estado no se vieron en la pantalla real (por confirmar).',
    'Identificação da Página:': 'Identificador de la página:', '☐ Anúncios restantes:': '☐ Anuncios restantes:', 'Limite de anúncios:': 'Límite de anuncios:',
    'Gerenciar limite de anúncios': 'Administrar límite de anuncios', '✎ Editar': '✎ Editar', 'Remover': 'Eliminar',
    'Anúncios dessa Página': 'Anuncios de esta página', 'Limite de anúncios (definido pelo administrador da Página)': 'Límite (definido por administrador)',
    'Seus parceiros': 'Tus socios', 'Defina um limite de anúncios para cada portfólio empresarial de parceiro com acesso para veicular anúncios para essa Página.': 'Define un límite de anuncios para cada portfolio comercial de socio con acceso para publicar anuncios para esta página.',
    'Dono da Página': 'Propietario de la página', 'Defina um limite de anúncios para o portfólio empresarial (Lojinha da Marina Aula) ao qual essa Página pertence.': 'Define un límite de anuncios para el portfolio comercial (Lojinha da Marina Aula) propietario de esta página.',
    'Indivíduos': 'Personas individuales', 'Defina um limite de anúncios compartilhado por todos os indivíduos com acesso para veicular anúncios para essa Página.': 'Define un límite de anuncios compartido por todas las personas individuales con acceso para publicar anuncios para esta página.',
    '▤ Contas de anúncios': '▤ Cuentas publicitarias', '▤ Nenhum': '▤ Ninguna cuenta', '▤ Agência Vitrine': '▤ Agência Vitrine', 'Nenhum': 'Ninguno', 'Total': 'Total',
    '⚠ Alguns limites de anúncios definidos são menores ou iguais ao número de anúncios em veiculação ou em análise.': '⚠ Algunos de los límites de anuncios que estableciste son inferiores o iguales al número de anuncios en circulación o revisión.',
    'Cancelar': 'Cancelar', 'Salvar': 'Guardar', 'Mais informações': 'Más información', 'Selecionar': 'Seleccionar', 'Fechar': 'Cerrar',
    '🧪 Só no simulador': '🧪 Solo en el simulador', 'No mundo real, quem desativa os anúncios é cada dono, no Gerenciador de Anúncios dele. Aqui, um botão faz de conta:': 'En el mundo real, quien desactiva los anuncios es cada dueño, en su Administrador de anuncios. Aquí, un botón hace de cuenta:',
    'A agência desativou 30 anúncios antigos': 'La agencia desactivó 30 anuncios viejos',
    '✓ Tela conferida com a ferramenta real em 23/10/2026 (conta de aula; nada foi salvo)': '✓ Pantalla revisada con la herramienta real el 23/10/2026 (cuenta de práctica; no se guardó nada)',
    'O número atual de anúncios em veiculação ou em análise considerado para o limite de anúncios de uma Página. Isso se baseia no status do anúncio na coluna Veiculação.': 'Número actual de anuncios en circulación o revisión que se contabilizan para el límite de una página. Se basa en el estado del anuncio en la columna "Entrega".',
    'O número máximo de anúncios que essa Página pode ter em veiculação ou em análise simultaneamente. Você não poderá veicular mais anúncios nem publicar alterações nos anúncios já existentes de uma Página após o limite ser atingido.': 'Cantidad máxima de anuncios que esta página puede tener en circulación o en revisión al mismo tiempo. No podrás poner en circulación más anuncios para una página ni publicar cambios en los que ya hayas creado cuando alcances el límite.',
    'As contas de anúncios sujeitas a um limite de anúncios equivalente a zero não podem veicular anúncios para essa Página. Se elas tiverem anúncios existentes em veiculação ou em análise, não será possível publicar alterações neles.': 'Las cuentas publicitarias sujetas a un límite de cero anuncios no pueden publicar anuncios para esta página. Si tienen anuncios existentes en circulación o en revisión, no podrán publicar cambios en ellos.',
    'Você pode salvar limites de anúncios para parceiros, pessoas ou o dono da Página inferiores ou iguais ao número de seus anúncios em veiculação ou em análise. No entanto, eles não poderão veicular mais anúncios ou publicar alterações nos existentes até o número de anúncios em veiculação ou em análise estar abaixo do limite.': 'Puedes guardar límites de anuncios para socios, personas individuales o el propietario de la página que sean inferiores o iguales a su número actual de anuncios en circulación o en revisión. Sin embargo, no podrán poner más anuncios en circulación ni publicar cambios en los existentes hasta que el número de anuncios en circulación o revisión sea inferior al límite.'
  };
  for (var k in A) D[k] = A[k];
  P.push([/^(\d+) anúncios restantes$/, function (m) { return m[1] + ' anuncios restantes' }]);
  P.push([/^(\d+) de (\d+) alocados$/, function (m) { return m[1] + ' de ' + m[2] + ' asignados' }]);
  P.push([/^A soma dos limites passa de (\d+) \(texto do simulador; a mensagem real não foi vista\)\.$/, function (m) { return 'La suma de los límites supera ' + m[1] + ' (texto del simulador; el mensaje real no se vio).' }]);
})();
