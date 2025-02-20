import styled from "styled-components";
import Header from "../components/Header.jsx";
import { useState } from "react";

const Br = styled.div`
  padding-top: 80px;
`;

const UserInfoBox = styled.section`
  height: 150px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  background: linear-gradient(to right, #2c2c2c, gray);
  padding: 10px 20px;
`;

const UserPic = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 10%;
  border-radius: 50%;
  border: 1px solid gray;
  margin-right: 30px;
`;

const UserInfo = styled.div`
  display: flex;
  height: 80px;
  gap: 5px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  gap: 20px;
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
  margin-top: 30px;
  margin-left: 10%;
  width: 80%;
  font-size: 20px;
  font-weight: bold;
`;

const CourseList = styled.div`
  width: 80%;
  margin-left: 10%;
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 10px 0;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 250px;
  min-width: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ReviewList = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReviewItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: white;
`;

const ReviewContent = styled.div`
  flex: 1;
  margin-left: 15px;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ReviewerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ReviewerName = styled.h4`
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
  padding: 5px 10px;
  background-color: white;
  border: 1px solid gray;
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
      reviewerImage: "/userProfile.png",
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
      <CourseList>
        {dummyReviews.map((review, index) => (
          <CourseCard key={index}>
            <CourseImage src={review.course.image} alt={review.course.title} />
            <h4>{review.course.title}</h4>
            <p>{review.course.instructor}</p>
          </CourseCard>
        ))}
      </CourseList>

      <SectionTitle>리뷰 히스토리</SectionTitle>
      <ReviewList>
        {selectedReviews.map((review, index) => (
          <ReviewItem key={index}>
            <ReviewerImage src={review.reviewerImage} alt={review.reviewer} />
            <ReviewContent>
              <ReviewerInfo>
                <ReviewerName>{review.reviewer}</ReviewerName>
                <Rating>{review.rating}</Rating>
              </ReviewerInfo>
              <p>{review.comment}</p>
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
