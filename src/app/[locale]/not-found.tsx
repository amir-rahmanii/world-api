import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFoundPage");
  return (
    <div className="flex flex-col justify-center items-center text-center gap-y-4">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Button asChild>
        <Link href="/">{t("backToHome")}</Link>
      </Button>
    </div>
  );
}
