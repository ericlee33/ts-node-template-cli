import inquirer from 'inquirer';
import { PromptCreator } from './prompts';

async function executeInquirer() {
  const { finalPrompts } = new PromptCreator();

  return inquirer.prompt(finalPrompts);
}

export default executeInquirer;
