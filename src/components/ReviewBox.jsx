import styled from "styled-components";

const ReviewContainer = styled.section`
  height: 250px;
  width: 100%;
  padding: 15px;
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: #e8e8e8;
  display: flex;
  align-content: center;
  gap: 10px;
`;

const UserImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;

const ReviewInfo = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  gap: 10px;
`;

const Reviewer = styled.div`
  font-weight: bold;
`;

const ReviewRate = styled.div`
  font-size: 16px;
`;

const ReviewText = styled.p`
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ReviewReact = styled.div`
  font-size: 14px;
  display: flex;
  gap: 15px;
  margin-top: auto;
  margin-bottom: 5px;
`;

const YesButton = styled.button`
  height: 20px;
  width: 50px;
  justify-content: center;
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
  border-radius: 10px;
  border: 1px solid gray;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

const ReviewBox = ({ reviewer, reviewerImage, rating, comment }) => {
  return (
    <ReviewContainer>
      <UserImage src={reviewerImage} alt="Reviewer" />
      <ReviewInfo>
        <Reviewer>{reviewer}</Reviewer>
        <ReviewRate>⭐ {rating}</ReviewRate>
        <ReviewText>{comment}</ReviewText>
        <ReviewReact>
          <div>해당 리뷰가 도움이 되나요?</div>
          <YesButton>예 👍</YesButton>
          <NoButton>아니요 👎</NoButton>
        </ReviewReact>
      </ReviewInfo>
    </ReviewContainer>
  );
};

export default ReviewBox;
