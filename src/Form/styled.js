import styled from "styled-components";

export const FormField = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 20px;
`;

export const Label = styled.label`
    padding: 5px;
    color: #ffffff;
    justify-self: end;
`;

export const Selector = styled.select`
    padding: 5px;
    border-radius: 5px;
    background-color: #000000;
    color: #ffffff;
    width: 180px;
`;

export const ValueInput = styled.input`
    padding: 5px;
    border-radius: 5px;
    background-color: #000000;
    color: #ffffff;
    width: 180px;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    -moz-appearance: textfield;
`;

export const ConvertButton = styled.button`
    padding: 5px;
    background-color: #ffb000;
    border: none;
    border-radius: 5px;
    grid-column: 1 / span 2;
    transition: 1s;

    &:hover {
        background-color: #ffee8c;
        transform: scale(1.05);
    }

    &:active {
        color: #ffb000;
        background-color: #ffffff;
        transform: scale(1.03);
        transition: 0.2s;
    }

    @media (max-width: 767px) {
        transition: none;

        &:hover {
            background-color: #ffb000;
            transform: none;
        }

        &:active {
            color: #000000;
        }   
    }
`;