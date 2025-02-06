import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Headercss = styled.div`
  border-radius: 10px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: white;
  padding: 16px;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CodeReview = styled.div`
  font-size: 24px;
`;

const UserLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gray;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
`;

const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(220, 220, 220);
  width: auto;
  height: auto;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 15px;

  &:visited {
    color: black;
  }

  &:active {
    color: black;
  }
`;

const Input = styled.input`
  width: 280px;
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  const loginComponent = () => {
    setIsLogin(false);
  };
  return (
    <Headercss>
      <Container>
        <Logo src="/example.png" alt="logo" />
        <CodeReview>CodeReview</CodeReview>
      </Container>
      {isLogin ? (
        <Container>
          <Input placeholder="Search in Site"></Input>
          <Button to={"/"} onClick={loginComponent}>
            로그아웃
          </Button>
          <UserLogo src="/example.png" alt="Userlogo" />
        </Container>
      ) : (
        <Button to={"/login"}>로그인/회원가입</Button>
      )}
    </Headercss>
  );
};

export default Header;
