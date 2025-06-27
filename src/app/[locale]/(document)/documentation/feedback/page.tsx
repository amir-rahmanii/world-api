import type { Metadata } from "next";

import { getTranslations } from "next-intl/server";
import React from "react";

import LoginButton from "@/components/parts/Profile/LoginButton";
import { getUser } from "@/supabase/getUser";

import FeedbackForm from "./_components/FeedbackForm";

export const metadata: Metadata = {
  title: " وب سرویس اطلاعات کشورها | مستندات | بازخورد",
};

export default async function FeedbackPage() {
  const t = await getTranslations("documentationPage.feedbackPage");
  const user = await getUser();
  return (
    <div>
      <h1>{t("title")}</h1>
      <section className="flex flex-col gap-10">
        <p>{t("intro")}</p>
        {!user ? (
          <div className="flex gap-4">
            <p>{t("loginPrompt")}</p>
            <LoginButton />
          </div>
        ) : (
          <FeedbackForm />
        )}
      </section>
    </div>
  );
}
