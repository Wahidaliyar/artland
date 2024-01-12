import React from "react";
import ProductCard from "../../components/ProductCard";
import LinkButton from "../../components/LinkButton";
import PageTitle from "../../components/PageTitle";

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

export default function Newest() {

  return (
    <section className="text-center mt-20 md:mt-32 pb-10">
      <PageTitle title="جدیدترین‌ها" />

      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-5 mx-[10%] mt-4">
        {data.map((item) => {
          return (
            <ProductCard
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              technique={item.technique}
              key={item.id}
            />
          );
        })}
      </div>
      
      <div className="mt-10"></div>
      <LinkButton link="/" text="نمایش همه" />
    </section>
  );
}
