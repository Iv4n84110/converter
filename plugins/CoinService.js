import axios from 'axios'

export class CoinService {

  _apiBase = 'https://api.coingecko.com/api/v3/';


  async getResourse(url) {
    const res = await axios.get(`${this._apiBase}${url}`);
    if (res.status !== 200) {
      throw new Error(`Could not fetch ${url}` +
        `, recived ${res.status}`)
    }

    return await res.data;
  }

  async getExchangeRates() {
    const res = await this.getResourse(`exchange_rates`);
    return res.rates
  }

  async getSelectedCurrencies(...currencies) {
    let filteredCurrencies = {};
    const  data = await this.getExchangeRates();
    for (let i = 0; i < currencies.length; i++) {
      filteredCurrencies = {
        ...filteredCurrencies,
        [currencies[i]]: data[currencies[i]].value,
      };
    }
    console.log(filteredCurrencies)
    return filteredCurrencies;
  }

}

