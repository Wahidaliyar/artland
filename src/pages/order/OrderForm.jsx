import React from "react";
import PageTitle from "../../components/PageTitle";

export default function OrderForm() {
  return (
    <div>
      <section className="pt-24 md:pt-32 text-center">
        <PageTitle title="درخواست نقاشی" />
        <div className="text-justify px-6 mt-6 md:mt-10">
          <p className="font-IRanSans text-sm md:text-base md:w-[80%] leading-7 md:leading-8 md:mx-auto">
            برای ثبت سفارش نقاشی می‌توانید تصویر مدل مورد نظر را با کیفیت خوب و
            رنگی ضمینه کرده و از طریق فرم زیر جهت برآورد هزینه و ثبت سفارش برای
            ما ارسال نمایید. لازم به ذکر است بعد از برآورد هزینه و اعلام آن از
            طریق شماره تماس و یا ایمیل دریافتی از طرف شما در صورت تمایل میتوانید
            سفارش خود را قاب شده از انواع مختلف قاب و انواع شیشه به انتخاب خود و
            با هماهنگی قبلی و بسته بندی شده دریافت نمایید.
          </p>

          <div className="w-full md:w-[50%] md:mx-auto bg-slate-200 shadow-lg rounded-sm px-4 md:px-10 pb-8 pt-3 mt-6 text-center">
            <form
              action=""
              className="flex flex-col items-start text-slate-700 py-4 px-2 mt-4"
            >
              <label
                htmlFor="name"
                className="font-IRanSans md:font-semibold px-2"
              >
                نام
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="علی"
                className="w-full font-IRanSans placeholder:text-slate-500 px-2 py-1 outline-none rounded-sm mt-1"
              />

              <label
                htmlFor="lastname"
                className="font-IRanSans md:font-semibold px-2 mt-4"
              >
                نام خانوادگی
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="علوی"
                className="w-full font-IRanSans placeholder:text-slate-500 px-2 py-1 outline-none rounded-sm mt-1"
              />

              <label
                htmlFor="phonenumber"
                className="font-IRanSans md:font-semibold px-2 mt-4"
              >
                شماره تماس
              </label>
              <input
                type="text"
                name="phonenumber"
                id="phonenumber"
                placeholder="0773102910"
                className="w-full ltr-div text-right font-IRanSans placeholder:text-slate-500 px-2 pt-[6px] pb-[3px] outline-none rounded-sm mt-1"
              />

              <label
                htmlFor="email"
                className="font-IRanSans md:font-semibold px-2 mt-4"
              >
                آدرس ایمیل
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full ltr-div text-right placeholder:text-slate-500 px-2 pt-1 pb-[6px] outline-none rounded-sm mt-1"
              />

              <label
                htmlFor="file"
                className="font-IRanSans md:font-semibold px-2 mt-4"
              >
                انتخاب فایل جهت بررسی
              </label>
              <label
                for="file"
                className="bg-red-700 w-full md:w-48 text-sm text-white py-3 rounded-sm cursor-pointer font-IRanSans mt-2"
              >
                انتخاب عکس
              </label>
              <input type="file" name="file" id="file" className="hidden" />

              <label
                htmlFor="height"
                className="font-IRanSans md:font-semibold px-2 mt-4"
              >
                ابعاد تابلو (طول)
              </label>
              <select
                className="font-IRanSans bg-red-700 w-full md:w-48 text-sm text-white text-center py-2 outline-none rounded-sm mt-2 cursor-pointer"
                name="height"
                id="height"
              >
                <option value="25">25 سانتی متر</option>
                <option value="30">30 سانتی متر</option>
                <option value="35">35 سانتی متر</option>
                <option value="40">40 سانتی متر</option>
                <option value="45">45 سانتی متر</option>
                <option value="50">50 سانتی متر</option>
                <option value="55">55 سانتی متر</option>
                <option value="60">60 سانتی متر</option>
                <option value="65">65 سانتی متر</option>
                <option value="70">70 سانتی متر</option>
              </select>
              <label
                htmlFor="width"
                className="font-IRanSans md:font-semibold px-2 mt-4"
              >
                ابعاد تابلو (عرض)
              </label>
              <select
                className="font-IRanSans bg-red-700 w-full md:w-48 text-sm text-white text-center py-2 outline-none rounded-sm mt-2 cursor-pointer"
                name="width"
                id="width"
              >
                <option value="25">25 سانتی متر</option>
                <option value="30">30 سانتی متر</option>
                <option value="35">35 سانتی متر</option>
                <option value="40">40 سانتی متر</option>
                <option value="45">45 سانتی متر</option>
                <option value="50">50 سانتی متر</option>
                <option value="55">55 سانتی متر</option>
                <option value="60">60 سانتی متر</option>
                <option value="65">65 سانتی متر</option>
                <option value="70">70 سانتی متر</option>
              </select>

              <label
                htmlFor="tech"
                className="font-IRanSans md:font-semibold px-2 mt-4"
              >
                تکنیک
              </label>
              <select
                className="font-IRanSans bg-red-700 w-full md:w-48 text-sm text-white text-center py-2 outline-none rounded-sm mt-2 cursor-pointer"
                name="tech"
                id="tech"
              >
                <option value="zoghal">پنسل سیاه</option>
                <option value="30">پنسل رنگی</option>
                <option value="35">خودکار تک‌رنگ</option>
                <option value="40">خودکار رنگی</option>
                <option value="45">سیاه قلم</option>
                <option value="50">آبرنگ</option>
                <option value="55">ذغالی</option>
                <option value="60">نقطه‌چین</option>
              </select>

              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                placeholder="توضیحات"
                className="w-full font-IRanSans text-sm placeholder:text-slate-500 px-2 pt-1 pb-[6px] outline-none rounded-sm mt-6"
              ></textarea>

              <button
                type="submit"
                className="font-IRanSans md:font-medium text-white self-center mt-8 py-2 px-8 bg-red-700 rounded-sm"
              >
                ثبت درخواست
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
