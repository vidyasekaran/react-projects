import React from "react";

const Summary = ({ expenses }) => {
  const income = expenses
    .filter((e) => e.type === "income")
    .reduce((sum, e) => sum + e.amount, 0);

  const expense = expenses
    .filter((e) => e.type === "expense")
    .reduce((sum, e) => sum + e.amount, 0);

  const balance = income - expense;

  return (
    <div className="mb-4 p-3 border rounded bg-light">
      <h4>Summary</h4>
      <p>Income: ₹{income}</p>
      <p>Expense: ₹{expense}</p>
      <h5>Balance: ₹{balance}</h5>
    </div>
  );
};

export default Summary;
