/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    emailLogin(email: string, password: string): Chainable<Element>;
  }
}
