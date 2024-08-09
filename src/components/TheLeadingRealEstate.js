import React from "react";
import House1 from "../pics/House1.jpg";
import { FcHome } from "react-icons/fc";
import Button from "./Button";
export default function TheLeadingRealEstate() {
  const leadingEstate = [
    {
      img: House1,
      text1: "The Leading Real Estate Rental MarketPlace.",
      text2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem",
      text3: "Smart Home Design",
      text4: "Beautiful Scene Around",
      text5: "Exceptional Lifestyle",
      text6: "Complete 24/7 Security",
      text7:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];
  return (
    <div>
      {leadingEstate.map((items, index) => (
        <div key={index} className="flex justify-center mt-20">
          <img
            src={items.img}
            alt="Pics"
            className="w-[550px] h-[650px] rounded-3xl p-3"
          />
          <div className="mt-5 ml-20">
            <Button
              className="bg-red-50 p-2 w-40 rounded-full  text-custom-orange
             mb-4"
            >
              About Us
            </Button>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
              {items.text1}
            </h1>

            <p className="text-slate-600 mt-5">{items.text2}</p>
            <div className="flex gap-[9px] ml-20 mt-10 text-slate-600 text-base ">
              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text3}

              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text4}
            </div>
            <div className="flex  gap-[9px] ml-20 mt-10 text-slate-600 text-base">
              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text5}

              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text6}
            </div>
            <div className=" text-slate-500 mt-5 w-[800px] mt-20 bg-orange-50 p-10 text-slate-500 text-base ">
              {items.text7}
            </div>
            <Button className="mt-16  w-40 h-12 bg-custom-orange text-white text-lg  ">
              Our Services
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
