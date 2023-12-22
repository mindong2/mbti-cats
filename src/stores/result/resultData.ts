import { IResult } from "./resultType";

import Abyssinian from "../../asset/cat/abyssinian.jpg";
import Ameshort from "../../asset/cat/ameshort.jpg";
import Bengal from "../../asset/cat/bengal.jpg";
import British from "../../asset/cat/british.jpg";
import Exotic from "../../asset/cat/exotic.jpg";
import Korshort from "../../asset/cat/korshort.jpg";
import Mainecoon from "../../asset/cat/mainecoon.jpg";
import Munchkin from "../../asset/cat/munchkin.jpg";
import Norwegianforest from "../../asset/cat/norwegianforest.jpg";
import Persian from "../../asset/cat/persian.jpg";
import Ragdoll from "../../asset/cat/ragdoll.jpg";
import Russianblue from "../../asset/cat/russianblue.jpg";
import Scottishfold from "../../asset/cat/scottishfold.jpg";
import Siamese from "../../asset/cat/siamese.jpg";
import Sphinx from "../../asset/cat/sphinx.jpg";
import Turkishangora from "../../asset/cat/turkishangora.jpg";

export const ResultData: IResult[] = [
  {
    id: 1,
    name: "러시안 블루",
    best: "ESTJ", //집사의 MBTI
    mbti: "ISFJ",
    desc: "겁이 많아요. 워낙 온순한 성격에 조용한 고양이라 소심하게 느껴집니다! 낯을 심하게 가리는 편이구요. 혼자 놔두면 호기심이 많아서 이것저것 치고 건드리고 즐겁게 보내는 고양이입니다. 초보 애묘가가 키우기 좋은 묘종입니다.",
    img: `${Russianblue}`,
  },
  {
    id: 2,
    name: "샴",
    best: "ESFP",
    mbti: "INFP",
    desc: "대체적으로 온순하고 느긋한 성격이에요. 외로움을 잘타며 질투심이 강해요. 수다스러운 성격입니다. 독립심이 강한 편에 속하지만 특이하게도 사람 손 타는 걸 좋아하는 고양이 입니다.",
    img: `${Siamese}`,
  },
  {
    id: 3,
    name: "페르시안",
    best: "ENTJ",
    mbti: "ISTP",
    desc: "조용하고 성격도 순한편이서 개냥이가 되는 경우가 많습니다. 장모종이어서 털이 굉장히 부드러워요. 아이와 함께 키워도 좋을 만큼 굉장히 순하고 독립심이 강한 고양이 입니다.",
    img: `${Persian}`,
  },
  {
    id: 4,
    name: "뱅갈",
    best: "INTP",
    mbti: "ESTP",
    desc: "활동력이 어마어마한 고양이에요! 그렇기 때문에 살이 잘 안찌는 고양이 중에 하나입니다! 집사분이 놀아주다가 탈진할 수도!",
    img: `${Bengal}`,
  },
  {
    id: 5,
    name: "터키쉬 앙고라",
    best: "INTJ",
    mbti: "ENFJ",
    desc: "우아한 장모종 고양이! 그러다보니 까칠하고 성질이 조금 급해요! 잔머리가 많고 복수심도 많은 고양이! 하지만 고양이마다 성격은 다 다르니 참고하세요!",
    img: `${Turkishangora}`,
  },
  {
    id: 6,
    name: "아비시니안",
    best: "ISTJ",
    mbti: "ESFJ",
    desc: "민첩하고 호기심 많고 똑똑한 고양이입니다! 굉장히 수다쟁이여서 집사가 부르면 야옹하고 대답도 잘하는 고양이에요! 물을 굉장히 좋아해서 목욕을 시킬 때, 굉장히 편한 고양이 중 하나! 다만 호기심이 많아서 이것저것 잘 떨구는 고양이!",
    img: `${Abyssinian}`,
  },
  {
    id: 7,
    name: "노르웨이 숲",
    best: "ESTP",
    mbti: "INTP",
    desc: "조용하고 사람을 매우 좋아하는 고양이 중 하나! 숲에서 살던 고양이라 본능적으로 사냥 놀이를 굉장히 좋아해요. 대형종 고양이라 식욕이 많아요",
    img: `${Norwegianforest}`,
  },
  {
    id: 8,
    name: "아메리칸 숏헤어",
    best: "INFP",
    mbti: "ESFP",
    desc: "주인에 대한 호기심이 높고 애교가 굉장히 많아요!다만! 집사 내꺼야! 독점욕도 굉장히 강합니다. 이미 여러마리의 고양이를 키우는 집사라면 다른 고양이들에게 하악질을 볼 수도..",
    img: `${Ameshort}`,
  },
  {
    id: 9,
    name: "코리안 숏헤어",
    best: "ISFP",
    mbti: "ENFP",
    desc: "많은 고양이의 혈통이 섞여있는 고양이에요! 대부분 활발하고 쾌할한 성격을 가지고 있고, 친밀하고 영리합니다! 사냥본능이 매우 뛰어나서 사냥놀이를 굉장히 좋아해요",
    img: `${Korshort}`,
  },
  {
    id: 10,
    name: "엑죠틱",
    best: "ISFJ",
    mbti: "ESTJ",
    desc: "낯을 가리지 않고, 주인 옆에서 느긋하게 일상을 즐기는 고양이에요! 다만 운동량이 그렇게 많지 않아 뚱뚱 고양이가 될 수 있으니 조심하기!",
    img: `${Exotic}`,
  },
  {
    id: 11,
    name: "스코티쉬 폴드",
    best: "ENFP",
    mbti: "ISFP",
    desc: "접힌 귀가 굉장히 귀여운 고양이! 착하고 느긋하며 울음소리가 작은 고양이! 고양이 치고는 애교가 매우 많은 편이며 귀찮을 정도로 집사를 졸졸졸 따라다니는 경우가 있습니다!",
    img: `${Scottishfold}`,
  },
  {
    id: 12,
    name: "먼치킨",
    best: "INFJ",
    mbti: "ENTJ",
    desc: "짧은 다리와 귀염한 외모를 가지고 있는 고양이에요! 호기심이 매우 많아서 짧은 다리로 이곳저곳을 돌아다니는 에너지가 넘치는 고양이! 영리하고 애교가 많은 편에 속하는 고양이에요",
    img: `${Munchkin}`,
  },
  {
    id: 13,
    name: "렉돌",
    best: "ESFJ",
    mbti: "ISTJ",
    desc: "긴 털과 아주 예쁜 예모로 많이 사랑받는 고양이! 봉제인형이라는 이름처럼 집사가 안으면 인형처럼 안겨있는 고양이입니다! 너무나도 순하고 집사와의 교감을 매우 좋아하는 고양이 중에 하나입니다!",
    img: `${Ragdoll}`,
  },
  {
    id: 14,
    name: "브리티쉬 숏헤어",
    best: "ENTP",
    mbti: "ISTP",
    desc: "이름과 같이 영국 신사와 같은 고양이! 배려심이 깊고 매우 조용하고 인내심이 강한 고양이에요. 덩치가 큰 편이어서 집사 무릎보다는 옆구리에 앉아서 시간을 보내는 것을 좋아하는 고양이입니다!",
    img: `${British}`,
  },
  {
    id: 15,
    name: "스핑크스",
    best: "ISTP",
    mbti: "ENTP",
    desc: "유일하게 털이 없는 고양이입니다! 외모와는 다르게 고양이 중에서 가장 성격이 좋다고 하는 고양이계의 골든리트리버! 다만 피부병이 잘 걸릴 수 있으니 조심조심!",
    img: `${Sphinx}`,
  },
  {
    id: 16,
    name: "메인쿤",
    best: "ENFJ",
    mbti: "INTJ",
    desc: "거인 신사라는 별명을 가진 고양이에요! 조용하고 온화한 성격을 가지고 있으며 매우 똑똑하고 크기와 생김새가 사자나 호랑이처럼 생긴 고양이 입니다!",
    img: `${Mainecoon}`,
  },
];
