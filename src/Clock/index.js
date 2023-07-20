import { useCurrentDate } from "./useCurrentDate";
import { ClockContainer } from "./styled";

const Clock = () => {
const refreshedDate = useCurrentDate();

    return (
        <ClockContainer>
            Dzisiaj jest {refreshedDate}
        </ClockContainer>
    );
};

export default Clock;