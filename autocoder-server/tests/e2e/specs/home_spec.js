describe('Home Page Verifier', function() {
  it('clicks the link "Navigate to basic"', function() {
    cy.visit('/')
    cy.title().should('eq', 'Home Page - Autocoder')
    cy.get('a[href*="basic"]').click()
    cy.title().should('eq', 'Problem Details - Autocoder')
  })

  it('switches between english and french', function() {
    cy.visit('/')
    cy.title().should('eq', 'Home Page - Autocoder')
    cy.get('a[href*="fr"]').click()
    cy.title().should('eq', 'Page d\'accueil - Autocodeur')
    cy.get('a[href*="en"]').click()
    cy.title().should('eq', 'Home Page - Autocoder')
  })
})
