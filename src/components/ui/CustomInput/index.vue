<template>
  <label>
    {{ label }}
    <input
      :type="type"
      :required="required"
      :tabindex="tabIndex"
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
import Vue from "vue";

export default Vue.extend({
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
