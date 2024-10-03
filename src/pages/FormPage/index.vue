<template>
  <div>
    <h1>FormPage</h1>
    <h2>{{ formName }}</h2>
    <form
      @submit.prevent="onFormSubmit"
      :id="formName"
      ref="mainForm"
      class="main-form"
      v-if="formItems.length"
    >
      <div class="form-items">
        <div
          class="form-item"
          v-for="formItem in formItems"
          :key="formItem.label"
        >
          <component
            v-bind:is="getComponentName(formItem.input.type)"
            v-bind="getComponentProps(formItem)"
            @change="onChangeForm"
          />
        </div>
      </div>
      <div class="form-actions">
        <button class="btn" type="submit">Отправить</button>
        <button class="btn" @click.prevent="refreshForm">Очистить</button>
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

import { mapActions } from "vuex";

import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
  removeDataFromLocalStorage,
} from "@/helpers";

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
      mainForm: {} as { [key: string]: string },
    };
  },
  methods: {
    ...mapActions(["getFormConfig"]),
    getComponentProps(formItem: IFormField) {
      const componentProps = {
        ...formItem.input,
        label: formItem.label,
        tabIndex: formItem?.tabIndex,
        name: formItem.name,
      };
      if (this.mainForm[formItem.name]) {
        return {
          ...componentProps,
          initialValue: this.mainForm[formItem.name],
        };
      }

      return componentProps;
    },
    getComponentName(typeName: string) {
      return (
        (nameToComponent as { [key: string]: string })[typeName] ||
        "CustomInput"
      );
    },
    onFormSubmit() {
      this.$router.push({ name: "formCheck" });
    },
    onChangeForm(entries: { name: string; value: string }) {
      if (!entries || !entries.name) return;
      this.mainForm[entries.name] = entries.value;
      setDataToLocalStorage("mainForm", this.mainForm);
    },
    refreshForm() {
      const currentForm = this.$refs.mainForm as HTMLFormElement;
      currentForm.reset();
      removeDataFromLocalStorage("mainForm");
    },
  },
  async mounted() {
    if (!this.$store.state.formConfig.name) {
      await this.getFormConfig();
    }
    this.formName = this.$store.state.formConfig.name;
    this.formItems = this.$store.state.formConfig.fields;

    const mainForm = getDataFromLocalStorage("mainForm");
    if (mainForm) {
      this.mainForm = mainForm;
    }
  },
});
</script>

<style>
.main-form {
  display: flex;
  flex-direction: column;
}

.form-item {
  margin-bottom: 1rem;
}

.btn {
  padding: 0.4rem;
}

.form-actions {
  display: flex;
  gap: 0.5rem;
}
</style>
