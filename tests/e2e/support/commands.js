// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.get("#username").clear().type(username);
  cy.get("#password").clear().type(password);
  cy.get("#button-login").click();
});

Cypress.Commands.add("clearCache", () => {
  window.sessionStorage.removeItem("logged");
  window.sessionStorage.removeItem("user");
});

Cypress.Commands.add("createTodo", (title) => {
  cy.get("#todo-creator").clear().type(title);
  cy.get("#todo-creator-button").click();
});

Cypress.Commands.add("removeTodo", (id) => {
  cy.get(`#${id} .remove-button`).click();
});
