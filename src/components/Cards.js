import React from "react";
import Button from "../components/Button";

import CardComponent from "./CardComponent";
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.",
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel.",
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. ",
  },
];

export default function Cards() {
  return (
    <div className=" bg-slate-100 h-[900px] p-20 mt-40">
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
          <Button className="bg-red-50  text-[16px] p-2  rounded-full text-custom-orange w-36 mb-4">
            Our Services
          </Button>
          <h2 className="text-3xl font-ultra-bold tracking-tight text-gray-900 text-5xl">
            Our Main Focus
          </h2>
        </div>
        <div className="flex flex-wrap justify-center  gap-5  ">
          {posts.map((posts) => (
            <CardComponent key={posts.id} posts={posts} />
          ))}
        </div>
      </div>
    </div>
  );
}
