import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HouseImage from "../pics/HouseImage.png";
import ArrowComponent from "./ArrowComponent";
import Button from "../components/Button";
import { FaHome } from "react-icons/fa";

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
    nextArrow: <ArrowComponent icon=">" />,
    prevArrow: <ArrowComponent icon="<" />,
  };

  return (
    <div className="bg-slate-100 h-[600px]">
      <div className="container  mx-auto mt-16">
        <Slider {...settings}>
          <div>
            <div className="flex">
              <div className="p-8 mt-40">
                {array.map((item, index) => (
                  <div key={index}>
                    <div className="flex">
                      <b className="text-xl text-cyan-950">
                        <FaHome />
                        {item.real}
                      </b>
                    </div>
                    <div>
                      <p className="font-[900] text-cyan-950 mt-2 text-5xl">
                        {item.heading}
                      </p>
                    </div>
                    <div>
                      <p className="text-cyan-950 text-lg mt-4">
                        {item.paragraph}
                      </p>
                    </div>
                    <div className="mt-4">
                      <Button>Make An Enquiry</Button>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src={HouseImage}
                  alt="Slider-Pics"
                  className="w-[700px] h-[500px]"
                />
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div>
            <div className="flex ">
              <div>
                <img
                  src={HouseImage}
                  alt="Slider-Pics"
                  className="w-[700px] h-[500px]"
                />
              </div>
              <div className="flex  p-4 ">
                {array.map((item, index) => (
                  <div key={index}>
                    <div>
                      <p>{item.real}</p>
                    </div>
                    <div>
                      <p>{item.heading}</p>
                    </div>
                    <div>
                      <p>{item.paragraph}</p>
                    </div>
                    <div>
                      <Button>Make An Enquiry</Button>
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
