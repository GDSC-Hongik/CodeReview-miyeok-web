import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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

  @media (min-width: 835px) and (max-width: 1500px) {
    font-size: 20px;
    padding: 150px 100px;
    gap: 25px;
  }
  @media (min-width: 361px) and (max-width: 834px) {
    padding: 150px 25px;
    gap: 15px;
    font-size: 15px;
  }
  @media (max-width: 360px) {
    font-size: 10px;
    padding: 150px 15px;
    gap: 10px;
  }

  .searchquery {
    align-self: flex-start;
    font-size: 30px;
    font-weight: bold;
    width: 100%;
  }
  .nosearch {
    font-size: 20px;
    margin-top: 20px;
    color: gray;
  }

  .nosearchimg {
    weight: 400px;
    color: rgba(0, 0, 0, 0.5);
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

const Nosearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .nosearch {
    font-size: 20px;
    margin-top: 20px;
    color: gray;
  }

  .nosearchimg {
    width: 200px;
    opacity: 0.5;
  }
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

const CourseList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  const getFilteredData = () => {
    if (query === "") {
      return courses;
    }
    return courses.filter(
      (courses) =>
        courses.title.toLowerCase().includes(query.toLowerCase()) ||
        courses.instructorName.toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    const fetchAllCourse = async () => {
      try {
        const response = await fetch("http://13.209.165.107:8080/api/lecture");
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
        console.error("오류:", { err });
        console.log(error);
      }
    };
    fetchAllCourse();
  }, []);

  const filteredCourses = getFilteredData();

  return (
    <>
      <Header />
      <ListBody>
        <div className="searchquery"> &quot;{query}&quot; 검색결과</div>
        {filteredCourses.length > 0 ? (
          <Course>
            {filteredCourses.map((courses, index) => (
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
        ) : (
          <Nosearch>
            <img
              className="nosearchimg"
              src="/CodeReviewLogo.png"
              alt="nosearched"
            />
            <div className="nosearch">검색 결과가 없습니다.</div>
          </Nosearch>
        )}
      </ListBody>
    </>
  );
};

export default CourseList;
