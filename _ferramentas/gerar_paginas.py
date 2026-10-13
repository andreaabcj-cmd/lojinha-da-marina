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
<meta name="description" content="{descricao}"/>{meta}
<link rel="icon" href="assets/img/caneca_01.png"/>
<link rel="stylesheet" href="assets/css/loja.css"/>{extra}
<script src="assets/js/personagens.js"></script>
<script src="assets/js/porta.js"></script>
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
<script src="assets/js/data-advisor.js" defer></script>
</head>
<body data-pagina="{pagina}"{bodyattr}>
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
'loja': ('Início', 'inicio', '''
<section class="hero">
  <div>
    <span class="selo-aula">🎓 Loja de treinamento · Meta Pixel</span>
    <h1>Canecas, camisetas e ecobags com <span style="color:var(--blue)">boas ideias</span>.</h1>
    <p class="lead">Feitos à mão na Lojinha da Marina. Navegue, ponha no carrinho e “compre”: cada passo vira um evento do Pixel. Abra o <b>Modo aula</b> (canto inferior direito) para ver tudo acontecendo.</p>
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
  <p class="alerta azul">🕹️ <b>Simulador:</b> pratique no <a href="meta-eventos.html">Gerenciador de Eventos de treino</a> (criar o Pixel, Testar eventos, Diagnóstico). Os eventos da Lojinha chegam nele ao vivo, nada vai para a Meta.</p>
  <p class="alerta azul">🎬 <b>Novo:</b> <a href="tutoriais.html">Tutoriais passo a passo</a> com prints reais da Meta: criar o portfólio, o Pixel, testar eventos e montar o catálogo.</p>
  <h2>As 6 abas do Modo aula</h2>
  <div class="mapa-aula">
    <a href="loja.html?aula=camera"><b>📹 Câmera</b><p>Cada evento disparado, com parâmetros, explicação e o código <code>fbq()</code> que rodou.</p><span class="abrir">Abrir →</span></a>
    <a href="loja.html?aula=rede"><b>🌐 Rede</b><p>A “aba Rede” sem F12: os pedidos reais para <code>facebook.com/tr</code> e como ler cada parte.</p><span class="abrir">Abrir →</span></a>
    <a href="loja.html?aula=lupa"><b>🔍 Lupa</b><p>O que o Meta Ads Data Advisor mostraria: status do Pixel, eventos, catálogo e correspondência avançada.</p><span class="abrir">Abrir →</span></a>
    <a href="loja.html?aula=codigo"><b>📄 Código</b><p>O código do Pixel no &lt;head&gt; desta página, sem precisar do “Exibir código-fonte”.</p><span class="abrir">Abrir →</span></a>
    <a href="loja.html?aula=lab"><b>🧪 Lab</b><p>As desculpas do Pixel: quebre o Pixel de propósito e mostre o problema.</p><span class="abrir">Abrir →</span></a>
    <a href="loja.html?aula=dica"><b>💡 Dica</b><p>O que acontece na página atual e como conferir no Gerenciador de Eventos.</p><span class="abrir">Abrir →</span></a>
  </div>
  <h2>Roteiro sugerido (ligado ao Aulão de Pixel)</h2>
  <ol>
    <li><b>O Pixel:</b> abra a <a href="loja.html">vitrine</a> e mostre o PageView na Câmera e no Testar eventos.</li>
    <li><b>As anotações:</b> abra um <a href="produto-caneca_01.html">produto</a> (ViewContent) e ponha no carrinho (AddToCart, no clique).</li>
    <li><b>Parâmetros:</b> faça uma compra completa até o <b>obrigado</b>: Purchase com value, currency, produtos e eventID.</li>
    <li><b>Variantes:</b> numa <a href="produto-camiseta_02.html">camiseta</a>, compare o ViewContent antes e depois de escolher o tamanho.</li>
    <li><b>Outros eventos:</b> busca (Search), coração (AddToWishlist), <a href="orcamento.html">orçamento</a> (Lead), <a href="oficina.html">oficina</a> (Schedule, Contact), newsletter (CompleteRegistration), kit presente (personalizado).</li>
    <li><b>Consentimento:</b> recuse os cookies e mostre o Pixel “segurando” os eventos.</li>
    <li><b>Correspondência avançada:</b> no checkout, mostre na Lupa os dados com hash.</li>
    <li><b>Catálogo:</b> abra o <a href="catalogo.html">gerador de catálogo</a> e compare os IDs com os eventos.</li>
    <li><b>🤖 O robô não vê JavaScript:</b> no Depurador de Compartilhamento da Meta, compare a página fixa <code>produto-caneca_01.html</code> (título, preço e foto aparecem) com <code>produto.html?id=CANECA_01&amp;robo=1</code> (página genérica: as tags só existem depois do JavaScript).</li>
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

TUTORIAL_HEAD = '''
<link rel="stylesheet" href="assets/css/tutorial.css"/>
<script src="assets/tutoriais/pt/dados.js"></script>
<script src="assets/tutoriais/textos_es.js"></script>'''
TUTORIAL_PE = '''
<script src="assets/js/tutorial.js"></script>'''

PAGINAS['tutoriais'] = ('Tutoriais passo a passo', 'tutorial', '''
<div class="tu">
  <h1 style="margin-top:26px">🎬 Tutoriais passo a passo</h1>
  <p class="lead">Prints reais da Meta, na ordem certa: do portfólio ao catálogo. Cada tutorial mostra onde clicar (holofote + cursor) e o Pixel (nosso mascote) explica o porquê. Dados pessoais aparecem censurados.</p>
  <div id="tutorial" data-modo="lista"></div>
</div>''' + TUTORIAL_PE, TUTORIAL_HEAD)
PAGINAS['tutorial'] = ('Tutorial', 'tutorial', '''
<div class="tu" id="tutorial"></div>''' + TUTORIAL_PE, TUTORIAL_HEAD)

import html, json, subprocess
BASE = 'https://andreaabcj-cmd.github.io/lojinha-da-marina/'
DESC = 'Loja fictícia de treinamento sobre o Meta Pixel: canecas, camisetas e ecobags.'
at = lambda s: html.escape(str(s), quote=True)

# produtos e configuração lidos dos mesmos arquivos do site (via Node, que entende o JavaScript)
_js = ("const fs=require('fs'),vm=require('vm');const c={window:{}};"
       "vm.runInNewContext(fs.readFileSync('assets/js/config.js','utf8'),c);vm.runInNewContext(fs.readFileSync('assets/js/produtos.js','utf8'),c);"
       "console.log(JSON.stringify({C:c.window.LOJA_CONFIG,P:c.window.PRODUTOS,CAT:c.window.CATEGORIAS}))")
_d = json.loads(subprocess.run(['node', '-e', _js], cwd=RAIZ, capture_output=True, text=True, encoding='utf-8', check=True).stdout)
LOJA, PRODS = _d['C'], _d['P']
link_prod = lambda pid: 'produto-' + pid.lower() + '.html'


def meta_site(titulo, arq):
    """Open Graph básico das páginas comuns (o que aparece ao compartilhar o link)."""
    return ('\n<meta property="og:type" content="website"/>\n<meta property="og:site_name" content="Lojinha da Marina"/>'
            f'\n<meta property="og:title" content="{at(titulo)} · Lojinha da Marina"/>\n<meta property="og:description" content="{at(DESC)}"/>'
            f'\n<meta property="og:url" content="{BASE}{arq}.html"/>\n<meta property="og:image" content="{BASE}marca/capa.png"/>')


def meta_produto(p):
    """Tags de produto ESCRITAS no HTML: o robô da Meta (que não roda JavaScript) consegue ler.
    Open Graph + product:* (usados pela Meta) e JSON-LD schema.org (microdados)."""
    url, img = BASE + link_prod(p['id']), BASE + p['img']
    disp = 'in stock' if p['estoque'] == 'in stock' else 'out of stock'
    ld = {'@context': 'https://schema.org', '@type': 'Product', 'name': p['titulo'], 'description': p['descricao'], 'image': img,
          'sku': p['id'], 'productID': p['id'], 'brand': {'@type': 'Brand', 'name': LOJA['nomeLoja']},
          'offers': {'@type': 'Offer', 'url': url, 'price': f"{p['preco']:.2f}", 'priceCurrency': LOJA['moeda'],
                     'itemCondition': 'https://schema.org/NewCondition',
                     'availability': 'https://schema.org/' + ('InStock' if disp == 'in stock' else 'OutOfStock')}}
    return ('\n<link rel="canonical" href="' + url + '"/>'
            '\n<!-- Tags do produto para a Meta (Open Graph) -->'
            '\n<meta property="og:type" content="product"/>\n<meta property="og:site_name" content="Lojinha da Marina"/>'
            f'\n<meta property="og:title" content="{at(p["titulo"])}"/>\n<meta property="og:description" content="{at(p["descricao"])}"/>'
            f'\n<meta property="og:url" content="{url}"/>\n<meta property="og:image" content="{img}"/>'
            '\n<meta property="og:image:width" content="800"/>\n<meta property="og:image:height" content="800"/>'
            f'\n<meta property="product:brand" content="{at(LOJA["nomeLoja"])}"/>\n<meta property="product:availability" content="{disp}"/>'
            '\n<meta property="product:condition" content="new"/>'
            f'\n<meta property="product:price:amount" content="{p["preco"]:.2f}"/>\n<meta property="product:price:currency" content="{LOJA["moeda"]}"/>'
            f'\n<meta property="product:retailer_item_id" content="{p["id"]}"/>'
            '\n<!-- Microdados do produto (schema.org em JSON-LD) -->'
            '\n<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + '</script>')


# produto.html antigo: quem abre é levado na hora para a página fixa (antes do Pixel disparar).
# Com &robo=1 ele fica como exemplo de página que só existe via JavaScript (o robô da Meta vê uma página genérica).
REDIRECIONA = ('\n<script>/* endereço antigo -> página fixa do produto */(function(){var q=new URLSearchParams(location.search);'
               'if(q.has("robo"))return;var ids=' + json.dumps([p['id'] for p in PRODS]) + ',id=q.get("id")||"CANECA_01";'
               'if(ids.indexOf(id)>=0){window.__redirecionando=true;location.replace("produto-"+id.toLowerCase()+".html"+location.hash)}})();</script>')

def grava(arq, titulo, pagina, corpo, extra='', meta=None, descricao=DESC, bodyattr=''):
    with open(os.path.join(RAIZ, arq + '.html'), 'w', encoding='utf-8') as f:
        f.write(HEAD.format(titulo=titulo, pagina=pagina, corpo=corpo.strip(), extra=extra, descricao=at(descricao),
                            meta=meta_site(titulo, arq) if meta is None else meta, bodyattr=bodyattr))
    print('ok', arq + '.html')

for arq, (titulo, pagina, corpo, *extra) in PAGINAS.items():
    grava(arq, titulo, pagina, corpo, (extra[0] if extra else '') + (REDIRECIONA if arq == 'produto' else ''))

# uma página fixa por produto, com as tags já no HTML
for p in PRODS:
    grava(link_prod(p['id'])[:-5], p['titulo'], 'produto', PAGINAS['produto'][2], meta=meta_produto(p),
          descricao=p['descricao'], bodyattr=f' data-produto="{p["id"]}"')

# ---------- PLATAFORMA (início, módulos, aula, simuladores, laboratório) ----------
PLAT = '''<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>{titulo} · Lojinha da Marina</title>
<meta name="description" content="Plataforma de treinamento da Lojinha da Marina: módulos, simuladores e laboratório."/>
<meta name="robots" content="noindex"/>
<link rel="icon" href="assets/img/caneca_01.png"/>
<link rel="stylesheet" href="assets/css/plataforma.css"/>
<script src="assets/js/personagens.js"></script>
<script src="assets/js/porta.js"></script>
<script src="assets/academia/conteudo.js"></script>
<script src="assets/academia/ferramentas.js"></script>
<script src="assets/js/plataforma.js"></script>
</head>
<body data-tela="{tela}"><noscript>Ative o JavaScript para usar a plataforma.</noscript></body>
</html>
'''
for arq, titulo, tela in [('index', 'Início', 'inicio'), ('modulos', 'Módulos', 'modulos'), ('modulo', 'Módulo', 'modulo'),
                          ('aula-plataforma', 'Aula', 'aula'), ('simuladores', 'Simuladores', 'simuladores'),
                          ('laboratorio', 'Laboratório', 'laboratorio'), ('ferramenta', 'Ferramenta', 'ferramenta')]:
    with open(os.path.join(RAIZ, arq + '.html'), 'w', encoding='utf-8') as f:
        f.write(PLAT.format(titulo=titulo, tela=tela))
    print('ok', arq + '.html')
