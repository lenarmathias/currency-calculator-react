import { useState } from "react";
import Container from "./Container";
import Timer from "./Timer";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { currencies } from "./currencies";
import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg";

const GlobaStyle = createGlobalStyle`
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

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [convertedValue, setConvertedValue] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);
  const [dynamicInputValue, setDynamicInputValue] = useState(inputValue);
  const [dynamicSelectedCurrency, setDynamicSelectedCurrency] = useState(selectedCurrency);

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = ({ target }) => {
    const { value } = target;
    const sanitizedValue = value.replace(/-/g, '');
    setInputValue(sanitizedValue);
  };

  const handleCurrencyChange = ({ target }) => {
    const selectedCurrencyId = target.value;
    const selected = currencies.find((currency) => currency.id === selectedCurrencyId);
    setSelectedCurrency(selected);
  };

  const handleRefresh = () => {
    setDynamicInputValue(inputValue);
    setDynamicSelectedCurrency(selectedCurrency.code);
  };

  const calcConvertedValue = () => {
    if (inputValue === '') {
      setShouldRender(false);
    } else {
      setShouldRender(true);
    }
    const convertedValue = inputValue / selectedCurrency.exchangeRate;
    setConvertedValue(convertedValue);
    handleRefresh();
  };

  return (
    <>
      <GlobaStyle />
      <Container>
        <Timer />
        <Header title="Kalkulator Walut" />
        <Form
          onFormSubmit={onFormSubmit}
          inputValue={inputValue}
          handleCurrencyChange={handleCurrencyChange}
          handleInputChange={handleInputChange}
          calcConvertedValue={calcConvertedValue}
        />
        {shouldRender &&
          <Result
            refreshedInputValue={dynamicInputValue}
            convertedValue={convertedValue}
            refreshedSelectedCurrency={dynamicSelectedCurrency}
          />}
      </Container>
    </>
  );
}

export default App;