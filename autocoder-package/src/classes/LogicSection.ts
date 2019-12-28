import { Section } from './Section';

export class LogicSection extends Section {
  private problemDescription: string;
  private inputVars: string[];
  private outputVars: string[];

  constructor(lang: string, problemDescription: string, programmingLanguage: string, inputVars: string[], outputVars: string[]) {
    super(lang, programmingLanguage);
    this.problemDescription = problemDescription;
    this.inputVars = inputVars;
    this.outputVars = outputVars;
  }

  public getCode() : string {
    return this.getTemplate('LogicSection');
  }
}
