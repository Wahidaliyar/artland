import React from "react";
import ProductCard from "../../components/ProductCard";
import image from "./../../assets/images/pencilpainting.png";

const data = [
  {
    id: "12",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: "پنسل رنگی",
  },
  {
    id: "13",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: "پنسل رنگی",
  },
  {
    id: "14",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: "پنسل رنگی",
  },
  {
    id: "15",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: "پنسل رنگی",
  },
  {
    id: "16",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: "پنسل رنگی",
  },
  {
    id: "17",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: "پنسل رنگی",
  },
  {
    id: "18",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: "پنسل رنگی",
  },
  {
    id: "19",
    name: "لنگرگاه قایق",
    price: 1500,
    image: image,
    technique: "پنسل رنگی",
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
