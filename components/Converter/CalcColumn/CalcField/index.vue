<template>
  <input type="number" :value="value" @input="setValue($event, group)" >
</template>

<script>
export default {
  props: ["group"],

  computed: {
    value() {
      return this.$store.getters[`${this.group}Value`];
    },
  },

  methods: {
    setValue(e, group) {
        this.$store.dispatch(`${group}ValueOnChange`, e.target.value);
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>