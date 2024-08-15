import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiArrowMinimise } from "react-icons/ti";
import { BsHeart } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";

import House2 from "../pics/House2.jpg";
import House3 from "../pics/House3.jpg";
import House4 from "../pics/House4.jpg";
import Button from "./Button";
import House6 from "../pics/House6.jpg";
import House7 from "../pics/House7.jpg";
import person from "../pics/person.jpg";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import "./arrows.css";
function NextArrow({ currentSlide, slideCount, className, ...props }) {
  return <FaArrowLeft {...props} className={`featureLeft  ${className}`} />;
}

function PrevArrow({ currentSlide, slideCount, className, ...props }) {
  console.log(props);

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
    dots:true,
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
          <h1 className=" font-bold tracking-tight mb-3 text-center text-gray-900 text-[44px]">
            Featured Listing
          </h1>
        </div>

        <Slider {...settings}>
          {DUMMY_EXPENSES.map((items) => (
            <div key={items.id} className="p-2">
              <div className="w-[400px] h-[600px]   rounded-lg   flex flex-col">
                <div className="w-full">
                  <img
                    src={items.img}
                    alt={items.title}
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="shadow h-[330px]">
                  <div className="m-3 p-6 ">
                    <div className="text-xl text-orange-700 font-bold">
                      {items.price}
                    </div>
                    <div className="text-lg font-bold">{items.title}</div>
                    <div className="text-base text-gray-600">
                      {items.description}
                    </div>
                  </div>
                  <div className="flex gap-3 w-full mt-2 pl-8 text-slate-600 cursor-pointer">
                    <div className="flex flex-col items-center">
                      <MdOutlineBedroomChild />
                      <span>{items.text1}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <MdOutlineBathroom />
                      <span>{items.text2}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <IoCarSportOutline />
                      <span>{items.text3}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FaRegSquare />
                      <span>{items.text4}</span>
                    </div>
                  </div>
                <hr/>
                  <div className="flex items-center pl-8 pr-8 mt-10">
                    <img
                      className="w-[40px] h-[40px] rounded-full mr-4"
                      src={items.img2}
                      alt={items.name}
                    />
                    <div className="flex flex-col flex-grow">
                      <b>{items.name}</b>
                      <p>{items.text5}</p>
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
