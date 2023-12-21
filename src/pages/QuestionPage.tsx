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
  const [totalScore, setTotalScore] = useState([
    {
      type: "EI",
      score: 0,
    },
    {
      type: "SN",
      score: 0,
    },
    {
      type: "TF",
      score: 0,
    },
    {
      type: "JP",
      score: 0,
    },
  ]);

  const selectQuestion = (type: string, ans: number) => {
    // 선택할 때 마다 totalScore 갱신
    const addScore = totalScore.map((item) => {
      if (type === item.type) {
        item.score += ans;
      }
      return item;
    });
    setTotalScore(addScore);

    // 마지막 질문이 아닐경우
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
          <Button className="questionBtn" onClick={() => selectQuestion(`${QuestionData[questionNum].type}`, 1)}>
            {QuestionData[questionNum].answerA}
          </Button>
          <Button className="questionBtn" onClick={() => selectQuestion(`${QuestionData[questionNum].type}`, 0)}>
            {QuestionData[questionNum].answerB}
          </Button>
        </QuestionWrap>
      </Wrapper>
    </>
  );
};

export default QuestionPage;
