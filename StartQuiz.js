import React from "react";

function StartQuiz({ onStart }) {
  console.log("StartQuiz component rendered");
  return (
    <div className="start-container">
      <h1>Welcome to the Quiz Game! 🧠</h1>
      <button onClick={onStart} className="start-btn">Start Quiz</button>
    </div>
  );
}

export default StartQuiz;
