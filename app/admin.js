const UserGenerator = require('./user');

module.exports = class extends UserGenerator {
  constructor(args, opts) {
    super(args, opts);
  }

  admin() {
    this.sourceRoot(this.sourceRoot() + '/../admin-01-base');
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
