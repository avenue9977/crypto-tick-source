interface Currency {
  id: string
  name: string
  identifier: string
}

const url = "https://poloniex.com/public?command=returnTicker"
const currencies: Currency[] = [
  {
    id: 'btc',
    name: 'BTC',
    identifier: 'USDT_BTC'
  },
  {
    id: 'eth',
    name: 'ETH',
    identifier: 'USDT_ETH'
  },
  {
    id: 'ada',
    name: 'ADA',
    identifier: 'USDT_ADA'
  },
  {
    id: 'xrp',
    name: 'XRP',
    identifier: 'USDT_XRP'
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

const getCurrencyPrice = async (name: string) => {
  const response = await fetch(url)
  const data = await response.json()
  return parseFloat(data[name].last).toFixed(2)
}

const beforePairselect = () => {
  hideInitialState()
  togglePricing(false)
  toggleLoader(true)
}

const addClickListener = (currency: Currency) => {
  const coinNameElement = document.getElementById('coin-name') as HTMLElement
  const button = document.getElementById(currency.id) as HTMLButtonElement

  button.addEventListener('click', () => {
    beforePairselect()

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


