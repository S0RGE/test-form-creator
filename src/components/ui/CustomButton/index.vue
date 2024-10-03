<template>
  <button @click="$emit('custom-click')" class="btn" :tabindex="tabIndex">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomInput",
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
