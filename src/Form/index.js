import { useState } from "react";
import "./style.css";

const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (<form
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
            onChange={({ target }) => { setInputValue(target.value) }}
            min={0}
            placeholder="Wpisz kwotę"
            autoFocus
            required
        />

        <legend>
            Waluta:
        </legend>

        <select className="form__select" />

        <button
            className="form__button"
        >
            Przelicz kwotę
        </button>
    </form>
    );
};

export default Form;