# Módulo 5 de NodeJS Rocket-Seat

Esse módulo é um projeto utilizando o framework opinado NestJS
  > DDD é com conceito desconexo de Arquitetura de Software, pois na Arquitetura de Software já é trabalhada a parte ferramental, de linguagem de programação, da estrutura do projeto, etc.

___
### Palavras chave:
>Nest, Prisma, Docker, ESLint, Prettier, Injeção de Dependências, JWT, Excalidraw, Public Keys, Private Keys, RSA256 

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
  > **_OBS:_** É um alias criado no package.json
+ `nmap localhost` : Mostra as portas sendo utilizadas pelo localhost.
  > **_OBS:_** Caso tenha problema com outra aplicação utilizando a porta 3000, que é usada por padrão pelo Nest, pode trocar a porta dentro do arquivo `src/main.ts`. Estamos utilizando a 3333.
+ `http localhost:3333` : Faz uma requisição simples dentro do projeto.
  > **_OBS:_** Precisa da instalação prévia do httpie.

### Aula "Configurando ESLint e Prettier"

+ `npm i eslint @rocketseat/eslint-config -D` : Instalação do ESLint
+ `npm run lint` : Corrige os erros de formatação automaticamente
  > **_OBS:_** É um alias criado no package.json

### Aula "Setup Docker Compose"

+ `docker compose up -d` : Roda o container do docker
  > **_OBS:_** A opção `-d` permite que o container rode em segundo plano

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

### Aula "Criando Pipe de validação do Zod"

+ `npm i zod` : Biblioteca para validação de dados.
+ `npm i zod-validation-error` : Biblioteca para lidar com mensagens de erros no zod.
  > **_OBS:_** [Link da documentação de pipes](https://docs.nestjs.com/pipes) dentro da documentação do nest.

### Aula "Extensão Rest Client no VSCode"

+ Download extensão REST Client de Huachao Mao
  > **_OBS:_** Permite fazer requisições dentro do arquivo `client.http` criado na pasta raíz do projeto.

### Aula "Usando ConfigModule no Nest.js"

+ `npm i @nestjs/config` : Fazer configurações de variáveis ambiente.

+ `npm i @nestjs/passport @nestjs/jwt`: Autenticação dentro do projeto.
  > **_OBS1:_** [Passport](https://www.passportjs.org/) é para automatizar fluxos de autenticação que são comuns.
  > **_OBS2:_** JWT é uma strategy de autenticação

### Aula "Gerando token JWT"

+ `sudo dnf install openssl` : Instalação do openssl
+ `openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:256` : Geração da chave privada.
  > **_OBS:_** Trocar o 256 por 2048 aumenta a segurança da chave.
+ `openssl rsa -pubout -in private_key.pem -out public_key.pem` : Criação da chave pública a partir da chave privada.
+ `base64 --wrap=0 private_key.pem > private_key-base64.txt` : Conversão da chave privada para base 64.
  > **_OBS1:_** Trocando o private por public da pra gerar a chave pública em base 64 também.
  > **_OBS2:_** O parâmetro --wrap=0 faz o .txt ser gerado sem quebras de linha.
+ (Site JWT)[https://jwt.io/] para verificação dos tokens.
+ Ferramenta de desenho online (Excalidraw)[https://excalidraw.com/]



## Autoria e Créditos:

+ Documentação criada com carinho e dedicação por [Júlio César Freitas](https://github.com/juliofreitasbm) a serviço do [CREA-GO](https://www.creago.org.br/).