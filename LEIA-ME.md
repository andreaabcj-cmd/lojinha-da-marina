# Lojinha da Marina · plataforma de treinamento (ecossistema Meta)

Site **público** no GitHub Pages: https://andreaabcj-cmd.github.io/lojinha-da-marina/
Entrada com senha simples (`support.fb.com`): é um porteiro, não segurança. **Só conteúdo público** entra aqui.
Personagens: **Marina** (dona da loja, a cliente), **Rafa** (agente de suporte) e o **Pixel** (mascote).
Idiomas: **PT | ES** desde o início. Progresso: só no navegador de cada pessoa.

## As 4 áreas (cada uma tem um só trabalho — nada de "salada")
| Área | Página | Para quê |
|---|---|---|
| 🎓 Módulos | `modulos.html` → `modulo.html?m=` → `aula-plataforma.html?m=&a=` | Aprender (aulas de 5–10 min) |
| 🏪 Loja | `loja.html` (+ produtos, checkout…) | Praticar como no atendimento: a loja com Pixel e o Consultor de Dados (faixa amarela) |
| 🕹️ Simuladores | `simuladores.html`, `meta-eventos.html` | Cópias de treino das ferramentas da Meta (layout fiel, visual da Lojinha, data de conferência) |
| 🧪 Laboratório | `laboratorio.html`, `ferramenta.html?f=` | As ferramentas das aulas, soltas e completas (inclui os detalhes técnicos) + **A loja por dentro**: o Modo aula (tipo F12), que só aparece com `loja.html?aula=aba` ou `?lab=1` e some com `?lab=0` |
| 🗒️ Colas | `colas.html` | A cola de atendimento de todas as aulas, para copiar no dia a dia |

## Formato FIXO de toda aula (foco: atendimento)
O agente precisa **entender, identificar o problema e orientar o cliente**; o que é técnico demais vai para o desenvolvedor.
1. **Entender** — chat no estilo do atendimento (Marina à esquerda, Rafa à direita, Pixel como dica) + 2–3 ideias simples.
2. **Ver de perto** — a ferramenta em modo simples (o técnico fica só no Laboratório).
3. **Praticar** — SEMPRE guiado (holofote + Pixel), na loja ou no simulador; ao terminar volta para a aula.
4. **Atender** — o cliente diz algo e o agente escolhe o que responder (com retorno do porquê) + **Cola do atendimento**
   (perguntas, o que conferir, frase pronta, quando encaminhar). Fontes oficiais com data no rodapé.

## Onde fica cada coisa
| Arquivo | Para que serve |
|---|---|
| `assets/academia/conteudo.js` | Módulos (a trilha) e o texto das aulas, sempre `{pt, es}` |
| `assets/academia/ferramentas.js` | Ferramentas interativas (mesma ferramenta na aula e no Laboratório) |
| `assets/js/plataforma.js` + `assets/css/plataforma.css` | Telas da plataforma (início, módulos, aula, colas…) |
| `assets/js/porta.js` | A entrada com senha (em todas as páginas) |
| `assets/js/tour.js` + `assets/js/tours-loja.js` | Tutorial guiado na loja (`loja.html?tour=nome&voltar=...`) |
| `assets/js/sim-eventos.js` + `assets/css/sim.css` | Simulador do Gerenciador de Eventos (tours `?tour=criar-pixel`, `?tour=testar-eventos`) |
| `assets/js/data-advisor.js` | Simulação do Consultor de Dados de Anúncios (botão na faixa amarela da loja) |
| `assets/js/personagens.js` | Desenhos da Marina, do Rafa e do Pixel |
| `assets/js/config.js` | ID do Pixel real (hoje em simulação; a Meta ainda não liberou a criação no portfólio novo) |
| `assets/js/pixel-aula.js` / `loja.js` / `produtos.js` | Pixel, Modo aula, eventos e produtos da loja |
| `_ferramentas/gerar_paginas.py` | Gera TODAS as páginas (loja, produtos fixos com Open Graph/JSON-LD, plataforma) |
| `_ferramentas/gerar_catalogo.js` | Gera `catalogo.csv`/`catalogo.xml` |
| `_ferramentas/preparar_prints.py` | Prints reais censurados dos tutoriais antigos (`_gravacoes/bruto` fica FORA do Git) |
| `_modelos/tutorial-modelo.html` | Modelo do player de tutorial com prints (formato antigo) |

## Regras do projeto
- Nomes **reais** da Meta (Pixel, Gerenciador de Eventos, catálogo…); analogias só como apoio.
- Telas da Meta são **recriadas** (não prints): layout idêntico, visual estilizado, sem logo da Meta, com "conferido em DD/MM/AAAA".
- Toda afirmação técnica conferida na documentação oficial mais recente, com link e data.
- Ordem: Pixel → Portfólio básico → Catálogo → resto da trilha. Uma frente por vez.
- Aula só usa o que o agente usa de verdade no atendimento (Consultor de Dados, Gerenciador de Eventos, o que o cliente mostra). Coisa de F12/desenvolvedor (Modo aula) = só no Laboratório.
- O Laboratório também vai ser guiado (frente futura).

## Testar no computador
Na pasta, rode `python -m http.server 8765` e abra `http://localhost:8765/`. Depois de mudar o conteúdo:
`python _ferramentas/gerar_paginas.py`.
