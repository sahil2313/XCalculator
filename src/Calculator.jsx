import React, { useState } from "react";
import "./Calculator.css";

export const Caculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    const operators = ["+", "-", "*", "/"];
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      if (operators.includes(value) && operators.includes(input.slice(-1))) {
        return;
      }
      setInput(input + value);
    }
  };
  return (
    <div className="calculator">
      <h1>React Caculator</h1>
      <input type="text" value={input} readOnly />
      <div>{result}</div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          "C",
          "=",
          "+",
        ].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};