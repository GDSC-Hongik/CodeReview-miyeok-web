import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { isLoginAtom } from "../atom";

const searchQueryAtom = atom("");
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
  background-color: white;
  align-items: center;
  width: auto;
  height: auto;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 15px;
  color: black;

  &:hover {
    background-color: black;
    color: white;
  }
`;
const AuthButton = styled(Link)`
  text-decoration: none;
  display: flex;
  background-color: ${(props) =>
    props.selected ? "black" : "rgb(250,250,250)"};
  color: ${(props) => (props.selected ? "white" : "black")};
  align-items: center;
  width: auto;
  height: auto;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 15px;
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token1 = localStorage.getItem("accessToken");
    const token2 = localStorage.getItem("refreshToken");
    const token3 = localStorage.getItem("email");
    const token4 = localStorage.getItem("role");
    if (token1 && token2 && token3 && token4) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [setIsLogin]);

  const currentPath = location.pathname + location.search;

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    setIsLogin(false);
    navigate(currentPath);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/course-list?query=${searchQuery}`);
    }
  };

  const Auththings = [{ name: "Login", link: "/login" }];

  return (
    <Headercss>
      <Container>
        <Logo
          src="/CodeReviewLogo.png"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <Logo2
          src="/CodeReview.png"
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
          <Button onClick={logout}>Logout</Button>
          <UserLogo
            onClick={() => {
              navigate("/users/3");
            }}
            src="/userProfile.png"
            alt="프로필 오류!"
          />
        </Container>
      ) : (
        <Container>
          {Auththings.map((cat) => (
            <AuthButton
              key={cat.name}
              to={cat.link}
              selected={location.pathname === cat.link}
            >
              {cat.name}
            </AuthButton>
          ))}
        </Container>
      )}
    </Headercss>
  );
};

export default Header;
