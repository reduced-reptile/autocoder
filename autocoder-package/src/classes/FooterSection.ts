import { Section } from './Section';

export class FooterSection extends Section {
  public getCode() {
    return this.getTemplate('FooterSection');
  }
}
