import React from "react";
import House1 from "../pics/House1.jpg";
import { FcHome } from "react-icons/fc";
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
      {leadingEstate.map((items ,index) => (
        <div key={index} className="flex justify-center mt-20">
          <img
            src={items.img}
            alt="Pics"
            className="w-[550px] h-[650px] rounded-3xl p-3"
          />
          <div className="mt-5 ml-20">
            <button className="bg-orange-100 p-2 w-40 rounded-full  text-red-900 mb-4">
              About Us
            </button>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
              {items.text1}
            </h1>

            <p className="text-slate-600 mt-5">{items.text2}</p>
            <div className="flex gap-[9px] ml-20 mt-10 text-slate-600 text-base ">
              <span className="bg-orange-300 p-1 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text3}

              <span className="bg-orange-300 p-1 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text4}
            </div>
            <div className="flex  gap-[9px] ml-20 mt-10 text-slate-600 text-base">
              <span className="bg-orange-300 p-1 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text5}

              <span className="bg-orange-300 p-1 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text6}
            </div>
            <div className=" text-slate-500 mt-5 w-[800px] mt-20 bg-orange-50 p-10 text-slate-500 text-base ">
              {items.text7}
            </div>
            <button className="mt-16  w-36 h-12 bg-orange-500 text-white text-1xl font-semibold  ">
              Our Services
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
