import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  text-align: center;
  margin-top: 16px;
  gap: 20px;

  .google {
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

  .google {
    border: 2px solid #e4e4e4;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const response = await fetch(
        "http://13.209.165.107:8080/api/auth/google/sign-in"
      );
      const data = await response.json();
      if (data.authToken) {
        localStorage.setItem("authToken", data.authToken);
        navigate("/signup");
      } else {
        setAuthError("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (err) {
      console.error("구글 로그인 실패:", err);
      setAuthError("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <Header />
      <LoginBody>
        <div className="head">Login</div>
        <ButtonPage>
          <img
            className="google"
            src="/GoogleLogin.png"
            onClick={handleGoogleLogin}
          />
          {authError && <div className="error">{authError}</div>}
        </ButtonPage>
      </LoginBody>
    </>
  );
};

export default Login;
