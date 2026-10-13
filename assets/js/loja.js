/* =====================================================================
   LOJA — carrinho, páginas e os EVENTOS de cada ação.
   Todo evento passa por LOJA.track(nome, parâmetros, {eventID}),
   que chama o fbq() do Meta Pixel e mostra tudo no Modo aula.
   ===================================================================== */
(function(){if(window.__redirecionando)return;
'use strict';
var C=window.LOJA_CONFIG||{},P=window.PRODUTOS||[],MOEDA=C.moeda||'BRL';
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
function lsGet(k,d){try{var v=localStorage.getItem('loja.'+k);return v==null?d:JSON.parse(v)}catch(e){return d}}
function lsSet(k,v){try{localStorage.setItem('loja.'+k,JSON.stringify(v))}catch(e){}}
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var brl=function(v){return 'R$ '+Number(v).toFixed(2).replace('.',',')};
var num=function(v){return Math.round(Number(v)*100)/100};
var qs=function(k){return new URLSearchParams(location.search).get(k)};
function prod(id){for(var i=0;i<P.length;i++){if(P[i].id===id)return P[i];if(P[i].variantes)for(var j=0;j<P[i].variantes.length;j++)if(P[i].variantes[j].id===id)return P[i]}return null}
function nomeVar(id){var p=prod(id);if(!p||!p.variantes)return '';for(var j=0;j<p.variantes.length;j++)if(p.variantes[j].id===id)return p.variantes[j].nome;return ''}
var T=function(n,p,o){if(window.LOJA)window.LOJA.track(n,p,o)};

/* ---------- carrinho ---------- */
var cart={itens:function(){return lsGet('carrinho',[])},salvar:function(l){lsSet('carrinho',l);atualizaCarrinho()},
  add:function(id,q){var l=cart.itens(),f=l.filter(function(x){return x.id===id})[0];if(f)f.q+=q;else l.push({id:id,q:q});cart.salvar(l)},
  total:function(){return num(cart.itens().reduce(function(s,x){var p=prod(x.id);return s+(p?p.preco*x.q:0)},0))},
  qtd:function(){return cart.itens().reduce(function(s,x){return s+x.q},0)},
  contents:function(){return cart.itens().map(function(x){return{id:x.id,quantity:x.q}})},
  ids:function(){return cart.itens().map(function(x){return x.id})}};
function atualizaCarrinho(){var b=$('#qtdCarrinho');if(b){var n=cart.qtd();b.textContent=n;b.style.display=n?'grid':'none'}}
window.LOJA_UI={atualizaCarrinho:atualizaCarrinho};

/* ---------- topo e rodapé ---------- */
var pg=document.body.getAttribute('data-pagina');
function topo(){var t=$('#topo');if(!t)return;
  t.innerHTML='<header class="topo"><a class="marca" href="loja.html"><span class="marca-ic">'+lojinhaIcon()+'</span><span>Lojinha<br/><b>da Marina</b></span></a>'+
  '<form class="busca" action="produtos.html"><input name="q" placeholder="Buscar canecas, camisetas…" value="'+esc(qs('q')||'')+'" aria-label="Buscar"/><button>🔎</button></form>'+
  '<nav class="menu"><a href="produtos.html" class="'+(pg==='produtos'||pg==='produto'?'on':'')+'">Produtos</a><a href="oficina.html" class="'+(pg==='oficina'?'on':'')+'">Oficina</a><a href="orcamento.html" class="'+(pg==='orcamento'?'on':'')+'">Orçamento</a><a href="aula.html" class="'+(pg==='aula'||pg==='catalogo'||pg==='tutorial'?'on':'')+'">🎓 Aula</a>'+
  '<a href="carrinho.html" class="carrinho" aria-label="Carrinho">🛒<b id="qtdCarrinho">0</b></a></nav></header>';
  atualizaCarrinho()}
function rodape(){var r=$('#rodape');if(!r)return;
  r.innerHTML='<footer class="rodape"><div class="rod-grid"><div><b>Lojinha da Marina</b><p>Canecas, camisetas e ecobags com boas ideias.</p><p class="aviso">⚠️ Loja <b>fictícia</b>, criada para treinamento sobre o Meta Pixel. Nenhum produto é vendido e nenhum pagamento é real.</p></div>'+
  '<div><b>Navegue</b><a href="produtos.html?cat=canecas">Canecas</a><a href="produtos.html?cat=camisetas">Camisetas</a><a href="produtos.html?cat=acessorios">Acessórios</a><a href="catalogo.html">Catálogo (fichas)</a></div>'+
  '<form class="news" id="news"><b>Receba novidades</b><p>Assine a newsletter (use um e-mail de teste).</p><div class="linha"><input type="email" required value="aluno.teste@exemplo.com" aria-label="E-mail"/><button class="btn">Assinar</button></div><small id="newsOk"></small></form></div>'+
  '<p class="rod-fim">Material educativo independente, sem afiliação com a Meta. Meta e Meta Pixel são marcas da Meta Platforms, Inc.</p></footer>';
  $('#news').onsubmit=function(e){e.preventDefault();T('CompleteRegistration',{content_name:'newsletter',status:true});$('#newsOk').textContent='✓ Inscrição feita (de mentirinha).'}}
function lojinhaIcon(){return '<svg width="40" height="40" viewBox="0 0 20 20" shape-rendering="crispEdges"><rect x="1" y="6" width="18" height="13" fill="#22304A"/><rect x="2" y="7" width="16" height="11" fill="#FFF4E0"/><rect x="0" y="3" width="20" height="4" fill="#2F6FD6"/><rect x="2" y="3" width="2" height="4" fill="#fff"/><rect x="6" y="3" width="2" height="4" fill="#fff"/><rect x="10" y="3" width="2" height="4" fill="#fff"/><rect x="14" y="3" width="2" height="4" fill="#fff"/><rect x="18" y="3" width="2" height="4" fill="#fff"/><rect x="8" y="11" width="4" height="7" fill="#2F6FD6"/><rect x="3" y="10" width="4" height="4" fill="#CFE6FF"/><rect x="13" y="10" width="4" height="4" fill="#CFE6FF"/></svg>'}

/* ---------- componentes ---------- */
function linkProd(id){return 'produto-'+String(id).toLowerCase()+'.html'}
function card(p){var esg=p.estoque!=='in stock';
  return '<article class="card-prod"><a href="'+linkProd(p.id)+'" class="foto"><img src="'+p.img+'" alt="'+esc(p.titulo)+'" loading="lazy"/>'+(esg?'<span class="selo">Esgotado</span>':'')+'</a>'+
    '<button class="coracao" data-wish="'+p.id+'" title="Salvar na lista de desejos">♡</button><div class="info"><a href="'+linkProd(p.id)+'"><h3>'+esc(p.titulo)+'</h3></a><p class="preco">'+brl(p.preco)+'</p><code class="sku">'+p.id+'</code></div></article>'}
function ligaCoracoes(){$$('[data-wish]').forEach(function(b){b.onclick=function(){var p=prod(b.getAttribute('data-wish'));b.textContent='♥';b.classList.add('on');
  T('AddToWishlist',{content_ids:[p.id],content_type:p.variantes?'product_group':'product',content_name:p.titulo,value:p.preco,currency:MOEDA})}})}

/* ---------- páginas ---------- */
var PAGINAS={
 inicio:function(){$('#destaques').innerHTML=P.slice(0,4).map(card).join('');ligaCoracoes();
   var k=$('#kit');if(k)k.onclick=function(){window.LOJA.trackCustom('MontouKitPresente',{itens:3,tema:'boas ideias'});k.textContent='🎁 Kit montado! (veja o evento personalizado)';k.disabled=true}},
 produtos:function(){var cat=qs('cat'),q=(qs('q')||'').trim().toLowerCase();var lista=P.filter(function(p){return(!cat||p.categoria===cat)&&(!q||(p.titulo+' '+p.descricao+' '+p.id).toLowerCase().indexOf(q)>=0)});
   $('#filtros').innerHTML='<a href="produtos.html" class="'+(!cat?'on':'')+'">Todos</a>'+Object.keys(window.CATEGORIAS).map(function(c){return '<a href="produtos.html?cat='+c+'" class="'+(cat===c?'on':'')+'">'+window.CATEGORIAS[c]+'</a>'}).join('');
   $('#tituloLista').textContent=q?'Resultados para “'+qs('q')+'”':cat?window.CATEGORIAS[cat]:'Todos os produtos';
   $('#lista').innerHTML=lista.length?lista.map(card).join(''):'<p class="vazio">Nada encontrado. Tente “caneca”.</p>';ligaCoracoes();
   if(q)T('Search',{search_string:qs('q'),content_ids:lista.map(function(p){return p.id}),content_type:'product',content_category:cat||'todos'})},
 produto:function(){var p=prod(document.body.getAttribute('data-produto')||qs('id')||'CANECA_01');var box=$('#produto');if(!p){box.innerHTML='<p class="vazio">Produto não encontrado.</p>';return}
   document.title=p.titulo+' · Lojinha da Marina';var esg=p.estoque!=='in stock',varSel=null;
   box.innerHTML='<div class="prod-foto"><img src="'+p.img+'" alt="'+esc(p.titulo)+'"/></div><div class="prod-info" itemscope itemtype="https://schema.org/Product">'+
     '<a class="voltar" href="produtos.html?cat='+p.categoria+'">← '+window.CATEGORIAS[p.categoria]+'</a><h1 itemprop="name">'+esc(p.titulo)+'</h1><meta itemprop="productID" content="'+p.id+'"/><meta itemprop="sku" content="'+p.id+'"/><meta itemprop="brand" content="'+esc(C.nomeLoja)+'"/>'+
     '<p class="prod-preco" itemprop="offers" itemscope itemtype="https://schema.org/Offer"><span>'+brl(p.preco)+'</span><meta itemprop="price" content="'+p.preco.toFixed(2)+'"/><meta itemprop="priceCurrency" content="'+MOEDA+'"/><link itemprop="availability" href="https://schema.org/'+(esg?'OutOfStock':'InStock')+'"/></p>'+
     '<p itemprop="description">'+esc(p.descricao)+'</p><p class="sku-linha">Código (ID no catálogo): <code id="skuAtual">'+p.id+'</code></p>'+
     (p.variantes?'<div class="tamanhos"><b>Tamanho</b><div>'+p.variantes.map(function(v){return '<button data-var="'+v.id+'">'+v.nome+'</button>'}).join('')+'</div><small>Antes de escolher, o código é do <b>grupo</b> (product_group). Depois, da <b>variante</b> (product).</small></div>':'')+
     '<div class="comprar"><input type="number" id="qtd" min="1" value="1" aria-label="Quantidade"/><button class="btn grande" id="addCart" '+(esg?'disabled':'')+'>'+(esg?'Esgotado':'🛒 Adicionar ao carrinho')+'</button><button class="coracao grande" data-wish="'+p.id+'" title="Lista de desejos">♡</button></div><p id="addOk" class="ok"></p></div>';
   ligaCoracoes();
   T('ViewContent',{content_ids:[p.id],content_type:p.variantes?'product_group':'product',content_name:p.titulo,content_category:window.CATEGORIAS[p.categoria],value:p.preco,currency:MOEDA});
   $$('[data-var]').forEach(function(b){b.onclick=function(){$$('[data-var]').forEach(function(x){x.classList.remove('on')});b.classList.add('on');varSel=b.getAttribute('data-var');$('#skuAtual').textContent=varSel;
     T('ViewContent',{content_ids:[varSel],content_type:'product',content_name:p.titulo+' ('+b.textContent+')',value:p.preco,currency:MOEDA})}});
   var add=$('#addCart');if(add)add.onclick=function(){if(p.variantes&&!varSel){$('#addOk').textContent='Escolha um tamanho primeiro 🙂';return}var id=varSel||p.id,q=Math.max(1,parseInt($('#qtd').value)||1);cart.add(id,q);
     T('AddToCart',{content_ids:[id],content_type:'product',contents:[{id:id,quantity:q}],content_name:p.titulo,value:num(p.preco*q),currency:MOEDA});$('#addOk').innerHTML='✓ No carrinho! <a href="carrinho.html">Ver carrinho →</a>'};
   $('#relacionados').innerHTML=P.filter(function(x){return x.categoria===p.categoria&&x.id!==p.id}).slice(0,4).map(card).join('');ligaCoracoes();
   metaTags(p)},
 carrinho:function(){var box=$('#carrinhoBox');function desenha(){var l=cart.itens();if(!l.length){box.innerHTML='<p class="vazio">Seu carrinho está vazio. <a href="produtos.html">Ver produtos →</a></p>';return}
   box.innerHTML='<div class="itens">'+l.map(function(x,i){var p=prod(x.id);return '<div class="item"><img src="'+p.img+'" alt=""/><div><b>'+esc(p.titulo)+(nomeVar(x.id)?' · '+nomeVar(x.id):'')+'</b><code class="sku">'+x.id+'</code></div><input type="number" min="1" value="'+x.q+'" data-i="'+i+'" aria-label="Quantidade"/><span>'+brl(p.preco*x.q)+'</span><button data-rm="'+i+'" title="Remover">✕</button></div>'}).join('')+'</div>'+
     '<div class="resumo"><div><span>Total</span><b>'+brl(cart.total())+'</b></div><a class="btn grande" href="checkout.html">Ir para o pagamento →</a></div>';
   $$('[data-i]',box).forEach(function(i){i.onchange=function(){var l=cart.itens();l[+i.getAttribute('data-i')].q=Math.max(1,parseInt(i.value)||1);cart.salvar(l);desenha()}});
   $$('[data-rm]',box).forEach(function(b){b.onclick=function(){var l=cart.itens();l.splice(+b.getAttribute('data-rm'),1);cart.salvar(l);desenha()}})}desenha()},
 checkout:function(){var l=cart.itens();if(!l.length){$('#checkoutBox').innerHTML='<p class="vazio">Carrinho vazio. <a href="produtos.html">Escolher produtos →</a></p>';return}
   $('#resumoPedido').innerHTML=l.map(function(x){var p=prod(x.id);return '<div class="linha"><span>'+x.q+'× '+esc(p.titulo)+(nomeVar(x.id)?' ('+nomeVar(x.id)+')':'')+'</span><b>'+brl(p.preco*x.q)+'</b></div>'}).join('')+'<div class="linha total"><span>Total</span><b>'+brl(cart.total())+'</b></div>';
   T('InitiateCheckout',{content_ids:cart.ids(),contents:cart.contents(),content_type:'product',num_items:cart.qtd(),value:cart.total(),currency:MOEDA});
   var pagou=false;$$('[name=pag]').forEach(function(r){r.onchange=function(){if(pagou)return;pagou=true;T('AddPaymentInfo',{content_ids:cart.ids(),contents:cart.contents(),value:cart.total(),currency:MOEDA,payment_type:r.value})}});
   $('#formCheckout').onsubmit=function(e){e.preventDefault();var f=e.target;if(!$('[name=pag]:checked')){$('#erroPag').textContent='Escolha uma forma de pagamento (simulada).';return}
     window.LOJA.salvarCliente({em:f.email.value,ph:f.tel.value,fn:f.nome.value,ln:f.sobrenome.value,ct:f.cidade.value,st:f.uf.value,zp:f.cep.value});
     var id='LM'+Date.now().toString().slice(-6),ped=lsGet('pedidos',{});ped[id]={itens:cart.itens(),total:cart.total(),quando:new Date().toLocaleString('pt-BR')};lsSet('pedidos',ped);cart.salvar([]);location.href='obrigado.html?pedido='+id}},
 obrigado:function(){var id=qs('pedido'),ped=(lsGet('pedidos',{}))[id];var box=$('#obrigadoBox');
   if(!ped){box.innerHTML='<p class="vazio">Pedido não encontrado. Faça uma compra de teste pela loja. <a href="produtos.html">Ver produtos →</a></p>';return}
   $('#numPedido').textContent='#'+id;$('#itensPedido').innerHTML=ped.itens.map(function(x){var p=prod(x.id);return '<div class="linha"><span>'+x.q+'× '+esc(p.titulo)+'</span><b>'+brl(p.preco*x.q)+'</b></div>'}).join('')+'<div class="linha total"><span>Total</span><b>'+brl(ped.total)+'</b></div>';
   var lab=(window.LOJA&&window.LOJA.lab)||{};var ja=window.LOJA.pedidoJaDisparado(id);
   if(ja&&!lab.recarregaDuplica){$('#avisoRecarga').innerHTML='🛡️ Esta página foi recarregada: o Purchase deste pedido <b>já foi enviado</b> e não dispara de novo. (Ligue “🔁” no laboratório para ver o erro.)';return}
   T('Purchase',{value:ped.total,currency:MOEDA,content_ids:ped.itens.map(function(x){return x.id}),contents:ped.itens.map(function(x){return{id:x.id,quantity:x.q}}),content_type:'product',num_items:ped.itens.reduce(function(s,x){return s+x.q},0)},{eventID:'pedido-'+id});
   window.LOJA.marcarPedido(id);if(lab.mocaBonita)$('#avisoRecarga').innerHTML='😍 Laboratório ligado: chegou uma moça bonita e o Pixel se distraiu. O pedido existe, mas o <b>Purchase não foi disparado</b>. Investigue no Modo aula!';else if(ja)$('#avisoRecarga').innerHTML='🔁 Laboratório ligado: a recarga disparou o Purchase <b>de novo</b> para o mesmo pedido.'},
 orcamento:function(){$('#formOrc').onsubmit=function(e){e.preventDefault();T('Lead',{content_name:'Orçamento: '+e.target.tipo.value,content_category:'orcamento'});$('#orcOk').textContent='✓ Pedido de orçamento enviado (de mentirinha). Veja o Lead no Modo aula.'}},
 oficina:function(){$$('[data-hora]').forEach(function(b){b.onclick=function(){$$('[data-hora]').forEach(function(x){x.classList.remove('on')});b.classList.add('on');$('#agendar').disabled=false;$('#agendar').setAttribute('data-sel',b.getAttribute('data-hora'))}});
   $('#agendar').onclick=function(){T('Schedule',{content_name:'Oficina de pintura de canecas',content_category:$('#agendar').getAttribute('data-sel')});$('#ofOk').textContent='✓ Agendado para '+$('#agendar').getAttribute('data-sel')+' (de mentirinha).'};
   $('#falar').onclick=function(){T('Contact',{content_name:'conversa sobre a oficina'});$('#ofOk').textContent='💬 Conversa iniciada (simulada: nenhuma mensagem é enviada).'}},
 aula:function(){var s=$('#statusPixel');if(s)s.innerHTML=window.LOJA&&window.LOJA.ao_vivo?'<span class="ok">● Pixel configurado: ID …'+String(C.pixelId).slice(-4)+'</span>':'<span class="warn">○ Modo simulação: o ID do Pixel ainda não foi colado em <code>assets/js/config.js</code>.</span>'},
 catalogo:function(){var base=new URL('.',location.href).href;var linhas=[];P.forEach(function(p){(p.variantes||[null]).forEach(function(v){linhas.push({id:v?v.id:p.id,item_group_id:v?p.id:'',title:p.titulo+(v?' - '+v.nome:''),description:p.descricao,availability:p.estoque,condition:'new',price:p.preco.toFixed(2)+' '+MOEDA,link:base+linkProd(p.id),image_link:new URL(p.img,base).href,brand:C.nomeLoja,size:v?v.nome:''})})});
   var cols=['id','item_group_id','title','description','availability','condition','price','link','image_link','brand','size'];
   $('#tabelaCat').innerHTML='<table><thead><tr>'+cols.map(function(c){return '<th>'+c+'</th>'}).join('')+'</tr></thead><tbody>'+linhas.map(function(l){return '<tr>'+cols.map(function(c){return '<td>'+(c==='image_link'?'<img src="'+esc(l[c])+'" alt=""/>':esc(l[c]))+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table>';
   var csvQ=function(s){s=String(s);return /[",\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s};
   var csv=cols.join(',')+'\n'+linhas.map(function(l){return cols.map(function(c){return csvQ(l[c])}).join(',')}).join('\n');
   var xe=function(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')};
   var xml='<?xml version="1.0" encoding="UTF-8"?>\n<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">\n<channel>\n<title>'+xe(C.nomeLoja)+'</title>\n<link>'+xe(base)+'</link>\n<description>Catálogo de treinamento</description>\n'+linhas.map(function(l){return '<item>\n'+cols.filter(function(c){return l[c]!==''}).map(function(c){return '  <g:'+c+'>'+xe(l[c])+'</g:'+c+'>'}).join('\n')+'\n</item>'}).join('\n')+'\n</channel>\n</rss>';
   function baixa(nome,txt,tipo){var b=new Blob([txt],{type:tipo}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=nome;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},500)}
   $('#baixaCsv').onclick=function(){baixa('catalogo-lojinha.csv',csv,'text/csv')};$('#baixaXml').onclick=function(){baixa('catalogo-lojinha.xml',xml,'application/xml')};
   $('#baseUrl').textContent=base;if(location.protocol==='file:')$('#avisoBase').style.display='block'}
};
function metaTags(p){var add=function(prop,val){var m=document.createElement('meta');m.setAttribute('property',prop);m.setAttribute('content',val);document.head.appendChild(m)};
  add('og:title',p.titulo);add('og:image',new URL(p.img,location.href).href);add('og:type','product');add('product:retailer_item_id',p.id);add('product:price:amount',p.preco.toFixed(2));add('product:price:currency',MOEDA);add('product:availability',p.estoque);add('product:brand',C.nomeLoja)}

topo();rodape();if(PAGINAS[pg])PAGINAS[pg]();
})();
