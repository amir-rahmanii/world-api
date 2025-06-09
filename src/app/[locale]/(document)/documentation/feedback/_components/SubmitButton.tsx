"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  submitLabel: string;
  loadingLabel: string;
}

export function SubmitButton({ submitLabel, loadingLabel }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? loadingLabel : submitLabel}
    </Button>
  );
}
