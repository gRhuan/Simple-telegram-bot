import TelegramBot from "node-telegram-bot-api";

import Router from "./router/Router.js";

const token = process.env.TELEGRAM_API_TOKEN;
const client = new TelegramBot(token, { polling: true });
client.on("polling_error", (err) => console.log(err));

const router = new Router(client);
router.initializeRoutes();

client.on("message", (message) => {
  console.log(
    "Debug: Mensagem recebida: \n",
    `
    id: ${message.chat.id}
      Nome: ${message.from.username} 
      msg: ${message.text}`
  );
});
