import { mountCallback } from "@cypress/vue";
import { ThemeProvider } from "vue-styled-components";
import Todo from "./";
import theme from "@/components/theme";

describe("Todo", () => {
  const template = `
    <theme-provider :theme="theme">
      <Todo :id="id">{{ title }}</Todo>
    </theme-provider>
  `;

  const components = {
    ThemeProvider,
    Todo,
  };

  const id = 1;
  const title = "Awesome todo name";

  const data = () => ({
    id,
    title,
    theme,
  });

  beforeEach(mountCallback({ template, components, data }));

  it("renders the todo item", () => {
    cy.contains("span", "Awesome todo name");
  });

  it("check the todo item", () => {
    cy.get(".todo__checkbox").click();
    cy.get("#1.todo--checked");
  });
});
