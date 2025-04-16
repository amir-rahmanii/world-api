"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { DebouncedInput } from "./DebouncedInput";

interface SearchBarProps {
  queryKey: string;
  placeholder: string;
  debounce?: number;
  tableFirstPage: () => void;
  className?: string;
}

export function SearchBar({
  queryKey,
  placeholder = "Search...",
  debounce = 500,
  tableFirstPage,
  className,
}: SearchBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [input, setInput] = useState(searchParams.get(queryKey) ?? "");

  const updateQuery = (value: string) => {
    const trimmedValue = value.trim();
    const params = new URLSearchParams(searchParams.toString());

    if (trimmedValue) {
      params.set(queryKey, trimmedValue);
    } else {
      params.delete(queryKey);
    }
    params.set("page", "1");
    tableFirstPage();

    if (params.toString() !== searchParams.toString()) {
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
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
  );
}
