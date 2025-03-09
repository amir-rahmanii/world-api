import Github from "@/components/icons/github.svg";
import React from "react";

import { Button } from "../../ui/button";

export default function GithubAuth() {
  return (
    <Button variant="default">
      <span>ورود با گیت هاب</span>
      <Github />
    </Button>
  );
}
