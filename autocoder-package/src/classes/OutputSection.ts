import { Section } from './Section';

export class OutputSection extends Section {
    outputSpeciﬁcation: string;

    constructor(lang: string, outputSpeciﬁcation: string, programmingLanguage: string) {
        super(lang, programmingLanguage);
        this.outputSpeciﬁcation = outputSpeciﬁcation;
    }

    getCode() {
        return this.getTemplate('OutputSection');
    }
}