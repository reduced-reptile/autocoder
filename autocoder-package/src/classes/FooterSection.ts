import { Section } from './Section';

export class FooterSection extends Section {

    getCode() {
        return this.getTemplate('FooterSection');
    }
}