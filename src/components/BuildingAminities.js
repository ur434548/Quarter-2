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
      <div className="flex flex-col items-center mx-auto mt-20 mb-20 ">
        <Button  className="bg-red-100 p-2 w-[130px] h-[30px]  mt-10 rounded-full text-center text-custom-orange mb-4">Our Animities</Button>
        <h1 className="text-3xl font-bold  text-center  text-[44px] ">
          Building Aminities
        </h1>
      </div>
      <div className="mt-10 ">
        <div className="flex flex-row mx-auto justify-center  gap-4 mb-4  ">
        
            <CardsBootstrap className="hover:bg-custom-orange hover:text-white" >
              <FaCar
                size="6rem"
                className="text-custom-orange p-4 bg-red-100 rounded-full"
              />
              <h3 className=" text-center">Parking Space</h3>
              <FaArrowRight size="1rem" className="text-slate-500  " />
            </CardsBootstrap>
          

          <CardsBootstrap className="hover:bg-custom-orange hover:text-white">
            <PiSwimmingPoolDuotone
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Swimming Pool</h3>
            <FaArrowRight className="text-slate-500 " />
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange hover:text-white">
            <RiChatPrivateLine
              size="6rem"
             className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Private Security</h3>
            <FaArrowRight className="text-slate-500 " />
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange hover:text-white">
            <FaBriefcaseMedical
              size="6rem"
             className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Medical Center</h3>
            <FaArrowRight className="text-slate-500 "/>
          </CardsBootstrap>
        </div>
        <div className="flex flex-row mx-auto justify-center gap-4">
        
        
          <CardsBootstrap className="hover:bg-custom-orange hover:text-white">
            <IoLibrarySharp
              size="6rem"
              className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Library Area </h3>
            <FaArrowRight className="text-slate-500 " />
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange hover:text-white">
            <IoIosBed
              size="6rem"
               className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">King Size Beds</h3>
            <FaArrowRight className="text-slate-500 "/>
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange hover:text-white">
            <RiHomeSmileFill
              size="6rem"
             className="text-custom-orange p-4 bg-red-100 rounded-full"
            />
            <h3 className=" text-center">Smart Homes</h3>
            <FaArrowRight className="text-slate-500 " />
          </CardsBootstrap>
          <CardsBootstrap className="hover:bg-custom-orange hover:text-white">
            <SiYoutubekids
              size="6rem"
               className="text-custom-orange p-4 bg-red-100 rounded-full"
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
