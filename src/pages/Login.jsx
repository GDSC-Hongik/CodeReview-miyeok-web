import styled from "styled-components";
import Header from "../components/Header";

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
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    border: none;
  }

  .google {
    border: 2px solid #e4e4e4;
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
  const handleGoogleLogin = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid email`;

    window.location.href = googleAuthUrl;
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
        </ButtonPage>
      </LoginBody>
    </>
  );
};

export default Login;
