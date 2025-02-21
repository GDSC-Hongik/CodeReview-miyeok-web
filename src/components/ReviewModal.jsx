import styled from "styled-components";
import StarRating from "./StarRating";
import { useState } from "react";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  height: 50%;
`;

const CloseButton = styled.button`
  font-size: 20px;
  background: none;
  color: black;
  border: none;
  margin-bottom: auto;
  cursor: pointer;
`;

const ModalReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const ModalReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    font-weight: bold;
    font-size: 16px;
  }
`;

const StarAndlike = styled.div`
  display: flex;

  .like {
    display: flex;
    padding-left: 10px;
    align-items: center;
    gap: 15px;
  }

  .like div {
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const ModalReviewReact = styled.div`
  font-size: 14px;
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const YesButton = styled.button`
  height: 20px;
  width: 50px;
  justify-content: center;
  padding: 1px;
  border-radius: 10px;
  border: 1px solid gray;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const NoButton = styled.button`
  height: 20px;
  width: 80px;
  justify-content: center;
  padding: 1px;
  border-radius: 10px;
  border: 1px solid gray;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const ReviewModal = ({ review, onClose }) => {
  const [currentLike, setCurrentLike] = useState(review.like);
  const [currentDislike, setCurrentDislike] = useState(review.hate);

  const handleLikeClick = async () => {
    try {
      const response = await fetch(
        `http://13.209.165.107:8080/api/review/likes/${review.reviewId}?userId=3&likeType=LIKE`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update like");
      }

      const data = await response.json();
      console.log("Like updated successfully:", data);

      // 응답 데이터에서 likeCount를 받아와서 상태 업데이트
      setCurrentLike(data.likeCount);
    } catch (error) {
      console.error("Like update failed:", error);
      alert("한 리뷰에는 좋아요/싫어요 중 하나만 달 수 있습니다.");
    }
  };

  const handleDislikeClick = async () => {
    try {
      const response = await fetch(
        `http://13.209.165.107:8080/api/review/likes/${review.reviewId}?userId=3&likeType=DISLIKE`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update dislike");
      }

      const data = await response.json();
      console.log("Dislike updated successfully:", data);
      setCurrentDislike(data.dislikeCount);
    } catch (error) {
      console.error("Dislike update failed:", error);
      alert("한 리뷰에는 좋아요/싫어요 중 하나만 달 수 있습니다.");
    }
  };

  if (!review) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalReviewContainer>
          <img
            src={"/userProfile.png"}
            alt="Reviewer"
            width="40"
            height="40"
            style={{ objectFit: "cover", width: "40px", height: "40px" }}
          />
          <ModalReviewInfo>
            <h2>{review.reviewer}</h2>
            <StarAndlike>
              <StarRating rate={review.rating} />
              <div className="like">
                <div>
                  <img src="/good.png" alt="예" width="12" />
                  {currentLike}
                </div>
                <div>
                  <img src="/bad.png" alt="예" width="12" />
                  {currentDislike}
                </div>
              </div>
            </StarAndlike>
            <p
              style={{
                whiteSpace: "normal",
                wordWrap: "break-word",
                maxWidth: "90%",
                textAlign: "left",
              }}
            >
              {review.comment}
            </p>
            <ModalReviewReact>
              <div>해당 리뷰가 도움이 되나요?</div>
              <YesButton onClick={handleLikeClick}>
                예 <img src="/good.png" alt="예" width="10" />
              </YesButton>
              <NoButton onClick={handleDislikeClick}>
                아니요 <img src="/bad.png" alt="예" width="10" />
              </NoButton>
            </ModalReviewReact>
          </ModalReviewInfo>
        </ModalReviewContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ReviewModal;
