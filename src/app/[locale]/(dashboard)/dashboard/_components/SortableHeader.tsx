'use client';

import { ArrowUpDown } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { useCreateQueryStrings } from '@/hooks/useCreateQueryStrings';
import { usePathname, useRouter } from '@/i18n/navigation';

export const SortableHeader = () => {
  const createParams = useCreateQueryStrings();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSort = () => {
    const currentOrder = searchParams.get('order');
    const newOrder = currentOrder === 'asc' ? 'desc' : 'asc';
    createParams({
      router,
      pathname,
      params: [{ name: 'order', value: newOrder }],
    });
  };

  return (
    <Button className="bg-accent" variant="ghost" onClick={handleSort}>
      Created_at
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};
