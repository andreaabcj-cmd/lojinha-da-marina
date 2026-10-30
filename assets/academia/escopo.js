/* Escopo: quando um caminho do caso sai do que a equipe de anúncios, medição e comércio resolve.
   Etiqueta mínima, sem nome de área. Na Trilha Foco mostra o ícone do destino (para onde vai); na Completa, só um sinal de que é de outra
   área, sem indicar transferência. O módulo de WhatsApp fica de fora por enquanto (tudo de WhatsApp é atendido aqui).
   tipos: o ícone e a dica de cada destino. aulas: 'módulo/aula' → destino do “Quando encaminhar” (enc) ou da aula inteira (todo). */
(function () {
  window.ESCOPO = {
    tipos: {
      pag: { ic: '💳', dica: { pt: 'cobranças, faturas, reembolsos e formas de pagamento', es: 'cobros, facturas, reembolsos y métodos de pago' } },
      risco: { ic: '⏱️', dica: { pt: 'limites e bloqueios de gasto feitos pela Meta, cobranças não reconhecidas', es: 'límites y bloqueos de gasto hechos por Meta, cobros no reconocidos' } },
      login: { ic: '👤', dica: { pt: 'entrar na própria conta: senha, duas etapas, conta invadida ou bloqueada', es: 'entrar en la propia cuenta: contraseña, dos pasos, cuenta robada o bloqueada' } },
      invasao: { ic: '💼', dica: { pt: 'suspeita de invasão no portfólio, na Página ou na conta de anúncios', es: 'sospecha de robo en el portfolio, la Página o la cuenta publicitaria' } },
      disputa: { ic: '👥', dica: { pt: 'ninguém com controle total, administrador que saiu ou disputa pelo ativo', es: 'nadie con control total, administrador que se fue o disputa por el activo' } },
      politica: { ic: '⚖️', dica: { pt: 'anúncio rejeitado ou conta restrita por política', es: 'anuncio rechazado o cuenta restringida por política' } }
    },
    aulas: {
      'portfolio/01': { enc: 'login' }, 'portfolio/03': { enc: 'disputa' },
      'anuncios/05': { enc: 'pag' }, 'feed/05': { enc: 'politica' },
      'relatorios/02': { enc: 'risco' }, 'segmentacao/04': { enc: 'politica' },
      'entrega/05': { enc: 'politica' }, 'regras/03': { enc: 'pag' },
      'portfolio-avancado/03': { enc: 'disputa' }, 'portfolio-avancado/06': { enc: 'invasao' },
      'dg-anuncios/01': { enc: 'politica' }, 'dg-anuncios/02': { enc: 'pag' }, 'dg-anuncios/03': { enc: 'pag' }, 'dg-anuncios/08': { enc: 'politica' },
      'dg-contas/02': { enc: 'disputa' }, 'dg-contas/05': { enc: 'politica' },
      'dg-instagram/01': { enc: 'login' }, 'dg-workaround/02': { enc: 'politica' }
    }
  };
  /* a etiqueta: foco = true mostra o destino; false (Completa) só sinaliza */
  window.ESCOPO.etiqueta = function (mid, aid, foco, lang) {
    var e = window.ESCOPO.aulas[mid + '/' + aid]; if (!e) return '';
    var t = window.ESCOPO.tipos[e.todo || e.enc], l = lang === 'es' ? 'es' : 'pt';
    if (!foco) return '<span class="esc-tag esc-sinal" title="' + (e.todo ? (l === 'es' ? 'Caso de otra área' : 'Caso de outra área') : (l === 'es' ? 'Una parte del caso es de otra área' : 'Uma parte do caso é de outra área')) + '">⚑</span>';
    return '<span class="esc-tag" title="' + (l === 'es' ? 'Fuera del alcance' : 'Fora do escopo') + ' · ' + t.dica[l] + '">↪ ' + t.ic + '</span>';
  };
})();
