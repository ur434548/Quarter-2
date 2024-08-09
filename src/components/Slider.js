import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HouseImage from "../pics/HouseImage.png";

import Button from "../components/Button";
import { FaHome } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { NextArrow, PrevArrow } from './ArrowComponent'; 
export default function SimpleSlider() {
  const array = [
    {
      real: "The Real Estate",
      heading: "Find Your Dream House By Us",
      paragraph:
        "Enimad minim veniam quis nostrud exercitationllamco laboris Lorem ipsum dolor sit amet",
    },
  ];
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,

    prevArrow: <NextArrow />,
  };

  return (
    <div className="bg-slate-100 h-[700px]">
      <div className="container  mx-auto mt-16">
        <Slider {...settings}>
          <div className="mt-10">
            <div className="flex">
              <div className="p-8 mt-40">
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="animate__animated animate__fadeInUpBig animate__slower"
                  >
                    <b className="text-xl flex gap-2 text-cyan-950 ">
                      <FaHome className="text-custom-orange" />
                      <p>{item.real}</p>
                    </b>

                    <div>
                      <p className="font-[900] text-cyan-950 mt-2 text-6xl">
                        {item.heading}
                      </p>
                    </div>
                    <div>
                      <p className="text-cyan-950 text-lg mt-4">
                        {item.paragraph}
                      </p>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <Button className="bg-custom-orange p-6 text-white text-lg">
                        Make An Enquiry
                      </Button>
                      <FaRegCirclePlay
                        size="4rem"
                        className="text-custom-orange border-zinc-100 shadow-4xl  rounded-full "
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src={HouseImage}
                  alt="Slider-Pics"
                  className="w-[700px] h-[600px]"
                />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-10">
            <div className="flex">
              <div>
                <img
                  src={HouseImage}
                  alt="Slider-Pics"
                  className="w-[700px] h-[600px]"
                />
              </div>
              <div className="p-8 mt-40">
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="animate__animated animate__fadeInUpBig animate__slower"
                  >
                    <b className="text-xl flex gap-2 text-cyan-950">
                      <FaHome className="text-custom-orange" />
                      <p>{item.real}</p>
                    </b>

                    <div>
                      <p className="font-[900] text-cyan-950 mt-2 text-6xl">
                        {item.heading}
                      </p>
                    </div>
                    <div>
                      <p className="text-cyan-950 text-lg mt-4">
                        {item.paragraph}
                      </p>
                    </div>
                    <div className="mt-4 flex  gap-3">
                      <Button className="bg-custom-orange p-6 text-white text-lg">
                        Make An Enquiry
                      </Button>
                      <FaRegCirclePlay
                        size="4rem"
                        className="text-custom-orange border-zinc-100 shadow-4xl  rounded-full "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
