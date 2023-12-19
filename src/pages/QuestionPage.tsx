import { QuestionData } from "../stores/question/questionData";

const QuestionPage = () => {
  console.log(QuestionData);
  return (
    <>
      <p>{QuestionData[0].title}</p>
      <p>{QuestionData[0].answerA}</p>
      <p>{QuestionData[0].answerB}</p>
    </>
  );
};

export default QuestionPage;
