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
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
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
          <div className=" ml-20 p-1">
            <Button
              className="bg-red-50 p-2   w-[110px] h-[30px] rounded-full  text-custom-orange
             "
            >
              About Us
            </Button>
            <h1 className=" font-bold  w-[670px] text-gray-900 text-[44px]">
              {items.text1}
            </h1>

            <p className="text-slate-600 mt-2 w-[500px]">{items.text2}</p>
            <div className="flex gap-[9px]  mt-6 text-slate-600 text-base ">
              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text3}

              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text4}
            </div>
            <div className="flex  gap-[9px]  mt-10 text-slate-600 text-base">
              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text5}

              <span className="bg-red-100 w-12 h-12 p-2 rounded-full">
                <FcHome size="2rem" />
              </span>
              {items.text6}
            </div>
            <div className=" text-slate-500 mt-5 w-[600px] mt-20 bg-orange-50 p-10 text-slate-500 text-base ">
              {items.text7}
            </div>
            <Button class="group relative min-h-[50px] w-[170px] mt-14 overflow-hidden border border-white bg-custom-orange text-white text-[16px] shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-black before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-black after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
              <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-black before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-black after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
              <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                Our Services
              </span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
