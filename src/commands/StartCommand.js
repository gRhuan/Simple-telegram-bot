class StartCommand {
  constructor(client) {
    this.client = client;
  }

  handle(message) {
    this.client.sendMessage(
      message.chat.id,
      `Seja bem-vindo(a) ${message.from.username} 🥳 \n\nUse o comando /help para ver os comandos disponíveis.`
    );
  }
}

export default StartCommand;
