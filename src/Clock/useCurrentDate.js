import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [userDate, setUserDate] = useState(new Date());
    const refreshedDate = userDate.toLocaleDateString(
        "pl",
        {
            month: "long",
            weekday: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        }
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setUserDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return refreshedDate;
};