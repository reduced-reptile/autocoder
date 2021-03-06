describe('End to End Verifier', function() {
  it('goes through the basic flow in english', function() {
    cy.visit('/')
    cy.title().should('eq', 'Home Page - Autocoder')
    cy.get('a[href*="basic"]').click()
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

  it('goes through the basic flow in french', function() {
    cy.visit('/?lang=fr')
    cy.title().should('eq', 'Page d\'accueil - Autocodeur')
    cy.get('a[href*="basic"]').click()
    cy.title().should('eq', 'Détails du problème - Autocodeur')
    cy.get('form').within(() => {
      cy.get('#problemTitle').type('problem title')
      cy.get('#problemDescription').type('problem description')
      cy.get('#inputSpeciﬁcation').type('input speciﬁcation')
      cy.get('#outputSpeciﬁcation').type('output speciﬁcation')
      cy.get('#programmingLanguage').select('crystal')
    })
    cy.get('form').submit()
    cy.title().should('eq', 'Code résultant - Autocodeur')
  })
})
