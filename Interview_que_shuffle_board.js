import { useState } from "react";

const questions = [
  "Explain REST API.",
  "What is a closure in JavaScript?",
  "Difference between SQL and NoSQL?",
  "What is React state?",
  "Explain inheritance in OOP."
];

function InterviewBoard() {
  const [index, setIndex] = useState(0);

  const nextQuestion = () => {
    setIndex((index + 1) % questions.length);
  };

  return (
    <div>
      <h2>Interview Practice</h2>

      <div>
        <strong>Question {index + 1}</strong>
        <p>{questions[index]}</p>
      </div>

      <button onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default InterviewBoard;
