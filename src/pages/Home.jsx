import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { isLoginAtom } from "../atom";
import Header from "../components/Header.jsx";
import ImageButton from "../components/ImageButton.jsx";
import styled from "styled-components";
const Dummycourses = [
  {
    id: "1",
    name: "김영한의 자바 입문 - 코드로 시작하는 자바 첫걸음",
    image:
      "https://cdn.inflearn.com/public/courses/332505/cover/c32e770b-b417-436d-afd0-e2285ac6e514/332505.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "김영한",
  },
  {
    id: "2",
    name: "프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)",
    image:
      "https://cdn.inflearn.com/public/courses/324145/cover/184a19f3-c99f-4eea-a764-dc8e71d4c37a/324145.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "inflearn",
  },
  {
    id: "3",
    name: "아는 만큼 보이는 크롬 개발자 도구",
    image:
      "https://cdn.inflearn.com/public/courses/331168/cover/dcdd44f3-2082-42dd-8d93-a8ee27773b28/%5B%E1%84%8C%E1%85%A6%E1%84%8F%E1%85%A9%E1%84%87%E1%85%A2%5D+%E1%84%8B%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8F%E1%85%B3%E1%86%B7+%E1%84%87%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7+%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1+%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "inflearn",
  },
  {
    id: "4",
    name: "실전 활용을 위한 git/github(feat.각종 충돌상황 해결하기)",
    image:
      "https://cdn.inflearn.com/public/courses/335777/cover/10a750c9-2f5d-440b-b5f4-c8ab15b0bdf6/335777.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "소프트웨어 테스트",
    instructor: "inflearn",
  },
  {
    id: "5",
    name: "한 번에 통과하는 일잘러의 PPT 디자인 (w.새별의 파워포인트)",
    image:
      "https://cdn.inflearn.com/public/courses/331419/cover/25cd4324-bcf1-48f7-9797-ef17ad32a80d/PPT%20design%20by%20a%20high-performer%20who%20gets%20things%20done%20in%20one%20go.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "데이터베이스",
    instructor: "inflearn",
  },
  {
    id: "6",
    name: "언리얼로 만드는 게임사운드 - 초급",
    image:
      "https://cdn.inflearn.com/public/courses/331923/cover/b83e249f-097b-4192-a038-2af3e387d527/331923-eng.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "모바일 개발",
    instructor: "inflearn",
  },
  {
    id: "7",
    name: "핵심만 쏙쏙 Jira&Confluence",
    image:
      "https://cdn.inflearn.com/public/courses/334233/cover/fabf51c0-16ab-4d1c-82ea-00d548287a8e/334233.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "프로그래밍 언어",
    instructor: "inflearn",
  },
  {
    id: "8",
    name: "개발자라면 알아야 할 redis 기본",
    image:
      "https://cdn.inflearn.com/public/courses/335776/cover/fc71c9d3-40dd-4c07-b534-f859f35d45b6/335776.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "프로그래밍 언어",
    instructor: "inflearn",
  },
  {
    id: "9",
    name: "김영한의 자바 입문 - 코드로 시작하는 자바 첫걸음",
    image:
      "https://cdn.inflearn.com/public/courses/332505/cover/c32e770b-b417-436d-afd0-e2285ac6e514/332505.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "김영한",
  },
  {
    id: "10",
    name: "프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)",
    image:
      "https://cdn.inflearn.com/public/courses/324145/cover/184a19f3-c99f-4eea-a764-dc8e71d4c37a/324145.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "inflearn",
  },
  {
    id: "11",
    name: "아는 만큼 보이는 크롬 개발자 도구",
    image:
      "https://cdn.inflearn.com/public/courses/331168/cover/dcdd44f3-2082-42dd-8d93-a8ee27773b28/%5B%E1%84%8C%E1%85%A6%E1%84%8F%E1%85%A9%E1%84%87%E1%85%A2%5D+%E1%84%8B%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8F%E1%85%B3%E1%86%B7+%E1%84%87%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7+%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1+%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "inflearn",
  },
  {
    id: "111",
    name: "실전 활용을 위한 git/github(feat.각종 충돌상황 해결하기)",
    image:
      "https://cdn.inflearn.com/public/courses/335777/cover/10a750c9-2f5d-440b-b5f4-c8ab15b0bdf6/335777.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "소프트웨어 테스트",
    instructor: "inflearn",
  },
  {
    id: "22",
    name: "한 번에 통과하는 일잘러의 PPT 디자인 (w.새별의 파워포인트)",
    image:
      "https://cdn.inflearn.com/public/courses/331419/cover/25cd4324-bcf1-48f7-9797-ef17ad32a80d/PPT%20design%20by%20a%20high-performer%20who%20gets%20things%20done%20in%20one%20go.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "데이터베이스",
    instructor: "inflearn",
  },
  {
    id: "222",
    name: "언리얼로 만드는 게임사운드 - 초급",
    image:
      "https://cdn.inflearn.com/public/courses/331923/cover/b83e249f-097b-4192-a038-2af3e387d527/331923-eng.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "모바일 개발",
    instructor: "inflearn",
  },
  {
    id: "2222",
    name: "핵심만 쏙쏙 Jira&Confluence",
    image:
      "https://cdn.inflearn.com/public/courses/334233/cover/fabf51c0-16ab-4d1c-82ea-00d548287a8e/334233.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "프로그래밍 언어",
    instructor: "inflearn",
  },
  {
    id: "33",
    name: "개발자라면 알아야 할 redis 기본",
    image:
      "https://cdn.inflearn.com/public/courses/335776/cover/fc71c9d3-40dd-4c07-b534-f859f35d45b6/335776.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "프로그래밍 언어",
    instructor: "inflearn",
  },
  {
    id: "333",
    name: "김영한의 자바 입문 - 코드로 시작하는 자바 첫걸음",
    image:
      "https://cdn.inflearn.com/public/courses/332505/cover/c32e770b-b417-436d-afd0-e2285ac6e514/332505.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "김영한",
  },
  {
    id: "3333",
    name: "프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)",
    image:
      "https://cdn.inflearn.com/public/courses/324145/cover/184a19f3-c99f-4eea-a764-dc8e71d4c37a/324145.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "inflearn",
  },
  {
    id: "44",
    name: "아는 만큼 보이는 크롬 개발자 도구",
    image:
      "https://cdn.inflearn.com/public/courses/331168/cover/dcdd44f3-2082-42dd-8d93-a8ee27773b28/%5B%E1%84%8C%E1%85%A6%E1%84%8F%E1%85%A9%E1%84%87%E1%85%A2%5D+%E1%84%8B%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8F%E1%85%B3%E1%86%B7+%E1%84%87%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7+%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1+%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "inflearn",
  },
  {
    id: "444",
    name: "실전 활용을 위한 git/github(feat.각종 충돌상황 해결하기)",
    image:
      "https://cdn.inflearn.com/public/courses/335777/cover/10a750c9-2f5d-440b-b5f4-c8ab15b0bdf6/335777.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "소프트웨어 테스트",
    instructor: "inflearn",
  },
  {
    id: "4444",
    name: "한 번에 통과하는 일잘러의 PPT 디자인 (w.새별의 파워포인트)",
    image:
      "https://cdn.inflearn.com/public/courses/331419/cover/25cd4324-bcf1-48f7-9797-ef17ad32a80d/PPT%20design%20by%20a%20high-performer%20who%20gets%20things%20done%20in%20one%20go.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "데이터베이스",
    instructor: "inflearn",
  },
  {
    id: "55",
    name: "언리얼로 만드는 게임사운드 - 초급",
    image:
      "https://cdn.inflearn.com/public/courses/331923/cover/b83e249f-097b-4192-a038-2af3e387d527/331923-eng.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "모바일 개발",
    instructor: "inflearn",
  },
  {
    id: "555",
    name: "핵심만 쏙쏙 Jira&Confluence",
    image:
      "https://cdn.inflearn.com/public/courses/334233/cover/fabf51c0-16ab-4d1c-82ea-00d548287a8e/334233.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "프로그래밍 언어",
    instructor: "inflearn",
  },
  {
    id: "5555",
    name: "개발자라면 알아야 할 redis 기본",
    image:
      "https://cdn.inflearn.com/public/courses/335776/cover/fc71c9d3-40dd-4c07-b534-f859f35d45b6/335776.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "프로그래밍 언어",
    instructor: "inflearn",
  },
  {
    id: "66",
    name: "김영한의 자바 입문 - 코드로 시작하는 자바 첫걸음",
    image:
      "https://cdn.inflearn.com/public/courses/332505/cover/c32e770b-b417-436d-afd0-e2285ac6e514/332505.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "김영한",
  },
  {
    id: "666",
    name: "프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)",
    image:
      "https://cdn.inflearn.com/public/courses/324145/cover/184a19f3-c99f-4eea-a764-dc8e71d4c37a/324145.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "inflearn",
  },
  {
    id: "7777",
    name: "아는 만큼 보이는 크롬 개발자 도구",
    image:
      "https://cdn.inflearn.com/public/courses/331168/cover/dcdd44f3-2082-42dd-8d93-a8ee27773b28/%5B%E1%84%8C%E1%85%A6%E1%84%8F%E1%85%A9%E1%84%87%E1%85%A2%5D+%E1%84%8B%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8F%E1%85%B3%E1%86%B7+%E1%84%87%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7+%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1+%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "inflearn",
  },
  {
    id: "88",
    name: "실전 활용을 위한 git/github(feat.각종 충돌상황 해결하기)",
    image:
      "https://cdn.inflearn.com/public/courses/335777/cover/10a750c9-2f5d-440b-b5f4-c8ab15b0bdf6/335777.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "소프트웨어 테스트",
    instructor: "inflearn",
  },
  {
    id: "99",
    name: "한 번에 통과하는 일잘러의 PPT 디자인 (w.새별의 파워포인트)",
    image:
      "https://cdn.inflearn.com/public/courses/331419/cover/25cd4324-bcf1-48f7-9797-ef17ad32a80d/PPT%20design%20by%20a%20high-performer%20who%20gets%20things%20done%20in%20one%20go.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "데이터베이스",
    instructor: "inflearn",
  },
  {
    id: "11113",
    name: "언리얼로 만드는 게임사운드 - 초급",
    image:
      "https://cdn.inflearn.com/public/courses/331923/cover/b83e249f-097b-4192-a038-2af3e387d527/331923-eng.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "모바일 개발",
    instructor: "inflearn",
  },
  {
    id: "123",
    name: "핵심만 쏙쏙 Jira&Confluence",
    image:
      "https://cdn.inflearn.com/public/courses/334233/cover/fabf51c0-16ab-4d1c-82ea-00d548287a8e/334233.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "프로그래밍 언어",
    instructor: "inflearn",
  },
  {
    id: "463",
    name: "개발자라면 알아야 할 redis 기본",
    image:
      "https://cdn.inflearn.com/public/courses/335776/cover/fc71c9d3-40dd-4c07-b534-f859f35d45b6/335776.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "프로그래밍 언어",
    instructor: "inflearn",
  },
  {
    id: "551243",
    name: "언리얼로 만드는 게임사운드 - 초급",
    image:
      "https://cdn.inflearn.com/public/courses/331923/cover/b83e249f-097b-4192-a038-2af3e387d527/331923-eng.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "웹 개발",
    instructor: "inflearn",
  },
  {
    id: "512355",
    name: "핵심만 쏙쏙 Jira&Confluence",
    image:
      "https://cdn.inflearn.com/public/courses/334233/cover/fabf51c0-16ab-4d1c-82ea-00d548287a8e/334233.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "프로그래밍 언어",
    instructor: "inflearn",
  },
];

const Br = styled.div`
  padding-top: 40px;
`;

const Section = styled.div`
  font-size: 30px;
  width: 100%;
  height: 720px;
  border-bottom: 1px solid rgb(230, 230, 230);
  display: flex;
  align-items: flex-end;

  div h2 {
    font-size: 40px;
    font-weight: bold;
  }

  div .info {
  }
  .logoimg {
    width: 60px;
  }
  .backgroundimg {
    align-items: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.6) 40%,
      rgba(0, 0, 0, 0) 80%
    );
    -webkit-mask-image: radial-gradient(
      to left,
      rgba(0, 0, 0, 0.6) 40%,
      rgba(0, 0, 0, 0) 80%
    );
  }
`;

const Product = styled.section`
  font-size: 30px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 150px;
  border-bottom: 1px solid rgb(230, 230, 230);
  width: auto;
  height: auto;
  gap: 40px;
  justify-content: center;

  .more {
    width: 120px;
    cursor: pointer;
  }

  h2 {
    font-size: 40px;
    width: 100%;
    font-weight: bold;
  }
  @media (max-width: 360px) {
    padding: 20px;
    gap: 10px;
  }
  @media (min-width: 361px) and (max-width: 834px) {
    padding: 45px;
    gap: 20px;
  }
  @media (min-width: 835px) and (max-width: 1500px) {
    padding: 70px;
    gap: 30px;
  }
`;

const Category = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  font-size: 30px;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 40px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(230, 230, 230);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled.button`
  font-size: 20px;
  padding: 0px 16px;
  line-height: 1.5;
  vertical-align: middle;
  width: auto;
  height: 44px;
  align-items: center;
  background-color: ${(props) =>
    props.selected ? "black" : "rgb(250,250,250)"};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: none;
  border-radius: 22px;
  cursor: pointer;
`;

const Course = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(273px, 1fr));
  width: 100%;
  gap: 50px;
  justify-item: center;
  role: list;
  @media (min-width: 835px) and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  @media (min-width: 361px) and (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const MainInfo = styled.div`
  position: absolute;
  padding-left: 150px;
  padding-bottom: 100px;
`;

const Info = styled.a`
  display: flex;
  padding-top: 10px;
  color: black;
  font-size: 20px;
  text-decoration: none;
`;

const Instruct = styled.a`
  display: flex;
  padding-top: 10px;
  color: gray;
  font-size: 20px;
  text-decoration: none;
`;

const RecFeed = styled.div`
  font-size: 30px;
  align-item: center;
  display: flex;
  flex-wrap: wrap;
  padding: 150px;
  border-bottom: 1px solid rgb(230, 230, 230);
  width: auto;
  height: auto;
  gap: 40px;
  justify-content: center;
`;

const RecCourse = styled.div`
  font-size: 30px;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 40px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 80px;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
`;

const RecAD = styled.div`
  font-size: 30px;
  align-items: center;
  width: 100%;
  display: flex;
  gap: 40px;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 80px;

  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
`;
const RecThings = styled.img`
  display: flex;
  gap: 40px;
  width: 480px;
  height: 400px;
  object-fit: cover;
  background-color: rgb(220, 220, 220);
  flex-shrink: 0;
`;

const NeedLogin = styled.div`
  display: flex;
  width: 100%;
  height: 480px;
  font-size: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 6px;
`;

const LoginButton = styled.button`
  margin-top: 16px;
  background-color: black;
  color: white;
  width: 380px;
  height: 64px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const Home = () => {
  const [isLogin] = useAtom(isLoginAtom);
  const [category, setCategory] = useState("ALL");
  const [courses, setCourses] = useState([]);
  const [ads, setAds] = useState([]);
  const [recommandCourses, setRecommandCourses] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(12);

  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        const response = await fetch("link");
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
        console.error("오류:", { error });
      }
    };
    fetchAllCourse();
  }, []);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos?client_id=800hGr_695fPo_zAhHXStRFpytHVdjj4X2b5us6zbqI&per_page=5"
        );
        const data = await response.json();
        setAds(data);
      } catch (err) {
        setError(err.message);
        console.error("오류:", { error });
      }
    };
    fetchAds();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos?client_id=800hGr_695fPo_zAhHXStRFpytHVdjj4X2b5us6zbqI&per_page=5"
        );
        const data = await response.json();
        setRecommandCourses(data);
      } catch (err) {
        setError(err.message);
        console.error("오류:", { error });
      }
    };
    fetchCourses();
  }, []);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredCourses =
    category === "ALL"
      ? Dummycourses // courses
      : Dummycourses.filter((course) => course.category === category);

  const DoubleFilteredCourses = filteredCourses.slice(0, page);

  const morePageMade = () => {
    setPage((prevPage) => prevPage + 12);
  };

  const CategoryMap = [
    "ALL",
    "웹 개발",
    "모바일 개발",
    "프로그래밍 언어",
    "데이터베이스",
    "소프트웨어 테스트",
  ];

  return (
    <>
      <Header />
      <Br />
      <Br />
      <Section>
        <img className="backgroundimg" src="/main1.png"></img>
        <MainInfo>
          <img className="logoimg" src="CodeReviewLogo.png"></img>
          <h2>원하는 코딩강의 평가를 한 번에</h2>
          <Br />
          <div className="info">
            개발 관련 강의들에 대한 평가(평점과 구체적인 리뷰)를
          </div>
          <div className="info">한곳에 모아 비교할 수 있는 서비스</div>
        </MainInfo>
      </Section>
      <Product>
        <h2>Category</h2>
        <Category>
          {CategoryMap.map((cat) => (
            <CategoryButton
              key={cat}
              onClick={() => {
                handleCategoryChange(cat);
                setPage(12);
              }}
              selected={category === cat}
            >
              {cat}
            </CategoryButton>
          ))}
        </Category>
        <Course>
          {DoubleFilteredCourses.map((Dummycourse) => (
            <div key={Dummycourse.id}>
              <ImageButton {...Dummycourse} />
              <Info href={Dummycourse.link}>{Dummycourse.name}</Info>
              <Instruct>{Dummycourse.instructor}</Instruct>
            </div>
          ))}
        </Course>
        {filteredCourses.length <= page ? (
          <></>
        ) : (
          <img
            src="moreinfoarrow.png"
            className="more"
            onClick={morePageMade}
          />
        )}
      </Product>
      {isLogin ? (
        <RecFeed>
          <RecCourse>
            {recommandCourses.map((cat) => (
              <RecThings key={cat.id} src={cat.urls.regular} />
            ))}
          </RecCourse>
          <RecAD>
            {ads.map((cat) => (
              <RecThings key={cat.id} src={cat.urls.regular} />
            ))}
          </RecAD>
        </RecFeed>
      ) : (
        <>
          <NeedLogin>
            <div>회원이 되면</div>
            <div>더 많은 기능을 확인할 수 있어요!</div>
            <LoginButton
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              로그인하기
            </LoginButton>
            <div>{courses}</div>
          </NeedLogin>
        </>
      )}
    </>
  );
};

export default Home;
