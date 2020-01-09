import cheats from '../templates/en/cheats.json';
import template from '../templates/en/crystal.json';
// import keywords from '../templates/en/keywords.json';

export class Section {
  private lang: string;
  private programmingLanguage: string;

  constructor(lang: string, programmingLanguage: string) {
    this.lang = lang;
    this.programmingLanguage = programmingLanguage;
  }

  protected getTemplate(sectionName: string): string {
    const templateText = (template as any)[sectionName];
    return templateText.join('\n');
  }

  protected getKeywords(text: string): string[] {
    const textLines = text.toLowerCase().split('\n');
    const textMeanings = textLines.map(line => this.getMeaning(line.trim()));
    console.log(textMeanings);
    return this.combineMeanings(textMeanings);
  }

  private combineMeanings(meanings: string[]): string[] {
    meanings.pop(); // remove the empty last element
    return this.cheat(meanings.join(' & ')).split(' & ');
  }

  private getMeaning(sentence: string): string {
    // let words = sentence.trim().split(' ');
    return this.cheat(sentence);
  }

  private cheat(sentence: string): string {
    const cheatsObj = JSON.parse(JSON.stringify(cheats));
    return cheatsObj[sentence];
  }
}
