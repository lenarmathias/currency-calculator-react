import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { currencies } from "./currencies";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
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

  return (
    <Container>
      <Header title="Kalkulator Walut" />
      <Form
        onFormSubmit={onFormSubmit}
        inputValue={inputValue}
        handleCurrencyChange={handleCurrencyChange}
        handleInputChange={handleInputChange}
      />
      <Result />
    </Container>
  );
}

export default App;