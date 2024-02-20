import React, { useEffect, useState } from "react";
import "./move.css";
import { useParams } from "react-router-dom";
import { func } from "joi";
export default function Move() {
  let { id } = useParams();
  const [movieDetails, setmovieDetails] = useState(null);
  function getMovieDetails(id) {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fd3c31e2d7a54303dc08756b66824aef`
    )
      .then((response) => response.json())
      .then((data) => {
        setmovieDetails(data);
      });
  }
  useEffect(() => {
    getMovieDetails(id);
  }, []);

  return (
    <div>
      {movieDetails ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt=""
            className="img-fluid"
          />
        </div>
      ) : (
        "jyyyyyyyyyyyyy"
      )}
    </div>
  );
}
