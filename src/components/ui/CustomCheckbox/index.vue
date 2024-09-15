<template>
  <label>
    {{ label }}
    <input type="checkbox" />
  </label>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomCheckbox",
  props: {
    label: {
      type: String,
      default: "Checkbox",
    },
  },
});
</script>
