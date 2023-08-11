import { useState, useEffect } from "react";
import axios from "axios";

const response = await axios.get('https://api.exchangerate.host/latest?base=PLN');

export const useCurrenciesApi = () => {
    const [currencyKeys, setCurrencyKeys] = useState([]);
    const [baseCurrency, setBaseCurrency] = useState();
    const [currencyExchangeRate, setCurrencyExchangeRate] = useState();
    const [exchangeRatesDate, setExchangeRatesDate] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingMessage, setLoadingMessage] = useState("");
    const [loadingError, setLoadingError] = useState(false);

    const apiResult = async () => {
        try {
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const loadingOff = () => {
            setLoading(false);
        };

        let delayLoading;

        (async () => {
            try {
                const result = await apiResult();
                setCurrencyKeys(Object.keys(result.rates));
                setBaseCurrency(result.base);
                setCurrencyExchangeRate(Object.entries(result.rates));
                setExchangeRatesDate(result.date);
                setLoadingError(false);
                setLoadingMessage("Trwa ładowanie...");
                clearTimeout(delayLoading);
                delayLoading = setTimeout(loadingOff, 2000);
            } catch (error) {
                console.error(error);
                setLoadingError(true);
                setLoadingMessage("Wystąpił błąd. Spróbuj ponownie później.");
                setLoading(true);
            }
        })();

        return () => {
            clearTimeout(delayLoading);
        };
    }, []);

    return { currencyKeys, baseCurrency, currencyExchangeRate, exchangeRatesDate, loading, loadingMessage, loadingError };
};