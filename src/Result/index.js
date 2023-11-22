import {ResultParagraph, ResultText} from "./styled";

const Result = ({
                    refreshedInputValue,
                    convertedValue,
                    refreshedSelectedCurrency,
                    shouldRender,
                    apiObject,
                    baseCurrency
                }) => {
    const formattedDate = apiObject.meta.last_updated_at.slice(0, 10);

    return (
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
                <br/>
                Aktualne na dzień:
                {" "}
                <ResultText>
                    {formattedDate}
                </ResultText>
            </ResultParagraph>
        </>
    )
};

export default Result;