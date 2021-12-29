import questions from "../config/questions";

function ScoreCalculate(answers) {
  let correctAnswer = 0;
  console.log(answers);

  answers.map((answer) => {
    let questionNo = answer.questionNo;
    if (answer.option === questions[questionNo].correctOption) correctAnswer++;
    return answer;
  });

  return correctAnswer;
}

export default ScoreCalculate;
