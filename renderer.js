const $ = require("jquery"),
			purl = "https://poloniex.com/public?command=returnTicker";


let getBTC = () => {
	$.ajax({
			url: purl,
			success: (data) => {
				let price = parseFloat(data.USDT_BTC.last);
				$("#coin-price").text(price.toFixed(2) + " $")
			}
		})
}

let getETH = () => {
	$.ajax({
			url: purl,
			success: (data) => {
				let price = parseFloat(data.USDT_ETH.last)
				$("#coin-price").text(price.toFixed(2) + " $")
			}
		})
}

let getLTC = () => {
	$.ajax({
			url: purl,
			success: (data) => {
				let price = parseFloat(data.USDT_LTC.last);
				$("#coin-price").text(price.toFixed(2) + " $")
			}
		})
}

let getXRP = () => {
	$.ajax({
			url: purl,
			success: (data) => {
				let price = parseFloat(data.USDT_XRP.last);
				$("#coin-price").text(price.toFixed(2) + " $")
			}
		})
}

$("#bitcoin").click(function(){
    let a = $(this).text();
    $("#coin-name").text(a);
		getBTC();
})

$("#etherium").click(function(){
    let a = $(this).text();
    $("#coin-name").text(a);
		getETH();
})

$("#litecoin").click(function(){
    let a = $(this).text();
    $("#coin-name").text(a);
		getLTC();
})

$("#ripple").click(function(){
    let a = $(this).text();
    $("#coin-name").text(a);
		getXRP();
})


