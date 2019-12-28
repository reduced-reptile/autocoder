import template from '../templates/en/crystal.json';

export class Section {
  lang: string;
  programmingLanguage: string;

  constructor(lang: string, programmingLanguage: string) {
    this.lang = lang;
    this.programmingLanguage = programmingLanguage;
  }

  getTemplate(sectionName: string) {
    return (<any>template)[sectionName].join('\n');
  }
}