import React from "react";
import ProductCard from "../../components/ProductCard";

import abiyana from "./../../assets/images/artwork/abiyana.jpg";
import bahram from "./../../assets/images/artwork/bahram.jpg";
import masjid from "./../../assets/images/artwork/masjid.jpg";
import laklak from "./../../assets/images/artwork/laklak.jpg";
import paranda from "./../../assets/images/artwork/paranda.jpg";
import parvana from "./../../assets/images/artwork/parvana.jpg";
import zamistan from "./../../assets/images/artwork/zamistan.jpg";
import zanjir from "./../../assets/images/artwork/zanjir.jpg";

const data = [
  {
    id: "12",
    name: "ابیانه",
    price: 2500,
    image: abiyana,
    technique: 'پنسل رنگی'
  },
  {
    id: "13",
    name: "بهرام رادان",
    price: 4000,
    image: bahram,
    technique: 'رنگ روغنی'
  },
  {
    id: "14",
    name: "مسجد",
    price: 10000,
    image: masjid,
    technique: 'آبرنگ'
  },
  {
    id: "15",
    name: "لک لک‌ها",
    price: 3000,
    image: laklak,
    technique: 'مداد رنگی'
  },
  {
    id: "16",
    name: "پرنده",
    price: 3500,
    image: paranda,
    technique: 'مداد رنگی'
  },
  {
    id: "17",
    name: "پروانه",
    price: 5000,
    image: parvana,
    technique: 'رنگ روغن'
  },
  {
    id: "18",
    name: "زمستان",
    price: 9000,
    image: zamistan,
    technique: 'آبرنگ'
  },
  {
    id: "19",
    name: "قفل و زنجیر",
    price: 5000,
    image: zanjir,
    technique: 'مداد رنگی'
  },
];

export default function ProductsList() {
  return (
    <section className="pt-24 md:pt-28 lg:pt-32">
       
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 px-[10%]">
      {data.map((item) => {
        return (
          <ProductCard
            id={item.id}
            name={item.name}
            image={item.image}
            technique={item.technique}
            price={item.price}
            key={item.id}
          />
        );
      })}
      </div>

      <div className="flex justify-center mt-12">
        <nav className="inline-flex">
          <button
            id="prevBtn"
            className="px-2 md:px-4 py-1 md:py-2 mx-[2px] md:mx-1 rounded-sm font-IRanSans border border-red-700 text-sm md:text-sm text-red-700"
            disabled
          >
            قبلی
          </button>
          <button
            id="page1Btn"
            className="px-2.5 md:px-4 py-1 md:py-2 mx-[2px] md:mx-1 rounded-sm font-IRanSans border border-red-700 text-sm md:text-base bg-red-700 text-white"
          >
            1
          </button>
          <button
            id="page2Btn"
            className="px-2.5 md:px-4 py-1 md:py-2 mx-[2px] md:mx-1 rounded-sm font-IRanSans border border-red-700 text-sm md:text-sm text-red-700"
          >
            2
          </button>
          <button
            id="page3Btn"
            className="px-2.5 md:px-4 py-1 md:py-2 mx-[2px] md:mx-1 rounded-sm font-IRanSans border border-red-700 text-sm md:text-sm text-red-700"
          >
            3
          </button>
          <button
            id="nextBtn"
            className="px-2 md:px-4 py-1 md:py-2 mx-[2px] md:mx-1 rounded-sm font-IRanSans border border-red-700 text-sm md:text-sm text-red-700"
          >
            بعدی
          </button>
        </nav>
      </div>
    </section>
  );
}
