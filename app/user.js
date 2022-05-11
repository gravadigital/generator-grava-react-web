const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  user() {
    this.sourceRoot(this.sourceRoot() + '/../user');
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
