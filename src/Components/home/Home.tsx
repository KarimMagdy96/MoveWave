import React, { useState } from "react";
import image from "../../assets/img/a.png";
import "./home.css";

export default function Home() {
  let [Trendingmovie, setTrendingmovie] = useState([]);
  return (
    <>
      <section className=" w-100 vh-100 ">
        <div
          id="carouselExampleFade"
          className="carousel overflow-hidden  slide carousel-fade"
        >
          <div className="carousel-inner">
            <div className="carousel-item active w-100 vh-100">
              <img src={image} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item  w-100 vh-100">
              <img src={image} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item  w-100 vh-100">
              <img src={image} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
