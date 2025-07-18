'use client';
import { ClipboardCheck, Copy } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const t = useTranslations('codeBlock.copy');
  const { copyToClipboard, copied } = useCopyToClipboard(text);

  return (
    <Button
      className="absolute top-auto right-0"
      variant="default"
      onClick={copyToClipboard}
    >
      {copied ? (
        <ClipboardCheck className="size-4" />
      ) : (
        <Copy className="size-4" />
      )}
      <span className="desktop:block hidden">
        {copied ? t('copied') : t('copyToClipboard')}
      </span>
    </Button>
  );
}
