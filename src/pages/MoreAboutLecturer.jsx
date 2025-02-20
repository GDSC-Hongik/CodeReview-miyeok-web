import styled from "styled-components";
import Header from "../components/Header.jsx";
import { useState } from "react";

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

const Container = styled.div`
  width: 80%;
  margin-left: 10%;
  padding: 20px;
`;

const LecturerProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const LecturerData = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  font-weight: bold;
  margin: 0;
`;

const Description = styled.div`
  margin: 5px 0;
  color: gray;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isExpanded ? "unset" : "3")};
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const ToggleButton = styled.button`
  background-color: black;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;
  font-size: 14px;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const LectureListContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  transition: margin-top 0.3s ease-in-out;

  h3 {
    font-weight: bold;
    width: 80px;
  }
`;

const LectureList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LectureItem = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  gap: 20px;
  align-items: center;
  background: #f8f8f8;
  padding: 15px;
  border-radius: 8px;
`;

const LectureImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: contain;
  margin-right: 15px;
`;

const MoreAboutLecturer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullDescription = `
    - 교육자
    - 전: 우아한형제들 기술이사, 카카오, SK 츨래닛
    - 저서: 자바 ORM 표준 JPA 프로그래밍

    진짜 실무에 필요한 제대로 된 개발자가 될 수 있도록, 교육하는 것이 저의 목표입니다.

    저의 개발 인생 이야기

    EO 인터뷰 영상
    - 한국 개발자 최고 1타강사 김영한의 인생[1부]
    - 한국 개발자 최고 1타강사 김영한의 인생[2부]

    개발바닥-시골 청년 개발왕이 되다
    - 1편
    - 2편
    - 3편

    취업과 이직에 대한 고민 해결
    - 인프콘 - 어느날 고민 많은 주니어 개발자가 찾아왔다. 성장과 취업, 이직 이야기
    - 인프런 최초 20만 명 달성 기념 Q&A
    - 인프런 최초 30만 명 달성 기념 Q&A
  `;

  const isLongText = fullDescription.split("\n").length > 3; // 3줄 이상인지 체크

  const lectures = [
    {
      id: 1,
      title: "김영환의 자바 입문 - 코드로 시작하는 자바 첫걸음",
      image: "/CodeReviewLogo.png",
    },
    {
      id: 2,
      title: "김영환의 자바 입문 - 코드로 시작하는 자바 첫걸음",
      image: "/CodeReviewLogo.png",
    },
    {
      id: 3,
      title: "김영환의 자바 입문 - 코드로 시작하는 자바 첫걸음",
      image: "/CodeReviewLogo.png",
    },
  ];

  return (
    <>
      <Header />
      <Br />
      <LectureName>
        <LecturePic src="/CodeReviewLogo.png" />
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
      <Container>
        <LecturerProfile>
          <ProfileImage src="/CodeReviewLogo.png" alt="Lecturer" />
          <LecturerData>
            <Name>김영환</Name>
            <Description isExpanded={isExpanded}>{fullDescription}</Description>
            {isLongText && (
              <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "접기" : "자세히 보기"}
              </ToggleButton>
            )}
          </LecturerData>
        </LecturerProfile>
        <LectureListContainer>
          <h3>김영환님의 다른 강의</h3>
          <LectureList>
            {lectures.map((lecture) => (
              <LectureItem key={lecture.id}>
                <LectureImage src={lecture.image} alt="Lecture" />
                <div>
                  <h4>{lecture.title}</h4>
                  <p>코드를 따라하면서 손쉽게 자바를 배울 수 있습니다.</p>
                </div>
              </LectureItem>
            ))}
          </LectureList>
        </LectureListContainer>
      </Container>
    </>
  );
};

export default MoreAboutLecturer;
