import styled from "styled-components";
import Header from "../components/Header";
import { QuestionData } from "../stores/question/questionData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  padding: 5rem 3rem;
`;

const QuestionTitle = styled.h2`
  font-size: 3.2rem;
`;

const QuestionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;

  .questionBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    padding: 2rem;
    font-size: 2rem;
    word-break: keep-all;
  }
`;

const QuestionPage = () => {
  const navigate = useNavigate();
  const [questionNum, setQuestionNum] = useState(0);
  const selectQuestion = () => {
    if (questionNum === QuestionData.length - 1) {
      navigate("/result");
    }
    setQuestionNum((prev) => prev + 1);
  };
  return (
    <>
      <Header type="progress" questionNum={questionNum} />
      <Wrapper>
        <QuestionTitle>{QuestionData[questionNum].title}</QuestionTitle>
        <QuestionWrap>
          <Button className="questionBtn" onClick={selectQuestion}>
            {QuestionData[questionNum].answerA}
          </Button>
          <Button className="questionBtn" onClick={selectQuestion}>
            {QuestionData[questionNum].answerB}
          </Button>
        </QuestionWrap>
      </Wrapper>
    </>
  );
};

export default QuestionPage;
