# Ligar a aba Feedback (uma vez só, uns 10 minutos, grátis)

A aba **Feedback** já existe no site publicado, mas está em **modo teste** (o que as pessoas escrevem fica só no navegador delas).
Para as sugestões chegarem numa planilha sua, e você ver tudo na "Área da equipe" com a sua senha:

1. Entre em **sheets.google.com** com a sua conta e crie uma planilha em branco. Nome sugerido: *Sugestões da Lojinha*.
2. Na planilha: menu **Extensões › Apps Script**.
3. Apague o código que aparece e cole todo o conteúdo do arquivo `feedback_apps_script.gs` (está nesta pasta). Clique no disquete para salvar.
4. Guarde a **senha** (no Google, não no site):
   - No Apps Script, à esquerda, clique na engrenagem **Configurações do projeto**.
   - Role até **Propriedades do script › Editar propriedades do script › Adicionar propriedade**.
   - Nome: `SENHA`  ·  Valor: a senha que você quer usar na Área da equipe. Salve.
5. Publique: botão **Implantar › Nova implantação › tipo: App da Web**.
   - *Executar como*: **Eu**.
   - *Quem pode acessar*: **Qualquer pessoa**.
   - Clique em **Implantar**, aceite as permissões do Google (é a sua própria planilha) e **copie o URL do app da Web** (termina em `/exec`).
6. Me mande esse URL. Eu coloco em `assets/js/feedback-config.js` (a linha `window.FEEDBACK_URL`), testo o envio e publico.

Notas
- Quem lê o site nunca vê a senha: ela só existe no seu Google. A página manda a senha digitada para o seu script, e o script diz se está certa.
- As respostas ficam na aba **Respostas** da sua planilha (você também pode ler direto lá).
- Se um dia quiser trocar a senha: troque o valor da propriedade `SENHA` (passo 4). Não precisa mexer no site.
- Se mudar o código do script, é preciso **Implantar › Gerenciar implantações › editar › Nova versão**.
