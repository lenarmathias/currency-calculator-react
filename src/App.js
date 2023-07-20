import { useState } from "react";
import Container from "./Container";
import Clock from "./Clock";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { currencies } from "./currencies";
import { GlobaStyle } from "./styled";

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
        <Clock />
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