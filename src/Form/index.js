import "./style.css";

const Form = () => {
    return (<form className="form">
        <legend>
            Kwota w złotówkach:
        </legend>

        <input
            className="form__input"
            type="number"
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