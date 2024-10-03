<template>
  <div>
    <router-view />
    <CustomLoader />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomLoader from "@/components/ui/CustomLoader/index.vue";

export default Vue.extend({
  name: "App",
  components: {
    CustomLoader,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

h1 {
  text-align: center;
  text-transform: uppercase;
}
</style>
