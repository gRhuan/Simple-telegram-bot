const TelegramBot = require("node-telegram-bot-api");
const token = "7664727126:AAHvvV6HPNcIgf64tdqbB8KR559qxjV1htk";
const bot = new TelegramBot(token, { polling: true });

bot.on("polling_error", (err) => console.log(err));

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Seja bem-vindo(a) 🥳 \n\nUse o comando /help para ver os comandos disponíveis.`
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Comandos disponíveis:
    
  /start - Inicia o bot
  /help - Mostra os comandos disponíveis
  oi - Saudação

`
  );
});
bot.on("message", (msg) => {
  console.log(
    "msg",
    `
    id: ${msg.chat.id}
      Nome: ${msg.from.username} 
      msg: ${msg.text}`
  );
  if (msg.text.toLocaleLowerCase() == "oi") {
    bot.sendMessage(msg.chat.id, "Oi, tudo bem?");
  }
});
