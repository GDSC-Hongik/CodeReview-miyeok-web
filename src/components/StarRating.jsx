import styled from "styled-components";

const StarRate = styled.div`
  .star-ratings {
    position: relative;
    display: inline-block;
    font-size: 15px;
    color: transparent;
    unicode-bidi: bidi-override;
  }

  .star-ratings-fill {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    color: gold; /* 채워진 별 색상 */
  }

  .star-ratings-base {
    color: #aaa9a9; /* 빈 별 색상 */
  }
`;

const StarRating = ({ rate }) => {
  const ratingToPercent = {
    width: `${(rate / 5) * 100}%`,
  };

  return (
    <StarRate>
      <div className="star-ratings">
        <div className="star-ratings-fill" style={ratingToPercent}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <div className="star-ratings-base">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
    </StarRate>
  );
};

export default StarRating;
