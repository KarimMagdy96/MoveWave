import React, { Component } from "react";
import Slider from "react-slick";

function CenterMode(props) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <>
      {props.show.map((item, i) => {
        <div>
          <h3>1</h3>
        </div>;
      })}
      <div className="slider-container">
        <Slider {...settings} className=" bg-danger">
          {props.show.map((item, i) => {})}
        </Slider>
      </div>
    </>
  );
}

export default CenterMode;
