# VERTIS Viabilidade, dentro da planilha (Apps Script)

A plataforma fica dentro da própria planilha de estudos e é aberta por um link de app da Web. Cada sócio entra com a conta Google dele, e só quem tem a planilha compartilhada consegue abrir e salvar.

Leva cerca de 10 minutos, feito uma vez só.

## 1. Criar a planilha

1. Acesse sheets.google.com e crie uma planilha em branco. Sugestão de nome: **VERTIS · Estudos de viabilidade**.
2. Clique em **Compartilhar** e adicione cada sócio como **Editor**.

## 2. Colar o código

1. Na planilha, abra **Extensões › Apps Script**.
2. No arquivo **Código.gs** que já existe, apague tudo e cole o conteúdo de `Codigo.gs`.
3. Clique no **+** ao lado de "Arquivos", escolha **HTML** e dê o nome **Index**, exatamente assim, com I maiúsculo e sem ".html". Apague o conteúdo padrão e cole o conteúdo de `Index.html`.
4. Clique em **Salvar** (ícone de disquete).

## 3. Publicar como app da Web

1. Clique em **Implantar › Nova implantação**.
2. Na engrenagem ao lado de "Selecionar tipo", escolha **App da Web**.
3. Preencha:
   - **Descrição:** VERTIS Viabilidade
   - **Executar como:** **Usuário que acessa o app da Web**. É isso que faz cada sócio aparecer com o próprio e-mail e que limita o acesso a quem tem a planilha.
   - **Quem pode acessar:** **Qualquer pessoa com uma Conta do Google**. Se a empresa usa Google Workspace, escolha a opção do domínio da empresa.
4. Clique em **Implantar** e autorize quando o Google pedir. Pode aparecer o aviso "O Google não verificou este app". Clique em **Avançado › Acessar VERTIS Viabilidade**. É esperado para um app interno.
5. Copie o **URL do app da Web** (termina em `/exec`) e envie aos sócios. Esse é o endereço da plataforma.

No primeiro acesso, cada sócio também precisa autorizar o app uma vez.

## Atualizar a plataforma

Quando o código mudar:

1. Cole o novo conteúdo nos arquivos do Apps Script e salve.
2. Clique em **Implantar › Gerenciar implantações**, depois no lápis da implantação atual.
3. Em **Versão**, escolha **Nova versão** e clique em **Implantar**.

O link `/exec` continua o mesmo.

## Dar ou tirar acesso

- **Novo sócio:** compartilhe a planilha com ele como Editor e envie o link.
- **Tirar acesso:** remova a pessoa do compartilhamento da planilha.

## Onde ficam os dados

Na aba **Estudos**, criada sozinha no primeiro uso. Cada linha é uma versão salva: terreno, cenário, versão, quem salvou, quando, UH, IA, TO, TP, altura, VGV, permuta e situação, com os dados completos do estudo na última coluna.

Você pode filtrar, ordenar e criar gráficos em outras abas à vontade. Só não apague, reordene nem renomeie as colunas da aba Estudos.

## Problemas comuns

| O que aparece | O que fazer |
|---|---|
| "Sua conta Google não tem acesso à planilha" | Compartilhe a planilha com esse e-mail como Editor. |
| "Desculpe, não foi possível abrir o arquivo" | O sócio está logado em outra conta Google no navegador. Peça para abrir o link numa janela anônima e entrar com a conta certa. |
| Página em branco | Confira se o arquivo HTML se chama exatamente **Index**. |
| Mudança no código não aparece | Faça uma **Nova versão** em Gerenciar implantações (seção "Atualizar a plataforma"). |

## Guardar o código no GitHub (opcional)

Para manter histórico do código, crie um repositório e envie `Codigo.gs`, `Index.html` e este `LEIAME.md`. A plataforma em si continua rodando pela planilha.
