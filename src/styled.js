import styled, { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto !important;
    width: 800px;
    background-color: #222;
    max-width: 90%;
    font-family: 'Montserrat', sans-serif;
    background-image: url("${background}");
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;

export const MainContainer = styled.main`
    width: 600px;
    min-height: 407px;
    border-radius: 5px;
    background-color: #222;
    padding: 20px;
    box-shadow: 0 0 10px 0 #000000;

    @media (max-width: 767px) {
          width: 100%;
          min-height: 440px;
      }
`;