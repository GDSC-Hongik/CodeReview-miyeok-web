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
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const ImageButton = ({ thumbnail, title }) => {
  const courseName = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <ProductButton>
      <img
        src={thumbnail}
        onClick={() => {
          window.location.href = `/course/${courseName}`;
        }}
      />
    </ProductButton>
  );
};

export default ImageButton;
