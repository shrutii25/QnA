import React from "react";
import Countdown from "react-countdown";

import { useQuestion } from "../context/QuestionContext";

const SetTimer = () => {
  const { handleSubmit } = useQuestion();

  const TimeOver = () => <span>Time up!</span>;

  const Time = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      handleSubmit();
      return <TimeOver />;
    } else {
      return (
        <span className="timer">
          {hours < 10 && 0}
          {hours} : {minutes < 10 && 0}
          {minutes} : {seconds < 10 && 0}
          {seconds}
        </span>
      );
    }
  };

  return <Countdown date={Date.now() + 1 * 60 * 1000} renderer={Time} />;
};

const MemoSetTimer = React.memo(SetTimer);

export default MemoSetTimer;
