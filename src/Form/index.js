import { currencies } from "../currencies";
import "./style.css";

const Form = ({ onFormSubmit, inputValue, handleCurrencyChange, handleInputChange, calcConvertedValue }) => (
    <form
        className="form"
        onSubmit={onFormSubmit}
    >
        <label>
            Kwota w złotówkach:
        </label>

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

        <label>
            Waluta:
        </label>

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

        <button className="form__button" onClick={calcConvertedValue}>
            Przelicz kwotę
        </button>
    </form>
);

export default Form;