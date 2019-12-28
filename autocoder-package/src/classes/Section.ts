import template from '../templates/en/crystal.json';

export class Section {
  private lang: string;
  private programmingLanguage: string;

  constructor(lang: string, programmingLanguage: string) {
    this.lang = lang;
    this.programmingLanguage = programmingLanguage;
  }

  protected getTemplate(sectionName: string) {
    const templateText = (template as any)[sectionName];
    return templateText.join('\n');
  }
}
