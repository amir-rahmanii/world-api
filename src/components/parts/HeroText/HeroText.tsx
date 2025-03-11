import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import DotPatternWrapper from "../DotPatternWrapper/DotPatternWrapper";
import { AuroraText } from "@/components/ui/aurora-text";

export default function HeroText() {
  return (
    <div className="flex flex-col gap-8 justify-center  items-center h-[calc(100vh-90px)]">
      <DotPatternWrapper />
      <h1 className="text-5xl text-center">
        وب سرویس رایگان اطلاعات{" "}
        <AuroraText
          speed={2}
          colors={[
            "#DE704D",
            "#C9573E",
            "#FFA07A",
            "#F2B885",
            "#E86A92",
            "#D64550",
          ]}
        >
          کشورها
        </AuroraText>{" "}
      </h1>
      <p className="text-xl text-center">
        دسترسی سریع به نام کشور، پرچم و کدهای ISO (ISO2, ISO3) با استفاده از
        کلید API برای برنامه نویسان
      </p>
      <Button asChild variant="default">
        <Link href="/documentation">برای شروع کلیک کنید</Link>
      </Button>
    </div>
  );
}
