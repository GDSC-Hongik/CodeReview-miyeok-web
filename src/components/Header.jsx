import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { atom, useAtom } from "jotai";

const isLoginAtom = atom(false);
const searchQueryAtom = atom("");
const userProfilePicAtom = atom(null);
const Headercss = styled.div`
  z-index: 1;
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

const UserLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gray;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 50px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;
const Logo2 = styled.img`
  width: 10rem;
  background-color: white;
  cursor: pointer;
`;

const Button = styled(Link)`
    text-decoration: none;
    display: flex;
    background-color: rgb(220, 220, 220);
    align-items: center;
    width: auto;
    height: auto;
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 15px;
    color:black;
    }

  `;
const LoginButton = styled(Link)`
    text-decoration: none;
    display: flex;
    background-color: rgb(30, 30, 30);
    align-items: center;
    width: auto;
    height: auto;
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 15px;
    color:white;
    }


  `;
const SignupButton = styled(Link)`
    text-decoration: none;
    display: flex;
    background-color: rgb(220, 220, 220);
    align-items: center;
    width: auto;
    height: auto;
    padding: 8px 24px;
    border-radius: 20px;
    font-size: 15px;
    color: black;
    }

  `;

const Input = styled.input`
  width: 40vw;
  height: 40px;
  background-color: #f0f0f0;
  color: #000000;
  border-radius: 20px;
  border: 1px solid #e4e4e4;
  padding-left: 12px;
  outline: none;
`;

const Header = () => {
  const [isLogin, setIsLogin] = useAtom(isLoginAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [userProfilePic, setUserProfilePic] = useAtom(userProfilePicAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setIsLogin(true);
      const fetchProfileimg = async () => {
        try {
          const response = await fetch("api/user/pic", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          setUserProfilePic(data.profilePicUrl);
        } catch (error) {
          console.error("프로필 사진을 가져오는 데 실패했습니다.", error);
        }
      };
      fetchProfileimg();
    } else {
      setIsLogin(false);
    }
  }, []);

  const loginComponent = () => {
    sessionStorage.removeItem("authToken");
    setIsLogin(false);
  };

  const handleSearch = () => {
    if (event.key === "Enter") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <Headercss>
      <Container>
        <Logo
          src="CodeReviewLogo.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <Logo2
          src="CodeReview.png"
          alt="logo2"
          onClick={() => {
            navigate("/");
          }}
        />
        <Input
          placeholder="듣고싶은 강의를 검색해보세요."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </Container>
      {isLogin ? (
        <Container>
          <Button to={"/"} onClick={loginComponent}>
            Logout
          </Button>
          {userProfilePic ? (
            <UserLogo
              onClick={() => {
                navigate("/users");
              }}
              src={userProfilePic}
              alt="프로필"
            />
          ) : (
            <UserLogo
              onClick={() => {
                navigate("/users");
              }}
              src="example.png"
              alt="프로필 오류!"
            />
          )}
        </Container>
      ) : (
        <Container>
          <LoginButton to={"/login"} className="login">
            Login
          </LoginButton>
          <SignupButton to={"/signup"} className="signup">
            Signup
          </SignupButton>
        </Container>
      )}
    </Headercss>
  );
};

export default Header;
