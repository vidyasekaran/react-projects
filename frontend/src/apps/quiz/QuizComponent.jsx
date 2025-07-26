// src/App.jsx
import React, { useState } from "react";
import questions from "./data";
import Quiz from "./Quiz";

const QuizComponent = () => {
  return (
    <div className="container mt-4">
      <h2>🧠 Quiz App</h2>
      <Quiz questions={questions} />
    </div>
  );
};

export default QuizComponent;
