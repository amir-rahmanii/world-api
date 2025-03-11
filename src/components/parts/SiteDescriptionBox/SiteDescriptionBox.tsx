import React from "react";

export default function SiteDescriptionBox() {
  return (
    <div className="relative mx-auto grid animate-delay-1000 animate-fade-up grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-4">
      <div className="group/feature pointer-events-none rounded-xl border bg-card sm:pointer-events-auto">
        <div className="flex flex-col gap-2.5 p-8">
          <div className="flex size-10 items-center justify-center rounded-full border border-dashed bg-primary/5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-home "
            >
              <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
            </svg>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="absolute inset-x-0 h-6 w-1 rounded-tl-2xl rounded-bl-2xl bg-border transition-all group-hover/feature:h-7 group-hover/feature:w-1.5 group-hover/feature:bg-primary -right-[32px]"></div>
            <h2 className="font-bold text-base text-heading-foreground transition-all group-hover/feature:mr-2 md:text-lg">
              تقویت کننده خانگی
            </h2>
          </div>
          <p className="text-foreground/80 text-sm/6">
            تقویت سیگنال موبایل در خانه برای همه اپراتورها (ایرانسل، همراه اول،
            رایتل). پوشش بدون وقفه و تماس های با کیفیت.
          </p>
        </div>
      </div>
      <div className="group/feature pointer-events-none rounded-xl border bg-card sm:pointer-events-auto">
        <div className="flex flex-col gap-2.5 p-8">
          <div className="flex size-10 items-center justify-center rounded-full border border-dashed bg-primary/5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-buildings "
            >
              <path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15"></path>
              <path d="M16 8h2c1 0 2 1 2 2v11"></path>
              <path d="M3 21h18"></path>
              <path d="M10 12v0"></path>
              <path d="M10 16v0"></path>
              <path d="M10 8v0"></path>
              <path d="M7 12v0"></path>
              <path d="M7 16v0"></path>
              <path d="M7 8v0"></path>
              <path d="M17 12v0"></path>
              <path d="M17 16v0"></path>
            </svg>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="absolute inset-x-0 h-6 w-1 rounded-tl-2xl rounded-bl-2xl bg-border transition-all group-hover/feature:h-7 group-hover/feature:w-1.5 group-hover/feature:bg-primary -right-[32px]"></div>
            <h2 className="font-bold text-base text-heading-foreground transition-all group-hover/feature:mr-2 md:text-lg">
              مناطق روستایی
            </h2>
          </div>
          <p className="text-foreground/80 text-sm/6">
            تقویت کننده سیگنال موبایل برای مناطق دورافتاده. پوشش مطمئن برای همه
            اپراتورها در مناطق سخت دسترس.
          </p>
        </div>
      </div>
      <div className="group/feature pointer-events-none rounded-xl border bg-card sm:pointer-events-auto">
        <div className="flex flex-col gap-2.5 p-8">
          <div className="flex size-10 items-center justify-center rounded-full border border-dashed bg-primary/5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-building "
            >
              <path d="M3 21l18 0"></path>
              <path d="M9 8l1 0"></path>
              <path d="M9 12l1 0"></path>
              <path d="M9 16l1 0"></path>
              <path d="M14 8l1 0"></path>
              <path d="M14 12l1 0"></path>
              <path d="M14 16l1 0"></path>
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
            </svg>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="absolute inset-x-0 h-6 w-1 rounded-tl-2xl rounded-bl-2xl bg-border transition-all group-hover/feature:h-7 group-hover/feature:w-1.5 group-hover/feature:bg-primary -right-[32px]"></div>
            <h2 className="font-bold text-base text-heading-foreground transition-all group-hover/feature:mr-2 md:text-lg">
              دفاتر و ادارات
            </h2>
          </div>
          <p className="text-foreground/80 text-sm/6">
            تقویت سیگنال موبایل برای محیط های اداری. اتصال پایدار و قوی برای همه
            اپراتورها.
          </p>
        </div>
      </div>
      <div className="group/feature pointer-events-none rounded-xl border bg-card sm:pointer-events-auto">
        <div className="flex flex-col gap-2.5 p-8">
          <div className="flex size-10 items-center justify-center rounded-full border border-dashed bg-primary/5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-help "
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M12 17l0 .01"></path>
              <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
            </svg>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="absolute inset-x-0 h-6 w-1 rounded-tl-2xl rounded-bl-2xl bg-border transition-all group-hover/feature:h-7 group-hover/feature:w-1.5 group-hover/feature:bg-primary -right-[32px]"></div>
            <h2 className="font-bold text-base text-heading-foreground transition-all group-hover/feature:mr-2 md:text-lg">
              نصب و پشتیبانی
            </h2>
          </div>
          <p className="text-foreground/80 text-sm/6">
            نصب آسان و پشتیبانی حرفه ای. تنظیم کامل دستگاه برای همه اپراتورها.
          </p>
        </div>
      </div>
      <div className="group/feature pointer-events-none rounded-xl border bg-card sm:pointer-events-auto">
        <div className="flex flex-col gap-2.5 p-8">
          <div className="flex size-10 items-center justify-center rounded-full border border-dashed bg-primary/5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-shopping-bag "
            >
              <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
              <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
            </svg>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="absolute inset-x-0 h-6 w-1 rounded-tl-2xl rounded-bl-2xl bg-border transition-all group-hover/feature:h-7 group-hover/feature:w-1.5 group-hover/feature:bg-primary -right-[32px]"></div>
            <h2 className="font-bold text-base text-heading-foreground transition-all group-hover/feature:mr-2 md:text-lg">
              مراکز تجاری و فروشگاهی
            </h2>
          </div>
          <p className="text-foreground/80 text-sm/6">
            تقویت سیگنال موبایل در مجتمع‌های تجاری، فروشگاه‌ها، پاساژها و
            بازارها. پوشش گسترده برای بهبود تجربه مشتریان و کسب‌وکارها.
          </p>
        </div>
      </div>
      <div className="group/feature pointer-events-none rounded-xl border bg-card sm:pointer-events-auto">
        <div className="flex flex-col gap-2.5 p-8">
          <div className="flex size-10 items-center justify-center rounded-full border border-dashed bg-primary/5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-wifi "
            >
              <path d="M12 18l.01 0"></path>
              <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
              <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
              <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
            </svg>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="absolute inset-x-0 h-6 w-1 rounded-tl-2xl rounded-bl-2xl bg-border transition-all group-hover/feature:h-7 group-hover/feature:w-1.5 group-hover/feature:bg-primary -right-[32px]"></div>
            <h2 className="font-bold text-base text-heading-foreground transition-all group-hover/feature:mr-2 md:text-lg">
              اینترنت موبایل
            </h2>
          </div>
          <p className="text-foreground/80 text-sm/6">
            تقویت سیگنال اینترنت موبایل. سرعت دانلود و آپلود بیشتر برای همه
            اپراتورها.
          </p>
        </div>
      </div>
      <div className="group/feature pointer-events-none rounded-xl border bg-card sm:pointer-events-auto">
        <div className="flex flex-col gap-2.5 p-8">
          <div className="flex size-10 items-center justify-center rounded-full border border-dashed bg-primary/5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-cell-signal-5 "
            >
              <path d="M20 20h-15.269a.731 .731 0 0 1 -.517 -1.249l14.537 -14.537a.731 .731 0 0 1 1.249 .517v15.269z"></path>
              <path d="M16 7v13"></path>
              <path d="M12 20v-9"></path>
              <path d="M8 20v-5"></path>
            </svg>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="absolute inset-x-0 h-6 w-1 rounded-tl-2xl rounded-bl-2xl bg-border transition-all group-hover/feature:h-7 group-hover/feature:w-1.5 group-hover/feature:bg-primary -right-[32px]"></div>
            <h2 className="font-bold text-base text-heading-foreground transition-all group-hover/feature:mr-2 md:text-lg">
              نظارت و بهینه سازی
            </h2>
          </div>
          <p className="text-foreground/80 text-sm/6">
            نظارت و نگهداری مداوم برای عملکرد بهینه تقویت کننده و اتصال پایدار.
          </p>
        </div>
      </div>
      <div className="group/feature pointer-events-none rounded-xl border bg-card sm:pointer-events-auto">
        <div className="flex flex-col gap-2.5 p-8">
          <div className="flex size-10 items-center justify-center rounded-full border border-dashed bg-primary/5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-apps "
            >
              <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
              <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
              <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
              <path d="M14 7l6 0"></path>
              <path d="M17 4l0 6"></path>
            </svg>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="absolute inset-x-0 h-6 w-1 rounded-tl-2xl rounded-bl-2xl bg-border transition-all group-hover/feature:h-7 group-hover/feature:w-1.5 group-hover/feature:bg-primary -right-[32px]"></div>
            <h2 className="font-bold text-base text-heading-foreground transition-all group-hover/feature:mr-2 md:text-lg">
              سفارشی
            </h2>
          </div>
          <p className="text-foreground/80 text-sm/6">
            راه حل های سفارشی برای محیط های خاص مانند هتل ها و مراکز خرید.
          </p>
        </div>
      </div>
    </div>
  );
}
