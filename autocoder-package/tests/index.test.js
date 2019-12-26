const autocoder = require('../built');

const problems = [
  {
    step: 'code',
    lang: 'en',
    problemTitle: 'problem title 1',
    problemDescription: 'problem description 1',
    inputSpeciﬁcation: 'input speciﬁcation 1',
    outputSpeciﬁcation: 'output speciﬁcation 1',
    programmingLanguage: 'crystal',
    codeOutput: 'puts "Hello world!"'
  },
  {
    step: 'code',
    lang: 'en',
    problemTitle: 'problem title 2',
    problemDescription: 'problem description 2',
    inputSpeciﬁcation: 'input speciﬁcation 2',
    outputSpeciﬁcation: 'output speciﬁcation 2',
    programmingLanguage: 'crystal',
    codeOutput: 'puts "Hello world!"'
  },
  {
    step: 'code',
    lang: 'en',
    problemTitle: 'problem title 3',
    problemDescription: 'problem description 3',
    inputSpeciﬁcation: 'input speciﬁcation 3',
    outputSpeciﬁcation: 'output speciﬁcation 3',
    programmingLanguage: 'crystal',
    codeOutput: 'puts "Hello world!"'
  },
];

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