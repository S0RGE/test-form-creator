<template>
  <label>
    {{ label }}
    <input
      :type="type"
      :required="required"
      :tabindex="tabIndex"
      :placeholder="placeholder"
      class="custom-input"
      v-model="currentValue"
      @input="
        $emit('change', {
          value,
          name,
        })
      "
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomInput",
  props: {
    name: {
      type: String,
      required: true,
    },
    initialValue: {
      type: String,
      default: "",
    },
    tabIndex: {
      type: Number,
      default: 100,
    },
    label: {
      type: String,
      default: "Input",
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: this.initialValue,
    };
  },
  computed: {
    currentValue: {
      get(): string {
        return this.value;
      },
      set(newValue: string): void {
        this.value = newValue;
      },
    },
  },
});
</script>

<style>
.custom-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

.custom-input:focus {
  outline: none;
  border-color: #007bff;
}

.custom-input:disabled {
  background-color: #e9ecef;
  opacity: 1;
}

.custom-input::placeholder {
  color: #6c757d;
}
</style>
