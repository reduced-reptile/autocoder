const autocoder = require('../built');
const fs = require('fs');
const yaml = require('js-yaml');

try {
  const fileContents = fs.readFileSync('tests/problems.yaml', 'utf8');
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
            code: problem.codeOutput
        });
    });
  });
} catch (e) {
  test('Fail if an exception occurs', () => {
    expect(true).toBe(e);
  });
}