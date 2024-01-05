import React from "react";
import image from "./../../assets/images/pencilpainting.png";
import ProductCard from "../../components/ProductCard";
import LinkButton from "../../components/LinkButton";

const data = [
  {
    id: "12",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: 'پنسل رنگی'
  },
  {
    id: "13",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: 'پنسل رنگی'
  },
  {
    id: "14",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: 'پنسل رنگی'
  },
  {
    id: "15",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: 'پنسل رنگی'
  },
  {
    id: "16",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: 'پنسل رنگی'
  },
  {
    id: "17",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: 'پنسل رنگی'
  },
  {
    id: "18",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: 'پنسل رنگی'
  },
  {
    id: "19",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: 'پنسل رنگی'
  },
];

export default function Newest() {
  return (
    <section className="text-center mt-20 md:mt-32">
      <h2 className="inline-block text-3xl md:text-4xl font-mehr border-b-4 border-red-700">
        جدیدترین‌ها
      </h2>

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
