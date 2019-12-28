import { Section } from './Section';

export class InputSection extends Section {
  private inputSpeciﬁcation: string;

  constructor(lang: string, inputSpeciﬁcation: string, programmingLanguage: string) {
    super(lang, programmingLanguage);
    this.inputSpeciﬁcation = inputSpeciﬁcation;
  }

  public getCode() {
    return this.getTemplate('InputSection');
  }
}
