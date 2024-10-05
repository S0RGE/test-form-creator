<template>
  <div class="check-form-page">
    <h1>Проверьте перед отправкой</h1>
    <div class="display-items">
      <div class="display-item" v-for="field in formFields" :key="field">
        <span class="field-name"> {{ field }}: </span>
        <span class="field-value">
          {{ mainForm[field] || "-" }}
        </span>
      </div>
    </div>
    <div class="display-actions">
      <button class="btn" @click="onSendForm">Отправить</button>
      <button class="btn" @click="$router.push({ name: 'form' })">
        Редактировать
      </button>
      <button class="btn" @click="onRefreshForm">Заполнить заного</button>
    </div>
    <CustomModal
      v-if="modalData"
      v-bind="modalData"
      @close="modalData = null"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CustomModal from "@/components/ui/CustomModal/index.vue";

import { getDataFromLocalStorage, removeDataFromLocalStorage } from "@/helpers";
import { IFormField } from "@/api/types";
import { sendForm } from "@/api";

export default Vue.extend({
  name: "CheckFormPage",
  components: {
    CustomModal,
  },
  data() {
    return {
      mainForm: {} as { [key: string]: string },
      modalData: null as { title: string; message: string } | null,
    };
  },
  methods: {
    onRefreshForm() {
      removeDataFromLocalStorage("mainForm");
      this.$router.push({ name: "form" });
    },
    setModalData({ title, message }: { title: string; message: string }) {
      this.modalData = {
        title,
        message,
      };

      setTimeout(() => {
        this.modalData = null;
      }, 3000);
    },
    async onSendForm() {
      try {
        this.$store.commit("setLoading", true);
        await sendForm(this.mainForm);
        this.setModalData({
          title: "Форма успешно отправлена!",
          message: "Спасибо за заявку!",
        });
      } catch (error: unknown | Error) {
        const errorMessage = (error as Error)?.message || "Что то пошло не так";
        this.setModalData({
          title: "Возникла ошибка!",
          message: errorMessage,
        });
      } finally {
        this.$store.commit("setLoading", false);
      }
    },
  },
  computed: {
    formFields() {
      return this.$store.getters.currentFormConfig.fields?.map(
        (item: IFormField) => item.name
      );
    },
  },
  mounted() {
    const formData = getDataFromLocalStorage("mainForm");
    if (formData) {
      this.mainForm = formData;
    }
  },
});
</script>

<style>
.check-form-page h1 {
  margin: 2rem 0;
}

.display-items,
.display-actions {
  max-width: 40rem;
  margin: 0 auto;
}

.display-items {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.display-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 0 0.3rem;
}

.field-name {
  font-weight: bold;
}

.field-value {
  font-style: italic;
}

.display-actions {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
