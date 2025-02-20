import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import ImageButton from "../components/ImageButton.jsx";
import StarRating from "../components/StarRating.jsx";
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

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 60px;
  border-radius: 10px;
  width: 60vw;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  background-color: #f6f6f6;
`;
const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  gap: 20px;
  width: 100%;
`;

const ModalComparesimple = styled.div`
  width: 20vw;
  border-radius: 10px;
  padding: 40px;
  background-color: white;
  align-items: center;
  font-size: 16px;
  .title {
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -webkit-box-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    width: auto;
    height: 50px;
    padding: 4px 20px;
    border-radius: 5vw;
    background-color: #f6f6f6;
    text-align: center;
  }
  .line1 {
    padding: 10px 15px;
    justify-content: space-between;
    gap: 5px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  .compareimg {
    width: 240px;
    border-radius: 10px;
    margin-top: 20px;
  }
  .right {
    display: flex;
    gap: 5px;
  }
  .price {
    padding: 10px;
  }
`;

const ModalCompareAI = styled.div`
  width: 46vw;
  max-height: 15vh;
  overflow-y: auto;
  border-radius: 10px;
  padding: 40px;
  background-color: white;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;

  .Result {
    display: flex;
    background-color: black;
    align-items: center;
    width: auto;
    height: auto;
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 15px;
    color: white;
    padding: 10px;
    margin-bottom: 10px;
  }

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

const XButton = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 8px 16px;
  cursor: pointer;
  box-sizing: border-box;
`;

const ImageButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CompareButton = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  height: auto;
  padding: 8px 24px;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  color: white;
  white-space: nowrap;
  cursor: ${({ $show }) => ($show ? "pointer" : "default")};
  background-color: ${({ $show }) => ($show ? "black" : "gray")};
  pointer-events: ${({ $show }) => ($show ? "auto" : "none")};
`;

const PlusButton = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  box-sizing: border-box;
  pointer-events: ${({ $isSelected, $maxSelectedReached }) =>
    $maxSelectedReached && !$isSelected ? "none" : "auto"};
  opacity: ${({ $isSelected, $maxSelectedReached }) =>
    $maxSelectedReached && !$isSelected ? 0 : 1};
  background-color: ${({ $isSelected }) => ($isSelected ? "#B4F10E" : "")};
  &:hover {
    background-color: ${({ $isSelected }) => ($isSelected ? "none" : "white")};
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

const Between = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .right {
    display: flex;
    align-items: center;
    gap: 40px;
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
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [comparisonData, setComparisonData] = useState([]);
  const [comparisonAIData, setComparisonAIData] = useState([]);

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

  useEffect(() => {
    if (selectedCourses.length === 2) {
      const fetchComparison = async () => {
        try {
          const lectureId1 = selectedCourses[0].id;
          const lectureId2 = selectedCourses[1].id;
          const response = await fetch(
            "http://13.209.165.107:8080/api/comparison/simple",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                lectureId1,
                lectureId2,
              }),
            }
          );
          const comparisonData = await response.json();
          setComparisonData(comparisonData);
        } catch (err) {
          console.error("비교 요청 오류:", err);
        }
      };
      fetchComparison();
    }
  }, [selectedCourses]);

  useEffect(() => {
    if (selectedCourses.length === 2) {
      const fetchAIComparison = async () => {
        try {
          const lectureId1 = selectedCourses[0].id;
          const lectureId2 = selectedCourses[1].id;
          const response = await fetch(
            "http://13.209.165.107:8080/api/comparison/detail",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                lectureId1,
                lectureId2,
              }),
            }
          );
          const comparisonAIData = await response.json();
          setComparisonAIData(comparisonAIData);
        } catch (err) {
          console.error("비교 요청 오류:", err);
        }
      };
      fetchAIComparison();
    }
  }, [selectedCourses]);

  const handlePlusButtonClick = (course) => {
    setSelectedCourses((prevSelectedCourses) => {
      if (prevSelectedCourses.includes(course)) {
        return prevSelectedCourses.filter((c) => c !== course);
      } else if (prevSelectedCourses.length < 2) {
        return [...prevSelectedCourses, course];
      }
      return prevSelectedCourses;
    });
  };
  const filteredCourses = getFilteredData();

  const handleCompareButtonClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const filteredAIresult = (AIresult) => {
    const parsedResult = JSON.parse(AIresult.comparisonResult);
    return parsedResult.choices[0].message.content;
  };

  return (
    <>
      <Header />
      <ListBody>
        <Between>
          <div className="searchquery"> &quot{query}&quot 검색결과</div>
          <div className="right">
            <div>{selectedCourses.length}/2</div>
            <CompareButton
              $show={selectedCourses.length === 2}
              onClick={handleCompareButtonClick}
            >
              강좌 비교하기
            </CompareButton>
          </div>
        </Between>
        {showModal && (
          <ModalBackdrop onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <div>
                {comparisonData.lectures.length > 0 ? (
                  <>
                    <CompareGrid>
                      {comparisonData.lectures.map((lecture, index) => (
                        <ModalComparesimple key={index}>
                          <div className="title">{lecture.title}</div>
                          <img
                            className="compareimg"
                            src={lecture.thumbnail}
                            alt="thumbnail"
                          />
                          <div className="line1">
                            <div>{lecture.students}명</div>
                            <div className="right">
                              <StarRating rate={lecture.score} />
                              <div>{lecture.score}</div>
                            </div>
                          </div>
                          <div className="price">{lecture.price}원</div>
                        </ModalComparesimple>
                      ))}
                    </CompareGrid>
                    <ModalCompareAI>
                      <div className="Result">CodeReview 추천 결과</div>
                      <div>
                        {comparisonAIData &&
                        comparisonAIData.comparisonResult ? (
                          filteredAIresult(comparisonAIData)
                        ) : (
                          <p>AI 비교 데이터를 불러오는 중...</p>
                        )}
                      </div>
                    </ModalCompareAI>
                  </>
                ) : (
                  <>
                    <p>비교 데이터를 불러올 수 없습니다.</p>
                  </>
                )}
              </div>
              <XButton src="/xbutton.png" onClick={closeModal} />
            </ModalContent>
          </ModalBackdrop>
        )}
        {filteredCourses.length > 0 ? (
          <Course>
            {filteredCourses.map((courses, index) => (
              <div key={index}>
                <ImageButtonWrapper>
                  <ImageButton {...courses} />
                  <PlusButton
                    src="/plusbutton.png"
                    alt="plus"
                    $isSelected={selectedCourses.includes(courses)}
                    $maxSelectedReached={selectedCourses.length >= 2}
                    onClick={() => handlePlusButtonClick(courses)}
                  />
                </ImageButtonWrapper>
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
