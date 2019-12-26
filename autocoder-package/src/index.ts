interface IProblem {
  problemTitle: string;
  problemDescription: string;
  inputSpeciﬁcation: string;
  outputSpeciﬁcation: string;
  programmingLanguage: string;
}

function autocoder(step: string, lang: string, data: IProblem) {
  switch (step) {
    case 'code':
      return {
        code: 'puts "Hello world!"',
        status: 200,
      };
    default:
      return {
        message: 'Invalid step ' + step,
        status: 400,
      };
  }
}

module.exports = autocoder;
