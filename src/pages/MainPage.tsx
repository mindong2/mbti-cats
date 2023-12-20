import styled from "styled-components";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import MainImg from "../asset/mainImg.jpg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  padding: 3rem;
  .nextBtn {
    padding: 1rem;
    font-size: 2.4rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
`;
const LogoImg = styled.img`
  width: 100%;
`;
const Description = styled.p`
  font-size: 1.8rem;

  line-height: 1.5;
`;

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header type="title" />
      <Wrapper>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImg src={MainImg} alt="귀여운 고양이" />
        <Description>
          mbti를 확인 후 나랑 잘 맞는 고양이를 찾아보세요~ <br /> 내가 집사가 되어 고양이를 키운다면..?
        </Description>
        <Button className="nextBtn" onClick={() => navigate("/question")}>
          테스트 시작하기
        </Button>
      </Wrapper>
    </>
  );
};

export default MainPage;
