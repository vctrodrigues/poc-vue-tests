<template>
  <Col class="home app-pa-2">
    <span>Welcome,</span>
    <h3 class="app-ma-0 app-mb-2">{{ user.name }}</h3>

    <span>
      Here are your daily list of todos. <strong>Enjoy it! 😄</strong>
    </span>

    <Col :size="4" :marginT="12">
      <TodoCreator />
    </Col>
    <TodoList :todos="todos" />
  </Col>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Col, TodoList, TodoCreator } from "@/components";
export default {
  name: "Home",
  components: { Col, TodoList, TodoCreator },
  computed: {
    ...mapGetters("user", ["user"]),
    ...mapGetters("todo", ["todos"]),
  },
  mounted() {
    if (!this.loadUser()) {
      this.signout();
      this.$router.push("/login");
    }
    this.loadTodos();
  },
  methods: {
    ...mapActions("user", ["loadUser", "signout"]),
    ...mapActions("todo", ["createTodo", "loadTodos"]),
  },
};
</script>
