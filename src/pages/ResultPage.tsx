import styled from "styled-components";
import { ResultData } from "../stores/result/resultData";
import Header from "../components/Header";
import { Wrapper } from "./MainPage";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

const ImgWrap = styled.div`
  text-align: center;
`;

const ResultImg = styled.img`
  width: 100%;
  margin: 0 auto;
`;

const ResultPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");

  const catInfo = ResultData.filter((v) => v.best === mbti)[0];
  const catsFriend = ResultData.filter((v) => v.best === catInfo.mbti)[0];
  return (
    <>
      <Header type="title" />
      <Wrapper>
        <ImgWrap>
          <ResultImg src={catInfo.img} alt={`${catInfo.name}`} />
        </ImgWrap>
        <div>{mbti}성향의 집사님과 잘 어울릴 주인님은</div>
        <div>{catInfo.name}입니다!</div>
        <div>{catInfo.desc}</div>
        <>집사의 mbti: {mbti}</>
        <>고양이 mbti: {catInfo.mbti}</>

        <>주인님과 친구가되기 쉬운 고양이는 {catsFriend.name}에요!!</>
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
