<template>
  <label>
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
