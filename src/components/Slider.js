import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HouseImage from "../pics/HouseImage.png";

import Button from "../components/Button";
import { FaHome } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { TbCircleArrowLeftFilled } from "react-icons/tb";
import { TbCircleArrowRightFilled } from "react-icons/tb";

function NextArrow({ currentSlide, slideCount, size, ...props }) {
  return <TbCircleArrowLeftFilled {...props} color="darkcyan" size={40} />;
}

function PrevArrow({ currentSlide, slideCount, ...props }) {
  return <TbCircleArrowRightFilled {...props} color="darkcyan" />;
}

export default function SimpleSlider() {
  const array = [
    {
      real: "The Real Estate",
      heading: "Find Your Dream House By Us",
      paragraph:
        "Enimad minim veniam quis nostrud exercitationllamco laboris Lorem ipsum dolor sit amet",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
  };

  return (
    <div className="bg-slate-100 h-[780px] p-[100px 0px ]">
      <div className="container  mx-auto ">
        <Slider {...settings}>
          <div className="mt-16">
            <div className="flex">
              <div className="p-8 mt-40">
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="animate__animated animate__fadeInUpBig animate__slow ml-[20px]"
                  >
                    <b className="text-xl flex gap-2 text-cyan-950 ">
                      <FaHome className="text-custom-orange" />
                      <p className="text-[16px]">{item.real}</p>
                    </b>

                    <div>
                      <h1 className="font-[900] text-cyan-950 text-[65px]">
                        {item.heading}
                      </h1>
                    </div>
                    <div>
                      <p className="text-cyan-950 text-lg mt-4">
                        {item.paragraph}
                      </p>
                    </div>
                    <div className="mt-4 flex gap-3 ">
                      <Button class="text-red color-ornage-600 hover:before:bg-redborder-red-500 relative text-[16px] h-[60px] w-[212px] overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                        <span class="relative z-10">Make an Enquiry</span>
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
                  className="w-[724px] h-[546px]"
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
                  className="w-[724px] h-[546px]"
                />
              </div>
              <div className="p-8 mt-40">
                {array.map((item, index) => (
                  <div
                    key={index}
                    className="animate__animated animate__fadeInUpBig animate__slow"
                  >
                    <b className="text-xl flex gap-2 text-cyan-950">
                      <FaHome className="text-custom-orange" />
                      <p className="text-[16px]">{item.real}</p>
                    </b>

                    <div>
                      <p className="font-[900] text-cyan-950 font-ultra-bold m-[0px 0px 20px] text-[65px]">
                        {item.heading}
                      </p>
                    </div>
                    <div>
                      <p className="text-cyan-950 text-lg mt-4">
                        {item.paragraph}
                      </p>
                    </div>
                    <div className="mt-4 flex  gap-3">
                      <Button className="bg-custom-orange p-3 text-custom-orange text-lg text-red hover:before:bg-redborder-red-500 relative h-[60px] w-[213px] overflow-hidden border border-red-500 bg-white px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                        <span class="relative z-10">Make An Enquiry</span>
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
