import React from "react";
import s1 from "../pics/s1.jpg";
import s2 from "../pics/s2.jpg";
import s3 from "../pics/s3.jpg";
import s4 from "../pics/s4.png";

import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";

export default function TodaySellProperties() {
  const sellProperties = [
    {
      text1: "Today Sell Properties",
      text2:
        "Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information",
      text3: "Live Music Cocerts at Luviana",
      text4: "Our SecretIsland Boat Tour is Just for You",
      text5: "Live Music Cocerts at Luviana",
      text6: "Live Music Cocerts at Luviana",
      text7: "Bedrooms",
      text8: "Bathrooms",
      text9: "Car Parking",
      text10: "square Ft",
      img: s1,
      img1: s2,
      img2: s3,
      img3: s4,
    
    },
  ];

  return (
    <div className="p-[120px 0px 90px]">
      {sellProperties.map((items, index) => (
        <div key={index} className="flex justify-center mt-40">
          <div className="w-1/3">
            <button className="bg-red-50 p-2 w-[108px] h-[30px] text-[16px] rounded-full  text-custom-orange mb-4">
              About Us
            </button>
            <div className="text-3xl font-bold tracking-tight  text-gray-900 text-[44px]">
              {items.text1}
            </div>
            <div className="text-slate-400  text-[16px] mt-4  w-[560px]">{items.text2}</div>
            {/* live music div */}
            <div className="mt-5 mb-10   p-2 text-slate-400  text-[16px]">
              <div className="m-2"><span className="text-custom-orange">---</span> {items.text3}</div>
              <div className="m-2"><span className="text-custom-orange">---</span> {items.text4}</div>
              <div className="m-2"><span className="text-custom-orange">---</span> {items.text5}</div>
              <div className="m-2"><span className="text-custom-orange">---</span> {items.text6}</div>
            </div>
            {/* bedrooom Div */}
            <div className="flex gap-5 mb-8 text-slate-400 text-[14px] p-2 cursor-pointer">
              <div>
                <MdOutlineBedroomChild />
                {items.text7}
              </div>
              <div>
                <MdOutlineBathroom />
                {items.text8}
              </div>
              <div>
                <IoCarSportOutline />
                {items.text9}
              </div>
              <div>
                <FaRegSquare />
                {items.text10}
              </div>
            </div>

            {/* images div */}
            <div className="flex gap-2 cursor-pointer">
              <img
                src={items.img}
                alt="Sell-Properties-Pics"
                className="w-[160px] h-[114px]"
              />
              <img
                src={items.img1}
                alt="Sell-Properties-Pics"
                className="w-[160px] h-[114px]"
              />
              <img
                src={items.img2}
                alt="Sell-Properties-Pics"
                className="w-[160px] h-[114px]"
              />
            </div>
          </div>
          {/* side pics div */}
          <div className="flex  ">
            <div>
              <img
                src={items.img3}
                alt="Sell-Properties-Pics"
                className="w-[540px]  h-[573px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
