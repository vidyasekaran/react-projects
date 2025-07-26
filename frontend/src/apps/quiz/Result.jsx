// src/components/Result.jsx
import React from "react";

const Result = ({ score, total }) => {
  const percentage = ((score / total) * 100).toFixed(1);

  return (
    <div className="text-center">
      <h3>🎉 Quiz Completed!</h3>
      <p>
        Your Score: <strong>{score}</strong> out of <strong>{total}</strong>
      </p>
      <p>
        Percentage: <strong>{percentage}%</strong>
      </p>
    </div>
  );
};

export default Result;
