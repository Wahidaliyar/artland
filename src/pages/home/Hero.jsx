import React, { useState, useEffect } from "react";
import LinkButton from "./../../components/LinkButton";
import { motion } from "framer-motion";

const sliderVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: "50%",
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};
export default function Hero() {
  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider((prevValue) => (prevValue === 0 ? 1 : 0));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section>
      <div className="relative h-screen w-full bg-image">
        <div className="w-full h-full bg-red-900/50"></div>
        <div className="absolute top-0 pt-10 h-full w-full">
          <div className="mt-44 md:mt-56 relative">
            {slider === 0 && (
              <motion.div
                className="absolute w-[80%]  md:w-[50%] right-[50%]"
                variants={sliderVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="relative flex flex-col justify-center items-center w-full h-full text-center">
                  <h1 className="font-mehr text-white text-[48px] md:text-[60px] leading-normal">
                    سفارش
                    <span className="before:block text-white before:absolute before:-top-6 before:-bottom-4 before:-right-1 before:inset-2 before:-skew-x-12 before:bg-red-700 relative px-2">
                      <span className="relative">&nbsp;نقاشی&nbsp;</span>
                      <br className="md:hidden" />
                    </span>
                    دلخواه شما
                  </h1>
                  <p className="font-dastnevis text-2xl md:text-3xl text-white my-6">
                    در تکنیک‌های مختلف
                  </p>
                  <LinkButton link="/" text="ثبت درخواست" />
                  {/* <a
                  href="#"
                  className="font-IRanSans text-lg bg-red-700 text-white px-6 pt-3 pb-3 mt-6 border border-white rounded-sm md:px-12"
                >
                  ثبت درخواست
                </a> */}
                </div>
              </motion.div>
            )}

            {slider === 1 && (
              <motion.div
                className="absolute w-[80%] md:w-[50%] right-[50%]"
                variants={sliderVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="relative flex flex-col justify-center items-center w-full h-full text-center">
                  <h1 className="font-mehr text-white text-[52px] md:text-[60px] leading-normal">
                    <span>فروش انواع </span>
                    <br className="md:hidden" />
                    <span>تابلوی</span>
                    <span className="before:block text-white before:absolute before:-right-0.5 before:-left-0.5 before:-top-6 before:-bottom-4 before:inset-2 before:-skew-x-12 before:bg-red-700 relative px-2">
                      <span className="relative">&nbsp;نقاشی</span>
                    </span>
                  </h1>
                  <p className="font-dastnevis text-2xl md:text-3xl text-white my-6">
                    در اندازه‌های مختلف
                  </p>
                  <LinkButton link="/" text="مشاهده تابلوها" />
                  {/* <a
                  href="#"
                  className="font-IRanSans text-lg bg-red-700 text-white px-6 pt-3 pb-3 mt-6 border border-white rounded-sm md:px-12"
                >
                  مشاهده تابلوها
                </a> */}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
