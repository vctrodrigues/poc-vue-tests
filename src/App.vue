<template>
  <theme-provider :theme="theme">
    <div id="app">
      <Nav>
        <router-link
          v-if="isLogged"
          to="/"
          v-slot="{ href, isExactActive }"
          custom
        >
          <NavLink :href="href" :isActive="isExactActive"> Home </NavLink>
        </router-link>
        <NavLink id="logout-button" v-if="isLogged" @click="logout">
          Logout
        </NavLink>
        <router-link
          v-if="!isLogged"
          to="/login"
          v-slot="{ href, isExactActive }"
          custom
        >
          <NavLink :href="href" :isActive="isExactActive"> Login </NavLink>
        </router-link>
      </Nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </theme-provider>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ThemeProvider } from "vue-styled-components";
import { Nav, NavLink } from "@/components";
import theme from "@/components/theme";

export default {
  name: "App",
  components: { ThemeProvider, Nav, NavLink },
  data: () => ({
    drawerOpen: false,
  }),
  computed: {
    ...mapGetters("user", ["isLogged"]),

    theme() {
      return theme;
    },
  },
  methods: {
    ...mapActions("user", ["signout"]),

    close() {
      this.drawerOpen = false;
    },

    logout() {
      this.signout();
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" src="./styles/global.scss"></style>
