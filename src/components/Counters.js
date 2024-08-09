import CountUp, { useCountUp } from "react-countup";
import { FcBusinessContact } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcRating } from "react-icons/fc";

export default function App() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="h-[400px] bg-slate-100 mt-10 flex justify-center items-center gap-20">
      <div className="content w-64 h-64  flex flex-col justify-center items-center p-6 rounded-lg ">
        <FcBusinessContact size="4rem" className="mb-4" />
        <CountUp
          end={560}
          enableScrollSpy
          className="text-6xl font-[900] "
        />
        <p className="text-slate-500 font-semibold mt-3 ">Total Area Sq</p>
      </div>
      <div className="content w-64 h-64  flex flex-col justify-center items-center p-6 rounded-lg ">
        <FcEngineering size="4rem" className="mb-4" />
        <CountUp
          end={197}
          enableScrollSpy
           className="text-6xl font-[900] "
        />
        <p className="text-slate-500 font-semibold mt-3 ">Apartment Sold</p>
      </div>
      <div className="content w-64 h-64  flex flex-col justify-center items-center p-6 rounded-lg ">
        <FcCustomerSupport size="4rem" className="mb-4"/>
        <CountUp
          end={268}
          enableScrollSpy
          className="text-6xl font-[900] "
        />
        <p className="text-slate-500 font-semibold mt-3 ">Total Construction</p>
      </div>
      <div className="content w-64 h-64  flex flex-col justify-center items-center p-6 rounded-lg ">
        <FcRating size="4rem" className="mb-4" />
        <CountUp
          end={340}
          enableScrollSpy
         className="text-6xl font-[900] "
        />
        <p className="text-slate-500 font-semibold mt-3 ">Apartio Rooms</p>
      </div>
    </div>
  );
}
