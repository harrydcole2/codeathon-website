import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import FeaturedBooks from "./pages/FeaturedBooks";
import PastPicks from "./pages/PastPicks";
import Discussions from "./pages/Discussions";
import Store from "./pages/Store";
import About from "./pages/About";
import NavBar from "./components/NavBar";

import axios from "axios";

function App() {
  const [username, setUsername] = useState("newuser123");
  const [password, setPassword] = useState("securepassword123");
  const [loginResult, setLoginResult] = useState(null);

  async function loginUser(e) {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/login?username=newuser123&password=securepassword123",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      setLoginResult(response.data);
    } catch (error) {
      console.error(
        "Login error:",
        error.response ? error.response.data : error.message
      );
      setLoginResult({
        error: error.response ? error.response.data : error.message,
      });
    }
  }

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <ErrorBoundary>
      <NavBar />
      <Routes>
        <Route path="/" element={<FeaturedBooks />} />
        <Route path="/pastPicks" element={<PastPicks />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
