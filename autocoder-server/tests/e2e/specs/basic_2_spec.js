describe('Basics Page 2 Verifier', function() {
  it('Renders the code output page', function() {
    cy.visit({
      url: '/basic/2',
      method: 'POST',
      body: {
        lang: 'en',
        problemTitle: 'problem title',
        problemDescription: 'problem description',
        inputSpeciﬁcation: 'input speciﬁcation',
        outputSpeciﬁcation: 'output speciﬁcation',
        programmingLanguage: 'crystal'
      }
    })
    cy.title().should('eq', 'Resulting Code - Autocoder')
  })

  const problems = [
    {
      lang: 'en',
      problemTitle: 'problem title 1',
      problemDescription: 'problem description 1',
      inputSpeciﬁcation: 'input speciﬁcation 1',
      outputSpeciﬁcation: 'output speciﬁcation 1',
      programmingLanguage: 'crystal',
      codeOutput: 'puts "Hello world!"'
    },
    {
      lang: 'en',
      problemTitle: 'problem title 2',
      problemDescription: 'problem description 2',
      inputSpeciﬁcation: 'input speciﬁcation 2',
      outputSpeciﬁcation: 'output speciﬁcation 2',
      programmingLanguage: 'crystal',
      codeOutput: 'puts "Hello world!"'
    },
    {
      lang: 'en',
      problemTitle: 'problem title 3',
      problemDescription: 'problem description 3',
      inputSpeciﬁcation: 'input speciﬁcation 3',
      outputSpeciﬁcation: 'output speciﬁcation 3',
      programmingLanguage: 'crystal',
      codeOutput: 'puts "Hello world!"'
    },
  ]

  // dynamically create a single test for each operation in the list
  problems.forEach((problem) => {
    // derive test name from data
    it(`creates the correct code for ${problem.problemTitle}`, () => {
      cy.visit({
        url: '/basic/2',
        method: 'POST',
        body: {
          lang: problem.lang,
          problemTitle: problem.problemTitle,
          problemDescription: problem.problemDescription,
          inputSpeciﬁcation: problem.inputSpeciﬁcation,
          outputSpeciﬁcation: problem.outputSpeciﬁcation,
          programmingLanguage: problem.programmingLanguage
        }
      })
      cy.get('#codeOutput')
        .invoke('val')
        .then(code => cy.wrap(code).should('eq', problem.codeOutput))  
    })
  })
})
