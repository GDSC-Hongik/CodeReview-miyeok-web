import styled from "styled-components";

const ProductButton = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
    height: 210px;
    object-fit: cover;
    border-radius: 8px;
    @media (min-width: 1501px) and (max-width: 1920px) {
      width: 300px;
      height: 210px;
    }
    @media (min-width: 835px) and (max-width: 1500px) {
      width: 200px;
      height: 140px;
    }
    @media (min-width: 360px) and (max-width: 834px) {
      width: 100px;
      height: 70px;
    }
  }
`;

const ImageButton = ({ image }) => {
  return (
    <ProductButton>
      <img src={image} />
    </ProductButton>
  );
};

export default ImageButton;
