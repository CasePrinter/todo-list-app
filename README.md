# Sistema de Gerenciamento de Tarefas | Silver

## Descrição

Desenvolvimento de backend para sistema gerenciamento de tarefas, para o desenvolvimento foi utilizado as seguintes tecnologias: NestJS, TypeORM, PostgreSQL, Swagger, PGadmin4, JWT e Docker.

## Desenvolvimento

Para trabalhar no projeto o desenvolvedor deverá seguir os seguintes passos:

1. Clonar o repositório: 
  ```bash
    git clone https://github.com/idgeo-br/SistemaMonitoramentoAgricola-plataformaWEB.git
  ```
2. Criar uma nova branch local a partir da branch _main_:
  
  ```bash
    # As branches serão renoemadas conforme conformfe o trabalho a ser realizado: Feat, Fix, Build, HotFix.
      git checkout feat/adicionar-funcionalidade-get-usuarios
  ```
3. Realiazar o trabalho criar uma _Pull Request_ para a branch _main_ marcando os revisores necessários.
4. Após aprovada a _Pull Request_ pode realizar o _merge_ na branch _homologacao_
5. Ao realizar o merge na branch _homologacao_ executará o workflow do GitHub actions, assim realizando o deploy e disponibilizandoo projeto em:
 - Homologacão: [link](https://nest-app-project-1009725684335.us-central1.run.app)
 - Documentação Swagger: [link](https://nest-app-project-1009725684335.us-central1.run.app/api)

# Executando o projeto com Docker local
## Docker build & start

```bash
# docker env build
$ docker-compose build

# docker env start
$ docker-compose up

# remove docker container (services & networks)
$ docker-compose down
```
## Migration

```bash
# generate migration
$ docker-compose run nestjs npm run typeorm:generate NomeDaMigrationGerada

# run migration
$ docker-compose run nestjs npm run typeorm:run
```

# Executando o projeto sem Docker local
## Installation

```bash
$ npm install
```
## Migration

```bash
# generate migration
$ npm run typeorm:generate NomeDaMigrationGerada

# run migration
$ npm run typeorm:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
