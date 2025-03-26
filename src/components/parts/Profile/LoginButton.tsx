"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSignInGithub, useSignInGoogle } from "@/supabase/useSignIn";
import React from "react";

import GithubIcon from "../../icons/github.svg";
import GoogleIcon from "../../icons/google.svg";
import { Button } from "../../ui/button";

export default function LoginButton() {
  const { signInGithub } = useSignInGithub();
  const { signInGoogle } = useSignInGoogle();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">ثبت نام / ورود</Button>
      </DialogTrigger>
      <DialogContent className="tablet:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ثبت نام / ورود</DialogTitle>
          <div className="flex flex-col gap-6 mt-6">
            <Button
              size="lg"
              className="w-full"
              variant="default"
              onClick={signInGithub}
            >
              گیت هاب
              <GithubIcon />
            </Button>
            <Button
              size="lg"
              className="w-full"
              variant="default"
              onClick={signInGoogle}
            >
              گوگل
              <GoogleIcon />
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
