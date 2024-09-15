<template>
  <div>
    <h1>FormPage</h1>
    <form>
      <div class="form-item">
        <CustomCheckbox />
      </div>
      <div class="form-item">
        <CustomInput />
      </div>
      <div class="form-item">
        <CustomSelect />
      </div>
      <div class="form-item">
        <CustomData />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CustomCheckbox from "@/components/ui/CustomCheckbox/index.vue";
import CustomInput from "@/components/ui/CustomInput/index.vue";
import CustomSelect from "@/components/ui/CustomSelect/index.vue";
import CustomData from "@/components/ui/CustomData/index.vue";

export default Vue.extend({
  name: "FormPage",
  components: {
    CustomCheckbox,
    CustomInput,
    CustomSelect,
    CustomData,
  },
});
</script>

<style>
.form-item {
  margin-bottom: 1rem;
}
</style>
