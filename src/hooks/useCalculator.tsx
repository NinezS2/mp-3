
import { useState } from "react";

function useCalculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState("");

    function calculate(operation: string) {
        const first = Number(firstNumber);
        const second = Number(secondNumber);
        let answer = 0;

        if (operation === "+") {
            answer = first + second;
        }
        else if (operation === "-") {
            answer = first - second;
        }
        else if (operation === "*") {
            answer = first * second;
        }
        else if (operation === "/") {
            answer = first / second;
        }
        else if (operation === "**") {
            answer = 1;

            for (let i = 0; i < second; i++) {
                answer = answer * first;
            }
        }

        setResult(String(answer));
    }

    function Clear() {
        setFirstNumber("");
        setSecondNumber("");
        setResult("");
    }

    return {
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        result,
        calculate,
        Clear
    };
}

export default useCalculator;
