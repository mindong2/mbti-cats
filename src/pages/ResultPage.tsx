import styled from "styled-components";
import { ResultData } from "../stores/result/resultData";
import Header from "../components/Header";
import { Wrapper } from "./MainPage";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ImgWrap = styled.div`
  text-align: center;
`;

const ResultImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const ResultPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header type="title" />
      <Wrapper>
        <ImgWrap>
          <ResultImg src={ResultData[10].img} alt={`${ResultData[10].name}`} />
        </ImgWrap>
        <div>{ResultData[10].name}</div>
        <div>{ResultData[10].desc}</div>
        <Button
          className="nextBtn"
          onClick={() => {
            if (window.confirm("다시 검사해보시겠어요?")) {
              navigate("/");
            }
          }}
        >
          다시하기
        </Button>
      </Wrapper>
    </>
  );
};

export default ResultPage;
