import chalk from 'chalk';

export function log(...args: any[]) {
  return console.log(...args);
}

const allNeedColors = ['yellow', 'red', 'green', 'blue'];

export function coloredLog(...args: any[]) {
  return allNeedColors.reduce((colorFuncObj, color) => {
    return { ...colorFuncObj, [color]: () => chalk[color](console.log(...args)) };
  }, {});
}
