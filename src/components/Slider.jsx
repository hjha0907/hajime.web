import React from "react";
import Slider from "react-slick";

export default function Slick() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="pt-10 overflow-hidden max-w-4xl mx-auto">
      <Slider {...settings}>
        <div>
          <img className="max-h-24" src="./img/logo-01.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-02.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-03.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-04.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-05.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-06.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-07.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-08.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-09.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-10.png" />
        </div>
        <div>
          <img className="max-h-24" src="./img/logo-11.png" />
        </div>
      </Slider>
    </div>
      );
    }
  
