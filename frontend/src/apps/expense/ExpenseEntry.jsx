import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Summary from "./Summary";
import ExpenseForm from "./ExpenseForm";

function ExpenseEntry() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Expense Tracker</h2>
      <Summary expenses={expenses} />
      <ExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default ExpenseEntry;
