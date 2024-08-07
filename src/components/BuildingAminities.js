import CardsBootstrap from "./CardsBootstrap";
import Button from "./Button";
import { FaCar } from "react-icons/fa";
import { PiSwimmingPoolDuotone } from "react-icons/pi";
import { RiChatPrivateLine } from "react-icons/ri";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { RiHomeSmileFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";
function TextExample() {
  return (
    <div>
      <div className="flex flex-col items-center mx-auto mt-20">
        <Button>Our Animities</Button>
        <h1 className="text-3xl font-bold tracking-tight  text-center text-gray-900 sm:text-5xl ">
          Building Aminities
        </h1>
      </div>
      <div className="mt-10 ">
        <div className="flex flex-row mx-auto justify-center  gap-4 mb-4  ">
          <div>
            <CardsBootstrap>
              <FaCar
                size="6rem"
                className="text-orange-400 p-4 bg-orange-100 rounded-full"
              />
              <h3 className=" text-center">Parking Space</h3>
              <FaArrowRight size="1rem" className="text-slate-500 " />
            </CardsBootstrap>
          </div>

          <CardsBootstrap>
            <PiSwimmingPoolDuotone
              size="6rem"
              className="text-orange-400 p-4 bg-orange-100 rounded-full"
            />
            <h3 className=" text-center">Swimming Pool</h3>
            <FaArrowRight className="text-slate-500 " />
          </CardsBootstrap>
          <CardsBootstrap>
            <RiChatPrivateLine
              size="6rem"
              className="text-orange-400 p-4 bg-orange-100 rounded-full"
            />
            <h3 className=" text-center">Private Security</h3>
            <FaArrowRight className="text-slate-500 " />
          </CardsBootstrap>
          <CardsBootstrap>
            <FaBriefcaseMedical
              size="6rem"
              className="text-orange-400 p-4 bg-orange-100 rounded-full"
            />
            <h3 className=" text-center">Medical Center</h3>
            <FaArrowRight className="text-slate-500 "/>
          </CardsBootstrap>
        </div>
        <div className="flex flex-row mx-auto justify-center gap-4">
        
        
          <CardsBootstrap>
            <IoLibrarySharp
              size="6rem"
              className="text-orange-400 p-4 bg-orange-100 rounded-full"
            />
            <h3 className=" text-center">Library Area </h3>
            <FaArrowRight className="text-slate-500 " />
          </CardsBootstrap>
          <CardsBootstrap>
            <IoIosBed
              size="6rem"
              className="text-orange-400 p-4 bg-orange-100 rounded-full"
            />
            <h3 className=" text-center">King Size Beds</h3>
            <FaArrowRight className="text-slate-500 "/>
          </CardsBootstrap>
          <CardsBootstrap>
            <RiHomeSmileFill
              size="6rem"
              className="text-orange-400 p-4 bg-orange-100 rounded-full"
            />
            <h3 className=" text-center">Smart Homes</h3>
            <FaArrowRight className="text-slate-500 " />
          </CardsBootstrap>
          <CardsBootstrap className=" bg-white rounded-lg shadow-2xl">
            <SiYoutubekids
              size="6rem"
              className="text-orange-400 p-4 bg-orange-100 rounded-full"
            />
            <h3 className=" text-center">Kid's Playland</h3>
            <FaArrowRight className="text-slate-500 " />
          </CardsBootstrap>
        </div>
      </div>
    </div>
  );
}

export default TextExample;
