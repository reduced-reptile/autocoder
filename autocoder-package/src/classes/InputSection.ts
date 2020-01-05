import { Section } from './Section';

export class InputSection extends Section {
  private inputSpeciﬁcation: string;
  private outputVars: string[];

  constructor(lang: string, inputSpeciﬁcation: string, programmingLanguage: string) {
    super(lang, programmingLanguage);
    this.inputSpeciﬁcation = inputSpeciﬁcation;
    this.outputVars = this.extractOutputVars(inputSpeciﬁcation);
  }

  public getCode(): string {
    return this.getTemplate('InputSection');
  }

  public getOutputVars(): string[] {
    return this.outputVars;
  }

  private extractOutputVars(inputSpeciﬁcation: string): string[] {
    return this.getKeywords(inputSpeciﬁcation);
  }
}
