'use client';

import { XIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { useCreateQueryStrings } from '@/hooks/useCreateQueryStrings';
import { usePathname, useRouter } from '@/i18n/navigation';

import { DebouncedInput } from './DebouncedInput';

interface SearchBarProps {
  queryKey: string;
  placeholder: string;
  debounce?: number;
  tableFirstPage: () => void;
  className?: string;
}

export function SearchBar({
  queryKey,
  placeholder = 'Search...',
  debounce = 500,
  tableFirstPage,
  className,
}: SearchBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createParams = useCreateQueryStrings();

  const [input, setInput] = useState(searchParams.get(queryKey) ?? '');

  const updateQuery = (value: string) => {
    const trimmedValue = value.trim();
    tableFirstPage();
    createParams({
      router,
      pathname,
      params: [
        { name: queryKey, value: trimmedValue },
        { name: 'page', value: '1' },
      ],
    });
  };

  const searchCancel = () => {
    setInput('');
    tableFirstPage();
    createParams({
      router,
      pathname,
      params: [
        { name: queryKey, value: '' },
        { name: 'page', value: '1' },
      ],
    });
  };

  return (
    <div className="focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] relative">
      <DebouncedInput
        className={className}
        value={input}
        debounce={debounce}
        onChange={(value) => {
          const val = String(value);
          setInput(val);
          updateQuery(val);
        }}
        placeholder={placeholder}
      />
      <Button
        size="icon"
        className="absolute top-1/2 right-1 h-7 w-7 -translate-y-1/2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        type="button"
        variant="ghost"
        onClick={searchCancel}
      >
        <XIcon className="size-4" />
        <span className="sr-only">Clear</span>
      </Button>
    </div>
  );
}
