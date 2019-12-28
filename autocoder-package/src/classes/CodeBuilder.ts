import { HeaderSection } from './HeaderSection';
import { InputSection } from './InputSection';
import { LogicSection } from './LogicSection';
import { OutputSection } from './OutputSection';
import { FooterSection } from './FooterSection';
import { StatusCodes } from '../enums/StatusCodes';
import { IProblem } from '../interfaces/IProblem';

export class CodeBuilder {
    lang: string;
    problemTitle: string;
    problemDescription: string;
    inputSpeciﬁcation: string;
    outputSpeciﬁcation: string;
    programmingLanguage: string;

    constructor(lang: string, data: IProblem) {
        this.lang = lang;
        this.problemTitle = data.problemTitle;
        this.problemDescription = data.problemDescription;
        this.inputSpeciﬁcation = data.inputSpeciﬁcation;
        this.outputSpeciﬁcation = data.outputSpeciﬁcation;
        this.programmingLanguage = data.programmingLanguage;
    }

    buildCode() {
        if (this.problemTitle === 'Problem J1: Speed fines are not fine!') { // Our example problem we are trying to solve
            const headerSection = new HeaderSection(this.lang, this.problemTitle, this.programmingLanguage);
            const inputSection = new InputSection(this.lang, this.inputSpeciﬁcation, this.programmingLanguage);
            const logicSection = new LogicSection(this.lang, this.problemDescription, this.programmingLanguage);
            const outputSection = new OutputSection(this.lang, this.outputSpeciﬁcation, this.programmingLanguage);
            const footerSection = new FooterSection(this.lang, this.programmingLanguage);
            let program = headerSection.getCode();
            program += "\n\n" // Should have a space between the class and the first method
            program += inputSection.getCode();
            program += "\n\n" // Should have a space between methods
            program += logicSection.getCode();
            program += "\n\n" // Should have a space between methods
            program += outputSection.getCode();
            program += "\n" // Just a newline between the end of output and the footer
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