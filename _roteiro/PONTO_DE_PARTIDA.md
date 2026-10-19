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

## Regras automatizadas (Foco) · 16/10/2026
- Pronto em PT e ES: simulador `meta-regras.html` (página Regras automatizadas, janela Criar/Editar regra, tabela de conjuntos para o caminho "Mais › Criar nova regra"; `?zerar=1`, `?exemplo=1`, `?problema=1`), 4 tutoriais (`criar-regra`, `evitar-falso-positivo`, `acompanhar-editar`, `regra-desativou-tudo`), 5 aulas (`AULAS.regras`) e 5 quizzes (`regra-ou-ajuste`, `ler-regra`, `falso-positivo`, `editar-ou-excluir`, `por-que-parou`).
- Telas reais: página em PT e ES; a janela Criar regra só abriu em PT (em ES travou carregando), então os textos dela em espanhol seguem o padrão da Meta (a conferir). Lista exata de ações e métricas não vista (a conferir). Fontes: Central de Ajuda "Criar uma regra automatizada" (644860419002064) e "Editar ou excluir…" (1776994142531909). Dados do simulador (conjuntos, gastos) são inventados.
- Correção geral: `<option>` agora tem `value` fixo (sim-feed, sim-regras, sim-catalogo), porque o tradutor ES trocava o texto e quebrava a lógica.
- Próximo na ordem do Foco: Relatórios.

## Relatórios (Foco) · 16/10/2026
- Pronto em PT e ES: simulador `meta-relatorios.html` (Relatórios de Anúncios; os números da conta de aula são REAIS: 69/71/1,03/R$ 2,77; divisões, campanha de exemplo `?exemplo=1` e troca de janela de atribuição são inventadas), 4 tutoriais (`ler-relatorio`, `montar-relatorio`, `comparar-atribuicao`, `relatorio-vazio`), 5 aulas (`AULAS.relatorios`) e 5 quizzes (`onde-olhar`, `ler-numeros`, `detalhe-ou-metrica`, `janela-atribuicao`, `por-que-vazio`).
- A conferir: Salvar/Exportar/Compartilhar, comparação real de janelas, efeitos de privacidade do iOS (nada lido ainda), conteúdo do artigo de diferenças de contagem.
- Próximo na ordem do Foco: Segmentação (públicos).

## Segmentação / Públicos (Foco) · 16/10/2026
- Pronto em PT e ES: simulador `meta-publicos.html` (página Públicos com os 3 cartões reais, fonte do público, formulário do público do site, semelhante e salvo; `?zerar=1`, `?exemplo=1`, `?pequeno=1`), 4 tutoriais (`criar-publico-site`, `criar-semelhante`, `criar-salvo`, `publico-pequeno`), 5 aulas (`AULAS.segmentacao`) e 5 quizzes (`tipo-publico`, `fonte-publico`, `semelhante-ok`, `salvo-ou-automatico`, `publico-pequeno-q`).
- A conferir: formulário do público do site em ES, janela do público salvo, texto exato da recusa do semelhante e mínimo da fonte. Tamanhos de público do simulador são inventados (exceto "Abaixo de 1.000").
- (Microdata Debugger: FEITO em seguida, ver seção abaixo.)
- Próximo na ordem do Foco depois dele: Entrega, Meta Verified, Commerce, Shop Ads…

## Microdata Debugger (Foco, logo depois do Catálogo) · 16/10/2026
- Pedido do André (esquecido na lista inicial). Ferramenta real: business.facebook.com/ads/microdata/debug ("Ferramenta de depuração de microdados do Facebook para catálogo"); testada de verdade com a página de produto pública da loja de aula (sucesso em PT; erro em ES numa nova tentativa, causa não apurada) e com o carrinho (erro "Falha na validação de dados"). Notas em `amostras_meta.md`.
- Pronto em PT e ES: simulador `meta-microdados.html` (site de mentirinha lojinha.exemplo.com.br, páginas boas e com defeito), 3 tutoriais (`verificar-microdados`, `ler-campos`, `erro-microdados`), 4 aulas (`AULAS.microdados`) e 4 quizzes. Módulo 6 da Trilha Foco (agora 21 módulos).
- A conferir: sucesso em ES, erros por campo específico (a tela real só diz "Falha na validação de dados"), artigo de ajuda 1175004275966513 não lido, lista completa de parâmetros.
- Próximo: Entrega (FEITO, ver abaixo).

## Entrega (Foco) · 16/10/2026
- Simulador `meta-entrega.html` (sim-entrega.js, sim-es-entrega.js, sim-entrega.css): tabela de Conjuntos de anúncios (colunas Veiculação, Resultados, Custo por resultado, Orçamento, Valor gasto), status Ativo/Aprendizado/Aprendizado limitado/Em análise/Desativado/Programado, card "% gastos na fase de aprendizado", aviso de limite de gastos, painel Editar que classifica edição significativa x não significativa, botão "?" (explicação do status). `?zerar=1 | ?exemplo=1 | ?problema=1`.
- 4 tutoriais (ler-aprendizado, edicao-significativa, aprendizado-limitado, nao-veicula), 5 aulas, 5 quizzes; todos os tutoriais rodaram do começo ao fim (PT e ES) sem "falta" no tradutor.
- Real (tela, PT e ES): colunas, status Ativo/Em análise/Rascunho, card de aprendizado, aviso de limite de gastos. Real (Central de Ajuda): fase de aprendizado (~50 resultados na semana após a última edição significativa), lista de edições significativas (público, criativo, evento de otimização, lance, novo anúncio, pausa de 7+ dias; orçamento "poderá ou não"), boas práticas (orçamento realista, evitar edições, combinar conjuntos) e solução de problemas por nível.
- INVENTADO (a conferir): os conjuntos e números, o passar dos dias, o limiar de 50% do orçamento, o botão "?" e as explicações. Números específicos para lojas (compras no site/Meta) NÃO usados.
- Próximo na ordem do Foco: Meta Verified, Commerce, Shop Ads…

## Meta Verified para empresas (Foco) · 16/10/2026
- Simulador `meta-verified.html` (sim-verified.js, sim-es-verified.js, sim-verified.css): abas Planos (tabela real), Cadastrar empresa (6 etapas + painel de requisitos), Minha assinatura (em análise, ativa, nome do perfil, cancelar, revogada). `?zerar=1 | ?problema=1 | ?ativa=1 | ?revogada=1`.
- 5 tutoriais (escolher-plano, cadastrar-meta-verified, nao-consigo-cadastrar, nome-perfil, cancelar-assinatura), 6 aulas, 6 quizzes; todos os tutoriais rodaram do começo ao fim em ES sem "falta".
- REAL: página pública facebook.com/business/tools/meta-verified-for-business em PT e ES (planos Básico|Standard, Plus, Premium, Max; US$ 14,99/49,99/149,99/499,99; números por plano; onde o selo aparece; FAQ; análise em até 3 dias úteis). Central de Ajuda (PT): artigos 1980422732333373 (o que é), 3561016884200905 (identificação), 635089366197498 (nome do perfil), 3327167787588129 (métodos de verificação), 1381094345778877 (cadastro), 626333159331357 (não consigo cadastrar), 1770984317164879 (problemas com a assinatura), 1008321637512283 (revogadas), 268488269303385 (cancelar), 832027668252804 (suporte).
- NÃO visto (a conferir): as telas internas do fluxo (exigiria assinar; nada foi comprado); reembolsos, formas de pagamento e histórico (artigos não lidos); WhatsApp (fora do escopo desta versão). Preços em US$ variam por região. A página pública avisa que os recursos agora aparecem também no "Meta One" (não explorado).
- INVENTADO: o painel "Verificar requisitos" e os botões de correção, os dias do ciclo, o "?" e as causas "possíveis". 
- Próximo na ordem do Foco: Commerce, Shop Ads…

## Commerce (Foco) · 16/10/2026
- Simulador `meta-commerce.html` (sim-commerce.js, sim-es-commerce.js, sim-commerce.css): aba Ativos (real), assistente "Adicionar conta" de 5 telas (real), aba Minha loja (checklist, requisitos, análise por semanas: do simulador) e aba "O que mudou em 2025". `?zerar=1 | ?loja=1 | ?problema=1`.
- 4 tutoriais (criar-loja, configurar-loja, loja-nao-aparece, mudancas-checkout), 5 aulas, 5 quizzes; todos rodaram em ES sem "falta" (depois de completar o dicionário).
- REAL (telas, PT e ES): Gerenciador de Comércio | Administrador de ventas da conta de aula: Ativos, "Venda em uma loja personalizada", catálogos, país, parceiros (Shopify, BigCommerce, Feedonomics, DataFeedWatch, Productsup, Magento), canais, catálogo, prévia com "Finalização da compra em outro site". O botão "Concluir a configuração" NÃO foi clicado (envia a loja para análise e aceita o Acordo do Vendedor); em ES o rótulo dele não foi visto ("Finalizar la configuración" é suposição).
- REAL (Central de Ajuda PT, 16/10): artigos 2343035149322466 (Sobre as Lojas), 268860861184453 (configurar loja: checklist, análise até 4 semanas, perfil de envio 5–8/3–5/2–3 dias, URL de finalização obrigatório, publicar), 1314349509894768 (mudanças de set/2025), 1627591223954487 (5 requisitos; detalhes lidos no artigo em inglês, as seções em PT estavam recolhidas). Página pública facebook.com/business/tools/commerce-manager.
- NÃO visto: o checklist real "Configurar sua loja" (exige concluir), coleções, Insights, finalização da compra para vendedores dos EUA (só mencionado em inglês).
- INVENTADO: tela do checklist, passar das semanas, botões de correção, validação do URL (https, sem encurtadores), textos explicativos da aba "O que mudou".
- Próximo na ordem do Foco: Shop Ads, Shop Ads com checkout fora da Meta, MBE, integrações, Shopify, WhatsApp (por último).

## Shop Ads / anúncios das Lojas (Foco) · 16/10/2026
- Simulador `meta-shopads.html` (sim-shopads.js, sim-es-shopads.js, sim-shopads.css): abas Antes de criar (5 ativos), Criar anúncio das Lojas (campanha › conjunto › anúncio, com painel "por que só o site") e Resultados (métricas). `?zerar=1 | ?problema=1 | ?relatorio=1`.
- 4 tutoriais (antes-de-criar, criar-anuncio-lojas, so-para-o-site, ler-relatorio-lojas), 5 aulas, 5 quizzes; todos rodaram em ES sem "falta".
- REAL (Central de Ajuda PT, 16/10): 786101482615028 (Sobre os anúncios das Lojas), 3171236526530970 (criar: 5 ativos, Vendas, local Site, eventos, botão Loja em Destinos personalizados, destinos da loja, formatos), 1245449522969913 (por que só o site: requisitos), 6158069234251430 (boas práticas), 775732186866048 (relatórios: métricas recomendadas, "compras na Meta" = 0), 549256849084694 (países: EUA completo; BRASIL = beta aberto, "alguns vendedores podem não ter recursos completos"). Gerenciador de Anúncios real visto (colunas, "Destinos personalizados 0/3").
- NÃO visto (a conferir): a aba "Loja" e o botão Loja dentro de Destinos personalizados (a conta de aula não tem loja publicada); o Gerenciador travou em "Carregando" ao abrir um rascunho. Nomes exatos em espanhol desses campos.
- INVENTADO: números do relatório, painel "por que só o site", cenário ?problema=1, botões de correção.
- Não lido: dicas do Pixel com Site e loja (593273318981233), duplicação do Pixel na Shopify, passos de identidade/catálogo (5318930238194863, 451411486590536), terceiros (1497481554083753).
- Próximo na ordem do Foco: Shop Ads com checkout fora da Meta, MBE, integrações, Shopify, WhatsApp (por último).

## Shop Ads · finalização da compra fora da Meta (Foco) · 16/10/2026
- Escopo: desde setembro de 2025 TODA loja usa finalização da compra no site; este módulo cobre o que isso muda na medição e no suporte (jornada, Pixel e catálogo, duplicação, terceiros e UTM, loja antiga). Overlap com Commerce (mudanças) e Shop Ads (relatórios) mantido mínimo.
- Simulador `meta-checkoutsite.html` (sim-offsite.js, sim-es-offsite.js, sim-offsite.css): abas Jornada, Pixel e catálogo, Eventos e duplicação, Terceiros e UTM, Atualizar loja antiga. `?zerar=1 | ?ok=1`.
- 5 tutoriais (jornada-compra-site, pixel-e-catalogo, achar-duplicacao, comparar-terceiros, atualizar-loja-antiga), 5 aulas, 5 quizzes; todos rodaram em ES.
- REAL (Central de Ajuda PT, 16/10): 593273318981233 (4 dicas do Pixel; só 5 eventos aceitos), 1190564818451304 (duplicação: diagnóstico no Gerenciador de Eventos, GTM, Shopify), 1497481554083753 (terceiros: UTM padrão, eventos que terceiros não veem, Triple Whale/Northbeam/Measured), 775732186866048 (relatórios), 1314349509894768 (como atualizar loja antiga). Tela real da prévia da loja ("Finalização da compra em outro site") já vista no módulo Commerce.
- NÃO visto (a conferir): Gerenciador de Eventos real com compras (a conta de aula não tem Pixel com compras), extensão Consultor de Dados de Anúncios em uso, tags de marketing de terceiros no Google Analytics.
- INVENTADO: eventos, horários, pedido 1042, números 71 × 46, botões de correção.
- Nota de teste: o alinhamento do destaque acusa "DESALINHADO" com a aba do navegador em segundo plano (transição CSS pausada); o estilo real do destaque estava certo.
- Próximo na ordem do Foco: MBE, integrações, Shopify, WhatsApp (por último).

## MBE · integrações de parceiros (Foco) · 16/10/2026
- Simulador `meta-mbe.html` (sim-mbe.js, sim-es-mbe.js, sim-mbe.css): abas Galeria de parceiros (REAL), Conectar pela plataforma (janela do MBE: do simulador), Opções da API de Conversões (tabela da Central de Ajuda), Problemas comuns (triagem) e Dar acesso a um parceiro. `?zerar=1`.
- 5 tutoriais (galeria-parceiros, conectar-extensao, escolher-capi, eventos-nao-chegam, dar-acesso-parceiro), 6 aulas, 6 quizzes; todos rodaram em ES.
- REAL (tela, PT e ES): Gerenciador de Eventos › Integrações (Minhas integrações | Galeria de parceiros), recomendações (Google Tag Manager, Shopify, WooCommerce), categorias e parceiros listados (sem o "Ver tudo").
- REAL (Central de Ajuda PT): 260370078559247 (Integrações de Parceiros para eventos do site), 226398427762487 (Integrações de parceiros), 433493041367251 (comparar API de Conversões), 1717412048538897 (conceder acesso a parceiro). REAL (docs de desenvolvedor, inglês): FBE/MBE pixel-capi-onboarding: cria/seleciona portfólio, Página, Pixel (e conta de anúncios); sem catálogo; permissão privada manage_business_extension exige liberação do app pela Meta.
- NÃO visto (a conferir): a janela do MBE dentro de uma plataforma parceira (exige conectar de verdade), tela de cada parceiro, "Ver tudo", Minhas integrações com dados.
- INVENTADO: fluxo e telas da janela do MBE (5 etapas), cenários da API de Conversões, triagem de sintomas, tela de dar acesso.
- Parte técnica do parceiro (tokens, permissões, review) ficou só em nota: o treino é para o atendimento ao lojista.
- Nota de ambiente: o navegador interno recusou facebook.com por um tempo; usei o Chrome (extensão) para as páginas da Meta.
- Próximo na ordem do Foco: integrações de terceiros, Shopify, WhatsApp (por último).

## Integração com plataformas de terceiros (Foco) · 16/10/2026
- Simulador `meta-terceiros.html` (sim-terceiros.js, sim-es-terceiros.js, sim-terceiros.css): abas Conectar a plataforma (WooCommerce, Wix, Google Tag Manager, outras), Erros do Pixel (Diagnóstico: 12 mensagens), Pixel como fonte do catálogo e Manter e desconectar. `?zerar=1`.
- 4 tutoriais (conectar-woocommerce, ler-diagnostico, pixel-fonte-catalogo, manter-desconectar), 5 aulas, 5 quizzes; todos rodaram em ES (a lista de textos sem tradução ficou vazia depois dos ajustes).
- REAL (tela, PT e ES): Gerenciador de Eventos › Integrações/Galeria (inclui "Configurar automaticamente / Status da automação" do Gerenciador de tags do Google) e "Conjuntos de dados" vazio ("Os dados precisam ser conectados antes de você poder ver os conjuntos de dados").
- REAL (Central de Ajuda PT): 900699293402826 (WooCommerce: pré-requisitos, passos, 10–30 min, atualizar, desconectar), 490934944618455 (12 mensagens de erro/aviso do Pixel), 260370078559247 (integrações de parceiros). De pesquisa (inglês/espanhol, não lidas na íntegra): Pixel como fonte do catálogo (887775018036966, 1044262445604547) e Wix Premium (1897688327154623, página antiga).
- NÃO visto (a conferir): aba Diagnóstico real (conta sem conjunto de dados), telas do plugin no WordPress, integração do Wix e do GTM funcionando, nomes de menu em espanhol do WordPress.
- INVENTADO: telas, cenários, rótulo "tipo" (Erro/Aviso/Notificação) dos itens que o artigo não classifica.
- Próximo na ordem do Foco: Shopify, depois WhatsApp (por último).

## Shopify e Meta (Foco) · 16/10/2026
- Simulador `meta-shopify.html` (sim-shopify.js, sim-es-shopify.js, sim-shopify.css): abas Conectar a Shopify (pré-requisitos, 7 passos, compartilhamento e acesso a dados), Quem gerencia o quê (11 itens: Shopify × app × Gerenciador de Comércio), Catálogo e redirecionamento, Problemas comuns. `?zerar=1`.
- 4 tutoriais (conectar-shopify, onde-gerenciar, sincronizar-produtos, problemas-shopify), 5 aulas, 5 quizzes; todos rodaram em ES sem "falta".
- REAL (tela, PT e ES): Gerenciador de Eventos › Integrações: "Configure suas integrações" com Shopify recomendada e o botão "Configure para mim" (NÃO clicado).
- REAL (Central de Ajuda PT, 16/10): 646757258759189 (conectar a Shopify), 139029445945711 (loja e anúncios das Lojas para vendedores da Shopify), 1046957249463415 (catálogo com a Shopify; inclui "Redirecionar para a Shopify para adicionar e editar itens"), 342672464318056 (o que gerenciar na Shopify), 1190564818451304 (duplicação do Pixel com Shopify).
- NÃO visto (a conferir): o app dentro da Shopify (a conta de aula não tem loja Shopify), a configuração de redirecionamento no Gerenciador de Comércio, as opções exatas de compartilhamento/acesso a dados (só "Aprimorado ou Máximo" e "Sempre ativo ou Otimizado" aparecem no artigo; "Padrão" e "Desativado" são nossas).
- INVENTADO: loja de exemplo, produtos, telas do app, jogo de classificar, triagem.
- Ressalva: o artigo cita um teste de ROAS nos EUA (35%); NÃO usado nas aulas.
- Próximo na ordem do Foco: WhatsApp (por último). Depois, Foco completo; restam aulas de Pixel avançado e Portfólio avançado e a trilha Completa.

## Pixel avançado (Foco) — REFEITO em telas reais, 16/10/2026
- Telas: Gerenciador de Eventos (Visão geral, Testar eventos, Diagnóstico, Configurações), código-fonte, editor de arquivos do site e banner de cookies, tudo sobre o site da Lojinha (`site-estado.js`). O simulador antigo (`meta-pixelavancado.html`, `sim-pixelav.*`) foi REMOVIDO.
- 4 aulas PT+ES; 5 tutoriais: `correspondencia-avancada` (caso am-desligada), `qualidade-sinal` (emq-baixa), `desduplicar-eventos` (capi-sem-eventid), `info-proibida` e `consentimento-pixel` (aula 04, duas opções). Arquivo: `assets/js/tours-pixelav.js`. Trilho do módulo: `correspondencia-avancada` (cauda 29).
- Novidades no Eventos: cartão de qualidade da correspondência (0–10, a conferir), chip “Desduplicado”, aviso de duplicidade Pixel×API e de parâmetros bloqueados, “Navegador e servidor”.
- Fonte: Central de Ajuda oficial (PT). A conta de aula NÃO tem conjunto de dados: pontuação, textos de aviso e telas internas são do treino (a conferir). Sem valores reais, IDs ou nomes; nada interno.
- Verificado de ponta a ponta com executor automático: os 5 tutoriais + trilho (34 passos).

## Portfólio avançado (Foco) — 16/10/2026
- 4 aulas PT+ES (verificação da empresa, documentos recusados/verificação travada, permissões, excluir o portfólio), 4 tutoriais (`verificar-empresa`, `corrigir-documento`, `corrigir-permissao`, `excluir-portfolio`), 4 quizzes (`ver-pv`, `doc-pv`, `perm-pv`, `excl-pv`), simulador `meta-portfolioav.html`.
- Fonte: Central de Ajuda oficial (PT). NÃO foram clicados botões irreversíveis na conta de aula (enviar verificação, excluir empresa): essas telas são do treino (a conferir). Pessoas (Ana, Bia, Caio) e pendências do simulador são inventadas.
- Orientações fora do escopo: uma frase simples de encaminhamento, sem siglas nem regras internas.

## Ajustes de 16/10/2026 (feedback do André)
- **Balão do tutorial** (`tour.js`): agora evita cobrir o destaque *e o texto em volta* (grupo + irmãos logo abaixo/acima); dá para **arrastar** o balão e há o botão "↔ menor/maior" (automático em telas estreitas).
- **Piloto do trilho** (`trilho.js`, isolado): o 1º tutorial do Portfólio avançado (`verificar-empresa`) começa em index.html e leva Início › Módulos › módulo › aula › Praticar › simulador; os demais tutoriais não mudam. Só entra pela lista "Como fazer…" (laboratório). Desligar = apagar a linha em TRILHOS.
- **Casca comum** (`sim-casca.js/.css`): trilho de ícones + cabeçalho com o portfólio da Marina (iguais ao Gerenciador de Eventos) nos simuladores da família Business Suite (.ss) e cartões com o mesmo contorno grosso.
- **Bug achado:** o simulador do Feed e a fila de eventos do Pixel usavam a mesma chave `sim.feed` no navegador; quem abria o Feed deixava o Gerenciador de Eventos em branco. Feed agora usa `sim.anuncio-feed` (migra o estado antigo) e o Eventos ignora lixo na chave.

## Balão + trilho geral — 16/10/2026 (2ª rodada)
- **Backup antes de estender o trilho:** tag Git `antes-trilho-geral` + `D:\Projects\_backups_lojinha\LojinhaPixel_antes-trilho-geral_2026-10-16.zip` (arquivos) e `.bundle` (Git inteiro). Voltar: `git checkout antes-trilho-geral` (ou descompactar o zip).
- **Desligar o trilho sem mexer em mais nada:** `TRILHO_LIGADO = false` no topo de `assets/js/trilho.js`.
- **Trilho em todos os módulos:** o 1º tutorial de cada módulo (o primeiro cuja aula aparece na trilha Foco) começa pela página inicial. 20/20 testados em tela estreita e larga. No Instagram o 1º visível é `adicionar-instagram` (aulas 01-02 são só da Completa).
- **Balão (tour.js):** escolhe o lugar que cobre MENOS texto (cada linha de texto e cada controle conta; nunca o destaque), em 3 larguras (normal, compacta, fina). Em tela estreita (<760 px) vira uma "folha" colada embaixo (ou em cima, se o destaque estiver embaixo) e a página rola para o destaque ficar livre. Arrastável (telas largas).
- **Por que o André via a sobreposição antiga:** os arquivos tinham o mesmo "carimbo" de versão (`?v=`), então o navegador mostrava o tour.js antigo em cache. Os carimbos foram trocados (`20261016030000`) em todos os HTML; sempre trocar o carimbo ao mudar JS/CSS.

## Modo público (16/10/2026)
- Site publicado: só as ABAS Simuladores e Laboratório ficam escondidas (menu e cartões da página inicial). Módulos (aulas, práticas guiadas, atendimento), Loja, Colas e as telas dos simuladores abertas pelas aulas continuam como estão.
- Local (localhost) nada muda. Pré-visualizar o público no computador: `?publico=1` (e `?publico=0` volta).
- Reverter: `ESCONDER_ABAS = false` em `assets/js/modo-publico.js`.

## Diagnóstico de casos — REFEITO em telas reais (16/10/2026)
Pedido do André: o módulo ficar no FIM da trilha, por temas; as práticas não podem ter telas que não existem na vida real (a "Clínica de casos" e o "Colar o código" antigos eram quiz): têm que guiar por passos simulados de verdade, para a pessoa aprender a fazer e a guiar o cliente. Fontes: o computador do André + Central de Ajuda (Meta e Shopify). Site do cliente = a própria Lojinha da Marina.
- **Estado do site do cliente** (`site-estado.js`, `SITE`): o que está escrito nos arquivos do site / no admin da plataforma decide quais eventos a Loja envia. Só vale com um caso ativo (pílula "Caso do cliente… Encerrar caso"); sem caso nada muda nas aulas de Pixel. O Pixel de verdade continua recebendo só os eventos normais.
- **Telas** (recriadas): `codigo-fonte.html` (view-source + busca de "fbq"), `arquivos-site.html` (editor de arquivos do site: cabecalho.html e obrigado-fim.html), `admin-shopify.html` (Loja virtual › Temas › Editar código › theme.liquid; Facebook e Instagram › Configurações › Compartilhamento de dados com Standard/Enhanced/Maximum e escolha do pixel). No Gerenciador de Eventos simulado: coluna de fonte (Navegador/Servidor), Diagnóstico com os avisos reais da Meta (valor, moeda, nome de evento, vários eventos em uma ação, compras redundantes) e a janela "Instalar o código manualmente" com botões de **copiar** (cola-se de verdade com Ctrl+V no editor).
- **Tutoriais** (`tours-diagnostico.js`, passam por várias páginas): `investigar-purchase`, `colar-codigo-base`, `colar-codigo-compra`, `corrigir-duplicado` (Shopify: app + código manual), `corrigir-valor`, `plataforma-conectada` (bloqueador × nível de dados) e `caso-queda`. Todos rodados de ponta a ponta com conferência do que a Meta recebeu no fim (Purchase único, valor numérico BRL, Purchase pelo servidor, PageView de volta). O trilho do módulo também.
- **Aulas** (5, PT+ES): títulos com o tema (Método, Pixel, Plataformas); módulo é o último da trilha Foco (22 de 22). O simulador antigo (`meta-diagnostico`) foi removido (histórico no Git).
- **Referências Shopify:** help.shopify.com (EN): "Facebook data sharing" e "Meta pixel". Os nomes em português do admin da Shopify são do treino (a conferir com uma loja real: a conta de aula não tem loja Shopify).
- **A fazer:** auditar os demais módulos atrás de práticas com telas que não existem (pedido do André).

## Integrações · Shopify e Meta · MBE — REFEITOS em telas reais, 17/10/2026
- Telas novas: admin da Shopify (`admin-shopify.html`: Configurações › Canais › App Store › Adicionar canal, canal Facebook e Instagram com Iniciar configuração › Conectar conta › Termos › Concluir, Configurações do canal, Status dos produtos, Produtos e Disponibilidade) · admin do WordPress/WooCommerce (`admin-woo.html`: Plugins, Marketing › Facebook, abas Conexão e Sincronização) · janela do MBE (`mbe-janela.js`, compartilhada). Estado em `site-estado.js` (shopify.canal/prods, woo, presets shopify-novo, shopify-conectada, shopify-produtos, woo-novo, woo-conectada).
- Tutoriais novos em `assets/js/tours-integ.js`: `conectar-shopify`, `conectar-extensao` (erro do portfólio), `onde-gerenciar`, `sincronizar-produtos`, `produtos-sumidos`, `conectar-woocommerce`, `manter-desconectar`. Aulas com duas opções reaproveitam tutoriais existentes (`corrigir-duplicado`, `corrigir-valor`, `plataforma-conectada`). Trilhos: shopify 33, woocommerce 28.
- Mantidos (já eram telas reais da Meta): `galeria-parceiros`, `escolher-capi`, `dar-acesso-parceiro` (meta-mbe.html). PENDENTE: `pixel-fonte-catalogo` ainda usa a página meta-terceiros (checklist inventado).
- Fontes: Central de Ajuda da Shopify (Set up Facebook & Instagram, Publishing products, Meta pixel), documentação do WooCommerce e da Meta; telas internas das plataformas e a janela do MBE são do treino (a conferir). Removidos: meta-shopify.html e sim-shopify.*.
- Verificado de ponta a ponta com executor automático: 7 tutoriais novos + 2 trilhos.

## Portfólio avançado — REFEITO dentro das telas reais do portfólio, 17/10/2026
- Os 4 tutoriais (`verificar-empresa`, `corrigir-documento`, `corrigir-permissao`, `excluir-portfolio`) agora rodam em `meta-portfolio.html` (Configurações do portfólio, telas já conferidas): Central de Segurança › Verificação da empresa (Iniciar verificação, documentos recusados), Pessoas › Detalhes › acesso, Informações da empresa › Excluir portfólio. Código novo: `assets/js/sim-portfolio-av.js` (estado em p.av de cada portfólio; casos `PFAV.caso`). Removidos: meta-portfolioav.html e sim-portfolioav.*.
- Janelas de verificação, envio de documentos e exclusão são do treino (não clicadas de verdade; a conferir). Verificado de ponta a ponta com executor automático: 4 tutoriais + trilho (cauda 10).

## Entrega de anúncios — AJUSTADO ao Gerenciador real, 17/10/2026
- A tabela e as colunas já eram fiéis (telas vistas). Trocado o que era inventado: o botão “?” e a caixa “Por que não veicula?” viraram o STATUS REAL da coluna Veiculação, com ícones (erro, aviso, pendente, ativo, inativo) e os significados da Central de Ajuda (“Como ver o status da campanha, do conjunto de anúncios ou da veiculação”); novo nível Campanhas (status pode enganar: “Conjunto de anúncios desativado”) e Histórico de atividades (recurso real; entradas de treino). Tutorial `nao-veicula` refeito nessa ordem. Verificado de ponta a ponta (4 tutoriais, PT e ES).
- Pendente/a conferir: texto exato do balão do status ao passar o mouse; nível Anúncios (status Rejeitado) ainda não simulado.

## Pixel como fonte do catálogo + teste de aluno teimoso — 17/10/2026
- `pixel-fonte-catalogo` refeito: Catálogo › Fontes de dados › Adicionar › Pixel da Meta (janela com as 5 condições lidas das outras telas: Eventos, Microdata Debugger, Loja), passando por Microdata Debugger e Loja. Removidos: meta-terceiros.html e sim-terceiros.*.
- Teste teimoso automático (voltar ◀, recarregar a página, clicar fora) em 19 tutoriais refeitos: achados e corrigidos — voltar não pode desfazer nem repetir a ação do passo (garantes que refazem o estado, sem .click() no alvo), janela do MBE ao voltar, diálogos que somem ao recarregar, e ◀ removido do passo logo depois de um pedido feito. Único caso aberto: recarregar muito rápido a página do pedido gera aviso de PageView duplicado (comportamento real).

## Diagnóstico virou ÁREA PRÓPRIA (19/10/2026)
- Fora das trilhas. Página `diagnostico.html` (card na página inicial e aba no menu, também no site publicado). Blocos = “módulos” com `area: 'diagnostico'` em `window.MODULOS` (ids `dg-pixel`, `dg-integracoes`, `dg-anuncios`, `dg-catalogo`, `dg-contas`, `dg-instagram`, `dg-commerce`; os 5 últimos ainda planejados).
- Formato de caso (`aula-plataforma.js`/`plataforma.js`, quando `m.area === 'diagnostico'`): 1 A Marina reclama (`reclamacao`: falas Marina/Rafa) → 2 Resolver (o tutorial guiado) → 3 Por que aconteceu (o `entender`) → 4 Ver de perto → 5 Atender + Cola.
- Os 5 casos antigos foram distribuídos: dg-pixel 01 Purchase não chega, 02 colar o código, 03 compras em dobro e valor errado, 04 queda depois do tema; dg-integracoes 01 plataforma conectada (bloqueador). Os tutoriais mantêm o nome. Trilhos: `investigar-purchase` e `plataforma-conectada` começam em Início › Diagnóstico.
- Próximo: pesquisa dos problemas mais reportados (`_roteiro/DIAGNOSTICO_PESQUISA.md`) e, depois da escolha do André, novos casos bloco a bloco (roteiro completo em `_roteiro/PROMPT_OPUS_DIAGNOSTICO.md`).

## Diagnóstico: 12 casos novos (19/10/2026, na ordem escolhida pelo André)
- **Conteúdo:** IIFE no fim de `conteudo.js` (depois da distribuição dos antigos) que acrescenta os casos aos blocos. Blocos `dg-anuncios`, `dg-catalogo`, `dg-contas` e `dg-instagram` passaram a “em construção”; `dg-commerce` continua planejado (telas a conferir).
- **Casos:** dg-pixel 05 API de Conversões em dobro (`desduplicar-eventos`), 06 Purchase em todas as páginas (`purchase-cabecalho`, NOVO); dg-anuncios 01 não roda (`nao-veicula`), 02 Publicar apagado (`resolver-publicacao`); dg-catalogo 01 produtos da Shopify sumidos (`produtos-sumidos`), 02 itens rejeitados (`catalogo-problemas`, NOVO: aba Problemas no catálogo); dg-instagram 01 Instagram não aparece (`perfil-nao-aparece` + opção `conectar-instagram`); dg-integracoes 02 Shopify sem Pixel (`shopify-sem-pixel`, NOVO), 03 produto que não sincroniza (`sincronizar-produtos`); dg-contas 01 Página não aparece ao conectar (`conectar-extensao`), 02 Página presa em outro portfólio (`pagina-outro-portfolio`, NOVO).
- **Telas novas:** presets `purchase-cabecalho` e `shopify-sem-pixel` (`site-estado.js`); menu Problemas no catálogo (`sim-catalogo.js`: erros/avisos, Revisar, Atualizar a fonte, Solicitar outra análise); caso `pagina-outro` no portfólio (`sim-portfolio-av.js`: portfólio antigo da Mari, Adicionar Página existente com erro “já pertence a outro portfólio”, Remover).
- **Trilhos:** `trilho.js` aceita apelido (`{ tour: '...' }`) para o mesmo tutorial ter trilho no Diagnóstico sem mexer no link do módulo de origem: `dg-anuncios-01`, `dg-catalogo-01`, `dg-instagram-01`, `dg-contas-01`. “Como fazer…” ganhou os grupos dos blocos novos.
- Todos os casos começam com a Marina; os tutoriais reaproveitados que falavam de “Caio”, “Davi” ou “a cliente” agora falam da Marina.

## Shopify conferida numa loja REAL (19/10/2026)
- O André criou uma loja de teste na Shopify (endereço e dados da loja NÃO entram no repositório). Conferido pelo Chrome dele, sem pagar nada: Produtos, Publicação, Loja virtual (tema Horizon), editor de código, Configurações › Canais de vendas e › Eventos de clientes (pixels), pixel personalizado, App Store, tela de permissões do app, canal Facebook & Instagram sem conta e o “Configure sua loja” com a conta de aula conectada (Ativos, Catálogo, janela de preferências de compartilhamento de dados, conjunto de dados, Termos).
- `admin-shopify.js` refeito com essas telas (nomes internos `data-t` mantidos; passos novos: `btn-instalar-app`, `btn-conectar-catalogo`, `dlg-pref`, `btn-alterar-pref`, `btn-salvar-pref`). Níveis agora com os nomes reais: Conservador · Aprimorado · Máximo (chaves internas standard/enhanced/maximum). `SITE.tema()` = início real do theme.liquid do Horizon.
- Ficou “a conferir”: a tela do canal JÁ configurado (a loja de teste parou antes de “Enviar para análise”, que abre loja no Facebook e pede o Acordo do Vendedor) e os nomes em espanhol.
- Achado para casos novos: pixel personalizado (Configurações › Eventos de clientes) aceita só JavaScript (“certifique-se de excluir o HTML”) e usa analytics.subscribe(); pixel personalizado + app = eventos em dobro.
- Deixados na loja de teste: produto “Caneca azul (teste)”, pixel personalizado “Pixel manual (teste)” (desconectado), app Facebook & Instagram instalado e ligado ao portfólio/catálogo de aula.
- **Caso novo (dg-integracoes 04):** “Shopify: compras em dobro com pixel personalizado” (`pixel-personalizado-dobro`). Preset em `site-estado.js` com `shopify.pixelCustom` (código JS com analytics.subscribe page_viewed/checkout_completed, roda fora do tema: não aparece no código-fonte); admin: Configurações › Eventos de clientes › página do pixel personalizado › Desconectar (botão “a conferir”). Diagnóstico simulado agora conta navegador + servidor com o mesmo event_id como UMA compra.
- **Próximas frentes pedidas pelo André:** (1) Catálogo: praticar conferir se a planilha do feed está correta (pesquisa oficial pronta: modelo em + Adicionar › Arquivo de dados › Baixar modelo; erros de “Como solucionar erros de feed de dados no catálogo”); (2) Microdata: prática de CONFIGURAR as tags (OpenGraph/JSON-LD) na página de produto — o módulo atual só verifica, lê campos e acha a página com erro.
- **Caso novo (dg-integracoes 05):** “Shopify: o pixel personalizado não salva” (`pixel-personalizado-html`). Conferido na loja real: com `<script>` a Shopify marca as linhas com bolinha vermelha e não salva (“Corrija o erro de código destacado.”); salvo = aviso “Pixel salvo” + faixa “o acesso ao pixel é feito em sandbox”; Conectar abre “Conectar <pixel> a <loja>” (acesso à loja virtual, checkout e confirmação do pedido) → “Pixel conectado” → botões Testar · Mais ações · Desconectar; Desconectar abre “Este pixel deixará de ser carregado na sua loja. Você poderá reconectar este pixel.”. Tudo isso agora no simulador (admin-shopify.js).
- **Selecionar passo (tour.js):** “Passo X de Y ▾” no balão abre a lista de passos; passo já visto = como o ◀; passo adiante abre a página dele (ou a do último passo com página) e roda o garante() ao chegar (sessionStorage `tour.salto`); meio de um caminho sem página (ex.: compra) começa do início dele.
- **Frentes pedidas (fila):** planilha do Catálogo; configurar microdados; **SDK da Meta (apps) e iOS 14** (ainda não há nada no conteúdo; só uma nota em Relatórios dizendo que o efeito do iOS não foi lido).

## Catálogo · aula 06 “Conferir a planilha do catálogo” (19/10/2026)
- Conferido no Gerenciador de Comércio real (catálogo de aula, só olhando): menu Adicionar das Fontes de dados, página “Carregar arquivo de dados” (Baixar modelo ▾: Modelo padrão .xlsx/.csv · Modelo personalizado; URL/Planilhas Google ou Carregar do seu computador) e a visão geral do feed (“Resumo do upload dos produtos”: Atualizados ou adicionados · Removidos · Falha no upload · Problemas). O feed de aula NÃO foi mexido.
- Simulador (`sim-catalogo.js`): rotas `cat/<id>/carregar`, `cat/<id>/planilha` (planilha de treino da Marina, editável, Salvar) e `cat/<id>/feed` (sessões de carregamento, contadores, “Baixar relatório de problemas” na tela). Validação com os nomes oficiais da Central de Ajuda: identificações duplicadas, preço/moeda, valores inválidos, URL, campo obrigatório, só maiúsculas (aviso), identificações universais (aviso). Linha de exemplo do modelo (Tapete listrado · Jasper's Market) entra como produto se não for apagada.
- Tutorial `conferir-planilha` (24 passos), quiz `planilha-ok`, “Como fazer…” no grupo do Catálogo; espanhol em `sim-es-catalogo.js` (a grade da planilha não é traduzida).

## Pergunte ao Pixel: busca no conteúdo, sem IA e sem baixar nada (20/10/2026)
- Por que assim: a página publicada é um site parado (GitHub Pages) e o aluno não pode baixar nada. IA de empresa (chave exposta, custo) e IA no navegador (modelos de 118 MB a 4 GB; a do Chrome, Gemini Nano, ainda não aceita português) ficaram de fora. A busca roda no navegador, em ~0,3 ms, e **nunca inventa**: só aponta para aulas, casos e tutoriais já conferidos.
- Onde aparece: botão “🔎 Pergunte ao Pixel” no topo de todas as páginas da plataforma (atalho: tecla /) e caixa grande na página inicial. Cada resultado abre a aula/caso (direto na parte que mais casou: explicação, prática ou atendimento) e, quando existe, o botão “▶ Tutorial guiado”.
- Arquivos: `assets/js/pergunte.js` (motor + caixa) e `assets/academia/busca-frases.js` (frases de aluno de cada aula, PT/ES; não aparecem na tela). O índice é montado na hora a partir de AULAS, MODULOS e COMO (`window.COMO` em plataforma.js): aula nova entra sozinha na busca.
- Como entende o aluno: acentos/maiúsculas não importam; famílias de palavras (duplicou = duplicado = duplicação); grupos de sinônimos PT/ES/EN em `SINONIMOS` (“duas vezes” = “em dobro” = “dos veces” = “dedup”…); erros de digitação (mostra “Entendi ‘catalgo’ como ‘catálogo’”); palavra pela metade; palavras grudadas/separadas (event_id = event id); frases vizinhas valem mais; título e frases de aluno pesam mais; perguntas “como…” puxam tutoriais, “não…/erro” puxam casos.
- **Aula nova?** Acrescentar 4–8 frases de aluno em `busca-frases.js` (chave 'módulo/aula') e, se surgir um jeito novo de dizer algo, um grupo em `SINONIMOS`. Depois rodar `node _ferramentas/busca/bateria.js` (meta: top 3 = 100%) e `node _ferramentas/busca/bateria_cega.js` (perguntas escritas sem ajuste).
- Resultado em 20/10: bateria principal 161 perguntas → 100% no top 3, 94% em 1º; às cegas 65 perguntas → 97% no top 3, 88% em 1º. Testado: topo nas 11 páginas, celular, espanhol, modo público (nada aponta para Simuladores/Laboratório), teclado (setas, Enter, Esc) e o botão de tutorial.

## Microdados · aula 05 e módulo novo “Apps e iOS 14” (20/10/2026)
- **Microdados 05 “Configurar as tags na página do produto”:** fonte = documentação oficial “Microdata tags” (Meta for Developers, lida em 20/10): OpenGraph no <head> (og:title, og:description, og:url, og:image, product:brand, product:availability, product:condition, product:price:amount, product:price:currency, product:retailer_item_id, product:item_group_id), schema.org na página ou JSON-LD num <script>; só catálogo de e-commerce; o produto só atualiza depois de o Pixel disparar.
  - Prática `configurar-microdados` (12 passos): no Editor de arquivos do site (`arquivos-site.html?arq=ecobag&mdzerar=1`) a página da Ecobag tem o exemplo da Meta pela metade (id facebook_tshirt_001, preço 39,90, moeda R$, “em estoque”, item_group_id fb_tshirts); o aluno corrige, salva e confere no Microdata Debugger de treino, que agora LÊ as tags escritas (`md-pagina.js`: OpenGraph + JSON-LD) e aponta o campo errado (dica do simulador; a tela real só diz “Falha na validação de dados”).
  - Quiz `tags-microdados`, item no “Como fazer…”, frases na busca. Rascunho da Ecobag sobrevive a recarregar (sessionStorage) até salvar.
  - tour.js: passo com `pagina: 'x.html?param'` recarregava sem parar; agora compara só o nome da página.
- **Módulo novo `apps-ios` (trilha Foco, depois do Pixel avançado), 4 aulas PT/ES:** 01 iOS 14: o que mudou de verdade · 02 Números menores no iPhone · 03 O SDK da Meta: os eventos do app · 04 Anúncios de app para iPhone: AEM ou SKAdNetwork.
  - Fontes lidas em 20/10 (Central de Ajuda da Meta, via navegador): Mensuração de Eventos Agregados (para o SITE nenhuma ação é necessária: não prioriza mais 8 eventos, a aba AEM saiu do Gerenciador de Eventos, domínio não precisa ser verificado para eventos); anúncios para iOS 14.5+ (públicos personalizados tendem a diminuir → público amplo); conceitos-chave AEM/SKAdNetwork (SKAN limita a 63 eventos); relatórios SKAN (atraso ≥24 h, sem janelas 1/7/28 dias); resultados calculados de forma diferente (modelagem estatística); qualificação do app (Gerenciador de Eventos › Conjuntos de dados › Configurações › Tarefas de configuração para eventos do app iOS › Atribuição da Meta para iOS 14+ › Verificar qualificação do app). Meta for Developers: eventos do app iOS/Android (SDK registra sozinho instalações, aberturas e compras no app; App Ads Helper para testar; iOS 14.5+ isAdvertiserTrackingEnabled). Apple: App Tracking Transparency (sem permissão o IDFA vem zerado).
  - “Ver de perto”: `att-aviso` (o aviso do iPhone interativo, recriação: texto exato em PT/ES a conferir) e quizzes `ios-numeros`, `sdk-ou-pixel`, `aem-ou-skan`. Sem prática guiada (não há telas reais de app/Gerenciador de Eventos de app conferidas: fica como pendência).
- **Ganchos (“Na próxima aula:”):** o texto do gancho só aparece no fim da aula, anunciando a SEGUINTE. Em 15 módulos ele descrevia a própria aula (microdados, entrega, regras, relatórios, segmentação, verified, commerce, shop-ads, shop-ads-offsite, portfólio avançado, pixel avançado, mbe, integrações, shopify e o novo apps-ios): passou para a aula anterior; a última aula do módulo ficou sem gancho.

## PENDÊNCIAS (pausa em 18/10/2026)
1. **André testar** o que foi feito (nada publicado): Pergunte ao Pixel (busca), aviso “📍 Onde você está” nos tutoriais, 12+2 casos novos do Diagnóstico, simulador da Shopify refeito, casos do pixel personalizado (Integrações 04 e 05), “Passo X de Y ▾” (selecionar passo) e a aula 06 do Catálogo (conferir a planilha). Publicar só quando ele pedir.
2. ~~Microdados: prática de configurar as tags~~ **feito em 20/10** (aula 05).
3. ~~SDK da Meta e iOS 14~~ **feito em 20/10** (módulo Apps e iOS 14). Falta: prática guiada com telas reais (Gerenciador de Eventos com app, verificar qualificação do app) e conferir o texto do aviso do iPhone em PT/ES.
4. **WhatsApp Business** (ideia do André, 18/10): ele tem conta da Lojinha com catálogo. Recomendação dada: começar pelo WhatsApp Business no computador (Chrome dele, só olhar e anotar; nunca enviar mensagem sem “sim” a cada uma); scrcpy se alguma tela só existir no celular. ARTEMIS (Google, MCP para Android) fica para um celular de teste: precisa de chave de IA própria (Gemini) ou Ollama local (disputa a placa com a Ali), manda capturas de tela à IA e instala app de acessibilidade. Falta o André decidir se passa na frente de 2 e 3.
5. **Loja Shopify de teste CANCELADA em 20/10/2026** (a pedido do André; a Shopify guarda os dados por 2 anos e dá para reabrir). O que ficou sem conferir fica “a conferir” no simulador: **Shopify, ainda “a conferir”:** a tela do canal Facebook & Instagram JÁ configurado (o caminho “Loja e anúncios” exige Acordo do Vendedor + Enviar para análise; tentar “Apenas anúncios”) e os nomes em espanhol.
6. **Loja Shopify de teste do André** (link nunca no repo): ficaram o produto “Caneca azul (teste)” e o pixel personalizado “Pixel manual (teste)” (desconectado, com código de teste sem efeito); app Facebook & Instagram instalado e ligado ao portfólio/catálogo de aula. Apagar é decisão dele.
7. Commerce (dg-commerce) segue planejado (telas a conferir).
