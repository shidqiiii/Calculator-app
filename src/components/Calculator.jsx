import React, { useState } from "react";
import Button from "../partials/Button";
import Headertop from "../partials/Headertop";

function Calculator() {
  const [input, setInput] = useState(0);
  const [operator, setOperator] = useState("");
  const [lastNumber, setLastNumber] = useState(0);

  const inputNumber = (e) => {
    if (input === 0) {
      setInput(e.target.value);
    } else {
      setInput(input + e.target.value);
    }
  };

  const reset = () => {
    setInput(0);
    setOperator("");
    setLastNumber(0);
  };

  const deleteNumber = () => {
    setInput(input.toString().slice(0, -1));
  };

  const inputOperator = (e) => {
    if (operator === "") {
      setOperator(e.target.value);
      setLastNumber(input);
      setInput(0);
    }
  };

  const total = () => {
    let cal = 0;
    switch (operator) {
      case "+":
        cal = parseFloat(lastNumber) + parseFloat(input);
        break;

      case "-":
        cal = parseFloat(lastNumber) - parseFloat(input);
        break;

      case "*":
        cal = parseFloat(lastNumber) * parseFloat(input);
        break;

      case "/":
        cal = parseFloat(lastNumber) / parseFloat(input);
        break;

      default:
        break;
    }
    setInput(cal);
    setLastNumber(0);
    setOperator("");
  };

  const [theme, setTheme] = useState(1);

  const selectTheme = () => {
    switch (theme) {
      case 1:
        document.body.style = "background: hsl(0, 0%, 90%);";
        setTheme(theme + 1);
        break;

      case 2:
        document.body.style = "background: hsl(268, 75%, 9%);";
        setTheme(theme + 1);
        break;

      case 3:
        document.body.style = "background: hsl(222, 26%, 31%);";
        setTheme(1);
        break;

      default:
        break;
    }
  };

  return (
    <div className={"calculator theme-" + theme}>
      <Headertop selectTheme={selectTheme} />
      <input type="text" className="input-number" placeholder="0" disabled value={input} />
      <Button inputNumber={inputNumber} reset={reset} deleteNumber={deleteNumber} inputOperator={inputOperator} total={total} />
      {console.log(lastNumber, operator, input)}
    </div>
  );
}

export default Calculator;
