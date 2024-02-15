import { useEffect, useState } from "react";
import "./App.css";
import NotFound from "./Components/noFound/NotFound";
import SignUp from "./Components/_auth/forms/SignUp";
import AuthLayout from "./Components/_auth/AuthLayout";
import Login from "./Components/_auth/forms/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Root from "./Components/_root/Root";
import AllMoveies from "./Components/allMoveies/AllMoveies";
import About from "./Components/about/About";
import ContactUs from "./Components/contactUs/ContactUs";
import Home from "./Components/home/Home";
import Move from "./Components/moveDetails/Move";
import { func } from "joi";

function App() {
  let user = localStorage.getItem("CurrentUser");

  const [currentUser, setCurrentUser] = useState(null);

  function ProtectedRoute(props) {
    if (currentUser) {
      return props.children;
    } else {
      return <Navigate to="login" />;
    }
  }

  function saveUserData() {
    setCurrentUser(JSON.stringify(user));
    localStorage.removeItem("email");
  }
  // logout

  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout saveUserData={saveUserData} />}>
          <Route path="signup" element={<SignUp />} />
          <Route
            path="/login"
            element={<Login saveUserData={saveUserData} />}
          />
          <Route path="" element={<Login saveUserData={saveUserData} />} />
        </Route>

        {/* Private Routes */}

        <Route element={<Root />}>
          <>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <AllMoveies />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <ContactUs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/movie"
              element={
                <ProtectedRoute>
                  <Move />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <NotFound />
                </ProtectedRoute>
              }
            />
          </>
        </Route>
      </Routes>
    </>
  );
}

export default App;
