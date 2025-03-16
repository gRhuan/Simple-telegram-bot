import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import Router from "./router/Router.js";

dotenv.config();
const token = process.env.TOKEN_API_TELEGRAM;
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
