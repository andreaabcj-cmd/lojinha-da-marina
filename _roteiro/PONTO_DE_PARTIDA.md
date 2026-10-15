# Ponto de partida (para um chat novo) — 15/10/2026

Leia nesta ordem:
1. `LEIA-ME.md` — regra do repositório público (nada interno nem pessoal).
2. `_roteiro/HISTORIA.md` — a história da Marina, as 5 fases, regras das aulas e dos tutoriais, telas reais anotadas e **Pendências**.
3. `_roteiro/esqueletos_fases_2_3.md` — esqueletos (não construídos) dos próximos módulos.
4. `_roteiro/telas_gerenciador_anuncios.md` e `_roteiro/amostras_meta.md` — textos reais das telas da Meta coletados nas contas de aula.

## Onde estamos
- **Fase 1 pronta** (Portfólio 01–04, Instagram 01–04, Pixel 01–04). Falta só a **Pixel 05** (avisos reais do Diagnóstico — aguardando; foram enviadas compras de teste sem valor/moeda em 15/10).
- **Fase 2, módulo "Gerenciador de Anúncios · criação e edição" COMPLETO (5 aulas)**: simuladores `meta-turbinar.html` (Turbinar post; `?semtelefone=1` e `?problemas=1` = telefone + limite de gastos + saldo) e `meta-anuncios.html` (rascunho de Vendas; `?publicada=1` = campanha já ativa para editar). Aulas: 01 Turbinar ou Gerenciador? · 02 Campanha, conjunto e anúncio · 03 O primeiro anúncio da Marina · 04 Editar sem bagunçar · 05 "Meu anúncio não publica!". Tutoriais: `turbinar-post`, `conhecer-niveis`, `primeiro-anuncio`, `editar-publicado`, `resolver-publicacao`. Itens "a conferir": tela depois de Publicar uma edição, coluna "Aprendizado", botão Duplicar, passo a passo dos erros numerados da Central de Ajuda.
- **Anúncio de teste real** (Turbinar, engajamento, sem link, R$ 5,27 × 1 dia, publicado 15/10 ~03h): ficou "Anúncio ativo" com selo "1 dia restante" na manhã de 16/10. Quando acabar: anotar as telas de concluído/resultados em `telas_gerenciador_anuncios.md` e escrever a aula do anúncio real ("rodou, e agora?").
- Laboratório com "Como fazer…" (16 tutoriais), botão "🧹 Recomeçar do zero", botão "↩ Voltar à aula" depois dos tutoriais, avisos de disparo só durante tutorial.
- O site publicado está atrás do local em alguns commits; publicar só quando o André pedir (script fora do repositório).

## Trilhas (16/10)
- Duas trilhas sobre o **mesmo conteúdo**: **Foco** (anúncios, medição e comércio; é a ordem de estudo oficial) e **Completa** (Foco + módulos extras de outras áreas). Definidas em `window.TRILHAS` (`assets/academia/conteudo.js`); a tela `modulos.html?t=foco|completa` mostra uma ordem numerada. Trilha escolhida fica em `plat.trilha`.
- Ordem do Foco: Portfólio básico · Portfólio avançado · Pixel básico · Pixel avançado · Catálogo · Anúncios (criação e edição) · Anúncios no Feed · Instagram · Regras automatizadas · Relatórios · Segmentação · Entrega · Meta Verified · Commerce · Shop Ads · Shop Ads (finalização fora da Meta) · MBE · Integração com terceiros · Shopify · WhatsApp (por último).
- Extras só da Completa (ainda planejados): pagamentos e cobrança · acesso e login · contas e restrições · políticas e anúncios rejeitados · Instagram e Facebook orgânicos. Construir DEPOIS do Foco.
- Fora do escopo de uma trilha: UMA linha de encaminhamento na cola, por área, em português simples, sem siglas nem nomes de times. Nada interno no repositório.
- Material novo sai sempre em PT e ES juntos (telas: `sim-i18n.js` + `sim-es-*.js`).
- Atenção: nas aulas existentes a história da Marina assume Instagram antes do Pixel; na ordem do Foco o Instagram vem depois. Decidir se ajusta os textos "onde paramos" ou a ordem.

## Regras de trabalho (resumo)
- Tudo local até o André mandar subir. Conferir à mão que nada interno/pessoal vai para o repositório.
- Só telas reais (o que não foi visto fica "a conferir"); fontes oficiais da Meta.
- Tutorial guiado sem erro possível; testar como aluno teimoso (clicar fora, escolher errado, voltar/avançar, clicar antes da hora em botão dentro do destaque, recarregar).
- O Pixel real nunca pode mudar o que a aula/simulação mostra.
- Respostas do "Atender" e das práticas são **embaralhadas** (mesma ordem para a mesma aula; a certa nunca fica em primeiro). No conteúdo, pode escrever a certa onde quiser: `ordemOpcoes` em `plataforma.js` cuida da ordem.
- Sem analogias na parte técnica (F12/Laboratório).

## Pendências que dependem do André
- ~~Telefone verificado na conta de anúncios de aula~~ — **feito em 15/10** (tela "Seu número de telefone foi verificado… Agora você pode veicular anúncios e turbinar posts"). Próximo: ver um anúncio rodando de verdade (saldo pré-pago de R$ 5 autorizado; o mínimo do Turbinar é R$ 5,27/dia, então talvez precise de um pouco mais de saldo ou de outro caminho — decidir com o André antes de publicar qualquer coisa).
- Trazer o Pixel para o portfólio da Lojinha (hoje está fora dele).
- Espanhol em tudo (adiado; telas da Meta precisam dos textos reais em espanhol).
- Tutorial guiado do F12 simulado (mais pra frente).

## Catálogo (Foco) · 16/10/2026
- Pronto em PT e ES: simulador `meta-catalogo.html` (Gerenciador de Comércio › Catálogo; `?zerar=1`, `?exemplo=1`, `?moeda=1`), 4 tutoriais (`criar-catalogo`, `adicionar-produtos`, `conferir-ids`, `achar-produto`), 5 aulas (`AULAS.catalogo`) e 5 quizzes (`um-ou-varios`, `tipo-catalogo`, `jeito-de-adicionar`, `ids-batem`, `por-que-nao-aparece`).
- A conferir com a tela real: janela de editar produto, janela "Criar conjunto", textos das opções 2–4 do tipo, aba Eventos com Pixel já ligado. Produtos recusados por política = fora de escopo (uma linha de encaminhamento, sem detalhes internos).
- Próximo na ordem do Foco: Anúncios no Feed.

## Anúncios no Feed (Foco) · 16/10/2026
- Escopo escolhido pelo André: criativo + posicionamentos + erros comuns. Pronto em PT e ES: simulador `meta-feed.html` (nível do anúncio; `?zerar=1`, `?exemplo=1`, `?problemas=1`), 4 tutoriais (`montar-criativo`, `ver-previa`, `destino-botao`, `resolver-criativo`), 5 aulas (`AULAS.feed`) e 5 quizzes (`anatomia-anuncio`, `imagem-ou-carrossel`, `qual-corte`, `destino-e-botao`, `anuncio-esquisito`). Telas reais anotadas em `telas_gerenciador_anuncios.md` (seção "Anúncio no Feed…").
- A conferir: etapa "Corte" dentro do assistente de mídia, botão "Personalizar" dos aprimoramentos, cortes do grupo Coluna da direita, escolha manual de posicionamentos, texto exato dos erros ao publicar, carrossel configurado. Recusa por política = fora de escopo (uma linha de encaminhamento).
- Próximo na ordem do Foco: Instagram (aulas 03+; 01 e 02 só na Completa).

## Instagram (Foco, aulas 05–09) · 16/10/2026
- Escolha do André: "os dois" (Instagram nos anúncios + dia a dia da loja). Aulas 03 e 04 já existiam. Novo, em PT e ES: aulas 05 (Instagram no anúncio), 06 (perfil não aparece), 07 (postar nos dois), 08 (Caixa de Entrada), 09 (Insights); 5 quizzes (`identidade-ig`, `ig-nao-aparece`, `onde-posto`, `canal-certo`, `ler-numero`); simulador novo `meta-suite.html` (Criar post, Caixa de Entrada, Insights; tutoriais `publicar-dois`, `responder-mensagens`, `ler-insights`) e extensão do `meta-feed.html` (Identidade com Perfil do Instagram; `?igsem=1`; tutoriais `identidade-instagram`, `perfil-nao-aparece`). Telas reais anotadas em `amostras_meta.md` (Business Suite em espanhol).
- Conversas da Caixa de Entrada são de exemplo (conta de aula vazia). A conferir: lista do seletor "Postar em", texto por rede ao personalizar, conversa aberta, lista de perfis do Instagram vazia, abas Visão geral/Plano/Mensagens dos Insights.
- Próximo na ordem do Foco: Regras automatizadas (telas reais já anotadas).
