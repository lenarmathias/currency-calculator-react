import {
    LoadingContainer,
    CenteringWrapper,
    LoadingText
} from "./styled";

const Loading = ({apiSuccess}) => (
    <LoadingContainer>
        <CenteringWrapper>
            <LoadingText $redText={!apiSuccess}>
                {apiSuccess ? "Trwa ładowanie..." : "Wystąpił błąd. Spróbuj ponownie później."}
            </LoadingText>
        </CenteringWrapper>
    </LoadingContainer>
);

export default Loading