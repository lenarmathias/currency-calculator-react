import { FormField, Label, SelectAndInput, ConvertButton } from "./styled";

const Form = ({ inputValue, handleCurrencyChange, handleInputChange, calcConvertedValue, currencyKeys }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
    };
    console.log(currencyKeys);

    return (
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
                {currencyKeys.map(currencyKey => (
                    <option key={currencyKey}>
                        {currencyKey}
                    </option>
                ))}
            </SelectAndInput>
            <ConvertButton onClick={calcConvertedValue}>
                Przelicz kwotę
            </ConvertButton>
        </FormField>
    )
};

export default Form;