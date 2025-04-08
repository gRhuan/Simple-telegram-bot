# 🤖 Telegram Bot

Este projeto consiste em um bot para o Telegram desenvolvido em JavaScript utilizando a API do Telegram. O bot é capaz de responder perguntas básicas e executar comandos simples.

## 📌 Funcionalidades

- Responde a perguntas básicas.
- Executa comandos simples.
- Pode ser expandido com novas funcionalidades.

## 🛠️ Tecnologias Utilizadas

- Node.js
- API do Telegram
- Docker
- Docker Compose

## 🚀 Como Executar o Projeto

### 1️⃣ Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

### 2️⃣ Clonar o repositório

```bash
git clone https://github.com/gRhuan/bot-telegram.git
cd bot-telegram
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Configurar variáveis de ambiente

Na raiz do projeto, crie um arquivo `.env` e adicione sua chave de API do Telegram:

```env
TOKEN_API_TELEGRAM=seu_token_aqui
```

### 5️⃣ Iniciar o bot manualmente

```bash
npm start
```

### 🔹 Executando com Docker Compose

Se preferir, você pode rodar o bot utilizando Docker Compose. Basta seguir os passos abaixo:

1. Certifique-se de que o Docker e o Docker Compose estão instalados.
2. Execute o seguinte comando para iniciar o bot:

```bash
docker compose up -d
```

3. Para parar o bot:

```bash
docker compose down
```

## 📂 Estrutura do Projeto

A estrutura do projeto segue o padrão MVC (Model-View-Controller) para organizar o código de forma modular e escalável:

```
bot-telegram/
├── src/
│   ├── commands/
│   │   ├── HelpCommand.js
│   │   ├── InfoCommand.js
│   │   ├── StartCommand.js
│   ├── router/
│   │   ├── Router.js
│   ├── AppBotTelegram.js
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

### 📜 Exemplo de Uso

O bot responde a comandos como:

```text
/start - Inicia a interação com o bot
/help - Exibe a lista de comandos disponíveis
/info - Fornece informações sobre o bot
```
