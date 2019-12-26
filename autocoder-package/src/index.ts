interface Problem {
  problemTitle: string;
  problemDescription: string;
  inputSpeciﬁcation: string;
  outputSpeciﬁcation: string;
  programmingLanguage: string;
}

function autocoder(step: string, lang: string, data: Problem) {
  switch (step) {
    case 'code':
      return {
        status: 200,
        code: 'puts "Hello world!"'
      };
    default:
      return {
        status: 400,
        message: 'Invalid step ' + step,
      };
  }
};

module.exports = autocoder;