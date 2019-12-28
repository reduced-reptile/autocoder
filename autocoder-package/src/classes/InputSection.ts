import { Section } from './Section';

export class InputSection extends Section {
    inputSpeciﬁcation: string;

    constructor(lang: string, inputSpeciﬁcation: string, programmingLanguage: string) {
        super(lang, programmingLanguage);
        this.inputSpeciﬁcation = inputSpeciﬁcation;
    }

    getCode() {
        return this.getTemplate('InputSection');
    }
}