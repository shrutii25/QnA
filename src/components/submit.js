import React from "react";
import { Container } from "react-bootstrap";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

import questions from "../config/questions";
import ScoreCalculate from "../util/scoreCalculate";
import { useQuestion } from "../context/QuestionContext";

const Submit = () => {
  const { answers } = useQuestion();
  const correct = ScoreCalculate(answers);
  const total = questions.length;
  const score = parseFloat((correct / total) * 100).toFixed(2);

  return (
    <Container className="header card">
      <IoCheckmarkDoneCircle
        style={{ margin: "1rem auto" }}
        size="7rem"
        color="#17b978"
      />

      <h1 className="text-center mb-5">
        You have successfully submitted the assessment
      </h1>
      <p className="text-center mb-2">Questions Asked: {questions.length}</p>
      <p className="text-center mb-2">Questions Correct: {correct}</p>
      <p className="text-center mb-2">Your Score: {score}</p>
    </Container>
  );
};

export default Submit;
