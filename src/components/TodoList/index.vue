<template>
  <Col :size="4" :paddingT="12">
    <Todo v-for="todo in todos" :key="todo.id" :id="todo.id" class="todo">{{
      todo.title
    }}</Todo>
  </Col>
</template>

<script>
import { Col, Todo } from "@/components";

export default {
  name: "TodoList",
  components: { Col, Todo },
  props: {
    todos: { type: Array, required: true, default: () => [] },
  },
};
</script>
