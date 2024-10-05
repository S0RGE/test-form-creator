<template>
  <div :class="['modal', `modal-${modalType}`]">
    <div class="modal-wrapper">
      <h2 class="modal-title">{{ title }}</h2>
      <p class="modal-message">{{ message }}</p>
      <CustomButton ref="modalButton" @custom-click="onClose">{{
        buttonText
      }}</CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropType } from "vue";

import CustomButton from "@/components/ui/CustomButton/index.vue";
import type { IModalType } from "./types";

export default defineComponent({
  name: "CustomModal",
  components: {
    CustomButton,
  },
  emits: ["close"],
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
    modalType: {
      type: String as PropType<IModalType>,
      default: "info",
    },
  },
  methods: {
    onClose() {
      this.$emit("close");
    },
    handleKeydown(event: KeyboardEvent) {
      if (event.key === "Tab") {
        const modalContainer = this.$el;
        const focusableElements = modalContainer.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );
        const currentIndex = Array.prototype.indexOf.call(
          focusableElements,
          document.activeElement
        );
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        if (document.activeElement !== modalContainer) {
          (focusableElements[nextIndex] as HTMLElement).focus();
          event.preventDefault();
        }
      }
    },
  },
  mounted() {
    const modalButton = this.$refs.modalButton as HTMLButtonElement;
    if (modalButton) {
      modalButton.focus();
    }
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
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

.modal-wrapper {
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

/* Error */
.modal-error .modal-title {
  color: #fa4444;
}

.modal-error .modal-wrapper {
  border: 1px solid #fa4444;
}
</style>
