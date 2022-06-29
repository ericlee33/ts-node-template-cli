import executeCommander from './commander';
import inquirer from './inquirer';

class Entry {
  inquirer;

  constructor() {
    this.inquirer = inquirer();
  }

  init = () => {
    executeCommander(() => {});
  };
}

export default Entry;
