<template>
  <div>
    <h1>CheckFormPage</h1>
    <div class="display-items">
      <div class="display-item" v-for="(item, el) in mainForm" :key="el">
        <span> {{ el }}: </span>
        <span>
          {{ item }}
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
  mounted() {
    const formData = getDataFromLocalStorage("mainForm");
    if (formData) {
      this.mainForm = formData;
    }
  },
});
</script>

<style>
.display-items {
  max-width: 50%;
  margin: 0 auto;
}

.display-item {
  display: flex;
  justify-content: space-between;
}
</style>
