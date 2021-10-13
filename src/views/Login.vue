<template>
  <Row class="about app-mt-4" align="center" justify="center">
    <Col :size="3">
      <span class="app-ma-0">Welcome,</span>
      <h3 class="app-ma-0 app-mb-2">Sign in</h3>

      <Col :size="12">
        <Input
          id="username"
          v-model="username"
          type="text"
          placeholder="Your username"
          class="app-mb-1"
        />
        <Input
          id="password"
          v-model="password"
          type="password"
          placeholder="Your password"
          class="app-mb-1"
        />
        <Button id="button-login" @click="login">Login</Button>
        <Hint v-show="showMessage" id="hint" class="app-mt-1">{{ hint }}</Hint>
      </Col>
    </Col>
  </Row>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { Input, Button, Row, Col, Hint } from "@/components";

export default {
  name: "Login",
  components: { Input, Button, Row, Col, Hint },
  data: () => ({
    username: "",
    password: "",

    showMessage: false,
    hint: "",
  }),
  mounted() {
    const logged = window.sessionStorage.getItem("logged");
    if (logged) {
      this.setUser(JSON.parse(window.sessionStorage.getItem("user")));
      this.$router.push("/");
    }
  },
  methods: {
    ...mapMutations("user", ["setUser"]),
    ...mapActions("user", ["signin"]),

    async login() {
      try {
        await this.signin({ username: this.username, password: this.password });

        this.hint = "";
        this.showMessage = false;
        this.$router.push("/");
      } catch (err) {
        this.hint = err.message;
        this.showMessage = true;
      }
    },
  },
};
</script>
