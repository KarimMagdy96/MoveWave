import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import "./authLayout.css";
export default function AuthLayout(prop) {
  const isAuth = false;

  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="authMain">
            <Outlet></Outlet>
          </section>
        </>
      )}
    </>
  );
}
