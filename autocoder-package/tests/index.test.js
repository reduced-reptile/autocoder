const autocoder = require('../built');
const fs = require('fs');
const yaml = require('js-yaml');
const codeOutput = require('./index.test.json');

try {
  const fileContents = fs.readFileSync('tests/index.test.yaml', 'utf8');
  const problems = yaml.safeLoadAll(fileContents);
  problems.forEach((problem) => {
    test(`creates the correct code for ${problem.problemTitle}`, () => {
        expect(autocoder(problem.step, problem.lang, {
            problemTitle: problem.problemTitle,
            problemDescription: problem.problemDescription,
            inputSpeciﬁcation: problem.inputSpeciﬁcation,
            outputSpeciﬁcation: problem.outputSpeciﬁcation,
            programmingLanguage: problem.programmingLanguage
        })).toEqual({
            status: 200,
            code: codeOutput[problem.problemTitle].join('\n')
        });
    });
  });
} catch (e) {
  test('Fail if an exception occurs', () => {
    expect(true).toBe(e);
  });
}