import Header from "../components/Header.jsx";
import ImageButton from "../components/ImageButton.jsx";
import styled from "styled-components";

const courses = [
  {
    id: "1",
    name: "HTML & CSS 완벽 마스터",
    info: "information information information information",
    image: "example.png",
  },
  {
    id: "2",
    name: "React로 웹 애플리케이션 만들기",
    info: "information information information information",
    image: "example.png",
  },
  {
    id: "3",
    name: "Node.js 백엔드 개발 입문",
    info: "information information information information",
    image: "example.png",
  },
  {
    id: "4",
    name: "HTML & CSS 완벽 마스터",
    info: "information information information information",
    image: "example.png",
  },
  {
    id: "5",
    name: "React로 웹 애플리케이션 만들기",
    info: "information information information information",
    image: "example.png",
  },
  {
    id: "6",
    name: "Node.js 백엔드 개발 입문",
    info: "information information information information",
    image: "example.png",
  },
  {
    id: "7",
    name: "HTML & CSS 완벽 마스터",
    info: "information information information information",
    image: "example.png",
  },
  {
    id: "8",
    name: "React로 웹 애플리케이션 만들기",
    info: "information information information informationinformation information information",
    image: "example.png",
  },
];

const Br = styled.div`
  padding-top: 80px;
`;

const Section1 = styled.div`
  font-size: 30px;
  align-items: center;
  width: 100%;
  height: 720px;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  display: flex;
  padding: 180px;

  div h2 {
    font-size: 75px;
  }

  div .info {
    font-size: 30px;
  }
  div img {
    align-items: center;
    width: 720px;
    height: auto;
  }
`;

const Product = styled.section`
  font-size: 30px;
  align-item: center;
  display: flex;
  flex-wrap: wrap;
  padding: 180px;
  border-bottom: 1px solid gray;
  width: auto;
  height: auto;
  gap: 40px;
  justify-content: center;

  h2 {
    font-size: 50px;
    width: 100%;
  }
`;

const Category = styled.div`
  font-size: 30px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

const Course = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1440px;
  gap: 40px;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Br />
      <Section1>
        <div>
          <h2>Home</h2>
          <div className="info">코드리뷰는 세계최강 코드비교사이트입니다!</div>
          <div className="info">test2 </div>
          <div className="info">test3</div>
        </div>
        <div>
          <img src="/example.png"></img>
        </div>
      </Section1>
      <Product>
        <h2>카테고리</h2>
        <Category>
          <button>좌로이동</button>
          <button>카테고리1</button>
          <button>카테고리2</button>
          <button>카테고리3</button>
          <button>카테고리4</button>
          <button>카테고리5</button>
          <button>카테고리6</button>
          <button>카테고리7</button>
          <button>카테고리8</button>
          <button>우로이동</button>
        </Category>
        <Course>
          {courses.map((course) => (
            <ImageButton key={course.id} {...course} />
          ))}
        </Course>
      </Product>
    </>
  );
};

export default Home;
