interface Currency {
    id: string
    name: string
}

const url = "https://poloniex.com/public?command=returnTicker"
const currencies: Currency[] = [
    {
        id: 'btc',
        name: 'USDT_BTC'
    },
    {
        id: 'eth',
        name: 'USDT_ETH'
    },
    {
        id: 'ltc',
        name: 'USDT_LTC'
    },
    {
        id: 'xrp',
        name: 'USDT_XRP'
    }
]

const getCurrencyPrice = async (name: string) => {
    const response = await fetch(url)
    const data = await response.json()
    return parseFloat(data[name].last).toFixed(2)
}

const addClickListener = (currency: Currency) => {
    const coinNameElement = document.getElementById('coin-name') as HTMLElement
    const button = document.getElementById(currency.id) as HTMLButtonElement

    button.addEventListener('click', () => {
        // TODO Add loader
        getCurrencyPrice(currency.name).then(price => {
            coinNameElement.textContent = button.textContent
            const priceElement = document.getElementById('coin-price') as HTMLElement
            priceElement.textContent = `${price} USDT`
        })
    })
}

currencies.forEach(currency => {
    addClickListener(currency)
})


