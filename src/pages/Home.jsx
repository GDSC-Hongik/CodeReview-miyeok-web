import { useState } from "react";
import { useAtom } from "jotai";
import { isLoginAtom } from "../atom";
import Header from "../components/Header.jsx";
import ImageButton from "../components/ImageButton.jsx";
import styled from "styled-components";
const courses = [
  {
    id: "1",
    name: "김영한의 자바 입문 - 코드로 시작하는 자바 첫걸음",
    image:
      "https://cdn.inflearn.com/public/courses/332505/cover/c32e770b-b417-436d-afd0-e2285ac6e514/332505.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "개발, 프로그래밍",
  },
  {
    id: "2",
    name: "프로그래밍 시작하기 : 파이썬 입문 (Inflearn Original)",
    image:
      "https://cdn.inflearn.com/public/courses/324145/cover/184a19f3-c99f-4eea-a764-dc8e71d4c37a/324145.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "개발, 프로그래밍",
  },
  {
    id: "3",
    name: "아는 만큼 보이는 크롬 개발자 도구",
    image:
      "https://cdn.inflearn.com/public/courses/331168/cover/dcdd44f3-2082-42dd-8d93-a8ee27773b28/%5B%E1%84%8C%E1%85%A6%E1%84%8F%E1%85%A9%E1%84%87%E1%85%A2%5D+%E1%84%8B%E1%85%A1%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%86%E1%85%A1%E1%86%AB%E1%84%8F%E1%85%B3%E1%86%B7+%E1%84%87%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%82%E1%85%B3%E1%86%AB+%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%86%B7+%E1%84%80%E1%85%A2%E1%84%87%E1%85%A1%E1%86%AF%E1%84%8C%E1%85%A1+%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "개발, 프로그래밍",
  },
  {
    id: "4",
    name: "실전 활용을 위한 git/github(feat.각종 충돌상황 해결하기)",
    image:
      "https://cdn.inflearn.com/public/courses/335777/cover/10a750c9-2f5d-440b-b5f4-c8ab15b0bdf6/335777.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "개발, 프로그래밍",
  },
  {
    id: "5",
    name: "한 번에 통과하는 일잘러의 PPT 디자인 (w.새별의 파워포인트)",
    image:
      "https://cdn.inflearn.com/public/courses/331419/cover/25cd4324-bcf1-48f7-9797-ef17ad32a80d/PPT%20design%20by%20a%20high-performer%20who%20gets%20things%20done%20in%20one%20go.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "데이터 사이언스",
  },
  {
    id: "6",
    name: "언리얼로 만드는 게임사운드 - 초급",
    image:
      "https://cdn.inflearn.com/public/courses/331923/cover/b83e249f-097b-4192-a038-2af3e387d527/331923-eng.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "게임 개발",
  },
  {
    id: "7",
    name: "핵심만 쏙쏙 Jira&Confluence",
    image:
      "https://cdn.inflearn.com/public/courses/334233/cover/fabf51c0-16ab-4d1c-82ea-00d548287a8e/334233.png?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "개발, 프로그래밍",
  },
  {
    id: "8",
    name: "개발자라면 알아야 할 redis 기본",
    image:
      "https://cdn.inflearn.com/public/courses/335776/cover/fc71c9d3-40dd-4c07-b534-f859f35d45b6/335776.jpg?w=420",
    link: "https://github.com/Yunjanghyeon",
    category: "데이터 사이언스",
  },
];

const RecommandCourses = [
  { id: "1", name: "강의1" },
  { id: "2", name: "강의2" },
  { id: "3", name: "강의3" },
  { id: "4", name: "강의4" },
  { id: "5", name: "강의5" },
];

const AD = [
  { id: "1", name: "광고1" },
  { id: "2", name: "광고2" },
  { id: "3", name: "광고3" },
  { id: "4", name: "광고4" },
  { id: "5", name: "광고5" },
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
  align-item: center;
  display: flex;
  flex-wrap: wrap;
  padding: 150px;
  border-bottom: 1px solid rgb(230, 230, 230);
  width: auto;
  height: auto;
  gap: 40px;
  justify-content: center;

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
const RecThings = styled.div`
  display: flex;
  gap: 40px;
  width: 480px;
  height: 400px;
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
`;

const Home = () => {
  const [isLogin] = useAtom(isLoginAtom);
  const [category, setCategory] = useState("ALL");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredCourses =
    category === "ALL"
      ? courses
      : courses.filter((course) => course.category === category);

  const CategoryMap = [
    "ALL",
    "개발, 프로그래밍",
    "개임 개발",
    "데이터 사이언스",
    "인공지능",
    "보안, 네트워크",
    "하드웨어",
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
              onClick={() => handleCategoryChange(cat)}
              selected={category === cat}
            >
              {cat}
            </CategoryButton>
          ))}
        </Category>
        <Course>
          {filteredCourses.map((course) => (
            <div key={course.id}>
              <ImageButton {...course} />
              <Info href={course.link}>{course.name}</Info>
            </div>
          ))}
        </Course>
      </Product>
      {isLogin ? (
        <RecFeed>
          <RecCourse>
            {RecommandCourses.map((cat) => (
              <RecThings key={cat.id}>{cat.name}</RecThings>
            ))}
          </RecCourse>
          <RecAD>
            {AD.map((cat) => (
              <RecThings key={cat.id}>{cat.name}</RecThings>
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
              로그인
            </LoginButton>
          </NeedLogin>
        </>
      )}
    </>
  );
};

export default Home;
