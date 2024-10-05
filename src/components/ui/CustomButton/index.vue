<template>
  <button @click="onClick" ref="customButton" class="btn" :tabindex="tabIndex">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomInput",
  emits: ["custom-click"],
  props: {
    value: {
      type: String,
      default: "Input",
    },
    type: {
      type: String,
      default: "text",
    },
    tabIndex: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    onClick(event: Event) {
      event.preventDefault();
      this.$emit("custom-click", event);
    },
    focus() {
      const customButton = this.$refs.customButton as HTMLButtonElement;
      if (customButton) {
        customButton.focus();
      }
    },
  },
});
</script>

<style>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #ccc;
}
</style>
