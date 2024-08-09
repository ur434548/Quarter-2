import React from "react";
import { FcHome } from "react-icons/fc";
export default function CardComponent({ posts }) {
  return (
    <div className="flex  justify-center items-center rounded bg-white shadow-2xl mt-20   p-10">
      <article key={posts.id} className="w-[300px]  h-[350px] flex flex-col items-center">
        <div className="p-5">
          <FcHome size="7rem" className="bg-red-100 p-4 rounded-full"  />
        </div>
        <h3 className="mt-3  text-xl font-semibold  ">
          <a href={posts.href}>{posts.title}</a>
        </h3>
        <p className="mt-4  text-gray-600 items-center ">{posts.description}</p>
      </article>
    </div>
  );
}
