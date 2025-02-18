import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const SignupBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 12px;

  .head {
    font-size: 48px;
    padding: 10px;
  }

  .headinfo {
    color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
    padding-bottom: 70px;
  }
  .img {
    width: 256px;
    height: 256px;
  }
  .error {
    color: red;
  }
`;

const ButtonPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 80px;
  gap: 20px;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 510px;
  height: 68px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  background-color: black;
  color: white;
  text-decoration: none;
`;

const SignupComplete = () => {
  return (
    <>
      <Header />
      <SignupBody>
        <div className="head">가입이 완료되었습니다!</div>
        <div className="headinfo">이제 다양한 기능을 사용해볼 수 있어요.</div>
        <img src="/signupComplete.png" alt="성공!" className="img"></img>
        <ButtonPage>
          <Button to={"/"}>메인 페이지로 돌아가기</Button>
        </ButtonPage>
      </SignupBody>
    </>
  );
};

export default SignupComplete;
