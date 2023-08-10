import styled, { css } from "styled-components";

export const LoadingText = styled.p`
    text-align: center;
    margin: 20px;
    color: #ffff;

    ${({ redText }) => redText && css`
        color: #ff0000;
    `}
`;