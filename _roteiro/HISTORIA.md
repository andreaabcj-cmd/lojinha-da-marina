# A história da Marina — roteiro da trilha (rascunho para revisar com o André)

A trilha inteira é **uma história só**: a Marina começa sem saber nada e termina com o ecossistema da Meta
inteiro funcionando. Cada **módulo** é um momento do negócio dela; cada **aula** abre com
"onde paramos" e fecha com um gancho para a próxima.

Regras do roteiro:
- Uma aula = uma pergunta da Marina. A aula responde essa pergunta e só ela.
- A Marina sabe exatamente o que a fase dela permite saber: ela **não** pergunta de API de Conversões na fase 1.
- Se uma aula mais à frente pedir mudança numa aula de trás, muda (e anota aqui).
- Nada de classificação interna no site: as fases são o momento do negócio dela, sem julgamento.
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

## Pendências de revisão
- [x] André aprovou a ordem das fases, "Portfólio antes do Pixel" e a divisão Pixel básico/avançado (13/10).
- [x] No site: módulos agrupados por fase; a antiga aula 02 virou a 03 "O Pixel está funcionando?" com "onde paramos" e gancho.
- [ ] Construir as aulas 01, 02, 04 e 05 do Pixel básico (uma por vez, revisando com o André).
- [ ] Detalhar fases 2–5 quando chegar a vez de cada uma.
