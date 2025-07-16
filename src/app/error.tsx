'use client';
import { Button } from '@/components/ui/button';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1>{error.message}</h1>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
