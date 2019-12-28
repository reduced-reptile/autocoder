const OutputSection = require('../built/classes/OutputSection').OutputSection;
const fs = require('fs');
const yaml = require('js-yaml');
const codeOutput = require('./outputSection.test.json');

try {
  const fileContents = fs.readFileSync('tests/outputSection.test.yaml', 'utf8');
  const problems = yaml.safeLoadAll(fileContents);
  problems.forEach((problem) => {
    const outputSection = new OutputSection(problem.lang, problem.outputSpeciﬁcation, problem.programmingLanguage);
    test(`creates the correct code for ${problem.problemTitle}`, () => {
        expect(outputSection.getCode()).toEqual(codeOutput[problem.problemTitle].join('\n'));
    });
  });
} catch (e) {
  test('Fail if an exception occurs', () => {
    expect(true).toBe(e);
  });
}