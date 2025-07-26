import React, { useState } from "react";

const ExpenseForm = ({ onAdd }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;

    onAdd({
      id: Date.now(),
      desc,
      amount: parseFloat(amount),
      type,
    });

    // Clear form
    setDesc("");
    setAmount("");
    setType("expense");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row g-2">
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-select"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
