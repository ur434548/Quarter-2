import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HouseImage from "../pics/HouseImage.png";

import Button from "../components/Button";
import { FaHome } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import "./arrows.css";
import { FaArrowRight } from "react-icons/fa6";

function NextArrow({ currentSlide, slideCount, className, ...props }) {
  return <FaArrowLeft {...props} className={`nextArrow  ${className}`} />;
}

function PrevArrow({ currentSlide, slideCount, className, ...props }) {
  console.log(props);

  return <FaArrowRight className={`prevArrow  ${className}`} {...props} />;
}

export default function SimpleSlider() {
  const array = [
    {
      real: "The Real Estate",
      heading: "Find Your Dream House By Us",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
  };

  return (
    <div className="bg-slate-100  h-[780px] p-[100px 0px ]  slider-container">
      <div className="flex justify-between absolute inset-0  items-center bg-white shadow h-[142px] w-[1170px] p-[50px] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[800px] ">
        <div className="text-black text-right flex  gap-4 text-[16px]  font-medium ">
          <select className="w-[250px] h-[60px]  border-1 p-2">
            <option>Choose Area</option>
            <option>Choose Area 1</option>
            <option>Choose Area 2</option>
            <option>Choose Area 3</option>
            <option>Choose Area 4</option>
            <option>Choose Area 5</option>
          </select>
          <select className="w-[250px] h-[60px]  border-1  p-2">
            <option>Property Status</option>
            <option>Property Status 1</option>
            <option>Property Status 2</option>
            <option>Property Status 3</option>
            <option>Property Status 4</option>
            <option>Property Status 5</option>
          </select>
          <select className="w-[250px] h-[60px] border-1 p-2 ">
            <option>Property type</option>
            <option>Property type 1</option>
            <option>Property type 2</option>
            <option>Property type 3</option>
            <option>Property type 4</option>
            <option>Property type 5</option>
          </select>
          
        </div>
        <div className="flex items-center">
          <Button className="relative flex flex gap-2 h-[60px] w-[160px] text-[16px] items-center justify-center overflow-hidden bg-custom-orange text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-72">
            <span className="relative z-10">Explore Items</span>
           
          </Button>
        </div>
      </div>

      <div className="container  mx-auto ">
        <Slider {...settings}>
          <div className="mt-40">
            <div className="flex">
              <div className="p-8 mt-20">
                {array.map((item, index) => (
                  <div key={index} className="ml-[20px]">
                    <b className="text-xl mb-3 flex gap-2 text-cyan-950 animate__animated animate__fadeInDown animate__slow">
                      <FaHome className="text-custom-orange" />
                      <p className="text-[16px]">{item.real}</p>
                    </b>

                    <div>
                      <h1 className="font-[900] leading-none  text-cyan-950 text-[65px] animate__animated animate__fadeInUpBig animate__slow">
                        {item.heading}
                      </h1>
                    </div>
                    <div>
                      <p className="text-cyan-950 text-lg mt-4 w-[500px] animate__animated animate__fadeInUpBig animate__slow">
                        {item.paragraph}
                      </p>
                    </div>
                    <div className="mt-4 flex gap-3  animate__animated animate__fadeInUpBig animate__slow ">
                      <Button className=" mt-10 color-ornage-600 hover:before:bg-redborder-red-500 relative  text-[16px] h-[60px] w-[212px] overflow-hidden border border-red-500 bg-custom-orange px-3   transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                        <span class="relative z-10">Make an Enquiry</span>
                      </Button>
                      <FaRegCirclePlay
                        size="4rem"
                        className="text-custom-orange border-zinc-100 shadow-4xl mt-10 rounded-full "
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <img
                  src={HouseImage}
                  alt="Slider-Pics"
                  className="w-[924px] h-[546px]"
                />
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mt-40">
            <div className="flex">
              <div>
                <img
                  src={HouseImage}
                  alt="Slider-Pics"
                  className="w-[924px] h-[546px]"
                />
              </div>
              <div className="p-8 mt-20 ml-10">
                {array.map((item, index) => (
                  <div key={index} className="">
                    <b className="text-xl flex gap-2 mb-3  text-cyan-950 animate__animated animate__fadeInDown animate__slow">
                      <FaHome className="text-custom-orange" />
                      <p className="text-[16px]">{item.real}</p>
                    </b>

                    <div>
                      <p className="font-[900]  leading-none text-cyan-950 animate__animated animate__fadeInUpBig animate__slow font-ultra-bold m-[0px 0px 20px] text-[65px]">
                        {item.heading}
                      </p>
                    </div>
                    <div>
                      <p className="text-cyan-950 animate__animated animate__fadeInUpBig animate__slow text-lg mt-4">
                        {item.paragraph}
                      </p>
                    </div>
                    <div className="mt-10 flex  gap-3 animate__animated animate__fadeInUpBig animate__slow">
                      <Button className=" mt-10  hover:before:bg-redborder-red-500 relative  text-[16px] h-[60px] w-[212px] overflow-hidden border border-red-500 bg-custom-orange px-3   transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                        <span class="relative z-10">Make an Enquiry</span>
                      </Button>
                      <Button className="text-black  mt-10  hover:before:bg-redborder-red-500 relative  text-[16px] h-[60px] w-[212px] overflow-hidden border border-red-500 bg-slate-100 px-3   transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                        <span class="relative z-10">Learn More</span>
                      </Button>
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
