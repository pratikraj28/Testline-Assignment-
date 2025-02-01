import React, { useState, useEffect } from "react";
import "./Quiz.css";

function Quiz({ onFinish }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/quiz")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("API data:", data.questions);
        setQuestions(data.questions || []); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz:", error);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prevScore) => prevScore + 10);

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setQuizCompleted(true);
      onFinish(score + (isCorrect ? 10 : 0))
    }
  };

  if (loading) return <h2>Loading Quiz...</h2>;
  if (quizCompleted) return <h2>Quiz Completed! Your Score: {score}</h2>;

  return (
    <div className="quiz-container">
      <h2>{questions[currentIndex]?.description}</h2>
      <div className="options">
        {questions[currentIndex]?.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => handleAnswer(option.is_correct)}
          >
            {option.description}
          </button>
        ))}
      </div>
      <p>Score: {score}</p>
    </div>
  );
}

export default Quiz;
