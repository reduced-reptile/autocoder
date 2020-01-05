import { Section } from './Section';

export class OutputSection extends Section {
  private outputSpeciﬁcation: string;
  private inputVars: string[];

  constructor(lang: string, outputSpeciﬁcation: string, programmingLanguage: string) {
    super(lang, programmingLanguage);
    this.outputSpeciﬁcation = outputSpeciﬁcation;
    this.inputVars = this.extractInputVars(outputSpeciﬁcation);
  }

  public getCode(): string {
    return this.getTemplate('OutputSection');
  }

  public getInputVars(): string[] {
    return this.inputVars;
  }

  private extractInputVars(outputSpeciﬁcation: string): string[] {
    return [];
  }
}
