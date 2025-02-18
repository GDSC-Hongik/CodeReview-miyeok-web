import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ImageButton from "../components/ImageButton.jsx";
import styled from "styled-components";

const ListBody = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 150px;
  border-bottom: 1px solid rgb(230, 230, 230);
  width: auto;
  height: auto;
  gap: 40px;
  justify-content: center;

  .searchquery {
    align-self: flex-start;
    font-size: 30px;
    font-weight: bold;
    width: 100%;
  }
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

const courses = [
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
];

const CourseList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const getFilteredData = () => {
    if (query === "") {
      return courses;
    }
    return courses.filter(
      (course) =>
        course.name.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase())
    );
  };
  const filteredCourses = getFilteredData();

  return (
    <>
      <Header />
      <ListBody>
        <div className="searchquery"> {query} 검색결과</div>
        <Course>
          {filteredCourses.map((course) => (
            <div key={course.id}>
              <ImageButton {...course} />
              <Info href={course.link}>{course.name}</Info>
              <Instruct>{course.instructor}</Instruct>
            </div>
          ))}
        </Course>
      </ListBody>
    </>
  );
};

export default CourseList;
