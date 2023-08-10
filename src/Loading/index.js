import { useCurrenciesApi } from "../useCurrenciesApi";
import { LoadingText } from "./styled";

const Loading = ({ text }) => {
    const { loadingMessage, loadingError } = useCurrenciesApi();

    return (
        <LoadingText redText={loadingError}>
            {loadingMessage}
        </LoadingText>
    )
};

export default Loading