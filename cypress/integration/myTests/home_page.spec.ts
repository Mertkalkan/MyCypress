describe('The Home Page', () => {

  beforeEach('Login', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')

    cy.login(username, password);
  })

  it('Does not do much!', () => {

    // Should be on a new URL which includes /marketplace
    cy.url().should('include', '/marketplace');
  })
})
