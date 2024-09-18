<template>
  <div>
    <h1>FormPage</h1>
    <h2>{{ formName }}</h2>
    <form :id="formName" class="main-form" v-if="formItems.length">
      <div class="form-items">
        <div
          class="form-item"
          v-for="formItem in formItems"
          :key="formItem.label"
        >
          <component
            v-bind:is="getComponentName(formItem.input.type)"
            v-bind="getComponentProps(formItem)"
          />
        </div>
      </div>
      <div class="form-actions" v-if="formActions.length">
        <div
          class="form-item"
          v-for="formAction in formActions"
          :key="formAction.text"
        >
          <CustomButton :type="formAction.type" :value="formAction.text" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IFormField, IFormButton } from "@/api/types";
import { nameToComponent } from "@/static";
import CustomCheckbox from "@/components/ui/CustomCheckbox/index.vue";
import CustomInput from "@/components/ui/CustomInput/index.vue";
import CustomSelect from "@/components/ui/CustomSelect/index.vue";
import CustomData from "@/components/ui/CustomData/index.vue";
import CustomButton from "@/components/ui/CustomButton/index.vue";

import { getFormConfig } from "@/api";

export default Vue.extend({
  name: "FormPage",
  components: {
    CustomCheckbox,
    CustomInput,
    CustomSelect,
    CustomData,
    CustomButton,
  },
  data() {
    return {
      formName: "",
      formItems: [] as IFormField[],
      formActions: [] as IFormButton[],
      nameToComponent: nameToComponent,
    };
  },
  methods: {
    getComponentProps(formItem: IFormField) {
      return {
        ...formItem.input,
        label: formItem.label,
      };
    },
    getComponentName(typeName: string) {
      return (
        (nameToComponent as { [key: string]: string })[typeName] ||
        "CustomInput"
      );
    },
  },
  async mounted() {
    const formConfig = await getFormConfig();
    this.formName = formConfig.name;
    this.formItems = formConfig.fields;
    this.formActions = formConfig.buttons;
    console.log(formConfig);
  },
});
</script>

<style>
.form-item {
  margin-bottom: 1rem;
}
</style>
