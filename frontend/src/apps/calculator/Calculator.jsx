import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
    console.log("handleClick input" + input + "Value" + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      // setInput(eval(input).toString());
      //console.log("handleEqual eval(input)" + input);
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "300px" }}>
      <div className="form-control text-end mb-3 fs-4">{input || "0"}</div>

      <div className="row mb-2">
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("7")}
          >
            7
          </button>
        </div>

        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("8")}
          >
            8
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("9")}
          >
            9
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-warning w-100"
            onClick={() => handleClick("/")}
          >
            ÷
          </button>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("4")}
          >
            4
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("5")}
          >
            5
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("6")}
          >
            6
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-warning w-100"
            onClick={() => handleClick("*")}
          >
            ×
          </button>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("1")}
          >
            1
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("2")}
          >
            2
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("3")}
          >
            3
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-warning w-100"
            onClick={() => handleClick("-")}
          >
            −
          </button>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick("0")}
          >
            0
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-secondary w-100"
            onClick={() => handleClick(".")}
          >
            .
          </button>
        </div>
        <div className="col">
          <button className="btn btn-success w-100" onClick={handleEqual}>
            =
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-warning w-100"
            onClick={() => handleClick("+")}
          >
            +
          </button>
        </div>
      </div>

      <button className="btn btn-danger w-100" onClick={handleClear}>
        C
      </button>
    </div>
  );
}

export default Calculator;

/*
| Part             | What it Does                       |
| ---------------- | ---------------------------------- |
| `useState`       | Stores input and updates UI        |
| `handleClick`    | Appends characters to input        |
| `handleEqual`    | Evaluates the input expression     |
| `handleClear`    | Resets the input                   |
| `eval(input)`    | Converts string into a math result |
| Bootstrap Layout | Aligns buttons and display nicely  |

Bootstrap 
<div className="container mt-5" style={{ maxWidth: '300px' }}>
Sets the max width of the calculator to 300px and centers it with top margin.

<div className="form-control text-end mb-3 fs-4">{input || '0'}</div>

Shows the current input (or '0' if it's empty).
Right-aligned using text-end, styled using Bootstrap.

<div className="row mb-2">
  <div className="col">
    <button className="btn btn-secondary w-100" onClick={() => handleClick('7')}>7</button>
  </div>
  ...
</div>

Each button:

Uses onClick to call the function (handleClick, handleEqual, etc.)
Is styled with Bootstrap: btn, btn-secondary, w-100 (full width)
Each div className="col" is part of Bootstrap’s grid system to divide the row into columns.
<div className="border p-3 rounded bg-light">
</div>
*/
