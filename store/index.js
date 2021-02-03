export const state = () => ({
  currencies: {
    available: {
      currency: "btc",
      value: 1
    },
    received: {
      currency: "usd",
      value: null
    },
    exchanges: {}
  },
  portfolio: {
    btc: 20,
    eth: 30
  }
});

export const mutations = {
  setAvailableCurrency(state, available) {
    state.currencies.available.currency = available;
  },

  setReceivedCurrency(state, received) {
    state.currencies.received.currency = received;
  },

  setAvailableValue(state, available) {
    state.currencies.available.value = available;
  },

  setReceivedValue(state, received) {
    state.currencies.received.value = received;
  },

  setExchanges(state, res) {
    state.currencies.exchanges = res;
  },

  changePortfolioValue(state, { currency, action, value }) {
    action === "add"
      ? (state.portfolio[currency] += +value)
      : (state.portfolio[currency] -= +value);
    if (state.portfolio[currency] < 0) state.portfolio[currency] = 0;
  }
};

export const actions = {
  async getExchanges({ commit }) {
    const selected = await this.$CoinAPI.getSelectedCurrencies(
      "btc",
      "eth",
      "usd"
    );
    commit("setExchanges", selected);
    commit("setReceivedValue", newReceivedValue(this.state));
  },

  availableValueOnChange({ commit }, value) {
    const newReceived = value * getCurrentRate(this.state);
    commit("setAvailableValue", value);
    commit("setReceivedValue", newReceived);
  },

  receivedValueOnChange({ commit }, value) {
    let newAvailable = value / getCurrentRate(this.state);
    commit("setAvailableValue", newAvailable);
    commit("setReceivedValue", value);
  },

  currencyOnChange({ commit }, { currency, group }) {
    if (group === "available") {
      commit("setAvailableCurrency", currency);
    }
    if (group === "received") {
      commit("setReceivedCurrency", currency);
    }
    commit("setReceivedValue", newReceivedValue(this.state));
  },

  reverseCurrencies({ commit }) {
    const a = this.state.currencies.received.currency;
    commit("setReceivedCurrency", this.state.currencies.available.currency);
    commit("setAvailableCurrency", a);
    commit("setReceivedValue", newReceivedValue(this.state));
  }
};

export const getters = {
  currencies: s => s.currencies,
  exchanges: s => s.currencies.exchanges,
  availableCurrency: s => s.currencies.available.currency,
  availableValue: s => s.currencies.available.value,
  receivedCurrency: s => s.currencies.received.currency,
  receivedValue: s => s.currencies.received.value,
  portfolio: s => s.portfolio,
  portfolioBtc: s =>
    Math.round(
      (s.portfolio.btc / s.currencies.exchanges.btc) *
        s.currencies.exchanges.usd *
        1000
    ) / 1000,
  portfolioEth: s =>
    Math.round(
      (s.portfolio.eth / s.currencies.exchanges.eth) *
        s.currencies.exchanges.usd *
        1000
    ) / 1000
};

const getCurrentRate = state => {
  const receivedCurrency = state.currencies.received.currency;
  const availableCurrency = state.currencies.available.currency;

  const currentRate =
    state.currencies.exchanges[receivedCurrency] /
    state.currencies.exchanges[availableCurrency];
  return currentRate;
};

const newReceivedValue = state => {
  return state.currencies.available.value * getCurrentRate(state);
};
