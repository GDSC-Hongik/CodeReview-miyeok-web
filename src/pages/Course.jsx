import { useAtom } from "jotai";
import { isLoginAtom } from "../atom";
import { useState } from "react";
import Header from "../components/Header.jsx";
import ReviewBox from "../components/ReviewBox.jsx";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Br = styled.div`
  padding-top: 80px;
`;

const LectureName = styled.section`
  height: 150px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  background: linear-gradient(to right, #2c2c2c, gray);
  padding: 10px 20px;
`;

const LecturePic = styled.img`
  height: 100px;
  width: 150px;
  margin-left: 10%;
  border-radius: 5px;
  border: 1px solid gray;
  margin-right: 30px;
`;

const LectureInfo = styled.div`
  display: flex;
  height: 80px;
  flex-direction: column;
  max-width: 300px;
  justify-content: space-between;
`;

const LectureTitle = styled.div`
  font-size: 24px;
  color: whitesmoke;
  margin-bottom: 10px;
  font-weight: bold;
`;

const LecturerAndPlatform = styled.div`
  display: flex;
  gap: 15px;
`;

const Lecturer = styled.div`
  border: 1px solid lightgray;
  background-color: lightgray;
  border-radius: 14px;
  padding: 5px;
  font-size: 14px;
`;

const Platform = styled.div`
  border: 1px solid #b4f10e;
  background-color: #b4f10e;
  border-radius: 14px;
  padding: 5px 5px;
  font-size: 14px;
`;

const BookmarkAndReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: auto;
  margin-right: 10%;
`;

const BookmarkButton = styled.button`
  border: 1px solid whitesmoke;
  background-color: gray;
  color: whitesmoke;
  height: 40px;
  width: 120px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const ReviewButton = styled.button`
  border: 1px black;
  background-color: black;
  color: whitesmoke;
  height: 40px;
  width: 120px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const LectureData = styled.section`
  display: flex;
  height: 300px;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
  border-bottom: 1px solid lightgray;
`;

const LecturePic2 = styled.img`
  height: 200px;
  width: 300px;
  margin-right: 50px;
`;

const LectureIntro = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const MoreInfoButton = styled.button`
  height: 40px;
  width: 160px;
  border: 1px black;
  background-color: black;
  color: whitesmoke;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const LectureReviewInfo = styled.div`
  display: flex;
  height: 70px;
  width: 80%;
  margin-top: 50px;
  margin-left: 10%;
  align-items: center;
  justify-content: space-between;
`;

const LectureReviewIntro = styled.div`
  display: flex;
  height: 70px;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 24px;
  }

  body {
    font-size: 16px;
  }
`;

const RangeSelect = styled.select`
  width: 85px;
  height: 30px;
  padding: 5px;
  font-size: 16px;
  border: 1px solid gray;
  border-radius: 16px;
  background-color: whitesmoke;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: whitesmoke;
  }
`;

const LectureReview = styled.section`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin: 30px auto;
  justify-content: center;
`;

const dummyReviews = [
  ...Array(15)
    .fill()
    .map((_, i) => ({
      reviewer: `user${i + 1}`,
      reviewerImage: "/userProfile.png",
      rating: Math.floor(Math.random() * 5) + 1,
      comment: `이것은 ${i + 1}번째 리뷰입니다.`,
    })),
];

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
  border: 1px white;
  color: gray;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px white;
    color: black;
    font-weight: bold;
  }

  ${({ active }) =>
    active &&
    `
    background-color: white;
    border: 1px white;
    color: black;
  `}
`;

const DoReview = styled.section`
  display: flex;
  width: 80%;
  margin: 10%;
  justify-content: space-between;
`;

const DoReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h1 {
    font-weight: bold;
    font-size: 36px;
  }
`;

const OnlyForUser = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 40px;
  padding: 15px;
  margin-right: 5%;
`;

const DoReviewSection = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-size: 20px;
    font-weight: bold;
  }
`;

const ReviewTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  textarea {
    height: 30px;
    padding: 10px;
    font-size: 16px;
  }
`;

const GoodReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  textarea {
    height: 100px;
    padding: 10px;
    font-size: 16px;
  }
`;

const BadReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  textarea {
    height: 100px;
    padding: 10px;
    font-size: 16px;
  }
`;

const ReviewUploadButton = styled.button`
  border: 1px black;
  background-color: black;
  color: whitesmoke;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const ReviewForm = () => {
  const [review, setReview] = useState({
    title: "",
    good: "",
    bad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("리뷰 작성 완료", review);
    alert("리뷰가 등록되었습니다!");
  };

  return (
    <DoReviewSection>
      <h2>별점 매기기 만들어야함</h2>
      <ReviewTitle>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={review.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
        />
      </ReviewTitle>
      <GoodReview>
        <label>좋은 점</label>
        <textarea
          name="good"
          value={review.good}
          onChange={handleChange}
          placeholder="좋았던 점을 입력하세요"
        />
      </GoodReview>
      <BadReview>
        <label>아쉬운 점</label>
        <textarea
          name="bad"
          value={review.bad}
          onChange={handleChange}
          placeholder="아쉬웠던 점을 입력하세요"
        />
      </BadReview>
      <ReviewUploadButton onClick={handleSubmit}>
        리뷰 등록하기
      </ReviewUploadButton>
    </DoReviewSection>
  );
};

const Course = () => {
  const [isLogin] = useAtom(isLoginAtom);
  const PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyReviews.length / PER_PAGE);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const selectedReviews = dummyReviews.slice(startIndex, startIndex + PER_PAGE);

  return (
    <>
      <Header />
      <Br></Br>
      <LectureName>
        <LecturePic src="/example.png"></LecturePic>
        <LectureInfo>
          <LectureTitle>강의명</LectureTitle>
          <LecturerAndPlatform>
            <Lecturer>강사명: 홍길동</Lecturer>
            <Platform>플랫폼: 인프런</Platform>
          </LecturerAndPlatform>
        </LectureInfo>
        <BookmarkAndReview>
          <BookmarkButton>즐겨찾기</BookmarkButton>
          <ReviewButton>강의평가하기</ReviewButton>
        </BookmarkAndReview>
      </LectureName>
      <LectureData>
        <LecturePic2 src="example.png"></LecturePic2>
        <LectureIntro>
          <h1>강의 정보</h1>
          <div>간단한 강의 소개</div>
          <MoreInfoButton>자세히 보기</MoreInfoButton>
        </LectureIntro>
      </LectureData>
      <LectureReviewInfo>
        <LectureReviewIntro>
          <h2>강의 리뷰</h2>
          <body>해당 강좌에 대한 다른 리뷰어들의 평가를 둘러봐요!</body>
        </LectureReviewIntro>
        <RangeSelect>
          <option value="recommend">추천순</option>
          <option value="latest">최신순</option>
        </RangeSelect>
      </LectureReviewInfo>
      <LectureReview>
        {selectedReviews.map((review, index) => (
          <ReviewBox
            key={index}
            reviewer={review.reviewer}
            reviewerImage={review.reviewerImage}
            rating={review.rating}
            comment={review.comment}
          />
        ))}
      </LectureReview>

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
      <DoReview>
        <DoReviewInfo>
          <h1>강의 평가하기</h1>
          <div>강의에 대한 평가를 다른 사람들과 공유하기</div>
        </DoReviewInfo>
        {isLogin ? (
          <>
            <ReviewForm />
          </>
        ) : (
          <>
            <OnlyForUser>회원 전용 기능입니다.</OnlyForUser>
          </>
        )}
      </DoReview>
      <div>코스</div>
      <Outlet />
    </>
  );
};

export default Course;
