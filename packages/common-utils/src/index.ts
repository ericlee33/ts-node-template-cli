import chalk from 'chalk';

export function log(...args: any[]) {
  return console.log(...args);
}

export function alert(...args: any[]) {
  return chalk.red(console.log(...args));
}
