import { useState, useEffect } from "react";
import { useCurrenciesApi } from "./useCurrenciesApi";

export const useCurrenciesCalculate = () => {
    const { currencyExchangeRate } = useCurrenciesApi();
    const [inputValue, setInputValue] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState([]);
    const [convertedValue, setConvertedValue] = useState(0);
    const [shouldRender, setShouldRender] = useState(false);
    const [dynamicInputValue, setDynamicInputValue] = useState(inputValue);
    const [dynamicSelectedCurrency, setDynamicSelectedCurrency] = useState(selectedCurrency);

    useEffect(() => {
        if (currencyExchangeRate && currencyExchangeRate.length > 0) {
            setSelectedCurrency(currencyExchangeRate[0]);
        }
    }, [currencyExchangeRate]);

    const handleInputChange = ({ target }) => {
        const { value } = target;
        const sanitizedValue = value.replace(/-/g, '');
        setInputValue(sanitizedValue);
    };

    const handleCurrencyChange = ({ target }) => {
        const selectedCurrencyId = target.value;
        const selected = currencyExchangeRate.find((currency) => currency[0] === selectedCurrencyId);
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
        const convertedValue = inputValue * selectedCurrency[1];
        setConvertedValue(convertedValue);
        handleRefresh();
    };

    return {
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