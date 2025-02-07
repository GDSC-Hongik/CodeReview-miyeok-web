import styled from "styled-components";

const ProductButton = styled.div`
  width: calc(25% - 40px);
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 480px;
    height: auto;
    border-radius: 8px;
  }

  p {
    width: 320px;
    color: gray;
    margin-top: 10px;
    font-size: 15px;
  }

  div {
    width: 320px;
    margin-top: 10px;
    font-size: 30px;
  }
`;

const ImageButton = ({ image, name, info }) => {
  return (
    <ProductButton>
      <img src={image} alt={name} />
      <div>{name}</div>
      <p>{info}</p>
    </ProductButton>
  );
};

export default ImageButton;
