import React, { useState } from 'react';
import '../Styles/calculator.css'

const Calculator = () => {

  const [inputValue, setInputValue] = useState("")


   
  const clearInputField = () => setInputValue("")
  
  const display = (value) => {
    
    const lastChar = inputValue.slice(-1);
    const isOperator = ["+", "-", "*", "/"].includes(value);

    if (isOperator && ["+", "-", "*", "/"].includes(lastChar)) return;

    if (isOperator && inputValue === "") return;

    setInputValue(inputValue + value);
  }

  const calculate = () => {
    try {
      setInputValue(Function(`"use strict"; return(${inputValue})`)())
    } catch (error) {
      setInputValue("Error")
    }
  };

  return (
    <form action="">
      <input type="text" className="value" value={inputValue} />
      <div className='buttons'>
        <span className="num-clear" onClick={() => clearInputField()}>
          C
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>
          +
        </span>

        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className="num-equal" onClick={() => calculate()}>
          =
        </span>
      </div>
    </form>
  );
}

export default Calculator;
