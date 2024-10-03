<template>
  <div class="modal">
    <div class="modal-info">
      <h2 class="modal-title">{{ title }}</h2>
      <p class="modal-message">{{ message }}</p>
      <CustomButton @click="$emit('close')">{{ buttonText }}</CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import CustomButton from "@/components/ui/CustomButton/index.vue";

export default Vue.extend({
  name: "CustomModal",
  components: {
    CustomButton,
  },
  props: {
    title: {
      type: String,
      default: "Modal",
    },
    message: {
      type: String,
      default: "Something important here",
    },
    buttonText: {
      type: String,
      default: "Закрыть",
    },
  },
});
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-info {
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.modal-title {
  font-size: 1.3rem;
  font-weight: bold;
}

.modal-message {
  font-size: 1.1rem;
}
</style>
