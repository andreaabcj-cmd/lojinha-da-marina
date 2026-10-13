# Lojinha da Marina · loja de treinamento do Meta Pixel

Loja **fictícia** (canecas, camisetas, ecobags) feita para ensinar o Meta Pixel na prática.
Nenhum produto é vendido e nenhum pagamento é real.

## O que já está pronto
- **10 páginas**: vitrine, produtos (com busca), produto, carrinho, checkout, obrigado, orçamento, oficina, guia da aula e catálogo.
- **Eventos** em cada ação: PageView, ViewContent, Search, AddToWishlist, AddToCart, InitiateCheckout,
  AddPaymentInfo, Purchase (com nº do pedido como eventID), Lead, CompleteRegistration, Schedule, Contact
  e um evento personalizado (MontouKitPresente).
- **Modo aula** (botão no canto inferior direito), feito para computadores sem F12:
  📹 Câmera · 🌐 Rede · 🔍 Lupa (tipo Data Advisor) · 📄 Código · 🧪 Laboratório de falhas · 💡 Dica.
- **Banner de cookies** de verdade (consentimento liga/desliga o envio).
- **Correspondência avançada** com os dados de teste do checkout (o Pixel envia com hash).
- **Catálogo**: página que gera o arquivo CSV/XML com os mesmos IDs do Pixel, mais as fotos PNG.

## Testar no computador (sem publicar)
Dê dois cliques em `index.html`. Tudo funciona em **modo simulação**: nada é enviado à Meta.

## Ligar o Pixel de verdade (fazemos juntos)
1. No Gerenciador de Eventos, criar um Pixel **só para aulas**.
2. Abrir `assets/js/config.js` e trocar `SEU_PIXEL_ID` pelo número do Pixel.
3. Publicar o site (abaixo). A faixa amarela no topo passa a mostrar **“● Pixel ao vivo”**.
4. Gerenciador de Eventos › Pixel › **Testar eventos** › navegar na loja e ver os eventos chegando.

## Antes de publicar: teste do filtro do trabalho
Abra `teste-filtro.html` no computador do trabalho (por e-mail, Drive ou pendrive).
Ela mostra quais hospedagens grátis passam pelo filtro (🟢/🔴) e se o código do Pixel chega à Meta.
Mande ao Claude o código que aparece (ex.: `FILTRO GH+ NL- …`) para escolher onde publicar.

## Publicar no GitHub Pages (grátis)
1. Criar uma conta em github.com (se ainda não tiver).
2. Criar um repositório novo, por exemplo `lojinha-da-marina`, **público**.
3. Enviar todos os arquivos desta pasta para o repositório (botão “Add file › Upload files”).
4. No repositório: **Settings › Pages › Branch: main / (root) › Save**.
5. Em alguns minutos o site fica no ar em `https://SEU-USUARIO.github.io/lojinha-da-marina/`.

## Catálogo (fazemos juntos depois)
1. Com o site publicado, abrir a página **Catálogo** pelo endereço público e baixar o CSV ou o XML.
2. No Gerenciador de Comércio, criar um catálogo de e-commerce e adicionar os itens pelo arquivo.
3. Conectar o catálogo ao Pixel e acompanhar a correspondência dos IDs.

## Arquivos
| Arquivo | Para que serve |
|---|---|
| `assets/js/config.js` | **O único que você edita**: ID do Pixel e opções |
| `assets/js/produtos.js` | Os produtos (as “fichas” do catálogo) |
| `assets/js/pixel-aula.js` | Inicia o Pixel e monta o Modo aula |
| `assets/js/loja.js` | Carrinho, páginas e os eventos de cada ação |
| `_ferramentas/gerar_paginas.py` | Recria as páginas com o mesmo código do Pixel no `<head>` |
| `_ferramentas/gerar_imagens.py` | Recria as fotos dos produtos |

## Fase 2 (depois)
API de Conversões com um servidor pequeno (o token não pode ficar no site público),
para ensinar a deduplicação com eventos reais do servidor.
