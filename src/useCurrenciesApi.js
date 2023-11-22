import {useState, useEffect} from "react";
import axios from "axios";

const apiAddress = "https://api.currencyapi.com/v3/latest?apikey=";
const apiKey = "cur_live_oTGTrWAORl2KCmzZ94BTMslJz2XmGSNUTC5BSKnA";
const apiParameters = "&currencies=EUR%2CUSD%2CCAD%2CGBP&base_currency=PLN";

const apiBaseCurrency = apiParameters.slice(-3);

export const useCurrenciesApi = () => {
    const [apiObject, setApiObject] = useState();
    const [loading, setLoading] = useState(true);
    const [apiSuccess, setApiSuccess] = useState(true);
    const baseCurrency = apiBaseCurrency;

    useEffect(() => {
        const callingApi = async () => {
            try {
                const response = await axios.get(
                    apiAddress + apiKey + apiParameters
                );
                setApiObject(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(true);
                clearTimeout(delayLoading);
                setApiSuccess(false);
            }
        };

        const delayLoading = setTimeout(callingApi, 2000);

        return () => {
            clearTimeout(delayLoading);
        };
    }, []);

    return {apiObject, baseCurrency, loading, apiSuccess};
};