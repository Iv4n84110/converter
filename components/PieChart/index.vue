<template>
  <div>
    <pie-chart :chartData="portfolio" :options="options" />
  </div>
</template>

<script>
import PieChart from "./Pie.js";

export default {
  components: { PieChart },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Ваш портфель в USD",
        fontSize: 22,
      },
    },

    timerId: null,
  }),

  async fetch() {
    this.$store.dispatch("getExchanges");
    this.timerId = window.setInterval(() => {
      this.$store.dispatch("getExchanges");
    }, 30000);
  },

  beforeDestroy() {
    clearInterval(this.timerId);
  },

  computed: {
    portfolio() {
      return {
        labels: ["BTC", "ETH"],

        datasets: [
          {
            data: [
              this.$store.getters["portfolioBtc"],
              this.$store.getters["portfolioEth"],
            ],
            backgroundColor: ["#f7931a", "#37367b"],
          },
        ],
      };
    },
  },
};
</script>