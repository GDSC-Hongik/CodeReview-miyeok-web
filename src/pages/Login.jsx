import styled from "styled-components";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

/*
const K_REST_API_KEY = process.env.REACT_APP_K_REST_API_KEY;
const K_REDIRECT_URI = `http://localhost:3001/oauth`;
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${K_REST_API_KEY}&redirect_uri=${K_REDIRECT_URI}&response_type=code`;
*/
const LoginBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 12px;

  .head {
    font-size: 48px;
    padding-bottom: 70px;
  }

  .error {
    color: red;
  }
`;

const Input = styled.input`
  width: 380px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  padding-left: 30px;
  outline: none;
`;

const ButtonPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 16px;
  gap: 20px;

  .login,
  .kakao,
  .naver {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 380px;
    height: 50px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    border: none;
  }

  .login {
    background-color: black;
    color: white;
  }
  .signup {
    font-size: 15px;
    background-color: white;
    text-align: center;
    color: #a3a3a3;
    width: auto;
    height: auto;
    text-decoration: none;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  .kakao {
    background-color: #ffe812;
    color: black;
  }
  .naver {
    background-color: #00c73c;
    color: white;
  }

  button .kakaoimg {
    width: 30px;
    margin-right: 16px;
  }
  button .naverimg {
    width: 45px;
  }
`;

const UserInfo = {
  email: "ronaldo",
  password: "siu1234",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !pw) {
      setErrorMessage("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    if (email === UserInfo.email && pw === UserInfo.password) {
      isLogin();
    } else {
      setErrorMessage("이메일 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const handleLoginInput = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const isLogin = () => {
    const Token = "dummyToken";
    localStorage.setItem("authToken", Token);
    navigate("/");
  };

  /*const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };*/
  return (
    <>
      <Header />
      <LoginBody>
        <div className="head">Login</div>
        <div>
          <Input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleLoginInput}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={handleLoginInput}
          />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <ButtonPage>
          <button className="login" onClick={handleLogin}>
            로그인
          </button>
          <Link to={"/signup"} className="signup">
            회원가입 하기
          </Link>
          <button className="kakao" onClick={isLogin}>
            <img src="/kakaotalk.png" className="kakaoimg" />
            카카오 로그인
          </button>
          <button className="naver" onClick={isLogin}>
            <img src="/naver.png" className="naverimg" />
            네이버 로그인
          </button>
        </ButtonPage>
      </LoginBody>
    </>
  );
};

export default Login;
