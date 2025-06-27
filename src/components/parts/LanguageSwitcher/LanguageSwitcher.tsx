import { useLocale, useTranslations } from "next-intl";

import { SelectItem } from "@/components/ui/select";
import { getDirection } from "@/i18n/getDirection";
import { routing } from "@/i18n/routing";

import LocaleSwitcherSelect from "../LocaleSwitcherSelect/LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const direction = getDirection(locale);

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t("label")}
      direction={direction}
    >
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {t(`locale.${cur}`)}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
