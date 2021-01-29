<template>
  <input type="number" :value="value" @change="setValue($event)" />
</template>

<script>
export default {
  data: () => {
    return {
      value: 1.01,
    };
  },

  methods: {
    setValue(e) {
      this.value = e.target.value;
      console.log(this.value);
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