import {useState, useEffect} from "react";
import {useCurrenciesApi} from "./useCurrenciesApi";

export const useCurrenciesCalculate = () => {
    const {
        apiObject,
        baseCurrency,
        loading,
        apiSuccess
    } = useCurrenciesApi();
    const [currenciesExchangeRate, setCurrenciesExchangeRate] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState([]);
    const [convertedValue, setConvertedValue] = useState(0);
    const [shouldRender, setShouldRender] = useState(false);
    const [dynamicInputValue, setDynamicInputValue] = useState(inputValue);
    const [dynamicSelectedCurrency, setDynamicSelectedCurrency] = useState(selectedCurrency);

    useEffect(() => {
        if (apiObject && apiObject.data) {
            const rates = Object.entries(apiObject.data);
            setSelectedCurrency(rates[0]);
            setCurrenciesExchangeRate(rates);
        }
    }, [apiObject]);

    const handleInputChange = ({target}) => {
        const {value} = target;
        const sanitizedValue = value.replace(/-/g, '');
        setInputValue(sanitizedValue);
    };

    const handleCurrencyChange = ({target}) => {
        const selectedCurrencyId = target.value;
        const selected = currenciesExchangeRate.find(
            (currency) => currency[0] === selectedCurrencyId);
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
        const selectedExchangeRate = selectedCurrency[1].value;
        const convertedValue = inputValue * selectedExchangeRate;
        setConvertedValue(convertedValue);
        handleRefresh();
    };

    return {
        apiObject,
        baseCurrency,
        loading,
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