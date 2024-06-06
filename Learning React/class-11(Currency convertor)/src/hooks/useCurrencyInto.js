import { useEffect, useState } from "react";

function useCurrencyInto(currency) {

    const [currencyData, setCurrencyData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setCurrencyData(res[currency]))
            .catch((err) => {
                console.log("Error while fetching. Error message : ", err)
            })
        console.log(currencyData)
    }, [currency])

    return currencyData
}

export default useCurrencyInto