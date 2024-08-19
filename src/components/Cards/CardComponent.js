import React from "react";
import { FcHome } from "react-icons/fc";
import { PiArrowRightLight } from "react-icons/pi";

export default function CardComponent({ posts }) {
  return (
    <div className="flex  justify-center items-center rounded bg-white shadow-xl mt-20  p-10">
      <article
        key={posts.id}
        className="w-[300px]  h-[350px] flex flex-col items-center"
      >
        <div className="p-5">
          <FcHome size="7rem" className="bg-red-100 p-4 rounded-full" />
        </div>
        <h3 className="mt-3  text-xl font-semibold  ">
          <a href={posts.href}>{posts.title}</a>
        </h3>
        <p className="mt-3  text-gray-600 items-center ">{posts.description}</p>
        <div className="relative block pb-[24px] group">
          <span className="absolute bottom-0 left-[-131px] w-[368px] rounded-full h-[3px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out"></span>
          <p className="text-slate-500 font-bold flex gap-2 justify-center content-center items-center transition-colors duration-300 ease-out group-hover:text-orange-600">
            {posts.footer} <PiArrowRightLight size={18} />
          </p>
        </div>
      </article>
    </div>
  );
}
