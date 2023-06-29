import { currencies } from "../currencies";
import "./style.css";

const Form = ({ inputValue, handleCurrencyChange, handleInputChange }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <legend>
                Kwota w złotówkach:
            </legend>

            <input
                className="form__input"
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                min="0"
                placeholder="Wpisz kwotę"
                autoFocus
                required
            />

            <legend>
                Waluta:
            </legend>

            <select
                className="form__select"
                onChange={handleCurrencyChange}
            >
                {currencies.map(currency => (
                    <option key={currency.id}>
                        {currency.id}
                    </option>
                ))}
            </select>

            <button className="form__button">
                Przelicz kwotę
            </button>
        </form>
    );
};

export default Form;