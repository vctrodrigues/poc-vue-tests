import { mountCallback } from "@cypress/vue";
import { ThemeProvider } from "vue-styled-components";
import TodoCreator from "./";
import theme from "@/components/theme";

describe("Todo", () => {
  const template = `
    <theme-provider :theme="theme">
      <TodoCreator />
    </theme-provider>
  `;

  const components = {
    ThemeProvider,
    TodoCreator,
  };

  const data = () => ({
    theme,
  });

  beforeEach(mountCallback({ template, components, data }));

  it("write a name of todo", () => {
    cy.get("#todo-creator").clear().type("Awesome name");
  });

  it("click on create", () => {
    cy.get("#todo-creator-button").click();
  });

  it("input returns to empty", () => {
    cy.get("#todo-creator").should("have.value", "");
  });
});
