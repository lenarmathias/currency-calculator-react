import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { currencies } from "./currencies";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleCurrencyChange = ({ target }) => {
    const selectedCurrencyId = target.value;
    const selected = currencies.find((currency) => currency.id === selectedCurrencyId);
    setSelectedCurrency(selected);
  };

  return (
    <Container>
      <Header title="Kalkulator Walut" />
      <Form
        inputValue={inputValue}
        handleCurrencyChange={handleCurrencyChange}
        setInputValue={setInputValue}
      />
      <Result />
    </Container>
  );
}

export default App;