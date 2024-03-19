const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-converted")
const currencyConvertSelect = document.querySelector(".currency-select-to-convert")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.20
    const euroToday = 6.20
    const libraToday = 6.40
    const bitCoinToday = 316793.81
    const realToday = 1

    if (currencySelect.value == "Dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "Euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("btc", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitCoinToday)
    }

    if (currencySelect.value == "real") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }



    if (currencyConvertSelect.value == "real1")
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    if (currencyConvertSelect.value == "dolar1") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencyConvertSelect.value == "euro1") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencyConvertSelect.value == "libra1") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencyConvertSelect.value == "bitcoin1") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("btc", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitCoinToday)
    }


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImage.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/bitcoin 1.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/Real.png"
    }

    convertValues()
}

    function changeConvert() {
        const currencyName = document.querySelector(".currency")
        const currencyImage = document.querySelector(".currency-convert-img")

        if (currencyConvertSelect.value == "dolar1") {
            currencyName.innerHTML = "Dolar Americano"
            currencyImage.src = "./assets/Dolar.png"
        }

        if (currencyConvertSelect.value == "euro1") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"
        }

        if (currencyConvertSelect.value == "libra1") {
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/libra 1.png"
        }

        if (currencyConvertSelect.value == "bitcoin1") {
            currencyName.innerHTML = "BitCoin"
            currencyImage.src = "./assets/bitcoin 1.png"
        }

        if (currencyConvertSelect.value == "real1") {
            currencyName.innerHTML = "Real"
            currencyImage.src = "./assets/Real.png"
        }

        convertValues()
    }


currencyConvertSelect.addEventListener("change", changeConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)