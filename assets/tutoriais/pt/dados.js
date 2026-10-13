window.TUTORIAL_PT = {
 "etapas": [
  {
   "id": "01",
   "bloco": "1 · Preparar a casa",
   "titulo": "Criar o portfólio empresarial",
   "status": "pronto",
   "resumo": "O portfólio empresarial reúne tudo o que a empresa tem na Meta: páginas, Pixel, catálogo, contas de anúncios e as pessoas com acesso. Pense nele como o escritório da Marina, onde ficam as chaves.",
   "porque": [
    "Sem portfólio, o Pixel e o catálogo ficam soltos, presos à conta pessoal de alguém.",
    "Quem tem Controle total no portfólio manda em tudo que está dentro dele.",
    "Uma página só pode pertencer a UM portfólio. Se ela já estiver em outro, não aparece para adicionar."
   ],
   "checklist": [
    "Portfólio empresarial",
    "Página do Facebook",
    "Pixel (conjunto de dados)",
    "Catálogo",
    "Conta de anúncios",
    "Pessoas com as permissões certas"
   ]
  },
  {
   "id": "02",
   "bloco": "2 · O Pixel",
   "titulo": "Criar o Pixel (conjunto de dados)",
   "status": "parcial",
   "resumo": "A Meta cria o Pixel e dá a ele um número de identificação (o ID do Pixel). É esse número que vai no código do site.",
   "porque": [
    "Hoje a Meta chama o Pixel de “conjunto de dados”. É a mesma coisa.",
    "Cada Pixel tem um número único (o ID). Lembra do 📓 caderno errado do laboratório? É quando o site usa o ID de outro Pixel."
   ]
  },
  {
   "id": "03",
   "bloco": "2 · O Pixel",
   "titulo": "Colocar o Pixel no site",
   "status": "em breve",
   "resumo": "Colar o número do Pixel no código da loja e publicar."
  },
  {
   "id": "04",
   "bloco": "2 · O Pixel",
   "titulo": "Ver o primeiro evento chegar (Testar eventos)",
   "status": "em breve",
   "resumo": "Abrir a loja e ver o PageView chegando ao vivo no Gerenciador de Eventos."
  },
  {
   "id": "05",
   "bloco": "2 · O Pixel",
   "titulo": "Configurações do Pixel",
   "status": "em breve",
   "resumo": "Correspondência avançada automática, cookies primários e tráfego permitido: o que cada uma faz."
  },
  {
   "id": "06",
   "bloco": "3 · Páginas de produto e catálogo",
   "titulo": "Depurador de Compartilhamento: o que a Meta lê na página",
   "status": "pronto",
   "resumo": "Ferramenta gratuita da Meta que mostra o que o robô dela lê numa página: título, foto, descrição e as tags de produto. É o que aparece quando alguém compartilha o link e é a base dos microdados do catálogo.",
   "porque": [
    "O robô da Meta NÃO roda JavaScript: se as tags do produto só aparecem depois do JavaScript, ele vê uma página genérica.",
    "Produto sem foto ou com título errado ao compartilhar? Quase sempre são as tags og: da página.",
    "A Meta guarda a leitura em memória: depois de corrigir a página, clique em Extrair novamente."
   ],
   "checklist": [
    "og:title (nome do produto)",
    "og:description",
    "og:image (foto, endereço completo)",
    "og:url (endereço da página)",
    "og:type = product",
    "product:price:amount e product:price:currency",
    "product:retailer_item_id (o mesmo ID do catálogo e do Pixel)"
   ]
  },
  {
   "id": "07",
   "bloco": "3 · Páginas de produto e catálogo",
   "titulo": "Criar o catálogo e ligar ao Pixel",
   "status": "em breve",
   "resumo": "Criar os itens do catálogo no Gerenciador de Comércio e conferir se os códigos batem com o Pixel."
  }
 ],
 "passos": [
  {
   "id": "01-01",
   "etapa": "01",
   "tipo": "passo",
   "img": "01-01.webp",
   "w": 1099,
   "h": 1092,
   "alvo": [
    0.0182,
    0.304,
    0.2093,
    0.0293
   ],
   "texto": "No Meta Business Suite, abra o seletor no canto superior esquerdo. Ele mostra seus portfólios empresariais e o botão Criar um portfólio empresarial.",
   "titulo": "Onde ficam os portfólios",
   "dica": "Se aqui já aparece um portfólio que você não lembra de ter criado, é normal: às vezes a Meta cria um sozinha quando você faz uma página ou um anúncio. Confira de quem ele é antes de usar!",
   "clique": true
  },
  {
   "id": "01-02",
   "etapa": "01",
   "tipo": "passo",
   "img": "01-02.webp",
   "w": 1099,
   "h": 1092,
   "alvo": [
    0.273,
    0.2656,
    0.444,
    0.3022
   ],
   "texto": "O formulário pede 3 coisas: o nome público do portfólio (o nome da empresa), seu nome e sobrenome (você vira administrador) e um email comercial.",
   "titulo": "O formulário",
   "dica": "O nome do portfólio empresarial é o nome público da empresa na Meta. Use o nome da loja.",
   "clique": true
  },
  {
   "id": "01-03",
   "etapa": "01",
   "tipo": "erro",
   "img": "01-03.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.3916,
    0.2674,
    0.2105,
    0.0617
   ],
   "texto": "Erro comum: parênteses, aspas e outros caracteres especiais não são aceitos no nome do portfólio. Use só letras, números e espaços.",
   "titulo": "Erro comum: caracteres especiais",
   "dica": "A Meta recusa caracteres especiais no nome do portfólio. 😅 Tire ( ) “ ” e símbolos, e o botão Criar acende.",
   "clique": false
  },
  {
   "id": "01-04",
   "etapa": "01",
   "tipo": "passo",
   "img": "01-04.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.5829,
    0.5938,
    0.0255,
    0.0283
   ],
   "texto": "Tudo preenchido: nome sem caracteres especiais, seu nome real (você vira administrador) e o email da empresa. Ao clicar em Criar você aceita os Termos Comerciais.",
   "titulo": "Tudo preenchido",
   "dica": "Use seu nome real: a Meta pede dados verdadeiros. O email é da empresa e não aparece para clientes. Depois chega um email para confirmar: abra e clique.",
   "clique": true
  },
  {
   "id": "01-05",
   "etapa": "01",
   "tipo": "passo",
   "img": "01-05.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.3469,
    0.2982,
    0.2997,
    0.0951
   ],
   "texto": "Portfólio criado! A Meta oferece adicionar suas páginas. Atenção: uma página que já pertence a outro portfólio NÃO aparece aqui. Só marque páginas da mesma empresa.",
   "titulo": "Adicionar páginas",
   "dica": "A página da loja não apareceu? Ela já mora em outro portfólio. Uma página só pode ter um dono. Para trazer, quem tem Controle total no outro portfólio precisa liberar.",
   "clique": false
  },
  {
   "id": "01-06",
   "etapa": "01",
   "tipo": "passo",
   "img": "01-06.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.5995,
    0.3136,
    0.037,
    0.0257
   ],
   "texto": "Quem criou o portfólio fica com Controle total (administrador). Aqui dá para convidar outras pessoas por email, como Funcionário (acesso parcial) ou com controle total. Para a aula, pule.",
   "titulo": "Pessoas e papéis",
   "dica": "Controle total: gerencia tudo, inclusive pessoas e permissões. Funcionário: só acessa o que você atribuir. Na dúvida, dê o mínimo necessário.",
   "clique": false
  },
  {
   "id": "01-07",
   "etapa": "01",
   "tipo": "passo",
   "img": "01-07.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.6091,
    0.5488,
    0.0383,
    0.0283
   ],
   "texto": "Resumo final: o nome do portfólio e quem terá acesso. Confira e clique em Confirmar.",
   "titulo": "Confirmar",
   "dica": "Confira o nome e quem terá acesso. Dá para mudar tudo isso depois, nas Configurações.",
   "clique": true
  },
  {
   "id": "01-08",
   "etapa": "01",
   "tipo": "passo",
   "img": "01-08.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.0038,
    0.0591,
    0.0753,
    0.036
   ],
   "texto": "Pronto: o portfólio novo já está selecionado no canto superior esquerdo. Ele ainda está vazio (sem páginas), por isso essa mensagem. Normal!",
   "titulo": "Portfólio pronto!",
   "dica": "Portfólio empresarial criado, ainda vazio. Próximo passo: criar o Pixel. 🎉",
   "clique": false
  },
  {
   "id": "02-01",
   "etapa": "02",
   "tipo": "passo",
   "img": "02-01.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.0344,
    0.0566,
    0.0855,
    0.0257
   ],
   "texto": "Gerenciador de Eventos, com o portfólio certo selecionado no canto superior direito. Para criar o Pixel, clique em Conectar dados (o + verde).",
   "titulo": "Gerenciador de Eventos",
   "dica": "Confira SEMPRE o portfólio no canto superior direito antes de criar qualquer coisa. Criar no portfólio errado é o erro mais comum!",
   "clique": true
  },
  {
   "id": "02-02",
   "etapa": "02",
   "tipo": "passo",
   "img": "02-02.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.3865,
    0.2622,
    0.2258,
    0.0514
   ],
   "texto": "Escolha o tipo de fonte de dados. O Pixel é a opção Web (atividade no site: visualizações, carrinho e compras).",
   "titulo": "Tipo de dado: Web",
   "dica": "Web é o Pixel, que mede o que acontece no site. App, Offline e CRM são outras fontes de dados.",
   "clique": true
  },
  {
   "id": "02-03",
   "etapa": "02",
   "tipo": "passo",
   "img": "02-03.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.3827,
    0.2365,
    0.2347,
    0.0488
   ],
   "texto": "A Meta agora chama o Pixel de conjunto de dados. Dê um nome, decida sobre a caixinha da API de Conversões e escolha a categoria (opcional).",
   "titulo": "Criar o conjunto de dados",
   "dica": "Conjunto de dados é o nome atual do Pixel no Gerenciador de Eventos. É a mesma coisa.",
   "clique": false
  },
  {
   "id": "02-04",
   "etapa": "02",
   "tipo": "passo",
   "img": "02-04.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.3839,
    0.6221,
    0.2321,
    0.2314
   ],
   "texto": "As categorias são de assuntos sensíveis (saúde, religião, política...). Só marque se o negócio trabalha com isso. Uma loja de canecas não marca nenhuma.",
   "titulo": "Categorias sensíveis",
   "dica": "Essas categorias existem para proteger dados sensíveis (saúde, religião...). Loja de canecas? Nenhuma.",
   "clique": false
  },
  {
   "id": "02-05",
   "etapa": "02",
   "tipo": "passo",
   "img": "02-05.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.5912,
    0.6504,
    0.0255,
    0.0283
   ],
   "texto": "Nome pronto (sem símbolos). Na aula, desmarcamos a API de Conversões para estudar o Pixel puro primeiro; ela pode ser ligada depois. Clique em Criar.",
   "titulo": "Pronto para criar",
   "dica": "A caixinha da API de Conversões liga o envio pelo servidor. Na aula, deixamos para depois, para entender primeiro o Pixel sozinho.",
   "clique": true
  },
  {
   "id": "02-06",
   "etapa": "02",
   "tipo": "alternativo",
   "img": "02-06.webp",
   "w": 1568,
   "h": 778,
   "alvo": [
    0.9337,
    0.0758,
    0.0446,
    0.0308
   ],
   "texto": "Caminho alternativo (quando o Gerenciador de Eventos dá erro): Configurações do portfólio › Fontes de dados › Conjuntos de dados e pixels › Adicionar.",
   "titulo": "Caminho alternativo",
   "dica": "Se o Gerenciador de Eventos der erro, tente por aqui. Portfólio recém-criado? A Meta pode segurar a criação por algumas horas. Espere e tente de novo.",
   "clique": true
  },
  {
   "id": "06-01",
   "etapa": "06",
   "tipo": "passo",
   "img": "06-01.webp",
   "w": 1567,
   "h": 327,
   "alvo": [
    0.4378,
    0.6361,
    0.1123,
    0.0856
   ],
   "texto": "No Depurador de Compartilhamento, cole o endereço da página do produto e clique em Depurar. Se for a primeira vez, clique em Buscar informações novas.",
   "titulo": "Abrir o depurador",
   "dica": "Endereço: developers.facebook.com/tools/debug. Funciona com qualquer página pública, mesmo sem Pixel.",
   "clique": true
  },
  {
   "id": "06-02",
   "etapa": "06",
   "tipo": "passo",
   "img": "06-02.webp",
   "w": 1045,
   "h": 915,
   "alvo": [
    0.2086,
    0.5519,
    0.5033,
    0.3847
   ],
   "texto": "A Meta leu a página: a Prévia do link mostra foto, título e descrição do produto, vindos das tags og:. É assim que o link aparece quando alguém compartilha.",
   "titulo": "A prévia do link",
   "dica": "Foto, título e descrição saem das tags og:image, og:title e og:description. Se a prévia está errada, o problema está na página, não no Facebook.",
   "clique": true
  },
  {
   "id": "06-03",
   "etapa": "06",
   "tipo": "erro",
   "img": "06-03.webp",
   "w": 1045,
   "h": 915,
   "alvo": [
    0.0249,
    0.129,
    0.9483,
    0.1421
   ],
   "texto": "Aviso fb:app_id ausente: ele só serve para quem tem um app da Meta ligado ao site. Para uma loja, pode ignorar. Já og:image, og:title e og:type precisam estar lá.",
   "titulo": "O aviso do fb:app_id",
   "dica": "Esse aviso aparece em quase todo site. O fb:app_id só importa para quem tem um app da Meta ligado ao site. Não é o motivo de prévia errada.",
   "clique": false
  },
  {
   "id": "06-04",
   "etapa": "06",
   "tipo": "passo",
   "img": "06-04.webp",
   "w": 1045,
   "h": 523,
   "alvo": [
    0.0402,
    0.13,
    0.9196,
    0.3709
   ],
   "texto": "As propriedades do Open Graph que a Meta montou a partir das tags da página. O link URL extraída mostra exatamente o HTML que o robô da Meta recebeu.",
   "titulo": "As tags que a Meta montou",
   "dica": "Confira og:type = product e a og:image com o endereço completo (https://...). Endereço de imagem incompleto é erro comum.",
   "clique": false
  },
  {
   "id": "06-05",
   "etapa": "06",
   "tipo": "erro",
   "img": "06-05.webp",
   "w": 1045,
   "h": 888,
   "alvo": [
    0.2086,
    0.6464,
    0.5033,
    0.0856
   ],
   "texto": "A mesma caneca, na página montada por JavaScript: a Meta vê só uma página genérica (Produto · Lojinha da Marina, og:type website). O robô da Meta não roda JavaScript.",
   "titulo": "Erro comum: tags só no JavaScript",
   "dica": "A pessoa vê a caneca no navegador, mas o robô vê uma página genérica. A solução é escrever as tags no HTML da página (como nas páginas fixas da Lojinha).",
   "clique": false
  }
 ]
};
