import React from "react";
import Slider from "react-slick";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaForward } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow bg-red-500 rounded-full p-2 text-white right-4`}
      onClick={onClick}
    >
      <span className="text-lg">
        <FaForward />
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow bg-green-500 rounded-full p-2 text-white left-4`}
      onClick={onClick}
    >
      <span className="text-lg">
        <TbPlayerTrackPrevFilled  size="5rem"/>
      </span>
    </div>
  );
}

function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CustomArrows;
