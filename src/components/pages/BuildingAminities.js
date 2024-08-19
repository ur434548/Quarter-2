import CardsBootstrap from "../Cards/CardsBootstrap";
import Button from "../Button/Button";
import { FaCar } from "react-icons/fa";
import { PiSwimmingPoolDuotone } from "react-icons/pi";
import { RiChatPrivateLine } from "react-icons/ri";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { RiHomeSmileFill } from "react-icons/ri";
import { PiArrowRightLight } from "react-icons/pi";

import { SiYoutubekids } from "react-icons/si";
function TextExample() {
  return (
    <div>
      <div className="flex flex-col items-center mx-auto mt-20 mb-20 ">
        <Button className="bg-red-100 p-2 w-[130px] h-[30px]  mt-10 rounded-full text-center text-custom-orange ">
          Our Animities
        </Button>
        <h1 className="text-3xl font-bold font-sans text-center  text-[44px] ">
          Building Aminities
        </h1>
      </div>
      <div className="mt-10 ">
        <div className="flex flex-row mx-auto justify-center  gap-4 mb-5  ">
          <CardsBootstrap className="hover:bg-custom-orange shadow-white shadow border-white hover:text-white ">
            <FaCar
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className="text-center">Parking Space</h3>
            <PiArrowRightLight
              size="3rem"
              className="text-slate-500 bg-white p-2 border rounded-full hover:text-custom-orange hover:bg-white absolute mt-[240px]"
            />
          </CardsBootstrap>

          <CardsBootstrap className="hover:bg-custom-orange shadow-white shadow border-white hover:text-white">
            <PiSwimmingPoolDuotone
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Swimming Pool</h3>
            <PiArrowRightLight
              size="3rem"
              className="text-slate-500 bg-white p-2 border rounded-full border-inherit hover:text-custom-orange hover:bg-white absolute mt-[240px]  "
            />
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange shadow-white shadow border-white hover:text-white">
            <RiChatPrivateLine
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Private Security</h3>
            <PiArrowRightLight
              size="3rem"
              className="text-slate-500 bg-white p-2 border rounded-full border-inherit hover:text-custom-orange hover:bg-white absolute mt-[240px]  "
            />
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange shadow-white shadow border-white hover:text-white">
            <FaBriefcaseMedical
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Medical Center</h3>
            <PiArrowRightLight
              size="3rem"
              className="text-slate-500 bg-white p-2 border rounded-full border-inherit hover:text-custom-orange hover:bg-white absolute mt-[240px]  "
            />
          </CardsBootstrap>
        </div>
        <div className="flex flex-row mx-auto justify-center gap-4">
          <CardsBootstrap className="hover:bg-custom-orange shadow-white shadow border-white hover:text-white">
            <IoLibrarySharp
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Library Area </h3>
            <PiArrowRightLight
              size="3rem"
              className="text-slate-500 bg-white p-2 border rounded-full border-inherit hover:text-custom-orange hover:bg-white absolute mt-[240px]  "
            />
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange shadow-white shadow border-white hover:text-white">
            <IoIosBed
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">King Size Beds</h3>
            <PiArrowRightLight
              size="3rem"
              className="text-slate-500 bg-white p-2 border rounded-full border-inherit hover:text-custom-orange hover:bg-white absolute mt-[240px]  "
            />
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange shadow-white shadow border-white hover:text-white">
            <RiHomeSmileFill
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Smart Homes</h3>
            <PiArrowRightLight
              size="3rem"
              className="text-slate-500 bg-white p-2 border rounded-full border-inherit hover:text-custom-orange hover:bg-white absolute mt-[240px]  "
            />
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange shadow-white shadow border-white hover:text-white">
            <SiYoutubekids
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Kid's Playland</h3>
            <PiArrowRightLight
              size="3rem"
              className="text-slate-500 bg-white p-2 border rounded-full border-inherit hover:text-custom-orange hover:bg-white absolute mt-[240px]  "
            />
          </CardsBootstrap>
        </div>
      </div>
    </div>
  );
}

export default TextExample;
