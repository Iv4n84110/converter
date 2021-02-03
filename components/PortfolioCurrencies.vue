<template>
  <div>
    <h3>Ваша криптовалюта:</h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">BTC - {{ this.portfolio.btc }}</li>
      <li class="list-group-item">ETH - {{ this.portfolio.eth }}</li>
      <li class="list-group-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    portfolio() {
      return this.$store.getters["portfolio"];
    },
  },
};
</script>

<style scoped>
.list-group {
  max-width: 250px;
}
</style>