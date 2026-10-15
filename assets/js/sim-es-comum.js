/* Dicionário PT → ES: o que é igual em todos os simuladores (faixa amarela, rodapés). Ver sim-i18n.js. */
(function () {
  var D = window.SIM_ES = window.SIM_ES || {};
  var A = {
    '← voltar à plataforma': '← volver a la plataforma',
    '← voltar ao simulador': '← volver al simulador',
    'Cancelar': 'Cancelar', 'Concluir': 'Terminar', 'Continuar': 'Continuar', 'Voltar': 'Volver', 'Avançar': 'Siguiente', 'Salvar': 'Guardar', 'Fechar': 'Cerrar', 'Editar': 'Editar', 'Criar': 'Crear'
  };
  for (var k in A) D[k] = A[k];
})();
