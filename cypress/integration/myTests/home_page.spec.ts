describe('The Home Page', () => {

  beforeEach('Login', () => {
    cy.login('pre2020@caruso.cf', 'VJhQaNxc57sUhJ');
  })

  it('Does not do much!', () => {

    // Should be on a new URL which includes /marketplace
    cy.url().should('include', '/marketplace');
  })
})
