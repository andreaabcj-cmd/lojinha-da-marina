# Auditoria das práticas: telas reais × telas inventadas (16/10/2026)

Pedido do responsável: toda prática guiada tem que acontecer em telas que existem na vida real (ou recriadas fielmente), para a pessoa aprender a FAZER e a guiar o cliente. Fontes: o computador do responsável (Meta, parceiros, código do site) e a Central de Ajuda.

## Já refeito
- **Diagnóstico de casos**: Loja (site do cliente) › Consultor de Dados › Gerenciador de Eventos (Testar eventos, Diagnóstico, Instalar código) › Código-fonte › editor de arquivos / admin da Shopify. Estado do site em `site-estado.js`.

## Recriações fiéis (telas vistas de verdade em conta de aula): manter
Gerenciador de Anúncios (anuncios, feed, publicos, relatorios, regras*), Business Suite (suite, turbinar), Instagram, Portfólio básico (portfolio), Gerenciador de Eventos (eventos), Microdata Debugger (microdados), Catálogo (catalogo).
(*regras: telas reais, dados inventados.)

## Práticas com telas inventadas / explicativas (a refazer)
| Módulo | O que existe hoje | Por que não é uma tela real | Caminho real para refazer |
|---|---|---|---|
| Pixel · avançado | abas com caixas de marcar, “pontuação” 0-10, seletor de tipo de empresa | A Meta não tem essa tela; a pontuação é inventada | Gerenciador de Eventos real: Configurações (correspondência avançada automática), Qualidade da correspondência de eventos, Eventos de teste e a Loja com o site de estado (`site-estado.js`) |
| Portfólio · avançado | seletor “seu acesso”, tabela de bloqueios, caixa de documentos | Central de Segurança, Pessoas e Informações da empresa reais têm outras telas | Reaproveitar `sim-portfolio` (telas reais) e acrescentar Central de Segurança › Verificação, Pessoas › Gerenciar, Excluir empresa |
| Integração com plataformas de terceiros | “cenários” e botões de correção inventados | O fluxo real é a Galeria de parceiros + o admin do parceiro | Galeria de parceiros do Gerenciador de Eventos + `admin-shopify` (e um admin de WooCommerce/WordPress) |
| Shopify e Meta | app Facebook e Instagram inventado | Agora existe `admin-shopify` baseado na Central de Ajuda da Shopify | Trocar pela tela de `admin-shopify` (Settings › Share data settings) e tutorial de redirecionamento |
| MBE | janela do MBE inventada | Janela real depende de plataforma parceira conectada | Usar um parceiro (Shopify) em `admin-shopify` para abrir a janela do MBE |
| Entrega de anúncios | caixa “Por que não veicula?” e números inventados | Não existe; a Meta mostra Veiculação e Qualidade em colunas do Gerenciador de Anúncios | Gerenciador de Anúncios (colunas de Veiculação, diagnóstico do anúncio, edição significativa) |
| Commerce | checklist “Minha loja” inventado | Telas reais do Commerce exigem concluir a configuração | Gerenciador de Comércio real (telas vistas) + checklist de requisitos da Central de Ajuda |
| Meta Verified | fluxo de assinatura inventado | A Meta não deixa ver sem assinar | Página pública de planos (real) + Central de Segurança; marcar o resto como “a conferir” |
| Shop Ads / Checkout fora da Meta | explicações como painéis | Telas de destino “Loja” não vistas | Gerenciador de Anúncios real (Destinos personalizados) + Gerenciador de Eventos com compras na Loja |

## Ordem sugerida
1) Pixel avançado (usa as telas já reais de Eventos + Loja) → 2) Integrações + Shopify e Meta + MBE (usam `admin-shopify`) → 3) Portfólio avançado → 4) Entrega → 5) Commerce, Verified, Shop Ads.

## Situação em 17/10/2026 (fim da rodada)
- REFEITOS em telas reais: Diagnóstico de casos, Pixel avançado, Integrações (WooCommerce, MBE), Shopify e Meta, Portfólio avançado (dentro das Configurações do portfólio), Entrega (status real da coluna Veiculação) e Pixel como fonte do catálogo (dentro do Catálogo).
- MANTIDOS COM AVISO “a conferir” (dependem de telas que não dá para abrir: loja publicada, assinatura paga, botão Loja): Commerce (checklist “Minha loja”), Meta Verified (fluxo de assinatura) e Shop Ads (aba Loja). Decisão do responsável (17/10): manter marcado; só refazer se ele trouxer prints reais.
