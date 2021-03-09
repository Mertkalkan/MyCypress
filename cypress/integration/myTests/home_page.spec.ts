describe('The Home Page', () => {

  beforeEach('Login', () => {
    cy.login('latest2020@caruso.cf', '5Fw4AFWkgWh9WD');
  })

  it('Does not do much!', () => {

    // Should be on a new URL which includes /marketplace
    cy.url().should('include', '/marketplace');
  })
})
