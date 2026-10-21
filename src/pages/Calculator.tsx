import useCalculator from "../hooks/useCalculator";

function Calculator(){

    const {
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        result,
        calculate,
        Clear
    } = useCalculator();

    return(
        <div className={"calculator"}>
            <h3>Calculator</h3>

            <label htmlFor="first-number">First Number:</label>
            <input
                type="text"
                id="first-number"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
            />

            <label htmlFor="second-number">Second Number:</label>
            <input
                type="number"
                id="second-number"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
            />

            <button onClick={()=>calculate("+")}>+</button>
            <button onClick={()=>calculate("-")}>-</button>
            <button onClick={()=>calculate("*")}>*</button>
            <button onClick={()=>calculate("/")}>/</button>
            <button onClick={()=>calculate("**")}>**</button>
            <button onClick={Clear}>Clear</button>

            <h3 id="output">{result}</h3>
        </div>
    );
}

export default Calculator;