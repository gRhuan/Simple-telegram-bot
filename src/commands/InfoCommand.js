class InfoCommand {
  constructor(client) {
    this.client = client;
  }

  handle(message) {
    this.client.sendMessage(
      message.chat.id,
      `Informações sobre o bot: \nVersão: 1.0.0\nDesenvolvedor: Gladyson`
    );
  }
}

export default InfoCommand;
