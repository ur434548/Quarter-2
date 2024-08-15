import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person from "../pics/person.jpg";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import "./arrows.css";
function NextArrow({ currentSlide, slideCount, className, ...props }) {
  return <FaArrowLeft {...props} className={`featureLeft ${className}`} />;
}

function PrevArrow({ currentSlide, slideCount, className, ...props }) {
  console.log(props);

  return <FaArrowRight className={`featureRight  ${className}`} {...props} />;
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
          <Button className="bg-red-100 p-2 w-60  mt-20 rounded-full text-center text-custom-orange mb-4">
            Our Testimonial
          </Button>

          <h1 className="text-3xl font-bold tracking-tight mb-10 text-center text-gray-900 sm:text-5xl">
            Clients Feedback
          </h1>
        </div>
        <div className="mt-16 mx-60 ">
          <Slider  {...settings} className="w-[1400px] ">
            {DUMMY_EXPENSES.map((items) => (
              <div key={items.id} className="mx-20 shadow-xxl" >
                <div className="w-[370px] h-[361px] bg-white rounded-lg text-lg text-slate-600  p-16 ">
                  <span className="text-[18px]">{items.description}</span>
                  <div className="flex gap-3 mt-12">
                    <img
                      className="w-[60px] h-[60px] rounded-full "
                      src={items.img2}
                      alt={items.name}
                    />
                    <div>
                      <b className="text-[18px]">{items.name}</b>
                      <p className="text-gray-400 text-[14px]">{items.text5}</p>
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
