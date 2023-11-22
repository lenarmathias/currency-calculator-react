import {useCurrenciesCalculate} from "./useCurrenciesCalculate";
import Clock from "./Clock";
import Header from "./Header";
import Loading from "./Loading";
import Form from "./Form";
import Result from "./Result";
import {GlobaStyle, MainContainer} from "./styled";

function App() {
    const {
        apiObject,
        baseCurrency,
        loading,
        apiSuccess,
        inputValue,
        convertedValue,
        shouldRender,
        dynamicInputValue,
        dynamicSelectedCurrency,
        handleInputChange,
        handleCurrencyChange,
        calcConvertedValue
    } = useCurrenciesCalculate();

    return (
        <>
            <GlobaStyle/>
            <MainContainer>
                <Clock/>
                <Header title="Kalkulator Walut"/>
                {loading ? (
                    <Loading
                        apiSuccess={apiSuccess}
                    />
                ) : (
                    <>
                        <Form
                            inputValue={inputValue}
                            handleCurrencyChange={handleCurrencyChange}
                            handleInputChange={handleInputChange}
                            calcConvertedValue={calcConvertedValue}
                            apiObject={apiObject}
                            baseCurrency={baseCurrency}
                        />
                        <Result
                            refreshedInputValue={dynamicInputValue}
                            convertedValue={convertedValue}
                            refreshedSelectedCurrency={dynamicSelectedCurrency}
                            shouldRender={shouldRender}
                            apiObject={apiObject}
                            baseCurrency={baseCurrency}
                        />
                    </>
                )}
            </MainContainer>
        </>
    );
}

export default App;