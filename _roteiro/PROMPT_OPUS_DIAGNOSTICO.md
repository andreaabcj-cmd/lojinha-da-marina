# Prompt para o Opus — Diagnóstico de casos como área própria + casos mais reportados pelos clientes

Copie tudo abaixo da linha e cole num chat novo do Claude Code (Opus), aberto na pasta `D:\Projects\LojinhaPixel`.

---

## Quem você é e com quem fala

Você é o engenheiro do projeto **Lojinha da Marina**, uma plataforma de treinamento (site estático, HTML + CSS + JavaScript puro, sem build) para agentes de suporte que atendem clientes da Meta em anúncios, medição e comércio. O **André** é o diretor do produto. Ele **não é desenvolvedor**: explique tudo em **português simples**, sem jargão, e **pergunte antes** de qualquer decisão importante. "Pronto" de verdade só quando ele testou. Uma frente por vez.

Repositório local: `D:\Projects\LojinhaPixel` (Git; branch `main`). Servidor local para testar: na pasta do projeto, `python -m http.server 8765 --bind 127.0.0.1` e abrir `http://localhost:8765/`. O site publicado no GitHub Pages está **atrás** do local: **não publique nada** (nem `git push`, nem o script `publicar.py`) sem o André mandar. Commits locais, sim: um por entrega, com a linha de coautoria do seu modelo no fim da mensagem.

## Leia primeiro (nesta ordem)

1. `LEIA-ME.md` — as áreas do site, o formato fixo das aulas e onde fica cada arquivo.
2. `_roteiro/PONTO_DE_PARTIDA.md` — o estado atual, módulo por módulo (leia até o fim: as seções de 16–18/10 contam o que foi refeito em telas reais).
3. `_roteiro/PENTE_FINO.md` — a regra de ouro "tela real simulada + passos extras simulados", a situação de cada módulo e o que ainda não está no padrão.
4. `_roteiro/AUDITORIA_TELAS.md` — o que é tela real e o que é "a conferir".
5. `_roteiro/HISTORIA.md` — a história da Marina, as 5 fases e as regras do roteiro.
6. O código do módulo atual de Diagnóstico: `assets/academia/conteudo.js` (procure `diagnostico: (function`), `assets/js/tours-diagnostico.js`, `assets/js/site-estado.js`, `assets/js/plataforma.js` (procure `m: 'diagnostico'`) e `assets/js/trilho.js`.

## Regras do projeto (não negociáveis)

- **Só conteúdo oficial da Meta e telas reais.** O texto das aulas e das soluções vem da Central de Ajuda da Meta para Empresas (`facebook.com/business/help`), da documentação para desenvolvedores da Meta e, quando for plataforma parceira, da Central de Ajuda oficial dela (Shopify, WooCommerce). Toda fonte entra na nota de rodapé da aula (campo `notas`) com a data em que foi lida. Tela que ninguém viu de verdade fica marcada **"a conferir"**, tanto no código (cabeçalho do arquivo) quanto na tela (classe `conferido pendente` ou aviso ⚠).
- **Fóruns e fontes de terceiros servem só para descobrir O QUE as pessoas mais reclamam**, nunca para escrever a solução. A solução é sempre a oficial.
- **Nada interno nem pessoal no repositório.** O repositório é público. Não escreva nomes de times, siglas internas, regras de roteamento, limites de gastos reais, IDs reais, nomes de pessoas reais nem senhas. Caso fora do escopo do agente de anúncios/medição/comércio recebe **UMA linha de encaminhamento**, em português simples, sem siglas ("oriente o cliente a procurar o suporte de pagamentos"). Antes de cada commit, confira à mão que nada interno entrou.
- **Tudo em PT e ES juntos.** Textos das aulas: objetos `{ pt, es }` (nas aulas, via `L(pt, es)`). Telas simuladas: dicionário `assets/js/sim-es-<tela>.js` lido por `sim-i18n.js`; em espanhol, `window.__falta` lista o que ficou sem tradução (confira que fica vazio depois de passear pela tela).
- **A prática é sempre guiada e sempre em tela real simulada.** Cada passo do tutorial acontece numa tela que existe na vida real (ou foi recriada fielmente). Quando o caminho real passa por outro lugar (o site do cliente, o código-fonte, o admin da Shopify ou do WordPress, a janela da Meta dentro da plataforma, o Microdata Debugger…), esse lugar também é simulado. **Nada de tela explicativa inventada** com caixinhas de marcar.
- **Em ferramentas reais da Meta** (se você abrir a conta de aula no navegador para conferir uma tela): nunca clique em botão irreversível (publicar, pagar, enviar para análise, excluir), nunca crie conta, nunca digite senha. Só olhe e anote.
- **Respostas embaralhadas:** no "Atender" e nos quizzes, a plataforma embaralha as opções (`ordemOpcoes`); escreva a certa onde quiser.
- **Teste como aluno teimoso** antes de dizer pronto: clicar fora, escolher errado, voltar (◀) e avançar, clicar antes da hora, recarregar a página no meio. Voltar um passo nunca pode desfazer nem repetir a ação do passo (os `garante` refazem o estado sem dar `.click()` no alvo).
- **Scripts temporários** (como o executor de testes) ficam fora do Git: crie, use e apague (`_run.js` na raiz nunca é commitado).
- No Windows, edições em lote de JS com aspas e barras invertidas quebram no heredoc do Bash: escreva um script Python num arquivo (Write) e rode com `PYTHONIOENCODING=utf-8 python arquivo.py`; preserve o fim de linha original (CRLF/LF) de cada arquivo.

## O que o André pediu (duas tarefas, nesta ordem)

### Tarefa 1 — Tirar o "Diagnóstico de casos" da trilha e torná-lo uma área própria, em blocos por categoria

Hoje o Diagnóstico é o **último módulo da Trilha Foco** (`window.TRILHAS[0].modulos` em `conteudo.js`, id `diagnostico`, fase 5, cinco aulas em `window.AULAS.diagnostico`, sete tutoriais em `tours-diagnostico.js`, grupo `m: 'diagnostico'` em `plataforma.js`, trilho `investigar-purchase` em `trilho.js`). O André quer:

1. **Fora da trilha.** O Diagnóstico deixa de ser um módulo numerado entre os módulos (tirar de `TRILHAS[0].modulos`; a Completa herda a lista) e vira uma **área própria** do site, no mesmo nível de Módulos, Loja, Simuladores, Laboratório e Colas: um card na página inicial (`TELAS.inicio` em `plataforma.js`, lista `portas`) e uma aba na barra de navegação (`modo-publico.js`, lista `links`; no site publicado só Simuladores e Laboratório ficam escondidos, então o Diagnóstico **aparece** no modo público). Página sugerida: `diagnostico.html` (mesmo esqueleto de `modulos.html`).
2. **Blocos por categoria**, parecidos com os módulos padrão, cada bloco com seus casos. Sugestão de blocos (ajuste conforme a pesquisa da Tarefa 2): Pixel e eventos · Catálogo e produtos · Anúncios (criação, análise, entrega) · Contas, acessos e portfólio · Instagram e Página · Integrações e plataformas (Shopify, WooCommerce, MBE) · Commerce e lojas. Cada bloco é tecnicamente um "módulo" (`window.MODULOS` com uma marca, por exemplo `area: 'diagnostico'`, para não entrar nas trilhas) e cada caso é uma "aula" no **mesmo formato fixo** (Entender · Ver de perto · Praticar guiado · Atender + Cola). Assim `modulo.html`, `aula-plataforma.html`, o progresso, as colas e o quiz continuam funcionando sem código novo; só a listagem muda.
3. **Realocar os cinco casos que já existem** nos blocos certos (os quatro de Pixel em "Pixel e eventos"; o de plataforma conectada em "Integrações e plataformas" ou em "Pixel e eventos", decida e diga por quê). Os sete tutoriais atuais continuam funcionando sem mudar nome.
4. **Ajustar o que aponta para o módulo antigo:** `plataforma.js` (grupo "Como fazer…" `m: 'diagnostico'` e a página de módulos), `trilho.js` (o trilho do primeiro tutorial de cada bloco: o manifesto `TRILHOS` precisa de `modulo`, `aula` e `cauda` = número de passos do tutorial normal; o caminho Início › Módulos › módulo › aula precisa funcionar também para a área nova, então veja em `trilho.js` como ele monta os cinco primeiros passos e adapte para "Início › Diagnóstico › bloco › caso"), `colas.html` (as colas dos casos continuam listadas, agrupadas por bloco), `laboratorio.html` (lista "Como fazer…"), `_roteiro/PONTO_DE_PARTIDA.md`, `LEIA-ME.md`, `_roteiro/AUDITORIA_TELAS.md` e `_roteiro/PENTE_FINO.md`.
5. **Numeração da grade de módulos** (print do André): com o Diagnóstico fora, os números dos módulos fecham sem buraco; o WhatsApp (status `depois`) continua por último.
6. Antes de mexer: **mostre ao André a proposta de blocos e nomes** (PT e ES), em poucas linhas, e espere o "ok".

Entregue a Tarefa 1 num commit próprio, testada (todas as páginas carregam sem erro de JavaScript; os sete tutoriais rodam de ponta a ponta, inclusive o trilho novo).

### Tarefa 2 — Levantar os problemas mais reportados pelos clientes e transformá-los em casos guiados

**Passo A — pesquisa (entregar e esperar aprovação antes de construir).**
Pesquise online quais são os problemas mais relatados por anunciantes e lojistas com as ferramentas da Meta, dentro do escopo do agente (anúncios, medição e comércio). Para medir **frequência**, pode usar fóruns e comunidades (comunidade de ajuda da Meta para Empresas, Reddit r/FacebookAds e afins, comunidades da Shopify e do WooCommerce, fóruns de desenvolvedores). Para a **solução**, só fontes oficiais. Entregue `_roteiro/DIAGNOSTICO_PESQUISA.md` com, por bloco, uma tabela: problema como o cliente fala · o que está por trás (causa mais comum) · solução oficial (artigo + data) · telas reais por onde a solução passa · **dá para simular hoje?** (sim, com telas que já existem · sim, criando a tela X, com base em tela real/documentação · não) · prioridade (frequência × impacto no atendimento). Marque claramente os casos fora do escopo (pagamentos e cobrança, conta desativada ou restrita, políticas e anúncios rejeitados, login e acesso): esses entram só como linha de encaminhamento na cola, não como tutorial. Pare aqui e peça ao André para escolher quais casos construir primeiro.

Candidatos que já conhecemos (confirme e complete com a pesquisa): Pixel não dispara / só PageView chega · compras em dobro (código manual + app, ou Pixel + API de Conversões sem event_id) · valor e moeda errados · Purchase em todas as páginas · parâmetros bloqueados por informação sensível · Pixel fora do portfólio ou pixel errado no site · queda de eventos depois de trocar o tema · anúncio não veicula (desativado, em análise, programado, aprendizado limitado, limite de gastos da conta, público pequeno demais) · não consigo turbinar (telefone não verificado, limite, saldo) · produtos não aparecem na Meta (fora do canal, arquivados, sem imagem ou categoria, recusados) · Instagram não aparece no anúncio ou não conecta à Página · perdi o acesso ao portfólio / a Página não aparece ao conectar (portfólio que não é dono) · verificação da empresa recusada · loja Shopify com nível de compartilhamento Padrão e compras sumindo com bloqueador · plugin do WooCommerce desatualizado · catálogo não sincroniza · loja do Commerce não visível / URL de finalização da compra.

**Passo B — construção (depois do "ok" do André), caso a caso, no modelo das aulas normais e com foco no tutorial guiado.**
Cada caso tem: `antes` (a fala do cliente como ela chega de verdade), `gancho`, `objetivo`, `entender` (diálogo Marina/Rafa/Pixel + 3 pontos + `notas` com as fontes e datas), `ferramenta` (um quiz `quizCatalogo` em `assets/academia/ferramentas.js`, antes do marcador `/* ---------- ferramentas que já existem em outros lugares do site ---------- */`), `praticar` (um tutorial, ou `opcoes` com vários, cada um numa tela real), `atender` (quatro respostas, uma certa, com o retorno de cada) e `cola` (perguntas, o que conferir, frase pronta, passos, encaminhar). O tutorial guiado é a parte principal: ele começa na tela onde o agente de fato começaria (quase sempre a loja do cliente ou o Gerenciador de Eventos), passa pelas telas reais na ordem do atendimento e termina com o problema resolvido e **confirmado por um teste** (compra de teste, Eventos de teste, status na coluna Veiculação…). Quando a solução é do desenvolvedor do cliente, o tutorial mostra a correção no editor de arquivos do site ou no admin da plataforma "como o desenvolvedor" e o passo final diz exatamente o que o agente orienta.

Reaproveite antes de criar: casos de Pixel usam `site-estado.js` (presets `SITE.preset('nome')` definem o que o site do cliente envia; crie presets novos lá) e os pedaços de `window.TOURS_H` (compra de teste, página de pedido, Consultor de Dados, Eventos de teste, Diagnóstico, código-fonte, limpar atividade, final). Telas já reais: Loja (`loja.html` e páginas), Gerenciador de Eventos (`meta-eventos.html`: Visão geral com qualidade da correspondência, Testar eventos com desduplicação, Diagnóstico, Configurações, Instalar código), Código-fonte (`codigo-fonte.html`), Editor de arquivos do site (`arquivos-site.html`), Admin da Shopify (`admin-shopify.html`), Admin do WordPress/WooCommerce (`admin-woo.html`), janela da Meta dentro da plataforma (`mbe-janela.js`), Configurações do portfólio (`meta-portfolio.html`, inclusive Central de Segurança, Pessoas e exclusão), Catálogo (`meta-catalogo.html`, inclusive Pixel como fonte), Microdata Debugger, Gerenciador de Anúncios (`meta-anuncios.html`, `meta-feed.html`, `meta-entrega.html` com os status reais da coluna Veiculação, `meta-regras.html`, `meta-relatorios.html`, `meta-publicos.html`), Business Suite (`meta-suite.html`, `meta-turbinar.html`), Instagram (`meta-instagram.html`). Tela nova só com base em tela real ou documentação oficial, e marcada "a conferir" no que não foi visto.

## Como os tutoriais funcionam (resumo técnico)

- Um tutorial é `window.TOURS['nome'] = [passos]`. Campos de um passo: `alvo` (seletor ou função que devolve o elemento), `clique: true` (o passo avança quando a pessoa clica no alvo), `cond()` (o passo avança quando a condição fica verdadeira: campo preenchido, opção escolhida), `dica` (o que digitar/escolher: "Digite X." / "Escolha “X”."), `garante()` (deixa a tela no estado deste passo; roda ao voltar e ao recarregar), `antes()` (só no primeiro passo: prepara o caso), `pagina` (nome do arquivo onde o passo acontece; o tutorial redireciona se estiver em outra página; **não** coloque `pagina` no passo logo depois de um clique que navega), `pula()`, `fim: true` + `semVolta: true` no último passo. O texto é HTML: escreva `&lt;script&gt;` em vez de `<script>`.
- O estado do tutorial fica em `sessionStorage` (`tour.ativo`) e sobrevive à troca de página; as páginas da plataforma apagam esse estado ao carregar, e `trilho.js` o restaura. Todo arquivo de tutoriais precisa estar carregado em **todas** as páginas por onde o tutorial passa (veja as tags `<script>` de `loja.html`, `meta-eventos.html`, `codigo-fonte.html`, `arquivos-site.html`, `admin-shopify.html`, `admin-woo.html`, `meta-catalogo.html`, `meta-microdados.html`). Ao mexer em HTML, atualize o carimbo `?v=` de todos os arquivos (um número de data; o navegador guarda cache).
- Os alvos usam `data-t="..."` nos elementos; `<option>` precisa de `value` fixo e `data-pt` com o texto em português (o tradutor para espanhol troca o texto visível).
- `plataforma.js`: a lista "Como fazer…" é a constante com grupos `{ m: 'modulo', itens: [[tour, pagina, modulo, aula, {pt, es}], ...] }`; a aula aponta para o tutorial em `praticar: { texto, tour, pagina }` ou `praticar: { texto, opcoes: [{ id, icone, pagina, tour, selo?, tit, txt }] }`.
- **Executor de testes** (recrie como `_run.js` na raiz, fora do Git): um `iframe` que abre a página com `?tour=nome&voltar=modulos.html`, lê `tour.ativo` a cada ~1,2 s, acha o alvo do passo, preenche campos (usa `dica`; para `cond` sem dica tenta textos, URLs, opções do select, caixinhas e itens clicáveis), clica no alvo quando `clique: true` ou no botão "Próximo"/"Concluir" do balão (`.tg-balao [data-tg=prox]`, `[data-tg=fim]`), e registra o log. Modo "teimoso": de vez em quando clica no ◀ (`[data-tg=volta]`), recarrega a página ou clica fora. Rode a partir de `index.html` no navegador, com os scripts recarregados (`fetch(url, {cache:'reload'})`) depois de cada mudança. Um tutorial só está pronto quando passa nos dois modos e o estado final está certo (por exemplo, o `sim.feed` tem o Purchase desduplicado).

## Ordem de trabalho e entregas

1. Ler os documentos; conferir o estado real (`git status`, servidor no ar, página inicial abrindo).
2. Tarefa 1: proposta de blocos → "ok" do André → implementar → testar (páginas + sete tutoriais + trilho) → commit.
3. Tarefa 2, Passo A: pesquisa → `_roteiro/DIAGNOSTICO_PESQUISA.md` → parar e pedir ao André a lista de casos.
4. Tarefa 2, Passo B: um bloco por vez; cada caso com aula PT+ES, quiz, tutorial guiado testado (normal e teimoso), cola; commit por bloco; atualizar `PONTO_DE_PARTIDA.md` e `PENTE_FINO.md` a cada bloco.
5. Nunca publicar. No fim de cada etapa, dizer ao André, em português simples, o que mudou, o que ficou "a conferir" e o que ele precisa testar.

## Como todo caso começa (pedido do André, 18/10)

Igual à trilha: **primeiro a Marina reclama** (a fala dela no chat, do jeito que um cliente fala de verdade, com a emoção e as palavras erradas que os clientes usam), o Rafa acolhe e diz o que vai fazer, e **logo depois vem o tutorial guiado de como resolver**. A explicação (Entender, Ver de perto) fica mais curta que numa aula normal e pode vir depois; o centro do caso é: reclamação → tutorial guiado → problema comprovadamente resolvido → Atender e Cola.

## Validar que o problema foi resolvido (obrigatório em todo caso)

Não basta o tutorial "chegar ao fim". Em cada caso, prove que o problema **sumiu** — no tutorial e no teste:

1. **Antes:** o tutorial mostra o sintoma numa tela real (ex.: Purchase ausente em Testar eventos, aviso no Diagnóstico, status "Desativado" na coluna Veiculação, produto fora do canal).
2. **Correção:** feita no lugar certo (site do cliente, admin da plataforma, Gerenciador…).
3. **Depois:** o tutorial refaz a verificação na MESMA tela do sintoma (nova compra de teste depois de "Limpar atividade", Diagnóstico sem o aviso, status mudou, produto sincronizado) e o passo final só aparece se o sintoma sumiu de fato (use `cond` que lê o estado, não só um clique).
4. **No executor de testes:** depois de cada tutorial, confira o estado final por código (ex.: `sim.feed` com um único Purchase com valor e moeda; `SITE.fx()` sem cópia duplicada; diagnóstico sem o problema; `loja.site`/`sim.*` com o valor corrigido). Registre no relatório: caso · sintoma antes · estado depois · passou/falhou. Tutorial que termina com o sintoma ainda presente = falha, mesmo que todos os passos tenham sido clicados.
5. **Regressão:** depois de cada bloco, rode de novo os tutoriais antigos que usam as mesmas telas e confirme que continuam resolvendo o problema deles.

## Critérios de aceite

- Diagnóstico aparece como área própria (início + navegação), fora das trilhas; grade de módulos renumerada; nada quebrou (todas as páginas abrem sem erro no console; progresso e colas continuam).
- Cada caso novo: fala do cliente realista; sintoma visível antes e comprovadamente ausente depois (tela + checagem de estado no executor); solução oficial com fonte e data; tutorial em telas reais, do começo do atendimento até a confirmação por teste; PT e ES completos (`window.__falta` vazio nas telas usadas); passa no executor nos dois modos; cola com uma linha de encaminhamento quando a solução é de outra área.
- Nada interno ou pessoal no repositório; nada publicado.
