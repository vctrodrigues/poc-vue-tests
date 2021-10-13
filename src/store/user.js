import Vue from "vue";
import Vuex from "vuex";
import { authService } from "@/services";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    user: {
      name: "",
      username: "",
      password: "",
    },
    logged: false,
  },

  getters: {
    user: ({ user }) => user,
    isLogged: ({ logged }) => logged,
  },

  mutations: {
    setUser: (state, user) => (state.user = user),
    setLogged: (state, logged) => (state.logged = logged),
  },

  actions: {
    signin: async ({ commit }, user) => {
      const { logged, _user } = await authService.signin(user);
      commit("setLogged", logged);
      commit("setUser", _user);

      return logged;
    },

    signout: ({ commit }) => {
      authService.signout();
      commit("setLogged", false);

      return true;
    },

    loadUser: ({ commit }) => {
      const user = JSON.parse(window.sessionStorage.getItem("user"));

      if (user) {
        commit("setUser", user);
        commit("setLogged", true);
        console.log(user);
        return true;
      }

      return false;
    },
  },
};
