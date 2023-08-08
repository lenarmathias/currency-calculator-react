import styled, { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";

export const GlobaStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
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
`;

export const MainContainer = styled.main`
    width: 600px;
    border-radius: 5px;
    background-color: #222;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px #000000;

    @media (max-width: 767px) {
          width: 100%;
      }
`;