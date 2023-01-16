import { CurationType } from "../../types/article";

const Curations: CurationType[] = [
  {
    title: "테스트 큐레이션",
    content: [
      {
        id: 1,
        category: "경정인을 소개합니다.",
        title: "재직자편 - 최시운",
        authorNames: ["이정우", "김현제"],
        isActive: false,
        isLike: false,
        likeNum: 132,
      },
      {
        id: 2,
        category: "경정인2을 소개합니다.",
        title: "재직자편 - 최시운2",
        authorNames: ["이정우2", "김현제2"],
        isActive: true,
        isLike: false,
        likeNum: 1312,
      },
    ],
  },
  {
    title: "큐레이션 타이틀2",
    content: [
      {
        id: 3,
        category: "경정인을 소개합니다.",
        title: "재직자편 - 최시운",
        authorNames: ["이정우", "김현제"],
        isActive: false,
        isLike: false,
        likeNum: 132,
      },
      {
        id: 4,
        category: "경정인2을 소개합니다.",
        title: "재직자편 - 최시운2",
        authorNames: ["이정우2", "김현제2"],
        isActive: true,
        isLike: false,
        likeNum: 1312,
      },
    ],
  },
];

export default Curations;
