import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiArrowMinimise } from "react-icons/ti";
import { BsHeart } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import House2 from "../../assests/images/House2.jpg";
import House3 from "../../assests/images/House3.jpg";
import House4 from "../../assests/images/House4.jpg";
import House6 from "../../assests/images/House6.jpg";
import House7 from "../../assests/images/House7.jpg";
import Button from "../Button/Button";
import person from "../../assests/images/person.jpg";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import "../../assests/styles/arrows.css";
function NextArrow({ currentSlide, slideCount, className, ...props }) {
  return <FaArrowLeft {...props} className={`featureLeft  ${className}`} />;
}

function PrevArrow({ currentSlide, slideCount, className, ...props }) {
  return <FaArrowRight className={`featureRight ${className}`} {...props} />;
}

export default function FeaturedListing() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      img: House2,
      price: "$34,900/Month",
      title: "Toilet Paper",
      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",
      text1: "Bedrooms",
      text2: "Bathrooms",
      text3: "Car Parking",
      text4: "square Ft",
      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e2",
      img: House3,
      price: "$34,900/Month",
      title: "Toilet Paper",
      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",
      text1: "Bedrooms",
      text2: "Bathrooms",
      text3: "Car Parking",
      text4: "square Ft",
      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e3",
      img: House4,
      price: "$34,900/Month",
      title: "Toilet Paper",
      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",
      text1: "Bedrooms",
      text2: "Bathrooms",
      text3: "Car Parking",
      text4: "square Ft",
      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e4",
      img: House2,
      price: "$34,900/Month",
      title: "Toilet Paper",
      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",
      text1: "Bedrooms",
      text2: "Bathrooms",
      text3: "Car Parking",
      text4: "square Ft",
      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e5",
      img: House6,
      price: "$34,900/Month",
      title: "Toilet Paper",
      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",
      text1: "Bedrooms",
      text2: "Bathrooms",
      text3: "Car Parking",
      text4: "square Ft",
      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
    {
      id: "e6",
      img: House7,
      price: "$34,900/Month",
      title: "Toilet Paper",
      description:
        "Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons",
      text1: "Bedrooms",
      text2: "Bathrooms",
      text3: "Car Parking",
      text4: "square Ft",
      img2: person,
      text5: "Estate Agents",
      name: "William Seklo",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    nextArrow: <PrevArrow />,

    prevArrow: <NextArrow />,
  };

  return (
    <div className="w-full mt-20 p-[]115px 133.203px 90px  slider-container">
      <div className="w-[1690px] mx-auto mt-15">
        <div className="flex flex-col items-center mx-auto my-10">
          <Button className="bg-red-100  text-[16px] p-2  rounded-full text-custom-orange w-[155px] h-[30px] mb-4">
            Properties
          </Button>
          <h1 className=" font-bold font-sans tracking-tight mb-3 text-center text-gray-900 text-[44px]">
            Featured Listing
          </h1>
        </div>

        <Slider {...settings}>
          {DUMMY_EXPENSES.map((items) => (
            <div key={items.id} className="pl-6">
              <div className="w-[378px] h-[600px]   rounded-lg   flex flex-col">
                <div className="w-full">
                  <img
                    src={items.img}
                    alt={items.title}
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="shadow  h-[330px]">
                  <div className="m-3 p-6  ">
                    <div className="text-xl text-custom-orange font-bold">
                      {items.price}
                    </div>
                    <div className="text-2xl mt-3 font-sans font-[700]">
                      {items.title}
                    </div>
                    <div className="text-base mt-2 text-slate-500">
                      {items.description}
                    </div>
                  </div>
                  <div className="flex gap-4    justify-center text-slate-500 cursor-pointer">
                    <div className="flex flex-col border-r-[1px] pr-3 border-slate-300 ">
                      <MdOutlineBedroomChild />
                      <span>{items.text1}</span>
                    </div>
                    <div className="flex flex-col border-r-[1px] pr-3 border-slate-300">
                      <MdOutlineBathroom />
                      <span>{items.text2}</span>
                    </div>
                    <div className="flex flex-col border-r-[1px] pr-3 border-slate-300 r">
                      <IoCarSportOutline />
                      <span>{items.text3}</span>
                    </div>
            
                  </div>
                  <hr />
                  <div className="flex items-center text-slate-500 pl-8 pr-8 mt-7">
                    <img
                      className="w-[40px] h-[40px] rounded-full mr-4"
                      src={items.img2}
                      alt={items.name}
                    />
                    <div className="flex flex-col flex-grow">
                      <b>{items.name}</b>
                      <span>{items.text5}</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-slate-100 p-2 hover:bg-custom-orange hover:text-white rounded">
                        <TiArrowMinimise size="2rem" />
                      </div>
                      <div className="bg-slate-100 p-2 hover:bg-custom-orange hover:text-white rounded">
                        <BsHeart size="1.6rem" />
                      </div>
                      <div className="bg-slate-100 p-2 hover:bg-custom-orange hover:text-white rounded">
                        <CiCirclePlus size="2rem" />
                      </div>
                    </div>
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
