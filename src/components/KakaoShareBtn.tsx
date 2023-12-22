import { useEffect } from "react";
import { Button } from "react-bootstrap";

const Kakao = (window as any).Kakao;

const KakaoShareBtn = ({ name, img }: { name: string; img: string }) => {
  const javascriptKey = process.env.REACT_APP_JAVASCRIPT_KEY;
  const url = "https://cats-mbti-owo.netlify.app/";
  const resultUrl = window.location.href;

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init(javascriptKey);
    }
  }, [javascriptKey]);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비집사님과 가장 잘 어울릴 주인님은 ${name}입니다!`,
        imageUrl: img,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },

      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: "나도 테스트 해보기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <Button className="nextBtn" onClick={shareKakao} style={{ backgroundColor: "#ffe500", color: "#333", border: "none" }}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShareBtn;
