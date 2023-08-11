import { LoadingText } from "./styled";

const Loading = ({ loadingMessage, loadingError }) => (
        <LoadingText redText={loadingError}>
            {loadingMessage}
        </LoadingText>
    );

export default Loading