import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTwoNumbers = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(null);

  const isValidNumber = (value) => !isNaN(value) && value.trim() != "";

  const handleAddition = () => {
    const total = Number(num1) + Number(num2);
    setSum(total);
  };

  const handleMultiply = () => {
    const total = Number(num1) * Number(num2);
    setSum(total);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="mb-3 text-center">Add Two Numbers</h4>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="d-flex gap-4">
        <button className="btn btn-primary w-100" onClick={handleAddition}>
          Add
        </button>
        <button className="btn btn-success w-100" onClick={handleMultiply}>
          Multiply
        </button>
      </div>

      {sum !== null && (
        <div className="alert alert-success mt-3 text-center">
          Sum: <strong>{sum}</strong>
        </div>
      )}
    </div>
  );
};

export default AddTwoNumbers;

/*
Sure! Here's a concise explanation of `AddTwoNumbers.jsx` in **10 steps or less**:

---

### 🧩 `AddTwoNumbers.jsx` Breakdown:

1. **Imports React + `useState`** for managing input values and result.

2. **Defines 3 state variables**:

   * `num1` and `num2`: store the two input numbers
   * `sum`: stores the result of the addition

3. **`handleAddition()` function**:

   * Converts `num1` and `num2` to numbers using `Number()`
   * Adds them and updates `sum`

4. **Two Bootstrap-styled `<input type="number">` fields**:

   * For user to enter the first and second numbers
   * Each input is controlled via `value` and `onChange`

5. **A Bootstrap-styled `<button>`**:

   * On click, triggers the addition

6. **Displays result (`sum`)**:

   * If `sum !== null`, shows a green success alert with the result

7. **Uses Bootstrap classes** like `form-control`, `btn`, `alert`, `container`, etc. for styling

8. **Responsive Layout**:

   * `maxWidth: 400px` centers and limits the form width

9. **Validation is basic**:

   * No input error checking (optional to add)

10. **Exported as a functional component** so it can be used in `App.jsx`

---

Let me know if you want a version with error handling or subtraction/multiplication too.
*/
