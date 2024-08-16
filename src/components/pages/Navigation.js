import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function Navigation() {
  return (
    <div className="h-[100px] sticky top-0 bg-white font-sans  shadow z-50">
      <div className="flex justify-around items-center h-full px-4 ">
        <div className="flex items-center gap-2">
          <FaHome size="4rem" className="text-custom-orange" />
          <p className="font-bold text-3xl text-cyan-950">Quarter</p>
        </div>

        <ul className="flex flex-row gap-9 text-2xl text-cyan-950 ">
          <li className="flex items-center gap-1">
            Home
            <MdOutlineKeyboardArrowDown  className="mt-2" />
          </li>
          <li className="flex items-center  gap-1">About<MdOutlineKeyboardArrowDown  className="mt-2" /></li>
          <li className="flex items-center gap-1">Property<MdOutlineKeyboardArrowDown  className="mt-2" /></li>
          <li className="flex items-center gap-1">News<MdOutlineKeyboardArrowDown  className="mt-2" /></li>
          <li className="flex items-center gap-1">Pages<MdOutlineKeyboardArrowDown  className="mt-2" /></li>
          <li className="flex items-center gap-1">Contact<MdOutlineKeyboardArrowDown  className="mt-2" /></li>
        </ul>

        <div className="flex gap-3">
          <div className="shadow shadow-neutral-300 p-2 w-12 h-12 flex items-center justify-center">
            <IoIosSearch size="2rem" className="text-cyan-950" />
          </div>
          <div className="shadow shadow-neutral-300 p-2 w-12 h-12 flex items-center justify-center">
            <IoIosContact size="2rem" className="text-cyan-950" />
          </div>
          <div className="shadow shadow-neutral-300 p-2 w-12 h-12 flex items-center justify-center">
            <MdOutlineAddShoppingCart size="2rem" className="text-cyan-950" />
          </div>
        </div>
      </div>
    </div>
  );
}
