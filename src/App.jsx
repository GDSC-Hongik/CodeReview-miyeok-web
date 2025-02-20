import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Course from "./pages/Course.jsx";
import CourseList from "./pages/CourseList.jsx";
import Users from "./pages/Users.jsx";
import Compare from "./pages/Compare.jsx";
import MoreAboutLecturer from "./pages/MoreAboutLecturer.jsx";
import SignupComplete from "./pages/SignupComplete.jsx";
import OAuthRedirect from "./pages/oAuthRedirect.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-complete" element={<SignupComplete />} />
          <Route path="/course/:courseName" element={<Course />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/lecturer" element={<MoreAboutLecturer />} />
          <Route path="/oauth2/redirect" element={<OAuthRedirect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
