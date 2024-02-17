import React, { useEffect, useState } from "react";
import image from "../../assets/img/a.png";
import Slider from "react-slick";
import "./home.css";
import axios from "axios";
import SimpleSlider from "../Test";

export default function Home() {
  const [show, setAllShows] = useState([]);

  useEffect(() => {
    async function fetchshow() {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=fd3c31e2d7a54303dc08756b66824aef"
        );
        setAllShows(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchshow();
  }, []);
  // /////////////////

  return (
    <>
      <section className=" w-100 rounded-0  vh-100 overflow-hidden  hero">
        <div
          id="carouselExampleFade"
          className="carousel w-100 h-100 overflow-hidden  slide carousel-fade"
        >
          <div className="carousel-inner h-100 w-100 overflow-hidden ">
            <div className="carousel-item active w-100 h-100">
              <div className=" text-danger container  position-absolute  top-0  bottom-0 start-0   end-0 w-100 h-100  z-3   ">
                <div className="row  h-100">
                  <div className="col-md-8  h-100  d-flex flex-column justify-content-center  align-items-start">
                    <div>
                      <div className=" trans-withe mt-5  rounded-pill ps-1 py-1 pe-4">
                        <span className=" rounded-pill bg-danger text-white px-3 d-inline-block py-2 ">
                          New
                        </span>
                        <span className=" text-white"> Best Of All Times</span>
                      </div>
                    </div>
                    <div className="  fs-1   fw-bold  pt-5 text-white">
                      The Painter
                    </div>
                    <p className=" fw-bold p-0 m-0">
                      Release Date <span className=" fs-1  mx-2">.</span>{" "}
                      {"   "}
                      <span className=" text-danger fw-bold"> 2024-01-05</span>
                    </p>
                    <p className="card-text text-secondary  ">
                      An ex-CIA operative is thrown back into a dangerous world
                      when a mysterious woman from his past resurfaces. Now
                      exposed and targeted by a relentless killer and a rogue
                      black ops program, he must rely .
                    </p>
                    <button className=" btn btn-danger py-3  fw-light  px-4 shadow rounded-0 fs-6">
                      <i className="fa-solid fa-caret-right me-1"></i>{" "}
                      <span>Watch Now</span>
                    </button>
                  </div>
                </div>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500//6OnoMgGFuZ921eV8v8yEyXoag19.jpg`}
                className="d-block w-100 h-100"
                alt=""
              />
            </div>
            {show.map((item, index) => (
              <div key={index} className="carousel-item w-100 h-100">
                <div className=" text-danger container  position-absolute  top-0  bottom-0 start-0   end-0 w-100 h-100  z-3   ">
                  <div className="row  h-100">
                    <div className="col-md-8  h-100  d-flex flex-column justify-content-center  align-items-start">
                      <div>
                        <div className=" trans-withe mt-5  rounded-pill ps-1 py-1 pe-4">
                          <span className=" rounded-pill bg-danger text-white px-3 d-inline-block py-2 ">
                            New
                          </span>
                          <span className=" text-white">
                            {" "}
                            Best Of All Times
                          </span>
                        </div>
                      </div>
                      <div className="  fs-1   fw-bold  pt-5 text-white">
                        {item.title}
                      </div>
                      <p className=" fw-bold p-0 m-0">
                        Release Date <span className=" fs-1  mx-2">.</span>{" "}
                        {"   "}
                        <span className=" text-danger fw-bold">
                          {item.release_date}
                        </span>
                      </p>
                      <p className="card-text text-secondary  ">
                        {item.overview.substring(0, 200)}.
                      </p>
                      <button className=" btn btn-danger py-3  fw-light  px-4 shadow rounded-0 fs-6">
                        <i className="fa-solid fa-caret-right me-1"></i>{" "}
                        <span>Watch Now</span>
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  className="d-block w-100 h-100 "
                  alt=""
                />
              </div>
            ))}
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
      <section className="home ">
        <div className="container ">
          <div className=" fw-bold fs-5 mb-5">
            latest Distributions <i className="fa-solid fa-minus fs-5"></i>
          </div>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            {show.map((item) => (
              <div className="col" key={item.id}>
                <div className="card h-100 bg-transparent text-white">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    className="card-img-top rounded-3"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-secondary">
                      {item.overview.substring(0, 50)}...
                    </p>
                    <p>
                      Release Date <span className=" fs-1  mx-2">.</span>{" "}
                      {"   "}
                      <span className=" text-danger fw-bold">
                        {item.release_date}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}
