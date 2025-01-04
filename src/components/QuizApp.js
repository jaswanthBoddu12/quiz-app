import React, { useState } from "react";
import QuestionCard from "./QuestionCard";

const QuizApp = () => {
    const questions = [
        {
          question: "What is ReactJS?",
          options: [
            "A programming language",
            "A JavaScript framework",
            "A JavaScript library for building user interfaces",
            "A CSS framework"
          ],
          answer: "A JavaScript library for building user interfaces"
        },
        {
          question: "Which of the following is a core feature of React?",
          options: [
            "Virtual DOM",
            "Two-way data binding",
            "Templating engine",
            "Direct manipulation of the DOM"
          ],
          answer: "Virtual DOM"
        },
        {
          question: "Which method is used to update the state of a component in React?",
          options: [
            "setState()",
            "updateState()",
            "changeState()",
            "modifyState()"
          ],
          answer: "setState()"
        },
        {
          question: "What is JSX in React?",
          options: [
            "A JavaScript function",
            "A syntax extension for JavaScript that allows HTML-like code inside JavaScript",
            "A JavaScript class",
            "A CSS preprocessor"
          ],
          answer: "A syntax extension for JavaScript that allows HTML-like code inside JavaScript"
        },
        {
          question: "How do you pass data from a parent component to a child component in React?",
          options: [
            "Using props",
            "Using state",
            "Using the context API",
            "Using functions"
          ],
          answer: "Using props"
        },
        {
          question: "Which of the following is used for handling side effects in React components?",
          options: [
            "useEffect",
            "useContext",
            "useRef",
            "useCallback"
          ],
          answer: "useEffect"
        },
        {
          question: "What is the function of `render()` method in React?",
          options: [
            "It modifies the state of the component",
            "It returns the component’s JSX structure",
            "It adds event listeners to the component",
            "It updates the component's DOM elements directly"
          ],
          answer: "It returns the component’s JSX structure"
        },
        {
          question: "Which lifecycle method is invoked when a React component is initially rendered?",
          options: [
            "componentDidMount()",
            "componentWillMount()",
            "componentDidUpdate()",
            "constructor()"
          ],
          answer: "constructor()"
        },
        {
          question: "What is the default state value of a component in React?",
          options: [
            "null",
            "undefined",
            "An empty object",
            "An empty array"
          ],
          answer: "An empty object"
        },
        {
          question: "Which of the following hooks is used to memorize functions in React to avoid unnecessary re-renders?",
          options: [
            "useMemo",
            "useCallback",
            "useState",
            "useReducer"
          ],
          answer: "useCallback"
        }
      ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="quiz-app">
      {isQuizFinished ? (
        <div className="score">
          <h2>Your Score: {calculateScore()} / {questions.length}</h2>
        </div>
      ) : (
        <div className="question-container">
          <QuestionCard
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            onAnswer={handleAnswer}
            selectedAnswer={userAnswers[currentQuestionIndex]}
          />
          <div className="buttons">
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext}>
              {currentQuestionIndex === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
