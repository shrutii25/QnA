import React, { useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import questions from "../config/questions";
import { useQuestion } from "../context/QuestionContext";
import "../styles/allQuestions.css";
import SetTimer from "./setTimer";

const AttemptQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState([]);
  const { handleAnswer, handleSubmit } = useQuestion();
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleUserSelection = (option, questionNo) => {
    setAnswer((ans) => {
      let isFound = false;
      const newAns = ans.map((currentAns) => {
        //already attempted
        if (currentAns.questionNo === questionNo) {
          isFound = true;
          return { questionNo, option };
        }
        return currentAns;
      });
      if (!isFound) return [...ans, { option, questionNo }];
      return newAns;
    });
  };

  const handleQuestionVisit = (questionNo) => {
    setCurrentQuestion(questionNo);
  };

  return (
    <Container className="header">
      <Row>
        <Col
          sm={4}
          className="card review pb-0"
          style={{ height: "max-content" }}
        >
          <h4 className="mb-3">Review answers here</h4>
          {answer.length === 0 ? (
            <p className="mb-3">No question attempted</p>
          ) : (
            answer.map(({ option, questionNo }) => {
              return (
                <Alert
                  key={questionNo}
                  variant="info"
                  className="p-2 pointer"
                  onClick={() => handleQuestionVisit(questionNo)}
                >
                  <h6 className="m-0">Question {questionNo + 1}</h6>
                  <p>{option}</p>
                </Alert>
              );
            })
          )}
        </Col>
        <Col>
          <div className="flex-heading">
            <h2>Attempt Questions Here</h2>
            <SetTimer />
          </div>
          <br />
          <div className="mb-3">
            <Button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              style={{ display: "inline-flex" }}
            >
              <AiOutlineArrowLeft />
            </Button>
            <Button
              disabled={currentQuestion === questions.length - 1}
              onClick={handleNext}
              style={{
                float: "right",
                display: "inline-flex",
              }}
            >
              <AiOutlineArrowRight />
            </Button>
          </div>
          <div className="card question-card">
            <h3>Question {currentQuestion + 1}</h3>
            <p className="question">{questions[currentQuestion].question}</p>
          </div>
          <Row className="mt-3">
            <div className="grid">
              {questions[currentQuestion].options.map((option, idx) => {
                let currentOption = "",
                  classes = "card mt-1 pointer";
                answer.map((ans) => {
                  if (currentQuestion === ans.questionNo) {
                    currentOption = ans.option;
                  }
                  return ans;
                });
                if (currentOption === option) {
                  classes += " selected-option";
                }
                return (
                  <div
                    key={option}
                    className={classes}
                    onClick={() => handleUserSelection(option, currentQuestion)}
                  >
                    <p>{option}</p>
                  </div>
                );
              })}
            </div>
          </Row>
          <Row>
            <Col>
              <Button
                className="mt-4"
                style={{ float: "right" }}
                onClick={() => {
                  handleAnswer(answer);
                  handleSubmit();
                }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AttemptQuestions;
