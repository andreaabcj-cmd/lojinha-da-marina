/* =====================================================================
   PIXEL + MODO AULA — Lojinha da Marina
   - Inicia o Meta Pixel (com consentimento e correspondência avançada)
   - LOJA.track(): todo evento da loja passa por aqui
   - F12: "aba Rede", lupa (tipo Data
     Advisor), código de cada evento, laboratório de falhas e dicas.
   ===================================================================== */
(function(){
'use strict';
if(window.__redirecionando)return;   // produto.html antigo indo para a página fixa
var C = window.LOJA_CONFIG || {};
var LIVE = /^\d{8,20}$/.test(String(C.pixelId||''));
var MOEDA = C.moeda || 'BRL';

/* ---------- armazenamento seguro ---------- */
function lsGet(k,d){try{var v=localStorage.getItem('loja.'+k);return v==null?d:JSON.parse(v)}catch(e){return d}}
function lsSet(k,v){try{localStorage.setItem('loja.'+k,JSON.stringify(v))}catch(e){}}
function ssGet(k,d){try{var v=sessionStorage.getItem('loja.'+k);return v==null?d:JSON.parse(v)}catch(e){return d}}
function ssSet(k,v){try{sessionStorage.setItem('loja.'+k,JSON.stringify(v))}catch(e){}}
/* F12 (a loja "por dentro", tipo F12) = só no LABORATÓRIO. Liga com ?aula=aba ou ?lab=1; desliga com ?lab=0. Vale para a aba do navegador. */
(function(){try{var q=new URLSearchParams(location.search);if(q.get('lab')==='0')ssSet('labLoja',false);else if(q.get('lab')==='1'||q.get('aula'))ssSet('labLoja',true)}catch(e){}})();
var LABON = !!ssGet('labLoja',false);
var LAB = lsGet('lab',{});
var consent = lsGet('consent',null);
var AM = lsGet('am',!LIVE);   // com o Pixel de verdade, a correspondência avançada começa DESLIGADA (alunos podem digitar dados reais no checkout)
var cliente = lsGet('cliente',null);
/* No modo simulação, o Pixel é o que foi criado no Gerenciador de Eventos SIMULADO (meta-eventos.html). */
var SIM_PID = (function(){try{var e=JSON.parse(localStorage.getItem('sim.eventos')||'null');var d=e&&e.datasets&&e.datasets[0];return d?d.id:null}catch(x){return null}})();
/* Dois Pixels, cada um no seu papel (regra: o Pixel de verdade nunca muda o que a aula mostra):
   - PID = o da AULA: o que o aluno criou no Gerenciador de Eventos simulado. É o que a extensão de treino, o F12 e o
     Eventos de teste simulado mostram, para os números baterem dentro da aula.
   - PID_REAL = o de verdade (config.js): recebe os eventos por trás, para a extensão real e o Gerenciador real. */
var PID_REAL = LAB.cadernoErrado ? (C.pixelIdErrado||'000000000000000') : C.pixelId;
var PID = LAB.cadernoErrado ? (C.pixelIdErrado||'000000000000000') : (SIM_PID || C.pixelId);
/* Caso de cliente em andamento (site-estado.js): o ID que aparece é o que está no código do site / no app. */
(function(){try{var f0=window.SITE_FX&&window.SITE_FX();if(f0&&f0.idPrincipal)PID=f0.idPrincipal}catch(e){}})();

/* ---------- SHA-256 (para MOSTRAR o hash na aula; o Pixel faz o próprio) ---------- */
function sha256(ascii){function rr(v,a){return(v>>>a)|(v<<(32-a))}var K=[],H=[],p=2,c=0,isP=function(n){for(var f=2;f*f<=n;f++)if(n%f===0)return false;return true};
  for(;c<64;p++)if(isP(p)){if(c<8)H[c]=(Math.pow(p,1/2)*4294967296)|0;K[c++]=(Math.pow(p,1/3)*4294967296)|0}
  var bytes=new TextEncoder().encode(ascii),words=[],i;for(i=0;i<bytes.length;i++)words[i>>2]|=bytes[i]<<((3-i%4)*8);
  words[bytes.length>>2]|=0x80<<((3-bytes.length%4)*8);var n=((bytes.length+8)>>6)*16+16;for(i=0;i<n;i++)words[i]=words[i]|0;words[n-1]=bytes.length*8;
  var h=H.slice();for(var j=0;j<n;j+=16){var w=words.slice(j,j+16),o=h.slice();for(i=0;i<64;i++){if(i>=16){var a15=w[i-15],a2=w[i-2];w[i]=(w[i-16]+(rr(a15,7)^rr(a15,18)^(a15>>>3))+w[i-7]+(rr(a2,17)^rr(a2,19)^(a2>>>10)))|0}
  var A=h[0],E=h[4],t1=(h[7]+(rr(E,6)^rr(E,11)^rr(E,25))+((E&h[5])^(~E&h[6]))+K[i]+w[i])|0,t2=((rr(A,2)^rr(A,13)^rr(A,22))+((A&h[1])^(A&h[2])^(h[1]&h[2])))|0;h.unshift((t1+t2)|0);h[4]=(h[4]+t1)|0;h.length=8}
  for(i=0;i<8;i++)h[i]=(h[i]+o[i])|0}return h.map(function(x){return('00000000'+(x>>>0).toString(16)).slice(-8)}).join('')}
function normaliza(c){var d=function(s){return String(s||'').replace(/\D/g,'')},l=function(s){return String(s||'').trim().toLowerCase()};
  var ud={};if(c.em)ud.em=l(c.em);if(c.ph){var p=d(c.ph);ud.ph=p.indexOf('55')===0?p:'55'+p}if(c.fn)ud.fn=l(c.fn).split(' ')[0];if(c.ln)ud.ln=l(c.ln);
  if(c.ct)ud.ct=l(c.ct).replace(/\s/g,'');if(c.st)ud.st=l(c.st);if(c.zp)ud.zp=d(c.zp);ud.country='br';if(c.em)ud.external_id=sha256(l(c.em)).slice(0,16);return ud}

/* ---------- 1) INICIAR O PIXEL ---------- */
var BLOQ = !!LAB.olhosTapados;
function fbqSafe(){if(!LIVE||BLOQ||typeof window.fbq!=='function')return false;try{window.fbq.apply(window,arguments)}catch(e){}return true}
if(LIVE&&!BLOQ){
  if(C.pedirConsentimento) fbqSafe('consent', consent==='grant'?'grant':'revoke');
  var ud = (AM&&cliente) ? normaliza(cliente) : null;
  if(ud) fbqSafe('init', PID_REAL, ud); else fbqSafe('init', PID_REAL);
}

/* ---------- 2) REGISTRAR EVENTOS ---------- */
var EXPL = {
  PageView:['Abriu uma página','O código base dispara este evento em toda página. É a base para públicos de visitantes.'],
  ViewContent:['Olhou um produto','Página de produto aberta. Leva o código do produto (content_ids): é o que liga o Pixel ao catálogo.'],
  Search:['Fez uma busca','Leva o texto buscado em search_string.'],
  AddToCart:['Pôs no carrinho','Disparou no CLIQUE do botão, e não ao abrir a página.'],
  AddToWishlist:['Salvou na lista de desejos','Disparou no clique do coração.'],
  InitiateCheckout:['Começou a pagar','Entrou no checkout. Leva quantidade, valor e produtos.'],
  AddPaymentInfo:['Escolheu o pagamento','Disparou ao escolher a forma de pagamento.'],
  Purchase:['Comprou','Compra concluída. value e currency são OBRIGATÓRIOS. O nº do pedido vai como eventID (para deduplicar com a API de Conversões).'],
  Lead:['Pediu orçamento','Enviou os dados para ser contatado depois.'],
  CompleteRegistration:['Concluiu um cadastro','Assinou a newsletter.'],
  Schedule:['Agendou','Marcou um horário na oficina.'],
  Contact:['Iniciou contato','Clicou para falar com a loja.']
};
var log = ssGet('log',[]);
var pageEvents = [];
function idEvento(nome){return nome.toLowerCase().slice(0,4)+'-'+Math.random().toString(16).slice(2,8)}
function trUrl(nome,params,eid,custom){var q=['id='+PID,'ev='+encodeURIComponent(nome),'dl='+encodeURIComponent(location.href.split('#')[0])];
  Object.keys(params||{}).forEach(function(k){var v=params[k];q.push('cd['+k+']='+encodeURIComponent(typeof v==='object'?JSON.stringify(v):v))});if(eid)q.push('eid='+eid);
  return 'https://www.facebook.com/tr/?'+q.join('&')}
function track(nome,params,opts){
  params=JSON.parse(JSON.stringify(params||{}));opts=opts||{};var custom=!!opts.custom;var nota=[];
  var FXs=null;try{FXs=window.SITE_FX&&window.SITE_FX()}catch(e){}
  if(FXs){trackFx(nome,params,opts,FXs);return}   // caso de cliente: o site de faz-de-conta decide o que é enviado
  if(nome==='Purchase'&&LAB.mocaBonita){registra({nome:nome,params:params,status:'perdido',motivo:'⛔ Laboratório: o acionador da compra falhou e o Purchase NÃO foi disparado.',custom:custom});return}
  if(nome==='Purchase'&&LAB.semPreco){delete params.value;delete params.currency;nota.push('💸 Laboratório: value e currency removidos.')}
  if(LAB.codigoErrado&&params.content_ids){params.content_ids=params.content_ids.map(function(id){var p=achaProduto(id);return p?p.titulo.toLowerCase():id});if(params.contents)params.contents.forEach(function(c){var p=achaProduto(c.id);if(p)c.id=p.titulo.toLowerCase()});nota.push('🏷️ Laboratório: códigos trocados pelo nome do produto.')}
  var eid=opts.eventID||idEvento(nome);var segurado=C.pedirConsentimento&&consent!=='grant';
  var enviado=fbqSafe(custom?'trackCustom':'track',nome,params,{eventID:eid});
  var status=!LIVE?'simulado':BLOQ?'bloqueado':segurado?'segurado':enviado?'enviado':'erro';
  registra({nome:nome,params:params,eid:eid,status:status,custom:custom,nota:nota.join(' ')});
  if(nome==='PageView'&&LAB.duplicado){var e2=idEvento(nome);fbqSafe('track','PageView',{}, {eventID:e2});registra({nome:'PageView',params:{},eid:e2,status:status,nota:'👯 Laboratório: o mesmo PageView foi disparado DE NOVO (Pixel duplicado).'})}
}
/* Caso de cliente: o evento da Loja vira as "cópias" que o site do cliente de fato enviaria (0, 1 ou várias; no navegador ou pelo servidor).
   O Pixel de verdade recebe só o evento normal, como sempre (a aula não muda). */
function trackFx(nome,params,opts,F){
  var eid=opts.eventID||idEvento(nome);
  fbqSafe(opts.custom?'trackCustom':'track',nome,params,{eventID:eid});
  var lista=window.SITE.copias(nome,params,F);
  lista.forEach(function(c){
    var eidc=(c.fonte==='servidor'||c.eidModo==='shop')?eid:idEvento(c.nome);
    var st=c.status;
    if(st==='enviado'&&c.fonte==='navegador'){   // consentimento (Meta: fbq('consent','revoke') antes do init segura os eventos até o aceite)
      if(F.consentGate&&consent!=='grant')st='segurado';
      else if(!F.consentGate&&C.pedirConsentimento&&consent!=='grant')st='antesAceite';
    }
    var u=null;if(c.ud&&cliente){var n=normaliza(cliente);if(c.ud==='all')u=n;else{u={};c.ud.forEach(function(k){if(n[k]!==undefined)u[k]=n[k]})}}   // correspondência avançada (hash): todos os campos ou só os do init manual
    registra({nome:c.nome,params:c.params,eid:eidc,status:st,custom:c.custom,pid:c.pid,fonte:c.fonte,ud:u,fx:true,nota:c.fonte==='servidor'?'🖥️ Enviado pelo servidor (API de Conversões).':''});
  });
}
function registra(ev){ev.t=new Date().toLocaleTimeString('pt-BR');ev.href=location.href.split('#')[0];if(!('ud' in ev))ev.ud=(AM&&cliente)?normaliza(cliente):null;ev.pagina=document.body?document.body.getAttribute('data-pagina'):'';ev.url=trUrl(ev.nome,ev.params,ev.eid,ev.custom);
  pageEvents.push(ev);log.unshift(ev);log=log.slice(0,60);ssSet('log',log);ui.novo(ev);
  try{document.dispatchEvent(new CustomEvent('loja:evento',{detail:ev}))}catch(e){}
  // entrega o evento ao Gerenciador de Eventos simulado (mesmo navegador, outra aba): só o que o Pixel de fato enviaria
  if(ev.status!=='perdido'&&ev.status!=='bloqueado'&&!(ev.fx&&ev.status==='segurado')){try{var f=JSON.parse(localStorage.getItem('sim.feed')||'[]');if(!Array.isArray(f))f=[];
    f.push({t:Date.now(),pid:ev.pid||PID,fonte:ev.fonte||'navegador',nome:ev.nome,params:ev.params,eid:ev.eid,href:ev.href,ud:ev.ud?Object.keys(ev.ud):[],custom:!!ev.custom,nota:ev.nota||''});
    localStorage.setItem('sim.feed',JSON.stringify(f.slice(-300)))}catch(e){}}}
function achaProduto(id){var ps=window.PRODUTOS||[];for(var i=0;i<ps.length;i++){var p=ps[i];if(p.id===id)return p;if(p.variantes)for(var j=0;j<p.variantes.length;j++)if(p.variantes[j].id===id)return p}return null}
function noCatalogo(id){var ps=window.PRODUTOS||[];for(var i=0;i<ps.length;i++){if(ps[i].id===id&&!ps[i].variantes)return true;if(ps[i].variantes)for(var j=0;j<ps[i].variantes.length;j++)if(ps[i].variantes[j].id===id)return true;if(ps[i].id===id)return true}return false}

window.LOJA = {
  track:function(n,p,o){track(n,p,o)},
  trackCustom:function(n,p,o){o=o||{};o.custom=true;track(n,p,o)},
  ao_vivo:LIVE, lab:LAB, moeda:MOEDA, pixelId:PID, bloqueado:BLOQ, sha256:sha256,
  eventos:function(){return {pagina:pageEvents.slice(), sessao:log.slice()}},
  salvarCliente:function(c){cliente=c;lsSet('cliente',c)},
  pedidoJaDisparado:function(id){var l=lsGet('pedidosDisparados',[]);return l.indexOf(id)>=0},
  marcarPedido:function(id){var l=lsGet('pedidosDisparados',[]);if(l.indexOf(id)<0){l.push(id);lsSet('pedidosDisparados',l)}}
};
/* Pixel de verdade: se a biblioteca da Meta não carregou neste navegador (bloqueador, extensão, rede), a extensão REAL
   não vê Pixel nenhum. A simulação NÃO muda (as aulas continuam iguais, mesmo em rede que bloqueia): só mostra um aviso. */
var BIB_FALHOU=false;
window.LOJA.bibliotecaFalhou=function(){return BIB_FALHOU};
if(LIVE&&!BLOQ)setTimeout(function(){if(!(window.fbq&&window.fbq.instance)){BIB_FALHOU=true;try{document.dispatchEvent(new CustomEvent('loja:evento'))}catch(e){}}},5000);

/* ---------- 3) DICAS DE AULA POR PÁGINA ---------- */
var DICAS = {
  inicio:{t:'Vitrine',d:'Ao abrir qualquer página, o Pixel dispara <b>PageView</b>. Experimente também “Montar kit presente”: é um <b>evento personalizado</b> (trackCustom).',ev:['PageView','MontouKitPresente (personalizado)']},
  produtos:{t:'Lista de produtos',d:'Busque algo: dispara <b>Search</b>. Clique no coração ♥: dispara <b>AddToWishlist</b>.',ev:['PageView','Search','AddToWishlist']},
  produto:{t:'Página do produto',d:'Ao abrir, dispara <b>ViewContent</b> com o código do produto (content_ids). Nas camisetas, compare antes e depois de escolher o tamanho: <b>product_group</b> × <b>product</b>. O botão do carrinho dispara <b>AddToCart</b> no clique.',ev:['PageView','ViewContent','AddToCart','AddToWishlist']},
  carrinho:{t:'Carrinho',d:'Esta página só dispara PageView. O AddToCart já aconteceu lá no botão do produto: o evento vem da AÇÃO, não da página.',ev:['PageView']},
  checkout:{t:'Checkout',d:'Ao abrir: <b>InitiateCheckout</b>. Ao escolher a forma de pagamento: <b>AddPaymentInfo</b>. Os dados do formulário alimentam a <b>correspondência avançada</b>, que o Pixel envia com hash.',ev:['PageView','InitiateCheckout','AddPaymentInfo']},
  obrigado:{t:'Página de obrigado',d:'Aqui dispara o <b>Purchase</b>, com value, currency, produtos e o nº do pedido como <b>eventID</b>. Recarregue a página: o site protege contra disparo duplicado (a não ser que o laboratório desligue a proteção).',ev:['PageView','Purchase']},
  orcamento:{t:'Orçamento',d:'Enviar o formulário dispara <b>Lead</b>: a pessoa deixou os dados para ser contatada.',ev:['PageView','Lead']},
  oficina:{t:'Oficina de pintura',d:'Agendar dispara <b>Schedule</b>. O botão de conversa dispara <b>Contact</b>.',ev:['PageView','Schedule','Contact']},
  aula:{t:'Guia do professor',d:'Roteiro de aula e checklist de implantação com a Meta.',ev:['PageView']},
  catalogo:{t:'Gerador de catálogo',d:'Gera o arquivo de catálogo (as “fichas”) com os MESMOS códigos que o Pixel envia.',ev:['PageView']}
};

/* ---------- 4) INTERFACE DO MODO AULA ---------- */
var ui = (function(){
  var aberto=lsGet('aulaAberta',false),aba=lsGet('aulaAba','rede'),pend=[];if(aba==='camera')aba='rede';
(function(){try{var q=new URLSearchParams(location.search).get('aula');if(q&&/^(rede|lupa|codigo|lab|dica)$/.test(q)){aba=q;aberto=true;lsSet('aulaAba',q);lsSet('aulaAberta',true)}}catch(e){}})();
  var root,badge,panel,toastBox,ready=false;
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function stChip(s){var m={enviado:['ok','enviado à Meta'],simulado:['sim','simulado'],segurado:['warn','segurado: sem consentimento'],antesAceite:['bad','enviado ANTES do aceite'],bloqueado:['bad','bloqueado'],perdido:['bad','NÃO disparou'],erro:['bad','erro']}[s]||['sim',s];return '<span class="ma-st '+m[0]+'">'+m[1]+'</span>'}
  function codigo(ev){if(ev.status==='perdido')return '// (nada foi enviado)';var p=JSON.stringify(ev.params,null,2);return "fbq('"+(ev.custom?'trackCustom':'track')+"', '"+ev.nome+"'"+(p!=='{}'?', '+p:(ev.eid?', {}':''))+(ev.eid?", {eventID: '"+ev.eid+"'}":'')+');'}
  function evHTML(ev,i){var ex=EXPL[ev.nome]||[ev.custom?'Evento personalizado':'Evento','Nome criado pela loja (trackCustom). Use só quando nenhum evento padrão descreve a ação.'];
    var params=Object.keys(ev.params||{}).map(function(k){return '<div><code>'+esc(k)+'</code> '+esc(JSON.stringify(ev.params[k]))+'</div>'}).join('')||'<div class="ma-mut">sem parâmetros</div>';
    return '<details class="ma-ev '+(ev.status==='perdido'?'lost':'')+'"'+(i===0?' open':'')+'><summary><b>'+esc(ev.nome)+'</b>'+(ev.custom?' <span class="ma-tag">personalizado</span>':'')+stChip(ev.status)+'<time>'+ev.t+'</time></summary>'+
      '<p class="ma-ex">📝 <b>'+esc(ex[0])+'.</b> '+esc(ex[1])+'</p>'+(ev.motivo?'<p class="ma-alert">'+esc(ev.motivo)+'</p>':'')+(ev.nota?'<p class="ma-alert warn">'+esc(ev.nota)+'</p>':'')+
      '<div class="ma-params">'+params+(ev.eid?'<div><code>eventID</code> '+esc(ev.eid)+'</div>':'')+'</div><pre class="ma-code">'+esc(codigo(ev))+'</pre></details>'}
  function render(){if(!panel)return;
    $$('.ma-tabs button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-aba')===aba)});
    var c=document.getElementById('maBody');var h='';
    if(aba==='rede'){var reais=redeReal();h='<p class="ma-intro">🌐 <b>A aba Rede do F12.</b> Quando o Pixel envia um evento, o navegador manda um pedido para <code>facebook.com/tr</code>. No computador de casa você veria isso no F12 › Rede, filtrando por <code>facebook.com/tr</code>.</p>'+
        '<h4>Pedidos reais saindo desta página</h4>'+(reais.length?reais.map(function(r){return '<div class="ma-req ok"><b>'+esc(r.ev)+'</b><span>'+esc(r.tipo)+'</span><code>'+esc(r.url.slice(0,180))+'…</code></div>'}).join(''):'<p class="ma-mut">'+(LIVE?'Nenhum pedido detectado ainda (ou o navegador não deixou ver).':'Modo simulação: nada é enviado de verdade enquanto o ID do Pixel não for configurado.')+'</p>')+
        '<h4>Como cada evento desta página apareceria</h4>'+pageEvents.map(function(ev){return '<div class="ma-req '+(ev.status==='perdido'?'bad':'')+'"><b>'+esc(ev.nome)+'</b>'+stChip(ev.status)+'<code>'+(ev.status==='perdido'?'— nenhum pedido saiu —':esc(ev.url))+'</code></div>'}).join('')+
        '<div class="ma-legend"><b>Como ler:</b> <code>id</code> = qual Pixel · <code>ev</code> = qual evento · <code>cd[…]</code> = parâmetros · <code>eid</code> = ID do evento.</div>'}
    else if(aba==='lupa'){h=lupa()}
    else if(aba==='codigo'){h='<p class="ma-intro">📄 <b>O código-fonte da página</b> (o mesmo do Ctrl+U). O trecho do Pixel fica no <code>&lt;head&gt;</code> de todas as páginas, como recomenda a Meta.</p><pre class="ma-code big" id="maFonte">carregando…</pre><p class="ma-mut">Os eventos de cada ação (botões, formulários) ficam no arquivo <code>assets/js/loja.js</code> e passam pelo <code>LOJA.track()</code>, que chama o <code>fbq()</code>. Veja o código de cada evento na aba Câmera.</p>';setTimeout(fonte,0)}
    else if(aba==='lab'){h=labHTML()}
    else if(aba==='dica'){var pg=document.body.getAttribute('data-pagina'),d=DICAS[pg]||{t:'Página',d:'',ev:[]};
      h='<div class="ma-dica"><span class="ma-tag big">Nesta página</span><h3>'+esc(d.t)+'</h3><p>'+d.d+'</p><h4>Eventos esperados aqui</h4><div class="ma-evs">'+d.ev.map(function(e){return '<span>'+esc(e)+'</span>'}).join('')+'</div>'+
        '<h4>Para conferir do lado da Meta</h4><ol class="ma-ol"><li>Portfólio da loja</li><li>Gerenciador de Eventos</li><li>Pixel da loja (confira o <b>ID</b>)</li><li>Aba <b>Eventos de teste</b></li></ol><p class="ma-mut">Se os menus mudarem de lugar, procure por “testar eventos” / “test events”.</p></div>'}
    c.innerHTML=h;var lb=document.getElementById('maLimpaLog');if(lb)lb.onclick=function(){log=[];ssSet('log',[]);render()};wireLab()}
  function lupa(){var st=!LIVE?['sim','Simulação','Configure o ID do Pixel em assets/js/config.js.']:BLOQ?['bad','Inativo','Pixel bloqueado no navegador (laboratório): nenhum evento sai.']:LAB.duplicado?['warn','Aviso','Código do Pixel duplicado: eventos em dobro.']:LAB.cadernoErrado?['warn','Aviso','O Pixel desta página não é o Pixel esperado da loja.']:['ok','Ativo','Pixel detectado e enviando eventos.'];
    var linhas=pageEvents.map(function(ev){var prob=[];if(ev.status==='perdido')prob.push('não disparou');if(ev.nome==='Purchase'&&ev.status!=='perdido'&&(ev.params.value==null||!ev.params.currency))prob.push('sem value/currency');
      (ev.params.content_ids||[]).forEach(function(id){if(!noCatalogo(id))prob.push('“'+id+'” não está no catálogo')});
      var cls=prob.length?(ev.status==='perdido'?'bad':'warn'):'ok';return '<div class="ma-lrow '+cls+'"><b>'+esc(ev.nome)+'</b><span>'+(prob.length?esc(prob.join(' · ')):'Ativo')+'</span></div>'}).join('');
    var cat=pageEvents.filter(function(e){return e.params&&e.params.content_ids}).map(function(e){return e.params.content_ids.map(function(id){return '<div class="ma-lrow '+(noCatalogo(id)?'ok':'bad')+'"><code>'+esc(id)+'</code><span>'+(noCatalogo(id)?'produto encontrado no catálogo':'não encontrado no catálogo')+'</span></div>'}).join('')}).join('');
    var amH='';if(AM&&cliente){var n=normaliza(cliente);amH='<h4>Correspondência avançada</h4>'+Object.keys(n).map(function(k){return '<div class="ma-lrow ok"><code>'+k+'</code><span title="'+esc(n[k])+'">'+(k==='country'||k==='external_id'?esc(n[k]):sha256(n[k]).slice(0,22)+'…')+'</span></div>'}).join('')+'<p class="ma-mut">O Pixel aplica o hash SHA-256 antes de enviar: a Meta nunca recebe o e-mail “às claras”.</p>'}
    return '<p class="ma-intro">🔍 <b>Lupa:</b> o que a extensão <b>Meta Ads Data Advisor</b> (antigo Pixel Helper) mostraria nesta página.</p>'+
      '<div class="ma-pixel"><div><b>Pixel '+esc(String(PID).replace(/^(\d{4})\d+(\d{4})$/,'$1…$2'))+'</b><span class="ma-st '+st[0]+'">'+st[1]+'</span></div><p class="ma-mut">'+st[2]+'</p></div>'+
      '<h4>Eventos desta página</h4>'+(linhas||'<p class="ma-mut">nenhum</p>')+(cat?'<h4>Catálogo</h4>'+cat:'')+amH}
  // falhas do laboratório: nomes técnicos, sem analogias (pedido do André, 15/10)
  var LABS=[['mocaBonita','⛔','Purchase não dispara','O pedido é criado, mas o acionador da compra falha e o evento Purchase não é enviado.'],
    ['duplicado','👯','Pixel instalado duas vezes','O código-base está duas vezes na página: cada PageView é enviado em dobro.'],
    ['semPreco','💸','Purchase sem value e currency','A compra é enviada sem os parâmetros de valor e moeda.'],
    ['codigoErrado','🏷️','content_ids diferentes do catálogo','Os eventos usam o nome do produto (ex.: “caneca azul”) em vez do ID do catálogo (CANECA_01).'],
    ['cadernoErrado','🆔','ID de Pixel errado','O código usa outro ID de Pixel: os eventos vão para um Pixel diferente do da loja.'],
    ['olhosTapados','🚫','Pixel bloqueado no navegador','Um bloqueador impede o carregamento do Pixel: nenhum evento sai do navegador.'],
    ['recarregaDuplica','🔁','Purchase repetido ao recarregar','A página de confirmação envia o Purchase de novo a cada recarga.']];
  function labHTML(){return '<p class="ma-intro">🧪 <b>Laboratório de falhas.</b> Ligue uma desculpa do Pixel, mostre o problema na tela (Rede, Lupa) e no Gerenciador de Eventos, e depois desligue. <b>Algumas valem a partir da próxima página aberta.</b></p>'+
    LABS.map(function(l){return '<label class="ma-lab '+(LAB[l[0]]?'on':'')+'"><input type="checkbox" data-lab="'+l[0]+'"'+(LAB[l[0]]?' checked':'')+'><span class="ma-sw"></span><span><b>'+l[1]+' '+esc(l[2])+'</b><small>'+esc(l[3])+'</small></span></label>'}).join('')+
    '<h4>Configurações da aula</h4><label class="ma-lab '+(AM?'on':'')+'"><input type="checkbox" data-am'+(AM?' checked':'')+'><span class="ma-sw"></span><span><b>💳 Correspondência avançada</b><small>Envia os dados de teste do checkout (com hash) no init do Pixel.</small></span></label>'+
    '<div class="ma-row"><button class="ma-btn ghost" id="maCookies">Mostrar o banner de cookies de novo</button><button class="ma-btn ghost" id="maReset">Desligar todo o laboratório</button><button class="ma-btn ghost" id="maZerar">Zerar carrinho e pedidos</button></div>'}
  function wireLab(){$$('[data-lab]').forEach(function(i){i.onchange=function(){LAB[i.getAttribute('data-lab')]=i.checked;lsSet('lab',LAB);toast('🧪 Laboratório '+(i.checked?'ligado':'desligado')+'. Recarregue ou navegue para ver o efeito.');render();faixa()}});
    var am=document.querySelector('[data-am]');if(am)am.onchange=function(){AM=am.checked;lsSet('am',AM);render()};
    var b=document.getElementById('maCookies');if(b)b.onclick=function(){consent=null;lsSet('consent',null);banner()};
    b=document.getElementById('maReset');if(b)b.onclick=function(){LAB={};lsSet('lab',{});render();faixa();toast('Laboratório desligado. Recarregue a página.')};
    b=document.getElementById('maZerar');if(b)b.onclick=function(){lsSet('carrinho',[]);lsSet('pedidosDisparados',[]);lsSet('pedidos',{});toast('Carrinho e pedidos zerados.');if(window.LOJA_UI)window.LOJA_UI.atualizaCarrinho()}}
  function fonte(){var el=document.getElementById('maFonte');if(!el)return;var mostra=function(t){var a=t.indexOf('<!-- Meta Pixel Code -->'),z=t.indexOf('<!-- End Meta Pixel Code -->');var trecho=a>=0?t.slice(a,z+28):t.slice(0,1500);trecho=trecho.replace(/\/\* O init[\s\S]*?\*\/\s*/,"fbq('init', '"+PID+"');\nfbq('track', 'PageView');\n").replace(/<script src="assets\/js\/pixel-aula\.js[^"]*"><\/script>\s*/,'');el.innerHTML=esc(trecho).replace(/(&lt;!-- (End )?Meta Pixel Code --&gt;)/g,'<mark class="ma-m-com">$1</mark>').replace(/(fbq\(&#39;init&#39;[^)]*\)|fbq\('init'[^)]*\))/g,'<mark class="ma-m-init">$1</mark>').replace(/(fbq\(&#39;track&#39;, &#39;PageView&#39;\)|fbq\('track', 'PageView'\))/g,'<mark class="ma-m-pv">$1</mark>')};
    try{fetch(location.href).then(function(r){return r.text()}).then(mostra).catch(function(){mostra(document.documentElement.outerHTML)})}catch(e){mostra(document.documentElement.outerHTML)}}
  function redeReal(){try{return performance.getEntriesByType('resource').filter(function(r){return /facebook\.com\/tr|fbevents\.js|signals\/config/.test(r.name)}).map(function(r){var m=r.name.match(/[?&]ev=([^&]+)/);return{url:r.name,ev:m?decodeURIComponent(m[1]):(/fbevents/.test(r.name)?'fbevents.js (biblioteca)':'configuração do Pixel'),tipo:r.initiatorType}})}catch(e){return[]}}
  function $$(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
  // na loja normal, os avisos de disparo aparecem só durante um tutorial guiado (ajudam quem está aprendendo; fora dele, o Consultor de Dados mostra)
  function emTour(){try{return !!sessionStorage.getItem('tour.ativo')||/[?&]tour=/.test(location.search)||document.body.classList.contains('em-tour')}catch(e){return false}}
  function toast(msg){if(!toastBox)return;var t=document.createElement('div');t.className='ma-toast';t.innerHTML=msg;toastBox.appendChild(t);setTimeout(function(){t.classList.add('out')},3600);setTimeout(function(){t.remove()},4200)}
  function faixa(){var f=document.getElementById('maFaixa');if(!f)return;var ativos=LABS.filter(function(l){return LAB[l[0]]}).map(function(l){return l[1]});
    f.innerHTML='<a class="ma-plat" href="index.html">🎓 Plataforma</a><span>🧪 Loja de demonstração para treinamento · nenhuma compra é real</span><span class="ma-pix '+(LIVE?'live':'sim')+'">'+(LIVE?'● Pixel ao vivo':'○ Pixel em modo simulação')+'</span>'+(ativos.length?'<span class="ma-pix lab">Falhas ligadas: '+ativos.join(' ')+'</span>':'')+(LABON?'<a class="ma-pix lab" href="?lab=0" title="Voltar à loja normal">🔬 Modo laboratório · sair</a>':'')+
      '<button class="ma-ext" id="maExt" title="Consultor de Dados de Anúncios da Meta (simulação da extensão)"><span class="ma-ext-ic"></span>Consultor de Dados <i>simulação</i><b id="maExtBadge"></b></button>';try{document.dispatchEvent(new CustomEvent('loja:faixa'))}catch(e){}}
  function banner(){if(!C.pedirConsentimento||consent)return;if(document.getElementById('maCookie'))return;var b=document.createElement('div');b.id='maCookie';b.className='ma-cookie';
    b.innerHTML='<div><b>🍪 Cookies desta loja</b><p>Usamos o Meta Pixel para medir visitas e compras. Você escolhe. <span class="ma-mut">(Em aula: recusar mostra o Pixel “segurando” os eventos.)</span></p></div><div class="ma-row"><button class="ma-btn ghost" data-c="revoke">Recusar</button><button class="ma-btn" data-c="grant">Aceitar</button></div>';
    document.body.appendChild(b);$$('#maCookie [data-c]').forEach(function(x){x.onclick=function(){consent=x.getAttribute('data-c');lsSet('consent',consent);fbqSafe('consent',consent);b.remove();toast(consent==='grant'?'🍪 Aceito: o Pixel pode enviar os eventos à Meta.':'🙏 Recusado: o Pixel não envia os eventos à Meta (e está certo).')}})}
  function build(){root=document.createElement('div');root.className='ma-root';
    if(!LABON){root.innerHTML='<div class="ma-faixa" id="maFaixa"></div><div class="ma-toasts" id="maToasts"></div>';document.body.insertBefore(root,document.body.firstChild);toastBox=document.getElementById('maToasts');faixa();banner();ready=true;pend=[];return}
    root.innerHTML='<div class="ma-faixa" id="maFaixa"></div><button class="ma-fab" id="maFab" title="F12 (simulação das ferramentas do desenvolvedor)"><span class="ma-mascote"></span><span>F12 <i class="ma-sim">simulação</i></span><b class="ma-badge" id="maBadge">0</b></button>'+
      '<aside class="ma-panel" id="maPanel" aria-label="F12 (simulação)"><header><div><b>🛠️ F12 <i class="ma-sim">simulação</i></b><small>ferramentas do desenvolvedor: o que o Pixel está fazendo</small></div><button id="maFecha" title="Fechar">✕</button></header>'+
      '<nav class="ma-tabs"><button data-aba="rede">🌐 Rede</button><button data-aba="lupa">🔍 Lupa</button><button data-aba="codigo">📄 Código</button><button data-aba="lab">🧪 Lab</button><button data-aba="dica">💡 Dica</button></nav><div class="ma-body" id="maBody"></div></aside><div class="ma-toasts" id="maToasts"></div>';
    document.body.insertBefore(root,document.body.firstChild);panel=document.getElementById('maPanel');badge=document.getElementById('maBadge');toastBox=document.getElementById('maToasts');
    document.querySelector('.ma-mascote').innerHTML=mascote();
    document.getElementById('maFab').onclick=function(){aberto=!aberto;lsSet('aulaAberta',aberto);panel.classList.toggle('open',aberto);if(aberto)try{document.dispatchEvent(new CustomEvent('loja:ferramenta',{detail:'aula'}))}catch(e){}render()};
    document.addEventListener('loja:ferramenta',function(e){if(e.detail!=='aula'&&aberto){aberto=false;lsSet('aulaAberta',false);panel.classList.remove('open')}});
    document.getElementById('maFecha').onclick=function(){aberto=false;lsSet('aulaAberta',false);panel.classList.remove('open')};
    $$('.ma-tabs button').forEach(function(b){b.onclick=function(){aba=b.getAttribute('data-aba');lsSet('aulaAba',aba);render()}});
    panel.classList.toggle('open',aberto);try{if(new URLSearchParams(location.search).get('aula'))document.getElementById('maFab').classList.add('chama')}catch(e){}faixa();banner();ready=true;badge.textContent=pageEvents.length;pend.forEach(function(e){toast(msgEv(e))});pend=[];render();
    setTimeout(function(){if(aba==='rede'&&aberto)render()},2500)}
  function mascote(){var rows=['....uuuuuuu.....','...uuuuuuuuuU...','..UUUUUUUUUUUUU.','...dddddddddd...','...dssssssssd...','...ssessssesss..','...ssssssssss...','...sssmmmmsss...','....ssssssss....','...wwwwwwwwww...','..wwaawwwwaaww..','..swaaaaaaaapwwp','..swaaaaaaaapwkp','...waaaaaaaapppp','...aaaaaaaaaa...'];
    var P={u:'#2F6FD6',U:'#1F4FA8',d:'#2A1E1A',s:'#F4CBA2',e:'#22304A',m:'#D0605A',w:'#fff',a:'#1F3A6E',p:'#A0703A',k:'#22304A'},o='';rows.forEach(function(r,y){for(var x=0;x<r.length;x++){var c=r[x];if(c!=='.')o+='<rect x="'+x*2+'" y="'+y*2+'" width="2" height="2" fill="'+P[c]+'"/>'}});
    return '<svg width="32" height="30" shape-rendering="crispEdges">'+o+'</svg>'}
  function msgEv(ev){return ev.status==='perdido'?'😍 <b>Purchase</b> não foi disparado!':'📡 Pixel: <b>'+ev.nome+'</b> <small>'+({enviado:'enviado à Meta',simulado:'simulado',segurado:'segurado (sem consentimento)',bloqueado:'bloqueado'}[ev.status]||'')+'</small>'}
  function painel(on,ab){if(!panel)return;if(ab){aba=ab;lsSet('aulaAba',ab)}aberto=!!on;lsSet('aulaAberta',aberto);panel.classList.toggle('open',aberto);if(aberto)try{document.dispatchEvent(new CustomEvent('loja:ferramenta',{detail:'aula'}))}catch(e){}render()}
  return {painel:painel,novo:function(ev){if(!LABON){if(emTour())setTimeout(function(){toast(msgEv(ev))},400);return}if(!ready){pend.push(ev);return}badge.textContent=pageEvents.length;badge.classList.remove('pop');void badge.offsetWidth;badge.classList.add('pop');toast(msgEv(ev));if(aberto)render()},
    build:build,toast:function(m){toast(m)}};
})();

/* ---------- 5) COMEÇAR ---------- */
track('PageView');
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ui.build);else ui.build();
window.LOJA.toast=ui.toast;
window.LOJA.painel=ui.painel;   // tutoriais: LOJA.painel(true,'codigo') abre o F12 na aba; LOJA.painel(false) fecha
})();
