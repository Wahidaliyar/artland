import React from "react";

export default function AboutContainer() {
  return (
    <section className="pt-16 md:pt-36">
      <div className="w-[85%] md:w-[65%] mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <p className="font-mehr mt-3 md:mt-0 text-xl md:text-3xl text-red-700">
            به گالری سرزمین هنر خوش آمدید!
          </p>
          <div className="text-3xl text-slate-700">
            <a className="mx-2" href="#">
              <i className="fa-brands fa-instagram transition-all duration-300 hover:text-red"></i>
            </a>
            <a className="mx-2" href="#">
              <i className="fa-brands fa-facebook-f transition-all duration-300 hover:text-red"></i>
            </a>
            <a className="mx-2" href="#">
              <i className="fa-regular fa-envelope transition-all duration-300 hover:text-red"></i>
            </a>
            <a className="mx-2" href="#">
              <i className="fa-brands fa-whatsapp transition-all duration-300 hover:text-red"></i>
            </a>
          </div>
        </div>
        <div className="font-IRanSans">
          <p className="text-sm md:text-base leading-7 md:leading-8 text-justify mt-3 md:mt-5">
            ما در گالری نقاشی خود، با افتخار آثار هنرمندان برجسته و پیشرو را به
            نمایش می‌گذاریم. این گالری، فضایی است که به هنر علاقه‌مندان فرصت
            می‌دهد تا با زیبایی‌های هنر تجربه‌ای خلاقانه داشته باشند و در فرهنگ
            هنری غوطه ور شوند. <br />
            مجموعه‌ای از نقاشی‌هایی که در گالری ما نمایش داده می‌شود، بیانگر
            تلاش هنرمندان برای انتقال احساسات، افکار و دمنظره‌هایشان است. از
            طریق استفاده از رنگ‌ها، فرم‌ها، نورپردازی و تکنیک‌های خلاقانه،
            هنرمندان تلاش می‌کنند تا دیدگاه خود را با مخاطبان به اشتراک بگذارند
            و آن‌ها را در دنیایی از زیبایی و تعجب فرو ببرند. در گالری ما، هر
            آثاری که انتخاب می‌کنیم، با دقت و با توجه به کیفیت هنری، اصالت و
            تأثیر هنرمند در دنیای هنر مورد بررسی قرار می‌گیرد. بینندگان
            می‌توانند از نقاشی‌هایی با موضوعات متنوع مانند مناظر طبیعت، پرتره،
            طبیعت‌زیست و هنر انتزاعی لذت ببرند. همچنین، میزبان نمایشگاه‌های موقت
            هستیم که به هنرمندان جوان و نوآور امکان نمایش آثارشان را می‌دهد. ما
            به عنوان گالری نقاشی، به ایجاد یک فضای دوستانه و صمیمی برای بینندگان
            اهمیت می‌دهیم. هر کسی که به گالری ما سر می‌زند، با استقبال گرم توسط
            تیم ما روبرو خواهد شد و می‌تواند درباره آثار، فرایند خلق آثار و
            همچنین هنرمندان پرسش کند.
            <br />
            اگر شما نیز به هنر و نقاشی علاقه‌مند هستید، ما دعوت می‌کنیم تا به
            گالری ما سر بزنید و در دنیای هنر غوطه ور شوید. با تنوع آثاری که در
            اختیار داریم، مطمئناً یک تجربه بصری و هیجان‌انگیز در انتظار شماست.
            ما از دیدار شما در گالری نقاشی خود شادمانی می‌کنیم. برای کسب اطلاعات
            بیشتر درباره نمایشگاه‌ها و آثار ما، لطفاً با ما تماس بگیرید یا سایت
            ما را مشاهده کنید.
          </p>
          <p className="text-base md:text-lg mt-3">با احترام،</p>
          <p className="text-base md:text-lg text-red">گالری سرزمین هنر</p>
        </div>
      </div>
    </section>
  );
}
