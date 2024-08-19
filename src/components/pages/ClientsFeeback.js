import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person from "../../assests/images/person.jpg";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import "../../assests/styles/arrows.css";
import { IoMdStarOutline } from "react-icons/io";

function NextArrow({ currentSlide, slideCount, className, ...props }) {
  return <FaArrowLeft {...props} className={`clientLeft ${className}`} />;
}

function PrevArrow({ currentSlide, slideCount, className, ...props }) {
  return <FaArrowRight className={`clientRight  ${className}`} {...props} />;
}

export default function FeaturedListing() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",

      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consEnimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",

      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e2",

      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consEnimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",

      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e3",
      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consEnimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",

      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e4",
      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consEnimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",

      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e5",
      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consEnimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",

      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e6",

      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet consEnimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",

      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,

    prevArrow: <NextArrow />,
  };

  return (
    <div className="bg-slate-100  mt-40 h-[700px]  slider-container">
      <div className="flex flex-col items-center ">
        <Button className="bg-red-100 p-2 w-60  mt-20 rounded-full text-center text-custom-orange">
          Our Testimonial
        </Button>

        <h1 className="text-3xl font-bold font-sans tracking-tight mb-10 text-center text-gray-900 sm:text-5xl">
          Clients Feedback
        </h1>
      </div>
      <div className="mt-16 mx-60 ">
        <Slider {...settings} className="w-[1400px] ">
          {DUMMY_EXPENSES.map((items) => (
            <div key={items.id} className="mx-20 shadow-xl">
              <div className="w-[370px] h-[361px] bg-white rounded-lg text-lg text-slate-600  p-16 ">
                <span className="text-[18px]">{items.description}</span>
                <div className="flex gap-3 mt-12 relative block pb-[25px] group">
                  <span className="absolute bottom-0 left-[-55px] w-[368px] rounded-full h-[3px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out"></span>
                  <img
                    className="w-[60px] h-[60px] rounded-full  text-slate-500 font-bold flex gap-2 justify-center content-center items-center transition-colors duration-300 ease-out group-hover:text-orange-600"
                    src={items.img2}
                    alt={items.name}
                  />
                  <div>
                    <b className="text-[18px]">{items.name}</b>
                    <p className="text-gray-400 text-[14px]">
                      {items.text5}
                      <div className="flex">
                        <IoMdStarOutline className="hover:text-orange-600 " />
                        <IoMdStarOutline className="hover:text-orange-600 " />
                        <IoMdStarOutline className="hover:text-orange-600 " />
                        <IoMdStarOutline className="hover:text-orange-600 " />
                        <IoMdStarOutline className="hover:text-orange-600 " />
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
