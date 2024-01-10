import React from "react";
import bgImage from "./../../assets/images/contactBg.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaMobileScreen,
  FaEnvelope,
} from "react-icons/fa6";

export default function ContactPage() {
  return (
    <section className="pt-28 pb-8">
      <div className="relative overflow-hidden bg-white w-[85%] md:w-[60%] mx-auto rounded-sm border border-slate-200 md:border-none pt-24 pb-32 md:pb-28 shadow-sm z-20">
        <h1 className="inline-block text-3xl md:text-4xl font-mehr text-slate-800 md:text-white absolute top-8 left-8 md:right-8 md:left-[80%]">
          تماس با ما
        </h1>
        <div className="bg-slate-700 text-white mx-6 px-8 pt-6 pb-10 rounded-lg md:w-80 md:mr-14">
          <p className="font-IRanSans text-lg">اطلاعات تماس</p>
          <ul className="mt-4">
            <li className="flex items-center justify-start ltr-div pb-2 border-b border-slate-600 cursor-pointer">
              <a
                href="#"
                className="flex items-center text-md text-slate-300 hover:text-white"
              >
                <FaInstagram className="text-3xl mr-3" />
                <span>@colorful_effects</span>
              </a>
            </li>

            <li className="flex items-center justify-start ltr-div py-2 border-b border-slate-600">
              <a href="#" className="flex items-center text-md text-slate-300 hover:text-white">
                <FaFacebook className="text-3xl mr-3" />
                <span>Colorful Effects</span>
              </a>
            </li>

            <li className="flex items-center justify-start ltr-div py-2 border-b border-slate-600">
              <a href="#" className="flex items-center text-md text-slate-300 hover:text-white">
                <FaMobileScreen className="text-3xl mr-3" />
                <span>+93 777 31 2929</span>
              </a>
            </li>

            <li className="flex items-center justify-start ltr-div pt-2">
              <a href="#" className="flex items-center text-md text-slate-300 hover:text-white">
                <FaEnvelope className="text-3xl mr-3" />
                <span>info@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="absolute h-full w-16 md:w-52 bg-red-700 top-0 right-0 -z-10"></div>
        <div className="absolute h-full w-[0.3rem] md:w-1 bg-red-700 top-0 right-[4.3rem] md:right-[215px] -z-10"></div>
        <div className="absolute md:hidden left-0 bottom-0 h-20 w-20 bg-slate-700 -z-10"></div>
        <div className="absolute md:hidden left-16 bottom-16 h-10 w-10 bg-red-700 -z-20"></div>
        <img
          src={bgImage}
          alt=""
          className="hidden md:block absolute left-0 bottom-0 bg-red-700 -z-20"
        />
      </div>
    </section>
  );
}
