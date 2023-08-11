import { LoadingContainer, CenteringWrapper, LoadingText } from "./styled";

const Loading = ({ loadingMessage, loadingError }) => (
    <LoadingContainer>
        <CenteringWrapper>
            <LoadingText redText={loadingError}>
                {loadingMessage}
            </LoadingText>
        </CenteringWrapper>
    </LoadingContainer>
);

export default Loading