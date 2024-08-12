import React from "react";
import "./custom.css";
import payment from "../pics/payment.png";
import { FaHome } from "react-icons/fa";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import { CiLocationOn } from "react-icons/ci";
export default function Footer() {
  const first = [
    {
      title: "Quarter",
      heading:
        "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.",
      location: "Brooklyn, New York, United States",
      phn: "+0123-456789",
      email: "example@example.com",
    },
  ];
  const second = [
    {
      title: "Company",
      about: "About",
      blog: "Blog",
      allProduct: "All Products",
      location: "Location Map",
      faq: "FAQ",
      contactUs: "Contact Us",
    },
  ];
  const third = [
    {
      title: "Services",
      order: "Order tracking",
      wish: "Wish List",
      login: "Login",
      account: "My Account",
      terms: "Terms & Condition",
      promotional: "Promotional Offers",
    },
  ];
  const fourth = [
    {
      title: "Customer Care",
      login: "Login",
      wish: "Wish List",
      allProduct: "All Products",
      location: "Location Map",
      faq: "FAQ",
      contactUs: "Contact Us",
    },
  ];
  const fifth = [
    {
      title: "NewsLetter",
      text: "Subscribe to our weekly Newsletter and receive updates via email.",

      accept: "We Accept",
      img: payment,
    },
  ];
  const last = [
    {
      title: "All Rights Reserved @ Company 2024",
      terms: "Terms & Conditions",

      claim: "Claim",
      privacy: "Privacy & Policy",
    },
  ];

  return (
    <div className="relative  bg-slate-900">
      <div className="flex justify-between absolute inset-0 items-center bg-custom-orange h-[190px] w-[1170px] p-[50px] transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[-30px] ">
        <div className="text-white text-right">
          <h1 className="text-4xl font-bold">Looking for a dream home</h1>
          <p className="mt-2 text-lg">
            We can help you realize your dream of a new home
          </p>
        </div>
        <div className="flex items-center">
          <button class="relative flex flex gap-2 h-[60px] w-[242px] text-[16px] items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-72">
            <span class="relative z-10">Explore Items</span>
            <FaLongArrowAltRight size="2rem"  />
          </button>
        </div>
      </div>
      <div className="Parent Container bg-slate-900 text-white flex p-[132px] mb-[-45px] flex-wrap p-10 mt-60 justify-center items-center ">
        <div className="w-[380px] h-[304px] p-[0px 35px 0px 0px]">
          {first.map((item, index) => (
            <ul key={index} className="p-4 text-[16px]">
              <li className="flex items-center mb-3">
                <FaHome size="2rem" className="text-custom-orange mr-2" />
                <p className="text-4xl font-extrabold "> {item.title}</p>
              </li>
              <li className="mb-3">{item.heading}</li>

              <li className="mb-3 flex items-center">
                <CiLocationOn className="mr-2" />
                {item.location}
              </li>

              <li className="mb-3 flex items-center hover:text-custom-orange">
                <MdOutlinePhoneForwarded className="mr-2" />
                {item.phn}
              </li>

              <li className="mb-3 flex items-center hover:text-custom-orange ">
                <MdOutlineEmail className="mr-2" />
                {item.email}
              </li>
              <li className="flex gap-4">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
                <FaYoutube />
              </li>
            </ul>
          ))}
        </div>

        {/* Repeat the same pattern for the other columns */}
        <div className="w-[255px] h-[301px]">
          {second.map((item, index) => (
            <ul key={index} className="p-4 text-[16px]">
              <p className="text-3xl font-extrabold mb-3 ">{item.title}</p>
              <li className="mb-3 hover:text-custom-orange">{item.about}</li>
              <li className="mb-3 hover:text-custom-orange">{item.blog}</li>
              <li className="mb-3 hover:text-custom-orange">
                {item.allProduct}
              </li>
              <li className="mb-3 hover:text-custom-orange">{item.location}</li>
              <li className="mb-3 hover:text-custom-orange">{item.faq}</li>
              <li className="mb-3 hover:text-custom-orange">
                {item.contactUs}
              </li>
            </ul>
          ))}
        </div>

        {/* Third column */}
        <div className="w-[255px] h-[301px]">
          {third.map((item, index) => (
            <ul key={index} className="p-4 text-[16px]">
              <p className="text-3xl font-extrabold mb-3 ">{item.title}</p>
              <li className="mb-3 hover:text-custom-orange">{item.order}</li>
              <li className="mb-3 hover:text-custom-orange">{item.wish}</li>
              <li className="mb-3 hover:text-custom-orange">{item.login}</li>
              <li className="mb-3 hover:text-custom-orange">{item.account}</li>
              <li className="mb-3 hover:text-custom-orange">{item.terms}</li>
              <li className="mb-3 hover:text-custom-orange">
                {item.promotional}
              </li>
            </ul>
          ))}
        </div>

        {/* Fourth column */}
        <div className="w-[255px] h-[301px]">
          {fourth.map((item, index) => (
            <ul key={index} className="p-4 text-[16px]">
              <p className="text-3xl font-extrabold mb-3 ">{item.title}</p>
              <li className="mb-3 hover:text-custom-orange">{item.login}</li>
              <li className="mb-3 hover:text-custom-orange">{item.wish}</li>
              <li className="mb-3 hover:text-custom-orange">
                {item.allProduct}
              </li>
              <li className="mb-3 hover:text-custom-orange">{item.location}</li>
              <li className="mb-3 hover:text-custom-orange">{item.faq}</li>
              <li className="mb-3 hover:text-custom-orange">
                {item.contactUs}
              </li>
            </ul>
          ))}
        </div>

        {/* Fifth column */}
        <div className="w-[398px] h-[310px]">
          {fifth.map((item, index) => (
            <ul key={index} className="p-4 text-[16px]">
              <p className="text-3xl font-extrabold mb-3"> {item.title}</p>
              <li className="mb-3">{item.text}</li>
              <li className="mb-3">
                <input
                  type="email"
                  className="p-[20px] w-[370px]"
                  placeholder="abc@gamil.com"
                />
              </li>

              <p className="text-2xl font-extrabold mb-3"> {item.accept}</p>
              <li className="mb-3">
                <img src={item.img} className="h-[42px] w-[370px]" />
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* Last column */}
      <div className="flex flex-row flex-wrap justify-around h-[80px] bg-zinc-700 text-white p-[10px]">
        {last.map((item, index) => (
          <div key={index} className="p-4 flex gap-[1000px] ">
            <div className="  text-lg hover:text-custom-orange ">
              {item.title}
            </div>

            <div className=" flex gap-6  text-lg ">
              <div className="hover:text-custom-orange">{item.privacy}</div>

              <div className="hover:text-custom-orange">{item.terms}</div>
              <div className="hover:text-custom-orange">{item.claim}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
