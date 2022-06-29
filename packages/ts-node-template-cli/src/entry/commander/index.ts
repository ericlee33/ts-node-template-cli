import { Command } from 'commander';

function executeCommander(callback) {
  const program = new Command();

  program.command('init').action(() => {
    callback();
  });

  program.parse(process.argv);
}

export default executeCommander;
