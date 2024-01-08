import React, { useState } from "react";
import logo from "./../assets/svgs/logo.svg";
import logoBlack from './../assets/svgs/logo-black.svg'
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaHouseChimney,
  FaPalette,
  FaReceipt,
  FaCircleInfo,
  FaPhoneVolume,
} from "react-icons/fa6";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { BsFillPersonBadgeFill } from "react-icons/bs";

export default function Navbar() {
  const [mobileNavShow, setMobileNavShow] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-red-700 flex items-center justify-between md:justify-start h-16 px-4 md:h-[74px] z-30 md:px-[120px] bg-opacity-85 backdrop backdrop-blur-md">
        <div className="w-16 h-16 md:w-20 md:h-20">
          <img src={logo} className="w-full h-full object-contain" alt="Logo" />
        </div>

        <div className="hidden md:flex gap-6 mr-14">
          <NavLink
            to="/"
            className="font-IRanSans text-white hover:text-red-200 transition-all duration-300 ease-in-out"
          >
            صفحه اصلی
          </NavLink>
          <NavLink
            to="/products"
            className="font-IRanSans text-white hover:text-red-200 transition-all duration-300 ease-in-out"
          >
            محصولات
          </NavLink>
          <NavLink
            href="./order.html"
            className="font-IRanSans text-white hover:text-red-200 transition-all duration-300 ease-in-out"
          >
            سفارش نقاشی
          </NavLink>
          <NavLink
            to="/"
            className="font-IRanSans text-white hover:text-red-200 transition-all duration-300 ease-in-out"
          >
            هنرمندان
          </NavLink>
          <NavLink
            to="/"
            className="font-IRanSans text-white hover:text-red-200 transition-all duration-300 ease-in-out"
          >
            درباره ما
          </NavLink>
          <NavLink
            to="/"
            className="font-IRanSans text-white hover:text-red-200 transition-all duration-300 ease-in-out"
          >
            تماس باما
          </NavLink>
        </div>

        {/* <div className="hidden md:flex gap-4 mr-auto">
        <a
          href="./login.html"
          className="bg-slate-800 hover:bg-slate-700 transition-colors duration-300 text-white font-IRanSans text-sm w-32 text-center py-2.5 rounded-sm"
        >
          ورود به حساب
        </a>
        <a
          href="./signup.html"
          className="bg-slate-800 hover:bg-slate-700 transition-colors duration-300 text-white font-IRanSans text-sm w-32 text-center py-2.5 rounded-sm"
        >
          ایجاد حساب
        </a>
      </div> */}

        <div className="hidden lg:flex mr-auto items-center gap-4 text-white">
          <a href="#">
            <FaFacebook className="text-3xl hover:text-red-600 transition-all duration-300 ease-in-out" />
          </a>
          <a href="#">
            <FaInstagram className="text-3xl hover:text-red-600 transition-all duration-300 ease-in-out" />
          </a>
          <a href="#">
            <FaWhatsapp className="text-3xl hover:text-red-600 transition-all duration-300 ease-in-out" />
          </a>
        </div>

        <div className="md:hidden bg-white rounded-full p-1">
          <HiMenuAlt4
            className="text-2xl text-red-700"
            onClick={() => setMobileNavShow(true)}
          />
        </div>
      </nav>

      <div
        onClick={() => setMobileNavShow(false)}
        className={`${
          mobileNavShow ? "" : "hidden"
        } fixed bg-opacity-50 backdrop-blur-sm top-0 left-0 bottom-0 right-0 w-full h-full bg-slate-900 z-40 md:hidden`}
      ></div>

      <div
        className={`${
          mobileNavShow ? "" : "hidden"
        } fixed top-0 bottom-0 flex-col bg-white h-full w-[78%] rounded-l-lg z-50 animate-[pull_0.3s_ease-in] md:hidden`}
      >
        <div className="bg-red-700 inline-block rounded-full p-0.5 mt-4 mr-4">
          <IoClose
            onClick={() => setMobileNavShow(false)}
            className="text-2xl text-white"
          />
        </div>
        <div className="h-28 mt-6">
          <img src={logoBlack} alt="Logo" className="h-full w-full object-contain" />
        </div>

        {/* <div className="text-slate-800 mr-8">
         <a
            href="#"
            className="flex justify-start items-center w-[70%]  mt-4 pr-1 rounded-lg hover:bg-redColorShade"
          >
            <LiaShoppingCartSolid className="text-3xl ml-2" />
            <span className="text-xl font-sabaLight mb-[6px]">سبد خرید</span>
          </a>
          <a
            href="#"
            className="flex justify-start items-center w-[70%] pr-1 rounded-lg hover:bg-redColorShade"
          >
            <GiNestedHearts className="text-2xl ml-3 mt-1" />
            <span className="text-xl font-sabaLight mb-[6px]">لیست علایق</span>
          </a>
          <a
            href="#"
            className="flex justify-start items-center w-[70%]  mt-4 pr-1 rounded-lg hover:bg-redColorShade"
          >
            <CiSettings className="text-2xl ml-2" />
            <span className="text-xl font-sabaLight mb-[6px]">
              تنظیمات حساب
            </span>
          </a>

        <a
          href="#"
          className="flex justify-start items-center w-[70%] mt-4 pr-1 rounded-lg hover:bg-redColorShade"
        >
          <i className="fa-solid fa-user-plus text-xl ml-2"></i>
          <span className="font-IRanSans">ایجاد حساب</span>
        </a>
        <a
          href="#"
          className="flex justify-start items-center w-[70%] mt-2 pr-1 rounded-lg hover:bg-redColorShade"
        >
          <i className="fa-solid fa-right-to-bracket text-xl ml-2 mr-1"></i>
          <span className="font-IRanSans mb-[6px]"> ورود به حساب </span>
        </a>
      </div> */}

        <div className="text-lg mx-8 text-red-700 mt-8">
          <ul>
            <li className="flex justify-start items-center font-IRanSans px-2 py-2">
              <NavLink to="/" className="flex gap-3">
                <FaHouseChimney className="text-2xl" />
                <span>صفحه اصلی</span>
              </NavLink>
            </li>

            <li className="flex justify-start items-center font-IRanSans px-2 py-2">
              <NavLink to="/products" className="inline-flex gap-3">
                <FaPalette className="text-2xl" />
                <span>تابلوها</span>
              </NavLink>
            </li>
            <li className="flex justify-start items-center font-IRanSans px-2 py-2">
              <NavLink to="/" className="inline-flex gap-3">
                <FaReceipt className="text-2xl" />
                <span>سفارش نقاشی</span>
              </NavLink>
            </li>
            <li className="flex justify-start items-center font-IRanSans px-2 py-2">
              <NavLink to="/" className="inline-flex gap-3">
                <BsFillPersonBadgeFill className="text-2xl" />
                <span>هنرمندان</span>
              </NavLink>
            </li>
            <li className="flex justify-start items-center font-IRanSans px-2 py-2">
              <NavLink to="/" className="inline-flex gap-3">
                <FaCircleInfo className="text-2xl" />
                <span>درباره ما</span>
              </NavLink>
            </li>
            <li className="flex justify-start items-center font-IRanSans px-2 py-2">
              <NavLink to="/" className="inline-flex gap-3">
                <FaPhoneVolume className="text-2xl" />
                <span>تماس با ما</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
