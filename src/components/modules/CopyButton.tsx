"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button className={className} variant="default" onClick={copyToClipboard}>
      <Copy className="size-4" />
      <span className="hidden desktop:block">
        {copied ? "کپی شد!" : "کپی در کلیپ‌بورد"}
      </span>
    </Button>
  );
}
