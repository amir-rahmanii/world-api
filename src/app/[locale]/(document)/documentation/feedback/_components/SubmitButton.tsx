'use client';

import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';

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
