import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  .error {
    color: red;
  }
`;

const InputPage = styled.div`
  width: 510px;
  height: 79px;
  margin-bottom: 30px;

  .info {
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  .error {
    color: red;
  }
`;

const Input = styled.input`
  width: 510px;
  height: 52px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  font-size: 15px;
  padding-left: 30px;
  outline: none;
`;

const ButtonPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-top: 80px;
  gap: 20px;

  .signup {
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
  }
`;

const Signup = () => {
  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!name.trim()) {
      setErrorMessage("이름을 입력하세요.");
      return;
    }

    const NoneIntroduce =
      introduce.trim() === "" ? "소개글이 없습니다." : introduce;

    try {
      const response = await fetch("/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, introduce: NoneIntroduce }),
      });

      if (response.ok) {
        setErrorMessage("");
        navigate("/signup-complete");
      } else {
        navigate("/signup-complete");
      }
    } catch (error) {
      setErrorMessage("서버와 통신 중 문제가 발생하였습니다.");
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <SignupBody>
        <div className="head">Signup</div>
        <div className="headinfo">신규 회원을 위한 가입 양식</div>
        <InputPage>
          <div className="info">이름</div>
          <Input
            placeholder="이름을 입력하세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </InputPage>
        <InputPage>
          <div className="info">소개글(선택)</div>
          <Input
            placeholder="나만의 소개글을 입력하세요."
            value={introduce}
            onChange={(e) => setIntroduce(e.target.value)}
          ></Input>
        </InputPage>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <ButtonPage>
          <button className="signup" onClick={handleSignup}>
            가입하기
          </button>
        </ButtonPage>
      </SignupBody>
    </>
  );
};

export default Signup;
