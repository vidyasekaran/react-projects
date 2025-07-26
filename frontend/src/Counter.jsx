import React, { useState, useEffect } from "react";

function CounterApp() {
  // Step 1: Create a box to store the count
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Step 2: useEffect helps us do something after the screen shows

  useEffect(() => {
    // This runs when the app starts

    if (isRunning) {
      // Start a timer that adds 1 every second (1000ms)
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    // Step 3: Cleanup! If we leave the page, stop the timer
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]); // The empty [] means: run this only one time when app starts

  const toggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>⏱️ Counter App</h2>
      <p style={{ fontSize: "30px" }}>Count: {count}</p>

      <button
        onClick={toggleRunning}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          fontSize: "16px",
          backgroundColor: isRunning ? "#dc3545" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {isRunning ? "⛔ Stop" : "▶️ Start"}
      </button>

      <button onClick={handleReset}> ReSet</button>
    </div>
  );
}

export default CounterApp;
