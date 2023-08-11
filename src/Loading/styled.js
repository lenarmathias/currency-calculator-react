import styled, { css } from "styled-components";

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CenteringWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const LoadingText = styled.p`
    text-align: center;
    margin: auto;
    color: #ffff;

    ${({ redText }) => redText && css`
        color: #ff0000;
    `}
`;