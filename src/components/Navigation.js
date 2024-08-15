import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
export default function Navbar() {
  return (
    <div className="h-[130px] sticky top-0 bg-white  shadow z-50">
    <div className="flex justify-around items-center h-full px-4">
      
      <div className="flex items-center gap-2">
        <FaHome size="2rem" className="text-custom-orange" />
        <p className="font-extrabold text-3xl text-cyan-950">Quarter</p>
      </div>
      
    
      <ul className="flex flex-row gap-9 text-xl text-cyan-950 font-bold">
        <li>Home+</li>
        <li>About+</li>
        <li>Property+</li>
        <li>News+</li>
        <li>Pages+</li>
        <li>Contact+</li>
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
