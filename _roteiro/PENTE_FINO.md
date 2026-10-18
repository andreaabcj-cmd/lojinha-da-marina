# Pente fino: tela real simulada + passos extras simulados (17–18/10/2026)

Regra de ouro do André: cada prática acontece numa tela que existe na vida real (ou recriada fielmente) e, quando o caminho passa por outro lugar (site do cliente, plataforma parceira, código, outra ferramenta da Meta), esse lugar também é simulado, para a pessoa aprender a fazer e a guiar o cliente.

## Como verificamos
- Inventário automático: módulo → tutorial → página → o que o cabeçalho do código diz ser “inventado” ou “não visto”.
- Teste automático de ponta a ponta de TODOS os tutoriais, em modo “aluno teimoso”: voltar (◀), recarregar a página no meio, clicar fora. Achados e corrigidos nesta rodada: voltar não pode desfazer nem repetir a ação do passo; ◀ some do passo logo depois de um pedido feito; diálogos que somem ao recarregar são refeitos; janela do MBE ao voltar.

## Situação por módulo (ordem da trilha Foco)
| Módulo | Tela base | Extras simulados | Situação |
|---|---|---|---|
| Portfólio | Configurações do portfólio (vistas) | convite, conta de anúncios | real |
| Portfólio avançado | mesmas telas + Central de Segurança, Pessoas, Informações | verificação, documentos, exclusão (não clicadas de verdade) | real + janelas “a conferir” |
| Pixel | Loja (site do cliente) + Gerenciador de Eventos + Consultor de Dados + código-fonte | compra, extensão | real |
| Pixel avançado | Eventos (EMQ, desduplicação) + Loja + editor de arquivos + banner de cookies | site do cliente com código editável | real; pontuação EMQ “a conferir” |
| Catálogo | Catálogo (visto) | feed, Pixel como fonte (novo) | real |
| Microdados | Microdata Debugger (visto) | site de mentirinha | real |
| Anúncios (Turbinar, Gerenciador) | Business Suite e Gerenciador de Anúncios (vistos) | — | real |
| Feed / criativo | Gerenciador de Anúncios (visto) | — | real |
| Instagram | Instagram, Portfólio, Business Suite (vistos) | — | real |
| Regras | telas reais, dados inventados | números | ok (dados de treino) |
| Relatórios | telas reais | campanha de exemplo | ok |
| Segmentação | formulários reais; tamanhos de público inventados | — | ok (tamanhos de treino) |
| Entrega | colunas e status REAIS da Central de Ajuda (ícones, significados) + níveis + Histórico de atividades | passar dos dias | real + números de treino |
| Meta Verified | página pública de planos (real) | fluxo de assinatura (a Meta não deixa ver sem assinar) | MANTIDO “a conferir” |
| Commerce | Ativos + assistente de 5 etapas (vistos) | checklist “Minha loja” | MANTIDO “a conferir” |
| Shop Ads | coluna/destinos do Gerenciador (parcial) | aba Loja e botão Loja (não vistos) | MANTIDO “a conferir” |
| Shop Ads fora da Meta | Loja + Eventos (jornada, duplicação) + Catálogo (Content ID) | números Meta × GA | refeito 18/10 com telas reais; comparar números e atualizar loja antiga ainda são explicativos |
| MBE | Galeria de parceiros, tabela de opções, Pessoas (reais) + janela do MBE | janela dentro da Shopify/Woo | real + janela “a conferir” (agora com as telas de “Loja” descritas por parceira) |
| Integrações | WooCommerce (admin do WordPress), Catálogo, Diagnóstico | plugin | real/recriado |
| Shopify e Meta | admin da Shopify CONFERIDO numa loja real em 19/10 (Publicação, Canais de vendas, Eventos de clientes, App Store e permissões, Configure sua loja, preferências de dados Conservador/Aprimorado/Máximo, Horizon e editor de código) | canal já configurado; nomes em ES | real (exceto o resumo do canal configurado) |
| WhatsApp | — | — | fica para depois (decisão do André) |
| Diagnóstico de casos | Loja + Eventos + código-fonte + editor + admin Shopify; desde 19/10 também Entrega, Turbinar, Catálogo (aba Problemas), Feed, Portfólio (Páginas) e janela do MBE | casos | real/recriado; área própria com 17 casos em 6 blocos (Commerce planejado) |

## Pesquisa online para Commerce, Verified e Shop Ads (18/10/2026)
- Vídeos: não dá para assistir nem transcrever daqui; as buscas devolveram guias escritos de terceiros.
- Interface atualizada: a única fonte útil com telas descritas passo a passo foi a Central de Ajuda de uma parceira da Meta (SHOPLINE): a janela do MBE para Lojas (“Abra sua loja” com permissões de Lojas e Anúncios do Facebook › Business Manager › catálogo › conta de anúncios › conjunto de dados com correspondência avançada › Detalhes da loja: e-mail de contato e prazo de devolução › O que o parceiro pode fazer? › Confirmar). Já incorporada à janela do WooCommerce.
- Meta Verified (páginas oficiais da Meta e de parceiros): confirma o que já temos (planos, requisitos, análise em até 3 dias úteis); NENHUMA fonte mostra as telas internas do cadastro.
- Shop Ads: a API/documentação da Meta confirma: precisa de loja com finalização no site (navegador do app), Página/Instagram, catálogo e Pixel; objetivo Vendas; eventos de conversão compatíveis. Um guia de terceiros cita “Local da conversão: Loja” enquanto a Central de Ajuda da Meta cita Site › Destinos personalizados › botão Loja: as fontes divergem, então a tela do botão segue “a conferir”.
- Commerce: guias de terceiros descrevem criação da loja (página, moeda, método de finalização, catálogo, frete e imposto, análise de 24–48 h). Sem telas oficiais novas.

## O que ainda NÃO está no padrão (próximas decisões)
1. Shop Ads (criar anúncio, só vai ao site, relatório): usa painéis próprios; o ideal é levar a criação do anúncio para o Gerenciador de Anúncios fiel (precisa do print real do botão Loja).
2. Shop Ads “antes de criar”: checklist dos 5 ativos poderia passar pelas telas reais (Portfólio, Eventos, Catálogo, Commerce).
3. Commerce “Minha loja” e Meta Verified (assinatura): só com prints reais.
4. Comparar números Meta × Google Analytics e atualizar loja antiga (Shop Ads fora da Meta): explicativos; GA não é simulado.

## Resultado do teste (18/10/2026)
- 110+ execuções automáticas de ponta a ponta (todos os tutoriais de todos os módulos, normal e “aluno teimoso”). No fim, 100% passam.
- Corrigido nesta rodada, além do que já estava: janela do MBE do WooCommerce com as telas de Loja (Abra sua loja, Detalhes da loja, Termos); voltar no Turbinar (bloqueios voltam) e em Editar campanha publicada (a caixinha não desmarca sozinha); Checkout fora da Meta agora usa Loja + Eventos, Catálogo e a correção de duplicação reais; trilhos recontados (Woo 34, jornada 13).
- O robô de teste aprendeu a preencher campos, escolher opções e marcar caixinhas; o que ele não faz é julgar se o texto da aula está bom: isso continua sendo o teste do André.
