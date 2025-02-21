import styled from "styled-components";
import StarRating from "./StarRating";
const ReviewContainer = styled.section`
  height: 250px;
  width: 100%;
  padding: 15px;
  border: 1px solid #f6f6f6;
  border-radius: 5px;
  background-color: #f6f6f6;
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

const ReviewText = styled.p`
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ReviewBox = ({
  reviewer,
  reviewerImage,
  rating,
  comment,
  onClick,
  like,
  hate,
}) => {
  return (
    <ReviewContainer
      onClick={onClick}
      style={{
        cursor: "pointer",
      }}
    >
      <UserImage src={reviewerImage} alt="Reviewer" />
      <ReviewInfo>
        <Reviewer>{reviewer}</Reviewer>
        <StarAndlike>
          <StarRating rate={rating} />
          <div className="like">
            <div>
              <img src="/good.png" alt="예" width="10" />
              {like}
            </div>
            <div>
              <img src="/bad.png" alt="예" width="10" />
              {hate}
            </div>
          </div>
        </StarAndlike>
        <ReviewText>{comment}</ReviewText>
      </ReviewInfo>
    </ReviewContainer>
  );
};

export default ReviewBox;
