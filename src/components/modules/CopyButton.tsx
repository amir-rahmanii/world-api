"use client";
import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { ClipboardCheck, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const { copyToClipboard, copied } = useCopyToClipboard(text);

  return (
    <Button className={className} variant="default" onClick={copyToClipboard}>
      {copied ? (
        <ClipboardCheck className="size-4" />
      ) : (
        <Copy className="size-4" />
      )}
      <span className="hidden desktop:block">
        {copied ? "کپی شد!" : "کپی در کلیپ‌بورد"}
      </span>
    </Button>
  );
}
