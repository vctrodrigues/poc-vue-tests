<template>
  <Row
    :id="id"
    :marginY="4"
    justify="between"
    :class="{ 'todo--checked': checked }"
  >
    <Row>
      <Checkbox
        :checked="checked"
        @click="checked = !checked"
        class="app-mr-1 todo__checkbox"
      />
      <s v-if="checked">
        <span v-if="title">{{ title }}</span>
        <slot v-else />
      </s>
      <span v-else>
        <span v-if="title">{{ title }}</span>
        <slot v-else />
      </span>
    </Row>
    <div>
      <Link
        class="remove-button"
        color="primary-ligthen-1"
        href="#"
        @click="remove"
        >Remove</Link
      >
    </div>
  </Row>
</template>

<script>
import { mapActions } from "vuex";
import { Row, Link, Checkbox } from "@/components";
export default {
  name: "Todo",
  components: { Row, Link, Checkbox },
  props: {
    id: { type: [Number, String], required: true, default: "" },
    title: { type: String, required: false, default: null },
  },
  data: () => ({
    checked: false,
  }),
  watch: {
    checked(checked) {
      this.updateTodo({ id: this.id, checked });
    },
  },
  methods: {
    ...mapActions("todo", ["updateTodo", "removeTodo"]),

    async remove() {
      try {
        await this.removeTodo(this.id);
      } catch (err) {
        console.warn(`🔥 Error on deleting #${this.id} todo`, err);
      }
    },
  },
};
</script>
