import React from 'react'
import LinkButton from './../../components/LinkButton'

export default function Hero() {
  return (
    <section>
      <div class="relative h-screen w-full bg-image">
        <div class="w-full h-full bg-red-900/50"></div>
        <div class="absolute top-0 h-full w-full">
          <div class="mt-44 md:mt-56 relative">
            <div
              class="absolute w-full transition-all duration-700"
            >
              <div
                class="relative flex flex-col justify-center items-center w-full h-full text-center"
              >
                <h1
                  class="font-mehr text-white text-[48px] md:text-[60px] leading-normal"
                >
                  سفارش
                  <span
                    class="before:block text-white before:absolute before:-right-1 before:inset-2 before:-skew-x-12 before:bg-red-700 relative px-2"
                  >
                    <span class="relative">&nbsp;نقاشی&nbsp;</span>
                    <br className='md:hidden' />
                  </span>
                  دلخواه شما
                </h1>
                <p class="font-dastnevis text-2xl md:text-3xl text-white my-6">
                  در تکنیک‌های مختلف
                </p>
                <LinkButton link="/" text="ثبت درخواست" />
                {/* <a
                  href="#"
                  class="font-IRanSans text-lg bg-red-700 text-white px-6 pt-3 pb-3 mt-6 border border-white rounded-sm md:px-12"
                >
                  ثبت درخواست
                </a> */}
              </div>
            </div>

            <div
              class="absolute hidden w-full transition-all duration-700"
            >
              <div
                class="relative flex flex-col justify-center items-center w-full h-full text-center"
              >
                <h1
                  class="font-mehr text-white text-[52px] md:text-[60px] leading-normal"
                >
                  <span>فروش انواع </span>
                  <br class="md:hidden" />
                  <span>تابلوی</span>
                  <span
                    class="before:block text-white before:absolute before:-right-1 md:before:-right-1 before:inset-2 before:-skew-x-12 before:bg-red-700 relative px-2"
                  >
                    <span class="relative">&nbsp;نقاشی&nbsp;</span>
                  </span>
                </h1>
                <p class="font-dastnevis text-2xl md:text-3xl text-white my-6">
                  در اندازه‌های مختلف
                </p>
                <LinkButton link="/" text="مشاهده تابلوها" />
                {/* <a
                  href="#"
                  class="font-IRanSans text-lg bg-red-700 text-white px-6 pt-3 pb-3 mt-6 border border-white rounded-sm md:px-12"
                >
                  مشاهده تابلوها
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
