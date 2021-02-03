<template>
  <line-chart
    v-if="loaded"
    :chartdata="datacollection"
    :options="options"
  />
  <Loader v-else />
</template>

<script>
import LineChart from "./Line.js";

export default {
  components: { LineChart },
  data: () => ({
    datacollection: null,
    loaded: true,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: { position: "bottom" },
      title: {
        display: true,
        text: "Курсы валют",
        fontSize: 22,
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "USD",
              fontSize: 20,
            },
          },
        ],
      },
    },
  }),
  async mounted() {
    this.loaded = false;
    try {
      await this.fillData();
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    async fillData() {
      const bitcoin = await this.$CoinAPI.getMarketChart("bitcoin");
      const etherium = await this.$CoinAPI.getMarketChart("ethereum");
      this.datacollection = {
        labels: bitcoin.dates,
        datasets: [
          {
            label: "BTC",
            backgroundColor: "#f7931a",
            borderColor: "#f7931a",
            fill: false,
            borderWidth: 5,
            hoverRadius: 7,
            data: bitcoin.values,
          },
          {
            label: "ETH",
            backgroundColor: "#37367b",
            borderColor: "#37367b",
            fill: false,
            borderWidth: 5,
            hoverRadius: 7,
            data: etherium.values,
          },
        ],
      };
    },
  },
};
</script>