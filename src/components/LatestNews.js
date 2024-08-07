import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiAdminLine } from "react-icons/ri";
import Button from "./Button";
import { MdEco } from "react-icons/md";
import House7 from "../pics/House7.jpg";
import { SlCalender } from "react-icons/sl";
import ArrowComponent from "./ArrowComponent";
export default function FeaturedListing() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      img: House7,
      text1: "by:Admin",
      text2: "Decorate",
      title: "Recent Commercial Real Estate Transactions",
      text4: "June 24, 2021",
      text3: "READ MORE",
    },
    {
      id: "e2",
      img: House7,
      text1: "by:Admin",
      text2: "Decorate",
      title: "TRecent Commercial Real Estate Transactions",
      text4: "June 24, 2021",
      text3: "READ MORE",
    },
    {
      id: "e3",
      img: House7,
      text1: "by:Admin",
      text2: "Decorate",
      title: "Recent Commercial Real Estate Transactions",
      text4: "June 24, 2021",
      text3: "READ MORE",
    },
    {
      id: "e4",
      img: House7,
      text1: "by:Admin",
      text2: "Decorate",
      title: "Recent Commercial Real Estate Transactions",
      text4: "June 24, 2021",
      text3: "READ MORE",
    },
    {
      id: "e5",
      img: House7,
      text1: "by:Admin",
      text2: "Decorate",
      title: "Recent Commercial Real Estate Transactions",
      text4: "June 24, 2021",
      text3: "READ MORE",
    },
    {
      id: "e6",
      img: House7,
      text1: "by:Admin",
      text2: "Decorate",
      title: "Recent Commercial Real Estate Transactions",
      text4: "June 24, 2021",
      text3: "READ MORE",
    },
    {
      id: "e7",
      img: House7,
      text1: "by:Admin",
      text2: "Decorate",
      title: "Recent Commercial Real Estate Transactions",
      text4: "June 24, 2021",
      text3: "READ MORE",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowComponent icon=">" />,
    prevArrow: <ArrowComponent icon="<" />,
  };

  return (
    <div className="w-full">
      <div className="w-[1690px] mx-auto mt-15">
        <div className="flex flex-col items-center mx-auto mt-10">
          <Button>News & Blogs </Button>
          <h1 className="text-3xl font-bold tracking-tight mb-10 text-center text-gray-900 sm:text-5xl">
            Latest News Feeds
          </h1>
        </div>

        <Slider {...settings}>
          {DUMMY_EXPENSES.map((items) => (
            <div key={items.id} className="p-2">
              <div className="w-[400px] h-[450px]  shadow-xl flex flex-col">
                <img
                  src={items.img}
                  alt={items.title}
                  className="w-full h-[220px] object-cover "
                />
                <div className="flex justify-between p-2">
                  <div className="flex items-center">
                    <RiAdminLine
                      size="1.4rem"
                      className="text-orange-600 mr-2"
                    />
                    {items.text1}
                  </div>
                  <div className="flex items-center">
                    <MdEco size="1.4rem" className="text-orange-600 mr-2" />
                    {items.text2}
                  </div>
                </div>
                <div className="text-2xl font-bold p-2">{items.title}</div>
                <hr />
                <div className="flex gap-32 p-[22px]">
                  <div className="flex items-center ">
                    <SlCalender
                      size="1.2rem"
                      className="text-orange-600 mr-2"
                    />
                    {items.text4}
                  </div>
                  <div className="p-2 text-orange-600 ">{items.text3}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
