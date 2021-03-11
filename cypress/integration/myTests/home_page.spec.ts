describe('The Home Page', () => {

  beforeEach('Login', () => {
    cy.login('mert.kalkan@caruso-dataplace.com', 'Albertwandel321');
  })

  it('Does not do much!', () => {

    // Should be on a new URL which includes /marketplace
    cy.url().should('include', '/marketplace');
  })
})
