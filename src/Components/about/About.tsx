import React from "react";
import "./about.css";
export default function About() {
  return (
    <>
      <section className="about">
        <div className="hero_about  fs-1  d-flex justify-content-center align-items-center fw-bold ">
          ABOUT US
        </div>
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-6 bg-info">
              <h6 className="m-0  text-center fw-bold  text-uppercase">
                lets get stated
              </h6>
              <p className="text-center  fs-1  fw-bold">
                Looking for more movies?
              </p>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </>
  );
}
