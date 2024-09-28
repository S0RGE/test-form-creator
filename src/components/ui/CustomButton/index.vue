<template>
  <input :type="type" :value="value" class="btn" :tabindex="tabIndex" />
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
