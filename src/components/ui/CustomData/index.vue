<template>
  <input type="file" :tabindex="tabIndex" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomData",
  props: {
    tabIndex: {
      type: Number,
      default: 100,
    },
  },
});
</script>
