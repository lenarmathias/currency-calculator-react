import styled, { css } from "styled-components";

export const ResultParagraph = styled.p`
    margin-top: 40px;
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    margin-bottom: 0;

    ${({ alwaysVisible }) => alwaysVisible && css`
        font-size: 12px;
    `}
`;

export const ResultText = styled.span`
    font-weight: 700;

    ${({ calculatedValue }) => calculatedValue && css`
        color: #ffb000;
    `}
`;