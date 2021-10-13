// https://docs.cypress.io/api/introduction/api.html

describe("Accessing login", () => {
  it("Visits the app login url", () => {
    cy.clearCache();
    cy.visit("/login");
    cy.contains("span", "Welcome");
  });

  it("Type wrong username and password", () => {
    cy.login("victor", "pizza1234");
    cy.contains("#hint", "invalid");
  });

  it("Type correct username and password", () => {
    cy.login("victor", "pizza123");
    cy.location("pathname").should("eq", "/");
  });

  it("Enter the home page", () => {
    cy.contains("h3", "Victor");
  });
});

describe("Creating a todo", () => {
  it("Visits the home page", () => {
    cy.visit("/");
  });

  it("Type the title and create a todo", () => {
    cy.createTodo("Awesome todo name");
  });

  it("Check if todo was added in list", () => {
    cy.contains(".todo span", "Awesome todo name");
  });
});

describe("Reading todos", () => {
  it("Visits the home page", () => {
    cy.visit("/");
  });

  it("Check if exists todos", () => {
    cy.get(".todo");
  });
});

describe("Removing todos", () => {
  it("Visits the home page", () => {
    cy.visit("/");
  });

  it("Click on remove", () => {
    cy.removeTodo(11);
  });
});

describe("Sign out of the site", () => {
  it("Visits the home page", () => {
    cy.visit("/");
  });

  it("Click on logout tab", () => {
    cy.get("#logout-button").click();
  });
});
