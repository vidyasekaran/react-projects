import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h5>Transactions</h5>
      <ul className="list-group">
        {expenses.map((exp) => (
          <li
            key={exp.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              exp.type === "income"
                ? "list-group-item-success"
                : "list-group-item-danger"
            }`}
          >
            {exp.desc}
            <span>
              {exp.type === "income" ? "+" : "-"}₹{exp.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
