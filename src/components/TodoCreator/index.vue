<template>
  <Row align="center">
    <Input
      v-model="title"
      id="todo-creator"
      type="text"
      placeholder="Create a todo here"
      class="app-mr-1"
    />
    <Button id="todo-creator-button" @click="create">Create</Button>
  </Row>
</template>

<script>
import { mapActions } from "vuex";
import { Row, Input, Button } from "@/components";
export default {
  name: "TodoCreator",
  components: { Row, Input, Button },
  data: () => ({
    title: "",
  }),
  methods: {
    ...mapActions("todo", ["createTodo"]),
    async create() {
      try {
        await this.createTodo(this.title);
      } catch (err) {
        console.warn("🔥 Error while creating todo", err);
      } finally {
        this.title = "";
      }
    },
  },
};
</script>
