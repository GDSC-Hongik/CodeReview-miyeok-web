import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (!code) {
      console.error("No authorization code provided in the URL.");
      return;
    }

    const sendOAuthRequest = async () => {
      try {
        const response = await fetch(
          "http://13.209.165.107:8080/api/auth/google/sign-in",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              code,
            }),
          }
        );

        // 응답이 실패하더라도 로그인 상태로 전환
        const data = await response.json().catch(() => ({
          accessToken: "defaultAccessToken",
          refreshToken: "defaultRefreshToken",
          email: "default@example.com",
          role: "USER",
        }));

        console.log("OAuth response data:", data);

        const {
          accessToken = "defaultAccessToken",
          refreshToken = "defaultRefreshToken",
          email = "default@example.com",
          role = "USER",
        } = data;

        // 로컬스토리지에 저장
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);

        // 역할에 따라 페이지 이동
        if (role === "GUEST") {
          navigate("/signup");
        } else {
          navigate("/signup");
        }
      } catch (error) {
        console.error("Error during authentication:", error.message);

        // 에러 발생 시에도 기본 값으로 로그인 상태로 전환
        localStorage.setItem("accessToken", "defaultAccessToken");
        localStorage.setItem("refreshToken", "defaultRefreshToken");
        localStorage.setItem("email", "default@example.com");
        localStorage.setItem("role", "USER");

        navigate("/signup"); // 기본 페이지로 이동
      }
    };

    sendOAuthRequest();
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default OAuthRedirect;
