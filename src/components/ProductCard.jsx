import React from "react";
import { NavLink } from "react-router-dom";
import {motion, useScroll, useTransform} from 'framer-motion'

export default function ProductCard({ id, name, image, technique, price }) {

  const {scrollYProgress} = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0])


  return (
    <motion.div className="mx-auto w-full p-3 rounded-sm mt-4 bg-white hover:scale-105 transition-all duration-200 shadow-md"
    >
      <div className="relative group">
        <img
          src={image}
          alt={name}
          className="w-full object-cover rounded-sm"
        />
        <div className="hidden group-hover:block">
          <div className="absolute top-2 right-2 bottom-2 left-2 flex justify-center items-center bg-white rounded-sm bg-opacity-60">
            <NavLink
              to="/"
              className="font-IRanSans text-sm text-red-700 pt-1.5 pb-2 px-2 border border-1 border-red-700 hover:bg-red-700 hover:text-white transition-all duration-200"
            >
              مشاهده جزئیات
            </NavLink>
          </div>
        </div>
      </div>
      <h5 className="text-right font-IRanSans mt-2 md:text-xl">{name}</h5>
      <p className="text-right font-dastnevis text-slate-500">
        تکنیک {technique}
      </p>
      <p className="font-IRanSans text-left text-red text-sm md:text-base">
        <span className="text-red-700 font-bold">{price}</span> افغانی
      </p>
    </motion.div>
  );
}
