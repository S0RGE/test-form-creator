<template>
  <label>
    {{ label }}
    <select :required="required">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </label>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomSelect",
  props: {
    label: {
      type: String,
      default: "Select",
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
