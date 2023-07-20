import { currencies } from "../currencies";
import { FormField, Label, SelectAndInput, ConvertButton } from "./styled";

const Form = ({ onFormSubmit, inputValue, handleCurrencyChange, handleInputChange, calcConvertedValue }) => (
    <FormField onSubmit={onFormSubmit}>
        <Label>
            Kwota w złotówkach:
        </Label>

        <SelectAndInput
            as="input"
            $input
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

        <SelectAndInput onChange={handleCurrencyChange}>
            {currencies.map(currency => (
                <option key={currency.id}>
                    {currency.id}
                </option>
            ))}
        </SelectAndInput>

        <ConvertButton onClick={calcConvertedValue}>
            Przelicz kwotę
        </ConvertButton>
    </FormField>
);

export default Form;