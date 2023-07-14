import { useState, useEffect } from "react";
import "./style.css";

const Timer = () => {
    const [userDate, setUserDate] = useState(new Date());
    const formatedDate = userDate.toLocaleDateString(
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

    return (
        <p className="timer">
            Dzisiaj jest {formatedDate}
        </p>
    );
};

export default Timer;