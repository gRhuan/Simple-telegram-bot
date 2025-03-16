import StartCommand from "../commands/StartCommand.js";
import HelpCommand from "../commands/HelpCommand.js";
import InfoCommand from "../commands/InfoCommand.js";

class Router {
  constructor(client) {
    this.client = client;
    this.startCommand = new StartCommand(client);
    this.helpCommand = new HelpCommand(client);
    this.infoCommand = new InfoCommand(client);
  }

  initializeRoutes() {
    this.client.onText(/\/start/, (message) => {
      this.startCommand.handle(message);
    });

    this.client.onText(/\/help/, (message) => {
      this.helpCommand.handle(message);
    });

    this.client.onText(/\/info/, (message) => {
      this.infoCommand.handle(message);
    });
  }
}

export default Router;
