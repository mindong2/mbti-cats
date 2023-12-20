import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { QuestionData } from "../stores/question/questionData";

const HeaderWrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 0.1rem solid #f1f1f1;
  background-color: #fff;
  box-shadow: 0 0 2rem 0 #e2e6ee;
`;
const HeaderTitle = styled.h1`
  font-size: 3rem;
`;

interface IProp {
  type: string;
  questionNum?: number;
}

const Header = ({ type, questionNum }: IProp) => {
  return (
    <>
      {type === "progress" && questionNum !== undefined ? (
        <ProgressBar
          animated
          variant="danger"
          now={Math.round((questionNum / QuestionData.length) * 100)}
          label={`${Math.round((questionNum / QuestionData.length) * 100)}%`}
          style={{ height: "3rem", fontSize: "1.4rem" }}
        />
      ) : (
        <HeaderWrap>
          <HeaderTitle>나는 누구의 집사가 될까?</HeaderTitle>
        </HeaderWrap>
      )}
    </>
  );
};

export default Header;
