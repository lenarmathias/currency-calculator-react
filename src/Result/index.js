import "./style.css";

const Result = ({ refreshedInputValue, convertedValue, refreshedSelectedCurrency }) => (
    <div>
        <p className="result">
            {refreshedInputValue} PLN = <span className="result__boldText">{convertedValue.toFixed(2)} {refreshedSelectedCurrency}</span>
        </p>
    </div>
);

export default Result;