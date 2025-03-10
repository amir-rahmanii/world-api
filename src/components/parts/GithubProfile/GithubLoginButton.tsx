"use client";

import React from "react";

import { useSignIn } from "../../../supabase/useSignIn";
import GithubIcon from "../../icons/github.svg";
import { Button } from "../../ui/button";

export default function GithubLoginButton() {
  const { signIn } = useSignIn();

  return (
    <Button variant="default" onClick={signIn}>
      ورود با گیت هاب
      <GithubIcon />
    </Button>
  );
}
