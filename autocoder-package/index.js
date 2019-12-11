module.exports = (step, data) => {
  switch(step) {
    case 'ccc-prep':
      let problemArray = data.split('Problem J');
      problemArray.shift();
      let problems = new Map(); 
      problemArray.forEach(function(problem) {
        let problemTitle = problem.split('\n')[0].trim();
        let problemContent = problem.split('\n');
        problemContent.shift();
        problemContent = problemContent.join('\n')
        problems.set('Problem J' + problemTitle[0], {
            title: problemTitle.split(': ')[1],
            content: problemContent
        });
      });
      return JSON.stringify([...problems]);
    default:
      return 'Invalid step: ' + step;
    }
}