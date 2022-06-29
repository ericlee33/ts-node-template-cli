import { Command } from 'commander';

function executeCommander(callback) {
  const program = new Command();

  program.command('init').action(() => {
    callback();
  });

  program.parse();
}

export default executeCommander;
