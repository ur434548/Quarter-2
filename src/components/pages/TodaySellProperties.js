import React from "react";
import s1 from "../../assests/images/s1.jpg";
import s2 from "../../assests/images/s2.jpg";
import s3 from "../../assests/images/s3.jpg";
import s4 from "../../assests/images/s4.png";

import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";
import { MdOutlineHorizontalRule } from "react-icons/md";

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
            <button className="bg-red-100 p-2 w-[108px] h-[30px] text-[15px] rounded-full  text-custom-orange mb-4">
              About Us
            </button>
            <div className="text-3xl font-bold font-sans tracking-tight  text-gray-900 text-[44px]">
              {items.text1}
            </div>
            <div className="text-slate-500  text-[16px] mt-4  w-[560px]">
              {items.text2}
            </div>
            {/* live music div */}
            <div className="mt-4 mb-5 flex flex-col gap-2  p-2 text-slate-500  text-[16px]">
              <div className="m-2 flex gap-3 items-center ">
                <MdOutlineHorizontalRule className="text-custom-orange" />

                {items.text3}
              </div>
              <div className="m-2 flex gap-3 items-center ">
                <MdOutlineHorizontalRule className="text-custom-orange" />

                {items.text4}
              </div>
              <div className="m-2 flex gap-3 items-center ">
                <MdOutlineHorizontalRule className="text-custom-orange" />

                {items.text5}
              </div>
              <div className="m-2 flex gap-3 items-center ">
                <MdOutlineHorizontalRule className="text-custom-orange" />

                {items.text6}
              </div>
            </div>
            {/* bedrooom Div */}
            <div className="flex gap-5 mb-8 text-slate-500 text-[14px] p-2 cursor-pointer">
              <div className="flex flex-col gap-3">
              <div  className="flex  gap-2 items-center">
              <span>3</span>
              <MdOutlineBedroomChild />
              </div>
                {items.text7}
              </div>
              <div className="flex flex-col gap-3">
              <div  className="flex  gap-2 items-center">
              <span>2</span>
              <MdOutlineBathroom />
              </div>
                {items.text7}
              </div>
              <div className="flex flex-col gap-3">
              <div  className="flex  gap-2 items-center">
              <span>2</span>
              <IoCarSportOutline />
              </div>
                {items.text7}
              </div>
              <div className="flex flex-col gap-3">
              <div  className="flex  gap-2 items-center">
              <span>3450</span>
              <FaRegSquare />
              </div>
                {items.text7}
              </div>
            </div>

            {/* images div */}
            <div className="flex gap-3 cursor-pointer">
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
