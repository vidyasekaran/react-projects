const QuestionCard = ({ question, options, onSelect, selected }) => (
  <div>
    <h3>{question}</h3>
    {options.map((opt, idx) => (
      <button
        key={idx}
        onClick={() => onSelect(opt)}
        className={
          selected === opt ? "btn btn-primary" : "btn btn-outline-secondary"
        }
      >
        {opt}
      </button>
    ))}
  </div>
);

export default QuestionCard;
