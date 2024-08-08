import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import ArrowComponent from "./ArrowComponent";
export default function FeaturedListing() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      img: House2,
      price: "$34,900",
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
      price: "$34,900",
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
      price: "$34,900",
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
      price: "$34,900",
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
      price: "$34,900",
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
      price: "$34,900",
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
    nextArrow: <ArrowComponent icon=">" />,
    prevArrow: <ArrowComponent icon="<" />,
  };

  return (
    <div className="w-full">
      <div className="w-[1690px] mx-auto mt-15">
        <div className="flex flex-col items-center mx-auto my-10">
          <Button>About Us</Button>
          <h1 className="text-3xl font-bold tracking-tight mb-3 text-center text-gray-900 sm:text-5xl">
            Featured Listing
          </h1>
        </div>

        <Slider {...settings}>
          {DUMMY_EXPENSES.map((items) => (
            <div key={items.id} className="p-2">
              <div className="w-[400px] h-[600px]  rounded-lg  shadow-xl flex flex-col">
                <div className="w-full">
                  <img
                    src={items.img}
                    alt={items.title}
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="m-3 p-6">
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
                <div className="flex pl-8 mt-10 items-center">
                  <img
                    className="w-[40px] h-[40px] rounded-full mr-4"
                    src={items.img2}
                    alt={items.name}
                  />
                  <div>
                    <div className="font-bold">{items.name}</div>
                    <div className="text-gray-600">{items.text5}</div>
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
