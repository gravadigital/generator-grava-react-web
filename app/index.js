const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
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
        message: "Your project name",
        default: this.appname
      }
    ]);

    this.configs.APP_NAME = answers.name;
    this.destinationRoot(this.configs.APP_NAME);
  }

  base() {
    console.log('this.sourceRoot()', this.sourceRoot());
    this.sourceRoot(this.sourceRoot() + '/../00-base');
    this.fs.copyTpl(
      this.templatePath(''),
      this.destinationPath(''),
      this.configs,
      {},
      {globOptions: {dot: true}}
    );
    this.fs.copy(
      this.templatePath('../_gitignore'),
      this.destinationPath('.gitignore')
    );
  }
};
