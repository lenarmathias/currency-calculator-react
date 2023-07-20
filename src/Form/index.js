import { currencies } from "../currencies";
import { FormField, Label, Selector, ValueInput, ConvertButton } from "./styled";

const Form = ({ onFormSubmit, inputValue, handleCurrencyChange, handleInputChange, calcConvertedValue }) => (
    <FormField onSubmit={onFormSubmit}>
        <Label>
            Kwota w złotówkach:
        </Label>

        <ValueInput
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            min="0"
            placeholder="Wpisz kwotę"
            autoFocus
            required
        />

        <Label>
            Waluta:
        </Label>

        <Selector onChange={handleCurrencyChange}>
            {currencies.map(currency => (
                <option key={currency.id}>
                    {currency.id}
                </option>
            ))}
        </Selector>

        <ConvertButton onClick={calcConvertedValue}>
            Przelicz kwotę
        </ConvertButton>
    </FormField>
);

export default Form;