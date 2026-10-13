"""Gera as páginas HTML da Lojinha com o MESMO cabeçalho (e o mesmo código do Pixel) em todas.
Uso: python _ferramentas/gerar_paginas.py   (a partir da pasta do site)"""
import os
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

HEAD = '''<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>{titulo} · Lojinha da Marina</title>
<meta name="description" content="Loja fictícia de treinamento sobre o Meta Pixel: canecas, camisetas e ecobags."/>
<link rel="icon" href="assets/img/caneca_01.png"/>
<link rel="stylesheet" href="assets/css/loja.css"/>
<script src="assets/js/config.js"></script>
<script src="assets/js/produtos.js"></script>
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{{if(f.fbq)return;n=f.fbq=function(){{n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)}};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
/* O init e o PageView ficam em assets/js/pixel-aula.js, que lê o ID
   de assets/js/config.js. No site real seria:
   fbq('init', 'SEU_PIXEL_ID');
   fbq('track', 'PageView');                                        */
</script>
<script src="assets/js/pixel-aula.js"></script>
<!-- End Meta Pixel Code -->
</head>
<body data-pagina="{pagina}">
<div id="topo"></div>
<main class="wrap">
{corpo}
</main>
<div id="rodape"></div>
<script src="assets/js/loja.js"></script>
</body>
</html>
'''

PAGINAS = {
'index': ('Início', 'inicio', '''
<section class="hero">
  <div>
    <span class="selo-aula">🎓 Loja de treinamento · Meta Pixel</span>
    <h1>Canecas, camisetas e ecobags com <span style="color:var(--blue)">boas ideias</span>.</h1>
    <p class="lead">Feitos à mão na Lojinha da Marina. Navegue, ponha no carrinho e “compre”: cada passo é anotado pelo Pixel. Abra o <b>Modo aula</b> (canto inferior direito) para ver tudo acontecendo.</p>
    <div class="acoes"><a class="btn grande" href="produtos.html">Ver produtos</a><a class="btn ghost grande" href="aula.html">🎓 Guia da aula</a></div>
  </div>
  <div class="vitrine"><img src="assets/img/caneca_01.png" alt="Caneca azul"/><img src="assets/img/camiseta_02.png" alt="Camiseta"/><img src="assets/img/ecobag_03.png" alt="Ecobag"/><img src="assets/img/caneca_02.png" alt="Caneca amarela"/><img src="assets/img/bone_01.png" alt="Boné"/><img src="assets/img/caneca_03.png" alt="Caneca Boas Ideias"/></div>
</section>
<div class="faixas">
  <div class="faixa">🎁<b>Monte um kit presente</b><p>3 itens com papel especial. (Este botão dispara um <b>evento personalizado</b>.)</p><button class="btn amarelo" id="kit">Montar kit presente</button></div>
  <div class="faixa">🎨<b>Oficina de pintura</b><p>Pinte sua própria caneca. Agende um horário.</p><a class="btn ghost" href="oficina.html">Agendar</a></div>
  <div class="faixa">💍<b>Canecas para casamento</b><p>Personalizadas com o nome dos noivos. Peça um orçamento.</p><a class="btn ghost" href="orcamento.html">Pedir orçamento</a></div>
</div>
<h2>Mais vendidos</h2>
<div class="grade" id="destaques"></div>
'''),
'produtos': ('Produtos', 'produtos', '''
<div class="filtros" id="filtros"></div>
<h1 id="tituloLista" style="margin-top:18px">Produtos</h1>
<div class="grade" id="lista"></div>
'''),
'produto': ('Produto', 'produto', '''
<div class="produto" id="produto"></div>
<h2>Você também pode gostar</h2>
<div class="grade" id="relacionados"></div>
'''),
'carrinho': ('Carrinho', 'carrinho', '''
<h1 style="margin-top:26px">Seu carrinho</h1>
<div id="carrinhoBox"></div>
'''),
'checkout': ('Pagamento', 'checkout', '''
<div id="checkoutBox"><div class="duas">
  <form class="painel" id="formCheckout">
    <h1>Pagamento</h1>
    <p class="alerta">⚠️ Loja de demonstração: <b>não use dados reais</b>. Os campos já vêm com dados de teste, e nenhum pagamento é feito.</p>
    <div class="campos">
      <label>Nome<input name="nome" value="Ana" required/></label><label>Sobrenome<input name="sobrenome" value="Teste" required/></label>
      <label class="inteiro">E-mail<input type="email" name="email" value="ana.teste@exemplo.com" required/></label>
      <label>Telefone<input name="tel" value="(11) 90000-0000"/></label><label>CEP<input name="cep" value="01000-000"/></label>
      <label>Cidade<input name="cidade" value="São Paulo"/></label><label>UF<input name="uf" value="SP" maxlength="2"/></label>
    </div>
    <h3 style="margin-top:18px">Forma de pagamento (simulada)</h3>
    <div class="pags"><label><input type="radio" name="pag" value="pix"/> Pix (simulado)</label><label><input type="radio" name="pag" value="cartao"/> Cartão (simulado · sem digitar dados)</label><label><input type="radio" name="pag" value="boleto"/> Boleto (simulado)</label></div>
    <p class="warn" id="erroPag"></p>
    <p class="alerta azul">💳 Os dados de teste acima viram a <b>correspondência avançada</b> (o “cartão fidelidade”): o Pixel envia com hash, nunca às claras. Veja na aba 🔍 Lupa do Modo aula.</p>
    <button class="btn grande" style="width:100%">Finalizar pedido (simulado)</button>
  </form>
  <aside class="painel"><h3>Resumo</h3><div id="resumoPedido"></div></aside>
</div></div>
'''),
'obrigado': ('Pedido confirmado', 'obrigado', '''
<div class="obrigado" id="obrigadoBox">
  <div class="check">✓</div><h1>Pedido confirmado!</h1><p>Pedido <b id="numPedido"></b> · obrigado por comprar na Lojinha (de mentirinha 😉).</p>
  <div class="painel"><div id="itensPedido"></div></div>
  <p class="alerta azul" id="avisoRecarga" style="max-width:620px;margin:10px auto">🛒 Esta página disparou o <b>Purchase</b>. Abra o Modo aula para ver o valor, a moeda e o nº do pedido (eventID).</p>
  <p><button class="btn ghost" onclick="location.reload()">↻ Recarregar esta página (teste de duplicidade)</button> <a class="btn" href="produtos.html">Continuar comprando</a></p>
</div>
'''),
'orcamento': ('Orçamento', 'orcamento', '''
<div class="duas">
  <form class="painel" id="formOrc">
    <h1>Peça um orçamento</h1><p>Canecas personalizadas para casamentos, empresas e festas.</p>
    <p class="alerta">⚠️ Use dados de teste. Nada é enviado de verdade.</p>
    <div class="campos">
      <label>Nome<input value="Bruno Teste" required/></label><label>E-mail<input type="email" value="bruno.teste@exemplo.com" required/></label>
      <label class="inteiro">Tipo<select name="tipo"><option>Casamento</option><option>Empresa</option><option>Aniversário</option></select></label>
      <label class="inteiro">Detalhes<textarea rows="3">50 canecas com o nome dos noivos.</textarea></label>
    </div>
    <button class="btn grande" style="margin-top:14px">Enviar pedido de orçamento</button><p class="ok" id="orcOk"></p>
  </form>
  <aside class="painel"><h3>🎓 O que acontece aqui</h3><p>Enviar o formulário dispara o evento <code>Lead</code>: a pessoa deixou os dados para a loja entrar em contato.</p><p>É diferente de <code>Contact</code>, quando a pessoa <b>inicia</b> a conversa (veja na página da oficina).</p></aside>
</div>
'''),
'oficina': ('Oficina de pintura', 'oficina', '''
<div class="duas">
  <div class="painel">
    <h1>🎨 Oficina de pintura de canecas</h1><p>Duas horas, tinta inclusa, você leva a caneca para casa.</p>
    <h3>Escolha um horário (simulado)</h3>
    <div class="horas"><button data-hora="sábado 10h">Sábado 10h</button><button data-hora="sábado 14h">Sábado 14h</button><button data-hora="domingo 10h">Domingo 10h</button></div>
    <button class="btn grande" id="agendar" disabled>Agendar</button> <button class="btn ghost grande" id="falar">💬 Falar com a loja</button>
    <p class="ok" id="ofOk"></p>
  </div>
  <aside class="painel"><h3>🎓 O que acontece aqui</h3><p><code>Schedule</code>: a pessoa marcou um horário.</p><p><code>Contact</code>: a pessoa iniciou uma conversa (aqui, simulada).</p></aside>
</div>
'''),
'aula': ('Guia da aula', 'aula', '''
<div class="aula">
  <h1 style="margin-top:26px">🎓 Guia da aula</h1>
  <p id="statusPixel"></p>
  <p>Esta loja existe para ensinar o <b>Meta Pixel</b> na prática. Abra o <b>Modo aula</b> no canto inferior direito: ele mostra o que normalmente só se vê com o F12 ou com extensões, que nos computadores do trabalho ficam bloqueados.</p>
  <h2>As 6 abas do Modo aula</h2>
  <div class="mapa-aula">
    <div><b>📹 Câmera</b><p>Cada evento disparado, com parâmetros, explicação e o código <code>fbq()</code> que rodou.</p></div>
    <div><b>🌐 Rede</b><p>A “aba Rede” sem F12: os pedidos reais para <code>facebook.com/tr</code> e como ler cada parte.</p></div>
    <div><b>🔍 Lupa</b><p>O que o Meta Ads Data Advisor mostraria: status do Pixel, eventos, catálogo e correspondência avançada.</p></div>
    <div><b>📄 Código</b><p>O código do Pixel no &lt;head&gt; desta página, sem precisar do “Exibir código-fonte”.</p></div>
    <div><b>🧪 Lab</b><p>As desculpas do anotador: quebre o Pixel de propósito e mostre o problema.</p></div>
    <div><b>💡 Dica</b><p>O que acontece na página atual e como conferir no Gerenciador de Eventos.</p></div>
  </div>
  <h2>Roteiro sugerido (ligado ao Aulão de Pixel)</h2>
  <ol>
    <li><b>O anotador:</b> abra a <a href="index.html">vitrine</a> e mostre o PageView na Câmera e no Testar eventos.</li>
    <li><b>As anotações:</b> abra um <a href="produto.html?id=CANECA_01">produto</a> (ViewContent) e ponha no carrinho (AddToCart, no clique).</li>
    <li><b>Parâmetros:</b> faça uma compra completa até o <b>obrigado</b>: Purchase com value, currency, produtos e eventID.</li>
    <li><b>Variantes:</b> numa <a href="produto.html?id=CAMISETA_02">camiseta</a>, compare o ViewContent antes e depois de escolher o tamanho.</li>
    <li><b>Outros eventos:</b> busca (Search), coração (AddToWishlist), <a href="orcamento.html">orçamento</a> (Lead), <a href="oficina.html">oficina</a> (Schedule, Contact), newsletter (CompleteRegistration), kit presente (personalizado).</li>
    <li><b>Consentimento:</b> recuse os cookies e mostre o Pixel “segurando” os eventos.</li>
    <li><b>Correspondência avançada:</b> no checkout, mostre na Lupa os dados com hash.</li>
    <li><b>Catálogo:</b> abra o <a href="catalogo.html">gerador de catálogo</a> e compare os IDs com os eventos.</li>
    <li><b>Problemas:</b> no 🧪 Lab, ligue uma desculpa (ex.: a moça bonita 😍), refaça a compra e investigue.</li>
  </ol>
  <h2>Checklist de implantação com a Meta</h2>
  <ul class="check-lista">
    <li>☐ Criar um Pixel (conjunto de dados) <b>só para aulas</b> no portfólio.</li>
    <li>☐ Colar o ID em <code>assets/js/config.js</code> (campo <code>pixelId</code>).</li>
    <li>☐ Publicar o site (ex.: GitHub Pages) e abrir o endereço público.</li>
    <li>☐ Gerenciador de Eventos › Pixel › <b>Testar eventos</b>: navegar na loja e ver os eventos chegando.</li>
    <li>☐ Conferir a faixa amarela no topo do site: “● Pixel ao vivo”.</li>
    <li>☐ Gerar o catálogo em <a href="catalogo.html">Catálogo</a> e criar o catálogo no Gerenciador de Comércio (por arquivo ou URL do arquivo).</li>
    <li>☐ Conectar o catálogo ao Pixel e acompanhar a correspondência dos IDs.</li>
    <li>☐ (Opcional) Instalar a extensão Meta Ads Data Advisor num computador de casa para comparar com a 🔍 Lupa.</li>
    <li>☐ (Fase 2) API de Conversões com servidor próprio, para ensinar a deduplicação de verdade.</li>
  </ul>
</div>
'''),
'catalogo': ('Catálogo', 'catalogo', '''
<div class="aula">
  <h1 style="margin-top:26px">🗂️ Catálogo da loja (as “fichas”)</h1>
  <p>Cada linha é a ficha de um produto. O <code>id</code> de cada ficha é <b>exatamente</b> o código que o Pixel envia em <code>content_ids</code>. As camisetas têm uma ficha por tamanho, ligadas pelo <code>item_group_id</code>.</p>
  <p class="alerta" id="avisoBase" style="display:none">⚠️ Você abriu o arquivo direto do computador. Os links do catálogo só valem depois que o site estiver publicado num endereço público (https).</p>
  <p>Endereço base usado nos links: <code id="baseUrl"></code></p>
  <p><button class="btn" id="baixaCsv">⬇ Baixar catálogo (.csv)</button> <button class="btn ghost" id="baixaXml">⬇ Baixar catálogo (.xml)</button></p>
  <div class="tabela" id="tabelaCat"></div>
  <h2>Como usar na aula</h2>
  <ol>
    <li>Publique o site e abra esta página pelo endereço público.</li>
    <li>Baixe o arquivo (CSV ou XML).</li>
    <li>No <b>Gerenciador de Comércio</b>, crie um catálogo de comércio eletrônico e adicione itens por <b>arquivo</b> (envio) ou por <b>URL</b> (agendado).</li>
    <li>Conecte o catálogo ao Pixel da loja e confira a correspondência dos IDs.</li>
  </ol>
  <p class="alerta azul">💡 Para o laboratório 🏷️ “código errado”: ligue no Modo aula e abra um produto. A Lupa vai mostrar “não encontrado no catálogo”.</p>
</div>
'''),
}

for arq, (titulo, pagina, corpo) in PAGINAS.items():
    with open(os.path.join(RAIZ, arq + '.html'), 'w', encoding='utf-8') as f:
        f.write(HEAD.format(titulo=titulo, pagina=pagina, corpo=corpo.strip()))
    print('ok', arq + '.html')
