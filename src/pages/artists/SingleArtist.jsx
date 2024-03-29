import React from "react";

export default function SingleArtist() {
  return (
    <section class="pt-24 md:pt-36">
      <div class="w-[85%] md:w-[75%] mx-auto bg-white p-4 rounded-sm shadow-[1px_2px_4px_0_rgba(0,0,0,0.2)]">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-56 md:h-56">
            <img
              class="rounded-sm w-full"
              src="./../dist/assets/images/std-6.jpg"
              alt=""
            />
          </div>
          <div class="font-IRanSans mt-2 md:mt-0 flex flex-col justify-end items-start pr-4">
            <p class="text-xl md:text-3xl font-bold text-red">محمد رضا قاسمی</p>
            <p class="text-lg md:text-2xl font-dastnevis md:mt-2">
              گرافیک دیزاینر
            </p>
            <div class="text-2xl mt-1 md:mt-3 text-slate-700">
              <a class="mr-1 md:mx-3" href="#">
                <i class="fa-brands fa-instagram transition-all duration-300 hover:text-red"></i>
              </a>
              <a class="mx-1 md:mx-3" href="#">
                <i class="fa-brands fa-facebook-f transition-all duration-300 hover:text-red"></i>
              </a>
              <a class="mx-1 md:mx-3" href="#">
                <i class="fa-regular fa-envelope transition-all duration-300 hover:text-red"></i>
              </a>
              <a class="ml-1 md:mx-3" href="#">
                <i class="fa-brands fa-whatsapp transition-all duration-300 hover:text-red"></i>
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 class="inline-block text-xl md:text-2xl font-mehr border-b-2 border-red mt-1 md:mt-3 mx-2">
            بیوگرافی
          </h3>
          <p class="text-justify font-IRanSans mt-3 leading-7 text-sm px-2 md:px-4">
            [نام گرافیک دیزاینر] با تمایل طبیعی به هنر و طراحی، از سنین پایین
            علاقه و الهام خود را در جهان خلاقیت پیدا کرد. در دوران کودکی، او
            توسط قدرت ارتباط بصری و توانایی آن برای تحریک احساسات، انتقال پیام و
            تشکیل نگرش‌ها، مجذوب شد. این دلبستگی، شور و علاقه‌ی طول عمری را در
            [نام گرافیک دیزاینر] به طراحی گرافیک ایجاد کرد و او را برای پیگیری
            آرزوهای هنری خود به راهی مناسب هدایت کرد. تحصیلات و توسعه حرفه‌ای:
            [نام گرافیک دیزاینر] مهارت‌های خود را از طریق آموزش رسمی تقویت کرده
            است. او در یک مؤسسه معتبر در رشته‌ی گرافیک دیزاین فارغ‌التحصیل شده
            است، جایی که آشنایی جامعی با اصول طراحی، تایپوگرافی، نظریه‌ی رنگ و
            استفاده از نرم‌افزارهای طراحی مختلف به دست آورد. در طول مسیر تحصیلی
            خود، [نام گرافیک دیزاینر] همچنین فرصت همکاری با سایر طراحان را داشته
            است و در پروژه‌های واقعی کار کرده است که توانایی‌ها و فهمشان از صنعت
            را بهبود بخشیده است. سفر حرفه‌ای و تخصص: پس از فارغ‌التحصیلی، [نام
            گرافیک دیزاینر] به سفر حرفه‌ای خود را آغاز کرد و با آژانس‌های طراحی
            همکاری، به صورتپروژه نیمه‌حرفه‌ای و همکاری با مشتریان از صنایع مختلف
            دست به کار شد. این تنوع در تجربه‌ها، او را در جذب مجموعه‌ای از
            مهارت‌ها و توانایی‌های چندگانه کمک کرده است و قابلیت انطباق به
            چالش‌های طراحی مختلف را در او تقویت کرده است. در طول سال‌ها، [نام
            گرافیک دیزاینر] تخصص خود را در زمینه‌ی برندینگ، طراحی لوگو، متون
            چاپی، طراحی وب و طراحی رابط کاربری (UI) بهبود بخشیده است. او ابتکار
            و خلاقیت را با تفکر استراتژیک ترکیب کرده و طراحی‌هایی را ارائه
            می‌دهد که علاوه بر جذابیت ظاهری، مفاهیم و ارزش‌های برند مشتریان را
            به خوبی ارتقا می‌دهند و با مخاطبان ارتباط برقرار می‌کنند.
          </p>
        </div>

        <div class="mt-4">
          <h3 class="inline-block text-xl md:text-2xl font-mehr border-b-2 border-red mt-3 mx-2">
            نمونه کارها
          </h3>
          <div class="flex flex-wrap justify-center">
            <div class="w-[90%] md:w-[20%] p-2 rounded-sm mt-6 mx-2 bg-bg shadow-[1px_2px_4px_0_rgba(0,0,0,0.2)]">
              <div class="relative group">
                <img
                  src="./../dist/assets/images/pencilpainting.png"
                  alt=""
                  class="w-full object-cover rounded-ss-md rounded-se-md"
                />
                <div class="hidden group-hover:block">
                  <div class="absolute top-2 right-2 bottom-2 left-2 flex justify-center items-center bg-white rounded-md bg-opacity-60">
                    <a
                      href="#"
                      class="text-slate-700 font-IRanSans text-sm px-4 py-2 border-2 border-slate-700 hover:bg-slate-700 hover:text-white"
                    >
                      مشاهده جزئیات
                    </a>
                  </div>
                </div>
              </div>
              <h5 class="text-right font-IRanSans text-lg md:text-lg font-semibold mt-2 mr-1">
                دختر مزاری
              </h5>
              <p class="font-dastnevis mr-1 text-slate-500">تکنیک پنسل سیاه</p>
              <p class="ltr-div text-left text-red font-semibold text-lg">
                3000 Afs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
