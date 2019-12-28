import { Section } from './Section';

export class OutputSection extends Section {
  private outputSpeciﬁcation: string;

  constructor(lang: string, outputSpeciﬁcation: string, programmingLanguage: string) {
    super(lang, programmingLanguage);
    this.outputSpeciﬁcation = outputSpeciﬁcation;
  }

  public getCode() {
    return this.getTemplate('OutputSection');
  }
}
