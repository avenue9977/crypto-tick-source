const url = "https://poloniex.com/public?command=returnTicker"
const currencies = [
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

const getCurrencyPrice = async (name) => {
    const response = await fetch(url)
    const data = await response.json()
    return parseFloat(data[name].last).toFixed(2)
}

const addClickListener = (currency) => {
    const coinNameElement = document.getElementById('coin-name')
    const button = document.getElementById(currency.id)

    button.addEventListener('click', () => {
        // TODO Add loader
        getCurrencyPrice(currency.name).then(price => {
            coinNameElement.textContent = button.textContent
            const priceElement = document.getElementById('coin-price')
            priceElement.textContent = `${price} USDT`
        })
    })
}

currencies.forEach(currency => {
    addClickListener(currency)
})


