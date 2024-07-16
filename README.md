# Módulo 5 de NodeJS Rocket-Seat

Esse módulo é um projeto utilizando o framework opinado NestJS
___
### Palavras chave:
>Nest, Prisma, Docker, ESLint, Prettier, Injeção de Dependências, JWT, Excalidraw, Public Keys, Private Keys, RSA256, Bcrypt, Vitest, Super Test Library, Faker Library, Dayjs Library.

## Conteúdo Programático do Módulo 5:

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">1. Fundamentos do Nest</strong></summary>

  ---

  + Introdução
  + Criando Projeto com Nest
  + Módulos, Serviços e Controllers
  + Configurando ESLint e Prettier
  + Setup Docker Compose
  + Setup do Prisma
  + Criando serviço do Prisma
  + Controller de criação de conta
  + Gerando hash da senha
  + Criando Pipe de validação do Zod
  + Extensão Rest Client no VSCode
  + Usando ConfigModule no Nest.js
  + Configurando autenticação JWT
  + Gerando token JWT
  + Controller de autenticação
  + Protegendo rotas com Guards
  + Criando decorator de autenticação
  + Controller de criação de pergunta
  + Controller de listagem de perguntas
  + Configurando Vitest com SWC
  + Banco de dados isolado nos testes
  + Testes E2E de usuários
  + Testes E2E de perguntas
  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">2. Desacoplando camadas no NestJS</strong></summary>

  ---

  + Entendendo as camadas
  + Copiando camada de Domínio
  + Criando camada de Infraestrutura
  + Implementando repositórios do Prisma
  + Conversa entre camadas (Mappers)
  + Criando schema do Prisma
  + Implementando QuestionsRepository
  + Comunicação entre camadas
  + Listando perguntas recentes
  + Presenter de perguntas
  + Gateways de Criptografia
  + Casos de Uso: Autenticação e Cadastro
  + Stubs de Criptografia
  + Testes do cadastro e autenticação
  + Implementação da Criptografia
  + Refatorando controller de Autenticação
  + Refatorando controller de Cadastro
  + Tratando erros nos controllers
  + Rotas privadas por padrão
  + Criando EnvModule
  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">3. Implementando controllers e testes</strong></summary>

  ---

  + Finalizando Schema do Prisma
  + Criando Mappers do Prisma
  + Implementando Repositórios
  + Controller: Buscar Pergunta por Slug
  + Utilizando Factories nos Testes E2E
  + Refatorando Testes E2E
  + Controller: Editar Pergunta
  + Controller: Deletar Pergunta
  + Controller: Responder Pergunta
  + Controller: Editar Resposta
  + Controller: Deletar Resposta
  + Controller: Listar Respostas da Pergunta
  + Controller: Escolher Melhor Resposta
  + Controller: Comentar Pergunta
  + Controller: Deletar Comentário da Pergunta
  + Controller: Comentar Resposta
  + Controller: Deletar Comentário da Resposta
  + Controller: Listar Comentários da Pergunta
  + Controller: Listar Comentários da Resposta
  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">4. Uploads e Relacionamentos</strong></summary>

  ---

  + Controller upload de arquivo
  + Caso de uso upload do anexo
  + Testando caso de uso de upload
  + Integração com Cloudflare R2
  + Testando controller de upload
  + Perguntas com anexos
  + Persistindo anexos no banco
  + Criando pergunta com anexos
  + Editando perguntas com anexos
  + Respostas com anexos
  + Dados relacionados em uma API REST
  + Value Object comentário com autor
  + Listando comentários com autor
  + Prisma comentário com autor
  + Controller comentário com autor
  + Comentário da resposta com autor
  + Value Object detalhes da pergunta
  + Testando retorno dos detalhes da pergunta
  + Prisma e Controller detalhe da pergunta
  ---
</details>

<details style="font-size: 16px">
<summary><strong style="font-size: 18px">5. Eventos de Domínio & Cache</strong></summary>

  ---

  + Registrando Eventos de Domínio
  + Testes E2E de Eventos de Domínio
  + Disparando Eventos de Domínio
  + Controller Leitura de Notificação
  + Criando Repositório de Cache
  + Integrando Cache no Prisma
  + Criando Service do Redis
  + Implementando Cache com Redis
  + Testando Persistencia em Cache
  + Ajustes no Cache
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
+ [Site JWT](https://jwt.io/) para verificação dos tokens.
+ Ferramenta de desenho online [Excalidraw](https://excalidraw.com/)

### Aula "Protegendo rotas com Guards"

+ `npm i passport-jwt` : Instala o passport-jwt pra ajudar a configurar a strategy do passport.
+ `npm i @types/passport-jwt -D` : Instala o types para o passport
  > **_OBS:_** [Link da documentação de autenticação do passport](https://docs.nestjs.com/recipes/passport#implementing-passport-jwt) dentro da documentação do nest.

### Aula "Configurando Vitest com SWC"

+ [Documentação](https://docs.nestjs.com/recipes/swc) da compilacao do codigo typescript com swc, que é mais rápido para realização de testes.
+ `npm i vitest unplugin-swc @swc/core @vitest/coverage-v8 -D` : Instalação da configuração do vitest para typescript.
+ `npm i vite-tsconfig-paths -D` : Configuração dos paths com @.
+ `sudo chown -R [nome_do_usuario]:root [nome_do_diretorio]` : Mudar permissões dentro da pasta.
+ [Documentação](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping) do Target Mapping do `tsconfig.json` no repositório da microsoft/TypeScript.

### Aula "Banco de dados isolado nos testes"

+ `npm i dotenv -D` : Carregar as variaveis .env nos testes.
+ `chmod -R a+rwx data` : Dando permissões dentro da pasta data no projeto.

### Aula "Testes E2E de usuários"

+ `npm i supertest -D` : Instala o supertest
+ `npm i @types/supertest -D` : Instala o types para o supertest

### Aula "Entendendo as camadas"

+ `npm i -D @faker-js/faker` : Instala a biblioteca faker
+ `npm i dayjs` : Instala a biblioteca dayjs
+ Alteração nas aparições de `MockInstance` para `let sendNotificationExecuteSpy: unknown`

## Autoria e Créditos:

+ Documentação criada com carinho e dedicação por [Júlio César Freitas](https://github.com/juliofreitasbm) a serviço do [CREA-GO](https://www.creago.org.br/).