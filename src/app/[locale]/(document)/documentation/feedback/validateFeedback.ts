import { bannedWords } from "@/constants/bannedWord.constant";
import { getTranslations } from "next-intl/server";

export interface ValidationResult {
  ok: boolean;
  message: string;
}

const regex =
  /^(?=.{10,500}$)[\u0600-\u06FF\w\s.,!?؛،()<>%ـ"'"\u200c\uFE0F\u1F600-\u1F64F\u1F300-\u1F5FF\u1F680-\u1F6FF\u1F700-\u1F77F\u2600-\u26FF\u2700-\u27BF\u1F900-\u1F9FF\u1FA70-\u1FAFF]+$/u;

export async function validateFeedback(
  feedback: string,
): Promise<ValidationResult> {
  const t = await getTranslations(
    "documentationPage.feedbackPage.error.validation",
  );
  const trimmed = feedback.trim();

  if (!trimmed) {
    return { ok: false, message: t("empty") };
  }

  if (!regex.test(trimmed)) {
    return {
      ok: false,
      message: t("invalid"),
    };
  }

  if (bannedWords.some((word) => trimmed.toLowerCase().includes(word))) {
    return {
      ok: false,
      message: t("bannedWords"),
    };
  }

  return { ok: true, message: t("valid") };
}
