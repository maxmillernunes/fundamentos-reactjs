# Fundamentos ReactJS
## Segundo desafio de reactjs do bootcamp GoStack.
Nesse desafio, você deve continuar desenvolvendo a aplicação de gestão de transações, a GoFinances. Agora você irá praticar o que você aprendeu até agora no React.js junto com TypeScript, utilizando rotas e envio de arquivos por formulário.

Essa será uma aplicação que deve armazenar transações financeiras de entrada e saída e permitir o cadastro e a listagem dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo csv.

## Link do repositório do back-end.
- https://github.com/Maxmiller-Nunes/database-upload

## Como usar?
- Assim que abrir o projeto no editor de código execute um `yarn` para instalar as dependência do projeto.
- Após isso, pode rodar um `yarn dev:server` para rodar o backend da aplicação que ficará disponível no endereço `http://localhost:3333`.
- Após isso, pode rodar um `yarn start` para rodar a aplicação que ficará disponível no endereço `http://localhost:3000`.
- Está disponível também os teste, para executar, basta rodar `yarn test` e `jest` e `supertest` ira rodar a rotina de teste.

## Funcionalidades feitas no front-end.

- POST `/transactions:` Não implementada.

- GET `/transactions:` Rota que lista todos os transações;

- DELETE `/transactions/:id:` Não implementada.

- POST `/transactions/import:` A rota deve permitir a importação de um arquivo com formato .csv contendo as mesmas informações necessárias para criação de uma transação id, title, value, type, category_id, created_at, updated_at, onde cada linha do arquivo CSV deve ser um novo registro para o banco de dados, e por fim retorne todas as transactions que foram importadas para seu banco de dados.

## Rotas da aplicação que estão disponíveis no backend

- POST `/transactions:` A rota deve receber title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas);

- GET `/transactions:` Rota que lista todos os transações;

- DELETE `/transactions/:id:` A rota deve deletar uma transação com o id presente nos parâmetros da rota;

- POST `/transactions/import:` A rota deve permitir a importação de um arquivo com formato .csv contendo as mesmas informações necessárias para criação de uma transação id, title, value, type, category_id, created_at, updated_at, onde cada linha do arquivo CSV deve ser um novo registro para o banco de dados, e por fim retorne todas as transactions que foram importadas para seu banco de dados.

## Testes das rotas da aplicação

Aqui temos os teste realizados pela aplicação.

`should be able to list the total balance inside the cards:` Para que esse teste passe, sua aplicação deve permitir que seja exibido na sua Dashboard, cards contendo o total de income, outcome e o total da subtração de income - outcome que são retornados pelo balance do seu backend.

`should be able to list the transactions:` Para que esse teste passe, sua aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do seu backend.

`should be able to navigate to the import page:` Para que esse teste passe, você deve permitir a troca de página através do Header, pelo botão que contém o nome Importar.

`should be able to upload a file:` Para que esse teste passe, você deve permitir que um arquivo seja enviado através do componente de drag-n-drop na página de import, e que seja possível exibir o nome do arquivo enviado para o input.
