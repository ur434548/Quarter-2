import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import House2 from "../pics/House2.jpg";
import House3 from "../pics/House3.jpg";
import House4 from "../pics/House4.jpg";
import House5 from "../pics/House5.jpg";
import House6 from "../pics/House6.jpg";
import House7 from "../pics/House7.jpg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container  mx-auto mt-16">
      <Slider {...settings}>
        <div>
          <img
            src={House2}
            alt="Slider-Pics"
            className="w-[1600px] h-[800px] "
          />
        </div>
        <div>
          <img
            src={House3}
            alt="Slider-Pics"
             className="w-[1600px] h-[800px] "
          />
        </div>
        <div>
          <img
            src={House4}
            alt="Slider-Pics"
            className="w-[1600px] h-[800px] "
          />
        </div>
        <div>
          <img
            src={House5}
            alt="Slider-Pics"
              className="w-[1600px] h-[800px] "
          />
        </div>
        <div>
          <img
            src={House6}
            alt="Slider-Pics"
             className="w-[1600px] h-[800px] "
          />
        </div>
        <div>
          <img
            src={House7}
            alt="Slider-Pics"
              className="w-[1600px] h-[800px] "
          />
        </div>
      </Slider>
    </div>
  );
}
