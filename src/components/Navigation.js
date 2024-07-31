import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
export default function Navbar() {
  return (
    <div>
      <div className="flex justify-evenly mt-10 item-center">
        <div className="flex ">
          <FaHome size="2rem" className="text-orange-700 m-1" />
          <p className="font-bold text-3xl text-cyan-950">Quarter</p>
        </div>
        <div className="flex justify-evenly  ">
          <ul className="flex flex-row text-2xl gap-7 ">
            <li>Home+</li>
            <li>About+</li>
            <li>Property+</li>
            <li>News+</li>
            <li>Pages+</li>
            <li>Contact+</li>
          </ul>
        </div>
        <div className="flex flex-row gap-3 ">
          <div className="shadow shadow-neutral-300 p-1 w-10 h-10 items-center">
            <IoIosSearch size="2rem " className="text-cyan-950" />
          </div>
          <div className="shadow shadow-neutral-300 w-10 p-1 h-10 items-center">
            <IoIosContact size="2rem " className="text-cyan-950" />
          </div>
          <div className="shadow shadow-neutral-300 p-1 w-10 h-10 items-center">
            <MdOutlineAddShoppingCart size="2rem " className="text-cyan-950" />
          </div>
        </div>
      </div>
    </div>
  );
}
