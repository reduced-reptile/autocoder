module.exports = (step,
  lang,
  data) => {
  switch(step) {
    case 'code':
      return { // fake stub for building the second page of the application so I can see the results first
        status: 200,
        code: 'puts "Hello world!"'
      };
    default:
      return {
        status: 400,
        message: 'Invalid step ' + step,
      };
    }
}