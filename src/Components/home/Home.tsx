import React, { useEffect, useState } from "react";
import image from "../../assets/img/a.png";
import "./home.css";
import axios from "axios";

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
  return (
    <>
      <section className=" w-100 vh-100  overflow-hidden">
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
      <section className="home ">
        <div className="container ">
          <div className=" fw-bold fs-5 mb-5">
            latest Distributions <i className="fa-solid fa-minus fs-5"></i>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {show.map((item) => (
              <div className="col" key={item.id}>
                <div className="card h-100">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {item.overview.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
