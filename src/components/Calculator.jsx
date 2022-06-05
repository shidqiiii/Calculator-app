import React, { useState, useEffect } from "react";
import Button from "../partials/Button";
import Headertop from "../partials/Headertop";

function Calculator() {
  const [input, setInput] = useState(0);
  const [operator, setOperator] = useState("");
  const [lastNumber, setLastNumber] = useState(0);
  // const [currentNumber, setcurrentNumber] = useState(0);

  const inputNumber = (e) => {
    if (input === 0 || parseInt(input) === 0) {
      setInput(e.target.value);
    } else {
      setInput(input + e.target.value);
    }
  };

  const reset = () => {
    setInput("");
    setOperator("");
    setLastNumber("");
  };

  const deleteNumber = () => {
    setInput(input.toString().slice(0, -1));
  };

  const inputOperator = (e) => {
    setOperator(e.target.value);
    setLastNumber(input);
    setInput("");
  };

  const total = () => {
    switch (operator) {
      case "+":
        setInput(parseFloat(lastNumber) + parseInt(input));
        break;

      case "-":
        setInput(parseFloat(lastNumber) - parseInt(input));
        break;

      case "*":
        setInput(parseFloat(lastNumber) * parseInt(input));
        break;

      case "/":
        setInput(parseFloat(lastNumber) / parseInt(input));
        break;

      default:
        break;
    }
    setLastNumber(0);
  };

  return (
    <div className="calculator theme-1">
      <Headertop />
      <input type="number" className="input-number" placeholder="0" disabled value={input} />
      <Button inputNumber={inputNumber} reset={reset} deleteNumber={deleteNumber} inputOperator={inputOperator} total={total} />
      {console.log(lastNumber, operator, input)}
    </div>
  );
}

export default Calculator;
