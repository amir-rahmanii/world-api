import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import DotPatternWrapper from "../DotPatternWrapper/DotPatternWrapper";
import { AuroraText } from "@/components/ui/aurora-text";

export default function HeroText() {
  return (
    <div className="flex flex-col gap-8 justify-center  items-center h-[calc(100vh-90px)]">
      <DotPatternWrapper />
      <h1 className="text-5xl text-center font-extrabold">
        وب سرویس رایگان اطلاعات <span className="text-primary">کشورها</span>
      </h1>
      <p className="text-xl text-center font-bold">
        دسترسی سریع به نام کشور، پرچم و کدهای ISO (ISO2, ISO3) با استفاده از
        کلید API برای برنامه نویسان
      </p>
      <Button asChild variant="default">
        <Link href="/documentation">برای شروع کلیک کنید</Link>
      </Button>
    </div>
  );
}
