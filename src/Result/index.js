import "./style.css";

const Result = ({ refreshedInputValue, convertedValue, refreshedSelectedCurrency }) => (
        <p className="result">
            {refreshedInputValue} PLN = <span className="result__boldText">{convertedValue.toFixed(2)} {refreshedSelectedCurrency}</span>
        </p>
);

export default Result;