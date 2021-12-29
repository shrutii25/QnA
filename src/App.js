import React from "react";

import AttemptQuestions from "./components/attemptQuestions";
import Submit from "./components/submit";
import { useQuestion } from "./context/QuestionContext";

function App() {
  const { isSubmitted } = useQuestion();
  return <div>{!isSubmitted ? <AttemptQuestions /> : <Submit />}</div>;
}

export default App;
