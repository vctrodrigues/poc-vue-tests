import Vue from "vue";
import Vuex from "vuex";
import { todoService } from "@/services";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    todos: [],
  },

  getters: {
    todos: ({ todos }) => todos,
  },

  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    addTodo: (state, todo) => state.todos.push(todo),
    updateTodo: (state, { id, checked }) => {
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.checked = checked;
    },
    removeTodo: (state, id) =>
      (state.todos = state.todos.filter((todo) => todo.id !== id)),
  },

  actions: {
    createTodo: async ({ commit }, title) => {
      const todo = await todoService.create(title);
      commit("addTodo", todo);
      return true;
    },

    loadTodos: async ({ commit }) => {
      const todos = await todoService.get();
      commit("setTodos", todos);
    },

    updateTodo: async ({ commit }, { id, checked }) => {
      const { _checked } = await todoService.update(id, checked);
      commit("updateTodo", { id, _checked });
    },

    removeTodo: async ({ commit }, id) => {
      await todoService.delete(id);
      commit("removeTodo", id);
    },
  },
};
