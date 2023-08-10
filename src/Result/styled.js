import styled, { css } from "styled-components";

export const ResultParagraph = styled.p`
    margin-top: 40px;
    color: #ffffff;
    text-align: center;
    font-size: 20px;

    ${({ alwaysVisible }) => alwaysVisible && css`
        font-size: 14px;
    `}
`;

export const ResultText = styled.span`
    font-weight: 700;

    ${({ calculatedValue }) => calculatedValue && css`
        color: #ffb000;
    `}
`;