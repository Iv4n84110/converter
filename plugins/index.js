import { CoinService } from './CoinService.js'

export default ({ app: { $axios } }, inject) => {
  const CoinAPI = new CoinService($axios)

  inject('CoinAPI', CoinAPI)
}