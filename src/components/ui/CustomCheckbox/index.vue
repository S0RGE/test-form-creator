<template>
  <label class="checkbox-label">
    {{ label }}
    <input
      type="checkbox"
      :required="required"
      :tabindex="tabIndex"
      :v-model="currentValue"
      :checked="currentValue"
      @change="
        $emit('change', {
          name,
          value: $event?.target?.checked,
        })
      "
    />
  </label>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomCheckbox",
  props: {
    label: {
      type: String,
      default: "Checkbox",
    },
    name: {
      type: String,
      required: true,
    },
    tabIndex: {
      type: Number,
      default: 100,
    },
    initialValue: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: this.initialValue,
    };
  },
  computed: {
    currentValue: {
      get(): boolean {
        return this.value;
      },
      set(newValue: boolean): void {
        this.value = newValue;
      },
    },
  },
});
</script>

<style>
input[type="checkbox"] {
  margin-right: 0.5rem;
}

label.checkbox-label {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

label.checkbox-label input {
  flex-basis: 3rem;
}

input[type="checkbox"]:focus {
  outline: none;
}

input[type="checkbox"]:disabled {
  background-color: #e9ecef;
  opacity: 1;
}

input[type="checkbox"]:checked {
  background-color: #007bff;
  border-color: #007bff;
}
</style>
