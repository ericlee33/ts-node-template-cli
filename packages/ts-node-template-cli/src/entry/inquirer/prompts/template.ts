import { PromptField } from '../constants';

const TemplateName = {
  ['basic-template']: 'basic-template',
  ['cli-template']: 'cli-template'
} as const;

const TemplateType = {
  [TemplateName['basic-template']]: 'basic',
  [TemplateName['cli-template;']]: 'cli'
};

export default {
  type: 'list',
  message: 'Which type of template do you want to use?',
  choices: Object.entries(TemplateType),
  name: PromptField.templateType
};
