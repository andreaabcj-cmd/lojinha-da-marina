/* Peças comuns do Gerenciador de Anúncios: a MESMA tela de "Gerenciar" (cabeçalho, linha de visualizações e abas Campanhas | Conjuntos
   de anúncios | Anúncios) em todos os simuladores que mostram o Gerenciador (meta-anuncios, meta-entrega…). Tela real lida em 01/11/2026
   (conta de aula, só olhando): título + conta de anúncios + Atualizar dados da tabela, Descartar rascunhos, Conferir e publicar (n);
   visualizações Todos os anúncios | Anúncios ativos | Ações | Tiveram veiculação | Ver mais | Criar uma visualização;
   abas Campanhas | Conjuntos de anúncios | Anúncios.
   Cada simulador passa os atributos dos botões que ele usa (data-ir, data-acao, data-t). */
(function () {
  function at(x) { return x ? ' ' + x : '' }
  window.GA_TOPO = function (o) {
    o = o || {}; var n = o.n || 0;
    return '<div class="ga-topo"><h1>' + (o.titulo || 'Campanhas') + '</h1><span class="ga-conta">Conta de aula da Lojinha (ID 123456789)</span>' + (o.extra || '') +
      '<button class="btn sec"' + at(o.atualizar || 'disabled') + '>Atualizar dados da tabela</button>' +
      '<button class="btn sec"' + at(o.descartar) + (n ? '' : ' disabled') + '>Descartar rascunhos</button>' +
      '<button class="btn"' + at(o.publicar) + (n ? '' : ' disabled') + '>Conferir e publicar' + (n ? ' (' + n + ')' : '') + '</button></div>' +
      '<div class="ga-vistas"><b>Todos os anúncios</b><span>Anúncios ativos</span><span>Ações</span><span>Tiveram veiculação</span><span>Ver mais</span><span>Criar uma visualização</span></div>';
  };
  /* abas: o = { on: 'camp'|'conj'|'anun', camp: 'atributos', conj: '…', anun: '…', direita: 'texto' } — aba sem atributos fica só de enfeite */
  window.GA_ABAS = function (o) {
    o = o || {}; var aba = function (id, nome) { return '<span class="ga-aba' + (o.on === id ? ' on' : '') + '"' + at(o[id]) + '>' + nome + '</span>' };
    return '<div class="ga-abas">' + aba('camp', 'Campanhas') + aba('conj', 'Conjuntos de anúncios') + aba('anun', 'Anúncios') +
      '<span style="margin-left:auto;align-self:center;color:var(--muted);font-size:13px">' + (o.direita || 'Últimos 30 dias') + '</span></div>';
  };
})();
