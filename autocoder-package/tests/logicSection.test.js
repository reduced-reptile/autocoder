const LogicSection = require('../built/classes/LogicSection').LogicSection;
const fs = require('fs');
const yaml = require('js-yaml');
const codeOutput = require('./logicSection.test.json');

try {
  const fileContents = fs.readFileSync('tests/logicSection.test.yaml', 'utf8');
  const problems = yaml.safeLoadAll(fileContents);
  problems.forEach((problem) => {
    const logicSection = new LogicSection(problem.lang, problem.problemDescription, problem.programmingLanguage);
    test(`creates the correct code for ${problem.problemTitle}`, () => {
        expect(logicSection.getCode()).toEqual(codeOutput[problem.problemTitle].join('\n'));
    });
  });
} catch (e) {
  test('Fail if an exception occurs', () => {
    expect(true).toBe(e);
  });
}