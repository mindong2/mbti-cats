import styled from "styled-components";
import { ResultData } from "../stores/result/resultData";
import Header from "../components/Header";
import { Wrapper } from "./MainPage";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import KakaoShareBtn from "../components/KakaoShareBtn";

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
        <div>집사님과 잘 어울릴 주인님은..!</div>
        <div>{catInfo.name}입니다!</div>
        <div>{catInfo.desc}</div>

        <div style={{ color: "#fe3939" }}>우리 고양이와 친구가되기 쉬운 고양이는 {catsFriend.name}입니다!</div>
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
        <KakaoShareBtn name={catInfo.name} img={catInfo.img} />
      </Wrapper>
    </>
  );
};

export default ResultPage;
