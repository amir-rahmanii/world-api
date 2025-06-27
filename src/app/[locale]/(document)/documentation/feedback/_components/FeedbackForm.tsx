"use client";

import { useTranslations } from "next-intl";
import React, { useActionState } from "react";

import { cn } from "@/lib/utils";

import { createFeedback } from "../actions";
import { SubmitButton } from "./SubmitButton";

export default function FeedbackForm() {
  const t = useTranslations("documentationPage.feedbackPage");
  const [state, action] = useActionState(createFeedback, {
    message: "",
    ok: false,
  });

  return (
    <form className="flex flex-col gap-3 items-start" action={action}>
      <label htmlFor="feedback">{t("feedbackLabel")}</label>
      <textarea
        required
        className="w-full outline outline-accent focus:outline-foreground rounded-xl py-2 px-3"
        id="feedback"
        maxLength={500}
        minLength={10}
        name="feedback"
        inputMode="text"
        placeholder={t("feedbackPlaceholder")}
        rows={4}
      />
      <p
        className={cn(
          "text-sm",
          state.ok ? "text-green-500/50" : "text-red-500/50",
        )}
      >
        {state.message}
      </p>
      <SubmitButton submitLabel={t("submit")} loadingLabel={t("submitting")} />
    </form>
  );
}
