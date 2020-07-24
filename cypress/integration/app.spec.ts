/// <reference types="cypress" />

describe('App', () => {
  before(() => {
    cy.visit('localhost:3000');
  });

  it('app loads', () => {
    cy.url().should('be.equal', 'http://localhost:3000/');
  });

  it('page contents', () => {
    cy.get('p').contains('Edit src/App.tsx and save to reload.');
    cy.get('.App-link').contains('Learn React');
  });
});
