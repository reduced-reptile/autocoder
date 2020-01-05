const InputSection = require('../built/classes/InputSection').InputSection;
const fs = require('fs');
const yaml = require('js-yaml');
const codeOutput = require('./inputSection.test.json');

try {
  const fileContents = fs.readFileSync('tests/inputSection.test.yaml', 'utf8');
  const problems = yaml.safeLoadAll(fileContents);
  problems.forEach((problem) => {
    const inputSection = new InputSection(problem.lang, problem.inputSpeciﬁcation, problem.programmingLanguage);
    test(`creates the correct code for ${problem.problemTitle}`, () => {
        expect(inputSection.getCode()).toEqual(codeOutput[problem.problemTitle].join('\n'));
    });

    test(`creates the correct output variables for ${problem.problemTitle}`, () => {
      expect(inputSection.getOutputVars()).toEqual(problem.outputVars);
    });
  });
} catch (e) {
  test('Fail if an exception occurs', () => {
    expect(true).toBe(e);
  });
}