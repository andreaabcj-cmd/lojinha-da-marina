/* Pergunte ao Pixel: busca no conteúdo da própria plataforma (aulas, casos do Diagnóstico, tutoriais e módulos).
   Sem IA e sem baixar nada: roda no navegador, lendo AULAS/MODULOS/COMO e as frases de aluno (busca-frases.js).
   Nunca inventa resposta: só aponta para conteúdo que já existe e foi conferido.
   Como entende o aluno:
   - acentos, maiúsculas e pontuação não importam ("píxel" = "pixel", "event_id" = "eventid");
   - famílias de palavras (duplicou / duplicado / duplicação → "duplic"), em PT e ES;
   - sinônimos e jeitos de dizer (SINONIMOS abaixo: "duas vezes" = "em dobro" = "duplicado" = "dos veces"…);
   - erros de digitação (1 letra em palavras curtas, 2 nas longas) e palavra pela metade enquanto digita;
   - palavras grudadas ou separadas ("event id" = "eventid", "pageview" = "page view");
   - frases: palavras vizinhas na pergunta que aparecem juntas no conteúdo valem mais.
   O motor (BUSCA.monta / BUSCA.busca) não usa a página: dá para testá-lo fora do navegador. */
(function (G) {
  var BUSCA = G.BUSCA = {};

  /* ---------- 1. texto → palavras ---------- */
  function norm(s) {
    return String(s == null ? '' : s).replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/(\w)[_-](?=\w)/g, '$1').replace(/r\$/g, ' brl ');
  }
  function palavras(s) { return norm(s).split(/[^a-z0-9#]+/).filter(Boolean) }

  var STOP = {};
  ('a o as os um uma uns umas de do da dos das e em no na nos nas num numa por para pra pro pros pras com sem que se ao aos e eh foi ser sao era ' +
   'ta tah esta estao estou estava tem tenho tinha ter meu minha meus minhas seu sua seus suas teu tua isso esse essa esses essas este estes isto aquilo aquele aquela ' +
   'ele ela eles elas eu voce vc voces vcs me mim te lhe lhes ja mais muito muita muitos muitas ou mas porque pq qual quais quando onde como ' +
   'cada nao n sim tb tbm tambem so ainda agora entao ai aqui la algum alguma alguns algumas tudo todo toda todos todas nada coisa coisas ' +
   'faco fazer faz fiz consigo conseguir consegue preciso precisa quero queria posso pode podia devo deve dar da dou ' +
   'oi ola bom boa dia tarde noite obrigado obrigada ajuda ajudar duvida pergunta favor pf pls alguem gente ' +
   'el la los las del al y con sin es son fue estoy mi mis tu tus su sus yo usted ustedes le les lo ya muy pero por cuando donde ' +
   'hago hacer puedo puede quiero necesito tengo tiene hay algo cosa hola gracias ayuda alguie quiere quieren queria dejar dejo dice dijo digo respondo explico ' +
   'quer querem deixar deixo diz disse falou falo digo respondo explico cliente clientes clienta clientas ' +
   'the is are to of in on for and or my how what why do does can i it').split(' ').forEach(function (w) { STOP[w] = 1 });

  /* família de palavras: corta terminações comuns do português e do espanhol (o mesmo corte vale para o conteúdo e para a pergunta) */
  var SUF = ['amentos', 'amento', 'imentos', 'imento', 'mente', 'acoes', 'acao', 'aciones', 'acion', 'soes', 'sao', 'siones', 'sion',
    'coes', 'cao', 'ciones', 'cion', 'idades', 'idade', 'idad', 'aram', 'eram', 'iram', 'avam', 'aban', 'ando', 'endo', 'indo',
    'amos', 'emos', 'imos', 'ados', 'adas', 'idos', 'idas', 'ado', 'ada', 'ido', 'ida', 'ava', 'aba', 'ar', 'er', 'ir', 'ou', 'eu', 'iu', 'ei',
    'am', 'em', 'an', 'en'];
  var cacheR = {};
  function raiz(w) {
    if (cacheR[w]) return cacheR[w];
    var r = w;
    if (w.length >= 4 && /^[a-z]+$/.test(w)) {
      if (/[rlzns]es$/.test(r) && r.length >= 6) r = r.slice(0, -2); else if (/[^s]s$/.test(r)) r = r.slice(0, -1);
      for (var i = 0; i < SUF.length; i++) { var s = SUF[i]; if (r.length - s.length >= 3 && r.slice(-s.length) === s) { r = r.slice(0, -s.length); break } }
      if (r.length >= 4 && /[aeo]$/.test(r)) r = r.slice(0, -1);
    }
    return (cacheR[w] = r);
  }

  /* ---------- 2. sinônimos: cada grupo vira um "conceito" (#nome). Valem as frases inteiras e as palavras soltas. ---------- */
  var SINONIMOS = {
    dup: 'duplicado; duplicada; duplicados; duplicadas; duplicou; duplicar; duplica; duplicando; duplicidade; duplicacao; em dobro; dobro; dobrado; dobrada; dobrou; dobrando; duas vezes; 2 vezes; 2x; dois eventos; dois purchase; duas compras; repetido; repetida; repetidos; repetindo; repete; repetiu; desduplicacao; desduplicar; desduplicado; deduplicacao; deduplicar; deduplicado; deduplicada; dedup; dedupe; doble; el doble; dos veces; duplicadas; repetidas; contado duas; conta duas',
    some: 'nao aparece; nao aparecem; nao apareceu; nao esta aparecendo; nao mostra; nao mostrou; nao encontro; nao acho; nao vejo; nao chega; nao chegou; nao chegam; sumiu; sumiram; sumindo; some; somem; desapareceu; desapareceram; sumido; cade; no aparece; no aparecen; no aparecio; desaparecio; desaparecieron; no encuentro; no veo; no llega; no llegan; no se ve; no se muestra',
    compra: 'compra; compras; comprou; comprar; purchase; purchases; venda; vendas; vendi; vendeu; vender; pedido; pedidos; checkout completed; checkout_completed; venta; ventas; vendi; compre',
    pixel: 'pixel; pixels; pixeles; fbq; fbevents; meta pixel; facebook pixel; pixel da meta; pixel do facebook; pixel de meta; conjunto de dados; dataset; datasets; tag da meta',
    capi: 'api de conversoes; api de conversao; api conversoes; conversions api; capi; api de conversiones; api conversiones; lado do servidor; pelo servidor; server side; server-side; servidor',
    portfolio: 'portfolio; portfolios; portfolio empresarial; portfolio comercial; business manager; bm; gerenciador de negocios; meta business; conta business; business suite; configuracoes do portfolio; configuracion del portfolio',
    ga: 'gerenciador de anuncios; ads manager; administrador de anuncios; gerenciador anuncios; gerenciador de anuncio',
    ge: 'gerenciador de eventos; events manager; administrador de eventos; gerenciador eventos',
    gc: 'gerenciador de comercio; commerce manager; administrador de ventas; gerenciador comercio',
    catalogo: 'catalogo; catalogos; catalog; catalogue; catalogo de produtos; lista de produtos; catalogo de productos',
    planilha: 'planilha; planilhas; csv; excel; xlsx; tsv; arquivo de dados; feed de dados; feed de produtos; planilla; planillas; hoja de calculo; archivo de datos; spreadsheet; google sheets; planilhas google',
    publicar: 'nao publica; nao publicou; nao consigo publicar; nao deixa publicar; botao publicar; publicar cinza; publicar apagado; publicar desativado; publicar nao acende; no publica; no se publica; no puedo publicar; boton publicar',
    roda: 'nao roda; nao rodando; nao esta rodando; nao veicula; nao veiculando; nao entrega; nao gasta; nao gastou; sem impressoes; zero impressoes; nenhuma impressao; parado; parada; parou; pararam; no entrega; no corre; no se entrega; sin impresiones; no gasta; detenido; se detuvo',
    rejeitado: 'reprovado; reprovada; reprovados; rejeitado; rejeitada; rejeitados; recusado; recusada; recusados; negado; negada; nao aprovado; rechazado; rechazada; rechazados; no aprobado; denegado',
    instagram: 'instagram; insta; ig; perfil do instagram; conta do instagram; cuenta de instagram',
    pagina: 'pagina do facebook; pagina; paginas; fanpage; fan page; pagina fb; facebook page; pagina de facebook',
    shopify: 'shopify; shopfy; shopifi',
    woo: 'woocommerce; woo commerce; woo; wordpress; wp',
    conectar: 'conectar; conectado; conectada; conectei; conecta; conexao; ligar; liguei; ligado; ligada; integrar; integrei; integrado; integrada; integracao; vincular; vinculei; vinculado; linkar; associar; juntar; conectar la; vincular la; conexion; integracion',
    acesso: 'acesso; acessos; permissao; permissoes; convidar; convite; convidei; dar acesso; adicionar pessoa; adicionar pessoas; funcao; papel; admin; administrador; acceso; permiso; permisos; invitar; invitacion',
    verificacao: 'verificacao da empresa; verificar a empresa; verificar empresa; empresa verificada; verificacao do negocio; documentos; documento; cnpj; verificacion del negocio; verificar el negocio',
    verified: 'meta verified; selo; selo azul; selo de verificado; perfil verificado; verificado; assinatura; insignia; suscripcion',
    evento: 'evento; eventos; event; events; disparo; dispara; disparou; disparando; disparar',
    eventid: 'event_id; eventid; event id; id do evento; id de evento; id del evento',
    valor: 'valor; valores; preco; precos; price; value; moeda; currency; brl; reais; precio; moneda',
    microdados: 'microdados; microdata; micro dados; schema; schema.org; json-ld; jsonld; open graph; opengraph; og; meta tags; metatags; tags de produto; etiquetas; microdatos; marcacao',
    publico: 'publico; publicos; audiencia; audience; segmentacao; segmentar; lookalike; semelhante; semelhantes; personalizado; personalizados; remarketing; retargeting; publico personalizado; publico semelhante; publicos personalizados; segmentacion; similar; similares',
    regra: 'regra; regras; regra automatizada; regras automatizadas; automacao; automatico; automaticamente; sozinho; sozinhos; sozinha; rule; rules; regla; reglas',
    relatorio: 'relatorio; relatorios; report; reports; numeros; metricas; resultados; informe; informes; dados do anuncio; desempenho',
    aprendizado: 'fase de aprendizado; aprendizado; aprendizado limitado; learning; learning limited; aprendizaje; fase de aprendizaje; aprendizaje limitado',
    commerce: 'commerce; loja no facebook; loja no instagram; loja do facebook; loja do instagram; facebook shop; instagram shopping; shops; tienda de facebook; tienda de instagram; tienda en facebook',
    shopads: 'anuncios das lojas; anuncio das lojas; shop ads; shops ads; anuncios de tiendas; anuncio de tiendas',
    mbe: 'mbe; meta business extension; business extension; fbe; facebook business extension; integracao de parceiro; integracoes de parceiros; parceiro; parceiros; socio; socios; integraciones de socios',
    consentimento: 'consentimento; cookies; cookie; lgpd; gdpr; privacidade; banner de cookies; aviso de cookies; consentimiento; privacidad',
    correspondencia: 'correspondencia avancada; advanced matching; correspondencia avanzada; dados do cliente; email do cliente; hash',
    emq: 'qualidade da correspondencia; qualidade de correspondencia; qualidade do sinal; emq; nota de correspondencia; event match quality; calidad de la coincidencia; calidad de coincidencia',
    atribuicao: 'atribuicao; attribution; janela de atribuicao; atribucion; ventana de atribucion',
    analytics: 'google analytics; analytics; ga4',
    tema: 'tema; theme; theme.liquid; themeliquid; liquid; codigo do tema; editar codigo; head; cabecalho; header; cabecera',
    pxcustom: 'pixel personalizado; custom pixel; pixel manual; eventos de clientes; customer events; pixel personalizado shopify; pixeles personalizados; eventos de clientes',
    carrinho: 'add to cart; addtocart; adicionar ao carrinho; carrinho; carrinhos; agregar al carrito; carrito',
    viewcontent: 'view content; viewcontent; ver produto; visualizacao de conteudo; ver contenido',
    pageview: 'page view; pageview; visualizacao de pagina; visita; visitas; visitantes; ver pagina',
    idproduto: 'content_ids; contentids; content id; content ids; id do produto; ids dos produtos; id de produto; sku; retailer id; retailerid; id del producto',
    excluir: 'excluir; exclui; apagar; apaguei; deletar; deletei; remover; removi; eliminar; borrar; borre; desconectar; desvincular',
    cancelar: 'cancelar; cancelei; cancelamento; desistir; parar de pagar; cancelacion',
    whatsapp: 'whatsapp; whats; wpp; zap; zapzap; whatsapp business',
    estoque: 'estoque; em estoque; sem estoque; disponibilidade; availability; in stock; out of stock; esgotado; stock; disponibilidad; agotado',
    link: 'link; links; url; urls; endereco; enlace; https; http; dominio; domain',
    imagem: 'imagem; imagens; foto; fotos; image; image_link; imagen; imagenes; criativo; criativos; creativo; video; videos',
    teste: 'teste; testar; testando; compra de teste; eventos de teste; test events; prueba; probar; eventos de prueba',
    diagnostico: 'diagnostico; diagnosticos; aviso; avisos; alerta; alertas; warning; problema no pixel; problemas no pixel',
    erro: 'erro; erros; error; errores; problema; problemas; falha; falhas; bug; bugado; quebrou; quebrado; travou; travado; nao funciona; nao funcionou; parou de funcionar; no funciona; fallo; falla; fallas',
    criar: 'criar; criei; criando; crio; cria; montar; monto; novo; nova; crear; creo; nuevo; nueva; configurar; configuro; configuracao; configuracion; comecar; empezar',
    celular: 'celular; app; aplicativo; telefone; smartphone; movil; telefono',
    turbinar: 'turbinar; turbinei; turbinado; impulsionar; impulsionei; boost; promover; promocionar; promocione; impulsar; boostear',
    campanha: 'campanha; campanhas; conjunto de anuncios; nivel; niveis; campana; campanas; conjunto de anuncios',
    orcamento: 'orcamento; verba; gasto; gastar; gastou; investimento; budget; dinheiro; presupuesto; gasto; invertir',
    posicionamento: 'posicionamento; posicionamentos; stories; story; reels; placements; ubicacion; ubicaciones',
    caixa: 'caixa de entrada; mensagens; mensagem; directs; direct; dm; comentarios; inbox; bandeja de entrada; mensajes',
    insights: 'insights; estatisticas; seguidores; alcance; engajamento; estadisticas; interacciones',
    chegar: 'chega; chegou; chegando; chegam; chegar; recebe; recebendo; recebeu; recebem; receber; recebido; recebidos; entrando; entra; registrando; registra; contabiliza; llega; llegan; llegando; recibe; recibiendo; recibir',
    editar: 'editar; editei; edito; edita; edicao; edicoes; mexer; mexi; mexo; mexendo; mexeu; alterar; alterei; alteracao; mudar; mudei; mudanca; trocar; troquei; troca; cambiar; cambie; modificar; modifique',
    pausar: 'pausar; pausou; pausei; pausado; pausada; pausados; desativar; desativou; desativei; desativado; desativada; desligar; desligou; desligado; desligada; apagou; pausa; desactivar; desactivo; desactivado; apagado',
    obrigado: 'pagina de obrigado; obrigado; thank you page; thank you; pagina de agradecimento; pedido concluido; pedido confirmado; pagina de confirmacao; order confirmation; pagina de gracias; pedido completado',
    plataforma: 'plataforma; plataformas; plataforma de terceiros; nuvemshop; tray; loja integrada; vtex; wix; magento; bigcommerce; prestashop; yampi; squarespace; tiendanube; mercado shops',
    loja_site: 'site; loja virtual; loja online; ecommerce; e-commerce; sitio; sitio web; tienda online; tienda en linea'
  };
  var FRASE = {}, PALAVRA = {};   // FRASE['nao aparece'] = ['some'], PALAVRA['duplicado'] = ['dup']
  Object.keys(SINONIMOS).forEach(function (k) {
    SINONIMOS[k].split(';').forEach(function (v) {
      var p = palavras(v); if (!p.length) return; var d = p.length > 1 ? FRASE : PALAVRA, ch = p.join(' ');
      (d[ch] = d[ch] || []).indexOf(k) < 0 && d[ch].push(k);
    });
  });
  var MAXF = 4;

  /* texto → termos com posição: cada palavra vira a raiz (sem as "palavras vazias") + os conceitos das frases e palavras que casam */
  function termos(texto, comCru) {
    var w = palavras(texto), out = [], cru = [];
    for (var i = 0; i < w.length; i++) {
      for (var n = Math.min(MAXF, w.length - i); n >= 2; n--) {
        var fch = w.slice(i, i + n).join(' '), c = FRASE[fch]; if (c) { out.push(['§' + fch, i]); c.forEach(function (k) { out.push(['#' + k, i]) }) }   // a frase exata também vira termo (rara = precisa)
      }
      var c1 = PALAVRA[w[i]]; if (c1) c1.forEach(function (k) { out.push(['#' + k, i]) });
      if (!STOP[w[i]]) { out.push([raiz(w[i]), i]); if (comCru) cru.push([w[i], i]) }
    }
    return comCru ? { t: out, cru: cru, w: w } : out;
  }

  /* ---------- 3. os documentos (o que a busca pode mostrar) ---------- */
  // peso de cada parte: o título e as frases de aluno valem mais que uma nota de rodapé
  var PESO = { tit: 7, frases: 6, tut: 5, cena: 4, obj: 3.5, mod: 2, pontos: 2.5, cola: 2.2, pratica: 1.5, dialogo: 1.2, opcoes: 0.8, notas: 0.6 };
  // parte da aula que melhor explica cada campo (para o link levar direto a ela)
  var PARTE = { cena: 'atender', pontos: 'entender', dialogo: 'entender', cola: 'atender', opcoes: 'atender', pratica: 'praticar', notas: 'entender' };
  function ambos(o) { return o == null ? '' : typeof o === 'string' ? o : [o.pt, o.es].join(' \n ') }
  function lista(arr, f) { return (arr || []).map(f || ambos).join(' \n ') }
  function falas(d) { return lista(d, function (x) { return ambos(x && x[1]) }) }

  var IDX = null;
  BUSCA.monta = function (fonte) {
    fonte = fonte || G;
    var MOD = fonte.MODULOS || [], AUL = fonte.AULAS || {}, COMO = fonte.COMO || [], FR = fonte.BUSCA_FRASES || {}, docs = [];
    var porMod = {}; MOD.forEach(function (m) { porMod[m.id] = m });
    var tutDe = {};   // 'mod/aula' → tutoriais ligados a ela
    COMO.forEach(function (g) { g.itens.forEach(function (it) { (tutDe[it[2] + '/' + it[3]] = tutDe[it[2] + '/' + it[3]] || []).push({ tour: it[0], url: it[1], titulo: it[4] }) }) });
    function fr(k) { var f = FR[k]; return f ? [].concat(f.pt || [], f.es || []).join(' \n ') : '' }
    MOD.forEach(function (m) {
      var aulas = (AUL[m.id] || []).filter(function (a) { return a.status === 'pronta' });
      aulas.forEach(function (a) {
        var k = m.id + '/' + a.id, tuts = tutDe[k] || [], dg = m.area === 'diagnostico', at = a.atender || {}, co = a.cola || {}, en = a.entender || {};
        var partes = (dg ? ['reclamacao', 'praticar', 'entender', 'ferramenta', 'atender'] : ['entender', 'ferramenta', 'praticar', 'atender']).filter(function (p) { return a[p] });
        docs.push({
          id: k, tipo: dg ? 'caso' : 'aula', mod: m, aula: a, tuts: tuts, partes: partes, comp: !!a.soCompleta,
          url: 'aula-plataforma.html?m=' + m.id + '&a=' + a.id,
          campos: {
            tit: ambos(a.titulo), frases: fr(k), tut: lista(tuts, function (t) { return ambos(t.titulo) }),
            cena: [ambos(at.cena), falas(a.reclamacao)].join(' \n '), obj: [ambos(a.objetivo), ambos(a.gancho)].join(' \n '),
            mod: ambos(m.titulo), pontos: lista(en.pontos), cola: [lista(co.perguntas), lista(co.conferir), ambos(co.frase), lista(co.passos), ambos(co.encaminhar)].join(' \n '),
            pratica: ambos(a.praticar && a.praticar.texto), dialogo: falas(en.dialogo),
            opcoes: lista(at.opcoes, function (o) { return ambos(o.txt) + ' \n ' + ambos(o.fb) }), notas: ambos(en.notas)
          }
        });
        tuts.forEach(function (t) { t.aula = k });
      });
      if (!aulas.length && !(COMO.filter(function (g) { return g.m === m.id }).length)) return;
      docs.push({ id: 'm:' + m.id, tipo: 'modulo', mod: m, url: 'modulo.html?m=' + m.id, campos: { tit: ambos(m.titulo), frases: fr('m:' + m.id), obj: ambos(m.resumo) } });
    });
    // tutorial sem aula pronta: vira um resultado próprio
    COMO.forEach(function (g) {
      g.itens.forEach(function (it) {
        var k = it[2] + '/' + it[3]; if (docs.some(function (d) { return d.id === k })) return;
        docs.push({ id: 't:' + it[0], tipo: 'tutorial', mod: porMod[g.m] || porMod[it[2]], tuts: [{ tour: it[0], url: it[1], titulo: it[4] }], url: null, campos: { tit: ambos(it[4]), frases: fr('t:' + it[0]) } });
      });
    });

    // índice invertido: termo → doc → {tf ponderado, posições por campo}
    var inv = {}, cru = {}, lenSoma = {}, N = docs.length, forma = {};   // forma: como a palavra aparece escrita (com acento), para mostrar a correção
    docs.forEach(function (d, di) {
      d.len = {}; d.pos = {};
      Object.keys(d.campos).forEach(function (f) {
        (String(d.campos[f]).replace(/<[^>]*>/g, ' ').toLowerCase().match(/[a-zà-ÿ0-9]+/g) || []).forEach(function (o) { var k = norm(o); if (k !== o && !forma[k]) forma[k] = o });
        var r = termos(d.campos[f], true); d.len[f] = r.w.length || 1; lenSoma[f] = (lenSoma[f] || 0) + d.len[f];
        r.cru.forEach(function (x) { cru[x[0]] = (cru[x[0]] || 0) + 1 });
        r.t.forEach(function (x) {
          var t = x[0], e = inv[t] || (inv[t] = {}), q = e[di] || (e[di] = {});
          (q[f] = q[f] || []).push(x[1]);
        });
      });
    });
    var media = {}; Object.keys(lenSoma).forEach(function (f) { media[f] = lenSoma[f] / N });
    var raizDe = {}; Object.keys(cru).forEach(function (w) { (raizDe[raiz(w)] = raizDe[raiz(w)] || 0); raizDe[raiz(w)] += cru[w] });
    IDX = { docs: docs, inv: inv, cru: cru, forma: forma, cruL: Object.keys(cru), media: media, N: N, raizes: raizDe };
    return IDX;
  };

  /* ---------- 4. erros de digitação ---------- */
  function dist(a, b, max) {   // Damerau-Levenshtein com corte
    if (Math.abs(a.length - b.length) > max) return max + 1;
    var p2 = null, p = [], i, j; for (j = 0; j <= b.length; j++) p[j] = j;
    for (i = 1; i <= a.length; i++) {
      var c = [i], menor = i;
      for (j = 1; j <= b.length; j++) {
        var v = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (p2 && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, p2[j - 2] + 1);
        c[j] = v; if (v < menor) menor = v;
      }
      if (menor > max) return max + 1; p2 = p; p = c;
    }
    return p[b.length];
  }
  function parecidas(w) {   // palavras do conteúdo parecidas com uma palavra que não existe nele
    var max = w.length >= 8 ? 2 : w.length >= 4 ? 1 : 0; if (!max) return [];
    var r = [];
    IDX.cruL.forEach(function (c) { if (c[0] !== w[0] && max < 2) return; var d = dist(w, c, max); if (d <= max) r.push([c, d, IDX.cru[c]]) });
    r.sort(function (a, b) { return a[1] - b[1] || b[2] - a[2] });
    return r.filter(function (x) { return x[1] === r[0][1] && x[2] >= r[0][2] * 0.25 }).slice(0, 3);   // só as mais prováveis: a menor distância e as palavras comuns
  }

  /* ---------- 5. a pergunta → conceitos (cada um com alternativas e peso) ---------- */
  function entende(q) {
    var w = palavras(q), conc = [], usado = {}, notas = [];
    // frases de sinônimo na pergunta ("duas vezes", "não aparece") viram um conceito só
    for (var i = 0; i < w.length; i++) {
      for (var n = Math.min(MAXF, w.length - i); n >= 2; n--) {
        var ch = w.slice(i, i + n).join(' '), c = FRASE[ch];
        if (c) { conc.push({ pos: i, txt: ch, alt: [['§' + ch, 1.15]].concat(c.map(function (k) { return ['#' + k, 1] }), STOP[w[i]] ? [] : [[raiz(w[i + n - 1]), 0.5]]) }); for (var j = i; j < i + n; j++) usado[j] = 1; break }
      }
    }
    var ultimo = w.length - 1;
    for (i = 0; i < w.length; i++) {
      if (usado[i] || STOP[w[i]]) continue;
      var x = w[i], r = raiz(x), alt = [[r, 1]];
      (PALAVRA[x] || []).forEach(function (k) { alt.push(['#' + k, 0.9]) });
      var existe = IDX.inv[r] || (PALAVRA[x] && PALAVRA[x].some(function (k) { return IDX.inv['#' + k] }));
      // palavras grudadas/separadas: "event id" → eventid; "pageview" → page + view
      if (i < ultimo && !STOP[w[i + 1]] && IDX.cru[x + w[i + 1]]) { alt.push([raiz(x + w[i + 1]), 1]); (PALAVRA[x + w[i + 1]] || []).forEach(function (k) { alt.push(['#' + k, 0.9]) }) }
      if (!existe) {
        // pela metade (digitando) ou com erro de digitação
        if (x.length >= 3) {
          var pref = IDX.cruL.filter(function (c) { return c.length > x.length && c.indexOf(x) === 0 }).sort(function (a, b) { return IDX.cru[b] - IDX.cru[a] }).slice(0, i === ultimo ? 6 : 3);
          pref.forEach(function (c) { alt.push([raiz(c), i === ultimo ? 0.8 : 0.6]); (PALAVRA[c] || []).forEach(function (k) { alt.push(['#' + k, 0.6]) }) });
        }
        var par = parecidas(x);
        par.forEach(function (p) { alt.push([raiz(p[0]), p[1] === 1 ? 0.75 : 0.6]); (PALAVRA[p[0]] || []).forEach(function (k) { alt.push(['#' + k, 0.7]) }) });
        if (par.length) notas.push([x, IDX.forma[par[0][0]] || par[0][0]]);
        if (!par.length && x.length >= 7) for (var s = 3; s <= x.length - 3; s++) { var a1 = x.slice(0, s), b1 = x.slice(s); if (IDX.cru[a1] && IDX.cru[b1] && !STOP[a1] && !STOP[b1]) { alt.push([raiz(a1), 0.5]); alt.push([raiz(b1), 0.5]); break } }
      }
      conc.push({ pos: i, txt: x, alt: alt });
    }
    conc.sort(function (a, b) { return a.pos - b.pos });
    var intencao = {
      como: /\b(como|como faco|passo a passo|tutorial|onde fica|onde clico|cadastr|criar|configurar|hacer|paso a paso)\b/.test(w.join(' ')),
      problema: /\b(nao|no|erro|error|problema|falha|sumiu|some|nunca|errado|errada|quebr|trav|parou|pararam|reprov|rejeit|bloque)\w*/.test(w.join(' ')),
      oque: /\b(o que e|o que sao|que e|que es|que son|pra que serve|para que sirve|para que serve|significa|diferenca|diferencia)\b/.test(w.join(' '))
    };
    return { conc: conc, notas: notas, intencao: intencao, palavras: w };
  }

  /* ---------- 6. pontuação (BM25F + cobertura + frase + intenção) ---------- */
  var K1 = 1.2, B = 0.5;
  function idf(t) { var e = IDX.inv[t]; var df = e ? Object.keys(e).length : 0; return Math.log(1 + (IDX.N - df + 0.5) / (df + 0.5)) }
  BUSCA.busca = function (q, lang, max) {
    if (!IDX) BUSCA.monta();
    var E = entende(q); if (!E.conc.length) return { itens: [], notas: E.notas, vazio: true };
    var cand = {}, CONC = E.conc;
    CONC.forEach(function (c, ci) {
      c.alt.forEach(function (al) {
        var t = al[0], e = IDX.inv[t]; if (!e) return; var id = idf(t);
        Object.keys(e).forEach(function (di) {
          var d = IDX.docs[di], wtf = 0, melhor = null, mv = 0;
          Object.keys(e[di]).forEach(function (f) {
            var tf = e[di][f].length, v = (PESO[f] || 1) * tf / (1 - B + B * d.len[f] / (IDX.media[f] || 1));
            wtf += v; if (v > mv) { mv = v; melhor = f }
          });
          var s = id * wtf / (K1 + wtf) * al[1];
          var C = cand[di] || (cand[di] = { s: [], campo: {}, termos: {}, tt: [] });
          if (!C.s[ci] || s > C.s[ci]) C.s[ci] = s;
          var tt = (e[di].tit ? 1 : e[di].frases || e[di].tut ? 0.8 : 0) * al[1]; if (tt > (C.tt[ci] || 0)) C.tt[ci] = tt;   // está no título ou nas frases de aluno?
          C.campo[melhor] = (C.campo[melhor] || 0) + s; C.termos[t] = 1;
        });
      });
    });
    var res = Object.keys(cand).map(function (di) {
      var C = cand[di], d = IDX.docs[di], soma = 0, cob = 0;
      CONC.forEach(function (c, ci) { if (C.s[ci]) { soma += C.s[ci]; cob++ } });
      var frac = cob / CONC.length, sc = soma * (0.25 + 0.75 * frac * frac), tcov = 0;
      CONC.forEach(function (c, ci) { tcov += C.tt[ci] || 0 }); sc *= 1 + 1.2 * tcov / CONC.length;   // o assunto da aula é a pergunta
      // frase: conceitos vizinhos da pergunta que aparecem perto no mesmo campo
      for (var i = 0; i + 1 < CONC.length; i++) {
        if (!C.s[i] || !C.s[i + 1]) continue;
        var ok = CONC[i].alt.some(function (a1) { var e1 = IDX.inv[a1[0]] && IDX.inv[a1[0]][di]; if (!e1) return false;
          return CONC[i + 1].alt.some(function (a2) { var e2 = IDX.inv[a2[0]] && IDX.inv[a2[0]][di]; if (!e2) return false;
            return Object.keys(e1).some(function (f) { return e2[f] && e1[f].some(function (p1) { return e2[f].some(function (p2) { var dd = p2 - p1; return dd > 0 && dd <= 3 }) }) }) }) });
        if (ok) sc *= 1.18;
      }
      if (d.tipo === 'modulo') sc *= 0.55;
      if (CONC.length === 1 && d.aula && d.aula.id === '01' && (C.tt[0] || 0) >= 0.7) sc *= 1.25;   // uma palavra só ("pixel"): a aula que apresenta o assunto
      if (E.intencao.como && d.tuts && d.tuts.length) sc *= 1.15;
      if (E.intencao.problema && (d.tipo === 'caso' || /n[aã]o|problema|erro|falha|“/.test(d.aula ? d.aula.titulo.pt : ''))) sc *= 1.12;
      if (E.intencao.oque && d.aula && d.aula.id === '01') sc *= 1.15;
      var parte = null, pv = 0; Object.keys(C.campo).forEach(function (f) { if (PARTE[f] && C.campo[f] > pv) { pv = C.campo[f]; parte = PARTE[f] } });
      if (C.campo.tit || C.campo.frases || C.campo.obj || C.campo.tut) { var top = Math.max(C.campo.tit || 0, C.campo.frases || 0, C.campo.obj || 0, C.campo.tut || 0); if (top >= pv * 0.6) parte = null }
      return { doc: d, score: sc, cob: frac, parte: parte, termos: Object.keys(C.termos) };
    }).filter(function (r) { return r.cob >= (CONC.length >= 3 ? 0.34 : 0.5) || r.score > 4 });
    res.sort(function (a, b) { return b.score - a.score });
    if (res.length) { var topo = res[0].score; res = res.filter(function (r) { return r.score >= topo * 0.22 }) }
    return { itens: res.slice(0, max || 8), notas: E.notas, conceitos: CONC, intencao: E.intencao };
  };

  /* trecho para mostrar: a frase do conteúdo (no idioma da tela) com mais termos da pergunta */
  BUSCA.trecho = function (r, lang) {
    var d = r.doc, a = d.aula, T = function (o) { return o == null ? '' : typeof o === 'string' ? o : (o[lang] || o.pt || '') }, tx = [];
    if (a) {
      var at = a.atender || {}, co = a.cola || {}, en = a.entender || {};
      tx.push(['obj', T(a.objetivo)], ['cena', T(at.cena)]);
      (a.reclamacao || []).forEach(function (x) { tx.push(['cena', T(x[1])]) });
      (en.pontos || []).forEach(function (x) { tx.push(['pontos', T(x)]) });
      (co.perguntas || []).concat(co.conferir || [], co.passos || [], co.frase ? [co.frase] : []).forEach(function (x) { tx.push(['cola', T(x)]) });
      (en.dialogo || []).forEach(function (x) { tx.push(['dialogo', T(x[1])]) });
      if (a.praticar) tx.push(['pratica', T(a.praticar.texto)]);
    } else tx.push(['obj', T(d.mod && d.mod.resumo)]);
    var alvo = {}; r.termos.forEach(function (t) { alvo[t] = 1 });
    var melhor = null, mv = -1;
    tx.forEach(function (x, i) {
      if (!x[1]) return; var ts = termos(x[1]), v = 0, vis = {};
      ts.forEach(function (t) { if (alvo[t[0]] && !vis[t[0]]) { vis[t[0]] = 1; v += 1 } });
      v = v * (x[0] === 'obj' ? 1.15 : 1) - i * 0.001; if (v > mv) { mv = v; melhor = x[1] }
    });
    return { html: marca(melhor || '', alvo), alvo: alvo };
  };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] }) }
  function marca(txt, alvo) {   // destaca as palavras (e frases de sinônimo, como "duas vezes") que casaram com a pergunta
    var pd = String(txt).replace(/<[^>]*>/g, '').split(/(\s+)/), ws = [], on = {};
    pd.forEach(function (p, k) { if (/\S/.test(p)) ws.push({ k: k, w: palavras(p) }) });
    var flat = []; ws.forEach(function (x, wi) { x.w.forEach(function (w) { flat.push([w, wi]) }) });
    for (var i = 0; i < flat.length; i++) {
      for (var n = Math.min(MAXF, flat.length - i); n >= 2; n--) {
        var ch = flat.slice(i, i + n).map(function (x) { return x[0] }).join(' '), c = FRASE[ch];
        if (c && (alvo['§' + ch] || c.some(function (k) { return alvo['#' + k] }))) { for (var j = i; j < i + n; j++) on[flat[j][1]] = 1; break }
      }
      var w = flat[i][0]; if (!STOP[w] && (alvo[raiz(w)] || (PALAVRA[w] || []).some(function (k) { return alvo['#' + k] }))) on[flat[i][1]] = 1;
    }
    var porK = {}; ws.forEach(function (x, wi) { if (on[wi]) porK[x.k] = 1 });
    return pd.map(function (p, k) { return porK[k] ? '<mark>' + esc(p) + '</mark>' : esc(p) }).join('');
  }
  BUSCA._interno = { norm: norm, raiz: raiz, termos: termos, entende: entende, palavras: palavras };

  /* ======================= 7. a caixa "Pergunte ao Pixel" (só no navegador) ======================= */
  if (typeof document === 'undefined') return;
  var LANG = (function () { try { return JSON.parse(localStorage.getItem('plat.lang') || '"pt"') === 'es' ? 'es' : 'pt' } catch (e) { return 'pt' } })();
  function T(o) { return o == null ? '' : typeof o === 'string' ? o : (o[LANG] || o.pt || '') }
  var TXT = {
    titulo: { pt: 'Pergunte ao Pixel', es: 'Pregúntale al Pixel' },
    ph: { pt: 'Escreva do seu jeito… ex.: “a compra aparece duas vezes”', es: 'Escribe a tu manera… ej.: “la compra aparece dos veces”' },
    sub: { pt: 'Procuro nas aulas, nos casos e nos tutoriais da plataforma. Não invento nada: só mostro o que já está aqui.', es: 'Busco en las clases, los casos y los tutoriales de la plataforma. No invento nada: solo muestro lo que ya está aquí.' },
    nada: { pt: 'Não achei nada sobre isso por aqui. 🤔 Tente com outras palavras, ou escolha um tema:', es: 'No encontré nada sobre eso por aquí. 🤔 Prueba con otras palabras o elige un tema:' },
    ideias: { pt: 'Ideias do que perguntar:', es: 'Ideas de qué preguntar:' },
    abrir: { pt: 'Abrir', es: 'Abrir' }, tutorial: { pt: '▶ Tutorial guiado', es: '▶ Tutorial guiado' },
    aula: { pt: 'Aula', es: 'Clase' }, caso: { pt: 'Caso do Diagnóstico', es: 'Caso del Diagnóstico' }, modulo: { pt: 'Módulo', es: 'Módulo' }, tut: { pt: 'Tutorial', es: 'Tutorial' },
    quis: { pt: 'Entendi', es: 'Entendí' }, como: { pt: 'como', es: 'como' },
    parte: { entender: { pt: 'na explicação', es: 'en la explicación' }, atender: { pt: 'no atendimento e na cola', es: 'en la atención y la guía' }, praticar: { pt: 'na prática guiada', es: 'en la práctica guiada' } },
    completa: { pt: 'Trilha Completa', es: 'Ruta Completa' },
    feedback: { pt: 'Não achou o que queria? Conte para a gente no Feedback.', es: '¿No encontraste lo que buscabas? Cuéntanos en Feedback.' },
    fechar: { pt: 'Fechar', es: 'Cerrar' }
  };
  var IDEIAS = [
    { pt: 'a compra aparece duas vezes', es: 'la compra aparece dos veces' },
    { pt: 'meu anúncio não publica', es: 'mi anuncio no se publica' },
    { pt: 'produto não aparece no catálogo', es: 'el producto no aparece en el catálogo' },
    { pt: 'como conectar a Shopify', es: 'cómo conectar Shopify' },
    { pt: 'o que é o Pixel', es: 'qué es el píxel' },
    { pt: 'Instagram não aparece no anúncio', es: 'Instagram no aparece en el anuncio' }
  ];
  var css = '.pp-fundo{position:fixed;inset:0;z-index:2000;background:rgba(22,41,74,.55);display:flex;align-items:flex-start;justify-content:center;padding:6vh 16px 16px}' +
    '.pp-caixa{width:min(760px,100%);max-height:88vh;display:flex;flex-direction:column;background:#fff;border:3px solid #16294A;border-radius:16px;box-shadow:6px 6px 0 #16294A;overflow:hidden;font:15px/1.45 "Segoe UI",system-ui,Arial,sans-serif;color:#16294A}' +
    '.pp-topo{display:flex;gap:10px;align-items:center;padding:12px 14px 6px}.pp-topo b{font-size:18px}.pp-topo .pp-x{margin-left:auto;border:0;background:none;font-size:15px;cursor:pointer;color:#64748B}' +
    '.pp-sub{margin:0 14px 8px;color:#64748B;font-size:13px}' +
    '.pp-in{margin:0 14px 10px;padding:12px 14px;border:2px solid #16294A;border-radius:12px;font:16px "Segoe UI",system-ui,sans-serif;outline:none}.pp-in:focus{box-shadow:0 0 0 3px #FFE07A}' +
    '.pp-res{overflow:auto;padding:0 14px 14px}.pp-it{display:block;border:2px solid #E2E8F0;border-radius:12px;padding:10px 12px;margin-top:8px;text-decoration:none;color:inherit}.pp-it:hover,.pp-it.on{border-color:#16294A;background:#F6F8FC}' +
    '.pp-it .pp-tipo{font-size:12px;font-weight:700;color:#5B3CC4;text-transform:uppercase;letter-spacing:.03em}.pp-it .pp-tipo.caso{color:#E0245E}.pp-it .pp-tipo.tutorial{color:#1E9E55}' +
    '.pp-it h4{margin:2px 0 3px;font-size:16px}.pp-it p{margin:0;color:#3A4D6B;font-size:14px}.pp-it mark{background:#FFE07A;color:inherit;border-radius:3px;padding:0 1px}' +
    '.pp-acoes{display:flex;gap:8px;flex-wrap:wrap;margin-top:7px}.pp-acoes a{font-size:13px;font-weight:700;padding:4px 10px;border:2px solid #16294A;border-radius:8px;text-decoration:none;color:#16294A;background:#fff}.pp-acoes a.pp-tut{background:#FFE07A}' +
    '.pp-nota{font-size:13px;color:#64748B;margin:6px 0 0}.pp-chips{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.pp-chips button{border:2px solid #16294A;background:#F6F8FC;border-radius:999px;padding:4px 10px;font:13px "Segoe UI",sans-serif;cursor:pointer;color:#16294A}.pp-chips button:hover{background:#FFE07A}' +
    '.pp-rodape{font-size:12px;color:#64748B;margin:12px 0 0}.pp-onde{font-size:12px;color:#64748B}' +
    '.pp-botao{display:inline-flex;align-items:center;gap:6px;border:2px solid #fff;background:#FFE07A;color:#16294A;border-radius:10px;padding:6px 12px;font:800 14px "Segoe UI",sans-serif;cursor:pointer;margin-left:auto}.pp-botao:hover{background:#fff}' +
    '.pp-hero{display:flex;gap:8px;margin:14px 0}.pp-hero input{flex:1;min-width:0;padding:13px 14px;border:2px solid #16294A;border-radius:12px;font:16px "Segoe UI",system-ui,sans-serif}.pp-hero button{white-space:nowrap}' +
    '.pp-botao+.pl-lang{margin-left:8px}' +
    '@media(max-width:600px){.pp-fundo{padding:10px}.pp-caixa{max-height:94vh}.pp-botao span{display:none}}';
  var fundo = null, sel = -1;
  (function () { var st = document.createElement('style'); st.textContent = css; (document.head || document.documentElement).appendChild(st) })();   // o botão do topo já precisa do estilo
  function abre(texto) {
    if (!IDX) BUSCA.monta();
    if (!fundo) {
      fundo = document.createElement('div'); fundo.className = 'pp-fundo'; fundo.setAttribute('role', 'dialog'); fundo.setAttribute('aria-label', T(TXT.titulo));
      fundo.innerHTML = '<div class="pp-caixa"><div class="pp-topo">' + (G.PERSONAGEM ? G.PERSONAGEM('pixel', 2) : '') + '<b>' + T(TXT.titulo) + '</b><button class="pp-x" data-pp="fechar">✕ ' + T(TXT.fechar) + '</button></div>' +
        '<p class="pp-sub">' + T(TXT.sub) + '</p><input class="pp-in" type="search" autocomplete="off" placeholder="' + esc(T(TXT.ph)) + '" aria-label="' + esc(T(TXT.titulo)) + '"/><div class="pp-res" aria-live="polite"></div></div>';
      document.body.appendChild(fundo);
      var inp = fundo.querySelector('.pp-in'), tm;
      inp.addEventListener('input', function () { clearTimeout(tm); tm = setTimeout(function () { mostra(inp.value) }, 120) });
      inp.addEventListener('keydown', function (e) {
        var its = fundo.querySelectorAll('.pp-it');
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, Math.min(its.length - 1, sel + (e.key === 'ArrowDown' ? 1 : -1))); [].forEach.call(its, function (x, i) { x.classList.toggle('on', i === sel) }); if (its[sel]) its[sel].scrollIntoView({ block: 'nearest' }) }
        if (e.key === 'Enter' && its.length) { e.preventDefault(); location.href = its[Math.max(0, sel)].getAttribute('href') }
      });
      fundo.addEventListener('click', function (e) {
        if (e.target === fundo || (e.target.closest('[data-pp=fechar]'))) return fecha();
        var c = e.target.closest('[data-pp-q]'); if (c) { inp.value = c.getAttribute('data-pp-q'); mostra(inp.value); inp.focus() }
      });
    }
    fundo.hidden = false; document.documentElement.style.overflow = 'hidden';
    var i2 = fundo.querySelector('.pp-in'); if (texto != null) i2.value = texto; mostra(i2.value); setTimeout(function () { i2.focus(); i2.select && texto == null && i2.select() }, 30);
  }
  function fecha() { if (fundo) fundo.hidden = true; document.documentElement.style.overflow = '' }
  function chips(lst) { return '<div class="pp-chips">' + lst.map(function (x) { return '<button data-pp-q="' + esc(T(x)) + '">' + esc(T(x)) + '</button>' }).join('') + '</div>' }
  function mostra(q) {
    var box = fundo.querySelector('.pp-res'); sel = -1;
    if (!String(q).trim()) { box.innerHTML = '<p class="pp-nota">' + T(TXT.ideias) + '</p>' + chips(IDEIAS); return }
    var R = BUSCA.busca(q, LANG, 8), h = '';
    if (R.notas.length) h += '<p class="pp-nota">✏️ ' + T(TXT.quis) + ' ' + R.notas.map(function (n) { return '“' + esc(n[0]) + '” ' + T(TXT.como) + ' “<b>' + esc(n[1]) + '</b>”' }).join(', ') + '.</p>';
    if (!R.itens.length) { box.innerHTML = h + '<p class="pp-nota">' + T(TXT.nada) + '</p>' + chips(IDEIAS) + rodape(); return }
    var volta = encodeURIComponent(location.pathname.split('/').pop() + location.search);
    h += R.itens.map(function (r) {
      var d = r.doc, tr = BUSCA.trecho(r, LANG), url = d.url, ttl = d.aula ? T(d.aula.titulo) : d.tipo === 'tutorial' ? T(d.tuts[0].titulo) : T(d.mod.titulo);
      if (url && r.parte && d.partes && d.partes.indexOf(r.parte) >= 0) url += '&passo=' + (d.partes.indexOf(r.parte) + 1);
      var tut = d.tuts && d.tuts[0], tu = tut ? tut.url + (tut.url.indexOf('?') < 0 ? '?' : '&') + 'tour=' + tut.tour + '&voltar=' + (d.url ? encodeURIComponent(d.url) : volta) : null;
      var href = url || tu, tipo = d.tipo === 'caso' ? TXT.caso : d.tipo === 'modulo' ? TXT.modulo : d.tipo === 'tutorial' ? TXT.tut : TXT.aula;
      return '<a class="pp-it" href="' + esc(href) + '"><span class="pp-tipo ' + d.tipo + '">' + (d.mod ? d.mod.icone + ' ' : '') + T(tipo) + (d.aula ? ' ' + d.aula.id : '') + '</span>' +
        '<span class="pp-onde"> · ' + esc(T(d.mod && d.mod.titulo)) + (d.comp ? ' · ' + T(TXT.completa) : '') + '</span><h4>' + esc(ttl) + '</h4>' +
        (tr.html ? '<p>' + tr.html + '</p>' : '') +
        (r.parte ? '<p class="pp-nota">📍 ' + T(TXT.parte[r.parte]) + '</p>' : '') +
        (tu && url ? '<span class="pp-acoes"><span data-pp-ir="' + esc(tu) + '" class="pp-tut-l"></span></span>' : '') + '</a>';
    }).join('');
    box.innerHTML = h + rodape();
    // o tutorial é um link dentro do cartão: troca o marcador por um botão que leva direto a ele
    [].forEach.call(box.querySelectorAll('[data-pp-ir]'), function (s) {
      var b = document.createElement('a'); b.className = 'pp-tut'; b.href = s.getAttribute('data-pp-ir'); b.textContent = T(TXT.tutorial);
      b.addEventListener('click', function (e) { e.stopPropagation() }); s.parentNode.replaceChild(b, s);
    });
  }
  function rodape() { return '<p class="pp-rodape">💬 <a href="feedback.html">' + T(TXT.feedback) + '</a></p>' }
  BUSCA.abre = abre; BUSCA.fecha = fecha;
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && fundo && !fundo.hidden) return fecha();
    if (e.key === '/' && !(e.target.closest && e.target.closest('input,textarea,select,[contenteditable]')) && document.querySelector('.pl-topo')) { e.preventDefault(); abre() }
  });
  document.addEventListener('click', function (e) { var b = e.target.closest && e.target.closest('[data-pergunte]'); if (b) { e.preventDefault(); var i = b.closest('form') && b.closest('form').querySelector('input'); abre(i ? i.value : null) } });
  document.addEventListener('submit', function (e) { var f = e.target; if (f.matches && f.matches('.pp-hero')) { e.preventDefault(); abre(f.querySelector('input').value) } });
  // o índice leva uns décimos de segundo: monta quando a pessoa chega perto do botão ou da caixa, para abrir sem espera
  function prepara(e) { if (!IDX && e.target.closest && e.target.closest('[data-pergunte], .pp-hero')) setTimeout(function () { if (!IDX) BUSCA.monta() }, 0) }
  document.addEventListener('mouseover', prepara); document.addEventListener('focusin', prepara); document.addEventListener('touchstart', prepara, { passive: true });
  G.PERGUNTE_TXT = TXT;
})(typeof window !== 'undefined' ? window : globalThis);
