import { ResultParagraph, ResultText } from "./styled";

const Result = ({ refreshedInputValue, convertedValue, refreshedSelectedCurrency, shouldRender, exchangeRatesDate, baseCurrency }) => (
        <>
            {shouldRender &&
                <ResultParagraph>
                    {refreshedInputValue} {baseCurrency} =
                    {" "}
                    <ResultText calculatedValue>
                        {convertedValue.toFixed(2)} {refreshedSelectedCurrency}
                    </ResultText>
                </ResultParagraph>
            }
            <ResultParagraph alwaysVisible>
                Kursy walut pobierane są z Europejskiego Banku Centralnego.
                <br />
                Aktualne na dzień:
                {" "}
                <ResultText>
                    {exchangeRatesDate}
                </ResultText>
            </ResultParagraph>
        </>
    );

export default Result;