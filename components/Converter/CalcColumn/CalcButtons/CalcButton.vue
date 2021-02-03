<template>
  <div class="btn-wrapper">
    <input
      type="radio"
      class="btn-check"
      name="options"
      :id="group + currency"
      @click="setCurrency(group, currency)"
      :checked="isActive(currency, active)"
    />
    <label class="btn btn-secondary" :for="group + currency">{{
      currency.toUpperCase()
    }}</label>
  </div>
</template>


<script>
export default {
  props: ["currency", "group"],

  computed: {
    active() {
      return this.$store.getters[`${this.group}Currency`];
    },
  },

  methods: {
    setCurrency(group, currency) {
      this.$store.dispatch(`currencyOnChange`, { currency, group });
    },
    isActive(currency, active) {
      return currency === active ? true : false;
    },
  },
};
</script>

<style scoped>
.btn-wrapper {
  display: inline;
}

input.btn-check {
  display: none;
}


</style>