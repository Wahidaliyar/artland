import React, { useState } from "react";
import logo from "./../assets/svgs/logo.svg";
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
      <nav class="fixed top-0 w-full bg-red-700/30 flex items-center justify-between md:justify-start h-16 px-4 md:h-[74px] z-30 md:px-[120px] bg-opacity-60 backdrop backdrop-blur-md">
        <div className="w-16 h-16 md:w-20 md:h-20">
          <img src={logo} className="w-full h-full object-contain" alt="Logo" />
        </div>

        <div class="hidden md:flex gap-6 mr-14">
          <NavLink
            to="/"
            className="font-IRanSans text-slate-700 hover:text-red-700 transition-all duration-300 ease-in-out"
          >
            صفحه اصلی
          </NavLink>
          <NavLink
            to="/"
            className="font-IRanSans text-slate-700 hover:text-red-700 transition-all duration-300 ease-in-out"
          >
            محصولات
          </NavLink>
          <NavLink
            href="./order.html"
            className="font-IRanSans text-slate-700 hover:text-red-700 transition-all duration-300 ease-in-out"
          >
            سفارش نقاشی
          </NavLink>
          <NavLink
            to="/"
            className="font-IRanSans text-slate-700 hover:text-red-700 transition-all duration-300 ease-in-out"
          >
            هنرمندان
          </NavLink>
          <NavLink
            to="/"
            className="font-IRanSans text-slate-700 hover:text-red-700 transition-all duration-300 ease-in-out"
          >
            درباره ما
          </NavLink>
          <NavLink
            to="/"
            className="font-IRanSans text-slate-700 hover:text-red-700 transition-all duration-300 ease-in-out"
          >
            تماس باما
          </NavLink>
        </div>

        {/* <div class="hidden md:flex gap-4 mr-auto">
        <a
          href="./login.html"
          class="bg-slate-800 hover:bg-slate-700 transition-colors duration-300 text-white font-IRanSans text-sm w-32 text-center py-2.5 rounded-sm"
        >
          ورود به حساب
        </a>
        <a
          href="./signup.html"
          class="bg-slate-800 hover:bg-slate-700 transition-colors duration-300 text-white font-IRanSans text-sm w-32 text-center py-2.5 rounded-sm"
        >
          ایجاد حساب
        </a>
      </div> */}

        <div className="hidden lg:flex mr-auto items-center gap-4 text-red-700/80">
          <a href="#">
            <FaFacebook className="text-3xl hover:text-red-700 transition-all duration-300 ease-in-out" />
          </a>
          <a href="#">
            <FaInstagram className="text-3xl hover:text-red-700 transition-all duration-300 ease-in-out" />
          </a>
          <a href="#">
            <FaWhatsapp className="text-3xl hover:text-red-700 transition-all duration-300 ease-in-out" />
          </a>
        </div>

        <div className="md:hidden bg-red-700 rounded-full p-1">
          <HiMenuAlt4
            className="text-2xl text-white"
            onClick={() => setMobileNavShow(true)}
          />
        </div>
      </nav>

      <div
        onClick={() => setMobileNavShow(false)}
        className={`${
          mobileNavShow ? "" : "hidden"
        } fixed bg-opacity-50 backdrop-blur-sm top-0 w-full h-full bg-slate-900 z-40 md:hidden`}
      ></div>

      <div
        className={`${
          mobileNavShow ? "" : "hidden"
        } fixed top-0 flex-col bg-white h-full w-[80%] rounded-l-lg z-50 animate-[pull_0.3s_ease-in] md:hidden`}
      >
        <div className="bg-red-700 inline-block rounded-full p-0.5 mt-4 mr-4">
          <IoClose
            onClick={() => setMobileNavShow(false)}
            className="text-2xl text-white"
          />
        </div>
        <div className="h-28 mt-6">
          <img src={logo} alt="Logo" className="h-full w-full object-contain" />
        </div>

        {/* <div class="text-slate-800 mr-8">
         <a
            href="#"
            class="flex justify-start items-center w-[70%]  mt-4 pr-1 rounded-lg hover:bg-redColorShade"
          >
            <LiaShoppingCartSolid class="text-3xl ml-2" />
            <span class="text-xl font-sabaLight mb-[6px]">سبد خرید</span>
          </a>
          <a
            href="#"
            class="flex justify-start items-center w-[70%] pr-1 rounded-lg hover:bg-redColorShade"
          >
            <GiNestedHearts class="text-2xl ml-3 mt-1" />
            <span class="text-xl font-sabaLight mb-[6px]">لیست علایق</span>
          </a>
          <a
            href="#"
            class="flex justify-start items-center w-[70%]  mt-4 pr-1 rounded-lg hover:bg-redColorShade"
          >
            <CiSettings class="text-2xl ml-2" />
            <span class="text-xl font-sabaLight mb-[6px]">
              تنظیمات حساب
            </span>
          </a>

        <a
          href="#"
          class="flex justify-start items-center w-[70%] mt-4 pr-1 rounded-lg hover:bg-redColorShade"
        >
          <i class="fa-solid fa-user-plus text-xl ml-2"></i>
          <span class="font-IRanSans">ایجاد حساب</span>
        </a>
        <a
          href="#"
          class="flex justify-start items-center w-[70%] mt-2 pr-1 rounded-lg hover:bg-redColorShade"
        >
          <i class="fa-solid fa-right-to-bracket text-xl ml-2 mr-1"></i>
          <span class="font-IRanSans mb-[6px]"> ورود به حساب </span>
        </a>
      </div> */}

        <div className="mx-8 text-red-700 mt-8">
          <ul>
            <li className="flex justify-start items-center font-IRanSans px-2 py-1.5">
              <NavLink to="/" className="flex gap-3">
                <FaHouseChimney className="text-xl" />
                <span>صفحه اصلی</span>
              </NavLink>
            </li>

            <li className="flex justify-start items-center font-IRanSans px-2 py-1.5">
              <NavLink to="/" className="inline-flex gap-3">
                <FaPalette className="text-xl" />
                <span>تابلوها</span>
              </NavLink>
            </li>
            <li className="flex justify-start items-center font-IRanSans px-2 py-1.5">
              <NavLink to="/" className="inline-flex gap-3">
                <FaReceipt className="text-xl" />
                <span>سفارش نقاشی</span>
              </NavLink>
            </li>
            <li className="flex justify-start items-center font-IRanSans px-2 py-1.5">
              <NavLink to="/" className="inline-flex gap-3">
                <BsFillPersonBadgeFill className="text-xl" />
                <span>هنرمندان</span>
              </NavLink>
            </li>
            <li className="flex justify-start items-center font-IRanSans px-2 py-1.5">
              <NavLink to="/" className="inline-flex gap-3">
                <FaCircleInfo className="text-xl" />
                <span>درباره ما</span>
              </NavLink>
            </li>
            <li className="flex justify-start items-center font-IRanSans px-2 py-1.5">
              <NavLink to="/" className="inline-flex gap-3">
                <FaPhoneVolume className="text-xl" />
                <span>تماس با ما</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
