import React from "react";
import Button from "../Button/Button";

import CardComponent from "./CardComponent";
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.",
      footer:"Find A Home -->"
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.",
      footer:"Find A Home -->"
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. ",
      footer:"Find A Home  -->"
  },
];

export default function Cards() {
  return (
    <div className=" bg-slate-100 h-[800px] p-[120px 0px 90px] mt-40">
      <div className="mx-auto pt-10">
        <div className="flex flex-col  items-center mt-20 justify-center ">
          <Button className="bg-red-100  text-[16px] p-2  rounded-full text-custom-orange w-[140px] h-[30px] ">
            Our Services
          </Button>
          <h1 className="text-3xl font-700 font-sans tracking-tight text-gray-900 text-[44px]">
            Our Main Focus
          </h1>
        </div>
        <div className="flex flex-wrap justify-center  gap-4   hover:text-custom-orange ">
          {posts.map((posts) => (
            <CardComponent key={posts.id} posts={posts} />
          ))}
        
        </div>
      </div>
    </div>
  );
}
