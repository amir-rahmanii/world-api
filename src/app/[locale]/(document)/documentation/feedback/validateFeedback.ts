import { getTranslations } from "next-intl/server";

import { bannedWords } from "@/constants/bannedWord.constant";

export interface ValidationResult {
  ok: boolean;
  message: string;
}

const regex = /^.{10,500}$/su;

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
