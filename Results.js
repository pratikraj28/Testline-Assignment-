import React from "react";

function Results({ score, onRestart }) {
  return (
    <div className="results-container">
      <h2>Quiz Completed! 🎉</h2>
      <p>Your Score: <strong>{score}</strong></p>
      <button className="restart-btn" onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default Results;
