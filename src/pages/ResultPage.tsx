import styled from "styled-components";
import { ResultData } from "../stores/result/resultData";
import Header from "../components/Header";
import { Wrapper } from "./MainPage";

const ImgWrap = styled.div`
  text-align: center;
`;

const ResultImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const ResultPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <ImgWrap>
          <ResultImg src={ResultData[0].img} alt={`${ResultData[0].name}`} />
        </ImgWrap>
        <div>{ResultData[0].name}</div>
        <div>{ResultData[0].desc}</div>
      </Wrapper>
    </>
  );
};

export default ResultPage;
