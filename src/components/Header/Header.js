import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

export default function InfoNavbar() {
  return (
    <div className="bg-cyan-950 h-[41px] flex items-center g justify-center ">
  <div className="flex justify-between items-center w-full px-4 max-w-screen-lg">
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <IoIosMail size="1.2rem" className="text-custom-orange" />
        <p className="font-bold text-white">Info@webGmail.com</p>
      </div>
      <div className="flex items-center gap-2">
        <FaLocationDot size="1.2rem" className="text-custom-orange" />
        <p className="font-bold text-white">15/A, Nest Tower, NYC</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <FaFacebookSquare size="1.2rem" className="text-white" />
      <FaTwitter size="1.2rem" className="text-white" />
      <FaSquareInstagram size="1.2rem" className="text-white" />
      <GiCarWheel size="1.2rem" className="text-white" />
      <button className="bg-custom-orange h-11 text-white block px-4 py-2 text-sm">
        Add Listing
      </button>
    </div>
  </div>
</div>

  );
}
