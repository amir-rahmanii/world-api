"use client";

import GithubIcon from "@/assets/icons/shared/github.svg";
import GoogleIcon from "@/assets/icons/shared/google.svg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSignIn } from "@/supabase/useSignIn";
import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "../../ui/button";

export default function LoginButton() {
  const t = useTranslations("auth");
  const { signIn } = useSignIn();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{t("signUpAndLogin")}</Button>
      </DialogTrigger>
      <DialogContent className="tablet:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("signUpAndLogin")}</DialogTitle>
          <div className="flex flex-col gap-6 mt-6">
            <Button
              size="lg"
              className="w-full"
              variant="default"
              onClick={() => signIn("github")}
            >
              <span className="translate-y-0.5">{t("github")}</span>

              <GithubIcon />
            </Button>
            <Button
              size="lg"
              className="w-full"
              variant="default"
              onClick={() => signIn("google")}
            >
              <span className="translate-y-0.5">{t("google")}</span>
              <GoogleIcon />
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
