<template>
  <div class="form-page">
    <h1>{{ formName }}</h1>
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
        <CustomButton class="btn" type="submit">Отправить</CustomButton>
        <CustomButton class="btn" @click.native.prevent="refreshForm"
          >Очистить</CustomButton
        >
      </div>
    </form>
    <CustomModal v-if="haveNewForm" @close="onCloseModal" v-bind="modalData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IFormField } from "@/api/types";
import { nameToComponent } from "@/static";
import CustomCheckbox from "@/components/ui/CustomCheckbox/index.vue";
import CustomInput from "@/components/ui/CustomInput/index.vue";
import CustomSelect from "@/components/ui/CustomSelect/index.vue";
import CustomData from "@/components/ui/CustomData/index.vue";
import CustomButton from "@/components/ui/CustomButton/index.vue";
import CustomModal from "@/components/ui/CustomModal/index.vue";

import { mapActions } from "vuex";

import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
  removeDataFromLocalStorage,
} from "@/helpers";

export default defineComponent({
  name: "FormPage",
  components: {
    CustomCheckbox,
    CustomInput,
    CustomSelect,
    CustomData,
    CustomButton,
    CustomModal,
  },
  data() {
    return {
      nameToComponent: nameToComponent,
      mainForm: {} as { [key: string]: string },
      modalData: {
        title: "Важно!",
        message: "Получена новая форма.",
        buttonText: "Обновить",
      },
    };
  },
  methods: {
    ...mapActions({ getFormConfig: "getFormConfig", setLoading: "setLoading" }),
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
      const currentForm = this.$refs.mainForm as HTMLFormElement;

      if (currentForm.checkValidity()) {
        this.$router.push({ name: "formCheck" });
      }
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
    onCloseModal() {
      this.$store.dispatch("setNewFormConfig");
    },
  },
  computed: {
    formName() {
      return this.$store.state.formConfig.name || "";
    },
    formItems() {
      return this.$store.state.formConfig.fields || [];
    },
    haveNewForm() {
      return this.$store.state.haveNewForm;
    },
  },
  async created() {
    this.setLoading(true);

    const mainForm = getDataFromLocalStorage("mainForm");
    if (mainForm) {
      this.mainForm = mainForm;
    }

    if (!this.$store.state.formConfig.name) {
      await this.getFormConfig();
    }

    this.setLoading(false);
  },
});
</script>

<style>
.form-page {
  margin-top: 2rem;
}

.main-form {
  display: flex;
  flex-direction: column;
  padding: 2rem;

  max-width: 40rem;
  margin: 0 auto;
}

.form-item {
  margin-bottom: 1rem;
}

.form-actions {
  display: flex;
  gap: 0.5rem;
}
</style>
