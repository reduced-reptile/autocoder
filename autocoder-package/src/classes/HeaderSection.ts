import { Section } from './Section';

export class HeaderSection extends Section {
    problemTitle: string;

    constructor(lang: string, problemTitle: string, programmingLanguage: string) {
        super(lang, programmingLanguage);
        this.problemTitle = problemTitle;
    }

    getCode() {
        return this.getTemplate('HeaderSection');
    }
}