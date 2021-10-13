import { mountCallback } from "@cypress/vue";
import { ThemeProvider } from "vue-styled-components";
import TodoList from "./";
import theme from "@/components/theme";

describe("TodoList", () => {
  const template = `
    <theme-provider :theme="theme">
      <TodoList :todos="todos" />
    </theme-provider>
  `;

  const components = {
    ThemeProvider,
    TodoList,
  };

  const todos = [
    {
      id: 1,
      title: "Todo title 1",
      checked: true,
    },
    {
      id: 2,
      title: "Todo title 2",
      checked: true,
    },
    {
      id: 3,
      title: "Todo title 3",
      checked: true,
    },
  ];

  const data = () => ({
    todos,
    theme,
  });

  beforeEach(mountCallback({ template, components, data }));

  it("renders a list of todos", () => {
    cy.contains(".todo", "Todo title 1");
  });
});
