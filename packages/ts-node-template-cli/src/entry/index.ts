import executeCommander from './commander';
import inquirer from './inquirer';

class Entry {
  constructor() {
    this.init();
  }

  init = () => {
    executeCommander(() => {
      inquirer();
    });
  };
}

export default Entry;
