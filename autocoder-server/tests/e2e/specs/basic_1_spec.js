describe('Basics Page 1 Verifier', function() {
  it('fills in the problem details and submit the form', function() {
    cy.visit('/basic/1')
    cy.title().should('eq', 'Problem Details - Autocoder')
    cy.get('form').within(() => {
      cy.get('#problemTitle').type('problem title')
      cy.get('#problemDescription').type('problem description')
      cy.get('#inputSpeciﬁcation').type('input speciﬁcation')
      cy.get('#outputSpeciﬁcation').type('output speciﬁcation')
      cy.get('#programmingLanguage').select('crystal')
    })
    cy.get('form').submit()
    cy.title().should('eq', 'Resulting Code - Autocoder')
  })
})
