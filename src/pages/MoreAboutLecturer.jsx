import styled from "styled-components";
import Header from "../components/Header.jsx";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const Br = styled.div`
  padding-top: 80px;
`;

const Container = styled.div`
  width: 80%;
  margin-left: 10%;
  padding: 20px;
`;

const LecturerProfile = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  border: 2px solid rgb(220, 220, 220);
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

const LecturerData = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Name = styled.h2`
  font-weight: bold;
  margin: 0;
`;

const DescriptionWrapper = styled.div`
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const Description = styled.div`
  margin: 5px 0;
  color: gray;
  white-space: pre-line;
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
  margin-bottom: 30px;

  h3 {
    font-weight: bold;
    width: 100px;
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
  position: relative;
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

const ShareImage = styled.img`
  width: 25px;
  object-fit: cover;
  filter: grayscale(100%) brightness(0);
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const MoreAboutLecturer = () => {
  const { lectureId } = useParams();
  const [lecturerInfo, setLecturerInfo] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("4.5em");
  const descriptionRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const decodedCourseName = decodeURIComponent(lectureId);
      console.log("Decoded Course Name:", decodedCourseName);

      try {
        const lecturerResponse = await fetch(
          `http://13.209.165.107:8080/api/instructor?name=${decodedCourseName}`
        );
        const lecturerData = await lecturerResponse.json();
        setLecturerInfo(lecturerData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (lectureId) {
      fetchData();
    }
  }, [lectureId]);
  useEffect(() => {
    if (!descriptionRef.current) return;

    requestAnimationFrame(() => {
      setMaxHeight(
        isExpanded ? `${descriptionRef.current.scrollHeight}px` : "4.5em"
      );
    });
  }, [isExpanded]);
  const fullDescription = lecturerInfo?.instruction || "설명이 없습니다.";

  if (!lecturerInfo) {
    return <p>로딩 중...{console.log(lecturerInfo)}</p>;
  }

  return (
    <>
      <Header />
      <Br />
      <Container>
        <LecturerProfile>
          <ProfileImage
            src={lecturerInfo.lectures[0].thumbnail || "/default-profile.png"}
            alt="Lecturer"
          />
          <LecturerData>
            <Name>{lecturerInfo.name || "강사명 없음"}</Name>
            <DescriptionWrapper ref={descriptionRef} style={{ maxHeight }}>
              <Description>{fullDescription}</Description>
            </DescriptionWrapper>
            <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "접기" : "자세히 보기"}
            </ToggleButton>
          </LecturerData>
        </LecturerProfile>
        <LectureListContainer>
          <h3>{lecturerInfo.name}님의 다른 강의</h3>
          <LectureList>
            {lecturerInfo.lectures?.map((lecture) => (
              <LectureItem key={lecture.id}>
                <LectureImage
                  src={lecture.thumbnail || "/default-image.png"}
                  alt="Lecture"
                />
                <div>
                  <h4>{lecture.title}</h4>
                  <p>{lecture.summary || "설명이 없습니다."}</p>
                </div>
                <ShareImage src="/shareicon.png" onClick={lecture.link} />
              </LectureItem>
            ))}
          </LectureList>
        </LectureListContainer>
      </Container>
    </>
  );
};

export default MoreAboutLecturer;
