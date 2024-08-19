import CountUp, { useCountUp } from "react-countup";


export default function App() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="h-[400px] bg-slate-100 mt-10 flex justify-center items-center gap-20 p-[120px 0px 70px]">
      <div className=" w-64 h-64  flex flex-col  gap-4 justify-center items-center   ">
        <svg viewBox="0 0 24 24"  className="size-20">
          <path d="m21.5,0H2.5C1.121,0,0,1.122,0,2.5v21.5h24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5ZM3,11h8V3H3v8Zm1-7h6v6h-6v-6Zm9,7h8V3h-8v8Zm1-7h6v6h-6v-6ZM3,21h8v-8H3v8Zm1-7h6v6h-6v-6Zm9,7h8v-8h-8v8Zm1-7h6v6h-6v-6Z" />
        </svg>

        <CountUp
          end={560}
          enableScrollSpy
          className="text-[44px]  font-bold font-sans "
        />
        <h6 className="text-slate-500 text-[16px] font-semibold ">
          Total Area Sq
        </h6>
      </div>
      <div className=" w-64 h-64  flex flex-col gap-4 justify-center items-center   ">
        <svg viewBox="0 0 24 24" className="size-20 text-custom-orange">
          <path d="m24,18c-2.936,0-3.93-5.16-4-5.545v-3.455h2v-1c-2.936,0-3.93-5.16-4-5.545V0h-1v2H7s0-2,0-2h-1v2.455c-.07.386-1.064,5.545-4,5.545v1h2v3.455c-.07.386-1.064,5.545-4,5.545v1h2v5h1v-5h5v5h1v-5h6v5h1v-5h5v5h1v-5h2v-1Zm-5-6h-4s0-3,0-3h4v3Zm-5-3v3h-4s0-3,0-3h4ZM6.911,3h10.179c.22,1.012.915,3.573,2.473,5H4.438c1.558-1.427,2.253-3.988,2.473-5Zm2.089,6v3h-4s0-3,0-3h4Zm-6.562,9c1.558-1.427,2.253-3.988,2.473-5h14.179c.22,1.012.915,3.573,2.473,5H2.438Z" />
        </svg>

        <CountUp
          end={197}
          enableScrollSpy
          className="text-[44px] font-bold font-sans "
        />
        <h6 className="text-slate-500 text-[16px] font-semibold  ">
          Apartment Sold
        </h6>
      </div>
      <div className=" w-64 h-64  flex flex-col gap-4 justify-center items-center p-lg ">
        <svg viewBox="0 0 24 24" className="size-20 text-custom-orange">
          <path d="m5,19.013c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm7-1c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-4,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1ZM24,2v12.513c0,1.378-1.122,2.5-2.5,2.5h-4.5v-1.207l6-6V3.184l-7,6.534v3.795c0,1.055-.659,1.954-1.584,2.321.956.732,1.584,1.872,1.584,3.167,0,2.206-1.794,4-4,4H3.937C1.731,23-.063,21.206-.063,19c0-1.302.635-2.45,1.602-3.181-.902-.378-1.538-1.269-1.538-2.306v-4.511h5V1l5.063-.013c.985,0,1.88.581,2.282,1.479l2.971,6.521h0l7.487-6.987h1.197ZM6,9l8.217-.013-2.783-6.109c-.242-.543-.78-.891-1.371-.891l-4.063.013v7Zm6.126,7.013H3.811c-1.595.067-2.874,1.376-2.874,2.987,0,1.654,1.346,3,3,3h8.063c1.654,0,3-1.346,3-3,0-1.611-1.279-2.92-2.874-2.987Zm2.874-6.025l-14,.011v3.514c0,.827.673,1.5,1.5,1.5h11c.827,0,1.5-.673,1.5-1.5v-3.525Zm8,1.232l-4.793,4.793h3.293c.827,0,1.5-.673,1.5-1.5v-3.293Z" />
        </svg>

        <CountUp
          end={268}
          enableScrollSpy
          className="text-[44px] font-bold font-sans "
        />
        <p className="text-slate-500 text-[16px] font-semibold  ">
          Total Construction
        </p>
      </div>
      <div className=" w-64 h-64  flex flex-col gap-4 justify-center items-center p-lg ">
        <svg viewBox="0 0 24 24" className="size-20 text-custom-orange" >
          <path d="m22,9.05v-2.55c0-3.033-2.468-5.5-5.5-5.5H7.5c-3.032,0-5.5,2.467-5.5,5.5v2.55c-1.14.232-2,1.242-2,2.45v5c0,1.557.795,2.932,2,3.74v2.26c0,.276.224.5.5.5s.5-.224.5-.5v-1.757c.469.166.974.257,1.5.257h15c.526,0,1.031-.091,1.5-.257v1.757c0,.276.224.5.5.5s.5-.224.5-.5v-2.26c1.205-.808,2-2.183,2-3.74v-5c0-1.207-.86-2.217-2-2.45Zm-10.5,10.95h-7c-1.93,0-3.5-1.57-3.5-3.5v-5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v4c0,.276.224.5.5.5h3.5c1.93,0,3.5,1.57,3.5,3.5v.5Zm-3.5-5h-3v-3.5c0-1.207-.86-2.217-2-2.45v-2.55c0-2.481,2.019-4.5,4.5-4.5h9c2.481,0,4.5,2.019,4.5,4.5v2.55c-1.14.232-2,1.242-2,2.45v3.5h-3c-1.739,0-3.251.992-4,2.439-.749-1.448-2.261-2.439-4-2.439Zm15,1.5c0,1.93-1.57,3.5-3.5,3.5h-7v-.5c0-1.93,1.57-3.5,3.5-3.5h3.5c.276,0,.5-.224.5-.5v-4c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v5Z" />
        </svg>

        <CountUp
          end={340}
          enableScrollSpy
          className="text-[44px] font-bold font-sans "
        />
        <p className="text-slate-500 text-[16px] font-semibold  ">
          Apartio Rooms
        </p>
      </div>
    </div>
  );
}
