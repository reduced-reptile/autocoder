import { Section } from './Section';

export class HeaderSection extends Section {
  private problemTitle: string;

  constructor(lang: string, problemTitle: string, programmingLanguage: string) {
    super(lang, programmingLanguage);
    this.problemTitle = problemTitle;
  }

  public getCode() {
    return this.getTemplate('HeaderSection');
  }
}
