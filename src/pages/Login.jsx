import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

/*
const REST_API_KEY = '백엔드한테 달라하자1';
  const REDIRECT_URI = '백엔드한테 달라하자2';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
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
    padding-bottom: 24px;
  }

  .error {
    color: red;
  }
`;

const ButtonPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 16px;
  gap: 20px;

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

const Login = () => {
  const navigate = useNavigate();

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
        <ButtonPage>
          <button className="kakao" onClick={isLogin}>
            <img src="/kakaotalk.png" className="kakaoimg" />
            구글 로그인
          </button>
        </ButtonPage>
      </LoginBody>
    </>
  );
};

export default Login;
