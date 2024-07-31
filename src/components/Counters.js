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
    <div className="h-96 bg-slate-100 mt-10 flex justify-center items-center gap-20">
      <div className="content w-64 h-64 bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-lg">
        <FcBusinessContact size="4rem" />
        <CountUp
          end={100}
          enableScrollSpy
          className="text-4xl font-bold text-center"
        />
        <p className="text-slate-500 font-semibold mt-3 ">Total Area Sq</p>
      </div>
      <div className="content w-64 h-64 bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-lg">
        <FcEngineering size="4rem" />
        <CountUp
          end={100}
          enableScrollSpy
          className="text-4xl font-bold text-center"
        />
        <p className="text-slate-500 font-semibold mt-3 ">Apartment Sold</p>
      </div>
      <div className="content w-64 h-64 bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-lg">
        <FcCustomerSupport size="4rem" />
        <CountUp
          end={100}
          enableScrollSpy
          className="text-4xl font-bold text-center"
        />
        <p className="text-slate-500 font-semibold mt-3 ">Total Construction</p>
      </div>
      <div className="content w-64 h-64 bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-lg">
        <FcRating size="4rem" />
        <CountUp
          end={100}
          enableScrollSpy
          className="text-4xl font-bold text-center"
        />
        <p className="text-slate-500 font-semibold mt-3 ">Apartio Rooms</p>
      </div>
    </div>
  );
}
