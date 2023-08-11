import { useState, useEffect } from "react";
import axios from "axios";

const apiAdress = 'https://api.exchangerate.host/latest?base=PLN'

export const useCurrenciesApi = () => {
    const [apiObject, setApiObject] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingOff = () => {
            setLoading(false);
        };

        let delayLoading;

        (async () => {
            try {
                const response = await axios.get(apiAdress);
                setApiObject(response.data);
                delayLoading = setTimeout(loadingOff, 2000);
            } catch (error) {
                console.error(error);
                setLoading(true);
            }
        })();

        return () => {
            clearTimeout(delayLoading);
        };
    }, []);

    return { apiObject, loading };
};