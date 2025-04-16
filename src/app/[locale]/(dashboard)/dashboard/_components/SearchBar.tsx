"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { DebouncedInput } from "./DebouncedInput";

export function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [input, setInput] = useState(searchParams.get("q") ?? "");

  const updateQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <DebouncedInput
      className="w-[300px]"
      value={input}
      debounce={500}
      onChange={(value) => {
        const val = String(value);
        setInput(val);
        updateQuery(val);
      }}
      placeholder="Search Api-key"
    />
  );
}
