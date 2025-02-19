import styled from "styled-components";

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
  if (!review) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalReviewContainer>
          <img
            src={review.reviewerImage}
            alt="Reviewer"
            width="40"
            height="40"
            style={{ objectFit: "cover", width: "40px", height: "40px" }}
          />
          <ModalReviewInfo>
            <h2>{review.reviewer}</h2>
            <p>⭐ {review.rating}</p>
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
              <YesButton>
                예 <img src="/good.png" alt="예" width="10" />
              </YesButton>
              <NoButton>
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
