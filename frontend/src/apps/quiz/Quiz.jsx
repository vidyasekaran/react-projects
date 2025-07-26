import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import Result from "./Result";
const Quiz = ({ questions }) => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  const handleNext = () => {
    if (selected === current.answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  return finished ? (
    <Result score={score} total={questions.length} />
  ) : (
    <div>
      <QuestionCard
        question={current.question}
        options={current.options}
        selected={selected}
        onSelect={setSelected}
      />
      <button onClick={handleNext} disabled={!selected}>
        Next
      </button>
    </div>
  );
};

export default Quiz;
