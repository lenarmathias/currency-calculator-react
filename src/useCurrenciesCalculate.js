import { useState, useEffect } from "react";
import { useCurrenciesApi } from "./useCurrenciesApi";

export const useCurrenciesCalculate = () => {
    const { apiObject } = useCurrenciesApi();
    const [apiSuccess, setApiSuccess] = useState();
    const [currenciesExchangeRate, setCurrenciesExchangeRate] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState([]);
    const [convertedValue, setConvertedValue] = useState(0);
    const [shouldRender, setShouldRender] = useState(false);
    const [dynamicInputValue, setDynamicInputValue] = useState(inputValue);
    const [dynamicSelectedCurrency, setDynamicSelectedCurrency] = useState(selectedCurrency);

    useEffect(() => {
        if (apiObject && apiObject.rates) {
            const rates = Object.entries(apiObject.rates);
            setSelectedCurrency(rates[0]);
            setCurrenciesExchangeRate(rates);
            setApiSuccess(apiObject.success);
        }
    }, [apiObject, apiSuccess]);

    const handleInputChange = ({ target }) => {
        const { value } = target;
        const sanitizedValue = value.replace(/-/g, '');
        setInputValue(sanitizedValue);
    };

    const handleCurrencyChange = ({ target }) => {
        const selectedCurrencyId = target.value;
        const selected = currenciesExchangeRate.find((currency) => currency[0] === selectedCurrencyId);
        setSelectedCurrency(selected);
    };

    const handleRefresh = () => {
        setDynamicInputValue(inputValue);
        setDynamicSelectedCurrency(selectedCurrency[0]);
    };

    const calcConvertedValue = () => {
        if (inputValue === "") {
            return
        }
        setShouldRender(true);
        const selectedExchangeRate = selectedCurrency[1]
        const convertedValue = inputValue * selectedExchangeRate;
        setConvertedValue(convertedValue);
        handleRefresh();
    };

    return {
        apiSuccess,
        inputValue,
        selectedCurrency,
        convertedValue,
        shouldRender,
        dynamicInputValue,
        dynamicSelectedCurrency,
        handleInputChange,
        handleCurrencyChange,
        calcConvertedValue,
    };
};