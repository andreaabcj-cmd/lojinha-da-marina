# A história da Marina — roteiro da trilha (rascunho em revisão)

A trilha inteira é **uma história só**: a Marina começa sem saber nada e termina com o ecossistema da Meta
inteiro funcionando. Cada **módulo** é um momento do negócio dela; cada **aula** abre com
"onde paramos" e fecha com um gancho para a próxima.

Regras do roteiro:
- **A regra de ouro (13/10):** não se perder. Toda aula respeita DUAS coisas ao mesmo tempo: o **nível da Marina** naquela fase e a **hierarquia da Meta** (uma ferramenta/recurso só aparece depois daquilo de que ele depende).
- Uma aula = uma pergunta da Marina. A aula responde essa pergunta e só ela.
- A Marina sabe exatamente o que a fase dela permite saber: ela **não** pergunta de API de Conversões na fase 1.
- Se uma aula mais à frente pedir mudança numa aula de trás, muda (e anota aqui).
- As fases são o momento do negócio dela, sem julgamento.
- A Marina que "pesquisou na IA" é tratada com respeito: o caso ensina a corrigir sem humilhar.

## As 5 fases

| Fase | Como a Marina é | Módulos (em ordem) |
|---|---|---|
| 🌱 **Cliente nova** | Não sabe nada, mistura termos, às vezes chega com resposta pronta de IA | Portfólio básico · Instagram para empresas · Pixel (básico) |
| 🚀 **Em ascensão** | Primeiras vendas, já sabe o básico, ainda confunde | Gerenciador de Anúncios (criar/editar) · Anúncios no Feed · Catálogo |
| 📈 **Consolidada** | Investe todo mês e quer entender os números | Relatórios e métricas · Segmentação · Entrega · Regras automatizadas · Pixel avançado |
| ⭐ **Referência** | Loja séria, quer confiança e vender dentro da Meta | Meta Verified · Introdução ao Commerce · Shop Ads · Shop Ads com checkout fora da Meta |
| 🏆 **Grande anunciante** | Tem equipe, agência ou desenvolvedor; as perguntas são técnicas | Portfólio avançado · MBE e parceiros · Integrações de terceiros · Shopify · WhatsApp (depois) |

Por que essa ordem (a "hierarquia"):
- **Portfólio antes do Pixel:** o Pixel nasce DENTRO de um portfólio (foi o que aconteceu no nosso tutorial real:
  primeiro criamos o portfólio, depois tentamos criar o Pixel). Sem portfólio não tem onde o Pixel morar.
- **Instagram cedo:** quase toda cliente nova chega pelo Instagram; conectar a conta profissional é base.
- **Anúncios antes do Catálogo:** a Marina primeiro anuncia; o catálogo aparece quando ela quer mostrar os produtos
  nos anúncios. O catálogo depende do Pixel (os IDs dos produtos precisam bater).
- **Métricas antes de Regras:** regra automática usa métrica ("se o custo passar de X…"); sem entender o número, a regra não faz sentido.
- **Pixel avançado na fase 3:** correspondência avançada, qualidade do sinal, API de Conversões e deduplicação
  só viram problema quando ela já investe e quer medir melhor.
- **Commerce antes de Shop Ads:** Shop Ads usam a loja e o catálogo do Commerce.
- **A conferir:** disponibilidade de Shop Ads e checkout por país (Brasil/América Latina) — conferir na documentação antes de escrever.

## Fase 1 · 🌱 Cliente nova — em detalhe

A Marina tem a Lojinha (site) e um Instagram pessoal. Uma amiga disse: "você precisa colocar o Pixel".

### Módulo: Portfólio básico (a construir)
- Gancho de entrada: "Me mandaram instalar um tal de Pixel, mas pedem um 'portfólio'. O que é isso?"
- Aulas (esboço): o que é o portfólio · Página e conta de anúncios dentro dele · pessoas e permissões.
- Gancho de saída: "Portfólio pronto! Agora conectar o Instagram."

### Módulo: Instagram para empresas (a construir)
- Gancho de entrada: "Meu Instagram é pessoal. Preciso mudar alguma coisa?"
- Gancho de saída: "Instagram conectado. Agora sim: o tal do Pixel."

### Módulo: Pixel (básico) — reorganizado
| # | Pergunta da Marina | O que a aula ensina | Gancho para a próxima |
|---|---|---|---|
| 01 | "O que é esse Pixel? A IA me disse que ele 'rastreia tudo'." | O que o Pixel faz (mede o que acontece no site e conta para a Meta), em linguagem simples; corrigir a ideia da IA com respeito | "Entendi. E como eu crio um?" |
| 02 | "Como eu crio o Pixel e coloco no site?" | Criar no Gerenciador de Eventos (dentro do portfólio) e onde o código vai | "Instalei! Mas está funcionando?" |
| 03 | "Instalei. Como sei se está funcionando?" | **A aula 02 de hoje**: as 3 perguntas (tem Pixel? é o certo? o PageView chega?) e os 4 jeitos de conferir | "As visitas chegam. Mas e as vendas?" |
| 04 | "Ele sabe quando alguém compra?" | Eventos e parâmetros (Purchase, valor, moeda) | "Vendi! Mas apareceu um aviso no Gerenciador…" |
| 05 | "Apareceu um aviso. Quebrei alguma coisa?" | Diagnóstico e solução de problemas básicos (o simulador com falhas) | → fase 2: "Quero anunciar!" |

Mudanças que isso pede no que já existe:
- A aula **02 atual** vira a **03** e muda de título: "O Pixel está funcionando?" (Entender com as 3 perguntas; o código fica no Ver de perto, para mostrar O QUE procuramos).
- As aulas 06–09 e 11 (correspondência avançada, bússola/qualidade, CAPI, privacidade) vão para o **Pixel avançado** na fase 3.
- A aula 10 (Pixel e catálogo) vai para o módulo **Catálogo**.


### Aula 05 · "Apareceu um aviso: quebrei alguma coisa?" — ROTEIRO APROVADO (14/10), construção ESPERANDO a tela real
Só construir quando o Pixel real existir e der para ver: (a) o Diagnóstico do Gerenciador de Eventos com um problema; (b) a área de ações/correções do Consultor de Dados.
- Entender: Marina assustada com o AVISO. Rafa: aviso não é quebra. Pixel: "Aviso não quer dizer que eu parei. É o Gerenciador mostrando o que dá para melhorar." (sem comparação com detetive)
- Método: 1) onde aparece (Diagnóstico / status no Consultor de Dados: Ativo, Aviso, Erro, Nenhum pixel) · 2) qual evento e o que falta · 3) quem resolve, em ESCADA:
  1. 🔍 ver o que a Meta aponta (Diagnóstico: descrição + passos; Consultor de Dados: eventos quebrados e parâmetros faltando)
  2. 🤝 resolver junto pelos meios OFICIAIS (passos do Diagnóstico, correção sugerida pelo Consultor de Dados com aprovação, integração da plataforma)
  3. 🧑‍💻 só se precisar mexer no código: encaminhar com o texto exato
  4. ✅ sempre testar junto no Testar eventos
- Ver de perto: "Mesa de diagnóstico" (sintoma → onde olhar → o que aparece → causa → quem resolve).
- Praticar: menu "Casos do dia" (como a aula 03), cada caso liga uma falha do laboratório: ⭐ venda zerada (semPreco) · testei e não aparece nada (olhosTapados) · nenhum evento chega (cadernoErrado) · visitas em dobro (duplicado).
- Atender: "Apareceu Aviso, quebrei tudo?" ✅ "Calma, aviso não quer dizer que quebrou. Vou ver o que o Gerenciador está apontando e te digo o que é e quem resolve."
- Gancho: fim do Pixel básico → fase 🚀 Em ascensão ("agora a Marina quer anunciar!").
- Fontes oficiais: Diagnóstico (facebook.com/business/help/667164051342757); Meta Ads Data Advisor (developers.facebook.com/documentation/meta-pixel/support/meta-ads-data-advisor). Ferramenta de configuração de eventos: a conferir (não ensinar ainda).
- Regra do André: NADA de fonte de terceiros; só oficial da Meta. Não implementar tela que não vimos de verdade.

## Anotações para os tutoriais (telas reais conferidas)
- **Conta de anúncios (14/10):** Configurações › Contas de anúncios › Adicionar › Criar uma nova conta de anúncios. Etapas: Detalhes (nome, fuso horário, moeda) → Uso (Minha empresa / Outra empresa ou cliente) → Confirmar (aceite dos Termos Comerciais e Políticas de Publicidade). ⚠️ **Moeda e fuso horário NÃO podem ser trocados depois.** ⚠️ Depois de adicionada, a conta não pode ser removida do portfólio. Criar a conta não pede forma de pagamento.
- **Gerenciador de Eventos · Visão geral (14/10, portfólio sem Pixel):** "Que bom ter você aqui, [nome]!" · "Conecte seus dados" · "A conexão do Pixel da Meta e da API de Conversões fornece mais dados sobre como os clientes interagem com sua empresa. Escolha um parceiro abaixo para começar." · selo "Redução de 25% no custo por conversão fora do site" · parceiros Google Tag Manager, Shopify, WooCommerce ("Eventos da web") · links "Ver outras maneiras de configurar" e "Configure para mim". Menu: Conectar dados, Visão geral, Conjuntos de dados, Conversões personalizadas, Integrações.
- **Configurações do portfólio · menu (14/10, só rótulos):** Tarefas · Informações da empresa · Usuários (Pessoas, Parceiros, Usuários do sistema) · Contas (Páginas, Contas de anúncios, Grupos de ativos de negócios, Apps, Perfis do Instagram, Contas do WhatsApp, Perfis do Threads) · Fontes de dados (Catálogos, Conjuntos de dados e pixels, Conjuntos de eventos offline, Conversões personalizadas, Públicos compartilhados, Pastas de criativos da empresa) · Pedidos · Adequação e segurança para marcas (Domínios, Listas de bloqueio de publishers) · Integrações (Apps conectados, Acesso a leads, Encaminhamento da conversa, Servidor MCP de anúncios) · Cobrança e pagamentos · Meta Verified · Páginas de notícias · Central de Anúncios em Parceria · Central de Segurança · Notificações · Guia de configuração.
- **Pessoas (14/10):** botões Filtros · Exportar · **Convidar pessoas**. Colunas: Nome · Acesso ao portfólio empresarial (ex.: "Acesso total" / "Tudo") · Última sessão ativa (Ativo/Inativo) · Detalhes · Mais.
- **Convidar pessoas (14/10, só a 1ª etapa vista):** etapas Inserir email → Conceder acesso → Atribuir ativos → Analisar. Texto: "Insira os emails das pessoas que você quer convidar para o portfólio empresarial [nome]. Notificações sobre o portfólio também serão enviadas para esses emails." Campo "Endereço de email"; "Configurações adicionais · Acesso temporário"; link "Quer trabalhar com alguém de uma empresa diferente? Adicione essa pessoa como parceiro". Botões Cancelar / Avançar. Etapa 2 "Conceder acesso ao portfólio empresarial": Acesso parcial · Básico (todos têm; trabalham só nos ativos atribuídos) e Acesso total · Tudo · interruptor Gerenciar (máximo; pode atribuir acesso total e excluir o portfólio). Etapa 3 "Atribuir ativos de negócios": tipo de ativo · ativos · Atribuir permissões (dica: para veicular anúncios, dar acesso a anúncios na Página/Instagram). Etapa 4 "Conferir o convite": resumo + aviso do que os convidados veem + botão "Convidar com N ativos". Fechar no meio pergunta "Tem certeza de que deseja fechar?… nenhuma pessoa será adicionada" (Voltar / Sim, fechar). Conferido 14/10 com email de teste, SEM enviar.
- **Páginas · Adicionar (14/10):** "Adicionar uma Página do Facebook existente" (Ideal para: quando você precisa gerenciar uma Página no mesmo portfólio empresarial que outras Páginas do Facebook, perfis do Instagram ou outros ativos de negócios.) · "Solicitar acesso compartilhado a uma Página do Facebook" (a própria Meta mostra a descrição em inglês: acesso compartilhado sem conectar a Página; ideal para agências) · "Criar uma nova Página do Facebook" (Conecte-se e compartilhe com clientes novos e existentes no Facebook.). Vazio: "Nenhuma Página adicionada".
- **Informações da empresa (14/10, só rótulos — NUNCA os dados):** Informações do portfólio empresarial (nome, Identificação do portfólio empresarial, Página principal) · Detalhes da empresa (Razão social, Endereço, Telefone comercial, Site) · Status de verificação da empresa ("Não verificada") · Histórico da empresa · Limite de criação de contas de anúncios · Localização principal · Opções da empresa (Autenticação de dois fatores: "Exigir um código de login para acessar este portfólio empresarial em navegadores desconhecidos.", Páginas e notificações, Meta One) · Informações de contato do perfil.
- **Criar conjunto de dados (14/10):** mesmas telas de 13/10 (Conectar dados › Web › Avançar › nome + caixa da API de Conversões + categorias › Criar).

## Regras dos tutoriais guiados (14/10)
- No modo guiado não dá para errar: só o destaque e o balão aceitam clique; escolha errada segura o Próximo; botões da janela só valem no passo certo.
- Voltar ◀ e avançar de novo mantêm o que foi preenchido; o ◀ reabre a página/tela/janela do passo.
- Destaque dentro de janela/painel: a janela fica inteira visível; só o fundo escurece.

## Pendências de revisão
- [ ] **(depois)** Laboratório: todos os tutoriais guiados acessíveis como "Como fazer X" (criar o Pixel, convidar pessoa, criar conta de anúncios…), e a parte da loja/simulação da plataforma que estamos reconstruindo. O Laboratório também guiado.
- [x] Aprovado: a ordem das fases, "Portfólio antes do Pixel" e a divisão Pixel básico/avançado (13/10).
- [x] No site: módulos agrupados por fase; a antiga aula 02 virou a 03 "O Pixel está funcionando?" com "onde paramos" e gancho.
- [x] Aulas 01, 02, 03 e 04 do Pixel básico prontas (14/10, no computador local).
- [x] Módulo Portfólio básico: aulas 01–04 prontas (14/10, local) + simulador Configurações do portfólio (meta-portfolio.html). Convite de pessoas: as 4 etapas conferidas na tela real (14/10).
- [ ] Aula 05: roteiro aprovado; construir quando o Pixel real existir (ver a seção da aula 05).
- [ ] Detalhar fases 2–5 quando chegar a vez de cada uma.
