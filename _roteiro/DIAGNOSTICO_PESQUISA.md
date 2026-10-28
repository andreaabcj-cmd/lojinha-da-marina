# Diagnóstico de casos — pesquisa dos problemas mais reportados (19/10/2026)

**Como foi feita:** fóruns e comunidades (comunidade da Shopify, guias de agências e de ferramentas de anúncios que compilam as dúvidas mais comuns, relatos de anunciantes) serviram **só para medir o que mais aparece**. A **solução** de cada caso vem da Central de Ajuda da Meta para Empresas ou da Central de Ajuda oficial da plataforma (Shopify, WooCommerce). Os artigos citados devem ser relidos na hora de construir o caso (data no rodapé da aula).

**Formato de todo caso** (pedido do responsável): 1) a Marina reclama, do jeito que o cliente fala → 2) **tutorial guiado** em telas reais até resolver → 3) por que aconteceu → 4) ver de perto → 5) atender + cola. **Validação obrigatória:** o sintoma aparece antes e some depois, na mesma tela, e o teste automático confere o estado final.

**Legenda:** Simular? ✅ dá hoje com telas que já existem · 🛠️ dá, criando ou estendendo uma tela (com base em tela real ou doc oficial) · ❌ não dá (tela que não conseguimos ver/simular com fidelidade). Prioridade: ⭐⭐⭐ muito frequente e o agente resolve · ⭐⭐ frequente · ⭐ ocasional. **JÁ EXISTE** = caso pronto.

## 📡 Pixel e eventos (`dg-pixel`)
| # | Como a Marina fala | Por trás (causa comum) | Solução oficial | Telas do tutorial | Simular? | Prioridade |
|---|---|---|---|---|---|---|
| P1 | “Vendo todo dia e o Gerenciador mostra zero compras” | Purchase não instalado / só o código base | Meta: configurar o Pixel e eventos padrão; Testar eventos | Loja › Consultor › Eventos › código-fonte › editor | ✅ **JÁ EXISTE** (caso 01) | ⭐⭐⭐ |
| P2 | “Mandaram eu colar o código do Pixel. Colar onde?” | site sem integração | Meta: instalar o código manualmente (head; evento na página da ação) | Eventos › Instalar código › editor › Testar eventos | ✅ **JÁ EXISTE** (02) | ⭐⭐⭐ |
| P3 | “As vendas estão em dobro” | Pixel duas vezes (app + código no tema) | Shopify: apagar o Pixel do theme.liquid; Meta: vários eventos numa ação | Loja › Eventos › código-fonte › admin Shopify | ✅ **JÁ EXISTE** (03) | ⭐⭐⭐ |
| P4 | “O valor das vendas está estranho” | value com vírgula/R$, moeda inválida | Meta: valor e moeda do Purchase | Loja › Diagnóstico › editor | ✅ **JÁ EXISTE** (03) | ⭐⭐ |
| P5 | “Troquei o tema e os eventos caíram” | código base perdido | Meta: queda de eventos | Loja › Eventos › código-fonte › editor | ✅ **JÁ EXISTE** (04) | ⭐⭐ |
| P6 | “Liguei a API de Conversões e as compras dobraram” | Pixel + API sem o mesmo event_id | Meta: desduplicação (event_name + event_id) | Eventos (2 fontes, aviso) › código-fonte › editor › Testar eventos (Desduplicado) | ✅ (tutorial do Pixel avançado; vira caso) | ⭐⭐⭐ |
| P7 | “O Purchase aparece em toda página / no clique do botão” | evento no cabeçalho ou no clique, não na confirmação | Meta: evento só na página da ação | Loja › Eventos › código-fonte › editor | ✅ (preset novo em `site-estado.js`) | ⭐⭐ |
| P8 | “Os eventos chegam em outro Pixel / o ID não bate” | ID errado no site ou Pixel de outro portfólio | Meta: conferir o ID do Pixel; Consultor de Dados | Loja › Consultor (ID) › Eventos (sem eventos) › editor | ✅ (preset `pixel-errado` já existe) | ⭐⭐ |
| P9 | “A Meta bloqueou parâmetros do meu Pixel” | informação sensível (saúde etc.) | Meta: dados proibidos; parâmetros bloqueados | Eventos › Diagnóstico › código-fonte › editor | ✅ (tutorial do Pixel avançado; vira caso) | ⭐ |
| P10 | “No Shopify parte das compras some” | nível Padrão + bloqueador | Shopify: compartilhamento de dados (Avançado/Máximo) | Loja › Consultor vazio › Eventos › admin Shopify | ✅ **JÁ EXISTE** (Integrações 01) | ⭐⭐ |

## 📣 Anúncios: criação, publicação e entrega (`dg-anuncios`)
| # | Como a Marina fala | Por trás | Solução oficial | Telas | Simular? | Prioridade |
|---|---|---|---|---|---|---|
| A1 | “Meu anúncio está ativo mas não gasta nada” | limite de gastos da conta, conjunto desativado, em análise, programado | Meta: ver o status de veiculação (ícones e status) e o histórico de atividades | Gerenciador › níveis › coluna Veiculação › Histórico | ✅ (tutorial `nao-veicula` vira caso) | ⭐⭐⭐ |
| A2 | “Não consigo turbinar / o botão Publicar não acende” | telefone não verificado, limite, saldo | Meta: turbinar post e requisitos da conta | Business Suite › Turbinar (avisos de cima para baixo) | ✅ (`resolver-publicacao` vira caso) | ⭐⭐⭐ |
| A3 | “Aparece ‘Aprendizado limitado’, quebrou?” | poucos resultados (≈50 em 7 dias) | Meta: aprendizado limitado | Gerenciador › Veiculação › edição | ✅ (`aprendizado-limitado`) | ⭐⭐ |
| A4 | “Mexi no anúncio e os resultados zeraram” | edição significativa reinicia o aprendizado | Meta: edições significativas | Gerenciador › Editar | ✅ (`edicao-significativa`) | ⭐⭐ |
| A5 | “Meu público é pequeno demais / ‘Abaixo de 1.000’” | público muito restrito | Meta: tamanho do público | Públicos | ✅ (`publico-pequeno`) | ⭐ |
| A6 | “Meu anúncio foi rejeitado” | Padrões de Publicidade | **fora do escopo** (políticas): uma linha de encaminhamento | — | — | — |

## 🗂️ Catálogo e produtos (`dg-catalogo`)
| # | Como a Marina fala | Por trás | Solução oficial | Telas | Simular? | Prioridade |
|---|---|---|---|---|---|---|
| C1 | “Meus produtos não aparecem no Facebook/Instagram” | fora do canal, arquivados, sem imagem/categoria | Shopify: disponibilidade no canal e status dos produtos; Meta: itens que não aparecem | admin Shopify › Produtos › canal | ✅ (`produtos-sumidos` vira caso) | ⭐⭐⭐ |
| C2 | “Tem produto recusado no catálogo” | campo faltando, imagem inválida, política | Meta: aba Problemas do catálogo; revisão de produtos | Catálogo › Problemas › produto | 🛠️ (aba Problemas no `meta-catalogo`; a conferir) | ⭐⭐⭐ |
| C3 | “Editei o produto na Meta e voltou como era” | produto sincronizado se edita na plataforma | Meta + Shopify: editar na plataforma | Catálogo › admin Shopify | ✅ | ⭐⭐ |
| C4 | “O anúncio mostra o preço/estoque errado” | feed desatualizado | Meta: informação desatualizada; atualizar fonte | Catálogo › Fontes de dados › Atualizar | ✅ (`achar-produto`) | ⭐⭐ |
| C5 | “Os produtos não batem com o Pixel” | Identificação do conteúdo diferente | Meta: content_ids = ID do catálogo | Catálogo › Produtos › Eventos | ✅ (`conferir-ids`) | ⭐⭐ |

## 🏢 Contas, acessos e portfólio (`dg-contas`)
| # | Como a Marina fala | Por trás | Solução oficial | Telas | Simular? | Prioridade |
|---|---|---|---|---|---|---|
| X1 | “A Página não aparece quando vou conectar” | portfólio escolhido não é dono da Página | Shopify/Meta: portfólio dono da Página | admin Shopify › janela da Meta | ✅ (`conectar-extensao`) | ⭐⭐⭐ |
| X2 | “Meu funcionário tem acesso demais / quero tirar alguém” | permissões | Meta: alterar permissões de uma pessoa | Portfólio › Pessoas › Detalhes | ✅ (`corrigir-permissao`) | ⭐⭐ |
| X3 | “Não consigo pôr a conta de anúncios / o Instagram no portfólio” | ativo em outro portfólio | Meta: adicionar ativos (um ativo, um portfólio) | Portfólio › Contas | 🛠️ (estender `meta-portfolio`) | ⭐⭐ |
| X4 | “A verificação da empresa foi recusada” | documento não comprova a razão social | Meta: documentos aceitos | Portfólio › Central de Segurança | ✅ (`corrigir-documento`) | ⭐⭐ |
| X5 | “Fui hackeado / perdi o acesso” | segurança de conta | **fora do escopo** (acesso e login): uma linha de encaminhamento | — | — | — |

## 📸 Instagram e Página (`dg-instagram`)
| # | Como a Marina fala | Por trás | Solução oficial | Telas | Simular? | Prioridade |
|---|---|---|---|---|---|---|
| I1 | “Meu Instagram não aparece para anunciar” | não está ligado à Página / conta pessoal / outro portfólio | Meta: [adicionar o Instagram à Página](https://www.facebook.com/business/help/connect-instgram-to-page); [anunciar no Instagram com a Página](https://www.facebook.com/business/help/272348126756182) | Portfólio › Páginas › Conectar ativos › Feed (identidade) | ✅ (`perfil-nao-aparece`, `conectar-instagram`) | ⭐⭐⭐ |
| I2 | “Mudei para profissional e agora é público” | conta profissional é sempre pública | Instagram: conta profissional | Instagram › Configurações | ✅ (`virar-profissional`) | ⭐ |

## 🧩 Integrações e plataformas (`dg-integracoes`)
| # | Como a Marina fala | Por trás | Solução oficial | Telas | Simular? | Prioridade |
|---|---|---|---|---|---|---|
| G1 | “Conectei a Shopify e não chega compra nenhuma” | canal sem Pixel / compartilhamento desligado | Shopify: Share data settings | admin Shopify › Configurações › Loja › Eventos | ✅ | ⭐⭐⭐ |
| G2 | “Os produtos da Shopify não sincronizam” | disponibilidade/arquivados/pendências | Shopify: publicar produtos e status | admin Shopify › Produtos | ✅ | ⭐⭐⭐ |
| G3 | “O plugin do WooCommerce parou” | plugin desatualizado / desconectado | WooCommerce: Meta for WooCommerce | admin WordPress › Plugins › Marketing › Facebook | ✅ (`manter-desconectar`) | ⭐⭐ |
| G4 | “Liguei duas integrações e tudo duplicou” | Pixel em dois lugares (app + GTM/tema) | Meta: duplicação com anúncios das Lojas | Loja › Eventos › admin | ✅ | ⭐⭐ |

## 🛍️ Commerce e lojas (`dg-commerce`)
| # | Como a Marina fala | Por trás | Solução oficial | Telas | Simular? | Prioridade |
|---|---|---|---|---|---|---|
| M1 | “Minha loja não aparece no Instagram/Facebook” | análise (até 4 semanas), requisitos, URL de finalização | Meta: requisitos e configurar a loja | Gerenciador de Comércio | ⚠️ telas do checklist “a conferir” | ⭐⭐ |
| M2 | “O anúncio das Lojas só leva ao site” | falta ativo/condição (Pixel, formato) | Meta: anúncios das Lojas | Gerenciador | ⚠️ “a conferir” | ⭐ |

## Fora do escopo (só uma linha de encaminhamento na cola)
Pagamentos e cobrança · conta de anúncios desativada ou restrita · anúncios rejeitados por política · login, conta hackeada, perda de acesso · verificação de identidade de pessoa.

## Sugestão de ordem (para o responsável escolher)
1. **Pixel e eventos**: P6 (API + dobro) e P7 (Purchase em toda página) — completam o bloco que já tem 4 casos.
2. **Anúncios**: A1 (não gasta) e A2 (não turbina) — os mais frequentes do atendimento, telas já reais.
3. **Catálogo**: C1 (produtos não aparecem) e C2 (produto recusado, aba Problemas).
4. **Instagram**: I1.
5. **Integrações**: G1 e G2.
6. **Contas**: X1 e X3.
Commerce fica por último (telas a conferir).

**Construídos em 19/10/2026 (ordem acima, aprovada pelo responsável):** P6 (dg-pixel 05), P7 (dg-pixel 06), A1 e A2 (dg-anuncios 01–02), C1 e C2 (dg-catalogo 01–02), I1 (dg-instagram 01), G1 e G2 (dg-integracoes 02–03), X1 e X3 (dg-contas 01–02). Cada tutorial termina conferindo que o problema sumiu (ex.: só 1 Purchase e só na página de pedido; Purchase chegando do navegador e do servidor; zero erros no catálogo; Página no portfólio novo e fora do antigo).

## Fontes da pesquisa de frequência (não usadas para a solução)
Comunidade da Shopify (sincronização e lojas que não aparecem), guias de solução de veiculação (Jon Loomer, Revealbot e outros), guias de rastreamento (Trackingplan, Cometly), guias de conexão do Instagram de ferramentas de anúncios. Lidos em 19/10/2026.
