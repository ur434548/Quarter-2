import React from "react";
import { FcHome } from "react-icons/fc";

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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-full">
          <button className="bg-orange-100 text-sm p-2 rounded-full text-red-900 mb-4">
            Our Services
          </button>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Main Focus
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 shadow-2xl">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl ml-4 mt-[-30px] flex-col items-start justify-between w-80 "
            >
              <div className="group relative">
                <div className="ml-10">
                  <FcHome size="7rem" />
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 ml-10">
                  <a href={post.href}>
                    <span className="absolute inset-0 ml-10" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 ml-10">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4"></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
