import { useState, useEffect } from "react";
import { TimerContainer } from "./styled";

const Timer = () => {
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

    return (
        <TimerContainer>
            Dzisiaj jest {refreshedDate}
        </TimerContainer>
    );
};

export default Timer;