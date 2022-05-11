const AdminGenerator = require('./admin');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends AdminGenerator {
  constructor(args, opts) {
    super(args, opts);

    this.option('babel');
    this.configs = {};
  }

  async prompting() {
    this.log(
      yosay(`Welcome to ${chalk.green('grava-react-web')} generator!`)
    );

    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name"
      },
      {
        type: "list",
        name: "mode",
        message: "Project mode",
        choices: [{
          name: 'Front user web',
          value: 'user'
        }, {
          name: 'Admin or dashboard',
          value: 'admin'
        }],
        default: 'admin'
      }
    ]);

    this.configs.APP_NAME = answers.name;
    this.configs.APP_MODE = answers.mode;
    this.destinationRoot(this.configs.APP_NAME);
  }

  modeSplit() {
    switch (this.configs.APP_MODE) {
      case 'user':
        this.user()
        break;
      case 'admin':
        this.admin()
        break;
    }
  }
};
