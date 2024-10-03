<template>
  <div class="modal">
    <div class="modal-info">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <button @click="$emit('close')">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomModal",
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
  padding: 3rem;
  border-radius: 0.5rem;
}
</style>
