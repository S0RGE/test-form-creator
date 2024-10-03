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
