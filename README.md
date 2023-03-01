<h1 align="center">Futsal Manager</h1>


## Índice

- [Descrição](#page_facing_up-descrição)
- [Próximos passos](#construction-próximos-passos)
- [Habilidades desenvolvidas](#bulb-habilidades-desenvolvidas)
- [Funcionalidades](#sparkles-funcionalidades)
- [Ferramentas](#hammer_and_wrench-ferramentas)
- [Como usar a aplicação](#computer-como-usar-a-aplicação)
- [Autor](#memo-autor)


## :page_facing_up: Descrição

Esse é um projeto pessoal que ainda está em desenvolvimento e utiliza NODE.js e Typescript para o backend. Mais informações sobre tecnologias podem ser vistas na parte de [Ferramentas](#hammer_and_wrench-ferramentas).

Ao criar uma conta na aplicação, o usuário poderá registrar seu time e seus jogadores. Com isso feito, poderá registrar suas partidas, os eventos que acontecem nela, como gol e falta e quem foram os responsáveis por cada evento e os jogadores presentes em cada uma dessas partidas.

Esse projeto surgiu de uma vontade de modernizar as pranchetas e os cadernos usados em partidas de futsal e futebol amador. Digitalizar essas informações significa não só praticidade, mas também a possibilidade de uma análise mais completa sobre o desempenho do seu time e seus jogadores.


## :construction: Próximos passos
O projeto segue o modelo MVP (produto viável mínimo) com auxílio da metodologia ágil Scrum e aqui está o que falta para a primeira entrega:
<details>
  <summary><strong>Ver mais</strong></summary>

- [X] Endpoint para criar usuário
- [X] Endpoint para login
- [X] Endpoint para listar todos os eventos
- [X] Endpoint para criar time
- [X] Endpoint para criar jogadores
- [X] Endpoint para listar jogadores
- [X] Endpoint para criar uma partida
- [X] Endpoint para listar uma partida
- [ ] Endpoint para criar jogadores da partida
- [ ] Endpoint para listar jogadores da partida
- [ ] Endpoint para criar os eventos na partida
- [ ] Endpoint para editar os eventos na partida
- [ ] Endpoint para listar os eventos na partida
- [ ] Endpoint para excluir os eventos na partida
- [ ] Endpoint para finalizar uma partida
- [ ] Testes unitários para cada serviço
- [ ] Testes de integração para cada endpoint
</details>


## :bulb: Habilidades desenvolvidas
<details>
  <summary><strong>Ver mais</strong></summary>

- Criar um backend do zero e ter autonomia e responsabilidade para escolher a arquitetura e padrões de projeto da API.

- Aprender a usar Prisma ORM
</details>


## :sparkles: Funcionalidades
<details>
  <summary><strong>Ver mais</strong></summary>

:heavy_check_mark: Criar um manager

:heavy_check_mark: Login

:heavy_check_mark: Registrar time

:heavy_check_mark: Registrar jogadores

:heavy_check_mark: Registrar partidas e seus eventos

:heavy_check_mark: Modificar os eventos de uma partida

:heavy_check_mark: Finalizar uma partida

:heavy_check_mark: Ver todas as partidas do seu time
</details>


## :hammer_and_wrench: Ferramentas
<details>
  <summary><strong>Ver mais</strong></summary>

* [NODE.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/pt-br/) para criar a API
* [Express-async-errors](https://www.npmjs.com/package/express-async-errors) para capturar erros
* [Eslint](https://eslint.org/) para padronizar o código e evitar code-smells
* [UUID](https://www.npmjs.com/package/uuid) para gerar IDs antes de salvar no banco de dados
* [JWT](https://jwt.io/) para autenticar e validar um usuário
* [Nodemon](https://nodemon.io/) para monitorar a aplicação em tempo real durante o desenvolvimento
* [Zod](https://zod.dev/) para validar dados vindos de requisições e criar interfaces
* [Dotenv](https://www.npmjs.com/package/dotenv) para usar variáveis de ambiente
* [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) e [Sinon](https://sinonjs.org/) para testar a aplicação
* [Istanbul](https://istanbul.js.org/) para medir a cobertura de testes da aplicação
* [Prisma](https://www.prisma.io/) para mapear o banco de dados
* [MySQL](https://www.mysql.com/) para banco de dados
* [Docker](https://www.docker.com/) para utilizar uma imagem de MySQL
</details>


## :computer: Como usar a aplicação
<details>
  <summary><strong>Pré-requisitos</strong></summary>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js (v16)](https://nodejs.org/en/)
- [Git](https://git-scm.com)
- [MySQL](https://www.mysql.com/)
</details>

<details>
  <summary><strong>Rodando a aplicação localmente</strong></summary>
1 - Clone esse repositório para sua máquina com o seguinte comando:

```bash
 git clone git@github.com:Leo02452/futsal-manager-backend.git
```

2 - Entre na pasta criada:

```
 cd futsal-manager-backend
```

3 - Instale as dependências:

```
 npm install
```

4 - Inicie a aplicação em modo de desenvolvimento:

```
 npm run dev
```
</details>

<details>
  <summary><strong>Outros scripts da API</strong></summary>

* `npm run lint` para rodar o ESLint;
* `npm run test` para rodar todos os testes com Mocha;
* `npm run test:coverage` para rodar todos os testes e gerar o relatório de cobertura na tela do terminal;
* `npm run db:reset` para resetar o banco de desenvolvimento;
</details>


## :memo: Autor

Desenvolvido por Leonardo Araujo

Email: leonardo_02452@hotmail.com

Github: https://github.com/Leo02452

LinkedIn: https://www.linkedin.com/in/leo02452/

---
