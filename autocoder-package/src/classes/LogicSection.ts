import { Section } from './Section';

export class LogicSection extends Section {
    problemDescription: string;

    constructor(lang: string, problemDescription: string, programmingLanguage: string) {
        super(lang, programmingLanguage);
        this.problemDescription = problemDescription;
    }

    getCode() {
        return this.getTemplate('LogicSection');
    }
}