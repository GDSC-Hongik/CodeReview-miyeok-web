import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { isLoginAtom } from "../atom";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import ImageButton from "../components/ImageButton.jsx";
import styled from "styled-components";

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

const Info = styled(Link)`
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
      let url = "http://13.209.165.107:8080/api/lecture";

      if (category !== "ALL") {
        url = `http://13.209.165.107:8080/api/lecture/category?category=${category}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
        console.error("오류:", { err });
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
    setPage(12);
  };

  const filteredCourses =
    category === "ALL"
      ? courses
      : courses.filter(
          (course) =>
            course.category === category || course.category?.includes(category)
        );

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
    "WEB",
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
              onClick={() =>
                handleCategoryChange(
                  cat === "웹 개발"
                    ? "WEB"
                    : cat === "모바일 개발"
                    ? "MOBILE"
                    : cat === "ALL"
                    ? "ALL"
                    : cat === "프로그래밍 언어"
                    ? "PL"
                    : cat === "데이터베이스"
                    ? "DB"
                    : cat === "소프트웨어 테스트"
                    ? "TEST"
                    : cat
                )
              }
              selected={
                category ===
                (cat === "웹 개발"
                  ? "WEB"
                  : cat === "모바일 개발"
                  ? "MOBILE"
                  : cat === "ALL"
                  ? "ALL"
                  : cat === "프로그래밍 언어"
                  ? "PL"
                  : cat === "데이터베이스"
                  ? "DB"
                  : cat === "소프트웨어 테스트"
                  ? "TEST"
                  : cat)
              }
            >
              {cat}
            </CategoryButton>
          ))}
        </Category>
        <Course>
          {DoubleFilteredCourses.map((courses, index) => (
            <div key={index}>
              <ImageButton {...courses} />
              <Info
                to={`/course/${encodeURIComponent(
                  courses.title.replace(/\s+/g, "-").toLowerCase()
                )}`}
              >
                {courses.title}
              </Info>
              <Instruct>{courses.instructorName}</Instruct>
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
          </NeedLogin>
        </>
      )}
    </>
  );
};

export default Home;
