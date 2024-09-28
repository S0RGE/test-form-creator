<template>
  <label>
    {{ label }}
    <select
      :required="required"
      :tabindex="tabIndex"
      @change="
        $emit('change', {
          name,
          value,
        })
      "
      v-model="value"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </label>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomSelect",
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
      default: "Select",
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array as () => string[],
      default: () => [],
    },
    multiple: {
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
