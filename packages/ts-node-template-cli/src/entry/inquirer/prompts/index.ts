import templateConfig from './template';

class PromptCreator {
  finalPrompts: any[] = [];

  constructor() {
    this.init();
  }

  init = () => {
    this.add(templateConfig);
  };

  add = (config) => {
    this.finalPrompts.push(config);
  };
}

export { PromptCreator };
