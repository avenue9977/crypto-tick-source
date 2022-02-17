interface Currency {
  id: string
  name: string
  identifier: string
}

const url = "https://api.binance.com/api/v3/ticker/price?symbol="
const currencies: Currency[] = [
  {
    id: 'btc',
    name: 'BTC',
    identifier: 'BTCUSDT'
  },
  {
    id: 'eth',
    name: 'ETH',
    identifier: 'ETHUSDT'
  },
  {
    id: 'ada',
    name: 'ADA',
    identifier: 'ADAUSDT'
  },
  {
    id: 'xrp',
    name: 'XRP',
    identifier: 'XRPUSDT'
  }
]

const initial = document.getElementById('initial') as HTMLElement
const pricing = document.getElementById('pricing') as HTMLElement
const loader = document.getElementById('loader') as HTMLElement
const hiddenClass = 'hidden'

const hideInitialState = () => initial.classList.add(hiddenClass)

const toggleLoader = (visible: boolean) => {
  const classes = loader.classList
  visible ? classes.remove(hiddenClass) : classes.add(hiddenClass)
}

const togglePricing = (visible: boolean) => {
  const classes = pricing.classList
  visible ? classes.remove(hiddenClass) : classes.add(hiddenClass)
}

const getCurrencyPrice = async (identifier: string): Promise<string> => {
  const response = await fetch(url + identifier, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors',
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await response.json()

  return parseFloat(data.price).toFixed(2)
}

const beforePairSelect = () => {
  hideInitialState()
  togglePricing(false)
  toggleLoader(true)
}

const addClickListener = (currency: Currency) => {
  const coinNameElement = document.getElementById('coin-name') as HTMLElement
  const button = document.getElementById(currency.id) as HTMLButtonElement

  button.addEventListener('click', () => {
    beforePairSelect()

    getCurrencyPrice(currency.identifier)
      .then(price => {
        coinNameElement.textContent = `1 ${currency.name}`
        const priceElement = document.getElementById('coin-price') as HTMLElement
        priceElement.textContent = `${price} USDT`
      })
      .finally(() => {
        toggleLoader(false)
        togglePricing(true)
      })
  })
}

currencies.forEach(currency => {
  addClickListener(currency)
})


