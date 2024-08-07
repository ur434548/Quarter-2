import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

export default function InfoNavbar() {
  return (
    <div className="bg-cyan-950  h-auto">
      <div className="flex justify-around  content-center">
        <div className="flex justify-evenly self-center content-center  gap-1">
          <IoIosMail size="1.2rem " className="text-orange-800" />
          <p className="font-bold text-white">Info@webGmail.com</p>

          <FaLocationDot size="1.2rem" className="text-orange-800" />
          <p className="font-bold text-white">15/A,Nest Tower,NYC</p>
        </div>
        <div></div>
        <div className="flex justify-center  items-center h-10">
          <div className="flex gap-2 items-center">
            <FaFacebookSquare size="1.2rem " className="text-white"/>
            <FaTwitter size="1.2rem" className="text-white" />
            <FaSquareInstagram size="1.2rem" className="text-white"/>
            <GiCarWheel size="1.2rem" className="text-white" />
            <button className="bg-orange-200 text-sm p-1 rounded-full text-red-900">
              Add Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
