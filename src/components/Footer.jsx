import React from "react";
import logo from "./../assets/svgs/logo.svg";
import { NavLink } from "react-router-dom";
import {
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="flex flex-col items-center bg-red-900/95 mt-12 text-white">
      <div className="mt-8">
        <img src={logo} className="w-36 md:w-44" alt="" />
      </div>
      <h4 className="font-mehr text-3xl mt-6 md:text-4xl">
        گالری نقاشی سرزمین هنر
      </h4>
      <hr className="hidden md:block border-red-300 my-6 w-[25%] self-center" />
      <div className="flex mt-10 md:mt-1 w-full md:flex-col">
        <ul className="flex-1 font-IRanSans text-right pr-8 md:flex md:justify-between md:w-[50%] md:self-center">
          <li>
            <NavLink
              className="hover:text-red-300 transition-all duration-300"
              to="/"
            >
              صفحه اصلی
            </NavLink>
          </li>
          <li className="mt-2 md:mt-0">
            <NavLink
              className="hover:text-red-300 transition-all duration-300"
              to="/products"
            >
              فروشگاه
            </NavLink>
          </li>
          <li className="mt-2 md:mt-0">
            <NavLink
              className="hover:text-red-300 transition-all duration-300"
              to="#"
            >
              سفارش نقاشی
            </NavLink>
          </li>
          <li className="mt-2 md:mt-0">
            <NavLink
              className="hover:text-red-300 transition-all duration-300"
              to="#"
            >
              هنرمندان
            </NavLink>
          </li>
          <li className="mt-2 md:mt-0">
            <NavLink
              className="hover:text-red-300 transition-all duration-300"
              to="#"
            >
              درباره ما
            </NavLink>
          </li>
          <li className="mt-2 md:mt-0">
            <NavLink
              className="hover:text-red-300 transition-all duration-300"
              to="#"
            >
              تماس با ما
            </NavLink>
          </li>
        </ul>

        <hr className="hidden md:block border-red-300 my-6 w-[25%] self-center" />
        <div className="flex-1 flex flex-col justify-center items-center gap-2 px-4 border-r border-r-red-300 md:border-r-0 md:flex-row md:self-center md:gap-6 md:cursor-pointer">
          <a href="#">
            <FaSquareFacebook className="mt-0.5 md:mt-0 text-4xl" />
          </a>
          <a href="#">
            <FaSquareInstagram className="mt-1.5 md:mt-0 text-4xl" />
          </a>
          <a href="#">
            <FaSquareWhatsapp className="mt-1.5 md:mt-0 text-4xl" />
          </a>
          <a href="#">
            <FaEnvelope className="mt-1.5 md:mt-0 text-4xl" />
          </a>
        </div>
      </div>

      <hr className="w-[90%] mt-6 border-red-300" />
      <div className="ltr-div text-xs text-center mt-3 mb-4 md:flex md:gap-[4px]">
        <p className="ext-slate-300">
          Copyright 2024&nbsp;
          <a className="underline" href="#">
            ArtLand
          </a>
          .
        </p>
        <p>All Rights Reserved.</p>
      </div>
    </section>
  );
}
