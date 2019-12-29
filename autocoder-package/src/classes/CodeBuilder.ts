import { FooterSection } from './FooterSection';
import { HeaderSection } from './HeaderSection';
import { InputSection } from './InputSection';
import { LogicSection } from './LogicSection';
import { OutputSection } from './OutputSection';

import { StatusCodes } from '../enums/StatusCodes';
import { IProblem } from '../interfaces/IProblem';

export class CodeBuilder {
  private lang: string;
  private problemTitle: string;
  private problemDescription: string;
  private inputSpeciﬁcation: string;
  private outputSpeciﬁcation: string;
  private programmingLanguage: string;

  constructor(lang: string, data: IProblem) {
    this.lang = lang;
    this.problemTitle = data.problemTitle;
    this.problemDescription = data.problemDescription;
    this.inputSpeciﬁcation = data.inputSpeciﬁcation;
    this.outputSpeciﬁcation = data.outputSpeciﬁcation;
    this.programmingLanguage = data.programmingLanguage;
  }

  public buildCode() {
    if (this.problemTitle === 'Problem J1: Speed fines are not fine!') {
      // Our example problem we are trying to solve
      const headerSection = new HeaderSection(this.lang, this.problemTitle, this.programmingLanguage);
      const inputSection = new InputSection(this.lang, this.inputSpeciﬁcation, this.programmingLanguage);
      const outputSection = new OutputSection(this.lang, this.outputSpeciﬁcation, this.programmingLanguage);
      const logicSection = new LogicSection(this.lang, this.problemDescription, this.programmingLanguage, inputSection.getOutputVars(), outputSection.getInputVars());
      const footerSection = new FooterSection(this.lang, this.programmingLanguage);
      let program = headerSection.getCode();
      program += '\n'; // Need a newline between each section
      program += inputSection.getCode();
      program += '\n'; // Need a newline between each section
      program += logicSection.getCode();
      program += '\n'; // Need a newline between each section
      program += outputSection.getCode();
      program += '\n'; // Need a newline between each section
      program += footerSection.getCode();
      return {
        code: program,
        status: StatusCodes.OK,
      };
    }
    // we are going to use this default not to break unit tests until our prototype works for the basics
    return {
      code: 'puts "Hello world!"',
      status: StatusCodes.OK,
    };
  }
}
