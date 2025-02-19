import styled from "styled-components";

const ProductButton = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: calc(width * 0.7);
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ImageButton = ({ image, name }) => {
  const courseName = name.replace(/\s+/g, "-").toLowerCase();
  return (
    <ProductButton>
      <img
        src={image}
        onClick={() => {
          window.location.href = `/course/${courseName}`;
        }}
      />
    </ProductButton>
  );
};

export default ImageButton;
