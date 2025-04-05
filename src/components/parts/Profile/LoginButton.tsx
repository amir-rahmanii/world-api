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

interface LoginButtonProps {
  githubLabel: string;
  mainLabel: string;
  googleLabel: string;
}

export default function LoginButton({
  githubLabel,
  mainLabel,
  googleLabel,
}: LoginButtonProps) {
  const { signInGithub } = useSignInGithub();
  const { signInGoogle } = useSignInGoogle();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{mainLabel}</Button>
      </DialogTrigger>
      <DialogContent className="tablet:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mainLabel}</DialogTitle>
          <div className="flex flex-col gap-6 mt-6">
            <Button
              size="lg"
              className="w-full"
              variant="default"
              onClick={signInGithub}
            >
              <span className="translate-y-0.5">{githubLabel}</span>

              <GithubIcon />
            </Button>
            <Button
              size="lg"
              className="w-full"
              variant="default"
              onClick={signInGoogle}
            >
              <span className="translate-y-0.5">{googleLabel}</span>
              <GoogleIcon />
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
