import { useState } from "react";
import "./App.css";
import NotFound from "./Components/noFound/NotFound";
import SignUp from "./Components/_auth/forms/SignUp";
import AuthLayout from "./Components/_auth/AuthLayout";
import Login from "./Components/_auth/forms/Login";
import { Route, Routes } from "react-router-dom";
import Root from "./Components/_root/Root";
import AllMoveies from "./Components/allMoveies/AllMoveies";
import About from "./Components/about/About";
import ContactUs from "./Components/contactUs/ContactUs";
import Home from "./Components/home/Home";
import Move from "./Components/moveDetails/Move";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function saveUserData() {
    let user = localStorage.getItem("CurrentUser");
    setCurrentUser(JSON.stringify(user));
    localStorage.removeItem("email");
  }

  return (
    <>
      <>
        <Routes>
          {/* Public routes */}
          <Route element={<AuthLayout saveUserData={saveUserData} />}>
            <Route path="signup" element={<SignUp />} />
            <Route
              path="login"
              element={<Login saveUserData={saveUserData} />}
            />
            <Route path="" element={<Login saveUserData={saveUserData} />} />
          </Route>

          {/* Private Routes */}
          {currentUser ? (
            <Route element={<Root />}>
              <>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<AllMoveies />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/home" element={<Home />} />
                <Route path="/movie" element={<Move />} />
                <Route path="*" element={<NotFound />} />
              </>
            </Route>
          ) : (
            <Route element={<AuthLayout />}>
              <Route path="*" element={<Login />} />
            </Route>
          )}
        </Routes>
      </>
    </>
  );
}

export default App;
