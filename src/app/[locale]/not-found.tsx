import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-y-4">
      <h1>صفحه موردنظر یافت نشد</h1>
      <p>صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
      <Button asChild>
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </Button>
    </div>
  );
}
