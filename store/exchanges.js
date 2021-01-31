export const state = () => ({
  exchanges: {}
})

export const mutations = {

  setExchanges(state, res) {
    state.exchanges = res
  },
}

export const actions = {
  async fetch({ commit }) {
    const selected = await this.$axios.$get('https://api.coingecko.com/api/v3/exchange_rates')
    commit('setExchanges', selected);
  }
}

export const getters = {
  exchanges: s => s.exchanges
}