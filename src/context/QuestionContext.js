import React, { useState, createContext, useContext } from "react";
const Question = createContext();

function QuestionContext(props) {
  const [answers, setAnswers] = useState([]);
  const handleAnswer = (ans) => {
    setAnswers(ans);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <Question.Provider
      value={{ answers, handleAnswer, isSubmitted, handleSubmit }}
    >
      {props.children}
    </Question.Provider>
  );
}

export default QuestionContext;

export const useQuestion = () => {
  return useContext(Question);
};
