import { ResultParagraph, ResultText } from "./styled";

const Result = ({ refreshedInputValue, convertedValue, refreshedSelectedCurrency }) => (
    <ResultParagraph>
        {refreshedInputValue} PLN =
        {" "}
        <ResultText>
            {convertedValue.toFixed(2)} {refreshedSelectedCurrency}
        </ResultText>
    </ResultParagraph>
);

export default Result;