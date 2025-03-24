import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import DotPatternWrapper from "../DotPatternWrapper/DotPatternWrapper";

export default function HeroText() {
  return (
    <div className="flex flex-col gap-8 justify-center  items-center h-[calc(100vh-220px)]  desktop:h-[calc(100vh-180px)]">
      <DotPatternWrapper />
      <h1 className="text-3xl pb-0 tablet:text-4xl desktop:text-5xl text-center font-extrabold">
        وب سرویس رایگان اطلاعات <span className="text-primary">کشورها</span>
      </h1>
      <p className="text-lg desktop:text-xl text-center font-bold">
        دسترسی سریع به اطلاعات کشورها(نام کشور،پایتخت،پرچم و ...) برای توسعه
        دهندگان
      </p>
      <Button asChild variant="default">
        <Link href="/documentation/about">برای شروع کلیک کنید</Link>
      </Button>
    </div>
  );
}
