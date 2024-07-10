# Módulo 5 de NodeJS Rocket-Seat

Esse módulo é um projeto utilizando o framework opinado NestJS
  > DDD é com conceito desconexo de Arquitetura de Software, pois na Arquitetura de Software já é trabalhada a parte ferramental, de linguagem de programação, da estrutura do projeto, etc.

___
### Palavras chave:
>Nest, Prisma, Docker, ESLint, Prettier, Injeção de Dependências, 

## Conteúdo Programático do Módulo 5:

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">1. Fundamentos do DDD</strong></summary>

  ---

  + Design de software e DDD
  + Entidades e casos de uso
  + Primeiro caso de uso
  + Mapeando relacionamentos
  + Value Object de slug
  + Classe base de entidades
  + Classe base de entidades
  + ID das entidades
  + Mapeando propriedades
  + Abstraindo criação de entidades
  + Getters & Setters das entidades
  + Path aliases e Vitest globals

  ---
</details>

## Atalhos do VSCode:

>Clique para visualizar os [Atalhos do VSCode](https://silicon-chips-f58.notion.site/VsCode-Shortcuts-Atalhos-4ced0388660c4f1c93b410765c0a44cd) no Notion.

## Principais comandos:

### Aula "Criando Projeto com Nest"

+ `npm install -g @nestjs/cli` : Instalação global do Nest
+ `nest new 05-nest-clean` : Cria a pasta `05-nest-clean` com o projeto nest.
+ `npm run start:dev` : Roda o projeto.
  >É um alias criado no package.json
+ `nmap localhost` : Mostra as portas sendo utilizadas pelo localhost.
  >Caso tenha problema com outra aplicação utilizando a porta 3000, que é usada por padrão pelo Nest, pode trocar a porta dentro do arquivo `src/main.ts`. Estamos utilizando a 3333.
+ `http localhost:3333` : Faz uma requisição simples dentro do projeto.
  >Precisa da instalação prévia do httpie.

### Aula "Configurando ESLint e Prettier"

+ `npm i eslint @rocketseat/eslint-config -D` : Instalação do ESLint
+ `npm run lint` : Corrige os erros de formatação automaticamente
  >É um alias criado no package.json

### Aula "Setup Docker Compose"

+ `docker compose up -d` : Roda o container do docker
  >A opção `-d` permite que o container rode em segundo plano

### Aula "Setup do Prisma"

+ `npm i prisma -D` : Instala o primsa
+ `npm i @prisma/client` : Instala o prisma cli
+ `npx prisma init` : Cria uma pasta `prisma` no projeto
+ `npx prisma migrate dev` : Cria uma migration.
+ `npx prisma studio` : Abre o prisma studio no navegador

### Aula "Criando serviço do Prisma"

+ Configurações importantes do `tsconfig.json`:
  >
  ```
    "strict": true,
    "strictNullChecks": true,
  ```

### Aula "Gerando hash da senha"

+ `npm i bcryptjs` : Biblioteca para fazer hash de senha.
+ `npm i @types/bcryptjs -D` : Permite que o bcrypt seja entendido pelo typescript.

## Autoria e Créditos:

+ Documentação criada com carinho e dedicação por [Júlio César Freitas](https://github.com/juliofreitasbm) a serviço do [CREA-GO](https://www.creago.org.br/).