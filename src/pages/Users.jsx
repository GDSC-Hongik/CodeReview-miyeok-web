import styled from "styled-components";
import Header from "../components/Header.jsx";
import StarRating from "../components/StarRating.jsx";
import { useState, useEffect } from "react";

const Br = styled.div`
  padding-top: 80px;
`;

const Br2 = styled.div`
  padding-top: 40px;
`;

const UserInfoBox = styled.section`
  height: 150px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  background: linear-gradient(to right, #2c2c2c, gray);
`;

const UserPic = styled.img`
  height: 70px;
  width: 70px;
  margin-left: 10%;
  border-radius: 50%;
  border: 1px solid gray;
  margin-right: 50px;
`;

const UserInfo = styled.div`
  display: flex;
  height: 80px;
  gap: 10px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  height: 50px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;

  .white {
    color: white;
  }
`;

const UserName = styled.div`
  font-size: 24px;
  color: whitesmoke;
  margin-bottom: 10px;
  font-weight: bold;
`;

const ReviewerTag = styled.div`
  border: 1px solid #b4f10e;
  background-color: #b4f10e;
  border-radius: 14px;
  width: 70px;
  height: 30px;
  padding: 5px 5px;
  font-size: 14px;
`;

const SectionTitle = styled.h3`
  margin-top: 60px;
  margin-bottom: 30px;
  margin-left: 10%;
  width: 80%;
  font-size: 20px;
  font-weight: bold;
`;

const CourseListWrapper = styled.div`
  overflow: hidden;
  max-height: ${({ isExpanded }) => (isExpanded ? "1000px" : "320px")};
  min-height: ${({ isExpanded }) => (isExpanded ? "250px" : "150px")};
  transition: max-height 0.5s ease-in-out, min-height 0.5s ease-in-out;
`;

const CourseList = styled.div`
  width: 80%;
  margin-left: 10%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const CourseCard = styled.div`
  width: 95%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h4 {
    font-weight: bold;
  }
`;

const CourseImage = styled.img`
  border: 1px solid gray;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 5px;
`;

const ToggleButton = styled.button`
  display: block;
  margin: 40px auto;
  margin-bottom: 50px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ToggleImage = styled.img`
  width: 160px;
  height: 32px;
  transition: transform 0.3s ease-in-out;

  ${({ isExpanded }) => isExpanded && "transform: rotate(180deg);"}
`;

const ReviewList = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const ReviewItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  padding-bottom: 50px;
  padding-top: 50px;
  background: white;
  border-bottom: 1px solid gray;

  &:last-child {
    border-bottom: none; // 마지막 리뷰는 구분선 제거
  }
`;

const ReviewContent = styled.div`
  display: flex;
`;

const ReviewerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 10px;
`;

const LectureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  margin-right: 10%;
  gap: 15px;
`;

const LectureImage = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: 5px;
`;

const LectureTitle = styled.div`
  font-size: 16px;
`;

const StarAndlike = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ReviewerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ReviewerNameAndPlatForm = styled.h4`
  margin: 0;
`;

const Rating = styled.div`
  color: gold;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
  margin-bottom: 90px;
`;

const PageButton = styled.button`
  background-color: white;
  border: none;
  color: gray;
  cursor: pointer;

  &:hover {
    color: black;
    font-weight: bold;
  }

  ${({ active }) =>
    active &&
    `
    color: black;
    font-weight: bold;
  `}
`;

const Users = () => {
  const PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [dummyCourses, setDummyCourses] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);
  const [myReview, setMyReview] = useState([]);
  const [myCourse, setMyCourse] = useState([]);
  const totalPages = Math.ceil(dummyCourses.length / PER_PAGE);
  const startIndex = (currentPage - 1) * PER_PAGE;
  const selectedReviews = myReview.slice(startIndex, startIndex + PER_PAGE);

  useEffect(() => {
    const fetchFavoriteCourses = async () => {
      try {
        const response = await fetch(
          "http://13.209.165.107:8080/api/favorite/3"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch favorite courses");
        }
        const data = await response.json();
        setDummyCourses(data);
      } catch (error) {
        console.error("Error fetching favorite courses:", error);
      }
    };

    fetchFavoriteCourses();
  }, []);

  useEffect(() => {
    const fetchMyReview = async () => {
      try {
        const response = await fetch(
          "http://13.209.165.107:8080/api/3/mypage/review/list"
        );
        if (!response.ok) {
          throw new Error("리뷰 오류!");
        }
        const data = await response.json();
        setMyReview(data);
      } catch (error) {
        console.error("리뷰 오류: :", error);
      }
    };

    fetchMyReview();
  }, []);

  useEffect(() => {
    const fetchMyCourse = async () => {
      try {
        const response = await fetch(
          "http://13.209.165.107:8080/api/1/mypage/course/list"
        );
        if (!response.ok) {
          throw new Error("리뷰 오류!");
        }
        const data = await response.json();
        setMyCourse(data);
      } catch (error) {
        console.error("리뷰 오류: :", error);
      }
    };

    fetchMyCourse();
  }, []);

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(4);
    } else {
      setVisibleCount(dummyCourses.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Header />
      <Br></Br>
      <UserInfoBox>
        <UserPic src="/userProfile.png"></UserPic>
        <UserInfoContainer>
          <UserInfo>
            <UserName>윤장현</UserName>
            <ReviewerTag>Reviewer</ReviewerTag>
          </UserInfo>
          <p className="white">안녕하세요! 코딩하는남자 윤장현입니당</p>
        </UserInfoContainer>
      </UserInfoBox>
      <SectionTitle>즐겨찾기한 강좌</SectionTitle>
      <CourseListWrapper isExpanded={isExpanded}>
        <CourseList>
          {dummyCourses.slice(0, visibleCount).map((course, index) => (
            <CourseCard key={index}>
              <CourseImage src={course.thumbnail} alt={course.title} />
              <h4>{course.title}</h4>
              <p>{course.instructorName}</p>
            </CourseCard>
          ))}
        </CourseList>
      </CourseListWrapper>
      <ToggleButton onClick={handleToggle}>
        <ToggleImage
          src={isExpanded ? "/moreinfoarrow.png" : "/moreinfoarrow.png"}
          alt="Toggle"
          isExpanded={isExpanded}
        />
      </ToggleButton>
      <Br2></Br2>
      <SectionTitle>리뷰 히스토리</SectionTitle>
      <ReviewList>
        {selectedReviews.map((review, index) => (
          <ReviewItem key={index}>
            <LectureWrapper>
              <LectureImage
                src={myCourse[index]?.thumbnail || "/example.png"}
                alt={review.reviewId}
              />
              <LectureTitle>
                {myCourse[index]?.title || "김영한의 실전 자바 - 기본편"}
              </LectureTitle>
            </LectureWrapper>
            <ReviewContent>
              <ReviewerImage src={"/userProfile.png"} alt={review.reviewId} />
              <ReviewerInfo>
                <ReviewerNameAndPlatForm>
                  윤장현 | 인프런
                </ReviewerNameAndPlatForm>
                <StarAndlike>
                  <StarRating rate={review.score}></StarRating>
                  <Rating>{review.score}</Rating>
                </StarAndlike>

                <p>{review.content}</p>
              </ReviewerInfo>
            </ReviewContent>
          </ReviewItem>
        ))}
      </ReviewList>

      <Pagination>
        <PageButton onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
          {"<"}
        </PageButton>
        {[...Array(totalPages)].map((_, i) => (
          <PageButton
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            active={currentPage === i + 1}
          >
            {i + 1}
          </PageButton>
        ))}
        <PageButton
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        >
          {">"}
        </PageButton>
      </Pagination>
    </>
  );
};

export default Users;
