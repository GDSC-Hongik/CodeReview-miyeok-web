import styled from "styled-components";
import Header from "../components/Header.jsx";
import { useState } from "react";

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

const dummyReviews = [
  ...Array(10)
    .fill()
    .map((_, i) => ({
      reviewer: `user${i + 1}`,
      LectureImage: "/CodeReview.png",
      ReviewerImage: "/userProfile.png",
      PlatForm: "인프런",
      rating: "★★★★★",
      comment: `이것은 ${i + 1}번째 리뷰입니다.`,
      course: {
        title: "Python 입문",
        image: "/python-logo.png",
        instructor: "인프런",
      },
    })),
];

const Users = () => {
  const PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyReviews.length / PER_PAGE);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const selectedReviews = dummyReviews.slice(startIndex, startIndex + PER_PAGE);

  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(4);
    } else {
      setVisibleCount(dummyCourses.length);
    }
    setIsExpanded(!isExpanded);
  };

  const dummyCourses = [
    {
      id: 1,
      title: "리액트 기초부터 실전까지",
      instructorName: "김영한",
      thumbnail: "/CodeReview.png",
    },
    {
      id: 2,
      title: "자바스크립트 완벽 가이드",
      instructorName: "이동욱",
      thumbnail: "/CodeReview.png",
    },
    {
      id: 3,
      title: "Node.js 백엔드 마스터",
      instructorName: "홍길동",
      thumbnail: "https://cdn.inflearn.com/public/courses/332508/cover.png",
    },
    {
      id: 4,
      title: "데이터베이스 설계와 SQL",
      instructorName: "박민수",
      thumbnail: "https://cdn.inflearn.com/public/courses/332509/cover.png",
    },
    {
      id: 5,
      title: "알고리즘 문제 해결",
      instructorName: "정우성",
      thumbnail: "https://cdn.inflearn.com/public/courses/332510/cover.png",
    },
    {
      id: 6,
      title: "HTML & CSS 마스터 과정",
      instructorName: "김지연",
      thumbnail: "https://cdn.inflearn.com/public/courses/332511/cover.png",
    },
  ];

  return (
    <>
      <Header />
      <Br></Br>
      <UserInfoBox>
        <UserPic src="/userProfile.png"></UserPic>
        <UserInfoContainer>
          <UserInfo>
            <UserName>User1</UserName>
            <ReviewerTag>Reviewer</ReviewerTag>
          </UserInfo>
          <p>안녕하세요! 파워리뷰어가 되고 싶습니다!</p>
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
              <LectureImage src={review.LectureImage} alt={review.reviewer} />
              <LectureTitle>{review.course.title}</LectureTitle>
            </LectureWrapper>
            <ReviewContent>
              <ReviewerImage src={review.ReviewerImage} alt={review.reviewer} />
              <ReviewerInfo>
                <ReviewerNameAndPlatForm>
                  {review.reviewer} | {review.PlatForm}
                </ReviewerNameAndPlatForm>
                <Rating>{review.rating}</Rating>
                <p>{review.comment}</p>
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
