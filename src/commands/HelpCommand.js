class HelpCommand {
  constructor(client) {
    this.client = client;
  }

  handle(message) {
    this.client.sendMessage(
      message.chat.id,
      `Aqui estão os comandos disponíveis: \n\n/start - Iniciar\n/help - Ajuda\n/info - Informações`
    );
  }
}

export default HelpCommand;
