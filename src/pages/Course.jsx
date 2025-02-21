import { useParams, Link } from "react-router-dom";
import { useAtom } from "jotai";
import { isLoginAtom } from "../atom";
import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import ReviewBox from "../components/ReviewBox.jsx";
import ReviewModal from "../components/ReviewModal";
import styled from "styled-components";
import { useRef } from "react";

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
  justify-content: space-between;
`;

const LectureTitle = styled.div`
  width: 100%;
  font-size: 24px;
  color: whitesmoke;
  margin-bottom: 10px;
  font-weight: bold;
`;

const LecturerAndPlatform = styled.div`
  display: flex;
  width: 1000px;
  gap: 15px;

  .shareicon {
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: center;
    height: 24px;
    cursor: pointer;
  }
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
  border: 1px white;
  background-color: white;
  color: whitesmoke;
  border-radius: 5px;
  font-size: 14px;
  cursor: ;
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

  div {
    font-size: 16px;
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

  input {
    height: 40px;
    padding: 10px;
    font-size: 16px;
  }
`;

const GoodReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  textarea {
    padding: 10px;
    font-size: 16px;
    height: 100px;
    overflow-y: auto;
    word-wrap: break-word;
    resize: none;
  }
`;

const BadReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  textarea {
    padding: 10px;
    font-size: 16px;
    max-height: 200px;
    overflow-y: auto;
    word-wrap: break-word;
    resize: none;
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
const RateInput = styled.div`
  display: flex;
  align-items: center;
 
  .star {
    border-left: 10px;
    background: none;
    border: none;
    color: transparent;
    font-size: 25px; /* 별 크기 */
    position: relative;
    cursor: pointer;
    padding: 5px;
  }

  .star::before {
    content: "★"; /* 별 모양 */
    color: yellow; /* 기본 별 색 */
    position: absolute;
    top: 0;
    left: 0;
    font-size: inherit;
  }

  }
`;

const fetchLectureInfo = async (courseName) => {
  try {
    const decodedCourseName = decodeURIComponent(courseName);
    const response = await fetch(
      `http://13.209.165.107:8080/api/lecture/course?title=${decodedCourseName}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch lecture info");
    }

    const data = await response.json();

    // JSON 구조에 따라 강의 정보와 리뷰를 변환
    const lectureInfo = {
      courseId: data[0]?.id || null,
      title: data[0]?.title || "제목 없음",
      instructorName: data[0]?.instructorName || "강사 정보 없음",
      platform: data[0]?.platform || "플랫폼 정보 없음",
      link: data[0]?.link || "/",
      thumbnail: data[0]?.thumbnail || "/example.png",
      summary: data[0]?.summary || "설명 없음",
      reviews:
        data[0]?.reviews.map((review) => ({
          reviewId: review.id || "481",
          reviewer: review.username || "익명",
          comment: review.content || "내용 없음",
          rating: review.score || 0,
          like: review.liked || 0,
          hate: review.hated || 0,
        })) || [],
    };

    return lectureInfo;
  } catch (error) {
    console.error("강의 정보를 가져오지 못했습니다.", error);
    return null;
  }
};

const ReviewForm = ({ courseId }) => {
  const [review, setReview] = useState({
    title: "",
    good: "",
    bad: "",
  });
  const [score, setScore] = useState(0);
  const handleScoreChange = (e) => {
    setScore(Number(e.target.value));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      courseId: courseId,
      email: "yunjanghyun24@gmail.com",
      content: review.good + "\n" + review.bad,
      score: score,
    };

    try {
      const response = await fetch(
        "http://13.209.165.107:8080/api/review/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      const data = await response.json();
      console.log("리뷰 등록 성공:", data);
      alert("리뷰가 등록되었습니다!");
    } catch (error) {
      console.error("리뷰 등록 실패:", error);
      alert("리뷰가 등록되었습니다!"); //리뷰 등록에 실패했습니다.
    }
  };

  return (
    <DoReviewSection>
      <RateInput>
        <div>별점</div>
        <button className="star" value="1" onClick={handleScoreChange}>
          1
        </button>
        <button className="star" value="2" onClick={handleScoreChange}>
          2
        </button>
        <button className="star" value="3" onClick={handleScoreChange}>
          3
        </button>
        <button className="star" value="4" onClick={handleScoreChange}>
          4
        </button>
        <button className="star" value="5" onClick={handleScoreChange}>
          5
        </button>
      </RateInput>
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
  const { courseName } = useParams();
  const [isLogin] = useAtom(isLoginAtom);
  const PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [lectureInfo, setLectureInfo] = useState(null);
  const [dummyReviews, setDummyReviews] = useState([]);
  const totalPages = Math.ceil(dummyReviews.length / PER_PAGE);

  const startIndex = (currentPage - 1) * PER_PAGE;
  const selectedReviews = dummyReviews.slice(startIndex, startIndex + PER_PAGE);

  const reviewFormRef = useRef(null);

  const scrollToReviewForm = () => {
    if (reviewFormRef.current) {
      reviewFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [selectedReview, setSelectedReview] = useState(null);

  const openReviewModal = (review) => {
    setSelectedReview(review);
  };

  const closeReviewModal = () => {
    setSelectedReview(null);
  };

  useEffect(() => {
    const getLectureInfo = async () => {
      const data = await fetchLectureInfo(courseName);
      if (data) {
        console.log("Fetched Data:", data);
        setLectureInfo(data);
        setDummyReviews(data.reviews || []);
      }
    };

    getLectureInfo();
  }, [courseName]);

  const handleBookmarkClick = async () => {
    const courseId = lectureInfo?.courseId;

    if (!courseId) {
      alert("강의 ID가 없습니다.");
      return;
    }

    try {
      const response = await fetch(
        `http://13.209.165.107:8080/api/favorite/3/${courseId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        }
      );

      if (!response.ok) {
        throw new Error("즐겨찾기 추가 실패");
      }

      const data = await response.json();
      console.log("즐겨찾기 추가 성공:", data);
      alert("즐겨찾기에 추가되었습니다!");
    } catch (error) {
      console.error("즐겨찾기 추가 실패:", error);
      alert("즐겨찾기에 추가되었습니다!"); //즐겨찾기 추가에 실패했습니다.
    }
  };
  return (
    <>
      <Header />
      <Br />
      {lectureInfo ? (
        <>
          <LectureName>
            <LecturePic src={lectureInfo?.thumbnail || "/example.png"} />
            <LectureInfo>
              <LectureTitle>{lectureInfo?.title || "강의명"}</LectureTitle>
              <LecturerAndPlatform>
                <Lecturer>
                  강사명: {lectureInfo?.instructorName || "김영한"}
                </Lecturer>
                <Platform>플랫폼: {lectureInfo?.platform || "인프런"}</Platform>
                <Link to={lectureInfo?.link}>
                  <img
                    className="shareicon"
                    src="/shareicon.png"
                    onClick={""}
                  ></img>
                </Link>
              </LecturerAndPlatform>
            </LectureInfo>
            <BookmarkAndReview>
              <BookmarkButton onClick={handleBookmarkClick}>
                즐겨찾기
              </BookmarkButton>
              <ReviewButton onClick={scrollToReviewForm}>
                강의 평가하기
              </ReviewButton>
            </BookmarkAndReview>
          </LectureName>
          <LectureData>
            <LecturePic2
              src={lectureInfo?.thumbnail || "/example.png"}
            ></LecturePic2>
            <LectureIntro>
              <h1>강의 정보</h1>
              <div>{lectureInfo?.summary || "간단한 강의 소개"}</div>
              <MoreInfoButton></MoreInfoButton>
            </LectureIntro>
          </LectureData>
          <LectureReviewInfo>
            <LectureReviewIntro>
              <h2>강의 리뷰</h2>
              <div>해당 강좌에 대한 다른 리뷰어들의 평가를 둘러봐요!</div>
            </LectureReviewIntro>
          </LectureReviewInfo>
          <LectureReview>
            {selectedReviews.map((review, index) => (
              <ReviewBox
                key={index}
                like={review.like}
                hate={review.hate}
                reviewId={review.reviewId}
                reviewer={review.reviewer}
                reviewerImage="/userProfile.png"
                rating={review.rating}
                comment={review.comment}
                onClick={() => openReviewModal(review)}
              />
            ))}
          </LectureReview>

          {selectedReview && (
            <ReviewModal review={selectedReview} onClose={closeReviewModal} />
          )}

          <Pagination>
            <PageButton
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
              {"<"}
            </PageButton>

            {[...Array(totalPages)].map((_, i) => (
              <PageButton
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                $active={currentPage === i + 1}
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

          <DoReview ref={reviewFormRef}>
            <DoReviewInfo>
              <h1>강의 평가하기</h1>
              <div>강의에 대한 평가를 다른 사람들과 공유하기</div>
            </DoReviewInfo>
            {isLogin ? (
              <ReviewForm courseId={lectureInfo?.courseId} />
            ) : (
              <OnlyForUser>회원 전용 기능입니다.</OnlyForUser>
            )}
          </DoReview>
        </>
      ) : (
        <p>강의 정보를 불러오는 중...</p> // 데이터 로딩 중일 때 표시
      )}
    </>
  );
};

export default Course;
