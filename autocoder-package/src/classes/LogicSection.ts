import { Section } from './Section';

export class LogicSection extends Section {
  private problemDescription: string;

  constructor(lang: string, problemDescription: string, programmingLanguage: string) {
    super(lang, programmingLanguage);
    this.problemDescription = problemDescription;
  }

  public getCode() {
    return this.getTemplate('LogicSection');
  }
}
