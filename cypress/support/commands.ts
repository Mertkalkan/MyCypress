// Must be declared global to be detected by typescript (allows import/export)
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable;
    }
  }
}

Cypress.Commands.add("login", (email, password) => { 
  cy.visit('/login');
  cy.get('[label="Email"]').type(email);

  // {enter} causes the form to submit
  cy.get('[label="Password"]').type(`${password}{enter}`);
 })

 // Convert this to a module instead of script (allows import/export)
 export {}