import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
export default function Navbar() {
  return (
    <div className="h-[80px] p-[22px 0px 0px 0px]">
      <div className="flex justify-evenly mt-10 item-center">
        <div className="flex  gap-2">
          <FaHome size="2rem" className="text-custom-orange " />
          <p className="font-bold text-3xl text-cyan-950">Quarter</p>
        </div>
        <div className="flex justify-evenly  ">
          <ul className="flex flex-row text-xl gap-7 text-[18px] p-[20px 10px 0px 0px] text-cyan-950 font-bold ">
            <li>Home+</li>
            <li>About+</li>
            <li>Property+</li>
            <li>News+</li>
            <li>Pages+</li>
            <li>Contact+</li>
          </ul>
        </div>
        <div className="flex flex-row gap-3 ">
          <div className="shadow shadow-neutral-300 p-2 w-12 h-12 items-center">
            <IoIosSearch size="2rem " className="text-cyan-950" />
          </div>
          <div className="shadow shadow-neutral-300 p-2 w-12 h-12 items-center">
            <IoIosContact size="2rem " className="text-cyan-950" />
          </div>
          <div className="shadow shadow-neutral-300 p-2 w-12 h-12 items-center">
            <MdOutlineAddShoppingCart size="2rem " className="text-cyan-950" />
          </div>
        </div>
      </div>
    </div>
  );
}
