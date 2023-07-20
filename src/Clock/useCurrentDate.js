import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [userDate, setUserDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setUserDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return userDate;
};