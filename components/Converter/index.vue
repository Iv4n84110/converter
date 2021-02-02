<template>
  <div>
    <div>Конвертер</div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-5">
          <CalcColumn :group="'available'" />
        </div>
        <Arrows />
        <div class="col-5">
          <CalcColumn :group="'received'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.$store.dispatch("getExchanges");
    this.timerId = window.setInterval(() => {
      this.$store.dispatch("getExchanges");
    }, 30000);
  },

  data: () => ({
    timerId: null,
  }),

  beforeDestroy() {
    clearInterval(this.timerId);
  },
};
</script>

<style scoped>

</style>



