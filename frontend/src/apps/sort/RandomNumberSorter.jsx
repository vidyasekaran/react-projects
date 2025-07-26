import React, { useState } from "react";

const RandomNumberSorter = () => {
  // Generate 20 random numbers between 1 and 100
  const generateRandomNumbers = () =>
    Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);

  const [numbers, setNumbers] = useState(generateRandomNumbers());

  const handleSortAsc = () => {
    const sorted = [...numbers].sort((a, b) => a - b); // Ascending sort
    setNumbers(sorted);
  };

  const handleSortDes = () => {
    const sorted = [...numbers].sort((a, b) => b - a); // Descending sort
    setNumbers(sorted);
  };

  return (
    <div className="container mt-4">
      <h2>🎲 Random Numbers</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {numbers.map((num, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              minWidth: "40px",
              textAlign: "center",
            }}
          >
            {num}
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-3" onClick={handleSortAsc}>
        Sort Ascending
      </button>
      <button className="btn btn-primary mt-3" onClick={handleSortDes}>
        Sort Descending
      </button>
    </div>
  );
};

export default RandomNumberSorter;
