## Descrição

Código das aulas de Desenvolvimento Backend 2 de 2024.

Repositório criado com [Framework Nest](https://github.com/nestjs/nest) e TypeScript.

## Configuração do projeto

```bash
$ npm install
```

IMPORTANTE: Copie o arquivo `.env-example` para `.env` e ajuste os valores desejados.

## Compilar e executar o projeto

```bash
# desenvolvimento
$ npm run start

# modo watch
$ npm run start:dev

# modo produção
$ npm run start:prod
```

## Executar testes

```bash
# executando testes do UserController
$ npm run test -- user.controller.spec.ts

# gerando relatório de cobertura 
$ npm run test -- user.controller.spec.ts --coverage

# executando teste de ponta a ponta
$ npm run test:e2e
```

## Abrir a collection com [Bruno](https://www.usebruno.com/)

1. Instale o Bruno: https://www.usebruno.com/
1. Acesse o menu `Collection` -> `Open Collection`
1. Encontre o diretório do projeto e selecione a pasta `collection`
