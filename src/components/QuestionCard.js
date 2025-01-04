import React from "react";

const QuestionCard = ({ question, options, onAnswer, selectedAnswer }) => {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="option"
              value={option}
              id={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswer(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
