import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Course from "./pages/Course.jsx";
import Search from "./pages/Search.jsx";
import Users from "./pages/Users.jsx";
import Compare from "./pages/Compare.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />}>
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
