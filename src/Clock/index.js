import { useCurrentDate } from "./useCurrentDate";
import { ClockContainer } from "./styled";

const Clock = () => {
const userDate = useCurrentDate();
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

    return (
        <ClockContainer>
            Dzisiaj jest {refreshedDate}
        </ClockContainer>
    );
};

export default Clock;