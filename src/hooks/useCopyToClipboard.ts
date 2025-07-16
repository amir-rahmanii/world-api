'use client';
import { useCallback, useState } from 'react';

export const useCopyToClipboard = (text: string) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  }, [text]);

  return { copyToClipboard, copied };
};
